# KabatOne Weekly SEO + GEO — Full Analysis & Plan — 2026-08-31

**Window:** 28d ending 2026-08-29 vs **prior pull 2026-08-20** (11-day separation).
**Sources:** GSC `SEO/gsc-fresh-2026-08-31.json` · direct GSC page/query queries · GA4 530090453 · `geo-history.csv`.
**Evidence base:** `scripts/seo_diff.py` + four direct Search Console queries for the CAD cluster.
**Supersedes:** the 08:20 automated report, which compared pulls **3 days apart** — too short to
separate signal from noise in a 28-day rolling window. Where the two disagree, this file says so.

---

## 1. Headline — clicks up 24% on flat rank. The gain is CTR, not position.

| Metric | Now | 08-20 | Δ |
|---|---|---|---|
| **Clicks** | **540** | 437 | **+23.6%** |
| Impressions | 109,746 | 102,663 | +6.9% |
| **Avg CTR** | **0.49%** | 0.44% | **+11%** |
| Avg position | 13.3 | 13.3 | flat |

Average position did not move. Clicks rose 24%. The site is converting the same rank better —
consistent with the video-analytics consolidation removing self-competition rather than lifting
rankings, and with GA4 organic **+11% (940 sessions, 677 users, 51.9% bounce)**.

Organic Search is the only channel that is both large and clean. **Direct (2,269 sessions, 1.11
sessions/user, 71% bounce) and Unassigned (1.02 s/u, 98.1% bounce) carry the bot signature and
must not be reported as growth** — Direct alone is 63% of all sessions.

---

## 2. Correction — the `/k-dispatch/` escalation is withdrawn

This morning's report escalated `/k-dispatch/` to priority #2: *"declined in two consecutive
pulls … the decline is real in every metric."* **That is wrong, and I am withdrawing it.**

The top-20 page cap in the stored pulls hides the click column's real behaviour. Queried
directly against GSC, 28d vs prior 28d:

| | Impressions | **Clicks** | CTR | Avg pos |
|---|---|---|---|---|
| Prior 28d | 2,332 | **10** | 0.43% | 9.6 |
| Recent 28d | 1,414 | **10** | **0.71%** | 14.4 |

**Clicks are flat at 10 and CTR rose 65%.** What the page lost was mid-tail impressions it held
at positions it never converted from:

| Query | Prior pos | Now |
|---|---|---|
| `emergency dispatch software` | 21.8 | 45.1 |
| `dispatch automation software` | 34.2 | 60.0 |
| `fire cloud dispatch` | 27.2 | 47.4 |

…while it moved **onto position 1–4** for `911 cad` (5.2 → 1.0), `emergency cad` (7.1 → 1.5),
`911 dispatcher software` (35.8 → 1.0). Average position fell because the **query mix changed**,
not because the page weakened. Losses sit at rank 45–84; gains sit at rank 1–4 on small volume.

**This was already settled.** v2.282 (July): *"K-Dispatch EN regression diagnosed as healthy
query reallocation — no fix."* The fresh data agrees with the July call. Re-escalating it cost a
week of queue space.

**The cluster is growing.** EN CAD pages: **68 → 82 clicks (+21%)** on 20% fewer impressions.

*A second hypothesis was tested and rejected:* that the drop was a slash-migration artifact. The
unslashed `/k-dispatch` has only **10 impressions**, so it explains nothing here.

---

## 3. 🔴 CAD-1 — the real cluster problem, and it is the mechanism we already know how to fix

`/resources/what-is-cad-dispatch-software` **surfaced in this window: 0 → 682 impressions**,
average position 29.7. It now competes with the cluster's winner on the winner's own buyer terms:

| Query | `best-cad-dispatch-software` | `what-is-cad-dispatch-software` |
|---|---|---|
| `911 cad software` | **6.3** | 59.7 |
| `911 cad system` | — | 64.2 |
| `911 cad systems` | — | 63.0 |
| `911 computer aided dispatch system` | — | 57.0 |

Internal links, counted in `src/` excluding redesign directories:

| Page | Rank | **Internal links** |
|---|---|---|
| `best-cad-dispatch-software` | **6.4–10.3** | **9** |
| `what-is-cad-dispatch-software` | **29.7 (57–67 on buyer terms)** | **13** |
| `911-call-center-software-guide` | 13.8 | 2 |
| `/k-dispatch` | 14.4 | 19 |

**13 internal links point at the page ranking ~60; 9 point at the page ranking ~6.5.** That is
precisely the misdirected-link mechanism the video-analytics consolidation corrected — and that
cluster is the only one whose positions are improving. The playbook exists and is proven here.

---

## 4. Zero-click page-1 block — unchanged diagnosis, more evidence

| | 08-20 | **08-31** |
|---|---|---|
| Page-1 queries | 49 | **62** |
| Zero-click | 41 | **36** |
| Wasted impressions | 1,868 | **2,186** |
| Improved position, still zero | — | **16** |

**16 queries improved their position this pull and still returned zero clicks.** That is the AI
Overview absorption pattern diagnosed 2026-07-20: on these queries rank is not the constraint —
the click is consumed above the result. **Do not commission snippet rewrites** (ruled out July,
re-confirmed twice since).

Worst single line, fifth week: `best fire computer aided dispatch software` — **749 impressions,
position 6.4, 0 clicks**, buyer intent, highest score on the site (134.8).

---

## 5. Opportunity queue — intent-labelled (G8: no bare potential-click figures)

| # | Query | Pos | Impr | **Qualified** | Intent |
|---|---|---|---|---|---|
| 1 | best fire computer aided dispatch software | 6.4 | 749 | **44** | buyer |
| 2 | vms software | 11.3 | 1,502 | **30** | buyer |
| — | `c5` | 8.5 | 5,341 | **0** | **navigational ⛔** |
| 3 | cctv video analytics | 12.6 | 573 | **13** | buyer |
| 4 | 911 dispatch software | 9.6 | 148 | **5** | buyer |
| 5 | general vms | 4.1 | 136 | **7** | buyer |

**`c5` excluded, fifth consecutive week** — qualified potential 0 by construction since v2.336.
The raw figure stays visible for audit and must never be headlined.

---

## 6. GEO — and the duplicate-run bug, now fixed

| Run | Cited | Rate |
|---|---|---|
| 2026-07-07 | 5/12 | 41.7% |
| 2026-08-28 | 10/12 | **83.3%** |
| 2026-08-31 | 10/12 | **83.3%** |

Rate stable across two complete runs. Partial runs (08-04, 08-12) excluded.

**Fixed this session (v2.340):** the monitor ran **twice every Monday** — the dedicated 07:30
LaunchAgent and the weekly agent's own 08:07 step both invoked `track_geo.py`, producing 24 rows
for a 12-query set. Double paid spend, and a citation rate computed from doubled rows. The agent
now skips when the day's rows already exist, which removes the duplicate **without** removing the
fallback if the 07:30 job fails. Both runs had agreed 10/12, so 83.3% was accidentally correct.

**Instrument scope (G10):** `track_geo.py` asks **Claude with web search**, and scores "our URL
was in the retrieved sources" identically to "the answer recommended us." It is **not** a ChatGPT
measurement — and GA4 shows ChatGPT is our largest AI referrer. Never put 83% in a board deck bare.

---

## 7. Technical — one systemic finding

The **unslashed canonical migration is live and progressing**: unslashed rows in the top-20 pages
went **0 → 2 → 4** across the 08-20 / 08-28 / 08-31 pulls. `best-cad-dispatch-software` and
`cctv-video-analytics` currently rank in **both** URL forms on the same queries.

Verified live: slashed URLs 301 in **one hop** to unslashed; canonicals unslashed; 200s clean.
**The configuration is correct — this is Google mid-migration, and it will resolve on its own.**
Its consequence matters for reading the data: **any page-level "decline" measured from the
slashed row alone is suspect until its unslashed twin is checked.** That trap produced one wrong
escalation this morning and nearly produced a second in this analysis.

---

## 8. Operations & health

| Item | Status |
|---|---|
| Production | ✅ v2.376 (PR #17, 08-31) |
| **Branch topology** | ⚠️ **DIVERGED** — `main` +165 / `nextjs` +19, 30 files both sides. Ship via PR from `main`. Never merge `nextjs` → `main` |
| Local unpushed | **5 commits** on `nextjs` (incl. v2.340) |
| GEO scheduler | ✅ **fixed this session** — one owner, fallback retained |
| Daily audit | ✅ CLEAN, 230 pages |
| Redesign hold | ✅ `hero-lab*` unstaged throughout |

---

## 9. Blockers

| # | Blocker | Owner | Age |
|---|---|---|---|
| AUTH-1 | Backlink / authority programme — needs budget + human outreach | **Omer** | **7 weeks** 🔴 |

Seven weeks unmoved. Production now carries the consolidation, so authority spend can finally be
measured against a current site. Do not point it at `c5`.

---

## 10. Priority queue

**#1 — CAD-1: re-point the CAD cluster's internal links.** Move the 13 links feeding
`what-is-cad-dispatch-software` onto `best-cad-dispatch-software` (rank ~6.5, 67 clicks and
rising), keeping the explainer as a definitional/GEO asset rather than a competing buyer page.
Fully in my control, no approval needed, and it is the **only** playbook on this site with
measured evidence that it works — the video-analytics cluster is the one thing whose positions
are improving. It beats the runner-up because the runner-up is a research task with no
established mechanism, while this is a known fix applied to a newly-confirmed instance of a
problem we have already solved once.

**#2 — `best fire computer aided dispatch software`** (749 impr, pos 6.4, 0 clicks, 5 weeks).
Highest-scoring query on the site. **Not** a snippet problem — AI Overview absorption. Worth one
focused investigation of what the Overview actually cites for this query before any page work.

**#3 — AUTH-1** — blocked on Omer, 7 weeks.

**Watch (not action):** the unslashed migration. Expect noisy page-level positions for another
2–4 weeks; read clicks, not average position, until both URL forms consolidate.

**Closed:** GEOSCHED-2 (duplicate scheduler, v2.340) · WATCH-1 (`/k-dispatch/` — withdrawn, §2).

---

## 11. Verification gate

- [x] Superlatives checked against full history — none stated from recall
- [x] Every channel movement checked against **users**, not sessions (G9); AI Assistant −11% is 50 sessions / 37 users, not a decline
- [x] Code behaviour proved by **running** it (G6) — the GEO guard prints its skip
- [x] Recommendation grepped against CHANGELOG + commit bodies (G1) — this caught the `/k-dispatch/` re-escalation
- [x] "Broken" findings checked live and against staging (G2)
- [x] Every opportunity intent-labelled; no bare potential-click figure (G8)
- [x] `git fetch` re-run before choosing v2.340 (G7)
- [x] Two of my own hypotheses tested and rejected before publishing (slash-artifact; `/k-dispatch/` decline)
