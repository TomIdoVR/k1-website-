# KabatOne Weekly SEO + GEO — 2026-11-09

**Focus:** Search had its best week since early October (165 clicks in W45, and that's only 6 days), and
`best-cad-dispatch-software` recovered to 13 clicks the week after its 11-02 edits. But five new pages are still
**unknown to Google**, a week after launch: English `police-cad-software`, both FASP 2027 guide pages, and both `/vs/zetron`
pages. Google's quota cut the 11-03 indexing requests short and they were never retried. Re-requesting them is the
cheapest win this week.

GSC 28d pull 11-09 (10-12 → 11-08) vs pull 11-02, a 7-day gap · weekly GSC by page W38–W45 (W45 = Nov 2–7, Nov 8 not
yet in GSC) · GA4 28d vs prior 28d plus 13 weekly buckets · Vercel AI-crawler weeks W42–W45 · GEO 3 engines × 52
questions × 2 runs on 11-09 (Claude engine out of credit) · previous report: the 11-02 analysis was logged in `SEO/carry-over.md` (PR #45); no report
file was written that week

> **Both Monday jobs missed their slots this morning** (launchd: 0 runs). I started them by hand at 09:25 IST. The
> 08:07 job finished and, for the first time, **pushed its own commits to GitHub** (traffic report, keyword snapshot,
> crawler snapshot: v2.442 working). The dashboard step also completed, so the crash on 10-26 and 11-02 is fixed (v2.440).

---

## Scoreboard (GEO + CAD)

| Measure | 10-26 (run 1 / 2) | 11-02 (run 1 / 2) | **11-09 (run 1 / 2)** | Read |
|---|---|---|---|---|
| ChatGPT named in answer (core 40 questions) | 9 / 8 | — / 10 (run 1 missing) | **5 / 5** | 🟠 halved, same in both runs |
| Gemini named in answer (core 40) | 8 / 4 | 7 / 8 | **2 / 5** | 🟠 down; Gemini swings ±4 between runs |
| Perplexity named in answer (core 40) | 5 / 4 | 9 / 6 | **8 / 8** | 🟢 holding the 11-02 gain |
| Claude named in answer (core 40) | 3 / 3 | 2 / 2 | **not run** | ⚠️ API credit ran out (OPS-2 reopened) |
| Block E: 12 Mexico buyer questions (3 engines, per run) | — | baseline 10-29: 5.5 / 12 | **6.3 / 12** (38/72) | 🟢 our strongest block |
| C5 questions named (3 core C5 questions, 3 engines) | 15 / 18 | 12 / 15 | **12 / 18** | flat-to-down |
| `best-cad-dispatch-software` clicks / week (GSC) | W43: 7 | W44: 8 | **W45: 13** (6 days) | 🟢 first rise in 5 weeks; CTR 0.34% → 0.56% at the same position (~10) |
| Site clicks / week (GSC) | W43: 146 | W44: 145 | **W45: 165** (6 days) | 🟢 best since W41 (179) |
| User-triggered AI fetches / week (Vercel) | W43: 124 | W44: 63 | **W45: 75** | ChatGPT-User 69 → 20 → 19; Claude-User steady 55 → 43 → 56 |
| AI-referred sessions / week (GA4) | W43: 9 | W44: 11 | W45: 13 (in progress) | flat, last 3 complete weeks 8.0 vs 8.3 |

## 1. Traffic

GA4, 28 days (10-12 → 11-08) vs the prior 28.

| Channel | Sessions | Prior | Δ | Users | Sess/user | Bounce | Read |
|---|---|---|---|---|---|---|---|
| Direct | 2,355 | 1,655 | +42% | 2,212 | 1.06 | 85% | **bot signature, excluded** |
| Organic Search | 908 | 997 | −9% | 673 (prior 719) | 1.35 | 48% | the W43–W44 dip; W45 recovered (below) |
| Referral | 145 | 80 | +81% | 109 | 1.33 | 61% | grupokabat.com 76, aocr.org 45 |
| Organic Social | 48 | 89 | −46% | 36 | 1.33 | 52% | small base; the prior window held the careers-post spike |
| AI Assistant | 37 | 40 | −8% | 34 | 1.09 | 35% | small base, flat |

- **Total traffic "+21.6%" is Direct, which is bots.** Never report it as growth. The orchestrator's summary leads with it;
  ignore that line.
- **Organic, weekly (sessions / users):** W41 287/222 · W42 252/184 · W43 218/173 · W44 203/160 · **W45 231/188**. The
  28-day −9% is two soft weeks; W45 has the most users since W41. Not a decline.
- **Organic shifted toward the ICP:** Mexico 243 → **291** (+20%), Peru 53 → 64; the US 174 → 154. Spain and Colombia fell
  out of the top 8.
- **AI Assistant by engine (28d):** ChatGPT 19, Gemini 17 (was 13), Perplexity 1, duck.ai 1. Gemini now sends almost as
  much as ChatGPT.
- **Organic landing pages (28d, sessions · engaged · avg time):** `/es` 122 · 70 · (1,247s, distorted by a few long
  sessions) · `/` 84 · 54 · 251s · `how-c5-command-centers-work` (ES) 63 · 23 · 152s · `best-cad` 57 · 34 · 66s ·
  `que-es-un-c5` 45 · 23 · 105s. Plus 89 sessions with landing page `(not set)`, 1 engaged, 3s: tracking noise, not visitors.

## 2. Search

| Metric | 11-09 pull | 11-02 pull | Δ |
|---|---|---|---|
| Clicks | 637 | 635 | +0.3% |
| Impressions | 136,730 | 126,380 | +8.2% |
| CTR | 0.47% | 0.50% | −6% |
| Avg position | 10.8 | 10.5 | slightly worse |

**The 28-day totals hide a good week.** Weekly clicks: W42 161 · W43 146 · W44 145 · **W45 165 in 6 days**. Part of the
impression growth since W44 is fake (below), which also drags CTR and average position down mechanically.

**What moved, by page (weekly clicks W43 → W44 → W45):**
- `best-cad-dispatch-software` 7 → 8 → **13**. Impressions keep falling (2,345 → 2,301) at position ~10, but CTR rose from
  0.34% to 0.56%. The 11-02 edits (vendor block + lead form v2.430, PSAP FAQs v2.433) are the only change to the page, and
  Google recrawled it 11-03. **The timing lines up; one week isn't proof.** Hold further edits for one more pull (CAD-2).
- `que-es-un-c5` 5 → 15 → **16** while `how-c5-command-centers-work` (ES) 15 → 12 → **6**. That's v2.428 ("one intent per
  C5 page") doing what it was built to do: the definition query moved to the definition page. Combined 20 → 27 → 22.
  Reallocation by design, not a loss.
- `what-is-gunshot-detection-software` 0 → 7 → 9: a new click source.
- New pages already ranking: `/es/resources/911-chile-sinaproc` 222 impressions at position 5.5,
  `/es/resources/c5-command-centers-mexico-2026` 4 clicks, `/es/resources/police-cad-software` position 4.6,
  `/es/resources/norma-tecnica-911` 1 click.

**Five new pages Google has never seen** (URL Inspection API, today):

| Page | Live since | Google | Linked from |
|---|---|---|---|
| `/resources/police-cad-software` | 11-02 | **unknown** | `best-cad` + 4 resource pages, country pages |
| `/resources/fasp-2027-911-c5` | 11-03 | **unknown** | C5 Mexico 2026, estadísticas, anexo técnico |
| `/es/resources/fasp-2027-911-c5` | 11-03 | **unknown** | same, ES |
| `/vs/zetron` · `/es/vs/zetron` | 11-02 (v2.425) | **unknown** | `/vs/hexagon`, `/vs/motorola` |

The sibling pages built the same days are indexed (ES police-cad, both estadísticas, fire-ems, chile-sinaproc), and Google
read the sitemap with all 256 URLs on 11-03. So nothing is broken: Google just hasn't got to these. The 11-03 indexing
session requested none of the five because the daily quota ran out, and nobody retried.

**Refuted: the orchestrator's #1 action ("fix titles on milestone/motorola alternatives").** It flags `milestone ai alternatives`
(position 1.5, 0 clicks) and `motorola solutions alternatives` (2.5, 0 clicks) as the top P0. All four queries in that
group appeared **in the same week (W44) at once**: `milestone ai alternatives` 237 → 324 impressions, `motorola solutions
alternatives` 168 → 214, `milestone.inc alternatives` 75 → 101, `milestone systems alternatives` 51 → 73, with zero
clicks at top-3 positions. That's the signature the 11-02 CAD-2 diagnosis found on two CAD queries (sudden hundreds of
impressions, no clicks, unchanged position): rank-tracker or synthetic traffic. Two of them name a different company
(Milestone Inc., not Milestone Systems). A title rewrite won't change a click count that isn't coming from people.

**Opportunities** (score order, intent beside every number):

| # | Query | Pos | Impr | Qualified potential | Intent |
|---|---|---|---|---|---|
| 1 | que es el c5 | 6.8 | 1,157 | 68 | informational (GEO value) |
| 2 | c5 | 7.8 | 5,980 | **0** (raw 233) | ⛔ bare acronym |
| 3 | c5 que es | 6.2 | 534 | 31 | informational |
| 4 | vms | 6.0 | 3,078 | **0** (raw 179) | ⛔ bare acronym |
| 5 | que es el c5 en la policía | 5.0 | 416 | 23 | informational |
| 6 | centro de mando | 6.3 | 244 | 12 | buyer |
| 7 | video analytics software | 16.7 | 741 | 9 | buyer |
| 9 | police cad systems | 8.9 | 133 | 4 | buyer → `police-cad-software`, once indexed |
| 10 | 911 call center software | 9.9 | 104 | 4 | buyer |

**Zero-click page-1 block:** 34 of 67 page-1 queries returned zero clicks (prior 29); 11 improved position and still got
none. Most are CCTV-analytics variants at positions 5–10 (AI Overview territory) plus the synthetic group above.

## 3. GEO

**Bottom line: the headline went up, and the comparable number went down.** The 11-09 run asked 52 questions instead of 40.
The 12 new ones (block E, added 10-29) are Mexico buyer questions where we're named about half the time. So the raw rate
rose (ChatGPT 11/52, Perplexity 16–17/52). But on the **same 40 questions** as before, three engines together named us in
**16.5 of 120** answers per run, down from 25 on 11-02 and 19 on 10-26. Don't quote the 52-question rate as progress.

| Engine (named in answer, core 40, mean of runs) | 10-26 | 11-02 | 11-09 |
|---|---|---|---|
| ChatGPT | 8.5 | 10 (one run) | **5** |
| Gemini | 6 | 7.5 | **3.5** |
| Perplexity | 4.5 | 7.5 | **8** |
| Claude | 3 | 2 | not run |

**Where the losses are.** ChatGPT's drop is the one to watch. It's identical in both runs (5/40), so it isn't run-to-run
noise. It stopped naming us on English CAD "alternatives" and integration questions it named us on in October
("Motorola PremierOne CAD alternatives", "CAD dispatch software integrated with video and real-time crime center",
"police dispatch software for mid-size cities"). It still names us on the Mexico/C5 questions. The same week,
**ChatGPT-User fetches of our pages fell 98 → 69 → 20 → 19** (Vercel, W42–W45). Timing lines up; one week of GEO data isn't
proof, and we don't know what changed on OpenAI's side. Gemini's drop is within its normal swing (6 vs 10 between two runs
on the same day).

**Authority vs content.** Retrieval held: we're in the source set on 20–38 of 52 answers per engine-run. Being retrieved and
not named is the same pattern as since October. The engines read our pages, then recommend from the listicles and
directories (G2, Capterra, SourceForge roundups) where we're absent. That's an authority gap, not a content gap, and
the lever is still GEO-5 (listings). No on-site change would move the English CAD questions.

**Where we win.** Block E: "¿Cuál es el mejor software para un C5 estatal en México?", "plataforma de seguridad pública
para municipios en México", "software de despacho de ambulancias (CRUM)", "alternativas a Zetron, Hexagon y Carbyne" are
named with **no competitor** on several of them. Spanish, Mexico-specific, buyer-intent. That's the ICP, and it's where the
FASP 2027 and C5 pages point.

**Instrument scope (G10).** "Named" = KabatOne appears in the answer text. "Retrieved" = a kabatone.com URL is in the
sources. Each engine is called through its API with web search, which isn't identical to the consumer apps. Two runs per
engine, 40 or 52 questions: a change of 1–2 per engine is noise. **The Claude engine didn't run:** the Anthropic key ran
out of credit after 8 questions, and the monitor correctly refused to record a partial run (44/52 failed).

## 4. Plan

### P0 — this week

**#1: Request indexing for the five unknown pages.** *Owner: Omer, ~5 minutes in Search Console. 0 weeks; new.*
URL Inspection → paste each URL → Request indexing, in this order (most query demand first):
1. `https://kabatone.com/resources/police-cad-software` ("police cad systems" 133 impressions at 8.9 waiting for it)
2. `https://kabatone.com/es/resources/fasp-2027-911-c5`
3. `https://kabatone.com/resources/fasp-2027-911-c5`
4. `https://kabatone.com/es/vs/zetron`
5. `https://kabatone.com/vs/zetron`

Google's daily quota is small, so if it refuses one, finish the rest tomorrow. I tried to click it for you; the permission check blocks me from submitting actions in
Search Console. *Why it beats the runner-up (PR #55):* these pages are already built and paid for, and until Google sees
them they earn exactly nothing. It's five minutes with no review needed.

**#2: Merge PR #55 and approve the routine edit before ~14:00 IST today.** *Owner: Omer. PIPE-3, 7 weeks 🔴.*
The Monday Slack routine still checks out the retired `nextjs` branch. Last week's brief opened with "the GEO monitor has
been silent for 63 days" (GEO had run that morning). Today's brief will say the same unless the fix lands first.
[Repoint the Monday Slack routine](https://github.com/TomIdoVR/k1-website-/pull/55) has the dry-run-tested prompt waiting
for your OK in its session.

**#3: ✅ Done today: the orchestrator's prompt no longer contradicts the scorer.** Its "methodology" still told it `c5` and
`vms` were worth 2.5× and 2×. So today it called the deliberate 0.2 (SCORER-2, v2.419) a bug and asked for it to be
"fixed". The prompt now defers to the shared scorer, explains the 0.2, and warns about the synthetic top-3 pattern. It
also now commits `traffic-latest.html`, which it left uncommitted every week. **v2.444**, in this week's PR.

### P1 — this month

1. **GEO-5 listings** *(Omer, 6 weeks 🔴)*. G2 was partly filled on 10-22; the category is still "Contact Center Quality
   Assurance", which makes G2 show Hiya and Talkdesk as our alternatives. The category change needs a support request.
   SourceForge, FeaturedCustomers and GovLaunch need accounts only you can create. I can't verify any of this from here:
   the G2 connector isn't linked to the vendor account.
2. **`best-cad`: second measurement at the 11-16 pull** *(Claude)*. If W46 holds above 10 clicks, close CAD-2 and credit
   v2.430/v2.433. If it falls back, the lever is listings (GEO-5), not more on-page work.
3. **Top up the Anthropic API credit, or drop the Claude engine from GEO** *(Omer, OPS-2, reopened)*. The 11-09 GEO run
   lost Claude after 8 of 52 questions. The other three engines cover ChatGPT, Gemini and Perplexity, the AI referrers
   that send visits. Claude sends little. Dropping it is a fine answer; just decide so the trend stays clean.
4. **Retire or fix the SEO mailer** *(Omer decides, OPS-1, 7 weeks 🔴)*. It still crashes every weekday (`IndexError`
   on an empty priority queue). It emails a daily priority item from a queue nobody maintains. My recommendation: retire it.

### P2 — backlog

GEO-3 quoted-literal intent (11w) · AUTH-1 authority (17w, blocked by design; GEO-5 is its first step) · strip synthetic
queries from the opportunity and zero-click tables · video/VMS maintenance.

## 5. Operations & health

| Signal | Value | |
|---|---|---|
| Monday jobs | both missed 07:30/08:07 (0 runs); started by hand 09:25 IST | ⚠️ new: watch next Monday |
| Job push to GitHub (v2.442) | 3 commits pushed by the 08:07 job | ✅ first real run |
| Dashboard step (v2.440) | completed | ✅ crash fixed |
| AI-crawler pull (v2.438) | W45 committed and pushed | ✅ |
| Production deploys this week | v2.440, v2.441, v2.442 (+ today's job commits) | ✅ |
| Open PRs | #55 routine fix (needs you), #50 LinkedIn tag (v2.439), #26 retire `nextjs` (superseded by v2.432; close it) | |
| Stale branches | 7 older than 7 days, incl. `nextjs` (56 commits, retired) | clean up when convenient |
| Slack brief routine | reads the retired branch | 🔴 PIPE-3 → #2 |
| SEO mailer | crashes every weekday | 🔴 OPS-1 |
| Anthropic credit (OPS-2) | Claude GEO engine aborted: credit too low | 🔴 reopened; top up or drop the engine |
| Striking distance (p5–15) | 125 (109 on 10-28) | — |
| Machine timezone | now IST | jobs run on local time |

## 6. Housekeeping

**Shipped since 11-02:** v2.435 FASP 2027 guide · v2.436 911 statistics Mexico 2026 · v2.437 FASP gated PDF · v2.438
AI-crawler block · v2.440 dashboard crash fix · v2.441 crawler history no-op commits · v2.442 jobs push to GitHub.

**Refuted or corrected this week**
- **Orchestrator: "zero-CTR top-3 rankings on milestone/motorola alternatives are the top P0".** Synthetic impressions that
  appeared in W44 (evidence in §2). No title change.
- **Orchestrator: "`c5` and `vms` are underweighted, the scoring setup needs fixing".** The 0.2 is deliberate (SCORER-2);
  its prompt was stale. Fixed today (v2.444).
- **Orchestrator: "Organic search is down 8.9%".** True on 28 days; W45 has the most organic users since W41.
- **Slack brief 11-02: "GEO monitor silent for 63 days".** GEO ran 11-02. Same root cause as PIPE-3.

**Carry-over**

| Item | Owner | Weeks | Status |
|---|---|---|---|
| INDEX-1 five new pages unknown to Google | Omer | 0 | **new, P0 #1** |
| PIPE-3 Slack routine on retired branch | Omer | 7 🔴 | fix ready (PR #55), needs your OK |
| GEO-5 third-party listings | Omer | 6 🔴 | G2 partial, category wrong; others not started |
| OPS-1 mailer crash | Omer to decide | 7 🔴 | retire recommended |
| OPS-2 Anthropic credit (Claude GEO engine) | Omer | 0 | **reopened**: aborted 11-09 |
| GEO-3 quoted-literal intent | Claude | 11 🔴 | open |
| AUTH-1 authority program | Omer | 17 🔴 | blocked by design |
| CAD-2 `best-cad` decline | Claude | 2 | recovering (13 clicks W45); verdict 11-16 |
| AI-1 AI referrals low | Claude | 5 | flat at 8/wk; Gemini rising |
| AI-2 user-triggered AI fetches | Claude | 1 | ChatGPT-User down, Claude-User steady; visits unaffected |
| ~~OPS-2~~ Anthropic credit | Omer | 6 | **closed: GEO ran 11-02 and 11-09** |
| ~~BRANCH-1~~ retire `nextjs` | Omer | 6 | **closed: done in v2.432; close PR #26** |
| ~~ORCH-1~~ orchestrator prompt vs scorer | Claude | 0 | **closed v2.444** |
