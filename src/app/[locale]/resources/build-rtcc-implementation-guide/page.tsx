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
  return generatePageMetadata('buildRtccImplementationGuide', locale)
}

export default async function BuildRtccImplementationGuidePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#2563eb'

  /* ── FAQ data ── */
  const faqs = es
    ? [
        {
          question: '¿Cuánto tiempo tarda implementar un RTCC?',
          answer:
            'Una implementación básica toma entre 3 y 6 meses. Un despliegue completo con todas las integraciones puede tomar entre 6 y 18 meses, dependiendo del número de cámaras, la coordinación entre agencias y la complejidad de las integraciones con sistemas existentes.',
        },
        {
          question: '¿Cuánto cuesta construir un RTCC?',
          answer:
            'Un RTCC básico requiere entre $500,000 y $2,000,000 USD en tecnología. Un RTCC completo con personal operativo puede costar entre $1,000,000 y $5,000,000 USD anuales. Programas federales como BYRNE JAG y COPS, así como programas estatales, pueden cubrir entre el 25% y el 75% de los costos.',
        },
        {
          question: '¿Qué cámaras son compatibles con las plataformas RTCC?',
          answer:
            'Cualquier cámara compatible con ONVIF o RTSP puede integrarse sin dependencia de un solo proveedor. En la mayoría de los casos, la infraestructura de cámaras existente puede integrarse directamente a la plataforma RTCC sin reemplazarla.',
        },
        {
          question: '¿Es necesaria la detección de disparos para un RTCC?',
          answer:
            'Mejora significativamente la capacidad de respuesta en tiempo real, pero no es un requisito obligatorio. La recomendación es iniciar con videovigilancia y ampliar con sensores acústicos en una segunda fase de implementación.',
        },
        {
          question: '¿Cuál es el personal mínimo para operar un RTCC?',
          answer:
            'Como mínimo, se necesitan 2 analistas por turno para una cobertura adecuada. Los RTCC con un solo analista por turno son operativos, pero limitan la capacidad de alerta en tiempo real. Un analista no puede monitorear eficazmente más de 30 a 40 cámaras de forma continua.',
        },
        {
          question: '¿Cómo apoya KabatOne la implementación de un RTCC?',
          answer:
            'La plataforma de KabatOne proporciona VMS unificado, fusión de sensores, GIS operacional en tiempo real e integración de despacho CAD en un solo entorno — diseñado específicamente para centros de comando. Esto elimina la necesidad de integrar múltiples proveedores y reduce los tiempos de implementación.',
        },
      ]
    : [
        {
          question: 'How long does it take to implement an RTCC?',
          answer:
            'A basic setup takes 3–6 months. A full deployment with all integrations can take 6–18 months, depending on camera count, agency coordination, and integration complexity with existing systems.',
        },
        {
          question: 'How much does an RTCC cost to build?',
          answer:
            'A basic RTCC requires $500K–$2M in technology. A full RTCC with operational staffing can cost $1M–$5M annually. Federal grants such as BYRNE JAG and COPS, along with state programs, can cover 25–75% of costs.',
        },
        {
          question: 'What cameras are compatible with RTCC platforms?',
          answer:
            'Any ONVIF or RTSP-compliant camera integrates without vendor lock-in. In most cases, existing camera infrastructure can be integrated directly into the RTCC platform without replacement.',
        },
        {
          question: 'Do you need gunshot detection for an RTCC?',
          answer:
            'It significantly enhances real-time capability but is not a hard requirement. The recommendation is to start with video surveillance and expand with acoustic sensors in a Phase 2 implementation.',
        },
        {
          question: 'What is the minimum staffing for an RTCC?',
          answer:
            'At minimum, 2 analysts per shift for adequate coverage. Single-analyst RTCCs are operational but limit real-time alerting capacity. One analyst cannot effectively monitor more than 30–40 cameras continuously.',
        },
        {
          question: 'How does KabatOne support RTCC implementations?',
          answer:
            "KabatOne's platform provides unified VMS, sensor fusion, real-time GIS, and CAD dispatch integration in one environment — purpose-built for command center operations. This eliminates multi-vendor integration complexity and reduces implementation timelines.",
        },
      ]

  /* ── Breadcrumbs ── */
  const breadcrumbs = [
    {
      name: es ? 'Inicio' : 'Home',
      url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/',
    },
    {
      name: es ? 'Recursos' : 'Resources',
      url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/',
    },
    {
      name: es
        ? 'Guía de Implementación de un RTCC'
        : 'How to Build a Real-Time Crime Center',
      url: es
        ? 'https://kabatone.com/es/resources/build-rtcc-implementation-guide/'
        : 'https://kabatone.com/resources/build-rtcc-implementation-guide/',
    },
  ]

  /* ── Schema ── */
  const artSchema = articleSchema(
    es
      ? 'Guía de Implementación de un RTCC para Gobiernos | KabatOne'
      : 'How to Build a Real-Time Crime Center: RTCC Guide | KabatOne',
    es
      ? 'Guía paso a paso para planificar e implementar un centro de crimen en tiempo real (RTCC) — requisitos tecnológicos, modelo de personal, fuentes de datos y errores comunes a evitar.'
      : 'Step-by-step guide to planning and implementing a real-time crime center (RTCC) — technology requirements, staffing model, data feeds, vendor selection, and common pitfalls to avoid.',
    es
      ? 'https://kabatone.com/es/resources/build-rtcc-implementation-guide/'
      : 'https://kabatone.com/resources/build-rtcc-implementation-guide/',
    '2026-04-08'
  )

  /* ── Shared styles ── */
  const sectionStyle: React.CSSProperties = {
    borderTop: '1px solid var(--border)',
    padding: '72px 32px',
  }
  const containerStyle: React.CSSProperties = {
    maxWidth: '820px',
    margin: '0 auto',
  }
  const h2Style: React.CSSProperties = {
    fontSize: 'clamp(24px, 3vw, 36px)',
    fontWeight: 800,
    fontFamily: 'Barlow Condensed, sans-serif',
    textTransform: 'uppercase',
    lineHeight: 1.1,
    marginBottom: '20px',
    marginTop: '0',
  }
  const h3Style: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 700,
    fontFamily: 'Barlow Condensed, sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '0.03em',
    lineHeight: 1.2,
    marginBottom: '12px',
    marginTop: '40px',
  }
  const pStyle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 300,
    color: 'var(--dim)',
    lineHeight: 1.8,
    marginBottom: '20px',
  }

  /* ── Phase 1 scope cards ── */
  const phase1Cards = es
    ? [
        {
          title: 'Área de cobertura',
          desc: '¿Cuántas cámaras, kilómetros cuadrados, población? Define el perímetro operacional antes de comprar cualquier equipo.',
        },
        {
          title: 'Casos de uso',
          desc: '¿Solo investigación posterior? ¿Alertas en tiempo real? ¿Apoyo proactivo a patrullas? Cada respuesta cambia significativamente los requerimientos tecnológicos.',
        },
        {
          title: 'Integración de agencias',
          desc: '¿Qué agencias usarán el RTCC — solo policía municipal, o también policía estatal, transporte, seguridad escolar?',
        },
        {
          title: 'Modelo de personal',
          desc: '¿Analistas 24/7, o turnos con respaldo en guardia? Esto determina el tamaño de la sala de control y los costos de licenciamiento.',
        },
      ]
    : [
        {
          title: 'Coverage area',
          desc: 'How many cameras, square miles, population? Define the operational perimeter before buying anything.',
        },
        {
          title: 'Use cases',
          desc: 'Investigate-after-the-fact only? Real-time alerting? Proactive patrol support? Each changes the technology requirement significantly.',
        },
        {
          title: 'Agency integration',
          desc: 'Which agencies will use the RTCC — city police only, or also county sheriff, transit police, school security?',
        },
        {
          title: 'Staffing model',
          desc: 'Analyst-staffed 24/7, or shift-based with on-call backup? This determines control room size and licensing costs.',
        },
      ]

  /* ── Phase 2 tech stack steps ── */
  const phase2Steps = es
    ? [
        {
          num: '01',
          title: 'Sistema de gestión de video (VMS)',
          desc: 'Consolida todas las cámaras en una interfaz unificada y con búsqueda. Debe soportar ONVIF/RTSP de cualquier fabricante. Busca etiquetado automático con IA.',
        },
        {
          num: '02',
          title: 'Alertas en tiempo real',
          desc: 'Integra sensores acústicos de disparos, lectores LPR, botones de pánico y herramientas de monitoreo de redes sociales en la misma pantalla operativa.',
        },
        {
          num: '03',
          title: 'GIS / conciencia situacional',
          desc: 'Todas las cámaras, incidentes, posición de unidades y alertas de sensores graficados en un mapa operativo en tiempo real.',
        },
        {
          num: '04',
          title: 'Integración con despacho CAD',
          desc: 'El RTCC debe poder enviar inteligencia directamente al despacho sin llamadas telefónicas. Enlace bidireccional en vivo entre analista y despachador.',
        },
        {
          num: '05',
          title: 'Analítica de video',
          desc: 'Detección con IA de merodeo, objetos abandonados, densidad de multitudes y comportamientos anómalos — para reducir la fatiga por monitoreo manual.',
        },
        {
          num: '06',
          title: 'Evidencia y cadena de custodia',
          desc: 'Todas las acciones del analista, vistas de cámaras y alertas deben registrarse con marcas de tiempo para el cumplimiento de cadena de custodia.',
        },
      ]
    : [
        {
          num: '01',
          title: 'Video Management System (VMS)',
          desc: 'Aggregate all cameras into a searchable, unified interface. Must support ONVIF/RTSP from any vendor. Look for AI-powered tagging.',
        },
        {
          num: '02',
          title: 'Real-time alerts',
          desc: 'Integrate acoustic sensors (gunshot detection), LPR readers, panic buttons, and social media monitoring tools into the same operational screen.',
        },
        {
          num: '03',
          title: 'GIS / Situational awareness map',
          desc: 'All cameras, incidents, unit positions, and sensor alerts plotted on a real-time operational map.',
        },
        {
          num: '04',
          title: 'CAD dispatch integration',
          desc: 'The RTCC must be able to push intelligence directly to dispatch without phone calls. Live bidirectional link between analyst and dispatcher.',
        },
        {
          num: '05',
          title: 'Video analytics',
          desc: 'AI-powered detection of loitering, object abandonment, crowd density, and anomalous behavior to reduce manual monitoring fatigue.',
        },
        {
          num: '06',
          title: 'Evidence and audit trail',
          desc: 'All analyst actions, camera views, and alerts must be logged with timestamps for chain-of-custody compliance.',
        },
      ]

  /* ── Phase 3 roles ── */
  const phase3Roles = es
    ? [
        {
          role: 'Analista RTCC',
          desc: 'Monitorea las transmisiones de video, revisa alertas y envía inteligencia a las unidades de campo.',
        },
        {
          role: 'Supervisor de turno',
          desc: 'Prioriza incidentes y coordina la escalada con múltiples agencias.',
        },
        {
          role: 'Administrador técnico / datos',
          desc: 'Gestiona integraciones, salud de las cámaras y actualizaciones de software.',
        },
      ]
    : [
        {
          role: 'RTCC Analyst',
          desc: 'Monitors feeds, reviews alerts, pushes intelligence to field units.',
        },
        {
          role: 'Shift Supervisor',
          desc: 'Prioritizes incidents, coordinates multi-agency escalation.',
        },
        {
          role: 'Data / Tech Admin',
          desc: 'Manages integrations, camera health, software updates.',
        },
      ]

  /* ── Common mistakes ── */
  const mistakes = es
    ? [
        {
          num: '01',
          title: 'Comprar cámaras antes de elegir la plataforma',
          desc: 'Las compras de hardware realizadas antes de seleccionar el software frecuentemente resultan en sistemas incompatibles.',
        },
        {
          num: '02',
          title: 'Subestimar el personal',
          desc: 'Un analista por turno no puede monitorear eficazmente más de 30 a 40 cámaras de forma continua.',
        },
        {
          num: '03',
          title: 'Sin integración CAD',
          desc: 'La inteligencia que queda dentro del RTCC y no puede llegar al despacho en segundos es inteligencia desperdiciada.',
        },
        {
          num: '04',
          title: 'Omitir la política de gobernanza',
          desc: '¿Qué agencias pueden acceder a qué transmisiones, por cuánto tiempo y bajo qué autoridad legal?',
        },
      ]
    : [
        {
          num: '01',
          title: 'Buying cameras before the platform',
          desc: 'Hardware purchases made before software selection often result in incompatible systems.',
        },
        {
          num: '02',
          title: 'Understaffing',
          desc: 'One analyst per shift cannot effectively monitor more than 30–40 cameras continuously.',
        },
        {
          num: '03',
          title: 'No CAD integration',
          desc: 'Intelligence locked inside the RTCC that cannot reach dispatch in seconds is wasted.',
        },
        {
          num: '04',
          title: 'Skipping the governance policy',
          desc: 'Which agencies can access which feeds, for how long, and under what legal authority?',
        },
      ]

  /* ── Comparison table rows ── */
  const compareRows = es
    ? [
        { label: 'Video', basic: '50–200 cámaras, IA limitada', full: '500+ cámaras, analítica IA completa' },
        { label: 'Alertas', basic: 'Solo monitoreo manual', full: 'Fusión automática de sensores' },
        { label: 'Enlace despacho', basic: 'Llamadas telefónicas al despacho', full: 'Integración directa con CAD' },
        { label: 'GIS', basic: 'Mapa básico', full: 'GIS operacional completo con seguimiento de unidades' },
        { label: 'Analítica', basic: 'Solo revisión post-incidente', full: 'Detección de comportamientos en tiempo real' },
        { label: 'Personal', basic: '1–2 analistas por turno', full: '3–6 analistas + supervisor' },
      ]
    : [
        { label: 'Video', basic: '50–200 cameras, limited AI', full: '500+ cameras, full AI analytics' },
        { label: 'Alerts', basic: 'Manual monitoring only', full: 'Automated sensor fusion alerts' },
        { label: 'Dispatch link', basic: 'Phone calls to dispatch', full: 'Direct CAD integration' },
        { label: 'GIS', basic: 'Basic map', full: 'Full operational GIS with unit tracking' },
        { label: 'Analytics', basic: 'Post-incident review only', full: 'Real-time behavior detection' },
        { label: 'Staffing', basic: '1–2 analysts per shift', full: '3–6 analysts + supervisor' },
      ]

  return (
    <>
      <Nav />

      {/* ── Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(artSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />

      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── BREADCRUMB ── */}
        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '24px 32px 0' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '12px', color: 'var(--muted)', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
              {es ? 'Inicio' : 'Home'}
            </Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <Link href="/resources" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
              {es ? 'Recursos' : 'Resources'}
            </Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--dim)' }}>
              {es ? 'Guía de Implementación de un RTCC' : 'How to Build a Real-Time Crime Center'}
            </span>
          </nav>
        </div>

        {/* ── HERO ── */}
        <section style={{ padding: '48px 32px 64px' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
              {es ? 'Guía de Implementación' : 'Implementation Guide'}
            </p>
            <h1 style={{
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 800,
              fontFamily: 'Barlow Condensed, sans-serif',
              textTransform: 'uppercase',
              lineHeight: 1.05,
              marginBottom: '24px',
            }}>
              {es
                ? 'Cómo Implementar un Centro de Crimen en Tiempo Real'
                : 'How to Build a Real-Time Crime Center'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'Guía práctica de implementación para agencias de seguridad pública y municipios que planean construir o modernizar un RTCC — stack tecnológico, modelo de personal, selección de proveedores y errores comunes a evitar.'
                : 'A practical implementation guide for law enforcement agencies and municipalities planning to build or upgrade an RTCC — technology stack, staffing model, vendor selection, and common pitfalls.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 1: What Is an RTCC ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'Qué Es un RTCC: Definición Rápida' : 'What Is an RTCC: Quick Definition'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Un RTCC es una instalación centralizada donde analistas monitorean transmisiones de video en vivo, alertas de sensores y flujos de datos para identificar actividad criminal en tiempo real y apoyar a los oficiales en patrulla con inteligencia accionable. A diferencia de los centros de despacho tradicionales, los RTCC se enfocan en inteligencia proactiva en lugar de atención reactiva de llamadas — identificando patrones sospechosos antes de que los incidentes escalen.'
                : 'An RTCC is a centralized facility where analysts monitor live video feeds, sensor alerts, and data streams to identify criminal activity in real time and support patrol officers with actionable intelligence. Unlike traditional dispatch centers, RTCCs focus on proactive intelligence rather than reactive call handling — flagging suspicious patterns before incidents escalate.'}
            </p>
            <p style={pStyle}>
              {es
                ? 'La diferencia operativa es fundamental: un centro de despacho recibe llamadas y envía unidades. Un RTCC ve el crimen desarrollarse, construye conciencia situacional antes de que llegue la primera llamada, y entrega inteligencia a los despachadores y unidades de campo en tiempo real. Esto reduce los tiempos de respuesta y mejora las tasas de resolución de casos de forma demostrable.'
                : 'The operational difference is fundamental: a dispatch center receives calls and sends units. An RTCC watches crime develop, builds situational awareness before the first call arrives, and delivers intelligence to dispatchers and field units in real time. This demonstrably reduces response times and improves case clearance rates.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 2: Phase 1 — Scope ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '10px' }}>
              {es ? 'Fase 1' : 'Phase 1'}
            </p>
            <h2 style={h2Style}>
              {es ? 'Definir Alcance y Objetivos' : 'Define Scope and Objectives'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Las implementaciones de RTCC fracasan por deficiencias en la planificación, no por tecnología deficiente. Antes de evaluar cualquier proveedor, define las respuestas a estas cuatro preguntas.'
                : 'RTCC implementations fail due to planning deficiencies, not poor technology. Before evaluating any vendor, define answers to these four questions.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '32px' }}>
              {phase1Cards.map((card) => (
                <div
                  key={card.title}
                  style={{
                    background: '#0b1628',
                    border: '1px solid var(--border)',
                    borderTop: `3px solid ${ACCENT}`,
                    borderRadius: '10px',
                    padding: '24px',
                  }}
                >
                  <h3 style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    fontFamily: 'Barlow Condensed, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginBottom: '10px',
                    marginTop: '0',
                    color: 'var(--white)',
                  }}>
                    {card.title}
                  </h3>
                  <p style={{ ...pStyle, marginBottom: '0', fontSize: '14px' }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: Phase 2 — Technology Stack ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '10px' }}>
              {es ? 'Fase 2' : 'Phase 2'}
            </p>
            <h2 style={h2Style}>
              {es ? 'Stack Tecnológico' : 'Technology Stack'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Un RTCC de alto desempeño requiere seis componentes tecnológicos fundamentales. La prioridad de implementación importa — el VMS y la integración CAD son la base; el resto amplía la capacidad.'
                : 'A high-performance RTCC requires six core technology components. Implementation priority matters — the VMS and CAD integration are the foundation; the rest expands capability.'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '32px' }}>
              {phase2Steps.map((step) => (
                <div
                  key={step.num}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                    background: '#0b1628',
                    borderRadius: '10px',
                    border: '1px solid var(--border)',
                    padding: '20px 24px',
                  }}
                >
                  <span style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: ACCENT,
                    minWidth: '28px',
                    paddingTop: '2px',
                  }}>
                    {step.num}
                  </span>
                  <div>
                    <p style={{ fontSize: '15px', fontWeight: 700, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px', marginTop: '0', color: 'var(--white)' }}>
                      {step.title}
                    </p>
                    <p style={{ ...pStyle, marginBottom: '0', fontSize: '14px' }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: Phase 3 — Staffing ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '10px' }}>
              {es ? 'Fase 3' : 'Phase 3'}
            </p>
            <h2 style={h2Style}>
              {es ? 'Personal y Capacitación' : 'Staffing and Training'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'La tecnología sin personal adecuado no funciona. Un RTCC operativo requiere al menos tres roles claramente definidos.'
                : 'Technology without adequate staffing does not perform. An operational RTCC requires at least three clearly defined roles.'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '32px' }}>
              {phase3Roles.map((item) => (
                <div
                  key={item.role}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                    background: '#0b1628',
                    borderRadius: '10px',
                    border: '1px solid var(--border)',
                    borderLeft: `4px solid ${ACCENT}`,
                    padding: '20px 24px',
                  }}
                >
                  <div>
                    <p style={{ fontSize: '15px', fontWeight: 700, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px', marginTop: '0', color: 'var(--white)' }}>
                      {item.role}
                    </p>
                    <p style={{ ...pStyle, marginBottom: '0', fontSize: '14px' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: Common Mistakes ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'Errores Comunes de Implementación' : 'Common Implementation Mistakes'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Los siguientes errores aparecen consistentemente en implementaciones de RTCC que no alcanzan su potencial operativo.'
                : 'The following mistakes appear consistently in RTCC implementations that fail to reach their operational potential.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '32px' }}>
              {mistakes.map((item) => (
                <div
                  key={item.num}
                  style={{
                    background: '#0b1628',
                    border: '1px solid rgba(239,68,68,0.25)',
                    borderTop: '3px solid #ef4444',
                    borderRadius: '10px',
                    padding: '24px',
                  }}
                >
                  <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em', color: '#ef4444', marginBottom: '8px', marginTop: '0' }}>
                    {es ? `ERROR ${item.num}` : `MISTAKE ${item.num}`}
                  </p>
                  <h3 style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    fontFamily: 'Barlow Condensed, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginBottom: '10px',
                    marginTop: '0',
                    color: 'var(--white)',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ ...pStyle, marginBottom: '0', fontSize: '14px' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 6: Comparison Table ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'RTCC Básico vs RTCC Completo' : 'Basic RTCC vs Full RTCC'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'No todos los RTCC son iguales. Las diferencias entre una implementación básica y una completa afectan directamente la capacidad operativa.'
                : 'Not all RTCCs are equal. The differences between a basic and a full implementation directly affect operational capability.'}
            </p>
            <div style={{ overflowX: 'auto', marginTop: '32px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border)' }}>
                    <th style={{ textAlign: 'left', padding: '12px 16px', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '13px', color: 'var(--muted)', fontWeight: 600 }}>
                      {es ? 'Capacidad' : 'Capability'}
                    </th>
                    <th style={{ textAlign: 'left', padding: '12px 16px', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '13px', color: 'var(--muted)', fontWeight: 600 }}>
                      {es ? 'RTCC Básico' : 'Basic RTCC'}
                    </th>
                    <th style={{ textAlign: 'left', padding: '12px 16px', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '13px', color: ACCENT, fontWeight: 600 }}>
                      {es ? 'RTCC Completo' : 'Full RTCC'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row, i) => (
                    <tr
                      key={row.label}
                      style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}
                    >
                      <td style={{ padding: '14px 16px', fontWeight: 600, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '0.04em', color: 'var(--white)' }}>
                        {row.label}
                      </td>
                      <td style={{ padding: '14px 16px', color: 'var(--dim)', fontWeight: 300 }}>
                        {row.basic}
                      </td>
                      <td style={{ padding: '14px 16px', color: 'var(--white)', fontWeight: 400 }}>
                        {row.full}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── SECTION 7: FAQ ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    borderBottom: '1px solid var(--border)',
                    padding: '24px 0',
                  }}
                >
                  <p style={{ fontSize: '16px', fontWeight: 700, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '10px', marginTop: '0', color: 'var(--white)' }}>
                    {faq.question}
                  </p>
                  <p style={{ ...pStyle, marginBottom: '0' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 8: Internal Links ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'Recursos Relacionados' : 'Related Resources'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginTop: '24px' }}>
              {(es
                ? [
                    { href: '/resources/what-is-a-real-time-crime-center', label: '¿Qué Es un Centro de Crimen en Tiempo Real?' },
                    { href: '/resources/rtcc-setup-guide', label: 'Guía de Configuración del RTCC' },
                    { href: '/resources/what-is-situational-awareness-software', label: '¿Qué Es el Software de Conciencia Situacional?' },
                    { href: '/resources/what-is-sensor-fusion', label: '¿Qué Es la Fusión de Sensores?' },
                    { href: '/resources/what-is-video-analytics', label: '¿Qué Es la Analítica de Video?' },
                    { href: '/resources/what-is-gunshot-detection-software', label: '¿Qué Es la Detección de Disparos?' },
                    { href: '/k-safety', label: 'K-Safety' },
                    { href: '/k-dispatch', label: 'K-Dispatch' },
                    { href: '/k-video', label: 'K-Video' },
                  ]
                : [
                    { href: '/resources/what-is-a-real-time-crime-center', label: 'What Is a Real-Time Crime Center?' },
                    { href: '/resources/rtcc-setup-guide', label: 'RTCC Setup Guide' },
                    { href: '/resources/what-is-situational-awareness-software', label: 'What Is Situational Awareness Software?' },
                    { href: '/resources/what-is-sensor-fusion', label: 'What Is Sensor Fusion?' },
                    { href: '/resources/what-is-video-analytics', label: 'What Is Video Analytics?' },
                    { href: '/resources/what-is-gunshot-detection-software', label: 'What Is Gunshot Detection Software?' },
                    { href: '/k-safety', label: 'K-Safety' },
                    { href: '/k-dispatch', label: 'K-Dispatch' },
                    { href: '/k-video', label: 'K-Video' },
                  ]
              ).map((link) => (
                <Link
                  key={link.href}
                  href={link.href as Parameters<typeof Link>[0]['href']}
                  style={{
                    display: 'block',
                    background: '#0b1628',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    padding: '14px 18px',
                    color: ACCENT,
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: 500,
                    lineHeight: 1.4,
                    transition: 'border-color 0.15s',
                  }}
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>

      <CTASection
        es={es}
        h2={es ? '¿Listo para Implementar tu RTCC?' : 'Ready to Build Your Real-Time Crime Center?'}
        subtitle={es
          ? 'KabatOne provee la plataforma operativa unificada que los centros de crimen en tiempo real necesitan — VMS, fusión de sensores, GIS y despacho CAD en una sola interfaz. Agenda una demo.'
          : 'KabatOne provides the unified platform RTCCs need — VMS, sensor fusion, operational GIS, and CAD dispatch in one interface. Schedule a demo to see it in action.'}
      />
      <Footer es={es} />
    </>
  )
}
