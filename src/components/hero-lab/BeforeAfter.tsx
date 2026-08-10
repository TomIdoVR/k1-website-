/* The problem → action → result section the homepage was missing.

   First pass was five paired prose rows, which was ten lines of text arguing
   that the page has too much text. Replaced with a diagram: the whole point is
   "four records versus one record", and that is a shape, not a sentence.

   Inline SVG rather than generated artwork — it stays crisp at any size, both
   language variants are real text rather than pixels, and nothing can come back
   garbled. Each drawing is role="img" with a label, since it carries the
   meaning rather than decorating it. */

type L = { en: string; es: string }
const t = (v: L, es: boolean) => (es ? v.es : v.en)

const NODES: { label: L; icon: 'call' | 'camera' | 'unit' | 'report'; time: string }[] = [
  { label: { en: '911 Call', es: 'Llamada' }, icon: 'call', time: '10:42' },
  { label: { en: 'Camera', es: 'Cámara' }, icon: 'camera', time: '10:47' },
  { label: { en: 'Unit', es: 'Unidad' }, icon: 'unit', time: '10:51' },
  { label: { en: 'Report', es: 'Reporte' }, icon: 'report', time: '11:26' },
]

function Glyph({ kind }: { kind: string }) {
  const d: Record<string, string> = {
    call: 'M2.6 3.4a1 1 0 0 1 1-.9h1.6a1 1 0 0 1 1 .8l.35 1.7a1 1 0 0 1-.28.9l-.7.7a8 8 0 0 0 3.1 3.1l.7-.7a1 1 0 0 1 .9-.28l1.7.35a1 1 0 0 1 .8 1v1.6a1 1 0 0 1-.9 1A11 11 0 0 1 2.6 3.4Z',
    camera: 'M2 5.2h6.2v5.6H2zM8.2 7l3.8-1.7v5.4L8.2 9z',
    unit: 'M2.2 9.4V7.2l1.3-2.5h7l1.3 2.5v2.2M3.9 9.4h6.2M4.2 11a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Zm5.6 0a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Z',
    report: 'M3.4 2.2h4.4l2.8 2.8v6.8H3.4zM7.8 2.2V5h2.8',
  }
  return <path d={d[kind]} fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinejoin="round" strokeLinecap="round" />
}

/* Four cards adrift: no connectors, each with its own timestamp. */
function FragmentedDiagram({ es }: { es: boolean }) {
  const pos = [
    { x: 8, y: 10, r: -4 }, { x: 168, y: 30, r: 5 },
    { x: 22, y: 92, r: 6 }, { x: 176, y: 112, r: -5 },
  ]
  return (
    <svg className="ba-svg" viewBox="0 0 320 180" role="img"
      aria-label={es
        ? 'Cuatro sistemas separados, cada uno con su propio registro y su propia hora, sin conexión entre ellos.'
        : 'Four separate systems, each holding its own record and its own timestamp, with nothing connecting them.'}>
      {pos.map((p, i) => (
        <g key={i} transform={`translate(${p.x} ${p.y}) rotate(${p.r} 68 29)`} className="ba-frag-card">
          <rect x="0" y="0" width="136" height="58" rx="9" />
          <g className="ba-frag-ic" transform="translate(13 21)"><Glyph kind={NODES[i].icon} /></g>
          <text className="ba-frag-label" x="34" y="26">{t(NODES[i].label, es)}</text>
          <text className="ba-frag-time" x="34" y="42">{NODES[i].time}</text>
        </g>
      ))}
    </svg>
  )
}

/* One spine, four nodes on it, one timestamp. */
function UnifiedDiagram({ es }: { es: boolean }) {
  const xs = [46, 118, 190, 262]
  return (
    <svg className="ba-svg" viewBox="0 0 320 180" role="img"
      aria-label={es
        ? 'Un solo registro del incidente: llamada, cámara, unidad y reporte conectados en una misma línea de tiempo.'
        : 'A single incident record: call, camera, unit and report connected on one timeline.'}>
      <text className="ba-uni-tag" x="16" y="26">{es ? 'INCIDENTE 2451' : 'INCIDENT 2451'}</text>
      <text className="ba-uni-time" x="304" y="26" textAnchor="end">10:42</text>

      <line className="ba-spine" x1="30" y1="92" x2="290" y2="92" />
      {xs.map((x, i) => (
        <g key={i}>
          {i > 0 && <line className="ba-spine-lit" x1={xs[i - 1]} y1="92" x2={x} y2="92" />}
          <circle className="ba-node-ring" cx={x} cy="92" r="19" />
          <g className="ba-node-ic" transform={`translate(${x - 7} 85)`}><Glyph kind={NODES[i].icon} /></g>
          <text className="ba-node-label" x={x} y="130" textAnchor="middle">{t(NODES[i].label, es)}</text>
        </g>
      ))}
      <rect className="ba-uni-bar" x="30" y="150" width="260" height="7" rx="3.5" />
      <text className="ba-uni-bar-label" x="160" y="172" textAnchor="middle">
        {es ? 'una sola línea de tiempo auditable' : 'one auditable timeline'}
      </text>
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
              ? <>Un mismo incidente, <em>antes y después.</em></>
              : <>The same incident, <em>before and after.</em></>}
          </h2>
          <p className="ba-lede">
            {es
              ? 'La mayoría de los centros de mando no carecen de tecnología: tienen demasiada, sin conectar.'
              : 'Most command centers are not short of technology. They have too much of it, unconnected.'}
          </p>
        </div>

        <div className="ba-cols">
          <div className="ba-col ba-col-before">
            <h3 className="ba-col-title">{es ? 'Sistemas fragmentados' : 'Fragmented systems'}</h3>
            <FragmentedDiagram es={es} />
            <p className="ba-caption">
              {es
                ? 'Cuatro sistemas, cuatro registros, cuatro horas distintas. Nadie puede reconstruir la imagen completa.'
                : 'Four systems, four records, four different clocks. Nobody can reconstruct the whole picture.'}
            </p>
          </div>

          <div className="ba-col ba-col-after">
            <h3 className="ba-col-title">{es ? 'Con KabatOne' : 'With KabatOne'}</h3>
            <UnifiedDiagram es={es} />
            <p className="ba-caption">
              {es
                ? 'Un solo registro, desde la primera llamada hasta el cierre.'
                : 'One record, from the first call through to closure.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
