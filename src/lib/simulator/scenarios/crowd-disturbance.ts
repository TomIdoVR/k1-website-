/* ── Scenario: Crowd Disturbance Escalation ── */

import type { Scenario } from '../types'

export const crowdDisturbance: Scenario = {
  id: 'crowd-disturbance',
  name: { en: 'Crowd Disturbance', es: 'Disturbio en Multitud' },
  description: {
    en: 'A disturbance is detected at a public venue. Watch how fragmented systems and a unified platform handle the same incident.',
    es: 'Se detecta un disturbio en un lugar público. Observa cómo los sistemas fragmentados y una plataforma unificada manejan el mismo incidente.',
  },
  icon: '👥',
  duration: { en: '~2 min', es: '~2 min' },
  available: true,

  steps: [
    {
      id: 1,
      name: { en: 'Detection', es: 'Detección' },
      fragmentedDuration: 5,
      unifiedDuration: 2,
      modules: ['ai', 'video'],
      fragmented: {
        description: {
          en: 'Operator scans multiple VMS feeds manually. Takes time to notice the anomaly among dozens of cameras.',
          es: 'El operador escanea múltiples cámaras manualmente. Tarda en notar la anomalía entre docenas de feeds.',
        },
        activePanel: 'vms',
      },
      unified: {
        description: {
          en: 'AI Engine detects crowd anomaly (threat score: 0.91). Video module auto-focuses on relevant camera.',
          es: 'El Motor IA detecta anomalía (puntuación: 0.91). El módulo Video enfoca automáticamente la cámara relevante.',
        },
        dataFlows: [{ from: 'ai', to: 'video' }],
      },
    },
    {
      id: 2,
      name: { en: 'Verification', es: 'Verificación' },
      fragmentedDuration: 4,
      unifiedDuration: 1.5,
      modules: ['video'],
      fragmented: {
        description: {
          en: 'Operator switches to VMS (1.2s delay), searches camera grid, zooms in manually to confirm the incident.',
          es: 'El operador cambia al VMS (1.2s demora), busca en la grilla de cámaras, hace zoom manualmente para confirmar.',
        },
        activePanel: 'vms',
      },
      unified: {
        description: {
          en: 'One-click confirm — video already showing incident. AI bounding boxes highlight 3 flagged subjects.',
          es: 'Confirmación con un clic — el video ya muestra el incidente. Cajas IA resaltan 3 sujetos.',
        },
        dataFlows: [],
      },
    },
    {
      id: 3,
      name: { en: 'Location', es: 'Ubicación' },
      fragmentedDuration: 6,
      unifiedDuration: 1,
      modules: ['gis'],
      fragmented: {
        description: {
          en: 'Operator switches to GIS (1.2s delay), manually types address. Cursor animation shows slow data entry.',
          es: 'El operador cambia al GIS (1.2s demora), escribe la dirección manualmente. Ingreso lento de datos.',
        },
        activePanel: 'gis',
      },
      unified: {
        description: {
          en: 'GIS auto-plots incident from camera GPS coordinates. Nearby units and camera coverage displayed instantly.',
          es: 'El GIS ubica el incidente desde coordenadas GPS de la cámara. Unidades cercanas y cobertura visibles al instante.',
        },
        dataFlows: [{ from: 'video', to: 'gis' }],
      },
    },
    {
      id: 4,
      name: { en: 'Context', es: 'Contexto' },
      fragmentedDuration: 5,
      unifiedDuration: 1,
      modules: ['gis', 'dispatch'],
      fragmented: {
        description: {
          en: 'Operator switches to CAD (1.2s delay), cross-references available units with GIS data manually.',
          es: 'El operador cambia al CAD (1.2s demora), cruza datos de unidades disponibles con el GIS manualmente.',
        },
        activePanel: 'cad',
      },
      unified: {
        description: {
          en: 'Map already shows 3 nearest available units ranked by distance. Unit status visible in real time.',
          es: 'El mapa ya muestra las 3 unidades más cercanas por distancia. Estado de unidades visible en tiempo real.',
        },
        dataFlows: [{ from: 'gis', to: 'dispatch' }],
      },
    },
    {
      id: 5,
      name: { en: 'Create Record', es: 'Crear Registro' },
      fragmentedDuration: 6,
      unifiedDuration: 1,
      modules: ['events', 'dispatch'],
      fragmented: {
        description: {
          en: 'Operator types incident details into CAD. Fields populate slowly — manual data entry with errors.',
          es: 'El operador escribe los detalles del incidente en el CAD. Campos se llenan lentamente — ingreso manual con errores.',
        },
        activePanel: 'cad',
        failure: {
          type: 'typo',
          message: {
            en: 'Typo in address — unit dispatched to wrong sector. Correcting...',
            es: 'Error en dirección — unidad despachada al sector incorrecto. Corrigiendo...',
          },
          timePenalty: 30,
        },
      },
      unified: {
        description: {
          en: 'Event auto-created with all fields pre-populated from detection data. Zero manual entry.',
          es: 'Evento creado automáticamente con todos los campos pre-llenados. Cero ingreso manual.',
        },
        dataFlows: [{ from: 'ai', to: 'events' }, { from: 'events', to: 'dispatch' }],
      },
    },
    {
      id: 6,
      name: { en: 'Dispatch', es: 'Despacho' },
      fragmentedDuration: 5,
      unifiedDuration: 2,
      modules: ['dispatch', 'responder'],
      fragmented: {
        description: {
          en: 'Operator selects unit, confirms dispatch, initiates radio contact on a separate panel.',
          es: 'El operador selecciona unidad, confirma despacho, inicia contacto por radio en un panel separado.',
        },
        activePanel: 'radio',
      },
      unified: {
        description: {
          en: 'AI-ranked unit selected. Dispatch confirmed with one click. Responder app notified instantly.',
          es: 'Unidad seleccionada por IA. Despacho confirmado con un clic. App del respondiente notificada al instante.',
        },
        dataFlows: [{ from: 'dispatch', to: 'responder' }],
      },
    },
    {
      id: 7,
      name: { en: 'Escalation', es: 'Escalamiento' },
      fragmentedDuration: 8,
      unifiedDuration: 2,
      modules: ['ai', 'video', 'gis'],
      fragmented: {
        description: {
          en: 'Second camera detects related activity. Alert flashes in VMS corner while operator is in CAD — MISSED.',
          es: 'Segunda cámara detecta actividad relacionada. La alerta parpadea en el VMS mientras el operador está en el CAD — PERDIDA.',
        },
        activePanel: 'cad',
        failure: {
          type: 'missed_alert',
          message: {
            en: 'Alert missed — operator was in a different system. +25 sec.',
            es: 'Alerta perdida — el operador estaba en otro sistema. +25 seg.',
          },
          timePenalty: 25,
        },
      },
      unified: {
        description: {
          en: 'AI auto-correlates new activity to existing incident. GIS updates with expanded threat zone.',
          es: 'La IA auto-correlaciona la nueva actividad al incidente existente. El GIS actualiza con zona de amenaza expandida.',
        },
        dataFlows: [{ from: 'ai', to: 'video' }, { from: 'video', to: 'gis' }],
      },
    },
    {
      id: 8,
      name: { en: 'Citizen Input', es: 'Reporte Ciudadano' },
      fragmentedDuration: 3,
      unifiedDuration: 2,
      modules: ['citizen'],
      fragmented: {
        description: {
          en: 'A citizen tries to report. No intake channel available. Information never arrives.',
          es: 'Un ciudadano intenta reportar. No hay canal disponible. La información nunca llega.',
        },
        activePanel: 'cad',
        failure: {
          type: 'no_channel',
          message: {
            en: 'No citizen channel — report lost.',
            es: 'Sin canal ciudadano — reporte perdido.',
          },
          timePenalty: 0,
        },
      },
      unified: {
        description: {
          en: 'Citizen SOS appears on map, attached to incident. Additional context for responders.',
          es: 'SOS ciudadano aparece en el mapa, vinculado al incidente. Contexto adicional para los respondientes.',
        },
        dataFlows: [{ from: 'citizen', to: 'gis' }],
      },
    },
    {
      id: 9,
      name: { en: 'Field Response', es: 'Respuesta en Campo' },
      fragmentedDuration: 5,
      unifiedDuration: 1.5,
      modules: ['responder'],
      fragmented: {
        description: {
          en: 'Unit arrives. Operator scrambles to radio briefing — context scattered across 4 systems.',
          es: 'La unidad llega. El operador improvisa un briefing por radio — contexto disperso en 4 sistemas.',
        },
        activePanel: 'radio',
      },
      unified: {
        description: {
          en: 'Full incident brief on mobile app: video, map, event history, and related alerts.',
          es: 'Briefing completo en app móvil: video, mapa, historial del evento y alertas relacionadas.',
        },
        dataFlows: [{ from: 'events', to: 'responder' }],
      },
    },
    {
      id: 10,
      name: { en: 'Resolution', es: 'Resolución' },
      fragmentedDuration: 5,
      unifiedDuration: 1.5,
      modules: ['events', 'bi'],
      fragmented: {
        description: {
          en: 'Manual close in CAD. No unified timeline. Operator exports data from 4 separate systems.',
          es: 'Cierre manual en CAD. Sin línea de tiempo unificada. El operador exporta datos de 4 sistemas separados.',
        },
        activePanel: 'cad',
      },
      unified: {
        description: {
          en: 'One-click resolution. Automatic audit trail. BI dashboard updates in real time.',
          es: 'Resolución con un clic. Auditoría automática. Dashboard de BI actualizado en tiempo real.',
        },
        dataFlows: [{ from: 'events', to: 'bi' }],
      },
    },
  ],

  totalFragmentedTime: 154, // 2:34 displayed (includes time penalties)
  totalUnifiedTime: 52,     // 0:52 displayed

  timeLostBreakdown: [
    { category: { en: 'System Switching', es: 'Cambio entre Sistemas' }, percentage: 42 },
    { category: { en: 'Manual Data Entry', es: 'Ingreso Manual de Datos' }, percentage: 31 },
    { category: { en: 'Data Correlation', es: 'Correlación de Datos' }, percentage: 19 },
    { category: { en: 'Confirmation Delays', es: 'Retrasos de Confirmación' }, percentage: 8 },
  ],

  moduleContributions: [
    {
      moduleId: 'ai',
      timeSaved: { en: '38 sec', es: '38 seg' },
      description: { en: 'Auto-detection & correlation eliminated manual scanning', es: 'Auto-detección y correlación eliminaron escaneo manual' },
      stepsInvolved: [1, 7],
    },
    {
      moduleId: 'gis',
      timeSaved: { en: '25 sec', es: '25 seg' },
      description: { en: 'Auto-locate from camera GPS, instant unit proximity', es: 'Auto-ubicación por GPS de cámara, proximidad de unidades instantánea' },
      stepsInvolved: [3, 4],
    },
    {
      moduleId: 'dispatch',
      timeSaved: { en: '18 sec', es: '18 seg' },
      description: { en: 'Pre-ranked units, one-click dispatch', es: 'Unidades pre-rankeadas, despacho con un clic' },
      stepsInvolved: [4, 5, 6],
    },
    {
      moduleId: 'events',
      timeSaved: { en: '12 sec', es: '12 seg' },
      description: { en: 'Auto-created record, zero manual entry', es: 'Registro auto-creado, cero ingreso manual' },
      stepsInvolved: [5, 10],
    },
    {
      moduleId: 'video',
      timeSaved: { en: '10 sec', es: '10 seg' },
      description: { en: 'AI auto-focus, no manual camera search', es: 'Auto-enfoque IA, sin búsqueda manual de cámaras' },
      stepsInvolved: [1, 2, 7],
    },
    {
      moduleId: 'citizen',
      timeSaved: { en: 'New data', es: 'Datos nuevos' },
      description: { en: 'SOS report added context (lost in fragmented)', es: 'Reporte SOS agregó contexto (perdido en fragmentado)' },
      stepsInvolved: [8],
    },
    {
      moduleId: 'responder',
      timeSaved: { en: '8 sec', es: '8 seg' },
      description: { en: 'Full incident brief on mobile, eliminated radio scramble', es: 'Briefing completo en móvil, eliminó improvisación por radio' },
      stepsInvolved: [6, 9],
    },
    {
      moduleId: 'bi',
      timeSaved: { en: 'Instant', es: 'Instantáneo' },
      description: { en: 'Real-time KPI dashboard, no manual audit export', es: 'Dashboard KPI en tiempo real, sin exportación manual' },
      stepsInvolved: [10],
    },
    {
      moduleId: 'integrations',
      timeSaved: { en: 'Always on', es: 'Siempre activo' },
      description: { en: 'Data layer connecting all modules — zero re-entry', es: 'Capa de datos conectando todos los módulos — cero re-ingreso' },
      stepsInvolved: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  ],
}
