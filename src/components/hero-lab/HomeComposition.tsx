/* The redesigned homepage composition, in one place.

   Extracted from /hero-lab-story so the production homepage and the internal
   review route render *the same* tree rather than two copies that drift. The
   review route exists to compare running orders; if it re-declared the section
   list, "approved on staging" would stop meaning "what ships".

   Deliberately contains no metadata. The two routes need different metadata —
   the homepage uses the production generator (customer-facing title,
   description, canonical, hreflang) and the review route stays noindex — so
   each owns its own `generateMetadata`/`metadata` export and this file owns
   only the composition. That separation is the whole point of SEO-001: the
   internal route's title and `noindex` must never become the homepage's. */

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
import '@/app/[locale]/hero-lab/hero-lab-light.css'
import '@/components/hero-lab/trust-band.css'
import '@/components/hero-lab/customer-strip.css'
import '@/components/hero-lab/before-after.css'
import '@/components/hero-lab/howitworks.css'
import '@/components/hero-lab/solutions.css'
import '@/components/hero-lab/case-study.css'
import '@/components/hero-lab/ecosystem.css'
import '@/components/hero-lab/industries.css'
import '@/components/hero-lab/platform-modules.css'
import '@/components/hero-lab/hero-split.css'

export default function HomeComposition({ es }: { es: boolean }) {
  return (
    <>
      <HeroV3Platform es={es} modules={false} split />
      <CustomerStrip es={es} />
      <BeforeAfter es={es} />
      <PlatformModules es={es} />
      <HowItWorks es={es} />
      <Solutions es={es} />
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
