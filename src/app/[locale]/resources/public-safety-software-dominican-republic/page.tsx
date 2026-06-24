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
  return generatePageMetadata('publicSafetySoftwareDominicanRepublic', locale)
}

export default async function PublicSafetySoftwareDominicanRepublicPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-dominican-republic/`
    : `${baseUrl}/resources/public-safety-software-dominican-republic/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Publica — Republica Dominicana' : 'Public Safety Software — Dominican Republic', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: "¿Como funciona el Sistema 911 de la Republica Dominicana?",
      answer: "El Sistema Nacional de Atencion a Emergencias y Seguridad 9-1-1 opera desde 2014 (Santo Domingo) y 2017 (Santiago). Cubre mas del 90% de la poblacion y coordina la respuesta de la Policia Nacional (~37,000 agentes), el Cuerpo de Bomberos, AMET, CESFRONT y los servicios de salud. El sistema centraliza la recepcion de llamadas y despacho de unidades. Una plataforma como KabatOne integra directamente con la infraestructura ONVIF/RTSP del 911, anadiendo CAD estructurado, GIS operacional y fusion de video sobre las camaras ya instaladas.",
    },
    {
      question: "¿Como se financia la tecnologia de seguridad publica en la Republica Dominicana?",
      answer: "El financiamiento proviene del presupuesto del Ministerio de Interior y Policia (MIP), el Ministerio de Defensa para las Fuerzas Armadas, y aportes del BID, USAID y la Iniciativa de Seguridad de la Cuenca del Caribe (CBSI). Las adquisiciones se rigen por la Ley 340-06 de Compras y Contrataciones Publicas y el portal de la Direccion General de Contrataciones Publicas (DGCP). El sistema SIGEF gestiona la ejecucion presupuestaria gubernamental.",
    },
    {
      question: "¿Que es el CESFRONT y como protege las fronteras dominicanas?",
      answer: "El Cuerpo Especializado de Seguridad Fronteriza Terrestre (CESFRONT, ~3,500 agentes) protege los 376 km de frontera terrestre con Haiti. CESFRONT opera puestos de control en Dajabon, Jimani, Elias Pina, Pedernales y Comendador, y coordina con la Direccion General de Migracion (DGM). Desde la crisis haitiana de 2021, el control fronterizo se ha intensificado significativamente. KabatOne integra video de puestos fronterizos, LPR en checkpoints y posiciones de unidades CESFRONT en un solo entorno operativo.",
    },
    {
      question: "¿Puede KabatOne integrarse con la infraestructura de video existente en la Republica Dominicana?",
      answer: "Si. KabatOne integra cualquier camara ONVIF/RTSP sin reemplazo de hardware. Las camaras del Sistema 911, las redes de videovigilancia del Distrito Nacional y Santiago, las camaras del AILA (Aeropuerto Las Americas) y del Aeropuerto del Cibao, los sistemas de seguridad portuaria en Haina, Caucedo y Puerto Plata, y las camaras de peaje de las autopistas Coral, Nordeste y Duarte se conectan directamente. El sistema es compatible con la infraestructura de fibra optica de Claro, Altice y OPTIC.",
    },
    {
      question: "¿Que papel juega el turismo en la estrategia de seguridad dominicana?",
      answer: "La Republica Dominicana recibe mas de 10 millones de turistas anuales, generando mas del 15% del PIB. Punta Cana, Puerto Plata, La Romana y Santo Domingo son los principales destinos. El CESTUR (Cuerpo Especializado de Seguridad Turistica, ~4,000 agentes) opera exclusivamente para la proteccion de zonas turisticas. La seguridad turistica requiere coordinacion entre CESTUR, la Policia Nacional, el 911, y los operadores hoteleros — exactamente el tipo de integracion multi-institucional que KabatOne resuelve.",
    },
    {
      question: "¿Como se alinea KabatOne con la Ley de Compras Publicas de la Republica Dominicana?",
      answer: "KabatOne se comercializa a traves de distribuidores e integradores locales conforme a la Ley 340-06 de Compras y Contrataciones Publicas y el portal de la DGCP. La arquitectura modular permite licitar por componente (K-Video, K-Dispatch, K-Safety) o como plataforma unificada, adaptandose a los rangos presupuestarios de ayuntamientos, la Policia Nacional, las Fuerzas Armadas y el Ministerio de Interior y Policia. La Republica Dominicana permite la participacion de empresas extranjeras con representante legal en el pais.",
    },
  ] : [
    {
      question: "How does the Dominican Republic 911 System work?",
      answer: "The National Emergency and Security Response System 9-1-1 has operated since 2014 (Santo Domingo) and 2017 (Santiago). It covers over 90% of the population and coordinates the response of the National Police (~37,000 officers), Fire Department, AMET (transit authority), CESFRONT, and health services. The system centralizes call intake and unit dispatch. A unified platform like KabatOne integrates directly with the existing ONVIF/RTSP infrastructure, adding structured CAD, operational GIS, and video analytics on top of cameras already installed.",
    },
    {
      question: "How does the Dominican Republic fund public safety technology?",
      answer: "Funding comes from the Ministry of Interior and Police (MIP), the Ministry of Defense for the Armed Forces, and contributions from the IDB, USAID, and the Caribbean Basin Security Initiative (CBSI). Procurement is governed by Law 340-06 on Public Procurement and Contracting and the DGCP (General Directorate of Public Procurement) portal. The SIGEF system manages government budget execution.",
    },
    {
      question: "What is CESFRONT and how does it protect Dominican borders?",
      answer: "The Specialized Land Border Security Corps (CESFRONT, ~3,500 officers) protects the 376 km land border with Haiti. CESFRONT operates checkpoints at Dajabon, Jimani, Elias Pina, Pedernales, and Comendador, and coordinates with the General Directorate of Migration (DGM). Since the Haitian crisis of 2021, border enforcement has intensified significantly. KabatOne integrates border post video, checkpoint LPR, and CESFRONT unit positions in a single operational environment.",
    },
    {
      question: "Can KabatOne integrate with existing video infrastructure in the Dominican Republic?",
      answer: "Yes. KabatOne integrates any ONVIF/RTSP camera without hardware replacement. Cameras from the 911 System, Distrito Nacional and Santiago surveillance networks, AILA (Las Americas Airport) and Cibao Airport cameras, port security systems at Haina, Caucedo, and Puerto Plata, and toll cameras on the Coral, Nordeste, and Duarte highways connect directly. The platform is compatible with Claro, Altice, and OPTIC fiber optic infrastructure.",
    },
    {
      question: "What role does tourism play in Dominican security strategy?",
      answer: "The Dominican Republic receives over 10 million tourists annually, generating more than 15% of GDP. Punta Cana, Puerto Plata, La Romana, and Santo Domingo are the main destinations. CESTUR (Specialized Tourist Security Corps, ~4,000 officers) operates exclusively for the protection of tourist zones. Tourism security requires coordination between CESTUR, the National Police, the 911 system, and hotel operators — exactly the kind of multi-institutional integration that KabatOne solves.",
    },
    {
      question: "How does KabatOne align with Dominican Republic public procurement law?",
      answer: "KabatOne is marketed through local distributors and integrators under Law 340-06 on Public Procurement and Contracting and the DGCP portal. The modular architecture allows tendering by component (K-Video, K-Dispatch, K-Safety) or as a unified platform, adapting to the budget ranges of municipalities (ayuntamientos), the National Police, the Armed Forces, and the Ministry of Interior and Police. The Dominican Republic allows participation of foreign firms with legal representation in the country.",
    },
  ]

  const artSchema = articleSchema(
    es ? 'Software de Seguridad Publica para Municipios y Provincias de la Republica Dominicana' : 'Public Safety Software for the Dominican Republic: Government Guide',
    es
      ? 'Software de seguridad publica para municipios, provincias y zonas turisticas de la Republica Dominicana — conectando videovigilancia, despacho de emergencias 911, GIS y gestion de incidentes en una sola plataforma operativa.'
      : 'Public safety software for Dominican municipalities, provinces, and tourist zones — connecting surveillance, 911 emergency dispatch, GIS, and incident management in one unified operational platform.',
    pageUrl,
    '2026-06-16'
  )

  const comparisonRows = es ? [
    { feature: 'Video', fragmented: 'Camaras del Sistema 911, CCTV municipal en el Distrito Nacional y Santiago, y video de aeropuertos (AILA, Cibao) operan en plataformas aisladas sin VMS compartido con la Policia Nacional', unified: 'VMS unificado, todas las camaras buscables por zona, fecha y tipo de evento — desde zonas turisticas hasta puestos fronterizos' },
    { feature: 'Despacho de emergencias', fragmented: '911 centralizado pero sin registro compartido entre Policia Nacional, AMET, CESFRONT, CESTUR y Bomberos', unified: 'Registro unico de incidente que conecta Policia Nacional, AMET, CESFRONT, CESTUR, Bomberos y Fuerzas Armadas' },
    { feature: 'Seguridad fronteriza', fragmented: 'CESFRONT opera video en puestos fronterizos con Haiti separado de la Policia Nacional y de Migracion (DGM)', unified: 'Video fronterizo, LPR en checkpoints y posiciones CESFRONT integrados con el Centro de Operaciones del 911' },
    { feature: 'Seguridad turistica', fragmented: 'CESTUR opera camaras en zonas turisticas desconectadas de la red policial y del 911', unified: 'Video de CESTUR, Policia Nacional y hoteles integrado con despacho 911 en un mapa operativo compartido' },
    { feature: 'Reportes para el MIP', fragmented: 'Exportacion manual de datos incompletos por institucion y por provincia', unified: 'KPIs automatizados de tiempos de respuesta, incidentes por demarcacion y cobertura de camaras' },
    { feature: 'Dependencia tecnologica', fragmented: 'Hardware propietario por proveedor y por institucion (Policia, CESFRONT, puertos)', unified: 'ONVIF/RTSP, cualquier marca de camara ya instalada' },
  ] : [
    { feature: 'Video', fragmented: '911 System cameras, municipal CCTV in Distrito Nacional and Santiago, and airport video (AILA, Cibao) on isolated platforms with no shared VMS with National Police', unified: 'Unified VMS, all cameras searchable by zone, date, and event type — from tourist zones to border posts' },
    { feature: 'Emergency dispatch', fragmented: 'Centralized 911 but no shared incident record between National Police, AMET, CESFRONT, CESTUR, and Fire Department', unified: 'Single incident record bridging National Police, AMET, CESFRONT, CESTUR, Fire Department, and Armed Forces' },
    { feature: 'Border security', fragmented: 'CESFRONT operates border post video with Haiti disconnected from National Police and Migration (DGM)', unified: 'Border video, checkpoint LPR, and CESFRONT positions integrated with 911 Operations Center' },
    { feature: 'Tourism security', fragmented: 'CESTUR operates tourist zone cameras disconnected from police network and 911', unified: 'CESTUR, National Police, and hotel video integrated with 911 dispatch on one shared operational map' },
    { feature: 'MIP reporting', fragmented: 'Manual export of incomplete data per institution and per province', unified: 'Automated KPIs for response times, demarcation-level incident counts, and camera coverage' },
    { feature: 'Technology lock-in', fragmented: 'Proprietary hardware per vendor and per institution (Police, CESFRONT, ports)', unified: 'ONVIF/RTSP, any camera brand already installed' },
  ]

  const workflowSteps = es ? [
    { n: '01', title: 'Video unificado', text: 'Todas las camaras — Sistema 911, CCTV del Distrito Nacional y Santiago, redes de CESTUR en Punta Cana y Puerto Plata, camaras de CESFRONT en puestos fronterizos con Haiti, video del AILA y Aeropuerto del Cibao, y seguridad portuaria en Haina, Caucedo y Puerto Plata — en una sola interfaz VMS con busqueda por zona, fecha y tipo de evento.' },
    { n: '02', title: 'Centro de despacho 911 unificado', text: 'Recepcion 911, clasificacion de incidentes y asignacion de unidades desde una sola plataforma CAD. Registro unico de incidente compartido entre Policia Nacional, AMET, CESFRONT, CESTUR, Bomberos y Fuerzas Armadas (ERD, ARD, FARD).' },
    { n: '03', title: 'GIS en tiempo real', text: 'Posiciones de la Policia Nacional, CESFRONT, CESTUR, AMET, Bomberos y Fuerzas Armadas en un solo mapa operativo compartido. Vista conjunta entre provincias, zonas turisticas, puertos y la frontera con Haiti.' },
    { n: '04', title: 'Fusion de sensores y alertas', text: 'Lectores LPR en autopistas Coral, Nordeste y Duarte, sistemas de peaje de MOPC, sensores de intrusion en puertos (DP World Caucedo, Haina), alertas del COE ante huracanes y tormentas tropicales, y botones de panico unificados con video en el mismo entorno operativo.' },
    { n: '05', title: 'Reportes para el MIP y el COE', text: 'KPIs automatizados de tiempos de respuesta, incidentes por demarcacion policial, cobertura de camaras y metricas de seguridad turistica — sin exportacion manual — para reportes del Ministerio de Interior y Policia, el COE y organismos internacionales.' },
  ] : [
    { n: '01', title: 'Unified video', text: 'All cameras — 911 System, Distrito Nacional and Santiago CCTV, CESTUR networks in Punta Cana and Puerto Plata, CESFRONT cameras at Haiti border posts, AILA and Cibao Airport video, and port security at Haina, Caucedo, and Puerto Plata — on one VMS interface with search by zone, date, and event type.' },
    { n: '02', title: 'Unified 911 dispatch center', text: 'Single 911 intake, incident classification, and unit assignment from one CAD platform. Shared incident record bridging National Police, AMET, CESFRONT, CESTUR, Fire Department, and Armed Forces (ERD, ARD, FARD).' },
    { n: '03', title: 'Real-time GIS', text: 'Positions of National Police, CESFRONT, CESTUR, AMET, Fire Department, and Armed Forces on one shared operational map — joint view across provinces, tourist zones, ports, and the Haiti border.' },
    { n: '04', title: 'Sensor and alert fusion', text: 'LPR readers on the Coral, Nordeste, and Duarte highways, MOPC toll systems, port intrusion sensors (DP World Caucedo, Haina), COE hurricane and tropical storm alerts, and panic buttons unified with video in the same operational environment.' },
    { n: '05', title: 'MIP and COE reporting', text: 'Automated KPIs for response times, police demarcation-level incident counts, camera coverage, and tourism security metrics — no manual export — for Ministry of Interior and Police, COE, and international body reporting.' },
  ]

  const challengeCards = es ? [
    { icon: '🏖️', title: 'Seguridad turistica: motor economico sin plataforma integrada', text: 'La Republica Dominicana recibe mas de 10 millones de turistas anuales, generando mas del 15% del PIB. CESTUR (~4,000 agentes) protege Punta Cana, Puerto Plata, La Romana y Santo Domingo, pero sus sistemas de video operan desconectados de la Policia Nacional y del 911. Un incidente de seguridad en una zona turistica afecta directamente la reputacion y la economia del pais.' },
    { icon: '🛃', title: 'Frontera con Haiti sin integracion operativa', text: 'Los 376 km de frontera terrestre con Haiti requieren coordinacion entre CESFRONT (~3,500 agentes), la Direccion General de Migracion (DGM) y la Policia Nacional. Desde la crisis haitiana de 2021, el trafico irregular, el contrabando y la migracion no autorizada han intensificado la demanda de vigilancia integrada. Los puestos fronterizos en Dajabon, Jimani, Elias Pina, Pedernales y Comendador operan con sistemas de video y registro desconectados.' },
    { icon: '📞', title: 'Sistema 911 sin integracion CAD multi-institucional completa', text: 'El Sistema 911 centraliza llamadas de emergencia desde 2014, cubriendo mas del 90% de la poblacion. Sin embargo, la integracion operativa entre Policia Nacional, AMET, CESFRONT, CESTUR, Bomberos y Fuerzas Armadas varia entre provincias. Sin un registro comun de incidente, eventos complejos como operativos antidrogas o desastres naturales generan duplicacion de respuesta.' },
    { icon: '📷', title: 'Redes de camaras fragmentadas entre instituciones', text: 'El Sistema 911 administra camaras en centros de operaciones. La Policia Nacional tiene redes de CCTV en el Distrito Nacional, Santiago y otras ciudades. CESTUR opera video en zonas turisticas. Los aeropuertos (AILA, Cibao, Punta Cana) y puertos (Haina, Caucedo, Puerto Plata) manejan sistemas independientes. Sin un VMS unificado, los operadores acceden a multiples consolas, reduciendo la velocidad de respuesta a incidentes inter-institucionales.' },
  ] : [
    { icon: '🏖️', title: 'Tourism security: economic engine without integrated platform', text: 'The Dominican Republic receives over 10 million tourists annually, generating more than 15% of GDP. CESTUR (~4,000 officers) protects Punta Cana, Puerto Plata, La Romana, and Santo Domingo, but their video systems operate disconnected from the National Police and 911. A security incident in a tourist zone directly affects the country"s reputation and economy.' },
    { icon: '🛃', title: 'Haiti border without operational integration', text: 'The 376 km land border with Haiti requires coordination between CESFRONT (~3,500 officers), the General Directorate of Migration (DGM), and the National Police. Since the Haitian crisis of 2021, irregular traffic, smuggling, and unauthorized migration have intensified the demand for integrated surveillance. Border posts at Dajabon, Jimani, Elias Pina, Pedernales, and Comendador operate with disconnected video and registration systems.' },
    { icon: '📞', title: '911 system without complete multi-institutional CAD integration', text: 'The 911 System has centralized emergency calls since 2014, covering over 90% of the population. However, operational integration between National Police, AMET, CESFRONT, CESTUR, Fire Department, and Armed Forces varies across provinces. Without a shared incident record, complex events like anti-narcotics operations or natural disasters generate duplicate responses.' },
    { icon: '📷', title: 'Fragmented camera networks across institutions', text: 'The 911 System manages cameras at operations centers. The National Police has CCTV networks in Distrito Nacional, Santiago, and other cities. CESTUR operates video in tourist zones. Airports (AILA, Cibao, Punta Cana) and ports (Haina, Caucedo, Puerto Plata) manage independent systems. Without a unified VMS, operators access multiple consoles, slowing response to inter-institutional incidents.' },
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
            {es ? 'Software de Seguridad Publica — Republica Dominicana' : 'Public Safety Software — Dominican Republic'}
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
              ? 'Software de Seguridad Publica para la Republica Dominicana'
              : 'Public Safety Software for the Dominican Republic'}
          </h1>
          <p style={{
            fontSize: '18px', fontWeight: 300, color: 'var(--dim)',
            lineHeight: 1.75, maxWidth: '720px',
          }}>
            {es
              ? 'Guia para municipios, provincias y zonas turisticas de la Republica Dominicana que evaluan plataformas unificadas de seguridad publica: videovigilancia, despacho de emergencias 911, GIS y gestion de incidentes.'
              : 'Guide for Dominican municipalities, provinces, and tourist zones evaluating unified public safety platforms — video surveillance, 911 emergency dispatch, GIS, and incident management.'}
          </p>
        </section>

        {/* -- SECTION: Dominican Republic Public Safety Structure -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? 'La Estructura de Seguridad Publica en la Republica Dominicana'
                : "The Dominican Republic's Public Safety Structure"}
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'La Republica Dominicana es una republica presidencial dividida en 31 provincias, un Distrito Nacional (Santo Domingo) y 158 municipios. La Policia Nacional Dominicana (~37,000 agentes, presupuesto de RD$6,744 millones en 2024) es la principal fuerza de seguridad interna, bajo el Ministerio de Interior y Policia (MIP). El Cuerpo Especializado de Seguridad Fronteriza Terrestre (CESFRONT, ~3,500 agentes) protege los 376 km de frontera terrestre con Haiti. El Cuerpo Especializado de Seguridad Turistica (CESTUR, ~4,000 agentes) protege las zonas turisticas. La Autoridad Metropolitana de Transporte (AMET) gestiona el transito vehicular. Las Fuerzas Armadas (Ejercito, Armada y Fuerza Aerea) apoyan operaciones de seguridad interna. La Direccion Nacional de Control de Drogas (DNCD) lidera operativos antinarcoticos. El Centro de Operaciones de Emergencias (COE) coordina respuesta ante desastres naturales — huracanes, inundaciones y sismos.'
                : "The Dominican Republic is a presidential republic divided into 31 provinces, one National District (Santo Domingo), and 158 municipalities. The Dominican National Police (~37,000 officers, RD$6,744 million budget in 2024) is the main internal security force, under the Ministry of Interior and Police (MIP). The Specialized Land Border Security Corps (CESFRONT, ~3,500 officers) protects the 376 km land border with Haiti. The Specialized Tourist Security Corps (CESTUR, ~4,000 officers) protects tourist zones. The Metropolitan Transit Authority (AMET) manages vehicle traffic. The Armed Forces (Army, Navy, and Air Force) support internal security operations. The National Drug Control Directorate (DNCD) leads anti-narcotics operations. The Emergency Operations Center (COE) coordinates natural disaster response — hurricanes, floods, and earthquakes."}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'La Republica Dominicana protege aproximadamente 11.2 millones de ciudadanos. Santo Domingo (capital, ~3.6M en area metropolitana con Santo Domingo Este, Santo Domingo Norte y Santo Domingo Oeste) es el centro politico y economico. Santiago de los Caballeros (~1.2M metro) es la segunda ciudad. El turismo es el principal motor economico: mas de 10 millones de visitantes anuales generan mas del 15% del PIB. Punta Cana, Puerto Plata, La Romana, Samana y Santo Domingo son los destinos principales. El Sistema Nacional 911 opera desde 2014 y cubre mas del 90% de la poblacion, con centros de operaciones en Santo Domingo y Santiago. Los puertos de Haina, Caucedo (DP World) y Puerto Plata manejan el comercio exterior. El AILA (Aeropuerto Internacional de Las Americas) y el Aeropuerto del Cibao son los principales aeropuertos. La Ley 340-06 de Compras y Contrataciones Publicas y el portal de la DGCP rigen la adquisicion de tecnologia gubernamental. La Republica Dominicana es la economia mas grande del Caribe y de Centroamerica.'
                : "The Dominican Republic protects approximately 11.2 million citizens. Santo Domingo (capital, ~3.6M metro area including Santo Domingo Este, Santo Domingo Norte, and Santo Domingo Oeste) is the political and economic center. Santiago de los Caballeros (~1.2M metro) is the second city. Tourism is the main economic driver: over 10 million visitors annually generate more than 15% of GDP. Punta Cana, Puerto Plata, La Romana, Samana, and Santo Domingo are the main destinations. The National 911 System has operated since 2014 and covers over 90% of the population, with operations centers in Santo Domingo and Santiago. The ports of Haina, Caucedo (DP World), and Puerto Plata handle foreign trade. AILA (Las Americas International Airport) and Cibao Airport are the main airports. Law 340-06 on Public Procurement and Contracting and the DGCP portal govern government technology acquisition. The Dominican Republic is the largest economy in the Caribbean and Central America."}
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
                ? 'Desafios Clave para Municipios y Provincias de la Republica Dominicana'
                : 'Key Challenges for Dominican Municipalities and Provinces'}
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
                ? '¿Como Funciona una Plataforma Unificada para la Republica Dominicana?'
                : 'How a Unified Platform Works for the Dominican Republic'}
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
                ? 'Fragmentado vs Plataforma Unificada para Instituciones Dominicanas'
                : 'Fragmented vs Unified Platform for Dominican Institutions'}
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
                  { href: '/resources/public-safety-software-panama', label: es ? 'Seguridad Publica — Panama' : 'Public Safety Software — Panama' },
                  { href: '/resources/public-safety-software-colombia', label: es ? 'Seguridad Publica — Colombia' : 'Public Safety Software — Colombia' },
                  { href: '/resources/public-safety-software-mexico', label: es ? 'Seguridad Publica — Mexico' : 'Public Safety Software — Mexico' },
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
                ? 'Preguntas Sobre Software de Seguridad Publica en la Republica Dominicana'
                : 'Questions About Public Safety Software in the Dominican Republic'}
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
                  href: '/resources/public-safety-software-panama',
                  en: 'Public Safety Software for Panama',
                  es: 'Software de Seguridad Publica para Panama',
                },
                {
                  href: '/resources/public-safety-software-colombia',
                  en: 'Public Safety Software for Colombia',
                  es: 'Software de Seguridad Publica para Colombia',
                },
                {
                  href: '/resources/public-safety-software-costa-rica',
                  en: 'Public Safety Software for Costa Rica',
                  es: 'Software de Seguridad Publica para Costa Rica',
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
          h2={es ? 'Transforma la Seguridad Publica en Tu Municipio o Provincia Dominicana' : 'Transform Public Safety in Your Dominican Municipality or Province'}
          subtitle={es
            ? 'Conoce como KabatOne integra videovigilancia, despacho de emergencias 911, GIS y gestion de incidentes en una sola plataforma operativa para instituciones dominicanas — desde las zonas turisticas de Punta Cana hasta los puestos fronterizos con Haiti.'
            : 'See how KabatOne unifies video surveillance, 911 emergency dispatch, GIS, and incident management into one operational platform for Dominican institutions — from Punta Cana tourist zones to Haiti border posts.'}
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
