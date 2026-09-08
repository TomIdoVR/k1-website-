# KabatOne Weekly SEO + GEO — 2026-09-08

**Focus:** The video-analytics consolidation is the whole story — one page gained +38 clicks, which is 63% of the site's entire click growth. Replicate the exact mechanism on the CAD cluster, where 60 internal links point at a page ranking 56–68 and only 23 at the page ranking 6.8.

*Window: 28d (2026-08-10 → 2026-09-06) vs prior pull 2026-09-01 · Sources: GSC API, GA4, `geo-history.csv` · Previous report: `weekly-report-2026-09-01.md` · **7-day gap between pulls** — deltas below are a full week apart, not noise-level.*

> ⚠️ **Environment note:** the OneDrive working copy (`Claude/k1 Website`) is **unreadable** — every file read returns `ETIMEDOUT` with `st_blocks=0`, so `git` reports "not a repository". This report was produced from a fresh clone at `~/dev/k1-website`. See §5.

---

## 1. Traffic

| Channel | Sessions | Prior | Δ | Users | S/U | Bounce | Flag |
|---|---|---|---|---|---|---|---|
| Direct | 2,007 | 2,247 | -11% | 1,808 | 1.11 | 73.6% | 🤖 BOT — exclude |
| **Organic Search** | **1,002** | **844** | **+19%** | 713 | 1.41 | 54.5% | — |
| Referral | 88 | 98 | -10% | 54 | 1.63 | 55.7% | small base |
| Unassigned | 52 | 9 | +478% | 50 | 1.04 | 100.0% | 🤖 BOT — exclude |
| AI Assistant | 50 | 53 | -6% | 39 | 1.28 | 48.0% | small base |
| Organic Social | 16 | 22 | -27% | 15 | 1.07 | 43.8% | small base |

**Organic Search +19% is the real signal.** At ~1,000 sessions this is not a small base, and it is corroborated independently by GSC clicks (+11.3%) — two instruments, same direction.

*Limitation, stated rather than glossed:* GA4's `sources_prior` returns **sessions only, no users**, so the per-user check G9 asks for cannot be run on the prior period. The GSC click corroboration is what carries this claim, not the session count alone.

Direct (60% of all sessions) and Unassigned both carry the bot signature and are excluded from every conclusion below. **The site's headline session total is meaningless without that exclusion.**

**AI Assistant by engine:** chatgpt.com 32 (62.7%) · gemini 15 (29.4%) · perplexity 3 · copilot 1.
**13-week AI series:** 8 · 8 · 5 · 12 · 17 · 14 · 14 · 10 · 16 · 10 · 10 · 14 · *3\** — last 3 complete weeks average 11.3 vs prior 3 at 13.3: **flat**. (*week in progress, excluded.)

> ChatGPT sends 63% of AI traffic. The GEO monitor tests **Claude**. These are not the same instrument and must never be read interchangeably (G10).

**Top referrers:** google 924 · bing 70 · grupokabat.com 48 · chatgpt.com 32

---

## 2. Search

| Metric | Now | Prior | Δ |
|---|---|---|---|
| Clicks | **591** | 531 | **+11.3%** |
| Impressions | 119,428 | 106,355 | +12.3% |
| Avg CTR | 0.49% | 0.50% | -2.0% |
| Avg position | 13.5 | 13.3 | -0.2 |

**10% of the impression growth is not real.** One SERP-polling query (`best fire computer aided dispatch software`) grew 647 → 2,010 impressions, contributing 1,363 of the +13,073. See the refutation in §6. The remaining +11,710 and the entire +60 clicks are genuine.

### Where the clicks came from (both URL forms summed)

| Page | Clicks | Impressions |
|---|---|---|
| `/resources/cctv-video-analytics` | 106 → **144 (+38)** | 9,033 → 12,867 |
| `/es/resources/how-c5-command-centers-work` | 32 → 38 (+6) | 10,225 → 11,249 |
| `/es/k-dispatch` | 0 → 6 (+6) | 0 → 126 |
| `/es/resources/que-es-un-c5` | 7 → 11 (+4) | 1,678 → 2,823 |
| `/resources/best-cad-dispatch-software` | 66 → 66 (0) | 20,755 → 22,248 |
| `/resources/what-is-video-management-software` | 15 → 7 (-8) | 15,971 → 10,624 |

**`/resources/cctv-video-analytics` alone is +38 of the site's +60 clicks.** That page is the VID-1 consolidation, shipped to production 2026-08-31 in PR #17. This is the first weekly pull that measures it, and it worked.

### Clusters

| Cluster | Impressions | Clicks | CTR |
|---|---|---|---|
| C5 / Command Ctr | 5,319 | 13 | 0.24% |
| Video / VMS | 4,875 | 25 | 0.51% |
| CAD / Dispatch | 3,410 | 9 | 0.26% |
| AI / Analytics | 1,274 | 6 | 0.47% |
| **Brand** | **201** | **111** | **55.22%** |

Brand at 55% CTR is the control condition: when brand converts and nothing else does, **the problem is not snippets.**

### Opportunities — intent-labelled

| # | Query | Pos | Impr | Qualified | Intent |
|---|---|---|---|---|---|
| ~~1~~ | ~~best fire computer aided dispatch software~~ | 6.8 | 2,010 | **0** | 🤖 **bot — refuted, §6** |
| 1 | vms software | 12.9 | 1,212 | 24 | buyer |
| 2 | cctv video analytics | 8.7 | 627 | 22 | buyer |
| — | c5 | 8.2 | 5,025 | **0** | ⛔ navigational |
| 3 | cctv analytics | 7.8 | 533 | 18 | buyer |
| 4 | general vms | 4.2 | 125 | 8 | buyer |
| 5 | best police cad systems | 3.1 | 55 | 5 | buyer |

> ⛔ `c5` — navigational, qualified potential 0 by design. Row kept visible so it is not rediscovered as an opportunity next week. Never headline its raw number (G8).

### Zero-click page-1

**34 of 62 page-1 queries return zero clicks; 16 improved position and still returned zero.** Visibility is ruled out — this is AI Overview absorption, confirmed directly in v2.343. **No snippet rewrite will fix it.**

Note the top zero-click row is the bot query; the block is 33 genuine queries once excluded.

### Movers

**Up 🟢** — the video cluster, matching the consolidation: `ai video analytics` 41.1→32.2 · `cctv video analytics` 12.4→8.7 · `cctv ai analytics` 9.2→5.7 · `cctv analytics` 11.0→7.8

**Down 🔴** — `911 cad software` 10.4→14.9 · `911 dispatch software` 9.8→13.5 · `911 cad systems` 10.3→13.3

> **The CAD "decline" is reallocation, not decay — for the third time.** Cluster clicks are **flat at 9** across both windows while impressions rose 2,356 → 3,410. Average position fell because new mid-tail queries entered at low positions, and because one bot query tripled. Same conclusion as v2.282 (July) and v2.340 (2026-08-31). See §6.

---

## 3. GEO

> 🔴 **The published 73.0% is arithmetically invalid and should not be quoted.**

The 2026-08-31 CSV holds **37 rows from two different runs on the same day**: rows 1–12 are the legacy 12-query set, rows 13–37 are a 25-query superset. Averaging them double-counts the original 12.

| Read | Rate |
|---|---|
| Published (all 37 rows) | ~~73.0%~~ invalid |
| **Like-for-like, stable 12 queries** | **83.3%** (10/12) — *identical to 08-28: flat, not a decline* |
| Correct current figure (25-query set) | **68.0%** (17/25) |
| The 13 newly-added queries | **53.8%** (7/13) |

**There was no GEO decline.** The apparent 83.3% → 73.0% drop is entirely an artifact of expanding the query set. `seo_diff.py` labelled these "complete runs only" but does not detect a changed query set — worth fixing.

**Correction — the double-run bug did *not* recur.** An earlier draft of this report said it had. The commit timeline disproves it: `geo-history.csv` held **24** doubled rows at 08:07 (`fa2a289`) and **12** by 09:04 (`4e3a3af`) — v2.340's de-duplication worked exactly as its changelog claimed. The 37 rows arrived later the same day, when `geo-queries.txt` grew from 14 to 42 lines at 13:31 (`9fa95d9`, v2.342) and the expanded 25-query set ran on top of the 12 already logged.

**The actual defect is narrower:** `geo-history.csv` carries no run identifier, so two honest runs on one date are indistinguishable by row count and get averaged together. Fixed in v2.378 — the rate now de-duplicates by `(date, query)`, last run wins, and reports how many rows were superseded. No paid spend was wasted.

**The real gaps** are in the 13 new queries — uncited: `911 dispatch software for emergency call centers` · `AI VMS software for security operations` · `analytic CCTV cameras for city surveillance` · `best fire computer aided dispatch software` · `mejor software de gestión de video para ciudades` · `software de videomonitoramento para cidades`.

Two ES/PT video queries are uncited — an **authority** gap, not a content gap (we have those pages). This is AUTH-2's argument extended to the LATAM video cluster.

---

## 4. Plan

### P0 — this week

**#1 · CAD-1 — re-point CAD cluster internal links to `best-cad-dispatch-software`** *(carry-over: 1 week · owner: Claude · effort: S)*

The mechanism, verified on production (`origin/main`), counting nav/footer data-links as well as JSX `href`s:

| Page | Inbound internal links | Ranks on buyer queries |
|---|---|---|
| `/resources/what-is-cad-dispatch-software` | **60** | 56 – 68 |
| `/resources/best-cad-dispatch-software` | **23** | **6.8 – 11.0** |

We point 2.6× more internal equity at the page that cannot rank. Verified across every CAD buyer query: `computer aided dispatch software` (winner 7.5 / explainer 64.5), `police cad systems` (7.0 / 68.7), `911 dispatch software` (6.8 / 77.0), `cad dispatch software` (11.0 / 56.0).

**Why it beats the runner-up:** this is the *identical* mechanism as VID-1 (28 links to the dead page vs 8 to the winner), and VID-1 is the one change in this program with measured proof — **+38 clicks this week, 63% of all click growth**. It needs no budget, no external authority, and no approval. Keep the explainer as a definitional/GEO asset; move the links only.

**#2 · Filter SERP-polling queries out of the opportunity scorer** *(new · Claude · effort: S)*

`best fire computer aided dispatch software` ranked **#1** in this week's opportunity table at 120 "qualified" potential clicks. It is automated polling — documented in CHANGELOG, where it drove **3 of the 4 P0 actions in the 2026-08-04 brief**. It is unfiltered and back at #1. The fingerprint is mechanical and easy to encode: ~100% desktop, zero clicks at page-1 position, and a fixed usa/gbr/nld/deu/ita/hkg country spread with zero Mexico. Fix in `business_value()`/`query_intent()` in `seo_weekly_agent.py` so the Slack brief, dashboard and this report all correct at once.

**#3 · De-duplicate the GEO rate by `(date, query)`** *(new · Claude · effort: S)* — ✅ **shipped v2.378**

Not the scheduler fix this was first filed as (see §3). The history has no run identifier, so a date holding two legitimate runs was averaged by row count. `geo_freshness()` now keys on `(date, query)` with the last run winning, and surfaces a `superseded_rows` count. Verified by execution: 08-31 now reads **68.0%** over 25 unique queries, 12 rows superseded.

### P1 — this month

- **KAB-1721 — VMS flagship pages** *(carry-over: **6 weeks** 🔴)*. **Reframed by this week's evidence, see §6:** `what-is-video-management-software` **is** the ranking page for every VMS query including buyer terms, and it already holds 65 inbound links. The constraint is not internal links and not content — it ranks 13.8 on `vms software` with 1,182 impressions and 6 clicks. This is an authority problem, and it belongs with AUTH-1/AUTH-2, not with another freshness pass.
- **GEO-2 — split `cited` into `named_in_answer` vs `in_source_set`** *(1 week)*. Until then the rate stays directional and out of board decks.
- **MIGRATE-1 — unslashed canonical migration** *(1 week, watching)*. Still live: 4 pages rank in both URL forms. Read clicks, not average position.

### P2 — backlog

- **GEO-3** — quoted-literal detector in `query_intent` (`"traffic management system" "11 ktco2e"` still scores buyer).
- **`/en/` prefixed URLs** — 2 pages indexed (202 impressions). Redirects correctly in 1 hop; `/en/` root takes 2 hops. Low value, noted for completeness.
- **Country-page guardrail** — 142 vs 121 limit, 21 over.

### Blocked on a human

- **AUTH-1 — backlink / authority program** *(**7 weeks** 🔴 · Omer)*. Needs budget and outreach. **This is now the binding constraint on three separate findings** — the ES/PT GEO gaps, AUTH-2, and the reframed KAB-1721. Not a work item that has been ignored; a decision that has not been made.
- **AUTH-2 — `911 dispatch software for emergency call centers`** *(1 week · Omer)*. Content audited and adequate; we are absent from the sources the engine retrieves.

---

## 5. Operations & health

| Signal | Value | |
|---|---|---|
| Striking distance (pos 5–15) | 98 | |
| Commits this week (`nextjs`) | 0 | |
| **Production pushes this week** | **0** | ⚠️ |
| Country pages vs guardrail | 142 vs 121 | ⚠️ 21 over |
| GEO freshness | 8d (2026-08-31) | |
| Master plan age | 0d | ✅ |
| Canonical sweep | clean | ✅ |

**Zero commits and zero production pushes this week.** The gains reported above are the delayed measurement of work shipped on 08-31, not of anything done since.

### Branch topology (G12 — both directions)

- `nextjs` ahead of `main`: **35** commits (staging v2.347)
- `main` ahead of `nextjs`: **165** commits (production v2.376)
- **DIVERGED** — `main` is not an ancestor of `nextjs`. **33 source files changed on both sides.**

> Production is **not "behind"**. Merging `nextjs` into `main` would merge an older line into a newer one. Route CAD-1 through a PR branched from `main`, exactly as PR #17 was done.

### 🔴 Working copy unreadable

Every file in the OneDrive folder returns `ETIMEDOUT` with `st_blocks=0` (dataless placeholders); `.git/HEAD` is unreadable so git does not recognise the repo. 12,602 of 13,304 files in `.git`+`SEO`+`scripts` are dehydrated, and the count did not move across a 4-minute observation with OneDrive running. An app restart did not fix it. Work continued from a clone at `~/dev/k1-website`.

**`scripts/gsc_pull_weekly.py` was untracked and exists only in that unreadable folder.** It was reconstructed and validated by replaying the 2026-09-01 window: striking-distance count reproduced **exactly** (101), pages overlap 20/20, queries 29/30, with every difference traced to GSC backfill. It should be committed so a working-copy loss cannot take the pipeline with it.

*Latent bug found during reconstruction:* `top_queries_by_impressions` and `top_pages_by_impressions` are both sorted by **clicks**, not impressions. The names are wrong. Preserved deliberately for comparability — renaming them would break every stored pull.

---

## 6. Housekeeping

### Shipped since last report (at time of writing)
Nothing. Zero commits, zero deploys.

### Shipped during this session — 2026-09-08
| Version | Change | Branch |
|---|---|---|
| **v2.377** | CAD-1 — 32 buyer-intent links re-pointed to `best-cad-dispatch-software` across 24 files; inbound 23→**55** for the winner, 60→**28** for the explainer | `seo/cad-cluster-link-consolidation` off `main` (PR) |
| **v2.378** | SCORER-1 — SERP-polling denylist in the shared scorer; `best fire computer aided dispatch software` now scores **0.0**, was the #1 opportunity | `nextjs` |
| **v2.378** | GEOSCHED-3 — GEO rate de-duplicates by `(date, query)`; 08-31 corrected 73.0% → **68.0%** | `nextjs` |
| **v2.378** | TOOL-1 — `gsc_pull_weekly.py` committed, ending its existence as an untracked single copy | `nextjs` |

### Refuted, with evidence

1. **`best fire computer aided dispatch software` is not an opportunity — it is automated SERP polling.** 2,007 of 2,010 impressions desktop (99.85%), 3 mobile, **zero clicks at position 6.8**, country spread usa 1,982 / gbr 17 / nld 6 / deu 3 / ita 1 / hkg 1 and **zero Mexico**. Identical fingerprint to the one already documented in CHANGELOG. The scorer ranked it #1 at 120 qualified clicks.

2. **`/k-dispatch/` did not decline — withdrawn for the third time.** `seo_diff.py` re-raised it (14.6 → 17.4). CAD cluster clicks are flat at 9 while impressions rose 45%. v2.282 (July) and v2.340 (2026-08-31) reached this conclusion already. **The tool re-raises it every week; that is the thing to fix**, not the page.

3. **GEO did not fall from 83.3% to 73.0%.** The query set grew from 12 to 25 on the same day. Like-for-like on the stable 12: 83.3% both runs — flat.

4. **The GEO double-run did not recur.** Filed as GEOSCHED-3 on the strength of 37 rows for 25 queries. The commit timeline shows v2.340's dedup worked (24 rows → 12); the extra rows are a legitimate second run after the query set was expanded at 13:31 the same day. Withdrawn and re-filed as the narrower defect it is — no run identifier in the history.

5. **A VMS link re-point would have been backwards.** The obvious read of the link table (65 links on the explainer, 7 on `best-vms-software`) suggests the CAD fix applies. It does not: `what-is-video-management-software` is the page that actually ranks for *every* VMS query, including `best vms software` and `best video management software`; `best-vms-software` draws 17 impressions at position 24. Re-pointing would have stripped the one page that ranks. Caught by checking which page wins the query before recommending the fix.

### Corrections to my own analysis this session

- I first reported `/resources/cctv-video-analytics` at **+41** clicks and `/es/resources/how-c5-command-centers-work` as the week's **biggest loser (-18)**. Both were wrong — artifacts of reading one URL form. Summed across slashed and unslashed, they are **+38** and **+6 (a gainer)**. This is precisely the MIGRATE-1 trap, and it caught me.
- I then reported three pages at **-6/-5/-6 clicks to zero**. Also wrong — they had fallen out of the top-20 list, not out of the index. Queried directly, all three still earn clicks. Only `what-is-video-management-software` (15 → 11 summed) shows a genuine dip.
- I claimed **8 of 12** GEO duplicate pairs disagreed on citation. Wrong — my comparison included the competitors column. The citation verdicts agree **12/12**; only competitor lists differ.

### Carry-over ledger

| Item | Owner | Weeks | Status | |
|---|---|---|---|---|
| AUTH-1 — Backlink / authority program | Omer | **7** | blocked | 🔴 **has not moved** |
| KAB-1721 — VMS flagship pages | Claude | **6** | reframed | 🔴 **has not moved** — now scoped as authority, not content |
| AUTH-2 — `911 dispatch software…` uncited | Omer | 1 | blocked | |
| CAD-1 — Re-point CAD internal links | Claude | 1 | ✅ **shipped v2.377** (PR open) | |
| MIGRATE-1 — Unslashed canonical migration | Claude | 1 | watching | |
| GEO-4 — C5 definition corrected, does AI flip? | Claude | 1 | watching | blocked on production |
| GEO-2 — Split `cited` flag | Claude | 1 | open | |
| GEO-3 — Quoted-literal detector | Claude | 1 | open | |
| SCORER-1 — Filter SERP-polling queries | Claude | **new** | ✅ **shipped v2.378** | |
| GEOSCHED-3 — GEO rate averaged two runs on one date | Claude | **new** | ✅ **shipped v2.378** | |
| TOOL-1 — `gsc_pull_weekly.py` untracked | Claude | **new** | ✅ **shipped v2.378** | committed |

> 🔴 **AUTH-1 (7 weeks) and KAB-1721 (6 weeks) have not moved.** AUTH-1 is now the binding constraint on three separate findings and is a decision, not a task.
