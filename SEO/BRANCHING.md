# How work reaches production

Read this before shipping. Getting it wrong nearly cost a live regression on 2026-08-31.

## The topology is not what the branch names suggest

| Branch | Role | Version (2026-08-31) |
|---|---|---|
| `main` | **production** — `kabatone.com` | v2.376 |
| `nextjs` | staging — `staging.kabatone.com` | v2.338 |

`nextjs` is **not** simply ahead of `main`. The two have **diverged**:

- `main` carries **165+ commits that never went through `nextjs`** — the v2.338–v2.375 range
  (hero fixes, mobile menus, GA4 lead-conversion fix) reached production as PRs #12–#17.
- `main` is at a **higher version** than `nextjs`.
- **30+ source files are modified on both sides**, including `next.config.ts`,
  `src/content/{en,es}/metadata.ts`, `k-video`, and `what-is-video-management-software`.

## The rule

**To ship to production: branch from `main`, re-apply the change, open a PR to `main`.**

Do **not** merge `nextjs` into `main`. That merges an older line into a newer one across files
both sides have edited. On 2026-08-31 that merge was approved and started before a merge-base
check caught the divergence at the last step.

```bash
# Correct route
git worktree add -b seo/<slug> <path> origin/main   # worktree avoids untracked-file collisions
# ...re-apply the change against main's current content...
npm run build                                        # needs its own npm install in a worktree
gh pr create --base main
```

A worktree is strongly preferred: switching the primary tree to a `main`-based branch collides
with dozens of untracked files (`hero-lab`, `design-assets/`, `public/images/hero-cards/`) that
exist as *tracked* files on `main`.

## Why the one-line check misleads

```bash
git rev-list --count origin/main..origin/nextjs    # "13 behind"  ← only half the question
git rev-list --count origin/nextjs..origin/main    # "163 ahead"  ← the half that gets skipped
test "$(git merge-base origin/main origin/nextjs)" = "$(git rev-parse origin/main)" \
  && echo "fast-forward" || echo "DIVERGED"
```

`scripts/seo_diff.py` now reports both directions, names each branch's version, lists the
overlapping files, and refuses to describe a diverged branch as "behind". Trust it over a
remembered number.

## Consequence: SEO work exists twice

The video-analytics consolidation and canonical fixes live on `nextjs` (v2.329, v2.331) *and*
on `main` (v2.376, PR #17) as **different commits with the same effect**. That is expected and
harmless, but it means:

- Don't "re-ship" v2.329 work to production — check `main` first (`git show origin/main:next.config.ts | grep cctv`).
- Version numbers are **per branch**. Take the next version from the CHANGELOG of the branch
  you are actually on.

## Standing rules

- Never push to `main` directly. PRs only.
- Never commit redesign work (`hero-lab`, `hero-lab-prev`, `hero-redesign`) unless Omer says so.
  Adding a directory can sweep it in — verify with
  `git diff --cached --name-only | grep -i "hero-lab\|redesign"`.
- `CHANGELOG.md` **and** `changelog.html` in the same commit as the change.
- Do not push without an explicit request.
