# Basecamp Coffee — Project Context

## The Situation

You're the new manager at **Basecamp Coffee**, a regional chain with 45 locations across the Pacific Northwest (Seattle, Portland, Boise). You inherited a failing loyalty program from the previous manager and have **3 months to turn it around** before leadership kills it.

The $40K investment is on the line. So is your reputation.

---

## The Company

- 45 locations, Pacific Northwest
- Founded 2015, profitable but growth has slowed
- Known for: locally-roasted beans, community spaces, supporting local artists, warm authentic vibe
- NPS: 67 (people genuinely love the in-store experience)

---

## The Loyalty Program: Basecamp Rewards

**How it works:**
- 1 point per $1 spent
- 100 pts = free drink, 200 pts = free food item
- Tiers: Trailblazer (0–199), Pioneer (200–499), Summit (500+) ← "Explorer" retired to avoid naming collision with quiz personality types
- Cannot change the fundamental points structure (legal/accounting constraint)
- Badges and challenge rewards must be vetted by legal/accounting before any monetary value is assigned

**Current metrics (vs. targets):**
| Metric | Current | Target | Month 1 Check |
|--------|---------|--------|---------------|
| Monthly active users | 2,100 | 8,000 | 3,500 |
| 30-day retention | 31% | 60% | 40% |
| Avg visits/month | 2.3 | 4.0 | 2.8 |
| Redemption rate | 18% | 40% | 25% |

**Failure definition:** If Month 1 check-in shows fewer than 3,000 MAU and retention below 35%, escalate to Dana immediately. Do not drift — define a stop/pivot decision by day 45.

**Dormant member opportunity:** 10,300 members who signed up but haven't engaged in 30+ days. Reactivation push (quiz invite) costs nothing and could show early results within 2 weeks of launch. Do this first.

---

## The Problem

The program has no personality. It's purely transactional — and that's exactly the problem.

- People sign up, visit 2–3 times, then disappear (not angry, just indifferent)
- 89% of members stuck at lowest tier; tier system is decorative, not motivating
- App engagement collapsed 67% over 6 months
- ROI dropped from 1.8 to 0.5 — approaching negative territory
- All 10 past campaigns were variations of "more points" — never addressed root cause
- Customer quote that says it all: *"Your coffee has personality. Your rewards program doesn't."*
- Proof point: Valentine's Day campaign drove 23% scan lift — then collapsed back to baseline the next day. Transactional campaigns don't change behavior.

**Competitors doing it better:**
- Dutch Bros → identity and belonging (stickers, "Broista" culture, remembering names)
- Starbucks → gamification and personalization (challenges, recommendations, progress bars)
- Roast & Co. → expertise and exclusivity (limited releases, coffee classes)

**Known operational issue:** Current push notifications have bad timing (members reporting 6am pings). Audit and fix notification schedule before launching anything new — bad notifications will poison the new program before it starts.

---

## The Solution: Coffee Personality Quiz

Based on research synthesis and advisory team review, the answer is a **Coffee Personality Quiz**.

**Why it works:**
- Customers constantly ask baristas "What should I try?" — the quiz is that conversation in app form
- Gives members an identity, not just a points balance
- No competitor does personality-based loyalty — it's a genuine market gap
- Shareable results = organic acquisition (quiz result is shareable; "earn 100 points" is not)
- Buildable within existing app framework — **unconfirmed, must validate in week 1**

**The three-part approach (all needed together):**
1. **Start with identity** — Quiz as the emotional front door. New member experience: take quiz → get personality type → receive tailored first recommendation. Not "You have 0 points."
2. **Build something shareable** — Static result page with Open Graph tags (MVP). Result card must be beautiful enough that someone actually wants to post it.
3. **Discovery logic over points logic** — "Try 3 single-origins this month" (quest) vs "spend $75" (chore). Requires item-level POS data — must validate before committing to this mechanic.

**Personality type system (placeholder — needs creative work):**
Working names: The Ritualist, The Adventurer, The Purist, The Social Drinker. Final names must feel like Basecamp — warm and specific, not generic personality-quiz archetypes. Each type needs: a name, a flavor profile, 2–3 recommended drinks, and a barista talking point.

**What happens to the tier system:** Tiers remain as a background accounting mechanism. The personality system sits on top as the primary identity. Members see their personality type first, tier second (or not at all in the main UI).

**The onboarding moment:** When a new member signs up (in-store QR or app), the quiz is the first screen — not a points balance. Target: completable in under 90 seconds. Tone: warm and curious, like a barista asking what you're in the mood for. Result reveal should feel like a small delight, not a survey confirmation.

---

## Key Stakeholders

- **Dana** — Your manager, Marketing Director. Supportive but under pressure from above.
- **Leadership/CFO** — Skeptical of ROI. Needs 30/60/90 day measurable milestones, not vibes. Wants dollar-value translation of metric improvements.
- **CEO** — Wants "innovation" but unclear on specifics.
- **Store Managers** — Frustrated. Want something baristas can actually explain in two sentences.
- **Baristas** — Ground truth. Finalized pitch: *"Have you tried our coffee personality quiz? It takes 90 seconds and tells you exactly what to order — we can pull it up right here."* Each personality type has a recommended drink in the quiz config.

---

## Brand Voice

**We are:** Warm, authentic, community-focused, knowledgeable, playful
**We are NOT:** Corporate, over-the-top enthusiastic, preachy, generic

**Key language:**
- Say "community" not "customers"
- Say "baristas" not "team members"
- Say "your local Basecamp" not "our stores"
- Say "coffee ritual" not "purchase behavior"
- Greet with "Hey there!" — never "Dear Valued Customer"

---

## Technical Prerequisites (Resolve Week 1)

These gate everything else. Do not skip.

1. **App platform audit** — What can actually be customized? If it's a third-party loyalty platform (Toast, Paytronix, Thanx, etc.), confirm whether custom quiz flows and profile fields are possible without a paid upgrade.
2. **POS data audit** — Does the POS send item-level data to the loyalty system, or just transaction totals? Discovery challenges depend on this. If only totals, redesign the challenge mechanic before committing to it.
3. **Dev capacity confirmation** — Get written confirmation from the dev team that the build fits within existing sprint capacity and the 90-day window.
4. **Notification audit** — Fix the push notification timing problem before launch.
5. **Analytics check** — Confirm event tracking exists (Mixpanel, Amplitude, Firebase, etc.) and can be extended to track: quiz starts, quiz completions, challenge accepts, challenge completions, share events.

---

## What's Been Done

- [x] Analyzed inherited chaos (member data, competitor research, customer feedback, old campaigns)
- [x] Built comprehensive research synthesis (`analysis/comprehensive-research-synthesis.md`)
- [x] Got advisory team review — Exec, Product Designer, Barista Lead, Tech Advisor (`reviews/synthesis-feedback.md`)
- [x] Identified the solution: Coffee Personality Quiz
- [x] Created CLAUDE.md with full project context
- [x] Defined personality type system — Bold Adventurer, Cozy Classic, Sweet Enthusiast, The Savorer (`quiz-project/REQUIREMENTS.md`)
- [x] Built full quiz app — 6 questions, tiebreaker logic, confetti result reveal, share button (`quiz-project/`)
- [x] Deployed quiz live at `coffee-quiz-basecamp.vercel.app`
- [x] Connected to GitHub (`untanklike/basecamp-coffee-quiz`) with auto-deploy via Vercel
- [x] Drafted reactivation campaign — push notification + email (`company-context/reactivation-campaign.md`)
- [x] Drafted 90-day CFO milestone deck with dollar-value translation (`analysis/cfo-90-day-milestone-deck.md`)
- [x] Documented push notification timing fix (`company-context/push-notification-fix.md`)
- [x] Finalized barista two-sentence pitch (`company-context/barista-pitch.md`)

## Next Steps

**Needs loyalty platform team:**
- [ ] Confirm push notification timing fixed (currently 6am — must move to 9–11am Tue–Thu)
- [ ] Send reactivation campaign to 10,300 dormant members (blocked on above)

**Needs dev team:**
- [ ] App platform audit — can quiz embed in loyalty app without paid upgrade?
- [ ] POS data audit — item-level data or transaction totals? (gates discovery challenges)
- [ ] Written dev capacity confirmation for full rollout

**Needs CFO:**
- [ ] March 15 go/no-go decision for full 45-location rollout

**Needs pilot data (Day 60–75):**
- [ ] Quiz completion rate at pilot locations
- [ ] Repeat visit rate
- [ ] Redemption rate

**Still to build (contingent on POS audit):**
- [ ] Challenge engine — "Try 3 single-origins this month" discovery mechanic

---

## Project Files

```
company-context/       — Brand voice, scenario, loyalty program details
inherited-chaos/       — Previous manager's notes, customer feedback, member data
analysis/              — Research synthesis from agent analysis
reviews/               — Advisory board feedback
```
