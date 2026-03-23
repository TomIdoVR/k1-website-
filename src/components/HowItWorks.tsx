const steps = [
  {
    num: '01',
    iconPath: 'M7 3h14M7 8h14M7 13h8M3 3h1M3 8h1M3 13h1',
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
    iconPath: 'M12 3L3 8.5V15c0 4.5 4 8.5 9 10 5-1.5 9-5.5 9-10V8.5L12 3zM9 12l2.5 2.5L15 9',
    en: {
      label: 'Process',
      title: 'Rules engine classifies and escalates',
      body: 'The Avalon engine evaluates every event against configurable rules, scores priority, cross-references GIS and dispatch data, and triggers the right protocol — in under 5 seconds.',
    },
    es: {
      label: 'Procesamiento',
      title: 'Motor de reglas clasifica y escala',
      body: 'El motor Avalon evalua cada evento contra reglas configurables, puntua la prioridad, cruza datos GIS y de despacho, y activa el protocolo correcto — en menos de 5 segundos.',
    },
  },
  {
    num: '03',
    iconPath: 'M2 12h4M18 12h4M12 2v4M12 18v4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8',
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

export default function HowItWorks({ es }: { es: boolean }) {
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
          position: 'relative',
        }}>
          {/* Connecting line */}
          <div style={{
            position: 'absolute',
            top: '32px',
            left: 'calc(16.67% + 20px)',
            right: 'calc(16.67% + 20px)',
            height: '1px',
            background: 'linear-gradient(90deg, rgba(6,182,212,0.4), rgba(59,130,246,0.4))',
            zIndex: 0,
          }} />

          {steps.map((step, i) => {
            const c = es ? step.es : step.en
            const colors = ['#06b6d4', '#3b82f6', '#22c55e']
            const color = colors[i]
            return (
              <div key={step.num} style={{
                padding: '0 32px',
                borderRight: i < 2 ? '1px solid var(--border)' : 'none',
                position: 'relative',
                zIndex: 1,
              }}>
                {/* Icon circle */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: `rgba(${i === 0 ? '6,182,212' : i === 1 ? '59,130,246' : '34,197,94'},0.1)`,
                  border: `1px solid ${color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  boxShadow: `0 0 24px ${color}20`,
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {i === 0 && <>
                      <rect x="2" y="3" width="20" height="14" rx="2"/>
                      <path d="M8 21h8M12 17v4"/>
                      <circle cx="17" cy="7" r="1" fill={color}/>
                      <circle cx="17" cy="11" r="1" fill={color}/>
                    </>}
                    {i === 1 && <>
                      <path d="M12 2L2 7v5c0 5.5 4.5 10.7 10 12 5.5-1.3 10-6.5 10-12V7L12 2z"/>
                      <path d="M9 12l2 2 4-4"/>
                    </>}
                    {i === 2 && <>
                      <rect x="2" y="3" width="20" height="14" rx="2"/>
                      <path d="M8 21h8M12 17v4"/>
                      <path d="M6 8h4M6 11h8" strokeWidth="1.5"/>
                      <circle cx="17" cy="9.5" r="2.5" fill={`${color}30`} stroke={color}/>
                    </>}
                  </svg>
                </div>

                <div style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color,
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
