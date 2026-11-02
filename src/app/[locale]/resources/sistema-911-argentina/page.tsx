import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import CadSegmentPage from '@/components/CadSegmentPage'
import { ARGENTINA } from '@/content/cad-countries'

/* CAD plan item #24, Tier-1 country page. Content and sourcing notes: src/content/cad-countries.ts */

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('sistema911Argentina', locale)
}

export default async function Sistema911ArgentinaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'
  return <CadSegmentPage es={es} c={ARGENTINA(es)} />
}
