import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'KabatOne — Plataforma de Seguridad Pública para Municipios',
  description: 'Una plataforma para despacho, GIS, video e inteligencia de tráfico. Solicita una demo hoy.',
  robots: 'noindex, nofollow',
}

export default async function LandingPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ headline?: string; sub?: string; cta?: string; campaign?: string }>
}) {
  const { locale } = await params
  const sp = await searchParams
  const es = locale === 'es'
  const campaignSource = sp.campaign ?? ''
  const ctaText = sp.cta ?? (es ? 'Solicitar Demo' : 'Request a Demo')

  const stats = [
    { value: '40+',  label: es ? 'Municipios Desplegados'         : 'Municipalities Deployed' },
    { value: '70M+', label: es ? 'Ciudadanos Protegidos'           : 'Citizens Protected'      },
    { value: '40%',  label: es ? 'Reducción en Tiempo de Respuesta': 'Faster Response Time'    },
    { value: '72h',  label: es ? 'A Operación Completa'            : 'To Full Operations'      },
  ]

  const products = [
    {
      tag:   es ? 'Conciencia Situacional' : 'Situational Awareness',
      label: 'K-SAFETY',
      color: '#3b82f6',
      icon:  '/images/icons/k-safety.png',
      img:   '/images/modules/gis.webp',
      title: es
        ? 'Todos tus incidentes, unidades y cámaras — en un solo mapa en tiempo real'
        : 'All your incidents, units, and cameras — on one real-time map',
      desc: es
        ? 'K-Safety da a tu equipo una imagen operativa completa: incidentes activos, posición de patrullas, transmisiones de cámara y alertas — todo superpuesto en un mapa GIS unificado.'
        : 'K-Safety gives your team a complete operational picture: active incidents, patrol positions, camera feeds, and alerts — all overlaid on a unified GIS map.',
      feats: es
        ? ['Mapa en vivo con incidentes auto-clasificados', 'Rastreo de unidades y alertas de geovalla', 'Integración multicapa GIS', 'Analíticas para despliegue proactivo']
        : ['Live map with auto-classified incidents', 'Unit tracking & geofence alerts', 'Multi-layer GIS integration', 'Pattern analytics for proactive deployment'],
    },
    {
      tag:   es ? 'Despacho de Emergencias' : 'Emergency Dispatch',
      label: 'K-DISPATCH',
      color: '#ef4444',
      icon:  '/images/icons/k-dispatch.png',
      img:   '/images/modules/dispatch.webp',
      title: es
        ? 'De la llamada al despacho en segundos — compatible con NG911'
        : 'From call to dispatch in seconds — NG911-ready',
      desc: es
        ? 'K-Dispatch moderniza el despacho municipal con toma de llamadas integrada, asignación automática de recursos y trazabilidad completa de incidentes — todo en un flujo operativo único.'
        : 'K-Dispatch modernizes municipal dispatch with integrated call intake, automatic resource assignment, and full incident traceability — all in one operational flow.',
      feats: es
        ? ['Toma de llamada e-911 integrada', 'Asignación automática de recursos', 'Historial de incidentes y auditoría', 'Interoperabilidad con sistemas C5/C4 estatales']
        : ['Integrated e-911 call intake', 'Automatic resource assignment', 'Incident history & audit trail', 'State C5/C4 system interoperability'],
    },
    {
      tag:   es ? 'Movilidad Urbana' : 'Urban Mobility',
      label: 'K-TRAFFIC',
      color: '#06b6d4',
      icon:  '/images/icons/k-traffic.png',
      img:   '/images/modules/gis.webp',
      title: es
        ? 'Semáforos, sensores y cámaras de tráfico — coordinados desde un centro'
        : 'Traffic signals, sensors, and cameras — coordinated from one center',
      desc: es
        ? 'K-Traffic centraliza la gestión de semáforos, sensores de velocidad y cámaras de infracciones. Reduce congestión, acelera rutas de emergencia y genera reportes automáticos.'
        : 'K-Traffic centralizes signal management, speed sensors, and enforcement cameras. Reduce congestion, clear emergency routes, and generate automated reports.',
      feats: es
        ? ['Control adaptativo de semáforos', 'Rutas de emergencia con prioridad de semáforos', 'Detección de infracciones automatizada', 'Reportes de movilidad para presidencia municipal']
        : ['Adaptive signal control', 'Emergency route signal priority', 'Automated infraction detection', 'Mobility reports for city leadership'],
    },
  ]

  const clients = ['C5i Ciudad de México', 'Guardia Nacional', 'SSP Michoacán', 'SSP Jalisco', 'C4 Monterrey']

  const selectOptions = es ? [
    { value: 'demo',        label: 'Demo de la Plataforma KabatOne' },
    { value: 'K-Safety',    label: 'K-Safety — GIS y Conciencia Situacional' },
    { value: 'K-Dispatch',  label: 'K-Dispatch — Despacho Municipal' },
    { value: 'K-Traffic',   label: 'K-Traffic — Gestión de Tráfico' },
    { value: 'Platform',    label: 'Plataforma Completa Avalon' },
    { value: 'Partnership', label: 'Alianza / Integración' },
  ] : [
    { value: 'demo',        label: 'Full KabatOne Platform Demo' },
    { value: 'K-Safety',    label: 'K-Safety — GIS & Situational Awareness' },
    { value: 'K-Dispatch',  label: 'K-Dispatch — Emergency Dispatch' },
    { value: 'K-Traffic',   label: 'K-Traffic — Traffic Management' },
    { value: 'Platform',    label: 'Full Avalon Platform' },
    { value: 'Partnership', label: 'Partnership / Integration' },
  ]

  return (
    <>
      <div className="page-light lp-root">

        {/* ── FIXED MINIMAL HEADER ── */}
        <header className="lp-header">
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Image src="/images/logo.png" alt="KabatOne" width={130} height={32} style={{ height: '28px', width: 'auto' }} />
          </Link>
          <a href="#lp-form" className="lp-header-cta">
            {ctaText}
          </a>
        </header>

        {/* ══════════════════════════════════════
            FULL-WIDTH DARK HERO
        ══════════════════════════════════════ */}
        <div className="dark-section lp-hero-wrap">
          {/* Grid & glow layers */}
          <div className="lp-grid-bg" />
          <div className="lp-hero-glow" />

          <div className="lp-hero-inner">
            <p className="lp-eyebrow">
              <span className="lp-dot" />
              {es ? 'Para Municipios y Secretarías de Seguridad' : 'For Municipalities & Public Safety Agencies'}
            </p>
            <h1 className="lp-h1">
              {sp.headline ?? (es
                ? 'Tu Municipio. Un Solo Centro de Mando.'
                : 'Your Municipality. One Command Center.')}
            </h1>
            <p className="lp-sub">
              {sp.sub ?? (es
                ? 'KabatOne unifica cámaras, despacho, GIS y tráfico en una sola pantalla operativa — para que tu equipo responda más rápido, con menos recursos y más rendición de cuentas.'
                : 'KabatOne unifies cameras, dispatch, GIS, and traffic into one operational screen — so your team responds faster, with fewer resources and full accountability.')}
            </p>

            {/* Stats */}
            <div className="lp-hero-stats">
              {stats.map((s, i) => (
                <div key={i} className="lp-hero-stat">
                  <span className="lp-hero-stat-val">{s.value}</span>
                  <span className="lp-hero-stat-lbl">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Client chips */}
            <div className="lp-chips">
              {clients.map((c, i) => (
                <span key={i} className="lp-chip">
                  <span className="lp-chip-dot" />{c}
                </span>
              ))}
            </div>
          </div>

          {/* Hero GIS screenshot */}
          <div className="lp-hero-screen">
            <div className="lp-screen-glow" />
            <div className="lp-browser">
              <div className="lp-browser-bar">
                <span className="lp-traffic-dot" style={{ background: '#ef4444' }} />
                <span className="lp-traffic-dot" style={{ background: '#f59e0b' }} />
                <span className="lp-traffic-dot" style={{ background: '#22c55e' }} />
                <span className="lp-browser-url">k-safety.kabatone.com</span>
              </div>
              <Image
                src="/images/modules/gis.webp"
                alt={es ? 'K-Safety — mapa GIS unificado' : 'K-Safety — unified GIS map'}
                width={640} height={400}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </div>
            <div className="lp-screen-badge">
              <span className="lp-badge-dot" />
              {es ? 'EN VIVO — Imagen operativa en tiempo real' : 'LIVE — Real-time operational picture'}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            SCROLLABLE CONTENT + STICKY FORM
        ══════════════════════════════════════ */}
        <div className="lp-body">
          <div className="lp-body-inner">

            {/* ── LEFT: scrollable content ── */}
            <div className="lp-content">

              {/* ── PRODUCTS ── */}
              <section className="lp-section lp-section-light">
                <p className="lp-section-eyebrow" style={{ color: '#2563eb' }}>
                  {es ? 'La plataforma' : 'The platform'}
                </p>
                <h2 className="lp-section-title">
                  {es ? 'Tres soluciones. Un entorno operativo.' : 'Three solutions. One operational environment.'}
                </h2>

                <div className="lp-products">
                  {products.map((prod, i) => (
                    <div key={i} className="lp-prod-card">
                      {/* Header row */}
                      <div className="lp-prod-header">
                        <Image src={prod.icon} alt={prod.label} width={32} height={32} style={{ width: '32px', height: '32px' }} />
                        <div>
                          <div className="lp-prod-tag" style={{ color: prod.color }}>{prod.tag}</div>
                          <div className="lp-prod-label">{prod.label}</div>
                        </div>
                      </div>
                      {/* Screenshot */}
                      <div className="lp-prod-screen">
                        <div className="lp-prod-bar">
                          <span className="lp-prod-dot" /><span className="lp-prod-dot" /><span className="lp-prod-dot" />
                          <span className="lp-prod-url">kabatone.com/{prod.label.toLowerCase().replace('-', '')}</span>
                        </div>
                        <Image src={prod.img} alt={prod.label} width={640} height={360}
                          style={{ width: '100%', height: 'auto', display: 'block' }} />
                      </div>
                      {/* Text */}
                      <h3 className="lp-prod-title">{prod.title}</h3>
                      <p className="lp-prod-desc">{prod.desc}</p>
                      <ul className="lp-prod-feats">
                        {prod.feats.map((f, fi) => (
                          <li key={fi} className="lp-prod-feat">
                            <span className="lp-feat-check" style={{ borderColor: `${prod.color}40`, background: `${prod.color}12` }}>
                              <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                                <path d="M2 5l2.5 2.5L8 3" stroke={prod.color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── PROOF QUOTE ── */}
              <section className="dark-section lp-section lp-section-dark">
                <p className="lp-section-eyebrow" style={{ color: '#4a5c7a' }}>
                  {es ? 'Operando hoy en' : 'Operating today in'}
                </p>
                <div className="lp-client-chips">
                  {clients.map((c, i) => (
                    <span key={i} className="lp-client-chip">
                      <span className="lp-chip-dot" style={{ background: '#2563eb' }} />{c}
                    </span>
                  ))}
                </div>
                <div className="lp-quote">
                  <div className="lp-quote-mark">❝</div>
                  <blockquote className="lp-quote-text">
                    KabatOne replaced four separate systems overnight. Our dispatchers had a full common
                    operating picture within 72 hours of go-live. It wasn&apos;t an upgrade — it was a
                    different category of tool.
                  </blockquote>
                  <p className="lp-quote-attr">
                    — {es
                      ? 'Jefe de Operaciones, Departamento de Policía Metropolitano'
                      : 'Chief of Operations, Major Metropolitan Police Dept.'}
                  </p>
                </div>
              </section>

            </div>

            {/* ── RIGHT: sticky form ── */}
            <div className="lp-form-col" id="lp-form">
              <div className="lp-form-sticky">
                <div className="lp-form-head">
                  <p className="lp-form-eyebrow">
                    {es ? 'Agenda tu Demo' : 'Schedule Your Demo'}
                  </p>
                  <h2 className="lp-form-title">
                    {es ? 'Habla con nuestro equipo' : 'Talk to our team'}
                  </h2>
                  <p className="lp-form-sub">
                    {es
                      ? 'Cuéntanos sobre tu municipio. Respondemos en 1 día hábil.'
                      : 'Tell us about your municipality. We reply within 1 business day.'}
                  </p>
                </div>

                <ContactForm
                  es={es}
                  campaignSource={campaignSource}
                  labels={{
                    formTitle: '',
                    formSub: '',
                    labelName:          es ? 'Nombre Completo'          : 'Full Name',
                    labelCompany:       es ? 'Municipio / Organización' : 'Municipality / Organization',
                    labelEmail:         es ? 'Correo Electrónico'       : 'Email',
                    labelPhone:         es ? 'Teléfono'                 : 'Phone',
                    labelInterest:      es ? 'Me interesa…'             : "I'm interested in…",
                    labelMessage:       es ? 'Mensaje (opcional)'       : 'Message (optional)',
                    placeholderName:    es ? 'Juan Pérez'               : 'Jane Smith',
                    placeholderCompany: es ? 'Municipio de Toluca'      : 'City of Acme',
                    placeholderEmail:   es ? 'juan@municipio.gob.mx'    : 'jane@city.gov',
                    placeholderPhone:   '+52 55 0000 0000',
                    placeholderMessage: es
                      ? 'Cuéntanos sobre los desafíos de seguridad de tu municipio...'
                      : "Tell us about your municipality's public safety challenges…",
                    selectDefault: es ? 'Selecciona un tema' : 'Select a topic',
                    btnSubmit: ctaText,
                  }}
                  selectOptions={selectOptions}
                />

                {/* Trust row */}
                <div className="lp-form-trust">
                  <span className="lp-trust-item">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                    {es ? 'Sin spam' : 'No spam'}
                  </span>
                  <span className="lp-trust-item">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {es ? 'Respuesta en 1 día hábil' : 'Reply in 1 business day'}
                  </span>
                  <span className="lp-trust-item">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {es ? 'Demo gratuita' : 'Free demo'}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <Footer es={es} />

      </div>

      <style>{`
        /* ── Layout ── */
        .lp-root { min-height: 100vh; }

        .lp-header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          height: 64px; padding: 0 40px;
          background: rgba(6,12,28,0.96); backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          display: flex; align-items: center; justify-content: space-between;
        }
        .lp-header-cta {
          display: inline-flex; align-items: center; gap: 8px;
          background: #2563eb; color: white;
          font-family: 'Space Grotesk', sans-serif; font-size: 13px; font-weight: 600;
          padding: 9px 22px; border-radius: 8px; text-decoration: none;
          box-shadow: 0 0 20px rgba(37,99,235,0.4); letter-spacing: 0.02em;
        }

        /* ── Hero ── */
        .lp-hero-wrap {
          padding-top: 64px;
          background: linear-gradient(160deg, #0b1628 0%, #0f1f3d 60%, #091420 100%);
          position: relative; overflow: hidden;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 56px; align-items: center;
          padding-left: calc((100vw - 1160px) / 2 + 40px);
          padding-right: calc((100vw - 1160px) / 2 + 0px);
          padding-top: calc(64px + 72px); padding-bottom: 72px;
        }
        .lp-grid-bg {
          position: absolute; inset: 0; pointer-events: none;
          background-image: linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .lp-hero-glow {
          position: absolute; top: -80px; right: 5%;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%);
          pointer-events: none;
        }
        .lp-hero-inner { position: relative; padding-right: 20px; }

        .lp-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'DM Mono', monospace; font-size: 11px; font-weight: 500;
          letter-spacing: 0.26em; text-transform: uppercase; color: #06b6d4;
          margin-bottom: 22px;
        }
        .lp-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #06b6d4; box-shadow: 0 0 8px #06b6d4;
          animation: lpBlink 2s ease-in-out infinite; display: inline-block; flex-shrink: 0;
        }
        .lp-h1 {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
          font-size: clamp(2.6rem, 4.5vw, 4rem); color: #e6eef8;
          line-height: 0.96; letter-spacing: -0.01em; margin-bottom: 20px;
        }
        .lp-sub {
          font-size: 1rem; color: #94a3b8; line-height: 1.7;
          margin-bottom: 36px; max-width: 480px;
        }
        .lp-hero-stats {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 0; margin-bottom: 28px;
          border: 1px solid rgba(255,255,255,0.07); border-radius: 12px;
          overflow: hidden; max-width: 440px;
        }
        .lp-hero-stat {
          padding: 18px 20px;
          border-right: 1px solid rgba(255,255,255,0.07);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
        }
        .lp-hero-stat:nth-child(even) { border-right: none; }
        .lp-hero-stat:nth-child(3),
        .lp-hero-stat:nth-child(4) { border-bottom: none; }
        .lp-hero-stat-val {
          display: block;
          font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
          font-size: 2rem; color: #60a5fa; line-height: 1;
        }
        .lp-hero-stat-lbl {
          font-family: 'DM Mono', monospace; font-size: 9.5px;
          letter-spacing: 0.14em; text-transform: uppercase; color: #4a5c7a;
        }
        .lp-chips { display: flex; flex-wrap: wrap; gap: 7px; }
        .lp-chip {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 5px 12px; border-radius: 100px;
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
          font-family: 'Space Grotesk', sans-serif; font-size: 11.5px; color: #94a3b8;
        }
        .lp-chip-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: #2563eb; flex-shrink: 0;
        }

        /* ── Hero screenshot ── */
        .lp-hero-screen { position: relative; padding-right: 40px; }
        .lp-screen-glow {
          position: absolute; inset: -20px;
          background: radial-gradient(ellipse at center, rgba(37,99,235,0.18) 0%, transparent 70%);
          border-radius: 24px; pointer-events: none;
        }
        .lp-browser {
          border-radius: 12px; overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05);
          position: relative;
        }
        .lp-browser-bar {
          background: #0b1628; padding: 9px 14px;
          display: flex; align-items: center; gap: 6px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .lp-traffic-dot { width: 10px; height: 10px; border-radius: 50%; opacity: 0.7; }
        .lp-browser-url {
          flex: 1; margin-left: 8px;
          background: rgba(255,255,255,0.05); border-radius: 5px;
          padding: 4px 12px; font-family: 'DM Mono', monospace;
          font-size: 11px; color: #4a5c7a; letter-spacing: 0.04em;
        }
        .lp-screen-badge {
          position: absolute; bottom: -14px; left: 16px;
          background: rgba(6,182,212,0.1); border: 1px solid rgba(6,182,212,0.3);
          backdrop-filter: blur(12px); border-radius: 10px;
          padding: 9px 16px;
          display: flex; align-items: center; gap: 8px;
          font-family: 'DM Mono', monospace; font-size: 10.5px;
          color: #06b6d4; letter-spacing: 0.08em;
        }
        .lp-badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #06b6d4; box-shadow: 0 0 6px #06b6d4;
          animation: lpBlink 2s ease-in-out infinite; display: inline-block;
        }

        /* ── Body: two-column sticky layout ── */
        .lp-body { background: var(--bg); }
        .lp-body-inner {
          max-width: 1200px; margin: 0 auto;
          padding: 64px 40px;
          display: grid; grid-template-columns: 1fr 400px;
          gap: 48px; align-items: stretch;
        }

        /* ── Left content column ── */
        .lp-content { min-width: 0; }
        .lp-section { margin-bottom: 56px; }
        .lp-section:last-child { margin-bottom: 0; }
        .lp-section-light {
          background: var(--card-bg); border: 1px solid var(--card-border);
          border-radius: 20px; padding: 40px;
        }
        .lp-section-dark {
          border-radius: 20px; padding: 40px;
          background: #080f1e; border: 1px solid rgba(255,255,255,0.07);
        }
        .lp-section-eyebrow {
          font-family: 'DM Mono', monospace; font-size: 10px; font-weight: 500;
          letter-spacing: 0.26em; text-transform: uppercase;
          margin-bottom: 10px;
        }
        .lp-section-title {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: clamp(1.6rem, 3vw, 2.2rem); color: var(--white);
          line-height: 1.05; margin-bottom: 32px;
        }

        /* ── Products ── */
        .lp-products { display: flex; flex-direction: column; gap: 36px; }
        .lp-prod-card {
          border-radius: 14px; overflow: hidden;
          border: 1px solid var(--feat-border);
          background: var(--subtle-bg);
        }
        .lp-prod-header {
          display: flex; align-items: center; gap: 12px;
          padding: 20px 24px 0;
        }
        .lp-prod-tag {
          font-family: 'DM Mono', monospace; font-size: 9px; font-weight: 500;
          letter-spacing: 0.22em; text-transform: uppercase; margin-bottom: 2px;
        }
        .lp-prod-label {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: 1rem; color: var(--white); letter-spacing: 0.06em;
        }
        .lp-prod-screen { margin-top: 16px; }
        .lp-prod-bar {
          background: var(--card-bg-deep); padding: 8px 12px;
          display: flex; align-items: center; gap: 5px;
          border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
        }
        .lp-prod-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: rgba(0,0,0,0.15); border: 1px solid var(--border);
          display: inline-block;
        }
        .lp-prod-url {
          flex: 1; margin-left: 8px;
          font-family: 'DM Mono', monospace; font-size: 9.5px;
          color: var(--muted); letter-spacing: 0.04em;
        }
        .lp-prod-title {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
          font-size: 1.25rem; color: var(--white);
          line-height: 1.15; padding: 20px 24px 8px;
        }
        .lp-prod-desc {
          font-size: 0.875rem; color: var(--dim); line-height: 1.65;
          padding: 0 24px;
        }
        .lp-prod-feats {
          list-style: none; padding: 16px 24px 24px; margin: 0;
          display: flex; flex-direction: column; gap: 9px;
        }
        .lp-prod-feat {
          display: flex; align-items: flex-start; gap: 9px;
          font-size: 0.85rem; color: var(--dim);
        }
        .lp-feat-check {
          width: 17px; height: 17px; border-radius: 50%;
          border: 1px solid; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 1px;
        }

        /* ── Quote / Proof ── */
        .lp-client-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px; }
        .lp-client-chip {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 7px 14px; border-radius: 100px;
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07);
          font-family: 'Space Grotesk', sans-serif; font-size: 12px;
          font-weight: 500; color: #94a3b8;
        }
        .lp-quote {
          background: rgba(37,99,235,0.06); border: 1px solid rgba(37,99,235,0.2);
          border-radius: 16px; padding: 36px; text-align: center;
        }
        .lp-quote-mark { font-size: 2rem; color: #60a5fa; opacity: 0.5; line-height: 1; margin-bottom: 12px; }
        .lp-quote-text {
          font-family: 'Space Grotesk', sans-serif; font-size: 1rem; color: #e6eef8;
          line-height: 1.75; font-style: italic; margin-bottom: 20px;
        }
        .lp-quote-attr {
          font-family: 'DM Mono', monospace; font-size: 10px;
          letter-spacing: 0.14em; text-transform: uppercase; color: #4a5c7a;
        }

        /* ── Sticky form column ── */
        .lp-form-col { min-width: 0; align-self: stretch; }
        .lp-form-sticky {
          position: sticky; top: 84px;
          background: var(--card-bg); border: 1px solid var(--card-border);
          border-radius: 20px; padding: 32px;
          box-shadow: 0 8px 40px var(--shadow);
        }
        .lp-form-head { margin-bottom: 24px; }
        .lp-form-eyebrow {
          font-family: 'DM Mono', monospace; font-size: 10px; font-weight: 500;
          letter-spacing: 0.26em; text-transform: uppercase; color: #2563eb;
          margin-bottom: 8px;
        }
        .lp-form-title {
          font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
          font-size: 1.7rem; color: var(--white); line-height: 1.05; margin-bottom: 8px;
        }
        .lp-form-sub {
          font-size: 0.85rem; color: var(--dim); line-height: 1.55;
        }
        .lp-form-trust {
          display: flex; flex-direction: column; gap: 8px;
          margin-top: 20px; padding-top: 20px;
          border-top: 1px solid var(--border);
        }
        .lp-trust-item {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; color: var(--dim);
        }
        .lp-trust-item svg { color: #2563eb; flex-shrink: 0; }

        /* ── Animations ── */
        @keyframes lpBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .lp-hero-wrap {
            padding-left: 40px;
            padding-right: 40px;
          }
        }
        @media (max-width: 960px) {
          .lp-hero-wrap { grid-template-columns: 1fr; }
          .lp-hero-screen { display: none; }
          .lp-body-inner { grid-template-columns: 1fr; }
          .lp-form-sticky { position: static; max-height: none; }
          .lp-form-col { order: -1; }
          .lp-hero-stats { grid-template-columns: repeat(4, 1fr); max-width: none; }
          .lp-hero-stat:nth-child(even) { border-right: 1px solid rgba(255,255,255,0.07); }
          .lp-hero-stat:nth-child(3),
          .lp-hero-stat:nth-child(4) { border-bottom: none; }
          .lp-hero-stat:nth-child(4) { border-right: none; }
        }
        @media (max-width: 640px) {
          .lp-header { padding: 0 20px; }
          .lp-hero-wrap { padding: calc(64px + 48px) 20px 48px; }
          .lp-body-inner { padding: 32px 20px; }
          .lp-hero-stats { grid-template-columns: repeat(2, 1fr); }
          .lp-section-light, .lp-section-dark { padding: 24px; }
          .lp-form-sticky { padding: 24px; }
          .lp-prod-title, .lp-prod-desc, .lp-prod-feats, .lp-prod-header { padding-left: 16px; padding-right: 16px; }
        }
      `}</style>
    </>
  )
}
