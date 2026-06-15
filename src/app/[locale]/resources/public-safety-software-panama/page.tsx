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
  return generatePageMetadata('publicSafetySoftwarePanama', locale)
}

export default async function PublicSafetySoftwarePanamaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-panama/`
    : `${baseUrl}/resources/public-safety-software-panama/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Publica — Panama' : 'Public Safety Software — Panama', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: "¿Como funciona el Sistema Nacional 911 de Panama?",
      answer: "El Sistema Nacional Integrado de Operaciones de Seguridad (SENAFRONT, Policia Nacional, SINAPROC y Bomberos) se coordina a traves del Centro de Operaciones Conjuntas que atiende las llamadas 911. La Policia Nacional de Panama (~26,000 agentes) despliega unidades en 10 provincias y 5 comarcas indigenas. Una plataforma como KabatOne integra directamente con la infraestructura ONVIF/RTSP del 911, anadiendo CAD estructurado, GIS operacional y fusion de video sobre la infraestructura existente.",
    },
    {
      question: "¿Como se financia la tecnologia de seguridad publica en Panama?",
      answer: "El financiamiento proviene del presupuesto del Ministerio de Seguridad Publica (MINSEG), la Autoridad del Canal de Panama (ACP) para la zona canalera, y aportes del BID, CAF y USAID. Las adquisiciones se rigen por la Ley 22 de Contratacion Publica (2006, reformada 2017) y el portal PanamaCompra. La Autoridad Nacional de Aduanas y la AMP (Autoridad Maritima de Panama) tambien licitan tecnologia de seguridad portuaria.",
    },
    {
      question: "¿Que es el SENAFRONT y como protege las fronteras de Panama?",
      answer: "El Servicio Nacional de Fronteras (SENAFRONT, ~4,000 agentes) protege las fronteras terrestres de Panama, con enfasis en el tapon del Darien — la unica brecha del corredor terrestre entre Sudamerica y Norteamerica. Desde 2021, mas de 500,000 migrantes irregulares cruzan anualmente el Darien. SENAFRONT opera Estaciones de Recepcion Migratoria (ERM) y coordina con el Servicio Nacional de Migracion (SNM). KabatOne integra video de estaciones ERM, LPR en checkpoints y posiciones de unidades SENAFRONT en un solo entorno operativo.",
    },
    {
      question: "¿Puede KabatOne integrarse con la infraestructura de video del Canal de Panama?",
      answer: "Si. KabatOne integra cualquier camara ONVIF/RTSP sin reemplazo de hardware. Las camaras de la Autoridad del Canal de Panama (ACP) en las esclusas de Miraflores, Gatun y Agua Clara, video del Puerto de Balboa y Colon, sistemas LPR del Corredor Sur y la Autopista Panama-Colon, y camaras del Aeropuerto Tocumen (PTY) se conectan directamente. El sistema es compatible con los corredores de fibra optica de Cable & Wireless Panama.",
    },
    {
      question: "¿Que papel juega el Canal de Panama en la estrategia de seguridad nacional?",
      answer: "El Canal de Panama maneja el 6% del comercio maritimo mundial, con mas de 14,000 transitos anuales y $4,400 millones en ingresos por peajes. La ACP opera su propia Division de Seguridad del Canal. Las esclusas neopanamax de Agua Clara y Cocoli ampliaron la capacidad para buques de 14,000+ TEU. Proteger esta infraestructura critica requiere vigilancia perimetral, LPR, deteccion de intrusos y coordinacion con la Policia Nacional y el SENAN (Servicio Aeronaval Nacional).",
    },
    {
      question: "¿Como se alinea KabatOne con la Ley de Contratacion Publica de Panama?",
      answer: "KabatOne se comercializa a traves de distribuidores e integradores locales conforme a la Ley 22 de Contratacion Publica y el portal PanamaCompra (gestionado por la DGCP). La arquitectura modular permite licitar por componente (K-Video, K-Dispatch, K-Safety) o como plataforma unificada, adaptandose a los rangos presupuestarios de municipios, la Policia Nacional, la ACP, y el MINSEG. PanamaCompra esta abierto a empresas extranjeras con representante legal en Panama.",
    },
  ] : [
    {
      question: "How does Panama's National 911 System work?",
      answer: "The National Integrated Security Operations System (SENAFRONT, National Police, SINAPROC, and Fire Department) coordinates through the Joint Operations Center handling 911 calls. The Panama National Police (~26,000 officers) deploys units across 10 provinces and 5 indigenous comarcas. A unified platform like KabatOne integrates directly with the existing ONVIF/RTSP infrastructure, adding structured CAD, operational GIS, and video analytics on top of cameras already installed.",
    },
    {
      question: "How does Panama fund public safety technology?",
      answer: "Funding comes from the Ministry of Public Security (MINSEG), the Panama Canal Authority (ACP) for the canal zone, and contributions from the IDB, CAF, and USAID. Procurement is governed by Public Procurement Law 22 (2006, reformed 2017) and the PanamaCompra portal. The National Customs Authority and the Panama Maritime Authority (AMP) also tender port security technology.",
    },
    {
      question: "What is SENAFRONT and how does it protect Panama's borders?",
      answer: "The National Border Service (SENAFRONT, ~4,000 officers) protects Panama's land borders, with emphasis on the Darien Gap — the only break in the land corridor between South and North America. Since 2021, over 500,000 irregular migrants cross the Darien annually. SENAFRONT operates Migratory Reception Stations (ERM) and coordinates with the National Migration Service (SNM). KabatOne integrates ERM station video, LPR at checkpoints, and SENAFRONT unit positions in a single operational environment.",
    },
    {
      question: "Can KabatOne integrate with Panama Canal video infrastructure?",
      answer: "Yes. KabatOne integrates any ONVIF/RTSP camera without hardware replacement. Panama Canal Authority (ACP) cameras at Miraflores, Gatun, and Agua Clara locks, Port of Balboa and Colon video, LPR readers on the Corredor Sur and Panama-Colon Highway, and Tocumen Airport (PTY) cameras connect directly. The platform is compatible with Cable & Wireless Panama fiber optic corridors.",
    },
    {
      question: "What role does the Panama Canal play in national security strategy?",
      answer: "The Panama Canal handles 6% of global maritime trade, with over 14,000 annual transits and $4.4 billion in toll revenues. The ACP operates its own Canal Security Division. The Neopanamax locks at Agua Clara and Cocoli expanded capacity for 14,000+ TEU vessels. Protecting this critical infrastructure requires perimeter surveillance, LPR, intrusion detection, and coordination with the National Police and SENAN (National Aeronaval Service).",
    },
    {
      question: "How does KabatOne align with Panama's Public Procurement Law?",
      answer: "KabatOne is marketed through local distributors and integrators under Public Procurement Law 22 and the PanamaCompra portal (managed by DGCP). The modular architecture allows tendering by component (K-Video, K-Dispatch, K-Safety) or as a unified platform, adapting to the budget ranges of municipalities, the National Police, the ACP, and MINSEG. PanamaCompra is open to foreign firms with legal representation in Panama.",
    },
  ]

  const artSchema = articleSchema(
    es ? 'Software de Seguridad Publica para Municipios y Provincias de Panama' : 'Public Safety Software for Panama: Government Guide',
    es
      ? 'Software de seguridad publica para municipios, provincias y la zona del Canal de Panama — conectando videovigilancia, despacho de emergencias, GIS y gestion de incidentes en una sola plataforma operativa.'
      : 'Public safety software for Panamanian municipalities, provinces, and the Canal Zone — connecting surveillance, emergency dispatch, GIS, and incident management in one unified operational platform.',
    pageUrl,
    '2026-06-15'
  )

  const comparisonRows = es ? [
    { feature: 'Video', fragmented: 'Camaras de la ACP en las esclusas, video portuario en Balboa y Colon, y CCTV municipal en Ciudad de Panama operan en plataformas aisladas sin VMS compartido con la Policia Nacional', unified: 'VMS unificado, todas las camaras buscables por zona, fecha y tipo de evento — desde las esclusas hasta los distritos urbanos' },
    { feature: 'Despacho de emergencias', fragmented: '911 como canal unico pero sin registro compartido entre Policia Nacional, SENAFRONT, SINAPROC y Bomberos', unified: 'Registro unico de incidente que conecta Policia Nacional, SENAFRONT, SINAPROC, Bomberos y SENAN' },
    { feature: 'Seguridad del Canal', fragmented: 'Division de Seguridad de la ACP opera video perimetral de esclusas separado de la Policia Nacional y del SENAN', unified: 'Video de la ACP integrado con despacho policial y posiciones del SENAN en un solo mapa operativo' },
    { feature: 'Crisis migratoria del Darien', fragmented: 'Video de estaciones ERM del SENAFRONT desconectado de la red policial y de migracion (SNM)', unified: 'Video ERM, LPR en checkpoints y posiciones SENAFRONT integrados con el Centro de Operaciones Conjuntas' },
    { feature: 'Reportes para el MINSEG', fragmented: 'Exportacion manual de datos incompletos por sistema y por provincia', unified: 'KPIs automatizados de tiempos de respuesta, incidentes por distrito y cobertura de camaras' },
    { feature: 'Dependencia tecnologica', fragmented: 'Hardware propietario por proveedor y por institucion (ACP, Policia, puertos)', unified: 'ONVIF/RTSP, cualquier marca de camara ya instalada' },
  ] : [
    { feature: 'Video', fragmented: 'ACP cameras at locks, port video at Balboa and Colon, and municipal CCTV in Panama City on isolated platforms with no shared VMS with National Police', unified: 'Unified VMS, all cameras searchable by zone, date, and event type — from locks to urban districts' },
    { feature: 'Emergency dispatch', fragmented: '911 as single channel but no shared incident record between National Police, SENAFRONT, SINAPROC, and Fire Department', unified: 'Single incident record bridging National Police, SENAFRONT, SINAPROC, Fire Department, and SENAN' },
    { feature: 'Canal security', fragmented: 'ACP Security Division operates lock perimeter video disconnected from National Police and SENAN', unified: 'ACP video integrated with police dispatch and SENAN positions on one operational map' },
    { feature: 'Darien migration crisis', fragmented: 'SENAFRONT ERM station video disconnected from police network and migration service (SNM)', unified: 'ERM video, checkpoint LPR, and SENAFRONT positions integrated with Joint Operations Center' },
    { feature: 'MINSEG reporting', fragmented: 'Manual export of incomplete data per system and per province', unified: 'Automated KPIs for response times, district-level incident counts, and camera coverage' },
    { feature: 'Technology lock-in', fragmented: 'Proprietary hardware per vendor and per institution (ACP, Police, ports)', unified: 'ONVIF/RTSP, any camera brand already installed' },
  ]

  const workflowSteps = es ? [
    { n: '01', title: 'Video unificado', text: 'Todas las camaras — ACP en esclusas de Miraflores, Gatun y Agua Clara, puertos de Balboa y Colon (MIT/Hutchison/PSA), CCTV municipal en Ciudad de Panama, camaras SENAFRONT en estaciones ERM del Darien — en una sola interfaz VMS con busqueda por zona, fecha y tipo de evento.' },
    { n: '02', title: 'Centro de despacho 911 unificado', text: 'Recepcion 911, clasificacion de incidentes y asignacion de unidades desde una sola plataforma CAD. Registro unico de incidente compartido entre Policia Nacional, SENAFRONT, SINAPROC, Bomberos y SENAN.' },
    { n: '03', title: 'GIS en tiempo real', text: 'Posiciones de la Policia Nacional, SENAFRONT, SINAPROC, Bomberos y SENAN en un solo mapa operativo compartido. Vista conjunta entre distritos urbanos, la zona del Canal y los puestos fronterizos del Darien.' },
    { n: '04', title: 'Fusion de sensores y alertas', text: 'Lectores LPR en el Corredor Sur, Autopista Panama-Colon y Aeropuerto Tocumen (PTY, 16M+ pasajeros), sensores de intrusion perimetral de la ACP, alertas sismicas del IGC, y botones de panico unificados con video en el mismo entorno operativo.' },
    { n: '05', title: 'Reportes para el MINSEG y la ACP', text: 'KPIs automatizados de tiempos de respuesta, incidentes por distrito, cobertura de camaras y metricas de seguridad del Canal — sin exportacion manual — para reportes del MINSEG, la ACP y organismos internacionales.' },
  ] : [
    { n: '01', title: 'Unified video', text: 'All cameras — ACP at Miraflores, Gatun, and Agua Clara locks, Balboa and Colon ports (MIT/Hutchison/PSA), municipal CCTV in Panama City, SENAFRONT cameras at Darien ERM stations — on one VMS interface with search by zone, date, and event type.' },
    { n: '02', title: 'Unified 911 dispatch center', text: 'Single 911 intake, incident classification, and unit assignment from one CAD platform. Shared incident record bridging National Police, SENAFRONT, SINAPROC, Fire Department, and SENAN.' },
    { n: '03', title: 'Real-time GIS', text: 'Positions of National Police, SENAFRONT, SINAPROC, Fire Department, and SENAN on one shared operational map — joint view across urban districts, the Canal Zone, and Darien border posts.' },
    { n: '04', title: 'Sensor and alert fusion', text: 'LPR readers on the Corredor Sur, Panama-Colon Highway, and Tocumen Airport (PTY, 16M+ passengers), ACP perimeter intrusion sensors, IGC seismic alerts, and panic buttons unified with video in the same operational environment.' },
    { n: '05', title: 'MINSEG and ACP reporting', text: 'Automated KPIs for response times, district-level incident counts, camera coverage, and Canal security metrics — no manual export — for MINSEG, ACP, and international body reporting.' },
  ]

  const challengeCards = es ? [
    { icon: '🚢', title: 'Seguridad del Canal de Panama: infraestructura critica global', text: 'El Canal de Panama maneja el 6% del comercio maritimo mundial, con mas de 14,000 transitos anuales. Las esclusas neopanamax de Agua Clara y Cocoli operan buques de 14,000+ TEU. La Division de Seguridad de la ACP opera video perimetral, LPR y deteccion de intrusos, pero desconectado de la Policia Nacional y del SENAN. Un incidente que afecte el Canal tiene impacto global inmediato.' },
    { icon: '🌿', title: 'Crisis migratoria del Darien sin plataforma integrada', text: 'Desde 2021, mas de 500,000 migrantes irregulares cruzan anualmente el tapon del Darien — la unica brecha terrestre entre Sudamerica y Norteamerica. El SENAFRONT (~4,000 agentes) opera Estaciones de Recepcion Migratoria (ERM) en Bajo Chiquito, Lajas Blancas y San Vicente, pero sus sistemas de video y registro operan desconectados de la Policia Nacional y del Servicio Nacional de Migracion (SNM).' },
    { icon: '📞', title: 'Sistema 911 sin integracion CAD inter-institucional', text: 'El Centro de Operaciones Conjuntas atiende 911 pero la integracion entre Policia Nacional, SENAFRONT, SINAPROC (Proteccion Civil), Bomberos y SENAN varia entre provincias. Sin un registro comun de incidente, eventos complejos como inundaciones en Chiriqui o narcotrafico en Colon generan duplicacion de respuesta y demoras criticas.' },
    { icon: '📷', title: 'Camaras multi-institucionales sin VMS central', text: 'La ACP administra video en las esclusas y zona del Canal. Los puertos de Balboa, Colon (MIT, Hutchison, PSA) operan CCTV independiente. La Policia Nacional tiene camaras en Ciudad de Panama, David y Colon. El Aeropuerto Tocumen (PTY) maneja su propio sistema. Sin un VMS unificado, los operadores acceden a multiples consolas, reduciendo la velocidad de respuesta a incidentes inter-institucionales.' },
  ] : [
    { icon: '🚢', title: 'Panama Canal security: globally critical infrastructure', text: 'The Panama Canal handles 6% of global maritime trade, with over 14,000 annual transits. The Neopanamax locks at Agua Clara and Cocoli handle 14,000+ TEU vessels. The ACP Security Division operates perimeter video, LPR, and intrusion detection but disconnected from the National Police and SENAN. An incident affecting the Canal has immediate global impact.' },
    { icon: '🌿', title: 'Darien migration crisis without integrated platform', text: 'Since 2021, over 500,000 irregular migrants cross the Darien Gap annually — the only land break between South and North America. SENAFRONT (~4,000 officers) operates Migratory Reception Stations (ERM) at Bajo Chiquito, Lajas Blancas, and San Vicente, but their video and registration systems operate disconnected from the National Police and the National Migration Service (SNM).' },
    { icon: '📞', title: '911 system without inter-institutional CAD integration', text: 'The Joint Operations Center handles 911 but integration between National Police, SENAFRONT, SINAPROC (Civil Protection), Fire Department, and SENAN varies across provinces. Without a shared incident record, complex events like flooding in Chiriqui or narcotrafficking in Colon generate duplicate responses and critical delays.' },
    { icon: '📷', title: 'Multi-institutional cameras without central VMS', text: 'The ACP manages video at locks and the Canal Zone. The ports of Balboa, Colon (MIT, Hutchison, PSA) operate independent CCTV. The National Police has cameras in Panama City, David, and Colon. Tocumen Airport (PTY) manages its own system. Without a unified VMS, operators access multiple consoles, slowing response to inter-institutional incidents.' },
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
            {es ? 'Software de Seguridad Publica — Panama' : 'Public Safety Software — Panama'}
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
              ? 'Software de Seguridad Publica para Panama'
              : 'Public Safety Software for Panama'}
          </h1>
          <p style={{
            fontSize: '18px', fontWeight: 300, color: 'var(--dim)',
            lineHeight: 1.75, maxWidth: '720px',
          }}>
            {es
              ? 'Guia para municipios, provincias y la zona del Canal de Panama que evaluan plataformas unificadas de seguridad publica: videovigilancia, despacho de emergencias, GIS y gestion de incidentes.'
              : 'Guide for Panamanian municipalities, provinces, and the Canal Zone evaluating unified public safety platforms — video surveillance, emergency dispatch, GIS, and incident management.'}
          </p>
        </section>

        {/* -- SECTION: Panama Public Safety Structure -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? 'La Estructura de Seguridad Publica en Panama'
                : "Panama's Public Safety Structure"}
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Panama es una republica presidencial dividida en 10 provincias, 5 comarcas indigenas (Guna Yala, Embera-Wounaan, Ngabe-Bugle, Madugandi y Wargandi), 81 distritos y 679 corregimientos. La Policia Nacional de Panama (~26,000 agentes) es la principal fuerza de seguridad interna, bajo el Ministerio de Seguridad Publica (MINSEG). El Servicio Nacional de Fronteras (SENAFRONT, ~4,000 agentes) protege las fronteras terrestres con Colombia y Costa Rica. El Servicio Aeronaval Nacional (SENAN) patrulla aguas territoriales y el espacio aereo. El Sistema Nacional de Proteccion Civil (SINAPROC) coordina respuesta a desastres naturales. El Cuerpo de Bomberos de Panama opera el servicio contra incendios. La Direccion de Investigacion Judicial (DIJ) funciona como policia judicial.'
                : "Panama is a presidential republic divided into 10 provinces, 5 indigenous comarcas (Guna Yala, Embera-Wounaan, Ngabe-Bugle, Madugandi, and Wargandi), 81 districts, and 679 corregimientos. The Panama National Police (~26,000 officers) is the main internal security force, under the Ministry of Public Security (MINSEG). The National Border Service (SENAFRONT, ~4,000 officers) protects land borders with Colombia and Costa Rica. The National Aeronaval Service (SENAN) patrols territorial waters and airspace. The National Civil Protection System (SINAPROC) coordinates natural disaster response. The Panama Fire Department operates firefighting services. The Judicial Investigation Directorate (DIJ) functions as judicial police."}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Panama protege aproximadamente 4.4 millones de ciudadanos. Ciudad de Panama (capital, ~1.5M en area metropolitana con San Miguelito, Arraijan y La Chorrera) concentra mas del 50% de la poblacion urbana. El Canal de Panama es la infraestructura mas critica del pais y una de las mas importantes del comercio mundial: maneja el 6% del comercio maritimo global, con mas de 14,000 transitos anuales y $4,400 millones en peajes. Las esclusas neopanamax de Agua Clara y Cocoli (inauguradas 2016) ampliaron la capacidad para buques de 14,000+ TEU. El Aeropuerto Internacional de Tocumen (PTY) es el principal hub aereo de las Americas con 16+ millones de pasajeros anuales (Copa Airlines hub). La Zona Libre de Colon (ZLC) es la segunda zona franca mas grande del mundo despues de Hong Kong. La crisis migratoria del Darien es el mayor desafio de seguridad actual: mas de 500,000 migrantes irregulares cruzan anualmente. La Ley 22 de Contratacion Publica y PanamaCompra rigen la adquisicion de tecnologia gubernamental.'
                : "Panama protects approximately 4.4 million citizens. Panama City (capital, ~1.5M metro area including San Miguelito, Arraijan, and La Chorrera) concentrates over 50% of the urban population. The Panama Canal is the country's most critical infrastructure and one of the world's most important trade arteries: it handles 6% of global maritime trade, with over 14,000 annual transits and $4.4 billion in toll revenues. The Neopanamax locks at Agua Clara and Cocoli (opened 2016) expanded capacity for 14,000+ TEU vessels. Tocumen International Airport (PTY) is the main Americas air hub with 16+ million annual passengers (Copa Airlines hub). The Colon Free Zone (ZLC) is the world's second-largest free trade zone after Hong Kong. The Darien migration crisis is the biggest current security challenge: over 500,000 irregular migrants cross annually. Public Procurement Law 22 and PanamaCompra govern government technology acquisition."}
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
                ? 'Desafios Clave para Municipios y Provincias de Panama'
                : 'Key Challenges for Panamanian Municipalities and Provinces'}
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
                ? '¿Como Funciona una Plataforma Unificada para Panama?'
                : 'How a Unified Platform Works for Panama'}
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
                ? 'Fragmentado vs Plataforma Unificada para Instituciones Panamenas'
                : 'Fragmented vs Unified Platform for Panamanian Institutions'}
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
                  { href: '/resources/public-safety-software-costa-rica', label: es ? 'Seguridad Publica — Costa Rica' : 'Public Safety Software — Costa Rica' },
                  { href: '/resources/public-safety-software-colombia', label: es ? 'Seguridad Publica — Colombia' : 'Public Safety Software — Colombia' },
                  { href: '/resources/public-safety-software-ecuador', label: es ? 'Seguridad Publica — Ecuador' : 'Public Safety Software — Ecuador' },
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
                ? 'Preguntas Sobre Software de Seguridad Publica en Panama'
                : 'Questions About Public Safety Software in Panama'}
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
                  href: '/resources/public-safety-software-costa-rica',
                  en: 'Public Safety Software for Costa Rica',
                  es: 'Software de Seguridad Publica para Costa Rica',
                },
                {
                  href: '/resources/public-safety-software-colombia',
                  en: 'Public Safety Software for Colombia',
                  es: 'Software de Seguridad Publica para Colombia',
                },
                {
                  href: '/resources/public-safety-software-ecuador',
                  en: 'Public Safety Software for Ecuador',
                  es: 'Software de Seguridad Publica para Ecuador',
                },
                {
                  href: '/resources/public-safety-software-guatemala',
                  en: 'Public Safety Software for Guatemala',
                  es: 'Software de Seguridad Publica para Guatemala',
                },
                {
                  href: '/resources/cad-dispatch-software-latin-america',
                  en: 'CAD Dispatch Software for Latin America',
                  es: 'Software CAD de Despacho para America Latina',
                },
                {
                  href: '/resources/public-safety-software-mexico',
                  en: 'Public Safety Software for Mexico',
                  es: 'Software de Seguridad Publica para Mexico',
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
          h2={es ? 'Transforma la Seguridad Publica en Tu Municipio o Provincia de Panama' : 'Transform Public Safety in Your Panamanian Municipality or Province'}
          subtitle={es
            ? 'Conoce como KabatOne integra videovigilancia, despacho de emergencias 911, GIS y gestion de incidentes en una sola plataforma operativa para instituciones panamenas — desde la zona del Canal y Ciudad de Panama hasta los puestos fronterizos del Darien.'
            : 'See how KabatOne unifies video surveillance, 911 emergency dispatch, GIS, and incident management into one operational platform for Panamanian institutions — from the Canal Zone and Panama City to Darien border posts.'}
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
