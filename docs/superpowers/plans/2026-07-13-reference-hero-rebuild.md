# Reference Hero Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

## Current Status / Supersession Note

This original reference-hero plan has been implemented and then refined by the follow-up HTML/CSS card pass documented in:

- `docs/superpowers/specs/2026-07-16-html-css-hero-cards-design.md`
- `docs/superpowers/plans/2026-07-16-html-css-hero-cards.md`

Use those newer documents as the current source of truth for the card system. The current local result keeps the reference hero isolated on `/[locale]/hero-lab`, uses the approved `70M+`, `40+`, and `99.9%` proof metrics, and renders semantic HTML/CSS cards with supplied artwork only in bounded visual regions. Wide desktop is temporarily held as a straight row of seven equal-height cards while the four supplied PNG media regions are validated for complete, unclipped visuals.

Final verification recorded for the current local state:

- `node --test tests/hero-reference-contract.test.mjs` passed 5/5.
- `npm run build` passed.
- `http://127.0.0.1:3000/en/hero-lab` returned `200` during handoff.

Do not promote, push, deploy, or merge this work without explicit owner approval.

**Goal:** Rebuild the isolated `/hero-lab` hero to closely match `/Users/omercnaani/Downloads/hero.png` at 1536 × 1024, with bilingual copy and a controlled mobile carousel, without changing any lower homepage section.

**Architecture:** Keep `HeroV3Platform` as a server-rendered composition of seven semantic operational cards. Add one focused client component, `HeroCardCarousel`, for mobile/tablet scrolling, controls, dots, drag/swipe, and keyboard behavior. Keep every visual rule scoped to `.hll-` selectors in `hero-lab-light.css`; do not modify the live homepage during this iteration.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, scoped CSS, Next Image, Node's built-in test runner.

## Global Constraints

- Work only in `.worktrees/codex-hero-reference-rebuild/` on branch `codex/hero-reference-rebuild`.
- Review only through local `/en/hero-lab` and `/es/hero-lab`; do not push, deploy, or merge.
- Use 1536 × 1024 as the primary desktop comparison viewport.
- Use exactly these proof metrics: `70M+`, `40+`, and `99.9%`.
- Preserve EN/ES content and accessible navigation.
- Tablet/mobile cards use swipe/drag, previous/next buttons, pagination dots, scroll snapping, and keyboard navigation; no autoplay.
- Do not modify `src/app/[locale]/page.tsx` or any homepage section below the hero.
- Preserve existing unrelated lint failures as the documented baseline; introduce no new lint errors in hero files.
- Update `CHANGELOG.md` and `changelog.html` in the implementation commit.

---

### Task 1: Add a failing hero contract test

**Files:**
- Create: `tests/hero-reference-contract.test.mjs`
- Test: `tests/hero-reference-contract.test.mjs`

**Interfaces:**
- Consumes: hero component, carousel component, and scoped stylesheet source files.
- Produces: a repeatable structural contract for seven cards, approved metrics, carousel accessibility, and responsive CSS.

- [ ] **Step 1: Write the failing contract test**

```js
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const hero = readFileSync('src/components/hero-lab/HeroV3Platform.tsx', 'utf8')
const carousel = readFileSync('src/components/hero-lab/HeroCardCarousel.tsx', 'utf8')
const css = readFileSync('src/app/[locale]/hero-lab/hero-lab-light.css', 'utf8')

test('hero contains the seven reference modules and approved proof metrics', () => {
  for (const label of [
    'CAD / 911',
    'Video & Analytics',
    'GIS / Map',
    'Event Management',
    'Unified Digital Evidence',
    'Mobile Response',
    'Integrations',
  ]) assert.match(hero, new RegExp(label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))

  assert.equal((hero.match(/data-hero-card=/g) ?? []).length, 7)
  assert.match(hero, /num: '70M\+'/)
  assert.match(hero, /num: '40\+'/)
  assert.match(hero, /num: '99\.9%'/)
})

test('carousel exposes accessible controls and keyboard behavior', () => {
  assert.match(carousel, /aria-label=.*Previous/i)
  assert.match(carousel, /aria-label=.*Next/i)
  assert.match(carousel, /aria-current=/)
  assert.match(carousel, /ArrowLeft/)
  assert.match(carousel, /ArrowRight/)
  assert.match(carousel, /scrollIntoView/)
})

test('responsive styles provide a desktop stage and mobile snap carousel', () => {
  assert.match(css, /min-height:\s*1024px/)
  assert.match(css, /scroll-snap-type:\s*x mandatory/)
  assert.match(css, /scroll-snap-align:\s*center/)
  assert.match(css, /@media \(max-width:\s*900px\)/)
  assert.match(css, /prefers-reduced-motion:\s*reduce/)
})
```

- [ ] **Step 2: Run the test and verify the correct failure**

Run: `node --test tests/hero-reference-contract.test.mjs`

Expected: FAIL with `ENOENT` for `HeroCardCarousel.tsx`, proving the new carousel contract does not exist yet.

---

### Task 2: Implement the focused carousel controller

**Files:**
- Create: `src/components/hero-lab/HeroCardCarousel.tsx`
- Test: `tests/hero-reference-contract.test.mjs`

**Interfaces:**
- Consumes: `children: ReactNode`, `previousLabel: string`, `nextLabel: string`, and `slideLabel: string`.
- Produces: a `.hll-cards-viewport` region containing `.hll-cards`, `.hll-carousel-arrow` buttons, and `.hll-carousel-dot` pagination.

- [ ] **Step 1: Implement the client component**

Create a `'use client'` component that:

```tsx
type HeroCardCarouselProps = {
  children: ReactNode
  previousLabel: string
  nextLabel: string
  slideLabel: string
}
```

Use `Children.toArray(children)`, a viewport ref, card refs, `activeIndex`, and these behaviors:

```tsx
const goTo = useCallback((index: number) => {
  const next = Math.max(0, Math.min(index, cards.length - 1))
  cardRefs.current[next]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  setActiveIndex(next)
}, [cards.length])

function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
  if (event.key === 'ArrowLeft') goTo(activeIndex - 1)
  if (event.key === 'ArrowRight') goTo(activeIndex + 1)
  if (event.key === 'Home') goTo(0)
  if (event.key === 'End') goTo(cards.length - 1)
}
```

Update the active dot on scroll by selecting the card whose center is closest to the viewport center. Render disabled previous/next states at the ends, `aria-current="true"` on the active dot, and a polite screen-reader status. Native pointer/touch scrolling supplies drag/swipe; do not implement custom pointer capture.

- [ ] **Step 2: Run the contract test**

Run: `node --test tests/hero-reference-contract.test.mjs`

Expected: FAIL only on missing hero/card/CSS requirements; carousel source assertions pass.

---

### Task 3: Rebuild the hero composition and card internals

**Files:**
- Modify: `src/components/hero-lab/HeroV3Platform.tsx`
- Test: `tests/hero-reference-contract.test.mjs`

**Interfaces:**
- Consumes: `HeroCardCarousel`, `Image`, localized `Link`, and `es: boolean`.
- Produces: the complete reference hero with seven `data-hero-card` articles and approved metrics.

- [ ] **Step 1: Replace the generic hero shell with the reference hierarchy**

Use this DOM order:

```tsx
<section className="hll-page" aria-labelledby="hll-title">
  <HeroNavigation es={es} />
  <div className="hll-hero-head">
    <p className="hll-eyebrow">{T.eyebrow[language]}</p>
    <h1 className="hll-headline" id="hll-title">
      {T.h1a[language]}
      <span className="hll-headline-grad">{T.h1b[language]}</span>
    </h1>
    <p className="hll-sub">{T.sub[language]}</p>
    <HeroActions es={es} />
  </div>
  <div className="hll-platform-stage">
    <div className="hll-mark" aria-hidden="true">
      <Image src="/images/hero-lab/k-mark.webp" alt="" fill sizes="330px" />
    </div>
    <HeroCardCarousel
      previousLabel={es ? 'Tarjeta anterior' : 'Previous card'}
      nextLabel={es ? 'Tarjeta siguiente' : 'Next card'}
      slideLabel={es ? 'Tarjeta' : 'Card'}
    >
      {cards}
    </HeroCardCarousel>
  </div>
  <ProofMetrics es={es} />
</section>
```

Use `public/images/logo.png` for the real 276 × 47 transparent KabatOne lockup. Use localized links for `/`, `/resources`, `/about`, `/contact`, the five solution routes, the industry routes, and the EN/ES locale switch. The desktop visual must retain the reference's four centered navigation groups and blue demo CTA; the mobile menu remains keyboard operable.

- [ ] **Step 2: Rebuild all seven cards as semantic articles**

Give each card `data-hero-card`, an accessible heading, a module modifier class, and the reference content:

```tsx
const cards = [
  <CadCard key="cad" es={es} />,
  <VideoCard key="video" es={es} />,
  <GisCard key="gis" es={es} />,
  <EventCard key="events" es={es} />,
  <UdeCard key="ude" es={es} />,
  <MobileCard key="mobile" es={es} />,
  <IntegrationsCard key="integrations" es={es} />,
]
```

Reuse `cctv-still.webp` and `evidence-still.webp` through `next/image`. Build the CAD waveform, dark GIS map, incident rings/markers, event list, custody chain, phone route, and six integration tiles with HTML and inline SVG so their text remains legible and localizable.

- [ ] **Step 3: Apply the approved metrics and bilingual labels**

Use exactly:

```tsx
stats: [
  { num: '70M+', en: 'Citizens Protected', es: 'Ciudadanos Protegidos', icon: 'people' },
  { num: '40+', en: 'Cities Deployed', es: 'Ciudades Desplegadas', icon: 'city' },
  { num: '99.9%', en: 'Uptime SLA', es: 'Disponibilidad SLA', icon: 'shield' },
]
```

- [ ] **Step 4: Run the contract test**

Run: `node --test tests/hero-reference-contract.test.mjs`

Expected: hero/card/metric assertions pass; CSS assertions remain red until Task 4.

---

### Task 4: Rebuild the scoped visual system

**Files:**
- Modify: `src/app/[locale]/hero-lab/hero-lab-light.css`
- Test: `tests/hero-reference-contract.test.mjs`

**Interfaces:**
- Consumes: all `.hll-` classes emitted by Tasks 2–3.
- Produces: reference-scale desktop composition and responsive controlled carousel.

- [ ] **Step 1: Establish the 1536 × 1024 desktop stage**

Set the page stage to `min-height: 1024px`, a radial blue-white atmosphere over `#f7f9fc`, `overflow: clip`, and a `1536px` composition width. Match the reference with these anchors:

```css
.hll-nav { height: 96px; padding: 24px 52px; max-width: 1536px; }
.hll-hero-head { margin-top: 14px; max-width: 760px; }
.hll-headline { font-size: clamp(58px, 5vw, 78px); line-height: .94; }
.hll-sub { max-width: 620px; margin-top: 18px; }
.hll-platform-stage { margin-top: 30px; min-height: 438px; }
.hll-mark { width: 330px; height: 260px; left: 50%; top: -8px; }
.hll-cards { align-items: end; gap: 12px; padding: 104px 22px 10px; }
.hll-stats { margin-top: 22px; }
```

Use the existing K image with `mix-blend-mode: multiply`, reduced opacity, and a blue glow so its white background disappears into the atmospheric field without creating a new asset.

- [ ] **Step 2: Match the seven-card silhouette**

Use variable desktop widths/heights close to the reference:

```css
.hll-card--cad { width: 194px; min-height: 382px; }
.hll-card--video { width: 196px; min-height: 374px; }
.hll-card--gis { width: 188px; min-height: 366px; }
.hll-card--events { width: 220px; min-height: 342px; }
.hll-card--ude { width: 232px; min-height: 374px; }
.hll-card--mobile { width: 188px; min-height: 380px; }
.hll-card--integrations { width: 204px; min-height: 374px; }
```

Cards use `rgba(255,255,255,.78)`, a white highlight border, `backdrop-filter: blur(18px)`, a 20–28px radius, layered blue-gray shadows, and a 2px module-colored bottom edge. Use small negative horizontal margins only above 1180px to fit the complete seven-card surface without page overflow.

- [ ] **Step 3: Add tablet/mobile carousel styling**

At `max-width: 900px`, switch the viewport to horizontal scrolling with:

```css
.hll-cards-viewport {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: max(24px, calc((100vw - 286px) / 2));
  overscroll-behavior-inline: contain;
  -webkit-overflow-scrolling: touch;
}
.hll-card { width: 286px; min-height: 410px; scroll-snap-align: center; }
.hll-carousel-controls { display: flex; }
```

At desktop widths, hide controls and disable horizontal scrolling. At `max-width: 560px`, stack CTAs, reduce headline size, keep the next card partially visible, and stack the three proof metrics without overflow.

- [ ] **Step 4: Add interaction and reduced-motion states**

Add visible `:focus-visible` outlines, button hover/disabled states, subtle card entrance choreography, and:

```css
@media (prefers-reduced-motion: reduce) {
  .hll-page *, .hll-page *::before, .hll-page *::after {
    scroll-behavior: auto !important;
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}
```

- [ ] **Step 5: Run the contract test and targeted lint**

Run: `node --test tests/hero-reference-contract.test.mjs`

Expected: 3 tests pass, 0 fail.

Run: `npx eslint src/components/hero-lab/HeroV3Platform.tsx src/components/hero-lab/HeroCardCarousel.tsx`

Expected: exit 0 with no errors or warnings in the modified hero files.

---

### Task 5: Simplify the isolated review route

**Files:**
- Modify: `src/app/[locale]/hero-lab/page.tsx`
- Test: `tests/hero-reference-contract.test.mjs`

**Interfaces:**
- Consumes: `HeroV3Platform` and locale params.
- Produces: an unlinked, `noindex` local comparison route showing only the chosen hero.

- [ ] **Step 1: Remove unrelated hero concepts from the review route**

Render only the existing internal review label and `<HeroV3Platform es={es} />`. Remove imports and rendered output for `HeroV1Screenshot`, `HeroV2Hub`, and `ImageConcepts`; do not delete those files.

- [ ] **Step 2: Confirm the live homepage remains untouched**

Run: `git diff --exit-code -- 'src/app/[locale]/page.tsx'`

Expected: exit 0 and no output.

---

### Task 6: Perform local visual and interaction verification

**Files:**
- Verify: `src/components/hero-lab/HeroV3Platform.tsx`
- Verify: `src/components/hero-lab/HeroCardCarousel.tsx`
- Verify: `src/app/[locale]/hero-lab/hero-lab-light.css`
- Verify: `src/app/[locale]/hero-lab/page.tsx`

**Interfaces:**
- Consumes: the local Next.js development server.
- Produces: desktop/tablet/mobile screenshots and an interaction checklist.

- [ ] **Step 1: Start the isolated development server**

Run: `npm run dev`

Expected: Next.js prints a local URL without binding the production or staging environment.

- [ ] **Step 2: Compare the English desktop hero**

Open `/en/hero-lab` at 1536 × 1024 and compare it with `/Users/omercnaani/Downloads/hero.png`. Verify navigation scale, headline position, K overlap, seven-card silhouette, proof row, and absence of a white square around the K.

- [ ] **Step 3: Verify Spanish and responsive layouts**

Check `/es/hero-lab` at 1536 × 1024, then both locales at 900 × 1100 and 390 × 844. Confirm copy does not overlap, the initial mobile view exposes part of the next card, arrows/dots update, swipe/drag works, keyboard arrows work, and proof metrics remain readable.

- [ ] **Step 4: Iterate from screenshot evidence**

Adjust only scoped `.hll-` styles and hero files until the desktop composition closely matches the reference and all responsive checks pass. Re-run the contract test and targeted lint after each adjustment batch.

---

### Task 7: Final verification, changelog, and local commit

**Files:**
- Modify: `CHANGELOG.md`
- Modify: `changelog.html`
- Verify: all files changed on `codex/hero-reference-rebuild`

**Interfaces:**
- Consumes: completed implementation and verification evidence.
- Produces: one documented local commit; no push or deployment.

- [ ] **Step 1: Run final automated verification**

Run: `node --test tests/hero-reference-contract.test.mjs`

Expected: 3 passed, 0 failed.

Run: `npx eslint src/components/hero-lab/HeroV3Platform.tsx src/components/hero-lab/HeroCardCarousel.tsx src/app/'[locale]'/hero-lab/page.tsx`

Expected: exit 0.

Run: `npm run build`

Expected: exit 0. The known multi-lockfile warning is acceptable; TypeScript and route generation must finish successfully.

Run: `git diff --check`

Expected: exit 0.

- [ ] **Step 2: Update both changelogs**

Add `v2.273` dated `2026-07-13` describing the reference-accurate hero, controlled responsive carousel, approved proof metrics, bilingual QA, and local-only `/hero-lab` isolation. Add the matching timeline block at the top of `changelog.html`.

- [ ] **Step 3: Review the complete diff**

Run: `git status --short && git diff --stat && git diff -- 'src/app/[locale]/page.tsx'`

Expected: only hero implementation, test, review route, and changelog files appear; the homepage diff is empty.

- [ ] **Step 4: Commit locally**

Run:

```bash
git add CHANGELOG.md changelog.html tests/hero-reference-contract.test.mjs \
  src/components/hero-lab/HeroV3Platform.tsx \
  src/components/hero-lab/HeroCardCarousel.tsx \
  'src/app/[locale]/hero-lab/hero-lab-light.css' \
  'src/app/[locale]/hero-lab/page.tsx'
git commit -m "Feat: rebuild reference-accurate hero (v2.273)"
```

Expected: a local commit on `codex/hero-reference-rebuild`. Do not push.
