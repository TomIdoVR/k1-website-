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
  return generatePageMetadata('publicSafetySoftwareBolivia', locale)
}

export default async function PublicSafetySoftwareBoliviaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-bolivia/`
    : `${baseUrl}/resources/public-safety-software-bolivia/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Publica — Bolivia' : 'Public Safety Software — Bolivia', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: "¿Cual es la estructura de seguridad publica en Bolivia?",
      answer: "Bolivia organiza su seguridad en la Policia Boliviana con mas de 40,000 efectivos distribuidos en 9 departamentos, la FELCN (Fuerza Especial de Lucha Contra el Narcotrafico) — unidad especializada de control de drogas — y las Fuerzas Armadas de la Nacion (FAN) con ~46,000 integrantes entre el Ejercito, la Fuerza Aerea Boliviana (FAB) y la Armada Boliviana (que opera en el Lago Titicaca y los rios amazo nicos). Los numeros de emergencia son 110 (policia), 118 (bomberos) y 119 (ambulancia). KabatOne unifica videovigilancia, despacho CAD y GIS operacional en un entorno compartido entre todas las agencias.",
    },
    {
      question: "¿Como se financia la tecnologia de seguridad publica en Bolivia?",
      answer: "Las adquisiciones se rigen por la Ley 1178 SAFCO (Ley de Administracion y Control Gubernamentales) y el DS 181 — Normas Basicas del Sistema de Administracion de Bienes y Servicios (NB-SABS). El portal SICOES (Sistema de Contrataciones Estatales) publica todas las licitaciones abiertas a empresas con representacion local. El Ministerio de Gobierno centraliza el presupuesto de seguridad. La CAF (Banco de Desarrollo de America Latina), el BID y UNODC financian proyectos de fortalecimiento policial y control de narcotrafico, generando oportunidades de contratacion a nivel nacional y departamental.",
    },
    {
      question: "¿Que es la FELCN y como opera en Bolivia?",
      answer: "La Fuerza Especial de Lucha Contra el Narcotrafico (FELCN) es la unidad especializada de la Policia Boliviana para el control de drogas, con presencia en las regiones cocaleras del Chapare (Cochabamba) y los Yungas (La Paz). Bolivia es el tercer productor mundial de hoja de coca. La FELCN coordina con la DEA, UNODC y la Policia de Frontera en operaciones de interdiccion. KabatOne integra el video de los puestos de control de la FELCN con el despacho CAD y el GIS operacional de la Policia Boliviana en un mapa compartido.",
    },
    {
      question: "¿Como puede KabatOne integrarse con las camaras CCTV existentes en Bolivia?",
      answer: "KabatOne integra cualquier camara ONVIF/RTSP sin reemplazo de hardware. Camaras municipales en La Paz, Santa Cruz de la Sierra, Cochabamba, Oruro y Potosi se conectan directamente. Sistemas de vigilancia en el Aeropuerto Internacional Viru Viru (VVI) de Santa Cruz, el Aeropuerto El Alto (LPB) de La Paz, el Puerto Suarez en la Hidrovía Paraguay-Parana y los terminales de exportacion de gas natural a Brasil y Argentina tambien se integran sin cambiar equipos.",
    },
    {
      question: "¿Como puede KabatOne apoyar la seguridad del litio boliviano en el Salar de Uyuni?",
      answer: "El Salar de Uyuni (~21 millones de toneladas de litio) es la mayor reserva de litio del mundo. YLB (Yacimientos de Litio Bolivianos) opera las plantas de extraccion y las baterias de sodio-boro bajo soberania estatal. La infraestructura de YLB en Potosi y Oruro requiere vigilancia perimetral continua y coordinacion con la Policia Minera y el Ejercito. KabatOne integra video analitico perimetral, LPR y sensores IoT en un VMS centralizado, vinculando la respuesta policial con el despacho CAD en tiempo real.",
    },
    {
      question: "¿Como se alinea KabatOne con el marco de adquisiciones de Bolivia (NB-SABS/SICOES)?",
      answer: "KabatOne opera a traves de distribuidores e integradores tecnologicos locales conforme al DS 181 NB-SABS y el portal SICOES. La arquitectura modular permite licitar por componente (K-Video, K-Dispatch, K-Safety) o como plataforma unificada, adaptandose a los presupuestos del Ministerio de Gobierno, gobernaciones departamentales y municipios. Las especificaciones tecnicas abiertas (ONVIF, REST API) facilitan la inclusion en carteles de licitacion sin clausulas de exclusividad de hardware.",
    },
  ] : [
    {
      question: "What is Bolivia's public safety structure?",
      answer: "Bolivia organizes its security around the Bolivian National Police with 40,000+ officers across 9 departments, the FELCN (Special Force Against Drug Trafficking) — a specialized drug control unit — and the National Armed Forces (FAN) with ~46,000 members including the Army, Bolivian Air Force (FAB), and the Bolivian Navy (operating on Lake Titicaca and Amazonian rivers). Emergency numbers are 110 (police), 118 (fire), and 119 (ambulance). KabatOne unifies video surveillance, CAD dispatch, and operational GIS in a shared environment across all agencies.",
    },
    {
      question: "How is public safety technology funded in Bolivia?",
      answer: "Procurement is governed by Law 1178 SAFCO (Law on Government Administration and Control) and DS 181 — Basic Standards of the Asset and Services Administration System (NB-SABS). The SICOES portal (State Contracting System) publishes all tenders open to companies with local representation. The Ministry of Government centralizes the security budget. CAF (Development Bank of Latin America), IDB, and UNODC fund police strengthening and narco-trafficking control projects, generating procurement opportunities at the national and departmental level.",
    },
    {
      question: "What is FELCN and how does it operate in Bolivia?",
      answer: "The Special Force Against Drug Trafficking (FELCN) is the Bolivian National Police's specialized drug control unit, with presence in the coca-growing regions of Chapare (Cochabamba) and the Yungas (La Paz). Bolivia is the world's third-largest coca leaf producer. FELCN coordinates with the DEA, UNODC, and the Border Police on interdiction operations. KabatOne integrates FELCN checkpoint video with Bolivian National Police CAD dispatch and operational GIS on a shared map.",
    },
    {
      question: "How can KabatOne integrate with existing CCTV infrastructure in Bolivia?",
      answer: "KabatOne integrates any ONVIF/RTSP camera without hardware replacement. Municipal cameras in La Paz, Santa Cruz de la Sierra, Cochabamba, Oruro, and Potosi connect directly. Surveillance systems at Santa Cruz Viru Viru International Airport (VVI), La Paz El Alto Airport (LPB), Puerto Suarez on the Paraguay-Parana Waterway, and natural gas export terminals to Brazil and Argentina also integrate without changing equipment.",
    },
    {
      question: "How can KabatOne support security for Bolivia's lithium at Salar de Uyuni?",
      answer: "The Salar de Uyuni (~21 million tonnes of lithium) is the world's largest lithium reserve. YLB (Bolivian Lithium Deposits) operates extraction plants and sodium-boron batteries under state sovereignty. YLB infrastructure in Potosi and Oruro requires continuous perimeter surveillance and coordination with the Mining Police and Army. KabatOne integrates perimeter video analytics, LPR, and IoT sensors into a centralized VMS, linking police response with real-time CAD dispatch.",
    },
    {
      question: "How does KabatOne align with Bolivia's procurement framework (NB-SABS/SICOES)?",
      answer: "KabatOne operates through local technology distributors and integrators under DS 181 NB-SABS and the SICOES portal. The modular architecture allows tendering by component (K-Video, K-Dispatch, K-Safety) or as a unified platform, adapting to Ministry of Government, departmental governor, and municipal budgets. Open technical specifications (ONVIF, REST API) facilitate inclusion in tender documents without hardware exclusivity clauses.",
    },
  ]

  const artSchema = articleSchema(
    es ? 'Software de Seguridad Publica para Bolivia — Policia Boliviana, FELCN y Litio de Uyuni' : 'Public Safety Software for Bolivia: Bolivian National Police, FELCN, and Uyuni Lithium Security',
    es
      ? 'Plataforma unificada de seguridad publica para Bolivia — integrando Policia Boliviana, FELCN, FAN, videovigilancia municipal y proteccion de infraestructura de litio YLB en un solo entorno operativo.'
      : 'Unified public safety platform for Bolivia — integrating Bolivian National Police, FELCN, FAN, municipal video surveillance, and YLB lithium infrastructure protection in one operational environment.',
    pageUrl,
    '2026-07-07'
  )

  const comparisonRows = es ? [
    { feature: 'Video', fragmented: 'Camaras municipales en La Paz, Santa Cruz y Cochabamba en plataformas aisladas sin VMS compartido con la Policia Boliviana ni la FELCN', unified: 'VMS unificado con todas las camaras buscables por departamento, municipio y tipo de evento' },
    { feature: 'Despacho de emergencias', fragmented: '110/118/119 sin registro compartido entre policia departamental, FELCN y bomberos', unified: 'Registro unico que conecta policia departamental, FELCN, FAN y bomberos municipales' },
    { feature: 'Control narcotrafico', fragmented: 'Puestos FELCN en el Chapare y los Yungas con video aislado del mapa operativo nacional', unified: 'Puestos FELCN integrados con GIS operacional y despacho CAD en tiempo real' },
    { feature: 'Seguridad de infraestructura critica', fragmented: 'Video YLB (litio Uyuni) desconectado de la Policia Minera y el Ejercito', unified: 'Video analitico YLB integrado con CAD y Policia Minera en el mismo entorno operativo' },
    { feature: 'Reportes para el Ministerio de Gobierno', fragmented: 'Exportacion manual de datos fragmentados por agencia y por departamento', unified: 'KPIs automatizados de tiempos de respuesta e incidentes por municipio' },
    { feature: 'Integracion de sensores', fragmented: 'LPR en Viru Viru y El Alto desconectados del despacho y el GIS policial', unified: 'LPR aeropuertos, sensores FELCN y video municipal en un solo mapa operativo' },
  ] : [
    { feature: 'Video', fragmented: 'Municipal cameras in La Paz, Santa Cruz, and Cochabamba on isolated platforms with no shared VMS with Bolivian National Police or FELCN', unified: 'Unified VMS with all cameras searchable by department, municipality, and event type' },
    { feature: 'Emergency dispatch', fragmented: '110/118/119 without shared incident record between departmental police, FELCN, and fire departments', unified: 'Single record bridging departmental police, FELCN, FAN, and municipal firefighters' },
    { feature: 'Narco-trafficking control', fragmented: 'FELCN checkpoints in Chapare and the Yungas with video isolated from the national operational map', unified: 'FELCN checkpoints integrated with operational GIS and real-time CAD dispatch' },
    { feature: 'Critical infrastructure security', fragmented: 'YLB (Uyuni lithium) video disconnected from Mining Police and Army', unified: 'YLB video analytics integrated with CAD and Mining Police in the same operational environment' },
    { feature: 'Ministry of Government reporting', fragmented: 'Manual export of fragmented data by agency and department', unified: 'Automated KPIs for response times and municipality-level incident counts' },
    { feature: 'Sensor integration', fragmented: 'LPR at Viru Viru and El Alto disconnected from police dispatch and GIS', unified: 'Airport LPR, FELCN sensors, and municipal video on one operational map' },
  ]

  const workflowSteps = es ? [
    { n: '01', title: 'Video unificado', text: 'Todas las camaras — municipales en La Paz, Santa Cruz de la Sierra, Cochabamba, Oruro y Potosi, sistemas YLB en el Salar de Uyuni, LPR en el Aeropuerto Viru Viru (VVI) y El Alto (LPB), camaras FELCN en el Chapare — en una sola interfaz VMS con busqueda por departamento, municipio y tipo de evento.' },
    { n: '02', title: 'Centro de despacho unificado', text: 'Recepcion 110/118/119, clasificacion de incidentes y asignacion de unidades desde una sola plataforma CAD. Registro unico compartido entre Policia Boliviana departamental, FELCN, FAN y bomberos municipales.' },
    { n: '03', title: 'GIS en tiempo real', text: 'Posiciones de unidades de la Policia Boliviana, FELCN, Ejercito y bomberos en un solo mapa operativo. Vista conjunta entre la gobernacion departamental y el Ministerio de Gobierno en La Paz.' },
    { n: '04', title: 'Seguridad de litio y gas natural', text: 'Video analitico perimetral YLB en el Salar de Uyuni, sensores IoT en plantas de carbonato de litio, monitoreo de terminales de gas GNEA/GASBOL a Brasil y Argentina — todo integrado con despacho CAD y Policia Minera.' },
    { n: '05', title: 'Reportes para el Ministerio de Gobierno', text: 'KPIs automatizados de tiempos de respuesta, incidentes por departamento y cobertura de camaras para reportes del Ministerio de Gobierno y gobernaciones — sin exportacion manual.' },
  ] : [
    { n: '01', title: 'Unified video', text: 'All cameras — municipal in La Paz, Santa Cruz de la Sierra, Cochabamba, Oruro, and Potosi, YLB systems at Salar de Uyuni, LPR at Viru Viru (VVI) and El Alto (LPB) airports, FELCN cameras in Chapare — on one VMS interface with search by department, municipality, and event type.' },
    { n: '02', title: 'Unified dispatch center', text: 'Single 110/118/119 intake, incident classification, and unit assignment from one CAD platform. Shared incident record bridging departmental Bolivian National Police, FELCN, FAN, and municipal firefighters.' },
    { n: '03', title: 'Real-time GIS', text: 'Bolivian National Police, FELCN, Army, and firefighter unit positions on one shared operational map — joint view between departmental governor and the Ministry of Government in La Paz.' },
    { n: '04', title: 'Lithium and natural gas security', text: 'YLB perimeter video analytics at Salar de Uyuni, IoT sensors at lithium carbonate plants, monitoring of GNEA/GASBOL natural gas export terminals to Brazil and Argentina — all integrated with CAD dispatch and Mining Police.' },
    { n: '05', title: 'Ministry of Government reporting', text: 'Automated KPIs for response times, department-level incident counts, and camera coverage for Ministry of Government and governor reporting — no manual export.' },
  ]

  const challengeCards = es ? [
    { icon: '🏔️', title: 'Coordinacion multi-agencia en 9 departamentos a gran altitud', text: 'Bolivia administra su seguridad en 9 departamentos con capitales que incluyen La Paz (3,640 m sobre el nivel del mar — una de las ciudades mas altas del mundo) y Potosi (4,090 m). La Policia Boliviana, la FELCN, las FAN y los bomberos municipales operan con sistemas separados sin una pantalla operativa compartida. Los incidentes que cruzan jurisdicciones departamentales — frecuentes en el Chapare y la region cocalera — generan duplicacion de respuesta y demoras criticas.' },
    { icon: '⚗️', title: 'Seguridad del litio y los recursos estrategicos sin plataforma integrada', text: "Bolivia posee el Salar de Uyuni (~21 Mt de litio, la mayor reserva mundial), importantes yacimientos de zinc, estano y plata en Potosi, y reservas de gas natural (~10 tcf) exportadas a Brasil y Argentina via GASBOL. La infraestructura de YLB, Comibol y los terminales GNEA requiere vigilancia perimetral continua. Sin un VMS integrado con el despacho de la Policia Minera y el Ejercito, los incidentes en sitios remotos de alta altitud se gestionan con radio, retrasando la respuesta." },
    { icon: '🌿', title: 'Control de narcotrafico FELCN en zonas cocaleras sin integracion de video', text: 'Bolivia es el tercer productor mundial de hoja de coca. La FELCN opera puestos de control en el Chapare (Cochabamba) y los Yungas (La Paz) con video y registros de incidentes aislados del mapa operativo nacional. Sin integracion en tiempo real entre los puestos FELCN y el despacho CAD de la Policia Boliviana, los movimientos identificados en un punto de control no alertan automaticamente a las unidades de intercepcion adyacentes.' },
    { icon: '📷', title: 'Camaras municipales sin VMS central ni integracion con la Policia Boliviana', text: 'La Paz, Santa Cruz de la Sierra, Cochabamba, Oruro y Potosi operan circuitos CCTV municipales sin integracion entre si ni con la Policia Boliviana departamental. Los aeropuertos Viru Viru (VVI) y El Alto (LPB), el Puerto Suarez en la Hidrovía Paraguay-Parana y las instalaciones de YLB en el Salar de Uyuni gestionan video de forma independiente. Sin un VMS unificado, los operadores acceden a multiples consolas durante incidentes que cruzan departamentos.' },
  ] : [
    { icon: '🏔️', title: 'Multi-agency coordination across 9 high-altitude departments', text: "Bolivia manages security across 9 departments with capitals including La Paz (3,640 m above sea level — one of the world's highest cities) and Potosi (4,090 m). The Bolivian National Police, FELCN, FAN, and municipal fire departments operate with separate systems and no shared operational screen. Cross-departmental incidents — frequent in Chapare and the coca-growing region — generate duplicate responses and critical delays." },
    { icon: '⚗️', title: 'Lithium and strategic resource security without integrated platform', text: 'Bolivia holds the Salar de Uyuni (~21 Mt lithium, the world\'s largest reserve), major zinc, tin, and silver deposits at Potosi, and natural gas reserves (~10 tcf) exported to Brazil and Argentina via GASBOL. YLB, Comibol, and GNEA terminal infrastructure requires continuous perimeter surveillance. Without a VMS integrated with Mining Police and Army dispatch, incidents at remote high-altitude sites are managed by radio, delaying response.' },
    { icon: '🌿', title: 'FELCN narco-trafficking control in coca regions without video integration', text: "Bolivia is the world's third-largest coca leaf producer. FELCN operates checkpoints in Chapare (Cochabamba) and the Yungas (La Paz) with video and incident records isolated from the national operational map. Without real-time integration between FELCN checkpoints and Bolivian National Police CAD dispatch, movements identified at one checkpoint do not automatically alert adjacent interception units." },
    { icon: '📷', title: 'Municipal cameras without central VMS or Bolivian National Police integration', text: 'La Paz, Santa Cruz de la Sierra, Cochabamba, Oruro, and Potosi each operate municipal CCTV circuits without integration between them or with departmental Bolivian National Police. Viru Viru (VVI) and El Alto (LPB) airports, Puerto Suarez on the Paraguay-Parana Waterway, and YLB facilities at Salar de Uyuni manage video independently. Without a unified VMS, operators access multiple consoles during cross-department incidents.' },
  ]

  return (
    <>
      <Nav />

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
            {es ? 'Software de Seguridad Publica — Bolivia' : 'Public Safety Software — Bolivia'}
          </span>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 40px 0' }}>
          <div style={{
            display: 'inline-block', padding: '4px 12px', borderRadius: '4px',
            background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)',
            fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.14em',
            textTransform: 'uppercase', color: ACCENT, marginBottom: '20px',
          }}>
            {es ? 'Guia de Mercado' : 'Market Guide'}
          </div>
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.05,
            color: 'var(--white)', margin: '0 0 20px',
          }}>
            {es
              ? 'Software de Seguridad Publica para Bolivia'
              : 'Public Safety Software for Bolivia'}
          </h1>
          <p style={{
            fontFamily: 'Space Grotesk, sans-serif', fontSize: '17px', lineHeight: 1.7,
            color: 'var(--dim)', maxWidth: '720px', margin: '0 0 32px',
          }}>
            {es
              ? 'Bolivia opera con mas de 40,000 efectivos de la Policia Boliviana y la FELCN en 9 departamentos, ademas de las FAN. KabatOne unifica videovigilancia, despacho CAD, GIS operacional y proteccion de infraestructura estrategica — desde el Lago Titicaca hasta el Salar de Uyuni y los terminales de gas natural.'
              : 'Bolivia operates with 40,000+ Bolivian National Police and FELCN officers across 9 departments, plus the FAN armed forces. KabatOne unifies video surveillance, CAD dispatch, operational GIS, and strategic infrastructure protection — from Lake Titicaca to Salar de Uyuni and natural gas export terminals.'}
          </p>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 40px 0' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: 'clamp(22px, 3vw, 30px)', color: 'var(--white)', margin: '0 0 24px',
          }}>
            {es ? 'Desafios Operativos en Bolivia' : 'Operational Challenges in Bolivia'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '16px' }}>
            {challengeCards.map((c, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '8px', padding: '24px',
              }}>
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>{c.icon}</div>
                <h3 style={{
                  fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600,
                  fontSize: '17px', color: 'var(--white)', margin: '0 0 10px',
                }}>{c.title}</h3>
                <p style={{
                  fontFamily: 'Space Grotesk, sans-serif', fontSize: '14px',
                  lineHeight: 1.65, color: 'var(--dim)', margin: 0,
                }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 40px 0' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: 'clamp(22px, 3vw, 30px)', color: 'var(--white)', margin: '0 0 20px',
          }}>
            {es ? 'Fragmentado vs. Unificado' : 'Fragmented vs. Unified'}
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Space Grotesk, sans-serif', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ textAlign: 'left', padding: '10px 12px', color: 'var(--dim)', fontWeight: 500 }}>{es ? 'Capacidad' : 'Capability'}</th>
                  <th style={{ textAlign: 'left', padding: '10px 12px', color: '#ef4444', fontWeight: 500 }}>{es ? 'Sistemas fragmentados' : 'Fragmented systems'}</th>
                  <th style={{ textAlign: 'left', padding: '10px 12px', color: '#22c55e', fontWeight: 500 }}>KabatOne</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                    <td style={{ padding: '12px', color: 'var(--white)', fontWeight: 500 }}>{row.feature}</td>
                    <td style={{ padding: '12px', color: 'var(--dim)' }}>{row.fragmented}</td>
                    <td style={{ padding: '12px', color: 'var(--white)' }}>{row.unified}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 40px 0' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: 'clamp(22px, 3vw, 30px)', color: 'var(--white)', margin: '0 0 28px',
          }}>
            {es ? 'Como Funciona KabatOne en Bolivia' : 'How KabatOne Works in Bolivia'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {workflowSteps.map((step, i) => (
              <div key={i} style={{
                display: 'flex', gap: '20px', alignItems: 'flex-start',
                background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '8px', padding: '20px 24px',
              }}>
                <span style={{
                  fontFamily: 'DM Mono, monospace', fontSize: '12px', color: ACCENT,
                  letterSpacing: '0.1em', minWidth: '32px', paddingTop: '2px',
                }}>{step.n}</span>
                <div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, fontSize: '17px', color: 'var(--white)', marginBottom: '6px' }}>{step.title}</div>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '14px', lineHeight: 1.65, color: 'var(--dim)' }}>{step.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 40px 0' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: 'clamp(22px, 3vw, 30px)', color: 'var(--white)', margin: '0 0 28px',
          }}>
            {es ? 'Preguntas Frecuentes — Bolivia' : 'FAQ — Bolivia'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '8px', padding: '20px 24px',
              }}>
                <h3 style={{
                  fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600,
                  fontSize: '15px', color: 'var(--white)', margin: '0 0 8px',
                }}>{faq.question}</h3>
                <p style={{
                  fontFamily: 'Space Grotesk, sans-serif', fontSize: '14px',
                  lineHeight: 1.7, color: 'var(--dim)', margin: 0,
                }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 40px 0' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: '20px', color: 'var(--white)', margin: '0 0 16px',
          }}>
            {es ? 'Recursos Relacionados' : 'Related Resources'}
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[
              { href: '/resources/public-safety-software-peru', label: es ? 'Peru' : 'Peru' },
              { href: '/resources/public-safety-software-colombia', label: es ? 'Colombia' : 'Colombia' },
              { href: '/resources/public-safety-software-argentina', label: es ? 'Argentina' : 'Argentina' },
              { href: '/k-safety', label: 'K-Safety' },
              { href: '/k-video', label: 'K-Video' },
              { href: '/k-dispatch', label: 'K-Dispatch' },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{
                display: 'inline-block', padding: '7px 14px',
                background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)',
                borderRadius: '5px', fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '13px', color: ACCENT, textDecoration: 'none',
              }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '72px' }}>
          <CTASection
            es={es}
            h2={es ? 'Conozca KabatOne para Bolivia' : 'See KabatOne for Bolivia'}
            subtitle={es
              ? 'Coordinacion Policia Boliviana, FELCN y FAN en una sola plataforma. Solicite una demostracion con escenarios reales.'
              : 'Bolivian National Police, FELCN, and FAN coordination on one platform. Request a demo with real scenarios.'}
          />
        </div>

        <Footer es={es} />
      </div>
    </>
  )
}
