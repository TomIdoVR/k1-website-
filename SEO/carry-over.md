# Carry-over ledger

Open items that survive across weekly reports. `scripts/seo_diff.py` reads this table,
computes weeks-open from `first_raised`, and escalates anything at 3+ weeks to 🔴.

The ledger exists because G5 ("count carry-overs and escalate") was aspirational without
state — it depended on someone carefully re-reading last week's prose. KAB-1721 sat open for
five weeks and only resurfaced because a July file happened to get read. Silent carry-over is
how the queue rots.

**Rules**
- One row per open item. `first_raised` is the date it was *first* recommended, not last mentioned.
- `status`: `blocked` (waiting on a human) · `open` (actionable now) · `watching` (monitor only)
- Move completed items to Closed with the version that shipped them. Don't delete — a closed
  item is the evidence that stops it being re-proposed.
- Keep the pipe table intact; the parser is deliberately simple.

## Open

| id | item | first_raised | owner | status | notes |
|---|---|---|---|---|---|
| KAB-1721 | Track C escalation — earn real update history on the two flagship VMS pages | 2026-07-27 | Claude | open | **Re-owned 2026-08-31.** This was logged for six weeks as "blocked on Omer's decision". It was not: CHANGELOG v2.286 records board approval via KAB-1980 ("both") on 2026-07-27. Track A ran (roundup program v2.277–v2.284); Track C's first move (freshness/E-E-A-T) shipped the same day. v2.286 set its own trigger — escalate "if this doesn't move the needle within 2–3 weekly pulls". `/resources/what-is-video-management-software` went 17.4 → 17.5 across the 08-20 and 08-28 pulls on ~18.6K impressions. The trigger fired weeks ago and nobody pulled the lever. |
| AUTH-2 | `911 dispatch software for emergency call centers` — absent from AI answers, but **not** a content gap | 2026-08-31 | Omer | blocked | Audited the page: NG911, ANI/ALI, call-taking and text-to-911 are all already covered. Content is not the constraint — we are missing from the sources the engine retrieves, which cites CentralSquare, Hexagon, Mark43 and Motorola. This is AUTH-1 with a named target rather than a general ask: the four queries where we rank and are uncited are where authority should be spent. |
| CAD-1 | Re-point CAD cluster internal links to `best-cad-dispatch-software` | 2026-08-31 | Claude | open | `what-is-cad-dispatch-software` surfaced this window (0 → 682 impr, pos 29.7) and competes with the cluster winner on its own buyer terms — ranking 57–67 where the winner ranks 6.3–6.7. It holds **13 internal links against the winner's 9**. Same misdirected-link mechanism as VID-1, which is the one consolidation with measured evidence that it works. Keep the explainer as a definitional/GEO asset; move the links. |
| MIGRATE-1 | Unslashed canonical migration in progress | 2026-08-31 | Claude | watching | Unslashed rows in top-20 pages went 0 → 2 → 4 across the 08-20/08-28/08-31 pulls; `best-cad-dispatch-software` and `cctv-video-analytics` currently rank in **both** URL forms on the same queries. Config verified correct (1-hop 301, unslashed canonical) — this resolves itself. **Read clicks, not average position, for 2–4 weeks:** a page-level decline measured from the slashed row alone is suspect until its unslashed twin is checked. This trap caused one wrong escalation on 08-31. |
| AUTH-1 | Backlink / authority program | 2026-07-20 | Omer | blocked | Genuinely blocked — needs budget and human outreach. Scarcest resource in the program; do not spend on `c5`. Park until production catches up, so the shipped work can be measured before authority is bought. |
| GEO-4 | C5 definition corrected — does the AI answer flip? | 2026-09-01 | Claude | watching | v2.347 fixed the fifth C from Calidad to **Contacto Ciudadano** across 5 pages, both locales, FAQPage schema, meta descriptions and `llms.txt`. `What is a C5 command center?` has been uncited since the 2026-07-07 baseline and v2.274's brand-anchor callout did not flip it — the mechanism was that our definition contradicted `c5.cdmx.gob.mx`. Same measurement contract as v2.343: re-run `track_geo.py` after this reaches production and the engines re-crawl. **Citation is the metric, not rank.** The head term `c5` stays navigational (qualified potential 0) — do not read this as a click play. |
| GEO-2 | Split `track_geo.py` cited flag into `named_in_answer` vs `in_source_set` | 2026-08-28 | Claude | open | The 83% counts "our URL was retrieved" identically to "the answer recommended us". Until split, treat the rate as directional and keep it out of board decks as a bare percentage. |
| GEO-3 | `_BUYER` matches quoted-literal academic queries (`"traffic management system" "11 ktco2e"` scores buyer) | 2026-08-31 | Claude | open | Low value (score 9.6) but it will keep surfacing in the opportunity table. Needs a quoted-literal detector in `query_intent`. |

## Closed

| id | item | first_raised | closed | shipped_in |
|---|---|---|---|---|
| GEOSCHED-2 | GEO monitor ran twice every Monday | 2026-08-31 | 2026-08-31 | **v2.340.** `com.kabatone.seo-geo` (07:30) and `seo_weekly_agent.py`'s own `geo-monitor` step (08:07) both shelled out to `track_geo.py` — 24 rows for a 12-query set, double paid spend, citation rate computed from doubled rows. `launchctl` showed one job because the second lived inside another script. Fixed by making the agent skip when the day's rows exist, so the duplicate run goes without losing the fallback. Verified by execution. Rows de-duplicated; both runs had agreed 10/12, so 83.3% was accidentally correct. |
| WATCH-1 | `/k-dispatch/` position decline | 2026-08-28 | 2026-08-31 | **Withdrawn, not fixed — there was no decline.** Queried GSC directly (the stored pulls' top-20 cap hid it): clicks **flat at 10** across both 28d windows, CTR **0.43% → 0.71%**. Lost impressions were mid-tail terms held at pos 45–84 that never converted; the page moved to **pos 1–4** on `911 cad`, `emergency cad`, `911 dispatcher software`. Average position fell because the query mix changed. v2.282 reached the same conclusion in July ("healthy query reallocation — no fix"); re-escalating it cost a week of queue space. EN CAD cluster grew 68 → 82 clicks (+21%). |
| VID-1 | Consolidate video-analytics cluster | 2026-08-12 | 2026-08-31 | v2.329 (staging) → **v2.376 / PR #17 (production, 2026-08-31)**. 3 weeks carry-over. Mechanism: 28 internal links pointed at the dead page vs 8 at the winner. Verified live: both retired URLs 301 in 1 hop, winner 200, `best-ai-video-analytics-software` correctly untouched. |
| SHIP-1 | Get the SEO fixes onto production | 2026-08-21 | 2026-08-31 | **PR #17 merged to `main`.** Not a merge of `nextjs` — the branches had diverged (main 163 commits ahead at a higher version), so the changes were re-applied on a branch cut from `main` and resolved against its newer content. Deploy verified live ~7min after merge. |
| CANON-2 | `psim-alternatives` canonicals pointed at a 308 | 2026-08-28 | 2026-08-31 | v2.331 (staging) → v2.376 / PR #17 (production). Verified live: canonical now unslashed. |
| STATE-1 | `SEO/SEO-PROGRAM-STATE.md` opens with stale 🔴 warnings | 2026-08-31 | 2026-09-01 | **Already fixed when checked — the ledger row was the stale thing.** The file now carries a struck-through "Resolved, do not re-raise" block covering both the dry Anthropic key and the `gsc_reauth.py` claim. Verified by reading the file, not by trusting the row. Superseded by PLAN-1, which found the same class of rot one file over. |
| PLAN-1 | `kabatone-seo-master-plan.md` was 20 days stale and wrong on two counts | 2026-09-01 | 2026-09-01 | **Closed same day.** (a) Its status block asserted "C5 is an authority problem, not content" — the diagnosis this week disproved, and the one that cost six weeks. (b) Its header claimed analytics auth is a **service account** with "no OAuth refresh token used in the weekly path"; `gsc_pull_weekly.py` in fact exchanges a refresh token at `oauth2.googleapis.com/token`. A `gsc-service-account.json` does exist in `~/.config/claude-seo/`, which is why the wrong claim survived inspection — checking which credential files exist does not tell you which one the code reads. Verified by reading the auth path. |
| GEO-1 | Add ES + PT queries to `SEO/geo/geo-queries.txt` | 2026-08-28 | 2026-09-01 | **v2.342** — shipped 2026-08-31; the ledger row was stale for a day. Query set went 12 → 25 in three labelled blocks (original 12 for trend continuity, the zero-click block, ES/PT). The split immediately paid: real citation rate is **68%, not 83%** — the old set only tested queries we already win. ES/PT came back 4 of 6 cited, healthier than feared. |
| CANON-1 | Unslash all canonicals | 2026-08-10 | 2026-08-21 | v2.314, promoted 08-21; two stragglers swept in v2.331 |
| GEOSCHED-1 | Restore + schedule GEO monitor | 2026-08-20 | 2026-08-28 | v2.328 |
| BRIEF-1 | Slack brief headlines `c5` despite correct ranking | 2026-08-28 | 2026-08-28 | v2.330 — intent labels + qualified potential |
