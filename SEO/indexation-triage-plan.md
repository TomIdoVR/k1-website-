# KabatOne — Indexation Triage Plan (thin country pages)

> Created 2026-07-07. **Problem:** GSC shows **107 indexed / 325 NOT indexed (75%)**.
> The not-indexed spike aligns exactly with the June flood of **136 `public-safety-software-{country}`
> pages** (× 2 locales = 272 URLs) covering essentially every country on Earth. Google is
> correctly refusing to index thin, templated content with no market relevance.

## Why this must be fixed
- **Wasted crawl budget** — Googlebot spends time on pages it won't index instead of money pages.
- **Site-wide quality drag** — a 75%-not-indexed ratio signals low overall quality, which works
  *against* the money hubs (VMS, video-analytics, CAD) breaking onto page 1.
- **No upside** — these pages target markets KabatOne does not sell into and get ~0 impressions.

## The rule: keep only ICP-relevant markets
KabatOne's go-to-market is **Mexico + LATAM + US**. Keep pages that match that; prune the rest.

### ✅ KEEP + strengthen (~20 pages — real ICP relevance)
`mexico`, `municipalities-mexico`, `small-cities`, `united-states`, `canada`,
`costa-rica`, `panama`, `dominican-republic`, `ecuador`, `guyana`, `peru`, `colombia`,
`chile`, `argentina`, `brazil`, `guatemala`, `honduras`, `el-salvador`, `nicaragua`
- These get: unique local data (agencies, procurement law, real deployments), internal links
  from the hubs, and sitemap inclusion. Request indexing in GSC.

### ❌ PRUNE / noindex (~116 pages — no ICP relevance)
- **All of Africa** (~55): algeria, angola, benin, botswana, burkina-faso, burundi, cameroon,
  cape-verde, central-african-republic, chad, comoros, drc, djibouti, egypt, equatorial-guinea,
  eritrea, eswatini, ethiopia, gabon, gambia, ghana, guinea, guinea-bissau, ivory-coast, kenya,
  lesotho, liberia, libya, madagascar, malawi, mali, mauritania, mauritius, morocco, mozambique,
  namibia, niger, nigeria, republic-of-congo, rwanda, sao-tome-and-principe, senegal, seychelles,
  sierra-leone, somalia, south-africa, south-sudan, sudan, tanzania, togo, tunisia, uganda,
  zambia, zimbabwe
- **All of Europe** (~37): albania, austria, belgium, bosnia-herzegovina, bulgaria, croatia,
  cyprus, czech-republic, denmark, estonia, finland, france, germany, greece, hungary, iceland,
  ireland, italy, latvia, lithuania, luxembourg, malta, montenegro, netherlands, north-macedonia,
  norway, poland, portugal, romania, serbia, slovakia, slovenia, spain, sweden, switzerland,
  turkey, united-kingdom
- **Asia / Middle East / Oceania** (~22): australia, bangladesh, india, indonesia, iraq, israel,
  japan, jordan, kuwait, malaysia, middle-east, oman, pakistan, philippines, qatar, saudi-arabia,
  singapore, south-korea, thailand, uae, vietnam
- **Tiny Caribbean** (borderline — LATAM-adjacent but negligible markets): bahamas, barbados,
  trinidad-and-tobago, jamaica, puerto-rico → recommend **noindex** (keep only if a real deal exists)

## Mechanism — noindex first (reversible), then prune
**Phase 1 — noindex (safe, reversible, do first):**
- Add `robots: { index: false, follow: true }` to each pruned page's metadata (via
  `generatePageMetadata` / the metadata entry). Page stays live but drops out of the index →
  removes it from the "not indexed" backlog and stops Google wasting crawl budget.
- **Remove pruned paths from `src/app/sitemap.ts`** — never submit URLs you don't want indexed.
- Measure for 2–4 weeks: indexed-ratio should climb as crawl budget concentrates.

**Phase 2 — delete (after confirming no value):**
- Delete the page directories + metadata keys for the permanently-irrelevant set. Cleaner, but
  do it only after Phase 1 confirms zero traffic/impressions. **Requires explicit sign-off**
  (deleting 100+ pages is irreversible without git revert).

## Stop the source
The agent (now analysis-only) generated these. **Do not resume minting `public-safety-software-{country}`
pages** for non-ICP markets — it actively harms the domain. Future country pages only for real
target markets, with unique local substance.

## Effort / ownership
- Phase 1 noindex + sitemap prune: **~1 build, mechanical** — I can execute on approval (it's a
  large but reversible change touching ~116 metadata entries + sitemap).
- Deciding the keep/prune line: **your call** (market strategy).

## Expected outcome
Indexed ratio moves from ~25% toward 80%+ as the thin pages leave the backlog and crawl budget
concentrates on the ~20 ICP country pages + the money hubs + the new spokes — which is exactly
where page-1 breakthroughs will come from.
