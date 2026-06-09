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
  return generatePageMetadata('publicSafetySoftwareEcuador', locale)
}

export default async function PublicSafetySoftwareEcuadorPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-ecuador/`
    : `${baseUrl}/resources/public-safety-software-ecuador/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Publica — Ecuador' : 'Public Safety Software — Ecuador', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: "¿Como funciona el Sistema ECU-911 en Ecuador?",
      answer: "El ECU-911 (Sistema Integrado de Seguridad ECU-911) es la plataforma nacional de emergencias de Ecuador, operativa desde 2012 y considerada una de las mas avanzadas de America Latina. Unifica la Policia Nacional (~47,000 agentes), Fuerzas Armadas, bomberos municipales, servicios de salud (SNEM/Cruz Roja Ecuatoriana) y otros servicios de emergencia bajo un solo numero nacional: 911. Cuenta con centros de atencion en todas las provincias y opera videovigilancia integrada en las principales ciudades. KabatOne se integra con la infraestructura ONVIF/RTSP del ECU-911, anadiendo CAD estructurado, GIS operacional y analisis de video sobre la plataforma existente.",
    },
    {
      question: "¿Como se financia la tecnologia de seguridad publica en Ecuador?",
      answer: "El financiamiento proviene del Ministerio del Interior, el Ministerio de Defensa y los gobiernos autonomos descentralizados (GAD) municipales. Las adquisiciones se rigen por el SERCOP (Servicio Nacional de Contratacion Publica) y el portal compraspublicas.gob.ec, donde se publican todas las licitaciones abiertas a empresas extranjeras con representacion local o en consorcio. Organismos internacionales como el BID, CAF, USAID y la UE cofinancian proyectos de modernizacion tecnologica para el ECU-911 y la Policia Nacional.",
    },
    {
      question: "¿Como aborda KabatOne el alto nivel de inseguridad en Guayaquil y la costa ecuatoriana?",
      answer: "Guayaquil y las provincias costeras del Guayas, Los Rios y Esmeraldas enfrentan altos indices de criminalidad vinculados al narcotrafico en la ruta Colombia–Ecuador–Peru. KabatOne unifica el video del ECU-911, las UPC (Unidades de Policia Comunitaria), el video municipal de Guayaquil y el sistema portuario de Guayaquil (el mayor puerto de Ecuador) en una sola plataforma: deteccion de disparos, LPR en perimetros urbanos, alertas de cruce de fronteras y despacho policial en tiempo real desde el mismo entorno operativo.",
    },
    {
      question: "¿Puede KabatOne integrarse con la infraestructura de video existente del ECU-911?",
      answer: "Si. KabatOne integra cualquier camara ONVIF/RTSP sin reemplazo de hardware. Las camaras del ECU-911 en Quito, Guayaquil, Cuenca, Manta y las 24 provincias se conectan directamente. Camaras municipales del Municipio del Distrito Metropolitano de Quito (MDMQ), del Municipio de Guayaquil, LPR en el aeropuerto Mariscal Sucre (UIO) y el aeropuerto Jose Joaquin de Olmedo (GYE), y el circuito de video del Puerto de Guayaquil (APG) tambien se integran sin cambiar infraestructura.",
    },
    {
      question: "¿Como apoya KabatOne la coordinacion entre la Policia Nacional y las Fuerzas Armadas en Ecuador?",
      answer: "Desde 2023, Ecuador declaro emergencia de seguridad y despliega Fuerzas Armadas en apoyo a la Policia Nacional para operaciones anticrimen. KabatOne proporciona un mapa GIS compartido donde unidades policiales y militares son visibles en tiempo real, el despacho ECU-911 puede coordinar respuesta conjunta, y el registro de incidentes es unico para ambas instituciones. Esto elimina la coordinacion solo por radio y reduce tiempos de respuesta en operaciones combinadas.",
    },
    {
      question: "¿Como se alinea KabatOne con el SERCOP y el portal de compras publicas de Ecuador?",
      answer: "KabatOne se comercializa a traves de distribuidores e integradores locales registrados ante el SERCOP. La arquitectura modular permite licitar por componente (K-Video, K-Dispatch, K-Safety) o como plataforma unificada, adaptandose a los rangos presupuestarios de GAD municipales, gobernaciones provinciales y el Ministerio del Interior. Las licitaciones en compraspublicas.gob.ec estan abiertas a empresas extranjeras con representacion local o mediante consorcio con empresa ecuatoriana.",
    },
  ] : [
    {
      question: "How does Ecuador's ECU-911 system work?",
      answer: "ECU-911 (Sistema Integrado de Seguridad ECU-911) is Ecuador's national emergency platform, operational since 2012 and considered one of the most advanced in Latin America. It unifies the National Police (~47,000 officers), Armed Forces, municipal fire departments, health services (SNEM/Cruz Roja Ecuatoriana), and other emergency services under one national number: 911. It has response centers in all provinces and operates integrated video surveillance in major cities. KabatOne integrates with ECU-911's ONVIF/RTSP infrastructure, adding structured CAD, operational GIS, and video analytics on top of the existing platform.",
    },
    {
      question: "How does Ecuador fund public safety technology?",
      answer: "Funding comes from the Ministry of the Interior, Ministry of Defense, and decentralized autonomous municipal governments (GADs). Procurement is governed by SERCOP (National Public Procurement Service) and the compraspublicas.gob.ec portal, which publishes all tenders open to foreign firms with local representation or in consortium. International organizations including the IDB, CAF, USAID, and the EU co-finance technology modernization projects for ECU-911 and the National Police.",
    },
    {
      question: "How does KabatOne address the high crime levels in Guayaquil and the Ecuadorian coast?",
      answer: "Guayaquil and the coastal provinces of Guayas, Los Rios, and Esmeraldas face high crime rates linked to drug trafficking on the Colombia–Ecuador–Peru corridor. KabatOne unifies ECU-911 video, UPC (Community Police Unit) cameras, Guayaquil municipal video, and the Port of Guayaquil surveillance system — Ecuador's largest port — on one platform: gunshot detection, LPR on urban perimeters, border crossing alerts, and real-time police dispatch from the same operational environment.",
    },
    {
      question: "Can KabatOne integrate with Ecuador's existing ECU-911 camera infrastructure?",
      answer: "Yes. KabatOne integrates any ONVIF/RTSP camera without hardware replacement. ECU-911 cameras in Quito, Guayaquil, Cuenca, Manta, and all 24 provinces connect directly. Municipal cameras from the Quito Metropolitan District Municipality (MDMQ) and Guayaquil Municipality, LPR readers at Mariscal Sucre International Airport (UIO) and Jose Joaquin de Olmedo Airport (GYE), and the Port of Guayaquil (APG) video circuit also integrate without changing infrastructure.",
    },
    {
      question: "How does KabatOne support coordination between Ecuador's National Police and Armed Forces?",
      answer: "Since 2023, Ecuador has declared a security emergency and deployed Armed Forces in support of the National Police for anti-crime operations. KabatOne provides a shared GIS map where police and military units are visible in real time, ECU-911 dispatch can coordinate joint responses, and the incident record is unified for both institutions. This eliminates radio-only coordination and reduces response times in combined operations.",
    },
    {
      question: "How does KabatOne align with SERCOP and Ecuador's public procurement portal?",
      answer: "KabatOne is marketed through local distributors and integrators registered with SERCOP. The modular architecture allows tendering by component (K-Video, K-Dispatch, K-Safety) or as a unified platform, adapting to the budget ranges of municipal GADs, provincial governments, and the Ministry of the Interior. Tenders on compraspublicas.gob.ec are open to foreign firms with local representation or through consortium with an Ecuadorian company.",
    },
  ]

  const artSchema = articleSchema(
    es ? 'Software de Seguridad Publica para Municipios y Cantones en Ecuador' : 'Public Safety Software for Ecuador: Government Guide',
    es
      ? 'Software de seguridad publica para municipios, cantones y el sistema nacional ECU-911 de Ecuador — conectando videovigilancia, despacho de emergencias, GIS y gestion de incidentes en una sola plataforma operativa.'
      : 'Public safety software for Ecuadorian municipalities, cantones, and the national ECU-911 system — connecting surveillance, emergency dispatch, GIS, and incident management in one unified operational platform.',
    pageUrl,
    '2026-06-09'
  )

  const comparisonRows = es ? [
    { feature: 'Video', fragmented: 'Camaras ECU-911, municipales de Quito (MDMQ) y Guayaquil, y del Puerto APG en plataformas aisladas sin VMS compartido entre Policia Nacional y gobiernos locales', unified: 'VMS unificado, todas las camaras buscables por canton, provincia, fecha y tipo de evento' },
    { feature: 'Despacho de emergencias', fragmented: 'ECU-911 como canal unico pero sin registro compartido entre Policia Nacional, Fuerzas Armadas, bomberos y SNEM por canton', unified: 'Registro unico de incidente conectando Policia Nacional, FFAA, bomberos, SNEM y Cruz Roja Ecuatoriana' },
    { feature: 'Coordinacion policia-militares', fragmented: 'Solo radio entre Policia Nacional y Fuerzas Armadas en operaciones antinarcotico y de orden publico desde 2023', unified: 'Mapa GIS compartido con posiciones de unidades policiales y militares en tiempo real para operaciones combinadas' },
    { feature: 'Seguridad portuaria y aeroportuaria', fragmented: 'Video del Puerto de Guayaquil (APG), aeropuerto UIO y aeropuerto GYE desconectados del ECU-911 y la Policia Antinarcoticos', unified: 'LPR, video portuario y aeroportuario integrados con despacho y analisis antinarcotico en el mismo entorno' },
    { feature: 'Reportes para el Ministerio del Interior', fragmented: 'Exportacion manual de datos incompletos por sistema, canton y provincia', unified: 'KPIs automatizados de tiempos de respuesta, incidentes por canton y cobertura de camaras ECU-911' },
    { feature: 'Dependencia tecnologica', fragmented: 'Hardware propietario por proveedor, por municipio y por canton', unified: 'ONVIF/RTSP, cualquier marca de camara ya instalada en la red ECU-911' },
  ] : [
    { feature: 'Video', fragmented: 'ECU-911, Quito MDMQ, Guayaquil municipal, and APG port cameras on isolated platforms with no shared VMS between National Police and local governments', unified: 'Unified VMS, all cameras searchable by canton, province, date, and event type' },
    { feature: 'Emergency dispatch', fragmented: 'ECU-911 as single channel but no shared incident record between National Police, Armed Forces, fire departments, and SNEM per canton', unified: 'Single incident record bridging National Police, FFAA, fire departments, SNEM, and Cruz Roja Ecuatoriana' },
    { feature: 'Police–military coordination', fragmented: 'Radio-only between National Police and Armed Forces in anti-narcotics and public order operations since 2023', unified: 'Shared GIS map with real-time police and military unit positions for combined operations' },
    { feature: 'Port and airport security', fragmented: 'Port of Guayaquil (APG), UIO airport, and GYE airport video disconnected from ECU-911 and Anti-Narcotics Police', unified: 'LPR, port and airport video integrated with dispatch and anti-narcotics analytics in the same environment' },
    { feature: 'Ministry of the Interior reporting', fragmented: 'Manual export of incomplete data per system, canton, and province', unified: 'Automated KPIs for response times, canton-level incident counts, and ECU-911 camera coverage' },
    { feature: 'Technology lock-in', fragmented: 'Proprietary hardware per vendor, per municipality, and per canton', unified: 'ONVIF/RTSP, any camera brand already installed in the ECU-911 network' },
  ]

  const workflowSteps = es ? [
    { n: '01', title: 'Video unificado ECU-911 y municipal', text: 'Todas las camaras — ECU-911 en las 24 provincias, municipales del MDMQ de Quito y del Municipio de Guayaquil, camaras en los 221 cantones, LPR en aeropuertos UIO y GYE y en el Puerto APG — en una sola interfaz VMS con busqueda por canton, provincia, fecha y tipo de evento.' },
    { n: '02', title: 'Centro de despacho ECU-911 unificado', text: 'Recepcion 911, clasificacion de incidentes y asignacion de unidades desde una sola plataforma CAD. Registro unico de incidente compartido entre Policia Nacional, Fuerzas Armadas, bomberos municipales y SNEM.' },
    { n: '03', title: 'GIS en tiempo real', text: 'Posiciones de la Policia Nacional, Fuerzas Armadas, bomberos, SNEM y Cruz Roja Ecuatoriana en un solo mapa operativo compartido. Vista conjunta entre la UPC cantonal, el ECU-911 provincial y el Ministerio del Interior.' },
    { n: '04', title: 'Fusion antinarcotico y sensores', text: 'LPR en puertos (Guayaquil, Esmeraldas, Manta) y aeropuertos, deteccion de disparos en zonas de alto conflicto, botones de panico municipales y sensores de perimetro portuario unificados con video y despacho en el mismo entorno operativo.' },
    { n: '05', title: 'Reportes para el Ministerio del Interior y SERCOP', text: 'KPIs automatizados de tiempos de respuesta, incidentes por canton y cobertura de camaras ECU-911 para reportes ministeriales y evidencia de cumplimiento en contratos SERCOP — sin exportacion manual.' },
  ] : [
    { n: '01', title: 'Unified ECU-911 and municipal video', text: 'All cameras — ECU-911 across all 24 provinces, Quito MDMQ and Guayaquil municipal cameras, cameras across 221 cantones, LPR at UIO and GYE airports and Port APG — on one VMS interface with search by canton, province, date, and event type.' },
    { n: '02', title: 'Unified ECU-911 dispatch center', text: 'Single 911 intake, incident classification, and unit assignment from one CAD platform. Shared incident record bridging National Police, Armed Forces, municipal fire departments, and SNEM.' },
    { n: '03', title: 'Real-time GIS', text: 'Positions of National Police, Armed Forces, fire departments, SNEM, and Cruz Roja Ecuatoriana on one shared operational map — joint view between cantonal UPC, provincial ECU-911 center, and the Ministry of the Interior.' },
    { n: '04', title: 'Anti-narcotics and sensor fusion', text: 'LPR at ports (Guayaquil, Esmeraldas, Manta) and airports, gunshot detection in high-conflict zones, municipal panic buttons, and port perimeter sensors unified with video and dispatch in the same operational environment.' },
    { n: '05', title: 'Ministry of the Interior and SERCOP reporting', text: 'Automated KPIs for response times, canton-level incident counts, and ECU-911 camera coverage for ministry reports and contract compliance evidence under SERCOP — no manual export.' },
  ]

  const challengeCards = es ? [
    { icon: '🚨', title: 'Crisis de seguridad — narcotrafico y crimen organizado', text: 'Ecuador se ubica en la ruta Colombia–Ecuador–Peru del narcotrafico, con el Puerto de Guayaquil como uno de los principales puntos de salida de cocaine hacia Europa y EE.UU. Desde 2023, el gobierno declaró conflicto armado interno ante la expansion del crimen organizado. Guayaquil registro uno de los indices de homicidio mas altos de America Latina, superando los 40 por 100,000 habitantes en algunos periodos. La respuesta requiere coordinacion policial, militar y municipal desde un solo entorno operativo.' },
    { icon: '📡', title: 'ECU-911 sin integracion CAD municipal por canton', text: 'El ECU-911 opera videovigilancia integrada a nivel provincial, pero la integracion con sistemas municipales de despacho y video varia entre los 221 cantones. Sin un registro comun de incidente que conecte el ECU-911 provincial con las UPC cantonales, los eventos multijurisdiccionales — especialmente en la conurbacion Quito y el Gran Guayaquil — generan duplicacion de respuesta y demoras criticas.' },
    { icon: '🏗️', title: 'Coordinacion policia-militares sin plataforma operativa compartida', text: 'Desde el estado de excepcion de 2023, la Policia Nacional y las Fuerzas Armadas operan conjuntamente en zonas de alto conflicto. Sin un mapa GIS compartido, la coordinacion depende de radio y llamadas de voz, generando riesgo de fuego amigo, duplicacion de recursos y tiempos de respuesta elevados en operaciones combinadas urbanas en Guayaquil, Esmeraldas y la frontera norte.' },
    { icon: '📷', title: 'Video ECU-911 y municipal sin VMS central unificado', text: 'Quito (MDMQ), Guayaquil, Cuenca, Manta y los cantones principales operan CCTV del ECU-911 y video municipal sin integracion entre si. El Puerto de Guayaquil (APG), el aeropuerto UIO y el aeropuerto GYE gestionan video de forma independiente. Sin un VMS unificado, los operadores acceden a multiples consolas, reduciendo la velocidad de deteccion y respuesta a incidentes que cruzan jurisdicciones.' },
  ] : [
    { icon: '🚨', title: 'Security crisis — drug trafficking and organized crime', text: 'Ecuador sits on the Colombia–Ecuador–Peru drug trafficking route, with the Port of Guayaquil as one of the main cocaine exit points to Europe and the US. Since 2023, the government declared an internal armed conflict in response to the expansion of organized crime. Guayaquil recorded one of the highest homicide rates in Latin America, exceeding 40 per 100,000 in some periods. The response requires police, military, and municipal coordination from a single operational environment.' },
    { icon: '📡', title: 'ECU-911 without integrated municipal CAD per canton', text: 'ECU-911 operates integrated video surveillance at the provincial level, but integration with municipal dispatch and video systems varies across 221 cantones. Without a shared incident record connecting the provincial ECU-911 center with cantonal UPCs, multi-jurisdictional events — especially in the greater Quito and Gran Guayaquil conurbations — generate duplicate responses and critical delays.' },
    { icon: '🏗️', title: 'Police–military coordination without a shared operational platform', text: 'Since the 2023 state of emergency, National Police and Armed Forces operate jointly in high-conflict zones. Without a shared GIS map, coordination relies on radio and voice calls, creating friendly-fire risk, resource duplication, and high response times in combined urban operations in Guayaquil, Esmeraldas, and the northern border.' },
    { icon: '📷', title: 'ECU-911 and municipal video without a unified central VMS', text: 'Quito (MDMQ), Guayaquil, Cuenca, Manta, and major cantones each operate ECU-911 CCTV and municipal video without integration between them. The Port of Guayaquil (APG), UIO airport, and GYE airport manage video independently. Without a unified VMS, operators access multiple consoles, slowing detection and response to incidents that cross jurisdictions.' },
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
            {es ? 'Software de Seguridad Publica — Ecuador' : 'Public Safety Software — Ecuador'}
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
              ? 'Software de Seguridad Publica para Ecuador'
              : 'Public Safety Software for Ecuador'}
          </h1>
          <p style={{
            fontSize: '18px', fontWeight: 300, color: 'var(--dim)',
            lineHeight: 1.75, maxWidth: '720px',
          }}>
            {es
              ? 'Guia para municipalidades ecuatorianas, GAD provinciales y el sistema nacional ECU-911 que evaluan plataformas unificadas de seguridad publica: videovigilancia, despacho de emergencias, GIS y gestion de incidentes.'
              : 'Guide for Ecuadorian municipalities, provincial GADs, and the national ECU-911 system evaluating unified public safety platforms — video surveillance, emergency dispatch, GIS, and incident management.'}
          </p>
        </section>

        {/* -- SECTION: Ecuador Public Safety Structure -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? 'La Estructura de Seguridad Publica en Ecuador'
                : "Ecuador's Public Safety Structure"}
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Ecuador es una republica constitucional dividida en 24 provincias, 221 cantones y 1,500 parroquias. La seguridad interior es responsabilidad de la Policia Nacional del Ecuador (PNE, ~47,000 agentes) bajo el Ministerio del Interior. Las Fuerzas Armadas (FFAA) apoyan operaciones de orden publico en estados de excepcion, como el declarado en 2023 ante la crisis de crimen organizado. El ECU-911 (Sistema Integrado de Seguridad ECU-911), operativo desde 2012, es el sistema de emergencias mas avanzado de la region: unifica despacho policial, bomberos, salud y video bajo el numero 911 con presencia en todas las provincias. Los Cuerpos de Bomberos son de gestion municipal. El SNEM (Servicio Nacional de Emergencias Medicas) y la Cruz Roja Ecuatoriana integran el sistema de respuesta de salud.'
                : 'Ecuador is a constitutional republic divided into 24 provinces, 221 cantones, and 1,500 parishes. Internal security is the responsibility of the National Police of Ecuador (PNE, ~47,000 officers) under the Ministry of the Interior. The Armed Forces (FFAA) support public order operations during states of emergency, such as the one declared in 2023 in response to the organized crime crisis. ECU-911 (Sistema Integrado de Seguridad ECU-911), operational since 2012, is the most advanced emergency system in the region: it unifies police dispatch, fire departments, health, and video under the 911 number with a presence in all provinces. Fire departments are managed municipally. SNEM (National Medical Emergency Service) and Cruz Roja Ecuatoriana integrate the health response system.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Ecuador protege aproximadamente 18 millones de ciudadanos distribuidos en dos grandes areas metropolitanas: Quito (Distrito Metropolitano, ~3M hab.) es la capital administrativa y sede del Gobierno Nacional; Guayaquil (conurbacion Gran Guayaquil, ~3.5M hab.) es el principal polo economico y el mayor puerto de exportacion de la region andina. Cuenca (~600,000 hab.) es la tercera ciudad. El pais enfrenta una crisis de seguridad sin precedentes desde 2022: Ecuador paso de ser un pais de transito a un escenario de conflicto armado interno con carteles transnacionales operando en Guayaquil, Esmeraldas, Santo Domingo y la frontera norte con Colombia. El SERCOP y el portal compraspublicas.gob.ec rigen la contratacion publica.'
                : "Ecuador protects approximately 18 million citizens distributed across two major metropolitan areas: Quito (Metropolitan District, ~3M pop.) is the administrative capital and seat of the national government; Guayaquil (Gran Guayaquil conurbation, ~3.5M pop.) is the main economic hub and the Andean region's largest export port. Cuenca (~600,000 pop.) is the third city. The country has faced an unprecedented security crisis since 2022: Ecuador moved from being a transit country to a scenario of internal armed conflict with transnational cartels operating in Guayaquil, Esmeraldas, Santo Domingo, and the northern border with Colombia. SERCOP and the compraspublicas.gob.ec portal govern public procurement."}
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
                ? 'Desafios Clave para Municipalidades y Cantones de Ecuador'
                : 'Key Challenges for Ecuadorian Municipalities and Cantones'}
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
                ? '¿Como Funciona una Plataforma Unificada para Ecuador?'
                : 'How a Unified Platform Works for Ecuador'}
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
                { href: '/k-dispatch', label: 'K-Dispatch', color: '#f59e0b', desc: es ? 'Despacho CAD / ECU-911' : 'CAD dispatch / ECU-911' },
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
                ? 'Fragmentado vs Plataforma Unificada para Municipalidades Ecuatorianas'
                : 'Fragmented vs Unified Platform for Ecuadorian Municipalities'}
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
                  { href: '/resources/public-safety-software-colombia', label: es ? 'Seguridad Publica — Colombia' : 'Public Safety Software — Colombia' },
                  { href: '/resources/public-safety-software-peru', label: es ? 'Seguridad Publica — Peru' : 'Public Safety Software — Peru' },
                  { href: '/resources/public-safety-software-argentina', label: es ? 'Seguridad Publica — Argentina' : 'Public Safety Software — Argentina' },
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
                ? 'Preguntas Sobre Software de Seguridad Publica en Ecuador'
                : 'Questions About Public Safety Software in Ecuador'}
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
                  href: '/resources/public-safety-software-colombia',
                  en: 'Public Safety Software for Colombia',
                  es: 'Software de Seguridad Publica para Colombia',
                },
                {
                  href: '/resources/public-safety-software-peru',
                  en: 'Public Safety Software for Peru',
                  es: 'Software de Seguridad Publica para Peru',
                },
                {
                  href: '/resources/public-safety-software-argentina',
                  en: 'Public Safety Software for Argentina',
                  es: 'Software de Seguridad Publica para Argentina',
                },
                {
                  href: '/resources/public-safety-software-chile',
                  en: 'Public Safety Software for Chile',
                  es: 'Software de Seguridad Publica para Chile',
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
          h2={es ? 'Transforma la Seguridad Publica de Tu Municipalidad o Canton en Ecuador' : 'Transform Public Safety in Your Ecuadorian Municipality or Canton'}
          subtitle={es
            ? 'Conoce como KabatOne integra el ECU-911, videovigilancia municipal, despacho de emergencias, GIS y gestion de incidentes en una sola plataforma operativa para municipalidades ecuatorianas — desde Quito y Guayaquil hasta los cantones de la costa, la sierra y la Amazonia.'
            : 'See how KabatOne unifies ECU-911, municipal video surveillance, emergency dispatch, GIS, and incident management into one operational platform for Ecuadorian municipalities — from Quito and Guayaquil to cantones across the coast, highlands, and Amazon.'}
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
