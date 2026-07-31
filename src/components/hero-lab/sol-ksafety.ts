/* K-Safety solution-page content — ported verbatim from the Claude Design
   project "Kabat One Website" (home/sol-ksafety.jsx), which set this same
   shape on window.SOLPAGE for home/solution-page.jsx to consume.

   Kept as data separate from the renderer exactly as the design had it, so
   the remaining K-* pages (K-Dispatch, K-Video, K-Traffic, K-Connect) can
   each drop in their own file against the same SolutionPage component. */

import { type Loc, type LocList, type SolutionContent, S, SL } from './solution-content'

/* The design referenced its own asset folder (assets/modules/…); these map to
   this repo's /public/images/modules, where all six already exist. */
const KSAFETY: SolutionContent = {
  key: 'safety',
  name: 'K-Safety',
  accent: '#1858f5',
  accentInk: '#0b6a80',
  /* #1858f5 only reaches 3.29:1 on the dark capability band; this lightened
     variant clears 5.0:1 while reading as the same blue. */
  accentOnDark: '#4e7ff7',
  eyebrow: S('K-SAFETY · COMMAND & INCIDENT MANAGEMENT', 'K-SAFETY · COMANDO Y GESTIÓN DE INCIDENTES'),
  h1a: S('Coordinate every response', 'Coordina cada respuesta'),
  h1b: S('from one command platform.', 'desde una sola plataforma de mando.'),
  sub: S('Unify incidents, GIS, video, sensors, mobile responders, and the systems you already run into one operational picture — and coordinate the response from one place.',
    'Unifica incidentes, GIS, video, sensores, unidades móviles y los sistemas que ya operas en una sola imagen operativa — y coordina la respuesta desde un solo lugar.'),
  heroImg: '/images/modules/gis.webp',
  heroAlt: S('K-Safety command console showing live GIS situational awareness with incidents and units',
    'Consola de mando K-Safety con conciencia situacional GIS en vivo, incidentes y unidades'),
  consoleTitle: S('K-SAFETY · SITUATIONAL AWARENESS', 'K-SAFETY · CONCIENCIA SITUACIONAL'),
  heroVideo: {
    img: '/images/modules/video.webp',
    label: S('CAM-14 · Main St & 5th', 'CAM-14 · Main St y 5th'),
  },
  heroEvent: {
    tag: S('PRIORITY 1', 'PRIORIDAD 1'),
    title: S('Vehicle of interest', 'Vehículo de interés'),
    loc: S('Main St & 5th Ave', 'Main St y 5th Ave'),
    rows: [
      { l: S('Detected by', 'Detectado por'), v: S('LPR · CAM-14', 'LPR · CAM-14') },
      { l: S('Assigned', 'Asignado'), v: 'Unit 12' },
      { l: S('ETA', 'ETA'), v: S('2 min', '2 min') },
    ],
  },
  chips: [
    { c: '#ef4444', t: S('Incident enriched', 'Incidente enriquecido') },
    { c: '#3b82f6', t: S('Cameras + units + sensors', 'Cámaras + unidades + sensores') },
  ],
  stats: [
    { v: S('Unified', 'Unificada'), l: S('Operating picture', 'Imagen operativa') },
    { v: S('Multi-agency', 'Multiagencia'), l: S('Coordination', 'Coordinación') },
    { v: S('Integrates', 'Integra'), l: S('Existing systems', 'Sistemas existentes') },
  ],

  coreLabel: S('BUILT ON THE UNIFIED PLATFORM', 'CONSTRUIDO SOBRE LA PLATAFORMA UNIFICADA'),
  core: SL(['GIS', 'Video + AI', 'Events', 'Integrations', 'Workflows', 'Evidence', 'Mobile', 'Analytics'],
    ['GIS', 'Video + IA', 'Eventos', 'Integraciones', 'Flujos', 'Evidencia', 'Móvil', 'Analítica']),

  benefitsEyebrow: S('WHY K-SAFETY', 'POR QUÉ K-SAFETY'),
  benefitsH2a: S('Smarter, connected', 'Operaciones de seguridad'),
  benefitsH2b: S('public safety operations.', 'pública conectadas.'),
  benefits: [
    {
      icon: 'shield', t: S('Safety management', 'Gestión de seguridad'),
      d: S('Automates event handling from detection to resolution, cutting response time and manual coordination.',
        'Automatiza el manejo de eventos de la detección a la resolución, reduciendo tiempos y coordinación manual.'),
    },
    {
      icon: 'link', t: S('Connected ecosystem', 'Ecosistema conectado'),
      d: S('Integrates with the VMS, LPR, IoT sensors, and radio systems already in your operation.',
        'Se integra con el VMS, LPR, sensores IoT y radio que ya están en tu operación.'),
    },
    {
      icon: 'brain', t: S('Real-time intelligence', 'Inteligencia en tiempo real'),
      d: S('Surfaces priority, context, and recommended workflows so operators decide in seconds.',
        'Muestra prioridad, contexto y flujos recomendados para que los operadores decidan en segundos.'),
    },
    {
      icon: 'scale', t: S('Scalable deployment', 'Despliegue escalable'),
      d: S('Cloud or on-premises. Scales from a single city to a statewide command operation.',
        'Nube o local. Escala de una ciudad a una operación de mando estatal.'),
    },
  ],

  featuresEyebrow: S('IN THE COMMAND CENTER', 'EN EL CENTRO DE MANDO'),
  featuresH2a: S('One picture.', 'Una imagen.'),
  featuresH2b: S('Every source.', 'Todas las fuentes.'),
  features: [
    {
      img: '/images/modules/gis-ops.webp',
      alt: S('Operational GIS map with live incidents, units, and camera locations',
        'Mapa GIS operativo con incidentes, unidades y cámaras en vivo'),
      t: S('Live operational map', 'Mapa operativo en vivo'),
      d: S('Incidents, units, cameras, and sensors on one GIS view — with live unit tracking and geofenced zones.',
        'Incidentes, unidades, cámaras y sensores en una vista GIS — con seguimiento en vivo y zonas geocercadas.'),
      pts: SL(['GIS mapping with live unit tracking', 'Zone management & geofencing', 'Camera and sensor layers'],
        ['Mapeo GIS con seguimiento en vivo', 'Gestión de zonas y geocercas', 'Capas de cámaras y sensores']),
    },
    {
      img: '/images/modules/events.webp',
      alt: S('Incident board prioritizing events by severity with standard operating workflows',
        'Tablero de incidentes priorizando eventos por severidad con flujos estándar'),
      t: S('Event handling & workflows', 'Gestión de eventos y flujos'),
      d: S('Every signal becomes a tracked event with priority, assignment, SOPs, and a full audit trail.',
        'Cada señal se convierte en un evento con prioridad, asignación, protocolos y auditoría completa.'),
      pts: SL(['Automated detection & alerting', 'Prioritization and SOPs', 'Complete incident audit trail'],
        ['Detección y alertas automáticas', 'Priorización y protocolos', 'Auditoría completa del incidente']),
    },
    {
      img: '/images/modules/responder.webp',
      alt: S('Responder mobile application receiving an assigned incident with navigation',
        'Aplicación móvil de respuesta recibiendo un incidente asignado con navegación'),
      t: S('Field & multi-agency response', 'Respuesta en campo y multiagencia'),
      d: S('Push the incident to responders with full context, and keep every agency working the same event.',
        'Envía el incidente a las unidades con contexto completo y mantén a cada agencia en el mismo evento.'),
      pts: SL(['Mobile apps for field responders', 'Panic button & IoT sensor network', 'Cross-agency coordination'],
        ['Apps móviles para unidades', 'Botón de pánico y red IoT', 'Coordinación entre agencias']),
    },
    {
      img: '/images/modules/video.webp',
      alt: S('Unified video wall with AI analytics detecting vehicles and people across city cameras',
        'Videowall unificado con analítica de IA detectando vehículos y personas en cámaras urbanas'),
      t: S('Video & intelligence', 'Video e inteligencia'),
      d: S('Bring every camera into the command picture, with analytics that flag what matters before it escalates.',
        'Integra cada cámara a la imagen de mando, con analítica que señala lo importante antes de que escale.'),
      pts: SL(['Video Management System (VMS) integration', 'AI-powered threat forecasting', 'LPR, object & anomaly detection'],
        ['Integración con VMS', 'Previsión de amenazas con IA', 'LPR, detección de objetos y anomalías']),
    },
    {
      img: '/images/modules/ai.webp',
      alt: S('AI engine surfacing detections, risk scoring, and recommended actions for an incident',
        'Motor de IA mostrando detecciones, puntuación de riesgo y acciones recomendadas para un incidente'),
      t: S('AI engine', 'Motor de IA'),
      d: S('AI reads the incoming signals, scores what matters, and recommends the next action — so operators act on judgement, not noise.',
        'La IA lee las señales entrantes, evalúa lo relevante y recomienda la siguiente acción — para que los operadores actúen con criterio, no con ruido.'),
      pts: SL(['Automated detection & risk scoring', 'Recommended response workflows', 'Pattern and anomaly analysis'],
        ['Detección automática y puntuación de riesgo', 'Flujos de respuesta recomendados', 'Análisis de patrones y anomalías']),
    },
    {
      img: '/images/modules/integrations.webp',
      alt: S('Integrations layer connecting cameras, CAD, radio, sensors, and access control systems',
        'Capa de integraciones conectando cámaras, CAD, radio, sensores y control de acceso'),
      t: S('Integrations layer', 'Capa de integraciones'),
      d: S('Open APIs and prebuilt connectors bring your existing cameras, CAD, radio, and sensors into one operation — no rip-and-replace.',
        'APIs abiertas y conectores listos integran tus cámaras, CAD, radio y sensores actuales en una sola operación — sin reemplazar infraestructura.'),
      pts: SL(['Open APIs & prebuilt connectors', 'Works with existing infrastructure', 'Add systems without new silos'],
        ['APIs abiertas y conectores listos', 'Funciona con la infraestructura existente', 'Agrega sistemas sin crear silos']),
    },
  ],

  processEyebrow: S('THE PROCESS', 'EL PROCESO'),
  processH2a: S('From raw data to', 'De datos crudos a'),
  processH2b: S('resolved incident.', 'incidente resuelto.'),
  processIn: [
    { k: 'camera', t: S('Cameras', 'Cámaras') },
    { k: 'sensor', t: S('Sensors', 'Sensores') },
    { k: 'access', t: S('Access points', 'Puntos de acceso') },
    { k: 'mobile', t: S('Mobile app', 'App móvil') },
    { k: 'iot', t: S('IoT / SMP', 'IoT / SMP') },
  ],
  processCore: SL(['COLLECT', 'ANALYZE', 'INTEGRATE'], ['RECOPILA', 'ANALIZA', 'INTEGRA']),
  processOut: [
    { k: 'bell', t: S('Event detection', 'Detección de eventos') },
    { k: 'pin', t: S('Location', 'Ubicación') },
    { k: 'bolt', t: S('Action', 'Acción') },
  ],

  intEyebrow: S('INTEGRATIONS', 'INTEGRACIONES'),
  intH2a: S('Connects to the infrastructure', 'Se conecta a la infraestructura'),
  intH2b: S('you already operate.', 'que ya operas.'),
  intSub: S('K-Safety layers on top of existing systems — no rip-and-replace.',
    'K-Safety se coloca sobre los sistemas existentes — sin reemplazar infraestructura.'),
  integrations: [
    { t: S('Video management systems', 'Sistemas de gestión de video'), d: S('CCTV, IP cameras, body cams, drone feeds.', 'CCTV, cámaras IP, body cams, drones.') },
    { t: S('Communication & dispatch', 'Comunicación y despacho'), d: S('Radio systems, CAD platforms, interagency tools.', 'Sistemas de radio, plataformas CAD, herramientas interagenciales.') },
    { t: S('Analytics & AI', 'Analítica e IA'), d: S('LPR, object and anomaly detection, gunshot detection.', 'LPR, detección de objetos y anomalías, detección de disparos.') },
    { t: S('Critical infrastructure & IoT', 'Infraestructura crítica e IoT'), d: S('Radars, fire sensors, smart fences, environmental monitors.', 'Radares, sensores de incendio, cercas inteligentes, monitores ambientales.') },
    { t: S('Emergency response tools', 'Herramientas de respuesta'), d: S('Panic buttons, 911 CAD, mobile responder apps.', 'Botones de pánico, CAD 911, apps de respuesta móvil.') },
    { t: S('GIS & mapping', 'GIS y mapeo'), d: S('Real-time mapping, routing, zone management, geofencing.', 'Mapeo en tiempo real, rutas, zonas, geocercas.') },
  ],

  faqs: [
    {
      q: S('What is K-Safety?',
        '¿Qué es K-Safety?'),
      a: S('K-Safety is a public safety platform that unifies event management, GIS, VMS, mobile apps, and third-party integrations into one command center. It provides real-time situational awareness for cities and security agencies.',
        'K-Safety es una plataforma de seguridad pública que unifica gestión de eventos, GIS, VMS, aplicaciones móviles e integraciones de terceros en un solo centro de mando. Proporciona conciencia situacional en tiempo real para ciudades y agencias de seguridad.'),
    },
    {
      q: S('How does K-Safety provide situational awareness?',
        '¿Cómo proporciona K-Safety conciencia situacional?'),
      a: S('K-Safety overlays incidents, units, and live streams on a unified operational map with real-time GIS. It connects cameras, sensors, access points, mobile apps, and IoT devices into a single operational picture.',
        'K-Safety superpone incidentes, unidades y transmisiones en vivo en un mapa operativo unificado con GIS en tiempo real. Conecta cámaras, sensores, puntos de acceso, aplicaciones móviles y dispositivos IoT en una sola imagen operativa.'),
    },
    {
      q: S('What modules does K-Safety integrate?',
        '¿Qué módulos integra K-Safety?'),
      a: S('K-Safety integrates event detection and automated alerting, GIS mapping with live unit tracking, VMS integration, mobile apps for field responders, panic button and IoT sensor networks, and AI-powered threat forecasting.',
        'K-Safety integra detección de eventos y alertas automáticas, mapeo GIS con seguimiento de unidades en vivo, integración VMS, aplicaciones móviles para respondedores de campo, red de botones de pánico y sensores IoT, y pronóstico de amenazas con IA.'),
    },
    {
      q: S('Who uses K-Safety?',
        '¿Quién usa K-Safety?'),
      a: S('K-Safety is used by cities, municipalities, and public safety agencies. It currently operates across 68 active projects, connecting 100+ agencies with 30+ third-party integrations.',
        'K-Safety es utilizado por ciudades, municipios y agencias de seguridad pública. Actualmente opera en 68 proyectos activos, conectando más de 100 agencias con más de 30 integraciones de terceros.'),
    },
    {
      q: S('How does K-Safety compare to traditional PSIM?',
        '¿Cómo se compara K-Safety con los PSIM tradicionales?'),
      a: S('K-Safety surpasses traditional PSIM by offering real-time predictive AI, flexible cloud or on-premises deployment, and scalability from a single city to a nationwide network. It includes event automation, smart dispatch, and integrated geospatial analytics.',
        'K-Safety supera a los PSIM tradicionales al ofrecer IA predictiva en tiempo real, despliegue flexible en nube o local, y escalabilidad desde una sola ciudad hasta una red nacional. Incluye automatización de eventos, despacho inteligente y analítica geoespacial integrada.'),
    },
  ],

  seo: {
    metadataKey: 'kSafety',
    slug: 'k-safety',
    category: 'Public Safety Platform',
    description: S('Public safety platform that unifies event management, real-time GIS, VMS, and mobile apps into one command center.',
      'Plataforma de seguridad pública que unifica gestión de eventos, GIS en tiempo real, VMS y aplicaciones móviles en un solo centro de mando.'),
  },

  caseEyebrow: S('PROVEN IN THE FIELD', 'PROBADO EN CAMPO'),
  caseMetric: '10,000+',
  caseMetricL: S('Connected sensors & cameras', 'Sensores y cámaras conectados'),
  caseName: S('Michoacán, Mexico', 'Michoacán, México'),
  caseScope: S('STATEWIDE DEPLOYMENT', 'DESPLIEGUE ESTATAL'),
  caseBody: S('K-Safety powers one of Latin America’s most advanced public safety command operations — unifying video, sensors, and field response across the state into a single coordinated operating picture.',
    'K-Safety impulsa una de las operaciones de mando de seguridad pública más avanzadas de Latinoamérica — unificando video, sensores y respuesta en campo de todo el estado en una sola imagen operativa coordinada.'),
  caseStats: [
    { v: S('Statewide', 'Estatal'), l: S('Unified operations', 'Operaciones unificadas') },
    { v: S('Multi-agency', 'Multiagencia'), l: S('Shared awareness', 'Conciencia compartida') },
    { v: '24/7', l: S('Mission-critical use', 'Uso de misión crítica') },
  ],
  caseNote: S('Deployment details subject to customer approval.', 'Detalles del despliegue sujetos a aprobación del cliente.'),
}

export default KSAFETY
