import type { Metadata } from 'next'
import { Suspense } from 'react'
import ScenarioPlayer from '@/components/demo/ScenarioPlayer'
import { medicalScenario } from '@/data/demo/medical'

export const metadata: Metadata = {
  title: '911 Medical Emergency Scenario | KabatOne Platform',
  description:
    "See how KabatOne handles a 911 cardiac emergency — from AI call intake and geo-location to paramedic dispatch and hospital pre-alert in under 3 minutes.",
  alternates: { canonical: 'https://kabatone.com/demo/medical' },
}

export default function MedicalScenarioPage() {
  return (
    <Suspense>
      <ScenarioPlayer scenario={medicalScenario} basePath="/demo/medical" />
    </Suspense>
  )
}
