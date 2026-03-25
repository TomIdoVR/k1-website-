# KabatOne Website — Changelog

All notable changes to the website are logged here.
Every agent or contributor making changes **must** append an entry before committing.

Format: `## [version] YYYY-MM-DD — Short title`

---

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
