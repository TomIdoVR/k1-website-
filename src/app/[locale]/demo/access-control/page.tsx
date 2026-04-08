import { Suspense } from 'react'
import ScenarioPlayer from '@/components/demo/ScenarioPlayer'
import { accessControlScenario } from '@/data/demo/access-control'

export default function AccessControlDemoPage() {
  return (
    <Suspense>
      <ScenarioPlayer scenario={accessControlScenario} basePath="/demo/access-control" />
    </Suspense>
  )
}
