/* Shared shape for every K-* solution page's content.

   The Claude Design project keeps one content file per product
   (home/sol-ksafety.jsx, sol-kdispatch.jsx, sol-ktraffic.jsx, sol-kvideo.jsx)
   all feeding a single generic renderer via window.SOLPAGE. This is the typed
   equivalent of that contract — SolutionPage.tsx renders it, and each
   sol-*.ts supplies one. */

export type Loc = { en: string; es: string }
export type LocList = { en: string[]; es: string[] }

export const S = (en: string, es: string): Loc => ({ en, es })
export const SL = (en: string[], es: string[]): LocList => ({ en, es })

export type SolutionContent = {
  key: string
  name: string
  accent: string
  accentInk: string
  /* Optional accent variant for the near-black capability band. Only needed
     when `accent` is too dark to clear 4.5:1 there (K-Safety's blue). */
  accentOnDark?: string
  eyebrow: Loc
  h1a: Loc
  h1b: Loc
  sub: Loc
  heroImg: string
  /* When the supplied hero screenshot already carries its own window chrome,
     the console frame and floating chips are suppressed (see .is-bare). */
  heroBare?: boolean
  /* Set when the hero art is light 3D panels on a white canvas. Blends the
     white out so the panels float on the hero gradient instead of sitting in
     a white box. Do not set for dark screenshots. */
  heroLight?: boolean
  heroAlt: Loc
  consoleTitle: Loc
  /* Both hero overlays are optional — K-Video, for instance, ships the event
     card without the picture-in-picture video feed. */
  heroVideo?: { img: string; label: Loc }
  heroEvent?: { tag: Loc; title: Loc; loc: Loc; rows: { l: Loc; v: Loc | string }[] }
  chips?: { c: string; t: Loc }[]
  /* Some values are locale-invariant in the design ("Unit 12", "24/7", "2"),
     so these accept a bare string alongside an {en, es} pair. */
  stats: { v: Loc | string; l: Loc }[]
  coreLabel: Loc
  core: LocList
  benefitsEyebrow: Loc
  benefitsH2a: Loc
  benefitsH2b: Loc
  benefits: { icon: string; t: Loc; d: Loc }[]
  featuresEyebrow: Loc
  featuresH2a: Loc
  featuresH2b: Loc
  /* `ar` (CSS aspect-ratio) and `h` override the default 1200x670 shot crop
     for a single row whose image has different proportions. */
  features: { img: string; ar?: string; h?: number; alt: Loc; t: Loc; d: Loc; pts: LocList }[]
  processEyebrow: Loc
  processH2a: Loc
  processH2b: Loc
  processIn: { k: string; t: Loc }[]
  processCore: LocList
  processOut: { k: string; t: Loc }[]
  /* Optional "who uses this" band, rendered between process and integrations. */
  audienceEyebrow?: Loc
  audienceH2a?: Loc
  audienceH2b?: Loc
  audience?: { t: Loc; d: Loc }[]
  /* Optional metrics panel that sits above the integrations head. `w` is the
     bar's CSS width and is usually the same figure as `v`. */
  perfLabel?: Loc
  perfBars?: { l: Loc; v: string; w: string }[]
  intEyebrow: Loc
  intH2a: Loc
  intH2b: Loc
  intSub: Loc
  integrations: { t: Loc; d: Loc }[]
  caseEyebrow: Loc
  /* K-Safety's is a bare figure ("10,000+"); K-Dispatch's is a translated
     phrase ("Multi-agency" / "Multiagencia"), so this takes either. */
  caseMetric: Loc | string
  caseMetricL: Loc
  caseName: Loc
  caseScope: Loc
  caseBody: Loc
  caseStats: { v: Loc | string; l: Loc }[]
  caseNote: Loc
  /* Ported from the live pages, which defined these purely to feed
     faqPageSchema and never rendered them. Here they are rendered visibly
     AND fed to the schema, which is what Google's structured-data guidance
     actually requires. */
  faqs?: { q: Loc; a: Loc }[]
  /* Everything the route wrapper needs to emit the same metadata and JSON-LD
     the live pages carry today. `metadataKey` indexes src/content/{en,es}/
     metadata.ts; `slug` is the production path segment. */
  seo: {
    metadataKey: 'kSafety' | 'kDispatch' | 'kVideo' | 'kTraffic' | 'kConnect'
    slug: string
    category: string
    description: Loc
  }
}
