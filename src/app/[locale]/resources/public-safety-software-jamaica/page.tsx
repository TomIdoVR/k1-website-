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
  return generatePageMetadata('publicSafetySoftwareJamaica', locale)
}

export default async function PublicSafetySoftwareJamaicaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-jamaica/`
    : `${baseUrl}/resources/public-safety-software-jamaica/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Publica — Jamaica' : 'Public Safety Software — Jamaica', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: "¿Como funciona el sistema de emergencias de Jamaica?",
      answer: "Jamaica opera un sistema de emergencias multilinea: 119 para la policia (JCF), 110 para bomberos (JFRS) y 116 para ambulancias. No existe un numero unico 911 centralizado. La Jamaica Constabulary Force (~12,000 oficiales) es la fuerza policial principal. Las Zonas de Operaciones Especiales (ZOSO) combinan presencia militar con intervencion social en comunidades de alto riesgo. KabatOne unifica estas lineas separadas en un CAD integrado que coordina JCF, JDF, JFRS y servicios de salud en una sola plataforma operativa.",
    },
    {
      question: "¿Como se financia la tecnologia de seguridad publica en Jamaica?",
      answer: "El financiamiento proviene del Ministerio de Seguridad Nacional (MNS), el presupuesto de la JCF, y contribuciones de USAID, el BID, la Iniciativa de Seguridad de la Cuenca del Caribe (CBSI), el Fondo para la Seguridad Ciudadana (CSF) y el gobierno del Reino Unido (FCDO). Las adquisiciones se rigen por la Government of Jamaica Handbook of Public Sector Procurement Procedures y el portal electronico GOJEP para licitaciones superiores a J$3 millones. La National Contracts Commission (NCC) supervisa las adjudicaciones mayores.",
    },
    {
      question: "¿Que son las ZOSO y como funcionan?",
      answer: "Las Zonas de Operaciones Especiales (ZOSO) son areas designadas por el gobierno donde la Jamaica Defence Force (JDF) y la JCF operan conjuntamente con presencia sostenida, combinada con programas de intervencion social. Norwood, un antiguo punto critico de pandillas, no registro un solo homicidio en 2024 ni 2025 despues de implementar una ZOSO. El exito de las ZOSO demuestra el valor de la coordinacion interinstitucional — exactamente el tipo de operacion que KabatOne facilita con GIS en tiempo real, video unificado y despacho coordinado entre JCF y JDF.",
    },
    {
      question: "¿Puede KabatOne integrarse con la infraestructura de video existente en Jamaica?",
      answer: "Si. KabatOne integra cualquier camara ONVIF/RTSP sin reemplazo de hardware. Las redes de CCTV de la JCF en Kingston y Montego Bay, las camaras de la Jamaica Urban Transit Company (JUTC), la videovigilancia del Puerto de Kingston (KFTL/CMA CGM) y del Aeropuerto Internacional Norman Manley (NMIA), las camaras de los puertos cruceristas de Falmouth y Ocho Rios, y los sistemas de seguridad hotelera se conectan directamente. El sistema es compatible con la infraestructura de fibra optica de FLOW, Digicel y la red gubernamental GovNet.",
    },
    {
      question: "¿Que papel juega el turismo en la estrategia de seguridad jamaicana?",
      answer: "Jamaica recibe mas de 4 millones de visitantes anuales (stopover + cruceristas), con el turismo representando aproximadamente el 10% del PIB y generando mas de US$4,000 millones en divisas. Montego Bay, Ocho Rios, Negril, Falmouth y Kingston son los destinos principales. La Tourism Product Development Company (TPDCo) y la policía de la Area 1 (St. James/Montego Bay) coordinan la seguridad turistica. Un incidente de seguridad en zonas turisticas tiene impacto directo en la economia — KabatOne integra video de hoteles, puertos cruceristas y camaras de la JCF en un solo entorno operativo.",
    },
    {
      question: "¿Como se alinea KabatOne con la legislacion de compras publicas de Jamaica?",
      answer: "KabatOne se comercializa a traves de distribuidores e integradores locales conforme al Handbook of Public Sector Procurement Procedures del Gobierno de Jamaica y el portal electronico GOJEP. La arquitectura modular permite licitar por componente (K-Video, K-Dispatch, K-Safety) o como plataforma unificada, adaptandose a los presupuestos del MNS, la JCF, las parroquias (parishes) y los municipios. La National Contracts Commission (NCC) supervisa las adjudicaciones. Jamaica permite la participacion de empresas extranjeras en licitaciones publicas.",
    },
  ] : [
    {
      question: "How does Jamaica's emergency response system work?",
      answer: "Jamaica operates a multi-line emergency system: 119 for police (JCF), 110 for fire (JFRS), and 116 for ambulance. There is no single centralized 911 number. The Jamaica Constabulary Force (~12,000 officers) is the primary police force. Zones of Special Operations (ZOSOs) combine military presence with social intervention in high-risk communities. KabatOne unifies these separate lines into one integrated CAD that coordinates JCF, JDF, JFRS, and health services on a single operational platform.",
    },
    {
      question: "How does Jamaica fund public safety technology?",
      answer: "Funding comes from the Ministry of National Security (MNS), the JCF budget, and contributions from USAID, the IDB, the Caribbean Basin Security Initiative (CBSI), the Citizen Security Fund (CSF), and the UK government (FCDO). Procurement is governed by the Government of Jamaica Handbook of Public Sector Procurement Procedures and the GOJEP electronic portal for tenders above J$3 million. The National Contracts Commission (NCC) oversees major awards.",
    },
    {
      question: "What are ZOSOs and how do they work?",
      answer: "Zones of Special Operations (ZOSOs) are government-designated areas where the Jamaica Defence Force (JDF) and JCF operate jointly with sustained presence, combined with social intervention programs. Norwood, once a major gang hotspot, recorded zero murders in 2024 and 2025 after implementing a ZOSO. The success of ZOSOs demonstrates the value of inter-agency coordination — exactly the type of operation KabatOne facilitates with real-time GIS, unified video, and coordinated dispatch between JCF and JDF.",
    },
    {
      question: "Can KabatOne integrate with existing video infrastructure in Jamaica?",
      answer: "Yes. KabatOne integrates any ONVIF/RTSP camera without hardware replacement. JCF CCTV networks in Kingston and Montego Bay, Jamaica Urban Transit Company (JUTC) cameras, Port of Kingston (KFTL/CMA CGM) and Norman Manley International Airport (NMIA) surveillance, Falmouth and Ocho Rios cruise port cameras, and hotel security systems connect directly. The platform is compatible with FLOW, Digicel, and GovNet fiber optic infrastructure.",
    },
    {
      question: "What role does tourism play in Jamaican security strategy?",
      answer: "Jamaica receives over 4 million visitors annually (stopover + cruise), with tourism representing approximately 10% of GDP and generating over US$4 billion in foreign exchange. Montego Bay, Ocho Rios, Negril, Falmouth, and Kingston are the main destinations. The Tourism Product Development Company (TPDCo) and Area 1 police (St. James/Montego Bay) coordinate tourism security. A security incident in tourist zones directly impacts the economy — KabatOne integrates hotel, cruise port, and JCF cameras in one operational environment.",
    },
    {
      question: "How does KabatOne align with Jamaican public procurement law?",
      answer: "KabatOne is marketed through local distributors and integrators under the Government of Jamaica Handbook of Public Sector Procurement Procedures and the GOJEP electronic portal. The modular architecture allows tendering by component (K-Video, K-Dispatch, K-Safety) or as a unified platform, adapting to MNS, JCF, parish, and municipal budgets. The National Contracts Commission (NCC) oversees awards. Jamaica allows foreign firm participation in public tenders.",
    },
  ]

  const artSchema = articleSchema(
    es ? 'Software de Seguridad Publica para Parroquias y Municipios de Jamaica' : 'Public Safety Software for Jamaica: Government Guide',
    es
      ? 'Software de seguridad publica para parroquias, municipios y zonas turisticas de Jamaica — conectando videovigilancia, despacho de emergencias, GIS y gestion de incidentes en una sola plataforma operativa.'
      : 'Public safety software for Jamaican parishes, municipalities, and tourist zones — connecting surveillance, emergency dispatch, GIS, and incident management in one unified operational platform.',
    pageUrl,
    '2026-06-23'
  )

  const comparisonRows = es ? [
    { feature: 'Video', fragmented: 'Camaras de la JCF en Kingston y Montego Bay, CCTV portuario (KFTL), video del NMIA y camaras de zonas turisticas operan en plataformas separadas sin VMS compartido', unified: 'VMS unificado, todas las camaras buscables por parroquia, zona, fecha y tipo de evento — desde zonas turisticas hasta puertos comerciales' },
    { feature: 'Despacho de emergencias', fragmented: 'Tres lineas separadas (119/110/116) sin registro comun de incidentes entre JCF, JDF, JFRS y servicios medicos', unified: 'Registro unico de incidente que conecta JCF, JDF, JFRS, servicios medicos y ODPEM en una sola plataforma CAD' },
    { feature: 'Operaciones ZOSO', fragmented: 'JCF y JDF coordinan ZOSO con comunicaciones por radio y reportes separados sin visibilidad operativa compartida', unified: 'GIS en tiempo real con posiciones JCF y JDF, video integrado y despacho coordinado en un solo entorno operativo' },
    { feature: 'Seguridad turistica', fragmented: 'Camaras de hoteles y puertos cruceristas desconectadas de la red policial de la JCF', unified: 'Video de hoteles, puertos cruceristas (Falmouth, Ocho Rios) y JCF integrado con despacho en un mapa operativo' },
    { feature: 'Reportes para el MNS', fragmented: 'Exportacion manual de datos incompletos por parroquia y por institucion', unified: 'KPIs automatizados de tiempos de respuesta, incidentes por parroquia y cobertura de camaras' },
    { feature: 'Dependencia tecnologica', fragmented: 'Hardware propietario por proveedor y por institucion (JCF, puertos, aeropuertos)', unified: 'ONVIF/RTSP, cualquier marca de camara ya instalada' },
  ] : [
    { feature: 'Video', fragmented: 'JCF cameras in Kingston and Montego Bay, port CCTV (KFTL), NMIA video, and tourist zone cameras on separate platforms with no shared VMS', unified: 'Unified VMS, all cameras searchable by parish, zone, date, and event type — from tourist zones to commercial ports' },
    { feature: 'Emergency dispatch', fragmented: 'Three separate lines (119/110/116) with no shared incident record between JCF, JDF, JFRS, and medical services', unified: 'Single incident record bridging JCF, JDF, JFRS, medical services, and ODPEM on one CAD platform' },
    { feature: 'ZOSO operations', fragmented: 'JCF and JDF coordinate ZOSOs via radio and separate reporting with no shared operational visibility', unified: 'Real-time GIS with JCF and JDF positions, integrated video, and coordinated dispatch in one operational environment' },
    { feature: 'Tourism security', fragmented: 'Hotel and cruise port cameras disconnected from JCF police network', unified: 'Hotel, cruise port (Falmouth, Ocho Rios), and JCF video integrated with dispatch on one operational map' },
    { feature: 'MNS reporting', fragmented: 'Manual export of incomplete data per parish and per institution', unified: 'Automated KPIs for response times, parish-level incident counts, and camera coverage' },
    { feature: 'Technology lock-in', fragmented: 'Proprietary hardware per vendor and per institution (JCF, ports, airports)', unified: 'ONVIF/RTSP, any camera brand already installed' },
  ]

  const workflowSteps = es ? [
    { n: '01', title: 'Video unificado', text: 'Todas las camaras — redes de CCTV de la JCF en Kingston, Montego Bay y Spanish Town, video del Puerto de Kingston (KFTL/CMA CGM, capacidad 3.2M TEU), vigilancia del NMIA y el Aeropuerto Sangster (MBJ), camaras de puertos cruceristas en Falmouth y Ocho Rios, y seguridad hotelera en Montego Bay, Negril y Ocho Rios — en una sola interfaz VMS con busqueda por parroquia, zona, fecha y tipo de evento.' },
    { n: '02', title: 'Centro de despacho unificado', text: 'Recepcion de emergencias (119/110/116), clasificacion de incidentes y asignacion de unidades desde una sola plataforma CAD. Registro unico de incidente compartido entre JCF, JDF (incluyendo operaciones ZOSO), JFRS, servicios medicos y ODPEM para respuesta ante desastres naturales y huracanes.' },
    { n: '03', title: 'GIS en tiempo real', text: 'Posiciones de la JCF, JDF, JFRS, guardacostas y ODPEM en un solo mapa operativo compartido. Vista conjunta entre las 14 parroquias, zonas turisticas, puertos, aeropuertos y areas de operaciones especiales (ZOSO). Cobertura de la zona economica exclusiva (EEZ) maritima.' },
    { n: '04', title: 'Fusion de sensores y alertas', text: 'Lectores LPR en las autopistas de Jamaica (North-South Highway, Highway 2000), sensores de intrusion en el Puerto de Kingston, escaner no intrusivo (NII) en terminales de carga de Montego Bay, alertas de la ODPEM ante huracanes y tormentas tropicales, y botones de panico unificados con video en el mismo entorno operativo.' },
    { n: '05', title: 'Reportes para el MNS y la ODPEM', text: 'KPIs automatizados de tiempos de respuesta, incidentes por parroquia, cobertura de camaras, metricas de seguridad turistica y efectividad de las ZOSO — sin exportacion manual — para reportes del Ministerio de Seguridad Nacional, la ODPEM y organismos internacionales como el BID y la CBSI.' },
  ] : [
    { n: '01', title: 'Unified video', text: 'All cameras — JCF CCTV networks in Kingston, Montego Bay, and Spanish Town, Port of Kingston video (KFTL/CMA CGM, 3.2M TEU capacity), NMIA and Sangster Airport (MBJ) surveillance, Falmouth and Ocho Rios cruise port cameras, and hotel security in Montego Bay, Negril, and Ocho Rios — on one VMS interface with search by parish, zone, date, and event type.' },
    { n: '02', title: 'Unified dispatch center', text: 'Emergency intake (119/110/116), incident classification, and unit assignment from one CAD platform. Shared incident record bridging JCF, JDF (including ZOSO operations), JFRS, medical services, and ODPEM for natural disaster and hurricane response.' },
    { n: '03', title: 'Real-time GIS', text: 'Positions of JCF, JDF, JFRS, Coast Guard, and ODPEM on one shared operational map — joint view across all 14 parishes, tourist zones, ports, airports, and ZOSO areas. Maritime EEZ coverage included.' },
    { n: '04', title: 'Sensor and alert fusion', text: 'LPR readers on Jamaica highways (North-South Highway, Highway 2000), Port of Kingston intrusion sensors, non-intrusive inspection (NII) scanners at Montego Bay cargo terminals, ODPEM hurricane and tropical storm alerts, and panic buttons unified with video in the same operational environment.' },
    { n: '05', title: 'MNS and ODPEM reporting', text: 'Automated KPIs for response times, parish-level incident counts, camera coverage, tourism security metrics, and ZOSO effectiveness — no manual export — for Ministry of National Security, ODPEM, and international body (IDB, CBSI) reporting.' },
  ]

  const challengeCards = es ? [
    { icon: '🏖️', title: 'Seguridad turistica: motor economico sin plataforma integrada', text: 'Jamaica recibe mas de 4 millones de visitantes anuales, generando mas de US$4,000 millones en divisas y aproximadamente el 10% del PIB. Montego Bay, Ocho Rios, Negril y Falmouth son destinos principales. La JCF Area 1 (St. James) y la TPDCo coordinan la seguridad turistica, pero las camaras de hoteles, puertos cruceristas y la red policial operan desconectadas. Un incidente de seguridad en zonas turisticas afecta directamente la reputacion y la economia del pais.' },
    { icon: '🔫', title: 'Violencia de pandillas y operaciones ZOSO', text: 'Jamaica ha enfrentado historicamente una de las tasas de homicidio mas altas del Caribe. En 2025, la tasa bajo a 23.7 (desde 40.1 en 2024), con 673 victimas — la cifra mas baja en 31 anos. Las Zonas de Operaciones Especiales (ZOSO) combinan JCF y JDF con intervencion social. Mas de 100 pandillas operan en la isla. La coordinacion JCF-JDF requiere una plataforma que integre GIS, video y despacho en tiempo real — sin esta integracion, las ZOSO pierden eficacia operativa.' },
    { icon: '🌀', title: 'Corredor de huracanes sin integracion de emergencias', text: 'Jamaica se ubica en el corredor principal de huracanes del Caribe. El Huracan Melissa (noviembre 2025) provoco evacuaciones obligatorias y reasignacion de la ODPEM a la Oficina del Primer Ministro. Sin un sistema unificado de despacho, la coordinacion entre JCF, JDF, JFRS, ODPEM y servicios medicos durante eventos climaticos extremos depende de comunicaciones ad hoc y reportes manuales.' },
    { icon: '🚢', title: 'Infraestructura portuaria critica sin VMS unificado', text: 'El Puerto de Kingston (KFTL, operado por CMA CGM, capacidad 3.2M TEU) es el hub de transbordo mas importante del Caribe. Montego Bay maneja carga regional y cruceros. La Port Security Corps protege los activos portuarios. Sin un VMS unificado, las camaras portuarias, los escaneres NII, la vigilancia aeroportuaria (NMIA, MBJ) y las redes de la JCF operan en silos — reduciendo la velocidad de respuesta a incidentes en infraestructura critica.' },
  ] : [
    { icon: '🏖️', title: 'Tourism security: economic engine without integrated platform', text: 'Jamaica receives over 4 million visitors annually, generating over US$4 billion in foreign exchange and approximately 10% of GDP. Montego Bay, Ocho Rios, Negril, and Falmouth are major destinations. JCF Area 1 (St. James) and TPDCo coordinate tourism security, but hotel cameras, cruise port systems, and the police network operate disconnected. A security incident in tourist zones directly affects the country"s reputation and economy.' },
    { icon: '🔫', title: 'Gang violence and ZOSO operations', text: 'Jamaica has historically faced one of the highest homicide rates in the Caribbean. In 2025, the rate dropped to 23.7 (from 40.1 in 2024), with 673 victims — the lowest figure in 31 years. Zones of Special Operations (ZOSOs) combine JCF and JDF with social intervention. Over 100 gangs operate on the island. JCF-JDF coordination requires a platform integrating GIS, video, and dispatch in real time — without this integration, ZOSOs lose operational effectiveness.' },
    { icon: '🌀', title: 'Hurricane corridor without emergency integration', text: 'Jamaica sits in the main Caribbean hurricane corridor. Hurricane Melissa (November 2025) triggered mandatory evacuations and reassignment of ODPEM to the Office of the Prime Minister. Without a unified dispatch system, coordination between JCF, JDF, JFRS, ODPEM, and medical services during extreme weather events relies on ad hoc communications and manual reporting.' },
    { icon: '🚢', title: 'Critical port infrastructure without unified VMS', text: 'The Port of Kingston (KFTL, operated by CMA CGM, 3.2M TEU capacity) is the Caribbean"s most important transshipment hub. Montego Bay handles regional cargo and cruise ships. The Port Security Corps protects port assets. Without a unified VMS, port cameras, NII scanners, airport surveillance (NMIA, MBJ), and JCF networks operate in silos — slowing response to incidents at critical infrastructure.' },
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
            {es ? 'Software de Seguridad Publica — Jamaica' : 'Public Safety Software — Jamaica'}
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
              ? 'Software de Seguridad Publica para Jamaica'
              : 'Public Safety Software for Jamaica'}
          </h1>
          <p style={{
            fontSize: '18px', fontWeight: 300, color: 'var(--dim)',
            lineHeight: 1.75, maxWidth: '720px',
          }}>
            {es
              ? 'Guia para parroquias, municipios y zonas turisticas de Jamaica que evaluan plataformas unificadas de seguridad publica: videovigilancia, despacho de emergencias, GIS y gestion de incidentes.'
              : 'Guide for Jamaican parishes, municipalities, and tourist zones evaluating unified public safety platforms — video surveillance, emergency dispatch, GIS, and incident management.'}
          </p>
        </section>

        {/* -- SECTION: Jamaica Public Safety Structure -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? 'La Estructura de Seguridad Publica en Jamaica'
                : "Jamaica's Public Safety Structure"}
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Jamaica es una monarquia constitucional parlamentaria dividida en 14 parroquias (parishes) y tres condados historicos. La Jamaica Constabulary Force (JCF, ~12,000 oficiales) es la fuerza policial principal, bajo el Ministerio de Seguridad Nacional (MNS). La JCF opera divisiones en Kingston, St. Andrew, St. James (Montego Bay), St. Catherine (Spanish Town) y otras parroquias. La Jamaica Defence Force (JDF, ~5,000 efectivos) incluye el Regimiento de Jamaica, la Guardia Costera, el Ala Aerea y la Unidad de Ingenieria. La JDF apoya operaciones de seguridad interna, incluyendo las Zonas de Operaciones Especiales (ZOSO) y operaciones anti-narcoticos. La Jamaica Fire Regiment Service (JFRS) atiende incendios y rescate. La Office of Disaster Preparedness and Emergency Management (ODPEM) coordina la respuesta ante huracanes, inundaciones y terremotos — reasignada a la Oficina del Primer Ministro tras el Huracan Melissa (noviembre 2025).'
                : "Jamaica is a parliamentary constitutional monarchy divided into 14 parishes and three historic counties. The Jamaica Constabulary Force (JCF, ~12,000 officers) is the primary police force, under the Ministry of National Security (MNS). The JCF operates divisions in Kingston, St. Andrew, St. James (Montego Bay), St. Catherine (Spanish Town), and other parishes. The Jamaica Defence Force (JDF, ~5,000 personnel) includes the Jamaica Regiment, Coast Guard, Air Wing, and Engineering Unit. The JDF supports internal security operations, including Zones of Special Operations (ZOSOs) and anti-narcotics operations. The Jamaica Fire Regiment Service (JFRS) handles fire and rescue. The Office of Disaster Preparedness and Emergency Management (ODPEM) coordinates hurricane, flood, and earthquake response — reassigned to the Office of the Prime Minister after Hurricane Melissa (November 2025)."}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Jamaica protege aproximadamente 2.8 millones de ciudadanos en 10,990 km². Kingston (capital, ~670,000 en area metropolitana con St. Andrew) es el centro politico y economico. Montego Bay (~110,000, parroquia de St. James) es el centro turistico principal. El turismo genera mas de US$4,000 millones anuales con mas de 4 millones de visitantes (stopover + cruceristas). El Puerto de Kingston (KFTL, operado por CMA CGM bajo concesion de 30 anos desde 2016, capacidad 3.2M TEU) es el hub de transbordo de contenedores mas importante del Caribe. Jamaica es el quinto mayor productor de bauxita del mundo, con exportaciones por US$612 millones en 2025. Las emergencias se atienden via tres lineas separadas: 119 (policia), 110 (bomberos) y 116 (ambulancia). Las adquisiciones publicas se rigen por el Handbook of Public Sector Procurement Procedures y el portal GOJEP. La NCC supervisa adjudicaciones. La moneda es el dolar jamaicano (JMD), administrado por el Bank of Jamaica. Jamaica es miembro de CARICOM y la Commonwealth.'
                : "Jamaica protects approximately 2.8 million citizens across 10,990 km². Kingston (capital, ~670,000 metro area with St. Andrew) is the political and economic center. Montego Bay (~110,000, St. James parish) is the main tourism hub. Tourism generates over US$4 billion annually with over 4 million visitors (stopover + cruise). The Port of Kingston (KFTL, operated by CMA CGM under a 30-year concession since 2016, 3.2M TEU capacity) is the Caribbean's most important container transshipment hub. Jamaica is the world's fifth-largest bauxite producer, with US$612 million in exports in 2025. Emergencies are handled via three separate lines: 119 (police), 110 (fire), and 116 (ambulance). Public procurement is governed by the Handbook of Public Sector Procurement Procedures and the GOJEP portal. The NCC oversees awards. The currency is the Jamaican dollar (JMD), managed by the Bank of Jamaica. Jamaica is a member of CARICOM and the Commonwealth."}
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
                ? 'Desafios Clave para Parroquias y Municipios de Jamaica'
                : 'Key Challenges for Jamaican Parishes and Municipalities'}
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
                ? '¿Como Funciona una Plataforma Unificada para Jamaica?'
                : 'How a Unified Platform Works for Jamaica'}
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
                { href: '/k-dispatch', label: 'K-Dispatch', color: '#f59e0b', desc: es ? 'Despacho CAD / emergencias' : 'CAD dispatch / emergency' },
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
                ? 'Fragmentado vs Plataforma Unificada para Instituciones Jamaicanas'
                : 'Fragmented vs Unified Platform for Jamaican Institutions'}
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
                  { href: '/resources/public-safety-software-dominican-republic', label: es ? 'Seguridad Publica — Republica Dominicana' : 'Public Safety Software — Dominican Republic' },
                  { href: '/resources/public-safety-software-colombia', label: es ? 'Seguridad Publica — Colombia' : 'Public Safety Software — Colombia' },
                  { href: '/resources/public-safety-software-mexico', label: es ? 'Seguridad Publica — Mexico' : 'Public Safety Software — Mexico' },
                  { href: '/resources/public-safety-software-uk', label: es ? 'Seguridad Publica — Reino Unido' : 'Public Safety Software — United Kingdom' },
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
                ? 'Preguntas Sobre Software de Seguridad Publica en Jamaica'
                : 'Questions About Public Safety Software in Jamaica'}
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
                  href: '/resources/public-safety-software-dominican-republic',
                  en: 'Public Safety Software for the Dominican Republic',
                  es: 'Software de Seguridad Publica para la Republica Dominicana',
                },
                {
                  href: '/resources/public-safety-software-colombia',
                  en: 'Public Safety Software for Colombia',
                  es: 'Software de Seguridad Publica para Colombia',
                },
                {
                  href: '/resources/public-safety-software-panama',
                  en: 'Public Safety Software for Panama',
                  es: 'Software de Seguridad Publica para Panama',
                },
                {
                  href: '/resources/public-safety-software-mexico',
                  en: 'Public Safety Software for Mexico',
                  es: 'Software de Seguridad Publica para Mexico',
                },
                {
                  href: '/resources/cad-dispatch-software-latin-america',
                  en: 'CAD Dispatch Software for Latin America',
                  es: 'Software CAD de Despacho para America Latina',
                },
                {
                  href: '/resources/public-safety-software-uk',
                  en: 'Public Safety Software for the United Kingdom',
                  es: 'Software de Seguridad Publica para el Reino Unido',
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
          h2={es ? 'Transforma la Seguridad Publica en Tu Parroquia o Municipio Jamaicano' : 'Transform Public Safety in Your Jamaican Parish or Municipality'}
          subtitle={es
            ? 'Conoce como KabatOne integra videovigilancia, despacho de emergencias, GIS y gestion de incidentes en una sola plataforma operativa para instituciones jamaicanas — desde las zonas turisticas de Montego Bay hasta las operaciones ZOSO.'
            : 'See how KabatOne unifies video surveillance, emergency dispatch, GIS, and incident management into one operational platform for Jamaican institutions — from Montego Bay tourist zones to ZOSO operations.'}
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
