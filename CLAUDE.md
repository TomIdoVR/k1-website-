# KabatOne Website — Claude Code Instructions

> These instructions apply to ALL agents and contributors working in this repo.
> Claude Code reads this file automatically at session start.

---

## MANDATORY: Update the changelog before every commit

**This is non-negotiable.** Before committing any change:

1. Open `CHANGELOG.md` and add a new entry at the top (below the header):
   ```
   ## [X.Y] YYYY-MM-DD — Short title
   **Added / Fixed / Changed / Improved**
   - bullet describing what changed and why
   ```
2. Open `changelog.html` and add a matching `<div class="tl-entry">` block at the very top of `<div class="timeline">`.
3. Stage `CHANGELOG.md` and `changelog.html` in the same commit as your changes.

If you made local changes and haven't logged them yet — log them now before doing anything else.

---

## Project snapshot

- **Stack:** Next.js 15 (App Router) + TypeScript, deployed on Vercel
- **Remote:** `https://github.com/TomIdoVR/k1-website-.git`
- **Full rules:** See `AGENTS.md`

## Deployment environments

| Where | What | URL |
|---|---|---|
| `main` | **Production** — the only long-lived branch | `kabatone.com` — deploys on every merge |
| Any PR | **Preview** — this is staging now | Vercel posts a preview link on the PR |

- **Every change is a short-lived branch off `main`**, merged through a PR. Test on the PR's Vercel preview; merging it puts it live.
- **Never build on `nextjs`.** It was retired on 2026-09-28 and archived as the tag `archive/nextjs-2026-09-28`. It had diverged from `main`, and finished fixes sat on it for 14–27 days because nothing moved them to production. If a stale local checkout is on `nextjs`, switch to `main` before starting.
- Never push directly to `main` — always via a PR.

## Git workflow

- Start every task with `git fetch origin && git switch -c <type>/<topic> origin/main`
- **Commit your changes** when the task is complete — do not leave edits as uncommitted local changes
- **Do not push or open a PR** without explicit user request — commit locally, then wait
- A branch with work not on `main` for more than 7 days is flagged by `scripts/seo_diff.py`: ship it or delete it
- Commit message format: `Type: short description (vX.Y)` — e.g. `Fix: nav links on industry pages (v0.7)`
- Always include `CHANGELOG.md` and `changelog.html` in the same commit as your changes

## Hub
- name: KabatOne Website
- color: #3b82f6
- description: KabatOne marketing site — Next.js 15, TypeScript, i18n (EN/ES), Vercel
- agents:
  - id: k1-website-dev | name: Website Developer | status: active | desc: Develops and maintains the KabatOne Next.js site. Pages, components, i18n, SEO. | triggers: update the site, fix bug on, add section, new page, update metadata | skills: frontend-design, website-qa, website-performance, seo-technical-implementation

## Key constraints

- All pages live under `src/app/[locale]/` — EN and ES served via i18n routing
- Metadata is in `src/content/en/metadata.ts` and `src/content/es/metadata.ts`
- Schema helpers are in `src/lib/schema.ts`
- Do not delete files without asking first
