'use client'

import { lprScenario } from '@/data/demo/lpr'
import ScenarioPlayer from './ScenarioPlayer'

export default function LprScenario() {
  return <ScenarioPlayer scenario={lprScenario} basePath="/demo/lpr" />
}
