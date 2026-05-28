import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { Link } from '@/i18n/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareGuatemala', locale)
}

export default async function PublicSafetySoftwareGuatemalaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-guatemala/`
    : `${baseUrl}/resources/public-safety-software-guatemala/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Publica — Guatemala' : 'Public Safety Software — Guatemala', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cuales son los numeros de emergencia en Guatemala?',
      answer: 'Guatemala opera multiples lineas de emergencia por agencia. El 110 corresponde a la Policia Nacional Civil (PNC). El 122 conecta con los Bomberos Voluntarios y Bomberos Municipales. El 128 es la linea de la Cruz Roja Guatemalteca. El 1544 es el numero oficial de CONRED para emergencias por desastres naturales. Guatemala City gestiona adicionalmente el Centro de Comunicaciones y Servicios (CCS) municipal que integra despacho policial y videovigilancia urbana para la capital.',
    },
    {
      question: '¿Como financia Guatemala tecnologia de seguridad publica municipal?',
      answer: 'El financiamiento combina presupuesto ordinario del Ministerio de Gobernacion (MINGOB) y del Ministerio de la Defensa Nacional, fondos municipales de las 22 capitales departamentales, y financiamiento externo. Los principales cooperantes son el Banco Interamericano de Desarrollo (BID), el Banco Centroamericano de Integracion Economica (BCIE), USAID/ICITAP y la Comision Europea. Las licitaciones de tecnologia se publican y gestionan obligatoriamente a traves del portal GUATECOMPRAS (guatecompras.gt) conforme al Decreto 57-92 Ley de Contrataciones del Estado.',
    },
    {
      question: '¿Que es el CCS de Guatemala City y como funciona?',
      answer: 'El Centro de Comunicaciones y Servicios (CCS) de la Ciudad de Guatemala es el centro de mando municipal que integra videovigilancia urbana, despacho policial de la PNC y coordinacion con Bomberos Municipales. Opera camaras en los principales corredores viales, mercados y zonas comerciales de la capital. Una plataforma unificada como KabatOne se integra directamente con la infraestructura ONVIF/RTSP existente del CCS, anadiendo CAD estructurado, GIS en tiempo real y analitica de video sobre las camaras ya instaladas sin reemplazar infraestructura.',
    },
    {
      question: '¿Puede KabatOne integrarse con la infraestructura de camaras existente en Guatemala?',
      answer: 'Si. KabatOne integra cualquier camara ONVIF/RTSP sin reemplazo de hardware. Las camaras del CCS de Guatemala City, los sistemas municipales de Quetzaltenango, Escuintla, Mixco y Villa Nueva se conectan directamente a la plataforma. Los lectores LPR de Puerto Quetzal y Puerto Santo Tomas de Castilla, paneles de control de acceso y sensores ambientales de CONRED tambien se integran sin cambiar infraestructura.',
    },
    {
      question: '¿Como apoya KabatOne la coordinacion entre PNC, Ejercito y municipios?',
      answer: 'K-Safety provee un mapa GIS compartido donde operadores municipales, comandos de la PNC y el Ejercito de Guatemala ven posiciones de unidades, incidentes activos y feeds de video en tiempo real. K-Dispatch unifica la recepcion 110/122/128/1544 en un solo registro de incidente, y K-Video centraliza camaras municipales y de infraestructura critica en un VMS con busqueda por zona, fecha y tipo de evento. Esto reduce el tiempo de coordinacion interinstitucional en incidentes de alta complejidad como desastres naturales, extorsion y narcotrafico.',
    },
    {
      question: '¿Como se alinea KabatOne con GUATECOMPRAS para licitaciones?',
      answer: 'KabatOne se comercializa a traves de distribuidores e integradores locales registrados en GUATECOMPRAS (guatecompras.gt) conforme al Decreto 57-92. La arquitectura modular permite licitar por componente (K-Video, K-Dispatch, K-Safety) o como plataforma unificada, adaptandose a los rangos presupuestarios municipales y ministeriales y a los requisitos tecnicos de los pliegos de contratacion del MINGOB y del Ejercito de Guatemala.',
    },
  ] : [
    {
      question: 'What are the emergency numbers in Guatemala?',
      answer: 'Guatemala operates multiple emergency lines by agency. 110 connects to the Policía Nacional Civil (PNC). 122 reaches Bomberos Voluntarios and Bomberos Municipales. 128 is the Cruz Roja Guatemalteca line. 1544 is the official CONRED number for natural disaster emergencies. Guatemala City additionally manages the Centro de Comunicaciones y Servicios (CCS) municipal command that integrates police dispatch and urban surveillance for the capital.',
    },
    {
      question: 'How does Guatemala fund public safety technology at the municipal level?',
      answer: "Funding combines the ordinary budget of the Ministry of Interior (MINGOB) and the Ministry of National Defense, municipal funds from the 22 departmental capitals, and external financing. Key donors include the Inter-American Development Bank (IDB), the Central American Bank for Economic Integration (BCIE), USAID/ICITAP, and the European Commission. Technology tenders are published and managed mandatorily through the GUATECOMPRAS portal (guatecompras.gt) under Decree 57-92 Law of State Contracts.",
    },
    {
      question: "What is Guatemala City's public safety command infrastructure?",
      answer: "Guatemala City's Centro de Comunicaciones y Servicios (CCS) is the municipal command center integrating urban surveillance, PNC police dispatch, and coordination with Bomberos Municipales. It operates cameras across main road corridors, markets, and commercial areas in the capital. A unified platform like KabatOne integrates directly with the CCS's existing ONVIF/RTSP infrastructure, adding structured CAD, real-time GIS, and video analytics on top of cameras already installed without replacing hardware.",
    },
    {
      question: 'Can KabatOne integrate with existing camera infrastructure in Guatemala?',
      answer: "Yes. KabatOne integrates any ONVIF/RTSP camera without hardware replacement. Guatemala City's CCS cameras, municipal systems in Quetzaltenango, Escuintla, Mixco, and Villa Nueva connect directly to the platform. LPR readers at Puerto Quetzal and Puerto Santo Tomás de Castilla, access control panels, and CONRED environmental sensors also integrate without changing infrastructure.",
    },
    {
      question: 'How does KabatOne support coordination between PNC, the Army, and municipalities?',
      answer: 'K-Safety provides a shared GIS map where municipal operators, PNC commands, and the Ejército de Guatemala see unit positions, active incidents, and live video feeds in real time. K-Dispatch unifies 110/122/128/1544 intake into one incident record, and K-Video centralizes municipal and critical infrastructure cameras in a searchable VMS by zone, date, and event type. This reduces inter-agency coordination time in high-complexity incidents such as natural disasters, extortion, and narcotraffic response.',
    },
    {
      question: "How does KabatOne align with Guatemala's GUATECOMPRAS procurement system?",
      answer: "KabatOne is marketed through local distributors and integrators registered on GUATECOMPRAS (guatecompras.gt) under Decree 57-92. The modular architecture allows tendering by component (K-Video, K-Dispatch, K-Safety) or as a unified platform, adapting to municipal and ministerial budget ranges and the technical specifications of MINGOB and Ejército de Guatemala tender documents.",
    },
  ]

  const artSchema = articleSchema(
    es ? 'Software de Seguridad Publica para Municipios y Departamentos en Guatemala' : 'Public Safety Software for Guatemala: Government Guide',
    es
      ? 'Software de seguridad publica para municipios, departamentos y Guatemala City — conectando videovigilancia, despacho de emergencias, GIS y gestion de incidentes en una sola plataforma operativa.'
      : 'Public safety software for Guatemalan municipalities, departments, and Guatemala City — connecting surveillance, emergency dispatch, GIS, and incident management in one unified operational platform.',
    pageUrl,
    '2026-05-19'
  )

  const comparisonRows = es ? [
    { feature: 'Video', fragmented: 'CCS de Guatemala City, camaras municipales de Quetzaltenango y Escuintla en sistemas aislados sin capa VMS compartida', unified: 'VMS unificado, todas las camaras buscables por zona, fecha y tipo de evento' },
    { feature: 'Despacho de emergencias', fragmented: '110/122/128/1544 como canales separados sin registro comun de incidente', unified: 'Registro unico de incidente que conecta PNC, Bomberos, Cruz Roja y CONRED' },
    { feature: 'Coordinacion PNC / Ejercito', fragmented: 'Solo radio, sin pantalla ni mapa compartido entre fuerzas', unified: 'Mapa GIS compartido con posiciones de unidades en tiempo real' },
    { feature: 'Respuesta a desastres CONRED', fragmented: 'Sistema de alertas separado de la red policial y municipal', unified: 'Alertas CONRED integradas con video y despacho en el mismo entorno operativo' },
    { feature: 'Reportes para MINGOB', fragmented: 'Exportacion manual de datos incompletos por sistema y por departamento', unified: 'KPIs automatizados de tiempos de respuesta, incidentes por zona y cobertura de camaras' },
    { feature: 'Dependencia tecnologica', fragmented: 'Hardware propietario por proveedor y por municipio', unified: 'ONVIF/RTSP, cualquier marca de camara ya instalada' },
  ] : [
    { feature: 'Video', fragmented: "Guatemala City's CCS, municipal cameras in Quetzaltenango and Escuintla on separate systems with no shared VMS layer", unified: 'Unified VMS, all cameras searchable by zone, date, and event type' },
    { feature: 'Emergency dispatch', fragmented: '110/122/128/1544 as separate channels with no shared incident record', unified: 'Single incident record bridging PNC, Bomberos, Cruz Roja, and CONRED' },
    { feature: 'PNC / Army coordination', fragmented: 'Radio-only, no shared screen or map between forces', unified: 'Shared GIS map with real-time unit positions' },
    { feature: 'CONRED disaster response', fragmented: 'Separate alert system disconnected from police and municipal network', unified: 'CONRED alerts integrated with video and dispatch in the same operational environment' },
    { feature: 'MINGOB reporting', fragmented: 'Manual export of incomplete data per system and per department', unified: 'Automated KPIs for response times, zone-level incident counts, and camera coverage' },
    { feature: 'Technology lock-in', fragmented: 'Proprietary hardware per vendor and per municipality', unified: 'ONVIF/RTSP, any camera brand already installed' },
  ]

  const workflowSteps = es ? [
    { n: '01', title: 'Video unificado', text: 'Todas las camaras — CCS de Guatemala City, sistemas municipales de Quetzaltenango, Mixco, Villa Nueva y Escuintla — en una sola interfaz VMS con busqueda por zona, fecha y tipo de evento.' },
    { n: '02', title: 'Centro de despacho unificado', text: 'Recepcion 110/122/128/1544, clasificacion de incidentes y asignacion de unidades desde una sola plataforma CAD. Tiempos de despacho promedio inferiores a 90 segundos.' },
    { n: '03', title: 'GIS en tiempo real', text: 'Posiciones de PNC, Ejercito de Guatemala, Bomberos Voluntarios/Municipales y unidades de CONRED en un solo mapa operativo compartido. Vista conjunta entre comisaria y centro de mando departamental.' },
    { n: '04', title: 'Fusion de sensores', text: 'Lectores LPR en Puerto Quetzal y Puerto Santo Tomas de Castilla, botones de panico y alertas ambientales de CONRED unificados con video en el mismo entorno operativo — sin multiples pantallas ni sistemas fragmentados.' },
    { n: '05', title: 'Reportes para MINGOB', text: 'KPIs automatizados de tiempos de respuesta, incidentes por departamento y cobertura de camaras para reportes del Ministerio de Gobernacion — sin exportacion manual.' },
  ] : [
    { n: '01', title: 'Unified video', text: "All cameras — Guatemala City's CCS, municipal systems in Quetzaltenango, Mixco, Villa Nueva, and Escuintla — on one VMS interface with search by zone, date, and event type." },
    { n: '02', title: 'Unified dispatch center', text: '110/122/128/1544 intake, incident classification, and unit assignment from one CAD platform. Average dispatch time under 90 seconds.' },
    { n: '03', title: 'Real-time GIS', text: 'Positions of PNC, Ejército de Guatemala, Bomberos Voluntarios/Municipales, and CONRED units on one shared operational map — joint view between comisaría and departmental command.' },
    { n: '04', title: 'Sensor fusion', text: 'LPR readers at Puerto Quetzal and Puerto Santo Tomás de Castilla, panic buttons, and CONRED environmental alerts unified with video in the same operational environment — no multiple screens or fragmented systems.' },
    { n: '05', title: 'MINGOB reporting', text: 'Automated KPIs for response times, department-level incident counts, and camera coverage for Ministry of Interior reporting — no manual export.' },
  ]

  const challengeCards = es ? [
    { icon: '🏛️', title: 'Coordinacion PNC–Ejercito–municipio fragmentada', text: 'Guatemala opera con 22 departamentos donde la PNC (~32.000 agentes), el Ejercito de Guatemala (~18.000 efectivos) y las policia municipales actuan en jurisdicciones superpuestas sin un cuadro operativo comun. La coordinacion depende de comunicacion radial informal, creando brechas en incidentes que requieren respuesta multifuerza.' },
    { icon: '📞', title: 'Multiples numeros de emergencia sin despacho unificado', text: 'El 110 (PNC), 122 (Bomberos), 128 (Cruz Roja) y 1544 (CONRED) operan como silos de comunicacion separados. Sin un registro comun de incidente, los eventos que involucran multiples agencias — especialmente durante huracanes, erupciones volcanicas o incidentes de seguridad — generan duplicacion de respuesta y perdida de contexto operacional.' },
    { icon: '📷', title: 'Camaras municipales aisladas sin VMS central', text: 'Guatemala City (CCS), Quetzaltenango, Mixco y Villa Nueva operan sus propios sistemas de videovigilancia municipal sin integracion entre si ni con la PNC. Los operadores acceden a multiples interfaces, ralentizando la respuesta y creando puntos ciegos entre jurisdicciones. La falta de un VMS centralizado impide la busqueda retroactiva y la analitica de video.' },
    { icon: '🌋', title: 'Respuesta a desastres naturales sin plataforma integrada', text: 'Guatemala tiene 33 volcanes activos (incluido Volcan de Fuego), esta ubicada en el Corredor de Huracanes del Caribe y es altamente sismicamente activa. CONRED coordina alertas y evacuaciones, pero opera de forma separada de la red policial y municipal, fragmentando la respuesta en emergencias de gran escala.' },
  ] : [
    { icon: '🏛️', title: 'Fragmented PNC–Army–municipality coordination', text: 'Guatemala operates with 22 departments where the PNC (~32,000 officers), the Ejército de Guatemala (~18,000 troops), and municipal police act in overlapping jurisdictions without a shared operational picture. Coordination depends on informal radio communication, creating gaps in incidents requiring multi-force response.' },
    { icon: '📞', title: 'Multiple emergency numbers without unified dispatch', text: '110 (PNC), 122 (Bomberos), 128 (Cruz Roja), and 1544 (CONRED) operate as separate communication silos. Without a shared incident record, multi-agency events — especially during hurricanes, volcanic eruptions, or security incidents — generate duplicate responses and lost operational context.' },
    { icon: '📷', title: 'Siloed municipal cameras without central VMS', text: 'Guatemala City (CCS), Quetzaltenango, Mixco, and Villa Nueva each operate their own municipal surveillance systems without integration between them or with the PNC. Operators access multiple interfaces, slowing response and creating blind spots across jurisdictions. The lack of a centralized VMS prevents retroactive search and video analytics.' },
    { icon: '🌋', title: 'Natural disaster response without integrated platform', text: 'Guatemala has 33 active volcanoes (including Volcán de Fuego), lies on the Caribbean Hurricane Corridor, and is highly seismically active. CONRED coordinates alerts and evacuations but operates separately from the police and municipal network, fragmenting response in large-scale emergencies.' },
  ]

  return (
    <>
      <Nav />

      {/* JSON-LD schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(artSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* -- BREADCRUMB -- */}
        <div style={{
          maxWidth: '860px', margin: '0 auto', padding: '20px 40px 0',
          display: 'flex', alignItems: 'center', gap: '8px',
          fontFamily: 'DM Mono, monospace', fontSize: '11px',
          letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)',
        }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
            {es ? 'Inicio' : 'Home'}
          </Link>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: 'var(--dim)' }}>{es ? 'Recursos' : 'Resources'}</span>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: ACCENT }}>
            {es ? 'Software de Seguridad Publica — Guatemala' : 'Public Safety Software — Guatemala'}
          </span>
        </div>

        {/* -- HERO -- */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 40px 64px' }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '11px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: ACCENT, marginBottom: '20px',
          }}>
            {es ? 'Guia de Referencia' : 'Reference Guide'}
          </p>
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.05,
            letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '28px',
          }}>
            {es
              ? 'Software de Seguridad Publica para Guatemala'
              : 'Public Safety Software for Guatemala'}
          </h1>
          <p style={{
            fontSize: '18px', fontWeight: 300, color: 'var(--dim)',
            lineHeight: 1.75, maxWidth: '720px',
          }}>
            {es
              ? 'Guia para municipios guatemaltecos, gobernaciones departamentales y Guatemala City que evaluan plataformas unificadas de seguridad publica: videovigilancia, despacho de emergencias, GIS y gestion de incidentes.'
              : 'Guide for Guatemalan municipalities, departmental governments, and Guatemala City evaluating unified public safety platforms — video surveillance, emergency dispatch, GIS, and incident management.'}
          </p>
        </section>

        {/* -- SECTION: Guatemala's Public Safety Structure -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? 'La Estructura de Seguridad Publica en Guatemala'
                : "Guatemala's Public Safety Structure"}
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Guatemala es una republica unitaria dividida en 22 departamentos y 340 municipios. La Policia Nacional Civil (PNC), con aproximadamente 32.000 agentes, es la fuerza policial nacional bajo el Ministerio de Gobernacion (MINGOB). El Ejercito de Guatemala (~18.000 efectivos en 17 zonas militares) apoya operaciones de seguridad interna bajo el Ministerio de la Defensa Nacional (MINDEF). La Secretaria de Inteligencia Estrategica del Estado (SIE) coordina inteligencia civil, mientras que la Coordinadora Nacional para la Reduccion de Desastres (CONRED) gestiona emergencias por desastres naturales.'
                : 'Guatemala is a unitary republic divided into 22 departments and 340 municipalities. The Policía Nacional Civil (PNC), with approximately 32,000 officers, is the national police force under the Ministry of Interior (MINGOB). The Ejército de Guatemala (~18,000 troops in 17 military zones) supports internal security operations under the Ministry of National Defense (MINDEF). The Secretaría de Inteligencia Estratégica del Estado (SIE) coordinates civilian intelligence, while the Coordinadora Nacional para la Reducción de Desastres (CONRED) manages natural disaster emergencies.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Guatemala protege aproximadamente 17.5 millones de ciudadanos. Guatemala City y su area metropolitana concentran mas de 3.5 millones de personas en los municipios de Guatemala, Mixco, Villa Nueva, San Miguel Petapa y Amatitlan. El pais enfrenta desafios de seguridad complejos: extorsion y presencia de maras (MS-13, Barrio 18), transito de narcoticos hacia Mexico y Estados Unidos, y riesgos de desastres naturales por volcanes, huracanes y terremotos. La falta de interoperabilidad entre sistemas policiales, militares y municipales es el principal obstaculo para una respuesta efectiva a estos desafios.'
                : 'Guatemala protects approximately 17.5 million citizens. Guatemala City and its metropolitan area concentrate over 3.5 million people across the municipalities of Guatemala, Mixco, Villa Nueva, San Miguel Petapa, and Amatitlán. The country faces complex security challenges: extortion and mara presence (MS-13, Barrio 18), narcotics transit toward Mexico and the United States, and natural disaster risks from volcanoes, hurricanes, and earthquakes. The lack of interoperability between police, military, and municipal systems is the main obstacle to effective response to these challenges.'}
            </p>
          </div>
        </section>

        {/* -- SECTION: Key Challenges -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '28px',
            }}>
              {es
                ? 'Desafios Clave para Municipios y Departamentos de Guatemala'
                : 'Key Challenges for Guatemalan Municipalities and Departments'}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {challengeCards.map((card, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                  borderRadius: '12px', padding: '28px',
                }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '8px',
                    background: `color-mix(in srgb, ${ACCENT} 14%, transparent)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '14px', fontSize: '16px',
                  }}>
                    {card.icon}
                  </div>
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '19px', color: 'var(--white)', marginBottom: '10px',
                  }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7 }}>
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- SECTION: 5-Step Unified Workflow -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0', background: `color-mix(in srgb, ${ACCENT} 3%, transparent)` }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? '¿Como Funciona una Plataforma Unificada para Guatemala?'
                : 'How a Unified Platform Works for Guatemala'}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {workflowSteps.map((step, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '24px', alignItems: 'flex-start',
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                  borderLeft: `3px solid ${ACCENT}`,
                  borderRadius: '10px', padding: '24px 28px',
                }}>
                  <div style={{
                    fontFamily: 'DM Mono, monospace', fontWeight: 700,
                    fontSize: '13px', color: ACCENT, letterSpacing: '0.05em',
                    minWidth: '28px', paddingTop: '2px',
                  }}>
                    {step.n}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                      fontSize: '18px', color: ACCENT, marginBottom: '8px',
                    }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '15px', color: 'var(--dim)', lineHeight: 1.7 }}>
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Product links */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '40px' }}>
              {[
                { href: '/k-safety', label: 'K-Safety', color: ACCENT, desc: es ? 'Conciencia situacional' : 'Situational awareness' },
                { href: '/k-dispatch', label: 'K-Dispatch', color: '#f59e0b', desc: es ? 'Despacho CAD / 911' : 'CAD dispatch / 911' },
                { href: '/k-video', label: 'K-Video', color: '#a855f7', desc: es ? 'Gestion de video' : 'Video management' },
              ].map((product, i) => (
                <Link key={i} href={product.href} style={{
                  background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)',
                  borderTop: `3px solid ${product.color}`,
                  borderRadius: '10px', padding: '20px 16px',
                  textDecoration: 'none', display: 'block',
                }}>
                  <div style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '17px', color: 'var(--white)', marginBottom: '6px',
                  }}>
                    {product.label}
                  </div>
                  <div style={{
                    fontFamily: 'DM Mono, monospace', fontSize: '10px',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'var(--muted)',
                  }}>
                    {product.desc}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* -- SECTION: Comparison Table -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? 'Fragmentado vs Plataforma Unificada para Municipios Guatemaltecos'
                : 'Fragmented vs Unified Platform for Guatemalan Municipalities'}
            </h2>

            <div style={{
              border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden',
            }}>
              {/* Header */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr',
                background: 'rgba(255,255,255,0.04)',
                borderBottom: '1px solid var(--border)',
                padding: '14px 20px',
              }}>
                {[
                  es ? 'Capacidad' : 'Capability',
                  es ? 'Sistemas Fragmentados' : 'Fragmented Systems',
                  es ? 'Plataforma Unificada' : 'Unified Platform',
                ].map((h, i) => (
                  <span key={i} style={{
                    fontFamily: 'DM Mono, monospace', fontSize: '10px',
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: i === 0 ? 'var(--muted)' : i === 1 ? '#ef4444' : '#22c55e',
                  }}>
                    {h}
                  </span>
                ))}
              </div>

              {/* Rows */}
              {comparisonRows.map((row, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr',
                  padding: '16px 20px',
                  borderBottom: i < comparisonRows.length - 1 ? '1px solid var(--border)' : undefined,
                  background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                }}>
                  <span style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600,
                    fontSize: '15px', color: 'var(--white)',
                  }}>
                    {row.feature}
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.55, paddingRight: '12px' }}>
                    {row.fragmented}
                  </span>
                  <span style={{ fontSize: '13px', color: '#86efac', lineHeight: 1.55 }}>
                    {row.unified}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- SECTION: Internal Resource Links -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '48px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', fontSize: '12px' }}>
                <span style={{
                  fontFamily: 'DM Mono, monospace', fontWeight: 600,
                  color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase',
                }}>
                  {es ? 'Recursos relacionados:' : 'Related resources:'}
                </span>
                {[
                  { href: '/resources/what-is-cad-dispatch-software', label: es ? 'Software de Despacho CAD' : 'What Is CAD Dispatch Software' },
                  { href: '/resources/cad-dispatch-software-latin-america', label: es ? 'Software CAD para America Latina' : 'CAD Dispatch Software for Latin America' },
                  { href: '/resources/what-is-a-real-time-crime-center', label: es ? 'Centro de Crimen en Tiempo Real' : 'What Is a Real-Time Crime Center' },
                  { href: '/resources/public-safety-software-municipalities-mexico', label: es ? 'Seguridad Publica — Mexico' : 'Public Safety Software — Mexico' },
                  { href: '/resources/public-safety-software-colombia', label: es ? 'Seguridad Publica — Colombia' : 'Public Safety Software — Colombia' },
                  { href: '/resources/cad-dispatch-software-latin-america', label: es ? 'CAD Despacho — America Latina' : 'CAD Dispatch — Latin America' },
                ].map((link) => (
                  <Link key={link.href} href={link.href} style={{
                    color: ACCENT, textDecoration: 'none',
                    borderBottom: `1px solid ${ACCENT}40`,
                  }}>
                    {link.label}
                  </Link>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', fontSize: '12px' }}>
                <span style={{
                  fontFamily: 'DM Mono, monospace', fontWeight: 600,
                  color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase',
                }}>
                  {es ? 'Productos:' : 'Products:'}
                </span>
                {[
                  { href: '/k-safety', label: 'K-Safety' },
                  { href: '/k-dispatch', label: 'K-Dispatch' },
                  { href: '/k-video', label: 'K-Video' },
                ].map((link) => (
                  <Link key={link.href} href={link.href} style={{
                    color: ACCENT, textDecoration: 'none',
                    borderBottom: `1px solid ${ACCENT}40`,
                  }}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* -- FAQ SECTION -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '16px',
            }}>
              {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </p>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? 'Preguntas Sobre Software de Seguridad Publica en Guatemala'
                : 'Questions About Public Safety Software in Guatemala'}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                  borderRadius: '12px', padding: '24px 28px',
                }}>
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '18px', color: 'var(--white)', marginBottom: '10px',
                  }}>
                    {faq.question}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7 }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- RELATED ARTICLES -- */}
        <section style={{ padding: '64px 0', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '24px',
            }}>
              {es ? 'Articulos Relacionados' : 'Related Articles'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                {
                  href: '/resources/cad-dispatch-software-latin-america',
                  en: 'CAD Dispatch Software for Latin America',
                  es: 'Software CAD de Despacho para America Latina',
                },
                {
                  href: '/resources/what-is-cad-dispatch-software',
                  en: 'What Is CAD Dispatch Software?',
                  es: '¿Que es el software de despacho CAD?',
                },
                {
                  href: '/resources/what-is-a-real-time-crime-center',
                  en: 'What Is a Real-Time Crime Center?',
                  es: '¿Que es un Centro de Crimen en Tiempo Real?',
                },
                {
                  href: '/resources/public-safety-software-municipalities-mexico',
                  en: 'Public Safety Software for Municipalities in Mexico',
                  es: 'Software de Seguridad Publica para Municipios en Mexico',
                },
                {
                  href: '/resources/public-safety-software-colombia',
                  en: 'Public Safety Software for Colombia',
                  es: 'Software de Seguridad Publica para Colombia',
                },
                {
                  href: '/resources/public-safety-software-brazil',
                  en: 'Public Safety Software for Brazil',
                  es: 'Software de Seguridad Publica para Brasil',
                },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '16px 20px', borderRadius: '8px',
                  border: '1px solid var(--border)', textDecoration: 'none',
                  color: 'var(--dim)', fontSize: '15px',
                }}>
                  <span>{es ? link.es : link.en}</span>
                  <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* -- CTA -- */}
        <CTASection
          es={es}
          h2={es ? 'Transforma la Seguridad Publica de Tu Municipio o Departamento en Guatemala' : 'Transform Public Safety in Your Guatemalan Municipality or Department'}
          subtitle={es
            ? 'Conoce como KabatOne integra videovigilancia, despacho de emergencias, GIS y gestion de incidentes en una sola plataforma operativa para municipios guatemaltecos — desde Guatemala City hasta cabeceras departamentales.'
            : 'See how KabatOne unifies video surveillance, emergency dispatch, GIS, and incident management into one operational platform for Guatemalan municipalities — from Guatemala City to departmental capitals.'}
          cta1={es ? 'Solicita una Demo' : 'Book a Demo'}
          cta2={es ? 'Contactar Ventas' : 'Contact Sales'}
        />

        <Footer es={es} />

        <style>{`
          @media (max-width: 768px) {
            div[style*="grid-template-columns: 1fr 1fr"],
            div[style*="grid-template-columns: repeat(3"],
            div[style*="grid-template-columns: 1.2fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </>
  )
}
