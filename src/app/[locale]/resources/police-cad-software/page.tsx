import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import CadSegmentPage, { type SegmentCopy } from '@/components/CadSegmentPage'

/* CAD plan item #26. GSC 4 Oct-31 Oct 2026: 75 police CAD queries, 1,736 impressions,
   1 click ("police dispatch system" p8.2, "police cad systems" p8.4, "police cad software"
   p12.4), all landing on the generic best-CAD and US country pages. A dedicated page for
   the intent. Requirements are written as what to look for; product claims stay within
   the approved K-Dispatch facts. */

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('policeCadSoftware', locale)
}

const EN: SegmentCopy = {
  slug: 'police-cad-software',
  source: 'police-cad',
  eyebrow: 'Police dispatch',
  h1a: 'Police CAD software:',
  h1b: 'what a police dispatch system must do',
  intro: 'A police computer-aided dispatch (CAD) system takes the call, sets the priority, recommends the right unit and keeps every officer, supervisor and partner agency on the same incident. This guide covers what to require, the questions to ask each vendor, and how K-Dispatch approaches it.',
  problemTitle: 'Why police dispatch breaks down',
  problem: 'Most police agencies run call handling and CAD as separate systems. The call taker types what the caller says, the dispatcher reads it on another screen, and the unit gets a radio summary. Every hand-off loses time and context: a location retyped, a weapon mentioned in the call that never reaches the officer, a camera near the scene nobody opens. A police CAD should close those gaps, not add another screen.',
  reqTitle: 'What a police CAD must do',
  reqs: [
    { title: 'Take the call and set the priority', body: 'Caller number and location arrive with the call, the incident is classified against your protocols, and the most serious call is never waiting behind a routine one.', ask: 'Does the caller location reach the call taker automatically, or is it typed?' },
    { title: 'Recommend the right unit', body: 'The system should show who is available, who is closest and who has the needed capability, and let the dispatcher accept or change the recommendation.', ask: 'How does it choose the recommended unit, and can the dispatcher override it?' },
    { title: 'Track every unit on a live map', body: 'AVL positions, routing and ETAs on one map, together with the incident, nearby cameras and sensors.', ask: 'Do incidents, units and cameras appear on the same map in real time?' },
    { title: 'Give officers context in the field', body: 'Responders see the incident, its location and updates on a mobile device, and send status back without radio traffic.', ask: 'What does an officer see on the mobile app, and how are status changes logged?' },
    { title: 'Bring video and sensors into the call', body: 'License plate recognition hits, gunshot detection and the nearest CCTV cameras attached to the incident, not watched on a separate wall.', ask: 'Which video and sensor systems integrate, and can a dispatcher open a camera from the incident?' },
    { title: 'Connect to records and other agencies', body: 'Incidents flow into the records management system and are shared with fire, EMS and neighboring agencies working the same event.', ask: 'Which RMS and data-exchange standards does it support (for example NIEM and CAP)?' },
    { title: 'Keep a complete audit trail', body: 'Every action timestamped, so response-time reports and post-incident reviews come from the system that ran the call.', ask: 'Can we report reception, dispatch and arrival times per incident and per shift?' },
    { title: 'Meet your security and hosting rules', body: 'Cloud, on-premise or hybrid, depending on your data-sovereignty rules. In the United States, criminal-justice data also falls under the FBI CJIS Security Policy.', ask: 'Where is our data hosted, and how does the deployment meet our security policy?' },
  ],
  howTitle: 'How K-Dispatch approaches police dispatch',
  how: [
    'Emergency call handling and dispatch in one platform, so the call moves from call taker to dispatcher without re-entry.',
    'Caller location generated automatically, with the incident on a live map alongside video and sensors such as LPR and gunshot detection.',
    'AI Co-Pilot for call takers and dispatchers: live call transcription, scenario guidance and unit recommendations. The operator always decides.',
    'Multi-agency coordination: police, fire and EMS work the same incident record.',
    'Apps for responders in the field and for citizens.',
    'Deployment in the cloud, on-premise or hybrid, in English and Spanish.',
    'Trusted by C5 CDMX, Mexico City’s command, control and 911 center.',
  ],
  faqTitle: 'Frequently asked questions',
  faqs: [
    { question: 'What is police CAD software?', answer: 'Police computer-aided dispatch (CAD) software records emergency and service calls, sets their priority, recommends and assigns units, tracks those units on a map and logs every action for reporting. It is the system dispatchers use to coordinate patrol response.' },
    { question: 'What is the difference between police CAD and RMS?', answer: 'CAD manages the live incident: the call, the dispatch and the units responding. A records management system (RMS) holds the reports, cases and records that follow. A police CAD should pass incident data to the RMS so officers do not re-enter it.' },
    { question: 'What features should a police dispatch system have?', answer: 'Automatic caller location, protocol-based priority, unit recommendation, AVL mapping, a mobile app for officers, video and sensor integration, RMS and multi-agency data exchange, and a full audit trail with response-time reporting.' },
    { question: 'Can a police CAD run in the cloud?', answer: 'Yes. Many agencies now choose cloud or hybrid CAD. The deciding factors are your data-hosting and security rules; in the United States that includes the FBI CJIS Security Policy for criminal-justice information.' },
  ],
  related: [
    { href: '/resources/best-cad-dispatch-software', label: 'Best CAD dispatch software' },
    { href: '/resources/fire-ems-dispatch-software', label: 'Fire and EMS dispatch software' },
    { href: '/resources/what-is-cad-dispatch-software', label: 'What is CAD dispatch software?' },
    { href: '/vs/motorola', label: 'KabatOne vs Motorola' },
  ],
  breadcrumb: 'Police CAD software',
  articleHeadline: 'Police CAD software: what a police dispatch system must do',
  articleDescription: 'What a police computer-aided dispatch system must do, the questions to ask each vendor, and how K-Dispatch brings call handling and dispatch into one platform.',
}

const ES: SegmentCopy = {
  slug: 'police-cad-software',
  source: 'police-cad',
  eyebrow: 'Despacho policial',
  h1a: 'Software CAD para policía:',
  h1b: 'lo que debe hacer un sistema de despacho policial',
  intro: 'Un sistema de despacho asistido por computadora (CAD) para policía recibe la llamada, asigna la prioridad, recomienda la unidad adecuada y mantiene a cada oficial, supervisor y agencia aliada en el mismo incidente. Esta guía reúne qué exigir, qué preguntar a cada proveedor y cómo lo resuelve K-Dispatch.',
  problemTitle: 'Dónde se pierde tiempo en el despacho policial',
  problem: 'La mayoría de las corporaciones opera la atención de llamadas y el CAD como sistemas separados. El operador captura lo que dice quien llama, el despachador lo lee en otra pantalla y la unidad recibe un resumen por radio. Cada paso pierde tiempo y contexto: una ubicación que se vuelve a escribir, un arma mencionada en la llamada que nunca llega al oficial, una cámara cercana que nadie abre. Un CAD policial debe cerrar esas brechas, no sumar otra pantalla.',
  reqTitle: 'Lo que debe hacer un CAD policial',
  reqs: [
    { title: 'Recibir la llamada y asignar prioridad', body: 'El número y la ubicación de quien llama llegan con la llamada, el incidente se clasifica según sus protocolos y el caso más grave nunca espera detrás de uno rutinario.', ask: '¿La ubicación llega automáticamente al operador o se captura a mano?' },
    { title: 'Recomendar la unidad correcta', body: 'El sistema muestra quién está disponible, quién está más cerca y quién tiene la capacidad necesaria, y el despachador acepta o cambia la recomendación.', ask: '¿Cómo elige la unidad recomendada y puede el despachador cambiarla?' },
    { title: 'Ver cada unidad en un mapa en vivo', body: 'Posiciones AVL, rutas y tiempos estimados en un solo mapa, junto con el incidente, las cámaras y los sensores cercanos.', ask: '¿Incidentes, unidades y cámaras aparecen en el mismo mapa en tiempo real?' },
    { title: 'Dar contexto al oficial en campo', body: 'Las unidades ven el incidente, su ubicación y las actualizaciones en un dispositivo móvil, y reportan su estado sin saturar la radio.', ask: '¿Qué ve el oficial en la app y cómo queda registrado cada cambio de estado?' },
    { title: 'Llevar video y sensores a la llamada', body: 'Lecturas de placas, detección de disparos y las cámaras más cercanas ligadas al incidente, no vistas en un video wall aparte.', ask: '¿Con qué sistemas de video y sensores se integra y se abre la cámara desde el incidente?' },
    { title: 'Conectar con registros y otras agencias', body: 'Los incidentes pasan al sistema de registros y se comparten con bomberos, servicios médicos y municipios vecinos que atienden el mismo evento. En México, la Norma Técnica 9-1-1 pide además intercambio con otros CAD y con el IPH.', ask: '¿Cómo intercambia información con otros CAD, con el IPH y con el sistema de registros?' },
    { title: 'Guardar una bitácora completa', body: 'Cada acción con hora, para que los reportes de tiempos y las revisiones posteriores salgan del mismo sistema que atendió la llamada.', ask: '¿Puede reportar tiempos de recepción, despacho y arribo por incidente y por turno?' },
    { title: 'Cumplir sus reglas de seguridad y alojamiento', body: 'En la nube, en sitio o híbrido, según sus reglas de soberanía de datos.', ask: '¿Dónde se alojan nuestros datos y cómo cumple el despliegue con nuestra política de seguridad?' },
  ],
  howTitle: 'Cómo resuelve K-Dispatch el despacho policial',
  how: [
    'Atención de llamadas de emergencia y despacho en una sola plataforma: la llamada pasa del operador al despachador sin recapturar datos.',
    'Ubicación de quien llama generada automáticamente, con el incidente en un mapa en vivo junto a video y sensores como lectura de placas y detección de disparos.',
    'AI Co-Pilot para operadores y despachadores: transcripción de la llamada en vivo, guía por escenario y recomendación de unidades. El operador siempre decide.',
    'Coordinación multiagencia: policía, bomberos y servicios médicos trabajan el mismo registro del incidente.',
    'Apps para primeros respondientes y para ciudadanos.',
    'Despliegue en la nube, en sitio o híbrido, en español e inglés.',
    'Con la confianza del C5 CDMX, el centro de comando, control y 911 de la Ciudad de México.',
  ],
  faqTitle: 'Preguntas frecuentes',
  faqs: [
    { question: '¿Qué es un software CAD para policía?', answer: 'Es el sistema de despacho asistido por computadora que registra las llamadas de emergencia y de servicio, asigna su prioridad, recomienda y despacha unidades, las sigue en un mapa y registra cada acción para los reportes. Es la herramienta con la que el despachador coordina la respuesta de patrullas.' },
    { question: '¿Cuál es la diferencia entre el CAD y el sistema de registros?', answer: 'El CAD gestiona el incidente en vivo: la llamada, el despacho y las unidades que responden. El sistema de registros guarda los informes, carpetas y antecedentes posteriores. El CAD debe pasar los datos del incidente para que el oficial no los vuelva a capturar.' },
    { question: '¿Qué funciones debe tener un sistema de despacho policial?', answer: 'Ubicación automática de quien llama, prioridad por protocolo, recomendación de unidades, mapa con AVL, app móvil para oficiales, integración con video y sensores, intercambio con otros sistemas y agencias, y una bitácora completa con reportes de tiempos.' },
    { question: '¿Un CAD policial puede operar en la nube?', answer: 'Sí. Cada vez más corporaciones eligen un CAD en la nube o híbrido. Lo que decide es la regla de alojamiento y seguridad de los datos de cada institución.' },
  ],
  related: [
    { href: '/resources/norma-tecnica-911', label: 'Norma Técnica 9-1-1: requisitos del CAD' },
    { href: '/resources/fire-ems-dispatch-software', label: 'Software de despacho para bomberos y ambulancias' },
    { href: '/resources/what-is-cad-dispatch-software', label: '¿Qué es el software CAD?' },
    { href: '/vs/motorola', label: 'KabatOne vs Motorola' },
  ],
  breadcrumb: 'Software CAD para policía',
  articleHeadline: 'Software CAD para policía: lo que debe hacer un sistema de despacho policial',
  articleDescription: 'Qué debe hacer un sistema de despacho asistido por computadora para policía, qué preguntar a cada proveedor y cómo K-Dispatch reúne atención de llamadas y despacho en una sola plataforma.',
}

export default async function PoliceCadPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'
  return <CadSegmentPage es={es} c={es ? ES : EN} />
}
