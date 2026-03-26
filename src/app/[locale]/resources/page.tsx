import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
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
  return generatePageMetadata('resources', locale)
}

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#3b82f6'

  const articles = es
    ? [
        {
          href: '/resources/end-of-siloed-response',
          category: 'Informe del Sector',
          title: 'El Fin de la Respuesta en Silos',
          excerpt: 'Por qué las agencias de seguridad pública siguen operando con sistemas fragmentados — y cómo la coordinación unificada reduce el tiempo de respuesta en un 42%.',
          readTime: '15 min',
          isNew: true,
        },
        {
          href: '/resources/rtcc-setup-guide',
          category: 'Guía',
          title: 'Cómo Implementar un Centro de Crimen en Tiempo Real (RTCC)',
          excerpt: 'Guía paso a paso para planificar, construir y operar un RTCC: infraestructura, software, integración de cámaras, capacitación y métricas clave.',
          readTime: '10 min',
          isNew: true,
        },
        {
          href: '/resources/ai-in-public-safety',
          category: 'Guía',
          title: 'Inteligencia Artificial en Seguridad Pública: Guía para Ciudades',
          excerpt: 'Cómo la IA está transformando la respuesta a emergencias, el despacho y la videovigilancia. Casos de uso reales, beneficios, limitaciones y qué buscar.',
          readTime: '8 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-cad-dispatch-software',
          category: 'Guía de Referencia',
          title: '¿Qué Es el Software CAD de Despacho?',
          excerpt: 'El software CAD gestiona la recepción de llamadas de emergencia, la clasificación de incidentes y el despacho de unidades. Cómo funciona y qué buscar en un sistema moderno.',
          readTime: '9 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-video-management-software',
          category: 'Guía de Referencia',
          title: '¿Qué Es el Software de Gestión de Video (VMS)?',
          excerpt: 'El software VMS agrega cámaras de cualquier fabricante, añade analítica de IA y se integra con despacho y GIS. Guía completa para agencias de seguridad pública.',
          readTime: '9 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-situational-awareness-software',
          category: 'Guía de Referencia',
          title: '¿Qué Es un Software de Conciencia Situacional?',
          excerpt: 'Un software de conciencia situacional agrega cámaras, sensores, despacho y GIS en un mapa operativo unificado. Cómo los centros de mando coordinan respuestas más rápido.',
          readTime: '9 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-a-real-time-crime-center',
          category: 'Guía de Referencia',
          title: '¿Qué Es un Centro de Crimen en Tiempo Real (RTCC)?',
          excerpt: 'Un RTCC integra videovigilancia en vivo, analítica de IA, LPR y despacho en un solo entorno de comando. Aprende cómo funciona y qué tecnologías necesita.',
          readTime: '10 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-a-public-safety-platform',
          category: 'Guía de Referencia',
          title: '¿Qué Es una Plataforma de Seguridad Pública?',
          excerpt: 'Una plataforma de seguridad pública unifica despacho CAD, gestión de video, GIS y operaciones de campo en una sola interfaz operativa. Definición y componentes.',
          readTime: '8 min',
          isNew: false,
        },
        {
          href: '/resources/psim-vs-unified-platform',
          category: 'Comparación',
          title: 'PSIM vs Plataforma Unificada: ¿Cuál Es la Diferencia?',
          excerpt: 'PSIM integra alarmas de sistemas aislados. Las plataformas unificadas reemplazan los silos completamente. Comparativa de arquitecturas, costos y resultados.',
          readTime: '6 min',
          isNew: false,
        },
        {
          href: '/resources/how-c5-command-centers-work',
          category: 'Análisis Profundo',
          title: '¿Cómo Funcionan los Centros de Mando C5?',
          excerpt: 'Los centros C5 coordinan respuesta a emergencias, videovigilancia y tráfico en ciudades mexicanas. Arquitectura, tecnología y modelo operativo.',
          readTime: '7 min',
          isNew: false,
        },
        {
          href: '/resources/smart-city-platform-guide',
          category: 'Guía',
          title: 'Guía de Plataformas de Ciudad Inteligente',
          excerpt: 'Una plataforma de ciudad inteligente conecta sensores IoT, video, tráfico y servicios de emergencia. Guía para seleccionar e implementar la solución correcta.',
          readTime: '9 min',
          isNew: false,
        },
        {
          href: '/resources/public-safety-software-municipalities-mexico',
          category: 'Guía',
          title: 'Software de Seguridad Pública para Municipios en México',
          excerpt: 'Los municipios mexicanos necesitan software que integre operaciones C5, videovigilancia, despacho CAD y tráfico. Guía de selección con criterios clave.',
          readTime: '7 min',
          isNew: false,
        },
      ]
    : [
        {
          href: '/resources/end-of-siloed-response',
          category: 'Industry Brief',
          title: 'The End of Siloed Response',
          excerpt: 'Why public safety agencies are still operating fragmented systems — and how unified coordination cuts response time by 42%. Download the Q2 2026 industry brief.',
          readTime: '15 min',
          isNew: true,
        },
        {
          href: '/resources/rtcc-setup-guide',
          category: 'Guide',
          title: 'Real-Time Crime Center (RTCC) Setup Guide',
          excerpt: 'Step-by-step guide to planning, building, and operating an RTCC: infrastructure, software, camera integration, training, and key metrics.',
          readTime: '10 min',
          isNew: true,
        },
        {
          href: '/resources/ai-in-public-safety',
          category: 'Guide',
          title: 'AI in Public Safety: A Guide for Cities',
          excerpt: 'How AI is transforming emergency response, dispatch, and video surveillance. Real use cases, benefits, limitations, and what to look for in a platform.',
          readTime: '8 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-cad-dispatch-software',
          category: 'Reference Guide',
          title: 'What Is CAD Dispatch Software?',
          excerpt: 'CAD dispatch software manages emergency call intake, incident classification, and unit dispatch. How it works step by step and what to look for in a modern system.',
          readTime: '9 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-video-management-software',
          category: 'Reference Guide',
          title: 'What Is Video Management Software (VMS)?',
          excerpt: 'VMS software aggregates cameras from any manufacturer, adds AI analytics, and integrates with CAD dispatch and GIS. Complete guide for public safety agencies.',
          readTime: '9 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-situational-awareness-software',
          category: 'Reference Guide',
          title: 'What Is Situational Awareness Software?',
          excerpt: 'Situational awareness software aggregates cameras, sensors, dispatch, and GIS into a unified operational map. How command centers use it to coordinate response faster.',
          readTime: '9 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-a-real-time-crime-center',
          category: 'Reference Guide',
          title: 'What Is a Real-Time Crime Center (RTCC)?',
          excerpt: 'An RTCC integrates live video surveillance, AI analytics, LPR, and dispatch into a single command environment. How it works and what technologies it requires.',
          readTime: '10 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-a-public-safety-platform',
          category: 'Reference Guide',
          title: 'What Is a Public Safety Platform?',
          excerpt: 'A public safety platform unifies CAD dispatch, video management, GIS, and field operations into a single operational interface. Definition and core components.',
          readTime: '8 min',
          isNew: false,
        },
        {
          href: '/resources/psim-vs-unified-platform',
          category: 'Comparison',
          title: 'PSIM vs Unified Platform — What\'s the Difference?',
          excerpt: 'PSIM integrates alarms from siloed systems. Unified platforms replace silos entirely. Compare architectures, costs, and real-world outcomes.',
          readTime: '6 min',
          isNew: false,
        },
        {
          href: '/resources/how-c5-command-centers-work',
          category: 'Deep Dive',
          title: 'How C5 Command Centers Work',
          excerpt: 'C5 command centers coordinate emergency response, video surveillance, and traffic across Mexican cities. Architecture, technology stack, and operational model.',
          readTime: '7 min',
          isNew: false,
        },
        {
          href: '/resources/smart-city-platform-guide',
          category: 'Guide',
          title: 'Smart City Platform Guide',
          excerpt: 'A smart city platform connects IoT sensors, video, traffic systems, and emergency services into one operational view. How to select and deploy the right platform.',
          readTime: '9 min',
          isNew: false,
        },
        {
          href: '/resources/public-safety-software-municipalities-mexico',
          category: 'Guide',
          title: 'Public Safety Software for Municipalities in Mexico',
          excerpt: 'Mexican municipalities need software that integrates C5 operations, video surveillance, CAD dispatch, and traffic management. Selection guide with key criteria.',
          readTime: '7 min',
          isNew: false,
        },
      ]

  return (
    <>
      <Nav />

      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <section style={{ padding: '64px 32px 56px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Biblioteca de Recursos' : 'Resource Library'}
            </p>
            <h1 style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 800,
              fontFamily: 'Barlow Condensed, sans-serif',
              textTransform: 'uppercase',
              lineHeight: 1.05,
              marginBottom: '20px',
            }}>
              {es ? 'Recursos y Guías' : 'Resources & Guides'}
            </h1>
            <p style={{ fontSize: '17px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, maxWidth: '600px' }}>
              {es
                ? 'Guías técnicas, comparativas y análisis profundos para ayudar a directores de seguridad pública y funcionarios municipales a tomar decisiones informadas sobre tecnología de seguridad.'
                : 'Technical guides, comparisons, and deep dives to help public safety directors and municipal officials make informed decisions about safety technology.'}
            </p>
          </div>
        </section>

        {/* ── ARTICLE GRID ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '56px 32px 80px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            }} className="resources-grid">
              {articles.map((article, i) => (
                <Link
                  key={i}
                  href={article.href}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#0b1628',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    padding: '28px 24px',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'border-color 0.2s, transform 0.2s',
                    position: 'relative',
                  }}
                >
                  {article.isNew && (
                    <span style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      fontSize: '9px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      background: ACCENT,
                      color: '#fff',
                      padding: '3px 8px',
                      borderRadius: '4px',
                    }}>
                      {es ? 'Nuevo' : 'New'}
                    </span>
                  )}
                  <p style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: 'var(--cyan)',
                    marginBottom: '12px',
                  }}>
                    {article.category}
                  </p>
                  <h2 style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 700,
                    fontSize: '20px',
                    textTransform: 'uppercase',
                    lineHeight: 1.2,
                    marginBottom: '12px',
                    color: 'var(--white)',
                    flex: 1,
                  }}>
                    {article.title}
                  </h2>
                  <p style={{
                    fontSize: '13px',
                    fontWeight: 300,
                    color: 'var(--dim)',
                    lineHeight: 1.7,
                    marginBottom: '20px',
                  }}>
                    {article.excerpt}
                  </p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 'auto',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border)',
                  }}>
                    <span style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.05em' }}>
                      {article.readTime} {es ? 'de lectura' : 'read'}
                    </span>
                    <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          es={es}
          h2={
            es
              ? 'Descubre Cómo KabatOne Protege tu Ciudad'
              : 'See How KabatOne Protects Your City'
          }
          subtitle={
            es
              ? 'KabatOne protege a más de 73 millones de ciudadanos en más de 40 ciudades. Solicita una demostración con datos reales de ciudad.'
              : 'KabatOne protects over 73 million citizens across 40+ cities. Request a live demo with real city data.'
          }
        />

        <Footer es={es} />

        <style>{`
          @media (max-width: 900px) {
            .resources-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 580px) {
            .resources-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </>
  )
}
