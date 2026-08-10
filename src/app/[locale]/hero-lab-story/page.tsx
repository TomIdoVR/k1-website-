import type { Metadata } from 'next'
import HeroV3Platform from '@/components/hero-lab/HeroV3Platform'
import CustomerStrip from '@/components/hero-lab/CustomerStrip'
import BeforeAfter from '@/components/hero-lab/BeforeAfter'
import HowItWorks from '@/components/hero-lab/HowItWorks'
import Solutions from '@/components/hero-lab/Solutions'
import CaseStudy from '@/components/hero-lab/CaseStudy'
import Ecosystem from '@/components/hero-lab/Ecosystem'
import Industries from '@/components/hero-lab/Industries'
import TrustBand from '@/components/hero-lab/TrustBand'
import { HeroLabFooter } from '@/components/hero-lab/HeroLabChrome'
import '@/components/hero-lab/hero-lab-chrome.css'
import '../hero-lab/hero-lab-light.css'
import '@/components/hero-lab/trust-band.css'
import '@/components/hero-lab/customer-strip.css'
import '@/components/hero-lab/before-after.css'
import '@/components/hero-lab/howitworks.css'
import '@/components/hero-lab/solutions.css'
import '@/components/hero-lab/case-study.css'
import '@/components/hero-lab/ecosystem.css'
import '@/components/hero-lab/industries.css'

/* Alternate homepage running order, for side-by-side review against /hero-lab.
   Same components, same styling — only the sequence changes, plus one new
   section. /hero-lab is untouched so the two can be compared directly.

   The problem it addresses: the current order states breadth five times and
   outcome never. HowItWorks, Solutions, Ecosystem and Industries are four
   consecutive capability statements, and the only proof — CaseStudy — sits
   behind all of them at position five.

     current                     this route
     1 hero + 7 module cards     1 hero + 7 module cards
     2 customer logos            2 customer logos
     3 how it works              3 BEFORE / AFTER      <- new: the problem
     4 solutions                 4 how it works           the action
     5 case study                5 case study          <- promoted: the result
     6 trust band                6 solutions              what you deploy
     7 ecosystem                 7 industries             where it applies
     8 industries                8 ecosystem           <- demoted: supporting
                                 9 trust band

   The reordering interleaves proof between the breadth sections rather than
   stacking them, so the page argues once and then evidences it, instead of
   restating the same claim in five different formats.

   Not resolved here, because it needs numbers only the business can supply:
   the case study's bullets are still qualitative ("one unified operational
   picture") where they should carry measured outcomes from a named
   deployment. */
export const metadata: Metadata = {
  title: 'Hero Lab — story order (internal)',
  robots: { index: false, follow: false },
}

export default async function HeroLabStoryPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  return (
    <>
      <HeroV3Platform es={es} />
      <CustomerStrip es={es} />
      <BeforeAfter es={es} />
      <HowItWorks es={es} />
      <CaseStudy es={es} />
      <Solutions es={es} />
      <Industries es={es} />
      <Ecosystem es={es} />
      <TrustBand es={es} />
      <div className="page-light">
        <HeroLabFooter es={es} />
      </div>
    </>
  )
}
