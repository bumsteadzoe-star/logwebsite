# Site copy — source of truth

Every string on the site lives here first. Edit here, then reflect into components.
Keep the voice rules from CLAUDE.md: plain, short, declarative, no filler, no
present-tense claims about unshipped features.

---

## Meta

**Page title:** Log — find your next favorite place
**Meta description:** Log learns what you like from the places you go and the people you know, then finds what's next — before you think to search.
**OG image alt:** The Log app showing a personalized feed of recommended places

---

## Hero

**Eyebrow:** BETA IS LIVE
**Headline:** Your next favorite place, *before* you go looking for it.
**Subhead:** Log learns what you like — quietly, in the background.
**Primary CTA:** Get Early Access
**Secondary CTA:** none — removed 2026-07-30 so the hero carries one action, not two.

**Hero visual:** none — text-only, centered, on a very subtle sage-to-white
wash (no photo). Fills the first viewport; a scroll cue at the bottom signals
more content below. Text fades up on load — respects prefers-reduced-motion.
The photo collage that used to live here (two-photo offset + mock rec card)
was moved out into its own "solution" section, positioned after "how it
works" — see below. Reorganized 2026-07-30 per explicit request: hero and
that visual needed to read as two distinct sections, not one merged block.

---

## Section 2 — the problem

**Section label:** THE PROBLEM
**Headline:** Good recommendations shouldn't take *homework*.
**Body:** Good taste is scattered across screenshots, texts, and half-remembered conversations. Log gathers it quietly in the background, so you're not the one doing the collecting.

**Note:** the gap above this section (hero→problem) uses the tighter
`--spacing-section-tight` value now, not the standard `--spacing-section` —
see design-notes.md 2026-08-03.

**Scattered visual (live, 2026-08-03):** four real screenshots, not mock cards
— a Notes app trip itinerary, an Apple Maps saved-places Guide, a saved
Instagram Reel ("How to do Mexico City right — save this"), and an iMessage
voice-memo bubble. Scattered/rotated collage, same as before, just real
content instead of typeset placeholders.

---

## Section — how it works (removed 2026-08-04)

Was three "specimen" columns (numeral + headline + body + an abstract
`.stage-dark` visual per step). Removed entirely per explicit request — not
on the live page anymore. Homepage order is now Hero → Problem → Solution →
Finds on Log → Final CTA. Kept the rest of this entry's history below for
reference only.

The "Section 3 — how it works" entry directly below was already stale before
this removal — it documents an even earlier merged scattered-inputs/glass-card
treatment (see "Section — the solution" further down, which now owns that
visual).

---

## Section 3 — how it works

Grounded in the "what we're building" pitch deck slide: the real mechanism is
scattered inputs (texts, Notes app, saved posts, voice memos, group chats)
consolidating into one feed with match %, friend-attributed tips, and category
tags. This is the site's signature visual — not a 3-icon feature grid.

**Section label:** HOW IT WORKS
**Headline:** Every recommendation already exists. It's just *scattered*.
**Body:** Texts, saved posts, notes, voice memos, group chats — the advice is already out there. Log turns it into one feed built around what you actually like.

**Scattered side (mock fragments, illustrative only):**
- Text: "hey do you have recs for a good ramen spot? feels like a big ask lol"
- Notes app: "Dinner list — Foreign Cinema, that ramen place, the wine bar on 9th…"
- Saved post: "SAVED · Coffee shops to try"
- Voice memo: 0:47

**With Log side (mock app card, illustrative only):**
- Category tag: DINNER
- Place: The tasting counter downtown
- Match: 97% match
- Friend tip: Z avatar — "Zoe — sit at the counter, ask for the off-menu one."

Steps / features (compact captions under the visual, not a separate numbered block):
1. **Discover** — Log picks up on the places you save, visit, and talk about, then surfaces what fits — before you ask.
2. **Share** — Every place you log becomes part of a living map your friends can actually use.
3. **Experience** — When you're ready to go, Log has already done the narrowing down. Booking and trip planning are in development.

---

## Section — the solution

Formerly the hero's photo collage (two-photo offset + mock rec card), moved
here 2026-07-30 to be its own section rather than living inside the hero.
Same visual, new copy giving it its own reason to exist in the page flow —
positioned right after "how it works" explains the mechanism, this section
shows what the result actually looks like.

**Section label:** THE SOLUTION
**Headline:** One place, *already* picked.
**Body:** Not a feed to scroll or a list to compare — just the place Log thinks you'll actually like, and why.

**Visual:** two-photo offset collage (bagel + smoked salmon takeout with a
Sant Ambroeus coffee cup + a museum fashion exhibit) with a soft color glow
behind it, plus two "with Log" mock rec cards (illustrative), updated
2026-08-05 — see design-notes.md:
- Category tag: ACTIVITY (blue) — Place: Museum pop-up — Match: 97% match — Friend tip: Z avatar — "Zoe — a must do before it closes in a few weeks."
- Category tag: CAFE (brown) — Place: Coffee + Bagels — Match: 96% match — Friend tip: M avatar — "Maya — do the Apollo and Sant Ambroeus combo."

---

## Section — who it's for (removed 2026-08-04)

Cut entirely per explicit request, same day it was expanded to full viewport
height. Kept here for history only — not on the live page. Final CTA now
follows directly after "Finds on Log."

---

## Social proof / credibility

*(only claims that are verified — no invented metrics)*

No dedicated section — Log doesn't have verified user numbers or named
endorsements yet. The "how it works" mock app card carries an illustrative
example instead (clearly a UI mockup, not a claimed testimonial).

---

## Final CTA

**Headline:** Have you *logged* it yet?
**Body:** Join the beta and let Log start learning in the background.
**Button:** Get Early Access

---

## Footer

**Tagline:** Built by people who love finding new places.
**Links:** Home / Partnerships / Contact
**Contact:** zoe@logsocial.app
**Legal:** Log Social, LLC

---

## Empty / error states

**404 headline:** This page hasn't been logged yet.
**404 body:** The place you're looking for doesn't exist here.
**Form error:** Something went wrong. Try again in a moment.
**Form success:** You're on the list. We'll be in touch.

---

## Partnerships page (businesses & universities)

**Eyebrow:** FOR BUSINESSES & UNIVERSITIES
**Headline:** Partnering with the places people already *love*.
**Body:** Log is built on real recommendations from real people. Businesses and universities help make that map richer.

**Segment 1 — Businesses / places:**
Label: 01 / BUSINESSES
Headline: Get found by people who were already coming.
Body: When someone's friend has already logged your place, Log can surface it at the right moment. Partnership tools for offers and booking are in development.

**Segment 2 — Universities:**
Label: 02 / UNIVERSITIES
Headline: Where one class builds a shared map.
Body: Universities are where taste spreads fastest. Log gives incoming and current students a living map of a place, built by the students who already know it.

**Contact form intro:** Tell us about your business or school.
**Contact form fields:** Name / Organization / Email / Message
**Submit button:** Send

---

## Waitlist popup

**Headline:** Join the beta.
**Body:** Be first to try Log. We'll email you when your spot opens up.
**Form fields:** First name / Last name / Email
**Submit button:** Get Early Access
**Success state:** You're on the list. We'll be in touch.

Note: every site-wide trigger/CTA that opens this modal or completes the final
CTA now reads "Get Early Access" (renamed 2026-07-30 from "Join the Waitlist").
The modal's own headline ("Join the beta.") wasn't part of that rename request
and is unchanged.

**Current state (2026-08-05, see design-notes.md for the full history) —**
this section above predates the real Supabase-backed rebuild and is kept for
history only. Actual current copy:
- **Headline:** Always be in the know.
- **Body:** Sign up for early access.
- **Form fields:** Your name / Phone number (with a country-code selector,
  US default, ~20 countries, added 2026-08-05 for international signups) /
  What city do you live in?
- **Submit button:** Get on the list →
- **Referral screen headline:** You're on the list!
- **Referral screen body:** Want in first? Refer 2 friends with great taste.
- **SMS referral message** (sent via `sms:` deep link): "You have great
  taste! Sign up for Log, know where to go and what to do based on what you
  and your network love: {link}"
