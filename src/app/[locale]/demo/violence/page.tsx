import type { Metadata } from 'next'
import { Suspense } from 'react'
import ScenarioPlayer from '@/components/demo/ScenarioPlayer'
import { violenceScenario } from '@/data/demo/violence'
import ScenarioHeading from '@/components/demo/ScenarioHeading'

import { demoMetadata } from '@/lib/demo-metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return demoMetadata({
    path: '/demo/violence',
    locale,
    ogImage: '/demo/violence/stage-1-detect.jpg',
    en: {
      title: 'Violence Detection Walkthrough | KabatOne Platform Demo',
      description:
        "See how KabatOne's AI video analytics detects violent incidents in real time — from initial alert to field response in under 2 minutes.",
    },
    es: {
      title: 'Recorrido de Detección de Violencia | Demo de la Plataforma KabatOne',
      description:
        'Descubre cómo la analítica de video con IA de KabatOne detecta incidentes violentos en tiempo real, de la alerta a la respuesta en campo en 2 minutos.',
    },
  })
}

export default async function ViolenceDemoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'
  return (
    <>
      <ScenarioHeading>{es ? 'Recorrido del escenario de detección de violencia' : 'Violence detection scenario walkthrough'}</ScenarioHeading>
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
        <ScenarioPlayer scenario={violenceScenario} basePath="/demo/violence" />
      </Suspense>
    </>
  )
}
