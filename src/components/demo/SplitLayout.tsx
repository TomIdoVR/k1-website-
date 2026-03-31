import Image from 'next/image'
import type { Stage } from '@/data/demo/types'

const UNITS = [
  { id: '12-CHARLIE', role: 'RESPONSE PRIMARY',  status: 'ASSIGNED',  statusColor: '#3B9EFF', active: true },
  { id: '08-BRAVO',   role: 'BACKUP EN ROUTE',   status: 'EN ROUTE',  statusColor: '#3B9EFF', active: true },
  { id: '04-ALPHA',   role: 'STATIONARY',         status: 'STANDBY',   statusColor: '#48647A', active: false },
  { id: '05-ALPHA',   role: 'K.CHEN · 4.1 MI',   status: 'AVAILABLE', statusColor: '#00C98A', active: false },
  { id: '11-ECHO',    role: 'P.GOMEZ · 6.2 MI',  status: 'AVAILABLE', statusColor: '#00C98A', active: false },
]

interface SplitLayoutProps {
  stage: Stage
  nextStage?: Stage
  prevStage?: Stage
  onNext: () => void
  onPrev: () => void
}

export default function SplitLayout({ stage, nextStage, prevStage, onNext, onPrev }: SplitLayoutProps) {
  return (
    <div
      style={{
        height: 'calc(100vh - 168px)',
        background: '#08101A',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'var(--font-manrope), Manrope, sans-serif',
      }}
    >
      {/* ── Stage header — same style as other stages ── */}
      <div
        style={{
          padding: '16px 32px 12px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}
      >
        {/* Left: stage label + headline + subtitle */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <span style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#adc6ff' }}>
              {stage.stageLabel}
            </span>
            <div style={{ height: 1, width: 28, background: 'rgba(173,198,255,0.3)' }} />
          </div>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
            fontWeight: 900, fontStyle: 'italic',
            letterSpacing: '-0.025em', textTransform: 'uppercase',
            lineHeight: 1.05, color: '#fff', margin: 0,
          }}>
            {stage.headline}
          </h2>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)', marginTop: 6, fontWeight: 500 }}>
            Units 12-Charlie + 08-Bravo · En Route
          </p>
        </div>

        {/* Right: ETA + live badge */}
        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 12px', borderRadius: 9999, background: 'rgba(16,19,27,0.6)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <span className="animate-pulse" style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#adc6ff' }} />
            <span style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Live Monitoring</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
            <span style={{ fontSize: '2rem', fontWeight: 900, fontStyle: 'italic', color: '#fff', fontFamily: 'var(--font-space-mono), monospace', lineHeight: 1 }}>2.8</span>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: '#adc6ff', textTransform: 'uppercase' }}>MIN ETA</span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ height: 2, background: 'rgba(255,255,255,0.06)', flexShrink: 0 }}>
        <div style={{ height: '100%', width: '65%', background: 'linear-gradient(90deg, #3B9EFF, #adc6ff)' }} />
      </div>

      {/* ── Main split ── */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>

        {/* ── LEFT — Smartphone mockup ── */}
        <div
          style={{
            width: '36%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRight: '2px solid rgba(173,198,255,0.08)',
            padding: '12px 24px 0',
          }}
        >
          {/* Panel title */}
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#adc6ff' }}>smartphone</span>
            <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#adc6ff' }}>
              First Responder
            </span>
            <div style={{ flex: 1, height: 1, background: 'rgba(173,198,255,0.15)' }} />
          </div>
          {/* iPhone frame */}
          <div
            style={{
              position: 'relative',
              width: 260,
              borderRadius: 46,
              background: 'linear-gradient(160deg, #2a2a2c 0%, #1a1a1c 50%, #111113 100%)',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 0 60px rgba(59,158,255,0.1), 0 32px 64px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)',
              padding: '10px',
            }}
          >
            {/* Side buttons — volume */}
            <div style={{ position: 'absolute', left: -3, top: 80, width: 3, height: 28, background: '#3a3a3c', borderRadius: '2px 0 0 2px' }} />
            <div style={{ position: 'absolute', left: -3, top: 116, width: 3, height: 28, background: '#3a3a3c', borderRadius: '2px 0 0 2px' }} />
            {/* Side button — power */}
            <div style={{ position: 'absolute', right: -3, top: 100, width: 3, height: 44, background: '#3a3a3c', borderRadius: '0 2px 2px 0' }} />

            {/* Screen */}
            <div
              style={{
                borderRadius: 38,
                overflow: 'hidden',
                background: '#0a0f18',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
            {/* Dynamic Island */}
            <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0 6px', background: '#000' }}>
              <div style={{ width: 80, height: 22, borderRadius: 11, background: '#000', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.05)' }} />
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#222' }} />
              </div>
            </div>

            {/* Alert header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 14px',
                background: 'linear-gradient(90deg, #c25b3f, #e07b5a)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span
                  className="animate-pulse"
                  style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#fff' }}
                />
                <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#fff' }}>
                  Dispatch Alert
                </span>
              </div>
              <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>
                Priority 1
              </span>
            </div>

            {/* Camera feed */}
            <div style={{ position: 'relative', height: 110, background: '#000' }}>
              <Image
                src="/images/integrations/lpr-hero.jpeg"
                alt="CCTV Feed"
                fill
                style={{ objectFit: 'cover', filter: 'brightness(0.65)' }}
                sizes="260px"
              />
              <div style={{ position: 'absolute', top: 6, left: 8, fontSize: '7px', fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace' }}>
                CAM_ID: HWY_34_WEST
              </div>
              <div style={{ position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)',
                background: 'rgba(255,69,96,0.2)', border: '1.5px solid #FF4560', padding: '3px 12px', borderRadius: 2,
                fontSize: '8px', fontWeight: 800, color: '#FF4560', letterSpacing: '0.15em', whiteSpace: 'nowrap'
              }}>
                STOLEN · 7JKY442
              </div>
            </div>

            {/* Data rows */}
            <div style={{ padding: '10px 14px 8px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                { key: 'PLATE', value: '7JKY442', valueColor: '#E0ECF8' },
                { key: 'VELOCITY', value: '72 MPH', valueColor: '#E0ECF8' },
                { key: 'THREAT LEVEL', value: 'HIGH', valueColor: '#FF4560' },
              ].map((row) => (
                <div key={row.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '8px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#48647A' }}>
                    {row.key}
                  </span>
                  <span style={{ fontSize: '11px', fontWeight: 800, fontFamily: 'monospace', color: row.valueColor }}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Mini map */}
            <div
              style={{
                margin: '8px 14px',
                borderRadius: 6,
                height: 64,
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
                position: 'relative',
                background: '#060d16',
              }}
            >
              <Image
                src="/demo/lpr/stage-2-understand.jpg"
                alt="Route Map"
                fill
                style={{ objectFit: 'cover', filter: 'brightness(0.5) saturate(0.6)' }}
                sizes="232px"
              />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '7px', fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(173,198,255,0.6)', textTransform: 'uppercase', fontFamily: 'monospace' }}>
                  INTERCEPT ROUTE · HWY 45
                </span>
              </div>
            </div>

            {/* CTA buttons */}
            <div style={{ padding: '0 14px 10px', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <button
                style={{
                  width: '100%', padding: '9px 0', borderRadius: 8, border: 'none',
                  background: '#3B9EFF', color: '#fff',
                  fontSize: '10px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 13 }}>check_circle</span>
                Accept Dispatch
              </button>
              <button
                style={{
                  width: '100%', padding: '9px 0', borderRadius: 8,
                  background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.45)',
                  fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 13 }}>mic</span>
                Push to Talk
              </button>
            </div>

            {/* Body cam footer */}
            <div
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                padding: '6px 0 8px', background: '#0a0f18',
              }}
            >
              <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: '#48647A' }} />
              <span style={{ fontSize: '8px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#48647A', fontFamily: 'monospace' }}>
                Body Cam — Standby
              </span>
            </div>

            {/* Home indicator */}
            <div style={{ display: 'flex', justifyContent: 'center', padding: '6px 0 8px', background: '#000' }}>
              <div style={{ width: 80, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.2)' }} />
            </div>
            </div>{/* end screen */}
          </div>{/* end iPhone frame */}

          {/* Stage label below phone */}
          <div style={{ marginTop: 12, textAlign: 'center' }}>
            <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#3B9EFF' }}>
              {stage.stageLabel}
            </div>
          </div>
        </div>

        {/* ── RIGHT — Dispatcher console ── */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

          {/* Right panel title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 20px 8px', flexShrink: 0 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#adc6ff' }}>monitor</span>
            <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#adc6ff' }}>
              Dispatcher Console
            </span>
            <div style={{ flex: 1, height: 1, background: 'rgba(173,198,255,0.15)' }} />
          </div>

          <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>

          {/* Unit list */}
          <div
            style={{
              width: '38%',
              borderRight: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div style={{ padding: '14px 20px 10px', borderBottom: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
              <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#48647A' }}>
                Tactical Units
              </span>
            </div>

            {/* Unit rows */}
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {UNITS.map((unit) => (
                <div
                  key={unit.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 20px',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                    borderLeft: unit.active ? '3px solid #3B9EFF' : '3px solid transparent',
                    background: unit.active ? 'rgba(59,158,255,0.05)' : 'transparent',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: unit.active ? '#E0ECF8' : '#48647A', letterSpacing: '0.03em', fontFamily: 'monospace' }}>
                      {unit.id}
                    </div>
                    <div style={{ fontSize: '9px', color: '#48647A', marginTop: 2, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      {unit.role}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    {unit.status === 'AVAILABLE' && (
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00C98A', display: 'inline-block' }} />
                    )}
                    {unit.status === 'STANDBY' && (
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#48647A', display: 'inline-block' }} />
                    )}
                    {unit.active && (
                      <span className="material-symbols-outlined" style={{ fontSize: 14, color: '#3B9EFF' }}>
                        local_shipping
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Module tags */}
            <div style={{ padding: '10px 20px', borderTop: '1px solid rgba(255,255,255,0.06)', flexShrink: 0, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {stage.modules.map((m) => (
                <div
                  key={m}
                  style={{
                    fontSize: '8px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                    padding: '3px 10px', borderRadius: 4,
                    background: 'rgba(173,198,255,0.08)', border: '1px solid rgba(173,198,255,0.18)', color: '#adc6ff',
                  }}
                >
                  {m}
                </div>
              ))}
            </div>
          </div>

          {/* Operational map */}
          <div style={{ flex: 1, position: 'relative', background: '#060d16', overflow: 'hidden' }}>
            {/* Map background */}
            <Image
              src="/demo/lpr/stage-2-understand.jpg"
              alt="Operational Map"
              fill
              style={{ objectFit: 'cover', filter: 'brightness(0.35) saturate(0.5)' }}
              sizes="50vw"
            />

            {/* Coords overlay */}
            <div
              style={{
                position: 'absolute', top: 12, right: 12, zIndex: 10,
                background: 'rgba(8,16,26,0.75)', backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.06)',
                padding: '6px 10px', borderRadius: 6,
                fontSize: '8px', fontWeight: 700, fontFamily: 'monospace', color: 'rgba(255,255,255,0.4)',
                lineHeight: 1.6,
              }}
            >
              LAT: 34.0522° N<br />LNG: 118.2437° W
            </div>

            {/* Target dot — 7JKY442 */}
            <div
              style={{
                position: 'absolute', top: '42%', left: '58%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              }}
            >
              <div
                className="animate-pulse"
                style={{
                  width: 12, height: 12, borderRadius: '50%',
                  background: '#FF4560', boxShadow: '0 0 16px #FF4560',
                }}
              />
              <div style={{
                background: 'rgba(255,69,96,0.15)', border: '1px solid rgba(255,69,96,0.4)',
                padding: '2px 7px', borderRadius: 3,
                fontSize: '8px', fontWeight: 800, color: '#FF4560', fontFamily: 'monospace', letterSpacing: '0.08em',
              }}>
                7JKY442
              </div>
            </div>

            {/* Unit 12-C dot */}
            <div
              style={{
                position: 'absolute', top: '62%', left: '42%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
              }}
            >
              <div
                style={{
                  width: 14, height: 14, borderRadius: '50%',
                  background: '#3B9EFF', boxShadow: '0 0 12px rgba(59,158,255,0.6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <span style={{ fontSize: '6px', fontWeight: 900, color: '#fff' }}>◆</span>
              </div>
              <div style={{
                background: 'rgba(59,158,255,0.15)', border: '1px solid rgba(59,158,255,0.35)',
                padding: '2px 7px', borderRadius: 3,
                fontSize: '8px', fontWeight: 800, color: '#3B9EFF', fontFamily: 'monospace',
              }}>
                12-C
              </div>
            </div>

            {/* Zoom controls */}
            <div
              style={{
                position: 'absolute', bottom: 12, right: 12, zIndex: 10,
                display: 'flex', flexDirection: 'column', gap: 1,
              }}
            >
              {['+', '−'].map((s) => (
                <div
                  key={s}
                  style={{
                    width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(8,16,26,0.75)', backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.08)', borderRadius: 4,
                    fontSize: '14px', fontWeight: 700, color: 'rgba(255,255,255,0.45)', cursor: 'pointer',
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
          </div>{/* end inner flex */}
        </div>{/* end right panel */}
      </div>{/* end main split */}

      {/* ── PREV / NEXT buttons ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
          padding: '16px 0',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          flexShrink: 0,
          fontFamily: 'var(--font-manrope), Manrope, sans-serif',
        }}
      >
        {prevStage && (
          <button
            onClick={onPrev}
            style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '10px 24px', borderRadius: 12,
              background: 'rgba(16,19,27,0.4)', backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.45)',
              cursor: 'pointer', transition: 'all 0.25s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
          >
            <div style={{ width: 28, height: 28, borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 15 }}>arrow_back</span>
            </div>
            <div style={{ textAlign: 'left' }}>
              <span style={{ display: 'block', fontSize: '8px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 2 }}>Go back</span>
              <span style={{ fontSize: '1rem', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>‹ PREVIOUS: {prevStage.label}</span>
            </div>
          </button>
        )}

        {nextStage && (
          <button
            onClick={onNext}
            style={{
              display: 'flex', alignItems: 'center', gap: 16,
              padding: '10px 28px', borderRadius: 12,
              background: 'rgba(173,198,255,0.08)', border: '1px solid rgba(173,198,255,0.2)',
              color: '#adc6ff', cursor: 'pointer', transition: 'all 0.25s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(173,198,255,0.18)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(173,198,255,0.14)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(173,198,255,0.08)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            <div style={{ textAlign: 'left' }}>
              <span style={{ display: 'block', fontSize: '8px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.65, marginBottom: 2 }}>Proceed to next step</span>
              <span style={{ fontSize: '1rem', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>NEXT: {nextStage.label}</span>
            </div>
            <div style={{ width: 28, height: 28, borderRadius: 8, border: '1px solid rgba(173,198,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 15 }}>arrow_forward</span>
            </div>
          </button>
        )}
      </div>
    </div>
  )
}
