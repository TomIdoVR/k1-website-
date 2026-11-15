# KabatOne Website — Setup Report

> Read-only investigation of the kabatone.com repo, prepared to support a lightweight, repeatable design workflow. No code was changed. Generated 2026-07-11.
>
> **Caveat:** `AGENTS.md` in this repo is **stale**. It describes an old single-file `hero-mockup.html` mockup and lists `nextjs`/`main` as the branch pair. The live site is a Next.js App Router app, and the actual default branch is `main` (see §6). Trust this report over `AGENTS.md` where they conflict.

---

## 1. Repo & Stack

| Item | Value |
|---|---|
| GitHub repo | `TomIdoVR/k1-website-` — https://github.com/TomIdoVR/k1-website-.git |
| Package name | `kabatone-next` (v0.1.0, private) |
| Framework | **Next.js `^16.2.6`** (App Router) |
| React | `19.2.4` |
| Language | **TypeScript** (`^5`) |
| Styling | **Tailwind CSS v4** (`@import "tailwindcss"` in `globals.css`, PostCSS plugin `@tailwindcss/postcss`) **+ CSS custom-property design tokens** and hand-written CSS files. No CSS modules, no styled-components. |
| i18n | `next-intl` `^4.8.3` (EN/ES) |
| Other notable deps | `framer-motion`, `leaflet` + `react-leaflet` (maps), `@anthropic-ai/sdk`, `@slack/web-api` |

**Top-level directory layout (key entries):**

```
src/                  App code (see §2)
public/               Static assets served at site root (images, downloads, og-default.png, llms.txt, icons)
images/               Legacy/source images (modules/, mockups) — note: separate from public/
scripts/              SEO + GSC pull scripts (Python + JSON reports)
docs/                 Docs
SEO/                  SEO audits, GSC exports, weekly reports
.claude/              Repo-local Claude config (settings.local.json, launch.json, worktrees/)
.github/workflows/    health-check.yml
next.config.ts, middleware.ts, eslint.config.mjs, postcss.config.mjs, tsconfig
CHANGELOG.md, changelog.html   Mandatory changelog (see §6)
+ many loose *.html / *.md design experiment files at root (act-*.html, demo-*.html, etc.)
```

`src/` layout:
```
src/app/[locale]/     Localized routes (EN/ES) — all pages live here
src/app/api/          API routes
src/components/       Reusable React components (+ demo/, hero-lab/, industry-heroes/)
src/content/en, es/   Marketing copy + metadata (TS files)
src/data/             Data (incl. demo/)
src/i18n/             next-intl config (request.ts, navigation)
src/lib/              Helpers (schema.ts, metadata.ts, seo-agent/, simulator/)
```

---

## 2. Pages / Content

- **How pages are defined:** **File-based routes** under `src/app/[locale]/`, one folder per route with a `page.tsx`. EN and ES are served from the same route tree via `next-intl` locale routing. No MDX, no external CMS.
- **Route folders present:** `about`, `contact`, `demo`, `hero-lab`, `industries`, `integrations`, `k-connect`, `k-dispatch`, `k-safety`, `k-traffic`, `k-video`, `lp` (landing pages), `privacy`, `privacy-policy-tamaulipas`, `resources`, `simulator`, `vs` (comparison pages), plus `page.tsx` (home), `layout.tsx`, `not-found.tsx`.
- **Where marketing copy lives:** Two patterns coexist —
  1. **Centralized content modules:** `src/content/en/pages/*.ts` and `src/content/es/pages/*.ts` (e.g. `home.ts`, `about.ts`, `k-safety.ts`, `k-dispatch.ts`, `k-video.ts`, `k-connect.ts`, `k-traffic.ts`, `contact.ts`, plus an `industries/` subfolder). Metadata (title/description per page) is in `src/content/en/metadata.ts` and `src/content/es/metadata.ts`.
  2. **Inline copy inside page/component TSX:** the homepage (`src/app/[locale]/page.tsx`) holds product cards, "why" cards, and section copy as inline EN/ES object literals (ternary `es ? … : …`) directly in the file.
- **Rough page count:** `find src/app -name page.tsx` returns **229** `page.tsx` files. This is inflated by large programmatic sets (country/LATAM pages, `vs/` comparisons, `lp/` landing pages, `resources/` spokes). The core hand-built marketing surface is ~15–20 route types; the rest are generated ICP/SEO variants.

---

## 3. Images / Assets

- **Where images live:** two locations —
  - `public/` — served at the site root (`/images/...`, `/downloads/`, `/ebook/`, `/demo/`, icons, `og-default.png`, `llms.txt`). This is the canonical location referenced by the app.
  - `images/` (repo root) — legacy/source images including `images/modules/*.webp` and product mockups. Referenced paths like `/images/modules/gis.webp` resolve against `public/images/...` at runtime.
- **Formats in use (counts across `public/` + `images/`):** jpeg 34, jpg 27, webp 27, png 17, svg 14. Newer assets favor **`.webp`** and **`.svg`**.
- **Optimization step:** **`next/image`** is used (`import Image from 'next/image'`) in **19** source files. `next.config.ts` configures `images.formats: ['image/webp']`, custom `deviceSizes`/`imageSizes`, and one remote pattern allow-listed (`cdn.prod.website-files.com`). Vercel image optimization applies automatically for `next/image`. No `imagemin` step.
- **How images are referenced:** absolute public paths as string props, e.g. `mockup: '/images/k-connect-mockup.webp'`, `icon: '/images/icons/k-connect.png'`, then rendered via `<Image src={prod.icon} alt={c.label} width={22} height={22} … />`. Some raw `<img>`/CSS backgrounds may exist in hand-written CSS.
- **Naming conventions:** kebab-case, product-prefixed — `k-connect-mockup.webp`, `k-traffic-mockup.webp`, per-module `images/modules/{module}.webp` (e.g. `gis.webp`), per-product icons in `images/icons/k-*.png`.

---

## 4. Design System

Styling is **token-driven, not ad hoc** — but the tokens are hand-authored CSS custom properties, not a formal component library like shadcn.

- **Design tokens:** defined as CSS variables in `src/app/globals.css`.
  - **Dark theme (default) `:root`:** `--bg: #0f1724`, `--bg-2: #0b1220`, `--blue: #2563eb`, `--blue-light: #60a5fa`, `--cyan: #06b6d4`, `--white: #e6eef8`, `--muted: #9dbdd0`, `--dim: #94a3b8`, plus border/card/glass/shadow tokens.
  - **Light overrides:** `.page-light { … }` remaps the same tokens to a light palette (`--bg: #f8fafc`, `--white: #1e293b`, etc.). A hero light-theme redesign is the current active work (branch `hero-redesign`, see §8).
- **Fonts:** loaded via `next/font/google` in `src/app/layout.tsx` and exposed as CSS variables:
  - `Space_Grotesk` → `--font-space-grotesk` (body)
  - `Barlow_Condensed` → `--font-barlow-condensed` (headings/display)
  - (`AGENTS.md` also references `DM Mono` for data labels — verify before relying on it.)
- **Spacing/scale:** handled through Tailwind v4 utilities plus inline styles; no separate spacing-token file.
- **Reusable components** (`src/components/`): `Nav.tsx`, `Footer.tsx`, `PageHero.tsx`, `Breadcrumb.tsx`, `CTASection.tsx`, `ContactForm.tsx`, `EbookDownloadForm.tsx`, `HowItWorks.tsx`, `HubDiagram.tsx`, `ModulesSection.tsx`, `GoogleAnalytics.tsx`, `GoogleTagManager.tsx`; plus subfolders `demo/`, `hero-lab/` (e.g. `HeroV3Platform.tsx`), `industry-heroes/`.
- **CSS files:** `src/app/globals.css` (global tokens + simulator keyframes), and scoped CSS for the hero lab: `hero-lab.css`, `hero-lab-light.css` (imported directly into `page.tsx`).

---

## 5. Build & Deploy

| Item | Value |
|---|---|
| Vercel project name | **`k1-website`** (`.vercel/project.json`) |
| Vercel projectId | `prj_q8jUVRE66gFD7SQ5oCTSkMidqsfJ` |
| Vercel orgId (team) | `team_sw68iotiJDlME57CTQrVy6R9` |
| Build command | `next build` (npm script `build`) — Vercel auto-detects Next.js |
| Output dir | `.next` (Next.js default; managed by Vercel, not a static `out/`) |
| Dev / start | `next dev` / `next start` |
| Production URL | **kabatone.com** |
| Staging URL | **staging.kabatone.com** (per project docs) |
| Preview URL pattern | Vercel auto-generated per branch/PR: `k1-website-<hash>-<team>.vercel.app` (standard Vercel preview domains) |

**Required env var NAMES** (values NOT shown; sourced from `.env.local` / `.env.stitch`, both git-ignored via `.env*`):
- `GITHUB_TOKEN`
- `GSC_CLIENT_ID`
- `GSC_CLIENT_SECRET`
- `GSC_REFRESH_TOKEN`
- `STITCH_API_KEY`

(There is also a Google Analytics / Tag Manager integration via components; any GA/GTM IDs are embedded in those components rather than surfaced as `.env` names here.) No `vercel.json` / `vercel.ts` config file is present — build settings are Vercel dashboard defaults.

---

## 6. Git Workflow

- **Default branch:** **`main`** (`origin/HEAD → main`). Current working branch: `hero-redesign`.
  - Note the conflict: `AGENTS.md` and the project `CLAUDE.md` describe a `nextjs` (staging) → `main` (production) model. `origin/HEAD` points at `main`, and recent feature work commits directly on topic branches (`hero-redesign`). Treat `main` as production; confirm whether `nextjs` staging is still active before promoting.
- **Change flow:** Commits are made **locally on branches**; **do not push without explicit user request** (per `CLAUDE.md`). Promotion to production (`main`) is by explicit owner approval only. PRs vs. direct pushes are used situationally — history shows linear feature commits (`Feat:`/`SEO:`/`Fix:` with `(vX.Y)` version tags).
- **Vercel auto-deploy:** Yes — Vercel is connected to the GitHub repo, so pushes/PRs generate **preview deployments** automatically, and production deploys on updates to the production branch.
- **Mandatory changelog:** Every commit **must** add an entry to both `CHANGELOG.md` (top, below header) and `changelog.html` (top of `.timeline`), staged in the same commit. This is enforced by `CLAUDE.md` and `AGENTS.md`.
- **Commit message format:** `Type: short description (vX.Y)` — e.g. `Feat: hero V3 — light-theme unified platform hero (v2.268)`.

---

## 7. Claude Code Setup

- **Claude Code version:** `2.1.197`
- **This model/session:** Opus 4.8 (1M context).
- **Installed plugins** (`~/.claude/plugins/installed_plugins.json`, all from `claude-plugins-official`, user scope):
  - `frontend-design`
  - `superpowers` (v6.1.1)
  - `vercel` (v0.44.0)
- **Skills:** a large user-level skill library is installed in `~/.claude/skills/` (60+). Most relevant to a web design workflow: **`frontend-design`**, **`website-qa`**, **`website-performance`**, **`design-md`**, **`stitch-design`** / `stitch-loop`, **`react-components`**, **`shadcn-ui`**, **`ui-ux-pro-max`**, plus the `ckm-design*` family, `art`, `canvas-design`, and the KabatOne content/SEO skills. Superpowers process skills (`brainstorming`, `systematic-debugging`, `writing-plans`, etc.) are available.
- **Repo-local Claude config (`.claude/`):** `settings.local.json` (a long Bash/MCP permission allow-list), `launch.json`, and several **git worktrees** under `.claude/worktrees/` (`website-v2`, `light-theme-experiment`, `agent-a0d2c288566c6530e`) — evidence of parallel design experiments.
- **Access this Claude has:**
  - **GitHub:** ✅ `gh` CLI authenticated as `TomIdoVR` (active), HTTPS token present. `gh api` is allow-listed.
  - **Vercel:** ✅ `vercel` CLI authenticated as `omercnaani-5410`; Vercel MCP tools available (deployments, logs, projects). CLI is v50.33.1 (a newer v55 exists).
  - **Browser:** ✅ Claude-in-Chrome MCP tools are allow-listed (`navigate`, `javascript_tool`, etc.) — browser automation is available for visual QA.
  - **Design MCP:** Stitch MCP and Figma MCP tools present (`STITCH_API_KEY` configured; Figma `get_screenshot`/`get_design_context` allow-listed).

---

## 8. Pain Points (from recent history)

Three most recent site-facing changes:

1. **`20db1a6` — Feat: hero V3 — light-theme unified platform hero (v2.268)** and **`00d356a` — hero redesign lab, isolated on its own branch (v2.267).** The hero is being redesigned on a dedicated branch (`hero-redesign`) with an isolated "hero lab" (`src/components/hero-lab/`, `hero-lab.css`, `hero-lab-light.css`) and multiple worktrees (`light-theme-experiment`, `website-v2`). **Awkward:** the site is dark-themed by design tokens, and moving the hero to a **light theme** requires overriding every `--token` via a `.page-light` scope and dark-section "islands" — a fiddly design-fidelity/theming problem, hence the sandboxed lab and parallel experiments rather than editing the live page directly.
2. **`d003f18` — Feat: country dropdown on contact form for lead allocation (v2.265).** Form/UX change tied to lead routing.
3. **SEO-driven page churn — `fda5eae` (halt country-page generation), `cd9e1c1` (noindex 116 non-ICP country pages + sitemap prune), `8906fc2`/`22e5253` (new LATAM country pages).** **Awkward:** programmatic generation of ~200+ country/ICP pages created an **indexation/scale problem** — pages had to be mass-`noindex`ed and generation halted via an agent guardrail. Layout/responsiveness of these templated pages at scale is the recurring friction.

**General friction observed:** (a) two content patterns (centralized `src/content/**` vs. inline copy in `page.tsx`) mean copy edits require knowing which file owns a given section; (b) two image roots (`public/` and root `images/`) can confuse asset placement; (c) design experiments proliferate as loose root-level `.html` files and multiple worktrees, making it hard to see the single source of truth; (d) light/dark theming via manual token overrides is error-prone.

---

## 9. Examples

**A. Section defined with inline bilingual copy + `next/image` (homepage products section, `src/app/[locale]/page.tsx`):**

```tsx
<section className="hp-products">
  <div className="hp-products-inner">
    <div className="hp-products-header">
      <div className="hp-section-label">{es ? 'LA PLATAFORMA' : 'THE PLATFORM'}</div>
      <h2 className="hp-products-h2">
        {es ? (<>Cinco Soluciones.<br/>Una Imagen Operativa.</>)
            : (<>Five Solutions.<br/>One Operating Picture.</>)}
      </h2>
    </div>
    <div className="hp-prod-grid">
      {products.map((prod) => {
        const c = es ? prod.es : prod.en
        return (
          <div key={prod.key} className="hp-prod-card" style={{ '--pc': prod.color } as React.CSSProperties}>
            <div className="hp-prod-label">
              <Image src={prod.icon} alt={c.label} width={22} height={22}
                     style={{ height: '22px', width: 'auto', verticalAlign: 'middle', marginRight: '8px' }} />
              {c.label}
            </div>
            <h3 className="hp-prod-headline">{c.headline}</h3>
            <ul className="hp-prod-feats">{c.feats.map((f, i) => <li key={i}>{f}</li>)}</ul>
            <Link href={prod.href} className="hp-prod-link">
              {es ? 'Más información' : 'Learn more'} <span className="hp-prod-link-arrow">&rarr;</span>
            </Link>
          </div>
        )
      })}
    </div>
  </div>
</section>
```

**B. The data object that drives that section (image referenced as a public path):**

```tsx
{
  key: 'k-connect',
  href: '/k-connect',
  color: '#22c55e',
  mockup: '/images/k-connect-mockup.webp',   // ← embedded image, public-root path
  icon: '/images/icons/k-connect.png',
  en: {
    label: 'K-CONNECT',
    headline: 'Secure Community-Based Video Sharing',
    desc: 'Privacy-focused platform enabling secure public-private video sharing…',
    feats: ['Secure public-private video sharing', 'AI-driven alerts & monitoring', /* … */],
  },
  es: { label: 'K-CONNECT', headline: 'Red segura de video vigilancia comunitaria', /* … */ },
}
```

**Design-token usage** (from `src/app/globals.css`): components reference `var(--blue)`, `var(--white)`, `var(--card-bg)`, etc., so a section restyles to light mode automatically when wrapped in a `.page-light` container.

---

*End of report. No code was modified.*
