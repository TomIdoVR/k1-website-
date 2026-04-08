'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

/* ── Module definitions ── */
const MOD_ORDER = ['video', 'dispatch', 'events', 'gis', 'integrations', 'responder', 'citizen', 'ai', 'bi'] as const
type ModKey = (typeof MOD_ORDER)[number]

interface ModuleData {
  color: string
  en: { tab: string; tag: string; name: string; desc: string; feats: string[]; headerName: string; tagline: string }
  es: { tab: string; tag: string; name: string; desc: string; feats: string[]; headerName: string; tagline: string }
  image: string
}

const modules: Record<ModKey, ModuleData> = {
  video: {
    color: '#06b6d4',
    en: { tab: 'Video', tag: 'Video', name: 'Surveillance\n& Analytics', headerName: 'Video & Analytics', tagline: 'AI-powered surveillance across 142 cameras with object detection and alerts', desc: 'Live feeds from all cameras with AI-powered object detection, facial recognition, and behavioral anomaly alerts.', feats: ['142 live camera feeds', 'Object & face detection', 'Behavioral analytics', 'Automatic alert routing'] },
    es: { tab: 'Video', tag: 'Video', name: 'Vigilancia\ny Analítica', headerName: 'Video y Analítica', tagline: 'Vigilancia con IA en 142 cámaras con detección de objetos y alertas', desc: 'Transmisiones en vivo de todas las cámaras con detección de objetos, reconocimiento facial y alertas de anomalías por IA.', feats: ['142 cámaras en vivo', 'Detección de objetos y rostros', 'Analítica de comportamiento', 'Enrutamiento automático de alertas'] },
    image: '/images/modules/video.webp',
  },
  dispatch: {
    color: '#ef4444',
    en: { tab: 'Dispatch', tag: '911 Dispatch', name: 'Intelligent\nDispatch', headerName: '911 & Dispatch', tagline: 'NG911-ready call taking with intelligent unit routing and full CAD integration', desc: 'NG911-ready call taking with intelligent routing, real-time unit dispatch, and full CAD integration.', feats: ['NG911 call taking', 'Intelligent unit routing', 'CAD integration', 'Real-time unit status'] },
    es: { tab: 'Despacho', tag: 'Despacho 911', name: 'Despacho\nInteligente', headerName: '911 y Despacho', tagline: 'Toma de llamadas NG911 con enrutamiento inteligente y CAD integrado', desc: 'Toma de llamadas NG911 con enrutamiento inteligente, despacho de unidades en tiempo real e integración CAD completa.', feats: ['Toma de llamadas NG911', 'Enrutamiento inteligente de unidades', 'Integración CAD', 'Estado de unidades en tiempo real'] },
    image: '/images/modules/dispatch.webp',
  },
  events: {
    color: '#f97316',
    en: { tab: 'Events', tag: 'Events', name: 'Event\nManagement', headerName: 'Event Management', tagline: 'Full incident lifecycle — from detection to resolution with audit trails', desc: 'Unified incident lifecycle — from detection to resolution, with full audit trails and SLA tracking.', feats: ['Incident lifecycle tracking', 'Full audit trails', 'SLA monitoring', 'Multi-agency coordination'] },
    es: { tab: 'Eventos', tag: 'Eventos', name: 'Gestión de\nEventos', headerName: 'Gestión de Eventos', tagline: 'Ciclo de vida completo de incidentes — de la detección a la resolución', desc: 'Ciclo de vida unificado de incidentes — desde la detección hasta la resolución, con rastros de auditoría y seguimiento de SLA.', feats: ['Seguimiento del ciclo de vida', 'Rastros de auditoría completos', 'Monitoreo de SLA', 'Coordinación multi-agencia'] },
    image: '/images/modules/events.webp',
  },
  gis: {
    color: '#3b82f6',
    en: { tab: 'GIS', tag: 'GIS', name: 'Situational\nAwareness', headerName: 'GIS & Situational Awareness', tagline: 'Real-time operational maps with live unit tracking and threat zone overlays', desc: 'Real-time operational map with live unit tracking, geofences, and threat zone overlays across your entire jurisdiction.', feats: ['Live unit GPS tracking', 'Geofence alerts', 'Threat zone overlays', 'CAD-linked incidents'] },
    es: { tab: 'GIS', tag: 'GIS', name: 'Conciencia\nSituacional', headerName: 'GIS y Conciencia Situacional', tagline: 'Mapas operativos en tiempo real con rastreo de unidades y zonas de amenaza', desc: 'Mapa operativo en tiempo real con rastreo de unidades, geo vallas y superposiciones de zonas de amenaza en toda tu jurisdicción.', feats: ['Rastreo GPS de unidades en vivo', 'Alertas de geo valla', 'Superposiciones de zonas de amenaza', 'Incidentes vinculados al CAD'] },
    image: '/images/modules/gis.webp',
  },
  integrations: {
    color: '#22c55e',
    en: { tab: 'Integrations', tag: 'Integrations', name: 'Open API\nPlatform', headerName: 'Integrations — Open API Platform', tagline: 'Open API connecting CAD, RMS, IoT sensors, and smart city infrastructure', desc: 'Connect to CAD, RMS, traffic systems, IoT sensors, and smart city infrastructure through our open API layer.', feats: ['REST & WebSocket APIs', 'CAD / RMS connectors', 'IoT sensor ingestion', 'Smart city mesh'] },
    es: { tab: 'Integraciones', tag: 'Integraciones', name: 'Plataforma\nAPI Abierta', headerName: 'Integraciones — API Abierta', tagline: 'API abierta conectando CAD, RMS, sensores IoT e infraestructura de ciudad inteligente', desc: 'Conecta con CAD, RMS, sistemas de tráfico, sensores IoT e infraestructura de ciudad inteligente a través de nuestra capa API.', feats: ['APIs REST y WebSocket', 'Conectores CAD / RMS', 'Captura de datos de sensores IoT', 'Malla de ciudad inteligente'] },
    image: '/images/modules/integrations.webp',
  },
  responder: {
    color: '#eab308',
    en: { tab: 'Responder', tag: 'Responder Apps', name: 'Field\nOperations', headerName: 'First Responder Apps', tagline: 'iOS & Android field apps for officers, paramedics, and firefighters', desc: 'Mobile apps for officers, paramedics, and firefighters — with maps, assignments, forms, and push-to-talk.', feats: ['iOS & Android native', 'Offline capability', 'Push-to-talk radio', 'Digital incident forms'] },
    es: { tab: 'Respondiente', tag: 'Apps de Respuesta', name: 'Operaciones\nde Campo', headerName: 'Apps de Primera Respuesta', tagline: 'Apps de campo iOS y Android para oficiales, paramédicos y bomberos', desc: 'Apps móviles para oficiales, paramédicos y bomberos — con mapas, asignaciones, formularios y push-to-talk.', feats: ['Nativo iOS y Android', 'Capacidad offline', 'Radio push-to-talk', 'Formularios digitales'] },
    image: '/images/modules/responder.webp',
  },
  citizen: {
    color: '#60a5fa',
    en: { tab: 'Citizens', tag: 'Citizen Apps', name: 'Community\nSafety', headerName: 'Citizen Safety', tagline: 'Public apps for SOS alerts, anonymous reporting, and real-time safety updates', desc: 'Public-facing apps for incident reporting, push alerts, emergency SOS buttons, and real-time safety updates.', feats: ['One-tap SOS button', 'Push safety alerts', 'Anonymous reporting', 'Real-time updates'] },
    es: { tab: 'Ciudadanos', tag: 'Apps Ciudadanas', name: 'Seguridad\nComunitaria', headerName: 'Seguridad Ciudadana', tagline: 'Apps públicas para alertas SOS, reportes anónimos y actualizaciones en tiempo real', desc: 'Apps públicas para reporte de incidentes, alertas push, botones SOS de emergencia y actualizaciones de seguridad en tiempo real.', feats: ['Botón SOS de un toque', 'Alertas push de seguridad', 'Reportes anónimos', 'Actualizaciones en tiempo real'] },
    image: '/images/modules/citizen.webp',
  },
  ai: {
    color: '#06b6d4',
    en: { tab: 'AI Engine', tag: 'AI Engine', name: 'Predictive\nIntelligence', headerName: 'AI Engine', tagline: 'Predictive threat scoring, anomaly detection, and automated decision support', desc: 'Threat scoring, anomaly detection, NLP for 911 calls, and automated decision support across all platform modules.', feats: ['Predictive threat scoring', 'Anomaly detection', 'NLP call analysis', 'Auto decision support'] },
    es: { tab: 'Motor IA', tag: 'Motor IA', name: 'Inteligencia\nPredictiva', headerName: 'Motor de IA', tagline: 'Puntuación predictiva de amenazas, detección de anomalías y soporte automatizado', desc: 'Puntuación de amenazas, detección de anomalías, NLP para llamadas 911 y soporte de decisiones automatizado.', feats: ['Puntuación predictiva de amenazas', 'Detección de anomalías', 'Análisis NLP de llamadas', 'Soporte de decisiones automático'] },
    image: '/images/modules/ai.webp',
  },
  bi: {
    color: '#a855f7',
    en: { tab: 'Analytics', tag: 'Analytics', name: 'Business\nIntelligence', headerName: 'Business Intelligence', tagline: 'KPI dashboards, response time trends, and executive reporting across all modules', desc: 'Operational dashboards, KPI monitoring, trend analysis, and executive reporting across all platform modules.', feats: ['Real-time KPI dashboards', 'Response time trends', 'Resource utilization', 'Executive reporting'] },
    es: { tab: 'Analítica', tag: 'Analítica', name: 'Inteligencia\nde Negocios', headerName: 'Inteligencia de Negocios', tagline: 'Dashboards KPI, tendencias de respuesta y reportes ejecutivos en todos los módulos', desc: 'Dashboards operativos, monitoreo de KPIs, análisis de tendencias y reportes ejecutivos en todos los módulos.', feats: ['Dashboards KPI en tiempo real', 'Tendencias de tiempo de respuesta', 'Utilización de recursos', 'Reportes ejecutivos'] },
    image: '/images/modules/bi.webp',
  },
}

/* ── Tab icons (inline SVGs) ── */
const tabIcons: Record<ModKey, React.ReactNode> = {
  video: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><rect x="0.5" y="2" width="7.5" height="6" rx="1" stroke="currentColor" strokeWidth="1.2"/><path d="M8 4.8l3.5-2v5.5L8 6.2" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
  ),
  dispatch: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 2c0-.4.3-.7.7-.7h1.1c.3 0 .6.2.7.6l.4 1.8c0 .3-.1.6-.4.7L4 4.9C4.6 6.2 5.8 7.4 7.1 8l.5-.7c.2-.3.5-.4.7-.4l1.8.4c.3.1.6.4.6.7v1.1c0 .4-.3.7-.7.7C4 9.7 2 7.7 2 2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
  ),
  events: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M6 1v2M6 9v2M1 6h2M9 6h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.2"/></svg>
  ),
  gis: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="4.5" r="2.5" stroke="currentColor" strokeWidth="1.2"/><path d="M6 7v4M4.5 11h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
  ),
  integrations: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><rect x="0.5" y="4" width="3" height="2.5" rx="0.5" stroke="currentColor" strokeWidth="1.1"/><rect x="8.5" y="2" width="3" height="2.5" rx="0.5" stroke="currentColor" strokeWidth="1.1"/><rect x="8.5" y="7.5" width="3" height="2.5" rx="0.5" stroke="currentColor" strokeWidth="1.1"/><path d="M3.5 5.25h2.5l2.5-2M3.5 5.25h2.5l2.5 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/></svg>
  ),
  responder: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M6 1L7.2 4H11L8.2 6l1.1 3.5L6 7.8 2.7 9.5 3.8 6 1 4h3.8L6 1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
  ),
  citizen: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="3.5" r="2" stroke="currentColor" strokeWidth="1.2"/><path d="M1.5 11c0-2.5 2-4.5 4.5-4.5S10.5 8.5 10.5 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
  ),
  ai: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.2"/><circle cx="1.5" cy="2" r="1" fill="currentColor" opacity="0.6"/><circle cx="10.5" cy="2" r="1" fill="currentColor" opacity="0.6"/><circle cx="1.5" cy="10" r="1" fill="currentColor" opacity="0.6"/><circle cx="10.5" cy="10" r="1" fill="currentColor" opacity="0.6"/><path d="M2.5 3L4.5 5M7.5 7l2 2M9.5 3L7.5 5M4.5 7L2.5 9" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/></svg>
  ),
  bi: (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><rect x="0.5" y="7.5" width="2.5" height="4" rx="0.5" fill="currentColor" opacity="0.5"/><rect x="4.5" y="4.5" width="2.5" height="7" rx="0.5" fill="currentColor" opacity="0.7"/><rect x="8.5" y="1.5" width="2.5" height="10" rx="0.5" fill="currentColor"/></svg>
  ),
}

/* ── Integration partners (real logos) ── */
const partners = [
  { name: 'Milestone Systems', cat: 'VMS', logo: '/images/partners/milestone.svg' },
  { name: 'Genetec', cat: 'VMS, Access Control', logo: '/images/partners/genetec.svg' },
  { name: 'RapidSOS', cat: 'Emergency Data', logo: '/images/partners/rapidsos.svg' },
  { name: 'Carbyne', cat: 'NG911', logo: '/images/partners/carbyne.png' },
  { name: 'Corsight', cat: 'Face Recognition', logo: '/images/partners/corsight.svg' },
  { name: 'Motorola Solutions', cat: 'Radio, PTT', logo: '/images/partners/motorola.svg' },
  { name: 'iPro', cat: 'IP Cameras', logo: '/images/partners/ipro.svg' },
]

const INTERVAL = 3000

export default function ModulesSection({ es = false }: { es?: boolean }) {
  const [active, setActive] = useState<ModKey>('video')
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  /* ── Touch / swipe handling for mobile ── */
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)
  const touchDeltaX = useRef(0)
  const isSwiping = useRef(false)
  const [swipeOffset, setSwipeOffset] = useState(0)
  const panelsContainerRef = useRef<HTMLDivElement>(null)

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
    touchDeltaX.current = 0
    isSwiping.current = false
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const dx = e.touches[0].clientX - touchStartX.current
    const dy = e.touches[0].clientY - touchStartY.current

    // Lock into horizontal swipe once we detect it
    if (!isSwiping.current && Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      isSwiping.current = true
    }

    if (isSwiping.current) {
      e.preventDefault()
      touchDeltaX.current = dx
      setSwipeOffset(dx)
    }
  }, [])

  const handleTouchEnd = useCallback(() => {
    if (!isSwiping.current) {
      setSwipeOffset(0)
      return
    }
    const threshold = 50
    if (touchDeltaX.current < -threshold) {
      // swipe left → next
      setActive(prev => {
        const idx = MOD_ORDER.indexOf(prev)
        return MOD_ORDER[(idx + 1) % MOD_ORDER.length]
      })
    } else if (touchDeltaX.current > threshold) {
      // swipe right → prev
      setActive(prev => {
        const idx = MOD_ORDER.indexOf(prev)
        return MOD_ORDER[(idx - 1 + MOD_ORDER.length) % MOD_ORDER.length]
      })
    }
    setSwipeOffset(0)
    isSwiping.current = false
  }, [])

  const advance = useCallback(() => {
    setActive(prev => {
      const idx = MOD_ORDER.indexOf(prev)
      return MOD_ORDER[(idx + 1) % MOD_ORDER.length]
    })
  }, [])

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(advance, INTERVAL)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [paused, advance])

  const jumpTo = (mod: ModKey) => {
    setActive(mod)
    if (timerRef.current) clearInterval(timerRef.current)
    if (!paused) {
      timerRef.current = setInterval(advance, INTERVAL)
    }
  }

  const goPrev = () => {
    setActive(prev => {
      const idx = MOD_ORDER.indexOf(prev)
      return MOD_ORDER[(idx - 1 + MOD_ORDER.length) % MOD_ORDER.length]
    })
    if (timerRef.current) clearInterval(timerRef.current)
    if (!paused) {
      timerRef.current = setInterval(advance, INTERVAL)
    }
  }

  const goNext = () => {
    setActive(prev => {
      const idx = MOD_ORDER.indexOf(prev)
      return MOD_ORDER[(idx + 1) % MOD_ORDER.length]
    })
    if (timerRef.current) clearInterval(timerRef.current)
    if (!paused) {
      timerRef.current = setInterval(advance, INTERVAL)
    }
  }

  const activeIdx = MOD_ORDER.indexOf(active)
  const m = modules[active]
  const c = es ? m.es : m.en
  const sectionLabel = es ? 'MÓDULOS DE LA PLATAFORMA' : 'PLATFORM MODULES'

  return (
    <section
      className="ms-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="ms-inner">
        {/* Section label */}
        <div className="ms-label">{sectionLabel}</div>

        {/* Carousel header with prev/next arrows */}
        <div className="ms-carousel-header">
          <button className="ms-arrow" onClick={goPrev} aria-label={es ? 'Módulo anterior' : 'Previous module'}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M11 14L7 9l4-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div className="ms-carousel-info">
            <div className="ms-carousel-counter">
              {String(activeIdx + 1).padStart(2, '0')} / {String(MOD_ORDER.length).padStart(2, '0')}
            </div>
            <div className="ms-carousel-name">{c.headerName}</div>
            <div className="ms-carousel-tagline">{c.tagline}</div>
          </div>
          <button className="ms-arrow" onClick={goNext} aria-label={es ? 'Siguiente módulo' : 'Next module'}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M7 14l4-5-4-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        {/* Tab row */}
        <div className="ms-tabs-row">
          <div className="ms-tabs" role="tablist" aria-label="Platform modules">
            {MOD_ORDER.map((mod) => (
              <button
                key={mod}
                className={`ms-tab${active === mod ? ' ms-tab-active' : ''}`}
                role="tab"
                aria-selected={active === mod}
                id={`ms-tab-${mod}`}
                onClick={() => jumpTo(mod)}
                style={{ '--tc': modules[mod].color } as React.CSSProperties}
              >
                {tabIcons[mod]}
                {es ? modules[mod].es.tab : modules[mod].en.tab}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop viewer */}
        <div className="ms-viewer ms-viewer-desktop">
          {/* Header bar */}
          <div className="ms-viewer-header">
            <div className="ms-viewer-left">
              <div className="ms-viewer-dots">
                <span style={{ background: '#FF5F57' }} />
                <span style={{ background: '#FFBD2E' }} />
                <span style={{ background: '#28C840' }} />
              </div>
              <span className="ms-viewer-title">{c.tag}</span>
            </div>
            <div className="ms-viewer-counter">
              {String(activeIdx + 1).padStart(2, '0')} / {String(MOD_ORDER.length).padStart(2, '0')}
            </div>
          </div>

          {/* Panel */}
          <div className="ms-panels">
            {MOD_ORDER.map((mod) => {
              const md = modules[mod]
              const mc = es ? md.es : md.en
              const isActive = active === mod
              return (
                <div
                  key={mod}
                  className={`ms-panel${isActive ? ' ms-panel-active' : ''}`}
                  role="tabpanel"
                  aria-labelledby={`ms-tab-${mod}`}
                  id={`ms-panel-${mod}`}
                >
                  <div className="ms-panel-left" style={{ '--pc': md.color } as React.CSSProperties}>
                    <div className="ms-tag">{mc.tag}</div>
                    <div className="ms-name">{mc.name.split('\n').map((line, i) => (
                      <span key={i}>{line}{i === 0 && <br />}</span>
                    ))}</div>
                    <p className="ms-desc">{mc.desc}</p>
                    <ul className="ms-feats">
                      {mc.feats.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>
                  <div className="ms-panel-right">
                    {mod === 'integrations' ? (
                      <div className="ms-partners">
                        <div className="ms-partners-header">
                          <span className="ms-partners-title">{es ? 'HUB DE INTEGRACIÓN' : 'INTEGRATION HUB'}</span>
                          <span className="ms-partners-sep">|</span>
                          <span className="ms-partners-sub">{es ? 'SOCIOS TECNOLÓGICOS' : 'PARTNER MARKETPLACE'}</span>
                        </div>
                        <div className="ms-partners-grid">
                          {partners.map((p) => (
                            <div key={p.name} className="ms-partner-card">
                              <div className="ms-partner-logo">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={p.logo} alt={p.name} />
                              </div>
                              <div className="ms-partner-name">{p.name}</div>
                              <div className="ms-partner-cat">{p.cat}</div>
                            </div>
                          ))}
                        </div>
                        <div className="ms-partners-footer">
                          <span>API SOLUTIONS</span>
                          <span className="ms-partners-sep">|</span>
                          <span>OPEN API: {'{ }'} REST &amp; ⚡ WebSocket</span>
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={md.image}
                        alt={mc.name.replace('\n', ' ')}
                        fill
                        sizes="(max-width: 768px) 100vw, 780px"
                        style={{ objectFit: 'cover' }}
                        priority={mod === 'video'}
                      />
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Dot navigation */}
          <div className="ms-dots">
            {MOD_ORDER.map((mod) => (
              <button
                key={mod}
                className={`ms-dot${active === mod ? ' ms-dot-active' : ''}`}
                style={{ '--dc': modules[mod].color } as React.CSSProperties}
                onClick={() => jumpTo(mod)}
                aria-label={es ? modules[mod].es.tab : modules[mod].en.tab}
              />
            ))}
          </div>
        </div>

        {/* Mobile swipeable carousel */}
        <div
          className="ms-mobile-carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          ref={panelsContainerRef}
        >
          <div
            className="ms-mobile-track"
            style={{
              transform: `translateX(calc(-${activeIdx * 100}% + ${swipeOffset}px))`,
              transition: swipeOffset !== 0 ? 'none' : 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {MOD_ORDER.map((mod) => {
              const md = modules[mod]
              const mc = es ? md.es : md.en
              return (
                <div key={mod} className="ms-mobile-card" style={{ '--mc': md.color } as React.CSSProperties}>
                  <div className="ms-mobile-card-inner">
                    {/* Image / Partner section */}
                    <div className="ms-mobile-card-visual">
                      {mod === 'integrations' ? (
                        <div className="ms-partners ms-partners-mobile">
                          <div className="ms-partners-grid">
                            {partners.map((p) => (
                              <div key={p.name} className="ms-partner-card">
                                <div className="ms-partner-logo">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img src={p.logo} alt={p.name} />
                                </div>
                                <div className="ms-partner-name">{p.name}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Image
                          src={md.image}
                          alt={mc.name.replace('\n', ' ')}
                          fill
                          sizes="85vw"
                          style={{ objectFit: 'cover' }}
                        />
                      )}
                    </div>
                    {/* Text content */}
                    <div className="ms-mobile-card-body">
                      <h3 className="ms-mobile-card-title">{mc.headerName}</h3>
                      <p className="ms-mobile-card-desc">{mc.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mobile dot indicators */}
          <div className="ms-mobile-dots">
            {MOD_ORDER.map((mod, i) => (
              <button
                key={mod}
                className={`ms-mobile-dot${active === mod ? ' ms-mobile-dot-active' : ''}`}
                onClick={() => jumpTo(mod)}
                aria-label={es ? modules[mod].es.tab : modules[mod].en.tab}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .ms-section {
          position: relative;
          z-index: 1;
          padding: 60px 0 40px;
        }
        .ms-inner {
          max-width: 1060px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .ms-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--cyan);
          text-align: center;
          margin-bottom: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        .ms-label::before,
        .ms-label::after {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: var(--cyan);
          opacity: 0.5;
        }

        /* ── Carousel Header ── */
        .ms-carousel-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding: 0 24px;
          margin-bottom: 28px;
        }
        .ms-arrow {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: var(--dim);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .ms-arrow:hover {
          background: rgba(255,255,255,0.09);
          color: var(--white);
          border-color: rgba(255,255,255,0.2);
        }
        .ms-carousel-info {
          text-align: center;
          flex: 1;
          max-width: 560px;
          min-width: 0;
        }
        .ms-carousel-counter {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: var(--muted);
          margin-bottom: 10px;
        }
        .ms-carousel-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(26px, 3.5vw, 40px);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          color: var(--white);
          margin-bottom: 8px;
          line-height: 1;
        }
        .ms-carousel-tagline {
          font-size: 14px;
          color: var(--dim);
          line-height: 1.5;
        }

        /* ── Tabs ── */
        .ms-tabs-row {
          display: flex;
          justify-content: flex-start;
          padding: 0 24px;
          margin-bottom: 32px;
          overflow-x: auto;
          overflow-y: visible;
          scrollbar-width: none;
        }
        .ms-tabs-row::-webkit-scrollbar { display: none; }
        .ms-tabs {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: nowrap;
          justify-content: center;
          padding: 8px 16px;
          margin: 0 auto;
          min-width: fit-content;
        }
        .ms-tab {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 18px;
          border-radius: 20px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--muted);
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
          position: relative;
          overflow: hidden;
        }
        .ms-tab:hover {
          color: var(--dim);
          border-color: rgba(255,255,255,0.15);
        }
        .ms-tab-active {
          color: #fff;
          border-color: color-mix(in srgb, var(--tc) 50%, transparent);
          background: color-mix(in srgb, var(--tc) 25%, transparent);
        }
        .ms-tab-active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 100%;
          background: var(--tc);
          transform: scaleX(0);
          transform-origin: left;
          border-radius: 0 0 20px 20px;
          animation: ms-tab-progress 3s linear forwards;
        }
        @keyframes ms-tab-progress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        /* ── Viewer chrome ── */
        .ms-viewer {
          background: rgba(11,18,40,0.85);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
        }
        .ms-viewer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 16px;
          border-bottom: 1px solid var(--border);
          background: rgba(11,18,40,0.95);
        }
        .ms-viewer-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .ms-viewer-dots {
          display: flex;
          gap: 6px;
        }
        .ms-viewer-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .ms-viewer-title {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: var(--dim);
          letter-spacing: 0.08em;
        }
        .ms-viewer-counter {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 0.1em;
        }

        /* ── Panels ── */
        .ms-panels {
          position: relative;
          height: 420px;
        }
        .ms-panel {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: 280px 1fr;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease, transform 0.35s ease;
          transform: translateY(6px);
        }
        .ms-panel-active {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }
        .ms-panel-left {
          background: rgba(11,18,40,0.95);
          border-right: 1px solid rgba(255,255,255,0.05);
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 0;
          overflow: hidden;
        }
        .ms-tag {
          display: inline-flex;
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #fff;
          background: color-mix(in srgb, var(--pc) 25%, transparent);
          border: 1px solid color-mix(in srgb, var(--pc) 40%, transparent);
          border-radius: 20px;
          padding: 3px 10px;
          margin-bottom: 14px;
          width: fit-content;
        }
        .ms-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: 30px;
          line-height: 1;
          text-transform: uppercase;
          color: var(--white);
          margin-bottom: 14px;
          letter-spacing: 0.01em;
        }
        .ms-desc {
          font-size: 12px;
          font-weight: 400;
          color: var(--dim);
          line-height: 1.65;
          margin-bottom: 18px;
        }
        .ms-feats {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 7px;
          padding: 0;
          margin: 0;
        }
        .ms-feats li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: var(--dim);
        }
        .ms-feats li::before {
          content: '';
          display: block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--pc);
          flex-shrink: 0;
        }

        /* ── Right panel (image) ── */
        .ms-panel-right {
          background: rgba(4,8,20,0.96);
          overflow: hidden;
          position: relative;
        }
        .ms-screenshot {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── Dots ── */
        .ms-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          padding: 16px 0;
          border-top: 1px solid var(--border);
        }
        .ms-dot {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: none;
          background: transparent;
          cursor: pointer;
          padding: 0;
          transition: background 0.2s, box-shadow 0.2s;
          position: relative;
        }
        .ms-dot::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          background: transparent;
          transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
        }
        .ms-dot:hover::after {
          border-color: rgba(255,255,255,0.3);
        }
        .ms-dot-active::after {
          background: var(--dc);
          border-color: var(--dc);
          box-shadow: 0 0 8px var(--dc);
        }

        /* ── Partner grid (integrations panel) ── */
        .ms-partners {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: rgba(4,8,20,0.96);
          padding: 16px 20px;
        }
        .ms-partners-header {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--dim);
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ms-partners-title { color: var(--white); }
        .ms-partners-sub { font-weight: 500; color: var(--muted); }
        .ms-partners-sep { color: rgba(255,255,255,0.15); }
        .ms-partners-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          flex: 1;
        }
        .ms-partner-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 12px 8px;
          transition: border-color 0.2s, background 0.2s;
        }
        .ms-partner-card:hover {
          border-color: rgba(34,197,94,0.3);
          background: rgba(34,197,94,0.04);
        }
        .ms-partner-logo {
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ms-partner-logo img {
          max-height: 32px;
          max-width: 100px;
          width: auto;
          filter: brightness(0) invert(1);
          opacity: 0.85;
        }
        .ms-partner-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: var(--white);
          text-align: center;
          line-height: 1.2;
        }
        .ms-partner-cat {
          font-family: 'DM Mono', monospace;
          font-size: 8.5px;
          letter-spacing: 0.05em;
          color: var(--muted);
          background: rgba(255,255,255,0.05);
          border-radius: 8px;
          padding: 2px 8px;
          text-align: center;
        }
        .ms-partners-footer {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--dim);
          text-align: center;
          padding-top: 12px;
          margin-top: auto;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        /* ── Mobile carousel (hidden on desktop) ── */
        .ms-mobile-carousel {
          display: none;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          /* Hide desktop viewer, show mobile carousel */
          .ms-viewer-desktop {
            display: none;
          }
          .ms-carousel-header {
            margin-bottom: 20px;
          }
          .ms-tabs-row {
            display: none;
          }
          .ms-mobile-carousel {
            display: block;
            overflow: hidden;
            position: relative;
            touch-action: pan-y;
          }
          .ms-mobile-track {
            display: flex;
            will-change: transform;
          }
          .ms-mobile-card {
            flex: 0 0 100%;
            width: 100%;
            padding: 0 20px;
            box-sizing: border-box;
          }
          .ms-mobile-card-inner {
            background: rgba(11,18,40,0.85);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 16px;
            overflow: hidden;
          }
          .ms-mobile-card-visual {
            position: relative;
            height: 200px;
            overflow: hidden;
          }
          .ms-mobile-card-body {
            padding: 20px 18px 24px;
          }
          .ms-mobile-card-title {
            font-family: 'Barlow Condensed', sans-serif;
            font-size: 22px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 0.02em;
            color: var(--white);
            margin: 0 0 10px;
            line-height: 1.1;
          }
          .ms-mobile-card-desc {
            font-size: 14px;
            color: var(--dim);
            line-height: 1.6;
            margin: 0;
          }

          /* Mobile dots */
          .ms-mobile-dots {
            display: flex;
            justify-content: center;
            gap: 6px;
            padding: 20px 0 8px;
          }
          .ms-mobile-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            border: none;
            background: rgba(255,255,255,0.15);
            cursor: pointer;
            padding: 0;
            transition: background 0.3s, transform 0.3s, width 0.3s;
          }
          .ms-mobile-dot-active {
            width: 24px;
            border-radius: 4px;
            background: var(--cyan);
          }

          /* Mobile partner grid adjustments */
          .ms-partners-mobile {
            padding: 12px;
            height: 100%;
          }
          .ms-partners-mobile .ms-partners-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
            height: 100%;
          }
          .ms-partners-mobile .ms-partner-card {
            padding: 8px 4px;
          }
          .ms-partners-mobile .ms-partner-logo img {
            max-height: 22px;
            max-width: 60px;
          }
          .ms-partners-mobile .ms-partner-name {
            font-size: 8.5px;
          }
        }
      `}</style>
    </section>
  )
}
