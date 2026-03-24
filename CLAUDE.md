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

| Branch | Environment | URL |
|--------|-------------|-----|
| `nextjs` | **Staging** | `staging.kabatone.com` — auto-deploys on every push |
| `main` | **Production** | `kabatone.com` — only updates when `nextjs` is merged into `main` |

- All development happens on `nextjs`
- Never push directly to `main` — it is the production branch
- To promote staging → production: merge `nextjs` into `main` (via PR or direct merge, on explicit request only)

## Git workflow

- **Commit your changes** when the task is complete — do not leave edits as uncommitted local changes
- **Do not push** without explicit user request — commit locally, then wait
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
