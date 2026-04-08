import Image from 'next/image'
import dynamic from 'next/dynamic'
import type { Stage } from '@/data/demo/types'

const GeoPanel = dynamic(() => import('./GeoPanel'), { ssr: false })
const DecideMapPanel = dynamic(() => import('./DecideMapPanel'), { ssr: false })

interface StageScreenProps {
  stage: Stage
  nextStage?: Stage
  prevStage?: Stage
  onNext: () => void
  onPrev: () => void
  isFirst: boolean
}

export default function StageScreen({
  stage,
  nextStage,
  prevStage,
  onNext,
  onPrev,
  isFirst,
}: StageScreenProps) {
  const hasPip = !!stage.pipImage || !!stage.pip2Image
  const pipCount = (stage.pipImage ? 1 : 0) + (stage.pip2Image ? 1 : 0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: 40 }}>

      {/* ── Cinematic panel ── */}
      <div
        className="demo-stage-panel"
        style={{
          position: 'relative',
          width: '90vw',
          height: '58vh',
          borderRadius: 16,
          overflow: 'hidden',
          border: '1px solid rgba(173,198,255,0.2)',
          boxShadow: '0 0 100px -20px rgba(75,142,255,0.15), 0 40px 100px rgba(0,0,0,0.8)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Background image */}
        {stage.backgroundImage ? (
          <div style={{ position: 'absolute', inset: 0 }}>
            <Image
              src={stage.backgroundImage}
              alt={stage.stageLabel}
              fill
              style={{ objectFit: stage.backgroundFit ?? 'cover' }}
              priority={isFirst}
              sizes="90vw"
            />
          </div>
        ) : (
          <div style={{ position: 'absolute', inset: 0, background: '#08101A' }} />
        )}

        {/* ── Inline call-intake admin panel ── */}
        {isFirst && stage.detectCard?.type === 'call-intake' && (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            padding: '28px 40px 24px',
            fontFamily: 'var(--font-manrope), Manrope, sans-serif',
          }}>
            {/* Title row */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#adc6ff' }}>
                  {stage.stageLabel.split(' — ')[0]}
                </span>
                <div style={{ height: 1, width: 28, background: 'rgba(173,198,255,0.3)' }} />
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
                fontWeight: 900, fontStyle: 'italic',
                letterSpacing: '-0.02em', textTransform: 'uppercase',
                lineHeight: 1.05, color: '#fff', margin: 0,
                textShadow: '0 2px 12px rgba(0,0,0,0.6)',
              }}>
                {stage.headline}
              </h2>
            </div>

            {/* Admin card — left + right panels */}
            <div style={{
              flex: 1, minHeight: 0,
              display: 'flex',
              flexDirection: 'row-reverse',
              borderRadius: 10,
              overflow: 'hidden',
              border: '1px solid rgba(59,158,255,0.15)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
              fontFamily: 'var(--font-space-mono), monospace',
            }}>
              {/* RIGHT — incident form */}
              <div style={{
                width: '52%', padding: '20px 24px',
                borderRight: '1px solid rgba(59,158,255,0.1)',
                display: 'flex', flexDirection: 'column',
                background: 'rgba(10,20,36,0.96)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#FF4560' }} className="animate-pulse" />
                    <span style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,69,96,0.85)' }}>
                      ACTIVE 911 CALL — ME-0847
                    </span>
                  </div>
                  {/* Call timer */}
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#FF8C9E', fontFamily: 'var(--font-space-mono), monospace', letterSpacing: '0.08em' }}>
                    00:00:03
                  </span>
                </div>
                {/* Call controls strip */}
                <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
                  {[
                    { icon: 'mic', label: 'MUTE', active: false },
                    { icon: 'pause', label: 'HOLD', active: false },
                    { icon: 'record_voice_over', label: 'RECORD', active: true },
                  ].map(ctrl => (
                    <div key={ctrl.label} style={{
                      display: 'flex', alignItems: 'center', gap: 5,
                      padding: '5px 10px', borderRadius: 5,
                      background: ctrl.active ? 'rgba(255,69,96,0.12)' : 'rgba(255,255,255,0.04)',
                      border: ctrl.active ? '1px solid rgba(255,69,96,0.3)' : '1px solid rgba(255,255,255,0.07)',
                    }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 11, color: ctrl.active ? '#FF8C9E' : 'rgba(255,255,255,0.3)' }}>{ctrl.icon}</span>
                      <span style={{ fontSize: '7px', fontWeight: 700, letterSpacing: '0.15em', color: ctrl.active ? '#FF8C9E' : 'rgba(255,255,255,0.3)' }}>{ctrl.label}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {stage.detectCard.fields.map((f) => (
                    <div key={f.key} style={{
                      display: 'flex', alignItems: 'baseline',
                      padding: '7px 12px', borderRadius: 5,
                      background: f.highlight ? 'rgba(255,69,96,0.06)' : 'rgba(255,255,255,0.03)',
                      border: f.highlight ? '1px solid rgba(255,69,96,0.2)' : '1px solid rgba(255,255,255,0.05)',
                    }}>
                      <span style={{ width: 120, flexShrink: 0, fontSize: '8px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.45)' }}>
                        {f.key}
                      </span>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: f.highlight ? '#FF8C9E' : '#c8dff0', letterSpacing: '0.03em' }}>
                        {f.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 8, marginTop: 'auto', paddingTop: 14 }}>
                  <button style={{ flex: 1, padding: '7px 0', borderRadius: 5, border: 'none', background: '#00C98A', color: '#fff', fontSize: '8px', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'default' }}>
                    ACCEPT &amp; DISPATCH
                  </button>
                  <button style={{ padding: '7px 14px', borderRadius: 5, border: '1px solid rgba(255,255,255,0.08)', background: 'transparent', color: 'rgba(255,255,255,0.3)', fontSize: '8px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'default' }}>
                    TRANSFER
                  </button>
                </div>
              </div>

              {/* RIGHT — live transcript */}
              <div style={{
                flex: 1, padding: '20px 22px',
                background: 'rgba(6,12,22,0.97)',
                display: 'flex', flexDirection: 'column',
              }}>
                {/* Live call header + waveform */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                    <span className="animate-pulse" style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#FF4560' }} />
                    <span style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,69,96,0.75)' }}>
                      LIVE CALL
                    </span>
                  </div>
                  {/* Animated waveform bars */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 2, height: 18 }}>
                    {[0.4,0.7,1,0.6,0.9,0.5,0.8,1,0.6,0.75,0.45,0.9,0.7,0.5,1,0.65,0.8,0.4,0.95,0.6].map((h, i) => (
                      <div
                        key={i}
                        className="animate-pulse"
                        style={{
                          width: 2,
                          borderRadius: 2,
                          background: '#FF4560',
                          opacity: 0.7,
                          height: `${h * 18}px`,
                          animationDelay: `${(i * 0.07).toFixed(2)}s`,
                          animationDuration: `${0.6 + (i % 4) * 0.15}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.4)', marginBottom: 12 }}>
                  AI TRANSCRIPT
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                  {stage.detectCard.transcript.map((line, i) => {
                    const isCaller = line.startsWith('CALLER')
                    return (
                      <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <span style={{ flexShrink: 0, fontSize: '8px', fontWeight: 700, letterSpacing: '0.1em', color: isCaller ? '#FF8C9E' : '#adc6ff', paddingTop: 2, width: 58 }}>
                          {isCaller ? 'CALLER' : 'DISPATCH'}
                        </span>
                        <span style={{ fontSize: '11px', color: isCaller ? 'rgba(255,180,171,0.8)' : 'rgba(173,198,255,0.7)', lineHeight: 1.5, fontWeight: 500 }}>
                          {line.replace(/^(CALLER|DISPATCH): /, '')}
                        </span>
                      </div>
                    )
                  })}
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center', opacity: 0.4 }}>
                    <span style={{ flexShrink: 0, fontSize: '8px', fontWeight: 700, color: '#FF8C9E', width: 58 }}>CALLER</span>
                    <div style={{ display: 'flex', gap: 4 }}>
                      {[0,1,2].map(j => (
                        <span key={j} className="animate-pulse" style={{ display: 'inline-block', width: 4, height: 4, borderRadius: '50%', background: '#FF8C9E', animationDelay: `${j * 0.2}s` }} />
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: 12, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {['CARDIAC', 'UNCONSCIOUS', 'ADULT MALE', 'P1 PRIORITY'].map(tag => (
                    <span key={tag} style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '0.12em', padding: '3px 9px', borderRadius: 4, background: 'rgba(255,69,96,0.1)', border: '1px solid rgba(255,69,96,0.28)', color: '#FF8C9E' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Panic-alert admin panel (school / panic button scenarios) ── */}
        {isFirst && stage.detectCard?.type === 'panic-alert' && (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            padding: '20px 32px 16px',
            fontFamily: 'var(--font-manrope), Manrope, sans-serif',
            background: 'rgba(8,14,24,0.97)',
          }}>
            {/* Title */}
            <div style={{ marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                  <span style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#FF8C9E' }}>
                    {stage.stageLabel.split(' — ')[0]}
                  </span>
                  <div style={{ height: 1, width: 28, background: 'rgba(255,140,158,0.3)' }} />
                </div>
                <h2 style={{
                  fontSize: 'clamp(1.2rem, 1.8vw, 2rem)', fontWeight: 900, fontStyle: 'italic',
                  letterSpacing: '-0.02em', textTransform: 'uppercase', lineHeight: 1.05,
                  color: '#fff', margin: 0,
                }}>
                  {stage.headline}
                </h2>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="animate-pulse" style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: '#FF5F5F' }} />
                <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FF8C9E' }}>LOCKDOWN ACTIVE</span>
              </div>
            </div>

            {/* 2-column body */}
            <div style={{
              flex: 1, minHeight: 0, display: 'flex', gap: 0,
              borderRadius: 10, overflow: 'hidden',
              border: '1px solid rgba(255,95,95,0.2)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
            }}>
              {/* LEFT — alert fields + timeline */}
              <div style={{ width: '42%', background: 'rgba(6,10,20,0.98)', borderRight: '1px solid rgba(255,95,95,0.1)', display: 'flex', flexDirection: 'column' }}>
                {/* Fields */}
                <div style={{ padding: '12px 16px 10px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,140,158,0.5)' }}>ALERT DETAILS</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {stage.detectCard.fields.map((f) => (
                    <div key={f.key} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '8px 16px', borderBottom: '1px solid rgba(255,255,255,0.04)',
                      background: f.highlight ? 'rgba(255,95,95,0.04)' : 'transparent',
                    }}>
                      <span style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(193,198,215,0.35)' }}>{f.key}</span>
                      <span style={{
                        fontSize: '11px', fontWeight: f.highlight ? 800 : 600,
                        color: f.highlight ? '#FF8C9E' : '#c8dff0',
                        fontFamily: 'var(--font-space-mono), monospace',
                        letterSpacing: f.highlight ? '0.05em' : '0',
                      }}>{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — floor plan + alert timeline */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'rgba(8,14,24,0.98)' }}>
                {/* Building floor plan */}
                <div style={{ flex: 1, padding: '14px 20px 10px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(173,198,215,0.35)', marginBottom: 10 }}>
                    BUILDING A — 2ND FLOOR
                  </div>
                  {/* Floor plan grid */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {/* Hallway label */}
                    <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                      {['201','202','203','204'].map(r => (
                        <div key={r} style={{
                          flex: 1, padding: '8px 4px', borderRadius: 5, textAlign: 'center',
                          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                          fontSize: '9px', fontWeight: 700, color: 'rgba(193,198,215,0.4)',
                          fontFamily: 'var(--font-space-mono), monospace',
                        }}>{r}</div>
                      ))}
                    </div>
                    <div style={{ height: 14, display: 'flex', alignItems: 'center', padding: '0 8px' }}>
                      <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.05)' }} />
                      <span style={{ fontSize: '7px', color: 'rgba(193,198,215,0.2)', padding: '0 8px', letterSpacing: '0.2em' }}>CORRIDOR</span>
                      <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.05)' }} />
                    </div>
                    <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                      {['211','212','213','214'].map(r => (
                        <div key={r} style={{
                          flex: 1, padding: '8px 4px', borderRadius: 5, textAlign: 'center',
                          position: 'relative',
                          background: r === '214' ? 'rgba(255,60,60,0.18)' : 'rgba(255,255,255,0.04)',
                          border: r === '214' ? '1.5px solid rgba(255,60,60,0.6)' : '1px solid rgba(255,255,255,0.07)',
                          boxShadow: r === '214' ? '0 0 16px rgba(255,60,60,0.25)' : 'none',
                          fontSize: '9px', fontWeight: r === '214' ? 900 : 700,
                          color: r === '214' ? '#FF8C9E' : 'rgba(193,198,215,0.4)',
                          fontFamily: 'var(--font-space-mono), monospace',
                        }}>
                          {r}
                          {r === '214' && (
                            <span className="animate-pulse" style={{
                              position: 'absolute', top: -4, right: -4,
                              width: 8, height: 8, borderRadius: '50%',
                              background: '#FF5F5F', border: '1px solid rgba(255,255,255,0.5)',
                            }} />
                          )}
                        </div>
                      ))}
                    </div>
                    <div style={{ height: 14, display: 'flex', alignItems: 'center', padding: '0 8px' }}>
                      <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.05)' }} />
                      <span style={{ fontSize: '7px', color: 'rgba(193,198,215,0.2)', padding: '0 8px', letterSpacing: '0.2em' }}>CORRIDOR</span>
                      <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.05)' }} />
                    </div>
                    <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                      {['221','222','223','224'].map(r => (
                        <div key={r} style={{
                          flex: 1, padding: '8px 4px', borderRadius: 5, textAlign: 'center',
                          background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                          fontSize: '9px', fontWeight: 700, color: 'rgba(193,198,215,0.4)',
                          fontFamily: 'var(--font-space-mono), monospace',
                        }}>{r}</div>
                      ))}
                    </div>
                    {/* Exit marker */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 14px', borderRadius: 4, background: 'rgba(0,201,138,0.08)', border: '1px solid rgba(0,201,138,0.2)' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 11, color: '#00C98A' }}>exit_to_app</span>
                        <span style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.15em', color: '#00C98A' }}>EMERGENCY EXIT</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Alert timeline */}
                <div style={{ padding: '10px 20px 12px' }}>
                  <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(173,198,215,0.35)', marginBottom: 8 }}>SYSTEM RESPONSE TIMELINE</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {stage.detectCard.alertTimeline?.map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                        <span style={{ fontSize: '9px', color: 'rgba(193,198,215,0.4)', fontFamily: 'var(--font-space-mono), monospace', flexShrink: 0, width: 54 }}>{item.time}</span>
                        <div style={{
                          width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
                          background: item.done ? '#00C98A' : 'rgba(255,255,255,0.15)',
                          boxShadow: item.done ? '0 0 6px rgba(0,201,138,0.5)' : 'none',
                        }} />
                        <span style={{
                          fontSize: '10px', fontWeight: item.done ? 600 : 400,
                          color: item.done ? '#c8dff0' : 'rgba(193,198,215,0.4)',
                          fontFamily: 'var(--font-space-mono), monospace',
                        }}>
                          {!item.done && <span className="animate-pulse" style={{ marginRight: 4, color: '#FF8C9E' }}>▶</span>}
                          {item.event}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: stage.detectCard
              ? 'linear-gradient(to top, rgba(8,16,26,0.95) 0%, transparent 40%)'
              : 'linear-gradient(to top, rgba(16,19,27,0.92) 0%, transparent 55%, rgba(16,19,27,0.2) 100%)',
          }}
        />

        {/* ── Scanning grid overlay — detect stage only, not when detectCard is present ── */}
        {isFirst && !stage.detectCard && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.05,
              pointerEvents: 'none',
              backgroundImage: [
                'linear-gradient(0deg, transparent 24%, rgba(75,142,255,.3) 25%, rgba(75,142,255,.3) 26%, transparent 27%, transparent 74%, rgba(75,142,255,.3) 75%, rgba(75,142,255,.3) 76%, transparent 77%, transparent)',
                'linear-gradient(90deg, transparent 24%, rgba(75,142,255,.3) 25%, rgba(75,142,255,.3) 26%, transparent 27%, transparent 74%, rgba(75,142,255,.3) 75%, rgba(75,142,255,.3) 76%, transparent 77%, transparent)',
              ].join(', '),
              backgroundSize: '50px 50px',
            }}
          />
        )}

        {/* ── Bounding box overlay — only when stage provides detectOverlay ── */}
        {isFirst && stage.detectOverlay && (
          <div
            style={{
              position: 'absolute',
              top: '40%',
              left: '35%',
              width: '30%',
              height: '25%',
              border: '2px solid rgba(173,198,255,0.6)',
              borderRadius: 2,
              zIndex: 10,
            }}
          >
            <div
              className="animate-pulse"
              style={{
                position: 'absolute',
                bottom: -30,
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#ffb4ab',
                color: '#690005',
                fontSize: '9px',
                fontWeight: 900,
                padding: '4px 14px',
                borderRadius: 4,
                whiteSpace: 'nowrap',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              {stage.detectOverlay.label}
            </div>
            <div
              style={{
                position: 'absolute',
                right: -4,
                top: 0,
                transform: 'translateX(100%)',
                background: 'rgba(16,19,27,0.55)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(173,198,255,0.4)',
                padding: '8px 10px',
                borderRadius: 8,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                minWidth: 112,
              }}
            >
              <span
                style={{
                  fontSize: '8px',
                  fontWeight: 700,
                  color: 'rgba(173,198,255,0.65)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                {stage.detectOverlay.tagKey}
              </span>
              <div
                style={{
                  background: 'rgba(255,255,255,0.92)',
                  color: '#000',
                  fontFamily: 'var(--font-space-mono), monospace',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  textAlign: 'center',
                  padding: '3px 8px',
                  borderRadius: 4,
                  letterSpacing: '0.1em',
                }}
              >
                {stage.detectOverlay.tagValue}
              </div>
            </div>
          </div>
        )}

        {/* ── Top-right: live monitoring + timestamp ── */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            right: 44,
            zIndex: 20,
            textAlign: 'right',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '4px 14px',
              borderRadius: 9999,
              background: 'rgba(16,19,27,0.45)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.06)',
              marginBottom: 8,
            }}
          >
            <span
              className="animate-pulse"
              style={{
                display: 'inline-block',
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#adc6ff',
              }}
            />
            <span
              style={{
                fontSize: '8px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.55)',
              }}
            >
              Live Monitoring
            </span>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-space-mono), Space Mono, monospace',
              fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
              fontWeight: 700,
              fontStyle: 'italic',
              color: '#fff',
              letterSpacing: '0.05em',
              textShadow: '0 0 20px rgba(59,158,255,0.35)',
            }}
          >
            {stage.timestamp}
          </div>
        </div>

        {/* ── PiP widgets — stacked bottom-right ── */}
        {[
          { img: stage.pipImage, label: stage.pipLabel },
          { img: stage.pip2Image, label: stage.pip2Label },
        ].map((pip, idx) =>
          pip.img ? (
            <div
              key={idx}
              className={`demo-pip demo-pip-${idx}`}
              style={{
                position: 'absolute',
                bottom: idx === 0 ? 36 : 36 + 116 + 10,
                right: 36,
                width: 200,
                aspectRatio: '16/9',
                zIndex: 30,
                borderRadius: 8,
                overflow: 'hidden',
                border: '1px solid rgba(173,198,255,0.4)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.8)',
                background: '#000',
              }}
            >
              <Image
                src={pip.img}
                alt={pip.label ?? ''}
                fill
                style={{ objectFit: 'cover', filter: 'brightness(0.72)' }}
                sizes="200px"
              />
              {/* LIVE badge */}
              <div
                style={{
                  position: 'absolute',
                  top: 6,
                  left: 6,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  background: 'rgba(16,19,27,0.6)',
                  backdropFilter: 'blur(8px)',
                  padding: '2px 7px',
                  borderRadius: 4,
                  fontSize: '8px',
                  fontWeight: 700,
                }}
              >
                <span className="animate-pulse" style={{ color: '#ffb4ab', fontSize: 9 }}>●</span>
                <span style={{ color: 'rgba(255,255,255,0.8)' }}>LIVE</span>
              </div>
              {/* Label */}
              {pip.label && (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'rgba(0,0,0,0.65)',
                    backdropFilter: 'blur(4px)',
                    padding: '4px 8px',
                    fontSize: '8px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.45)',
                  }}
                >
                  {pip.label}
                </div>
              )}
            </div>
          ) : null
        )}

        {/* ── Detect stage: data points at bottom-left, modules at bottom-right ── */}
        {isFirst && !stage.detectCard && (
          <div
            style={{
              position: 'absolute',
              bottom: 28,
              left: 44,
              right: 44,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              zIndex: 20,
            }}
          >
            {/* Data points */}
            <div style={{ display: 'flex', gap: 40 }}>
              {stage.dataPoints.map((dp) => (
                <div key={dp.key}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '8px',
                      fontWeight: 700,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'rgba(173,198,255,0.6)',
                      marginBottom: 4,
                    }}
                  >
                    {dp.key}
                  </span>
                  <span
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      letterSpacing: '-0.01em',
                      color: '#fff',
                    }}
                  >
                    {dp.value}
                  </span>
                </div>
              ))}
            </div>
            {/* System modules */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
              <span
                style={{
                  fontSize: '8px',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.28)',
                }}
              >
                System Modules
              </span>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                {stage.modules.map((m) => (
                  <div
                    key={m}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 10px',
                      height: 28,
                      background: 'rgba(16,19,27,0.45)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 4,
                      fontSize: '8px',
                      fontWeight: 700,
                      color: 'rgba(255,255,255,0.55)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Decide panel (map + unit list + AI score + brief) ── */}
        {!isFirst && stage.decideCard && (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            padding: '20px 32px 16px',
            fontFamily: 'var(--font-manrope), Manrope, sans-serif',
          }}>
            {/* Title row */}
            <div style={{ marginBottom: 12, display: 'flex', alignItems: 'baseline', gap: 20 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                  <span style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#adc6ff' }}>
                    {stage.stageLabel.split(' — ')[0]}
                  </span>
                  <div style={{ height: 1, width: 28, background: 'rgba(173,198,255,0.3)' }} />
                </div>
                <h2 style={{
                  fontSize: 'clamp(1.2rem, 1.8vw, 2rem)', fontWeight: 900, fontStyle: 'italic',
                  letterSpacing: '-0.02em', textTransform: 'uppercase', lineHeight: 1.05,
                  color: '#fff', margin: 0, textShadow: '0 2px 12px rgba(0,0,0,0.6)',
                }}>
                  {stage.headline}
                </h2>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto' }}>
                <span className="animate-pulse" style={{ display: 'inline-block', width: 7, height: 7, borderRadius: '50%', background: '#00C98A' }} />
                <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#00C98A' }}>LIVE MONITORING</span>
              </div>
            </div>

            {/* Main 2-column layout: map | sidebar */}
            <div style={{
              flex: 1, minHeight: 0, display: 'flex', gap: 0,
              borderRadius: 10, overflow: 'hidden',
              border: '1px solid rgba(59,158,255,0.15)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
              fontFamily: 'var(--font-space-mono), monospace',
            }}>

              {/* LEFT — Leaflet map with incident + units */}
              <div style={{ flex: '0 0 55%', position: 'relative', background: '#0d1117' }}>
                <DecideMapPanel
                  incidentCoords={stage.decideCard.incidentCoords}
                  units={stage.decideCard.units}
                />
                {/* Map legend overlay */}
                <div style={{
                  position: 'absolute', bottom: 10, left: 10, zIndex: 1000,
                  display: 'flex', flexDirection: 'column', gap: 5,
                  padding: '8px 12px', borderRadius: 6,
                  background: 'rgba(8,14,24,0.88)', border: '1px solid rgba(255,255,255,0.08)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF5F5F', flexShrink: 0 }} />
                    <span style={{ fontSize: '8px', color: 'rgba(193,198,215,0.7)', letterSpacing: '0.1em' }}>INCIDENT</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00C98A', flexShrink: 0 }} />
                    <span style={{ fontSize: '8px', color: 'rgba(193,198,215,0.7)', letterSpacing: '0.1em' }}>ASSIGNED</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#3B9EFF', flexShrink: 0 }} />
                    <span style={{ fontSize: '8px', color: 'rgba(193,198,215,0.7)', letterSpacing: '0.1em' }}>EN ROUTE</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(193,198,215,0.35)', flexShrink: 0 }} />
                    <span style={{ fontSize: '8px', color: 'rgba(193,198,215,0.7)', letterSpacing: '0.1em' }}>STANDBY / AVAILABLE</span>
                  </div>
                </div>
              </div>

              {/* RIGHT — unit list + AI score + brief */}
              <div style={{ flex: 1, background: 'rgba(6,12,22,0.98)', display: 'flex', flexDirection: 'column', borderLeft: '1px solid rgba(59,158,255,0.1)' }}>

                {/* Unit roster */}
                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ padding: '10px 16px 8px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.4)' }}>AVAILABLE EMS UNITS</span>
                  </div>
                  {stage.decideCard.units.map((u) => {
                    const statusBg = u.status === 'ASSIGNED' ? 'rgba(0,201,138,0.15)' : u.status === 'EN ROUTE' ? 'rgba(59,158,255,0.15)' : 'rgba(255,255,255,0.04)'
                    const statusColor = u.status === 'ASSIGNED' ? '#00C98A' : u.status === 'EN ROUTE' ? '#3B9EFF' : '#48647A'
                    const statusBorder = u.status === 'ASSIGNED' ? 'rgba(0,201,138,0.3)' : u.status === 'EN ROUTE' ? 'rgba(59,158,255,0.3)' : 'rgba(255,255,255,0.06)'
                    const leftBorder = u.status === 'ASSIGNED' ? '#00C98A' : u.status === 'EN ROUTE' ? '#3B9EFF' : 'transparent'
                    return (
                      <div key={u.id} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '8px 16px',
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                        borderLeft: `3px solid ${leftBorder}`,
                        background: u.active ? 'rgba(59,158,255,0.04)' : 'transparent',
                      }}>
                        <div>
                          <div style={{ fontSize: '12px', fontWeight: 700, color: u.active ? '#E0ECF8' : '#48647A', letterSpacing: '0.05em' }}>{u.id}</div>
                          <div style={{ fontSize: '8px', color: '#48647A', marginTop: 1, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{u.role} · {u.distance} · {u.eta}</div>
                        </div>
                        <div style={{
                          fontSize: '7px', fontWeight: 800, letterSpacing: '0.12em', padding: '2px 7px', borderRadius: 3,
                          background: statusBg, color: statusColor, border: `1px solid ${statusBorder}`,
                        }}>{u.status}</div>
                      </div>
                    )
                  })}
                </div>

                {/* AI score + dispatched */}
                <div style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="72" height="72" viewBox="0 0 72 72">
                      <circle cx="36" cy="36" r="30" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
                      <circle cx="36" cy="36" r="30" fill="none" stroke="#00C98A" strokeWidth="6"
                        strokeDasharray={`${2 * Math.PI * 30 * (stage.decideCard.aiScore / 100)} ${2 * Math.PI * 30}`}
                        strokeLinecap="round" transform="rotate(-90 36 36)"
                      />
                    </svg>
                    <div style={{ position: 'absolute', textAlign: 'center' }}>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: '#00C98A', lineHeight: 1 }}>{stage.decideCard.aiScore}%</div>
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '7px', color: 'rgba(173,198,215,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 4 }}>AI SELECTION SCORE</div>
                    <div style={{ fontSize: '7px', color: 'rgba(0,201,138,0.7)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 2 }}>DISPATCHED TO</div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#00C98A' }}>{stage.decideCard.dispatchedTo}</div>
                  </div>
                </div>

                {/* Dispatch brief */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '10px 16px', gap: 6, overflow: 'hidden' }}>
                  <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.4)', marginBottom: 4 }}>DISPATCH BRIEF SENT</div>
                  {stage.decideCard.briefItems.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', padding: '6px 10px', borderRadius: 5, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 12, color: '#3B9EFF', flexShrink: 0, marginTop: 1 }}>check_circle</span>
                      <span style={{ fontSize: '10px', color: '#c8dff0', lineHeight: 1.5, fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Dispatch confirmed banner */}
                <div style={{ margin: '0 12px 12px', padding: '8px 12px', borderRadius: 6, background: 'rgba(0,201,138,0.08)', border: '1px solid rgba(0,201,138,0.25)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="animate-pulse" style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#00C98A', flexShrink: 0 }} />
                  <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#00C98A' }}>DISPATCH CONFIRMED · UNITS EN ROUTE</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Geo-analysis panel (understand-type stages) ── */}
        {!isFirst && stage.geoPanel && (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            padding: '24px 40px 20px',
            fontFamily: 'var(--font-manrope), Manrope, sans-serif',
          }}>
            {/* Title */}
            <div style={{ marginBottom: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                <span style={{ fontSize: '10px', fontWeight: 900, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#adc6ff' }}>
                  {stage.stageLabel.split(' — ')[0]}
                </span>
                <div style={{ height: 1, width: 28, background: 'rgba(173,198,255,0.3)' }} />
              </div>
              <h2 style={{
                fontSize: 'clamp(1.4rem, 2.2vw, 2.25rem)', fontWeight: 900, fontStyle: 'italic',
                letterSpacing: '-0.02em', textTransform: 'uppercase', lineHeight: 1.05,
                color: '#fff', margin: 0, textShadow: '0 2px 12px rgba(0,0,0,0.6)',
              }}>
                {stage.headline}
              </h2>
            </div>

            {/* Map + analysis */}
            <div style={{
              flex: 1, minHeight: 0, display: 'flex', gap: 0,
              borderRadius: 10, overflow: 'hidden',
              border: '1px solid rgba(59,158,255,0.15)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
            }}>
              {/* LEFT — map */}
              <div style={{ flex: 1, position: 'relative' }}>
                <GeoPanel
                  caller={stage.geoPanel.caller}
                  aeds={stage.geoPanel.aeds}
                  cameras={stage.geoPanel.cameras}
                />
                {/* Map legend */}
                <div style={{
                  position: 'absolute', bottom: 10, left: 10, zIndex: 999,
                  display: 'flex', flexDirection: 'column', gap: 5,
                  background: 'rgba(8,16,26,0.82)', backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.07)', borderRadius: 6, padding: '8px 12px',
                }}>
                  {[
                    { color: '#FF4560', label: 'Caller Location' },
                    { color: '#00C98A', label: 'AED Defibrillator' },
                    { color: '#3B9EFF', label: 'Active Camera' },
                  ].map(l => (
                    <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: l.color, flexShrink: 0 }} />
                      <span style={{ fontSize: '8px', fontWeight: 700, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{l.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — analysis sidebar */}
              <div style={{
                width: 240, background: 'rgba(8,16,26,0.97)',
                borderLeft: '1px solid rgba(59,158,255,0.1)',
                display: 'flex', flexDirection: 'column', padding: '16px 18px',
                fontFamily: 'var(--font-space-mono), monospace',
              }}>
                <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.4)', marginBottom: 12 }}>
                  AI ANALYSIS
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                  {stage.geoPanel.analysisRows.map(row => (
                    <div key={row.key} style={{
                      padding: '8px 10px', borderRadius: 5,
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.05)',
                    }}>
                      <div style={{ fontSize: '7px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.4)', marginBottom: 4 }}>
                        {row.key}
                      </div>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: row.color ?? '#c8dff0', letterSpacing: '0.03em' }}>
                        {row.value}
                      </div>
                    </div>
                  ))}
                </div>
                {/* AI tags */}
                <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                  {stage.geoPanel.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: '7px', fontWeight: 800, letterSpacing: '0.12em',
                      padding: '3px 8px', borderRadius: 4,
                      background: 'rgba(173,198,255,0.08)', border: '1px solid rgba(173,198,255,0.2)', color: '#adc6ff',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Stage 2+: all content at bottom-left ── */}
        {!isFirst && !stage.geoPanel && (
          <div
            style={{
              position: 'absolute',
              left: 44,
              bottom: 36,
              zIndex: 20,
              maxWidth: hasPip ? '52%' : '62%',
            }}
          >
            {/* Stage label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 900,
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                  color: '#adc6ff',
                }}
              >
                {stage.stageLabel}
              </span>
              <div style={{ height: 1, width: 28, background: 'rgba(173,198,255,0.3)' }} />
            </div>
            {/* Headline */}
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 3rem)',
                fontWeight: 900,
                letterSpacing: '-0.025em',
                textTransform: 'uppercase',
                fontStyle: 'italic',
                lineHeight: 1.05,
                color: '#fff',
                marginBottom: 14,
                textShadow: '0 2px 12px rgba(0,0,0,0.6)',
              }}
            >
              {stage.headline}
            </h2>
            {/* Description */}
            <p
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.875rem',
                fontWeight: 500,
                lineHeight: 1.65,
                marginBottom: 20,
                maxWidth: 500,
              }}
            >
              {stage.description}
            </p>
            {/* Data points */}
            <div style={{ display: 'flex', gap: 48 }}>
              {stage.dataPoints.map((dp) => (
                <div key={dp.key}>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '8px',
                      fontWeight: 900,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'rgba(173,198,255,0.6)',
                      marginBottom: 6,
                    }}
                  >
                    {dp.key}
                  </span>
                  <span
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      letterSpacing: '-0.01em',
                      color: '#fff',
                      fontStyle: 'italic',
                      textTransform: 'uppercase',
                    }}
                  >
                    {dp.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Stage 2+: system modules above PiP (or bottom-right if no PiP) ── */}
        {!isFirst && !stage.geoPanel && (
          <div
            style={{
              position: 'absolute',
              bottom: pipCount >= 2 ? 310 : hasPip ? 196 : 36,
              right: 44,
              zIndex: 20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: 6,
            }}
          >
            <span
              style={{
                fontSize: '8px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.28)',
              }}
            >
              System Modules
            </span>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              {stage.modules.map((m) => (
                <div
                  key={m}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '0 10px',
                    height: 28,
                    background: 'rgba(16,19,27,0.45)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 4,
                    fontSize: '8px',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.55)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {m}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Detect stage: headline top-left ── */}
        {isFirst && !stage.detectCard && (
          <div
            style={{
              position: 'absolute',
              top: 40,
              left: 44,
              zIndex: 20,
              maxWidth: '55%',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 900,
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                  color: '#adc6ff',
                }}
              >
                {stage.stageLabel.split(' — ')[0]}
              </span>
              <div style={{ height: 1, width: 28, background: 'rgba(173,198,255,0.3)' }} />
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                fontStyle: 'italic',
                lineHeight: 1.05,
                color: '#fff',
                marginBottom: 10,
                textShadow: '0 2px 12px rgba(0,0,0,0.6)',
              }}
            >
              {stage.headline}
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.78)',
                fontSize: '0.875rem',
                fontWeight: 500,
                lineHeight: 1.6,
                maxWidth: 440,
              }}
            >
              {stage.description}
            </p>
          </div>
        )}
      </div>

      {/* ── Navigation below panel — always centered ── */}
      <div
        className="demo-stage-nav"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
          marginTop: 24,
          fontFamily: 'var(--font-manrope), Manrope, sans-serif',
        }}
      >
        {/* PREV button */}
        {prevStage && (
          <button
            onClick={onPrev}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: '12px 28px',
              borderRadius: 12,
              background: 'rgba(16,19,27,0.4)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.45)',
              cursor: 'pointer',
              transition: 'all 0.25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#fff'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.45)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_back</span>
            </div>
            <div style={{ textAlign: 'left' }}>
              <span style={{ display: 'block', fontSize: '8px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 2 }}>
                Go back
              </span>
              <span style={{ fontSize: '1.05rem', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>
                ‹ PREVIOUS: {prevStage.label}
              </span>
            </div>
          </button>
        )}

        {/* NEXT button */}
        {nextStage && (
          <button
            onClick={onNext}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: '12px 32px',
              borderRadius: 12,
              background: 'rgba(173,198,255,0.08)',
              border: '1px solid rgba(173,198,255,0.2)',
              color: '#adc6ff',
              cursor: 'pointer',
              transition: 'all 0.25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(173,198,255,0.18)'
              e.currentTarget.style.boxShadow = '0 4px 24px rgba(173,198,255,0.14)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(173,198,255,0.08)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={{ textAlign: 'left' }}>
              <span style={{ display: 'block', fontSize: '8px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.65, marginBottom: 2 }}>
                Proceed to next step
              </span>
              <span style={{ fontSize: '1.1rem', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>
                NEXT: {nextStage.label}
              </span>
            </div>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                border: '1px solid rgba(173,198,255,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
            </div>
          </button>
        )}
      </div>
    </div>
  )
}
