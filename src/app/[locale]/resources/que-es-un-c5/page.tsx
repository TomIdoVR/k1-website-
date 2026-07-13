import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { Link } from '@/i18n/navigation'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('queEsUnC5', locale)
}

export default async function QueEsUnC5Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#06b6d4'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: 'https://kabatone.com' + (es ? '/es/' : '/') },
    { name: es ? 'Recursos' : 'Resources', url: 'https://kabatone.com' + (es ? '/es/resources/' : '/resources/') },
    { name: es ? '¿Qué es un C5?' : 'What Is a C5 Command Center?', url: 'https://kabatone.com' + (es ? '/es/resources/que-es-un-c5/' : '/resources/que-es-un-c5/') },
  ]

  const faqs = es ? [
    {
      question: '¿Qué es un C5?',
      answer: 'Un C5 es un Centro de Comando, Control, Comunicaciones, Cómputo y Calidad para seguridad pública. Los centros C5 integran despacho policial, videovigilancia urbana, atención de emergencias 911, gestión del tráfico y protección civil en un único punto de operación con video walls y estaciones de operadores conectadas en tiempo real.',
    },
    {
      question: '¿Qué significa C5?',
      answer: 'C5 significa —o quiere decir— las cinco C: Comando, Control, Comunicaciones, Cómputo y Calidad. Es el modelo de centro de mando adoptado en México y América Latina para coordinar respuesta a emergencias, videovigilancia, tráfico y protección civil desde una sola instalación.',
    },
    {
      question: '¿Cuántos C5 hay en México?',
      answer: 'México opera más de 30 centros C5 y C4 activos. La Ciudad de México, Jalisco, Nuevo León, Puebla, Querétaro, Estado de México, Tabasco y Chihuahua cuentan con instalaciones C5 en operación. Cada centro puede monitorear desde 2,000 hasta más de 60,000 cámaras de videovigilancia simultáneamente.',
    },
    {
      question: '¿Cuál es la diferencia entre un C4 y un C5?',
      answer: 'Un C4 incluye Comando, Control, Comunicaciones y Cómputo. Un C5 agrega la quinta C: Calidad, que incorpora métricas de desempeño, auditoría de procesos y mejora continua. El modelo C5 representa la evolución del C4 hacia estándares operativos más exigentes con indicadores medibles de efectividad.',
    },
    {
      question: '¿Qué tecnología usa un C5?',
      answer: 'Un C5 integra despacho asistido por computadora (CAD), gestión de video (VMS) con analítica de IA, sistemas de información geográfica (GIS), gestión del tráfico, reconocimiento de placas (LPR), centros de llamadas 911 y comunicaciones de radio unificadas. Todo opera desde un centro de control con video walls y puestos de trabajo en red.',
    },
    {
      question: '¿Cómo se llama el software de un C5?',
      answer: 'Los centros C5 modernos utilizan plataformas de seguridad pública unificadas que integran CAD, VMS, GIS y analítica en un solo sistema. La plataforma K1 de KabatOne opera en más de 40 ciudades de América Latina, proporcionando conciencia situacional en tiempo real para centros C5 y C4.',
    },
    {
      question: '¿Qué hace un operador de C5?',
      answer: 'Un operador de C5 monitorea cámaras de videovigilancia, atiende llamadas de emergencia 911, coordina el despacho de unidades policiales, bomberos y servicios médicos, gestiona incidentes de tráfico y registra eventos en el sistema CAD. Los operadores trabajan en turnos de 8-12 horas con acceso a todos los sistemas integrados del centro.',
    },
    {
      question: '¿Cuánto cuesta instalar un C5?',
      answer: 'El costo de un centro C5 varía según el tamaño de la ciudad y la cantidad de cámaras integradas. Un C5 municipal puede costar entre 5 y 50 millones de pesos mexicanos en infraestructura y software. Los estados y metrópolis grandes invierten entre 100 y 500 millones de pesos en instalaciones de gran escala con miles de cámaras conectadas.',
    },
  ] : [
    {
      question: 'What is a C5 command center?',
      answer: 'A C5 command center is an integrated public safety facility that consolidates Command, Control, Communications, Computing, and Quality (C5) into a single operational hub. C5 centers coordinate police dispatch, urban surveillance, 911 emergency response, traffic management, and civil protection from a unified environment with video walls and real-time operator workstations.',
    },
    {
      question: 'What does C5 stand for?',
      answer: 'C5 stands for the five Cs: Comando, Control, Comunicaciones, Cómputo y Calidad (Command, Control, Communications, Computing, and Quality). It is the command center model adopted in Mexico and Latin America to coordinate emergency response, surveillance, traffic, and civil protection from a single facility.',
    },
    {
      question: 'How many C5 centers exist in Mexico?',
      answer: 'Mexico operates more than 30 active C5 and C4 centers. Mexico City, Jalisco, Nuevo León, Puebla, Querétaro, State of Mexico, Tabasco, and Chihuahua all have active C5 installations. Each center can simultaneously monitor between 2,000 and over 60,000 surveillance cameras.',
    },
    {
      question: 'What is the difference between C4 and C5?',
      answer: 'A C4 center includes Command, Control, Communications, and Computing. A C5 center adds the fifth C: Quality (Calidad), which incorporates performance metrics, process auditing, and continuous improvement. The C5 model represents the evolution of C4 toward more demanding operational standards with measurable effectiveness indicators.',
    },
    {
      question: 'What technology does a C5 center use?',
      answer: 'A C5 integrates computer-aided dispatch (CAD), video management systems (VMS) with AI analytics, geographic information systems (GIS), traffic management, license plate recognition (LPR), 911 call centers, and unified radio communications. All systems operate from a control room with video walls and networked operator workstations.',
    },
    {
      question: 'What software runs a C5 command center?',
      answer: 'Modern C5 centers use unified public safety platforms that integrate CAD, VMS, GIS, and analytics into a single system. KabatOne\'s K1 platform operates in over 40 cities across Latin America, providing real-time situational awareness for C5 and C4 command centers.',
    },
  ]

  const article = articleSchema(
    es ? '¿Qué es un C5? Centro de Comando, Control, Comunicaciones, Cómputo y Calidad' : 'What Is a C5 Command Center? Command, Control, Communications, Computing & Quality',
    es ? 'Un C5 es un centro de Comando, Control, Comunicaciones, Cómputo y Calidad para seguridad pública. Conozca cómo funcionan los centros C5 en México y América Latina con la plataforma K1 de KabatOne.' : 'A C5 is a Command, Control, Communications, Computing, and Quality center for public safety. Learn how C5 centers operate in Mexico and Latin America with KabatOne\'s K1 platform.',
    es ? 'https://kabatone.com/es/resources/que-es-un-c5/' : 'https://kabatone.com/resources/que-es-un-c5/',
    '2024-01-15'
  )

  const faqSchema = faqPageSchema(faqs)
  const bcSchema = breadcrumbSchema(breadcrumbs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />

      <Nav />

      <main style={{ background: 'var(--bg)', color: 'var(--white)', fontFamily: 'var(--font-space-grotesk)' }}>

        {/* Hero */}
        <section style={{ padding: '80px 24px 60px', maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <nav aria-label="breadcrumb" style={{ marginBottom: 24, fontSize: 13, color: 'var(--muted, #94a3b8)' }}>
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.url}>
                {i > 0 && <span style={{ margin: '0 8px' }}>›</span>}
                {i < breadcrumbs.length - 1 ? (
                  <Link href={crumb.url} style={{ color: 'inherit', textDecoration: 'none' }}>{crumb.name}</Link>
                ) : (
                  <span style={{ color: 'var(--white)' }}>{crumb.name}</span>
                )}
              </span>
            ))}
          </nav>

          <div style={{ display: 'inline-block', background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.3)', borderRadius: 6, padding: '4px 14px', fontSize: 12, color: ACCENT, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            {es ? 'Guía de Seguridad Pública' : 'Public Safety Guide'}
          </div>

          <h1 style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 20 }}>
            {es ? (
              <>¿Qué es un <span style={{ color: ACCENT }}>C5</span>?</>
            ) : (
              <>What Is a <span style={{ color: ACCENT }}>C5</span> Command Center?</>
            )}
          </h1>

          <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: '#94a3b8', lineHeight: 1.7, maxWidth: 720, margin: '0 auto 32px' }}>
            {es
              ? 'Un C5 es un Centro de Comando, Control, Comunicaciones, Cómputo y Calidad — el modelo de centro de mando integrado de seguridad pública adoptado en México y América Latina.'
              : 'A C5 is a Command, Control, Communications, Computing, and Quality center — the integrated public safety command center model adopted across Mexico and Latin America.'}
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={es ? '/es/contact' : '/contact'} style={{ background: ACCENT, color: '#0f1724', padding: '12px 28px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>
              {es ? 'Solicitar Demo' : 'Request Demo'}
            </Link>
            <Link href={es ? '/es/resources/how-c5-command-centers-work' : '/resources/how-c5-command-centers-work'} style={{ border: `1px solid ${ACCENT}`, color: ACCENT, padding: '12px 28px', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>
              {es ? 'Cómo Funcionan los C5' : 'How C5 Centers Work'}
            </Link>
          </div>
        </section>

        {/* Definition block */}
        <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px 60px' }}>
          <div style={{ background: 'rgba(6,182,212,0.06)', border: '1px solid rgba(6,182,212,0.2)', borderRadius: 12, padding: '32px 36px' }}>
            <h2 style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 28, fontWeight: 700, color: ACCENT, marginBottom: 16 }}>
              {es ? 'Definición: C5 en Seguridad Pública' : 'Definition: C5 in Public Safety'}
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: '#cbd5e1' }}>
              {es
                ? 'Un C5 (Centro de Comando, Control, Comunicaciones, Cómputo y Calidad) es una instalación de seguridad pública que concentra múltiples sistemas operativos en un único punto de control: despacho 911, videovigilancia urbana con miles de cámaras, gestión de tráfico, patrullaje policial, protección civil y atención de emergencias. Los centros C5 operan las 24 horas en turnos continuos y sirven como el núcleo de coordinación de la seguridad pública municipal y estatal en México y América Latina.'
                : 'A C5 (Centro de Comando, Control, Comunicaciones, Cómputo y Calidad) is a public safety facility that concentrates multiple operational systems into a single control point: 911 dispatch, urban video surveillance with thousands of cameras, traffic management, police patrol, civil protection, and emergency response. C5 centers operate 24 hours a day in continuous shifts, serving as the coordination hub for municipal and state public safety in Mexico and Latin America.'}
            </p>
          </div>
        </section>

        {/* The 5 Cs */}
        <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px 60px' }}>
          <h2 style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 36, fontWeight: 700, marginBottom: 8, textAlign: 'center' }}>
            {es ? 'Las 5 C del Centro C5' : 'The 5 Cs of a C5 Center'}
          </h2>
          <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: 36, fontSize: 16 }}>
            {es ? 'Cada letra representa una función operativa crítica del centro de mando.' : 'Each letter represents a critical operational function of the command center.'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {[
              { letter: 'C1', label: es ? 'Comando' : 'Command', desc: es ? 'Toma de decisiones estratégicas y coordinación de recursos de seguridad pública en tiempo real.' : 'Strategic decision-making and real-time coordination of public safety resources.' },
              { letter: 'C2', label: es ? 'Control' : 'Control', desc: es ? 'Supervisión de operaciones policiales, de emergencia y de protección civil desde un punto central.' : 'Oversight of police, emergency, and civil protection operations from a central point.' },
              { letter: 'C3', label: es ? 'Comunicaciones' : 'Communications', desc: es ? 'Radio unificado, telefonía 911, videoconferencia y sistemas de alerta pública integrados.' : 'Unified radio, 911 telephony, videoconferencing, and integrated public alert systems.' },
              { letter: 'C4', label: es ? 'Cómputo' : 'Computing', desc: es ? 'CAD, VMS, GIS, análisis de datos, reconocimiento de placas y plataformas de IA operando en red.' : 'CAD, VMS, GIS, data analytics, LPR, and AI platforms operating on an integrated network.' },
              { letter: 'C5', label: es ? 'Calidad' : 'Quality', desc: es ? 'Métricas de desempeño, auditoría de procesos y mejora continua de las operaciones del centro.' : 'Performance metrics, process auditing, and continuous improvement of center operations.' },
            ].map(({ letter, label, desc }) => (
              <div key={letter} style={{ background: '#131f33', border: '1px solid #1e3a5f', borderRadius: 10, padding: '24px 20px' }}>
                <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 13, color: ACCENT, fontWeight: 700, marginBottom: 6 }}>{letter}</div>
                <div style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 22, fontWeight: 700, marginBottom: 10 }}>{label}</div>
                <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section style={{ background: '#0c1526', padding: '60px 24px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 36, fontWeight: 700, marginBottom: 36, textAlign: 'center' }}>
              {es ? '¿Cómo Opera un Centro C5?' : 'How Does a C5 Center Operate?'}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
              {(es ? [
                { icon: '📹', title: 'Videovigilancia', desc: 'Operadores monitorean miles de cámaras urbanas en video walls de gran formato, con analítica de IA para detección automática de incidentes.' },
                { icon: '🚨', title: 'Despacho 911', desc: 'Las llamadas de emergencia se integran directamente con el sistema CAD. Los operadores asignan unidades en tiempo real con visualización geográfica.' },
                { icon: '🗺️', title: 'Conciencia Situacional', desc: 'Un GIS centralizado muestra la posición de todas las unidades, cámaras activas, incidentes abiertos y alertas en tiempo real en un solo mapa.' },
                { icon: '🚦', title: 'Gestión del Tráfico', desc: 'Control centralizado de semáforos, cámaras de tráfico, detección de incidentes viales y coordinación con infraestructura de transporte.' },
                { icon: '🔐', title: 'Acceso y Seguridad', desc: 'Control de acceso a instalaciones, coordinación con puntos de revisión, gestión de eventos masivos y alertas de seguridad perimetral.' },
                { icon: '📊', title: 'Métricas de Calidad', desc: 'Tableros de desempeño en tiempo real: tiempo de respuesta promedio, cobertura de cámaras activas, resolución de incidentes y KPIs operativos.' },
              ] : [
                { icon: '📹', title: 'Video Surveillance', desc: 'Operators monitor thousands of urban cameras on large-format video walls, with AI analytics for automated incident detection.' },
                { icon: '🚨', title: '911 Dispatch', desc: 'Emergency calls integrate directly with the CAD system. Operators assign units in real time with geographic visualization.' },
                { icon: '🗺️', title: 'Situational Awareness', desc: 'A centralized GIS shows all unit positions, active cameras, open incidents, and real-time alerts on a single unified map.' },
                { icon: '🚦', title: 'Traffic Management', desc: 'Centralized control of traffic signals, traffic cameras, road incident detection, and transportation infrastructure coordination.' },
                { icon: '🔐', title: 'Access & Security', desc: 'Facility access control, checkpoint coordination, mass event management, and perimeter security alerts.' },
                { icon: '📊', title: 'Quality Metrics', desc: 'Real-time performance dashboards: average response time, active camera coverage, incident resolution, and operational KPIs.' },
              ]).map(({ icon, title, desc }) => (
                <div key={title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ fontSize: 28, lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{title}</div>
                    <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.7 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* C5 in Mexico stats */}
        <section style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px' }}>
          <h2 style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 36, fontWeight: 700, marginBottom: 36, textAlign: 'center' }}>
            {es ? 'Los C5 en México y América Latina' : 'C5 Centers in Mexico and Latin America'}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 40 }}>
            {[
              { value: '30+', label: es ? 'Centros C5 en México' : 'C5 centers in Mexico' },
              { value: '60,000+', label: es ? 'Cámaras en un solo C5 (CDMX)' : 'Cameras in a single C5 (CDMX)' },
              { value: '40+', label: es ? 'Ciudades con plataforma K1' : 'Cities running K1 platform' },
              { value: '24/7', label: es ? 'Operación continua' : 'Continuous operation' },
            ].map(({ value, label }) => (
              <div key={value} style={{ background: '#131f33', border: '1px solid #1e3a5f', borderRadius: 10, padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 36, fontWeight: 700, color: ACCENT }}>{value}</div>
                <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#cbd5e1', textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
            {es
              ? 'México es el país con la mayor red de centros C5 en América Latina. El C5 de la Ciudad de México monitorea más de 60,000 cámaras conectadas en tiempo real, coordinando respuesta policial, tráfico, protección civil y atención de emergencias para una metrópoli de más de 20 millones de habitantes.'
              : 'Mexico operates the largest network of C5 centers in Latin America. Mexico City\'s C5 monitors over 60,000 cameras in real time, coordinating police response, traffic, civil protection, and emergency services for a metropolitan area of over 20 million people.'}
          </p>
        </section>

        {/* Software platform */}
        <section style={{ background: '#0c1526', padding: '60px 24px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 36, fontWeight: 700, marginBottom: 16, textAlign: 'center' }}>
              {es ? 'La Plataforma de Software para Centros C5' : 'Software Platform for C5 Centers'}
            </h2>
            <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: 16, marginBottom: 40, maxWidth: 680, margin: '0 auto 40px' }}>
              {es
                ? 'KabatOne K1 es la plataforma de seguridad pública unificada que integra todos los sistemas de un C5 en una sola interfaz operativa.'
                : 'KabatOne K1 is the unified public safety platform that integrates all C5 systems into a single operational interface.'}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
              {[
                { product: 'K-Safety', desc: es ? 'Gestión de incidentes, patrullaje y conciencia situacional en tiempo real con GIS integrado.' : 'Incident management, patrol coordination, and real-time situational awareness with integrated GIS.' },
                { product: 'K-Dispatch', desc: es ? 'Despacho CAD con integración 911 y coordinación de unidades policiales, bomberos y EMS en tiempo real.' : 'CAD dispatch with 911 integration and real-time coordination of police, fire, and EMS units.' },
                { product: 'K-Video', desc: es ? 'VMS unificado para miles de cámaras con analítica de IA, LPR y detección de comportamiento sospechoso.' : 'Unified VMS for thousands of cameras with AI analytics, LPR, and behavioral detection.' },
                { product: 'K-Traffic', desc: es ? 'Gestión centralizada del tráfico urbano con detección de incidentes y control de semáforos integrado.' : 'Centralized urban traffic management with incident detection and integrated signal control.' },
              ].map(({ product, desc }) => (
                <div key={product} style={{ background: '#0f1724', border: '1px solid rgba(6,182,212,0.2)', borderRadius: 10, padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 18, fontWeight: 700, color: ACCENT, marginBottom: 8 }}>{product}</div>
                  <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.7 }}>{desc}</p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: 36 }}>
              <Link
                href={es ? '/es/contact' : '/contact'}
                style={{ background: ACCENT, color: '#0f1724', padding: '14px 32px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 16 }}
              >
                {es ? 'Ver Plataforma K1 para C5' : 'See K1 Platform for C5'}
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px' }}>
          <h2 style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 36, fontWeight: 700, marginBottom: 36, textAlign: 'center' }}>
            {es ? 'Preguntas Frecuentes sobre los Centros C5' : 'Frequently Asked Questions About C5 Centers'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {faqs.map(({ question, answer }) => (
              <div key={question} style={{ background: '#131f33', border: '1px solid #1e3a5f', borderRadius: 10, padding: '24px' }}>
                <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 10, color: '#e6eef8' }}>{question}</h3>
                <p style={{ fontSize: 15, color: '#94a3b8', lineHeight: 1.8 }}>{answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section style={{ background: '#0c1526', padding: '40px 24px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <h3 style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 22, fontWeight: 700, marginBottom: 20, color: '#94a3b8' }}>
              {es ? 'Recursos Relacionados' : 'Related Resources'}
            </h3>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {[
                { href: es ? '/es/resources/how-c5-command-centers-work' : '/resources/how-c5-command-centers-work', label: es ? 'Cómo Funcionan los Centros C5' : 'How C5 Command Centers Work' },
                { href: es ? '/es/resources/c5-command-centers-mexico-2026' : '/resources/c5-command-centers-mexico-2026', label: es ? 'C5 en México 2026' : 'C5 in Mexico 2026' },
                { href: es ? '/es/resources/what-is-situational-awareness-software' : '/resources/what-is-situational-awareness-software', label: es ? 'Software de Conciencia Situacional' : 'Situational Awareness Software' },
                { href: es ? '/es/resources/what-is-video-management-software' : '/resources/what-is-video-management-software', label: es ? 'Software VMS' : 'VMS Software' },
                { href: es ? '/es/resources/what-is-cad-dispatch-software' : '/resources/what-is-cad-dispatch-software', label: 'CAD Dispatch Software' },
                { href: es ? '/es/k-dispatch' : '/k-dispatch', label: es ? 'K-Dispatch (CAD/911)' : 'K-Dispatch (CAD/911)' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{ background: '#131f33', border: '1px solid #1e3a5f', color: '#e6eef8', padding: '8px 16px', borderRadius: 6, textDecoration: 'none', fontSize: 14 }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection es={es} h2={es ? '¿Necesita una Plataforma para su Centro C5?' : 'Need a Platform for Your C5 Center?'} subtitle={es ? 'KabatOne K1 opera en más de 40 ciudades de América Latina. Solicite una demostración personalizada para su municipio o estado.' : 'KabatOne K1 operates in over 40 cities across Latin America. Request a personalized demo for your municipality or state.'} />
      </main>

      <Footer es={es} />
    </>
  )
}
