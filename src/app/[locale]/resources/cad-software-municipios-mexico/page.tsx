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
  return generatePageMetadata('cadSoftwareMunicipiosMexico', locale)
}

export default async function CadSoftwareMunicipiosMexicoPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#f59e0b'
  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/cad-software-municipios-mexico/`
    : `${baseUrl}/resources/cad-software-municipios-mexico/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software CAD — México' : 'CAD Software — Mexico', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Qué es el software CAD para municipios en México?',
      answer: 'El software CAD (Computer-Aided Dispatch) para municipios mexicanos gestiona la recepción de llamadas al 911, la clasificación de incidentes y el despacho de unidades de policía, bomberos y servicios médicos. Debe integrarse con los centros C5, los sistemas de videovigilancia municipal y los mapas GIS para coordinar la respuesta en tiempo real.',
    },
    {
      question: '¿Cómo se integra el CAD con el sistema 911 en México?',
      answer: 'El CAD recibe la llamada del operador 911, genera un registro de incidente, clasifica la prioridad y recomienda las unidades disponibles más cercanas según el mapa GIS. En México, el sistema 911 fue centralizado en 2016 y los municipios deben usar software CAD compatible con los protocolos federales de atención de emergencias y los estándares NENA/APCO.',
    },
    {
      question: '¿Qué diferencia hay entre CAD municipal y CAD estatal en México?',
      answer: 'El CAD municipal gestiona las unidades y recursos de un municipio específico — policía municipal, bomberos locales, servicios médicos. El CAD estatal coordina múltiples municipios y agencias estatales desde el centro C5. Los sistemas modernos como KabatOne permiten visibilidad compartida entre niveles, de modo que el C5 estatal puede ver y apoyar operaciones municipales sin duplicar infraestructura.',
    },
    {
      question: '¿Qué funcionalidades debe tener el software CAD para México?',
      answer: 'Para operar en el contexto mexicano, el software CAD debe: (1) Integrarse con la línea 911 y los protocolos de atención de emergencias. (2) Conectarse con el VMS municipal para mostrar cámaras del incidente. (3) Incluir GIS en tiempo real con posición de unidades. (4) Soportar despacho multi-agencia (policía, bomberos, protección civil). (5) Generar reportes para FORTASEG y auditorías estatales. (6) Operar en español con soporte local.',
    },
    {
      question: '¿Cuánto cuesta implementar software CAD en un municipio mexicano?',
      answer: 'El costo varía según el tamaño del municipio y el alcance del despliegue. Un sistema CAD básico para un municipio de 100,000 habitantes puede arrancar desde USD $80,000, incluyendo licencias, integración y capacitación. Municipios que ya operan C5 o que integran VMS y GIS existentes pueden aprovechar fondos FORTASEG y SUBSEMUN para financiar parte del proyecto. KabatOne ofrece modelos de licenciamiento por ciudad o por operador.',
    },
    {
      question: '¿KabatOne tiene despliegues activos en México?',
      answer: 'Sí. KabatOne opera en más de 40 ciudades en América Latina, incluyendo múltiples municipios y estados en México. La plataforma gestiona miles de cámaras, despacho CAD y coordinación multiagencia en entornos C5 reales. El estado de Michoacán es uno de los despliegues de referencia, con cobertura de más de 4 millones de ciudadanos.',
    },
  ] : [
    {
      question: 'What is CAD software for municipalities in Mexico?',
      answer: 'CAD (Computer-Aided Dispatch) software for Mexican municipalities manages 911 call intake, incident classification, and dispatch of police, fire, and medical units. It must integrate with C5 command centers, municipal video surveillance systems, and GIS maps to coordinate response in real time.',
    },
    {
      question: 'How does CAD integrate with the 911 system in Mexico?',
      answer: 'CAD receives the 911 operator\'s call, creates an incident record, classifies priority, and recommends the nearest available units based on the GIS map. In Mexico, the 911 system was centralized in 2016 and municipalities must use CAD software compatible with federal emergency protocols and NENA/APCO standards.',
    },
    {
      question: 'What is the difference between municipal and state CAD in Mexico?',
      answer: 'Municipal CAD manages units and resources for a specific municipality — local police, fire department, medical services. State CAD coordinates multiple municipalities and state agencies from the C5 center. Modern systems like KabatOne enable shared visibility across levels, so the state C5 can monitor and support municipal operations without duplicating infrastructure.',
    },
    {
      question: 'What features must CAD software have for Mexico?',
      answer: 'To operate in the Mexican context, CAD software must: (1) Integrate with the 911 line and emergency response protocols. (2) Connect with the municipal VMS to display cameras near the incident. (3) Include real-time GIS with unit positions. (4) Support multi-agency dispatch (police, fire, civil protection). (5) Generate reports for FORTASEG and state audits. (6) Operate in Spanish with local support.',
    },
    {
      question: 'How much does it cost to implement CAD software in a Mexican municipality?',
      answer: 'Costs vary by municipality size and deployment scope. A basic CAD system for a 100,000-person municipality can start from USD $80,000, including licenses, integration, and training. Municipalities already operating C5s or integrating existing VMS and GIS can leverage FORTASEG and SUBSEMUN funds to finance part of the project. KabatOne offers per-city or per-operator licensing models.',
    },
    {
      question: 'Does KabatOne have active deployments in Mexico?',
      answer: 'Yes. KabatOne operates in 40+ cities across Latin America, including multiple municipalities and states in Mexico. The platform manages thousands of cameras, CAD dispatch, and multi-agency coordination in real C5 environments. The state of Michoacán is one of the reference deployments, covering more than 4 million citizens.',
    },
  ]

  const requirements = es
    ? [
        { icon: '📞', title: 'Integración con 911', desc: 'Compatible con los protocolos federales de atención de emergencias y sistemas de gestión de llamadas.' },
        { icon: '🏛️', title: 'Compatibilidad C5', desc: 'Diseñado para operar dentro de centros C5 municipales y estatales, con visibilidad compartida entre niveles.' },
        { icon: '📹', title: 'Integración VMS', desc: 'Conecta con el sistema de videovigilancia municipal para mostrar cámaras del incidente en la pantalla del despachador.' },
        { icon: '🗺️', title: 'GIS en Tiempo Real', desc: 'Mapa operativo con posición GPS de unidades, historial de incidentes y cobertura de cámaras.' },
        { icon: '🚔', title: 'Despacho Multi-Agencia', desc: 'Coordina policía municipal, bomberos, protección civil y servicios médicos desde una sola interfaz.' },
        { icon: '📊', title: 'Reportes FORTASEG', desc: 'Genera los reportes de desempeño requeridos para auditorías de fondos federales de seguridad.' },
      ]
    : [
        { icon: '📞', title: '911 Integration', desc: 'Compatible with federal emergency response protocols and call management systems.' },
        { icon: '🏛️', title: 'C5 Compatibility', desc: 'Designed to operate within municipal and state C5 centers, with shared visibility across levels.' },
        { icon: '📹', title: 'VMS Integration', desc: 'Connects to the municipal video surveillance system to display cameras near the incident on the dispatcher\'s screen.' },
        { icon: '🗺️', title: 'Real-Time GIS', desc: 'Operational map with GPS position of units, incident history, and camera coverage.' },
        { icon: '🚔', title: 'Multi-Agency Dispatch', desc: 'Coordinates municipal police, fire, civil protection, and medical services from a single interface.' },
        { icon: '📊', title: 'FORTASEG Reports', desc: 'Generates performance reports required for federal security fund audits.' },
      ]

  return (
    <>
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema(
            es ? 'Software CAD para Municipios de México: Guía de Despacho 911' : 'CAD Software for Mexico Municipalities: 911 Dispatch Guide',
            es ? 'El software CAD para municipios mexicanos debe integrarse con el 911, los centros C5 y las cámaras de la ciudad.' : 'CAD dispatch software for Mexican municipalities must integrate with 911, C5 command centers, and city cameras.',
            pageUrl,
            '2026-05-18'
          ))
        }}
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

        {/* BREADCRUMB */}
        <div style={{
          maxWidth: '860px', margin: '0 auto', padding: '20px 40px 0',
          display: 'flex', alignItems: 'center', gap: '8px',
          fontFamily: 'DM Mono, monospace', fontSize: '11px',
          letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)',
        }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{es ? 'Inicio' : 'Home'}</Link>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: 'var(--dim)' }}>{es ? 'Recursos' : 'Resources'}</span>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: ACCENT }}>{es ? 'Software CAD — México' : 'CAD Software — Mexico'}</span>
        </div>

        {/* HERO */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 40px 64px' }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '11px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: ACCENT, marginBottom: '20px',
          }}>
            {es ? 'Guía de Referencia · México' : 'Reference Guide · Mexico'}
          </p>
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.05,
            letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '28px',
          }}>
            {es
              ? 'Software CAD para Municipios de México'
              : 'CAD Software for Mexico Municipalities'}
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--muted)', maxWidth: '680px', marginBottom: '32px' }}>
            {es
              ? 'El software de despacho asistido por computadora (CAD) es el núcleo operativo de cualquier centro de mando municipal en México. Esta guía cubre qué debe tener un sistema CAD para operar en entornos C5, cómo se integra con el 911, y qué evaluar al seleccionar una plataforma.'
              : 'Computer-Aided Dispatch (CAD) software is the operational core of any municipal command center in Mexico. This guide covers what a CAD system must have to operate in C5 environments, how it integrates with 911, and what to evaluate when selecting a platform.'}
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/k-dispatch" style={{
              display: 'inline-block', padding: '10px 20px',
              background: ACCENT, color: '#000', fontWeight: 700,
              fontSize: '13px', borderRadius: '6px', textDecoration: 'none',
            }}>
              {es ? 'Ver K-Dispatch →' : 'See K-Dispatch →'}
            </Link>
            <Link href="/resources/how-c5-command-centers-work" style={{
              display: 'inline-block', padding: '10px 20px',
              border: `1px solid ${ACCENT}`, color: ACCENT, fontWeight: 600,
              fontSize: '13px', borderRadius: '6px', textDecoration: 'none',
            }}>
              {es ? 'Cómo funcionan los C5' : 'How C5 Centers Work'}
            </Link>
          </div>
        </section>

        {/* REQUIREMENTS */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px 64px' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: '28px', color: 'var(--white)', marginBottom: '8px',
          }}>
            {es ? 'Requisitos Clave para México' : 'Key Requirements for Mexico'}
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '28px', lineHeight: 1.7 }}>
            {es
              ? 'El contexto regulatorio y operativo mexicano define requisitos específicos que el software CAD debe cumplir.'
              : 'Mexico\'s regulatory and operational context defines specific requirements that CAD software must meet.'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {requirements.map(({ icon, title, desc }) => (
              <div key={title} style={{
                background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.18)',
                borderRadius: '8px', padding: '20px',
              }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{icon}</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--white)', marginBottom: '6px' }}>{title}</div>
                <div style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px 64px' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: '28px', color: 'var(--white)', marginBottom: '32px',
          }}>
            {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {faqs.map(({ question, answer }) => (
              <div key={question} style={{
                borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '24px',
              }}>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--white)', marginBottom: '10px' }}>
                  {question}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.8 }}>{answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px 64px' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: '22px', color: 'var(--white)', marginBottom: '20px',
          }}>
            {es ? 'Recursos Relacionados' : 'Related Resources'}
          </h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {[
              { href: '/resources/how-c5-command-centers-work', label: es ? 'Cómo Funcionan los C5' : 'How C5 Command Centers Work' },
              { href: '/resources/what-is-cad-dispatch-software', label: es ? 'Qué Es el Software CAD' : 'What Is CAD Dispatch Software' },
              { href: '/resources/best-cad-dispatch-software', label: es ? 'Mejor Software CAD' : 'Best CAD Dispatch Software' },
              { href: '/resources/911-call-center-software-guide', label: es ? 'Guía Software Centro 911' : '911 Call Center Software Guide' },
              { href: '/resources/public-safety-software-municipalities-mexico', label: es ? 'Software de Seguridad Pública México' : 'Public Safety Software Mexico' },
              { href: '/k-dispatch', label: 'K-Dispatch' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{
                padding: '8px 16px', border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '20px', fontSize: '13px', color: 'var(--dim)',
                textDecoration: 'none', transition: 'border-color 0.2s',
              }}>
                {label}
              </Link>
            ))}
          </div>
        </section>

        <CTASection
          es={es}
          h2={es ? 'Transforma el Despacho 911 de Tu Municipio' : 'Transform 911 Dispatch for Your Municipality'}
          subtitle={es
            ? 'Conoce cómo KabatOne integra despacho CAD, videovigilancia, GIS y coordinación multiagencia en una sola plataforma para municipios mexicanos.'
            : 'See how KabatOne integrates CAD dispatch, video surveillance, GIS, and multi-agency coordination into one platform for Mexican municipalities.'}
          cta1={es ? 'Solicita una Demo' : 'Book a Demo'}
          cta2={es ? 'Contactar Ventas' : 'Contact Sales'}
        />
      </div>
      <Footer es={es} />
    </>
  )
}
