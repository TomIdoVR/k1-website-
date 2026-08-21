import type { Metadata } from 'next'
import { Suspense } from 'react'
import ScenarioPlayer from '@/components/demo/ScenarioPlayer'
import { accessControlScenario } from '@/data/demo/access-control'
import ScenarioHeading from '@/components/demo/ScenarioHeading'

import { demoMetadata } from '@/lib/demo-metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return demoMetadata({
    path: '/demo/access-control',
    locale,
    ogImage: '/demo/access-control/cam03-server-corridor.jpg',
    en: {
      // Shortened from "Unauthorized Access Control Response Walkthrough |
      // KabatOne Platform Demo" (73 chars), which the audit flagged as over the
      // 70-char title limit.
      title: 'Unauthorized Access Response Walkthrough | KabatOne Demo',
      description:
        'See how KabatOne detects and responds to an unauthorized server room breach — from badge denial and face recognition to security lockdown and officer dispatch.',
    },
    es: {
      title: 'Recorrido de Respuesta a Acceso No Autorizado | Demo KabatOne',
      description:
        'Descubre cómo KabatOne detecta un acceso no autorizado a un centro de datos: de la denegación de credencial y reconocimiento facial al confinamiento.',
    },
  })
}

export default async function AccessControlDemoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'
  return (
    <>
      <ScenarioHeading>{es ? 'Recorrido del escenario de respuesta a acceso no autorizado' : 'Unauthorized access response scenario walkthrough'}</ScenarioHeading>
      <Suspense>
        <ScenarioPlayer scenario={accessControlScenario} basePath="/demo/access-control" />
      </Suspense>
    </>
  )
}
