import type { Metadata } from 'next'
import { Suspense } from 'react'
import ScenarioPlayer from '@/components/demo/ScenarioPlayer'
import { schoolScenario } from '@/data/demo/school'
import ScenarioHeading from '@/components/demo/ScenarioHeading'

import { demoMetadata } from '@/lib/demo-metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return demoMetadata({
    path: '/demo/school',
    locale,
    ogImage: '/demo/school/cam01-entrance.jpg',
    en: {
      title: 'Active Shooter School Response Walkthrough | KabatOne Demo',
      description:
        'See how KabatOne coordinates an active threat response at a school — from SOS alert and CCTV detection to officer dispatch and lockdown in under 90 seconds.',
    },
    es: {
      title: 'Recorrido de Respuesta a Tirador Activo en Escuela | Demo KabatOne',
      description:
        'Descubre cómo KabatOne coordina una amenaza activa en una escuela: de la alerta SOS y la detección CCTV al despacho y confinamiento en 90 segundos.',
    },
  })
}

export default async function SchoolDemoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'
  return (
    <>
      <ScenarioHeading>{es ? 'Recorrido del escenario de respuesta a tirador activo en escuela' : 'Active shooter school response scenario walkthrough'}</ScenarioHeading>
      <Suspense>
        <ScenarioPlayer scenario={schoolScenario} basePath="/demo/school" />
      </Suspense>
    </>
  )
}
