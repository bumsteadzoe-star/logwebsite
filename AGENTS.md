# Agent Instructions

> This file is mirrored across CLAUDE.md, AGENTS.md, and GEMINI.md so the same instructions load in any AI environment.

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- [Claude Code CLI](https://docs.anthropic.com/en/docs/claude-code) installed
- A code editor (VS Code recommended)
- Git for version control

### Setup

1. **Clone and install dependencies:**
   ```bash
   cd "website test"
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` and fill in your keys for each service you plan to use. Not all keys are required — only fill in what you need:
   - `ANTHROPIC_API_KEY` — Required. Get from [console.anthropic.com](https://console.anthropic.com/)
   - `GOOGLE_SHEETS_SHEET_ID` — The ID from your Google Sheet URL (free). Found between `/d/` and `/edit` in the sheet URL.
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL` — From your Google Cloud service account (free tier).
   - `GOOGLE_PRIVATE_KEY` — Private key from the downloaded service account JSON file.
   - See `.env.example` for the full list.

   **Waitlist → Google Sheets setup (free):**
   1. Create a Google Sheet with columns: `Timestamp`, `Name`, `Email`, `City`
   2. Go to [console.cloud.google.com](https://console.cloud.google.com), create a project, enable the Google Sheets API
   3. Create a Service Account, download the JSON key file
   4. Share your Google Sheet with the service account email (Editor access)
   5. Add the Sheet ID, service account email, and private key to `.env`
   6. The waitlist form will POST to `/api/waitlist` which appends a new row to the sheet

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`. Skills auto-activate based on your requests. Try: "Build the hero section for the home page" or "Add a new blog post to the recs page".

4. **Deploy to Vercel (optional):**
   ```bash
   npx vercel
   ```
   Follow the CLI prompts to link your project. Subsequent deploys happen automatically on `git push` if connected to GitHub.

---

You operate using Claude Code Skills - bundled capabilities that combine instructions with deterministic components. This architecture separates probabilistic decision-making from deterministic execution to maximize reliability.

## The Skills Architecture

**Layer 1: Skills (Intent + Execution bundled)**
- Live in `.claude/skills/`
- Each Skill = `SKILL.md` instructions + `scripts/` folder
- Claude auto-discovers and invokes based on task context
- Self-contained: each Skill has everything it needs

**Layer 2: Orchestration (Decision making)**
- This is you. Your job: intelligent routing.
- Read SKILL.md, build components in the right order
- Handle errors, ask for clarification, update Skills with learnings
- You're the glue between design intent and execution

**Layer 3: Shared Utilities**
- Common styles and tokens in `styles/` (colors, fonts, spacing)
- Reusable components in `components/`
- Used across multiple pages when needed

**Why this works:** if you do everything yourself, errors compound. 90% accuracy per step = 59% success over 5 steps. The solution is push complexity into deterministic components. That way you just focus on decision-making.

## Available Skills (4 pages, 9 components)

### Pages
- `home` - Landing page. Must include somewhere: a hero, the discover/share/experience value props, a use-case hook, and a waitlist CTA. Layout and arrangement are flexible — prioritize great design over matching the existing site exactly.
- `recs` - Combined experience feed + blog page. Displays both experience cards and written blog posts as a unified content feed. New posts should be addable by editing a single data file (`/data/posts.js`) with no code changes required — just add a new object to the array. Layout is flexible.
- `blog-post` - Individual blog/rec post view. Rendered dynamically from the post data. Clicking an experience card or blog preview navigates here.
- `join-the-waitlist` - Waitlist signup. Must include: a benefit list and a form (Name, Email, City) that submits to `/api/waitlist` → Google Sheets. Layout is flexible.

### Components
The following are the required **content types** that must exist somewhere on the site. How they are designed, named, and arranged is intentional and open to creative interpretation — do not treat these as locked wireframes:
- `Navbar` - Must include: LOG wordmark, nav links (home, recs, contact, join the waitlist!). Exact layout is flexible.
- `HeroSection` - Must include: a large background image or video, the LOG name, a tagline, and a CTA. Presentation is flexible.
- `ValueProps` - Must convey the three pillars: discover / share / experience. Could be columns, cards, a horizontal scroll, stacked sections, or any other format.
- `UseCaseHook` - Must surface the use-case prompts: "studying abroad?" / "new city?" / "need recs?" / "sharing your life?" Could be a marquee, a stacked list, a hero sub-headline, or another format.
- `PostCard` - Preview card for both experience recs and blog posts. Must include: cover image, title (lowercase), and location or date. Functions as blog post preview. Design is flexible.
- `PostDetail` - Full individual post view. Must include: cover image, title, body content, location/date. Layout is flexible.
- `WaitlistForm` - Must include: Name, Email, City fields and a submit button. POSTs to `/api/waitlist`. Design is flexible.
- `WaitlistCTA` - A section anywhere on the site (home, recs, etc.) that drives users toward the waitlist. Content and placement are flexible.
- `Footer` - Must include: LOG wordmark, explore@logsocial.app, and nav links. Design is flexible.

### Blog / Recs Content Management
Posts live in `/data/posts.js` as a plain array of objects. To add a new post, append one object — no other code changes needed:
```js
{
  slug: "acatenango-volcano-trek",       // URL: /recs/acatenango-volcano-trek
  title: "acatenango volcano trek",      // lowercase
  location: "antigua, guatemala",
  date: "2025-11-01",
  coverImage: "/images/acatenango.jpg",
  type: "experience",                    // "experience" | "blog"
  excerpt: "a short preview description shown on the card",
  body: `full markdown or HTML content for the post detail page`
}
```

### Waitlist API Route
The form submits to a Next.js API route at `/app/api/waitlist/route.js` which appends a row to Google Sheets using the service account credentials in `.env`. Claude should build this route when the waitlist form is built.

## Subagents

Subagents are lightweight agents with self-contained contexts, defined in `.claude/agents/`. They're cheaper, unbiased (no parent context leakage), and keep the parent context clean.

### Available Subagents
- `code-reviewer` - Unbiased code review with zero context. Returns issues by severity with a PASS/FAIL verdict.
- `research` - Deep research via web search, file reads, and codebase exploration. Returns concise sourced findings.
- `qa` - Checks components for mobile responsiveness, brand color compliance, and naming conventions. Reports pass/fail — does NOT fix anything itself.

### Frontend Design Plugin (optional)
If the `frontend-design` Claude Code plugin is available, invoke it for any new page or major component before writing code. It generates high-quality, distinctive UI that avoids generic AI aesthetics. Use it especially for:
- First-pass layout of the home page hero and value prop sections
- The recs/blog feed layout
- Any section where design quality is the primary goal

Invoke with a description of the component, the brand colors, and the tone ("Gen Z, editorial, lifestyle, lowercase, authentic"). Review its output against the brand system before accepting.

### Design & Build Workflow

When building or modifying any non-trivial component (new sections, features, layout changes), follow this loop:

1. **Write/edit the code** — Make your changes.
2. **Code Review** — Spawn `code-reviewer` subagent with the changed file(s). It reports issues back — it does NOT fix anything itself.
3. **QA** — Spawn `qa` subagent with the code. It checks responsiveness, color usage, and naming conventions, and reports results back — it does NOT fix anything itself.
4. **Fix** — The parent agent (you) reads the review and QA reports and applies all fixes.
5. **Ship** — Only after review passes and checks pass.

**Important:** Subagents are read-only reporters. All code changes happen in the parent agent.

For design-heavy tasks, spawn `research` subagent first to gather component patterns without polluting the main conversation.

**Parallel execution:** When reviewing + QA'ing independent files, spawn both subagents in parallel using `run_in_background: true`.

## Operating Principles

**1. Skills auto-activate**
Claude picks the right component or page based on your request. Each Skill's description tells Claude when to use it.

**2. Brand system is non-negotiable**
Every component must use the defined color tokens. Never introduce new accent colors, new fonts, or layout patterns without explicit instruction:
```
--color-cream:  #EBE5DC   /* primary background */
--color-tan:    #C4A882   /* footer background */
--color-green:  #1B502F   /* PRIMARY ACCENT — all CTA buttons and highlights */
--color-dark:   #1A1A1A   /* primary text and dark buttons */
--color-white:  #FFFFFF   /* hero text overlaid on photos */
--color-muted:  #6B6560   /* captions and secondary text */
```
Font: **DM Sans** via Google Fonts. All copy is lowercase except "LOG", proper nouns, and URLs.

**3. Self-anneal when things break**
- Read error message and visual issue carefully
- Fix the component and test at 375px (mobile) and 1280px (desktop)
- Update SKILL.md with what you learned
- When a design decision is ambiguous, default to: simpler, more whitespace, lowercase, cream background

**4. Update Skills as you learn**
Skills are living documents. When you discover better patterns, edge cases, or browser quirks — update the SKILL.md. But don't create new Skills without asking.

## Self-annealing loop

Errors are learning opportunities. When something breaks:
1. Fix the component
2. Test it at 375px (mobile) and 1280px (desktop)
3. Update SKILL.md with new approach
4. System is now stronger

## File Organization

**Deliverables vs Intermediates:**
- **Deliverables**: Final page files and reusable components committed to the repo
- **Intermediates**: Temporary scratch files needed during development

**Directory structure:**
- `.claude/skills/` - Skills (SKILL.md + scripts/)
- `/app` - Next.js App Router pages (`page.jsx` per route)
- `/app/api/waitlist/route.js` - API route that receives form submissions and appends to Google Sheets
- `/app/recs/[slug]/page.jsx` - Dynamic individual post/blog view
- `/components` - Reusable UI components (Navbar, Footer, HeroSection, etc.)
- `/data/posts.js` - Single source of truth for all recs and blog posts; edit here to add new content
- `/styles` - Global CSS, color tokens, font imports
- `/public/images` - Lifestyle photos and cover images for posts
- `.env` - Environment variables and API keys
- `.tmp/` - Intermediate files (never commit)

**Key principle:** Components are single-purpose and reusable across pages. Shared design tokens live in `/styles`, not scattered as inline styles. All post content lives in `/data/posts.js` so new content never requires touching component code.

## Summary

You work with Skills that bundle design intent (SKILL.md) with execution (components/). Read brand instructions, build components in the right order, handle errors, continuously improve the system.

Be pragmatic. Be reliable. Self-anneal.
