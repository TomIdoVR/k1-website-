# KabatOne Weekly SEO + GEO — 2026-09-01

**Focus:** The C5 pages have been stating a wrong definition of what a C5 is — that is why the
definitional AI answer has never cited us, and it is now fixed (v2.347).

> Scope note: the last full report was **yesterday** (2026-08-31). This is a one-day delta, so
> §1–§2 are continuity only. The week's real content is §3 and §4.

## 1. Traffic — continuity only, one-day delta

| Channel | Sessions | Prior | Δ | Users | S/U | Bounce | Read |
|---|---|---|---|---|---|---|---|
| Direct | 2,301 | 1,816 | +27% | 2,085 | 1.1 | 71.4% | **Bot signature — exclude** |
| Organic Search | 937 | 856 | +10% | 679 | 1.38 | 52.2% | Healthy |
| Referral | 87 | 102 | −15% | 57 | 1.53 | 48.3% | Small base — not a decline |
| AI Assistant | 50 | 56 | −11% | 37 | 1.35 | 42.0% | Small base — **see below** |
| Unassigned | 49 | 9 | +444% | 48 | 1.02 | 100.0% | **Bot signature — exclude** |

**AI Assistant is flat, not declining.** 13-week series: 2 · 8 · 8 · 5 · 12 · 17 · 14 · 14 · 10
· 16 · 10 · 10 · *5\**. Last 3 complete weeks average **12.0** vs prior 3 at **12.7**. The
28-day −11% is not a trend on this base (G9). By engine: chatgpt.com 33 (64.7%),
gemini.google.com 14 (27.5%), claude.ai 2, duck.ai 1, perplexity.ai 1.

*\*week in progress, excluded from the trend.*

## 2. Search — no movers, zero-click block unchanged

Clicks 531 (−1.7%), impressions 106,355 (−3.1%), avg position 13.3 (flat), CTR 0.5%.
**Movers ≥1.5 positions: zero, both directions.** One day is not enough to move anything.

**Zero-click page-1 block: 35 of 62 queries, 2,002 impressions.** 9 of them improved position
and still returned zero — visibility is ruled out, this is SERP-feature absorption.

Top opportunities, intent-labelled:

| # | Query | Pos | Impr | Qualified potential | Intent |
|---|---|---|---|---|---|
| 1 | best fire computer aided dispatch software | 6.4 | 647 | 38 | buyer |
| 2 | vms software | 11.3 | 1,452 | 29 | buyer |
| 3 | c5 | 8.5 | 5,181 | **0** | **navigational ⛔** |
| 4 | cctv video analytics | 12.4 | 565 | 13 | buyer |
| 5 | 911 dispatch software | 9.8 | 144 | 5 | buyer |

⛔ `c5` is navigational — CDMX residents looking for the actual agency. Its raw potential
figure is not an opportunity and must never be headlined (G8). This matters this week
specifically, because §3 is also about C5 and the two must not be conflated.

## 3. GEO — the finding

Last run **2026-08-31**, 27/37 cited (73.0%). Complete-run trend: 41.7% (07-07) → 83.3%
(08-28) → 73.0% (08-31). The apparent drop is **the instrument getting honest**, not a
regression: v2.342 retargeted the query set from 12 queries we already won to 25 including the
zero-click block.

**`What is a C5 command center?` has been uncited in every run since the July baseline.**
v2.274 already applied the standard remedy — a brand-anchored definition callout on that exact
page — and it did not flip. Auditing the page against C5 vocabulary this week explains why, and
it is not a depth problem:

**Every C5 page said the fifth C is *Calidad* / Quality. The fifth C is *Contacto Ciudadano*.**

The canonical source is the institution the model is named after — Mexico City's *Centro de
Comando, Control, Cómputo, Comunicaciones y Contacto Ciudadano* (`c5.cdmx.gob.mx`). No state
government source uses "Calidad". Naming does vary by state (Jalisco leads with *Coordinación*;
Sonora, Michoacán and Edomex run as **C5i**, *i* = *Inteligencia*) — but "Quality" was not a
variant, it was wrong. It appeared **20 times across 5 pages, both locales, FAQPage schema,
meta descriptions and `llms.txt`** — the surfaces AI engines read most directly.

An answer engine will not cite a page whose definition contradicts the government body that
owns the term. The error was also **propagating**: a live web search run during this work
returned an AI summary asserting the "Quality" definition with kabatone.com in the result set.
We were in the retrieved source set and losing the citation anyway.

**This is the opposite of AUTH-2 (v2.344),** where the page was already correct and complete and
the constraint was authority. Same external symptom — we rank, we are not cited — opposite
action. Deciding which one you have before writing is the whole discipline.

**Shipped as v2.347** with the substance the definitional query actually wants: the C2 → C4 →
C5 → C5i ladder framed as institutional scope rather than a technology tier, and the 089
anonymous tip line and street panic buttons as real incident entry points alongside 911. No
KabatOne capability was invented.

**Still open GEO gaps after v2.342–v2.347:**

| Query | Status | Read |
|---|---|---|
| `What is a C5 command center?` | fixed, awaiting re-crawl | **GEO-4**, this week's action |
| `best fire computer aided dispatch software` | fixed v2.343, awaiting re-crawl | Test pending |
| `AI VMS software for security operations` | fixed v2.344, awaiting re-crawl | Test pending |
| `analytic CCTV cameras for city surveillance` | fixed v2.344, awaiting re-crawl | Test pending |
| `911 dispatch software for emergency call centers` | **not a content gap** | AUTH-2 — authority |
| `What is AI video analytics?` | **not a content gap** | Page already covers definition, IVA, accuracy, rules-vs-AI, existing cameras. AUTH pattern. |

That last row is a **new refutation this week.** The obvious move was to write an answer-first
block for it, as v2.343/v2.344 did for the others. Auditing the page first showed the content is
already there. Logging it rather than writing it.

## 4. Plan

**P0 — this week (one item):** nothing further on C5 content. v2.347 is a hypothesis with a
defined test. Re-run `track_geo.py` once it reaches production and check whether the query flips
from absent to cited. **Citation is the metric, not rank.** Writing more C5 content before that
result lands is exactly the motion v2.344 warned about.

**P1 — this month:** AUTH-2 has now grown to *two* named queries where content is proven not to
be the constraint (911-call-centers, AI-video-analytics). That is no longer a general backlink
ask — it is a specific target list. **Owner: Omer** (budget + outreach).

**P2 — backlog:** GEO-2 (split `cited` into `named_in_answer` vs `in_source_set`), GEO-3
(quoted-literal detector in `query_intent`), STATE-1 (stale banner in SEO-PROGRAM-STATE.md).

## 5. Operations

- **Branches remain DIVERGED.** `nextjs` +32 over `main`; `main` **+165** over `nextjs` at a
  higher version (prod v2.376 vs staging v2.347). 32 source files changed on both sides. Route
  to production is a **PR cut from `main`**, never a merge of `nextjs` (G12).
- v2.347 is committed to local `nextjs`, **not pushed** — awaiting approval.
- Country pages 142 vs guardrail 121 (21 over). Master plan 19d stale.
- Canonical sweep clean. Striking distance 101 queries.

## 6. Housekeeping

**Shipped:** v2.345/v2.346 (audit coverage denominator + its inert guard), **v2.347** (C5
definition).

**Refuted with evidence this week:** writing an answer-first block for
`What is AI video analytics?` — page already covers it; this is authority, not content.

**Carry-over, aged:**

| Item | Owner | Weeks | Status |
|---|---|---|---|
| AUTH-1 — backlink / authority program | Omer | **6** | 🔴 blocked, has not moved |
| KAB-1721 — Track C escalation, flagship VMS pages | Claude | **5** | 🔴 open, has not moved |
| AUTH-2 — named-query authority targets | Omer | 0 | blocked |
| CAD-1 · MIGRATE-1 · GEO-2 · GEO-3 · STATE-1 | Claude | 0 | open / watching |
| GEO-4 — C5 definition fix, awaiting re-crawl | Claude | 0 | watching (new) |
| ~~GEO-1 — ES + PT GEO queries~~ | — | — | **Closed, shipped v2.342** |

AUTH-1 at six weeks and KAB-1721 at five are both stated plainly as not moved. AUTH-1 is
genuinely blocked on a human; KAB-1721 is not blocked and has simply not been executed.
