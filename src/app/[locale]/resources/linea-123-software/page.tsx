import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import CadSegmentPage, { type SegmentCopy } from '@/components/CadSegmentPage'

/* CAD plan item #24 (first Tier-1 country page). GEO block E baseline (29 Oct 2026):
   "software para la Línea 123 de emergencias en Colombia" -- KabatOne absent on Perplexity
   in both runs and not named elsewhere. Colombian facts are from the LATAM country research
   (research_notes/.../latam_country_markets.md): Bogotá Decreto 644 de 2025 (NUSE 123
   coordinated by the Secretaría de Seguridad), process SCJ-SIF-SASI-010-2024 (reverse
   auction, COP 9,343M, 12 months), SECOP II. The Vesta NG911 article had no confirmed date,
   so it is not cited. */

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('linea123Software', locale)
}

const ES: SegmentCopy = {
  slug: 'linea-123-software',
  source: 'linea-123',
  eyebrow: 'Colombia · Línea 123',
  h1a: 'Software para la Línea 123:',
  h1b: 'recepción y despacho de emergencias en Colombia',
  intro: 'En Colombia, la Línea 123 y los Números Únicos de Seguridad y Emergencias (NUSE) reciben las llamadas de emergencia de cada ciudad y las coordinan con policía, bomberos, salud y gestión del riesgo. Esta guía reúne lo que debe hacer la plataforma, qué preguntar a cada proveedor y cómo lo resuelve K-Dispatch.',
  problemTitle: 'Cómo se compra y se opera la Línea 123',
  problem: 'Cada ciudad opera y contrata su propio sistema. En Bogotá, el Decreto 644 de 2025 asigna la coordinación del NUSE 123 a la Secretaría de Seguridad, Convivencia y Justicia, y los servicios tecnológicos de la Línea 123 se contrataron en 2024 por subasta inversa (proceso SCJ-SIF-SASI-010-2024, presupuesto de COP 9.343 millones por 12 meses). Las contrataciones públicas se publican en SECOP II. El reto operativo es el mismo en todas las ciudades: una llamada que pasa por varias agencias pierde tiempo y contexto en cada transferencia.',
  reqTitle: 'Lo que debe hacer la plataforma de la Línea 123',
  reqs: [
    { title: 'Recibir por todos los canales', body: 'Voz, texto, multimedia y alertas en una sola cola, con la ubicación de quien llama.', ask: '¿La ubicación llega automáticamente y en qué canales además de la voz?' },
    { title: 'Clasificar y priorizar', body: 'Clasificación del incidente por protocolo para que el caso más grave nunca espere detrás de uno rutinario.', ask: '¿Cómo se configuran los protocolos y tipos de incidente de la ciudad?' },
    { title: 'Coordinar a todas las agencias', body: 'Policía, bomberos, salud y gestión del riesgo trabajando el mismo incidente, no cada una en su sistema.', ask: '¿Cada agencia ve y actualiza el mismo registro del incidente?' },
    { title: 'Ver unidades, cámaras y sensores en un mapa', body: 'Unidades con AVL, cámaras de videovigilancia y sensores junto al incidente, en el mismo mapa que usa el operador.', ask: '¿Se abren las cámaras del centro de monitoreo desde el incidente?' },
    { title: 'Apoyar al operador', body: 'Herramientas que reduzcan el tiempo de captura y de despacho sin quitar la decisión al operador.', ask: '¿Qué recomienda el sistema y quién decide?' },
    { title: 'Medir y publicar', body: 'Tiempos por etapa, reportes por agencia y datos listos para los informes de gestión y de datos abiertos.', ask: '¿Puede exportar los datos de incidentes en formatos abiertos?' },
  ],
  howTitle: 'Cómo resuelve K-Dispatch la Línea 123',
  how: [
    'Atención de llamadas de emergencia y despacho en una sola plataforma: la llamada pasa del operador al despachador sin recapturar datos.',
    'Ubicación de quien llama generada automáticamente, con el incidente, las unidades, las cámaras y los sensores en un solo mapa en vivo.',
    'AI Co-Pilot para operadores y despachadores: transcripción en vivo, guía por escenario y recomendación de unidades. El operador siempre decide.',
    'Coordinación multiagencia en un mismo registro del incidente.',
    'Despliegue en la nube, en sitio o híbrido, en español.',
    'Con la confianza del C5 CDMX, el centro de comando, control y 911 de la Ciudad de México.',
  ],
  faqTitle: 'Preguntas frecuentes',
  faqs: [
    { question: '¿Qué es la Línea 123 en Colombia?', answer: 'Es el número único de seguridad y emergencias de las ciudades colombianas. Recibe las llamadas y las coordina con policía, bomberos, salud y gestión del riesgo. En Bogotá opera como Número Único de Seguridad y Emergencias (NUSE) bajo la Secretaría de Seguridad, Convivencia y Justicia.' },
    { question: '¿Cómo se contrata la tecnología de la Línea 123?', answer: 'Cada entidad territorial contrata con su propio presupuesto, generalmente por procesos públicos publicados en SECOP II. Bogotá contrató en 2024 los servicios tecnológicos de la Línea 123 por subasta inversa.' },
    { question: '¿Qué debe incluir un sistema para la Línea 123?', answer: 'Recepción multicanal con ubicación, clasificación por protocolo, coordinación de todas las agencias en un mismo incidente, mapa con unidades, cámaras y sensores, apoyo al operador y reportes por etapa y por agencia.' },
  ],
  related: [
    { href: '/resources/public-safety-software-colombia', label: 'Software de seguridad pública en Colombia' },
    { href: '/resources/cad-dispatch-software-latin-america', label: 'Software CAD para América Latina' },
    { href: '/resources/police-cad-software', label: 'Software CAD para policía' },
    { href: '/k-dispatch', label: 'K-Dispatch' },
  ],
  breadcrumb: 'Software para la Línea 123',
  articleHeadline: 'Software para la Línea 123: recepción y despacho de emergencias en Colombia',
  articleDescription: 'Qué debe hacer la plataforma de la Línea 123 y del NUSE en Colombia, cómo se contrata y qué preguntar a cada proveedor.',
}

const EN: SegmentCopy = {
  ...ES,
  eyebrow: 'Colombia · Línea 123',
  h1a: 'Línea 123 software:',
  h1b: 'emergency call handling and dispatch in Colombia',
  intro: 'In Colombia, the Línea 123 and each city’s single security and emergency number (NUSE) take emergency calls and coordinate police, fire, health and disaster management. This guide covers what the platform must do, what to ask each vendor and how K-Dispatch approaches it.',
  problemTitle: 'How the Línea 123 is bought and run',
  problem: 'Each city runs and buys its own system. In Bogotá, Decree 644 of 2025 assigns coordination of NUSE 123 to the Secretariat of Security, Coexistence and Justice, and the Línea 123 technology services were contracted in 2024 by reverse auction (process SCJ-SIF-SASI-010-2024, a COP 9,343 million budget over 12 months). Public contracts are published on SECOP II. The operational challenge is the same everywhere: a call that passes between agencies loses time and context at every transfer.',
  reqTitle: 'What a Línea 123 platform must do',
  reqs: [
    { title: 'Receive on every channel', body: 'Voice, text, multimedia and alerts in one queue, with the caller’s location.', ask: 'Does location arrive automatically, and on which channels besides voice?' },
    { title: 'Classify and prioritize', body: 'Protocol-based classification so the most serious case never waits behind a routine one.', ask: 'How are the city’s protocols and incident types configured?' },
    { title: 'Coordinate every agency', body: 'Police, fire, health and disaster management working one incident, not each in its own system.', ask: 'Does every agency see and update the same incident record?' },
    { title: 'See units, cameras and sensors on one map', body: 'AVL units, surveillance cameras and sensors beside the incident on the operator’s map.', ask: 'Can operators open the monitoring center’s cameras from the incident?' },
    { title: 'Support the operator', body: 'Tools that cut capture and dispatch time without taking the decision away from the operator.', ask: 'What does the system recommend, and who decides?' },
    { title: 'Measure and publish', body: 'Per-stage times, per-agency reports and data ready for management and open-data reporting.', ask: 'Can it export incident data in open formats?' },
  ],
  howTitle: 'How K-Dispatch approaches the Línea 123',
  how: [
    'Emergency call handling and dispatch in one platform: the call moves from call taker to dispatcher without re-entry.',
    'Caller location generated automatically, with incident, units, cameras and sensors on one live map.',
    'AI Co-Pilot for call takers and dispatchers: live transcription, scenario guidance and unit recommendations. The operator always decides.',
    'Multi-agency coordination on one incident record.',
    'Cloud, on-premise or hybrid deployment, in Spanish.',
    'Trusted by C5 CDMX, Mexico City’s command, control and 911 center.',
  ],
  faqTitle: 'Frequently asked questions',
  faqs: [
    { question: 'What is the Línea 123 in Colombia?', answer: 'It is the single security and emergency number of Colombian cities. It takes calls and coordinates police, fire, health and disaster management. In Bogotá it runs as the NUSE under the Secretariat of Security, Coexistence and Justice.' },
    { question: 'How is Línea 123 technology bought?', answer: 'Each local government contracts with its own budget, usually through public processes published on SECOP II. Bogotá contracted its Línea 123 technology services in 2024 by reverse auction.' },
    { question: 'What should a Línea 123 system include?', answer: 'Multi-channel intake with location, protocol-based classification, every agency on one incident, a map with units, cameras and sensors, operator support, and per-stage and per-agency reporting.' },
  ],
  related: [
    { href: '/resources/public-safety-software-colombia', label: 'Public safety software in Colombia' },
    { href: '/resources/cad-dispatch-software-latin-america', label: 'CAD dispatch software for Latin America' },
    { href: '/resources/police-cad-software', label: 'Police CAD software' },
    { href: '/k-dispatch', label: 'K-Dispatch' },
  ],
  breadcrumb: 'Línea 123 software',
  articleHeadline: 'Línea 123 software: emergency call handling and dispatch in Colombia',
  articleDescription: 'What a Línea 123 and NUSE platform in Colombia must do, how it is bought, and what to ask each vendor.',
}

export default async function Linea123Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'
  return <CadSegmentPage es={es} c={es ? ES : EN} />
}
