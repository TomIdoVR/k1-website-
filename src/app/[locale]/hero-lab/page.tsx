import type { Metadata } from 'next'
import HeroV3Platform from '@/components/hero-lab/HeroV3Platform'
import CustomerStrip from '@/components/hero-lab/CustomerStrip'
import HowItWorks from '@/components/hero-lab/HowItWorks'
import Solutions from '@/components/hero-lab/Solutions'
import './hero-lab-light.css'
import '@/components/hero-lab/customer-strip.css'
import '@/components/hero-lab/howitworks.css'
import '@/components/hero-lab/solutions.css'

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
    </>
  )
}
