import type { Metadata } from 'next'
import SolutionPage from '@/components/hero-lab/SolutionPage'
import KVIDEO from '@/components/hero-lab/sol-kvideo'
import '@/components/hero-lab/solution-page.css'

/* Local-only review route for the redesigned K-Video solution page.
   Stays unlinked and noindex until the owner approves replacing the live
   /k-video page, same rule as the rest of /hero-lab. */
export const metadata: Metadata = {
  title: 'Hero Lab — K-Video (internal)',
  robots: { index: false, follow: false },
}

export default async function HeroLabKVideoPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <SolutionPage p={KVIDEO} es={locale === 'es'} />
}
