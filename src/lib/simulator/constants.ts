/* ── Simulator Constants (v2 — Lifecycle Walkthrough) ── */

import type { ModuleKey, LifecycleStage, I18nString } from './types'

/* ── Module Colors ── */

export const MODULE_COLORS: Record<ModuleKey, string> = {
  video: '#06b6d4',
  dispatch: '#ef4444',
  events: '#f97316',
  gis: '#3b82f6',
  integrations: '#22c55e',
  responder: '#eab308',
  citizen: '#60a5fa',
  ai: '#06b6d4',
  bi: '#a855f7',
}

export const MODULE_NAMES: Record<ModuleKey, I18nString> = {
  video:        { en: 'Video',         es: 'Video' },
  dispatch:     { en: 'Dispatch',      es: 'Despacho' },
  events:       { en: 'Events',        es: 'Eventos' },
  gis:          { en: 'GIS',           es: 'GIS' },
  integrations: { en: 'Integrations',  es: 'Integraciones' },
  responder:    { en: 'Responder',     es: 'Respondiente' },
  citizen:      { en: 'Citizen',       es: 'Ciudadano' },
  ai:           { en: 'AI Engine',     es: 'Motor IA' },
  bi:           { en: 'Analytics',     es: 'Analítica' },
}

export const MODULE_ROLES: Record<ModuleKey, I18nString> = {
  video:        { en: 'Surveillance & Analytics',    es: 'Vigilancia y Analítica' },
  dispatch:     { en: '911 & Dispatch',              es: '911 y Despacho' },
  events:       { en: 'Event Management',            es: 'Gestión de Eventos' },
  gis:          { en: 'Situational Awareness',       es: 'Conciencia Situacional' },
  integrations: { en: 'Open API Platform',           es: 'Plataforma API Abierta' },
  responder:    { en: 'Field Operations',            es: 'Operaciones de Campo' },
  citizen:      { en: 'Community Safety',            es: 'Seguridad Comunitaria' },
  ai:           { en: 'Predictive Intelligence',     es: 'Inteligencia Predictiva' },
  bi:           { en: 'Business Intelligence',       es: 'Inteligencia de Negocios' },
}

/* ── Lifecycle Stage Colors ── */

export const STAGE_COLORS: Record<LifecycleStage, string> = {
  detect:     '#06b6d4',  // Cyan
  understand: '#2563eb',  // Blue
  decide:     '#f97316',  // Orange
  act:        '#ef4444',  // Red
  learn:      '#a855f7',  // Purple
}

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  'detect', 'understand', 'decide', 'act', 'learn',
]

/* ── Tactical UI Colors ── */

export const TACTICAL = {
  bg:        '#050a14',
  surface:   '#0a1224',
  container: '#0e1830',
  header:    '#06090f',
  border:    '#1e293b',
  text:      '#e2e8f0',
  textMuted: '#94a3b8',
  textDim:   '#64748b',
}

/* ── Timing ── */

export const AUTO_ADVANCE_DEFAULT_SEC = 8
export const SCREEN_TRANSITION_MS = 600
