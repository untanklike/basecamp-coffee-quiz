# Push Notification Timing Fix

**Status:** Required before reactivation campaign sends

---

## Problem

Members are receiving push notifications at 6am local time. Wrong moment — creates a negative association and will poison the reactivation campaign before it starts.

## Fix

Audit the current send schedule in the loyalty platform and reschedule all push notifications to **9–11am local time, Tuesday–Thursday**.

This is peak "thinking about coffee" time and aligns with pre-visit decision windows.

## Confirmation Required

Whoever manages the loyalty platform (Toast, Paytronix, Thanx, or equivalent) must confirm the timing change is live before the reactivation campaign to 10,300 dormant members is sent.

---

*Flagged: February 28, 2026*
*Blocking: Reactivation campaign send*
