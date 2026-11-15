/* How It Works — the 5-stage operational loop.
   Detect → Understand → Decide → Act → Learn, with a return arc that makes
   the "loop" literal: every incident feeds the next one.

   Illustrations are purpose-built simple geometric SVGs (one idea per icon,
   consistent 48px grid / 1.75 stroke), not the busy line-art of the old
   dark-theme section and not product screenshots.
   Scoped under .olp- so it composes with the hero's .hll- light theme. */

type Copy = { name: string; body: string }
type Stage = {
  key: string
  color: string
  icon: React.ReactNode
  en: Copy
  es: Copy
}

/* Shared icon frame — every glyph is drawn on the same 48x48 grid with the
   same stroke weight so the five read as one family. */
const g = {
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const STAGES: Stage[] = [
  {
    key: 'detect',
    color: '#12c7c2',
    // Signal radiating from a source
    icon: (
      <svg {...g}>
        <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none" />
        <path d="M31.1 16.9a10 10 0 0 1 0 14.2M16.9 31.1a10 10 0 0 1 0-14.2" />
        <path d="M36.1 11.9a17 17 0 0 1 0 24.2M11.9 36.1a17 17 0 0 1 0-24.2" opacity="0.4" />
      </svg>
    ),
    en: { name: 'Detect', body: 'Signals from every source — calls, cameras, sensors, radios.' },
    es: { name: 'Detectar', body: 'Señales de cada fuente — llamadas, cámaras, sensores, radios.' },
  },
  {
    key: 'understand',
    color: '#0bacd9',
    // Funnel — classify, deduplicate, prioritise
    icon: (
      <svg {...g}>
        <path d="M11 13h26L27 26v11l-6-4V26z" />
        <path d="M17 8h14" opacity="0.4" />
      </svg>
    ),
    en: { name: 'Understand', body: 'AI classifies, deduplicates, and scores priority in seconds.' },
    es: { name: 'Entender', body: 'La IA clasifica, deduplica y prioriza en segundos.' },
  },
  {
    key: 'decide',
    color: '#0a86ee',
    // Crosshair — the precise call
    icon: (
      <svg {...g}>
        <circle cx="24" cy="24" r="12.5" />
        <circle cx="24" cy="24" r="5" />
        <circle cx="24" cy="24" r="1.6" fill="currentColor" stroke="none" />
        <path d="M24 6.5v5M24 36.5v5M6.5 24h5M36.5 24h5" />
      </svg>
    ),
    en: { name: 'Decide', body: 'One unified event view. Right unit, right protocol, right now.' },
    es: { name: 'Decidir', body: 'Vista unificada del evento. Unidad y protocolo correctos, ahora.' },
  },
  {
    key: 'act',
    color: '#0757f7',
    // Forward dispatch with motion
    icon: (
      <svg {...g}>
        <path d="M12 24h20" />
        <path d="M25 17l7 7-7 7" />
        <path d="M8 16h7M8 32h7" opacity="0.4" />
      </svg>
    ),
    en: { name: 'Act', body: 'Field units dispatched with full context on every device.' },
    es: { name: 'Actuar', body: 'Unidades desplegadas con contexto completo en cada dispositivo.' },
  },
  {
    key: 'learn',
    color: '#3f45e0',
    // Rising trend with data points
    icon: (
      <svg {...g}>
        <path d="M10 34l8-8.5 6 5 12-13.5" />
        <path d="M30.5 17H36v5.5" />
        <circle cx="18" cy="25.5" r="1.9" fill="currentColor" stroke="none" />
        <circle cx="24" cy="30.5" r="1.9" fill="currentColor" stroke="none" />
      </svg>
    ),
    en: { name: 'Learn', body: 'Every incident feeds patterns, hotspots, and deployment insight.' },
    es: { name: 'Aprender', body: 'Cada incidente alimenta patrones, zonas críticas y despliegue.' },
  },
]

const T = {
  eyebrow: { en: 'HOW IT WORKS', es: 'CÓMO FUNCIONA' },
  titleLead: { en: 'The operational', es: 'El ciclo' },
  titleEm: { en: 'loop', es: 'operativo' },
  sub: {
    en: 'One platform for the full cycle — from the first signal to the response, and back again.',
    es: 'Una plataforma para el ciclo completo — de la primera señal a la respuesta, y de vuelta.',
  },
  foot: {
    en: 'A continuous cycle — every incident improves the next',
    es: 'Un ciclo continuo — cada incidente mejora el siguiente',
  },
}

export default function OperationalLoop({ es }: { es: boolean }) {
  const lang = es ? 'es' : 'en'

  return (
    <section className="olp" aria-labelledby="olp-title">
      <div className="olp-inner">
        <header className="olp-head">
          <p className="olp-eyebrow">{T.eyebrow[lang]}</p>
          <h2 className="olp-title" id="olp-title">
            {T.titleLead[lang]} <em>{T.titleEm[lang]}</em>.
          </h2>
          <p className="olp-sub">{T.sub[lang]}</p>
        </header>

        <ol className="olp-flow">
          {STAGES.map((s, i) => (
            <li
              className="olp-stage"
              key={s.key}
              style={{ '--sc': s.color } as React.CSSProperties}
            >
              <span className="olp-node" aria-hidden="true">
                <span className="olp-icon">{s.icon}</span>
              </span>
              <span className="olp-num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="olp-name">{s[lang].name}</h3>
              <p className="olp-body">{s[lang].body}</p>
            </li>
          ))}
        </ol>

        <p className="olp-foot">
          <span className="olp-foot-icon" aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13.2 6.2A5.2 5.2 0 1 0 13.8 9" />
              <path d="M13.2 2.6v3.6h-3.6" />
            </svg>
          </span>
          {T.foot[lang]}
        </p>
      </div>
    </section>
  )
}
