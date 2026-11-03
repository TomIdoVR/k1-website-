import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import CadSegmentPage, { type SegmentCopy } from '@/components/CadSegmentPage'

/* CAD plan item #12: FASP planning guide for C5 and state Secretariado Ejecutivo teams,
   published as states draft their 2027 investment projects (the 2026 cycle took them
   1–15 Jan). Facts are from official text, checked 3 Nov 2026: Acuerdos del Consejo
   Nacional de Seguridad Pública, LII sesión ordinaria (11 Dec 2025), DOF 27-12-2025
   (programs 3.8.x, formula weights H/I/J, calendar, arts. 43, 51-55, 84 of the 2026
   criteria); Ley de Coordinación Fiscal arts. 25, 44, 45; LGSNSP (DOF 16-07-2025) arts.
   108-115. The PPEF 2027 figure (10,447.9 mdp) is press-reported (Milenio, 11 Sep 2026):
   the page labels it a proposal. No K-Dispatch Norma-compliance claim (CAD plan #5). */

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('fasp2027', locale)
}

const ES: SegmentCopy = {
  slug: 'fasp-2027-911-c5',
  source: 'fasp-2027',
  eyebrow: 'Guía para C5 y Secretariados Ejecutivos estatales',
  h1a: 'FASP 2027 para el 911 y el C5:',
  h1b: 'cómo planear la inversión en tecnología',
  intro: 'El Fondo de Aportaciones para la Seguridad Pública (FASP) es la principal fuente federal para modernizar el 911 y los Centros de Comando y Control de los estados. Esta guía resume, con fuentes oficiales, cuánto hay, qué programas financian tecnología, cómo corre el ciclo anual y qué debe tener listo su equipo para el proyecto de inversión.',
  problemTitle: 'Cómo funciona el FASP',
  problem: 'El FASP es una aportación federal del Ramo 33 (Ley de Coordinación Fiscal, artículos 25, 44 y 45). El Consejo Nacional de Seguridad Pública fija cada año los criterios de distribución y de ejercicio, y el SESNSP aprueba los proyectos de inversión de cada entidad (Ley General del Sistema Nacional de Seguridad Pública, artículos 114 y 115). El Presupuesto de Egresos 2026 aprobó $9,951 millones de pesos para el fondo. Para 2027 el proyecto de presupuesto propone 10,447.9 millones (+4.99 %), monto que aún debe aprobar la Cámara de Diputados. Cada entidad aporta, además, al menos el 25 % del monto federal con recursos propios.',
  reqTitle: 'El ciclo anual, paso a paso (fechas del ciclo 2026 como referencia)',
  askLabel: 'Qué tener listo: ',
  reqs: [
    { title: 'Diciembre: criterios del año', body: 'El Consejo Nacional aprueba los criterios de distribución y de ejercicio. Los de 2026 se aprobaron el 11 de diciembre de 2025 y se publicaron en el Diario Oficial el 27 de diciembre. Los de 2027 aún no se publican.', ask: 'Revise los Programas con Prioridad Nacional y los indicadores que pesan en la fórmula de distribución.' },
    { title: 'Del 1 al 15 de enero: proyectos de inversión', body: 'La entidad entrega sus proyectos de inversión. El Comité Técnico de Análisis y Validación dictamina su viabilidad técnica, y el SESNSP valora la alineación con los programas prioritarios, las metas medibles, la capacidad institucional y los precios y calidades de los bienes propuestos.', ask: 'Un proyecto con alcance, metas, integraciones y descripción técnica; para el 911, referido a la Norma Técnica 9-1-1.' },
    { title: 'Febrero: concertación y anexos técnicos', body: 'En 2026 la concertación con el SESNSP fue del 16 al 24 de febrero, y los convenios y anexos técnicos se firmaron el 24 de febrero.', ask: 'Metas y montos por subprograma (3.8.1, 3.8.2, 3.8.3) cerrados con el área técnica.' },
    { title: 'Marzo: montos por entidad', body: 'Hacienda publica en el Diario Oficial los montos y el calendario de pago por entidad (en 2026, el 20 de marzo). Los recursos se ministran mensualmente durante los primeros diez meses del año.', ask: 'El procedimiento de compra preparado para iniciar en cuanto lleguen los recursos.' },
    { title: 'Mayo a septiembre: reprogramaciones', body: 'Las reprogramaciones se solicitan de mayo al 30 de septiembre y no pueden exceder el 25 % del total convenido ni el 25 % de cada programa. Ejercer sin resolución favorable es un incumplimiento.', ask: 'Seguimiento mensual del avance para reprogramar a tiempo.' },
    { title: '31 de diciembre y primer trimestre: comprometer y pagar', body: 'Lo no comprometido al 31 de diciembre se reintegra a la Tesorería de la Federación. Lo comprometido o devengado debe pagarse a más tardar durante el primer trimestre del año siguiente.', ask: 'Contrato firmado antes de fin de año y entregas programadas antes del 31 de marzo.' },
  ],
  howTitle: 'Cómo puede apoyarle KabatOne',
  how: [
    'Atención de llamadas de emergencia y despacho en una sola plataforma: la llamada pasa del operador al despachador sin recapturar datos.',
    'Ubicación de quien llama generada automáticamente; incidente, unidades, cámaras y sensores en un solo mapa en vivo.',
    'AI Co-Pilot para operadores y despachadores: transcripción en vivo, guía por escenario y recomendación de unidades. El operador siempre decide.',
    'Despliegue en la nube, en sitio o híbrido.',
    'Con la confianza del C5 CDMX. Podemos acompañar a su equipo en la descripción técnica del proyecto de inversión.',
  ],
  faqTitle: 'Preguntas frecuentes',
  faqs: [
    { question: '¿Qué programas del FASP financian el 911 y el C5?', answer: 'El Eje 3, "Modernización y estandarización de la infraestructura tecnológica para la seguridad pública". Su programa 3.8, "Fortalecimiento tecnológico y operativo de los Centros de Comando y Control y las instituciones de seguridad pública", incluye 3.8.1 Sistemas tecnológicos para la atención de emergencias y denuncia anónima (911 y 089), 3.8.2 Red Nacional de Radiocomunicación y 3.8.3 Sistemas de identificación vehicular y videovigilancia urbana. Fuente: Acuerdos del Consejo Nacional de Seguridad Pública, Diario Oficial del 27 de diciembre de 2025.' },
    { question: '¿Por qué importan el abandono de llamadas al 911 y las cámaras activas?', answer: 'Desde 2026 la fórmula de distribución incluye criterios de desempeño institucional: la disponibilidad de cámaras de videovigilancia pesa 3.6 %, la de lectores de placas 2.4 % y el porcentaje de abandono de llamadas al 911 y 089 2.4 %. Un 911 con menos llamadas abandonadas y un C5 con más cámaras en operación influyen en el monto que recibe la entidad.' },
    { question: '¿Cuánto debe aportar el estado?', answer: 'Al menos el equivalente al 25 % del monto FASP asignado, con cargo a su propio presupuesto (criterios 2026, artículo 43), en una cuenta bancaria específica.' },
    { question: '¿Se puede financiar con FASP un CAD en la nube o por suscripción?', answer: 'Los criterios 2026 solo regulan expresamente el arrendamiento de vehículos, que debe ser arrendamiento financiero. No encontramos una regla explícita para tecnología por suscripción; conviene consultarlo con el área técnica del SESNSP al preparar el proyecto de inversión.' },
    { question: '¿Qué cambió con la nueva Ley General del Sistema Nacional de Seguridad Pública?', answer: 'La ley publicada el 16 de julio de 2025 define los Centros de Comando y Control (artículo 108), los sujeta a normas técnicas del SESNSP y a certificación (artículos 109 a 113), les pide compartir diariamente la base de datos de su sistema de gestión de incidentes (artículo 112) y faculta al SESNSP para revisar precios y calidades de los bienes en los proyectos de inversión (artículo 115).' },
  ],
  related: [
    { href: '/resources/norma-tecnica-911', label: 'Norma Técnica 9-1-1: requisitos del CAD' },
    { href: '/resources/anexo-tecnico-cad-911', label: 'Anexo técnico para licitar un CAD 911' },
    { href: '/resources/estadisticas-911-mexico-2026', label: 'Estadísticas del 911 en México 2026' },
    { href: '/resources/c5-command-centers-mexico-2026', label: 'Plataforma para C5' },
    { href: '/k-dispatch', label: 'K-Dispatch' },
  ],
  breadcrumb: 'FASP 2027 para el 911 y el C5',
  articleHeadline: 'FASP 2027 para el 911 y el C5: cómo planear la inversión en tecnología',
  articleDescription: 'Montos, programas prioritarios, calendario y reglas del FASP para financiar tecnología de 911 y Centros de Comando y Control en 2027, con fuentes oficiales.',
}

const EN: SegmentCopy = {
  ...ES,
  eyebrow: 'Guide for C5s and state executive secretariats',
  h1a: 'FASP 2027 for 911 and C5:',
  h1b: 'how to plan the technology investment',
  intro: 'Mexico’s Public Security Contribution Fund (FASP) is the main federal source for modernizing state 911 services and command and control centers. This guide summarizes, from official sources, how much is available, which programs fund technology, how the annual cycle runs and what your team should have ready for the investment project.',
  problemTitle: 'How FASP works',
  problem: 'FASP is a federal Ramo 33 contribution (Fiscal Coordination Law, articles 25, 44 and 45). The National Public Security Council sets the distribution and spending criteria every year, and SESNSP approves each state’s investment projects (General Law of the National Public Security System, articles 114 and 115). The 2026 federal budget approved MXN 9,951 million for the fund. For 2027 the draft budget proposes MXN 10,447.9 million (+4.99%), still subject to approval by the Chamber of Deputies. Each state also contributes at least 25% of the federal amount from its own budget.',
  reqTitle: 'The annual cycle, step by step (2026 dates as reference)',
  askLabel: 'Have ready: ',
  reqs: [
    { title: 'December: the year’s criteria', body: 'The National Council approves the distribution and spending criteria. The 2026 criteria were approved on 11 December 2025 and published in the Diario Oficial on 27 December. The 2027 criteria are not published yet.', ask: 'Review the national priority programs and the indicators weighted in the distribution formula.' },
    { title: '1–15 January: investment projects', body: 'The state submits its investment projects. The Technical Analysis and Validation Committee rules on technical viability, and SESNSP assesses alignment with priority programs, measurable goals, institutional capacity, and the prices and quality of the proposed goods.', ask: 'A project with scope, goals, integrations and a technical description; for 911, referenced to the Norma Técnica 9-1-1.' },
    { title: 'February: negotiation and technical annexes', body: 'In 2026 the negotiation with SESNSP ran 16–24 February, and agreements and technical annexes were signed on 24 February.', ask: 'Goals and amounts per subprogram (3.8.1, 3.8.2, 3.8.3) agreed with the technical area.' },
    { title: 'March: amounts per state', body: 'The finance ministry publishes each state’s amount and payment schedule in the Diario Oficial (20 March in 2026). Funds are transferred monthly during the first ten months of the year.', ask: 'A procurement process ready to start as soon as funds arrive.' },
    { title: 'May to September: reprogramming', body: 'Reprogramming requests run from May to 30 September and cannot exceed 25% of the agreed total or 25% of any program. Spending without a favorable resolution is non-compliance.', ask: 'Monthly progress tracking so you can reprogram in time.' },
    { title: '31 December and Q1: commit and pay', body: 'Funds not committed by 31 December go back to the federal treasury. Committed or accrued funds must be paid by the end of the first quarter of the following year.', ask: 'A contract signed before year-end and deliveries scheduled before 31 March.' },
  ],
  howTitle: 'How KabatOne can help',
  how: [
    'Emergency call handling and dispatch in one platform: the call moves from call taker to dispatcher without re-entry.',
    'Caller location generated automatically; incident, units, cameras and sensors on one live map.',
    'AI Co-Pilot for call takers and dispatchers: live transcription, scenario guidance and unit recommendations. The operator always decides.',
    'Cloud, on-premise or hybrid deployment.',
    'Trusted by C5 CDMX. We can support your team on the investment project’s technical description.',
  ],
  faqTitle: 'Frequently asked questions',
  faqs: [
    { question: 'Which FASP programs fund 911 and C5 technology?', answer: 'Axis 3, "Modernization and standardization of technology infrastructure for public security". Its program 3.8, "Technological and operational strengthening of command and control centers and public security institutions", includes 3.8.1 technology systems for emergency and anonymous-report calls (911 and 089), 3.8.2 the National Radio Communication Network, and 3.8.3 vehicle identification and urban video surveillance systems. Source: National Public Security Council agreements, Diario Oficial, 27 December 2025.' },
    { question: 'Why do 911 call abandonment and active cameras matter?', answer: 'Since 2026 the distribution formula includes institutional-performance criteria: video-surveillance camera availability weighs 3.6%, license-plate reader availability 2.4%, and the 911 and 089 call abandonment rate 2.4%. A 911 service with fewer abandoned calls and a C5 with more cameras in operation affect the amount the state receives.' },
    { question: 'How much must the state contribute?', answer: 'At least 25% of its FASP allocation from its own budget (2026 criteria, article 43), held in a dedicated bank account.' },
    { question: 'Can FASP fund a cloud or subscription CAD?', answer: 'The 2026 criteria only regulate vehicle leasing explicitly (it must be a finance lease). We found no explicit rule for subscription technology; check with SESNSP’s technical area when preparing the investment project.' },
    { question: 'What changed with the new General Law of the National Public Security System?', answer: 'The law published on 16 July 2025 defines command and control centers (article 108), subjects them to SESNSP technical standards and certification (articles 109 to 113), requires them to share their incident-management database daily (article 112), and empowers SESNSP to review the prices and quality of goods in investment projects (article 115).' },
  ],
  related: [
    { href: '/resources/norma-tecnica-911', label: 'Mexico’s 911 standard: CAD requirements' },
    { href: '/resources/anexo-tecnico-cad-911', label: '911 CAD tender technical annex' },
    { href: '/resources/estadisticas-911-mexico-2026', label: '911 statistics in Mexico 2026' },
    { href: '/resources/c5-command-centers-mexico-2026', label: 'C5 command center platform' },
    { href: '/k-dispatch', label: 'K-Dispatch' },
  ],
  breadcrumb: 'FASP 2027 for 911 and C5',
  articleHeadline: 'FASP 2027 for 911 and C5: how to plan the technology investment',
  articleDescription: 'Amounts, priority programs, calendar and rules of Mexico’s FASP fund for financing 911 and command-center technology in 2027, from official sources.',
}

export default async function Fasp2027Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'
  return <CadSegmentPage es={es} c={es ? ES : EN} />
}
