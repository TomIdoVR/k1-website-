import type { Metadata } from 'next'
import { Suspense } from 'react'
import ScenarioPlayer from '@/components/demo/ScenarioPlayer'
import { schoolScenario } from '@/data/demo/school'

export const metadata: Metadata = {
  title: 'Active Shooter School Response Walkthrough | KabatOne Platform Demo',
  description:
    'See how KabatOne coordinates an active threat response at a school — from SOS alert and CCTV detection to officer dispatch and lockdown in under 90 seconds.',
  openGraph: {
    title: 'Active Shooter School Response Walkthrough | KabatOne Platform Demo',
    description:
      'See how KabatOne coordinates an active threat response at a school — from SOS alert and CCTV detection to officer dispatch and lockdown in under 90 seconds.',
  },
  alternates: {
    canonical: 'https://kabatone.com/demo/school',
  },
}

export default function SchoolDemoPage() {
  return (
    <Suspense>
      <ScenarioPlayer scenario={schoolScenario} basePath="/demo/school" />
    </Suspense>
  )
}
