'use client'

/* The site-wide header.

   This is a thin adapter over the redesign's HeroLabHeader rather than a
   second, independently-maintained navigation. Adapting here instead of
   editing call sites is deliberate: 169 pages render <Nav />, and rewriting
   every one of them to import a different component is 169 chances to miss one
   and leave a page wearing the old chrome. The name and the no-prop signature
   are unchanged, so every existing call site is already correct.

   The previous hand-built nav — its own dropdown state, locale switcher and
   mobile menu — is preserved in git history at commit 5c1c952.

   Two things the old nav did that the redesigned header did not, both fixed in
   HeroLabHeader as part of this swap rather than lost in it:
   - the language switch stayed on the current page (it pointed at '/')
   - /industries/stadiums was reachable (it was missing from INDUSTRY_LINKS)

   `es` is derived here rather than taken as a prop because that is the
   contract call sites already use: <Nav /> takes nothing, so the locale has to
   come from context, exactly as the old implementation did.

   The .hll-legacy-chrome wrapper exists because the pages reached through
   <Nav /> are not the redesigned ones. They are dark, and each hard-codes
   `paddingTop: 70px` on its content wrapper to clear the old position:fixed
   70px nav. HeroLabHeader as authored is light (#fafcff) and sticky at 96px in
   normal flow, so dropped in unmodified it puts a light bar on a dark page and
   leaves a 70px empty band under it — on all 169 at once. The wrapper scopes a
   dark, fixed, 70px re-skin to exactly those pages (promoted-chrome.css); the
   redesigned routes render HeroLabHeader directly, outside the wrapper, and
   keep its light presentation untouched. Delete both when the last legacy page
   is converted. */

import { useLocale } from 'next-intl'
import HeroLabHeader from '@/components/hero-lab/HeroLabHeader'
import '@/components/hero-lab/hero-lab-header.css'
import '@/components/hero-lab/promoted-chrome.css'

export default function Nav() {
  const locale = useLocale()
  return (
    <div className="hll-legacy-chrome">
      <HeroLabHeader es={locale === 'es'} />
    </div>
  )
}
