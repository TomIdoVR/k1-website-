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
  return generatePageMetadata('bestPublicSafetySoftware', locale)
}

export default async function BestPublicSafetySoftwarePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#7c3aed'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/' },
    { name: es ? 'Mejor Software de Seguridad Pública 2026' : 'Best Public Safety Software 2026', url: es ? 'https://kabatone.com/es/resources/best-public-safety-software/' : 'https://kabatone.com/resources/best-public-safety-software/' },
  ]

  const faqs = es ? [
    {
      question: '¿Cuál es el mejor software de seguridad pública para un municipio pequeño?',
      answer: 'Para ciudades pequeñas que necesitan un sistema integrado — video, despacho y GIS — una plataforma unificada como KabatOne supera a la compra de herramientas separadas. Un solo proveedor, una sola interfaz y menor costo total.',
    },
    {
      question: '¿Genetec es mejor que KabatOne?',
      answer: 'Genetec es el líder del mercado en gestión de video. KabatOne agrega despacho CAD, GIS, gestión de tráfico y coordinación multiagencia que Genetec no ofrece. Son categorías distintas.',
    },
    {
      question: '¿Cuál es la diferencia entre software CAD y una plataforma unificada de seguridad pública?',
      answer: 'El CAD gestiona únicamente el despacho. Una plataforma unificada conecta video, sensores, GIS, despacho y coordinación de campo en una sola interfaz, eliminando los silos operativos entre sistemas.',
    },
    {
      question: '¿Qué software de seguridad pública es mejor para gobiernos de LATAM?',
      answer: 'KabatOne fue diseñado específicamente para despliegues en gobiernos de LATAM — interfaz en español, soporte local, compatibilidad con centros de mando C5/C2 y más de 40 despliegues activos en México, Perú y el resto de LATAM.',
    },
    {
      question: '¿Qué debe incluir un RFP gubernamental para software de seguridad pública?',
      answer: 'Requisitos clave: compatibilidad ONVIF/RTSP, integración CAD nativa, GIS en tiempo real, aplicación móvil de campo, preparación para NG911, soporte en español (LATAM) y licenciamiento modular.',
    },
    {
      question: '¿Cómo se compara KabatOne con Motorola Solutions?',
      answer: 'Motorola ofrece múltiples productos separados — Avigilon VMS, PremierOne CAD, CommandCentral Aware. KabatOne es una plataforma nativamente unificada — todos los módulos construidos juntos, no integrados después del hecho.',
    },
  ] : [
    {
      question: 'What is the best public safety software for a small municipality?',
      answer: 'For small cities that need an integrated system — video, dispatch, and GIS — a unified platform like KabatOne outperforms buying separate tools. Single vendor, single interface, lower total cost.',
    },
    {
      question: 'Is Genetec better than KabatOne?',
      answer: 'Genetec is the market leader in video management. KabatOne adds CAD dispatch, GIS, traffic management, and multi-agency coordination that Genetec doesn\'t provide. Different categories.',
    },
    {
      question: 'What is the difference between CAD software and a unified public safety platform?',
      answer: 'CAD manages dispatch only. A unified platform connects video, sensors, GIS, dispatch, and field coordination in one interface — eliminating the operational silos between systems.',
    },
    {
      question: 'Which public safety software is best for LATAM governments?',
      answer: 'KabatOne was purpose-built for LATAM government deployments — Spanish interface, local support, C5/C2 command center compatibility, and 40+ active city deployments in Mexico, Peru, and broader LATAM.',
    },
    {
      question: 'What should a government RFP for public safety software include?',
      answer: 'Key requirements: ONVIF/RTSP compatibility, native CAD integration, real-time GIS, mobile field app, NG911 readiness, Spanish language support (LATAM), and modular licensing.',
    },
    {
      question: 'How does KabatOne compare to Motorola Solutions?',
      answer: 'Motorola offers multiple separate products — Avigilon VMS, PremierOne CAD, CommandCentral Aware. KabatOne is a natively unified platform — all modules built together, not integrated after the fact.',
    },
  ]

  const categories = es ? [
    {
      num: '01',
      title: 'Sistemas de Gestión de Video (VMS)',
      vendors: 'Genetec, Milestone, Avigilon (Motorola), Verint',
      bestFor: 'Organizaciones que necesitan gestión centralizada de cámaras con analítica de IA',
      limitation: 'Solo VMS — sin despacho, sin GIS, sin coordinación de campo',
      color: '#3b82f6',
    },
    {
      num: '02',
      title: 'Software CAD / Despacho de Emergencias',
      vendors: 'Hexagon HxGN OnCall, Motorola PremierOne, Mark43, Carbyne',
      bestFor: 'PSAPs y centros de despacho 911 que gestionan la asignación de unidades',
      limitation: 'Solo despacho — sin integración de video, sin mapa operativo compartido',
      color: '#ef4444',
    },
    {
      num: '03',
      title: 'Plataformas RTCC / Inteligencia Criminal',
      vendors: 'Fusus, Axon, Peregrine',
      bestFor: 'Agencias de seguridad que construyen capacidad de análisis criminal en tiempo real',
      limitation: 'Enfocadas en policía — tipicamente carece de coordinación de tráfico, bomberos y EMS',
      color: '#f59e0b',
    },
    {
      num: '04',
      title: 'PSIM (Gestión de Información de Seguridad Física)',
      vendors: 'NICE Systems (Qognify), Verint, Genetec',
      bestFor: 'Instalaciones grandes que necesitan agregación de alarmas de múltiples sistemas de seguridad',
      limitation: 'Agrega alertas pero no reemplaza los flujos de trabajo operativos',
      color: '#8b5cf6',
    },
    {
      num: '05',
      title: 'Plataformas NG911 / Comunicación de Emergencias',
      vendors: 'RapidSOS, Carbyne, Prepared911',
      bestFor: 'PSAPs que actualizan a NG911 — texto, video, datos de ubicación',
      limitation: 'Solo capa de comunicación — no incluye gestión de video ni GIS de campo',
      color: '#06b6d4',
    },
    {
      num: '06',
      title: 'Plataformas Unificadas de Seguridad Pública',
      vendors: 'KabatOne, Motorola CommandCentral (parcial)',
      bestFor: 'Municipios y centros de mando que necesitan video + despacho + GIS + sensores en un entorno operativo',
      limitation: 'Despliegue inicial más complejo que herramientas de propósito único',
      color: '#22c55e',
    },
  ] : [
    {
      num: '01',
      title: 'Video Management Systems (VMS)',
      vendors: 'Genetec, Milestone, Avigilon (Motorola), Verint',
      bestFor: 'Organizations that need centralized camera management with AI analytics',
      limitation: 'VMS-only — no dispatch, no GIS, no field coordination',
      color: '#3b82f6',
    },
    {
      num: '02',
      title: 'CAD / Emergency Dispatch Software',
      vendors: 'Hexagon HxGN OnCall, Motorola PremierOne, Mark43, Carbyne',
      bestFor: '911 PSAPs and dispatch centers managing unit assignment',
      limitation: 'Dispatch-only — no video integration, no shared operational map',
      color: '#ef4444',
    },
    {
      num: '03',
      title: 'RTCC / Crime Intelligence Platforms',
      vendors: 'Fusus, Axon, Peregrine',
      bestFor: 'Law enforcement agencies building real-time crime analysis capability',
      limitation: 'Police-focused — typically lacks traffic, fire, EMS coordination',
      color: '#f59e0b',
    },
    {
      num: '04',
      title: 'PSIM (Physical Security Information Management)',
      vendors: 'NICE Systems (Qognify), Verint, Genetec',
      bestFor: 'Large facilities needing alarm aggregation from multiple security systems',
      limitation: 'Aggregates alerts but doesn\'t replace operational workflows',
      color: '#8b5cf6',
    },
    {
      num: '05',
      title: 'NG911 / Emergency Communication Platforms',
      vendors: 'RapidSOS, Carbyne, Prepared911',
      bestFor: 'PSAPs upgrading to NG911 — text, video, location data',
      limitation: 'Communication layer only — doesn\'t include video management or field GIS',
      color: '#06b6d4',
    },
    {
      num: '06',
      title: 'Unified Public Safety Platforms',
      vendors: 'KabatOne, Motorola CommandCentral (partial)',
      bestFor: 'Municipalities and command centers that need video + dispatch + GIS + sensors in one operational environment',
      limitation: 'More complex initial deployment than single-purpose tools',
      color: '#22c55e',
    },
  ]

  const comparisonRows = es ? [
    { dimension: 'Video', single: 'VMS líder, pero sin enlace de despacho', unified: 'Integrado con GIS y despacho' },
    { dimension: 'Despacho', single: 'CAD especializado, pero sin visibilidad de cámaras', unified: 'El despacho ve cámaras en vivo y alertas de sensores' },
    { dimension: 'GIS', single: 'Capa GIS separada, actualizaciones manuales', unified: 'Mapa operativo en tiempo real compartido entre agencias' },
    { dimension: 'Sensores', single: 'Correlación manual de alertas', unified: 'Fusión automatizada de múltiples sensores' },
    { dimension: 'Costo', single: 'Menor por herramienta, pero 3-5 contratos de proveedores', unified: 'Un proveedor, una plataforma' },
    { dimension: 'Capacitación', single: 'Múltiples sistemas por operador', unified: 'Una interfaz para todas las funciones' },
    { dimension: 'Actualización', single: 'Cada herramienta se actualiza de forma independiente', unified: 'Hoja de ruta unificada de un solo proveedor' },
  ] : [
    { dimension: 'Video', single: 'Best-in-class VMS, but no dispatch link', unified: 'Integrated with GIS and dispatch' },
    { dimension: 'Dispatch', single: 'Specialized CAD, but no camera visibility', unified: 'Dispatch sees live cameras and sensor alerts' },
    { dimension: 'GIS', single: 'Separate GIS layer, manual updates', unified: 'Real-time operational map shared across agencies' },
    { dimension: 'Sensors', single: 'Manual alert correlation', unified: 'Automated cross-sensor fusion' },
    { dimension: 'Cost', single: 'Lower per-tool, but 3-5 vendor contracts', unified: 'Single vendor, single platform' },
    { dimension: 'Training', single: 'Multiple systems per operator', unified: 'One interface for all functions' },
    { dimension: 'Upgrade path', single: 'Each tool upgrades independently', unified: 'Unified roadmap from one vendor' },
  ]

  const useCaseCards = es ? [
    { label: 'Solo video', rec: 'Genetec o Milestone', note: 'Si solo necesitas VMS', href: '/vs/genetec', hrefLabel: 'KabatOne vs Genetec', color: '#3b82f6' },
    { label: 'Solo despacho', rec: 'Hexagon o Mark43', note: 'Si solo necesitas CAD', href: '/vs/hexagon', hrefLabel: 'KabatOne vs Hexagon', color: '#ef4444' },
    { label: 'Inteligencia RTCC', rec: 'Fusus o Axon', note: 'RTCC para seguridad pública', href: '/vs/fusus', hrefLabel: 'KabatOne vs Fusus', color: '#f59e0b' },
    { label: 'NG911', rec: 'RapidSOS o Carbyne', note: 'Actualización de comunicación PSAP', href: '/vs/axon', hrefLabel: 'KabatOne vs Axon', color: '#06b6d4' },
    { label: 'Centro de mando unificado (municipios)', rec: 'KabatOne', note: 'Video + CAD + GIS + tráfico + sensores', href: '/resources/what-is-a-public-safety-platform', hrefLabel: '¿Qué es una plataforma unificada?', color: '#7c3aed', highlight: true },
    { label: 'Gobierno LATAM', rec: 'KabatOne', note: 'Español, soporte local, 40+ despliegues LATAM', href: '/resources/psim-vs-unified-platform', hrefLabel: 'PSIM vs Plataforma Unificada', color: '#22c55e', highlight: true },
  ] : [
    { label: 'Best for video-only', rec: 'Genetec or Milestone', note: 'If you only need VMS', href: '/vs/genetec', hrefLabel: 'KabatOne vs Genetec', color: '#3b82f6' },
    { label: 'Best for dispatch-only', rec: 'Hexagon or Mark43', note: 'If you only need CAD', href: '/vs/hexagon', hrefLabel: 'KabatOne vs Hexagon', color: '#ef4444' },
    { label: 'Best for RTCC intelligence', rec: 'Fusus or Axon', note: 'Law enforcement RTCC', href: '/vs/fusus', hrefLabel: 'KabatOne vs Fusus', color: '#f59e0b' },
    { label: 'Best for NG911', rec: 'RapidSOS or Carbyne', note: 'PSAP communication upgrade', href: '/vs/axon', hrefLabel: 'KabatOne vs Axon', color: '#06b6d4' },
    { label: 'Best for unified command center (municipalities)', rec: 'KabatOne', note: 'Video + CAD + GIS + traffic + sensors', href: '/resources/what-is-a-public-safety-platform', hrefLabel: 'What Is a Unified Platform?', color: '#7c3aed', highlight: true },
    { label: 'Best for LATAM government', rec: 'KabatOne', note: 'Spanish, local support, 40+ LATAM deployments', href: '/resources/psim-vs-unified-platform', hrefLabel: 'PSIM vs Unified Platform', color: '#22c55e', highlight: true },
  ]

  const title = es
    ? 'Mejor Software de Seguridad Pública para Gobiernos en 2026'
    : 'Best Public Safety Software for Government in 2026'

  const desc = es
    ? 'Las mejores plataformas de seguridad pública para gobiernos y municipios en 2026 — evaluadas por categoría: despacho CAD, gestión de video, GIS, RTCC y centros de mando unificados.'
    : 'The top public safety software platforms for government agencies in 2026 — evaluated by category: CAD dispatch, video management, GIS, RTCC, and unified command center platforms.'

  const url = es
    ? 'https://kabatone.com/es/resources/best-public-safety-software/'
    : 'https://kabatone.com/resources/best-public-safety-software/'

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(title, desc, url, '2026-04-08')) }}
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

        {/* ── BREADCRUMB ── */}
        <div style={{
          maxWidth: '1160px', margin: '0 auto', padding: '20px 40px 0',
          display: 'flex', alignItems: 'center', gap: '8px',
          fontFamily: 'DM Mono, monospace', fontSize: '11px',
          letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)',
        }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{es ? 'Inicio' : 'Home'}</Link>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: 'var(--muted)' }}>{es ? 'Recursos' : 'Resources'}</span>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: ACCENT }}>{es ? 'Mejor Software de Seguridad Pública 2026' : 'Best Public Safety Software 2026'}</span>
        </div>

        {/* ── HERO ── */}
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 40px 80px' }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '11px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: ACCENT, marginBottom: '20px',
          }}>
            <span style={{ display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%', background: ACCENT, marginRight: '8px', verticalAlign: 'middle', animation: 'pulse 2s infinite' }} />
            {es ? 'Evaluación Comparativa 2026' : 'Synthesized Comparison 2026'}
          </p>
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.05,
            letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '28px',
          }}>
            {title}
          </h1>
          <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75 }}>
            {es
              ? 'Una evaluación objetiva de las principales plataformas de software de seguridad pública por categoría — para agencias de gobierno, municipios y centros de mando que evalúan sus opciones.'
              : 'An objective evaluation of the leading public safety software platforms by category — for government agencies, municipalities, and command centers evaluating their options.'}
          </p>
        </section>

        {/* ── HOW TO EVALUATE ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'Cómo Evaluar Software de Seguridad Pública' : 'How to Evaluate Public Safety Software'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'El software de seguridad pública abarca una categoría amplia — desde herramientas de propósito único (solo video, solo despacho) hasta plataformas unificadas que combinan múltiples capacidades. La elección correcta depende de lo que necesitas resolver: una infraestructura de video fragmentada, un flujo de despacho lento o la ausencia de una imagen operativa compartida entre agencias.'
                : 'Public safety software covers a broad category — from single-purpose tools (just video, just dispatch) to unified platforms that combine multiple capabilities. The right choice depends on what you\'re trying to solve: a fragmented video infrastructure, a slow dispatch workflow, or the absence of a shared operational picture across agencies.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Esta guía evalúa las principales plataformas por categoría y explica las diferencias entre herramientas especializadas y plataformas unificadas. Si estás construyendo o actualizando un centro de mando C2/C5, la elección de arquitectura es más importante que la elección de proveedor.'
                : 'This guide evaluates the leading platforms by category and explains the trade-offs between specialized tools and unified platforms. If you\'re building or upgrading a C2/C5 command center, the architecture choice matters more than the vendor choice.'}
            </p>
          </div>
        </section>

        {/* ── 6 CATEGORIES ── */}
        <section style={{ padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '12px',
            }}>
              {es ? '6 Categorías de Software de Seguridad Pública' : '6 Categories of Public Safety Software'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '48px' }}>
              {es
                ? 'Cada categoría resuelve un problema específico. Comprender las diferencias es el primer paso para una decisión de compra bien informada.'
                : 'Each category solves a specific problem. Understanding the distinctions is the first step to a well-informed procurement decision.'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {categories.map((cat) => (
                <div key={cat.num} style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                  borderLeft: `3px solid ${cat.color}`, borderRadius: '12px',
                  padding: '28px 32px', display: 'grid',
                  gridTemplateColumns: '48px 1fr',
                  gap: '0 24px', alignItems: 'start',
                }}>
                  <div style={{
                    fontFamily: 'DM Mono, monospace', fontWeight: 700,
                    fontSize: '13px', color: cat.color, letterSpacing: '0.1em',
                    paddingTop: '4px',
                  }}>
                    {cat.num}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                      fontSize: '20px', color: 'var(--white)', marginBottom: '12px', lineHeight: 1.2,
                    }}>
                      {cat.title}
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 1.55 }}>
                        <span style={{ fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '10px', fontFamily: 'DM Mono, monospace' }}>
                          {es ? 'Proveedores principales' : 'Leading vendors'}
                        </span>
                        <span style={{ display: 'block', marginTop: '3px' }}>{cat.vendors}</span>
                      </div>
                      <div style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 1.55 }}>
                        <span style={{ fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '10px', fontFamily: 'DM Mono, monospace' }}>
                          {es ? 'Mejor para' : 'Best for'}
                        </span>
                        <span style={{ display: 'block', marginTop: '3px' }}>{cat.bestFor}</span>
                      </div>
                      <div style={{ fontSize: '13px', color: '#f87171', lineHeight: 1.55 }}>
                        <span style={{ fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '10px', fontFamily: 'DM Mono, monospace' }}>
                          {es ? 'Limitación' : 'Limitation'}
                        </span>
                        <span style={{ display: 'block', marginTop: '3px' }}>{cat.limitation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── UNIFIED VS SPECIALIZED EDITORIAL ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '16px',
            }}>
              {es ? 'Análisis Editorial' : 'Editorial Analysis'}
            </p>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '28px',
            }}>
              {es ? 'La Diferencia Entre Plataforma Unificada y Herramientas Especializadas' : 'The Unified vs Specialized Trade-Off'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Las herramientas de propósito único son más fáciles de comprar e implementar individualmente. Pero cuando se detecta un disparo con un sensor acústico, y el operador necesita acceder a la cámara más cercana, despachar la unidad más próxima y registrar el incidente — tres herramientas separadas significan tres pantallas distintas, tres inicios de sesión y entre 60 y 90 segundos de tiempo de coordinación perdido.'
                : 'Single-purpose tools are easier to buy and deploy individually. But when a gunshot is detected by an acoustic sensor, and the operator needs to pull the nearest camera, dispatch the closest unit, and log the incident — three separate tools means three separate screens, three logins, and 60-90 seconds of lost coordination time.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '32px' }}>
              {es
                ? 'Una plataforma unificada hace esto en una sola acción. Para agencias de gobierno donde la velocidad de respuesta importa, la diferencia operativa es significativa. La pregunta no es si una plataforma unificada es técnicamente superior — lo es. La pregunta es si tu organización está lista para hacer la transición.'
                : 'A unified platform does this in one action. For government agencies where response speed matters, the operational difference is significant. The question is not whether a unified platform is technically superior — it is. The question is whether your organization is ready to make the transition.'}
            </p>

            {/* Internal links block */}
            <div style={{
              background: `${ACCENT}08`, border: `1px solid ${ACCENT}30`,
              borderRadius: '12px', padding: '20px 24px',
            }}>
              <p style={{
                fontFamily: 'DM Mono, monospace', fontSize: '10px',
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: ACCENT, marginBottom: '12px',
              }}>
                {es ? 'Lecturas relacionadas' : 'Related reading'}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { href: '/resources/what-is-a-public-safety-platform', label: es ? '¿Qué es una plataforma de seguridad pública?' : 'What Is a Public Safety Platform?' },
                  { href: '/resources/psim-vs-unified-platform', label: es ? 'PSIM vs Plataforma Unificada' : 'PSIM vs Unified Platform' },
                  { href: '/resources/end-of-siloed-response', label: es ? 'El Fin de la Respuesta en Silos' : 'The End of Siloed Response' },
                ].map((link) => (
                  <Link key={link.href} href={link.href} style={{
                    fontSize: '14px', color: ACCENT, textDecoration: 'none',
                    borderBottom: `1px solid ${ACCENT}30`, paddingBottom: '4px',
                    display: 'inline-block', alignSelf: 'flex-start',
                  }}>
                    {link.label} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section style={{ padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '16px',
            }}>
              {es ? 'Herramientas Especializadas vs Plataforma Unificada' : 'Single-Purpose Tools vs Unified Platform'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '40px' }}>
              {es
                ? 'Comparación directa en las dimensiones operativas más importantes para gobiernos y municipios.'
                : 'Direct comparison across the most operationally significant dimensions for governments and municipalities.'}
            </p>

            <div style={{ borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden' }}>
              {/* Table header */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                background: `${ACCENT}15`, borderBottom: '1px solid var(--border)',
              }}>
                <div style={{ padding: '16px 20px', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '14px', letterSpacing: '0.08em', textTransform: 'uppercase', color: ACCENT }}>
                  {es ? 'Dimensión' : 'Dimension'}
                </div>
                <div style={{ padding: '16px 20px', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '14px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', borderLeft: '1px solid var(--border)' }}>
                  {es ? 'Herramientas Especializadas' : 'Single-Purpose Tools'}
                </div>
                <div style={{ padding: '16px 20px', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '14px', letterSpacing: '0.08em', textTransform: 'uppercase', color: ACCENT, borderLeft: '1px solid var(--border)' }}>
                  {es ? 'Plataforma Unificada' : 'Unified Platform'}
                </div>
              </div>
              {/* Table rows */}
              {comparisonRows.map((row, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                  borderBottom: i < comparisonRows.length - 1 ? '1px solid var(--border)' : 'none',
                  background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)',
                }}>
                  <div style={{ padding: '16px 20px', fontSize: '14px', fontWeight: 600, color: 'var(--white)' }}>
                    {row.dimension}
                  </div>
                  <div style={{ padding: '16px 20px', fontSize: '14px', color: 'var(--dim)', lineHeight: 1.55, borderLeft: '1px solid var(--border)' }}>
                    {row.single}
                  </div>
                  <div style={{ padding: '16px 20px', fontSize: '14px', color: `${ACCENT}dd`, lineHeight: 1.55, borderLeft: '1px solid var(--border)' }}>
                    {row.unified}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BEST BY USE CASE ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '16px',
            }}>
              {es ? 'Recomendación por Caso de Uso' : 'Best Platform by Use Case'}
            </p>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '12px',
            }}>
              {es ? '¿Qué Plataforma Debes Elegir?' : 'Which Platform Should You Choose?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '40px' }}>
              {es
                ? 'La respuesta honesta: depende de lo que estás resolviendo. No todas las organizaciones necesitan una plataforma unificada. Pero la mayoría de los gobiernos y municipios que coordinan múltiples servicios sí la necesitan.'
                : 'The honest answer: it depends on what you\'re solving. Not every organization needs a unified platform. But most governments and municipalities coordinating multiple services do.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
              {useCaseCards.map((card) => (
                <div key={card.label} style={{
                  background: card.highlight ? `${card.color}10` : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${card.highlight ? card.color + '40' : 'var(--border)'}`,
                  borderRadius: '12px', padding: '24px 24px 20px',
                  display: 'flex', flexDirection: 'column', gap: '10px',
                }}>
                  <div style={{
                    fontFamily: 'DM Mono, monospace', fontSize: '10px',
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: card.color,
                  }}>
                    {card.label}
                  </div>
                  <div style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '22px', color: 'var(--white)', lineHeight: 1.1,
                  }}>
                    {card.rec}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 1.55 }}>
                    {card.note}
                  </div>
                  <Link href={card.href} style={{
                    marginTop: '4px', fontSize: '12px', color: card.color,
                    textDecoration: 'none', borderBottom: `1px solid ${card.color}40`,
                    paddingBottom: '2px', alignSelf: 'flex-start',
                  }}>
                    {card.hrefLabel} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPETITOR LINKS ── */}
        <section style={{ padding: '64px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '20px',
            }}>
              {es ? 'Comparaciones Detalladas' : 'Detailed Comparisons'}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {[
                { href: '/vs/genetec', label: 'KabatOne vs Genetec' },
                { href: '/vs/milestone', label: 'KabatOne vs Milestone' },
                { href: '/vs/motorola', label: 'KabatOne vs Motorola' },
                { href: '/vs/hexagon', label: 'KabatOne vs Hexagon' },
                { href: '/vs/fusus', label: 'KabatOne vs Fusus' },
                { href: '/vs/axon', label: 'KabatOne vs Axon' },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{
                  display: 'inline-block', padding: '8px 16px',
                  background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)',
                  borderRadius: '6px', fontSize: '13px', color: 'var(--dim)',
                  textDecoration: 'none', transition: 'border-color 0.2s',
                }}>
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Resource links */}
            <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <p style={{
                fontFamily: 'DM Mono, monospace', fontSize: '10px',
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--muted)', marginBottom: '4px',
              }}>
                {es ? 'Recursos relacionados' : 'Related resources'}
              </p>
              {[
                { href: '/resources/what-is-a-public-safety-platform', label: es ? '¿Qué es una plataforma de seguridad pública?' : 'What Is a Public Safety Platform?' },
                { href: '/resources/psim-vs-unified-platform', label: es ? 'PSIM vs Plataforma Unificada' : 'PSIM vs Unified Platform' },
                { href: '/resources/what-is-cad-dispatch-software', label: es ? '¿Qué es el software CAD de despacho?' : 'What Is CAD Dispatch Software?' },
                { href: '/resources/what-is-video-management-software', label: es ? '¿Qué es el software de gestión de video?' : 'What Is Video Management Software?' },
                { href: '/resources/what-is-a-real-time-crime-center', label: es ? '¿Qué es un centro de crimen en tiempo real?' : 'What Is a Real-Time Crime Center?' },
                { href: '/resources/end-of-siloed-response', label: es ? 'El Fin de la Respuesta en Silos' : 'The End of Siloed Response' },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '14px 18px', borderRadius: '8px',
                  border: '1px solid var(--border)', textDecoration: 'none',
                  color: 'var(--dim)', fontSize: '14px',
                }}>
                  <span>{link.label}</span>
                  <span style={{ color: ACCENT, fontSize: '13px' }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '16px',
            }}>
              {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </p>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '40px',
            }}>
              {es ? 'Software de Seguridad Pública: Preguntas y Respuestas' : 'Public Safety Software: Questions & Answers'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                  borderRadius: '12px', padding: '24px 28px',
                }}>
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '18px', color: 'var(--white)', marginBottom: '12px', lineHeight: 1.3,
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

        {/* ── CTA ── */}
        <CTASection
          es={es}
          h2={es ? '¿Listo para Evaluar una Plataforma Unificada?' : 'Ready to Evaluate a Unified Platform?'}
          subtitle={es
            ? 'Descubre cómo KabatOne conecta video, despacho, GIS y sensores en un solo entorno operativo. Demo personalizada en 30 minutos.'
            : 'See how KabatOne connects video, dispatch, GIS, and sensors in one operational environment. Personalized demo in 30 minutes.'}
        />

        <Footer es={es} />

        <style>{`
          @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
          @media (max-width: 768px) {
            section > div > div[style*="grid-template-columns: 1fr 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
            section > div > div[style*="grid-template-columns: repeat"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </>
  )
}
