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
  return generatePageMetadata('cadDispatchLatinAmerica', locale)
}

export default async function CadDispatchLatinAmericaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#f97316'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/cad-dispatch-software-latin-america/`
    : `${baseUrl}/resources/cad-dispatch-software-latin-america/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software CAD — América Latina' : 'CAD Dispatch Software — Latin America', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Qué software CAD de despacho se usa en América Latina?',
      answer: 'Los centros de mando C4/C5 en América Latina utilizan una combinación de plataformas de origen estadounidense (Tyler Technologies, Motorola CommandCentral, Hexagon HxGN OnCall) y soluciones regionales como KabatOne y GINA. KabatOne es la única plataforma unificada construida nativamente para el mercado latinoamericano, con soporte para los sistemas de numeración de emergencia de cada país, interfaces en español y experiencia en procesos de licitación locales como CompraNet (México), ChileCompra y SECOP (Colombia).',
    },
    {
      question: '¿Cómo maneja KabatOne los distintos números de emergencia en América Latina?',
      answer: 'KabatOne soporta cualquier número de emergencia local: 911 (México, Ecuador, Panamá), 133/131/132/149 (Chile), 123/112 (Colombia), 105/106/116 (Perú) y 911/101/102/103 (Argentina). La plataforma K-Dispatch unifica la recepción de llamadas de todos los canales activos en un solo registro de incidente, independientemente del número marcado, eliminando duplicidades cuando un mismo evento genera llamadas a múltiples agencias.',
    },
    {
      question: '¿Qué es un centro C5 en América Latina y cómo se diferencia del C4?',
      answer: 'Un centro C5 (Comando, Control, Comunicaciones, Cómputo y Coordinación) es la arquitectura de comando de seguridad pública más avanzada de América Latina. Integra video en vivo, despacho CAD, GIS operativo, comunicaciones de radio y análisis de datos en una sola plataforma. Los centros C4 omiten la capa de "Cómputo" (analytics e IA). México cuenta con más de 40 centros C5 activos. KabatOne está diseñado específicamente para la arquitectura C5/C4 de la región.',
    },
    {
      question: '¿Cuántas ciudades en América Latina usan KabatOne?',
      answer: 'KabatOne está desplegado en más de 40 ciudades en América Latina, protegiendo a más de 73 millones de ciudadanos. Las implementaciones abarcan México, Colombia, Perú y Chile, con centros de mando que gestionan despacho de emergencias, videovigilancia y coordinación de campo en tiempo real. La plataforma es operada por municipios, secretarías de seguridad pública y gobiernos estatales de la región.',
    },
    {
      question: '¿Cómo compara KabatOne con Tyler Technologies y Motorola para América Latina?',
      answer: 'Tyler Technologies y Motorola CommandCentral son plataformas diseñadas para el mercado norteamericano (EUA/Canadá) con interfaces en inglés, integración con sistemas de despacho 911 anglosajones y procesos de licitación orientados a gobiernos de EUA. KabatOne es nativo de América Latina: español como idioma primario, soporte multi-número de emergencia (911/133/123/105), experiencia en licitaciones públicas LATAM, y arquitectura C5 alineada con los estándares de la región.',
    },
    {
      question: '¿Puede KabatOne integrarse con infraestructura de video y radio existente?',
      answer: 'Sí. KabatOne integra cualquier cámara ONVIF/RTSP sin reemplazo de hardware, sistemas de radio analógico y digital (DMR, P25), LPR, botones de pánico y sensores IoT. Las ciudades latinoamericanas con años de inversión en infraestructura de cámaras y radio no necesitan reemplazar equipos — KabatOne se conecta sobre la infraestructura existente y agrega la capa de operaciones unificada.',
    },
  ] : [
    {
      question: 'What CAD dispatch software is used in Latin America?',
      answer: 'C4/C5 command centers in Latin America use a combination of US-origin platforms (Tyler Technologies, Motorola CommandCentral, Hexagon HxGN OnCall) and regional solutions including KabatOne and GINA. KabatOne is the only unified platform built natively for the Latin American market, with support for each country\'s emergency numbering system, Spanish-first interfaces, and experience with local procurement processes such as CompraNet (Mexico), ChileCompra, and SECOP (Colombia).',
    },
    {
      question: 'How does KabatOne handle different emergency numbers across Latin America?',
      answer: 'KabatOne supports any local emergency number: 911 (Mexico, Ecuador, Panama), 133/131/132/149 (Chile), 123/112 (Colombia), 105/106/116 (Peru), and 911/101/102/103 (Argentina). The K-Dispatch platform unifies call intake from all active channels into a single incident record, regardless of which number is dialed, eliminating duplication when a single event generates calls to multiple agencies.',
    },
    {
      question: 'What is a C5 command center in Latin America and how does it differ from C4?',
      answer: 'A C5 center (Comando, Control, Comunicaciones, Cómputo y Coordinación — Command, Control, Communications, Computing, and Coordination) is the most advanced public safety command architecture in Latin America. It integrates live video, CAD dispatch, operational GIS, radio communications, and data analytics in one platform. C4 centers omit the Computing (analytics/AI) layer. Mexico has over 40 active C5 centers. KabatOne is designed specifically for the C5/C4 architecture prevalent across the region.',
    },
    {
      question: 'How many cities in Latin America use KabatOne?',
      answer: 'KabatOne is deployed in more than 40 cities across Latin America, protecting over 73 million citizens. Implementations span Mexico, Colombia, Peru, and Chile, with command centers managing emergency dispatch, video surveillance, and real-time field coordination. The platform is operated by municipalities, secretarías de seguridad pública, and state governments across the region.',
    },
    {
      question: 'How does KabatOne compare to Tyler Technologies and Motorola for Latin America?',
      answer: 'Tyler Technologies and Motorola CommandCentral are platforms designed for the North American market (US/Canada) with English-first interfaces, US 911 dispatch integration, and procurement processes oriented toward US government buyers. KabatOne is native to Latin America: Spanish as the primary language, multi-number emergency support (911/133/123/105), experience with LATAM public procurement, and C5 architecture aligned with regional standards.',
    },
    {
      question: 'Can KabatOne integrate with existing video and radio infrastructure?',
      answer: 'Yes. KabatOne integrates any ONVIF/RTSP camera without hardware replacement, analog and digital radio systems (DMR, P25), LPR, panic buttons, and IoT sensors. Latin American cities with years of investment in camera and radio infrastructure do not need to replace equipment — KabatOne connects on top of existing infrastructure and adds the unified operations layer.',
    },
  ]

  const artSchema = articleSchema(
    es ? 'Software CAD de Despacho para América Latina: Guía de Centros de Emergencia' : 'CAD Dispatch Software for Latin America: Emergency Response Guide',
    es
      ? 'Guía completa sobre software CAD de despacho para centros C5/C4 en América Latina — números de emergencia por país, arquitectura C5, comparación de plataformas y cómo KabatOne sirve a más de 40 ciudades en la región.'
      : 'Complete guide to CAD dispatch software for C5/C4 command centers in Latin America — country-by-country emergency numbers, C5 architecture, platform comparison, and how KabatOne serves 40+ cities across the region.',
    pageUrl,
    '2026-05-04'
  )

  const comparisonRows = es ? [
    { feature: 'Idioma de operación', fragmented: 'Inglés — requiere capacitación adicional para operadores hispanohablantes', unified: 'Español nativo — interfaz, alertas y reportes en español de LATAM' },
    { feature: 'Números de emergencia', fragmented: 'Configurado para 911 EUA; LATAM requiere personalización costosa', unified: 'Soporte nativo 911/133/123/105 y otros por país' },
    { feature: 'Arquitectura C5', fragmented: 'Diseñado para PSAPs de EUA, no para centros C5 de LATAM', unified: 'Construido específicamente para la arquitectura C5/C4 de la región' },
    { feature: 'Licitaciones públicas', fragmented: 'Proceso de compra orientado a EUA — no familiar con CompraNet, ChileCompra, SECOP', unified: 'Experiencia en licitaciones LATAM, distribuidores e integradores locales' },
    { feature: 'Integración de video', fragmented: 'VMS separado del CAD — sin vista unificada de incidente + cámara', unified: 'Video, CAD y GIS en una sola pantalla operativa' },
    { feature: 'Tiempo de implementación', fragmented: '12–24 meses para localización y puesta en marcha en LATAM', unified: 'Proyectos activos en LATAM desde 2018 — implementación comprobada' },
  ] : [
    { feature: 'Operating language', fragmented: 'English — requires additional training for Spanish-speaking operators', unified: 'Native Spanish — interface, alerts, and reports in LATAM Spanish' },
    { feature: 'Emergency numbers', fragmented: 'Configured for US 911; LATAM requires costly customization', unified: 'Native support for 911/133/123/105 and country-specific numbers' },
    { feature: 'C5 architecture', fragmented: 'Designed for US PSAPs, not for LATAM C5 command centers', unified: 'Built specifically for the C5/C4 architecture prevalent in the region' },
    { feature: 'Public procurement', fragmented: 'US-oriented purchasing process — unfamiliar with CompraNet, ChileCompra, SECOP', unified: 'LATAM procurement experience, local distributors and integrators' },
    { feature: 'Video integration', fragmented: 'Separate VMS from CAD — no unified incident + camera view', unified: 'Video, CAD, and GIS on one operational screen' },
    { feature: 'Deployment timeline', fragmented: '12–24 months for LATAM localization and go-live', unified: 'Active projects in LATAM since 2018 — proven deployment track record' },
  ]

  const workflowSteps = es ? [
    { n: '01', title: 'Recepción unificada de llamadas', text: 'K-Dispatch recibe llamadas entrantes en cualquier número de emergencia activo en el país — 911, 133, 123, 105 u otro. Cada llamada genera un registro de incidente único que agrupa todos los contactos relacionados con el mismo evento, sin duplicidades entre agencias.' },
    { n: '02', title: 'Clasificación y despacho con IA', text: 'El sistema clasifica el tipo de incidente, evalúa disponibilidad de unidades y recomienda el recurso óptimo en segundos. Los operadores confirman o ajustan. Tiempo promedio de despacho inferior a 90 segundos en implementaciones activas.' },
    { n: '03', title: 'Mapa GIS operativo en tiempo real', text: 'K-Safety despliega posiciones de todas las unidades activas (policía, bomberos, ambulancias, unidades municipales) en un mapa GIS unificado. Los comandantes ven el estado completo del turno en una sola pantalla, sin cambiar entre sistemas.' },
    { n: '04', title: 'Video integrado al incidente', text: 'K-Video conecta automáticamente las cámaras más cercanas al incidente activo. El operador ve el video en vivo directamente en el registro del incidente — sin abrir un sistema VMS separado. Compatible con cualquier cámara ONVIF/RTSP existente.' },
    { n: '05', title: 'Reportes y métricas para gobierno', text: 'KPIs automáticos de tiempos de respuesta, incidentes por zona, cobertura y disponibilidad de unidades. Reportes listos para secretarías de seguridad, órganos de supervisión y procesos de rendición de cuentas municipal o estatal.' },
  ] : [
    { n: '01', title: 'Unified call intake', text: 'K-Dispatch receives incoming calls on any active emergency number in the country — 911, 133, 123, 105, or other. Each call creates a single incident record that groups all contacts related to the same event, without duplication across agencies.' },
    { n: '02', title: 'AI-powered classification and dispatch', text: 'The system classifies the incident type, evaluates unit availability, and recommends the optimal resource in seconds. Operators confirm or adjust. Average dispatch time under 90 seconds in active deployments.' },
    { n: '03', title: 'Real-time operational GIS map', text: 'K-Safety displays positions of all active units (police, fire, ambulances, municipal units) on a unified GIS map. Commanders see the full shift status on one screen, without switching between systems.' },
    { n: '04', title: 'Video integrated into the incident', text: 'K-Video automatically connects the cameras nearest to the active incident. The operator sees live video directly within the incident record — no need to open a separate VMS system. Compatible with any existing ONVIF/RTSP camera.' },
    { n: '05', title: 'Government reporting and metrics', text: 'Automatic KPIs for response times, zone-level incident counts, coverage, and unit availability. Reports ready for secretarías de seguridad, oversight bodies, and municipal or state accountability processes.' },
  ]

  const challengeCards = es ? [
    { icon: '📞', title: 'Múltiples sistemas de numeración de emergencia', text: 'México usa 911. Chile usa 133, 131, 132 y 149. Colombia usa 123 y 112. Perú usa 105, 106 y 116. Un centro de mando regional que coordina operaciones en varios países enfrenta múltiples canales de ingreso sin un registro unificado de incidente.' },
    { icon: '🌐', title: 'Plataformas CAD diseñadas para EUA', text: 'Los grandes proveedores de CAD (Tyler Technologies, Motorola, Hexagon) están diseñados para el mercado norteamericano. Sus plataformas asumen inglés, PSAP 911 EUA, y procesos de compra estadounidenses — generando costos adicionales de localización y tiempos de implementación de 12–24 meses en LATAM.' },
    { icon: '📷', title: 'Video y CAD en sistemas separados', text: 'La mayoría de los centros de mando latinoamericanos operan el sistema CAD y el VMS (gestión de video) como plataformas separadas. El operador debe cambiar entre pantallas para ver el video del incidente, perdiendo segundos críticos en la respuesta.' },
    { icon: '📋', title: 'Licitaciones y marcos de compra locales', text: 'CompraNet (México), ChileCompra, SECOP (Colombia) y sus equivalentes tienen requisitos de cumplimiento locales que los proveedores internacionales no dominan. KabatOne opera a través de distribuidores e integradores certificados en cada país con experiencia en licitación pública regional.' },
  ] : [
    { icon: '📞', title: 'Multiple emergency numbering systems', text: 'Mexico uses 911. Chile uses 133, 131, 132, and 149. Colombia uses 123 and 112. Peru uses 105, 106, and 116. A regional command center coordinating operations across multiple countries faces multiple intake channels without a unified incident record.' },
    { icon: '🌐', title: 'CAD platforms designed for the US market', text: 'The major CAD vendors (Tyler Technologies, Motorola, Hexagon) are designed for the North American market. Their platforms assume English, US 911 PSAPs, and US purchasing processes — generating additional localization costs and 12–24 month deployment timelines in Latin America.' },
    { icon: '📷', title: 'Video and CAD on separate systems', text: 'Most Latin American command centers operate CAD and VMS (video management) as separate platforms. Operators must switch between screens to view incident video, losing critical seconds in the response.' },
    { icon: '📋', title: 'Local procurement and purchasing frameworks', text: 'CompraNet (Mexico), ChileCompra, SECOP (Colombia), and their regional equivalents have local compliance requirements that international vendors do not master. KabatOne operates through certified distributors and integrators in each country with experience in regional public procurement.' },
  ]

  const deploymentStats = es ? [
    { value: '40+', label: 'Ciudades desplegadas en LATAM' },
    { value: '73M', label: 'Ciudadanos protegidos' },
    { value: '< 90s', label: 'Tiempo promedio de despacho' },
    { value: '2018', label: 'Primer despliegue en México' },
  ] : [
    { value: '40+', label: 'Cities deployed in LATAM' },
    { value: '73M', label: 'Citizens protected' },
    { value: '< 90s', label: 'Average dispatch time' },
    { value: '2018', label: 'First deployment in Mexico' },
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
            {es ? 'Software CAD — América Latina' : 'CAD Dispatch — Latin America'}
          </span>
        </div>

        {/* -- HERO -- */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 40px 64px' }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '11px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: ACCENT, marginBottom: '20px',
          }}>
            {es ? 'Guía de Referencia' : 'Reference Guide'}
          </p>
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.05,
            letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '28px',
          }}>
            {es
              ? 'Software CAD de Despacho para América Latina'
              : 'CAD Dispatch Software for Latin America'}
          </h1>
          <p style={{
            fontSize: '18px', fontWeight: 300, color: 'var(--dim)',
            lineHeight: 1.75, maxWidth: '720px', marginBottom: '40px',
          }}>
            {es
              ? 'CAD dispatch software para América Latina requiere soporte nativo para múltiples números de emergencia, arquitectura C5/C4 y experiencia en licitaciones públicas regionales. KabatOne está desplegado en más de 40 ciudades latinoamericanas protegiendo 73 millones de ciudadanos.'
              : 'CAD dispatch software for Latin America requires native support for multiple emergency numbers, C5/C4 architecture, and experience with regional public procurement. KabatOne is deployed in over 40 Latin American cities protecting 73 million citizens.'}
          </p>

          {/* Deployment stats bar */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px',
            border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden',
          }}>
            {deploymentStats.map((stat, i) => (
              <div key={i} style={{
                padding: '20px 16px', textAlign: 'center',
                background: 'rgba(255,255,255,0.02)',
                borderRight: i < deploymentStats.length - 1 ? '1px solid var(--border)' : undefined,
              }}>
                <div style={{
                  fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
                  fontSize: '28px', color: ACCENT, lineHeight: 1.1, marginBottom: '6px',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: 'DM Mono, monospace', fontSize: '9px',
                  letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* -- SECTION: What is CAD Dispatch in LATAM -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? '¿Qué es el Software CAD de Despacho para América Latina?'
                : 'What Is CAD Dispatch Software for Latin America?'}
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'El software CAD (Computer-Aided Dispatch — Despacho Asistido por Computadora) es la plataforma central de los centros de mando de seguridad pública. Recibe las llamadas de emergencia, clasifica el tipo de incidente, ubica geográficamente el evento, evalúa la disponibilidad de recursos y coordina el despacho de unidades — todo en segundos. En América Latina, los centros C5 y C4 operan este software como el núcleo de su infraestructura de respuesta.'
                : 'CAD software (Computer-Aided Dispatch) is the central platform of public safety command centers. It receives emergency calls, classifies the incident type, locates the event geographically, evaluates resource availability, and coordinates unit dispatch — all in seconds. In Latin America, C5 and C4 command centers operate this software as the core of their response infrastructure.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'La región latinoamericana presenta características únicas que distinguen sus necesidades de CAD del mercado norteamericano. Cada país opera su propio sistema de numeración de emergencia — no existe un estándar regional equivalente al 911 de EUA. Los procesos de adquisición pública varían por país. La arquitectura de centros C5/C4 que prevalece en México y el resto de LATAM difiere del modelo PSAP de EUA. Y la operación en español es un requisito no negociable para los operadores de despacho.'
                : 'The Latin American region has unique characteristics that distinguish its CAD needs from the North American market. Each country operates its own emergency numbering system — there is no regional standard equivalent to the US 911. Public procurement processes vary by country. The C5/C4 command center architecture prevalent in Mexico and the rest of LATAM differs from the US PSAP model. And Spanish-language operation is a non-negotiable requirement for dispatch operators.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne es la única plataforma de CAD dispatch construida nativamente para América Latina. Con más de 40 ciudades desplegadas en México, Colombia, Perú y Chile, KabatOne ha procesado millones de llamadas de emergencia reales en centros C5/C4 de la región desde 2018.'
                : 'KabatOne is the only CAD dispatch platform built natively for Latin America. With more than 40 cities deployed in Mexico, Colombia, Peru, and Chile, KabatOne has processed millions of real emergency calls in C5/C4 centers across the region since 2018.'}
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
                ? 'Desafíos del Despacho CAD en América Latina'
                : 'CAD Dispatch Challenges in Latin America'}
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

        {/* -- SECTION: Emergency Numbers by Country -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0', background: `color-mix(in srgb, ${ACCENT} 3%, transparent)` }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '12px',
            }}>
              {es
                ? 'Números de Emergencia por País en América Latina'
                : 'Emergency Numbers by Country in Latin America'}
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--dim)', lineHeight: 1.7, marginBottom: '32px' }}>
              {es
                ? 'Un software CAD para América Latina debe soportar nativamente la numeración de emergencia de cada país. KabatOne K-Dispatch maneja todos los canales activos en un solo sistema.'
                : 'CAD software for Latin America must natively support each country\'s emergency numbering. KabatOne K-Dispatch handles all active channels in a single system.'}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {[
                { country: es ? 'México' : 'Mexico', numbers: '911', note: es ? 'Número único unificado desde 2017' : 'Unified single number since 2017' },
                { country: 'Chile', numbers: '133 / 131 / 132 / 149', note: es ? 'Carabineros / SAMU / Bomberos / PDI' : 'Carabineros / SAMU / Bomberos / PDI' },
                { country: 'Colombia', numbers: '123 / 112', note: es ? 'Policía + emergencias / Número europeo adoptado' : 'Police + emergencies / European number adopted' },
                { country: es ? 'Perú' : 'Peru', numbers: '105 / 106 / 116', note: es ? 'Policía / Bomberos / SAMU' : 'Police / Fire / SAMU' },
                { country: 'Argentina', numbers: '911 / 101 / 102 / 103', note: es ? 'Emergencias / Policía / Bomberos / Ambulancia' : 'Emergencies / Police / Fire / Ambulance' },
                { country: 'Ecuador', numbers: '911', note: es ? 'Sistema ECU-911 unificado' : 'Unified ECU-911 system' },
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)',
                  borderRadius: '10px', padding: '20px 16px',
                }}>
                  <div style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '16px', color: 'var(--white)', marginBottom: '6px',
                  }}>
                    {item.country}
                  </div>
                  <div style={{
                    fontFamily: 'DM Mono, monospace', fontWeight: 600,
                    fontSize: '14px', color: ACCENT, marginBottom: '6px',
                  }}>
                    {item.numbers}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', lineHeight: 1.55 }}>
                    {item.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- SECTION: 5-Step Unified Workflow -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? '¿Cómo Funciona KabatOne CAD Dispatch en América Latina?'
                : 'How Does KabatOne CAD Dispatch Work in Latin America?'}
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
                { href: '/k-dispatch', label: 'K-Dispatch', color: ACCENT, desc: es ? 'Despacho CAD / 911' : 'CAD dispatch / 911' },
                { href: '/k-safety', label: 'K-Safety', color: '#3b82f6', desc: es ? 'Conciencia situacional GIS' : 'GIS situational awareness' },
                { href: '/k-video', label: 'K-Video', color: '#a855f7', desc: es ? 'Gestión de video' : 'Video management' },
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
                ? 'CAD Norteamericano vs KabatOne para América Latina'
                : 'North American CAD vs KabatOne for Latin America'}
            </h2>

            <div style={{
              border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden',
            }}>
              <div style={{
                display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr',
                background: 'rgba(255,255,255,0.04)',
                borderBottom: '1px solid var(--border)',
                padding: '14px 20px',
              }}>
                {[
                  es ? 'Capacidad' : 'Capability',
                  es ? 'CAD Norteamericano (Tyler/Motorola/Hexagon)' : 'North American CAD (Tyler/Motorola/Hexagon)',
                  es ? 'KabatOne para LATAM' : 'KabatOne for LATAM',
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
                  { href: '/resources/what-is-cad-dispatch-software', label: es ? '¿Qué es el Software de Despacho CAD?' : 'What Is CAD Dispatch Software?' },
                  { href: '/resources/c5-command-centers-mexico-2026', label: es ? 'Centros C5 en México 2026' : 'C5 Command Centers Mexico 2026' },
                  { href: '/resources/911-call-center-software-guide', label: es ? 'Guía de Software para Call Centers 911' : '911 Call Center Software Guide' },
                  { href: '/resources/what-is-a-command-center', label: es ? '¿Qué es un Centro de Mando?' : 'What Is a Command Center?' },
                  { href: '/resources/public-safety-software-municipalities-mexico', label: es ? 'Seguridad Pública — México' : 'Public Safety Software — Mexico' },
                  { href: '/resources/build-rtcc-implementation-guide', label: es ? 'Guía de Implementación RTCC' : 'RTCC Implementation Guide' },
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
                  {es ? 'Por país:' : 'By country:'}
                </span>
                {[
                  { href: '/resources/public-safety-software-municipalities-mexico', label: es ? 'México' : 'Mexico' },
                  { href: '/resources/public-safety-software-colombia', label: 'Colombia' },
                  { href: '/resources/public-safety-software-peru', label: es ? 'Perú' : 'Peru' },
                  { href: '/resources/public-safety-software-chile', label: 'Chile' },
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
                ? 'Preguntas Sobre CAD Dispatch en América Latina'
                : 'Questions About CAD Dispatch in Latin America'}
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
              {es ? 'Artículos Relacionados' : 'Related Articles'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                {
                  href: '/resources/what-is-cad-dispatch-software',
                  en: 'What Is CAD Dispatch Software?',
                  es: '¿Qué es el Software de Despacho CAD?',
                },
                {
                  href: '/resources/c5-command-centers-mexico-2026',
                  en: 'C5 Command Centers in Mexico 2026',
                  es: 'Centros C5 en México 2026',
                },
                {
                  href: '/resources/911-call-center-software-guide',
                  en: '911 Call Center Software Guide',
                  es: 'Guía de Software para Call Centers 911',
                },
                {
                  href: '/resources/what-is-a-command-center',
                  en: 'What Is a Command Center (C2–C5)?',
                  es: '¿Qué es un Centro de Mando (C2–C5)?',
                },
                {
                  href: '/resources/psim-vs-unified-platform',
                  en: 'PSIM vs Unified Platform',
                  es: 'PSIM vs Plataforma Unificada',
                },
                {
                  href: '/resources/public-safety-software-municipalities-mexico',
                  en: 'Public Safety Software for Municipalities in Mexico',
                  es: 'Software de Seguridad Pública para Municipios en México',
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
          h2={es ? 'Moderniza el Despacho de Emergencias en tu Ciudad' : 'Modernize Emergency Dispatch in Your City'}
          subtitle={es
            ? 'KabatOne está desplegado en más de 40 ciudades latinoamericanas. Conoce cómo nuestra plataforma CAD nativa para LATAM puede transformar la respuesta de emergencias en tu municipio o centro de mando.'
            : 'KabatOne is deployed in more than 40 Latin American cities. See how our LATAM-native CAD platform can transform emergency response in your municipality or command center.'}
          cta1={es ? 'Solicita una Demo' : 'Book a Demo'}
          cta2={es ? 'Contactar Ventas' : 'Contact Sales'}
        />

        <Footer es={es} />

        <style>{`
          @media (max-width: 768px) {
            div[style*="grid-template-columns: 1fr 1fr"],
            div[style*="grid-template-columns: repeat(3"],
            div[style*="grid-template-columns: repeat(4"],
            div[style*="grid-template-columns: 1.2fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </>
  )
}
