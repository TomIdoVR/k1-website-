/* Homepage v2 — operational loop section (Detect → Understand → Decide → Act → Learn) */

const LOOP_STEPS = [
  {
    key: 'detect',
    en: { name: 'Detect', body: 'Signals from every source — calls, cameras, sensors, radios.' },
    es: { name: 'Detectar', body: 'Señales de cada fuente — llamadas, cámaras, sensores, radios.' },
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2.2" fill="currentColor" />
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.3" opacity="0.7" />
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      </svg>
    ),
  },
  {
    key: 'understand',
    en: { name: 'Understand', body: 'AI classifies, deduplicates, and scores priority in seconds.' },
    es: { name: 'Entender', body: 'IA clasifica, deduplica y prioriza en segundos.' },
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 12h4l2.5-6 5 12 2.5-6H21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: 'decide',
    en: { name: 'Decide', body: 'Unified event view. Right unit, right protocol, right now.' },
    es: { name: 'Decidir', body: 'Vista unificada. Unidad correcta, protocolo correcto.' },
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="1.1" opacity="0.4" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: 'act',
    en: { name: 'Act', body: 'Field units dispatched with full context on every device.' },
    es: { name: 'Actuar', body: 'Unidades con contexto completo en cada dispositivo.' },
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 12h13M13 7l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: 'learn',
    en: { name: 'Learn', body: 'Every incident feeds patterns, hotspots, deployment insight.' },
    es: { name: 'Aprender', body: 'Cada incidente alimenta patrones y despliegue.' },
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 18l5-7 4 3 5-9 4 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="8" cy="11" r="1.2" fill="currentColor" />
        <circle cx="12" cy="14" r="1.2" fill="currentColor" />
        <circle cx="17" cy="5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
]

export default function OperationalLoop({ es }: { es: boolean }) {
  return (
    <section className="loop-section" id="loop">
      <div className="loop-section-inner">
        <div className="loop-section-head">
          <div className="loop-section-eyebrow">
            <span className="loop-section-eyebrow-bar" />
            <span>{es ? 'CÓMO FUNCIONA' : 'HOW IT WORKS'}</span>
          </div>
          <h2 className="loop-section-title">
            {es ? (
              <>
                El bucle <em>operativo</em>.
              </>
            ) : (
              <>
                The operational <em>loop</em>.
              </>
            )}
          </h2>
          <p className="loop-section-sub">
            {es
              ? 'Una plataforma para el ciclo completo — de la señal a la respuesta.'
              : 'One platform for the full cycle — from signal to response.'}
          </p>
        </div>

        <div className="loop-flow">
          <div className="loop-rail" aria-hidden="true" />
          {LOOP_STEPS.map((step, i) => {
            const c = step[es ? 'es' : 'en']
            return (
              <div className="loop-step" key={step.key} style={{ '--ad': `${i * 0.08}s` } as React.CSSProperties}>
                <div className="loop-step-top">
                  <span className="loop-step-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="loop-step-node" />
                </div>
                <div className="loop-step-icon">{step.icon}</div>
                <div className="loop-step-name">{c.name}</div>
                <div className="loop-step-body">{c.body}</div>
              </div>
            )
          })}
        </div>

        <div className="loop-foot">
          <span className="loop-foot-icon" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M11.5 5.5 A4.5 4.5 0 1 0 12 8"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M11.5 2.5 L11.5 5.5 L8.5 5.5"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </span>
          <span>
            {es
              ? 'Un ciclo continuo — cada incidente mejora el siguiente'
              : 'A continuous cycle — every incident improves the next'}
          </span>
        </div>
      </div>
    </section>
  )
}
