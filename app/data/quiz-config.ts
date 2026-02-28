export type PersonalityId = "bold-adventurer" | "cozy-classic" | "sweet-enthusiast" | "the-savorer";

export interface PersonalityConfig {
  id: PersonalityId;
  name: string;
  tagline: string;
  drink: string;
  drinkDescription: string;
  emoji: string;
  ctaText: string;
}

export interface AnswerOption {
  emoji: string;
  text: string;
  personality: PersonalityId;
}

export interface Question {
  id: string;
  text: string;
  options: AnswerOption[];
}

// All personality config lives here — edit copy in one place
export const personalities: Record<PersonalityId, PersonalityConfig> = {
  "bold-adventurer": {
    id: "bold-adventurer",
    name: "Bold Adventurer",
    tagline: "You live for intensity",
    drink: "Double Espresso",
    drinkDescription: "Two shots, no apologies. Pure, concentrated flavor for someone who attacks the day head-on.",
    emoji: "🏔️",
    ctaText: "Come claim your Double Espresso at your local Basecamp.",
  },
  "cozy-classic": {
    id: "cozy-classic",
    name: "Cozy Classic",
    tagline: "Comfort in every cup",
    drink: "Medium Roast Drip",
    drinkDescription: "Smooth, reliable, deeply satisfying. The kind of coffee you actually look forward to every morning.",
    emoji: "📚",
    ctaText: "Come settle in with a Medium Roast at your local Basecamp.",
  },
  "sweet-enthusiast": {
    id: "sweet-enthusiast",
    name: "Sweet Enthusiast",
    tagline: "Life's too short for bitter",
    drink: "Caramel Latte",
    drinkDescription: "Creamy, sweet, beautifully crafted. Coffee as an experience, not just a caffeine delivery system.",
    emoji: "🧁",
    ctaText: "Come treat yourself to a Caramel Latte at your local Basecamp.",
  },
  "the-savorer": {
    id: "the-savorer",
    name: "The Savorer",
    tagline: "You know how to treat yourself",
    drink: "Mocha with Whip",
    drinkDescription: "Rich, indulgent, worth every sip. You don't rush the good things — and neither does this drink.",
    emoji: "🛁",
    ctaText: "Come savor a Mocha with Whip at your local Basecamp.",
  },
};

export const questions: Question[] = [
  {
    id: "q1",
    text: "What does your perfect Sunday morning look like?",
    options: [
      { emoji: "🏔️", text: "Up before dawn, first one on the hiking trail", personality: "bold-adventurer" },
      { emoji: "📚", text: "Slow start, books and blankets all day", personality: "cozy-classic" },
      { emoji: "🧁", text: "Treating yourself to a fancy brunch", personality: "sweet-enthusiast" },
      { emoji: "🛁", text: "Long bath, candles, full self-care routine", personality: "the-savorer" },
    ],
  },
  {
    id: "q2",
    text: "How do you take your vacations?",
    options: [
      { emoji: "🎒", text: "Backpacking, no plan, see where the day takes you", personality: "bold-adventurer" },
      { emoji: "🏡", text: "Renting a cottage, nowhere to be", personality: "cozy-classic" },
      { emoji: "🗺️", text: "Foodie trip with a carefully curated restaurant list", personality: "sweet-enthusiast" },
      { emoji: "🏨", text: "Luxury hotel, spa included — you've earned it", personality: "the-savorer" },
    ],
  },
  {
    id: "q3",
    text: "It's Friday night. What are you doing?",
    options: [
      { emoji: "🧗", text: "Trying something new — rock climbing, salsa class, whatever", personality: "bold-adventurer" },
      { emoji: "🎬", text: "Movie night at home in your most comfortable clothes", personality: "cozy-classic" },
      { emoji: "🍹", text: "Cocktails with friends at a cute new bar", personality: "sweet-enthusiast" },
      { emoji: "🍕", text: "Ordering your favorite takeout and doing exactly what you want", personality: "the-savorer" },
    ],
  },
  {
    id: "q4",
    text: "What's your morning routine like?",
    options: [
      { emoji: "⏰", text: "Up early and moving — the day won't live itself", personality: "bold-adventurer" },
      { emoji: "☁️", text: "Slow and quiet — you ease in on your own terms", personality: "cozy-classic" },
      { emoji: "💄", text: "Getting ready is part of the ritual — you enjoy the process", personality: "sweet-enthusiast" },
      { emoji: "🛋️", text: "You take your time, because rushing is overrated", personality: "the-savorer" },
    ],
  },
  {
    id: "q5",
    text: "A barista slides a mystery drink across the counter and says \"trust me.\" What do you do?",
    options: [
      { emoji: "🚀", text: "You take a sip before they finish the sentence", personality: "bold-adventurer" },
      { emoji: "🤔", text: "You ask one or two questions, then go for it", personality: "cozy-classic" },
      { emoji: "🌸", text: "You want to know what's in it — if it sounds amazing, you're in", personality: "sweet-enthusiast" },
      { emoji: "😏", text: "You take a moment, but honestly if it smells incredible you're sold", personality: "the-savorer" },
    ],
  },
];

// Tiebreaker shown only when there's a tie after Q5
// Rule: tiebreaker answer always wins outright, regardless of which personalities tied
export const tiebreakerQuestion: Question = {
  id: "tiebreaker",
  text: "Last call — what's your coffee order when you're not thinking about it?",
  options: [
    { emoji: "☕", text: "Whatever's strongest", personality: "bold-adventurer" },
    { emoji: "🫖", text: "Whatever I always get", personality: "cozy-classic" },
    { emoji: "🍮", text: "Whatever sounds most delicious right now", personality: "sweet-enthusiast" },
    { emoji: "🍫", text: "Whatever feels like a little reward", personality: "the-savorer" },
  ],
};
