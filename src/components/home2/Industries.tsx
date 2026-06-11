/* Homepage v2 — industries: photographic tiles + header stats row.
   Photo slots use gradient placeholders until real photography is supplied. */

import { Link } from '@/i18n/navigation'

const ICONS: Record<string, React.ReactNode> = {
  dispatch: (
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
      <path d="M16 5 C 10 5 6 9 6 16 v3 a2 2 0 0 0 2 2 h3 v-7 H8 v-2 c0-5 4-8 8-8 s8 3 8 8 v2 h-3 v7 h3 a2 2 0 0 0 2-2 v-3 c0-7-4-11-10-11 z" />
      <path d="M18 23 v1 a2 2 0 0 1-2 2 h-3" />
    </svg>
  ),
  publicSafety: (
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
      <path d="M16 3 L27 7 V16 c0 7-5 11-11 13-6-2-11-6-11-13 V7 Z" />
      <path d="M11 16 L14.5 19.5 L21 12.5" />
    </svg>
  ),
  municipalities: (
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
      <path d="M3 13 L16 5 L29 13" />
      <line x1="3" y1="13" x2="29" y2="13" />
      <line x1="7" y1="13" x2="7" y2="25" />
      <line x1="12" y1="13" x2="12" y2="25" />
      <line x1="20" y1="13" x2="20" y2="25" />
      <line x1="25" y1="13" x2="25" y2="25" />
      <line x1="3" y1="28" x2="29" y2="28" />
      <line x1="3" y1="25" x2="29" y2="25" />
    </svg>
  ),
  airports: (
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
      <path d="M16 3 L18 14 L29 17 L29 19 L18 18 L17 25 L20 27 L20 28 L16 27 L12 28 L12 27 L15 25 L14 18 L3 19 L3 17 L14 14 Z" />
    </svg>
  ),
  ports: (
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
      <path d="M4 21 L28 21 L26 27 L6 27 Z" />
      <rect x="10" y="14" width="12" height="7" />
      <line x1="14" y1="16" x2="14" y2="19" />
      <line x1="17" y1="16" x2="17" y2="19" />
      <path d="M16 14 L16 5 L23 8" />
    </svg>
  ),
  stadiums: (
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
      <ellipse cx="16" cy="17" rx="13" ry="7" />
      <ellipse cx="16" cy="17" rx="7" ry="3" />
      <circle cx="9" cy="14" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="13" cy="12" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="19" cy="12" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="23" cy="14" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  retail: (
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
      <path d="M4 10 L28 10 L26 16 L6 16 Z" />
      <rect x="6" y="16" width="20" height="12" />
      <rect x="13" y="20" width="6" height="8" />
      <line x1="8" y1="10" x2="8" y2="6" />
      <line x1="24" y1="10" x2="24" y2="6" />
      <line x1="8" y1="6" x2="24" y2="6" />
    </svg>
  ),
  logistics: (
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
      <rect x="2" y="11" width="16" height="11" />
      <path d="M18 14 L25 14 L29 18 L29 22 L18 22 Z" />
      <circle cx="8" cy="24" r="2.4" />
      <circle cx="23" cy="24" r="2.4" />
    </svg>
  ),
}

const STAT_ICONS: Record<string, React.ReactNode> = {
  globe: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  ),
  shield: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      <path d="M12 3 L20 6 V13 c0 5-4 8-8 9-4-1-8-4-8-9V6Z" />
      <path d="M8.5 12 L11 14.5 L15.5 9.5" strokeLinecap="round" />
    </svg>
  ),
  signal: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <path d="M7.5 16.5 a6 6 0 0 1 0-9 M16.5 7.5 a6 6 0 0 1 0 9" />
      <path d="M4 19 a10 10 0 0 1 0-14 M20 5 a10 10 0 0 1 0 14" opacity="0.5" />
    </svg>
  ),
  clock: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  ),
}

const INDUSTRIES = [
  { key: 'dispatch', color: '#ef4444', href: '/k-dispatch', en: '911 / Dispatch', es: '911 / Despacho' },
  { key: 'publicSafety', color: '#3b82f6', href: '/industries/public-safety', en: 'Public Safety & Smart Cities', es: 'Seguridad Pública y Ciudades' },
  { key: 'municipalities', color: '#06b6d4', href: '/industries/municipalities', en: 'Municipalities', es: 'Municipios' },
  { key: 'airports', color: '#a855f7', href: '/industries/airport', en: 'Airports', es: 'Aeropuertos' },
  { key: 'ports', color: '#0ea5e9', href: '/industries/ports', en: 'Ports', es: 'Puertos' },
  { key: 'stadiums', color: '#ef4444', href: '/industries/stadiums', en: 'Stadiums & Venues', es: 'Estadios y Recintos' },
  { key: 'retail', color: '#f59e0b', href: '/industries/retail', en: 'Retail', es: 'Retail' },
  { key: 'logistics', color: '#10b981', href: '/industries/logistics', en: 'Logistics', es: 'Logística' },
]

function HeadStat({ icon, num, unit, label }: { icon: React.ReactNode; num: string; unit: string; label: string }) {
  return (
    <div className="ind-head-stat">
      <div className="ind-head-stat-icon">{icon}</div>
      <div className="ind-head-stat-num">
        <span>{num}</span>
        <small>{unit}</small>
      </div>
      <div className="ind-head-stat-label">{label}</div>
    </div>
  )
}

export default function Industries({ es }: { es: boolean }) {
  return (
    <section className="ind-section">
      <div className="ind-inner">
        <div className="ind-head">
          <div className="ind-head-left">
            <div className="ind-eyebrow">
              <span className="ind-eyebrow-bar" />
              <span className="ind-eyebrow-dot" />
              <span>{es ? 'INDUSTRIAS' : 'INDUSTRIES'}</span>
            </div>
            <h2 className="ind-title">
              {es ? (
                <>
                  Una plataforma.
                  <br />
                  <em>Cada vertical.</em>
                </>
              ) : (
                <>
                  One platform.
                  <br />
                  <em>Every vertical.</em>
                </>
              )}
            </h2>
            <p className="ind-sub">
              {es
                ? 'Diseñado para unificar operaciones, acelerar la respuesta y mejorar resultados en cada dominio.'
                : 'Purpose-built to unify operations, accelerate response, and improve outcomes across every domain.'}
            </p>
          </div>

          <div className="ind-head-stats">
            <HeadStat icon={STAT_ICONS.globe} num="40" unit="+" label={es ? 'Ciudades' : 'Cities'} />
            <HeadStat icon={STAT_ICONS.shield} num="70" unit="M+" label={es ? 'Ciudadanos protegidos' : 'Citizens Protected'} />
            <HeadStat icon={STAT_ICONS.signal} num="1000" unit="+" label={es ? 'Despliegues' : 'Deployments'} />
            <HeadStat icon={STAT_ICONS.clock} num="24" unit="/7" label={es ? 'Soporte operativo' : 'Operational Support'} />
          </div>
        </div>

        <div className="ind-grid">
          {INDUSTRIES.map((ind, i) => (
            <Link
              key={ind.key}
              href={ind.href}
              className="ind-card"
              style={{ '--pc': ind.color, '--ad': `${i * 0.05}s` } as React.CSSProperties}
            >
              <div className="ind-card-photo" />
              <div className="ind-card-overlay" />
              <div className="ind-card-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="ind-card-icon">{ICONS[ind.key]}</div>
              <h3 className="ind-card-name">{es ? ind.es : ind.en}</h3>
              <span className="ind-card-arrow" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9h10M9 4l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}

          <Link href="/contact" className="ind-card ind-card-empty">
            <div className="ind-card-empty-plus">+</div>
            <div className="ind-card-empty-body">
              <div className="ind-card-empty-label">{es ? 'TU VERTICAL?' : 'YOUR VERTICAL?'}</div>
              <p className="ind-card-empty-text">
                {es ? 'Habla con nuestro equipo de soluciones.' : 'Talk to our solutions team.'}
              </p>
              <span className="ind-card-empty-cta">
                {es ? 'CONTACTAR' : 'GET IN TOUCH'}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h6M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
