'use client'

import { useSimulator } from '../../../SimulatorApp'
import { t } from '@/lib/simulator/i18n'

export default function ActResponderScreen() {
  const { es } = useSimulator()

  return (
    <div style={{ height: '100%', display: 'flex', padding: 16, gap: 16, alignItems: 'flex-start' }}>

      {/* ── iPhone Shell ── */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '0 0 auto' }}>
        <div style={{
          width: 270,
          background: '#111',
          borderRadius: 50,
          border: '8px solid #1c1c1e',
          boxShadow: '0 0 0 1px #3a3a3c, 0 30px 60px rgba(0,0,0,0.8), inset 0 0 0 1px #3a3a3c',
          overflow: 'hidden',
          position: 'relative',
          flexShrink: 0,
        }}>
          {/* Side buttons (purely visual) */}
          <div style={{
            position: 'absolute', left: -10, top: 80, width: 3, height: 28,
            background: '#2c2c2e', borderRadius: 2,
          }} />
          <div style={{
            position: 'absolute', left: -10, top: 118, width: 3, height: 46,
            background: '#2c2c2e', borderRadius: 2,
          }} />
          <div style={{
            position: 'absolute', left: -10, top: 174, width: 3, height: 46,
            background: '#2c2c2e', borderRadius: 2,
          }} />
          <div style={{
            position: 'absolute', right: -10, top: 130, width: 3, height: 70,
            background: '#2c2c2e', borderRadius: 2,
          }} />

          {/* Screen */}
          <div style={{
            background: '#050a14',
            borderRadius: 44,
            overflow: 'hidden',
            position: 'relative',
          }}>
            {/* Dynamic Island */}
            <div style={{
              display: 'flex', justifyContent: 'center', paddingTop: 12, paddingBottom: 4,
            }}>
              <div style={{
                width: 100, height: 28, borderRadius: 20,
                background: '#000',
              }} />
            </div>

            {/* Status bar */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '0 18px 6px',
            }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#fff', letterSpacing: -0.3 }}>9:41</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                {/* Signal */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 1.5 }}>
                  {[4, 6, 9, 11].map((h, i) => (
                    <div key={i} style={{ width: 3, height: h, background: '#fff', borderRadius: 1 }} />
                  ))}
                </div>
                {/* WiFi */}
                <span style={{ fontSize: 10, color: '#fff' }}>▲</span>
                {/* Battery */}
                <div style={{
                  width: 22, height: 11, border: '1.5px solid rgba(255,255,255,0.4)',
                  borderRadius: 3, position: 'relative', display: 'flex', alignItems: 'center', padding: '1.5px',
                }}>
                  <div style={{ width: '75%', height: '100%', background: '#22c55e', borderRadius: 1.5 }} />
                  <div style={{
                    position: 'absolute', right: -4, top: '50%', transform: 'translateY(-50%)',
                    width: 3, height: 5, background: 'rgba(255,255,255,0.3)', borderRadius: '0 1px 1px 0',
                  }} />
                </div>
              </div>
            </div>

            {/* App nav bar */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '6px 16px 8px',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              <span style={{ fontSize: 10, color: '#06b6d4' }}>← {t({ en: 'Incidents', es: 'Incidentes' }, es)}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: -0.3 }}>K1 Responder</span>
              <div style={{
                padding: '3px 7px', background: '#ef4444', borderRadius: 4,
                fontSize: 7, fontWeight: 800, color: '#fff', letterSpacing: 0.5,
                textTransform: 'uppercase' as const,
              }}>
                EN ROUTE
              </div>
            </div>

            {/* Alert bar */}
            <div style={{
              margin: '10px 12px 0',
              padding: '8px 12px',
              background: 'rgba(239,68,68,0.12)', borderRadius: 8,
              border: '1px solid rgba(239,68,68,0.25)',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <div style={{
                width: 7, height: 7, borderRadius: 9999,
                background: '#ef4444', boxShadow: '0 0 6px #ef4444',
                animation: 'pulse 2s infinite', flexShrink: 0,
              }} />
              <div>
                <div style={{ fontSize: 9, fontWeight: 800, color: '#ef4444', letterSpacing: 0.5, textTransform: 'uppercase' as const }}>
                  {t({ en: 'Crowd Disturbance', es: 'Disturbio en Multitud' }, es)}
                </div>
                <div style={{ fontSize: 8, color: '#64748b', marginTop: 1 }}>EVT-0847 · Main Plaza</div>
              </div>
            </div>

            {/* Live video */}
            <div style={{
              margin: '10px 12px 0',
              height: 90, borderRadius: 8,
              overflow: 'hidden', position: 'relative', background: '#060a10',
            }}>
              <video
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
                autoPlay muted loop playsInline
                style={{
                  position: 'absolute', inset: 0, width: '100%', height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(0.8) brightness(0.45) contrast(1.6)',
                }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 4px)',
              }} />
              <div style={{
                position: 'absolute', top: 5, left: 7,
                display: 'flex', alignItems: 'center', gap: 4,
              }}>
                <div style={{
                  width: 5, height: 5, borderRadius: 9999,
                  background: '#ef4444', boxShadow: '0 0 5px #ef4444',
                  animation: 'pulse 2s infinite',
                }} />
                <span style={{ fontSize: 7, fontWeight: 700, color: '#fff', background: 'rgba(0,0,0,0.6)', padding: '1px 4px', borderRadius: 2 }}>
                  LIVE · CAM-017
                </span>
              </div>
            </div>

            {/* Stats row */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              margin: '10px 12px 0', gap: 6,
            }}>
              {[
                { label: t({ en: 'Subjects', es: 'Sujetos' }, es), value: '3', color: '#ffb4ab' },
                { label: t({ en: 'Threat', es: 'Amenaza' }, es),   value: '0.91', color: '#f97316' },
                { label: 'ETA',                                      value: '2:30', color: '#22c55e' },
              ].map((s) => (
                <div key={s.label} style={{
                  background: '#0e131e', borderRadius: 6, padding: '6px 8px',
                  border: '1px solid #1e293b', textAlign: 'center',
                }}>
                  <div style={{ fontSize: 7, color: '#475569', letterSpacing: 0.5, marginBottom: 2, textTransform: 'uppercase' as const }}>{s.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: s.color }}>{s.value}</div>
                </div>
              ))}
            </div>

            {/* Detail rows */}
            <div style={{ margin: '10px 12px 0', borderRadius: 8, overflow: 'hidden', border: '1px solid #1e293b' }}>
              {[
                { label: t({ en: 'Location', es: 'Ubicación' }, es), value: 'Main Plaza North' },
                { label: t({ en: 'Priority', es: 'Prioridad' }, es), value: 'P1 — CRITICAL', highlight: '#ffb4ab' },
              ].map((row, i) => (
                <div key={row.label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '8px 10px',
                  borderBottom: i === 0 ? '1px solid #1e293b' : 'none',
                  background: '#0e131e',
                }}>
                  <span style={{ fontSize: 9, color: '#64748b' }}>{row.label}</span>
                  <span style={{ fontSize: 9, fontWeight: 700, color: row.highlight ?? '#dde2f1' }}>{row.value}</span>
                </div>
              ))}
            </div>

            {/* Navigate CTA */}
            <div style={{ margin: '10px 12px' }}>
              <div style={{
                background: '#ef4444', borderRadius: 10,
                padding: '10px', textAlign: 'center',
              }}>
                <span style={{ fontSize: 12, fontWeight: 800, color: '#fff', letterSpacing: 0.3 }}>
                  🗺 {t({ en: 'Navigate to Scene', es: 'Navegar a la Escena' }, es)}
                </span>
              </div>
            </div>

            {/* Tab bar */}
            <div style={{
              display: 'flex', justifyContent: 'space-around', alignItems: 'center',
              padding: '8px 0 4px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              background: 'rgba(0,0,0,0.6)',
            }}>
              {[
                { icon: '⌂', label: t({ en: 'Home', es: 'Inicio' }, es) },
                { icon: '◉', label: t({ en: 'Active', es: 'Activo' }, es), active: true },
                { icon: '⊞', label: t({ en: 'Map', es: 'Mapa' }, es) },
                { icon: '◎', label: 'Chat' },
              ].map((tab) => (
                <div key={tab.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                  <span style={{ fontSize: 14, color: tab.active ? '#ef4444' : '#475569' }}>{tab.icon}</span>
                  <span style={{ fontSize: 7, color: tab.active ? '#ef4444' : '#475569', letterSpacing: 0.3 }}>{tab.label}</span>
                </div>
              ))}
            </div>

            {/* Home indicator */}
            <div style={{ display: 'flex', justifyContent: 'center', padding: '6px 0 10px' }}>
              <div style={{ width: 100, height: 4, background: '#fff', borderRadius: 3, opacity: 0.3 }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Tactical Chat ── */}
      <div style={{
        flex: 1, background: '#161c26', padding: 14,
        borderLeft: '3px solid #eab308',
        display: 'flex', flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
      }}>
        <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, color: '#475569', textTransform: 'uppercase' as const, marginBottom: 12 }}>
          {t({ en: 'TACTICAL CHANNEL', es: 'CANAL TÁCTICO' }, es)}
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8, overflow: 'hidden' }}>
          {[
            { from: 'DISPATCH', msg: { en: 'P-104 → Main Plaza. 3 subjects.', es: 'P-104 → Plaza Principal. 3 sujetos.' }, color: '#ef4444', time: '14:03' },
            { from: 'P-104',    msg: { en: 'Copy. ETA 2:30.',                  es: 'Copiado. ETA 2:30.' },                  color: '#eab308', time: '14:03' },
            { from: 'AI',       msg: { en: 'Subjects moving NE. Analysis attached.', es: 'Sujetos al NE. Análisis adjunto.' }, color: '#06b6d4', time: '14:04' },
            { from: 'P-104',    msg: { en: 'Approaching south entrance.',       es: 'Ingresando por entrada sur.' },          color: '#eab308', time: '14:05' },
          ].map((m, i) => (
            <div key={i} style={{
              padding: '8px 10px', background: '#0e131e',
              borderLeft: `3px solid ${m.color}`,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                <span style={{ fontSize: 8, fontWeight: 700, letterSpacing: 1, color: m.color }}>{m.from}</span>
                <span style={{ fontSize: 8, color: '#334155', fontFamily: 'monospace' }}>{m.time}</span>
              </div>
              <div style={{ fontSize: 11, color: '#bcc9cd' }}>{t(m.msg, es)}</div>
            </div>
          ))}
        </div>

        {/* Citizen SOS */}
        <div style={{
          marginTop: 10, padding: '8px 10px',
          background: 'rgba(96,165,250,0.06)', border: '1px solid rgba(96,165,250,0.15)',
          fontSize: 10, color: '#60a5fa', borderRadius: 4,
        }}>
          🆘 {t({ en: 'Citizen SOS: "Fight near food court. 3-4 people."', es: 'SOS Ciudadano: "Pelea cerca del food court. 3-4 personas."' }, es)}
        </div>
      </div>
    </div>
  )
}
