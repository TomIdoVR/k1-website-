import type { Metadata } from 'next'
import { Suspense } from 'react'
import ScenarioPlayer from '@/components/demo/ScenarioPlayer'
import { accessControlScenario } from '@/data/demo/access-control'

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

export default function AccessControlDemoPage() {
  return (
    <Suspense>
      <ScenarioPlayer scenario={accessControlScenario} basePath="/demo/access-control" />
    </Suspense>
  )
}
