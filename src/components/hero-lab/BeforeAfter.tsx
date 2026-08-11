/* "Every system. One incident. Complete clarity." — the problem → action →
   result section the homepage was missing.

   Both sides render from the same SOURCES array on purpose: the argument is not
   that the fragmented world has different data, it is that it has the *same*
   data with nothing joining it up. Same six sources, same six timestamps, on
   both sides. Left they orbit a question mark; right they are one record.

   Left is SVG because it is a diagram — scattered positions and connectors need
   to hold their relationships at any width. Right is HTML because it is a UI
   mockup and genuinely is a list, so it should be marked up as one. */

type L = { en: string; es: string }
const t = (v: L, es: boolean) => (es ? v.es : v.en)

type Kind = 'call' | 'camera' | 'pin' | 'radio' | 'car' | 'doc'

const SOURCES: { label: L; time: string; icon: Kind; color: string }[] = [
  { label: { en: '911 Call', es: 'Llamada 911' }, time: '10:42:11', icon: 'call', color: '#2563eb' },
  { label: { en: 'Cameras', es: 'Cámaras' }, time: '10:43:02', icon: 'camera', color: '#8b5cf6' },
  { label: { en: 'GIS', es: 'GIS' }, time: '10:43:15', icon: 'pin', color: '#22c55e' },
  { label: { en: 'Radio', es: 'Radio' }, time: '10:43:42', icon: 'radio', color: '#f97316' },
  { label: { en: 'LPR Hit', es: 'Lectura LPR' }, time: '10:44:01', icon: 'car', color: '#2563eb' },
  { label: { en: 'Report', es: 'Reporte' }, time: '10:45:10', icon: 'doc', color: '#f59e0b' },
]

const PATHS: Record<Kind | 'people', string> = {
  call: 'M3.2 4.1a1.1 1.1 0 0 1 1.1-1h1.7a1.1 1.1 0 0 1 1.1.9l.35 1.8a1.1 1.1 0 0 1-.3 1l-.8.8a8.6 8.6 0 0 0 3.3 3.3l.8-.8a1.1 1.1 0 0 1 1-.3l1.8.35a1.1 1.1 0 0 1 .9 1.1v1.7a1.1 1.1 0 0 1-1 1.1A11.8 11.8 0 0 1 3.2 4.1Z',
  camera: 'M2.4 5.6h7v6.4h-7zM9.4 7.7l4-2v6l-4-2z',
  pin: 'M8 14.4s4.6-4.3 4.6-7.5a4.6 4.6 0 1 0-9.2 0C3.4 10.1 8 14.4 8 14.4Z M8 8.3a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z',
  radio: 'M8 9.6a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2ZM4.7 4.7a4.7 4.7 0 0 0 0 6.6M11.3 4.7a4.7 4.7 0 0 1 0 6.6M2.4 2.4a7.9 7.9 0 0 0 0 11.2M13.6 2.4a7.9 7.9 0 0 1 0 11.2',
  car: 'M2.6 10.9V8.3l1.6-3h7.6l1.6 3v2.6M4.6 10.9h6.8M4.9 12.7a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Zm6.2 0a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z',
  doc: 'M4 2.5h5.2l3.2 3.2v8.3H4zM9.2 2.5v3.4h3.2',
  people: 'M11 13.4v-1.2a2.4 2.4 0 0 0-2.4-2.4H4.8a2.4 2.4 0 0 0-2.4 2.4v1.2M6.7 7.4a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4ZM15.2 13.4v-1.2a2.4 2.4 0 0 0-1.8-2.3M11.4 3.1a2.4 2.4 0 0 1 0 4.6',
}

function Glyph({ kind, size = 16 }: { kind: Kind | 'people'; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d={PATHS[kind]} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* Six cards in a clean two-column grid, each tethered to a central question
   mark by a dashed line that leads nowhere. Aligned rather than scattered —
   the point is not that the sources are messy, it is that they are orderly and
   still unconnected. Fixed viewBox so the arrangement holds as the column
   narrows. */
function DisconnectedDiagram({ es }: { es: boolean }) {
  const COL_L = 0, COL_R = 252
  const ROWS = [16, 116, 216]
  const CARDS = [
    { x: COL_L, y: ROWS[0] }, { x: COL_R, y: ROWS[0] },
    { x: COL_L, y: ROWS[1] }, { x: COL_R, y: ROWS[1] },
    { x: COL_L, y: ROWS[2] }, { x: COL_R, y: ROWS[2] },
  ]
  const HUB = { x: 174, y: 133, w: 46, h: 46 }
  /* Left column links leave the hub's left edge, right column its right edge,
     each curving out to the vertical centre of its card. */
  const LINKS = [
    'M174 146 C 150 132, 152 60, 142 46',
    'M220 146 C 244 132, 242 60, 252 46',
    'M174 156 C 158 156, 156 146, 142 146',
    'M220 156 C 236 156, 238 146, 252 146',
    'M174 166 C 150 180, 152 232, 142 246',
    'M220 166 C 244 180, 242 232, 252 246',
  ]

  return (
    <svg className="ba-svg" viewBox="0 0 394 400" role="img"
      aria-label={es
        ? 'Seis fuentes del mismo incidente — llamada 911, cámaras, GIS, radio, lectura LPR y reporte — dispersas alrededor de un signo de interrogación, sin conectarse entre sí.'
        : 'Six sources from the same incident — 911 call, cameras, GIS, radio, LPR hit and report — scattered around a question mark, with nothing joining them together.'}>
      {LINKS.map((d, i) => <path key={i} className="ba-link" d={d} />)}

      <g className="ba-hub">
        <rect x={HUB.x} y={HUB.y} width={HUB.w} height={HUB.h} rx="11" />
        <text x={HUB.x + HUB.w / 2} y={HUB.y + 31} textAnchor="middle">?</text>
      </g>

      {SOURCES.map((s, i) => (
        <g key={i} transform={`translate(${CARDS[i].x} ${CARDS[i].y})`} className="ba-chip">
          <rect width="142" height="60" rx="12" />
          <g style={{ color: s.color }} transform="translate(14 16)"><Glyph kind={s.icon} /></g>
          <text className="ba-chip-label" x="40" y="26">{t(s.label, es).toUpperCase()}</text>
          <text className="ba-chip-time" x="40" y="44">{s.time}</text>
        </g>
      ))}

      {/* The operator left holding it */}
      <g className="ba-figure" transform="translate(197 316)">
        <path className="ba-tangle" d="M-22 0c-9-8 3-16 10-9s-14 12-4 16 20-10 11-17-19 3-12 10" />
        <circle cx="0" cy="36" r="17" />
        <path d="M-30 84a30 30 0 0 1 60 0Z" />
      </g>
    </svg>
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

        <div className="ba-compare">
          {/* ── before ── */}
          <div className="ba-side">
            <span className="ba-pill">{es ? 'DESCONECTADO' : 'DISCONNECTED'}</span>
            <p className="ba-sub">
              {es ? <>Sistemas distintos. Datos distintos.<br />Sin una única fuente de verdad.</>
                  : <>Different systems. Different data.<br />No single source of truth.</>}
            </p>
            <DisconnectedDiagram es={es} />
          </div>

          <div className="ba-arrow" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h11M11 5.5 15.5 10 11 14.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* ── after ── */}
          <div className="ba-side">
            <span className="ba-pill ba-pill-brand">{es ? 'CON KABAT ONE' : 'WITH KABAT ONE'}</span>
            <p className="ba-sub">
              {es ? <>Un incidente. Toda la información.<br /><b>Conectado. En tiempo real.</b></>
                  : <>One incident. All information.<br /><b>Connected. In real time.</b></>}
            </p>

            <div className="ba-record">
              <div className="ba-record-head">
                <span className="ba-record-mark" aria-hidden="true">K</span>
                <span className="ba-record-id">{es ? 'INCIDENTE #2451' : 'INCIDENT #2451'}</span>
                <span className="ba-record-live"><i />{es ? 'EN VIVO' : 'LIVE'}</span>
              </div>

              <div className="ba-record-body">
                <div className="ba-map" aria-hidden="true">
                  <svg viewBox="0 0 130 160" preserveAspectRatio="xMidYMid slice">
                    <rect width="130" height="160" fill="#eef1f5" />
                    <path d="M0 44h130M0 96h130M34 0v160M92 0v160" stroke="#fff" strokeWidth="7" />
                    <path d="M0 122 C 40 108, 60 132, 130 116" stroke="#cfe3f2" strokeWidth="9" fill="none" />
                    <circle cx="65" cy="82" r="26" fill="#ef4444" opacity="0.16" />
                    <circle cx="65" cy="82" r="15" fill="#ef4444" />
                    <path d="M65 75v8M65 88h0" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
                  </svg>
                </div>

                <ul className="ba-sources">
                  {SOURCES.map((s, i) => (
                    <li key={i}>
                      <span className="ba-src-ic" style={{ color: s.color }}><Glyph kind={s.icon} size={15} /></span>
                      <span className="ba-src-label">{t(s.label, es)}</span>
                      <span className="ba-src-time">{s.time}</span>
                      <span className="ba-src-check" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="6.6" stroke="currentColor" strokeWidth="1.3" />
                          <path d="M5.3 8.2 7.1 10l3.6-3.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="ba-outcome">
              <span className="ba-outcome-line" aria-hidden="true" />
              <span className="ba-outcome-ic" aria-hidden="true"><Glyph kind="people" size={20} /></span>
              <p className="ba-outcome-text">
                {es ? <>Un equipo. Una imagen.<br /><b>Mejores decisiones. Mejores resultados.</b></>
                    : <>One team. One picture.<br /><b>Better decisions. Better outcomes.</b></>}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
