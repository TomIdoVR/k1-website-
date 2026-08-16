# Longtail CTR Sprint — plan (scoped 2026-07-13)

**Thesis:** Stop grinding head terms (`c5`, `vms`, `video analytics`) against Genetec/Milestone-class
domains. Fight for the **longtail striking-distance stack** instead — it's ~2× the click prize and
actually winnable.

## The numbers (GSC live pull, 28d ending 2026-07-11)

| Metric | Value |
|---|---|
| Non-branded organic clicks | 56 (+300% MoM) — now **31% of organic clicks** (was 9%) |
| Non-branded impressions | 48,159 (+79%) at avg pos **17** (page 2) |
| Longtail striking-distance pool (3+ words, pos 4–15, ≥15 impr) | **198 queries, 13,098 impr** |
| Modeled uplift if pushed to ~top-3 | **~+1,425 clicks/mo** |
| Head-term prize (5 terms → top-5) | ~+692 clicks/mo (high effort) |

**Key insight:** most of the winnable longtail sits at **pos ~8 with 0.0% CTR** — they're already on
page 1. The problem is the *click* (AI Overview / weak snippet), not the ranking. That makes the
cheapest lever — title/meta/FAQ-schema tuning to beat the AIO — the right first move.

## Three clusters (in priority order)

### 1. CAD / Dispatch — biggest & most winnable  ← START HERE (v2.271 begun)
Queries (pos ~8, 0% CTR unless noted): `computer aided dispatch software` (380 impr, 11.4),
`public safety call taking systems` (249, 8.1), `computer automated dispatch software` (192, 8.1),
`emergency dispatch software` (153, 14.1), `cad dispatch software` (150, 13.8), `police cad systems`
(131, 9.3), `911 dispatch software` (128, 9.3), `best fire computer aided dispatch software` (1,063, 6.3).
- **Landing page:** `/resources/best-cad-dispatch-software/`
- **Action (started v2.271):** exact-match variant FAQs added (police CAD, 911 dispatch, computer
  automated dispatch, call-taking). **Remaining:** meta/title CTR pass; add `emergency-dispatch-software`
  + `police-cad-systems` as thin spokes if variants don't lift within 3–4 weeks.

### 2. C5 · ES — AI Overview eating the click
`que es el c5` (448, 8.5), `que es c5` (301, 8.8), `c5 que es` (291, 8.5), `que significa c5` (175, 7.9),
`que es el c5 en la policía` (141, 8.0). All near-0 CTR.
- **Landing page:** `/es/resources/que-es-un-c5/`
- **Action (started v2.270):** title+meta rewritten to open a curiosity gap the AIO can't satisfy +
  "qué quiere decir" variant. **Remaining:** monitor CTR 2–3 wks; if flat, test an FAQ-rich-result
  play (the AIO is likely pulling a competitor snippet — win the snippet).

### 3. Video / VMS
`ai-powered video analytics` (1,275, 8.6), `real time video analytics` (152, 13.7), `vms software for
cctv` (157, 14.5), `video analytics machine learning` (147, 8.3), `what is vms software` (141, 11.6),
`video analytics system` (157, 13.8).
- **Landing pages:** `/resources/what-is-video-management-software/`, `/resources/what-is-video-analytics/`
- **Action (started v2.270):** "CCTV video management system" FAQ added. **Remaining:** FAQs for
  "real time video analytics" + "video analytics machine learning" (both pos ~8–14, 0% coverage).

## Sequencing
1. **Week 1 (now, v2.271):** CAD variant FAQs ✅ + CAD meta/title CTR pass.
2. **Week 2:** Video/VMS variant FAQs; C5-ES snippet check (measure v2.270 first).
3. **Week 3:** Measure CTR movement on the pos-8 cohort; for any still at 0% CTR after snippet work,
   build a thin exact-match spoke (proven play — VMS recovered 34→10 via spokes).
4. **Ongoing:** re-pull GSC weekly; promote any new query crossing into pos 4–15 into the stack.

## Guardrails
- No new country/geo pages (halted v2.266). Longtail here = product/concept queries, not locations.
- Don't touch branded — `kabatone`/`kabat one` already rank #1 at 47% CTR; brand demand is flat.
- All work on `nextjs`; commit locally; no push without explicit owner approval (post-2026-07-02 rule).

## Source
`SEO/audits/traffic-branded-2026-07-13.html` (dashboard) · GSC API live pull · position→CTR uplift model.
