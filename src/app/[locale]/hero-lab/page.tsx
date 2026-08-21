import type { Metadata } from 'next'
import HeroV3Platform from '@/components/hero-lab/HeroV3Platform'
import CustomerStrip from '@/components/hero-lab/CustomerStrip'
import HowItWorks from '@/components/hero-lab/HowItWorks'
import Solutions from '@/components/hero-lab/Solutions'
import CaseStudy from '@/components/hero-lab/CaseStudy'
import Ecosystem from '@/components/hero-lab/Ecosystem'
import Industries from '@/components/hero-lab/Industries'
import TrustBand from '@/components/hero-lab/TrustBand'
import { HeroLabFooter } from '@/components/hero-lab/HeroLabChrome'
import '@/components/hero-lab/hero-lab-chrome.css'
import './hero-lab-light.css'
import '@/components/hero-lab/trust-band.css'
import '@/components/hero-lab/customer-strip.css'
import '@/components/hero-lab/howitworks.css'
import '@/components/hero-lab/solutions.css'
import '@/components/hero-lab/case-study.css'
import '@/components/hero-lab/ecosystem.css'
import '@/components/hero-lab/industries.css'

/* Local-only review route for the approved reference hero. It remains
   unlinked and noindex until the owner approves homepage integration. */
export const metadata: Metadata = {
  title: 'Hero Lab (internal)',
  robots: { index: false, follow: false },
}

export default async function HeroLabPage({
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
      <TrustBand es={es} />
      <Ecosystem es={es} />
      <Industries es={es} />
      {/* Footer restores the 11 /vs/ competitor and 6 /integrations/ internal
          links the redesign was otherwise dropping — the homepage is the
          strongest link source to both clusters.

          Wrapped in .page-light because Footer reads the global theme tokens,
          which default to the dark palette at :root. Without this it renders
          a dark slab under a light page. */}
      <div className="page-light">
        <HeroLabFooter es={es} />
      </div>
    </>
  )
}
