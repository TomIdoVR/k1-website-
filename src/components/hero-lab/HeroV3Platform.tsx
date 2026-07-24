import Image from 'next/image'
import type { CSSProperties, ReactNode } from 'react'
import { Link } from '@/i18n/navigation'
import HeroCardCarousel from './HeroCardCarousel'
import { HeroCardMedia } from './HeroCardMedia'

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
  stats: [
    { num: '70M+', en: 'Citizens Protected', es: 'Ciudadanos Protegidos', icon: 'people' },
    { num: '40+', en: 'Cities Deployed', es: 'Ciudades Desplegadas', icon: 'city' },
    { num: '99.9%', en: 'Uptime SLA', es: 'Disponibilidad SLA', icon: 'shield' },
  ],
}

const moduleLinks = [
  { href: '/k-safety', label: 'K-Safety', color: '#2563eb' },
  { href: '/k-dispatch', label: 'K-Dispatch', color: '#ef4444' },
  { href: '/k-traffic', label: 'K-Traffic', color: '#06b6d4' },
  { href: '/k-video', label: 'K-Video', color: '#8b5cf6' },
  { href: '/k-connect', label: 'K-Connect', color: '#22c55e' },
] as const

const industryLinks = [
  { href: '/industries/public-safety', en: 'Public Safety', es: 'Seguridad Pública' },
  { href: '/industries/municipalities', en: 'Municipalities', es: 'Municipios' },
  { href: '/industries/airport', en: 'Airports', es: 'Aeropuertos' },
  { href: '/industries/ports', en: 'Ports', es: 'Puertos' },
] as const

function Arrow({ direction = 'right' }: { direction?: 'left' | 'right' | 'down' }) {
  const path = direction === 'down' ? 'M3 5.5 7 9l4-3.5' : direction === 'left' ? 'M11 7H3m4-4L3 7l4 4' : 'M3 7h8M7 3l4 4-4 4'
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d={path} stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ModuleIcon({ children }: { children: ReactNode }) {
  return <span className="hll-card-icon" aria-hidden="true">{children}</span>
}

function BrandLockup() {
  return (
    <span className="hll-brand-lockup" aria-hidden="true">
      <span className="hll-brand-logo-mask" />
    </span>
  )
}

function PlatformMark() {
  return (
    <Image
      className="hll-platform-mark"
      src="/images/hero-cards/platform-mark.webp"
      alt=""
      width={1024}
      height={1024}
      priority
    />
  )
}

function HeroNavigation({ es }: { es: boolean }) {
  const language = es ? 'es' : 'en'
  return (
    <nav className="hll-nav" aria-label={es ? 'Navegación principal' : 'Primary navigation'}>
      <Link href="/" className="hll-nav-logo" aria-label={es ? 'Inicio de KabatOne' : 'KabatOne home'}>
        <BrandLockup />
      </Link>

      <div className="hll-nav-links">
        <details className="hll-nav-menu">
          <summary>{es ? 'Soluciones' : 'Solutions'}<Arrow direction="down" /></summary>
          <div className="hll-nav-dropdown">
            {moduleLinks.map((item) => (
              <Link href={item.href} key={item.href}>
                <span style={{ background: item.color }} />{item.label}
              </Link>
            ))}
          </div>
        </details>
        <details className="hll-nav-menu">
          <summary>{es ? 'Industrias' : 'Industries'}<Arrow direction="down" /></summary>
          <div className="hll-nav-dropdown">
            {industryLinks.map((item) => <Link href={item.href} key={item.href}>{item[language]}</Link>)}
          </div>
        </details>
        <details className="hll-nav-menu">
          <summary>{es ? 'Recursos' : 'Resources'}<Arrow direction="down" /></summary>
          <div className="hll-nav-dropdown">
            <Link href="/resources">{es ? 'Centro de Recursos' : 'Resource Center'}</Link>
            <Link href="/demo">{es ? 'Demo Interactiva' : 'Interactive Demo'}</Link>
            <Link href="/simulator">{es ? 'Simulador de Incidentes' : 'Incident Simulator'}</Link>
          </div>
        </details>
        <details className="hll-nav-menu">
          <summary>{es ? 'Empresa' : 'Company'}<Arrow direction="down" /></summary>
          <div className="hll-nav-dropdown hll-nav-dropdown--right">
            <Link href="/about">{es ? 'Nosotros' : 'About'}</Link>
            <Link href="/contact">{es ? 'Contacto' : 'Contact'}</Link>
          </div>
        </details>
      </div>

      <div className="hll-nav-actions">
        <div className="hll-language" aria-label={es ? 'Idioma' : 'Language'}>
          <Link href="/" locale="en" aria-current={!es ? 'page' : undefined}>EN</Link>
          <Link href="/" locale="es" aria-current={es ? 'page' : undefined}>ES</Link>
        </div>
        <Link className="hll-nav-cta" href="/contact">{T.demo[language]}<Arrow /></Link>
      </div>

      <details className="hll-mobile-menu">
        <summary aria-label={es ? 'Abrir menú' : 'Open menu'}><span /><span /><span /></summary>
        <div className="hll-mobile-menu-panel">
          <Link href="/k-safety">{es ? 'Soluciones' : 'Solutions'}</Link>
          <Link href="/industries/public-safety">{es ? 'Industrias' : 'Industries'}</Link>
          <Link href="/resources">{es ? 'Recursos' : 'Resources'}</Link>
          <Link href="/about">{es ? 'Empresa' : 'Company'}</Link>
          <div className="hll-mobile-languages">
            <Link href="/" locale="en">EN</Link><Link href="/" locale="es">ES</Link>
          </div>
          <Link className="hll-nav-cta" href="/contact">{T.demo[language]}<Arrow /></Link>
        </div>
      </details>
    </nav>
  )
}

function CardHeader({ title, children }: { title: string; children: ReactNode }) {
  return <header className="hll-card-head"><ModuleIcon>{children}</ModuleIcon><h2 className="hll-card-title">{title}</h2></header>
}

function CarIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 10 2-4h10l2 4M4 11h16v7H4zM7 18v2M17 18v2M7 14h.01M17 14h.01" /></svg>
}

function CadCard({ es }: { es: boolean }) {
  const units = [
    { label: 'Unit 12', status: es ? 'En Ruta' : 'En Route', eta: '2 min', color: '#1d5cff' },
    { label: 'Unit 7', status: es ? 'En Escena' : 'On Scene', eta: '6 min', color: '#16a34a' },
    { label: 'Unit 3', status: es ? 'Respondiendo' : 'Responding', eta: '8 min', color: '#1d5cff' },
  ]
  const wave = [7, 12, 5, 15, 9, 20, 11, 5, 16, 9, 22, 12, 7, 17, 10, 5, 14, 8, 18, 10, 6, 14, 8, 4]
  return (
    <article data-hero-card="true" className="hll-card hll-card--cad" style={{ '--cc': '#ff3b30' } as CSSProperties}>
      <CardHeader title="CAD / 911"><svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-3 2a14 14 0 0 0 5 5l2-3 5 2v4c0 1-1 2-2 2C10 21 3 14 3 6c0-1 1-2 2-2Z" /></svg></CardHeader>
      <section className="hll-cad-call">
        <span className="hll-mini-label hll-text-red">{es ? 'LLAMADA ACTIVA' : 'ACTIVE CALL'}</span>
        <strong>{es ? 'Emergencia Médica' : 'Medical Emergency'}</strong>
        <div className="hll-mini-row"><span><b className="hll-location-dot" />Main St &amp; 5th Ave</span><time>00:18</time></div>
        <div className="hll-cad-wave" aria-hidden="true">{wave.map((height, index) => <i key={index} style={{ height }} />)}</div>
      </section>
      <span className="hll-mini-label">{es ? 'UNIDADES DESPACHADAS' : 'UNITS DISPATCHED'}</span>
      <div className="hll-cad-units">
        {units.map((unit) => (
          <div className="hll-cad-unit" key={unit.label}>
            <span className="hll-unit-icon" style={{ color: unit.color }}><CarIcon /></span>
            <span><b>{unit.label}</b><small>{unit.status}</small></span><time>{unit.eta}</time>
          </div>
        ))}
      </div>
    </article>
  )
}

function VideoCard({ es }: { es: boolean }) {
  return (
    <article data-hero-card="true" className="hll-card hll-card--video" style={{ '--cc': '#165dff' } as CSSProperties}>
      <CardHeader title={es ? 'Video y Analítica' : 'Video & Analytics'}><svg viewBox="0 0 24 24"><rect x="3" y="6" width="13" height="12" rx="2" /><path d="m16 10 5-3v10l-5-3Z" /></svg></CardHeader>
      <HeroCardMedia variant="video" src="/images/hero-cards/video-analytics.webp" width={1040} height={1513} />
      <div className="hll-data-line"><span>{es ? 'DETECCIONES IA' : 'AI DETECTIONS'}</span><strong>23</strong></div>
      <div className="hll-data-line"><span>{es ? 'CÁMARAS EN LÍNEA' : 'CAMERAS ONLINE'}</span><strong>128</strong></div>
    </article>
  )
}

function GisCard({ es }: { es: boolean }) {
  return (
    <article data-hero-card="true" className="hll-card hll-card--gis" style={{ '--cc': '#16a34a' } as CSSProperties}>
      <CardHeader title={es ? 'GIS / Mapa' : 'GIS / Map'}><svg viewBox="0 0 24 24"><path d="M12 21s-7-6-7-12a7 7 0 0 1 14 0c0 6-7 12-7 12Z" /><circle cx="12" cy="9" r="2.3" /></svg></CardHeader>
      <HeroCardMedia variant="gis" src="/images/hero-cards/gis-map.webp" width={1128} height={1394} />
      <div className="hll-gis-stats">
        <div><span>{es ? 'INCIDENTES ACTIVOS' : 'ACTIVE INCIDENTS'}</span><strong>12</strong></div>
        <div><span>{es ? 'UNIDADES EN ÁREA' : 'UNITS IN AREA'}</span><strong>23</strong></div>
      </div>
    </article>
  )
}

function EventCard({ es }: { es: boolean }) {
  const rows = [
    { color: '#ef4444', en: 'Traffic Accident', es: 'Accidente de Tráfico', time: '10:16 AM' },
    { color: '#2563eb', en: 'Medical Emergency', es: 'Emergencia Médica', time: '10:24 AM' },
    { color: '#f97316', en: 'Citizen Assist', es: 'Asistencia Ciudadana', time: '10:32 AM' },
    { color: '#16a34a', en: 'Noise Complaint', es: 'Queja de Ruido', time: '10:40 AM' },
  ]
  return (
    <article data-hero-card="true" className="hll-card hll-card--events" style={{ '--cc': '#ff5a36' } as CSSProperties}>
      <CardHeader title={es ? 'Gestión de Eventos' : 'Event Management'}><svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M4 9h16M8 3v4M16 3v4" /></svg></CardHeader>
      <div className="hll-event-stats">
        <div><span>{es ? 'NUEVOS' : 'NEW'}</span><strong>12</strong></div>
        <div><span>{es ? 'EN CURSO' : 'IN PROGRESS'}</span><strong>8</strong></div>
        <div><span>{es ? 'RESUELTOS' : 'RESOLVED'}</span><strong>24</strong></div>
      </div>
      <div className="hll-event-list">
        {rows.map((row) => <div className="hll-event-row" key={row.en}><i style={{ background: row.color }} /><span>{es ? row.es : row.en}</span><time>{row.time}</time></div>)}
      </div>
      <div className="hll-event-more"><b>+</b> 9 {es ? 'eventos más' : 'more events'}</div>
    </article>
  )
}

function UdeCard({ es }: { es: boolean }) {
  return (
    <article data-hero-card="true" className="hll-card hll-card--ude" style={{ '--cc': '#7c3cff' } as CSSProperties}>
      <CardHeader title={es ? 'Evidencia Digital Unificada (UDE)' : 'Unified Digital Evidence (UDE)'}><svg viewBox="0 0 24 24"><path d="m12 3 8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6Z" /><path d="m9 12 2 2 4-5" /></svg></CardHeader>
      <HeroCardMedia variant="evidence" src="/images/hero-cards/digital-evidence.webp" width={1122} height={1402} />
      <div className="hll-case-row"><span><b>CASE #24-0157</b>{es ? 'Robo de Vehículo' : 'Vehicle Theft'}</span><span><small>{es ? 'ELEMENTOS' : 'EVIDENCE ITEMS'}</small><strong>24</strong></span></div>
      <span className="hll-mini-label">{es ? 'CADENA DE CUSTODIA' : 'CHAIN OF CUSTODY'}</span>
      <div className="hll-ude-chain">{['BWC', 'CCTV', 'In-Car', 'Photo', 'Report'].map((label, index) => <span key={label}><i />{label}{index < 4 && <b />}</span>)}</div>
    </article>
  )
}

function MobileCard({ es }: { es: boolean }) {
  return (
    <article data-hero-card="true" className="hll-card hll-card--mobile" style={{ '--cc': '#7c3cff' } as CSSProperties}>
      <CardHeader title={es ? 'Respuesta Móvil' : 'Mobile Response'}><svg viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M10 5h4M11 19h2" /></svg></CardHeader>
      <HeroCardMedia variant="mobile" src="/images/hero-cards/mobile-apps.webp" width={1124} height={1399} />
      <div className="hll-mobile-metrics">
        <span><strong>1,842</strong><small>{es ? 'Usuarios de respuesta' : 'Responder users'}</small></span>
        <span><strong>5,736</strong><small>{es ? 'Usuarios ciudadanos' : 'Citizen users'}</small></span>
        <span><strong>98%</strong><small>{es ? 'Disponibilidad' : 'App uptime'}</small></span>
      </div>
    </article>
  )
}

function IntegrationsCard({ es }: { es: boolean }) {
  const items = [
    { en: 'LPR Cameras', es: 'Cámaras LPR', icon: <svg viewBox="0 0 24 24"><rect x="3" y="7" width="14" height="10" rx="2" /><path d="m17 10 4-2v8l-4-2" /></svg> },
    { en: 'Access Control', es: 'Control de Acceso', icon: <svg viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></svg> },
    { en: 'Sensors', es: 'Sensores', icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2" /><path d="M7 7a7 7 0 0 0 0 10M17 7a7 7 0 0 1 0 10M4 4a11 11 0 0 0 0 16M20 4a11 11 0 0 1 0 16" /></svg> },
    { en: 'Radio Systems', es: 'Sistemas de Radio', icon: <svg viewBox="0 0 24 24"><path d="M7 19V5l11-2v16M7 8h11M10 12h5" /><circle cx="12.5" cy="16" r="2" /></svg> },
    { en: 'Weather Feeds', es: 'Datos Climáticos', icon: <svg viewBox="0 0 24 24"><path d="M6 18a4 4 0 0 1 1-8 6 6 0 0 1 11 2 3 3 0 0 1 0 6Z" /></svg> },
    { en: 'IoT Devices', es: 'Dispositivos IoT', icon: <svg viewBox="0 0 24 24"><circle cx="6" cy="12" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="18" cy="18" r="2" /><path d="m8 11 8-4M8 13l8 4" /></svg> },
  ]
  return (
    <article data-hero-card="true" className="hll-card hll-card--integrations" style={{ '--cc': '#165dff' } as CSSProperties}>
      <CardHeader title={es ? 'Integraciones' : 'Integrations'}><svg viewBox="0 0 24 24"><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="m8 11 7.5-4M8 13l7.5 4" /></svg></CardHeader>
      <div className="hll-int-grid">{items.map((item) => <div className="hll-int-item" key={item.en}><span>{item.icon}</span><small>{es ? item.es : item.en}</small></div>)}</div>
      <div className="hll-int-more">+ 20 {es ? 'integraciones más' : 'More Integrations'}</div>
    </article>
  )
}

function HeroActions({ es }: { es: boolean }) {
  const language = es ? 'es' : 'en'
  return <div className="hll-ctas"><Link className="hll-btn-primary" href="/contact">{T.demo[language]}<Arrow /></Link><Link className="hll-btn-ghost" href="/demo"><span className="hll-play"><svg viewBox="0 0 12 12" aria-hidden="true"><path d="m3 2 7 4-7 4Z" /></svg></span>{T.watch[language]}</Link></div>
}

function StatIcon({ name }: { name: string }) {
  if (name === 'people') return <svg viewBox="0 0 42 42"><circle cx="16" cy="13" r="6" /><path d="M5 36v-5c0-6 5-10 11-10s11 4 11 10v5ZM27 9a5 5 0 0 1 0 10M28 24c5 0 9 4 9 9v3" /></svg>
  if (name === 'city') return <svg viewBox="0 0 42 42"><path d="M8 36V12l13-6 13 6v24M15 16h3M24 16h3M15 23h3M24 23h3M15 30h3M24 30h3" /></svg>
  return <svg viewBox="0 0 42 42"><path d="m21 4 14 5v11c0 9-6 15-14 18C13 35 7 29 7 20V9Z" /><path d="m15 21 4 4 8-9" /></svg>
}

function ProofMetrics({ es }: { es: boolean }) {
  const language = es ? 'es' : 'en'
  return <div className="hll-stats" aria-label={es ? 'Métricas de confianza' : 'Trust metrics'}>{T.stats.map((stat) => <div className="hll-stat" key={stat.num}><span className="hll-stat-icon"><StatIcon name={stat.icon} /></span><span><strong className="hll-stat-num">{stat.num}</strong><small className="hll-stat-label">{stat[language]}</small></span></div>)}</div>
}

export default function HeroV3Platform({ es }: { es: boolean }) {
  const language = es ? 'es' : 'en'
  const cards = [<CadCard key="cad" es={es} />, <VideoCard key="video" es={es} />, <GisCard key="gis" es={es} />, <EventCard key="events" es={es} />, <UdeCard key="ude" es={es} />, <MobileCard key="mobile" es={es} />, <IntegrationsCard key="integrations" es={es} />]
  return (
    <section className="hll-page" aria-labelledby="hll-title">
      <HeroNavigation es={es} />
      <div className="hll-hero-head">
        <p className="hll-eyebrow">{T.eyebrow[language]}</p>
        <h1 className="hll-headline" id="hll-title">{T.h1a[language]}<span className="hll-headline-grad">{T.h1b[language]}</span></h1>
        <p className="hll-sub">{T.sub[language]}</p>
        <HeroActions es={es} />
      </div>
      <div className="hll-platform-stage">
        <div className="hll-mark" aria-hidden="true"><PlatformMark /></div>
        <HeroCardCarousel previousLabel={es ? 'Tarjeta anterior' : 'Previous card'} nextLabel={es ? 'Tarjeta siguiente' : 'Next card'} slideLabel={es ? 'Módulos de la plataforma' : 'Platform modules'}>{cards}</HeroCardCarousel>
      </div>
      <ProofMetrics es={es} />
    </section>
  )
}
