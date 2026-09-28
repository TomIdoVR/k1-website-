# Branching — one long-lived branch

**Updated 2026-09-28.** `main` is the only long-lived branch. Every change is a short-lived
branch off `main`, reviewed on its Vercel preview, and merged by PR. Merging is shipping.

| Where | What |
|---|---|
| `main` | Production — `kabatone.com`, deploys on every merge |
| A PR's preview URL | Staging for that change — Vercel posts it on the PR |
| `nextjs` | **Retired.** Archived as the tag `archive/nextjs-2026-09-28`. Do not build on it. |

## How to ship a change

```bash
git fetch origin
git switch -c <type>/<topic> origin/main     # e.g. seo/vms-intent-collision
# … change, build (npm run build), update CHANGELOG.md + changelog.html …
git push -u origin <type>/<topic>
gh pr create --base main
# check the Vercel preview on the PR, then merge — that is the deploy
```

Verify on the live site after the deploy, not on the diff: several fixes this year were
correct in git and wrong on the page.

## Why `nextjs` was retired

`nextjs` was meant to be a rehearsal copy promoted to `main` in one go. That stopped on
**2026-08-21**, the last promotion. After it, work reached `main` directly through PR
branches (careers, hero, mobile menus, SEO fixes) while other work kept landing on `nextjs`
and was never promoted. By 2026-09-28 they had diverged — **`main` 185 commits ahead,
`nextjs` 56 ahead, 42 source files changed on both sides** — so `nextjs` could no longer be
promoted without overwriting newer production code.

The cost was measured, not hypothetical. Finished SEO fixes sat on `nextjs`, invisible in
every metric:

| Fix | Built on `nextjs` | Shipped to `main` | Days stranded |
|---|---|---|---|
| CAD-1 internal links | v2.342 / 2026-08-31 | PR #18 / 2026-09-22 | 22 |
| C5 fifth-C definition | v2.347 / 2026-09-01 | PR #21 / 2026-09-28 | 27 |
| VMS intent collision | v2.348 / 2026-09-01 | PR #23 / 2026-09-28 | 27 |
| Answer-first CAD/VMS/CCTV | v2.343–344 / 2026-08-31 | PR #25 / 2026-09-28 | 28 |

The underlying cause was an instruction, not a person: `CLAUDE.md` said *"All development
happens on `nextjs`"*, so every agent built there, faithfully, long after the workflow it
described had stopped.

On retirement, all of `nextjs`'s website work was either already live or shipped in PRs
#24–#25; its SEO tooling and history moved in #24. Two things were deliberately **not**
shipped: v2.342's remaining CAD link repoints (v2.377 chose to keep those
explainer-to-explainer links), and daily audit-log commits.

## The guard that replaces the old divergence check

`scripts/seo_diff.py` → `shipping()` now lists every remote branch that holds commits `main`
lacks, and flags 🔴 any whose last commit is older than **7 days**. That is the new shape of
the old failure: work done and invisible. Ship it or delete the branch.
