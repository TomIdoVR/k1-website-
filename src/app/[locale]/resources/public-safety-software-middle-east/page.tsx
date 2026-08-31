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
  return generatePageMetadata('publicSafetySoftwareMiddleEast', locale)
}

export default async function PublicSafetySoftwareMiddleEastPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-middle-east/`
    : `${baseUrl}/resources/public-safety-software-middle-east/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Oriente Medio' : 'Public Safety Software — Middle East', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cuáles son los principales proyectos de ciudad inteligente y seguridad pública en el Medio Oriente?',
      answer: 'Los proyectos de mayor escala incluyen: NEOM (Arabia Saudita) — ciudad inteligente de $500B con vigilancia IA integrada; Abu Dhabi Safe City (EAU) — plataforma unificada con 20,000+ cámaras para las autoridades de Abu Dhabi; Dubai Police Smart Services — integración de video, analítica facial y despacho para la policía de Dubai; Qatar Integrated Command & Control Centre (ICCC) de Doha; y la iniciativa Saudi Vision 2030 que incluye centros de mando de seguridad para ciudades como Riad, Jeddah y Mecca durante eventos de gran escala.',
    },
    {
      question: '¿Cómo se adquiere tecnología de seguridad pública en el Golfo (UAE, Arabia Saudita, Qatar)?',
      answer: 'La adquisición en el Golfo sigue modelos de contratación gubernamental directa. En UAE, los ministerios del Interior (MOI) y las autoridades policiales de Abu Dhabi y Dubai licitan directamente o a través de integradores de sistemas locales. En Arabia Saudita, la Saudi Vision 2030 canaliza financiamiento a través del Fondo de Inversión Pública (PIF) y los ministerios del Interior (MOI) y Municipal. Se requiere presencia local o un socio distribuidor regional registrado. KabatOne trabaja con integradores certificados en la región GCC para cumplir con requisitos de contenido local (Saudización, Emiratización).',
    },
    {
      question: '¿Puede KabatOne integrarse con la infraestructura CCTV existente en ciudades del Medio Oriente?',
      answer: 'Sí. KabatOne K-Video integra cualquier cámara ONVIF/RTSP, incluidas las marcas más comunes en la región: Hikvision, Dahua, Axis, Bosch, Hanwha y Samsung. Las redes CCTV existentes en Dubai (Safe Dubai), Abu Dhabi, Riad y Doha se conectan directamente sin reemplazar hardware. La plataforma soporta analítica de video con IA (LPR árabe, detección de intrusión, conteo de multitudes para eventos religiosos masivos como el Hajj y Umrah) e integración con sistemas de gestión de multitudes específicos de la región.',
    },
    {
      question: '¿Qué considera KabatOne en cuanto a privacidad y cumplimiento legal en el Medio Oriente?',
      answer: 'KabatOne opera bajo los marcos regulatorios locales de cada país. En UAE aplica la UAE Federal Data Protection Law (Federal Decree-Law No. 45 of 2021) y las regulaciones del TDRA. En Arabia Saudita aplica la PDPL (Personal Data Protection Law). La plataforma implementa controles de acceso basados en roles (RBAC), audit logging completo, retención configurable de datos y puede desplegarse en infraestructura local o en nube regional (AWS me-south-1, Azure UAE North) para cumplir con requisitos de soberanía de datos de cada jurisdicción.',
    },
    {
      question: '¿Cómo apoya KabatOne operaciones de seguridad en eventos masivos como el Hajj en La Meca?',
      answer: 'Los eventos de gran escala en el Medio Oriente — Hajj y Umrah (2M+ peregrinos en Meca), eventos deportivos (Qatar 2022, Formula 1 en Abu Dhabi y Riad, Saudi Pro League) y festividades nacionales — requieren gestión de multitudes en tiempo real. KabatOne K-Video integra analítica de conteo de personas por zona, alertas de densidad crítica y correlación con despacho CAD para activación automática de unidades de emergencia cuando se supera el umbral de aforo. K-Safety provee el mapa operativo GIS con todos los puntos de control, cámaras y unidades de respuesta en una sola vista.',
    },
    {
      question: '¿Tiene KabatOne experiencia en despliegues en el Medio Oriente o mercados similares?',
      answer: 'KabatOne opera en más de 40 ciudades en América Latina protegiendo a 73 millones de ciudadanos — un mercado con características similares al Golfo en cuanto a escala de despliegue gubernamental, velocidad de adopción tecnológica y proyectos de ciudad inteligente de gran escala. La plataforma ha demostrado capacidad para integrarse con infraestructura CCTV heterogénea existente, operar en entornos multiagencia complejos y adaptarse a flujos de trabajo de diferentes cuerpos de seguridad. Para proyectos en la región GCC, KabatOne trabaja con integradores regionales certificados.',
    },
  ] : [
    {
      question: 'What are the major smart city and public safety projects in the Middle East?',
      answer: 'Major projects include: NEOM (Saudi Arabia) — $500B smart city with integrated AI surveillance; Abu Dhabi Safe City (UAE) — unified platform with 20,000+ cameras for Abu Dhabi authorities; Dubai Police Smart Services — video, facial analytics, and dispatch integration for Dubai Police; Qatar\'s Doha Integrated Command & Control Centre (ICCC); and the Saudi Vision 2030 initiative including command centers for Riyadh, Jeddah, and Mecca security operations during large-scale events.',
    },
    {
      question: 'How is public safety technology procured in the Gulf (UAE, Saudi Arabia, Qatar)?',
      answer: 'Gulf procurement follows government direct contracting models. In UAE, the Ministry of Interior (MOI) and Abu Dhabi/Dubai police authorities tender directly or through local system integrators. In Saudi Arabia, Vision 2030 channels funding through the Public Investment Fund (PIF) and the Interior and Municipal ministries. Local presence or a registered regional distribution partner is required. KabatOne works with certified GCC-region integrators to meet local content requirements (Saudization, Emiratization).',
    },
    {
      question: 'Can KabatOne integrate with existing CCTV infrastructure in Middle Eastern cities?',
      answer: 'Yes. KabatOne K-Video integrates any ONVIF/RTSP camera, including the most common brands in the region: Hikvision, Dahua, Axis, Bosch, Hanwha, and Samsung. Existing CCTV networks in Dubai (Safe Dubai), Abu Dhabi, Riyadh, and Doha connect directly without hardware replacement. The platform supports AI video analytics (Arabic LPR, intrusion detection, crowd counting for mass religious events like Hajj and Umrah) and integrates with region-specific crowd management systems.',
    },
    {
      question: 'What does KabatOne address regarding privacy and legal compliance in the Middle East?',
      answer: "KabatOne operates under local regulatory frameworks in each country. In UAE it applies the UAE Federal Data Protection Law (Federal Decree-Law No. 45 of 2021) and TDRA regulations. In Saudi Arabia it applies the PDPL (Personal Data Protection Law). The platform implements role-based access controls (RBAC), full audit logging, configurable data retention, and can be deployed on local infrastructure or regional cloud (AWS me-south-1, Azure UAE North) to meet each jurisdiction's data sovereignty requirements.",
    },
    {
      question: 'How does KabatOne support mass event security operations like Hajj in Mecca?',
      answer: 'Large-scale events in the Middle East — Hajj and Umrah (2M+ pilgrims in Mecca), sporting events (Qatar 2022, Abu Dhabi and Riyadh Formula 1, Saudi Pro League), and national celebrations — require real-time crowd management. KabatOne K-Video integrates per-zone crowd counting analytics, critical density alerts, and CAD dispatch correlation for automatic unit activation when occupancy thresholds are exceeded. K-Safety provides the GIS operational map with all checkpoints, cameras, and response units in one unified view.',
    },
    {
      question: 'Does KabatOne have experience in Middle East deployments or similar markets?',
      answer: 'KabatOne operates in 40+ cities across Latin America protecting 73 million citizens — a market with similar characteristics to the Gulf in terms of government deployment scale, technology adoption speed, and large-scale smart city projects. The platform has demonstrated capability to integrate with heterogeneous existing CCTV infrastructure, operate in complex multi-agency environments, and adapt to different security agency workflows. For GCC region projects, KabatOne works with certified regional system integrators.',
    },
  ]

  const challenges = es ? [
    {
      icon: '🏙️',
      title: 'Proyectos Smart City a Gran Escala',
      desc: 'NEOM, Abu Dhabi Safe City y Vision 2030 requieren integración de decenas de miles de cámaras con analítica de IA en tiempo real. K-Video escala sin límite práctico de dispositivos y agrega analytics de LPR, detección de intrusión y conteo de multitudes en una sola plataforma.',
    },
    {
      icon: '🕌',
      title: 'Seguridad en Eventos Masivos y Religiosos',
      desc: 'El Hajj y eventos de gran escala concentran millones de personas en zonas de alta densidad. K-Safety provee el COP operativo en tiempo real con alertas de densidad crítica, despacho automático de unidades y coordinación entre fuerzas de seguridad civiles y militares.',
    },
    {
      icon: '🔒',
      title: 'Soberanía de Datos y Cumplimiento Local',
      desc: 'UAE Federal Data Protection Law, PDPL de Arabia Saudita y regulaciones de Qatar exigen que datos de seguridad pública residan dentro de fronteras nacionales. KabatOne despliega en AWS me-south-1 (Bahréin), Azure UAE North o infraestructura on-premise para cumplimiento total.',
    },
    {
      icon: '🤝',
      title: 'Contenido Local y Saudización/Emiratización',
      desc: 'Los contratos gubernamentales en el Golfo exigen porcentajes de contenido local (Saudización 30%+ en Arabia Saudita, Emiratización en UAE). KabatOne trabaja con integradores regionales certificados y partners locales para cumplir con estos requisitos en cada licitación.',
    },
  ] : [
    {
      icon: '🏙️',
      title: 'Large-Scale Smart City Projects',
      desc: 'NEOM, Abu Dhabi Safe City, and Vision 2030 require integrating tens of thousands of cameras with real-time AI analytics. K-Video scales to any number of devices and aggregates LPR analytics, intrusion detection, and crowd counting in one platform.',
    },
    {
      icon: '🕌',
      title: 'Mass Event and Religious Site Security',
      desc: 'Hajj and large-scale events concentrate millions of people in high-density zones. K-Safety provides the real-time operational COP with critical density alerts, automatic unit dispatch, and coordination across civil and military security forces.',
    },
    {
      icon: '🔒',
      title: 'Data Sovereignty and Local Compliance',
      desc: "UAE Federal Data Protection Law, Saudi PDPL, and Qatar's regulations require public safety data to reside within national borders. KabatOne deploys on AWS me-south-1 (Bahrain), Azure UAE North, or on-premise infrastructure for full compliance.",
    },
    {
      icon: '🤝',
      title: 'Local Content and Saudization/Emiratization',
      desc: 'Gulf government contracts require local content percentages (Saudization 30%+ in Saudi Arabia, Emiratization in UAE). KabatOne works with certified regional system integrators and local partners to meet these requirements for each tender.',
    },
  ]

  const stats = [
    { value: '$500B+', label: es ? 'Inversión Smart City (NEOM)' : 'Smart City Investment (NEOM)' },
    { value: '20,000+', label: es ? 'Cámaras Abu Dhabi Safe City' : 'Abu Dhabi Safe City Cameras' },
    { value: '2M+', label: es ? 'Peregrinos Hajj / Año' : 'Hajj Pilgrims / Year' },
    { value: '6', label: es ? 'Países GCC Activos' : 'Active GCC Countries' },
  ]

  const products = [
    {
      name: 'K-Video',
      href: '/k-video',
      desc: es
        ? 'VMS con analítica IA que integra Hikvision, Dahua, Axis y cualquier cámara ONVIF/RTSP — LPR árabe, conteo de multitudes, detección de intrusión.'
        : 'AI VMS integrating Hikvision, Dahua, Axis, and any ONVIF/RTSP camera — Arabic LPR, crowd counting, intrusion detection at scale.',
    },
    {
      name: 'K-Safety',
      href: '/k-safety',
      desc: es
        ? 'GIS operativo en tiempo real para coordinación multiagencia en eventos masivos y operaciones de seguridad urbana en el Golfo.'
        : 'Real-time operational GIS for multi-agency coordination in mass events and urban security operations across the Gulf.',
    },
    {
      name: 'K-Dispatch',
      href: '/k-dispatch',
      desc: es
        ? 'Sistema CAD de despacho que conecta alertas de video analytics con unidades de respuesta en segundos.'
        : 'CAD dispatch system connecting video analytics alerts to response units in seconds — configurable for GCC agency workflows.',
    },
  ]

  const articleHeadline = es
    ? 'Software de Seguridad Pública para el Medio Oriente: Smart City, Safe City y Eventos Masivos'
    : 'Public Safety Software for the Middle East: Smart City, Safe City, and Mass Event Security'
  const articleDescription = es
    ? 'Plataforma unificada para proyectos Smart City en UAE, Arabia Saudita y Qatar — integración CCTV a gran escala, analítica IA para eventos masivos y cumplimiento de soberanía de datos bajo regulaciones GCC.'
    : 'Unified platform for Smart City projects in UAE, Saudi Arabia, and Qatar — large-scale CCTV integration, AI analytics for mass events, and data sovereignty compliance under GCC regulations.'

  return (
    <>
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(articleHeadline, articleDescription, pageUrl, '2026-05-18')) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />

      <main style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <section style={{ padding: '64px 32px 56px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

            {/* Breadcrumb */}
            <nav style={{ fontSize: '12px', color: 'var(--dim)', marginBottom: '32px', display: 'flex', gap: '6px', alignItems: 'center' }}>
              <Link href="/" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Inicio' : 'Home'}</Link>
              <span>/</span>
              <Link href="/resources" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Recursos' : 'Resources'}</Link>
              <span>/</span>
              <span style={{ color: 'var(--white)' }}>{es ? 'Oriente Medio' : 'Middle East'}</span>
            </nav>

            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: ACCENT, background: 'rgba(59,130,246,0.1)', padding: '4px 12px', borderRadius: '4px' }}>
                {es ? 'Guía de Mercado' : 'Market Guide'}
              </span>
              <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#f59e0b', background: 'rgba(245,158,11,0.1)', padding: '4px 12px', borderRadius: '4px' }}>
                🌍 {es ? 'Medio Oriente / GCC' : 'Middle East / GCC'}
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 60px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: '24px' }}>
              {es
                ? 'Software de Seguridad Pública para el Medio Oriente'
                : 'Public Safety Software for the Middle East'}
            </h1>

            <p style={{ fontSize: '18px', color: 'var(--dim)', lineHeight: 1.7, maxWidth: '740px', marginBottom: '32px' }}>
              {es
                ? 'Plataforma unificada para proyectos Smart City y Safe City en UAE, Arabia Saudita, Qatar y el Golfo — integración CCTV a gran escala con analítica IA (LPR árabe, conteo de multitudes para Hajj), gestión de eventos masivos y cumplimiento de soberanía de datos bajo regulaciones GCC.'
                : 'Unified platform for Smart City and Safe City projects in UAE, Saudi Arabia, Qatar, and the Gulf — large-scale CCTV integration with AI analytics (Arabic LPR, Hajj crowd counting), mass event security management, and data sovereignty compliance under GCC regulations.'}
            </p>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }} className="stats-grid">
              {stats.map((s, i) => (
                <div key={i} style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.18)', borderRadius: '10px', padding: '20px 16px', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(18px, 2.5vw, 28px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', color: '#fbbf24', marginBottom: '4px' }}>{s.value}</div>
                  <div style={{ fontSize: '11px', color: 'var(--dim)', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ME LANDSCAPE ── */}
        <section style={{ padding: '64px 32px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', marginBottom: '24px' }}>
              {es ? 'El Mercado de Seguridad Pública en el Golfo y el Medio Oriente' : 'Public Safety Technology Market in the Gulf and Middle East'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
              <div>
                <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.8, marginBottom: '20px' }}>
                  {es
                    ? 'El Medio Oriente es uno de los mercados de más rápido crecimiento para tecnología de ciudad inteligente y seguridad pública. Las iniciativas Vision 2030 (Arabia Saudita), UAE Smart Government, Qatar National Vision 2030 y las preparaciones post-Mundial Qatar 2022 han impulsado inversiones masivas en plataformas de vigilancia y gestión de emergencias.'
                    : 'The Middle East is one of the fastest-growing markets for smart city and public safety technology. Vision 2030 (Saudi Arabia), UAE Smart Government, Qatar National Vision 2030, and post-Qatar 2022 infrastructure investments have driven massive spending on surveillance platforms and emergency management systems.'}
                </p>
                <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.8 }}>
                  {es
                    ? 'Los proyectos más ambiciosos — NEOM, Abu Dhabi Falcon Eye, Dubai Safe City — exigen plataformas que integren decenas de miles de cámaras con analítica de IA, despacho multiagencia y gestión de eventos masivos para eventos religiosos y deportivos de escala global.'
                    : 'The most ambitious projects — NEOM, Abu Dhabi Falcon Eye, Dubai Safe City — demand platforms that integrate tens of thousands of cameras with AI analytics, multi-agency dispatch, and mass event management for global-scale religious and sporting events.'}
                </p>
              </div>
              <div>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px' }}>
                  <p style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#fbbf24', marginBottom: '16px' }}>
                    {es ? 'Proyectos Clave en la Región' : 'Key Projects in the Region'}
                  </p>
                  {[
                    { label: 'NEOM (KSA)', desc: es ? 'Smart city $500B — vigilancia IA integrada' : '$500B smart city — integrated AI surveillance' },
                    { label: 'Abu Dhabi Safe City', desc: es ? '20,000+ cámaras, plataforma unificada UAE' : '20,000+ cameras, unified UAE platform' },
                    { label: 'Dubai Police Smart', desc: es ? 'Video, analytics y despacho integrados' : 'Video, analytics, and integrated dispatch' },
                    { label: 'Qatar ICCC Doha', desc: es ? 'Centro integrado de mando y control' : 'Integrated Command & Control Centre' },
                    { label: 'Saudi Vision 2030', desc: es ? 'Centros de mando para ciudades saudíes' : 'Command centers for Saudi cities' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '12px', padding: '10px 0', borderBottom: i < 4 ? '1px solid var(--border)' : 'none' }}>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--white)', minWidth: '160px', flexShrink: 0 }}>{item.label}</span>
                      <span style={{ fontSize: '13px', color: 'var(--dim)' }}>{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHALLENGES ── */}
        <section style={{ padding: '64px 32px', borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', marginBottom: '8px' }}>
              {es ? '4 Desafíos Clave en el Medio Oriente' : '4 Key Challenges in the Middle East'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '32px' }}>
              {challenges.map((c, i) => (
                <div key={i} style={{ background: '#0b1628', border: '1px solid var(--border)', borderRadius: '12px', padding: '28px' }}>
                  <div style={{ fontSize: '28px', marginBottom: '12px' }}>{c.icon}</div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '10px', color: 'var(--white)' }}>{c.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ── */}
        <section style={{ padding: '64px 32px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', marginBottom: '8px' }}>
              {es ? 'La Plataforma KabatOne para el Golfo' : 'KabatOne Platform for the Gulf'}
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--dim)', marginBottom: '32px', lineHeight: 1.7 }}>
              {es
                ? 'Tres productos integrados nativamente que escalan desde municipios hasta proyectos Smart City nacionales en el GCC.'
                : 'Three natively integrated products that scale from city municipalities to national Smart City projects across the GCC.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {products.map((p, i) => (
                <Link key={i} href={p.href} style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: '#0b1628', border: '1px solid var(--border)', borderRadius: '12px', padding: '28px', textDecoration: 'none', color: 'inherit' }}>
                  <span style={{ fontSize: '16px', fontWeight: 700, color: '#fbbf24' }}>{p.name}</span>
                  <span style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.65 }}>{p.desc}</span>
                  <span style={{ fontSize: '13px', color: ACCENT, marginTop: 'auto' }}>{es ? 'Ver producto →' : 'View product →'}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section style={{ padding: '64px 32px', borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', marginBottom: '32px' }}>
              {es ? 'Preguntas Frecuentes — Medio Oriente' : 'Frequently Asked Questions — Middle East'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ padding: '24px 0', borderBottom: '1px solid var(--border)' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--white)', marginBottom: '10px', lineHeight: 1.5 }}>{faq.question}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.75 }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED ── */}
        <section style={{ padding: '48px 32px 64px' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--dim)', marginBottom: '16px' }}>
              {es ? 'Recursos Relacionados' : 'Related Resources'}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {[
                { href: '/resources/public-safety-software-uae', en: 'Public Safety Software for the UAE: Dubai Police IPOC, Safe City & NESA', es: 'Software de Seguridad Pública para los EAU: Dubai Police IPOC, Safe City y NESA' },
                { href: '/resources/public-safety-software-united-states', label: es ? 'Software Seguridad Pública EE.UU.' : 'Public Safety Software — US' },
                { href: '/resources/public-safety-software-united-kingdom', label: es ? 'Software de Seguridad Pública — Reino Unido' : 'Public Safety Software — UK' },
                { href: '/resources/public-safety-software-australia', label: es ? 'Software de Seguridad Pública — Australia' : 'Public Safety Software — Australia' },
                { href: '/resources/video-analytics-use-cases', label: es ? 'Casos de Uso de Analítica de Video' : 'Video Analytics Use Cases' },
                { href: '/resources/cctv-video-analytics', label: es ? 'Analítica de Video con IA' : 'AI Video Analytics' },
                { href: '/resources/what-is-video-management-software', label: es ? 'Software de Gestión de Video' : 'Video Management Software' },
                { href: '/resources/what-is-a-real-time-crime-center', label: es ? 'Centro de Crimen en Tiempo Real' : 'Real-Time Crime Center' },
                { href: '/resources/what-is-situational-awareness-software', label: es ? 'Conciencia Situacional' : 'Situational Awareness' },
              ].map((r) => (
                <Link key={r.href} href={r.href} style={{ fontSize: '12px', color: '#64748b', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '6px 12px', textDecoration: 'none' }}>
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          es={es}
          h2={es ? 'Lleva KabatOne al Golfo y el Medio Oriente' : 'Bring KabatOne to the Gulf and Middle East'}
          subtitle={es
            ? 'Desde Smart City a gran escala hasta gestión de eventos masivos — KabatOne integra CAD, video y GIS en una plataforma lista para el GCC. Agenda una sesión con nuestro equipo de ventas internacional.'
            : 'From large-scale Smart City to mass event management — KabatOne integrates CAD, video, and GIS in a GCC-ready platform. Schedule a session with our international sales team.'}
          cta1={es ? 'Solicitar Demo' : 'Book a Demo'}
          cta2={es ? 'Contactar Ventas Intl.' : 'Contact Intl. Sales'}
        />

      </main>

      <Footer es={es} />

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
