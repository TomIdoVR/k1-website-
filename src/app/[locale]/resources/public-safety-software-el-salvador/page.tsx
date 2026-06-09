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
  return generatePageMetadata('publicSafetySoftwareElSalvador', locale)
}

export default async function PublicSafetySoftwareElSalvadorPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-el-salvador/`
    : `${baseUrl}/resources/public-safety-software-el-salvador/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Publica — El Salvador' : 'Public Safety Software — El Salvador', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: "¿Como funciona el sistema de emergencias 911 de El Salvador?",
      answer: "El sistema nacional de emergencias 911 de El Salvador opera bajo la coordinacion de la Policia Nacional Civil (PNC) y el Centro de Operaciones de Emergencia Nacional (COEN) de la Direccion General de Proteccion Civil (DGPC). El 911 integra despacho policial, ambulancias y bomberos. En el contexto del Estado de Excepcion desde marzo de 2022, el sistema ha aumentado su volumen de llamadas relacionadas con reportes de pandillas y actividad sospechosa. Una plataforma como KabatOne se integra directamente con la infraestructura ONVIF/RTSP del 911, anadiendo CAD estructurado, GIS en tiempo real y fusion de video sobre la infraestructura existente.",
    },
    {
      question: "¿Como se financia la tecnologia de seguridad publica en El Salvador?",
      answer: "El financiamiento proviene del presupuesto general del Ministerio de Justicia y Seguridad Publica, la Secretaria de Innovacion y el Fondo de Actividades Especiales de la PNC. Los cooperantes internacionales incluyen USAID, el Banco Interamericano de Desarrollo (BID), la Comision Europea y la cooperacion de Estados Unidos via FMF (Foreign Military Financing). Las adquisiciones de tecnologia se rigen por la LACAP (Ley de Adquisiciones y Contrataciones de la Administracion Publica) y su portal electronico Comprasal, que publica licitaciones publicas abiertas a empresas extranjeras con representante local.",
    },
    {
      question: "¿Que es el COEN y como coordina emergencias en El Salvador?",
      answer: "El Centro de Operaciones de Emergencia Nacional (COEN), bajo la Direccion General de Proteccion Civil (DGPC), coordina la respuesta a emergencias naturales como erupciones volcanicas (Santa Ana/Ilamatepec, San Miguel/Chaparrastique), terremotos y temporadas de lluvias. El SNET (Servicio Nacional de Estudios Territoriales) provee alertas sismicas y volcanicas en tiempo real. KabatOne integra las alertas del SNET y COEN con video municipal, despacho PNC-FAES y posiciones de unidades en un unico entorno operativo, eliminando la brecha entre respuesta policial y gestion de desastres.",
    },
    {
      question: "¿Puede KabatOne integrarse con los sistemas de videovigilancia existentes en El Salvador?",
      answer: "Si. KabatOne integra cualquier camara ONVIF/RTSP sin reemplazo de hardware. Las camaras municipales de San Salvador, Santa Ana, San Miguel y Sonsonate se conectan directamente a la plataforma. Camaras de la CEPA (Comision Ejecutiva Portuaria Autonoma) en Puerto Acajutla y Puerto La Union, LPR en accesos al Aeropuerto Internacional SAL, y sensores ambientales del SNET tambien se integran sin cambiar infraestructura.",
    },
    {
      question: "¿Como apoya KabatOne la coordinacion entre PNC, FAES y municipios durante el Estado de Excepcion?",
      answer: "K-Safety provee un mapa GIS compartido donde operadores municipales, la PNC (~28,000 agentes) y la FAES (~25,000 efectivos) ven posiciones de unidades, incidentes activos y feeds de video en tiempo real. K-Dispatch unifica la recepcion 911 en un solo registro de incidente, y K-Video centraliza camaras municipales, de infraestructura critica y de puertos en un VMS con busqueda por zona, fecha y tipo de evento. Esto reduce el tiempo de coordinacion en operaciones multi-fuerza que son criticas durante el Estado de Excepcion.",
    },
    {
      question: "¿Como se alinea KabatOne con la LACAP de El Salvador?",
      answer: "KabatOne se comercializa a traves de distribuidores e integradores locales conforme a la LACAP (Decreto 868) y su plataforma electronica Comprasal. La arquitectura modular permite licitar por componente (K-Video, K-Dispatch, K-Safety) o como plataforma unificada, adaptandose a los rangos presupuestarios municipales y del Ministerio de Justicia y Seguridad Publica, y a los requisitos tecnicos de licitaciones publicas.",
    },
  ] : [
    {
      question: "How does El Salvador's 911 emergency system work?",
      answer: "El Salvador's national 911 emergency system operates under the coordination of the National Civil Police (PNC) and the National Emergency Operations Center (COEN) under the General Directorate of Civil Protection (DGPC). The 911 integrates police dispatch, ambulances, and fire services. Under the State of Exception since March 2022, call volumes related to gang activity reports have increased significantly. A unified platform like KabatOne integrates directly with the existing ONVIF/RTSP infrastructure, adding structured CAD, real-time GIS, and video analytics on top of cameras already installed.",
    },
    {
      question: "How does El Salvador fund public safety technology?",
      answer: "Funding comes from the general budget of the Ministry of Justice and Public Security, the Secretariat for Innovation, and the PNC's Special Activities Fund. International donors include USAID, the Inter-American Development Bank (IDB), the European Commission, and US Foreign Military Financing (FMF). Technology procurement is governed by LACAP (Government Procurement Law, Decree 868) and its Comprasal e-procurement portal, which publishes public tenders open to foreign firms with a registered local representative.",
    },
    {
      question: "What is COEN and how does it coordinate emergencies in El Salvador?",
      answer: "The National Emergency Operations Center (COEN), under the General Directorate of Civil Protection (DGPC), coordinates response to natural emergencies including volcanic eruptions (Santa Ana/Ilamatepec, San Miguel/Chaparrastique), earthquakes, and rainy season events. SNET (National Territorial Studies Service) provides real-time seismic and volcanic alerts. KabatOne integrates SNET and COEN alerts with municipal video, PNC-FAES dispatch, and unit positions in a single operational environment, closing the gap between police response and disaster management.",
    },
    {
      question: "Can KabatOne integrate with existing camera infrastructure in El Salvador?",
      answer: "Yes. KabatOne integrates any ONVIF/RTSP camera without hardware replacement. Municipal cameras in San Salvador, Santa Ana, San Miguel, and Sonsonate connect directly to the platform. CEPA (Executive Port Authority) cameras at Puerto Acajutla and Puerto La Unión, LPR readers at SAL International Airport access points, and SNET environmental sensors also integrate without changing infrastructure.",
    },
    {
      question: "How does KabatOne support PNC, FAES, and municipal coordination during the State of Exception?",
      answer: "K-Safety provides a shared GIS map where municipal operators, the PNC (~28,000 officers), and the FAES (~25,000 troops) see unit positions, active incidents, and live video feeds in real time. K-Dispatch unifies 911 intake into one incident record, and K-Video centralizes municipal, critical infrastructure, and port cameras in a searchable VMS by zone, date, and event type. This reduces coordination time in multi-force operations that are critical during the State of Exception.",
    },
    {
      question: "How does KabatOne align with El Salvador's LACAP procurement law?",
      answer: "KabatOne is marketed through local distributors and integrators under LACAP (Decree 868) and its Comprasal e-procurement portal. The modular architecture allows tendering by component (K-Video, K-Dispatch, K-Safety) or as a unified platform, adapting to municipal and Ministry of Justice and Public Security budget ranges and the technical specifications of public tenders open to foreign firms.",
    },
  ]

  const artSchema = articleSchema(
    es ? 'Software de Seguridad Publica para Municipios y Departamentos en El Salvador' : 'Public Safety Software for El Salvador: Government Guide',
    es
      ? 'Software de seguridad publica para municipios, departamentos y ciudades salvadorenas — conectando videovigilancia, despacho de emergencias, GIS y gestion de incidentes en una sola plataforma operativa.'
      : "Public safety software for Salvadoran municipalities, departments, and cities — connecting surveillance, emergency dispatch, GIS, and incident management in one unified operational platform.",
    pageUrl,
    '2026-06-03'
  )

  const comparisonRows = es ? [
    { feature: 'Video', fragmented: 'Camaras municipales de San Salvador, Santa Ana y San Miguel en plataformas aisladas sin VMS compartido con la PNC ni el COEN', unified: 'VMS unificado, todas las camaras buscables por zona, fecha y tipo de evento' },
    { feature: 'Despacho de emergencias', fragmented: '911 como canal unico pero sin registro compartido entre PNC, FAES, Bomberos y Cruz Roja', unified: 'Registro unico de incidente que conecta PNC, FAES, COEN, Bomberos y Cruz Roja' },
    { feature: 'Coordinacion PNC / FAES', fragmented: 'Solo radio, sin pantalla ni mapa compartido entre fuerzas durante operaciones del Estado de Excepcion', unified: 'Mapa GIS compartido con posiciones de unidades en tiempo real' },
    { feature: 'Respuesta a desastres DGPC/SNET', fragmented: 'Alertas volcanicas y sismicas del SNET separadas de la red policial y municipal', unified: 'Alertas SNET/COEN integradas con video y despacho en el mismo entorno operativo' },
    { feature: 'Reportes para el Ministerio de Seguridad', fragmented: 'Exportacion manual de datos incompletos por sistema y por departamento', unified: 'KPIs automatizados de tiempos de respuesta, incidentes por zona y cobertura de camaras' },
    { feature: 'Dependencia tecnologica', fragmented: 'Hardware propietario por proveedor y por municipio', unified: 'ONVIF/RTSP, cualquier marca de camara ya instalada' },
  ] : [
    { feature: 'Video', fragmented: "Municipal cameras in San Salvador, Santa Ana, and San Miguel on isolated platforms with no shared VMS with PNC or COEN", unified: 'Unified VMS, all cameras searchable by zone, date, and event type' },
    { feature: 'Emergency dispatch', fragmented: '911 as single channel but no shared incident record between PNC, FAES, Bomberos, and Cruz Roja', unified: 'Single incident record bridging PNC, FAES, COEN, Bomberos, and Cruz Roja' },
    { feature: 'PNC / FAES coordination', fragmented: 'Radio-only, no shared screen or map between forces during State of Exception operations', unified: 'Shared GIS map with real-time unit positions' },
    { feature: 'DGPC/SNET disaster response', fragmented: 'SNET volcanic and seismic alerts disconnected from police and municipal network', unified: 'SNET/COEN alerts integrated with video and dispatch in the same operational environment' },
    { feature: 'Ministry of Security reporting', fragmented: 'Manual export of incomplete data per system and per department', unified: 'Automated KPIs for response times, zone-level incident counts, and camera coverage' },
    { feature: 'Technology lock-in', fragmented: 'Proprietary hardware per vendor and per municipality', unified: 'ONVIF/RTSP, any camera brand already installed' },
  ]

  const workflowSteps = es ? [
    { n: '01', title: 'Video unificado', text: 'Todas las camaras — municipales de San Salvador, Santa Ana, San Miguel y Sonsonate, camaras CEPA en Puerto Acajutla y La Union — en una sola interfaz VMS con busqueda por zona, fecha y tipo de evento.' },
    { n: '02', title: 'Centro de despacho unificado', text: 'Recepcion 911, clasificacion de incidentes y asignacion de unidades desde una sola plataforma CAD. Registro unico de incidente compartido entre PNC, FAES, Bomberos y Cruz Roja.' },
    { n: '03', title: 'GIS en tiempo real', text: 'Posiciones de PNC, FAES, Bomberos y unidades de Proteccion Civil en un solo mapa operativo compartido. Vista conjunta entre comisaria municipal y centro de mando departamental.' },
    { n: '04', title: 'Fusion de sensores', text: 'Lectores LPR en accesos al Aeropuerto SAL y puertos, alertas sismicas y volcanicas del SNET, y botones de panico municipales unificados con video en el mismo entorno operativo.' },
    { n: '05', title: 'Reportes para el Ministerio de Seguridad', text: 'KPIs automatizados de tiempos de respuesta, incidentes por departamento y cobertura de camaras para reportes del Ministerio de Justicia y Seguridad Publica — sin exportacion manual.' },
  ] : [
    { n: '01', title: 'Unified video', text: "All cameras — municipal in San Salvador, Santa Ana, San Miguel, and Sonsonate, CEPA cameras at Puerto Acajutla and La Unión — on one VMS interface with search by zone, date, and event type." },
    { n: '02', title: 'Unified dispatch center', text: 'Single 911 intake, incident classification, and unit assignment from one CAD platform. Shared incident record bridging PNC, FAES, Bomberos, and Cruz Roja.' },
    { n: '03', title: 'Real-time GIS', text: "Positions of PNC, FAES, Bomberos, and Civil Protection units on one shared operational map — joint view between municipal comisaría and departmental command center." },
    { n: '04', title: 'Sensor fusion', text: "LPR readers at SAL Airport access points and ports, SNET seismic and volcanic alerts, and municipal panic buttons unified with video in the same operational environment." },
    { n: '05', title: 'Ministry of Security reporting', text: 'Automated KPIs for response times, department-level incident counts, and camera coverage for Ministry of Justice and Public Security reporting — no manual export.' },
  ]

  const challengeCards = es ? [
    { icon: '🏛️', title: 'Coordinacion PNC-FAES durante el Estado de Excepcion', text: 'Desde marzo de 2022, El Salvador opera bajo el Estado de Excepcion con despliegues conjuntos de la PNC (~28,000 agentes) y la FAES (~25,000 efectivos) en los 14 departamentos. La coordinacion en tiempo real entre fuerzas policiales y militares requiere un mapa operativo compartido, video centralizado y registros de incidentes unificados — capacidades que los sistemas fragmentados no pueden proveer.' },
    { icon: '📞', title: 'Sistema 911 sin integracion CAD municipal', text: 'El sistema nacional 911 opera con centros de atencion pero la integracion con policia municipal, bomberos y Cruz Roja varia entre departamentos. Sin un registro comun de incidente, los eventos multijurisdiccionales generan duplicacion de respuesta. Las operaciones del Estado de Excepcion incrementaron el volumen de llamadas sin aumentar la capacidad de coordinacion entre agencias.' },
    { icon: '🌋', title: 'Vulnerabilidad volcanica y sismica sin plataforma integrada', text: 'El Salvador tiene cinco volcanes activos, incluyendo Santa Ana (Ilamatepec, 2,381 m) y San Miguel (Chaparrastique). El SNET monitorea actividad sismica y volcanica pero opera separado de la red policial y municipal, fragmentando la respuesta cuando una alerta requiere evacuar zonas de alta densidad simultaneamente a operaciones de seguridad activas.' },
    { icon: '📷', title: 'Camaras municipales sin VMS central ni integracion con la PNC', text: 'San Salvador, Santa Ana, San Miguel y Sonsonate operan CCTV municipal sin integracion entre si ni con los sistemas de la PNC. La CEPA administra camaras en Puerto Acajutla y Puerto La Union de forma independiente. Sin un VMS unificado, los operadores acceden a multiples consolas, ralentizando la respuesta a incidentes que cruzan jurisdicciones.' },
  ] : [
    { icon: '🏛️', title: 'PNC-FAES coordination during the State of Exception', text: "Since March 2022, El Salvador has operated under the State of Exception with joint deployments of the PNC (~28,000 officers) and FAES (~25,000 troops) across all 14 departments. Real-time coordination between police and military forces requires a shared operational map, centralized video, and unified incident records — capabilities that fragmented systems cannot provide." },
    { icon: '📞', title: '911 system without integrated municipal CAD', text: "The national 911 system operates call centers, but integration with municipal police, fire services, and Cruz Roja varies across departments. Without a shared incident record, multi-jurisdictional events generate duplicate responses. State of Exception operations increased call volumes without increasing inter-agency coordination capacity." },
    { icon: '🌋', title: 'Volcanic and seismic vulnerability without integrated platform', text: "El Salvador has five active volcanoes, including Santa Ana (Ilamatepec, 2,381 m) and San Miguel (Chaparrastique). SNET monitors seismic and volcanic activity but operates separately from the police and municipal network, fragmenting response when an alert requires evacuating high-density zones simultaneously with active security operations." },
    { icon: '📷', title: 'Municipal cameras without central VMS or PNC integration', text: "San Salvador, Santa Ana, San Miguel, and Sonsonate each operate municipal CCTV without integration between them or with PNC systems. CEPA manages cameras at Puerto Acajutla and Puerto La Unión independently. Without a unified VMS, operators access multiple consoles, slowing response to incidents that cross jurisdictions." },
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
            {es ? 'Software de Seguridad Publica — El Salvador' : 'Public Safety Software — El Salvador'}
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
              ? 'Software de Seguridad Publica para El Salvador'
              : 'Public Safety Software for El Salvador'}
          </h1>
          <p style={{
            fontSize: '18px', fontWeight: 300, color: 'var(--dim)',
            lineHeight: 1.75, maxWidth: '720px',
          }}>
            {es
              ? 'Guia para municipios salvadorenos, gobernaciones departamentales y el sistema nacional 911 que evaluan plataformas unificadas de seguridad publica: videovigilancia, despacho de emergencias, GIS y gestion de incidentes.'
              : "Guide for Salvadoran municipalities, departmental governments, and the national 911 system evaluating unified public safety platforms — video surveillance, emergency dispatch, GIS, and incident management."}
          </p>
        </section>

        {/* -- SECTION: El Salvador Public Safety Structure -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? 'La Estructura de Seguridad Publica en El Salvador'
                : "El Salvador's Public Safety Structure"}
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'El Salvador es una republica unitaria dividida en 14 departamentos y 262 municipios. La Policia Nacional Civil (PNC), con aproximadamente 28,000 agentes, es la fuerza policial principal bajo el Ministerio de Justicia y Seguridad Publica. La Fuerza Armada de El Salvador (FAES, ~25,000 efectivos) conduce operaciones conjuntas de seguridad ciudadana desde la declaracion del Estado de Excepcion en marzo de 2022. Unidades especializadas incluyen el GRP (Grupo de Reaccion Policial), el CAT (Centro Anti-Terrorismo), la UEA (Unidad de Emergencias Antiterroristas) y el GOES (Grupo de Operaciones Especiales). El Centro de Confinamiento del Terrorismo (CECOT), abierto en febrero de 2023 con capacidad para mas de 40,000 reclusos, es emblema del modelo de seguridad del gobierno.'
                : "El Salvador is a unitary republic divided into 14 departments and 262 municipalities. The National Civil Police (PNC), with approximately 28,000 officers, is the main police force under the Ministry of Justice and Public Security. The Armed Forces of El Salvador (FAES, ~25,000 troops) conduct joint citizen security operations since the State of Exception declared in March 2022. Specialized units include the GRP (Police Reaction Group), CAT (Counter-Terrorism Center), UEA (Anti-Terrorism Emergency Unit), and GOES (Special Operations Group). The Center for Terrorism Confinement (CECOT), opened February 2023 with capacity for over 40,000 inmates, is emblematic of the government's security model."}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'El Salvador protege aproximadamente 6.3 millones de ciudadanos en el pais, con una diaspora de mas de 2 millones en Estados Unidos. San Salvador (capital, ~600,000 en ciudad, ~2.5M en area metropolitana) concentra la mayor densidad de camaras y centros de mando. El pais enfrenta desafios de seguridad complejos: narco-transito a traves del corredor del Pacifico, monitoreo de redes residuales de maras, y alta vulnerabilidad a terremotos y erupciones volcanicas (cinco volcanes activos). Puerto Acajutla en el Pacifico es el principal puerto de carga del pais, administrado por la CEPA. El aeropuerto internacional SAL (Monsenor Oscar Arnulfo Romero) es hub regional centroamericano. La LACAP rige la contratacion publica y el portal Comprasal publica todas las licitaciones.'
                : "El Salvador protects approximately 6.3 million citizens domestically, with a diaspora of over 2 million in the United States. San Salvador (capital, ~600,000 city, ~2.5M metro area) concentrates the highest density of cameras and command centers. The country faces complex security challenges: narcotics transit through the Pacific corridor, monitoring of residual gang networks, and high vulnerability to earthquakes and volcanic eruptions (five active volcanoes). Puerto Acajutla on the Pacific is the main cargo port, managed by CEPA. SAL International Airport (Monseñor Óscar Arnulfo Romero) is a Central American regional hub. LACAP governs public procurement and the Comprasal portal publishes all tenders."}
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
                ? 'Desafios Clave para Municipios y Departamentos de El Salvador'
                : 'Key Challenges for Salvadoran Municipalities and Departments'}
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
                ? '¿Como Funciona una Plataforma Unificada para El Salvador?'
                : 'How a Unified Platform Works for El Salvador'}
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
                ? 'Fragmentado vs Plataforma Unificada para Municipios Salvadorenos'
                : 'Fragmented vs Unified Platform for Salvadoran Municipalities'}
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
                  { href: '/resources/what-is-a-real-time-crime-center', label: es ? 'Centro de Crimen en Tiempo Real' : 'What Is a Real-Time Crime Center' },
                  { href: '/resources/public-safety-software-honduras', label: es ? 'Seguridad Publica — Honduras' : 'Public Safety Software — Honduras' },
                  { href: '/resources/public-safety-software-guatemala', label: es ? 'Seguridad Publica — Guatemala' : 'Public Safety Software — Guatemala' },
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
                ? 'Preguntas Sobre Software de Seguridad Publica en El Salvador'
                : 'Questions About Public Safety Software in El Salvador'}
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
                  href: '/resources/public-safety-software-nicaragua',
                  en: 'Public Safety Software for Nicaragua',
                  es: 'Software de Seguridad Publica para Nicaragua',
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
          h2={es ? 'Transforma la Seguridad Publica de Tu Municipio o Departamento en El Salvador' : 'Transform Public Safety in Your Salvadoran Municipality or Department'}
          subtitle={es
            ? 'Conoce como KabatOne integra videovigilancia, despacho de emergencias, GIS y gestion de incidentes en una sola plataforma operativa para municipios salvadorenos — desde San Salvador y Santa Ana hasta cabeceras departamentales.'
            : 'See how KabatOne unifies video surveillance, emergency dispatch, GIS, and incident management into one operational platform for Salvadoran municipalities — from San Salvador and Santa Ana to departmental capitals.'}
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
