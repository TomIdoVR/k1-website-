import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import PageHero from '@/components/PageHero'
import { Link } from '@/i18n/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('airport', locale)
}

export default async function AirportPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#8b5cf6'

  /* ── content ── */
  const content = {
    eyebrow: es ? 'Industria — Seguridad Aeroportuaria' : 'Industry — Airport Security',
    h1: es
      ? 'Seguridad Aeroportuaria e Inteligencia Artificial Avanzada'
      : 'AI-Powered Airport Security and Incident Management',
    subtitle: es
      ? 'Donde la IA se encuentra con la seguridad y la operacion — moldeando el futuro de las soluciones integradas para el sector aeroportuario, desde el perimetro hasta la puerta de embarque.'
      : 'Where AI meets safety and operation — shaping the future of integrated solutions for the airport sector, from perimeter to gate.',
    stats: [] as { value: string; label: string }[],
    cta1: es ? 'Solicita una Demo' : 'Book a Demo',
    cta2: es ? 'Ver la Plataforma' : 'See the Platform',
  }

  /* ── challenges ── */
  const challenges = es
    ? [
        {
          icon: 'passenger',
          title: 'Seguridad de Pasajeros e Instalaciones',
          desc: 'Garantizar la proteccion en areas extensas con multiples entornos y puntos de acceso, incluyendo deteccion de comportamiento sospechoso y objetos abandonados.',
        },
        {
          icon: 'scalability',
          title: 'Escalabilidad e Integracion',
          desc: 'Integrar diversas tecnologias legadas mientras se reducen los costos de instalacion, integracion y operacion en una infraestructura en crecimiento.',
        },
        {
          icon: 'compliance',
          title: 'Cumplimiento Operativo',
          desc: 'Gestionar la integracion de diferentes sistemas acumulados a lo largo del tiempo para minimizar gastos mientras se mantiene el cumplimiento con estandares de seguridad aeronautica.',
        },
        {
          icon: 'incident',
          title: 'Deteccion y Gestion de Incidentes',
          desc: 'Identificacion de amenazas en tiempo real desde la seguridad perimetral mediante reconocimiento facial y deteccion de anomalias — antes de que las amenazas escalen.',
        },
      ]
    : [
        {
          icon: 'passenger',
          title: 'Passenger & Facility Security',
          desc: 'Ensuring protection across vast areas with multiple environments and access points, including detection of suspicious behavior and abandoned objects.',
        },
        {
          icon: 'scalability',
          title: 'Scalability & Integration',
          desc: 'Integrating diverse legacy technologies while reducing installation, integration, and operational costs across a growing infrastructure.',
        },
        {
          icon: 'compliance',
          title: 'Operational Compliance',
          desc: 'Managing integration of different systems accumulated over time to minimize expenses while maintaining compliance with aviation security standards.',
        },
        {
          icon: 'incident',
          title: 'Incident Detection & Management',
          desc: 'Real-time threat identification from perimeter security through facial recognition and anomaly detection — before threats escalate.',
        },
      ]

  /* ── workflow steps ── */
  const workflowSteps = es
    ? [
        { num: '01', title: 'Deteccion', desc: 'Analitica de video con IA detecta amenazas y anomalias en tiempo real en todas las zonas' },
        { num: '02', title: 'Clasificacion', desc: 'Los eventos se clasifican automaticamente por severidad, tipo y respuesta requerida' },
        { num: '03', title: 'Gestion', desc: 'La gestion basada en protocolos asegura que se activen los procedimientos correctos al instante' },
        { num: '04', title: 'Despacho', desc: 'Los recursos se asignan y despachan con coordinacion total entre equipos de seguridad' },
        { num: '05', title: 'Reportes', desc: 'Cada incidente se documenta para cumplimiento, auditoria y mejora continua' },
      ]
    : [
        { num: '01', title: 'Detection', desc: 'AI video analytics detect threats and anomalies in real time across all zones' },
        { num: '02', title: 'Sorting', desc: 'Events are automatically classified by severity, type, and required response' },
        { num: '03', title: 'Management', desc: 'Protocol-based management ensures correct procedures are triggered instantly' },
        { num: '04', title: 'Dispatch', desc: 'Resources are assigned and dispatched with full coordination across security teams' },
        { num: '05', title: 'Reporting', desc: 'Every incident is documented for compliance, audit, and continuous improvement' },
      ]

  /* ── products ── */
  const products = [
    { href: '/k-safety', label: 'K-Safety' },
    { href: '/k-video', label: 'K-Video' },
    { href: '/k-dispatch', label: 'K-Dispatch' },
    { href: '/k-connect', label: 'K-Connect' },
  ]

  /* ── icon helper ── */
  const icons: Record<string, React.ReactNode> = {
    passenger: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path d="M10 2C6 2 3 5 3 10s3 8 7 8 7-3 7-8-3-8-7-8z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    scalability: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <rect x="2" y="6" width="16" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 6V4a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    compliance: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path d="M4 4h12v3l-3 3 3 3v3H4v-3l3-3-3-3V4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    incident: (
      <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path d="M3 10h4l2.5-6L12 16l2.5-4H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  }

  return (
    <>
      <Nav />
      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <PageHero
          accent={ACCENT}
          eyebrow={content.eyebrow}
          h1={content.h1}
          subtitle={content.subtitle}
          stats={content.stats}
          cta1={content.cta1}
          cta2={content.cta2}
        />

        {/* ── CHALLENGES ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '80px 32px' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Los Desafios que Resolvemos' : 'The Challenges We Solve'}
            </p>
            <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', lineHeight: 1.0, marginBottom: '12px' }}>
              {es ? 'Complejidad de la Seguridad Aeroportuaria' : 'Airport Security Complexity'}
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75, maxWidth: '620px', marginBottom: '52px' }}>
              {es
                ? 'Los aeropuertos son uno de los entornos de seguridad mas complejos del mundo — extensas areas, alto trafico y cero tolerancia al fallo.'
                : 'Airports are among the most complex security environments in the world — vast footprints, high traffic, and zero tolerance for failure.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
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

        {/* ── WORKFLOW ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '80px 32px', background: 'rgba(255,255,255,0.01)' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Flujo de Trabajo de la Plataforma' : 'Platform Workflow'}
            </p>
            <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', lineHeight: 1.0, marginBottom: '12px' }}>
              {es ? 'Cinco Pasos de la Deteccion a la Resolucion' : 'Five Steps From Detection to Resolution'}
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75, maxWidth: '620px', marginBottom: '52px' }}>
              {es
                ? 'La plataforma de seguridad aeroportuaria de KabatOne sigue un flujo de trabajo estructurado y automatizado que asegura que ninguna amenaza quede sin atender.'
                : 'KabatOne\'s airport security platform follows a structured, automated workflow that ensures no threat goes unaddressed.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, position: 'relative' }}>
              {/* connector line */}
              <div style={{
                position: 'absolute', top: '28px', left: '10%', right: '10%', height: '1px',
                background: `linear-gradient(90deg, transparent, ${ACCENT}66, transparent)`,
              }} />
              {workflowSteps.map((step, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 12px', position: 'relative' }}>
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '50%',
                    background: `${ACCENT}14`, border: `1px solid ${ACCENT}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '20px',
                    color: ACCENT, marginBottom: '16px', position: 'relative', zIndex: 1,
                  }}>
                    {step.num}
                  </div>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '12px', color: 'var(--dim)', lineHeight: 1.6 }}>
                    {step.desc}
                  </p>
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
              {es ? 'Disenado para Seguridad Aeronautica' : 'Built for Aviation Security'}
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75, maxWidth: '620px', marginBottom: '32px' }}>
              {es
                ? 'KabatOne despliega una suite integrada disenada especificamente para entornos aeroportuarios.'
                : 'KabatOne deploys an integrated suite purpose-built for airport environments.'}
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

        {/* ── BOTTOM CTA ── */}
        <CTASection
          es={es}
          h2={es ? 'Eleva la Seguridad de tu Aeropuerto' : 'Elevate Your Airport\'s Security'}
          subtitle={es
            ? 'Del perimetro a la puerta de embarque — KabatOne unifica cada sistema en un solo centro de comando inteligente para seguridad aeronautica.'
            : 'From perimeter to gate — KabatOne unifies every system into a single intelligent command center for aviation security.'}
        />

        <Footer es={es} />

        {/* ── Responsive ── */}
        <style>{`
          @media (max-width: 768px) {
            section > div { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 640px) {
            section > div > div[style*="grid-template-columns: repeat(2"] { grid-template-columns: 1fr !important; }
            section > div > div[style*="grid-template-columns: repeat(5"] { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 480px) {
            section > div > div[style*="grid-template-columns: repeat(5"] { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </>
  )
}
