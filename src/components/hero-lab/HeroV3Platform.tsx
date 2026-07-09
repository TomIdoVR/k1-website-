/* Hero direction 3 — light theme, single unified headline + a fan of
   module cards so a visitor reads the whole platform at a glance.
   Built from a reference mockup the user supplied directly (not one of
   the two brainstormed directions — this is its own, stronger track).
   Custom nav here (not the shared dark <Nav/>), since the real site nav
   is styled for a dark hero via CSS vars and would clash with a light
   page. K-mark and camera/evidence stills are AI-generated placeholders —
   swap before this ships. */

import Image from 'next/image'

const T = {
  eyebrow: { en: 'THE UNIFIED PUBLIC SAFETY PLATFORM', es: 'LA PLATAFORMA UNIFICADA DE SEGURIDAD PÚBLICA' },
  h1a: { en: 'One Platform.', es: 'Una Plataforma.' },
  h1b: { en: 'Total Awareness.', es: 'Conciencia Total.' },
  sub: {
    en: 'Dispatch, video, GIS, event management, evidence, mobile response and integrations — unified into a single operational platform.',
    es: 'Despacho, video, GIS, gestión de eventos, evidencia, respuesta móvil e integraciones — unificados en una sola plataforma operativa.',
  },
  demo: { en: 'Book a Demo', es: 'Solicita una Demo' },
  watch: { en: 'Watch Overview', es: 'Ver Resumen' },
  nav: {
    sol: { en: 'Solutions', es: 'Soluciones' },
    ind: { en: 'Industries', es: 'Industrias' },
    res: { en: 'Resources', es: 'Recursos' },
    co: { en: 'Company', es: 'Empresa' },
  },
  stats: [
    { num: '67M+', en: 'Citizens Protected', es: 'Ciudadanos Protegidos' },
    { num: '90+', en: 'Team Members', es: 'Miembros del Equipo' },
    { num: '15+', en: 'Countries', es: 'Países' },
  ],
}

function Chevron() {
  return (
    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
      <path d="M2 3.5L5 6.5l3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CadCard({ es }: { es: boolean }) {
  return (
    <div className="hll-card" style={{ '--cc': '#ef4444' } as React.CSSProperties}>
      <div className="hll-card-head">
        <span className="hll-card-icon">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5a2 2 0 0 1 2-2h2l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v2a2 2 0 0 1-2 2A16 16 0 0 1 3 5z" /></svg>
        </span>
        <span className="hll-card-title">CAD / 911</span>
      </div>
      <div className="hll-cad-call">
        <span className="hll-mini-label" style={{ color: '#ef4444' }}>{es ? 'LLAMADA ACTIVA' : 'ACTIVE CALL'}</span>
        <div className="hll-mini-strong" style={{ marginTop: 3 }}>{es ? 'Emergencia Médica' : 'Medical Emergency'}</div>
        <div className="hll-mini-row"><span>Main St &amp; 5th Ave</span><span>00:18</span></div>
        <div className="hll-cad-wave">
          {[6, 12, 8, 16, 10, 14, 7, 11, 9, 13, 6, 10].map((h, i) => (
            <span key={i} style={{ height: h }} />
          ))}
        </div>
      </div>
      <span className="hll-mini-label">{es ? 'UNIDADES DESPACHADAS' : 'UNITS DISPATCHED'}</span>
      <div className="hll-cad-units" style={{ marginTop: 6 }}>
        {[
          { c: '#2563eb', l: 'Unit 12', s: es ? 'En Ruta' : 'En Route', t: '2 min' },
          { c: '#22c55e', l: 'Unit 7', s: es ? 'En Escena' : 'On Scene', t: '6 min' },
          { c: '#f59e0b', l: 'Unit 3', s: es ? 'Respondiendo' : 'Responding', t: '8 min' },
        ].map((u) => (
          <div className="hll-cad-unit" key={u.l}>
            <span className="hll-mini-dot" style={{ background: u.c }} />
            <span style={{ flex: 1 }}>{u.l} · {u.s}</span>
            <span style={{ color: '#94a3b8' }}>{u.t}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function VideoCard({ es }: { es: boolean }) {
  return (
    <div className="hll-card" style={{ '--cc': '#2563eb' } as React.CSSProperties}>
      <div className="hll-card-head">
        <span className="hll-card-icon">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="13" height="12" rx="2" /><path d="M15 10l6-3v10l-6-3" /></svg>
        </span>
        <span className="hll-card-title">{es ? 'Video y Analítica' : 'Video &amp; Analytics'}</span>
      </div>
      <div className="hll-video-grid">
        {[0, 1, 2, 3].map((i) => (
          <div className="hll-video-thumb" key={i}>
            <Image src="/images/hero-lab/cctv-still.webp" alt="" fill sizes="90px" style={{ objectPosition: `${i * 20}% ${i * 15}%` }} />
          </div>
        ))}
      </div>
      <div className="hll-mini-row"><span>{es ? 'DETECCIONES IA' : 'AI DETECTIONS'}</span><b className="hll-mini-strong">23</b></div>
      <div className="hll-mini-row" style={{ marginTop: 4 }}><span>{es ? 'CÁMARAS EN LÍNEA' : 'CAMERAS ONLINE'}</span><b className="hll-mini-strong">128</b></div>
    </div>
  )
}

function GisCard({ es }: { es: boolean }) {
  return (
    <div className="hll-card" style={{ '--cc': '#10b981' } as React.CSSProperties}>
      <div className="hll-card-head">
        <span className="hll-card-icon">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-6-5.7-6-10a6 6 0 0 1 12 0c0 4.3-6 10-6 10z" /><circle cx="12" cy="11" r="2" /></svg>
        </span>
        <span className="hll-card-title">GIS / {es ? 'Mapa' : 'Map'}</span>
      </div>
      <div className="hll-gis-map">
        <div className="hll-gis-ring" />
        <div className="hll-gis-pulse" />
      </div>
      <div className="hll-mini-row"><span>{es ? 'INCIDENTES ACTIVOS' : 'ACTIVE INCIDENTS'}</span><b className="hll-mini-strong">12</b></div>
      <div className="hll-mini-row" style={{ marginTop: 4 }}><span>{es ? 'UNIDADES EN ÁREA' : 'UNITS IN AREA'}</span><b className="hll-mini-strong">23</b></div>
    </div>
  )
}

function EventCard({ es }: { es: boolean }) {
  const rows = [
    { c: '#ef4444', l: es ? 'Accidente de Tráfico' : 'Traffic Accident', t: '10:16 AM' },
    { c: '#f59e0b', l: es ? 'Emergencia Médica' : 'Medical Emergency', t: '10:24 AM' },
    { c: '#2563eb', l: es ? 'Asistencia Ciudadana' : 'Citizen Assist', t: '10:32 AM' },
    { c: '#22c55e', l: es ? 'Queja de Ruido' : 'Noise Complaint', t: '10:40 AM' },
  ]
  return (
    <div className="hll-card" style={{ '--cc': '#f59e0b' } as React.CSSProperties}>
      <div className="hll-card-head">
        <span className="hll-card-icon">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M4 9h16M9 3v4M15 3v4" /></svg>
        </span>
        <span className="hll-card-title">{es ? 'Gestión de Eventos' : 'Event Management'}</span>
      </div>
      <div className="hll-event-stats">
        <div className="hll-event-stat"><b style={{ color: '#ef4444' }}>12</b><span className="hll-mini-label">{es ? 'NUEVO' : 'NEW'}</span></div>
        <div className="hll-event-stat"><b style={{ color: '#f59e0b' }}>8</b><span className="hll-mini-label">{es ? 'EN CURSO' : 'IN PROGRESS'}</span></div>
        <div className="hll-event-stat"><b style={{ color: '#22c55e' }}>24</b><span className="hll-mini-label">{es ? 'RESUELTO' : 'RESOLVED'}</span></div>
      </div>
      <div className="hll-event-list">
        {rows.map((r) => (
          <div className="hll-event-row" key={r.l}>
            <span className="hll-mini-dot" style={{ background: r.c }} />
            <span style={{ flex: 1 }}>{r.l}</span>
            <span style={{ color: '#94a3b8' }}>{r.t}</span>
          </div>
        ))}
      </div>
      <div className="hll-event-more">+ 9 {es ? 'eventos más' : 'more events'}</div>
    </div>
  )
}

function UdeCard({ es }: { es: boolean }) {
  const shots = [
    { es: 'Cám. Corporal', en: 'Body Worn', t: '08:41:25' },
    { es: 'Video en Auto', en: 'In-Car Video', t: '08:41:30' },
    { es: 'Cámara CCTV', en: 'CCTV Camera', t: '08:41:32' },
    { es: 'Foto Evidencia', en: 'Evidence Photo', t: '08:47:35' },
  ]
  return (
    <div className="hll-card" style={{ '--cc': '#8b5cf6' } as React.CSSProperties}>
      <div className="hll-card-head">
        <span className="hll-card-icon">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.5 20 5.5V12c0 5.2-3.6 8.4-8 9.5-4.4-1.1-8-4.3-8-9.5V5.5Z" /></svg>
        </span>
        <span className="hll-card-title">{es ? 'Evidencia Digital Unificada' : 'Unified Digital Evidence'}</span>
      </div>
      <div className="hll-ude-grid">
        {shots.map((s, i) => (
          <div className="hll-ude-thumb" key={s.en}>
            <Image src="/images/hero-lab/evidence-still.webp" alt="" fill sizes="90px" style={{ objectPosition: `${i * 25}% ${i * 20}%` }} />
            <span>{s.t}</span>
          </div>
        ))}
      </div>
      <div className="hll-mini-label">CASE #24-0157</div>
      <div className="hll-mini-strong">{es ? 'Robo de Vehículo' : 'Vehicle Theft'}</div>
      <div className="hll-ude-chain">
        <span /><i /><span /><i /><span /><i /><span /><i /><span />
      </div>
      <div className="hll-mini-row"><span>{es ? 'ELEMENTOS' : 'EVIDENCE ITEMS'}</span><b className="hll-mini-strong">24</b></div>
    </div>
  )
}

function MobileCard({ es }: { es: boolean }) {
  return (
    <div className="hll-card" style={{ '--cc': '#6366f1' } as React.CSSProperties}>
      <div className="hll-card-head">
        <span className="hll-card-icon">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="3" width="10" height="18" rx="2" /></svg>
        </span>
        <span className="hll-card-title">{es ? 'Respuesta Móvil' : 'Mobile Response'}</span>
      </div>
      <div className="hll-mobile-phone">
        <div className="hll-mobile-map" />
        <div className="hll-mobile-route" />
        <div className="hll-mobile-badge">
          <span>Unit 12</span><span>ETA 2 min</span>
        </div>
        <div className="hll-mobile-btn">{es ? 'NAVEGAR' : 'NAVIGATE'}</div>
      </div>
      <div className="hll-mini-row"><span>{es ? 'PRIORIDAD' : 'PRIORITY'}</span><span style={{ color: '#ef4444', fontWeight: 600 }}>{es ? 'Alta' : 'High'}</span></div>
      <div className="hll-mini-row" style={{ marginTop: 4 }}><span>{es ? 'RESPONDEDORES' : 'RESPONDERS'}</span><b className="hll-mini-strong">Unit 12</b></div>
    </div>
  )
}

function IntegrationsCard({ es }: { es: boolean }) {
  const icons = [
    <svg key="1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="6" width="13" height="12" rx="2" /><path d="M16 10l5-3v10l-5-3" /></svg>,
    <svg key="2" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>,
    <svg key="3" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19a10 10 0 0 1 0-14M20 5a10 10 0 0 1 0 14" /><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" /></svg>,
    <svg key="4" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 15v-2a8 8 0 0 1 16 0v2M4 15h3v5H4zM17 15h3v5h-3z" /></svg>,
    <svg key="5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 16a4 4 0 0 1 .5-8 5.5 5.5 0 0 1 10.6.9A3.5 3.5 0 0 1 17 16H6z" /></svg>,
    <svg key="6" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="6" cy="12" r="2.4" /><circle cx="18" cy="6" r="2.4" /><circle cx="18" cy="18" r="2.4" /><path d="M8.3 10.7l7.4-3.4M8.3 13.3l7.4 3.4" /></svg>,
  ]
  const labels = [
    { en: 'LPR Cameras', es: 'Cámaras LPR' },
    { en: 'Access Control', es: 'Control de Acceso' },
    { en: 'Sensors', es: 'Sensores' },
    { en: 'Radio Systems', es: 'Sistemas de Radio' },
    { en: 'Weather Feeds', es: 'Datos Climáticos' },
    { en: 'IoT Devices', es: 'Dispositivos IoT' },
  ]
  return (
    <div className="hll-card" style={{ '--cc': '#3b82f6' } as React.CSSProperties}>
      <div className="hll-card-head">
        <span className="hll-card-icon">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="12" r="2.6" /><circle cx="18" cy="6" r="2.6" /><circle cx="18" cy="18" r="2.6" /><path d="M8.3 10.7 15.7 7.1M8.3 13.3 15.7 16.9" /></svg>
        </span>
        <span className="hll-card-title">{es ? 'Integraciones' : 'Integrations'}</span>
      </div>
      <div className="hll-int-grid">
        {icons.map((icon, i) => (
          <div className="hll-int-icon" key={i} title={es ? labels[i].es : labels[i].en}>{icon}</div>
        ))}
      </div>
      <div className="hll-int-more">+ 20 {es ? 'más integraciones' : 'More Integrations'}</div>
    </div>
  )
}

const StatIcons = {
  people: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><circle cx="17" cy="9" r="2.4" /><path d="M15.5 20a4.5 4.5 0 0 1 6.5-4" /></svg>
  ),
  shield: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3 20 6v6c0 5-4 8-8 9-4-1-8-4-8-9V6Z" /><path d="M8.5 12 11 14.5 15.5 9.5" /></svg>
  ),
  globe: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>
  ),
}

export default function HeroV3Platform({ es }: { es: boolean }) {
  return (
    <div className="hll-page">
      <nav className="hll-nav">
        <span className="hll-nav-logo">
          <span className="hll-nav-logo-mark" />
          KABAT ONE
        </span>
        <div className="hll-nav-links">
          <span className="hll-nav-link">{T.nav.sol[es ? 'es' : 'en']}<Chevron /></span>
          <span className="hll-nav-link">{T.nav.ind[es ? 'es' : 'en']}<Chevron /></span>
          <span className="hll-nav-link">{T.nav.res[es ? 'es' : 'en']}<Chevron /></span>
          <span className="hll-nav-link">{T.nav.co[es ? 'es' : 'en']}<Chevron /></span>
        </div>
        <a className="hll-nav-cta" href="#demo">
          {T.demo[es ? 'es' : 'en']}
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </nav>

      <div className="hll-hero-head">
        <div className="hll-eyebrow">{T.eyebrow[es ? 'es' : 'en']}</div>
        <h1 className="hll-headline">
          {T.h1a[es ? 'es' : 'en']}
          <span className="hll-headline-grad">{T.h1b[es ? 'es' : 'en']}</span>
        </h1>
        <p className="hll-sub">{T.sub[es ? 'es' : 'en']}</p>
        <div className="hll-ctas">
          <a className="hll-btn-primary" href="#demo">
            {T.demo[es ? 'es' : 'en']}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
          <a className="hll-btn-ghost" href="#overview">
            <span className="hll-play">
              <svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor"><path d="M2 1.5v7l6-3.5z" /></svg>
            </span>
            {T.watch[es ? 'es' : 'en']}
          </a>
        </div>
      </div>

      <div className="hll-mark">
        <Image src="/images/hero-lab/k-mark.webp" alt="" fill sizes="220px" />
      </div>

      <div className="hll-cards-wrap">
        <div className="hll-cards">
          <CadCard es={es} />
          <VideoCard es={es} />
          <GisCard es={es} />
          <EventCard es={es} />
          <UdeCard es={es} />
          <MobileCard es={es} />
          <IntegrationsCard es={es} />
        </div>
      </div>

      <div className="hll-stats">
        {T.stats.map((s) => (
          <div className="hll-stat" key={s.num}>
            <span className="hll-stat-icon">
              {s.num === '67M+' ? StatIcons.people : s.num === '90+' ? StatIcons.shield : StatIcons.globe}
            </span>
            <div>
              <div className="hll-stat-num">{s.num}</div>
              <div className="hll-stat-label">{s[es ? 'es' : 'en']}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
