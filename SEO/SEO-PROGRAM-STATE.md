# KabatOne SEO Program — State of Play

> **Single source of truth for the SEO effort.** Read this first in any new session.
> Last updated: **2026-08-31**. Keep this file current when the program's state changes.
>
> ⚠️ **Read `SEO/BRANCHING.md` before shipping anything.** `main` and `nextjs` have diverged;
> production work goes through a **PR branched from `main`**, not a merge of `nextjs`.
>
> **Start every analysis with:** `python3.11 scripts/seo_diff.py --out /tmp/seo-diff.md`
> Open items and their age: `SEO/carry-over.md` (the diff script reads and escalates it).
>
> Companion docs: `CHANGELOG.md` (exact versions), `SEO/kabatone-seo-master-plan.md`,
> `SEO/BRANCHING.md` (how work reaches production).
>
> **Resolved, do not re-raise:**
> - ~~Anthropic key out of credit~~ — refunded; `track_geo.py` ran 12/12 on 08-28 and again
>   on 08-31 (83% cited). Scheduled weekly via `com.kabatone.seo-geo` (Mon 07:30).
> - ~~Track A blocked on interactive `gsc_reauth.py`~~ — GSC pulls run unattended; OAuth app
>   published with a non-expiring token.
> - ~~KAB-1721 awaiting board decision~~ — **approved 2026-07-27** via KAB-1980 ("both").
>   Track A ran (v2.277–v2.284); Track C's first move shipped the same day. What remains is
>   the Track C *escalation*, owned by Claude, not a decision owed by Omer.

## Strategy in one paragraph
Grow **non-branded organic** (89% of clicks were branded; the ~11% non-branded is the
growth engine — it went 4→39 clicks, now ~26% of organic). Win via **hub-and-spoke
content clusters + CTR/metadata optimization + internal-link concentration + off-site
authority**. ICP = **Mexico + LATAM + US/Canada** only; everything else is noindexed.

## What's built (all LIVE in production unless noted; see CHANGELOG for versions)
- **Cluster spokes:** `ai-video-analytics`, `cctv-video-analytics`, `best-vms-software`,
  `ng911-software`, plus `best-cad-dispatch-software`. Each is a focused page split off an
  overloaded hub to rank for a specific sub-cluster (relevance lever, works without authority).
- **Hubs optimized:** `what-is-video-management-software` (VMS), `what-is-video-analytics`,
  `what-is-cad-dispatch-software`, `how-c5-command-centers-work` — titles, FAQs, internal links.
- **CTR refreshes shipped:** Peregrine, C5 (ES+EN), Verkada, Avigilon, /vs/cad, Fusus,
  small-cities, situational-awareness, k-connect, video-analytics title.
- **Internal-link concentration:** routed links to the starved money hubs (CAD, emergency-mgmt).
- **Indexation triage (v2.259):** 116 non-ICP `public-safety-software-{country}` pages set to
  `noindex,follow` via `NOINDEX_KEYS` in `src/lib/metadata.ts`, and removed from the sitemap via
  `KEEP_COUNTRY_SLUGS` filter in `src/app/sitemap.ts`. Fixes 75%-not-indexed problem. Reversible.
  - **ICP keep-list (indexed + in sitemap):** Mexico (national + municipalities), small-cities,
    US, Canada, and LATAM: Costa Rica, Panama, Dominican Republic, Ecuador, Guyana, Peru, Colombia,
    Chile, Argentina, Brazil, Guatemala, Honduras, El Salvador, Nicaragua, Puerto Rico, Paraguay,
    Suriname, Uruguay, Venezuela, Bolivia.
- **GEO layer:** `public/llms.txt` (AI-engine site map), Organization + WebSite schema site-wide
  (in `src/app/[locale]/layout.tsx`), FAQPage/Article/Breadcrumb schema on all hubs+spokes.

## Systems & tooling (all run weekly via `scripts/seo_weekly_agent.py`, Mondays 08:07)
| Tool | Path | Output |
|---|---|---|
| Traffic report (GA4+GSC) | `scripts/seo_weekly_agent.py` | `SEO/audits/traffic-*.html` |
| Keyword-target system | `SEO/keywords/` (build_keyword_targets.py, track_keywords.py) | `keyword-targets.csv` (1,136 scored), `keyword-history.csv` |
| GEO citation monitor | `SEO/geo/track_geo.py` + `geo-queries.txt` | `geo-history.csv` |
| Off-site authority pack | `SEO/authority/` | guest article, directory copy, review templates |
- The weekly agent auto-runs all three and commits their snapshots. Regenerate keyword scores
  monthly: `python3.11 SEO/keywords/build_keyword_targets.py`.
- **Creds:** Google OAuth for GSC/GA4 is fixed permanently (app published to production, token
  non-expiring). Keys in `~/.config/claude-seo/` (anthropic-api-key, oauth-token.json, google-api.json).
- **GA4 property:** 530090453. **GSC property:** https://kabatone.com/.

## Latest metrics (measured ~2026-07-02)
- Organic: record ~219 sessions/week, +75% over the quarter, ~1,473 sessions/90d, ~37% of sessions.
- **Non-branded clicks: 4 → 39 (10×), now 26% of organic clicks** — the SEO is the growth engine.
- Money pages: VMS hub pos ~15, video-analytics pos ~18, **CAD pos 12 (climbing fast, +clicks)**,
  **C5-ES pos 7 / 40 clicks (confirmed win, 0→40)**.
- Indexation: was 107 indexed / 325 not indexed (75%) → triage in place to recover.
- **GEO (2026-08-12): VMS, unified-platform and NG911 all flipped `N → Y`** — cited in 4/5 answers
  measured, vs 5/12 on the 07-07 baseline. The roundup pages did their job. **C5 is the only
  remaining gap**, and it is an authority gap, not a content one: the page carries FAQPage schema,
  its first FAQ matches the query verbatim, and it has 24 inbound internal links.
  See `weekly-report-2026-08-12.md`.

## Division of labor — IMPORTANT
- **Claude Code (this agent) owns on-site SEO execution.**
- The **Slack/Paperclip "seo-agent"** (`src/lib/seo-agent/`) is **analysis/ideas ONLY**. It kept
  auto-generating thin country pages against strategy, so a **hard guardrail was added to its
  system prompt** (`src/lib/seo-agent/intent.ts`) forbidding new country/location pages. If country
  pages reappear, check that guardrail is intact.
- Both commit under `Omer Cnaani <omer@kabatone.com>` — watch for the collision (both editing
  `metadata.ts`, `CHANGELOG.md`). Stage specific files; never sweep the other's uncommitted work.

## Deploy workflow
- `nextjs` = staging (auto-deploys). `main` = production (`kabatone.com`).
- Promote: merge `nextjs` → `main` (I use a temp detached worktree to avoid touching the working tree).
- `SEO/`, `scripts/`, dashboards = repo/team docs — **do NOT need production promotion.**

## Open items / next levers (no more thin pages — clusters are saturated)
1. **Off-site authority** — THE ceiling for money hubs to break page 1. Execute `SEO/authority/`
   pack (G2/Capterra listings, Seguridad en América guest article, partner links). **Needs human.**
2. **Watch the Monday runs:** indexed-ratio recovery, keyword movers, GEO citation changes.
3. **Phase 2 indexation:** delete the 116 noindexed pages entirely — only after confirming zero
   traffic; needs explicit sign-off (irreversible).
4. **GEO gap — mostly closed as of 08-12.** Remaining: **C5** only (pages exist,
   authority is the gap).
