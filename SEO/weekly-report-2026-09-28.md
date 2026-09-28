# KabatOne Weekly SEO + GEO — 2026-09-28

**Focus:** Search is flat and healthy; **the measurement system is not.** Three of the four
automated SEO pipelines are broken or leaking, and the one that still posts to Slack is reading
stale data. Meanwhile production is still publishing the **wrong definition of C5** on the Spanish
C5 page, which just grew +32% in clicks. The fix is PR #21: open 5 days, CI green, one merge.

GSC 28d windows 08-30→09-26 vs 08-24→09-20 (**6-day gap**: small deltas are noise) · GA4 28d vs prior
28d · GEO run 2026-09-28 · previous report `weekly-report-2026-09-22.md`

---

## 1. Traffic

| Channel | Sessions | Prior | Δ | Users | S/U | Bounce | Read |
|---|---|---|---|---|---|---|---|
| Direct | 1,711 | 2,278 | −25% | 1,541 | 1.11 | 75.4% | ⚠️ bot signature: excluded |
| **Organic Search** | **921** | 943 | −2% | 656 | 1.40 | 49.4% | flat, engagement held (49.2% last week) |
| Referral | 91 | 93 | −2% | 45 | 2.02 | 58.2% | flat |
| Organic Social | 56 | 21 | +167% | 45 | 1.24 | 55.4% | small base; LinkedIn 31 sessions. Likely careers launch (PR #19, 09-22); **not verified** |
| AI Assistant | 53 | 50 | +6% | 39 | 1.36 | 56.6% | small base: read the series |
| Unassigned / Cross-network | 34 | 7 | — | 34 | 1.0 | 100% | ⚠️ bot signature |

**Total sessions fell 15%, and all of it is Direct.** Direct has the bot shape (1.1 sessions per
user, 75% bounce). Losing bot sessions isn't a real decline. The Slack brief led with this number. It shouldn't have (§6).

**AI Assistant by engine:** ChatGPT 30 (58%) · Gemini 13 (25%) · Perplexity 5 · Copilot 3 · Claude 1.
**13-week series:** 5 · 12 · 17 · 14 · 14 · 10 · 16 · 10 · 10 · 14 · 14 · 15 · *(W39 in progress,
excluded)*. The last 3 complete weeks average 14.3, up from 12.0 in the 3 before. It's rising slowly on a small base.

## 2. Search

| Metric | Now | Prior | Δ |
|---|---|---|---|
| Clicks | 560 | 566 | −1.1% |
| Impressions | 115,929 | 121,994 | −5.0% |
| CTR | 0.48% | 0.46% | +4.3% |
| Avg position | **12.6** | 13.4 | improved |

Impressions fell while clicks held, CTR rose and position improved. That is the
**query-reallocation pattern** (G1), not decay. No escalation.

**Pages worth watching**

| Page | 09-22 pull | 09-28 pull | Read |
|---|---|---|---|
| `/es/resources/how-c5-command-centers-work` | 31c / 6,781i / p7.5 | **41c / 7,381i / p7.5** | +32% clicks, and **production still says "Calidad"** (§4 P0) |
| `/resources/best-cad-dispatch-software` | 47c / 19,249i / p9.4 | 59c / 19,622i / p9.1 | +12. It's too early to credit PR #18: data runs to 09-26, and the merge was 09-22. Some of it is the slashed-URL handover finishing |
| `/resources/cctv-video-analytics` | 88c / 13,813i / p15.0 | 88c / 12,659i / p14.7 | flat |
| `/es/k-dispatch` | p13.2 | **p9.5** | only page mover ≥1.5 (money page, 130 impr) |

**CAD measurement contract (PR #18):** the baseline is still 12 clicks / 1,521 impr / 0.79% (ex-bot, 09-22).
First fair read is the **10-05 pull**, and the verdict comes at **10-12**. Nothing to report yet, so no claim.

### Opportunities (score-ranked, intent-labelled)

| # | Query | Pos | Impr | Qualified potential | Intent | Read |
|---|---|---|---|---|---|---|
| 1 | vms | 8.5 | 1,840 | 68 | buyer (scorer) | **Snippet work refuted, see below** |
| 2 | cctv video analytics | 5.0 | 517 | 27 | buyer | zero-click block (AIO) |
| 3 | ai-powered video analytics | 7.9 | 517 | 20 | buyer | zero-click, **improved position, still 0** |
| 4 | cctv ai analytics | 3.5 | 298 | 30 | buyer | zero-click block |
| 5 | c5 | 8.2 | 2,848 | **0** | navigational ⛔ | never a click play |
| 8 | computer aided dispatch software | 12.8 | 320 | 7 | buyer | CAD contract, wait |
| 10 | public safety software | 9.9 | 505 | 18 | buyer | — |

**`vms` is not a snippet opportunity. It has been tried five times.** It has sat at the top of the
table since June. Since then it has received a title rewrite (v2.239), an H1 "VMS:" prefix, two
metadata passes and a definition callout. Position improved 10.9 → 8.5; CTR never moved (0.27%).
Verified this week:
- It lands on **`/es/resources/what-is-video-management-software`**, an informational page, at p8.0,
  with 1,799 impressions and 5 clicks.
- The demand is real LATAM demand, not polling: 43% mobile; Argentina 428, Mexico 327, Colombia 230, Peru 198.
- Its qualified sibling `vms software` converts **0.64% at a *worse* p14.6**. The bare acronym is
  converting at less than half the rate at a better rank. That is the `c5` shape, weaker: a mixed-intent
  head term, not a snippet problem.

**Withdrawn as a P0. No more snippet edits on VMS.** The VMS cluster is the weak spot on **both**
instruments (§3). But the cause isn't settled, because **the VMS fix was never shipped.** v2.348
(09-01) diagnosed intent collision: the explainer's description promised "Compare top VMS systems,"
and the three `/vs/` competitor pages linked the explainer instead of `best-vms-software`. That's the
same mechanism PR #17 and PR #18 fixed, and those are the only plays in the program with measured wins.
**Verified live today:** production still says "Compare top VMS systems" (6× EN, 6× ES), and
`/vs/avigilon`, `/vs/milestone` and `/vs/genetec` each link the explainer, with 0 links to `best-vms-software`.
Staging has all of it fixed. KAB-1721's 09-08 "authority" reframe was made with that fix sitting unshipped.
Ship it and measure before spending money on VMS.
*(Credit: a concurrent session's ledger row, SHIP-1, surfaced this. I verified it live independently.)*

**Zero-click page-1:** 28 of 54 queries (was 36). **14 improved position and still got zero clicks.**
That rules out visibility. It's the AI-Overview absorption signature on the video-analytics block, so a
snippet rewrite won't help.

## 3. GEO

**19 / 25 cited (76%)** · complete runs: 08-31 68% → 09-14 84% → 09-21 80% → 09-28 76%.
Each step is **one query** (4 points), which is within noise for a sampled LLM instrument. Two single-query
losses in a row don't make a trend yet. But both losses are video/VMS:

| Query | 09-14 | 09-21 | 09-28 | Cited instead |
|---|---|---|---|---|
| mejor software de gestión de video para ciudades | Y | N | N | Avigilon, Genetec, Milestone, Motorola |
| analytic CCTV cameras for city surveillance | Y | Y | N | Avigilon, Genetec, Milestone, Motorola |

**Uncited now (6):** *What is a C5 command center?* · *What is AI video analytics?* · *AI VMS software
for security operations* · the two above · *software de videomonitoramento para cidades*.
**Five of six are video/VMS.** We have pages for all of them, so this isn't a content gap. It looks like
authority. But the cheaper VMS fix (v2.348, §2) has never been live, so authority is unproven until it ships.

- **C5 (GEO-4) cannot flip:** the corrected definition is **not on production** (verified live:
  kabatone.com EN 10× "Calidad", ES 36×, 0× "Contacto Ciudadano"; staging is correct). The
  "watching" status was measuring a fix that was never live.
- **AUTH-2 (`911 dispatch software for emergency call centers`): cited 3 runs straight**
  (09-14, 09-21, 09-28) with zero authority spend. The "blocked on backlinks" premise is refuted. Closed.
- **Instrument scope (G10):** Claude with web search, and "in retrieved sources" scores the same as
  "named in the answer." ChatGPT sends 58% of AI traffic and isn't measured. Keep the % out of board decks.

## 4. Plan

### P0 — this week

**#1 — Merge PR #21: put the correct C5 definition on production.** *Owner: Omer to approve → Claude
merges + verifies live. Effort: one command. Open 5 days; fix on staging 27 days (v2.347, 09-01).*
PR #21 is `MERGEABLE` / `CLEAN`, Vercel ✅, branched from current `main` (respects the divergence rule),
10 files, all C5 content, no redesign files.
**Why it beats the runner-up:** production is telling Mexican government buyers that the fifth C
of their own command-center model is "Calidad". It says so on the Spanish C5 page, which is our
fastest-growing page this week (+32% clicks), on 5 pages plus `llms.txt`. That's a credibility problem before it's an SEO
one. It also blocks GEO-4: that item can't be measured until the fix ships. The runner-up (pipeline repair)
is mostly done already (#2), and what's left needs your decision too.

**#2 — ✅ DONE today: the weekly orchestrator's GSC pull.** `seo_weekly_agent.py` called bare
`python3.11`. launchd's PATH (`/usr/local/bin:/usr/bin:/bin`) doesn't contain it, so the call failed
**on every logged Monday run since 2026-06-15, 14 in a row**. Nobody noticed because the job exits 0
and the keyword/GEO sub-steps still run. Switched both call sites to `sys.executable`. **Verified by
execution under launchd's exact environment:** 3,817 rows returned; the old call reproduces the
failure. (v2.404)

**#3 — Get v2.348 (VMS intent collision) onto a PR from `main`.** *Owner: Claude, then Omer to merge.
Effort: ~1h (re-apply on a branch cut from `main`; the branches have diverged).* It's the same pattern as
PR #21: the fix is finished and sitting on staging. **Check with the concurrent session first.** Its ledger
row says "not yet on a PR", and two sessions building the same PR is the G7 failure.

**#4 — Push `nextjs`.** *Owner: Omer to approve.* Three things sit only on this Mac: v2.401 (Opus 5.5 move),
v2.404 (today), and the **09-21 + 09-28 GEO and keyword snapshots**. The scheduled jobs' own commits fail
on this OneDrive checkout (`fatal: could not open '.git/COMMIT_EDITMSG': Resource deadlock avoided`).
Until they're pushed, the Slack brief keeps reporting GEO as stale.

### P1 — this month

1. **PIPE-3: the Slack routine can't save its work** *(Omer).* It commits to branch `run`,
   then the auto-mode classifier blocks the push because the routine prompt never authorizes one.
   The 09-21 and 09-28 brief artifacts exist nowhere in git. Fix: add an explicit
   `git push origin run` to STEP 6 of `trig_012DxBrEmwRQj76RaMenDyZw`, or drop the commit step.
   It also installs its Python deps at runtime every week, which is fragile. Add a setup script.
2. **OPS-1: the daily SEO audit is gone** *(Omer to decide).* The last audit was 2026-09-01. The routine no
   longer exists in claude.ai routines or local scheduled tasks. The watchdog has been alerting
   (and exiting 1) every 15 min for **27 days**. Restore the routine or retire the watchdog; a
   permanently-red alarm trains everyone to ignore it.
3. **PIPE-2: move the scheduled jobs off OneDrive** *(Claude).* Point `com.kabatone.seo-weekly` /
   `seo-geo` `WorkingDirectory` at the `~/dev/k1-website` clone, so their commits stop dead-locking.
4. **Hold AUTH-1 spend on VMS until v2.348 has been live 2–3 pulls** *(Omer).* If VMS is still
   uncited and still 0.27% CTR after that, it's authority, and that's where the budget goes. It shouldn't
   go to `c5` (navigational) or to CAD (AUTH-2 flipped on its own).

### P2 — backlog

- **SCORER-2**: flag bare acronym head terms (`vms`) as mixed-intent, the way `c5` is. That stops the
  Slack brief from making it P0 again. Needs a qualified-vs-bare CTR test, not a keyword guess.
- **GEO-2** (4w 🔴): split `cited` into `named_in_answer` vs `in_source_set`.
- **GEO-3** (4w 🔴): quoted-literal detector (`"traffic management system" "11 ktco2e"` still scores buyer).
- **OPS-1 (mailer half)**: `kabatone-seo-mailer.py:111` raises `IndexError` (empty `PRIORITY_QUEUE`), so it exits 1 daily.
- **AUTH-1** (10w 🔴, blocked, Omer): fund it against VMS, or close it.

## 5. Operations & health

| Signal | Value | |
|---|---|---|
| Local weekly orchestrator (`seo-weekly`) | GSC pull failed 14/14 runs since 06-15 | ✅ **fixed today** (v2.404) |
| Cloud Slack brief (`trig_012…`) | ran 09-28, posted; **artifacts unpushed** 09-21 & 09-28 | 🔴 PIPE-3 |
| Daily audit | last 2026-09-01; routine deleted | 🔴 OPS-1 |
| GEO monitor (`seo-geo`) | ran 09-28 ✅; commits fail on OneDrive | ⚠️ PIPE-2 |
| SEO mailer | `IndexError`, exits 1 | ⚠️ OPS-1 |
| Striking distance (p5–15) | 87 | — |
| Production pushes this week | 4 (PR #18, #19, #20 merges + v2.399) | ✅ |
| Branches | `nextjs` +56 / `main` **+178**: **DIVERGED**, 42 files changed on both sides | ship via PRs from `main` only |
| Local unpushed commits | 1 → **2** after today | #3 |
| Open PRs | #21 C5 (5d), #22 homepage H1 (3d, not SEO-owned) | |
| Master plan age | 27 days (last updated 09-01) | ⚠️ over the 21-day flag |

## 6. Housekeeping

**Reconciliation with today's Slack brief** (routine run `cse_018VcpaD8RpHspE78wUfViW2`):

| Slack brief said | Verdict | Evidence |
|---|---|---|
| Lead story: Direct −24.9% | ❌ wrong headline | bot signature, 1.11 S/U, 75% bounce |
| P0: `vms` p8.5, +68 potential clicks | ❌ refuted | 5 prior snippet passes, CTR flat since June; mixed-intent head term (§2) |
| GEO monitor stale since 08-31 | ❌ wrong, but **the brief isn't at fault** | runs exist 09-14/21/28. The brief reads `origin/nextjs`, where local GEO commits never land (PIPE-2) |
| Staging 56 ahead of production | ⚠️ half the picture | `main` is also 178 ahead. Diverged, not "behind" (G12) |
| C5 fix not live | ✅ **correct, credit it** | verified live today. It's this week's P0 |
| Clicks 551 (+2%) | ✅ consistent | different window (08-31→09-27); both say flat |

**Correction to my own prior reports:** PLAN-2 (closed 09-22) rejected PR #7 partly because it
called `com.kabatone.seo-weekly` superseded, saying it "is loaded and produces the Monday brief." It
was loaded. It didn't produce the brief: its analysis step had failed every week since June 15, and the
Slack brief comes from the cloud routine. PR #7 was still rightly closed on its other two errors. But
that specific rebuttal was wrong, and it's corrected here.

**Refuted this week:** `vms` as a snippet opportunity (§2) · AUTH-2 "blocked on backlinks" (§3) ·
GEO-4 "watching" (it measured a fix that wasn't live) · my own draft's "VMS = authority" (the cheaper fix was never tested; §2).

**Carry-over**

| Item | Owner | Weeks | Status |
|---|---|---|---|
| AUTH-1 authority program | Omer | 10 🔴 | blocked; now pointed at VMS |
| GEO-2 cited-flag split | Claude | 4 🔴 | open, not moved |
| GEO-3 quoted-literal intent | Claude | 4 🔴 | open, not moved |
| GEO-4 C5 citation | Claude | 3 🔴 | **blocked on PR #21**, was never live |
| SHIP-3 stranded C5 (PR #21) + VMS (v2.348) fixes | Omer / Claude | 0 | P0 #1 and #3 |
| OPS-1 mailer crash + deleted daily audit | Claude / Omer | 0 | P1, decision needed |
| PIPE-2 / PIPE-3 | Claude / Omer | 0 | new |
| SCORER-2 | Claude | 0 | new |

**Closed this week:** PIPE-1 (v2.404) · AUTH-2 (refuted) · KAB-1721 + its duplicate row
(folded into AUTH-1, as reframed 09-08) · SYNC-1, CAD-1, MIGRATE-1, PLAN-2, GEOSCHED-3,
SCORER-1, TOOL-1 moved from Open to Closed (all already shipped/closed; they were filed in the wrong section).
