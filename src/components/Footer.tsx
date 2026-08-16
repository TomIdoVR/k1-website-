/* The site-wide footer — a thin adapter over the redesign's HeroLabFooter,
   for the same reason Nav.tsx is one: 170 pages render <Footer es={es} />, and
   swapping the component's internals reaches all of them without touching a
   single call site. The `es` signature is unchanged.

   The previous inline-styled footer is preserved in git history at 5c1c952. */

import { HeroLabFooter } from '@/components/hero-lab/HeroLabChrome'
import '@/components/hero-lab/hero-lab-chrome.css'

export default function Footer({ es }: { es: boolean }) {
  return <HeroLabFooter es={es} />
}
