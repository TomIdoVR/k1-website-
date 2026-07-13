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
