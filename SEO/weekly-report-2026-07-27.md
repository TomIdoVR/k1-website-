# KabatOne Weekly SEO + Traffic Report — 2026-07-27

**Window:** 2026-06-27 → 2026-07-24 (28d) vs prior 28d. Source: GSC (property https://kabatone.com/), GEO monitor. GA4 channel pull failed this week (property-id 404 in `google-api.json` — needs fix; non-blocking).

## Headline — strong growth week
| Metric | Current 28d | Prior 28d | WoW |
|---|---|---|---|
| Clicks | **464** | 312 | **+49%** |
| Impressions | **85,988** | 60,634 | **+42%** |
| Avg CTR | 0.54% | 0.51% | +0.03pt (flat) |
| Avg position | 13.2 | 13.7 | +0.5 (better) |

Traffic is compounding — impressions +42% and position improving. The cluster/spoke program is working. **The ceiling remains CTR (~0.5%)** — impressions grow but clicks lag because AI Overviews absorb the click on our best-ranked concept queries (documented KAB-1721). Branded/non-branded split among captured queries ≈ 66/34; non-branded remains the growth engine.

## GEO — 8/12 AI answers cited (up); one clean win
This week's monitor (ran 08:07):
- **WIN: "Genetec alternatives for public safety" N→Y** — the `/resources/genetec-alternatives/` roundup earned its citation. Validates the GEO-roundup lever.
- Still **Y**: best CAD, best VMS, unified platform, best municipalities, best VMS for cities, CAD multi-agency, Mexico/LATAM.
- Still **N (gaps)**: C5 command center, NG911 software, AI video analytics (Milestone now cited, we're absent), RTCC vendors. These 4 have pages — the gap is authority/citability, not new pages.

## Top pages (28d)
| Page | Clicks | Impr | Pos | Note |
|---|---|---|---|---|
| /es/resources/how-c5-command-centers-work/ | 60 | 11,067 | 7.5 | ES C5 cluster is a top earner |
| /resources/best-cad-dispatch-software/ | 43 | 22,416 | 9.0 | Workhorse, still climbing |
| /resources/what-is-video-management-software/ | 30 | **17,075** | **19.6** | **Biggest page-2 pool — position lever** |
| /resources/cctv-video-analytics/ | 20 | 3,566 | 18.1 | Page 2 |
| /resources/what-is-video-analytics/ | 10 | 12,643 | 24.9 | Page 3, huge impressions, weak |

## Biggest opportunities (striking distance)
1. **"ai-powered video analytics" — 1,123 impr, page 1 (pos 7–9), 0 clicks.** Split/cannibalized across TWO pages (`what-is-video-analytics` 939i pos9.3 + `ai-video-analytics` 185i pos7.1). Most egregious, most fixable on-site item. Fix: sharpen the stronger page's title/meta to own "AI-powered video analytics" intent; reduce two-page dilution. → **This week's #1 action.**
2. **"c5" — 5,427 impr, pos 8.4, CTR 0.2%.** Largest single impression pool; page 1, near-zero clicks = AIO zero-click. Concept query, needs citability/CTR play (harder; watch).
3. **what-is-video-management-software — 17,075 impr, pos 19.6.** Biggest page-2 page. Lever: internal-link concentration (route from homepage / best-cad / C5 hub) + freshness/depth to push toward page 1.
4. **"vms software" — 1,216 impr, pos 12.8** — owned cleanly by what-is-VMS; authority-limited to break page 1.

## Recommended next action
**Rescue the video-analytics cluster CTR/cannibalization** (opportunity #1): 1,123 page-1 impressions currently yield 0 clicks across two competing pages. A focused title/meta refresh on `what-is-video-analytics` (EN+ES) to lead with "AI-Powered Video Analytics" + a clear differentiator, and tightening cross-links so the two pages stop competing, is the single highest-confidence, lowest-risk, measurable on-site win available. On-site only — no authority/human dependency.

## Priority queue
1. Video-analytics CTR/cannibalization refresh (#1 above) — this week.
2. Position push on what-is-video-management-software (pos 19.6, 17K impr) via internal-link concentration.
3. Keep the GEO-roundup / citability lever on the 4 remaining N gaps (C5, NG911, AI-video, RTCC) — pages exist; needs citability polish + off-site authority.
4. **Fix GA4 pull** — `ga4_property_id` in `~/.config/claude-seo/google-api.json` returns 404; should be `530090453`. Restores weekly sessions/source view.
5. Off-site authority (G2/Capterra, guest article) — the ceiling for money hubs to break page 1. **Needs human.**

## Housekeeping flags
- Latest on origin/nextjs: **v2.283** (GA4 lead-conversion fix) + v2.282 (weekly brief). v2.284 (unified-platform roundup) still sits unpushed on branch `seo-unified-platform` — pending KAB-1955 confirmation.
- `.secrets/gsc-credentials.json` refresh token is **stale (401)**; the working creds are `~/.config/claude-seo/oauth-token.json` (auto-refreshed by the weekly agent). Consider re-syncing `.secrets` so `scripts/gsc_pull_weekly.py` works standalone.
- Weekly traffic HTML (`SEO/audits/traffic-*.html`) did not regenerate today — only the GEO monitor fired. GA4 404 likely aborted the agent's traffic step.
