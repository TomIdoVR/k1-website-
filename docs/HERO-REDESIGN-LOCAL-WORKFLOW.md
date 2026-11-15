# Hero Redesign — Local Parallel Workflow

## Purpose

This document keeps the reference-accurate homepage hero rebuild isolated from KabatOne's normal staging and production workflow while Codex and Claude Code work locally in parallel.

## Environment Map

| Environment | Branch | Location | Purpose |
|---|---|---|---|
| Codex hero rebuild | `codex/hero-reference-rebuild` | `.worktrees/codex-hero-reference-rebuild/` | Reference-accurate hero implementation and local QA |
| Existing website work | Current Claude Code branch/worktree | Existing checkout | Unrelated production-site work |
| Website staging | `nextjs` | `staging.kabatone.com` | Protected; do not merge or push hero work |
| Production | `main` | `kabatone.com` | Protected; owner approval required |

## Working On This Yourself (Owner)

You can run and edit the hero locally without any agent involved. It never touches
staging or production — everything lives in the `codex/hero-reference-rebuild`
worktree on your machine.

**One-time / each session:**

```bash
# 1. Go to the isolated hero worktree (already created — do NOT clone again)
cd "/Users/omercnaani/Library/CloudStorage/OneDrive-SYMSERVICIOSINTEGRALESSADECV/Claude/k1 Website/.worktrees/codex-hero-reference-rebuild"

# 2. Confirm you are on the right branch (should print: codex/hero-reference-rebuild)
git branch --show-current

# 3. Install dependencies the first time (skip on later runs)
npm install

# 4. Start the local dev server
npm run dev
```

Then open the isolated hero in your browser (use the port Next.js prints if 3000 is taken):

- English: `http://localhost:3000/en/hero-lab`
- Spanish: `http://localhost:3000/es/hero-lab`

The `/hero-lab` route is unlinked and `noindex`, so it is invisible to visitors and search engines.

**Files you edit** (changes hot-reload in the browser):

| What | File |
|---|---|
| Hero layout & content | `src/components/hero-lab/HeroV3Platform.tsx` |
| Hero styles | `src/app/[locale]/hero-lab/hero-lab-light.css` |
| Images | `public/images/hero-lab/` |

**Saving your work (stay local — never push):**

```bash
git add -A
git commit -m "Hero: <what you changed>"
```

Commit only. Do **not** run `git push`, and do **not** merge into `nextjs` or `main` —
that is what keeps it off the live site until you approve promotion.

**If it breaks and you want a clean slate:**

```bash
git restore .          # discard uncommitted edits
# or, to go back to the last committed hero state:
git reset --hard HEAD
```

If an agent is actively editing the same worktree, coordinate first (see Parallel-Work
Rules) so you are not both writing the same file at once.

## Local Review

From the Codex hero worktree:

```bash
npm run dev
```

Review the isolated design at:

- English: `http://localhost:3000/en/hero-lab`
- Spanish: `http://localhost:3000/es/hero-lab`

If port 3000 is occupied, use the port printed by Next.js. The `/hero-lab` route remains unlinked and `noindex`.

## Source of Truth

- Reference image: `/Users/omercnaani/Downloads/hero.png`
- Approved design spec: `docs/superpowers/specs/2026-07-13-reference-hero-rebuild-design.md`
- Primary component: `src/components/hero-lab/HeroV3Platform.tsx`
- Scoped styles: `src/app/[locale]/hero-lab/hero-lab-light.css`
- Supporting assets: `public/images/hero-lab/`

## Parallel-Work Rules

1. Codex owns the files listed under Source of Truth while implementing this hero iteration.
2. Claude Code must use a separate branch/worktree for any hero edits and must not edit `.worktrees/codex-hero-reference-rebuild/`.
3. Do not run two agents against the same physical file, even if they are discussing different parts of the hero.
4. Exchange work through commits. Cherry-pick or merge only after reviewing the diff and local screenshots.
5. Keep unrelated SEO, privacy, simulator, and production-site work out of the hero branch.
6. Do not push, deploy, merge into `nextjs`, or merge into `main` without explicit owner approval.

## Current Scope

- Rebuild only the hero shown in the supplied reference.
- Desktop target: 1536 × 1024.
- Mobile/tablet cards become a controlled carousel with swipe/drag, arrows, and pagination dots.
- Proof metrics: 70M+ citizens protected, 40+ cities deployed, 99.9% uptime SLA.
- Every homepage section below the hero remains unchanged.

## Handoff Checklist

Before another agent changes the hero:

- Read the approved design spec and this workflow document.
- Confirm the active branch and worktree path.
- Check `git status` and preserve unrelated changes.
- State which hero files the agent will own.
- Run local English and Spanish visual checks before committing.
- Update both changelog files in the same commit.
