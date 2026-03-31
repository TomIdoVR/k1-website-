import type { Metadata } from 'next'
import { Suspense } from 'react'
import ScenarioPlayer from '@/components/demo/ScenarioPlayer'
import { violenceScenario } from '@/data/demo/violence'

export const metadata: Metadata = {
  title: 'Violence Detection Walkthrough | KabatOne Platform Demo',
  description:
    "See how KabatOne's AI video analytics detects violent incidents in real time — from initial alert to field response in under 2 minutes.",
  openGraph: {
    title: 'Violence Detection Walkthrough | KabatOne Platform Demo',
    description:
      "See how KabatOne's AI video analytics detects violent incidents in real time — from initial alert to field response in under 2 minutes.",
    images: ['/demo/violence/stage-1-detect.jpg'],
  },
  alternates: {
    canonical: 'https://kabatone.com/demo/violence',
  },
}

export default function ViolenceDemoPage() {
  return (
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
  )
}
