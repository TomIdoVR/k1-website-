# KAB-2480 — Daily SEO audit trust guards

Findings and fix for four weeks of false CLEAN results from the daily audit.

Status: guards shipped in **v2.318** on `nextjs`. Baseline re-seeded in **v2.319**
(KAB-2491), which is what actually arms the coverage floor.

## What actually broke

The routine ran `node scripts/seo-audit.mjs` from a checkout 16 commits behind
`origin/nextjs`, so it executed a pre-`v2.315` script. Runs on 2026-07-22,
07-31, 08-03 and 08-04 all reported CLEAN over a fraction of the site.

One correction to the original diagnosis: **the 232 routes are not a hard-coded
list.** Since `v2.315` the script reads the target's own sitemap and falls back
to the 71-entry `ROUTES` constant only when the sitemap is unreachable. So there
were always *two* independent paths to a false CLEAN:

1. a stale checkout running an old script, and
2. a live sitemap fetch failing, silently dropping any current run to 71 URLs.

Only the first one happened. The second was still armed, and would have looked
identical in the runlog.

A third path surfaced later, on 2026-08-13 (KAB-2504): a checkout *ahead* of
origin. v2.317 had fixed 86 over-length strings locally but never pushed them,
so staging still served pre-fix HTML and the audit re-flagged every one of them.
Sync was only ever checked in one direction.

## The fix

Four guards in `scripts/seo-audit.mjs`, each turning a silent shrink or a wrong
target into a refusal with exit code 3 (distinct from `1` = critical issues
found, `2` = crash).

| Guard | Trips when | Override |
|---|---|---|
| `checkCheckoutSync()` behind | `git fetch` + `rev-list` shows HEAD behind `origin/nextjs` | `--allow-stale` |
| `checkCheckoutSync()` ahead | HEAD is ahead of `origin/nextjs` — the fixes are not deployed yet | `--allow-unshipped` |
| sitemap fallback | sitemap unreachable and the run would fall back to `ROUTES` | `--allow-route-fallback` |
| `checkCoverage()` floor | resolved URLs < 80% of the previous baseline's `pagesAudited` | `--allow-coverage-drop` |

The sync check is skipped for localhost targets, and downgraded to a warning if
git is unavailable, rather than failing the run.

The coverage floor is derived from the previous run's `pagesAudited` rather than
hard-coded, so it tracks the site as it grows instead of going stale the way the
route list did.

The overrides exist so an operator who understands why a check is tripping can
still get a run out — but has to say so on the command line, where the runlog
records it.

### Baseline re-seeded (KAB-2491)

This is the part that makes the coverage floor real, and v2.318 shipped without
it.

`checkCoverage()` reads `pagesAudited` from the **committed**
`scripts/seo-baseline.json`, and the script rewrites that file at the end of
every run. The committed copy still recorded `pagesAudited: 71` — a fossil of
the stale runs. So every routine run starting from a fresh `origin/nextjs`
checkout reset the baseline to 71 and armed the floor at **56**, far below the
~230-URL collapse it exists to catch. The guard was in the code and inert in
practice.

Re-seeded from the verified full run of 2026-08-13 13:02Z against
`staging.kabatone.com`: **234 URLs, 0 critical / 4 warnings / 83 info**, putting
the floor at **187**. (Warnings are down from 86 because v2.317's title and
description trims are now deployed.)

### Verification

- stale checkout → refuses, exit 3, names the branch and the sync command
- `--allow-stale` → downgrades to a warning and proceeds
- ahead-of-origin → refuses, exit 3 (reproduced the KAB-2504 false positive)
- unreachable sitemap → refuses, exit 3
- `--allow-route-fallback` → proceeds at 71 routes
- real run vs staging → 234 URLs, guards silent

The behind-origin branch shares the same verified `rev-list` call as the
ahead-branch and was not exercised live, since forcing it would require
rewinding the branch.

## Still open

- **Coverage is ~49% of the ~478 live URLs.** The sitemap is a deliberate subset
  of the repo — `keepInSitemap` in `src/app/sitemap.ts` drops non-ICP country
  pages as noindex per the 2026-07-07 indexation triage. A raw page count cannot
  tell full coverage from half of it. Tracked in KAB-2501 / KAB-2502 / KAB-2507.
- **`.git` lives inside OneDrive.** On 2026-08-13, 24 refs became unreadable
  cloud placeholders (`EDEADLK`), which aborted every `git fetch` with
  `bad object`. Recovered from `.git/packed-refs`, but the exposure is
  structural and will recur.
