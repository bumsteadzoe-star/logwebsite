# Design notes

Running log of directional decisions and rejected approaches. Claude reads this at the
start of a session. Append here when something is decided or ruled out — the point is to
stop re-litigating settled questions and re-trying things that already failed.

Format: date, what, why.

---

## Locked decisions

**[date] — Palette locked**
Text #140E18, bg #F5F3EC, primary #172D06, secondary #4A7226, accent #5A5F50.
Sourced from Realtime Colors system.

**[date] — Type pairing locked**
Playfair Display (display, restrained use) + Inter (body/UI).

**[date] — Aesthetic direction: modern liquid glass**
Layered translucent surfaces with specular edges and saturated backdrop blur, floated
over a varied background layer. Not flat frosted cards.

**2026-07-29 — Site structure locked**
Three surfaces: main marketing page, a partnerships page (businesses + university
requests), and a waitlist popup (not a full page — a modal/overlay triggered from CTAs
across the site).

**2026-07-29 — Reference roles locked**
Offseason (references 2 & 3) is the design/material reference — typographic voice,
spacing, restraint. Log's existing site (reference 1) is content/positioning reference
only — not design. Do not carry over Log's existing visual treatment.

**2026-07-30 — Background changed to white**
`--color-bg` changed from cream (#F5F3EC) to white (#FFFFFF). Cream + serif is one of
the three clichéd "AI-generated design" defaults right now — combined with heavy travel
photography it read as a warm lifestyle/travel brochure rather than an everyday utility
app. White is more neutral/utilitarian and closer to Offseason's actual system.

**2026-07-30 — Positioning: everyday app, not trips app**
Log should read as a daily-use recommendation app (restaurants, coffee, local spots),
with travel as one use case among many — not a travel-planning app. Copy and imagery
were rebalanced accordingly (see below).

**2026-07-30 — Signature moment: "scattered → one feed"**
Sourced from the "What we're building" pitch deck slide (their own tagline: "Personal
Models for real-world experiences"). The real product mechanism — scattered inputs
(texts, Notes app, saved posts, voice memos, group chats) consolidating into one feed
with match %, friend-attributed tips, and category tags — is the site's signature
visual, replacing a generic 3-icon feature grid or a decorative hero photo. Built as a
"chaos" (flat `.surface-paper` fragments, rotated) vs. "clarity" (`.glass` card floating
on `.stage-dark`) pairing — this pairing is also the recurring visual grammar reused in
the hero (small "with Log" card on a dark stage instead of a photo).

**2026-07-30 — Photography de-emphasized, then reinstated (see below)**
First pass dropped photography almost entirely because src/assets/photos (the original
set) was almost all travel/vacation content and fought the "everyday app" positioning.
Reversed the same day once a second, richer photo set arrived — see next entry. Kept
for history; src/assets/photos is now unused in favor of src/assets/photos2.

**2026-07-30 — Photography reinstated as the primary color source (photos2)**
User feedback: wanted photos back as "the majority pop of color," with green as accent
only, and said it needs to "feel human and real." A second photo set
(src/assets/photos2) was provided — food (tacos, risotto, sandwiches, coffee/pastries),
markets (Pike Place, farmers market, Paris bouquinistes), culture (cathedral, Duomo,
Monet, Frida Kahlo house, Palais Royal), shops (records, boutique), and city skylines
(NYC, SF, Madrid). This set reads as "real-world experiences to seek out" rather than
vacation snapshots, so it supports the everyday-app positioning instead of fighting it.
Now used in: hero (two-photo offset collage + glass rec card), a problem-section
accent, the how-it-works "with Log" card backdrop, a reinstated 8-photo "example log
entries" gallery, a who's-it-for accent, the final CTA background, and both
partnerships segments.

**2026-07-30 — Brand book adopted (log_brand.pdf)**
Palette renamed/reconciled to the brand book's actual terms: Ink (#172D06) is both text
and primary-surface color (there is no separate near-black text color — the earlier
CLAUDE.md draft's #140E18 is dropped), Bone (#F5F3EC) is "type on ink" and kept as its
own token even though the page background stays white per explicit override, Moss
(#4A7226) is the only link color, Stone (#5A5F50) is secondary/metadata text. Added the
three support tints: Sage (chips/tags), Sand (cards/borders — used for the "scattered"
fragment cards), Mist (recommended fills, not yet used). Wordmark is now set in DM Serif
Text, lowercase "log", self-hosted — brand book rule: "DM Serif Text is the wordmark
only. Never set UI or body text in it." Playfair headings set to weight 500 (font-medium)
per the brand book's explicit "Playfair Display · 500" spec, not the default 400.

**2026-07-30 — Glass usage narrowed, still the defining material**
Liquid glass stays the signature device but appears in fewer places, always over a
photo or dark surface (never flat white) per CLAUDE.md's own rule: the rec card (hero,
solution section, how-it-works), the waitlist modal, and CTA buttons. Radius scale
tightened (sm 10px → lg 20px, down from 14–40px) to read editorial.

**2026-07-30 — Offseason reference confirmed via fetch, not just screenshots**
Fetched offseasonwellness.com directly. Confirmed: minimal nav (logo/Partners/Careers/
Share), hero has lifestyle photos flanking the headline (not full-bleed, not absent),
feature sections use app-interface screenshots, partner logos in a flat unbordered
grid, black/white palette with color reserved for photography, bold+italic mixed
typography, generous whitespace, no visible motion documented. Informed the hero's
two-photo-flanking-text layout (since superseded — see below).

**2026-07-30 — Nav: capital "Log" wordmark, no border, CTA cluster right-aligned**
User override of the brand book's lowercase "log" — wordmark is now "Log" (still DM
Serif Text, still wordmark-only). Nav has no border/backdrop-blur/tint at all — solid
`bg-bg` so it's visually seamless with the page ("blend into the background," not just a
lighter line). Home/Partnerships/Get Early Access are one right-aligned flex group, not
spread across the bar via justify-between on three separate children.

**2026-07-30 — CTA copy: "Get Early Access" everywhere, glass-style buttons**
Renamed every "Join the Waitlist" button label site-wide (nav, hero, final CTA, waitlist
modal submit) to "Get Early Access." The modal's own headline ("Join the beta.") wasn't
part of that rename and is intentionally unchanged. CTA buttons are `.glass-pill` instead
of solid `bg-primary` everywhere except the waitlist modal's internal submit button,
which stays solid — a glass button on top of the modal's own glass card would blur the
one action that matters there; flagged this judgment call to the user, not yet pushed
back on.

**2026-07-30 — Container width standardized to max-w-7xl (1280px), padding gets an lg tier**
User reported that on a MacBook Air at full width, every section capped at max-w-5xl
(1024px) or narrower, with no scaling beyond that — large dead margins on both sides,
and inconsistent widths between sections (some 5xl, one was 6xl) made the page feel
uneven rather than deliberately restrained. Fix: every non-prose section (nav, footer,
how-it-works, example-log-entries gallery, who's-it-for, partnerships segments) now
shares one consistent max-w-7xl, and horizontal padding gained an `lg:px-8` tier
(previously stopped at `sm:px-6`). Pure-prose centered sections (hero text, problem,
final CTA text, partnerships intro/contact) intentionally kept their narrower max-w
(2xl/3xl) for readability — widening body copy past ~70ch actively hurts readability,
so that wasn't part of the fix. Also bumped a few internal elements to use the extra
room (gallery gap, who's-it-for image size/gap).

**2026-07-30 — RecCard gained a `compact` prop**
Needed for the two-card "With Log" layout (Dinner + Coffee cards on one photo collage).
The previous approach of overriding just the outer wrapper's padding/text-size via the
`class` prop didn't work — Tailwind utility classes on child elements (e.g. the place
name's own `text-xl`) don't inherit from a parent's classes, so the cards weren't
actually shrinking, just getting less outer padding. `compact` now scales every internal
element (chips, place name, avatar circle, tip text). Also fixed a real mobile bug this
surfaced: two cards at `w-[52%]` each would total ~104% of container width and collide
on a 375px screen — narrowed to `w-[44%] max-w-[150px]` on mobile, `sm:w-[48%]
sm:max-w-[180px]` above that.

**2026-07-30 — Nav: both links hidden below `sm`, not just "Home"**
At 375px, wordmark + "Partnerships" + the "Get Early Access" button was too tight to
reliably avoid wrapping. Both nav links now hide below `sm` (previously only "Home"
did) — mobile nav is just the wordmark and the CTA button. Partnerships is still
reachable from the footer on mobile.

**2026-07-30 — Problem/solution split into two mirrored two-column sections**
The single "how it works" section (Scattered | arrow | With Log, one 3-column grid) is
gone. Now: "The problem" section is text-left / scattered-fragments-right, and a
separate "The solution" section right below it is photo-collage-left / text-right
(eyebrow "Our solution" + header + subtext). The connecting arrow icon was dropped — it
was built for a single horizontal 3-column row and doesn't have a natural place once
that row split into two stacked sections. If a connecting visual is wanted between the
two sections again, it needs a fresh treatment, not the old arrow reinstated as-is.

**2026-07-30 — Nav is glass again (reversed the earlier "solid, blend in" decision)**
Earlier the same day, nav went solid `bg-bg` per an explicit "no line, blend into
background" request. User then asked for the opposite: translucent nav where scrolled
content is visible/blurred behind it. Added `.glass-nav` (translucent + backdrop-blur,
no radius, no shadow/border — keeps the "no hard line" intent while being genuinely
glass). If asked to make nav flat again, `bg-bg` was the prior state; don't reach for a
border/shadow as the fix for "too plain," that's what got reversed.

**2026-07-30 — CTA button text: Moss green, not Ink**
"Get Early Access" buttons (nav, hero, final CTA) changed from `text-primary` (Ink,
near-black-green, barely reads as "green") to `text-secondary` (Moss, the brand book's
actual green accent) + `font-semibold`, on the existing `.glass-pill` background — for
more visual pop/enticement per explicit request. Scoped to the three outward-facing
trigger buttons only; the waitlist modal's own internal submit button was left solid
(bg-primary/text-bone) from an earlier decision (glass-on-glass over the modal's own
glass card would reduce legibility of the one action that matters there) — wasn't asked
to change this pass, flagging in case it should match too.

**2026-07-30 — Homepage section order locked**
Hero → The problem → How it works → **The solution** → What gets logged → Who it's for
→ Final CTA. "The solution" is a new section: it's the two-photo offset collage + mock
rec card that used to live inside the hero (text-left/photo-right). Moved out per
explicit request — hero and that visual needed to read as two distinct sections, not
one merged block. Hero is now text-only (headline/subhead/CTA), centered, on a subtle
sage-to-white gradient wash, filling the viewport with a scroll cue at the bottom. Do
not re-merge the solution visual back into the hero without being asked again — this
exact back-and-forth already happened once.

**2026-08-02 — Solution section: matched photo borders, fixed card overlap, added category-tag colors**
The front photo's `ring-4 ring-bg` border was removed so both photos in the collage read as the same borderless treatment. The Activity (formerly Dinner) card was repositioned from flush-corner (`bottom-1.5 left-1.5`, sitting entirely inside its photo) to straddling the photo's top edge (`left-[2%] top-[30%]`), matching the Cafe (formerly Coffee) card's existing bottom-edge overlap. RecCard gained an optional `tagColor` prop (`sage` default / `blue` / `brown`) — added `--color-tag-blue` and `--color-tag-brown` tokens plus `.chip-blue`/`.chip-brown` classes in global.css, explicitly scoped to category tags only. These two colors are outside log_brand.pdf's palette — a deliberate, requested deviation, not an accidental one.

**2026-08-02 — How it works: rebuilt as three alternating photo/visual rows (superseded, see 2026-08-03)**
Replaced the flat 3-column icon grid with three stacked rows, each pairing copy with a bespoke illustrative visual (01/03 text-left, 02 text-right). 01 used a real photo (bakery/coffee order) with a `.glass` "Logged automatically" badge; 02 an abstract SVG node-graph on `.stage-dark`; 03 a scattered cluster of `.glass` tiles for Google/Photos/Resi/Calendar over a light gradient glow. User feedback the next day: felt conflicted on it — the three visuals (photo, dark-stage graph, light-gradient tile cluster) didn't read as one consistent system. Headline change ("We make sure you always know what to do.") and step 3's present-tense booking copy carried over into the redesign below.

**2026-08-03 — How it works: unified into three "specimen card" columns**
Rebuilt again per explicit request to fix the inconsistency above and read as clearly different formatting from the alternating-row rhythm used in Problem/Solution elsewhere on the page. Researched Linear (numbered sections, bold headline + 1-2 sentence copy + large visual, generous rhythm) and Offseason (layered discovery, no numbering) for reference before building — see request. Now: three equal columns (not alternating), each with a large Linear-style display numeral (01/02/03, not a small icon-in-circle badge), headline, one-sentence body, then an identical `.stage-dark` panel pinned to the bottom of the column via `mt-auto` (so panels align across columns regardless of copy length). The real bakery photo from the previous pass was dropped — 01 is now a location-pin icon in a `.glass` circle with a `.pulse-ring` animation plus the same "Logged automatically" badge; 03's tile cluster moved from a light gradient glow onto the same dark stage as 01/02, arranged as a centered row of glass circles instead of scattered absolute positions. Deliberate choice: made the whole section photo-free and abstract/iconographic rather than mixing one real photo with two illustrations — the inconsistency was the original complaint, and "friend network" and "app integrations" aren't naturally photographable subjects anyway, so full-abstract was the more honest, consistent option than sourcing a forced photo for step 1 alone. Node-graph SVG and pulse-dot animation reused verbatim from the previous pass, just resized and renamed (`.graph-pulse` → `.pulse-dot`) to sit alongside the new `.pulse-ring`. No new photo assets needed for this section as a result — flagged to the user with the option to swap in a real photo for step 1 later if they want a warmer touch there, at the cost of the new consistency.

**2026-08-03 — Problem section: real screenshots replace the tan mock cards**
The four flat `.surface-paper` (Sand/tan) fragment cards — a text bubble, a Notes snippet, a "SAVED" chip, a voice-memo bubble — were all typeset mockups, not real content. Replaced with four actual screenshots the user provided (saved to `src/assets/problem/`): a Notes app trip itinerary, an Apple Maps saved-places Guide, a saved Instagram Reel ("How to do Mexico City right — save this"), and an iMessage voice-memo bubble. Kept the same scattered/rotated collage motif (each card independently rotated ±2-3°, overlapping, the Reel screenshot pinned on top as the visual anchor via z-10) but the collage wrapper grew from `h-[280px] sm:h-[320px]` to `h-[440px] sm:h-[500px]` to fit real portrait screenshots instead of a few lines of mock text. This actually strengthens the "scattered across every app" premise — four distinct real apps shown (Notes, Maps, Instagram, iMessage) instead of three generic mocks plus a text bubble. Flagged to the user: the voice-memo screenshot's contact photo shows a child's face — a live, real, identifiable image on a public marketing site — worth a second look/blur/crop before shipping, not blocked on it since the user supplied and re-sent the image directly.

Pasted-image caveat re-confirmed: images pasted directly into chat aren't files I can read from disk (only the Read tool can see them, and only in that turn). This round, the user had actually taken macOS screenshots first (files existed on their Desktop), which is how they got imported — but the four brand-logo images sent alongside them (Google Calendar, Apple Photos, OpenTable, Google "G") were not screenshot files and aren't on disk anywhere findable, so "How it works" step 3 is still waiting on those being saved to a folder.

Note found while copying: macOS screenshot filenames use a narrow no-break space (U+202F) before "AM"/"PM", not a regular space — a literal typed/quoted path for one of these files will fail with "No such file or directory" even though `ls`/`find` list it fine. Use a shell glob (`Screenshot*9.47.02*.png`) to match instead of typing the exact name.

**2026-08-04 — Section-gap spacing tightened in two spots**
Hero→Problem and Solution→How-it-works both felt like too much dead space. Root cause: Problem only ever had a `pt` (relying on the section before/after for the other side), but Solution had a full `py` and How-it-works also had a full `py` — so Solution→How-it-works was stacking two full `--spacing-section` gaps into one. Added `--spacing-section-tight` (`clamp(2.5rem, 5vw, 4.5rem)`, roughly half the default) in global.css, scoped narrowly: Problem's `pt` and Solution's `pb` now use the tight value; every other section's spacing is untouched. Don't reach for `--spacing-section-tight` elsewhere without checking whether the same double-gap problem actually exists there.

**2026-08-04 — Finds on Log subtext widened to avoid a forced 2-line wrap**
The subtext under "Your next favorite experience." was capped at `max-w-xl`, which wrapped it to 2 lines even on wide desktop viewports where there was plenty of room for one. Widened to `max-w-3xl` so it only wraps when the viewport genuinely doesn't have room — not a fixed line-break.

**2026-08-04 — Who it's for: new copy, header/subtext share one max-width**
Headline → "Built for everyone to have great taste." Body copy replaced per explicit dictation (including "vetted in what your network loves" as given, not smoothed to "vetted by" — flagged, not silently changed). Both the `h2` and the following `p` now carry the same `max-w-lg` so they wrap to an identical column width and their right edges align — previously the header had no max-width (so it ran wider than the body) while the body was capped at `max-w-xl`, giving the two blocks mismatched right edges.

**2026-08-04 — Who it's for: expanded to full viewport height**
Was a compact content-height section (photo + text, sized to its own content). Now `min-h-dvh flex items-center` (same `dvh` pattern the hero uses, mobile-chrome-safe) so it fills the viewport like the hero does, with the existing photo/text pair vertically centered inside it. Scaled the accent photo up (`sm:w-[220px] lg:w-[260px]` → `sm:w-[300px] lg:w-[420px]`) and the headline (`clamp(2rem,4.5vw,3rem)` → `clamp(2.25rem,5.5vw,3.75rem)`) so the content has enough visual weight to not look lost in the taller section — not explicitly asked for, but a plain height increase alone would've left a small photo and normal-size text floating in a lot of empty space. The photo is still `hidden` below `sm` (pre-existing), which combined with the new full-height section means mobile is now just eyebrow+headline+body vertically centered with a lot of surrounding empty space — worth a look at 375px, may want the photo reinstated on mobile now that there's room for it.

**2026-08-04 — Waitlist modal rebuilt: SMS referral flow (frontend only, no backend yet)**
Replaced the old First/Last/Email form with the flow from the Offseason reference screenshots, adapted: Name / Phone / City / SMS-consent checkbox → submit ("Refer a friend to get on the list →") → a referral screen ("You're #[n] on the list — refer two friends to skip the line") with two "Send to friend" buttons that open `sms:&body=...` (device Messages app, prefilled with a referral link) via `WaitlistModal.astro`. Corrected the consent checkbox copy from the reference's literal "Offseason Wellness" to "Log" before implementing — using another company's name in an SMS-consent statement would misrepresent who the user is opting into messages from, not just a copy nit. Added a `/privacy` page (draft, explicitly flagged as needing legal review — see the page itself) since the checkbox links to a Privacy Policy and none existed; added to the footer nav.

Three things are placeholders, clearly commented in the component, not wired to anything real:
1. **Waitlist position** — random number, not a real count.
2. **Referral code** — `Math.random().toString(36)`, not backend-issued or trackable.
3. **"Sent" confirmation** — optimistic; flips the button state and shows "You're confirmed on the list" the instant the `sms:` link is triggered, not after a verified send. This is a hard technical ceiling, not a shortcut I took: a website cannot observe what happens inside the native Messages app after handing off via `sms:` — no send event, no delivery receipt, nothing. Real referral credit has to be attributed later, server-side, when the referred friend actually completes their own signup via the `?ref=` link — that's the only verifiable signal, and it's a different (async) mechanism than "did they press send," which the original request assumed was checkable. Flagged to the user rather than building something that fakes verification.

**2026-08-04 — Bug: waitlist modal never opened on localhost**
Root cause: `WaitlistModal.astro`'s script only ever did `document.addEventListener("astro:page-load", initWaitlist)` — no direct call. `astro:page-load` is synthesized by Astro's View Transitions router (`<ClientRouter />`); this site doesn't use it (confirmed: not in `Layout.astro`), so the event never fires and `initWaitlist` never ran, meaning zero click listeners were ever attached to any "Get Early Access" button. Every other script on the site (hero zoom, reveal-on-scroll, partnerships form) calls its init function directly *and* listens for the event — this one was the one exception, and it was already like that before this session's rewrite (pre-existing bug, just never surfaced since no one had clicked through the old simpler form). Fixed by adding `initWaitlist();` right before the `addEventListener` call. If a future script only registers for `astro:page-load` without a direct call, check this first.

Backend this needs before launch (not built, written up for the user instead): a signups table (name, phone, city, sms_consent + timestamp, referral_code, referred_by, position), an insert path (Supabase client-side call with RLS restricting the anon key to insert-only is the lowest-friction option since the site is static output with no adapter/API routes configured — no astro.config change required), and a referral-attribution path that credits the referrer when `?ref=CODE` shows up on a completed signup. Real SMS sent *from* Log (vs. the peer-to-peer Messages handoff this flow uses) is a separate, much bigger lift — Twilio or similar plus A2P 10DLC carrier registration — only needed if Log itself starts texting users directly, not for this referral mechanic.

**2026-08-04 — "Who it's for" section removed**
Cut entirely (photo, headline, body copy, the full-viewport-height treatment from earlier the same day) per explicit request. Final CTA ("Have you logged it yet?") now follows directly after "Finds on Log" — it already sat immediately below "Who it's for" in the file, so this was a straight deletion, not a reorder. Also dropped the now-unused `whoAccent` (Monet) photo import. Homepage order is now: Hero → Problem → Solution → How it works → Finds on Log → Final CTA.

**2026-08-04 — "How it works" section removed entirely**
Cut per explicit request — the whole three-column "specimen card" section (numerals, node-graph SVG, integration-tile cluster) along with its dedicated `.pulse-ring`/`.pulse-dot` style block. Homepage order is now Hero → Problem → Solution → Finds on Log → Final CTA. If a mechanism-explainer section is wanted again later, don't reach back for the node-graph/specimen-card treatment without checking whether it's actually wanted again — this is the second full rebuild-then-removal of this section in as many days.

**2026-08-04 — Partnerships page hidden, not deleted**
Removed the `/partnerships` link from Nav and Footer per "hide the partnerships page" — read as unlink, not delete, since that's the more reversible/conservative reading and the page itself isn't broken. `src/pages/partnerships.astro` is untouched and still resolves if visited directly; it's just no longer reachable from anywhere on the site. If the intent was actually to take it offline entirely (404, or gate it), that's a different, larger change — flag if that's what's wanted. Nav's `links` array is now empty in practice (was just "Home," which was redundant with the wordmark already linking to `/`) — removed the whole links map from Nav.astro rather than leave a single dead entry, and cleaned up the now-unused `currentPath` prop plumbing (Layout.astro → Nav.astro) that existed only to highlight the active nav link.

**2026-08-04 — Finds on Log intro centered**
Eyebrow/headline/subtext for the gallery section changed from left-aligned to centered (`text-center` + `justify-center` on the eyebrow + `mx-auto` on the capped-width subtext) per explicit request.

**2026-08-04 — Problem section: swapped in a second real-screenshot set**
Replaced 3 of the 4 scattered screenshots (kept the Notes/Mexico City itinerary): out with the Maps CDMX guide, the Reel, and the first voice memo; in with a Maps "best things to do in LA" guide, a ChatGPT "what should I do tonight in SF" screenshot, an Instagram "your perfect NYC weekend itinerary" post, and a new WhatsApp voice memo (1:35). Broadened from all-Mexico-City to multiple cities, which reads better as "this happens everywhere," not just one trip. Went from 4 cards to 5 — three of the new screenshots are much taller/narrower than the old set (1206×2622, ~2.17 h/w ratio vs. the Notes card's 1.24), so the collage wrapper grew again (`h-[440px] sm:h-[500px]` → `h-[580px] sm:h-[620px] lg:h-[660px]`) and each card was sized down (~30–38% width instead of ~44–52%) to keep a "scattered but not overlapping" layout per explicit request, rather than the denser overlapping pile the first version used.

Two things worth a second look before this ships: the Instagram post is a real third-party creator's content (@citygirlswhowalk), same category of concern flagged for the earlier Reel screenshot — displaying it as Log's own marketing imagery can read as implied endorsement/reuse without permission. And the new voice-memo screenshot's contact photo is a real, identifiable person (not the child from the previous version, but still a real photo) — same flag as before, still applies.

**2026-08-04 — Problem section: tightened the scatter, more overlap**
User feedback: the 5-card scatter (added earlier the same day) had "wayyy too much white space" down the middle — the left column (Notes, Maps) and right column (ChatGPT, Instagram) never actually touched. Rebuilt as one continuous overlapping cluster instead of two clean columns: switched every card to `left-[%]` positioning (dropped `right-[%]` on the ones that had it) so overlap is easy to reason about directly, widened each card 2-6 percentage points, increased rotation angles (±2–6° instead of ±2–3°) for a more organic/random feel, and layered z-index 10→40 bottom-to-top so the stack reads intentional rather than accidental. Container height trimmed slightly (`580/620/660` → `560/600/640`) since overlap needs less total footprint than two separated columns.

**2026-08-04 — Finds on Log gallery: full rebuild with 8 new real photos + category tags**
Replaced all 8 old `photos2` gallery photos with a new real set (`src/assets/gallery2/`) matched to explicit category/city/tag data: Nightlife (Prague), Dinner (Seattle), Cafe (New York), Museum (Mexico City), Nature ×2 (Paris, Los Angeles), Beauty (San Francisco), Shopping (New York). Each card now has three UI elements instead of one: the existing sage match-% pill (top-right, unchanged), a new category-tag pill (top-left, one distinct color per category — reused `--color-tag-blue`/`-brown` from the RecCard system for Shopping/Cafe, added five new tokens for Nightlife/Dinner/Museum/Nature/Beauty), and the bottom glass panel now shows two lines — the caption, then a smaller muted line with a pin icon + city (state for US cities, country for international, per explicit spec). Match percentages weren't specified in the brief — invented reasonable values (88–97%), flagged here since they're placeholder-quality, not measured.

Four of the eight source photos (bar/dinner/matcha/jardin) were actually HEIC despite `.jpg` names — that's why they failed to render when first pasted into chat ("image processing is unavailable"). Converted with `sips -s format jpeg` and downsized to a 1600px max edge before importing. One of them (jardin) lost its EXIF orientation in that conversion and came out sideways — caught by viewing the converted file before wiring it up, fixed with `sips -r 90`. Worth checking the other three at a glance before considering this done, same failure mode could apply.

Note: the voice-memo screenshot the user re-attached this round is pixel-identical to the one already in place from earlier the same day (`voice-memo-2.jpg`, unchanged 983×281) — treated as a no-op, not re-implemented.

**2026-08-04 — Final CTA background swapped to NYC skyline**
`ctaBg` (Public Market neon sign at night) → a new NYC skyline-over-Central-Park photo (`src/assets/gallery2/nyc.jpg`, from the user's own library, downsized from 1536×2048 to a 1800px max edge before importing).

**2026-08-04 — Waitlist modal copy rewrite; added Terms of Service**
Step 1: headline → "Always be in the know.", subhead → "Sign up for early access." Checkbox now links both Privacy Policy and a new Terms of Service page (`/terms`, same "draft, not lawyer-reviewed" framing as `/privacy`, added to the footer nav too). Step 2 (referral): headline simplified to "You're on the list!" — dropped the random placeholder waitlist-position number entirely rather than keep faking it; subhead → "Want in first? Refer 2 friends with great taste." The single "confirmed" message is now a 2-step progress readout instead of a flat boolean: sending to friend 1 shows "1/2 done", sending to friend 2 shows "We moved you up the list!" — tracked via a `sentCount` counter in the script. Same caveat as before still applies: this is optimistic UI on click, not a verified send.

**2026-08-04 — Real Terms of Service transcribed in full (replaces the draft)**
`/terms` now has the user's actual, complete Terms of Service (Log Social, LLC — Alaska-registered, 31 sections, DMCA agent, arbitration clause, Section 230, Apple App Store third-party-beneficiary terms, FTC review-authenticity rules, etc.), replacing the earlier placeholder draft. Transcribed verbatim — not summarized, not edited — except: (1) added `id` anchors + a linked table of contents for usability, since this is now a real document people might actually need to navigate, not a stub; (2) split section 5's prohibited-activities list and section 6's contributions-representations list into proper `<li>` items — the pasted text had lost its original line breaks so several bullets were run together mid-sentence (e.g. "...Services.Use any information..." with no space); reconstructed the boundaries by sentence/clause, matches a recognizable standard-template structure. Given the length (~9,000 words) and that this is a real legal document, worth a proofread pass against the source rather than trusting the transcription blind.

`/privacy` now also has the real, complete Privacy Notice (received in full in a follow-up message) — same verbatim-transcription treatment as `/terms`: linked table of contents with `id` anchors, the state-privacy-rights table (§12) rendered as a real `<table>` in an `overflow-x-auto` wrapper per CLAUDE.md's wide-content rule, "In Short" callouts kept as a small italic lead-in under each heading. Both legal pages are now real content, not placeholders — the earlier draft framing ("has not been reviewed by a lawyer") was removed since this is the user's actual policy, not a stub.

**2026-08-04 — Log wordmark restored to a fixed top-left corner (site-wide)**
Added a small `.glass` pill with the "Log" wordmark, `position: fixed` top-left, in `Layout.astro` — so it's on every page, not just the homepage, and persists on scroll (unlike the old sticky nav bar, which is still fully removed). Used `.glass` rather than plain text so it stays legible over both light sections and the dark Final CTA photo, without reintroducing a full bar. The hero's own centered "Log" wordmark (added earlier the same day, replacing "Beta is live") is untouched — the two serve different purposes: one is the hero's one-time brand moment, the other is the persistent way back to `/` from anywhere on the site.

**2026-08-04 — Hero background: ported a WebGL shader from React to vanilla TS**
User supplied a full React/"shadcn" component (a zero-dependency raw-WebGL simplex-noise shader, MIT-adjacent Paper Shaders lineage, Apache-2.0) with a generic "integrate this into a shadcn project" prompt. Same situation as the earlier hero-effect request this project already resolved: no React/Next.js/shadcn here, so ported the component natively rather than pulling in a framework — the GLSL and raw WebGL calls are framework-agnostic anyway; only the `useRef`/`useEffect`/JSX wrapper was React-specific, and that maps directly onto this codebase's existing `initX(); document.addEventListener("astro:page-load", initX);` script convention. Lives in `index.astro` as a `<canvas id="hero-shader-canvas">` replacing the old `bg-gradient-to-b from-sage/20 via-bg to-bg` div, same `-z-10` layering.

Recolored from the reference's dark/moody default palette to Log's own — four near-white stops progressively picking up a whisper of Sage, never reading as more than "very light green, almost white" per the request. Also retuned the shader parameters for the softer effect this called for: lower intensity/higher paramA (smoother gradient, less posterized banding), lower contrast, much lower vignette (the reference's dark-corner vignette reads as moody; a near-white palette doesn't want that), added a little `warp` for a soft "glass distortion" quality, slowed the time-scale drift way down (-0.575 → -0.12) for an ambient rather than busy feel.

Deliberately dropped the reference's pointer-reactive cursor distortion (`cursorEnabled: false`) — the pinned zoom-word is already this page's one signature interactive moment (see the "Homepage section order locked" and hero-rebuild entries above); a second pointer-reactive effect right behind it would compete rather than support it, and CLAUDE.md is explicit that scattered effects read as AI-generated. If ambient pointer reactivity is wanted later, the plumbing is still in the ported code (`u_cursor` uniforms, commented-out-equivalent via the disabled flag) — it's a one-line flip, not a rebuild.

Respects `prefers-reduced-motion`: renders exactly one static frame and never starts the animation loop or attaches pointer listeners when reduced motion is on, same pattern as the hero zoom effect. Kept the reference's performance safeguards (IntersectionObserver pause when off-screen, visibilitychange pause when tab hidden, capped devicePixelRatio, and a pixel-budget-based downscale on very large/high-DPI viewports) since those directly serve CLAUDE.md's Lighthouse-90 non-negotiable — a continuously-animating full-screen WebGL canvas is a real perf cost if unmanaged.

**2026-08-04 — Hero: removed the centered wordmark, widened the shader palette**
Dropped the centered "Log" (font-wordmark, above the headline) entirely per explicit request — Log now only appears in the fixed top-left corner. The hero's `.hero-text` block starts directly at the headline again (removed the `mt-5` that existed to space it below the wordmark). Shader palette widened from a narrow 4-stop near-white wash to 7 distinct stops — 3 whites (pure, warm cream, cool mint) and 4 greens stepping from pale sage up to a soft moss accent, using Sage and Moss as two of the actual stops rather than only synthesized tints. Also increased `intensity` (0.12→0.28) and lowered `paramA` (0.75→0.5) so the extra colors actually read as distinguishable waves instead of blurring into one averaged tone — more stops alone wouldn't have been visible without loosening the smoothing that was tuned for the earlier single-wash version.

**2026-08-04 — Hero: faded the shader into the page background at the bottom edge**
The shader canvas fills the hero exactly, but the noise pattern doesn't know or care what's below it — wherever a green wave happened to land at the very bottom edge, it cut hard into the flat white (`--color-bg`) background of the Problem section right after it. Fixed with a simple compositing trick rather than touching the shader itself: a `pointer-events-none` gradient div (`from-transparent to-bg`, bottom third of the hero, same `-z-10` layer, painted after the canvas so it sits on top of it) fades whatever the shader is doing into solid white before the section ends. Cheaper and lower-risk than baking an edge-fade into the fragment shader.

**2026-08-05 — Added a Waitlist/SMS section to both real legal documents**
Neither the real Privacy Policy nor the real Terms of Service (both received verbatim from the user 2026-08-04) had anything specific to the waitlist's phone-number collection or the referral SMS flow — Privacy only listed "phone numbers" once as a generic bullet in §1, Terms had nothing at all. Added a new section to each, inserted where the document's own pattern of specialized/appended sections already lives (Privacy: after §17 Content Visibility, before the closing Updates/Contact/Review sections, renumbering 18→21; Terms: after §30 Authentic Reviews, before Contact Us, renumbering the old 31 to 32). Content covers: what's collected (name/phone/city) and why, the SMS consent/STOP-HELP/message-frequency language matching what's already in the waitlist modal checkbox, the no-third-party-sharing carrier-compliance boilerplate already used elsewhere in both docs, and an explicit statement that the "refer a friend" feature sends from the user's own device, not from Log. ToC entries and every subsequent section's visible number were updated in both files — anchor `id`s were left alone since only the display numbers shifted, not the fragment identifiers.

**2026-08-05 — Problem section scatter rebuilt as a diagonal cascade**
User marked up a screenshot with freehand red arrows/loops tracing a flowing diagonal through the photo cluster, asking for the layout to read more like that. Rebuilt all 5 positions as a top-left-to-bottom-right cascade (each card offset down-and-right from the last, `left`/`top` both increasing, z-index 10→50 in the same order) instead of the previous two-cluster-plus-bottom-bar arrangement — uses the container's full height and width more evenly as a byproduct. Freehand sketch interpretation is inherently approximate; flagged to the user that this is a best-effort read of the markup, not a traced copy.

**2026-08-05 — Finds on Log: 3 more photo swaps**
Jardin → a second Luxembourg Palace photo (`jardin2.jpg`, empty chairs/autumn, correctly oriented already, no rotation fix needed this time), Dinner → a restaurant patio photo (`dinner2.jpg`, notably low source resolution at 399×501 — flagged, may look soft at larger card sizes), Nightlife/"bar" → a second angle of the same Prague bar (`dog2.jpg` — misleadingly named, it's not a dog photo, just an oddly-named file from the user's library). Captions/tags/cities unchanged since only the photo was swapped, not the entry's identity. Deleted the three superseded files (`bar.jpg`, `dinner.jpg`, `jardin.jpg`) from `gallery2/`.

**2026-08-05 — Contact email unified to explore@logsocial.app**
Footer had the only remaining `zoe@logsocial.app` references (mailto link + visible text) — leftover from before the real legal docs (which already used explore@logsocial.app throughout) existed. Now consistent site-wide.

**2026-08-05 — Voice memo: cropped and repositioned to overlay the third photo**
No `convert`/`magick`/PIL available in this environment; used `ffmpeg -vf crop=...` instead (verified the crop boundary first by rendering test strips and reading them, rather than guessing pixel offsets) to trim the ~48px of white/wallpaper margin visible on the right edge of the bubble screenshot — `voice-memo-3.png` (926×210) → `voice-memo-4.png` (878×210), old file deleted. Repositioned the card from bottom-anchored to overlaying the top of the Maps LA card (the third photo, `left-[38%] top-[30%]`) per explicit request — now `left-[24%] top-[22%]`, widened to `w-[56%]` since the bubble is much wider than Maps LA itself, kept at the top z-index (`z-50`) so it visibly sits on top rather than behind.

**2026-08-05 — Voice memo pushed further down to cover the Instagram handle**
Previous position (`top-44%`) wasn't low enough to reach where the "citygirlswhowalk" handle actually sits, near the very bottom of the tall Instagram screenshot. Moved to `left-24% top-72%` to land on that specific region.

**2026-08-05 — Final CTA background swapped again**
NYC skyline → a Madrid street-at-sunset photo (`newpic.jpg`, from the user's library, downsized to a 1800px max edge). Old `nyc.jpg` removed.

**2026-08-05 — Mobile pass: fixed horizontal overflow, hero zoom clipping, Solution section order**
Root cause of the sitewide "white bar on the right": the glow effect behind the Solution section's photo collage used `-inset-8` (bleeds 32px past its own container on every side). That's fine on desktop where the container is narrow relative to the page, but on mobile the container is already full-width, so the bleed pushed past the actual viewport edge and made the whole document wider than 100vw. Fixed the specific cause (`-inset-4 sm:-inset-8`, proportionate bleed per breakpoint) and also added `overflow-x: hidden` on `html`/`body` globally as a safety net against any future instance of this same class of bug — audited the rest of `index.astro` for the same `-inset-*`/negative-position pattern and found no other instances.

Hero zoom-word bleeding off the left edge on mobile: `.hero-text` had no explicit width, so its measured `offsetWidth` (used to cap how large "best-informed" is allowed to scale) was subject to flexbox's default `min-width: auto` shrink-to-fit behavior rather than reliably matching the actual visible width. Added `w-full` alongside the existing `max-w-4xl`, so the measurement — and therefore the scale cap — is always based on the real available width instead of an ambiguous flex-computed one.

Solution section text/photo order on mobile: added `order-2 lg:order-1` (photo) / `order-1 lg:order-2` (text) — same `order-*` flip pattern already used on the partnerships page and the earlier how-it-works rebuild — so mobile shows text first without touching the deliberate photo-left/text-right desktop layout.

**2026-08-05 — Section gaps normalized to one consistent value**
Every inter-section gap now uses the same mechanism and the same (smaller) size, instead of some sections using `--spacing-section` and others `--spacing-section-tight`. Scheme: each section carries its own `pb` (bottom padding) as the *only* thing that creates the gap before the next section — no section adds its own `pt` to double up, except Problem (which follows the pinned Hero, a special case with no `pb` mechanism available on the hero side). Problem, Solution, and Finds-on-Log all now use `pt-6`/`pb-6` on mobile, `sm:pt-/pb-[var(--spacing-section-tight)]` above that — same value at every breakpoint, not just desktop. `--spacing-section` (the larger variable) is no longer used anywhere as an inter-section gap; still fine to reach for inside a section for internal spacing if a genuinely different rhythm is wanted there.

**2026-08-05 — Hero pin/zoom: removed, then restored with a much shorter hold (net outcome)**
Went through three passes the same day: (1) shrink the fade-zone/padding around the hero — didn't touch the actual cause; (2) remove the pinned effect entirely — fixed the gap but also killed a feature the user wanted kept; (3) the actual fix — restored the effect but corrected the real bug, which was never "the effect is bad," it was that after the word finished growing there was a long stretch of scroll (40% of the pin's extra 100vh = 40vh) where nothing changed on screen before the section released. Reduced `#hero-pin` from 200vh to 140vh (100vh of extra scroll → 40vh) and moved the growth/fade saturation point from 60% to 80% of that range, so the "locked" pause after the word reaches full size is a brief ~8vh beat instead of a ~40vh dead gap — grow → brief lock → release, same sequence as before, just proportioned so the lock reads as deliberate rather than broken. `initHeroZoom` (measure-max-scale + scroll-progress tracking) is back verbatim; only the two saturation constants (0.6→0.8 in both the fade and scale `calc()`s) and the wrapper height changed.
The previous fix (shrinking the fade zone and Problem's top padding) treated the wrong thing — those were only tens of pixels, and the actual gap the user was seeing was a full extra 100vh+ of dead scrolling. Root cause: `#hero-pin` is a 200vh wrapper around a `sticky` hero section, which is exactly double a normal viewport height by design — that's what "holds" the zoom-word-growth scroll effect. On mobile, once the "best-informed" word finishes growing (by `--hero-progress` 0.6) and the surrounding text has faded out, there's still another ~40% of that 100vh of extra scroll distance left before the section releases, during which the screen shows nothing changing — exactly the "whole page of white" being reported, since by that point the fade-text is invisible and there's nothing else happening.

Rather than tune the hold duration down, disabled the whole pinned-scroll mechanism below `sm` (640px): `#hero-pin` height is `auto` on mobile (only becomes `200vh` from `sm:` up via a media query, moved out of the old inline `style` attribute so it could be conditional), and the JS bails out immediately below 640px width alongside the existing `prefers-reduced-motion` check. Below `sm`, `--hero-progress` and `--hero-max-scale` just stay at their CSS defaults, so `.hero-fade` renders at full opacity and `.hero-zoom-word` at scale(1) — the hero is a normal, single-viewport-tall, fully-visible section with no extra scroll distance, and the Problem section follows immediately after (governed by the section-gap normalization from the same day). The word still reads as emphasized on mobile via its italic styling alone — the scroll-driven grow/fade was always additive on top of that, never the only signal. Desktop/tablet (`sm:` and up) keeps the full effect exactly as before, untouched.

**2026-08-05 — Found the real cause of the hero white-space regression: overflow-x:hidden broke position:sticky**
This is why the last two "fix the hero gap" passes didn't actually fix anything, and why it looked like the hold "wasn't working" — it genuinely wasn't. A few prompts before that, `overflow-x: hidden` was added to `html`/`body` as a blanket safety net for an unrelated horizontal-overflow bug. Per the CSS spec, setting `overflow-x` to a non-`visible` value while `overflow-y` is left at its default forces `overflow-y` to compute to `auto` — turning `body`/`html` into an unexpected scroll container, which silently breaks `position: sticky` for descendants in most browsers. With sticky broken, `#hero-pin`'s sticky child stopped pinning at all — it just scrolled normally with the page, and the wrapper's extra height (whatever it was set to at the time) became genuinely empty, un-pinned scroll-through space. All the "shorten the hold" tuning in the preceding entries was correctly diagnosing a symptom (extra scroll distance with nothing happening) but not the actual mechanism, since sticky wasn't functioning at all by that point.

Removed `overflow-x: hidden` from `html`/`body` entirely rather than trying to patch around it (e.g. also setting `overflow-y: visible` doesn't avoid the spec rule — the auto-computation happens regardless of which non-visible value is used or whether the other axis was set explicitly or left at its initial value; the only real fix is not touching body/html overflow at all). This is safe to remove now because the actual source of that original horizontal-overflow bug — the Solution section's `-inset-8` glow bleeding past the viewport edge on mobile — was already fixed at its root a few entries above; audited the rest of `src/` for the same bleed pattern and found nothing else. If a future horizontal-overflow bug shows up, fix it at its specific source (like this one), not with a blanket rule on the root elements — that's what caused this whole detour.

**2026-08-05 — Hero zoom-word: keep "friend." on the same line, bias growth rightward instead**
Diagnosed the left-bleed correctly (scaling from an off-center point since `best-informed` shares a line with `friend.`, so its own box isn't centered against the container), but the fix — forcing `friend.` onto its own line — was the wrong direction: the user wants the headline to stay 2 lines, not 3. Reverted the `<br />`. Real fix: added a `--hero-origin-x` custom property (default `50%`, set to `15%` on mobile in the same `measureMaxScale` pass that already runs on init/resize) and pointed `transform-origin`'s X at it instead of a hardcoded `50%`. With the origin anchored near the word's own left edge on mobile, growth is biased rightward — expanding into the middle of the shared line instead of symmetrically off the left edge. Desktop keeps `50%` (unchanged, not reported as broken there). The 0.94 mobile width-safety-margin from the previous entry stays as-is — now doing double duty as headroom for the rightward-biased growth, not just italic overhang.

**2026-08-05 — Solution section Cafe card + both collage photos swapped; Final CTA background swapped again**
Cafe card copy: "Go to Matcha 116" → "Coffee + Bagels", tip → "Maya — do the Apollo and Sant Ambroeus combo." (dictated as "san ambroeus," corrected to match the real business name visible on the coffee cup in the reference photo). `heroBack` (the larger right-side photo, which the Cafe card sits over) swapped from the Madrid street photo to `bagel.jpg` — a real takeout photo of bagel sandwiches, smoked salmon, and a Sant Ambroeus coffee cup. `heroFront` (the smaller left-side photo, which the Activity card — "New museum pop-up" — sits over) swapped from the Frida Kahlo courtyard house to `cool.jpg`, a museum fashion exhibit (mannequins in gowns amid an illuminated flower display) — a direct visual match for the "museum pop-up" copy it overlays. Final CTA background swapped again: the Madrid sunset street photo → `backnew.jpg`, a mountain-lake sunset with pink clouds reflected in still water. Source file was HEIC despite a `.jpg` extension and shot in landscape rotated 90°; converted via `sips -s format jpeg` and corrected orientation via `sips -r 90` before resizing, matching the established pattern for HEIC-mislabeled uploads. All three new photos live in `src/assets/photos2/` (`bagel.jpg`, `cool.jpg`, `backnew.jpg`), downsized to the same 2000px max-edge convention as the rest of that folder.

---

## Open questions

- How much motion is right before it reads as AI-generated?
- Whether to use Mist (recommended-fill tint) anywhere — currently unused.

---

## Rejected

**2026-07-30 — Cream background + travel photography as primary visual language**
Read as a generic "AI-generated warm lifestyle site" and fought the everyday-app
positioning. Replaced with white background + typographic/mockup-driven design (see
locked decisions above).

**2026-07-30 — Floating glass-pill nav**
Too heavy/decorative for every page load; competed with the one signature glass moment
instead of supporting it. Replaced with a flat, hairline-bordered nav.

*(add as we go — what we tried, and the specific reason it didn't work)*

---

## Reference notes

- `reference 1 (Log's current site)` — pulling: content/positioning only (existing IA:
  Home/Places/Universities/Contact/Download; the Discover/Share/Experience triad; the
  "recent recs" social-proof pattern; CTA language). Explicitly NOT pulling layout,
  color, or type treatment from this one.
- `reference 2 (Offseason — waitlist/home)` — pulling: type treatment (serif italic
  mixed into a sans headline for a single emphasis word), tracked uppercase micro-labels,
  generous whitespace, restraint.
- `reference 3 (Offseason — partnerships)` — pulling: editorial pacing via thin hairline
  dividers between numbered sections, dark-section contrast anchor (near-black block
  against the light page) for a CTA/contact moment, confident large-serif section
  openers with italic accents.
