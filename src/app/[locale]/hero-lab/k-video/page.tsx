import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import SolutionRoute from '@/components/hero-lab/SolutionRoute'
import KVIDEO from '@/components/hero-lab/sol-kvideo'
import '@/components/hero-lab/solution-page.css'

/* Review route for the redesigned K-Video page.

   Metadata now comes from the same source the live page uses, so promoting
   this is a content move rather than a re-authoring job — and, critically,
   there is no longer a hardcoded `noindex` that would ship to production and
   deindex the page. Keep this route out of the sitemap until promotion; the
   duplicate is prevented by deleting these hero-lab routes in the promotion
   change itself, not by a robots flag. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('kVideo', locale)
}

export default async function HeroLabKVideoPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <SolutionRoute p={KVIDEO} locale={locale} />
}
