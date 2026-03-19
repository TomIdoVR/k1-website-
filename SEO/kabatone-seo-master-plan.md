# KabatOne — Master SEO Plan
**Last updated:** 2026-03-18
**Primary market:** Mexico (es-MX) — Phase 2
**Launch language:** English (en)
**Production domain:** kabatone.com
**Staging:** https://tomidovr.github.io/k1-website-/
**Stack:** Static HTML (staging) → Webflow (production)

---

## Overall progress

| Phase | Status | Complete |
|-------|--------|----------|
| Phase 0 — Foundation & audit | Done | 100% |
| Phase 1 — Pre-launch fixes | Done | 100% |
| Phase 2 — Launch | In progress | 0% |
| Phase 3 — Post-launch growth | Not started | 0% |
| Phase 4 — Spanish (es-MX) | In progress | 60% |
| Phase 5 — Authority & backlinks | Not started | 0% |
| Phase 6 — Generative Engine Optimization (GEO) | In progress | 70% |

---

## Phase 0 — Foundation & audit

### Site architecture decisions
| Item | Decision | Status |
|------|----------|--------|
| URL structure | Clean slugs — kabatone.com/k-dispatch/ | Done |
| Language architecture | English root now, /es/ subfolder in Phase 4 | Done |
| Primary market | Mexico (es-MX) — Phase 4 | Done |
| Secondary market | US/EN — live at launch | Done |
| Webflow URL settings | Clean URLs enabled (no .html in production) | Not started |

### Agent infrastructure
| Agent | Role | Installed | Last run |
|-------|------|-----------|----------|
| auditor.md | Read-only data collection | Done | 2026-03-18 |
| analyzer.md | Diagnosis + ticket generation | Done | 2026-03-18 |
| implementor.md | Write-access + Webflow instructions | Done | 2026-03-18 |
| validator.md | Read-only QA + launch readiness | Done | Running |
| reporter.md | Stakeholder reports | Not started | — |
| orchestrator.md | Pipeline coordination | Not started | — |

### Audit completed
| Item | Status | Output |
|------|--------|--------|
| 15 pages fetched and inspected | Done | outputs/audit-raw/pages/*.json |
| Signal extraction (title, H1, meta, canonical, schema, hreflang) | Done | outputs/audit-raw/ |
| Cross-reference (sitemap, GSC, crawl) | Partial — no GSC or crawl yet | outputs/audit-raw/cross-reference.json |
| Pattern analysis | Done | outputs/analysis/pattern-map.json |
| Issue scoring | Done | outputs/analysis/issue-scores.json |
| Fix tickets generated (10 tickets) | Done | outputs/analysis/seo-technical-fixes.md |
| Validation checklist generated | Done | outputs/analysis/seo-validation-checklist.md |

---

## Phase 1 — Pre-launch fixes

### Ticket tracker
| ID | Issue | Priority | Scope | Status | Notes |
|----|-------|----------|-------|--------|-------|
| SEO-001 | Title tags — English, keyword-targeted | High | Per-page content | Done | 15/15 applied — industry-public-safety.html title 64 chars, trim 4 post-launch |
| SEO-002 | H1 tags — English, keyword-targeted | High | Per-page content | Done | 15/15 applied, 5 artifacts corrected — re-apply gradient styling in Webflow |
| SEO-003 | html lang="en" verification | High | Global template | Done | Already correct — no change needed |
| SEO-004 | Canonical tags — production URLs | High | Global template | Done | 15/15 applied |
| SEO-005 | XML sitemap + GSC submission | High | New infrastructure | Not started | Do on Webflow publish day |
| SEO-006 | Meta descriptions — English | Medium | Per-page content | Done | 15/15 inserted |
| SEO-007 | Hreflang — en + es-MX | Medium | New infrastructure | Done | Fixed es-MX→es alignment, added x-default in metadata.ts + sitemap.ts |
| SEO-008 | Nav Solutions link inconsistency | Low | Page-type template | Done | Nav fully translated EN/ES — Soluciones, Industrias, Nosotros, Contacto |
| SEO-009 | Schema markup | Low | New infrastructure | Done | Organization (global), SoftwareApplication (5 products), FAQPage (all pages), BreadcrumbList (7 industries) |
| SEO-010 | OG tags | Low | Per-page content | Done | og:image, og:locale, twitter:card on all 15 pages via generatePageMetadata() |

### Implementation log
| Run | Date | Agent | Result |
|-----|------|-------|--------|
| Audit run 1 | 2026-03-18 | Auditor | 15 pages, all 200, outputs written |
| Analysis run 1 | 2026-03-18 | Analyzer | 10 tickets generated, Spanish copy |
| Implementation run 1 | 2026-03-18 | Implementor | 60 changes applied, English copy override |
| Validation run 1 | 2026-03-18 | Validator | 615 checks, 612 passed, 3 minor post-launch items |
| SEO implementation 2 | 2026-03-18 | Claude Code (4 parallel agents) | Schema/JSON-LD on all 15 pages, OG+hreflang fixes, Nav i18n, public assets — build passes 0 errors |
| GEO explainer pages | 2026-03-19 | Claude Code (5 parallel agents) | 5 /resources/ pages created (GEO-003–007), articleSchema added, metadata+sitemap updated, Resources nav link — build passes 0 errors |

### Pre-launch checklist
| Item | Status |
|------|--------|
| All 15 title tags updated (English) | Done |
| All 15 H1s updated (English) | Done |
| All 15 meta descriptions inserted | Done |
| All 15 canonical tags applied | Done |
| html lang verified on all pages | Done |
| Validation run complete | Done |
| Git push after validation | Done | commit b5b5795 — 15 files, 60 insertions |
| Webflow publish | Not started |
| GSC verified + sitemap submitted | Not started |
| GSC property created for kabatone.com | Not started |
| GA4 installed with conversion events | Not started |
| robots.txt verified in Webflow | Not started |
| Staging site blocked from Google | Not started |

---

## Phase 2 — Launch

### Launch day tasks
| Item | Status |
|------|--------|
| Publish Webflow site to kabatone.com | Not started |
| Apply Webflow SEO instructions (webflow-instructions.md) | Not started |
| Apply title tags in Webflow Page Settings | Not started |
| Apply meta descriptions in Webflow Page Settings | Not started |
| Apply canonical URLs in Webflow Page Settings | Not started |
| Verify sitemap at kabatone.com/sitemap.xml | Not started |
| Submit sitemap to GSC | Not started |
| Request indexing for priority pages in GSC | Not started |
| Verify GA4 tracking on live site | Not started |
| Run Auditor against live kabatone.com | Not started |
| Run Validator against live site | Not started |

### Priority pages to index first
| Page | URL | Status |
|------|-----|--------|
| K-Dispatch | kabatone.com/k-dispatch/ | Not started |
| K-Video | kabatone.com/k-video/ | Not started |
| K-Safety | kabatone.com/k-safety/ | Not started |
| Homepage | kabatone.com/ | Not started |
| Industry: Public Safety | kabatone.com/industries/public-safety/ | Not started |
| Industry: Municipalities | kabatone.com/industries/municipalities/ | Not started |

---

## Phase 3 — Post-launch growth (Weeks 5–12)

### Content and page creation
| Item | Priority | Status |
|------|----------|--------|
| /vs/genetec/ — competitor comparison | High | Not started |
| /vs/motorola-solutions/ | High | Not started |
| /vs/psim/ — PSIM alternative | High | Not started |
| /vs/hexagon/ | Medium | Not started |
| /vs/carbyne/ | Medium | Not started |
| Blog post: AI in public safety | Medium | Not started |
| Blog post: Smart city platform guide | Medium | Not started |
| Blog post: RTCC setup guide | Medium | Not started |
| Integration page: VMS | Medium | Not started |
| Integration page: LPR | Medium | Not started |
| Integration page: Face recognition | Medium | Not started |
| Integration page: Sensor fusion | Low | Not started |
| solutions.html audit + SEO fix | High | Not started |

### Technical post-launch
| Item | Priority | Status |
|------|----------|--------|
| SEO-008: Fix nav Solutions link inconsistency | Low | Done |
| SEO-009: Schema markup (Organization + SoftwareApplication) | Low | Done |
| SEO-010: OG tags on all pages | Low | Done |
| Core Web Vitals audit (LCP, CLS, INP) | High | Not started |
| Internal linking pass — module → solution → resource | High | Done |
| Backlink outreach — industry publications | Medium | Not started |

### Performance baselines to establish
| Metric | Target | Baseline | Status |
|--------|--------|----------|--------|
| GSC impressions (30 days) | — | Not set | Not started |
| GSC clicks (30 days) | — | Not set | Not started |
| Average position — branded | < 3 | Not set | Not started |
| Average position — K-Dispatch target KW | < 20 | Not set | Not started |
| Average position — K-Video target KW | < 20 | Not set | Not started |
| Average position — K-Safety target KW | < 20 | Not set | Not started |
| Pages indexed | 15 | 0 | Not started |
| Pages ranking pos 6–20 | — | 0 | Not started |

---

## Phase 4 — Spanish (es-MX) expansion

### Architecture decision
| Item | Decision | Status |
|------|----------|--------|
| Spanish URL structure | /es/ subfolder (kabatone.com/es/k-dispatch/) | Decided |
| Hreflang pattern | en root + es-MX /es/ + x-default root | Decided |
| Spanish content production | Native MX Spanish writer required | Not started |
| Translation approach | Human translation — no machine translation | Decided |

### Spanish content pipeline
| Item | Priority | Status |
|------|----------|--------|
| Hire native Mexican Spanish SEO copywriter | High | Not started |
| Spanish keyword validation (Ahrefs/Semrush) | High | Not started |
| Translate + adapt: K-Dispatch | High | Not started |
| Translate + adapt: K-Video | High | Not started |
| Translate + adapt: K-Safety | High | Not started |
| Translate + adapt: Homepage | High | Not started |
| Translate + adapt: Industry: Public Safety | High | Not started |
| Translate + adapt: Industry: Municipalities | High | Not started |
| Translate + adapt: K-Traffic | Medium | Not started |
| Translate + adapt: K-Connect | Medium | Not started |
| Translate + adapt: all remaining industry pages | Medium | Not started |
| Implement /es/ subfolder in Webflow | High | Not started |
| Implement hreflang on all en + es pages | High | Not started |
| SEO-007: hreflang implementation | High | Not started |
| Submit /es/ sitemap to GSC | High | Not started |

### Spanish keyword targets (validated targets — pending tool confirmation)
| Page | Primary keyword (ES) | Secondary |
|------|---------------------|-----------|
| /es/ (Homepage) | plataforma de seguridad pública | software seguridad pública |
| /es/k-dispatch/ | software CAD y despacho de emergencias | sistema despacho 911 |
| /es/k-video/ | gestión de video para seguridad pública | VMS inteligente |
| /es/k-safety/ | plataforma de seguridad pública en tiempo real | centro de mando seguridad |
| /es/k-traffic/ | software de gestión de tráfico inteligente | control semafórico adaptativo |
| /es/k-connect/ | plataforma de videovigilancia comunitaria | cámaras ciudadanas |
| /es/industries/public-safety/ | soluciones de seguridad pública para municipios | seguridad pública municipal |
| /es/industries/municipalities/ | software de gestión de emergencias municipios | centro de mando municipal |

---

## Phase 5 — Authority and backlinks

| Item | Priority | Status |
|------|----------|--------|
| Identify industry publications (EN + ES) | High | Not started |
| Identify gov-tech media targets | High | Not started |
| Identify LATAM smart city publications | High | Not started |
| Produce linkable asset: public safety platform guide | Medium | Not started |
| Produce linkable asset: smart city technology report | Medium | Not started |
| Partner page / integrations backlink strategy | Medium | Not started |
| HARO / journalist outreach for public safety stories | Low | Not started |
| Conference and event listings | Low | Not started |

---

## Keyword map — English (current)

### Product pages
| Page | Primary keyword | Secondary keywords | Search intent |
|------|----------------|-------------------|---------------|
| Homepage | public safety platform | public safety software, smart city platform | Informational / navigational |
| K-Dispatch | CAD dispatch software | emergency dispatch software, 911 CAD system | Commercial |
| K-Video | video management software public safety | VMS public safety, video analytics command center | Commercial |
| K-Safety | public safety platform real-time | command center software, situational awareness platform | Commercial |
| K-Traffic | traffic management software | intelligent traffic system, adaptive signal control | Commercial |
| K-Connect | community video sharing platform | public private video sharing, citizen camera integration | Commercial |

### Industry pages
| Page | Primary keyword | Secondary keywords | Search intent |
|------|----------------|-------------------|---------------|
| Public Safety | public safety solutions cities | smart city security platform, municipal public safety | Commercial |
| Municipalities | emergency management software municipalities | city command center software, municipal dispatch | Commercial |
| Airport | airport security management software | airport surveillance AI, airport incident management | Commercial |
| Retail | retail security video analytics | retail loss prevention software, retail AI surveillance | Commercial |
| Logistics | logistics supply chain security | warehouse security software, LPR logistics | Commercial |
| Ports | port security platform | ISPS port security software, vessel tracking platform | Commercial |
| Stadiums | stadium venue security software | stadium crowd analytics, event security AI | Commercial |

### Comparison pages (to build)
| Page | Primary keyword | Status |
|------|----------------|--------|
| /vs/genetec/ | KabatOne vs Genetec | Not started |
| /vs/motorola-solutions/ | KabatOne vs Motorola Solutions | Not started |
| /vs/psim/ | PSIM alternative | Not started |
| /vs/hexagon/ | KabatOne vs Hexagon | Not started |
| /vs/carbyne/ | KabatOne vs Carbyne | Not started |

---

## Competitor tracking

| Competitor | Domain | Primary strength | Monitor for |
|------------|--------|-----------------|-------------|
| Genetec | genetec.com | VMS + access control | Rankings for VMS, command center terms |
| Motorola Solutions | motorolasolutions.com | CAD, radio, public safety | Rankings for CAD, dispatch, PSIM |
| Hexagon | hexagon.com | Public safety + GIS | Rankings for situational awareness, GIS |
| Carbyne | carbyne.com | NG911, CAD | Rankings for 911 dispatch, CAD |
| Peregrine | peregrine.ai | RTCC, predictive policing | Rankings for real-time crime center |

---

## Performance targets (set at launch, track monthly)

| Metric | Month 1 | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|---------|----------|
| Pages indexed | 15 | 15 | 20+ | 30+ |
| GSC impressions/mo | — | 500+ | 2,000+ | 8,000+ |
| GSC clicks/mo | — | 50+ | 300+ | 1,000+ |
| Branded avg position | < 5 | < 3 | < 2 | 1 |
| Non-branded avg position | — | < 40 | < 25 | < 15 |
| Pages ranking pos 1–10 | 0 | 1–3 | 5–10 | 15+ |
| Pages ranking pos 6–20 | 0 | 3–6 | 8–15 | 20+ |
| Demo requests from organic | 0 | 1–3/mo | 5–10/mo | 15+/mo |

---

## Agent run log

| Date | Agent | Pages | Input | Output | Notes |
|------|-------|-------|-------|--------|-------|
| 2026-03-18 | Auditor | 15 | GitHub Pages staging | outputs/audit-raw/ | No GSC, crawl, or sitemap available |
| 2026-03-18 | Analyzer | 15 | outputs/audit-raw/ | outputs/analysis/ | Spanish copy generated — overridden to English |
| 2026-03-18 | Implementor | 15 | outputs/analysis/ | outputs/implementation/ | 60 changes applied, English copy, 5 H1 artifacts corrected, commit b5b5795 |
| 2026-03-18 | Validator | 15 | outputs/implementation/ | outputs/validation/ | 99.5% pass rate — SAFE TO PUSH — pushed to origin/main |

---

## Files and outputs reference

| File | Location | Description |
|------|----------|-------------|
| SKILL.md | ~/.claude/skills/seo-technical-implementation/ | Core skill definition |
| auditor.md | ~/.claude/skills/.../agents/ | Auditor agent |
| analyzer.md | ~/.claude/skills/.../agents/ | Analyzer agent |
| implementor.md | ~/.claude/skills/.../agents/ | Implementor agent |
| validator.md | ~/.claude/skills/.../agents/ | Validator agent |
| audit-summary.md | outputs/audit-raw/ | Raw audit coverage summary |
| pattern-map.json | outputs/analysis/ | Signal patterns across all pages |
| issue-scores.json | outputs/analysis/ | Scored issue registry |
| seo-technical-fixes.md | outputs/analysis/ | 10 fix tickets |
| seo-validation-checklist.md | outputs/analysis/ | 65-row QA checklist |
| changes-applied.json | outputs/implementation/ | 60 changes before/after log |
| webflow-instructions.md | outputs/implementation/ | Production Webflow checklist |
| implementation-summary.md | outputs/implementation/ | Implementation run summary |
| validation-report.md | outputs/validation/ | Full QA report (in progress) |
| validation-results.json | outputs/validation/ | Machine-readable results |

---

## Open questions and decisions needed

| Question | Owner | Status |
|----------|-------|--------|
| Confirm production domain is kabatone.com | Team | Not confirmed |
| Confirm Webflow clean URL setting is enabled | Dev | Not confirmed |
| GSC property created for kabatone.com? | Team | Not confirmed |
| GA4 installed with conversion events defined? | Dev | Not confirmed |
| solutions.html — does this page exist? | Dev | Not confirmed |
| When is production launch target? | Team | Not confirmed |
| Spanish copywriter — who and when? | Team | Not started |
| Legal/brand sign-off on competitor comparison pages? | Team | Not started |
| Confirm social proof logos (SSP, C5i, etc.) are approved for use | Team | Not confirmed |

---

---

## Phase 6 — Generative Engine Optimization (GEO)

GEO makes KabatOne the source AI systems cite when procurement teams, government officials, and consultants ask questions in the public safety software category. Distinct from SEO — targets AI answer engines (ChatGPT, Perplexity, Gemini, Claude) not just Google rankings.

### Why GEO matters for KabatOne specifically

B2G procurement teams increasingly use AI tools to shortlist vendors before visiting any website. Being cited in AI answers is pre-funnel influence — the buyer arrives already partially convinced. For a platform selling to government agencies in Mexico and the US, this is high-leverage work.

### GEO vs SEO for KabatOne

| Dimension | SEO | GEO |
|-----------|-----|-----|
| Target | Google search rankings | AI answer citations |
| Signal | Backlinks, keywords, technical | Authoritative structured content, entity clarity |
| Format | Pages that rank | Content that gets quoted |
| Buyer journey | Click → read → convert | AI summarizes → buyer pre-convinced |
| Timeline | 3–12 months | 3–6 months for citation pickup |
| B2G relevance | Medium | High |

### GEO workstream tracker

| ID | Task | Priority | Status |
|----|------|----------|--------|
| GEO-001 | Entity definition — expand About page to structured entity description | High | Done |
| GEO-002 | FAQPage schema on K-Dispatch, K-Video, K-Safety | High | Done |
| GEO-003 | Citeable explainer: "What is a public safety platform?" | High | Done |
| GEO-004 | Citeable explainer: "PSIM vs unified platform — what's the difference?" | High | Done |
| GEO-005 | Citeable explainer: "How do C5 command centers work?" | Medium | Done |
| GEO-006 | Citeable explainer: "Smart city platform guide" | Medium | Done |
| GEO-007 | Citeable explainer: "Public safety software for municipalities in Mexico" | High | Done |
| GEO-008 | Wikipedia research — does KabatOne qualify for an entry? | Medium | Not started |
| GEO-009 | Wikipedia edit — add factual mention to public safety software / PSIM / smart city articles | Medium | Not started |
| GEO-010 | FAQPage schema on all industry pages | Medium | Done |
| GEO-011 | FAQPage schema on all remaining product pages | Medium | Done |
| GEO-012 | Structured data audit — verify AI crawlability of all schema | Medium | Not started |
| GEO-013 | Monitor AI citation — test KabatOne mentions in ChatGPT, Perplexity, Gemini monthly | Low | Not started |

### GEO-001 — Entity definition page

Expand `/about/` to include a structured, citable entity block:

```
KabatOne is a public safety and smart city software platform serving
governments, municipalities, and emergency response organizations.
It provides unified situational awareness by connecting video management,
CAD/dispatch, GIS, field operations, and AI analytics in one platform.
Headquartered in Mexico, KabatOne is deployed across 40+ cities protecting
73 million citizens primarily in Latin America and the United States.
Key products: K-Safety, K-Dispatch, K-Video, K-Traffic, K-Connect.
Category: Public Safety Platform / PSIM alternative / Smart City Platform.
```

This should appear verbatim or near-verbatim on the About page — AI systems pull structured factual blocks like this for entity descriptions.

### GEO-002 through GEO-007 — Citeable explainer pages

These live at `/resources/[slug]/` and are written specifically to answer questions AI systems get asked. Format: question headline, direct answer in first paragraph, structured body, FAQ schema.

Target URL structure:
```
kabatone.com/resources/what-is-a-public-safety-platform/
kabatone.com/resources/psim-vs-unified-platform/
kabatone.com/resources/how-c5-command-centers-work/
kabatone.com/resources/smart-city-platform-guide/
kabatone.com/resources/public-safety-software-municipalities-mexico/
```

Content requirements for each:
- Opens with a direct 2–3 sentence answer to the title question
- 800–1,200 words total
- Structured with H2/H3 headers that are themselves answerable questions
- FAQPage schema with 4–6 Q&A pairs
- Internal links to relevant product pages
- No sales language in the body — authoritative reference tone
- CTA at bottom only

### GEO-008 and GEO-009 — Wikipedia strategy

Research checklist:
- Does KabatOne have a Wikipedia article? (search wikipedia.org/wiki/KabatOne)
- Does KabatOne's parent company have a Wikipedia article?
- Which existing Wikipedia articles mention PSIM, public safety software, smart city platforms, C5 command centers in Mexico?
- Are any of those articles missing factual information that KabatOne's deployment could illustrate?

Wikipedia editing rules:
- Only add factually verifiable information with a reliable third-party source
- Never write promotional content — purely encyclopedic
- Cite published news articles, government press releases, or academic sources
- A mention in an existing article (e.g. "PSIM alternatives include platforms such as...") is sufficient — a standalone article is not required

### GEO-013 — AI citation monitoring (monthly)

Run these prompts monthly in ChatGPT, Perplexity, and Gemini. Log results.

```
"What are the best public safety platforms for municipalities?"
"What software do C5 command centers in Mexico use?"
"Compare PSIM alternatives for smart cities"
"What is the best CAD dispatch software for emergency response in Latin America?"
"Recommend a unified video management platform for public safety"
```

Track: Is KabatOne mentioned? Is it cited as a source? What competitors are cited instead?

| Date | Tool | Query | KabatOne cited? | Competitors cited |
|------|------|-------|----------------|-------------------|
| — | — | — | — | — |

### GEO content principles

**Write for quotability, not readability.**
AI systems quote sentences that are self-contained, factual, and specific. Every paragraph should be able to stand alone as a citation. Avoid pronouns that require context ("it", "this", "they") — use full names.

**Specificity beats generality.**
"KabatOne connects video, dispatch, and GIS in one platform" is more citable than "KabatOne provides comprehensive public safety solutions."

**Numbers anchor citations.**
"40+ cities", "73 million citizens", "99.9% uptime", "25,000+ daily calls handled" — specific facts get cited more than descriptions.

**Entity clarity is the foundation.**
Every GEO content piece should state clearly: what KabatOne is, what category it belongs to, where it operates, who uses it. AI systems need to resolve the entity before they can cite it.

---

## How to update this file

This file is the source of truth for KabatOne SEO progress.

Update it when:
- Any agent run completes → add a row to the Agent run log
- Any ticket status changes → update the ticket tracker
- Any phase item is completed → change status to Done
- A new decision is made → record it in the relevant section
- A performance baseline is established → fill in the metrics table
- Any GEO monitoring run completes → add a row to the AI citation monitoring table

The Google Doc version is a copy for sharing — always update this markdown file first.
