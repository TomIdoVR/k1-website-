/* K-Traffic solution-page content — ported verbatim from the Claude Design
   project "Kabat One Website" (home/sol-ktraffic.jsx), whose own header notes
   the copy was lifted from the live /k-traffic page.

   Notes on this one: it uses `pin` and `bell` as benefit icons, which exist
   only in the flow-icon set — they resolve through the bidirectional fallback
   in SolutionPage. The performance panel has five bars rather than four, and
   uptime deliberately shows "99.9%" while the bar itself is capped at 99%.

   Non-breaking hyphens (U+2011) in "K‑Traffic" inside prose are the design's
   own, kept so the product name never breaks across lines. */

import { type SolutionContent, S, SL } from './solution-content'

const KTRAFFIC: SolutionContent = {
  key: 'traffic',
  name: 'K-Traffic',
  /* The design used var(--k-traffic). Resolved to the cyan the hero nav
     already uses for K-Traffic (#06b6d4), which is also the colour of the
     design's own first hero chip and pairs with its teal accentInk. Note the
     Solutions accordion currently tags K-Traffic amber (#f59e0b) — worth
     reconciling separately. */
  accent: '#06b6d4',
  accentInk: '#0b6a80',
  eyebrow: S('SMART TRAFFIC · K-TRAFFIC', 'TRÁFICO INTELIGENTE · K-TRAFFIC'),
  h1a: S('Intelligent traffic management', 'Sistema de gestión de tráfico'),
  h1b: S('with adaptive signal control.', 'inteligente con control adaptativo.'),
  sub: S('Connects traffic signals, cameras, sensors, and control centers into one intelligent platform — reducing congestion, detecting incidents, and optimizing city mobility in real time.',
    'Optimiza el flujo, detecta infracciones y responde a incidentes antes de que se conviertan en colapsos. K‑Traffic conecta semáforos, sensores y aplicación de normas en un sistema adaptativo.'),
  heroImg: '/images/k-traffic-mockup.webp',
  heroAlt: S('K‑Traffic console showing corridor flow, signal states, and detected incidents',
    'Consola de K‑Traffic con flujo de corredores, estados de semáforos e incidentes detectados'),
  consoleTitle: S('K-TRAFFIC · CORRIDOR VIEW', 'K-TRAFFIC · VISTA DE CORREDOR'),
  heroEvent: {
    tag: S('ADAPTIVE CONTROL', 'CONTROL ADAPTATIVO'),
    title: S('Corridor optimization', 'Optimización de corredor'),
    loc: S('Main St · 4 signals', 'Main St · 4 semáforos'),
    rows: [
      { l: S('Signals', 'Semáforos'), v: '4' },
      { l: S('Response', 'Respuesta'), v: '98%' },
      { l: S('Congestion', 'Congestión'), v: '-34%' },
    ],
  },
  chips: [
    { c: '#06b6d4', t: S('Adaptive signal control', 'Control adaptativo') },
    { c: '#22c55e', t: S('Real-time incident detection', 'Detección en tiempo real') },
  ],
  stats: [
    { v: '150+', l: S('Intersections managed', 'Intersecciones gestionadas') },
    { v: '12', l: S('Cities connected', 'Ciudades conectadas') },
    { v: '40%', l: S('Congestion reduction', 'Reducción de congestión') },
  ],

  coreLabel: S('BUILT ON THE UNIFIED PLATFORM', 'CONSTRUIDO SOBRE LA PLATAFORMA UNIFICADA'),
  core: SL(['GIS', 'Video + AI', 'Events', 'Integrations', 'Workflows', 'Mobile', 'Analytics'],
    ['GIS', 'Video + IA', 'Eventos', 'Integraciones', 'Flujos', 'Móvil', 'Analítica']),

  benefitsEyebrow: S('WHY K-TRAFFIC', 'POR QUÉ K-TRAFFIC'),
  benefitsH2a: S('Smarter traffic', 'Tráfico más inteligente'),
  benefitsH2b: S('for smarter cities.', 'para ciudades más inteligentes.'),
  benefits: [
    {
      icon: 'pin', t: S('Real-time traffic monitoring', 'Monitoreo de tráfico en tiempo real'),
      d: S('Continuous observation of road conditions across all monitored intersections, corridors, and highways.',
        'Observación continua de las condiciones viales en todas las intersecciones, corredores y autopistas monitoreadas.'),
    },
    {
      icon: 'brain', t: S('AI-driven optimization', 'Optimización impulsada por IA'),
      d: S('Predictive analytics and adaptive signal control to improve flow, reduce congestion, and cut travel times.',
        'Analítica predictiva y control adaptativo de semáforos para mejorar el flujo, reducir la congestión y acortar tiempos de viaje.'),
    },
    {
      icon: 'bell', t: S('Optimized event management', 'Gestión optimizada de eventos'),
      d: S('Instant incident detection, automated alerts, and coordinated response across traffic operations and public safety.',
        'Detección instantánea de incidentes, alertas automatizadas y respuesta coordinada entre operaciones de tráfico y seguridad pública.'),
    },
    {
      icon: 'link', t: S('Seamless integration', 'Integración perfecta'),
      d: S('Connects with existing transportation infrastructure, IoT sensors, and public safety platforms.',
        'Se conecta con la infraestructura de transporte existente, sensores IoT y plataformas de seguridad pública.'),
    },
  ],

  featuresEyebrow: S('CAPABILITIES', 'CAPACIDADES'),
  featuresH2a: S('An all-in-one solution for', 'Una solución integral para la'),
  featuresH2b: S('smarter traffic management.', 'gestión inteligente de tráfico.'),
  features: [
    {
      img: '/images/k-traffic-mockup.webp',
      alt: S('Corridor view with live signal states and adaptive timing across intersections',
        'Vista de corredor con estados de semáforos y tiempos adaptativos en intersecciones'),
      t: S('Traffic signal & adaptive control', 'Control adaptativo de semáforos'),
      d: S('Signal cycles adjust automatically from real-time sensor, camera, and loop-detector data — with operator override always available.',
        'Los ciclos de semáforo se ajustan automáticamente con datos en tiempo real de sensores, cámaras y lazos — con control manual siempre disponible.'),
      pts: SL(['Adaptive cycles from live demand', 'Corridor and intersection view', 'Operator override at any point'],
        ['Ciclos adaptativos según demanda', 'Vista de corredor e intersección', 'Control manual en cualquier momento']),
    },
    {
      img: '/images/modules/ai.webp',
      alt: S('Predictive traffic analytics and AI modeling forecasting congestion',
        'Analítica predictiva de tráfico y modelado con IA previendo congestión'),
      t: S('Predictive analytics & AI modeling', 'Analítica predictiva y modelado con IA'),
      d: S('Predictive models anticipate congestion before it forms, so timing plans respond to what is coming rather than what already happened.',
        'Los modelos predictivos anticipan la congestión antes de que se forme, para que los planes respondan a lo que viene y no a lo que ya pasó.'),
      pts: SL(['Congestion forecasting', 'Automated signal adjustment', 'Continuous model refinement'],
        ['Pronóstico de congestión', 'Ajuste automático de señales', 'Refinamiento continuo del modelo']),
    },
    {
      img: '/images/modules/events.webp',
      alt: S('Incident detection raising automated alerts to traffic and public safety operations',
        'Detección de incidentes generando alertas automáticas a tráfico y seguridad pública'),
      t: S('Real-time incident detection', 'Detección de incidentes en tiempo real'),
      d: S('Collisions and roadway incidents raise alerts automatically and coordinate response across traffic operations and public safety.',
        'Choques e incidentes viales generan alertas automáticas y coordinan la respuesta entre operaciones de tráfico y seguridad pública.'),
      pts: SL(['Instant incident detection', 'Automated alerting', 'Coordinated traffic + safety response'],
        ['Detección instantánea de incidentes', 'Alertas automatizadas', 'Respuesta coordinada tráfico + seguridad']),
    },
    {
      img: '/images/modules/gis.webp',
      alt: S('GIS map showing traffic flow, corridors, and congestion across the road network',
        'Mapa GIS con flujo vehicular, corredores y congestión en la red vial'),
      t: S('GIS & mapping for flow optimization', 'GIS y mapeo para optimización de flujo'),
      d: S('See the whole road network on the same operational map command uses, with conditions and incidents in one layer.',
        'Observa toda la red vial en el mismo mapa operativo que usa mando, con condiciones e incidentes en una capa.'),
      pts: SL(['Traffic layer on operational GIS', 'Congestion and closure view', 'Shared map with command'],
        ['Capa de tráfico en el GIS operativo', 'Vista de congestión y cierres', 'Mapa compartido con mando']),
    },
    {
      img: '/images/modules/dispatch.webp',
      alt: S('Automated decision support recommending roadway operations actions',
        'Soporte automatizado de decisiones recomendando acciones de operación vial'),
      t: S('Automated decision support', 'Soporte automatizado de decisiones'),
      d: S('Recommended actions for roadway operations surface with their supporting data, and link to public safety dispatch when an incident needs a response.',
        'Las acciones recomendadas para operación vial aparecen con sus datos de respaldo y se enlazan al despacho de seguridad pública cuando un incidente requiere respuesta.'),
      pts: SL(['Recommended roadway actions', 'Linked to public safety dispatch', 'Emergency services and road crews'],
        ['Acciones viales recomendadas', 'Enlazado al despacho de seguridad', 'Servicios de emergencia y cuadrillas']),
    },
    {
      img: '/images/modules/video.webp',
      alt: S('Traffic cameras and speed cameras monitoring intersections and corridors',
        'Cámaras de tráfico y de velocidad monitoreando intersecciones y corredores'),
      t: S('Cameras & enforcement', 'Cámaras y aplicación de normas'),
      d: S('Traffic and speed cameras double as public safety sensors, feeding the same detection and investigation tools.',
        'Las cámaras de tráfico y velocidad funcionan como sensores de seguridad pública, alimentando las mismas herramientas de detección e investigación.'),
      pts: SL(['Intersection and corridor cameras', 'Speed cameras and violation capture', 'Shared with video investigations'],
        ['Cámaras de intersección y corredor', 'Cámaras de velocidad e infracciones', 'Compartido con investigaciones de video']),
    },
  ],

  perfLabel: S('SYSTEM PERFORMANCE', 'RENDIMIENTO DEL SISTEMA'),
  perfBars: [
    { l: S('Signal response time', 'Tiempo de respuesta de señal'), v: '98%', w: '98%' },
    { l: S('Congestion reduction', 'Reducción de congestión'), v: '34%', w: '34%' },
    { l: S('Incident detection rate', 'Tasa de detección de incidentes'), v: '91%', w: '91%' },
    { l: S('Platform uptime', 'Disponibilidad de plataforma'), v: '99.9%', w: '99%' },
    { l: S('AI model accuracy', 'Precisión del modelo IA'), v: '87%', w: '87%' },
  ],

  processEyebrow: S('THE PROCESS', 'EL PROCESO'),
  processH2a: S('Data-driven traffic orchestration', 'Orquestación de tráfico basada en datos'),
  processH2b: S('with real-time AI insights.', 'con inteligencia IA en tiempo real.'),
  processIn: [
    { k: 'iot', t: S('IoT sensors', 'Sensores IoT') },
    { k: 'camera', t: S('Cameras', 'Cámaras') },
    { k: 'sensor', t: S('Loop detectors', 'Detectores de lazo') },
    { k: 'truck', t: S('Vehicles / V2X', 'Vehículos / V2X') },
    { k: 'radio', t: S('Field reports', 'Reportes de campo') },
  ],
  processCore: SL(['MONITOR', 'OPTIMIZE', 'ALERT'], ['MONITOREA', 'OPTIMIZA', 'ALERTA']),
  processOut: [
    { k: 'bolt', t: S('Signal control', 'Control de semáforos') },
    { k: 'bell', t: S('Incident alert', 'Alerta de incidentes') },
    { k: 'chart', t: S('Analytics', 'Analítica') },
  ],

  intEyebrow: S('INTEGRATIONS', 'INTEGRACIONES'),
  intH2a: S('Enhance traffic management', 'Mejora la gestión de tráfico'),
  intH2b: S('with seamless integrations.', 'con integraciones perfectas.'),
  intSub: S('Controllers, detectors, and cameras you already operate keep working — K‑Traffic coordinates them.',
    'Controladores, detectores y cámaras que ya operas siguen funcionando — K‑Traffic los coordina.'),
  integrations: [
    { t: S('IoT & sensor networks', 'IoT y redes de sensores'), d: S('Tunnel control, speed cameras, smart signals, inductive loops.', 'Control de túneles, cámaras de velocidad, semáforos inteligentes, lazos inductivos.') },
    { t: S('AI & analytics', 'IA y analítica'), d: S('Traffic prediction models, automated signal adjustments, incident classification.', 'Modelos predictivos de tráfico, ajustes automáticos de semáforos, clasificación de incidentes.') },
    { t: S('Third-party transportation', 'Transporte de terceros'), d: S('Connected with major transportation management and city platforms.', 'Conectado con las principales plataformas de gestión de transporte y ciudad.') },
    { t: S('Traffic operations & incident coordination', 'Operaciones de tráfico y coordinación de incidentes'), d: S('Links to public safety dispatch, emergency services, road crews.', 'Enlace con despacho de seguridad pública, servicios de emergencia y cuadrillas viales.') },
  ],

  caseEyebrow: S('PROVEN IN THE FIELD', 'PROBADO EN CAMPO'),
  caseMetric: '150+',
  caseMetricL: S('Intersections managed', 'Intersecciones gestionadas'),
  caseName: S('Mexico', 'México'),
  caseScope: S('12 CITIES CONNECTED', '12 CIUDADES CONECTADAS'),
  caseBody: S('Traffic operations run beside dispatch and video on the same platform, so a road incident detected by a camera becomes a dispatchable event without leaving the system.',
    'La operación de tráfico corre junto a despacho y video en la misma plataforma, así un incidente vial detectado por cámara se convierte en un evento despachable sin salir del sistema.'),
  caseStats: [
    { v: '40%', l: S('Congestion reduction', 'Reducción de congestión') },
    { v: '98%', l: S('Signal response time', 'Tiempo de respuesta de señal') },
    { v: '91%', l: S('Incident detection rate', 'Tasa de detección de incidentes') },
  ],
  caseNote: S('Figures reflect reported platform performance. Deployment details subject to customer approval.',
    'Las cifras reflejan el rendimiento reportado de la plataforma. Detalles del despliegue sujetos a aprobación del cliente.'),
}

export default KTRAFFIC
