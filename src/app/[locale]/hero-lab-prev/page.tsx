import type { Metadata } from 'next'
import HeroV3Platform from '@/components/hero-lab/HeroV3Platform'
import CustomerStrip from '@/components/hero-lab/CustomerStrip'
import HowItWorks from '@/components/hero-lab/HowItWorks'
import Solutions from '@/components/hero-lab/Solutions'
import CaseStudy from '@/components/hero-lab/CaseStudy'
import Ecosystem from '@/components/hero-lab/Ecosystem'
import Industries from '@/components/hero-lab/Industries'
import './hero-lab-light-prev.css'
import '@/components/hero-lab/customer-strip.css'
import '@/components/hero-lab/howitworks.css'
import '@/components/hero-lab/solutions.css'
import '@/components/hero-lab/case-study.css'
import '@/components/hero-lab/ecosystem.css'
import '@/components/hero-lab/industries.css'

/* Side-by-side comparison route: identical to /hero-lab except it loads the
   pre-arc stylesheet captured from v2.282 (commit f283c69), where the hero
   cards sat on one flat baseline. Exists only so the 3D half-circle arc can
   be reviewed against what it replaced — delete once the call is made. */
export const metadata: Metadata = {
  title: 'Hero Lab — previous flat row (internal)',
  robots: { index: false, follow: false },
}

export default async function HeroLabPrevPage({
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
      <HowItWorks es={es} />
      <Solutions es={es} />
      <CaseStudy es={es} />
      <Ecosystem es={es} />
      <Industries es={es} />
    </>
  )
}
