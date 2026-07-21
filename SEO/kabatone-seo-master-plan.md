# KabatOne — Master SEO Plan
**Last updated:** 2026-06-02
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
| Phase 2 — Launch | **Done** | **95%** |
| Phase 3 — Post-launch growth | In progress | 95% |
| Phase 4 — Spanish (es-MX) | In progress | 30% |
| Phase 5 — Authority & backlinks | In progress | 15% |
| Phase 6 — Generative Engine Optimization (GEO) | In progress | 98% |

**Last updated:** 2026-07-21 (KAB-1762 weekly GEO review — GEO monitor 7/12 cited, unified-platform + best-VMS-for-cities won this cycle; new /resources/best-ng911-software/ published, v2.281)
**Current site size:** 209 unique routes × 2 locales (EN + ES) = 418 sitemap URLs
- Homepage: 1 | Products: 5 | Industries: 7 | /vs/ comparisons: 21 | /resources/: 155 (hub + 154 articles) | /integrations/: 6 | /demo/: 6 (hub, lpr, school, violence, medical, access-control) | Other: 4 (about, contact, privacy, simulator)
- Geographic market guides: **122 country-specific guides** live (Africa, Europe, Americas, Middle East, Asia-Pacific) + 3 regional/cohort guides (Middle East, LATAM, small cities, Mexico municipalities)
- Auto-generation pipeline: `src/lib/seo-agent/ccr.ts` dispatches country-guide creation jobs to Paperclip — strategic risk flagged 2026-05-19, see Phase 6 notes below
- Note: /lp and /privacy-policy-tamaulipas removed from sitemap (noindex pages — v2.48)
- Note: /vs/shotspotter + /vs/palantir exist in sitemap + codebase but were undocumented — synced 2026-04-27
- Note: Empty `src/app/[locale]/resources/public-safety-software-bahrain/` directory exists (no page.tsx, untracked) — leftover from aborted generation, safe to delete

### 🟢 DNS & Hosting Status (verified 2026-04-10)
| Item | Status |
|------|--------|
| DNS → Vercel | ✅ Live — `kabatone.com` → 307 → `www.kabatone.com` (200 OK, Vercel) |
| Nameservers | GoDaddy (`ns09/ns10.domaincontrol.com`) |
| SSL / HSTS | ✅ Active |
| Hreflang headers | ✅ EN + ES + x-default served |
| Deployed version | ✅ Current — `nextjs` branch live on staging.kabatone.com (v2.47) |
| Live sitemap | ✅ 166 URLs (83 routes × 2 locales) — /lp + /privacy-policy-tamaulipas removed (noindex) |
| Build status | ✅ Clean build, 0 errors (verified 2026-04-23) |

### Phase 2 blockers — resolved
| # | Blocker | Status |
|---|---------|--------|
| 1 | Merge & deploy `demo-light-redesign` → `nextjs` | ✅ Done |
| 2 | Create GSC property + verify ownership | ✅ Done — verified 2026-03-26 |
| 3 | Submit sitemap to GSC | ✅ Done — 2026-04-20 |
| 4 | Request indexing for 6 priority pages | ✅ Done — 2026-04-20 |
| 5 | Verify GA4 tracking on live site | ✅ Done — confirmed active (G-5MB9CK1FGS / properties/530090453), 2026-06-09 |
| 6 | Run Auditor + Validator against live kabatone.com | Not started |

### 🟡 Remaining GSC issues (from 2026-04-23 screenshot)
| Issue | Count | Action |
|-------|-------|--------|
| Redirect error | 2 | Need GSC URL list to identify — likely www vs non-www canonical mismatch |
| Excluded by noindex | 1 | Fixed — /lp + /privacy-policy-tamaulipas removed from sitemap (v2.48) |
| Crawled - currently not indexed | 8 | Monitor — likely thin content pages (/lp, /simulator, demo pages) |
| Discovered - currently not indexed | 112 | Normal for new site — Google queue, will resolve over time |
| Indexed | 35 | Growing — submitted 2026-04-20 |

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
| GSC verified + sitemap submitted | ✅ GSC verified (2026-03-26) — sitemap submission pending |
| GSC property created for kabatone.com | ✅ Done — verified owner as of 2026-03-26, 137 crawls in 90 days |
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
| Submit sitemap to GSC | ✅ Done — 2026-04-20 |
| Request indexing for priority pages in GSC | ✅ Done — 2026-04-20 (6 priority pages submitted) |
| Verify GA4 tracking on live site | Not confirmed |
| Run Auditor against live kabatone.com | Not started |
| Run Validator against live site | Not started |
| Remove noindex pages from sitemap | ✅ Done — 2026-04-23 v2.48 (/lp + /privacy-policy-tamaulipas) |

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
| /vs/peregrine/ — predictive analytics comparison | Medium | Done | v0.80 · CTR refresh v2.229 (2026-06-10) — "alternative"-led title + question-hook meta for the 612-impr/pos-9/0-CTR gap |
| /vs/rapidssos/ — RapidSOS comparison | Medium | Done | v1.14 |
| /vs/avigilon/ — premium VMS comparison | Medium | Done | v1.40 |
| /vs/verkada/ — cloud physical security comparison | Medium | Done | v1.40 |
| /vs/verint/ — video intelligence comparison | Medium | Done | v1.40 |
| /vs/nice-systems/ — PSIM comparison | Medium | Done | v1.40 |
| /vs/tyler-technologies/ — largest US gov-tech CAD/RMS | High | Done | v1.67 |
| /vs/centralsquare/ — merged legacy CAD/RMS (Superion/TriTech) | High | Done | v1.67 |
| /vs/shotspotter/ — gunshot detection comparison | Medium | Done | undocumented — in sitemap, page exists |
| /vs/palantir/ — AI/data analytics platform comparison | Medium | Done | undocumented — in sitemap, page exists |
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
| GEO: Public Safety Software Chile | Medium | Done | v2.49 — /resources/public-safety-software-chile/ |
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
| GEO: CAD Software for Municipios in Mexico | Medium | Done | v2.65 — /resources/cad-software-municipios-mexico/ |
| GEO: Video Analytics Use Cases Guide | Medium | Done | v2.72 — /resources/video-analytics-use-cases/ |
| GEO: Best CAD Dispatch Software | High | Done | v2.76 — /resources/best-cad-dispatch-software/ |
| GEO: Video Management for Public Safety | High | Done | v2.207 — /resources/video-management-public-safety-guide/ |
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
| Identify industry publications (EN + ES) | High | **Done — 2026-04-27** |
| Identify gov-tech media targets | High | **Done — 2026-04-27** |
| Identify LATAM smart city publications | High | **Done — 2026-04-27** |
| Produce linkable asset: public safety platform guide | Medium | Not started |
| Produce linkable asset: smart city technology report | Medium | Not started |
| Partner page / integrations backlink strategy | Medium | Not started |
| HARO / journalist outreach for public safety stories | Low | Not started |
| Conference and event listings | Low | Not started |

### Phase 5 — Backlink target list (20 publications)

**Priority 1 — English GovTech / Public Safety (highest DA, most citable)**

| # | Publication | URL | DA (est.) | Submission path | Angle |
|---|-------------|-----|-----------|-----------------|-------|
| 1 | Government Technology (GovTech) | govtech.com | 75 | Guest commentary — email lkinkade@govtech.com with pitch first | "How C4/C5 command centers in LATAM are redefining the smart city" |
| 2 | Police1 | police1.com | 72 | Article submission — police1.com/info/submit-article-to-police1/ | "Why unified platforms beat PSIM for modern police dispatch" |
| 3 | Security Info Watch | securityinfowatch.com | 68 | Editorial contributors — about-us page has editor contact | "Video + CAD + GIS in one platform: the end of the multi-vendor trap" |
| 4 | Emergency Management Magazine | emergencymgmt.com | 65 | Guest contributors — editorial team | "Reducing emergency response time with unified command platforms" |
| 5 | APCO International (PSConnect blog) | apcointl.org | 63 | Member contribution + editorial — public safety communications focus | "Integrated CAD dispatch and video for next-gen 911 centers" |
| 6 | Urgent Communications | urgentcomm.com | 60 | Editorial — LMR + broadband + CAD integration focus | "The convergence of radio, broadband and AI in public safety command" |
| 7 | Security Today | securitytoday.net | 58 | Guest contributors — security technology publication | "AI video analytics for public safety: from perimeter to command center" |
| 8 | StateTech Magazine | statetechmagazine.com | 62 | CDW Government publication — pitch editorial team | "Cloud-native CAD: how municipalities are modernizing 911 centers" |

**Priority 2 — English Smart City / International**

| # | Publication | URL | DA (est.) | Submission path | Angle |
|---|-------------|-----|-----------|-----------------|-------|
| 9 | Smart Cities World | smartcitiesworld.net | 55 | Editorial — news and features | "Latin America's C5 command centers: the smart city use case the world isn't watching" |
| 10 | Cities Today | cities-today.com | 52 | Editorial pitches — urban mobility and public safety | "40+ cities, 73M citizens: what unified public safety platforms look like at scale" |
| 11 | Geospatial World | geospatialworld.net | 58 | Guest articles — GIS + public safety angle | "Operational GIS in emergency response: from static maps to live command" |
| 12 | Government Technology Insider | governmenttechnologyinsider.com | 45 | Contributor articles — government technology | "The operational layer missing from most smart city deployments" |

**Priority 3 — Spanish LATAM**

| # | Publication | URL | DA (est.) | Submission path | Angle |
|---|-------------|-----|-----------|-----------------|-------|
| 13 | Mexico Business News | mexicobusiness.news | 50 | Editorial — English/Spanish, tech section | "KabatOne: la plataforma mexicana que protege a 73 millones de ciudadanos" |
| 14 | Telesemana | telesemana.com | 52 | News + contributed articles — telecom + tech LATAM | "Plataformas unificadas vs PSIM: el debate que está cambiando los centros C5" |
| 15 | A21 (antes IDG Mexico) | a21.com.mx | 48 | Artículos de colaboradores — IT y tecnología empresarial México | "Seguridad pública inteligente: cómo los municipios están modernizando sus centros de mando" |
| 16 | Smart City Expo LATAM | smartcityexpolatam.com | 50 | Blog / press releases — congreso Puebla | Case study submission for LATAM Smart City Awards 2026 |
| 17 | Revista Movilidad3 | movilidad3.com.mx | 38 | Noticias y artículos — movilidad urbana e infraestructura México | "K-Traffic: gestión inteligente de tráfico integrada al centro de mando" |
| 18 | Seguridad en América | seguridadenamerica.com.mx | 42 | Editorial — seguridad física México y LATAM | "Del VMS al comando unificado: la evolución del video en seguridad pública" |
| 19 | Expansión (Forbes México) | expansion.mx | 68 | Columnas de opinión + comunicados de prensa | Perfil de empresa: "KabatOne, la startup que conecta el 911 con la cámara más cercana" |
| 20 | Revista Construye | revistaconstruye.com.mx | 40 | Noticias de industria — infraestructura y tecnología México | Nota sobre despliegues KabatOne en ciudades mexicanas |

### Phase 5 — First 3 outreach actions (highest ROI)

1. **GovTech guest commentary** — email lkinkade@govtech.com with pitch: "How Latin America's C4/C5 command centers are redefining the smart city." 800–1000 words, no promotional links, author bio only. This single link from DA 75 is worth more than 20 DA 40 links.
2. **Mexico Business News** — submit company profile + news note about 73M citizens deployment. English/Spanish bilingual, tech section editor. Direct news angle.
3. **Smart City Expo LATAM Awards 2026** — submit KabatOne case study as a city deployment for the LATAM Smart City Awards. Free entry, editorial coverage if shortlisted.

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
| /vs/shotspotter/ | KabatOne vs ShotSpotter | Done |
| /vs/palantir/ | KabatOne vs Palantir | Done |

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
| ShotSpotter | soundthinking.com | Gunshot detection / acoustic sensor tech | /vs/shotspotter/ | Rankings for gunshot detection, ShotSpotter alternative |
| Palantir | palantir.com | Government AI/data analytics platform | /vs/palantir/ | Rankings for gov AI platform, data analytics public safety |

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
| 2026-04-20–22 | Claude Code | Demo improvements | — | Next.js | Demo system: micro-labels (v2.47), cognitive load reduction (v2.46), mobile responsive fixes (v2.44), module pill sizing (v2.43), unit card fixes (v2.39–v2.42) |
| 2026-04-23 | Claude Code | Sitemap + master plan sync | — | sitemap.ts + master plan | Remove /lp + /privacy-policy-tamaulipas from sitemap (noindex contradiction), Phase 2 status → Done, GSC status updated v1.67→v2.48 |
| 2026-04-27 | Claude Code (CEO heartbeat) | Master plan sync | — | master plan | Document /vs/shotspotter + /vs/palantir (existed in sitemap+codebase, undocumented); update route count 83→84, URL count 166→168; add to keyword map + competitor table |
| 2026-04-27 | Claude Code (CEO heartbeat) | GEO guide | — | Next.js | /resources/public-safety-software-chile — EN+ES, FAQ+breadcrumb+article schema, resources hub card, sitemap — v2.49 |
| 2026-05-04 | Claude Code (SEO Director heartbeat) | GEO guide | — | Next.js | /resources/cad-dispatch-software-latin-america — EN+ES, FAQ+breadcrumb+article schema, resources hub card, sitemap — v2.50 |
| 2026-05-11 | Claude Code (SEO Director heartbeat) | GEO guide + build fix | — | Next.js | /resources/public-safety-software-argentina — EN+ES, FAQ+breadcrumb+article schema, resources hub card, sitemap; not-found.tsx html/body fix — v2.51 |
| 2026-05-19 | Claude Code (SEO Director heartbeat) | GEO monitoring + 17 EU/island guides + GEO guide | — | Next.js | v2.187–v2.203: Estonia→Iceland (Baltics, Ireland, Balkans, small states); v2.204: /resources/public-safety-software-guatemala — EN+ES, FAQ+breadcrumb+article schema, resources hub card, sitemap |
| 2026-05-28 14:46 | kabatone-seo-audit (first run) | full coverage map (production probe + auth check + GEO spot check) | https://kabatone.com/ | SEO/audits/2026-05-28-1446-audit.md + .html | **Health: 42/100. P0: 3, P1: 4, P2: 2.** Headline P0: production frozen 50 days — main at v1.53 (2026-04-08), nextjs at v2.205, 259 commits behind. 121 of 125 country pages 404 on prod; 24 dead URLs in prod sitemap. GSC pulls blocked (service account not yet shared). Single 5-min action (merge nextjs→main) clears all 3 P0s. |
| 2026-05-26 | Claude Code (SEO Director heartbeat) | GEO monitoring + GEO guide | — | Next.js | GEO monitoring: 3/5 queries appearing (up from 2/5 Apr 27 — new win "best public safety platforms for municipalities"); v2.206: /resources/public-safety-software-honduras — EN+ES, FAQ+breadcrumb+article schema, resources hub card, sitemap |
| 2026-05-26 | Claude Code (SEO Director heartbeat) | GEO guide (VMS) | — | Next.js | v2.207: /resources/video-management-public-safety-guide
| 2026-06-02 | Claude Code (SEO Director heartbeat) | GEO monitoring + GEO guide | — | Next.js | GEO monitoring: 3/5 queries (stable); PSIM AI answer quality improved; v2.215: /resources/public-safety-software-nicaragua — EN+ES, FAQ+breadcrumb+article schema, resources hub card, sitemap | — high-priority GEO-037 targeting "unified video management platform public safety municipalities" gap query; EN+ES, FAQ+breadcrumb+article schema, resources hub card, sitemap priority 0.8 |
| 2026-06-09 | Claude Code (SEO Director heartbeat — KAB-1099) | GEO monitoring + GEO guide | — | Next.js | GEO monitoring: **5/5 queries** (up from 3/5 — NEW: CAD LATAM pos 1, VMS unified pos 3); v2.225: /resources/public-safety-software-costa-rica — EN+ES, FAQ+breadcrumb+article schema, resources hub card, sitemap, metadata EN+ES |
| 2026-06-09 | Claude Code (SEO Director heartbeat — KAB-1100) | GEO guide | — | Next.js | v2.226: /resources/public-safety-software-ecuador — EN+ES, FAQ+breadcrumb+article schema, resources hub card, sitemap, metadata EN+ES — ECU-911 national system, Policia Nacional ~47K, Guayaquil port/airport security, police-military joint ops, SERCOP procurement |
| 2026-06-16 | Claude Code (SEO Director heartbeat — KAB-1198) | GEO monitoring + GEO guide | — | Next.js | GEO monitoring: **5/5 queries stable** ("municipalities" UP pos ~8→~3, VMS UP to 3 pages in top 10); v2.243: /resources/public-safety-software-dominican-republic — EN+ES, FAQ+breadcrumb+article schema, resources hub card, sitemap, metadata EN+ES — first Caribbean expansion; PN ~37K, CESFRONT ~3.5K Haiti border, CESTUR ~4K tourism, Sistema 911, 10M+ tourists/yr |
| 2026-07-14 | Claude Code (SEO Director — KAB-1623) | Weekly GEO review + GEO content page | — | Next.js | **GEO monitor 5/12 cited (12-query set):** WIN — "best VMS software for public safety" N→**Y** (v2.273 VMS callout landing); LOSS — "RTCC software vendors" Y→N (volatile, 8 competitors now listed); CAD/municipalities/CAD-multi-agency/Mexico-LATAM holding Y. Persistent gaps: unified-platform, C5, NG911, AI-video-analytics, VMS-for-cities, **Genetec-alternatives**. v2.277: new /resources/genetec-alternatives/ (EN+ES) roundup — liftable direct-answer callout, comparison table, 6 vendor profiles, 6 FAQs, Article+FAQ+Breadcrumb schema, metadata EN+ES, sitemap, hub cards — targets the un-won "Genetec alternatives for public safety" AI-answer slot |
| 2026-07-21 | Claude Code (SEO Director — KAB-1762) | Weekly GEO review + GEO content page | — | Next.js | **GEO monitor 7/12 cited (2026-07-20 run):** WINS this cycle — "unified public safety platform" N→**Y** (now cited w/ Mark43/Motorola/CentralSquare), "best VMS for cities" N→**Y**; CAD-911/best-VMS-PS/municipalities/CAD-multi-agency/Mexico-LATAM holding Y; LOSS — RTCC Y→N (volatile). Persistent gaps: C5 (open field), NG911, AI-video-analytics (open field), Genetec-alternatives, RTCC. v2.281: new /resources/best-ng911-software/ (EN+ES) roundup — 4th in roundup program, first feeding K-Dispatch/CAD cluster; direct-answer callout, comparison table, 6 vendor profiles (KabatOne/Carbyne/Motorola VESTA/Intrado-Comtech/RapidSOS/Prepared 911), 6 FAQs incl. liftable NG911 definition, Article+FAQ+Breadcrumb schema, metadata EN+ES, sitemap 0.75, hub cards EN+ES — targets the un-won "NG911 software" AI-answer slot |

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
| GEO-008 | Wikipedia research — does KabatOne qualify for an entry? | Medium | Done | 2026-04-24 — No KabatOne Wikipedia article exists. PSIM article exists at en.wikipedia.org/wiki/Physical_security_information_management — lists vendors; KabatOne qualifies for mention as "next-gen unified alternative". |
| GEO-009 | Wikipedia edit — add factual mention to public safety software / PSIM / smart city articles | Medium | **ACTION NEEDED** — Target: Physical_security_information_management article. Add KabatOne as example of next-generation unified platform alternative to legacy PSIM. Requires a verifiable third-party source. |
| GEO-010 | FAQPage schema on all industry pages | Medium | Done |
| GEO-011 | FAQPage schema on all remaining product pages | Medium | Done |
| GEO-012 | Structured data audit — verify AI crawlability of all schema | Medium | Done |
| GEO-013 | Monitor AI citation — test KabatOne mentions in ChatGPT, Perplexity, Gemini monthly | Low | In progress — first web search run 2026-04-27 |
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
| GEO-033 | GEO guide: "CAD dispatch software for Latin America" | High | Done | v2.50 |
| GEO-034 | GEO guide: "Public safety software for Argentina" | Medium | Done | v2.51 |
| GEO-035 | GEO guide: "Public safety software for Guatemala" | Medium | Done | v2.204 |
| GEO-036 | GEO guide: "Public safety software for Honduras" | Medium | Done | v2.206 |
| GEO-037 | GEO guide: "Video management for public safety — VMS guide for municipalities" | High | Done | v2.207 — targets GEO-013 gap query "unified video management platform public safety municipalities" |
| GEO-038 | GEO guide: "CAD software for municipios in Mexico" (Spanish-intent keyword) | Medium | Done | v2.65 — /resources/cad-software-municipios-mexico/ |
| GEO-039 | GEO guide: "Video analytics use cases for public safety" | Medium | Done | v2.72 — /resources/video-analytics-use-cases/ |
| GEO-040 | GEO guide: "Best CAD dispatch software" (comparison/listicle) | High | Done | v2.76 — /resources/best-cad-dispatch-software/ |
| GEO-041 | GEO guide: "Public safety software for Nicaragua" | Medium | Done | v2.215 — /resources/public-safety-software-nicaragua/ — PN ~16K/Ejercito 7 regions/SINAPRED 19 volcanoes; Caribbean narco-transit corridor; Puerto Corinto; Ley 323/831 |
| GEO-042 | GEO guide: "Public safety software for Costa Rica" | Medium | Done | v2.225 — /resources/public-safety-software-costa-rica/ — Fuerza Publica ~13K/OIJ ~2.5K/DIS; constitutional army abolition 1948 (Art.12); 9-1-1 system since 2013; CNE/OVSICORI-UNA/RSN (6+ active volcanoes); SJO Airport 10M+; Puerto Limon JAPDEVA; Ley 9986 + SICOP; SICA/CAFTA-DR |
| GEO-043 | GEO guide: "Public safety software for Ecuador" | Medium | Done | v2.226 — /resources/public-safety-software-ecuador/ — ECU-911 since 2012; Policia Nacional ~47K; 24 provinces/221 cantones; Quito metro ~3M/Guayaquil metro ~3.5M; anti-narcotics operations 2023+; Port of Guayaquil/UIO/GYE; police-military joint ops; SERCOP/compraspublicas.gob.ec |
| GEO-044 | GEO guide: "Public safety software for the Dominican Republic" | Medium | Done | v2.243 — /resources/public-safety-software-dominican-republic/ — first Caribbean expansion; PN ~37K/CESFRONT ~3.5K Haiti border/CESTUR ~4K tourism/AMET/DNCD; Sistema 911 since 2014 (90%+ coverage); 31 provinces + DN / 158 municipios / 11.2M citizens; 10M+ tourists/yr Punta Cana/Puerto Plata/La Romana; Ley 340-06/DGCP |
| GEO-045 | GEO guide: "Public safety software for Trinidad and Tobago" | Medium | Done | v2.246 — /resources/public-safety-software-trinidad-and-tobago/ — third Caribbean expansion; TTPS ~7K/TTDF ~4K (Regiment/Coast Guard ~1K/Air Guard); NOC under MSN; Caribbean largest oil & gas producer 30-40% GDP; Atlantic LNG 4 trains Point Fortin; Point Lisas methanol 2nd world/ammonia 1st world; Venezuela 11km narco-corridor 40+ pirogues/week; Port of Port of Spain (PATT); Piarco POS + ANR Robinson TAB; 14 corporations + THA; ~1.4M; 999/990/811 no unified system; Public Procurement Act 2015/OPR; TTD; CARICOM/Commonwealth |
| GEO-046 | GEO spoke: "NG911 software — Next Generation 911 systems explained" (CAD cluster spoke #1) | High | Done | v2.260 — /resources/ng911-software/ — ESInet/i3 architecture, Legacy vs NG911 comparison table, text-to-911, video, location accuracy, PSAP-to-PSAP transfer, NG911+CAD integration, 7 FAQs. K-Dispatch cluster strategy to recover pos 41.9. |
| GEO-047 | GEO roundup: "Best NG911 software" (comparison/listicle — CAD cluster) | High | Done | v2.281 — /resources/best-ng911-software/ (EN+ES) — 4th roundup after Genetec (v2.277)/Milestone (v2.278)/AI-video-analytics (v2.279); first in the CAD/K-Dispatch cluster. Direct-answer callout, comparison table, 6 vendor profiles (KabatOne/Carbyne/Motorola VESTA/Intrado-Comtech/RapidSOS/Prepared 911), 6 FAQs incl. liftable NG911 definition, full schema. Attacks the persistent "NG911 software" AI-answer gap (engines cite Carbyne/CentralSquare/Motorola/Peregrine, not KabatOne). |
| GEO-BULK | **Bulk geographic market guides (autopilot)** — 121 country-specific public-safety-software-* pages generated via `src/lib/seo-agent/ccr.ts` Paperclip dispatcher | — | Live | Live count as of 2026-05-19. Covers all of LATAM, most of Europe (incl. Baltics/Balkans/Iceland/Malta/Luxembourg/Cyprus), GCC + ME, large APAC (India, Japan, Australia, S. Korea, Indonesia, Vietnam, etc.), large Africa block (Nigeria, Kenya, SA, Egypt, Morocco, Ethiopia + ~40 more). **STRATEGIC RISK:** many micro-market pages (São Tomé pop 220k, Seychelles 100k, Comoros, Lesotho, Eswatini) have effectively zero B2G TAM. Identical ~310-line template per page. This pattern matches Google's March 2024 "scaled content abuse" policy — risk is site-wide quality demotion that drags down genuinely valuable pages (Mexico, US, LATAM, products, /vs/). **Action needed:** define a TAM/quality stop-line, prune micro-market pages or substantially differentiate them. |

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
| 2026-04-24 | Web search | "KabatOne public safety platform CAD dispatch" | ✅ Yes — positions 1–4, kabatone.com dominates branded | Mark43, Versaterm, Caliber |
| 2026-04-24 | Web search | "C5 command center software Mexico municipalities 2026" | ✅ Yes — positions 2–3 (/what-is-a-command-center, /how-c5-command-centers-work) | Seguritech, Thales, Eagle Eye |
| 2026-04-24 | Web search | "PSIM alternative unified public safety platform municipalities Latin America" | ❌ No — not appearing | HxGN OnCall, Motorola CommandCentral, Advancis, SOMA Global, Verkada |
| 2026-04-24 | Web search | "best public safety software 2026 municipalities" | ❌ No — not appearing | Mark43, CentralSquare, Tyler Technologies, Oracle, Lexipol |
| 2026-04-27 | Web search | "best public safety platforms for municipalities 2026" | ❌ No — not appearing | CentralSquare, Tyler Technologies, Mark43, Everbridge, RapidSOS |
| 2026-04-27 | Web search | "software C5 command centers Mexico municipalities 2026" | ✅ Positions 2+4 (/how-c5-command-centers-work, /what-is-a-command-center) | Seguritech, Algotive, Eagle Eye Networks |
| 2026-04-27 | Web search | "PSIM alternatives unified public safety platform smart cities" | ✅ Position 1 (/resources/psim-vs-unified-platform) + cited in AI answer | Genetec Security Center, CNL IPSecurityCenter, HxGN OnCall, Motorola CommandCentral |
| 2026-04-27 | Web search | "best CAD dispatch software emergency response Latin America 2026" | ❌ No — not appearing | Tyler Technologies, Motorola CommandCentral, Hexagon HxGN OnCall, CentralSquare, GINA, Mark43 |
| 2026-04-27 | Web search | "unified video management platform public safety municipalities recommendation" | ❌ No — not appearing | Avigilon, Verkada, RapidSOS, Milestone |
| 2026-05-26 | Web search | "best public safety platforms for municipalities 2026" | ✅ Position ~9 (/resources/public-safety-software-small-cities) — **NEW WIN** | SafetyCulture, Motorola, FitGap, SourceForge, FeaturedCustomers |
| 2026-05-26 | Web search | "software C5 command centers Mexico municipalities 2026" | ✅ Positions 2+5 (/how-c5-command-centers-work, /what-is-a-command-center) — stable | Seguritech, Algotive, Thales, DCD |
| 2026-05-26 | Web search | "PSIM alternatives unified public safety platform smart cities" | ✅ Position 1 (/psim-vs-unified-platform) + **detailed AI answer with K-Safety/K-Dispatch/K-Video/K-Traffic/K-Connect** | Genetec, CNL, HxGN, Motorola, Siemens |
| 2026-05-26 | Web search | "best CAD dispatch software emergency response Latin America 2026" | ❌ No — not appearing | GINA, Tyler, Motorola, Hexagon, Zetron |
| 2026-05-26 | Web search | "unified video management platform public safety municipalities recommendation" | ❌ No — not appearing | Avigilon, Verkada, RapidSOS, BriefCam, Senergy |
| 2026-06-02 | Web search | "best public safety platforms for municipalities 2026" | ✅ Position ~10 (/resources/public-safety-software-small-cities) — stable | SafetyCulture, Motorola, FitGap, SourceForge, FeaturedCustomers |
| 2026-06-02 | Web search | "software C5 command centers Mexico municipalities 2026" | ✅ Positions 2+5 (/how-c5-command-centers-work, /what-is-a-command-center) — stable | Seguritech, Algotive, Thales, DCD |
| 2026-06-02 | Web search | "PSIM alternatives unified public safety platform smart cities" | ✅ Position 1 (/psim-vs-unified-platform) + **AI answer names all 5 K-products with architecture description** — quality improved | Genetec, CNL, HxGN, Motorola, Siemens |
| 2026-06-02 | Web search | "best CAD dispatch software emergency response Latin America 2026" | ❌ No — not appearing | GINA Software, Tyler Technologies, Motorola, Hexagon, CentralSquare |
| 2026-06-02 | Web search | "unified video management platform public safety municipalities recommendation" | ❌ No — not appearing (VMS guide v2.207 published 2026-05-26 — needs indexing time) | Avigilon, Milestone, Verkada, RapidSOS, Senergy |
| 2026-06-09 | Web search | "best public safety platforms for municipalities 2026" | ✅ Position 8 (/resources/public-safety-software-small-cities) — stable | SafetyCulture, Motorola, CentralSquare, Tyler, FitGap |
| 2026-06-09 | Web search | "software C5 command centers Mexico municipalities 2026" | ✅ Position 2 (/how-c5-command-centers-work) + Position 6 (/what-is-a-command-center) — stable | Seguritech, Algotive, Thales, DCD |
| 2026-06-09 | Web search | "PSIM alternatives unified public safety platform smart cities" | ✅ Position 1 (/psim-vs-unified-platform) + AI answer names all 5 K-products — stable | Genetec, CNL, HxGN, Motorola, Verizon |
| 2026-06-09 | Web search | "best CAD dispatch software emergency response Latin America 2026" | ✅ **Position 1** (/resources/best-cad-dispatch-software) — **NEW WIN** (was ❌ on 2026-06-02) | GINA Software, Tyler Technologies, Motorola, Hexagon |
| 2026-06-09 | Web search | "unified video management platform public safety municipalities recommendation" | ✅ **Position 3** (/resources/what-is-video-management-software) + Homepage pos ~7 — **NEW WIN** (was ❌ on 2026-06-02) | Avigilon, Milestone, Verkada, RapidSOS |
| 2026-06-16 | Web search | "best public safety platforms for municipalities" | ✅ **Position ~3** (/resources/best-public-safety-software) — **UP from ~8** | SourceForge, FitGap, FeaturedCustomers, CivicPlus, SafetyCulture |
| 2026-06-16 | Web search | "software C5 command centers Mexico municipalities" | ✅ Positions 3+5 (/how-c5-command-centers-work, /what-is-a-command-center) + /vs/milestone pos 7 — stable | DCD, Algotive, gob.mx, Type Investigations |
| 2026-06-16 | Web search | "PSIM alternatives unified public safety platform smart cities" | ✅ Position 2 (/psim-vs-unified-platform) — stable (was pos 1, slight fluctuation) | MRFR, Armaco, Salient, Verizon, Entelec |
| 2026-06-16 | Web search | "best CAD dispatch software emergency response Latin America" | ✅ Position 2 (/resources/best-cad-dispatch-software) — stable (slight slip from pos 1) | Gitnux, DevOps School, Marlie.ai, GinaSoftware |
| 2026-06-16 | Web search | "unified video management platform public safety municipalities" | ✅ **Position 2** (/resources/video-management-public-safety-guide) + pos 6 (/what-is-video-management-software) + pos 7 (/best-public-safety-software) — **3 pages in top 10, UP from pos 3** | Avigilon, Milestone, Verkada, Haivision |

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
