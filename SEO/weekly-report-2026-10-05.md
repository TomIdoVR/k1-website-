# KabatOne Weekly SEO + GEO — 2026-10-05

**Focus:** AI answer engines **read us but don't recommend us.** With "named in the answer" finally
separated from "our page was retrieved", Claude names KabatOne in **3 of 40** answers while retrieving
our pages in **34 of 40**. The 80% headline this program has reported since July was counting retrievals.
The cause: recommendations come from third-party "best of" lists, and we aren't on them. Where our own
pages dominate the sources (Mexico C5/911), K-Dispatch is recommended **#1**. Search is flat and healthy.
Per Omer's 10-05 direction, **GEO and CAD now lead the program.**

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
| **GEO-4:** C5 definition corrected (PR #21) | 09-28 | N on every run since 07-07 | Retrieved ×5, **not named; answer still says "Calidad"** | **Not a win.** See §3 correction |

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

### The new measure: named vs retrieved (Claude, 40 queries, 2026-10-05)

| Block | Queries | **Named in answer** | Named or retrieved |
|---|---|---|---|
| A. original set | 12 | **1** | 11 |
| B. zero-click block | 7 | **0** | 5 |
| C. ES / PT | 6 | **1** | 4 |
| **D. CAD buyer journey (new)** | 15 | **1** | 14 |
| **Total** | 40 | **3 (7.5%)** | 34 (85%) |

The three named: *public safety software for Mexico and Latin America* · *¿Qué es un centro de mando y control C5?*
· *software de despacho para centros C5 y 911 en México*. **All three are LATAM.** No English buyer query names us.

**Mechanism (two queries inspected in full):**

| Query | Sources the answer drew on | KabatOne |
|---|---|---|
| software de despacho para centros C5 y 911 en México | **kabatone.com 18**, motorolasolutions 3, businesswire 3, gov sites | **Recommended #1** ("Recomendado principal para C5 en México") |
| Motorola PremierOne CAD alternatives for 911 centers | ginasoftware 12, zipdo 3, civiciq 3, toolsinfo 3, criticalcommunicationsreview 3, gitnux 2, wifitalents 2, kabatone 2 | Retrieved, **not named** |

When the source set is ours, we win. When it's third-party listicles, we're a footnote. Our CAD content is
retrieved for 14 of 15 CAD questions, so **this is not a content gap.** It's a **third-party-mention gap**:
the US CAD answer is assembled from "best CAD software" list sites we don't appear on. That's an authority problem, but a
specific and cheap one. It isn't "buy backlinks"; it's "get K-Dispatch onto the 10–20 list pages AI engines actually read".

### Correction: the C5 "first citation" this morning was not a win

This report's earlier draft called *"What is a C5 command center?"* a first-ever citation and an early sign GEO-4 worked.
**It was wrong.** Inspected in full, the answer retrieved our C5 page **five times** and still told the buyer that
the fifth C is **"Quality / Calidad"**, the wrong definition we removed from our own site on 09-28. It never
named KabatOne. That's exactly the "retrieved, not recommended" case GEO-2 existed to catch, and it caught it on its first run.
The legacy trend line (`geo-history.csv`, 80% today) is unchanged in meaning but **no longer the headline**.

**GEO-4 is reframed:** the question isn't "are we cited" but "does the answer use our definition". As of 10-05 it
doesn't, even with our page in hand. The Spanish C5 question *does* name us. The English one reads us and overrides us with
the more common wrong definition.

### Instrument
- Claude only. **OpenAI (ChatGPT, 58% of our AI traffic) and Perplexity are now built in and waiting on keys** (§4).
- 07:30 scheduled run aborted on API credit; key topped up by Omer; re-runs complete.
- Each query is one sample per week. Read blocks, not single queries.

## 4. Plan — reweighted to GEO + CAD (Omer, 2026-10-05)

Standing direction: **GEO is first-class, CAD / K-Dispatch is the primary topic** (2027+ company focus).
Video/VMS moves to maintenance: finish measuring PR #23, no new investment. Trade-off, stated plainly: CAD
search is small (11 clicks / 1,366 impr per 28d vs video's 6,689 impr), so **total traffic will grow more
slowly** on this path. The scoreboard changes to match (below).

### P0 — this week

**#1 — Get K-Dispatch onto the third-party CAD lists AI engines read.** *Owner: Marketing (David Z) with Omer;
Claude builds the target list. Effort: target list today, outreach over 2–4 weeks.*
The mechanism above says this is the lever. I'll extract every domain that appears in the sources of the 15 CAD
answers, rank them by how often they appear, and hand over a list with the exact page, current vendors listed, and how
each takes submissions (editorial pitch, vendor form, G2/Capterra profile). **Why it beats the runner-up (homepage path,
#3):** it's the only item that addresses why we're not named. Everything on our own site is already being read.

**#2 — Add OpenAI and Perplexity keys** *(Omer, 5 min).* The code is shipped and skips each engine cleanly
until its key exists. Put the keys in `~/.config/claude-seo/openai-api-key` and `~/.config/claude-seo/perplexity-api-key`
(file contents = the key only; never in chat). About $1–2/week for both at 40 queries. ChatGPT sends 58% of our AI traffic,
and we're currently guessing at it.

**#3 — Homepage → K-Dispatch path** *(Omer to approve a design).* AI-referred visitors land on the homepage
(48 of 131 sessions in 13 weeks); 13 reached a CAD page. Solutions lists K-Safety first, K-Dispatch second. The fix
(K-Dispatch first in Solutions, a dispatch-led line in the hero) is in the homepage redesign files, which are under
hold, so **not changed**. Proposal for your review rather than a commit.

### Shipped today (v2.411–v2.412, branch `seo/weekly-2026-10-05`, not pushed)

| What | Why | Verified |
|---|---|---|
| **GEO-2: named vs retrieved split** in `track_geo.py`; new `geo-results.csv` | the 80% was counting retrievals | 3 classifier unit cases; one full answer inspected by hand (C5) |
| **OpenAI + Perplexity engines** | ChatGPT = 58% of AI traffic | code paths built; **not executed** (no keys). First run with keys is the test |
| **Block D: 15 CAD buyer-journey questions** (EN/ES/PT) | A–C only asked "best X" | ran: 15/15 answered |
| **Legacy trend protected** | new blocks must not move the 07-07→ line | only Claude A–C, once per date |
| **`llms.txt` leads with K-Dispatch**: CAD facts, 8 CAD/911 guides, 9 CAD/NG911 comparisons | the AI-crawler summary of the site led with VMS | all 31 URLs return 200; 2 stale links (308 since VID-1) fixed |
| **Site-wide Organization schema** leads with dispatch; `knowsAbout`; product catalog, K-Dispatch first | the one entity description on every page said nothing specific about CAD | rendered locally, JSON-LD present on `/` |
| **"Short answer" block on 6 CAD comparison pages** (`/vs/cad`, motorola, hexagon, centralsquare, tyler-technologies, mark43), EN+ES | a self-contained verdict at the top, not only in the FAQ | rendered locally in both languages; **no new claims**: it's each page's own first FAQ answer |
| **`seo_diff.py` reports named vs retrieved by engine and block** | so the weekly report leads with the right number | ran it |
| Build | | `npm run build` exit 0 |

**Fire CAD (#6 from the proposal) was already done.** `best-cad-dispatch-software` has carried a fire-dispatch block since
08-31 (NFPA 1225, apparatus-type dispatch, mutual aid). We still lose *"best fire CAD software"*. On today's evidence that's the
same third-party-list mechanism, so it folds into #1. There's no decision needed from you.

### P1 — this month
1. **GEO-4 (reframed):** the English C5 answer overrides our definition with the common wrong one. Test whether the source pages
   it trusts (Wikipedia-type sources) carry "Calidad"; if so, it's another third-party fix.
2. **PIPE-2:** move the scheduled jobs to `~/dev/k1-website` *(needs your OK to edit LaunchAgents)*.
3. **BRANCH-1:** retire `nextjs` as the working branch *(your decision)*.
4. **SCORER-2:** bare acronyms scoring as buyer.

### P2 — backlog
Video/VMS (maintenance) · OPS-1 watchdog · PIPE-3 Slack push · GEO-3 quoted-literal queries.

### New scoreboard (leads every weekly report from now)
1. **CAD named rate**, by engine and language (block D, `geo-results.csv`). Baseline 10-05: Claude 1/15.
2. **Overall named rate**. Baseline: Claude 3/40.
3. **AI-referred sessions landing on CAD pages.** Baseline: 13 in 13 weeks.
4. **CAD search clicks.** Baseline: 11 / 28d.
5. **Demo requests from CAD pages**: not yet instrumented; I'll check GA4 for a conversion event next week.

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
| GEO-2 | Split cited flag | Claude | 5 | ✅ shipped v2.412 |
| GEO-3 | Quoted-literal queries score buyer | Claude | 5 | 🔴 P2, low value |
| GEO-4 | C5 flip | Claude | 5 | **reframed**: retrieved ×5, answer still says "Calidad" |
| AUTH-1 | Authority program | Omer | 11 | blocked by design |
| OPS-1 | seo-mailer / watchdog | Omer | 1 | decision needed |
| PIPE-2 | Jobs on OneDrive checkout | Claude | 1 | P1 #1 |
| PIPE-3 | Slack routine can't push | Omer | 1 | blocked |
| SCORER-2 | Bare acronym = buyer | Claude | 1 | P1 #4 |
| BRANCH-1 | Retire `nextjs` as working branch | Omer | 0 | new, P1 #3 |
| GEO-5 | Get K-Dispatch onto third-party CAD lists | Marketing / Omer | 0 | new, P0 #1 |
| GEO-6 | OpenAI + Perplexity keys | Omer | 0 | new, P0 #2 |
