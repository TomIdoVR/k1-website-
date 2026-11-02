import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import CadSegmentPage, { type SegmentCopy } from '@/components/CadSegmentPage'

/* CAD plan item #7 (the public guide; the downloadable template follows once Daniel
   validates it). GEO block E baseline (29 Oct 2026): "¿Qué debe incluir el anexo técnico de
   una licitación de sistema CAD 911?" was the weakest Spanish buyer question -- KabatOne
   absent or only a source on every engine. Section wording builds on the Norma Técnica
   9-1-1 v2.0 clauses (see /resources/norma-tecnica-911). Procurement facts: new LAASSP in
   force 17 Apr 2025; Compras MX replaced CompraNet 18 Apr 2025 (research notes,
   mexico_buyers_procurement.md). Requirements are written vendor-neutral on purpose. */

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('anexoTecnicoCad911', locale)
}

const HOW_ES = [
  'Atención de llamadas de emergencia y despacho en una sola plataforma: la llamada pasa del operador al despachador sin recapturar datos.',
  'Ubicación de quien llama generada automáticamente; incidente, unidades, cámaras y sensores en un solo mapa en vivo.',
  'AI Co-Pilot para operadores y despachadores: transcripción en vivo, guía por escenario y recomendación de unidades. El operador siempre decide.',
  'Despliegue en la nube, en sitio o híbrido, con operación en paralelo durante la transición.',
  'Con la confianza del C5 CDMX. Podemos acompañar a su equipo con una demostración sobre sus propios escenarios.',
]
const HOW_EN = [
  'Emergency call handling and dispatch in one platform: the call moves from call taker to dispatcher without re-entry.',
  'Caller location generated automatically; incident, units, cameras and sensors on one live map.',
  'AI Co-Pilot for call takers and dispatchers: live transcription, scenario guidance and unit recommendations. The operator always decides.',
  'Cloud, on-premise or hybrid deployment, with parallel operation during the transition.',
  'Trusted by C5 CDMX. We can support your team with a demonstration on your own scenarios.',
]

const ES: SegmentCopy = {
  slug: 'anexo-tecnico-cad-911',
  source: 'anexo-tecnico',
  eyebrow: 'Guía para licitaciones 911 y C5',
  h1a: 'Anexo técnico para licitar un CAD 911:',
  h1b: 'qué debe incluir',
  intro: 'El anexo técnico decide qué sistema de despacho asistido por computadora (CAD) comprará su centro 911 o C5 y si podrá exigirlo después. Esta guía reúne las secciones que conviene incluir, con un ejemplo de redacción para cada una, alineado a la Norma Técnica 9-1-1 v2.0 del SESNSP.',
  problemTitle: 'Por qué el anexo técnico es la parte que más pesa',
  problem: 'Un anexo vago permite ofertas que cumplen en el papel y fallan en la operación; uno escrito alrededor de una marca limita la competencia y se presta a inconformidades. Desde abril de 2025 las compras federales se rigen por la nueva Ley de Adquisiciones, Arrendamientos y Servicios del Sector Público (LAASSP) y se publican en Compras MX, que sustituyó a CompraNet; los estados y municipios aplican sus propias leyes y portales. En todos los casos, lo que protege al centro es un anexo que describa funciones medibles, no productos.',
  reqTitle: 'Las secciones que debe tener',
  askLabel: 'Ejemplo de redacción: ',
  reqs: [
    { title: '1. Objeto y alcance', body: 'Qué centro o centros, cuántas posiciones de recepción y despacho, qué corporaciones despachan desde el sistema (policía, bomberos, servicios médicos, protección civil) y en qué horario opera.', ask: '“El sistema deberá operar 24/7 para N posiciones de recepción y N de despacho, con usuarios de policía, bomberos y servicios médicos en un mismo registro de incidente.”' },
    { title: '2. Requisitos funcionales del CAD', body: 'Los mínimos de la sección 4.2 de la Norma Técnica 9-1-1: mapa integrado con incidentes, cámaras y unidades GPS; visualización en dispositivos móviles; apoyo a la toma de decisiones.', ask: '“El CAD deberá cumplir los requisitos mínimos de la sección 4.2 de la Norma Técnica 9-1-1 v2.0, lo que el licitante acreditará cláusula por cláusula.”' },
    { title: '3. Integraciones con lo que ya opera', body: 'Liste los sistemas existentes que el CAD debe conectar: conmutador por CTI con ANI y ALI, grabación de voz, AVL, videovigilancia, radio (P25, TETRA o DMR), otros CAD y el IPH.', ask: '“El licitante describirá cómo integra cada sistema del Anexo A, indicando si la integración ya opera en otro centro.”' },
    { title: '4. Catálogo Nacional de Incidentes', body: 'La cláusula 4.2.5.8 exige registrar la información con la nomenclatura del Catálogo Nacional de Incidentes de Emergencia vigente.', ask: '“El CAD deberá clasificar los incidentes de forma nativa con el Catálogo Nacional de Incidentes de Emergencia vigente y actualizarse cuando el catálogo cambie.”' },
    { title: '5. Plataforma y disponibilidad', body: 'Alta disponibilidad con redundancia, falla de disco transparente, base de datos comercial no propietaria y respaldo sin detener la operación (4.2 a 4.2.4).', ask: '“El licitante presentará la arquitectura redundante propuesta y el procedimiento de respaldo en operación.”' },
    { title: '6. Sistema de información geográfica', body: 'GIS vinculado o integrado al CAD, con capas hasta colonia, formatos estándar (SHP, KML, TAB, DXF o GML) y búsqueda por dirección (4.8).', ask: '“La cartografía deberá incluir capas de entidad, municipio, colonias, calles y sitios de interés, e importar los formatos de la cláusula 4.8.6.”' },
    { title: '7. Indicadores y reportes', body: 'El CAD debe medir lo que la Norma pide evaluar: tiempo de recepción y de despacho de 90 segundos promedio y arribo urbano de 10 minutos (7.3.1).', ask: '“El sistema registrará con hora cada etapa y generará reportes de tiempos por incidente, turno y corporación.”' },
    { title: '8. Despliegue y alojamiento de datos', body: 'Defina si acepta nube, sitio o esquema híbrido, y dónde deben residir los datos.', ask: '“El licitante indicará el modelo de despliegue y la ubicación de los datos, conforme a la política de seguridad de la institución.”' },
    { title: '9. Migración y operación en paralelo', body: 'El cambio de CAD es el momento de mayor riesgo. Pida un plan por fases con el sistema actual funcionando hasta el corte.', ask: '“El plan de implementación incluirá operación en paralelo y criterios de corte acordados con la institución.”' },
    { title: '10. Capacitación, soporte y niveles de servicio', body: 'Capacitación por perfil (operador, despachador, supervisor, administrador), soporte 24/7 y tiempos de atención por severidad.', ask: '“El licitante definirá tiempos de respuesta y solución por nivel de severidad y penalizaciones por incumplimiento.”' },
    { title: '11. Seguridad de la información', body: 'Control de accesos por rol, bitácora de auditoría, cifrado y continuidad, en línea con la política de ciberseguridad del centro.', ask: '“El sistema mantendrá bitácora inalterable de cada acción de usuario.”' },
    { title: '12. Pruebas de aceptación y demostración', body: 'Pida una demostración con escenarios reales del centro y pruebas de aceptación antes de la entrada en operación.', ask: '“El licitante demostrará en sesión técnica la atención y despacho de los escenarios del Anexo B.”' },
  ],
  howTitle: 'Cómo puede apoyarle KabatOne',
  how: HOW_ES,
  faqTitle: 'Preguntas frecuentes',
  faqs: [
    { question: '¿Qué es el anexo técnico de una licitación?', answer: 'Es la parte de las bases donde la institución describe lo que necesita: alcance, requisitos funcionales y técnicos, integraciones, niveles de servicio y la forma de acreditar el cumplimiento. Es el documento contra el que se evalúan las propuestas y se exige después el contrato.' },
    { question: '¿Qué ley rige la compra de un CAD 911?', answer: 'Para el gobierno federal, la Ley de Adquisiciones, Arrendamientos y Servicios del Sector Público (LAASSP) vigente desde el 17 de abril de 2025, con procedimientos publicados en Compras MX. Los estados y municipios aplican su propia ley de adquisiciones y sus portales.' },
    { question: '¿El anexo técnico debe citar la Norma Técnica 9-1-1?', answer: 'Es recomendable. La Norma Técnica 9-1-1 v2.0 del SESNSP fija los requisitos mínimos del CAD y del GIS de todo centro estatal o municipal, de modo que citar sus cláusulas da un estándar objetivo para comparar propuestas.' },
    { question: '¿Cómo evitar un anexo que favorezca a un solo proveedor?', answer: 'Describa funciones y resultados medibles, no marcas ni características exclusivas; pida que cada licitante acredite el cumplimiento cláusula por cláusula y con una demostración sobre sus propios escenarios.' },
  ],
  related: [
    { href: '/resources/norma-tecnica-911', label: 'Norma Técnica 9-1-1: requisitos del CAD' },
    { href: '/resources/police-cad-software', label: 'Software CAD para policía' },
    { href: '/resources/fire-ems-dispatch-software', label: 'Despacho para bomberos y ambulancias' },
    { href: '/resources/cad-software-municipios-mexico', label: 'Software CAD para municipios de México' },
  ],
  breadcrumb: 'Anexo técnico para un CAD 911',
  articleHeadline: 'Anexo técnico para licitar un CAD 911: qué debe incluir',
  articleDescription: 'Las secciones que debe tener el anexo técnico de una licitación de sistema CAD 911 o C5 en México, con un ejemplo de redacción para cada una y alineadas a la Norma Técnica 9-1-1.',
}

const EN: SegmentCopy = {
  slug: 'anexo-tecnico-cad-911',
  source: 'anexo-tecnico',
  eyebrow: 'Guide for 911 tenders in Mexico',
  h1a: 'Writing the technical annex for a 911 CAD tender:',
  h1b: 'what to include',
  intro: 'In a Mexican public tender, the technical annex (anexo técnico) decides which computer-aided dispatch (CAD) system a 911 center or C5 buys, and whether it can hold the vendor to it later. This guide lists the sections to include, with sample wording for each, aligned with the SESNSP’s Norma Técnica 9-1-1 v2.0.',
  problemTitle: 'Why the technical annex matters most',
  problem: 'A vague annex lets bids comply on paper and fail in operation; one written around a brand narrows competition and invites challenges. Since April 2025, federal purchases follow the new public procurement law (LAASSP) and are published on Compras MX, which replaced CompraNet; states and municipalities apply their own laws and portals. Either way, what protects the center is an annex that describes measurable functions, not products.',
  reqTitle: 'The sections it should have',
  askLabel: 'Sample wording: ',
  reqs: ES.reqs.map((r, i) => ({
    title: ['1. Purpose and scope', '2. CAD functional requirements', '3. Integrations with existing systems', '4. National incident catalogue', '5. Platform and availability', '6. Geographic information system', '7. Indicators and reports', '8. Deployment and data hosting', '9. Migration and parallel operation', '10. Training, support and service levels', '11. Information security', '12. Acceptance tests and demonstration'][i],
    body: [
      'Which center or centers, how many call-taking and dispatch positions, which agencies dispatch from the system (police, fire, EMS, civil protection) and its hours of operation.',
      'The minimums in section 4.2 of the Norma Técnica 9-1-1: an integrated map with incidents, cameras and GPS units; mobile viewing; decision support.',
      'List the existing systems the CAD must connect to: the phone switch via CTI with ANI and ALI, voice recording, AVL, video surveillance, radio (P25, TETRA or DMR), other CADs and the IPH police report system.',
      'Clause 4.2.5.8 requires information to be stored using the current National Catalogue of Emergency Incidents (CNIE).',
      'High availability with redundancy, transparent disk failure, a commercial non-proprietary database and backup without stopping operation (4.2 to 4.2.4).',
      'A GIS linked to or integrated with the CAD, with layers down to neighbourhood, standard formats (SHP, KML, TAB, DXF or GML) and address search (4.8).',
      'The CAD must measure what the Norma evaluates: average reception and dispatch times of 90 seconds and urban arrival within 10 minutes (7.3.1).',
      'State whether cloud, on-premise or hybrid is acceptable, and where data must reside.',
      'Replacing a CAD is the riskiest moment. Require a phased plan with the current system running until cut-over.',
      'Training by role (call taker, dispatcher, supervisor, administrator), 24/7 support and response times by severity.',
      'Role-based access, an audit log, encryption and continuity, in line with the center’s cybersecurity policy.',
      'Require a demonstration on the center’s real scenarios and acceptance tests before go-live.',
    ][i],
    ask: [
      '“The system shall operate 24/7 for N call-taking and N dispatch positions, with police, fire and EMS users on one incident record.”',
      '“The CAD shall meet the minimum requirements of section 4.2 of the Norma Técnica 9-1-1 v2.0, which the bidder shall demonstrate clause by clause.”',
      '“The bidder shall describe how it integrates each system in Annex A, stating whether the integration already runs at another center.”',
      '“The CAD shall classify incidents natively with the current national catalogue and be updated when the catalogue changes.”',
      '“The bidder shall present the proposed redundant architecture and its live backup procedure.”',
      '“Mapping shall include state, municipality, neighbourhood, street and point-of-interest layers and import the formats in clause 4.8.6.”',
      '“The system shall timestamp each stage and report times per incident, shift and agency.”',
      '“The bidder shall state the deployment model and data location, in line with the institution’s security policy.”',
      '“The implementation plan shall include parallel operation and cut-over criteria agreed with the institution.”',
      '“The bidder shall define response and resolution times by severity and penalties for non-compliance.”',
      '“The system shall keep a tamper-proof log of every user action.”',
      '“In a technical session, the bidder shall demonstrate call handling and dispatch of the scenarios in Annex B.”',
    ][i],
  })),
  howTitle: 'How KabatOne can help',
  how: HOW_EN,
  faqTitle: 'Frequently asked questions',
  faqs: [
    { question: 'What is a technical annex in a Mexican tender?', answer: 'It is the part of the tender documents where the institution describes what it needs: scope, functional and technical requirements, integrations, service levels and how compliance must be shown. Bids are evaluated against it and the contract is enforced by it.' },
    { question: 'Which law governs buying a 911 CAD in Mexico?', answer: 'For the federal government, the public procurement law (LAASSP) in force since 17 April 2025, with procedures published on Compras MX. States and municipalities apply their own procurement laws and portals.' },
    { question: 'Should the annex cite the Norma Técnica 9-1-1?', answer: 'It is advisable. The SESNSP’s Norma Técnica 9-1-1 v2.0 sets the minimum CAD and GIS requirements for every state and municipal center, so citing its clauses gives an objective standard for comparing bids.' },
    { question: 'How do you avoid an annex that favors one vendor?', answer: 'Describe measurable functions and outcomes, not brands or exclusive features, and require each bidder to show compliance clause by clause and in a demonstration on your own scenarios.' },
  ],
  related: [
    { href: '/resources/norma-tecnica-911', label: "Mexico's 911 standard: CAD requirements" },
    { href: '/resources/police-cad-software', label: 'Police CAD software' },
    { href: '/resources/fire-ems-dispatch-software', label: 'Fire and EMS dispatch software' },
    { href: '/resources/best-cad-dispatch-software', label: 'Best CAD dispatch software' },
  ],
  breadcrumb: 'CAD technical annex for 911 tenders',
  articleHeadline: 'Writing the technical annex for a 911 CAD tender: what to include',
  articleDescription: 'The sections a Mexican 911 or C5 CAD tender annex should include, with sample wording for each, aligned with the Norma Técnica 9-1-1.',
}

export default async function AnexoTecnicoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'
  return <CadSegmentPage es={es} c={es ? ES : EN} />
}
