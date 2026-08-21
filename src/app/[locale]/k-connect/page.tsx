import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import SolutionRoute from '@/components/hero-lab/SolutionRoute'
import KCONNECT from '@/components/hero-lab/sol-kconnect'
import '@/components/hero-lab/solution-page.css'

/* The production K-Connect page, rendering the redesigned solution layout.

   The previous version -- the dark Nav/inline-<style jsx> build -- is preserved
   in git at 5c1c952. Metadata comes from the same generator it always did
   ('kConnect'), so titles, descriptions, canonicals and hreflang are unchanged by
   this promotion; SolutionRoute re-emits the same three JSON-LD blocks
   (SoftwareApplication, FAQPage, BreadcrumbList) the old page carried. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('kConnect', locale)
}

export default async function KConnectPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <SolutionRoute p={KCONNECT} locale={locale} />
}
