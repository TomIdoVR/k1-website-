import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Link } from '@/i18n/navigation'
import CadLeadForm from '@/components/CadLeadForm'

/* CAD inbound plan item #6. Spanish CAD-buyer search is near zero, but "norma técnica 911"
   / "norma técnica calle 911" have autocomplete demand and no page answered them (this URL
   was a 404). Every requirement below quotes or paraphrases the SESNSP's Norma Técnica 9-1-1
   v2.0 with its clause number. The page deliberately makes NO compliance claim for
   K-Dispatch: that section is added only after the clause matrix is validated by product
   (item #5). Hrefs are bare paths -- the locale-aware Link adds /es (see v2.420). */

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('normaTecnica911', locale)
}

const SOURCE = 'https://www.gob.mx/cms/uploads/attachment/file/895276/NT_CALLE_2023_II-2024_final.pdf'

type Req = { clause: string; es: string; en: string; askEs: string; askEn: string }
type Group = { titleEs: string; titleEn: string; items: Req[] }

const GROUPS: Group[] = [
  {
    titleEs: 'Plataforma y disponibilidad',
    titleEn: 'Platform and availability',
    items: [
      { clause: '4.2', es: 'Sistema de operación crítica sobre hardware y software de alta disponibilidad, con servidores, bases de datos y redes redundantes.', en: 'A mission-critical system on high-availability hardware and software, with redundant servers, databases and networks.', askEs: '¿Cómo es la arquitectura redundante, en sitio y en la nube?', askEn: 'What is the redundant architecture, on-premise and in the cloud?' },
      { clause: '4.2.1', es: 'La falla de un disco debe ser transparente para la operación.', en: 'A disk failure must be transparent to operation.', askEs: '¿Qué pasa con la operación si falla un disco?', askEn: 'What happens to operations if a disk fails?' },
      { clause: '4.2.2', es: 'Funcionar sobre un sistema operativo comercial o derivado de un desarrollo propio.', en: 'Run on a commercial operating system, or one derived from in-house development.', askEs: '¿Sobre qué sistemas operativos corre el servidor y las estaciones?', askEn: 'Which operating systems do the server and workstations run on?' },
      { clause: '4.2.3', es: 'Base de datos comercial no propietaria, que permita cambiar la estructura de las tablas sin interrumpir el sistema.', en: 'A commercial, non-proprietary database whose table structure can change without interrupting the system.', askEs: '¿Qué motor de base de datos usa y se puede modificar en operación?', askEn: 'Which database engine, and can its schema change while live?' },
      { clause: '4.2.4', es: 'Poder respaldarse aun estando en operación.', en: 'Can be backed up while in operation.', askEs: '¿Cómo y cada cuánto se respalda sin detener el servicio?', askEn: 'How and how often is it backed up without stopping service?' },
    ],
  },
  {
    titleEs: 'Integraciones que el CAD debe tener',
    titleEn: 'Integrations the CAD must have',
    items: [
      { clause: '4.2.5.1', es: 'Mapa gráfico integrado en línea con incidentes, puntos de videovigilancia y unidades con GPS.', en: 'A live integrated map showing incidents, video surveillance points and GPS units.', askEs: '¿El mismo mapa muestra incidentes, cámaras y unidades en tiempo real?', askEn: 'Does one map show incidents, cameras and units in real time?' },
      { clause: '4.2.5.2', es: 'Integración con el conmutador telefónico por CTI, preparado para recibir ANI y ALI.', en: 'CTI integration with the phone switch, ready to accept ANI and ALI.', askEs: '¿Con qué conmutadores se integra y cómo recibe número y ubicación?', askEn: 'Which phone switches does it integrate with, and how does it receive number and location?' },
      { clause: '4.2.5.3', es: 'Integración con el sistema de grabación de voz.', en: 'Integration with the voice recording system.', askEs: '¿La grabación queda ligada al incidente?', askEn: 'Is the recording linked to the incident?' },
      { clause: '4.2.5.4', es: 'Integración con el sistema de localización vehicular (AVL).', en: 'Integration with automatic vehicle location (AVL).', askEs: '¿Qué AVL soporta y con qué frecuencia actualiza posiciones?', askEn: 'Which AVL systems, and how often do positions update?' },
      { clause: '4.2.5.5', es: 'Integración con el sistema de videovigilancia.', en: 'Integration with the video surveillance system.', askEs: '¿Con qué VMS se integra y abre la cámara desde el incidente?', askEn: 'Which VMS platforms, and can operators open a camera from the incident?' },
      { clause: '4.2.5.6', es: 'Interfaces para intercambiar información con otros sistemas CAD y con las bases de datos del IPH.', en: 'Interfaces to exchange information with other CAD systems and with the IPH (police report) databases.', askEs: '¿Cómo intercambia datos con otro CAD y con el IPH?', askEn: 'How does it exchange data with another CAD and with the IPH?' },
      { clause: '4.2.5.7', es: 'Ver las emergencias en teléfonos inteligentes o tabletas, con su ubicación en un mapa.', en: 'Emergencies visible on smartphones or tablets, with their location on a map.', askEs: '¿Qué ve la unidad en campo en su dispositivo?', askEn: 'What does the field unit see on its device?' },
      { clause: '4.2.5.8', es: 'Almacenar la información con la nomenclatura del Catálogo Nacional de Incidentes de Emergencia vigente.', en: 'Store information using the current National Catalogue of Emergency Incidents (CNIE) nomenclature.', askEs: '¿Clasifica de forma nativa con el catálogo nacional vigente?', askEn: 'Does it classify natively with the current national catalogue?' },
      { clause: '4.2.5.9', es: 'Apoyo al operador para dar primeros auxilios por teléfono, con los protocolos emitidos por el SESNSP.', en: 'Support for operators giving telephone first aid, using the SESNSP-issued protocols.', askEs: '¿Incluye los protocolos de primeros auxilios del SESNSP?', askEn: 'Does it include the SESNSP first-aid protocols?' },
      { clause: '4.2.5.10', es: 'Conexión con los arcos carreteros.', en: 'Connection to highway arches (licence-plate reading).', askEs: '¿Recibe alertas de los arcos carreteros en el incidente?', askEn: 'Does it receive highway-arch alerts into the incident?' },
    ],
  },
  {
    titleEs: 'Apoyo a la toma de decisiones',
    titleEn: 'Decision support',
    items: [
      { clause: '4.2.6', es: 'Funcionalidades que mejoren los tiempos de respuesta integrando plataformas de apoyo e información para decidir en tiempo real.', en: 'Features that improve response times by integrating support platforms and information for real-time decisions.', askEs: '¿Qué recomienda el sistema al operador y quién decide?', askEn: 'What does the system recommend to the operator, and who decides?' },
    ],
  },
  {
    titleEs: 'Sistema de información geográfica (GIS)',
    titleEn: 'Geographic information system (GIS)',
    items: [
      { clause: '4.8.1', es: 'Un GIS vinculado o integrado al CAD.', en: 'A GIS linked to or integrated with the CAD.', askEs: '¿El GIS es parte del CAD o un sistema aparte?', askEn: 'Is the GIS part of the CAD or a separate system?' },
      { clause: '4.8.2', es: 'Plataforma vectorial o cartografía web en tiempo real.', en: 'A vector platform or real-time web mapping.', askEs: '¿Qué cartografía usa y quién la actualiza?', askEn: 'Which mapping does it use, and who updates it?' },
      { clause: '4.8.5', es: 'Capas mínimas: entidad federativa, municipio, colonias, calles y sitios de interés.', en: 'Minimum layers: state, municipality, neighbourhoods (colonias), streets and points of interest.', askEs: '¿Incluye las capas hasta colonia?', askEn: 'Does it include layers down to colonia level?' },
      { clause: '4.8.6', es: 'Datos compatibles con formatos estándar como SHP, KML, TAB, DXF o GML.', en: 'Data compatible with standard formats such as SHP, KML, TAB, DXF or GML.', askEs: '¿Qué formatos importa y exporta?', askEn: 'Which formats does it import and export?' },
      { clause: '4.8.7', es: 'Búsqueda por dirección con campos específicos.', en: 'Search by address with specific fields.', askEs: '¿Cómo busca una dirección mexicana incompleta?', askEn: 'How does it search an incomplete Mexican address?' },
      { clause: '4.8.8', es: 'Generar mapas temáticos a medida.', en: 'Generate custom thematic maps.', askEs: '¿Puede generar mapas de calor por tipo de incidente?', askEn: 'Can it produce heat maps by incident type?' },
    ],
  },
]

export default async function NormaTecnica911Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#06b6d4'
  const total = GROUPS.reduce((n, g) => n + g.items.length, 0)

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: 'https://kabatone.com' + (es ? '/es' : '/') },
    { name: es ? 'Recursos' : 'Resources', url: 'https://kabatone.com' + (es ? '/es/resources' : '/resources') },
    { name: es ? 'Norma Técnica 9-1-1' : 'Mexico 911 Technical Standard', url: 'https://kabatone.com' + (es ? '/es/resources/norma-tecnica-911' : '/resources/norma-tecnica-911') },
  ]

  const faqs = es ? [
    { question: '¿Qué es la Norma Técnica 9-1-1?', answer: 'Es la Norma Técnica para la Estandarización de los Servicios de Llamadas de Emergencia a través del Número Único Armonizado 9-1-1, emitida por el Centro Nacional de Información del Secretariado Ejecutivo del Sistema Nacional de Seguridad Pública (SESNSP). La versión vigente es la 2.0. Busca que los Centros de Atención de Llamadas de Emergencia (CALLE) operen y se organicen de forma homogénea.' },
    { question: '¿A quién aplica la Norma Técnica 9-1-1?', answer: 'A los Centros de Atención de Llamadas de Emergencia de los órdenes estatal y municipal. Establece parámetros de organización, infraestructura, tecnología, recursos humanos, operación, evaluación y normatividad.' },
    { question: '¿Qué exige la Norma Técnica 9-1-1 al sistema CAD?', answer: 'La sección 4.2 pide un CAD de alta disponibilidad con base de datos comercial no propietaria, respaldo en operación y, entre otras, integración con el conmutador telefónico (CTI con ANI y ALI), grabación de voz, AVL, videovigilancia, otros CAD y el IPH, visualización en dispositivos móviles, clasificación con el Catálogo Nacional de Incidentes de Emergencia, primeros auxilios por teléfono, arcos carreteros y apoyo a la toma de decisiones. La sección 4.8 exige un GIS vinculado o integrado al CAD.' },
    { question: '¿Cuáles son los tiempos de respuesta que fija la Norma?', answer: 'La sección 7.3.1 establece que el tiempo promedio de recepción no sea mayor de 90 segundos, el tiempo promedio de despacho no sea mayor de 90 segundos y el tiempo de arribo no sea mayor de diez minutos en zonas urbanas, contado desde que se asigna la unidad.' },
    { question: '¿La Norma aplica también a un CAD desarrollado por el propio centro?', answer: 'Sí. El punto 4.2.24 señala que en las entidades se usan CAD adquiridos a empresas especializadas y otros desarrollados por los propios CALLE, y que en cualquier caso deben cumplir los requerimientos mínimos.' },
  ] : [
    { question: "What is Mexico's Norma Técnica 9-1-1?", answer: "It is the technical standard for emergency call services through Mexico's single 9-1-1 number, issued by the National Information Center of the Executive Secretariat of the National Public Security System (SESNSP). The current version is 2.0. Its goal is for emergency call centers (CALLE) to operate and organize consistently." },
    { question: 'Who does the Norma Técnica 9-1-1 apply to?', answer: 'State and municipal emergency call centers (CALLE). It sets parameters for organization, infrastructure, technology, staffing, operation, evaluation and regulation.' },
    { question: 'What does the Norma Técnica 9-1-1 require of a CAD system?', answer: 'Section 4.2 requires a high-availability CAD with a commercial non-proprietary database and live backup, and integration with the phone switch (CTI with ANI and ALI), voice recording, AVL, video surveillance, other CADs and the IPH, mobile viewing, coding with the National Catalogue of Emergency Incidents, telephone first aid, highway arches and decision support, among others. Section 4.8 requires a GIS linked to or integrated with the CAD.' },
    { question: 'What response times does the standard set?', answer: 'Section 7.3.1 sets an average reception time of no more than 90 seconds, an average dispatch time of no more than 90 seconds, and an arrival time of no more than ten minutes in urban areas, counted from when the unit is assigned.' },
    { question: 'Does the standard apply to a CAD built in-house?', answer: 'Yes. Clause 4.2.24 notes that states use CADs bought from specialist vendors and others built by the call centers themselves, and that either way they must meet the minimum requirements.' },
  ]

  const article = articleSchema(
    es ? 'Norma Técnica 9-1-1: requisitos para el sistema CAD' : "Mexico's 911 Technical Standard: CAD requirements",
    es ? 'Lista de verificación de los requisitos que la Norma Técnica 9-1-1 v2.0 del SESNSP exige al CAD y al GIS de un centro 911, con el número de cláusula y la pregunta para cada proveedor.' : "Checklist of what the SESNSP's Norma Técnica 9-1-1 v2.0 requires of a 911 center's CAD and GIS, with clause numbers and the question to ask each vendor.",
    'https://kabatone.com' + (es ? '/es/resources/norma-tecnica-911' : '/resources/norma-tecnica-911'),
    '2026-10-29'
  )

  const card = { background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border, rgba(255,255,255,0.1))', borderRadius: 10, padding: '18px 20px' } as const

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <Nav />
      <main style={{ background: 'var(--bg)', color: 'var(--white)', fontFamily: 'var(--font-space-grotesk)' }}>

        <section style={{ padding: '80px 24px 48px', maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.3)', borderRadius: 6, padding: '4px 14px', fontSize: 12, color: ACCENT, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            {es ? 'Guía para centros 911 y C5' : 'Guide for 911 centers and C5s'}
          </div>
          <h1 style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(36px, 6vw, 58px)', fontWeight: 700, lineHeight: 1.08, marginBottom: 20 }}>
            {es ? <>Norma Técnica 9-1-1: <span style={{ color: ACCENT }}>lo que exige al CAD</span></> : <>Mexico&apos;s 911 standard: <span style={{ color: ACCENT }}>what it requires of a CAD</span></>}
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 19px)', color: '#94a3b8', lineHeight: 1.7, maxWidth: 760 }}>
            {es
              ? `La Norma Técnica 9-1-1 v2.0 del SESNSP fija los requisitos mínimos del sistema de despacho asistido por computadora (CAD) y del GIS de todo centro de atención de llamadas de emergencia estatal o municipal. Esta lista reúne los ${total} requisitos de software, cada uno con su cláusula y la pregunta que conviene hacer a cada proveedor al preparar el anexo técnico.`
              : `The SESNSP's Norma Técnica 9-1-1 v2.0 sets the minimum requirements for the computer-aided dispatch (CAD) system and GIS of every state and municipal emergency call center in Mexico. This list gathers its ${total} software requirements, each with its clause number and the question to put to every vendor when drafting a tender's technical annex.`}
          </p>
        </section>

        <section style={{ padding: '0 24px 40px', maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <h2 style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 30, fontWeight: 700 }}>{es ? '¿Qué es la Norma Técnica 9-1-1?' : 'What is the Norma Técnica 9-1-1?'}</h2>
          <p style={{ color: '#cbd5e1', lineHeight: 1.75 }}>
            {es
              ? 'Su nombre completo es Norma Técnica para la Estandarización de los Servicios de Llamadas de Emergencia a través del Número Único Armonizado 9-1-1. La emite el Centro Nacional de Información del SESNSP y su objetivo es que los Centros de Atención de Llamadas de Emergencia (CALLE) operen y se organicen de forma homogénea. Aplica a los centros de los órdenes estatal y municipal, y cubre siete aspectos: organización operativa, infraestructura, tecnología, recursos humanos, operación protocolizada, mecanismos de evaluación y coordinación interinstitucional.'
              : "Its full name is the technical standard for emergency call services through Mexico's single harmonized 9-1-1 number. It is issued by the SESNSP's National Information Center, and its goal is for emergency call centers (CALLE) to operate and organize consistently. It applies to state and municipal centers and covers seven aspects: operational organization, infrastructure, technology, staffing, protocol-based operation, evaluation and inter-institutional coordination."}
          </p>
          <p style={{ color: '#94a3b8', fontSize: 14 }}>
            {es ? 'Fuente: ' : 'Source: '}<a href={SOURCE} target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>{es ? 'Norma Técnica 9-1-1 v2.0 (PDF, gob.mx)' : 'Norma Técnica 9-1-1 v2.0 (PDF, gob.mx)'}</a>
          </p>
        </section>

        <section style={{ padding: '0 24px 48px', maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 28 }}>
          <h2 style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 30, fontWeight: 700 }}>{es ? 'Requisitos del CAD y del GIS, cláusula por cláusula' : 'CAD and GIS requirements, clause by clause'}</h2>
          {GROUPS.map((g) => (
            <div key={g.titleEn} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: ACCENT }}>{es ? g.titleEs : g.titleEn}</h3>
              {g.items.map((r) => (
                <div key={r.clause} style={{ ...card, display: 'grid', gridTemplateColumns: '5.2em minmax(0,1fr)', gap: '4px 14px' }}>
                  <span style={{ fontFamily: 'DM Mono, monospace', fontSize: 13, color: '#94a3b8', paddingTop: 2 }}>{r.clause}</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
                    <span style={{ lineHeight: 1.6 }}>{es ? r.es : r.en}</span>
                    <span style={{ fontSize: 14, color: '#94a3b8' }}><strong style={{ color: '#cbd5e1' }}>{es ? 'Pregunta al proveedor: ' : 'Ask the vendor: '}</strong>{es ? r.askEs : r.askEn}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
          <p style={{ color: '#94a3b8', fontSize: 14, lineHeight: 1.7 }}>
            {es
              ? 'Las cláusulas 4.2.7 a 4.2.23 describen la infraestructura del propio centro (líneas E1 y SIP, conmutador con ACD, tarificador, grabación digital, servidores, monitores, radios, cableado, energía) y no el software del CAD.'
              : "Clauses 4.2.7 to 4.2.23 describe the center's own infrastructure (E1 and SIP lines, a PBX with ACD, call costing, digital recording, servers, monitors, radios, cabling, power), not the CAD software."}
          </p>
        </section>

        <section style={{ padding: '0 24px 48px', maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <h2 style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 30, fontWeight: 700 }}>{es ? 'Los tiempos que el CAD debe medir' : 'The times the CAD must measure'}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 12 }}>
            {[
              { v: '≤ 90 s', l: es ? 'Tiempo promedio de recepción (7.3.1.1)' : 'Average reception time (7.3.1.1)' },
              { v: '≤ 90 s', l: es ? 'Tiempo promedio de despacho (7.3.1.2)' : 'Average dispatch time (7.3.1.2)' },
              { v: '≤ 10 min', l: es ? 'Tiempo de arribo en zona urbana, desde la asignación (7.3.1.3)' : 'Urban arrival time, from unit assignment (7.3.1.3)' },
            ].map((k) => (
              <div key={k.l} style={card}>
                <div style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 34, fontWeight: 700, color: ACCENT }}>{k.v}</div>
                <div style={{ color: '#cbd5e1', fontSize: 14, lineHeight: 1.5 }}>{k.l}</div>
              </div>
            ))}
          </div>
          <p style={{ color: '#cbd5e1', lineHeight: 1.75 }}>
            {es
              ? 'Para demostrar estos tiempos, el CAD debe registrar con hora cada etapa de la llamada: recepción, captura del incidente, asignación y arribo de la unidad. Al evaluar un sistema, pida ver el reporte de tiempos por etapa, no solo el total.'
              : 'To prove these times, the CAD has to timestamp each stage of the call: reception, incident capture, unit assignment and arrival. When evaluating a system, ask to see the per-stage time report, not just the total.'}
          </p>
        </section>

        <section style={{ padding: '0 24px 48px', maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <h2 style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 30, fontWeight: 700 }}>{es ? 'También aplica al CAD hecho en casa' : 'It applies to in-house CADs too'}</h2>
          <p style={{ color: '#cbd5e1', lineHeight: 1.75 }}>
            {es
              ? 'El punto 4.2.24 reconoce que en los estados conviven CAD comprados a empresas especializadas y CAD desarrollados por los propios centros, y deja claro que todos deben cumplir los requisitos mínimos. Si su centro opera un sistema propio, esta lista sirve para identificar qué integraciones faltan antes de la próxima evaluación o del siguiente ejercicio del FASP.'
              : "Clause 4.2.24 recognizes that states run both CADs bought from specialist vendors and CADs built by the centers themselves, and makes clear that all of them must meet the minimum requirements. If your center runs its own system, this list shows which integrations are missing before the next evaluation or the next FASP budget cycle."}
          </p>
        </section>

        <section style={{ padding: '0 24px 56px', maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
          <h2 style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 30, fontWeight: 700 }}>{es ? 'Preguntas frecuentes' : 'Frequently asked questions'}</h2>
          {faqs.map((f) => (
            <div key={f.question} style={card}>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{f.question}</h3>
              <p style={{ color: '#cbd5e1', lineHeight: 1.7 }}>{f.answer}</p>
            </div>
          ))}
        </section>

        <section style={{ padding: '0 24px 56px', maxWidth: 900, margin: '0 auto' }}>
          <div style={{ ...card, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h2 style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 26, fontWeight: 700 }}>{es ? '¿Está preparando el anexo técnico de su CAD?' : 'Drafting your CAD technical annex?'}</h2>
            <p style={{ color: '#cbd5e1', lineHeight: 1.7 }}>
              {es
                ? 'K-Dispatch reúne la atención de llamadas de emergencia y el despacho en una sola plataforma, con mapa, video y AI Co-Pilot para el operador. Nuestro equipo puede revisar con usted esta lista frente a su operación actual.'
                : 'K-Dispatch brings emergency call handling and dispatch into one platform, with map, video and an AI Co-Pilot for the operator. Our team can walk through this list against your current operation with you.'}
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#contacto" style={{ background: ACCENT, color: '#0f1724', padding: '12px 24px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>
                {es ? 'Solicitar una revisión' : 'Request a review'}
              </a>
              <Link href="/k-dispatch" style={{ border: `1px solid ${ACCENT}`, color: ACCENT, padding: '12px 24px', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>
                {es ? 'Conocer K-Dispatch' : 'See K-Dispatch'}
              </Link>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 24, fontSize: 14 }}>
            {[
              { href: '/resources/que-es-un-c5', label: es ? '¿Qué es un C5?' : 'What is a C5?' },
              { href: '/resources/how-c5-command-centers-work', label: es ? 'Cómo funcionan los centros C5' : 'How C5 command centers work' },
              { href: '/resources/what-is-cad-dispatch-software', label: es ? '¿Qué es el software CAD?' : 'What is CAD dispatch software?' },
              { href: '/resources/cad-software-municipios-mexico', label: es ? 'Software CAD para municipios de México' : 'CAD software for Mexican municipalities' },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ color: ACCENT, textDecoration: 'none', borderBottom: `1px solid ${ACCENT}40` }}>{l.label}</Link>
            ))}
          </div>
        </section>

        <CadLeadForm es={es} source="norma-911" />
      </main>
      <Footer es={es} />
    </>
  )
}
