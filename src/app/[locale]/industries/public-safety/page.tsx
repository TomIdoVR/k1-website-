import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import PageHero from '@/components/PageHero'
import CityCommandHero from '@/components/industry-heroes/CityCommandHero'
import Breadcrumb from '@/components/Breadcrumb'
import { Link } from '@/i18n/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('publicSafety', locale)
}

export default async function PublicSafetyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#3b82f6'

  /* ── content ── */
  const content = {
    eyebrow: es ? 'Industria — Seguridad Publica y Ciudades Inteligentes' : 'Industry — Public Safety & Smart Cities',
    h1: es
      ? 'Tecnologia de Seguridad Publica para Ciudades y Centros de Mando'
      : 'Public Safety Technology for Cities and Command Centers',
    subtitle: es
      ? 'Soluciones inteligentes para una seguridad proactiva e integral, revolucionando la gestion de eventos urbanos con innovacion tecnologica.'
      : 'Intelligent solutions for proactive and comprehensive security, revolutionizing urban event management with technological innovation.',
    stats: es
      ? [
          { value: '40+', label: 'Proyectos Activos' },
          { value: '73M', label: 'Ciudadanos Protegidos' },
          { value: '99.9%', label: 'Disponibilidad' },
        ]
      : [
          { value: '40+', label: 'Active Projects' },
          { value: '73M', label: 'Citizens Protected' },
          { value: '99.9%', label: 'Platform Uptime' },
        ],
    cta1: es ? 'Solicita una Demo' : 'Book a Demo',
    cta2: es ? 'Ver la Plataforma' : 'See the Platform',
  }

  /* ── challenges ── */
  const challenges = es
    ? [
        {
          icon: 'grid',
          title: 'Datos Fragmentados',
          desc: 'Camaras, sensores, drones, llamadas de emergencia y aplicaciones moviles sin integracion generan demoras en la toma de decisiones.',
        },
        {
          icon: 'clock',
          title: 'Tiempos de Respuesta Lentos',
          desc: 'La falta de coordinacion interinstitucional limita la capacidad de reaccionar ante incidentes criticos en tiempo real.',
        },
        {
          icon: 'cost',
          title: 'Altos Costos Operativos',
          desc: 'Plataformas e infraestructuras duplicadas que no se comunican aumentan los costos y reducen la eficiencia operativa.',
        },
        {
          icon: 'network',
          title: 'Coordinacion Compleja',
          desc: 'Multiples agencias — policia, bomberos, salud, transito — necesitan integracion centralizada para trabajar en conjunto.',
        },
        {
          icon: 'threat',
          title: 'Crimenes y Amenazas Urbanas',
          desc: 'Los patrones cambiantes de criminalidad urbana requieren capacidades predictivas y preventivas mas alla del patrullaje reactivo.',
        },
        {
          icon: 'citizen',
          title: 'Demanda Ciudadana',
          desc: 'Los ciudadanos exigen transparencia, velocidad y resultados tangibles en la gestion de seguridad de su gobierno municipal.',
        },
      ]
    : [
        {
          icon: 'grid',
          title: 'Fragmented Data',
          desc: 'Cameras, sensors, drones, emergency calls, and mobile applications without integration generate delays in decision making.',
        },
        {
          icon: 'clock',
          title: 'Slow Response Times',
          desc: 'The lack of inter-institutional coordination limits the capacity to react to critical incidents in real time.',
        },
        {
          icon: 'cost',
          title: 'High Operating Costs',
          desc: 'Duplicated platforms and infrastructures that do not communicate increase costs and reduce operational efficiency.',
        },
        {
          icon: 'network',
          title: 'Complex Coordination',
          desc: 'Multiple agencies — police, fire, medical, traffic — need centralized system integration to work in concert.',
        },
        {
          icon: 'threat',
          title: 'Urban Crimes & Threats',
          desc: 'Evolving urban crime patterns require predictive and preventive capabilities beyond traditional reactive policing.',
        },
        {
          icon: 'citizen',
          title: 'Citizen Demand',
          desc: 'Residents demand transparency, speed, and tangible results in security management from their city government.',
        },
      ]

  /* ── capabilities ── */
  const capabilities = es
    ? [
        {
          num: '01',
          title: 'Integracion',
          desc: 'Conecta cada camara, sensor, dron y sistema de comunicacion en una sola imagen operativa. Elimina los silos de datos y habilita la conciencia situacional en tiempo real en todas las agencias de la ciudad.',
        },
        {
          num: '02',
          title: 'Automatizacion',
          desc: 'Motores de reglas impulsados por IA detectan incidentes automaticamente, activan protocolos y despachan recursos — reduciendo la carga del operador y eliminando el error humano en momentos criticos.',
        },
        {
          num: '03',
          title: 'Optimizacion de Recursos',
          desc: 'Despacho inteligente y analitica geoespacial aseguran que las unidades correctas lleguen a las ubicaciones correctas en el menor tiempo. El seguimiento en tiempo real elimina recursos desperdiciados y mejora la cobertura.',
        },
        {
          num: '04',
          title: 'Prevencion y Resiliencia',
          desc: 'La analitica predictiva identifica patrones de riesgo antes de que ocurran incidentes. Los reportes automatizados construyen conocimiento institucional que mejora continuamente los resultados de seguridad.',
        },
      ]
    : [
        {
          num: '01',
          title: 'Integration',
          desc: 'Connect every camera, sensor, drone, and communication system into a single operational picture. Eliminate data silos and enable real-time situational awareness across all city agencies.',
        },
        {
          num: '02',
          title: 'Automation',
          desc: 'AI-powered rule engines automatically detect incidents, trigger protocols, and dispatch resources — reducing operator workload and eliminating human error in critical moments.',
        },
        {
          num: '03',
          title: 'Resource Optimization',
          desc: 'Smart dispatch and geospatial analytics ensure the right units reach the right locations in minimum time. Real-time tracking eliminates wasted resources and improves coverage.',
        },
        {
          num: '04',
          title: 'Prevention & Resilience',
          desc: 'Predictive analytics identify risk patterns before incidents occur. Automated reporting builds institutional knowledge that continuously improves city safety outcomes.',
        },
      ]

  /* ── products ── */
  const products = [
    { href: '/k-safety', label: 'K-Safety' },
    { href: '/k-dispatch', label: 'K-Dispatch' },
    { href: '/k-traffic', label: 'K-Traffic' },
    { href: '/k-video', label: 'K-Video' },
    { href: '/k-connect', label: 'K-Connect' },
  ]

  /* ── icon helper ── */
  const icons: Record<string, React.ReactNode> = {
    grid: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    clock: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    cost: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path d="M10 2L2 7v6l8 5 8-5V7L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="10" cy="10" r="2" fill="currentColor" opacity={0.5} />
      </svg>
    ),
    network: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <circle cx="6" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8.5 10H11.5M8.2 8.8l3-2.3M8.2 11.2l3 2.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    threat: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path d="M10 2l1.5 4.5H16l-3.75 2.73L13.7 14 10 11.27 6.3 14l1.45-4.77L4 6.5h4.5L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    citizen: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 9l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  }

  const publicSafetyFaqs = es ? [
    { question: '¿Cómo ayuda KabatOne a la seguridad pública?', answer: 'KabatOne proporciona una plataforma unificada que transforma datos fragmentados de la ciudad en inteligencia accionable y respuesta coordinada. Conecta cámaras, sensores, drones y sistemas de comunicación en una sola imagen operativa.' },
    { question: '¿Cuántas ciudades protege KabatOne?', answer: 'KabatOne opera en más de 40 proyectos activos, protegiendo a más de 73 millones de ciudadanos con una disponibilidad de plataforma del 99.9%.' },
    { question: '¿Qué productos ofrece KabatOne para seguridad pública?', answer: 'KabatOne despliega la suite completa: K-Safety para conciencia situacional, K-Dispatch para despacho CAD, K-Traffic para gestión de tráfico, K-Video para gestión de video y K-Connect para video comunitario compartido.' },
    { question: '¿Cómo reduce KabatOne los tiempos de respuesta?', answer: 'Los motores de reglas impulsados por IA detectan incidentes automáticamente, activan protocolos y despachan recursos. El despacho inteligente y la analítica geoespacial aseguran que las unidades correctas lleguen a las ubicaciones correctas en el menor tiempo.' },
  ] : [
    { question: 'How does KabatOne help public safety?', answer: 'KabatOne provides a unified platform that transforms fragmented city data into actionable intelligence and coordinated response. It connects cameras, sensors, drones, and communication systems into a single operational picture.' },
    { question: 'How many cities does KabatOne protect?', answer: 'KabatOne operates across 40+ active projects, protecting over 73 million citizens with 99.9% platform uptime.' },
    { question: 'What products does KabatOne offer for public safety?', answer: 'KabatOne deploys the complete suite: K-Safety for situational awareness, K-Dispatch for CAD dispatch, K-Traffic for traffic management, K-Video for video management, and K-Connect for community video sharing.' },
    { question: 'How does KabatOne reduce response times?', answer: 'AI-powered rule engines automatically detect incidents, trigger protocols, and dispatch resources. Smart dispatch and geospatial analytics ensure the right units reach the right locations in minimum time.' },
  ]

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: es ? 'Inicio' : 'Home', url: 'https://kabatone.com/' },
          { name: es ? 'Industrias' : 'Industries', url: 'https://kabatone.com/' },
          { name: es ? 'Seguridad Pública' : 'Public Safety', url: 'https://kabatone.com/industries/public-safety/' },
        ])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(publicSafetyFaqs)) }}
      />
      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        <Breadcrumb items={[
          { label: es ? 'Inicio' : 'Home', href: '/' },
          { label: es ? 'Industrias' : 'Industries' },
          { label: es ? 'Seguridad Pública' : 'Public Safety' },
        ]} />
        {/* ── HERO ── */}
        <PageHero
          accent={ACCENT}
          eyebrow={content.eyebrow}
          h1={content.h1}
          subtitle={content.subtitle}
          stats={content.stats}
          cta1={content.cta1}
          cta2={content.cta2}
        >
          <CityCommandHero />
        </PageHero>

        {/* ── CHALLENGES ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '80px 32px' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Los Desafios que Resolvemos' : 'The Challenges We Solve'}
            </p>
            <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', lineHeight: 1.0, marginBottom: '12px' }}>
              {es ? 'Lo que Hace Compleja la Seguridad Urbana' : 'What Makes Urban Security Complex'}
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75, maxWidth: '620px', marginBottom: '52px' }}>
              {es
                ? 'Las ciudades hoy enfrentan una convergencia de desafios de datos, coordinacion y tecnologia que demandan un enfoque unificado.'
                : 'Cities today face a convergence of data, coordination, and technology challenges that demand a unified approach.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {challenges.map((c, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '28px 24px', transition: 'border-color 0.2s' }}>
                  <div style={{
                    width: '40px', height: '40px',
                    background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.18)',
                    borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '16px', color: 'var(--cyan)',
                  }}>
                    {icons[c.icon]}
                  </div>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '18px', letterSpacing: '0.03em', textTransform: 'uppercase', marginBottom: '8px' }}>
                    {c.title}
                  </h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7 }}>
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '80px 32px', background: 'rgba(255,255,255,0.01)' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Nuestro Enfoque' : 'Our Approach'}
            </p>
            <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', lineHeight: 1.0, marginBottom: '12px' }}>
              {es ? 'Como KabatOne lo Resuelve' : 'How KabatOne Solves It'}
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75, maxWidth: '620px', marginBottom: '52px' }}>
              {es
                ? 'Una plataforma unificada que transforma los datos fragmentados de la ciudad en inteligencia accionable y respuesta coordinada.'
                : 'A unified platform that transforms fragmented city data into actionable intelligence and coordinated response.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {capabilities.map((cap, i) => (
                <div key={i} style={{
                  background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)',
                  padding: '32px 28px', display: 'flex', gap: '20px', transition: 'border-color 0.2s',
                }}>
                  <div style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '36px',
                    color: `${ACCENT}40`, lineHeight: 1, flexShrink: 0, width: '48px',
                  }}>
                    {cap.num}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '20px', letterSpacing: '0.03em', textTransform: 'uppercase', marginBottom: '8px' }}>
                      {cap.title}
                    </h3>
                    <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7 }}>
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '80px 32px' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Productos de la Plataforma' : 'Platform Products'}
            </p>
            <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', lineHeight: 1.0, marginBottom: '12px' }}>
              {es ? 'La Suite Completa para Seguridad Publica' : 'The Full Stack for Public Safety'}
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75, maxWidth: '620px', marginBottom: '32px' }}>
              {es
                ? 'KabatOne despliega la suite completa de productos para entornos de seguridad publica.'
                : 'KabatOne deploys the complete product suite for public safety environments.'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {products.map((p) => (
                <Link key={p.href} href={p.href} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '6px',
                  padding: '8px 14px', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'var(--dim)', textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s',
                }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--cyan)' }} />
                  {p.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED RESOURCES ── */}
        <section style={{ padding: '64px 0', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '24px',
            }}>
              {es ? 'Recursos Relacionados' : 'Related Resources'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <Link href="/resources/what-is-a-public-safety-platform" style={{
                display: 'block', padding: '20px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px', fontWeight: 400,
              }}>
                {es ? '¿Qué es una plataforma de seguridad pública?' : 'What Is a Public Safety Platform?'}
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                  {es ? 'Guía de referencia →' : 'Reference guide →'}
                </span>
              </Link>
              <Link href="/resources/psim-vs-unified-platform" style={{
                display: 'block', padding: '20px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px', fontWeight: 400,
              }}>
                {es ? 'PSIM vs Plataforma Unificada' : 'PSIM vs Unified Platform'}
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                  {es ? 'Guía de referencia →' : 'Reference guide →'}
                </span>
              </Link>
              <Link href="/resources/how-c5-command-centers-work" style={{
                display: 'block', padding: '20px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px', fontWeight: 400,
              }}>
                {es ? 'Cómo funcionan los centros C5' : 'How C5 Command Centers Work'}
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                  {es ? 'Guía de referencia →' : 'Reference guide →'}
                </span>
              </Link>
            </div>

            <div style={{ display: 'flex', gap: '16px', marginTop: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
                {es ? 'Industrias relacionadas:' : 'Related industries:'}
              </span>
              <Link href="/industries/municipalities" style={{ fontSize: '13px', color: ACCENT, textDecoration: 'none' }}>
                {es ? 'Municipios' : 'Municipalities'}
              </Link>
              <Link href="/industries/stadiums" style={{ fontSize: '13px', color: ACCENT, textDecoration: 'none' }}>
                {es ? 'Estadios y Recintos' : 'Stadiums & Venues'}
              </Link>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <CTASection
          es={es}
          h2={es ? 'Listo para Transformar la Seguridad de tu Ciudad?' : 'Ready to Transform Your City\'s Safety?'}
          subtitle={es
            ? 'Unete a mas de 40 ciudades que protegen a 73 millones de ciudadanos con la plataforma unificada de seguridad publica de KabatOne.'
            : 'Join 40+ cities protecting 73 million citizens with KabatOne\'s unified public safety platform.'}
        />

        <Footer es={es} />

        {/* ── Responsive ── */}
        <style>{`
          @media (max-width: 768px) {
            section > div { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 640px) {
            section > div > div[style*="grid-template-columns: repeat(3"] { grid-template-columns: 1fr !important; }
            section > div > div[style*="grid-template-columns: repeat(2"] { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </>
  )
}
