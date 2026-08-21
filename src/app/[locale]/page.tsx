import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import HomeComposition from '@/components/hero-lab/HomeComposition'

/* The production homepage.

   Renders the approved redesign composition. The previous homepage — the
   Nav/ModulesSection/HowItWorks build with its inline product definitions —
   is preserved in git at 5c1c952, one revert away.

   Metadata deliberately stays here rather than in HomeComposition: the review
   route at /hero-lab-story renders the same composition but must stay
   noindex, so the two routes own their metadata separately. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('home', locale)
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <HomeComposition es={locale === 'es'} />
}
