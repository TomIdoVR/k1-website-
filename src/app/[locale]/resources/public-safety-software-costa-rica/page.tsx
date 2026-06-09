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
  return generatePageMetadata('publicSafetySoftwareCostaRica', locale)
}

export default async function PublicSafetySoftwareCostaRicaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-costa-rica/`
    : `${baseUrl}/resources/public-safety-software-costa-rica/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Publica — Costa Rica' : 'Public Safety Software — Costa Rica', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: "¿Como funciona el Sistema de Emergencias 9-1-1 de Costa Rica?",
      answer: "El Sistema de Emergencias 9-1-1 de Costa Rica opera bajo la Comision de Emergencias 911, coordinando la Fuerza Publica (~13,000 agentes), el Cuerpo de Bomberos de Costa Rica, la Cruz Roja Costarricense y el SAMU (Servicio de Atencion de Moviles de Urgencias). Desde su implementacion como numero unico en 2013, el 911 unifica el despacho de emergencias en tiempo real. Una plataforma como KabatOne se integra directamente con la infraestructura ONVIF/RTSP del 911, anadiendo CAD estructurado, GIS operacional y fusion de video sobre la infraestructura existente.",
    },
    {
      question: "¿Como se financia la tecnologia de seguridad publica en Costa Rica?",
      answer: "El financiamiento proviene del presupuesto del Ministerio de Seguridad Publica, el Ministerio de Gobernacion y el Fondo de Seguridad Vial (COSEVI). Las adquisiciones se rigen por la Ley de Contratacion Publica (Ley 9986, vigente desde 2022) y el portal electronico SICOP (Sistema Integrado de Compras Publicas), que publica todas las licitaciones abiertas a empresas extranjeras con representacion local. Cooperantes internacionales incluyen el BID, BCIE, USAID y la cooperacion con la UE a traves del SICA.",
    },
    {
      question: "¿Que es la CNE y como coordina emergencias en Costa Rica?",
      answer: "La Comision Nacional de Prevencion de Riesgos y Atencion de Emergencias (CNE) es el ente rector de la gestion del riesgo en Costa Rica. Coordina la respuesta a erupciones volcanicas (Arenal, Poas, Turrialba, Rincon de la Vieja — mas de seis volcanes activos), terremotos y deslizamientos. El OVSICORI-UNA y el RSN (Red Sismologica Nacional) proveen monitoreo en tiempo real. KabatOne integra alertas de la CNE, OVSICORI y RSN con video municipal, despacho 911 y posiciones de unidades en un unico entorno operativo.",
    },
    {
      question: "¿Puede KabatOne integrarse con la infraestructura de video existente en Costa Rica?",
      answer: "Si. KabatOne integra cualquier camara ONVIF/RTSP sin reemplazo de hardware. Las camaras municipales de San Jose, Alajuela, Cartago y Heredia se conectan directamente. Camaras del MOPT en corredores viales nacionales, LPR en el Aeropuerto Juan Santamaria (SJO), sistemas de la JAPDEVA en Puerto Limon y del INCOP en Puerto Caldera tambien se integran sin cambiar infraestructura. El sistema es compatible con los entornos tecnologicos de las Zonas Francas.",
    },
    {
      question: "¿Como apoya KabatOne a un pais sin ejercito como Costa Rica?",
      answer: "Costa Rica abolio su ejercito en 1948 (Articulo 12 de la Constitucion), lo que significa que la Fuerza Publica es la unica fuerza de seguridad interna. Esta estructura requiere coordinacion especialmente estrecha entre la Fuerza Publica, el OIJ, Bomberos, Cruz Roja y la CNE. KabatOne unifica estas agencias en una sola plataforma operativa: K-Safety provee el mapa GIS compartido, K-Dispatch centraliza el despacho 911, y K-Video agrega todas las camaras municipales en un VMS buscable.",
    },
    {
      question: "¿Como se alinea KabatOne con la Ley de Contratacion Publica de Costa Rica (Ley 9986)?",
      answer: "KabatOne se comercializa a traves de distribuidores e integradores locales conforme a la Ley 9986 y su portal SICOP. La arquitectura modular permite licitar por componente (K-Video, K-Dispatch, K-Safety) o como plataforma unificada, adaptandose a los rangos presupuestarios de municipalidades, gobernaciones y el Ministerio de Seguridad Publica. Las licitaciones en SICOP estan abiertas a empresas extranjeras con representante local registrado ante la CCSS y la Tributacion Directa.",
    },
  ] : [
    {
      question: "How does Costa Rica's 9-1-1 Emergency System work?",
      answer: "Costa Rica's 9-1-1 Emergency System operates under the 911 Emergency Commission, coordinating the Fuerza Publica (~13,000 officers), the Costa Rican Fire Department (Bomberos), the Costa Rican Red Cross (Cruz Roja), and SAMU (mobile urgent care service). Since unification as a single emergency number in 2013, the 911 system centralizes real-time emergency dispatch. A unified platform like KabatOne integrates directly with the existing ONVIF/RTSP infrastructure, adding structured CAD, operational GIS, and video analytics on top of cameras already installed.",
    },
    {
      question: "How does Costa Rica fund public safety technology?",
      answer: "Funding comes from the Ministry of Public Security, the Ministry of the Interior, and the Road Safety Fund (COSEVI). Procurement is governed by the Public Procurement Law (Law 9986, effective 2022) and the SICOP e-procurement portal (Integrated Public Procurement System), which publishes all tenders open to foreign firms with registered local representation. International partners include the IDB, BCIE, USAID, and EU cooperation through SICA.",
    },
    {
      question: "What is the CNE and how does it coordinate emergencies in Costa Rica?",
      answer: "The National Commission for Risk Prevention and Emergency Response (CNE) is Costa Rica's risk management authority. It coordinates response to volcanic eruptions (Arenal, Poas, Turrialba, Rincon de la Vieja — more than six active volcanoes), earthquakes, and landslides. OVSICORI-UNA and the National Seismological Network (RSN) provide real-time monitoring. KabatOne integrates CNE, OVSICORI, and RSN alerts with municipal video, 911 dispatch, and unit positions in a single operational environment.",
    },
    {
      question: "Can KabatOne integrate with existing camera infrastructure in Costa Rica?",
      answer: "Yes. KabatOne integrates any ONVIF/RTSP camera without hardware replacement. Municipal cameras in San Jose, Alajuela, Cartago, and Heredia connect directly. MOPT cameras on national road corridors, LPR readers at Juan Santamaria International Airport (SJO), JAPDEVA systems at Puerto Limon, and INCOP systems at Puerto Caldera also integrate without changing infrastructure. The platform is compatible with technology environments used in Costa Rica's Free Trade Zones.",
    },
    {
      question: "How does KabatOne support a country without an army like Costa Rica?",
      answer: "Costa Rica abolished its army in 1948 (Article 12 of the Constitution), meaning the Fuerza Publica is the sole internal security force. This structure requires especially close coordination between the Fuerza Publica, OIJ, Bomberos, Cruz Roja, and the CNE. KabatOne unifies these agencies on one operational platform: K-Safety provides the shared GIS map, K-Dispatch centralizes 911 dispatch, and K-Video aggregates all municipal cameras in a searchable VMS.",
    },
    {
      question: "How does KabatOne align with Costa Rica's Public Procurement Law (Law 9986)?",
      answer: "KabatOne is marketed through local distributors and integrators under Law 9986 and the SICOP portal. The modular architecture allows tendering by component (K-Video, K-Dispatch, K-Safety) or as a unified platform, adapting to the budget ranges of municipalities, provincial governments, and the Ministry of Public Security. SICOP tenders are open to foreign firms with a locally registered representative with CCSS and Tributacion Directa.",
    },
  ]

  const artSchema = articleSchema(
    es ? 'Software de Seguridad Publica para Municipios y Cantones en Costa Rica' : 'Public Safety Software for Costa Rica: Government Guide',
    es
      ? 'Software de seguridad publica para municipios, cantones y el sistema nacional 911 de Costa Rica — conectando videovigilancia, despacho de emergencias, GIS y gestion de incidentes en una sola plataforma operativa.'
      : 'Public safety software for Costa Rican municipalities, cantones, and the national 911 system — connecting surveillance, emergency dispatch, GIS, and incident management in one unified operational platform.',
    pageUrl,
    '2026-06-09'
  )

  const comparisonRows = es ? [
    { feature: 'Video', fragmented: 'Camaras municipales de San Jose, Alajuela, Cartago y Heredia en plataformas aisladas sin VMS compartido con la Fuerza Publica ni el OIJ', unified: 'VMS unificado, todas las camaras buscables por canton, fecha y tipo de evento' },
    { feature: 'Despacho de emergencias', fragmented: '911 como canal unico pero sin registro compartido entre Fuerza Publica, Bomberos, Cruz Roja y SAMU', unified: 'Registro unico de incidente que conecta Fuerza Publica, OIJ, Bomberos, Cruz Roja y SAMU' },
    { feature: 'Coordinacion multi-agencia (sin ejercito)', fragmented: 'Solo radio, sin pantalla ni mapa compartido entre Fuerza Publica, OIJ y CNE durante emergencias complejas', unified: 'Mapa GIS compartido con posiciones de unidades y alertas CNE/OVSICORI en tiempo real' },
    { feature: 'Respuesta a desastres CNE/OVSICORI', fragmented: 'Alertas volcanicas del OVSICORI y sismicas del RSN separadas de la red policial y municipal', unified: 'Alertas CNE/OVSICORI/RSN integradas con video y despacho en el mismo entorno operativo' },
    { feature: 'Reportes para el Ministerio de Seguridad', fragmented: 'Exportacion manual de datos incompletos por sistema y por municipalidad', unified: 'KPIs automatizados de tiempos de respuesta, incidentes por canton y cobertura de camaras' },
    { feature: 'Dependencia tecnologica', fragmented: 'Hardware propietario por proveedor y por municipalidad', unified: 'ONVIF/RTSP, cualquier marca de camara ya instalada' },
  ] : [
    { feature: 'Video', fragmented: 'Municipal cameras in San Jose, Alajuela, Cartago, and Heredia on isolated platforms with no shared VMS with Fuerza Publica or OIJ', unified: 'Unified VMS, all cameras searchable by canton, date, and event type' },
    { feature: 'Emergency dispatch', fragmented: '911 as single channel but no shared incident record between Fuerza Publica, Bomberos, Cruz Roja, and SAMU', unified: 'Single incident record bridging Fuerza Publica, OIJ, Bomberos, Cruz Roja, and SAMU' },
    { feature: 'Multi-agency coordination (no army)', fragmented: 'Radio-only, no shared screen or map between Fuerza Publica, OIJ, and CNE during complex emergencies', unified: 'Shared GIS map with unit positions and CNE/OVSICORI alerts in real time' },
    { feature: 'CNE/OVSICORI disaster response', fragmented: 'OVSICORI volcanic and RSN seismic alerts disconnected from police and municipal network', unified: 'CNE/OVSICORI/RSN alerts integrated with video and dispatch in the same operational environment' },
    { feature: 'Ministry of Security reporting', fragmented: 'Manual export of incomplete data per system and per municipality', unified: 'Automated KPIs for response times, canton-level incident counts, and camera coverage' },
    { feature: 'Technology lock-in', fragmented: 'Proprietary hardware per vendor and per municipality', unified: 'ONVIF/RTSP, any camera brand already installed' },
  ]

  const workflowSteps = es ? [
    { n: '01', title: 'Video unificado', text: 'Todas las camaras — municipales en San Jose, Alajuela, Cartago, Heredia y los 82 cantones, camaras MOPT en corredores viales, JAPDEVA en Puerto Limon, INCOP en Puerto Caldera — en una sola interfaz VMS con busqueda por canton, fecha y tipo de evento.' },
    { n: '02', title: 'Centro de despacho 911 unificado', text: 'Recepcion 911, clasificacion de incidentes y asignacion de unidades desde una sola plataforma CAD. Registro unico de incidente compartido entre Fuerza Publica, Bomberos, Cruz Roja y SAMU.' },
    { n: '03', title: 'GIS en tiempo real', text: 'Posiciones de la Fuerza Publica, OIJ, Bomberos, Cruz Roja y unidades de la CNE en un solo mapa operativo compartido. Vista conjunta entre delegacion cantonal y el Ministerio de Seguridad Publica.' },
    { n: '04', title: 'Fusion de sensores y alertas', text: 'Lectores LPR en el Aeropuerto Juan Santamaria (SJO) y puertos, alertas volcanicas y sismicas del OVSICORI/RSN, y botones de panico municipales unificados con video en el mismo entorno operativo.' },
    { n: '05', title: 'Reportes para el Ministerio de Seguridad', text: 'KPIs automatizados de tiempos de respuesta, incidentes por canton y cobertura de camaras para reportes del Ministerio de Seguridad Publica y la CNE — sin exportacion manual.' },
  ] : [
    { n: '01', title: 'Unified video', text: 'All cameras — municipal in San Jose, Alajuela, Cartago, Heredia, and all 82 cantones, MOPT cameras on national road corridors, JAPDEVA at Puerto Limon, INCOP at Puerto Caldera — on one VMS interface with search by canton, date, and event type.' },
    { n: '02', title: 'Unified 911 dispatch center', text: 'Single 911 intake, incident classification, and unit assignment from one CAD platform. Shared incident record bridging Fuerza Publica, Bomberos, Cruz Roja, and SAMU.' },
    { n: '03', title: 'Real-time GIS', text: 'Positions of Fuerza Publica, OIJ, Bomberos, Cruz Roja, and CNE units on one shared operational map — joint view between cantonal delegation and the Ministry of Public Security.' },
    { n: '04', title: 'Sensor and alert fusion', text: 'LPR readers at Juan Santamaria International Airport (SJO) and ports, OVSICORI/RSN volcanic and seismic alerts, and municipal panic buttons unified with video in the same operational environment.' },
    { n: '05', title: 'Ministry of Security reporting', text: 'Automated KPIs for response times, canton-level incident counts, and camera coverage for Ministry of Public Security and CNE reporting — no manual export.' },
  ]

  const challengeCards = es ? [
    { icon: '🏛️', title: 'Coordinacion multi-agencia sin Fuerzas Armadas', text: 'Costa Rica aboli\u00f3 su ej\u00e9rcito en 1948 (Art\u00edculo 12 constitucional), haciendo de la Fuerza P\u00fablica (~13,000 agentes) la \u00fanica fuerza de seguridad interna. Esto demanda coordinaci\u00f3n excepcional entre la Fuerza P\u00fablica, el OIJ (~2,500 investigadores), Bomberos, Cruz Roja y la CNE durante incidentes complejos. Sin un mapa operativo compartido, los eventos que cruzan m\u00faltiples jurisdicciones cantonales generan duplicaci\u00f3n de respuesta y demoras cr\u00edticas.' },
    { icon: '📞', title: 'Sistema 911 sin integracion CAD municipal', text: 'El Sistema de Emergencias 9-1-1, operativo desde 2013, centraliza despacho a nivel nacional pero la integraci\u00f3n con polic\u00eda municipal, Bomberos y Cruz Roja var\u00eda entre cantones. Sin un registro com\u00fan de incidente, los eventos multijurisdiccionales — frecuentes en zonas tur\u00edsticas como Guanacaste, el Valle Central y la Pen\u00ednsula de Osa — generan duplicaci\u00f3n de respuesta y atraso en el despacho de unidades.' },
    { icon: '🌋', title: 'Vulnerabilidad volcanica y sismica sin plataforma integrada', text: 'Costa Rica tiene m\u00e1s de seis volcanes activos, incluyendo el Arenal, Po\u00e1s, Turri\u00e1lba y Rinc\u00f3n de la Vieja. El OVSICORI-UNA y la RSN monitorean actividad continua, pero operan desconectados de la red policial y municipal, fragmentando la respuesta cuando una alerta require evacuar zonas tur\u00edsticas de alta densidad simult\u00e1neamente a operaciones de seguridad activas.' },
    { icon: '📷', title: 'Camaras municipales sin VMS central ni integracion con la Fuerza Publica', text: 'San Jos\u00e9, Alajuela, Cartago, Heredia y los principales cantones tur\u00edsticos operan CCTV sin integraci\u00f3n entre s\u00ed ni con los sistemas de la Fuerza P\u00fablica. La JAPDEVA administra video en Puerto Lim\u00f3n y el INCOP en Puerto Caldera de forma independiente. Sin un VMS unificado, los operadores acceden a m\u00faltiples consolas, reduciendo la velocidad de respuesta a incidentes que cruzan cantones.' },
  ] : [
    { icon: '🏛️', title: 'Multi-agency coordination without Armed Forces', text: 'Costa Rica abolished its army in 1948 (Article 12 of the Constitution), making the Fuerza Publica (~13,000 officers) the sole internal security force. This demands exceptional coordination between the Fuerza Publica, the OIJ (~2,500 investigators), Bomberos, Cruz Roja, and the CNE during complex incidents. Without a shared operational map, events crossing multiple cantonal jurisdictions generate duplicate responses and critical delays.' },
    { icon: '📞', title: '911 system without integrated municipal CAD', text: 'The 9-1-1 Emergency System, operational since 2013, centralizes dispatch at the national level, but integration with municipal police, Bomberos, and Cruz Roja varies across cantones. Without a shared incident record, multi-jurisdictional events — frequent in tourist zones like Guanacaste, the Central Valley, and the Osa Peninsula — generate duplicate responses and delayed unit dispatch.' },
    { icon: '🌋', title: 'Volcanic and seismic vulnerability without integrated platform', text: 'Costa Rica has more than six active volcanoes, including Arenal, Poas, Turrialba, and Rincon de la Vieja. OVSICORI-UNA and the RSN monitor ongoing activity but operate disconnected from the police and municipal network, fragmenting response when an alert requires evacuating high-density tourist zones simultaneously with active security operations.' },
    { icon: '📷', title: 'Municipal cameras without central VMS or Fuerza Publica integration', text: 'San Jose, Alajuela, Cartago, Heredia, and major tourist cantones each operate CCTV without integration between them or with Fuerza Publica systems. JAPDEVA manages video at Puerto Limon and INCOP at Puerto Caldera independently. Without a unified VMS, operators access multiple consoles, slowing response to incidents that cross cantonal boundaries.' },
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
            {es ? 'Software de Seguridad Publica — Costa Rica' : 'Public Safety Software — Costa Rica'}
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
              ? 'Software de Seguridad Publica para Costa Rica'
              : 'Public Safety Software for Costa Rica'}
          </h1>
          <p style={{
            fontSize: '18px', fontWeight: 300, color: 'var(--dim)',
            lineHeight: 1.75, maxWidth: '720px',
          }}>
            {es
              ? 'Guia para municipalidades costarricenses, gobernaciones provinciales y el sistema nacional 9-1-1 que evaluan plataformas unificadas de seguridad publica: videovigilancia, despacho de emergencias, GIS y gestion de incidentes.'
              : 'Guide for Costa Rican municipalities, provincial governments, and the national 9-1-1 system evaluating unified public safety platforms — video surveillance, emergency dispatch, GIS, and incident management.'}
          </p>
        </section>

        {/* -- SECTION: Costa Rica Public Safety Structure -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? 'La Estructura de Seguridad Publica en Costa Rica'
                : "Costa Rica's Public Safety Structure"}
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Costa Rica es una republica democratica dividida en 7 provincias, 82 cantones y 488 distritos. Es el unico pais de America Latina con abolicion constitucional del ejercito desde 1948 (Articulo 12), lo que hace de la Fuerza Publica (~13,000 agentes) la unica fuerza de seguridad interna, bajo el Ministerio de Seguridad Publica. El Organismo de Investigacion Judicial (OIJ, ~2,500 investigadores) opera bajo el Poder Judicial como policia judicial independiente. La Direccion de Inteligencia y Seguridad del Estado (DIS) cubre inteligencia nacional. El Cuerpo de Bomberos de Costa Rica y la Cruz Roja Costarricense son fundamentales en el sistema de respuesta a emergencias, junto al SAMU (Servicio de Atencion de Moviles de Urgencias). El Sistema de Emergencias 9-1-1 unifica el despacho desde 2013.'
                : 'Costa Rica is a democratic republic divided into 7 provinces, 82 cantones, and 488 distritos. It is the only country in Latin America with a constitutional abolition of the army since 1948 (Article 12), making the Fuerza Publica (~13,000 officers) the sole internal security force, under the Ministry of Public Security. The Judicial Investigation Agency (OIJ, ~2,500 investigators) operates under the Judicial Branch as an independent judicial police. The State Intelligence and Security Directorate (DIS) covers national intelligence. The Costa Rican Fire Department (Bomberos) and the Costa Rican Red Cross (Cruz Roja) are central to the emergency response system, alongside SAMU (mobile urgent care). The 9-1-1 Emergency System has unified dispatch since 2013.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Costa Rica protege aproximadamente 5.2 millones de ciudadanos mas 3.3 millones de turistas internacionales al ano. San Jose (capital, ~350,000 en ciudad, ~2.3M en area metropolitana) concentra la mayor densidad de camaras y centros de mando cantonal. El pais enfrenta desafios de seguridad complejos: transito de narcoticos por el corredor caribeno (Puerto Limon es uno de los principales puntos de incautacion en Centroamerica), alta vulnerabilidad a terremotos y erupciones volcanicas, y alta exposicion turistica en Guanacaste y la Peninsula de Osa. El Aeropuerto Juan Santamaria (SJO) en Alajuela es el hub aereo centroamericano con mas de 10 millones de pasajeros al ano. La Ley 9986 y el portal SICOP rigen la contratacion publica.'
                : 'Costa Rica protects approximately 5.2 million citizens plus 3.3 million international tourists annually. San Jose (capital, ~350,000 city, ~2.3M metro area) concentrates the highest density of cameras and cantonal command facilities. The country faces complex security challenges: narcotics transit through the Caribbean corridor (Puerto Limon is one of Central America\'s main seizure points), high vulnerability to earthquakes and volcanic eruptions, and high tourist exposure in Guanacaste and the Osa Peninsula. Juan Santamaria International Airport (SJO) in Alajuela is the Central American air hub with over 10 million passengers per year. Law 9986 and the SICOP portal govern public procurement.'}
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
                ? 'Desafios Clave para Municipalidades y Cantones de Costa Rica'
                : 'Key Challenges for Costa Rican Municipalities and Cantones'}
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
                ? '¿Como Funciona una Plataforma Unificada para Costa Rica?'
                : 'How a Unified Platform Works for Costa Rica'}
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
                { href: '/k-dispatch', label: 'K-Dispatch', color: '#f59e0b', desc: es ? 'Despacho CAD / 9-1-1' : 'CAD dispatch / 9-1-1' },
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
                ? 'Fragmentado vs Plataforma Unificada para Municipalidades Costarricenses'
                : 'Fragmented vs Unified Platform for Costa Rican Municipalities'}
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
                  { href: '/resources/public-safety-software-nicaragua', label: es ? 'Seguridad Publica — Nicaragua' : 'Public Safety Software — Nicaragua' },
                  { href: '/resources/public-safety-software-el-salvador', label: es ? 'Seguridad Publica — El Salvador' : 'Public Safety Software — El Salvador' },
                  { href: '/resources/public-safety-software-honduras', label: es ? 'Seguridad Publica — Honduras' : 'Public Safety Software — Honduras' },
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
                ? 'Preguntas Sobre Software de Seguridad Publica en Costa Rica'
                : 'Questions About Public Safety Software in Costa Rica'}
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
                  href: '/resources/public-safety-software-el-salvador',
                  en: 'Public Safety Software for El Salvador',
                  es: 'Software de Seguridad Publica para El Salvador',
                },
                {
                  href: '/resources/public-safety-software-nicaragua',
                  en: 'Public Safety Software for Nicaragua',
                  es: 'Software de Seguridad Publica para Nicaragua',
                },
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
          h2={es ? 'Transforma la Seguridad Publica de Tu Municipalidad o Canton en Costa Rica' : 'Transform Public Safety in Your Costa Rican Municipality or Canton'}
          subtitle={es
            ? 'Conoce como KabatOne integra videovigilancia, despacho de emergencias 9-1-1, GIS y gestion de incidentes en una sola plataforma operativa para municipalidades costarricenses — desde San Jose y Alajuela hasta los cantones turisticos de Guanacaste y la Peninsula de Osa.'
            : 'See how KabatOne unifies video surveillance, 9-1-1 emergency dispatch, GIS, and incident management into one operational platform for Costa Rican municipalities — from San Jose and Alajuela to the tourist cantones of Guanacaste and the Osa Peninsula.'}
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
