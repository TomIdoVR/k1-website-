# KabatOne — Non-Branded Keyword Strategy

> Generated 2026-06-24 from Google Search Console (90-day window). Regenerate with
> `python3.11 SEO/keywords/build_keyword_targets.py` → updates `keyword-targets.csv`.
> Track movement weekly with `python3.11 SEO/keywords/track_keywords.py`.

## Why this exists

89% of KabatOne's search clicks are **branded** ("kabat one", "kabatone"). Growth
now depends on winning **non-branded discovery** keywords — the 11% that's the real
SEO target. This is the prioritized, monitored target list.

## Scoring model

| Factor | Signal | Notes |
|---|---|---|
| **Potential** | GSC impressions (90d) | Real demand we already surface for. (True search volume needs DataForSEO — not yet wired; impressions are the free proxy.) |
| **Competition** | Current avg position | Proxy for difficulty *for us* — page-1-but-not-#1 is most winnable. KD enrichment optional later. |
| **Opportunity score** | `impressions × winnability(position)` | Winnability peaks at pos 4–10 (page 1, CTR upside), high at 11–20, lower beyond. |
| **CTR-gap** | `expected_ctr(pos) − actual_ctr` | Flags pages that rank but under-convert → title/snippet fixes. |

**Play types** (auto-assigned per keyword):
- **CTR fix** — ranks page 1 (pos ≤15) but under-converts → *title/meta/OG* (agent's track)
- **Page-2 push** — pos 11–20, close → *content depth + internal links*
- **Ranking build** — pos 21+, real demand → *content depth + authority*
- **Won/defend** — pos ≤5, converting → *protect*
- **Long-tail** — <10 impressions → *monitor, harvest passively*

## The opportunity, by cluster (top 175 keywords)

| Cluster | kws | impr | score | Verdict |
|---|---:|---:|---:|---|
| **VMS / video management** | 53 | 15,310 | 10,428 | 🔴 #1 — own it |
| **Video analytics** | 51 | 12,213 | 6,273 | 🔴 #2 |
| **C5 command center (ES)** | 21 | 2,952 | 2,852 | 🟢 converting already |
| **Competitor /vs/** | 11 | 2,803 | 2,726 | 🟠 CTR plays |
| **CAD / dispatch** | 19 | 1,823 | 1,452 | 🟠 |
| Situational / platform / other | 20 | 2,074 | 1,030 | ⚪ long-tail |

**VMS + Video analytics = 64% of the addressable non-branded opportunity.** The whole
strategy is: win these two clusters.

## Play breakdown (all 1,136 keywords)

- **183 CTR-fix** (page-1, under-converting) → titles/meta → **parallel agent's track**
- **100 Page-2 push** + **299 Ranking-build** → content depth + internal links → **this track**
- 553 long-tail (monitor) · 1 won

## Content action plan

### 🔴 VMS / video management (score 10,428)
- **"vms"** (4,450 impr, pos 9.3, 0.04% CTR) + **"vms software"** (pos 18) + **"vms cctv/camera"** (pos 9–15) → **CTR title work** (agent) + push the hub from pos 14 to page 1.
- **"video management system/software"** (pos 22–38) → **ranking build** on `/resources/what-is-video-management-software/` (already content-complete → needs authority + internal links, both in progress).

### 🔴 Video analytics (score 6,273)
- **"ai video analytics", "video analytics surveillance", "cctv video analytics", "camera analytics"** (pos 17–33) → `/resources/what-is-video-analytics/`. FAQs added (v2.232); now needs ranking lift (authority + the internal links shipped v2.235).

### 🟢 C5 (ES) — already working
- **"c5", "que significa c5", "c5 significado", "que es c5"** (pos 8–10) → `/es/resources/how-c5-command-centers-work/`. CTR refresh shipped (v2.231) — **this cluster went 0→22 clicks.** Defend + extend.

### 🟠 Competitor /vs/ + CAD
- Peregrine (pos 9.8), Fusus, Verkada, Avigilon + "best fire CAD", "computer aided dispatch software" → **CTR title plays** (agent) on the /vs/ and best-cad pages.

## Monitoring cadence

- **Weekly**: `track_keywords.py` re-pulls GSC positions for all tracked keywords, appends a dated snapshot to `keyword-history.csv`, and reports the biggest movers (▲/▼ position, new clicks). Runs alongside the existing Monday weekly agent.
- **Monthly**: regenerate `keyword-targets.csv` (`build_keyword_targets.py`) to re-score as positions shift and new queries appear.
- **Review**: promote keywords that cross onto page 1, retire ones that die, and feed "Ranking build" winners into the content backlog.

## Files

| File | Purpose |
|---|---|
| `keyword-targets.csv` | Master scored list — 1,136 keywords, ranked, tiered, play + target page |
| `keyword-history.csv` | Weekly position snapshots (built by track_keywords.py) |
| `build_keyword_targets.py` | Regenerates the scored list from GSC |
| `track_keywords.py` | Weekly position monitor + movers report |
| `keyword-strategy.md` | This document |
