# KabatOne Weekly SEO + GEO — 2026-10-12

**Focus:** Search improved for a second week. AI is the problem: **AI-referred visits halved for two
straight weeks** (5 and 6, against 11–16), and AI answers still name us in only **3 of 40**. The two
levers are both outside the codebase, and neither has visibly moved. One is getting K-Dispatch onto the
third-party lists AI engines read. The other is measuring ChatGPT. Everything that could be shipped from
the codebase is on one branch, waiting on a PR.

GSC 28d `09-13 → 10-10` vs `09-06 → 10-03` · GA4 28d vs prior · GEO: Claude, 40 queries, complete
(new instrument, run by hand from the branch) · previous report `weekly-report-2026-10-05.md`

---

## Scoreboard (GEO + CAD, set 10-05)

| Measure | 10-05 | **10-12** | Read |
|---|---|---|---|
| CAD questions that name us (Claude, block D) | 1 / 15 | **1 / 15** | flat. Only the Mexico C5/911 query names us |
| All questions that name us (Claude) | 3 / 40 | **3 / 40** | flat; the set rotated (below) |
| Named or retrieved | 34 / 40 | 33 / 40 | flat. We are read, not recommended |
| AI-referred sessions, weekly | W40: 4 | **W41: 6** (GA4 by source) | 🔴 second low week (see §1) |
| CAD search clicks (cluster, 28d) | 11 | **9** | small base; see CAD-1 verdict |
| ChatGPT / Perplexity named rate | — | — | not measured: no keys (GEO-6) |

## 1. Traffic

| Channel | Sessions | Prior | Δ | Users | S/U | Read |
|---|---|---|---|---|---|---|
| Direct | 1,697 | 1,950 | −13% | 1,563 | 1.09 | ⚠️ bot signature, excluded |
| **Organic Search** | **986** | 1,015 | −3% | 719 | 1.37 | flat; bounce 49% |
| Organic Social | 92 | 13 | — | 63 | 1.46 | small base; LinkedIn |
| Referral | 80 | 97 | −18% | 48 | 1.67 | small base |
| **AI Assistant** | **37** | 50 | −26% | 24 | 1.54 | 🔴 see below |

**AI Assistant: a real drop, cause not yet known.** Weekly sessions, from GA4 by source:

| ISO week | Total | ChatGPT | Gemini | Other |
|---|---|---|---|---|
| W34–W39 (6 weeks) | 11–16 | 7–10 | 1–7 | 0–3 |
| **W40** (09-28) | **5** | 3 | 2 | 0 |
| **W41** (10-05) | **6** | 5 | 1 | 0 |

- On a base averaging ~13 a week, each of these two weeks has about a 2–3% chance of being random. Two in a row is a
  real decline, not noise (G9). Last week I called W40 a watch item and set "below 8 again" as the trigger. It was.
- **Not misclassification:** every `chatgpt.com` session is in the AI channel.
- **Not our site, most likely.** A referral is counted when the visitor arrives, before any page renders. So the homepage
  motion launch (09-28/29, the same week) can't reduce the count unless the GA4 tag stopped firing, and total GA4
  sessions are normal. That points to the engines linking to us less. **I can't confirm it:** the one engine that
  sends most of this traffic, ChatGPT, is the one we don't measure (GEO-6).

## 2. Search

| Metric | Now | Prior | Δ |
|---|---|---|---|
| Clicks | **600** | 573 | +4.7% |
| Impressions | 109,783 | 109,954 | flat |
| CTR | 0.55% | 0.52% | up |
| Avg position | **10.7** | 11.6 | improved |

Clicks are up and position improved, on flat impressions. That's healthy, and the second good week in a row.
Movers up: *computer aided dispatch software* 11.4 → 9.9, *computer aided dispatch software companies* 12.9 → 11.2,
*911 call center software* 14.7 → 12.3. Page mover: `/es/resources/what-is-emergency-dispatch-software` 8.7 → 7.2.
Zero-click page-1: 30 of 68 (was 31 of 61). 16 improved and are still at zero, so it's the AI-Overview pattern, unchanged.

### CAD-1 verdict (due today): no measurable win on clicks

| Pull | `best-cad-dispatch-software` | CAD cluster |
|---|---|---|
| 09-22 (baseline) | 56c / 20.4k impr / p9.4 | 12c / 1,521i / 0.79% |
| 09-28 | 59c / 19.6k / p9.1 | — |
| 10-05 | 56c / 17.7k / p8.8 | 11c / 1,366i / 0.81% |
| **10-12** | **59c / 16.0k / p8.5** | **9c / 1,096i / 0.82%** |

Re-pointing the internal links (PR #18) moved the page up three weeks running, 9.4 → 8.5, and its CTR rose
0.27% → 0.37%. **Clicks didn't move.** The cluster's clicks are 9–12 on every read, which is too small a base to tell a
3-click change from noise. Verdict: **position improved, business outcome unproven.** Closed. No further link
work on CAD; the lever is GEO-5.

### Opportunities (score-ranked, intent-labelled)

| Query | Pos | Impr | Qualified potential | Intent | Read |
|---|---|---|---|---|---|
| vms | 7.9 | 3,182 | 117 | buyer ⚠️ disputed | maintenance (video); PR #23 under measurement |
| cctv video analytics | 4.6 | 455 | 34 | buyer | AI-Overview block |
| **computer aided dispatch software** | **9.9** | 273 | 9 | buyer | **CAD, moving up** (11.4 → 9.9) |
| rtcc | 8.0 | 714 | 27 | buyer | new in the table |
| c5 | 8.2 | 3,479 | 0 | navigational ⛔ | never a click play |
| public safety software | 8.6 | 431 | 15 | buyer | — |

## 3. GEO (Claude, new instrument: named vs retrieved)

| Block | Named 10-05 | **Named 10-12** | Retrieved or named 10-12 |
|---|---|---|---|
| A · original | 1 / 12 | **2 / 12** | 11 / 12 |
| B · zero-click | 0 / 7 | 0 / 7 | 5 / 7 |
| C · ES / PT | 1 / 6 | **0 / 6** | 4 / 6 |
| D · CAD | 1 / 15 | 1 / 15 | 12 / 15 |

- **Named this week:** *public safety software for Mexico and Latin America* (both weeks) ·
  *software de despacho para centros C5 y 911 en México* (both weeks) · *Genetec alternatives for public safety* (new).
- **Lost:** *¿Qué es un centro de mando y control C5?* went from named to source-only. With one sample per week, a single
  query flipping is noise. The two queries that held both weeks are the signal: **we're named when the question is Mexico-specific.**
- **GEO-4 (C5 definition): second week source-only.** The rule was "N on 10-12 and 10-19 → refuted". One more week.
- **Legacy trend** (`geo-history.csv`, retrieved-or-named): 76% in the scheduled 07:30 run, which used the old script.
  It's kept for continuity and no longer the headline.
- **The scheduled job still runs the old script.** It runs from the OneDrive checkout on `nextjs`, and the new
  instrument lives only on the unmerged branch. That's why I ran this week's split by hand. It fixes itself once the PR merges and PIPE-2
  points the jobs at `~/dev/k1-website`.

## 4. Plan

### P0 — this week

**#1 — Start the third-party listings (GEO-5).** *Owner: David Z, with Omer. Effort: the four self-serve
directories take about a day. Week 1 of 3.*
The target list was delivered 10-05 (`SEO/geo/cad-third-party-targets-2026-10-05.md`). I **can't tell whether it has
started.** The directories block automated checks (403), and there's no task for it in Second Brain. Omer: has it gone to
David? If not, the first step is G2, SourceForge/Slashdot, FeaturedCustomers and GovLaunch. None of them needs a gatekeeper.
**Why #1:** two weeks of data now agree. We're retrieved for 33 of 40 questions and named for 3. Nothing left on our
own site moves that number.

**#2 — Add the OpenAI and Perplexity keys (GEO-6).** *Owner: Omer. 5 minutes. Week 1.*
Before this week this was "nice to have". Now it's how we find out why AI traffic halved: ChatGPT is 5 of the 6 sessions.
Instructions are at the end of this report.

**#3 — Merge the PR for this branch.** *Owner: Omer to approve → Claude pushes, opens the PR, verifies live.*
Branch `seo/weekly-2026-10-05`, cut from `main`. It holds 6 commits (v2.411–v2.414, including this report): the diff-script fix, the bot denylist, the new GEO
instrument + CAD queries, `llms.txt` and schema led by K-Dispatch, the "Short answer" blocks on six CAD comparison
pages, and **the homepage led by K-Dispatch** (v2.413). Build passes; all page changes were rendered locally in EN and ES.
**None of it is live.** Until it merges, the homepage change and the AI-crawler changes can't affect the scoreboard.

### P1 — this month
1. **PIPE-2:** point `seo-weekly` and `seo-geo` at `~/dev/k1-website` *(needs Omer's OK to edit LaunchAgents)*.
   It's now blocking the GEO measurement, not just commits.
2. **OPS-2:** confirm Anthropic auto-reload is on (console.anthropic.com → Billing). Still unconfirmed.
3. **BRANCH-1:** retire `nextjs` *(Omer)*.

### P2 — backlog
Video/VMS maintenance · SCORER-2 · GEO-3 · OPS-1 · PIPE-3.

## 5. Operations

| Signal | Status |
|---|---|
| Branches | diverged: `nextjs` 56 ahead, `main` 198 ahead (v2.410 live) |
| Unmerged SEO branch | `seo/weekly-2026-10-05`, 6 commits, v2.411–v2.414, not pushed |
| Production pushes this week | 0 |
| GEO scheduled run | ✅ ran 07:30 with credit, but on the old script (legacy % only) |
| Striking distance (pos 5–15) | 99 (was 89) |
| Canonical sweep | 0 issues |

## 6. Housekeeping

**Closed:** CAD-1 (verdict above).
**Corrected:** nothing from last week's report needed correcting.

| id | item | owner | weeks | status |
|---|---|---|---|---|
| GEO-5 | Third-party CAD listings | David Z / Omer | 1 | P0 #1, **start unverified** |
| GEO-6 | OpenAI + Perplexity keys | Omer | 1 | P0 #2 |
| AI-1 | AI referrals halved, W40–W41 | Claude | 0 | new, needs GEO-6 to diagnose |
| GEO-4 | C5 answer uses our definition? | Claude | 6 | source-only 2 weeks; refuted if N on 10-19 |
| PIPE-2 | Jobs on the OneDrive checkout | Claude | 2 | P1, now blocks GEO measurement |
| OPS-2 | Anthropic auto-reload | Omer | 1 | unconfirmed |
| BRANCH-1 | Retire `nextjs` | Omer | 1 | decision |
| AUTH-1 | Authority program | Omer | 12 | blocked by design |

---

### How to get the API keys (GEO-6)

**OpenAI (measures ChatGPT):**
1. Go to **platform.openai.com** and sign in. A ChatGPT login works, but the API is billed separately from a ChatGPT subscription.
2. **Settings → Billing → Add payment method**, then add a small prepaid credit, e.g. $10. Turn on auto-recharge so it doesn't
   run dry the way the Anthropic key did.
3. **API keys → Create new secret key.** Name it `kabatone-geo`. Copy it; it's shown only once.

**Perplexity:**
1. Go to **perplexity.ai → Settings → API** (or docs.perplexity.ai → API portal) and sign in.
2. Add a payment method and buy credits, e.g. $5. Enable auto top-up.
3. **Generate API key**, and copy it.

**Then, on your Mac** (paste each key between the quotes; don't paste keys into chat):
```bash
printf '%s' 'PASTE-OPENAI-KEY' > ~/.config/claude-seo/openai-api-key
printf '%s' 'PASTE-PERPLEXITY-KEY' > ~/.config/claude-seo/perplexity-api-key
chmod 600 ~/.config/claude-seo/*-api-key
```
Cost at 40 queries a week: about $1–2 for both. Tell me when they're in, and I'll run all three engines and report.
