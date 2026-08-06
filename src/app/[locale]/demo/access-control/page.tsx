import type { Metadata } from 'next'
import { Suspense } from 'react'
import ScenarioPlayer from '@/components/demo/ScenarioPlayer'
import { accessControlScenario } from '@/data/demo/access-control'
import ScenarioHeading from '@/components/demo/ScenarioHeading'

export const metadata: Metadata = {
  title: 'Unauthorized Access Control Response Walkthrough | KabatOne Platform Demo',
  description:
    'See how KabatOne detects and responds to an unauthorized server room breach — from badge denial and face recognition to security lockdown and officer dispatch.',
  openGraph: {
    title: 'Unauthorized Access Control Response Walkthrough | KabatOne Platform Demo',
    description:
      'See how KabatOne detects and responds to an unauthorized server room breach — from badge denial and face recognition to security lockdown and officer dispatch.',
  },
  alternates: {
    canonical: 'https://kabatone.com/demo/access-control',
  },
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
