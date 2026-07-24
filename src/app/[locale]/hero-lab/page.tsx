import type { Metadata } from 'next'
import HeroV3Platform from '@/components/hero-lab/HeroV3Platform'
import './hero-lab-light.css'

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
    <HeroV3Platform es={es} />
  )
}
