import { Question, AnswerOption } from "../data/quiz-config";

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  isTiebreaker?: boolean;
  onAnswer: (option: AnswerOption) => void;
}

export default function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  isTiebreaker = false,
  onAnswer,
}: QuizQuestionProps) {
  const progress = (questionNumber / totalQuestions) * 100;

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2" style={{ color: "#b45309", fontFamily: "var(--font-inter)" }}>
          <span>{isTiebreaker ? "One more..." : `Question ${questionNumber} of ${totalQuestions}`}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 rounded-full" style={{ backgroundColor: "#f3e4cc" }}>
          <div
            className="h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, backgroundColor: "#b45309" }}
          />
        </div>
      </div>

      {/* Question card */}
      <div
        className="rounded-[20px] p-8 mb-6"
        style={{ backgroundColor: "white", border: "1.5px solid #f3e4cc" }}
      >
        {isTiebreaker && (
          <p className="text-sm font-medium mb-3" style={{ color: "#b45309", fontFamily: "var(--font-inter)" }}>
            One more to settle it...
          </p>
        )}
        <h2
          className="text-2xl leading-snug"
          style={{ fontFamily: "var(--font-lora)", color: "#1c1917" }}
        >
          {question.text}
        </h2>
      </div>

      {/* Answer options */}
      <div className="flex flex-col gap-3">
        {question.options.map((option) => (
          <button
            key={option.personality}
            onClick={() => onAnswer(option)}
            className="w-full text-left px-5 py-4 rounded-[12px] transition-all duration-150 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            style={{
              backgroundColor: "white",
              border: "1.5px solid #f3e4cc",
              fontFamily: "var(--font-inter)",
              color: "#1c1917",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#b45309";
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#fdf6ee";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#f3e4cc";
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "white";
            }}
          >
            <span className="text-xl mr-3">{option.emoji}</span>
            <span className="text-base">{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
