/* ── Simulator i18n Strings ── */

import type { I18nString } from './types'

export function t(str: I18nString, es: boolean): string {
  return es ? str.es : str.en
}

export const strings = {
  // Entry screen
  title: { en: 'Incident Simulator', es: 'Simulador de Incidentes' },
  subtitle: {
    en: 'Same operator. Same incident. Completely different outcome.',
    es: 'Mismo operador. Mismo incidente. Resultado completamente diferente.',
  },
  chooseScenario: { en: 'Choose a scenario', es: 'Elige un escenario' },
  runScenario: { en: 'Run Scenario', es: 'Ejecutar Escenario' },
  durationHint: { en: '~2 min · Just watch', es: '~2 min · Solo observa' },
  comingSoon: { en: 'Coming Soon', es: 'Próximamente' },

  // Playback
  fragmented: { en: 'Fragmented', es: 'Fragmentado' },
  fragmentedSub: { en: 'Legacy Systems', es: 'Sistemas Heredados' },
  unified: { en: 'Unified — KabatOne', es: 'Unificado — KabatOne' },
  unifiedSub: { en: 'Command Center', es: 'Centro de Comando' },
  step: { en: 'Step', es: 'Paso' },
  of: { en: 'of', es: 'de' },
  pause: { en: 'Pause', es: 'Pausar' },
  play: { en: 'Play', es: 'Reproducir' },
  rewind: { en: 'Restart', es: 'Reiniciar' },
  speed: { en: 'Speed', es: 'Velocidad' },
  errors: { en: 'Errors', es: 'Errores' },
  missed: { en: 'Missed', es: 'Perdidos' },

  // Scorecard
  theEvidence: { en: 'The Evidence', es: 'La Evidencia' },
  totalResponse: { en: 'Total Response', es: 'Respuesta Total' },
  faster: { en: 'faster', es: 'más rápido' },
  whereTimeLost: { en: 'Where Time Was Lost', es: 'Dónde Se Perdió el Tiempo' },
  moduleContribution: { en: 'Module Contribution', es: 'Contribución de Módulos' },
  comparison: { en: 'The Difference', es: 'La Diferencia' },
  sameIncident: {
    en: 'Same incident. Same operator. The architecture made the difference.',
    es: 'Mismo incidente. Mismo operador. La arquitectura hizo la diferencia.',
  },

  // CTAs
  exploreModules: { en: 'Explore Modules', es: 'Explorar Módulos' },
  bookReview: { en: 'Book Architecture Review', es: 'Agendar Revisión de Arquitectura' },
  tryAnother: { en: 'Try Another Scenario', es: 'Probar Otro Escenario' },
  backToResults: { en: 'Back to Results', es: 'Volver a Resultados' },
  backToSite: { en: 'Back to Site', es: 'Volver al Sitio' },

  // Module deep dive
  moduleDeepDive: { en: 'Module Deep Dive', es: 'Detalle de Módulos' },
  timeSaved: { en: 'Time Saved', es: 'Tiempo Ahorrado' },
  stepsInvolved: { en: 'Steps Involved', es: 'Pasos Involucrados' },
  withoutThisModule: { en: 'Without this module:', es: 'Sin este módulo:' },

  // Comparison table rows
  manualSteps: { en: 'manual steps', es: 'pasos manuales' },
  decisions: { en: 'decisions', es: 'decisiones' },
  screens: { en: 'screens', es: 'pantallas' },
  canvas: { en: 'canvas', es: 'canvas' },
  dataReEntries: { en: 'data re-entries', es: 're-ingresos de datos' },
  missedAlerts: { en: 'missed alerts', es: 'alertas perdidas' },
  dispatchErrors: { en: 'dispatch errors', es: 'errores de despacho' },
  citizenInput: { en: 'No citizen input', es: 'Sin datos ciudadanos' },
  sosReceived: { en: 'SOS received', es: 'SOS recibido' },
  manualAudit: { en: 'Manual audit', es: 'Auditoría manual' },
  autoAudit: { en: 'Automatic audit trail', es: 'Auditoría automática' },
} as const
