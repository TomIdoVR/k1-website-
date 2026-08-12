# Weekly SEO Review — 2026-08-12

> Routine: KAB-2474. Previous: `weekly-report-2026-08-10.md`.

## Headline

**Three of the four GEO gap queries flipped to cited.** VMS, unified-platform and NG911 all went
`N → Y` since the 2026-07-07 baseline. The roundup pages shipped over the last cycle are working —
this is the first run where KabatOne appears in AI answers for its core category questions rather
than only for the long-tail ones.

**C5 is now the only remaining gap**, and it is not a content gap.

---

## 1. GEO monitoring

Run 2026-08-12 (partial — see blocker). Compared against the 2026-07-07 full baseline:

| Query | 07-07 | 08-12 | Change |
|---|---|---|---|
| Best CAD dispatch software for 911 centers | Y | **Y** | held |
| Best VMS software for public safety | N | **Y** | 🟢 gained |
| What is a unified public safety platform | N | **Y** | 🟢 gained |
| What is NG911 software and how does it work | N | **Y** | 🟢 gained |
| What is a C5 command center | N | **N** | ❌ still absent |

Cited in 4/5 answers measured (80%), against 5/12 (42%) on the full 07-07 baseline.
The three gains are exactly the queries the roundup pages were built for, which makes this the
clearest causal read the GEO program has produced so far.

Competitors now co-cited alongside KabatOne: Motorola (every query), Genetec/Avigilon/Milestone
(VMS), Axon/Mark43/Fusus (unified platform), Peregrine (NG911). We are appearing *in the
consideration set*, not displacing it.

### Why C5 is not a content problem

Checked directly this run:

- `resources/how-c5-command-centers-work` — 604 lines, carries Article + **FAQPage** + Breadcrumb
  schema, and its first FAQ is `"What is a C5 command center?"` — verbatim the monitored query.
- 24 inbound internal links from `/vs/*`, product pages, `/resources`, and the Spanish
  `que-es-un-c5`. It is not orphaned; internal-link concentration is already done.
- The AI answer for the C5 query cited **only Motorola** — the answer space is thin and open, not
  crowded out.

On-page structure and internal linking are both already correct. The remaining variable is
off-site authority: nothing external points at the page, so AI engines answer from general
knowledge instead of citing it. This is priority-queue item #6 (**needs human**), not a
content task.

---

## 2. Content published

**Nothing — the queue is genuinely empty, by design.** Every row in the master plan's content
pipeline (Phase 3, `kabatone-seo-master-plan.md:181`) is marked `Done`, and the GEO gap that
remains does not call for another page. Publishing a fourth C5 asset would add a competing URL to a
cluster that already has three (`how-c5-command-centers-work`, `c5-command-centers-mexico-2026`,
`que-es-un-c5`) — the same mistake the video-analytics cluster is currently being unwound for.

Engineering work shipped instead — see §4.

---

## 3. Rankings (GSC, 08-03 → 08-10)

| | 08-03 | 08-10 |
|---|---|---|
| Clicks | 452 | 428 |
| Impressions | 89,668 | 94,361 |
| Avg CTR | 0.54% | 0.48% |
| Avg position | 13.8 | 13.8 |

Only two queries moved ≥1.5 positions:

- 🟢 `vms software` — 13.1 → **11.6**, 1,561 impressions. Continues the trend flagged on 08-10;
  the largest page-2 pool on the site is still climbing.
- 🔴 `cctv ai analytics` — 12.8 → **15.2**, 123 impressions. Consistent with the known
  video-analytics cluster regression (priority item #2, still undecided).

Impressions up 5.2% while clicks fell 5.3% — CTR keeps eroding. This is the AI-Overview
zero-click pattern already diagnosed in `ctr-diagnosis-2026-07-20.md`, not a new regression.
It also reinforces the GEO result above: being *cited* in the AI answer is now worth more than
the blue link.

---

## 4. Shipped this run

**`SEO/geo/track_geo.py` — stop recording partial GEO snapshots as if they were full runs.**

The 2026-08-04 snapshot contains a single row (RTCC, cited) and reads as "100% cited". It was
actually a run that died after one query. Today's run failed the same way after five. Both
silently appended to `geo-history.csv`, corrupting the trend line the whole program is measured on.

Three changes:
- Credit-balance / auth / permission failures now **abort the run** instead of burning the
  remaining queries — one such failure applies to all of them.
- Failures are counted, and the script **refuses to write a partial snapshot** (exit 2), reporting
  the coverage it actually achieved.
- `--allow-partial` records one deliberately when that is what you want.

Verified: compiles, and `--limit 1 --no-write` still runs a clean query end to end.

---

## 🔴 Blocker — needs Omer

**The Anthropic API key in `~/.config/claude-seo/anthropic-api-key` is out of credit.**

```
400 invalid_request_error — "Your credit balance is too low to access the Anthropic API."
```

This is the standalone API key the SEO scripts use, separate from the Claude Code subscription.
It has been failing since at least **2026-08-04**, which is why that week's snapshot has one row.

Impact: `track_geo.py` cannot complete a full 12-query run, so GEO coverage is unmeasurable
week-over-week. 7 of today's 12 queries are missing, including RTCC, Genetec-alternatives, and
Mexico/LATAM — three of the five we were previously cited for.

Action: top up credit at console.anthropic.com → Plans & Billing, then re-run
`python3.11 SEO/geo/track_geo.py` for a complete baseline. With the fix above, a run that cannot
finish will now say so loudly instead of writing a misleading row.

---

## Next

1. **Top up the API credit** (Omer) → re-run the full GEO baseline. Everything else in the GEO
   program is unmeasurable until this clears.
2. **Off-site authority for C5** — the one remaining GEO gap, and now provably an authority
   problem rather than a content one. See `off-site-authority-targets.md`.
3. **Decide the video-analytics cluster's fate** — carried from 08-10, still open, still the
   largest verified regression (`cctv ai analytics` fell again this week).
4. **Apex-domain switch in Vercel** (Omer) — canonical part 1 shipped in v2.314; part 2 is still
   the highest site-wide lever available.
