"use client";

import { useState } from "react";
import {
  questions,
  tiebreakerQuestion,
  personalities,
  PersonalityId,
  AnswerOption,
} from "../data/quiz-config";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";

type Answer = { questionId: string; personality: PersonalityId };
type Phase = "intro" | "quiz" | "tiebreaker" | "result";

function calculateResult(answers: Answer[]): PersonalityId | "tie" {
  const counts: Record<PersonalityId, number> = {
    "bold-adventurer": 0,
    "cozy-classic": 0,
    "sweet-enthusiast": 0,
    "the-savorer": 0,
  };
  for (const answer of answers) {
    counts[answer.personality]++;
  }
  const max = Math.max(...Object.values(counts));
  const winners = (Object.keys(counts) as PersonalityId[]).filter(
    (id) => counts[id] === max
  );
  if (winners.length === 1) return winners[0];
  return "tie";
}

export default function Quiz() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [result, setResult] = useState<PersonalityId | null>(null);

  const handleAnswer = (option: AnswerOption) => {
    const newAnswers = [
      ...answers,
      { questionId: questions[currentQuestionIndex].id, personality: option.personality },
    ];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // All 5 questions answered — calculate
      const outcome = calculateResult(newAnswers);
      if (outcome === "tie") {
        setPhase("tiebreaker");
      } else {
        setResult(outcome);
        setPhase("result");
      }
    }
  };

  const handleTiebreaker = (option: AnswerOption) => {
    // Tiebreaker answer always wins outright
    setResult(option.personality);
    setPhase("result");
  };

  const handleRetake = () => {
    setPhase("intro");
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setResult(null);
  };

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
      style={{ backgroundColor: "#fdf6ee" }}
    >
      {phase === "intro" && (
        <div className="w-full max-w-xl mx-auto text-center">
          <div className="text-5xl mb-6">☕</div>
          <h1
            className="text-4xl mb-4"
            style={{ fontFamily: "var(--font-lora)", color: "#1c1917" }}
          >
            What&apos;s Your Coffee Personality?
          </h1>
          <p
            className="text-lg mb-10 leading-relaxed"
            style={{ color: "#57534e", fontFamily: "var(--font-inter)" }}
          >
            5 quick questions. We&apos;ll match you with the perfect cup — and
            a little something about yourself.
          </p>
          <button
            onClick={() => setPhase("quiz")}
            className="px-10 py-4 rounded-[12px] text-white text-lg font-medium transition-all duration-150 hover:opacity-90 active:scale-[0.99]"
            style={{ backgroundColor: "#b45309", fontFamily: "var(--font-inter)" }}
          >
            Find my coffee personality →
          </button>
          <p
            className="text-sm mt-6"
            style={{ color: "#a8a29e", fontFamily: "var(--font-inter)" }}
          >
            Takes about 60 seconds
          </p>
        </div>
      )}

      {phase === "quiz" && (
        <QuizQuestion
          question={questions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      )}

      {phase === "tiebreaker" && (
        <QuizQuestion
          question={tiebreakerQuestion}
          questionNumber={questions.length}
          totalQuestions={questions.length}
          isTiebreaker={true}
          onAnswer={handleTiebreaker}
        />
      )}

      {phase === "result" && result && (
        <QuizResult personality={personalities[result]} onRetake={handleRetake} />
      )}

      {/* Basecamp footer */}
      <p
        className="mt-12 text-sm"
        style={{ color: "#a8a29e", fontFamily: "var(--font-inter)" }}
      >
        Basecamp Coffee · Pacific Northwest
      </p>
    </main>
  );
}
