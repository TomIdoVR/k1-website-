import type { Metadata } from 'next'
import { Suspense } from 'react'
import ScenarioPlayer from '@/components/demo/ScenarioPlayer'
import { medicalScenario } from '@/data/demo/medical'
import ScenarioHeading from '@/components/demo/ScenarioHeading'

export const metadata: Metadata = {
  title: '911 Medical Emergency Scenario | KabatOne Platform',
  description:
    "See how KabatOne handles a 911 cardiac emergency — from AI call intake and geo-location to paramedic dispatch and hospital pre-alert in under 3 minutes.",
  alternates: { canonical: 'https://kabatone.com/demo/medical' },
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
