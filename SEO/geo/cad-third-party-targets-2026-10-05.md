# K-Dispatch third-party target list (GEO-5) — 2026-10-05

**Why this list exists:** with "named" split from "retrieved" (v2.412), Claude names KabatOne in 3 of 40
answers but retrieves our pages in 34. On CAD questions, the vendor recommendations are assembled from
third-party "best CAD software" pages. **KabatOne appears on none of the 22 most-used ones.** Where our own
pages dominate the sources (Mexico C5/911), K-Dispatch is recommended first.

**Method:** 19 CAD questions (block D plus 4 CAD queries from A/B) asked to Claude with web search.
Every source URL was tallied by how many distinct questions used it, then each top page was fetched and checked for
"KabatOne" / "K-Dispatch". One run, one engine: re-run with OpenAI and Perplexity once their keys exist,
since ChatGPT's source set may differ.

## Tier 1: reachable, used by the most answers

| Used in | Site | Page | Type | Route in |
|---|---|---|---|---|
| 12 q (domain) | gitnux.org | `/best/911-cad-software/` | market-research list | Editorial: vendor correction / inclusion request |
| 11 q | devopsschool.com · bestdevops.com · scmgalaxy.com | "Top 10 Public Safety Dispatch CAD Systems" (same article, 3 sites) | syndicated listicle | One pitch to the author covers all three |
| 10 q (domain) | criticalcommunicationsreview.com | "911 CAD software in 2025: key…" | **trade media** | PR / contributed article. Highest credibility on the list |
| 9 q (domain) | wifitalents.com | `/best/911-cad-software/` | list network | Same network shape as gitnux / zipdo / worldmetrics, so try one contact for all four |
| 7 q (domain) | zipdo.co | `/best/911-cad-software/`, `/best/911-call-center-software/` | list network | as above |
| 6 q (domain) | worldmetrics.org | `/best/911-call-center-software/`, `/best/fire-dispatching-software/` | list network | as above. **The fire page is the "best fire CAD" query we lose** |
| 6 q | slashdot.org · sourceforge.net | `/software/computer-aided-dispatch/` | software directory | **Self-serve vendor listing**: free profile |
| 5 q | researchandmarkets.com | "Key companies in computer aided dispatch" | analyst | Pitch for inclusion in the next CAD market report |
| 3 q | featuredcustomers.com | `/software/computer-aided-dispatch-software` | review directory | **Self-serve** vendor profile with customer references |
| 3 q | g2.com | CAD / fire-department categories | review directory | **Self-serve** profile, then reviews from current customers |
| 2 q | govlaunch.com | `/collections/computer-aided-dispatch-cad/products` | government tech directory | **Self-serve** product listing; government audience |

## Not reachable: competitor-owned content

| Used in | Site | Why |
|---|---|---|
| 15 q (domain, top source overall) | ginasoftware.com | **GINA is a dispatch vendor.** Its blog's "alternatives" pages won't list us. Answer it with our own `/vs/` and alternatives pages |
| 14 q | marlie.ai | An AI answering-service company's blog post. Unlikely to take a pitch; low priority |
| — | motorolasolutions.com, mark43.com, tylertech.com, versaterm.com, prophoenix.com, smartcop.com | Competitors' own product pages |

## Suggested order
1. **Self-serve this week** (no gatekeeper): G2, SourceForge/Slashdot, FeaturedCustomers, GovLaunch. Use the
   facts already published on the K-Dispatch page (Mexico's largest 911 center, 100+ agencies, P25/TETRA/DMR,
   NENA i3, cloud/on-prem/hybrid, 8–16 week phased deployment).
2. **One pitch, four sites:** gitnux / wifitalents / zipdo / worldmetrics share a format. Ask for inclusion in
   `911-cad-software`, `911-call-center-software` and `fire-dispatching-software`.
3. **One pitch, three sites:** the syndicated "Top 10 dispatch CAD systems" article.
4. **Trade media:** a contributed piece or news item in Critical Communications Review. It's slower, but it's the
   only source here that a human buyer also trusts.
5. **Analyst:** ResearchAndMarkets CAD key-companies list.

**Measure:** block D `named` rate in `geo-results.csv`. Baseline 2026-10-05: Claude **1 / 15**.
Expect 4–8 weeks for listings to be crawled and reflected in answers.
