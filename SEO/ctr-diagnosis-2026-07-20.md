# CTR Diagnosis — kabatone.com (2026-07-20)

**Trigger:** Board (KAB-1721): "We get many impressions, but few clicks — optimize the CTR ratio."
**Data:** GSC, live pull 2026-06-20 → 2026-07-17 (`SEO/gsc-fresh-2026-07-20.json`), compared to `gsc-full-audit-2026-06-23.json`.

## Headline

Sitewide CTR = **0.53%** (438 clicks / 81,914 impressions). The board's instinct is right — but the cause is **not weak titles/meta**. Our snippets are already keyword-first, year-stamped, and benefit-driven. The cause is **AI Overviews / zero-click SERPs** eating the click on the software-category and definitional queries that make up most of our impression base.

## The smoking gun — position improved while CTR collapsed

| Page | June: pos → CTR | July: pos → CTR | Read |
|---|---|---|---|
| `/es/resources/how-c5-command-centers-work/` | 9.4 → 19% | **7.5 → 0.5%** | position *up*, CTR down 38× |
| `/vs/fusus/` | 10.8 → 26% (382 imp) | **7.6 → 0.2% (2,641 imp)** | 7× more impressions at a *better* position, ~0 clicks |
| `/vs/peregrine/` | 9.5 → 0% | **7.3 → 0.2%** | better position, still no clicks |

If this were a snippet problem, CTR would not collapse **while rankings improve**. This is a SERP-surface problem: an AI Overview + ads now occupy the first screen, so even organic position 6–8 sits below the fold.

**Proof it's the SERP, not us:** the homepage gets **10.3% CTR at pos 7** (branded "kabat one" — no AI Overview). Clicking works fine where there is no answer box. It's the software/definitional queries that are suppressed:
- "best fire computer aided dispatch software" — 906 imp, **pos 6.3, 0 clicks**
- "vms" — 619 imp, pos 7.6, 0 clicks
- "ai-powered video analytics" — 1,086 imp, pos 8.9, 0 clicks

## Where the impressions actually are (and what each needs)

1. **AI-Overview-suppressed, page-1** (`how-c5` EN+ES, `best-cad-dispatch-software`, `vs/fusus`, `vs/peregrine`, VMS/video-analytics terms). ~40K+ imp. **Snippet rewrites won't move these.** Fix = GEO (be cited *inside* the AI Overview) + bottom-funnel intent.
2. **Genuine page-2 ranking gap** — `what-is-video-management-software` (15,950 imp, **pos 20.4**) and `what-is-video-analytics` (14,381 imp, **pos 21.5**). Not even on page 1. Fix = ranking lift (internal links, depth, freshness). At pos ~7 these two alone model to ~2,700 clicks/mo — but they're definitional, so AIO will still tax them.

## Recommendation — 3 tracks (strategic, not cosmetic)

- **Track A — GEO citation push (highest leverage).** The click that survives an AI Overview goes to the cited source. Intensify the existing program (llms.txt, liftable definition callouts, comparison roundups) so KabatOne is the vendor the AI names. Continues KAB-1591/1623/1689 line of work.
- **Track B — Pivot query mix to transactional / non-AIO intent.** Redirect targeting from definitional/category terms (AIO eats them) to bottom-funnel B2G queries that still get clicks: "[competitor] alternative", "CAD dispatch pricing/demo", RFP/tender/procurement terms, branded. Buyers click vendor & comparison pages, not "what is" pages.
- **Track C — Ranking lift on the two flagship VMS pages** (pos 20→page 1) via internal links + content depth. Biggest raw impression pool; partial AIO tax but real upside on the longer-tail commercial VMS terms.

**What NOT to do:** blanket title/meta rewrites. Current snippets are already well-optimized; rewriting them chases a cause that isn't there and risks the ranking gains.

## Recommended next action
Green-light **Track A + C** (GEO intensification + flagship ranking lift) as the CTR-recovery program; hold Track B for a keyword-research sprint. Awaiting board direction on KAB-1721.
