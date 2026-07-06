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
  return generatePageMetadata('publicSafetySoftwareBarbados', locale)
}

export default async function PublicSafetySoftwareBarbadosPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-barbados/`
    : `${baseUrl}/resources/public-safety-software-barbados/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Publica — Barbados' : 'Public Safety Software — Barbados', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: "¿Como funciona el sistema de emergencias de Barbados?",
      answer: "Barbados opera un sistema de emergencias basado en tres lineas principales: 211 para la policia, 311 para bomberos, y 511 para ambulancias. El Royal Barbados Police Force (RBPF, ~1,500 oficiales) es la fuerza policial nacional, organizada en 4 divisiones policiales (Northern, Southern, Bridgetown y Central). La Barbados Defence Force (BDF, ~800 efectivos) incluye el Regiment y la Coast Guard que patrulla aguas territoriales. El Department of Emergency Management (DEM) coordina la respuesta a desastres bajo la Emergency Management Act. KabatOne unifica estas lineas separadas en un CAD integrado que coordina RBPF, BDF, Barbados Fire Service y Queen Elizabeth Hospital desde una sola plataforma operativa.",
    },
    {
      question: "¿Como se financia la tecnologia de seguridad publica en Barbados?",
      answer: "El financiamiento proviene del Ministerio del Interior (Ministry of Home Affairs), el presupuesto del RBPF, y el Fondo de Gestion de Desastres. Las adquisiciones se rigen por la Financial Management and Audit Act y supervisadas por el Director of Finance. CARICOM IMPACS (Implementation Agency for Crime and Security) contribuye con financiamiento regional. El Banco Interamericano de Desarrollo (BID), la Caribbean Development Bank (CDB) y el programa UK-Caribbean CSSF (Conflict, Stability and Security Fund) financian proyectos de seguridad y resiliencia. Barbados tambien accede a fondos del Green Climate Fund para adaptacion climatica.",
    },
    {
      question: "¿Cual es la importancia del turismo para la seguridad de Barbados?",
      answer: "El turismo representa aproximadamente el 35-40% del PIB de Barbados y genera mas del 60% de las divisas extranjeras. La isla recibe 700K+ visitantes aereos/ano y 800K+ cruceristas/ano a traves del Bridgetown Cruise Terminal (operado por Berth 5 Ltd). Las zonas de alta concentracion turistica — South Coast (St. Lawrence Gap), West Coast (Platinum Coast), Bridgetown Historic Area (UNESCO) — requieren VMS con analitica de multitudes, cobertura CCTV extensa y despacho rapido. La Barbados Tourism Marketing Inc. y el RBPF Tourist Police Unit trabajan conjuntamente. KabatOne integra la vigilancia turistica con el despacho policial y de emergencias en una plataforma unica.",
    },
    {
      question: "¿Puede KabatOne integrarse con la infraestructura de video existente en Barbados?",
      answer: "Si. KabatOne integra cualquier camara ONVIF/RTSP sin reemplazo de hardware. Las redes de CCTV del RBPF en Bridgetown y parroquias perifericas, las camaras del Aeropuerto Internacional Grantley Adams (BGI, 2.5M+ pasajeros/ano), la videovigilancia del Bridgetown Cruise Terminal y del Puerto de Bridgetown, los sistemas de seguridad hotelera en la costa oeste, y las camaras de la Barbados Water Authority (BWA) en estaciones de bombeo se conectan directamente. Compatible con la infraestructura de fibra de FLOW, Digicel y Cable & Wireless.",
    },
    {
      question: "¿Como se estructura la gobernanza territorial en Barbados?",
      answer: "Barbados es una republica parlamentaria desde noviembre 2021 (antes monarquia constitucional bajo la Corona britanica). La isla tiene 11 parroquias (parishes) como divisiones administrativas historicas — Christ Church, St. Michael (Bridgetown), St. James (Holetown), St. Philip, St. Peter, St. Thomas, St. Joseph, St. Andrew, St. Lucy, St. George, y St. John. Con solo 431 km2 y ~280,000 habitantes, Barbados es uno de los paises mas densamente poblados del hemisferio occidental (~650 hab/km2). Esta densidad facilita un despliegue VMS centralizado que cubre toda la isla desde un unico centro de operaciones.",
    },
    {
      question: "¿Como se alinea KabatOne con las regulaciones de compras de Barbados?",
      answer: "KabatOne se comercializa a traves de distribuidores e integradores locales conforme a la Financial Management and Audit Act y las directrices del Ministerio de Finanzas. Barbados tiene un compromiso con la transparencia en las adquisiciones publicas alineado con estandares de la OECD (miembro de OECD Global Forum on Transparency). La arquitectura modular permite licitar por componente (K-Video, K-Dispatch, K-Safety) o como plataforma unificada. La Data Protection Act 2019 rige la proteccion de datos personales, y KabatOne cumple con estos requisitos desde su diseno.",
    },
  ] : [
    {
      question: "How does Barbados' emergency response system work?",
      answer: "Barbados operates an emergency system with three main lines: 211 for police, 311 for fire, and 511 for ambulance. The Royal Barbados Police Force (RBPF, ~1,500 officers) is the national police force, organized into 4 police divisions (Northern, Southern, Bridgetown, and Central). The Barbados Defence Force (BDF, ~800 personnel) includes the Regiment and Coast Guard patrolling territorial waters. The Department of Emergency Management (DEM) coordinates disaster response under the Emergency Management Act. KabatOne unifies these separate lines into one integrated CAD that coordinates RBPF, BDF, Barbados Fire Service, and Queen Elizabeth Hospital from a single operational platform.",
    },
    {
      question: "How is public safety technology funded in Barbados?",
      answer: "Funding comes from the Ministry of Home Affairs, the RBPF budget, and the Disaster Management Fund. Procurement follows the Financial Management and Audit Act under the Director of Finance. CARICOM IMPACS (Implementation Agency for Crime and Security) contributes regional security funding. The Inter-American Development Bank (IDB), Caribbean Development Bank (CDB), and the UK-Caribbean CSSF (Conflict, Stability and Security Fund) fund security and resilience projects. Barbados also accesses Green Climate Fund resources for climate adaptation.",
    },
    {
      question: "How important is tourism to Barbados security?",
      answer: "Tourism represents approximately 35-40% of Barbados GDP and generates over 60% of foreign exchange earnings. The island receives 700K+ air visitors/year and 800K+ cruise passengers/year through the Bridgetown Cruise Terminal (operated by Berth 5 Ltd). High-concentration tourist zones — South Coast (St. Lawrence Gap), West Coast (Platinum Coast), Bridgetown Historic Area (UNESCO) — require VMS with crowd analytics, extensive CCTV coverage, and rapid dispatch. Barbados Tourism Marketing Inc. and the RBPF Tourist Police Unit work jointly. KabatOne integrates tourist surveillance with police and emergency dispatch on one platform.",
    },
    {
      question: "Can KabatOne integrate with existing video infrastructure in Barbados?",
      answer: "Yes. KabatOne integrates any ONVIF/RTSP camera without hardware replacement. RBPF CCTV networks in Bridgetown and peripheral parishes, Grantley Adams International Airport (BGI, 2.5M+ passengers/year) cameras, Bridgetown Cruise Terminal and Port of Bridgetown surveillance, West Coast hotel security systems, and Barbados Water Authority (BWA) pump station cameras connect directly. Compatible with FLOW, Digicel, and Cable & Wireless fiber infrastructure.",
    },
    {
      question: "How is territorial governance structured in Barbados?",
      answer: "Barbados became a parliamentary republic in November 2021 (previously a constitutional monarchy under the British Crown). The island has 11 parishes as historic administrative divisions — Christ Church, St. Michael (Bridgetown), St. James (Holetown), St. Philip, St. Peter, St. Thomas, St. Joseph, St. Andrew, St. Lucy, St. George, and St. John. At only 431 km2 and ~280,000 residents, Barbados is one of the most densely populated countries in the Western Hemisphere (~650 people/km2). This density enables a centralized VMS deployment covering the entire island from a single operations center.",
    },
    {
      question: "How does KabatOne align with Barbados procurement regulations?",
      answer: "KabatOne is marketed through local distributors and integrators under the Financial Management and Audit Act and Ministry of Finance guidelines. Barbados has a commitment to public procurement transparency aligned with OECD standards (OECD Global Forum on Transparency member). The modular architecture allows tendering by component (K-Video, K-Dispatch, K-Safety) or as a unified platform. The Data Protection Act 2019 governs personal data protection, and KabatOne is compliant by design.",
    },
  ]

  const artSchema = articleSchema(
    es ? 'Software de Seguridad Publica para Barbados: Guia Gubernamental' : 'Public Safety Software for Barbados: Government Guide',
    es
      ? 'Software de seguridad publica para parroquias y agencias de Barbados — conectando videovigilancia, despacho de emergencias, GIS y gestion de incidentes para turismo, puertos y resiliencia climatica.'
      : 'Public safety software for Barbados parishes and agencies — connecting surveillance, emergency dispatch, GIS, and incident management for tourism, ports, and climate resilience.',
    pageUrl,
    '2026-06-24'
  )

  const comparisonRows = es ? [
    { feature: 'CAD unificado multi-agencia', legacy: '211/311/511 aislados', kabatone: 'Plataforma unica integrada' },
    { feature: 'VMS isla completa (431 km2)', legacy: 'CCTV fragmentado por zona', kabatone: 'Panel unico con IA + analitica de multitudes' },
    { feature: 'Seguridad turistica', legacy: 'Patrullas manuales', kabatone: 'Analitica predictiva + alerta automatica' },
    { feature: 'Resiliencia climatica', legacy: 'Coordinacion ad-hoc', kabatone: 'DEM + BDF + RBPF integrados en tiempo real' },
    { feature: 'Vigilancia maritima', legacy: 'Radar costero basico', kabatone: 'Coast Guard + VMS + AIS fusionados' },
    { feature: 'Proteccion de datos', legacy: 'Cumplimiento parcial', kabatone: 'Data Protection Act 2019 nativo' },
  ] : [
    { feature: 'Unified multi-agency CAD', legacy: 'Isolated 211/311/511', kabatone: 'Single integrated platform' },
    { feature: 'Island-wide VMS (431 km2)', legacy: 'Fragmented CCTV by zone', kabatone: 'Single AI dashboard + crowd analytics' },
    { feature: 'Tourism security', legacy: 'Manual patrols', kabatone: 'Predictive analytics + auto-alerts' },
    { feature: 'Climate resilience', legacy: 'Ad-hoc coordination', kabatone: 'DEM + BDF + RBPF integrated real-time' },
    { feature: 'Maritime surveillance', legacy: 'Basic coastal radar', kabatone: 'Coast Guard + VMS + AIS fused' },
    { feature: 'Data protection', legacy: 'Partial compliance', kabatone: 'Data Protection Act 2019 native' },
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
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0e4a6e 100%)', padding: '80px 20px 60px', color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12, color: '#93c5fd' }}>
            {es ? 'Guia de Mercado — Barbados' : 'Market Guide — Barbados'}
          </p>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
            {es
              ? 'Software de Seguridad Publica para Barbados'
              : 'Public Safety Software for Barbados'}
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.92, maxWidth: 720, margin: '0 auto 28px' }}>
            {es
              ? 'Plataforma unificada que conecta 11 parroquias, RBPF, BDF Coast Guard, bomberos, emergencias medicas y gestion de desastres — con seguridad turistica integrada y resiliencia climatica para la isla mas densamente poblada del Caribe.'
              : 'Unified platform connecting 11 parishes, RBPF, BDF Coast Guard, fire service, EMS, and disaster management — with integrated tourism security and climate resilience for the most densely populated Caribbean island.'}
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
        <span style={{ color: '#334155' }}>Barbados</span>
      </nav>

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px 60px' }}>

        {/* ── Security Architecture ── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: '#0f172a' }}>
            {es ? 'Arquitectura de Seguridad: Republica Insular del Caribe' : 'Security Architecture: Caribbean Island Republic'}
          </h2>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: 14 }}>
            {es
              ? 'Barbados se convirtio en republica parlamentaria en noviembre 2021, reemplazando a la Reina como jefa de estado por una Presidenta electa (Dame Sandra Mason). Con 431 km2 y ~280,000 habitantes, es uno de los paises mas densamente poblados del hemisferio occidental (~650 hab/km2), lo que crea condiciones ideales para una plataforma de seguridad publica unificada isla-completa:'
              : 'Barbados became a parliamentary republic in November 2021, replacing the Queen as head of state with an elected President (Dame Sandra Mason). At 431 km2 and ~280,000 residents, it is one of the most densely populated countries in the Western Hemisphere (~650 people/km2), creating ideal conditions for an island-wide unified public safety platform:'}
          </p>
          <ul style={{ lineHeight: 1.8, color: '#334155', paddingLeft: 20 }}>
            <li><strong>RBPF:</strong> {es ? 'Royal Barbados Police Force — ~1,500 oficiales, 4 divisiones (Northern, Southern, Bridgetown, Central), sede en Roebuck Street. Unidades especializadas: Drug Squad, Criminal Investigations Department (CID), Tourist Police Unit, Marine Unit.' : 'Royal Barbados Police Force — ~1,500 officers, 4 divisions (Northern, Southern, Bridgetown, Central), HQ at Roebuck Street. Specialized units: Drug Squad, Criminal Investigations Department (CID), Tourist Police Unit, Marine Unit.'}</li>
            <li><strong>BDF:</strong> {es ? 'Barbados Defence Force — ~800 efectivos incluyendo Regiment (infanteria), Coast Guard (patrullaje maritimo/EEZ), y Barbados Cadet Corps. La Coast Guard opera patrulleras que vigilan una ZEE de ~167,000 km2.' : 'Barbados Defence Force — ~800 personnel including Regiment (infantry), Coast Guard (maritime patrol/EEZ), and Barbados Cadet Corps. The Coast Guard operates patrol vessels covering an EEZ of ~167,000 km2.'}</li>
            <li><strong>{es ? 'Bomberos' : 'Fire service'}:</strong> {es ? 'Barbados Fire Service (BFS) — ~400 bomberos, 6 estaciones que cubren toda la isla.' : 'Barbados Fire Service (BFS) — ~400 firefighters, 6 stations covering the entire island.'}</li>
            <li><strong>{es ? 'Emergencias medicas' : 'EMS'}:</strong> {es ? 'Ambulancias estatales coordinadas con el Queen Elizabeth Hospital (QEH, principal hospital terciario) y policlinicos parroquiales.' : 'State ambulances coordinated with Queen Elizabeth Hospital (QEH, main tertiary hospital) and parish polyclinics.'}</li>
            <li><strong>DEM:</strong> {es ? 'Department of Emergency Management — coordinacion de respuesta a huracanes, inundaciones y otros desastres bajo la Emergency Management Act. Conecta con CDEMA (Caribbean Disaster Emergency Management Agency, sede en Barbados).' : 'Department of Emergency Management — hurricane, flood, and disaster response coordination under the Emergency Management Act. Connects with CDEMA (Caribbean Disaster Emergency Management Agency, headquartered in Barbados).'}</li>
          </ul>
        </section>

        {/* ── Tourism Economy ── */}
        <section style={{ marginBottom: 48, background: '#ecfdf5', borderRadius: 12, padding: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: '#166534' }}>
            {es ? 'Turismo: Motor Economico y Prioridad de Seguridad' : 'Tourism: Economic Engine and Security Priority'}
          </h2>
          <p style={{ lineHeight: 1.7, color: '#15803d', marginBottom: 14 }}>
            {es
              ? 'El turismo representa el 35-40% del PIB de Barbados y es el empleador mas grande de la isla. Los flujos turisticos crean demandas especificas de seguridad publica:'
              : 'Tourism represents 35-40% of Barbados GDP and is the island largest employer. Tourist flows create specific public safety demands:'}
          </p>
          <ul style={{ lineHeight: 1.8, color: '#15803d', paddingLeft: 20 }}>
            <li><strong>{es ? 'Visitantes aereos' : 'Air visitors'}:</strong> {es ? '700K+ turistas/ano via Grantley Adams International Airport (BGI, 2.5M+ pasajeros totales). Mercados principales: Reino Unido (~40%), EE.UU. (~25%), Canada (~15%), CARICOM.' : '700K+ tourists/year via Grantley Adams International Airport (BGI, 2.5M+ total passengers). Key markets: UK (~40%), US (~25%), Canada (~15%), CARICOM.'}</li>
            <li><strong>{es ? 'Cruceros' : 'Cruise'}:</strong> {es ? '800K+ cruceristas/ano a traves del Bridgetown Cruise Terminal (Berth 5 Ltd). Hasta 5 barcos simultaneos en temporada alta. La zona del Careenage y Broad Street concentra la actividad comercial.' : '800K+ cruise passengers/year through the Bridgetown Cruise Terminal (Berth 5 Ltd). Up to 5 ships simultaneously in peak season. The Careenage and Broad Street area concentrates commercial activity.'}</li>
            <li><strong>{es ? 'Zonas criticas' : 'Critical zones'}:</strong> {es ? 'South Coast (St. Lawrence Gap — entretenimiento nocturno), West Coast/Platinum Coast (hoteles de lujo — Sandy Lane, Crane), Bridgetown UNESCO Historic Area, Oistins Fish Fry (evento semanal masivo), Bathsheba (surf/naturaleza).' : 'South Coast (St. Lawrence Gap — nightlife), West Coast/Platinum Coast (luxury hotels — Sandy Lane, Crane), Bridgetown UNESCO Historic Area, Oistins Fish Fry (massive weekly event), Bathsheba (surf/nature).'}</li>
            <li><strong>{es ? 'Digital nomads' : 'Digital nomads'}:</strong> {es ? 'El programa Barbados Welcome Stamp (2020) atrajo miles de trabajadores remotos internacionales, creando nuevas concentraciones residenciales que requieren vigilancia extendida.' : 'The Barbados Welcome Stamp program (2020) attracted thousands of international remote workers, creating new residential concentrations requiring extended surveillance.'}</li>
          </ul>
        </section>

        {/* ── Climate & Maritime ── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: '#0f172a' }}>
            {es ? 'Resiliencia Climatica y Seguridad Maritima' : 'Climate Resilience and Maritime Security'}
          </h2>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: 14 }}>
            {es
              ? 'Barbados es la isla mas oriental del Caribe, expuesta directamente al Atlantico. CDEMA (Caribbean Disaster Emergency Management Agency) tiene su sede en Barbados, haciendo de la isla un centro regional de gestion de desastres:'
              : 'Barbados is the easternmost Caribbean island, directly exposed to the Atlantic. CDEMA (Caribbean Disaster Emergency Management Agency) is headquartered in Barbados, making the island a regional disaster management hub:'}
          </p>
          <ul style={{ lineHeight: 1.8, color: '#334155', paddingLeft: 20 }}>
            <li><strong>{es ? 'Huracanes' : 'Hurricanes'}:</strong> {es ? 'Temporada junio-noviembre. El Huracan Elsa (2021, Cat. 1) causo danos significativos. Barbados es menos frecuentemente impactada que islas mas al norte, pero eventos de alta intensidad como el Huracan Allen (1980) y marejadas ciclonica son riesgos reales.' : 'Season June-November. Hurricane Elsa (2021, Cat. 1) caused significant damage. Barbados is less frequently impacted than more northerly islands, but high-intensity events like Hurricane Allen (1980) and storm surge are real risks.'}</li>
            <li><strong>{es ? 'Inundaciones' : 'Flooding'}:</strong> {es ? 'Inundaciones costeras y pluviales son el riesgo natural mas frecuente, especialmente en Bridgetown bajo y Holetown.' : 'Coastal and pluvial flooding is the most frequent natural risk, especially in low-lying Bridgetown and Holetown.'}</li>
            <li><strong>{es ? 'Vigilancia maritima' : 'Maritime surveillance'}:</strong> {es ? 'La BDF Coast Guard patrulla una ZEE de ~167,000 km2. El trafico maritimo incluye cruceros, yates de lujo, pesqueros y embarcaciones interinsulares. Barbados es punto de escala para yates transatlanticos (ARC race). La vigilancia maritima integrada (AIS + VMS + radar costero) es esencial.' : 'BDF Coast Guard patrols an EEZ of ~167,000 km2. Maritime traffic includes cruise ships, luxury yachts, fishing vessels, and inter-island boats. Barbados is a stopover for transatlantic yachts (ARC race). Integrated maritime surveillance (AIS + VMS + coastal radar) is essential.'}</li>
            <li><strong>{es ? 'Narcotrafico maritimo' : 'Maritime drug trafficking'}:</strong> {es ? 'Barbados esta en la ruta de trafico de cocaina Sudamerica-Europa y Sudamerica-Norteamerica via el arco caribeno oriental. La cooperacion con RSS (Regional Security System, sede en Barbados) y JRCC es critica.' : 'Barbados sits on the cocaine trafficking route South America-Europe and South America-North America via the eastern Caribbean arc. Cooperation with RSS (Regional Security System, headquartered in Barbados) and JRCC is critical.'}</li>
          </ul>
        </section>

        {/* ── Regional Hub ── */}
        <section style={{ marginBottom: 48, background: '#eff6ff', borderRadius: 12, padding: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: '#1e40af' }}>
            {es ? 'Barbados: Centro Regional de Seguridad del Caribe' : 'Barbados: Caribbean Regional Security Hub'}
          </h2>
          <p style={{ lineHeight: 1.7, color: '#1e3a5f', marginBottom: 14 }}>
            {es
              ? 'Barbados alberga la sede de multiples organizaciones regionales de seguridad, otorgandole un papel estrategico unico en el Caribe:'
              : 'Barbados hosts the headquarters of multiple regional security organizations, giving it a unique strategic role in the Caribbean:'}
          </p>
          <ul style={{ lineHeight: 1.8, color: '#1e3a5f', paddingLeft: 20 }}>
            <li><strong>RSS:</strong> {es ? 'Regional Security System — alianza de seguridad del Caribe Oriental (7 miembros). Sede en Paragon, Christ Church. Coordina operaciones conjuntas anti-narcoticos, SAR, y respuesta a desastres. KabatOne puede servir como plataforma tecnologica para el RSS.' : 'Regional Security System — Eastern Caribbean security alliance (7 members). HQ at Paragon, Christ Church. Coordinates joint anti-narcotics, SAR, and disaster response operations. KabatOne can serve as the RSS technology platform.'}</li>
            <li><strong>CDEMA:</strong> {es ? 'Caribbean Disaster Emergency Management Agency — sede en Barbados. Coordina preparacion y respuesta a desastres para 19 estados participantes.' : 'Caribbean Disaster Emergency Management Agency — headquartered in Barbados. Coordinates disaster preparedness and response for 19 participating states.'}</li>
            <li><strong>CARICOM IMPACS:</strong> {es ? 'Implementation Agency for Crime and Security — ejecuta la agenda de seguridad de CARICOM. Programas de intercambio de inteligencia criminal y capacitacion regional.' : 'Implementation Agency for Crime and Security — executes CARICOM security agenda. Criminal intelligence exchange and regional training programs.'}</li>
            <li><strong>{es ? 'Centro financiero' : 'Financial center'}:</strong> {es ? 'Barbados es un centro financiero internacional (IBC) con 4,000+ entidades registradas. La Financial Services Commission (FSC) supervisa servicios financieros. La CBB (Central Bank of Barbados) opera en BBD. El cumplimiento AML/CFT requiere vigilancia financiera integrada.' : 'Barbados is an international business center (IBC) with 4,000+ registered entities. The Financial Services Commission (FSC) oversees financial services. The CBB (Central Bank of Barbados) operates in BBD. AML/CFT compliance requires integrated financial surveillance.'}</li>
          </ul>
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
            {es ? 'Escenarios de Despliegue para Barbados' : 'Deployment Scenarios for Barbados'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginTop: 16 }}>
            {[
              {
                title: es ? 'Centro de Operaciones Isla Completa' : 'Island-Wide Operations Center',
                desc: es
                  ? 'Plataforma centralizada que cubre las 11 parroquias desde un unico centro de mando. Unifica RBPF, BFS, ambulancias y BDF Coast Guard con VMS isla-completa, CAD integrado y GIS en tiempo real. La densidad de Barbados (650 hab/km2) permite cobertura total con infraestructura minima.'
                  : 'Centralized platform covering all 11 parishes from a single command center. Unifies RBPF, BFS, ambulances, and BDF Coast Guard with island-wide VMS, integrated CAD, and real-time GIS. Barbados density (650 people/km2) enables total coverage with minimal infrastructure.',
              },
              {
                title: es ? 'Seguridad de Zona Turistica' : 'Tourist Zone Security',
                desc: es
                  ? 'VMS con analitica de multitudes y comportamiento para South Coast, West Coast, Bridgetown UNESCO y Oistins. Integracion con RBPF Tourist Police Unit. Alertas automaticas por concentracion anormal, despacho rapido, y coordinacion con hospitales para emergencias medicas turisticas.'
                  : 'VMS with crowd and behavior analytics for South Coast, West Coast, Bridgetown UNESCO, and Oistins. Integration with RBPF Tourist Police Unit. Automatic alerts for abnormal concentration, rapid dispatch, and hospital coordination for tourist medical emergencies.',
              },
              {
                title: es ? 'Seguridad Portuaria y Cruceros' : 'Port and Cruise Security',
                desc: es
                  ? 'Videovigilancia del Bridgetown Cruise Terminal (5 barcos simultaneos), Puerto de Bridgetown (carga + cruceros), y marinas. Integracion AIS + VMS para seguimiento de embarcaciones. Coordinacion con BDF Coast Guard, CBP y Customs & Excise Department.'
                  : 'Surveillance of Bridgetown Cruise Terminal (5 ships simultaneously), Port of Bridgetown (cargo + cruise), and marinas. AIS + VMS integration for vessel tracking. Coordination with BDF Coast Guard, CBP, and Customs & Excise Department.',
              },
              {
                title: es ? 'Centro Regional RSS/CDEMA' : 'RSS/CDEMA Regional Hub',
                desc: es
                  ? 'Plataforma compartida para operaciones conjuntas del Regional Security System (7 paises miembros) y coordinacion de desastres CDEMA. Interoperabilidad con fuerzas de seguridad del Caribe Oriental, inteligencia compartida y despacho transfronterizo.'
                  : 'Shared platform for Regional Security System joint operations (7 member countries) and CDEMA disaster coordination. Interoperability with Eastern Caribbean security forces, shared intelligence, and cross-border dispatch.',
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
            <li><Link href="/resources/public-safety-software-trinidad-and-tobago" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>{es ? 'Guia de Trinidad y Tobago' : 'Trinidad and Tobago Guide'}</Link> — {es ? 'vecino caribeno con infraestructura energetica critica' : 'Caribbean neighbor with critical energy infrastructure'}</li>
            <li><Link href="/resources/public-safety-software-jamaica" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>{es ? 'Guia de Jamaica' : 'Jamaica Guide'}</Link> — {es ? 'mayor isla caribena angloparlante' : 'largest English-speaking Caribbean island'}</li>
            <li><Link href="/resources/public-safety-software-puerto-rico" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>{es ? 'Guia de Puerto Rico' : 'Puerto Rico Guide'}</Link> — {es ? 'territorio EE.UU. con fondos federales y resiliencia a huracanes' : 'US territory with federal funding and hurricane resilience'}</li>
            <li><Link href="/resources/public-safety-software-united-kingdom" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>{es ? 'Guia de Reino Unido' : 'United Kingdom Guide'}</Link> — {es ? 'mayor mercado fuente de turismo de Barbados' : "Barbados' largest tourism source market"}</li>
            <li><Link href="/resources/what-is-video-management-software" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>{es ? '¿Que es un VMS?' : 'What Is VMS?'}</Link> — {es ? 'introduccion a gestion de video inteligente' : 'introduction to smart video management'}</li>
            <li><Link href="/k-dispatch" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>K-Dispatch</Link> — {es ? 'despacho inteligente para islas con cobertura total' : 'smart dispatch for islands with total coverage'}</li>
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
          h2={es ? '¿Listo para unificar la seguridad publica de Barbados?' : 'Ready to unify public safety in Barbados?'}
          subtitle={es
            ? 'KabatOne conecta RBPF, BDF Coast Guard, bomberos, emergencias medicas y DEM en una sola plataforma — con seguridad turistica integrada y coordinacion regional RSS/CDEMA.'
            : 'KabatOne connects RBPF, BDF Coast Guard, fire service, EMS, and DEM on one platform — with integrated tourism security and RSS/CDEMA regional coordination.'}
        />
      </main>

      <Footer es={es} />
    </>
  )
}
