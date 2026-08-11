import type { Metadata } from 'next'
import HeroV3Platform from '@/components/hero-lab/HeroV3Platform'
import CustomerStrip from '@/components/hero-lab/CustomerStrip'
import BeforeAfter from '@/components/hero-lab/BeforeAfter'
import HowItWorks from '@/components/hero-lab/HowItWorks'
import Solutions from '@/components/hero-lab/Solutions'
import PlatformModules from '@/components/hero-lab/PlatformModules'
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
import '@/components/hero-lab/platform-modules.css'

/* Alternate homepage running order, for side-by-side review against /hero-lab.
   Same components, same styling — only the sequence changes, plus one new
   section. /hero-lab is untouched so the two can be compared directly.

   The problem it addresses: the current order states breadth five times and
   outcome never. HowItWorks, Solutions, Ecosystem and Industries are four
   consecutive capability statements, and the only proof — CaseStudy — sits
   behind all of them at position five.

     current                     this route
     1 hero + 7 module cards     1 hero, cards removed <- awaiting one image
     2 customer logos            2 customer logos
     3 how it works              3 BEFORE / AFTER      <- new: the problem
     4 solutions                 4 how it works           the mechanism
     5 case study                5 solutions              what you buy
     6 trust band                6 platform modules    <- the cards, relocated
     7 ecosystem                 7 case study             the result
     8 industries                8 industries             where it applies
                                 9 ecosystem           <- demoted: supporting
                                10 trust band

   Two changes from the first pass at this route:

   The seven module cards leave the hero. Seven dense product panels at
   position one is a capability dump made before the page has argued
   anything, and it is what stopped the hero from carrying a single image.
   They now run as their own section after Solutions, framed as the working
   surfaces behind the product names rather than as a second feature list —
   at that position, a straight capability restatement would be breadth
   twice in a row.

   Known cost of this order: the first hard proof, the case study, now sits
   at position seven. The customer logo strip stays directly under the hero
   so some credibility still arrives early.

   Still open, because it needs numbers only the business can supply: the
   case study's bullets are qualitative ("one unified operational picture")
   where they should carry measured outcomes from a named deployment. */
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
      <HeroV3Platform es={es} modules={false} />
      <CustomerStrip es={es} />
      <BeforeAfter es={es} />
      <HowItWorks es={es} />
      <Solutions es={es} />
      <PlatformModules es={es} />
      <CaseStudy es={es} />
      <Industries es={es} />
      <Ecosystem es={es} />
      <TrustBand es={es} />
      <div className="page-light">
        <HeroLabFooter es={es} />
      </div>
    </>
  )
}
