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
  return generatePageMetadata('psimVsUnifiedPlatform', locale)
}

export default async function PsimVsUnifiedPlatformPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#8b5cf6'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/' },
    { name: es ? 'PSIM vs Plataforma Unificada' : 'PSIM vs Unified Platform', url: es ? 'https://kabatone.com/es/resources/psim-vs-unified-platform/' : 'https://kabatone.com/resources/psim-vs-unified-platform/' },
  ]

  const faqs = es ? [
    {
      question: '¿Cual es la diferencia entre PSIM y una plataforma unificada?',
      answer: 'PSIM (Physical Security Information Management) es una capa de middleware que conecta sistemas de seguridad aislados mediante APIs y conectores. Una plataforma unificada reemplaza los silos por completo, integrando video, despacho, GIS y operaciones de campo en un solo sistema nativo. PSIM agrega alarmas de multiples proveedores; una plataforma unificada es un sistema unico donde todos los modulos comparten datos, interfaz y logica de negocio.',
    },
    {
      question: '¿Sigue siendo relevante PSIM para la seguridad publica?',
      answer: 'PSIM sigue siendo relevante en entornos con infraestructura heredada significativa de multiples proveedores que no puede ser reemplazada. Sin embargo, las plataformas unificadas estan reemplazando a PSIM en nuevos despliegues porque eliminan la complejidad de integracion, reducen el costo total de propiedad y ofrecen una experiencia de operador mas simple y consistente.',
    },
    {
      question: '¿Cuales son las desventajas de PSIM?',
      answer: 'Las principales desventajas de PSIM incluyen: alta complejidad de integracion con multiples proveedores, costos de licencia por cada integracion, dependencia del proveedor de PSIM para mantener conectores actualizados, experiencia de usuario fragmentada entre subsistemas, y periodos de implementacion prolongados que pueden superar los 12 meses.',
    },
    {
      question: '¿Que es una alternativa a PSIM?',
      answer: 'Una alternativa a PSIM es una plataforma unificada de seguridad publica como KabatOne. KabatOne conecta video, despacho CAD, GIS, gestion de trafico y operaciones de campo en una sola plataforma nativa. En lugar de actuar como middleware entre sistemas aislados, KabatOne reemplaza los silos con modulos integrados nativamente: K-Safety, K-Dispatch, K-Video, K-Traffic y K-Connect.',
    },
    {
      question: '¿Como manejan las plataformas unificadas los sistemas de camaras heredados?',
      answer: 'Las plataformas unificadas como KabatOne soportan protocolos estandar de la industria como ONVIF y RTSP, lo que permite incorporar camaras de cualquier fabricante. K-Video de KabatOne agrega camaras IP, CCTV analogico, body cams y feeds de drones en una sola vista sin requerir hardware propietario adicional.',
    },
    {
      question: '¿Cual es el enfoque de KabatOne para reemplazar PSIM?',
      answer: 'KabatOne reemplaza la arquitectura PSIM con una plataforma nativa donde despacho (K-Dispatch), video (K-Video), GIS (K-Safety), trafico (K-Traffic) y video comunitario (K-Connect) comparten una base de datos unificada, un motor de reglas comun y una interfaz unica para el operador. Esto elimina los conectores de middleware y reduce el tiempo de despliegue a semanas en lugar de meses.',
    },
  ] : [
    {
      question: 'What is the difference between PSIM and a unified platform?',
      answer: 'PSIM (Physical Security Information Management) is a middleware layer that connects siloed security systems through APIs and connectors. A unified platform replaces silos entirely, integrating video, dispatch, GIS, and field operations into one native system. PSIM aggregates alarms from multiple vendors; a unified platform is a single system where all modules share data, interface, and business logic.',
    },
    {
      question: 'Is PSIM still relevant for public safety?',
      answer: 'PSIM remains relevant in environments with significant legacy infrastructure from multiple vendors that cannot be replaced. However, unified platforms are replacing PSIM in new deployments because they eliminate integration complexity, reduce total cost of ownership, and deliver a simpler, more consistent operator experience.',
    },
    {
      question: 'What are the disadvantages of PSIM?',
      answer: 'The main disadvantages of PSIM include: high integration complexity with multiple vendors, per-integration licensing costs, dependence on the PSIM vendor to maintain updated connectors, fragmented user experience across subsystems, and extended implementation timelines that can exceed 12 months.',
    },
    {
      question: 'What is a PSIM alternative?',
      answer: 'A PSIM alternative is a unified public safety platform such as KabatOne. KabatOne connects video, CAD dispatch, GIS, traffic management, and field operations in one native platform. Instead of acting as middleware between siloed systems, KabatOne replaces silos with natively integrated modules: K-Safety, K-Dispatch, K-Video, K-Traffic, and K-Connect.',
    },
    {
      question: 'How do unified platforms handle legacy camera systems?',
      answer: 'Unified platforms like KabatOne support industry-standard protocols such as ONVIF and RTSP, enabling integration of cameras from any manufacturer. KabatOne K-Video aggregates IP cameras, analog CCTV, body cams, and drone feeds into a single view without requiring additional proprietary hardware.',
    },
    {
      question: 'What is KabatOne\'s approach to PSIM replacement?',
      answer: 'KabatOne replaces PSIM architecture with a native platform where dispatch (K-Dispatch), video (K-Video), GIS (K-Safety), traffic (K-Traffic), and community video (K-Connect) share a unified database, a common rules engine, and a single operator interface. This eliminates middleware connectors and reduces deployment time from months to weeks.',
    },
  ]

  const comparisonRows = es ? [
    {
      category: 'Arquitectura',
      psim: 'Capa de middleware que conecta sistemas de terceros',
      unified: 'Plataforma nativa con modulos integrados',
    },
    {
      category: 'Integracion',
      psim: 'Conectores API por cada subsistema de cada proveedor',
      unified: 'Modulos nativos que comparten datos y logica de negocio',
    },
    {
      category: 'Despliegue',
      psim: 'Multi-proveedor, complejo, tipicamente 6-18 meses',
      unified: 'Un solo proveedor, despliegue en semanas',
    },
    {
      category: 'Modelo de Costos',
      psim: 'Licencia por integracion + licencias de subsistemas',
      unified: 'Licencia por asiento o por sitio, todo incluido',
    },
    {
      category: 'Mantenimiento',
      psim: 'Depende de multiples proveedores para actualizaciones',
      unified: 'Actualizaciones centralizadas de un solo proveedor',
    },
    {
      category: 'Experiencia del Operador',
      psim: 'Interfaz fragmentada entre subsistemas',
      unified: 'Una sola interfaz unificada para todas las funciones',
    },
  ] : [
    {
      category: 'Architecture',
      psim: 'Middleware layer connecting third-party systems',
      unified: 'Native platform with built-in modules',
    },
    {
      category: 'Integration',
      psim: 'API connectors per subsystem per vendor',
      unified: 'Native modules sharing data and business logic',
    },
    {
      category: 'Deployment',
      psim: 'Multi-vendor, complex, typically 6-18 months',
      unified: 'Single vendor, deployable in weeks',
    },
    {
      category: 'Cost Model',
      psim: 'Per-integration license + subsystem licenses',
      unified: 'Per-seat or per-site license, all-inclusive',
    },
    {
      category: 'Maintenance',
      psim: 'Depends on multiple vendors for updates',
      unified: 'Centralized updates from a single vendor',
    },
    {
      category: 'Operator Experience',
      psim: 'Fragmented interface across subsystems',
      unified: 'Single unified interface for all functions',
    },
  ]

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(
          es ? 'PSIM vs Plataforma Unificada — ¿Cual Es la Diferencia?' : 'PSIM vs Unified Platform — What\'s the Difference?',
          es ? 'PSIM integra alarmas de sistemas aislados. Las plataformas unificadas reemplazan los silos. Compara arquitecturas, costos y resultados reales en seguridad publica.' : 'PSIM integrates alarms from siloed systems. Unified platforms replace silos entirely. Compare architectures, costs, and real-world outcomes for public safety.',
          es ? 'https://kabatone.com/es/resources/psim-vs-unified-platform/' : 'https://kabatone.com/resources/psim-vs-unified-platform/',
          '2026-03-19'
        )) }}
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
          <span style={{ color: ACCENT }}>PSIM vs {es ? 'Plataforma Unificada' : 'Unified Platform'}</span>
        </div>

        {/* ── HERO ── */}
        <section style={{
          maxWidth: '800px', margin: '0 auto', padding: '64px 40px 80px',
        }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '11px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: ACCENT, marginBottom: '20px',
          }}>
            <span style={{ display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%', background: ACCENT, marginRight: '8px', verticalAlign: 'middle', animation: 'pulse 2s infinite' }} />
            {es ? 'Guia Comparativa' : 'Comparison Guide'}
          </p>
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.05,
            letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '28px',
          }}>
            {es
              ? 'PSIM vs Plataforma Unificada — ¿Cual Es la Diferencia?'
              : 'PSIM vs Unified Platform — What\'s the Difference?'}
          </h1>
          <p style={{
            fontSize: '18px', fontWeight: 300, color: 'var(--dim)',
            lineHeight: 1.75, marginBottom: '0',
          }}>
            {es
              ? 'PSIM (Physical Security Information Management) actua como middleware que conecta sistemas de seguridad aislados. Una plataforma unificada de seguridad publica reemplaza esos silos por completo, integrando video, despacho CAD, GIS y operaciones de campo en un solo sistema nativo. La diferencia fundamental es arquitectonica: PSIM agrega alarmas de multiples productos de terceros, mientras que una plataforma unificada es un producto unico donde todos los modulos fueron disenados para trabajar juntos desde su origen.'
              : 'PSIM (Physical Security Information Management) acts as middleware that connects siloed security systems. A unified public safety platform replaces those silos entirely, integrating video, CAD dispatch, GIS, and field operations into one native system. The fundamental difference is architectural: PSIM aggregates alarms from multiple third-party products, while a unified platform is a single product where all modules were designed to work together from the ground up.'}
          </p>
        </section>

        {/* ── WHAT IS PSIM? ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Que Es PSIM?' : 'What Is PSIM?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'PSIM significa Physical Security Information Management (Gestion de Informacion de Seguridad Fisica). PSIM es una categoria de software que recopila y correlaciona eventos de subsistemas de seguridad no relacionados — como control de acceso, CCTV, deteccion de intrusiones, incendios y sistemas de intercomunicacion — y los presenta en una sola interfaz de operador.'
                : 'PSIM stands for Physical Security Information Management. PSIM is a software category that collects and correlates events from unrelated security subsystems — such as access control, CCTV, intrusion detection, fire, and intercom systems — and presents them in a single operator interface.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'La arquitectura PSIM funciona como una capa de middleware. El software PSIM no reemplaza los subsistemas existentes; se conecta a ellos mediante APIs, SDKs y conectores propietarios. Cada integracion requiere desarrollo y mantenimiento individual. Si el proveedor de camaras actualiza su API, el conector PSIM debe actualizarse por separado.'
                : 'PSIM architecture works as a middleware layer. PSIM software does not replace existing subsystems; it connects to them through APIs, SDKs, and proprietary connectors. Each integration requires individual development and maintenance. If the camera vendor updates its API, the PSIM connector must be updated separately.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'PSIM fue desarrollado originalmente para entornos de seguridad corporativa donde multiples sistemas independientes necesitaban ser supervisados desde un solo punto. Productos PSIM conocidos incluyen Genetec Security Center, CNL IPSecurityCenter y Vidsys.'
                : 'PSIM was originally developed for corporate security environments where multiple independent systems needed to be monitored from a single point. Well-known PSIM products include Genetec Security Center, CNL IPSecurityCenter, and Vidsys.'}
            </p>
          </div>
        </section>

        {/* ── WHAT IS A UNIFIED PLATFORM? ── */}
        <section style={{ padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Que Es una Plataforma Unificada de Seguridad Publica?' : 'What Is a Unified Public Safety Platform?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Una plataforma unificada de seguridad publica es un sistema unico donde video, despacho CAD, GIS, gestion de trafico y operaciones de campo son modulos nativos que comparten una base de datos comun, un motor de reglas y una interfaz de operador. No existe capa de middleware porque no hay sistemas separados que conectar.'
                : 'A unified public safety platform is a single system where video, CAD dispatch, GIS, traffic management, and field operations are native modules sharing a common database, rules engine, and operator interface. No middleware layer exists because there are no separate systems to connect.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'KabatOne es un ejemplo de plataforma unificada de seguridad publica. KabatOne integra cinco modulos nativos: K-Safety para conciencia situacional GIS, K-Dispatch para despacho CAD de emergencias, K-Video para gestion de video con analitica IA, K-Traffic para gestion de trafico inteligente, y K-Connect para video comunitario compartido. Todos los modulos de KabatOne operan sobre la plataforma Avalon, compartiendo datos en tiempo real sin conectores intermedios.'
                : 'KabatOne is an example of a unified public safety platform. KabatOne integrates five native modules: K-Safety for GIS situational awareness, K-Dispatch for emergency CAD dispatch, K-Video for video management with AI analytics, K-Traffic for intelligent traffic management, and K-Connect for community video sharing. All KabatOne modules operate on the Avalon platform, sharing real-time data without intermediate connectors.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'La diferencia practica para los operadores es significativa. En un entorno PSIM, un operador puede recibir una alarma de intrusion y luego debe abrir manualmente el VMS para encontrar la camara correspondiente. En una plataforma unificada como KabatOne, la alarma, el video en vivo, la ubicacion GIS y la unidad de despacho mas cercana aparecen automaticamente en la misma pantalla.'
                : 'The practical difference for operators is significant. In a PSIM environment, an operator may receive an intrusion alarm and then must manually open the VMS to find the corresponding camera. In a unified platform like KabatOne, the alarm, live video, GIS location, and nearest dispatch unit appear automatically on the same screen.'}
            </p>
          </div>
        </section>

        {/* ── KEY DIFFERENCES COMPARISON ── */}
        <section style={{ background: 'var(--bg-2)', padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '16px',
            }}>
              {es ? '¿Cuales Son las Diferencias Clave Entre PSIM y Plataformas Unificadas?' : 'What Are the Key Differences Between PSIM and Unified Platforms?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '40px' }}>
              {es
                ? 'La siguiente tabla compara PSIM tradicional con plataformas unificadas de seguridad publica en seis dimensiones criticas: arquitectura, integracion, despliegue, costos, mantenimiento y experiencia del operador.'
                : 'The following table compares traditional PSIM with unified public safety platforms across six critical dimensions: architecture, integration, deployment, costs, maintenance, and operator experience.'}
            </p>

            {/* Comparison Table */}
            <div style={{ borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden' }}>
              {/* Table header */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                background: `${ACCENT}15`, borderBottom: '1px solid var(--border)',
              }}>
                <div style={{ padding: '16px 20px', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '14px', letterSpacing: '0.08em', textTransform: 'uppercase', color: ACCENT }}>
                  {es ? 'Dimension' : 'Dimension'}
                </div>
                <div style={{ padding: '16px 20px', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '14px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', borderLeft: '1px solid var(--border)' }}>
                  PSIM
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
                    {row.category}
                  </div>
                  <div style={{ padding: '16px 20px', fontSize: '14px', color: 'var(--dim)', lineHeight: 1.55, borderLeft: '1px solid var(--border)' }}>
                    {row.psim}
                  </div>
                  <div style={{ padding: '16px 20px', fontSize: '14px', color: 'var(--dim)', lineHeight: 1.55, borderLeft: '1px solid var(--border)' }}>
                    {row.unified}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHEN TO CHOOSE ── */}
        <section style={{ padding: '80px 40px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 40px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? '¿Cuando Elegir una Plataforma Unificada en Lugar de PSIM?' : 'When Should You Choose a Unified Platform Over PSIM?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Una plataforma unificada es la opcion preferida cuando una organizacion esta construyendo una nueva infraestructura de seguridad publica o reemplazando un sistema PSIM existente que ha alcanzado el final de su vida util. Las plataformas unificadas eliminan la complejidad de gestion multi-proveedor y reducen el costo total de propiedad al consolidar licencias, soporte y actualizaciones en un solo contrato.'
                : 'A unified platform is the preferred choice when an organization is building new public safety infrastructure or replacing an existing PSIM system that has reached end-of-life. Unified platforms eliminate multi-vendor management complexity and reduce total cost of ownership by consolidating licenses, support, and updates into a single contract.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Las ciudades y municipios que operan centros de mando C4 o C5 se benefician especialmente de plataformas unificadas. Estos centros de mando requieren que video, despacho, trafico y GIS operen como un sistema unico en tiempo real. KabatOne opera en mas de 40 ciudades protegiendo a mas de 73 millones de ciudadanos con este enfoque unificado.'
                : 'Cities and municipalities operating C4 or C5 command centers benefit especially from unified platforms. These command centers require video, dispatch, traffic, and GIS to operate as a single real-time system. KabatOne operates in 40+ cities protecting over 73 million citizens with this unified approach.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '32px' }}>
              {es
                ? 'PSIM puede ser mas adecuado en un escenario especifico: cuando una organizacion tiene contratos a largo plazo con multiples proveedores de subsistemas que no pueden ser reemplazados y necesita una capa de correlacion de eventos sobre infraestructura existente que debe mantenerse intacta.'
                : 'PSIM may be more suitable in one specific scenario: when an organization has long-term contracts with multiple subsystem vendors that cannot be replaced and needs an event correlation layer over existing infrastructure that must remain intact.'}
            </p>

            {/* Inline links to product pages */}
            <div style={{
              background: `${ACCENT}08`, border: `1px solid ${ACCENT}30`,
              borderRadius: '12px', padding: '24px 28px',
            }}>
              <p style={{
                fontFamily: 'DM Mono, monospace', fontSize: '10px',
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: ACCENT, marginBottom: '16px',
              }}>
                {es ? 'Modulos de KabatOne' : 'KabatOne Modules'}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {[
                  { href: '/k-safety', label: 'K-Safety', desc: es ? 'GIS y conciencia situacional' : 'GIS & situational awareness', color: '#06b6d4' },
                  { href: '/k-dispatch', label: 'K-Dispatch', desc: es ? 'Despacho CAD' : 'CAD dispatch', color: '#ef4444' },
                  { href: '/k-video', label: 'K-Video', desc: es ? 'Gestion de video con IA' : 'AI video management', color: '#a855f7' },
                  { href: '/k-traffic', label: 'K-Traffic', desc: es ? 'Gestion de trafico' : 'Traffic management', color: '#06b6d4' },
                  { href: '/k-connect', label: 'K-Connect', desc: es ? 'Video comunitario' : 'Community video', color: '#22c55e' },
                ].map((mod) => (
                  <Link key={mod.href} href={mod.href} style={{
                    display: 'flex', flexDirection: 'column', gap: '2px',
                    background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)',
                    borderRadius: '8px', padding: '12px 16px', textDecoration: 'none',
                    minWidth: '140px', flex: '1 1 140px',
                  }}>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: mod.color }}>{mod.label}</span>
                    <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{mod.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ SECTION ── */}
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
              {es ? 'PSIM vs Plataforma Unificada: Preguntas y Respuestas' : 'PSIM vs Unified Platform: Questions & Answers'}
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

        {/* ── RELATED ARTICLES ── */}
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
              <Link href="/resources/what-is-a-public-safety-platform" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? '¿Qué es una plataforma de seguridad pública?' : 'What Is a Public Safety Platform?'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/resources/how-c5-command-centers-work" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'Cómo funcionan los centros C5' : 'How C5 Command Centers Work'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/resources/smart-city-platform-guide" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'Guía de plataformas de ciudad inteligente' : 'Smart City Platform Guide'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/resources/public-safety-software-municipalities-mexico" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'Software de seguridad pública para México' : 'Public Safety Software for Mexico'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          es={es}
          h2={es ? '¿Listo para Reemplazar PSIM?' : 'Ready to Replace PSIM?'}
          subtitle={es
            ? 'Descubre como KabatOne unifica video, despacho y GIS en una sola plataforma. Solicita una demo personalizada.'
            : 'Discover how KabatOne unifies video, dispatch, and GIS in one platform. Request a personalized demo.'}
        />

        <Footer es={es} />

        <style>{`
          @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
          @media (max-width: 768px) {
            section > div > div[style*="grid-template-columns: 1fr 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </>
  )
}
