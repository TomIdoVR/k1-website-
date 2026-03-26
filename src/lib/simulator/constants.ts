/* ── Simulator Constants ── */

import type { ModuleKey, PanelId, I18nString } from './types'

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

export const PANEL_NAMES: Record<PanelId, I18nString> = {
  vms:   { en: 'VMS',   es: 'VMS' },
  gis:   { en: 'GIS',   es: 'GIS' },
  cad:   { en: 'CAD',   es: 'CAD' },
  radio: { en: 'Radio', es: 'Radio' },
}

export const STEP_TRANSITION_MS = 500
export const TOOLTIP_DURATION_MS = 2000

// Display times for the clocks (the "scenario time" shown to viewers)
export const FRAGMENTED_DISPLAY_TOTAL = 154 // 2:34 in seconds
export const UNIFIED_DISPLAY_TOTAL = 52      // 0:52 in seconds
