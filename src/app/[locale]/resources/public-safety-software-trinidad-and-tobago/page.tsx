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
  return generatePageMetadata('publicSafetySoftwareTrinidadAndTobago', locale)
}

export default async function PublicSafetySoftwareTrinidadAndTobagoPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-trinidad-and-tobago/`
    : `${baseUrl}/resources/public-safety-software-trinidad-and-tobago/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Publica — Trinidad y Tobago' : 'Public Safety Software — Trinidad and Tobago', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: "¿Como funciona el sistema de emergencias de Trinidad y Tobago?",
      answer: "Trinidad y Tobago opera el sistema 999 para emergencias policiales, 990 para bomberos y 811 para ambulancias. El Trinidad and Tobago Police Service (TTPS, ~7,000 oficiales) es la fuerza policial principal, organizada en 9 divisiones policiales. La National Operations Centre (NOC) funciona como centro de coordinacion bajo el Ministerio de Seguridad Nacional. KabatOne unifica estas lineas separadas en un CAD integrado que coordina TTPS, TTDF, TTFS y servicios de salud en una sola plataforma operativa.",
    },
    {
      question: "¿Como se financia la tecnologia de seguridad publica en Trinidad y Tobago?",
      answer: "El financiamiento proviene del Ministerio de Seguridad Nacional (MSN), el presupuesto del TTPS, y los ingresos energeticos del Heritage and Stabilisation Fund. Las adquisiciones se rigen por la Central Tenders Board (CTB) Ordinance y la Office of Procurement Regulation (OPR) bajo la Public Procurement and Disposal of Public Property Act 2015. El BID, la CBSI del gobierno de EE.UU. y CARICOM IMPACS contribuyen al financiamiento de programas de seguridad regional.",
    },
    {
      question: "¿Que papel juega la industria energetica en la estrategia de seguridad?",
      answer: "Trinidad y Tobago es el mayor productor de petroleo y gas del Caribe, con la industria energetica representando aproximadamente el 30-40% del PIB y mas del 80% de las exportaciones. La Point Lisas Industrial Estate alberga petroquimicas que producen metanol (2do exportador mundial) y amoniaco (mayor exportador mundial). Atlantic LNG en Point Fortin opera 4 trenes de GNL. La proteccion de infraestructura energetica critica — plataformas offshore, terminales de GNL, oleoductos y la refineria de Petrotrin en Pointe-a-Pierre — requiere VMS integrado con despacho maritimo y terrestre.",
    },
    {
      question: "¿Puede KabatOne integrarse con la infraestructura de video existente en Trinidad y Tobago?",
      answer: "Si. KabatOne integra cualquier camara ONVIF/RTSP sin reemplazo de hardware. Las redes de CCTV del TTPS en Port of Spain, San Fernando y Chaguanas, las camaras del Puerto de Port of Spain (PATT), la videovigilancia del Aeropuerto Internacional Piarco (POS) y del Aeropuerto A.N.R. Robinson en Tobago (TAB), las camaras de seguridad de Atlantic LNG y Point Lisas, y los sistemas del Judiciary Marshals Service se conectan directamente. Compatible con la infraestructura de fibra de TSTT, Digicel y Flow.",
    },
    {
      question: "¿Cual es la relacion entre Trinidad y Tobago en materia de seguridad?",
      answer: "Trinidad y Tobago es una republica unitaria con dos islas principales. Trinidad (4,768 km2, ~1.35M habitantes) concentra la actividad economica, industrial y la mayoria de la criminalidad. Tobago (300 km2, ~60,000 habitantes) tiene su propia Tobago House of Assembly (THA) con autonomia administrativa limitada y una economia basada en turismo. La Tobago Division del TTPS opera con recursos limitados. El Tobago Emergency Management Agency (TEMA) coordina desastres en la isla. KabatOne conecta ambas islas en una sola plataforma operativa con despacho unificado.",
    },
    {
      question: "¿Como se alinea KabatOne con la legislacion de compras publicas de Trinidad y Tobago?",
      answer: "KabatOne se comercializa a traves de distribuidores e integradores locales conforme a la Public Procurement and Disposal of Public Property Act 2015 y la supervision de la Office of Procurement Regulation (OPR). La arquitectura modular permite licitar por componente (K-Video, K-Dispatch, K-Safety) o como plataforma unificada, adaptandose a los presupuestos del MSN, el TTPS, las corporaciones municipales y la THA de Tobago. Trinidad y Tobago permite la participacion de empresas extranjeras en licitaciones publicas.",
    },
  ] : [
    {
      question: "How does Trinidad and Tobago's emergency response system work?",
      answer: "Trinidad and Tobago operates the 999 system for police emergencies, 990 for fire, and 811 for ambulance. The Trinidad and Tobago Police Service (TTPS, ~7,000 officers) is the primary police force, organized into 9 police divisions. The National Operations Centre (NOC) functions as a coordination center under the Ministry of National Security. KabatOne unifies these separate lines into one integrated CAD that coordinates TTPS, TTDF, TTFS, and health services on a single operational platform.",
    },
    {
      question: "How does Trinidad and Tobago fund public safety technology?",
      answer: "Funding comes from the Ministry of National Security (MSN), the TTPS budget, and energy revenues via the Heritage and Stabilisation Fund. Procurement is governed by the Central Tenders Board (CTB) Ordinance and the Office of Procurement Regulation (OPR) under the Public Procurement and Disposal of Public Property Act 2015. The IDB, the US government Caribbean Basin Security Initiative (CBSI), and CARICOM IMPACS contribute to regional security program funding.",
    },
    {
      question: "What role does the energy industry play in security strategy?",
      answer: "Trinidad and Tobago is the Caribbean's largest oil and gas producer, with the energy industry representing approximately 30-40% of GDP and over 80% of exports. The Point Lisas Industrial Estate houses petrochemical plants producing methanol (2nd largest global exporter) and ammonia (largest global exporter). Atlantic LNG at Point Fortin operates 4 LNG trains. Protecting critical energy infrastructure — offshore platforms, LNG terminals, pipelines, and the Petrotrin refinery at Pointe-a-Pierre — requires integrated VMS with maritime and land-based dispatch.",
    },
    {
      question: "Can KabatOne integrate with existing video infrastructure in Trinidad and Tobago?",
      answer: "Yes. KabatOne integrates any ONVIF/RTSP camera without hardware replacement. TTPS CCTV networks in Port of Spain, San Fernando, and Chaguanas, Port of Port of Spain (PATT) cameras, Piarco International Airport (POS) and A.N.R. Robinson Airport Tobago (TAB) surveillance, Atlantic LNG and Point Lisas security cameras, and Judiciary Marshals Service systems connect directly. Compatible with TSTT, Digicel, and Flow fiber infrastructure.",
    },
    {
      question: "What is the security relationship between Trinidad and Tobago?",
      answer: "Trinidad and Tobago is a unitary republic with two main islands. Trinidad (4,768 km2, ~1.35M residents) concentrates economic, industrial activity, and most crime. Tobago (300 km2, ~60,000 residents) has its own Tobago House of Assembly (THA) with limited administrative autonomy and a tourism-based economy. The Tobago Division of TTPS operates with limited resources. The Tobago Emergency Management Agency (TEMA) coordinates disaster response on the island. KabatOne connects both islands on one operational platform with unified dispatch.",
    },
    {
      question: "How does KabatOne align with Trinidad and Tobago public procurement law?",
      answer: "KabatOne is marketed through local distributors and integrators under the Public Procurement and Disposal of Public Property Act 2015 and Office of Procurement Regulation (OPR) oversight. The modular architecture allows tendering by component (K-Video, K-Dispatch, K-Safety) or as a unified platform, adapting to MSN, TTPS, municipal corporation, and Tobago THA budgets. Trinidad and Tobago allows foreign firm participation in public tenders.",
    },
  ]

  const artSchema = articleSchema(
    es ? 'Software de Seguridad Publica para Municipios y Corporaciones de Trinidad y Tobago' : 'Public Safety Software for Trinidad and Tobago: Government Guide',
    es
      ? 'Software de seguridad publica para municipios, corporaciones y zonas energeticas de Trinidad y Tobago — conectando videovigilancia, despacho de emergencias, GIS y gestion de incidentes en una sola plataforma operativa.'
      : 'Public safety software for Trinidad and Tobago municipalities, corporations, and energy zones — connecting surveillance, emergency dispatch, GIS, and incident management in one unified operational platform.',
    pageUrl,
    '2026-06-24'
  )

  const comparisonRows = es ? [
    { feature: 'Video', fragmented: 'Camaras del TTPS en Port of Spain, San Fernando y Chaguanas, CCTV portuario (PATT), video de Piarco y camaras de seguridad energetica operan en plataformas separadas sin VMS compartido', unified: 'VMS unificado, todas las camaras buscables por division policial, zona, fecha y tipo de evento — desde zonas urbanas hasta infraestructura energetica' },
    { feature: 'Despacho de emergencias', fragmented: 'Tres lineas separadas (999/990/811) sin registro comun de incidentes entre TTPS, TTDF, TTFS y servicios medicos', unified: 'Registro unico de incidente que conecta TTPS, TTDF, TTFS, servicios medicos y ODPM en una sola plataforma CAD' },
    { feature: 'Seguridad energetica', fragmented: 'Camaras de Atlantic LNG, Point Lisas, plataformas offshore y la refineria de Pointe-a-Pierre desconectadas de la red policial del TTPS', unified: 'Video de infraestructura energetica integrado con despacho policial y guardacostas en un solo entorno operativo' },
    { feature: 'Conexion Trinidad-Tobago', fragmented: 'Division de Tobago del TTPS y TEMA operan con sistemas separados sin visibilidad compartida desde Port of Spain', unified: 'Plataforma unica que conecta ambas islas con GIS, video y despacho compartido entre Trinidad y Tobago' },
    { feature: 'Reportes para el MSN', fragmented: 'Exportacion manual de datos incompletos por division policial y por institucion', unified: 'KPIs automatizados de tiempos de respuesta, incidentes por division y cobertura de camaras' },
    { feature: 'Dependencia tecnologica', fragmented: 'Hardware propietario por proveedor y por institucion (TTPS, puertos, aeropuertos, energia)', unified: 'ONVIF/RTSP, cualquier marca de camara ya instalada' },
  ] : [
    { feature: 'Video', fragmented: 'TTPS cameras in Port of Spain, San Fernando, and Chaguanas, port CCTV (PATT), Piarco video, and energy security cameras on separate platforms with no shared VMS', unified: 'Unified VMS, all cameras searchable by police division, zone, date, and event type — from urban zones to energy infrastructure' },
    { feature: 'Emergency dispatch', fragmented: 'Three separate lines (999/990/811) with no shared incident record between TTPS, TTDF, TTFS, and medical services', unified: 'Single incident record bridging TTPS, TTDF, TTFS, medical services, and ODPM on one CAD platform' },
    { feature: 'Energy security', fragmented: 'Atlantic LNG, Point Lisas, offshore platform, and Pointe-a-Pierre refinery cameras disconnected from TTPS police network', unified: 'Energy infrastructure video integrated with police and coast guard dispatch in one operational environment' },
    { feature: 'Trinidad-Tobago link', fragmented: 'TTPS Tobago Division and TEMA operate separate systems with no shared visibility from Port of Spain', unified: 'Single platform connecting both islands with shared GIS, video, and dispatch between Trinidad and Tobago' },
    { feature: 'MSN reporting', fragmented: 'Manual export of incomplete data per police division and per institution', unified: 'Automated KPIs for response times, division-level incident counts, and camera coverage' },
    { feature: 'Technology lock-in', fragmented: 'Proprietary hardware per vendor and per institution (TTPS, ports, airports, energy)', unified: 'ONVIF/RTSP, any camera brand already installed' },
  ]

  const workflowSteps = es ? [
    { n: '01', title: 'Video unificado', text: 'Todas las camaras — redes de CCTV del TTPS en Port of Spain, San Fernando, Chaguanas y Arima, video del Puerto de Port of Spain (PATT), vigilancia de Piarco International Airport (POS) y A.N.R. Robinson Airport (TAB) en Tobago, camaras de seguridad de Atlantic LNG en Point Fortin, petroquimicas de Point Lisas, y plataformas offshore — en una sola interfaz VMS con busqueda por division policial, zona, fecha y tipo de evento.' },
    { n: '02', title: 'Centro de despacho unificado', text: 'Recepcion de emergencias (999/990/811), clasificacion de incidentes y asignacion de unidades desde una sola plataforma CAD. Registro unico de incidente compartido entre TTPS, TTDF (incluyendo Trinidad and Tobago Regiment, Coast Guard y Air Guard), TTFS, servicios medicos y ODPM para respuesta ante desastres naturales.' },
    { n: '03', title: 'GIS en tiempo real', text: 'Posiciones del TTPS, TTDF, TTFS, Coast Guard y ODPM en un solo mapa operativo compartido. Vista conjunta entre las 9 divisiones policiales de Trinidad, la Division de Tobago, zonas energeticas, puertos, aeropuertos y corredores maritimos. Cobertura de la zona economica exclusiva (EEZ) maritima incluyendo rutas de narcotrafico Venezuela-Trinidad.' },
    { n: '04', title: 'Fusion de sensores y alertas', text: 'Lectores LPR en las autopistas principales (Churchill Roosevelt Highway, Solomon Hochoy Highway, Uriah Butler Highway), sensores de intrusion en Atlantic LNG y Point Lisas, escaner no intrusivo en terminales de carga del Puerto de Port of Spain, alertas del ODPM ante huracanes y tormentas tropicales, y botones de panico unificados con video en el mismo entorno operativo.' },
    { n: '05', title: 'Reportes para el MSN y el ODPM', text: 'KPIs automatizados de tiempos de respuesta, incidentes por division policial, cobertura de camaras, metricas de seguridad energetica y conectividad Trinidad-Tobago — sin exportacion manual — para reportes del Ministerio de Seguridad Nacional, el ODPM y organismos regionales como CARICOM IMPACS y la CBSI.' },
  ] : [
    { n: '01', title: 'Unified video', text: 'All cameras — TTPS CCTV networks in Port of Spain, San Fernando, Chaguanas, and Arima, Port of Port of Spain (PATT) video, Piarco International Airport (POS) and A.N.R. Robinson Airport (TAB) Tobago surveillance, Atlantic LNG Point Fortin security cameras, Point Lisas petrochemical cameras, and offshore platform systems — on one VMS interface with search by police division, zone, date, and event type.' },
    { n: '02', title: 'Unified dispatch center', text: 'Emergency intake (999/990/811), incident classification, and unit assignment from one CAD platform. Shared incident record bridging TTPS, TTDF (including Trinidad and Tobago Regiment, Coast Guard, and Air Guard), TTFS, medical services, and ODPM for natural disaster response.' },
    { n: '03', title: 'Real-time GIS', text: 'Positions of TTPS, TTDF, TTFS, Coast Guard, and ODPM on one shared operational map — joint view across all 9 Trinidad police divisions, Tobago Division, energy zones, ports, airports, and maritime corridors. Maritime EEZ coverage including Venezuela-Trinidad narco-trafficking routes.' },
    { n: '04', title: 'Sensor and alert fusion', text: 'LPR readers on major highways (Churchill Roosevelt Highway, Solomon Hochoy Highway, Uriah Butler Highway), Atlantic LNG and Point Lisas intrusion sensors, non-intrusive inspection scanners at Port of Port of Spain cargo terminals, ODPM hurricane and tropical storm alerts, and panic buttons unified with video in the same operational environment.' },
    { n: '05', title: 'MSN and ODPM reporting', text: 'Automated KPIs for response times, police division-level incident counts, camera coverage, energy security metrics, and Trinidad-Tobago connectivity — no manual export — for Ministry of National Security, ODPM, and regional body (CARICOM IMPACS, CBSI) reporting.' },
  ]

  const challengeCards = es ? [
    { icon: '🛢️', title: 'Infraestructura energetica critica sin VMS unificado', text: 'Trinidad y Tobago es el mayor productor de petroleo y gas del Caribe, con el sector energetico representando 30-40% del PIB y mas del 80% de las exportaciones. Atlantic LNG opera 4 trenes de GNL en Point Fortin. Point Lisas Industrial Estate alberga petroquimicas que producen metanol (2do exportador mundial) y amoniaco (mayor exportador mundial). Las plataformas offshore, terminales de GNL, oleoductos y la refineria de Petrotrin en Pointe-a-Pierre operan con sistemas de seguridad desconectados de la red policial del TTPS.' },
    { icon: '🔫', title: 'Violencia de pandillas y narcotrafico', text: 'Trinidad y Tobago enfrenta tasas de homicidio entre las mas altas del Caribe — 603 homicidios en 2022 (tasa ~43 por 100,000). Las pandillas controlan territorios en Laventille, Morvant, Enterprise y Sea Lots (Port of Spain), Beetham Gardens y partes de San Fernando. La proximidad a Venezuela (11 km en el punto mas cercano) convierte al pais en corredor de narcotrafico, trafico de armas y migracion irregular. Se estima que mas de 40 "pirogues" cruzan semanalmente. La coordinacion TTPS-TTDF-Coast Guard requiere una plataforma que integre GIS, video y despacho en tiempo real.' },
    { icon: '🌊', title: 'Corredor maritimo y seguridad costera', text: 'Trinidad y Tobago se ubica en la confluencia del Mar Caribe y el Oceano Atlantico, con una zona economica exclusiva significativa. La Trinidad and Tobago Coast Guard patrulla aguas entre Venezuela, Granada y Barbados. El trafico maritimo ilegal (drogas, armas, migrantes venezolanos) utiliza la costa sur y este de Trinidad. El Puerto de Port of Spain (PATT) y Point Lisas manejan la mayoria del comercio. Sin un VMS maritimo integrado con despacho terrestre, la deteccion y respuesta a incidentes en el mar depende de comunicaciones por radio fragmentadas.' },
    { icon: '🏝️', title: 'Dos islas, una nacion: brecha operativa Trinidad-Tobago', text: 'Trinidad (4,768 km2, ~1.35M habitantes) concentra la actividad economica y policial. Tobago (300 km2, ~60,000 habitantes) depende del turismo y tiene la Tobago House of Assembly (THA) con autonomia limitada. La Division de Tobago del TTPS opera con recursos limitados. TEMA coordina emergencias localmente. El ferry Port of Spain-Scarborough y los vuelos POS-TAB son los unicos enlaces regulares. Sin una plataforma unificada, la coordinacion de seguridad entre ambas islas depende de comunicaciones ad hoc.' },
  ] : [
    { icon: '🛢️', title: 'Critical energy infrastructure without unified VMS', text: "Trinidad and Tobago is the Caribbean's largest oil and gas producer, with the energy sector representing 30-40% of GDP and over 80% of exports. Atlantic LNG operates 4 LNG trains at Point Fortin. Point Lisas Industrial Estate houses petrochemical plants producing methanol (2nd largest global exporter) and ammonia (largest global exporter). Offshore platforms, LNG terminals, pipelines, and the Petrotrin refinery at Pointe-a-Pierre operate with security systems disconnected from the TTPS police network." },
    { icon: '🔫', title: 'Gang violence and narco-trafficking', text: "Trinidad and Tobago faces homicide rates among the highest in the Caribbean — 603 murders in 2022 (rate ~43 per 100,000). Gangs control territories in Laventille, Morvant, Enterprise, and Sea Lots (Port of Spain), Beetham Gardens, and parts of San Fernando. Proximity to Venezuela (11 km at closest point) makes the country a corridor for drug trafficking, arms smuggling, and irregular migration. An estimated 40+ pirogues cross weekly. TTPS-TTDF-Coast Guard coordination requires a platform integrating GIS, video, and dispatch in real time." },
    { icon: '🌊', title: 'Maritime corridor and coastal security', text: "Trinidad and Tobago sits at the confluence of the Caribbean Sea and Atlantic Ocean, with a significant exclusive economic zone. The Trinidad and Tobago Coast Guard patrols waters between Venezuela, Grenada, and Barbados. Illegal maritime traffic (drugs, weapons, Venezuelan migrants) uses Trinidad's south and east coasts. The Port of Port of Spain (PATT) and Point Lisas handle most trade. Without integrated maritime VMS with land-based dispatch, detection and response to incidents at sea relies on fragmented radio communications." },
    { icon: '🏝️', title: 'Two islands, one nation: Trinidad-Tobago operational gap', text: "Trinidad (4,768 km2, ~1.35M residents) concentrates economic and policing activity. Tobago (300 km2, ~60,000 residents) depends on tourism and has the Tobago House of Assembly (THA) with limited autonomy. The TTPS Tobago Division operates with limited resources. TEMA coordinates local emergencies. The Port of Spain-Scarborough ferry and POS-TAB flights are the only regular links. Without a unified platform, security coordination between both islands relies on ad hoc communications." },
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
            {es ? 'Software de Seguridad Publica — Trinidad y Tobago' : 'Public Safety Software — Trinidad and Tobago'}
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
              ? 'Software de Seguridad Publica para Trinidad y Tobago'
              : 'Public Safety Software for Trinidad and Tobago'}
          </h1>
          <p style={{
            fontSize: '18px', fontWeight: 300, color: 'var(--dim)',
            lineHeight: 1.75, maxWidth: '720px',
          }}>
            {es
              ? 'Guia para municipios, corporaciones y zonas energeticas de Trinidad y Tobago que evaluan plataformas unificadas de seguridad publica: videovigilancia, despacho de emergencias, GIS y gestion de incidentes.'
              : 'Guide for Trinidad and Tobago municipalities, corporations, and energy zones evaluating unified public safety platforms — video surveillance, emergency dispatch, GIS, and incident management.'}
          </p>
        </section>

        {/* -- SECTION: Public Safety Structure -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? 'La Estructura de Seguridad Publica en Trinidad y Tobago'
                : "Trinidad and Tobago's Public Safety Structure"}
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Trinidad y Tobago es una republica parlamentaria dividida en 14 corporaciones municipales y regionales en Trinidad, mas la Tobago House of Assembly (THA). El Trinidad and Tobago Police Service (TTPS, ~7,000 oficiales) es la fuerza policial principal, organizado en 9 divisiones policiales bajo la Ley de Policia (Police Service Act). La Trinidad and Tobago Defence Force (TTDF, ~4,000 efectivos) incluye el Trinidad and Tobago Regiment, la Coast Guard (~1,000 efectivos con patrulleras y lanchas rapidas) y el Air Guard. La TTDF apoya operaciones de seguridad interna, anti-narcoticos, seguridad fronteriza maritima y proteccion de infraestructura energetica. El Trinidad and Tobago Fire Service (TTFS) atiende incendios y rescate. La Office of Disaster Preparedness and Management (ODPM) coordina la respuesta ante huracanes, inundaciones y terremotos. La National Operations Centre (NOC) funciona como centro de coordinacion bajo el Ministerio de Seguridad Nacional (MSN).'
                : "Trinidad and Tobago is a parliamentary republic divided into 14 municipal and regional corporations in Trinidad, plus the Tobago House of Assembly (THA). The Trinidad and Tobago Police Service (TTPS, ~7,000 officers) is the primary police force, organized into 9 police divisions under the Police Service Act. The Trinidad and Tobago Defence Force (TTDF, ~4,000 personnel) includes the Trinidad and Tobago Regiment, the Coast Guard (~1,000 personnel with patrol vessels and fast interceptors), and the Air Guard. The TTDF supports internal security operations, anti-narcotics, maritime border security, and energy infrastructure protection. The Trinidad and Tobago Fire Service (TTFS) handles fire and rescue. The Office of Disaster Preparedness and Management (ODPM) coordinates hurricane, flood, and earthquake response. The National Operations Centre (NOC) functions as a coordination center under the Ministry of National Security (MSN)."}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Trinidad y Tobago protege aproximadamente 1.4 millones de ciudadanos en 5,131 km2. Port of Spain (capital, ~37,000 habitantes, area metropolitana ~600,000 con San Juan-Laventille, Diego Martin y Chaguanas) es el centro politico y financiero. San Fernando (~50,000) es la segunda ciudad. Chaguanas (~84,000) es la ciudad de mas rapido crecimiento. Trinidad (4,768 km2) concentra la actividad economica y la mayoria de la criminalidad. Tobago (300 km2, ~60,000 habitantes) depende del turismo. La industria energetica representa 30-40% del PIB: petroleo, gas natural, GNL (Atlantic LNG, 4 trenes en Point Fortin), petroquimicos (Point Lisas — metanol 2do exportador mundial, amoniaco mayor exportador mundial), y plataformas offshore. El Puerto de Port of Spain (PATT) y Point Lisas manejan el comercio exterior. El Aeropuerto Piarco (POS) sirve a Trinidad y el A.N.R. Robinson (TAB) a Tobago. Las emergencias se atienden via tres lineas separadas: 999 (policia), 990 (bomberos) y 811 (ambulancia). Las adquisiciones se rigen por la Public Procurement and Disposal of Public Property Act 2015 y la Office of Procurement Regulation (OPR). La moneda es el dolar de Trinidad y Tobago (TTD), administrado por el Central Bank. Trinidad y Tobago es miembro de CARICOM, la Commonwealth y la OEA.'
                : "Trinidad and Tobago protects approximately 1.4 million citizens across 5,131 km2. Port of Spain (capital, ~37,000 residents, metro area ~600,000 with San Juan-Laventille, Diego Martin, and Chaguanas) is the political and financial center. San Fernando (~50,000) is the second city. Chaguanas (~84,000) is the fastest-growing city. Trinidad (4,768 km2) concentrates economic activity and most crime. Tobago (300 km2, ~60,000 residents) depends on tourism. The energy industry represents 30-40% of GDP: oil, natural gas, LNG (Atlantic LNG, 4 trains at Point Fortin), petrochemicals (Point Lisas — methanol 2nd largest global exporter, ammonia largest global exporter), and offshore platforms. The Port of Port of Spain (PATT) and Point Lisas handle foreign trade. Piarco Airport (POS) serves Trinidad and A.N.R. Robinson (TAB) serves Tobago. Emergencies are handled via three separate lines: 999 (police), 990 (fire), and 811 (ambulance). Procurement is governed by the Public Procurement and Disposal of Public Property Act 2015 and the Office of Procurement Regulation (OPR). The currency is the Trinidad and Tobago dollar (TTD), managed by the Central Bank. Trinidad and Tobago is a member of CARICOM, the Commonwealth, and the OAS."}
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
                ? 'Desafios Clave para Municipios y Corporaciones de Trinidad y Tobago'
                : 'Key Challenges for Trinidad and Tobago Municipalities and Corporations'}
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
                ? '¿Como Funciona una Plataforma Unificada para Trinidad y Tobago?'
                : 'How a Unified Platform Works for Trinidad and Tobago'}
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
                ? 'Fragmentado vs Plataforma Unificada para Instituciones de Trinidad y Tobago'
                : 'Fragmented vs Unified Platform for Trinidad and Tobago Institutions'}
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
                  { href: '/resources/public-safety-software-jamaica', label: es ? 'Seguridad Publica — Jamaica' : 'Public Safety Software — Jamaica' },
                  { href: '/resources/public-safety-software-dominican-republic', label: es ? 'Seguridad Publica — Republica Dominicana' : 'Public Safety Software — Dominican Republic' },
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
                ? 'Preguntas Sobre Software de Seguridad Publica en Trinidad y Tobago'
                : 'Questions About Public Safety Software in Trinidad and Tobago'}
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
                  href: '/resources/public-safety-software-jamaica',
                  en: 'Public Safety Software for Jamaica',
                  es: 'Software de Seguridad Publica para Jamaica',
                },
                {
                  href: '/resources/public-safety-software-dominican-republic',
                  en: 'Public Safety Software for the Dominican Republic',
                  es: 'Software de Seguridad Publica para la Republica Dominicana',
                },
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
                  href: '/resources/cad-dispatch-software-latin-america',
                  en: 'CAD Dispatch Software for Latin America',
                  es: 'Software CAD de Despacho para America Latina',
                },
                {
                  href: '/resources/public-safety-software-united-kingdom',
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
          h2={es ? 'Transforma la Seguridad Publica en Tu Municipio o Corporacion de Trinidad y Tobago' : 'Transform Public Safety in Your Trinidad and Tobago Municipality or Corporation'}
          subtitle={es
            ? 'Conoce como KabatOne integra videovigilancia, despacho de emergencias, GIS y gestion de incidentes en una sola plataforma operativa para instituciones de Trinidad y Tobago — desde la proteccion de infraestructura energetica hasta la coordinacion entre ambas islas.'
            : 'See how KabatOne unifies video surveillance, emergency dispatch, GIS, and incident management into one operational platform for Trinidad and Tobago institutions — from energy infrastructure protection to cross-island coordination.'}
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
