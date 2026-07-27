# CTR Recovery Plan — 2026-07-27

Follow-up to `SEO/ctr-diagnosis-2026-07-20.md` (board-requested, KAB-1721). That diagnosis established the core thesis: impressions are healthy, clicks are not — AI Overviews (AIO) are absorbing clicks on definitional queries before users reach the SERP. This plan adds new evidence and turns the thesis into concrete actions.

## What's new since the 07-20 diagnosis

### 1. Google fully deprecated FAQ rich results — 2026-05-07
The narrow gov/health-site exception (in place since 2023-08) ended. FAQPage markup no longer earns any SERP rich-result real estate for **any** site, including ours. We have `faqPageSchema()` on ~214 pages.
- **Do not remove it.** It still has GEO value — FAQ blocks are exactly the self-contained Q&A chunks AI answer engines (ChatGPT, Perplexity, Google AI Overviews themselves) pull from when citing sources.
- **Do stop crediting it in CTR planning.** Any prior assumption that FAQ schema would recover SERP visual space is dead. This closes off one previously-open lever.

### 2. AIO suppression has spread to comparison queries
The 07-20 diagnosis focused on definitional queries ("what is video management software"). Fresh data (`SEO/gsc-fresh-2026-07-20.json`) shows it's now also suppressing clicks on competitor-comparison queries — e.g. `/vs/fusus`, `/vs/peregrine` — queries that used to be considered "safer" because they're bottom-funnel and less likely to trigger a generic AI summary. They aren't safe anymore. This matters because comparison pages are where in-market buyers are closest to a decision — losing clicks there is more costly per-impression than on top-of-funnel definitional queries.

### 3. The branded/non-branded CTR gap is the sharpest number in the dataset
From `SEO/gsc-fresh-2026-07-20.json`:

| Segment | Impressions | Clicks | CTR | Share of clicks |
|---|---|---|---|---|
| Branded ("kabat one" etc.) | 1,118 | 127 | **11.36%** | 66.1% |
| Non-branded | 50,302 | 65 | **0.13%** | 33.9% |

Branded queries are 2.2% of impressions but generate two-thirds of all clicks. This is not a ranking problem (branded queries already rank #1) — it's proof that when a user already recognizes the brand, CTR is 87x higher than when they don't. That gap is the single clearest signal of where the CTR problem actually lives: **non-branded discovery clicks are the ones AIO is eating**, and brand recognition is the thing that currently protects a click from being suppressed.

## The 3 tracks (recap + status)

| Track | What | Status |
|---|---|---|
| A | Fix live GSC/GA4 OAuth pull (expired token) | In progress — `scripts/gsc_reauth.py` built, needs Omer to run it interactively (browser auth) |
| B | Rework CTR-suppressed titles/descriptions with AIO-resistant framing | Not started — see recommendation below |
| C | Ranking lift on the two flagship VMS definitional pages | **Done — v2.286** (freshness signal fix, committed on `nextjs` via KAB-1980; the earlier same-day v2.279 attempt was reverted from `hero-redesign` — duplicate work, wrong branch) |

## What NOT to do (holds from the 07-20 diagnosis, reaffirmed)

- **No blanket title/meta rewrites.** Untargeted rewrites risk losing rankings that are otherwise fine to chase a CTR problem that's mostly structural (AIO), not copy-driven.
- **No FAQ schema removal.** Its rich-result value is gone but its GEO/citation value is intact — removing it would be a pure loss.

## Recommended next actions, in priority order

1. **Finish Track A** — run `python3 scripts/gsc_reauth.py` (needs Omer's browser), then re-pull a fresh GSC snapshot to confirm the branded/non-branded split and AIO-suppression pattern hold on live data, not just the 07-20 snapshot. Then publish the OAuth consent screen to "In production" in Google Cloud Console so this stops recurring every ~7 days.
2. **Track B, scoped narrowly (not blanket):** rewrite title + meta description on the 4-6 highest-impression, lowest-CTR non-branded pages only — the two VMS pages just refreshed (v2.286) plus the 2-3 worst-performing comparison pages (`/vs/fusus`, `/vs/peregrine`, next-worst by impression volume). Frame titles/descriptions to answer the query directly *and* signal something an AI summary can't replicate — a number, a named capability, "for government/municipal buyers" — so a user who already saw an AI answer still has a reason to click through. This is a bounded, measurable test (6 pages, before/after CTR), not a strategy-wide rewrite.
3. **Brand-recognition compounding:** since branded CTR is 87x non-branded, anything that grows branded search volume (PR, case studies, conference presence, LinkedIn) converts into disproportionately more clicks than the same effort spent chasing non-branded rank. Not a code task — flag to marketing.
4. **Re-run the freshness-signal fix pattern** across the next tier of stalled definitional pages once Track A confirms which ones are actually impression-heavy/position-stuck on live data — don't guess from the 07-20 snapshot alone.
5. **Do not invest further in FAQ schema for CTR purposes.** Its remaining value is 100% GEO (AI citation), so any future FAQ work should be evaluated against citation-readiness (self-contained answers, specific numbers), not SERP appearance.

## Data sources
- `SEO/ctr-diagnosis-2026-07-20.md` — original diagnosis, KAB-1721
- `SEO/gsc-fresh-2026-07-20.json` — most recent full GSC pull (branded/non-branded split, page/query breakdown)
- `SEO/gsc-full-audit-2026-06-23.json`, `SEO/gsc-full-audit-2026-05-18.json` — prior snapshots used for trend comparison
- FAQ rich-result deprecation: confirmed via web search, effective 2026-05-07
