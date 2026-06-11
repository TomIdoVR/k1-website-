/* Homepage v2 — platform architecture diagram + modules grid.
   Teaches the hierarchy: Platform → Modules → Solutions → Industries. */

import { Link } from '@/i18n/navigation'

const MODULES = [
  { key: 'cad', label: { en: 'CAD / 911', es: 'CAD / 911' }, desc: { en: 'Call-taking, incident creation, dispatch, unit management, AVL.', es: 'Recepción de llamadas, creación de incidentes, despacho, gestión de unidades, AVL.' } },
  { key: 'gis', label: { en: 'GIS', es: 'GIS' }, desc: { en: 'Live map, operational layers, assets, cameras, units, geofencing.', es: 'Mapa en vivo, capas operativas, activos, cámaras, unidades, geocercas.' } },
  { key: 'events', label: { en: 'Event Management', es: 'Gestión de Eventos' }, desc: { en: 'Intake, prioritization, workflow automation, escalation, closure.', es: 'Recepción, priorización, automatización de flujos, escalamiento, cierre.' } },
  { key: 'video', label: { en: 'Video / VMS', es: 'Video / VMS' }, desc: { en: 'Live camera access, video wall, recording, retrieval, investigation.', es: 'Acceso a cámaras en vivo, videowall, grabación, recuperación, investigación.' } },
  { key: 'analytics', label: { en: 'Video Analytics', es: 'Analítica de Video' }, desc: { en: 'LPR, facial recognition, anomaly & object detection, automated alerts.', es: 'LPR, reconocimiento facial, detección de anomalías y objetos, alertas.' } },
  { key: 'bi', label: { en: 'BI / Analytics', es: 'BI / Analítica' }, desc: { en: 'Dashboards, KPIs, reporting, operational and historical insight.', es: 'Tableros, KPIs, reportes, análisis operativo e histórico.' } },
  { key: 'mobile', label: { en: 'Mobile / Field', es: 'Móvil / Campo' }, desc: { en: 'Responder app, tasks, status, location, field evidence capture.', es: 'App de respuesta, tareas, estado, ubicación, evidencia de campo.' } },
  { key: 'citizen', label: { en: 'Citizen Input', es: 'Entrada Ciudadana' }, desc: { en: 'Citizen app, panic buttons, external reports, community signals.', es: 'App ciudadana, botones de pánico, reportes externos, señales comunitarias.' } },
  { key: 'integrations', label: { en: 'Integrations', es: 'Integraciones' }, desc: { en: 'APIs, sensors, radio, IoT, third-party platforms, existing systems.', es: 'APIs, sensores, radio, IoT, plataformas externas, sistemas existentes.' } },
  { key: 'automation', label: { en: 'Automation', es: 'Automatización' }, desc: { en: 'Rules, workflows, alerts, recommendations, SOP automation.', es: 'Reglas, flujos, alertas, recomendaciones, automatización de SOP.' } },
]

const MOD_ICONS: Record<string, React.ReactNode> = {
  cad: <path d="M7 4h10M9 4v3a3 3 0 0 0 6 0V4M5 20c0-4 3-6 7-6s7 2 7 6" />,
  gis: <><path d="M12 21s-6-5.7-6-10a6 6 0 0 1 12 0c0 4.3-6 10-6 10z" /><circle cx="12" cy="11" r="2" /></>,
  events: <><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M4 9h16M9 3v4M15 3v4M8 14h4" /></>,
  video: <><rect x="3" y="6" width="13" height="12" rx="2" /><path d="M16 10l5-3v10l-5-3z" /></>,
  analytics: <><circle cx="11" cy="11" r="6" /><path d="M11 8v3l2 2M20 20l-5-5" /></>,
  bi: <path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6" />,
  mobile: <><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M11 18h2" /></>,
  citizen: <><circle cx="12" cy="8" r="3" /><path d="M6 20a6 6 0 0 1 12 0" /></>,
  integrations: <><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8.3 10.7l7.4-3.4M8.3 13.3l7.4 3.4" /></>,
  automation: <><circle cx="12" cy="12" r="3" /><path d="M12 4v3M12 17v3M4 12h3M17 12h3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M17.7 6.3l-2.1 2.1M8.4 15.6l-2.1 2.1" /></>,
}

const ModIcon = ({ k }: { k: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {MOD_ICONS[k]}
  </svg>
)

const SOLUTION_PACKAGES = [
  { key: 'safety', label: 'K-Safety', color: '#3b82f6', href: '/k-safety', mods: 8 },
  { key: 'dispatch', label: 'K-Dispatch', color: '#2563eb', href: '/k-dispatch', mods: 6 },
  { key: 'video', label: 'K-Video', color: '#a855f7', href: '/k-video', mods: 5 },
  { key: 'connect', label: 'K-Connect', color: '#22c55e', href: '/k-connect', mods: 4 },
  { key: 'traffic', label: 'K-Traffic', color: '#f59e0b', href: '/k-traffic', mods: 6 },
]

const INDUSTRY_TAGS = [
  { en: 'Cities & Public Safety', es: 'Ciudades y Seguridad' },
  { en: 'Emergency Centers', es: 'Centros de Emergencia' },
  { en: 'Traffic & Transportation', es: 'Tráfico y Transporte' },
  { en: 'Critical Infrastructure', es: 'Infraestructura Crítica' },
  { en: 'Campuses & Venues', es: 'Campus y Recintos' },
  { en: 'Enterprise Security', es: 'Seguridad Empresarial' },
]

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="pf-eyebrow">
    <span className="pf-eyebrow-bar" />
    <span className="pf-eyebrow-dot" />
    <span>{children}</span>
  </div>
)

export function PlatformSection({ es }: { es: boolean }) {
  return (
    <section className="pf-section" id="platform">
      <div className="pf-inner">
        <div className="pf-head">
          <Eyebrow>{es ? 'La Plataforma' : 'The Platform'}</Eyebrow>
          <h2 className="pf-title">
            {es ? (
              <>
                Construida con módulos operativos.
                <br />
                <em>Configurada para la respuesta real.</em>
              </>
            ) : (
              <>
                Built from operational modules.
                <br />
                <em>Configured for real-world response.</em>
              </>
            )}
          </h2>
          <p className="pf-sub">
            {es
              ? 'Kabat One no es un sistema de propósito único. Es una plataforma modular hecha de capacidades operativas reutilizables que se combinan según el entorno, la infraestructura y la misión de cada cliente.'
              : 'Kabat One is not a single-purpose system. It is a modular platform of reusable operational capabilities that combine to fit each customer’s environment, infrastructure, and mission.'}
          </p>
        </div>

        <div className="pf-arch">
          <div className="pf-layer pf-layer-platform">
            <span className="pf-layer-tag">01 · {es ? 'PLATAFORMA' : 'PLATFORM'}</span>
            <div className="pf-platform-bar">
              <span className="pf-platform-logo">
                kabat<strong>one</strong>
              </span>
              <span className="pf-platform-desc">
                {es ? 'Identidad e infraestructura operativa unificada' : 'Unified identity & operating foundation'}
              </span>
            </div>
          </div>

          <div className="pf-flow" aria-hidden="true"><span /><span /><span /><span /><span /></div>

          <div className="pf-layer pf-layer-modules">
            <span className="pf-layer-tag">02 · {es ? 'MÓDULOS' : 'MODULES'}</span>
            <a className="pf-mod-band" href="#modules">
              <span className="pf-mod-band-icons">
                {MODULES.map((m) => (
                  <span className="pf-mod-band-icon" key={m.key}>
                    <ModIcon k={m.key} />
                  </span>
                ))}
              </span>
              <span className="pf-mod-band-meta">
                {es ? '10 capacidades operativas reutilizables' : '10 reusable operational capabilities'}{' '}
                <span className="pf-mod-band-arrow">↓</span>
              </span>
            </a>
          </div>

          <div className="pf-flow" aria-hidden="true"><span /><span /><span /><span /><span /></div>

          <div className="pf-layer pf-layer-solutions">
            <span className="pf-layer-tag">03 · {es ? 'SOLUCIONES' : 'SOLUTIONS'}</span>
            <div className="pf-sol-row">
              {SOLUTION_PACKAGES.map((s) => (
                <Link className="pf-sol-card" key={s.key} href={s.href} style={{ '--sc': s.color } as React.CSSProperties}>
                  <span className="pf-sol-card-dot" />
                  <span className="pf-sol-card-label">{s.label}</span>
                  <span className="pf-sol-card-meta">{s.mods} {es ? 'módulos' : 'modules'}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="pf-flow" aria-hidden="true"><span /><span /><span /><span /><span /></div>

          <div className="pf-layer pf-layer-industries">
            <span className="pf-layer-tag">04 · {es ? 'INDUSTRIAS' : 'INDUSTRIES'}</span>
            <div className="pf-ind-row">
              {INDUSTRY_TAGS.map((t, i) => (
                <span className="pf-ind-tag" key={i}>{t[es ? 'es' : 'en']}</span>
              ))}
            </div>
          </div>
        </div>

        <p className="pf-rule">
          {es
            ? 'Los módulos prueban la plataforma. Las soluciones empaquetan los módulos. Las industrias explican dónde se usan.'
            : 'Modules prove the platform. Solutions package the modules. Industries explain where they’re used.'}
        </p>
      </div>
    </section>
  )
}

export function ModulesGrid({ es }: { es: boolean }) {
  return (
    <section className="md-section" id="modules">
      <div className="md-inner">
        <div className="md-head">
          <Eyebrow>{es ? 'Módulos de la Plataforma' : 'Platform Modules'}</Eyebrow>
          <h2 className="md-title">
            {es ? (
              <>
                Módulos que cubren el <em>ciclo operativo completo.</em>
              </>
            ) : (
              <>
                Core modules across the <em>full operational lifecycle.</em>
              </>
            )}
          </h2>
          <p className="md-sub">
            {es
              ? 'Capacidades reutilizables de la plataforma. Las soluciones se configuran a partir de ellas — no todas las implementaciones incluyen todos los módulos.'
              : 'Reusable platform capabilities. Solutions are configured from these — not every deployment includes every module.'}
          </p>
        </div>

        <div className="md-grid">
          {MODULES.map((m, i) => (
            <div className="md-card" key={m.key} style={{ '--ad': `${i * 0.04}s` } as React.CSSProperties}>
              <span className="md-card-icon">
                <ModIcon k={m.key} />
              </span>
              <span className="md-card-num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="md-card-label">{m.label[es ? 'es' : 'en']}</h3>
              <p className="md-card-desc">{m.desc[es ? 'es' : 'en']}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
