# KabatOne Weekly SEO + GEO — 2026-11-23

**Focus:** A soft week in search, and an automated plan built partly on bot traffic. W47 search clicks fell to 125
(W46 165) at flat impressions and flat positions, so fewer people clicked rather than Google showing us less; brand
searches fell by a quarter too, which points to demand (Mexico's Revolution Day holiday fell in the week). One week:
no action, read W48. The real problem is this morning's orchestrator plan: three of the four zero-click queries it
asked to check before rewriting snippets come from a rank tracker, and its top action (a C5 title rewrite) would
undo v2.428. The #1 action, shipped with this report (v2.452): add those three queries to the shared scorer's bot
denylist, so next Monday's plan, the Slack brief and the dashboard stop recommending them.

GSC 28d pull 11-23 (10-25 → 11-21) vs pull 11-16 · weekly GSC W44–W47 (W47 = Nov 15–21) · GA4 28d Oct 26 – Nov 22 ·
Vercel AI crawlers W44–W47 · GEO: 4 engines × 52 questions × 2 runs (Gemini + Perplexity re-run in the afternoon after
a DNS failure at 07:30; Gemini then hit its monthly spending cap) · rolling windows `SEO/audits/rolling-2026-11-23.json` ·
previous report `SEO/weekly-report-2026-11-16.md` · artifact https://claude.ai/artifact/9oFQZbATe2azS5UBDtnGJ9

---

## 1. Traffic

| Measure | Now | Prior | Read |
|---|---|---|---|
| Organic sessions, 28d (GA4) | 876 | 884 (last week's 28d) | flat week on week |
| Organic users, 28d | 673 | 682 | flat |
| AI-referred sessions / week | 13 · 8 · 7 (W45–W47) | avg 9.3 | flat, small base (G9) |
| AI-referred by engine, 28d | Gemini 20 · ChatGPT 18 · Perplexity 1 | — | Gemini now the largest |

The "−15%" organic comparison in the automated brief is against the October peak window, not a decline (same
artifact as 11-16). Direct remains excluded from every conclusion (bot signature, ~1.1 sessions/user).

## 2. Search

| Week | Clicks | Impressions | Read |
|---|---|---|---|
| W44 | 147 | — | |
| W45 | 182 | — | |
| W46 | 165 | 45.4k | |
| **W47** | **125** | **46.0k** | lowest 7-day total since Sep 21 (checked against the full rolling series) |

- **Spread, not concentrated:** best-cad −7, homepage −8, how-c5 −5, cctv-video-analytics −7. No single page broke.
- **Brand** impressions 400 → 295, clicks 21 → 15. **Mexico** clicks 49 → 36 (Revolution Day, 11-16, in the week);
  **USA** 29 → 15.
- **Verdict:** a demand dip at unchanged rank. Watch W48; no edits.

### Rank-tracker queries (now denylisted, v2.452)

`verify_serp_polling`, 10-25 → 11-21:

| Query | Impr | Desktop | Clicks | Countries | Verdict |
|---|---|---|---|---|---|
| motorola solutions alternatives | 794 | 100% | 0 | GB 71 · IT 70 · DE 55 · NL 42 · US 15 | tracker |
| milestone ai alternatives | 938 | 100% | 0 | IT 99 · DE 50 · GB 33 · NL 10 · US 2 | tracker |
| kabatone alternatives | 368 | 100% | 0 | IT 28 · GB 25 · DE 23 · NL 11 · US 2 | tracker |
| looking for enterprise platform for port security | — | — | 0 | — | probable, not added (evidence incomplete) |
| cctv video analytics (pos 2.3, 536 impr) | — | mixed | — | US present | **real**: kept, scores 2.0 |

All three now return `business_value` 0.0 (run, G6).

### C5 rewrite: refuted

The orchestrator's P0 was to retitle the C5 page to "¿Qué es el C5?". v2.428 (11-02) deliberately made
`how-c5-command-centers-work` the definition page (pos 5.9 for "que es el c5") and `que-es-un-c5` the
C2/C4/C5-differences page. The "que es el c5" family drew ~1,900 impressions at positions 4–7 and **0 clicks on every
page for 4 weeks**: the answer is shown on the results page. Informational intent, GEO value only. No rewrite.

## 3. GEO

| Engine (core 40, named run 1 / 2) | 11-16 | **11-23** | Read |
|---|---|---|---|
| ChatGPT | not run | **7 / 5** | back after credit top-up |
| Claude | 5 / 5 | **5 / 5** | steady |
| Perplexity | 4 / 4 | **1 / 1** | retrieval fell ~20 → ~6.5 of 52 across every block: likely an instrument change; re-check 11-30 |
| Gemini | not run | **not measured** | HTTP 429 "exceeded its monthly spending cap": Omer raises it in AI Studio |

Block E (Mexico buyers): Claude 7 · ChatGPT 10 / 7 · Perplexity 3 / 2. CAD block D: ChatGPT 3 / 2, Claude 1 of 15.
Instrument scope (G10): "named" = named in the answer text; retrieved-only is not counted here.

**AI crawlers (AI-2):** user-triggered fetches W47 30 (W44–W46 63 / 75 / 55), fourth week under 100. The drop is real
but has cost no visits (AI-referred sessions flat). OAI-SearchBot crawled 1,898 pages, its highest week.

## 4. Plan

**P0 — this week**
1. **#1 (Claude, 15 min) — denylist the three tracker queries. Shipped in v2.452.** Beats the runner-up (Gemini
   re-run) because it needs no approval and corrects three pipelines at once.
2. Refute the C5 rewrite (done above).
3. **Omer:** raise the Gemini spending cap in AI Studio (then Claude re-runs Gemini for 11-23); nudge
   FeaturedCustomers by 11-24 (no reply since the 11-10 vendor form).

**P1 — this month**
- GEO-5 editorial roundups (gitnux, zipdo, worldmetrics, wifitalents, civiciq) — Omer / David Z, 7 weeks open 🔴.
- CAD-2 verdict 11-30 (W47 4 clicks vs W46 11; read W47–W48 together).
- OPS-3 confirm on the 11-30 jobs.
- YouTube advanced-features verification (Omer).

**P2 — backlog**
OPS-1 retire the mailer · stale branches incl. remote `nextjs` · GEO-3 quoted-literal intent · PIPE-3.

## 5. Operations & health

- **OPS-3:** the 08:07 weekly job's push was skipped because the checkout was on a feature branch at the time; the
  afternoon `track_geo.py` re-run pushed `SEO: weekly GEO snapshot 2026-11-23` to `origin/main` as `omercnaani` with no
  403. The push path works; close after the scheduled 11-30 jobs push too.
- **GEO jobs:** 07:30 Gemini + Perplexity failed on DNS (`nodename nor servname`); re-run with `--force`; Perplexity
  succeeded, Gemini hit the spending cap.
- Production: PRs #60, #61, #62, #63, #65 merged to `main` since 11-16.

## 6. Housekeeping

**Shipped since 11-16:** v2.447–v2.451 (Kabat One rename, GEO re-run + rolling windows, GEO page checks, headline/H1 fixes, Playwright smoke tests) · v2.452 this
report + denylist.

**Refuted / withdrawn:**
- Orchestrator P0 "rewrite the C5 snippet to '¿Qué es el C5?'" — would undo v2.428; zero clicks are answer-on-SERP.
- Orchestrator check on `motorola solutions alternatives` et al. — rank tracker, now denylisted.
- My own first draft said "three of its four actions target rank-tracker queries"; correct wording: the plan asked
  to check four zero-click queries, and three are a tracker.

**Carry-over:** see `SEO/carry-over.md` (updated with this report).
