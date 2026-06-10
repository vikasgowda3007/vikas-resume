# Vikas Keshavamurthy — Portfolio Design System

A single-purpose design system for **Vikas Keshavamurthy's personal portfolio** —
an Angular 21 single-page portfolio for a software engineer with 6 years of
experience in data security and telecommunications, currently pursuing an M.S.
in Computer Science at Arizona State University.

The system documents the visual + voice rules of the site so future sections,
slides, resume PDFs, OG cards, and adjacent personal-brand surfaces stay
coherent.

## Source material

| Source | Path / link |
| --- | --- |
| Codebase (Angular SPA) | `vikas-portfolio/` (mounted, read-only) |
| GitHub | https://github.com/vikasgowda3007/vikas-portfolio |
| Live site | https://vikas-keshavamurthy.vercel.app/ |
| Resume PDF | `assets/Vikas-Keshavamurthy-Resume.pdf` |
| Hero portrait | `assets/portraits/vikas-hero-{760,1120}.jpg` |
| Brand mark | `assets/favicon.svg` |
| OG card | `assets/og-card.{png,svg}` |

The single product is the **portfolio website**. There is no separate app,
docs, or marketing site — just one full-bleed scrolling page broken into
six sections: Hero → About → Experience → Projects → Skills → Contact.

## Index — what's in this folder

```
README.md                   ← you are here
SKILL.md                    ← Agent-Skills-compatible entry point
colors_and_type.css         ← all color + type tokens, plus semantic type styles
assets/                     ← copied logos, portraits, OG card, resume PDF
fonts/                      ← (CDN-loaded; see VISUAL FOUNDATIONS)
preview/                    ← design-system review cards
ui_kits/portfolio/          ← interactive React recreation of the live site
```

## Content fundamentals

The voice is **calm, direct, professionally warm**, written in third person
about Vikas. Sentences are short to mid-length, declarative, and lead with the
result rather than the verb. There is no marketing puffery — every claim is
tied to a metric, a stack, or a concrete artifact.

**Tone guideposts**
- Third person ("Vikas is…", "He led…") — never first person, never "you".
- Lowercase eyebrow labels in mono caps: `CURRENT TRAJECTORY`, `SELECTED PROJECTS`,
  `CONTACT`.
- Sentence-case headlines, not Title Case. Periods at the end of headline
  statements ("Six years building secure, business-critical software.").
- Numbers in body copy use digits + `%` for impact stats ("Reduced bug
  backlog by 30%").
- Tech stacks are joined by middle dots: `Angular · Java · JavaScript · Python`.
- No emoji. No exclamation marks. No ALL-CAPS for emphasis (caps are reserved
  for the mono label system).
- Section subheads frame work as a *trajectory* or *through-line*, not a brag
  ("Six years building secure, business-critical software.", "The strongest
  through-line is full-stack product delivery").

**Concrete examples from the live copy**
- Hero subhead: "Secure products. Polished interfaces. Grounded engineering."
  — three short noun phrases, period each, no oxford comma needed.
- About headline: "Experienced engineer now building the next chapter through
  an M.S. in Computer Science at Arizona State University."
- Contact headline: "Open to thoughtful software engineering work with good
  teams." — soft, low-pressure, signals taste.

**Vibe.** Professional but human. Quiet confidence — a senior engineer who
also cares about typography. Polite restraint over hype. Reads more like a
designer's portfolio than a typical resume site.

## Visual foundations

**Color.** A near-monochrome neutral system (slate / off-white) plus a single
electric-blue accent (`--accent-color: #1677ff`). Light theme runs on
`#f4f7fb` with white glass surfaces; dark theme runs on `#050816` with
deep-navy glass and a softened `#74b3ff` accent. Both themes are first-class —
the page reads the user's `prefers-color-scheme` and stores the choice in
`localStorage`. There are *no* warm accents, no semantic green/red/yellow —
this is intentional; the site has nothing to flag, only impact stats and
links.

**Page background.** Never a flat color. Every page paints two soft radial
glows over a vertical 3-stop linear gradient — top-left blue glow + top-right
near-black glow + a near-white-to-faint-blue vertical gradient. Combined with
two large fixed `filter: blur(80px)` blobs in `.app-shell::before/::after`,
this gives the page a quiet, atmospheric haze without ever crossing into
"AI gradient slop". On mobile the blobs drop to 65% opacity.

**Type.** Two families, no exceptions.
- **Manrope** (400 / 500 / 600 / 700 / 800) — display + body. Tight tracking
  (`-0.04em` to `-0.095em`) is its signature; the bigger the type, the
  tighter the letter-spacing.
- **IBM Plex Mono** (400 / 500) — eyebrows, periods, metas, tech stacks,
  micro-labels. Always uppercase, always wide tracking (`0.16em` – `0.22em`).

Both load from Google Fonts via the `<link>` in `index.html`. There are no
local font files in the codebase — see `colors_and_type.css` for the import.

**Spacing & rhythm.** Sections use `padding-block: clamp(4.5rem, 9vw, 8rem)`
— very generous vertical air. Inner gutter: `clamp(1.25rem, 3vw, 2rem)`.
Page width caps at `1220px`. Two-column section grids use the asymmetric
`0.72fr / 1.28fr` (or `0.8 / 1.2`) split — sticky narrow heading on the
left, content on the right.

**Backgrounds & textures.** No images-as-backgrounds, no patterns, no grain,
no full-bleed photography. Texture is achieved through layered translucent
fills + blur, never bitmap. The hero adds a faint white CSS gridlines layer
masked at 22% opacity for a subtle "engineering paper" feel.

**Imagery.** One photograph: the hero portrait. Warm-but-neutral tone,
slightly desaturated (`filter: saturate(0.96) contrast(1.02)`), soft light,
indoor. Hovering scales it from 1.02 → 1.035 over 500ms. Other than that,
no imagery.

**Animation.** Sparing and polite.
- Section reveal: `reveal-up 680ms ease both` with staggered 60ms delays
  (100, 160, 220, 260, 300, 340…). Used on hero copy + portrait.
- Ambient drift on the portrait orbit: `drift 13s ease-in-out infinite`,
  ±12px translate + 1.03 scale.
- All hover/press transitions: `180ms ease` on color, background, border,
  box-shadow, transform, opacity.
- No bouncy easing. No springs. No parallax.

**Hover states.**
- Primary CTA: `translateY(-1px)` + bigger drop shadow
  (`0 18px 36px rgba(22,119,255,0.24)`).
- Ghost CTA: surface goes from `surface-color` (translucent) to
  `surface-strong` (opaque), `translateY(-1px)`.
- Nav links: background fills with `--accent-soft`, `translateY(-1px)`,
  text darkens to `--fg-1`.
- Portrait: image scales 1.02 → 1.035.
- LinkedIn fallback card: lifts 1px + slightly stronger gradient.

**Press states.** Not explicitly defined — relies on browser defaults. There
is no shrink-on-press affordance.

**Borders.** Uniformly `1px solid var(--line-color)` (= `rgba(15,23,42,0.08)`
in light, `rgba(255,255,255,0.08)` in dark). Borders are a *separator* tool,
not a *container* tool — sections are divided by `border-top` rules between
items, not by box outlines.

**Shadows.** Two co-existing systems.
1. **Outer drop shadows** for elevated cards: `0 20px 40px rgba(15,23,42,0.08)`.
   Always slate-tinted, never black.
2. **Inner highlight shadows** for glass surfaces:
   `inset 0 1px 0 rgba(255,255,255,0.55)` on the portrait frame, `0.06` on
   the dark contact card. This is the magic ingredient — every glass surface
   has a 1px white inner top edge.

**Capsules vs protection gradients.** Capsules win. Pills (`border-radius:
999px`) are used for: every button, every nav link, every chip in
`.hero-focus`, every skill item, every link in the contact card, every
`.project-panel li`. There are no protection gradients on text against
imagery — text never sits on imagery in this design.

**Transparency & blur.** Heavily used, but always in service of "glass":
- Nav: `backdrop-filter: blur(24px) saturate(160%)` on a 90%-opaque surface.
- Hero focus chips: `backdrop-filter: blur(16px) saturate(140%)`.
- The `app-shell::before/::after` blobs: `filter: blur(80px)` ambient color
  light. These are the only fully-blurred decorative elements.

**Imagery color vibe.** Single portrait reads warm-neutral, slightly
desaturated, soft contrast — not editorial-cool, not heavily-graded. The
overall palette of the page is cool (slate + electric blue), so the warmth
of the portrait provides intentional contrast.

**Corner radii.** A graduated scale.
- `0.8rem` — micro chips (rare).
- `1.5rem` — secondary cards (LinkedIn block).
- `1.6rem` — experience cards.
- `1.8rem` — project panels.
- `2rem` — contact card.
- `2.4rem` — portrait frame.
- `2.5rem` — contact-section background lip.
- `999px` — buttons, chips, pills, nav links.

**Cards.** The "experience card" pattern is the canonical card:
`padding: 1.35rem 1.4rem 1.45rem`, `border-radius: 1.6rem`,
double-layer background
(`linear-gradient(180deg, rgba(255,255,255,0.72), rgba(255,255,255,0.48)),
var(--surface-color)`), `1px solid rgba(255,255,255,0.8)` border (yes, white
not slate — this is intentional on glass), and the `0 20px 40px
rgba(15,23,42,0.08)` shadow.

**Layout rules — fixed elements.**
- The nav is `position: sticky; top: 0` — pill-shaped, `1rem 1rem 0`
  outer padding, glass-blurred.
- `.app-shell::before/::after` glow blobs are `position: fixed` and behind
  everything (z-index 0).
- Section headings inside two-column sections are `position: sticky; top:
  7rem` so they parallax with content.

## Iconography

**Vikas's portfolio uses almost no icons.** This is a defining trait — the
site relies on type, color, and layout for hierarchy, not iconography.
There is no icon font (`@fortawesome`, `lucide`, `heroicons`, etc.) in
`package.json`.

**What is used:**
- The brand mark — `assets/favicon.svg` — a stylized monogram. Used in the
  navbar (`2.1rem × 2.1rem`, `border-radius: 0.8rem`,
  `drop-shadow(0 10px 18px rgba(76,144,255,0.18))`) and as the favicon at
  16/32/180px.
- The OG card — `assets/og-card.svg` (also rendered to PNG) — the social
  preview at 1200×630.
- That's it. There are no inline SVG icons, no PNG icons, no emoji, no
  unicode-as-icon (no chevrons, no arrows).

**Where you'd expect icons but there aren't any:**
- Buttons ("Email Vikas", "LinkedIn", "GitHub", "Resume PDF") — text only.
- Skill chips — text only, separated by middle dots in body copy.
- Nav links — text only.
- Footer — text only.

**Recommendation for new surfaces.** Stay icon-free unless absolutely needed.
If you must add icons (e.g. a settings dashboard mock), use **Lucide** at
`stroke-width: 1.5` in the accent color or `--fg-3` — its restrained,
1.5-weight aesthetic is closest to this brand. Document any addition here.

⚠️ **Substitution flag for the user:** there are no local font files in the
codebase — `Manrope` and `IBM Plex Mono` are loaded from Google Fonts. If
you need offline resilience or want to ship a self-contained skill, drop
the `.woff2` files into `fonts/` and update `colors_and_type.css`.
