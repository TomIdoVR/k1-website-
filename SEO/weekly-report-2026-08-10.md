# KabatOne Weekly SEO + Traffic Report — 2026-08-10

**Window:** 2026-07-12 → 2026-08-08 (28d) vs prior 28d.
**Sources:** GSC (property `https://kabatone.com/`, fresh pull `SEO/gsc-fresh-2026-08-10.json`) + GA4 (property 530090453 — **the 404 flagged on 07-27 is fixed**, channel data restored).

---

## Headline — impressions still compounding, clicks have stalled

| Metric | Current 28d | Prior pull (08-03) | Δ |
|---|---|---|---|
| Clicks | **428** | 452 | **−5%** |
| Impressions | **94,361** | 89,668 | **+5%** |
| Avg CTR | **0.48%** | 0.54% | **−0.06pt** |
| Avg position | 13.8 | 13.8 | flat |

The 07-27 report called CTR "the ceiling." It is now the **brake**: impressions grew a further 5% and clicks went *down*. Position stopped improving (13.2 → 13.8 → 13.8). Two consecutive weeks of impression growth converting into zero incremental clicks is no longer an AIO-only story — see the technical finding below.

### GA4 channels (28d vs prior 28d)

| Channel | Sessions | Prior | Δ | Bounce |
|---|---|---|---|---|
| Direct | 2,266 | 1,003 | +126% | 70.2% |
| Organic Search | **847** | 775 | **+9%** | 49.6% |
| Referral | 101 | 91 | +11% | 42.6% |
| AI Assistant | **53** | 35 | **+51%** | 54.7% |
| Organic Social | 21 | 21 | 0% | 76.2% |

**Discard the Direct number — it is bot traffic.** Breakdown: Singapore = **1,164 sessions from 1,166 users** (one session per user, the signature of automated clients), desktop Chrome, landing on `/`, clustered on 07-26, 07-28, 08-04/05/06. `/en/hero-lab` also shows 41 sessions from 9 users — that is our own QA automation. Total site sessions in GA4 weeks 31–32 (997, 1,097) are inflated ~2x against a real baseline of ~580.

**The real story is Organic +9% and AI Assistant +51%.** GEO is working: ChatGPT 37 sessions, Gemini 12, Claude 2, Perplexity 2 — landing mostly on `/` and `/about` (brand-name lookups), with a thin tail into `best-ai-video-analytics-software` and `k-dispatch`.

---

## 🔴 Critical finding — every indexed URL is behind a 2-hop redirect, and every canonical points at a redirect

This was not in any prior report. It affects **all 142 URLs GSC reports**.

```
https://kabatone.com/resources/best-cad-dispatch-software/   ← in sitemap, in canonical tag, in Google's index
  → 307 (temporary)  https://www.kabatone.com/resources/best-cad-dispatch-software/
  → 308              https://www.kabatone.com/resources/best-cad-dispatch-software
  → 200              whose <link rel="canonical"> says  https://kabatone.com/resources/best-cad-dispatch-software/
```

Three separate misalignments stacked:

1. **Vercel serves `www.kabatone.com` as the primary domain**, 307-redirecting the apex. The code disagrees: `src/app/sitemap.ts` hard-codes `baseUrl = 'https://kabatone.com'`, every canonical is non-www, `robots.txt` points at the non-www sitemap, and the GSC property is non-www.
2. **The 307 is temporary, not 301/308.** Host canonicalization must be permanent. This is the Vercel default for a non-primary domain, not a deliberate choice.
3. **Trailing slash mismatch.** Canonicals and the sitemap use `/path/`; Next.js 308-redirects `/path/` → `/path`. So the canonical URL never returns 200 on *either* host.

Net effect: the canonical tag points to a URL that redirects to the page carrying that canonical — a circular signal. Google is currently resolving it in our favour (all 142 reported pages are the non-www slashed form, **0 www**), so rankings are not lost. But every crawl of every page costs two extra round-trips, and the host signal is ambiguous. This is a plausible contributor to position stalling at 13.8 while impressions climb.

**Fix, part 1 — the trailing slash (shipped, v2.314, branch `seo-canonical-fix`):**

Every canonical, hreflang, `og:url`, JSON-LD `url`, and sitemap entry was rewritten to the unslashed form that Next actually serves — 449 canonicals, 856 schema/`llms.txt` URLs, and `src/app/sitemap.ts`. Only the bare origin `https://kabatone.com/` keeps its slash.

*The obvious alternative — `trailingSlash: true`, keeping the slashed form — was tried and rejected.* Next applies it to route handlers too (only static files and `.well-known/` are exempt, per the [docs](https://nextjs.org/docs/app/api-reference/config/next-config-js/trailingSlash)), so `/api/slack/events` would have started returning a 308. Slack's Events API does not follow redirects; it is a [documented webhook-breaker](https://github.com/vercel/next.js/discussions/23953). Going unslashed instead points the canonicals at the URL that already serves 200 and leaves the Slack routes untouched — verified: `POST /api/slack/events` still answers 401 (signature check), not a redirect.

**Fix, part 2 — the www 307 (needs Omer, Vercel dashboard):**

Set the apex `kabatone.com` as the **primary** domain so the redirect flips to www → apex, permanent. This aligns with what the code, sitemap, robots.txt, GSC property, and Google's index *already* use. Until this lands, part 1 alone takes the chain from 2 hops to 1.

*Note: staging (`nextjs`) has only the 308 hop, not the 307 — the www problem is production domain config, not code, which is also why the daily audit never caught it.*

---

## 🔴 The video-analytics cluster has collapsed

Last week's #1 recommended action was to fix cannibalization between `what-is-video-analytics` and `ai-video-analytics`. **It was never shipped** (latest SEO commits are a rank snapshot and the SEO-004 H1 fix). The problem has since resolved itself the wrong way — both pages fell out of contention:

| Page | 07-27 report | Now |
|---|---|---|
| `/resources/what-is-video-analytics/` | 12,643 impr, pos 24.9 | top query 11 impr, **pos 41.5** |
| `/resources/ai-video-analytics/` | 185 impr, pos 7.1 | **1 impression** |
| `/resources/cctv-video-analytics/` | 3,566 impr, pos 18.1 | 3,248 impr, pos 18.4 (holding) |

The 1,123 page-1 impressions on "ai-powered video analytics" are gone. The surviving spoke (`cctv-video-analytics`) is the only part of the cluster still ranking. Pages are live, `index, follow`, HTTP 200 — this is a ranking loss, not an indexation loss.

**Growth came from elsewhere and is now concentrated in two pages:**

| Page | Clicks | Impr | Pos | Trend |
|---|---|---|---|---|
| `/resources/best-cad-dispatch-software/` | 54 | **27,655** | 8.7 | +5,200 impr vs 07-27, page 1, holding |
| `/resources/what-is-video-management-software/` | 31 | **20,712** | **18.1** | +3,600 impr, pos 19.5 → 18.1 improving |
| `/es/resources/how-c5-command-centers-work/` | 48 | 10,037 | 7.8 | ES workhorse |
| `/resources/cctv-video-analytics/` | 21 | 3,248 | 18.4 | flat |
| `/k-dispatch/` | 11 | 2,383 | 9.8 | product page ranking |

Those two pages alone carry **51% of all site impressions**. That is concentration risk as much as it is a win.

---

## Zero-click page-1 queries — smaller than it first looks

Of 52 striking-distance queries at **position ≤ 10**, 41 produce zero clicks on 1,941 impressions. But **884 of those impressions are synthetic**, and must be excluded.

`best fire computer aided dispatch software` (884 impr, pos 5.5, 0 clicks) matches the automated-SERP-polling fingerprint that **v2.313 already documented on 2026-08-04**: ~100% desktop and a fixed country spread. Re-verified against this week's data — `usa:697, nld:70, gbr:60, deu:29, ita:23, hkg:4`, **883 desktop / 1 mobile**. Identical fingerprint. This is a rank tracker, not a buyer. `scripts/weekly_brief.py` already filters it (criteria: `clicks=0, impressions≥150, position≤10, desktop_share≥0.95`); the raw `gsc_pull_weekly.py` striking-distance list does **not**, which is why it resurfaced here.

**Excluding it: 40 queries, ~1,057 impressions.** The real list:

| Query | Impr | Pos |
|---|---|---|
| 911 dispatch software | 137 | 6.4 |
| 911 cad software | 74 | 7.1 |
| best computer aided dispatch software | 63 | 7.4 |
| avigilon alternative | 63 | 9.7 |
| 911 dispatch cad system | 52 | 9.7 |
| best cad and dispatch technology solutions | 33 | 5.7 |
| 911 cad demo | 31 | 8.4 |
| ambulance computer aided dispatch software | 27 | 8.4 |

That is a long tail of sub-150-impression CAD/911 terms. At those volumes, zero clicks over 28 days is statistically unremarkable — 137 impressions at a healthy 4% CTR is 5 clicks. **There is no single large on-page CTR win hiding here.** The cluster is directionally right (bottom-funnel, in-market, page 1) but individually too small to justify dedicated work; it argues for the CAD cluster's *aggregate* authority, not a per-query fix.

**Action for the striking-distance pipeline:** port the `weekly_brief.py` synthetic filter into `scripts/gsc_pull_weekly.py` so the raw snapshot stops re-surfacing polling artifacts as opportunities.

---

## GEO status

AI Assistant sessions +51% (35 → 53), sourced ChatGPT 37 / Gemini 12 / Claude 2 / Perplexity 2. Landing pages are overwhelmingly `/` and `/about` — i.e. **brand-name lookups, not discovery**. Only 4 sessions landed on a resource page. The GEO program is earning brand-confirmation traffic, not yet net-new discovery.

---

## Recommended next action

**Finish the domain/canonical alignment (the 🔴 critical finding).** Part 1 is shipped on `seo-canonical-fix` (v2.314) — every canonical now resolves to a 200 for the first time. Part 2 is the Vercel primary-domain switch, which only Omer can make. Together they remove two redirect hops from all 142 indexed URLs. It is the only item this week that is site-wide, low-risk, requires no content judgement, and is fully measurable (crawl stats + position within 2–3 weeks). Everything else on the list is a per-page fight; this one moves the floor under all of them.

---

## Priority queue

1. **Domain/canonical fix** — canonicals/sitemap unslashed (**shipped, v2.314**) + apex primary in Vercel (**needs Omer**). *This week.*
2. **Decide the video-analytics cluster's fate** — the hub and the AI spoke are effectively de-ranked. Either consolidate all three into `cctv-video-analytics` (the only survivor) with 301s, or rebuild the hub. Do not leave three competing pages where two rank nowhere. **This is the largest verified regression on the site.**
3. **Position push on `what-is-video-management-software`** — 20,712 impr at pos 18.1 and *improving*. The largest page-2 pool on the site; internal-link concentration is the lever. Carried over from 07-27, still valid.
4. **Filter bot traffic in GA4** — add a Singapore/datacenter exclusion or enable bot filtering, and exclude `/hero-lab*` from QA automation runs. Direct is currently unusable as a metric and inflates every total.
5. **Port the synthetic-query filter into `scripts/gsc_pull_weekly.py`** — small, prevents polling artifacts being re-litigated as opportunities every week (it cost this report a priority slot).
6. **Off-site authority** (G2/Capterra, guest article, PR) — still the ceiling for brand-recognition CTR. **Needs human.** Carried over.

## Housekeeping

- ✅ GA4 property-id 404 from 07-27 is **resolved** — `~/.config/claude-seo/google-api.json` now has `properties/530090453`.
- ✅ `.secrets/gsc-credentials.json` authenticated cleanly this run; `scripts/gsc_pull_weekly.py` works standalone again.
- **The daily audit's "0 critical, 0 warnings" was not trustworthy** — fixed in v2.315. It followed redirects silently (so it could never report one) and audited `/en/*`, a URL space that appears in no sitemap and no canonical and is itself a redirect. Both are why the production chain stayed invisible. It now walks redirect chains manually and audits the published root-locale URLs. Current state: `staging` clean, `kabatone.com` 71 × `redirect_chain`, `www.kabatone.com` 71 × `canonical_host_mismatch` — both production findings clear once the apex is primary, so the audit is now the pass/fail gate for that change.
- The daily job still targets staging; production deserves its own weekly run, since the 307 exists only there.
- Last week's #1 action was not executed. Recommend Paperclip-tracking the weekly #1 so it does not silently lapse again.
