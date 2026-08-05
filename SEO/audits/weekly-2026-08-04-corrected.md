# KabatOne — Weekly SEO Brief (CORRECTED)
**Period:** 2026-07-07 → 2026-08-03 (28 days)
**Supersedes:** `weekly-2026-08-04.md` — Sections 2 and 4 of that brief were wrong.

---

## What changed and why

The original brief led with **"CTR is flat at 0.49% — title and meta optimization is the lever"** and built a
four-item P0 list on top of it. Attempting to execute that plan surfaced two facts that invalidate it.

**1. All the titles it proposed rewriting had already been rewritten — on 2026-07-06, one day before this
measurement window opened.**

| Page | Title last changed | Commit |
|---|---|---|
| `/vs/peregrine/` | 2026-07-06 | `7aaca2f` — "Peregrine CTR fix" (v2.255) |
| `/resources/best-cad-dispatch-software/` | 2026-07-06 | `681123e` — "Aggressive non-branded organic CTR optimization" (v2.253) |
| `/es/resources/how-c5-command-centers-work/` | 2026-07-06 | `681123e` (v2.253) |

Production (`main`) carried these the same day. So the entire 28-day window already measured the new titles,
and CTR moved **0.00pp**. The title hypothesis was tested and it failed. Re-running it would have burned
another month.

**2. A large share of impressions is not human.**

| Query | Impr | Clicks | Pos | Desktop | Countries |
|---|---|---|---|---|---|
| computer automated dispatch software | 1,186 | **0** | 6.9 | 99.8% | usa, gbr, nld, deu, ita, hkg |
| peregrine.ai analytics reporting dashboards | 956 | **0** | 3.7 | 100% | usa, gbr, nld, deu, ita, hkg |
| best fire computer aided dispatch software | 914 | **0** | 5.4 | 99.9% | usa, gbr, nld, deu, ita, hkg |

Three unrelated queries, an identical six-country fingerprint, ~100% desktop, and zero clicks at positions
3.7–6.9. Zero clicks on 956 impressions at position 3.7 is not something a real blue-link result does. This is
automated rank tracking — a competitor, an agency, or an SEO tool polling these exact terms.

The real query `c5` looks nothing like it: Mexico-dominant, mobile-majority (3,969 mobile vs 1,415 desktop),
and it converts.

---

## 1. Search — corrected

**Site-wide: 427 clicks / 87,954 impressions / 0.49% CTR / pos 13.5.** That headline is not steerable. Split
by market it resolves:

| Market | Impressions | Clicks | CTR | Avg pos |
|---|---|---|---|---|
| **Target market (LATAM + Spain)** | **13,392** | **179** | **1.34%** | — |
| Mexico | 7,741 | 98 | 1.27% | 8.2 |
| Peru | 1,081 | 18 | 1.67% | 6.2 |
| Panama | 311 | 17 | 5.47% | 8.2 |
| Spain | 1,020 | 15 | 1.47% | 12.7 |
| **United States** | **53,311** | **77** | **0.14%** | 14.8 |

**The US is 61% of impressions and 18% of clicks. 1,716 of 1,725 US queries earned zero clicks in 28 days** —
nine queries in the entire country produced a click. Meanwhile the target market runs at **1.34% CTR**, 2.7×
the reported site figure, and delivers 42% of all clicks from 15% of impressions.

**The correct KPI is target-market CTR (1.34%), not site CTR (0.49%).** The site number will keep looking
broken no matter what is shipped, because its denominator is mostly robots.

---

## 2. Why the individual P0s were dropped

| Original P0 | Verdict |
|---|---|
| Fix "c5" CTR — worth ~203 clicks | **Illusory.** In Mexico "C5" is the *government agency* (Centro de Comando, Control, Cómputo, Comunicaciones y Contacto Ciudadano). Those 4,273 Mexican impressions are navigational — people want a phone number or camera feed. A vendor guide cannot win that intent and shouldn't try. Note Argentina converts the same page at 2.00% and Colombia at 0.68%, at comparable positions — the intent differs by country, not the title. |
| Fix "peregrine.ai analytics reporting dashboards" | **Invalid.** The title is already an exact match: *"Peregrine.ai Analytics & Reporting Dashboards vs KabatOne [2026]"*, and the description repeats the phrase verbatim. All 956 impressions are synthetic. |
| Investigate "computer automated dispatch software" | **Invalid.** Synthetic. And `/resources/best-cad-dispatch-software/` draws 9,635 US impressions → 8 clicks (0.08%) with essentially no LATAM traffic. The page's audience is not the buyer. |
| Push new GEO pages to the monitor | **Valid — executed, see §3.** |

---

## 3. GEO — checked this week

- **Genetec alternatives — WIN.** KabatOne is now cited by name in AI results for "Genetec alternatives for
  public safety", described accurately (K-Video unifying video, AI analytics, CAD/dispatch and GIS for the
  multi-agency C5 model), and `/resources/genetec-alternatives` appears in the source set alongside G2 and
  Acre Security. This closes one of the five standing citation gaps. **8/12.**
- **NG911 — PRESENT, NOT WINNING.** `/resources/best-ng911-software/` (v2.281) *is* in the retrieved source
  set, and K-Dispatch is described — but under "Unified / CAD-Integrated Options", a secondary bucket. The
  headline recommendations belong to Motorola VESTA 911, Intrado Viper, Tyler New World and Motorola
  PremierOne, all call-handling/ESInet incumbents. So the page is indexed and citable; it simply does not
  contest the framing the query resolves to. Fix is positioning, not visibility.

AI Assistant channel remains the live read on this work: **56 sessions, +120%** (chatgpt.com 37, gemini 13,
perplexity 4).

---

## 4. Plan — revised

### P0 — this week

1. **Stop steering on site-wide CTR.** Done in code this commit: `scripts/weekly_brief.py` now emits
   `target_market` (LATAM + Spain), `by_country`, and a `synthetic` block. Every future brief leads with
   1.34%, not 0.49%.
2. **Identify who is polling the SERP.** Three queries, one fingerprint, ~3,000 impressions/month. If it is a
   competitor's monitoring, the terms they watch tell us what they think we threaten them on — that list is
   worth more than the CTR it distorted.
3. **Re-frame `/resources/best-ng911-software/`.** It is losing to call-handling incumbents because it does
   not contest their framing. Either position explicitly against VESTA/ESInet call handling, or retarget to a
   variant with a less entrenched citation set.

### P1 — this month

4. **Decide whether the English resources hub is worth its cost.** `/resources/best-cad-dispatch-software/`
   carries 26,507 impressions and 49 clicks, almost all US. If the US is not a market, that content is
   generating an expensive, misleading vanity metric. If it *is* a market, nothing on the site currently
   converts there and that is the strategic finding.
5. **Spanish-language priority.** Every market that actually converts is Spanish-speaking. The ES pages
   deserve the optimization effort that has been going to EN pages.
6. **Key events = 4 across all channels.** Conversion tracking is reporting essentially nothing. Until this is
   fixed, no traffic number can be tied to a pipeline outcome. Highest-value fix on this list.
7. **Unassigned +340% (44 sessions)** — still unexplained, still worth 20 minutes in GA4.

### P2 — backlog

- Video/VMS cluster: 26,049 impressions, 25 clicks. Check the country split before investing — this may be
  the same US pattern.
- Off-site authority pack (`SEO/authority/`) — GovTech, Mexico Business News. Unblocked, needs a human.
- Wikipedia PSIM edit (GEO-009) — needs a verifiable third-party source.

---

## Method note

The synthetic filter is deliberately conservative — `clicks=0, impressions≥150, position≤10,
desktop_share≥0.95`. On this window it removes exactly three queries (3,056 impressions, 3.5% of the total)
and nothing legitimate. It is not sufficient to correct the headline CTR, because the contamination's mass
sits in a long tail of small zero-click US queries where no per-query test can separate robots from bad
luck. That is what the market segmentation is for: it needs no heuristic at all.
