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
  return generatePageMetadata('publicSafetySoftwareHonduras', locale)
}

export default async function PublicSafetySoftwareHondurasPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-honduras/`
    : `${baseUrl}/resources/public-safety-software-honduras/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Publica — Honduras' : 'Public Safety Software — Honduras', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: "¿Como funciona el Sistema Nacional de Emergencias 911 de Honduras?",
      answer: "El Sistema Nacional de Emergencias 911 (SNE 911) de Honduras opera centros de atencion de llamadas 24/7 con aproximadamente 250 operadores en tres turnos. El centro incluye sala de videovigilancia, centro de llamadas, area de despacho y enlaces, centro de datos y sala de video forense. Desde 2020, el SNE 911 ha expandido la videovigilancia CCTV a ciudades como Choluteca, Nacaome y San Lorenzo, utilizando conectividad inalambrica RADWIN para monitoreo centralizado. Una plataforma unificada como KabatOne se integra directamente con la infraestructura ONVIF/RTSP del SNE 911, anadiendo CAD estructurado, GIS en tiempo real y analitica de video sobre la infraestructura existente.",
    },
    {
      question: "¿Como financia Honduras tecnologia de seguridad publica?",
      answer: "El financiamiento combina presupuesto ordinario de la Secretaria de Seguridad, la Secretaria de Defensa Nacional y fondos municipales. Los principales cooperantes incluyen USAID/ICITAP, el Banco Interamericano de Desarrollo (BID), el Banco Centroamericano de Integracion Economica (BCIE) y la Comision Europea. Las licitaciones de tecnologia se rigen por la Ley de Contratacion del Estado (Decreto 148.5) que otorga trato nacional a empresas extranjeras que actuen a traves de un representante local registrado.",
    },
    {
      question: "¿Que es FUSINA y como coordina la seguridad en Honduras?",
      answer: "FUSINA (Fuerza Nacional de Seguridad Interinstitucional) fue creada en 2014 para coordinar las responsabilidades de la Policia Nacional de Honduras (PNH), la Policia Militar del Orden Publico (PMOP), la Direccion Nacional de Investigacion e Inteligencia, el Ministerio Publico y el sistema judicial. FUSINA despliega 4,400 efectivos de las Fuerzas Armadas, la PNH y agencias civiles en los 18 departamentos del pais. KabatOne proporciona el cuadro operativo compartido que FUSINA necesita: posiciones de unidades PNH, PMOP y Ejercito en un solo mapa GIS, video centralizado de camaras municipales y registros unificados de incidentes.",
    },
    {
      question: "¿Puede KabatOne integrarse con la infraestructura de camaras existente en Honduras?",
      answer: "Si. KabatOne integra cualquier camara ONVIF/RTSP sin reemplazo de hardware. Las camaras del SNE 911 en Tegucigalpa, San Pedro Sula, Choluteca y La Ceiba se conectan directamente a la plataforma. Los lectores LPR en Puerto Cortes y la Empresa Nacional Portuaria, paneles de control de acceso y sensores ambientales de COPECO tambien se integran sin cambiar infraestructura.",
    },
    {
      question: "¿Como apoya KabatOne la coordinacion entre PNH, PMOP, TIGRES y municipios?",
      answer: "K-Safety provee un mapa GIS compartido donde operadores municipales, la PNH (~15,000 agentes), la PMOP (~5,000 efectivos) y TIGRES ven posiciones de unidades, incidentes activos y feeds de video en tiempo real. K-Dispatch unifica la recepcion 911 en un solo registro de incidente, y K-Video centraliza camaras municipales y de infraestructura critica en un VMS con busqueda por zona, fecha y tipo de evento. Esto reduce el tiempo de coordinacion interinstitucional en incidentes de alta complejidad como narcotransito, extorsion y desastres naturales.",
    },
    {
      question: "¿Como se alinea KabatOne con la Ley de Contratacion del Estado de Honduras?",
      answer: "KabatOne se comercializa a traves de distribuidores e integradores locales conforme al Decreto 148.5 (Ley de Contratacion del Estado). La arquitectura modular permite licitar por componente (K-Video, K-Dispatch, K-Safety) o como plataforma unificada, adaptandose a los rangos presupuestarios municipales y de la Secretaria de Seguridad, y a los requisitos tecnicos de licitaciones publicas que otorgan trato nacional a empresas extranjeras con representante local.",
    },
  ] : [
    {
      question: "How does Honduras' Sistema Nacional de Emergencias 911 work?",
      answer: "Honduras' Sistema Nacional de Emergencias 911 (SNE 911) operates 24/7 call centers with approximately 250 operators across three shifts. The center includes a video surveillance room, call center, dispatch and liaison area, data center, and forensic video room. Since 2020, the SNE 911 has expanded CCTV surveillance to cities including Choluteca, Nacaome, and San Lorenzo using RADWIN wireless connectivity for centralized monitoring. A unified platform like KabatOne integrates directly with the SNE 911's existing ONVIF/RTSP infrastructure, adding structured CAD, real-time GIS, and video analytics on top of cameras already installed.",
    },
    {
      question: "How does Honduras fund public safety technology?",
      answer: "Funding combines the ordinary budget of the Secretariat of Security, the Secretariat of National Defense, and municipal funds. Key donors include USAID/ICITAP, the Inter-American Development Bank (IDB), the Central American Bank for Economic Integration (BCIE), and the European Commission. Technology tenders are governed by the Government Procurement Law (Decree 148.5), which grants national treatment to foreign firms acting through a registered local agent.",
    },
    {
      question: "What is FUSINA and how does it coordinate security in Honduras?",
      answer: "FUSINA (National Interinstitutional Security Force) was created in 2014 to coordinate the overlapping responsibilities of the Honduran National Police (HNP), the Military Police of Public Order (PMOP), the National Directorate of Investigation and Intelligence, the Public Ministry, and the court system. FUSINA deploys 4,400 personnel from the Armed Forces, HNP, and civilian agencies across all 18 departments. KabatOne provides the shared operational picture FUSINA needs: HNP, PMOP, and Army unit positions on one GIS map, centralized video from municipal cameras, and unified incident records.",
    },
    {
      question: "Can KabatOne integrate with existing camera infrastructure in Honduras?",
      answer: "Yes. KabatOne integrates any ONVIF/RTSP camera without hardware replacement. SNE 911 cameras in Tegucigalpa, San Pedro Sula, Choluteca, and La Ceiba connect directly to the platform. LPR readers at Puerto Cortés and the Empresa Nacional Portuaria, access control panels, and COPECO environmental sensors also integrate without changing infrastructure.",
    },
    {
      question: "How does KabatOne support coordination between HNP, PMOP, TIGRES, and municipalities?",
      answer: "K-Safety provides a shared GIS map where municipal operators, the HNP (~15,000 officers), PMOP (~5,000 troops), and TIGRES see unit positions, active incidents, and live video feeds in real time. K-Dispatch unifies 911 intake into one incident record, and K-Video centralizes municipal and critical infrastructure cameras in a searchable VMS by zone, date, and event type. This reduces inter-agency coordination time in high-complexity incidents such as narcotraffic, extortion, and natural disaster response.",
    },
    {
      question: "How does KabatOne align with Honduras' Government Procurement Law?",
      answer: "KabatOne is marketed through local distributors and integrators under Decree 148.5 (Government Procurement Law). The modular architecture allows tendering by component (K-Video, K-Dispatch, K-Safety) or as a unified platform, adapting to municipal and Secretariat of Security budget ranges and the technical specifications of public tenders that grant national treatment to foreign firms with a registered local representative.",
    },
  ]

  const artSchema = articleSchema(
    es ? 'Software de Seguridad Publica para Municipios y Departamentos en Honduras' : 'Public Safety Software for Honduras: Government Guide',
    es
      ? 'Software de seguridad publica para municipios, departamentos y ciudades hondurenas — conectando videovigilancia, despacho de emergencias, GIS y gestion de incidentes en una sola plataforma operativa.'
      : "Public safety software for Honduran municipalities, departments, and cities — connecting surveillance, emergency dispatch, GIS, and incident management in one unified operational platform.",
    pageUrl,
    '2026-05-26'
  )

  const comparisonRows = es ? [
    { feature: 'Video', fragmented: 'Camaras del SNE 911 en Tegucigalpa y San Pedro Sula, sistemas municipales de Choluteca y La Ceiba en plataformas aisladas sin VMS compartido', unified: 'VMS unificado, todas las camaras buscables por zona, fecha y tipo de evento' },
    { feature: 'Despacho de emergencias', fragmented: '911 como canal unico pero sin registro compartido entre PNH, PMOP, Bomberos y Cruz Roja', unified: 'Registro unico de incidente que conecta PNH, PMOP, FUSINA, Bomberos y Cruz Roja' },
    { feature: 'Coordinacion PNH / PMOP / FUSINA', fragmented: 'Solo radio, sin pantalla ni mapa compartido entre fuerzas', unified: 'Mapa GIS compartido con posiciones de unidades en tiempo real' },
    { feature: 'Respuesta a desastres COPECO', fragmented: 'Sistema de alertas separado de la red policial y municipal', unified: 'Alertas COPECO integradas con video y despacho en el mismo entorno operativo' },
    { feature: 'Reportes para Secretaria de Seguridad', fragmented: 'Exportacion manual de datos incompletos por sistema y por departamento', unified: 'KPIs automatizados de tiempos de respuesta, incidentes por zona y cobertura de camaras' },
    { feature: 'Dependencia tecnologica', fragmented: 'Hardware propietario por proveedor y por municipio', unified: 'ONVIF/RTSP, cualquier marca de camara ya instalada' },
  ] : [
    { feature: 'Video', fragmented: "SNE 911 cameras in Tegucigalpa and San Pedro Sula, municipal systems in Choluteca and La Ceiba on isolated platforms with no shared VMS", unified: 'Unified VMS, all cameras searchable by zone, date, and event type' },
    { feature: 'Emergency dispatch', fragmented: '911 as single channel but no shared incident record between HNP, PMOP, Bomberos, and Cruz Roja', unified: 'Single incident record bridging HNP, PMOP, FUSINA, Bomberos, and Cruz Roja' },
    { feature: 'HNP / PMOP / FUSINA coordination', fragmented: 'Radio-only, no shared screen or map between forces', unified: 'Shared GIS map with real-time unit positions' },
    { feature: 'COPECO disaster response', fragmented: 'Separate alert system disconnected from police and municipal network', unified: 'COPECO alerts integrated with video and dispatch in the same operational environment' },
    { feature: 'Secretariat of Security reporting', fragmented: 'Manual export of incomplete data per system and per department', unified: 'Automated KPIs for response times, zone-level incident counts, and camera coverage' },
    { feature: 'Technology lock-in', fragmented: 'Proprietary hardware per vendor and per municipality', unified: 'ONVIF/RTSP, any camera brand already installed' },
  ]

  const workflowSteps = es ? [
    { n: '01', title: 'Video unificado', text: 'Todas las camaras — SNE 911 de Tegucigalpa, sistemas municipales de San Pedro Sula, Choluteca, La Ceiba y Comayagua — en una sola interfaz VMS con busqueda por zona, fecha y tipo de evento.' },
    { n: '02', title: 'Centro de despacho unificado', text: 'Recepcion 911, clasificacion de incidentes y asignacion de unidades desde una sola plataforma CAD. Tiempos de despacho promedio inferiores a 90 segundos.' },
    { n: '03', title: 'GIS en tiempo real', text: 'Posiciones de PNH, PMOP, TIGRES, Bomberos y unidades de COPECO en un solo mapa operativo compartido. Vista conjunta entre comisaria y centro de mando departamental.' },
    { n: '04', title: 'Fusion de sensores', text: 'Lectores LPR en Puerto Cortes y la Empresa Nacional Portuaria, botones de panico y alertas ambientales de COPECO unificados con video en el mismo entorno operativo — sin multiples pantallas ni sistemas fragmentados.' },
    { n: '05', title: 'Reportes para la Secretaria de Seguridad', text: 'KPIs automatizados de tiempos de respuesta, incidentes por departamento y cobertura de camaras para reportes de la Secretaria de Seguridad — sin exportacion manual.' },
  ] : [
    { n: '01', title: 'Unified video', text: "All cameras — SNE 911 in Tegucigalpa, municipal systems in San Pedro Sula, Choluteca, La Ceiba, and Comayagua — on one VMS interface with search by zone, date, and event type." },
    { n: '02', title: 'Unified dispatch center', text: '911 intake, incident classification, and unit assignment from one CAD platform. Average dispatch time under 90 seconds.' },
    { n: '03', title: 'Real-time GIS', text: "Positions of HNP, PMOP, TIGRES, Bomberos, and COPECO units on one shared operational map — joint view between comisaría and departmental command." },
    { n: '04', title: 'Sensor fusion', text: "LPR readers at Puerto Cortés and the Empresa Nacional Portuaria, panic buttons, and COPECO environmental alerts unified with video in the same operational environment — no multiple screens or fragmented systems." },
    { n: '05', title: 'Secretariat of Security reporting', text: 'Automated KPIs for response times, department-level incident counts, and camera coverage for Secretariat of Security reporting — no manual export.' },
  ]

  const challengeCards = es ? [
    { icon: '🏛️', title: 'Coordinacion PNH-PMOP-FUSINA fragmentada', text: 'Honduras opera con 18 departamentos donde la PNH (~15,000 agentes), la PMOP (~5,000 efectivos), TIGRES y FUSINA (4,400 efectivos interinstitucionales) actuan en jurisdicciones superpuestas. La coordinacion depende de comunicacion radial informal, creando brechas en operaciones antinarcoticos y de seguridad ciudadana que requieren respuesta multifuerza.' },
    { icon: '📞', title: 'SNE 911 sin despacho integrado a nivel municipal', text: 'El Sistema Nacional de Emergencias 911 opera centros de llamadas con 250 operadores, pero la integracion con policia municipal, Bomberos y Cruz Roja varia significativamente entre municipios. Sin un registro comun de incidente a nivel local, los eventos multijurisdiccionales generan duplicacion de respuesta y perdida de contexto operacional.' },
    { icon: '📷', title: 'Camaras municipales aisladas sin VMS central', text: 'Tegucigalpa, San Pedro Sula, Choluteca y La Ceiba operan sistemas de videovigilancia municipal sin integracion entre si ni con el SNE 911. Los operadores acceden a multiples interfaces, ralentizando la respuesta y creando puntos ciegos entre jurisdicciones. La expansion a ciudades del sur con conectividad RADWIN agrego camaras sin consolidar la gestion de video.' },
    { icon: '🌀', title: 'Vulnerabilidad a desastres naturales sin plataforma integrada', text: 'Honduras es altamente vulnerable a huracanes (Eta e Iota en 2020 afectaron a 4 millones de personas), inundaciones y deslizamientos de tierra. COPECO coordina alertas y evacuaciones pero opera de forma separada de la red policial y municipal, fragmentando la respuesta en emergencias de gran escala.' },
  ] : [
    { icon: '🏛️', title: 'Fragmented HNP-PMOP-FUSINA coordination', text: "Honduras operates with 18 departments where the HNP (~15,000 officers), PMOP (~5,000 troops), TIGRES, and FUSINA (4,400 interinstitutional personnel) act in overlapping jurisdictions. Coordination depends on informal radio communication, creating gaps in counter-narcotics and citizen security operations requiring multi-force response." },
    { icon: '📞', title: 'SNE 911 without integrated municipal dispatch', text: "The Sistema Nacional de Emergencias 911 operates call centers with 250 operators, but integration with municipal police, Bomberos, and Cruz Roja varies significantly across municipalities. Without a shared incident record at the local level, multi-jurisdictional events generate duplicate responses and lost operational context." },
    { icon: '📷', title: 'Siloed municipal cameras without central VMS', text: "Tegucigalpa, San Pedro Sula, Choluteca, and La Ceiba each operate their own municipal surveillance systems without integration between them or with the SNE 911. Operators access multiple interfaces, slowing response and creating blind spots across jurisdictions. Southern city expansion via RADWIN connectivity added cameras without consolidating video management." },
    { icon: '🌀', title: 'Natural disaster vulnerability without integrated platform', text: "Honduras is highly vulnerable to hurricanes (Eta and Iota in 2020 affected 4 million people), flooding, and landslides. COPECO coordinates alerts and evacuations but operates separately from the police and municipal network, fragmenting response in large-scale emergencies." },
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
            {es ? 'Software de Seguridad Publica — Honduras' : 'Public Safety Software — Honduras'}
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
              ? 'Software de Seguridad Publica para Honduras'
              : 'Public Safety Software for Honduras'}
          </h1>
          <p style={{
            fontSize: '18px', fontWeight: 300, color: 'var(--dim)',
            lineHeight: 1.75, maxWidth: '720px',
          }}>
            {es
              ? 'Guia para municipios hondurenos, gobernaciones departamentales y el Sistema Nacional de Emergencias 911 que evaluan plataformas unificadas de seguridad publica: videovigilancia, despacho de emergencias, GIS y gestion de incidentes.'
              : "Guide for Honduran municipalities, departmental governments, and the Sistema Nacional de Emergencias 911 evaluating unified public safety platforms — video surveillance, emergency dispatch, GIS, and incident management."}
          </p>
        </section>

        {/* -- SECTION: Honduras Public Safety Structure -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? 'La Estructura de Seguridad Publica en Honduras'
                : "Honduras' Public Safety Structure"}
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Honduras es una republica unitaria dividida en 18 departamentos y 298 municipios. La Policia Nacional de Honduras (PNH), con aproximadamente 15,000 agentes, es la fuerza policial principal bajo la Secretaria de Seguridad. La Policia Militar del Orden Publico (PMOP, ~5,000 efectivos) reporta a autoridades militares pero conduce operaciones de seguridad ciudadana. TIGRES (Tropa de Inteligencia y Grupos de Respuesta Especial de Seguridad) es una unidad policial militarizada especializada entrenada por los Boinas Verdes de EE.UU. FUSINA (Fuerza Nacional de Seguridad Interinstitucional, 4,400 efectivos) coordina PNH, PMOP, inteligencia, Ministerio Publico y el sistema judicial en los 18 departamentos.'
                : "Honduras is a unitary republic divided into 18 departments and 298 municipalities. The Honduran National Police (HNP), with approximately 15,000 officers, is the main police force under the Secretariat of Security. The Military Police of Public Order (PMOP, ~5,000 troops) reports to military authorities but conducts citizen security operations. TIGRES (Special Comprehensive Governmental Security Response Unit) is a specialized militarized police unit trained by US Green Berets. FUSINA (National Interinstitutional Security Force, 4,400 personnel) coordinates HNP, PMOP, intelligence, the Public Ministry, and the court system across all 18 departments."}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Honduras protege aproximadamente 10.5 millones de ciudadanos. Tegucigalpa (capital, ~1.2 millones) y San Pedro Sula (~800,000) son los principales centros urbanos. El corredor norte — desde San Pedro Sula a Puerto Cortes — concentra la actividad industrial maquiladora y portuaria del pais. Honduras enfrenta desafios de seguridad complejos: narcotransito hacia Mexico y Estados Unidos, presencia de maras (MS-13, Barrio 18), extorsion, y alta vulnerabilidad a huracanes e inundaciones. Puerto Cortes fue el primer puerto del hemisferio occidental en calificar simultaneamente bajo la Container Security Initiative y la Megaports Initiative de EE.UU. La falta de interoperabilidad entre sistemas policiales, militares y municipales es el principal obstaculo para una respuesta efectiva.'
                : "Honduras protects approximately 10.5 million citizens. Tegucigalpa (capital, ~1.2 million) and San Pedro Sula (~800,000) are the main urban centers. The northern corridor — from San Pedro Sula to Puerto Cortés — concentrates the country's maquila industrial and port activity. Honduras faces complex security challenges: narcotics transit toward Mexico and the United States, mara presence (MS-13, Barrio 18), extortion, and high vulnerability to hurricanes and flooding. Puerto Cortés was the first port in the Western Hemisphere to qualify simultaneously under the US Container Security Initiative and Megaports Initiative. The lack of interoperability between police, military, and municipal systems is the main obstacle to effective response."}
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
                ? 'Desafios Clave para Municipios y Departamentos de Honduras'
                : 'Key Challenges for Honduran Municipalities and Departments'}
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
                ? '¿Como Funciona una Plataforma Unificada para Honduras?'
                : 'How a Unified Platform Works for Honduras'}
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
                ? 'Fragmentado vs Plataforma Unificada para Municipios Hondurenos'
                : 'Fragmented vs Unified Platform for Honduran Municipalities'}
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
                ? 'Preguntas Sobre Software de Seguridad Publica en Honduras'
                : 'Questions About Public Safety Software in Honduras'}
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
                {
                  href: '/resources/public-safety-software-colombia',
                  en: 'Public Safety Software for Colombia',
                  es: 'Software de Seguridad Publica para Colombia',
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
          h2={es ? 'Transforma la Seguridad Publica de Tu Municipio o Departamento en Honduras' : 'Transform Public Safety in Your Honduran Municipality or Department'}
          subtitle={es
            ? 'Conoce como KabatOne integra videovigilancia, despacho de emergencias, GIS y gestion de incidentes en una sola plataforma operativa para municipios hondurenos — desde Tegucigalpa y San Pedro Sula hasta cabeceras departamentales.'
            : 'See how KabatOne unifies video surveillance, emergency dispatch, GIS, and incident management into one operational platform for Honduran municipalities — from Tegucigalpa and San Pedro Sula to departmental capitals.'}
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
