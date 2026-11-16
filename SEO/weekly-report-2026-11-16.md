# KabatOne Weekly SEO + GEO — 2026-11-16

**Focus:** The site is fine. The monitoring is not. Search held at its October level, all five pages that were
missing from Google are now indexed, and AI-referred visits are rising. But three of this morning's automated jobs
failed for reasons outside the code. GitHub rejected the Monday jobs' push (403: the active `gh` login on this Mac
changed to `omercnaani`, which has no write access). OpenAI and Gemini both ran out of API credit, so ChatGPT and
Gemini, the two engines that send us all our AI visitors, went unmeasured. The #1 action is to restore GitHub write
access for the Monday jobs. It takes Omer five minutes, and every other automated step depends on it.

GSC 28d pull 11-16 (10-17 → 11-14) vs pull 11-09 · weekly GSC by page W42–W46 (W46 = Nov 9–14, Nov 15 not yet in
GSC) · GA4 28d vs prior 28d plus weekly organic series W38–W46 · Vercel AI-crawler weeks W43–W46 · GEO: Claude and
Perplexity 52 questions × 2 runs on 11-16; ChatGPT and Gemini failed (credit) · URL Inspection API for INDEX-1 ·
previous report: `SEO/weekly-report-2026-11-09.md` + ledger PR #57 (v2.445)

> **Correction to the 11-09 report:** it says the Claude engine was "not run". It was re-run the same day after the
> credit top-up: core 40 named **3 / 3**, block E 4 / 6. And W45 was a full 15 clicks on `best-cad`, not 13 (the 13
> was 6 days).

---

## Scoreboard (GEO + CAD)

| Measure | 11-02 (run 1 / 2) | 11-09 (run 1 / 2) | **11-16 (run 1 / 2)** | Read |
|---|---|---|---|---|
| ChatGPT named in answer (core 40) | — / 10 | 5 / 5 | **not run** | ⚠️ OpenAI credit depleted |
| Gemini named in answer (core 40) | 7 / 8 | 2 / 5 | **not run** | ⚠️ Gemini prepay credit depleted |
| Perplexity named in answer (core 40) | 9 / 6 | 8 / 8 | **4 / 4** | 🟠 halved; CAD block retrieved 9 → 3 |
| Claude named in answer (core 40) | 2 / 2 | 3 / 3 | **5 / 5** | 🟢 third rise in a row, same in both runs |
| Block E: 12 Mexico buyer questions (per run) | 0 (pre-launch) | Claude 5 · Pplx 8.5 | **Claude 6 · Pplx 8** | 🟢 still our strongest block |
| `best-cad-dispatch-software` clicks / week (GSC) | W44: 8 | W45: **15** | **W46: 9** (6 days) | 🟠 gave back most of W45; position flat ~10.2 |
| Site clicks / week (GSC) | W44: 146 | W45: 180 | **W46: 151** (6 days) | 🟢 on pace for ~175, matching W45 |
| User-triggered AI fetches / week (Vercel) | W44: 63 | W45: 75 | **W46: 55** | ChatGPT-User 19 → **37**; Claude-User 56 → 18 |
| AI-referred sessions / week (GA4) | W44: 11 | W45: 13 | W46: 8 (in progress) | 🟢 last 3 complete weeks avg 11.0 vs 5.0 before |

## 1. Traffic

GA4, 28 days vs the prior 28.

| Channel | Sessions | Prior | Δ | Users | Sess/user | Bounce | Read |
|---|---|---|---|---|---|---|---|
| Direct | 2,385 | 1,700 | +40% | 2,249 | 1.06 | 87.2% | **bot signature**, excluded |
| Organic Search | 884 | 1,044 | −15% | 682 | 1.30 | 45.4% | **window artifact, not a decline** (below) |
| Referral | 121 | 104 | +16% | 99 | 1.22 | 63.6% | grupokabat.com 50, aocr.org 45 |
| AI Assistant | 40 | 29 | +38% | 33 | 1.21 | 40.0% | small base; series rising |
| Organic Social | 37 | 95 | −61% | 34 | 1.09 | 51.4% | small base; not read as a trend |
| Unassigned | 9 | 10 | — | 9 | 1.00 | 100% | bot signature |

**Organic "−15%" is the prior window's W40–W42 peak, not a fall.** Weekly GA4 organic:

| Week | W38 | W39 | W40 | W41 | W42 | W43 | W44 | W45 | **W46** |
|---|---|---|---|---|---|---|---|---|---|
| Sessions | 198 | 231 | 271 | 287 | 252 | 218 | 203 | 232 | **230** |
| Users | 157 | 178 | 203 | 222 | 184 | 173 | 160 | 189 | **201** |

The current window holds W43–W46. The prior one holds W39–W42, the peak. W46's **201 organic users** are back near
that peak (W40 203, W41 222) and up from 160 in W44, and GSC clicks over the same 28 days are flat (−0.9%). The Slack brief's
"Organic −15%, near critical" is a comparison artifact.

**AI Assistant by engine (28d):** chatgpt.com 20 · gemini.google.com 19 · perplexity.ai 1. ChatGPT and Gemini send
**97.5%** of our AI visitors, and those are the two engines the monitor could not measure today.

**Directory referrals:** none yet in W46 (G2, Capterra, GetApp, Software Advice went live 11-10). The free listings
carry no "Visit website" button (paid feature), so referral clicks were never the expected payoff. The payoff is
appearing in the sources that AI answers and Google's listicle results draw on (§3).

## 2. Search

| Metric | Now (28d) | Prior | Δ |
|---|---|---|---|
| Clicks | 631 | 637 | −0.9% |
| Impressions | 148,806 | 136,730 | +8.8% |
| CTR | 0.42% | 0.47% | — |
| Avg position | 11.1 | 10.8 | — |

Weekly site clicks W42–W46: 161 · 147 · 146 · **180** · 151 (6 days). Impressions growth is mostly the C5 and VMS
definition terms (§ opportunities): visibility without buyer intent.

**INDEX-1 resolved.** URL Inspection today: all five pages are **"Submitted and indexed"**. Google crawled each on
11-09 (10:24–10:28 UTC), the day of the requests. They are already earning impressions:

| Page | W46 impr | Pos | Clicks |
|---|---|---|---|
| `/resources/police-cad-software` | 392 | 36.0 | 1 |
| `/vs/zetron` | 82 | **5.1** | 1 |
| `/es/resources/fasp-2027-911-c5` | 20 | 3.2 | 0 |
| `/resources/fasp-2027-911-c5` | 9 | 3.4 | 0 |

**CAD-2, `best-cad-dispatch-software`:** W42–W46 clicks 10 · 7 · 8 · **15** · 9 (6 days); position 8.5 → 10.2,
unchanged since W43; CTR W46 0.40% (W44 0.34%, W45 0.53%). The 11-09 test was "hold ≥10 → close." It didn't hold
cleanly: 9 in 6 days is ~10.5 a week, so it's borderline. **Not closed.** The two levers the ledger named are now both
in motion (on-page 11-02, directory listings 11-10), so no further edits to the page; read W47–W48.

Police-intent queries: `best-cad` slipped 6.6 → 8.6 on "police cad …" (582 → 527 impr). The new `police-cad-software`
page ranks ~37 for them, alongside `public-safety-software-united-states` and `what-is-cad` at the same depth. Google
is testing three pages, which is normal for a page five days into the index. Re-check 11-30; nothing to do now
(9 internal links already point to it).

### Opportunities: ranked by score, intent-labelled

| # | Query | Pos | Impr | Qualified potential | Intent | Read |
|---|---|---|---|---|---|---|
| 1 | que es el c5 | 6.5 | 942 | 55 | informational | **refuted as a P0**, see below |
| 2 | c5 | 8.0 | 5,754 | **0** | navigational ⛔ | definition lookup; excluded by design |
| 3 | vms | 6.2 | 3,245 | **0** | acronym ⛔ | excluded by design (SCORER-2) |
| 4 | centro de mando | 6.1 | 254 | 14 | buyer | small |
| 5 | vms software | 12.6 | 987 | 15 | buyer | maintenance topic (VMS deprioritized 10-05) |
| 6 | que es el c5 en la policía | 5.0 | 339 | 18 | informational | GEO value only |
| 7 | video analytics software | 16.5 | 927 | 10 | buyer | maintenance topic |
| 12 | computer aided dispatch software | 13.4 | 454 | 3 | buyer | the CAD head term; directories own page 1 |

**Refuted: "C5-definition CTR fix" as the #1 action** (today's Slack brief, "~122 clicks"). The "what is a C5" queries land
on `how-c5-command-centers-work` (3,066 impr, position 6.5 → **6.0**) and `que-es-un-c5` (727 impr, 6.7 → 5.7): ~3,800
impressions for 2 clicks in four weeks. Position improved. Both pages' titles and metas have already been rewritten
for exactly this (CHANGELOG: `how-c5` "¿Qué es un C5? Significado…" title; `queEsUnC5` ES "C5-ES zero-click fix"),
and neither moved clicks. A definition lookup answered at the top of Google's page is the same class as `c5` and
`vms`: a third snippet rewrite would not change it. The brief's figure applies a standard CTR curve to a query whose
answer never needs a click.

**Zero-click page-1 block:** 33 of 68 page-one queries, 1,209 impressions; 16 improved position and still got 0. The block is
dominated by CCTV-analytics and ALPR terms (VMS maintenance topic) plus "911 center cad system sound effects"
(not our audience). No buyer-intent CAD query in it.

## 3. GEO

**Instrument this week:** Claude (web search) and Perplexity, 52 questions × 2 runs. ChatGPT and Gemini failed on
credit (OpenAI 429 "no credits remaining"; Gemini 402 "prepayment credits are depleted"); the monitor refused to write
partial runs, which is correct. "Named" = KabatOne recommended in the answer text; "retrieved" = a KabatOne URL in
the sources only (G10).

| Engine | Core 40 named (run 1 / 2) | CAD block D (of 15) | Block E (of 12) | CAD retrieved |
|---|---|---|---|---|
| Claude | **5 / 5** (11-09: 3 / 3) | 2 / 2 | 6 / 6 | 12 / 12 |
| Perplexity | **4 / 4** (11-09: 8 / 8) | 1 / 1 | 8 / 8 | **3 / 3** (11-09: 9 / 9) |

- **Claude is climbing** (core 2 → 3 → 5 over three weeks, identical in both runs each week). The 11-02 vendor-profile
  blocks (v2.429) are the only change in its retrieval set that lines up, but timing is not proof.
- **Perplexity dropped by half** on the English core, and the drop is in **retrieval**: it fetched our CAD pages for 3 of
  15 CAD questions vs 9 a week earlier. Perplexity-User fetches are 0 every week in Vercel, so it answers from its own
  index; PerplexityBot crawls fell 737 → 538. Watch one more week before acting; a one-week move of this size on
  Perplexity has reversed before (9 → 6 between runs on 11-02).
- **Spanish buyer questions (block E) stay strong on both engines** (6 and 8 of 12): the Mexico C5/911 content is
  doing its job.
- **Directory listings (GEO-5):** too new to show. None of G2/Capterra/SourceForge appears in this morning's answers.
  First fair read is 11-30, once the engines have recrawled.

**AI-1 closed:** AI-referred sessions, last 3 complete weeks 9 · 11 · 13 (avg 11.0) vs 4 · 7 · 4 before. The "halved"
alarm ended in W43.
**AI-2:** user-triggered fetches 75 → 55, but the mix flipped: ChatGPT-User **19 → 37** (recovering), Claude-User 56 → 18.
GA4 shows chatgpt.com sessions steady. Keep watching.

## 4. Plan

### P0 — this week

1. **Restore GitHub write access for the Monday jobs** *(Omer, 5 min; #1)*. This morning both jobs committed their
   data (traffic report, keyword snapshot, crawler snapshot, GEO snapshot) and then failed to push: "Permission to
   TomIdoVR/k1-website-.git denied to omercnaani". The active `gh` login on this Mac changed to `omercnaani` around
   11-11, and that account has no write access to the repo. Pick one:
   - **Recommended:** on GitHub, add `omercnaani` as a collaborator with Write on `TomIdoVR/k1-website-`. This fixes it
     permanently, and the app's Merge button works again.
   - Or run `gh auth switch --user TomIdoVR` on this Mac.

   Why it's #1: it is the dependency for everything automated. Until it's fixed, every Monday's data stays on this
   Mac, the cloud Slack brief reads last week's files, and each PR has to carry the stuck commits by hand (this one
   does). Runner-up was the API credits (#2), which restore one measurement; this restores all of them.
2. **Top up OpenAI and Gemini API credit** *(Omer, 5 min)*. ChatGPT + Gemini send 97.5% of our AI visitors and
   were unmeasured today. OpenAI: platform.openai.com → Billing. Gemini: AI Studio → Billing (prepay). Then I re-run
   both engines with `--engines openai,gemini --force` so 11-16 has all four.
3. **Ship this report** *(Claude, done in this PR)*. The PR also carries this morning's four stuck job commits.

### P1 — this month

4. **GEO-5 phase 2: editorial roundups** *(Omer / David Z)*. The self-serve directories are done. The rest of the
   source pages AI engines use for "best CAD software" are editorial (gitnux, zipdo, worldmetrics, wifitalents,
   civiciq, criticalcommunicationsreview). The pitch kit is ready (10-22 kit). This is outreach; it needs a human.
5. **YouTube: phone-verify the Kabat One channel and set the video to Public** *(Omer, 2 min)*. Verification makes
   the description link clickable; Public lets Google and AI engines index it.
6. **GovLaunch account** *(Omer)*, then I fill in the profile.
7. **CAD-2 / police-cad read on 11-30** *(Claude)*. No edits before then.

### P2 — backlog

8. Decisions still waiting: retire the OPS-1 mailer (7 weeks), PR #50, delete or ship the 9 stale branches (oldest
   208 days).
9. Spanish version of the K-Dispatch video for LATAM listings and `/es/` pages.
10. GEO-3 (11 weeks): `_BUYER` regex matching quoted academic queries. Low impact; keep it visible, not urgent.

## 5. Operations & health

| Signal | Value | |
|---|---|---|
| Monday GEO job (07:30) | ran; Claude + Perplexity recorded; ChatGPT + Gemini failed (credit) | ⚠️ |
| Monday weekly job (08:07) | ran; report + snapshots committed; **push rejected (403)** | 🔴 |
| Local commits not on GitHub | 4 (job commits), carried in this PR | ⚠️ |
| Production | v2.445 (PR #57, 11-13) | ✅ |
| Striking distance (pos 5–15) | 131 | |
| Canonical sweep | clean | ✅ |
| Stale branches | 9, all > 7 days | ⚠️ |
| Master plan age | 34 days | ⚠️ stale; CHANGELOG + ledger are current |

## 6. Housekeeping

**Shipped since 11-09:** directory listings live 11-10 (G2 fixed, Capterra, GetApp, Software Advice, video), SOC 2 and
unverified claims removed from G2, SourceForge and FeaturedCustomers submitted (v2.445 ledger); indexing requests 11-09
→ all five pages indexed.

**Refuted with evidence:** "Organic −15%, near critical" (window artifact, §1) · "C5-definition CTR fix" as P0 (third
rewrite of a definition snippet, §2) · AI-1 "AI referrals halved" (series rising, §3).

**Carry-over** (`SEO/carry-over.md` updated in this commit):

| Item | Owner | Weeks | Status |
|---|---|---|---|
| OPS-3 (new): Monday jobs can't push (403) | Omer | 0 | open; P0 #1 |
| OPS-4 (new): OpenAI + Gemini credit depleted | Omer | 0 | open; P0 #2 |
| AUTH-1: backlink / authority program | Omer | 17 🔴 | blocked |
| GEO-3: `_BUYER` quoted-literal queries | Claude | 11 🔴 | open, low impact |
| OPS-1: `seo-mailer` crashes every run | Claude | 7 🔴 | waiting on retire decision |
| PIPE-3: cloud Slack routine can't push | Claude | 7 🔴 | watching; now also blocked by OPS-3 |
| GEO-5: third-party CAD list pages | Omer | 6 🔴 | directories done; roundups next |
| CAD-2: `best-cad` clicks | Claude | 2 | watching; read 11-30 |
| AI-2: user-triggered AI fetches | Claude | 1 | watching |
| INDEX-1 | — | — | **closed** (all five indexed) |
| AI-1 | — | — | **closed** (AI referrals rising) |
