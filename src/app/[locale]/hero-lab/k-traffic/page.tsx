import type { Metadata } from 'next'
import SolutionPage from '@/components/hero-lab/SolutionPage'
import KTRAFFIC from '@/components/hero-lab/sol-ktraffic'
import '@/components/hero-lab/solution-page.css'

/* Local-only review route for the redesigned K-Traffic solution page.
   Stays unlinked and noindex until the owner approves replacing the live
   /k-traffic page, same rule as the rest of /hero-lab. */
export const metadata: Metadata = {
  title: 'Hero Lab — K-Traffic (internal)',
  robots: { index: false, follow: false },
}

export default async function HeroLabKTrafficPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <SolutionPage p={KTRAFFIC} es={locale === 'es'} />
}
