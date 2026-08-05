# Project: Log — Marketing Site

## What this is

Marketing website for Log, a consumer AI product that builds a passive taste graph
for real-world experience discovery. The site's single job: get the right visitor to
download the app. Audience is Gen Z and younger Millennials — people who are fluent
in good design and immediately detect templated work.

## Non-negotiables

- Responsive down to 375px. Test every layout change at mobile width before calling it done.
- Visible keyboard focus states on every interactive element.
- `prefers-reduced-motion` respected — all motion has a reduced fallback.
- No layout shift on load. Reserve space for images and fonts.
- Lighthouse performance stays above 90.

---

## Design system

### Color tokens

Use these exact values. Define them once as CSS custom properties and never hardcode
a hex anywhere else in the codebase.

```css
:root {
  --color-text:       #140E18;  /* near-black, violet cast */
  --color-bg:         #F5F3EC;  /* warm cream */
  --color-primary:    #172D06;  /* deep forest */
  --color-secondary:  #4A7226;  /* moss */
  --color-accent:     #5A5F50;  /* muted sage-gray */
}
```

Derived values are allowed (opacity variants, tints for glass surfaces) but must be
expressed as `color-mix()` or `rgb(from ...)` off the base tokens, not as new hexes.

Ratio discipline: cream dominates, forest and moss carry structure and emphasis,
sage-gray is for secondary text and hairlines only. Do not let moss become a
button-color-everywhere accent — it loses its weight.

### Typography

- **Display:** Playfair Display. Used with restraint — hero headline, section openers,
  and pull moments only. Never for UI labels, buttons, or body.
- **Body / UI:** Inter. Everything else.

Set a real type scale, not arbitrary sizes. Playfair is high-contrast, so it needs
tighter tracking at large sizes and more air around it than a default heading would get.
Do not use Playfair below 24px — the thin strokes break down.

Type is a personality carrier here, not a delivery vehicle. Consider a deliberate
treatment on the hero headline (optical sizing, a mixed-weight line, a single italic
word) rather than a uniform block of serif.

### The liquid glass direction

This is the defining aesthetic. It means layered translucent surfaces with real depth —
the modern Apple-style treatment, not 2015 frosted-glass cards.

What makes it read correctly:

1. **Blur plus saturation.** `backdrop-filter: blur(20px) saturate(180%)`. The saturation
   boost is what makes it feel like glass rather than a gray overlay. Blur alone looks cheap.
2. **Specular edge.** A hairline highlight on the top and left edges of glass surfaces —
   `1px` semi-transparent white/light, fading. This is the single detail that sells the
   material. Use an inset box-shadow or a gradient border.
3. **Layered depth.** Glass elements sit at different z-levels with different blur radii.
   Closer surfaces blur more. Do not give every glass element identical treatment.
4. **Generous radii.** Large, soft corner radii (20–32px on cards, more on large surfaces).
   Consistent radius scale, no arbitrary values.
5. **Something underneath.** Glass over flat cream is invisible. Every glass surface needs
   variation behind it: a soft gradient mesh in forest/moss/sage, product imagery, or a
   subtle grain texture. Build the background layer first, then float glass on it.

What to avoid:
- Uniform white-at-10%-opacity cards with the same blur everywhere
- Heavy drop shadows doing the depth work instead of layering
- Glass on glass on glass — pick a maximum of two stacked levels
- Blur so heavy the content behind becomes meaningless noise

Performance note: `backdrop-filter` is expensive. Limit to elements that genuinely need
it, and never animate blur radius on scroll.

### Motion

One orchestrated moment beats scattered effects. A considered page-load sequence or a
single scroll-triggered reveal that reinforces the product concept will land harder than
hover animations on every card. Excess animation is a primary tell of AI-generated design.

---

## Working conventions

### Design references

Reference screenshots live in `/references`. When I add one, I'll tell you what
specifically to look at — pull that quality, not the whole page. Assume references are
for *feel* (spacing rhythm, type treatment, material quality, motion), never for direct
copying of layout or content.

### Copy

All site copy lives in `copy.md`. That file is the source of truth. When copy changes,
change it there and reflect it in the components — don't let strings drift between the
two.

Voice: plain language, short declarative sentences, no intensifiers, no filler. Active
voice. Specific over clever. No exclamation points. Every word earns its place. Describe
what the product does in plain terms rather than selling it.

Do not write copy that makes present-tense claims about features that aren't shipped.
Booking and itinerary planning are in development — frame forward-looking, always.

### Decisions log

`design-notes.md` tracks what we've tried and why. Read it at the start of a session.
Append to it when we make a real directional decision or reject an approach, so we don't
circle back to something already ruled out.

---

## How to work with me

- Show me diffs before applying. I want to review layout and style changes.
- When I describe a visual problem vaguely ("this feels cramped"), use `@browser` to look
  at the rendered page yourself rather than guessing from the code.
- After any layout change, check mobile width before telling me it's done.
- If I ask for something that will look generic, say so and propose the alternative. I'd
  rather hear it than ship it.
- Small, reviewable changes. Don't refactor three components when I asked about one.
