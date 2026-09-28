# KabatOne Weekly SEO + GEO — 2026-08-31

**Focus:** The CAD cluster is repeating the exact mistake the video cluster just fixed — **60 internal links point at the page ranking ~30, and 23 at the page ranking ~6.5.** One playbook, already proven on this site, fixes it.

**Window:** 2026-08-02 → 2026-08-29 (28d) vs prior pull 08-28 — **3 days apart, not 7**, so small deltas are noise.
**Sources:** GSC `gsc-fresh-2026-08-31.json` · GA4 530090453 · `geo-history.csv` · `scripts/seo_diff.py` (all pulls succeeded).
**Supersedes:** the 08:20 version of this file — see §6 for what I withdrew.

---

## 1. Traffic

| Channel | Sessions | Prior | Δ | Users | S/U | Bounce | |
|---|---|---|---|---|---|---|---|
| Direct | 2,269 | 1,798 | +26% | 2,053 | **1.11** | 71.0% | 🤖 **BOT — excluded** |
| **Organic Search** | **940** | 850 | **+11%** | 677 | 1.39 | 51.9% | ✅ real |
| Referral | 93 | 97 | −4% | 57 | 1.63 | 49.5% | small base |
| Unassigned | 53 | 9 | +489% | 52 | **1.02** | **98.1%** | 🤖 **BOT — excluded** |
| AI Assistant | 50 | 56 | −11% | 37 | 1.35 | **44.0%** | small base |
| Organic Social | 21 | 26 | −19% | 20 | 1.05 | 42.9% | small base |

**Organic +11% is the real number** — third consecutive pull of growth, and it agrees with GSC.
Direct is **63% of all sessions** at 1.11 sessions/user and 71% bounce. That is the bot
signature; it must never reach the board as growth.

**AI Assistant by engine**

| Engine | Sessions | Share |
|---|---|---|
| chatgpt.com | 33 | **64.7%** |
| gemini.google.com | 14 | 27.5% |
| claude.ai | 2 | 3.9% |
| duck.ai · perplexity.ai | 1 each | 2.0% |

**13-week series:** 2 · 8 · 8 · 5 · 12 · 17 · 14 · 14 · 10 · 16 · 10 · 10 · *4\**
*\*current week, in progress — excluded from the trend.*

Peak 17; last 3 complete weeks average **12.0** vs prior 3 at **12.7** → **flat**.

> The Monday Slack brief reads this series as "peaked wk 29, now flat to **declining**." That is
> the partial week doing the work — bucket 13 is four days old. Excluding it, the channel is
> flat. Same data, and the difference is one line of arithmetic.

**Top referrers:** google 850 · bing 84 · grupokabat.com 53 · chatgpt.com 33 · linkedin/facebook ~10 each.

---

## 2. Search

| Metric | Now | Prior (08-28) | Δ |
|---|---|---|---|
| Clicks | **540** | 530 | +1.9% |
| Impressions | 109,746 | 105,752 | +3.8% |
| Avg CTR | 0.49% | 0.49% | flat |
| Avg position | 13.3 | 13.1 | −0.2 |
| Striking distance (5–15) | 102 | 101 | +1 |

**Clusters — where impressions fail to convert**

| Cluster | Impressions | Clicks | CTR | Queries |
|---|---|---|---|---|
| C5 / Command Ctr | 5,587 | 16 | 0.29% | 11 |
| Video / VMS | 4,737 | 22 | 0.46% | 28 |
| **CAD / Dispatch** | 2,538 | 9 | **0.35%** | **51** |
| Brand | 203 | 114 | **56.16%** | 2 |

Brand converts at 56%; nothing else clears 0.5%. That is the control condition — when a result
is reached, it converts fine. The gap is not snippets.

**Opportunities** — ranked by score, every row intent-labelled

| # | Query | Pos | Impr | Potential | **Qualified** | Intent | Score |
|---|---|---|---|---|---|---|---|
| 1 | best fire computer aided dispatch software | 6.4 | 749 | 44 | **44** | buyer | 134.8 |
| 2 | vms software | 11.3 | 1,502 | 30 | **30** | buyer | 61.1 |
| — | `c5` | 8.5 | 5,341 | 210 | **0** | navigational ⛔ | 42.1 |
| 3 | cctv video analytics | 12.6 | 573 | 13 | **13** | buyer | 26.7 |
| 4 | 911 dispatch software | 9.6 | 148 | 5 | **5** | buyer | 17.8 |
| — | `"traffic management system" "11 ktco2e"` | 5.3 | 160 | 9 | 9 | **misclassified** ⚠️ | 9.6 |

`c5` excluded, 4th week — qualified potential 0 by construction since v2.336.

**Zero-click page-1 block**

| | 08-20 | 08-28 | **08-31** |
|---|---|---|---|
| Page-1 queries | 49 | 46 | **62** |
| Zero-click | 41 | 34 | **36** |
| **Improved position, still zero** | — | 5 | **12** |

12 queries gained position this pull and still returned zero — up from 5. Rank is not the
constraint. AI Overview absorption, diagnosed 2026-07-20 and now with 3× the evidence.
**No snippet rewrites.**

**Movers:** 10 up, 1 down. All six top gainers are video-analytics queries; three crossed onto
page 1. Timing lines up with the consolidation, but the merge landed today and the window ends
08-29 — confirmation needs the 09-07 pull.

---

## 3. 🔴 CAD-1 — the cluster is repeating the mistake we just fixed

`/resources/what-is-cad-dispatch-software` surfaced this window (0 → 682 impressions, avg
position 29.7) and now competes with the cluster winner on the winner's own buyer terms — at
positions in the high 50s and 60s.

**Internal links, counted as actual anchors in `src/`, redesign excluded:**

| Page | Rank | Anchor links | Files |
|---|---|---|---|
| `best-cad-dispatch-software` (**winner**) | **6.4–10.3** | **23** | 19 |
| `what-is-cad-dispatch-software` | **29.7** (57–67 on buyer terms) | **60** | 46 |

**60 links point at the page ranking ~30; 23 at the page ranking ~6.5 — a 2.6:1 ratio favouring
the loser.** 19 of those 46 files are country pages, which is how it accumulated quietly.

This is precisely the mechanism the video-analytics consolidation corrected last week — and that
cluster is the only one whose positions are improving. The playbook is proven on this site.

> Counted independently this run. A parallel report put this at 13 vs 9; that counts a subset.
> The real ratio is worse, and the direction is the same.

---

## 4. Is the trend declining? — no, but it has **stalled**, and that is worse than it looks

Tested over 18 weeks, not the 3-day window:

| | W17 | W23 | W27 | W30 | W33 | W35 |
|---|---|---|---|---|---|---|
| Clicks | 2 | 89 | 117 | 124 | 145 | **128** |
| Impressions | 341 | 11,364 | 22,259 | **29,478** | 29,006 | 27,107 |
| Position | 22.8 | 13.6 | 12.3 | 13.0 | 12.2 | **14.1** |
| CTR | 0.59% | 0.78% | 0.53% | 0.42% | 0.50% | **0.47%** |

**Clicks are not declining** — last 4 complete weeks average 126 vs 116 prior, **+7.7%**; GA4
organic **+11.5%**. But look at the other three rows:

- **Impressions plateaued at ~28K since W30** — six weeks flat, after growing 86× in the
  thirteen before it. The publishing engine that drove that growth has stopped producing.
- **Position stuck at 13–14 since W23** — twelve weeks, no improvement.
- **CTR never improved.** 0.4–0.6% for three months. At position 13 the curve predicts 2.5%;
  we earn 0.5%. **Five times below curve.**

All three levers flat at once means the current playbook has run out. Clicks still creep up on
base effects alone. **The growth is over unless CTR moves** — and more pages cannot help, because
more impressions at 0.5% is nothing. That is the aggressive case, and it is a conversion problem,
not a volume one.

---

## 5. GEO — the zero-click cause, confirmed directly for the first time

**The 83% was measured on queries we already win.** Not one of the 12 tracked queries was in
the zero-click block. Retargeted the monitor to 25 queries in three blocks and re-ran:

| Block | Cited | Rate |
|---|---|---|
| Baseline 12 (trend continuity) | 10/12 | 83% |
| **Zero-click page-1 queries** | **3/7** | **43%** |
| ES / PT (new) | 4/6 | 67% |
| **Overall** | **17/25** | **68%** |

**`best fire computer aided dispatch software` — ABSENT from the AI answer.** That is the site's
#1 opportunity: 749 impressions, position 6.4, **zero clicks for four consecutive weeks**. It
ranks on page one and earns nothing because the Overview answers without us.

AI-Overview absorption has been the working theory since 2026-07-20. This is the first time it
has been tested against the queries actually bleeding, and it holds. Also absent:
`911 dispatch software`, `AI VMS software`, `analytic CCTV cameras`.

ES/PT is healthier than feared (4/6) — but `mejor software de gestión de video para ciudades`
and its Portuguese twin are both absent, in the ICP market.

⚠️ **Instrument scope (G10):** `track_geo.py` asks **Claude with web search** and counts "in
retrieved sources" the same as "named in the answer". **It does not test ChatGPT — which sends
65% of our AI traffic.** Never a bare percentage in a board deck.

---

## 5. Plan

### P0 — this week

**🥇 #1 — CAD-1: re-point the CAD cluster's internal links.** Move the 60 anchors feeding
`what-is-cad-dispatch-software` onto `best-cad-dispatch-software` (rank ~6.5), keeping the
explainer as a definitional/GEO asset rather than a competing buyer page. *Why it beats the
runner-up:* fully in my control, no approval, no external authority, and it is the only playbook
on this site with a measured result behind it. ~1–2h. Owner: Claude.

**#2 — Push 5 local commits.** v2.338–v2.340 are invisible on this machine.

### P1 — this month

**#3 — Track C escalation** — carry-over **5 weeks** 🔴. `what-is-video-management-software`:
18.6K impressions, ~17.5, **32s dwell**. v2.286 set its own trigger; it hasn't moved in five
pulls. Content depth before ranking lift. Owner: Claude.

**#4 — AUTH-1 backlinks** — **6 weeks** 🔴, blocked on **Omer**. Now measurable against a
current production site. Do not point it at `c5`.

**#5 — GEO-1:** add ES + PT queries. 12 English queries for a LATAM company whose `/es` pages
pull AI traffic at 300–1,350s dwell.

### P2 — backlog

**#6 —** GEO-2 (split `cited` into named-in-answer vs in-source-set) · GEO-3 (quoted-literal
classifier gap) · country-page sprawl **142 vs guardrail 121 — 21 over**.

---

## 6. Operations & health

| Signal | Value | |
|---|---|---|
| Data pipeline | GSC + GA4 + GEO all read | ✅ |
| Production pushes this week | 2 (incl. PR #17) | ✅ first in 10 days |
| Commits this week (`nextjs`) | 16 | |
| Local unpushed | **5** | ⚠️ |
| Branch topology | `main` +165 / `nextjs` +19 — **DIVERGED**, 30 files both sides | ⚠️ PR from `main` only |
| Country pages vs guardrail | **142 vs 121** | ⚠️ 21 over |
| Master plan age | 18d | ⚠️ borderline |
| GEO monitor | 1 run today (was 2 — fixed v2.340) | ✅ |
| Canonical sweep | clean | ✅ |
| Redesign hold | `hero-lab*` untracked, unstaged | ✅ |

**Live-verified this run:** both retired video URLs 301 in one hop; winner 200;
`best-ai-video-analytics-software` correctly untouched; sitemap 230 URLs; `psim-alternatives`
canonical unslashed.

---

## 7. Housekeeping

**Shipped:** PR #17 → production (v2.376) · v2.338 divergence check · v2.339 branching docs ·
v2.340 GEO single-owner.

**Withdrawn — my own finding, from this morning**
- ❌ **`/k-dispatch` −5.1 positions as a 🔴 escalation.** Wrong. Clicks were **flat at 10** while
  **CTR rose 0.43% → 0.71%**; the lost impressions were mid-tail terms at positions 45–84 that
  never converted, and the EN CAD cluster grew **68 → 82 clicks (+21%)**. Position fell because
  the query mix improved. CHANGELOG **v2.282 had already diagnosed this in July** — *"healthy
  query reallocation — no fix."* I ran G1 on that report's other recommendation and not on this
  one. G1 now explicitly covers escalations, not just proposed fixes.

**Refuted**
- ❌ `c5` — 4th week, qualified potential 0.
- ❌ Snippet rewrites — 12 queries improved and still returned zero.
- ❌ Slack brief's *"GEO dark 34 days / key out of credit"* — ran today and 08-28; key refunded v2.328.
- ❌ Slack brief's *"deploy 18 staging commits"* — branches diverged; production is at a **higher** version.
- ❌ Slack brief's *"476 sitemap URLs"* — live sitemap serves **230**.

**Carry-over**

| Item | Owner | Weeks |
|---|---|---|
| AUTH-1 backlinks | **Omer** | **6** 🔴 |
| KAB-1721 Track C escalation | Claude | **5** 🔴 |
| CAD-1 | Claude | 0 (new) |
| GEO-1 / GEO-2 / GEO-3 | Claude | 0 |

**Next report:** 2026-09-07 — confirms whether the video-cluster gains hold post-merge.
