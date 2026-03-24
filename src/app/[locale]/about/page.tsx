import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { faqPageSchema, breadcrumbSchema } from '@/lib/schema'
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
  return generatePageMetadata('about', locale)
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const content = {
    breadcrumbHome: es ? 'Inicio' : 'Home',
    breadcrumbCurrent: es ? 'Nosotros' : 'About',
    eyebrow: es ? 'Quienes Somos' : 'Who We Are',
    h1: es ? 'Somos KabatOne' : 'The Team Behind KabatOne',
    subtitle: es
      ? 'Una nueva generación de inteligencia, tecnología y protección. Operamos en América Latina, Norteamérica y Europa — brindando inteligencia de seguridad en tiempo real que salva vidas.'
      : 'A new generation of intelligence, technology, and protection. We operate across Latin America, North America, and Europe \u2014 delivering real-time safety intelligence that saves lives.',
    cta1: es ? 'Solicita una Demo' : 'Book a Demo',
    cta2: es ? 'Nuestra Misión' : 'Our Mission',

    // Globe metrics
    metricCitizens: es ? 'Ciudadanos Protegidos' : 'Citizens Protected',
    metricProjects: es ? 'Proyectos Activos' : 'Active Projects',
    metricContinents: es ? 'Continentes' : 'Continents',
    metricExperts: es ? 'Expertos' : 'Experts',

    // Stats bar
    stat1Label: es ? 'Ciudadanos Protegidos' : 'Protected Citizens',
    stat2Label: es ? 'Proyectos Mundiales' : 'Projects Worldwide',
    stat3Label: es ? 'Tecnología 100% Propia' : 'In-House Technology',
    stat4Label: es ? 'Expertos Mundiales' : 'Experts Worldwide',

    // Mission
    missionEyebrow: es ? 'Nuestra Misión' : 'Our Mission',
    missionH2: es
      ? <>Construido para Proteger.<br />Diseñado para Decidir.</>
      : <>Built to Protect.<br />Designed to Decide.</>,
    missionBody: es
      ? 'Nuestra misión es mejorar la seguridad y la eficiencia operativa a través de consultoría personalizada, sistemas propietarios e integraciones tecnológicas de vanguardia. Brindamos servicios gestionados de extremo a extremo que empoderan la toma de decisiones y salvan vidas.'
      : 'Our mission is to enhance security and operational efficiency through tailored consultancy, proprietary systems, and cutting-edge technological integrations. We deliver end-to-end managed services that empower decision-making and save lives.',
    missionPanelLabel: es ? 'Dos Décadas de Experiencia' : 'Two Decades of Experience',
    missionPanelQuote: es
      ? '\u201CNo solo desplegamos tecnología \u2014 construimos sistemas que deciden, responden y salvan vidas en tiempo real.\u201D'
      : '\u201CWe don\u2019t just deploy technology \u2014 we build systems that decide, respond, and save lives in real time.\u201D',

    // Values
    valuesEyebrow: es ? 'Nuestros Valores' : 'Our Values',
    valuesH2: es
      ? <>Por Qué los Equipos Eligen<br />Construir con Nosotros</>
      : <>Why Teams Choose<br />to Build with Us</>,

    // Customer Success
    csEyebrow: es ? 'Éxito del Cliente' : 'Customer Success',
    csH2: es
      ? <>Estamos Contigo.<br />En Cada Paso.</>
      : <>We&apos;re With You.<br />Every Step of the Way.</>,
    csBody: es
      ? 'Desde el despliegue hasta las operaciones diarias, KabatOne proporciona la infraestructura completa de soporte que las organizaciones de misión crítica necesitan para mantenerse seguras, capaces y cubiertas.'
      : 'From deployment to daily operations, KabatOne provides the full support infrastructure that mission-critical organizations need to stay confident, capable, and covered.',

    // Global Presence
    gpEyebrow: es ? 'Presencia Global' : 'Global Presence',
    gpH2: es
      ? <>Atención Local.<br />Innovación Global.</>
      : <>Local Attention.<br />Global Innovation.</>,
    gpBody: es
      ? 'Equipos de desarrollo en México e Israel se combinan con operaciones en tres continentes para entregar soluciones localizadas con ingeniería de clase mundial.'
      : 'Development teams in Mexico and Israel combine with operations across three continents to deliver localized solutions with world-class engineering.',

    // CTA
    ctaH2: es ? 'Ve KabatOne en Accion' : 'See KabatOne in Action',
    ctaSub: es
      ? 'Únete a más de 68 organizaciones en todo el mundo que confían en KabatOne para proteger a sus personas, operaciones y comunidades.'
      : 'Join 68+ organizations worldwide that trust KabatOne to protect their people, operations, and communities.',
  }

  const missionBullets = es ? [
    'Software y hardware propietario desarrollado completamente internamente',
    'Inteligencia urbana y de emergencias en tiempo real a escala',
    'Integración perfecta con sistemas y plataformas de terceros',
    'Alta disponibilidad y escalabilidad para infraestructura crítica',
    'Soporte 24/7 y servicios completamente gestionados',
  ] : [
    'Proprietary software and hardware developed entirely in-house',
    'Real-time urban and emergency intelligence at scale',
    'Seamless integration with third-party systems and platforms',
    'High availability and scalability for critical infrastructure',
    '24/7 support and fully managed services',
  ]

  const regions = es ? [
    { color: '#06b6d4', label: 'México \u2014 Sede Central' },
    { color: '#f59e0b', label: 'Israel \u2014 Oficina de I+D' },
    { color: '#3b82f6', label: 'Estados Unidos \u2014 Oficina Comercial, Cresskill NJ' },
  ] : [
    { color: '#06b6d4', label: 'México \u2014 Headquarters' },
    { color: '#f59e0b', label: 'Israel \u2014 R&D Office' },
    { color: '#3b82f6', label: 'United States \u2014 Commercial Office, Cresskill NJ' },
  ]

  const values = es ? [
    { icon: 'rgba(59,130,246,0.12)', emoji: '\uD83C\uDF0D', title: 'Impacto Global', text: 'Nuestros proyectos abarcan México, América Latina, Norteamérica y Europa \u2014 protegiendo a millones de ciudadanos a través de jurisdicciones y culturas.' },
    { icon: 'rgba(6,182,212,0.12)', emoji: '\u26A1', title: 'Innovación Tecnológica', text: 'Trabajamos en la frontera de la IA, IoT, big data y plataformas de seguridad \u2014 siempre construyendo lo que el mercado aún no ha visto.' },
    { icon: 'rgba(168,85,247,0.12)', emoji: '\uD83E\uDD1D', title: 'Cultura Colaborativa', text: 'Creemos que los mejores sistemas son construidos por equipos diversos y apasionados. Valoramos el talento, la creatividad y el coraje para desafiar el status quo.' },
    { icon: 'rgba(34,197,94,0.12)', emoji: '\uD83D\uDCC8', title: 'Crecimiento Continuo', text: 'Invertimos en nuestra gente tanto como en nuestros productos \u2014 capacitación continua, exposición global y espacio para crecer junto a la tecnología.' },
  ] : [
    { icon: 'rgba(59,130,246,0.12)', emoji: '\uD83C\uDF0D', title: 'Global Impact', text: 'Our projects span Mexico, Latin America, North America, and Europe \u2014 protecting millions of citizens across jurisdictions and cultures.' },
    { icon: 'rgba(6,182,212,0.12)', emoji: '\u26A1', title: 'Technological Innovation', text: 'We work at the frontier of AI, IoT, big data, and security platforms \u2014 always building what the market hasn\u2019t seen yet.' },
    { icon: 'rgba(168,85,247,0.12)', emoji: '\uD83E\uDD1D', title: 'Collaborative Culture', text: 'We believe the best systems are built by diverse, passionate teams. We value talent, creativity, and the courage to challenge the status quo.' },
    { icon: 'rgba(34,197,94,0.12)', emoji: '\uD83D\uDCC8', title: 'Continuous Growth', text: 'We invest in our people as much as our products \u2014 continuous training, global exposure, and room to grow alongside the technology.' },
  ]

  const services = es ? [
    { color: '#06b6d4', emoji: '\uD83D\uDD50', tag: 'Siempre Activo', name: 'Soporte 24/7', desc: 'Soporte técnico las 24 horas con SLAs de respuesta garantizados. Nuestro equipo de operaciones está disponible cada hora de cada día \u2014 porque la seguridad pública nunca descansa.' },
    { color: '#3b82f6', emoji: '\uD83E\uDD1D', tag: 'Dedicado', name: 'Éxito del Cliente', desc: 'Un Customer Success Manager dedicado asignado a tu cuenta \u2014 impulsando la adopción, dando seguimiento a resultados y asegurando que tu equipo obtenga el máximo valor de cada módulo.' },
    { color: '#a855f7', emoji: '\uD83C\uDF93', tag: 'Habilitación', name: 'Capacitación', desc: 'Programas de incorporación estructurados y capacitación continua para operadores, supervisores y equipos de TI \u2014 disponibles en sitio, remoto o a través de nuestro portal de aprendizaje.' },
    { color: '#f59e0b', emoji: '\uD83D\uDEE0\uFE0F', tag: 'Servicios Expertos', name: 'Servicios Profesionales', desc: 'Integraciones personalizadas, diseño de flujos de trabajo y configuración de sistemas entregados por nuestros ingenieros certificados \u2014 adaptados a los requisitos operativos únicos de tu organización.' },
    { color: '#22c55e', emoji: '\u2B50', tag: 'Nivel Premium', name: 'Servicio White Glove', desc: 'Servicio gestionado de extremo a extremo para organizaciones que demandan el más alto nivel de atención \u2014 desde la instalación hasta la gestión operativa continua y revisiones estratégicas.' },
  ] : [
    { color: '#06b6d4', emoji: '\uD83D\uDD50', tag: 'Always On', name: '24/7 Support', desc: 'Round-the-clock technical support with guaranteed response SLAs. Our operations team is available every hour of every day \u2014 because public safety never sleeps.' },
    { color: '#3b82f6', emoji: '\uD83E\uDD1D', tag: 'Dedicated', name: 'Customer Success', desc: 'A named Customer Success Manager assigned to your account \u2014 driving adoption, tracking outcomes, and ensuring your team gets maximum value from every module.' },
    { color: '#a855f7', emoji: '\uD83C\uDF93', tag: 'Enablement', name: 'Training', desc: 'Structured onboarding and ongoing training programs for operators, supervisors, and IT teams \u2014 available on-site, remote, or via our self-paced learning portal.' },
    { color: '#f59e0b', emoji: '\uD83D\uDEE0\uFE0F', tag: 'Expert Services', name: 'Professional Services', desc: 'Custom integrations, workflow design, and system configuration delivered by our certified PS engineers \u2014 tailored to your organization\u2019s unique operational requirements.' },
    { color: '#22c55e', emoji: '\u2B50', tag: 'Premium Tier', name: 'White Glove Service', desc: 'Full end-to-end managed service for organizations that demand the highest level of attention \u2014 from installation through to ongoing operations management and strategic reviews.' },
  ]

  const presenceCards = es ? [
    { regionColor: '#60a5fa', region: 'Norteamérica', title: 'Sede Central', desc: 'Cresskill, Nueva Jersey. Nuestra sede corporativa impulsa la estrategia, alianzas y ventas empresariales en EE.UU. y Canadá.' },
    { regionColor: 'var(--cyan)', region: 'América Latina', title: 'Operaciones y Desarrollo', desc: 'Ciudad de México sirve como nuestro centro principal de desarrollo y operaciones para América Latina, con despliegues en más de 10 países de la región.' },
    { regionColor: '#a855f7', region: 'Europa e Israel', title: 'I+D y Alianzas', desc: 'Nuestro centro de I+D en Israel impulsa la innovación central de la plataforma. Las alianzas europeas extienden nuestro alcance a los mercados de ciudades inteligentes y seguridad portuaria.' },
  ] : [
    { regionColor: '#60a5fa', region: 'North America', title: 'Headquarters', desc: 'Cresskill, New Jersey. Our corporate headquarters drives strategy, partnerships, and enterprise sales across the US and Canada.' },
    { regionColor: 'var(--cyan)', region: 'Latin America', title: 'Operations & Development', desc: 'Mexico City serves as our primary development and operations hub for Latin America, with deployments across 10+ countries in the region.' },
    { regionColor: '#a855f7', region: 'Europe & Israel', title: 'R&D & Partnerships', desc: 'Our Israeli R&D center drives core platform innovation. European partnerships extend our reach into smart city and port security markets.' },
  ]

  const aboutFaqs = es ? [
    { question: '¿Qué es KabatOne?', answer: 'KabatOne es una plataforma de tecnología de seguridad pública que integra despacho CAD, gestión de video, GIS en tiempo real, gestión de tráfico y video comunitario en un sistema unificado. Atiende a más de 40 ciudades protegiendo a más de 73 millones de ciudadanos.' },
    { question: '¿Dónde tiene su sede KabatOne?', answer: 'KabatOne tiene su sede corporativa en Cresskill, Nueva Jersey, EE.UU., con operaciones de desarrollo en Ciudad de México, un centro de I+D en Israel y alianzas en Europa.' },
    { question: '¿Cuántas ciudades usan KabatOne?', answer: 'KabatOne opera en más de 40 ciudades y municipios en América Latina, Norteamérica y Europa, protegiendo a más de 73 millones de ciudadanos.' },
    { question: '¿Qué productos ofrece KabatOne?', answer: 'KabatOne ofrece cinco productos principales: K-Safety (plataforma de seguridad pública), K-Dispatch (despacho CAD), K-Video (gestión de video), K-Traffic (gestión de tráfico) y K-Connect (video comunitario compartido).' },
  ] : [
    { question: 'What is KabatOne?', answer: 'KabatOne is a public safety technology platform that integrates CAD dispatch, video management, real-time GIS, traffic management, and community video sharing into one unified system. It serves 40+ cities protecting over 73 million citizens.' },
    { question: 'Where is KabatOne headquartered?', answer: 'KabatOne is headquartered in Cresskill, New Jersey, USA, with development operations in Mexico City, an R&D center in Israel, and partnerships across Europe.' },
    { question: 'How many cities use KabatOne?', answer: 'KabatOne operates in 40+ cities and municipalities across Latin America, North America, and Europe, protecting over 73 million citizens.' },
    { question: 'What products does KabatOne offer?', answer: 'KabatOne offers five core products: K-Safety (public safety platform), K-Dispatch (CAD dispatch), K-Video (video management), K-Traffic (traffic management), and K-Connect (community video sharing).' },
  ]

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(aboutFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
          { name: es ? 'Nosotros' : 'About', url: es ? 'https://kabatone.com/es/about/' : 'https://kabatone.com/about/' },
        ])) }}
      />
      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── BREADCRUMB ── */}
        <div style={{
          maxWidth: '1160px', margin: '0 auto', padding: '20px 40px 0',
          display: 'flex', alignItems: 'center', gap: '8px',
          fontFamily: 'DM Mono, monospace', fontSize: '11px',
          letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)',
        }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{content.breadcrumbHome}</Link>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: 'var(--blue-light)' }}>{content.breadcrumbCurrent}</span>
        </div>

        {/* ── HERO ── */}
        <section style={{
          maxWidth: '1160px', margin: '0 auto', padding: '80px 40px 96px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center',
        }}>
          <div>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: 'var(--cyan)', marginBottom: '20px',
            }}>
              {content.eyebrow}
            </p>
            <h1 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(52px, 7vw, 80px)', lineHeight: 0.95,
              letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '28px',
            }}>
              {content.h1}
            </h1>
            <p style={{
              fontSize: '18px', fontWeight: 300, color: 'var(--dim)',
              lineHeight: 1.7, marginBottom: '40px', maxWidth: '520px',
            }}>
              {content.subtitle}
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'var(--blue)', color: '#fff', padding: '13px 28px',
                borderRadius: '8px', fontSize: '14px', fontWeight: 600,
                textDecoration: 'none', boxShadow: '0 0 24px rgba(59,130,246,0.35)',
              }}>
                {content.cta1}
              </Link>
            </div>
          </div>

          {/* Hero Visual -- Globe Schematic */}
          <div style={{
            background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-b)',
            borderRadius: '20px', padding: '32px', aspectRatio: '1 / 1',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 30%, rgba(59,130,246,0.1) 0%, transparent 70%)' }} />
            <div style={{ position: 'relative', width: '220px', height: '220px' }}>
              {/* Globe rings */}
              {[
                { inset: '0', dur: '24s', color: 'rgba(59,130,246,0.2)' },
                { inset: '18px', dur: '18s', color: 'rgba(6,182,212,0.18)', reverse: true },
                { inset: '40px', dur: '14s', color: 'rgba(59,130,246,0.15)' },
              ].map((ring, i) => (
                <div key={i} style={{
                  position: 'absolute', inset: ring.inset, borderRadius: '50%',
                  border: `1px solid ${ring.color}`,
                  animation: `aboutSpin ${ring.dur} linear infinite ${ring.reverse ? 'reverse' : ''}`,
                }} />
              ))}
              {/* Core */}
              <div style={{
                position: 'absolute', inset: '60px', borderRadius: '50%',
                background: 'radial-gradient(circle at 38% 38%, rgba(59,130,246,0.5), rgba(6,182,212,0.2) 60%, transparent)',
                border: '1px solid rgba(59,130,246,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--blue)', boxShadow: '0 0 20px rgba(59,130,246,0.8)' }} />
              </div>
              {/* Orbit dots */}
              <div style={{ position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--cyan)', boxShadow: '0 0 8px var(--cyan)' }} />
              <div style={{ position: 'absolute', bottom: '28px', right: '20px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--blue)', boxShadow: '0 0 8px var(--blue)' }} />
              <div style={{ position: 'absolute', top: '50%', left: '8px', transform: 'translateY(-50%)', width: '8px', height: '8px', borderRadius: '50%', background: '#a855f7', boxShadow: '0 0 8px #a855f7' }} />
            </div>

            {/* Globe metrics */}
            <div style={{ marginTop: '28px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', width: '100%', position: 'relative', zIndex: 1 }}>
              {[
                { val: '68.5M+', label: content.metricCitizens },
                { val: '68+', label: content.metricProjects },
                { val: '3', label: content.metricContinents },
                { val: '80+', label: content.metricExperts },
              ].map((m, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '10px', padding: '12px 14px' }}>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '22px', color: 'var(--blue-light)', lineHeight: 1 }}>{m.val}</div>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '4px' }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.015)' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {[
              { val: '+68.5M', accent: true, label: content.stat1Label },
              { val: '+68', accent: true, label: content.stat2Label },
              { val: '100%', accent: false, label: content.stat3Label },
              { val: '+80', accent: true, label: content.stat4Label },
            ].map((stat, i) => (
              <div key={i} style={{
                padding: '36px 0', textAlign: 'center',
                borderRight: i < 3 ? '1px solid var(--border)' : 'none',
              }}>
                <div style={{
                  fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
                  fontSize: '44px', color: 'var(--white)', lineHeight: 1,
                }}>
                  {stat.val}
                </div>
                <div style={{
                  fontFamily: 'DM Mono, monospace', fontSize: '10px',
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'var(--muted)', marginTop: '8px',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── MISSION ── */}
        <section id="mission" style={{ padding: '96px 0', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
              <div>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '16px' }}>
                  {content.missionEyebrow}
                </p>
                <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.05, color: 'var(--white)', marginBottom: '20px' }}>
                  {content.missionH2}
                </h2>
                <p style={{ fontSize: '17px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75, maxWidth: '680px' }}>
                  {content.missionBody}
                </p>
                <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {missionBullets.map((bullet, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--blue)', flexShrink: 0, marginTop: '8px', boxShadow: '0 0 8px rgba(59,130,246,0.6)' }} />
                      <span style={{ fontSize: '15px', color: 'var(--dim)', lineHeight: 1.6 }}>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-b)',
                  borderRadius: '16px', padding: '36px',
                }}>
                  <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '20px' }}>
                    {content.missionPanelLabel}
                  </p>
                  <p style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '26px', lineHeight: 1.2, color: 'var(--white)', marginBottom: '24px' }}>
                    {content.missionPanelQuote}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {regions.map((r, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: 'var(--dim)' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: r.color, flexShrink: 0 }} />
                        {r.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section style={{ padding: '96px 0', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '16px' }}>
              {content.valuesEyebrow}
            </p>
            <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.05, color: 'var(--white)', marginBottom: '20px' }}>
              {content.valuesH2}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '48px' }}>
              {values.map((v, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                  borderRadius: '14px', padding: '28px 28px 24px',
                }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '16px', fontSize: '20px', background: v.icon,
                  }}>
                    {v.emoji}
                  </div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '20px', color: 'var(--white)', marginBottom: '8px', letterSpacing: '0.02em' }}>
                    {v.title}
                  </div>
                  <div style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.65 }}>
                    {v.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CUSTOMER SUCCESS & SERVICES ── */}
        <section style={{ padding: '96px 0', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '16px' }}>
              {content.csEyebrow}
            </p>
            <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.05, color: 'var(--white)', marginBottom: '20px' }}>
              {content.csH2}
            </h2>
            <p style={{ fontSize: '17px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75, maxWidth: '680px' }}>
              {content.csBody}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', marginTop: '48px' }}>
              {services.map((svc, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                  borderTop: `3px solid ${svc.color}`,
                  borderRadius: '14px', padding: '28px 22px 24px',
                  display: 'flex', flexDirection: 'column', gap: '12px',
                }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '11px',
                    background: `color-mix(in srgb, ${svc.color} 14%, transparent)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '22px', flexShrink: 0,
                  }}>
                    {svc.emoji}
                  </div>
                  <div>
                    <span style={{
                      display: 'inline-block', fontFamily: 'DM Mono, monospace',
                      fontSize: '9px', letterSpacing: '0.16em', textTransform: 'uppercase',
                      color: svc.color,
                      background: `color-mix(in srgb, ${svc.color} 12%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${svc.color} 28%, transparent)`,
                      padding: '3px 8px', borderRadius: '20px',
                    }}>
                      {svc.tag}
                    </span>
                  </div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '18px', color: 'var(--white)', letterSpacing: '0.02em', lineHeight: 1.2 }}>
                    {svc.name}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 1.65 }}>
                    {svc.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GLOBAL PRESENCE ── */}
        <section style={{ padding: '96px 0', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '16px' }}>
              {content.gpEyebrow}
            </p>
            <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.05, color: 'var(--white)', marginBottom: '20px' }}>
              {content.gpH2}
            </h2>
            <p style={{ fontSize: '17px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75, maxWidth: '680px' }}>
              {content.gpBody}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '48px' }}>
              {presenceCards.map((card, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: '14px', padding: '28px' }}>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: card.regionColor, marginBottom: '12px' }}>
                    {card.region}
                  </div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '22px', color: 'var(--white)', marginBottom: '10px' }}>
                    {card.title}
                  </div>
                  <div style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.6 }}>
                    {card.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ENTITY DEFINITION ── */}
        <section id="entity" style={{ padding: '96px 0', borderTop: '1px solid var(--border)', background: 'rgba(59,130,246,0.03)' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: 'var(--cyan)', marginBottom: '16px',
            }}>
              {es ? 'Acerca de KabatOne' : 'About KabatOne'}
            </p>
            <div style={{
              fontSize: '17px', fontWeight: 300, color: 'var(--dim)',
              lineHeight: 1.75, maxWidth: '800px',
            }}>
              <p style={{ marginBottom: '16px' }}>
                {es
                  ? 'KabatOne es una empresa de tecnología de seguridad pública con sede en Cresskill, Nueva Jersey, fundada por Omer Cnaani. La compañía desarrolla la plataforma K1 — un sistema unificado de inteligencia operativa que integra despacho asistido por computadora (CAD), gestión de video (VMS), conciencia situacional GIS en tiempo real, gestión de tráfico y video comunitario compartido.'
                  : 'KabatOne is a public safety technology company headquartered in Cresskill, New Jersey, founded by Omer Cnaani. The company develops the K1 platform — a unified operational intelligence system integrating computer-aided dispatch (CAD), video management (VMS), real-time GIS situational awareness, traffic management, and community video sharing.'}
              </p>
              <p>
                {es
                  ? 'KabatOne atiende a más de 40 ciudades y municipios en América Latina, Norteamérica y Europa, protegiendo a más de 73 millones de ciudadanos. Productos: K-Safety, K-Dispatch, K-Traffic, K-Video, K-Connect. Categoría: Plataforma de Seguridad Pública / Alternativa PSIM / Plataforma de Ciudad Inteligente.'
                  : 'KabatOne serves 40+ cities and municipalities across Latin America, North America, and Europe, protecting over 73 million citizens. Products: K-Safety, K-Dispatch, K-Traffic, K-Video, K-Connect. Category: Public Safety Platform / PSIM Alternative / Smart City Platform.'}
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          es={es}
          h2={content.ctaH2}
          subtitle={content.ctaSub}
          cta1={es ? 'Solicita una Demo' : 'Request a Demo'}
          cta2={es ? 'Contáctanos' : 'Contact Us'}
        />

        <Footer es={es} />

        <style>{`
          @keyframes aboutSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @media (max-width: 960px) {
            .about-hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
          @media (max-width: 768px) {
            section > div > div[style*="grid-template-columns: 1fr 1fr"],
            section > div > div[style*="grid-template-columns: repeat(2"],
            section > div > div[style*="grid-template-columns: repeat(3"],
            section > div > div[style*="grid-template-columns: repeat(5"] {
              grid-template-columns: 1fr !important;
            }
            section[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </>
  )
}
