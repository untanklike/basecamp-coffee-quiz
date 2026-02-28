import { useEffect } from "react";
import confetti from "canvas-confetti";
import { PersonalityConfig } from "../data/quiz-config";

interface QuizResultProps {
  personality: PersonalityConfig;
  onRetake: () => void;
}

export default function QuizResult({ personality, onRetake }: QuizResultProps) {
  useEffect(() => {
    // Warm confetti burst on result reveal
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#b45309", "#f3e4cc", "#fbbf24", "#fdf6ee", "#d97706"],
    });
  }, []);

  const shareText = `I'm a ${personality.name}! My coffee: ${personality.drink}. What's yours? ☕`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "What's Your Coffee Personality?",
          text: shareText,
          url: window.location.href,
        });
      } catch {
        // User cancelled share
      }
    } else {
      await navigator.clipboard.writeText(`${shareText} ${window.location.href}`);
      alert("Copied to clipboard! Paste it anywhere to share.");
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Result card */}
      <div
        className="rounded-[20px] p-10 text-center mb-6"
        style={{ backgroundColor: "white", border: "1.5px solid #f3e4cc" }}
      >
        <div className="text-6xl mb-5">{personality.emoji}</div>

        <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{ color: "#b45309", fontFamily: "var(--font-inter)" }}>
          You&apos;re a
        </p>

        <h1
          className="text-4xl mb-3"
          style={{ fontFamily: "var(--font-lora)", color: "#1c1917" }}
        >
          {personality.name}
        </h1>

        <p
          className="text-lg italic mb-8"
          style={{ color: "#78716c", fontFamily: "var(--font-lora)" }}
        >
          &ldquo;{personality.tagline}&rdquo;
        </p>

        {/* Divider */}
        <div className="w-16 h-px mx-auto mb-8" style={{ backgroundColor: "#f3e4cc" }} />

        {/* Coffee recommendation */}
        <p className="text-sm font-medium mb-1" style={{ color: "#b45309", fontFamily: "var(--font-inter)" }}>
          Your coffee
        </p>
        <h2
          className="text-2xl mb-3"
          style={{ fontFamily: "var(--font-lora)", color: "#1c1917" }}
        >
          {personality.drink}
        </h2>
        <p className="text-base leading-relaxed" style={{ color: "#57534e", fontFamily: "var(--font-inter)" }}>
          {personality.drinkDescription}
        </p>
      </div>

      {/* CTA card */}
      <div
        className="rounded-[20px] p-6 text-center mb-4"
        style={{ backgroundColor: "#b45309" }}
      >
        <p className="text-white text-base leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
          {personality.ctaText}
        </p>
        <p className="text-sm mt-2" style={{ color: "#fde68a", fontFamily: "var(--font-inter)" }}>
          Show this screen and get your first one on us. ☕
        </p>
      </div>

      {/* Instagram Stories prompt */}
      <div
        className="rounded-[16px] px-5 py-4 mb-4 text-center"
        style={{ backgroundColor: "#fdf6ee", border: "1.5px solid #f3e4cc" }}
      >
        <p className="text-sm" style={{ color: "#78716c", fontFamily: "var(--font-inter)" }}>
          📸 <strong style={{ color: "#1c1917" }}>Share to Instagram Stories</strong> — screenshot this screen and post it. Tag us <strong style={{ color: "#b45309" }}>@basecampcoffee</strong>
        </p>
      </div>

      {/* Share + retake */}
      <div className="flex gap-3">
        <button
          onClick={handleShare}
          className="flex-1 py-3 rounded-[12px] font-medium transition-all duration-150 hover:opacity-90 active:scale-[0.99]"
          style={{
            backgroundColor: "white",
            border: "1.5px solid #b45309",
            color: "#b45309",
            fontFamily: "var(--font-inter)",
          }}
        >
          Share my result
        </button>
        <button
          onClick={onRetake}
          className="flex-1 py-3 rounded-[12px] font-medium transition-all duration-150 hover:opacity-90 active:scale-[0.99]"
          style={{
            backgroundColor: "white",
            border: "1.5px solid #f3e4cc",
            color: "#78716c",
            fontFamily: "var(--font-inter)",
          }}
        >
          Retake quiz
        </button>
      </div>
    </div>
  );
}
