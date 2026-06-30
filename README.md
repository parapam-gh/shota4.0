# Shota 4.0

Birthday invitation site — Georgia + Armenia, autumn 2026.

Imported from Claude Design. Static site: the `.dc.html` pages self-bootstrap
(React + the `dc-runtime` in `support.js`, loaded from a CDN), so they render as
plain static files — no build step.

## Pages
- `Route Page.dc.html` — the invitation (hero, route, supra, RSVP)
- `Schedule Page.dc.html` — day-by-day skeleton
- `Mobile Preview.html` — both pages in phone frames

## Layout
- `_ds/…` — design system (tokens + component bundle)
- `assets/` — photos, folk stamps, textures, carpet divider
- `.nojekyll` — required so GitHub Pages serves the `_ds/` folder (underscore-prefixed)
