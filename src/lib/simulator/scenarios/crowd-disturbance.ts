/* ── Scenario: Crowd Disturbance — Lifecycle Walkthrough (v2) ── */

import type { Scenario } from '../types'

export const crowdDisturbance: Scenario = {
  id: 'crowd-disturbance',
  name: { en: 'Crowd Disturbance', es: 'Disturbio en Multitud' },
  description: {
    en: 'A disturbance is detected at a public venue. Experience how the KabatOne platform handles every stage of the incident lifecycle.',
    es: 'Se detecta un disturbio en un lugar público. Experimenta cómo la plataforma KabatOne maneja cada etapa del ciclo de vida del incidente.',
  },
  icon: '👥',
  duration: { en: '~2 min', es: '~2 min' },
  available: true,

  screens: [
    /* ── 01 DETECT — Surveillance Wall ── */
    {
      id: '01-detect',
      stage: 'detect',
      stageNumber: '01',
      stageLabel: { en: 'DETECT', es: 'DETECTAR' },
      title: { en: 'Surveillance Wall', es: 'Muro de Vigilancia' },
      subtitle: {
        en: 'AI Engine detects crowd anomaly across 47 active camera feeds. Threat score: 0.91.',
        es: 'El Motor IA detecta anomalía en la multitud entre 47 cámaras activas. Puntuación de amenaza: 0.91.',
      },
      modules: ['ai', 'video'],
      durationSec: 8,
      sideNav: [
        { icon: 'videocam', label: { en: 'Camera Grid', es: 'Grilla de Cámaras' }, active: true },
        { icon: 'warning', label: { en: 'Alerts', es: 'Alertas' }, active: true },
        { icon: 'analytics', label: { en: 'AI Score', es: 'Puntuación IA' }, active: true },
        { icon: 'map', label: { en: 'Map', es: 'Mapa' }, active: false },
        { icon: 'assignment', label: { en: 'Events', es: 'Eventos' }, active: false },
      ],
    },
    /* ── 02a UNDERSTAND — Video Analysis ── */
    {
      id: '02a-understand-video',
      stage: 'understand',
      stageNumber: '02',
      stageLabel: { en: 'UNDERSTAND', es: 'COMPRENDER' },
      title: { en: 'Video Analysis', es: 'Análisis de Video' },
      subtitle: {
        en: 'AI bounding boxes identify 3 flagged subjects. Behavioral analysis confirms escalation pattern.',
        es: 'Cajas de IA identifican 3 sujetos marcados. El análisis conductual confirma patrón de escalamiento.',
      },
      modules: ['video', 'ai'],
      durationSec: 8,
      sideNav: [
        { icon: 'videocam', label: { en: 'Video Feed', es: 'Feed de Video' }, active: true },
        { icon: 'person_search', label: { en: 'Detection', es: 'Detección' }, active: true },
        { icon: 'psychology', label: { en: 'AI Analysis', es: 'Análisis IA' }, active: true },
        { icon: 'history', label: { en: 'Timeline', es: 'Línea de Tiempo' }, active: false },
      ],
    },
    /* ── 02b UNDERSTAND — GIS Triage ── */
    {
      id: '02b-understand-gis',
      stage: 'understand',
      stageNumber: '02',
      stageLabel: { en: 'UNDERSTAND', es: 'COMPRENDER' },
      title: { en: 'GIS Triage', es: 'Triaje GIS' },
      subtitle: {
        en: 'Incident auto-plotted from camera GPS. 3 nearest units and camera coverage zones displayed.',
        es: 'Incidente ubicado automáticamente por GPS de cámara. 3 unidades más cercanas y zonas de cobertura visibles.',
      },
      modules: ['gis', 'video'],
      durationSec: 8,
      sideNav: [
        { icon: 'map', label: { en: 'Map', es: 'Mapa' }, active: true },
        { icon: 'my_location', label: { en: 'Incident', es: 'Incidente' }, active: true },
        { icon: 'directions_car', label: { en: 'Units', es: 'Unidades' }, active: true },
        { icon: 'camera_outdoor', label: { en: 'Coverage', es: 'Cobertura' }, active: true },
      ],
    },
    /* ── 03a DECIDE — Events Dashboard ── */
    {
      id: '03a-decide-events',
      stage: 'decide',
      stageNumber: '03',
      stageLabel: { en: 'DECIDE', es: 'DECIDIR' },
      title: { en: 'Events Dashboard', es: 'Panel de Eventos' },
      subtitle: {
        en: 'Event auto-created with all fields pre-populated. Priority: CRITICAL. Zero manual entry.',
        es: 'Evento creado automáticamente con campos pre-llenados. Prioridad: CRÍTICO. Cero ingreso manual.',
      },
      modules: ['events', 'ai'],
      durationSec: 8,
      sideNav: [
        { icon: 'assignment', label: { en: 'Event', es: 'Evento' }, active: true },
        { icon: 'priority_high', label: { en: 'Priority', es: 'Prioridad' }, active: true },
        { icon: 'link', label: { en: 'Related', es: 'Relacionados' }, active: false },
        { icon: 'history', label: { en: 'History', es: 'Historial' }, active: false },
      ],
    },
    /* ── 03b DECIDE — Response Protocol ── */
    {
      id: '03b-decide-protocol',
      stage: 'decide',
      stageNumber: '03',
      stageLabel: { en: 'DECIDE', es: 'DECIDIR' },
      title: { en: 'Response Protocol', es: 'Protocolo de Respuesta' },
      subtitle: {
        en: 'SLA countdown active. AI recommends crowd control protocol with 3 required actions.',
        es: 'Cuenta regresiva SLA activa. La IA recomienda protocolo de control de multitudes con 3 acciones requeridas.',
      },
      modules: ['events', 'ai', 'dispatch'],
      durationSec: 8,
      sideNav: [
        { icon: 'timer', label: { en: 'SLA Timer', es: 'Timer SLA' }, active: true },
        { icon: 'checklist', label: { en: 'Protocol', es: 'Protocolo' }, active: true },
        { icon: 'smart_toy', label: { en: 'AI Assist', es: 'Asist. IA' }, active: true },
        { icon: 'timeline', label: { en: 'Timeline', es: 'Línea Temporal' }, active: true },
      ],
    },
    /* ── 04a ACT — Dispatch ── */
    {
      id: '04a-act-dispatch',
      stage: 'act',
      stageNumber: '04',
      stageLabel: { en: 'ACT', es: 'ACTUAR' },
      title: { en: 'Dispatch', es: 'Despacho' },
      subtitle: {
        en: 'AI-ranked units selected. One-click dispatch. Responder app notified instantly.',
        es: 'Unidades seleccionadas por IA. Despacho con un clic. App del respondiente notificada al instante.',
      },
      modules: ['dispatch', 'gis', 'responder'],
      durationSec: 8,
      sideNav: [
        { icon: 'directions_car', label: { en: 'Units', es: 'Unidades' }, active: true },
        { icon: 'route', label: { en: 'Routing', es: 'Ruta' }, active: true },
        { icon: 'send', label: { en: 'Dispatch', es: 'Despacho' }, active: true },
        { icon: 'phone_android', label: { en: 'Notify', es: 'Notificar' }, active: true },
      ],
    },
    /* ── 04b ACT — Field Response ── */
    {
      id: '04b-act-responder',
      stage: 'act',
      stageNumber: '04',
      stageLabel: { en: 'ACT', es: 'ACTUAR' },
      title: { en: 'Field Response', es: 'Respuesta en Campo' },
      subtitle: {
        en: 'Full incident brief on mobile app. Tactical chat active. Citizen SOS report integrated.',
        es: 'Briefing completo en app móvil. Chat táctico activo. Reporte SOS ciudadano integrado.',
      },
      modules: ['responder', 'citizen', 'video'],
      durationSec: 8,
      sideNav: [
        { icon: 'phone_android', label: { en: 'Mobile App', es: 'App Móvil' }, active: true },
        { icon: 'chat', label: { en: 'Tactical Chat', es: 'Chat Táctico' }, active: true },
        { icon: 'sos', label: { en: 'Citizen SOS', es: 'SOS Ciudadano' }, active: true },
        { icon: 'dashboard', label: { en: 'Operator', es: 'Operador' }, active: true },
      ],
    },
    /* ── 05 LEARN — BI Analytics ── */
    {
      id: '05-learn-bi',
      stage: 'learn',
      stageNumber: '05',
      stageLabel: { en: 'LEARN', es: 'APRENDER' },
      title: { en: 'Analytics Dashboard', es: 'Panel de Analítica' },
      subtitle: {
        en: 'Automatic audit trail. KPI dashboard updates in real time. AI generates improvement recommendations.',
        es: 'Auditoría automática. Dashboard KPI actualizado en tiempo real. La IA genera recomendaciones de mejora.',
      },
      modules: ['bi', 'ai', 'events'],
      durationSec: 8,
      sideNav: [
        { icon: 'bar_chart', label: { en: 'KPIs', es: 'KPIs' }, active: true },
        { icon: 'speed', label: { en: 'SLA', es: 'SLA' }, active: true },
        { icon: 'smart_toy', label: { en: 'AI Insights', es: 'Insights IA' }, active: true },
        { icon: 'download', label: { en: 'Export', es: 'Exportar' }, active: false },
      ],
    },
  ],

  summary: {
    totalResponseTime: '00:52',
    unitsDeployed: 3,
    slaCompliance: '98.2%',
    aiRecommendations: [
      {
        en: 'Deploy additional camera coverage at venue north entrance',
        es: 'Desplegar cobertura adicional de cámaras en la entrada norte del recinto',
      },
      {
        en: 'Pre-position rapid response unit during high-attendance events',
        es: 'Pre-posicionar unidad de respuesta rápida durante eventos de alta asistencia',
      },
      {
        en: 'Update crowd density thresholds based on venue capacity data',
        es: 'Actualizar umbrales de densidad de multitud basados en datos de capacidad del recinto',
      },
    ],
    moduleContributions: [
      {
        moduleId: 'ai',
        label: { en: 'AI Engine', es: 'Motor IA' },
        description: { en: 'Auto-detection & correlation eliminated manual scanning', es: 'Auto-detección y correlación eliminaron escaneo manual' },
      },
      {
        moduleId: 'video',
        label: { en: 'Video', es: 'Video' },
        description: { en: 'AI auto-focus, bounding boxes, behavioral analysis', es: 'Auto-enfoque IA, cajas de detección, análisis conductual' },
      },
      {
        moduleId: 'gis',
        label: { en: 'GIS', es: 'GIS' },
        description: { en: 'Auto-locate from camera GPS, instant unit proximity', es: 'Auto-ubicación por GPS de cámara, proximidad de unidades instantánea' },
      },
      {
        moduleId: 'events',
        label: { en: 'Events', es: 'Eventos' },
        description: { en: 'Auto-created record, zero manual entry, SLA tracking', es: 'Registro auto-creado, cero ingreso manual, seguimiento SLA' },
      },
      {
        moduleId: 'dispatch',
        label: { en: 'Dispatch', es: 'Despacho' },
        description: { en: 'AI-ranked units, one-click dispatch, ETA routing', es: 'Unidades rankeadas por IA, despacho con un clic, ruta ETA' },
      },
      {
        moduleId: 'responder',
        label: { en: 'Responder', es: 'Respondiente' },
        description: { en: 'Full brief on mobile, tactical chat, live video', es: 'Briefing completo en móvil, chat táctico, video en vivo' },
      },
      {
        moduleId: 'citizen',
        label: { en: 'Citizen', es: 'Ciudadano' },
        description: { en: 'SOS report added context, geo-tagged to incident', es: 'Reporte SOS agregó contexto, geo-etiquetado al incidente' },
      },
      {
        moduleId: 'bi',
        label: { en: 'Analytics', es: 'Analítica' },
        description: { en: 'Real-time KPI dashboard, automatic audit trail', es: 'Dashboard KPI en tiempo real, auditoría automática' },
      },
      {
        moduleId: 'integrations',
        label: { en: 'Integrations', es: 'Integraciones' },
        description: { en: 'Data layer connecting all modules — zero re-entry', es: 'Capa de datos conectando todos los módulos — cero re-ingreso' },
      },
    ],
  },
}
