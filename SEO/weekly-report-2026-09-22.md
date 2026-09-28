# KabatOne Weekly SEO + GEO — 2026-09-22

**Focus:** Clicks fell 7.7%, and **none of it is a ranking problem** — it is two URL
migrations handing over and one rank-tracking bot leaving the dataset. The real cost this
week is **PR #18**: the CAD link consolidation has been finished, mergeable and green for
**14 days**, while production still sends **60 internal buyer links to a page ranking 30th**
and 36 to the one ranking 9th. Merge it.

---

## 1. Traffic

| Channel | Sessions | Prior | Δ | Users | Bounce | Read |
|---|---|---|---|---|---|---|
| Direct | 1,778 | 2,484 | −28.4% | 1,613 | 75.9% | ⚠️ bot signature — do not narrate |
| **Organic Search** | **903** | 935 | −3.4% | 643 | **49.2%** | flat sessions, **engagement improved** (53.6% → 49.2%) |
| Referral | 91 | 86 | +5.8% | 47 | 54.9% | flat |
| AI Assistant | 54 | 52 | +3.8% | 38 | 59.3% | small base — directional only (G9) |
| Organic Social | 20 | 27 | −26% | 18 | 65.0% | ⚠️ bot signature |
| Unassigned | 7 | 7 | 0% | 7 | 100.0% | ⚠️ bot signature |

GA4 organic is **essentially flat (−3.4%) with bounce improving 4.4 points** — that alone
says the 7.7% GSC click drop is not a demand or quality problem. Where the two instruments
disagree, §2 explains why.

**AI referrers — who actually sends traffic:** ChatGPT 32 (58.2%), Gemini 17 (30.9%),
Copilot 3 (5.5%), Perplexity 2 (3.6%), Claude 1 (1.8%). ChatGPT remains the majority, and
the GEO monitor does not measure it (§3).

**AI weekly series:** last 3 complete weeks (W36–38) **14 · 14 · 15**, avg 14.3, against
W33–35 at 12.0. Up. *W39 shows 4 — that week began today; it is partial, not a collapse.*

## 2. Search

| Metric | Now | Prior | Δ |
|---|---|---|---|
| Clicks | 566 | 613 | **−7.7%** |
| Impressions | 121,994 | 121,698 | +0.2% |
| Avg CTR | 0.46% | 0.51% | −9.8% |
| Avg position | **13.4** | 13.6 | **improved** |

**566 is the third-highest reading in the record**, behind only 613 and 591 — both of which
are the two pulls immediately before it. Full series: 452 · 428 · 437 · 530 · 540 · 531 ·
591 · 613 · **566**. This is a pullback from a peak, not a decline into new territory, and
it is not the first negative week (−5.3% on 08-10, −1.7% on 09-01).

### Where the 47 clicks went — fully accounted for

Two slashed/unslashed URL pairs are mid-handover. Together they explain **−49 clicks**
against a site total of **−47**:

| Pair | 09-14 | 09-22 | Δ |
|---|---|---|---|
| `cctv-video-analytics` unslashed | 81c / 10,617i / p14.8 | **88c / 13,813i / p15.0** | +7 |
| `cctv-video-analytics` slashed | 68c / 3,365i / p9.9 | 17c / 293i | −51 |
| **combined** | **149** | **105** | **−44** |
| `best-cad-dispatch-software` unslashed | 35c / 14,753i / p9.5 | **47c / 19,249i / p9.4** | +12 |
| `best-cad-dispatch-software` slashed | 26c / 6,434i | 9c / 1,116i | −17 |
| **combined** | **61** | **56** | **−5** |

The retiring URLs are being deindexed; impressions transferred almost perfectly
(`cctv`: −3,072 slashed vs +3,196 unslashed). **Clicks lag impressions during a handover** —
that is the entire story. The surviving URLs are growing and holding position.

**Verified — there is nothing to fix here:**
- `curl -L`: slashed → **301** → unslashed, single hop, on both pairs ✅
- Canonicals on both forms point at the unslashed URL ✅
- **206 of 206** internal `/resources/` links in source are already unslashed; **zero** slashed ✅

MIGRATE-1 is doing exactly what it was designed to do. **Closing it** — three weeks of
"watching" is enough once the mechanism is confirmed correct and the internal links verified.

### The CAD cluster is *not* declining — check the arithmetic before the movers table

`seo_diff.py` shows all four down-movers as 911/CAD queries, and the cluster's impressions
appear to collapse 4,418 → 1,521. Both readings are wrong:

`best fire computer aided dispatch software` held **3,052 impressions at position 6.6** on
09-14 and is **absent from the raw 09-22 pull entirely**. That query is the rank-tracking
bot (`query_intent` → `polling`, value 0.0, verified by execution). `gsc_pull_weekly.py`
applies **no denylist** — it stopped polling on its own.

| CAD cluster | Prior (ex-bot) | Now | Δ |
|---|---|---|---|
| Impressions | 1,366 | 1,521 | **+11.3%** |
| Clicks | 12 | 12 | flat |
| CTR | 0.88% | 0.79% | flat |

The four "down" queries are page-2 terms earning 0–2 clicks, and the same cluster contains
equal-sized *gains* the mover cutoff hides: `911 dispatch systems` 9.2 → 6.9,
`best 911 software` 12.1 → 8.8, `best cad solution for police` 8.9 → 6.4,
`computer aided dispatch software` **new at p12.6 with 351 impressions**. No 🔴 here.

### Opportunities — intent-labelled, ranked by score

| # | Score | Query | Pos | Impr | Clicks | Intent |
|---|---|---|---|---|---|---|
| 1 | **95.3** | `vms` | 9.1 | 1,291 | 4 | buyer — **gained +4 clicks this week** |
| 2 | 60.5 | `cctv video analytics` | 5.5 | 571 | 4 | buyer |
| 3 | 49.1 | `ai-powered video analytics` | 8.3 | 614 | 0 | buyer |
| 4 | 26.0 | `c5` | 7.9 | 3,294 | 2 | **navigational ⛔ — qualified potential 0** |
| 5 | 25.9 | `cctv analytics` | 6.1 | 465 | 2 | buyer |
| 6 | 25.1 | `video analytics cctv` | 6.3 | 226 | 1 | buyer |
| 7 | 23.3 | `computer aided dispatch software` | 12.6 | 351 | 1 | buyer |
| 8 | 16.3 | `vms software` | 13.9 | 945 | 6 | buyer |

`c5` stays listed **with its reason** so next week's reader does not rediscover it. It is
citizens looking for Mexico City's C5, not buyers. Scorer re-verified by execution this week:
`c5` → navigational/0.2, `best fire computer aided dispatch software` → polling/0.0.

### Zero-click page-1

**36 of 61** page-1 queries returned zero clicks (2,155 impressions); prior 34 of 62.
**18 improved position and still returned zero.** Standing structural finding — AI Overviews
absorbing the answer. Not a snippet problem, and not new.

### Movers

**Up** — video analytics again, third consecutive week: `ai video analytics` 28.9 → 23.8,
`cctv video analytics` 7.0 → 5.5, `ai video analytics updates` 11.5 → 8.5,
`ai video management system software` 13.3 → 11.7. This is the cluster PR #17 consolidated
on 08-31, and it is still compounding.

**Down** — the four 911/CAD page-2 terms addressed above. Not escalated.

## 3. GEO

**80.0% cited (20/25) on 2026-09-21**, against 84.0% on 09-14.

Like-for-like on the identical 25-query set: **one query flipped Y→N**
(`mejor software de gestión de video para ciudades`), none flipped N→Y. That same query
flipped N→Y only the week before. One query out of 25 is 4 points — **this is instrument
noise on an LLM-based measure, not a regression.** No action.

**Instrument scope (G10):** `track_geo.py` asks **Claude with web search**. It is not a
ChatGPT measurement, and ChatGPT is 58.2% of our actual AI referral traffic. It also scores
"appeared in a retrieved source URL" identically to "the answer recommended us" (GEO-2, open).
Treat 80% as directional. **Do not put it in a board deck as a bare percentage.**

## 4. Plan

### P0 — ✅ DONE, SAME DAY

**PR #18 merged to `main` at 2026-09-22 (`ca26cda`) and deployed.** Vercel production
`dpl_8npztCkNce5QuUa5Xp4LkixVgdxP` — **READY**. PR #19 (careers) merged behind it
(`0588e97`), also READY; `/careers` returns 200.

**Verified live on kabatone.com after the deploy** — every buyer link flipped:

| Page | what-is (pos 30.2) | best-cad (pos 9.4) |
|---|---|---|
| `/vs/tyler-technologies` | 2 → **0** | 0 → **2** |
| `/resources/best-public-safety-software` | 3 → **0** | 0 → **3** |
| `/industries/public-safety` | 2 → **0** | 0 → **2** |

Source-wide the split went **60 / 36** to **36 / 61**.

**Measurement contract:** expect CAD movement over the next **2–3 pulls, not immediately** —
PR #17's equivalent took three weeks to compound. Baseline to beat: **12 clicks, 1,521
impressions, 0.79% CTR** (ex-bot, recorded today).

Production was 22 days stale at the start of this session; it is now current.

<details><summary>Original P0 as written before the merge</summary>

**One action. `gh pr merge 18`.**

The work is done. PR #18 has been **OPEN since 2026-09-08 — 14 days** — and is
`MERGEABLE` / `mergeStateStatus: CLEAN`, Vercel check **SUCCESS**, correctly branched off
`main` (so it respects the divergence rule in G12). 26 files, +102 / −52.

What production is doing right now, verified live this morning:

| Page | Position | Impressions | Clicks | Internal links pointing at it |
|---|---|---|---|---|
| `/resources/what-is-cad-dispatch-software` | **30.2** | 2,847 | 6 | **60** |
| `/resources/best-cad-dispatch-software` | **9.4** | 19,249 | **47** | 36 |

Sixty internal buyer links point at the page ranking **30th**, which converts 0.21%. PR #18
inverts that to 36 / 61. Spot-checked on live production: `/vs/tyler-technologies`,
`/resources/best-public-safety-software` and `/industries/public-safety` each carry 2–3 links
to the informational page and **zero** to the buyer page.

**Why this beats the runner-up.** The only other candidate is new content, and it loses on
every axis: PR #18 is already written, already reviewed by CI, and costs one command. It is
also the *same intervention* as PR #17 — which merged on 08-31 and whose cluster has now
posted three consecutive weeks of gains (§2 movers). This is the one play in the program with
measured evidence that it works, sitting unshipped.

**It needs Omer** — it merges to `main`, which is production, and the standing rule is no
promotion without explicit instruction. That is the only thing blocking it.

</details>

**Policy change, 2026-09-22:** Omer's approval of a change now covers the production deploy —
no second confirmation. This item cost 14 days to a redundant second ask.

### P1 — this month

1. **Re-examine AUTH-2** (3w, blocked on Omer) — it flipped to *cited* without any authority
   spend. The premise that it was blocked on backlinks looks wrong, and it is parking budget.
   Cheap to re-check.
2. **PR #19** (careers, open since 09-16) — not SEO, but it is the second PR now queued
   behind the same merge decision. Worth batching into the same session.
3. **GEO-2** — split `cited` into `named_in_answer` vs `in_source_set`. Until this ships,
   every GEO percentage overstates what it measures, and §3 has to carry a disclaimer.

### P2 — backlog

- **GEO-3** (3w) — quoted-literal detector in `query_intent`.
- **GEO-4** (3w, watching) — C5 definition fix; re-run `track_geo.py` after it reaches
  production. Note it *cannot* flip while production is 22 days stale — this item is
  downstream of the same merge as P0.
- **AUTH-1** (9w 🔴, blocked, Omer) — authority program. Nine weeks. Either fund it or
  close it; carrying it is costing nothing but telling us nothing.
- **SCORER-1 / TOOL-1** (2w, open).

## 5. Operations

| Check | State |
|---|---|
| Working copy vs `origin/nextjs` | ✅ **0 ahead / 0 behind** — last week's P0 executed |
| `main` vs `nextjs` | **DIVERGED** — 55 staging-ahead, **165 prod-ahead**, 36 overlapping files |
| Route to production | **PR from `main`** — never a merge of `nextjs` (G12) |
| Open PRs | 🔴 **#18 (14 days, SEO)**, #19 (6 days, careers) |
| Prod pushes this week | **0** — last was PR #17 on **2026-08-31 (22 days ago)** |
| Commits on `nextjs` this week | 13 |
| GEO freshness | ✅ ran 09-21, complete, 25/25, no superseded rows |
| Scheduled jobs | ✅ `seo-weekly`, `seo-geo`, `seo-scheduler-watchdog` all registered |
| Striking distance | 93 queries |
| Canonical sweep | ✅ 0 issues |
| Master plan age | 8 days |

**The 36 overlapping files are the reason P0 is a PR and not a merge.** `next.config.ts`,
five product pages and eleven resource pages have changed on both branches. PR #18 is already
cut from `main`, so it sidesteps this entirely — which is precisely why it is the safe thing
to ship first.

## 6. Housekeeping

**Corrections to this week's own analysis** — both caught before publishing:
- An earlier pass read the four CAD down-movers as a cluster decline and was about to
  escalate it. Arithmetic ex-bot shows CAD impressions **+11.3%** and clicks flat. Withdrawn.
- An earlier pass read EN `/k-dispatch/` vanishing from the page list as a 90% collapse. The
  list is capped at 20 rows and this pull's cutoff rose from 46 to 125 impressions. The page
  fell out of the **report**, and the pull does not prove where it landed. Not escalated;
  re-check next week with a page-level query.

**Closed this week**
- **MIGRATE-1** (3w) — mechanism verified correct end to end (301s, canonicals, 206/206
  internal links). The click dip is handover cost, not a defect. No further watching needed.
- **SYNC-1** — resolved; working copy is clean.

**Carry-over**

| ID | Item | Weeks | Owner | Status |
|---|---|---|---|---|
| AUTH-1 | Backlink / authority program | **9** 🔴 | Omer | blocked — decide or close |
| KAB-1721 | Track C — update history on flagship VMS pages | **8** 🔴 | Claude | reframed 09-08 |
| **CAD-1** | **Re-point CAD internal links** | **3** 🔴 | **Omer** | **done — PR #18 awaiting merge, 14 days** |
| AUTH-2 | `911 dispatch software…` absent from AI answers | 3 🔴 | Omer | blocked — premise now doubtful |
| GEO-2 | Split cited into named vs source-set | 3 🔴 | Claude | open |
| GEO-3 | Quoted-literal detector in `query_intent` | 3 🔴 | Claude | open |
| GEO-4 | C5 definition — does the AI answer flip? | 3 🔴 | Claude | watching — blocked on prod |
| SCORER-1 | — | 2 | Claude | open |
| TOOL-1 | — | 2 | Claude | open |
| ~~MIGRATE-1~~ | ~~Unslashed canonical migration~~ | — | — | **closed 2026-09-22** |

**CAD-1 changes owner.** It has been logged three weeks as an unexecuted Claude task. It is
not unexecuted — it was built on 09-08 and has been waiting on a merge ever since. The
ledger row said both "Shipped v2.377" and "still unexecuted"; the PR settles it.
