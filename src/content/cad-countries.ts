import type { SegmentCopy } from '@/components/CadSegmentPage'

/* Tier-1 country pages for the CAD inbound plan (item #24): Ecuador, Argentina, Chile
   (Colombia is /resources/linea-123-software). Every country fact is sourced in
   research_notes/CAD inbound leads LATAM plan/latam_country_markets.md. Deliberately NOT
   stated: that Ecuador's IDB loans fund ECU 911 (unconfirmed), who won Buenos Aires
   LP 20/2025 (not reported), and any SINAPROC date beyond the bill's own terms. Product
   claims stay within the approved K-Dispatch facts. */

const HOW_ES = [
  'Atención de llamadas de emergencia y despacho en una sola plataforma: la llamada pasa del operador al despachador sin recapturar datos.',
  'Ubicación de quien llama generada automáticamente, con el incidente, las unidades, las cámaras y los sensores en un solo mapa en vivo.',
  'AI Co-Pilot para operadores y despachadores: transcripción en vivo, guía por escenario y recomendación de unidades. El operador siempre decide.',
  'Coordinación multiagencia en un mismo registro del incidente.',
  'Despliegue en la nube, en sitio o híbrido, en español.',
  'Con la confianza del C5 CDMX, el centro de comando, control y 911 de la Ciudad de México.',
]
const HOW_EN = [
  'Emergency call handling and dispatch in one platform: the call moves from call taker to dispatcher without re-entry.',
  'Caller location generated automatically, with incident, units, cameras and sensors on one live map.',
  'AI Co-Pilot for call takers and dispatchers: live transcription, scenario guidance and unit recommendations. The operator always decides.',
  'Multi-agency coordination on one incident record.',
  'Cloud, on-premise or hybrid deployment, in Spanish.',
  'Trusted by C5 CDMX, Mexico City’s command, control and 911 center.',
]

function copy(es: boolean, base: Omit<SegmentCopy, 'how' | 'howTitle'>): SegmentCopy {
  return { ...base, howTitle: es ? 'Cómo lo resuelve K-Dispatch' : 'How K-Dispatch approaches it', how: es ? HOW_ES : HOW_EN }
}

/* ── Ecuador ──────────────────────────────────────────────────────────────── */
export const ECUADOR = (es: boolean): SegmentCopy => copy(es, es ? {
  slug: 'ecu-911-modernizacion', source: 'ecu-911', eyebrow: 'Ecuador · ECU 911',
  h1a: 'Modernización del ECU 911:', h1b: 'qué debe hacer la plataforma de despacho',
  intro: 'El Servicio Integrado de Seguridad ECU 911 atiende las emergencias de todo Ecuador desde una sola red de centros. Esta guía reúne lo que debe hacer una plataforma moderna de atención y despacho, qué preguntar a cada proveedor y cómo lo resuelve K-Dispatch.',
  problemTitle: 'El punto de partida del ECU 911',
  problem: 'La plataforma tecnológica del ECU 911 se contrató a la empresa china CEIEC (US$171 millones), y su modernización está en la agenda pública. El sistema ya integra 22.026 cámaras de municipios, entidades públicas y privados, y prevé incorporar entre 35.000 y 40.000 nuevos equipos en los próximos dos a tres años. Con un solo comprador nacional y miles de fuentes de video, el reto es que la información llegue al incidente correcto, no solo a una pared de monitores. Las compras públicas se gestionan en el SERCOP.',
  reqTitle: 'Lo que debe hacer la plataforma',
  reqs: [
    { title: 'Atender y despachar en un solo flujo', body: 'Recepción multicanal con ubicación, clasificación y despacho sin cambiar de sistema entre la llamada y la unidad.', ask: '¿La llamada pasa del operador al despachador sin recapturar datos?' },
    { title: 'Llevar el video al incidente', body: 'Con decenas de miles de cámaras, el operador necesita ver las cercanas al incidente, no buscarlas en un muro.', ask: '¿Muestra automáticamente las cámaras cercanas a cada incidente?' },
    { title: 'Coordinar a todas las instituciones', body: 'Policía, Fuerzas Armadas, salud, bomberos, tránsito y gestión de riesgos trabajando el mismo registro.', ask: '¿Cada institución ve y actualiza el mismo incidente?' },
    { title: 'Escalar a nivel nacional', body: 'Una red de centros zonales y provinciales que comparten incidentes y recursos.', ask: '¿Cómo comparte incidentes y unidades entre centros?' },
    { title: 'Migrar sin interrumpir el servicio', body: 'El cambio de plataforma debe hacerse por fases, con el sistema actual operando hasta el corte.', ask: '¿Cuál es el plan de migración y operación en paralelo?' },
  ],
  faqTitle: 'Preguntas frecuentes',
  faqs: [
    { question: '¿Qué es el ECU 911?', answer: 'Es el Servicio Integrado de Seguridad de Ecuador: un sistema nacional que recibe las llamadas de emergencia al 911 y coordina la respuesta de policía, Fuerzas Armadas, salud, bomberos, tránsito y gestión de riesgos.' },
    { question: '¿Cuántas cámaras integra el ECU 911?', answer: 'Según información pública reciente, integra 22.026 cámaras de municipios, entidades públicas y privados, y planea incorporar entre 35.000 y 40.000 nuevos equipos en dos a tres años.' },
    { question: '¿Qué debe priorizar la modernización del ECU 911?', answer: 'Un flujo único de atención y despacho, el video cercano llevado al incidente, la coordinación de todas las instituciones en un mismo registro y una migración por fases sin interrumpir el servicio.' },
  ],
  related: [
    { href: '/resources/public-safety-software-ecuador', label: 'Software de seguridad pública en Ecuador' },
    { href: '/resources/cad-dispatch-software-latin-america', label: 'Software CAD para América Latina' },
    { href: '/resources/anexo-tecnico-cad-911', label: 'Anexo técnico para licitar un CAD 911' },
    { href: '/k-dispatch', label: 'K-Dispatch' },
  ],
  breadcrumb: 'Modernización del ECU 911',
  articleHeadline: 'Modernización del ECU 911: qué debe hacer la plataforma de despacho',
  articleDescription: 'Qué debe hacer una plataforma moderna de atención y despacho para el ECU 911 de Ecuador, con miles de cámaras y un solo sistema nacional.',
} : {
  slug: 'ecu-911-modernizacion', source: 'ecu-911', eyebrow: 'Ecuador · ECU 911',
  h1a: 'Modernizing ECU 911:', h1b: 'what the dispatch platform must do',
  intro: 'Ecuador’s Integrated Security Service, ECU 911, handles emergencies for the whole country from one network of centers. This guide covers what a modern call handling and dispatch platform must do, what to ask each vendor and how K-Dispatch approaches it.',
  problemTitle: 'Where ECU 911 starts from',
  problem: 'ECU 911’s technology platform was contracted from China’s CEIEC (US$171 million), and its modernization is on the public agenda. The system already integrates 22,026 cameras from municipalities, public bodies and private owners, and plans to add 35,000 to 40,000 new devices over two to three years. With one national buyer and thousands of video sources, the challenge is getting information to the right incident, not just onto a video wall. Public procurement runs through SERCOP.',
  reqTitle: 'What the platform must do',
  reqs: [
    { title: 'Handle and dispatch in one flow', body: 'Multi-channel intake with location, classification and dispatch without switching systems between the call and the unit.', ask: 'Does the call move from call taker to dispatcher without re-entry?' },
    { title: 'Bring video to the incident', body: 'With tens of thousands of cameras, operators need the ones near the incident, not a search across a wall.', ask: 'Does it show the cameras near each incident automatically?' },
    { title: 'Coordinate every institution', body: 'Police, armed forces, health, fire, traffic and risk management working one record.', ask: 'Does every institution see and update the same incident?' },
    { title: 'Scale nationally', body: 'A network of zonal and provincial centers sharing incidents and resources.', ask: 'How does it share incidents and units between centers?' },
    { title: 'Migrate without interrupting service', body: 'The platform change must be phased, with the current system running until cut-over.', ask: 'What is the migration and parallel-operation plan?' },
  ],
  faqTitle: 'Frequently asked questions',
  faqs: [
    { question: 'What is ECU 911?', answer: 'It is Ecuador’s Integrated Security Service: a national system that takes 911 emergency calls and coordinates police, armed forces, health, fire, traffic and risk management.' },
    { question: 'How many cameras does ECU 911 integrate?', answer: 'According to recent public information, it integrates 22,026 cameras from municipalities, public bodies and private owners, and plans to add 35,000 to 40,000 new devices over two to three years.' },
    { question: 'What should ECU 911 modernization prioritize?', answer: 'A single call handling and dispatch flow, nearby video brought to the incident, every institution on one record, and a phased migration without interrupting service.' },
  ],
  related: [
    { href: '/resources/public-safety-software-ecuador', label: 'Public safety software in Ecuador' },
    { href: '/resources/cad-dispatch-software-latin-america', label: 'CAD dispatch software for Latin America' },
    { href: '/resources/best-cad-dispatch-software', label: 'Best CAD dispatch software' },
    { href: '/k-dispatch', label: 'K-Dispatch' },
  ],
  breadcrumb: 'Modernizing ECU 911',
  articleHeadline: 'Modernizing ECU 911: what the dispatch platform must do',
  articleDescription: 'What a modern call handling and dispatch platform for Ecuador’s ECU 911 must do, with thousands of cameras and one national system.',
})

/* ── Argentina ────────────────────────────────────────────────────────────── */
export const ARGENTINA = (es: boolean): SegmentCopy => copy(es, es ? {
  slug: 'sistema-911-argentina', source: '911-argentina', eyebrow: 'Argentina · 911 provincial',
  h1a: 'Sistema 911 provincial en Argentina:', h1b: 'atención y despacho con inteligencia artificial',
  intro: 'En Argentina, cada provincia y la Ciudad de Buenos Aires operan su propio 911. Las licitaciones recientes ya piden inteligencia artificial para asistir al operador. Esta guía reúne lo que debe hacer la plataforma, qué preguntar a cada proveedor y cómo lo resuelve K-Dispatch.',
  problemTitle: 'Lo que ya piden las licitaciones',
  problem: 'La Provincia de Buenos Aires adjudicó en 2026 la Licitación Pública 20/2025, con un presupuesto oficial de ARS 23.105 millones. Su alcance incluye un nuevo centro de atención telefónica (CATE) en La Matanza, que se suma a La Plata, Mar del Plata y Campana, y asistentes de inteligencia artificial para transcripción y traducción en tiempo real, extracción de datos como nombres y patentes y sugerencia del tipo de incidente. Es la señal más clara de hacia dónde va el 911 provincial. Las compras se publican en COMPR.AR a nivel nacional y en los portales de cada provincia, como PBAC en Buenos Aires.',
  reqTitle: 'Lo que debe hacer un 911 provincial moderno',
  reqs: [
    { title: 'IA que asista al operador', body: 'Transcripción en tiempo real, extracción de datos de la llamada y sugerencia del tipo de incidente, con el operador a cargo de la decisión.', ask: '¿Qué hace la IA durante la llamada y cómo valida el operador cada sugerencia?' },
    { title: 'Varios centros, un solo sistema', body: 'Los CATE de la provincia deben compartir incidentes, recursos y criterios.', ask: '¿Cómo se reparten y transfieren las llamadas entre centros?' },
    { title: 'Despacho y unidades en el mismo mapa', body: 'Ubicación de quien llama, unidades con AVL, cámaras y sensores junto al incidente.', ask: '¿Incidente, unidades y cámaras aparecen en el mismo mapa?' },
    { title: 'Coordinación multiagencia', body: 'Policía, bomberos, salud y defensa civil trabajando el mismo registro.', ask: '¿Cada agencia ve y actualiza el mismo incidente?' },
    { title: 'Indicadores por centro y por turno', body: 'Tiempos de atención y despacho medidos para la gestión y la rendición de cuentas.', ask: '¿Qué reportes genera por centro, turno y tipo de incidente?' },
  ],
  faqTitle: 'Preguntas frecuentes',
  faqs: [
    { question: '¿Quién opera el 911 en Argentina?', answer: 'Cada provincia y la Ciudad Autónoma de Buenos Aires operan su propio sistema 911, con sus centros de atención y su presupuesto.' },
    { question: '¿Qué pidió la licitación del 911 de la Provincia de Buenos Aires?', answer: 'La Licitación Pública 20/2025, con presupuesto oficial de ARS 23.105 millones, incluyó un nuevo centro de atención en La Matanza y asistentes de inteligencia artificial para transcripción y traducción en tiempo real, extracción de datos y sugerencia del tipo de incidente.' },
    { question: '¿Cómo ayuda la inteligencia artificial en un 911?', answer: 'Transcribe la llamada, extrae datos clave y sugiere el tipo de incidente y las unidades, para que el operador capture menos y decida más rápido. La decisión sigue siendo del operador.' },
  ],
  related: [
    { href: '/resources/public-safety-software-argentina', label: 'Software de seguridad pública en Argentina' },
    { href: '/resources/cad-dispatch-software-latin-america', label: 'Software CAD para América Latina' },
    { href: '/resources/police-cad-software', label: 'Software CAD para policía' },
    { href: '/k-dispatch', label: 'K-Dispatch' },
  ],
  breadcrumb: 'Sistema 911 provincial en Argentina',
  articleHeadline: 'Sistema 911 provincial en Argentina: atención y despacho con inteligencia artificial',
  articleDescription: 'Qué debe hacer un sistema 911 provincial en Argentina, qué piden las licitaciones recientes con inteligencia artificial y qué preguntar a cada proveedor.',
} : {
  slug: 'sistema-911-argentina', source: '911-argentina', eyebrow: 'Argentina · provincial 911',
  h1a: 'Provincial 911 systems in Argentina:', h1b: 'call handling and dispatch with AI',
  intro: 'In Argentina, each province and the City of Buenos Aires run their own 911. Recent tenders already require AI to assist the operator. This guide covers what the platform must do, what to ask each vendor and how K-Dispatch approaches it.',
  problemTitle: 'What tenders already ask for',
  problem: 'Buenos Aires Province awarded Public Tender 20/2025 in 2026, with an official budget of ARS 23,105 million. Its scope includes a new call center (CATE) in La Matanza, joining La Plata, Mar del Plata and Campana, and AI assistants for real-time transcription and translation, extraction of data such as names and licence plates, and incident-type suggestions. It is the clearest signal of where provincial 911 is heading. Purchases are published on COMPR.AR nationally and on each province’s portal, such as PBAC in Buenos Aires.',
  reqTitle: 'What a modern provincial 911 must do',
  reqs: [
    { title: 'AI that assists the operator', body: 'Real-time transcription, extraction of call data and incident-type suggestions, with the operator in charge of the decision.', ask: 'What does the AI do during the call, and how does the operator validate each suggestion?' },
    { title: 'Several centers, one system', body: 'A province’s call centers must share incidents, resources and criteria.', ask: 'How are calls distributed and transferred between centers?' },
    { title: 'Dispatch and units on one map', body: 'Caller location, AVL units, cameras and sensors beside the incident.', ask: 'Do incident, units and cameras appear on the same map?' },
    { title: 'Multi-agency coordination', body: 'Police, fire, health and civil defense working one record.', ask: 'Does every agency see and update the same incident?' },
    { title: 'Indicators per center and shift', body: 'Call-handling and dispatch times measured for management and accountability.', ask: 'Which reports does it produce per center, shift and incident type?' },
  ],
  faqTitle: 'Frequently asked questions',
  faqs: [
    { question: 'Who runs 911 in Argentina?', answer: 'Each province and the Autonomous City of Buenos Aires run their own 911 system, with their own call centers and budget.' },
    { question: 'What did the Buenos Aires Province 911 tender require?', answer: 'Public Tender 20/2025, with an official budget of ARS 23,105 million, included a new call center in La Matanza and AI assistants for real-time transcription and translation, data extraction and incident-type suggestions.' },
    { question: 'How does AI help a 911 center?', answer: 'It transcribes the call, extracts key data and suggests the incident type and units, so the operator types less and decides faster. The decision stays with the operator.' },
  ],
  related: [
    { href: '/resources/public-safety-software-argentina', label: 'Public safety software in Argentina' },
    { href: '/resources/cad-dispatch-software-latin-america', label: 'CAD dispatch software for Latin America' },
    { href: '/resources/police-cad-software', label: 'Police CAD software' },
    { href: '/k-dispatch', label: 'K-Dispatch' },
  ],
  breadcrumb: 'Provincial 911 in Argentina',
  articleHeadline: 'Provincial 911 systems in Argentina: call handling and dispatch with AI',
  articleDescription: 'What a provincial 911 system in Argentina must do, what recent AI-enabled tenders require, and what to ask each vendor.',
})

/* ── Chile ────────────────────────────────────────────────────────────────── */
export const CHILE = (es: boolean): SegmentCopy => copy(es, es ? {
  slug: '911-chile-sinaproc', source: '911-chile', eyebrow: 'Chile · 911 chileno',
  h1a: '911 chileno (SINAPROC):', h1b: 'qué debe tener la plataforma del número único',
  intro: 'Chile prepara un número único de emergencias que unifique los canales actuales de Carabineros, Bomberos y SAMU. Esta guía reúne lo que plantea el proyecto, lo que debe hacer la plataforma y qué preguntar a cada proveedor.',
  problemTitle: 'Lo que plantea el proyecto de ley',
  problem: 'Hoy Chile opera números separados: 131 para el SAMU, 132 para Bomberos y 133 para Carabineros. En octubre de 2025 se presentó el proyecto de ley del Sistema Nacional de Protección Ciudadana (SINAPROC) para crear un “911 chileno” que unifique esos canales. El proyecto incluye la ubicación en tiempo real de quien llama, un registro de llamadas maliciosas, un primer centro de operación piloto dentro de los 24 meses siguientes a la ley y la plataforma tecnológica completa en un plazo posterior. En junio de 2026 seguía en discusión en el Senado. Las compras públicas se realizan a través de Mercado Público.',
  reqTitle: 'Lo que debe hacer la plataforma del número único',
  reqs: [
    { title: 'Unificar tres servicios en un solo flujo', body: 'Que una llamada al número único llegue a Carabineros, Bomberos o SAMU sin transferencias que pierdan tiempo y contexto.', ask: '¿Cómo comparten las tres instituciones un mismo registro del incidente?' },
    { title: 'Ubicación en tiempo real', body: 'El proyecto la exige: la ubicación de quien llama debe llegar sola, no dictada.', ask: '¿Cómo obtiene la ubicación del teléfono y en cuánto tiempo?' },
    { title: 'Filtrar llamadas maliciosas', body: 'Un registro de llamadas maliciosas exige identificar y documentar patrones de abuso.', ask: '¿Cómo registra y reporta las llamadas maliciosas?' },
    { title: 'Empezar con un piloto y escalar', body: 'Un centro piloto primero y despliegue nacional después: la plataforma debe crecer sin rehacerse.', ask: '¿Cómo pasa de un centro piloto a una red nacional?' },
    { title: 'Mapa, unidades y video', body: 'Incidente, unidades y cámaras en un mismo mapa para decidir con contexto.', ask: '¿Incidente, unidades y cámaras aparecen en el mismo mapa?' },
  ],
  faqTitle: 'Preguntas frecuentes',
  faqs: [
    { question: '¿Qué es el SINAPROC?', answer: 'Es el Sistema Nacional de Protección Ciudadana, un proyecto de ley presentado en octubre de 2025 para crear en Chile un número único de emergencias que unifique los canales de Carabineros (133), Bomberos (132) y SAMU (131).' },
    { question: '¿Cuándo funcionaría el 911 chileno?', answer: 'El proyecto prevé un primer centro de operación piloto dentro de los 24 meses siguientes a la promulgación de la ley y la plataforma tecnológica completa después. En junio de 2026 el proyecto seguía en el Senado.' },
    { question: '¿Qué exige el proyecto a la plataforma?', answer: 'Entre otros puntos, la ubicación en tiempo real de quien llama y un registro de llamadas maliciosas, además de unificar la atención de las tres instituciones.' },
  ],
  related: [
    { href: '/resources/public-safety-software-chile', label: 'Software de seguridad pública en Chile' },
    { href: '/resources/cad-dispatch-software-latin-america', label: 'Software CAD para América Latina' },
    { href: '/resources/fire-ems-dispatch-software', label: 'Despacho para bomberos y ambulancias' },
    { href: '/k-dispatch', label: 'K-Dispatch' },
  ],
  breadcrumb: '911 chileno (SINAPROC)',
  articleHeadline: '911 chileno (SINAPROC): qué debe tener la plataforma del número único',
  articleDescription: 'Qué plantea el proyecto del Sistema Nacional de Protección Ciudadana para crear el 911 chileno y qué debe hacer la plataforma del número único de emergencias.',
} : {
  slug: '911-chile-sinaproc', source: '911-chile', eyebrow: 'Chile · national 911',
  h1a: 'Chile’s 911 (SINAPROC):', h1b: 'what the single-number platform needs',
  intro: 'Chile is preparing a single emergency number to unify the current channels of Carabineros, Bomberos and SAMU. This guide covers what the bill proposes, what the platform must do and what to ask each vendor.',
  problemTitle: 'What the bill proposes',
  problem: 'Today Chile runs separate numbers: 131 for SAMU, 132 for Bomberos and 133 for Carabineros. In October 2025 the National Citizen Protection System (SINAPROC) bill was filed to create a “Chilean 911” that unifies them. It includes real-time caller location, a registry of malicious calls, a first pilot operations center within 24 months of the law and the full technology platform later. In June 2026 it was still under debate in the Senate. Public purchasing runs through Mercado Público.',
  reqTitle: 'What the single-number platform must do',
  reqs: [
    { title: 'Unify three services in one flow', body: 'A call to the single number should reach Carabineros, Bomberos or SAMU without transfers that lose time and context.', ask: 'How do the three institutions share one incident record?' },
    { title: 'Real-time location', body: 'The bill requires it: caller location must arrive automatically, not be dictated.', ask: 'How does it obtain the phone’s location, and how fast?' },
    { title: 'Filter malicious calls', body: 'A malicious-call registry requires identifying and documenting abuse patterns.', ask: 'How does it log and report malicious calls?' },
    { title: 'Start with a pilot and scale', body: 'A pilot center first and a national rollout later: the platform must grow without being rebuilt.', ask: 'How does it go from one pilot center to a national network?' },
    { title: 'Map, units and video', body: 'Incident, units and cameras on one map so decisions are made with context.', ask: 'Do incident, units and cameras appear on the same map?' },
  ],
  faqTitle: 'Frequently asked questions',
  faqs: [
    { question: 'What is SINAPROC?', answer: 'The National Citizen Protection System: a bill filed in October 2025 to create a single emergency number in Chile, unifying the channels of Carabineros (133), Bomberos (132) and SAMU (131).' },
    { question: 'When would Chile’s 911 start?', answer: 'The bill provides for a first pilot operations center within 24 months of the law being enacted and the full technology platform afterwards. In June 2026 it was still in the Senate.' },
    { question: 'What does the bill require of the platform?', answer: 'Among other points, real-time caller location and a registry of malicious calls, besides unifying the three institutions’ call handling.' },
  ],
  related: [
    { href: '/resources/public-safety-software-chile', label: 'Public safety software in Chile' },
    { href: '/resources/cad-dispatch-software-latin-america', label: 'CAD dispatch software for Latin America' },
    { href: '/resources/fire-ems-dispatch-software', label: 'Fire and EMS dispatch software' },
    { href: '/k-dispatch', label: 'K-Dispatch' },
  ],
  breadcrumb: 'Chile’s 911 (SINAPROC)',
  articleHeadline: 'Chile’s 911 (SINAPROC): what the single-number platform needs',
  articleDescription: 'What Chile’s National Citizen Protection System bill proposes for a single 911 number, and what the platform must do.',
})
