import type { Metadata } from 'next'
import SolutionPage from '@/components/hero-lab/SolutionPage'
import KDISPATCH from '@/components/hero-lab/sol-kdispatch'
import '@/components/hero-lab/solution-page.css'

/* Local-only review route for the redesigned K-Dispatch solution page.
   Stays unlinked and noindex until the owner approves replacing the live
   /k-dispatch page, same rule as the rest of /hero-lab. */
export const metadata: Metadata = {
  title: 'Hero Lab — K-Dispatch (internal)',
  robots: { index: false, follow: false },
}

export default async function HeroLabKDispatchPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <SolutionPage p={KDISPATCH} es={locale === 'es'} />
}
