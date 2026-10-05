# KabatOne Weekly SEO + GEO — 2026-10-05

**Focus:** Search is flat and healthy, and both fixes shipped on 09-28 are live. The 07:30 GEO run died on
**Anthropic API credit**. Omer topped up the key, and the re-run is complete: **20/25 (80%)**.
*"What is a C5 command center?"* is **cited for the first time ever**, after 7 straight misses since July, 7 days
after the corrected definition went live. It's the signal GEO-4 was waiting for, and it still needs the 10-12 run
to confirm it, with GEO-2 split first.

GSC 28d `2026-09-06 → 10-03` vs `08-30 → 09-26` (7-day shift, 21 days overlap: small deltas are noise) ·
GA4 28d vs prior 28d · GEO: 07:30 run aborted on credit; **complete re-run 2026-10-05 after top-up** · previous report `weekly-report-2026-09-28.md`

---

## 1. Traffic

| Channel | Sessions | Prior | Δ | Users | S/U | Bounce | Read |
|---|---|---|---|---|---|---|---|
| Direct | 1,645 | 1,982 | −17% | 1,499 | 1.10 | 78.1% | ⚠️ bot signature: excluded |
| **Organic Search** | **949** | 990 | −4% | 676 | 1.40 | 50.1% | flat; engagement held (49.4% last week) |
| Referral | 91 | 89 | +2% | 49 | 1.86 | 51.6% | flat |
| Organic Social | 68 | 18 | +278% | 50 | 1.36 | 54.4% | small base; LinkedIn. Likely careers. **Not verified** |
| AI Assistant | 47 | 50 | −6% | 32 | 1.47 | 57.4% | small base: see series |
| Unassigned / Cross-network | 47 | 8 | — | 46 | 1.0 | 92–100% | ⚠️ bot signature |

**There is no tracking break.** GA4's daily series 09-14 → 10-04 runs 50–174 sessions a day with no step change.
The Direct decline is the bot channel shrinking, again.

**AI Assistant by engine:** ChatGPT 26 (58%) · Gemini 12 (27%) · Perplexity 4 · Copilot 2 · Claude 1.
**13-week series:** 17 · 14 · 14 · 10 · 16 · 10 · 10 · 14 · 14 · 15 · 14 · **4** · *(W41 in progress)*.
W40 (09-28 → 10-04) is the weakest week in the series. Daily GA4 shows about 5 sessions, against 10–17 a week
since July. That's one week on a base of single digits, so it's a **watch item, not a finding** (G9).
I checked one explanation: the homepage motion launch (v2.407–2.410, 09-28/29) touched only the homepage,
and AI referrals land on resource pages. So it's an unlikely cause, but not ruled out. It gets a verdict
only if W41 is also below 8.

## 2. Search

| Metric | Now | Prior | Δ |
|---|---|---|---|
| Clicks | 573 | 560 | +2.3% |
| Impressions | 109,954 | 115,929 | −5.2% |
| CTR | 0.52% | 0.48% | +8.3% |
| Avg position | **11.6** | 12.6 | improved |

This is the same **query-reallocation shape** as last week: impressions down, while clicks, CTR and position
all improved (G1). No escalation.

**Clusters:** Video/VMS 26c / 6,689i (0.39%) · C5 11c / 3,175i · **CAD 11c / 1,366i (0.81%)** ·
AI/Analytics 7c / 1,087i · Brand 93c / 185i.

### The three live experiments

| Experiment | Shipped | Baseline | This pull | Read |
|---|---|---|---|---|
| **CAD-1:** internal links → `best-cad-dispatch-software` (PR #18) | 09-22 | 12c / 1,521i / 0.79% (ex-bot) | **11c / 1,366i / 0.81%** | **First read: flat.** The page: 59 → 56 clicks, impr 19.6k → 17.7k, **pos 9.1 → 8.8**. That's reallocation again. VID-1's equivalent needed 3 weeks. **Verdict 10-12**, as contracted |
| **VMS:** intent collision fix (PR #23) | 09-28 | `vms` p8.5 / 1,840i / 0.27% · `vms software` p14.6 / 0.64% | `vms` **p8.1 / 3,128i / 0.26%** · `vms software` p14.7 / **0.81%** | Only ~5 post-fix days are in the window. `vms` impressions rose 70% with CTR flat. The ES explainer went 3,439 → 5,322 impr. **Too early.** The bare-vs-qualified CTR gap widened to **3×** (SCORER-2) |
| **GEO-4:** C5 definition corrected (PR #21) | 09-28 | N on every run since 07-07 | **Y**, in an unsaved partial run | See §3 |

Re-verified live today: the ES C5 page shows "Contacto Ciudadano" 28×. `what-is-video-management-software`
has 0× "Compare top VMS systems". `/vs/avigilon|milestone|genetec` each link `best-vms-software` 1× and the explainer 0×.
Both fixes are holding.

### Opportunities (score-ranked, intent-labelled)

| # | Query | Pos | Impr | Qualified potential | Intent | Read |
|---|---|---|---|---|---|---|
| 1 | vms | 8.1 | 3,128 | 117 | buyer (scorer) **⚠️ disputed** | **Hands off.** PR #23 is under measurement, and five snippet passes since June didn't move CTR. The scorer's "buyer" label is SCORER-2 |
| 2 | cctv video analytics | 5.2 | 476 | 25 | buyer | zero-click block (AIO) |
| 3 | ai-powered video analytics | 5.5 | 380 | 22 | buyer | 0 clicks; **improved 7.9 → 5.5, still 0** |
| 4 | cctv ai analytics | 3.5 | 303 | 31 | buyer | zero-click block |
| 5 | cctv analytics | 5.3 | 391 | 21 | buyer | zero-click block |
| 6 | c5 | 8.4 | 2,581 | **0** | navigational ⛔ | never a click play |
| 7 | que es c5 | 7.5 | 318 | 11 | informational | GEO value only. New in the pull: the C5 fix may be pulling in definitional queries |
| 9 | computer aided dispatch software | 11.4 | 269 | 5 | buyer | CAD-1, wait |

**Zero-click page 1:** 31 of 61 queries (was 28 of 54). **12 improved position and still got zero clicks.**
That's the video-analytics AI-Overview absorption signature again, so a snippet rewrite won't help. Unchanged diagnosis.

**Page movers ≥1.5:** `/resources/rtcc-software` 7.8 → 6.2 · `/resources/best-ai-video-analytics-software` 18.2 → 16.1
(3,720 impr). Neither is a money page.

## 3. GEO

**20 / 25 cited (80%)** · complete runs: 08-31 68% → 09-14 84% → 09-21 80% → 09-28 76% → **10-05 80%**.
The 07:30 scheduled run hit `400 — credit balance is too low` after 7 queries and correctly refused a partial
snapshot. After Omer topped up the key, a manual re-run completed all 25 (`SEO/geo/geo-history.csv`, 10-05 rows).

| Query | 09-28 | 10-05 | Cited instead |
|---|---|---|---|
| **What is a C5 command center?** | N | **Y** | none |
| analytic CCTV cameras for city surveillance | N | **Y** | Avigilon |
| best fire computer aided dispatch software | Y | **N** | CentralSquare, Hexagon, Mark43, Motorola |
| What is AI video analytics? | N | N | Avigilon, Motorola |
| AI VMS software for security operations | N | N | Avigilon, Genetec, Milestone, Motorola |
| mejor software de gestión de video para ciudades | N | N | Avigilon, Genetec, Milestone, Motorola |
| software de videomonitoramento para cidades | N | N | Avigilon, Genetec, Milestone, Motorola |

**C5 (GEO-4): first citation ever.** It was N on every complete run (07-07, 08-12, 08-28, 08-31, 09-14, 09-21,
09-28) and came back **Y in both runs today**, the aborted 07:30 one and the complete re-run. The ES query
*"¿Qué es un centro de mando y control C5?"* stayed Y. It is exactly what the diagnosis predicted: the page had been
publishing the wrong fifth C, and the definition went live 09-28. Still **not a verdict.** Both samples are from the same
day and the same instrument, and the instrument can't yet tell "named in the answer" from "our URL was retrieved"
(GEO-2). Confirm on 10-12 with GEO-2 shipped. N on 10-12 and 10-19 → refuted.

**The weak spot is unchanged:** 4 of the 5 uncited queries are video/VMS, all lost to the same four vendors. The fire-CAD
loss is one query on a sampled instrument, so it's watched, not escalated. PR #23 (VMS) has had ~7 days. Hold AUTH-1 spend.

**The outage is a recurrence.** The same key ran dry in July–August (the 08-24 brief: GEO stale since 07-28), and a
month of data was lost. The 08:07 orchestrator also failed today on credit (`kabatone-seo-weekly-error.log`).

**Instrument scope (G10):** Claude with web search. ChatGPT sends 58% of AI traffic and isn't measured.
Keep the % out of board decks.

## 4. Plan

### P0 — this week

**#1 — GEO-2: split `cited` into `named_in_answer` and `in_source_set`.** *Owner: Claude. Effort: ~1h.
Deadline: before the 10-12 run. 5 weeks open, 🔴.*
**Why it beats the runner-up:** C5 just flipped, and 10-12 is the verdict. If that answer recommends only Motorola but
retrieved our URL, it isn't a flip, and today's instrument scores both cases the same. Without the split, the verdict on the
program's most promising experiment is uninterpretable. The runner-up is PIPE-2, moving the jobs off OneDrive. It
matters, but it doesn't gate a decision this week.

**✅ DONE today: Anthropic key topped up** *(Omer)*, GEO re-run complete. **Auto-reload: confirm it's on** in
console.anthropic.com → Billing. Without it, this happens a third time. The key in use is `SEO-agent` (`…OAAA`).

**#2 — ✅ DONE: denylisted the orchestrator's #1 "quick win" as a rank-tracking bot.** Re-run under launchd's exact
environment, the orchestrator led with *"software for public safety: position 3.3, 1,353 impr, 0 clicks, ~149 clicks
available."* `verify_serp_polling()` (09-06 → 10-03): **1,369 impressions, 100% desktop, 0 mobile, 0 clicks**, US 1,164
plus a thin GB/NL/DE/IT/HK spread, Mexico 1. That's the documented polling fingerprint, the same one behind SCORER-1.
Added to `_SERP_POLLING` with the evidence inline, so both the Slack brief and the dashboard stop leading with it.
The genuine head term `public safety software` (446 impr, p8.7, 2 clicks) is untouched.

**#3 — ✅ DONE: `seo_diff.py` no longer reports a git failure as "0 ahead / 0 behind".** *(v2.411, this branch)*
This morning's diff printed **"0 / 0, not diverged."** The truth is **56 / 198, diverged.** A `git rev-list` on the
OneDrive checkout timed out after 60s, and `int('' or 0)` turned the failure into a clean bill of health. That's the exact
G12 failure the function was written to prevent. Failed counts are now `None` and render as **UNKNOWN**, and the timeout is
raised to 180s. **Verified by execution both ways:** the real run returns 56 / 198 / diverged, and a forced failure renders the
UNKNOWN warning.

### P1 — this month

1. **PIPE-2: point the scheduled jobs at `~/dev/k1-website`** *(Claude; needs Omer's OK to edit LaunchAgents).*
   The OneDrive checkout now costs us two things: the jobs can't commit there (`Resource deadlock avoided`), and
   git there is slow enough to time out (#3). The `~/dev` clone ran the same commands in seconds today.
2. **Retire `nextjs` as the working branch** *(Omer: decision).* It's 56 behind and 198 ahead of production, and nothing on it
   is a path to production anymore. Every SEO fix in September had to be rebuilt on a branch from `main` (SHIP-1/3).
   Decide whether to point staging at `main` and stop committing to `nextjs`. Until then, all SEO work branches
   from `main` (this report does).
3. **OPS-1: seo-mailer / audit watchdog** *(Omer: restore the deleted daily audit, or retire the watchdog).* `seo-scheduler-watchdog` still exits 1.
4. **SCORER-2: bare acronym head terms** *(Claude).* `vms` tops the opportunity table and will top today's Slack brief.
   The qualified-vs-bare CTR test is now 3× (0.81% vs 0.26%). Build the test into `query_intent` so both pipelines stop leading with it.

### P2 — backlog

- **AUTH-1 authority spend:** still hold on VMS until PR #23 has 2–3 full pulls (it has ~5 days). 11 weeks open, blocked on budget, by design.
- **GEO-3:** quoted-literal academic queries still score buyer (`"traffic management system" "11 ktco2e"` is in the zero-click table again).
- **PIPE-3:** the cloud Slack routine can't push its artifacts *(Omer: amend the routine prompt)*.

## 5. Operations

| Signal | Status |
|---|---|
| Striking distance (pos 5–15) | 89 |
| Production pushes since last report | 18 commits on `main` 09-28 → 09-29: PR #21, #23, #24, #25 (SEO), #27 (homepage motion) ✅ |
| Commits this week | 0. Nothing has shipped since 09-29 |
| Branches | **Diverged:** `nextjs` 56 ahead, `main` 198 ahead (production v2.410, staging v2.400). The diff script reported 0 / 0. Fixed (#3) |
| Local unpushed (OneDrive `nextjs`) | 2 (v2.401, v2.404). **Both already reached `main`** via PR #24 (`bbfc141`, `86437f1`), so nothing is stranded |
| GEO freshness | ✅ 10-05 complete (manual re-run after the 07:30 run aborted on credit) |
| Orchestrator (`seo-weekly`, 08:07) | ❌ failed on credit. **Re-run OK** (`--dry-run`, launchd env): `SEO/audits/traffic-2026-10-05.html` written. Its headline was a bot (P0 #2) |
| Headroom proxy | ⚠️ a re-run from an interactive shell inherits `ANTHROPIC_BASE_URL=localhost:8787`. The proxy compressed the agent's tool results, and the model then invented numbers (it said so itself). launchd doesn't set it, so scheduled runs are unaffected. **Run the agent with launchd's env, never from a shell** |
| Slack routine | last run 09-28; today's fires 08:02 EDT. **Expect it to lead with `vms` and report GEO stale**. Both are explained above |
| Scheduler watchdog | exit 1 (OPS-1) |
| Master plan age | 20 days ⚠️ |
| Canonical sweep | 0 issues ✅ |
| Redesign hold | respected; no redesign files in this commit |

## 6. Housekeeping

**Shipped since last report** (all verified live 10-05)
- PR #21: C5 fifth C corrected (`5a141c2`). ES page: 28× "Contacto Ciudadano", 0× wrong.
- PR #23: VMS intent collision fixed (v2.405). Buyer promise gone, `/vs/` pages link `best-vms-software`.
- PR #25: answer-first content for the top buyer pages (v2.406).
- v2.411 (this branch, unpushed): `seo_diff.py` silent-zero fix; `software for public safety` denylisted as polling; 10-05 GEO rows.

**Refuted / corrected**
- **Last week's P0 #4, "push `nextjs`", is withdrawn.** The two commits it was protecting are already on `main`.
  Pushing `nextjs` would only extend a line that no longer leads to production.
- **This morning's `seo_diff.py` shipping block was wrong** (0 / 0, not diverged). Corrected above, root cause fixed.
- **SHIP-3 closed.** The ledger still listed it as open after both halves shipped on 09-28. Moved to Closed.

**Carry-over**

| id | item | owner | weeks | status |
|---|---|---|---|---|
| OPS-2 | Anthropic key out of credit (**recurrence**) | Omer | 0 | topped up 10-05; **confirm auto-reload** |
| GEO-2 | Split cited flag | Claude | 5 | 🔴 P0 #1 |
| GEO-3 | Quoted-literal queries score buyer | Claude | 5 | 🔴 P2, low value |
| GEO-4 | C5 flip | Claude | 5 | **first Y ever (10-05)**; verdict 10-12 |
| AUTH-1 | Authority program | Omer | 11 | blocked by design |
| OPS-1 | seo-mailer / watchdog | Omer | 1 | decision needed |
| PIPE-2 | Jobs on OneDrive checkout | Claude | 1 | P1 #1 |
| PIPE-3 | Slack routine can't push | Omer | 1 | blocked |
| SCORER-2 | Bare acronym = buyer | Claude | 1 | P1 #4 |
| BRANCH-1 | Retire `nextjs` as working branch | Omer | 0 | new, P1 #2 |
