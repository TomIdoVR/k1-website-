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
  return generatePageMetadata('publicSafetySoftwareBahamas', locale)
}

export default async function PublicSafetySoftwareBahamasPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-bahamas/`
    : `${baseUrl}/resources/public-safety-software-bahamas/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Publica — Bahamas' : 'Public Safety Software — The Bahamas', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: "¿Como funciona el sistema de emergencias de las Bahamas?",
      answer: "Las Bahamas operan el sistema 919 para emergencias policiales y el 911 para bomberos y emergencias medicas (introducido progresivamente). La Royal Bahamas Police Force (RBPF, ~3,500 oficiales) es la fuerza policial nacional, con sede en Nassau y presencia en las principales islas habitadas. La Royal Bahamas Defence Force (RBDF, ~1,800 efectivos) opera la mayor flota de patrulleras del Caribe, cubriendo un territorio maritimo de ~260,000 millas nauticas cuadradas. El National Emergency Management Agency (NEMA) coordina la respuesta a huracanes bajo la Disaster Preparedness and Response Act. KabatOne unifica todas estas agencias en un CAD integrado con capacidad maritima y terrestre.",
    },
    {
      question: "¿Como se financia la tecnologia de seguridad publica en las Bahamas?",
      answer: "El financiamiento proviene del Ministerio de Seguridad Nacional (Ministry of National Security), los presupuestos de RBPF y RBDF, y fondos de recuperacion de desastres. Las adquisiciones se rigen por la Financial Administration and Audit Act y supervisadas por el Treasury Department. El BID (Banco Interamericano de Desarrollo), la Caribbean Development Bank (CDB), USAID/INL y el programa CBSI (Caribbean Basin Security Initiative) del gobierno de EE.UU. financian proyectos de seguridad maritima y fronteriza. Las Bahamas tambien acceden al Green Climate Fund dada su vulnerabilidad climatica extrema.",
    },
    {
      question: "¿Por que la seguridad maritima es la prioridad principal de las Bahamas?",
      answer: "Las Bahamas son un archipielago de 700+ islas y cayos que se extienden sobre 100,000 millas cuadradas de oceano, con solo 30 islas habitadas. El 97% del territorio nacional es agua. La proximidad a Florida (solo 50 millas) convierte a las Bahamas en punto critico de trafico de drogas (cocaina Colombia/Venezuela→EE.UU.), migracion ilegal (Haiti, Cuba), y contrabando maritimo. La RBDF opera bases navales en Nassau (Coral Harbour), Freeport, Inagua, Ragged Island y Exuma. OPBAT (Operation Bahamas, Turks and Caicos) es una operacion conjunta anti-narcoticos permanente con DEA, USCG y fuerzas britanicas. KabatOne integra radar costero, AIS, VMS y drones maritimos en una plataforma de vigilancia unificada.",
    },
    {
      question: "¿Puede KabatOne integrarse con la infraestructura de video existente en las Bahamas?",
      answer: "Si. KabatOne integra cualquier camara ONVIF/RTSP sin reemplazo de hardware. Las redes de CCTV de la RBPF en Nassau (New Providence) y Freeport (Grand Bahama), las camaras del Aeropuerto Internacional Lynden Pindling (NAS, 3.5M+ pasajeros/ano), la videovigilancia del Puerto de Nassau (3.5M+ cruceristas/ano), las camaras de Atlantis Paradise Island y Baha Mar, y los sistemas de seguridad del Freeport Container Port se conectan directamente. Compatible con la infraestructura de fibra de BTC (Bahamas Telecommunications Company), Cable Bahamas/REV, y Aliv.",
    },
    {
      question: "¿Como se estructura la gobernanza territorial de las Bahamas?",
      answer: "Las Bahamas son una monarquia constitucional parlamentaria (Commonwealth) con el Rey Carlos III como jefe de estado. El pais se divide en 32 distritos administrativos, de los cuales New Providence (Nassau, capital, ~280,000 hab. — 70% de la poblacion total) y Grand Bahama (Freeport, ~55,000 hab.) son los principales centros urbanos. Las Family Islands (Out Islands) — Abaco, Eleuthera, Exuma, Long Island, Andros, Cat Island, Inagua — tienen poblaciones pequenas pero extensiones territoriales enormes. La gobernanza local se ejerce a traves de Local Government Councils. KabatOne se adapta a esta dispersion geografica extrema con operacion satelital, edge computing y despacho inter-isla.",
    },
    {
      question: "¿Como se alinea KabatOne con las regulaciones de compras de las Bahamas?",
      answer: "KabatOne se comercializa a traves de distribuidores e integradores locales conforme a la Financial Administration and Audit Act y las directrices del Treasury Department. Las Bahamas tienen compromiso con la transparencia en las adquisiciones publicas. La arquitectura modular permite licitar por componente (K-Video, K-Dispatch, K-Safety) o como plataforma unificada. La Data Protection (Privacy of Personal Information) Act 2003 rige la proteccion de datos, y KabatOne cumple con estos requisitos. El BSD (dolar bahameño) esta a paridad 1:1 con el USD, simplificando la contratacion con proveedores estadounidenses.",
    },
  ] : [
    {
      question: "How does The Bahamas emergency response system work?",
      answer: "The Bahamas operates the 919 system for police emergencies and 911 for fire and medical emergencies (progressively introduced). The Royal Bahamas Police Force (RBPF, ~3,500 officers) is the national police force, headquartered in Nassau with presence on major inhabited islands. The Royal Bahamas Defence Force (RBDF, ~1,800 personnel) operates the largest patrol fleet in the Caribbean, covering a maritime territory of ~260,000 square nautical miles. The National Emergency Management Agency (NEMA) coordinates hurricane response under the Disaster Preparedness and Response Act. KabatOne unifies all these agencies into one integrated CAD with maritime and land-based capability.",
    },
    {
      question: "How is public safety technology funded in The Bahamas?",
      answer: "Funding comes from the Ministry of National Security, RBPF and RBDF budgets, and disaster recovery funds. Procurement follows the Financial Administration and Audit Act under the Treasury Department. The IDB, Caribbean Development Bank (CDB), USAID/INL, and the US government CBSI (Caribbean Basin Security Initiative) fund maritime and border security projects. The Bahamas also accesses the Green Climate Fund given its extreme climate vulnerability.",
    },
    {
      question: "Why is maritime security The Bahamas' top priority?",
      answer: "The Bahamas is an archipelago of 700+ islands and cays spanning 100,000 square miles of ocean, with only 30 inhabited islands. 97% of national territory is water. Proximity to Florida (just 50 miles) makes The Bahamas a critical point for drug trafficking (cocaine Colombia/Venezuela→US), illegal migration (Haiti, Cuba), and maritime smuggling. RBDF operates naval bases at Nassau (Coral Harbour), Freeport, Inagua, Ragged Island, and Exuma. OPBAT (Operation Bahamas, Turks and Caicos) is a permanent joint anti-narcotics operation with DEA, USCG, and British forces. KabatOne integrates coastal radar, AIS, VMS, and maritime drones into one unified surveillance platform.",
    },
    {
      question: "Can KabatOne integrate with existing video infrastructure in The Bahamas?",
      answer: "Yes. KabatOne integrates any ONVIF/RTSP camera without hardware replacement. RBPF CCTV networks in Nassau (New Providence) and Freeport (Grand Bahama), Lynden Pindling International Airport (NAS, 3.5M+ passengers/year) cameras, Port of Nassau surveillance (3.5M+ cruise passengers/year), Atlantis Paradise Island and Baha Mar security cameras, and Freeport Container Port systems connect directly. Compatible with BTC (Bahamas Telecommunications Company), Cable Bahamas/REV, and Aliv fiber infrastructure.",
    },
    {
      question: "How is territorial governance structured in The Bahamas?",
      answer: "The Bahamas is a parliamentary constitutional monarchy (Commonwealth) with King Charles III as head of state. The country is divided into 32 administrative districts, with New Providence (Nassau, capital, ~280,000 pop. — 70% of total population) and Grand Bahama (Freeport, ~55,000 pop.) as the main urban centers. The Family Islands (Out Islands) — Abaco, Eleuthera, Exuma, Long Island, Andros, Cat Island, Inagua — have small populations but enormous territorial extensions. Local governance operates through Local Government Councils. KabatOne adapts to this extreme geographic dispersion with satellite operation, edge computing, and inter-island dispatch.",
    },
    {
      question: "How does KabatOne align with Bahamas procurement regulations?",
      answer: "KabatOne is marketed through local distributors and integrators under the Financial Administration and Audit Act and Treasury Department guidelines. The Bahamas maintains a commitment to public procurement transparency. The modular architecture allows tendering by component (K-Video, K-Dispatch, K-Safety) or as a unified platform. The Data Protection (Privacy of Personal Information) Act 2003 governs data protection, and KabatOne is compliant by design. The BSD (Bahamian dollar) is at 1:1 parity with the USD, simplifying contracting with US-based vendors.",
    },
  ]

  const artSchema = articleSchema(
    es ? 'Software de Seguridad Publica para las Bahamas: Guia Gubernamental' : 'Public Safety Software for The Bahamas: Government Guide',
    es
      ? 'Software de seguridad publica para las islas y distritos de las Bahamas — conectando vigilancia maritima, despacho de emergencias, GIS y gestion de desastres en un archipielago de 700+ islas.'
      : 'Public safety software for The Bahamas islands and districts — connecting maritime surveillance, emergency dispatch, GIS, and disaster management across a 700+ island archipelago.',
    pageUrl,
    '2026-06-24'
  )

  const comparisonRows = es ? [
    { feature: 'CAD unificado multi-isla', legacy: '919/911 aislados por isla', kabatone: 'Despacho inter-isla integrado' },
    { feature: 'Vigilancia maritima (260K mn2)', legacy: 'Radar costero basico', kabatone: 'AIS + VMS + radar + drones fusionados' },
    { feature: 'Seguridad turistica (cruceros)', legacy: 'CCTV fragmentado por resort', kabatone: 'Analitica de multitudes + alerta automatica' },
    { feature: 'Resiliencia ante huracanes', legacy: 'Comunicaciones caen con la red', kabatone: 'Satelite + edge computing por isla' },
    { feature: 'Coordinacion OPBAT/DEA/USCG', legacy: 'Canales separados', kabatone: 'Inteligencia compartida en tiempo real' },
    { feature: 'Cobertura Family Islands', legacy: 'Presencia minima', kabatone: 'Estaciones satelitales autonomas' },
  ] : [
    { feature: 'Unified multi-island CAD', legacy: 'Isolated 919/911 per island', kabatone: 'Integrated inter-island dispatch' },
    { feature: 'Maritime surveillance (260K nm2)', legacy: 'Basic coastal radar', kabatone: 'AIS + VMS + radar + drones fused' },
    { feature: 'Tourism security (cruise)', legacy: 'Fragmented resort CCTV', kabatone: 'Crowd analytics + auto-alerts' },
    { feature: 'Hurricane resilience', legacy: 'Comms fail with the grid', kabatone: 'Satellite + per-island edge computing' },
    { feature: 'OPBAT/DEA/USCG coordination', legacy: 'Separate channels', kabatone: 'Real-time shared intelligence' },
    { feature: 'Family Islands coverage', legacy: 'Minimal presence', kabatone: 'Autonomous satellite stations' },
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
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0e4a6e 50%, #164e63 100%)', padding: '80px 20px 60px', color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12, color: '#67e8f9' }}>
            {es ? 'Guia de Mercado — Bahamas' : 'Market Guide — The Bahamas'}
          </p>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
            {es
              ? 'Software de Seguridad Publica para las Bahamas'
              : 'Public Safety Software for The Bahamas'}
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.92, maxWidth: 720, margin: '0 auto 28px' }}>
            {es
              ? 'Plataforma unificada que conecta 700+ islas, RBPF, RBDF, NEMA y operaciones maritimas conjuntas — con vigilancia maritima integrada, despacho inter-isla y resiliencia ante huracanes para el archipielago mas grande del Caribe.'
              : 'Unified platform connecting 700+ islands, RBPF, RBDF, NEMA, and joint maritime operations — with integrated maritime surveillance, inter-island dispatch, and hurricane resilience for the largest Caribbean archipelago.'}
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
        <span style={{ color: '#334155' }}>{es ? 'Bahamas' : 'The Bahamas'}</span>
      </nav>

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px 60px' }}>

        {/* ── Security Architecture ── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: '#0f172a' }}>
            {es ? 'Arquitectura de Seguridad: Archipielago de 700+ Islas' : 'Security Architecture: 700+ Island Archipelago'}
          </h2>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: 14 }}>
            {es
              ? 'Las Bahamas presentan el desafio de seguridad mas complejo del Caribe: 700+ islas y cayos distribuidos en 100,000 millas cuadradas de oceano, con solo 30 islas habitadas y una poblacion de ~400,000 concentrada en un 70% en New Providence (Nassau). El 97% del territorio nacional es agua:'
              : 'The Bahamas presents the most complex security challenge in the Caribbean: 700+ islands and cays spread across 100,000 square miles of ocean, with only 30 inhabited islands and a population of ~400,000 concentrated 70% in New Providence (Nassau). 97% of national territory is water:'}
          </p>
          <ul style={{ lineHeight: 1.8, color: '#334155', paddingLeft: 20 }}>
            <li><strong>RBPF:</strong> {es ? 'Royal Bahamas Police Force — ~3,500 oficiales, sede Central Detective Unit en Nassau. Divisiones en New Providence, Grand Bahama, y destacamentos en Family Islands. Unidades especializadas: Drug Enforcement Unit (DEU), Firearms Unit, Tourism Police Unit, Intelligence Branch.' : 'Royal Bahamas Police Force — ~3,500 officers, Central Detective Unit HQ in Nassau. Divisions in New Providence, Grand Bahama, and Family Islands detachments. Specialized units: Drug Enforcement Unit (DEU), Firearms Unit, Tourism Police Unit, Intelligence Branch.'}</li>
            <li><strong>RBDF:</strong> {es ? 'Royal Bahamas Defence Force — ~1,800 efectivos, la mayor fuerza de defensa maritima del Caribe. Base principal: Coral Harbour (Nassau). Bases satelitales: Freeport, Inagua (extremo sur — monitoreo de trafico haitiano), Ragged Island, Exuma. Opera patrulleras Damen, interceptoras rapidas y aviones de vigilancia maritima.' : 'Royal Bahamas Defence Force — ~1,800 personnel, the largest maritime defence force in the Caribbean. Main base: Coral Harbour (Nassau). Satellite bases: Freeport, Inagua (southern tip — Haitian traffic monitoring), Ragged Island, Exuma. Operates Damen patrol vessels, fast interceptors, and maritime surveillance aircraft.'}</li>
            <li><strong>NEMA:</strong> {es ? 'National Emergency Management Agency — coordinacion de respuesta a huracanes (temporada junio-noviembre), inundaciones, y evacuaciones inter-isla. La Disaster Preparedness and Response Act establece el marco legal.' : 'National Emergency Management Agency — hurricane response coordination (season June-November), flooding, and inter-island evacuations. The Disaster Preparedness and Response Act establishes the legal framework.'}</li>
            <li><strong>{es ? 'Bomberos' : 'Fire service'}:</strong> {es ? 'Royal Bahamas Fire Service — estaciones en Nassau, Freeport y Family Islands principales. Capacidad de respuesta limitada en islas remotas.' : 'Royal Bahamas Fire Service — stations in Nassau, Freeport, and major Family Islands. Limited response capacity on remote islands.'}</li>
            <li><strong>{es ? 'Presencia internacional' : 'International presence'}:</strong> {es ? 'OPBAT (Operation Bahamas, Turks and Caicos) — operacion conjunta permanente anti-narcoticos con DEA, USCG y Royal Navy britanica. AUTEC (Atlantic Undersea Test and Evaluation Center) — instalacion de la US Navy en Andros Island para pruebas de sonar y submarinos. Presencia del US CBP/ICE para control de migracion.' : 'OPBAT (Operation Bahamas, Turks and Caicos) — permanent joint anti-narcotics operation with DEA, USCG, and British Royal Navy. AUTEC (Atlantic Undersea Test and Evaluation Center) — US Navy facility on Andros Island for sonar and submarine testing. US CBP/ICE presence for migration control.'}</li>
          </ul>
        </section>

        {/* ── Maritime Surveillance ── */}
        <section style={{ marginBottom: 48, background: '#ecfeff', borderRadius: 12, padding: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: '#155e75' }}>
            {es ? 'Vigilancia Maritima: El Desafio Central' : 'Maritime Surveillance: The Central Challenge'}
          </h2>
          <p style={{ lineHeight: 1.7, color: '#164e63', marginBottom: 14 }}>
            {es
              ? 'Con 97% de territorio maritimo y proximidad a Florida (50 millas), las Bahamas enfrentan amenazas maritimas multiples que requieren una plataforma de vigilancia integrada:'
              : 'With 97% maritime territory and proximity to Florida (50 miles), The Bahamas faces multiple maritime threats requiring an integrated surveillance platform:'}
          </p>
          <ul style={{ lineHeight: 1.8, color: '#164e63', paddingLeft: 20 }}>
            <li><strong>{es ? 'Narcotrafico' : 'Drug trafficking'}:</strong> {es ? 'Las Bahamas son corredor principal de cocaina Colombia/Venezuela→Florida. Lanchas rapidas (go-fast boats) cruzan las aguas bahameñas de noche usando cayos deshabitados como puntos de transferencia. El OPBAT interdice rutas pero el volumen es masivo. Los cayos del sur (Inagua, Ragged Island, Acklins) son los mas vulnerables.' : 'The Bahamas is a primary cocaine corridor Colombia/Venezuela→Florida. Go-fast boats cross Bahamian waters at night using uninhabited cays as transfer points. OPBAT interdicts routes but volume is massive. Southern cays (Inagua, Ragged Island, Acklins) are most vulnerable.'}</li>
            <li><strong>{es ? 'Migracion ilegal' : 'Illegal migration'}:</strong> {es ? 'Miles de migrantes haitianos y cubanos intentan alcanzar las Bahamas o usarlas como punto de transito hacia EE.UU. cada ano. Los naufragios son frecuentes en el Windward Passage y el Canal de Bahamas. La base RBDF en Inagua monitorea esta ruta critica.' : 'Thousands of Haitian and Cuban migrants attempt to reach The Bahamas or use them as transit to the US each year. Shipwrecks are frequent in the Windward Passage and Bahamas Channel. The RBDF base at Inagua monitors this critical route.'}</li>
            <li><strong>{es ? 'Pesca ilegal' : 'Illegal fishing'}:</strong> {es ? 'La ZEE bahameña es rica en langosta, caracol y pesca deportiva. Embarcaciones dominicanas y haitianas pescan ilegalmente con frecuencia. El Bahamas National Trust y el Departamento de Recursos Marinos coordinan con la RBDF.' : 'The Bahamian EEZ is rich in lobster, conch, and sport fishing. Dominican and Haitian vessels fish illegally frequently. The Bahamas National Trust and Department of Marine Resources coordinate with RBDF.'}</li>
            <li><strong>{es ? 'Proteccion de cruceros' : 'Cruise ship protection'}:</strong> {es ? 'Nassau recibe 3.5M+ cruceristas/ano (uno de los puertos mas activos del mundo). Las private islands de lineas de cruceros (CocoCay/Royal Caribbean, Castaway Cay/Disney, Half Moon Cay/Carnival, Ocean Cay/MSC) requieren coordinacion de seguridad maritima con operadores privados.' : 'Nassau receives 3.5M+ cruise passengers/year (one of the busiest ports globally). Cruise line private islands (CocoCay/Royal Caribbean, Castaway Cay/Disney, Half Moon Cay/Carnival, Ocean Cay/MSC) require maritime security coordination with private operators.'}</li>
          </ul>
          <p style={{ lineHeight: 1.7, color: '#164e63', marginTop: 14 }}>
            {es
              ? 'KabatOne integra radar costero, AIS (Automatic Identification System), VMS de flota pesquera, drones maritimos, camaras termicas y datos satelitales en una plataforma unica que da imagen operativa completa de las aguas bahameñas.'
              : 'KabatOne integrates coastal radar, AIS (Automatic Identification System), fishing fleet VMS, maritime drones, thermal cameras, and satellite data into one platform providing complete operational picture of Bahamian waters.'}
          </p>
        </section>

        {/* ── Tourism Economy ── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: '#0f172a' }}>
            {es ? 'Turismo: Motor Economico del Archipielago' : 'Tourism: The Archipelago Economic Engine'}
          </h2>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: 14 }}>
            {es
              ? 'El turismo representa aproximadamente el 50% del PIB de las Bahamas y genera mas del 60% del empleo. Las infraestructuras turisticas criticas:'
              : 'Tourism represents approximately 50% of The Bahamas GDP and generates over 60% of employment. Critical tourism infrastructure:'}
          </p>
          <ul style={{ lineHeight: 1.8, color: '#334155', paddingLeft: 20 }}>
            <li><strong>{es ? 'Cruceros' : 'Cruise'}:</strong> {es ? '3.5M+ cruceristas/ano en Nassau, convirtiendo al Puerto de Nassau en uno de los mas activos del mundo. Prince George Wharf + Nassau Cruise Port (rediseñado 2023, $300M+). Las private islands son un fenomeno unico de las Bahamas.' : '3.5M+ cruise passengers/year in Nassau, making the Port of Nassau one of the busiest globally. Prince George Wharf + Nassau Cruise Port (redesigned 2023, $300M+). Private islands are a phenomenon unique to The Bahamas.'}</li>
            <li><strong>{es ? 'Resorts' : 'Resorts'}:</strong> {es ? 'Atlantis Paradise Island (3,800+ habitaciones, parque acuatico, casino), Baha Mar (1,800+ habitaciones, Hyatt/Rosewood/SLS), Sandals Royal Bahamian, The Ocean Club (Four Seasons). Grand Bahama: Lucaya Resort Complex. Exumas: Sandals Emerald Bay.' : 'Atlantis Paradise Island (3,800+ rooms, waterpark, casino), Baha Mar (1,800+ rooms, Hyatt/Rosewood/SLS), Sandals Royal Bahamian, The Ocean Club (Four Seasons). Grand Bahama: Lucaya Resort Complex. Exumas: Sandals Emerald Bay.'}</li>
            <li><strong>{es ? 'Aeropuertos' : 'Airports'}:</strong> {es ? 'Lynden Pindling International Airport (NAS, Nassau) — 3.5M+ pasajeros/ano, principal hub. Grand Bahama International Airport (FPO, Freeport). Exuma International (GGT). Aerodromos en la mayoria de Family Islands habitadas.' : 'Lynden Pindling International Airport (NAS, Nassau) — 3.5M+ passengers/year, main hub. Grand Bahama International Airport (FPO, Freeport). Exuma International (GGT). Airstrips on most inhabited Family Islands.'}</li>
            <li><strong>{es ? 'Centro financiero' : 'Financial center'}:</strong> {es ? 'Las Bahamas son un centro financiero offshore con 200+ bancos registrados y firmas de inversion. La Securities Commission y el Central Bank of The Bahamas (CBOB) supervisan el sector. El BSD esta a paridad 1:1 con el USD. El Sand Dollar (CBDC) fue la primera moneda digital de banco central del mundo (2020).' : 'The Bahamas is an offshore financial center with 200+ registered banks and investment firms. The Securities Commission and Central Bank of The Bahamas (CBOB) oversee the sector. BSD is at 1:1 parity with USD. The Sand Dollar (CBDC) was the world first central bank digital currency (2020).'}</li>
          </ul>
        </section>

        {/* ── Hurricane Resilience ── */}
        <section style={{ marginBottom: 48, background: '#fef3c7', borderRadius: 12, padding: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: '#92400e' }}>
            {es ? 'Resiliencia ante Huracanes: Amenaza Existencial' : 'Hurricane Resilience: Existential Threat'}
          </h2>
          <p style={{ lineHeight: 1.7, color: '#78350f', marginBottom: 14 }}>
            {es
              ? 'Las Bahamas son extremadamente vulnerables a huracanes. Eventos recientes han devastado islas enteras:'
              : 'The Bahamas is extremely vulnerable to hurricanes. Recent events have devastated entire islands:'}
          </p>
          <ul style={{ lineHeight: 1.8, color: '#78350f', paddingLeft: 20 }}>
            <li><strong>{es ? 'Huracan Dorian (Sep 2019)' : 'Hurricane Dorian (Sep 2019)'}:</strong> {es ? 'Categoria 5 — el mas poderoso jamas registrado en el Atlantico Norte al tocar tierra. Abaco y Grand Bahama fueron devastadas: ~$3.4B en danos, 70+ muertes confirmadas, cientos desaparecidos. Marsh Harbour (capital de Abaco) fue destruida casi en su totalidad. Dorian permanecio estacionario sobre las Bahamas durante 40+ horas.' : 'Category 5 — the most powerful ever recorded in the North Atlantic at landfall. Abaco and Grand Bahama were devastated: ~$3.4B in damages, 70+ confirmed deaths, hundreds missing. Marsh Harbour (Abaco capital) was almost entirely destroyed. Dorian remained stationary over The Bahamas for 40+ hours.'}</li>
            <li><strong>{es ? 'Huracan Matthew (Oct 2016)' : 'Hurricane Matthew (Oct 2016)'}:</strong> {es ? 'Categoria 4, danos significativos en las islas del sur y centro.' : 'Category 4, significant damage to southern and central islands.'}</li>
            <li><strong>{es ? 'Huracan Joaquin (Oct 2015)' : 'Hurricane Joaquin (Oct 2015)'}:</strong> {es ? 'Categoria 4, devasto San Salvador, Rum Cay, Cat Island, Long Island y Crooked Island. El cargo ship El Faro se hundio con 33 tripulantes.' : 'Category 4, devastated San Salvador, Rum Cay, Cat Island, Long Island, and Crooked Island. Cargo ship El Faro sank with 33 crew.'}</li>
          </ul>
          <p style={{ lineHeight: 1.7, color: '#78350f', marginTop: 14 }}>
            {es
              ? 'KabatOne opera con capacidades edge/local por isla que funcionan independientemente cuando se pierden las comunicaciones inter-isla. Respaldo satelital Starlink, baterias de 72+ horas, y restauracion automatica al recuperarse la conectividad. El NEMA puede coordinar evacuaciones y respuesta desde cualquier isla operativa.'
              : 'KabatOne operates with per-island edge/local capabilities that function independently when inter-island communications are lost. Starlink satellite backup, 72+ hour batteries, and automatic restoration when connectivity recovers. NEMA can coordinate evacuations and response from any operational island.'}
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
                  <th style={{ padding: '10px 12px', textAlign: 'left', borderBottom: '2px solid #e2e8f0', color: ACCENT }}>KabatOne</th>
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

        {/* ── Deployment Scenarios ── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: '#0f172a' }}>
            {es ? 'Escenarios de Despliegue para las Bahamas' : 'Deployment Scenarios for The Bahamas'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginTop: 16 }}>
            {[
              {
                title: es ? 'Centro de Comando Maritimo RBDF' : 'RBDF Maritime Command Center',
                desc: es
                  ? 'Plataforma de vigilancia maritima integrada para Coral Harbour y bases satelitales. Fusion de AIS, radar costero, VMS de flota, drones y camaras termicas. Coordinacion con OPBAT/DEA/USCG en tiempo real. Cobertura de las 260,000 mn2 de aguas bahameñas.'
                  : 'Integrated maritime surveillance platform for Coral Harbour and satellite bases. AIS, coastal radar, fleet VMS, drone, and thermal camera fusion. Real-time coordination with OPBAT/DEA/USCG. Coverage of 260,000 nm2 of Bahamian waters.',
              },
              {
                title: es ? 'Seguridad Nassau + Cruceros' : 'Nassau + Cruise Security',
                desc: es
                  ? 'VMS con analitica de multitudes para Downtown Nassau, Nassau Cruise Port (3.5M+ pax/ano), Bay Street, Straw Market, Junkanoo Beach. Integracion con RBPF Tourism Police, Atlantis/Baha Mar seguridad privada, y CBP preclearance.'
                  : 'VMS with crowd analytics for Downtown Nassau, Nassau Cruise Port (3.5M+ pax/year), Bay Street, Straw Market, Junkanoo Beach. Integration with RBPF Tourism Police, Atlantis/Baha Mar private security, and CBP preclearance.',
              },
              {
                title: es ? 'Resiliencia Family Islands' : 'Family Islands Resilience',
                desc: es
                  ? 'Estaciones autonomas con edge computing y comunicaciones satelitales para Abaco, Eleuthera, Exuma, Long Island, Andros, Cat Island, Inagua. Operacion independiente durante huracanes cuando se pierde conectividad inter-isla. Restauracion automatica post-evento.'
                  : 'Autonomous stations with edge computing and satellite communications for Abaco, Eleuthera, Exuma, Long Island, Andros, Cat Island, Inagua. Independent operation during hurricanes when inter-island connectivity is lost. Automatic post-event restoration.',
              },
              {
                title: es ? 'Private Islands (Cruceros)' : 'Private Islands (Cruise Lines)',
                desc: es
                  ? 'Seguridad integrada para CocoCay (Royal Caribbean), Castaway Cay (Disney), Half Moon Cay (Carnival), Ocean Cay (MSC). Vigilancia perimetral maritima, coordinacion con RBDF, despacho de emergencias medicas con evacuacion aeromedica.'
                  : 'Integrated security for CocoCay (Royal Caribbean), Castaway Cay (Disney), Half Moon Cay (Carnival), Ocean Cay (MSC). Maritime perimeter surveillance, RBDF coordination, medical emergency dispatch with aeromedical evacuation.',
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
            <li><Link href="/resources/public-safety-software-barbados" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>{es ? 'Guia de Barbados' : 'Barbados Guide'}</Link> — {es ? 'centro regional RSS/CDEMA del Caribe' : 'RSS/CDEMA Caribbean regional hub'}</li>
            <li><Link href="/resources/public-safety-software-jamaica" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>{es ? 'Guia de Jamaica' : 'Jamaica Guide'}</Link> — {es ? 'mayor isla caribena angloparlante' : 'largest English-speaking Caribbean island'}</li>
            <li><Link href="/resources/public-safety-software-puerto-rico" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>{es ? 'Guia de Puerto Rico' : 'Puerto Rico Guide'}</Link> — {es ? 'territorio EE.UU. con fondos federales' : 'US territory with federal funding'}</li>
            <li><Link href="/resources/public-safety-software-united-states" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>{es ? 'Guia de EE.UU.' : 'US Guide'}</Link> — {es ? 'principal socio de seguridad (OPBAT, CBP, USCG)' : 'primary security partner (OPBAT, CBP, USCG)'}</li>
            <li><Link href="/resources/what-is-video-management-software" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>{es ? '¿Que es un VMS?' : 'What Is VMS?'}</Link> — {es ? 'introduccion a gestion de video inteligente' : 'introduction to smart video management'}</li>
            <li><Link href="/k-dispatch" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>K-Dispatch</Link> — {es ? 'despacho inteligente inter-isla' : 'smart inter-island dispatch'}</li>
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
          h2={es ? '¿Listo para unificar la seguridad del archipielago bahameño?' : 'Ready to unify security across the Bahamian archipelago?'}
          subtitle={es
            ? 'KabatOne conecta RBPF, RBDF, NEMA y operaciones maritimas en una plataforma integrada — con vigilancia maritima, despacho inter-isla y resiliencia ante huracanes.'
            : 'KabatOne connects RBPF, RBDF, NEMA, and maritime operations on one integrated platform — with maritime surveillance, inter-island dispatch, and hurricane resilience.'}
        />
      </main>

      <Footer es={es} />
    </>
  )
}
