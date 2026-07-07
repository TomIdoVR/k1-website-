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
  return generatePageMetadata('publicSafetySoftwareParaguay', locale)
}

export default async function PublicSafetySoftwareParaguayPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-paraguay/`
    : `${baseUrl}/resources/public-safety-software-paraguay/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Publica — Paraguay' : 'Public Safety Software — Paraguay', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: "¿Cual es la estructura de seguridad publica en Paraguay?",
      answer: "Paraguay organiza su seguridad en la Policia Nacional con ~25,000 efectivos (17 departamentos + Asuncion), las Fuerzas Militares (Ejercito, Armada, Fuerza Aerea — ~16,000 efectivos) bajo el Ministerio de Defensa Nacional, la Secretaria Nacional Antidrogas (SENAD) para control de narcotrafico y el Sistema Nacional de Emergencias (SINAE). Los numeros de emergencia son 911 (Policia Nacional), 131 (Bomberos), 141 (Cruz Roja) y 147 (MSPBS/ambulancia). Paraguay enfrenta el desafio del triple corredor de narcotrafico: la region del Chaco con presencia de carteles y la ruta del Rio Pilcomayo.",
    },
    {
      question: "¿Como se financia la tecnologia de seguridad publica en Paraguay?",
      answer: "Las adquisiciones se rigen por la Ley 2051/03 de Contrataciones Publicas y el portal DNCP (Direccion Nacional de Contrataciones Publicas — contrataciones.gov.py). El Ministerio del Interior y el Ministerio de Defensa tienen presupuestos separados. El BID, la CAF y la cooperacion de Estados Unidos (DEA/INL) financian proyectos de seguridad ciudadana. La Municipalidad de Asuncion opera su propio presupuesto de videovigilancia. La USAID apoya programas de fortalecimiento institucional y lucha antidroga en el marco del Plan de Gobierno Digital 2024-2028.",
    },
    {
      question: "¿Que es la SENAD y como impacta la tecnologia de seguridad publica en Paraguay?",
      answer: "La Secretaria Nacional Antidrogas (SENAD) es el organismo especializado en la lucha contra el narcotrafico y el crimen organizado en Paraguay. Paraguay es un corredor clave para la cocaina sudamericana y la marihuana del triangulo PBC (Paraguay-Brasil-Argentina). La SENAD coordina operaciones con la Policia Nacional, el Ejercito y la DEA norteamericana. Cualquier plataforma de seguridad publica en Paraguay debe integrar la coordinacion SENAD-Policia Nacional-Ministerio del Interior para operaciones antidroga y control fronterizo del Rio Pilcomayo y el Rio Paraguay.",
    },
    {
      question: "¿Como puede KabatOne integrarse con las camaras CCTV existentes en Paraguay?",
      answer: "KabatOne integra cualquier camara ONVIF/RTSP sin reemplazo de hardware. El sistema de videovigilancia de Asuncion (camaras de la Municipalidad y el Ministerio del Interior), las camaras en Ciudad del Este (la tercera zona franca mas grande del mundo), Encarnacion, Pedro Juan Caballero (frontera con Brasil/corredor narco), el Puerto de Asuncion (Administracion Nacional de Navegacion y Puertos — ANNP) y el Aeropuerto Internacional Silvio Pettirossi (ASU) se conectan directamente sin cambiar infraestructura.",
    },
    {
      question: "¿Como aborda KabatOne el narcotrafico y el crimen organizado en Paraguay?",
      answer: "Paraguay es el mayor productor de marihuana de Sudamerica y un corredor clave para la cocaina. Los departamentos de San Pedro, Amambay (Pedro Juan Caballero) y Canindeyu concentran la mayor actividad del narcotrafico. KabatOne provee el mapa GIS compartido de unidades de la Policia Nacional y la SENAD, LPR para control de vehiculos en rutas del narcotrafico, analitico de video para zonas de alta incidencia y despacho CAD que integra el 911 con las comisarias departamentales y los puestos fronterizos del Rio Pilcomayo y Rio Apa.",
    },
    {
      question: "¿Como se alinea KabatOne con el marco de adquisiciones de Paraguay (Ley 2051/03 DNCP)?",
      answer: "KabatOne opera a traves de distribuidores e integradores locales conforme a la Ley 2051/03 de Contrataciones Publicas y el portal contrataciones.gov.py de la DNCP. La arquitectura modular permite licitar por componente (K-Video, K-Dispatch, K-Safety) o como plataforma unificada, adaptandose a los presupuestos del Ministerio del Interior, Gobernaciones departamentales y la Municipalidad de Asuncion. Las especificaciones tecnicas abiertas facilitan la inclusion en pliegos. La Ley 6534/20 de Proteccion de Datos Personales (SENATIC) rige el manejo de datos en sistemas publicos.",
    },
  ] : [
    {
      question: "What is Paraguay's public safety structure?",
      answer: "Paraguay organizes its security around the National Police with ~25,000 officers (17 departments + Asuncion), the Military Forces (Army, Navy, Air Force — ~16,000 personnel) under the Ministry of National Defense, the National Anti-Drug Secretariat (SENAD) for narco-trafficking control, and the National Emergency System (SINAE). Emergency numbers are 911 (National Police), 131 (Fire Department), 141 (Red Cross), and 147 (MSPBS/ambulance). Paraguay faces the challenge of the triple narco-trafficking corridor: the Chaco region with cartel presence and the Pilcomayo River route.",
    },
    {
      question: "How is public safety technology funded in Paraguay?",
      answer: "Procurement is governed by Law 2051/03 on Public Contracting and the DNCP portal (National Directorate of Public Contracting — contrataciones.gov.py). The Ministry of Interior and Ministry of Defense have separate budgets. The IDB, CAF, and US cooperation (DEA/INL) fund citizen security projects. The Municipality of Asuncion manages its own video surveillance budget. USAID supports institutional strengthening and anti-drug programs under the Digital Government Plan 2024-2028.",
    },
    {
      question: "What is SENAD and how does it impact public safety technology in Paraguay?",
      answer: "The National Anti-Drug Secretariat (SENAD) is the specialized agency for fighting narco-trafficking and organized crime in Paraguay. Paraguay is a key corridor for South American cocaine and marijuana from the PBC triangle (Paraguay-Brazil-Argentina). SENAD coordinates operations with the National Police, Army, and US DEA. Any public safety platform in Paraguay must integrate SENAD-National Police-Ministry of Interior coordination for anti-drug operations and border control along the Pilcomayo and Paraguay rivers.",
    },
    {
      question: "How can KabatOne integrate with existing CCTV infrastructure in Paraguay?",
      answer: "KabatOne integrates any ONVIF/RTSP camera without hardware replacement. Asuncion's video surveillance system (cameras from the Municipality and Ministry of Interior), cameras in Ciudad del Este (the world's third-largest free trade zone), Encarnacion, Pedro Juan Caballero (Brazil border/narco corridor), the Port of Asuncion (National Navigation and Ports Administration — ANNP), and Silvio Pettirossi International Airport (ASU) connect directly without changing infrastructure.",
    },
    {
      question: "How does KabatOne address narco-trafficking and organized crime in Paraguay?",
      answer: "Paraguay is South America's largest marijuana producer and a key corridor for cocaine. The departments of San Pedro, Amambay (Pedro Juan Caballero), and Canindeyu concentrate the most narco-trafficking activity. KabatOne provides the shared GIS map of National Police and SENAD units, LPR for vehicle control on narco-trafficking routes, video analytics for high-incidence zones, and CAD dispatch integrating 911 with departmental police stations and border posts on the Pilcomayo and Apa rivers.",
    },
    {
      question: "How does KabatOne align with Paraguay's procurement framework (Law 2051/03 DNCP)?",
      answer: "KabatOne operates through local distributors and integrators under Law 2051/03 on Public Contracting and the DNCP contrataciones.gov.py portal. The modular architecture allows tendering by component (K-Video, K-Dispatch, K-Safety) or as a unified platform, adapting to Ministry of Interior, departmental government, and Municipality of Asuncion budgets. Open technical specifications facilitate inclusion in procurement documents. Law 6534/20 on Personal Data Protection (SENATIC) governs data handling in public systems.",
    },
  ]

  const artSchema = articleSchema(
    es ? 'Software de Seguridad Publica para Paraguay — Policia Nacional, SENAD y Ciudad del Este' : 'Public Safety Software for Paraguay: National Police, SENAD, and Ciudad del Este',
    es
      ? 'Plataforma unificada de seguridad publica para Paraguay — Policia Nacional, SENAD antidroga, videovigilancia Asuncion, Ciudad del Este y adquisiciones Ley 2051/03 DNCP.'
      : 'Unified public safety platform for Paraguay — National Police, SENAD anti-drug, Asuncion video surveillance, Ciudad del Este, and Law 2051/03 DNCP-compliant procurement.',
    pageUrl,
    '2026-07-07'
  )

  const comparisonRows = es ? [
    { feature: 'Video', fragmented: 'Camaras de la Municipalidad de Asuncion y el Ministerio del Interior sin VMS compartido entre comisarias departamentales y SENAD', unified: 'VMS unificado con todas las camaras buscables por departamento, municipio y tipo de evento' },
    { feature: 'Despacho de emergencias', fragmented: '911 activo pero sin integracion de CAD con las 17 comisarias departamentales y los puestos de control fronterizo SENAD', unified: 'Registro unico que conecta 911, comisarias departamentales, SENAD, Bomberos y Cruz Roja' },
    { feature: 'Control narcotrafico', fragmented: 'SENAD y Policia Nacional operan con sistemas de comunicacion separados sin GIS operacional compartido', unified: 'GIS compartido con unidades SENAD, Policia Nacional y Ejercito en tiempo real para operaciones antidroga' },
    { feature: 'Ciudad del Este y fronteras', fragmented: 'Camaras de la tercera zona franca mas grande del mundo sin integracion con la Policia Nacional y la Aduana', unified: 'Video Ciudad del Este + Aduana + LPR fronteras Brasil/Argentina en un solo mapa operativo' },
    { feature: 'Reportes Ministerio del Interior', fragmented: 'Exportacion manual de datos por comisaria departamental y por tipo de incidente', unified: 'KPIs automatizados de tiempos de respuesta, incidentes por departamento y cobertura de camaras' },
    { feature: 'Cumplimiento Ley 6534/20', fragmented: 'Sistemas de video sin controles de acceso a datos biometricos compatibles con la Ley 6534/20 SENATIC', unified: 'Roles y permisos de acceso a datos biometricos y video conforme a Ley 6534/20 (SENATIC)' },
  ] : [
    { feature: 'Video', fragmented: 'Municipality of Asuncion and Ministry of Interior cameras without shared VMS across departmental police stations and SENAD', unified: 'Unified VMS with all cameras searchable by department, municipality, and event type' },
    { feature: 'Emergency dispatch', fragmented: 'Active 911 but no CAD integration with 17 departmental police stations and SENAD border control posts', unified: 'Single record bridging 911, departmental stations, SENAD, Fire, and Red Cross' },
    { feature: 'Narco-trafficking control', fragmented: 'SENAD and National Police operate with separate communication systems without shared operational GIS', unified: 'Shared GIS with SENAD, National Police, and Army units in real time for anti-drug operations' },
    { feature: 'Ciudad del Este and borders', fragmented: "Cameras from the world's third-largest free trade zone without integration with National Police and Customs", unified: 'Ciudad del Este video + Customs + LPR Brazil/Argentina borders on one operational map' },
    { feature: 'Ministry of Interior reporting', fragmented: 'Manual export of data by departmental police station and incident type', unified: 'Automated KPIs for response times, department-level incident counts, and camera coverage' },
    { feature: 'Law 6534/20 compliance', fragmented: 'Video systems without biometric data access controls compatible with Law 6534/20 SENATIC', unified: 'Biometric and video data access roles and permissions per Law 6534/20 (SENATIC)' },
  ]

  const workflowSteps = es ? [
    { n: '01', title: 'Video unificado', text: 'Todas las camaras — municipales en Asuncion, Ciudad del Este, Encarnacion, Pedro Juan Caballero y los 17 departamentos, camaras del Puerto de Asuncion (ANNP), LPR en el Aeropuerto Silvio Pettirossi (ASU), circuitos en las fronteras con Argentina y Brasil (Puente Internacional de la Amistad/Puente San Roque Gonzalez) — en una sola interfaz VMS con busqueda por departamento, municipio y tipo de evento.' },
    { n: '02', title: 'Centro de despacho 911 y SENAD', text: 'Recepcion 911, clasificacion de incidentes y asignacion de unidades desde una sola plataforma CAD. Registro unico compartido entre las 17 comisarias departamentales, la SENAD, Bomberos y Cruz Roja. Coordinacion directa con puestos de control fronterizo del Rio Pilcomayo y Rio Apa.' },
    { n: '03', title: 'GIS en tiempo real', text: 'Posiciones de unidades de la Policia Nacional, SENAD y Bomberos en un solo mapa operativo. Vista conjunta entre la Jefatura de Policia de Asuncion y el Ministerio del Interior para coordinacion de operaciones antidroga y control de fronteras fluviales.' },
    { n: '04', title: 'LPR para control de narcotrafico', text: 'Reconocimiento de placas en los principales accesos a Asuncion, Ciudad del Este y las rutas de narcotrafico (Ruta 3 — San Pedro, Ruta 10 — Amambay). Integracion directa con las bases de datos de vehiculos robados y alertas de la SENAD y la Policia Nacional.' },
    { n: '05', title: 'Reportes DNCP y Ministerio del Interior', text: 'KPIs automatizados de tiempos de respuesta, incidentes por departamento y cobertura de camaras para reportes del Ministerio del Interior, Gobernaciones departamentales y la Municipalidad de Asuncion — sin exportacion manual. Cumplimiento con Ley 6534/20 (SENATIC) para manejo de datos biometricos.' },
  ] : [
    { n: '01', title: 'Unified video', text: 'All cameras — municipal in Asuncion, Ciudad del Este, Encarnacion, Pedro Juan Caballero, and all 17 departments, Port of Asuncion cameras (ANNP), LPR at Silvio Pettirossi Airport (ASU), circuits at Argentina and Brazil borders (Friendship Bridge/San Roque Gonzalez Bridge) — on one VMS interface with search by department, municipality, and event type.' },
    { n: '02', title: 'Unified 911 and SENAD dispatch', text: 'Single 911 intake, incident classification, and unit assignment from one CAD platform. Shared record bridging all 17 departmental police stations, SENAD, Fire, and Red Cross. Direct coordination with border control posts on the Pilcomayo and Apa rivers.' },
    { n: '03', title: 'Real-time GIS', text: 'National Police, SENAD, and Fire unit positions on one shared operational map — joint view between Asuncion Police Headquarters and the Ministry of Interior for anti-drug operations and river border control coordination.' },
    { n: '04', title: 'LPR for narco-trafficking control', text: 'License plate recognition at main access points to Asuncion, Ciudad del Este, and narco-trafficking routes (Route 3 — San Pedro, Route 10 — Amambay). Direct integration with stolen vehicle databases and SENAD and National Police alerts.' },
    { n: '05', title: 'DNCP and Ministry of Interior reporting', text: 'Automated KPIs for response times, department-level incident counts, and camera coverage for Ministry of Interior, departmental government, and Municipality of Asuncion reporting — no manual export. Compliance with Law 6534/20 (SENATIC) for biometric data handling.' },
  ]

  const challengeCards = es ? [
    { icon: '💊', title: 'Paraguay: mayor productor de marihuana de Sudamerica con tres corredores de narcotrafico activos', text: 'Paraguay produce el 80% de la marihuana de la region y es un corredor clave para la cocaina del triangulo PBC (Paraguay-Brasil-Argentina). Los departamentos de Amambay (Pedro Juan Caballero/frontera Ponta Pora), San Pedro (Ruta 3) y Canindeyu operan como principales zonas de produccion y transito. La SENAD y la Policia Nacional carecen de un GIS operacional compartido, lo que limita la coordinacion en tiempo real durante operaciones de interdiccion.' },
    { icon: '🌆', title: 'Ciudad del Este: tercera zona franca del mundo sin VMS integrado con Aduana y Policia Nacional', text: 'Ciudad del Este es la tercera zona franca mas grande del mundo — solo detras de Miami y Hong Kong — con un volumen comercial de miles de millones de dolares anuales y una alta densidad de comercio informal. La Policia Nacional y la Direccion Nacional de Aduanas (DNA) operan circuitos CCTV independientes sin una plataforma unificada, lo que dificulta la persecucion de contrabando, pirateria y lavado de activos en tiempo real.' },
    { icon: '🌊', title: 'Fronteras fluviales del Rio Paraguay y Rio Pilcomayo sin control integrado', text: 'Paraguay es un pais mediterraneo (sin acceso directo al mar) cuyas principales vias de comercio y transito son los rios Paraguay, Pilcomayo, Apa y Parana. La Armada Nacional controla la navegacion fluvial pero sin integracion con los sistemas de video de la Policia Nacional y la Aduana, creando brechas en el control de embarcaciones sospechosas de trafico de drogas y contrabando en el corredor hidrografico.' },
    { icon: '📡', title: 'Sistema 911 activo pero sin integracion CAD entre comisarias departamentales y SENAD', text: 'Paraguay cuenta con el 911 como numero unico de emergencias de la Policia Nacional, pero el despacho opera con sistemas fragmentados por departamento sin integracion con la SENAD, los Bomberos Voluntarios y la Cruz Roja Paraguaya. Los incidentes en zonas fronterizas — especialmente en Amambay, Concepcion y Alto Paraguay — requieren coordinacion manual entre comisarias, lo que aumenta los tiempos de respuesta en areas criticas.' },
  ] : [
    { icon: '💊', title: "Paraguay: South America's largest marijuana producer with three active narco-trafficking corridors", text: 'Paraguay produces 80% of the region\'s marijuana and is a key corridor for cocaine from the PBC triangle (Paraguay-Brazil-Argentina). The departments of Amambay (Pedro Juan Caballero/Ponta Pora border), San Pedro (Route 3), and Canindeyu operate as the main production and transit zones. SENAD and the National Police lack a shared operational GIS, limiting real-time coordination during interdiction operations.' },
    { icon: '🌆', title: "Ciudad del Este: world's third-largest free trade zone without integrated VMS with Customs and National Police", text: "Ciudad del Este is the world's third-largest free trade zone — behind only Miami and Hong Kong — with a commercial volume of billions of dollars annually and high informal trade density. The National Police and National Customs Directorate (DNA) operate independent CCTV circuits without a unified platform, hindering real-time pursuit of smuggling, piracy, and money laundering." },
    { icon: '🌊', title: 'Paraguay and Pilcomayo river borders without integrated control', text: "Paraguay is a landlocked country whose main trade and transit routes are the Paraguay, Pilcomayo, Apa, and Parana rivers. The National Navy controls river navigation but without integration with National Police and Customs video systems, creating gaps in the control of vessels suspected of drug trafficking and smuggling in the river corridor." },
    { icon: '📡', title: 'Active 911 system but without CAD integration between departmental police stations and SENAD', text: 'Paraguay uses 911 as the single emergency number for the National Police, but dispatch operates with fragmented systems by department without integration with SENAD, Volunteer Fire Departments, and Paraguayan Red Cross. Incidents in border zones — especially Amambay, Concepcion, and Alto Paraguay — require manual coordination between police stations, increasing response times in critical areas.' },
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
            {es ? 'Software de Seguridad Publica — Paraguay' : 'Public Safety Software — Paraguay'}
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
              ? 'Software de Seguridad Publica para Paraguay'
              : 'Public Safety Software for Paraguay'}
          </h1>
          <p style={{
            fontFamily: 'Space Grotesk, sans-serif', fontSize: '17px', lineHeight: 1.7,
            color: 'var(--dim)', maxWidth: '720px', margin: '0 0 32px',
          }}>
            {es
              ? 'Paraguay opera con ~25,000 efectivos de la Policia Nacional en 17 departamentos y enfrenta el desafio del narcotrafico en el triangulo PBC. KabatOne unifica videovigilancia, despacho CAD, GIS operacional y coordinacion SENAD en una sola plataforma — desde Ciudad del Este hasta los rios fronterizos.'
              : 'Paraguay operates with ~25,000 National Police officers across 17 departments and faces the challenge of narco-trafficking in the PBC triangle. KabatOne unifies video surveillance, CAD dispatch, operational GIS, and SENAD coordination on one platform — from Ciudad del Este to the border rivers.'}
          </p>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 40px 0' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: 'clamp(22px, 3vw, 30px)', color: 'var(--white)', margin: '0 0 24px',
          }}>
            {es ? 'Desafios Operativos en Paraguay' : 'Operational Challenges in Paraguay'}
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
            {es ? 'Como Funciona KabatOne en Paraguay' : 'How KabatOne Works in Paraguay'}
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
            {es ? 'Preguntas Frecuentes — Paraguay' : 'FAQ — Paraguay'}
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
              { href: '/resources/public-safety-software-argentina', label: es ? 'Argentina' : 'Argentina' },
              { href: '/resources/public-safety-software-brazil', label: es ? 'Brasil' : 'Brazil' },
              { href: '/resources/public-safety-software-bolivia', label: 'Bolivia' },
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
            h2={es ? 'Conozca KabatOne para Paraguay' : 'See KabatOne for Paraguay'}
            subtitle={es
              ? 'Policia Nacional, SENAD y coordinacion antidroga en una sola plataforma. Solicite una demostracion con escenarios reales.'
              : 'National Police, SENAD, and anti-drug coordination on one platform. Request a demo with real scenarios.'}
          />
        </div>

        <Footer es={es} />
      </div>
    </>
  )
}
