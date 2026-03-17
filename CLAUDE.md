# KabatOne Website — Claude Code Instructions

> These instructions apply to ALL agents and contributors working in this repo.
> Claude Code reads this file automatically at session start.

---

## MANDATORY: Update the changelog before every commit

**This is non-negotiable.** Before committing any change:

1. Open `CHANGELOG.md` and add a new entry at the top (below the header):
   ```
   ## [X.Y] YYYY-MM-DD — Short title
   **Added / Fixed / Changed / Improved**
   - bullet describing what changed and why
   ```
2. Open `changelog.html` and add a matching `<div class="tl-entry">` block at the very top of `<div class="timeline">`.
3. Stage `CHANGELOG.md` and `changelog.html` in the same commit as your changes.

If you made local changes and haven't logged them yet — log them now before doing anything else.

---

## Project snapshot

- **Stack:** Static HTML/CSS/JS, no build system
- **Primary file:** `hero-mockup.html` (~4400 lines — all HTML + CSS + JS)
- **Live URL:** `https://tomidovr.github.io/k1-website-/hero-mockup.html`
- **Remote:** `https://github.com/TomIdoVR/k1-website-.git` — branch `main`
- **Full rules:** See `AGENTS.md`

## Git workflow

- **Commit your changes** when the task is complete — do not leave edits as uncommitted local changes
- **Do not push** without explicit user request — commit locally, then wait
- Commit message format: `Type: short description (vX.Y)` — e.g. `Fix: nav links on industry pages (v0.7)`
- Always include `CHANGELOG.md` and `changelog.html` in the same commit as your changes

## Key constraints

- Do not restructure existing CSS — append new rules at the bottom of `<style>`
- Do not rename element IDs — JS relies on them
- Do not delete files without asking first
