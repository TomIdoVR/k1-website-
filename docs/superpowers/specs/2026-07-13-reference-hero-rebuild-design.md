# Reference Hero Rebuild Design

**Date:** 2026-07-13
**Status:** Approved for planning
**Reference:** `/Users/omercnaani/Downloads/hero.png`

## Goal

Rebuild only the KabatOne homepage hero so it closely matches the supplied 1536 × 1024 reference image in composition, scale, typography, spacing, card detail, depth, and visual polish. All homepage sections below the hero remain unchanged and will be redesigned separately.

## Chosen Approach

Build the hero as maintainable React and CSS rather than displaying the reference as a background image or rendering the interface on a canvas. Each visible element remains responsive, localizable, accessible, and interactive while preserving the reference composition at the target desktop viewport.

## Desktop Composition

- Use 1536 × 1024 as the primary visual-comparison viewport.
- Fill the first screen with a soft off-white background, subtle blue atmospheric glow, and no visible light-to-dark seam inside the hero.
- Reproduce the reference hierarchy: navigation, centered eyebrow, two-line headline, supporting copy, CTA row, central translucent K mark, seven operational cards, and three proof metrics.
- Keep the hero content vertically compact enough for the proof metrics to remain visible near the bottom of the reference viewport.
- Preserve the reference's controlled overlap: the K mark sits behind the card row and the cards form one continuous operational platform surface.

## Navigation

- Recreate the KabatOne logo lockup at the reference scale and spacing.
- Preserve the existing Solutions, Industries, Resources, Company, language, and Book a Demo behaviors and routes.
- Style the navigation to match the light reference, including the blue primary CTA.
- Collapse to the site's existing mobile navigation pattern at narrow widths rather than hiding access to navigation items.

## Hero Messaging

- Eyebrow: “THE UNIFIED PUBLIC SAFETY PLATFORM,” localized in Spanish.
- Headline: “One Platform.” followed by the blue-to-cyan “Total Awareness.” line, localized in Spanish.
- Supporting copy names dispatch, video, GIS, event management, evidence, mobile response, and integrations as one operational platform.
- Primary action: Book a Demo.
- Secondary action: Watch Overview with a circular play icon.
- Typography, line length, weight, and vertical rhythm follow the reference; Spanish copy may wrap one additional line without overlapping the visual.

## Platform Card Row

Rebuild seven independent semantic cards:

1. CAD / 911
2. Video & Analytics
3. GIS / Map
4. Event Management
5. Unified Digital Evidence
6. Mobile Response
7. Integrations

Each card will reproduce the reference-specific content density and visual structure rather than sharing a generic card template. Cards use translucent white surfaces, soft borders, layered shadows, rounded corners, a module color, and a thin colored bottom edge. Existing CCTV and evidence imagery will be reused where it matches the reference. Map, dispatch, event, mobile, and integration details will be built from lightweight HTML, CSS, and inline SVG.

The center K asset will be prepared for clean compositing so its current white square does not appear. It remains decorative and sits behind the cards with a restrained glow.

## Proof Metrics

Use the user-approved figures:

- 70M+ Citizens Protected
- 40+ Cities Deployed
- 99.9% Uptime SLA

Provide equivalent Spanish labels. Display the metrics as a centered three-column row with blue line icons and separators, matching the reference proportions.

## Responsive Behavior

- Desktop: show the complete seven-card composition with reference-like variable card widths and overlap.
- Tablet and mobile: convert the card row into a horizontal snap carousel.
- The carousel supports touch swipe, pointer drag, visible previous/next buttons, pagination dots, keyboard navigation, and disabled states at the ends.
- Mobile initially centers the first card and exposes a small portion of the next card as a swipe cue.
- Headline, navigation, CTA layout, K mark, card scale, and metric row adapt without horizontal page overflow.
- Respect `prefers-reduced-motion`; the hero remains fully usable without entrance or carousel animation.

## Component Boundaries

- `HeroV3Platform` owns the hero shell, localized content, navigation integration, central mark, and proof metrics.
- Each operational card remains a focused component with no external data dependency.
- A small client-side carousel controller owns slide position, buttons, dots, drag/swipe, and keyboard behavior. Desktop layout does not require JavaScript.
- Hero styles remain scoped under the existing `hll-` namespace to avoid changing later homepage sections.

## Local-Only Parallel Environment

- All implementation work happens in a dedicated local git worktree on branch `codex/hero-reference-rebuild`.
- The worktree lives at `.worktrees/codex-hero-reference-rebuild/` and is ignored by git in the main checkout.
- Visual review happens only on the local `/hero-lab` route until the user explicitly approves homepage integration.
- Do not push the redesign branch, create a Vercel preview, merge into `nextjs`, or merge into `main` without explicit approval.
- Claude Code may work in the main checkout or another worktree in parallel, but must not edit files inside the Codex worktree.
- If Claude Code also changes the hero, it must use a separate branch/worktree. Reconcile those commits deliberately through cherry-pick or a reviewed merge rather than editing the same files concurrently.
- The operational handoff and file-ownership rules are maintained in `docs/HERO-REDESIGN-LOCAL-WORKFLOW.md`.

## Accessibility and Performance

- Use real links and buttons with visible focus states.
- Give carousel controls accessible names and expose slide position to assistive technology.
- Decorative imagery uses empty alternative text; meaningful card content remains text in the DOM.
- Use optimized local images through Next.js and avoid adding new runtime dependencies.
- Avoid autoplay so the hero does not create distraction or accessibility problems.

## Verification

- Compare screenshots at 1536 × 1024 against the reference for hierarchy, proportions, alignment, and density.
- Verify responsive behavior at representative tablet and mobile widths.
- Verify English and Spanish layouts.
- Test navigation links, both CTAs, carousel buttons, dots, swipe/drag, and keyboard controls.
- Run lint and the production build.
- Confirm the git diff does not alter homepage sections below the hero.

## Explicit Non-Goals

- Redesigning How It Works or any later homepage section.
- Changing homepage SEO content outside the existing hero copy and approved proof metrics.
- Pushing or merging the branch.
- Changing the existing `nextjs` staging environment or creating any hosted preview.
- Replacing the visual with a screenshot background.
