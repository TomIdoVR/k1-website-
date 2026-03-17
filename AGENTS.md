# K1 Website — Agent Coordination File

## Project Overview
KabatOne marketing/product website. Single-page HTML mockup showcasing the Avalon platform for public safety / smart city tech.

**Primary file:** `hero-mockup.html` (4,344 lines — all HTML + CSS + JS in one file)
**Images:** `images/modules/` — PNG screenshots for each module tab

---

## Design System

| Token | Value |
|---|---|
| `--bg` | `#0f1724` (dark navy background) |
| `--bg-2` | `#0b1220` |
| `--blue` | `#3b82f6` |
| `--blue-light` | `#60a5fa` |
| `--cyan` | `#06b6d4` |
| `--white` | `#e6eef8` |
| `--muted` | `#4a5c7a` |
| `--dim` | `#94a3b8` |

**Fonts:**
- `Barlow Condensed` — headings/display (wght 600–900)
- `Space Grotesk` — body text (wght 300–700)
- `DM Mono` — data / code labels

---

## Page Structure (line numbers in hero-mockup.html)

| Section | Lines | Description |
|---|---|---|
| CSS | 11–1096 | All styles |
| Nav | ~1113 | Top navigation bar |
| Hero | 1129–1162 | Main headline + CTA |
| Modules Section | 1167–1470 | 9-tab module carousel (GIS, Video, AI, Dispatch, BI, Events, Integrations, Responder, Citizen) |
| Proof Section | 1475–1529 | Stats / social proof |
| Products Section | ~1740–1865 | 5 products, alternating text+screen layout (K-Safety, K-Traffic, K-Video, K-Connect, K-Dispatch) |
| PAV Section | ~1867+ | Platform Architecture Visual + trust badges + dashboard mockup |
| Why Section | 1919–1991 | Why KabatOne |
| CTA Section | 1996–2015 | Call to action / footer CTA |
| JS | ~2016–4344 | All JavaScript |

---

## Module Tabs (in Modules Section)

Each module has: a tab button + a panel (`#panel-{name}`) + an image in `images/modules/{name}.png`

| Module | Color | ID |
|---|---|---|
| GIS | `#3b82f6` | `gis` |
| Video | `#06b6d4` | `video` |
| Dispatch | `#ef4444` | `dispatch` |
| Events | `#f97316` | `events` |
| Integrations | `#22c55e` | `integrations` |
| Responder | `#eab308` | `responder` |
| Citizen | `#60a5fa` | `citizen` |
| AI | `#06b6d4` | `ai` |
| BI | `#a855f7` | `bi` |

---

## Git Workflow

- **Branch:** `main`
- **Remote:** `https://github.com/TomIdoVR/k1-website-.git`
- **Live URL (GitHub Pages):** `https://tomidovr.github.io/k1-website-/hero-mockup.html`
- Pushes to GitHub are done **on explicit request only** — do not auto-push
- Commit message format: `"Section: short description of change"`

---

## Agent Rules

1. **One agent per section** — coordinate which section you're working on to avoid conflicts
2. **Do not restructure CSS** — add new rules at the bottom of the `<style>` block
3. **Do not rename IDs** — JS depends heavily on element IDs
4. **Images stay in** `images/modules/` — do not move or rename them
5. **Ask before deleting** any existing content
6. **Test locally** before requesting a push
7. **Update the changelog before every commit** — add a new entry to `CHANGELOG.md` describing what you changed. Use the existing format: version, date, title, and bullet points grouped by Added / Fixed / Changed. Also update `changelog.html` with a matching `<div class="tl-entry">` block at the top of the timeline.

---

## Current Status / Open Tasks

> Update this section as work progresses

- [ ] Enable GitHub Pages (pending — owner needs to set in repo Settings)
- [ ] (Add tasks here as they're assigned)
