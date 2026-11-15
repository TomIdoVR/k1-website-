/* The seven platform module cards.

   Extracted from HeroV3Platform so they can be rendered in two places without
   duplication: inside the hero on /hero-lab (unchanged), and as a standalone
   section further down the page on /hero-lab-story, where the hero is being
   freed up for a single purpose-built image.

   Nothing about the markup or class names changed in the move — every
   responsive rule in hero-lab-light.css keys on .hll-card / .hll-cards /
   .hll-platform-stage, so both hosts get identical behaviour. */

import type { CSSProperties, ReactNode } from 'react'
import { HeroCardMedia } from './HeroCardMedia'

function ModuleIcon({ children }: { children: ReactNode }) {
  return <span className="hll-card-icon" aria-hidden="true">{children}</span>
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
        <span><strong>99.99%</strong><small>{es ? 'Disponibilidad' : 'App uptime'}</small></span>
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
    { en: 'Face Recognition', es: 'Reconocimiento Facial', icon: <svg viewBox="0 0 24 24"><path d="M4 8.5V6a2 2 0 0 1 2-2h2.5M15.5 4H18a2 2 0 0 1 2 2v2.5M20 15.5V18a2 2 0 0 1-2 2h-2.5M8.5 20H6a2 2 0 0 1-2-2v-2.5" /><circle cx="12" cy="10.5" r="2" /><path d="M8.8 16a4 4 0 0 1 6.4 0" /></svg> },
    { en: 'Video Analytics', es: 'Analítica de Video', icon: <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><rect x="8" y="9" width="5.5" height="5.5" rx="1" /><path d="M16.5 15.5V11" /></svg> },
    { en: 'Drones', es: 'Drones', icon: <svg viewBox="0 0 24 24"><circle cx="5.5" cy="5.5" r="2.2" /><circle cx="18.5" cy="5.5" r="2.2" /><circle cx="5.5" cy="18.5" r="2.2" /><circle cx="18.5" cy="18.5" r="2.2" /><rect x="9.5" y="9.5" width="5" height="5" rx="1.4" /><path d="m7.1 7.1 2.4 2.4M16.9 7.1l-2.4 2.4M7.1 16.9l2.4-2.4M16.9 16.9l-2.4-2.4" /></svg> },
    { en: 'Radar', es: 'Radar', icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" /><path d="M12 12 18.4 6.5" /></svg> },
    { en: 'Smart Fences', es: 'Cercas Inteligentes', icon: <svg viewBox="0 0 24 24"><path d="M5 20V8l3.5-3.2L12 8v12M12 20V8l3.5-3.2L19 8v12M3 12h18M3 16h18" /></svg> },
    { en: 'Traffic Lights', es: 'Semáforos', icon: <svg viewBox="0 0 24 24"><rect x="8" y="2.5" width="8" height="17" rx="3" /><circle cx="12" cy="6.8" r="1.4" /><circle cx="12" cy="11" r="1.4" /><circle cx="12" cy="15.2" r="1.4" /><path d="M12 19.5V22" /></svg> },
    { en: 'Smart Lights', es: 'Iluminación Inteligente', icon: <svg viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0-3.4 10.9V16h6.8v-2.1A6 6 0 0 0 12 3Z" /><path d="M9.6 19h4.8M10.6 21.5h2.8" /></svg> },
    { en: 'Panic Buttons', es: 'Botones de Pánico', icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="13.5" r="7" /><circle cx="12" cy="13.5" r="2.6" /><path d="M12 3v2.2M5.8 5.4 7.4 7M18.2 5.4 16.6 7" /></svg> },
    { en: 'Gunshot Detection', es: 'Detección de Disparos', icon: <svg viewBox="0 0 24 24"><path d="M3 12h2M7.5 7.8v8.4M12 4v16M16.5 8.6v6.8M21 12h-2" /></svg> },
    { en: 'BI Tools', es: 'Herramientas BI', icon: <svg viewBox="0 0 24 24"><path d="M5 19v-7M10 19V6M15 19v-4.5M20 19v-9M3 21h18" /></svg> },
  ]
  return (
    <article data-hero-card="true" className="hll-card hll-card--integrations" style={{ '--cc': '#165dff' } as CSSProperties}>
      <CardHeader title={es ? 'Integraciones' : 'Integrations'}><svg viewBox="0 0 24 24"><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="m8 11 7.5-4M8 13l7.5 4" /></svg></CardHeader>
      <div className="hll-int-grid">{items.map((item) => <div className="hll-int-item" key={item.en}><span>{item.icon}</span><small>{es ? item.es : item.en}</small></div>)}</div>
      <div className="hll-int-more">+ 20 {es ? 'integraciones más' : 'More Integrations'}</div>
    </article>
  )
}

export function moduleCards(es: boolean) {
  return [
    <CadCard key="cad" es={es} />,
    <VideoCard key="video" es={es} />,
    <GisCard key="gis" es={es} />,
    <EventCard key="events" es={es} />,
    <UdeCard key="ude" es={es} />,
    <MobileCard key="mobile" es={es} />,
    <IntegrationsCard key="integrations" es={es} />,
  ]
}
