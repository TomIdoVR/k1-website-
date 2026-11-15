# KabatOne Demo — Full QA Audit Report
**Target:** `http://localhost:3000/en/demo`
**Date:** April 10, 2026
**Auditor:** Claude QA Agent
**Scope:** Hub page + LPR (Stolen Vehicle) scenario · all 5 stages · nav tabs · code review

---

## Executive Summary

The demo is conceptually outstanding — the cinematic incident lifecycle format, the five-stage progression, and the scenario variety collectively make a compelling case for the platform. The DETECT and UNDERSTAND stages are genuinely impressive buyer experiences. However, **three of the five stages in the primary scenario are either completely blank or barely visible**, which is a showstopper. A buyer who clicks through a demo and hits a blank screen three times will not recover from that impression. These issues must be resolved before any live demo. Beyond the functional bugs, there are meaningful UX gaps — non-functional navigation tabs, a scroll layout problem on the hub, and a contrast failure on the LEARN stage — that collectively undermine confidence in the product's polish.

---

## 🔴 Functional Issues

| Severity | Type | Description | Recommendation |
|----------|------|-------------|----------------|
| **Critical** | Blank stage render | DECIDE stage (`?stage=decide`) renders completely blank when loaded via URL or the Next Stage button. The TopBar renders correctly (stage pill highlights), but the `ProtocolPanel` component body is invisible. A Next.js "1 Issue" error badge confirms a runtime error. | Investigate `ProtocolPanel.tsx`: the grid has `gridTemplateRows: '36px 1fr auto'` but six children (including a `<style>` tag). The main content row and nav buttons likely overflow into `overflow: hidden` rows. Also check whether the Leaflet `DecideMapPanel` dynamic import is throwing an error that silently kills the parent component. Add an error boundary. |
| **Critical** | Blank stage render | ACT stage (`?stage=act`) renders completely blank, identical failure mode. `SplitLayout.tsx` uses `DispatchMap` (another Leaflet dynamic import with `ssr: false`). | Same fix path as DECIDE. Confirm Leaflet initialises cleanly inside the `calc(58vh + 110px)` fixed-height container, and add an error boundary to `SplitLayout`. |
| **Critical** | Near-invisible LEARN stage | LEARN stage (`?stage=learn`) renders content — "CASE CLOSED," incident timeline, performance ring — but at ~10% apparent opacity. The content is visible only when zoomed in. The stage is technically present but effectively unreadable at normal viewport scale. | The `LearnLayout` component likely has a color or opacity bug — possibly `rgba(255,255,255,0.05)` or similar on a text or background layer. Read the component and audit text colours against the dark background for WCAG AA compliance. |
| **Critical** | Scroll gap on hub page | After any scroll on `/demo`, a large blank dark area (~350px) appears between the top of the viewport and the sticky nav, with the scenario cards appearing below. The hero section scrolls out of view too quickly, leaving a visually confusing gap. | Reduce hero section height or add `scroll-snap` / anchor scroll behaviour so the page snaps between the hero and the scenario grid. Alternatively, reduce `padding-top: 64px` on `<main>` and tighten the lifecycle section spacing. |
| **Warning** | Non-functional nav tabs | The "Operations," "Intelligence," and "Archive" tabs in the hub nav are plain `<span>` elements — no links, no click handlers, no associated content. Clicking them does nothing. | Either remove them until implemented, or stub them with an "In Preview" tooltip. A buyer clicking a tab that does nothing reads as unfinished product. |
| **Warning** | Stage transition shows stale content | When clicking "NEXT: UNDERSTAND" from the DETECT stage, the UNDERSTAND pill highlights in the nav but the main panel briefly still shows "STAGE 01: DETECT." The `AnimatePresence` fade (`duration: 0.35s`) overlaps with the state update, causing the wrong content to flash. | Confirm `mode="wait"` in `AnimatePresence` is working as intended, or add a local loading state before the stage swap. |
| **Warning** | Material Symbols render as text strings | On the ACT stage and intermittently elsewhere, Material Symbols icons (`chevron_right`, `videocam`, `emergency`, etc.) display as raw text strings rather than glyphs. The font is loaded via `@import url(…)` inside a `<style>` tag in the layout, which is parse-blocking but asynchronous in practice. | Move Material Symbols to a `<link rel="preload">` in `<head>` via the Next.js `Metadata` API, or import it through `next/font`. This ensures the font is available before first render. |
| **Warning** | Unused variable in `ScenarioPlayer` | `isDefaultLayout` (line 78 in `ScenarioPlayer.tsx`) is defined but never referenced. | Remove it. It suggests a planned feature that was abandoned — clarify intent. |
| **Info** | External CDN for Leaflet CSS | `DispatchMap.tsx` fetches Leaflet CSS from `https://unpkg.com/leaflet@1.9.4/dist/leaflet.css` at runtime. This creates a network dependency in every demo session. | Bundle Leaflet CSS locally (`import 'leaflet/dist/leaflet.css'`) matching the approach in `DecideMapPanel.tsx`, which imports it directly. |
| **Info** | Next.js "1 Issue" dev error badge | The red "N · 1 Issue" badge was visible throughout the LPR scenario player. | Address the underlying runtime error (likely related to the blank stage issue). The badge is dev-only, but the error it flags will affect production visitors. |

---

## 🎨 Design Issues

| Severity | Area | Finding | Recommendation |
|----------|------|---------|----------------|
| **Warning** | Hero typography — hub page | The h1 heading ("THE UNIFIED OPERATING SYSTEM FOR PUBLIC SAFETY") renders at ~6rem italic bold and wraps to 3+ lines, consuming ~45% of the initial viewport height. The lifecycle stages and scenario cards are barely visible on first load, giving the impression that there is nothing below the fold. | Reduce hero font size to `clamp(2.5rem, 4.5vw, 4.5rem)` — still commanding, but leaving 50% of the viewport to show the stages and the top of the scenario grid. This also prevents the large post-scroll gap. |
| **Warning** | Visual hierarchy — lifecycle strip | On the hub page, only "DETECT" is highlighted (blue fill, blue border). The remaining four stages (UNDERSTAND, DECIDE, ACT, LEARN) are rendered as dim grey inactive states. This implies the lifecycle is incomplete or non-interactive, not that it's a description of what every scenario traverses. | Either highlight all five stages at equal weight (communicating they're all active), or add a hover state that previews each stage — currently this strip does no UX work for the buyer. |
| **Warning** | Contrast — LEARN stage | The post-incident analysis panel ("CASE CLOSED," incident timeline, performance metrics) is nearly invisible at viewport scale. This fails WCAG AA (4.5:1 contrast ratio for body text). Text colours like `rgba(255,255,255,0.2)` and the overall opacity of the container must be corrected. | All body text should be minimum `rgba(255,255,255,0.6)`. Primary values and labels should reach `#E0ECF8` or white. Test with a contrast checker before shipping. |
| **Info** | Avatar image in hub nav | The avatar image at the top-right of the hub nav (`/demo/hub/avatar.jpg`) appears cropped or not loading correctly — a partial "Ope" string is visible next to the circle, suggesting a fallback state. | Confirm the image exists at the correct path and is properly sized at 36×36px. Consider replacing with a generic operator initials placeholder if the image is a placeholder. |
| **Info** | Hub page — no scroll indicator | There is no visual cue that content exists below the hero (no scroll arrow, no partial card peeking above the fold). First-time visitors may not scroll. | Add a subtle animated chevron or ensure the scenario cards are partially visible on the initial load — this alone would solve the problem if the hero font size is reduced. |
| **Info** | Module pills row — hub page | The "Platform Modules" section renders 9 icon+label pills horizontally. They have no interactivity, no hover state, and no description. They function as a logo bar without conveying any meaning to a buyer unfamiliar with the product. | Consider either linking each pill to its relevant section, or adding a 1-line benefit tooltip on hover (e.g., hovering "AI Engine" shows "Real-time threat scoring across all sensors"). |

---

## ✍️ Content Issues

| Severity | Element | Finding | Recommendation |
|----------|---------|---------|----------------|
| **Critical** | Non-functional nav tabs | "Operations," "Intelligence," "Archive" appear to be platform sections but are completely stub content. A buyer exploring the product will immediately try to click these. The disappointment of nothing happening is amplified by the demo context — this is supposed to show platform breadth. | Remove or visually mark as "Coming soon" until implemented. Consider a tooltip: "Full platform navigation preview coming." |
| **Warning** | Hero subheadline | "One platform. Every scenario." is punchy but tells a buyer nothing about *why* integration matters, *who* benefits, or *what* is unique. It reads as a tagline, not a value proposition. | Add 1–2 sentences below the tagline: e.g., "Detect, understand, decide, act, and learn — all from a single command centre. No vendor fragmentation. No delayed response." |
| **Warning** | Scenario CTA copy | The "START →" action on each scenario card is minimal. First-time buyers don't know what they're starting — a video, a slideshow, or an interactive walkthrough. The investment required is unclear. | Change to "Walk through this scenario →" or "See this live →". Optionally, add an estimated time: "(~3 min walkthrough)." |
| **Warning** | Missing credibility signals | The demo hub page has no numbers, customer logos, geography references, or agency-type references. A buyer evaluating a B2G public safety platform needs signals of real-world deployment before they trust the demo. | Add a single line of social proof above or below the scenario grid: e.g., "Used across 40+ agencies · Deployed in [region] · ISO 27001 certified" — or whatever is accurate. Even a static strip of 3 anonymous agency logos would meaningfully increase trust. |
| **Info** | Scenario descriptions | The descriptions use mid-dot separators ("LPR detection · AI verification · unit dispatch"). This reads like a feature list, not an outcome. | Reframe around outcome: "A stolen vehicle is flagged, verified by AI, and intercepted — in under 9 minutes." This primes the buyer to feel the value of what they're about to see. |
| **Info** | Footer copy | "All Systems Operational" in the footer is a nice operational detail, but the "System Status" link is non-functional. | Remove or link to an actual status page. |

---

## 🖼️ Image Issues

| Severity | Location | Finding | Recommendation |
|----------|----------|---------|----------------|
| **Warning** | All scenario thumbnails | The five hub card images are AI-generated photographic imagery (surveillance cameras, night streets, ambulances, school hallways, biometric screens). The quality and cinematic tone are strong and contextually appropriate. However, they are identifiably synthetic — an informed buyer may register this and associate it with a "not yet real" product. | If real deployment imagery exists (even anonymised screenshots), use it here. If not, the current AI imagery is acceptable, but supplement with 1–2 data points in the cards that reference real operational contexts. |
| **Warning** | DETECT stage — overlay graphics | The LPR detection scene shows license plate bounding boxes (ABC-1234, XYZ-5678) and a "STOLEN VEHICLE DETECTED" alert. These are well-designed and authentic-looking. However, all plate numbers are clearly fictitious/generic. | Consider using more realistic-looking plate formats matching a specific state or country context (e.g., Texas plates if targeting the US market). Small detail, but improves believability during a live demo. |
| **Info** | UNDERSTAND stage background | The GIS city track image (`/demo/lpr/stage-2-understand.jpg`) is a high-quality 3D city rendering with a glowing neon trail. It looks compelling as a backdrop. | Keep it. The image works well and reinforces the GIS live-tracking narrative. |
| **Info** | DECIDE and ACT backgrounds | These stages have background images defined in data (`stage-3-decide.jpg`, etc.) but since the stages themselves render blank, the images are never displayed. | Once the blank-stage bug is fixed, verify the background images load and are correctly sized/positioned. |

---

## Priority Fixes

Ranked by visitor impact during a buyer demo:

1. **Fix DECIDE and ACT blank stage renders** — a buyer who hits two consecutive blank screens after a great DETECT stage will leave with a negative impression. Investigate the `ProtocolPanel` grid overflow, add error boundaries, and confirm Leaflet initialises inside fixed-height containers.

2. **Fix LEARN stage contrast** — the final stage ("CASE CLOSED" + performance metrics) is the most emotionally resonant moment in the demo. It needs to land visibly.

3. **Remove or stub the Operations/Intelligence/Archive tabs** — every demo walkthrough ends with a buyer trying to click these. The current behaviour (nothing happens) actively undermines confidence.

4. **Fix the hub page hero scroll gap** — reduce the hero font size by ~30% so the scenario cards are visible on first load and the post-scroll gap disappears.

5. **Fix Material Symbols font loading** — icons rendering as text strings (`chevron_right`, `videocam`) in any stage looks broken. Preload the font via `<link rel="preload">`.

6. **Add one line of social proof to the hub** — a single credibility sentence above the scenario grid converts the demo from "company website feature" to "proven platform."

---

## What's Working Well

**The DETECT and UNDERSTAND stages are genuinely excellent.** The cinematic LPR detection panel — with live plate boxes, a confidence readout, a pulsing "STOLEN VEHICLE DETECTED" alert, and the split PiP feed — immediately communicates platform capability. It looks and feels like real operational software, not a mockup. This is the right tone for a B2G demo.

**The five-stage Detect → Understand → Decide → Act → Learn framework is brilliant positioning.** It reframes every scenario as a structured workflow rather than a feature tour, which is exactly how procurement buyers think. Once the blank stages are fixed, this structure will carry significant weight in a sales conversation.

**The scenario variety covers the right buyer mental models.** Stolen Vehicle, Violence Detection, 911 Emergency, School Panic Button, Access Control — these map directly to the purchasing conversations that public safety agencies have. Each scenario validates a different module investment.

---

*Report generated by Claude QA Agent — April 10, 2026*
