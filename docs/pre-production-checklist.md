# Pre-Production Checklist — `nextjs` → `main` promotion

**Issue:** KAB-2643
**First run:** 2026-08-15
**Candidate:** `nextjs` @ `1cc8d95` (v2.321) — in sync with `origin/nextjs`
**Target:** `main` (kabatone.com)

Promotion = merge `nextjs` → `main`. `main` auto-deploys to production; `nextjs`
auto-deploys to `staging.kabatone.com`. Never push `main` directly.

---

## Gate results — run 2026-08-15

| # | Gate | Result | Notes |
|---|------|--------|-------|
| 1 | `nextjs` synced with `origin/nextjs` | **PASS** | `0 0` — nothing unpushed, nothing unpulled |
| 2 | TypeScript clean | **PASS** | `tsc --noEmit` exit 0 in a clean worktree |
| 3 | Working checkout is trustworthy | **FAIL** | see F-1 |
| 4 | No commits stranded on `main` | **PASS** | see F-2 |
| 5 | Staging reachable | **PASS** | `staging.kabatone.com/en` → 200 |
| 6 | Production reachable | **PASS** | `kabatone.com/en` → 200, `robots.txt` → 200 |
| 7 | Sitemap parity | **PASS** | prod 232 `<loc>`, staging 234 — +2 routes, no mass churn |
| 8 | Homepage parity (title / h1 / JSON-LD) | **PASS** | identical on both; 2 JSON-LD blocks each |
| 9 | Canonical + hreflang emitted | **PASS** | canonical + `en` / `es` / `x-default` present on both |
| 10 | Sitemap URLs return 200, not redirects | **FAIL (production)** | see F-3 — **fixed by this promotion** |
| 11 | Staging excluded from indexing | **FIXED (v2.322, unpushed)** | see F-4 |
| 12 | Production build green on Vercel | **PASS** | `dpl_GZbz2c7RyjqqR7NPyn8BBjkFrBDY` @ `1cc8d95` (branch `nextjs`) → `READY` |
| 13 | Visual / QA pass on staging | **PASS (no regressions)** | see F-5 — defects found, all pre-existing on production |

Local `npm run build` is a known false negative on this machine (fails at
`/_global-error` prerender under Node v25.8.1; Vercel's Node 20/22 builds fine).
`tsc --noEmit` is the reliable local gate.

---

## Findings

### F-3 — P0, live production defect: the production sitemap advertises redirecting URLs

Production's sitemap emits trailing-slash URLs, but production's server
308-redirects every one of them to the non-slash form:

```
sitemap says:  https://kabatone.com/es/          https://kabatone.com/k-dispatch/
server does:   /es/  → 308 → /es                 /en/ → 308 → /en
```

So ~231 of the 232 URLs Google is being handed resolve as redirects rather than
200s. Only the homepage (`/`) is served at the advertised URL.

Staging is already correct — its sitemap emits the non-slash form that actually
returns 200. **This promotion is the fix.** That makes it the strongest argument
for shipping rather than a reason to hold.

Expect a re-crawl and URL-form re-consolidation after promotion: canonicals and
hreflang targets change from `https://kabatone.com/es/` to
`https://kabatone.com/es` site-wide. Position noise for 1–2 weeks is normal and
should not be read as a regression. Baseline GSC before merging so the
before/after is attributable.

### F-4 — P1: staging is fully crawlable

`staging.kabatone.com/robots.txt` is:

```
User-Agent: *
Allow: /

Sitemap: https://kabatone.com/sitemap.xml
```

and staging pages serve `<meta name="robots" content="index, follow">`. Staging
invites crawling of a full duplicate of production.

Partially mitigated: staging's canonical and hreflang both point at
`kabatone.com`, so discovered staging URLs should consolidate to production. It
is a mitigation, not a control — canonicals are a hint. Fix by gating
`robots.txt` on the deployment environment so non-production returns
`Disallow: /`.

**Status: fixed in v2.322 (local, unpushed).** `src/app/robots.ts` returns
`Disallow: /` when `process.env.VERCEL_ENV === 'preview'`. The gate is
fail-safe: *only* an explicit `'preview'` disallows, so production and local
dev return the previous value verbatim and a missing `VERCEL_ENV` cannot
noindex kabatone.com. `main` is the Vercel production branch and
`kabatone.com` is a production domain on project `k1-website`, so `main`
deploys resolve to `production` — confirmed against the project's domain list,
not assumed. `tsc --noEmit` exit 0 in a clean worktree.

Note this fix ships *with* the promotion: pushing it to `nextjs` corrects
staging immediately, and merging carries a no-op change to production (the
production branch of the conditional is byte-identical to today's output).

### F-5 — QA pass on staging: defects found, none of them regressions

Run 2026-08-15 against `staging.kabatone.com`. **Every defect below reproduces
identically on production**, so none of them block the promotion — but none of
them are fixed by it either. Verdict for gate 13: **no regressions**.

**Coverage.** All 234 sitemap routes fetched: 234/234 → 200, zero dead pages.
EN/ES parity is exact — 117 EN routes, 117 ES routes, zero missing counterparts
in either direction. 11,716 `href`s harvested across all 234 pages → 439 unique
internal links; the 205 off-sitemap ones were status-checked individually.
Zero console errors on `/`, `/es`, `/contact`.

**D-1 — P1: the mobile contact page does not collapse to one column.** At a
390px viewport `/contact` and `/es/contact` lay out at 770px — just under 2×
the viewport. The form card is cut off at the right edge, the adjacent card
sits entirely off-screen, and the form's field grid stays 2-up at ~145px per
input (placeholders truncate to "Jane S…" / "City o…"). This is the primary
lead-capture path on the site. Also overflowing, less severely: `/` and `/es`
at 430px, `/k-dispatch` at 605px. `/demo` is correct at 390px.
Production measures the same values on all six — not a regression.

**D-2 — P1: 13 internal links 404.** All 404 on production too.
- `/privacy-policy` — linked from `src/app/[locale]/demo/page.tsx:511`, under
  the demo request form. The real page is `/privacy-policy-tamaulipas`; the
  generic path has never existed. A dead privacy link under a lead form is the
  worst-placed one in the set.
- `/es/es/contact`, `/es/es/k-dispatch`, and five `/es/es/resources/*` — the
  locale prefix is applied twice. A locale-aware link helper is being handed an
  already-prefixed path somewhere in the ES tree.
- `/integrations/facial-recognition` and `/es/integrations/facial-recognition`
  — linked from the `vs/*` comparison pages and `resources/rtcc-setup-guide`.
- `/resources/public-safety-software-uk` and its ES twin — linked from the
  jamaica, trinidad-and-tobago and israel country guides. No UK guide exists;
  either write one or repoint the links.
- `/ehref=` — malformed markup, an `href` swallowed part of the adjacent
  attribute. Source not yet located; it is a string-built link somewhere.

**D-3 — Info: internal links that redirect.** `/resources/`, `/es/resources/`,
`/resources/psim-alternatives/`, `/es/resources/psim-alternatives/`, `/es/` are
linked with a trailing slash and 308 to the non-slash form; five `/en/demo/*`
links 307 to the unprefixed form. Cosmetic — one wasted hop per click — but
these are the same class as F-3 and should be cleaned in the same pass.

**Not a defect.** The bundled crawler reported "page load timed out (30s)" and
a failed mobile test. That is a `networkidle` artifact of the hero's entrance
animation, not a real failure: the page renders correctly, all 234 routes
return 200, and a direct Playwright run with `domcontentloaded` loaded every
page with zero console errors.

### F-1 — P1: the primary checkout cannot be trusted for verification

The `nextjs` working tree in OneDrive is polluted with untracked files from
other branches — `src/components/hero-lab/*` and
`src/app/[locale]/hero-lab-prev/` are present on disk but tracked on neither
branch. Running `tsc` there produced 14 phantom errors that do not exist in
`nextjs`.

Verify releases from a clean worktree outside OneDrive:

```
git worktree add --detach /tmp/k1-preprod nextjs
ln -s "<repo>/node_modules" /tmp/k1-preprod/node_modules
cd /tmp/k1-preprod && npx tsc --noEmit
```

Also relevant: 14 stale branches and 7 stale `.claude/worktrees/` entries are
accumulating in this checkout.

### F-2 — resolved on inspection, recorded so it is not re-raised

`git diff --stat nextjs...main` shows `main` deleting `src/components/home2/*`
and `main` carrying a revert `main` alone has (`e0c5ff1` — "Revert: homepage v2
→ v1 on production"). That reads like a revert-resurrection hazard: merge
`nextjs` and homepage v2 comes back to production.

It is not. That diff is three-dot (against the merge base). `src/components/home2/`
does not exist on `nextjs` either, and `nextjs`'s `page.tsx` imports nothing
from it. Both branches are on homepage v1, and staging serves the same `<h1>`
and title as production. `main`'s 8 unique commits are prior promotion merges
plus that revert — nothing to strand.

---

## Divergence

```
main ← 82 commits  (staging work awaiting promotion)
main → 8 commits   (prior promotion merges + the v2.251 homepage revert)
hero-redesign → 104 ahead / 55 behind nextjs
```

82 commits of staging work is a large promotion backlog, but the shape is
benign: only +2 routes across all 82 commits, so it is metadata, copy, and SEO
refinement on existing pages rather than structural change.

`hero-redesign` is a **separate track** and is not part of this promotion. It
renders at `/en/hero-lab*`, not `/en`, and is not production-ready.

---

## Remaining before promotion

1. Baseline GSC (impressions, clicks, avg position, indexed count) so the
   trailing-slash re-consolidation is measurable — **do this first, it is not
   recoverable after the merge.**
2. ~~Run `/website-qa` against `staging.kabatone.com`.~~ **Done 2026-08-15** —
   no regressions; see F-5. The defects it surfaced (mobile contact overflow,
   13 broken internal links) are pre-existing on production and tracked
   separately, not as promotion blockers.
3. ~~Confirm the latest `nextjs` Vercel deployment is READY.~~ **Done
   2026-08-15** — `dpl_GZbz2c7RyjqqR7NPyn8BBjkFrBDY` @ `1cc8d95` is `READY`.
4. ~~Decide on F-4.~~ **Fixed in v2.322**, local and unpushed. Ships with the
   promotion; production output is unchanged by it.
5. Merge on explicit instruction from Omer only.

Gates 1–11 are re-runnable; re-run them on the promotion candidate commit, not
on this one, if `nextjs` advances before the merge.
