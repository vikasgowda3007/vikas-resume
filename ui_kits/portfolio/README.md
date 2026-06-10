# Portfolio UI Kit

A pixel-faithful React recreation of the Angular 21 single-page portfolio at
`vikas-portfolio/`. It is the single product in this brand — a long-form
scrolling site with six sections: Hero · About · Experience · Projects ·
Skills · Contact.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Mounts the full page. Loads React, theme init, fonts, components. |
| `styles.css` | Global tokens + base reset (mirrors `src/styles.scss`). |
| `sections.css` | All section-level + nav layout/style (mirrors the section SCSS files). |
| `data.js` | Resume data object — port of `src/app/core/data/resume-data.ts`. |
| `Header.jsx` | `<Navbar>`, `<Hero>`, `<About>`. |
| `Sections.jsx` | `<Experience>`, `<Projects>`, `<Skills>`, `<Contact>`. |

## Components

| Component | Purpose |
| --- | --- |
| `<Navbar>` | Sticky pill-shaped glass nav with active section highlighting. |
| `<Hero>` | Two-column hero — name + role + CTAs + focus chips on the left, portrait orbit on the right. |
| `<About>` | Sticky-headline two-column layout with facts grid + education stack. |
| `<Experience>` | Period column + glass cards with company / role / impact / highlights / tech list. |
| `<Projects>` | Numbered project rows with focus-pill side panel; clickable selection state. |
| `<Skills>` | Sticky operating-system heading + chip groups by category. |
| `<Contact>` | Inverted dark surface with email CTA + elsewhere links. |

## Interactivity

- Nav links smooth-scroll to the corresponding section and update the active
  pill.
- Project rows are clickable — selection sets the `.active` row tint.
- Theme initialization respects the user's `prefers-color-scheme` and stored
  `localStorage['vikas-theme']` value (no toggle UI is shown — matches the
  original site behavior on first paint).

## Things deliberately omitted

- The LinkedIn embed badge (third-party iframe, not a design artifact).
- Service-worker / SSR / Angular runtime concerns.
- The full reveal-up animation stagger — only ambient `drift` on the
  portrait orbit is kept.

## Verifying against the original

Open the live site at https://vikas-keshavamurthy.vercel.app/ side-by-side
with `index.html`. The layout, type ramp, color usage, card chrome, and
spacing should match. Differences should be flagged in the system README.
