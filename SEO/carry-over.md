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
| KAB-1721 | Green-light Track A (GEO citation push) and/or Track C (VMS ranking lift) | 2026-07-20 | Omer | blocked | Blocks all 2,003 zero-click page-1 impressions. Cause diagnosed 2026-07-20 as AI Overview absorption; prescription never actioned. Track C should follow content depth — the target page holds visitors 32s. |
| AUTH-1 | Backlink / authority program | 2026-07-20 | Omer | blocked | Scarcest resource in the program. Unblocks only after KAB-1721 decides where authority should point. Do not spend on `c5`. |
| SHIP-1 | Promote `nextjs` → `main` | 2026-08-28 | Omer | blocked | 13 commits behind, including the v2.329 consolidation redirects and v2.331 canonical fixes. Unshipped work is invisible in every metric. |
| GEO-1 | Add ES + PT queries to `SEO/geo/geo-queries.txt` | 2026-08-28 | Claude | open | 12 English queries for a Mexico/LATAM company. `/es` pages pull AI traffic at 300–1,350s dwell and Brazil is a joint-largest AI source. Untested languages are unmeasured markets. ~$0.30/run. |
| GEO-2 | Split `track_geo.py` cited flag into `named_in_answer` vs `in_source_set` | 2026-08-28 | Claude | open | The 83% counts "our URL was retrieved" identically to "the answer recommended us". Until split, treat the rate as directional and keep it out of board decks as a bare percentage. |
| WATCH-1 | `/k-dispatch/` position decline | 2026-08-28 | Claude | watching | Fell 9.4 → 12.9 (−3.5) with the CAD/911 cluster softening. One pull, not yet a trend. Escalates above everything if it repeats. |

## Closed

| id | item | first_raised | closed | shipped_in |
|---|---|---|---|---|
| VID-1 | Consolidate video-analytics cluster | 2026-08-12 | 2026-08-28 | v2.329 — 3 weeks carry-over; mechanism was 28 internal links pointing at the dead page vs 8 at the winner |
| CANON-1 | Unslash all canonicals | 2026-08-10 | 2026-08-21 | v2.314, promoted 08-21; two stragglers swept in v2.331 |
| GEOSCHED-1 | Restore + schedule GEO monitor | 2026-08-20 | 2026-08-28 | v2.328 |
| BRIEF-1 | Slack brief headlines `c5` despite correct ranking | 2026-08-28 | 2026-08-28 | v2.330 — intent labels + qualified potential |
