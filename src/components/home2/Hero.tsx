/* Homepage v2 hero — five operational pillars (Claude Design handoff, Hero variant D) */

const HEADLINE = {
  en: ['One modular platform for', 'coordinated public safety operations.'],
  es: ['Una plataforma modular para', 'operaciones de seguridad coordinadas.'],
}

const EYEBROW = 'UNIFIED OPERATING SYSTEM'

const SUB = {
  en: 'Kabat One brings together CAD / 911, GIS, event management, video, analytics, mobile response, citizen input, and third-party integrations into configurable solutions for cities, agencies, emergency centers, traffic operations, and critical environments.',
  es: 'Kabat One reúne CAD / 911, GIS, gestión de eventos, video, analítica, respuesta móvil, entrada ciudadana e integraciones de terceros en soluciones configurables para ciudades, agencias, centros de emergencia, operaciones de tráfico y entornos críticos.',
}

const PILLARS = [
  {
    key: 'cad',
    color: '#ef4444',
    label: { en: 'CAD / 911', es: 'CAD / 911' },
    sub: {
      en: 'Calls, sensors, alerts — unified intake.',
      es: 'Llamadas, sensores, alertas — unificadas.',
    },
  },
  {
    key: 'video',
    color: '#06b6d4',
    label: { en: 'Video + Analytics', es: 'Video + Analítica' },
    sub: {
      en: 'Every camera, classified in real time.',
      es: 'Cada cámara, clasificada en tiempo real.',
    },
  },
  {
    key: 'events',
    color: '#f59e0b',
    label: { en: 'Event Management', es: 'Gestión de Eventos' },
    sub: {
      en: 'Triage, dispatch, audit — one flow.',
      es: 'Triaje, despacho, auditoría — un solo flujo.',
    },
  },
  {
    key: 'mobile',
    color: '#eab308',
    label: { en: 'Mobile Apps', es: 'Apps Móviles' },
    sub: {
      en: 'For responders and citizens alike.',
      es: 'Para responder y para ciudadanos.',
    },
  },
  {
    key: 'gis',
    color: '#60a5fa',
    label: { en: 'GIS', es: 'GIS' },
    sub: {
      en: 'Patterns, hotspots, deployment insight.',
      es: 'Patrones, puntos críticos, despliegue.',
    },
  },
] as const

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  cad: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path
        d="M6 4.5h3.5l1.7 5.2-2.3 1.4c1.2 2.8 3.3 4.9 6 6L16.3 15l5.2 1.7v3.5a1.7 1.7 0 0 1-1.7 1.7C11 22 6 17 5.3 6.2A1.7 1.7 0 0 1 7 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="21" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.3" fill="none" />
      <circle cx="21" cy="7" r="5" stroke="currentColor" strokeWidth="0.8" opacity="0.4" fill="none" />
    </svg>
  ),
  video: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="7" width="15" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18 11l6-3v11l-6-3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <circle cx="10.5" cy="13.5" r="2.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  ),
  events: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="4" width="6" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="4" width="6" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="19" y="4" width="6" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="4.5" y="7" width="3" height="3" fill="currentColor" />
      <rect x="12.5" y="7" width="3" height="3" fill="currentColor" />
      <rect x="12.5" y="12" width="3" height="3" fill="currentColor" opacity="0.6" />
      <rect x="20.5" y="7" width="3" height="3" fill="currentColor" opacity="0.4" />
    </svg>
  ),
  mobile: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="8" y="3" width="12" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="22" x2="16" y2="22" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <rect x="10" y="6" width="8" height="13" rx="0.5" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="14" cy="10" r="1.8" fill="currentColor" />
    </svg>
  ),
  gis: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path
        d="M3 6l6-2 10 4 6-2v16l-6 2-10-4-6 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M9 4v18M19 8v18" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      <circle cx="14" cy="14" r="2" fill="currentColor" />
    </svg>
  ),
}

export default function Hero({ es }: { es: boolean }) {
  return (
    <div className="rd-hero rd-hero-d">
      <div className="rd-hero-d-grid">
        <div className="rd-hero-d-left">
          <div className="rd-eyebrow">
            <span className="rd-eyebrow-bar" />
            <span className="rd-eyebrow-dot" />
            <span>{EYEBROW}</span>
          </div>
          <h1 className="rd-headline">
            {HEADLINE[es ? 'es' : 'en'].map((line, i, lines) => (
              <span key={i} className="rd-headline-line">
                {i === lines.length - 1 ? <em>{line}</em> : line}
                {i < lines.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="rd-sub">{SUB[es ? 'es' : 'en']}</p>
          <div className="rd-ctas">
            <a className="rd-btn rd-btn-primary" href="#loop">
              {es ? 'Ver la plataforma en acción' : 'See the Platform in Action'}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M3 7h8M7 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a className="rd-btn rd-btn-ghost" href="#solutions">
              {es ? 'Explorar soluciones' : 'Explore Solutions'}
            </a>
          </div>
        </div>
        <div className="rd-hero-d-right">
          <div className="pl-loop">
            <span className="pl-loop-label">{es ? 'Módulos integrados' : 'Integrated modules'}</span>
            <span className="pl-loop-line" />
          </div>
          <div className="pl-cards">
            {PILLARS.map((p, i) => (
              <div
                key={p.key}
                className="pl-card"
                style={{ '--pc': p.color, '--ad': `${0.15 + i * 0.08}s` } as React.CSSProperties}
              >
                <div className="pl-card-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="pl-card-icon">{PILLAR_ICONS[p.key]}</div>
                <div className="pl-card-label">{p.label[es ? 'es' : 'en']}</div>
                <div className="pl-card-tagline">{p.sub[es ? 'es' : 'en']}</div>
                <div className="pl-card-bar" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
