import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Hero from '@/components/home2/Hero'
import OperationalLoop from '@/components/home2/OperationalLoop'
import SolutionsShowcase from '@/components/home2/SolutionsShowcase'
import { PlatformSection, ModulesGrid } from '@/components/home2/PlatformModules'
import Proof from '@/components/home2/Proof'
import Industries from '@/components/home2/Industries'
import FinalCTA from '@/components/home2/FinalCTA'
import './home2.css'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('home', locale)
}

/* Homepage v2 — implemented from the Claude Design handoff (Homepage v2.html).
   Section order locked in the design chat:
   Hero → Operational Loop → Solutions → Platform → Modules → Proof → Industries → CTA */
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  return (
    <>
      <Nav />
      <div className="rd-root">
        <Hero es={es} />
        <OperationalLoop es={es} />
        <SolutionsShowcase es={es} />
        <PlatformSection es={es} />
        <ModulesGrid es={es} />
        <Proof es={es} />
        <Industries es={es} />
        <FinalCTA es={es} />
        <Footer es={es} />
      </div>
    </>
  )
}
