# HTML/CSS Hero Cards Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

## Completion / Handoff Log

**Status:** Completed locally in the isolated `codex/hero-reference-rebuild` worktree.

**Preview:** `http://127.0.0.1:3000/en/hero-lab`

**Final approach:** The seven hero cards are now shared HTML/CSS card structures. The owner-supplied PNGs are no longer used as full-card overlays; they are used only inside bounded visual crop regions for Video & Analytics, GIS / Map, Unified Digital Evidence, and Mobile Response. CAD / 911, Event Management, and Integrations are fully rendered in HTML/CSS/SVG.

**Files changed for this card pass:**
- `src/components/hero-lab/HeroV3Platform.tsx` — semantic card markup, approved metrics, and bounded media usage.
- `src/components/hero-lab/HeroCardMedia.tsx` — reusable decorative media crop component.
- `src/app/[locale]/hero-lab/hero-lab-light.css` — final card-system overrides, shared title rhythm, a straight equal-height desktop validation row, padded media crop windows, and medium-width carousel behavior.
- `public/images/hero-cards/header-logo-lockup.png` — owner-supplied KabatOne `K + KABAT ONE` silhouette used as a CSS mask in the hero header.
- `tests/hero-reference-contract.test.mjs` — source-level contract covering seven cards, four padded raster media regions, shared title rhythm, straight equal-height desktop geometry, carousel accessibility, and responsive behavior.
- `CHANGELOG.md` and `changelog.html` — updated v2.273 to describe the final HTML/CSS card architecture.

**Verified final state:**
- `node --test tests/hero-reference-contract.test.mjs` — 5/5 passing.
- `npm run build` — completed successfully.
- `curl http://127.0.0.1:3000/en/hero-lab` — returned `200`.
- Source and layout validation confirms seven equal-height cards aligned on one row, with safer padded media frames for Video, GIS, Evidence, and Mobile.

**Important boundaries for continuous work:**
- Keep work local to `.worktrees/codex-hero-reference-rebuild`.
- Do not push, deploy, or merge without explicit owner approval.
- Do not touch `nextjs`, `main`, staging, production, or the homepage route.
- The current design is still a hero-lab iteration, not promoted to the live homepage.
- The local dev server was left running on `127.0.0.1:3000` for review at handoff time.

**Known visual note:** At medium desktop widths, the seven cards intentionally become a horizontal carousel so no card is clipped. Wide desktop is temporarily kept as a straight row for media validation.

**Latest visual adjustment:** The wide-desktop curve is temporarily disabled. All seven cards are aligned at the same height and position, while the four supplied visual sources use reduced scaling and padded crop windows so their important content remains fully visible.

**Spacing correction:** The wide-desktop platform stage now reserves the complete `76px + 378px + 40px` row geometry (`494px` total), keeping the proof metrics below the cards with their intended margin instead of overlapping the card bottoms.

**Goal:** Replace seven full-card PNG overlays with equal, accessible HTML/CSS cards that use owner-supplied raster art only inside four bounded media regions.

**Architecture:** Keep `HeroV3Platform` and `HeroCardCarousel` as the owning hero and interaction components. Add one small reusable media-crop component, expose the semantic card markup already present in `HeroV3Platform`, and append a shared card-system override block to the scoped hero stylesheet.

**Tech Stack:** Next.js 16, React, TypeScript, `next/image`, scoped CSS, Node test runner.

## Global Constraints

- Work only in `.worktrees/codex-hero-reference-rebuild` and `/[locale]/hero-lab`.
- Keep the shared base card frame for responsive fallback and the temporary straight-row validation override on wide desktop. Mobile/tablet carousel cards remain `286 × 410px`.
- Preserve the existing carousel, platform mark, navigation, hero copy, proof metrics, localization, and reduced-motion behavior.
- Do not edit or overwrite any file in `public/images/hero-cards/`.
- Do not touch the homepage, `nextjs`, `main`, staging, production, or any deployment.
- Do not commit or push unless the owner explicitly requests it.

---

### Task 1: Lock the HTML/CSS card contract

**Files:**
- Modify: `tests/hero-reference-contract.test.mjs`

**Interfaces:**
- Consumes: `HeroV3Platform.tsx`, `HeroCardMedia.tsx`, and `hero-lab-light.css` as source strings.
- Produces: regression coverage for no full-card overlays, four media crops, equal frames, and shared title geometry.

- [ ] **Step 1: Add failing source-contract assertions**

Add assertions equivalent to:

```js
const media = readFileSync('src/components/hero-lab/HeroCardMedia.tsx', 'utf8')

test('cards are semantic HTML with only four bounded raster media regions', () => {
  assert.equal((hero.match(/className="hll-card-art /g) ?? []).length, 0)
  assert.equal((hero.match(/<HeroCardMedia/g) ?? []).length, 4)
  for (const asset of ['video-analytics.png', 'gis-map.png', 'digital-evidence.png', 'mobile-apps.png']) {
    assert.match(hero, new RegExp(asset.replace('.', '\\.')))
  }
  assert.match(media, /className={`hll-card-media/)
  assert.match(media, /overflow-hidden media region/i)
})

test('all cards share one title and frame geometry', () => {
  assert.match(css, /\.hll-card-head\s*\{[\s\S]*?height:\s*46px/)
  assert.match(css, /\.hll-card-title\s*\{[\s\S]*?font-size:\s*11px[\s\S]*?line-height:\s*1\.15/)
  assert.match(css, /width:\s*200px;\s*\n\s*height:\s*340px/)
  assert.match(css, /width:\s*286px;\s*\n\s*height:\s*410px/)
})
```

- [ ] **Step 2: Run the contract test and verify RED**

Run:

```bash
node --test tests/hero-reference-contract.test.mjs
```

Expected: failure because `HeroCardMedia.tsx` does not exist and full-card `.hll-card-art` images remain.

---

### Task 2: Add the bounded media primitive

**Files:**
- Create: `src/components/hero-lab/HeroCardMedia.tsx`
- Test: `tests/hero-reference-contract.test.mjs`

**Interfaces:**
- Consumes: `src`, `width`, `height`, and `variant` props.
- Produces: `HeroCardMedia({ src, width, height, variant })`, a decorative overflow-hidden media region.

- [ ] **Step 1: Implement the reusable component**

Create a typed component with this public shape:

```tsx
import Image from 'next/image'

type HeroCardMediaProps = {
  src: string
  width: number
  height: number
  variant: 'video' | 'gis' | 'evidence' | 'mobile'
}

export function HeroCardMedia({ src, width, height, variant }: HeroCardMediaProps) {
  return (
    <div className={`hll-card-media hll-card-media--${variant}`} aria-hidden="true">
      <Image
        className="hll-card-media-source"
        src={src}
        alt=""
        width={width}
        height={height}
        sizes="(max-width: 1180px) 260px, 190px"
        unoptimized
      />
    </div>
  )
}
```

- [ ] **Step 2: Run the contract test**

Run `node --test tests/hero-reference-contract.test.mjs`.

Expected: the missing-file error is resolved; overlay and usage assertions still fail until Task 3.

---

### Task 3: Replace full-card overlays with four visual crops

**Files:**
- Modify: `src/components/hero-lab/HeroV3Platform.tsx`
- Test: `tests/hero-reference-contract.test.mjs`

**Interfaces:**
- Consumes: `HeroCardMedia` from Task 2.
- Produces: seven semantic cards and four raster media regions.

- [ ] **Step 1: Import `HeroCardMedia`**

Add:

```tsx
import { HeroCardMedia } from './HeroCardMedia'
```

- [ ] **Step 2: Remove all seven full-card overlay images**

Delete only the seven `<Image className="hll-card-art ..." />` elements from `CadCard`, `VideoCard`, `GisCard`, `EventCard`, `UdeCard`, `MobileCard`, and `IntegrationsCard`. Keep the platform-mark image and all existing semantic content.

- [ ] **Step 3: Replace the Video visual grid**

Replace the old four-thumbnail block with:

```tsx
<HeroCardMedia
  variant="video"
  src="/images/hero-cards/video-analytics.png"
  width={1040}
  height={1513}
/>
```

Keep both HTML data rows below it.

- [ ] **Step 4: Replace the GIS map visual**

Replace the CSS-generated `.hll-gis-map` visual only with:

```tsx
<HeroCardMedia
  variant="gis"
  src="/images/hero-cards/gis-map.png"
  width={1128}
  height={1394}
/>
```

Keep the HTML metrics below it.

- [ ] **Step 5: Replace the Evidence thumbnail grid**

Replace `.hll-ude-grid` with:

```tsx
<HeroCardMedia
  variant="evidence"
  src="/images/hero-cards/digital-evidence.png"
  width={1122}
  height={1402}
/>
```

Keep the HTML case row, custody label, verified state, and timeline.

- [ ] **Step 6: Replace the Mobile phone mockup**

Replace `.hll-mobile-phone` with:

```tsx
<HeroCardMedia
  variant="mobile"
  src="/images/hero-cards/mobile-apps.png"
  width={1124}
  height={1399}
/>
```

Replace the dense incident definition list with three compact HTML metrics matching the approved source render: `1,842 First Responder`, `5,736 Citizen App`, and `98% App Uptime`.

- [ ] **Step 7: Run the contract test**

Run `node --test tests/hero-reference-contract.test.mjs`.

Expected: source-structure assertions pass; CSS geometry assertions remain failing until Task 4.

---

### Task 4: Apply the shared visual system and crop geometry

**Files:**
- Modify: `src/app/[locale]/hero-lab/hero-lab-light.css`
- Test: `tests/hero-reference-contract.test.mjs`

**Interfaces:**
- Consumes: `.hll-card-media--video|gis|evidence|mobile` and the existing seven card classes.
- Produces: equal title geometry, equal body rhythm, and responsive image crops without bitmap stretching.

- [ ] **Step 1: Append shared card and header overrides**

Append a scoped block that sets:

```css
.hll-card {
  display: flex;
  flex-direction: column;
  padding: 14px 12px 16px;
}

.hll-card-head {
  flex: 0 0 46px;
  height: 46px;
  min-height: 46px;
  margin: 0 0 8px;
}

.hll-card-title {
  display: flex;
  min-height: 26px;
  align-items: center;
  font-size: 11px;
  font-weight: 720;
  line-height: 1.15;
}

.hll-card > :not(.hll-card-art) {
  opacity: 1;
}
```

Retain the existing equal `200 × 340px` and `286 × 410px` frame declarations and the one 2px bottom accent.

- [ ] **Step 2: Add the bounded media base**

Append:

```css
.hll-card-media {
  position: relative;
  flex: 0 0 auto;
  overflow: hidden;
  border: 1px solid rgba(67, 92, 142, 0.08);
  border-radius: 9px;
  background: #eef4fb;
}

.hll-card-media-source {
  position: absolute;
  max-width: none;
  height: auto;
  pointer-events: none;
  user-select: none;
}
```

- [ ] **Step 3: Add module crop variables**

Use one source image per media region and crop only the approved source rectangle:

```css
.hll-card-media--video { height: 152px; }
.hll-card-media--video .hll-card-media-source { width: 124%; left: -12%; top: -35%; }

.hll-card-media--gis { height: 130px; }
.hll-card-media--gis .hll-card-media-source { width: 112%; left: -6%; top: -20%; }

.hll-card-media--evidence { height: 112px; }
.hll-card-media--evidence .hll-card-media-source { width: 122%; left: -11%; top: -19%; }

.hll-card-media--mobile { height: 178px; }
.hll-card-media--mobile .hll-card-media-source { width: 112%; left: -6%; top: -18%; }
```

Tune only these four width/left/top values during visual verification. Never set a forced image height.

- [ ] **Step 4: Normalize each HTML body to the shared vertical rhythm**

Use existing module selectors to reduce oversized margins and heights so every card fits the shared frame. Do not change copy or semantic order. Ensure the last content row ends at least 12px above the bottom accent.

- [ ] **Step 5: Run the contract test and verify GREEN**

Run `node --test tests/hero-reference-contract.test.mjs`.

Expected: 8 tests pass, 0 fail.

---

### Task 5: Document and verify the rebuilt cards

**Files:**
- Modify: `CHANGELOG.md`
- Modify: `changelog.html`
- Verify: `src/components/hero-lab/HeroV3Platform.tsx`
- Verify: `src/components/hero-lab/HeroCardMedia.tsx`
- Verify: `src/app/[locale]/hero-lab/hero-lab-light.css`

**Interfaces:**
- Consumes: completed card system from Tasks 1–4.
- Produces: a documented, reviewable local hero implementation.

- [ ] **Step 1: Update both changelogs**

Add matching `v2.273` bullets stating that full-card PNG overlays were replaced by semantic HTML/CSS and supplied art is now limited to bounded visual crops.

- [ ] **Step 2: Run automated verification**

Run:

```bash
node --test tests/hero-reference-contract.test.mjs
npx eslint src/components/hero-lab/HeroV3Platform.tsx src/components/hero-lab/HeroCardMedia.tsx src/components/hero-lab/HeroCardCarousel.tsx 'src/app/[locale]/hero-lab/page.tsx'
git diff --check
npm run build
```

Expected: tests pass, lint exits 0, diff check exits 0, and the Next.js production build completes.

- [ ] **Step 3: Verify desktop layout**

At `1536 × 1024`, confirm seven equal `200 × 340px` cards, identical 46px headers and 11px titles, no full-card overlays, no internal frame seams, one 2px accent per card, and no horizontal overflow.

- [ ] **Step 4: Verify tablet and mobile layout**

At the existing responsive breakpoints, confirm `286 × 410px` cards, correctly centered media crops, working controls, swipe/keyboard navigation, and no clipped operational text.

- [ ] **Step 5: Leave the local preview open**

Keep `http://127.0.0.1:3000/en/hero-lab` available for owner review. Do not commit, push, or deploy.
