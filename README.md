# Project Website — Trajectory Fine-Tuning of Local LLMs for Mobile Manipulation

Static, dependency-free project page (GitHub Pages ready).

## Files
- `index.html` — the page
- `style.css`  — design tokens and layout
- `gallery.js` — **the demo data lives here.** The `DEMOS` array defines
  each of the five cards: title, spoken instruction, summary, clip path
  (or YouTube ID), and the full [OBS]/[THINK]/[ACT] terminal log, pasted
  verbatim — the parser reads the tags and wraps continuation lines.
- `assets/`    — images and videos; see `assets/README.md` for the folder
  layout and encoder settings.

## Swap in the real footage
Drop each .mp4 at the path listed in `assets/README.md`; the matching
card picks it up with no code change. A new demo = one new entry in
`DEMOS` plus its clip.

Cards whose file is absent render as labelled "clip pending" placeholders
with the expected path, so the draft stays presentable at every stage.

## Local preview
    python3 -m http.server 8000
    # open http://localhost:8000

## Deploy
Push to a `gh-pages` branch or enable Pages on `main` — no build step.
