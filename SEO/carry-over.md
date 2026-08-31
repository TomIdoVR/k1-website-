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
| AUTH-1 | Backlink / authority program | 2026-07-20 | Omer | blocked | Genuinely blocked — needs budget and human outreach. Scarcest resource in the program; do not spend on `c5`. Park until production catches up, so the shipped work can be measured before authority is bought. |
| GEO-1 | Add ES + PT queries to `SEO/geo/geo-queries.txt` | 2026-08-28 | Claude | open | 12 English queries for a Mexico/LATAM company. `/es` pages pull AI traffic at 300–1,350s dwell and Brazil is a joint-largest AI source. Untested languages are unmeasured markets. ~$0.30/run. |
| GEO-2 | Split `track_geo.py` cited flag into `named_in_answer` vs `in_source_set` | 2026-08-28 | Claude | open | The 83% counts "our URL was retrieved" identically to "the answer recommended us". Until split, treat the rate as directional and keep it out of board decks as a bare percentage. |
| STATE-1 | `SEO/SEO-PROGRAM-STATE.md` opens with stale 🔴 warnings | 2026-08-31 | Claude | open | Still says the Anthropic key is dry and `track_geo.py` cannot finish a full run — contradicted by v2.328 and by 12/12 rows dated 2026-08-28. It is the "read this first" file, so a stale banner there causes repeat misdiagnosis. Also still claims Track A is blocked on interactive `gsc_reauth.py`, which has been running unattended through 08-28. |
| WATCH-1 | `/k-dispatch/` position decline | 2026-08-28 | Claude | watching | Fell 9.4 → 12.9 (−3.5) with the CAD/911 cluster softening. One pull, not yet a trend. Escalates above everything if it repeats. |

## Closed

| id | item | first_raised | closed | shipped_in |
|---|---|---|---|---|
| VID-1 | Consolidate video-analytics cluster | 2026-08-12 | 2026-08-31 | v2.329 (staging) → **v2.376 / PR #17 (production, 2026-08-31)**. 3 weeks carry-over. Mechanism: 28 internal links pointed at the dead page vs 8 at the winner. Verified live: both retired URLs 301 in 1 hop, winner 200, `best-ai-video-analytics-software` correctly untouched. |
| SHIP-1 | Get the SEO fixes onto production | 2026-08-21 | 2026-08-31 | **PR #17 merged to `main`.** Not a merge of `nextjs` — the branches had diverged (main 163 commits ahead at a higher version), so the changes were re-applied on a branch cut from `main` and resolved against its newer content. Deploy verified live ~7min after merge. |
| CANON-2 | `psim-alternatives` canonicals pointed at a 308 | 2026-08-28 | 2026-08-31 | v2.331 (staging) → v2.376 / PR #17 (production). Verified live: canonical now unslashed. |
| CANON-1 | Unslash all canonicals | 2026-08-10 | 2026-08-21 | v2.314, promoted 08-21; two stragglers swept in v2.331 |
| GEOSCHED-1 | Restore + schedule GEO monitor | 2026-08-20 | 2026-08-28 | v2.328 |
| BRIEF-1 | Slack brief headlines `c5` despite correct ranking | 2026-08-28 | 2026-08-28 | v2.330 — intent labels + qualified potential |
