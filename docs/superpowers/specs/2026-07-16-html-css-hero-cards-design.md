# HTML/CSS Hero Cards — Design Specification

## Conclusion / Current Design State

This specification has been implemented locally in the isolated `codex/hero-reference-rebuild` worktree for `/[locale]/hero-lab`.

The final card architecture is HTML/CSS first:

- All seven cards share one frame size, title system, icon size, spacing rhythm, border, shadow, and bottom accent.
- Full-card PNG overlays are no longer used.
- Owner-supplied PNGs are used only inside bounded media windows for the four cards where the image detail matters: Video & Analytics, GIS / Map, Unified Digital Evidence, and Mobile Response.
- CAD / 911, Event Management, and Integrations are fully semantic HTML/CSS/SVG.
- Medium desktop widths use horizontal carousel behavior to avoid cutting off equal-width cards.
- The hero remains isolated to `/hero-lab`; it has not been promoted to the homepage or any deployment branch.

Verification at handoff:

- Contract test: `node --test tests/hero-reference-contract.test.mjs` passed 5/5.
- Production build: `npm run build` passed.
- Local preview: `http://127.0.0.1:3000/en/hero-lab` returned `200`.
- Browser geometry check confirmed all seven cards at `200 × 340` with matching top, bottom, title top, and title height.

## Scope

Rebuild only the seven cards inside the isolated `/[locale]/hero-lab` hero. Keep the navigation, headline, CTAs, platform mark, proof metrics, carousel behavior, route isolation, and deployment boundaries unchanged.

## Chosen Approach

Replace every full-card PNG overlay with a shared HTML/CSS card system. Use the owner-supplied renders only as cropped visual sources inside dedicated media regions. Do not edit or overwrite the original image files.

This is preferred over two rejected alternatives:

1. **Continue fitting full-card PNGs:** visually closest at first glance, but permanently preserves inconsistent typography, title heights, borders, shadows, and baked accent lines.
2. **Recreate every visual in CSS/SVG:** maximizes control, but would replace the strongest owner-supplied imagery and add unnecessary implementation complexity.

## Shared Card System

All seven cards use one `CardShell` visual contract:

- Equal outer dimensions: `200 × 340px` on the desktop stage and `286 × 410px` in the tablet/mobile carousel.
- One border radius, border, background, shadow, padding system, and 2px bottom accent.
- One fixed-height header region across all cards.
- One 30px module icon, one title font size, one title weight, and one line-height.
- Titles are vertically centered in the same header box. Long titles may wrap to two lines without changing the header height or shifting the card body.
- Shared spacing tokens control the gap between header, primary visual, data rows, and footer content.

## Card Content

### CAD / 911

Fully rendered in HTML/CSS/SVG: active-call panel, location, waveform, and three dispatched-unit rows.

### Video & Analytics

HTML title and data rows. The owner-supplied `video-analytics.png` is cropped only to the 2 × 2 street-camera visual region. Detection overlays remain CSS so they stay sharp and responsive.

### GIS / Map

HTML title and metrics. The owner-supplied `gis-map.png` is cropped only to the map viewport. Metric boxes and labels are rendered as HTML.

### Event Management

Fully rendered in HTML/CSS/SVG: three counters, four event rows, timestamps, and the additional-events line.

### Unified Digital Evidence

HTML title, case details, evidence count, custody status, and timeline. The owner-supplied `digital-evidence.png` is cropped only to the evidence-thumbnail grid.

### Mobile Response

HTML title and usage metrics. The owner-supplied `mobile-apps.png` is cropped only to the paired-phone visual region.

### Integrations

Fully rendered in HTML/CSS/SVG: six integration icons and labels plus the additional-integrations line.

## Image Handling

- No full-card image may cover a card.
- Visual crops live in bounded, overflow-hidden media containers.
- Source images preserve their aspect ratio and use module-specific position variables.
- Crop positioning scales with the card breakpoint; no bitmap is stretched.
- Existing source files in `public/images/hero-cards/` remain unchanged for traceability and parallel Claude Code work.

## Accessibility and Localization

- Operational labels and values remain real text, not text embedded in images.
- Existing English and Spanish strings remain supported.
- Decorative media crops use empty alt text; card titles remain semantic headings.
- Existing keyboard, swipe, pagination, and reduced-motion carousel behavior remains unchanged.

## Verification

- Contract test confirms seven cards, shared title metrics, a straight equal-height desktop validation row, padded media crops, responsive carousel dimensions, and absence of full-card overlays.
- Contract test confirms only the four approved media regions use supplied raster art.
- Visual verification at `1536 × 1024`, tablet, and mobile widths.
- Verify no clipping, stretching, internal frame seams, duplicate accents, or horizontal page overflow.
- Run targeted lint, `git diff --check`, and the production build before handoff.

## Isolation

All work remains in the `codex/hero-reference-rebuild` worktree and `/hero-lab` route. No homepage, staging branch, production branch, push, or deployment change is included.
