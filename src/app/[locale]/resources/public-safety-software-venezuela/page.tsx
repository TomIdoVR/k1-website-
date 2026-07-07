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
  return generatePageMetadata('publicSafetySoftwareVenezuela', locale)
}

export default async function PublicSafetySoftwareVenezuelaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-venezuela/`
    : `${baseUrl}/resources/public-safety-software-venezuela/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Publica — Venezuela' : 'Public Safety Software — Venezuela', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: "¿Cual es la estructura de seguridad publica en Venezuela?",
      answer: "Venezuela opera un sistema de seguridad multi-estrato: la Policia Nacional Bolivariana (PNB) con mas de 100,000 funcionarios, el CICPC (Cuerpo de Investigaciones Cientificas Penales y Criminalisticas) con ~15,000 detectives, la Guardia Nacional Bolivariana (GNB) con ~30,000 efectivos y la FANB (Fuerzas Armadas Nacionales Bolivarianas) con ~350,000 integrantes. Cada estado tiene ademas su policia regional. Los numeros de emergencia principales son 171 (PNB), 911 (disponible en algunos estados) y 800-CICPC. KabatOne unifica videovigilancia, despacho CAD y GIS operacional en un solo entorno compartido entre todas estas agencias.",
    },
    {
      question: "¿Como se financia la tecnologia de seguridad publica en Venezuela?",
      answer: "Las adquisiciones se rigen por la Ley de Contrataciones Publicas de 2010 y su reglamento, publicadas en el portal SISCOM (Sistema Integrado de Contratacion). El Ministerio del Poder Popular para Relaciones Interiores, Justicia y Paz centraliza el presupuesto de seguridad. Las gobernaciones estadales tienen fondos propios para infraestructura de vigilancia. Organismos internacionales como el BID, el BM y UNODC financian proyectos especificos de reforma policial y control de narco-trafico, generando licitaciones abiertas a proveedores con representacion local.",
    },
    {
      question: "¿Como puede KabatOne integrarse con las camaras CCTV existentes en Venezuela?",
      answer: "KabatOne integra cualquier camara ONVIF/RTSP sin reemplazo de hardware. Camaras municipales en Caracas, Maracaibo, Valencia, Barquisimeto y Maracay se conectan directamente. Sistemas de vigilancia en el Puerto de La Guaira, Puerto Cabello (mayor puerto de contenedores del Caribe), el Aeropuerto Internacional Simon Bolivar (CCS) y la infraestructura PDVSA en el Lago de Maracaibo tambien se integran sin cambiar equipos. La plataforma es compatible con los entornos tecnologicos heredados del sector publico venezolano.",
    },
    {
      question: "¿Que es el FANB y como coordina operaciones de seguridad en Venezuela?",
      answer: "La Fuerza Armada Nacional Bolivariana (FANB) integra el Ejercito, la Marina, la Aviacion y la Guardia Nacional Bolivariana, con un rol activo en seguridad interna bajo el concepto de seguridad integral. La FANB opera Zonas Operativas de Defensa Integral (ZODI) y Areas de Defensa Integral (ADI) en todo el territorio. En fronteras, particularmente con Colombia (2,219 km) y Brasil (2,200 km), la FANB coordina operaciones antidroga con la GNB y el CICPC. KabatOne provee el mapa GIS compartido y el registro de incidentes para coordinacion interinstitucional.",
    },
    {
      question: "¿Como protege KabatOne la infraestructura de PDVSA y el Lago de Maracaibo?",
      answer: "Venezuela posee las mayores reservas probadas de petroleo del mundo (~300,000 millones de barriles). La infraestructura de PDVSA en el Lago de Maracaibo, la Faja del Orinoco y los terminales de exportacion requiere vigilancia perimetral continua. KabatOne integra camaras LPR, detectores de intrusion, video analitico perimetral y alertas de sensores IoT en un VMS centralizado, vinculando la respuesta de la GNB y la Guardia de PDVSA con el despacho CAD en tiempo real.",
    },
    {
      question: "¿Como se alinea KabatOne con el marco de adquisiciones de Venezuela (Ley de Contrataciones Publicas)?",
      answer: "KabatOne opera a traves de distribuidores e integradores tecnologicos locales conforme a la Ley de Contrataciones Publicas de 2010 y las resoluciones del SISCOM. La arquitectura modular permite licitar por componente (K-Video, K-Dispatch, K-Safety) o como plataforma unificada, adaptandose a los presupuestos del Ministerio de Relaciones Interiores, gobernaciones estadales y entes descentralizados como PDVSA. Las especificaciones tecnicas abiertas (ONVIF, REST API) facilitan la inclusion en carteles de licitacion sin clausulas de exclusividad de hardware.",
    },
  ] : [
    {
      question: "What is Venezuela's public safety structure?",
      answer: "Venezuela operates a multi-layer security model: the Bolivarian National Police (PNB) with 100,000+ officers, the CICPC (Scientific, Criminal and Forensic Investigations Body) with ~15,000 detectives, the Bolivarian National Guard (GNB) with ~30,000 troops, and the FANB (Bolivarian National Armed Forces) with ~350,000 members. Each state also has its own regional police. Main emergency numbers are 171 (PNB), 911 (available in some states), and 800-CICPC. KabatOne unifies video surveillance, CAD dispatch, and operational GIS into a single shared environment across all agencies.",
    },
    {
      question: "How is public safety technology funded in Venezuela?",
      answer: "Procurement is governed by the 2010 Public Procurement Law and its regulations, published on the SISCOM portal (Integrated Contracting System). The Ministry of Interior, Justice and Peace centralizes the security budget. State governors have their own funds for surveillance infrastructure. International bodies including the IDB, World Bank, and UNODC fund specific police reform and narco-trafficking control projects, generating tenders open to vendors with local representation.",
    },
    {
      question: "How can KabatOne integrate with existing CCTV infrastructure in Venezuela?",
      answer: "KabatOne integrates any ONVIF/RTSP camera without hardware replacement. Municipal cameras in Caracas, Maracaibo, Valencia, Barquisimeto, and Maracay connect directly. Surveillance systems at La Guaira Port, Puerto Cabello (the Caribbean's largest container port), Simon Bolivar International Airport (CCS), and PDVSA infrastructure at Lake Maracaibo also integrate without changing equipment. The platform is compatible with legacy technology environments in the Venezuelan public sector.",
    },
    {
      question: "What is FANB and how does it coordinate security operations in Venezuela?",
      answer: "The Bolivarian National Armed Forces (FANB) integrates the Army, Navy, Air Force, and National Guard with an active role in internal security under Venezuela's integral security doctrine. The FANB operates Integral Defense Operational Zones (ZODI) and Integral Defense Areas (ADI) across the country. On borders — particularly with Colombia (2,219 km) and Brazil (2,200 km) — the FANB coordinates anti-drug operations with the GNB and CICPC. KabatOne provides the shared GIS map and incident record for interagency coordination.",
    },
    {
      question: "How does KabatOne protect PDVSA and Lake Maracaibo infrastructure?",
      answer: "Venezuela holds the world's largest proven oil reserves (~300 billion barrels). PDVSA infrastructure at Lake Maracaibo, the Orinoco Belt, and export terminals requires continuous perimeter surveillance. KabatOne integrates LPR cameras, intrusion detectors, perimeter video analytics, and IoT sensor alerts into a centralized VMS, linking GNB and PDVSA Guard response with real-time CAD dispatch.",
    },
    {
      question: "How does KabatOne align with Venezuela's procurement framework (Ley de Contrataciones Publicas)?",
      answer: "KabatOne operates through local technology distributors and integrators under the 2010 Public Procurement Law and SISCOM resolutions. The modular architecture allows tendering by component (K-Video, K-Dispatch, K-Safety) or as a unified platform, adapting to Ministry of Interior, state governor, and decentralized entity (PDVSA) budgets. Open technical specifications (ONVIF, REST API) facilitate inclusion in tender documents without hardware exclusivity clauses.",
    },
  ]

  const artSchema = articleSchema(
    es ? 'Software de Seguridad Publica para Venezuela — PNB, CICPC, FANB e Infraestructura PDVSA' : 'Public Safety Software for Venezuela: PNB, CICPC, FANB and PDVSA Infrastructure',
    es
      ? 'Plataforma unificada de seguridad publica para Venezuela — integrando PNB, CICPC, GNB, FANB, videovigilancia municipal, despacho CAD y proteccion de infraestructura PDVSA en un solo entorno operativo.'
      : 'Unified public safety platform for Venezuela — integrating PNB, CICPC, GNB, FANB, municipal video surveillance, CAD dispatch, and PDVSA infrastructure protection in one operational environment.',
    pageUrl,
    '2026-07-07'
  )

  const comparisonRows = es ? [
    { feature: 'Video', fragmented: 'Camaras PNB, GNB y municipales en sistemas aislados sin VMS compartido entre agencias estadales y nacionales', unified: 'VMS unificado con todas las camaras buscables por estado, municipio y tipo de evento' },
    { feature: 'Despacho de emergencias', fragmented: '171/911 sin registro compartido entre PNB, CICPC, GNB y bomberos estadales', unified: 'Registro unico de incidente que conecta PNB, CICPC, GNB, FANB y bomberos estadales' },
    { feature: 'Coordinacion interinstitucional', fragmented: 'Solo radio, sin pantalla ni mapa compartido entre PNB, GNB, CICPC y FANB durante operaciones complejas', unified: 'Mapa GIS compartido con posiciones de unidades PNB, GNB, CICPC y FANB en tiempo real' },
    { feature: 'Proteccion infraestructura critica', fragmented: 'Vigilancia PDVSA desconectada de la GNB y el despacho policial', unified: 'Video analitico PDVSA integrado con CAD y GNB en el mismo entorno operativo' },
    { feature: 'Reportes para el Ministerio', fragmented: 'Exportacion manual de datos fragmentados por agencia y por estado', unified: 'KPIs automatizados de tiempos de respuesta, incidentes por municipio y cobertura de camaras' },
    { feature: 'Integracion de sensores', fragmented: 'LPR, sensores de frontera y alertas de la FANB aislados del video municipal', unified: 'LPR, sensores de frontera, alertas FANB y video municipal en un solo mapa operativo' },
  ] : [
    { feature: 'Video', fragmented: 'PNB, GNB, and municipal cameras on isolated systems with no shared VMS between state and national agencies', unified: 'Unified VMS with all cameras searchable by state, municipality, and event type' },
    { feature: 'Emergency dispatch', fragmented: '171/911 without shared incident record between PNB, CICPC, GNB, and state fire departments', unified: 'Single incident record bridging PNB, CICPC, GNB, FANB, and state firefighters' },
    { feature: 'Interagency coordination', fragmented: 'Radio-only, no shared screen or map between PNB, GNB, CICPC, and FANB during complex operations', unified: 'Shared GIS map with real-time PNB, GNB, CICPC, and FANB unit positions' },
    { feature: 'Critical infrastructure protection', fragmented: 'PDVSA surveillance disconnected from GNB and police dispatch', unified: 'PDVSA video analytics integrated with CAD and GNB in the same operational environment' },
    { feature: 'Ministry reporting', fragmented: 'Manual export of fragmented data by agency and by state', unified: 'Automated KPIs for response times, municipality-level incident counts, and camera coverage' },
    { feature: 'Sensor integration', fragmented: 'LPR, border sensors, and FANB alerts isolated from municipal video', unified: 'LPR, border sensors, FANB alerts, and municipal video on one operational map' },
  ]

  const workflowSteps = es ? [
    { n: '01', title: 'Video unificado', text: 'Todas las camaras — municipales en Caracas, Maracaibo, Valencia, Barquisimeto y Maracay, sistemas PDVSA en el Lago de Maracaibo y la Faja del Orinoco, circuitos en el Puerto Cabello y el CCS, camaras GNB en puestos fronterizos — en una sola interfaz VMS con busqueda por estado, municipio y tipo de evento.' },
    { n: '02', title: 'Centro de despacho unificado', text: 'Recepcion 171/911, clasificacion de incidentes y asignacion de unidades desde una sola plataforma CAD. Registro unico compartido entre PNB, CICPC, GNB, FANB y bomberos estadales.' },
    { n: '03', title: 'GIS en tiempo real', text: 'Posiciones de unidades PNB, CICPC, GNB, FANB y bomberos estadales en un solo mapa operativo. Vista conjunta entre la delegacion estadal y el Ministerio de Relaciones Interiores en Caracas.' },
    { n: '04', title: 'Proteccion de infraestructura critica', text: 'Video analitico perimetral PDVSA, sensores IoT en plataformas del Lago de Maracaibo, LPR en el Puerto Cabello y el Aeropuerto CCS, y alertas de frontera de la FANB — todos unificados en el mismo entorno operativo.' },
    { n: '05', title: 'Reportes para el Ministerio', text: 'KPIs automatizados de tiempos de respuesta, incidentes por municipio y cobertura de camaras para reportes del Ministerio de Relaciones Interiores y las gobernaciones — sin exportacion manual.' },
  ] : [
    { n: '01', title: 'Unified video', text: 'All cameras — municipal in Caracas, Maracaibo, Valencia, Barquisimeto, and Maracay, PDVSA systems at Lake Maracaibo and the Orinoco Belt, circuits at Puerto Cabello and CCS Airport, GNB cameras at border posts — on one VMS interface with search by state, municipality, and event type.' },
    { n: '02', title: 'Unified dispatch center', text: 'Single 171/911 intake, incident classification, and unit assignment from one CAD platform. Shared incident record bridging PNB, CICPC, GNB, FANB, and state fire departments.' },
    { n: '03', title: 'Real-time GIS', text: 'PNB, CICPC, GNB, FANB, and state fire unit positions on one shared operational map — joint view between state delegation and the Ministry of Interior in Caracas.' },
    { n: '04', title: 'Critical infrastructure protection', text: 'PDVSA perimeter video analytics, IoT sensors on Lake Maracaibo platforms, LPR at Puerto Cabello and CCS Airport, and FANB border alerts — all unified in the same operational environment.' },
    { n: '05', title: 'Ministry reporting', text: 'Automated KPIs for response times, municipality-level incident counts, and camera coverage for Ministry of Interior and state governor reporting — no manual export.' },
  ]

  const challengeCards = es ? [
    { icon: '🏛️', title: 'Coordinacion entre 5 cuerpos de seguridad sin plataforma comun', text: 'Venezuela opera con la PNB, CICPC, GNB, FANB y policias estadales en 23 estados y el Distrito Capital, cada una con radios, sistemas de video y bases de datos separadas. Sin una pantalla operativa compartida, los eventos que cruzan jurisdicciones — frecuentes en zonas urbanas como el Area Metropolitana de Caracas, Maracaibo y Valencia — generan duplicacion de respuesta y demoras criticas.' },
    { icon: '🛢️', title: 'Proteccion de infraestructura petrolifera sin videovigilancia integrada', text: 'Venezuela posee las mayores reservas probadas de petroleo del mundo. La infraestructura de PDVSA en el Lago de Maracaibo (~350 plataformas), la Faja del Orinoco y los terminales de exportacion de Jose, Puerto la Cruz y Guaraguao requiere vigilancia perimetral continua. Sin un VMS integrado con el despacho de la GNB, los incidentes en infraestructura critica se gestionan con radio y llamadas telefonicas, retrasando la respuesta en zonas de acceso remoto.' },
    { icon: '🌐', title: 'Frontera Colombia-Venezuela sin mapa operativo compartido', text: 'La frontera de 2,219 km con Colombia es uno de los corredores de narco-trafico mas activos del hemisferio. La FANB y la GNB operan puestos de control con sistemas aislados sin integracion de video, LPR ni mapa GIS compartido entre los comandos de Frontera y el Centro de Coordinacion Nacional. Sin una plataforma unificada, los movimientos identificados en un punto de control no se comparten en tiempo real con las unidades adyacentes.' },
    { icon: '📷', title: 'Camaras municipales sin VMS central ni integracion interinstitucional', text: 'Caracas, Maracaibo, Valencia, Barquisimeto y Maracay operan circuitos CCTV municipales sin integracion entre si ni con los sistemas de la PNB, CICPC o GNB. El Puerto Cabello — mayor puerto de contenedores del Caribe con 1.2M+ TEU/ano — y el Aeropuerto CCS gestionan video de forma independiente. Sin un VMS unificado, los operadores acceden a multiples consolas durante incidentes que cruzan jurisdicciones.' },
  ] : [
    { icon: '🏛️', title: '5 security forces without a shared operational platform', text: 'Venezuela operates with the PNB, CICPC, GNB, FANB, and state police in 23 states and the Capital District, each with separate radios, video systems, and databases. Without a shared operational screen, events crossing jurisdictions — frequent in urban zones like Greater Caracas, Maracaibo, and Valencia — generate duplicate responses and critical delays.' },
    { icon: '🛢️', title: 'Oil infrastructure protection without integrated video surveillance', text: "Venezuela holds the world's largest proven oil reserves. PDVSA infrastructure at Lake Maracaibo (~350 platforms), the Orinoco Belt, and the export terminals at Jose, Puerto la Cruz, and Guaraguao requires continuous perimeter surveillance. Without a VMS integrated with GNB dispatch, infrastructure incidents are managed by radio and phone calls, delaying response in remote-access zones." },
    { icon: '🌐', title: 'Colombia-Venezuela border without a shared operational map', text: 'The 2,219 km border with Colombia is one of the hemisphere\'s most active narco-trafficking corridors. The FANB and GNB operate checkpoints with isolated systems lacking integrated video, LPR, or a shared GIS map between Border Commands and the National Coordination Center. Without a unified platform, movements identified at one checkpoint are not shared in real time with adjacent units.' },
    { icon: '📷', title: 'Municipal cameras without central VMS or interagency integration', text: 'Caracas, Maracaibo, Valencia, Barquisimeto, and Maracay each operate municipal CCTV circuits without integration between them or with PNB, CICPC, or GNB systems. Puerto Cabello — the Caribbean\'s largest container port with 1.2M+ TEU/year — and CCS Airport manage video independently. Without a unified VMS, operators access multiple consoles during cross-jurisdiction incidents.' },
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
            {es ? 'Software de Seguridad Publica — Venezuela' : 'Public Safety Software — Venezuela'}
          </span>
        </div>

        {/* -- HERO -- */}
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
              ? 'Software de Seguridad Publica para Venezuela'
              : 'Public Safety Software for Venezuela'}
          </h1>
          <p style={{
            fontFamily: 'Space Grotesk, sans-serif', fontSize: '17px', lineHeight: 1.7,
            color: 'var(--dim)', maxWidth: '720px', margin: '0 0 32px',
          }}>
            {es
              ? 'Venezuela opera con la PNB, CICPC, GNB, FANB y policias estadales en 23 estados y el Distrito Capital. KabatOne unifica videovigilancia, despacho CAD, GIS operacional y proteccion de infraestructura PDVSA en una sola plataforma — desde el Area Metropolitana de Caracas hasta los terminales de exportacion del Lago de Maracaibo.'
              : 'Venezuela operates with the PNB, CICPC, GNB, FANB, and state police across 23 states and the Capital District. KabatOne unifies video surveillance, CAD dispatch, operational GIS, and PDVSA infrastructure protection on one platform — from Greater Caracas to the Lake Maracaibo export terminals.'}
          </p>
        </div>

        {/* -- CHALLENGES -- */}
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 40px 0' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: 'clamp(22px, 3vw, 30px)', color: 'var(--white)', margin: '0 0 24px',
          }}>
            {es ? 'Desafios Operativos en Venezuela' : 'Operational Challenges in Venezuela'}
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

        {/* -- COMPARISON TABLE -- */}
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

        {/* -- HOW IT WORKS -- */}
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 40px 0' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: 'clamp(22px, 3vw, 30px)', color: 'var(--white)', margin: '0 0 28px',
          }}>
            {es ? 'Como Funciona KabatOne en Venezuela' : 'How KabatOne Works in Venezuela'}
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

        {/* -- FAQ -- */}
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 40px 0' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: 'clamp(22px, 3vw, 30px)', color: 'var(--white)', margin: '0 0 28px',
          }}>
            {es ? 'Preguntas Frecuentes — Venezuela' : 'FAQ — Venezuela'}
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

        {/* -- RELATED LINKS -- */}
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 40px 0' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: '20px', color: 'var(--white)', margin: '0 0 16px',
          }}>
            {es ? 'Recursos Relacionados' : 'Related Resources'}
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[
              { href: '/resources/public-safety-software-colombia', label: es ? 'Colombia' : 'Colombia' },
              { href: '/resources/public-safety-software-brazil', label: es ? 'Brasil' : 'Brazil' },
              { href: '/resources/public-safety-software-guyana', label: 'Guyana' },
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
            h2={es ? 'Conozca KabatOne para Venezuela' : 'See KabatOne for Venezuela'}
            subtitle={es
              ? 'Coordinacion PNB, CICPC, GNB y FANB en una sola plataforma. Solicite una demostracion con escenarios reales de su ciudad.'
              : 'PNB, CICPC, GNB, and FANB coordination on one platform. Request a demo with real scenarios from your city.'}
          />
        </div>

        <Footer es={es} />
      </div>
    </>
  )
}
