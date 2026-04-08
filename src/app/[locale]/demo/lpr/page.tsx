import type { Metadata } from 'next'
import { Suspense } from 'react'
import LprScenario from '@/components/demo/LprScenario'

export const metadata: Metadata = {
  title: 'LPR Detection Walkthrough | KabatOne Platform Demo',
  description:
    'See how KabatOne\'s unified platform handles a stolen vehicle alert — from ALPR detection to field dispatch in under 10 minutes.',
  openGraph: {
    title: 'LPR Detection Walkthrough | KabatOne Platform Demo',
    description:
      'See how KabatOne\'s unified platform handles a stolen vehicle alert — from ALPR detection to field dispatch in under 10 minutes.',
    images: ['/demo/lpr/stage-1-detect.webp'],
  },
  alternates: {
    canonical: 'https://kabatone.com/demo/lpr',
  },
}

export default function LprDemoPage() {
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
      <LprScenario />
    </Suspense>
  )
}
