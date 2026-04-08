import { Suspense } from 'react'
import ScenarioPlayer from '@/components/demo/ScenarioPlayer'
import { schoolScenario } from '@/data/demo/school'

export default function SchoolDemoPage() {
  return (
    <Suspense>
      <ScenarioPlayer scenario={schoolScenario} basePath="/demo/school" />
    </Suspense>
  )
}
