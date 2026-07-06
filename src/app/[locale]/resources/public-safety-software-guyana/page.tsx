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
  return generatePageMetadata('publicSafetySoftwareGuyana', locale)
}

export default async function PublicSafetySoftwareGuyanaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-guyana/`
    : `${baseUrl}/resources/public-safety-software-guyana/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Publica — Guyana' : 'Public Safety Software — Guyana', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: "¿Como funciona el sistema de emergencias de Guyana?",
      answer: "Guyana opera el sistema 911 para emergencias policiales, 912 para bomberos y 913 para ambulancias. La Guyana Police Force (GPF, ~4,500 oficiales) es la fuerza policial nacional, organizada en divisiones que cubren las 10 regiones administrativas. La Guyana Defence Force (GDF, ~3,400 efectivos) incluye infanteria, Coast Guard y Air Corps. La Civil Defence Commission (CDC) coordina la respuesta a desastres e inundaciones. KabatOne unifica estas lineas en un CAD integrado con geolocalizacion que coordina GPF, GDF, bomberos y servicios de salud.",
    },
    {
      question: "¿Como impacta el boom petrolero en la seguridad publica?",
      answer: "El descubrimiento del bloque Stabroek por ExxonMobil en 2015 ha transformado a Guyana en uno de los productores de petroleo de mas rapido crecimiento del mundo. La produccion supera 600,000 barriles/dia (2024-2025) con proyeccion a 1.2M bbl/dia para 2028. Esto crea necesidades urgentes de seguridad: proteccion de infraestructura petrolera offshore (FPSOs Liza Destiny, Liza Unity, Prosperity, Yellowtail), vigilancia maritima de la zona exclusiva economica, seguridad del nuevo FPSO shore base en Georgetown, proteccion de oleoductos y terminales, y gestion del boom demografico en Georgetown. KabatOne integra vigilancia maritima, terrestre y de infraestructura critica en una plataforma unificada.",
    },
    {
      question: "¿Cual es la importancia de la disputa territorial con Venezuela?",
      answer: "Venezuela reclama el Esequibo (159,500 km2, ~74% del territorio de Guyana) basandose en un laudo arbitral de 1899 que considera nulo. En diciembre 2023, Venezuela realizo un referendo para anexar el Esequibo y movilizo tropas a la frontera. La Corte Internacional de Justicia (CIJ) tiene jurisdiccion sobre el caso. EE.UU., Reino Unido y Brasil han respaldado la soberania de Guyana. La GDF ha reforzado su presencia en la frontera occidental con apoyo militar de EE.UU. (SOUTHCOM), Reino Unido y Brasil. KabatOne provee inteligencia situacional para zonas fronterizas, vigilancia aerea/satelital y coordinacion con fuerzas aliadas.",
    },
    {
      question: "¿Puede KabatOne integrarse con la infraestructura de video existente en Guyana?",
      answer: "Si. KabatOne integra cualquier camara ONVIF/RTSP sin reemplazo de hardware. Las redes de CCTV del Safe City Georgetown (>200 camaras), las camaras del Aeropuerto Internacional Cheddi Jagan (GEO, en expansion), la videovigilancia del Puerto de Georgetown (Demerara Harbour), las camaras de ExxonMobil shore base y terminales petroleras, y los sistemas del Guyana Sugar Corporation y minas de oro/bauxita se conectan directamente. Compatible con la infraestructura de fibra de GTT (Guyana Telephone & Telegraph) y E-Networks.",
    },
    {
      question: "¿Como se estructura la gobernanza regional en Guyana?",
      answer: "Guyana se divide en 10 regiones administrativas, cada una gobernada por un Regional Democratic Council (RDC). Georgetown (Region 4, Demerara-Mahaica) concentra ~300,000 habitantes y es el centro economico. Linden (Region 10) es el segundo centro urbano (mineria de bauxita). New Amsterdam (Region 6) es la tercera ciudad. El interior (Regions 1, 7, 8, 9) es vasto, selvativo, de baja densidad y hogar de comunidades indigenas amerindias. La cobertura de seguridad en el interior es un desafio critico que KabatOne resuelve con estaciones satelitales autonomas y drones de vigilancia.",
    },
    {
      question: "¿Como se alinea KabatOne con las regulaciones de compras de Guyana?",
      answer: "KabatOne se comercializa a traves de distribuidores e integradores locales conforme a la Procurement Act 2003 y la supervision de la National Procurement and Tender Administration Board (NPTAB). Guyana recibe financiamiento significativo del BID, Banco Mundial, IDB Invest, USAID y el UK FCDO para proyectos de seguridad y gobernanza. La arquitectura modular permite licitar por componente (K-Video, K-Dispatch, K-Safety) o como plataforma unificada. El Natural Resource Fund (NRF) de los ingresos petroleros proporciona una nueva fuente de financiamiento para infraestructura de seguridad publica. GYD/BoG.",
    },
  ] : [
    {
      question: "How does Guyana's emergency response system work?",
      answer: "Guyana operates the 911 system for police emergencies, 912 for fire, and 913 for ambulance. The Guyana Police Force (GPF, ~4,500 officers) is the national police force, organized into divisions covering all 10 administrative regions. The Guyana Defence Force (GDF, ~3,400 personnel) includes infantry, Coast Guard, and Air Corps. The Civil Defence Commission (CDC) coordinates disaster and flood response. KabatOne unifies these lines into one integrated CAD with geolocation coordinating GPF, GDF, fire, and health services.",
    },
    {
      question: "How does the oil boom impact public safety?",
      answer: "The Stabroek block discovery by ExxonMobil in 2015 has transformed Guyana into one of the world's fastest-growing oil producers. Production exceeds 600,000 barrels/day (2024-2025) with projections to 1.2M bbl/day by 2028. This creates urgent security needs: offshore oil infrastructure protection (FPSOs Liza Destiny, Liza Unity, Prosperity, Yellowtail), maritime EEZ surveillance, new FPSO shore base security in Georgetown, pipeline and terminal protection, and managing Georgetown's demographic boom. KabatOne integrates maritime, land-based, and critical infrastructure surveillance on one unified platform.",
    },
    {
      question: "What is the significance of the Venezuela territorial dispute?",
      answer: "Venezuela claims the Essequibo (159,500 km2, ~74% of Guyana's territory) based on an 1899 arbitral award it considers null. In December 2023, Venezuela held a referendum to annex the Essequibo and mobilized troops to the border. The International Court of Justice (ICJ) has jurisdiction over the case. The US, UK, and Brazil have backed Guyana's sovereignty. The GDF has reinforced its western border presence with military support from the US (SOUTHCOM), UK, and Brazil. KabatOne provides situational intelligence for border zones, aerial/satellite surveillance, and allied force coordination.",
    },
    {
      question: "Can KabatOne integrate with existing video infrastructure in Guyana?",
      answer: "Yes. KabatOne integrates any ONVIF/RTSP camera without hardware replacement. Safe City Georgetown CCTV networks (200+ cameras), Cheddi Jagan International Airport (GEO, expanding) cameras, Port of Georgetown (Demerara Harbour) surveillance, ExxonMobil shore base and oil terminal cameras, and Guyana Sugar Corporation and gold/bauxite mining facility systems connect directly. Compatible with GTT (Guyana Telephone & Telegraph) and E-Networks fiber infrastructure.",
    },
    {
      question: "How is regional governance structured in Guyana?",
      answer: "Guyana is divided into 10 administrative regions, each governed by a Regional Democratic Council (RDC). Georgetown (Region 4, Demerara-Mahaica) concentrates ~300,000 residents and is the economic center. Linden (Region 10) is the second urban center (bauxite mining). New Amsterdam (Region 6) is the third city. The interior (Regions 1, 7, 8, 9) is vast, forested, low-density, and home to indigenous Amerindian communities. Security coverage in the interior is a critical challenge that KabatOne solves with autonomous satellite stations and surveillance drones.",
    },
    {
      question: "How does KabatOne align with Guyana procurement regulations?",
      answer: "KabatOne is marketed through local distributors and integrators under the Procurement Act 2003 and National Procurement and Tender Administration Board (NPTAB) oversight. Guyana receives significant funding from the IDB, World Bank, IDB Invest, USAID, and UK FCDO for security and governance projects. The modular architecture allows tendering by component (K-Video, K-Dispatch, K-Safety) or as a unified platform. The Natural Resource Fund (NRF) from oil revenues provides a new funding source for public safety infrastructure. GYD/BoG.",
    },
  ]

  const artSchema = articleSchema(
    es ? 'Software de Seguridad Publica para Guyana: Guia Gubernamental' : 'Public Safety Software for Guyana: Government Guide',
    es
      ? 'Software de seguridad publica para regiones y municipios de Guyana — conectando vigilancia maritima petrolera, despacho de emergencias, GIS y gestion de incidentes para el boom petrolero mas rapido del mundo.'
      : 'Public safety software for Guyana regions and municipalities — connecting offshore oil maritime surveillance, emergency dispatch, GIS, and incident management for the world fastest oil boom.',
    pageUrl,
    '2026-06-24'
  )

  const comparisonRows = es ? [
    { feature: 'CAD unificado 10 regiones', legacy: '911/912/913 aislados', kabatone: 'Plataforma integrada multi-region' },
    { feature: 'Vigilancia maritima petrolera', legacy: 'Sin capacidad offshore', kabatone: 'AIS + radar + drones + FPSO integrados' },
    { feature: 'Cobertura interior selvático', legacy: 'Sin cobertura', kabatone: 'Estaciones satelitales autonomas' },
    { feature: 'Seguridad fronteriza (Venezuela)', legacy: 'Patrullas manuales', kabatone: 'Inteligencia situacional + radar + drones' },
    { feature: 'Safe City Georgetown (200+ CCTV)', legacy: 'Camaras aisladas', kabatone: 'Panel unico con IA + analitica' },
    { feature: 'Coordinacion SOUTHCOM/UK/Brasil', legacy: 'Canales separados', kabatone: 'Inteligencia compartida en tiempo real' },
  ] : [
    { feature: 'Unified 10-region CAD', legacy: 'Isolated 911/912/913', kabatone: 'Integrated multi-region platform' },
    { feature: 'Offshore oil maritime surveillance', legacy: 'No offshore capability', kabatone: 'AIS + radar + drones + FPSO integrated' },
    { feature: 'Interior jungle coverage', legacy: 'No coverage', kabatone: 'Autonomous satellite stations' },
    { feature: 'Border security (Venezuela)', legacy: 'Manual patrols', kabatone: 'Situational intelligence + radar + drones' },
    { feature: 'Safe City Georgetown (200+ CCTV)', legacy: 'Isolated cameras', kabatone: 'Single AI-powered analytics dashboard' },
    { feature: 'SOUTHCOM/UK/Brazil coordination', legacy: 'Separate channels', kabatone: 'Real-time shared intelligence' },
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
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1a3a2a 50%, #0e4a6e 100%)', padding: '80px 20px 60px', color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12, color: '#86efac' }}>
            {es ? 'Guia de Mercado — Guyana' : 'Market Guide — Guyana'}
          </p>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
            {es
              ? 'Software de Seguridad Publica para Guyana'
              : 'Public Safety Software for Guyana'}
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.92, maxWidth: 720, margin: '0 auto 28px' }}>
            {es
              ? 'Plataforma unificada que conecta 10 regiones, GPF, GDF, vigilancia maritima petrolera, seguridad fronteriza y gestion de desastres — para el pais con el boom petrolero mas rapido del mundo y una disputa territorial activa.'
              : 'Unified platform connecting 10 regions, GPF, GDF, offshore oil maritime surveillance, border security, and disaster management — for the country with the world fastest oil boom and an active territorial dispute.'}
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
        <span style={{ color: '#334155' }}>Guyana</span>
      </nav>

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px 60px' }}>

        {/* ── Security Architecture ── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: '#0f172a' }}>
            {es ? 'Arquitectura de Seguridad: Boom Petrolero y Disputa Territorial' : 'Security Architecture: Oil Boom and Territorial Dispute'}
          </h2>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: 14 }}>
            {es
              ? 'Guyana esta experimentando la transformacion economica mas rapida del hemisferio occidental. Con un PIB que crecio ~62% en 2022 y ~33% en 2023 (impulsado por el petroleo), el pais enfrenta desafios de seguridad sin precedentes que requieren una plataforma integrada:'
              : 'Guyana is experiencing the fastest economic transformation in the Western Hemisphere. With GDP growing ~62% in 2022 and ~33% in 2023 (oil-driven), the country faces unprecedented security challenges requiring an integrated platform:'}
          </p>
          <ul style={{ lineHeight: 1.8, color: '#334155', paddingLeft: 20 }}>
            <li><strong>GPF:</strong> {es ? 'Guyana Police Force — ~4,500 oficiales, sede Eve Leary en Georgetown. Divisiones cubren las 10 regiones. Unidades especializadas: Special Organised Crime Unit (SOCU), Tactical Services Unit (TSU), Criminal Investigation Department (CID), Traffic Department.' : 'Guyana Police Force — ~4,500 officers, Eve Leary HQ in Georgetown. Divisions cover all 10 regions. Specialized units: Special Organised Crime Unit (SOCU), Tactical Services Unit (TSU), Criminal Investigation Department (CID), Traffic Department.'}</li>
            <li><strong>GDF:</strong> {es ? 'Guyana Defence Force — ~3,400 efectivos. Infanteria (Ground Force), Coast Guard (patrullaje maritimo/fluvial), Air Corps (vigilancia aerea). La GDF ha sido reforzada significativamente post-2023 con apoyo de EE.UU. (SOUTHCOM), Reino Unido y Brasil debido a la amenaza venezolana.' : 'Guyana Defence Force — ~3,400 personnel. Infantry (Ground Force), Coast Guard (maritime/river patrol), Air Corps (aerial surveillance). GDF has been significantly reinforced post-2023 with US (SOUTHCOM), UK, and Brazilian support due to the Venezuelan threat.'}</li>
            <li><strong>CDC:</strong> {es ? 'Civil Defence Commission — coordinacion de desastres e inundaciones. Guyana sufre inundaciones costeras recurrentes (el 90% de la poblacion vive en una franja costera bajo el nivel del mar protegida por diques — sea wall).' : 'Civil Defence Commission — disaster and flood coordination. Guyana suffers recurrent coastal flooding (90% of the population lives in a coastal strip below sea level protected by a sea wall).'}</li>
            <li><strong>{es ? 'Bomberos' : 'Fire service'}:</strong> {es ? 'Guyana Fire Service (GFS) — estaciones en Georgetown, Linden, New Amsterdam y ciudades regionales principales.' : 'Guyana Fire Service (GFS) — stations in Georgetown, Linden, New Amsterdam, and major regional towns.'}</li>
            <li><strong>{es ? 'Presencia internacional' : 'International presence'}:</strong> {es ? 'US SOUTHCOM (ejercicios conjuntos regulares), UK Military Advisory Team, cooperacion militar con Brasil (frontera sur). DEA Caribbean Corridor y CARICOM IMPACS para operaciones anti-narcoticos.' : 'US SOUTHCOM (regular joint exercises), UK Military Advisory Team, military cooperation with Brazil (southern border). DEA Caribbean Corridor and CARICOM IMPACS for anti-narcotics operations.'}</li>
          </ul>
        </section>

        {/* ── Oil Boom ── */}
        <section style={{ marginBottom: 48, background: '#fef9c3', borderRadius: 12, padding: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: '#854d0e' }}>
            {es ? 'Boom Petrolero: La Transformacion mas Rapida del Mundo' : 'Oil Boom: The World Fastest Transformation'}
          </h2>
          <p style={{ lineHeight: 1.7, color: '#713f12', marginBottom: 14 }}>
            {es
              ? 'El bloque Stabroek (operado por ExxonMobil con Hess y CNOOC) contiene 11+ billones de barriles equivalentes de petroleo descubiertos. Guyana paso de 0 a 600,000+ bbl/dia en menos de 5 anos:'
              : 'The Stabroek block (operated by ExxonMobil with Hess and CNOOC) contains 11+ billion barrels of oil equivalent discovered. Guyana went from 0 to 600,000+ bbl/day in under 5 years:'}
          </p>
          <ul style={{ lineHeight: 1.8, color: '#713f12', paddingLeft: 20 }}>
            <li><strong>Liza Destiny FPSO:</strong> {es ? '120,000 bbl/dia — primer FPSO, operativo desde 2019' : '120,000 bbl/day — first FPSO, operational since 2019'}</li>
            <li><strong>Liza Unity FPSO:</strong> {es ? '220,000 bbl/dia — segundo FPSO, operativo desde 2022' : '220,000 bbl/day — second FPSO, operational since 2022'}</li>
            <li><strong>Prosperity FPSO:</strong> {es ? '220,000 bbl/dia — tercer FPSO (Payara field), operativo desde 2023' : '220,000 bbl/day — third FPSO (Payara field), operational since 2023'}</li>
            <li><strong>Yellowtail FPSO:</strong> {es ? '250,000 bbl/dia — cuarto FPSO, en construccion, previsto 2025-2026' : '250,000 bbl/day — fourth FPSO, under construction, expected 2025-2026'}</li>
            <li><strong>Uaru FPSO:</strong> {es ? '250,000 bbl/dia — quinto FPSO, en desarrollo' : '250,000 bbl/day — fifth FPSO, in development'}</li>
          </ul>
          <p style={{ lineHeight: 1.7, color: '#713f12', marginTop: 14 }}>
            {es
              ? 'La proteccion de esta infraestructura offshore requiere vigilancia maritima 24/7, coordinacion con la Coast Guard de la GDF, monitoreo de embarcaciones no autorizadas, y respuesta rapida ante incidentes ambientales o de seguridad. El shore base de ExxonMobil en Houston, Georgetown, y las terminales asociadas requieren VMS terrestre integrado. KabatOne fusiona vigilancia maritima y terrestre en una sola plataforma operativa.'
              : 'Protecting this offshore infrastructure requires 24/7 maritime surveillance, GDF Coast Guard coordination, unauthorized vessel monitoring, and rapid response to environmental or security incidents. The ExxonMobil shore base in Houston, Georgetown, and associated terminals require integrated land-based VMS. KabatOne fuses maritime and land-based surveillance on one operational platform.'}
          </p>
        </section>

        {/* ── Venezuela Border ── */}
        <section style={{ marginBottom: 48, background: '#fef2f2', borderRadius: 12, padding: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 14, color: '#991b1b' }}>
            {es ? 'Disputa Territorial con Venezuela: Amenaza Activa' : 'Venezuela Territorial Dispute: Active Threat'}
          </h2>
          <p style={{ lineHeight: 1.7, color: '#7f1d1d', marginBottom: 14 }}>
            {es
              ? 'Venezuela reclama el territorio del Esequibo — 159,500 km2 que representan aproximadamente el 74% de Guyana. Esta no es una disputa historica pasiva:'
              : 'Venezuela claims the Essequibo territory — 159,500 km2 representing approximately 74% of Guyana. This is not a passive historical dispute:'}
          </p>
          <ul style={{ lineHeight: 1.8, color: '#7f1d1d', paddingLeft: 20 }}>
            <li>{es ? 'En diciembre 2023, Venezuela realizo un referendo sobre la anexion del Esequibo y movilizo tropas a la frontera' : 'In December 2023, Venezuela held a referendum on Essequibo annexation and mobilized troops to the border'}</li>
            <li>{es ? 'La CIJ (Corte Internacional de Justicia) tiene jurisdiccion activa sobre el caso' : 'The ICJ (International Court of Justice) has active jurisdiction over the case'}</li>
            <li>{es ? 'EE.UU. (SOUTHCOM), Reino Unido y Brasil han respaldado la soberania de Guyana con apoyo militar directo' : 'The US (SOUTHCOM), UK, and Brazil have backed Guyana sovereignty with direct military support'}</li>
            <li>{es ? 'La GDF realiza ejercicios regulares con fuerzas aliadas en la frontera occidental' : 'GDF conducts regular exercises with allied forces on the western border'}</li>
            <li>{es ? 'La presion aumenta a medida que se descubren mas reservas petroleras en aguas cercanas al Esequibo' : 'Pressure increases as more oil reserves are discovered in waters near the Essequibo'}</li>
          </ul>
          <p style={{ lineHeight: 1.7, color: '#7f1d1d', marginTop: 14 }}>
            {es
              ? 'KabatOne provee inteligencia situacional para la frontera de 743 km con Venezuela: vigilancia con drones, radar terrestre, camaras termicas, sensores de movimiento en selva densa, y comunicaciones satelitales para areas sin cobertura celular. La plataforma permite coordinacion en tiempo real entre GDF, GPF y fuerzas aliadas.'
              : 'KabatOne provides situational intelligence for the 743 km Venezuela border: drone surveillance, ground radar, thermal cameras, motion sensors in dense jungle, and satellite communications for areas without cell coverage. The platform enables real-time coordination between GDF, GPF, and allied forces.'}
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
            {es ? 'Escenarios de Despliegue para Guyana' : 'Deployment Scenarios for Guyana'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginTop: 16 }}>
            {[
              {
                title: es ? 'Vigilancia Maritima Petrolera' : 'Oil Maritime Surveillance',
                desc: es
                  ? 'Plataforma integrada de vigilancia de FPSOs, plataformas de perforacion, embarcaciones de servicio y zona maritima exclusiva. Fusion de AIS, radar costero, drones maritimos y comunicaciones satelitales. Coordinacion con GDF Coast Guard y operadores petroleros.'
                  : 'Integrated surveillance platform for FPSOs, drilling rigs, service vessels, and exclusive maritime zone. AIS, coastal radar, maritime drone, and satellite communication fusion. Coordination with GDF Coast Guard and oil operators.',
              },
              {
                title: es ? 'Safe City Georgetown 2.0' : 'Safe City Georgetown 2.0',
                desc: es
                  ? 'Expansion de la red de 200+ camaras de Georgetown con analitica de IA, reconocimiento de placas (LPR), deteccion de disparos (ShotSpotter), y despacho automatizado. Integracion con GPF SOCU, TSU, y policias de trafico para la capital en rapida expansion.'
                  : 'Expansion of Georgetown 200+ camera network with AI analytics, LPR plate recognition, gunshot detection (ShotSpotter), and automated dispatch. Integration with GPF SOCU, TSU, and traffic police for the rapidly expanding capital.',
              },
              {
                title: es ? 'Seguridad Fronteriza Esequibo' : 'Essequibo Border Security',
                desc: es
                  ? 'Vigilancia de la frontera de 743 km con Venezuela: drones, radar terrestre, camaras termicas, sensores de movimiento en selva densa. Comunicaciones satelitales para zonas sin cobertura celular. Coordinacion con SOUTHCOM, UK y Brasil.'
                  : 'Surveillance of the 743 km Venezuela border: drones, ground radar, thermal cameras, motion sensors in dense jungle. Satellite communications for areas without cell coverage. Coordination with SOUTHCOM, UK, and Brazil.',
              },
              {
                title: es ? 'Interior Selvático y Mineria' : 'Jungle Interior and Mining',
                desc: es
                  ? 'Estaciones satelitales autonomas para regiones interiores (1, 7, 8, 9). Vigilancia de operaciones mineras de oro (Omai, Aurora, Troy Resources), bauxita (Linden/RUSAL), y comunidades amerindias. Deteccion de mineria ilegal y deforestacion con imagenes satelitales.'
                  : 'Autonomous satellite stations for interior regions (1, 7, 8, 9). Surveillance of gold mining operations (Omai, Aurora, Troy Resources), bauxite (Linden/RUSAL), and Amerindian communities. Illegal mining and deforestation detection with satellite imagery.',
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
            <li><Link href="/resources/public-safety-software-trinidad-and-tobago" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>{es ? 'Guia de Trinidad y Tobago' : 'Trinidad and Tobago Guide'}</Link> — {es ? 'vecino caribeno y socio energetico' : 'Caribbean neighbor and energy partner'}</li>
            <li><Link href="/resources/public-safety-software-brazil" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>{es ? 'Guia de Brasil' : 'Brazil Guide'}</Link> — {es ? 'socio militar en frontera sur' : 'military partner on southern border'}</li>
            <li><Link href="/resources/public-safety-software-barbados" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>{es ? 'Guia de Barbados' : 'Barbados Guide'}</Link> — {es ? 'centro CARICOM/RSS regional' : 'CARICOM/RSS regional hub'}</li>
            <li><Link href="/resources/public-safety-software-united-states" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>{es ? 'Guia de EE.UU.' : 'US Guide'}</Link> — {es ? 'aliado estrategico (SOUTHCOM) y mercado petrolero' : 'strategic ally (SOUTHCOM) and oil market'}</li>
            <li><Link href="/resources/what-is-video-management-software" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>{es ? '¿Que es un VMS?' : 'What Is VMS?'}</Link> — {es ? 'introduccion a gestion de video inteligente' : 'introduction to smart video management'}</li>
            <li><Link href="/k-dispatch" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>K-Dispatch</Link> — {es ? 'despacho inteligente para operaciones multi-region' : 'smart dispatch for multi-region operations'}</li>
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
          h2={es ? '¿Listo para asegurar el boom petrolero de Guyana?' : "Ready to secure Guyana's oil boom?"}
          subtitle={es
            ? 'KabatOne conecta GPF, GDF, vigilancia maritima petrolera, seguridad fronteriza y Safe City Georgetown en una sola plataforma — con cobertura satelital para el interior selvático.'
            : 'KabatOne connects GPF, GDF, offshore oil maritime surveillance, border security, and Safe City Georgetown on one platform — with satellite coverage for the jungle interior.'}
        />
      </main>

      <Footer es={es} />
    </>
  )
}
