/* ── Scenario Registry ── */

import type { Scenario } from '../types'
import { crowdDisturbance } from './crowd-disturbance'

export const scenarios: Record<string, Scenario> = {
  'crowd-disturbance': crowdDisturbance,
}

// Placeholder scenarios for the entry screen cards
export const scenarioList = [
  crowdDisturbance,
  {
    id: 'traffic-accident',
    name: { en: 'Traffic Accident', es: 'Accidente de Tránsito' },
    description: {
      en: 'Multi-vehicle collision requiring police, ambulance, and fire coordination.',
      es: 'Colisión multi-vehículo que requiere coordinación de policía, ambulancia y bomberos.',
    },
    icon: '🚗',
    duration: { en: '~2 min', es: '~2 min' },
    available: false,
  },
  {
    id: 'stadium-event',
    name: { en: 'Stadium Event', es: 'Evento en Estadio' },
    description: {
      en: 'Pre-event planning and real-time response at scale with 40,000 attendees.',
      es: 'Planificación previa y respuesta en tiempo real a escala con 40,000 asistentes.',
    },
    icon: '🏟️',
    duration: { en: '~3 min', es: '~3 min' },
    available: false,
  },
]

export function getScenario(id: string): Scenario | undefined {
  return scenarios[id]
}
