import type { Metadata } from 'next'
import { Suspense } from 'react'
import ScenarioPlayer from '@/components/demo/ScenarioPlayer'
import { medicalScenario } from '@/data/demo/medical'
import ScenarioHeading from '@/components/demo/ScenarioHeading'

import { demoMetadata } from '@/lib/demo-metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return demoMetadata({
    path: '/demo/medical',
    locale,
    ogImage: '/demo/medical/stage-1-detect.jpg',
    en: {
      title: '911 Medical Emergency Scenario | KabatOne Platform',
      description:
        'See how KabatOne handles a 911 cardiac emergency — from AI call intake and geo-location to paramedic dispatch and hospital pre-alert in under 3 minutes.',
    },
    es: {
      title: 'Escenario de Emergencia Médica 911 | Plataforma KabatOne',
      description:
        'Descubre cómo KabatOne atiende una emergencia cardíaca 911: de la recepción con IA y geolocalización al despacho de paramédicos en menos de 3 minutos.',
    },
  })
}

export default async function MedicalScenarioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'
  return (
    <>
      <ScenarioHeading>{es ? 'Recorrido del escenario de emergencia médica 911' : '911 medical emergency scenario walkthrough'}</ScenarioHeading>
      <Suspense>
        <ScenarioPlayer scenario={medicalScenario} basePath="/demo/medical" />
      </Suspense>
    </>
  )
}
