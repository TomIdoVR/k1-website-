'use client'

/* Solutions — vertical product navigator + app-window visual.
   Ported from the Claude Design project "Kabat One Website"
   (home/solutions2.jsx + home/solutions2.css) — the design's second,
   richer iteration of this section (the first, home/solutions.jsx, was a
   simple card grid; this replaces that earlier port).

   Left: five numbered products in an accordion. Right: a sticky mock of
   that product's console, plus the stationary "one unified platform"
   capability matrix listing the shared platform modules. Scrolling the list
   drives selection via IntersectionObserver; clicking locks that briefly so
   the click wins.

   The design's static K-*.html links map to this app's real localized
   routes. Asset paths map to this repo's /public layout. */

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { pv } from './preview-links'

type Loc = { en: string; es: string }
type LocList = { en: string[]; es: string[] }
const T2 = (en: string, es: string): Loc => ({ en, es })

/* ── shared platform capabilities (stationary layer) ──
   Fixed set, identical for every product. Order is deliberate and must stay
   stable across selections so the grid never reshuffles as you scroll.

   Every product currently lists all ten in its `core` array, so the whole
   matrix renders highlighted — the message is "each solution gives you the
   entire platform." The per-product `core` arrays are kept (rather than
   collapsed into one constant) so a subset can be singled out again without
   restructuring anything. */
const CAPS: { key: string; label: Loc }[] = [
  { key: 'gis', label: T2('GIS', 'GIS') },
  { key: 'video', label: T2('Video', 'Video') },
  { key: 'events', label: T2('Event Management', 'Gestión de Eventos') },
  { key: 'cad', label: T2('CAD / Dispatch', 'CAD / Despacho') },
  { key: 'ai', label: T2('AI', 'IA') },
  { key: 'intg', label: T2('Integrations', 'Integraciones') },
  { key: 'flows', label: T2('Workflows', 'Flujos') },
  { key: 'evid', label: T2('Evidence', 'Evidencia') },
  { key: 'mobile', label: T2('Mobile', 'Móvil') },
  { key: 'bi', label: T2('BI', 'BI') },
]

const CapIcon: Record<string, React.ReactNode> = {
  gis: <><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" /><circle cx="12" cy="9" r="2.4" /></>,
  video: <><circle cx="12" cy="12" r="9" /><path d="M10 8.5l5 3.5-5 3.5z" /></>,
  events: <><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 10h16M9 3v4M15 3v4" /></>,
  ai: <><circle cx="12" cy="12" r="3" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" /></>,
  intg: <><circle cx="6" cy="7" r="2.4" /><circle cx="18" cy="7" r="2.4" /><circle cx="12" cy="17" r="2.4" /><path d="M7.7 8.6 11 14.8M16.3 8.6 13 14.8" /></>,
  flows: <><circle cx="6" cy="8" r="2.2" /><circle cx="18" cy="16" r="2.2" /><path d="M8.2 8H14a3 3 0 0 1 0 6h-2M15.8 16H10" /></>,
  evid: <><path d="M12 3l7 3v6c0 4.5-3 7.2-7 8-4-.8-7-3.5-7-8V6l7-3Z" /><path d="M9.5 12l2 2 3.5-3.5" /></>,
  mobile: <><rect x="7" y="3" width="10" height="18" rx="2.4" /><path d="M11 18h2" /></>,
  bi: <><path d="M5 19V11M10 19V6M15 19v-5M20 19v-9M3 21h18" /></>,
  cad: <><path d="M4.5 13a7.5 7.5 0 0 1 15 0" /><rect x="2.5" y="12.6" width="4" height="6.4" rx="1.7" /><rect x="17.5" y="12.6" width="4" height="6.4" rx="1.7" /><path d="M19.5 19v.8a2.6 2.6 0 0 1-2.6 2.6H14" /></>,
}

const NavIcon: Record<string, React.ReactNode> = {
  map: <><path d="M9 4 3 6.4v13.2L9 17l6 2.6 6-2.4V4l-6 2.4Z" /><path d="M9 4v13M15 6.4v13.2" /></>,
  alert: <><path d="M12 4 2.5 20h19L12 4Z" /><path d="M12 10v5M12 17.6v.4" /></>,
  people: <><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0M16 11a3 3 0 1 0-2-5.2M15.5 20a6 6 0 0 1 5.5-6" /></>,
  layers: <><path d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z" /><path d="m3 12.5 9 4.5 9-4.5" /></>,
  flow: <><circle cx="6" cy="8" r="2.2" /><circle cx="18" cy="16" r="2.2" /><path d="M8.2 8H14a3 3 0 0 1 0 6h-2M15.8 16H10" /></>,
  chart: <><path d="M5 19V11M10 19V6M15 19v-5M20 19v-9M3 21h18" /></>,
  doc: <><path d="M6 3h8l4 4v14H6V3Z" /><path d="M14 3v4h4M9 12h6M9 16h6" /></>,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8" /></>,
  cam: <><rect x="3" y="7" width="11" height="10" rx="2" /><path d="M14 11l7-3v8l-7-3" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="M16.5 16.5 21 21" /></>,
  shield: <path d="M12 3l7 3v6c0 4.5-3 7.2-7 8-4-.8-7-3.5-7-8V6l7-3Z" />,
  signal: <><path d="M9 3h6v18H9z" /><circle cx="12" cy="7.5" r="1.4" /><circle cx="12" cy="12" r="1.4" /><circle cx="12" cy="16.5" r="1.4" /></>,
  route: <><circle cx="6" cy="18" r="2.4" /><circle cx="18" cy="6" r="2.4" /><path d="M8.4 18H14a3.6 3.6 0 0 0 0-7.2h-2.4a3.6 3.6 0 0 1 0-7.2" opacity=".85" /></>,
  list: <path d="M4 6h16M4 12h16M4 18h10" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7.5V12l3.5 2" /></>,
  lock: <><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>,
}

type Rail = {
  tag: Loc; kind: Loc; timer: string
  onScene: string; enRoute: string
  onLabel?: Loc; enLabel?: Loc
  feed: LocList
}
type Product = {
  key: string; n: string; name: string; color: string
  logo: string; img: string; href: string
  short: Loc; body: Loc; caps: Loc[]
  core: string[]
  nav: [string, string][]
  rail: Rail
}

const PRODUCTS: Product[] = [
  {
    key: 'safety', n: '01', name: 'K-Safety', color: '#1858f5',
    /* Purpose-built map (v2.315). This canvas only ever shows the map — the
       nav, rail and title bar around it are DOM — so the art has to agree
       with the rail beside it. `gis.webp` did not: it showed FORCED ENTRY and
       VEHICLE STOP while the rail read "Traffic Accident · Av. Reforma &
       Chapultepec · On scene 2 · En route 3". This one is that incident, with
       U-14/U-03 on scene and U-22/U-07/U-31 inbound.
       Authored inside a central safe area: the canvas is ~1.13 wide but the
       art is 4:3, so object-fit:cover eats ~8% off each side. */
    logo: '/images/icons/k-safety.png', img: '/images/modules/k-safety-map.webp', href: '/k-safety',
    short: T2('Command & Incident Management', 'Comando y Gestión de Incidentes'),
    body: T2('Real-time situational awareness across GIS, video, units and workflows — every incident coordinated from one operational picture.',
      'Conciencia situacional en tiempo real sobre GIS, video, unidades y flujos — cada incidente coordinado desde una sola imagen operativa.'),
    caps: [T2('Live GIS operational picture', 'Imagen operativa GIS en vivo'), T2('Incident coordination & workflows', 'Coordinación de incidentes y flujos'),
      T2('Multi-agency collaboration', 'Colaboración entre agencias'), T2('Operational analytics', 'Analítica operativa')],
    core: ['gis', 'video', 'events', 'cad', 'ai', 'intg', 'flows', 'evid', 'mobile', 'bi'],
    nav: [['Overview', 'map'], ['Incidents', 'alert'], ['Units', 'people'], ['Map Layers', 'layers'], ['Workflows', 'flow'], ['Analytics', 'chart'], ['Reports', 'doc'], ['Settings', 'gear']],
    rail: {
      tag: T2('INCIDENT 2451', 'INCIDENTE 2451'), kind: T2('Traffic Accident', 'Accidente vial'), timer: '04:32',
      onScene: '2', enRoute: '3',
      feed: { en: ['Incident created by 911 call', 'Unit U-07 dispatched'], es: ['Incidente creado por llamada 911', 'Unidad U-07 despachada'] },
    },
  },
  {
    key: 'dispatch', n: '02', name: 'K-Dispatch', color: '#0ea5e9',
    /* Purpose-built call queue (v2.316). Deliberately NOT a map: this panel's
       active nav item is Queue and its four capabilities are intake, CAD, unit
       recommendation and audit trail — none of them geographic — and K-Safety
       directly above it already carries the map. The previous `dispatch.webp`
       was a map that also disagreed with the rail beside it (it read
       "INCIDENT 1842 · FORCED ENTRY" against a rail saying "ACTIVE CALL ·
       Medical Emergency") and repeated U-03 and U-11 twice each.
       Row 1 is the rail's own call; U-12 is the rail feed's recommended unit. */
    logo: '/images/icons/k-dispatch.png', img: '/images/modules/k-dispatch-queue.webp', href: '/k-dispatch',
    short: T2('Emergency Call-Taking & Dispatch', 'Recepción de Emergencias y Despacho'),
    body: T2('From the first emergency call to coordinated field response — intake, CAD, unit recommendation and a full audit trail.',
      'De la primera llamada de emergencia a la respuesta coordinada — recepción, CAD, recomendación de unidades y trazabilidad completa.'),
    caps: [T2('911 call intake', 'Recepción de llamadas 911'), T2('Computer-aided dispatch', 'Despacho asistido por computadora'),
      T2('Unit recommendation & status', 'Recomendación y estado de unidades'), T2('Complete audit trail', 'Trazabilidad completa')],
    core: ['gis', 'video', 'events', 'cad', 'ai', 'intg', 'flows', 'evid', 'mobile', 'bi'],
    nav: [['Queue', 'list'], ['Active Calls', 'alert'], ['Dispatch', 'route'], ['Units', 'people'], ['Protocols', 'flow'], ['Recordings', 'clock'], ['Reports', 'doc'], ['Settings', 'gear']],
    rail: {
      tag: T2('ACTIVE CALL', 'LLAMADA ACTIVA'), kind: T2('Medical Emergency', 'Emergencia médica'), timer: '00:18',
      onScene: '1', enRoute: '2',
      feed: { en: ['Call answered · line 3', 'Unit U-12 recommended'], es: ['Llamada atendida · línea 3', 'Unidad U-12 recomendada'] },
    },
  },
  {
    key: 'video', n: '03', name: 'K-Video', color: '#22b8d4',
    /* Purpose-built canvas (v2.319), completing the set alongside K-Safety and
       K-Dispatch. Matches its own rail: "AI DETECTIONS · Vehicle of interest ·
       Detections 23 · Cameras 128", so the wall shows a plate match against a
       watchlist rather than generic tiles. Authored 4:3 against a ~1.13 canvas,
       so cover crops ~8% per side — content stays in the central safe area. */
    logo: '/images/icons/k-video.png', img: '/images/modules/k-video-wall.webp', href: '/k-video',
    short: T2('Video Management & Analytics', 'Gestión de Video y Analítica'),
    body: T2('Connect live video, analytics, events and investigations across the camera infrastructure you already operate.',
      'Conecta video en vivo, analítica, eventos e investigaciones sobre la infraestructura de cámaras que ya operas.'),
    caps: [T2('Works with existing VMS', 'Funciona con tu VMS actual'), T2('AI detection & search', 'Detección y búsqueda con IA'),
      T2('Event-linked video', 'Video vinculado a eventos'), T2('Investigation tools', 'Herramientas de investigación')],
    core: ['gis', 'video', 'events', 'cad', 'ai', 'intg', 'flows', 'evid', 'mobile', 'bi'],
    nav: [['Live Wall', 'cam'], ['Cameras', 'map'], ['Detections', 'alert'], ['Search', 'search'], ['Investigations', 'shield'], ['Evidence', 'doc'], ['Reports', 'chart'], ['Settings', 'gear']],
    rail: {
      tag: T2('AI DETECTIONS', 'DETECCIONES IA'), kind: T2('Vehicle of interest', 'Vehículo de interés'), timer: '00:06',
      onScene: '23', enRoute: '128', onLabel: T2('Detections', 'Detecciones'), enLabel: T2('Cameras', 'Cámaras'),
      feed: { en: ['Plate match · watchlist', 'Clip linked to case'], es: ['Coincidencia de placa · lista', 'Clip vinculado al caso'] },
    },
  },
  {
    key: 'traffic', n: '04', name: 'K-Traffic', color: '#f59e0b',
    logo: '/images/icons/k-traffic.png', img: '/images/k-traffic-mockup.webp', href: '/k-traffic',
    short: T2('Intelligent Traffic Operations', 'Operaciones Inteligentes de Tráfico'),
    body: T2('Adaptive signal control, violation and incident detection, and emergency vehicle preemption on the same platform.',
      'Control adaptativo de semáforos, detección de infracciones e incidentes, y prioridad para vehículos de emergencia en la misma plataforma.'),
    caps: [T2('Adaptive signal control', 'Control adaptativo de semáforos'), T2('Violation detection', 'Detección de infracciones'),
      T2('Incident detection', 'Detección de incidentes'), T2('Emergency preemption', 'Prioridad de emergencia')],
    core: ['gis', 'video', 'events', 'cad', 'ai', 'intg', 'flows', 'evid', 'mobile', 'bi'],
    nav: [['Corridors', 'route'], ['Signals', 'signal'], ['Violations', 'alert'], ['Incidents', 'map'], ['Preemption', 'flow'], ['Analytics', 'chart'], ['Reports', 'doc'], ['Settings', 'gear']],
    rail: {
      tag: T2('CORRIDOR 07', 'CORREDOR 07'), kind: T2('Congestion detected', 'Congestión detectada'), timer: '02:10',
      onScene: '18', enRoute: '4', onLabel: T2('Signals', 'Semáforos'), enLabel: T2('Alerts', 'Alertas'),
      feed: { en: ['Adaptive plan applied', 'Preemption granted · U-04'], es: ['Plan adaptativo aplicado', 'Prioridad otorgada · U-04'] },
    },
  },
  {
    key: 'connect', n: '05', name: 'K-Connect', color: '#8b5cf6',
    logo: '/images/icons/k-connect.png', img: '/images/k-connect-mockup.webp', href: '/k-connect',
    short: T2('Connected Cameras & Systems', 'Cámaras y Sistemas Conectados'),
    body: T2('Bring private, community and partner cameras into the command center with privacy-first access control.',
      'Integra cámaras privadas, comunitarias y de socios al centro de mando con control de acceso centrado en privacidad.'),
    caps: [T2('Community camera registry', 'Registro de cámaras comunitarias'), T2('Consent-based access', 'Acceso basado en consentimiento'),
      T2('Privacy-first controls', 'Controles centrados en privacidad'), T2('Partner camera onboarding', 'Alta de cámaras de socios')],
    core: ['gis', 'video', 'events', 'cad', 'ai', 'intg', 'flows', 'evid', 'mobile', 'bi'],
    nav: [['Registry', 'list'], ['Partners', 'people'], ['Requests', 'alert'], ['Consent', 'lock'], ['Access Logs', 'clock'], ['Coverage', 'map'], ['Reports', 'doc'], ['Settings', 'gear']],
    rail: {
      tag: T2('CONNECTED', 'CONECTADAS'), kind: T2('Community cameras', 'Cámaras comunitarias'), timer: '—',
      onScene: '412', enRoute: '36', onLabel: T2('Cameras', 'Cámaras'), enLabel: T2('Partners', 'Socios'),
      feed: { en: ['New camera registered', 'Access approved · 24h'], es: ['Nueva cámara registrada', 'Acceso aprobado · 24h'] },
    },
  },
]

/* ── app-window mock (product visual) ── */
function AppMock({ p, es }: { p: Product; es: boolean }) {
  const lang = es ? 'es' : 'en'
  const r = p.rail
  return (
    <div className="sv-app" role="img" aria-label={`${p.name} — ${p.short[lang]}`} style={{ '--pc': p.color } as React.CSSProperties}>
      <div className="sv-app-bar">
        <span className="sv-dot" /><span className="sv-dot" /><span className="sv-dot" />
        <span className="sv-app-title">{p.name}</span>
        <span className="sv-app-tools" aria-hidden="true">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M16.5 16.5 21 21" /></svg>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 16V11a6 6 0 1 0-12 0v5l-1.5 2h15L18 16ZM10 21h4" /></svg>
          <em className="sv-app-avatar">OP</em>
        </span>
      </div>

      <div className="sv-app-body">
        <nav className="sv-app-side" aria-hidden="true">
          {p.nav.map(([label, ic], i) => (
            <span key={label} className={i === 0 ? 'is-on' : ''}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{NavIcon[ic]}</svg>
              <b>{label}</b>
            </span>
          ))}
        </nav>

        <div className="sv-app-canvas">
          <Image src={p.img} alt="" aria-hidden="true" draggable={false} fill sizes="(max-width: 960px) 90vw, 640px" />
          <span className="sv-canvas-veil" aria-hidden="true" />
        </div>

        <aside className="sv-app-rail" aria-hidden="true">
          <div className="sv-rail-card">
            <span className="sv-rail-tag"><i />{r.tag[lang]}</span>
            <b>{r.kind[lang]}</b>
            <em>Av. Reforma &amp; Chapultepec</em>
            <em>10:42 AM</em>
            <span className="sv-rail-pill">{es ? 'PRIORIDAD ALTA' : 'HIGH PRIORITY'}</span>
          </div>
          <div className="sv-rail-card sv-rail-timer">
            <span className="sv-rail-label">{es ? 'CRONÓMETRO' : 'RESPONSE TIMER'}</span>
            <strong>{r.timer}</strong>
            <span className="sv-rail-label">{es ? 'TIEMPO A LLEGADA' : 'TIME TO ARRIVAL'}</span>
          </div>
          <div className="sv-rail-split">
            <div><span className="sv-rail-label">{(r.onLabel ?? T2('On scene', 'En sitio'))[lang]}</span><b className="sv-ok">{r.onScene}</b></div>
            <div><span className="sv-rail-label">{(r.enLabel ?? T2('En route', 'En camino'))[lang]}</span><b className="sv-info">{r.enRoute}</b></div>
          </div>
          <div className="sv-rail-card sv-rail-video">
            <span className="sv-rail-label">{es ? 'VIDEO EN VIVO' : 'LIVE VIDEO'}</span>
            <span className="sv-rail-thumb"><span className="sv-play" /></span>
          </div>
          <div className="sv-rail-card">
            <span className="sv-rail-label">{es ? 'ACTIVIDAD' : 'ACTIVITY FEED'}</span>
            {r.feed[lang].map((f, i) => (
              <span className="sv-feed" key={i}><i />{f}</span>
            ))}
          </div>
        </aside>
      </div>
    </div>
  )
}

export default function Solutions({ es }: { es: boolean }) {
  const lang = es ? 'es' : 'en'
  const [active, setActive] = useState(0)
  const listRef = useRef<HTMLDivElement>(null)
  const lockRef = useRef(0)
  const p = PRODUCTS[active]

  useEffect(() => {
    const host = listRef.current
    if (!host) return
    const items = Array.from(host.querySelectorAll<HTMLElement>('.sv-item'))
    const io = new IntersectionObserver(
      (entries) => {
        if (Date.now() < lockRef.current) return
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          const i = items.indexOf(e.target as HTMLElement)
          if (i > -1) setActive(i)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    items.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="sv" id="solutions">
      <div className="sv-wrap">
        <div className="sv-head">
          <div className="sv-eyebrow">{es ? 'SOLUCIONES' : 'SOLUTIONS'}</div>
          <h2 className="sv-title">
            {es ? <>Despliega lo que necesitas hoy. <em>Expande mañana.</em></>
              : <>Deploy what you need today. <em>Expand tomorrow.</em></>}
          </h2>
          <p className="sv-lede">
            {es
              ? 'Cada solución se construye sobre la misma plataforma unificada, lo que te permite empezar con lo que necesitas hoy y expandirte sin reemplazar tu tecnología.'
              : 'Every solution is built on the same unified platform, allowing you to start with what you need today and expand without replacing your technology.'}
          </p>
        </div>

        <div className="sv-grid">
          <div className="sv-list" ref={listRef}>
            {PRODUCTS.map((x, i) => {
              const on = i === active
              return (
                <div className={`sv-item${on ? ' is-active' : ''}`} key={x.key} style={{ '--pc': x.color } as React.CSSProperties}>
                  {/* Header, visual and summary share one sticky box (mobile
                      only — see .sv-pin) rather than each sticking at its own computed
                      offset. A fixed offset for the visual would need the
                      header's exact rendered height, which isn't constant:
                      .sv-cat wraps to two lines for some products ("Emergency
                      Call-Taking & Dispatch") and one for others, so the
                      header itself isn't a fixed height to offset against. */}
                  <div className="sv-pin">
                    <button
                      className="sv-item-head"
                      aria-expanded={on}
                      aria-controls={`sv-body-${x.key}`}
                      onClick={() => {
                        lockRef.current = Date.now() + 900
                        setActive(i)
                      }}
                    >
                      <span className="sv-num">{x.n}</span>
                      <Image className="sv-mark" src={x.logo} alt="" aria-hidden="true" draggable={false} width={30} height={30} />
                      <span className="sv-names">
                        <span className="sv-name">{x.name}</span>
                        <span className="sv-cat">{x.short[lang]}</span>
                      </span>
                      <svg className="sv-chev" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
                    </button>
                    {on && <div className="sv-visual-inline"><AppMock p={x} es={es} /></div>}
                    {on && <p className="sv-text">{x.body[lang]}</p>}
                  </div>

                  <div className="sv-body" id={`sv-body-${x.key}`} hidden={!on}>
                    <ul className="sv-caps">
                      {x.caps.map((c, k) => (
                        <li key={k} style={{ '--ci': k } as React.CSSProperties}><span className="sv-check" aria-hidden="true">✓</span>{c[lang]}</li>
                      ))}
                    </ul>
                    <Link className="sv-cta" href={pv(x.href)}>
                      {es ? `Explorar ${x.name}` : `Explore ${x.name}`}
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true"><path d="M3 7.5h8.5M7.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="sv-side">
            <div className="sv-stage-wrap"><AppMock p={p} es={es} /></div>

            <div className="sv-foundation">
              <div className="sv-foundation-head">
                <span className="sv-foundation-rule" aria-hidden="true" />
                <span className="sv-foundation-label">{es ? 'UNA PLATAFORMA UNIFICADA' : 'ONE UNIFIED PLATFORM'}</span>
                <span className="sv-foundation-rule" aria-hidden="true" />
              </div>
              <div className="sv-foundation-caps">
                {CAPS.map((c) => {
                  const on = p.core.includes(c.key)
                  return (
                    <span className={`sv-cap${on ? ' is-core' : ''}`} key={c.key}>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{CapIcon[c.key]}</svg>
                      <em>{c.label[lang]}</em>
                    </span>
                  )
                })}
              </div>
            </div>

            <p className="sv-note">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l7 3v6c0 4.5-3 7.2-7 8-4-.8-7-3.5-7-8V6l7-3Z" /><path d="M9.5 12l2 2 3.5-3.5" /></svg>
              {es ? 'Agrega capacidades con el tiempo. Datos, usuarios y flujos permanecen conectados.'
                : 'Add capabilities over time. All data, users and workflows remain connected.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
