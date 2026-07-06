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
  return generatePageMetadata('publicSafetySoftwarePuertoRico', locale)
}

export default async function PublicSafetySoftwarePuertoRicoPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-puerto-rico/`
    : `${baseUrl}/resources/public-safety-software-puerto-rico/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Publica — Puerto Rico' : 'Public Safety Software — Puerto Rico', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: "¿Como funciona el sistema 9-1-1 en Puerto Rico?",
      answer: "Puerto Rico opera el Sistema 9-1-1 a traves del Negociado de Telecomunicaciones (NETEL), que recibe aproximadamente 3 millones de llamadas al ano. Las llamadas se enrutan a 10 PSAPs (Public Safety Answering Points) que coordinan el despacho al Negociado de la Policia de Puerto Rico (NPPR, ~12,000 oficiales), el Cuerpo de Bomberos (~2,800 bomberos) y el Sistema de Emergencias Medicas (SEM). KabatOne unifica estos PSAPs en un CAD integrado con geolocalizacion que coordina todas las agencias desde una sola plataforma operativa.",
    },
    {
      question: "¿Como se financia la tecnologia de seguridad publica en Puerto Rico?",
      answer: "Como territorio de EE.UU., Puerto Rico accede a fondos federales incluyendo FEMA (Hazard Mitigation Grant Program, $20B+ post-Maria), DHS Homeland Security Grant Program (HSGP), COPS Office, y Byrne JAG grants. La Junta de Supervision y Administracion Financiera (FOMB/PROMESA) supervisa el gasto fiscal. Las adquisiciones se rigen por la Ley de Compras 73-2019 y la Administracion de Servicios Generales (ASG). Adicionalmente, el CDBG-DR (Community Development Block Grant - Disaster Recovery) provee fondos significativos para infraestructura de resiliencia.",
    },
    {
      question: "¿Por que la resiliencia ante huracanes es critica para la seguridad publica?",
      answer: "El Huracan Maria (2017, Cat. 4) causo ~3,000 muertes, $90B+ en danos, y un apagon total de 11 meses — el mas largo en la historia de EE.UU. El Huracan Fiona (2022) derribo nuevamente la red electrica completa. LUMA Energy opera la transmision/distribucion desde 2021. PREPA mantiene la generacion. Puerto Rico tiene un mandato de 100% energia renovable para 2050 (Ley 17-2019). KabatOne opera con capacidades offline/edge computing y respaldo satelital para mantener operaciones durante apagones prolongados y eventos climaticos extremos.",
    },
    {
      question: "¿Puede KabatOne integrarse con la infraestructura de video existente en Puerto Rico?",
      answer: "Si. KabatOne integra cualquier camara ONVIF/RTSP sin reemplazo de hardware. Las redes de CCTV del NPPR en San Juan, Bayamon, Carolina y Ponce, las camaras del Aeropuerto Internacional Luis Munoz Marin (SJU, 9M+ pasajeros/ano), la videovigilancia del Puerto de San Juan (2do mas activo del Caribe en cruceros, 1.5M+ pasajeros), los sistemas de LUMA Energy en subestaciones criticas, y las camaras de la Autoridad de Carreteras y Transportacion (ACT) se conectan directamente. Compatible con la infraestructura de fibra de Claro, Liberty y T-Mobile.",
    },
    {
      question: "¿Como se estructura la gobernanza municipal en Puerto Rico?",
      answer: "Puerto Rico tiene 78 municipios, cada uno gobernado por un alcalde electo con autonomia administrativa. Los municipios mas grandes — San Juan (320K+), Bayamon (185K+), Carolina (150K+), Ponce (130K+) — operan policias municipales propias ademas del NPPR estatal. La Asociacion de Alcaldes y el Centro de Recaudacion de Ingresos Municipales (CRIM) coordinan servicios. KabatOne se adapta a la estructura municipal con despliegues que integran policia municipal + NPPR + bomberos + SEM en una sola plataforma, escalable desde municipios rurales hasta areas metropolitanas.",
    },
    {
      question: "¿Como se alinea KabatOne con las regulaciones de compras de Puerto Rico?",
      answer: "KabatOne se comercializa a traves de distribuidores e integradores locales conforme a la Ley de Compras 73-2019 y la supervision de la Administracion de Servicios Generales (ASG). Como territorio de EE.UU., Puerto Rico tambien accede a contratos GSA Schedule y programas federales de adquisicion. La arquitectura modular permite licitar por componente (K-Video, K-Dispatch, K-Safety) o como plataforma unificada, adaptandose a presupuestos municipales, estatales y federales. El cumplimiento con CJIS Security Policy y NIST frameworks es nativo.",
    },
  ] : [
    {
      question: "How does Puerto Rico's 9-1-1 system work?",
      answer: "Puerto Rico operates the 9-1-1 System through the Negociado de Telecomunicaciones (NETEL), handling approximately 3 million calls annually. Calls route to 10 PSAPs (Public Safety Answering Points) that coordinate dispatch to the Negociado de la Policia de Puerto Rico (NPPR, ~12,000 officers), Cuerpo de Bomberos (~2,800 firefighters), and Sistema de Emergencias Medicas (SEM). KabatOne unifies these PSAPs into one integrated CAD with geolocation that coordinates all agencies from a single operational platform.",
    },
    {
      question: "How is public safety technology funded in Puerto Rico?",
      answer: "As a US territory, Puerto Rico accesses federal funding including FEMA (Hazard Mitigation Grant Program, $20B+ post-Maria), DHS Homeland Security Grant Program (HSGP), COPS Office, and Byrne JAG grants. The Financial Oversight and Management Board (FOMB/PROMESA) supervises fiscal spending. Procurement follows Ley de Compras 73-2019 and the Administracion de Servicios Generales (ASG). Additionally, CDBG-DR (Community Development Block Grant - Disaster Recovery) provides significant resilience infrastructure funding.",
    },
    {
      question: "Why is hurricane resilience critical for public safety?",
      answer: "Hurricane Maria (2017, Cat. 4) caused ~3,000 deaths, $90B+ in damages, and an 11-month total blackout — the longest in US history. Hurricane Fiona (2022) again knocked out the entire power grid. LUMA Energy operates transmission/distribution since 2021. PREPA maintains generation. Puerto Rico has a 100% renewable energy mandate by 2050 (Act 17-2019). KabatOne operates with offline/edge computing capabilities and satellite backup to maintain operations during prolonged blackouts and extreme weather events.",
    },
    {
      question: "Can KabatOne integrate with existing video infrastructure in Puerto Rico?",
      answer: "Yes. KabatOne integrates any ONVIF/RTSP camera without hardware replacement. NPPR CCTV networks in San Juan, Bayamon, Carolina, and Ponce, Luis Munoz Marin International Airport (SJU, 9M+ passengers/year) cameras, Port of San Juan surveillance (2nd busiest Caribbean cruise port, 1.5M+ passengers), LUMA Energy critical substation systems, and Autoridad de Carreteras y Transportacion (ACT) traffic cameras connect directly. Compatible with Claro, Liberty, and T-Mobile fiber infrastructure.",
    },
    {
      question: "How is municipal governance structured in Puerto Rico?",
      answer: "Puerto Rico has 78 municipalities, each governed by an elected mayor with administrative autonomy. The largest — San Juan (320K+), Bayamon (185K+), Carolina (150K+), Ponce (130K+) — operate their own municipal police forces alongside the state-level NPPR. The Asociacion de Alcaldes and Centro de Recaudacion de Ingresos Municipales (CRIM) coordinate services. KabatOne adapts to this municipal structure with deployments integrating municipal police + NPPR + fire + EMS on one platform, scalable from rural municipalities to metro areas.",
    },
    {
      question: "How does KabatOne align with Puerto Rico procurement regulations?",
      answer: "KabatOne is marketed through local distributors and integrators under Ley de Compras 73-2019 and Administracion de Servicios Generales (ASG) oversight. As a US territory, Puerto Rico also accesses GSA Schedule contracts and federal procurement programs. The modular architecture allows tendering by component (K-Video, K-Dispatch, K-Safety) or as a unified platform, adapting to municipal, state, and federal budgets. CJIS Security Policy and NIST framework compliance is native.",
    },
  ]

  const artSchema = articleSchema(
    es ? 'Software de Seguridad Publica para Municipios de Puerto Rico' : 'Public Safety Software for Puerto Rico: Government Guide',
    es
      ? 'Software de seguridad publica para municipios y agencias de Puerto Rico — conectando videovigilancia, despacho de emergencias 9-1-1, GIS y gestion de incidentes en una plataforma resiliente a huracanes.'
      : 'Public safety software for Puerto Rico municipalities and agencies — connecting surveillance, 9-1-1 emergency dispatch, GIS, and incident management in one hurricane-resilient unified platform.',
    pageUrl,
    '2026-06-24'
  )

  const comparisonRows = es ? [
    { feature: 'CAD unificado 9-1-1 (10 PSAPs)', legacy: 'PSAPs aislados', kabatone: 'Plataforma unica multi-PSAP' },
    { feature: 'VMS multi-camara (NPPR + municipal)', legacy: 'Sistemas separados por agencia', kabatone: 'Panel unificado con IA' },
    { feature: 'Resiliencia ante huracanes', legacy: 'Sistemas caen con la red', kabatone: 'Offline/edge + respaldo satelital' },
    { feature: 'Integracion GIS 78 municipios', legacy: 'Mapas estaticos', kabatone: 'GIS dinamico multi-capa' },
    { feature: 'Cumplimiento CJIS/NIST', legacy: 'Variable por vendor', kabatone: 'Nativo de fabrica' },
    { feature: 'Coordinacion FEMA/federal', legacy: 'Reportes manuales', kabatone: 'Datos en tiempo real compartibles' },
    { feature: 'Modulos espanol nativo', legacy: 'Traducciones parciales', kabatone: 'Bilingue nativo ES/EN' },
  ] : [
    { feature: 'Unified 9-1-1 CAD (10 PSAPs)', legacy: 'Isolated PSAPs', kabatone: 'Single multi-PSAP platform' },
    { feature: 'Multi-camera VMS (NPPR + municipal)', legacy: 'Separate systems per agency', kabatone: 'Unified AI-powered dashboard' },
    { feature: 'Hurricane resilience', legacy: 'Systems fail with the grid', kabatone: 'Offline/edge + satellite backup' },
    { feature: 'GIS integration for 78 municipalities', legacy: 'Static maps', kabatone: 'Dynamic multi-layer GIS' },
    { feature: 'CJIS/NIST compliance', legacy: 'Variable by vendor', kabatone: 'Native out-of-box' },
    { feature: 'FEMA/federal coordination', legacy: 'Manual reporting', kabatone: 'Real-time shareable data' },
    { feature: 'Native Spanish modules', legacy: 'Partial translations', kabatone: 'Native bilingual ES/EN' },
  ]

  return (
    <>
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

      <Nav />

      {/* ── Hero ── */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1a4731 100%)', padding: '80px 20px 60px', color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12, color: '#93c5fd' }}>
            {es ? 'Guia de Mercado — Puerto Rico (Territorio EE.UU.)' : 'Market Guide — Puerto Rico (US Territory)'}
          </p>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
            {es
              ? 'Software de Seguridad Publica para Puerto Rico'
              : 'Public Safety Software for Puerto Rico'}
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.92, maxWidth: 720, margin: '0 auto 28px' }}>
            {es
              ? 'Plataforma unificada que conecta 78 municipios, 10 PSAPs del sistema 9-1-1, policia estatal y municipal, bomberos, emergencias medicas y gestion de desastres — con resiliencia nativa ante huracanes y cumplimiento CJIS/NIST.'
              : 'Unified platform connecting 78 municipalities, 10 PSAPs of the 9-1-1 system, state and municipal police, fire departments, EMS, and disaster management — with native hurricane resilience and CJIS/NIST compliance.'}
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/demo" style={{ background: ACCENT, color: '#fff', padding: '13px 30px', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>
              {es ? 'Solicitar Demo' : 'Request Demo'}
            </Link>
            <Link href="/resources" style={{ border: '2px solid rgba(255,255,255,.4)', color: '#fff', padding: '12px 28px', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>
              {es ? 'Todos los Recursos' : 'All Resources'}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Breadcrumb ── */}
      <nav aria-label="breadcrumb" style={{ maxWidth: 900, margin: '0 auto', padding: '14px 20px', fontSize: 13, color: '#64748b' }}>
        <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>{es ? 'Inicio' : 'Home'}</Link>
        {' / '}
        <Link href="/resources" style={{ color: '#64748b', textDecoration: 'none' }}>{es ? 'Recursos' : 'Resources'}</Link>
        {' / '}
        <span style={{ color: '#334155' }}>{es ? 'Puerto Rico' : 'Puerto Rico'}</span>
      </nav>

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px 60px' }}>

        {/* ── US Territory Security Architecture ── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: '#0f172a' }}>
            {es ? 'Arquitectura de Seguridad: Territorio de EE.UU. con Identidad Propia' : 'Security Architecture: US Territory with Distinct Identity'}
          </h2>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: 14 }}>
            {es
              ? 'Puerto Rico es un territorio no incorporado de Estados Unidos con 3.2 millones de habitantes — la mayor poblacion de cualquier territorio estadounidense. Su estructura de seguridad combina agencias federales, estatales y municipales en un marco unico:'
              : 'Puerto Rico is an unincorporated US territory with 3.2 million residents — the largest population of any US territory. Its security structure combines federal, state, and municipal agencies in a unique framework:'}
          </p>
          <ul style={{ lineHeight: 1.8, color: '#334155', paddingLeft: 20 }}>
            <li><strong>{es ? 'Policia estatal' : 'State police'}:</strong> {es ? 'Negociado de la Policia de Puerto Rico (NPPR) — ~12,000 oficiales, 13 areas policiales, sede en Hato Rey. Bajo reforma federal desde 2012 (DOJ consent decree), la mayor reforma policial activa en EE.UU.' : 'Negociado de la Policia de Puerto Rico (NPPR) — ~12,000 officers, 13 police areas, HQ in Hato Rey. Under federal reform since 2012 (DOJ consent decree), the largest active police reform in the US.'}</li>
            <li><strong>{es ? 'Policias municipales' : 'Municipal police'}:</strong> {es ? 'Municipios grandes como San Juan, Bayamon, Carolina, Ponce, Caguas y Guaynabo operan fuerzas policiales municipales propias (~3,000+ oficiales combinados) que complementan al NPPR.' : 'Large municipalities like San Juan, Bayamon, Carolina, Ponce, Caguas, and Guaynabo operate their own municipal police forces (~3,000+ combined officers) complementing the NPPR.'}</li>
            <li><strong>{es ? 'Bomberos' : 'Fire service'}:</strong> {es ? 'Cuerpo de Bomberos de Puerto Rico — ~2,800 bomberos, 95+ estaciones en toda la isla.' : 'Cuerpo de Bomberos de Puerto Rico — ~2,800 firefighters, 95+ stations island-wide.'}</li>
            <li><strong>{es ? 'Emergencias medicas' : 'EMS'}:</strong> {es ? 'Sistema de Emergencias Medicas (SEM) — ambulancias estatales coordinadas con hospitales de trauma (Centro Medico, Hospital HIMA, Auxilio Mutuo).' : 'Sistema de Emergencias Medicas (SEM) — state ambulances coordinated with trauma hospitals (Centro Medico, Hospital HIMA, Auxilio Mutuo).'}</li>
            <li><strong>{es ? 'Gestion de emergencias' : 'Emergency management'}:</strong> {es ? 'Negociado para el Manejo de Emergencias y Administracion de Desastres (NMEAD) — coordina respuesta a huracanes, terremotos y tsunamis; conecta con FEMA Region 2.' : 'Negociado para el Manejo de Emergencias y Administracion de Desastres (NMEAD) — coordinates hurricane, earthquake, and tsunami response; connects with FEMA Region 2.'}</li>
            <li><strong>{es ? 'Presencia federal' : 'Federal presence'}:</strong> {es ? 'FBI San Juan Field Office, DEA Caribbean Division, CBP/ICE, US Coast Guard Sector San Juan (mayor sector del Caribe), US Marshals, ATF, y Fort Buchanan (US Army).' : 'FBI San Juan Field Office, DEA Caribbean Division, CBP/ICE, US Coast Guard Sector San Juan (largest Caribbean sector), US Marshals, ATF, and Fort Buchanan (US Army).'}</li>
          </ul>
        </section>

        {/* ── Hurricane Resilience ── */}
        <section style={{ marginBottom: 48, background: '#fef3c7', borderRadius: 12, padding: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: '#92400e' }}>
            {es ? 'Resiliencia ante Huracanes: La Prioridad #1' : 'Hurricane Resilience: The #1 Priority'}
          </h2>
          <p style={{ lineHeight: 1.7, color: '#78350f', marginBottom: 14 }}>
            {es
              ? 'Puerto Rico se encuentra en la zona mas activa de huracanes del Atlantico. Los eventos recientes han redefinido los requisitos de tecnologia publica:'
              : 'Puerto Rico sits in the most active Atlantic hurricane zone. Recent events have redefined public technology requirements:'}
          </p>
          <ul style={{ lineHeight: 1.8, color: '#78350f', paddingLeft: 20 }}>
            <li><strong>{es ? 'Huracan Maria (Sep 2017)' : 'Hurricane Maria (Sep 2017)'}:</strong> {es ? 'Categoria 4, ~3,000 muertes, $90B+ en danos. Apagon total de 328 dias — el mas largo en la historia de EE.UU. El 95% de las torres de telecomunicaciones cayeron. Los sistemas de despacho y videovigilancia quedaron inoperativos durante meses.' : 'Category 4, ~3,000 deaths, $90B+ in damages. 328-day total blackout — the longest in US history. 95% of telecom towers went down. Dispatch and surveillance systems were inoperable for months.'}</li>
            <li><strong>{es ? 'Huracan Fiona (Sep 2022)' : 'Hurricane Fiona (Sep 2022)'}:</strong> {es ? 'Categoria 1, derribo nuevamente la red electrica completa de la isla. Deslizamientos masivos en la zona sur y oeste. Expuso la fragilidad persistente de la infraestructura.' : 'Category 1, again knocked out the entire island power grid. Massive landslides in the south and west. Exposed persistent infrastructure fragility.'}</li>
            <li><strong>{es ? 'Terremotos 2019-2020' : 'Earthquakes 2019-2020'}:</strong> {es ? 'Enjambre sismico con magnitudes hasta 6.4 en la zona suroeste. Miles de edificios danados, incluyendo escuelas e infraestructura critica.' : 'Seismic swarm with magnitudes up to 6.4 in the southwest zone. Thousands of buildings damaged, including schools and critical infrastructure.'}</li>
          </ul>
          <p style={{ lineHeight: 1.7, color: '#78350f', marginTop: 14 }}>
            {es
              ? 'KabatOne esta disenado para estos escenarios extremos: procesamiento edge/local que opera sin conexion a la nube, respaldo de comunicaciones por satelite Starlink, baterias integradas de 72+ horas, y recuperacion automatica post-evento que restaura operaciones completas al restablecerse la conectividad.'
              : 'KabatOne is designed for these extreme scenarios: edge/local processing that operates without cloud connectivity, Starlink satellite communication backup, 72+ hour integrated battery backup, and automatic post-event recovery that restores full operations when connectivity returns.'}
          </p>
        </section>

        {/* ── Critical Infrastructure ── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: '#0f172a' }}>
            {es ? 'Infraestructura Critica y Desafios Estrategicos' : 'Critical Infrastructure and Strategic Challenges'}
          </h2>

          <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, marginTop: 20, color: '#1e40af' }}>
            {es ? 'Red Electrica en Transicion' : 'Power Grid in Transition'}
          </h3>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: 14 }}>
            {es
              ? 'LUMA Energy opera la transmision y distribucion desde junio 2021 bajo un contrato de 15 anos con la Autoridad de Alianzas Publico-Privadas (AAPP). PREPA mantiene la generacion. Genera Power opera plantas de gas en el sur. La Ley 17-2019 establece un mandato de 100% energia renovable para 2050. Los microgrids y sistemas solares con baterias se expanden rapido — la vigilancia de estos activos distribuidos requiere VMS con analitica de IA y capacidad de operacion autonoma.'
              : 'LUMA Energy operates transmission and distribution since June 2021 under a 15-year contract with the Autoridad de Alianzas Publico-Privadas (AAPP). PREPA maintains generation. Genera Power operates gas plants in the south. Act 17-2019 establishes a 100% renewable energy mandate by 2050. Microgrids and solar+battery systems are expanding fast — surveillance of these distributed assets requires VMS with AI analytics and autonomous operation capability.'}
          </p>

          <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, marginTop: 20, color: '#1e40af' }}>
            {es ? 'Puertos y Aeropuertos' : 'Ports and Airports'}
          </h3>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: 14 }}>
            {es
              ? 'El Aeropuerto Internacional Luis Munoz Marin (SJU) en Carolina maneja 9M+ pasajeros/ano y es operado por Aerostar Airport Holdings (alianza Grupo Aeroportuario del Sureste + Highstar Capital). El Puerto de San Juan es el 2do puerto de cruceros mas activo del Caribe con 1.5M+ pasajeros/ano y un centro logistico vital — el 85% de los bienes de consumo de Puerto Rico llegan por mar. Otros puertos clave incluyen Ponce, Mayaguez y el Puerto de las Americas (hub transbordo Sur). La Ley Jones (1920) requiere que todo envio entre puertos de EE.UU. use barcos con bandera estadounidense, encareciendo la logistica.'
              : 'Luis Munoz Marin International Airport (SJU) in Carolina handles 9M+ passengers/year and is operated by Aerostar Airport Holdings (Grupo Aeroportuario del Sureste + Highstar Capital alliance). The Port of San Juan is the 2nd busiest Caribbean cruise port with 1.5M+ passengers/year and a vital logistics hub — 85% of Puerto Rico consumer goods arrive by sea. Other key ports include Ponce, Mayaguez, and Puerto de las Americas (southern transshipment hub). The Jones Act (1920) requires all shipping between US ports to use US-flagged vessels, increasing logistics costs.'}
          </p>

          <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, marginTop: 20, color: '#1e40af' }}>
            {es ? 'Seguridad y Criminalidad' : 'Security and Crime'}
          </h3>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: 14 }}>
            {es
              ? 'Puerto Rico enfrenta desafios de criminalidad concentrados en areas metropolitanas. La tasa de homicidios es significativamente mayor que el promedio de EE.UU. continental (~15-20 por 100K vs ~6). El narcotrafico — especialmente cocaina desde Sudamerica via el Caribe — alimenta violencia en comunidades como La Perla (Viejo San Juan), parcelas en Bayamon, y sectores de Carolina y Caguas. El HIDTA Caribbean Corridor (High Intensity Drug Trafficking Area) coordina operaciones interagenciales. La reforma policial del NPPR bajo el consent decree del DOJ (monitoreada por un equipo federal desde 2013) busca modernizar las operaciones, la rendicion de cuentas y el uso de la fuerza.'
              : 'Puerto Rico faces crime challenges concentrated in metropolitan areas. The homicide rate is significantly higher than the US mainland average (~15-20 per 100K vs ~6). Drug trafficking — especially cocaine from South America via the Caribbean — fuels violence in communities like La Perla (Old San Juan), parcelas in Bayamon, and sectors of Carolina and Caguas. The HIDTA Caribbean Corridor (High Intensity Drug Trafficking Area) coordinates interagency operations. The NPPR police reform under the DOJ consent decree (monitored by a federal team since 2013) aims to modernize operations, accountability, and use of force.'}
          </p>

          <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, marginTop: 20, color: '#1e40af' }}>
            {es ? 'Infraestructura de Agua' : 'Water Infrastructure'}
          </h3>
          <p style={{ lineHeight: 1.7, color: '#334155' }}>
            {es
              ? 'La Autoridad de Acueductos y Alcantarillados (AAA/PRASA) opera el sistema de agua potable y aguas residuales para 97% de la poblacion — el mayor sistema de agua en EE.UU. bajo una sola entidad. El sistema incluye 115+ plantas de tratamiento, 170+ embalses y presas, y miles de km de tuberias envejecidas. Las perdidas de agua no contabilizada superan el 60% (vs ~15% promedio en EE.UU.). La proteccion de esta infraestructura critica requiere VMS, sensores IoT y despacho coordinado.'
              : 'The Autoridad de Acueductos y Alcantarillados (AAA/PRASA) operates the potable water and wastewater system for 97% of the population — the largest water system in the US under a single entity. The system includes 115+ treatment plants, 170+ reservoirs and dams, and thousands of km of aging pipes. Non-revenue water losses exceed 60% (vs ~15% US average). Protecting this critical infrastructure requires VMS, IoT sensors, and coordinated dispatch.'}
          </p>
        </section>

        {/* ── 78 Municipalities ── */}
        <section style={{ marginBottom: 48, background: '#f0fdf4', borderRadius: 12, padding: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: '#166534' }}>
            {es ? '78 Municipios: Modelo de Despliegue Escalable' : '78 Municipalities: Scalable Deployment Model'}
          </h2>
          <p style={{ lineHeight: 1.7, color: '#15803d', marginBottom: 14 }}>
            {es
              ? 'Puerto Rico tiene una estructura municipal unica — no existen condados. Los 78 municipios son la unidad administrativa basica bajo el gobierno estatal (Commonwealth). Cada municipio tiene un alcalde electo y una legislatura municipal. Los principales centros urbanos:'
              : 'Puerto Rico has a unique municipal structure — no counties exist. The 78 municipalities are the basic administrative unit under the Commonwealth government. Each municipality has an elected mayor and municipal legislature. Key urban centers:'}
          </p>
          <ul style={{ lineHeight: 1.8, color: '#15803d', paddingLeft: 20 }}>
            <li><strong>San Juan:</strong> {es ? 'Capital, 320K+ hab., Policia Municipal de San Juan (~2,000 oficiales), Centro Medico principal, distrito financiero de Hato Rey, Viejo San Juan (turismo + cruceros), Condado/Isla Verde (hoteleria)' : 'Capital, 320K+ pop., Policia Municipal de San Juan (~2,000 officers), main Centro Medico, Hato Rey financial district, Old San Juan (tourism + cruise), Condado/Isla Verde (hotels)'}</li>
            <li><strong>Bayamon:</strong> {es ? '185K+ hab., 2do municipio mas grande, zona industrial y comercial, Policia Municipal propia' : '185K+ pop., 2nd largest municipality, industrial and commercial zone, own Municipal Police'}</li>
            <li><strong>Carolina:</strong> {es ? '150K+ hab., sede del aeropuerto SJU, zona hotelera de Isla Verde, Policia Municipal propia' : '150K+ pop., SJU airport location, Isla Verde hotel zone, own Municipal Police'}</li>
            <li><strong>Ponce:</strong> {es ? '130K+ hab., "La Perla del Sur", 2da ciudad mas importante, puerto y zona industrial, Policia Municipal propia' : '130K+ pop., "La Perla del Sur", 2nd most important city, port and industrial zone, own Municipal Police'}</li>
            <li><strong>Caguas:</strong> {es ? '130K+ hab., centro del valle interior, hub comercial y educativo' : '130K+ pop., central valley interior, commercial and education hub'}</li>
          </ul>
          <p style={{ lineHeight: 1.7, color: '#15803d', marginTop: 14 }}>
            {es
              ? 'KabatOne se despliega a nivel municipal con un modelo hub-and-spoke: municipios ancla (San Juan, Ponce, Mayaguez, Arecibo) actuan como centros regionales que conectan municipios adyacentes mas pequenos. La plataforma escala desde un municipio rural de 5,000 habitantes hasta el area metropolitana de San Juan (1M+).'
              : 'KabatOne deploys at the municipal level with a hub-and-spoke model: anchor municipalities (San Juan, Ponce, Mayaguez, Arecibo) act as regional centers connecting smaller adjacent municipalities. The platform scales from a rural municipality of 5,000 residents to the San Juan metropolitan area (1M+).'}
          </p>
        </section>

        {/* ── Comparison Table ── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: '#0f172a' }}>
            {es ? 'KabatOne vs. Soluciones Fragmentadas' : 'KabatOne vs. Fragmented Solutions'}
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: '#f8fafc' }}>
                  <th style={{ padding: '10px 12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', color: '#475569' }}>{es ? 'Capacidad' : 'Capability'}</th>
                  <th style={{ padding: '10px 12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', color: '#475569' }}>{es ? 'Sistemas Tradicionales' : 'Legacy Systems'}</th>
                  <th style={{ padding: '10px 12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', color: ACCENT }}>{es ? 'KabatOne' : 'KabatOne'}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafc' }}>
                    <td style={{ padding: '10px 12px', borderBottom: '1px solid #e2e8f0', fontWeight: 600, color: '#1e293b' }}>{row.feature}</td>
                    <td style={{ padding: '10px 12px', borderBottom: '1px solid #e2e8f0', color: '#64748b' }}>{row.legacy}</td>
                    <td style={{ padding: '10px 12px', borderBottom: '1px solid #e2e8f0', color: '#059669', fontWeight: 500 }}>{row.kabatone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── FEMA & Federal Funding ── */}
        <section style={{ marginBottom: 48, background: '#eff6ff', borderRadius: 12, padding: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: '#1e40af' }}>
            {es ? 'Fondos Federales y FEMA: Oportunidad Unica' : 'Federal Funding and FEMA: Unique Opportunity'}
          </h2>
          <p style={{ lineHeight: 1.7, color: '#1e3a5f', marginBottom: 14 }}>
            {es
              ? 'Puerto Rico tiene acceso a la mayor cantidad de fondos federales de recuperacion en la historia de EE.UU., creando una ventana de inversion sin precedentes en tecnologia de seguridad publica:'
              : 'Puerto Rico has access to the largest federal recovery funding in US history, creating an unprecedented investment window for public safety technology:'}
          </p>
          <ul style={{ lineHeight: 1.8, color: '#1e3a5f', paddingLeft: 20 }}>
            <li><strong>FEMA Hazard Mitigation:</strong> {es ? '$20B+ asignados post-Maria para mitigacion y resiliencia, incluyendo tecnologia de primera respuesta' : '$20B+ allocated post-Maria for mitigation and resilience, including first-responder technology'}</li>
            <li><strong>CDBG-DR:</strong> {es ? '$20B+ del HUD para recuperacion de desastres — incluye infraestructura de comunicaciones y centros de operaciones de emergencia' : '$20B+ from HUD for disaster recovery — includes communications infrastructure and emergency operations centers'}</li>
            <li><strong>DHS HSGP:</strong> {es ? 'Homeland Security Grant Program — financiamiento anual para capacidades de primera respuesta, interoperabilidad y ciberseguridad' : 'Homeland Security Grant Program — annual funding for first-responder capabilities, interoperability, and cybersecurity'}</li>
            <li><strong>COPS Office:</strong> {es ? 'Subvenciones para tecnologia policial y modernizacion de operaciones, alineadas con la reforma del consent decree' : 'Grants for police technology and operations modernization, aligned with consent decree reform'}</li>
            <li><strong>USDA Rural Development:</strong> {es ? 'Financiamiento para municipios rurales con poblaciones menores a 20,000 — infraestructura de telecomunicaciones y seguridad' : 'Funding for rural municipalities with populations under 20,000 — telecommunications and security infrastructure'}</li>
            <li><strong>GSA Schedule:</strong> {es ? 'Como territorio de EE.UU., Puerto Rico puede comprar directamente bajo contratos GSA Schedule, simplificando la adquisicion de tecnologia aprobada federalmente' : 'As a US territory, Puerto Rico can purchase directly under GSA Schedule contracts, simplifying procurement of federally approved technology'}</li>
          </ul>
        </section>

        {/* ── Deployment Scenarios ── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: '#0f172a' }}>
            {es ? 'Escenarios de Despliegue para Puerto Rico' : 'Deployment Scenarios for Puerto Rico'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginTop: 16 }}>
            {[
              {
                title: es ? 'Centro de Operaciones 9-1-1' : '9-1-1 Operations Center',
                desc: es
                  ? 'Unificacion de 10 PSAPs en una plataforma CAD integrada con geolocalizacion en tiempo real, despacho automatizado, y paneles de mando para NPPR, bomberos y SEM. Cumplimiento i3/NG9-1-1.'
                  : 'Unification of 10 PSAPs into one integrated CAD platform with real-time geolocation, automated dispatch, and command dashboards for NPPR, fire, and EMS. i3/NG9-1-1 compliant.',
              },
              {
                title: es ? 'Municipio Turismo-Cruceros' : 'Tourism-Cruise Municipality',
                desc: es
                  ? 'VMS con analitica de multitudes para zonas de alto trafico turistico — Viejo San Juan (2M+ cruceristas), Condado, Isla Verde, Rincon, Fajardo. Integracion con CESAC y CBP para control fronterizo maritimo.'
                  : 'VMS with crowd analytics for high-traffic tourist zones — Old San Juan (2M+ cruise passengers), Condado, Isla Verde, Rincon, Fajardo. Integration with CESAC and CBP for maritime border control.',
              },
              {
                title: es ? 'Resiliencia Post-Desastre' : 'Post-Disaster Resilience',
                desc: es
                  ? 'Operacion offline con edge computing, comunicaciones satelitales Starlink, estaciones portatiles solares para municipios sin electricidad. Restauracion automatica al volver la conectividad. Ideal para NMEAD y centros EOC regionales.'
                  : 'Offline operation with edge computing, Starlink satellite comms, solar-powered portable stations for municipalities without power. Auto-restoration when connectivity returns. Ideal for NMEAD and regional EOC centers.',
              },
              {
                title: es ? 'Proteccion de Infraestructura Critica' : 'Critical Infrastructure Protection',
                desc: es
                  ? 'Vigilancia perimetral con IA para subestaciones de LUMA Energy, plantas de tratamiento de AAA/PRASA, puertos, y Superacueducto. Deteccion de intrusos, sabotaje y anomalias ambientales con despacho automatico.'
                  : 'AI-powered perimeter surveillance for LUMA Energy substations, AAA/PRASA treatment plants, ports, and Superaqueduct. Intrusion detection, sabotage, and environmental anomaly detection with automatic dispatch.',
              },
            ].map((scenario, i) => (
              <div key={i} style={{ border: '1px solid #e2e8f0', borderRadius: 10, padding: 20 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e293b', marginBottom: 8 }}>{scenario.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: '#475569' }}>{scenario.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Cross-Links ── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: '#0f172a' }}>
            {es ? 'Recursos Relacionados' : 'Related Resources'}
          </h2>
          <ul style={{ lineHeight: 2, color: '#334155', paddingLeft: 20 }}>
            <li><Link href="/resources/public-safety-software-united-states" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>{es ? 'Guia de EE.UU. Continental' : 'US Mainland Guide'}</Link> — {es ? 'contexto federal y regulaciones CJIS' : 'federal context and CJIS regulations'}</li>
            <li><Link href="/resources/public-safety-software-dominican-republic" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>{es ? 'Guia de Republica Dominicana' : 'Dominican Republic Guide'}</Link> — {es ? 'vecino caribeno con desafios similares' : 'Caribbean neighbor with similar challenges'}</li>
            <li><Link href="/resources/best-cad-dispatch-software" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>{es ? 'Mejor Software CAD de Despacho' : 'Best CAD Dispatch Software'}</Link> — {es ? 'comparacion de plataformas de despacho de emergencias' : 'emergency dispatch platform comparison'}</li>
            <li><Link href="/resources/what-is-video-management-software" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>{es ? '¿Que es un VMS?' : 'What Is VMS?'}</Link> — {es ? 'introduccion a gestion de video inteligente' : 'introduction to smart video management'}</li>
            <li><Link href="/resources/what-is-emergency-management-software" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>{es ? 'Software de Gestion de Emergencias' : 'Emergency Management Software'}</Link> — {es ? 'plataformas de coordinacion de desastres' : 'disaster coordination platforms'}</li>
            <li><Link href="/k-dispatch" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>K-Dispatch</Link> — {es ? 'despacho inteligente compatible con NG9-1-1' : 'smart dispatch compatible with NG9-1-1'}</li>
          </ul>
        </section>

        {/* ── FAQs ── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 18, color: '#0f172a' }}>
            {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
          </h2>
          {faqs.map((faq, i) => (
            <details key={i} style={{ marginBottom: 12, borderRadius: 8, border: '1px solid #e2e8f0', overflow: 'hidden' }}>
              <summary style={{ padding: '14px 18px', cursor: 'pointer', fontWeight: 600, fontSize: 15, color: '#1e293b', background: '#f8fafc' }}>
                {faq.question}
              </summary>
              <div style={{ padding: '14px 18px', fontSize: 14, lineHeight: 1.7, color: '#475569' }}>
                {faq.answer}
              </div>
            </details>
          ))}
        </section>

        {/* ── CTA ── */}
        <CTASection
          es={es}
          h2={es ? '¿Listo para unificar la seguridad publica de su municipio en Puerto Rico?' : 'Ready to unify public safety in your Puerto Rico municipality?'}
          subtitle={es
            ? 'KabatOne conecta NPPR, policia municipal, bomberos, SEM y gestion de desastres en una sola plataforma resiliente — con cumplimiento CJIS/NIST y acceso a fondos federales.'
            : 'KabatOne connects NPPR, municipal police, fire, EMS, and disaster management on one resilient platform — with CJIS/NIST compliance and federal funding access.'}
        />
      </main>

      <Footer es={es} />
    </>
  )
}
