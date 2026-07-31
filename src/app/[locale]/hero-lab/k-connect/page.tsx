import type { Metadata } from 'next'
import SolutionPage from '@/components/hero-lab/SolutionPage'
import KCONNECT from '@/components/hero-lab/sol-kconnect'
import '@/components/hero-lab/solution-page.css'

/* Local-only review route for the redesigned K-Connect solution page.
   Stays unlinked and noindex until the owner approves replacing the live
   /k-connect page, same rule as the rest of /hero-lab. */
export const metadata: Metadata = {
  title: 'Hero Lab — K-Connect (internal)',
  robots: { index: false, follow: false },
}

export default async function HeroLabKConnectPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <SolutionPage p={KCONNECT} es={locale === 'es'} />
}
