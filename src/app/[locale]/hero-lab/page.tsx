import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import HeroV1Screenshot from '@/components/hero-lab/HeroV1Screenshot'
import HeroV2Hub from '@/components/hero-lab/HeroV2Hub'
import ImageConcepts from '@/components/hero-lab/ImageConcepts'
import './hero-lab.css'

/* Internal review page for the hero brainstorm — not linked from nav or
   sitemap, not for production. Delete once a direction is chosen and
   folded into src/app/[locale]/page.tsx. */
export const metadata: Metadata = {
  title: 'Hero Lab (internal)',
  robots: { index: false, follow: false },
}

export default async function HeroLabPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  return (
    <>
      <Nav />
      <div className="hl-lab">
        <div className="hl-label-bar">
          <span className="hl-tag">01</span> {es ? 'VERSIÓN 1 — El admin en sí' : 'VERSION 1 — The admin itself'}
        </div>
        <HeroV1Screenshot es={es} />

        <div className="hl-label-bar" style={{ marginTop: '40px' }}>
          <span className="hl-tag">02</span> {es ? 'VERSIÓN 2 — No es un admin (hub de módulos)' : 'VERSION 2 — Not admin-related (module hub)'}
        </div>
        <HeroV2Hub es={es} />

        <div className="hl-label-bar" style={{ marginTop: '40px' }}>
          <span className="hl-tag">03</span> {es ? 'CONCEPTOS DE IMAGEN — lado a lado' : 'IMAGE CONCEPTS — side by side'}
        </div>
        <ImageConcepts es={es} />
      </div>
    </>
  )
}
