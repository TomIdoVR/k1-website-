const steps = [
  {
    num: '01',
    color: '#06b6d4',
    en: {
      label: 'Collect',
      title: 'Every sensor, camera, and channel in',
      body: 'Cameras, body-worn devices, drones, radios, IoT sensors, and citizen apps all feed into a single ingestion layer — regardless of brand or protocol.',
    },
    es: {
      label: 'Recoleccion',
      title: 'Cada sensor, camara y canal integrado',
      body: 'Camaras, dispositivos corporales, drones, radios, sensores IoT y apps ciudadanas se integran en una sola capa de ingestion — sin importar la marca o protocolo.',
    },
  },
  {
    num: '02',
    color: '#3b82f6',
    en: {
      label: 'Process',
      title: 'Rules engine classifies and escalates',
      body: 'The K1 engine evaluates every event against configurable rules, scores priority, cross-references GIS and dispatch data, and triggers the right protocol — in under 5 seconds.',
    },
    es: {
      label: 'Procesamiento',
      title: 'Motor de reglas clasifica y escala',
      body: 'El motor K1 evalua cada evento contra reglas configurables, puntua la prioridad, cruza datos GIS y de despacho, y activa el protocolo correcto — en menos de 5 segundos.',
    },
  },
  {
    num: '03',
    color: '#22c55e',
    en: {
      label: 'Respond',
      title: 'One screen. One decision. Fast.',
      body: 'Dispatchers, commanders, and field units act from a single unified screen. No tab-switching, no duplicate calls, no information lost between systems.',
    },
    es: {
      label: 'Respuesta',
      title: 'Una pantalla. Una decision. Rapido.',
      body: 'Despachadores, comandantes y unidades de campo actuan desde una sola pantalla unificada. Sin cambio de pestanas, sin llamadas duplicadas, sin informacion perdida entre sistemas.',
    },
  },
]

/* Step illustrations */
function CollectIllustration({ color }: { color: string }) {
  return (
    <svg width="120" height="100" viewBox="0 0 120 100" fill="none" aria-hidden="true">
      {/* Central hub */}
      <circle cx="60" cy="50" r="16" fill={`${color}18`} stroke={color} strokeWidth="1.5" />
      <circle cx="60" cy="50" r="8" fill={`${color}30`} />
      <circle cx="60" cy="50" r="3" fill={color} />
      {/* Pulsing rings */}
      <circle cx="60" cy="50" r="22" stroke={color} strokeWidth="0.75" strokeDasharray="3 3" opacity="0.4" />
      <circle cx="60" cy="50" r="30" stroke={color} strokeWidth="0.5" strokeDasharray="2 4" opacity="0.2" />
      {/* Camera — top-left */}
      <rect x="8" y="10" width="18" height="12" rx="2" stroke={color} strokeWidth="1.3" fill={`${color}12`} />
      <path d="M26 14.5l7-3.5v9l-7-3.5" stroke={color} strokeWidth="1.3" strokeLinejoin="round" />
      <line x1="17" y1="16" x2="40" y2="38" stroke={color} strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
      {/* Drone — top-right */}
      <circle cx="95" cy="14" r="4" stroke={color} strokeWidth="1.3" fill={`${color}12`} />
      <path d="M89 10l-4-4M101 10l4-4M89 18l-4 4M101 18l4 4" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      <line x1="91" y1="17" x2="75" y2="38" stroke={color} strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
      {/* Radio — left */}
      <rect x="4" y="44" width="12" height="16" rx="2" stroke={color} strokeWidth="1.3" fill={`${color}12`} />
      <path d="M10 41l-3-4M10 41l3-4" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="16" y1="50" x2="44" y2="50" stroke={color} strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
      {/* IoT sensor — right */}
      <circle cx="108" cy="50" r="7" stroke={color} strokeWidth="1.3" fill={`${color}12`} />
      <path d="M105 50h6M108 47v6" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <line x1="101" y1="50" x2="76" y2="50" stroke={color} strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
      {/* Phone — bottom-left */}
      <rect x="12" y="74" width="10" height="16" rx="2" stroke={color} strokeWidth="1.3" fill={`${color}12`} />
      <rect x="14.5" y="76.5" width="5" height="7" rx="0.5" fill={`${color}30`} />
      <line x1="20" y1="80" x2="44" y2="63" stroke={color} strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
      {/* Body cam — bottom-right */}
      <rect x="88" y="74" width="16" height="14" rx="2" stroke={color} strokeWidth="1.3" fill={`${color}12`} />
      <circle cx="96" cy="81" r="3.5" stroke={color} strokeWidth="1" fill={`${color}20`} />
      <line x1="88" y1="79" x2="76" y2="62" stroke={color} strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
    </svg>
  )
}

function ProcessIllustration({ color }: { color: string }) {
  return (
    <svg width="120" height="100" viewBox="0 0 120 100" fill="none" aria-hidden="true">
      {/* Central processor */}
      <rect x="40" y="30" width="40" height="40" rx="4" fill={`${color}12`} stroke={color} strokeWidth="1.5" />
      {/* CPU grid lines */}
      <line x1="52" y1="30" x2="52" y2="70" stroke={color} strokeWidth="0.5" opacity="0.3" />
      <line x1="60" y1="30" x2="60" y2="70" stroke={color} strokeWidth="0.5" opacity="0.3" />
      <line x1="68" y1="30" x2="68" y2="70" stroke={color} strokeWidth="0.5" opacity="0.3" />
      <line x1="40" y1="42" x2="80" y2="42" stroke={color} strokeWidth="0.5" opacity="0.3" />
      <line x1="40" y1="50" x2="80" y2="50" stroke={color} strokeWidth="0.5" opacity="0.3" />
      <line x1="40" y1="58" x2="80" y2="58" stroke={color} strokeWidth="0.5" opacity="0.3" />
      {/* Inner chip */}
      <rect x="48" y="38" width="24" height="24" rx="2" fill={`${color}25`} stroke={color} strokeWidth="1" />
      {/* Chip pins - top */}
      <line x1="52" y1="30" x2="52" y2="34" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="60" y1="30" x2="60" y2="34" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="68" y1="30" x2="68" y2="34" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Chip pins - bottom */}
      <line x1="52" y1="70" x2="52" y2="66" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="60" y1="70" x2="60" y2="66" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="68" y1="70" x2="68" y2="66" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Chip pins - left */}
      <line x1="40" y1="42" x2="44" y2="42" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="40" y1="50" x2="44" y2="50" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="40" y1="58" x2="44" y2="58" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Chip pins - right */}
      <line x1="80" y1="42" x2="76" y2="42" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="80" y1="50" x2="76" y2="50" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="80" y1="58" x2="76" y2="58" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Check mark in center */}
      <path d="M54 50l4 4 8-8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Input stream — left */}
      <rect x="4" y="36" width="24" height="8" rx="2" fill={`${color}12`} stroke={color} strokeWidth="1" />
      <rect x="6" y="38" width="8" height="4" rx="1" fill={`${color}30`} />
      <path d="M28 40h12" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M36 37l4 3-4 3" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Input stream 2 */}
      <rect x="4" y="50" width="24" height="8" rx="2" fill={`${color}12`} stroke={color} strokeWidth="1" />
      <rect x="6" y="52" width="12" height="4" rx="1" fill={`${color}30`} />
      <path d="M28 54h12" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M36 51l4 3-4 3" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Output — right */}
      <path d="M80 50h12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M88 46l5 4-5 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Output badge */}
      <rect x="92" y="44" width="24" height="12" rx="6" fill={color} opacity="0.9" />
      <path d="M98 50h8M104 47l3 3-3 3" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Timer label */}
      <text x="60" y="90" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={color} opacity="0.7">{'< 5 sec'}</text>
    </svg>
  )
}

function RespondIllustration({ color }: { color: string }) {
  return (
    <svg width="120" height="100" viewBox="0 0 120 100" fill="none" aria-hidden="true">
      {/* Screen frame */}
      <rect x="10" y="12" width="100" height="65" rx="4" fill={`${color}08`} stroke={color} strokeWidth="1.5" />
      {/* Screen header */}
      <rect x="10" y="12" width="100" height="14" rx="4" fill={`${color}18`} />
      <rect x="10" y="20" width="100" height="6" fill={`${color}18`} />
      <circle cx="18" cy="19" r="3" fill={`${color}50`} />
      <circle cx="26" cy="19" r="3" fill={`${color}30`} />
      <circle cx="34" cy="19" r="3" fill={`${color}20`} />
      {/* Map background */}
      <rect x="14" y="30" width="60" height="44" rx="2" fill={`${color}08`} stroke={color} strokeWidth="0.5" opacity="0.5" />
      {/* Map grid */}
      <line x1="14" y1="44" x2="74" y2="44" stroke={color} strokeWidth="0.4" opacity="0.3" />
      <line x1="14" y1="58" x2="74" y2="58" stroke={color} strokeWidth="0.4" opacity="0.3" />
      <line x1="34" y1="30" x2="34" y2="74" stroke={color} strokeWidth="0.4" opacity="0.3" />
      <line x1="54" y1="30" x2="54" y2="74" stroke={color} strokeWidth="0.4" opacity="0.3" />
      {/* Incident marker */}
      <circle cx="44" cy="52" r="5" fill={`${color}30`} stroke={color} strokeWidth="1.2" />
      <circle cx="44" cy="52" r="2" fill={color} />
      <circle cx="44" cy="52" r="9" stroke={color} strokeWidth="0.7" strokeDasharray="2 2" opacity="0.5" />
      {/* Unit A */}
      <rect x="20" y="36" width="10" height="8" rx="1.5" fill={`${color}25`} stroke={color} strokeWidth="1" />
      <path d="M21 41l8 0M25 37v2" stroke={color} strokeWidth="0.8" strokeLinecap="round" />
      <line x1="30" y1="42" x2="39" y2="50" stroke={color} strokeWidth="0.8" strokeDasharray="2 1.5" opacity="0.6" />
      {/* Unit B */}
      <rect x="56" y="60" width="10" height="8" rx="1.5" fill={`${color}25`} stroke={color} strokeWidth="1" />
      <path d="M57 65l8 0M61 61v2" stroke={color} strokeWidth="0.8" strokeLinecap="round" />
      <line x1="56" y1="63" x2="49" y2="55" stroke={color} strokeWidth="0.8" strokeDasharray="2 1.5" opacity="0.6" />
      {/* Right panel */}
      <rect x="78" y="30" width="28" height="10" rx="2" fill={`${color}15`} stroke={color} strokeWidth="0.7" />
      <rect x="80" y="32.5" width="16" height="5" rx="1" fill={`${color}30`} />
      <rect x="78" y="44" width="28" height="10" rx="2" fill={`${color}15`} stroke={color} strokeWidth="0.7" />
      <rect x="80" y="46.5" width="12" height="5" rx="1" fill={`${color}30`} />
      <rect x="78" y="58" width="28" height="10" rx="2" fill={color} opacity="0.85" />
      <path d="M85 63h8M92 60.5l3 2.5-3 2.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Screen base */}
      <path d="M50 77v8M38 85h24" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function HowItWorks({ es }: { es: boolean }) {
  const illustrations = [
    <CollectIllustration key="collect" color={steps[0].color} />,
    <ProcessIllustration key="process" color={steps[1].color} />,
    <RespondIllustration key="respond" color={steps[2].color} />,
  ]

  return (
    <section style={{
      position: 'relative',
      zIndex: 1,
      padding: '80px 32px',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg-2)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '10px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--cyan)',
            marginBottom: '14px',
          }}>
            {es ? 'COMO FUNCIONA' : 'HOW IT WORKS'}
          </p>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            textTransform: 'uppercase',
            color: 'var(--white)',
            lineHeight: 1.1,
            margin: 0,
          }}>
            {es ? 'Del sensor a la respuesta — en segundos.' : 'From sensor to response — in seconds.'}
          </h2>
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0',
        }}>
          {steps.map((step, i) => {
            const c = es ? step.es : step.en
            return (
              <div key={step.num} style={{
                padding: '36px 32px',
                borderRight: i < 2 ? '1px solid var(--border)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}>
                {/* Illustration */}
                <div style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '28px',
                  padding: '20px 0',
                  background: `radial-gradient(ellipse at center, ${step.color}0a 0%, transparent 70%)`,
                  borderRadius: '12px',
                }}>
                  {illustrations[i]}
                </div>

                {/* Step number + label */}
                <div style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: step.color,
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <span style={{ opacity: 0.5 }}>{step.num}</span>
                  {c.label}
                </div>

                <h3 style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  textTransform: 'uppercase',
                  color: 'var(--white)',
                  lineHeight: 1.15,
                  marginBottom: '12px',
                }}>
                  {c.title}
                </h3>

                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--dim)',
                  lineHeight: 1.65,
                  margin: 0,
                }}>
                  {c.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .hiw-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
