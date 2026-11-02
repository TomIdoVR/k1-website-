import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import CadSegmentPage, { type SegmentCopy } from '@/components/CadSegmentPage'

/* CAD plan item #26. GSC 4 Oct-31 Oct 2026: about 50 fire/EMS dispatch queries and
   ~1,190 impressions excluding the rank-tracking bot query "best fire computer aided
   dispatch software" (polling, SCORER-1), with 1 click. "ambulance dispatch software",
   "ems dispatch software" and "ems cad software" land on /k-dispatch at p18-27. The
   Spanish copy covers CRUM coordination, a gap in the GEO block E baseline (29 Oct).
   Medical-protocol and station-alerting items are framed as vendor questions, not claims. */

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('fireEmsDispatchSoftware', locale)
}

const EN: SegmentCopy = {
  slug: 'fire-ems-dispatch-software',
  source: 'fire-ems-cad',
  eyebrow: 'Fire and EMS dispatch',
  h1a: 'Fire and EMS dispatch software:',
  h1b: 'what a fire and ambulance CAD must do',
  intro: 'Fire and EMS dispatch is a race against minutes, and the right unit matters as much as the nearest one. This guide covers what a fire and EMS computer-aided dispatch (CAD) system must do, the questions to ask each vendor, and how K-Dispatch approaches it.',
  problemTitle: 'Why fire and EMS dispatch is different',
  problem: 'A medical call needs the right level of care, not just the closest ambulance. A structure fire needs a full assignment of engines, a ladder and command. Both need guidance for the caller before help arrives, coordination with hospitals and police, and a clear record of every minute. When call handling, CAD and field updates live in separate systems, those decisions are made with half the picture.',
  reqTitle: 'What a fire and EMS CAD must do',
  reqs: [
    { title: 'Triage the call by protocol', body: 'Structured questions classify the emergency and set its priority, so a cardiac arrest is never queued behind a minor fall.', ask: 'Which medical and fire protocols does it support, and are they configurable to our standards?' },
    { title: 'Guide the caller before units arrive', body: 'Pre-arrival instructions help the caller act in the first minutes: CPR, bleeding control, evacuation.', ask: 'How are pre-arrival instructions delivered to the call taker, and from which protocol set?' },
    { title: 'Recommend units by capability', body: 'The recommendation should weigh availability, distance and capability, such as advanced versus basic life support, or engine versus ladder.', ask: 'Can unit recommendations account for apparatus type and crew capability?' },
    { title: 'Build the right response plan', body: 'Fire incidents often need a predefined assignment of several units that changes with incident type, address and time of day.', ask: 'How are response plans configured, and who can change them?' },
    { title: 'Track units and routes live', body: 'AVL positions, routing and ETAs on one map with the incident, hydrants or points of interest, and nearby cameras.', ask: 'Do incidents, units and map layers update together in real time?' },
    { title: 'Coordinate with hospitals and police', body: 'EMS needs to share the incident with receiving hospitals and with police working the same scene.', ask: 'How does it share incidents with hospitals and other agencies?' },
    { title: 'Measure every minute', body: 'Call reception, dispatch, en route, on scene and transport times recorded for each incident, for quality review and reporting.', ask: 'Can we report each interval per incident, unit and shift?' },
  ],
  howTitle: 'How K-Dispatch approaches fire and EMS dispatch',
  how: [
    'Emergency call handling and dispatch in one platform, so the call moves from call taker to dispatcher without re-entry.',
    'Caller location generated automatically, with the incident, units and cameras on one live map.',
    'AI Co-Pilot for call takers and dispatchers: live call transcription, scenario guidance and unit recommendations based on status, capability and availability. The operator always decides.',
    'Multi-agency coordination: fire, EMS and police work the same incident record.',
    'Apps for responders in the field and for citizens.',
    'Deployment in the cloud, on-premise or hybrid, in English and Spanish.',
    'Trusted by C5 CDMX, Mexico City’s command, control and 911 center.',
  ],
  faqTitle: 'Frequently asked questions',
  faqs: [
    { question: 'What is EMS dispatch software?', answer: 'EMS dispatch software is the computer-aided dispatch (CAD) system an emergency medical service uses to take calls, triage them by protocol, recommend and assign ambulances, track them on a map and record each time interval for quality review.' },
    { question: 'What is the difference between fire CAD and police CAD?', answer: 'Both take calls and dispatch units, but fire and EMS dispatch relies more on protocol-based triage, pre-arrival instructions, capability-based unit selection and multi-unit response plans, while police dispatch leans on officer safety information and records integration. A multi-agency CAD handles all three on one incident record.' },
    { question: 'What should ambulance dispatch software include?', answer: 'Protocol-based triage, pre-arrival instructions, unit recommendation by capability and location, live AVL mapping, a mobile app for crews, hospital coordination and time-interval reporting.' },
    { question: 'Can fire, EMS and police share one CAD?', answer: 'Yes. A multi-agency CAD lets fire, EMS and police work the same incident, so a traffic collision that needs all three is coordinated from one record instead of three systems.' },
  ],
  related: [
    { href: '/resources/police-cad-software', label: 'Police CAD software' },
    { href: '/resources/best-cad-dispatch-software', label: 'Best CAD dispatch software' },
    { href: '/resources/what-is-emergency-dispatch-software', label: 'What is emergency dispatch software?' },
    { href: '/k-dispatch', label: 'K-Dispatch' },
  ],
  breadcrumb: 'Fire and EMS dispatch software',
  articleHeadline: 'Fire and EMS dispatch software: what a fire and ambulance CAD must do',
  articleDescription: 'What a fire and EMS computer-aided dispatch system must do, the questions to ask each vendor, and how K-Dispatch brings call handling and dispatch into one platform.',
}

const ES: SegmentCopy = {
  slug: 'fire-ems-dispatch-software',
  source: 'fire-ems-cad',
  eyebrow: 'Bomberos y urgencias médicas',
  h1a: 'Software de despacho para bomberos y ambulancias:',
  h1b: 'lo que debe hacer el CAD',
  intro: 'En un incendio o una urgencia médica cada minuto cuenta, y la unidad correcta importa tanto como la más cercana. Esta guía reúne lo que debe hacer un sistema de despacho asistido por computadora (CAD) para bomberos y servicios médicos de urgencia, qué preguntar a cada proveedor y cómo lo resuelve K-Dispatch.',
  problemTitle: 'Por qué el despacho de bomberos y ambulancias es distinto',
  problem: 'Una urgencia médica necesita el nivel de atención adecuado, no solo la ambulancia más cercana. Un incendio estructural necesita varias unidades a la vez. Ambos requieren orientar a quien llama antes de que llegue la ayuda, coordinarse con hospitales y con la policía, y registrar cada minuto. En México, además, el 911 se coordina con el Centro Regulador de Urgencias Médicas (CRUM) de cada estado. Si la atención de la llamada, el CAD y las actualizaciones de campo viven en sistemas separados, esas decisiones se toman con la mitad de la información.',
  reqTitle: 'Lo que debe hacer un CAD para bomberos y ambulancias',
  reqs: [
    { title: 'Clasificar la llamada por protocolo', body: 'Preguntas estructuradas identifican la emergencia y asignan su prioridad, para que un paro cardiaco nunca espere detrás de una caída menor.', ask: '¿Qué protocolos médicos y de bomberos soporta y se pueden ajustar a nuestras normas?' },
    { title: 'Orientar a quien llama antes de que llegue la unidad', body: 'Instrucciones previas a la llegada para los primeros minutos: RCP, control de sangrado, evacuación. La Norma Técnica 9-1-1 pide al CAD apoyar al operador con primeros auxilios por teléfono basados en los protocolos del SESNSP.', ask: '¿Cómo recibe el operador las instrucciones de primeros auxilios y de qué protocolo vienen?' },
    { title: 'Recomendar unidades por capacidad', body: 'La recomendación debe considerar disponibilidad, distancia y capacidad: soporte vital avanzado o básico, bomba o escalera.', ask: '¿La recomendación considera el tipo de unidad y la capacidad de la tripulación?' },
    { title: 'Coordinarse con el CRUM y los hospitales', body: 'Las urgencias médicas deben compartirse con el centro regulador y con el hospital receptor, y con la policía que atiende la misma escena.', ask: '¿Cómo comparte el incidente con el CRUM, los hospitales y otras corporaciones?' },
    { title: 'Ver unidades y rutas en vivo', body: 'Posiciones AVL, rutas y tiempos estimados en un mapa, junto con el incidente, hidrantes o sitios de interés y las cámaras cercanas.', ask: '¿Incidentes, unidades y capas del mapa se actualizan juntos en tiempo real?' },
    { title: 'Medir cada minuto', body: 'Recepción, despacho, en camino, arribo y traslado registrados por incidente para la revisión de calidad. La Norma Técnica 9-1-1 fija 90 segundos de recepción y 90 de despacho en promedio.', ask: '¿Puede reportar cada intervalo por incidente, unidad y turno?' },
  ],
  howTitle: 'Cómo resuelve K-Dispatch el despacho de bomberos y ambulancias',
  how: [
    'Atención de llamadas de emergencia y despacho en una sola plataforma: la llamada pasa del operador al despachador sin recapturar datos.',
    'Ubicación de quien llama generada automáticamente, con el incidente, las unidades y las cámaras en un solo mapa en vivo.',
    'AI Co-Pilot para operadores y despachadores: transcripción de la llamada en vivo, guía por escenario y recomendación de unidades según estado, capacidad y disponibilidad. El operador siempre decide.',
    'Coordinación multiagencia: bomberos, servicios médicos y policía trabajan el mismo registro del incidente.',
    'Apps para primeros respondientes y para ciudadanos.',
    'Despliegue en la nube, en sitio o híbrido, en español e inglés.',
    'Con la confianza del C5 CDMX, el centro de comando, control y 911 de la Ciudad de México.',
  ],
  faqTitle: 'Preguntas frecuentes',
  faqs: [
    { question: '¿Qué es un software de despacho de ambulancias?', answer: 'Es el sistema de despacho asistido por computadora (CAD) con el que un servicio de urgencias médicas recibe las llamadas, las clasifica por protocolo, recomienda y asigna ambulancias, las sigue en un mapa y registra cada intervalo de tiempo para la revisión de calidad.' },
    { question: '¿Qué es el CRUM y cómo se relaciona con el 911?', answer: 'El Centro Regulador de Urgencias Médicas (CRUM) coordina la atención prehospitalaria y el traslado de pacientes en cada entidad. El 911 recibe la llamada; el CRUM regula la respuesta médica. Por eso el CAD debe poder compartir el incidente con el centro regulador.' },
    { question: '¿Qué debe incluir un sistema de despacho para bomberos?', answer: 'Clasificación por protocolo, instrucciones previas a la llegada, planes de respuesta con varias unidades, recomendación por tipo de unidad, mapa con AVL, coordinación con otras corporaciones y reportes por intervalo de tiempo.' },
    { question: '¿Bomberos, ambulancias y policía pueden usar un mismo CAD?', answer: 'Sí. Un CAD multiagencia permite que las tres corporaciones trabajen el mismo incidente, de modo que un choque que requiere a las tres se coordina desde un solo registro.' },
  ],
  related: [
    { href: '/resources/norma-tecnica-911', label: 'Norma Técnica 9-1-1: requisitos del CAD' },
    { href: '/resources/police-cad-software', label: 'Software CAD para policía' },
    { href: '/resources/what-is-emergency-dispatch-software', label: '¿Qué es el software de despacho de emergencias?' },
    { href: '/k-dispatch', label: 'K-Dispatch' },
  ],
  breadcrumb: 'Despacho para bomberos y ambulancias',
  articleHeadline: 'Software de despacho para bomberos y ambulancias: lo que debe hacer el CAD',
  articleDescription: 'Qué debe hacer un sistema de despacho asistido por computadora para bomberos y servicios médicos de urgencia, cómo se coordina con el CRUM y qué preguntar a cada proveedor.',
}

export default async function FireEmsDispatchPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'
  return <CadSegmentPage es={es} c={es ? ES : EN} />
}
