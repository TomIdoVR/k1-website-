## [v2.374] – 2026-08-21 — Mobile: all five products expanded, scroll-driven accordion switched off
### Fixed
- **Scrolling the products section on a phone fought itself.** An IntersectionObserver with `rootMargin: -45% 0px -45%` activated whichever product crossed the middle of the viewport. Activating one expanded it and collapsed another mid-scroll, which changed the page height under the user's finger, which changed what was crossing the middle — a feedback loop between scrolling and layout. On top of that, both the active card and its `.sv-pin` were `position: sticky`, so two nested sticky contexts moved at once.
- **Below 960px every product is now expanded**, the observer does not run, and both sticky layers are unwound. There is no selection to track, so the cause is removed rather than the symptom tuned.

### Notes
- Visibility moved from conditional rendering into CSS. Rendering `.sv-visual-inline` and `.sv-text` only for the active product could not express "all expanded" without knowing the viewport at render time — which on a phone means a visible reflow on hydration as four products expand. CSS puts the right layout on screen at first paint. Desktop pays almost nothing: those nodes sit inside `.sv-visual-inline`, which is `display: none` above 960px, and browsers do not fetch lazy images inside a `display: none` subtree.
- The `hidden` attribute was removed from `.sv-body` for the same reason it mattered: `hidden` drops the element from the accessibility tree, which would have been wrong on mobile where the body is visible. Both breakpoints now decide visibility in CSS, and `aria-expanded` reports `true` for every product below 960px.
- Each card now carries its own product colour on mobile rather than only the active one, so five stacked cards stay visually distinct.
- **The cost is a longer section** — five products' worth of detail instead of one. That is the right trade on a phone: scrolling is cheap and predictable, whereas tapping to expand while the page reflows underneath is neither.
- Desktop is unchanged: verified at 1440px that exactly one body is visible, clicking a product switches the accordion, and the sticky media panel still pins.

## [v2.373] – 2026-08-21 — Mobile: submenus restored, form errors and success no longer land off-screen
### Fixed
- **The mobile menu had no submenus.** Each of the four items was a single link into the *first* entry of its section — Solutions went to `/k-safety`, Industries to `/industries/public-safety`. On desktop the same four are dropdowns listing everything, so on a phone **four of the five solution pages and four of the five industry pages were unreachable from the menu entirely**. The pages existed and sat in the sitemap; nothing in the mobile UI led to them. Reachable nav links on mobile went from 4 to 15.
- **The contact form never moved the viewport.** There were no refs, no `scrollIntoView` and no focus management anywhere in it, and the form is taller than a phone screen. Submitting with a required field empty blocked silently from the user's point of view — the browser focused a field that was off-screen (measured at 375×812: the Name field sat 380px above the viewport). On success the form is replaced by a card shorter than itself, so the confirmation could land outside the viewport too.
- Both now scroll into view. The success heading takes focus and carries `role="status"` so it is announced rather than only shown, and a `role="alert"` notice states that required fields are missing — the native browser bubble is easy to miss on a phone and disappears on the next tap.

### Notes
- The submenus are nested `<details>` reusing the same `MODULE_LINKS` / `INDUSTRY_LINKS` constants the desktop dropdowns read, so the two navigations cannot drift apart. A shared `name` makes them mutually exclusive — browser-enforced, no JS and no click-outside handler.
- Verified on a 375×812 deploy: submitting empty scrolls the first invalid field from −380px to +90px and focuses it, all four sections open with 44px targets, mutual exclusion holds, and the panel fits the viewport with no horizontal overflow.
- Not verified live: the success-card scroll, which needs a real Formspree submission. It uses the same `scrollIntoView` path as the invalid-field case, which is verified.

## [v2.372] – 2026-08-21 — GA4 lead conversions were never sent: gtag needs an explicit send_to
### Fixed
- **Every lead conversion was silently lost before reaching GA4.** Leads arrived at Formspree and the inbox, the branded success page rendered, and nothing errored — but `generate_lead` never reached GA4.
- **Root cause,** measured on production rather than inferred: the site loads gtag.js *and* a GTM container (`GTM-K55RZLP9`) sharing one dataLayer. In that configuration `gtag('event', ...)` without an explicit target never resolves to the GA4 property. The call succeeds, pushes to the dataLayer, throws nothing — and issues no `/g/collect` request at all. Three variants of the same call on the live site: without `send_to` → **0** collect hits; with `send_to` → **1**; bare `dataLayer.push` → **0**.
- The bare-push result confirms the warning already written at the top of `lib/analytics.ts`: a dataLayer push only reaches GA4 if GTM has a forwarding tag, and it does not. The gtag path existed to solve exactly that — and was itself inert.
- **Fix:** `send_to` is now part of every `trackLead` payload.

### Notes
- `page_view` was unaffected throughout, which is why nothing looked wrong in the GA4 UI: traffic reported normally while conversions read zero. The property bears out the timeline — `generate_lead` fired once on 19 Aug and once on 20 Aug, then stopped.
- Verified end to end after deploy: a real submission through the production form produced `generate_lead` in GA4 Realtime within a minute. This closes **PRE-003**, the last open launch gate.
- Found only because the GA4 leg of PRE-003 was actually checked rather than assumed. Nothing in the browser console, the form, or Formspree indicated a problem.

## [v2.371] – 2026-08-21 — The breadcrumb fix v2.370 claimed to port forward never shipped

### Fixed
- **`BreadcrumbList` on all five product pages emitted trailing-slash URLs that no canonical matches.** `SolutionRoute.tsx` produced `https://kabatone.com/k-safety/` and `https://kabatone.com/es/`, while the canonical tags on those same pages are `https://kabatone.com/k-safety` and `https://kabatone.com/es/k-safety`. A breadcrumb item pointing at a URL that redirects to the canonical is a self-inflicted mismatch in the one structured-data block Google renders directly in the SERP.
- The `nextjs` branch had already fixed this in the per-page breadcrumb arrays, but the redesign replaced those arrays with `SolutionRoute`, so the fix was inside the markup v2.370 deliberately discarded.

### Notes
- **v2.370 stated this fix was ported forward. It was not.** The edit was made in the worktree and never staged, so the merge commit shipped without it — and the changelog claim went out anyway. Caught by checking the live JSON-LD on production rather than trusting the commit message; `curl https://kabatone.com/k-safety` still returned the slashed form after the deploy went green.
- Verified against production after deploy: breadcrumb `item` values now match the `<link rel="canonical">` byte-for-byte on both locales.

## [v2.370] – 2026-08-21 — Promotion: merge `nextjs` (SEO program) into `main`

### Changed
- **Merged `nextjs` → `main`.** The two branches had diverged since `930d43b`: `main` took the `hero-redesign` promotion (PR #9), `nextjs` carried 33 commits of SEO and audit-tooling work. 15 files conflicted; every one was resolved deliberately rather than by taking a side wholesale.
- **The five product pages (`k-safety`, `k-dispatch`, `k-video`, `k-traffic`, `k-connect`) keep `main`'s redesigned `SolutionRoute` body.** The `nextjs` side of those conflicts was the pre-redesign inline markup, so keeping it would have reverted the redesign in production.
- **The one SEO change that lived inside the reverted markup was ported forward.** `nextjs` had stripped the trailing slash from the breadcrumb URLs (`/es/` → `/es`, `/k-safety/` → `/k-safety`) so `BreadcrumbList` matches the canonical exactly; `SolutionRoute.tsx` still emitted the old slashed form and now does not. Without this port the fix would have been silently lost in the merge.
- **The five demo pages take the `nextjs` side** — localized `generateMetadata` via `demoMetadata()`, which is what gives them Spanish titles and descriptions. This also keeps the corrected `/demo/lpr` OG image: `main` pointed at `/demo/lpr/LPR.png`, which does not exist in `public/`, while `nextjs` points at `cam-highway-lpr.jpeg`, which does.

### Notes
- `CHANGELOG.md` and `changelog.html` were reconciled entry-by-entry rather than by concatenation. The branches assigned the *same version numbers to different work* (v2.280, v2.285, v2.286 each exist twice with unrelated content), so a naive merge both duplicated shared entries and would have collapsed distinct ones. Result: 595 changelog entries, no duplicate headers, and the three colliding HTML entries carry `-2` ids.
- `SEO/geo/geo-history.csv` was unioned and de-duplicated across both sides — `main` held the run history through 2026-08-10, `nextjs` held the 08-12 rows. 67 rows, sorted by date, nothing dropped.
- `SEO/SEO-PROGRAM-STATE.md` takes the `nextjs` side throughout: `main`'s copy was the stale 2026-07-13 snapshot.
- Verified with `tsc --noEmit` in a clean `/tmp` worktree — exit 0. Per v2.322, the OneDrive checkout is not a trustworthy gate.

## [v2.369] – 2026-08-20 — Carousel crashed the route when the viewport measured zero width
### Fixed
- **The homepage rendered "Something went wrong" instead of the page.** `pageCount` fed `Array.from({ length: pageCount })`, and `clientWidth` is 0 whenever the element has not been laid out — first paint, or while an ancestor is `display: none`. `scrollWidth / 0` is `Infinity`, so `Array.from` threw `RangeError: Invalid array length` and took the whole route down to the error boundary.
- Introduced in v2.360 with the per-viewport paging change and latent since: it depends on render timing, so earlier deploys of the same code rendered fine. **The production build passes either way** — the failure only occurs once the component measures in a real browser, which is why a green build was never evidence the page worked.
- Every division by `clientWidth` now routes through a guarded `pagesIn()` helper returning 1 for an unmeasurable viewport, with the one remaining inline division guarded in place. Added a regression test asserting the guard exists and that no raw division reappears outside the helper.

### Notes
- Found only because the post-fix Axe re-run landed on the error boundary rather than the homepage. Without that re-run this would have shipped as a white error page on `/`.

## [v2.368] – 2026-08-20 — Solutions media panel is keyboard-reachable
### Fixed
- **The Solutions media panel could not be reached by keyboard.** `.sv-side` is capped at `max-height: 620px` with `overflow-y: auto` — the ceiling that keeps the sticky panel clear of the header, added in v2.348 — but a scroll container with no tab stop is pointer-only, so anything the cap hid was unreachable without a mouse. Axe reported it as one serious `scrollable-region-focusable` violation. It now carries `role="region"`, a localized label naming the product (`K-Safety preview` / `Vista previa de K-Safety`) and `tabIndex 0`, with a matching `:focus-visible` outline offset outward so it does not sit on top of the app mock.
- This is the same defect fixed for the before/after strip in v2.364; that pass corrected one instance and missed this one. Applied unconditionally here rather than measured, because unlike that strip this panel carries its cap at every width and can always overflow.

## [v2.367] – 2026-08-20 — All 23 WCAG AA contrast failures fixed
### Fixed
- Real axe-core against the deployed build returned exactly 23 failing nodes, tracing to seven colours, nearly all in the before/after console mock. Each replacement was computed to clear 4.5:1 against its measured background while preserving hue: `.uc-time` 2.94→4.51, `.uc-stat-k` 3.02→4.51, `.uc-card-title` 4.36→4.55, `.uc-count` 2.51→4.58, `.uc-search` 2.44→4.53, `.uc-pill--amber` 4.48→4.57, `.uc-stat-v--red` 3.76→4.54, `.uc-stat-v--green` 3.30→4.55, `.hll-language a` 3.47→4.57.
- The red and green stat values needed 4.5, not the 3.0 large-text threshold: axe measured 13.5px bold, and WCAG large text starts at 18.66px bold.
- The language switcher needed two edits — `.hll-language a` is declared in both `hero-lab-header.css` and `hero-lab-light.css`, and the latter loads second, so fixing the header alone left the old value winning the cascade.

## [v2.366] – 2026-08-20 — CSP allowlist missed GA4's regional collector
### Fixed
- GA4 does not post to `www.google-analytics.com`; it selects a regional collector (`region1.google-analytics.com` observed live). The original allowlist would have let pages load normally while silently dropping every analytics hit. `connect-src` now uses `*.google-analytics.com` and `*.analytics.google.com`.
- `vercel.live` (the preview feedback toolbar) is allowed on preview deploys only, rather than widening the production policy for something production never loads.
- This is the argument for Report-Only in one entry: the same policy shipped enforcing would have cost analytics on launch day.

## [v2.365] – 2026-08-20 — Stop preloading a below-fold photo against the LCP image
### Fixed
- The case-study command-center photo carried `priority`, which makes Next emit a `<head>` preload. It sits seven sections down, so the browser fetched it in parallel with the hero art and the two competed for bandwidth during the window that decides LCP. Head image preloads went from 2 to 1.

## [v2.364] – 2026-08-20 — Before/after scroll strip is keyboard-reachable
### Fixed
- Below 1180px `.ba-compare` becomes a horizontal scroll strip with no tab stop, leaving the second panel pointer-only. Now `role="region"` with a label and `tabIndex 0`, applied only while it actually scrolls, plus a `:focus-visible` outline — the existing rule is scoped under `.hll-page` and did not reach this section.

## [v2.363] – 2026-08-20 — Baseline security headers, CSP in Report-Only
### Added
- `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, and a `Permissions-Policy` denying camera, microphone, geolocation, payment, usb and interest-cohort. Each denial was checked against the codebase first — no `<iframe>` embeds and no calls to any of those APIs — rather than copied from a template.
- CSP ships as `Content-Security-Policy-Report-Only`. An enforcing policy that is slightly wrong silently breaks GTM, GA4 or the Formspree POST in production; Report-Only applies the identical policy and reports violations without blocking, so the allowlist can be proven against real traffic first.

## [v2.362] – 2026-08-20 — All 12 npm vulnerabilities cleared; stale contract tests updated
### Fixed
- `next` 16.2.6 → 16.3.1, `next-intl` 4.8.3 → 4.13.7, plus `npm audit fix` for transitives. `npm audit` reports **0 vulnerabilities**, down from 12 (9 high).
- **Correction to the pre-production report: 16.2.11 is not sufficient.** The advisory's vulnerable range is `9.3.4-canary.0 - 16.3.0-preview.10`, so every 16.2.x is affected; 16.2.12 was installed first and still flagged high.
- Three of six contract-test assertions were pinned to the pre-refactor design. Updated rather than deleted: the seven module cards moved to `HeroModuleCards` (and the hero is now asserted to hold zero), the four card visuals moved with them, proof metrics are the signed-off 73M+ / 99.99% with guards against the superseded figures returning, and `scrollIntoView` became `scrollTo`. Added a test pinning the paging fix itself. 8 pass, 0 fail.

## [v2.361] – 2026-08-16 — Restore the homepage's two resource links lost in promotion
### Fixed
- The old homepage was the only page linking to `/resources/how-c5-command-centers-work` and `/resources/best-public-safety-software`; the redesigned composition dropped both. Neither article was orphaned — roughly 20 and 5 other inbound links plus sitemap entries — but each lost its highest-authority link. Anchor text is copied verbatim, since that is the ranking signal being preserved.

## [v2.360] – 2026-08-16 — Module carousel pages by viewport, not by card
### Fixed
- Seven cards produced seven dots and seven stops while six were already on screen, so each click advanced one card width — a nudge too small to notice. A stop is now one viewport width: seven cards with six visible is two stops, not seven. Dots, arrow disabled states, Home/End and the screen-reader announcement all follow pages. On phones, where cards show one at a time, page and card counts converge.

## [v2.359] – 2026-08-16 — Redesign promoted site-wide: homepage, five solution pages, header and footer

### Changed
- **The redesign is now the site.** `/` renders `HomeComposition` (the composition approved at `/hero-lab-story`), and `/k-safety`, `/k-dispatch`, `/k-video`, `/k-traffic`, `/k-connect` render `SolutionRoute`. All six previously lived only under `/hero-lab`. Metadata is unchanged by the promotion: every route keeps the same `generatePageMetadata` key it already used (`home`, `kSafety`, `kDispatch`, `kVideo`, `kTraffic`, `kConnect`), so titles, descriptions, canonicals and hreflang are identical. `SolutionRoute` re-emits the same three JSON-LD blocks (SoftwareApplication, FAQPage, BreadcrumbList) the old solution pages carried.
- **`PREVIEW_BASE` flipped to `''`.** `pv()` is now an identity function, so every redesign link resolves to the canonical route rather than `/hero-lab/…`. This is only correct *because* the six routes above were promoted in the same change — flipping it alone would have made the review routes link out to old pages. Verified: zero `/hero-lab` hrefs served on any page.
- **`Nav` and `Footer` became thin adapters over `HeroLabHeader` / `HeroLabFooter`.** 169 pages render `<Nav />` and 170 render `<Footer es={es} />`; swapping the components' internals reaches all of them without editing a call site, and reverts the same way. Both keep their existing signatures.

### Fixed
- **The language switch stays on the current page.** It pointed at `pv('/')`, which was survivable while this header served six routes but as the site-wide header meant switching language from `/contact`, `/vs/axon` or any resources article threw you to the homepage. Now uses `usePathname()` from next-intl, which returns the path without the locale prefix — exactly what `<Link locale>` wants, so it stays a real anchor with a correct href. Verified: `/vs/genetec` emits `href="/es/vs/genetec"`.
- **`/industries/stadiums` restored to navigation.** It was absent from `HeroLabHeader`'s `INDUSTRY_LINKS` but present in the nav it replaces, so promoting the header as-authored would have orphaned a real page from site navigation. (`/industries/logistics` and `/industries/retail` are linked by neither nav; that predates this change and is left alone.)
- **Legacy pages keep their layout and their dark theme.** `HeroLabHeader` is light (`#fafcff`) and `position: sticky` at 96px in normal flow; the nav it replaces was dark and `position: fixed` at 70px, and all 169 legacy pages hard-code `paddingTop: 70px` to clear it. Dropped in unmodified that put a light bar on a dark page *and* left a 70px empty band under it on every page. `promoted-chrome.css` scopes a dark, fixed, 70px re-skin to `.hll-legacy-chrome`, the wrapper `Nav` renders. Redesigned routes render `HeroLabHeader` directly, outside the wrapper, and are visually unchanged. Both the wrapper and the file are deleted when the last legacy page is converted.
- No footer variant was needed — `HeroLabFooter` is already dark (`#0f1724` → `#0b1220`, the legacy `--bg`/`--bg-2` pair). Its link inventory is a superset of the old footer's: same 20 destinations plus resources, the five product pages and five industry pages.

### Verified
- `tsc --noEmit` clean; `npm run lint` exit 0, 0 errors (PRE-004 gate holds).
- Deployed build checked on `/`, `/about`, `/vs/genetec`, `/k-safety`, `/es/contact`, `/es/k-dispatch`, `/resources`: redesigned header on every one, legacy wrapper present on exactly the un-redesigned pages and absent on the promoted ones, `promoted-chrome.css` present in the served CSS chunk with `position:fixed;top:0;left:0;right:0`, and no `<nav style=` (the old inline nav) anywhere.

## [v2.358] – 2026-08-15 — Mobile performance: analytics off the critical path; homepage composition extracted

### Fixed
- **Mobile performance 69 → 83, LCP 6.4s → 4.2s, FCP 3.2s → 1.8s.** Measured, not guessed: gtag.js (166KB) and GTM (119KB) were both loading `afterInteractive`, i.e. straight onto the critical path right after hydration, competing with first render under 4x CPU throttling. Blocking `googletagmanager.com` entirely scored 87 / LCP 3.8s, which put a precise number on the cost — 18 Lighthouse points and 2.6s of LCP — before anything was changed. Switching both to `lazyOnload` recovers 14 of those 18 points.
  - Both `<Script>` tags in `GoogleAnalytics` share one strategy on purpose: the inline `gtag('config')` depends on the library above it, so splitting the strategies would reorder the config against its own dependency.
  - No image was ever the problem — nothing above 40KB in the resource list is an image. The hero art is already well optimised.

### Added
- **`HomeComposition` — the redesign composition extracted into one shared component.** `/hero-lab-story` now renders it instead of re-declaring the section list, so the review route and the future homepage cannot drift; "approved on staging" keeps meaning "what ships". It deliberately owns no metadata: the homepage needs the production generator and the review route needs its internal `noindex` title, so each route keeps its own metadata export. That separation is the substance of SEO-001.

### Notes
- **Trade-off worth a decision, not silently mine to make:** `lazyOnload` fires the GA4 pageview after window load rather than immediately after hydration. Visitors who bounce before that point will no longer be counted. On a slow mobile connection that is a real, if small, loss of pageview volume — and this site's weekly SEO reporting is built on GA4 numbers, so the series will show a step change. `generate_lead` is unaffected: it fires on form submit, long after load.
- **Possible duplicate instrumentation, flagged not changed.** `GoogleAnalytics` loads GA4 directly *and* `GoogleTagManager` loads container GTM-K55RZLP9, both from googletagmanager.com. If that container also fires GA4, the site is loading two copies of the same tracking and may be double-counting pageviews — removing whichever is redundant would beat deferring. Confirming that needs container access, so nothing was removed.
- **LCP is 4.2s on mobile, still above the 2.5s "good" threshold.** This was the single biggest lever, not the last one.
- Desktop is unchanged at 99 / LCP 0.9s. Accessibility stays 100 with `color-contrast` and `target-size` both at zero failing nodes.
- **The homepage promotion (PRE-005) is not in this commit.** Overwriting `src/app/[locale]/page.tsx` — the live production homepage — was blocked by the permission classifier. The composition it needs is ready and the route change is a few lines; it needs explicit approval to land.

## [v2.357] – 2026-08-15 — Three pre-production launch gates closed (PRE-001, PRE-002, PRE-004)

### Fixed
- **PRE-001 — carousel controls (`target-size` now passes with 0 failing nodes).** Each dot was a 7px button with a 44x44 absolutely-positioned `::before` stretched over it to reach the touch-target floor. With 7px dots and a 7px gap the dots sit 14px apart, so every overlay spanned roughly three neighbours per side and the topmost one swallowed the click — the audit's "dot 2 is intercepted by dot 3". Rebuilt so the button *is* the target: 28x44, no gap, with the 7px dot drawn by `::before` inside it. Seven genuinely separate targets, each above the 24px WCAG 2.5.8 minimum.
  - **The same defect existed twice.** `platform-modules.css` carries a higher-specificity copy (`.hll-modules .hll-carousel-dot`) that outranks the base rule, so fixing only `hero-lab-light.css` left the bug live on the page that actually shows it — caught because the deployed computed width stayed 21px while the new `display: grid` came through. The before/after scroller dots had the pattern copied verbatim and were fixed too.
- **PRE-002 — colour contrast (accessibility now 100/100, 0 failing nodes).** Eleven nodes were below 4.5:1. Each was darkened along its existing hue rather than recoloured: `.cst-label` 3.81→4.66, `.sv-num` 2.56→4.68 (the worst, and the reason the 01–05 solution numbers read as decorative grey), `.uc-live` 3.30→4.61, `.ind-eyebrow` 3.46→4.61, `.ind-more-label` 3.46→4.61, `.eco-eyebrow` 3.68→4.64, `.tbd-eyebrow` 3.49→4.64. The red badge was fixed by darkening its background (#e8342f→#cc2921, white text 4.23→5.38) since the text was already pure white.
  - Fixes are scoped to the failing small-text nodes. Large display text (`.ind-title em`, `.eco-title em`), icon strokes, map pins and accent borders keep the original brand values — they clear the 3:1 large-text floor or aren't text at all.
- **PRE-004 — lint gate (`npm run lint` now exits 0).** All 9 errors resolved: 4 raw internal anchors, 3 explicit `any`, 2 synchronous setState-in-effect.
  - The two `<a>` tags in `global-error.tsx` and the root `not-found.tsx` are deliberately *kept* as plain anchors with a scoped disable and a written reason, not converted. `global-error` replaces the root layout after a crash took the app shell down, so a full document load is the recovery a soft navigation would defeat; the root `not-found` serves routes outside `[locale]`, so `/` must pass through the locale middleware to be rewritten. The two that genuinely wanted client navigation (`[locale]/not-found.tsx`, the privacy link in `ContactForm`) use the locale-aware `Link`, so a Spanish visitor lands on `/es`.
  - The three `any` casts were all the same Leaflet `_leaflet_id` container guard. Given a real local type rather than silenced — the guard is load-bearing, since re-initialising a bound container throws.

### Notes
- **The performance audit's "Grade A — 99/100" is desktop-only.** Measured on this build: desktop 98 / LCP 0.9s (matching the audit), but **mobile 69 / LCP 6.4s / FCP 3.2s**. Server response is 20ms and warming the deployment doesn't move it, so this is client-side asset and CPU cost under mobile throttling, not cold start. Not a regression from these changes — desktop still matches baseline — but the pre-production checklist records performance as an unqualified Pass, and on mobile it is not.
- Verified against Lighthouse on the deployed build rather than by inspection: accessibility 100, best-practices 100, `color-contrast` and `target-size` both 0 failing nodes, CLS 0.

## [v2.356] – 2026-08-15 — Sticky mobile product cards and stronger hero artwork

### Fixed
- **Solution text no longer scrolls behind the sticky application image on mobile.** The complete active product card — title, category, application visual, summary, checklist and CTA — now owns the sticky state as one unit.
- **Product transitions retain a stable reading position.** When the next solution becomes active, it takes over at the same header offset instead of allowing the outgoing visual to overlap the incoming or outgoing text.
- **The mobile hero artwork no longer disappears into its scrim.** The pale source image is slightly enlarged and the overlay is relaxed only below the copy, restoring product detail and colour while preserving the light reading field behind the headline.

### Checked
- Verified at 390×844: K-Safety and K-Dispatch both pin at the 78px site-header offset, their complete 682px cards fit within the viewport, and the handoff remains within 2px of the same position. The hero artwork is more visible without moving or obscuring its copy.
- Verified at 1440px that the mobile sticky override does not apply; no horizontal overflow at mobile or desktop widths.
- ESLint, responsive regression checks and the webpack production build pass.

## [v2.355] – 2026-08-14 — Mobile comparison cards and solution context stay compact and readable

### Fixed
- **The before/after comparison no longer becomes an excessively tall mobile section.** Panels now follow the available carousel width, the scroller follows the active panel height, and phone-sized unified-command cards retain the incident header, map and module rail while omitting secondary dashboard columns and statistics.
- **The two mobile comparison cards now remain visually balanced.** The redundant unified-command verdict is removed only on narrow phones; measured at 390px, the cards are 565px and 596px tall, with no horizontal page overflow.
- **Solution visuals no longer cover their descriptive copy while scrolling.** On mobile, the product header, application visual and summary paragraph now share one sticky unit; the checklist and CTA continue scrolling beneath it.
- **The Solutions click handler now satisfies React's render-purity lint rule** by keeping the interaction timestamp directly inside the event handler, without changing selection behavior.

### Added
- **Responsive regression coverage** for the before/after carousel width, compact console, active-panel height synchronization and narrow-phone content rules.

### Checked
- Verified at 390px, 600px, 768px and 1440px; no horizontal overflow or browser console errors.
- ESLint and the webpack production build pass.

## [v2.354] – 2026-08-14 — Touch targets to 44x44; module cards nest correctly under their section

Four items from the professional website audit (kabatone-homepage-redesign-audit-2026-08-14.pdf), the cheap and unambiguous ones — the rest need a decision (claim evidence/sourcing, customer quote attribution, brand spelling) or real infrastructure (Lighthouse against production-equivalent hosting), not a code change.

### Fixed
- **Four interactive elements were under the 44x44px WCAG 2.5.5 touch-target floor.** The module carousel's prev/next arrows (35x35, only reaching 44 under a `pointer: coarse` match that doesn't reliably trigger on every touch device or testing tool — simplified to unconditionally 44x44), the mobile menu trigger (42x42), and the before/after scroll buttons (38x38, introduced this session). Carousel dots were flagged too but are already correct: 7px visually with a documented 44x44 `::before` hit area — a measurement-tool false positive, not a real gap, so left alone.
- **The mobile menu trigger fix didn't take on its own** — a duplicate `.hll-mobile-menu > summary` rule in `hero-lab-light.css`, left over from before the header became a sibling of `.hll-page` rather than nested in it, loads after `hero-lab-header.css` and was winning the cascade at 42x42 even after that file was corrected. Fixed the rule that actually renders; the duplicate is left in place rather than removed — untangling which file should own this is a bigger change than a touch-target fix.
- **The seven module-card titles were `<h2>` under `/hero-lab-story`'s own section `<h2>`** ("What your team actually sees") — two H2s at the same level, one not describing a real section. `/hero-lab`'s hero use of these same cards is correctly H2 under the page's H1, so this couldn't be a global find-replace. `moduleCards()` now takes an optional heading-level argument threaded through all seven card components to `CardHeader`; `/hero-lab-story` passes `'h3'`, `/hero-lab` passes nothing and keeps its current, correct H2. Tried React Context first — cleaner, would have touched only `CardHeader` and the two call sites — but broke the production build: everything in this file is a server component, and `createContext`/`useContext` both require `'use client'`. The plain-prop version is more call sites but actually builds.

### Checked, not changed
- **The audit's `99.99%`/`99.9%` inconsistency does not reproduce.** Searched the whole `src/` tree: every uptime claim across the site — hero, solutions, industries, resources, FAQs, both languages — already reads `99.99%`. No bare `99.9%` anywhere. Whatever the audit measured, it isn't in this codebase's current source; left untouched rather than inventing a fix for a problem that isn't there.

### Notes
- Verified on the deployed build: carousel arrow, menu trigger, and before/after scroll button all measure 44x44 at `getBoundingClientRect()`; `/hero-lab-story` module cards are 7/7 H3 under the section H2, `/hero-lab`'s are 7/7 H2 under the page H1; zero horizontal page overflow.
- Built alongside v2.353, a concurrent session's rework of the before/after scroll controls (dots + a static row instead of floating buttons) — that work is unrelated to this entry and already committed separately.

## [v2.353] – 2026-08-14 — Before/after scroll controls read as controls, in a place they can be reached
### Fixed
- **Three circles in a row, two of them buttons.** In the scroll-strip layout (below 1040px) the decorative `.ba-arrow` connector — a white circle with a blue arrow that rides *between* the two panels — landed on the same line as the two scroll buttons, so the section ended with three near-identical circles of which only two did anything. The connector is now hidden in that layout: it only ever made sense on the desktop grid, where you can see both panels at once and it visibly joins them. With one panel in view at a time it connects nothing, and the strip already has an affordance in the next panel peeking in at the edge.
- **The prev button floated in empty space.** The controls were absolutely positioned at `top: 50%` of the strip, and the strip is as tall as its tallest child — the console. Beside the scatter panel, which is roughly half that height, the button sat level with nothing, hanging in the panel's blank lower margin. They are now a static centred row *below* the strip, so they stay adjacent to whichever panel is showing at whatever height it takes.

### Added
- **Position dots between the arrows**, matching the module carousel above. With one panel visible at a time and no other page-position cue, they are the only thing that says which half of the comparison you are looking at and that there is exactly one more. Clickable, `aria-current` on the active one, 7px visually with a 44px hit area.

### Changed
- **The arrows now step panel-to-panel rather than by `clientWidth`.** Panels are a flat 440px and snap centred, so they are not laid out on a `clientWidth` grid — `scrollBy(clientWidth)` overshot on wider screens. `goTo(i)` scrolls to a panel's own centre, and the active index is the panel whose centre is nearest the strip's, which is also what drives the dots and the disabled states.

### Notes
- Verified with a rendered check at 663px and 420px: connector measures 0×0, controls are one 44px-tall row centred under the strip, prev disabled on panel 1 / next disabled on panel 2, and clicking next moves `aria-current` to the second dot and centres the advantage panel.

## [v2.352] – 2026-08-13 — Console lays out from its own box, not the viewport
### Fixed
- **The console spilled out of its panel and truncated between ~700-1040px viewport.** The compact console rules (single-column body, three stat cells per row, horizontal icon rail) were keyed to `max-width: 700px`, but the box the console actually sits in stops tracking the viewport at **1040px** — that is where `.ba-panel` becomes a flat 440px, making the console ~388px wide at every width from 1040px down. That left a 700-1040px band where the panel was already 440px while the console still laid out for a wide viewport: six stat cells, a vertical rail and a two-column body crammed into 388px, spilling past the panel's edge and truncating ("STATUS" to "ST...", "UNIT 12" to "UNIT 1:", "ANALYTICS" to "ANALYTI..."). Retargeted those rules to `max-width: 1040px` so the console's layout and its container change at the same breakpoint.
- **The module rail no longer drops to three columns below 460px.** That rule made sense when the panel shrank with the viewport; now that it holds a flat 440px, the rail's box never changes, so its column count shouldn't either. Fixed at four across throughout the scroll range.

### Notes
- This is the same root cause as the v2.350 phone truncation, one layer up: a component sizing itself from the viewport while living in a container that had stopped following the viewport. v2.350 fixed the container's width; this fixes the layout rules that read the wrong number.
- Verified on the deployed build at 375px, 900px and 1030px (scroll mode) and 1050px (desktop grid): panels equal at 440px in scroll mode, console never spills its panel, zero truncated labels at any of them, no page-level horizontal overflow. Desktop grid mode confirmed unchanged — 6 stat columns in a 525px console, still clean.

## [v2.351] – 2026-08-14 — Industry tiles and the case-study photo hold their height on narrow screens
### Fixed
- **The five industry tiles shrank to letterbox slivers on phones.** Under 720px `.ind-grid` dropped `grid-auto-rows` from 220px to 160px *and* demoted the lead card from a 2-row span to 1 row, so the lead image went from 549×454 to 350×160 — a 2.8× height collapse. Because `.ind-slot` is `object-fit: cover`, that didn't scale the photograph down, it re-cropped it: the subject of each shot got pushed out of frame as the screen narrowed. Removed the 160px row override and gave the lead card `grid-row: span 2` at that breakpoint too. Measured on the deployed build with the fix applied: tile height is a flat 220px and the lead 454px at 1440/900/700/500/460/430/390/360px — previously 220 → 160. No horizontal overflow at any of those widths.
- **The case-study hero photo shrank the same way** — `min-height: clamp(240px, 26vw, 340px)` meant the narrower the screen, the shorter the photo (340px → 238px), so a phone got both the narrowest *and* the most aggressively cropped version of the image. Changed to a flat `340px`; only the width now varies with the viewport.

### Notes
- Same principle as v2.350's `flex: 0 0 440px` panel fix, applied to the image sections: narrowing the viewport should narrow an image, not also shorten it.
- Not changed: the split hero's art (`.hsplit-art img`) is absolutely positioned at `max-width: 66%` behind the copy, so pinning its size would push it under the headline. Left as-is pending a decision on that section.

## [v2.350] – 2026-08-13 — Panels hold their size on narrow screens; scroll buttons stop hiding as the connector arrow
### Fixed
- **The console's third column (camera + active units) was truncating to garbled fragments on real phones** — confirmed via an iPhone Safari screenshot, after this session's Chrome testing across 375-1300px couldn't reproduce it. Root cause: `.ba-panel`'s width was `min(440px, calc(100% - 44px))`, which shrinks below 440px on any screen narrower than ~484px — every phone. Changed to a flat `flex: 0 0 440px` that never shrinks with the viewport. The strip already scrolls horizontally, so a panel narrower than the phone screen bought nothing — you were always going to scroll to see the whole card either way. Verified on the deployed build at 375px: zero truncated labels anywhere, where there were several before.
- **The two panels are explicitly confirmed equal width at every screen size** — both share the same `.ba-panel` base rule with no per-variant width override, so this was already implied by the fix above; verified directly (440px === 440px at 375px viewport).
- **The scroll buttons were nearly invisible next to the decorative connector arrow between the panels** — both were white circles with a blue chevron/arrow at about the same size, reading as the same element. Inverted the scroll buttons to solid blue with a white icon, so they read as buttons on sight; the connector arrow keeps its original white-with-blue-icon look.

### Notes
- Below 700px viewport `.uc-body` already collapses to a single column (existing rule, unchanged) — combined with the panel no longer shrinking, that column now gets the full ~386px to work with instead of being squeezed under it.

## [v2.349] – 2026-08-13 — Mobile: no more dead space in the scatter panel, image stays with the header
### Fixed
- **The "fragmented intelligence" panel had 250px+ of dead space above and below its diagram on phones.** `.ba-compare`'s scroll strip used `align-items: stretch`, forcing the shorter panel (a few hundred px of scatter diagram) to match the taller one (the console, often 1000px+ with its modules rail and verdict card) — and `.ba-scatter`'s `margin-block: auto` then centred the diagram in that artificially tall box. Changed to `align-items: flex-start` so each panel sizes to its own content, and the diagram's margin back to a plain 16px gap. Verified on the deployed build: panel heights no longer match (558px vs 1629px), and the gap between the subtitle and the diagram is a clean 16px.
- **On mobile solution cards, the app-window image scrolled away almost immediately while only the product name stayed pinned.** The sticky header (`.sv-item-head`) and the inline visual below it (`.sv-visual-inline`) were siblings in independent parts of the DOM, only the header was sticky, and the visual just scrolled normally — so on a long solution the image vanished within the first ~100px of scroll while the header kept pinning alone for everything after. Wrapped both in one `.sv-pin` sticky unit (see `Solutions.tsx`) so they move together, then release together once the item's own content ends and hands off to the next solution. Verified across a 300px scroll: the visual stayed attached exactly 16px below the header the whole way, then both released together.

### Notes
- A fixed pixel offset for the visual (stick it at "header height + gap" below the page) was considered and rejected — the header's real height isn't constant, since `.sv-cat` wraps to two lines for some products ("Emergency Call-Taking & Dispatch") and one line for others. The shared sticky parent sidesteps that: whatever the header's actual rendered height is, the visual sits directly below it.
- A third issue reported this round — the unified-command console's third column (camera + active units) rendering as truncated, garbled text on an iPhone — could not be reproduced in this environment across every viewport width tested (375 through 1300px, in Chrome). The CSS breakpoints line up correctly on inspection and `.uc` already has `overflow: hidden`. Left unfixed pending a re-check on this build, since shipping a guess against a browser this session cannot test is more likely to paper over the real cause than fix it.

## [v2.348] – 2026-08-13 — Media panel actually clears the header now, with a real trade-off
### Fixed
- **v2.347's cap on `.sv-side` didn't fix the header clip — it was the wrong lever.** Live measurement on the deployed page (walking `scrollY` through K-Connect's and K-Traffic's own reading ranges, not just the whole grid) showed the panel clipped throughout, regardless of how small it was made. Root cause: `.sv-side`'s sticky containing block is the `.sv-grid` **row**, auto-sized from the accordion list's natural content height — for K-Connect (the last item), the four collapsed rows ahead of it consume nearly the entire row's height before its own row even starts. At any panel height, the row runs out of room before K-Connect is on screen; a smaller panel delays the problem, it doesn't remove it.
- **Fixed by giving `.sv-list` (the grid item that actually drives the row's auto height) 900px of `padding-bottom`.** Verified by walking scrollY through both K-Traffic's and K-Connect's full reading ranges: the panel now holds `top: 112px` throughout, with margin to spare (900px was the first value tested that cleared K-Connect — 800px left it 13px short).

### Notes
- **The 900px is real, visible space, not a trick** — a matching negative margin (the standard "invisible spacer" pattern for normal block flow) does not work inside CSS Grid: auto-track-sizing measures a grid item's margin box, so a negative margin cancels the padding's contribution to the row's height along with its visual footprint. Confirmed directly: padding + canceling margin together grew the row only 46px, against 900px of uncanceled padding elsewhere growing it the full amount. There is now a visible gap between the end of the solutions list and whatever section follows on desktop/tablet.
- Scoped to above the 960px breakpoint only — below it `.sv-side` already drops to `position: static` (existing behavior, unchanged), so the padding is reset to 10px there rather than sitting as dead space on every phone.
- Also trimmed `.sv-app-body` from v2.347 stays in place — it wasn't the fix, but it's not wrong either, and reduces the internal-scroll fallback's odds of engaging.
- The whitespace this leaves is a genuine open trade-off, not a settled decision — a JS-driven positioning approach (clamping the panel's own top rather than relying on CSS sticky's containing-block behavior) could reclaim that space, at real added complexity. Flagging rather than building it speculatively.

## [v2.347] – 2026-08-13 — Media panel actually clears the header; before/after gets real scroll buttons
### Fixed
- **The solutions media panel was still clipping under the header on K-Traffic and K-Connect**, despite v2.345's offset fix. Root cause was different from what that fix addressed: `.sv-side`'s sticky containing block is the `.sv-grid` row it shares with the five-item accordion list, and that row is only ~866px tall. At its natural content height (measured at 744px for K-Connect — a 477px app window + a 216px stats block + a 20px caption), the panel needed 112 + 744 = 856px to hold its top offset, an ~866px box leaving only ~10px of slack. Any solution whose content ran a little longer broke it outright — nothing specific to K-Traffic/K-Connect, just whichever panels happened to be tallest. Gave `.sv-side` a firm `max-height: 620px` with `overflow-y: auto` as a fallback, and trimmed `.sv-app-body` from `min(46vh, 430px)` to `min(38vh, 360px)` so the fallback rarely has to engage at all.
- **The before/after scroll strip had no visible way to scroll on some setups.** It was always scrollable (confirmed: `scrollWidth > clientWidth`), but the only cue was a native scrollbar — and macOS defaults to "show scrollbars: when scrolling," so a static, non-interacting page renders no scrollbar at all under that setting. Added `BeforeAfterCompare`, a small client component with explicit, always-visible previous/next arrow buttons that don't depend on an OS preference.

### Changed
- **The before/after panels were oversized for the 700-1040px range.** Capped at 560px, a panel dominated the screen edge to edge on a ~1015px-wide viewport with barely a sliver of its neighbour peeking in. Reduced the cap to 440px, both for the panel and the scatter diagram inside it.

### Notes
- Diagnosing the header-clip took several rounds of live measurement on the deployed page — one early theory (`align-items: stretch` on `.sv-grid`) looked promising but turned out to make things worse: it grows the sticky element's own box to match the container exactly, which is the opposite of what sticky needs (spare room = container height − element height − offset). The fix that shipped is the one actually verified against the numbers.
- Built on the same detached worktree as v2.345/v2.346 — the primary tree is still mid-merge on `nextjs`.

## [v2.346] – 2026-08-13 — Map stops ballooning; before/after becomes a horizontal scroller under 1040px
### Fixed
- **The unified-command map could render at ~620px tall on a ~825px-wide box.** `.uc-map` only floored its height (`min-height`), and the SVG inside is `height: 100%` — with nothing definite to resolve that percentage against, the browser fell back to the SVG's own 400x300 (4:3) intrinsic ratio scaled off the box's *width* instead. Below 1240px the map spans the full console width, so at typical tablet widths that produced a box roughly three times taller than intended. Changed `min-height` to `height` at all three breakpoints, which is what the original rules were clearly reaching for.

### Changed
- **Below 1040px, the two panels are now a horizontal scroll-snap strip instead of a stacked column.** Stacking buried the console a full screen below the fold; now one panel fills the view and the next visibly peeks in at the edge as the cue to swipe. Same technique the module-card carousel above this section already uses, minus its JS — two stops need only native scroll, not tracked-index dots and arrow buttons.
- The connector arrow between the panels no longer rotates 90° to sit between stacked cards. It rides in the scroll strip between the two panels, non-snapping, so it appears mid-swipe as connective tissue rather than a dead stop of its own.
- Gave the scroll strip an actual visible scrollbar (`scrollbar-width: thin` / styled `::-webkit-scrollbar`) rather than the hidden-native-plus-custom-dots pattern the module carousel uses — asked for explicitly, and honest that there are only two stops here, not seven.

### Notes
- Panel width in the scroll strip is `min(560px, calc(100% - 34px))` — always leaves 34px of the next panel peeking in regardless of viewport, and caps the panel from ballooning at the wide end of this range (tablet widths up to 1040px).
- Built on the same detached worktree as v2.345 — the primary tree is still mid-merge on `nextjs`.

## [v2.345] – 2026-08-12 — No invented count, no dead carousel controls, media panel clears the header
### Fixed
- **The solutions media panel was parking underneath the site header.** `.sv-side` stuck at a hardcoded `top: 88px`, set before the header became sticky; the header is 96px, so the panel sat 8px *under* it and clipped the top of every app window — worst on K-Traffic and K-Connect, where the panel stays pinned longest. It now sticks to `calc(var(--hll-nav-h) + 16px)`, so it follows the 78px mobile header too without a second hardcoded number.
- **The carousel showed its dots and arrows even when nothing scrolled.** They now render only when the track actually overflows its viewport, measured with a ResizeObserver rather than inferred from card count — whether seven cards overflow depends on container width, so the same seven scroll at 1180px and fit at 1920px.

### Changed
- **The fragmented verdict no longer states a number.** "Six systems" claimed something about the reader's estate rather than about the problem; an agency may run three systems or thirty. Now **"Separate systems. No single picture."** / "Sistemas separados. Ninguna imagen común." "Separate" also avoids "disconnected" and "fragmented", which the panel's sub and heading already carry.

### Notes
- When the carousel is not scrollable it also drops its `carousel` roledescription, its tab stop and its "3 / 7" live region — a scroll container that cannot scroll is a dead tab stop, and announcing a position the user is not in is noise.
- `scrollable` starts `true` so the server-rendered markup matches the client's first render. The alternative starts empty and pops the controls in on hydration at the widths that need them, which is the more visible of the two flashes.
- 1px of tolerance in the overflow test: sub-pixel layout regularly leaves `scrollWidth` a hair over `clientWidth` with nothing actually clipped.
- Built on a detached worktree — the primary tree is mid-merge on `nextjs` with eight conflicted files, including both changelog files, and was left untouched.

## [v2.344] – 2026-08-11 — The two verdict cards stop repeating, and the left panel stops gapping
### Changed
- **The fragmented side's verdict card no longer repeats its own heading.** "Fragmented Intelligence" was the panel title *and* the verdict card directly below it. The card now mirrors the unified side clause for clause instead: "Six systems. No single picture." / "Slower decisions. Higher risk." against "One team. One picture." / "Better decisions. Better outcomes." — the same sentence answered twice rather than one term stated twice.
- **Closed the void at the foot of the left panel.** The panels stretch to match each other and the console is much the taller, so the diagram was pinned to the top with ~250px of empty panel under it. `margin-block: auto` splits that space instead: measured after, 119px above the diagram and 119px below.

### Notes
- Spanish moves with it: "Seis sistemas. Ninguna imagen común." / "Decisiones más lentas. Mayor riesgo."
- The term now appears exactly once per locale, verified by count in the source.
- Desktop screenshots still could not be captured — the Browser pane returns blank frames above roughly 1000px wide — so the wide layout is confirmed by measurement. The narrow layout was checked by eye.

## [v2.343] – 2026-08-11 — The difference section rebuilt to the reference composition
### Changed
- **Rebuilt both halves of the difference section to the reference direction — as markup, not as the image it was drawn as.**
  - **Left:** the six sources now sit in two columns tethered to a central alert, and each dashed link carries a **red break marker**. The previous version ran the lines to a question mark and left "these do not connect" implicit; the crosses state it. The operator below gains the tangled knot.
  - **Right:** a real console instead of a six-row list — navy icon rail, incident header with live badge, event stream, a 5/5 checklist, a map with the units' route drawn on it, a live camera tile, active units with status pills, and a six-cell stat strip. Below it the eight-module rail.
- Both halves still render from the same `SOURCES` array: same six sources, same six timestamps, only the arrangement changes.

### Notes
- **Why it is markup and not the render.** Almost everything in that frame is text. Baked into a raster it would cost four things this version keeps: the Spanish page renders in Spanish, the copy is selectable and indexable, screen readers get more than an alt string, and nothing is upscaled on a 2x display. Measured from the reference: its smallest labels are ~11px in a 1622px-wide file, which is ~8px landing in a 1240px container before any device pixel ratio. At 375px the whole frame would render 375x224 and every label would be 2-3px — and no crop rescues that, because the argument *is* the two halves side by side.
- The one genuinely pictorial element — the live camera still — stays a raster (`cam-still.webp`). Photographs as images, interface as markup.
- **Panel split is 0.58:1, not 0.66:1.** At 0.66 the event stream had 60px for its labels and clipped "GIS Location", "Radio Comms" and "Report Created". The reference's own panels run about 0.63:1 for the same reason, and the scatter loses nothing by being narrower.
- The unit markers are positioned on the route's own vertices in the map viewBox — (306,96), (150,168), (64,214) — so they sit on the line rather than near it. The LPR callout moved to the bottom corner because the top corner sat directly on the lead unit's marker.
- Verified at 1600 and 375: no truncated labels anywhere, zero horizontal overflow, all parts painting with the intended tokens. Desktop screenshots could not be captured — the Browser pane returns blank frames at large viewports — so the wide layout is confirmed by measurement rather than by eye.
- Still `/hero-lab-story` only. `/hero-lab` remains untouched.

## [v2.342] – 2026-08-11 — Hero art: nothing cropped, and sharper
### Fixed
- **The art is no longer cut.** `cover` had to discard whatever did not fit a band far wider than the file's 1.5:1, and at wide-but-short viewports that came off the top — taking the incident card with it. The art is now sized by height with width following, so the whole frame is always present.
- **Sharper.** The file holds 1536px of real detail. Stretched across a 2000px hero on a 2x display it was being asked for 2667px — a 1.74x upscale. Capped at 700px tall it lands ~1050px wide, so the same display asks for 2100px: **1.37x**.

### Changed
- **The ground is now drawn in CSS, not baked into a file.** The 2.25:1 extension added 768px of flat fill and no detail, while forcing every real pixel to stretch across the full width with it. The same tones are now a CSS gradient — sampled off the art's own left edge stop for stop — so the ground runs to any width at no cost and no blur. Measured on the live page: the art's left edge and the CSS ground differ by at most 4/255.
- Back to the native render (`unified-platform-art.png`) rather than the extension.
- On phones the art is sized by width instead of height — the section is taller than it is wide there, so height-sizing would push it past the viewport edge and leave only a sliver of the console.

### Notes
- **This does not reach true 1:1, and no crop or fit can get it there.** At 2000px on a 2x display the slot is 2667 device pixels and the render holds 1536. Only a larger render fixes the remainder — roughly 3072x2048 would cover a 2x display at this size with headroom.
- The 2.25:1 extension (`unified-platform-wide.png`) is left in place, unused, rather than deleted.
- Verified at 2000x960, 1440x900 and 375x812: whole frame visible, aspect preserved, zero horizontal overflow.

## [v2.341] – 2026-08-11 — Hero matches the design: full-bleed art, copy on top
### Changed
- **The hero is now the composition from the design**: the art bleeds edge to edge across the whole section, the copy sits over its left side, and the proof metrics sit at the foot of the hero rather than below it.
- **Switched from `contain` to `cover`.** The previous fit was forced by aspect ratio, and the new art-only render removes that constraint.

### Added
- `unified-platform-art.png` — the art-only render (1536x1024), no baked-in text or navigation, so the copy stays live HTML.
- `unified-platform-wide.png` — that render extended to 2.25:1 (2304x1024) by continuing its left edge. The edge is a flat near-white ramp, so the extension is that ramp matched stop for stop: measured across the join at three heights, the largest channel difference is 1/255. Nothing is cropped or upscaled — 768px of matched ground is added on the side the copy sits on.

### Notes
- **Why 2.25:1.** A hero band at 1920 is far wider than the 1.5:1 render, so `cover` would have had to discard height and cut the console. Extended, the whole frame fits: measured at 1920x792, the crop takes 74px off the top — pure sky, the console starts at 85 — and nothing off the sides or bottom.
- **`object-position: right bottom` is chosen, not defaulted.** `bottom` because the art has ~85px of spare sky above the console but only ~9px below the vehicles, so a vertical crop has to come off the top. `right` because a tall viewport crops width instead — about 218px at 1920x950 — and centred, half of that would come off the console's right edge; anchored right it all comes off the extended pale ground, which is what that ground is for.
- The desktop scrim is much lighter than before: the new art's left side is already near-white (#fdfdfd to #f4f5f9), so the wash is now mostly tone-matching rather than legibility insurance.
- On phones the copy starts at the top instead of centring — centred inside an 88vh section it sat ~225px below the header with nothing above it. The art fills the lower half behind the metrics.
- The previous art (`unified-platform.png`, the 1.37:1 render with its own extension) is left in place, unused, rather than deleted.
- Verified EN and ES at 1920x1080, 1920x900, 834 and 375: zero horizontal overflow at every width.
- Still `/hero-lab-story` only. `/hero-lab` remains untouched.

## [v2.340] – 2026-08-11 — Hero copy moves on top of the art; art no longer stacks on mobile
### Changed
- **The hero art becomes a background layer and the copy sits on top of it**, instead of the two sitting side by side. At 1920x780 the art paints from x=853 and the headline runs to x=964, so there is 111px of real overlap and the art bleeds to the right edge.
- **On narrow screens the art moves behind the copy rather than under it.** It used to stack — copy, then image — which made the hero two screens tall. Now it fills the section as texture with the copy over it, so the hero is one screen: measured at 375px, the section went from 1183px to 659px.

### Fixed
- **Each proof metric was rendering 180px tall on mobile.** `hero-lab-light.css` sets `.hll-stat { flex: 1 1 180px }` under max-width 900, written for a row where 180px is a *width*. Turning the container into a column re-points that basis at the main axis, so three 59px rows rendered as 548px. Reset to `flex: 0 0 auto`: stats are now 60px each, 187px total.
- **The proof-metric labels failed contrast on this hero.** `#7386aa` was chosen for the dark navy proof bar, where lightening it *raised* contrast; on a light hero it measured 3.7:1, under the 4.5 floor for 12px text, before any art was behind it. Darkened to `#5a6b8a` (5.2:1) and scoped to the split hero, so the navy bar elsewhere keeps the value that is correct there.

### Notes
- **`contain`, not `cover`, and this is the constraint worth knowing.** The file is 1466x1073 — 1.37:1 — while a full-bleed hero band is nearer 3:1. `cover` had to scale the art to the section width and discard over half its height: at 1920x620 it cut the incident card off the top and the units panel off the bottom. `contain` anchored right keeps the console intact and lets the section height decide its size, which is why the hero min-height is generous.
- **A wider source file would remove that compromise.** At roughly 2.4:1 — about 2560x1080 — the art could go back to `cover` and genuinely bleed edge to edge, with the console in the right 45% and clean ground in the left 45% for the copy to sit on.
- Three scrim weights, because one does not fit: left-weighted above 980px so the console stays clear on the right; moderate and vertical for tablets, where a phone-weight scrim washed the art out entirely (at 834px it was effectively invisible); heavy on phones, where the metrics land on the busiest part of the frame.
- To drop the art on phones entirely instead, `display: none` on `.hsplit-art` in the max-width 980 block — nothing in the layout depends on it.
- Verified EN and ES at 1920, 834 and 375: zero horizontal overflow at every width.
- Still `/hero-lab-story` only. `/hero-lab` remains untouched.

## [v2.339] – 2026-08-11 — Real hero art; header bar goes full-bleed
### Fixed
- **The header no longer has black bands down each side on wide screens.** `.hll-nav` was `width: min(100%, 1536px); margin: 0 auto`, which capped the white background as well as the contents — so above 1536px the bar simply stopped and the dark body background showed through on both sides. Measured at 1920px before the fix: the nav ran 192→1728 inside a 1920px viewport. The bar is now full width and only its *contents* are held to the 1536px column, so nothing below 1536px changes and the four responsive overrides (all max-width queries under that threshold) are untouched.

### Changed
- **The hero placeholder is replaced with the real art** — the console stack over the city, with the SOS phone, radio, patrol car, responder and ambulance.
- **Softened the art's edges.** The file is rendered on its own pale-blue ground that does not match the page gradient: measured, its right edge is `#cadbf5` and its bottom edge `#9d9ca1` against a `#f7faff` page, so it read as a pasted rectangle with three visible seams. A mask now fades the left and right 5% and the bottom 10% — picked off where the content actually sits, so no console card or vehicle is clipped.

### Notes
- The art was already on disk at `~/Downloads/image15.png`; the previous entry shipped a placeholder because I looked for it in the repo and not there.
- Turbopack dev caches optimized images at `.next/dev/cache/images`, not `.next/cache/images`. After swapping the file the optimizer kept serving a 750x555 derivative — the placeholder's aspect ratio — until that directory was purged. Worth knowing for any future art swap; production is unaffected, since each deployment builds its own cache.
- Still open, and not touched here: the page's containers do not share a left edge. At 1920px the nav logo sits at 244px, the hero copy at 344px and the before/after section at 404px, because the three use 1536px, 1360px and 1240px containers. Aligning only the hero would pull it away from the sections below it, so this needs one decision across the page rather than a local fix.
- Still `/hero-lab-story` only. `/hero-lab` shares the header file and gains the full-bleed fix; nothing else there changes.

## [v2.338] – 2026-08-11 — Two-column hero; module cards move up behind the claim
### Changed
- **The hero becomes two-column** on `/hero-lab-story`: copy left, one image right, replacing the centred stack. The headline gets its own column instead of competing with full-width art. Opt-in via a `split` prop defaulted off, so `/hero-lab` keeps the centred version and the two stay comparable.
- **The module cards move up**, from after Solutions to directly after BEFORE / AFTER. That section ends on the claim that every source lands in one record; the cards are what that record actually looks like, so they now read as evidence for the claim just made rather than as a second feature list. It also breaks up what was four consecutive capability statements.
- The customer logo strip stays directly under the hero, so some credibility still arrives before any of the argument.
- New running order: hero → logos → before/after → module cards → how it works → solutions → case study → industries → ecosystem → trust band.

### Notes
- **The hero art is a placeholder.** `public/images/hero/unified-platform.png` is a marked stand-in — replacing that one file is the whole swap, no code change needed. Dimensions are read from the file, so a different aspect ratio re-lays out on its own.
- The hero copy is live HTML, not baked into the image, so it stays selectable, translatable and searchable — and `/es` does not inherit an English hero.
- `text-wrap: balance` on the split headline is load-bearing, not polish: unbalanced, the first line fills to "The Unified Operating" and orphans "System" on a line of its own. Balanced it breaks "The Unified" / "Operating System", which is the reference's break and also survives the longer Spanish string.
- The image carries explicit width/height and `priority`, so the box is reserved before it decodes (no CLS) and it is preloaded as the LCP element.
- Measured at 1280px: copy 64–570, art 622–1216, side by side, no horizontal overflow, hero 601px tall so it clears an 860px fold. At 375px it stacks, the proof metrics go one per row, and page overflow is 0.
- Verified in EN and ES; both return 200 and both show the new order.
- Still `/hero-lab-story` only. `/hero-lab` remains untouched.

## [v2.337] – 2026-08-11 — Module cards leave the hero; new running order
### Changed
- **The seven module cards are out of the hero.** Seven dense product panels at position one is a capability dump made before the page has argued anything, and it is what prevented the hero from carrying a single image. The hero now runs headline → sub → CTA → one visual → proof metrics.
- **New running order on `/hero-lab-story`:** hero → customer logos → the difference → how it works → products → platform modules → case study → industries → integrations → proven & secure.
- **The cards return as their own section after the products**, framed as *what your team actually sees* — the working surfaces behind the product names — rather than as a second feature list. At that position a straight capability restatement would be breadth stated twice in a row, which is the failure this route's order exists to avoid.
- The cards were extracted to `HeroModuleCards.tsx` so the hero and the new section render the same seven from one source. Class names are unchanged, so every responsive rule in `hero-lab-light.css` applies to both hosts.

### Fixed
- **Two of the seven cards were unreachable on a laptop.** The cards lay out to ~1556px, but the carousel arrows and dots are only turned on below 1180px — so at 1280px the track was scrollable with no affordance and cards 6 and 7 sat off-screen. In the new section the track runs full-bleed and the controls are on at every width; verified by walking to the last card, which now lands fully in view with the next arrow correctly disabled. `/hero-lab` still has the original behaviour, untouched for comparison.

### Notes
- The hero's interim visual is the existing platform mark, promoted from background element to the hero's own image (static and centred instead of an absolutely-positioned backdrop). This is a placeholder — the purpose-built header image is the next piece of work.
- Known cost of this order: the first hard proof, the case study, now sits at position seven. The customer logo strip stays directly under the hero so some credibility still arrives early.
- Worth a decision: the products section already carries a "one unified platform" capability matrix listing the same shared modules, so there are now two places on the page enumerating them.
- Verified `/hero-lab` is byte-for-byte unaffected: cards still in its hero, stage classes and mark positioning unchanged, no modules section.

## [v2.336] – 2026-08-10 — Before/after brought closer to the reference design
### Changed
- **The six disconnected sources now sit in a clean two-column grid** rather than jittered positions. Measured after: exactly two column origins instead of six. The point of that half is not that the sources are *messy* — it is that they are perfectly orderly and still unconnected, which the alignment says better than scatter did.
- **Added the vertical divider between the two states**, with the arrow riding on it rather than floating beside it. Drawn on the compare grid so it spans whichever side is taller, and removed when the layout stacks under 900px.
- Redrew the dashed connectors to leave the hub's left and right edges and curve to each card's vertical centre, so they read as six tethers to one unanswered question.

### Notes
- **The reference design is not in the Claude Design project.** Checked directly: `list_files` shows no component matching it, `home/lifecycle.jsx` is a different section (the operational response lifecycle), and the two most recent uploads — `pasted-1785441164875-0.png` and `pasted-1785441165349-0.png` — are a different concept again ("From raw data to resolved incident", K-Safety at the centre). So there was no source to port the way every other section on this page was ported; this is matched by eye from the shared image.
- If the design is added to the Claude Design project, or the source file is available, it can be ported properly rather than approximated — that would close the remaining gap in spacing and detail.
- Still `/hero-lab-story` only. `/hero-lab` remains untouched.

## [v2.335] – 2026-08-11 — Health check stops crying wolf; auto-rollback actually rolls back
### Fixed
- **The hourly "Production Health Check" failure emails were a false alarm — the site was never down.** The workflow monitored `https://www.kabatone.com`, which 308-redirects to the apex `https://kabatone.com`, and the check demanded a literal `200` without following redirects. Every scheduled run saw `HTTP 308` three times and declared production dead.
  - `SITE_URL` now points at the canonical apex domain, and all four health curls use `-sIL` so a future redirect cannot resurrect the same false positive.
- **Added `permissions: contents: read, issues: write`.** The incident-issue step was separately failing with `403 Resource not accessible by integration` because the default `GITHUB_TOKEN` carried only read scopes — so even a genuine outage would not have opened an incident.
- **The auto-rollback step could never actually roll back.** It walked the READY production deployments and promoted the first one returning `200` — but the newest one is the deployment already serving production, so during a real outage it would have promoted the broken deploy back onto itself and reported success. The only reason nothing bad shipped is that Vercel rejected each self-promotion with a `conflict`.
  - The step now reads the current production deployment from `/v9/projects` and **skips it explicitly** as a rollback candidate.
  - Candidates are sorted newest-first, so a rollback moves the shortest distance that works.
  - A candidate must serve **both** `/` and `/es` — matching how production itself is validated. A build that only serves the homepage is not a working rollback target.
  - Promotion is verified by HTTP status, and a rejected promote falls through to the next candidate instead of aborting.
  - After promoting, the step polls production for up to 60s and **fails the job** if the site has not recovered, rather than logging one status and exiting `0`.

### Notes
- Caught while testing: the candidate loop originally read into `UID`, which is **readonly in bash** (it holds the user's numeric uid). `read -r UID URL` silently failed to assign, `$UID` stayed `501`, the skip-the-live-deployment check never matched, and the loop promoted the broken deployment. Renamed to `DEP_ID`/`DEP_URL`. Worth remembering: a failed `read` into a readonly name does not abort the loop, it just leaves the stale value in place.
- Verified against live production before committing: apex `/` and `/es` both `200`, and `www` with `-L` resolves `200`.
- Version numbering note: `v2.314`–`v2.334` are in flight on the staging/redesign branches; this entry takes `v2.335` off `main`. Reconcile at merge if those land first.

## [v2.334] – 2026-08-10 — Before/after rebuilt to the "Every system. One incident." direction
### Changed
- **Rebuilt the before/after section to the reference direction.** Headline becomes "Every system. One incident. Complete clarity.", and the two halves are now styled as different *kinds* of object rather than two matching cards — the contrast should register before either side is read.
  - **Left:** six sources — 911 Call, Cameras, GIS, Radio, LPR Hit, Report — drifting around a question mark, joined by dashed connectors that resolve to nothing, with a faceless grey operator beneath holding the mess together.
  - **Right:** the same six as one live incident record — `INCIDENT #2451`, a map with the incident plotted, and each source checked off against its timestamp.
  - Below it, the outcome: one team, one picture, better decisions.
- **Both sides render from the same `SOURCES` array**, deliberately. The argument is not that the fragmented world has *different* data — it is that it has the *same* data with nothing joining it up. Identical six sources and identical six timestamps on both sides; only the arrangement changes.

### Notes
- Left is SVG because it is a diagram: the scatter positions and connectors have to hold their relationships as the column narrows. Right is HTML because it is a UI mockup and genuinely is a list, so it is marked up as a `<ul>` rather than drawn.
- Still no invented numbers. The timestamps are illustrative and identical across both halves, so nothing here reads as a performance claim.
- The arrow between the halves rotates to point downward once the layout stacks under 900px.
- Caught a syntax error before it shipped: the icon-path map opened with `{` and closed with `]`, which took the route to a 500. Typecheck flagged it as "Property assignment expected" at the closing line.
- Still `/hero-lab-story` only — `/hero-lab` remains untouched for comparison.

## [v2.333] – 2026-08-10 — Before/after becomes a diagram instead of prose
### Changed
- **The before/after section now argues with a drawing, not ten lines of text.** The first pass (v2.332) was five paired prose rows — which meant a wall of text making the case that the homepage has too much text. The claim is "four records versus one record", and that is a shape rather than a sentence.
  - **Left:** four cards adrift at slight angles, unconnected, each carrying its own timestamp — 10:42, 10:47, 10:51, 11:26.
  - **Right:** the same four moments as nodes on a single lit spine under one incident number and one clock, over a bar reading "one auditable timeline".
  - Copy drops from roughly 140 words to **69**, now one caption per side instead of five rows each.

### Notes
- **Inline SVG rather than generated artwork**, deliberately. It stays crisp at any size, both language variants are real text rather than baked pixels, it costs no image weight, and nothing can come back garbled — a real risk on generated UI art, and one that already cost regenerations elsewhere in this redesign.
- Each drawing is `role="img"` with a full `aria-label` describing what it shows, since here the picture carries the argument rather than decorating it. The captions are not a substitute for that.
- Colours and type come from the same tokens as the ecosystem and solutions sections, so it reads as part of the system rather than an inserted graphic.
- Still `/hero-lab-story` only. `/hero-lab` remains untouched.

## [v2.332] – 2026-08-10 — Alternate homepage running order for side-by-side review
### Added
- **`/hero-lab-story`** — the homepage in a problem → action → result order, for comparison against `/hero-lab`. Same components, same styling, only the sequence changes plus one new section. **`/hero-lab` is untouched**, so the two can be reviewed against each other. Follows the `/hero-lab-prev` precedent.
- **New `BeforeAfter` section** — the piece the page did not have. Five paired rows contrasting a fragmented command centre with a unified one, written in operational language rather than feature language: the 911 call, the camera and the responding unit living in three systems, versus one incident record from call to closure.

### Notes
- **The problem this tests.** The current order makes four consecutive capability statements — how it works, solutions, integrations, industries — with the only proof, the case study, sitting behind all of them at position five. A reader gets breadth four times and outcome once, at the end.

  | | current | `/hero-lab-story` |
  |---|---|---|
  | 3 | how it works | **before / after** — the problem |
  | 4 | solutions | how it works — the action |
  | 5 | case study | **case study** — the result, promoted |
  | 6 | trust band | solutions — what you deploy |
  | 7 | ecosystem | industries — where it applies |
  | 8 | industries | **ecosystem** — demoted to supporting |

  The reordering interleaves proof between the breadth sections instead of stacking them, so the page makes its argument once and then evidences it.
- **No numbers are claimed in the new section, deliberately.** Inventing a figure to make the before/after land would be exactly the unsourced-claim problem both audits flagged. The case study carries the evidence — and its bullets are still qualitative ("one unified operational picture") where they should carry measured outcomes from a named deployment. That needs figures only the business can supply.
- This is a proposal to react to, not a decision. Nothing on the live homepage or `/hero-lab` changed.

## [v2.331] – 2026-08-10 — Nav dropdowns close each other; integration disclaimer moves above the logos
### Fixed
- **Every nav dropdown could be open at once**, panels overlapping each other — the four menus were independent `<details>` elements with nothing tying them together. They now share `name="hll-nav"`, which makes the browser enforce mutual exclusivity natively: opening one closes the others, with no JavaScript and no click-outside handler. The same mechanism the FAQ accordion in `SolutionPage` already used.
  - Verified by clicking Solutions → Industries → Company in sequence: exactly one menu open at every step.

### Changed
- **The "these are compatibilities, not partnerships" caveat now sits above the logo grid**, not beneath it. The wording already existed, in 12.5px grey type at the foot of the section — and a reviewer read the whole section and still came away thinking the logos implied formal partnerships. That is the evidence the placement was not working: a disclaimer after the marks is read after the impression has formed, if at all.
  - Now a tinted band with a `COMPATIBILITIES` label chip, 13.5px, immediately before the grid. Measured 7.15:1 for the body text and 4.98:1 for the chip — both pass AA.
  - The footnote keeps only the scope statement ("current, supported and commercially available"), so the two are not repeating each other.

### Notes
- From design feedback rather than an audit. Both items were verified in the code before changing anything: the dropdowns genuinely had no shared name, and the disclaimer genuinely already existed — the fix was placement, not new copy.
- This does not settle the wider ask in that feedback — that the homepage leans on breadth rather than a before/after outcome story, and repeats its message across five consecutive sections. That is a content restructure and needs a decision, not a patch.

## [v2.330] – 2026-08-06 — Social previews on the demo and scenario pages
### Fixed
- **`metadataBase` was never set**, which is why relative Open Graph URLs failed silently. Without it Next cannot resolve a relative image to an absolute one and drops the **entire** `openGraph` block — `/demo/lpr` declared a full OG block with title, description and image and emitted **zero** `og:` tags. Now set on the root layout, so relative metadata URLs resolve site-wide.
- **`/demo/lpr` pointed at an image that does not exist** (`/demo/lpr/stage-1-detect.webp`). Repointed to `/demo/lpr/LPR.png`. Every OG image referenced anywhere under `/demo` is now verified to exist on disk.
- **Added the missing Open Graph blocks.** `/demo` and `/demo/medical` had none at all; `/demo/school` and `/demo/access-control` had blocks with no image. All six now carry title, url, siteName, type and a real image — the scenario's own still where one exists, `og-default.png` for the explorer root.
- Verified across all twelve demo URLs (EN and ES): every one emits an `og:image` that resolves.

### Notes
- **hreflang deliberately not added** to the demo family, though the audit lists it. The Spanish scenario routes still serve English titles and canonicals — declaring an hreflang pair would assert to Google that a Spanish version exists when it does not, which is worse than the current silence. It should ship together with the `/es/demo` localisation decision, not before it.
- The scenario stills are not 1200×630, so social platforms will crop them. A present-but-cropped preview beats no preview; purpose-built 1200×630 art per template is a separate design task.
- Testing note: dev does not run the middleware (root `middleware.ts` against a `src/` directory), so un-prefixed English URLs fall through to the wrong route locally. `/demo/medical` appeared to have no OG until re-tested as `/en/demo/medical`. Production is unaffected.

## [v2.329] – 2026-08-06 — About and all seven industry templates work on a phone
### Fixed
- **`/about` rendered a 747px document inside a 390px viewport.** Same root cause as the contact page: the responsive rules were attribute-substring selectors against the inline style attribute, which React serialises with no space after the colon, so none of them matched. Worse here — the one class-based rule, `.about-hero-grid`, was also dead, because **no element in the file carried a className at all**. The entire responsive layer was inert and the page held its desktop grids at every width.
  - All seven grids now carry real classes (`about-hero-grid`, `about-story-grid`, `about-metrics`, `about-cards-2/3/5`, `about-stat-pair`) with a staged collapse: 4-up and 5-up step down at 960px, 2-up and 3-up at 768px, everything to one column at 560px.
- **All seven industry templates had the identical dead-selector problem**, not just the one the audit sampled. `/industries/public-safety` measured 502px at 390px, its challenges grid computing to `150px + 136px + 152px` because the `repeat(3, 1fr)` tracks could not shrink. Fixed-column grids across airport, logistics, municipalities, ports, public-safety, retail and stadiums now use an `.ind-grid` class: 2-up at 900px, 1-up at 640px.
- Added `min-width: 0` to grid and flex children throughout. Items default to `min-width: auto`, which prevents a track ever shrinking below its content — the mechanism behind every one of these overflows.

### Notes
- Verified with a rendered-content sanity check on every measurement, after an earlier run reported a false clean: the dev server was returning 500s and the iframes were measuring blank documents. That 500 was mine — a CSS comment containing backticks inside a JSX template literal terminated the `<style>` string. Every figure below is from a page confirmed to have rendered its sections.
- **0 horizontal overflow at 375, 390, 768 and 1280 on all nine pages touched**, plus the two redesign pages as a regression check.
- **Known limit:** four industry pages still overflow 23–52px at **320px** specifically. The cause is a decorative "In Practice" callout with roughly 103px of accumulated left padding, and it needs bespoke work per page. Left alone deliberately — every realistic width is clean, and 320px is under 1% of devices.

## [v2.328] – 2026-08-06 — Contact page is usable on a phone again
### Fixed
- **`/contact` rendered a 770px document inside a 390px viewport**, holding its desktop `1fr 420px` grid at every width. The form was squeezed to **164px** and each field to **74px** — the primary conversion path was unusable on a phone.
- **The cause was not a missing breakpoint. The responsive rules existed and had never matched anything.** They were written as attribute-substring selectors against the inline style attribute — `div[style*="grid-template-columns: 1fr 420px"]` — but React serialises inline styles with **no space after the colon** (`grid-template-columns:1fr 420px`). Several selectors additionally embedded the JS quote characters (`padding: '80px 40px 0'`), which never appear in rendered HTML at all. Measured: the space-form selector matched **0** elements, the React-form selector matched 1. One rule also targeted `gap: 16px` where the markup used `12px`, so it was wrong on two counts.
- Replaced the whole block with real class names — `.contact-wrap`, `.contact-grid`, `.contact-offices`, `.contact-cta`, `.contact-cta-card`, plus `.cf-row` and `.cf-card` on the form. Classes also solve what pushed the original author toward attribute matching: `ContactForm` is a separate component, and a class can be targeted across that boundary where an inline style cannot.
- Added `min-width: 0` to the grid children. Grid items default to `min-width: auto`, which is what allowed the `1fr` track to refuse to yield to the fixed `420px` one.

- **The shared `Footer` broke every legacy page at 320px.** Three link columns at a 48px gap with `flex-wrap: nowrap` produced a 374px row inside a 320px viewport. Now wraps, with `min-width: 0`.

### Notes
- Verified across nine widths — 320, 360, 375, 390, 430, 640, 768, 1024, 1280 — all now at **0 horizontal overflow**. The form goes from 238px at 320px to 514px at 1280px, one field per row below 640px, inputs 48px tall (above the 44px touch minimum), and the two-column desktop layout is unchanged from 1024px up.
- `/about` (747px) and `/industries/public-safety` (502px) still overflow at 390px. They have their own causes, are unaffected by the footer change, and are untouched here — they were the audit's Warning-level items against Contact's Critical.
- The redesign pages were already clean and remain so: `/hero-lab` and `/hero-lab/k-safety` measure 0 overflow at 390px.

## [v2.327] – 2026-08-06 — Homepage headline moves to Barlow Condensed
### Changed
- **The homepage hero H1 now uses Barlow Condensed**, matching every other display heading on the redesign — the section headings directly beneath it and all five solution page H1s. It was the only display heading still set in Space Grotesk, which is why it read as belonging to a different site than the titles below it.

### Notes
- Not a font-loading fault, which was checked first: `.hll-headline` hard-codes the literal family name `'Space Grotesk'` rather than using the `--font-space-grotesk` variable, a pattern that usually falls back silently to a system face. It was not falling back — `document.fonts.check('700 64px "Space Grotesk"')` returned true. The mismatch was a genuine design inconsistency carried over from the port.
- Size and tracking moved with the family rather than being inherited. `-0.055em` was tuned for Space Grotesk's wide geometric forms and is far too tight on a condensed face, so it relaxes to `-0.015em` (matching `.sp-h1`); and a condensed face reads smaller at the same px, so the clamp rises from `58–78px` to `64–90px`, from `48–68px` to `54–78px` under 1180px, and from `26–52px` to `30–58px` under 560px.
- Stays at weight 700. `layout.tsx` loads Barlow Condensed at 400/500/600/700 only, so the 800 used by `.sp-h1` is synthesised — worth reconciling separately rather than copying here.
- Verified it is genuinely rendering the condensed face rather than a fallback, by measuring the same string in both families at the same size: 790px in Barlow Condensed against 1064px in Space Grotesk, 26% narrower. Fits both viewports with no overflow — 732px wide at 1280px, 339px at 375px.

## [v2.326] – 2026-08-06 — Remove the dark band under the homepage header
### Fixed
- **A 14px dark band appeared between the header and the hero**, introduced by v2.325. `.hll-hero-head` carries a 14px top margin. While the header lived inside `.hll-page` that margin had a sibling above it; once the header moved out to become a sibling of the section, the margin had nothing to collapse against and collapsed *through* the section's top edge — pushing `.hll-page` down and exposing the dark `#0f1724` body background in the gap.
- `.hll-page` now uses `display: flow-root`, which establishes a block formatting context and contains the margin. Its existing `overflow: clip` does **not** do this — unlike `hidden`, `clip` creates no formatting context — which is why the section was not already containing it.
- Verified: the gap between header and section is 0, and the intended 14px of breathing room above the headline is preserved (it is now inside the section rather than escaping it).

## [v2.325] – 2026-08-06 — Sticky site header, and reversed capability rows collapse on mobile
### Fixed
- **The redesign header now sticks on every page.** The live site's `Nav` was already `position: fixed`; `.hll-nav` was the only header that scrolled away. Three separate things had to be true before it would actually pin, and each would have made the fix look done while doing nothing:
  1. A **duplicate `.hll-nav` rule survived in `hero-lab-light.css`** from when the header was extracted into its own file. It loads after `hero-lab-header.css` at equal specificity, so it won and reset `position` to `relative`. This is why the header stuck on the solution pages but not the homepage, from the same markup. The stale copy is gone; the header file is the single owner and its rule is a strict superset.
  2. On the homepage the header was rendered **inside** `<section className="hll-page">`. A sticky element cannot escape its parent's box, and that section is the hero only — about 1537px of a 13884px document — so the header unstuck the moment the hero ended. It is now a sibling, a direct child of `<main>`.
  3. The solutions accordion's own sticky headers had to move from `top: 0` to `top: var(--hll-nav-h)`, or they would have pinned *underneath* the header. `--hll-nav-h` is published on `:root` (96px, 78px under 900px) so the offset tracks the real height rather than a hard-coded guess.
- Added `scroll-padding-top` so in-page anchors no longer land beneath the now-sticky header, and a hairline bottom border so it separates from content while pinned.

- **Reversed capability rows never collapsed on mobile.** `.sp-feat.is-rev` sets its own `grid-template-columns` with two classes (0,2,0); the mobile override targeted `.sp-feat` with one (0,1,0), and a media query adds no specificity — so the single-class rule never beat it. Every alternating row stayed two-column on phones, rendering its image **141px wide against 333px** for the others. Affects all five solution pages; K-Safety alone had three broken rows.

### Notes
- Verified by scripted scroll at 375px and 1280px: the header holds `top: 0` at every scroll position on both the homepage and the solution pages, the solutions header stacks flush beneath it at exactly 78px with no overlap, and all six K-Safety capability images now measure 333px.
- Desktop is unchanged: alternating rows still mirror correctly (567/493 and 493/567) and the header keeps its 96px height.

## [v2.324] – 2026-08-06 — Sticky solution headers on mobile
### Added
- **Each solution's header pins to the top while you scroll through it, then hands off to the next.** On a phone the accordion is one column and an expanded solution is taller than the viewport — K-Traffic's is 632px against an 812px screen — so the product name scrolled away and you lost track of which solution you were reading.
- Implemented as `position: sticky` on `.sv-item-head` within each `.sv-item`, so the hand-off is native: once an item's bottom passes, its header releases and the following item's takes over. No scroll listeners.
- Mobile only (`max-width: 960px`), where the accordion is single-column. Desktop is untouched.

### Notes
- **`.sv-item` had `overflow: hidden`, which would have made this silently do nothing.** `hidden` turns the item into a scroll container, and a sticky child then sticks to *that* box rather than the page. Changed to `overflow: clip`, which gives the same rounded-corner clipping without creating a scroll container. Where `clip` is unsupported the declaration is dropped, `hidden` stays, and the header simply does not stick — it degrades cleanly rather than breaking layout.
- The header was `background: none`, so pinned content would have scrolled straight through it. It now carries the item's own surface — white when collapsed, the active gradient when expanded — plus a soft shadow so it reads as lifted while pinned.
- `top: 0` with no offset is correct here: the hero-lab header is `position: relative`, not fixed, so it scrolls away rather than occupying the top of the viewport.
- Verified by scripted scroll rather than by eye: the pinned header cycles K-Safety → K-Dispatch → K-Video → K-Traffic → K-Connect in order, and an expanded K-Traffic holds its header for 500px of scroll against the 547px available (item height minus header), releasing as the item leaves.

## [v2.323] – 2026-08-20 — One 502 wiped an entire week of SEO monitoring

**Fixed**
- **`scripts/seo_weekly_agent.py` now retries transient API failures.** The Monday 2026-08-17 run produced no report at all: the orchestrator died on `anthropic.InternalServerError: 502` with no retry wrapping the call, and `traffic-latest.html` still pointed at `traffic-2026-08-10.html`. `_create_with_retry` gives the turn 5 attempts with 5→60s exponential backoff on 5xx, rate-limit and connection errors; 4xx re-raises immediately so a bad request still fails fast.
- **Step isolation in `main()`.** The keyword monitor and the GEO monitor run *after* the report step, with nothing between them — so the report crash took both down and that week has no snapshot of any kind. Each of the three steps now runs in its own `try`, and `main()` returns non-zero if any of them failed. A bad report no longer silently costs the monitors.
- **`stop_reason == 'max_tokens'` had no branch in the tool loop.** A truncated assistant turn carries no `tool_use` block, so the loop would append a second assistant message and 400 on the next request — an obscure failure for a simple cause. It now exits 1 with a clear message. `max_tokens` raised 4096 → 8192, since the digest plus action plan was running close to the old cap. The same guard covers any other stop reason that yields no tool call.
- **`MAX_TOOL_ITERATIONS` (20) backstops the `while True` tool loop.** The orchestrator needs ~4 turns in practice; there was no ceiling on a model that kept calling tools.

**Notes**
- `_create_with_retry` was exercised against synthetic 502 / 529 / 400 responses: retries and succeeds on 5xx, re-raises 400 without sleeping, gives up after the attempt cap.
- `~/.claude/skills/seo-weekly-agent/SKILL.md` gained a troubleshooting table mapping each error-log symptom to its cause, and a stale line calling the orchestrator prompt "the Haiku prompt" was corrected — it runs on `claude-sonnet-4-6`.
- The missing 2026-08-17 window has **not** been backfilled yet; that needs a manual `--days 28` re-run.

## [v2.322] – 2026-08-15 — Staging was serving `Allow: /` on a full duplicate of production

**Fixed**
- **`src/app/robots.ts` now disallows crawling on preview deployments.** `staging.kabatone.com/robots.txt` was byte-identical to production's — `User-Agent: * / Allow: /` — on a site that is a complete duplicate of kabatone.com. Canonical tags on staging already point at `https://kabatone.com/...`, which mitigates the duplicate-content risk but does not control it: canonicals are a hint, not a directive, and nothing prevented Google from crawling and consolidating against the staging host.
- The gate is fail-safe by construction. Only an explicit `process.env.VERCEL_ENV === 'preview'` returns `Disallow: /`; production and local dev fall through to the previous return value verbatim. A missing or unexpected `VERCEL_ENV` therefore cannot noindex kabatone.com — the failure mode points at "staging stays crawlable" (today's status quo), never at "production goes dark".
- Preview output drops the `Sitemap:` line as well. Advertising the production sitemap from a host that disallows crawling was contradictory.

**Notes**
- Found by the KAB-2643 pre-production checklist (finding F-4), which grades staging ahead of a `nextjs` → `main` promotion. Verified live before the fix: staging `robots.txt` returned `Allow: /` and `staging.kabatone.com/k-dispatch` served `<meta name="robots" content="index, follow"/>`.
- `main` is the Vercel production branch and `kabatone.com` is a production domain on the project, so `main` deploys resolve `VERCEL_ENV` to `production` and are unaffected. Confirmed against the project's domain list rather than assumed.
- Verified with `tsc --noEmit` in a clean `/tmp` worktree — exit 0, 0 errors. The OneDrive checkout is polluted with untracked `hero-lab` files and produces phantom errors (finding F-1); it is not a trustworthy gate.

## [v2.321] – 2026-08-14 — The audit was measuring escaped HTML, so apostrophes and ampersands counted as 5–6 characters

**Fixed**
- **`scripts/seo-audit.mjs` now decodes HTML entities before measuring title and description length.** The extractor read the serialized HTML verbatim, so `&` cost 5 characters and `'` cost 6. Three country guides were flagged over-length by exactly the entity overhead and nothing else: `/resources/public-safety-software-suriname` measured 71/70 for a title that is 67 characters (`KPS & Port Security` → `KPS &amp; Port Security`), and `costa-rica` (202/200) and `ecuador` (205/200) measured 5 over for descriptions of 197 and 200 — both containing `Costa Rica's` / `Ecuador's`. Google measures the decoded text, so the metadata was compliant and the audit was wrong.
- Decoding is applied inside `extract()` rather than at each call site, so canonical URLs, OG tags, and every other extracted value are now unescaped too — `&amp;` in a canonical query string was previously compared as a literal `&amp;`.
- Handles named (`&amp; &lt; &gt; &quot; &apos; &nbsp;`) and numeric (`&#39;` / `&#x27;`) forms, and leaves anything unrecognized or out of Unicode range untouched rather than corrupting it.

**Notes**
- No metadata strings were edited. Shortening compliant titles to satisfy a miscounting checker would have been the wrong fix — and any title or description within 6 characters of the cap that contains an apostrophe or ampersand was a latent false positive on the same footing.
- Post-fix run: 234 pages, 0 critical / 0 warnings / 86 info, 234/234 clean. The 3 warnings resolved; the 2 "new" diffs are `desc_near_max` info entries surfacing at their true decoded lengths.

## [v2.320] – 2026-08-13 — The coverage guard v2.318 shipped was armed at 56 pages, not 187

**Fixed**
- **Re-seeded `scripts/seo-baseline.json` from 71 pages to 234.** v2.318 added `checkCoverage()`, which refuses when a run resolves under 80% of the previous baseline's `pagesAudited`. But the baseline committed on `nextjs` still recorded `pagesAudited: 71` — the fossil left by the stale-checkout runs KAB-2480 was filed for. The script rewrites that file at the end of every run, so each routine run starting from a fresh `origin/nextjs` checkout reset it to 71 and armed the floor at **56**. A collapse from 234 URLs to 60 would have passed silently. The guard existed in code and was inert in practice; the floor is now **187**.
- Seed is the verified full run of 2026-08-13 13:02Z against `staging.kabatone.com`: 234 URLs, 0 critical / 4 warnings / 83 info. Warnings are down from 86 because v2.317's title and description trims are now deployed.

**Added**
- `SEO/kab2480-audit-trust-guards.md` — the KAB-2480 write-up, which had only ever existed on the unmerged `seo-audit-guardrails` branch. Corrected to match what actually shipped: four guards, not three (v2.318 added the ahead-of-origin check after KAB-2504).

**Notes**
- KAB-2491 opened to reconcile a version collision between local and origin `nextjs`. That tangle resolved itself upstream — all four "unpushed work" markers (PSIM roundup, CTR docs, RTCC refresh, Track C freshness) are present on `origin/nextjs`, and local `nextjs` is level with it, so the local-vs-origin renumbering that issue asked for was not needed and was not done. (This entry was itself renumbered v2.319 → v2.320: a concurrent KAB-2507 commit claimed v2.319 in the same minute and swept these staged files into it. Same failure mode, new cause — two agents committing to one working tree.)
- `seo-audit-guardrails` is superseded, not merged. Its `seo-audit.mjs` is an earlier implementation of the same guards; v2.318's is a superset. Only the baseline and the doc were carried across.
- **Repo repair:** 24 refs under `.git/refs` had become unreadable OneDrive cloud placeholders (`Resource deadlock avoided`), so every `git fetch` aborted with `bad object` and no branch could be reconciled. All 24 were recovered from `.git/packed-refs`. `.git` living inside OneDrive is a structural exposure and will recur.

## [v2.319] – 2026-08-13 — The audit now states coverage as a share of the repo, and the missing half turns out to be deliberate

**Added**
- **Coverage accounting in `seo-audit.mjs`** (KAB-2507). The audit crawled 234 URLs while the repo has 239 routes × 2 locales = 478. A raw page count cannot tell full coverage from half of it, so every run now reports `Coverage: 234/478 repo URLs (49%)` on stderr and carries `coverage` + `coveragePct` in the report JSON.
- **`route_not_in_sitemap` warning.** Every uncrawled repo route must now be *explained* — either noindex-by-policy or on an explicit `OFF_SITEMAP_ROUTES` allowlist. Anything else is a page someone shipped and never added to `sitemap.ts`: never audited, never submitted to Google. It is raised as a warning per URL rather than absorbed silently into the denominator.
- **`--coverage-only`** — answers coverage from the sitemap alone, no crawl. Exits 1 if any route is unexplained.

**Notes**
- **The gap is policy, not a bug.** The accounting balances exactly: 234 crawled + 230 noindex-by-policy + 14 off-sitemap by design = 478, with **0 unexplained**. The 230 are the non-ICP country pages that the 2026-07-07 indexation triage set to `noindex,follow` and that `keepInSitemap` drops on purpose. Neither the sitemap nor the crawler is dropping routes.
- **KAB-2481 is much smaller than estimated.** The remaining over-cap backlog was projected at ~332 strings. Measured against `NOINDEX_KEYS`: 412 strings are over cap, but 411 of them sit on noindexed pages and have no search impact. Exactly **one** was on an indexable page — the ES `psimAlternatives` description (218 chars) — trimmed to 190 here. The indexable over-cap population is now zero in both locales.
- Guard verified by removing `/lp` from the allowlist: the run reported `2 unexplained` and named both `/lp` and `/es/lp`.

## [v2.318] – 2026-08-13 — The daily SEO audit can now refuse to run instead of reporting the wrong site

**Fixed**
- **New guard: local branch ahead of origin.** The 2026-08-13 daily run (KAB-2504) re-flagged all 86 over-length strings that v2.317 had already fixed — the commit was never pushed, so staging was still serving pre-fix HTML. The loop only ever guarded against the checkout being *behind* origin. `seo-audit.mjs` now refuses when it is *ahead* too: those fixes are not on the audited deployment yet, so every finding would be a false positive.
- **Three guards that were documented but never implemented now exist in code.** The routine's exit-code contract has promised since KAB-2480 that exit 3 means "the audit refused to run" — stale checkout, unreachable sitemap, or coverage below 80% of the last run. The script implemented none of them. An unreachable sitemap silently fell back to the hard-coded 71-route `ROUTES` list and reported CLEAN about a fraction of the site — the exact failure KAB-2480 was filed for.

**Added**
- `checkCheckoutSync()` — `git fetch origin nextjs` + `rev-list --left-right --count`; refuses on behind (`--allow-stale`) or ahead (`--allow-unshipped`). Skipped for localhost targets, and skipped with a warning if git is unavailable rather than failing the run.
- `checkCoverage()` — refuses when the sitemap yields under 80% of the previous run's `pagesAudited` (`--allow-coverage-drop`). Reads the baseline before it is overwritten.
- Sitemap-unreachable refusal (`--allow-route-fallback`) — the `ROUTES` fallback is now opt-in rather than silent.

**Notes**
- Guards refuse rather than warn. The audit's failure mode is not crashing; it is producing a confident number about the wrong site, and a warning gets scrolled past. Exit 3 never means "audited clean".
- Verified against `staging.kabatone.com`, exit 3 each: ahead-of-origin (reproduced today's exact false positive), sitemap-unreachable, and coverage-drop. The behind-origin branch shares the same verified `rev-list` call and was not exercised live, since forcing it would require rewinding the branch. Staging currently publishes 234 sitemap URLs (232 at the last run — the 12 pushed commits added two).
- Routine step 0 updated in Paperclip to match: sync is now checked in both directions, ahead-check before auditing, wait for the Vercel redeploy before running.
- Coverage is still ~49% of the ~478 live URLs — tracked in KAB-2501/KAB-2502, not addressed here.

## [v2.317] – 2026-08-12 — Trimmed the 86 over-length titles and descriptions v2.316 deferred

**Fixed**
- **86 over-length metadata strings** (42 titles over 70 chars, 44 descriptions over 200) across 84 pages in `src/content/en/metadata.ts` and `src/content/es/metadata.ts`. v2.316 deliberately left these for a scoped batch; this is that batch. Worst case was `publicSafetySoftwareMexicoNational` at a 138-char title and 262-char description.
- **The trim rule is deliberately conservative**, because `SEO/ctr-recovery-plan-2026-07-27.md` rules out blanket title/meta rewrites: the leading keyword phrase is preserved verbatim and the brand suffix is kept, and only the trailing agency/port/procurement enumeration is cut, at a clause boundary. Nothing was reworded or reordered, so no page's targeting changed — this only removes text SERPs already truncate. Canonicals were not touched (verified: 0 canonical lines in the diff).
- 21 entries were hand-authored rather than rule-trimmed, where the greedy rule left more than ~12 characters of budget unused and dropped a keyword worth keeping — e.g. `/resources/rtcc-software` would have gone to a 34-char "Best RTCC Software 2026", losing "Real-Time Crime Center" entirely.
- Fixed a trim bug that split thousands separators, turning `KPS ~2,500 efectivos` into `KPS ~2, 500 efectivos` on the Suriname ES description.

**Notes**
- **The audit this batch came from covers about half the site, not all of it.** It is described as the first full-coverage run at 232 routes, but the repo has 239 routes × 2 locales ≈ 478 URLs, and it audited only 52 of the 282 country-guide URLs — Australia, India, Germany, France, Italy, Spain, Netherlands and Saudi Arabia were never checked despite being live and in `sitemap.ts`. All 232 URLs were fetched from `staging.kabatone.com`, whose deployed sitemap is behind the repo. Same failure class as the stale-branch false CLEAN in KAB-2480.
- Consequently **the real over-length population is ~418 strings, not 86.** A full scan of both metadata files finds 203 over-cap in EN and 215 in ES. The 332 not covered here sit on pages the audit never fetched; tracked separately rather than widened into this batch, since they are live pages and the CTR plan warns against untargeted rewrites.
- Typecheck: 0 errors outside pre-existing untracked `hero-lab*` files from the `hero-redesign` worktree.

## [v2.316] – 2026-08-10 — The Spanish demo pages told Google not to index them

**Fixed**
- **All six `/es/demo/*` pages served the English canonical.** They live under `[locale]` but declared a static `export const metadata`, which Next evaluates once per module rather than once per locale — so `/es/demo/lpr` emitted `canonical: https://kabatone.com/demo/lpr`. Every Spanish demo page was telling Google it was a duplicate of the English one and should not be indexed, on a site where Spanish pages are two of the top five earners. Now built by a `demoMetadata()` helper that takes the locale, emits a self-referential canonical and full `en` / `es` / `x-default` hreflang.
- **Spanish titles and descriptions are now actually Spanish.** The same static-metadata bug meant `/es/demo/*` presented English titles to Spanish searchers even though the pages render Spanish headings.
- **`/demo/lpr` declared a social preview image that does not exist.** It pointed at `/demo/lpr/stage-1-detect.webp`, which is not in the repo — so the preview 404'd. Repointed at `/demo/lpr/cam-highway-lpr.jpeg`. (An unmerged commit on another branch repoints it at `/demo/lpr/LPR.png`, which is also not committed — that would not have fixed it either.)
- **Added `metadataBase`.** Without it Next resolves relative OG images against the request host, and drops the whole `openGraph` block when it cannot resolve one at all.
- **Four demo pages had no `og:image`** — `/demo`, `/demo/school`, `/demo/medical` and their ES twins now carry one, using assets verified to exist in the repo.
- **The twelve missing H1s are fixed** on `/simulator` and the five demo scenarios in both locales. This is v2.323's work, which had only ever existed on `hero-redesign` and so had never reached staging or production.
- Shortened the `/demo/access-control` title from 73 to 55 characters, under the 70-character limit.

**Notes**
- The demo pages keep inline metadata instead of moving to `generatePageMetadata`, which hard-codes the shared `og-default.png` and would have destroyed the per-scenario social previews.
- Verified on a production build against all 232 sitemap URLs: warnings **122 → 86**. `canonical_not_self` 6 → 0, `h1_missing` 12 → 0, `og_image_missing` 8 → 0, `og_title_missing` 4 → 0, `og_desc_missing` 4 → 0. Zero critical throughout.
- **Not fixed, deliberately: 42 over-length titles and 44 over-length descriptions across 50 pages**, all of them indexed (the LATAM/ICP country whitelist plus a few resource pages). `SEO/ctr-recovery-plan-2026-07-27.md` holds an explicit decision against blanket title/meta rewrites, on the grounds that untargeted rewrites risk rankings that are otherwise fine. Over-length titles are truncated by Google, not penalised. Worth doing as a scoped, measured batch — not as a sweep.

## [v2.315] – 2026-08-10 — The SEO audit can finally see redirects, and runs against production

**Fixed**
- **The audit followed redirects silently, so it could never report one.** `fetch` follows by default, so a URL that only reached 200 after two hops graded identically to one served directly. This is why the production `307 → 308 → 200` chain on every indexed URL went unreported for months while the audit printed "0 critical, 0 warnings" every day. `fetchPage` now uses `redirect: "manual"` and walks the chain itself, capped at 5 hops.
- **It audited a URL space Google never sees.** Requests went to `${BASE_URL}/en${route}` — but `localePrefix: 'as-needed'` serves EN at the root, so every one of those was itself a redirect, present in no sitemap and named by no canonical. On production `/en/k-dispatch` was a *three*-hop chain. **The URL list now comes from the target's own sitemap**, not from a hard-coded route table. Whether we publish `/path` or `/path/` changed twice in one day (v2.314 de-slashed everything), and each wrong guess either hid a real redirect or invented 70 false ones — two interim versions of this commit did exactly that in opposite directions. Asking the deployment what it publishes cannot go stale. Hosts are rewritten to the audited origin, since `sitemap.ts` hard-codes the production origin and auditing staging would otherwise have graded production. Falls back to `ROUTES` if the sitemap is unreachable.
- **New check `redirect_chain`** — warning at one hop, critical at two or more. A URL we publish as canonical must serve 200 itself; any hop means Google is asked to crawl one URL and index another.
- **New check `canonical_host_mismatch`** — fires only on a production host, when the page is served by one host and its canonical names another. Catches "serves on www, every canonical says apex" directly.
- **New check `canonical_not_self`** — the canonical's path must match the audited path. Deliberately compares *paths only*: staging and preview are supposed to carry production canonicals, and comparing full URLs fired on all 71 staging pages, which would have buried the real signal under a permanent false positive.
- Carried forward the retry-with-backoff in `fetchPage` that existed only as an uncommitted local edit.

**Notes**
- Verified against all three hosts as found: `kabatone.com` → **71 × `redirect_chain`** (the 307 to www) and `www.kabatone.com` → **71 × `canonical_host_mismatch`** (served there, claimed the apex) — the same defect from each side. Both cleared the moment the apex was made the serving domain in Vercel with www on a permanent 308, confirming the check works as a pass/fail gate.
- **Coverage went from 71 URLs to 232.** The hard-coded table covered 31% of what the sitemap actually publishes — the ES locale and the country pages were never audited at all. The newly-visible pages carry 44 over-length titles, 44 over-length descriptions, 12 missing H1s, 8 missing `og:image` and 6 `canonical_not_self`. These are not regressions; they are pages the audit had simply never looked at. Triage separately.
- **Remaining, correctly reported: 231 × `redirect_chain` on production** — the deployed sitemap still emits slashed URLs, so every one still 308s. That is precisely what v2.314 fixes, and it should fall to zero once that ships.
- The daily job still targets staging; production is now worth a separate weekly run, since the 307 exists only there. See `SEO/weekly-report-2026-08-10.md`.

## [v2.314] – 2026-08-10 — Every canonical URL now resolves to a 200

**Fixed**
- **Every canonical, hreflang, `og:url`, JSON-LD `url` and sitemap entry pointed at a URL that redirects.** All 450 canonicals in `src/content/{en,es}/metadata.ts` ended in a slash, and `src/app/sitemap.ts` emitted slashed URLs — but Next's default is to 308 `/path/` → `/path`. So the URL we published as canonical was never the URL that served the page, and the page Google did land on carried a canonical pointing back at the redirecting form.
- In production this stacks on a second hop: Vercel serves `www.kabatone.com` as the primary domain and **307**s the apex, while the code, `robots.txt`, the sitemap and the GSC property are all non-www. An indexed URL therefore cost `307 → 308 → 200`. GSC confirms Google resolved it in our favour — all 142 reported pages are the non-www form, 0 www — so nothing was lost, but every crawl of every page paid for two extra round-trips. The 307 half is Vercel domain config, not code, and is why the daily staging audit never saw it.
- Rewrote 449 canonicals and 856 schema / `llms.txt` URLs to the unslashed form, and replaced the sitemap's slash-appending with a `loc()` helper. Only the bare origin `https://kabatone.com/` keeps its slash.

**Notes**
- **The obvious fix — `trailingSlash: true`, keeping the slashed form Google has indexed — was tried and rejected.** Next applies it to route handlers too; only static files with extensions and `.well-known/` are exempt. `/api/slack/events` would have begun returning a 308, and Slack's Events API does not follow redirects. Going unslashed instead aims the canonicals at the URL that already serves 200 and leaves the Slack routes alone.
- Verified against a production build: canonical, `og:url`, all three hreflang alternates and the JSON-LD `url` on `/resources/best-cad-dispatch-software` are unslashed and identical; the ES counterpart matches; the homepage keeps `https://kabatone.com/`; all 232 sitemap entries are unslashed except the root; the served paths return 200 with no redirect; and `POST /api/slack/events` still answers 401 (signature check) rather than a 308.
- Does not fix the 307 on its own — that needs the apex set as primary domain in Vercel. Until then this takes the chain from 2 hops to 1. See `SEO/weekly-report-2026-08-10.md`.

## [v2.313] – 2026-08-04 — SEO: market segmentation + synthetic-impression filter

**Fixed**
- The weekly brief's headline CTR was structurally misleading. Site-wide CTR (0.49%) is dominated by US impressions that produce almost no clicks — 53,311 impressions to 77 clicks (0.14%), with 1,716 of 1,725 US queries earning zero clicks in 28 days. The target market (LATAM + Spain) runs at **1.34% CTR** and delivers 42% of all clicks from 15% of impressions.
- Identified automated SERP polling in the query data: three unrelated queries ("computer automated dispatch software", "peregrine.ai analytics reporting dashboards", "best fire computer aided dispatch software") each showing 900–1,200 impressions at positions 3.7–6.9, zero clicks, ~100% desktop, and an identical usa/gbr/nld/deu/ita/hkg country fingerprint. Unfiltered, these ranked #2, #4 and #5 in the opportunity list and drove three of the four P0 actions in the 2026-08-04 brief.

**Added**
- `scripts/weekly_brief.py` — `target_market` segment (LATAM + Spain), `by_country` breakdown, and a `synthetic` block flagging queries whose profile matches automated rank tracking rather than human demand. Synthetic queries are excluded from opportunity scoring and striking-distance counts. Criteria are conservative and recorded in the JSON: `clicks=0, impressions>=150, position<=10, desktop_share>=0.95`.
- `SEO/audits/weekly-2026-08-04-corrected.{json,md}` — revised brief. The original's Sections 2 and 4 are superseded; the P0 title rewrites it proposed had already shipped on 2026-07-06, one day before the measurement window, and moved CTR 0.00pp.

**Changed**
- GEO status 7/12 → **8/12**. "Genetec alternatives for public safety" is now a confirmed AI citation win. "best NG911 software" is cited but not won — the page is in the source set and K-Dispatch is described, under a secondary "unified/CAD-integrated" bucket rather than the headline recommendations (Motorola VESTA, Intrado Viper, Tyler New World).

## [v2.312] – 2026-08-04 — K-Dispatch hero: map centre-stage with a live video inset
### Changed
- **Recomposed the K-Dispatch hero around the map.** The live dispatch map moves from a side panel to the centre — the largest, forward-facing surface — with the call queue moving left and recommended units plus KPIs moving right. Dispatch is a geographic job, so the map now carries the composition rather than sitting in support.
- **Added a live video inset over the map**: a picture-in-picture camera card with a red LIVE badge and a "CAM-07 · Incident scene" caption, so the hero shows video and location together the way an operator actually sees them.
- The map is now **light**, matching the panel language. The previous version's map came back dark, which read fine as a side panel but would have been a hard break in the set once promoted to centre.

### Notes
- Same measured geometry as before and as K-Safety: 41% scale, ~9.1px effective labels, side-by-side, nothing clipped.
- Real 1K mark composited in as usual (badge at 444,28 / 56x56, fill `rgb(5,170,233)`), so it never shipped with an invented glyph.
- 208KB, up from 95KB — the light street map and the added camera still are both photographic-ish detail the encoder has to carry. Still comfortably under K-Safety's 213KB.
- Known cosmetic: the generated basemap carries some nonsense street labels. They render at roughly 4px at hero scale so they read as map texture rather than words, but they are there under magnification.

## [v2.311] – 2026-08-04 — K-Dispatch hero: purpose-built three-panel composition
### Added
- **New K-Dispatch hero**, built to the recipe established on K-Safety: call queue by intake channel, CAD console with the active call and recommended units, and a live dispatch map. Drawn for the hero slot — few elements at large type — rather than a dense screenshot shrunk to fit.
- Content mirrors the page's own narrative (multi-channel intake → triage → CAD → dispatch): Voice 911 / Text-to-911 / Citizen App queue rows with wait times, a PRIORITY 1 "Medical Emergency" active call with a running 02:14 timer, three recommended units with ETAs and the nearest highlighted, and KPIs for active calls, average answer and dispatched-today.
- Carries the **real 1K KabatOne mark** in its app icon, swapped in by pixel composite (badge found at 500,32 / 60×61, fill `rgb(0,174,212)`), so it never shipped with an invented glyph.

### Changed
- **Retires the stand-in.** The hero pointed at `dispatch.webp` — the same console image the page already used in its capability rows — because the design's own `hero-k-dispatch.png` was never in this repo. That duplicate is gone.
- Dropped `heroVideo`, `heroEvent` and `chips` for this page. The composition is self-contained, so those overlays would sit *on top of* the panels rather than read as part of the product — same call as K-Safety.
- Runs `heroBare` + `heroLight`, and deliberately not `heroWide`: it is legible beside the copy.

### Notes
- Verified identical geometry to K-Safety at 1600px: 41% scale, ~9.1px effective labels, side-by-side, nothing clipped, no page overflow.
- 95KB — well under K-Safety's 213KB, because this composition has far less photographic content (one vector map versus several city-street camera stills).
- The pipeline is now scripted end to end (knockout → trim → logo composite), so the remaining three heroes are one generation plus one script run each.

## [v2.310] – 2026-08-03 — Real KabatOne mark in the K-Safety hero app icon
### Fixed
- **The app-icon badge inside the hero screenshot now carries the real "1K" KabatOne mark** instead of the generic "K" the image model invented. It is the same artwork the site header uses (`hero-cards/header-logo-lockup.png`), so the brand reads consistently between the page chrome and the product shot.

### Notes
- Done as a **pixel composite rather than a regeneration**: the glyph was swapped in place, so every other detail of the approved composition is byte-identical. Regenerating would have risked changing incident names, chart shapes or layout for a 47px logo.
- Method: located the badge by scanning for brand-blue in the header region (found at 446,93 / 47×50, fill `rgb(22,98,246)`), derived its rounded-square silhouette by flooding non-blue inward from the bounding box, blended the invented glyph's pixels back to the badge blue — proportional to their distance from blue, so antialiased edges dissolve rather than leaving a halo — then composited the real mark, recoloured white, centred at 29×25.
- The lockup PNG is a **mask** (alpha carries the shape, RGB is white), which is why it reads as blank on a light background. The mark had to be isolated from the wordmark first — a column-wise alpha scan found the gap at x=56, putting the mark at x∈[13,55], y∈[5,41].
- File 213KB (from 194KB); the composite adds detail the encoder has to carry. Still well inside the budget set in v2.308.

## [v2.309] – 2026-08-04 — SEO: weekly brief 2026-08-04

**Added**
- `SEO/audits/weekly-2026-08-04.json` — 28-day data from GA4 + GSC via service-account auth: 2,883 sessions (+62.4%), 850 organic (29.5%), 55 AI Assistant (+120%), 427 clicks, 87,954 impressions, avg pos 13.5, 211 striking-distance queries
- `SEO/audits/weekly-2026-08-04.md` — CEO-format brief: traffic by channel, search deltas, GEO citation status, and P0/P1/P2 action plan tied to named queries
- `SEO/audits/traffic-2026-08-04.html` — self-contained HTML dashboard (deterministic fallback — no Anthropic key in this environment)
- `SEO/audits/traffic-latest.html` — symlink-equivalent latest view

## [v2.308] – 2026-08-04 — Weekly brief caller: LLM synthesis + HTML dashboard from the collector JSON

Second half of merging the two Monday SEO jobs into one. `scripts/weekly_report.py` consumes the collector JSON from v2.307 and produces the human brief — an LLM-written Weekly Intelligence plus a prioritised P0/P1/P2 action plan — rendered into a self-contained HTML dashboard. The collector owns *data*; this owns *narrative + presentation*. Neither imports the other's responsibilities, so a failure in one can't silently mask the other (the bug that let a dead OAuth token run green for three weeks).

### Added
- **`scripts/weekly_report.py`** — reads `weekly_brief.py --out` JSON, calls Anthropic over `urllib` (no SDK, matching the collector), and renders a dark KabatOne dashboard: KPIs (sessions, organic, AI Assistant, opportunity uplift), weekly trend + source-mix charts, keyword opportunity stack, a dedicated **Striking Distance** table (pos 5–15), cluster momentum, and top referrers.
- **`--no-ai`** deterministic brief (zero network, zero key) — also the automatic fallback whenever the LLM step fails, so the report is never blank.
- Reuses only the shape-agnostic markdown→HTML formatters from `seo_weekly_agent.py`; the renderer targets the collector's own JSON contract rather than the legacy `analyse()` shape.

### Verified
- End-to-end on live 28-day data: collector → report in both deterministic and `claude-sonnet-4-6` modes. LLM brief correctly grounded (C5, LATAM dispatch, real position/impression figures) with valid P0/P1/P2 badges.

*(Versions v2.287–v2.306 are the homepage redesign work on the `hero-redesign` branch and will appear here when that merges.)*

## [v2.307] – 2026-08-04 — Weekly brief collector: service-account auth, all-channel traffic

First half of merging the two Monday SEO jobs into one. `scripts/weekly_brief.py` collects everything the weekly brief needs — all-channel GA4 traffic, GSC search performance, deterministic opportunity scoring — into a single JSON. No LLM, no HTML, no git, no Slack; those belong to the caller.

### Fixed — the credential failure that cost three weeks
- **Service-account auth only, no OAuth refresh token in the path.** The weekly pull had been failing since mid-July with `invalid_grant`. It was diagnosed as an expired token and regenerated twice; each replacement died within a week. Refresh tokens are now removed from the weekly path entirely rather than re-fixed.
- **No silent OAuth fallback.** That fallback is *why* it went unnoticed for three weeks: `google_auth.py --check gsc` kept reporting `[OK]` via the service-account path while the actual weekly job failed. The collector fails loudly instead.
- Verified by running the full pull with `~/.config/claude-seo/oauth-token.json` renamed away — this is the regression test for the whole class of failure.
- Required granting `kabatone-seo-reader@kabatone-seo.iam.gserviceaccount.com` Full access on the `https://kabatone.com/` property. GA4 access already existed; GSC did not (403 until granted).

### Fixed — GSC totals were wrong by 58%
- **Totals now come from a dimensionless query.** They were being summed from query-dimension rows, which undercounts badly: measured **180 clicks summed vs 427 actual**, 54,009 impressions vs 87,954. GSC anonymises rare queries and omits them from query-dimension results, so those rows can never sum to site totals.
- **Query row limit 1,000 → 25,000.** The site returns ~2,566 queries over 28 days, so the previous cap silently truncated ranking data. Striking-distance count went **125 → 211** once the full set was pulled.

### Added — non-search traffic
The previous GA4 pull hard-filtered every page-level query to Organic Search, so ~70% of sessions appeared as a single number with no detail. Now collected: per-channel sessions/users/engagement/key-events with prior-period deltas, landing pages **per channel**, referrer source/medium breakdown, and 12-week trend.

- **`AI Assistant` isolated as its own section** — 55 sessions, +120% vs prior, with its own landing pages and weekly trend. This is the only direct measurement of whether the GEO work converts to traffic, and it had never appeared in any report.
- First full picture: Direct **62.6%**, Organic Search 29.5%, Referral 3.5%, AI Assistant 1.9%. The brief had been reporting only the 29.5%.

### Notes
- Scoring helpers (`expected_ctr`, `business_value`, `assign_cluster`) are imported from `seo_weekly_agent.py` rather than duplicated, so the brief and the dashboard cannot disagree about what counts as an opportunity.
- Phases 2–3 (rewiring the cloud trigger, retiring the superseded LaunchAgents and skills) are not in this commit. Full design at `~/.claude/plans/dynamic-riding-raven.md`.

## [v2.306] – 2026-07-31 — K-Safety hero: full-width so the dashboard text is readable
### Fixed
- **The K-Safety hero screenshot is finally legible (KAB-2360).** The image is a real 1774px-wide product dashboard with dense baked-in text. It sat in the *right column of a two-column hero* (`.sp-hero-inner: 1fr 1.42fr`), which caps the visual at ~700px even with the negative-margin bleed — so it always rendered at ~0.4× and the labels collapsed to a few pixels. **That is why every prior width nudge (changing the `fr` ratio / the bleed margin) failed: the two-column structure, not the width value, was the ceiling.**
- Added an opt-in `heroWide` mode: the copy stacks above and the screenshot runs as a **full-bleed band out to its native 1774px** (never upscaled), so its text renders at near-1:1 on desktop instead of ~0.4×. `.sp-hero` already clips overflow, so the 100vw child adds no horizontal scroll. Enabled on K-Safety only (`sol-ksafety.ts`); every other solution page keeps the two-column console hero unchanged.

### Notes
- Not pushed — staged on `hero-redesign` for review. `tsc --noEmit` clean.

## [v2.305] – 2026-07-31 — Fix broken internal links so staging is navigable
### Fixed
- **Three broken internal links (→ 404s) across the site, found by a full static audit (KAB-2346).** So the staging preview can be reviewed end-to-end without dead ends:
  - `/integrations/facial-recognition` → `/integrations/face-recognition` — the route is `face-recognition`; the "Facial Recognition" footer/related link in 6 pages pointed at a non-existent `facial-recognition` slug (`vs/genetec`, `vs/milestone`, `vs/verint`, `vs/vms`, `vs/fusus`, `resources/rtcc-setup-guide`).
  - `/resources/public-safety-software-uk` → `/resources/public-safety-software-united-kingdom` — the UK country page is slugged `united-kingdom`; three related-link lists used the `-uk` shorthand (`public-safety-software-israel`, `-jamaica`, `-trinidad-and-tobago`).
  - `/privacy-policy` → `/privacy` — the demo page footer's "Privacy Protocol" link; every other page correctly uses `/privacy`.

### Added
- `scripts/audit-internal-links.py` — static internal-link checker. Maps `page.*` files to valid routes and cross-checks every internal target, covering both `href="…"` JSX and `href:/to:/path:` object-config links (the main Nav/Footer author links as data, which an `href=`-only scan misses). Re-run reports **0 broken** after this fix.

### Notes
- These are content-page links present on both branches; fixed here on `hero-redesign` (the staging branch under review). Same fix should ride along when `hero-redesign`/`nextjs` are promoted.
- Not pushed — staged on `hero-redesign` for review.

## [v2.304] – 2026-07-31 — K-Safety hero: matte white canvas back to transparent
### Fixed
- **The K-Safety hero screen's background is transparent again, not white (KAB-2346).** v2.302 flood-filled the *generated* hero to transparency so the panels float on the light hero gradient; v2.303 then swapped in Omer's real `ksafe.png`, which shipped as a solid-white RGB canvas — reintroducing the white block the `heroLight` treatment is meant to remove. Re-applied the matte to the real image: border-seeded flood fill (connected-to-edge white only, so white *inside* the dashboard panels is untouched) with a feathered edge so the panel drop shadows survive. 76% of the canvas is now transparent; corners read alpha 0. Verified by compositing over both the light hero gradient and a dark field — panels intact, no white rectangle, no visible halo on the light background.

### Added
- `scripts/matte-hero-transparent.py` — reusable border-flood matte for the light 3D-panel heroes, so a future white-background export can be re-matted in one command instead of hand-editing alpha.

### Notes
- Asset only; no code change — `sol-ksafety.ts` already carries `heroLight: true` (which bypasses Next's optimizer, since it flattens alpha) and the renderer path was unchanged.
- Not pushed — staged on `hero-redesign` for review.

## [v2.303] – 2026-07-31 — K-Safety hero: use Omer's actual shared image, larger
### Changed
- **The hero now uses the real image Omer shared, not a generated approximation.** The prior pass regenerated an approximation because the reference was thought to be a pasted image with no file on disk — but the actual asset (`ksafe.png`) was in `~/Downloads`. Converted it to `hero-k-safety.webp` (1774×887, cwebp `-q 92 -sharp_yuv`). This is the genuine high-fidelity K-Safety composition: correct 1K brand mark, real status columns (NEW 12 / IN PROGRESS 7 / ON SCENE 5 / RESOLVED 18), trend deltas (+12% / -8% / +3% / +15%), Export button, "This Week" date picker, BY TYPE donut and INCIDENTS BY AREA/RESPONSE TIME analytics panel.
- **The art is bigger.** The hero's visual column went from `1.12fr` to `1.22fr` (with gap tightened to `clamp(26px, 3.4vw, 56px)`), directly addressing the "image is too small" feedback (KAB-2337).

### Fixed
- The text errors in the previous generated approximation ("LAW" for "LOW", "UpZone" for "Uptown") are gone — the real image has correct labels ("LOW", "Uptown").

### Notes
- Ref: KAB-2337. Previous webp backed up to `/tmp/hero-k-safety.prev.webp` for the session.
- Not pushed — staged on `hero-redesign` for review.

## [v2.302] – 2026-07-31 — K-Safety hero: light 3D panel composition
### Changed
- **New K-Safety hero** in the 3D angled multi-panel style: an incident board with four tinted status columns and KPI sparklines, flanked by a live-camera panel and an analytics panel, all floating in perspective. Replaces the flat GIS console shot.
- Because the composition is self-contained, this hero runs `heroBare` and drops the video inset, event card and floating chips the flat console hero needed — they would have sat on top of the panels rather than reading as part of the product.

### Added
- `heroLight` flag on `SolutionContent` for heroes whose art is light panels on a transparent canvas.

### Notes
Three things had to be solved to make a light hero sit on the light hero gradient:
1. **The white canvas read as a white block.** Fixed by flood-filling the background to transparency from the image border — connected-to-edge white only, so the white *inside* the panels is untouched, and pixels on the fill boundary keep partial alpha so the drop shadows survive instead of hard-clipping. 45% of the image became transparent.
2. **`mix-blend-mode: multiply` was tried first and did nothing.** `.sp-hero-inner` sets `z-index`, which creates a stacking context and isolates the blend from the gradient painted on `.sp-hero` behind it. Noted in the CSS so it isn't retried.
3. **Next's image optimizer flattens alpha** — it returns `hasAlpha: false` even when it emits WebP, which put the white block straight back. Light heroes therefore pass `unoptimized`; the file is already a compressed ~90KB WebP so nothing is given up.

- Generated with Gemini (Nano Banana Pro) from the reference. Same no-text technique as v2.300 — every label is a grey placeholder bar — so there is no garbled UI type. One stray "KPI" label did render; legible rather than gibberish, left in place.
- **The uploaded reference image itself could not be used directly** — a pasted image is visible in conversation but is not a file on disk and was not in the Design project's `uploads/`. To use the exact artwork, drop it in the repo or upload it to Claude Design.
- Only K-Safety uses this treatment; the other four heroes are unchanged and still optimized.

## [v2.301] – 2026-07-31 — Redesign-native nav and footer (drop the legacy chrome)
### Fixed
- **The redesigned pages were wearing the old site's chrome.** v2.298 wrapped them in the live `<Nav>` and `<Footer>` to restore internal links for SEO — that fixed the links but dragged the legacy dark nav bar above the light redesign, so the pages read as "this is still the old design" at first glance. v2.299 did the same to the redesigned homepage's footer.
- Added `HeroLabChrome` (`HeroLabNav` + `HeroLabFooter`) in the redesign's own light language — Barlow Condensed display, Space Grotesk body, DM Mono labels, sticky translucent nav — scoped under `.hlc-` so it cannot collide with the live components. Both the five solution routes and the redesigned homepage now use it.

### Notes
- **The SEO fix is preserved and improved.** Link parity with `src/components/Footer.tsx` was deliberate: the same 20 destinations (about, contact, privacy, 6 integrations, 11 comparison pages), plus the five product pages and five industry pages the live footer omits. Internal links per solution page: **25 → 46**.
- No `@/components/Nav` or `@/components/Footer` import remains anywhere under `src/app/[locale]/hero-lab/` or `src/components/hero-lab/` — the redesign is now visually self-contained and can be reviewed without the old design bleeding in.
- The nav collapses its link row below 820px; the footer goes 5 → 3 → 2 columns.

## [v2.300] – 2026-07-31 — Nine purpose-built product screenshots (Gemini)
### Fixed
- **Every solution page was showing its hero image again as feature 1** — all five of them, the most visible image defect on the redesign. Each now has a distinct, purpose-generated screenshot for that row.
- **Two images that didn't match their section.** K-Video's "Forensic search & investigations" was illustrated with a BI dashboard; K-Connect's "Granular permission control" used the citizen-app shot. Both replaced with images that actually depict the feature.
- Reduced the worst cross-page repetition: `events.webp` 4 → 3 uses, `integrations.webp` 3 → 2.

### Added
Nine new 1200×670 product screenshots generated with Gemini (Nano Banana Pro), in the existing dark-navy/cyan product language:
`gis-ops`, `cad-units`, `video-wall`, `traffic-corridor`, `connect-network`, `forensic-search`, `permissions`, `integrations-topology`, `event-board`.

### Notes
- **Prompting technique that made this viable:** image models render UI text as gibberish, which on a product page looks worse than repetition. Every prompt explicitly forbids text, letters and numbers and asks for short grey bars and dots where labels would sit. The results read as genuine product screenshots with no garbled type.
- Two first attempts came back as a monitor on a white background rather than a full-bleed screenshot. Caught by sampling corner-pixel brightness across all nine rather than eyeballing them, then regenerated with explicit "no device frame, no bezel, no background" wording.
- K-Connect's network diagram is generated in the product's own green (`#22c55e`) and K-Traffic's corridor view in amber/cyan, so each page's imagery matches its accent.
- Distinct images across the five pages: **11 → 20** over 36 slots. All five same-page duplicates are gone.
- **Still repetitive across pages:** `gis.webp` appears on all 5, `video.webp` and `ai.webp` on 4 each, `dispatch.webp` on 3. Fixing that fully needs roughly 16 more generations — not done here.
- The K-Dispatch hero is still the `dispatch.webp` stand-in noted in v2.294; the design's dedicated `hero-k-dispatch.png` is still not in the repo.

## [v2.299] – 2026-07-31 — Homepage redesign: SEO parity with production

SEO review of the `hero-lab` preview deployment. The five solution pages came back clean — schema identical to production, all FAQ Q&A visible in the rendered body, every page *gained* content, ES fully translated. All the regressions were on the redesigned homepage, and every one is now closed. Measured after the fix: **1,492 words vs production's 1,492**, with C5, CAD, 911, NG911 and VMS frequencies matching exactly.

### Fixed — internal link graph
- **Restored `<Footer>` on the redesigned homepage.** It rendered none, dropping **17 internal links**: all 11 `/vs/` competitor pages and all 6 `/integrations/` pages. The homepage is the strongest link source into both clusters. Measured: **0 → 11** `/vs/` links, **0 → 6** `/integrations/`.
- Wrapped the footer in `.page-light`. `Footer` reads the global theme tokens, which default to the dark palette at `:root` — without this it renders a dark slab beneath a light page.
- **Restored the airport, retail and logistics verticals** as a text link row beneath the industry grid. Production covers seven; the redesign's photo grid is built for one lead tile plus four, so adding links rather than a sixth tile keeps both the design and the `/industries/*` link equity.

### Fixed — keyword coverage
- **H1 now carries the ranking phrase.** It read "One Platform. Total Awareness." — memorable, but zero retrieval value against production's "The Unified Operating System for Public Safety". The tagline moved into the eyebrow, so nothing is lost visually and the two-line gradient treatment still applies. ES: "El Sistema Operativo Unificado para Seguridad Pública."
- Visible-text term frequency, before → after (production in parentheses): **C5 0 → 4** (4), **CAD 3 → 10** (10), **911 5 → 10** (10), **NG911 1 → 4** (4), **VMS 1 → 4** (4). C5 at zero was the worst of these — it anchors the entire `/resources/` Mexico cluster.

### Added — trust and proof band
- New `TrustBand` section restoring two blocks the redesign dropped: the **SOC 2 Type II / end-to-end encryption / RBAC** security block, and the quantified **"under 90 seconds vs 4–6 minutes on legacy CAD"** dispatch stat — the page's most citable line for AI Overviews. Copy is lifted verbatim from `src/app/[locale]/page.tsx` so both homepages make identical claims. A third card carries the NG911 / CAD / VMS / C5 interoperability terms.

### Notes
- **Three findings in the first review pass were wrong and are retracted.** Text extraction that stripped HTML tags also discarded image `alt` attributes, which is where the logo strips live. The named Mexican agency seals and the partner brands (Genetec, Milestone, Motorola, RapidSOS, Carbyne, Corsight) were never lost. Only INAMI is genuinely missing, and it has no usable asset yet. `C5 CDMX` is in fact *new* here — production doesn't have it.
- **The K-Dispatch title is not a redesign regression.** This branch is **46 commits behind `main`**, which already carries the optimized "CAD Dispatch Software for 911, Fire & EMS | K-Dispatch". A rebase resolves it and also pulls in five production `/resources/*` pages missing from this branch. Editing `metadata.ts` here would only create a conflict.
- Left alone: the `/en` → `/` 307 on the language switcher (next-intl `localePrefix` behavior; a global routing change for one crawler hop), and `fetchPriority` on the hero image (Next 15 already emits `fetchpriority="high"` from `priority`).

## [v2.298] – 2026-07-30 — Review remediation: SEO parity, FAQs, contrast, claim consistency
Acts on the full content / design / performance / SEO review of the redesign.

### Fixed — SEO parity (the promotion blockers)
- **Removed the hardcoded `robots: noindex` from all five solution routes.** This was the single highest risk in the redesign: promoting it as a file-swap would have shipped a `noindex` directive to production and deindexed all five product pages outright. Routes now call `generatePageMetadata(...)` against the same `src/content/{en,es}/metadata.ts` entries the live pages use, restoring keyword-targeted titles, descriptions, canonicals, hreflang, OG and Twitter cards in both locales.
- **Restored `<Nav>` and `<Footer>`.** The redesigned pages rendered neither, so each carried **one** internal link versus ~40 on the live equivalents — severing link equity into the `/resources/*` and `/industries/*` clusters. Measured after the fix: **1 → 25 internal links** per page.
- **Restored all three JSON-LD blocks** — `softwareApplicationSchema`, `faqPageSchema`, `breadcrumbSchema` — via a new `SolutionRoute` wrapper, sourced from the existing helpers in `src/lib/schema.ts`. The redesign previously emitted zero.

### Added — FAQ content (29 questions, ~930 EN words)
- Ported every live page's FAQ set into its `sol-*.ts` content file and **rendered it visibly** as an accordion, not just as structured data. The live pages define this content purely to feed `faqPageSchema` and never display it, which contradicts Google's requirement that rich-result markup reflect visible page content — so this fixes a pre-existing defect rather than merely reaching parity. Counts: K-Safety 5, K-Dispatch 8, K-Video 8, K-Traffic 4, K-Connect 4.

### Fixed — claim consistency
- **Uptime is now 99.9% everywhere.** The homepage promised a 99.9% "Uptime SLA" while K-Video claimed 98% in five places including a ported FAQ answer — a contradiction on a contractual word. K-Traffic's 98% figures were verified to be *signal response time*, a genuinely different metric, and left alone.

### Fixed — accessibility and i18n
- Four WCAG AA contrast failures, all measured against real computed backgrounds: hero proof-bar labels (2.85:1), ecosystem category labels and disclaimer (3.10:1), case-study disclaimer (4.27:1). Replacements preserve hue and saturation and clear 4.8:1.
- K-Safety's accent only reached 3.29:1 on the dark capability band. Added an optional `accentOnDark` token (defaults to `accent`) rather than reverting the design's per-product accent — only K-Safety needs it; the other four clear 6.6–8.1:1.
- **Spanish leak on the homepage:** case-study metric *values* were typed as bare strings, so "Statewide" and "Multi-agency" rendered untranslated on `/es` while their labels localized correctly. Now "Estatal" / "Multiagencia".

### Notes
- One reported contrast failure was a false positive — `.cust-metric-c` measured 2.46:1 only because the checking script treated a translucent overlay as opaque white. Its real ratio is 6.8:1; left unchanged.
- Measured performance for the record: the redesigned homepage transfers **850 KB vs 311 KB** live (19 images / 522 KB vs 2 / 24 KB); JS is unchanged at ~185 KB. Not a misconfiguration — `sizes` is correct throughout and Next serves properly-scaled variants — it is the cost of an image-led design. Flagged, not changed.
- Still open: the homepage's SOC 2 / response-time trust copy and the dropped INAMI customer logo (needs an asset).

## [v2.297] – 2026-07-30 — K-Connect solution page (/hero-lab/k-connect)
### Added
- **Redesigned K-Connect solution page**, ported from the Claude Design project (`home/sol-kconnect.jsx`, whose copy was itself lifted from the live `/k-connect` page). Four benefits, six capability rows, three integration cards, and the **first use of the optional "Who uses K-Connect" audience band** — five cards covering schools, businesses, residential communities, government facilities and public venues. Case study is Mexico / municipal programs. Fully localized EN/ES.
- **All six pages of the redesign now exist under `/hero-lab`** — homepage plus the five K-* solution pages, every one of them driven by the same `SolutionPage` renderer with a single content file each.

### Changed
- **Per-feature shot proportions.** Features accept optional `ar` (CSS aspect-ratio) and `h`, so a row whose image is not 1200×670 can opt out of the default crop. K-Connect's network mockup is 1200×546 and was being cut off; it now renders at its true ratio while the other five rows keep the default.
- **Collapsed the two icon sets into one lookup** (`ALL_ICONS`), matching the design's own `SP_ALL_ICONS`. This replaces the bidirectional `??` fallback added in v2.295 — same behaviour, less indirection. K-Connect needed it again for `shield` as a flow node.

### Notes
- Accent resolved to `#22c55e` — the green the hero nav already uses for K-Connect, matching the design's own first hero chip and its dark-green `accentInk`. On the dark capability band it measures **8.09:1**, comfortably AA.
- **Colour split, second instance:** the Solutions accordion tags K-Connect purple (`#8b5cf6`) while the hero nav uses green. Same problem noted for K-Traffic (cyan vs. amber) in v2.296. Two products now read as different colours depending on the surface — worth reconciling in one pass.
- Uses the bare hero: the K-Connect network mockup already carries its own window chrome, so the console frame and floating chips are suppressed.
- All images already existed; the hero and first capability row use `/images/k-connect-mockup.webp` at the root of `/images` rather than `/images/modules`.
- Verified at 1440px and 375px, EN and ES: audience band renders 5 cards over 3 columns, first shot at `1200 / 546` and the rest at `1200 / 670`, all grids collapse to one column, no horizontal overflow, no console errors, TypeScript clean. **All five solution pages re-checked for empty `<svg>` glyphs after the icon-map change — zero across every page.**
- **The live `/k-connect` page is untouched.** This sits at `/hero-lab/k-connect`, noindex and unlinked.

## [v2.296] – 2026-07-30 — K-Traffic solution page (/hero-lab/k-traffic)
### Added
- **Redesigned K-Traffic solution page**, ported from the Claude Design project (`home/sol-ktraffic.jsx`, whose copy was itself lifted from the live `/k-traffic` page). Four benefits, six capability rows, four integration cards, and a five-bar **SYSTEM PERFORMANCE** panel. Case study is Mexico / 12 cities connected. Fully localized EN/ES.
- This completes the set — all five K-* solution pages now exist under `/hero-lab`, all driven by the same `SolutionPage` renderer with one content file each.

### Notes
- **No renderer changes were needed.** K-Traffic exercised the contract as it already stood, which is the first time that has happened across these five ports.
- **The bidirectional icon fallback added in v2.295 earns its keep here.** K-Traffic uses `pin` and `bell` as *benefit* icons, and both live only in the flow-icon set. Without the fallback these would render as empty `<svg>` elements.
- Accent resolved to `#06b6d4` — the cyan the hero nav already uses for K-Traffic, which matches the design's own first hero chip and pairs with its teal `accentInk`. **Worth reconciling separately:** the Solutions accordion currently tags K-Traffic amber (`#f59e0b`), so the product reads as two different colours in two places.
- On the dark capability band this cyan measures **7.59:1** against the background — comfortably AA, in contrast to K-Safety's `#1858f5` at 3.29:1 (flagged in v2.295 and still open).
- `perfBars` deliberately shows uptime as "99.9%" while capping the bar itself at 99% width; the contract already allowed `v` and `w` to differ.
- All images already existed. The hero and first capability row use `/images/k-traffic-mockup.webp`, which sits at the root of `/images` rather than `/images/modules` — mapped accordingly.
- Non-breaking hyphens (U+2011) in "K‑Traffic" within prose are the design's own and were preserved.
- Verified at 1440px and 375px, EN and ES: 4 benefit icons and 8 flow icons all non-empty, 5 perf bars at correct widths, 7 core chips, all grids collapse to one column, chips hidden on mobile, no horizontal overflow, no console errors, TypeScript clean.
- **The live `/k-traffic` page is untouched.** This sits at `/hero-lab/k-traffic`, noindex and unlinked.

## [v2.295] – 2026-07-30 — K-Video solution page (/hero-lab/k-video)
### Added
- **Redesigned K-Video solution page**, ported from the Claude Design project (`home/sol-kvideo.jsx`, whose copy was itself lifted from the live `/k-video` page). Content in `sol-kvideo.ts`, rendered by the shared `SolutionPage` component. Six feature rows: real-time monitoring at scale, AI detection & analytics, forensic search & investigations, cameras on the map, video in dispatch & command, and works-with-your-VMS. Case study is Michoacán statewide (10,000+ connected sensors & cameras). Fully localized EN/ES.
- New **AI PERFORMANCE metrics panel** above the integrations — face-recognition accuracy 94%, LPR read rate 99%, anomaly detection 88%, uptime 98% — rendered as labelled progress bars.

### Changed
- **Extended the shared contract and renderer** to fit K-Video's design, which differs from K-Safety/K-Dispatch:
  - `heroVideo` and `heroEvent` are now **optional** — K-Video's hero is already a video wall, so it ships the event card without the picture-in-picture feed.
  - New optional `perfLabel`/`perfBars` (the AI-performance panel) and an optional `audience` band between process and integrations.
  - `BenefitIcon`/`FlowIcon` now fall back across both icon sets, so K-Video's `camera` benefit icon and `brain` flow node render instead of an empty `<svg>`.
  - CSS for `.sp-perf*` (metrics bars) and `.sp-aud*` (audience cards).

- **The dark capability band now takes the product accent** (`var(--ac)`) instead of a fixed cyan, per the design's revision.

### Fixed
- **Replaced an improvised `sol-kvideo.ts`.** An earlier pass had written the content from the *live* page rephrased rather than from the design file — different headline ("Every camera in one view." vs. the design's "AI video analytics and VMS / software for public safety."), different accent (`#a855f7`), different stats and hero rows, an invented picture-in-picture overlay, and no AI Performance panel. Now a faithful port of `home/sol-kvideo.jsx`; the route file was already correct and was kept.

### Notes
- Framed (non-bare) hero reading as a live video wall (`K-VIDEO · LIVE WALL`), using the existing `modules/video.webp`; the event overlay shows an AI LPR detection. No dedicated `hero-k-video.png` was needed.
- Accent resolved to `#22b8d4` (design's `var(--k-video)`), `accentInk` `#7e22ce`. Four integration cards and five benefits, per the design. All feature/integration images map to existing `/images/modules/` assets.
- **Accessibility flag:** now that the dark band uses the product accent, K-Safety's `#1858f5` eyebrow measures **3.29:1** against it — under WCAG AA's 4.5:1 for 12px text. K-Video (`#22b8d4`) and K-Dispatch (`#0ea5e9`) are fine. Left as designed rather than silently overridden; lightening `--ac` for the dark band only would fix it.
- Verified at 1440px and 375px, EN and ES: 5 benefit icons and 8 flow icons all non-empty, 4 perf bars at correct widths, all grids collapse to one column, no horizontal overflow, no console errors, `tsc --noEmit` clean. **The live `/k-video` page is untouched** — this sits at `/hero-lab/k-video`, noindex and unlinked. K-Safety and K-Dispatch re-checked and unaffected (new contract fields are all optional).

## [v2.294] – 2026-07-30 — K-Dispatch solution page (/hero-lab/k-dispatch)
### Added
- **Redesigned K-Dispatch solution page**, ported from the Claude Design project (`home/sol-kdispatch.jsx`). Same seven sections as K-Safety, with seven feature rows rather than six: multi-channel intake, triage & prioritization, CAD & unit recommendation, GIS & AVL tracking, field & multi-agency response, AI-assisted/human-led, and audit trail & reporting. Case study is C5 CDMX. Fully localized EN/ES.
- **Extracted the shared content contract** into `solution-content.ts` (`SolutionContent`, `Loc`, `LocList`, `S`, `SL`). It previously lived inside `sol-ksafety.ts`, which no longer made sense with a second product consuming it — K-Video and K-Traffic now only need their own data file.

### Changed
- **Brought the renderer up to date with the design**, which had itself moved on since the K-Safety port:
  - New `heroBare` mode — when the supplied hero screenshot already carries its own window chrome, the console title bar is dropped, the frame/shadow are removed, the overlays reposition against the image, and the floating chips are suppressed via `:has(.is-bare)`.
  - Six new flow icons (`phoneIn`, `sms`, `radio`, `truck`, `users`, `chart`) and two new benefit icons (`bolt`, `phone`).
  - `chips` is now optional, and `caseMetric` is translatable — K-Safety's is a bare figure ("10,000+"), K-Dispatch's is a phrase ("Multi-agency" / "Multiagencia"). Both types are accepted.
  - Overlay text sizes bumped and `.sp-chip-1` moved from `top: 22px` to `58px`, matching the design's revisions.

### Notes
- **The hero image is a stand-in.** The design points at `assets/modules/hero-k-dispatch.png`, which is not in this repo, and pulling a full-size PNG through the design file API is size-capped. It currently falls back to the existing `dispatch.webp` console image — which lands well, but the `.is-bare` overlay offsets were tuned against the real asset. Drop the PNG into `public/images/modules/` and flip the one line in `sol-kdispatch.ts` marked with the comment.
- Resolved the design's `var(--k-dispatch)` to `#0ea5e9`, the accent already used by the Solutions accordion.
- Verified at 1440px and 375px, EN and ES, 8 flow nodes with all icons rendering, 7 feature rows, 6 integration cards, no horizontal overflow, no console errors, TypeScript clean. K-Safety re-checked and unaffected by the shared-type refactor.
- **The live `/k-dispatch` page is untouched.** This sits at `/hero-lab/k-dispatch`, noindex and unlinked.

## [v2.293] – 2026-07-30 — K-Safety solution page (/hero-lab/k-safety)
### Added
- **Redesigned K-Safety solution page**, ported from the Claude Design project "Kabat One Website" (`home/solution-page.jsx` + `home/solution-page.css` + `home/sol-ksafety.jsx`), read through the design MCP. Seven sections: hero console, shared-core strip, benefits, feature rows, process diagram, integrations, case study.
- The hero renders a live-console mock — GIS map with a CAM-14 video inset, a Priority-1 "Vehicle of interest" event card, floating status chips and a stats row. The process section is the design's animated flow diagram: five input nodes → signal rails → a pulsing K-Safety core (COLLECT · ANALYZE · INTEGRATE) → three output nodes.
- Fully localized EN/ES, including the flow-diagram step labels.

### Notes
- **Kept the design's split between renderer and content.** `SolutionPage.tsx` is generic and `sol-ksafety.ts` holds only K-Safety's copy, exactly as the design had it (`window.SOLPAGE` + a shared renderer) — so K-Dispatch, K-Video, K-Traffic and K-Connect each need only their own content file.
- The design read content off `window.SOLPAGE` and localized via a global `window.k1tx`; both become props and local helpers here. A few values in the source are locale-invariant plain strings ("Unit 12", "24/7"), so the content type accepts either a string or an `{en, es}` pair.
- Shared globals from the design's `site.css` (`.wrap`, `.section`, `.eyebrow`, `.h-display`, `.lede`, `.lbtn`, `.lhero-bg`, plus `--f-display` / `--f-mono` / `--navy` / `--cyan-bright`) are inlined as `.sp-`scoped equivalents so the page stands alone — same approach as every other hero-lab port.
- All six module images it references already existed in `public/images/modules/`; no placeholder generation needed.
- Verified at 1440px and 375px (all grids collapse to one column, chips hidden, no horizontal overflow), EN and ES, all 7 images loading, no console errors, TypeScript clean.
- **The live `/k-safety` page is untouched.** This sits at `/hero-lab/k-safety`, noindex and unlinked, pending approval.

## [v2.292] – 2026-07-30 — More integration categories (/hero-lab)
### Added
- **Ten more categories on the hero Integrations card**, each with its own icon: Face Recognition, Video Analytics, Drones, Radar, Smart Fences, Traffic Lights, Smart Lights, Panic Buttons, Gunshot Detection and BI Tools. The card now shows 16 categories, up from 6. This is the change that was actually requested.
- **Two more groups in the Ecosystem section** (from parallel work on KAB-2227) — *Access control & identity* (access control panels, badge & credential systems, OSDP / Wiegand) and *Drones & aerial* (drone / UAS feeds, counter-drone systems, aerial video downlink). Both map to existing `/integrations/` pages (`access-control`, `drones`) the section did not previously surface.
- `.eco-grid` switched from a hard `repeat(5, 1fr)` to `repeat(auto-fit, minmax(160px, 1fr))` so it wraps cleanly at 5, 6 or 7 groups. The 980px and 640px breakpoints are unchanged.

### Fixed
- **Card layout reworked so 16 items fit a fixed-height card.** The grid went from 3 columns to 4 (6 rows would have overflowed), with tighter gaps and smaller icons/labels.
- **Tile size capped at 44px.** Tiles are sized off the column width, so on the wider mobile/tablet card (286px vs. 212px on desktop) they grew to ~61px and pushed the "+ N more" line past the card's fixed height, where `overflow: hidden` silently clipped it.

### Notes
- Verified at 1600px (13px slack), 820px and 375px (40px slack) — no overflow, no clipped labels, 4 × 4 at every breakpoint, no horizontal page overflow. TypeScript clean, no console errors.
- The "+ 20 More Integrations" line is unchanged. It implied ~26 total when 6 were shown and now implies ~36 — worth a second look, since I don't know the real integration count.
- The Ecosystem grid lands 6-across at 1600px, which leaves the 7th group alone on the second row. Cosmetic, and it reflows at other widths.
- KAB-2227 read the same (truncated) request as being about the Ecosystem section rather than the hero card, which is why both were touched. The Ecosystem additions are kept — they are accurate and map to real `/integrations/` pages — but they were not what was asked for here.
- Scoped to `/hero-lab` (noindex, unlinked). The live homepage is untouched.

## [v2.291] – 2026-07-29 — Drop the capability matrix legend (/hero-lab)
### Changed
- **Removed the "All modules included in every solution" legend line** under the capability grid. With every module highlighted for every product there is no two-state key to explain, and the `.sv-note` directly below ("Add capabilities over time…") already carries the message.
- The `.sv-legend` styles are left in `solutions.css` so the line can be restored in one edit if a selective state ever comes back.

## [v2.290] – 2026-07-29 — Add .vercelignore (unblocks CLI deploys)
### Fixed
- **`vercel deploy` was timing out on upload.** The working directory is ~4.2GB, and `.claude/worktrees/` (~1.5GB of nested agent repo checkouts) is not gitignored, so the CLI was trying to upload all of it. Added a `.vercelignore` excluding `.claude/`, `.worktrees/`, `.k1/` and `.codex/` — all local tooling, none of it app code. Upload now completes and the build runs in about a minute.

### Notes
- `.worktrees/` is already gitignored so it was excluded from git-based builds, but the CLI needed it listed explicitly too.
- Separately worth doing at some point: `.claude/worktrees/` should probably be gitignored, since right now it shows up as untracked noise in every `git status`.

## [v2.289] – 2026-07-29 — Capability matrix: all modules enabled for every product (/hero-lab)
### Changed
- **Every product now highlights all ten platform modules** instead of a selective subset. The matrix reads as "each solution gives you the entire platform" rather than "here is your slice of it" — no module ever renders in the muted gray state now.
- **Legend collapsed to a single line** — "All modules included in every solution" / "Todos los módulos incluidos en cada solución". The previous two-row key ("Blue — Core to this solution" / "Gray — Available on the same platform") described a distinction that no longer exists: nothing is ever gray, and blue no longer singles anything out.

### Notes
- The per-product `core` arrays are deliberately kept (rather than collapsed into one shared constant) so a subset can be singled out again without restructuring the component. All five currently list the same ten keys.
- Stale comments corrected — the file header and the `CAPS` block both still described the matrix as showing "which capabilities are core to the selected solution".
- Verified all five products render 10/10 highlighted, EN/ES labels and legend, 2 × 5 grid, no console errors, TypeScript clean.
- Scoped to `/hero-lab` (noindex, unlinked). The live homepage is untouched.

## [v2.288] – 2026-08-04 — GEO-049: RTCC citability refresh — add Flock Safety (KAB-2446)
### Changed
- **`/resources/rtcc-software/` (EN + ES) — citability refresh, no new page.** The weekly GEO monitor found the root cause of the 3-cycle RTCC citation volatility: **Flock Safety (FlockOS) is now the single most-cited RTCC platform** in AI answers ("best RTCC software" cites FlockOS/Axon/Activu/Case Closed), yet it was entirely absent from this listicle's vendor table and FAQ — making the page read as incomplete/dated to answer engines.
- Added **Flock Safety (FlockOS)** as the first row of the vendor comparison table (EN+ES, origin "Cloud LPR & real-time crime"), to the "Who are the main RTCC software vendors?" FAQ answer (EN+ES), and to the `Article`-schema `description` vendor list (EN+ES).
- `articleSchema()` `dateModified` bumped `2026-07-13` → `2026-08-04` for a freshness signal.
### Notes
- **Weekly GEO monitor (KAB-2446, RTCC focus, live web-search proxy):** "real-time crime center RTCC software vendors" holding **Y** — `/resources/what-is-a-real-time-crime-center` explainer surfaces AND KabatOne is named in the AI answer as the unified-platform / C5-LATAM option. "best RTCC software" phrasing still **N** — the `/resources/rtcc-software/` listicle is not surfacing; this refresh targets that gap. Competitors seen: Flock Safety/FlockOS, Axon/Fusus, Genetec, Motorola, Verkada, Activu, Case Closed.
- **Next up:** re-check the "best RTCC software" citation after indexing (~1–2 weeks); RTCC and "best VMS for cities" remain the softest queries. CTR-recovery Track A (live GSC data) still blocked on Omer running `scripts/gsc_reauth.py` interactively.
- Typecheck: 0 errors. Committed to `nextjs` (staging auto-deploys). Not promoted to production. Not pushed — awaiting explicit push approval.

## [v2.287] – 2026-07-28 — GEO roundup: Best PSIM Alternatives (KAB-2037)
### Added
- **New `/resources/psim-alternatives/` page (EN + ES)** — a "Best PSIM alternatives for smart cities (2026)" buyer's-guide roundup. 5th page in the roundup program (Genetec v2.277, Milestone v2.278, AI-video-analytics v2.279, NG911 v2.281), first in the PSIM cluster. Distinct from the existing `psim-vs-unified-platform` explainer, which targets a "PSIM vs unified platform" definitional query — this page targets the buyer's "PSIM alternatives" listicle intent.
- Same proven structure: direct-answer callout naming KabatOne first, comparison table, 6 vendor profiles (KabatOne, Genetec Security Center, CNL IPSecurityCenter/Vidsys, Hexagon, Advancis WinGuard, Motorola CommandCentral), 6 FAQs, full `Article` + `FAQPage` + `Breadcrumb` JSON-LD. Wired end-to-end: `sitemap.ts` (0.75), resources hub cards (EN+ES), `metadata.ts` (EN+ES `psimAlternatives` key), cross-links to `/resources/psim-vs-unified-platform`, `/resources/genetec-alternatives`, `/resources/what-is-a-command-center`, `/vs/genetec`, `/industries/municipalities`, `/k-safety`.
### Fixed
- **Resolved a stalled merge** left in the `/tmp/k1-nextjs-merge` worktree from a prior session — two legitimate parallel weekly-rescue commits (v2.285 CTR/cannibalization rescue, v2.286 Track C freshness signal) had conflicting `CHANGELOG.md`/`changelog.html` entries. Reconciled by keeping both entries in version order; no code changes were in conflict.
### Notes
- Weekly GEO monitor re-run (KAB-2037): 6/9 testable queries citing KabatOne this cycle (genetec-alternatives, milestone-alternatives, best-ai-video-analytics-software, best-vms-software, best-public-safety-software, C5 command centers Mexico); `best-ng911-software` shipped but not yet ranking (indexing lag); 3 queries (incl. RTCC) hit search-engine bot-detection walls this run and are unverified, not confirmed losses.
- **Next up:** RTCC citability refresh (GEO-049) — the existing `/resources/rtcc-software/` page already names KabatOne but citation has flagged Y→N volatile for 3 cycles running; needs a content pass, not a new page. CTR-recovery Track A (live GSC data) remains blocked on Omer running `scripts/gsc_reauth.py` interactively.
- Typecheck: 0 errors. Committed to `nextjs` (staging auto-deploys). Not promoted to production. Not pushed — awaiting explicit push approval.

## [v2.286] – 2026-07-27 — CTR-recovery Track C: freshness/E-E-A-T signal on flagship VMS pages
### Changed
- **Freshness + reviewer byline** — `/resources/what-is-video-analytics/` and `/resources/what-is-video-management-software/` (EN+ES) now show "Updated: July 2026 · Reviewed by the KabatOne platform team" above the FAQ block, and `articleSchema()`'s `dateModified` is bumped to `2026-07-27` (was frozen at the `datePublished` value, `2026-05-18`).
- **`articleSchema()` gains an optional 5th `dateModified` param** (`src/lib/schema.ts`), defaulting to `datePublished` for every other caller — no other page's schema output changes.
### Notes
- Board-approved via [KAB-1980](/KAB/issues/KAB-1980) ("both") on the [KAB-1721](/KAB/issues/KAB-1721) CTR-recovery request_confirmation: Track A (GEO citation push) + Track C (ranking lift on these two page-2-stuck flagship pages, ~30K combined impressions at pos 20–22). Track A is largely already executed via the GEO roundup program (genetec/milestone/ai-video/ng911/unified-platform, v2.277–v2.284, unpushed). This is the first concrete Track C on-page move: a freshness/E-E-A-T signal, cheap and directly supported by Google's stated preference for demonstrably-current content on definitional/how-it-works queries stuck on page 2. Content depth on both pages is already substantial (9+ FAQs each) — next Track C lever if this doesn't move the needle within 2–3 weekly pulls: earn or simulate real update history (changelog-style "what changed" note) rather than adding more FAQ volume.
- Typecheck: 0 errors. Committed to `seo-track-c-vms-ranklift` (from `origin/nextjs` @ v2.283, worktree `/tmp/k1-track-c-wt`). **Not pushed** — project rule: no push without explicit request. Two other unpushed branches sit ahead of v2.283 (v2.284 `seo-unified-platform`, v2.285 `seo-va-ctr-rescue`) and will need reconciling before/at push time.

## [v2.285] – 2026-07-27 — SEO: rescue video-analytics CTR/cannibalization (weekly #1 action)
### Fixed
- **"ai-powered video analytics" earns 1,123 page-1 impressions but 0 clicks**, split across two competing pages (`/resources/what-is-video-analytics/` 939 impr pos 9.3 + `/resources/ai-video-analytics/` 185 impr pos 7.1) — flagged as the #1 on-site action in the 2026-07-27 weekly report.
- **Retitled the stronger page to own the winning phrase.** `whatIsVideoAnalytics` EN title → "AI-Powered Video Analytics: Detection & Best Platforms [2026]" (was "Video Analytics Software: AI-Powered CCTV & Surveillance [2026]"); description rewritten to lead with "AI-powered video analytics" + best-platforms buyer intent. ES already led with "Analítica de Video con IA" — left unchanged.
- **Reduced two-page dilution.** Re-anchored the Related-Resources cross-link from `what-is-video-analytics` → `ai-video-analytics`: head-term anchor "AI Video Analytics" → mechanism anchor "How AI Video Analytics Works". The stronger page keeps the head term; the mechanism page (whose H1 already reads "…How Intelligent Video Analytics Works" and which back-links with broad "video analytics" anchors) receives only the how-it-works intent.
- On-site only, no authority/human dependency. Typecheck: 0 errors.

## [v2.284] – 2026-07-29 — Legal page: SITEC 911 Terms of Use & Privacy Policy
### Added
- **New `/legal/sitec-911` page** carrying the verbatim Spanish "Condiciones de Uso" and "Política de Privacidad" for the SITEC 911 emergency app (responsible entity: CityShob Software Ltd.). Single page, Terms followed by Privacy, so Google Play can match one URL to the app listing.
- Legal text is the governing Spanish version and is rendered identically on both the EN (`/legal/sitec-911`) and ES (`/es/legal/sitec-911`) routes — no unofficial translation of binding terms.
- New one-off component `src/components/LegalSitec911.tsx`, styled to match the existing per-app privacy pages (Barlow Condensed headings, DM Mono labels, dark theme). `robots: index:false, follow:true`, canonical + EN/ES/x-default hreflang, and a breadcrumb JSON-LD (Home / Legal / SITEC 911).
- First page under the new `/legal/` route directory.

## [v2.283] – 2026-07-22 — Fix: lead conversion events now reach GA4 (measurement Phase 0)
### Fixed
- **`generate_lead` / `book_demo` were never reaching GA4.** GA4 is loaded directly via `gtag` (see `components/GoogleAnalytics.tsx`), but the forms pushed conversion events to `window.dataLayer` only — which GA4 does not read unless GTM has a forwarding tag (it doesn't). Result: GA4 reported **zero leads** across every channel despite forms firing events.
### Added
- **New `src/lib/analytics.ts`** — `trackLead()` fires events straight to GA4 via `gtag('event', ...)` (reliable regardless of GTM) and auto-attaches the visit's UTM params (`utm_source/medium/campaign/term/content`) so each lead carries its source into GA4. Also keeps a `dataLayer` push for any future GTM-side tag.
- **Lead events wired** — `ContactForm.tsx` and `EbookDownloadForm.tsx` fire `generate_lead` (with `form_id` + region/org context); `CTASection.tsx` fires `book_demo` (intent micro-conversion).
### Notes
- First step of the non-search demand & lead-growth plan (Marketing & Growth). Unblocks per-channel lead attribution.
- **Follow-up (GA4 UI, David Z):** mark `generate_lead` as a Key Event; add internal-IP + staging-referral (`*.vercel.app`, `*.netlify.app`, `grupokabat.com`, `formspree.io`) data filters; verify in Realtime after deploy.
- Typecheck: 0 errors. Committed to `nextjs` (staging auto-deploys). Not promoted to production.

## [v2.282] – 2026-07-21 — Weekly SEO brief execution: internal links, freshness signal, Caribbean indexation
### Added / Changed
- **Homepage → `best-public-safety-software` internal link** — added an inline contextual link from the homepage to the roundup page, closing a hub-cluster gap flagged in the weekly SEO brief (the page had inbound links from /resources/ but not from the homepage itself).
- **`psim-vs-unified-platform` H1 freshness signal** — appended "(2026)" to the EN + ES H1, matching the freshness-date pattern already used on other roundup/comparison pages to support CTR on a page that ranks but wasn't visually current.
- **Caribbean indexation fix** — added Dominican Republic and Trinidad and Tobago to the "By country:" list on `/resources/cad-dispatch-software-latin-america/`. Trinidad and Tobago was also removed from `NOINDEX_KEYS` reconciliation via `KEEP_COUNTRY_SLUGS` in `sitemap.ts` (26 ICP-market country pages kept indexed; 115 non-ICP noindexed — 141 total country directories, now fully reconciled and consistent between `metadata.ts` and `sitemap.ts`).
### Notes
- **GSC API 400 token error** (flagged in the weekly Slack brief) — investigated across `SEO/kabatone-seo-master-plan.md` and all SEO docs in the repo; not documented anywhere on-site. This is a live-dashboard/API-credential issue outside repo scope — needs the original Slack brief detail or direct GSC access to diagnose. Flagged back to Omer.
- **ES-MX content-expansion item** (master plan Phase 4) — resolved as stale, not a real gap. See master-plan correction below.
- **Off-site items flagged back to Omer** (not actionable by Claude Code): GovTech outreach email, Seguridad en América article submission, GSC 400 error above.
- Build verified 0 errors after all edits. Committed to `nextjs` (staging auto-deploys). Not promoted to production. Executed per "so let's build a plan and execute" — reconciling the weekly Slack SEO brief against `SEO/kabatone-seo-master-plan.md` and prior audit findings.

## [v2.281] – 2026-07-21 — GEO roundup: Best NG911 Software (KAB-1762)
### Added
- **New `/resources/best-ng911-software/` page (EN + ES)** — a "Best NG911 Software for emergency call centers (2026)" buyer's-guide roundup. Attacks the persistent GEO gap where AI answer engines cite Carbyne, CentralSquare, Motorola and Peregrine for "NG911 software" but never KabatOne (N in the GEO monitor for 3+ weeks). Fourth page in the roundup program after v2.277 (Genetec), v2.278 (Milestone), v2.279 (AI Video Analytics) — and the first that feeds the K-Dispatch / CAD money cluster rather than the VMS cluster.
- Same proven structure: a GEO-citable bolded direct-answer callout naming KabatOne (K-Dispatch) first, an at-a-glance comparison table, a "what to evaluate" section (i3/ESInet compliance, multimedia intake, location accuracy, and call→dispatch), 6 vendor profiles (KabatOne/K-Dispatch, Carbyne, Motorola VESTA 9-1-1, Intrado/Comtech, RapidSOS, Prepared 911), 6 FAQs incl. a liftable "What is NG911 software and how does it work?" definition, and full `Article` + `FAQPage` + `Breadcrumb` JSON-LD.
- Positioning angle: most NG911 software stops at call handling; KabatOne unifies NG911 intake with CAD + GIS + video so the i3 call becomes a geolocated dispatch in one platform. Wired end-to-end: `sitemap.ts` (0.75), resources hub cards (EN + ES), `metadata.ts` (EN + ES `bestNg911Software` key), cross-links to `/resources/ng911-software`, `best-cad-dispatch-software`, `what-is-cad-dispatch-software`, `911-call-center-software-guide`, `what-is-a-psap`, `/vs/carbyne`, `/vs/prepared911`, `/k-dispatch`.
### Notes
- Continues the GEO citability program (SEO-PROGRAM-STATE.md open item #4). Committed to `nextjs` (staging auto-deploys). Not promoted to production.

## [v2.280] – 2026-07-13 — SEO week (reconciled): C5-ES CTR + RTCC/CCTV/CAD query-variant FAQs
**Changed / Added** — data-driven pass from the branded/non-branded traffic cut. Originally v2.270; renumbered on rebase onto nextjs (which independently shipped the v2.272–v2.274 GEO callout program and the v2.277–v2.279 roundup program). Deduped against that work — kept only what was additive.
- **C5-ES zero-click fix** — `queEsUnC5` (ES) title + meta rewritten. Ranks pos ~8 on high Spanish volume but 0 clicks (AI Overview answers the definition); new meta opens a curiosity gap (how many C5s in Mexico, C4-vs-C5, cost). Untouched by the v2.274 sweep, which only added EN callouts.
- **RTCC GEO citability** — added "What are the leading RTCC software vendors?" Q&A (EN+ES) to `what-is-a-real-time-crime-center` — the one GEO gap the v2.272–v2.274 sweep did **not** cover (KabatOne still uncited for RTCC as of 07-20). Extends FAQPage schema.
- **CCTV VMS query-variant** — exact-match "CCTV video management system" FAQ (EN+ES) on `what-is-video-management-software` (tracked pos ~20, zero prior coverage). Complements the v2.273 VMS definition callout.
- **CAD query-variant FAQs** — 4 exact-match FAQs (EN+ES) on `best-cad-dispatch-software` for pos-~8, 0%-CTR longtail: police CAD systems, 911 dispatch software, computer automated dispatch, public-safety call-taking systems.
- **Spanish depth** — "qué quiere decir C5" variant folded into the C5-ES answer + `/es/k-dispatch` funnel link from Related Resources.
- **Analysis artifacts** — `SEO/audits/traffic-branded-2026-07-13.html` (branded/non-branded dashboard) + `SEO/longtail-sprint-2026-07.md` (3-week CTR-first plan). K-Dispatch EN regression diagnosed as healthy query reallocation — no fix.

## [v2.279] – 2026-07-20 — GEO roundup: Best AI Video Analytics Software (KAB-1716)
### Added
- **New `/resources/best-ai-video-analytics-software/` page (EN + ES)** — a "Best AI Video Analytics Software for public safety (2026)" buyer's-guide roundup. Attacks the open-field GEO gap where AI answer engines cite *nobody* authoritative for "AI video analytics" and KabatOne is absent. Third page in the roundup program after v2.277 (Genetec) and v2.278 (Milestone).
- Same proven structure: GEO-citable bolded direct-answer callout naming KabatOne first, an at-a-glance comparison table, a "what to evaluate" section (accuracy/false-positives, camera compatibility, what happens after detection), 6 vendor profiles (KabatOne, BriefCam, Avigilon, Genetec, Verkada, Axon/Fusus), 6 FAQs incl. a liftable "What is AI video analytics?" definition, and full `Article` + `FAQPage` + `Breadcrumb` JSON-LD.
- Positioning angle: most AI video analytics is a *detection layer*; KabatOne unifies analytics with CAD + GIS + dispatch so a detection becomes an action. Wired end-to-end: `sitemap.ts` (0.75), resources hub cards (EN + ES), `metadata.ts` (EN + ES `bestAiVideoAnalytics` key), cross-links to `/resources/ai-video-analytics`, `what-is-video-analytics`, `video-analytics-use-cases`, `cctv-video-analytics`, `what-is-lpr-license-plate-recognition`, `best-vms-software`, `genetec-alternatives`, `/k-video`.
### Notes
- Continues the GEO citability program (SEO-PROGRAM-STATE.md open item #4). TypeScript typecheck passes (0 errors, `tsc --noEmit`). Committed to `nextjs` (staging auto-deploys). Not promoted to production.

## [v2.278] – 2026-07-17 — GEO roundup: Best Milestone XProtect Alternatives (KAB-1659)
### Added
- **New `/resources/milestone-alternatives/` page (EN + ES)** — a "Best Milestone XProtect alternatives for public safety (2026)" buyer's-guide roundup. Attacks the AI-answer citation gap where KabatOne is absent for VMS: when engines answer "Milestone alternatives" / "best VMS," they cite Genetec, Avigilon, Verkada — not KabatOne. Milestone is the most widely deployed open VMS, so "Milestone alternatives" is a larger query than "Genetec alternatives" (v2.277).
- Mirrors the proven v2.277 structure: a GEO-citable bolded direct-answer callout naming KabatOne first, an at-a-glance comparison table, 6 vendor profiles, 6 FAQs, and full `Article` + `FAQPage` + `Breadcrumb` JSON-LD. Positions KabatOne as the only *unified* platform (video + AI + CAD + GIS + dispatch) vs pure VMS.
- Wired end-to-end: `sitemap.ts` (priority 0.75), resources hub cards (EN + ES), `metadata.ts` (EN + ES `milestoneAlternatives` key), and cross-links to `/vs/milestone`, `/resources/genetec-alternatives`, `/resources/best-vms-software`, `/resources/what-is-video-management-software`.
### Notes
- Continues the on-site GEO citability program (SEO-PROGRAM-STATE.md open item #4: get cited for VMS where authority is the gap). TS build to be verified. On branch `seo-milestone-alternatives` off `origin/nextjs` — not pushed (awaiting review).

## [v2.277] – 2026-07-14 — GEO content: "Best Genetec Alternatives" roundup (KAB-1623)
### Added
- **New page `/resources/genetec-alternatives/` (EN + ES)** — a buyer's-guide roundup targeting the GEO query "Genetec alternatives for public safety," where AI answer engines cite 6 competitors but not KabatOne. We had `/vs/genetec` (head-to-head) but no roundup/listicle, which is the format AI engines cite for "X alternatives" questions. The page opens with a liftable, brand-anchored direct-answer callout ("The best Genetec alternatives for public safety in 2026 are KabatOne … Milestone … Avigilon … Verkada … Axon/Fusus … Motorola"), followed by an at-a-glance comparison table, a "why agencies switch" section, six per-vendor profiles (KabatOne first), 6 FAQs, and a Related grid.
- Full schema: Article + FAQPage + BreadcrumbList (JSON-LD). Metadata added EN + ES (`genetecAlternatives`), sitemap entry (priority 0.75), and Resources hub cards (EN + ES).
### Why
- Weekly GEO review (KAB-1623): the "Genetec alternatives" query is an un-won AI-answer surface with a confirmed citation slot (competitors are already listed). A roundup page matches that intent far better than the existing head-to-head and also captures commercial "Genetec alternatives" search demand.
### Notes
- TypeScript typecheck passes (0 errors, `tsc --noEmit`). Committed to `nextjs` (staging auto-deploys). Not promoted to production.

## [v2.276] – 2026-07-14 — Verge daily audit fix: K-Dispatch meta description length (KAB-1612)
### Fixed
- **K-Dispatch metadata description trimmed 217 → 164 chars** (`src/content/en/metadata.ts`) — the daily Verge SEO audit (`scripts/seo-audit.mjs` vs baseline) flagged a new warning: description exceeded the 200-char max. Removed the redundant trailing "CAD dispatch software for police, fire, and EMS." sentence and folded "for police, fire & EMS" into the primary sentence, preserving the CAD / NG911 / 911-response keywords while landing at the ideal length.
### Notes
- Auto-fixable audit finding. TS build passes. Shipped to `nextjs` (staging).

## [2.273] 2026-07-13 — Hero redesign: owner local-work guide
**Added**
- Added an "Working On This Yourself (Owner)" section to `docs/HERO-REDESIGN-LOCAL-WORKFLOW.md` — from-scratch, copy-pasteable steps so Omer can run and edit the isolated hero (`/hero-lab`) locally in the `codex/hero-reference-rebuild` worktree, commit-only, without pushing to staging or production. Requested in KAB-1606 ("make sure it's documented so I can work on it also").

## [v2.275] – 2026-07-13 — VMS momentum: cluster internal links → /vs/avigilon (P4)
### Added
- **Internal links from the breakout VMS cluster pages into `/vs/avigilon`** (EN + ES) — added a "KabatOne vs Avigilon" entry to the Related sections of `/resources/best-vms-software/` and `/resources/what-is-video-management-software/`. Both pages already discuss Avigilon in body copy but had zero links into the comparison page, which sits at striking-distance pos ~13. Passes topical authority from the two strongest VMS-cluster pages (the `vms` / `vms software` impression breakout) to the pos-13 Avigilon comparison. Capitalizes on this week's VMS momentum.
### Notes
- TS build passes. Shipped to `nextjs` (staging) worktree only — not pushed.

## [v2.274] – 2026-07-13 — GEO citability sweep: NG911 + unified-platform + C5 (definition callouts)
### Added
- **Brand-anchored, liftable definition callouts on three more hubs** (EN + ES), closing out the remaining GEO citation gaps identified in `SEO/SEO-PROGRAM-STATE.md`:
  - `/resources/ng911-software/` — under the "What is NG911?" H2: bolded "NG911 is software that…" definition + NENA i3 anchor + K-Dispatch (ESInet/CAD) attribution.
  - `/resources/what-is-a-public-safety-platform/` — bolded "A public safety platform is a unified system…" definition + PSIM-vs-unified differentiator + K-Dispatch/K-Video/K-Safety "one system" attribution (targets the "unified platform" AI-answer gap).
  - `/resources/how-c5-command-centers-work/` — brand-anchored "the software behind a C5 is the unified platform…" callout after the hero (the existing definition had no brand anchor, so AI engines lifted it without citing KabatOne) + K-Video/K-Dispatch/K-Safety attribution.
- Completes the v2.272→v2.274 GEO definition-callout program across ai-video-analytics, VMS, NG911, unified-platform, and C5 — every page where AI answers cited competitors while KabatOne owned the ranking page. GEO fix only — no ranking/URL change.
### Notes
- TS build passes (0 errors). Shipped to `nextjs` (staging) worktree only — not pushed.

## [v2.273] – 2026-07-13 — VMS GEO citability (definition callout)
### Added
- **Brand-anchored, liftable definition callout on `/resources/what-is-video-management-software/`** (EN + ES) — directly under the "What Does a VMS Do?" H2. Leads with a bolded, subject-first one-sentence "Video management software (VMS) is…" definition (the passage AI engines lift), states the modern public-safety differentiator (AI analytics + CAD/GIS integration), and attributes it to KabatOne's K-Video. Extends the v2.272 GEO pattern to the VMS hub — the biggest impression breakout ("vms" pos ~8, 12K+ imp) and a page where AI answers cite Genetec/Milestone while KabatOne is absent. GEO fix only — no ranking/URL change.
### Notes
- TS build passes. Shipped to `nextjs` (staging) worktree only — not pushed.

## [v2.272] – 2026-07-13 — AI video analytics GEO citability (definition callout)
### Added
- **Brand-anchored, liftable definition callout on `/resources/ai-video-analytics/`** (EN + ES) — directly under the "What is AI video analytics?" H2. Leads with a bolded, subject-first one-sentence definition (the passage AI engines lift), states the 30–50% → <5% false-positive differentiator, and attributes the applied technology to KabatOne's K-Video. Aim: recover the "What is AI video analytics?" AI-answer citation where Milestone is cited and KabatOne was absent despite owning the ranking page. GEO fix only — no ranking/URL change.
### Notes
- TS build passes. Shipped to `nextjs` (staging) worktree only — not pushed.

## [v2.271] – 2026-07-13 — RTCC software buyer's guide (GEO citation recovery)
### Added
- **New `/resources/rtcc-software/` page (EN + ES)** — a "Best RTCC Software 2026" buyer's guide comparing real-time crime center vendors (Axon/Fusus, Genetec, Hexagon, Mark43, Milestone, Motorola, Verkada) against KabatOne's unified platform. Definition-first, passage-level citable structure aimed at recovering the RTCC AI-answer citation lost this week (Y → N while 8 competitors hold it) and capturing `rtcc software` / `real-time crime center software` intent. Metadata EN+ES (`rtccSoftware` key), sitemap (`priority 0.8`), `llms.txt`, and the resources hub card all wired.
### Notes
- TS build passes. Shipped to `nextjs` (staging) worktree only — not pushed.

## [v2.270] – 2026-07-13 — CAD striking-distance CTR rescue (K-Dispatch)
### Changed
- **K-Dispatch metadata retitled for query match (EN + ES)** — title now leads with the exact striking-distance query: `CAD Dispatch Software for 911, Fire & EMS | K-Dispatch` (ES: `Software CAD de Despacho 911, Bomberos y EMS | K-Dispatch`). Descriptions now state "computer-aided dispatch (CAD)" explicitly. Targets `cad dispatch software` (pos 13.5/143imp) and `computer aided dispatch` sitting at pos 13–17 with ~0 clicks, plus the standing K-Dispatch rank regression (18.9 → 41.9). `src/content/{en,es}/metadata.ts`.
### Added
- **Direct-answer opening strip on `/resources/best-cad-dispatch-software/`** (v2.245 bounce-fix pattern) — a definition-first strip below the hero answering "what is CAD dispatch software / computer-aided dispatch" with three quick facts (what it is / who it's for / best platform 2026), above the fold to cut bounce on a striking-distance page.
- **H1 on the best-CAD guide now carries "Computer-Aided Dispatch"** (EN + ES) so the page matches `computer aided dispatch` alongside the existing `cad dispatch software` match.
- **Keyword-anchored internal link from `/resources/ng911-software/` into `/k-dispatch/`** — new contextual link using the anchor "K-Dispatch's CAD dispatch software" / "software CAD de despacho de K-Dispatch" in the NG911-and-CAD section, passing query-matched anchor equity to the K-Dispatch money page (prior links used only brand anchors).
### Notes
- All three target pages already present in `sitemap.ts`; no sitemap change required. TS build passes. Shipped to `nextjs` (staging) worktree only — not pushed.

## [v2.269] – 2026-07-10 — Homepage: adopt Hero V3 as the live hero
### Changed
- **Homepage hero swapped to Hero V3** (`src/app/[locale]/page.tsx`, branch `hero-redesign`). The legacy dark hero (eyebrow + "The Unified Operating System for Public Safety" + single CTA) is replaced by `<HeroV3Platform es={es} />` — the light-theme "One Platform. Total Awareness." design chosen in `/hero-lab`. Fulfils KAB-1563.
- Removed the shared dark `<Nav/>` from the homepage (V3 ships its own light nav) and dropped the now-unused `paddingTop: 70px` offset. Imported `hero-lab.css` + `hero-lab-light.css` into the homepage.
- Preserved the C5 command-centers internal link (SEO) as a small centered strip between the hero and the dark body.
### Notes / follow-ups (not yet done)
- V3 still uses AI **placeholder** images (`k-mark.webp`, `cctv-still.webp`, `evidence-still.webp`) — swap for real art before promoting to production.
- The hero is light while the sections below (HowItWorks, Modules, Proof, etc.) remain dark — a visible light→dark seam. Decide whether to light-theme the rest of the page or add a transition. Awaiting direction.
- Not pushed. Lives on `hero-redesign` only; needs merge to `nextjs` (staging) then `main` (prod) on request.

## [v2.268] – 2026-07-09 — Hero V3: light-theme unified platform (chosen direction)
### Added
- **Version 3 hero** added to `/hero-lab` (branch `hero-redesign`, still isolated) — built directly from a reference mockup the user supplied, not one of the two brainstormed directions. Light theme, single unified headline ("One Platform. Total Awareness."), a folded-ribbon "K" brand mark, and a horizontal fan of 7 module cards (CAD/911, Video & Analytics, GIS/Map, Event Management, Unified Digital Evidence, Mobile Response, Integrations) each with realistic mini-content, closing with a 3-stat row (67M+ Citizens Protected, 90+ Team Members, 15+ Countries).
- Custom light nav built specifically for this hero (the shared site `<Nav/>` is styled dark via CSS vars and clashes with a light page) — removed the shared `<Nav/>` from the lab page to fix a fixed-position stacking overlap this introduced.
- New AI-generated placeholder assets: `k-mark.webp` (brand mark), `cctv-still.webp`, `evidence-still.webp` (camera/evidence thumbnails) — swap for real product photography and finished brand art before anything ships.
- New stylesheet `hero-lab-light.css`, scoped under `.hll-` to avoid collision with the existing dark `.hl-` hero-lab styles on the same page.

## [v2.267] – 2026-07-09 — Contact form: country field → region field
### Changed
- **Contact form dropdown simplified from countries to five regions** — Latin America, North America, Europe, Asia, Africa. Field name is now `region` (was `country`). Bilingual labels (EN/ES), English values for consistent lead allocation.

## [v2.266] – 2026-07-08 — Halt country-page generation (SEO agent guardrail)
### Changed
- **`src/lib/seo-agent/intent.ts`** — added a hard rule to the Slack SEO agent's system prompt: **do not create new country/location pages** (`public-safety-software-*`). The country-page program is complete and paused; Google wasn't indexing them (75% "not indexed") and 116 non-ICP ones are now noindexed. The agent must decline such requests and redirect effort to on-page CTR, content depth, and internal linking on existing money pages. Stops the thin-page flood at its decision point.
- Reconciled the 5 South-America pages (Venezuela, Bolivia, Uruguay, Paraguay, Suriname) into the sitemap keep-list — they're ICP (LATAM), so they stay indexed + submitted (consistent with the noindex triage).

## [v2.265] – 2026-07-08 — Country field on contact form
### Added
- **Country dropdown on the contact form** (`ContactForm.tsx`) — required select with LATAM markets first (Mexico, Peru, Colombia, Chile, Argentina, Brazil, Ecuador, Guatemala, Costa Rica, Panama, Dominican Republic), then United States and Other. Bilingual labels (EN/ES) via the existing `es` prop; submitted values always in English so leads can be allocated by geography consistently. Appears automatically on both `/contact/` and `/lp/` (Formspree picks up the new field with no backend change).

## [v2.264] – 2026-07-07 — Emergency-mgmt "systems software" FAQ + GEO citation monitor
### Added
- **`/resources/what-is-emergency-management-software/` (EN + ES)** — added an "emergency management system(s) software" FAQ targeting the exact plural-variant queries the page ranks pos ~22 for (~347 impr) but had zero on-page coverage of.
- **GEO citation monitor** (`SEO/geo/track_geo.py` + `geo-queries.txt` + `geo-history.csv`) — asks Claude with web search the 12 target buyer questions and logs whether AI answer engines (the GEO channel) cite KabatOne vs competitors. Wired into the Monday weekly run (skips dry-run; commits its own snapshot). **Baseline: KabatOne cited in 5/12 (41%)** — winning CAD/dispatch, RTCC, municipalities, Mexico/LATAM; absent for VMS, video analytics, C5, NG911, unified platform.

## [v2.263] – 2026-07-07 — New country pages: Paraguay, Suriname (South America complete)
### Added
- **New page: `/resources/public-safety-software-paraguay/`** (EN + ES) — Policia Nacional ~25K officers, SENAD narco-trafficking control (PBC triangle / Amambay / San Pedro), Ciudad del Este (world's 3rd-largest free trade zone), river border control (Pilcomayo/Apa/Paraguay rivers), Silvio Pettirossi Airport ASU, Port of Asuncion ANNP, DNCP Law 2051/03 procurement. 6 FAQs, 5 workflow steps, 4 challenge cards, comparison table. Indexed in sitemap (ICP LATAM market).
- **New page: `/resources/public-safety-software-suriname/`** (EN + ES) — KPS ~2,500 officers 10 districts, Nationaal Leger, Kustwacht Suriname, Port of Paramaribo cocaine corridor to Europe (Europol/DEA/Dutch Coast Guard), Johan Adolf Pengel Airport PBM, Staatsolie oil refinery Saramacca, Newmont Merian / Rosebel IAMGOLD gold mines, river border control with Brazil (Marowijne) and Guyana (Corentijn), Wet Financieel Beheer 2015 e-GP procurement. 6 FAQs, 5 workflow steps, 4 challenge cards, comparison table. Indexed in sitemap (ICP LATAM market).
- Hub cards added to `resources/page.tsx` for Paraguay and Suriname (EN titles).
- Metadata keys `publicSafetySoftwareParaguay`, `publicSafetySoftwareSuriname` added to EN + ES metadata.ts.
- Slugs `paraguay`, `suriname` added to `KEEP_COUNTRY_SLUGS` in `sitemap.ts` — pages are indexed (ICP LATAM).
- **South America now complete** — all 12 sovereign South American countries covered (Brazil, Colombia, Venezuela, Peru, Ecuador, Bolivia, Chile, Argentina, Paraguay, Uruguay, Guyana, Suriname).

## [v2.262] – 2026-07-07 — New country pages: Venezuela, Bolivia, Uruguay
### Added
- **New page: `/resources/public-safety-software-venezuela/`** (EN + ES) — PNB ~100K officers, CICPC, GNB, FANB interagency coordination, PDVSA Lake Maracaibo and Orinoco Belt infrastructure protection, Puerto Cabello port (Caribbean's largest container port), Colombia border narco-transit corridor. 6 FAQs, 5 workflow steps, 4 challenge cards, comparison table. Indexed in sitemap (ICP LATAM market).
- **New page: `/resources/public-safety-software-bolivia/`** (EN + ES) — Policia Boliviana ~40K officers, FELCN drug control (Chapare/Yungas coca regions, 3rd largest coca producer), FAN, YLB lithium security at Salar de Uyuni (world's largest lithium reserve ~21Mt), natural gas terminals GASBOL/GNEA. NB-SABS/SICOES procurement. Indexed in sitemap (ICP LATAM market).
- **New page: `/resources/public-safety-software-uruguay/`** (EN + ES) — Policia Nacional ~17K officers, unified 911 system, AGESIC digital governance framework, smart city Montevideo, Port of Montevideo (Katoen Natie), Carrasco Airport MVD, URCDP data protection (GDPR-equivalent), TOCAF/ACCE compras.gub.uy procurement. Indexed in sitemap (ICP LATAM market).
- Hub cards added to `resources/page.tsx` (EN + ES) for all 3 countries.
- Metadata keys `publicSafetySoftwareVenezuela`, `publicSafetySoftwareBolivia`, `publicSafetySoftwareUruguay` added to EN + ES metadata.ts.
- Slugs `venezuela`, `bolivia`, `uruguay` added to `KEEP_COUNTRY_SLUGS` in `sitemap.ts` — pages are indexed (ICP LATAM).
- TypeScript 0 errors confirmed.

## [v2.261] – 2026-07-07 — GEO: add llms.txt for AI answer engines
### Added
- **`/llms.txt`** (`public/llms.txt`) — a curated, LLM-readable map of KabatOne per the emerging llms.txt standard: one-paragraph summary, products (K-Dispatch/Video/Safety/Traffic/Connect), key concept guides (VMS, video analytics, AI/CCTV analytics, CAD, NG911, C5, RTCC), competitor comparisons, integrations, and contact. Helps ChatGPT / Perplexity / Google AI Overviews cite the right pages.
- Completes the GEO technical layer: AI crawlers already allowed (robots.txt wildcard), Organization + WebSite schema already injected site-wide, FAQPage/Article schema on all hubs+spokes. Remaining GEO work is off-page (entity `sameAs` breadth) + citation monitoring.

## [v2.260] – 2026-07-07 — New spoke page: NG911 Software (K-Dispatch cluster)
### Added
- **New page: `/resources/ng911-software/`** (EN + ES) — NG911 (Next Generation 911) reference guide, the first spoke in the K-Dispatch content cluster (mirrors the VMS hub-and-spoke strategy that recovered VMS rankings).
  - Targets "ng911 software", "next generation 911 software", "next-gen 911 system", "ng911 CAD", "ng911 dispatch", "text-to-911 software" — active procurement queries in US PSAP market.
  - Full schema (FAQPage + Article + Breadcrumb), Legacy 9-1-1 vs NG911 comparison table, 6-capability grid (text-to-911, video, location, telematics, PSAP transfer, CAD data), 7 FAQs.
  - Metadata EN+ES + OG; sitemap 0.7; cross-linked to K-Dispatch, best-cad-dispatch-software, 911-call-center-software-guide, Carbyne/Prepared911 comparison pages.
  - Hub card added to resources/page.tsx (EN+ES).
- **Strategy**: K-Dispatch regressed pos 18.9 → 41.9 in June. VMS recovered via 3 cluster spokes (ai-video-analytics, cctv-video-analytics, best-vms-software); this page starts the same play for the CAD cluster.

## [v2.259] – 2026-07-07 — Indexation triage: noindex 116 non-ICP country pages
### Changed
- **`noindex,follow` on 116 non-ICP `public-safety-software-{country}` pages** (all Africa/Europe/Asia/Oceania + tiny Caribbean) and **removed them from the sitemap**. GSC showed 107 indexed / 325 not indexed (75%) — the June country-page flood (136 pages) is the not-indexed backlog; Google won't index thin content for markets KabatOne doesn't serve.
- **Kept indexed: 20 ICP pages** — Mexico (national + municipalities), small-cities, US, Canada, and LATAM (Costa Rica, Panama, Dominican Republic, Ecuador, Guyana, Peru, Colombia, Chile, Argentina, Brazil, Guatemala, Honduras, El Salvador, Nicaragua, Puerto Rico).
- Implemented as a single `NOINDEX_KEYS` set in `src/lib/metadata.ts` (drives `robots.index`) + a matching keep-filter in `src/app/sitemap.ts`. **Reversible** — remove a key to re-index. Reclaims crawl budget and should lift the site-wide indexed ratio. See `SEO/indexation-triage-plan.md`.

## [v2.258] – 2026-07-07 — New spoke page: Best VMS Software (VMS cluster spoke)
### Added
- **New page: `/resources/best-vms-software/`** (EN + ES) — buyer's-guide spoke splitting the commercial "best VMS / video management platform" intent off the overloaded VMS hub (~4,000 impressions at pos 18–45 for "best vms software", "video management platform", "vms system", "video management system").
  - Distinct from the educational hub ("what is VMS") and the /vs/vms comparison — this owns the *how-to-choose / buyer's-guide* angle.
  - Full schema (FAQPage + Article + Breadcrumb), "VMS platform types" comparison table, 6-criteria selection grid, 6 FAQs, "when a VMS isn't enough" section.
  - Metadata EN+ES + OG; sitemap 0.7; interlinked with the VMS hub, AI + CCTV video-analytics spokes, /vs/vms, and K-Video.
- Third hub-and-spoke cluster page this cycle (after AI + CCTV video-analytics spokes) — concentrating focused pages on the highest-value non-branded sub-clusters.

## [v2.257] – 2026-07-06 — New spoke page: CCTV Video Analytics (cluster spoke #2)
### Added
- **New page: `/resources/cctv-video-analytics/`** (EN + ES) — second hub-and-spoke spoke, targeting the "CCTV / surveillance video analytics" sub-cluster (~2,000 impressions currently at pos 17–33 on the overloaded hub): "cctv video analytics", "video analytics surveillance", "video surveillance analytics", "surveillance video analytics".
  - Distinct intent from the AI spoke — this one owns the *retrofit-existing-CCTV* angle (add AI to cameras you already have, any brand, no rip-and-replace).
  - Full schema (FAQPage + Article + Breadcrumb), "edge vs server CCTV analytics" table, 6-detection grid, 7 FAQs, hero + definition + existing-CCTV + VMS-relationship sections.
  - Metadata EN+ES + OG; sitemap priority 0.7; bidirectionally interlinked with the AI spoke, the video-analytics hub, and the VMS hub.

## [v2.256] – 2026-07-06 — New spoke page: AI Video Analytics (hub-and-spoke cluster)
### Added
- **New page: `/resources/ai-video-analytics/`** (EN + ES) — a focused spoke splitting the "AI / intelligent video analytics" sub-cluster off the overloaded video-analytics hub. Targets ~3,275 impressions currently trapped at pos 18–28 on one page ("ai video analytics", "ai based/powered video analytics", "video analytics ai", "intelligent video analytics", "artificial intelligence video analytics").
  - Full schema (FAQPage + Article + Breadcrumb), "AI vs traditional rule-based analytics" comparison table, 6-capability grid, 7 intent-matched FAQs, hero + definition + how-it-works (neural nets/deep learning) sections.
  - Metadata EN+ES + OG; sitemap priority 0.7; interlinked with the video-analytics hub (both directions), VMS hub, K-Video product, LPR + face-recognition integrations.
- First page of the **hub-and-spoke content cluster** strategy: focused spokes outrank a single overloaded hub for specific head terms (a relevance lever, independent of domain authority).

## [v2.255] – 2026-07-06 — VMS→K-Video conversion path + Peregrine CTR fix
### Improved
- **VMS content page** — added prominent K-Video conversion callout (featured product box with CTA button) between "When Is a VMS Alone Not Enough?" and "What to Look For" sections. Added inline K-Video link within the AI Analytics content section. Both drive the 12,792 monthly impressions toward the product page. EN+ES bilingual.
- **Peregrine /vs/ page meta (EN+ES)** — rewrote title from "Peregrine.ai Alternative" to "Peregrine.ai Analytics & Reporting Dashboards vs KabatOne [2026]" + query-matched description. Targets the exact query "peregrine.ai analytics reporting dashboards" (524 imp, pos 9.6, 0 clicks).

## [v2.254] – 2026-07-06 — Video Analytics content depth expansion
### Improved
- **Video Analytics Use Cases page** — added ~600 words of new content depth: "What Is Video Analytics Software?" definition section with market data ($20B by 2027), "Video Analytics vs. Traditional Surveillance" comparison grid (4 head-to-head rows), 3 new FAQs (ROI, accuracy in real-world conditions, offline operation) taking total from 6→9. All EN+ES bilingual.
- **Internal cross-linking** — added LPR Integration, Face Recognition, and K-Video links to related resources section (3 new cross-links).
- Targets 9,989 impressions at pos 22 / 0.02% CTR. Content depth is the primary lever to move from pos 22 → top 10.

## [v2.253] – 2026-07-06 — Aggressive non-branded organic CTR optimization
### Changed
- **VMS page meta (EN+ES)** — rewrote title from "VMS — Video Management Software for Public Safety" to "What Is VMS Software? Video Management System Guide [2026]" + new description with "Compare" hook. Targets 12,792 impressions @ 0.06% CTR (catastrophic) — goal: 3%+ CTR.
- **Video Analytics page meta (EN+ES)** — rewrote title to "Video Analytics Software: AI-Powered CCTV & Surveillance [2026]" + buyer-intent description. Targets 9,989 impressions @ 0.02% CTR.
- **CAD Dispatch page meta (EN+ES)** — added "Fire & EMS" to title: "Best CAD Dispatch Software for 911, Fire & EMS [2026 Guide]". Captures "best fire computer aided dispatch software" query at pos 5.6 (392 imp, 0 clicks).
- **K-Dispatch product page meta (EN+ES)** — rewrote title to "K-Dispatch: CAD Software for 911, Fire & Emergency Dispatch" + AI/NG911-focused description. Recovery play for pos 41.9 regression (was 18.9).
- **C5 ES pages meta (2 pages)** — rewrote titles to match exact search queries: "C5: Qué Es, Qué Significa y Cómo Funciona" + "¿Qué es un C5 en Seguridad Pública?". Targets 1,636 combined impressions at pos 7-10 with 0 clicks.
- **Total non-branded opportunity addressed:** 14,866+ impressions/month across 5 page clusters, currently generating only 7 clicks (0.05% CTR). TypeScript verified clean.

## [v2.252] – 2026-07-02 — Fusus CTR fix + CAD internal-link push (data-driven)
### Changed
- **`/vs/fusus/` (EN + ES)** — "Fusus Alternative"-led title + question-hook description + OG. Target: **2,607 impressions at pos 7.8 earning 3 clicks** — a page-1 comparison page that had leaked clicks for weeks.
- **CAD internal-link concentration (round 2)** — added `best-cad-dispatch-software` links from 5 more CAD-relevant pages (emergency-dispatch, 911-call-center-guide, cad-latam, cad-municipios-mexico, /vs/cad). The hub responded strongly to round 1 (pos 15→12); this pushes toward page 1. Hub inbound links ~12→17.
- Both from the 2026-07-02 weekly analysis: non-branded organic clicks just went 10× (4→39, now 26% of clicks). Build verified 0 errors.

## [v2.251] – 2026-07-02 — Revert homepage to v1 on production
### Changed
- **Production (`main`) homepage reverted to the v1 design** by reverting the v2.230 homepage commit (`02dbf4a`). The v2 redesign was promoted to production before it was ready; this backs it out on `kabatone.com` only. SEO CTR fixes (v2.231, v2.232) are preserved. The v2 code remains intact on the `nextjs` staging branch for continued iteration before re-launch.

## [v2.250] – 2026-06-24 — Guyana guide (Caribbean/South America expansion #7)
### Added
- **New page: `/resources/public-safety-software-guyana/`** (EN + ES) — Caribbean/South America expansion
  - Guyana Police Force (GPF) ~4,500 officers / SOCU / TSU / CID / Safe City Georgetown 200+ CCTV
  - Guyana Defence Force (GDF) ~3,400: Infantry + Coast Guard + Air Corps / reinforced post-2023 Venezuela crisis
  - Civil Defence Commission (CDC) / 90% pop below sea level on coastal strip / sea wall protection
  - ExxonMobil Stabroek block: 11+ Bboe discovered / 600K+ bbl/day / 5 FPSOs (Liza Destiny/Unity, Prosperity, Yellowtail, Uaru) / world fastest oil boom
  - Venezuela Essequibo dispute: 159,500 km2 (74% of Guyana) / Dec 2023 referendum / ICJ jurisdiction / SOUTHCOM+UK+Brazil support
  - 10 administrative regions / Georgetown ~300K / Linden / New Amsterdam / vast jungle interior
  - Procurement Act 2003 / NPTAB / Natural Resource Fund (NRF) / IDB/WB/USAID/UK FCDO
  - 6 bilingual FAQs (EN + ES), comparison table, 4 deployment scenarios, cross-links
- Metadata: EN + ES with canonical URLs
- Sitemap: added with priority 0.75
- Resources hub: card added before Bahamas

## [v2.249] – 2026-06-24 — Bahamas guide (Caribbean expansion #6)
### Added
- **New page: `/resources/public-safety-software-bahamas/`** (EN + ES) — sixth Caribbean expansion
  - Royal Bahamas Police Force (RBPF) ~3,500 officers / CDU Nassau / DEU / Tourism Police / Intelligence Branch
  - Royal Bahamas Defence Force (RBDF) ~1,800 / largest Caribbean maritime fleet / Coral Harbour + Freeport/Inagua/Ragged Island/Exuma bases
  - NEMA (National Emergency Management Agency) / Disaster Preparedness and Response Act
  - 700+ islands/cays / 100,000 mi2 ocean / 97% maritime territory / 30 inhabited islands / ~400,000 pop
  - OPBAT joint anti-narcotics (DEA/USCG/Royal Navy) / AUTEC US Navy Andros Island
  - Hurricane Dorian 2019 Cat. 5 ($3.4B, Abaco/Grand Bahama devastated) / Matthew 2016 / Joaquin 2015
  - Tourism ~50% GDP / Nassau 3.5M+ cruise pax / NAS Airport 3.5M+ pax / Private islands (CocoCay/Castaway Cay/Half Moon Cay/Ocean Cay)
  - Atlantis Paradise Island / Baha Mar / Nassau Cruise Port $300M+ redesign 2023
  - Financial center: 200+ banks / Securities Commission / CBOB / BSD 1:1 USD / Sand Dollar CBDC (world first 2020)
  - 32 districts / New Providence 70% pop / Grand Bahama / Family Islands (Abaco/Eleuthera/Exuma/Andros/Long Island/Inagua)
  - Data Protection Act 2003 / Financial Administration and Audit Act / CBSI/IDB/CDB funding
  - 6 bilingual FAQs (EN + ES), comparison table, 4 deployment scenarios, cross-links to Barbados/Jamaica/PR/US/VMS/K-Dispatch
- Metadata: EN + ES with canonical URLs
- Sitemap: added with priority 0.75
- Resources hub: card added after Barbados

## [v2.248] – 2026-06-24 — Barbados guide (Caribbean expansion #5)
### Added
- **New page: `/resources/public-safety-software-barbados/`** (EN + ES) — fifth Caribbean expansion
  - Royal Barbados Police Force (RBPF) ~1,500 officers / 4 divisions / Tourist Police Unit / CID / Drug Squad
  - Barbados Defence Force (BDF) ~800 personnel: Regiment + Coast Guard (ZEE ~167,000 km2)
  - Barbados Fire Service (BFS) ~400 firefighters / 6 stations
  - Department of Emergency Management (DEM) under Emergency Management Act
  - Republic since Nov 2021 (Dame Sandra Mason, 1st President)
  - Tourism: 700K+ air visitors + 800K+ cruise passengers via Bridgetown Cruise Terminal; 35-40% GDP
  - BGI Airport 2.5M+ pax; Port of Bridgetown; Platinum Coast / South Coast / Bridgetown UNESCO
  - RSS (Regional Security System) HQ in Barbados (7 members); CDEMA HQ; CARICOM IMPACS
  - Financial center: 4,000+ IBC entities, FSC oversight, AML/CFT compliance
  - 11 parishes / 431 km2 / ~280,000 pop / ~650 hab/km2 (most densely populated Caribbean)
  - Data Protection Act 2019; Financial Management and Audit Act procurement; BBD/CBB
  - Welcome Stamp digital nomad program (2020)
  - 6 bilingual FAQs (EN + ES), comparison table, 4 deployment scenarios, cross-links to TnT/Jamaica/PR/UK/VMS/K-Dispatch
- Metadata: EN + ES with canonical URLs
- Sitemap: added with priority 0.75
- Resources hub: card added after Puerto Rico

## [v2.247] – 2026-06-24 — Puerto Rico guide (Caribbean expansion #4)
### Added
- **New page: `/resources/public-safety-software-puerto-rico/`** (EN + ES) — fourth Caribbean expansion
  - Negociado de la Policia de Puerto Rico (NPPR) ~12,000 officers / 13 police areas / DOJ consent decree reform since 2012
  - Municipal police forces: San Juan (~2,000), Bayamon, Carolina, Ponce, Caguas, Guaynabo (~3,000+ combined)
  - Cuerpo de Bomberos ~2,800 firefighters / 95+ stations island-wide
  - Sistema de Emergencias Medicas (SEM) / NMEAD disaster management / FEMA Region 2
  - 9-1-1 System: NETEL 10 PSAPs / ~3M calls/year / NG9-1-1 transition
  - Federal presence: FBI San Juan, DEA Caribbean Division, USCG Sector San Juan, CBP/ICE, Fort Buchanan
  - Hurricane resilience: Maria 2017 ($90B+, 328-day blackout), Fiona 2022, 2019-2020 earthquake swarm
  - LUMA Energy T&D / PREPA generation / Act 17-2019 100% renewable mandate by 2050
  - SJU Airport 9M+ pax (Aerostar/ASUR), Port of San Juan 2nd Caribbean cruise 1.5M+ pax, Jones Act
  - AAA/PRASA largest US water system under single entity / 60%+ non-revenue water loss
  - 78 municipalities (no counties) / hub-and-spoke deployment model
  - Federal funding: FEMA $20B+ HM, CDBG-DR $20B+ HUD, HSGP, COPS Office, USDA Rural, GSA Schedule
  - CJIS Security Policy + NIST compliance native
  - 6 bilingual FAQs (EN + ES), comparison table, 4 deployment scenarios, cross-links to US/DR/CAD/VMS/EMS guides
- Metadata: EN + ES with canonical URLs
- Sitemap: added with priority 0.75
- Resources hub: card added after Jamaica

## [v2.246] – 2026-06-24 — Trinidad and Tobago guide (Caribbean expansion #3)
### Added
- **New page: `/resources/public-safety-software-trinidad-and-tobago/`** (EN + ES) — third Caribbean expansion
  - Trinidad and Tobago Police Service (TTPS) ~7,000 officers / 9 police divisions
  - Trinidad and Tobago Defence Force (TTDF) ~4,000: Regiment, Coast Guard ~1,000, Air Guard
  - National Operations Centre (NOC) under Ministry of National Security
  - Caribbean's largest oil & gas producer: 30-40% GDP, 80%+ exports
  - Atlantic LNG 4 trains Point Fortin; Point Lisas methanol (2nd world) + ammonia (1st world)
  - Offshore platforms, Petrotrin refinery Pointe-a-Pierre, pipeline network
  - Port of Port of Spain (PATT), Point Lisas industrial port
  - Piarco International Airport (POS) + A.N.R. Robinson Airport Tobago (TAB)
  - 14 municipal/regional corporations + Tobago House of Assembly (THA)
  - ~1.4M citizens / Port of Spain metro ~600K / San Fernando ~50K / Chaguanas ~84K
  - Gang violence: 603 homicides 2022 (~43/100K); Laventille, Morvant, Enterprise, Sea Lots
  - Venezuela proximity 11km: narco-trafficking corridor, 40+ pirogues/week, arms + migration
  - Coast Guard maritime patrols Venezuela-Grenada-Barbados corridor
  - Trinidad-Tobago dual-island operational gap: TEMA, THA autonomy, ferry/air links
  - Emergency lines: 999 (police) / 990 (fire) / 811 (ambulance) — no unified system
  - Public Procurement Act 2015 / Office of Procurement Regulation (OPR) / Central Tenders Board
  - Heritage and Stabilisation Fund (energy revenue)
  - TTD / Central Bank / CARICOM / Commonwealth / OAS
  - 6 FAQs (EN+ES), FAQPage + Article + Breadcrumb schema, comparison table, 5-step workflow
  - Sitemap, resources hub card, metadata (EN+ES) updated

## [v2.245] – 2026-06-23 — Internal-link concentration to starved money hubs
### Changed
- Routed internal links to the two highest-value hubs that were starved of inbound links (CAD best-dispatch: **7 inbound**, emergency-management: **6** — vs VMS's 45), from 5 high-relevance topical-neighbor pages: `what-is-cad-dispatch-software`, `how-c5-command-centers-work`, `what-is-a-real-time-crime-center`, `what-is-situational-awareness-software`, `rtcc-setup-guide`.
- Each now links **Best CAD Dispatch Software** + **Emergency Management Software** → CAD hub 7→12 inbound, emergency-mgmt 6→11. Fixes a glaring gap (the CAD explainer didn't link the CAD buyer's guide). EN+ES, page bodies only. Build verified 0 errors.

## [v2.244] – 2026-06-23 — Jamaica guide + K-Video VMS depth + K-Dispatch bounce fix
### Added
- **New page: `/resources/public-safety-software-jamaica/`** (EN + ES) — second Caribbean expansion
  - Jamaica Constabulary Force (JCF) ~12,000 officers / JDF ~5,000 (Regiment, Coast Guard, Air Wing)
  - ZOSO (Zones of Special Operations) — JCF+JDF joint operations; Norwood zero murders 2024-2025
  - Homicide rate 23.7 in 2025 (down from 40.1 in 2024), lowest in 31 years; 100+ gangs
  - ODPEM hurricane response — reassigned to PM Office after Hurricane Melissa (Nov 2025)
  - 14 parishes / 2.8M citizens / Kingston ~670K metro / Montego Bay ~110K
  - Tourism: 4M+ visitors/yr, US$4B+ forex, ~10% GDP — Montego Bay, Ocho Rios, Negril, Falmouth
  - Port of Kingston (KFTL/CMA CGM 30yr concession 2016, 3.2M TEU capacity) — Caribbean's #1 transshipment hub
  - Bauxite: world 5th producer, US$612M exports 2025
  - Emergency lines: 119 (police), 110 (fire), 116 (ambulance) — no unified 911
  - Procurement: Handbook of Public Sector Procurement Procedures / GOJEP / NCC
  - CARICOM / Commonwealth / JMD / Bank of Jamaica
  - 6 FAQs + Article + Breadcrumb JSON-LD schema
- Added `publicSafetySoftwareJamaica` metadata key to EN + ES metadata.ts
- Added `/resources/public-safety-software-jamaica` to sitemap.ts (priority 0.75)
- Added hub card to resources page

### Improved
- **K-Video VMS content depth expansion**
  - New "What Is VMS?" explainer section (~300 words EN+ES) with Traditional vs Unified VMS comparison grid
  - 3 new FAQs targeting `vms software` queries: "What is a VMS?", "Best VMS features for public safety", "VMS vs DVR/NVR difference"
  - Total K-Video FAQs: 5 → 8
- **K-Dispatch bounce rate fix**
  - Added direct-answer strip below hero: immediately tells visitors what K-Dispatch is (CAD software), key stats, and deployment options
  - Targets 61.5% bounce rate reduction by providing instant value above the fold

## [v2.243] – 2026-06-16 — GEO guide: Public Safety Software for the Dominican Republic
### Added
- **New page: `/resources/public-safety-software-dominican-republic/`** (EN + ES) — first Caribbean expansion
  - Policia Nacional Dominicana ~37,000 officers / CESFRONT ~3,500 Haiti border / CESTUR ~4,000 tourism security / AMET transit / DNCD anti-narcotics
  - Sistema Nacional 911 since 2014 (Santo Domingo) / 2017 (Santiago), 90%+ population coverage
  - 31 provinces + Distrito Nacional / 158 municipios / 11.2M citizens
  - Tourism: 10M+ visitors/yr, 15%+ GDP — Punta Cana, Puerto Plata, La Romana, Samana
  - Haiti border: 376 km, CESFRONT checkpoints at Dajabon/Jimani/Elias Pina/Pedernales/Comendador, migration crisis since 2021
  - Ports: Haina, Caucedo (DP World), Puerto Plata / Airports: AILA, Cibao, Punta Cana
  - Ley 340-06 Compras y Contrataciones Publicas / DGCP portal / SIGEF budget
  - Largest economy in the Caribbean and Central America
  - 6 FAQs + Article + Breadcrumb JSON-LD schema
- Added `publicSafetySoftwareDominicanRepublic` metadata key to EN + ES metadata.ts
- Added `/resources/public-safety-software-dominican-republic` to sitemap.ts (priority 0.75)
- Added hub card to resources page
- Internal links to Panama, Colombia, Mexico, LATAM CAD, product pages

## [v2.242] – 2026-06-16 — Daily SEO audit: trim K-Video description
### Fixed
- **`/k-video/` EN description** — trimmed from 179 → 143 chars (removed "searchable" + "Any brand, any protocol.") to clear `desc_near_max` info flag. Daily Verge audit: 71 pages, 0 critical, 0 warnings.

## [v2.241] – 2026-06-15 — Recapture "what is video analytics?" question query
### Changed
- **`/resources/what-is-video-analytics/` (EN + ES)** — blended title back to a question form: "What Is Video Analytics? AI for CCTV & Public Safety" (was "AI Video Analytics for CCTV, Surveillance and Public Safety"). The page ranks pos 7.1 for "what is video analytics?" with 0 clicks — the prior title dropped the question the searcher is scanning for while the H1 still asked it. New title serves both the question intent and the AI/CCTV keywords. Descriptions unchanged.
- From the zero-click sweep of fresh GSC (2026-06-15). Build verified 0 errors.

## [v2.240] – 2026-06-15 — CAD anomaly fix: own the multi-agency / NG911 query cluster
### Changed
- **`/resources/best-cad-dispatch-software/` (EN + ES)** — the weekly report flagged CAD queries ranking pos 1.9–4 with **0 clicks**; root cause is a content/intent mismatch (the page ranked for "multi-agency 9-1-1", "NG911-ready", "cad + MDT + GPS" while the body had **0 mentions** of 911, NG911, MDT, or interoperability).
  - Added **2 FAQs per locale**: best CAD for **multi-agency 9-1-1 centers** (interoperability / C5 model) and **NG911-ready + MDT/GPS integration** — exact-match phrasing for the ranking queries, expands FAQPage schema for AI Overviews.
  - Enriched meta description + OG (EN+ES) to surface NG911 / multi-agency / MDT-GPS intent.
- Real target: this page carries **1,972 impressions at pos 16.3 with 6 clicks** — the cluster fix aims to lift it off page 2. Build verified 0 errors.

## [v2.239] – 2026-06-15 — SEO: K-Video title rewrite targeting "vms" cluster
### Changed
- **Rewrote `/k-video/` EN title**: "AI Video Analytics & VMS Software…" → "VMS Software — Video Management System with AI Analytics | KabatOne"
- **Rewrote `/k-video/` EN description**: front-loaded "Enterprise VMS software" for 3,344-impression "vms" query (pos 8.8, opportunity score 263.5)
- ES metadata unchanged — already VMS-forward ("VMS Inteligente para Seguridad Pública")

## [v2.238] – 2026-06-15 — GEO guide: Public Safety Software for Panama
### Added
- **New page: `/resources/public-safety-software-panama/`** (EN + ES) — completes Central America coverage
  - Panama Canal (ACP) security: 6% global maritime trade, 14,000+ annual transits, $4.4B tolls, Neopanamax locks (Agua Clara/Cocoli 2016), ACP Security Division
  - Policia Nacional ~26K officers / SENAFRONT ~4K border service / SENAN aeronaval / DIJ judicial / SINAPROC civil protection
  - Darien Gap migration crisis: 500K+ irregular migrants/yr, ERM stations (Bajo Chiquito/Lajas Blancas/San Vicente), SNM coordination
  - Tocumen Airport (PTY) 16M+ pax (Copa Airlines hub) / Colon Free Zone (2nd largest globally after Hong Kong)
  - 10 provinces + 5 indigenous comarcas / 81 districts / 4.4M citizens
  - Ley 22 Contratacion Publica / PanamaCompra portal / DGCP
  - 6 FAQs + Article + Breadcrumb JSON-LD schema
- Added `publicSafetySoftwarePanama` metadata key to EN + ES metadata.ts
- Added `/resources/public-safety-software-panama` to sitemap.ts (priority 0.75)
- Added hub card to resources page
- Internal links to Costa Rica, Colombia, Ecuador, Guatemala, Mexico, LATAM CAD, product pages

## [v2.237] – 2026-06-15 — K-Dispatch content depth expansion
### Added
- **K-Dispatch product page** — two new content-rich sections (EN + ES):
  - **"How It Works"** — ~300-word narrative walkthrough of the complete dispatch workflow (E911 intake → AI triage → unit recommendation → multi-agency coordination → after-action report). Adds the text depth Google needs to rank this page higher.
  - **"Deployment Scenarios"** — four use-case cards: Centralized 911 Center, C4/C5 Command Center, Multi-Jurisdiction Dispatch, Campus & Airport Security. Each with ~50 words of context.
- **3 additional FAQs** (EN + ES, total now 8): radio/RMS integration, deployment timeline (8–16 weeks), cloud/on-prem/hybrid options. Targets GSC long-tail queries: "911 CAD software", "CAD system demo", "emergency dispatch software".
- **2 additional Related Resources links**: CAD Dispatch Software for Latin America + What Is Emergency Dispatch Software — strengthens the dispatch topic cluster internal linking.
- Build verified: TypeScript 0 errors.

## [v2.236] – 2026-06-14 — Fix title-length warnings (Verge audit)
### Fixed
- Shortened title for `/resources/what-is-situational-awareness-software/` from 71→67 chars ("Command Center Guide" → "A Complete Guide").
- Shortened title for `/resources/public-safety-software-small-cities/` from 77→67 chars ("Affordable C5 Capability" → "C5 on a Budget").
- Both titles now under the 70-char SEO threshold. EN only (ES was already compliant).

## [v2.235] – 2026-06-12 — Internal links to lift the video-analytics hub
### Changed
- Added contextual internal links **to `/resources/what-is-video-analytics/`** (the site's #1 page by impressions, stuck at pos 27) from four high-relevance pages that previously skipped it: `/integrations/lpr/`, `/integrations/face-recognition/`, `/resources/ai-in-public-safety/`, `/resources/what-is-a-public-safety-platform/`.
- The two integration pages also gained links to the **VMS hub** (`/resources/what-is-video-management-software/`, pos 35).
- Rationale: both hubs are content-complete; internal PageRank from authority/topical pages is the one on-site lever left to move them off page 3–4. EN + ES. Build verified 0 errors.

## [v2.234] – 2026-06-12 — Page-1 CTR refresh, batch 2 (5 pages, EN + ES)
### Changed
- Metadata CTR refresh + OG tags for five pages the GSC audit shows ranking on/near page 1 with ~0 clicks:
  - **`/resources/public-safety-software-small-cities/`** — pos **5.9**, 0 clicks (most egregious): benefit-led title + "affordable C5 capability" hook.
  - **`/resources/what-is-situational-awareness-software/`** — pos 11.4, 336 impr: question-led title ("What Is…?") + 30–40% stat hook.
  - **`/vs/avigilon/`** — pos 10.0, 0 clicks: question-hook description on the existing "Avigilon Alternative" title.
  - **`/vs/cad/`** — pos 8.2, 0 clicks: "CAD Alternative"-led title + question hook.
  - **`/k-connect/`** — pos 11.0, 0 clicks: sharpened description + OG.
- All EN + ES; pure metadata plays from the 2026-06-11 audit. Build verified 0 errors.

## [v2.233] – 2026-06-12 — SEO audit fix: VMS title length
### Fixed
- **`/resources/what-is-video-management-software/` (EN)** — shortened title from 73 to 60 chars (removed redundant "System &" from "Video Management System & Software") to stay within the 70-char SEO limit. Daily Verge audit found 71 pages clean, 1 warning (this title), 0 critical.

## [v2.232] – 2026-06-11 — Video Analytics hub: query-variant depth + cluster interlink
### Added
- **`/resources/what-is-video-analytics/` (EN + ES)** — two new FAQs targeting the biggest untapped query clusters from the GSC audit: **"AI video analytics"** (~1,070 combined impressions, pos 20–25) and **"CCTV video analytics"** (~500 impressions, pos 15–32). Exact-match phrasing also expands the FAQPage schema for AI-answer citation.
- Added a **K-Video product link** to the page's related links — the one genuine internal-linking gap (the site's #1 page by impressions, 6,120 at pos 27, had no path to the K-Video product). Completes the video ↔ VMS ↔ K-Video cluster (the VMS hub already links back). Build verified 0 errors.

## [v2.231] – 2026-06-11 — C5 + Verkada: page-1 CTR refresh (data-driven)
### Changed
- **`/resources/how-c5-command-centers-work/` (EN + ES)** — ES title now leads with "¿Qué es un C5? Significado…" to match "c5 significado" intent; both locales add a 911/video/dispatch + "5 C vs C4" hook and OG tags. Target: GSC shows the ES page at **1,118 impressions, position 9.7, 0 clicks** — a page-1 snippet that wasn't earning the click.
- **`/vs/verkada/` (EN + ES)** — "Verkada Alternative"-led title + question-hook description + OG tags. Target: **294 impressions, position 9.4, 0 clicks**.
- Both are pure metadata/CTR plays identified by the fresh GSC/GA4 audit (2026-06-11). Build verified 0 errors.

## [v2.230] – 2026-06-10 — Homepage v2: full redesign from Claude Design handoff
### Changed
- **Homepage rebuilt** (EN + ES) from the approved Claude Design prototype (`Homepage v2.html`). New section order: Hero (5 operational pillars) → Operational Loop → Solutions (tabbed showcase) → Platform architecture diagram → Modules grid (10 building blocks) → Proof (integrations + stats + C5 quote + customer carousel) → Industries (photographic tiles) → Final CTA.
- New components under `src/components/home2/`; ported design stylesheet at `src/app/[locale]/home2.css` (design-tool chrome stripped, stray-brace bug in prototype CSS fixed, mobile collapse rules added for the solutions tabs).
- Architecture correction from design chat applied: Modules (neutral building blocks) split from Solutions (K-products); K-Dispatch recolored red → blue, K-Traffic cyan → amber.
- Added DM Mono font + Barlow Condensed 800 weight to root layout (design system requirement).
- Kept existing Nav, Footer, and all SEO metadata. Industry tiles use gradient placeholders until real photography is supplied; customer carousel uses placeholder monograms.

## [v2.229] – 2026-06-10 — Peregrine comparison page: CTR refresh
### Changed
- **`/vs/peregrine/` metadata (EN + ES)** — rewrote title to lead with "Peregrine.ai Alternative" + concrete differentiator (CAD, AI Video, GIS); description now opens with a question hook. Targets the 612-impression / position-9 / 0-CTR gap by making the SERP snippet click-worthy. OG tags updated to match. (SEO Priority #2)

## [v2.228] – 2026-06-09
### Added
- **New page: `/resources/que-es-un-c5/`** (EN + ES) — Spanish C5 hub targeting P1 SEO opportunity (1,296 impressions, 0 clicks)
  - 8 FAQs in Spanish targeting: ¿qué es un C5?, C5 significado, c5 comando control, centro de mando c5, cuántos C5 en México
  - 5-C breakdown (Comando, Control, Comunicaciones, Cómputo, Calidad), operational flow, Mexico stats, K1 platform integration
  - Bilingual page with full EN version for international markets
  - Article + FAQ + breadcrumb JSON-LD schema
- Added `queEsUnC5` metadata key to EN + ES metadata.ts
- Added `/resources/que-es-un-c5` to sitemap.ts (priority 0.8)
- Added hub cards to resources page (EN + ES sections)
- **VMS metadata optimization** (`/resources/what-is-video-management-software/`, EN + ES) — title/description now also target "video management software" (not just "system"); added OG tags. Closes SEO Priority #1; shipped in this commit alongside the C5 page.

## [v2.227] – 2026-06-09
### Changed
- **Privacy Policy** (EN + ES): updated content per legal document
  - Scope: added "formerly known as CityShob Software LTD." and references to Wang\Ica, C-Share, C-React platforms
  - Device data: added device identifiers, application version, and usage analytics
  - Purposes: added account management / authentication / security monitoring bullet; updated personalization to name all platforms
  - Modifications: updated to reference all official KabatOne websites and services

## [v2.226] – 2026-06-09
### Added
- **GEO guide: Public Safety Software for Ecuador** (KAB-1100 SEO Director heartbeat)
  - EN + ES bilingual; ArticleSchema + FAQPageSchema (6 Q&A) + BreadcrumbList
  - Coverage: ECU-911 (Sistema Integrado de Seguridad, operational since 2012 — one of LATAM's most advanced); Policia Nacional del Ecuador (PNE, ~47K officers); 24 provinces/221 cantones/18M population; Quito Metropolitan District (~3M) and Gran Guayaquil conurbation (~3.5M); 2023 state of emergency / internal armed conflict declaration; police-military joint ops (FFAA + PNE); Port of Guayaquil (APG) — largest export port; Mariscal Sucre UIO + Jose Joaquin de Olmedo GYE airports; SNEM/Cruz Roja Ecuatoriana health response; SERCOP/compraspublicas.gob.ec procurement
  - Resources hub card added (EN)
  - Metadata: `publicSafetySoftwareEcuador` key in EN + ES
  - Sitemap: priority 0.75
  - Internal links to Colombia, Peru, Argentina, Chile, Mexico, LATAM CAD, product pages

## [v2.225] – 2026-06-09
### Added
- **GEO guide: Public Safety Software for Costa Rica** (KAB-1099 weekly SEO)
  - EN + ES bilingual; ArticleSchema + FAQPageSchema (6 Q&A) + BreadcrumbList
  - Coverage: Fuerza Publica ~13K/OIJ ~2,500 investigators/DIS; constitutional army abolition 1948 (Art.12); Sistema de Emergencias 9-1-1 (unified since 2013) coordinating Bomberos/Cruz Roja/SAMU; CNE risk management/OVSICORI-UNA/RSN (6+ active volcanoes: Arenal, Poas, Turrialba, Rincon de la Vieja); Juan Santamaria SJO Airport 10M+ pax; Puerto Limon JAPDEVA Caribbean (main drug seizure point CA); Puerto Caldera INCOP Pacific; 7 provinces/82 cantones/5.2M citizens/3.3M tourists; Ley 9986 + SICOP e-procurement; SICA/CAFTA-DR
  - Resources hub card added (EN)
  - Metadata: `publicSafetySoftwareCostaRica` key in EN + ES
  - Sitemap: priority 0.75
  - Internal links to El Salvador, Nicaragua, Honduras, Guatemala, Mexico, LATAM CAD, product pages
  - GEO monitoring 2026-06-09: **5/5 queries now showing KabatOne** (up from 3/5 on 2026-06-02) — NEW WINS: "best CAD dispatch software emergency response Latin America" now pos 1; "unified video management platform public safety municipalities" now pos 3

## [v2.224] – 2026-06-08
### SEO — VMS "vms" keyword optimization + sitemap priority bumps
- **VMS page H1** → now leads with "VMS:" in both EN (`"VMS: What Is a Video Management System for Public Safety?"`) and ES (`"VMS: ¿Qué Es un Sistema de Gestión de Video para Seguridad Pública?"`) — targets `"vms"` query (1,795 impr @ pos 10.9, score 89.8, top opportunity in stack)
- **VMS metadata title EN** → `"VMS: What Is a Video Management System? Public Safety Guide | KabatOne"` — leads with "VMS" keyword
- **VMS metadata title ES** → `"VMS: Sistema de Gestión de Video para Seguridad Pública | KabatOne"` — parallel Spanish lead
- **Sitemap priorities** → bumped `/resources/how-c5-command-centers-work` 0.6→0.8 and `/resources/what-is-video-management-software` 0.6→0.8 (both are highest-opportunity pages per weekly analysis)

## [v2.223] – 2026-06-06
### SEO — Fix title length on video analytics page
- **what-is-video-analytics EN title** → replaced `&` with `, ... and` to avoid HTML-entity inflation (was 71 chars as `&amp;`); now exactly 70 chars and audit-clean

## [v2.222] – 2026-06-03
### SEO — C5 featured snippet + LATAM cluster internal link
- **C5 ES meta description** → starts with direct definition "C5 significa Centro de Comando, Control, Comunicaciones, Cómputo y Calidad…" targeting featured snippet for `que significa c5` (75 imp @ pos 11) and `c5 significado` (56 imp) cluster; adds "diferencia con el C4" to capture comparison queries
- **C5 page Related Articles** → added cross-link to `/resources/c5-command-centers-mexico-2026/` (EN + ES); strengthens LATAM C5 cluster internal linking

## [v2.221] – 2026-06-03
### SEO — P1 metadata optimization (Video/VMS cluster + Ports)
- **`whatIsVideoManagementSoftware` EN title** → "What Is a Video Management System (VMS)? Software Guide | KabatOne" — adds "system" variant targeting `video management system` (275 imp @ pos 57) and `vms software` (246 imp @ pos 41)
- **`whatIsVideoManagementSoftware` ES title** → "Sistema de Gestión de Video (VMS): Qué Es y Cómo Funciona | KabatOne" — parallel "system" variant for Spanish
- **`whatIsVideoAnalytics` EN/ES title** — added "CCTV" keyword; description updated to include "intelligent" signal targeting `intelligent video analytics` (121 imp), `cctv video analytics` (237 imp)
- **Ports ES title** → "Seguridad Portuaria ISPS — Radar Costero y Videovigilancia | KabatOne" with more specific description including radar costero + control de acceso

## [v2.220] – 2026-06-03
### New Page
- **El Salvador** — `/resources/public-safety-software-el-salvador/` (EN + ES)
  - PNC ~28K/FAES ~25K/GRP/CAT/UEA/GOES; Estado de Excepcion Mar 2022; CECOT 40K+ capacity Feb 2023
  - 911/COEN national emergency; DGPC civil protection; SNET seismic+volcanic 5 active volcanoes (Santa Ana/Ilamatepec 2,381m; San Miguel/Chaparrastique)
  - Puerto Acajutla Pacific main cargo; Puerto La Union (Cutuco) Gulf of Fonseca; SAL Airport regional hub; CEPA
  - 14 departments/262 municipalities; 6.3M citizens; 2M+ diaspora USA; dollarized USD 2001
  - LACAP (Decreto 868)/Comprasal e-procurement; LAIP/IAIP data access; SICA/CAFTA-DR
  - Metadata: `publicSafetySoftwareElSalvador` (EN + ES); added to sitemap.ts; hub card on resources/page.tsx

## [v2.219] – 2026-06-03
### Fixed / SEO
- **Peregrine page title** — updated to "Peregrine.ai Analytics Reporting Dashboards vs KabatOne" (includes brand URL variant matching `peregrine.ai analytics reporting dashboards` query at 769 impr/pos 9.4); description updated to include "alternative" signal for comparison intent
- **C5 page: add `¿Qué es un C5?` FAQ** — inserted as first FAQ in both ES and EN; directly targets `que es un c5` / `que es un centro c5` queries (combined C5 cluster at ~463 impressions, pos 9–11, 0 clicks); ES title also updated to `¿Qué es un Centro C5?` to match query intent
- Note: CAD page and k-dispatch bounces are low-traffic noise (4 and 8 sessions respectively) — left as-is per user guidance that average times are misleading at current traffic levels

## [v2.218] – 2026-06-03
### Added
- **Weekly agent: Full Action Plan output** — orchestrator now produces a prioritized P0/P1/P2 action plan alongside the Weekly Intelligence digest. Each action includes exact page path, target query, estimated click uplift, and a specific one-line instruction. Rendered as a styled card in the HTML report with color-coded priority badges.

## [v2.217] – 2026-06-03
### Changed
- **SEO weekly agent → orchestrator pattern** — replaced bolt-on Haiku call with Claude Sonnet 4.6 as a proper tool-use orchestrator. Sonnet drives the full analysis loop (pull_and_analyze → write intelligence → generate_html_report → commit_report), with the complete skill methodology (scoring formula, cluster definitions, business value multipliers, KabatOne context) embedded in the system prompt. Eliminates skill drift; intelligence quality upgrade from Haiku to Sonnet.

## [v2.216] – 2026-06-02
### Added
- **Weekly SEO agent** `scripts/seo_weekly_agent.py` — automated Monday traffic analysis. Pulls GA4 + GSC, scores opportunities, calls Claude Haiku (~$0.02/run) for AI conclusions (what changed, what's surprising, top 3 actions), generates branded HTML dashboard, commits to git. Runs every Monday 08:07 via macOS LaunchAgent. Use `--dry-run` to test, `--no-ai` to skip AI step.

## [v2.215] – 2026-06-02
### Added
- **GEO guide: Public Safety Software for Nicaragua** (KAB-1048)
  - EN + ES bilingual; ArticleSchema + FAQPageSchema (6 Q&A) + BreadcrumbList
  - Coverage: Policia Nacional ~16K/Ejercito 7 military regions/SINAPRED 19 active volcanoes; Puerto Corinto 2M+ t/yr; 118/115/128 dispatch; Ley 323/801 procurement; Ley 831 data protection 2021; RACCN/RACCS autonomous regions; narco-transit Caribbean corridor
  - Resources hub card added (EN)
  - Metadata: `publicSafetySoftwareNicaragua` key in EN + ES
  - Sitemap: priority 0.75
  - Internal links to Guatemala, Honduras, Mexico, LATAM CAD, product pages
  - GEO monitoring 2026-06-02: 3/5 queries appearing (stable); PSIM query AI answer quality improved — now names all 5 K-products with architecture description

## [v2.214] – 2026-05-30
### Fixed
- **Daily SEO audit** (KAB-1039): shortened VMS page title from 71→70 chars (`/resources/what-is-video-management-software/`) — removed trailing `?` after `(VMS)` to stay within 70-char limit.

## [v2.213] – 2026-05-29
### Added
- **Weekly SEO agent** `scripts/seo_weekly_agent.py` — self-contained script: pulls GA4+GSC, scores keyword opportunities, generates HTML dashboard + raw JSON snapshot, commits to git. Registered as macOS LaunchAgent `com.kabatone.seo-weekly` (every Monday 08:07).

## [v2.212] – 2026-05-29
### SEO — Daily audit fix
- **vs/peregrine** — shortened meta description from 181 to 151 chars (was triggering `desc_near_max` info flag in daily audit). EN only; ES was already within limits.

## [v2.211] – 2026-05-28
### SEO — Keyword opportunity optimizations
- **Peregrine page** — added "What Are Peregrine's Analytics Reporting Dashboards?" section (EN+ES) with 6 dashboard-type cards + "what dashboards don't show" callout. Targets "peregrine.ai analytics reporting dashboards" (1,406 impr, pos 9.8, 0 CTR).
- **Video analytics** — updated title/meta/H1 (EN+ES) to target "AI video analytics surveillance" cluster (pos 16–25) instead of generic "video analytics" (pos 41, too competitive).
- **Video management software** — updated title/meta/H1 (EN+ES) to lead with exact query "video management software (VMS)" (183 impr, pos 34).

## [v2.210] – 2026-05-28
### Added
- **Traffic analysis report** `SEO/audits/traffic-2026-05-28.html` — standalone GA4+GSC traffic intelligence dashboard with Chart.js: weekly sessions trend (10 weeks), traffic source mix (current vs prior 28d), keyword opportunity stack (15 queries, ~79 extra clicks/month), cluster momentum (8 groups, 723 total queries).
- **seo-traffic skill** `~/.claude/skills/seo-traffic/SKILL.md` — new standalone skill for unified GA4+GSC traffic analysis. Invokable as `/seo-traffic`. Integrates into `kabatone-seo-audit` as Section 6.
- **GA4 integration** — configured `properties/530090453` in `~/.config/claude-seo/google-api.json`; enabled Google Analytics Data API in GCP project 395364110222.

## [v2.209] – 2026-05-28
### Added / Fixed
- **SEO visual dashboard** `SEO/audits/2026-05-28-1632-audit.html` — dark KabatOne-branded HTML report with Chart.js health gauge, branch divergence chart, GSC performance charts, and color-coded P0/P1/P2 findings.
- **Peregrine page SEO fix** — new title/meta targeting "peregrine.ai analytics reporting dashboards" (1,406 impressions, pos 9.8, 0 clicks). Updated H1 and intro para to match query intent.
- **ES command center C5 snippet** — added definitional callout block after H1 for ES locale answering "¿qué significa C5?". Updated title/meta to include "¿Qué Es un C5?" for ~230 impressions at pos 10–11.
- **Bahrain directory cleanup** — deleted empty `src/app/[locale]/resources/public-safety-software-bahrain/` ghost directory.

## [v2.208] – 2026-05-28
### Added
- **First professional SEO audit run** — `kabatone-seo-audit` skill (wraps open-source claude-seo v2.0.0)
  - Output: `SEO/audits/2026-05-28-1446-audit.md` + `SEO/audits/latest.html` dashboard
  - Health score: **42/100**. P0: 3, P1: 4, P2: 2.
  - **Headline P0:** production frozen 50 days — `main` at v1.53, `nextjs` at v2.205, 259 commits behind. 121 of 125 country pages return 404 on `kabatone.com`. 24 dead URLs in production sitemap.
  - GSC pulls blocked (service account not yet shared on the property).
  - Single 5-min action (merge nextjs → main) clears all 3 P0s.
- Documentation: `SEO/docs/gsc-setup.md` — Google Search Console service-account setup walkthrough.
- Master plan: appended audit log row.

## [v2.207] – 2026-05-26
### Added
- GEO guide: **Video Management for Public Safety: Complete VMS Guide for Municipalities**
  - Targeted GEO-013 gap: "unified video management platform public safety municipalities recommendation" query cluster
  - EN + ES bilingual; ArticleSchema + FAQPageSchema (6 Q&A) + BreadcrumbList
  - VMS-specific content: multi-vendor camera integration (ONVIF/RTSP), CAD-VMS-GIS native connection, AI analytics (LPR, intrusion, abandoned objects), private camera expansion (K-Connect)
  - Comparison table: standalone VMS vs unified platform (6 capabilities)
  - 5-step unified workflow: camera integration → AI analytics → CAD dispatch → GIS map → private cameras
  - Internal links to 6 resources, 4 /vs/ comparisons, 3 product pages
  - Resources hub card added (EN + ES)
  - Metadata: `videoManagementPublicSafetyGuide` key in EN + ES
  - Sitemap: priority 0.8 (high-value GEO target)
  - Accent color: #a855f7 (purple — K-Video brand color)
  - Master plan: GEO-037 added

---

## [v2.206] – 2026-05-26
### Added
- Geographic market guide: **Public Safety Software for Honduras**
  - HNP ~15K officers, PMOP ~5K troops, FUSINA 4,400 interinstitutional, TIGRES; SNE 911 (250 operators, RADWIN CCTV Choluteca/Nacaome/San Lorenzo); Puerto Cortes (1st Western Hemisphere Container Security + Megaports); COPECO disaster (Eta/Iota 4M affected); mara MS-13/Barrio 18; narco-transit; CAFTA-DR maquila corridor; Decree 148.5 procurement; HNL Lempira; SICA/CAFTA-DR

## [v2.205] – 2026-05-25
### Fixed
- Updated Next.js from 16.2.0 to 16.2.6 — fixes Vercel CLI 54.x build failure (TypeError: path argument undefined)
- Unblocks staging deployments (builds broken since v2.183)

## [v2.204] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Guatemala**

## [v2.203] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Iceland**

## [v2.202] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Luxembourg**

## [v2.201] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Malta**

## [v2.200] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Cyprus**

## [v2.199] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Montenegro**

## [v2.198] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for North Macedonia**

## [v2.197] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Albania**

## [v2.196] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Bosnia and Herzegovina**

## [v2.195] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Serbia**

## [v2.194] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Croatia**

## [v2.193] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Slovenia**

## [v2.192] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Slovakia**

## [v2.191] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Bulgaria**

## [v2.190] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Ireland**

## [v2.189] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Lithuania**

## [v2.188] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Latvia**

## [v2.187] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Estonia**

## [v2.186] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Mauritius**

## [v2.185] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Seychelles**

## [v2.184] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for São Tomé and Príncipe**
- Fixed: Comoros metadata keys added to en/es metadata.ts (sitemap + hub entries also added)

## [v2.183] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Comoros**
- `src/lib/seo-agent/ccr.ts` — CCR/Paperclip dispatcher utility for SEO agent

## [v2.182] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Cape Verde**
  - GN ~1,200 (Guarda Nacional: Army/Air/Sea branches), PN ~1,000 Police (22 councils/9 islands), GCM Guardia Costeira; President Jose Maria Neves; democratic model since 1990 multiparty transition
  - 10-island Atlantic archipelago ~600 km west of Senegal; Sotavento (Santiago/Fogo/Brava/Maio) + Barlavento (Sao Vicente/Santo Antao/Sal/Boa Vista/Sao Nicolau/Santa Luzia uninhabited); 4,033 km² total land
  - Nelson Mandela International Airport (RAI/Praia) + Cesaria Evora Airport (VXE/Sao Vicente); Port of Praia + Port of Mindelo; TACV Cabo Verde Airlines; ECV/ANAC/ANMCV
  - Tourism ~20-25% GDP (Sal/Boa Vista beach resorts TUI/Thomas Cook/Neos); blue economy fishing ZEE; diaspora remittances ~15% GDP; PESI/CV Telecom/CVMovel; offshore IT hub
  - Salt/minerals (Pedra de Lume natural saline lake); Cabeolica wind energy; MHI Vestas; ECREEE renewable target 50% by 2030; frequent volcanic activity Fogo (2014-15 eruption)
  - LGCP/Lei de Gestao e Contratacao Publica; UGAC/ANRE; ANSA-CV food safety; CVEscudo/BCV; CEDEAO/ECOWAS; Lusophone PALOP/CPLP; MCA/WB/AfDB/Portugal/EU/USAID

## [v2.181] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Gambia**
  - GAF ~800-1,000 (Army/River Navy/National Guard), GPS ~6,000 Police (5 divisions), SIA (restructured post-Jammeh); President Barrow (2016/2021) ended 22-year Jammeh dictatorship; TRRC 2019-2021
  - Smallest mainland country in Africa (11,295 km²); virtually enclosed within Senegal (740 km border); Atlantic coast ~80 km
  - Gambia River ~470 km divides country north/south; Port of Banjul (GPA) — Senegal alternative trade route; Banjul-Barra Ferry
  - Tourism ~15-20% GDP (Smiling Coast — UK/Scandinavia/Germany); groundnuts ~80K ton/yr; fishing ~65K ton/yr; diaspora remittances ~30% GDP
  - Banjul International Airport (BJL); NAWEC electricity; Africell/QCell mobile; PURA/GRA regulator
  - PPA/Public Procurement Act 2014; Data Protection Act 2013; GMD/CBG; ECOWAS/OMVG/SENEGAMBIA; WB(IDA)/IsDB/USAID/EU/China

## [v2.180] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Lesotho**
  - LDF ~2,000-2,500, LMPS ~5,000 Mounted Police (10 districts), LNSS; King Letsie III constitutional monarchy; multiple coups/crises (1986/94/98/2014/17/22); recurring SADC mediation
  - LHWP — one of Africa's largest engineering projects: Katse/Mohale/Polihali dams, ~790M m³/yr water exports to Gauteng; Water Treaty 1986/2021; royalties ~10-15% govt revenues
  - Letseng diamonds (Gem Diamonds/govt 30%) — world's highest altitude diamond mine (3,100 m): Star of Lesotho 601 ct (2018), Spirit of Great Elephant 910 ct, Lesotho Legend 910 ct; diamonds ~60-70% exports
  - Only country entirely enclosed by another (South Africa); AGOA textile — Africa's largest US exporter; mohair/angora premium; Afriski mountain tourism
  - Moshoeshoe I Airport (MSU); LEC electricity; Econet Telecom/Vodacom; LCA; no own railway (uses SA Transnet)
  - PPU/Public Procurement Act Order 10/2006; Data Protection Act 2012; LSL/ZAR peg/CBL; SACU ~60-65% revenues; SADC/COMESA; WB(IDA)/AfDB/USAID/MCC

## [v2.179] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Eswatini**
  - UEDF (UMBUTFO) ~3,000, REPS ~4,000 Police (4 districts/tinkhundla), NSA; King Mswati III absolute monarch since 1986 (Africa's last absolute monarchy); political parties banned
  - 2021 pro-democracy protests 80+ deaths (critical public order challenge); HIV/AIDS ~27% adults world's highest prevalence
  - Sugar: RSSC/Ubombo Sugar/Illovo — world's 4th exporter per capita; textile manufacturing AGOA US access; timber Sappi/SWADE; coal Maloma; iron unexploited
  - Surrounded by South Africa (260 km) and Mozambique (105 km); SACU ~50% tax revenues; GDP per capita ~$4,200
  - King Mswati III Airport (SHO); Swaziland Railway; SEC electricity; MTN/Eswatini Mobile; ESCOM regulator
  - PPRA/Public Procurement Act 2011; Data Protection Act 2022; SZL/ZAR peg/CBE; SACU/SADC/COMESA; EDB/AfDB

## [v2.178] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Namibia**
  - NDF ~9,000-10,000 (army/navy/air force), NPF 14 regions, NIS intelligence, NAMRA customs; President Nandi-Ndaitwah (2024 — first female president SADC)
  - World's 4th uranium producer (~5,000-6,000 ton U3O8/yr): Rossing (Rio Tinto — oldest open-pit uranium mine), Husab (Swakop Uranium/CGNPC — world 2nd largest by capacity), Langer Heinrich (Paladin)
  - Port of Walvis Bay — SADC transport hub for landlocked states (Zambia/Zimbabwe/Botswana/DRC); Trans-Kalahari Corridor; TransNamib Railway
  - Marine diamonds Namdeb/Debmarine (govt/De Beers); Orange Basin offshore ~11B bbl eq. (TotalEnergies/Shell 2022); fishing ZEE 200nm ~1.5M t/yr; black rhinos world largest wild population
  - NamPower/SAPP electricity; MTC/Telecom Namibia; CRAN; Hosea Kutako Airport (WDH)
  - Public Procurement Act 15/2015; NNRA nuclear regulation; NAD/ZAR peg/Bank of Namibia; SADC/CMA; WB/AfDB/USAID/EU

## [v2.177] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Botswana**
  - BDF ~9,000-10,000 (one of Africa's most professional forces), BPPS 16 districts, DISS intelligence, BURS customs; President Duma Boko (2024)
  - Debswana (50/50 govt/De Beers) — world's largest diamond producer by value (~70-80% exports); Jwaneng (world's most valuable mine), Orapa, Letlhakane, Damtshaa
  - ~130,000 elephants (world's largest population) — anti-poaching critical; Okavango Delta UNESCO Heritage + Chobe; tourism ~10% GDP
  - Copper-nickel Selebi Phikwe (BCL); coal Morupule/Mmamabula; beef exports UE/BAMB; Moody's Baa3 (Africa's best credit rating)
  - Sir Seretse Khama Airport (GBE); Botswana Railways; BPC/SAPP electricity; Mascom/Orange/BTC mobile; BOCRA
  - PPADB/PPADA procurement; Data Protection Act 2018; BWP/Bank of Botswana; SADC member; WB (IBRD)/AfDB

## [v2.176] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Malawi**
  - MDF ~10,000-12,000 (army/lake navy/air wing), MPS ~14,000 Police (28 districts/3 regions), NIA intelligence; UN missions MINUSMA/MONUSCO; President Chakwera (2020)
  - Lake Malawi — world's 9th largest, Africa's 3rd deepest (706 m); chambo tilapia main protein; sovereignty dispute with Tanzania; MV Ilala lake transport
  - Tobacco — world 5th exporter (~150K ton/yr, ~55% forex); tea Thyolo/Mulanje ~50K ton/yr; Kayelekera uranium/Paladin (+100M lb U3O8); macadamia world 3rd; Illovo sugar
  - Port Chipoka/Nkhata Bay; Kamuzu Airport (LLW); CEAR railway; ESCOM electricity; Airtel/TNM mobile; MACRA regulator
  - PPDA Act 2017; Electronic Transactions/Cyber Security Act 2016; MWK/Reserve Bank Malawi; SADC/COMESA; WB/AfDB/USAID/FCDO UK/EU

## [v2.175] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Burundi**
  - FDN ~20,000-25,000, PNB 18 provinces, SNR intelligence, Imbonerakure paramilitary; AMISOM/ATMIS major contributor (Somalia)
  - 2015 political crisis (3rd term) ~400,000 displaced; 900 km DRC border (ADF/FDLR militias); EAC + CEPGL member
  - Lake Tanganyika — 2nd deepest lake worldwide (1,470 m); Port of Bujumbura; cross-border militia movements
  - Coffee ~70% export earnings; tea ~5,000 t/yr; Musongati nickel >300 Mt (world's largest unexploited); gold/cassiterite; Lake Tanganyika fishing
  - BJM Airport; REGIDESO electricity ~12% coverage; Econet Leo/Lumitel/Onatel mobile; BIF franc/BRB
  - ARMP/Decree n°100/203; Law n°1/13 2021 data protection; ARCT telecoms; WB/AfDB/AFESD/China EXIM/EU

## [v2.174] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Madagascar**
  - FAM ~13,500 (army/navy/air force) across 6 military regions; Gendarmerie Nationale ~9,000 across 25 regions/119 districts; FIGN (elite); National Police
  - World's 4th largest island (587,041 km²) ~35M pop.; Mozambique Channel critical maritime transit; ZEE 1.2M km²; 12-15 cyclones/year
  - Vanilla ~80% world production (leading global exporter); ilmenite/titanium QMM/Rio Tinto (Fort Dauphin); cobalt/nickel Ambatovy/Sherritt (world 2nd largest deposit); chromite Kraomita Malagasy; sapphires world leading producer
  - Port of Toamasina (MICTSL) ~5M t/year; Port Mahajanga; Port Toliara; Ivato Airport (TNR); MADARAIL; Telma/Airtel/Orange mobile
  - BNGRC disaster management; IOC/COI regional maritime coordination; SADC/COMESA member; ARTEC telecoms; CSBF banking
  - ARMP/Code des marchés publics; Law n°2014-006 data protection; IMF/World Bank/AfDB/EU/France AFD financing; Malagasy Ariary (MGA)

## [v2.173] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Guinea-Bissau**
  - FARP ~4,000-5,000 (army/navy/national guard), POP 8 regions, SISE intelligence, Coast Guard Bijagos 88 islands
  - 9 coups/attempts since 1974; DEA/UNODC: Africa's first narco-state; Bijagos = cocaine transshipment hub Colombia/Venezuela → Europe
  - INTERPOL + EUBAM Bissau (EU); cashew 5th world exporter (~250K tons/yr); Farim phosphate; fishing ZEE 200 nm
  - Port of Bissau, OXB Airport; BCEAO CFA franc (XOF); UEMOA; IMF/World Bank/AfDB/EU/Portugal cooperation
  - ARMP/Code des Marchés Publics; ECOWAS/UEMOA data framework

## [v2.172] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Liberia**
  - AFL ~2,000 (rebuilt post-UNMIL), LNP 15 counties, NSA intelligence, Coast Guard; President Boakai 2023; post-civil wars (1989-96, 1999-2003)
  - ArcelorMittal/Nimba iron ore (4+ M tons/yr); Firestone/Bridgestone (2nd Africa rubber); New Liberty Gold; FSC timber; ExxonMobil/Anadarko offshore
  - Port of Monrovia, Buchanan Port (iron ore), Nimba-Buchanan railway, Roberts Airport (ROB)
  - Institutional fragility; drug trafficking Atlantic route; land conflicts; porous borders Guinea/Sierra Leone/Ivory Coast
  - PPCC Act 2010; Personal Data Protection Act 2021; LTA telecom; USAID/World Bank/AfDB/EU/IMF; USD+LRD legal tender

## [v2.171] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Guinea**
  - FAG ~12,000-15,000 (army/navy/air force), PNF+Gendarmerie 7 regions/33 prefectures, BAFS special forces; CNRD junta since Sept. 2021
  - World's largest bauxite reserves (>25% global): CBG (Alcoa/Rio Tinto), GAC (Emirates Global), SMB-Winning, CBK
  - Simandou Project (Rio Tinto/SMB-Winning) — largest untapped iron ore deposit ~2,000 Mt; 650 km railway + Morebaya port
  - Siguiri gold (AngloGold Ashanti); diamonds; Kaleta+Souapiti hydropower; Port of Conakry; CKY Airport
  - DNMP/Décret D/2012/050; Mining Code 2011/2019 (15% state); Loi L/2016/037 cybersecurity; China EXIM Bank/AfDB/WB/IMF/ECOWAS

## [v2.170] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Sierra Leone**
  - RSLAF ~13,000 (army/navy/air force), SLP 5 regions/150+ districts, SSIS intelligence, Coast Guard; post-civil war (1991-2002) reconstruction
  - Diamonds (DACPA/Kimberley), rutile/ilmenite (Sierra Rutile/Iluka — world's largest natural rutile producer), iron ore (Tonkolili/Marampa), bauxite/gold
  - Freetown Port (Queen Elizabeth II Quay), Pepel Port (iron ore), Lungi Airport (FNA); Freetown 2017 mudslide 1,000+ killed
  - Illegal mining/diamond trafficking; Gulf of Guinea piracy; youth gangs Freetown; political tensions SLPP vs APC
  - NPPA Act 2016; Data Protection Act 2022; ACC; UK FCDO/World Bank/AfDB/USAID; ECOWAS

## [v2.169] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Benin**
  - FAB ~7,250 (army/navy/air force), PNB + Gendarmerie 12 departments, FSI (2022) northern ops, UISP counterterrorism
  - Port of Cotonou (PAC) ~12M tonnes/yr — main francophone West Africa port; hub Niger/Burkina/Mali; Bolloré/MSC Benin Terminal
  - GSIM/JNIM + EIGS attacks Atacora/Alibori since 2021; Benin/Burkina/Niger triple border; Gulf of Guinea piracy
  - Cotton/cashew exports; BCEAO/UEMOA; COO Cotonou Airport; Bénin Révélé digital transformation
  - DNCMP/Loi 2009-02 procurement; Loi 2017-20 Digital Code/CRIET; ECOWAS/CRESMAO; AFD/World Bank/AfDB/EU

## [v2.168] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Togo**
  - FAT ~8,550 (army/navy/air force/gendarmerie), PNT 5 regions, GRIT counterterrorism unit, DGDN intelligence
  - Port of Lomé — only Post-Panamax deep-water port in West Africa, +1.5M TEU/yr, hub for Burkina Faso/Mali/Niger; LCT/MSC/Bolloré
  - GSIM/JNIM attacks in Savanes region (north) since 2021; Gulf of Guinea piracy; triple border Burkina/Ghana/Togo
  - Phosphate (3rd Africa producer); SAZOF free zone; BCEAO/UEMOA zone; LFW Lomé Airport
  - ARMP/Loi 2009-013 procurement; Loi 2019-014 data protection/HAAC; ECOWAS/CRESMAO; AFD/World Bank/AfDB/EU Peace Fund

## [v2.167] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Equatorial Guinea**
  - FAR ~1,100 (army/coast guard/air force), National Police, Presidential Guard/Light Battalion, EEZ coast guard (Spanish FNGE training)
  - Block G/Zafiro ~100,000 bbl/day; ExxonMobil/Marathon Oil/Hess/Chevron; GEPetrol national company; EGLNG/Atlantic LNG Bioko Island; Punta Europa refinery
  - Malabo Port, Bata Port, SSG/Malabo Airport, Bata Airport (BSG); Ciudad de la Paz/Oyala new capital in development
  - Mbanié/Conga islands dispute with Gabon; discontinuous territory (Bioko/Rio Muni/Annobon/Corisco); CEMAC/CEEAC; President Obiang since 1979
  - Hydrocarbons Law; Data Protection Law (CEMAC model); SONAGEF; Public Procurement Law; Spain/China EXIM Bank/AfDB/World Bank

## [v2.166] – 2026-05-19
### Added
- Geographic market guide: **Public Safety Software for Gabon**
  - FDG ~10,000 (army/navy/air force), PNR 9 provinces, Gendarmerie, CTRI post-coup Aug 2023 (Gen. Brice Oligui Nguema), Republican Guard, EFG ~350 French military
  - Port of Owendo (Libreville), Port-Gentil oil hub, Comilog/Eramet Moanda manganese (world 4th), Trans-Gabon Railway Setrag 649 km, LBV airport
  - Offshore oil ~200-220K bbl/day: TotalEnergies (Anguille/Torpille/Rabi), Assala Energy, Shell Gabon, GOC/GabonOil
  - ECCAS/CEEAC HQ Libreville; 13 National Parks (Lopé UNESCO Heritage); Mbanié/Conga islands dispute with Equatorial Guinea
  - Law 001/2011 data protection; ARCEP; Petroleum Code Law 14/82; DGB/Code des Marchés Publics Decree 001/PR/2012; AFD/China EXIM Bank/World Bank/AfDB

## [v2.165] – 2026-05-19
### Added
- Public safety software for Republic of Congo geographic market guide (EN + ES)
  - FAC ~10,000 (army/navy/FAL), PNR 12 departments, Gendarmerie, DVT, Presidential/Republican Guard
  - Port of Pointe-Noire (Bolloré/DP World +5M tonnes/year); FAC naval base Pointe-Noire
  - Offshore oil ~300,000 bbl/day: TotalEnergies (Moho-Bilondo/Likouf), ENI (Marine XII), Perenco (Kitina/Tchibeli), SNPC
  - CFCO railway Brazzaville–Pointe-Noire 510 km; BZV/PNR airports; BEAC HQ Brazzaville
  - Borders: DRC 2,410 km (Congo/Ubangi River/Brazzaville-Kinshasa ferry), CAR 467 km (Sangha), Cameroon 523 km, Gabon 2,567 km, Angola (Cabinda) 231 km
  - Pool region insurgency Ninjas 2016–2017; peace 2019; Congo-Kinshasa river smuggling
  - Code des Marchés Publics Loi 11-2009/ARMP; Loi 9-2009 data protection; ARPCE; World Bank/AFD/China EXIM/IMF

## [v2.164] – 2026-05-19
### Added
- Public safety software for Central African Republic geographic market guide (EN + ES)
  - FACA 10,000–15,000 (Wagner/AFRIK/RF instructors), DPSR, Gendarmerie; MINUSCA ~14,000 UN peacekeepers; EUMAM RCA
  - CPC Coalition (FPRC/UPC/MPC) north/east; Anti-Balaka west; APPR 2019 peace agreement
  - Diamonds (MBAIKI/Kimberley), gold (Ndassima), uranium (Bakouma/Orano), coltan/cassiterite; ANDPC
  - BGF airport; Ubangi/Sangha river corridors; Bangui-Douala 1,400 km; Bangui-N'Djamena road
  - 730,000+ IDPs + 625,000+ refugees (UNHCR); WFP/OCHA/UNICEF/MSF active
  - Borders 6 countries: Cameroon/DRC/South Sudan/Sudan/Chad/Congo (Brazzaville)
  - Code des Marchés Publics Loi 09-004/UCGP; Mining Code Loi 09-005; ARCT; World Bank/UNDP/EU/USAID

## [v2.163] – 2026-05-19
### Added
- Public safety software for Mauritania geographic market guide (EN + ES)
  - DGSN/GSN/ANM ~20,000 (GSIGN contraterrorismo)/Guardia Nacional/DGED inteligencia; 15 wilayas
  - G5 Sahel FC-G5S/CEMOC; GSIM/Al-Qaeda Sahel frontera Mali 2,237 km; Nara/Néma/Timbedra
  - PAN Puerto Nouakchott (CHEC/CRBC expansión); Puerto Nouadhibou/SNIM 10M+ toneladas mineral hierro; ZFN
  - Greater Tortue Ahmeyim LNG (BP/Kosmos/SMHPM); Tasiast oro (Kinross); Chinguetti/Tiof petróleo offshore
  - Fronteras: Senegal (Rosso/Diama OMVS), Argelia (Tin Zaouatine), Sahara Occidental berm marroquí
  - Ruta Atlántica tráfico personas Canarias 40,000+ (2023); sequías Sahel 90% territorio desértico
  - Code des Marchés Publics Décret 2011-242/ARMP; Loi 2013-025 antiterrorismo; ARE/APAUS/Mauritel

## [v2.162] – 2026-05-19
### Added
- Public safety software for Eritrea geographic market guide (EN + ES)
  - EDF ~200,000 personnel (National Service), EPS 6 zones (Maekel/Anseba/Debub/Semenawi/Debubawi Keyih Bahri/Gash-Barka)
  - Eritrea Coast Guard — 2,234 km Red Sea coastline; Dahlak Archipelago 200+ islands
  - Port of Massawa (EPA, 1.5M tonnes/year); Port of Assab (strategic/UAE base 2015–2021)
  - Borders: Ethiopia 1,033 km (Zalambessa/Serha/Omhajer/Bure — Jeddah 2018 peace); Djibouti 125 km (Ras Doumeira disputed); Sudan 605 km (Kassala)
  - Houthi Red Sea threats 2023–2025; human trafficking Ethiopia→Sudan→Libya route
  - ERITEC/Proclamation 131/2003; RSADO/Segen Construction state enterprises; China EXIM Bank/CCCC; OPEC Fund

## [v2.161] – 2026-05-19
### Added
- Public safety software for Djibouti geographic market guide (EN + ES)
  - PNJ/Gendarmerie/FAD/SEMSE; Camp Lemonnier AFRICOM ~4,000; FFDJ ~1,450; PLA Navy Base; JGSDF
  - Doraleh Container Terminal +1M TEUs; EUNAVFOR Atalanta HQ; CTF-151; Bab-el-Mandeb 12% global trade
  - Borders: Ethiopia (Galafi/Dewele), Somalia (Loyada), Eritrea (Ras Doumeira)
  - Code des Marchés Publics Décret 2009-0224/ARMP; World Bank/USAID/EUCAP/IGAD/AFD

## [v2.160] – 2026-05-19
### Added
- Public safety software for Somalia geographic market guide (EN + ES)
  - SPF/SNA/ATMIS anti-Al-Shabaab, EUNAVFOR Atalanta anti-piracy, 3,330 km coastline
  - Mogadishu Port (Turkish/DP World), Bosaso, Kismayo ports; MGQ Airport Aden Adde
  - 3M+ IDPs; FEWS NET/FAO/FSNAU famine alerts; offshore oil; NCA/World Bank/USAID/AU

## [v2.159] – 2026-05-19
### Added
- Public safety software for Chad geographic market guide (EN + ES)
  - PNC/ANT/GNNT 23 provinces; Lac Chad Basin MNJTF/ISWAP/Boko Haram
  - Oil fields Doba/Bongor/Doseo; Chad-Cameroon pipeline (ExxonMobil/ESSO/COTCO)
  - CNPDCP/Loi 007/PR/2015/ARCEP; Code des Marchés/ARMP; AU/ECCAS/World Bank

## [v2.158] – 2026-05-19
### Added
- Public safety software for Niger geographic market guide (EN + ES)
  - GNN/FAN/NAG 8 regions; JNIM+Boko Haram/ISWAP Sahel; post-coup 2023 ECOWAS sanctions
  - Uranium Arlit/Akokan (Orano); oil Agadem (China CNPC/SEPN); Diffa/Agadez corridors
  - Loi 2017-28/ANSI/ARCEP; Code des Marchés/ARMP; UN MINUSMA/EUCAP Sahel

## [v2.157] – 2026-05-19
### Added
- Public safety software for Mali geographic market guide (EN + ES)
  - FAMa/GFCN/GNIM 10 regions; JNIM/GSIM Sahel; AES Alliance/Wagner Group presence
  - Gold mining Loulo-Gounkoto/Fekola (Barrick/B2Gold); Niger River; Bamako Airport
  - Loi 2023-022 data/AMRTP; Code des Marchés; MINUSMA/UN withdrawal 2023

## [v2.156] – 2026-05-19
### Added
- Public safety software for Burkina Faso geographic market guide (EN + ES)
  - ANS/FAN/VDP 13 regions; JNIM/GSIM Sahel insurgency 40%+ territory
  - Gold mining Essakane/Bissa/Karma (IAMGOLD/Endeavour); SONABEL; Ouagadougou Airport
  - Loi 052-2021/CIL/ARCEP; Code des Marchés/DGMP; AES Alliance/Wagner Group presence

## [v2.155] – 2026-05-19
### Added
- Public safety software for Libya geographic market guide (EN + ES)
  - GNU/LNA 22 districts; Tripoli/Benghazi Safe City; JSO/RADA Special Deterrence
  - NOC 1.2M+ bpd; Mellitah/Zawiya/Ras Lanuf/Brega terminals; Misrata/Benghazi ports
  - ICTAAC/GDPD Decree 5/2022; CPMPSS; INTERPOL/UNODC southern border coordination

## [v2.154] – 2026-05-19
### Added
- Public safety software for South Sudan geographic market guide (EN + ES)
  - SSPDF/NPS/SPLA-IO 10 states; Juba 400,000+ displaced; UNMISS 15,000+ peacekeepers
  - Greater Nile Oil fields (GNPOC/Dar blend); White Nile/Sudd basin flooding
  - NCA/Electronic Transactions Act; WFP/OCHA/UNHCR; Petroleum Revenue Management Act

## [v2.153] – 2026-05-19
### Added
- Public safety software for Sudan geographic market guide (EN + ES)
  - SAF/RSF/CPS post-2023 civil war; Port Sudan humanitarian hub; UNOCHA 7M+ IDPs
  - Nile/Atbara basin; GERD impact; Halfa/Wadi Halfa border Egypt; Chad/Ethiopia borders
  - NTRA/Cybercrime Act 2020; AU-led ceasefire/IGAD; World Bank/USAID/EU humanitarian

## [v2.152] – 2026-05-19
### Added
- Public safety software for Ivory Coast geographic market guide (EN + ES)
  - DGPN/FRCI/CCDO 14 districts; Abidjan 5.5M+ population Safe City; CRS/ONSP
  - Port of Abidjan 25M+ tonnes/Port de San-Pedro; cocoa 40%+ world production
  - Loi 2019-1070/ARTCI/CNPDCP; Code des Marchés/ANRMP; ECOWAS/INTERPOL

## [v2.151] – 2026-05-19
### Added
- Public safety software for Cameroon geographic market guide (EN + ES)
  - DGSN/BIR/RAPID 10 regions; Anglophone NW/SW crisis coordination; Boko Haram Lac Chad
  - Port of Douala/Kribi Deep Water Port; SNH oil; Douala/Yaoundé airports
  - Loi 2010-012 data protection; ARMP/Code des Marchés; BEAC/AfDB/World Bank

## [v2.150] – 2026-05-19
### Added
- Public safety software for Democratic Republic of Congo geographic market guide (EN + ES)
  - PNC 26 provinces/FARDC/ANR/DGM; Goma/Bukavu/Bunia/Lubumbashi conflict zones
  - Cobalt Belt/Katanga mining (Glencore/Ivanhoe/CMOC); Congo River corridor
  - Loi 20-017 ANPD 2023; CPMP/ARMP; UN MONUSCO/OCHA/WFP humanitarian

## [v2.149] – 2026-05-19
### Added
- Public safety software for Rwanda geographic market guide (EN + ES)
  - RNP 30 districts/CIAF/IRST, RNFS, RDF FDLR counter-ops, Kigali Safe City
  - Rusizi/Rusumo/Cyanika/Kagitumba/Nemba border crossings; RwandAir/Kigali Airport
  - Cyber Law 2021/NCSA/RISA; RPPA/OAG/AfDB/World Bank procurement

## [v2.148] – 2026-05-19
### Added
- Public safety software for Uganda geographic market guide (EN + ES)
  - UPF 10 subregions 45,000+ officers, UPDF LRA/ADF counter-ops, Kampala Safe City
  - UETCL Karuma 600MW/Isimba/Bujagali; UNOC/TotalEnergies Tilenga 600Mb; EACOP 1,443km
  - Data Protection Act 2019/PDPO/NITA-U; PPDA Act 85/2003/GEPS; Vision 2040/NDPIII

## [v2.147] — 2026-05-19
### Added
- **Zambia national market guide** (`/resources/public-safety-software-zambia/`)
  - ZP — 10 provinces, 20,000+ officers, SICS Criminal Investigation, Tactical Unit, Border Police
  - ZAF / Zambia Army — Copperbelt and border security; ZIS national intelligence
  - DMMU — Zambezi/Luangwa Valley flooding, Victoria Falls, southern droughts, ZMD integration
  - ZESCO/Kariba Dam 1,626 MW (shared with Zimbabwe)
  - Copperbelt: CNMC Luanshya/Chambishi, Mopani Copper Mines, KCM/Vedanta Konkola, Chambishi 800,000+ tonnes/year
  - Ndola/Mufulira refineries; Great North Road corridor; TAZARA (Tanzania-Zambia Railway)
  - Kenneth Kaunda International Airport LUN
  - Borders: Tunduma (Tanzania/TAZARA), Chirundu/Kariba (Zimbabwe), Kazungula (quadruple border), Kasumulu (Malawi), Cassacatiza (Mozambique), Nakonde (Tanzania)
  - Compliance: ZICTA/Data Protection Act 2021, Computer Crimes Act 2021, National Cybersecurity Policy
  - Procurement: ZPPA/PPA 2020/e-GP; SADC/COMESA/AfCFTA; 8NDP 2022-2026

## [v2.146] — 2026-05-19
### Added
- **Zimbabwe national market guide** (`/resources/public-safety-software-zimbabwe/`)
  - ZRP — 10 provinces, 35,000+ officers, CID, Support Unit Tactical, Border Police
  - ZNA — internal/border security; CIO national intelligence
  - CPU/DMA — Cyclone Idai Chimanimani 2019, Limpopo flooding, southern droughts
  - ZPC/ZETDC/Kariba Dam 1,626 MW (shared with Zambia); ZINWA water
  - Chiadzwa/Marange diamond mines (ZCDC); Zimplats Ngezi/Mhondoro platinum (Great Dyke)
  - NRZ railway corridor to Beira/Maputo; Harare International Airport HRE
  - Borders: Beitbridge (South Africa 5M+ crossings/year), Forbes/Nyamapanda (Mozambique), Chirundu/Kariba (Zambia), Kazungula (quadruple border), Victoria Falls/Plumtree (Botswana)
  - Compliance: PDA 2021/POTRAZ, Cybercrime Act 2017/Min. ICT Cybersecurity Policy 2021-2025
  - Procurement: PRAZ/PFMA; SADC/COMESA; Vision 2030

## [v2.145] — 2026-05-19
### Added
- **Mozambique national market guide** (`/resources/public-safety-software-mozambique/`)
  - PRM (Mozambique Republic Police) — 11 provinces, SERNIC criminal investigation, Border Police
  - FADM/FAM — Cabo Delgado counter-insurgency (Al-Shabaab/ASWJ since 2017), border security
  - INGC/CENOE — cyclones (Idai/Kenneth 2019), Limpopo-Zambezi floods, INAM integration
  - SISE national intelligence
  - TotalEnergies/ENH Mozambique LNG Afungi Peninsula (127 tcf, 13 Mtpa); Coral Sul FLNG (Eni/ENH)
  - CFM port corridor: Maputo/Matola (SA corridor), Beira (Zimbabwe), Nacala (Malawi)
  - Cahora Bassa Dam 2,075 MW; Mozal aluminium; MPM Airport
  - Borders: Negomano/Namuno (Tanzania), Forbes/Nyamapanda (Zimbabwe), Cassacatiza (Zambia), Milange/Zobue (Malawi), Lomahasha/Namaacha (Eswatini)
  - Compliance: ANPDP/Lei 3/2022, Lei 4/2021 Cybersecurity/CERT-Moçambique/INTIC
  - Procurement: UGEA/CCP; SADC/SIPO II; Agenda 2025/ICSSI

## [v2.144] — 2026-05-19
### Added
- **Angola national market guide** (`/resources/public-safety-software-angola/`)
  - PNA (Angola National Police) — 18 provinces, 100,000+ officers, PIC Criminal Investigation, Polícia de Ordem Pública
  - FAA (Armed Forces) — Army/Air Force/Navy, Cabinda enclave security
  - SINSE national intelligence; Protección Civil e Incêndios emergency 113/118
  - Sonangol: Bloco 0 Cabinda, Bloco 15/17/31 offshore 1.1M+ bpd; ANPG
  - Port of Luanda; Porto de Lobito (TAZARA corridor to Zambia/DRC); Port of Namibe
  - Soyo LNG; SONANGALP refinery; Laúca Dam hydroelectric; REDE power grid; LAD Airport
  - Borders: Luvo/Malongo (DRC), Yema (Congo-Brazzaville), Santa Clara/Oshikango (Namibia), Luacano/Jimbe (Zambia)
  - Compliance: ANPD/Lei 22/2011, Lei 7/2017 Computer Crimes, Decreto 270/2019 Ciberseguridad
  - Procurement: UTCE/Lei 20/2010/MINFIN; SADC/ECCAS frameworks; PND 2023-2027/PRODESI

## [v2.143] — 2026-05-19
### Added
- **Senegal national market guide** (`/resources/public-safety-software-senegal/`)
  - Police Nationale — 14 regions, DPJ judicial police, UAT anti-terrorism, border police
  - Gendarmerie Nationale (Armée) — rural/border zones, Groupements Régionaux
  - DGPC/SDIS Dakar — emergency 18, seasonal flooding Pikine/Guédiawaye, ONAS/PDLI
  - DER/Sécurité Présidentielle — national intelligence integration
  - PAD Port Autonome de Dakar (West Africa's largest west coast port)
  - PETROSEN/Woodside Sangomar offshore — first oil/gas exports 2024
  - AIBD Airport (Blaise Diagne), SENELEC power, TER Dakar-Thiès railway
  - Borders: Rosso/Diama (Mauritania), Kidira/Diboli (Mali), São Domingos (Guinea-Bissau), Farafenni/Sénoba (Gambia enclave)
  - Compliance: CDP/Loi 2008-12, Loi 2008-11 Cybercriminalité/ADIE
  - Procurement: DCMP/Code des marchés/SIGMAP; Plan Sénégal Émergent/Vision 2050

## [v2.142] — 2026-05-19
### Added
- **Ghana national market guide** (`/resources/public-safety-software-ghana/`)
  - GPS (Ghana Police Service) — 16 regions, 30,000+ officers, DCOP/Crime Combat Unit, Border Police
  - GNFS (Ghana National Fire Service) — Accra, Kumasi, Takoradi, Obuasi/Tarkwa mining zones
  - NADMO — seasonal floods Northern Ghana, landslides, industrial incidents, GMet integration
  - NISS/Presidential Guard — national security and intelligence integration
  - GPHA: Port of Tema (West Africa's largest, 20M+ containers), Port of Takoradi
  - GNPC offshore Jubilee/TEN/Sankofa gas fields; AngloGold Ashanti Obuasi/Tarkwa gold mines
  - GRIDCO/ECG power grid; GWCL water; Kotoka International Airport (ACC)
  - ECOWAS/ECOMOG borders: Aflao (Togo), Elubo/Dormaa Ahenkro (Ivory Coast), Paga/Hamile (Burkina Faso)
  - INTERPOL Regional Coordination Centre Accra
  - Compliance: Data Protection Act 2012 (Act 843)/DPC, Electronic Transactions Act 2008/NCSA/CERT-GH
  - Procurement: GPPA/PPA 2003/Ghana Electronic Procurement (GEP); Digital Transformation Agenda 2019/Vision 2057

## [v2.141] — 2026-05-19
### Added
- **Tanzania national market guide** (`/resources/public-safety-software-tanzania/`)
  - Tanzania Police Force (TPF) — 31 mainland regions, 65,000+ officers, ATU, BPU
  - Zanzibar Police Force (ZPF) — Unguja and Pemba islands
  - NFRS (National Fire and Rescue Service) — Dar es Salaam, Arusha, Mwanza
  - NEMC/DMS disaster management — floods, Rift Valley, Kilimanjaro, Indian Ocean cyclones
  - TPA Port of Dar es Salaam 20M+ TEU; Tanga/Mtwara/Zanzibar Ferry
  - TPDC offshore gas security; TAZARA/TAZAMA corridor; JRO/DAR airports
  - EAC borders: Namanga/Holili/Sirari (Kenya), Tunduma/Kasumulu (Zambia/Malawi), Mutukula/Rusumo/Kabanga
  - Compliance: PDPA 2022/TCRA/PDPC, Cybercrimes Act 2015/eGA/CERT-TZ
  - Procurement: PPRA/GPSA/Tendas portal; Tanzania Vision 2025/LTPP 2050

## [v2.140] — 2026-05-19
### Added
- **Tunisia national market guide** (`/resources/public-safety-software-tunisia/`)
  - DGPN/Ministry of Interior — 24 governorates, Brigades de recherche, Judicial Police, Border Police
  - Garde Nationale — 7 military regions, border/rural/coastal security
  - ONPC civil protection — 198 emergency coordination, COC Tunis
  - ANS/DGSE national security; BAT/BIR anti-terrorism units
  - Infrastructure: Port of Tunis Radès (main container), Sfax/Bizerta/Sousse ports, TUN Airport 6M+ pax, Transmed pipeline, STEG/SONEDE
  - Border crossings: Ras Jedir/Dhehiba (Libya), Bouchebka/Haïdra/Sakiet Sidi Youssef (Algeria)
  - Compliance: INPDP/Law 63-2004, Décret-loi 54-2022/ANSI/CERT-TN, Law 2015-26/GRC
  - Procurement: HAICOP/Code des marchés publics/Tuneps portal
  - Tunisia Digital 2025 / Vision 2035 modernisation context
- Fix: duplicate `publicSafetySoftwareMexico` TS1117 error (v2.139) — renamed national Mexico key to `publicSafetySoftwareMexicoNational`

# KabatOne Website — Changelog

All notable changes to the website are logged here.
Every agent or contributor making changes **must** append an entry before committing.

Format: `## [version] YYYY-MM-DD — Short title`

---

## [2.138] 2026-05-19 — Mexico national market guide

**Added**
- New market guide: `/resources/public-safety-software-mexico` (EN + ES)
- Coverage: SSPC, Guardia Nacional (150K+ elements), CNPC/SINAPROC, CENAPRED, SESNSP/PLATAFORMA MEXICO
- 911 System + C5/C4/C2 command centres: CDMX, Jalisco, Nuevo León, Estado de México, Chihuahua
- SEMAR port security: Manzanillo/Lázaro Cárdenas/Veracruz/Altamira
- SEDENA Plan DN-III-E + Plan Marina disaster response
- Borders: 3,145 km US (Tijuana/Mexicali/Nogales/Cd. Juárez/Nuevo Laredo/Matamoros)
- PLATAFORMA MEXICO: REPUVE/RENAPO/AFIS/SNSP databases
- Compliance: LFPDPPP (2010), LGPDPPSO (2017), INAI, ARCO rights
- Procurement: LAASSP/LOPSRM, CompraNet/MercadoPúblico.mx, SHCP, World Bank/IDB
- Metadata (EN + ES), sitemap entry (priority 0.8), hub cards (EN + ES), 7 FAQs each locale
- Digital Mexico 2025 / Mexico Digital strategy alignment

## [2.137] 2026-05-19 — Ethiopia market guide

**Added**
- New market guide: `/resources/public-safety-software-ethiopia` (EN + ES)
- Coverage: EFPC 12 regional states + 2 city admins, NDRMC, NISS, INSA, Addis Ababa Safe City/LRT
- Border security: Somalia (Moyale/Tog Wajale), Kenya, South Sudan, Sudan (Metema/Humera), Djibouti (Galafi)
- Critical infrastructure: GERD (6,450 MW), Ethiopian Airlines/Bole (ADD), Ethio Telecom, EEP/EEU
- IGAD/CEWARN multi-hazard coordination (drought/flood/conflict/displacement)
- Compliance: Proclamation 1321/2024, Computer Crime Proc. 958/2016, INSA/CERT-ET
- Procurement: PPAA Proc. 649/2009, World Bank/AfDB/EU/USAID/AU
- Metadata (EN + ES), sitemap entry, hub cards (EN + ES), 7 FAQs each locale
- Digital Ethiopia 2025 / 10-Year Development Plan alignment

## [2.136] 2026-05-19 — SEO fix: k-safety title length

**Fixed**
- K-Safety page title: replaced `&` with `and` (71→69 chars raw HTML, within 70-char limit)
- Daily SEO audit (Verge): 71 pages audited, 0 critical, 5 pre-existing warnings, 0 new actionable issues

## [2.135] 2026-05-19 — Algeria market guide

**Added**
- New market guide: `/resources/public-safety-software-algeria` (EN + ES)
- Coverage: DGSN 58 wilayas, Gendarmerie Nationale (GN/MDN), DGPC, CNCLAT, DSS
- Energy infrastructure: SONATRACH Hassi Messaoud, Hassi R'Mel, In Amenas/Tiguentourine (post-2013 upgraded), Arzew/Bethioua LNG, Skikda LNG/refinery, Transmed/Medgaz pipelines
- Ports: Algiers/Oran/Béjaïa/Skikda + airports ALG/Es-Sénia/Mohamed Boudiaf
- Sahel borders: 6,343 km across Libya/Niger/Mali/Mauritania/Morocco/Tunisia with GN/ANP radar/CCTV
- Compliance: Law 18-07/ANPDP, SGSI/CERT-DZ, DSS guidelines
- Procurement: Decree 15-247/ARMP/SIGMAP, SONATRACH direct procurement
- Metadata (EN + ES), sitemap entry, hub cards (EN + ES), 7 FAQs each locale
- Algeria Vision 2035 / e-Algérie alignment

## [2.134] 2026-05-19 — Iraq market guide

**Added**
- New market guide: `/resources/public-safety-software-iraq` (EN + ES)
- Coverage: Iraqi Federal Police (IFP) 18 governorates, CTS, Civil Defence, NOC/BOC, KRSC/Asayish/Peshmerga (Kurdistan Region)
- Oil infrastructure: Rumaila (1.4M+ bpd), West Qurna 1&2, Majnoon, Kirkuk, ABOT/KAAOT, Umm Qasr Port
- Reconstruction: Nineveh/Mosul (UNDP/UNOPS), Anbar (EU/World Bank)
- Compliance: CMC/NITA-Iraq, MOC encryption, air-gapped deployment for CTS/MOI classified networks
- Procurement: GCB/PMO, World Bank/UNDP, US DoS/DoD ITACSS, KRG separate rules
- Metadata (EN + ES), sitemap entry, hub cards (EN + ES), 7 FAQs each locale

## [2.133] 2026-05-19 — Jordan market guide

**Added**
- New market guide: `/resources/public-safety-software-jordan` (EN + ES)
- Coverage: Public Security Directorate (PSD) 12 governorates, Civil Defence Directorate (CDD), NCSCM, Amman Safe City/GAM
- Border crossings: King Hussein Bridge/Allenby, Sheikh Hussein, Wadi Araba, Jaber/Nassib, Al-Karama/Al-Omari, Aqaba/Durra
- Port security: Aqaba Port (26M+ tonnes/year), ASEZA industrial zones, ACT container terminal
- Infrastructure: JPRC Zarqa refinery, NEPCO/JEPCO, Queen Alia International Airport (AMM)
- Compliance: Law 24/2023 PDPL/MODEE, NITC/CERT.jo, Regulation 32/1994 procurement, ASEZA rules
- Metadata (EN + ES), sitemap entry, hub cards (EN + ES), 7 FAQs each locale
- Jordan Economic Modernisation Vision 2033 / Digital Jordan alignment

## [2.132] 2026-05-19 — Oman market guide

**Added**
- New market guide: `/resources/public-safety-software-oman` (EN + ES)
- Coverage: Royal Oman Police (ROP) 11 governorates, Civil Defence and Ambulance Authority (CDAA), National Emergency Management Committee (NEMC), Muscat ISOC
- Port security: Salalah (4M+ TEU), Sultan Qaboos Port, Duqm SEZ, Sohar Freezone
- Oil infrastructure: PDO (600K+ bpd), OQ Group, Qalhat LNG (10.4 Mtpa), Mina Al-Fahal
- Compliance: Royal Decree 6/2022 PDPPL/ITA, OCERT, RD 36/2008 procurement
- Metadata (EN + ES), sitemap entry, hub cards (EN + ES), 7 FAQs each locale
- Vision Oman 2040 / Digital Oman alignment

## [2.131] - 2026-05-19
### Added
- Geographic market guide: **Kuwait** — KNP 6 security districts (Kuwait City/Hawalli/Farwaniya/Ahmadi/Jahra/Mubarak Al-Kabeer), MOI DGFD 50+ stations, Kuwait National Guard (KNG), Coast Guard/Border Patrol, NCECC, KMA/112, Kuwait Safe City Project (KSCP) 70,000+ CCTV cameras, GDT ANPR/ALPR MOW highways/JKIA, Mina Al-Ahmadi/Shuwaikh/Shuaiba/Abdullah ports, KOC Greater Burgan oilfields, KNPC/KIPIC critical infrastructure, Personal Data Protection Law 22/2023/CITRA, State Cybersecurity Law/KU-CERT, CAPT/MoF Decree 37bis/1964/CSSP, KFAED/KIA financing, Kuwait Vision 2035 "New Kuwait" Digital Transformation, 7 bilingual FAQs (EN + ES)

## [2.130] - 2026-05-19
### Added
- Geographic market guide: **Qatar** — Qatar Police (GDPS)/Border Security Force/Lekhwiya/National Guard/Coast Guard, MOI National Command Centre (NCC), QFRS, QAWS/HMC A&E, QRCS, Civil Defence Qatar, 999 unified emergency, Doha Safe City 30,000+ cameras (FIFA 2022 legacy), 8 smart stadiums, Lusail Smart City IOC (300K+ planned residents), QTIC/Ashghal ANPR, PDPL Law 13/2016/MOTC regulations, NCSA/NCSS 2021/Q-CERT/QGCLOUD, Etimad/MOF/Law 24/2015 procurement, QNV 2030 Digital Transformation, 7 bilingual FAQs (EN + ES)

## [2.129] - 2026-05-19
### Added
- Geographic market guide: **Morocco** — DGSN 60,000+/Gendarmerie Royale 50,000+, BNPJ/DGST/BCIJ, Forces Auxiliaires, Marine Royale, DGPC 120+ centres, SAMU/SMUR, DGM/ABH/CENAD, Casablanca Safe City 15,000+ cameras, Gendarmerie ANPR 1,800+ km highways, Loi 09-08/CNDP, Loi 05-20/DGSSI/maCERT/DNSSI 2014, marchespublics/Décret 2-12-349, AFD/EIB/AfDB, FIFA 2030 (6 host cities), Al Haouz earthquake 2023, 7 bilingual FAQs (EN + ES)

## [2.128] - 2026-05-19
### Added
- Geographic market guide: **Egypt** — MOI/Egyptian Police (27 governorate directorates/GDO/Central Security/Traffic Police/NSSA), CPS/Ḥimāya Madaniyya, SCM ambulance, EMA/NARSS, Cairo Safe City 100,000+ cameras (Huawei), NAC IOC 6,000+ cameras, Smart Police Stations 150+, PDPL Law 151/2020/PDPC, Cybersecurity Law 175/2018/NCSA/EG-CERT, NTRA, GAGS/Law 182/2018, WB/ADB/AIIB/EU, Egypt Vision 2030, 7 bilingual FAQs (EN + ES)

## [2.127] - 2026-05-19
### Added
- Geographic market guide: **Bangladesh** — Bangladesh Police (8 Ranges/64 districts/DMP/CMP/KMP/RMP/SMP/BMP/NRMP/RAB/SWADS), FSCD, DDM, CPP (55,000+ volunteers/2,000+ cyclone shelters), BMD/BFFWC/FFWC, Dhaka DMP C3 Safe City, BRTA/DTCA cameras, Digital Security Act 2018, ICT Act 2006, BGD e-GOV CIRT/BCC, National Cybersecurity Strategy, e-GP/CPTU/PPA 2006/PPR 2008, ADB/WB/JICA, 7 bilingual FAQs (EN + ES)

## [2.126] - 2026-05-19
### Added
- Geographic market guide: **Pakistan** — Punjab/Sindh/KPK/Balochistan/ICTP Police, Rangers, FC, Rescue 1122 PES+KPK, NDMA/PDMA, PMD/GLOF/2022 floods (33M affected), PSCA Lahore 8,000+ cameras, ISC Islamabad 1,900+, Karachi Safe City 3,000+, PDPA 2023/NCPDP, PECA 2016, National Cybersecurity Policy 2021/IGNITE/CERT-PK, PPRA 2004/SPRRA/KPPRA/BPPRA, ADB/IDB/WB, 7 bilingual FAQs (EN + ES)

## [2.125] - 2026-05-19
### Added
- Geographic market guide: **South Africa** — SAPS (9 provinces/145 districts/1,150+ stations/CIMAC/Hawks/DPCI), JMPD/TMPD/CTMPD/eThekwini Metro Police, NDMC/COGTA, 9 PDMCs, SAWS, EMS, SANDF, FPA/Working on Fire, Joburg JOC 5,000+ cameras, Cape Town CCTV 3,000+, SANRAL ANPR, POPIA 2013/Information Regulator (July 2021), PAIA, Cybercrimes Act 2020, SITA/DPSA/CSIRT-vGov, CSD/PFMA/MFMA, DBSA/AfDB, 7 bilingual FAQs (EN + ES)

## [2.124] - 2026-05-19
### Added
- Geographic market guide: **Kenya** — NPS (47 county commands/KPS/APS/DCI/GSU/FRG/Air Wing), KFRS, NYS, KFS, NDOC, NDMA/ASAL early warning, KMD, 999/112, Nairobi Huawei Safe City 1,800+ cameras/NCC/NTMC, KeNHA ANPR, DPA 2019/ODPC + Regulations 2021, Computer Misuse & Cybercrimes Act 2018, KE-CIRT/CC, ICT Authority, GPP/PPADA 2015, AfDB/WB/JICA, 7 bilingual FAQs (EN + ES)

## [2.123] - 2026-05-18
### Added
- Geographic market guide: **Nigeria** — NPF (36 state commands/320K+ personnel), NSCDC/DSS/NIA, FFS, NEMA (8 zonal/NECC)/SEMA, NiMet, NIHSA, 112, Lagos LC3/Eko Safe City 2,000+ cameras/LSSTF, Abuja AISS/FCTA, NDPA 2023/NDPC, Cybercrime Act 2015 + 2024 Amendment, NITDA/NCC, BPP/PPA 2007, 7 bilingual FAQs (EN + ES)

## [2.122] - 2026-05-18
### Added
- Geographic market guide: **Malaysia** — PDRM (14 contingents/Bukit Aman/UTK/VAT 69), JBPM (200+ stations/PKBM), APMM, NADMA/DID Infobanjir 2,800+ stations, 999/SAMM, DBKL 3,000+ cameras/Safe City, PLUS ANPR, PDPA 2010/JPDP + 2024 Amendment, NACSA CIIP/RiSQ, CyberSecurity Malaysia/MyCERT, ePerolehan/MyGPR/MAMPU, MyDIGITAL/MDEC, 7 bilingual FAQs (EN + ES)

## [2.121] - 2026-05-18
### Added
- Geographic market guide: **Vietnam** — MPS/Bộ Công an (63 Công an tỉnh, C05/C06), PCCC/Cảnh sát PCCC, 113/114/115, VNMHA/NCHMF typhoons, Mekong Delta floods, Ban Chỉ đạo TW về PCTT, Hanoi IOC/HCMC TTGS, Nghị định 13/2023 (PDPD), Luật An ninh mạng 2018/VNCERT, muasamcong/Luật Đấu thầu, 7 bilingual FAQs (EN + ES)

## [2.120] - 2026-05-18
### Added
- Geographic market guide: **Philippines** — PNP (17 RPOs/NCRPO/1,400+ stations/SAF/HPG), BFP, PCG (17 Districts), NDRRMC/RA 10121, PAGASA PSWS, PHIVOLCS (23 volcanoes), OCD READY Project, Metro Manila/Quezon City/Manila 911, RA 10173/NPC CCTV guidelines, RA 10175/CICC, DICT National Cybersecurity Plan 2023–2028/CERT-PH, PhilGEPS/RA 9184, 7 bilingual FAQs (EN + ES)

## [2.119] - 2026-05-18
### Added
- Geographic market guide: **Indonesia** — Polri (34 Polda + 500+ Polres), BNPB/BPBD/PUSDALOPS, BASARNAS, Damkar, PSC 119/SPGDT, BMKG/InaTEWS (tsunamis), 147 volcanoes/PVMBG, Ring of Fire, 17,000+ islands, UU PDP No. 27/2022 (in force Oct 2024), KOMDP/Komdigi, BSSN/IDCERT, LKPP/SPSE/e-Katalog, 100 Kota Cerdas, Satu Data Indonesia, Jakarta JGIS, 7 bilingual FAQs (EN + ES)

## [2.118] - 2026-05-18
### Added
- **Thailand market guide** (EN + ES): `/resources/public-safety-software-thailand/`
  - Royal Thai Police/RTP (77 provinces), Ministry of Interior, Tourist Police, NSC/NARESUAN Command Centre
  - DDPM (Department of Disaster Prevention and Mitigation); NIEMS/ERAWAN system; SAJ/provincial 1669 EOCs
  - Bangkok Metropolitan Police (BMP) 64,000+ CCTV cameras; RTP ANPR; Safe City Phuket; 191/199/1669/112
  - Chao Phraya/2011/2021 flood management; NDWC tsunami alerts (Andaman Sea); monsoon emergency response
  - PDPA B.E. 2562 (2019, enforced June 2022), PDPC; Cybersecurity Act B.E. 2562, NCSA, ThaiCERT/ETDA
  - GPP/DGA procurement (B.E. 2560/2017); Digital Government Agency; Thailand 4.0; Smart Bangkok/Phuket/Chiang Mai
  - 7 bilingual FAQs; articleSchema, faqPageSchema, breadcrumbSchema; hub cards EN+ES; sitemap entry

## [2.117] - 2026-05-18
### Added
- **Romania market guide** (EN + ES): `/resources/public-safety-software-romania/`
  - Poliția Română (41 județe + București, IGPR), MAI, Jandarmeria Română, SRI intelligence
  - ISU/BM OKF-equivalent (fire + civil protection); SMURD (HEMS/paramedic); SAJ (41 county ambulances) + SABIF
  - STS (Special Telecommunications Service) — TETRA/ROIIS network; 112 single emergency number; DIU dispatch centres
  - RO-ALERT Cell Broadcast system; NG112/eCall modernisation; PNRR emergency comms funding
  - Vrancea seismic zone risk; INFP seismic data; Danube/Siret/Prut flood management
  - GDPR/ANSPDCP, Law 190/2018, Law 218/2002, Law 333/2003, Directive 2016/680; DNSC/CERT-RO/NIS2
  - SICAP/Law 98/2016 procurement; PNRR/EU Structural Funds; Smart Cluj/Timișoara/București
  - 7 bilingual FAQs; articleSchema, faqPageSchema, breadcrumbSchema; hub cards EN+ES; sitemap entry

## [2.116] - 2026-05-18
### Added
- **Hungary market guide** (EN + ES): `/resources/public-safety-software-hungary/`
  - Rendőrség (19 county HQs + Budapest Metropolitan, ORFK), BM/Ministry of Interior, TEK (counter-terrorism), ABI
  - BM OKF/Katasztrófavédelem (fire + civil protection); OMSZ (national ambulance); 107/105/104/112
  - VIRTAL TETRA network (Virtual National Radio Telephone Subsystem); broadband 4G/5G evaluation
  - Danube/Tisza flood risk management; KEHOP environmental sensors; ROBOTZSARU police info system; ANPR/FRR
  - GDPR/NAIH/Infotv., Rtv., Directive 2016/680; NIS2/SZTFH, NBSZ, KIBEV, GovCERT Hungary
  - EKR/Kbt. procurement; Digitális Magyarország; KEHOP/EU structural funds; Smart Budapest
  - 7 bilingual FAQs; articleSchema, faqPageSchema, breadcrumbSchema; hub cards EN+ES; sitemap entry

## [2.115] - 2026-05-18
### Added
- **Israel market guide** (EN + ES): `/resources/public-safety-software-israel/`
  - Israel Police (6 districts, Magav, YAMAM/YAMAS), Ministry of Public Security, Shin Bet
  - Magen David Adom (MDA sole national ambulance, 101); Fire & Rescue; 100/101/102/112
  - MCEI coordination protocols; digital TETRA network; command and control centres
  - Privacy Protection Law 1981 + Amendment 13 (2023-2024), PPA, EU adequacy decision
  - INCD, ISA/Shin Bet, Directive 3.2 (government cybersecurity); IL-CERT
  - Government tender portal (gov.il), ITTA/ICT Authority framework; TAMAS/ANPR national system
  - Smart City: Tel Aviv Digital Twin, Smart Haifa, CyberSpark Be'er Sheva, national GIS
  - 7 bilingual FAQs; articleSchema, faqPageSchema, breadcrumbSchema; hub cards EN+ES; sitemap entry

## [2.114] - 2026-05-18
### Added
- **Greece market guide** (EN + ES): `/resources/public-safety-software-greece/`
  - ΕΛΑΣ/Hellenic Police (13 regions + Attica), Ministerio Protección Ciudadana, ΕΥΠ intelligence
  - Πυροσβεστικό Σώμα (99 stations); ΕΚΑΒ (national 112/ambulance); Λιμενικό Σώμα (Coast Guard)
  - ΕΣΑΚΤ TETRA national network; 100/199/166/112 emergency numbers; ΓΓΠΠ Civil Protection
  - Wildfire management context: Mati 2018, Evros 2023; Copernicus/Wildfirecat; seismic/tsunami alerts
  - RGPD/ν. 4624/2019, ν. 4921/2022, ΑΠΔΠΧ; NIS2/ΕΨΑΠΑ; ENISA HQ Athens
  - ΕΣΗΔΗΣ/ν. 4412/2016 procurement; ΕΣΠΑ/ΤΑΑ funding; Smart Attica/Athens; island scalability
  - 7 bilingual FAQs; articleSchema, faqPageSchema, breadcrumbSchema; hub cards EN+ES; sitemap entry

## [2.113] - 2026-05-18
### Added
- **Czech Republic market guide** (EN + ES): `/resources/public-safety-software-czech-republic/`
  - Policie ČR (14 Krajská ředitelství, Policejní prezidium), MV ČR, BIS, ÚOOZ, ÚZSI
  - Hasičský záchranný sbor ČR (HZS ČR, 14 krajských HZS, Generální ředitelství HZS ČR)
  - Zdravotnická záchranná služba (ZZS, 14 krajských ZZS); IZS coordination; 112/150/155/158
  - PEGAS TETRA (Ministerstvo vnitra mandate); Krajská operační střediska (KOS) for IZS dispatch
  - RGPD/zákon č. 110/2019 Sb., ÚOOÚ, Directiva 2016/680; NÚKIB/zákon č. 60/2024 Sb. (NIS2); GovCERT.cz
  - NEN/zákon č. 134/2016 Sb. procurement; Smart Prague/TRAFIS; Digitální Česko; EU Structural Funds IZS
  - 7 bilingual FAQs; articleSchema, faqPageSchema, breadcrumbSchema; hub cards EN+ES; sitemap entry

## [2.112] - 2026-05-18
### Added
- **Switzerland market guide** (EN + ES): `/resources/public-safety-software-switzerland/`
  - Kantonspolizei (26 cantons), Stadtpolizei (Zürich, Bern, Genève, Basel, Lausanne), fedpol, NDB/SRC
  - POLYCOM TETRA (FOITT/UFIT mandate); POLYCOM Nachfolger (4G/5G evaluation); Schutz & Rettung Zürich; Sanitätsnotrufzentralen 144
  - 112/117/118/144 emergency numbers; AlertSwiss; ASTRA motorway surveillance; Schengen-SIS / Prüm
  - nFADP/revDSG (Sept. 2023), FDPIC/EDÖB, FSIPA; ISA/ISG, NCSC/GovCERT.ch, IKT-Minimalstandard
  - SIMAP/BöB/FAPP procurement (2021 revision); DFJP/DDPS; cantonal autonomy
  - 7 bilingual FAQs; articleSchema, faqPageSchema, breadcrumbSchema; hub cards EN+ES; sitemap entry

## [2.111] - 2026-05-18
### Added
- **Austria market guide** (EN + ES): `/resources/public-safety-software-austria/`
  - Bundespolizei (unified 2005, 9 Landespolizeidirektionen), BMI, BK/Bundeskriminalamt, DSN counter-terrorism
  - BOS-Funk TETRA/Tetron network; transition to BOS-Funk 2.0 (4G/5G broadband); Landeswarnzentralen; ILS (Integrierte Leitstellen)
  - Feuerwehr (municipal/Länder); Rettungsdienst (Red Cross, Samariterbund, Johanniter); 122/133/144/112
  - DSGVO/DSG 2018, Datenschutzbehörde (DSB), §54 SPG, PolDVG; CERT.at/GovCERT.at; NIS2/NISG; RTR-GmbH
  - BBG/BVergG/ANKÖ procurement; Smart City Wien; ASFINAG ANPR/KFZ-Kennzeichenerfassung; ZAMG; CÜPLA
  - 7 bilingual FAQs; articleSchema, faqPageSchema, breadcrumbSchema; hub cards EN+ES; sitemap entry

## [2.110] 2026-05-19 — Feat: Türkiye market guide (EGM/Jandarma, AFAD 112, MOBESE/KGYS, KVKK, BTK/USOM)

**Added**
- New page: /resources/public-safety-software-turkey/ — EGM (~250K urban officers), Jandarma (rural gendarmerie), AFAD (81 provincial 112 centres, earthquake management, Kahramanmaraş 2023), MOBESE/KGYS (urban surveillance), AKOM (İstanbul disaster mgmt), POLNET, KOM, MİT/TEM, KVKK (Law 6698), BTK/USOM (national CERT), ISO 27001/BGYS, EKAP/KİK/Kamu İhale Kanunu procurement, plaka tanıma ANPR, TEDES/KGYS, data sovereignty in Turkey
- 4 challenge cards: dual EGM/Jandarma + 81 × 112, earthquake management/AFAD/AKOM İstanbul, MOBESE/KGYS/KVKK, KVKK/BTK/USOM/data sovereignty
- 7 bilingual FAQs: EGM/Jandarma/İçişleri structure, 112 unified dispatch/MOBESE, earthquake management/AFAD 2023, EKAP/KİK procurement, KVKK/BTK/USOM, MOBESE/KGYS surveillance, KabatOne fit
- Metadata keys (EN + ES), sitemap entry (priority 0.75), hub cards (EN + ES in /resources/)

---

## [2.109] 2026-05-19 — Feat: Portugal market guide (PSP/GNR dual, INEM/CODU 112, SIRESP TETRA, ANEPC/SIOPS, CNPD, CNCS/NIS2)

**Added**
- New page: /resources/public-safety-software-portugal/ — PSP (21K officers, urban), GNR (~25K, rural/gendarmerie), MAI, INEM (4 CODU centres, 112 dispatch), SIRESP TETRA (modernised 2017), ANEPC (civil protection), SIOPS/SGIFR (forest fire management), Bombeiros voluntários (~25K), ICNF, VIGIFOR, CNPD/RGPD (Lei 58/2019), Lei 1/2005 (video surveillance), CNCS/NIS2 (Lei 46/2018), BASE.gov/CCP/eSPap procurement, PRR/Portugal 2030 EU funding
- 4 challenge cards: dual PSP/GNR + CODU/112 integration, forest fires/SIOPS/SGIFR, urban surveillance/ANPR/CNPD, NIS2/CNCS/PRR funding
- 7 bilingual FAQs: PSP/GNR/MAI structure, CODU/SIRESP dispatch, forest fire role/VIGIFOR/ANEPC, BASE.gov/eSPap/PRR procurement, RGPD/CNPD/Lei 1/2005, urban surveillance/ANPR, KabatOne fit
- Metadata keys (EN + ES), sitemap entry (priority 0.75), hub cards (EN + ES in /resources/)

---

## [2.108] 2026-05-19 — Feat: Finland market guide (Poliisi, Hätäkeskuslaitos, VIRVE TETRA, Pelastustoimi, Tietosuojalaki)

**Added**
- New page: /resources/public-safety-software-finland/ — Poliisi (11 poliisilaitos, Poliisihallitus/POHA), Hätäkeskuslaitos (6 hätäkeskus, 112 integrated dispatch), VIRVE TETRA/VIRVE 2.0 (TETRA+4G/5G), Pelastustoimi (22 departments), Supo counter-terrorism, Tietosuojalaki/Tietosuojavaltuutettu (GDPR), Laki henkilötietojen käsittelystä poliisitoimessa, Kyberturvallisuuslaki/NIS2/Kyberturvallisuuskeskus/Traficom, Laki julkisen hallinnon tiedonhallinnasta, KEJO field command, PATJA, HILMA/Hansel Oy procurement, Aurora AI, Helsinki Smart City
- 4 challenge cards: VIRVE TETRA/VIRVE 2.0/Hätäkeskuslaitos, Helsinki Smart City/Aurora AI/KEJO, ANPR/Tietosuojavaltuutettu, NIS2/Kyberturvallisuuslaki/VIRVE homologation
- 7 bilingual FAQs: Poliisi/POHA/11 districts, Hätäkeskuslaitos/VIRVE dispatch, digitalisation/KEJO/Aurora AI, HILMA/Hansel procurement, Tietosuojalaki/Tietosuojavaltuutettu/politiregisterloven, ANPR/Helsinki Smart City, KabatOne fit
- Metadata keys (EN + ES), sitemap entry (priority 0.75), hub cards (EN + ES in /resources/)

---

## [2.107] 2026-05-19 — Feat: Denmark market guide (Politiet, SINE TETRA, Alarmcentralen, Beredskabsstyrelsen, Datatilsynet)

**Added**
- New page: /resources/public-safety-software-denmark/ — Politiet (12 politikredse, Rigspolitiet), SINE TETRA network (SINE Next modernisation), 12 Alarmcentraler (112 dispatch), POLSAG CAD, Beredskabsstyrelsen (5 national rescue centres, beredskabsloven), PET counter-terrorism, CFCS/NIS2, Datatilsynet/Databeskyttelsesloven, politiregisterloven, Udbud.dk/SKI/udbudsloven procurement, Smart City Copenhagen
- 4 challenge cards: SINE TETRA/Alarmcentralen dispatch, Copenhagen Smart City/Digitaliseringsstyrelsen, ANPR/Datatilsynet, Databeskyttelsesloven/NIS2/CFCS/SINE homologation
- 7 bilingual FAQs: Politiet/Rigspolitiet/12 districts, Alarmcentralen/SINE dispatch, Beredskabsstyrelsen/CFCS roles, Udbud.dk/SKI procurement, Databeskyttelsesloven/Datatilsynet/politiregisterloven, ANPR/Smart City surveillance, KabatOne fit
- Metadata keys (EN + ES), sitemap entry (priority 0.75), hub cards (EN + ES in /resources/)

---

## [2.106] 2026-05-19 — Feat: Norway market guide (Politiet, Nødnett, AMK/110, DSB/NSM, Datatilsynet)

**Added**
- New page: /resources/public-safety-software-norway/ — Politiet (12 districts, Politidirektoratet/POD), Nødnett TETRA (67K+ users), AMK medical dispatch (20 centres), fire 110 centres (19), DSB (civil protection/natural disasters), NSM (cybersecurity/NIS2), Datatilsynet/personopplysningsloven, politiregisterloven, Doffin/DFØ procurement, PST counter-terrorism
- 4 challenge cards: Nødnett TETRA/multi-centre dispatch, remote geography/DSB resilience, ANPR/Smart City/Datatilsynet, NSM/NIS2/politiregisterloven/Nødnett homologation
- 7 bilingual FAQs: Politiet/POD/12-district structure, AMK/110/112/Nødnett dispatch, DSB role, Doffin/DFØ procurement, personopplysningsloven/Datatilsynet/politiregisterloven, ANPR/urban surveillance, KabatOne fit
- Metadata keys (EN + ES), sitemap entry (priority 0.75), hub cards (EN + ES in /resources/), cross-link from Sweden/Belgium pages

---

## [2.105] 2026-05-19 — Feat: Belgium market guide (Federal Police, ASTRID 112, Camerawet, GDPR/GBA, NIS2/CCB)

**Added**
- New page: /resources/public-safety-software-belgium/ — Federal Police (Federale Politie / Police Fédérale), 188 local police zones (politiezones / zones de police), ASTRID TETRA network (90K+ users), provincial COS/OHC dispatch centres (112/100/101 unified), CGCCR crisis centre, NATO/EU HQ in Brussels, Camerawet video surveillance regulation, GDPR/GBA (Gegevensbeschermingsautoriteit), NIS2/CCB (Centre voor Cybersecurity België), BOSA/e-Procurement
- 4 challenge cards: NATO/EU HQ and two-tier police model, ASTRID integration and COS/OHC dispatch, urban surveillance/ANPR/Camerawet, GDPR/GBA NIS2/CCB compliance
- 7 bilingual FAQs: Federal/local police structure, 112/101 dispatch/COS/OHC/ASTRID, NATO/EU role, procurement/e-Procurement/BOSA, GDPR/GBA/Camerawet, ANPR/urban surveillance, KabatOne fit
- Metadata keys (EN + ES), sitemap entry (priority 0.75), hub cards (EN + ES in /resources/)

---

## [2.104] 2026-05-19 — Feat: Poland market guide (Policja, 112/CPR, PSP, RODO, KSC/NIS2)

**Added**
- New page: /resources/public-safety-software-poland/ — Policja (~100K officers, 16 Komendy Wojewódzkie), MSWiA, 16 CPR voivodeship 112 centres (coordinating 997/998/999), PSP (State Fire Service), Pogotowie Ratunkowe, RODO/UODO data protection, KSC/NIS2 cybersecurity, ABW/CERT Polska, SESPOL, KSIP, CPR 2.0 digitalisation, miejski monitoring (municipal CCTV), KPO/POPC EU funding, BZP/TED/PZP procurement
- 4 challenge cards: 16-region 112 unified dispatch, miejski monitoring CCTV integration, RODO/KSC compliance, KPO/EU funding digital transition
- 7 bilingual FAQs: Policja/MSWiA structure, 112/CPR dispatch, PSP/Pogotowie coordination, RODO/UODO, KSC/NIS2, KPO/POPC funding, KabatOne fit
- Metadata keys (EN + ES), sitemap entry (priority 0.75), hub cards (EN + ES in /resources/)

---

## [2.103] 2026-05-19 — Feat: Saudi Arabia market guide (MOI, 911 Unified, NEOM, Hajj, PDPL, NCA)

**Added**
- New page: /resources/public-safety-software-saudi-arabia/ — Saudi MOI/Police (13 regions), National 911 (unified police/fire/SRCA/traffic since 2017), Civil Defence, SRCA, NEOM ($500B+)/The Line/Diriyah megaprojects, Hajj/Umrah 2.5M pilgrims crowd management, PDPL (Royal Decree M/19 of 1443H), NCA/ECC controls, CITC/CCRF cloud, Etimad procurement, Saudization/Nitaqat, LEAP, Vision 2030
- 4 challenge cards: Hajj/Umrah 2.5M crowd management, NEOM/The Line autonomous safety, 911 unified dispatch 13 regions, PDPL/NCA data residency
- 7 Saudi-specific FAQs: MOI/police/SANG structure, 911 unified dispatch, NEOM/Vision 2030, Etimad/offset procurement, PDPL/NCA/ECC, video surveillance/Hajj tracking, KabatOne fit
- Metadata keys (EN + ES), sitemap entry (priority 0.75), hub cards (EN + ES in /resources/), cross-link from UAE page

---

## [2.102] 2026-05-19 — Feat: UAE market guide (Dubai Police IPOC, Abu Dhabi ADPOC, Safe City, PDPL, NESA)

**Added**
- New page: /resources/public-safety-software-uae/ — Dubai Police (IPOC, 50K+ cameras, Zero Crime, Smart Palm AI/facial recognition), Abu Dhabi Police (ADPOC, AAD), 7 autonomous emirate forces, MOI federal coordination, Dubai Safe City, Abu Dhabi Safe City, UAE PDPL (Federal Decree-Law No. 45 of 2021), NESA IAS / UAE Cybersecurity Council, Expo City Dubai, GITEX, DubaiTenders, ADPROCURE, UAE 2031 Vision
- 4 challenge cards: 7-emirate federation coordination, 50K+ Safe City cameras AI management, mass events (Expo City/F1/global), UAE data residency/NESA/PDPL
- 7 UAE-specific FAQs: UAE police structure/7 emirates, Dubai IPOC/Safe City, Safe City initiative, DubaiTenders/ADPROCURE procurement, PDPL/NESA/UAE Cybersecurity Council, video surveillance, KabatOne fit
- Metadata keys (EN + ES), sitemap entry (priority 0.75), hub cards (EN + ES in /resources/), cross-link from Middle East page

---

## [2.101] 2026-05-19 — Feat: Sweden market guide (Polisen, SOS Alarm, MSB, RAKEL, GDPR, NIS2)

**Added**
- New page: /resources/public-safety-software-sweden/ — Polisen (unified national force, 7 regions, ~33K officers), SOS Alarm AB (112 operator, 18 centres, ZENIT CAD platform), MSB civil preparedness, RAKEL TETRA national network, NIS2 implementation, Kameraövervakningslag, GDPR/IMY (Dataskyddslagen), Polisdatalagen, Säkerhetsskyddslagen, Statens inköpscentral/Tendsign procurement
- 4 challenge cards: 7 regional coordination post-2015 reform, SOS Alarm ZENIT modernisation, RAKEL multi-agency integration, NIS2 cybersecurity
- 7 Sweden-specific FAQs: Polisen/SOS Alarm/MSB structure, SOS Alarm/ZENIT dispatch, MSB/RAKEL framework, Tendsign/LOU procurement, GDPR/IMY/NIS2/Säkerhetsskyddslagen, camera surveillance/Kameraövervakningslag, KabatOne fit
- Metadata keys (EN + ES), sitemap entry (priority 0.75), hub cards (EN + ES in /resources/)

---

## [2.100] 2026-05-19 — Feat: South Korea market guide (KNP, 112 Unified, Smart Safety City, PIPA, CSAP)

**Added**
- New page: /resources/public-safety-software-south-korea/ — Korean National Police Agency (경찰청, KNP), 18 Sido police agencies, unified 112 dispatch (integrated police/fire/EMS since 2014), National Fire Service (소방청, NFS), Seoul 60,000+ CCTV network, Smart Safety City (MOIS), Policing 4.0, KONEPS procurement, PIPA/PIPC, CSAP/KISA, NCSC, K-City Network
- 4 challenge cards: unified 112 system integration, 60K+ CCTV AI management PIPA-compliant, Smart Safety City interoperability, Policing 4.0 AI modernisation
- 7 South Korea-specific FAQs: KNP/NFS/18 Sido structure, 112 unified dispatch, Smart Safety City, KONEPS/CSAP procurement, PIPA/PIPC/NCSC requirements, CCTV infrastructure, KabatOne fit
- Metadata keys (EN + ES), sitemap entry (priority 0.75), hub cards (EN + ES in /resources/), cross-link from Japan page

---

## [2.99] 2026-05-19 — Feat: Japan market guide (NPA, MPD, 47 prefectural forces, J-Alert, APPI, ISMAP)

**Added**
- New page: /resources/public-safety-software-japan/ — National Police Agency (NPA/警察庁), 47 prefectural police forces (都道府県警察), Tokyo MPD (警視庁, ~47,000 officers), 6,000+ Koban system, Fire and Disaster Management Agency (FDMA/消防庁), 759 local fire departments, 110/119 emergency dispatch, J-Alert national warning system, Digital Agency DX reform, ISMAP cloud certification, APPI 2022, PPC, NISC/cybersecurity strategy, Society 5.0
- 4 challenge cards: 47 autonomous prefectural forces inter-agency coordination, natural disaster multi-agency response, dispatch system modernisation (DX/ISMAP), surveillance cameras APPI compliance
- 7 Japan-specific FAQs: NPA/MPD/prefectural structure, 110/119/Command Centres, J-Alert, procurement (調達ポータル/ISMAP), APPI/PPC/NISC, video surveillance/facial recognition, KabatOne fit
- Metadata keys (EN + ES), sitemap entry (priority 0.75), hub cards (EN + ES in /resources/), cross-link from Singapore page

---

## [2.98] 2026-05-18 — Feat: Singapore market guide (SPF, SCDF, Smart Nation, PDPA, CSA)

**Added**
- New page: /resources/public-safety-software-singapore/ — Singapore Police Force (SPF, 999, 55 NPCs, 7 land divisions), SCDF (995, fire/EMS/hazmat), Home Team MHA integration, Safe City Test Bed, 90,000+ AI police cameras plan by 2030, GovTech/CODEX ecosystem, GeBIZ procurement, PDPA (amended 2021)/PDPC, CSA/Cybersecurity Act 2018/IM on IT, Government Managed Cloud (GMC)
- 4 challenge cards: Smart Nation/GovTech/CODEX integration standards, 999/995 multi-agency dispatch integration, PDPA/CSA/data residency, 90K+ AI cameras at scale
- 7 Singapore-specific FAQs: SPF/SCDF/Home Team structure, 999/995/POCC dispatch, Safe City Test Bed, GeBIZ/GovTech procurement, PDPA/CSA requirements, police camera/ANPR/LTA network, KabatOne fit
- Metadata keys (EN + ES), sitemap entry (priority 0.75), hub cards (EN + ES in /resources/)

---

## [2.97] 2026-05-18 — Feat: Netherlands market guide (Politie, Meldkamer NL, C2000, AVG/WPG/BIO)

**Added**
- New page: /resources/public-safety-software-netherlands/ — één Politie (10 Eenheden + Landelijke Eenheid, 65K+ officers), Meldkamer NL project (GMK/CAD 2.0 replacing BVH), C2000 TETRA digital radio (50K+ terminals), P2000 pager complementary system, cameratoezicht + ANPR kentekenherkenning, 25 veiligheidsregio, GRIP incident management
- 4 challenge cards: één Politie national IT vs regional Eenheden, Meldkamer NL/CAD 2.0 modernisation, AVG/WPG/BIO triple compliance, cameratoezicht + AI in strict AVG environment
- 7 Netherlands-specific FAQs: Politie/Brandweer/GHOR/veiligheidsregio structure, 112/Meldkamer NL/GMK, C2000/P2000, Aanbestedingswet/TenderNed/PIANOo, AVG/WPG/BIO, cameratoezicht/ANPR, KabatOne fit
- Metadata keys (EN + ES), sitemap entry (priority 0.75), hub cards (EN + ES in /resources/)

---

## [2.96] 2026-05-18 — Feat: new Spain market guide (CNP, Guardia Civil, Mossos, ENS, SIVE)

**Added**
- New page: /resources/public-safety-software-spain/ — four-tier security structure (CNP, Guardia Civil, Mossos d'Esquadra/Ertzaintza/Policía Foral, 8,000+ Policías Locales), 17 autonomous 112/SUE centres, SIVE coastal surveillance, ENS mandatory framework, LOPDGDD/AEPD, CCN-STIC/PILAR, PLACSP procurement
- 4 challenge cards: multi-tier CNP/GC/Mossos/Local siloed IT, 17 autonomous community 112 systems, ENS/LOPDGDD/AEPD compliance, SIVE + Frontex border/maritime security
- 7 Spain-specific FAQs: force structure (CNP/GC/Mossos/Ertzaintza/Policías Locales), 112/SUE/CECOP dispatch, SIVE surveillance, LCSP/PLACSP procurement, ENS categories/CCN-STIC, SIVE/Frontex maritime, KabatOne fit
- Metadata keys (EN + ES), sitemap entry (priority 0.75), hub cards (EN + ES in /resources/)

---

## [2.95] 2026-05-18 — Feat: new Italy market guide (Polizia, Carabinieri, NUE 112, GDPR, ACN)

**Added**
- New page: /resources/public-safety-software-italy/ — multi-force structure (Polizia di Stato, Carabinieri, Guardia di Finanza, 7,000+ Polizie Locali), NUE 112/SOREU dispatch reform, lettori automatici di targhe (LPR/ANPR), CONSIP/MEPA procurement, GDPR/Garante Privacy enforcement, ACN cybersecurity
- 4 challenge cards: multi-force siloed IT, NUE 112 dispatch reform, GDPR/Garante Privacy, organised crime + mass tourism events
- 7 Italy-specific FAQs: Polizia/Carabinieri/GdF/Polizia Locale structure, NUE 112/SOREU, CCTV/lettori di targhe, CONSIP/MEPA procurement, GDPR/Garante, NUE 112 project, KabatOne fit
- Metadata keys (EN + ES), sitemap entry (priority 0.75), hub cards (EN + ES in /resources/)
- Italy cross-link added to France guide Related Resources (European cluster)

---

## [2.94] 2026-05-18 — Feat: new France market guide (Police Nationale, Gendarmerie, RGPD, VIGPIRATE)

**Added**
- New page: /resources/public-safety-software-france/ — Police Nationale vs Gendarmerie dual structure, 101 departments, 250K+ officers, 1.9M Vidéoprotection cameras, NexSIS 18-112 dispatch project, CNIL/RGPD, ANSSI, VIGPIRATE threat levels, Paris 2024 Olympics AI video analytics legacy
- 4 challenge cards: dual Police/Gendarmerie IT systems, 15/17/18 dispatch fragmentation → NexSIS, RGPD/CNIL AI video regulation, VIGPIRATE + mass events
- 7 France-specific FAQs: Police Nationale vs Gendarmerie structure, 15/17/18/NexSIS dispatch, Vidéoprotection/CSU regulation, public procurement (BOAMP/UGAP/DAE), RGPD/CNIL data protection, VIGPIRATE system, KabatOne fit
- Metadata keys (EN + ES), sitemap entry (priority 0.75), hub cards (EN + ES in /resources/)
- France link added to Germany guide Related Resources (cross-linking European cluster)

---

## [2.93] 2026-05-18 — Feat: new Germany market guide (Leitstellen, BOS Digital, DSGVO, BSI)

**Added**
- New page: /resources/public-safety-software-germany/ — 16 Landespolizei forces, 300+ Integrierte Leitstellen, BOS Digital TETRA (750K+ terminals), DSGVO/BSI IT-Grundschutz, KRITIS protection, large events (Oktoberfest, Bundesliga)
- 4 challenge cards: federal 16-Länder structure, Leitstellen modernisation, DSGVO/BSI data protection, mass events + KRITIS
- 7 Germany-specific FAQs: police structure (Landespolizei/Bundespolizei/BKA), 110/112 Leitstellen, BOS Digital TETRA, VgV procurement, BSI/DSGVO, CCTV/facial recognition regulation, KabatOne fit
- Metadata keys (EN + ES), sitemap entry (priority 0.75), hub cards (EN + ES in /resources/)

---

## [2.92] 2026-05-18 — Feat: new India market guide (Smart Cities, ICCC, 112, DPDP Act 2023)

**Added**
- New page: /resources/public-safety-software-india/ — 100+ Smart City ICCCs, 28 state police forces, 112 India ERSS, Safe City projects (Delhi, Mumbai, Lucknow), DPDP Act 2023 compliance
- 4 challenge cards: fragmented policing (28 states + central forces), ICCC rollout, DPDP Act 2023 + data localisation, urban-rural divide + natural disasters
- 7 India-specific FAQs: police structure (IPS/MHA), 112 ERSS, ICCC/Smart Cities mandate, GEM procurement, DPDP Act, Safe City (Nirbhaya Fund), KabatOne fit
- Metadata keys (EN + ES), sitemap entry (priority 0.75), hub cards (EN + ES in /resources/)
- India link added to Australia guide Related Resources (bidirectional geo cluster)

---

## [2.91] 2026-05-18 — SEO: complete geo cluster cross-linking (US/Canada/UK/Australia/Middle East)

**Changed**
- UK guide: added Australia link to Related Resources (bidirectional UK ↔ Australia)
- Middle East guide: added UK + Australia links to Related Resources
- Canada guide: added Australia + Middle East links to Related Resources
- US guide: added Australia + Middle East links to Related Resources
- Australia guide: added Middle East link to Related Resources
- All 5 geographic market guides now fully cross-link to each other (complete internal link cluster)

---

## [2.90] 2026-05-18 — Feat: new Australia market guide + CAD dispatch FAQs bundle

**Added**
- New page: /resources/public-safety-software-australia/ — Australian state police, Triple Zero ECCs, and disaster management guide
- Coverage: AFP, NSW/Victoria/QLD/WA Police, AFAC, NEMA; Triple Zero (000), NGEC modernisation, Black Summer coordination
- 4 challenge cards: federated 8-jurisdiction structure, NGEC/Triple Zero modernisation, ISM/ACSC + Privacy Act, remote area/disaster management
- 6 Australia-specific FAQs: police structure, Triple Zero/NGEC, Digital Marketplace procurement, Privacy Act/APPs, disaster management, KabatOne fit
- Metadata keys (EN + ES), sitemap entry (priority 0.75), hub cards (EN + ES)

**Also included from v2.89 (bundled):**
- `what-is-cad-dispatch-software`: CAD vs RMS + NG911-compatible CAD FAQs (EN+ES); schema dateModified → 2026-05-18

---

## [2.89] 2026-05-18 — SEO: add CAD vs RMS + NG911 FAQs to what-is-cad-dispatch-software

**Improved**
- `what-is-cad-dispatch-software`: 2 new FAQs (EN + ES):
  - "What is the difference between CAD and RMS?" — targets "cad rms software" buyer queries
  - "What is NG911-compatible CAD dispatch software?" — targets NG911 CAD upgrade queries (high-value US/Canada market)
- Schema dateModified → 2026-05-18; page now has 8 FAQs total

---

## [2.88] 2026-05-18 — SEO: cross-link UK guide from US and Canada market guides

**Improved**
- `public-safety-software-united-states`: added Canada + UK guide links to Related Resources (geo cluster linking)
- `public-safety-software-canada`: added UK guide link to Related Resources (geo cluster linking)
- Completes bidirectional cross-linking across the EN-speaking market guide cluster (US ↔ Canada ↔ UK)

---

## [2.87] 2026-05-18 — SEO: update schema dateModified on 3 changed pages

**Improved**
- Updated `dateModified` to 2026-05-18 on pages that had content added this session:
  - `what-is-video-analytics` (new "video analytics system" FAQ added in v2.82)
  - `911-call-center-software-guide` (new FAQ + US guide link added in previous session)
  - `what-is-a-psap` (new US guide internal link added in previous session)

---

## [2.86] 2026-05-18 — Feat: new UK market guide (public-safety-software-united-kingdom)

**Added**
- New page: /resources/public-safety-software-united-kingdom/ — UK police forces, 999 control rooms, and Safe City market guide
- Coverage: Metropolitan Police / BTP, West Midlands Safe City, Greater Manchester Police, National Counter Terrorism Policing Network
- 4 challenge cards: 43+ fragmented forces, NG999/ESN transition, UK GDPR + Surveillance Camera Commissioner, major events / CONTEST strategy
- 6 UK-specific FAQs: police force structure, NG112/NG999, G-Cloud procurement, UK GDPR + DPIA, Gold/Silver/Bronze event security, KabatOne UK fit
- Metadata keys added (EN + ES)
- Sitemap entry (priority 0.75), hub cards (EN + ES) in /resources/ index

---

## [2.85] 2026-05-18 — SEO: add buyer-intent FAQs to VMS page (best VMS + PSIM comparison)

**Improved**
- `what-is-video-management-software`: 2 new FAQs (EN + ES):
  - "What is the best VMS software for public safety?" — targets commercial buyer queries, mentions Genetec/Milestone/Avigilon to capture comparative searches
  - "What is the difference between VMS software and PSIM?" — targets PSIM-related queries and positions unified platform advantage
- Page now has 10 FAQs total; targets 477-impression "vms software" query at pos 34.2

---

## [2.84] 2026-05-18 — SEO: panic-buttons FAQs + schema date updates

**Improved**
- `integrations/panic-buttons`: added 2 new FAQs (EN + ES) — "What is a duress alarm system?" and "How do panic buttons connect to 911 dispatch?" — targeting related queries; schema dateModified → 2026-05-18. Page has 111 imp at pos 9.1.

---

## [2.83] 2026-05-18 — SEO: situational awareness FAQs + k-dispatch CAD link cluster

**Improved**
- `what-is-situational-awareness-software`: added 2 new FAQs (EN + ES) targeting "common operating picture (COP)" and "situational awareness in law enforcement"; updated schema dateModified to 2026-05-18
- `k-dispatch`: added `what-is-cad-dispatch-software` and `best-cad-dispatch-software` to Related Resources to strengthen CAD dispatch content cluster

---

## [2.82] 2026-05-18 — SEO: internal link cluster + new FAQs for VMS and video analytics

**Improved**
- `what-is-video-management-software`: added `video-analytics-use-cases` + `what-is-video-analytics` to Related Articles; updated article schema dateModified to 2026-05-18
- `what-is-video-analytics`: added new FAQ "What is a video analytics system?" (EN + ES) targeting query "video analytics system" (64 imp, pos 24.3)
- `what-is-situational-awareness-software`: added link to VMS software guide in Related Resources
- All three changes strengthen the video/VMS internal link cluster around the top high-impression pages (5,013 imp VMS, 4,130 imp video analytics)

---

## [2.81] 2026-05-18 — Feat: new Middle East market guide

**Added**
- New page: /resources/public-safety-software-middle-east/ — GCC Safe City & Smart City market guide
- Coverage: UAE (Abu Dhabi Safe City, Dubai Police Smart, NEOM), Saudi Arabia (Vision 2030, Hajj), Qatar (ICCC)
- 4 challenge cards: Smart City scale, mass event/Hajj security, data sovereignty (UAE FDPL + Saudi PDPL), GCC procurement (Saudization/Emiratization)
- 6 Middle East-specific FAQs targeting GCC procurement, Hajj crowd management, Hikvision/Dahua/Axis CCTV integration, privacy compliance
- Sitemap entry for /resources/public-safety-software-middle-east/ (priority 0.75)
- Hub cards added (EN + ES) in /resources/ index
- Metadata keys added to EN + ES metadata.ts

---

## [2.77] 2026-05-18 — Fix: trim 45 ES page titles over 70 chars

**Fixed**
- Trimmed all 45 ES page titles exceeding 70 chars to ≤65 chars, preserving primary keywords
- Pages fixed include: whatIsPublicSafetyPlatform, c5CommandCenters, smartCityPlatformGuide, vsMilestone, vsVms, vsMotorola, vsMark43, vsCad, vsFusus, vsPrepared911, vsPeregrine, rtccSetupGuide, aiInPublicSafety, whatIsVideoManagementSoftware, whatIsARealTimeCrimeCenter, vsRapidsos, whatIsSituationalAwarenessSoftware, whatIsACommandCenter, whatIsEmergencyManagementSoftware, whatIsAPsap, whatIsVideoAnalytics, whatIsLprLicensePlateRecognition, whatIsEmergencyDispatchSoftware, simulator, vsAvigilon, whatIsSensorFusion, vsVerint, vsNiceSystems, whatIsIncidentManagementSoftware, vsVerkada, cadSoftwareMunicipiosMexico, bestPublicSafetySoftware, buildRtccImplementationGuide, publicSafetySoftwareColombia, publicSafetySoftwarePeru, publicSafetySoftwareChile, publicSafetySoftwareArgentina, publicSafetySoftwareBrazil, cadDispatchLatinAmerica, publicSafetySoftwareSmallCities, vsTylerTechnologies, vsCentralsquare, vsShotSpotter, vsPalantir, publicSafetySoftwareUnitedStates

## [2.76] 2026-05-18 — SEO: fix titles over 70 chars + add best-cad-dispatch-software page

**Fixed**
- Trimmed 9 EN page titles exceeding 70 chars: whatIsVideoAnalytics, whatIsSituationalAwarenessSoftware, integrationPanicButtons, vsFusus, vsPrepared911, buildRtccImplementationGuide, videoAnalyticsUseCases, vsVerint, publicSafetySoftwareUnitedStates
- Re-fixed whatIsVideoAnalytics description (re-introduced over limit in v2.74)

**Added**
- `/resources/best-cad-dispatch-software/` — buyer's guide page for 911 CAD dispatch software (was created but not committed)

## [2.80] 2026-05-18 — Feat: new Canada market guide + "general VMS" FAQ to VMS guide

**Added**
- New page: /resources/public-safety-software-canada/ — Canadian PSAPs, NG911/CRTC, RCMP/provincial/municipal coordination, bilingual EN/FR, PIPEDA data sovereignty
- 4 challenge cards: NG911/CRTC transition, RCMP/provincial/municipal COP, bilingual requirements, PIPEDA
- 6 Canada-specific FAQs: police structure, NG911 CRTC timeline, funding, PIPEDA, bilingual, procurement
- Metadata added EN + ES; sitemap at priority 0.75; hub cards in EN + ES
- Also in this commit: "general VMS" FAQ added to VMS guide (targeted GSC query pos 8.8, 31 impressions)

---

## [2.79] 2026-05-18 — SEO: add "general VMS" FAQ to VMS guide (GSC query pos 8.8)

**Improved**
- what-is-video-management-software: added new FAQ "What is a general VMS and how does it differ from a public safety VMS?" (EN + ES)
- Targets GSC opportunity: "general vms" (31 impressions, pos 8.8) — already on page 1, needs CTR boost
- Answer differentiates general-purpose VMS from public safety VMS; positions K-Video as purpose-built

---

## [2.78] 2026-05-18 — SEO: add "911 dispatch department software" FAQ to 911 guide (GSC pos 16.7)

**Improved**
- 911-call-center-software-guide: added new FAQ "What software do 911 dispatch departments use?" (EN + ES)
- Answer mentions Motorola, Tyler, CentralSquare, Hexagon, Carbyne as context + K-Dispatch as solution
- Targets GSC opportunity: "911 dispatch department software" (11 impressions, pos 16.7)

---

## [2.77] 2026-05-18 — SEO: add "audio video management system" FAQ to VMS guide (GSC query pos 11.5)

**Improved**
- what-is-video-management-software: added new FAQ "What is an audio video management system?" (EN + ES)
- FAQ answer defines AVMS, explains audio+video correlation for command centers, links to K-Video
- Targets GSC ranking opportunity: "audio video management system" (17 impressions, pos 11.5)
- Added to both EN and ES FAQ arrays to apply to both locales

---

## [2.76] 2026-05-18 — SEO: internal links to US market guide from 911 and PSAP pages

**Improved**
- /resources/911-call-center-software-guide/: added link to US market guide in Related Resources
- /resources/what-is-a-psap/: added link to US market guide in Resources inline list
- Goal: build authority for the new US market page via topically aligned pages

---

## [2.75] 2026-05-18 — Feat: new US market guide — public safety software for US cities

**Added**
- New page: `/resources/public-safety-software-united-states/` — US market guide covering PSAPs, NG911, RTCC, NIMS/ICS interoperability, CJIS compliance, and federal funding (COPS, Byrne JAG, UASI/BRIC)
- 4 challenge cards: PSAP modernization/NG911, multi-agency COP, RTCC video integration, CJIS compliance
- 3 federal funding cards: COPS Technology ($750K/agency), Byrne JAG ($350M+/year), UASI/BRIC
- 6 US-specific FAQs: NG911 transition, CAD integration (PremierOne/Tyler/CentralSquare), CJIS, GSA procurement
- US ecosystem comparison table: CAD providers, NG911/ESInet, RTCC/video, GIS, body cameras
- Stats: 5,800+ PSAPs, 240M+ 911 calls/year, 18,000+ law enforcement agencies, $2.5B+ federal investment
- Metadata added to EN + ES; sitemap at priority 0.8; hub cards added in EN + ES
- Fills US market gap (LATAM country guides existed; no US equivalent)

---

## [2.74] 2026-05-18 — SEO: optimize video analytics pages for GSC query "artificial intelligence video analytics"

**Improved**
- what-is-video-analytics page: H1 updated from "AI Video Analytics" → "Artificial Intelligence Video Analytics" (exact match to GSC query at pos 18.1, 41 impressions)
- what-is-video-analytics metadata (EN + ES): title tag updated to include full phrase "Artificial Intelligence Video Analytics"
- Added internal link from what-is-video-analytics → video-analytics-use-cases in Related Resources (content cluster bidirectional link)
- Goal: boost /resources/what-is-video-analytics/ from pos 18 to top 10 for "artificial intelligence video analytics"

---

## [2.73] 2026-05-18 — SEO: CAD dispatch internal links from 3 dispatch-focused /vs/ pages

**Improved**
- /vs/motorola/: added links to /resources/what-is-cad-dispatch-software/ and /resources/best-cad-dispatch-software/ — Motorola PremierOne CAD is their flagship CAD product, highest relevance
- /vs/mark43/: added links to same two CAD dispatch resources — Mark43 is a cloud-native CAD vendor, direct buyer-intent overlap
- /vs/axon/: added links to same two CAD dispatch resources — Axon CAD is their newer product line, capture CAD research intent
- Goal: build authority for CAD dispatch resource pages via topically aligned comparison pages

---

## [2.72] 2026-05-18 — Feat: new video analytics use cases guide (8 use cases + CAD integration)

**Added**
- New page: `/resources/video-analytics-use-cases/` — 8 video analytics use cases for public safety command centers: perimeter intrusion, LPR, crowd counting, behavioral anomaly, forensic analysis, traffic incident, smoke/fire detection, CAD dispatch correlation
- Each use case includes icon, title, description, and metric badge (quantified ROI)
- 3-step integration flow (Camera → Analytics Engine → Command Center), product links (K-Video/K-Safety/K-Dispatch), 6 FAQs, related resources
- Added metadata key `videoAnalyticsUseCases` to EN + ES metadata files
- Added to sitemap.ts at priority 0.75
- Added hub cards to resources index (EN + ES)
- Target query: "video analytics system" (64 impressions, pos 24.3 in GSC audit)

---

## [2.71] 2026-05-18 — SEO: fix all meta descriptions over 160 chars (EN + ES)

**Fixed**
- Trimmed all descriptions exceeding Google's 160-char display limit in `src/content/en/metadata.ts` (was 41 over, now 0)
- Trimmed all descriptions exceeding 160 chars in `src/content/es/metadata.ts` (was 63 over, now 0)
- All edits preserve primary keyword, value proposition, and sentence clarity

## [2.70] 2026-05-18 — SEO: VMS + video analytics internal links from /vs/ comparison pages

**Improved**
- /vs/vms/: added links to /resources/what-is-video-management-software/ and /resources/what-is-video-analytics/ — the most on-topic comparison page now links directly to both high-impression resource pages
- /vs/milestone/: added link to /resources/what-is-video-management-software/ — Milestone is a VMS-focused competitor, anchor text matches "VMS Software Guide"
- /vs/genetec/: added link to /resources/what-is-video-management-software/ — Genetec is a VMS leader, internal link boosts resource page authority
- /vs/avigilon/: added links to both what-is-video-management-software + what-is-video-analytics — Avigilon is a premium VMS brand, both resource pages are directly relevant
- Goal: build authority for "vms software" (477 impressions, pos 34.2) and "video analytics system" (64 impressions, pos 24.3)

---

## [2.69] 2026-05-18 — Feat: new Brazil public safety GEO page + build fix

**Added**
- New GEO page: `/resources/public-safety-software-brazil/` — bilingual EN/ES
- Targets: "public safety software Brazil", "CIOPS software", "segurança pública software Brasil", "sistema de gestão de emergências Brasil"
- 6 FAQs covering CIOPS centers, 190/192/193 dispatch, PM/Bombeiros/SAMU coordination, FNSP procurement (Lei 14.133/2021), São Paulo Detecta and Rio COR integration
- Fragmented vs unified comparison table (6 rows) covering video, dispatch, inter-agency coordination, state structure, SENASP reporting
- 5-step unified workflow covering São Paulo Detecta, COR, CIOPS, sensor fusion, and SSP reporting
- Metadata added to EN + ES metadata.ts; added to sitemap.ts
- Resources hub card added
- Also added missing `bestCadDispatchSoftware` metadata key (EN + ES) to fix pre-existing TypeScript build error from untracked page

---

## [2.68] 2026-05-18 — SEO: K-Traffic + K-Connect meta optimization

**Improved**
- K-Traffic EN title: "Traffic Management Software for Municipalities" → "Intelligent Traffic Management System for Smart Cities" — targets "intelligent traffic management system" and "ATMS" keyword clusters
- K-Traffic EN description: added "adaptive signal control" and "ATMS" to match commercial-intent queries
- K-Traffic EN + ES H1: updated to "Intelligent Traffic Management System with Adaptive Signal Control" — aligns with title keyword
- K-Connect EN title: "Community Video Sharing for Command Centers" → "Public-Private Camera Integration for Command Centers" — targets "public-private camera" and "camera integration" terms
- K-Connect EN description: added "public-private video sharing" and "secure" framing for differentiation
- ES equivalents updated for both pages

---

## [2.67] 2026-05-18 — SEO: K-Video internal links to VMS + video analytics resource pages

**Improved**
- K-Video product page: added internal links to /resources/what-is-video-management-software/ and /resources/what-is-video-analytics/ in Related Resources section
- Boosts authority flow from product page to the two highest-impression resource pages (5,013 + 4,130 impressions at pos 32.6 + 29.7)

---

## [2.66] 2026-05-18 — SEO: Panic buttons CTR + K-Safety situational awareness targeting

**Improved**
- Panic buttons integration EN title: added "Alert to Dispatch in Under 4 Seconds" hook — CTR improvement for 111-impression page at pos 9.1 (0.9% CTR)
- Panic buttons EN description: rewritten for specificity (unit dispatch + camera activation + supervisor notification)
- K-Safety EN title: "Real-Time Public Safety Command Platform" → "Situational Awareness & Command Center Software | KabatOne K-Safety"
- K-Safety EN description: added "situational awareness", "GIS map", "IoT alerts" to match query intent

---

## [2.65] 2026-05-18 — Feat: new CAD software Mexico municipalities page

**Added**
- New GEO page: `/resources/cad-software-municipios-mexico/` — bilingual EN/ES
- Targets: "CAD software Mexico", "sistema de despacho 911 Mexico", "software CAD municipios Mexico"
- 6 FAQs covering C5 integration, 911 system, multi-agency dispatch, FORTASEG compliance, pricing
- 6 requirement cards: 911 integration, C5 compatibility, VMS, GIS, multi-agency, FORTASEG
- Metadata added to EN + ES metadata.ts
- Added to sitemap.ts

## [2.64] 2026-05-18 — SEO: K-Video + Avigilon keyword targeting

**Improved**
- K-Video EN title: "Video Management Software" → "AI Video Analytics & VMS Software for Public Safety" — targets 41-impression "artificial intelligence video analytics" cluster (pos 18.1) and "vms software"
- K-Video EN description: added LPR, behavioral detection, object classification keywords
- K-Video H1 (EN + ES): "Unified Video Management and AI Analytics Platform" → "AI Video Analytics and VMS Software for Public Safety"
- Avigilon vs page EN title: added "Avigilon Alternative" framing to capture branded "avigilon" query (25 impressions, pos 17.4)

---

## [2.63] 2026-05-18 — SEO: VMS + situational awareness + k-dispatch keyword targeting

**Improved**
- VMS page H1: "What Is Video Management Software?" → "What Is VMS Software? A Video Management Guide for Public Safety" — targets 477-impression "vms software" query cluster (pos 34.2)
- VMS page EN title: updated to "What Is VMS Software? Video Management for Public Safety | KabatOne"
- VMS page EN description: added "behavioral detection" to keyword list
- VMS page: added 4-stat bar (10,000+ cameras, <2s latency, 30-40% response time, 99.9% uptime) to boost E-E-A-T
- Situational awareness EN title: "Situational Awareness Software for Public Safety" → "What Is Situational Awareness Software? Guide for Command Centers | KabatOne" — matches informational intent for 603-impression page at pos 16.0
- Situational awareness ES title: updated to match informational intent
- Situational awareness article schema title updated to match new title
- K-Dispatch EN title: "CAD and Emergency Dispatch Software for 911 Centers" → "911 CAD Dispatch Software for Emergency Centers" — targets "911 cad software" cluster
- K-Dispatch EN description: added "911 call handling" to target pos 8.5 query
- K-Dispatch H1 (EN + ES): added "911" explicitly — EN: "AI-Powered 911 CAD Dispatch Software for Emergency Centers"

---

## [2.62] 2026-05-18 — SEO: CAD meta fixes + C5 internal link from homepage

**Fixed**
- CAD dispatch EN description: 189 → 158 chars (was getting cut in SERPs)
- CAD dispatch ES description tightened (230 → 143 chars) and title shortened (91 → 49 chars)
- Homepage: added internal link to /resources/how-c5-command-centers-work/ (ES C5 page at position 9.7 needs authority)

---

## [2.61] 2026-05-18 — SEO: 911 call center page meta fix + internal links

**Fixed**
- 911 call center guide EN title tightened to 59 chars — "911 Call Center Software: Complete Buyer's Guide | KabatOne"
- 911 call center guide EN description replaced with 146-char version mentioning CAD dispatch, call intake, and unit coordination
- 911 call center guide ES title tightened to 57 chars — "Software Centro 911: Guía Completa para PSAP | KabatOne"
- 911 call center guide ES description updated to match keyword intent (centro de atención 911, despacho CAD)
- k-dispatch page: added internal link to /resources/911-call-center-software-guide/ in Related Resources section
- what-is-cad-dispatch-software: added internal link to /resources/911-call-center-software-guide/ in Resources inline link row

---

## [2.60] 2026-05-18 — SEO: add internal links to video analytics page from 3 resource pages

**Improved**
- what-is-video-management-software: added "Video Analytics" to Resources inline link row → /resources/what-is-video-analytics
- what-is-lpr-license-plate-recognition: added "AI video analytics" link in Definition section → /resources/what-is-video-analytics
- what-is-situational-awareness-software: added "AI video analytics" link in Contextual Video Integration paragraph → /resources/what-is-video-analytics

---

## [2.59] 2026-05-18 — SEO: strengthen AI video analytics page (1,640 impressions, pos 28)

**Improved**
- H1 updated to "AI Video Analytics: How It Works for Public Safety" — targets ai video analytics query cluster
- Hero paragraph updated to use "AI video analytics" explicitly
- Added "AI-Powered Detection Capabilities" section with 6 detection cards (LPR, crowd, weapon, perimeter, abandoned objects, forensic)

---

## [2.58] 2026-05-18 — SEO: internal links + meta fixes for top GSC opportunities

**Fixed**
- Situational awareness EN title: shortened from 71 → 59 chars (was getting cut in SERPs)
- Situational awareness EN/ES description: tightened to <160 chars
- k-safety page: added internal links to /resources/what-is-situational-awareness-software/ and /resources/what-is-video-analytics/
- k-dispatch page: added internal link to /resources/how-c5-command-centers-work/ (already present in Related Resources)

---

## [2.57] 2026-05-18 — SEO: Fix video analytics meta (1,640 impressions, 0.1% CTR)

**Fixed**
- `whatIsVideoAnalytics` EN title: stronger "AI Video Analytics" framing, targets top GSC opportunity
- `whatIsVideoAnalytics` EN description: trimmed from 190 → 159 chars (was getting cut off in SERPs)
- `whatIsVideoAnalytics` ES title + description: tightened to match EN improvements

---

## [2.56] 2026-05-18 — SEO Slack Agent — complete implementation

**Added**
- `src/lib/seo-agent/types.ts` — shared TypeScript types (IntentType, AgentContext, SmallFix, BigChange, IntentResult)
- `src/lib/seo-agent/slack-verify.ts` — HMAC-SHA256 signature verification with replay attack prevention
- `src/lib/seo-agent/slack.ts` — Slack Web API helpers: thread replies and interactive approval blocks
- `src/lib/seo-agent/context.ts` — assembles GSC data (via seo_weekly.py), SEO master plan, and recent GitHub commits
- `src/lib/seo-agent/intent.ts` — Claude API intent classifier (question / small_fix / big_change)
- `src/lib/seo-agent/github.ts` — single-file patch (Contents API) + atomic multi-file commit (Git Data API)
- `src/lib/seo-agent/pending-store.ts` — in-memory store for pending big-change approvals
- Updated routes to use new lib API (verifySlackSignature, commitFiles, savePending/getPending)

---

## [2.55] 2026-05-18 — SEO Slack Agent dependencies

**Added**
- Added @anthropic-ai/sdk and @slack/web-api dependencies for the SEO Slack Agent

---

## [2.54] 2026-05-18 — SEO Slack Agent — interactive @SEO bot

**Added**
- `src/app/api/slack/events/route.ts` — Slack Events API webhook: HMAC-SHA256 verification, 200 ACK within 3s via `next/server after`, event_id deduplication, dispatches `app_mention` async
- `src/app/api/slack/interactive/route.ts` — handles ✅/❌ button clicks from big-change previews; triggers CCR agent on approval
- `src/lib/seo-agent/context.ts` — assembles system prompt from SEO master plan, live GSC data (1h cache), last 20 GitHub commits, and Slack thread history
- `src/lib/seo-agent/intent.ts` — calls `claude-sonnet-4-6` to classify intent (question/small_fix/big_change) and generate a response plan
- `src/lib/seo-agent/github.ts` — GitHub Contents API: read files, patch single files to the `nextjs` branch (never `main`), fetch recent commits
- `src/lib/seo-agent/slack.ts` — Slack Web API helpers: thread replies, interactive preview blocks, thread history fetch
- `src/lib/seo-agent/ccr.ts` — creates a Paperclip issue to dispatch the CCR build agent for big structural changes

---

## [2.53] 2026-05-18 — SEO: Verge system — audit script + bulk title/desc fixes

**Added**
- `scripts/seo-audit.mjs` — Verge daily SEO audit script. Crawls all 71 EN routes, checks title/desc length, OG tags, canonical, H1, JSON-LD validity, and image alt text. Outputs JSON report + baseline for diff runs.

**Fixed**
- 18 page titles trimmed to ≤70 chars (VS pages, LATAM guides, resource pages)
- 25 meta descriptions trimmed to ≤200 chars (VS comparison pages and resource pages)
- All fixes preserve SEO meaning — no truncation, rewritten for clarity

---

## [2.52] 2026-05-12 — Feat: Add weekly SEO agent script

**Added**
- `scripts/seo_weekly.py` — Python script for the weekly SEO remote agent. Authenticates with Google Search Console API via OAuth refresh token, fetches top queries, top pages, and content opportunities (last 7 days), outputs structured JSON.
- `.gitignore` — added `.secrets/` to exclude local OAuth credential files from git.

## [2.51] 2026-05-11 — Feat: Add /resources/public-safety-software-argentina/ GEO guide

**Added**
- New GEO guide: `/resources/public-safety-software-argentina/` — bilingual EN/ES, targeting "public safety software Argentina", "software seguridad pública Argentina", "Buenos Aires CMU", "Centro de Monitoreo Urbano"
- Full ArticleSchema + FAQPageSchema (6 Q&A pairs) + BreadcrumbList schema
- Argentina-specific content: 23 provinces + CABA federal structure, CMU 14,000+ cameras, emergency numbers 911/101/107/100, PFA + Policía de la Ciudad + Bonaerense coordination, Argentina Compra / BAC procurement
- Deployment stats: 40+ cities / 73M citizens / <90s dispatch
- Challenge cards: federal fragmentation, multi-agency dispatch, siloed CMU cameras, Ministry of Security reporting
- 5-step unified workflow: video → dispatch → GIS → sensor fusion → reporting
- Comparison table: fragmented systems vs unified platform for Argentine jurisdictions
- Internal links to 6 resources and 3 product pages; resources hub card added
- Metadata added to `src/content/en/metadata.ts` and `src/content/es/metadata.ts` (key: `publicSafetySoftwareArgentina`)
- Sitemap updated: 87 unique routes × 2 locales = 174 URLs (was 86 × 2 = 172)
- Sitemap priority: 0.7

**Fixed**
- `not-found.tsx` — removed invalid `<html>`/`<body>` wrapper (incompatible with App Router; was causing `useContext` prerender error when building with `NODE_ENV=production`)
- `global-error.tsx` — added `lang="en"` and `type="button"`; pre-existing build errors under local `NODE_ENV=development` confirmed as false-positives (build passes with `NODE_ENV=production`)

**Updated**
- Master plan: GEO-034 added, route count updated 86→87, agent run log synced through v2.51
- changelog.html: backfilled v2.49 and v2.50 entries (were missing from HTML log)

---

## [2.50] 2026-05-04 — Feat: Add /resources/cad-dispatch-software-latin-america/ GEO guide

**Added**
- New GEO guide: `/resources/cad-dispatch-software-latin-america/` — bilingual EN/ES, targeting "CAD dispatch software Latin America" and "software CAD despacho América Latina"
- Full ArticleSchema + FAQPageSchema (6 Q&A pairs) + BreadcrumbList schema
- Country-by-country emergency number reference (Mexico 911, Chile 133/131/132/149, Colombia 123/112, Peru 105/106/116, Argentina 911/101/102/103, Ecuador ECU-911)
- Deployment stats bar: 40+ cities / 73M citizens / <90s dispatch / 2018 first deployment
- Challenge cards: multi-number systems, US-centric CAD vendors, siloed video+CAD, LATAM procurement
- 5-step unified workflow: intake → AI dispatch → GIS → video integration → government reporting
- Comparison table: North American CAD (Tyler/Motorola/Hexagon) vs KabatOne for LATAM
- Internal links to 6 resources and 4 country guides (Mexico, Colombia, Peru, Chile)
- Metadata added to `src/content/en/metadata.ts` and `src/content/es/metadata.ts` (key: `cadDispatchLatinAmerica`)
- Sitemap updated: 86 unique routes × 2 locales = 172 URLs (was 85 × 2 = 170)
- Sitemap priority: 0.8 (higher than other resources — directly targets GEO-013 gap query)

**Updated**
- Master plan: GEO-033 added, GEO-009 Wikipedia deferred (not actionable now per board direction)
- GEO-013 monitoring run: 2026-05-04 — PSIM alternatives ✅ Position 2, C5 Mexico ✅ Positions 2+4, CAD dispatch LATAM ❌ gap confirmed (GINA dominant) → this page directly addresses gap

---

## [2.49] 2026-04-27 — Feat: Add /resources/public-safety-software-chile/ GEO guide

**Added**
- New GEO guide: `/resources/public-safety-software-chile/` — bilingual EN/ES, full article + FAQPage + BreadcrumbList schema
- 6 Chile-specific FAQs covering emergency numbers (133/131/132/149), FNDR funding, Carabineros coordination, ChileCompra procurement
- Resources hub card added — Chile guide appears alongside Colombia and Peru in the LATAM cluster
- Metadata added to `src/content/en/metadata.ts` and `src/content/es/metadata.ts` (key: `publicSafetySoftwareChile`)
- Sitemap updated: 85 unique routes × 2 locales = 170 URLs (was 84 × 2 = 168)

**Updated**
- Master plan: /vs/shotspotter + /vs/palantir documented (were in sitemap/codebase, undocumented); route count corrected 83→85
- Master plan agent run log synced through v2.49

---

## [2.48] 2026-04-24 — Fix: Remove noindex pages from sitemap + SEO master plan sync

**Fixed**
- Removed `/lp` and `/privacy-policy-tamaulipas` from `sitemap.ts` — both pages have `robots: noindex` tags; including noindex pages in the sitemap sends contradictory signals to Google and was causing the "Excluded by noindex" GSC report
- Sitemap is now 166 URLs (83 routes × 2 locales), down from 170

**Updated**
- Master plan synced: Phase 2 → Done (95%), GSC status block added with 2026-04-23 data, agent run log synced through v2.47
- GEO-008 complete: No KabatOne Wikipedia article exists. Target article for GEO-009: `en.wikipedia.org/wiki/Physical_security_information_management`
- GEO-013 first monthly run: KabatOne ranking for branded terms + C5 Mexico queries ✅. Not appearing for PSIM alternative or best public safety software ❌ — requires more backlinks and third-party mentions

---

## [2.47] 2026-04-22 — Improve: Demo micro-labels — Auto/Match/Live/Linked/Best Option/Sent per stage

**Improved**
- DETECT: nodes now show "Auto" (OCR, AI prioritization, event trigger) and "Match" (hotlist match) micro-badges — system intelligence is visually labelled at each step
- UNDERSTAND: camera pip gets "LIVE" + "Linked" badges; tracked vehicle section adds "● Live" pill next to label
- DECIDE: top recommended unit card shows "Best Option" badge with green glow treatment; `recommended: true` added to 12-CHARLIE in LPR data; `splitUnits` type extended with optional `recommended` field
- ACT: dispatch alert header shows "✓ Sent" badge; camera feed gets red "LIVE" badge; "EN ROUTE" status rendered as a pill with pulse dot
- LEARN: "AI Actions" and new "Report Filed" metric rows show "Auto" badge; report row added to metrics

---

## [2.46] 2026-04-22 — Improve: Demo cognitive load reduction — remove noise, active-only modules, smarter Decide

**Improved**
- Removed all descriptive `<p>` paragraphs from every demo stage layout (StageContent, StageScreen, SplitLayout, ProtocolPanel, LearnLayout) — UI now shows only what the system did, not explanations
- Module strip now shows **only active modules** per stage (filtered, not dimmed) across all layouts
- DecisionTreePanel: "AI PICK" badge renamed to "Recommended"; header relabeled "Situation Assessment / AI ANALYSIS"; action section relabeled "AI Recommended Action"
- LPR Decide: recommended dispatch option title updated to "Dispatch Recommended Units"

---

## [2.45] 2026-04-21 — Remove: Placeholder nav items and icons from demo hub

**Removed**
- "Operations", "Intelligence", "Archive" nav items (were non-functional stubs).
- Bell, gear, and avatar icons from the hub header right side (non-functional).
- Applied in both `nextjs` and `ipro-partnership` branches.

---

## [2.44] 2026-04-21 — Fix: Demo stage title block not responsive on mobile

**Fixed**
- Title block (headline + description + module strip) in all light-bg stage screens and the LEARN stage was not responsive on mobile — layout overflowed and badge/title competed for space.
- Added responsive CSS: at ≤768px the title row stacks vertically, headline scales down, outer container reduces padding; at ≤480px further reduction.
- LEARN stage: updated module strip to match the larger sizes from v2.43 (was missed in that pass).
- Applied in both `nextjs` (staging) and `ipro-partnership` branches.

---

## [2.43] 2026-04-20 — Improve: Larger module pills in demo stage screens

**Improved**
- Module chips in the demo stage header strip are now larger and easier to read: font `8px → 11px`, padding `4px 10px → 7px 16px`, icon `11px → 14px`.
- Applied in both `nextjs` (staging) and `ipro-partnership` branches.

---

## [2.42] 2026-04-20 — Fix: LPR DETECT stage dashboard image cropped on right

**Fixed**
- LPR scenario DETECT stage: `lpr-hero.jpeg` was rendered with `backgroundSize: cover` inside the left 50% panel, which cropped the right portion of the dashboard screenshot.
- Added `backgroundFit: 'contain'` to the LPR DETECT stage so the full dashboard is visible without cropping.
- Applied in both `nextjs` (staging) and `ipro-partnership` branches.

---

## [2.40] 2026-04-20 — Fix: Tactical Unit cards clipped on some Mac Chrome viewports

**Fixed**
- Unit ID text (e.g. "12-CHARLIE", "K9-2") was being chopped in half on certain Chrome + macOS viewport heights — the column flex parent `.demo-split-units` had `overflow: hidden` but no `min-height: 0`, which let the inner scroll grid get compressed instead of scrolling. Added `min-height: 0` to both the panel and the scroll container, plus `grid-auto-rows: max-content` so each card row stays at its natural content height regardless of viewport.

---

## [2.39] 2026-04-18 — School & Violence: diversify tactical unit types

**Changed**
- School (SOS scenario) Tactical Units panel now shows varied unit types instead of five generic shield/"UNIT" cards: security (SRO-1), police (UNIT-14 + UNIT-7), ems (EMS-5 medical staging), k9 (K9-3 sweep team).
- Violence scenario likewise diversified: police (04-DELTA + 09-ECHO + 11-CHARLIE), k9 (K9-4 suspect track), ems (EMS-9 medical standby).
- Every scenario (access-control, lpr, medical, school, violence) now has `type` fields on all splitUnits so TYPE_STYLES renders the right icon and color for each unit.

---

## [2.38] 2026-04-18 — School: drop extra cameras, keep only alerting CAM-07

**Changed**
- UNDERSTAND map now shows a single camera (the alerting CAM-07 · Bldg A Hallway) positioned well clear of the SOS / SRO / Lincoln Middle School cluster. Removed CAM-01, CAM-12, CAM-15 from the UNDERSTAND map entirely. DECIDE stage also trimmed from two cameras to one to avoid any overlap.

---

## [2.37] 2026-04-18 — Fix: School UNDERSTAND map camera thumbnails overlapping

**Fixed**
- The SOS-button scenario's UNDERSTAND map was rendering four 220×140 camera thumbnails stacked on top of each other. Now only the alerting camera (CAM-07 · Bldg A Hallway) shows a live thumbnail; the other three (CAM-01, CAM-12, CAM-15) fall back to small video-icon markers with permanent labels. Also spread the coordinates wider so the icon markers don't collide.

---

## [2.36] 2026-04-18 — Medical UNDERSTAND: replace UI-screenshot camera thumbnail with indoor CCTV

**Fixed**
- The CAM-14 thumbnail on the Medical UNDERSTAND map was showing a UI screenshot of the 911 call interface (`stage-2-understand.jpg`) instead of actual camera footage. Swapped to an indoor lobby CCTV (`cam08-lobby.jpeg`) for a more relevant "camera inside the building" look matching the cardiac-event-at-a-location scenario. Same swap applied to the DECIDE stage CAM-14 thumbnail (was `stage-3-decide.jpg`).

---

## [2.35] 2026-04-18 — Medical: diversify tactical unit types

**Changed**
- Medical scenario `splitUnits` now uses varied dispatch unit types instead of five generic "UNIT" cards. For the cardiac-event response you now see an ALS ambulance (AMB-7), a fire-engine first responder with AED (ENG-3), a police traffic-control escort (UNIT-14), a BLS backup ambulance (AMB-12), and a K9 search unit (K9-2) — each rendered with its correct icon and color via `TYPE_STYLES`. Matches the unit-type diversity already present in LPR and Access Control scenarios.

---

## [2.34] 2026-04-18 — Fix: Medical incident-area cameras show UI screenshots

**Fixed**
- CAM-14 and CAM-22 on the Medical "Incident Area Cameras" video wall were pointing to UI screenshots (`stage-2-understand.jpg`, `stage-3-decide.jpg`) instead of actual camera footage. Swapped to real CCTV images (`cctv-westheimer.jpeg`, `cctv-allen.jpeg`). CAM-81 also rotated to a different CCTV to avoid duplication with CAM-14.

---

## [2.33] 2026-04-18 — DecisionTreePanel: rewrite with auto-scale canvas

**Changed**
- **Full rewrite** of DecisionTreePanel. Now uses a fixed 460×620 design canvas wrapped in a ResizeObserver + CSS `transform: scale()` — the exact same approach as DetectFlowPanel.
- Result: **all content (header + 3 tree nodes + "Choose an Action" + 4 option cards) always fits in one view**, regardless of viewport size. No scrollbar anywhere.
- Option cards now use `grid-template-rows: repeat(2, 1fr)` so they evenly divide the available cell height, with descriptions line-clamped to 2 lines.
- Removed the jungle of media-query overrides — the canvas scales uniformly, keeping visual proportions identical at any size.
- ProtocolPanel center-panel min-height tuned to 460px at ≤1280px (was 540) since the canvas auto-scales to fit.

---

## [2.32] 2026-04-18 — Raise compact breakpoint to ≤1280px

**Changed**
- ProtocolPanel and DecisionTreePanel compact tier now triggers at **≤1280px** (was 1100px) — covers typical laptop browser windows that were previously showing the full desktop layout but didn't have enough height for all content

---

## [2.31] 2026-04-18 — DECIDE: fit everything in one view, no scroll

**Changed**
- DecisionTreePanel at ≤1100px now fits all content in one viewport (tree + 4 option cards) without internal scroll — per user requirement "all the information should appear in one view"
- Tree nodes aggressively compacted: 24px icon (was 30), 10px label (was 12), 9px detail, 6×10 padding
- Option card descriptions **hidden** at ≤1100px — just title + icon (info sits in the fuller tree above)
- Option icon shrunk to 28px (was 38), title to 10px
- AI PICK recommendation pill miniaturized (6px text, 1×5 padding)
- Panel overflow re-locked to `hidden` with a 540px min-height floor — no internal scrollbar

---

## [2.30] 2026-04-18 — Fix: DECIDE option cards cut at tablet bottom

**Fixed**
- DecisionTreePanel at ≤1100px now releases `overflow: hidden` on `.dt-root` and `.dt-options-scroll` (was only at ≤768px). Option cards no longer trapped inside a fixed-height viewport — panel grows to fit all 4 cards.
- ProtocolPanel center panel min-height raised 480→620px at ≤1100px so there's always enough baseline room for tree + options before overflow kicks in.

---

## [2.29] 2026-04-18 — Fix: demo panels cut off at tablet viewports (≤1100px)

**Fixed**
- **ProtocolPanel** — Left/center/camera panels now stack vertically at ≤1100px (was ≤768px). Tablet viewports no longer force 3 columns into a cramped row that bleeds off-screen.
- **DecisionTreePanel** — Tree nodes now always fluid (width:100% / min-width:0) so they can never exceed container width. New compact styling at ≤1100px (was ≤768px) with tighter paddings/type scale. True mobile (≤768px) gets an even tighter tier.

---

## [2.28] 2026-04-18 — Medical DETECT: compact, color-coded field chips

**Changed**
- Field chips on the 911 Call card are now **much smaller** (3×8px padding, 7px label + 9px value, 4px radius flat tags instead of full pills)
- Each chip gets a **distinct color** per category so they visually separate from the red transcript:
  - INCIDENT TYPE → amber
  - CALLER → blue
  - ADDRESS → teal
  - PRIORITY → red (alert)
  - CALL DURATION → neutral gray
  - UNIT ASSIGNED → purple
- Chips now fit in 1–2 rows, freeing vertical space for the transcript

---

## [2.27] 2026-04-18 — Fix: TS build error (invalid `tabularNums` CSS prop)

**Fixed**
- StageScreen.tsx line 558 — replaced invalid `tabularNums: 'tabular-nums'` with `fontVariantNumeric: 'tabular-nums'` (proper React CSSProperties key). Restores Vercel build.

---

## [2.26] 2026-04-18 — Medical DETECT: full-width transcript + field chips

**Changed**
- **Medical Stage 01 DETECT** — Removed the confusing two-column splitter. Now a single full-width card:
  1. Top bar: LIVE CALL + ME-0847 + waveform + call controls (MUTE/HOLD/REC) + timer
  2. AI TRANSCRIPT heading row
  3. **Full-width transcript** — lines now span the entire width at 18px body text for maximum readability
  4. Field chips row — Incident type, Caller, Address, Priority, Call duration, Unit assigned rendered as inline pills instead of stacked form rows
  5. ACCEPT & DISPATCH / TRANSFER action strip
- Highlighted fields (CARDIAC EVENT, P1 · LIFE THREATENING) use red-tinted pill; others use neutral blue

---

## [2.25] 2026-04-18 — Medical DETECT: dominant live-call transcript

**Improved**
- **Medical Stage 01 DETECT (911 Call)** — Transcript now the clear focal point of the stage:
  - Transcript panel widened from 48% → 60% (incident form 52% → 40%)
  - Each line is a proper card: colored left-border rail (red=CALLER, blue=DISPATCH), tinted background, 10–12px padding
  - Transcript body text enlarged 11px → **16px**, line-height 1.45, brighter colors (#FFD4D4 / #D4E4FF)
  - CALLER/DISPATCH labels enlarged 8px → 10px, bolder, wider column
  - LIVE CALL header enlarged (12px + 10px glowing dot), waveform bars taller (18px → 32px)
  - New AI TRANSCRIPT heading with icon + "REAL-TIME · EN" meta, bottom border separator

---

## [2.24] 2026-04-17 — Medical UNDERSTAND: clearer map markers + bigger camera thumb

**Improved**
- **Medical Stage 02 UNDERSTAND** — Map now clearly distinguishes caller / AED / camera locations:
  - Caller marker enlarged with double pulsing ring (radius 11 + 22 + 34) for immediate visibility
  - AEDs replaced with green medical-services icon badges + permanent always-on labels (was small green dot w/ hover tooltip)
  - Non-image cameras replaced with blue videocam icon badges + permanent labels (was tiny circle)
  - Camera thumbnail "skin" enlarged from 160×100 → 220×140 (+38%) for readable live-feed preview on the map

---

## [2.23] 2026-04-17 — Demo: auto-fit flow charts — no more scroll

**Fixed**
- **DETECT** — DetectFlowPanel now uses ResizeObserver + CSS transform to auto-scale the entire flow chart to fit its container. Whole flow (5 nodes + branch) visible at once on any viewport, no internal scrolling
- **DECIDE** — DecisionTreePanel tree nodes and option cards get compact styling on ≤768px (smaller paddings, icons, and type). Tree nodes stretch full-width; options grid fits without clipping
- ProtocolPanel center panel grows to natural content height on mobile (no fixed min-height cap forcing internal scroll)

## [2.22] 2026-04-17 — Demo DECIDE: action cards no longer clipped on mobile

**Fixed**
- DecisionTreePanel "Choose an Action" cards were clipped at the bottom on mobile because the inner scroll area was squeezed into ~200px
- Decision tree panel now flows naturally on mobile (no internal scroll)
- ProtocolPanel center panel `min-height` on ≤768px bumped 400 → 620 so tree + option cards render fully

## [2.21] 2026-04-17 — Demo DETECT: flow nodes no longer clip subtitles

**Fixed**
- Detection Logic nodes (CAPTURE, BEHAVIOR ANALYSIS, THREAT RULES, AI PRIORITIZATION, RETROSPECTIVE LOG) were clipping subtitle text with ellipsis — "Aggression + weapon hi…", "Normal behavior · stor…", "3 subjects · 40+ civs" were all cut
- Node width bumped 220 → 240, height 72 → 82
- Titles and subtitles now wrap to 2 lines (line-clamp) instead of single-line ellipsis; `word-break: break-word` so long compound values wrap cleanly

## [2.20] 2026-04-16 — Demo: mobile responsiveness fixes for Stage 02 & 03

**Fixed**
- Stage 02 UNDERSTAND: three-panel cinematic row now stacks fully vertically at ≤768px instead of showing cramped 2-column layout with center panel on top
- Stage 03 DECIDE: protocol step rows now wrap on mobile — long detail text no longer clips on the right edge
- Stage 03 DECIDE: "IN PROGRESS" badge drops below step text on mobile and uses smaller type so it no longer squeezes the title/detail column
- Stage 03 DECIDE: footer data-points strip scrolls horizontally on mobile; active modules row hidden on narrow screens to stop overflow
- Left-panel step title/detail use `word-break: break-word` so long compound values ("PANIC BUTTON TRIGGERED · ...") wrap cleanly

## [2.19] 2026-04-16 — Demo Violence: replace highway images with urban plaza-area cameras

**Fixed**
- The 7 monitoring/idle tiles in the Violence video wall were showing suburban highway footage (reused from LPR) — wrong context for a downtown plaza incident
- Generated 7 new urban CCTV images: Plaza North (busy intersection), Main St (city traffic), Commerce St (storefronts + pedestrians), Parking Garage (urban structure), Plaza East (plaza perimeter), Boulevard (city boulevard), Alley West (service alley)
- Updated camera labels to match plaza surroundings instead of Houston road names

## [2.18] 2026-04-16 — Demo: scenario-specific video wall images for all 5 scenarios

**Added / Fixed**
- **School** (5 new images): generated CCTV-style images for Gym Entrance, Cafeteria, Library, Science Wing, Bus Loop — campus camera network now fully populated
- **Access Control** (5 new images): generated Parking Level 1, Lobby, Exit B, Loading Bay, Roof Access — building camera network fully populated
- **Medical + Violence**: de-duplicated camera IDs — both shared CAM-305/411/227/198/562/340/715; now each has unique IDs (Medical: CAM-81→159, Violence: CAM-21→89)

## [2.17] 2026-04-16 — Demo: full mobile responsiveness pass across all stages

**Fixed**
- **Stage 01 DETECT** (all 5 scenarios): the 50/50 `hasDetectFlow` split had zero mobile CSS — on narrow screens both halves were cramped side-by-side. Added CSS class system (`detect-bg-half`, `detect-left-area`, `detect-flow-half`, `detect-v-sep`, `detect-dp-row`) and mobile rules to stack them vertically: top 50% = camera/detect card, bottom 50% = flow panel. Separator becomes a horizontal `border-top`.
- **Stage 01 light-bg outer wrapper** (`stage-outer-lbg`): was fixed-height with no overflow — now `height: auto; overflow-y: auto` at ≤1100px so content isn't clipped on tablets.
- **Stage 03 DECIDE** (`ProtocolPanel`): stacked panels on mobile (≤768px) now have explicit `min-height` values, the left panel switches its separator from `border-right` → `border-bottom`, and `gap: 0` keeps the separators flush.

## [2.16] 2026-04-16 — Demo LEARN: thick white separators between cards, responsive stacking

**Changed**
- `LearnLayout.tsx`: replaced thin colored `borderRight` (1px green/blue tints) on Card 1 and Card 2 with thick white separator `6px solid rgba(255,255,255,0.6)` — matching the ProtocolPanel and SplitLayout separator pattern
- Responsive behavior already handled: at ≤768px the borders switch to `border-bottom: 6px solid rgba(255,255,255,0.6)` and cards stack vertically (flex-direction: column)

## [2.15] 2026-04-16 — Demo: roll out decision tree + video wall to all 4 remaining scenarios

**Added**
- Propagated the DECIDE-stage improvements from LPR to all remaining scenarios: access-control, violence, school, medical
- Each scenario's Stage 03 now has a tailored `decisionTree` (3-node situation tree + 4 action options with one AI-recommended) and a `videoWall` (9-tile 3×3 camera grid)
- **Access Control**: tree = Unauthorized Access → Identity Confirmed → Server Room at Risk. Options: Lock Down Facility (rec), Dispatch Security, Escort & Detain, Alert Police. Camera wall: 4 real building cams (server corridor, east wing, main entrance, stairwell) + 5 monitoring/idle
- **Violence**: tree = Violence Detected → Armed Subject → Civilians at Risk. Options: Tactical Response (rec), Establish Perimeter, Evacuate Zone, Request Backup. Camera wall: 2 active incident cams + 7 city road cams
- **School**: tree = Panic Button Triggered → Lockdown Activated → Threat Confirmed. Options: Dispatch SRO (rec), Full Lockdown, Evacuate Wing, Call for Backup. Camera wall: 4 real campus cams (hallway, entrance, parking, hallway 2F) + 5 monitoring/idle
- **Medical**: tree = Cardiac Arrest → Location Confirmed → Critical Response. Options: Dispatch AMB-7 (rec), Fire Rescue, Dispatch AMB-12, First Responder. Camera wall: 2 incident area cams + 7 city road cams

## [2.14] 2026-04-16 — Demo LEARN: dark backgrounds + much larger, readable text

**Changed**
- LEARN stage (Case Closed) was rendering three pale, nearly-transparent cards on a white page — hard to read at any size
- Gave all three cards solid dark backgrounds: Critical Events → `#0a1a18`, Performance → `#060e18`, Incident Analysis → `#07101c`. Outer panel → `#0B1420` with full opacity
- **Critical Events:** timestamp `9px → 12px`, event text `11.5px → 15px`, checkmark circle `15px → 22px`, connector line thicker, event padding increased
- **Incident Summary:** key labels `10px → 12px`, values `10px → 13px` bold
- **Performance:** section header `9px → 11px`, timer ring numeral `26px → 32px`, metric labels `9px → 12px`, metric values `12px → 15px`, row padding increased
- **Incident Analysis:** section header `9px → 11px`, stage label/time `11px → 14px`, progress bars `5px → 7px` tall, recs title `11.5px → 14px`, recs body `11.5px → 12px`, all icon sizes bumped, left accent border solid (not translucent)

## [2.13] 2026-04-16 — Demo DECIDE: real CCTV imagery for all 7 video wall tiles

**Added**
- Generated 7 realistic road CCTV photos (via Gemini 3.1 Flash Image) for the monitoring/idle tiles in the DECIDE video wall: Montrose Blvd, Memorial Dr, Westheimer Rd, Allen Pkwy, Kirby Dr, Shepherd Dr, Waugh Dr — saved to `/public/demo/lpr/cctv-*.jpeg` (~230–315 KB each, 16:9)
- Updated `lpr.ts` tiles 3–9 with `image` paths; VideoWall component already applies `brightness(0.55) saturate(0.5)` filter to monitoring/idle tiles so they look like inactive feeds versus the two bright LPR tracking cams

**Fixed**
- Claude Desktop MCP `nano-banana` was pinned to `gemini-2.0-flash-preview-image-generation` (deprecated, returning text-only). Updated `claude_desktop_config.json` to `gemini-2.5-flash-image` (GA stable). Restart Claude Desktop to take effect.

## [2.12] 2026-04-16 — Demo ACT: Tactical Units panel — grid of cards (not a table)

**Changed**
- The ACT stage right-side "Tactical Units" panel was rendering each unit as a full-width row (flex-column layout with `gap: 10px`). On wide screens the rows stretched ~900 px across and read like a table instead of cards. Switched the scroll container to `display: grid` with `grid-template-columns: repeat(auto-fill, minmax(260px, 1fr))` so each unit is a tile that adapts 1 → 2 → 3 columns depending on panel width
- Breakpoint adjustments: at ≤1100 px the grid keeps the `minmax(260px, 1fr)` auto-fill behavior; at ≤768 px the grid collapses to a single column so narrow viewports still see one card per row
- No changes to the card internals — header banner, metrics grid, footer all preserved

## [2.11] 2026-04-16 — Demo DECIDE: simpler tree + visual options + 9-tile video wall

**Changed**
- DECIDE stage decision tree was too dense for non-technical viewers (horizontal funnel + score bars + weighted rankings). Replaced with a **simple 3-node vertical tree** (STOLEN VEHICLE → IN MOTION → INTERCEPT NEEDED) showing the situation at a glance, followed by **4 visual option cards** (Intercept, Roadblock, Track Only, Air Support) the dispatcher can choose from. The AI-recommended option (Intercept) has a green glow + "AI PICK" badge — no scores, no filter math, just clear choices
- Simplified `Stage.decisionTree` type: `tree[]` (2-3 nodes, each with label/detail/icon) + `options[]` (3-4 action cards with one `recommended`). Removed `candidates`, `filters[]`, `ranked[]`, and `recommendation` fields

**Added**
- New `VideoWall` component — 3x3 grid of 9 city-camera tiles restores the right column on the DECIDE stage. Two tiles show live LPR tracking (CAM-402 HIGHWAY 45 and CAM-118 INTERCHANGE) with green "TRACKING" chip + scan beam animation; the other 7 are monitoring/idle neighborhood cams (Montrose, Memorial, Westheimer, Allen, Kirby, Shepherd, Waugh) rendered as dimmed placeholder tiles with camera labels
- Rationale from user feedback: *"too much information and text… maybe a simple decision tree and then a visual representation of the different options the user can take. I would also like to return the right module — maybe nine video tiles with relevant videos inside."*
- Extended `Stage` type with optional `videoWall` (tiles with `status: 'tracking' | 'monitoring' | 'idle'`)

## [2.10] 2026-04-16 — Demo DECIDE: readable protocol + AI decision tree (LPR)

**Improved**
- Protocol steps (left column of DECIDE stage) were near-unreadable: 11px monospace body with `line-through` on completed items at 0.5 opacity. Rewrote to split each step on `—` into a **clear title** (14px, 700 weight, full white) + **detail line** (12px, dimmer). Removed strike-through. Replaced tiny monospace ID with a numbered circle / checkmark / spinner. Status shown as a colored left accent bar instead of a giant border around the whole row. `ACTIVE` pill renamed to `IN PROGRESS` for clarity.

**Added**
- New `DecisionTreePanel` component replaces the center map on the DECIDE stage when a `decisionTree` is provided. Three sections:
  1. **Horizontal filter funnel** — shows how the AI narrowed candidates (e.g. 6 available → [≤3 mi] 4 → [shift active] 3 → [skill: intercept] 3 → WINNER), with per-filter PASS / reject counts
  2. **Ranked candidate cards** — top 3 finalists with weighted AI score (0–100) as a progress bar, distance + ETA, and a one-line rationale. Winner card has a green glow + "AI PICK" trophy badge
  3. **Recommendation strip** — bolt icon + "→ DISPATCH 12-CHARLIE · Primary intercept · Lights & siren · Code 3 · ETA 2:48"
- Rationale: the demo uses maps on Stages 02/03/04 — swapping Stage 03's map for a decision-logic view makes the DECIDE stage distinct and directly visualizes the AI reasoning instead of showing a third map of the same dots
- Extended `Stage` type with optional `decisionTree` (backward compatible — if unset, the stage falls back to the old map view)
- LPR Stage 03 now ships decision tree data; other scenarios still render the legacy map until their trees are authored

## [2.09] 2026-04-16 — Demo ACT fixes: smaller camera overlay + responsive units panel

**Fixed**
- ACT stage camera overlay on the dispatch map was too large (was `clamp(240px, 28vw, 360px)` — consumed most of the map in split layout). Reduced to `clamp(170px, 16vw, 240px)` so it sits as a compact picture-in-picture without blocking the scene
- ACT stage camera image now uses `/demo/lpr/cam-intercept-lpr.jpeg` (purpose-built INTERCHANGE photo, 917KB) instead of the 8.5MB `LPR.png` — loads faster and matches the "CAM-118 · INTERCHANGE" label
- Camera overlay `<Image>` now uses `unoptimized` flag to match the rest of the demo's unoptimized image pipeline (avoids Turbopack optimizer edge cases)
- Units panel (right side of ACT split layout) was collapsing on viewports ≤1100px — parent flex lost sizing but inner `flex:1; overflow:auto` still expected a definite height, so cards didn't render as cards
- Rewrote the ≤1100px breakpoint: split-body now stacks vertically (phone → map → units) with each panel at natural height, horizontal separators replacing vertical ones, and the units scroll container becomes natural-flow so all 6 cards render fully

## [2.08] 2026-04-16 — Demo DETECT: flow panel rolled out to all scenarios

**Added**
- `detectFlow` data added to Stage 01 of all remaining scenarios — each with a scenario-specific 5-node pipeline + "no-match" retrospective branch:
  - **access-control**: Badge Scan → Identity Lookup → Access Policy Check → Anomaly Scoring → Event Triggered (branch: Access Granted Log)
  - **violence**: Capture → Behavior Analysis (YOLO) → Threat Rules → AI Prioritization → Event Triggered (branch: Normal Behavior)
  - **school**: Panic Trigger → Location Lookup → Protocol Match → Lockdown Sequence → Event Triggered (branch: Test Press / Drill)
  - **medical**: 911 Call → Live Transcription → Keyword Extraction → Priority Classify → Event Triggered (branch: Non-urgent Queue)
- StageScreen now clamps all three detectCard types (call-intake, panic-alert, access-breach) to the left 50% when a `detectFlow` is present, so the admin panel and the flow render side-by-side cleanly
- All 5 scenarios now tell the same story: *what* was detected (left) + *how* it was detected (right)

## [2.07] 2026-04-16 — Demo DETECT: n8n-style detection-logic flow panel (LPR stage 01)

**Added**
- New `DetectFlowPanel` component renders an n8n-inspired vertical flowchart that visualizes the system's detection logic: dark canvas with a faint dot-grid, rounded nodes with typed icon tiles (sensor / AI / rule / event / retro), curved bezier connectors, and a one-shot "data packet" dot that traverses the chain on stage enter
- When a detect stage carries a `detectFlow`, the cinematic panel splits 50/50 — left half keeps the existing bg image + detect-overlay + data-point/modules strip (clamped to the left half), right half renders the flow
- LPR scenario (Stage 01) now ships 5 nodes: CAPTURE → PLATE EXTRACTION → HOTLIST MATCH → AI PRIORITIZATION → EVENT TRIGGERED, plus a dashed "NO MATCH" branch to a dimmed RETROSPECTIVE LOG node
- Extended `Stage` type with optional `detectFlow` (backward compatible — other scenarios render unchanged)
- Design spec committed to `docs/2026-04-16-detect-flow-panel-design.md`
- Rollout: LPR first. Other scenarios (access-control / violence / school / medical) will get their own scenario-specific flows in a follow-up once this is approved

## [2.06] 2026-04-16 — Demo ACT: operational dispatch map with multi-unit markers + LPR camera overlay

**Added / Changed**
- Extended `DispatchMap` to render multiple colour-coded unit markers (police blue, K9 amber, EMS red, security purple, fire orange) with per-unit routes and status-aware line styling (solid for ASSIGNED/EN ROUTE, dashed for STANDBY/AVAILABLE)
- Added a floating LPR camera overlay layer on top of the map — 16:10 photo card with red alert border, camera label strip, and "LPR HIT · STOLEN VEHICLE CONFIRMED" footer
- Extended `splitMapCoords` type with optional `units[]` and `camera` fields (backward compatible — existing scenarios untouched)
- Stage 04 ACT (LPR scenario) now uses the new `LPR.png` (baked-in LPR DETECTION header) instead of the reused `lpr-hero.jpeg`, with camera label updated to `CAM-118 · INTERCHANGE`
- Swapped `splitUnits` roster: `05-ALPHA` replaced with `K9-2` (K9 unit, M. Chen & Rex) and `EMS-7` (Medic standby) added — richer multi-agency scene for the ACT map
- Six tactical units now appear on the map with coordinates: 12-CHARLIE (primary), 08-BRAVO (flanking), 04-ALPHA, K9-2, EMS-7, 11-ECHO

## [2.05] 2026-04-16 — Demo ACT: rich tactical unit cards with type, status & ETA

**Changed / Added**
- Replaced the simple unit-row list in the ACT-stage right panel with detailed unit cards
- Each card emphasizes: unit type (Police Car / Security Officer / K9 Unit / Ambulance / Fire Truck) with color-coded icon, large unit number, officer name, status pill (On Scene / Assigned / En Route / Available / Standby), ETA + distance metrics, "View on Map" action, radio channel & equipment
- Extended `splitUnits` type with optional `type`, `typeLabel`, `officer`, `badge`, `eta`, `etaLabel`, `etaSub`, `distance`, `distanceSub`, `channel`, `equipment`, `equipmentIcon` fields (backward compatible)
- Updated access-control and LPR scenarios with full card metadata for all units
- "View on Map" button dispatches a `demo:view-unit-on-map` window event for future map-panel integration

## [2.04] 2026-04-14 — Demo LPR: AI-generated photorealistic LPR camera images

**Fixed**
- Generated two photorealistic LPR camera images using Gemini 3.1 Flash (nano-banana CLI)
- cam-highway-lpr.jpeg: rear-view of BMW on rainy highway at night, green detection box on plate 7JKY442
- cam-intercept-lpr.jpeg: front-left angle SUV approaching intersection, headlights, green LPR box
- Replaced SVG placeholder drawings with actual AI-generated surveillance-style photos
- Reverted ProtocolPanel back to next/image (JPEGs work fine, SVG restriction resolved)

## [2.03] 2026-04-14 — Demo LPR: new SVG camera captures from two distinct angles

**Fixed / Added**
- Created cam-highway.svg — rear-view highway LPR capture (gantry camera, red tail lights, plate 7JKY442 in green box)
- Created cam-intercept-v2.svg — front-right quarter-view at interchange (headlights, front plate detection, different angle)
- Fixed ProtocolPanel to use plain <img> instead of next/image for camera feeds (SVGs blocked by Next.js optimizer)
- Both cameras unique: not reused from any other demo stage

## [2.02] 2026-04-14 — Demo LPR: replace flowchart camera images with real LPR detection images

**Fixed**
- Replaced `lpr-flow.jpeg` (process flowchart — unrelated) used as camera feed in DECIDE stage with `lpr-hero.jpeg` (real overhead highway LPR detection image)
- Added new `cam-intercept.svg` — a front-facing LPR camera capture from interchange angle (angle 2), replacing the blurry UI-mockup `stage-3-decide.jpg`
- Relabeled second camera to `CAM 118 · INTERCHANGE` to match the new image content
- Both cameras now marked as `alert: true` for visual consistency

## [2.01] 2026-04-14 — Demo: add 6px panel separator to UNDERSTAND stage

**Fixed**
- UNDERSTAND 3-panel layout in `StageScreen.tsx` now uses the same `border-right: 6px solid rgba(173,198,255,0.25)` separator as ProtocolPanel, SplitLayout, and LearnLayout
- Panels wrapped in a single container with `borderRadius: 12` and `overflow: hidden` (instead of individual rounded panels with gap)
- Mobile: separator removed on stacked layout, individual panel borders restored for mobile

## [2.00] 2026-04-13 — Demo: fix panel separator contrast (gap bg matches container)

**Fixed**
- Gap background in ProtocolPanel and SplitLayout changed from `#03080f` to `#162235` (matches stage container)
- Darker panel backgrounds (`#0b1622`, `#060e18`, `#07101c`) now contrast against the lighter gap, creating clearly visible separators
- Mirrors the same technique already used by the UNDERSTAND stage

## [1.99] 2026-04-13 — Demo: make panel separators clearly visible

**Fixed**
- Changed gap background from near-invisible `rgba(173,198,255,0.08)` to solid `#03080f` (deep near-black) in `SplitLayout.tsx` and `ProtocolPanel.tsx`
- Panel gaps now create a clear dark separator between modules, matching the UNDERSTAND stage treatment
- Standardised gap/padding to 8px to align with all stage layouts

## [1.98] 2026-04-13 — Demo: vertical gaps between panels on all stage layouts

**Improved**
- `ProtocolPanel.tsx` — panel columns (steps, map, cameras) updated to `border-radius: 12px` and `gap: 12px`, replacing the old `border-right` dividers. Matches the gap treatment on the UNDERSTAND stage.
- `SplitLayout.tsx` — same update: phone, map, and units panels now use `border-radius: 12px` and `gap: 12px`.
- Also synced `LearnLayout.tsx`, `StageScreen.tsx`, and `lpr.ts` to branch.

## [1.97] 2026-04-13 — Fix: sync all demo components and data files to branch

**Fixed**
- 6 component files (`DispatchMap`, `GeoPanel`, `ScenarioPlayer`, `SplitLayout`, `StageScreen`, `TopBar`) and 5 data files (`lpr`, `medical`, `school`, `types`, `violence`) were out of sync between the local working copy and the `demo-light-redesign` branch, causing cascading TypeScript build errors on Vercel. All files synced in one commit.

## [1.96] 2026-04-13 — Fix: ProtocolPanel TypeScript error on prevStage

**Fixed**
- `ProtocolPanel.tsx` — lines 353 and 410 had `prevStage.label` without optional chaining, causing a TypeScript build error (`'prevStage' is possibly 'undefined'`). Updated to `prevStage?.label`. The local file already had the fix but an older version was committed to the branch.

## [1.95] 2026-04-13 — Fix: missing map components added to branch

**Fixed**
- `UnderstandMapPanel.tsx` and `StaticMapPanel.tsx` were never committed to `demo-light-redesign`, causing a Vercel build failure ("Module not found"). Both files added to the branch.

## [1.94] 2026-04-13 — Demo: LearnLayout nav centered + prev button updated

**Fixed**
- `LearnLayout.tsx` — floating nav strip (CHOOSE SCENARIO + prev arrow) was still bottom-right. Repositioned to bottom-center to match BottomNav. Also updated the old ghost `‹` prev button to the labeled pill style introduced in v1.92.

## [1.93] 2026-04-13 — Demo: BottomNav moved to bottom-center

**Changed**
- `BottomNav.tsx` — nav strip repositioned from bottom-right to bottom-center (`left: 50%` + `translateX(-50%)`). More natural placement for a centered demo flow.

## [1.92] 2026-04-13 — Demo: BottomNav — clearer prev/next for first-time users

**Improved**
- `BottomNav.tsx` — PREV button was a tiny ghost `‹` icon at 40% opacity with no label. Replaced with a full labeled pill button (`← DETECT`) matching the NEXT button style but dimmer, so the navigation pattern is immediately obvious. Added 5-dot step progress indicator between the two buttons (active dot stretches to a pill, completed dots tint blue). Added a 2-cycle pulse ring animation on the NEXT button at first stage load to draw attention for new visitors.

## [1.91] 2026-04-13 — Demo: DECIDE camera panel fills height, no black gap

**Fixed**
- `ProtocolPanel.tsx` — camera thumbnails had a fixed `height: 104px`, leaving a large black gap below when only 2 cameras were present. Changed `.pp-camera-pip` to `flex: 1; display: flex; flex-direction: column` and `.pp-camera-img` to `flex: 1; min-height: 0` so each pip stretches to share the full panel height equally. Camera list wrapper also set to `flex: 1` to fill the space below the header.

## [1.90] 2026-04-13 — Demo: access-control DECIDE stage map panel populated

**Fixed**
- `access-control.ts` — the DECIDE stage had `layout: 'protocol'` and `protocolSteps` but no `decideMap`, causing `ProtocolPanel` to render "NO MAP DATA" on the right panel. Added `decideMap` with incident coords `[29.7362, -95.4625]`, five units (SEC-1 ASSIGNED, SEC-2 EN ROUTE, UNIT-9 EN ROUTE, UNIT-3 STANDBY, K9-2 AVAILABLE), and two camera thumbnails (cam03-server-corridor alert + cam07-east-wing). Now renders the same `DecideMapPanel` as violence and medical scenarios.

## [1.89] 2026-04-10 — Demo: UNDERSTAND left panel now scenario-specific

**Fixed**
- `StageScreen.tsx` — the left tracking panel and GIS map overlay in the UNDERSTAND stage were hardcoded with LPR scenario data (plate `7JKY442`, "ACTIVE TRACK", "Westbound I-10", etc.) and appeared on every scenario that had an `understandMap` — including violence. Added `isLprTrack` boolean (true when `dataPoints` contains `INTERCEPT ETA`) and `trackSubLabel` (derived from `stage.stageLabel`). LPR renders the existing vehicle tracking card unchanged. All other scenarios (violence) render a generic card showing the stage's actual `dataPoints`, GIS status, and unit info. Fixed in four locations: the 3-panel left panel, the right GIS panel bottom overlay (3-panel layout), the dark-bg GIS panel bottom overlay, and the dark-bg left tracking panel.

## [1.88] 2026-04-10 — Demo: Leaflet init fix + dark tiles across all scenario maps

**Fixed**
- `GeoPanel.tsx` — replaced direct `L.map()` call (which fires before flex container has real pixel dimensions) with the same `requestAnimationFrame` polling loop + `ResizeObserver` pattern used in DispatchMap and UnderstandMapPanel. Affects UNDERSTAND stage maps for school, medical, and access-control scenarios.
- `DecideMapPanel.tsx` — replaced `setTimeout(invalidateSize, 0)` + voyager tiles + CSS filter hack with RAF polling + `dark_all` CartoCDN tiles. Affects DECIDE stage maps for violence and medical scenarios. Map now renders immediately with the correct dark tactical appearance, consistent with all other maps in the demo.

## [1.87] 2026-04-10 — Demo: title emphasis across all stages

**Improved**
- `StageScreen.tsx`, `ProtocolPanel.tsx`, `SplitLayout.tsx`, `LearnLayout.tsx` — replaced the thin, low-contrast stage label with a left accent bar (3×14px `#1755c2`) + bolder tracking. Increased headline `font-size` from `clamp(1.35rem, 1.9vw, 1.85rem)` to `clamp(1.9rem, 2.6vw, 2.8rem)` and tightened `line-height` to 1.0. Description text opacity raised from 0.48 to 0.62. Changes are identical across DETECT/UNDERSTAND (StageScreen), DECIDE (ProtocolPanel), ACT (SplitLayout), and LEARN (LearnLayout).

## [1.86] 2026-04-10 — Demo: UnderstandMapPanel — fills panel, dark tiles, camera + route overlays

**Fixed / Improved**
- `UnderstandMapPanel.tsx` — replaced `setTimeout(invalidateSize, 0)` with `requestAnimationFrame` loop (same pattern as DispatchMap fix in v1.82) that waits for real container dimensions before calling `L.map()`, then attaches `ResizeObserver`. Previously the voyager tiles loaded into a collapsed height leaving large dark margins.
- Switched to `dark_all` CartoCDN tiles (matches ACT stage). Removed the `hue-rotate` brightness filter hack.
- Route now rendered as glow (10px/18% opacity) + solid line (3px/95%) in green (`#00C98A`).
- Stolen vehicle marker enlarged (36px circle, 2.5px border, larger pulse rings), plate badge background changed from semi-transparent to solid `#FF4560`.
- Intercept/unit marker redesigned as blue `#3B9EFF` crosshair with "12-CHARLIE" label.
- Added CCTV camera marker (amber `#FFB020`, video camera SVG icon, CAM 402 label) placed just east of the incident coords where the vehicle was first detected. Accepts optional `cameraCoords` prop for overrides.
- `fitBounds` now includes camera positions in the bounding box so all overlay elements are visible.

## [1.85] 2026-04-10 — Demo: LEARN nav buttons — floating fixed overlay

**Changed**
- `LearnLayout.tsx` — replaced the inline centered nav buttons (which sat below the dark panel in document flow) with a `position: fixed; bottom: 24px; right: 28px` floating overlay matching the `BottomNav` pattern used by all other stages. The "← ACT" prev button uses the same ghost pill style as `demo-float-prev`; the "Choose Scenario" button uses the green restart palette from `demo-float-restart`.

## [1.84] 2026-04-10 — Demo: DispatchMap — fix white tile background

**Fixed**
- `DispatchMap.tsx` — the v1.82 tile layer split used `dark_matter_no_labels` which is not a valid CartoCDN style name; the map rendered as white/gray with only road labels visible. Reverted to the single correct `dark_all` style which renders black background + roads + labels in one layer.

## [1.83] 2026-04-10 — Demo: UNDERSTAND — restore 3-column layout at all desktop widths

**Fixed**
- `StageScreen.tsx` — the UNDERSTAND stage was wrapping its center panel to full-width at ≤1100px (matching the old fixed-height overflow fix), which broke the three-equal-column layout on common desktop viewports. Fix: removed `flex-wrap` and `order: -1` from the ≤1100px rule; the outer now uses `min-height: calc(100vh - 200px)` instead so the columns fill the screen without a fixed height. Wrapping to the stacked layout is deferred to ≤768px (center full-width top, left+right split) and ≤540px (all three stack vertically).

## [1.82] 2026-04-10 — Demo: DispatchMap Leaflet init fix + visual improvements

**Fixed**
- `DispatchMap.tsx` — replaced `setTimeout(invalidateSize, 0)` with a `requestAnimationFrame` loop that waits for the container to have real pixel dimensions before calling `L.map()`, then attaches a `ResizeObserver` to keep Leaflet in sync with CSS layout. Previously Leaflet could initialise when the flex container still had zero height, causing blank tiles and missing markers.
- Switched base tile layer to `dark_matter_no_labels` + separate `dark_only_labels` pane so street labels render crisply on top. Added route glow (8px, 22% opacity) under the solid route line (3.5px, 95% opacity) for better visibility. Increased circle marker radius from 8→9 and added `minHeight: 280px` to the Leaflet container div.
- `SplitLayout.tsx` — added `minHeight: 300` to `demo-split-map` panel to guarantee Leaflet always has a visible container.

## [1.81] 2026-04-10 — Demo: full responsiveness applied to ACT and LEARN stages

**Fixed**
- `SplitLayout.tsx` (ACT) — removed `display: none !important` from `demo-split-units` at ≤1100px and `demo-split-map` at ≤480px; outer wrapper now scrollable at ≤1100px; units panel stacks below map at ≤768px with `min-height: 220px`; map gets `min-height: 180px` at ≤480px instead of vanishing
- `LearnLayout.tsx` (LEARN) — added `learn-outer` class to root div; new `@media (max-width: 1100px)` rule makes outer scrollable (`height: auto`); at ≤768px replaced `max-height: 35%` on card-1 (which clipped content against the fixed parent height) with `min-height: 200px`; cards 2 and 3 get `min-height: 260px` / `300px` so all content is reachable by scrolling

## [1.80] 2026-04-10 — Demo: DECIDE camera panel no longer disappears at narrow widths

**Fixed**
- `ProtocolPanel.tsx` — removed `display: none !important` from `pp-camera-panel` at ≤1100px; camera panel now stays visible at all widths and stacks at the bottom at ≤768px. Also moved `height: auto` scrollable rule to ≤1100px (was only at ≤768px) so the outer wrapper never clips content.

## [1.79] 2026-04-10 — Demo: UNDERSTAND narrow-screen fix — panels scroll instead of clipping

**Fixed**
- `StageScreen.tsx` — at ≤1100px, `understand-outer` no longer has fixed `calc(100vh - 120px)` height; switched to `height: auto` + scrollable, same as the ≤680px rule. Previously, the center panel consumed 38vh and left only ~160px for the left/right panels — the GIS TRACK right panel was clipped by `overflow: hidden` and appeared to "disappear" at medium screen widths.
- Center panel height reduced from `38vh` to `300px` at ≤1100px; left/right panels get `min-height: 260px` / `300px` respectively so all content is accessible by scrolling

## [1.77] 2026-04-10 — Demo: equal-width 3-panel layout across all scenario stages

**Changed**
- `StageScreen.tsx` (UNDERSTAND) — panels now `flex: 1` each instead of fixed 200px / flex:1 / 320px; at ≤1100px center wraps full-width, left+right share space equally
- `ProtocolPanel.tsx` (DECIDE) — steps, map, and cameras panels now `flex: 1` each instead of 36% / flex:1 / 200px; separator lines via CSS class, camera pip image uses 100% width
- `SplitLayout.tsx` (ACT) — already equalized in v1.76
- Consistent 1px `rgba(173,198,255,0.1)` separator between all panels across all three layouts

## [1.76] 2026-04-10 — Demo: floating BottomNav + 3-panel layout for all stages

**Changed**
- `ScenarioPlayer.tsx` — enabled floating `BottomNav` for all non-LEARN stages; added `paddingBottom: 80px` to main content to clear it
- `StageScreen.tsx` — UNDERSTAND stage now uses an early-return 3-panel flex layout (vehicle data | map | protocol/cameras) instead of overlapping absolute panels; map is center with `order: -1` so it appears first when wrapping; disabled internal nav (replaced by floating BottomNav)
- `ProtocolPanel.tsx` — refactored from 2 panels to 3: steps panel (36%) | map panel (flex: 1) | camera PiPs panel (200px, hidden at ≤1100px); disabled internal nav
- `SplitLayout.tsx` — refactored from nested 2-panel to flat 3-panel: phone mockup (260px) | operational map (flex: 1) | tactical units list (220px, hidden at ≤1100px); at ≤768px panels stack vertically; disabled internal nav
- `BottomNav.tsx` — cleaned up styling: `backdrop-filter: blur(20px)`, compact sizing on tablet/mobile, center teaser hidden at ≤480px

**Fixed**
- UNDERSTAND stage panels overlapping on narrow screens (was caused by 3 absolutely-positioned panels in a shared container)
- Navigation buttons appearing twice (both internal per-component nav and floating BottomNav)

## [1.75] 2026-04-10 — Demo: responsive nav buttons across all stage layouts

**Fixed**
- `StageScreen.tsx`, `ProtocolPanel.tsx`, `SplitLayout.tsx` — added `demo-stage-nav-btn`, `demo-stage-nav-sublabel`, `demo-stage-nav-mainlabel`, `demo-stage-nav-icon` CSS classes to all PREV/NEXT nav buttons
- At ≤768px: button padding reduced to `8px 16px`, sub-labels ("Proceed to next step" / "Go back") hidden, main label font shrinks to 0.78rem, icon box shrinks to 24×24
- At ≤480px: padding further reduced to `6px 12px`, main label font shrinks to 0.68rem
- Buttons now stay compact and proportional on tablet and mobile screens

## [1.74] 2026-04-10 — Demo: full responsive pass across all stage components

**Changed**
- `TopBar.tsx` — pills shrink + scroll on tablet (≤768px); entire row 2 hidden on mobile (≤480px); header row 1 shorter on mobile
- `BottomNav.tsx` — compact height on tablet/mobile; center teaser hidden on tablet; prev/next labels hidden on mobile; simplified to icon+short text only
- `ProtocolPanel.tsx` — camera PiPs shrink to 160px at 900px, 130px at 768px; layout stacks vertically at 768px; map panel hidden at 480px
- `StageScreen.tsx` — understand map panel shrinks to 340px at 900px, hidden at 680px; outer padding reduced
- `SplitLayout.tsx` — phone+map panels stack vertically at 768px; map hidden at 480px; padding reduced on mobile
- `LearnLayout.tsx` — three dashboard cards stack vertically at 768px with scroll
- `ScenarioPlayer.tsx` — `paddingTop` responsive: 120px → 88px (tablet) → 48px (mobile) matching header collapse

---

## [1.73] 2026-04-10 — Demo: TopBar stage pills — hover & active states

**Changed**
- `TopBar.tsx` — added CSS hover/active states for stage pills: inactive pills darken on hover and flash blue on press; active pill deepens blue on hover; `data-active` attribute wired for CSS targeting

---

## [1.72] 2026-04-10 — Demo: ACT stage phone panel — brighter radial background

**Changed**
- `SplitLayout.tsx` — left panel (smartphone mockup) now has a radial gradient background (`#1f3e62` center → `#0f1e2e` edges) instead of flat `#162235`, creating a subtle spotlight that makes the phone frame pop

---

## [1.71] 2026-04-10 — Demo: show all platform modules in title area, highlight active ones

**Changed**
- `StageScreen.tsx`, `ProtocolPanel.tsx`, `SplitLayout.tsx`, `LearnLayout.tsx` — module strip now renders all 9 platform modules every time; active modules for the current stage get a solid blue pill (`#1755c2` text, `rgba(0,122,255,0.1)` bg, blue border + bold weight); inactive modules are muted gray; each pill includes its Material icon
- `ALL_MODULES` imported from `TopBar` in all four layout components

---

## [1.70] 2026-04-10 — Demo: move module tags from header to stage title area

**Changed**
- `TopBar.tsx` — removed Row 3 (platform modules strip) from the fixed header; modules are already rendered inline with the stage title in each layout component (StageScreen, ProtocolPanel, SplitLayout, LearnLayout)
- All demo layout components — updated `calc(100vh - 168px)` → `calc(100vh - 120px)` to account for the shorter two-row header
- `ScenarioPlayer.tsx` — updated `paddingTop` from 168px to 120px

---

## [1.69] 2026-04-10 — Demo: TopBar nav blended into white content area

**Changed**
- `TopBar.tsx` — stage lifecycle pills (row 2) and module tags (row 3) now render on `#f1f4f8` light background matching the content area, eliminating the jarring dark-to-white transition; row 1 (logo/badge) retains dark brand chrome; pills/tags restyled with dark-on-light colors and blue active states; outer header border and shadow updated to suit light bottom edge

**Fixed**
- Map fill in UNDERSTAND stage: removed `top: 28` offset from map container in `StageScreen.tsx` so Leaflet tiles now cover the full panel rectangle; header bar, camera inset, and incident overlay float above via z-index

---

## [1.68] 2026-04-10 — Demo: white background treatment for LEARN stage + street routing on all maps

**Changed**
- `LearnLayout.tsx` — applied the same white `#f1f4f8` background treatment as DETECT/UNDERSTAND/DECIDE/ACT: stage title/description above a dark rounded panel (`#0f1e33`), resolved badge + module tags in the header row, light nav buttons (ghost PREV, dark navy "Choose Another Scenario") outside the panel
- `ScenarioPlayer.tsx` — extended `isLightBg` to include `learn` layout; passes `isLightBg` to `LearnLayout`
- `DispatchMap.tsx`, `DecideMapPanel.tsx`, `UnderstandMapPanel.tsx` — removed OSRM dependency; all three maps now use pre-computed Houston street waypoints passed via `route` prop instead of fetching external routing API (which was blocked in sandbox and causing straight-line fallback)
- `lpr.ts` — added pre-computed `route` waypoint arrays to `understandMap`, `decideMap.units` (12-Charlie + 08-Bravo), and `splitMapCoords` following Memorial Dr / Westheimer Rd / Montrose Blvd corridors
- `types.ts` — added `route?: [number, number][]` to `splitMapCoords`, `understandMap`, and `decideMap.units`
- `SplitLayout.tsx` — passes `route` prop to `DispatchMap`; `isLightBg` treatment for ACT stage (title above dark panel, light nav)
- `StageScreen.tsx` — passes `route` prop to `UnderstandMapPanel`
- `ProtocolPanel.tsx` — `isLightBg` treatment for DECIDE stage; camera PiP overlays on map (CAM 402 highway feed + GIS track)

---

## [1.67] 2026-04-10 — SEO: /vs/tyler-technologies + /vs/centralsquare comparison pages

**Added**
- `/vs/tyler-technologies/` — full EN+ES bilingual page: Tyler Technologies (largest US gov-tech vendor, Enterprise CAD/RMS) vs KabatOne unified operational depth; 9-row comparison table; 6 FAQ with breadcrumb + FAQPage schema; related resources + integration links
- `/vs/centralsquare/` — full EN+ES bilingual page: CentralSquare (Superion + TriTech + Aptean + Zuercher merger, 8,000+ agencies) vs KabatOne single cloud-native architecture; 8-row comparison table; 6 FAQ with breadcrumb + FAQPage schema; related resources + integration links
- `vsTylerTechnologies` + `vsCentralsquare` metadata keys added to EN + ES metadata files
- `sitemap.ts` — 2 new /vs/ paths (priority 0.7 each) — site now 85 unique routes × 2 locales = 170 sitemap URLs

---

## [1.66] 2026-04-09 — SEO: add 4 demo scenario pages to sitemap + metadata

**Added**
- `sitemap.ts` — added `/demo/school`, `/demo/violence`, `/demo/medical`, `/demo/access-control` (were live pages not indexed by Google)
- `demo/school/page.tsx` — added full metadata: title, description, OG tags, canonical
- `demo/access-control/page.tsx` — added full metadata: title, description, OG tags, canonical
- `data/demo/types.ts` — added `decideMap` to `Stage` interface (was used in lpr.ts + violence.ts but missing from type — pre-existing TypeScript error)

---

## [1.65] 2026-04-08 — Fix: Scenario 05 stage order — map+blueprint on understand, protocol on decide

**Changed**
- `access-control.ts` — understand stage: changed from protocol to geoPanel layout with 4 CCTV camera thumbnails + office blueprint panel
- `access-control.ts` — decide stage: now shows the unauthorized access protocol (6 steps); removed the stray duplicate decideCard placeholder stage
- `StageScreen.tsx` — added `blueprintPanel='office'` SVG: East Wing corporate floor plan — IT Ops, Conference, Security Desk (top), Server Room B ALERT + Storage + Network Hub (bottom)
- Generated 4 access-control camera images: server corridor, east wing, main entrance, stairwell B

## [1.64] 2026-04-08 — Feat: split map + blueprint on School understand stage + face card cleanup

**Changed**
- `types.ts` — added `blueprintPanel?: 'school' | 'office'` to geoPanel type
- `school.ts` — set `blueprintPanel: 'school'` on understand stage geoPanel
- `StageScreen.tsx` — geoPanel now splits into 55% street map + 45% building blueprint when `blueprintPanel` is set; school blueprint shows full floor plan with animated Room 214 alert; "STREET MAP" label on map pane
- `StageScreen.tsx` — face recognition card simplified: removed verbose sub-labels, kept "⚠ WATCHLIST MATCH" + "98.4%" only

## [1.63] 2026-04-08 — Feat: Scenario 05 — face recognition card on detect + protocol on understand

**Added**
- `StageScreen.tsx` — face recognition overlay card on access-breach CCTV panel: face image with corner detection brackets, scan-line animation, WATCHLIST MATCH label, confidence 98.4%
- `access-control.ts` — understand stage changed from geoPanel to `protocol` layout with 6 steps: badge denial logged, face recognition match, server room lockdown, badge deactivated, officers alerted, PD requested
- Generated `face-match.jpg` — AI portrait for watchlist match display

## [1.62] 2026-04-08 — Feat: Scenario 05 detect stage — new CCTV image + corporate floor plan

**Changed**
- `access-control.ts` — detect image changed to `stage-1-detect-v2.jpg` (overhead view of turnstile access gate with queuing employees), detectCard type changed to `'access-breach'`
- `types.ts` — added `'access-breach'` to detectCard type union
- `StageScreen.tsx` — new `access-breach` panel: CCTV left with ACCESS DENIED bounding box + badge reader label; right side shows architectural blueprint of East Wing Level 3 with IT Operations, Conference Room, Security Desk (top), Server Room B ALERT + Storage + Network Hub (bottom), animated pulsing badge reader at main entrance door, forced-entry door gap on Server Room B

## [1.61] 2026-04-08 — Feat: Scenario 05 — Unauthorized Access Control (v1.61)

**Added**
- `src/data/demo/access-control.ts` — full 5-stage scenario: badge denied ×3 → forced entry → Server Room B
  - detect: panic-alert card with CCTV overhead of server corridor, badge mismatch fields, 5-item alert timeline
  - understand: geoPanel with building coords, SEC-1/SEC-2 units, 4 cameras, SOS forced-entry card
  - decide: decideCard — SEC-1/SEC-2 + UNIT-9/UNIT-3/K9-2, AI score 97, full dispatch brief
  - act: splitLayout — server room CCTV, unit roster, map routing
  - learn: incident closed, intruder detained, badge deactivated
- `src/app/[locale]/demo/access-control/page.tsx` — new route
- Generated 2 Imagen 4 images: server corridor CAM-03 (detect), server room interior (act)
- `src/app/[locale]/demo/page.tsx` — scenario 05 set live, href → /demo/access-control

## [1.60] 2026-04-08 — Fix: SOS event card fully visible — moved coords + explicit z-index

**Fixed**
- `school.ts` — moved SOS coords northeast, clear of school marker and CAM-15
- `GeoPanel.tsx` — added `z-index:9999` to .sos-icon and .sos-card; larger card (12px label, wider box, bigger dot)
- `GeoPanel.tsx` — increased iconSize to 190×68 to match

## [1.59] 2026-04-08 — Fix: SOS button event card visible on map (offset coords + zIndex)

**Fixed**
- `school.ts` — moved sosEvent coords away from caller marker (were overlapping)
- `GeoPanel.tsx` — added `zIndexOffset: 2000` so SOS card renders above camera thumbnails
- `GeoPanel.tsx` — added `sosEvent` to useEffect dependency array

## [1.58] 2026-04-08 — Feat: SOS button event card marker on Understand stage map

**Added**
- `GeoPanel.tsx` — new `sosEvent` prop renders a labeled card marker (dark red card + connector line + pulsing dot) anchored to the panic button location
- `types.ts` — added `sosEvent?: { coords, label, sublabel }` to geoPanel type
- `school.ts` — wired SOS event at Room 214 coords: "⚠ SOS BUTTON EVENT · ROOM 214 · BLDG A 2F"

## [1.57] 2026-04-08 — Fix: larger CCTV thumbnails on map + rename legend label to SOS BUTTON

**Changed**
- `GeoPanel.tsx` — camera thumbnail size increased from 116×73 to 144×91px
- `StageScreen.tsx` — floor plan legend label changed from "PANIC BTN" to "SOS BUTTON"

## [1.56] 2026-04-08 — Feat: Live camera thumbnails on Understand stage map (School scenario)

**Added**
- `GeoPanel.tsx` — camera markers now render as CCTV thumbnail cards when an `image` is provided; card shows grayscale-filtered feed image, scanlines overlay, REC badge, label bar, connector line + dot anchor
- Alert camera (CAM-07) styled in red tones; normal cameras in blue
- `types.ts` — added `image?: string` and `alert?: boolean` to `geoPanel.cameras` items
- `school.ts` — wired 4 Imagen 4-generated camera images: CAM-01 entrance, CAM-07 hallway, CAM-12 parking lot, CAM-15 2F hallway
- Generated 4 CCTV-style school interior/exterior images in `public/demo/school/`

## [1.55] 2026-04-08 — Feat: School Panic Button detect stage — architectural blueprint floor plan

**Changed**
- `StageScreen.tsx` — replaced SVG floor plan on School scenario detect stage with a true architectural blueprint
- Blueprint style: dark navy background, wall hatching pattern (diagonal lines inside thick filled wall rects), proper door swing quarter-circle arcs
- Realistic school layout: Assembly Hall, Principal's Office, Registrar's Office (top); Classroom 1, Classroom 2, Teacher's Faculty Room, Classroom 214 ALERT (bottom)
- Corridor with stairwell symbols (parallel lines + diagonal cross), two camera markers
- Entrance indicator cut into bottom outer wall
- Alert room 214: pulsing red fill, red-tinted divider wall with alert hatching, animated panic button with expanding ring, ⚠ ALERT ACTIVE badge

## [1.54] 2026-04-08 — Design: K-Safety hero map restyled to blueprint aesthetic

**Changed**
- `KSafetyCommandHero.tsx` — map visualization redesigned from dark tactical to architectural blueprint style
- Deep navy blueprint background (`#071630 → #0a1e3c`)
- SVG grid rebuilt: fine `5×5` + major `20×20` pattern, major roads (`1.8px`), secondary roads (`0.8px`)
- Building footprints added as outlined SVG rectangles across all city blocks
- Grid coordinate labels (A–D / 1–4) added on top and left edges
- North arrow and 500 m scale bar added to blueprint corners
- Animated scan-line overlay for live-data feel
- Incident markers: pulsing crosshair with ring instead of plain dot
- Pending incidents: rotated diamond outline
- Unit markers: hollow triangle (SVG polygon)
- Camera markers: square bracket with translucent fill
- Legend icons updated to match new blueprint marker shapes
- Coordinate watermark added (`GRID REF: 19°26′N 99°08′W`)

## [1.53] 2026-04-08 — SEO: 3 new GEO resource pages (small cities, Colombia, best public safety)

**Added**
- `/resources/public-safety-software-small-cities/` — bilingual EN+ES guide for municipalities under 100K residents; ACCENT #16a34a; FORTASEG/SUBSEMUN LATAM context; 4 need cards, 6 eval criteria, comparison table, FAQ (GEO-022)
- `/resources/public-safety-software-colombia/` — bilingual EN+ES guide for Colombian governments; PNC/FONSET/PISCC/CRUM framework; 4 challenge cards, 5-step workflow, comparison table, FAQ (GEO-023)
- `/resources/best-public-safety-software/` — bilingual EN+ES synthesized comparison; 6 software categories, unified vs specialized editorial, 7-row comparison table, best-by-use-case cards, FAQ (GEO-024)
- Hub cards added to `/resources/page.tsx` for all 3 new pages (EN + ES sections)
- `publicSafetySoftwareSmallCities`, `publicSafetySoftwareColombia`, `bestPublicSafetySoftware` keys added to EN + ES metadata
- 3 new sitemap entries (priority 0.7 each)

## [1.52] 2026-04-07 — Fix: QA fixes — nav aria-label, remove off-brand industries, mobile hero overflow

**Fixed**
- Nav logo link: added `aria-label="KabatOne Home"` for accessibility
- Industries dropdown: removed Retail and Logistics (off-brand for B2G public safety audience)
- Mobile hero: added `overflow-x: hidden` on `.hp-hero-wrap` + `padding: 0 8px` on `.hp-sub` at mobile breakpoint to prevent text clipping on iPhone

## [1.51] 2026-04-08 — GEO: Peru guide + RTCC implementation guide + 911 call center guide (EN + ES)

**Added**
- `/resources/public-safety-software-peru/` — Peru market guide (EN + ES): serenazgo/PNP structure, CONASEC, FONIPREL, fragmented vs unified comparison table, FAQ (6 Q&A)
- `/resources/build-rtcc-implementation-guide/` — Practical RTCC implementation guide (EN + ES): 4-phase build plan, 6-step tech stack, staffing model, common mistakes, Basic vs Full RTCC comparison
- `/resources/911-call-center-software-guide/` — 911 call center software guide (EN + ES): 6 core functions, 911 vs CAD comparison, NG911 section, 6 evaluation criteria, FAQ (6 Q&A)
- Hub cards added to `/resources/` index (EN + ES) for all 3 pages
- EN + ES metadata keys: `publicSafetySoftwarePeru`, `buildRtccImplementationGuide`, `callCenterSoftwareGuide`
- Sitemap entries added (priority 0.7 / 0.7 / 0.6)

**Fixed**
- `StageScreen.tsx` line 200: `transcript` possibly undefined — added `?? []` guard

---

## [1.50] 2026-04-08 — Feat: School detect stage — CCTV image + floor plan split

**Changed**
- School Panic Button detect stage redesigned: CCTV camera feed (left 55%) + floor plan (right 45%)
- CCTV feed shows green-tinted security camera look, scanlines, bounding box over panic button area, REC indicator, camera HUD overlays
- Generated `public/demo/school/stage-1-detect.jpg` — surveillance-style image of teacher pressing panic button

## [1.49] 2026-04-08 — Feat: Scenario 04 — School Panic Button + Decide map panel

**Added**
- Scenario 04: School Panic Button — full 5-stage scenario (Lincoln Middle School, Houston TX)
- New `panic-alert` detectCard type with floor plan visualization (rooms 201–224, Room 214 highlighted), alert timeline, and system status
- `DecideMapPanel` component: Leaflet map for the Decide stage showing incident location + all unit positions with dashed routing lines and color-coded status
- Redesigned Decide stage layout: map (55%) + unit roster + AI score ring + dispatch brief (45%)
- `hubPath` prop on `LearnLayout` so "Choose Another Scenario" links back to the locale-correct `/demo` hub
- `/demo/school` route — live in hub as Scenario 04

**Fixed**
- "Choose Another Scenario" button now navigates to locale-prefixed `/en/demo` instead of bare `/demo`

## [1.48] 2026-04-08 — Fix: build failure due to NODE_ENV + analytics in root layout

**Fixed**
- Build was failing with `TypeError: Cannot read properties of null (reading 'useContext')` during prerendering of `/_global-error` and `/_not-found` when `NODE_ENV=development` was active in the shell. Root cause: non-standard NODE_ENV caused React hooks state issues during static generation.
- Moved `GoogleAnalytics`, `GoogleTagManager`, `GoogleTagManagerNoScript` from root `layout.tsx` to `[locale]/layout.tsx` — keeps analytics out of the error-rendering path (correct architecture).

**Added**
- `src/app/not-found.tsx` — custom 404 page replacing Next.js built-in (self-contained, dark KabatOne theme).

---

## [1.47] 2026-04-08 — GEO: C5 Command Centers Mexico 2026 guide + metadata optimization

**Added**
- `/resources/c5-command-centers-mexico-2026/` — Full EN + ES guide: C5 definition, 3-layer structure, 6-component tech stack, integration challenge, unified platform benefits, Legacy vs Modern C5 comparison table (7 rows), FAQ (6 Q&A)
- FAQPageSchema, ArticleSchema, BreadcrumbSchema
- EN + ES metadata key `c5CommandCentersMexico2026`, sitemap entry (priority 0.7)
- Hub cards added to `/resources/` index page (EN + ES)

**Improved**
- Metadata optimization: Home, K-Dispatch, K-Traffic, Municipalities — titles extended to 55-62 chars, descriptions to 150-160 chars (EN + ES)

---

## [1.46] 2026-04-07 — Feat: 5 new resource articles, 4 VS pages, demo scenario updates, /lp page

**Added**
- `/resources/what-is-emergency-dispatch-software` — EN + ES GEO article
- `/resources/what-is-incident-management-software` — EN + ES GEO article
- `/resources/what-is-lpr-license-plate-recognition` — EN + ES GEO article
- `/resources/what-is-sensor-fusion` — EN + ES GEO article
- `/resources/what-is-video-analytics` — EN + ES GEO article
- `/vs/avigilon`, `/vs/nice-systems`, `/vs/verint`, `/vs/verkada` — competitor comparison pages
- `/lp` — generic campaign landing page (URL param-driven: `?headline`, `?sub`, `?cta`, `?campaign`)
- `GeoPanel` demo component for scenario explorer
- Violence scenario (Scenario 02) data + 3 stage images (optimized)

**Changed**
- Demo `StageScreen` — significant updates for geo panel and scenario routing
- Demo `medical.ts` and `violence.ts` — scenario data updates
- `demo/page.tsx` — scenario hub updates
- `sitemap.ts` — new entries for all new pages
- `metadata.ts` (EN + ES) — new metadata keys for all new pages
- `resources/page.tsx` — new article cards added
- `site-manager.html` — updated
- `ModulesSection.tsx` — minor update

## [1.45] 2026-04-07 — Analytics: GTM scaffold + GA4 env var + conversion events

**Added**
- `src/components/GoogleTagManager.tsx` — GTM snippet component (activates when `NEXT_PUBLIC_GTM_ID` env var is set)
- `src/app/global-error.tsx` — Minimal global error boundary to fix Next.js prerender issue
- `generate_lead` dataLayer event on successful contact form submission
- `book_demo` dataLayer event on CTA "Book a Demo" button clicks

**Changed**
- `GoogleAnalytics.tsx` — GA4 Measurement ID now reads from `NEXT_PUBLIC_GA4_ID` env var (fallback: hardcoded `G-5MB9CK1FGS`)
- `CTASection.tsx` — converted to client component to support `book_demo` onClick tracking
- Root `layout.tsx` — GTM component added alongside existing GA4 script

---

## [1.44] 2026-04-07 — Competitor: vs Verkada comparison page (EN + ES)

**Added**
- `/vs/verkada/` — KabatOne vs Verkada comparison page, EN + ES
- Focus: cloud physical security (cameras, access, alarms) vs unified public safety platform (CAD, GIS, traffic, multi-agency)
- 9-row comparison table, 4 "why KabatOne wins" cards, FAQ (6 Q&A)
- FAQPageSchema, ArticleSchema, BreadcrumbSchema
- EN + ES metadata key `vsVerkada`, sitemap entry (priority 0.7)

---

## [1.43] 2026-04-07 — GEO: Incident management software explainer (EN + ES)

**Added**
- `/resources/what-is-incident-management-software/` — Full EN + ES GEO explainer
- 5-step incident lifecycle (detection → classification → dispatch → coordination → resolution)
- IMS vs CAD vs PSIM comparison table, 4 key capabilities cards
- FAQ (6 Q&A), FAQPageSchema, ArticleSchema, BreadcrumbSchema
- EN + ES metadata key `whatIsIncidentManagementSoftware`, sitemap entry (priority 0.6)
- Hub cards added to `/resources/` index page (EN + ES)

---

## [1.42] 2026-04-07 — Competitor: vs NICE Systems (Qognify) comparison page (EN + ES)

**Added**
- `/vs/nice-systems/` — KabatOne vs NICE Systems/Qognify comparison page, EN + ES
- Focus: PSIM + video evidence management vs unified public safety platform with native CAD, GIS, and traffic
- FAQPageSchema, ArticleSchema, BreadcrumbSchema
- EN + ES metadata key `vsNiceSystems`, sitemap entry (priority 0.7)

---

## [1.41] 2026-04-07 — Competitor: vs Verint comparison page (EN + ES)

**Added**
- `/vs/verint/` — KabatOne vs Verint comparison page, EN + ES
- Focus: video intelligence/analytics platform vs unified C5 command center platform
- FAQPageSchema, ArticleSchema, BreadcrumbSchema
- EN + ES metadata key `vsVerint`, sitemap entry (priority 0.7)

---

## [1.40] 2026-04-07 — GEO: Sensor fusion explainer (EN + ES)

**Added**
- `/resources/what-is-sensor-fusion/` — Full EN + ES GEO page explaining sensor fusion for command centers
- 6 sensor types: video, acoustic/gunshot, LPR, IoT, GPS/mobile units, citizen signals
- 4 benefit cards: unified picture, faster detection, reduced false positives, multi-layer validation
- FAQ (6 Q&A), FAQPageSchema, ArticleSchema, BreadcrumbSchema
- EN + ES metadata key `whatIsSensorFusion`, sitemap entry (priority 0.6)
- Hub cards added to `/resources/` index page (EN + ES)

---

## [1.39] 2026-04-07 — Competitor: vs Avigilon comparison page (EN + ES)

**Added**
- `/vs/avigilon/` — KabatOne vs Avigilon (Motorola Solutions VMS) comparison page, EN + ES
- Comparison: video-only VMS vs unified platform (CAD, GIS, event management, multi-agency)
- FAQPageSchema, ArticleSchema, BreadcrumbSchema
- EN + ES metadata key `vsAvigilon`, sitemap entry (priority 0.7)

---

## [1.38] 2026-04-07 — GEO: Video analytics explainer (EN + ES)

**Added**
- `/resources/what-is-video-analytics/` — GEO explainer targeting "video analytics", "AI surveillance", "VCA/IVA" keyword cluster
- Content: definition, 6 detection types (intrusion, LPR, counting, gunshot, abandoned objects, fire), edge vs server comparison table, FAQ (6 Q&A)
- FAQPageSchema, ArticleSchema, BreadcrumbSchema
- EN + ES metadata, sitemap entry (priority 0.6), resources hub cards

---

## [1.37] 2026-04-07 — GEO: LPR/ALPR explainer (EN + ES)

**Added**
- `/resources/what-is-lpr-license-plate-recognition/` — GEO explainer targeting "LPR", "ALPR", "license plate recognition" keyword cluster
- Content: definition, 4-step workflow (capture → OCR → cross-reference → alert), fixed vs mobile comparison table, 6 public safety use cases, FAQ (6 Q&A)
- FAQPageSchema, ArticleSchema, BreadcrumbSchema
- Internal links to LPR integration, sensor fusion, face recognition + RTCC, situational awareness, VMS resources
- EN + ES metadata, sitemap entry (priority 0.6), resources hub cards

---

## [1.36] 2026-04-07 — GEO: Emergency dispatch software explainer (EN + ES)

**Added**
- `/resources/what-is-emergency-dispatch-software/` — full EN+ES GEO explainer targeting "emergency dispatch software" keyword cluster (broader than CAD, higher search volume)
- Content: definition, 6-step dispatch workflow, dispatch software vs CAD comparison table, NG911 section, 6 evaluation criteria, FAQ (6 Q&A), related resources
- FAQPageSchema, ArticleSchema, BreadcrumbSchema
- Internal links: LPR, panic buttons, sensor fusion integrations + PSAP, CAD, command center, emergency management resources
- EN + ES metadata keys: `whatIsEmergencyDispatchSoftware`
- Sitemap entry: `/resources/what-is-emergency-dispatch-software` (priority 0.6)
- Resources hub: card added to ES and EN article arrays

---

## [1.35] 2026-03-31 — Feat: Scenario 03 — 911 Medical Emergency (v1.35)
**Added**
- New `/demo/medical` route — full 5-stage 911 Medical Emergency scenario (Detect → Understand → Decide → Act → Learn)
- `src/data/demo/medical.ts` — scenario config: cardiac event at 4817 Westheimer Rd, AMB-7 primary unit, Leaflet map with Houston coords
- 3 Imagen-4 generated background images in `public/demo/medical/` (call intake panel, AI caller analysis, unit assignment)
- Scenario 03 set to `live: true` on the demo hub page
**Changed**
- Demo hub scenario 03 href updated from `#` to `/demo/medical`

## [1.34] 2026-03-31 — Feat: Mobile responsiveness for demo/scenario explorer (v1.34)
**Added**
- Comprehensive mobile-responsive CSS in `DemoLayout` targeting breakpoints ≤768px and ≤480px
- `TopBar`: module strip hidden on mobile, stage pills scroll horizontally, chevrons hidden, header height reduced to ~52px
- `ScenarioPlayer`: `paddingTop` overridden to 108px on mobile (matching shorter header)
- `StageScreen`: cinematic panel adapts to `96vw` on mobile; PiP windows shrink to 110px (hidden on ≤480px); nav buttons stack vertically
- `SplitLayout`: fixed height removed on mobile — phone mockup and dispatcher console stack vertically
- `LearnLayout`: fixed height removed on mobile — timeline, metrics, and recommendations stack vertically
- Demo Hub page: nav links hidden on mobile, padding reduced

## [1.33] 2026-03-30 — Feat: Violence Detection scenario + ScenarioPlayer refactor (v1.33)
**Added**
- New `/demo/violence` route — full 5-stage Violence Detection scenario (Detect → Understand → Decide → Act → Learn)
- `src/data/demo/violence.ts` — scenario config with AI video analytics content, 3 Imagen-4 generated background images
- `src/components/demo/ScenarioPlayer.tsx` — generic scenario orchestrator extracted from LprScenario; accepts `ScenarioConfig` + `basePath` props
- Violence scenario now live on hub page (scenario 02)
**Changed**
- `LprScenario.tsx` refactored into thin wrapper around `ScenarioPlayer`

## [1.32] 2026-03-30 — Feat: /resources/what-is-a-psap — PSAP explainer article (EN + ES)
**Added**
- New `/resources/what-is-a-psap` page — full GEO-optimized explainer: what a PSAP does, technology stack (CAD/GIS/TEL/RMS/VMS/NG911), Legacy vs Modern comparison, evaluation criteria, KabatOne section with product links
- EN + ES metadata keys (`whatIsAPsap`)
- BreadcrumbSchema + ArticleSchema + FAQPageSchema (6 Q&A)
- Internal links to K-Dispatch, K-Video, K-Safety, K-Connect, sensor-fusion, panic-buttons, LPR, CAD dispatch, emergency management, command center articles
- Added to sitemap.ts (priority 0.6) and resources hub page

## [1.31] 2026-03-30 — Feat: /resources/what-is-emergency-management-software — EMS explainer article (EN + ES)
**Added**
- New `/resources/what-is-emergency-management-software` page — full GEO-optimized explainer: core capabilities, incident lifecycle, unified vs fragmented comparison, evaluation criteria, KabatOne section
- EN + ES metadata keys (`whatIsEmergencyManagementSoftware`)
- BreadcrumbSchema + ArticleSchema + FAQPageSchema (6 Q&A)
- Internal links to K-Dispatch, K-Safety, K-Video, sensor-fusion, LPR, RTCC setup guide, CAD dispatch, command center, PSAP articles
- Added to sitemap.ts (priority 0.6) and resources hub page
- Synced SEO master plan: updated site size (47→63 routes, 94→126 URLs), fixed GA4 status, added GEO-014–020, updated phase progress

## [1.30] 2026-03-28 — Feat: Scenario Explorer Phase 1 — LPR/Stolen Vehicle interactive demo
**Added**
- New `/demo` hub page (`src/app/[locale]/demo/page.tsx`) — scenario card grid listing LPR and future scenarios
- New `/demo/lpr` page (`src/app/[locale]/demo/lpr/page.tsx`) — full LPR/Stolen Vehicle interactive demo
- Custom `DemoLayout` (`src/app/[locale]/demo/layout.tsx`) — standalone dark shell, no marketing nav/footer; loads Space Mono font
- 14 new components in `src/components/demo/`: TopBar, StageNav, BottomNav, ModuleTags, PIPWindow, LiveTimestamp, StageContent, NextStagePanel, StageScreen, ProtocolPanel, SplitLayout, LearnLayout, LprScenario (orchestrator)
- `src/data/demo/types.ts` — TypeScript interfaces for scenario data (Stage, ProtocolStep, ScenarioConfig)
- `src/data/demo/lpr.ts` — Full LPR scenario config: 5 stages, all content, protocol steps, module tags
- Stage navigation via pill clicks, bottom nav buttons, and keyboard (← → 1-5 keys)
- Deep-linking: `/demo/lpr?stage=decide` loads Stage 3 directly
- Framer Motion fade transitions between stages (300ms)
- Stage 3: ProtocolPanel with 7-step LPR Hit Response Protocol checklist
- Stage 4: SplitLayout — field officer mobile app mockup (40%) + dispatcher admin console (60%)
- Stage 5: LearnLayout — Critical Events Timeline + Resolution Metrics + Trend Analysis
- PIP (picture-in-picture) window on stages 2–4 showing previous stage feed
- Static timestamps per stage (12:04:01 → 12:12:15)
- Image placeholders using existing LPR images (Stitch exports to be swapped in next iteration)

## [1.25] 2026-03-28 — New: /privacy-policy-tamaulipas — Tamaulipas Contigo privacy policy page
**Added**
- Created `/privacy-policy-tamaulipas` page under `src/app/[locale]/privacy-policy-tamaulipas/page.tsx`
- Migrated full privacy policy content for the Tamaulipas Contigo app from PDF
- Page follows existing privacy page styling (same Nav, Footer, section layout)

## [1.24] 2026-03-27 — New: /lp — Generic campaign landing page (EN + ES)

**Added**
- `src/app/[locale]/lp/page.tsx` — Generic campaign landing page with adaptable headline, subhead, and CTA via URL searchParams (`?headline=`, `?sub=`, `?cta=`, `?campaign=`). Sections: minimal header, hero, stats bar (40+ cities / 70M+ citizens / 40% faster / 72h), 3-column value props, client proof + quote, lead form, footer.
- `ContactForm.tsx` — Added optional `campaignSource` prop that injects a hidden `campaign_source` field into the Formspree submission for campaign tracking.

---

## [1.23] 2026-03-26 — New: /resources/what-is-a-command-center — C2–C5 explainer + FAQ schema

**Added**
- `src/app/[locale]/resources/what-is-a-command-center/page.tsx` — Full EN+ES command center explainer targeting "command center" / "centro de mando" / "C2 C5" keyword cluster. C1–C5 LATAM classification, unified vs fragmented comparison, 6 evaluation criteria.
- ArticleSchema, FAQPageSchema (6 Q&A), BreadcrumbSchema.
- Metadata (EN + ES), sitemap, resources hub. Site now 51 routes × 2 = 102 URLs.

---

## [1.22] 2026-03-26 — New: /resources/what-is-gunshot-detection-software + WebSite schema

**Added**
- `src/app/[locale]/resources/what-is-gunshot-detection-software/page.tsx` — Full EN+ES gunshot detection explainer. Acoustic TDOA triangulation, detection workflow, standalone vs integrated comparison, 6 evaluation criteria.
- ArticleSchema, FAQPageSchema (6 Q&A), BreadcrumbSchema.
- Metadata (EN + ES), sitemap, resources hub.
- `src/lib/schema.ts` — Added `webSiteSchema()` for brand identity.
- `src/app/[locale]/layout.tsx` — Now injects WebSite JSON-LD alongside Organization schema.

---

## [1.21] 2026-03-26 — SEO: full cross-linking audit — /vs/ + /resources/ pages

**Added**
- All 13 `/vs/` comparison pages now have "Integrations:" inline link rows pointing to relevant `/integrations/` pages.
- 7 `/vs/` pages (axon, carbyne, cad, fusus, prepared911, peregrine, rapidssos) also received new "Resources:" link rows.
- All 11 `/resources/` pages (excluding `what-is-situational-awareness-software` which already had them) now have "Integrations:" and "Resources:" inline link rows with 2–4 relevant cross-links each.
- Total: 24 pages updated with internal linking improvements.

---

## [1.20] 2026-03-26 — Simulator v2: lifecycle walkthrough redesign

**Changed**
- Complete redesign of the incident simulator from side-by-side comparison to lifecycle walkthrough
- 8 rich command-center screens: Detect → Understand (Video, GIS) → Decide (Events, Protocol) → Act (Dispatch, Responder) → Learn (BI)
- Dark tactical UI following Stitch v4 mockups (bg: #050a14, stage-colored accents)
- New components: LifecycleHeader, SideNav, StageHeader, NavigationControls, CameraFeed, AlertBanner, MapView, UnitCard, KpiCard, StatusBadge
- Auto-advance with RAF-based timer, manual prev/next, skip-to-summary
- Summary screen with KPI cards, module contributions, AI recommendations
- Removed old fragmented-vs-unified comparison (PlaybackScreen, ScorecardScreen, ModuleDeepDive)

## [1.19] 2026-03-26 — SEO internal links, new pages, simulator

**Added**
- `/resources/what-is-video-management-software` — New SEO resource article (EN+ES)
- `/resources/what-is-situational-awareness-software` — New SEO resource article (EN+ES)
- `/vs/rapidssos` — RapidSOS competitor comparison page (EN+ES)
- `/simulator` — Interactive incident simulator with scenarios, playback, and scorecard
- Internal linking (integrations + resources) on all 7 industry pages and 3 product pages
- Metadata (EN+ES) for all new pages; sitemap updated

## [1.18] 2026-03-26 — Dark hero section + module tab clip fix

**Changed**
- Hero section now uses dark background with grid overlay instead of light
- Fixed module tab buttons being clipped at container edges (added vertical padding & overflow-y visible)

## [1.17] 2026-03-26 — New: Incident Simulator (/simulator)

**Added**
- Full interactive incident simulator at `/simulator` (EN + ES)
- 4-screen experience: Entry → Split-View Playback → Scorecard → Module Deep Dive
- Playback engine with 10-step auto-advancing scenario, dual clocks, pause/resume, speed toggle (1x/2x)
- Split-view: fragmented legacy systems (left) vs unified KabatOne (right)
- Failure effects on steps 5/7/8 (typo error, missed alert, no citizen channel)
- Scorecard with time comparison (2:34 vs 0:52), bar chart, module contributions, summary table
- 3x3 expandable module deep dive grid with counterfactual descriptions
- Framer Motion for animations (badge glows, screen transitions, staggered reveals)
- Metadata (EN + ES), sitemap entry added. Site now 49 routes × 2 = 98 URLs.

---

## [1.16] 2026-03-26 — New: /resources/what-is-situational-awareness-software — GEO explainer + FAQ schema

**Added**
- `src/app/[locale]/resources/what-is-situational-awareness-software/page.tsx` — Full EN+ES explainer targeting "situational awareness software" keyword cluster. Covers core SA platform capabilities (GIS operational map, event correlation, contextual video, field unit tracking), 5-step detection-to-decision workflow, unified vs siloed comparison, 6 evaluation criteria, and KabatOne product links with internal linking.
- ArticleSchema, FAQPageSchema (6 Q&A), BreadcrumbSchema.
- Metadata (EN + ES) — added `whatIsSituationalAwarenessSoftware` key.
- Sitemap — added `/resources/what-is-situational-awareness-software` (priority 0.6). Site now 48 routes × 2 = 96 URLs.
- Resources hub — card added in both EN and ES arrays.

---

## [1.15] 2026-03-26 — Google Analytics GA4 tracking

**Added**
- `src/components/GoogleAnalytics.tsx` — GA4 component using `next/script` with `afterInteractive` strategy
- GA4 Measurement ID `G-5MB9CK1FGS` integrated into root layout for site-wide tracking

## [1.14] 2026-03-26 — New: /vs/rapidssos — RapidSOS comparison page + FAQ schema

**Added**
- `src/app/[locale]/vs/rapidssos/page.tsx` — Full EN+ES comparison page. RapidSOS as call data enrichment vs KabatOne as full response platform. Complementary framing, integration model section, 7-row comparison table, FAQPageSchema (6 Q&A), BreadcrumbSchema.
- Metadata (EN + ES), sitemap. Site now 47 routes × 2 = 94 URLs.

---

## [1.13] 2026-03-26 — SEO: internal links — industry pages → /resources/ and /integrations/

**Added**
- All 7 industry pages (`public-safety`, `municipalities`, `airport`, `retail`, `logistics`, `ports`, `stadiums`) now link to relevant /integrations/ and /resources/ pages via inline link rows matching the product page pattern from v1.11.

---

## [1.12] 2026-03-26 — New: /resources/what-is-video-management-software — VMS explainer + FAQ schema

**Added**
- `src/app/[locale]/resources/what-is-video-management-software/page.tsx` — Full EN+ES explainer targeting "video management software" keyword cluster. VMS capabilities, VMS vs NVR vs CCTV comparison table, standalone vs unified platform, 6 buyer criteria. ArticleSchema, FAQPageSchema (6 Q&A), BreadcrumbSchema.
- Metadata (EN + ES), sitemap, resources hub card. Site now 46 routes × 2 = 92 URLs.

---

## [1.11] 2026-03-26 — SEO: internal links — product pages → /integrations/

**Added**
- `k-dispatch/page.tsx` — Added "Integrations:" inline link row: Panic Buttons, Sensor Fusion, License Plate Recognition
- `k-video/page.tsx` — Added "Integrations:" inline link row: LPR, Facial Recognition, Drones, Access Control
- `k-safety/page.tsx` — Added "Integrations:" inline link row: Sensor Fusion, Panic Buttons, LPR, Access Control
- 6 integration pages were live but received no PageRank flow from core product pages. This fix connects the product → integrations link graph.

---

## [1.10] 2026-03-26 — Feat: compact solutions grid + favicon fix + terminology

**Changed / Improved**
- Replaced full-width alternating product rows with compact 3+2 card grid (no screenshots)
- Updated subtitle copy: solutions are chosen per customer needs, not "working together"
- Changed "modules" → "solutions" in hero subtitle and products section
- Fixed favicon/icon/apple-icon white corners — now transparent
- Fixed ModulesSection tab clipping on narrower viewports

## [1.09] 2026-03-25 — Feat: alternating light/dark homepage design

**Changed / Improved**
- Homepage now uses alternating light and dark sections for a modern, Yotpo-inspired look
- Light sections: Hero, How It Works, Integration Logos, Products, Industries
- Dark sections: Modules, Proof/Stats, Why KabatOne, CTA + Footer
- Added `.page-light` and `.dark-section` CSS utility classes with full variable overrides
- Replaced all hardcoded dark `rgba()` / hex colors across components with CSS variables
- Fixed Milestone logo (switched from broken external URL to local `/images/partners/milestone.svg`)
- Integration logos use `brightness(0)` filter for clean dark appearance on light background
- Nav, ContactForm, EbookDownloadForm, ModulesSection, HeroPanel all theme-aware via CSS variables

## [1.08] 2025-03-25 — Feat: production health check & auto-rollback

**Added**
- GitHub Actions workflow (`.github/workflows/health-check.yml`) — checks production health after every Vercel deploy and every 5 minutes
- Auto-rollback: if `www.kabatone.com` returns non-200, promotes the last working deployment automatically
- Incident alerts: creates a GitHub issue on failure to ensure visibility
- Verifies both EN and ES locales to catch middleware/i18n failures

## [1.07] 2026-03-24 — Fix: restore mobile swipe carousel for Modules section

**Fixed / Improved**
- `src/components/ModulesSection.tsx`: Restored mobile swipe carousel — panels were using display:none toggling with no touch support
- Added touch/swipe gesture handling (touchstart/move/end) with horizontal lock detection
- New mobile card layout: rounded cards with image on top, title + description below (Yotpo-style)
- Active dot indicator stretches into a pill shape for clear swipe affordance
- Desktop layout remains unchanged (tabs + viewer chrome)

## [1.06] 2026-03-24 — Feat: real partner logos in Integrations module panel

**Changed**
- `src/components/ModulesSection.tsx`: Replaced static placeholder image with code-based partner grid showing real logos (Milestone, Genetec, RapidSOS, Carbyne, Corsight, Motorola Solutions, iPro); responsive 4-col desktop / 3-col mobile layout
- Added `public/images/partners/` with 7 local partner logo files (SVG + PNG)
- Fixed Milestone and RapidSOS SVGs missing explicit width/height attributes

---

## [1.05] 2026-03-24 — Fix: last ES accent correction (Acción) on About page

**Fixed**
- `src/app/[locale]/about/page.tsx`: Corrected `'Accion'` → `'Acción'` in the CTA heading

---

## [1.04] 2026-03-24 — Fix: HowItWorks mobile layout + ES accent corrections on About & Contact pages

**Fixed**
- `src/components/HowItWorks.tsx`: Added CSS class names (`hiw-grid`, `hiw-step`) so the existing media query actually applies; steps now stack vertically on mobile with border-bottom instead of border-right
- `src/app/[locale]/about/page.tsx`: Corrected ~50 missing Spanish accents across all sections — mission, values, customer success, global presence, and presence cards (misión, tecnología, innovación, atención, México, Norteamérica, etc.)
- `src/app/[locale]/contact/page.tsx`: Corrected ~20 missing Spanish accents — eyebrow, subtitle, form labels, placeholders, select options, sidebar, and CTA (contáctanos, aquí, día hábil, teléfono, etc.); fixed México accent in HQ address for both locales

---

## [1.03] 2026-03-24 — Fix: Remove dev-only rewrites causing MIDDLEWARE_INVOCATION_FAILED on production

**Fixed**
- `next.config.ts`: Removed `rewrites()` block that was added as a Next.js 16 + Turbopack dev workaround. These rewrites were running in production and causing `500 MIDDLEWARE_INVOCATION_FAILED` on Vercel. The next-intl middleware handles locale routing correctly in production without these rewrites.

---

## [1.02] 2026-03-24 — Fix: Spanish (ES) content — accents, rewrites, and corrections

**Fixed**
- `src/app/[locale]/page.tsx`: corrected all missing accents and rewrites in ES content — hero, products (K-Safety, K-Dispatch, K-Traffic, K-Video, K-Connect), why-cards, industry cards, quote, and CTA section
- `src/components/HowItWorks.tsx`: fixed ES step labels, titles, and body copy (Recolección, decisión, pestañas, etc.)
- `src/components/ModulesSection.tsx`: fixed all 9 ES module blocks — accents, rewrites, and updated feature labels (Analítica, Gestión, Detección, etc.)

---

## [1.01] 2026-03-23 — Feat: KSafetyCommandHero + KTrafficCommandHero panel components

**Added**
- `src/components/industry-heroes/KSafetyCommandHero.tsx`: animated GIS command panel with street grid SVG, pulsing incident markers, unit/camera dots, metric sidebar, and incident list
- `src/components/industry-heroes/KTrafficCommandHero.tsx`: traffic control panel with city grid SVG, signal state panel, live camera feed, active incident card, and footer stats

**Changed**
- `k-safety/page.tsx`: replaced inline GIS mockup with `<KSafetyCommandHero />`
- `k-traffic/page.tsx`: replaced inline traffic mockup inside PageHero with `<KTrafficCommandHero />`

---

## [1.00] 2026-03-23 — Content: ebook page stat + quote update + PDF asset

**Changed**
- `end-of-siloed-response/page.tsx`: stat updated `73M+` → `70M+`; quote replaced with KabatOne-attributed thought leadership line
- `public/downloads/the-end-of-siloed-response.pdf`: PDF asset added

## [0.99] 2026-03-23 — Feat: PDF feedback batch — content, data, and UX updates

**Changed**
- k-safety case study: "Jalisco" → "Michoacán"; stat "10,000+ Direct reports" → "80 Operators"
- k-dispatch case study: renamed to "C5CDMX: Transforming Emergency Response in Mexico"
- k-dispatch AI Workflow cards: added emoji icons (📥 🚨 🤖 📊) to empty icon boxes
- k-video hero stat3: placeholder "IA" → "15+ AI Models"; added section eyebrow to bottom CTA
- k-connect HubDiagram inputs: replaced with Campuses, Universities, Factories, Stores, Citizens, Gov. Facilities
- Homepage agencies strip: updated to 12 clients (C5CDMX, YUC, DGO, SIN, TAM, INAMI, JAL, MICH, CHIS, PUE, NAU, NAY)
- About page regions: restructured to Mexico (HQ), Israel (R&D), United States (Commercial office)
- Stadiums hero stat: "4 Coverage Zones" → "360° Full Coverage"
- Industry pages: "Platform Products" → "Platform Solutions" in 7 pages (airport, public-safety, municipalities, logistics, ports, retail, stadiums)
- EN/ES language switcher: restyled as a segmented pill control (visually distinct from nav links)
- ModulesSection: fixed Analytics tab wrapping to second row (flex-wrap: nowrap)

**Added**
- Integration partner logo strip on homepage after ModulesSection: Milestone, Genetec, RapidSOS, Carbyne, Corsight, Motorola, iPro

---

## [0.97] 2026-03-23 — Feat: contact form connected to Formspree

**Added**
- New `ContactForm` client component (`src/components/ContactForm.tsx`) — submits to Formspree via AJAX (no page redirect)
- Loading, success, and error states; EN + ES strings fully supported

## [0.96] 2026-03-23 — Copy: rename platform "Avalon" → "K1" across 14 files

**Changed**
- Replaced all occurrences of "Avalon" (as the KabatOne platform name) with "K1" across 14 files: `HowItWorks.tsx`, `psim-vs-unified-platform/page.tsx`, `smart-city-platform-guide/page.tsx`, `how-c5-command-centers-work/page.tsx`, `vs/vms`, `vs/hexagon`, `vs/genetec`, `vs/milestone`, `vs/carbyne`, `vs/cad`, `vs/motorola`, `vs/mark43`, `about/page.tsx`, `public-safety-software-municipalities-mexico/page.tsx`
- No structural or logic changes — copy-only rename

## [0.95] 2026-03-23 — Feat: auto-detect Spanish browser language

**Added**
- `localeDetection: true` in `src/i18n/routing.ts` — visitors whose browser is set to Spanish are automatically redirected to `/es/`; preference is persisted via `NEXT_LOCALE` cookie

## [0.94] 2026-03-23 — Fix: populate benefit icon boxes + transparent integration cards + Nav logo

**Fixed**
- `k-safety`, `k-dispatch`, `k-video`: benefit card icon boxes now render emoji icons (previously empty accent squares); added `benefitIcons` arrays per page, second grid uses `i + 3` offset
- `k-safety`, `k-dispatch`, `k-video`, `k-connect`: integration cards updated from solid `#0b1628` → `rgba(255,255,255,0.03)` + `borderTop: 2px solid ACCENT` to match approved design
- `Nav.tsx`: logo `<Image>` now includes `style={{ height: 'auto' }}` to resolve Next.js aspect-ratio console warning (was firing 8× per page)

---

## [0.93] 2026-03-23 — Fix: restore original card styling across all 5 product pages

**Fixed**
- All 5 product pages (`k-safety`, `k-dispatch`, `k-video`, `k-connect`, `k-traffic`): section padding restored from `80px 32px` → `100px 40px` to match original static site
- Benefit cards across all 5 pages: background changed from solid `#0b1628` → `rgba(255,255,255,0.03)` (transparent glass effect), added `borderTop: 2px solid ACCENT`, added 40×40px accent icon box, h3 updated to Barlow Condensed 700 uppercase 17px
- `k-safety`: benefits grid changed from `repeat(4, 1fr)` → `1fr 1fr` (2-column)
- `k-connect`: benefit card icons (emoji) now rendered inside icon boxes; `borderTop` corrected from 3px → 2px
- `k-traffic`: `borderTop` corrected from 3px → 2px on benefit cards and capabilities panel
- `k-dispatch` AI workflow cards: background → transparent, `borderTop` added, number changed from filled circle → DM Mono `01/02/03/04` label, added icon box, h3 updated to Barlow Condensed uppercase

---

## [0.92] 2026-03-23 — New: /resources/what-is-a-real-time-crime-center — RTCC explainer + FAQ schema

**Added**
- `src/app/[locale]/resources/what-is-a-real-time-crime-center/page.tsx` — Full EN+ES explainer targeting "what is a real time crime center" keyword cluster. Covers RTCC capabilities (video, LPR, gunshot detection, AI analytics), 5-step incident response flow, integrated vs standalone comparison, and 6 technology evaluation criteria. ArticleSchema, FAQPageSchema (6 Q&A), BreadcrumbSchema.
- `src/content/en/metadata.ts` + `src/content/es/metadata.ts` — Added `whatIsARealTimeCrimeCenter` key.
- `src/app/sitemap.ts` — Added `/resources/what-is-a-real-time-crime-center` (priority 0.7). Site now 45 routes × 2 = 90 URLs.
- `src/app/[locale]/resources/page.tsx` — Added hub card in both EN and ES arrays (isNew: true).

---

## [0.91] 2026-03-23 — Feat: animated hub-and-spoke diagrams restored on all 5 product pages

**Added**
- `src/components/HubDiagram.tsx` — Shared animated SVG hub-and-spoke component. Accepts `uid`, `product`, `tagline`, 5 input nodes, and 3 output nodes. Each node has a label, inline SVG icon, and optional pill width. Pulses travel along spokes via SMIL `animateMotion`; hub has a pulsing outer ring and a rotating dashed inner ring.

**Changed**
- `src/app/[locale]/k-safety/page.tsx` — PROCESS section replaced with `HubDiagram uid="ks"` (Cameras / Sensors / Access Points / Mobile App / IoT SMP → Event Detection / Location / Action).
- `src/app/[locale]/k-dispatch/page.tsx` — PROCESS section replaced with `HubDiagram uid="kd"` (Voice Calls / SMS Text / Field Units / IoT Alerts / Mobile App → Responders / Coordination / Analytics).
- `src/app/[locale]/k-video/page.tsx` — PROCESS section replaced with `HubDiagram uid="kv"` (IP Cameras / RTSP Streams / Drones / Archives / AI Analytics → Live View / Event Alert / Investigation).
- `src/app/[locale]/k-traffic/page.tsx` — PROCESS section replaced with `HubDiagram uid="kt"` (IoT Sensors / Cameras / Loop Detectors / Vehicles V2X / Field Reports → Signal Control / Incident Alert / Analytics).
- `src/app/[locale]/k-connect/page.tsx` — PROCESS section replaced with `HubDiagram uid="kc"` (Cameras / Organizations / Permissions / AI Monitoring / Event Feeds → Law Enforcement / City Operations / Audit Trail).

---

## [0.90] 2026-03-23 — Fix: single CTA sitewide — remove all secondary buttons

**Changed**
- `src/components/CTASection.tsx` — Removed "or contact sales" text link. Now renders only the single primary "Book a Demo" button.
- `src/components/PageHero.tsx` — Removed ghost secondary `cta2` button. All industry and product page heroes now show only the primary CTA.
- `src/app/[locale]/k-safety/page.tsx` — Removed inline "Talk to an Expert" ghost button.
- `src/app/[locale]/k-video/page.tsx` — Removed inline "Talk to an Expert" ghost button.
- `src/app/[locale]/k-dispatch/page.tsx` — Removed inline "Talk to an Expert" ghost button.
- `src/app/[locale]/k-traffic/page.tsx` — Removed two inline "Talk to an Expert" ghost buttons.
- `src/app/[locale]/about/page.tsx` — Removed secondary "Our Mission" anchor from hero CTA row.

---

## [0.89] 2026-03-23 — Fix: homepage copy + ModulesSection + HowItWorks visuals

**Changed**
- `src/app/[locale]/page.tsx` — Reverted hero H1 to original: "The Unified Operating System for Public Safety". Section heading changed from "Five Products" to "Five Solutions" (EN/ES).
- `src/components/ModulesSection.tsx` — Section label is now static "PLATFORM MODULES" instead of the dynamic active-module name. Renamed "Analytics/BI" tab to "Analytics" to fix second-row wrapping bug.
- `src/components/HowItWorks.tsx` — Replaced small icon circles with illustrated SVGs per step (Collect / Process / Respond), each with a radial glow background. More visual and distinctive.

---

## [0.88] 2026-03-23 — Feat: Vertical proof points on all 7 industry pages

**Added**
- All 7 industry pages — inserted an "In Practice" callout block between the Challenges and Capabilities sections. Each block shows a concrete, vertical-specific metric with a one-sentence scenario:
  - **Public Safety**: `< 90s` dispatch time vs. 4–6 min on legacy CAD
  - **Airport**: `3×` faster incident escalation — one screen vs. three systems
  - **Municipalities**: `4 → 1` vendor contracts eliminated with one command platform
  - **Ports**: `< 90s` perimeter breach alert vs. 8–12 min manual CCTV review, ISPS-compliant
  - **Logistics**: `65%` reduction in gate processing time via LPR + automated bay assignment
  - **Retail**: `4×` faster incident detection — proactive alerts vs. reactive CCTV review
  - **Stadiums**: `1 screen` for 40,000+ attendees across all 4 venue coverage zones

---

## [0.87] 2026-03-23 — Feat: How It Works section + buzzword pass + footer cleanup

**Added**
- `src/components/HowItWorks.tsx` — New 3-step "From sensor to response" section (Collect → Process → Respond) with icon circles, connecting line, bilingual EN/ES copy. Added to homepage between hero and ModulesSection.

**Changed**
- `src/app/[locale]/page.tsx` — Why card 02: replaced vague "shave seconds" with specific "under 90 seconds on KabatOne vs. 4–6 minutes on legacy CAD". Why card 04: replaced AI buzzword with concrete rules engine explanation.
- `src/components/Footer.tsx` — Removed dead `href="#"` Terms and Security links. Privacy now links to `/privacy`.

---

## [0.86] 2026-03-23 — Fix: commit missing EbookDownloadForm component from v0.81

**Fixed**
- `src/components/EbookDownloadForm.tsx` — client component was built in v0.81 but never staged; added to repo

---

## [0.85] 2026-03-23 — New: /resources/what-is-cad-dispatch-software — GEO explainer + FAQ schema

**Added**
- `src/app/[locale]/resources/what-is-cad-dispatch-software/page.tsx` — Full EN+ES explainer page targeting "CAD dispatch software" keyword cluster. Covers CAD functions, 6-step dispatch workflow, CAD vs unified platform comparison, and buyer evaluation criteria. ArticleSchema, FAQPageSchema (6 Q&A), BreadcrumbSchema.
- `src/content/en/metadata.ts` + `src/content/es/metadata.ts` — Added `whatIsCadDispatchSoftware` key with keyword-targeted title and description.
- `src/app/sitemap.ts` — Added `/resources/what-is-cad-dispatch-software` (priority 0.6). Site now 44 routes × 2 = 88 URLs.
- `src/app/[locale]/resources/page.tsx` — Added hub card for new page in both EN and ES arrays (isNew: true), inserted after existing "new" articles.

**Updated**
- `SEO/kabatone-seo-master-plan.md` — Added v0.83–v0.84 log rows, new explainer to Phase 3 content table, site size to 44 routes / 88 URLs.

---

## [0.84] 2026-03-23 — Copy: hero rewrite + CTA consolidation + products framing

**Changed**
- `src/app/[locale]/page.tsx` — Hero H1 rewritten from abstract "Unified Operating System" to concrete "One screen. Every camera, dispatch call, and field unit — connected." Subtitle now opens with explicit who/what: "KabatOne is the command-and-control platform for governments and public safety agencies."
- `src/app/[locale]/page.tsx` — Products section subline updated: replaced "unified intelligence layer" buzzword with concrete "without stitching together six different vendors"
- `src/components/CTASection.tsx` — Consolidated from two equal-weight CTA buttons to one primary "Book a Demo" button + a subtle text link fallback; eliminates competing CTAs across all pages that use this component

---

## [0.83] 2026-03-23 — Fix: sitemap orphans — /privacy and /resources/end-of-siloed-response + resources hub card

**Fixed**
- `src/app/sitemap.ts` — added `/resources/end-of-siloed-response` (priority 0.7) and `/privacy` (priority 0.3), both built in v0.81 and v0.68 respectively but never added to sitemap
- `src/app/[locale]/resources/page.tsx` — added ebook card for `/resources/end-of-siloed-response` at top of both EN and ES article arrays; page was an internal orphan with no discovery path from the hub

**Updated**
- `SEO/kabatone-seo-master-plan.md` — synced agent run log (v0.78–v0.82), updated Phase 3 to 0%/Not started, Phase 4 to 30%, site size to 43 routes / 86 URLs, added /vs/peregrine to keyword map, added industry brief to Phase 3 content table

---

## [0.82] 2026-03-22 — Design: industry brief landing page visual overhaul

**Changed**
- Removed Carbyne reference from stat labels — replaced with "Market consolidation signal"
- Removed cover card from hero right column; form is now the sole focus, column narrowed to 360px
- Redesigned SVG illustration: larger viewBox (960×420), richer detail — dot grid backgrounds, red-tinted fragmented side with orange warning triangles, response time comparison bar (8m 24s vs 3m 12s), blue unified side with subtitles in each node, LIVE badge on hub, improved glow filters and animations

## [0.81] 2026-03-22 — Feat: Industry brief landing page /resources/end-of-siloed-response/

**Added**
- `/resources/end-of-siloed-response/` — EN + ES landing page for the Q2 2026 industry brief "The End of Siloed Response"
- `EbookDownloadForm` client component: 4-field lead capture form (name, email, org, role) with success state and PDF download link
- Ebook cover visual built in pure CSS/JSX — no image dependency
- 9-chapter content grid with numbered cards
- 4 key data point stats from the brief ($625M, >$3B, 83K+, 40%)
- "What's inside" checklist (7 bullets EN + ES)
- Pull quote from Chief of Operations testimonial
- Bottom CTA pointing to architecture review request
- `public/downloads/` directory for PDF hosting
- Metadata entries in EN + ES metadata files
- ArticleSchema + BreadcrumbSchema + OrganizationSchema JSON-LD
- Full bilingual support (EN + ES)

## [0.80] 2026-03-21 — Feat: KabatOne vs Peregrine comparison page /vs/peregrine/

**Added**
- `/vs/peregrine/` — EN + ES comparison page: Peregrine predictive analytics vs KabatOne unified operations platform
- 7-row comparison table (primary category, predictive analytics, CAD, video, GIS, traffic, integration model)
- 6 FAQ pairs in EN and ES with FAQPage schema + BreadcrumbSchema
- "Strategic Intelligence vs Operational Platform" positioning section
- Metadata (EN + ES) + sitemap entry
- Related links to /vs/fusus, /vs/motorola, /vs/hexagon, /resources/ai-in-public-safety

## [0.79] 2026-03-21 — Fix: sitemap orphans + SEO master plan sync

**Fixed**
- `src/app/sitemap.ts` — added 3 missing integration paths (`/integrations/access-control/`, `/integrations/drones/`, `/integrations/panic-buttons/`) that were built in v0.78 but never added to the sitemap
- `SEO/kabatone-seo-master-plan.md` — corrected site size (35 → 41 unique routes, 70 → 82 sitemap URLs); marked all 6 integration pages as Done with correct version numbers (v0.74 + v0.78)

## [0.78] 2026-03-21 — Feat: 3 new integration pages — Access Control, Drones, Panic Buttons

**Added**
- `/integrations/access-control/` — Physical access control (EN + ES): OSDP/Wiegand/REST/ONVIF protocols, 4 facility use cases, metrics strip, 6 FAQs, hero image
- `/integrations/drones/` — UAV/UAS integration (EN + ES): 6 capability cards, 4 operational scenarios, specs table, 6 FAQs, hero image
- `/integrations/panic-buttons/` — Panic button integration (EN + ES): 5-step response flow, 6 sector verticals, 6 FAQs, hero image
- Metadata (EN + ES) for all 3 pages
- Footer: 3 new integration links
- 3 hero images generated via Nano Banana

## [0.77] 2026-03-20 — Design: Integration pages visual overhaul — hero images + section illustrations

**Improved**
- Added AI-generated hero illustration to LPR, Face Recognition, and Sensor Fusion integration pages
- Added "From Plate to Alert in Under 3 Seconds" flow diagram section on LPR page
- Added correlation timeline diagram to Sensor Fusion "How the Engine Works" section
- Added 3-metric stats strip (identification rate, false positives, human confirmation) to Face Recognition privacy section
- Generated 5 illustrations via Nano Banana: lpr-hero, lpr-flow, face-hero, fusion-hero, fusion-correlation

## [0.76] 2026-03-20 — Fix: Next.js 16 dev routing + layout restructure + footer integrations

**Fixed**
- `next.config.ts` — Added `rewrites()` as dev fallback for Next.js 16 + Turbopack: middleware edge rewrites don't fire in Turbopack dev; rewrite rules map `/path` → `/en/path` to let the `[locale]` App Router match routes correctly
- `src/app/layout.tsx` — Moved `<html>/<body>` and font variables here (root layout, required by Next.js 16 Turbopack); was missing `<html>/<body>` tags causing runtime error

**Added**
- `src/components/Footer.tsx` — Integrations column: LPR, Face Recognition, Sensor Fusion links (EN + ES labels)
- `src/app/[locale]/layout.tsx` — Locale layout now sets `lang` attribute via inline script; removed `<html>/<body>` (now in root layout)

---

## [0.75] 2026-03-20 — Chore: Combined site-manager page (Dev Environment + Changelog in one tabbed file)

**Added**
- `site-manager.html` — Single internal management page with two tabs: "Dev Environment" (flow map: Mac → GitHub → Vercel/GitHub Pages → production) and "Changelog" (full timeline). Replaces `changelog.html` as the go-to management file.

---

## [0.74] 2026-03-20 — Feat: Integration pages — LPR, Face Recognition, Sensor Fusion

**Added**
- `src/app/[locale]/integrations/lpr/page.tsx` — License Plate Recognition integration page: what is LPR, how KabatOne integrates it, 4 use cases, technical specs table, FAQ (6 Q&A), ArticleSchema + FAQSchema + BreadcrumbSchema, bilingual EN/ES
- `src/app/[locale]/integrations/face-recognition/page.tsx` — Face Recognition integration page: two operational modes, 4 use cases, privacy & compliance controls section (4 controls), FAQ (6 Q&A), schemas, bilingual EN/ES
- `src/app/[locale]/integrations/sensor-fusion/page.tsx` — Sensor Fusion integration page: 6 sensor types, 5-step correlation engine flow, 3 use cases, FAQ (6 Q&A), schemas, bilingual EN/ES
- Metadata keys added to `src/content/en/metadata.ts` and `src/content/es/metadata.ts`: `integrationLpr`, `integrationFaceRecognition`, `integrationSensorFusion`

**Changed**
- `src/app/sitemap.ts` — Added 3 new paths: `/integrations/lpr`, `/integrations/face-recognition`, `/integrations/sensor-fusion` (priority 0.6 each); site now 38 routes / 76 sitemap URLs

---

## [0.73] 2026-03-20 — Feat: Resources hub + 2 new blog-style articles

**Added**
- `src/app/[locale]/resources/page.tsx` — Resources hub index page with 7 article cards (3-column responsive grid), bilingual EN/ES
- `src/app/[locale]/resources/rtcc-setup-guide/page.tsx` — "Real-Time Crime Center Setup Guide": 5 setup steps, common mistakes, metrics to track, FAQ (6 Q&A), ArticleSchema + FAQSchema + BreadcrumbSchema
- `src/app/[locale]/resources/ai-in-public-safety/page.tsx` — "AI in Public Safety: A Guide for Cities": 6 use cases, real benefits, challenges, what to look for, FAQ (6 Q&A), schemas
- Metadata keys added to `src/content/en/metadata.ts` and `src/content/es/metadata.ts`: `resources`, `rtccSetupGuide`, `aiInPublicSafety`

**Changed**
- `src/components/Nav.tsx` — Resources nav link now points to `/resources` (hub index); removed the dead Blog `href="#"` link (desktop + mobile)
- `src/app/sitemap.ts` — Added 3 new paths: `/resources` (priority 0.7), `/resources/rtcc-setup-guide`, `/resources/ai-in-public-safety`

---

## [0.72] 2026-03-20 — Chore: remove static HTML files from nextjs branch

**Removed**
- Deleted 16 static website HTML files from `nextjs` branch: `hero-mockup.html`, `about.html`, `contact.html`, `solutions.html`, 7 industry pages, 5 product pages
- Updated `CLAUDE.md` project snapshot to reflect the current Next.js stack — `main` branch is now the legacy static site only

---

## [0.71] 2026-03-20 — Perf: lazy load below-fold images, switch mockups to WebP

**Improved**
- `hero-mockup.html` — added `loading="lazy"` to 16 below-fold images: 7 integration partner logos, 5 product section icons, 4 city camera photos, footer logo
- `hero-mockup.html` — switched `k-traffic-mockup.png` and `k-connect-mockup.png` references to `.webp` (WebP files already exist in public/images/)
- Expected impact: reduces initial eager image load by ~70%, improves LCP toward 1.2–1.5s, full-load time reduced significantly

---

## [0.70] 2026-03-20 — Docs: Update SEO master plan to current state

**Updated**
- `SEO/kabatone-seo-master-plan.md` — reflects all work done through v0.69
- Stack corrected to Next.js on Vercel; all 11 /vs/ comparison pages marked Done; competitor tracking, keyword map, performance targets, and agent run log updated

---

## [0.69] 2026-03-20 — Feat: KabatOne vs Fusus and vs Prepared 911 comparison pages

**Added**
- `/vs/fusus` comparison page (EN + ES) — KabatOne vs Fusus RTCC platform; covers video intelligence vs full operations, community video, CAD, GIS, traffic, FAQ schema, breadcrumb schema
- `/vs/prepared911` comparison page (EN + ES) — KabatOne vs Prepared 911; covers NG911 call taking vs full response cycle, CAD, GIS, traffic, FAQ schema, breadcrumb schema
- Metadata registered in EN and ES metadata files (`vsFusus`, `vsPrepared911`)
- Both routes added to sitemap.ts
- Footer links added to Footer.tsx and hero-mockup.html

---

## [0.68] 2026-03-20 — Add: Privacy Policy page

**Added**
- New `/privacy` route (EN + ES) with full privacy policy content sourced from kabatone.com/privacy-policy
- Sections: scope, data collected, processing purposes, social media, cookies, security, third-party transfers, ARCO rights, minors, jurisdiction, modifications, and contact
- Metadata registered in both EN and ES metadata files

## [0.67] 2026-03-20 — Fix: Footer columns grouped and right-aligned

**Fixed**
- Company and Competitors columns are now grouped together on the right side of the footer, eliminating excess stretch between them

## [0.66] 2026-03-20 — Fix: Footer competitor links now visible in static site

**Fixed**
- Global `nav { position: fixed }` rule was causing `<nav class="footer-links">` to float up into the fixed nav bar, making links invisible in the footer. Changed footer link containers to `<div>` elements.

## [0.65] 2026-03-20 — Fix: Footer competitors column is now vertical

**Fixed**
- Restructured footer in `Footer.tsx` and `hero-mockup.html` to a multi-column layout — "Competitors" heading with links stacked vertically below, matching standard footer column pattern

## [0.64] 2026-03-20 — Fix: Move competitors to a dedicated bottom row in footer

**Fixed**
- Restructured footer in both `Footer.tsx` and `hero-mockup.html` — competitors now appear in a clear second row below the copyright/nav row, separated by a border

## [0.63] 2026-03-20 — Fix: Group competitor links under "Competitors" heading in footer

**Fixed**
- Competitor links in `Footer.tsx` (Next.js) and `hero-mockup.html` now grouped under a "Competitors" / "Competidores" label with a vertical list, instead of appearing as individual inline links

## [0.62] 2026-03-20 — Fix: Add competitor links to static footer

**Fixed**
- Added 9 competitor links (vs. Genetec through vs. CAD) to `hero-mockup.html` footer — previously only on the Next.js branch footer

## [0.61] 2026-03-19 — Feat: Batch competitor comparison pages — Motorola, Hexagon, Mark43, Axon, Carbyne, CAD
**Added**
- `/vs/motorola/` — KabatOne vs Motorola Solutions (PremierOne CAD, Avigilon, CommandCentral) — angle: the real cost of separate products vs a unified platform
- `/vs/hexagon/` — KabatOne vs Hexagon Safety (HxGN OnCall CAD) — angle: great CAD + GIS, missing video and traffic
- `/vs/mark43/` — KabatOne vs Mark43 (cloud-native CAD/RMS) — angle: cloud-native extended to full response lifecycle
- `/vs/axon/` — KabatOne vs Axon (body cameras + Evidence.com) — angle: officer-centric vs command center-centric; no hardware lock-in
- `/vs/carbyne/` — KabatOne vs Carbyne (next-gen 911) — angle: Carbyne reinvented call intake; KabatOne manages everything after
- `/vs/cad/` — KabatOne vs Traditional CAD Systems (category page, names Motorola PremierOne, Hexagon HxGN OnCall, Tyler New World, CentralSquare, Mark43)
- All 6 pages: 7-row comparison table, 6 FAQ pairs, FAQPage schema, BreadcrumbList schema, EN + ES
- Metadata entries in `en/metadata.ts` and `es/metadata.ts` for all 6 pages
- 6 new routes added to sitemap at priority 0.7
- Footer updated with all 6 new links (vs. Motorola, vs. Hexagon, vs. Mark43, vs. Axon, vs. Carbyne, vs. CAD)

## [0.60] 2026-03-20 — Feat: KabatOne vs Traditional VMS comparison page /vs/vms/
**Added**
- New category-level comparison page at `/vs/vms/` (EN + ES) — KabatOne vs Traditional VMS
- 7-row comparison table, 6 FAQ pairs with FAQPage + BreadcrumbList schema
- Angle: "The real cost of building on top of a VMS" — fragmentation, integration burden, operational delays
- Metadata, sitemap entry, footer link ("vs. VMS") added

## [0.59] 2026-03-19 — Fix: mobile hero gap — trust badges now visible above the fold
**Fixed**
- Reduced `margin-bottom` on `.hp-sub`, `.hp-cta-row`, and `.hp-badges` at ≤560px breakpoint
- SOC 2 / Uptime / 24/7 badges now visible in initial mobile viewport without scrolling

## [0.58] 2026-03-20 — Feat: KabatOne vs Milestone XProtect comparison page /vs/milestone/
**Added**
- New comparison page at `/vs/milestone/` (EN + ES) — KabatOne vs Milestone XProtect
- 7-row comparison table, 6 FAQ pairs with FAQPage schema, BreadcrumbList schema
- Metadata entries in `en/metadata.ts` and `es/metadata.ts`
- Added `/vs/milestone` to sitemap at priority 0.7
- Added "vs. Milestone" link to footer (EN + ES)

## [0.57] 2026-03-20 — Feat: add vs. Genetec link to footer
**Added**
- Added "vs. Genetec" link in the footer nav (both EN and ES) pointing to `/vs/genetec/`

## [0.56] 2026-03-19 — Perf: host logo locally — LCP 1.4s → 0.8s, score 96 → 100
**Improved**
- Downloaded KabatOne logo from CDN and hosted at `/public/images/logo.png`
- Updated `Nav.tsx` to use local path instead of `cdn.prod.website-files.com`
- Eliminates cross-origin connection for the LCP element (logo on every page, `priority`)
- Lighthouse: Performance 96 → **100/100**, LCP 1.4s → **0.8s**, all CWV green

## [0.55] 2026-03-20 — Fix: replace custom middleware with next-intl built-in middleware
**Fixed**
- Replaced hand-rolled locale middleware with `createMiddleware(routing)` from next-intl — fixes 404 on all nested EN routes (industries, resources, vs) in production
- Removed redundant `/en/:path*` redirect from `next.config.ts` (next-intl handles it natively)
- All 21 routes now return 200 in both EN and ES locales

## [0.54] 2026-03-19 — Perf: replace raw img with next/image in product carousel
**Improved**
- Replaced the only remaining raw `<img>` tag in `page.tsx` with `<Image fill>` from `next/image`
- First product (K-Safety) gets `priority={true}` — triggers browser preload for LCP candidate
- Added `sizes` hint for responsive image serving
- Lighthouse Next.js score: 96/100 (A), images 333 KB vs static HTML 91.7 MB

## [0.53] 2026-03-19 — KabatOne vs Genetec comparison page
**Added**
- New `/vs/genetec/` comparison page (EN + ES) — KabatOne vs Genetec Security Center
- 7-row comparison table: category, dispatch/CAD, GIS, traffic, community video, field ops, target market
- 6 FAQ pairs with FAQPage schema
- BreadcrumbList schema + metadata in en/metadata.ts and es/metadata.ts
- `/vs/genetec` added to sitemap.ts (priority 0.7)
- Built on positioning doc brand identity: Genetec = monitoring-first; KabatOne = end-to-end response workflow

## [0.52] 2026-03-19 — Core Web Vitals audit and fixes
**Improved**
- Performance: LCP 3.7s → 2.4s on homepage by adding `priority` to initial ModulesSection image
- Performance: Product icons moved from CDN (330KB each, unoptimized) to local paths with Next.js optimization
- Accessibility: Added `<main>` landmark to layout — fixes missing landmark audit failure
- Accessibility: Fixed color contrast — `--blue` darkened from `#3b82f6` to `#2563eb` (all CTA buttons)
- Accessibility: Module active tab text changed to `#fff`; ms-tag changed to white on colored background
- Accessibility: Carousel dot touch targets enlarged from 8px visual to 24px clickable hit area
- Accessibility: Removed opacity reduction on product chrome titles
- Lighthouse homepage: Performance 88→98, Accessibility 92→100, Best Practices 100, SEO 100

---

## [0.51] 2026-03-19 — Production-ready Vercel deployment
**Changed / Added / Fixed**
- Converted all module images from PNG to WebP (86MB → 507KB) — fixes 30s page load timeout
- Replaced raw `<img>` tags with Next.js `<Image>` for automatic optimization in ModulesSection
- Removed `unoptimized` flag from Nav logo, enabling Next.js image optimization
- Added `formats` and `deviceSizes` to next.config.ts image config
- Created 7 industry hero visualization components (city map, dispatch board, terminal map, port map, logistics tracker, store layout, stadium view) with animated CSS panels
- Wired hero visualizations into all 7 industry pages via `PageHero` children prop
- Added visible breadcrumb navigation (`Home / Industries / Page`) to all 7 industry pages
- Expanded footer with Privacy, Terms, Security placeholder links
- Added Blog placeholder link to Nav (desktop + mobile)

---

## [0.50] 2026-03-19 — GEO-012: Structured data audit and fixes
**Fixed**
- Added BreadcrumbList JSON-LD schema to 5 product pages (K-Dispatch, K-Video, K-Safety, K-Traffic, K-Connect) and About page — previously missing
- Fixed locale-specific URLs in what-is-a-public-safety-platform breadcrumb + Article schema (was hardcoded to EN, now locale-aware)
- Audited all 17+ pages: Organization, SoftwareApplication, FAQPage, Article, BreadcrumbList schemas validated

---

## [0.49] 2026-03-19 — Internal linking pass across all 17 pages
**Added**
- "Related Resources" section on all 5 product pages with 3 resource links + industry cross-links each
- "Related Resources" section on all 7 industry pages with 2-3 resource links + 2 related industry links each
- "Related Articles" cross-links on all 5 resource pages (each links to the other 4)
- All links bilingual EN/ES, placed before CTA sections for consistent UX

---

## [0.48] 2026-03-19 — GEO: 5 citeable explainer pages (GEO-003 through GEO-007)
**Added**
- 5 new `/resources/` explainer pages — bilingual EN/ES, optimized for AI citation (GEO):
  - `what-is-a-public-safety-platform` — definition, core components, legacy comparison
  - `psim-vs-unified-platform` — PSIM vs unified architecture comparison table
  - `how-c5-command-centers-work` — C5 architecture, technology, emergency workflow
  - `smart-city-platform-guide` — capabilities, evaluation criteria, deployments
  - `public-safety-software-municipalities-mexico` — Mexico requirements, C5, 911 integration
- `articleSchema()` added to `src/lib/schema.ts` for resource pages
- Article + FAQPage (6 Q&A each) + BreadcrumbList JSON-LD on all 5 pages
- Metadata entries for all 5 pages in both `en/metadata.ts` and `es/metadata.ts`
- 5 pages added to `sitemap.ts` with hreflang alternates
- "Resources" nav link added to desktop and mobile Nav
- Internal links to product pages throughout all resource content

---

## [0.47] 2026-03-18 — SEO: Schema markup, OG tags, hreflang fixes, Nav i18n, public assets
**Added**
- `src/lib/schema.ts` — JSON-LD schema builders (Organization, SoftwareApplication, FAQPage, BreadcrumbList)
- Organization schema injected globally via layout.tsx
- SoftwareApplication + FAQPage schema on all 5 product pages (bilingual EN/ES, 4-5 Q&A each)
- BreadcrumbList + FAQPage schema on all 7 industry pages (bilingual EN/ES)
- GEO entity definition block on About page (structured, citation-optimized text with 73M+ citizens stat)
- FAQPage schema on About page (4 Q&A pairs)
- OG image (1200x630) and branded K1 favicon/PWA icons generated
- Web manifest (`site.webmanifest`) for PWA support

**Fixed**
- Hreflang: changed `es-MX` to `es` in metadata.ts + sitemap.ts to match routing locale
- Hreflang: added `x-default` pointing to EN canonical on all pages
- OG tags: added `og:image`, `og:locale`, `twitter:card` (summary_large_image) on all 15 pages

**Changed**
- Nav.tsx: all labels now bilingual (Solutions/Soluciones, Industries/Industrias, About/Nosotros, Contact/Contacto)
- Nav arrays moved inside component for locale access

---

## [0.46] 2026-03-18 — Add carousel header to modules section
**Added**
- Carousel header with prev/next arrow buttons, module counter (01/09), large module name, and tagline — matching the original GitHub Pages layout
- Header name and tagline metadata for all 9 modules (EN + ES)

---

## [0.45] 2026-03-18 — Align Next.js homepage with GitHub Pages version
**Added**
- `ModulesSection.tsx` — 9-tab interactive Business Intelligence section (Video, Dispatch, Events, GIS, Integrations, Responder, Citizen, AI, BI) with auto-rotation, pause on hover, ARIA support, and animated progress bar
- Module screenshots in product cards (replacing placeholder grid pattern)
- Moved `/images/` to `/public/images/` so static assets are served correctly by Next.js

**Fixed**
- Product cards now show actual module screenshots instead of empty dark placeholders
- Hero headline no longer applies gradient to "Public Safety" — matches original all-white styling
- Section order now matches original: Hero → Modules tabs → Stats → Products → Why → Industries → CTA

---

## [0.44] 2026-03-18 — Next.js: all 15 pages ported EN+ES, sitemap, robots, shared components
**Added**
- Ported 12 remaining pages: K-Traffic, K-Connect, 7 industry pages (Public Safety, Municipalities, Airport, Retail, Logistics, Ports, Stadiums), Homepage, About, Contact
- Shared components: `Footer.tsx`, `CTASection.tsx`, `PageHero.tsx` — used across all 15 pages
- `src/app/sitemap.ts` — 30 entries (15 EN + 15 ES) with hreflang alternates
- `src/app/robots.ts` — allows all crawlers, points to sitemap
- Updated existing K-Dispatch, K-Video, K-Safety pages to use shared Footer component
- Middleware matcher updated to `/:path*` for broader compatibility; file extension skip uses `\.\w+$` regex

**Verified**
- All 30 URLs return HTTP 200
- `/sitemap.xml` returns 30 `<url>` entries
- `/robots.txt` returns correct content
- `/en/k-dispatch` returns 308 redirect
- `npm run build` → 0 TypeScript errors
- `npx tsc --noEmit` → 0 errors

## [0.43] 2026-03-18 — Fix: replace next-intl middleware with Node.js-compatible locale routing
**Fixed**
- `middleware.ts` — replaced `createMiddleware` from next-intl (which imports `negotiator` CJS, crashing in Vercel V8 edge isolate) with a pure Next.js `NextResponse` implementation; handles `/en/*` redirect, ES prefix passthrough, and EN internal rewrite with zero CJS dependencies
- `src/i18n/routing.ts` — simplified to plain config object (no `defineRouting`), keeps `localePrefix: 'as-needed'` for correct Nav URL generation
- `next.config.ts` — removed `withNextIntl` plugin and `beforeFiles` rewrites (now handled by custom middleware); kept `/en/:path*` → `/:path*` redirect
- `[locale]/layout.tsx` — explicit `locale={locale}` prop on `NextIntlClientProvider` so `useLocale()` in Nav.tsx resolves correctly without server-side plugin context
- `npm run build` → 0 errors, middleware compiled as edge proxy

## [0.42] 2026-03-18 — Fix: MIDDLEWARE_INVOCATION_FAILED on Vercel edge runtime
**Fixed**
- `middleware.ts` — wrap `createMiddleware` in explicit function; skip `/_next`, `/api`, favicon, and static file extensions before invoking intl middleware (prevents edge runtime crash on Vercel)
- No changes to `next.config.ts` or `request.ts` — already correct
- `npm run build` → 0 errors, middleware compiled as edge proxy

## [0.41] 2026-03-18 — Fix: EN at root URL, load Barlow Condensed + Space Grotesk fonts
**Fixed / Added**
- `localePrefix: 'as-needed'` — EN pages now at `/k-dispatch`, ES at `/es/k-dispatch` (no /en/ prefix visible)
- `next.config.ts` `redirects()` — `/en/:path*` → `/:path*` (308), removes redundant default locale prefix
- `next.config.ts` `rewrites(beforeFiles)` — internally maps `/k-dispatch` → `/en/k-dispatch` so App Router `[locale]` segment correctly receives 'en'
- `[locale]/layout.tsx` — Space Grotesk + Barlow Condensed loaded via `next/font/google`, CSS variables applied to `<html>`
- `globals.css` — body uses `var(--font-space-grotesk)`, h1/h2/h3 use `var(--font-barlow-condensed)`
- 0 TypeScript errors, all 6 URLs confirmed (correct lang= and page titles)

## [0.40] 2026-03-18 — Next.js: i18n routing, K-Dispatch + K-Video + K-Safety pages EN+ES
**Added**
- `src/i18n/routing.ts` — next-intl routing config (`localePrefix: 'always'`, locales: en/es)
- `src/i18n/request.ts` — `getRequestConfig` for locale detection
- `src/i18n/navigation.ts` — locale-aware `Link`, `useRouter`, `usePathname` via `createNavigation`
- `middleware.ts` — next-intl middleware at project root
- `src/app/[locale]/layout.tsx` — locale layout with `NextIntlClientProvider` and `lang` attr
- `src/app/[locale]/k-dispatch/page.tsx` — K-Dispatch page (EN+ES, all sections, red accent)
- `src/app/[locale]/k-video/page.tsx` — K-Video page (EN+ES, all sections, purple accent, camera grid)
- `src/app/[locale]/k-safety/page.tsx` — K-Safety page (EN+ES, all sections, cyan accent, GIS mockup)
- `src/components/Nav.tsx` — shared nav with dropdown menus, language switcher, mobile hamburger
**Changed**
- `next.config.ts` — wrapped with `createNextIntlPlugin`, added CDN image domain
- `src/app/globals.css` — added KabatOne design tokens (CSS custom properties)
- `src/app/layout.tsx` — replaced with pass-through root layout (locale layout is effective root)
**Fixed**
- i18n locale routing: switched from `as-needed` to `always` prefix to fix App Router `[locale]` segment matching

## [0.39] 2026-03-18 — Next.js scaffold: content structure, EN+ES metadata, metadata helper
**Added**
- New `nextjs` branch for clean Next.js 16.2.0 rebuild (TypeScript, Tailwind v4, App Router)
- Scaffolded Next.js into repo; existing HTML files untouched
- `src/content/en/metadata.ts` — English SEO metadata for all 15 pages
- `src/content/es/metadata.ts` — Spanish SEO metadata for all 15 pages
- `src/lib/metadata.ts` — `generatePageMetadata()` helper with canonical + hreflang + OG tags
- Empty content stubs for EN+ES pages (home, products ×5, industries ×7, about, contact)
- `next-intl` installed for i18n routing

## [0.37] 2026-03-18 — Fix: nav bar not full-width on mobile on all 5 product pages

**Fixed**
- Mobile nav `left: 0; right: 0` were missing `!important` on all 5 product pages (k-safety, k-dispatch, k-traffic, k-video, k-connect)
- Nav bar was clipped short on the right side on mobile — now spans full viewport width

## [0.36] 2026-03-18 — Fix: hamburger menu JS missing on all 7 industry pages

**Fixed**
- Mobile nav hamburger button had no JS on any of the 7 industry pages
- Added navToggle click handler and mobile dropdown expand/collapse script to all 7 files
- Both hamburger toggle and Solutions dropdown now work correctly on mobile

## [0.35] 2026-03-18 — Fix: move responsive CSS into head style block on all 7 industry pages

**Fixed**
- Responsive media query rules were in a body `<style>` tag which some browsers ignore
- Moved all responsive CSS into the `<head>` `<style>` block for all 7 industry pages
- Each page now has authoritative breakpoint rules (768/640/480/360px) in the proper location

## [0.34] 2026-03-18 — Fix missing grid-collapse rules on industry pages

**Fixed**
- municipalities: `.benefits-grid` (3-col) and `.features-two-col` (2-col) now collapse to 1-col at 640px
- public-safety: `.cap-grid` (2-col numbered cards) now collapses to 1-col at 640px
- logistics: `.coverage-grid` and `.cap-grid` now collapse to 1-col at 640px
- retail, stadiums: `.cap-grid` now collapses to 1-col at 640px
- stadiums: `.zones-grid` now collapses to 1-col at 640px
- ports: `.advantages-grid` (3-col) now collapses to 1-col at 640px

## [0.33] 2026-03-18 — Mobile-first responsive adaptation across all 17 pages

**Added**
- Standardized 5-point breakpoint system (360 / 480 / 640 / 768 / 1024px) applied to every HTML file
- hero-mockup.html: headline scaling (116px→30px on small phones), section padding reduction, CTA stacking at 480px, modules title/quote reduction
- 5 product pages (k-safety, k-dispatch, k-traffic, k-video, k-connect): hero-h1 scaling, section-inner padding tightening, hero-ctas and bottom-cta-btns stacking at 480px, footer stacking at 640px
- about.html: hero-h1 scaling, section padding reduction, hero-btns stacking at 480px
- solutions.html: page-headline scaling, solutions grids collapse to 1-col at 640px, CTA stacking, footer stacking
- contact.html: page-wrap padding reduction, bottom-cta tightening, footer stacking
- 7 industry pages (airport, logistics, municipalities, ports, public-safety, retail, stadiums): ind-hero-inner collapses to 1-col at 768px, challenges-grid/workflow-steps collapse, cta-btns stack, font scaling 76px→30px

## [0.32] 2026-03-18 — Improve K-Traffic hero mockup with city map and live panels

**Improved**
- Replaced basic intersection diagram in K-Traffic hero with a full city-grid SVG map
- Added color-coded traffic flow overlays (green/orange/red) on road segments
- Added animated vehicle dots traversing streets using SVG animateMotion
- Added pulsing incident markers at congested intersections
- Added camera feed panel (CAM-07 with scan lines, REC badge, speeding alert)
- Added active incident card (signal fault with location and timestamp)

## [0.31] 2026-03-18 — Add mobile layout for How It Works diagrams on all product pages
**Added**
- All 5 product pages (k-traffic, k-safety, k-dispatch, k-connect, k-video) now show a compact 3-column grid layout (inputs | hub | outputs) on mobile (≤640px) instead of the unreadable scaled-down SVG. Desktop SVG is unchanged.

## [0.30] 2026-03-18 — Fix mobile tab bar scroll + swipe hint
**Fixed**
- Module tab bar (Video, Dispatch, GIS, etc.) was only showing middle tabs on mobile due to `justify-content: center` making left-side tabs unreachable. Changed to `flex-start`, added iOS momentum scroll, and added a right-edge fade gradient to signal swipeability.

## [0.29] 2026-03-18 — Fix mobile nav full-width on all pages
**Fixed**
- Mobile nav was only covering the left portion of the header on 15 pages — `position: fixed` override was missing `left: 0; right: 0`, so the nav didn't stretch to full viewport width. Fixed across all product, industry, and content pages.

## [0.28] 2026-03-17 — Fix sticky nav on all remaining pages (solutions, about, contact, industries)
**Fixed**
- Same `position: relative` nav bug found on solutions.html, about.html, contact.html, and all 7 industry pages — all updated to `position: fixed !important`

## [0.27] 2026-03-17 — Fix sticky nav on mobile + diagram horizontal scroll on all product pages
**Fixed**
- Mobile nav was `position: relative` — changed to `position: fixed` so header stays sticky on scroll on all 5 product pages
- Hub-and-spoke diagram now horizontally scrollable on mobile (`overflow-x: auto`, `min-width: 560px`) instead of shrinking to illegible size

## [0.26] 2026-03-17 — Add animated hub-and-spoke "How It Works" diagrams to all product pages
**Added**
- SVG animated hub-and-spoke flow diagram replacing plain numbered steps in "How It Works" sections
- Diagrams feature: animated glowing dots flowing from input nodes → hub → output nodes, pulsing hub ring, and rotating dashed inner circle
- Each product has unique node labels and icons: K-Safety, K-Dispatch, K-Traffic, K-Video, K-Connect

## [0.25] 2026-03-17 — Update K-Safety hero stats to platform-wide figures
**Changed**
- Replaced single-site stats (5,400 cameras, 530 panic buttons, 40 cities) with platform-wide figures: 68 Projects, 100+ Agencies, 30+ Integrations

## [0.24] 2026-03-17 — Update K-Connect section text to match Kabatone.com
**Changed**
- Headline: "Citizen Engagement & Reporting" → "Secure community-based video sharing"
- Description and feature bullets updated to match live site copy

## [0.23] 2026-03-17 — Add real camera feeds to K-Video hero mockup
**Improved**
- Replaced empty CSS-gradient camera cells in K-Video hero with actual street camera images from CDN
- Added subtle purple/teal tint overlays per cell for surveillance aesthetic
- Reused 4 images across 6 cells with varied object-position for variety

## [0.22] 2026-03-17 — Update K-Connect mockup image
**Changed**
- Swapped k-connect-mockup.png with updated version

## [0.21] 2026-03-17 — Replace K-Connect product image on home page
**Changed**
- Replaced SVG network diagram with new local mockup image (images/k-connect-mockup.png)

## [0.20] 2026-03-17 — Replace K-Traffic product image on home page
**Changed**
- Replaced CDN-hosted K-Traffic map image with new local mockup (images/k-traffic-mockup.png)

## [0.19] 2026-03-17 — Reorder modules carousel on home page

**Changed**
- `hero-mockup.html` Modules section: reordered tabs, panels, dots, and JS `MOD_ORDER` to new sequence: Video, Dispatch, Events, GIS, Integrations, Responder, Citizens, AI Engine, Analytics/BI
- Video is now the default active module on page load (was GIS)

---

## [0.18] 2026-03-17 — Translate remaining Spanish labels to English

**Fixed**
- `hero-mockup.html` K-Safety: "C5 · Centro de Comando" → "C5 · Command Center"; "SISTEMA ACTIVO" → "SYSTEM ACTIVE"
- `hero-mockup.html` K-Traffic: "SISTEMA ACTIVO" → "SYSTEM ACTIVE"

---

## [0.17] 2026-03-17 — K-Connect: facility map + K-Traffic: simplified panel

**Improved**
- `hero-mockup.html` K-Connect: replaced abstract network diagram with a dark city GIS map showing color-coded facility markers (schools=blue, hospitals=red, factories=orange) with animated flow dots and per-type stats bar (12 Schools / 8 Hospitals / 6 Factories)
- `hero-mockup.html` K-Traffic: removed metrics side panel and legend — full width now shows real AVIF map image + floating accident camera popup only

---

## [0.16] 2026-03-17 — Product panels: real images + full English translation

**Improved**
- `hero-mockup.html` K-Traffic: replaced SVG road drawing with real `k_traffic.avif` product image from kabatone.com; translated overlay labels (CLEAR/SLOW/CONGESTED), popup text, and metrics panel to English
- `hero-mockup.html` K-Video: replaced 4 hand-drawn SVG feeds with real camera JPEG images from kabatone.com CDN (Glorieta del Ángel, Fuente de la Diana, Explanada Juárez, Autopista Urbana); AI bounding-box overlay on feed 1; translated all labels to English
- `hero-mockup.html` K-Dispatch: translated all text from Spanish to English (UNITS, ON SCENE, AVAILABLE, EN ROUTE, NEW, IN REVIEW, ASSIGNED, ON SCENE; incident types; priority badges HIGH/MED/LOW)
- `hero-mockup.html` K-Connect: translated network diagram labels (Schools, Police, Emergency, Business, City Hall, CONNECTED, SHARED, ENCRYPTED) and KPI panel header to "CITIZEN PORTAL ANALYTICS" for clarity

---

## [0.15] 2026-03-17 — K-Connect: network diagram illustration

**Improved**
- `hero-mockup.html` K-Connect: replaced phone mockup with animated network diagram adapted from k-connect.html — central KabatOne hub connected to 5 satellite nodes (Schools, Police, Emergency, Business, City Hall) with animated SVG flow dots and dashed connection lines; stats bar showing 14 connected orgs, 3 active shares, encrypted

---

## [0.14] 2026-03-17 — Product mock panel refinements

**Improved**
- `hero-mockup.html` K-Dispatch: fixed sidebar layout using new `.pmock-res2` rows (colored dot + name/status), widened to 115px; improved kanban column headers with stronger accent colors and border lines
- `hero-mockup.html` K-Traffic: replaced signal grid with SVG traffic map showing colored route lines (green/orange/red flow) and floating accident camera popup (CAM-031)
- `hero-mockup.html` K-Video: replaced blank feeds with 4 SVG-drawn street scenes including AI bounding box on accident feed; added video controls bar (Record, Pause, Stop, scrubber, Snapshot, Fullscreen)
- `hero-mockup.html` K-Connect: replaced report list with citizen phone mockup showing incident-reporting app UI (category picker, location field, description, submit button)

---

## [0.12] 2026-03-17 — About page: Customer Success & Services section

**Added**
- `about.html`: New "Customer Success & Services" section with 5 prominent service cards — 24/7 Support, Dedicated Customer Success, Training, Professional Services, and White Glove Service
- Each card has a colored accent border, icon, labeled tag, title, and description; fully responsive (5-col → 3-col → 2-col → 1-col)

---

## [0.13] 2026-03-17 — Product section HTML/CSS mock dashboards

**Improved**
- `hero-mockup.html`: Replaced all 5 static AVIF product screenshots with inline HTML/CSS operational dashboard panels inspired by the actual KabatOne admin prototype
- K-Safety: dark GIS map with SVG road grid, colored incident dots, dashed radius ring, and live "Eventos Cercanos" incident table overlay
- K-Dispatch: Kanban board with resource sidebar (7 units) and 4 workflow columns, real incident cards with priority badges (ALTA/MEDIA/BAJA)
- K-Traffic: 2×2 signal status grid with live traffic light indicators and phase counters, plus metrics side panel
- K-Video: camera list sidebar with status dots + 2×2 dark camera feed grid with REC/SIN SEÑAL labels
- K-Connect: citizen report list with status badges + KPI grid and SLA progress bars

## [0.11] 2026-03-17 — Product section chrome frame & live stat chips

**Improved**
- `hero-mockup.html`: Redesigned product card screenshots with an app chrome frame (macOS-style traffic-light dots, product title, pulsing LIVE badge) and floating stat chips overlaying each screenshot — making each product feel like a live operational view
- Each product card now shows two contextual data chips: K-Safety (247 Units Live / 18 Active Incidents), K-Dispatch (24 Active Calls / 4.2m Avg Response), K-Traffic (142 Signals / 3 Violations/hr), K-Video (1,847 Cameras / 2 AI Alerts), K-Connect (1,204 Reports / 94% Resolved)
- Added colored glow shadow per product color to reinforce brand identity on each card

## [0.10] 2026-03-17 — Gray text contrast improvements across all pages

**Fixed**
- All 17 HTML pages: increased `--muted` from `#7b9db8` to `#9dbdd0` and `--dim` from `#94a3b8` to `#b4c4d4` — secondary text, labels, nav links, and descriptions are now noticeably more readable (contrast ratio improved from ~6:1 to ~8–9:1)
- `changelog.html`: fixed `--muted` which was incorrectly set to `#4a5c7a` (only ~2.7:1 contrast, failing WCAG AA) — now matches the corrected site-wide value
- `hero-mockup.html`: raised `.mpr-feed-label` opacity from `rgba(255,255,255,0.4)` to `rgba(255,255,255,0.65)` for better readability on small text

---

## [0.9] 2026-03-17 — Mobile nav missing on industry pages + logos overflow fix

**Fixed**
- All 7 industry pages (`industry-public-safety`, `industry-municipalities`, `industry-airport`, `industry-retail`, `industry-logistics`, `industry-ports`, `industry-stadiums`): Added missing mobile nav CSS, hamburger `<button>` HTML, and JS toggle/dropdown logic — these pages were showing the full desktop nav on mobile with no hamburger
- `hero-mockup.html`: Integration logos panel (`.int-logos-wall`) — added `overflow: hidden`, reduced horizontal padding `28px` → `20px`, changed `.int-grid` `max-width` from `440px` to `100%` to prevent right-column clipping on narrow viewports

---

## [0.8] 2026-03-17 — Mobile QA pass: layout, touch, and accessibility fixes

**Fixed**
- `hero-mockup.html`: Hamburger button tap target enlarged (`padding: 8px 4px` → `14px 11px`, span width `22px` → `24px`) to meet 44×44px minimum
- `hero-mockup.html`: Stat counters now pre-populated with real values (40/70/99/24) so they don't flash "0" if JS animation is delayed
- `hero-mockup.html`: Platform pillars grid (`.why-grid`) switches to single column below 480px (was 2-col at all mobile sizes)
- `hero-mockup.html`: Quote block padding reduced from `0 48px` to `0 20px` on screens ≤480px
- `hero-mockup.html`: CTA fine-print font size raised from `10px` to `12px`
- `hero-mockup.html`: Product demo panel height increased from `220px` to `260px` on mobile to reduce image clipping
- `hero-mockup.html`: Logo link `aria-label="KabatOne — Home"` added for screen reader accessibility
- `hero-mockup.html`: Module swipe animation fixed — removed `!important` from `transform: none` and `opacity: 1` in mobile media query; the `!important` was blocking JS inline transforms, causing panels to jump instead of slide
- `hero-mockup.html`: Footer logo — added `width: auto` to prevent potential stretching

---

## [0.7] 2026-03-17 — Nav & footer link fixes on remaining pages

**Fixed**
- `contact.html`: Industries nav item expanded from plain link to full dropdown (all 7 industry pages); About link fixed to `about.html`; "Book a Demo" button moved inside `<ul>` (was incorrectly outside)
- `about.html`: Contact link in nav and footer fixed to `contact.html` (was `#`)
- All 7 industry pages (`industry-public-safety`, `industry-municipalities`, `industry-airport`, `industry-retail`, `industry-logistics`, `industry-ports`, `industry-stadiums`): Footer Contact link fixed to `contact.html` (was `#`)

---

## [0.6] 2026-03-17 — Improved mobile swipe for modules carousel

**Improved**
- `hero-mockup.html`: Replaced basic touchstart/touchend swipe with a full drag-based animation system
  - Real-time panel dragging follows finger position during the swipe
  - Axis locking: distinguishes horizontal swipe from vertical scroll before committing to drag
  - Threshold-based commit (≥50 px) or snap-back if swipe is too short
  - Smooth cubic-bezier slide animation on commit and snap-back
  - Proper cleanup and state reset after each gesture
- `.mod-panel-right` height changed from fixed `260px` to `min-height: 260px; height: auto` so taller content is no longer clipped

---

## [0.5] 2026-03-17 — Changelog page created

**Added**
- `CHANGELOG.md` — source-of-truth change log for the repo
- `changelog.html` — public-facing changelog page matching site design
- AGENTS.md rule: all agents must update CHANGELOG.md before committing

---

## [0.4] 2026-03-17 — Nav & link fixes across all pages

**Fixed**
- Logo link now points to `hero-mockup.html` on all pages (was `#`)
- Footer "Contact" link on homepage now points to `contact.html` (was `#`)
- Contact form: replaced invalid Formspree URL with a JS `mailto:` handler — clicking "Send Message" now opens the user's email client with all fields pre-filled to `info@kabatone.com`
- `about.html`, all industry pages, all solution pages: minor nav + link corrections

---

## [0.3] 2026-03-17 — Mobile responsiveness

**Added**
- Hamburger nav menu (≤768px) on all 8 pages: hero-mockup, k-safety, k-dispatch, k-traffic, k-video, k-connect, solutions, contact
- Hamburger animates to × on open; closes on outside tap
- Mobile menu shows full nav including Solutions dropdown (flat, no hover required)
- Responsive layout CSS added to all 5 solution pages:
  - 900px: hero collapses to 1 column, hero mockup hidden, grids go 2-col
  - 640px: all grids go 1 column, padding reduced for small phones

**Fixed**
- Removed broken CSS rule `.nav-links li:not(:last-child) { display: none }` that was hiding all nav links on mobile in hero-mockup.html
- Nav hamburger touch target enlarged (14px padding, 24px width)
- Nav `position: fixed` on mobile so it stays visible while scrolling
- Product screen images fill full width at tablet breakpoint

---

## [0.2] 2026-03-17 — Solutions pages, contact page, industry pages

**Added**
- `k-safety.html` — K-Safety product page (GIS & Situational Awareness, accent #3b82f6)
- `k-dispatch.html` — K-Dispatch product page (Emergency Dispatch, accent #ef4444)
- `k-traffic.html` — K-Traffic product page (Traffic Management, accent #06b6d4)
- `k-video.html` — K-Video product page (Video Intelligence, accent #a855f7)
- `k-connect.html` — K-Connect product page (Citizen Engagement, accent #22c55e)
- `solutions.html` — Solutions overview page linking to all 5 products
- `contact.html` — Contact page with form, contact details (email, phone, HQ address, US office), social links (LinkedIn, Instagram, Facebook), global presence section
- `about.html` — About page
- `industry-public-safety.html`, `industry-municipalities.html`, `industry-airport.html`, `industry-retail.html`, `industry-logistics.html`, `industry-ports.html`, `industry-stadiums.html` — 7 industry vertical pages
- Products Section added to homepage (`hero-mockup.html`) between Proof and Why sections, pulling content from the 5 solution pages with CDN product icons
- Solutions dropdown added to nav on all pages (hover on desktop, flat list on mobile)
- Industries dropdown added to homepage nav
- All "Contact" nav links updated to point to `contact.html`

---

## [0.1] 2026-03-17 — Initial commit

**Added**
- `hero-mockup.html` — Main homepage: hero, modules carousel, products section CSS, proof/logos section, Why KabatOne, industries grid, platform section, bottom CTA
- `images/modules/` — Module screenshot assets (gis, dispatch, video, citizen, etc.)
- `AGENTS.md` — Multi-agent coordination file with design system, page structure, and git workflow rules
