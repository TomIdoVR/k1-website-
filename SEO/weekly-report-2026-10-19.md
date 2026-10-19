# KabatOne Weekly SEO + GEO — 2026-10-19

**Focus:** Search had a third good week (clicks +8%). Half of the gain is people searching our brand name, and that rose
with LinkedIn traffic. On AI, the measurement can't yet see the change we're trying to make: by accident, every query ran
twice this morning, and **ChatGPT named us 5 times in one run and 10 in the other.** The only lever that moves AI answers,
the third-party listings (GEO-5), has now gone two weeks with no sign it has started.

GSC 28d (pull 10-19) vs pull 10-12, a 7-day gap · GA4 28d vs prior 28d, plus 13 weekly buckets · GEO: 4 engines × 40
queries, **two full runs on 10-19** (see §3) · previous report `weekly-report-2026-10-12.md`

---

## Scoreboard (GEO + CAD)

| Measure | 10-05 | 10-12 | **10-19 (run 1 / run 2)** | Read |
|---|---|---|---|---|
| ChatGPT: questions that name us | — | 8 / 40 | **5 / 10** | same morning, 5-point spread, so it's noise |
| Gemini: questions that name us | — | 8 / 40 | **6 / 9** | flat within noise |
| Perplexity · Claude: name us | — · 3 | 3 · 3 | **5 / 4 · 3 / 3** | Claude is stable; Perplexity is noisy |
| CAD block named (ChatGPT, Gemini) | — | 4, 3 / 15 | **2–4, 2–4 / 15** | flat |
| AI-referred sessions, weekly (GA4) | W40: 5 | W41: 6 | **W42: 5** | third low week; cause narrowed (§1) |
| CAD page clicks (`best-cad-dispatch-software`, 28d) | 56 | 59 | **60** | flat; position 8.2, still improving |

## 1. Traffic

| Channel | Sessions | Prior | Δ | Users | S/U | Bounce | Read |
|---|---|---|---|---|---|---|---|
| Direct | 1,700 | 1,904 | −11% | 1,568 | 1.08 | 80.4% | ⚠️ bot signature, excluded |
| **Organic Search** | **1,044** | 925 | **+13%** | 739 | 1.41 | 49.7% | healthy |
| Referral | 104 | 92 | +13% | 63 | 1.65 | 51.9% | grupokabat.com 71 |
| Organic Social | 95 | 21 | — | 62 | 1.53 | 50.5% | small base; LinkedIn 67 + 24 |
| **AI Assistant** | **29** | 51 | −43% | 21 | 1.38 | 44.8% | small base; see below |

**AI-1: AI referrals had a third low week. Here's what it isn't.** AI Assistant sessions by ISO week, from GA4:

| Weeks | Per week | ChatGPT | Gemini |
|---|---|---|---|
| W30–W39 (10 weeks) | 11–16, avg 13.1 | 6–12 | 1–7 |
| W40 · W41 · **W42** | 5 · 6 · **5** | 3 · 5 · 2 | 2 · 1 · 3 |

- **It isn't one page.** Before W40, AI visitors landed on the homepage (30), `/es` (10), the video-analytics resources
  (13) and `/es/k-dispatch` (6). Since then, every one of those is down. No single page lost its citation.
- **It isn't one engine.** ChatGPT and Gemini both dropped in the same week.
- **It isn't our GA4 tag.** Organic (232–287 a week) and Referral held steady through W40–W42.
- **No sign that visits moved to Direct.** I checked whether the engines had started hiding where visitors come from.
  If so, engaged Direct visits to deep pages would have risen. They fell (45 → 42, 36, 46 a week).
- **The answers still name us about as often** (ChatGPT 8 on 10-12, 5–10 today). So the likeliest reading is that engines
  are **sending fewer clicks per mention**, not mentioning us less. I can't prove that from our side.
- **Scale:** 5 sessions a week out of ~1,000 real ones. Downgraded to *watching*, with no further diagnosis spend. The answers
  matter more than the clicks: buyers who shortlist from an AI answer often search our name afterwards (see brand, §2).

## 2. Search

| Metric | Now | Prior (10-12) | Δ |
|---|---|---|---|
| Clicks | **649** | 600 | +8.2% |
| Impressions | 112,434 | 109,783 | +2.4% |
| CTR | 0.58% | 0.55% | up |
| Avg position | **10.0** | 10.7 | improved (third week running: 11.6 → 10.7 → 10.0) |

**Where the gain came from:** brand queries (*kabat one*, *kabatone*, *grupo kabat*) went 98 → **124 clicks** (+26 of the
+49). *kabat one* impressions rose 151 → 223 (+48%), the same weeks that LinkedIn sessions rose. Non-brand clicks rose
about 502 → 525 (**+4.6%**). That's an approximate figure: brand is counted from the top-30 query list. Homepage clicks:
`/` 65 → 78, `/es` 64 → 82.

**Movers up:** *ai video analytics* 14.3 → 10.2 · *police cad software* 13.7 → 9.7 · *911 call center software* 12.3 → 9.4
· *911 cad demo* 14.3 → 11.6. **Down:** *ai video analytics camera* 9.8 → 11.5 (59 impressions, too small to matter).

**Zero-click page 1:** 24 of 69, down from 30 of 68. 10 of them improved position and still got zero clicks. That's the
AI-Overview pattern, so no snippet rewrites.

**CAD pages:**

| Page | 10-05 | 10-12 | **10-19** |
|---|---|---|---|
| `/resources/best-cad-dispatch-software` | 56c · 17.7k · p8.8 | 59c · 16.0k · p8.5 | **60c · 14.7k · p8.2** |
| `/k-dispatch` | 4c · p31.3 | 5c · p29.9 | **7c · p25.4** |
| `/es/resources/what-is-emergency-dispatch-software` | 6c · p8.7 | 7c · p7.2 | **7c · p6.8** |

The best-CAD page has lost impressions three weeks running (17.7k → 14.7k), while its position and clicks held or improved.
That's the reallocation pattern (G1, WATCH-1): the far-off impressions that never converted are dropping out. **It's not a
decline. Don't escalate it.**

### Opportunities (score-ranked, intent-labelled)

| Query | Pos | Impr | Qualified potential | Intent | Read |
|---|---|---|---|---|---|
| vms | 7.3 | 3,326 | 123 | buyer ⚠️ disputed (SCORER-2) | maintenance; bare term converts 3× worse than *vms software* |
| psap | 5.2 | 1,177 | 69 | buyer | new to the top; 911-adjacent, worth a look in P1 |
| rtcc | 7.8 | 969 | 37 | buyer | ChatGPT and Gemini each named us on the RTCC vendor question in one of two runs |
| c5 | 8.0 | 4,506 | **0** | navigational ⛔ | never a click play |
| que es el c5 en mexico / que es c5 | 6.4–6.6 | 463 / 385 | 26 / 22 | informational | GEO value only |
| cctv analytics · cctv ai analytics | 4.6 · 3.6 | 380 · 246 | 28 · 23 | buyer | AI-Overview block |
| public safety software | 8.8 | 422 | 14 | buyer | — |

## 3. GEO

### The finding this week: one run per week can't detect the change we're waiting for

Because of a race between two jobs (§5), all 160 queries ran **twice** this morning, 30 minutes apart, with nothing
changed in between. That turned a bug into a free noise test:

| Engine | Named, run 1 | Named, run 2 | Answers that flipped (of 40) | Used us as a source, run 1 / 2 |
|---|---|---|---|---|
| ChatGPT | 5 | 10 | **9** | 11 / 15 |
| Gemini | 6 | 9 | 5 | 31 / 31 |
| Perplexity | 5 | 4 | 5 | 32 / 32 |
| Claude | 3 | 3 | **0** | 31 / 31 |

- **19 of 160 answers flipped between identical runs (12%). On ChatGPT it was 9 of 40.** One run of ChatGPT or Gemini has a
  spread of about ±3–5 named answers. So the 10-12 "ChatGPT 8 / Claude 3" comparison was real (Claude never moves), but
  any **week-over-week** change smaller than ~5 on one engine is noise.
- **That matters for GEO-5.** If the listings get K-Dispatch named on two or three more CAD questions, a single weekly run
  won't show it. Two runs a week, averaged, will. That's the P0 #2 below.
- **What holds in every sample:** three questions name us on 3–4 engines in both runs. *What is a C5 command center?*
  (ChatGPT, Gemini, Perplexity) · *software de despacho para centros C5 y 911 en México* (4 engines in at least one run)
  · *public safety software for Mexico and Latin America* (4 engines in at least one run). Same pattern as last week: **we're named
  when the question is about Mexico or C5, and read but not named on generic CAD questions.**
- **CAD block (15 questions):** ChatGPT 2–4, Gemini 2–4, Perplexity 1–2, Claude 1. Flat against 10-12 (4, 3, 1, 1).
  New this week, each in one run only: ChatGPT and Gemini on *CentralSquare CAD alternatives*, and Gemini on *alternativas a
  Motorola para despacho 911*. Watch these, but don't count them yet.
- **GEO-4 closed.** The English *What is a C5 command center?* answer names us on ChatGPT, Gemini and Perplexity in all
  three samples (10-12 and both runs today). Claude never has (4 samples). The fix worked on 3 of the 4 engines, and Claude
  sends ~2% of AI referrals. No further work.
- Legacy trend (Claude, retrieved-or-named, 25 queries): 72% vs 84%. Kept for continuity only, and inside the noise shown above.
- Instrument scope (G10): these are API answers with search grounding, which stand in for the consumer apps. *Named* is the
  measure that counts; being used as a source doesn't mean being recommended.

## 4. Plan

### P0 — this week

**#1: Start the third-party listings (GEO-5).** *Owner: David Z with Omer. ~1 day for the four self-serve directories.
**Week 3 next Monday, which turns it 🔴.***
Still no sign it has started: no task in Second Brain, and the directories block automated checks.
Start with G2, SourceForge/Slashdot, FeaturedCustomers and GovLaunch. The list is
`SEO/geo/cad-third-party-targets-2026-10-05.md`. **Why it's still #1:** this week confirms we're a source for 31–32 of 40
answers on three engines and named in 3–10. Everything on our own site that could close that gap has shipped and is
verified live (homepage, `llms.txt`, the "Short answer" blocks). The rest of the gap sits on other people's sites.
**Omer, one decision:** shall I create the Second Brain task for David Z with the four directories and the copy?

**#2: Make GEO measurement able to see a change.** *Owner: Claude. ~1 hour. Week 0.*
(a) Fix the race so two jobs never run unplanned (§5). (b) Run each engine **twice on purpose**, tag the rows with a run
number, and have `seo_diff.py` report the average and the range, not one count. Extra cost: about $1–1.50 a week (ChatGPT
~$1, Perplexity $0.08, Gemini inside the free tier). (c) Commit `geo-results.csv` from the job (PIPE-4).
**Why it isn't #1:** it doesn't move AI answers; it only lets us see whether GEO-5 did. It has to land before GEO-5 results
arrive, so it's this week.

### P1 — this month
1. **OPS-2:** confirm Anthropic auto-reload is on (console.anthropic.com → Billing). Unconfirmed for 2 weeks; today's runs had credit.
2. **BRANCH-1:** retire `nextjs` *(Omer)*. Every SEO change now goes through `main`; `nextjs` is 56 ahead and 209 behind.
3. **`psap`** (p5.2, 1,177 impressions, buyer): check which page ranks and whether it answers a 911 buyer. It's new in the top
   two, so check that it isn't a bot pattern (SCORER-1/3) before spending anything.
4. **OPS-1:** restore or retire the audit watchdog *(Omer decides; 3 weeks)*.

### P2 — backlog
Video/VMS maintenance · SCORER-2 (3w) · GEO-3 (7w) · PIPE-3 (blocked on Omer, 3w) · AUTH-1 (blocked by design, 13w).

## 5. Operations & health

| Signal | Status |
|---|---|
| Branches | diverged: `nextjs` 56 ahead / `main` 209 ahead. Production is v2.416 (10-12) |
| Production pushes this week | 0 (last: PRs #28–#30 on 10-12) |
| Scheduled jobs | ✅ both now run from `~/dev/k1-website` (plists changed 10-12), so **PIPE-2 is closed** |
| GEO run | ⚠️ **ran twice.** Four engines made the 07:30 job take 54 min (finished 08:24). The 08:07 orchestrator checks "are today's rows in `geo-history.csv`?" before that file is written, so it ran a second full set. Same class as GEOSCHED-2 (v2.340), now a timing race. Cost about $1.50 extra; `geo-history.csv` guarded itself, `geo-results.csv` took 80 rows per engine |
| Job commits | ⚠️ PIPE-4: the job commits `geo-history.csv` (legacy) but **not `geo-results.csv`** (the 4-engine data). Today's rows exist only on this Mac until this branch merges |
| Local `main` in `~/dev/k1-website` | 2 job commits (GEO + keyword snapshots), unpushed; carried by this branch |
| Striking distance (pos 5–15) | 98 (was 99) |
| Canonical sweep | 0 issues |
| `seo_diff.py` | two stale labels: it counts "commits this week" on `nextjs`, and its GEO caveat still says "Claude only". Cosmetic; fold into P0 #2 |

## 6. Housekeeping

**Shipped since last report, verified live 10-19:** v2.413 homepage led by K-Dispatch · v2.412 `llms.txt` led by K-Dispatch
· "Short answer" blocks on `/vs/motorola`, `/vs/hexagon`, `/es/vs/cad` · v2.415–v2.416 four-engine GEO monitor.

**Closed:** GEO-4 (3 of 4 engines use our C5 definition; Claude holdout accepted) · PIPE-2 (jobs on `~/dev/k1-website`, and
10-19 commits `0be248a`/`e3f5260` prove they can commit).

**Corrected:** The 10-12 report treated week-to-week moves of 1–3 named answers per engine as readable ("Lost: *¿Qué es un
centro…C5?* went from named to source-only"). Today's duplicate run shows that size of move is inside single-run noise on
three of four engines. Claude's figures stand; the others need two runs to compare.

| id | item | owner | weeks | status |
|---|---|---|---|---|
| GEO-5 | Third-party CAD listings | David Z / Omer | 2 | P0 #1, **not started as far as I can tell**; 🔴 next week |
| GEO-8 | Two runs per week + average/range; fix the job race | Claude | 0 | P0 #2 (new) |
| PIPE-4 | Job doesn't commit `geo-results.csv` | Claude | 0 | new; folds into GEO-8 |
| AI-1 | AI referrals ~5/wk since W40 | Claude | 1 | watching: not a page, engine, tag, or Direct shift |
| OPS-2 | Anthropic auto-reload | Omer | 2 | unconfirmed |
| BRANCH-1 | Retire `nextjs` | Omer | 2 | decision |
| OPS-1 · SCORER-2 · PIPE-3 | see ledger | — | 3 | 🔴 not moved |
| GEO-3 | quoted-literal intent | Claude | 7 | 🔴 not moved, low value |
| AUTH-1 | Authority program | Omer | 13 | blocked by design |
