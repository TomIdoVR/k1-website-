# KabatOne Weekly SEO + Traffic Report — 2026-08-28

**Window:** 2026-07-30 → 2026-08-26 (28d) vs prior pull (2026-07-22 → 2026-08-18).
**Sources:** GSC fresh pull `SEO/gsc-fresh-2026-08-28.json` · GA4 property 530090453 (28d vs prior 28d).
**Previous report:** `weekly-report-2026-08-20.md`. Both pulls succeeded this run.

---

## 1. Headline — the canonical fix shipped, and clicks broke out

**Clicks +21% on flat impressions.** This is the first week in the program where clicks grew
substantially faster than impressions — the CTR erosion that ran for six weeks has reversed.

| Metric | Now (08-28) | Prior (08-20) | Δ |
|---|---|---|---|
| Clicks | **530** | 437 | **+21%** |
| Impressions | 105,752 | 102,663 | +3.0% |
| Avg CTR | **0.49%** | 0.44% | **+0.05pt** |
| Avg position | **13.1** | 13.3 | −0.2 (better) |

The daily trend shows where it turned:

| Date | 08-15 | 08-17 | 08-19 | 08-21 | 08-24 | 08-25 |
|---|---|---|---|---|---|---|
| Clicks | 11 | 24 | 26 | 20 | **31** | **32** |
| CTR | 0.34% | 0.51% | 0.66% | 0.58% | 0.65% | 0.71% |

Daily clicks roughly doubled and daily CTR roughly doubled, on impressions that did not grow.
**`nextjs` was promoted to `main` on 2026-08-21** (`8b5059e`), carrying v2.314's 449 unslashed
canonicals. Timing lines up. Caveat: the lift starts around 08-17, a few days *before* the
promotion, so the apex-domain switch (08-10) is likely still compounding — the two are not
cleanly separable. Nothing else shipped in the window that would move rankings sitewide.

### Verified live this run (G2/G4)

```
kabatone.com/resources/cctv-video-analytics/  →308→  kabatone.com/resources/cctv-video-analytics  (1 hop, 200)
canonical served:                             https://kabatone.com/resources/cctv-video-analytics   ✅ unslashed
```

**The 🔴 critical carry-over from 08-10 and 08-20 is closed.** Production canonicals now resolve
to a 200 on first request. Sitemap serves 234 URLs, all unslashed.

**Expected transitional artefact:** GSC currently reports several pages under *both* forms while
it re-consolidates — e.g. `/resources/cctv-video-analytics/` (5,375 impr, pos 11.0) and
`/resources/cctv-video-analytics` (1,983 impr, pos 16.2). This split is normal for 2–4 weeks
after a canonical change and should collapse into the unslashed form. **Do not treat it as a bug.**
If both forms are still reporting on the 09-25 pull, escalate.

---

## 2. Cluster performance — where impressions fail to convert

| Cluster | Impressions | Clicks | CTR | Queries |
|---|---|---|---|---|
| C5 / C4 (Mexico) | 5,884 | 14 | 0.24% | 11 |
| VMS / Video | 5,684 | 39 | 0.69% | 44 |
| CAD / 911 | 2,498 | 9 | 0.36% | 51 |
| **Brand** | 436 | **117** | **26.8%** | 3 |
| Traffic / Smart City | 262 | 1 | 0.38% | 2 |

Brand converts at 26.8% — 55× the site average. That is the control condition: **when no AI
Overview sits above the result, the click works fine.** Every non-brand cluster underperforms,
and the gap is the AI-Overview tax, not a snippet quality problem (see §4).

**Concentration risk:** two pages — `/resources/best-cad-dispatch-software` (20,775 impr) and
`/resources/what-is-video-management-software` (18,638 impr) — carry **37% of all site
impressions**. Add `/es/resources/how-c5-command-centers-work` (11,639) and three pages carry 48%.

---

## 3. Opportunity queue — potential clicks, intent-qualified

Potential = `impressions × (expected_ctr(position) − actual_ctr)`.

| # | Query | Pos | Impr | Potential | Intent | Verdict |
|---|---|---|---|---|---|---|
| — | `c5` | 8.5 | 5,513 | +216.7 | **Navigational (CDMX agency)** | ❌ **Excluded** — see below |
| 1 | `best fire computer aided dispatch software` | 6.2 | 745 | **+44.7** | **Buyer** | ✅ Rank — 4th week at zero |
| 2 | `vms software` | 11.2 | 1,562 | +32.0 | Buyer | ✅ Rank |
| 3 | `cctv analytics` | 12.3 | 436 | +9.9 | Buyer/info | ✅ Rank |
| — | `"traffic management system" "11 ktco2e"` | 5.5 | 140 | +8.4 | **Research artefact** | ❌ Excluded — quoted-string academic query |
| 4 | `cctv video analytics` | 14.4 | 540 | +7.1 | Buyer/info | ✅ Rank |
| — | `grupo kabat` | 9.4 | 237 | +6.5 | Navigational (parent co.) | ⚪ Brand, no action |
| 5 | `911 dispatch software` | 8.1 | 140 | +5.6 | Buyer | ✅ Rank |
| — | `que es un c5` / `que significa c4 y c5` | 5.2–6.7 | 185 | +8.1 | Informational | ⚪ GEO value only |
| 6 | `audio video management system` | 5.6 | 70 | +4.2 | Buyer | ✅ Rank |
| — | `rtcc` | 8.8 | 122 | +3.9 | Mixed | ⚪ Monitor |

**`c5` stays excluded (G3), third consecutive week.** It scores +217 potential clicks — the
site's largest number by 5× — and it is unwinnable and worthless. Sibling queries in the cluster
are `c5 mapa`, `camaras de videovigilancia c5`, `camara del c5`, `que significa c4 y c5`,
`c5 seguridad publica`: Mexico City residents looking for the actual CDMX C5 agency and its camera
map. They want `gob.mx`. Chasing this with backlinks would misallocate the scarcest resource on
the program.

> **Correction (added during execution, 2026-08-28).** An earlier draft of this report claimed
> `business_value()` hard-codes `c5` at 2.5× and would keep ranking it #1. **That is wrong.**
> v2.313 (Aug 4) already made the function intent-aware: `c5`, `c5 mapa` and
> `camaras de videovigilancia c5` all classify as *navigational* and score **0.2**, not 2.5. The
> 2.5 branch exists but is unreachable for navigational queries. Verified by running the classifier
> directly. Two narrower misclassifications were real and have been fixed in v2.328 — see §10 #4.

---

## 4. Zero-click page-1 block — improving, and the cause is already known

| | 08-10 | 08-20 | **08-28** |
|---|---|---|---|
| Page-1 queries (pos ≤10) | 49 | 49 | **46** |
| Of those, zero-click | 41 | 41 | **34** 🟢 |
| Wasted impressions | ~1,868 | 1,868 | 2,003 |

**Correction to the last two reports.** Both stated this block "has survived three consecutive
reports without diagnosis." That is wrong. It *was* diagnosed on 2026-07-20 in
`SEO/ctr-diagnosis-2026-07-20.md` (board ticket KAB-1721), and the diagnosis holds up against this
week's data: **AI Overview absorption, not snippet quality.**

The evidence then and now is the same shape — CTR collapses *while position improves*:

| Query | Impr | Pos now | Pos 08-20 | Clicks |
|---|---|---|---|---|
| **best fire computer aided dispatch software** | **745** | 6.2 | 5.8 | **0** |
| best ai video analytics software | 55 | **5.7** | 12.5 🟢 +6.8 | **0** |
| ai video analytics processing feeds… | 60 | **5.5** | 7.1 🟢 | **0** |
| analytic cctv cameras | 68 | **7.4** | 8.3 🟢 | **0** |
| analytical cctv camera | 45 | **9.8** | 11.0 🟢 | **0** |
| 911 dispatch software | 140 | 8.1 | 6.2 | 0 |
| audio video management system | 70 | 5.6 | new | 0 |

Five of these *gained* position this week and still returned zero clicks. A query cannot both be
"not visible enough" and be climbing. And the snippet is not the problem either — I verified the
live title and meta on the page that ranks for the worst offender:

```
TITLE: Best CAD Dispatch Software for 911, Fire & EMS [2026 Guide]
DESC : ...for 911 centers, fire departments, and EMS — compared for NG911, multi-agency
       dispatch, MDT, GPS, and video integration. Independent buyer's guide for 2026.
```

Keyword-first, year-stamped, "fire" in the title, 18 mentions on-page. There is nothing to rewrite.
**Do not commission a snippet rewrite** — that was explicitly ruled out in July and the evidence
has only strengthened.

**The real finding is that the July prescription was never actioned.** `ctr-diagnosis-2026-07-20.md`
closes with "Awaiting board direction on KAB-1721." Tracks A (GEO citation push) and C (ranking
lift on the two flagship VMS pages) were recommended, green-light never recorded, and neither has
shipped in the five weeks since. This block will not move until one of them does.

---

## 5. Movers (≥1.5 positions, ≥50 impressions)

**Up 🟢**

| Query / Page | Prior | Now | Move |
|---|---|---|---|
| `best ai video analytics software` | 12.5 | **5.7** | **+6.8** |
| `cctv analytics` | 17.0 | 12.3 | +4.7 |
| `cctv video analytics` | 19.7 | 14.4 | +5.3 |
| `cctv ai analytics` | 17.2 | 11.3 | +5.9 |
| `/resources/cctv-video-analytics/` (page) | 13.6 | **11.0** | **+2.6** |
| `ai video analytics processing feeds…` | 7.1 | 5.5 | +1.6 |

**Down 🔴**

| Query / Page | Prior | Now | Move |
|---|---|---|---|
| `911 cad software` | 6.3 | **9.6** | −3.3 |
| `/k-dispatch/` (page) | 9.4 | **12.9** | **−3.5** |
| `911 dispatch software` | 6.2 | 8.1 | −1.9 |
| `/resources/what-is-video-analytics/` (page) | ~21.5 (Jul) | **27.2** | continued decay |

⚠️ **`/k-dispatch/` lost 3.5 positions and the CAD/911 query cluster softened across the board.**
The money page for the highest-value product moved the wrong way. Not yet a trend — one pull — but
it is the thing to watch on the 09-04 pull. If it repeats, it escalates above everything in §10.

---

## 6. Traffic (GA4, 28d)

| Channel | Sessions | Prior | Δ | Bounce | Sessions/user |
|---|---|---|---|---|---|
| Direct | 2,312 | 1,666 | +39% | 70.3% | **1.11** ⚠️ |
| **Organic Search** | **937** | 860 | **+9%** | 51.8% | 1.38 |
| Referral | 87 | 99 | −12% | 51.7% | 1.55 |
| Unassigned | 47 | 10 | +370% | **100%** ⚠️ | 1.07 |
| **AI Assistant** | **44** | 59 | **−25%** 🔴 | 38.6% | 1.29 |
| Organic Social | 25 | 21 | +19% | 48.0% | 1.04 |

**Organic recovered to +9%** after last week's flat reading, and it agrees with GSC (+21% clicks —
GSC counts a wider window and both directions match). This is the real number.

**Exclude Direct and Unassigned from every conclusion.** Direct shows 2,312 sessions from 2,089
users (1.11 sessions/user) at 70% bounce; Unassigned is 47 sessions at a literal 100% bounce with
1.07 sessions/user. Both carry the bot signature the program has flagged since July. Direct
"growing 39%" is not a marketing result and should not be reported to the board as one.

**AI Assistant sessions fell 25% (59 → 44) — but this is not a decline, and an earlier draft
of this report was wrong to flag it 🔴.** Distinct **users rose 30 → 34 (+13%)** over the same
window. Sessions-per-user dropped to 1.29, bounce improved to 38.6% — the best on the site — and
dwell rose. Fewer repeat sessions from more distinct people who stay longer is an improvement,
not a loss. The 28-day comparison is also dragged by a spike in the *prior* window (9 sessions on
07-29); the most recent week (Aug 21–27, 12 sessions) is the strongest in three.

**Report users, not sessions, for this channel.** At 44 sessions the base is small enough that
a handful of repeat visits swings the session count by 25% while the underlying audience grows.

The one genuinely negative signal is **Perplexity: 6 → 1 sessions**. Small base, but it is the
only engine moving clearly the wrong way — and the GEO monitor cannot see it (§7).

⚠️ **Instrument scope:** `track_geo.py` asks **Claude with web search** and checks whether
KabatOne appears. It is a proxy for AI-answer visibility — **not** a ChatGPT measurement. Yet
GA4 shows ChatGPT is our largest AI referrer by far. We are measuring one engine and getting
traffic from another. Do not report the citation rate as "AI engines cite us" without this caveat.

**Landing pages — sessions, dwell, bounce**

| Page | Sessions | Prior | Dwell | Bounce |
|---|---|---|---|---|
| `/es` | 108 | 108 | 264s | 37% |
| `/` | 97 | 87 | 195s | 40% |
| `/resources/best-cad-dispatch-software` | 81 | 54 (+50%) | 217s | 40% |
| **`/resources/cctv-video-analytics`** | **79** | **27 (+193%)** 🟢 | 69s | 48% |
| `/es/resources/how-c5-command-centers-work` | 52 | 96 (−46%) 🔴 | 169s | 62% |
| `/es/resources/what-is-a-command-center` | 32 | 13 (+146%) | 278s | 66% |
| `/resources/what-is-video-management-software` | 17 | 43 (−60%) 🔴 | **32s** ⚠️ | 41% |
| `/es/resources/que-es-un-c5` | 13 | 0 (new) | **3s** ⚠️ | 77% |

Two content-quality findings, distinct from ranking:

- **`what-is-video-management-software` — 32s dwell.** This page carries 18,638 impressions, the
  second-largest pool on the site, and visitors leave in half a minute. It is a Track C target
  (§4) and the dwell number says a ranking lift alone would pour traffic into a page that does not
  hold it. Content depth first, then links.
- **`/es/resources/que-es-un-c5` — 3s dwell, 77% bounce (13 sessions, this 28d window).** A
  parallel pull over a different window returned 5s / 60% on 5 sessions — the figure is
  window-sensitive on a small base, so treat the magnitude loosely. Either way it is
  bounce-on-arrival, which is the point. Consistent
  with the `c5` navigational read in §3: these are CDMX residents who wanted the agency, landed on
  a vendor explainer, and left immediately. Further confirmation to keep `c5` excluded.

`cctv-video-analytics` nearly tripled sessions (27 → 79) and is now the site's top click-earning
page in GSC (82 clicks). Its 69s dwell is mediocre and worth a look, but the trajectory is the
best on the site.

---

## 7. Technical / structural

All verified live this run:

| Check | Result |
|---|---|
| Canonical form (production) | ✅ Unslashed, matches served URL |
| Slashed → unslashed redirect | ✅ 1 hop, 308, 200 terminal |
| Apex vs www | ✅ apex primary, www → apex 308 |
| Sitemap | ✅ 234 URLs, all unslashed, matches route count |
| `llms.txt` | ✅ 200 |
| Staging `noindex` | ✅ holding since v2.322 |
| Daily audit | ✅ CLEAN 08-27 and 08-28, 234 pages, 0 new issues |

**No open technical defects.** This is the first week of the program that can be said.

---

## 8. Operations & health

| Item | Status |
|---|---|
| **Shipping** | ✅ Promoted 2026-08-21 (`8b5059e`). Production is 7 days old. |
| Unshipped on `nextjs` | 7 commits — **all tooling/logging** (audit logs, scheduler watchdog v2.326/v2.327, weekly brief). **No SEO fixes pending.** |
| Redesign exposure | ✅ No redesign branches in the promotion set (per redesign hold) |
| GSC freshness | ✅ 2-day lag, normal |
| **GEO monitor** | 🔴 **Last run 2026-08-12 — 16 days stale** (`SEO/geo/geo-history.csv`) |
| Daily SEO audit | ✅ Recovered. Gap 08-23…08-26 back-filled by v2.326/v2.327 |
| Site size | 234 sitemap URLs = route count × locales. Consistent. |
| Pipeline | ✅ GSC pull OK · GA4 pull OK |

The scheduler work of the last week (v2.324/v2.326/v2.327) did its job — the daily audit gap was
detected and recovered rather than silently lost. That machinery is now sound.

---

## 9. Blockers — owner named

| # | Blocker | Owner | Note |
|---|---|---|---|
| B1 | ~~KAB-1721 board decision on Tracks A + C~~ | ~~Omer~~ | ❌ **WITHDRAWN 2026-08-31 — this blocker did not exist.** CHANGELOG v2.286 records board approval via KAB-1980 ("both") on **2026-07-27**. Track A ran as the roundup program (v2.277–v2.284); Track C's first move (freshness/E-E-A-T on the two flagship VMS pages) shipped the same day. This report, and the two before it, wrongly held a decided item against Omer for five weeks. What actually stalled is the Track C **escalation** — v2.286 set its own trigger ("if this doesn't move the needle within 2–3 weekly pulls"), the page went 17.4 → 17.5 across two pulls, and nobody pulled the lever. Re-owned to Claude in `SEO/carry-over.md`. |
| B2 | Backlinks / authority | **Omer** | Needs human. Unblocked only after B1 defines where authority should point. |
| B3 | GEO monitor not scheduled | Claude | 16 days stale. I can fix this — not blocked on a human. |

---

## 10. Priority queue

### 🥇 #1 — Consolidate the video-analytics cluster and re-point its internal links

**Carry-over: week 3 🔴** (recommended 08-12 and 08-20, not executed.)

The cluster has four pages. This week's data settles which one wins, and I found the mechanism
keeping the others alive:

| Page | Impressions | Pos | Clicks | Internal links pointing at it |
|---|---|---|---|---|
| `/resources/cctv-video-analytics` | 5,375 | **11.0** 🟢 | **82** | **8** |
| `/resources/what-is-video-analytics` | 10,382 | **27.2** 🔴 | 6 | **28** ⚠️ |
| `/resources/ai-video-analytics` | ~0 | absent | 0 | — |
| `/resources/best-ai-video-analytics-software` | 5,036 | 16.4 | 9 | — |

**The site is pointing 28 internal links at its dead page and 8 at its winner.** That is the
cannibalization mechanism, stated concretely for the first time — and it is why
`cctv-video-analytics` sat at position 18 for months and only broke out once external signals
outweighed the internal ones. `what-is-video-analytics` has decayed from 21.5 (July) to 27.2 while
absorbing three and a half times the internal authority.

**Action:** 301 `what-is-video-analytics` and `ai-video-analytics` → `cctv-video-analytics`;
rewrite all 28 internal links to the winner. **Keep `best-ai-video-analytics-software`** — distinct
buyer intent ("best…software"), position 16.4, and it gained 6.8 positions on its head query this
week. Do not fold it in.

**Why this beats the runner-up:** it is the only item in the queue that is fully within my control
(no board decision, no external authority), it is small and reversible, it is evidence-backed
rather than a judgement call, and it feeds the single page with the best trajectory on the site.
Track C (below) is arguably larger in raw upside — 18,638 impressions — but §6 shows that page
holds visitors 32 seconds, so pushing rank before fixing depth would waste the lift. Consolidation
first, depth second, links third.

**Effort:** ~1h. Redirects in `next.config.ts`, 28 link rewrites, sitemap removal, changelog.
**Risk:** low — both pages are already de-ranked; nothing to lose.

### #2 — ❌ **Withdrawn.** Track A and Track C were approved on 2026-07-27 (KAB-1980)
Replaced by: **execute the Track C escalation** — earn real update history on
`/resources/what-is-video-management-software`, per the trigger v2.286 set for itself. Owner:
Claude, not Omer. The zero-click block is real and the cause is documented; what was missing was
follow-through, not a decision.

**The real ask of the week is SHIP-1** — promote `nextjs` → `main`. Verified live: production
still serves `/resources/ai-video-analytics` at 200 while staging 302s it to the consolidation
target. Until that ships, the consolidation and canonical fixes are worth zero, and any Track C
measurement is measuring stale pages.

### #3 — Re-schedule the GEO monitor (16 days stale) — Claude
AI Assistant traffic just fell 25% and the instrument that would explain it is not running.
Cheap to fix and it is the measurement layer for #2.

### #4 — ✅ **DONE (v2.328)** — Close two real intent-classifier gaps
The premise I originally filed this under was wrong (see §3 correction): `c5` was already handled.
Testing the classifier directly surfaced two genuine misclassifications instead:

| Query | Was | Now |
|---|---|---|
| `que significa c4 y c5` | buyer, **2.5** | informational, 1.5 |
| `grupo kabat` / `kabatone` | buyer, 1.0 | navigational, **0.2** |

Cause 1: `_INFORMATIONAL` listed `significado` but not the conjugated `significa`, which is what
people actually type. Cause 2: brand terms had no navigational entry, so queries that already
convert at ~27% CTR were competing for space in the opportunity queue as if they were unwon.
Buyer queries are unaffected — re-verified `best fire computer aided dispatch software` (3.0),
`vms software` (2.0), `cad dispatch software` (3.0).

### #5 — Watch `/k-dispatch/` (−3.5 positions) — Claude
Re-check on the 09-04 pull. If the CAD/911 cluster softens a second consecutive week, this
escalates above #1.

### #6 — Content depth on `what-is-video-management-software` (Track C prerequisite)
32s dwell on the site's #2 impression pool. Blocked behind #2.

---

## Housekeeping

**Shipped since last report**
- ✅ **Canonical fix promoted to production** (08-21) — closes the 🔴 critical item carried from 08-10
- ✅ Daily-audit gap detection and catch-up (v2.324, v2.326, v2.327) — 08-23…08-26 gap recovered
- ✅ Weekly brief 08-24

**Refuted / withdrawn this week**
- ❌ *"The zero-click block has never been diagnosed"* (stated in the 08-12 and 08-20 reports) —
  **wrong**. Diagnosed 2026-07-20 as AI Overview absorption; this week's data confirms it. The
  problem is an unactioned prescription, not an unknown cause.
- ❌ *Snippet/title rewrites for the zero-click queries* — verified live that titles and meta are
  already keyword-first and year-stamped. Ruled out in July, re-confirmed today.
- ❌ *`c5` as the #1 opportunity* (+217 potential clicks, per the automated brief) — navigational,
  third week excluded. Now corroborated by GA4: `/es/resources/que-es-un-c5` holds visitors **3
  seconds** at 77% bounce.
- ❌ *Slashed/unslashed double-reporting in GSC as a defect* — expected transitional artefact of the
  canonical change. Re-check 09-25.

**Carry-over count**
| Item | Weeks |
|---|---|
| Video-analytics consolidation | **3** 🔴 |
| ~~KAB-1721 board decision (B1)~~ | ❌ withdrawn — was approved 2026-07-27 |
| Track C escalation (re-owned to Claude) | **5** 🔴 |
| Backlink/authority program | 6+ |
