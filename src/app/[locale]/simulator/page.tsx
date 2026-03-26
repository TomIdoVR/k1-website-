import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SimulatorLoader from './SimulatorLoader'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('simulator', locale)
}

export default async function SimulatorPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  return (
    <>
      <Nav />
      <SimulatorLoader es={es} />
      <Footer es={es} />
    </>
  )
}
