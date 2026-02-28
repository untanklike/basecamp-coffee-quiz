# Coffee Personality Quiz — Requirements

## Personality → Coffee Pairings

| Personality | Coffee | Tagline |
|-------------|--------|---------|
| **Bold Adventurer** | Double Espresso | "You live for intensity" |
| **Cozy Classic** | Medium Roast Drip | "Comfort in every cup" |
| **Sweet Enthusiast** | Caramel Latte | "Life's too short for bitter" |
| **The Savorer** | Mocha with Whip | "You know how to treat yourself" |

> Note: "Indulgent Treat" renamed to **"The Savorer"** — describes the person, not the drink. All four names should feel like compliments.

---

## Result Display Style

**Single recommendation** — "You're a Bold Adventurer! Your coffee: Double Espresso."

No percentage breakdown. Clean, decisive, shareable.

---

## Result Screen Requirements

Each result page must include:
1. Personality name + tagline
2. Coffee recommendation (drink name + short description)
3. **Call to action** — prompt to visit Basecamp, redeem a first drink, or share the result
4. Share button — result must be shareable (Open Graph tags for social preview)

---

## Tie-Breaking Strategy

With 5 questions and 4 personalities, ties are mathematically common. When a tie occurs:

**Show a 6th tiebreaker question** — "One more to settle it..." — and use that answer to break the tie. This is better UX than silently defaulting to whichever personality was defined first in code.

The tiebreaker question:
> "Last call — what's your coffee order when you're not thinking about it?"
- ☕ Whatever's strongest → Bold Adventurer
- 🫖 Whatever I always get → Cozy Classic
- 🍮 Whatever sounds most delicious right now → Sweet Enthusiast
- 🍫 Whatever feels like a little reward → The Savorer

---

## Visual Style

**Warm & Cozy** (Style 4)
- Background: `#fdf6ee` (warm cream)
- Cards: white with `#f3e4cc` border
- Accent color: `#b45309` (warm brown)
- Typography: Lora (serif) for headings, Inter for body
- Border radius: 20px cards, 12px options
- Progress bar at top of each question

---

## Images & Icons

- **Images:** Skip for now — can add later during iteration
- **Icons:** Yes — emoji icons next to each answer option

---

## Quiz Questions

### Q1: What does your perfect Sunday morning look like?
- 🏔️ Up before dawn, first one on the hiking trail → **Bold Adventurer**
- 📚 Slow start, books and blankets all day → **Cozy Classic**
- 🧁 Treating yourself to a fancy brunch → **Sweet Enthusiast**
- 🛁 Long bath, candles, full self-care routine → **The Savorer**

### Q2: How do you take your vacations?
- 🎒 Backpacking, no plan, see where the day takes you → **Bold Adventurer**
- 🏡 Renting a cottage, nowhere to be → **Cozy Classic**
- 🗺️ Foodie trip with a carefully curated restaurant list → **Sweet Enthusiast**
- 🏨 Luxury hotel, spa included — you've earned it → **The Savorer**

### Q3: It's Friday night. What are you doing?
- 🧗 Trying something new — rock climbing, salsa class, whatever → **Bold Adventurer**
- 🎬 Movie night at home in your most comfortable clothes → **Cozy Classic**
- 🍹 Cocktails with friends at a cute new bar → **Sweet Enthusiast**
- 🍕 Ordering your favorite takeout and doing exactly what you want → **The Savorer**

### Q4: What's your morning routine like?
- ⏰ Up early and moving — the day won't live itself → **Bold Adventurer**
- ☁️ Slow and quiet — you ease in on your own terms → **Cozy Classic**
- 💄 Getting ready is part of the ritual — you enjoy the process → **Sweet Enthusiast**
- 🛋️ You take your time, because rushing is overrated → **The Savorer**

### Q5: A barista slides a mystery drink across the counter and says "trust me." What do you do?
- 🚀 You take a sip before they finish the sentence → **Bold Adventurer**
- 🤔 You ask one or two questions, then go for it → **Cozy Classic**
- 🌸 You want to know what's in it — if it sounds amazing, you're in → **Sweet Enthusiast**
- 😏 You take a moment, but honestly if it smells incredible you're sold → **The Savorer**

---

## Scoring Logic Notes (for developer)

- Store each answer as `{ questionId, personality }` — not just score counters
- Final result = personality with highest count
- If tie: show tiebreaker question (Q6 above), use that answer to resolve
- Never silently break ties by insertion order — this creates a hidden bug where one personality always wins
- All personality config (name, product, tagline, description) should live in a single config object, not scattered across the code

---

## Tech Stack

- **Framework:** Next.js
- **Language:** JavaScript
- **Deployment target:** Vercel
