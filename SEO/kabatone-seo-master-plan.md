# KabatOne — Master SEO Plan
**Last updated:** 2026-03-30
**Primary market:** Mexico (es-MX) — Phase 2
**Launch language:** English (en)
**Production domain:** kabatone.com
**Staging (static):** https://staging-k1-website.vercel.app/hero-mockup
**Stack:** Next.js (App Router) on Vercel — branch `nextjs` in TomIdoVR/k1-website-
**Static fallback:** `hero-mockup.html` on `main` branch — kept in sync for comparison pages and footer links

---

## Overall progress

| Phase | Status | Complete |
|-------|--------|----------|
| Phase 0 — Foundation & audit | Done | 100% |
| Phase 1 — Pre-launch fixes | Done | 100% |
| Phase 2 — Launch | **In progress** | **60%** |
| Phase 3 — Post-launch growth | In progress | 90% |
| Phase 4 — Spanish (es-MX) | In progress | 30% |
| Phase 5 — Authority & backlinks | Not started | 0% |
| Phase 6 — Generative Engine Optimization (GEO) | In progress | 95% |

**Last updated:** 2026-04-10
**Current site size:** 85 unique routes × 2 locales (EN + ES) = 170 sitemap URLs
- Homepage: 1 | Products: 5 | Industries: 7 | /vs/ comparisons: 19 | /resources/: 29 (hub + 28 articles) | /integrations/: 6 | /demo/: 6 (hub, lpr, school, violence, medical, access-control) | Other: 6 (about, contact, privacy, privacy-policy-tamaulipas, simulator, lp)

### 🟢 DNS & Hosting Status (verified 2026-04-10)
| Item | Status |
|------|--------|
| DNS → Vercel | ✅ Live — `kabatone.com` → 307 → `www.kabatone.com` (200 OK, Vercel) |
| Nameservers | GoDaddy (`ns09/ns10.domaincontrol.com`) |
| SSL / HSTS | ✅ Active |
| Hreflang headers | ✅ EN + ES + x-default served |
| Deployed version | ⚠️ **15 commits behind** — branch `demo-light-redesign` not merged to `nextjs` |
| Live sitemap | ⚠️ 134/170 URLs — 36 URLs pending deploy (12 new routes × 2 locales + sitemap corrections) |
| Build status | ✅ Clean build, 0 errors (verified 2026-04-10) |

### 🔴 Remaining Phase 2 blockers
| # | Blocker | Owner | Target |
|---|---------|-------|--------|
| 1 | **Merge & deploy** `demo-light-redesign` → `nextjs` (15 commits, adds 36 sitemap URLs) | Ben / Omer | April 13 |
| 2 | **Create GSC property** for kabatone.com + verify ownership via DNS TXT | David Z / Omer | April 13 |
| 3 | **Submit sitemap** to GSC (`https://kabatone.com/sitemap.xml`) | SEO | After GSC |
| 4 | **Request indexing** for 6 priority pages (Homepage, K-Dispatch, K-Safety, K-Video, Public Safety, Municipalities) | SEO | After GSC |
| 5 | Verify GA4 tracking on live site (G-5MB9CK1FGS) | David Z | April 14 |
| 6 | Run Auditor + Validator against live kabatone.com | SEO | After deploy |

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
| Comparison pages batch 1 | 2026-03-19 | Claude Code | /vs/genetec, /vs/milestone, /vs/vms — full EN+ES, FAQ schema, breadcrumb schema (v0.56–v0.60) |
| Comparison pages batch 2 | 2026-03-19 | Claude Code | /vs/motorola, /vs/hexagon, /vs/mark43, /vs/axon, /vs/carbyne, /vs/cad — full EN+ES (v0.61) |
| Comparison pages batch 3 | 2026-03-20 | Claude Code | /vs/fusus, /vs/prepared911 — full EN+ES, FAQ schema, breadcrumb schema (v0.69) |
| Privacy page | 2026-03-20 | Claude Code | /privacy route EN+ES with full policy content (v0.68) |
| Resources hub + blog articles | 2026-03-20 | Claude Code | /resources/ hub index + /resources/rtcc-setup-guide + /resources/ai-in-public-safety — full EN+ES, all schemas, nav updated, sitemap updated (v0.73) |

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
| Vercel deploy (DNS live) | ✅ Done — verified 2026-04-10 |
| GSC verified + sitemap submitted | **Not started — PRIORITY** |
| GSC property created for kabatone.com | **Not started — PRIORITY** |
| GA4 installed with conversion events | Done | G-5MB9CK1FGS — v1.15 |
| robots.txt verified | ✅ Done — `Allow: /` + sitemap link (verified 2026-04-10) |
| Staging site blocked from Google | N/A — Next.js on Vercel, no separate staging indexed |

---

## Phase 2 — Launch

### Launch day tasks
| Item | Status |
|------|--------|
| Publish site to kabatone.com (Vercel) | ✅ Done — DNS live, site serving from Vercel |
| Apply Webflow SEO instructions (webflow-instructions.md) | N/A — migrated to Next.js on Vercel |
| Apply title tags in Webflow Page Settings | N/A — handled in Next.js metadata |
| Apply meta descriptions in Webflow Page Settings | N/A — handled in Next.js metadata |
| Apply canonical URLs in Webflow Page Settings | N/A — handled in Next.js metadata |
| Verify sitemap at kabatone.com/sitemap.xml | ✅ Done — 134 URLs live (170 after deploy) |
| Submit sitemap to GSC | **Not started — PRIORITY** |
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
| Item | Priority | Status | Notes |
|------|----------|--------|-------|
| /vs/genetec/ — competitor comparison | High | Done | v0.56 |
| /vs/milestone/ | High | Done | v0.58 |
| /vs/vms/ — VMS alternative | High | Done | v0.60 |
| /vs/motorola/ | High | Done | v0.61 |
| /vs/hexagon/ | Medium | Done | v0.61 |
| /vs/mark43/ | Medium | Done | v0.61 |
| /vs/axon/ | Medium | Done | v0.61 |
| /vs/carbyne/ | Medium | Done | v0.61 |
| /vs/cad/ — traditional CAD alternative | Medium | Done | v0.61 |
| /vs/fusus/ — RTCC comparison | Medium | Done | v0.69 |
| /vs/prepared911/ — NG911 comparison | Medium | Done | v0.69 |
| /vs/peregrine/ — predictive analytics comparison | Medium | Done | v0.80 |
| /vs/rapidssos/ — RapidSOS comparison | Medium | Done | v1.14 |
| /vs/avigilon/ — premium VMS comparison | Medium | Done | v1.40 |
| /vs/verkada/ — cloud physical security comparison | Medium | Done | v1.40 |
| /vs/verint/ — video intelligence comparison | Medium | Done | v1.40 |
| /vs/nice-systems/ — PSIM comparison | Medium | Done | v1.40 |
| /vs/tyler-technologies/ — largest US gov-tech CAD/RMS | High | Done | v1.67 |
| /vs/centralsquare/ — merged legacy CAD/RMS (Superion/TriTech) | High | Done | v1.67 |
| Explainer: What Is Emergency Dispatch Software? | Medium | Done | v1.40 — /resources/what-is-emergency-dispatch-software/ |
| Explainer: What Is LPR? | Medium | Done | v1.40 — /resources/what-is-lpr-license-plate-recognition/ |
| Explainer: What Is Video Analytics? | Medium | Done | v1.40 — /resources/what-is-video-analytics/ |
| Explainer: What Is Sensor Fusion? | Medium | Done | v1.40 — /resources/what-is-sensor-fusion/ |
| Explainer: What Is Incident Management Software? | Medium | Done | v1.40 — /resources/what-is-incident-management-software/ |
| GEO: C5 Command Centers Mexico 2026 Guide | High | Done | v1.47 — /resources/c5-command-centers-mexico-2026/ |
| GEO: 911 Call Center Software Guide | High | Done | v1.51 — /resources/911-call-center-software-guide/ |
| GEO: Build RTCC Implementation Guide | High | Done | v1.51 — /resources/build-rtcc-implementation-guide/ |
| GEO: Public Safety Software Peru | Medium | Done | v1.51 — /resources/public-safety-software-peru/ |
| GEO: Public Safety Software Small Cities | Medium | Done | v1.53 — /resources/public-safety-software-small-cities/ |
| GEO: Public Safety Software Colombia | Medium | Done | v1.53 — /resources/public-safety-software-colombia/ |
| GEO: Best Public Safety Software | High | Done | v1.53 — /resources/best-public-safety-software/ |
| Industry brief: The End of Siloed Response | High | Done | v0.81 — /resources/end-of-siloed-response/ |
| Explainer: What Is CAD Dispatch Software? | High | Done | v0.85 — /resources/what-is-cad-dispatch-software/ |
| Explainer: What Is a Real-Time Crime Center? | High | Done | v0.92 — /resources/what-is-a-real-time-crime-center/ |
| Explainer: What Is Video Management Software? | Medium | Done | v1.12 — /resources/what-is-video-management-software/ |
| Explainer: What Is Situational Awareness Software? | Medium | Done | v1.16 — /resources/what-is-situational-awareness-software/ |
| Explainer: What Is Gunshot Detection Software? | Medium | Done | v1.22 — /resources/what-is-gunshot-detection-software/ |
| Explainer: What Is a Command Center? | High | Done | v1.23 — /resources/what-is-a-command-center/ |
| Explainer: What Is Emergency Management Software? | High | Done | v1.31 — /resources/what-is-emergency-management-software/ |
| Explainer: What Is a PSAP? | High | Done | v1.32 — /resources/what-is-a-psap/ |
| Blog post: AI in public safety | Medium | Done | v0.73 — /resources/ai-in-public-safety/ |
| Blog post: RTCC setup guide | Medium | Done | v0.73 — /resources/rtcc-setup-guide/ |
| /resources/ hub index page | Medium | Done | v0.73 — 14 article cards, bilingual EN/ES |
| Interactive: Incident Simulator | High | Done | v1.17/v1.20 — /simulator/ lifecycle walkthrough |
| Interactive: Scenario Explorer (Demo) | High | Done | v1.30 — /demo/ hub + /demo/lpr/ LPR scenario |
| Campaign landing page | Medium | Done | v1.24 — /lp/ with URL param customization |
| Privacy: Tamaulipas Contigo | Low | Done | v1.25 — /privacy-policy-tamaulipas/ |
| Integration page: LPR | Medium | Done | v0.74 — /integrations/lpr/ |
| Integration page: Face recognition | Medium | Done | v0.74 — /integrations/face-recognition/ |
| Integration page: Sensor fusion | Low | Done | v0.74 — /integrations/sensor-fusion/ |
| Integration page: Access Control | Medium | Done | v0.78 — /integrations/access-control/ |
| Integration page: Drones (UAV/UAS) | Medium | Done | v0.78 — /integrations/drones/ |
| Integration page: Panic Buttons | Medium | Done | v0.78 — /integrations/panic-buttons/ |
| solutions.html audit + SEO fix | High | N/A | solutions.html deleted — static files removed from nextjs branch v0.72 |

### Technical post-launch
| Item | Priority | Status |
|------|----------|--------|
| SEO-008: Fix nav Solutions link inconsistency | Low | Done |
| SEO-009: Schema markup (Organization + SoftwareApplication) | Low | Done |
| SEO-010: OG tags on all pages | Low | Done |
| Core Web Vitals audit (LCP, CLS, INP) | High | Done | v0.71 — 84/100 B grade, SEO 100/100, images main issue, lazy loading added |
| Internal linking pass — module → solution → resource | High | Done | v1.13 industry pages, v1.19 product pages |
| Cross-linking audit — /vs/ + /resources/ pages | High | Done | v1.21 — 24 pages updated with integration + resource links |
| WebSite schema (JSON-LD) | Medium | Done | v1.22 — injected in root layout |
| Backlink outreach — industry publications | Medium | Not started |

### Performance baselines to establish
| Metric | Target | Baseline | Status |
|--------|--------|----------|--------|
| GSC impressions (30 days) | — | Not set | Pending launch |
| GSC clicks (30 days) | — | Not set | Pending launch |
| Average position — branded | < 3 | Not set | Pending launch |
| Average position — K-Dispatch target KW | < 20 | Not set | Pending launch |
| Average position — K-Video target KW | < 20 | Not set | Pending launch |
| Average position — K-Safety target KW | < 20 | Not set | Pending launch |
| Pages indexed | 32 | 0 | Pending launch |
| Pages ranking pos 6–20 | — | 0 | Pending launch |

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

### Comparison pages
| Page | Primary keyword | Status |
|------|----------------|--------|
| /vs/genetec/ | KabatOne vs Genetec | Done |
| /vs/milestone/ | KabatOne vs Milestone XProtect | Done |
| /vs/vms/ | KabatOne vs traditional VMS | Done |
| /vs/motorola/ | KabatOne vs Motorola Solutions | Done |
| /vs/hexagon/ | KabatOne vs Hexagon Safety | Done |
| /vs/mark43/ | KabatOne vs Mark43 | Done |
| /vs/axon/ | KabatOne vs Axon | Done |
| /vs/carbyne/ | KabatOne vs Carbyne | Done |
| /vs/cad/ | KabatOne vs traditional CAD | Done |
| /vs/fusus/ | KabatOne vs Fusus | Done |
| /vs/prepared911/ | KabatOne vs Prepared 911 | Done |
| /vs/peregrine/ | KabatOne vs Peregrine | Done |
| /vs/rapidssos/ | KabatOne vs RapidSOS | Done |
| /vs/avigilon/ | KabatOne vs Avigilon | Done |
| /vs/verkada/ | KabatOne vs Verkada | Done |
| /vs/verint/ | KabatOne vs Verint | Done |
| /vs/nice-systems/ | KabatOne vs NICE Systems (Qognify) | Done |
| /vs/tyler-technologies/ | KabatOne vs Tyler Technologies | Done |
| /vs/centralsquare/ | KabatOne vs CentralSquare | Done |

---

## Competitor tracking

| Competitor | Domain | Primary strength | Comparison page | Monitor for |
|------------|--------|-----------------|-----------------|-------------|
| Genetec | genetec.com | VMS + access control | /vs/genetec/ | Rankings for VMS, command center terms |
| Motorola Solutions | motorolasolutions.com | CAD, radio, public safety | /vs/motorola/ | Rankings for CAD, dispatch, PSIM |
| Hexagon | hexagon.com | Public safety + GIS | /vs/hexagon/ | Rankings for situational awareness, GIS |
| Carbyne | carbyne.com | NG911, CAD | /vs/carbyne/ | Rankings for 911 dispatch, CAD |
| Milestone XProtect | milestonesys.com | VMS (open platform) | /vs/milestone/ | Rankings for VMS, video management |
| Mark43 | mark43.com | Cloud-native CAD/RMS | /vs/mark43/ | Rankings for cloud CAD, modern dispatch |
| Axon | axon.com | Body cameras + evidence | /vs/axon/ | Rankings for public safety cloud, evidence mgmt |
| Fusus (Axon) | fusus.com | RTCC, private camera networks | /vs/fusus/ | Rankings for real-time crime center, RTCC |
| Prepared 911 | prepared.com | NG911 PSAP modernization | /vs/prepared911/ | Rankings for NG911, 911 software, PSAP |
| Peregrine | peregrine.ai | RTCC, predictive policing | /vs/peregrine/ | Rankings for real-time crime center |
| RapidSOS | rapidsos.com | Call data enrichment, NG911 data | /vs/rapidssos/ | Rankings for 911 data, call enrichment |
| Avigilon (Motorola) | avigilon.com | Premium VMS + AI analytics | /vs/avigilon/ | Rankings for VMS, video analytics |
| Verkada | verkada.com | Cloud-managed cameras + access control | /vs/verkada/ | Rankings for cloud cameras, physical security |
| Verint | verint.com | Video intelligence + analytics | /vs/verint/ | Rankings for video intelligence, gov surveillance |
| NICE Systems (Qognify) | nice.com | PSIM + evidence management | /vs/nice-systems/ | Rankings for PSIM, evidence management |
| Tyler Technologies | tylertech.com | Largest US gov-tech — Enterprise CAD/RMS/ERP | /vs/tyler-technologies/ | Rankings for gov software, enterprise CAD, RMS |
| CentralSquare | centralsquare.com | Merged legacy CAD/RMS (Superion/TriTech/Zuercher) | /vs/centralsquare/ | Rankings for public safety CAD, legacy migration |

---

## Performance targets (set at launch, track monthly)

| Metric | Month 1 | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|---------|----------|
| Pages indexed | 61 | 61+ | 65+ | 75+ |
| GSC impressions/mo | — | 500+ | 2,000+ | 8,000+ |
| GSC clicks/mo | — | 50+ | 300+ | 1,000+ |
| Branded avg position | < 5 | < 3 | < 2 | 1 |
| Non-branded avg position | — | < 40 | < 25 | < 15 |
| Pages ranking pos 1–10 | 0 | 1–3 | 5–10 | 20+ |
| Pages ranking pos 6–20 | 0 | 3–6 | 8–15 | 25+ |
| Comparison page impressions | 0 | 200+ | 1,000+ | 4,000+ |
| Demo requests from organic | 0 | 1–3/mo | 5–10/mo | 15+/mo |

---

## Agent run log

| Date | Agent | Pages | Input | Output | Notes |
|------|-------|-------|-------|--------|-------|
| 2026-03-18 | Auditor | 15 | GitHub Pages staging | outputs/audit-raw/ | No GSC, crawl, or sitemap available |
| 2026-03-18 | Analyzer | 15 | outputs/audit-raw/ | outputs/analysis/ | Spanish copy generated — overridden to English |
| 2026-03-18 | Implementor | 15 | outputs/analysis/ | outputs/implementation/ | 60 changes applied, English copy, 5 H1 artifacts corrected, commit b5b5795 |
| 2026-03-18 | Validator | 15 | outputs/implementation/ | outputs/validation/ | 99.5% pass rate — SAFE TO PUSH — pushed to origin/main |
| 2026-03-19 | Claude Code | 5 GEO pages | /resources/ | Next.js pages | what-is-a-public-safety-platform, psim-vs-unified-platform, how-c5-command-centers-work, smart-city-platform-guide, public-safety-software-municipalities-mexico |
| 2026-03-19 | Claude Code | 3 /vs/ pages | — | Next.js + static | /vs/genetec v0.55, /vs/milestone v0.58, /vs/vms v0.60 |
| 2026-03-19 | Claude Code | 6 /vs/ pages | — | Next.js + static | /vs/motorola, /vs/hexagon, /vs/mark43, /vs/axon, /vs/carbyne, /vs/cad — v0.61 |
| 2026-03-20 | Claude Code | 2 /vs/ pages | — | Next.js + static | /vs/fusus, /vs/prepared911 — v0.69 |
| 2026-03-20 | Claude Code | 1 page | — | Next.js | /privacy policy EN+ES — v0.68 |
| 2026-03-21 | Claude Code | 3 integration pages | — | Next.js | /integrations/access-control, /drones, /panic-buttons — v0.78 |
| 2026-03-21 | Claude Code | Sitemap fix | — | sitemap.ts | Added 3 missing integration paths, master plan sync — v0.79 |
| 2026-03-21 | Claude Code | 1 /vs/ page | — | Next.js | /vs/peregrine — EN+ES, FAQ+breadcrumb schema — v0.80 |
| 2026-03-22 | Claude Code | 1 resources page | — | Next.js | /resources/end-of-siloed-response ebook landing page + lead form — v0.81 |
| 2026-03-22 | Claude Code | Design | — | Next.js | Industry brief page visual overhaul — v0.82 |
| 2026-03-23 | Claude Code | Sitemap fix | — | sitemap.ts + resources/page.tsx | Fix sitemap orphans /privacy + /resources/end-of-siloed-response, add resources hub card — v0.83 |
| 2026-03-23 | Claude Code | 1 resources page | — | Next.js | /resources/what-is-cad-dispatch-software — EN+ES, FAQ+breadcrumb+article schema, resources hub card, sitemap — v0.85 |
| 2026-03-26 | Claude Code | 2 resources pages | — | Next.js | /resources/what-is-video-management-software, /resources/what-is-situational-awareness-software — v1.12, v1.16 |
| 2026-03-26 | Claude Code | 1 /vs/ page | — | Next.js | /vs/rapidssos — EN+ES, FAQ+breadcrumb schema — v1.14 |
| 2026-03-26 | Claude Code | GA4 install | — | Next.js | GoogleAnalytics component, G-5MB9CK1FGS — v1.15 |
| 2026-03-26 | Claude Code | Simulator | — | Next.js | /simulator — interactive incident walkthrough v1.17, redesign v1.20 |
| 2026-03-26 | Claude Code | Internal links | — | Next.js | Industry pages → /integrations/ + /resources/ v1.13, /vs/ + /resources/ cross-links v1.21 |
| 2026-03-26 | Claude Code | 2 resources pages | — | Next.js | /resources/what-is-gunshot-detection-software + WebSite schema v1.22, /resources/what-is-a-command-center v1.23 |
| 2026-03-27 | Claude Code | 1 landing page | — | Next.js | /lp generic campaign landing page with URL params — v1.24 |
| 2026-03-28 | Claude Code | 1 privacy page | — | Next.js | /privacy-policy-tamaulipas — Tamaulipas Contigo app — v1.25 |
| 2026-03-28 | Claude Code | Demo system | — | Next.js | /demo hub + /demo/lpr interactive LPR scenario — 14 components, 5 stages — v1.30 |
| 2026-03-30 | Claude Code | SEO sync | — | sitemap.ts + master plan | Fix 4 sitemap orphans, full master plan sync v0.85→v1.30 |
| 2026-03-30 | Claude Code | 2 resources pages | — | Next.js | /resources/what-is-emergency-management-software v1.31, /resources/what-is-a-psap v1.32 — EN+ES, FAQ+breadcrumb+article schema, resources hub, sitemap |
| 2026-04-08 | Claude Code | 3 GEO guides | — | Next.js | /resources/public-safety-software-peru, /build-rtcc-implementation-guide, /911-call-center-software-guide — v1.51 |
| 2026-04-08 | Claude Code | 3 GEO guides | — | Next.js | /resources/public-safety-software-small-cities, /public-safety-software-colombia, /best-public-safety-software — v1.53 |
| 2026-04-08 | Claude Code | 1 GEO guide | — | Next.js | /resources/c5-command-centers-mexico-2026 + metadata optimization — v1.47 |
| 2026-04-09 | Claude Code | SEO metadata | — | sitemap.ts + metadata | 4 demo pages added to sitemap + metadata — v1.66 |
| 2026-04-10 | Claude Code | 2 /vs/ pages + master plan sync | — | Next.js + master plan | /vs/tyler-technologies, /vs/centralsquare — EN+ES, FAQ+breadcrumb schema; GEO tracker + keyword map + competitor table updated v1.32→v1.67 — v1.67 |

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
| GA4 installed with conversion events defined? | Dev | Done — G-5MB9CK1FGS v1.15 |
| solutions.html — does this page exist? | Dev | Resolved — deleted in v0.72, static files removed |
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
| GEO-012 | Structured data audit — verify AI crawlability of all schema | Medium | Done |
| GEO-013 | Monitor AI citation — test KabatOne mentions in ChatGPT, Perplexity, Gemini monthly | Low | Not started |
| GEO-014 | Citeable explainer: "What is video management software?" | Medium | Done | v1.12 |
| GEO-015 | Citeable explainer: "What is situational awareness software?" | Medium | Done | v1.16 |
| GEO-016 | Citeable explainer: "What is gunshot detection software?" | Medium | Done | v1.22 |
| GEO-017 | Citeable explainer: "What is a command center?" (C2–C5) | High | Done | v1.23 |
| GEO-018 | WebSite schema — brand identity JSON-LD in root layout | Medium | Done | v1.22 |
| GEO-019 | Citeable explainer: "What is emergency management software?" | High | Done | v1.31 |
| GEO-020 | Citeable explainer: "What is a PSAP?" | High | Done | v1.32 |
| GEO-021 | Citeable explainer: "What is emergency dispatch software?" | Medium | Done | v1.40 |
| GEO-022 | Citeable explainer: "What is LPR (license plate recognition)?" | Medium | Done | v1.40 |
| GEO-023 | Citeable explainer: "What is video analytics?" | Medium | Done | v1.40 |
| GEO-024 | Citeable explainer: "What is sensor fusion?" | Medium | Done | v1.40 |
| GEO-025 | Citeable explainer: "What is incident management software?" | Medium | Done | v1.40 |
| GEO-026 | GEO guide: "C5 command centers in Mexico 2026" | High | Done | v1.47 |
| GEO-027 | GEO guide: "911 call center software guide" | High | Done | v1.51 |
| GEO-028 | GEO guide: "How to build an RTCC — implementation guide" | High | Done | v1.51 |
| GEO-029 | GEO guide: "Public safety software for Peru" | Medium | Done | v1.51 |
| GEO-030 | GEO guide: "Public safety software for small cities" | Medium | Done | v1.53 |
| GEO-031 | GEO guide: "Public safety software for Colombia" | Medium | Done | v1.53 |
| GEO-032 | GEO guide: "Best public safety software platforms" | High | Done | v1.53 |

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
