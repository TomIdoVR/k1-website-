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
  return generatePageMetadata('ports', locale)
}

export default async function PortsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#0ea5e9'

  /* ── content ── */
  const eyebrow = es ? 'Industria — Seguridad Portuaria' : 'Industry — Port Security'
  const h1 = es
    ? 'Seguridad Portuaria Integral con Cumplimiento ISPS'
    : 'ISPS-Compliant Port Security and Vessel Tracking'
  const subtitle = es
    ? 'Conecta cámaras, radares, sensores IoT, control de acceso y analítica de video en una sola plataforma. Protege al personal, la carga y la infraestructura portuaria crítica con monitoreo en tiempo real.'
    : 'Connect cameras, radars, IoT sensors, access control, and video analytics on a single platform. Protect personnel, cargo, and critical port infrastructure with real-time monitoring.'

  /* challenges */
  const challengesLabel = es ? 'Los Desafíos que Resolvemos' : 'The Challenges We Solve'
  const challengesH2 = es ? 'Complejidad de la Seguridad Portuaria' : 'Port Security Complexity'
  const challengesDesc = es
    ? 'Los puertos son infraestructura nacional crítica — objetivos de alto valor con perímetros extensos, múltiples partes interesadas y estrictos requisitos de cumplimiento internacional.'
    : 'Ports are critical national infrastructure — high-value targets with vast perimeters, multiple stakeholders, and strict international compliance requirements.'

  const challenges = es ? [
    { title: 'Sistemas y Datos Aislados', desc: 'Diferentes plataformas y sensores que no se comunican entre sí — creando puntos ciegos y retrasando la respuesta coordinada.' },
    { title: 'Altos Costos Operativos', desc: 'Mantenimiento, integración y operación de múltiples tecnologías superpuestas que duplican esfuerzos e inflan presupuestos.' },
    { title: 'Riesgos Físicos y Cibernéticos', desc: 'Intrusiones, robo, sabotaje o ciberataques a sistemas operativos críticos — todos requieren detección y respuesta integrada.' },
    { title: 'Gestión de Emergencias', desc: 'Coordinar múltiples agencias — autoridad portuaria, guardacostas, aduanas, equipos de seguridad — bajo requisitos de cumplimiento ISPS e IMO.' },
  ] : [
    { title: 'Isolated Systems & Data', desc: 'Different platforms and sensors that do not communicate with each other — creating blind spots and delaying coordinated response.' },
    { title: 'High Operational Costs', desc: 'Maintenance, integration, and operation of multiple overlapping technologies that duplicate effort and inflate budgets.' },
    { title: 'Physical & Cyber Risks', desc: 'Intrusions, theft, sabotage, or cyberattacks on critical operational systems — all requiring integrated detection and response.' },
    { title: 'Emergency Management', desc: 'Coordinating multiple agencies — port authority, coast guard, customs, security teams — under ISPS and IMO compliance requirements.' },
  ]

  /* advantages */
  const advLabel = es ? 'Ventajas de la Plataforma' : 'Platform Advantages'
  const advH2 = es ? 'Cinco Pilares de Seguridad Portuaria' : 'Five Pillars of Port Security'
  const advDesc = es
    ? 'KabatOne entrega una plataforma completa de seguridad y operaciones portuarias diseñada para las demandas únicas de entornos marítimos.'
    : 'KabatOne delivers a complete port security and operations platform designed for the unique demands of maritime environments.'

  const advantages = es ? [
    { num: '01 — Centralización', title: 'Unidad Total del Sistema', desc: 'Unifica videovigilancia, radares, sensores, control de acceso y drones en un solo entorno operativo.' },
    { num: '02 — Inteligencia', title: 'Gestión Predictiva', desc: 'Motor de reglas que activa respuestas automatizadas basadas en datos de sensores, analítica de video y protocolos de seguridad predefinidos.' },
    { num: '03 — Visibilidad', title: 'Dashboards en Tiempo Real', desc: 'Indicadores de seguridad, rendimiento y mantenimiento con visualización geoespacial — embarcaciones, activos e incidentes de un vistazo.' },
    { num: '04 — Interoperabilidad', title: 'Compatibilidad Total', desc: 'Compatible con múltiples VMS, radares y sistemas de control con integración ilimitada de cámaras y dispositivos.' },
    { num: '05 — Cumplimiento', title: 'Estándares ISPS e IMO', desc: 'Registra cada evento cumpliendo con estándares ISPS e IMO — asegurando trazabilidad regulatoria completa y preparación para auditorías.' },
  ] : [
    { num: '01 — Centralization', title: 'Total System Unity', desc: 'Unifies video surveillance, radars, sensors, access control, and drones in a single operational environment.' },
    { num: '02 — Intelligence', title: 'Predictive Management', desc: 'Rule engine triggers automated responses based on sensor data, video analytics, and predefined security protocols.' },
    { num: '03 — Visibility', title: 'Real-Time Dashboards', desc: 'Security, performance, and maintenance indicators with geospatial visualization — vessels, assets, incidents at a glance.' },
    { num: '04 — Interoperability', title: 'Total Compatibility', desc: 'Compatible with multiple VMS, radars, and control systems with unlimited cameras and devices integration.' },
    { num: '05 — Compliance', title: 'ISPS & IMO Standards', desc: 'Records every event complying with ISPS and IMO standards — ensuring full regulatory traceability and audit readiness.' },
  ]

  /* products */
  const productsLabel = es ? 'Productos de la Plataforma' : 'Platform Products'
  const productsH2 = es ? 'Diseñado para Entornos Marítimos' : 'Built for Maritime Environments'
  const productsDesc = es
    ? 'KabatOne despliega una suite completa diseñada específicamente para seguridad y operaciones portuarias.'
    : 'KabatOne deploys a complete suite purpose-built for port security and operations.'

  const products = [
    { name: 'K-Safety', href: '/k-safety' },
    { name: 'K-Video', href: '/k-video' },
    { name: 'K-Dispatch', href: '/k-dispatch' },
    { name: 'K-Traffic', href: '/k-traffic' },
    { name: 'K-Connect', href: '/k-connect' },
  ]

  /* cta */
  const ctaH2 = es
    ? 'Asegura Tus Operaciones Portuarias'
    : 'Secure Your Port Operations'
  const ctaSub = es
    ? 'Cumplimiento ISPS e IMO — KabatOne conecta cada sensor, cámara y radar en un centro de mando de seguridad portuaria unificado.'
    : 'ISPS and IMO compliant — KabatOne connects every sensor, camera, and radar into a unified port security command center.'

  /* ── shared styles ── */
  const sectionStyle = { position: 'relative' as const, zIndex: 10, padding: '80px 0', borderTop: '1px solid var(--border)' }
  const containerStyle = { maxWidth: '1160px', margin: '0 auto', padding: '0 40px' }
  const labelStyle = { fontFamily: 'DM Mono, monospace', fontSize: '11px', fontWeight: 500, letterSpacing: '0.28em', textTransform: 'uppercase' as const, color: 'var(--cyan)', marginBottom: '14px' }
  const h2Style = { fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', lineHeight: 1.0, letterSpacing: '0.01em', textTransform: 'uppercase' as const, color: 'var(--white)', marginBottom: '12px' }
  const descStyle = { fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75, maxWidth: '620px', marginBottom: '52px' }
  const cardStyle = { background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '28px 24px' }

  return (
    <>
      <Nav />
      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <PageHero
          accent={ACCENT}
          eyebrow={eyebrow}
          h1={h1}
          subtitle={subtitle}
          stats={[]}
          cta1={es ? 'Solicita una Demo' : 'Book a Demo'}
          cta2={es ? 'Ver la Plataforma' : 'See the Platform'}
        >
          {/* Compliance badge below subtitle, rendered as part of hero left */}
        </PageHero>

        {/* ── ISPS COMPLIANCE BADGE ── */}
        <div style={{ maxWidth: '1160px', margin: '-40px auto 0', padding: '0 40px', position: 'relative', zIndex: 10 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.2)',
            borderRadius: '6px', padding: '8px 14px',
            fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'var(--cyan)',
          }}>
            <svg width="12" height="12" fill="none" viewBox="0 0 12 12"><path d="M6 1l1.2 3.5H11L8.3 6.8l1.1 3.5L6 8.1 2.6 10.3l1.1-3.5L1 4.5h3.8L6 1z" fill="currentColor" opacity=".8" /></svg>
            {es ? 'Cumplimiento ISPS e IMO' : 'ISPS & IMO Compliant'}
          </div>
        </div>

        {/* ── CHALLENGES ── */}
        <section style={{ ...sectionStyle, marginTop: '40px' }}>
          <div style={containerStyle}>
            <p style={labelStyle}>{challengesLabel}</p>
            <h2 style={h2Style}>{challengesH2}</h2>
            <p style={descStyle}>{challengesDesc}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {challenges.map((c, i) => (
                <div key={i} style={{ ...cardStyle, transition: 'border-color 0.2s, background 0.2s' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.18)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: 'var(--cyan)' }}>
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" /></svg>
                  </div>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '18px', letterSpacing: '0.03em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: '8px' }}>{c.title}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PLATFORM ADVANTAGES ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <p style={labelStyle}>{advLabel}</p>
            <h2 style={h2Style}>{advH2}</h2>
            <p style={descStyle}>{advDesc}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {advantages.map((a, i) => (
                <div key={i} style={{ ...cardStyle, transition: 'border-color 0.2s, background 0.2s' }}>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '12px' }}>{a.num}</div>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '18px', letterSpacing: '0.03em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: '8px' }}>{a.title}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7 }}>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={labelStyle}>{productsLabel}</p>
            <h2 style={h2Style}>{productsH2}</h2>
            <p style={descStyle}>{productsDesc}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
              {products.map((p) => (
                <Link key={p.name} href={p.href} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)',
                  borderRadius: '6px', padding: '8px 14px',
                  fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.2em',
                  textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none',
                }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--cyan)', display: 'inline-block' }} />
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection es={es} h2={ctaH2} subtitle={ctaSub} />

        <Footer es={es} />

        <style>{`
          @media (max-width: 768px) {
            section > div { padding-left: 24px !important; padding-right: 24px !important; }
          }
          @media (max-width: 640px) {
            section > div > div[style*="grid-template-columns: repeat(2"] {
              grid-template-columns: 1fr !important;
            }
            section > div > div[style*="grid-template-columns: repeat(3"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </>
  )
}
