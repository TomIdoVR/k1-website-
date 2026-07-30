import type { Metadata } from 'next'
import SolutionPage from '@/components/hero-lab/SolutionPage'
import KSAFETY from '@/components/hero-lab/sol-ksafety'
import '@/components/hero-lab/solution-page.css'

/* Local-only review route for the redesigned K-Safety solution page.
   Stays unlinked and noindex until the owner approves replacing the live
   /k-safety page, same rule as the rest of /hero-lab. */
export const metadata: Metadata = {
  title: 'Hero Lab — K-Safety (internal)',
  robots: { index: false, follow: false },
}

export default async function HeroLabKSafetyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <SolutionPage p={KSAFETY} es={locale === 'es'} />
}
