'use client'

/* Homepage v2 — solutions tabbed showcase (Variant A from Claude Design handoff).
   K-Dispatch uses blue and K-Traffic amber per the approved design-system correction
   (red reserved for urgent UI states; cyan reserved for K-Safety adjacency). */

import { useState } from 'react'
import { Link } from '@/i18n/navigation'

const SOLUTION_ICONS: Record<string, React.ReactNode> = {
  safety: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
      <path d="M12 2.5 L20 5.5 V12 c0 5.2-3.6 8.4-8 9.5-4.4-1.1-8-4.3-8-9.5V5.5Z" />
      <path d="M8.5 12 L11 14.5 L15.5 9.5" />
    </svg>
  ),
  dispatch: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
      <path d="M12 3 a8 8 0 0 0-8 8 v4 a2 2 0 0 0 2 2 h1 v-6 H6 v0 a6 6 0 0 1 12 0 v0 h-1 v6 h1 a2 2 0 0 0 2-2 v-4 a8 8 0 0 0-8-8Z" />
      <path d="M17 17 v1 a3 3 0 0 1-3 3 h-2" />
    </svg>
  ),
  traffic: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
      <rect x="8" y="2.5" width="8" height="19" rx="3" />
      <circle cx="12" cy="7" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" opacity="0.4" />
      <circle cx="12" cy="17" r="1.6" fill="currentColor" stroke="none" opacity="0.4" />
    </svg>
  ),
  video: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
      <rect x="2.5" y="6" width="13" height="12" rx="2" />
      <path d="M15.5 10 L21.5 7 v10 l-6-3" />
      <circle cx="9" cy="12" r="2.4" />
    </svg>
  ),
  connect: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
      <circle cx="6" cy="12" r="2.6" />
      <circle cx="18" cy="6" r="2.6" />
      <circle cx="18" cy="18" r="2.6" />
      <path d="M8.3 10.7 L15.7 7.1 M8.3 13.3 L15.7 16.9" />
    </svg>
  ),
}

type SolutionCopy = {
  label: string
  headline: string
  tagline: string
  feats: string[]
}

type Solution = {
  key: string
  color: string
  href: string
  en: SolutionCopy
  es: SolutionCopy
}

const SOLUTIONS: Solution[] = [
  {
    key: 'safety', color: '#3b82f6', href: '/k-safety',
    en: { label: 'K-SAFETY', headline: 'Real-Time GIS Situational Awareness', tagline: 'See everything, everywhere, in real time.',
      feats: ['Live incident mapping with auto-classification', 'Field unit tracking & geofencing alerts', 'Multi-layer GIS integration (CAD, sensors, cameras)', 'Pattern-of-life analytics for proactive deployment'] },
    es: { label: 'K-SAFETY', headline: 'Conciencia Situacional GIS en Tiempo Real', tagline: 'Ve todo, en todas partes, en tiempo real.',
      feats: ['Mapeo de incidentes en vivo con autoclasificación', 'Rastreo de unidades y alertas de geocerca', 'Integración GIS multicapa (CAD, sensores, cámaras)', 'Analítica de patrones para despliegue proactivo'] },
  },
  {
    key: 'dispatch', color: '#2563eb', href: '/k-dispatch',
    en: { label: 'K-DISPATCH', headline: 'AI-Augmented Emergency Dispatch', tagline: 'From call to deployment in seconds.',
      feats: ['Multi-channel intake: phone, radio, IoT, citizen app', 'AI-assisted call triage & priority scoring', 'Smart unit recommendation engine', 'Full audit trail & post-incident reporting'] },
    es: { label: 'K-DISPATCH', headline: 'Despacho de Emergencia Aumentado por IA', tagline: 'De la llamada al despliegue en segundos.',
      feats: ['Recepción multicanal: teléfono, radio, IoT, app ciudadana', 'Triaje de llamadas y priorización asistidos por IA', 'Motor de recomendación inteligente de unidades', 'Auditoría completa e informes post-incidente'] },
  },
  {
    key: 'traffic', color: '#f59e0b', href: '/k-traffic',
    en: { label: 'K-TRAFFIC', headline: 'Intelligent Traffic Management', tagline: 'Keep the city moving, safely.',
      feats: ['Adaptive signal control & corridor optimization', 'Automated violation detection (red-light, speed, wrong-way)', 'Incident detection & emergency vehicle preemption', 'Real-time traffic analytics dashboard'] },
    es: { label: 'K-TRAFFIC', headline: 'Gestión Inteligente de Tráfico', tagline: 'Mantén la ciudad en movimiento, con seguridad.',
      feats: ['Control adaptativo de señales y optimización de corredores', 'Detección automática de infracciones (semáforo, velocidad)', 'Detección de incidentes y prioridad de vehículos de emergencia', 'Dashboard de analítica de tráfico en tiempo real'] },
  },
  {
    key: 'video', color: '#a855f7', href: '/k-video',
    en: { label: 'K-VIDEO', headline: 'Unified Video Intelligence', tagline: 'Every camera, one searchable brain.',
      feats: ['Unified VMS: any brand, any protocol', 'AI object, behavior & license-plate detection', 'Forensic video search across all cameras', 'Live alerting on defined events & zones'] },
    es: { label: 'K-VIDEO', headline: 'Inteligencia de Video Unificada', tagline: 'Cada cámara, un solo cerebro consultable.',
      feats: ['VMS unificado: cualquier marca, cualquier protocolo', 'Detección de objetos, comportamiento y placas por IA', 'Búsqueda forense de video en todas las cámaras', 'Alertas en vivo sobre eventos y zonas definidas'] },
  },
  {
    key: 'connect', color: '#22c55e', href: '/k-connect',
    en: { label: 'K-CONNECT', headline: 'Secure Community-Based Video Sharing', tagline: 'Community eyes, shared securely.',
      feats: ['Secure public-private video sharing', 'AI-driven alerts & monitoring', 'Privacy-focused access control', 'Seamless emergency coordination'] },
    es: { label: 'K-CONNECT', headline: 'Video Comunitario Compartido y Seguro', tagline: 'Ojos de la comunidad, compartidos con seguridad.',
      feats: ['Compartición de video público-privada segura', 'Alertas y monitoreo impulsados por IA', 'Control de acceso enfocado en privacidad', 'Coordinación de emergencias sin fricciones'] },
  },
]

const SOL_MODS: Record<string, string[]> = {
  safety: ['Event Mgmt', 'GIS', 'Video', 'Analytics', 'Integrations', 'Mobile', 'BI', 'Automation'],
  dispatch: ['CAD / 911', 'GIS', 'Unit Tracking', 'Event Mgmt', 'Comms', 'Mobile', 'BI'],
  traffic: ['GIS', 'Traffic Sensors', 'Cameras', 'Event Mgmt', 'Analytics', 'Integrations', 'BI'],
  video: ['Video / VMS', 'Analytics', 'Investigation', 'Event Triggers', 'Integrations', 'Audit'],
  connect: ['Camera Sharing', 'Permissions', 'Video', 'Audit', 'Event Mgmt', 'Secure Access'],
}

function ProductMock({ k }: { k: string }) {
  if (k === 'safety') {
    return (
      <div className="sol-mock-inner">
        <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="sol-mock-map">
          <defs>
            <pattern id="sm-dot" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="0.5" cy="0.5" r="0.5" fill="#1e3a8a" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="320" height="200" fill="url(#sm-dot)" />
          <path d="M0 60 Q160 64 320 70 M0 130 Q160 134 320 138 M90 0 Q94 100 98 200 M220 0 Q224 100 228 200" stroke="#1e3a8a" strokeWidth="0.8" opacity="0.6" fill="none" />
          <path d="M100 50 L180 56 L186 120 L110 128 Z" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.45)" strokeWidth="0.6" strokeDasharray="3 3" />
          <circle cx="148" cy="88" r="4" fill="#3b82f6" />
          <circle cx="148" cy="88" r="9" fill="none" stroke="#3b82f6" strokeWidth="0.7" className="sol-mock-ring" />
          <circle cx="60" cy="120" r="2.6" fill="#60a5fa" />
          <circle cx="250" cy="70" r="2.6" fill="#60a5fa" />
          <rect x="34" y="30" width="5" height="5" fill="#06b6d4" transform="rotate(45 36 32)" />
        </svg>
        <div className="sol-mock-hud sol-mock-hud-tl"><span className="sol-mock-live" />LIVE · GIS</div>
        <div className="sol-mock-hud sol-mock-hud-br">24 zones · 38 units</div>
      </div>
    )
  }
  if (k === 'dispatch') {
    return (
      <div className="sol-mock-inner sol-mock-pad">
        <div className="sol-mock-911">
          <div className="sol-mock-911-ring" />
          <div className="sol-mock-911-ring sol-mock-911-ring2" />
          <div className="sol-mock-911-body">911</div>
        </div>
        <div className="sol-mock-rows">
          <div className="sol-mock-row"><span className="sol-mock-pri sol-mock-p1">P1</span><span>Polanco / Galileo</span><span className="sol-mock-eta">ETA 1:42</span></div>
          <div className="sol-mock-row"><span className="sol-mock-pri sol-mock-p3">P3</span><span>Roma Norte</span><span className="sol-mock-eta">0:42</span></div>
          <div className="sol-mock-row"><span className="sol-mock-pri sol-mock-p2">P2</span><span>Condesa</span><span className="sol-mock-eta">1:17</span></div>
        </div>
      </div>
    )
  }
  if (k === 'traffic') {
    return (
      <div className="sol-mock-inner sol-mock-pad">
        <div className="sol-mock-traffic">
          <div className="sol-mock-corridor"><span /><span /><span className="on" /><span /><span /></div>
          <div className="sol-mock-corridor"><span /><span className="on" /><span /><span /><span /></div>
          <div className="sol-mock-corridor"><span /><span /><span /><span className="on" /><span /></div>
        </div>
        <div className="sol-mock-stat-row">
          <div className="sol-mock-stat"><b>-31%</b><small>CONGESTION</small></div>
          <div className="sol-mock-stat"><b>4</b><small>VIOLATIONS</small></div>
          <div className="sol-mock-stat"><b>12</b><small>CORRIDORS</small></div>
        </div>
      </div>
    )
  }
  if (k === 'video') {
    return (
      <div className="sol-mock-inner sol-mock-grid4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`sol-mock-cam ${i === 1 ? 'is-active' : ''}`}>
            <div className="sol-mock-cam-scan" />
            {i === 1 && <div className="sol-mock-bbox"><span>PERSON · 97%</span></div>}
            {i === 3 && <span className="sol-mock-rec" />}
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="sol-mock-inner">
      <svg viewBox="0 0 320 200" className="sol-mock-net" preserveAspectRatio="xMidYMid meet">
        <line x1="160" y1="100" x2="70" y2="50" stroke="#22c55e" strokeWidth="1" opacity="0.5" />
        <line x1="160" y1="100" x2="70" y2="150" stroke="#22c55e" strokeWidth="1" opacity="0.5" />
        <line x1="160" y1="100" x2="250" y2="50" stroke="#22c55e" strokeWidth="1" opacity="0.5" />
        <line x1="160" y1="100" x2="250" y2="150" stroke="#22c55e" strokeWidth="1" opacity="0.5" />
        <circle cx="160" cy="100" r="16" fill="rgba(34,197,94,0.18)" stroke="#22c55e" strokeWidth="1.2" />
        <circle cx="160" cy="100" r="5" fill="#22c55e" />
        <circle cx="160" cy="100" r="26" fill="none" stroke="#22c55e" strokeWidth="0.6" className="sol-mock-ring" />
        {[[70, 50], [70, 150], [250, 50], [250, 150]].map(([x, y], i) => (
          <g key={i}>
            <rect x={x - 12} y={y - 9} width="24" height="18" rx="3" fill="rgba(34,197,94,0.12)" stroke="#22c55e" strokeWidth="0.9" />
            <circle cx={x} cy={y} r="2.4" fill="#22c55e" />
          </g>
        ))}
      </svg>
      <div className="sol-mock-hud sol-mock-hud-tl"><span className="sol-mock-live" />SECURE MESH</div>
    </div>
  )
}

export default function SolutionsShowcase({ es }: { es: boolean }) {
  const [active, setActive] = useState(0)
  const sol = SOLUTIONS[active]
  const c = es ? sol.es : sol.en

  return (
    <section className="sol-section" id="solutions">
      <div className="sol-inner">
        <div className="sol-head">
          <div className="sol-eyebrow">
            <span className="sol-eyebrow-bar" />
            <span>{es ? 'SOLUCIONES' : 'SOLUTIONS'}</span>
          </div>
          <h2 className="sol-title">
            {es ? (
              <>
                Soluciones empaquetadas
                <br />
                <em>para cada necesidad operativa.</em>
              </>
            ) : (
              <>
                Packaged solutions
                <br />
                <em>for different operational needs.</em>
              </>
            )}
          </h2>
          <p className="sol-sub">
            {es
              ? 'Cada solución combina módulos seleccionados de la plataforma en un paquete listo para desplegar — configurable y expandible con el tiempo.'
              : 'Each solution combines selected platform modules into a deployment-ready package — configurable, and expandable over time.'}
          </p>
        </div>

        <div className="sol-tabs" style={{ '--sc': sol.color } as React.CSSProperties}>
          <div className="sol-tabs-rail">
            {SOLUTIONS.map((s, i) => {
              const sc = es ? s.es : s.en
              return (
                <button
                  key={s.key}
                  className={`sol-tab ${i === active ? 'is-active' : ''}`}
                  style={{ '--sc': s.color } as React.CSSProperties}
                  onClick={() => setActive(i)}
                >
                  <span className="sol-tab-icon">{SOLUTION_ICONS[s.key]}</span>
                  <span className="sol-tab-text">
                    <span className="sol-tab-label">{sc.label}</span>
                    <span className="sol-tab-tagline">{sc.tagline}</span>
                  </span>
                  <span className="sol-tab-arrow" aria-hidden="true">→</span>
                </button>
              )
            })}
          </div>

          <div className="sol-tabs-panel" key={sol.key}>
            <div className="sol-panel-mock">
              <div className="sol-mock-frame" style={{ '--sc': sol.color } as React.CSSProperties}>
                <div className="sol-mock-bar">
                  <span className="sol-mock-dot" />
                  <span className="sol-mock-dot" />
                  <span className="sol-mock-dot" />
                  <span className="sol-mock-title">{c.label} · CONSOLE</span>
                </div>
                <ProductMock k={sol.key} />
              </div>
            </div>
            <div className="sol-panel-body">
              <div className="sol-panel-label">
                <span className="sol-panel-icon">{SOLUTION_ICONS[sol.key]}</span>
                {c.label}
              </div>
              <h3 className="sol-panel-headline">{c.headline}</h3>
              <ul className="sol-panel-feats">
                {c.feats.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
              <div className="sol-panel-mods">
                <span className="sol-panel-mods-label">{es ? 'Construido con módulos:' : 'Built from modules:'}</span>
                <span className="sol-panel-mods-chips">
                  {(SOL_MODS[sol.key] || []).map((m, j) => (
                    <span className="sol-panel-mod" key={j}>{m}</span>
                  ))}
                </span>
              </div>
              <Link href={sol.href} className="sol-panel-link">
                {es ? 'Más información' : 'Learn more'}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h7.5M7 3.5l3.5 3.5L7 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
