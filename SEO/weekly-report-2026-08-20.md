# KabatOne Weekly SEO + Traffic Report — 2026-08-20

**Window:** 2026-07-22 → 2026-08-18 (28d) vs prior 28d.
**Sources:** GSC (`https://kabatone.com/`, fresh pull `SEO/gsc-fresh-2026-08-20.json`) + GA4 (property 530090453, 28d).
**Previous:** `weekly-report-2026-08-12.md`.

---

## Headline — the position plateau finally broke

| Metric | Now (08-20) | 08-10 | Δ |
|---|---|---|---|
| Clicks | **437** | 428 | +2% |
| Impressions | **102,663** | 94,361 | **+8.8%** |
| Avg CTR | 0.44% | 0.48% | −0.04pt |
| Avg position | **13.3** | 13.8 | **−0.5 (better)** |

Position had been frozen at 13.8 for three consecutive pulls. It moved this week, and impressions
crossed 100k for the first time. Clicks turned positive (+2%) after two weeks of decline.

CTR still erodes — but that is now arithmetic, not a new problem: impressions grew 8.8% against
2% click growth. The zero-click block below is the reason, and it is unchanged for a third week.

---

## ✅ The domain fix landed — and it worked

The 🔴 critical finding from 08-10 is **half-resolved in production**. Verified live this run:

```
BEFORE (08-10):  kabatone.com/path/  →307→  www.kabatone.com/path/  →308→  www.kabatone.com/path
NOW (08-20):     kabatone.com/path/  →308→  kabatone.com/path                     (1 hop, apex)
                 www.kabatone.com/path  →308→  kabatone.com/path                  (correct direction)
```

The apex is now primary and the host redirect is permanent. **2 hops → 1.** This is the most
plausible cause of the position improvement: the daily trend shows position stepping from ~13.5–15.1
(Aug 6–9) to ~12.1–12.5 (Aug 10–13) and holding. Correlation, not proof — but the timing lines up
with the switch, and nothing else shipped in that window that would move rankings sitewide.

### What is still broken: the fix is written, it just has not shipped

> **Correction (2026-08-20, post-review).** An earlier revision of this report recommended adding
> `trailingSlash: true` to `next.config.ts` as the #1 action. **That recommendation was wrong and has
> been withdrawn.** v2.314 (Aug 10) tested that option and rejected it for a concrete reason: Next
> applies `trailingSlash` to route handlers too, so `POST /api/slack/events` would begin returning
> 308 — and Slack's Events API does not follow redirects. Shipping it would have broken the Slack
> integration. The correct fix was already written the same day and is sitting on staging.

The real fix — 449 canonicals and 856 schema/`llms.txt` URLs rewritten to the **unslashed** form —
landed on `nextjs` in v2.314 and has been live on staging for 10 days. Verified 2026-08-20:

| | Canonical served for `/resources/best-cad-dispatch-software/` |
|---|---|
| Production | `https://kabatone.com/resources/best-cad-dispatch-software/` ← still points at a redirect |
| Staging | `https://kabatone.com/resources/best-cad-dispatch-software` ✅ |
| Staging `POST /api/slack/events` | 401 (signature check), **not** 308 ✅ |

So every canonical on *production* still points at a redirect — but not because anything is unwritten.
It is because **`nextjs` has not been promoted to `main`**. That is the actual blocker.

---

## 🟢 The video-analytics cluster has a survivor, and it is climbing hard

Last two reports recommended deciding this cluster's fate. The data now decides it:

| Page | 08-10 | 08-20 | Move |
|---|---|---|---|
| `/resources/cctv-video-analytics/` | 3,248 impr, **pos 18.4** | 3,413 impr, **pos 13.6** | 🟢 **+4.8 positions** |
| `/resources/what-is-video-analytics/` | pos 41.5 | still absent from top pages | dead |
| `/resources/ai-video-analytics/` | 1 impression | still absent | dead |

`cctv-video-analytics` gained nearly five positions and grew clicks 21 → 24 while its two cluster
siblings stayed de-ranked. **Consolidate now.** 301 `what-is-video-analytics` and `ai-video-analytics`
into `cctv-video-analytics`. This was a judgement call two weeks ago; it is an evidence-backed one today.

---

## 🔴 Third week: 41 page-1 queries, zero clicks

Unchanged, and now demonstrably not a ranking problem — several of these queries **improved position
and still returned zero clicks**:

| Query | Impr | Pos now | Pos 08-10 |
|---|---|---|---|
| **best fire computer aided dispatch software** | **748** | **5.8** | 5.5 |
| 911 dispatch software | 129 | 6.2 | 6.4 |
| 911 cad software | 75 | 6.3 | 7.1 |
| best computer aided dispatch software | 58 | 6.9 | 7.4 |
| 911 dispatch cad system | 50 | 8.7 | 9.7 |
| 911 communications management software | 34 | **6.5** | 9.7 🟢 |
| analytic cctv cameras | 36 | **8.3** | 10.8 🟢 |
| ai video analytics processing feeds… | 46 | **7.1** | 9.7 🟢 |

49 page-1 queries, **41 of them zero-click on 1,868 impressions**. Queries climbing from position 10
to 6–8 and still converting nothing rules out "not visible enough." It is SERP-feature absorption or
a snippet that does not match intent. This is the largest identified waste on the site and it has
now survived three consecutive reports without diagnosis.

`best fire computer aided dispatch software` alone: 748 impressions at position 5.8 should yield
~30–40 clicks. It yields zero.

---

## Traffic (GA4, 28d)

| Channel | Sessions | Prior | Δ | Bounce |
|---|---|---|---|---|
| Direct | 2,383 | 1,149 | **+107%** | 69.6% |
| **Organic Search** | **856** | 855 | **0%** | 49.6% |
| Referral | 89 | 99 | −10% | 50.6% |
| **AI Assistant** | 49 | 45 | +9% | **34.7%** |
| Unassigned | 44 | 10 | +340% | 100% |
| Organic Social | 25 | 22 | +14% | 60.0% |

**Two things to read here.**

1. **Organic went flat.** 856 vs 855 sessions — after +9% last week. GSC clicks rose 2% in the same
   window, so this is not a collapse, but the organic session growth of the last month has stopped.
2. **The bot problem is worse and still unfixed** — third week running. Direct is now +107% at 69.6%
   bounce, `Unassigned` is up 340% at **100% bounce**, and `(not set)` accounts for 86 organic
   sessions at 100% bounce. Total sessions are unusable as a metric until this is filtered.

The weekly trend confirms the distortion is receding on its own, not that traffic collapsed:
W31 997 → W32 1,096 → W33 681 → W34 394 (partial week). The W31–32 peak was the Singapore bot burst.

**AI Assistant remains the best-quality traffic on the site** — 34.7% bounce against 49.6% for
organic. Small volume, but these visitors behave better than search visitors.

### Organic landing pages

| Page | Sessions | Δ | Bounce | Dwell |
|---|---|---|---|---|
| `/es` | 113 | +4 | 36.3% | 228s |
| `/` | 91 | −7 | 34.1% | 284s |
| `/resources/best-cad-dispatch-software` | 74 | **+24** | 39.2% | 174s |
| `/es/resources/how-c5-command-centers-work` | 72 | −11 | 68.1% | 100s |
| `/es/resources/what-is-a-command-center` | 34 | **+30** | 58.8% | 289s |
| `/resources/cctv-video-analytics` | 29 | +5 | 37.9% | 149s |
| `/resources/what-is-video-management-software` | 24 | **−18** | 41.7% | **37s** |
| `/k-dispatch` | 19 | +12 | **15.8%** | 314s |

Two flags worth acting on:

- **`what-is-video-management-software` is a content problem.** 21,053 impressions — the second-largest
  pool on the site — converting to 24 sessions with a **37-second dwell time**. Sessions fell 18 while
  impressions rose. Traffic arrives and leaves immediately. Position is improving (18.1 → 17.4);
  the page is not.
- **`/k-dispatch` is the best-performing page on the site** — 15.8% bounce, 314s dwell. Product-page
  intent converts. Worth more internal-link routing.

---

## Recommended next action

**Promote `nextjs` → `main`.** *(Needs Omer's go — production promotions are explicit-request only.)*

`nextjs` is **30 commits ahead of `main`**, and production has not moved since **Aug 5 — 15 days**.
Everything below is written, reviewed, and verified on staging, and none of it is reaching users:

- **v2.314** — the canonical fix (449 canonicals + 856 schema/`llms.txt` URLs)
- **v2.315** — audit now sees redirects
- **v2.316** — `/es/demo` was serving an English canonical
- **v2.317** — 86 over-length titles
- **v2.318–v2.322** — audit trust guards

Two things that make this safe: `main` shows 25 commits "ahead," but they are all merge commits from
prior promotions, not divergence — **the promotion is a clean merge**. And the hero-redesign work
(v2.332–v2.355) lives on `origin/hero-redesign`, not `nextjs`, so **promoting does not ship the
redesign**.

No amount of new SEO work compounds while the pipeline is stalled. This outranks every content item
in the queue.

---

## Priority queue

1. **Promote `nextjs` → `main`** (**Omer's go**) — 30 commits, 15 days stale, contains the canonical
   fix. Clean merge, no redesign exposure. Unblocks everything already shipped to staging.
2. **Diagnose the fire-CAD zero-click block** — 748 impressions at pos 5.8, zero clicks, three weeks
   running. Pull the live SERP and determine what absorbs the click. Highest-value single query on the site.
3. **Consolidate the video-analytics cluster** — 301 the two dead pages into `cctv-video-analytics`
   (now pos 13.6 and climbing). Evidence-backed as of this run.
4. **Fix GA4 bot filtering** — Direct +107%, Unassigned +340% at 100% bounce, 86 `(not set)` organic
   sessions. Third week carried. Every traffic number is unreliable until this is done.
5. **Rework `what-is-video-management-software`** — 21k impressions, 37s dwell, sessions falling.
   Largest page-2 pool on the site is wasting its impressions.
6. **Top up the Anthropic API credit** (**Omer**) — carried from 08-12. GEO coverage still unmeasurable.
7. ~~**Off-site authority for C5**~~ — **dropped.** Removed to resolve a contradiction with the
   housekeeping note below. A parallel agent brief scored `c5` as the site's #1 opportunity
   (+207 potential clicks); that math assumes page-1 CTR is winnable, but the sibling queries show
   the searcher wants gob.mx. Spending backlinks — the scarcest resource on the program — against
   citizen intent is the costliest version of this mistake. Same conclusion as the 08-12 review.

## Housekeeping

- ✅ Apex-domain switch shipped — the 08-10 critical finding is half-closed.
- ⚠️ The `c5` query (5,115 impr, pos 8.9, 7 clicks) remains the site's largest impression source, but
  sibling queries (`c5 mapa`, `camaras de videovigilancia c5`, `c4 y c5 diferencia`) confirm this is
  **citizens looking for CDMX's C5 agency, not buyers**. Do not optimize for it. Same conclusion as
  the 08-12 assessment.
- ⚠️ Items 2 and 4 have now been carried for three consecutive weeks without execution.

## Cross-check against the parallel agent brief

This report was reviewed against an independently generated agent brief for the same week. What that
brief did better, and what is being adopted:

- **Cluster-level click efficiency** — Video/VMS 30,760 impr → 18 clicks; CAD 13,625 → 8. A stronger
  frame than this report's page-by-page list. **Adopting for next week's format.**
- **"Potential clicks" quantification** — turns opportunities into an ordered queue. No equivalent
  here. **Adopting**, with the caveat that the metric must be intent-filtered (see the `c5` case above,
  where it produced the wrong #1).
- **The ops section** — commits shipped vs production pushes. This report never checked, and it was
  the single highest-value finding on the page. It is now the #1 action above.
- **AI landing depth** — AI citations land on the homepage (17 sessions), not deep pages. This report
  had the channel total but missed the insight.
- **Spain** — 17 clicks at pos 14.3, 1.75% CTR. Good catch, not surfaced here.

Where this report still holds: the **zero-click page-1 block** — 41 queries at pos ≤10 producing zero
clicks, including `best fire computer aided dispatch software` (748 impr, **pos 5.8**, 0 clicks).
Several *improved* position this week and still converted nothing. That is a buyer query, higher-value
than four of the brief's top five, and it is absent from the brief's list.
