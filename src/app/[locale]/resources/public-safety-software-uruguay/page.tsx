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
  return generatePageMetadata('publicSafetySoftwareUruguay', locale)
}

export default async function PublicSafetySoftwareUruguayPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-uruguay/`
    : `${baseUrl}/resources/public-safety-software-uruguay/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Publica — Uruguay' : 'Public Safety Software — Uruguay', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: "¿Cual es la estructura de seguridad publica en Uruguay?",
      answer: "Uruguay organiza su seguridad en la Policia Nacional con ~17,000 efectivos (Direccion Nacional de Policia, Guardia Republicana, Policia Caminera y Policia Aduanera), el Ejercito Nacional, la Armada Nacional y la Fuerza Aerea Uruguaya — bajo el Ministerio del Interior y el Ministerio de Defensa Nacional. Los numeros de emergencia son 911 (sistema unificado desde 2002), 915 (policia), 104 (emergencias medicas) y 105 (bomberos). Uruguay es referente regional en transparencia y gobernanza digital: AGESIC (Agencia de Gobierno Electronico y Sociedad de la Informacion y del Conocimiento) coordina la transformacion digital del Estado.",
    },
    {
      question: "¿Como se financia la tecnologia de seguridad publica en Uruguay?",
      answer: "Las adquisiciones se rigen por el TOCAF (Texto Ordenado de Contabilidad y Administracion Financiera, Decreto 150/012) y el portal CR Online (compras.gub.uy), gestionado por el ACCE (Agencia de Compras y Contrataciones del Estado). Uruguay ha implementado el modelo de contratacion electronica mas avanzado de Sudamerica. El Ministerio del Interior y el Ministerio de Defensa tienen presupuestos separados. La CAF, el BID y la cooperacion de la UE financian proyectos de smart city en Montevideo y Punta del Este. El PNUD apoya programas de modernizacion policial y ciudades seguras.",
    },
    {
      question: "¿Que es AGESIC y como impacta la tecnologia de seguridad publica en Uruguay?",
      answer: "La Agencia de Gobierno Electronico y Sociedad de la Informacion y del Conocimiento (AGESIC) lidera la transformacion digital del Estado uruguayo, incluyendo la estandarizacion de plataformas tecnologicas para el Ministerio del Interior y los municipios. AGESIC define los estandares de interoperabilidad y ciberseguridad para sistemas gubernamentales, lo que significa que cualquier plataforma de seguridad publica — incluyendo VMS, CAD y GIS — debe cumplir con los marcos tecnologicos que AGESIC establece. KabatOne cumple con estandares abiertos (ONVIF, REST API) compatibles con los requerimientos de AGESIC.",
    },
    {
      question: "¿Como puede KabatOne integrarse con las camaras CCTV existentes en Uruguay?",
      answer: "KabatOne integra cualquier camara ONVIF/RTSP sin reemplazo de hardware. El sistema de videovigilancia municipal de Montevideo (con cientos de camaras operadas por la Intendencia y el Ministerio del Interior), las camaras en Ciudad de la Costa, Las Piedras, Maldonado y Punta del Este se conectan directamente. Camaras en el Puerto de Montevideo (Katoen Natie, terminal mas moderna de Sudamerica), el Aeropuerto Internacional Carrasco (MVD), el Puerto de Nueva Palmira y los terminales de granos del Rio Uruguay tambien se integran sin cambiar infraestructura.",
    },
    {
      question: "¿Como aborda KabatOne el crecimiento del crimen organizado en Uruguay?",
      answer: "Uruguay mantiene indices de criminalidad bajos para la region, pero ha experimentado crecimiento del crimen organizado en Montevideo — incluyendo el narcotrafico de pasta base, el robo de autos y las bandas del tipo Primer Cartel Uruguayo. La Policia Nacional opera la Jefatura de Policia de Montevideo y 18 jefaturas departamentales. KabatOne provee el mapa GIS compartido de unidades policiales, LPR para persecucion de vehiculos robados, analitico de video para zonas de mayor incidencia y despacho CAD que integra el 911 con las jefaturas departamentales.",
    },
    {
      question: "¿Como se alinea KabatOne con el marco de adquisiciones de Uruguay (TOCAF/CR Online)?",
      answer: "KabatOne opera a traves de distribuidores e integradores locales conforme al TOCAF (Decreto 150/012) y el portal compras.gub.uy del ACCE. La arquitectura modular permite licitar por componente (K-Video, K-Dispatch, K-Safety) o como plataforma unificada, adaptandose a los presupuestos del Ministerio del Interior, Intendencias departamentales y empresas publicas (ANCAP, UTE, OSE, ANTEL). Las especificaciones tecnicas abiertas facilitan la inclusion en pliegos sin clausulas de exclusividad. La Ley 18.331 de Proteccion de Datos Personales (URCDP) — una de las mas robustas de LATAM, equivalente al GDPR — rige el manejo de datos en cualquier sistema publico.",
    },
  ] : [
    {
      question: "What is Uruguay's public safety structure?",
      answer: "Uruguay organizes its security around the National Police with ~17,000 officers (National Directorate of Police, Republican Guard, Traffic Police, and Customs Police), the National Army, National Navy, and Uruguayan Air Force — under the Ministry of Interior and Ministry of National Defense. Emergency numbers are 911 (unified system since 2002), 915 (police), 104 (medical emergencies), and 105 (fire). Uruguay is a regional leader in transparency and digital governance: AGESIC (Agency for E-Government and the Information and Knowledge Society) coordinates the State's digital transformation.",
    },
    {
      question: "How is public safety technology funded in Uruguay?",
      answer: "Procurement is governed by the TOCAF (Consolidated Text on Government Accounting and Administration, Decree 150/012) and the CR Online portal (compras.gub.uy), managed by ACCE (State Procurement and Contracting Agency). Uruguay has implemented the most advanced electronic procurement model in South America. The Ministry of Interior and Ministry of Defense have separate budgets. CAF, IDB, and EU cooperation fund smart city projects in Montevideo and Punta del Este. UNDP supports police modernization and safe city programs.",
    },
    {
      question: "What is AGESIC and how does it impact public safety technology in Uruguay?",
      answer: "The Agency for E-Government and the Information and Knowledge Society (AGESIC) leads the digital transformation of the Uruguayan State, including standardization of technology platforms for the Ministry of Interior and municipalities. AGESIC defines interoperability and cybersecurity standards for government systems, meaning any public safety platform — including VMS, CAD, and GIS — must comply with AGESIC technology frameworks. KabatOne complies with open standards (ONVIF, REST API) compatible with AGESIC requirements.",
    },
    {
      question: "How can KabatOne integrate with existing CCTV infrastructure in Uruguay?",
      answer: "KabatOne integrates any ONVIF/RTSP camera without hardware replacement. Montevideo's municipal video surveillance system (with hundreds of cameras operated by the municipality and Ministry of Interior), cameras in Ciudad de la Costa, Las Piedras, Maldonado, and Punta del Este connect directly. Cameras at the Port of Montevideo (Katoen Natie, South America's most modern terminal), Carrasco International Airport (MVD), Port of Nueva Palmira, and grain terminals on the Uruguay River also integrate without changing infrastructure.",
    },
    {
      question: "How does KabatOne address the growth of organized crime in Uruguay?",
      answer: "Uruguay maintains low crime rates for the region, but has experienced organized crime growth in Montevideo — including paste-base drug trafficking, vehicle theft, and gangs. The National Police operates the Montevideo Police Headquarters and 18 departmental police headquarters. KabatOne provides the shared GIS map of police units, LPR for stolen vehicle pursuit, video analytics for high-incidence zones, and CAD dispatch that integrates the 911 system with departmental headquarters.",
    },
    {
      question: "How does KabatOne align with Uruguay's procurement framework (TOCAF/CR Online)?",
      answer: "KabatOne operates through local distributors and integrators under the TOCAF (Decree 150/012) and the ACCE compras.gub.uy portal. The modular architecture allows tendering by component (K-Video, K-Dispatch, K-Safety) or as a unified platform, adapting to Ministry of Interior, departmental government, and state enterprise (ANCAP, UTE, OSE, ANTEL) budgets. Open technical specifications facilitate inclusion in procurement documents without exclusivity clauses. Law 18,331 on Personal Data Protection (URCDP) — one of the most robust in LATAM, equivalent to GDPR — governs data handling in any public system.",
    },
  ]

  const artSchema = articleSchema(
    es ? 'Software de Seguridad Publica para Uruguay — Policia Nacional, Smart City Montevideo y AGESIC' : 'Public Safety Software for Uruguay: National Police, Smart City Montevideo, and AGESIC',
    es
      ? 'Plataforma unificada de seguridad publica para Uruguay — Policia Nacional, sistema 911, VMS municipal Montevideo, coordinacion interinstitucional y adquisiciones TOCAF/AGESIC.'
      : 'Unified public safety platform for Uruguay — National Police, 911 system, Montevideo municipal VMS, interagency coordination, and TOCAF/AGESIC-compliant procurement.',
    pageUrl,
    '2026-07-07'
  )

  const comparisonRows = es ? [
    { feature: 'Video', fragmented: 'Camaras de la Intendencia de Montevideo y el Ministerio del Interior sin VMS compartido entre jefaturas departamentales', unified: 'VMS unificado con todas las camaras buscables por departamento, municipio y tipo de evento' },
    { feature: 'Despacho de emergencias', fragmented: '911 centralizado pero sin integracion de CAD con las 18 jefaturas departamentales y la Guardia Republicana', unified: 'Registro unico que conecta 911, jefaturas departamentales, Guardia Republicana, Bomberos y SIATE' },
    { feature: 'Transformacion digital (AGESIC)', fragmented: 'Sistemas de video y despacho sin integracion con los estandares de interoperabilidad de AGESIC', unified: 'Plataforma ONVIF/REST API compatible con los marcos tecnologicos de AGESIC y compras.gub.uy' },
    { feature: 'Smart city Montevideo', fragmented: 'Camaras Intendencia y Ministerio del Interior en consolas separadas sin capa GIS compartida', unified: 'Video Intendencia + Ministerio del Interior + LPR Puerto + MVD Airport en un solo mapa GIS' },
    { feature: 'Reportes Ministerio del Interior', fragmented: 'Exportacion manual de datos por jefatura departamental y por tipo de incidente', unified: 'KPIs automatizados de tiempos de respuesta, incidentes por departamento y cobertura de camaras' },
    { feature: 'Crimen organizado emergente', fragmented: 'Sin analitico de video ni LPR para persecucion de vehiculos en zonas de mayor incidencia de Montevideo', unified: 'Analitico de video, LPR y despacho CAD integrados para respuesta rapida a incidentes prioritarios' },
  ] : [
    { feature: 'Video', fragmented: 'Montevideo municipality and Ministry of Interior cameras without shared VMS across departmental headquarters', unified: 'Unified VMS with all cameras searchable by department, municipality, and event type' },
    { feature: 'Emergency dispatch', fragmented: 'Centralized 911 but no CAD integration with the 18 departmental headquarters and Republican Guard', unified: 'Single record bridging 911, departmental headquarters, Republican Guard, Fire, and SIATE' },
    { feature: 'Digital transformation (AGESIC)', fragmented: 'Video and dispatch systems without integration with AGESIC interoperability standards', unified: 'ONVIF/REST API platform compatible with AGESIC technology frameworks and compras.gub.uy' },
    { feature: 'Smart city Montevideo', fragmented: 'Municipality and Ministry of Interior cameras on separate consoles without shared GIS layer', unified: 'Municipality video + Ministry of Interior + Port LPR + MVD Airport on one GIS map' },
    { feature: 'Ministry of Interior reporting', fragmented: 'Manual export of data by departmental headquarters and incident type', unified: 'Automated KPIs for response times, department-level incident counts, and camera coverage' },
    { feature: 'Emerging organized crime', fragmented: 'No video analytics or LPR for vehicle pursuit in Montevideo high-incidence zones', unified: 'Integrated video analytics, LPR, and CAD dispatch for fast response to priority incidents' },
  ]

  const workflowSteps = es ? [
    { n: '01', title: 'Video unificado', text: 'Todas las camaras — municipales en Montevideo, Las Piedras, Ciudad de la Costa, Maldonado, Punta del Este y los 18 departamentos, camaras del Puerto de Montevideo (Katoen Natie), LPR en el Aeropuerto Carrasco (MVD), circuitos en el Puerto de Nueva Palmira y las terminales del Rio Uruguay — en una sola interfaz VMS con busqueda por departamento, municipio y tipo de evento.' },
    { n: '02', title: 'Centro de despacho 911 unificado', text: 'Recepcion 911/915, clasificacion de incidentes y asignacion de unidades desde una sola plataforma CAD. Registro unico compartido entre las 18 jefaturas departamentales, Guardia Republicana, Bomberos y SIATE (Sistema de Atencion Medica de Emergencia del Estado).' },
    { n: '03', title: 'GIS en tiempo real', text: 'Posiciones de unidades de la Policia Nacional, Guardia Republicana y Bomberos en un solo mapa operativo. Vista conjunta entre la Jefatura de Policia de Montevideo y el Ministerio del Interior.' },
    { n: '04', title: 'Integracion con estandares AGESIC', text: 'Arquitectura ONVIF/REST API compatible con los marcos de interoperabilidad de AGESIC. APIs abiertas para integracion con sistemas de ANTEL, UTE y otros entes publicos. Cumplimiento con la Ley 18.331 (URCDP) para manejo de datos biometricos y de video.' },
    { n: '05', title: 'Reportes para el Ministerio del Interior', text: 'KPIs automatizados de tiempos de respuesta, incidentes por departamento y cobertura de camaras para reportes del Ministerio del Interior y las Intendencias departamentales — sin exportacion manual.' },
  ] : [
    { n: '01', title: 'Unified video', text: 'All cameras — municipal in Montevideo, Las Piedras, Ciudad de la Costa, Maldonado, Punta del Este, and all 18 departments, Port of Montevideo cameras (Katoen Natie), LPR at Carrasco Airport (MVD), circuits at Port of Nueva Palmira and Uruguay River terminals — on one VMS interface with search by department, municipality, and event type.' },
    { n: '02', title: 'Unified 911 dispatch center', text: 'Single 911/915 intake, incident classification, and unit assignment from one CAD platform. Shared incident record bridging all 18 departmental headquarters, Republican Guard, Fire, and SIATE (State Emergency Medical Care System).' },
    { n: '03', title: 'Real-time GIS', text: 'National Police, Republican Guard, and Fire unit positions on one shared operational map — joint view between Montevideo Police Headquarters and the Ministry of Interior.' },
    { n: '04', title: 'AGESIC standards integration', text: 'ONVIF/REST API architecture compatible with AGESIC interoperability frameworks. Open APIs for integration with ANTEL, UTE, and other state entities. Compliance with Law 18,331 (URCDP) for handling biometric and video data.' },
    { n: '05', title: 'Ministry of Interior reporting', text: 'Automated KPIs for response times, department-level incident counts, and camera coverage for Ministry of Interior and departmental government reporting — no manual export.' },
  ]

  const challengeCards = es ? [
    { icon: '🏛️', title: 'Coordinacion multi-agencia en 19 departamentos con sistemas fragmentados', text: 'Uruguay administra su seguridad con 18 jefaturas departamentales de la Policia Nacional mas la Jefatura de Policia de Montevideo, mas la Guardia Republicana, la Policia Caminera y la Policia Aduanera — cada una con sistemas de comunicacion y video distintos. Sin una pantalla operativa compartida, los incidentes en la frontera entre Montevideo y Canelones (la conurbacion mas densa del pais) generan retrasos en la coordinacion entre jefaturas.' },
    { icon: '🌐', title: 'Transformacion digital AGESIC sin plataforma de seguridad integrada', text: 'Uruguay es referente regional en gobernanza digital: AGESIC coordina la transformacion digital del Estado y define los estandares de interoperabilidad para todos los sistemas gubernamentales. Sin embargo, los sistemas de videovigilancia del Ministerio del Interior y las Intendencias departamentales operan en su mayoria con plataformas propietarias sin cumplir los marcos de interoperabilidad de AGESIC, creando una brecha entre el avance digital del Estado y la operacion real de seguridad publica.' },
    { icon: '🚢', title: 'Puerto de Montevideo y aeropuerto MVD sin VMS compartido con la Policia Nacional', text: 'El Puerto de Montevideo, operado por Katoen Natie, es la terminal de contenedores mas moderna de Sudamerica. El Aeropuerto Internacional Carrasco (MVD) maneja 3M+ pasajeros por ano. Ambas infraestructuras criticas gestionan sus sistemas de video de forma independiente de la Policia Nacional y la Policia Aduanera, lo que significa que incidentes en el puerto o el aeropuerto requieren llamadas telefonicas para coordinar respuesta, en lugar de despacho automatico basado en video.' },
    { icon: '📷', title: 'Crimen organizado emergente sin analitico de video ni LPR integrado', text: 'Uruguay mantiene bajos indices de criminalidad, pero Montevideo ha experimentado un aumento en el crimen organizado — narcotrafico de pasta base, robos de autos y bandas en barrios perifericos. La Policia Nacional carece de un sistema de LPR integrado con el despacho CAD y el video municipal, lo que limita la capacidad de perseguir vehiculos en tiempo real y de analizar patrones de criminalidad cruzando datos de video con registros de incidentes.' },
  ] : [
    { icon: '🏛️', title: 'Multi-agency coordination across 19 departments with fragmented systems', text: 'Uruguay manages security with 18 departmental National Police headquarters plus the Montevideo Police Headquarters, Republican Guard, Traffic Police, and Customs Police — each with distinct communication and video systems. Without a shared operational screen, incidents on the border between Montevideo and Canelones (the country\'s densest conurbation) create coordination delays between headquarters.' },
    { icon: '🌐', title: 'AGESIC digital transformation without integrated security platform', text: "Uruguay is a regional leader in digital governance: AGESIC coordinates the State's digital transformation and defines interoperability standards for all government systems. However, Ministry of Interior and departmental government video surveillance systems largely operate with proprietary platforms not meeting AGESIC interoperability frameworks, creating a gap between the State's digital advances and actual public safety operations." },
    { icon: '🚢', title: 'Port of Montevideo and MVD Airport without shared VMS with National Police', text: "The Port of Montevideo, operated by Katoen Natie, is South America's most modern container terminal. Carrasco International Airport (MVD) handles 3M+ passengers per year. Both critical infrastructures manage their video systems independently from the National Police and Customs Police, meaning incidents at the port or airport require phone calls to coordinate response rather than video-based automatic dispatch." },
    { icon: '📷', title: 'Emerging organized crime without integrated video analytics or LPR', text: 'Uruguay maintains low crime rates, but Montevideo has experienced an increase in organized crime — paste-base drug trafficking, vehicle theft, and gangs in peripheral neighborhoods. The National Police lacks an LPR system integrated with CAD dispatch and municipal video, limiting the ability to pursue vehicles in real time and analyze crime patterns by crossing video data with incident records.' },
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
            {es ? 'Software de Seguridad Publica — Uruguay' : 'Public Safety Software — Uruguay'}
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
              ? 'Software de Seguridad Publica para Uruguay'
              : 'Public Safety Software for Uruguay'}
          </h1>
          <p style={{
            fontFamily: 'Space Grotesk, sans-serif', fontSize: '17px', lineHeight: 1.7,
            color: 'var(--dim)', maxWidth: '720px', margin: '0 0 32px',
          }}>
            {es
              ? 'Uruguay opera con ~17,000 efectivos de la Policia Nacional en 19 departamentos y es referente regional en gobernanza digital (AGESIC). KabatOne unifica videovigilancia, despacho CAD, GIS operacional y cumplimiento URCDP en una sola plataforma — desde el Puerto de Montevideo hasta Punta del Este.'
              : 'Uruguay operates with ~17,000 National Police officers across 19 departments and is a regional leader in digital governance (AGESIC). KabatOne unifies video surveillance, CAD dispatch, operational GIS, and URCDP compliance on one platform — from the Port of Montevideo to Punta del Este.'}
          </p>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 40px 0' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: 'clamp(22px, 3vw, 30px)', color: 'var(--white)', margin: '0 0 24px',
          }}>
            {es ? 'Desafios Operativos en Uruguay' : 'Operational Challenges in Uruguay'}
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
            {es ? 'Como Funciona KabatOne en Uruguay' : 'How KabatOne Works in Uruguay'}
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
            {es ? 'Preguntas Frecuentes — Uruguay' : 'FAQ — Uruguay'}
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
              { href: '/resources/public-safety-software-chile', label: 'Chile' },
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
            h2={es ? 'Conozca KabatOne para Uruguay' : 'See KabatOne for Uruguay'}
            subtitle={es
              ? 'Policia Nacional, 911 y AGESIC-compatible en una sola plataforma. Solicite una demostracion con escenarios reales.'
              : 'National Police, 911, and AGESIC-compatible on one platform. Request a demo with real scenarios.'}
          />
        </div>

        <Footer es={es} />
      </div>
    </>
  )
}
