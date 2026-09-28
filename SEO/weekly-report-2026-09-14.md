# KabatOne Weekly SEO + GEO — 2026-09-14

**Focus:** The working copy is one commit behind `origin/nextjs`, so every scheduled
output this week — Monday's Slack brief included — was scored by a scorer that was fixed
six days ago and ranks a rank-tracking bot as the site's #1 opportunity. Sync it first;
nothing else the program produced this week can be trusted until that is done.

---

## 1. Traffic

Organic is genuinely up, and it is the only channel that is.

| Channel | Sessions | Prior | Δ | Users | Sess/user | Bounce | Read |
|---|---|---|---|---|---|---|---|
| Direct | 1,945 | 2,336 | −17% | 1,785 | 1.09 | 73.5% | ⚠️ bot signature |
| **Organic Search** | **1,008** | 847 | **+19%** | **718** | 1.40 | 53.6% | real growth |
| Referral | 97 | 95 | +2% | 52 | 1.87 | 52.6% | flat |
| AI Assistant | 50 | 55 | −9% | 36 | 1.39 | 54.0% | small base — **not** a decline (G9) |
| Unassigned | 37 | 7 | +429% | 37 | 1.00 | 100.0% | ⚠️ bot signature |

**AI referrers (who actually sends traffic):** ChatGPT 31 (60.8%), Gemini 15 (29.4%),
Perplexity 3 (5.9%), Copilot 2 (3.9%). ChatGPT dominates — and the GEO monitor does not
measure ChatGPT (see §3).

Direct's −17% and Unassigned's +429% both carry bot signatures (≈1.0 sessions/user, 73–100%
bounce). Neither is a business signal; do not narrate either.

## 2. Search

| Metric | Now | Prior | Δ |
|---|---|---|---|
| Clicks | 613 | 531 | **+15.4%** |
| Impressions | 121,698 | 106,355 | +14.4% |
| Avg CTR | 0.51% | 0.50% | +2.0% |
| Avg position | 13.6 | 13.3 | −2.3% |

### Opportunities — corrected scorer, intent-labelled

The table below is from `origin/nextjs`'s scorer. The one the working copy produced this
morning is wrong; see §5.

| # | Score | Query | Pos | Impr | Clicks | Intent |
|---|---|---|---|---|---|---|
| 1 | 56.4 | `vms` | 9.4 | 730 | 1 | buyer |
| 2 | 44.5 | `ai-powered video analytics` | 8.6 | 556 | 0 | buyer |
| 3 | 43.1 | `cctv video analytics` | 7.0 | 614 | 3 | buyer |
| 4 | 32.8 | `c5` | 8.0 | 4,173 | 3 | **navigational ⛔ excluded** — qualified potential 0 |
| 5 | 28.9 | `cctv analytics` | 6.5 | 515 | 2 | buyer |
| 6 | 27.6 | `video analytics cctv` | 6.9 | 247 | 1 | buyer |
| 7 | 23.2 | `vms software` | 13.5 | 1,107 | 5 | buyer |
| 8 | 21.5 | `best police cad systems` | 2.7 | 51 | 1 | buyer |

`c5` stays in the table with its reason attached so next week's reader does not rediscover
it as an opportunity. It is navigational — citizens looking for Mexico City's C5, not buyers.

**Removed this week by the corrected scorer** (`polling`, value 0.0 — all three are one
rank-tracking bot: desktop-only, zero Mexico, zero clicks at page-1 positions):
`best fire computer aided dispatch software`, `computer automated dispatch software`,
`peregrine.ai analytics reporting dashboards`.

### Clusters

| Cluster | Impr | Clicks | CTR |
|---|---|---|---|
| Video / VMS | 6,820 | 31 | 0.45% |
| C5 / Command Ctr | 4,467 | 13 | 0.29% |
| CAD / Dispatch | 4,415 | 11 | 0.25% |
| Brand | 170 | 88 | **51.76%** |

### Zero-click page-1

34 of 62 page-1 queries earned zero clicks (5,218 impressions); prior pull 35. **16 improved
position and still returned zero.** This is the standing structural finding — AI Overviews
absorbing the answer — not a snippet problem.

### Movers

**Up** — the video-analytics cluster moved hard, and it is the cluster we consolidated:
`ai video analytics` 41.1 → 28.9 (+12.2), `cctv video analytics` 12.4 → 7.0 (+5.4),
`cctv analytics` 11.0 → 6.5 (+4.5), `cctv ai analytics` 9.2 → 4.7 (+4.5).
VID-1 shipped to production on 08-31 (PR #17). Timing is consistent with that; the
consolidation is the most plausible cause, and nothing else in that window touched these pages.

**Down** — `911 cad systems` 10.3 → 16.6, `911 cad software` 10.4 → 15.7,
`911 dispatch software` 9.8 → 13.1, `police cad systems` 7.8 → 9.8.

### `/k-dispatch/` — genuine this time, but amber not red

`seo_diff.py` flagged the EN page 14.6 → 22.5. The two previous times this page was escalated
(WATCH-1, and v2.282 before it) the escalation was **withdrawn** as healthy query
reallocation. This instance does not match that signature:

| | 2026-09-01 | 2026-09-14 |
|---|---|---|
| EN `/k-dispatch/` | 9 clicks · 1,356 impr · pos 14.6 · **CTR 0.66%** | 5 clicks · 1,197 impr · pos 22.5 · **CTR 0.42%** |
| ES `/es/k-dispatch` | — | 7 clicks · 159 impr · pos 10.2 · **CTR 4.40%** |

Reallocation shows falling impressions with **rising** CTR. Here impressions fell only 12%
while CTR *also* fell — that is a real EN decline, not a query-mix change.

But the product total **rose 9 → 12 clicks**, because ES K-Dispatch emerged at 4.40% CTR —
10× the EN page's rate, consistent with the standing finding that LATAM converts far better
than US traffic. One pull. **Watching, not 🔴** — confirm on the next pull before acting.

*(Correction: an earlier pass of this analysis read pos 10.2 as the EN page improving. That
row is the ES page. The EN page declined.)*

## 3. GEO

**84.0% cited (21/25) on 2026-09-14** — run is complete, fresh today, zero superseded rows.

Like-for-like against 08-31 on the **identical 25-query set**: 68.0% → 84.0%, with **four
queries flipping N→Y and none regressing**:

- `best fire computer aided dispatch software` ← **v2.343's fire-dispatch section worked.**
  v2.343 set exactly this test: "whether it flips from absent to cited. Citation, not clicks."
  It flipped. Note the query is simultaneously worthless for clicks (it is the bot) and a
  valid GEO win — both are true and there is no contradiction.
- `911 dispatch software for emergency call centers` ← this is **AUTH-2**, logged as blocked
  on authority spend. It flipped without any authority being bought. Re-examine that item.
- `analytic CCTV cameras for city surveillance`
- `mejor software de gestión de video para ciudades`

Not comparable to the 83.3% recorded in the 12-query era — different, easier query set.

**Instrument scope (G10):** `track_geo.py` asks **Claude with web search**. It is not a
ChatGPT measurement, and ChatGPT is 60.8% of our actual AI referral traffic. It also scores
"appeared in a retrieved source URL" identically to "the answer recommended us" (GEO-2, open).
Treat 84% as directional. **Do not put it in a board deck as a bare percentage.**

## 4. Plan

### P0 — this week

**Sync the working copy to `origin/nextjs`.** One commit (`fc4db54`, v2.378).

This is #1 because until it is done, every number this program emits is wrong in a way that
is invisible to its reader. The v2.378 polling denylist exists in git and has since 09-08; the
OneDrive working copy never pulled it. Both scheduled jobs — `com.kabatone.seo-weekly` (Mon
08:07) and `com.kabatone.seo-geo` — run with `WorkingDirectory` set to that copy, so **this
morning's Slack brief was generated by the superseded scorer** and put a rank-tracking bot at
the top of the opportunity table. The same bot drove three of the four P0 actions in the
2026-08-04 brief.

It beats the runner-up (CAD-1) because CAD-1's own priority is computed from the table this
fix corrects — doing CAD-1 first means ranking it against numbers we know to be wrong. It
needs no approval, no external authority, and costs one command.

*Conflict note:* local is 3 ahead / 1 behind. A rebase touches `CHANGELOG.md`,
`SEO/carry-over.md`, `changelog.html` — all append-at-top files, resolvable in minutes. The
scorer files themselves (`seo_weekly_agent.py`, `seo_diff.py`, `gsc_pull_weekly.py`) **do not
conflict**.

### P1 — this month

1. **CAD-1** (2w, open) — re-point CAD cluster internal links to `best-cad-dispatch-software`.
   `what-is-cad-dispatch-software` holds 13 internal links against the winner's 9 and competes
   on the winner's buyer terms. Same mechanism as VID-1, which is the one consolidation with
   measured evidence that it works — and §2's movers are that evidence arriving.
2. **Re-examine AUTH-2** — it flipped to cited without authority spend. The premise that it was
   blocked on backlinks may be wrong. Cheap to re-check, and it is currently parking budget.
3. **Production promotion** — `main` v2.376, `nextjs` v2.378, **DIVERGED** (36 staging-ahead,
   165 prod-ahead, 33 files changed on both sides). Per G12 and the branch-topology rule this
   is a **PR cut from `main` with changes re-applied — never a merge of `nextjs`**. Needs Omer.

### P2 — backlog

- **MIGRATE-1** (2w, watching) — slashed/unslashed twins still both ranking:
  `cctv-video-analytics` 81 clicks (unslashed) + 68 (slashed); `best-cad-dispatch-software`
  35 + 26. Read **clicks, not average position**, for another 2 weeks. Self-resolving.
- **GEO-2** (open) — split `cited` into `named_in_answer` vs `in_source_set`.
- **GEO-3** (open) — quoted-literal detector in `query_intent`.
- **GEO-4** (watching) — C5 definition fix; re-run after it reaches production.
- **AUTH-1** (8w, blocked, Omer) — authority program. Still parked until production catches up.

## 5. Operations

| Check | State |
|---|---|
| **Working copy vs `origin/nextjs`** | 🔴 **1 behind, 3 ahead** — missing v2.378 scorer fix |
| Scheduled jobs' `WorkingDirectory` | 🔴 both point at the stale copy |
| `main` vs `nextjs` | **DIVERGED** — v2.376 vs v2.378, 33 overlapping files, no fast-forward |
| Local unpushed | 3 commits (v2.348–v2.350, 2026-09-02) |
| Prod pushes this week | 0 — last was PR #17, 2026-08-31 |
| GEO freshness | ✅ ran today, complete, 25/25 |
| Striking distance | 98 queries |
| Master plan age | 12 days |
| Canonical sweep | ✅ 0 issues |

**Guardrail note:** the OneDrive outage that caused this (12,602 of 13,304 files dehydrated,
flagged in fc4db54's own commit body as "will not take effect on Monday until that working
copy is restored") has resolved — the files read fine now. What did not happen is the pull.
The commit body predicted this exact failure six days ago.

## 6. Housekeeping

**Shipped since last report**
- v2.378 — polling denylist, GEO rate de-duplication, `gsc_pull_weekly.py` tracked (on
  `origin/nextjs`, **not** in the working copy).
- `SEO/weekly-report-2026-09-08.md` exists on `origin/nextjs`. An earlier pass of this analysis
  reported "no weekly report since 09-01" — that was an artifact of reading the stale working
  copy, not a missed week.

**Refuted with evidence**
- *"`/k-dispatch/` is a money-page decline"* → partially upheld. The EN page genuinely declined
  (CTR fell, unlike the two prior withdrawn escalations), but the product total **rose** 9 → 12
  clicks on ES strength. Amber, not red.
- *"GEO fell from 83.3% to 68%"* → already settled in v2.378; 68.0% was the honest 25-query
  rate, 83.3% the easier 12-query set. This week's 84.0% is a real like-for-like gain on the 25.
- *"`best fire computer aided dispatch software` is the #1 opportunity"* (this morning's brief)
  → it is a rank-tracking bot. Qualified potential 0.

**Carry-over**

| id | weeks | status | owner |
|---|---|---|---|
| AUTH-1 | 8 | 🔴 blocked | Omer |
| KAB-1721-CLOSED | 7 | 🔴 open | Claude |
| CAD-1 | 2 | open | Claude |
| MIGRATE-1 | 2 | watching | Claude |
| GEO-2 / GEO-3 | 2 | open | Claude |
| GEO-4 | 2 | watching | Claude |
| AUTH-2 | 2 | blocked → **re-examine** | Omer |
| **SYNC-1** (new) | 0 | open | Claude |
