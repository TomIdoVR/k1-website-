/* "Every system. One incident. Complete clarity." — the problem → action →
   result section the homepage was missing.

   Built from the reference composition, but as markup rather than as the image
   it was drawn as. Almost everything in that frame is text — headings, labels,
   timestamps, status pills — and baking text into a raster costs four things
   this version keeps: the Spanish page renders in Spanish, the copy is
   selectable and indexable, screen readers get more than an alt string, and
   nothing is upscaled on a 2x display. The reference's smallest labels measure
   ~11px in a 1622px-wide file; landing in a ~1240px container that is ~8px,
   before any device pixel ratio is applied. At 375px the whole frame would
   render 375x224 and every label would be 2-3px, and no crop rescues that
   because the argument *is* the two halves side by side.

   The one genuinely pictorial element — the live camera still — stays a raster,
   which is the right split: photographs as images, interface as markup.

   Both halves render from the same SOURCES array on purpose: the argument is
   not that the fragmented world has different data, it is that it has the
   *same* data with nothing joining it up. Same six sources, same six
   timestamps, on both sides. */

import Image from 'next/image'
import BeforeAfterCompare from './BeforeAfterCompare'

type L = { en: string; es: string }
const t = (v: L, es: boolean) => (es ? v.es : v.en)

/* `short` is what the scattered cards carry, `label` what the event stream
   carries — the left half has less room and does not need the qualifier. */
const SOURCES: { short: L; label: L; time: string; icon: string; color: string }[] = [
  { short: { en: '911 CALL', es: 'LLAMADA 911' }, label: { en: '911 Call', es: 'Llamada 911' }, time: '10:42:11', icon: 'call', color: '#2563eb' },
  { short: { en: 'CAMERAS', es: 'CÁMARAS' }, label: { en: 'Cameras', es: 'Cámaras' }, time: '10:43:02', icon: 'camera', color: '#8b5cf6' },
  { short: { en: 'GIS', es: 'GIS' }, label: { en: 'GIS Location', es: 'Ubicación GIS' }, time: '10:43:15', icon: 'pin', color: '#22c55e' },
  { short: { en: 'RADIO', es: 'RADIO' }, label: { en: 'Radio Comms', es: 'Radio' }, time: '10:43:42', icon: 'radio', color: '#ef4444' },
  { short: { en: 'LPR HIT', es: 'LECTURA LPR' }, label: { en: 'LPR Hit', es: 'Lectura LPR' }, time: '10:44:01', icon: 'car', color: '#2563eb' },
  { short: { en: 'REPORT', es: 'REPORTE' }, label: { en: 'Report Created', es: 'Reporte creado' }, time: '10:45:10', icon: 'doc', color: '#f59e0b' },
]

const CHECKLIST: L[] = [
  { en: 'Incident created', es: 'Incidente creado' },
  { en: 'Initial units dispatched', es: 'Unidades iniciales despachadas' },
  { en: 'Location confirmed (GIS)', es: 'Ubicación confirmada (GIS)' },
  { en: 'Additional units en route', es: 'Unidades adicionales en camino' },
  { en: 'Incident report created', es: 'Reporte de incidente creado' },
]

const UNITS: { id: string; state: L; tone: string }[] = [
  { id: 'UNIT 12', state: { en: 'On Scene', es: 'En sitio' }, tone: 'blue' },
  { id: 'UNIT 07', state: { en: 'En Route', es: 'En camino' }, tone: 'green' },
  { id: 'UNIT 03', state: { en: '2 min away', es: 'a 2 min' }, tone: 'amber' },
]

const STATS: { k: L; v: L; tone?: string }[] = [
  { k: { en: 'RESPONSE UNITS', es: 'UNIDADES' }, v: { en: '3', es: '3' } },
  { k: { en: 'ON SCENE', es: 'EN SITIO' }, v: { en: '1', es: '1' } },
  { k: { en: 'EN ROUTE', es: 'EN CAMINO' }, v: { en: '2', es: '2' } },
  { k: { en: 'ETA', es: 'ETA' }, v: { en: '2 min', es: '2 min' } },
  { k: { en: 'PRIORITY', es: 'PRIORIDAD' }, v: { en: 'High', es: 'Alta' }, tone: 'red' },
  { k: { en: 'STATUS', es: 'ESTADO' }, v: { en: 'Active', es: 'Activo' }, tone: 'green' },
]

const MODULES: { icon: string; label: L; color: string }[] = [
  { icon: 'call', label: { en: '911', es: '911' }, color: '#2563eb' },
  { icon: 'camera', label: { en: 'VIDEO', es: 'VIDEO' }, color: '#8b5cf6' },
  { icon: 'pin', label: { en: 'GIS', es: 'GIS' }, color: '#22c55e' },
  { icon: 'radio', label: { en: 'RADIO', es: 'RADIO' }, color: '#ef4444' },
  { icon: 'car', label: { en: 'LPR', es: 'LPR' }, color: '#2563eb' },
  { icon: 'doc', label: { en: 'REPORTS', es: 'REPORTES' }, color: '#f59e0b' },
  { icon: 'folder', label: { en: 'EVIDENCE', es: 'EVIDENCIA' }, color: '#2563eb' },
  { icon: 'chart', label: { en: 'ANALYTICS', es: 'ANALÍTICA' }, color: '#2563eb' },
]

const I: Record<string, string> = {
  call: 'M3.2 4.1a1.1 1.1 0 0 1 1.1-1h1.7a1.1 1.1 0 0 1 1.1.9l.35 1.8a1.1 1.1 0 0 1-.3 1l-.8.8a8.6 8.6 0 0 0 3.3 3.3l.8-.8a1.1 1.1 0 0 1 1-.3l1.8.35a1.1 1.1 0 0 1 .9 1.1v1.7a1.1 1.1 0 0 1-1 1.1A11.8 11.8 0 0 1 3.2 4.1Z',
  camera: 'M2.4 5.6h7v6.4h-7zM9.4 7.7l4-2v6l-4-2z',
  pin: 'M8 14.4s4.6-4.3 4.6-7.5a4.6 4.6 0 1 0-9.2 0C3.4 10.1 8 14.4 8 14.4Z M8 8.3a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z',
  radio: 'M8 9.6a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2ZM4.7 4.7a4.7 4.7 0 0 0 0 6.6M11.3 4.7a4.7 4.7 0 0 1 0 6.6M2.4 2.4a7.9 7.9 0 0 0 0 11.2M13.6 2.4a7.9 7.9 0 0 1 0 11.2',
  car: 'M2.6 10.9V8.3l1.6-3h7.6l1.6 3v2.6M4.6 10.9h6.8M4.9 12.7a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Zm6.2 0a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z',
  doc: 'M4 2.5h5.2l3.2 3.2v8.3H4zM9.2 2.5v3.4h3.2',
  folder: 'M2.4 4.4h3.9l1.3 1.7h6v7.5h-11.2zM2.4 4.4v9.2',
  chart: 'M2.6 13.4h10.8M4.4 11.2V7.6M7.4 11.2V4.2M10.4 11.2V6.1',
  people: 'M11 13.4v-1.2a2.4 2.4 0 0 0-2.4-2.4H4.8a2.4 2.4 0 0 0-2.4 2.4v1.2M6.7 7.4a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4ZM15.2 13.4v-1.2a2.4 2.4 0 0 0-1.8-2.3M11.4 3.1a2.4 2.4 0 0 1 0 4.6',
  check: 'M3.6 8.4 6.5 11.3l5.9-6',
  x: 'M4.4 4.4l7.2 7.2M11.6 4.4l-7.2 7.2',
  warn: 'M8 2.9 14.6 13H1.4ZM8 6.6v3M8 11.4h0',
  search: 'M7.3 12.2a4.9 4.9 0 1 0 0-9.8 4.9 4.9 0 0 0 0 9.8ZM13.6 13.6l-2.8-2.8',
  bell: 'M12.2 6.4a4.2 4.2 0 1 0-8.4 0c0 4.2-1.6 5.4-1.6 5.4h11.6s-1.6-1.2-1.6-5.4M9.3 14a1.5 1.5 0 0 1-2.6 0',
  grid: 'M2.6 2.6h4.4v4.4H2.6zM9 2.6h4.4v4.4H9zM2.6 9h4.4v4.4H2.6zM9 9h4.4v4.4H9z',
  gear: 'M8 10.1a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2ZM13 9.9a1.2 1.2 0 0 0 .24 1.32l.04.04a1.4 1.4 0 1 1-2 2l-.04-.04a1.2 1.2 0 0 0-1.32-.24 1.2 1.2 0 0 0-.73 1.1v.12a1.4 1.4 0 1 1-2.8 0v-.06a1.2 1.2 0 0 0-.79-1.1 1.2 1.2 0 0 0-1.32.24l-.04.04a1.4 1.4 0 1 1-2-2l.04-.04a1.2 1.2 0 0 0 .24-1.32 1.2 1.2 0 0 0-1.1-.73h-.12a1.4 1.4 0 1 1 0-2.8h.06a1.2 1.2 0 0 0 1.1-.79 1.2 1.2 0 0 0-.24-1.32l-.04-.04a1.4 1.4 0 1 1 2-2l.04.04a1.2 1.2 0 0 0 1.32.24h.06a1.2 1.2 0 0 0 .73-1.1v-.12a1.4 1.4 0 1 1 2.8 0v.06a1.2 1.2 0 0 0 .73 1.1 1.2 1.2 0 0 0 1.32-.24l.04-.04a1.4 1.4 0 1 1 2 2l-.04.04a1.2 1.2 0 0 0-.24 1.32v.06a1.2 1.2 0 0 0 1.1.73h.12a1.4 1.4 0 1 1 0 2.8h-.06a1.2 1.2 0 0 0-1.1.73Z',
  shield: 'M8 2 13.4 4v3.9c0 3.4-2.2 5.6-5.4 6.6-3.2-1-5.4-3.2-5.4-6.6V4Z',
  chev: 'M6.4 3.8 10.6 8l-4.2 4.2',
}

function Ic({ n, size = 16 }: { n: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d={I[n]} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ── left: six sources, orderly and unconnected ──────────────────────────────
   Two columns, three rows, tethered to a central alert by dashed lines that
   each carry a red cross. The previous version ran the same lines to a question
   mark and left "these do not connect" implicit; the crosses state it. */
function Scatter({ es }: { es: boolean }) {
  const HUB = { x: 260, y: 182 }
  const CARD = { w: 170, h: 64 }
  const COL = [8, 342]
  const ROW = [20, 150, 280]
  const POS = [
    { x: COL[0], y: ROW[0] }, { x: COL[1], y: ROW[0] },
    { x: COL[0], y: ROW[1] }, { x: COL[1], y: ROW[1] },
    { x: COL[0], y: ROW[2] }, { x: COL[1], y: ROW[2] },
  ]
  /* from the hub's edge to each card's inner edge, with the cross at the mid-point */
  const LINKS = [
    { d: 'M236 161 L150 84', x: 193, y: 122 },
    { d: 'M284 161 L370 84', x: 327, y: 122 },
    { d: 'M228 182 L178 182', x: 203, y: 182 },
    { d: 'M292 182 L342 182', x: 317, y: 182 },
    { d: 'M236 203 L150 280', x: 193, y: 241 },
    { d: 'M284 203 L370 280', x: 327, y: 241 },
  ]

  return (
    <svg className="ba-scatter" viewBox="0 0 520 500" role="img"
      aria-label={es
        ? 'Seis fuentes del mismo incidente — llamada 911, cámaras, GIS, radio, lectura LPR y reporte — cada una conectada a una alerta central por una línea rota. Debajo, un operador con un nudo enredado sobre la cabeza.'
        : 'Six sources from the same incident — 911 call, cameras, GIS, radio, LPR hit and report — each tied to a central alert by a broken link. Below them, an operator with a tangled knot above their head.'}>
      {LINKS.map((l, i) => (
        <g key={i}>
          <path className="ba-link" d={l.d} />
          <g className="ba-break" transform={`translate(${l.x} ${l.y})`}>
            <circle r="9" />
            <path d="M-3.4 -3.4 L3.4 3.4 M3.4 -3.4 L-3.4 3.4" />
          </g>
        </g>
      ))}

      <g className="ba-hub">
        <circle cx={HUB.x} cy={HUB.y} r="30" />
        <g transform={`translate(${HUB.x - 11} ${HUB.y - 11})`} className="ba-hub-mark">
          <path d={I.warn} />
        </g>
      </g>

      {SOURCES.map((s, i) => (
        <g key={i} transform={`translate(${POS[i].x} ${POS[i].y})`} className="ba-chip">
          <rect width={CARD.w} height={CARD.h} rx="14" />
          <g style={{ color: s.color }} transform="translate(16 18)"><path d={I[s.icon]} stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></g>
          <text className="ba-chip-label" x="46" y="28">{t(s.short, es)}</text>
          <text className="ba-chip-time" x="46" y="47" style={{ fill: s.color }}>{s.time}</text>
        </g>
      ))}

      {/* the operator left holding it together */}
      <g className="ba-figure" transform="translate(260 372)">
        <path className="ba-tangle" d="M-26 6c-11-10 4-19 12-11s-17 14-5 19 24-12 13-20-23 4-14 12" />
        <circle cx="0" cy="52" r="20" />
        <path d="M-34 108a34 34 0 0 1 68 0Z" />
      </g>
    </svg>
  )
}

/* ── right: the same six as one live record ───────────────────────────────── */
function Console({ es }: { es: boolean }) {
  return (
    <div className="uc">
      <div className="uc-rail" aria-hidden="true">
        <span className="uc-rail-mark">K</span>
        {['grid', 'pin', 'car', 'radio', 'doc', 'chart', 'people'].map((n) => (
          <span className="uc-rail-ic" key={n}><Ic n={n} /></span>
        ))}
        <span className="uc-rail-ic uc-rail-ic--last"><Ic n="gear" /></span>
      </div>

      <div className="uc-main">
        <div className="uc-top">
          <strong className="uc-id">{es ? 'INCIDENTE #2451' : 'INCIDENT #2451'}</strong>
          <span className="uc-live"><i />{es ? 'EN VIVO' : 'LIVE'}</span>
          <span className="uc-search" aria-hidden="true">
            <Ic n="search" size={13} />
            {es ? 'Buscar incidente, ubicación…' : 'Search incident, location…'}
          </span>
          <span className="uc-bell" aria-hidden="true"><Ic n="bell" size={15} /><b>2</b></span>
          <span className="uc-avatar" aria-hidden="true" />
        </div>

        <div className="uc-body">
          <div className="uc-col">
            <section className="uc-card">
              <h4 className="uc-card-title">{es ? 'FLUJO DE EVENTOS' : 'EVENT STREAM'}</h4>
              <ul className="uc-stream">
                {SOURCES.map((s, i) => (
                  <li key={i}>
                    <span className="uc-ic" style={{ color: s.color }}><Ic n={s.icon} size={14} /></span>
                    <span className="uc-stream-label">{t(s.label, es)}</span>
                    <span className="uc-time">{s.time}</span>
                    <span className="uc-ok" aria-hidden="true"><Ic n="check" size={11} /></span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="uc-card">
              <h4 className="uc-card-title">
                {es ? 'LISTA DE VERIFICACIÓN' : 'CHECKLIST'}
                <span className="uc-count">5/5</span>
              </h4>
              <ul className="uc-check">
                {CHECKLIST.map((c, i) => (
                  <li key={i}>
                    <span className="uc-ok" aria-hidden="true"><Ic n="check" size={11} /></span>
                    {t(c, es)}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="uc-map">
            <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <rect width="400" height="300" fill="#eef1f6" />
              {/* blocks */}
              <g fill="#e2e7ef">
                {[18, 92, 166, 240, 314].map((x) => [14, 82, 150, 218].map((y) => (
                  <rect key={`${x}-${y}`} x={x} y={y} width="58" height="52" rx="3" />
                )))}
              </g>
              {/* river */}
              <path d="M96 0c14 60-22 96-8 150s34 84 18 150" stroke="#cfe0f2" strokeWidth="16" fill="none" />
              {/* roads */}
              <path d="M0 74h400M0 142h400M0 210h400M82 0v300M156 0v300M230 0v300M304 0v300" stroke="#fff" strokeWidth="7" />
              {/* the route the units are taking */}
              <path d="M64 214 L64 168 L150 168 L196 142 L268 118 L306 96" stroke="#2563eb" strokeWidth="2.6" fill="none" strokeDasharray="7 6" />
              {/* incident */}
              <circle cx="196" cy="142" r="34" fill="#ef4444" opacity="0.14" />
              <circle cx="196" cy="142" r="22" fill="#ef4444" opacity="0.24" />
              <circle cx="196" cy="142" r="13" fill="#ef4444" />
              <path d="M196 136v6M196 147h0" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
            </svg>

            {/* units, as HTML so the labels stay text */}
            {/* Percentages are the route's own vertices in the 400x300 viewBox —
                (306,96), (150,168) and (64,214) — so the markers sit on the line
                rather than near it. */}
            <span className="uc-pin uc-pin--blue" style={{ left: '76.5%', top: '32%' }} aria-hidden="true"><Ic n="car" size={12} /></span>
            <span className="uc-pin uc-pin--blue" style={{ left: '37.5%', top: '56%' }} aria-hidden="true"><Ic n="car" size={12} /></span>
            <span className="uc-pin uc-pin--green" style={{ left: '16%', top: '71.3%' }} aria-hidden="true"><Ic n="car" size={12} /></span>

            <div className="uc-callout">
              <span className="uc-callout-top"><span className="uc-ic" style={{ color: '#2563eb' }}><Ic n="car" size={13} /></span>{es ? 'LECTURA LPR' : 'LPR HIT'}</span>
              <b>ABC123</b>
              <span>Main St &amp; 5th Ave</span>
              <span className="uc-time">10:44:01</span>
            </div>
          </div>

          <div className="uc-col">
            <section className="uc-card uc-card--cam">
              <h4 className="uc-card-title">{es ? 'CÁMARA EN VIVO' : 'LIVE CAMERA'}</h4>
              <div className="uc-cam">
                <Image src="/images/modules/cam-still.webp" alt="" width={640} height={272} sizes="240px" />
                <span className="uc-cam-live"><i />{es ? 'EN VIVO' : 'LIVE'}</span>
                <span className="uc-cam-loc">Main St &amp; 5th Ave</span>
              </div>
            </section>

            <section className="uc-card">
              <h4 className="uc-card-title">
                {es ? 'UNIDADES ACTIVAS' : 'ACTIVE UNITS'}
                <span className="uc-count">{es ? '3 UNIDADES' : '3 UNITS'}</span>
              </h4>
              <ul className="uc-units">
                {UNITS.map((u) => (
                  <li key={u.id}>
                    <span className="uc-ic" style={{ color: '#2563eb' }}><Ic n="car" size={14} /></span>
                    <span className="uc-unit-id">{u.id}</span>
                    <span className={`uc-pill uc-pill--${u.tone}`}>{t(u.state, es)}</span>
                    <span className="uc-chev" aria-hidden="true"><Ic n="chev" size={11} /></span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <div className="uc-stats">
          {STATS.map((s, i) => (
            <div className="uc-stat" key={i}>
              <span className="uc-stat-k">{t(s.k, es)}</span>
              <span className={`uc-stat-v${s.tone ? ` uc-stat-v--${s.tone}` : ''}`}>{t(s.v, es)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function BeforeAfter({ es }: { es: boolean }) {
  return (
    <section className="ba" id="before-after">
      <div className="ba-wrap">
        <div className="ba-head">
          <div className="ba-eyebrow">{es ? 'EL CAMBIO' : 'THE DIFFERENCE'}</div>
          <h2 className="ba-title">
            {es
              ? <>Cada sistema. <em>Un incidente. Claridad total.</em></>
              : <>Every system. <em>One incident. Complete clarity.</em></>}
          </h2>
          <p className="ba-lede">
            {es
              ? 'Kabat One unifica cada fuente de información para que tu equipo vea la imagen completa y actúe más rápido.'
              : 'Kabat One unifies every source of information so your team can see the full picture and act faster.'}
          </p>
        </div>

        <BeforeAfterCompare
          previousLabel={es ? 'Ver la vulnerabilidad' : 'Show the vulnerability'}
          nextLabel={es ? 'Ver la ventaja' : 'Show the advantage'}
        >
          <article className="ba-panel ba-panel--bad">
            <span className="ba-badge ba-badge--red">{es ? 'LA VULNERABILIDAD' : 'THE VULNERABILITY'}</span>
            <h3 className="ba-panel-title">{es ? 'Inteligencia fragmentada' : 'Fragmented Intelligence'}</h3>
            <p className="ba-panel-sub">
              {es
                ? 'Los sistemas desconectados generan vacíos, demoras y riesgo en cada decisión.'
                : 'Disconnected systems create gaps, delays, and risk to every decision.'}
            </p>
            <Scatter es={es} />
            <div className="ba-verdict ba-verdict--bad">
              <span className="ba-verdict-ic" aria-hidden="true"><Ic n="x" size={17} /></span>
              {/* Deliberately not a restatement of the panel heading above it.
                  It mirrors the unified side's verdict clause for clause —
                  "no single picture" against "one picture", "slower decisions,
                  higher risk" against "better decisions, better outcomes" — so
                  the two cards read as the same sentence answered twice.

                  No count. The diagram happens to show six sources, but an
                  agency may run three or thirty, and a verdict that says "six"
                  makes a claim about their estate rather than about the
                  problem. "Separate" also avoids "disconnected" and
                  "fragmented", which the sub and the heading already carry. */}
              <span>
                <b>{es ? 'Sistemas separados. Ninguna imagen común.' : 'Separate systems. No single picture.'}</b>
                <small>{es ? 'Decisiones más lentas. Mayor riesgo.' : 'Slower decisions. Higher risk.'}</small>
              </span>
            </div>
          </article>

          <div className="ba-arrow" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h11M11 5.5 15.5 10 11 14.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <article className="ba-panel ba-panel--good">
            <span className="ba-badge ba-badge--blue">{es ? 'LA VENTAJA' : 'THE ADVANTAGE'}</span>
            <h3 className="ba-panel-title">{es ? 'Mando unificado' : 'Unified Command'}</h3>
            <p className="ba-panel-sub">
              {es
                ? <>Toda la información. Una plataforma.<br /><b>Conectado. En tiempo real.</b></>
                : <>All information. One platform.<br /><b>Connected. In real time.</b></>}
            </p>

            <Console es={es} />

            <ul className="ba-modules">
              {MODULES.map((m) => (
                <li key={m.label.en}>
                  <span className="ba-mod-ic" style={{ color: m.color }}><Ic n={m.icon} size={19} /></span>
                  {t(m.label, es)}
                </li>
              ))}
            </ul>

            <div className="ba-verdict ba-verdict--good">
              <span className="ba-verdict-ic" aria-hidden="true"><Ic n="people" size={17} /></span>
              <span>
                <b>{es ? 'Un equipo. Una imagen.' : 'One team. One picture.'}</b>
                <small>{es ? 'Mejores decisiones. Mejores resultados.' : 'Better decisions. Better outcomes.'}</small>
              </span>
            </div>
          </article>
        </BeforeAfterCompare>
      </div>
    </section>
  )
}
