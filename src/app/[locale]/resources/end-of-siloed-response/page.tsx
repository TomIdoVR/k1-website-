import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import EbookDownloadForm from '@/components/EbookDownloadForm'
import { organizationSchema, articleSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('endOfSiloedResponse', locale)
}

export default async function EndOfSiloedResponsePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#2563eb'

  const content = {
    breadcrumb: [
      { label: es ? 'Inicio' : 'Home', href: '/' as const },
      { label: es ? 'Recursos' : 'Resources', href: '/resources' as const },
      { label: es ? 'El Fin de la Respuesta en Silos' : 'The End of Siloed Response' },
    ],
    eyebrow: es ? 'INFORME DE LA INDUSTRIA 2026' : 'INDUSTRY BRIEF 2026',
    h1a: es ? 'El Fin de la' : 'The End of',
    h1b: es ? 'Respuesta en Silos' : 'Siloed Response',
    subtitle: es
      ? 'Por qué los sistemas fragmentados de seguridad pública ya no son sostenibles — y cómo los líderes están haciendo la transición a operaciones unificadas.'
      : 'Why fragmented public safety systems are no longer sustainable — and how leaders are making the shift to unified operations.',

    topics: es
      ? ['El costo oculto', 'El modelo unificado', 'Estándares emergentes', 'El caso LATAM']
      : ['The hidden cost', 'The unified model', 'Emerging standards', 'The LATAM case'],

    stats: [
      { value: '40+', label: es ? 'Ciudades con operaciones unificadas' : 'Cities running unified command' },
      { value: '73M+', label: es ? 'Ciudadanos protegidos' : 'Citizens protected' },
      { value: '40%', label: es ? 'Respuesta más rápida documentada' : 'Faster response time documented' },
    ],

    diagLabel: es ? 'EL PROBLEMA Y LA SOLUCIÓN' : 'THE PROBLEM & THE SOLUTION',
    diagTitle: es ? 'De Muchos Sistemas. A Uno.' : 'From Many Systems. To One.',
    diagSub: es
      ? 'Las agencias gestionan video, despacho, GIS, tráfico y alertas por separado. Cada traspaso entre sistemas cuesta tiempo.'
      : 'Agencies manage video, dispatch, GIS, traffic, and alerts as separate systems. Every handoff between them costs operational time.',
    leftLabel: es ? 'FRAGMENTADO' : 'FRAGMENTED',
    rightLabel: es ? 'UNIFICADO' : 'UNIFIED',

    quoteText: es
      ? '"KabatOne reemplazó cuatro sistemas separados de la noche a la mañana. Nuestros despachadores tenían una imagen operativa común completa a las 72 horas del go-live."'
      : '"KabatOne replaced four separate systems overnight. Our dispatchers had a full common operating picture within 72 hours of go-live."',
    quoteAttrib: es
      ? '— Jefe de Operaciones, Policía Metropolitana EE.UU.'
      : '— Chief of Operations, Major U.S. Metropolitan Police Department',

    ctaEyebrow: es ? 'PRÓXIMO PASO' : 'NEXT STEP',
    ctaH2: es ? '¿Listo para Evaluar tu Arquitectura?' : 'Ready to Evaluate Your Architecture?',
    ctaSub: es
      ? 'El siguiente paso es una revisión de arquitectura estructurada — no un demo genérico.'
      : 'The recommended next step is a structured architecture review, not a generic product demo.',
    ctaBtn: es ? 'Solicita una Revisión' : 'Request an Architecture Review',
    ctaBtn2: es ? 'Ver la Plataforma' : 'See the Platform',
  }

  const jsonLd = [
    organizationSchema(),
    articleSchema(
      es ? 'El Fin de la Respuesta en Silos — KabatOne 2026' : 'The End of Siloed Response — KabatOne Industry Brief 2026',
      es
        ? 'Cómo los líderes de seguridad pública pueden pasar de sistemas fragmentados a operaciones unificadas.'
        : 'How public safety leaders can move from fragmented systems to unified operations.',
      es
        ? 'https://kabatone.com/es/resources/end-of-siloed-response/'
        : 'https://kabatone.com/resources/end-of-siloed-response/',
    ),
    breadcrumbSchema([
      { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
      { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/' },
      {
        name: es ? 'El Fin de la Respuesta en Silos' : 'The End of Siloed Response',
        url: es
          ? 'https://kabatone.com/es/resources/end-of-siloed-response/'
          : 'https://kabatone.com/resources/end-of-siloed-response/',
      },
    ]),
  ]

  return (
    <>
      <Nav />
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── BREADCRUMB ── */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 32px 0' }}>
          <Breadcrumb items={content.breadcrumb} />
        </div>

        {/* ── HERO ── */}
        <section style={{ padding: '56px 32px 72px' }}>
          <div className="hero-grid" style={{
            maxWidth: '1100px', margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 360px', gap: '56px', alignItems: 'start',
          }}>

            {/* LEFT */}
            <div>
              <p style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                fontFamily: 'DM Mono, monospace', fontSize: '11px', fontWeight: 500,
                letterSpacing: '0.26em', textTransform: 'uppercase', color: ACCENT,
                marginBottom: '20px',
              }}>
                <span style={{ display: 'inline-block', width: '28px', height: '1.5px', background: ACCENT }} />
                {content.eyebrow}
              </p>

              <h1 style={{
                fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
                fontSize: 'clamp(3.4rem, 6vw, 5.8rem)', lineHeight: 0.95,
                letterSpacing: '-0.01em', color: 'var(--white)',
              }}>
                {content.h1a}
                <br />
                <span style={{ color: ACCENT }}>{content.h1b}</span>
              </h1>

              <p style={{
                fontSize: '1rem', fontWeight: 300, color: 'var(--dim)',
                lineHeight: 1.7, marginTop: '22px', marginBottom: '36px',
                maxWidth: '500px',
              }}>
                {content.subtitle}
              </p>

              {/* Topic chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
                {content.topics.map((t, i) => (
                  <span key={i} style={{
                    fontFamily: 'DM Mono, monospace', fontSize: '11px',
                    letterSpacing: '0.06em', color: 'var(--dim)',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--border)',
                    borderRadius: '6px', padding: '5px 12px',
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Stats bar */}
              <div style={{
                display: 'flex',
                borderTop: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
              }}>
                {content.stats.map((s, i) => (
                  <div key={i} style={{
                    flex: 1, padding: '18px 20px',
                    borderRight: i < content.stats.length - 1 ? '1px solid var(--border)' : 'none',
                  }}>
                    <div style={{
                      fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
                      fontSize: '1.85rem', color: ACCENT, lineHeight: 1, marginBottom: '5px',
                    }}>{s.value}</div>
                    <div style={{ fontSize: '11px', color: 'var(--dim)', lineHeight: 1.4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — form */}
            <div style={{ paddingTop: '8px' }}>
              <EbookDownloadForm es={es} />
            </div>
          </div>
        </section>

        {/* ── DIVIDER ── */}
        <div style={{ height: '1px', margin: '0 32px', background: 'linear-gradient(90deg, transparent, var(--border-b), transparent)' }} />

        {/* ── ILLUSTRATION ── */}
        <section style={{ padding: '80px 32px 88px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '12px' }}>
              <p style={{
                fontFamily: 'DM Mono, monospace', fontSize: '11px', fontWeight: 500,
                letterSpacing: '0.24em', textTransform: 'uppercase', color: ACCENT,
                marginBottom: '12px',
              }}>{content.diagLabel}</p>
              <h2 style={{
                fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--white)',
                letterSpacing: '-0.01em', lineHeight: 1.05, marginBottom: '12px',
              }}>{content.diagTitle}</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--dim)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.65 }}>
                {content.diagSub}
              </p>
            </div>

            {/* Before / After labels */}
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              maxWidth: '960px', margin: '36px auto 10px', padding: '0 16px',
            }}>
              <span style={{
                fontFamily: 'DM Mono, monospace', fontSize: '10px', fontWeight: 500,
                letterSpacing: '0.2em', textTransform: 'uppercase', color: '#3a5070',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <span style={{ width: '18px', height: '1.5px', background: '#3a5070', display: 'inline-block' }} />
                {content.leftLabel}
              </span>
              <span style={{
                fontFamily: 'DM Mono, monospace', fontSize: '10px', fontWeight: 500,
                letterSpacing: '0.2em', textTransform: 'uppercase', color: ACCENT,
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                {content.rightLabel}
                <span style={{ width: '18px', height: '1.5px', background: ACCENT, display: 'inline-block' }} />
              </span>
            </div>

            {/* SVG Diagram */}
            <div style={{
              maxWidth: '960px', margin: '0 auto',
              background: 'rgba(255,255,255,0.012)',
              border: '1px solid var(--border)',
              borderRadius: '20px', overflow: 'hidden',
            }}>
              <svg viewBox="0 0 960 420" width="100%" style={{ display: 'block' }}>
                <defs>
                  <filter id="glow-node" x="-80%" y="-80%" width="260%" height="260%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <filter id="glow-hub" x="-80%" y="-80%" width="260%" height="260%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <filter id="glow-warn" x="-80%" y="-80%" width="260%" height="260%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <radialGradient id="hub-bg" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#1d3a70" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#0f1724" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="left-bg" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3a1010" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#0f1724" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="sep-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1a2840" stopOpacity="0" />
                    <stop offset="30%" stopColor="#1a2840" stopOpacity="1" />
                    <stop offset="70%" stopColor="#1a2840" stopOpacity="1" />
                    <stop offset="100%" stopColor="#1a2840" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* ── LEFT BACKGROUND ── */}
                <ellipse cx="215" cy="210" rx="195" ry="175" fill="url(#left-bg)" />

                {/* Dot grid pattern — left half */}
                {Array.from({ length: 8 }, (_, row) =>
                  Array.from({ length: 10 }, (_, col) => (
                    <circle
                      key={`d-${row}-${col}`}
                      cx={20 + col * 45}
                      cy={30 + row * 52}
                      r="1"
                      fill="#1e2e45"
                      opacity="0.5"
                    />
                  ))
                )}

                {/* ── FRAGMENTED CONNECTIONS ── */}
                <line x1="88" y1="88" x2="318" y2="65" stroke="#2a1f1f" strokeWidth="1.8" strokeDasharray="7,5" className="frag-line fl0" />
                <line x1="88" y1="88" x2="198" y2="200" stroke="#2a1f1f" strokeWidth="1.8" strokeDasharray="5,7" className="frag-line fl1" />
                <line x1="318" y1="65" x2="198" y2="200" stroke="#2a1f1f" strokeWidth="1.8" strokeDasharray="8,4" className="frag-line fl2" />
                <line x1="198" y1="200" x2="70" y2="308" stroke="#2a1f1f" strokeWidth="1.8" strokeDasharray="4,8" className="frag-line fl3" />
                <line x1="198" y1="200" x2="348" y2="295" stroke="#2a1f1f" strokeWidth="1.8" strokeDasharray="7,5" className="frag-line fl4" />

                {/* Warning triangle — VMS↔CAD midpoint */}
                <g transform="translate(203,76)" filter="url(#glow-warn)" className="warn-pulse">
                  <polygon points="0,-10 9,5 -9,5" fill="none" stroke="#f97316" strokeWidth="1.3" />
                  <text x="0" y="3.5" textAnchor="middle" fontFamily="Arial" fontSize="6.5" fontWeight="bold" fill="#f97316">!</text>
                </g>
                {/* Warning triangle — GIS↔TMS midpoint */}
                <g transform="translate(273,247)" filter="url(#glow-warn)" className="warn-pulse wp1">
                  <polygon points="0,-10 9,5 -9,5" fill="none" stroke="#f97316" strokeWidth="1.3" />
                  <text x="0" y="3.5" textAnchor="middle" fontFamily="Arial" fontSize="6.5" fontWeight="bold" fill="#f97316">!</text>
                </g>

                {/* ── FRAGMENTED NODES ── */}
                {([
                  { cx: 88,  cy: 88,  label: 'VMS', sub: 'Video' },
                  { cx: 318, cy: 65,  label: 'CAD', sub: 'Dispatch' },
                  { cx: 198, cy: 200, label: 'GIS', sub: 'Mapping' },
                  { cx: 70,  cy: 308, label: '911', sub: 'Call Intake' },
                  { cx: 348, cy: 295, label: 'TMS', sub: 'Traffic' },
                ] as { cx: number; cy: number; label: string; sub: string }[]).map((n) => (
                  <g key={n.label + '-frag'}>
                    <circle cx={n.cx} cy={n.cy} r={34} fill="#0c1320" stroke="#2d1e1e" strokeWidth="1.8" />
                    <circle cx={n.cx} cy={n.cy} r={34} fill="none" stroke="#5a2a2a" strokeWidth="0.5" strokeOpacity="0.4" />
                    <text x={n.cx} y={n.cy + 1} textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="11.5" fontWeight="600" fill="#4a3a3a" letterSpacing="0.1em">{n.label}</text>
                    <text x={n.cx} y={n.cy + 14} textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="7" fontWeight="400" fill="#3a2a2a" letterSpacing="0.06em">{n.sub}</text>
                  </g>
                ))}

                {/* Response time — left */}
                <rect x="60" y="366" width="175" height="30" rx="6" fill="#1a0e0e" stroke="#2d1e1e" strokeWidth="1" />
                <text x="148" y="376" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="7" fontWeight="500" fill="#5a3a3a" letterSpacing="0.12em">AVG RESPONSE TIME</text>
                <text x="148" y="389" textAnchor="middle" fontFamily="Barlow Condensed, sans-serif" fontSize="14" fontWeight="700" fill="#c0572a" letterSpacing="0.04em">8m 24s</text>

                {/* ── CENTER SEPARATOR ── */}
                <line x1="480" y1="0" x2="480" y2="420" stroke="url(#sep-grad)" strokeWidth="1" />
                {/* Arrow pill */}
                <rect x="458" y="192" width="44" height="28" rx="8" fill="#111e33" stroke="#1e2e45" strokeWidth="1" />
                <text x="480" y="210" textAnchor="middle" fontFamily="Arial" fontSize="18" fill="#2a4060">→</text>

                {/* ── RIGHT BACKGROUND ── */}
                <ellipse cx="730" cy="205" rx="190" ry="168" fill="url(#hub-bg)" />

                {/* Dot grid pattern — right half */}
                {Array.from({ length: 8 }, (_, row) =>
                  Array.from({ length: 10 }, (_, col) => (
                    <circle
                      key={`dr-${row}-${col}`}
                      cx={510 + col * 45}
                      cy={30 + row * 52}
                      r="1"
                      fill="#1a2d50"
                      opacity="0.5"
                    />
                  ))
                )}

                {/* ── UNIFIED CONNECTION LINES ── */}
                {([
                  { x1: 730, y1: 60,  x2: 730, y2: 205 },
                  { x1: 858, y1: 132, x2: 730, y2: 205 },
                  { x1: 822, y1: 308, x2: 730, y2: 205 },
                  { x1: 616, y1: 308, x2: 730, y2: 205 },
                  { x1: 578, y1: 132, x2: 730, y2: 205 },
                ] as { x1: number; y1: number; x2: number; y2: number }[]).map((ln, i) => (
                  <line key={i} x1={ln.x1} y1={ln.y1} x2={ln.x2} y2={ln.y2}
                    stroke="#2563eb" strokeWidth="1.8" strokeOpacity="0.5"
                    className={`unified-line u${i}`}
                  />
                ))}

                {/* ── PARTICLES (to hub at 730,205) ── */}
                {([
                  { cx: 730, cy: 60,  cls: 'p0' },
                  { cx: 858, cy: 132, cls: 'p1' },
                  { cx: 822, cy: 308, cls: 'p2' },
                  { cx: 616, cy: 308, cls: 'p3' },
                  { cx: 578, cy: 132, cls: 'p4' },
                ] as { cx: number; cy: number; cls: string }[]).map((p) => (
                  <g key={p.cls}>
                    <circle cx={p.cx} cy={p.cy} r={3} fill="#60a5fa" className={p.cls} />
                    <circle cx={p.cx} cy={p.cy} r={3} fill="#93c5fd" className={p.cls + 'b'} />
                  </g>
                ))}

                {/* ── PULSE RINGS on outer unified nodes ── */}
                {([
                  { cx: 730, cy: 60,  cls: 'pr0' },
                  { cx: 858, cy: 132, cls: 'pr1' },
                  { cx: 822, cy: 308, cls: 'pr2' },
                  { cx: 616, cy: 308, cls: 'pr3' },
                  { cx: 578, cy: 132, cls: 'pr4' },
                ] as { cx: number; cy: number; cls: string }[]).map((p) => (
                  <circle key={p.cls} cx={p.cx} cy={p.cy} r={26}
                    fill="none" stroke="#2563eb" strokeWidth="1" strokeOpacity="0"
                    className={`pulse-ring ${p.cls}`}
                  />
                ))}

                {/* ── OUTER UNIFIED NODES ── */}
                {([
                  { cx: 730, cy: 60,  label: 'VMS', sub: 'Video' },
                  { cx: 858, cy: 132, label: 'CAD', sub: 'Dispatch' },
                  { cx: 822, cy: 308, label: 'TMS', sub: 'Traffic' },
                  { cx: 616, cy: 308, label: '911', sub: 'Call Intake' },
                  { cx: 578, cy: 132, label: 'GIS', sub: 'Mapping' },
                ] as { cx: number; cy: number; label: string; sub: string }[]).map((n) => (
                  <g key={n.label + '-uni'} filter="url(#glow-node)">
                    <circle cx={n.cx} cy={n.cy} r={26} fill="#0d1e40" stroke="#2563eb" strokeWidth="1.8" />
                    <circle cx={n.cx} cy={n.cy} r={26} fill="none" stroke="#60a5fa" strokeWidth="0.6" strokeOpacity="0.25" />
                    <text x={n.cx} y={n.cy + 1} textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="10" fontWeight="600" fill="#93c5fd" letterSpacing="0.1em">{n.label}</text>
                    <text x={n.cx} y={n.cy + 12} textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="6.5" fontWeight="400" fill="#4a6a9a" letterSpacing="0.06em">{n.sub}</text>
                  </g>
                ))}

                {/* ── CENTER HUB PULSE RINGS ── */}
                <circle cx="730" cy="205" r="56" fill="none" stroke="#2563eb" strokeWidth="1.2" strokeOpacity="0" className="ctr-pulse cp1" />
                <circle cx="730" cy="205" r="56" fill="none" stroke="#2563eb" strokeWidth="0.7" strokeOpacity="0" className="ctr-pulse cp2" />

                {/* ── CENTER HUB ── */}
                <circle cx="730" cy="205" r="50" fill="#07122a" stroke="#2563eb" strokeWidth="2.5" filter="url(#glow-hub)" />
                <circle cx="730" cy="205" r="50" fill="none" stroke="#60a5fa" strokeWidth="0.8" strokeOpacity="0.3" />
                <circle cx="730" cy="205" r="42" fill="none" stroke="#1d3a70" strokeWidth="0.5" strokeOpacity="0.4" />
                <text x="730" y="200" textAnchor="middle" fontFamily="Barlow Condensed, sans-serif" fontSize="16" fontWeight="800" fill="#e8f0ff" letterSpacing="0.05em">KabatOne</text>
                <text x="730" y="215" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="7" fontWeight="500" fill="#60a5fa" letterSpacing="0.18em">UNIFIED PLATFORM</text>

                {/* LIVE badge on hub */}
                <rect x="706" y="228" width="48" height="14" rx="4" fill="#0c2a0c" stroke="#22c55e" strokeWidth="0.8" />
                <circle cx="716" cy="235" r="2.5" fill="#22c55e" className="live-dot" />
                <text x="733" y="238.5" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="6.5" fontWeight="600" fill="#22c55e" letterSpacing="0.12em">LIVE</text>

                {/* Response time — right */}
                <rect x="640" y="366" width="175" height="30" rx="6" fill="#070f20" stroke="#1a2e50" strokeWidth="1" />
                <text x="728" y="376" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="7" fontWeight="500" fill="#2d5090" letterSpacing="0.12em">AVG RESPONSE TIME</text>
                <text x="728" y="389" textAnchor="middle" fontFamily="Barlow Condensed, sans-serif" fontSize="14" fontWeight="700" fill="#60a5fa" letterSpacing="0.04em">3m 12s</text>
              </svg>
            </div>
          </div>
        </section>

        {/* ── DIVIDER ── */}
        <div style={{ height: '1px', margin: '0 32px', background: 'linear-gradient(90deg, transparent, var(--border-b), transparent)' }} />

        {/* ── QUOTE ── */}
        <section style={{ padding: '72px 32px 80px' }}>
          <div style={{
            maxWidth: '740px', margin: '0 auto',
            background: 'rgba(37,99,235,0.04)',
            border: '1px solid rgba(37,99,235,0.14)',
            borderLeft: `4px solid ${ACCENT}`,
            borderRadius: '16px',
            padding: '44px 48px',
          }}>
            <blockquote style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '1.1rem', fontStyle: 'italic',
              color: 'var(--white)', lineHeight: 1.75,
              marginBottom: '18px',
            }}>
              {content.quoteText}
            </blockquote>
            <cite style={{
              fontFamily: 'DM Mono, monospace', fontSize: '10.5px',
              color: ACCENT, letterSpacing: '0.12em',
              textTransform: 'uppercase', fontStyle: 'normal',
            }}>
              {content.quoteAttrib}
            </cite>
          </div>
        </section>

        {/* ── DIVIDER ── */}
        <div style={{ height: '1px', margin: '0 32px', background: 'linear-gradient(90deg, transparent, var(--border-b), transparent)' }} />

        {/* ── CTA ── */}
        <section style={{ padding: '72px 32px 96px', textAlign: 'center' }}>
          <div style={{
            maxWidth: '580px', margin: '0 auto',
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid var(--border-b)',
            borderRadius: '24px',
            padding: '52px 48px',
          }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '14px',
            }}>{content.ctaEyebrow}</p>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--white)',
              marginBottom: '12px', letterSpacing: '-0.01em', lineHeight: 1.1,
            }}>{content.ctaH2}</h2>
            <p style={{ color: 'var(--dim)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '32px' }}>
              {content.ctaSub}
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="mailto:info@kabatone.com?subject=Architecture Review Request"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '9px',
                  background: 'var(--blue)', color: 'white',
                  fontFamily: 'Space Grotesk, sans-serif', fontSize: '14px', fontWeight: 600,
                  padding: '13px 26px', borderRadius: '8px', textDecoration: 'none',
                  boxShadow: '0 0 40px rgba(59,130,246,0.35), inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
              >
                {content.ctaBtn}
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href={es ? '/es/k-safety' : '/k-safety'}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '9px',
                  background: 'transparent', color: 'var(--white)',
                  fontFamily: 'Space Grotesk, sans-serif', fontSize: '14px', fontWeight: 600,
                  padding: '13px 26px', borderRadius: '8px', textDecoration: 'none',
                  border: '1px solid var(--border-b)',
                }}
              >
                {content.ctaBtn2}
              </a>
            </div>
          </div>
        </section>

        <Footer es={es} />

        <style>{`
          /* ── Particles: each travels from outer node → hub (730,205) ── */
          /* p0: VMS (730,60) → hub: Δ(0,+145) */
          @keyframes p0anim {
            0%   { transform: translate(0,0); opacity: 0; }
            10%  { opacity: 1; }
            90%  { opacity: 1; }
            100% { transform: translate(0px, 145px); opacity: 0; }
          }
          /* p1: CAD (858,132) → hub: Δ(-128,+73) */
          @keyframes p1anim {
            0%   { transform: translate(0,0); opacity: 0; }
            10%  { opacity: 1; }
            90%  { opacity: 1; }
            100% { transform: translate(-128px, 73px); opacity: 0; }
          }
          /* p2: TMS (822,308) → hub: Δ(-92,-103) */
          @keyframes p2anim {
            0%   { transform: translate(0,0); opacity: 0; }
            10%  { opacity: 1; }
            90%  { opacity: 1; }
            100% { transform: translate(-92px, -103px); opacity: 0; }
          }
          /* p3: 911 (616,308) → hub: Δ(+114,-103) */
          @keyframes p3anim {
            0%   { transform: translate(0,0); opacity: 0; }
            10%  { opacity: 1; }
            90%  { opacity: 1; }
            100% { transform: translate(114px, -103px); opacity: 0; }
          }
          /* p4: GIS (578,132) → hub: Δ(+152,+73) */
          @keyframes p4anim {
            0%   { transform: translate(0,0); opacity: 0; }
            10%  { opacity: 1; }
            90%  { opacity: 1; }
            100% { transform: translate(152px, 73px); opacity: 0; }
          }

          /* Primary particles */
          .p0  { animation: p0anim 2.4s ease-in-out infinite 0s; }
          .p1  { animation: p1anim 2.4s ease-in-out infinite 0.48s; }
          .p2  { animation: p2anim 2.4s ease-in-out infinite 0.96s; }
          .p3  { animation: p3anim 2.4s ease-in-out infinite 1.44s; }
          .p4  { animation: p4anim 2.4s ease-in-out infinite 1.92s; }
          /* Echo particles */
          .p0b { animation: p0anim 2.4s ease-in-out infinite 1.2s; }
          .p1b { animation: p1anim 2.4s ease-in-out infinite 1.68s; }
          .p2b { animation: p2anim 2.4s ease-in-out infinite 2.16s; }
          .p3b { animation: p3anim 2.4s ease-in-out infinite 2.64s; }
          .p4b { animation: p4anim 2.4s ease-in-out infinite 3.12s; }

          /* Traveling dashes on unified lines */
          .unified-line { stroke-dasharray: 4 18; animation: lineDash 1.8s linear infinite; }
          .u1 { animation-delay: 0.36s; }
          .u2 { animation-delay: 0.72s; }
          .u3 { animation-delay: 1.08s; }
          .u4 { animation-delay: 1.44s; }
          @keyframes lineDash { to { stroke-dashoffset: -22; } }

          /* Pulse rings on outer nodes */
          .pulse-ring {
            transform-box: fill-box;
            transform-origin: center;
            animation: pulseRing 2.8s ease-out infinite;
          }
          .pr1 { animation-delay: 0.48s; }
          .pr2 { animation-delay: 0.96s; }
          .pr3 { animation-delay: 1.44s; }
          .pr4 { animation-delay: 1.92s; }
          @keyframes pulseRing {
            0%   { transform: scale(1); stroke-opacity: 0.55; }
            100% { transform: scale(2.2); stroke-opacity: 0; }
          }

          /* Center hub pulse */
          .ctr-pulse {
            transform-box: fill-box;
            transform-origin: center;
            animation: ctrPulse 2.8s ease-out infinite;
          }
          .cp2 { animation-delay: 1.4s; }
          @keyframes ctrPulse {
            0%   { transform: scale(1); stroke-opacity: 0.45; }
            100% { transform: scale(1.7); stroke-opacity: 0; }
          }

          /* Fragmented lines flicker */
          .frag-line { animation: fragFlicker 3.5s ease-in-out infinite; }
          .fl1 { animation-delay: 0.7s; }
          .fl2 { animation-delay: 1.4s; }
          .fl3 { animation-delay: 2.1s; }
          .fl4 { animation-delay: 2.8s; }
          @keyframes fragFlicker {
            0%,100% { stroke-opacity: 0.45; }
            20%     { stroke-opacity: 0.18; }
            50%     { stroke-opacity: 0.55; }
            75%     { stroke-opacity: 0.10; }
          }

          /* Warning pulse */
          .warn-pulse { animation: warnPulse 2s ease-in-out infinite; }
          .wp1 { animation-delay: 1s; }
          @keyframes warnPulse {
            0%,100% { opacity: 0.7; }
            50%     { opacity: 1; }
          }

          /* Live dot blink */
          .live-dot { animation: liveBlink 1.4s ease-in-out infinite; }
          @keyframes liveBlink {
            0%,100% { opacity: 1; }
            50%     { opacity: 0.3; }
          }

          /* Responsive */
          .hero-grid { grid-template-columns: 1fr 360px; }
          @media (max-width: 1000px) {
            .hero-grid { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 640px) {
            section { padding-left: 20px !important; padding-right: 20px !important; }
          }
        `}</style>
      </div>
    </>
  )
}
