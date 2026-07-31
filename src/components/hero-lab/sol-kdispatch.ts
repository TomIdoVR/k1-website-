/* K-Dispatch solution-page content — ported verbatim from the Claude Design
   project "Kabat One Website" (home/sol-kdispatch.jsx).

   Same contract as sol-ksafety.ts: pure data against SolutionContent, rendered
   by the shared SolutionPage component. Two things differ from K-Safety —
   `heroBare` (the supplied hero screenshot carries its own window chrome, so
   the console frame and floating chips are suppressed) and seven feature rows
   rather than six. */

import { type SolutionContent, S, SL } from './solution-content'

const KDISPATCH: SolutionContent = {
  key: 'dispatch',
  name: 'K-Dispatch',
  /* The design used var(--k-dispatch); resolved here to the K-Dispatch accent
     already used by the Solutions accordion. */
  accent: '#0ea5e9',
  accentInk: '#1d4ed8',
  eyebrow: S('K-DISPATCH · EMERGENCY CALL-TAKING & DISPATCH', 'K-DISPATCH · RECEPCIÓN Y DESPACHO DE EMERGENCIA'),
  h1a: S('From the first emergency call', 'De la primera llamada'),
  h1b: S('to coordinated field response.', 'a la respuesta coordinada en campo.'),
  sub: S('Multi-channel intake, triage, CAD, and unit dispatch in one connected workflow — with video, GIS, and field context on every call, and operators firmly in control.',
    'Recepción multicanal, triaje, CAD y despacho de unidades en un flujo conectado — con video, GIS y contexto de campo en cada llamada, y los operadores siempre en control.'),
  /* The design points at a dedicated hero screenshot, assets/modules/
     hero-k-dispatch.png, which is not in this repo — drop it in at
     public/images/modules/hero-k-dispatch.png and switch this line back.
     Until then this falls back to the existing K-Dispatch console image;
     the .is-bare overlay offsets were tuned against the real asset, so the
     video inset and call-queue card sit approximately, not exactly. */
  heroImg: '/images/modules/dispatch.webp',
  heroBare: true,
  heroAlt: S('K-Dispatch CAD console showing an active call, assigned units, and live map',
    'Consola CAD de K-Dispatch con una llamada activa, unidades asignadas y mapa en vivo'),
  consoleTitle: S('K-DISPATCH · CAD', 'K-DISPATCH · CAD'),
  heroVideo: {
    img: '/images/modules/video.webp',
    label: S('CAM-07 · Incident scene', 'CAM-07 · Escena del incidente'),
  },
  heroEvent: {
    tag: S('CALL QUEUE', 'COLA DE LLAMADAS'),
    title: S('4 active calls', '4 llamadas activas'),
    loc: S('Avg answer · 6s', 'Respuesta prom. · 6s'),
    rows: [
      { l: S('Voice 911', 'Voz 911'), v: '2' },
      { l: S('Text-to-911', 'Texto al 911'), v: '1' },
      { l: S('Citizen app', 'App ciudadana'), v: '1' },
    ],
  },
  chips: [
    { c: '#ef4444', t: S('Call received · P1', 'Llamada recibida · P1') },
    { c: '#3b82f6', t: S('Nearest unit assigned', 'Unidad más cercana asignada') },
  ],
  stats: [
    { v: S('Multi-channel', 'Multicanal'), l: S('Call intake', 'Recepción de llamadas') },
    { v: S('Human-led', 'Guiado por personas'), l: S('Decision support', 'Soporte a decisiones') },
    { v: S('Multi-agency', 'Multiagencia'), l: S('Coordination', 'Coordinación') },
  ],

  coreLabel: S('BUILT ON THE UNIFIED PLATFORM', 'CONSTRUIDO SOBRE LA PLATAFORMA UNIFICADA'),
  core: SL(['CAD / 911', 'GIS', 'AVL', 'Events', 'Comms', 'Mobile', 'Integrations', 'Analytics'],
    ['CAD / 911', 'GIS', 'AVL', 'Eventos', 'Comunicaciones', 'Móvil', 'Integraciones', 'Analítica']),

  benefitsEyebrow: S('WHY K-DISPATCH', 'POR QUÉ K-DISPATCH'),
  benefitsH2a: S('Faster, better-informed', 'Respuesta de emergencia'),
  benefitsH2b: S('emergency response.', 'más rápida e informada.'),
  benefits: [
    {
      icon: 'bolt', t: S('Service optimization', 'Optimización del servicio'),
      d: S('Accelerates call-taking and dispatch workflows, cutting response time by automating routine steps.',
        'Acelera la recepción y el despacho, reduciendo el tiempo de respuesta al automatizar pasos rutinarios.'),
    },
    {
      icon: 'phone', t: S('Built-in 911 capabilities', 'Capacidades 911 integradas'),
      d: S('Multi-channel call handling — voice, text-to-911, multimedia — with full incident lifecycle management.',
        'Manejo multicanal de llamadas — voz, texto al 911, multimedia — con gestión completa del ciclo del incidente.'),
    },
    {
      icon: 'brain', t: S('Decision support', 'Soporte a decisiones'),
      d: S('Priority scoring and unit recommendations surface the best option — the operator always decides.',
        'La puntuación de prioridad y las recomendaciones de unidades muestran la mejor opción — el operador siempre decide.'),
    },
    {
      icon: 'scale', t: S('Scalable deployment', 'Despliegue escalable'),
      d: S('Cloud or on-premises. Configurable for cities, state agencies, and national infrastructure.',
        'Nube o local. Configurable para ciudades, agencias estatales e infraestructura nacional.'),
    },
  ],

  featuresEyebrow: S('IN THE DISPATCH CENTER', 'EN EL CENTRO DE DESPACHO'),
  featuresH2a: S('Every call.', 'Cada llamada.'),
  featuresH2b: S('One workflow.', 'Un solo flujo.'),
  features: [
    {
      img: '/images/modules/citizen.webp',
      alt: S('Multi-channel intake receiving voice, text, app, and sensor-originated emergency reports',
        'Recepción multicanal de reportes por voz, texto, app y sensores'),
      t: S('Multi-channel intake', 'Recepción multicanal'),
      d: S('Every way the public and the field reach you lands in one queue — voice, text-to-911, citizen app, radio, and IoT alerts.',
        'Cada vía por la que te contactan el público y el campo llega a una sola cola — voz, texto al 911, app ciudadana, radio y alertas IoT.'),
      pts: SL(['Phone, radio, IoT, and citizen app', 'Text-to-911 and multimedia messaging', 'One queue for every channel'],
        ['Teléfono, radio, IoT y app ciudadana', 'Texto al 911 y mensajería multimedia', 'Una sola cola para cada canal']),
    },
    {
      img: '/images/modules/event-board.webp',
      alt: S('Call triage board scoring incidents by priority with recommended protocols',
        'Tablero de triaje puntuando incidentes por prioridad con protocolos recomendados'),
      t: S('Triage & prioritization', 'Triaje y priorización'),
      d: S('Calls are scored, classified, and routed against your protocols so the most serious incident is never waiting behind a routine one.',
        'Las llamadas se puntúan, clasifican y enrutan según tus protocolos, para que el incidente más grave nunca espere detrás de uno rutinario.'),
      pts: SL(['Call triage & priority scoring', 'Protocol-driven classification', 'Escalation and re-prioritization'],
        ['Triaje y puntuación de prioridad', 'Clasificación por protocolo', 'Escalamiento y re-priorización']),
    },
    {
      img: '/images/modules/cad-units.webp',
      alt: S('CAD console recommending the nearest available unit for an active incident',
        'Consola CAD recomendando la unidad disponible más cercana para un incidente activo'),
      t: S('CAD & unit recommendation', 'CAD y recomendación de unidades'),
      d: S('The CAD shows who is available, who is closest, and who is qualified — then keeps the whole assignment on one record.',
        'El CAD muestra quién está disponible, quién está más cerca y quién está capacitado — y mantiene toda la asignación en un solo registro.'),
      pts: SL(['Smart unit recommendation engine', 'Status, capability, and availability', 'One record per incident'],
        ['Motor de recomendación de unidades', 'Estado, capacidad y disponibilidad', 'Un registro por incidente']),
    },
    {
      img: '/images/modules/gis.webp',
      alt: S('Live dispatch map tracking assigned units with AVL and routing',
        'Mapa de despacho en vivo rastreando unidades asignadas con AVL y rutas'),
      t: S('GIS & AVL tracking', 'GIS y seguimiento AVL'),
      d: S('See every unit move in real time, with routing, ETAs, and the incident in geographic context.',
        'Observa cada unidad en tiempo real, con rutas, ETAs y el incidente en contexto geográfico.'),
      pts: SL(['GIS mapping & AVL vehicle tracking', 'Live routing and ETA', 'Zones, beats, and coverage view'],
        ['Mapeo GIS y seguimiento AVL', 'Rutas y ETA en vivo', 'Zonas, sectores y cobertura']),
    },
    {
      img: '/images/modules/responder.webp',
      alt: S('Responder mobile app receiving the dispatched call with navigation and status',
        'App móvil de respuesta recibiendo la llamada despachada con navegación y estado'),
      t: S('Field & multi-agency response', 'Respuesta en campo y multiagencia'),
      d: S('Push the call to responders with full context, and keep police, fire, and EMS working the same incident.',
        'Envía la llamada a las unidades con contexto completo y mantén a policía, bomberos y SEM en el mismo incidente.'),
      pts: SL(['Radio & multi-agency interoperability', 'Mobile status updates from the field', 'Command-to-field coordination'],
        ['Interoperabilidad de radio y multiagencia', 'Estados móviles desde el campo', 'Coordinación mando-campo']),
    },
    {
      img: '/images/modules/ai.webp',
      alt: S('AI assistance surfacing risk indicators and recommended dispatch actions',
        'Asistencia de IA mostrando indicadores de riesgo y acciones de despacho recomendadas'),
      t: S('AI-assisted, human-led', 'Asistido por IA, guiado por personas'),
      d: S('AI reads the incoming signal and flags risk and likely escalation. The recommendation is always advisory — the operator acts.',
        'La IA lee la señal entrante y señala riesgo y posible escalamiento. La recomendación siempre es orientativa — el operador actúa.'),
      pts: SL(['Risk indicators and escalation signals', 'Recommended dispatch actions', 'Operator stays in control'],
        ['Indicadores de riesgo y escalamiento', 'Acciones de despacho recomendadas', 'El operador mantiene el control']),
    },
    {
      img: '/images/modules/bi.webp',
      alt: S('Operational reporting dashboard measuring call volume, response time, and outcomes',
        'Tablero de reportes midiendo volumen de llamadas, tiempo de respuesta y resultados'),
      t: S('Audit trail & reporting', 'Auditoría y reportes'),
      d: S('Every action is timestamped, so post-incident review and performance reporting come out of the same system that ran the call.',
        'Cada acción queda registrada con hora, así la revisión posterior y los reportes de desempeño salen del mismo sistema que atendió la llamada.'),
      pts: SL(['Full audit trail & post-incident reporting', 'Response time and outcome analysis', 'Exportable operational records'],
        ['Auditoría completa y reportes posteriores', 'Análisis de tiempos y resultados', 'Registros operativos exportables']),
    },
  ],

  processEyebrow: S('THE PROCESS', 'EL PROCESO'),
  processH2a: S('From incoming call to', 'De la llamada entrante a'),
  processH2b: S('units on scene.', 'unidades en sitio.'),
  processIn: [
    { k: 'phoneIn', t: S('Voice calls', 'Llamadas de voz') },
    { k: 'sms', t: S('SMS / text', 'SMS / texto') },
    { k: 'radio', t: S('Field units', 'Unidades de campo') },
    { k: 'iot', t: S('IoT alerts', 'Alertas IoT') },
    { k: 'mobile', t: S('Citizen app', 'App ciudadana') },
  ],
  processCore: SL(['RECEIVE', 'TRIAGE', 'DISPATCH'], ['RECIBE', 'TRIAJE', 'DESPACHA']),
  processOut: [
    { k: 'truck', t: S('Responders', 'Unidades') },
    { k: 'users', t: S('Coordination', 'Coordinación') },
    { k: 'chart', t: S('Analytics', 'Analítica') },
  ],

  intEyebrow: S('INTEGRATIONS', 'INTEGRACIONES'),
  intH2a: S('Connects to the systems', 'Se conecta a los sistemas'),
  intH2b: S('your center already runs.', 'que ya usa tu centro.'),
  intSub: S('K-Dispatch layers onto existing call handling, radio, and records systems — no rip-and-replace.',
    'K-Dispatch se integra al manejo de llamadas, radio y sistemas de registro existentes — sin reemplazar infraestructura.'),
  integrations: [
    { t: S('Emergency call handling', 'Manejo de llamadas de emergencia'), d: S('Voice 911, text-to-911, multimedia emergency messaging.', 'Voz 911, texto al 911, mensajería multimedia de emergencia.') },
    { t: S('CAD / RMS systems', 'Sistemas CAD / RMS'), d: S('Records management, court systems, regional data exchange.', 'Gestión de registros, sistemas judiciales, intercambio regional de datos.') },
    { t: S('Multi-agency communication', 'Comunicación multiagencia'), d: S('Radio interoperability, mobile apps, command-to-field links.', 'Interoperabilidad de radio, apps móviles, enlaces mando-campo.') },
    { t: S('Geospatial tracking', 'Seguimiento geoespacial'), d: S('AVL vehicle tracking, GIS maps, drone coordination.', 'Seguimiento AVL, mapas GIS, coordinación de drones.') },
    { t: S('Video & analytics', 'Video y analítica'), d: S('CCTV, LPR, gunshot detection, drone feeds on the call.', 'CCTV, LPR, detección de disparos, drones en la llamada.') },
    { t: S('Smart city & IoT data', 'Datos de ciudad inteligente e IoT'), d: S('Traffic sensors, environmental data, smart infrastructure feeds.', 'Sensores de tráfico, datos ambientales, infraestructura inteligente.') },
  ],

  faqs: [
    {
      q: S('What is K-Dispatch?',
        '¿Qué es K-Dispatch?'),
      a: S('K-Dispatch is an AI-powered Computer-Aided Dispatch (CAD) platform that streamlines emergency response, enhances multi-agency communication, and integrates seamlessly with all public safety technologies.',
        'K-Dispatch es una plataforma de Despacho Asistido por Computadora (CAD) potenciada por IA que optimiza la respuesta a emergencias, mejora la comunicación multiagencia y se integra con todas las tecnologías de seguridad pública.'),
    },
    {
      q: S('How does K-Dispatch handle 911 calls?',
        '¿Cómo maneja K-Dispatch las llamadas al 911?'),
      a: S('K-Dispatch integrates voice 911, text-to-911, and multimedia emergency messaging. The system automatically triages incidents, assigns priority, and recommends optimal response using artificial intelligence.',
        'K-Dispatch integra llamadas de voz 911, texto-a-911 y mensajería multimedia de emergencia. El sistema clasifica automáticamente los incidentes, asigna prioridad y recomienda la respuesta óptima utilizando inteligencia artificial.'),
    },
    {
      q: S('What systems does K-Dispatch integrate with?',
        '¿Con qué sistemas se integra K-Dispatch?'),
      a: S('K-Dispatch connects with leading public safety technologies including radio systems, GIS, VMS, mobile responder apps, facial recognition, LPR, gunshot detection, and drone feeds.',
        'K-Dispatch se conecta con las principales tecnologías de seguridad pública incluyendo sistemas de radio, GIS, VMS, aplicaciones móviles de respondedores, reconocimiento facial, LPR, detección de disparos y feeds de drones.'),
    },
    {
      q: S('Is K-Dispatch suitable for multi-agency dispatch?',
        '¿Es K-Dispatch adecuado para despacho multiagencia?'),
      a: S('Yes. K-Dispatch is built for multi-agency coordination, connecting police, fire, medical, and traffic departments on a single platform. It currently powers Mexico\\\'s largest 911 center with 100+ connected agencies.',
        'Sí. K-Dispatch está diseñado para coordinación multiagencia, conectando policía, bomberos, servicios médicos y tránsito en una sola plataforma. Actualmente impulsa el centro 911 más grande de México con más de 100 agencias conectadas.'),
    },
    {
      q: S('What makes K-Dispatch different from legacy CAD systems?',
        '¿Qué diferencia a K-Dispatch de los sistemas CAD tradicionales?'),
      a: S('K-Dispatch uses AI to automatically triage incidents, predict escalations, and optimize dispatch routing. It handles 25,000+ daily calls with a 5-minute average response time, significantly outperforming legacy CAD systems.',
        'K-Dispatch utiliza IA para clasificar incidentes automáticamente, predecir escalaciones y optimizar el enrutamiento de despacho. Gestiona más de 25,000 llamadas diarias con un tiempo promedio de respuesta de 5 minutos, superando significativamente a los sistemas CAD heredados.'),
    },
    {
      q: S('Can K-Dispatch work with our existing radio and RMS systems?',
        '¿K-Dispatch funciona con nuestros sistemas de radio y RMS existentes?'),
      a: S('Yes. K-Dispatch integrates with all major radio systems (P25, TETRA, DMR) and Records Management Systems. The platform uses open APIs and standard protocols (CAP, NIEM, NENA i3) to connect with your existing infrastructure without requiring a full replacement.',
        'Si. K-Dispatch se integra con todos los principales sistemas de radio (P25, TETRA, DMR) y Sistemas de Gestion de Registros. La plataforma usa APIs abiertas y protocolos estandar (CAP, NIEM, NENA i3) para conectarse con su infraestructura existente sin requerir un reemplazo completo.'),
    },
    {
      q: S('How long does it take to deploy K-Dispatch?',
        '¿Cuanto tiempo toma implementar K-Dispatch?'),
      a: S('A typical deployment takes 8 to 16 weeks depending on the number of agencies, integration complexity, and training requirements. KabatOne provides a phased rollout with parallel operation so your existing CAD continues running until the transition is complete.',
        'Una implementacion tipica toma de 8 a 16 semanas dependiendo del numero de agencias, complejidad de integraciones y requisitos de capacitacion. KabatOne ofrece un despliegue por fases con operacion en paralelo para que su CAD existente continue funcionando hasta completar la transicion.'),
    },
    {
      q: S('Does K-Dispatch support cloud deployment?',
        '¿K-Dispatch soporta despliegue en la nube?'),
      a: S('K-Dispatch supports cloud, on-premises, and hybrid deployment models. Cloud deployments use redundant data centers with 99.99% uptime SLA. On-premises deployments are available for agencies with strict data sovereignty requirements, common in government and military environments.',
        'K-Dispatch soporta modelos de despliegue en la nube, en sitio e hibrido. Los despliegues en la nube usan centros de datos redundantes con SLA de 99.99% de disponibilidad. Los despliegues en sitio estan disponibles para agencias con requisitos estrictos de soberania de datos, comun en entornos gubernamentales y militares.'),
    },
  ],

  seo: {
    metadataKey: 'kDispatch',
    slug: 'k-dispatch',
    category: 'Computer-Aided Dispatch Software',
    description: S('Emergency call-taking and computer-aided dispatch software unifying multi-channel intake, triage, CAD, and field response.',
      'Software de recepción de emergencias y despacho asistido por computadora que unifica recepción multicanal, triaje, CAD y respuesta en campo.'),
  },

  caseEyebrow: S('PROVEN IN THE FIELD', 'PROBADO EN CAMPO'),
  caseMetric: S('Multi-agency', 'Multiagencia'),
  caseMetricL: S('Emergency coordination at city scale', 'Coordinación de emergencias a escala urbana'),
  caseName: S('C5 CDMX, Mexico', 'C5 CDMX, México'),
  caseScope: S('CITY-WIDE OPERATION', 'OPERACIÓN METROPOLITANA'),
  caseBody: S('K-Dispatch supports one of the region’s largest emergency operations — coordinating multi-channel intake, prioritization, and dispatch across many agencies from a single connected workflow.',
    'K-Dispatch apoya una de las operaciones de emergencia más grandes de la región — coordinando recepción multicanal, priorización y despacho entre múltiples agencias desde un solo flujo conectado.'),
  caseStats: [
    { v: S('Multi-channel', 'Multicanal'), l: S('Call intake', 'Recepción de llamadas') },
    { v: S('Prioritized', 'Priorizado'), l: S('Incident triage', 'Triaje de incidentes') },
    { v: S('End-to-end', 'Extremo a extremo'), l: S('Incident record', 'Registro del incidente') },
  ],
  caseNote: S('Deployment details subject to customer approval.', 'Detalles del despliegue sujetos a aprobación del cliente.'),
}

export default KDISPATCH
