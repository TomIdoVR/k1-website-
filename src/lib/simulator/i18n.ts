/* ── Simulator i18n Strings (v2 — Lifecycle Walkthrough) ── */

import type { I18nString } from './types'

export function t(str: I18nString, es: boolean): string {
  return es ? str.es : str.en
}

export const strings = {
  // Entry screen
  title: { en: 'Incident Simulator', es: 'Simulador de Incidentes' },
  subtitle: {
    en: 'Experience the full lifecycle of incident response — from detection to resolution.',
    es: 'Experimenta el ciclo completo de respuesta a incidentes — desde la detección hasta la resolución.',
  },
  chooseScenario: { en: 'Choose a scenario', es: 'Elige un escenario' },
  runScenario: { en: 'Run Scenario', es: 'Ejecutar Escenario' },
  durationHint: { en: '~2 min · Interactive walkthrough', es: '~2 min · Recorrido interactivo' },
  comingSoon: { en: 'Coming Soon', es: 'Próximamente' },

  // Lifecycle stages
  stageDetect: { en: 'DETECT', es: 'DETECTAR' },
  stageUnderstand: { en: 'UNDERSTAND', es: 'COMPRENDER' },
  stageDecide: { en: 'DECIDE', es: 'DECIDIR' },
  stageAct: { en: 'ACT', es: 'ACTUAR' },
  stageLearn: { en: 'LEARN', es: 'APRENDER' },

  // Navigation controls
  prev: { en: 'Previous', es: 'Anterior' },
  next: { en: 'Next', es: 'Siguiente' },
  pause: { en: 'Pause', es: 'Pausar' },
  play: { en: 'Play', es: 'Reproducir' },
  autoAdvance: { en: 'Auto-advance', es: 'Avance automático' },
  skipToSummary: { en: 'Skip to Summary', es: 'Ir al Resumen' },
  screenOf: { en: 'of', es: 'de' },

  // Summary screen
  summaryTitle: { en: 'Incident Resolved', es: 'Incidente Resuelto' },
  summarySubtitle: {
    en: 'The unified platform handled the entire lifecycle seamlessly.',
    es: 'La plataforma unificada manejó todo el ciclo sin interrupciones.',
  },
  totalResponseTime: { en: 'Total Response Time', es: 'Tiempo Total de Respuesta' },
  unitsDeployed: { en: 'Units Deployed', es: 'Unidades Desplegadas' },
  slaCompliance: { en: 'SLA Compliance', es: 'Cumplimiento SLA' },
  aiRecommendations: { en: 'AI Recommendations', es: 'Recomendaciones IA' },
  moduleContributions: { en: 'Module Contributions', es: 'Contribución de Módulos' },
  activeModules: { en: 'Active Modules', es: 'Módulos Activos' },

  // CTAs
  exploreModules: { en: 'Explore Modules', es: 'Explorar Módulos' },
  bookReview: { en: 'Book Architecture Review', es: 'Agendar Revisión de Arquitectura' },
  tryAnother: { en: 'Try Another Scenario', es: 'Probar Otro Escenario' },
  backToSite: { en: 'Back to Site', es: 'Volver al Sitio' },
  restartWalkthrough: { en: 'Restart Walkthrough', es: 'Reiniciar Recorrido' },

  // Shared labels
  live: { en: 'LIVE', es: 'EN VIVO' },
  critical: { en: 'CRITICAL', es: 'CRÍTICO' },
  optimal: { en: 'OPTIMAL', es: 'ÓPTIMO' },
  active: { en: 'ACTIVE', es: 'ACTIVO' },
  responding: { en: 'RESPONDING', es: 'RESPONDIENDO' },
  resolved: { en: 'RESOLVED', es: 'RESUELTO' },
} as const
