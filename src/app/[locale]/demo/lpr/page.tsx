import type { Metadata } from 'next'
import { Suspense } from 'react'
import LprScenario from '@/components/demo/LprScenario'
import ScenarioHeading from '@/components/demo/ScenarioHeading'
import { demoMetadata } from '@/lib/demo-metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return demoMetadata({
    path: '/demo/lpr',
    locale,
    // stage-1-detect.webp was referenced here but does not exist in the repo
    // — the page has been declaring a 404 as its social preview.
    ogImage: '/demo/lpr/cam-highway-lpr.jpeg',
    en: {
      title: 'LPR Detection Walkthrough | KabatOne Platform Demo',
      description:
        'See how KabatOne\'s unified platform handles a stolen vehicle alert — from ALPR detection to field dispatch in under 10 minutes.',
    },
    es: {
      title: 'Recorrido de Detección LPR | Demo de la Plataforma KabatOne',
      description:
        'Descubre cómo KabatOne atiende una alerta de vehículo robado: de la detección LPR al despacho en campo en menos de 10 minutos.',
    },
  })
}

export default async function LprDemoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'
  return (
    <>
      <ScenarioHeading>{es ? 'Recorrido del escenario de reconocimiento de placas' : 'License plate recognition scenario walkthrough'}</ScenarioHeading>
      <Suspense
        fallback={
          <div
            className="flex items-center justify-center min-h-screen"
            style={{ background: '#08101A', color: '#48647A', fontFamily: 'monospace' }}
          >
            LOADING...
          </div>
        }
      >
        <LprScenario />
      </Suspense>
    </>
  )
}
