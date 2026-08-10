/* The problem → action → result section the homepage was missing.

   Design feedback: the page rests on "look how much our system does" and never
   says what the world looks like before KabatOne and after it. Every other
   section is a capability statement — modules, solutions, integrations,
   industries — so a reader gets breadth five times and outcome never.

   Deliberately written in operational language, not feature language: each row
   is a moment an operator actually recognises, paired with what changes. No
   numbers are claimed here — the case study carries the evidence, and inventing
   a figure would be exactly the unsourced-claim problem the audits flagged. */

type Row = { before: { en: string; es: string }; after: { en: string; es: string } }

const ROWS: Row[] = [
  {
    before: {
      en: 'The 911 call, the camera that saw it and the unit that responds live in three separate systems.',
      es: 'La llamada al 911, la cámara que lo vio y la unidad que responde viven en tres sistemas distintos.',
    },
    after: {
      en: 'One incident record, from the first call through to closure.',
      es: 'Un solo registro del incidente, desde la primera llamada hasta el cierre.',
    },
  },
  {
    before: {
      en: 'An operator re-keys the same incident into dispatch, then video, then the report.',
      es: 'Un operador recaptura el mismo incidente en despacho, luego en video y luego en el reporte.',
    },
    after: {
      en: 'Entered once. Everything downstream reads the same record.',
      es: 'Se captura una vez. Todo lo demás lee el mismo registro.',
    },
  },
  {
    before: {
      en: 'Finding the nearest useful camera means knowing which building it is in and who owns it.',
      es: 'Encontrar la cámara más cercana implica saber en qué edificio está y quién es su dueño.',
    },
    after: {
      en: 'The nearest feed opens inside the incident, on the same map command already uses.',
      es: 'La señal más cercana se abre dentro del incidente, en el mismo mapa que ya usa mando.',
    },
  },
  {
    before: {
      en: 'After the fact, nobody can reconstruct what the picture actually looked like at 10:42.',
      es: 'Después, nadie puede reconstruir cómo se veía realmente la situación a las 10:42.',
    },
    after: {
      en: 'Every decision and status change sits on one auditable timeline.',
      es: 'Cada decisión y cambio de estado queda en una sola línea de tiempo auditable.',
    },
  },
  {
    before: {
      en: 'Adding a camera vendor or a radio system starts a new integration project.',
      es: 'Añadir un proveedor de cámaras o un sistema de radio inicia un nuevo proyecto de integración.',
    },
    after: {
      en: 'New sources connect to the platform you already run.',
      es: 'Las nuevas fuentes se conectan a la plataforma que ya operas.',
    },
  },
]

export default function BeforeAfter({ es }: { es: boolean }) {
  const lang = es ? 'es' : 'en'

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
              ? 'La mayoría de los centros de mando no carecen de tecnología: tienen demasiada, sin conectar. Esto es lo que cambia cuando un solo incidente recorre una sola plataforma.'
              : 'Most command centers are not short of technology. They have too much of it, unconnected. This is what changes when one incident runs through one platform.'}
          </p>
        </div>

        <div className="ba-cols" role="list">
          <div className="ba-col ba-col-before">
            <h3 className="ba-col-title">{es ? 'Sistemas fragmentados' : 'Fragmented systems'}</h3>
            {ROWS.map((r, i) => (
              <p className="ba-item" role="listitem" key={i}>
                <span className="ba-mark ba-mark-before" aria-hidden="true">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
                {r.before[lang]}
              </p>
            ))}
          </div>

          <div className="ba-col ba-col-after">
            <h3 className="ba-col-title">{es ? 'Con KabatOne' : 'With KabatOne'}</h3>
            {ROWS.map((r, i) => (
              <p className="ba-item" role="listitem" key={i}>
                <span className="ba-mark ba-mark-after" aria-hidden="true">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6.3l2.4 2.4L9.5 4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {r.after[lang]}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
