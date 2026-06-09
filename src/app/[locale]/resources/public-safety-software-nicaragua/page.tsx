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
  return generatePageMetadata('publicSafetySoftwareNicaragua', locale)
}

export default async function PublicSafetySoftwareNicaraguaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-nicaragua/`
    : `${baseUrl}/resources/public-safety-software-nicaragua/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Publica — Nicaragua' : 'Public Safety Software — Nicaragua', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: "¿Como funciona el sistema de emergencias de Nicaragua y cuales son los numeros de atencion?",
      answer: "Nicaragua opera numeros de emergencia separados por servicio: 118 para la Policia Nacional, 115 para los Bomberos y 128 para la Cruz Roja Nicaraguense. Managua y algunos municipios estan implementando progresivamente el 911 unificado, pero la mayoria del territorio todavia opera con despacho fragmentado por institucion. La Policia Nacional mantiene Centros de Operaciones Departamentales (COD) en los 15 departamentos y las 2 regiones autonomas (RACCN y RACCS). Una plataforma unificada como KabatOne integra los tres canales de recepcion en un solo registro de incidente, conectando policia municipal, bomberos y Cruz Roja en tiempo real.",
    },
    {
      question: "¿Como financia Nicaragua tecnologia de seguridad publica?",
      answer: "El financiamiento proviene del presupuesto ordinario del Ministerio de Gobernacion (MIGOB) y el Ejercito de Nicaragua, fondos municipales de las alcaldias, y cooperacion internacional de Venezuela (ALBA-TCP), Cuba, Rusia y China. Los proyectos de seguridad de gran escala se licitan mediante la Ley de Contrataciones del Estado (Ley 323, reformada por Ley 801) con supervision de la Direccion General de Contrataciones del Estado (DGCE) del Ministerio de Hacienda y Credito Publico. KabatOne opera a traves de distribuidores e integradores locales registrados conforme a la Ley 323.",
    },
    {
      question: "¿Que es el SINAPRED y como coordina la respuesta a desastres en Nicaragua?",
      answer: "El Sistema Nacional para la Prevencion, Mitigacion y Atencion de Desastres (SINAPRED), creado por la Ley 337, coordina la respuesta a desastres naturales en Nicaragua. El SINAPRED activa el Centro de Operaciones de Emergencias (COE) nacional durante erupciones volcanicas, huracanes o inundaciones. Nicaragua opera sobre el Corredor Seco Centroamericano y la costa caribe (RACCN/RACCS) es altamente vulnerable a huracanes — Eta e Iota en 2020 afectaron a Nicaragua y Honduras. El INETER (Instituto Nicaraguense de Estudios Territoriales) monitorea 19 volcanes activos y la actividad sismica. KabatOne integra alertas del SINAPRED e INETER con el modulo de video y despacho, consolidando la respuesta policial, municipal y de emergencias en un solo entorno operativo.",
    },
    {
      question: "¿Puede KabatOne integrarse con la infraestructura de camaras existente en Nicaragua?",
      answer: "Si. KabatOne integra cualquier camara ONVIF/RTSP sin reemplazo de hardware. Las camaras municipales de Managua, Leon, Masaya y Matagalpa se conectan directamente a la plataforma. Los lectores LPR en Puerto Corinto, los paneles de control de acceso en Zonas Francas y los sensores ambientales del INETER tambien se integran sin cambiar infraestructura existente.",
    },
    {
      question: "¿Como apoya KabatOne la coordinacion entre la Policia Nacional, el Ejercito y los municipios?",
      answer: "K-Safety provee un mapa GIS compartido donde operadores municipales, la Policia Nacional (~16,000 agentes en 15 departamentos y 2 regiones autonomas) y el Ejercito de Nicaragua (~12,000 efectivos en 7 regiones militares) visualizan posiciones de unidades, incidentes activos y feeds de video en tiempo real. K-Dispatch unifica la recepcion 118/115/128 en un solo registro de incidente, y K-Video centraliza camaras municipales e instalaciones criticas en un VMS con busqueda por zona, fecha y tipo de evento. Esto reduce el tiempo de coordinacion interinstitucional en incidentes multifuerza.",
    },
    {
      question: "¿Como se alinea KabatOne con la legislacion nicaraguense sobre datos personales y contratacion publica?",
      answer: "Nicaragua aprobo la Ley 831 (Ley de Proteccion de Datos Personales) en 2021, regulada por la Direccion de Proteccion de Datos del MIFIC. KabatOne implementa cifrado en reposo y en transito, gestion de roles con trazabilidad de accesos y controles de privacidad compatibles con la Ley 831. Las adquisiciones se estructuran conforme a la Ley 323/Ley 801 de Contrataciones del Estado, permitiendo licitacion por componente (K-Video, K-Dispatch, K-Safety) o como plataforma unificada con representante local registrado.",
    },
  ] : [
    {
      question: "How does Nicaragua's emergency system work and what are the emergency numbers?",
      answer: "Nicaragua operates separate emergency numbers by service: 118 for the National Police, 115 for the Fire Department, and 128 for the Nicaraguan Red Cross. Managua and some municipalities are progressively deploying unified 911, but most of the country still operates with fragmented dispatch by institution. The National Police maintains Departmental Operations Centers (COD) across all 15 departments and 2 autonomous regions (RACCN and RACCS). A unified platform like KabatOne integrates all three reception channels into one incident record, connecting municipal police, fire, and Red Cross in real time.",
    },
    {
      question: "How does Nicaragua fund public safety technology?",
      answer: "Funding comes from the ordinary budget of the Ministry of Interior (MIGOB) and the Nicaraguan Army, municipal funds from local governments, and international cooperation from Venezuela (ALBA-TCP), Cuba, Russia, and China. Large-scale security projects are tendered under the Government Contracting Law (Law 323, amended by Law 801) with oversight from the General Directorate of State Contracting (DGCE) under the Ministry of Finance. KabatOne operates through registered local distributors and integrators under Law 323.",
    },
    {
      question: "What is SINAPRED and how does it coordinate disaster response in Nicaragua?",
      answer: "The National System for Disaster Prevention, Mitigation, and Response (SINAPRED), created by Law 337, coordinates disaster response across Nicaragua. SINAPRED activates the national Emergency Operations Center (COE) during volcanic eruptions, hurricanes, or flooding. Nicaragua spans the Central American Dry Corridor, and the Caribbean coast (RACCN/RACCS) is highly vulnerable to hurricanes — Eta and Iota in 2020 significantly impacted Nicaragua and Honduras. INETER (Nicaraguan Institute of Territorial Studies) monitors 19 active volcanoes and seismic activity. KabatOne integrates SINAPRED and INETER alerts with the video and dispatch module, consolidating police, municipal, and emergency response in one operational environment.",
    },
    {
      question: "Can KabatOne integrate with existing camera infrastructure in Nicaragua?",
      answer: "Yes. KabatOne integrates any ONVIF/RTSP camera without hardware replacement. Municipal cameras in Managua, León, Masaya, and Matagalpa connect directly to the platform. LPR readers at Puerto Corinto, access control panels at Zonas Francas, and environmental sensors from INETER also integrate without changing existing infrastructure.",
    },
    {
      question: "How does KabatOne support coordination between the National Police, Army, and municipalities?",
      answer: "K-Safety provides a shared GIS map where municipal operators, the National Police (~16,000 officers across 15 departments and 2 autonomous regions), and the Nicaraguan Army (~12,000 troops in 7 military regions) see unit positions, active incidents, and live video feeds in real time. K-Dispatch unifies 118/115/128 intake into one incident record, and K-Video centralizes municipal and critical infrastructure cameras in a searchable VMS by zone, date, and event type. This reduces inter-agency coordination time in multi-force incidents.",
    },
    {
      question: "How does KabatOne align with Nicaraguan personal data law and public procurement legislation?",
      answer: "Nicaragua enacted Law 831 (Personal Data Protection Law) in 2021, regulated by the Data Protection Directorate of MIFIC. KabatOne implements encryption at rest and in transit, role-based access management with full audit trails, and privacy controls compatible with Law 831. Procurement is structured under Law 323/Law 801, allowing tendering by component (K-Video, K-Dispatch, K-Safety) or as a unified platform with a registered local representative.",
    },
  ]

  const artSchema = articleSchema(
    es ? 'Software de Seguridad Publica para Municipios y Departamentos en Nicaragua' : 'Public Safety Software for Nicaragua: Government Guide',
    es
      ? 'Software de seguridad publica para municipios, departamentos y ciudades nicaraguenses — conectando videovigilancia, despacho de emergencias, GIS y gestion de incidentes en una sola plataforma operativa.'
      : "Public safety software for Nicaraguan municipalities, departments, and cities — connecting surveillance, emergency dispatch, GIS, and incident management in one unified operational platform.",
    pageUrl,
    '2026-06-02'
  )

  const comparisonRows = es ? [
    { feature: 'Video', fragmented: 'Camaras de Managua, Leon y Matagalpa en plataformas aisladas sin VMS compartido entre municipios ni con los COD policiales', unified: 'VMS unificado, todas las camaras buscables por zona, fecha y tipo de evento' },
    { feature: 'Despacho de emergencias', fragmented: '118, 115 y 128 operan como canales separados sin registro comun de incidente entre Policia Nacional, Bomberos y Cruz Roja', unified: 'Registro unico de incidente que conecta Policia Nacional, Bomberos, Cruz Roja y municipios' },
    { feature: 'Coordinacion PN / Ejercito / municipios', fragmented: 'Solo radio, sin pantalla ni mapa compartido entre fuerzas en los 15 departamentos y 2 regiones autonomas', unified: 'Mapa GIS compartido con posiciones de unidades en tiempo real' },
    { feature: 'Respuesta a desastres SINAPRED', fragmented: 'Sistema de alertas SINAPRED/INETER separado de la red policial y municipal', unified: 'Alertas SINAPRED e INETER integradas con video y despacho en el mismo entorno operativo' },
    { feature: 'Reportes para MIGOB / DGCE', fragmented: 'Exportacion manual de datos incompletos por sistema y por departamento', unified: 'KPIs automatizados de tiempos de respuesta, incidentes por zona y cobertura de camaras' },
    { feature: 'Dependencia tecnologica', fragmented: 'Hardware propietario por proveedor y por municipio', unified: 'ONVIF/RTSP, cualquier marca de camara ya instalada' },
  ] : [
    { feature: 'Video', fragmented: "Cameras in Managua, León, and Matagalpa on isolated platforms with no shared VMS between municipalities or with police CODs", unified: 'Unified VMS, all cameras searchable by zone, date, and event type' },
    { feature: 'Emergency dispatch', fragmented: '118, 115, and 128 operate as separate channels with no shared incident record between National Police, Fire Department, and Red Cross', unified: 'Single incident record bridging National Police, Fire, Red Cross, and municipalities' },
    { feature: 'PN / Army / municipal coordination', fragmented: 'Radio-only, no shared screen or map between forces across 15 departments and 2 autonomous regions', unified: 'Shared GIS map with real-time unit positions' },
    { feature: 'SINAPRED disaster response', fragmented: 'SINAPRED/INETER alert system disconnected from police and municipal network', unified: 'SINAPRED and INETER alerts integrated with video and dispatch in the same operational environment' },
    { feature: 'MIGOB / DGCE reporting', fragmented: 'Manual export of incomplete data per system and per department', unified: 'Automated KPIs for response times, zone-level incident counts, and camera coverage' },
    { feature: 'Technology lock-in', fragmented: 'Proprietary hardware per vendor and per municipality', unified: 'ONVIF/RTSP, any camera brand already installed' },
  ]

  const workflowSteps = es ? [
    { n: '01', title: 'Video unificado', text: 'Todas las camaras — sistemas municipales de Managua, Leon, Masaya, Matagalpa y Chinandega — en una sola interfaz VMS con busqueda por zona, fecha y tipo de evento.' },
    { n: '02', title: 'Centro de despacho unificado', text: 'Recepcion 118/115/128 y futura linea 911, clasificacion de incidentes y asignacion de unidades desde una sola plataforma CAD. Tiempos de despacho promedio inferiores a 90 segundos.' },
    { n: '03', title: 'GIS en tiempo real', text: 'Posiciones de Policia Nacional, Ejercito de Nicaragua, Bomberos y unidades del SINAPRED/INETER en un solo mapa operativo compartido. Vista conjunta entre comisaria departamental y centro de operaciones nacional.' },
    { n: '04', title: 'Fusion de sensores', text: 'Lectores LPR en Puerto Corinto, controles de acceso en Zonas Francas y alertas volcanicas/sismicas del INETER unificados con video en el mismo entorno operativo — sin multiples pantallas ni sistemas fragmentados.' },
    { n: '05', title: 'Reportes para MIGOB y DGCE', text: 'KPIs automatizados de tiempos de respuesta, incidentes por departamento y cobertura de camaras para reportes del Ministerio de Gobernacion y auditorias DGCE — sin exportacion manual.' },
  ] : [
    { n: '01', title: 'Unified video', text: "All cameras — municipal systems in Managua, León, Masaya, Matagalpa, and Chinandega — on one VMS interface with search by zone, date, and event type." },
    { n: '02', title: 'Unified dispatch center', text: '118/115/128 intake and future 911 rollout, incident classification, and unit assignment from one CAD platform. Average dispatch time under 90 seconds.' },
    { n: '03', title: 'Real-time GIS', text: "Positions of National Police, Nicaraguan Army, Fire Department, and SINAPRED/INETER units on one shared operational map — joint view between departmental comisaría and national operations center." },
    { n: '04', title: 'Sensor fusion', text: "LPR readers at Puerto Corinto, access controls at Zonas Francas, and INETER volcanic/seismic alerts unified with video in the same operational environment — no multiple screens or fragmented systems." },
    { n: '05', title: 'MIGOB and DGCE reporting', text: 'Automated KPIs for response times, department-level incident counts, and camera coverage for Ministry of Interior reports and DGCE audits — no manual export.' },
  ]

  const challengeCards = es ? [
    { icon: '🏛️', title: 'Coordinacion PN-Ejercito-municipios fragmentada', text: 'Nicaragua opera con 15 departamentos y 2 regiones autonomas (RACCN y RACCS) donde la Policia Nacional (~16,000 agentes), el Ejercito de Nicaragua (~12,000 efectivos en 7 regiones militares) y los cuerpos municipales actuan en jurisdicciones superpuestas. La coordinacion depende de comunicacion radial informal, creando brechas en operaciones de seguridad ciudadana, antinarcoticos en la costa caribe y respuesta a emergencias multifuerza.' },
    { icon: '📞', title: 'Emergencias con tres numeros sin despacho integrado', text: 'Nicaragua opera 118 (policia), 115 (bomberos) y 128 (Cruz Roja) como canales separados. La falta de un registro comun de incidente entre instituciones genera duplicacion de respuesta y perdida de contexto operacional en emergencias multijurisdiccionales. La transicion al 911 unificado avanza en Managua pero no cubre todos los municipios.' },
    { icon: '📷', title: 'Camaras municipales aisladas sin VMS central', text: 'Managua, Leon, Masaya y Matagalpa operan sistemas de videovigilancia municipal sin integracion entre si ni con los Centros de Operaciones Departamentales (COD) de la Policia Nacional. Los operadores acceden a multiples interfaces, ralentizando la respuesta y creando puntos ciegos entre jurisdicciones, especialmente en la frontera con Honduras (norte) y Costa Rica (sur).' },
    { icon: '🌋', title: 'Vulnerabilidad a volcanes y huracanes sin plataforma integrada', text: 'Nicaragua monitorea 19 volcanes activos a traves del INETER, incluyendo el Masaya, el Momotombo y el Telica. La costa caribe (RACCN/RACCS) es altamente vulnerable a huracanes. El SINAPRED coordina alertas y evacuaciones pero opera de forma separada de la red policial y municipal, fragmentando la respuesta en emergencias de gran escala que requieren coordinacion interinstitucional inmediata.' },
  ] : [
    { icon: '🏛️', title: 'Fragmented PN-Army-municipal coordination', text: "Nicaragua operates with 15 departments and 2 autonomous regions (RACCN and RACCS) where the National Police (~16,000 officers), the Nicaraguan Army (~12,000 troops in 7 military regions), and municipal forces act in overlapping jurisdictions. Coordination depends on informal radio communication, creating gaps in citizen security operations, anti-narcotics on the Caribbean coast, and multi-force emergency response." },
    { icon: '📞', title: 'Three separate emergency numbers without unified dispatch', text: "Nicaragua operates 118 (police), 115 (fire), and 128 (Red Cross) as separate channels. The lack of a shared incident record across institutions generates duplicate responses and lost operational context in multi-jurisdictional emergencies. The transition to unified 911 is advancing in Managua but does not yet cover all municipalities." },
    { icon: '📷', title: 'Siloed municipal cameras without central VMS', text: "Managua, León, Masaya, and Matagalpa each operate municipal surveillance systems without integration between them or with the National Police Departmental Operations Centers (CODs). Operators access multiple interfaces, slowing response and creating blind spots across jurisdictions — particularly on the borders with Honduras to the north and Costa Rica to the south." },
    { icon: '🌋', title: 'Volcano and hurricane vulnerability without integrated platform', text: "Nicaragua monitors 19 active volcanoes through INETER, including Masaya, Momotombo, and Telica. The Caribbean coast (RACCN/RACCS) is highly vulnerable to hurricanes. SINAPRED coordinates alerts and evacuations but operates separately from the police and municipal network, fragmenting response in large-scale emergencies requiring immediate inter-agency coordination." },
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
            {es ? 'Software de Seguridad Publica — Nicaragua' : 'Public Safety Software — Nicaragua'}
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
              ? 'Software de Seguridad Publica para Nicaragua'
              : 'Public Safety Software for Nicaragua'}
          </h1>
          <p style={{
            fontSize: '18px', fontWeight: 300, color: 'var(--dim)',
            lineHeight: 1.75, maxWidth: '720px',
          }}>
            {es
              ? 'Guia para municipios nicaraguenses, gobernaciones departamentales y los Centros de Operaciones Departamentales (COD) de la Policia Nacional que evaluan plataformas unificadas de seguridad publica: videovigilancia, despacho de emergencias, GIS y gestion de incidentes.'
              : "Guide for Nicaraguan municipalities, departmental governments, and National Police Departmental Operations Centers (CODs) evaluating unified public safety platforms — video surveillance, emergency dispatch, GIS, and incident management."}
          </p>
        </section>

        {/* -- SECTION: Nicaragua Public Safety Structure -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? 'La Estructura de Seguridad Publica en Nicaragua'
                : "Nicaragua's Public Safety Structure"}
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Nicaragua es una republica dividida en 15 departamentos, 2 regiones autonomas (RACCN y RACCS) y 153 municipios. La Policia Nacional (PN), con aproximadamente 16,000 agentes, es la fuerza policial principal bajo el Ministerio de Gobernacion (MIGOB). El Ejercito de Nicaragua (EN, ~12,000 efectivos) organizado en 7 regiones militares apoya operaciones de seguridad ciudadana, control de fronteras y respuesta a desastres. La Direccion de Investigacion de la Policia Nacional (DIPOL) conduce operaciones de inteligencia, y la Direccion de Auxilio Judicial (DAJ) gestiona la investigacion criminal. El Sistema Nacional para la Prevencion, Mitigacion y Atencion de Desastres (SINAPRED), respaldado por el INETER, coordina la respuesta ante los 19 volcanes activos y los eventos climaticos extremos de la costa caribe.'
                : "Nicaragua is a republic divided into 15 departments, 2 autonomous regions (RACCN and RACCS), and 153 municipalities. The National Police (PN), with approximately 16,000 officers, is the primary police force under the Ministry of Interior (MIGOB). The Nicaraguan Army (EN, ~12,000 troops) organized in 7 military regions supports citizen security operations, border control, and disaster response. The National Police Intelligence Directorate (DIPOL) conducts intelligence operations, and the Judicial Aid Directorate (DAJ) manages criminal investigation. The National System for Disaster Prevention, Mitigation, and Response (SINAPRED), backed by INETER, coordinates response across 19 active volcanoes and extreme weather events on the Caribbean coast."}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Nicaragua protege aproximadamente 6.9 millones de ciudadanos. Managua (capital, ~1.4 millones) es el principal centro urbano; Leon (~200,000), Matagalpa, Masaya y Chinandega son los centros regionales mas relevantes. Puerto Corinto en el Pacifico es el principal puerto del pais con mas de 2 millones de toneladas anuales; Puerto Cabezas (Bilwi) y Bluefields atienden la costa caribe. Las Zonas Francas industriales concentran manufactura textil en los corredores de Managua y Tipitapa. Nicaragua enfrenta desafios de seguridad complejos: transito de cocaina por la costa caribe hacia Mexico y Estados Unidos, fronteras activas con Honduras al norte y Costa Rica al sur, y alta vulnerabilidad a erupciones volcanicas, terremotos e inundaciones. La Ley 831 de Proteccion de Datos Personales (2021) regula el tratamiento de informacion en plataformas de seguridad publica.'
                : "Nicaragua protects approximately 6.9 million citizens. Managua (capital, ~1.4 million) is the main urban center; León (~200,000), Matagalpa, Masaya, and Chinandega are the main regional centers. Puerto Corinto on the Pacific is the country's main port with over 2 million tons per year; Puerto Cabezas (Bilwi) and Bluefields serve the Caribbean coast. Industrial Zonas Francas concentrate textile manufacturing in the Managua and Tipitapa corridors. Nicaragua faces complex security challenges: cocaine transit through the Caribbean coast toward Mexico and the United States, active borders with Honduras to the north and Costa Rica to the south, and high vulnerability to volcanic eruptions, earthquakes, and flooding. Law 831 on Personal Data Protection (2021) regulates data handling in public safety platforms."}
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
                ? 'Desafios Clave para Municipios y Departamentos de Nicaragua'
                : 'Key Challenges for Nicaraguan Municipalities and Departments'}
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
                ? '¿Como Funciona una Plataforma Unificada para Nicaragua?'
                : 'How a Unified Platform Works for Nicaragua'}
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
                ? 'Fragmentado vs Plataforma Unificada para Municipios Nicaraguenses'
                : 'Fragmented vs Unified Platform for Nicaraguan Municipalities'}
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
                  { href: '/resources/public-safety-software-honduras', label: es ? 'Seguridad Publica — Honduras' : 'Public Safety Software — Honduras' },
                  { href: '/resources/public-safety-software-guatemala', label: es ? 'Seguridad Publica — Guatemala' : 'Public Safety Software — Guatemala' },
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
                ? 'Preguntas Sobre Software de Seguridad Publica en Nicaragua'
                : 'Questions About Public Safety Software in Nicaragua'}
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
                  href: '/resources/public-safety-software-honduras',
                  en: 'Public Safety Software for Honduras',
                  es: 'Software de Seguridad Publica para Honduras',
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
                  href: '/resources/what-is-cad-dispatch-software',
                  en: 'What Is CAD Dispatch Software?',
                  es: '¿Que es el software de despacho CAD?',
                },
                {
                  href: '/resources/what-is-a-real-time-crime-center',
                  en: 'What Is a Real-Time Crime Center?',
                  es: '¿Que es un Centro de Crimen en Tiempo Real?',
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
          h2={es ? 'Transforma la Seguridad Publica de Tu Municipio o Departamento en Nicaragua' : 'Transform Public Safety in Your Nicaraguan Municipality or Department'}
          subtitle={es
            ? 'Conoce como KabatOne integra videovigilancia, despacho de emergencias, GIS y gestion de incidentes en una sola plataforma operativa para municipios nicaraguenses — desde Managua y Leon hasta cabeceras departamentales y las regiones autonomas RACCN y RACCS.'
            : 'See how KabatOne unifies video surveillance, emergency dispatch, GIS, and incident management into one operational platform for Nicaraguan municipalities — from Managua and León to departmental capitals and the RACCN and RACCS autonomous regions.'}
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
