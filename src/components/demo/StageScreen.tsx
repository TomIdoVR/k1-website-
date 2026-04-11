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
                  {(stage.detectCard.transcript ?? []).map((line, i) => {
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

        {/* ── Panic-alert panel: CCTV image left + floor plan right ── */}
        {isFirst && stage.detectCard?.type === 'panic-alert' && (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            padding: '20px 32px 16px',
            fontFamily: 'var(--font-manrope), Manrope, sans-serif',
            background: 'rgba(6,10,20,0.97)',
          }}>
            {/* Title row */}
            <div style={{ marginBottom: 12, display: 'flex', alignItems: 'baseline', gap: 20 }}>
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
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="animate-pulse" style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: '#FF5F5F' }} />
                <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#FF8C9E' }}>LOCKDOWN ACTIVE</span>
              </div>
            </div>

            {/* 2-column body */}
            <div style={{
              flex: 1, minHeight: 0, display: 'flex', gap: 0,
              borderRadius: 10, overflow: 'hidden',
              border: '1px solid rgba(255,95,95,0.2)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.7)',
            }}>

              {/* LEFT — CCTV camera feed */}
              {stage.detectCard.cameraImage && (
                <div style={{ flex: '0 0 55%', position: 'relative', background: '#000', overflow: 'hidden' }}>
                  <Image
                    src={stage.detectCard.cameraImage}
                    alt="CCTV feed"
                    fill
                    style={{ objectFit: 'cover', filter: 'saturate(0.3) brightness(0.85) contrast(1.1)', mixBlendMode: 'luminosity' }}
                    sizes="55vw"
                  />
                  {/* Green tint overlay for CCTV feel */}
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,40,20,0.35)', mixBlendMode: 'multiply' }} />
                  {/* Scanlines */}
                  <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.12,
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.8) 2px, rgba(0,0,0,0.8) 4px)',
                  }} />
                  {/* Camera HUD — top bar */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '10px 14px',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span className="animate-pulse" style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#FF5F5F' }} />
                      <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', color: '#FF8C9E', fontFamily: 'var(--font-space-mono), monospace' }}>
                        {stage.detectCard.cameraLabel ?? 'SECURITY CAM'}
                      </span>
                    </div>
                    <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(193,255,180,0.7)', fontFamily: 'var(--font-space-mono), monospace' }}>
                      {stage.timestamp}
                    </span>
                  </div>
                  {/* Alert box — left wall where person is pressing the button */}
                  <div style={{
                    position: 'absolute',
                    top: '28%', left: '2%',
                    width: '18%', height: '42%',
                    border: '2px solid rgba(255,60,60,0.85)',
                    borderRadius: 3,
                    boxShadow: '0 0 24px rgba(255,60,60,0.5), inset 0 0 16px rgba(255,60,60,0.06)',
                  }}>
                    <div style={{
                      position: 'absolute', bottom: -22, left: 0,
                      fontSize: '8px', fontWeight: 800, letterSpacing: '0.15em',
                      color: '#FF8C9E', background: 'rgba(20,4,4,0.85)',
                      padding: '2px 8px', borderRadius: '0 0 3px 3px',
                      fontFamily: 'var(--font-space-mono), monospace',
                      whiteSpace: 'nowrap',
                    }}>⚠ PANIC BUTTON ACTIVATED</div>
                  </div>
                  {/* Camera HUD — bottom bar */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '10px 14px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  }}>
                    <span style={{ fontSize: '8px', color: 'rgba(193,255,180,0.5)', fontFamily: 'var(--font-space-mono), monospace', letterSpacing: '0.1em' }}>
                      LINCOLN MIDDLE SCHOOL · BLDG A 2F
                    </span>
                    <span style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.15em', color: '#FF8C9E', fontFamily: 'var(--font-space-mono), monospace' }}>
                      ● REC
                    </span>
                  </div>
                </div>
              )}

              {/* RIGHT — SVG floor plan with sensors + legend */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'rgba(6,10,20,0.99)', borderLeft: '1px solid rgba(255,95,95,0.15)' }}>

                {/* Header */}
                <div style={{ padding: '10px 16px 8px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span className="animate-pulse" style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#FF4444' }} />
                    <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,140,158,0.8)' }}>BUILDING A · 2ND FLOOR</span>
                  </div>
                  <span style={{ fontSize: '8px', fontWeight: 700, color: '#FF8C9E', fontFamily: 'var(--font-space-mono), monospace' }}>⚠ ALERT</span>
                </div>

                {/* SVG Architectural Floor Plan */}
                <div style={{ flex: 1, padding: '6px 10px 4px', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
                  <svg viewBox="0 0 360 254" style={{ flex: 1, width: '100%', height: '100%' }}>
                    <defs>
                      {/* Blueprint fine grid */}
                      <pattern id="bp-grid" width="14" height="14" patternUnits="userSpaceOnUse">
                        <path d="M 14 0 L 0 0 0 14" fill="none" stroke="rgba(80,130,210,0.1)" strokeWidth="0.35"/>
                      </pattern>
                      {/* Wall hatching — diagonal lines inside thick walls */}
                      <pattern id="wall-fill" width="5" height="5" patternUnits="userSpaceOnUse">
                        <rect width="5" height="5" fill="rgba(190,215,255,0.82)"/>
                        <line x1="0" y1="5" x2="5" y2="0" stroke="rgba(80,120,200,0.45)" strokeWidth="0.9"/>
                      </pattern>
                      {/* Alert wall hatching */}
                      <pattern id="alert-wall-fill" width="5" height="5" patternUnits="userSpaceOnUse">
                        <rect width="5" height="5" fill="rgba(220,160,165,0.85)"/>
                        <line x1="0" y1="5" x2="5" y2="0" stroke="rgba(200,60,60,0.5)" strokeWidth="0.9"/>
                      </pattern>
                    </defs>

                    {/* Blueprint background */}
                    <rect x="0" y="0" width="360" height="254" fill="#030f20"/>
                    <rect x="0" y="0" width="360" height="254" fill="url(#bp-grid)"/>

                    {/* ── OUTER WALLS (7px thick) ── */}
                    <rect x="8" y="8"   width="344" height="7" fill="url(#wall-fill)"/>  {/* top */}
                    <rect x="8" y="239" width="344" height="7" fill="url(#wall-fill)"/>  {/* bottom */}
                    <rect x="8" y="8"   width="7"   height="238" fill="url(#wall-fill)"/>{/* left */}
                    <rect x="345" y="8" width="7"   height="238" fill="url(#wall-fill)"/>{/* right */}

                    {/* ── VERTICAL INNER WALLS — top section ── */}
                    {/* Assembly Hall | Principal's Office  at x=192 */}
                    <rect x="192" y="15" width="7" height="87" fill="url(#wall-fill)"/>
                    {/* Principal's | Registrar's at x=264 */}
                    <rect x="264" y="15" width="7" height="87" fill="url(#wall-fill)"/>

                    {/* ── VERTICAL INNER WALLS — bottom section ── */}
                    {/* Classroom 1 | 2  at x=102 */}
                    <rect x="102" y="128" width="7" height="111" fill="url(#wall-fill)"/>
                    {/* Classroom 2 | Faculty  at x=192 */}
                    <rect x="192" y="128" width="7" height="111" fill="url(#wall-fill)"/>
                    {/* Faculty | 214 (alert)  at x=272 */}
                    <rect x="272" y="128" width="7" height="111" fill="url(#wall-fill)"/>

                    {/* ── TOP HALLWAY WALL at y=102 (with door gaps) ── */}
                    {/* Assembly Hall door gap at x=76, w=16 */}
                    <rect x="15" y="102" width="61" height="6" fill="url(#wall-fill)"/>
                    {/* door swing arc — opens into hallway */}
                    <line x1="76" y1="102" x2="76" y2="108" stroke="rgba(190,215,255,0.6)" strokeWidth="0.9"/>
                    <path d="M76,102 A16,16 0 0,1 92,108" fill="none" stroke="rgba(190,215,255,0.45)" strokeWidth="0.8" strokeDasharray="2.5,1.5"/>
                    <rect x="92" y="102" width="100" height="6" fill="url(#wall-fill)"/>
                    {/* Principal's door gap at x=210, w=16 — after vertical wall at 192-199 */}
                    <rect x="199" y="102" width="11" height="6" fill="url(#wall-fill)"/>
                    <line x1="210" y1="102" x2="210" y2="108" stroke="rgba(190,215,255,0.6)" strokeWidth="0.9"/>
                    <path d="M210,102 A16,16 0 0,1 226,108" fill="none" stroke="rgba(190,215,255,0.45)" strokeWidth="0.8" strokeDasharray="2.5,1.5"/>
                    <rect x="226" y="102" width="38" height="6" fill="url(#wall-fill)"/>
                    {/* Registrar door gap at x=286, w=16 — after vertical wall at 264-271 */}
                    <rect x="271" y="102" width="15" height="6" fill="url(#wall-fill)"/>
                    <line x1="286" y1="102" x2="286" y2="108" stroke="rgba(190,215,255,0.6)" strokeWidth="0.9"/>
                    <path d="M286,102 A16,16 0 0,1 302,108" fill="none" stroke="rgba(190,215,255,0.45)" strokeWidth="0.8" strokeDasharray="2.5,1.5"/>
                    <rect x="302" y="102" width="43" height="6" fill="url(#wall-fill)"/>

                    {/* ── BOTTOM HALLWAY WALL at y=122 (with door gaps) ── */}
                    {/* Room 211 door gap at x=42, w=16 */}
                    <rect x="15" y="122" width="27" height="6" fill="url(#wall-fill)"/>
                    <line x1="42" y1="128" x2="42" y2="122" stroke="rgba(190,215,255,0.6)" strokeWidth="0.9"/>
                    <path d="M42,128 A16,16 0 0,0 58,122" fill="none" stroke="rgba(190,215,255,0.45)" strokeWidth="0.8" strokeDasharray="2.5,1.5"/>
                    <rect x="58" y="122" width="44" height="6" fill="url(#wall-fill)"/>
                    {/* Room 212 door gap at x=128, w=16 — after vertical wall at 102-109 */}
                    <rect x="109" y="122" width="19" height="6" fill="url(#wall-fill)"/>
                    <line x1="128" y1="128" x2="128" y2="122" stroke="rgba(190,215,255,0.6)" strokeWidth="0.9"/>
                    <path d="M128,128 A16,16 0 0,0 144,122" fill="none" stroke="rgba(190,215,255,0.45)" strokeWidth="0.8" strokeDasharray="2.5,1.5"/>
                    <rect x="144" y="122" width="48" height="6" fill="url(#wall-fill)"/>
                    {/* Faculty door gap at x=210, w=16 — after vertical wall at 192-199 */}
                    <rect x="199" y="122" width="11" height="6" fill="url(#wall-fill)"/>
                    <line x1="210" y1="128" x2="210" y2="122" stroke="rgba(190,215,255,0.6)" strokeWidth="0.9"/>
                    <path d="M210,128 A16,16 0 0,0 226,122" fill="none" stroke="rgba(190,215,255,0.45)" strokeWidth="0.8" strokeDasharray="2.5,1.5"/>
                    <rect x="226" y="122" width="46" height="6" fill="url(#wall-fill)"/>
                    {/* Room 214 door gap at x=296, w=16 — after vertical wall at 272-279 (alert — use red tint) */}
                    <rect x="279" y="122" width="17" height="6" fill="url(#wall-fill)"/>
                    <line x1="296" y1="128" x2="296" y2="122" stroke="rgba(255,100,100,0.7)" strokeWidth="0.9"/>
                    <path d="M296,128 A16,16 0 0,0 312,122" fill="none" stroke="rgba(255,100,100,0.4)" strokeWidth="0.8" strokeDasharray="2.5,1.5"/>
                    <rect x="312" y="122" width="33" height="6" fill="url(#wall-fill)"/>

                    {/* ── STAIRWELL LEFT — inside hallway ── */}
                    <rect x="15" y="108" width="32" height="14" fill="rgba(180,210,255,0.04)" stroke="rgba(180,210,255,0.35)" strokeWidth="0.8"/>
                    {[0,1,2,3].map(i => (
                      <line key={i} x1="15" y1={109.5+i*3} x2="47" y2={109.5+i*3} stroke="rgba(180,210,255,0.22)" strokeWidth="0.6"/>
                    ))}
                    <line x1="15" y1="122" x2="47" y2="108" stroke="rgba(180,210,255,0.18)" strokeWidth="0.7"/>

                    {/* ── STAIRWELL RIGHT — inside hallway ── */}
                    <rect x="313" y="108" width="32" height="14" fill="rgba(180,210,255,0.04)" stroke="rgba(180,210,255,0.35)" strokeWidth="0.8"/>
                    {[0,1,2,3].map(i => (
                      <line key={i} x1="313" y1={109.5+i*3} x2="345" y2={109.5+i*3} stroke="rgba(180,210,255,0.22)" strokeWidth="0.6"/>
                    ))}
                    <line x1="313" y1="122" x2="345" y2="108" stroke="rgba(180,210,255,0.18)" strokeWidth="0.7"/>

                    {/* ── CORRIDOR LABEL ── */}
                    <text x="183" y="118" textAnchor="middle" fill="rgba(160,200,255,0.2)" fontSize="6" letterSpacing="5" fontFamily="monospace" fontWeight="600">C O R R I D O R</text>
                    {/* Corridor cameras */}
                    <circle cx="100" cy="114" r="3.5" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.6)" strokeWidth="1"/>
                    <line x1="100" y1="108" x2="100" y2="110.5" stroke="rgba(59,158,255,0.4)" strokeWidth="0.7"/>
                    <circle cx="248" cy="114" r="3.5" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.6)" strokeWidth="1"/>
                    <line x1="248" y1="108" x2="248" y2="110.5" stroke="rgba(59,158,255,0.4)" strokeWidth="0.7"/>

                    {/* ════ TOP ROOMS ════ */}

                    {/* ASSEMBLY HALL */}
                    <rect x="15" y="15" width="177" height="87" fill="rgba(255,255,255,0.018)"/>
                    <text x="103" y="54" textAnchor="middle" fill="rgba(180,210,255,0.72)" fontSize="9.5" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.5">ASSEMBLY HALL</text>
                    <text x="103" y="66" textAnchor="middle" fill="rgba(140,180,255,0.28)" fontSize="5.5" fontFamily="monospace" letterSpacing="1.5">CAPACITY · 300</text>
                    {/* Assembly cameras */}
                    <circle cx="28" cy="25" r="4" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.6)" strokeWidth="1"/>
                    <line x1="28" y1="15" x2="28" y2="21" stroke="rgba(59,158,255,0.4)" strokeWidth="0.8"/>
                    <circle cx="180" cy="25" r="4" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.6)" strokeWidth="1"/>
                    <line x1="180" y1="15" x2="180" y2="21" stroke="rgba(59,158,255,0.4)" strokeWidth="0.8"/>

                    {/* PRINCIPAL'S OFFICE */}
                    <rect x="199" y="15" width="65" height="87" fill="rgba(255,255,255,0.015)"/>
                    <text x="231" y="53" textAnchor="middle" fill="rgba(180,210,255,0.65)" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">PRINCIPAL</text>
                    <text x="231" y="63" textAnchor="middle" fill="rgba(180,210,255,0.65)" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">OFFICE</text>
                    <circle cx="212" cy="25" r="3.5" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.6)" strokeWidth="1"/>
                    <line x1="212" y1="15" x2="212" y2="21.5" stroke="rgba(59,158,255,0.4)" strokeWidth="0.8"/>

                    {/* REGISTRAR'S OFFICE */}
                    <rect x="271" y="15" width="74" height="87" fill="rgba(255,255,255,0.015)"/>
                    <text x="308" y="53" textAnchor="middle" fill="rgba(180,210,255,0.65)" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">REGISTRAR</text>
                    <text x="308" y="63" textAnchor="middle" fill="rgba(180,210,255,0.65)" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">OFFICE</text>
                    <circle cx="284" cy="25" r="3.5" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.6)" strokeWidth="1"/>
                    <line x1="284" y1="15" x2="284" y2="21.5" stroke="rgba(59,158,255,0.4)" strokeWidth="0.8"/>

                    {/* ════ BOTTOM ROOMS ════ */}

                    {/* CLASSROOM 1 (211) */}
                    <rect x="15" y="128" width="87" height="111" fill="rgba(255,255,255,0.015)"/>
                    <text x="58" y="181" textAnchor="middle" fill="rgba(180,210,255,0.62)" fontSize="7" fontWeight="700" fontFamily="sans-serif">CLASS</text>
                    <text x="58" y="191" textAnchor="middle" fill="rgba(180,210,255,0.62)" fontSize="7" fontWeight="700" fontFamily="sans-serif">ROOM 1</text>
                    <circle cx="27" cy="140" r="3.5" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.6)" strokeWidth="1"/>
                    <line x1="27" y1="128" x2="27" y2="136" stroke="rgba(59,158,255,0.4)" strokeWidth="0.8"/>

                    {/* CLASSROOM 2 (212) */}
                    <rect x="109" y="128" width="83" height="111" fill="rgba(255,255,255,0.015)"/>
                    <text x="150" y="181" textAnchor="middle" fill="rgba(180,210,255,0.62)" fontSize="7" fontWeight="700" fontFamily="sans-serif">CLASS</text>
                    <text x="150" y="191" textAnchor="middle" fill="rgba(180,210,255,0.62)" fontSize="7" fontWeight="700" fontFamily="sans-serif">ROOM 2</text>
                    <circle cx="121" cy="140" r="3.5" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.6)" strokeWidth="1"/>
                    <line x1="121" y1="128" x2="121" y2="136" stroke="rgba(59,158,255,0.4)" strokeWidth="0.8"/>

                    {/* TEACHER'S FACULTY ROOM (213) */}
                    <rect x="199" y="128" width="73" height="111" fill="rgba(255,255,255,0.015)"/>
                    <text x="235" y="174" textAnchor="middle" fill="rgba(180,210,255,0.62)" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">TEACHER</text>
                    <text x="235" y="184" textAnchor="middle" fill="rgba(180,210,255,0.62)" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">FACULTY</text>
                    <text x="235" y="194" textAnchor="middle" fill="rgba(180,210,255,0.62)" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">ROOM</text>
                    <circle cx="211" cy="140" r="3.5" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.6)" strokeWidth="1"/>
                    <line x1="211" y1="128" x2="211" y2="136" stroke="rgba(59,158,255,0.4)" strokeWidth="0.8"/>

                    {/* ── ROOM 214 — ALERT ── */}
                    <rect x="279" y="128" width="66" height="111" fill="rgba(255,20,20,0.08)"/>
                    {/* Pulsing alert fill */}
                    <rect x="279" y="128" width="66" height="111" fill="rgba(255,50,50,0.07)">
                      <animate attributeName="fill-opacity" values="0.07;0.22;0.07" dur="1.2s" repeatCount="indefinite"/>
                    </rect>
                    {/* Alert wall highlight on left divider */}
                    <rect x="272" y="128" width="7" height="111" fill="url(#alert-wall-fill)"/>
                    {/* Room label */}
                    <text x="312" y="168" textAnchor="middle" fill="rgba(255,140,158,0.75)" fontSize="7" fontWeight="700" fontFamily="sans-serif">CLASSROOM</text>
                    <text x="312" y="180" textAnchor="middle" fill="#FF6688" fontSize="13" fontWeight="900" fontFamily="monospace">214</text>
                    {/* Alert camera (red) */}
                    <circle cx="292" cy="140" r="3.5" fill="rgba(255,60,60,0.2)" stroke="rgba(255,100,100,0.85)" strokeWidth="1"/>
                    <line x1="292" y1="128" x2="292" y2="136" stroke="rgba(255,80,80,0.6)" strokeWidth="0.8"/>
                    {/* Panic button */}
                    <circle cx="325" cy="152" r="7" fill="rgba(255,30,30,0.28)" stroke="#FF4444" strokeWidth="1.6"/>
                    <circle cx="325" cy="152" r="3.8" fill="#FF4444"/>
                    <circle cx="325" cy="152" r="7" fill="none" stroke="rgba(255,60,60,0.5)" strokeWidth="1.5">
                      <animate attributeName="r" values="7;15;7" dur="1.3s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.6;0;0.6" dur="1.3s" repeatCount="indefinite"/>
                    </circle>
                    <text x="325" y="165" textAnchor="middle" fill="rgba(255,140,158,0.85)" fontSize="4.5" fontWeight="bold" fontFamily="monospace">PANIC</text>
                    {/* Alert badge */}
                    <rect x="281" y="198" width="62" height="13" rx="2" fill="rgba(255,40,40,0.18)" stroke="rgba(255,80,80,0.5)" strokeWidth="0.7"/>
                    <text x="312" y="207.5" textAnchor="middle" fill="#FF8C9E" fontSize="5.5" fontWeight="bold" fontFamily="monospace">⚠ ALERT ACTIVE</text>

                    {/* ── ENTRANCE indicator at bottom center ── */}
                    {/* Door opening in bottom wall at center */}
                    <rect x="155" y="239" width="50" height="7" fill="#030f20"/>
                    <line x1="155" y1="239" x2="155" y2="246" stroke="rgba(190,215,255,0.7)" strokeWidth="1.2"/>
                    <line x1="205" y1="239" x2="205" y2="246" stroke="rgba(190,215,255,0.7)" strokeWidth="1.2"/>
                    <text x="180" y="252" textAnchor="middle" fill="rgba(180,210,255,0.35)" fontSize="5.5" fontFamily="monospace" letterSpacing="2">ENTRANCE</text>
                  </svg>
                </div>

                {/* Legend */}
                <div style={{ padding: '5px 12px 8px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: 14, flexWrap: 'wrap', flexShrink: 0 }}>
                  {[
                    { color: 'rgba(59,158,255,0.7)', label: 'CAMERA' },
                    { color: '#FF4444',               label: 'SOS BUTTON' },
                    { color: 'rgba(0,201,138,0.7)',   label: 'STAIRWELL' },
                  ].map(l => (
                    <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <div style={{ width: 7, height: 7, borderRadius: '50%', background: l.color }}/>
                      <span style={{ fontSize: '7px', color: l.color, fontFamily: 'var(--font-space-mono), monospace', letterSpacing: '0.08em' }}>{l.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Access-breach panel: CCTV left + corporate floor plan right ── */}
        {isFirst && stage.detectCard?.type === 'access-breach' && (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'row',
            background: 'rgba(6,10,20,0.98)',
          }}>
            {/* LEFT — CCTV feed */}
            <div style={{ flex: '0 0 55%', position: 'relative', overflow: 'hidden' }}>
              {/* HUD top bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '10px 14px', background: 'linear-gradient(to bottom, rgba(6,10,20,0.9), transparent)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ display: 'inline-block', width: 7, height: 7, borderRadius: '50%', background: '#FF4444', boxShadow: '0 0 6px #FF4444' }} className="animate-pulse" />
                  <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.25em', color: 'rgba(255,140,140,0.9)', fontFamily: 'var(--font-space-mono), monospace' }}>{stage.detectCard.cameraLabel}</span>
                </div>
                <span style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,180,180,0.7)', fontFamily: 'var(--font-space-mono), monospace' }}>{stage.timestamp}</span>
              </div>
              {/* Image */}
              {stage.detectCard.cameraImage && (
                <img
                  src={stage.detectCard.cameraImage}
                  alt="CCTV"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(18%) contrast(1.1) brightness(0.82)' }}
                />
              )}
              {/* Scanlines */}
              <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.07) 2px, rgba(0,0,0,0.07) 4px)',
              }} />
              {/* Bounding box — turnstile / access gate area */}
              <div style={{
                position: 'absolute', top: '30%', left: '35%', width: '30%', height: '45%',
                border: '2px solid rgba(255,80,80,0.75)', borderRadius: 2, zIndex: 10,
              }}>
                <div style={{
                  position: 'absolute', bottom: -22, left: '50%', transform: 'translateX(-50%)',
                  background: '#FF4444', color: '#fff',
                  fontSize: '8px', fontWeight: 900, padding: '3px 10px', borderRadius: 3,
                  whiteSpace: 'nowrap', letterSpacing: '0.15em',
                  fontFamily: 'var(--font-space-mono), monospace',
                }}>ACCESS DENIED</div>
              </div>
              {/* Face recognition overlay card — top-right corner */}
              <div style={{
                position: 'absolute', top: 44, right: 12, zIndex: 20,
                width: 130,
                background: 'rgba(8,12,24,0.92)',
                border: '1.5px solid rgba(255,60,60,0.7)',
                borderRadius: 5,
                overflow: 'hidden',
                boxShadow: '0 0 18px rgba(255,40,40,0.35), 0 4px 16px rgba(0,0,0,0.8)',
              }}>
                {/* Face image with corner detection brackets */}
                <div style={{ position: 'relative', width: '100%', paddingBottom: '75%' }}>
                  <img
                    src="/demo/access-control/face-match.jpg"
                    alt="face"
                    style={{
                      position: 'absolute', inset: 0, width: '100%', height: '100%',
                      objectFit: 'cover', objectPosition: 'center top',
                      filter: 'grayscale(30%) contrast(1.1) brightness(0.85)',
                    }}
                  />
                  {/* Corner bracket overlays */}
                  {[
                    { top: 6, left: 6, borderTop: '2px solid #FF4444', borderLeft: '2px solid #FF4444' },
                    { top: 6, right: 6, borderTop: '2px solid #FF4444', borderRight: '2px solid #FF4444' },
                    { bottom: 6, left: 6, borderBottom: '2px solid #FF4444', borderLeft: '2px solid #FF4444' },
                    { bottom: 6, right: 6, borderBottom: '2px solid #FF4444', borderRight: '2px solid #FF4444' },
                  ].map((s, i) => (
                    <div key={i} style={{ position: 'absolute', width: 10, height: 10, ...s }} />
                  ))}
                  {/* Scan line animation */}
                  <div style={{
                    position: 'absolute', left: 0, right: 0, height: 1,
                    background: 'rgba(255,80,80,0.6)',
                    boxShadow: '0 0 6px rgba(255,60,60,0.8)',
                    animation: 'faceScan 1.8s linear infinite',
                  }} />
                </div>
                {/* Labels */}
                <div style={{ padding: '4px 8px 5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: '8px', fontWeight: 900, color: '#FF4444', fontFamily: 'var(--font-space-mono), monospace', letterSpacing: '0.06em' }}>
                    ⚠ WATCHLIST MATCH
                  </div>
                  <div style={{ fontSize: '7px', color: 'rgba(255,140,140,0.6)', fontFamily: 'var(--font-space-mono), monospace' }}>
                    98.4%
                  </div>
                </div>
              </div>
              {/* Keyframe for scan line */}
              <style>{`@keyframes faceScan { 0%{top:0} 100%{top:100%} }`}</style>

              {/* Bottom HUD */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10,
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
                padding: '12px 14px', background: 'linear-gradient(to top, rgba(6,10,20,0.92), transparent)',
              }}>
                <span style={{ fontSize: '10px', color: 'rgba(255,200,200,0.5)', fontFamily: 'var(--font-space-mono), monospace', letterSpacing: '0.1em' }}>
                  BADGE #4491 · UNAUTHORIZED
                </span>
                <span style={{ fontSize: '9px', color: '#FF5F5F', fontFamily: 'var(--font-space-mono), monospace', fontWeight: 700 }}>● REC</span>
              </div>
            </div>

            {/* RIGHT — Corporate building floor plan */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'rgba(6,10,20,0.99)', borderLeft: '1px solid rgba(255,80,80,0.15)' }}>
              {/* Header */}
              <div style={{ padding: '10px 16px 8px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="animate-pulse" style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#FF4444' }} />
                  <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,140,140,0.8)' }}>EAST WING · LEVEL 3</span>
                </div>
                <span style={{ fontSize: '8px', fontWeight: 700, color: '#FF8C9E', fontFamily: 'var(--font-space-mono), monospace' }}>⚠ BREACH</span>
              </div>

              {/* SVG Corporate Floor Plan */}
              <div style={{ flex: 1, padding: '6px 10px 4px', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
                <svg viewBox="0 0 360 254" style={{ flex: 1, width: '100%', height: '100%' }}>
                  <defs>
                    <pattern id="ac-grid" width="14" height="14" patternUnits="userSpaceOnUse">
                      <path d="M 14 0 L 0 0 0 14" fill="none" stroke="rgba(80,130,210,0.08)" strokeWidth="0.35"/>
                    </pattern>
                    <pattern id="ac-wall" width="5" height="5" patternUnits="userSpaceOnUse">
                      <rect width="5" height="5" fill="rgba(190,215,255,0.82)"/>
                      <line x1="0" y1="5" x2="5" y2="0" stroke="rgba(80,120,200,0.45)" strokeWidth="0.9"/>
                    </pattern>
                    <pattern id="ac-alert-wall" width="5" height="5" patternUnits="userSpaceOnUse">
                      <rect width="5" height="5" fill="rgba(220,160,165,0.85)"/>
                      <line x1="0" y1="5" x2="5" y2="0" stroke="rgba(200,60,60,0.5)" strokeWidth="0.9"/>
                    </pattern>
                  </defs>

                  <rect x="0" y="0" width="360" height="254" fill="#030f20"/>
                  <rect x="0" y="0" width="360" height="254" fill="url(#ac-grid)"/>

                  {/* ── OUTER WALLS ── */}
                  <rect x="8"   y="8"   width="344" height="7"   fill="url(#ac-wall)"/>
                  <rect x="8"   y="239" width="344" height="7"   fill="url(#ac-wall)"/>
                  <rect x="8"   y="8"   width="7"   height="238" fill="url(#ac-wall)"/>
                  <rect x="345" y="8"   width="7"   height="238" fill="url(#ac-wall)"/>

                  {/* ── CORRIDOR horizontal walls ── */}
                  {/* Top of corridor at y=102 */}
                  <rect x="15"  y="102" width="180" height="6"  fill="url(#ac-wall)"/>
                  {/* gap for main entrance door at x=195–225 */}
                  <rect x="225" y="102" width="120" height="6"  fill="url(#ac-wall)"/>
                  {/* Bottom of corridor at y=128 */}
                  <rect x="15"  y="128" width="65"  height="6"  fill="url(#ac-wall)"/>
                  {/* gap for server room B door at x=80–104 */}
                  <rect x="104" y="128" width="241" height="6"  fill="url(#ac-wall)"/>

                  {/* ── VERTICAL DIVIDERS — top row ── */}
                  {/* IT Office | Conf Room at x=140 */}
                  <rect x="140" y="15"  width="6" height="87" fill="url(#ac-wall)"/>
                  {/* Conf Room | Security Desk at x=230 */}
                  <rect x="230" y="15"  width="6" height="87" fill="url(#ac-wall)"/>

                  {/* ── VERTICAL DIVIDERS — bottom row ── */}
                  {/* Server Room B | Storage at x=160 */}
                  <rect x="160" y="134" width="6" height="105" fill="url(#ac-wall)"/>
                  {/* Storage | Network Hub at x=255 */}
                  <rect x="255" y="134" width="6" height="105" fill="url(#ac-wall)"/>

                  {/* ── SERVER ROOM B alert divider (left wall) ── */}
                  <rect x="15" y="134" width="6" height="105" fill="url(#ac-alert-wall)"/>

                  {/* ── MAIN ENTRANCE — badge gate at top corridor gap ── */}
                  {/* Door swing into corridor */}
                  <line x1="195" y1="102" x2="195" y2="108" stroke="rgba(255,80,80,0.8)" strokeWidth="1.2"/>
                  <path d="M195,102 A30,30 0 0,1 225,108" fill="none" stroke="rgba(255,80,80,0.5)" strokeWidth="1" strokeDasharray="3,2"/>
                  {/* Turnstile / gate symbol */}
                  <rect x="196" y="109" width="28" height="19" rx="2" fill="rgba(255,40,40,0.12)" stroke="rgba(255,80,80,0.7)" strokeWidth="1"/>
                  <line x1="196" y1="118" x2="224" y2="118" stroke="rgba(255,80,80,0.45)" strokeWidth="0.8"/>
                  {/* X mark — denied */}
                  <line x1="200" y1="111" x2="220" y2="126" stroke="rgba(255,80,80,0.7)" strokeWidth="1.2"/>
                  <line x1="220" y1="111" x2="200" y2="126" stroke="rgba(255,80,80,0.7)" strokeWidth="1.2"/>
                  {/* Badge reader dot */}
                  <circle cx="189" cy="108" r="3.5" fill="rgba(255,40,40,0.3)" stroke="rgba(255,80,80,0.9)" strokeWidth="1.2"/>
                  <circle cx="189" cy="108" r="3.5" fill="none" stroke="rgba(255,40,40,0.4)" strokeWidth="1.5">
                    <animate attributeName="r" values="3.5;7;3.5" dur="1.4s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.5;0;0.5" dur="1.4s" repeatCount="indefinite"/>
                  </circle>
                  <text x="210" y="138" textAnchor="middle" fill="rgba(255,120,120,0.7)" fontSize="5" fontFamily="monospace" fontWeight="700" letterSpacing="0.5">MAIN ENTRANCE</text>

                  {/* ── SERVER ROOM B door gap at bottom wall y=128, x=80–104 ── */}
                  <line x1="80" y1="134" x2="80" y2="128" stroke="rgba(255,80,80,0.8)" strokeWidth="1.2"/>
                  <path d="M80,134 A24,24 0 0,0 104,128" fill="none" stroke="rgba(255,80,80,0.5)" strokeWidth="1" strokeDasharray="3,2"/>
                  {/* Server room B door label */}
                  <text x="50" y="145" textAnchor="middle" fill="rgba(255,120,120,0.8)" fontSize="5" fontFamily="monospace" fontWeight="700">SERVER RM B</text>
                  <text x="50" y="153" textAnchor="middle" fill="rgba(255,90,90,0.6)" fontSize="4.5" fontFamily="monospace">DOOR FORCED</text>

                  {/* ── STAIRWELL (right side of corridor) ── */}
                  <rect x="310" y="108" width="35" height="20" fill="rgba(180,210,255,0.04)" stroke="rgba(180,210,255,0.3)" strokeWidth="0.8"/>
                  {[0,1,2,3].map(i => (
                    <line key={i} x1="310" y1={109.5+i*4} x2="345" y2={109.5+i*4} stroke="rgba(180,210,255,0.2)" strokeWidth="0.6"/>
                  ))}
                  <line x1="310" y1="128" x2="345" y2="108" stroke="rgba(180,210,255,0.15)" strokeWidth="0.7"/>
                  <text x="327" y="123" textAnchor="middle" fill="rgba(180,210,255,0.3)" fontSize="4.5" fontFamily="monospace">STAIR</text>

                  {/* Corridor label */}
                  <text x="155" y="120" textAnchor="middle" fill="rgba(160,200,255,0.18)" fontSize="6" letterSpacing="4" fontFamily="monospace">C O R R I D O R</text>
                  {/* Corridor cameras */}
                  <circle cx="90"  cy="115" r="3" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.6)" strokeWidth="0.9"/>
                  <line x1="90"  y1="109" x2="90"  y2="112" stroke="rgba(59,158,255,0.35)" strokeWidth="0.7"/>
                  <circle cx="230" cy="115" r="3" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.6)" strokeWidth="0.9"/>
                  <line x1="230" y1="109" x2="230" y2="112" stroke="rgba(59,158,255,0.35)" strokeWidth="0.7"/>

                  {/* ════ TOP ROOMS ════ */}
                  {/* IT OPERATIONS */}
                  <rect x="15" y="15" width="125" height="87" fill="rgba(255,255,255,0.012)"/>
                  <text x="77" y="55" textAnchor="middle" fill="rgba(180,210,255,0.6)" fontSize="8" fontWeight="700" fontFamily="sans-serif">IT OPERATIONS</text>
                  <circle cx="28" cy="25" r="3.5" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.6)" strokeWidth="0.9"/>
                  <line x1="28" y1="15" x2="28" y2="21" stroke="rgba(59,158,255,0.35)" strokeWidth="0.7"/>

                  {/* CONFERENCE ROOM */}
                  <rect x="146" y="15" width="84" height="87" fill="rgba(255,255,255,0.012)"/>
                  <text x="188" y="53" textAnchor="middle" fill="rgba(180,210,255,0.6)" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">CONFERENCE</text>
                  <text x="188" y="63" textAnchor="middle" fill="rgba(180,210,255,0.6)" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">ROOM</text>
                  <circle cx="158" cy="25" r="3.5" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.6)" strokeWidth="0.9"/>
                  <line x1="158" y1="15" x2="158" y2="21" stroke="rgba(59,158,255,0.35)" strokeWidth="0.7"/>

                  {/* SECURITY DESK */}
                  <rect x="236" y="15" width="109" height="87" fill="rgba(255,255,255,0.012)"/>
                  <text x="290" y="53" textAnchor="middle" fill="rgba(180,210,255,0.6)" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">SECURITY</text>
                  <text x="290" y="63" textAnchor="middle" fill="rgba(180,210,255,0.6)" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">DESK</text>
                  <circle cx="248" cy="25" r="3.5" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.6)" strokeWidth="0.9"/>
                  <line x1="248" y1="15" x2="248" y2="21" stroke="rgba(59,158,255,0.35)" strokeWidth="0.7"/>

                  {/* ════ BOTTOM ROOMS ════ */}

                  {/* SERVER ROOM B — ALERT */}
                  <rect x="21" y="134" width="139" height="105" fill="rgba(255,20,20,0.07)"/>
                  <rect x="21" y="134" width="139" height="105" fill="rgba(255,50,50,0.06)">
                    <animate attributeName="fill-opacity" values="0.06;0.18;0.06" dur="1.2s" repeatCount="indefinite"/>
                  </rect>
                  <text x="90" y="175" textAnchor="middle" fill="rgba(255,140,158,0.7)" fontSize="7" fontWeight="700" fontFamily="sans-serif">SERVER</text>
                  <text x="90" y="185" textAnchor="middle" fill="#FF6688" fontSize="11" fontWeight="900" fontFamily="monospace">ROOM B</text>
                  {/* Forced entry indicator */}
                  <rect x="30" y="196" width="120" height="14" rx="2" fill="rgba(255,40,40,0.18)" stroke="rgba(255,80,80,0.55)" strokeWidth="0.8"/>
                  <text x="90" y="206" textAnchor="middle" fill="#FF8C9E" fontSize="6" fontWeight="900" fontFamily="monospace">⚠ FORCED ENTRY</text>
                  {/* Server rack symbols */}
                  {[0,1,2].map(i => (
                    <rect key={i} x={30+i*38} y="218" width="28" height="14" rx="1"
                      fill="rgba(59,100,180,0.1)" stroke="rgba(100,150,255,0.25)" strokeWidth="0.6"/>
                  ))}
                  {/* Alert camera */}
                  <circle cx="140" cy="144" r="3.5" fill="rgba(255,60,60,0.2)" stroke="rgba(255,100,100,0.85)" strokeWidth="1"/>
                  <line x1="140" y1="134" x2="140" y2="140" stroke="rgba(255,80,80,0.6)" strokeWidth="0.8"/>

                  {/* STORAGE */}
                  <rect x="166" y="134" width="89" height="105" fill="rgba(255,255,255,0.012)"/>
                  <text x="210" y="185" textAnchor="middle" fill="rgba(180,210,255,0.55)" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">STORAGE</text>
                  <circle cx="178" cy="144" r="3.5" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.55)" strokeWidth="0.9"/>
                  <line x1="178" y1="134" x2="178" y2="140" stroke="rgba(59,158,255,0.35)" strokeWidth="0.7"/>

                  {/* NETWORK HUB */}
                  <rect x="261" y="134" width="84" height="105" fill="rgba(255,255,255,0.012)"/>
                  <text x="303" y="178" textAnchor="middle" fill="rgba(180,210,255,0.55)" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">NETWORK</text>
                  <text x="303" y="188" textAnchor="middle" fill="rgba(180,210,255,0.55)" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">HUB</text>
                  <circle cx="273" cy="144" r="3.5" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.55)" strokeWidth="0.9"/>
                  <line x1="273" y1="134" x2="273" y2="140" stroke="rgba(59,158,255,0.35)" strokeWidth="0.7"/>
                </svg>
              </div>

              {/* Legend */}
              <div style={{ padding: '5px 12px 8px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: 14, flexWrap: 'wrap', flexShrink: 0 }}>
                {[
                  { color: 'rgba(59,158,255,0.7)', label: 'CAMERA' },
                  { color: '#FF4444',               label: 'BREACH POINT' },
                  { color: 'rgba(180,210,255,0.5)', label: 'STAIRWELL' },
                ].map(l => (
                  <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <div style={{ width: 7, height: 7, borderRadius: '50%', background: l.color }}/>
                    <span style={{ fontSize: '7px', color: l.color, fontFamily: 'var(--font-space-mono), monospace', letterSpacing: '0.08em' }}>{l.label}</span>
                  </div>
                ))}
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
              {/* LEFT — street map (full width, or 55% when blueprintPanel active) */}
              <div style={{ flex: stage.geoPanel.blueprintPanel ? '0 0 55%' : 1, position: 'relative' }}>
                <GeoPanel
                  caller={stage.geoPanel.caller}
                  aeds={stage.geoPanel.aeds}
                  cameras={stage.geoPanel.cameras}
                  sosEvent={stage.geoPanel.sosEvent}
                />
                {/* Map label */}
                <div style={{ position: 'absolute', top: 8, left: 10, zIndex: 999, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: '7px', fontWeight: 800, letterSpacing: '0.25em', color: 'rgba(173,198,255,0.5)', fontFamily: 'var(--font-space-mono), monospace' }}>STREET MAP</span>
                </div>
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

              {/* BLUEPRINT PANEL — school floor plan (shown when blueprintPanel='school') */}
              {stage.geoPanel.blueprintPanel === 'school' && (
                <div style={{ flex: '0 0 45%', position: 'relative', borderLeft: '1px solid rgba(59,158,255,0.15)', background: '#030f20', display: 'flex', flexDirection: 'column' }}>
                  {/* Header */}
                  <div style={{ padding: '6px 12px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
                    <span style={{ fontSize: '7px', fontWeight: 800, letterSpacing: '0.25em', color: 'rgba(173,198,255,0.5)', fontFamily: 'var(--font-space-mono), monospace' }}>BUILDING BLUEPRINT</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <span className="animate-pulse" style={{ width: 5, height: 5, borderRadius: '50%', background: '#FF4444', display: 'inline-block' }} />
                      <span style={{ fontSize: '7px', fontWeight: 700, color: '#FF8C9E', fontFamily: 'var(--font-space-mono), monospace' }}>ALERT · ROOM 214</span>
                    </div>
                  </div>
                  {/* SVG — reuse school blueprint */}
                  <div style={{ flex: 1, padding: '4px 6px 2px', minHeight: 0 }}>
                    <svg viewBox="0 0 360 254" style={{ width: '100%', height: '100%' }}>
                      <defs>
                        <pattern id="bp-grid-2" width="14" height="14" patternUnits="userSpaceOnUse">
                          <path d="M 14 0 L 0 0 0 14" fill="none" stroke="rgba(80,130,210,0.1)" strokeWidth="0.35"/>
                        </pattern>
                        <pattern id="wall-fill-2" width="5" height="5" patternUnits="userSpaceOnUse">
                          <rect width="5" height="5" fill="rgba(190,215,255,0.82)"/>
                          <line x1="0" y1="5" x2="5" y2="0" stroke="rgba(80,120,200,0.45)" strokeWidth="0.9"/>
                        </pattern>
                        <pattern id="alert-wall-fill-2" width="5" height="5" patternUnits="userSpaceOnUse">
                          <rect width="5" height="5" fill="rgba(220,160,165,0.85)"/>
                          <line x1="0" y1="5" x2="5" y2="0" stroke="rgba(200,60,60,0.5)" strokeWidth="0.9"/>
                        </pattern>
                      </defs>
                      <rect x="0" y="0" width="360" height="254" fill="#030f20"/>
                      <rect x="0" y="0" width="360" height="254" fill="url(#bp-grid-2)"/>
                      {/* Outer walls */}
                      <rect x="8" y="8"   width="344" height="7" fill="url(#wall-fill-2)"/>
                      <rect x="8" y="239" width="344" height="7" fill="url(#wall-fill-2)"/>
                      <rect x="8" y="8"   width="7"   height="238" fill="url(#wall-fill-2)"/>
                      <rect x="345" y="8" width="7"   height="238" fill="url(#wall-fill-2)"/>
                      {/* Vertical inner walls top */}
                      <rect x="192" y="15" width="7" height="87" fill="url(#wall-fill-2)"/>
                      <rect x="264" y="15" width="7" height="87" fill="url(#wall-fill-2)"/>
                      {/* Vertical inner walls bottom */}
                      <rect x="102" y="128" width="7" height="111" fill="url(#wall-fill-2)"/>
                      <rect x="192" y="128" width="7" height="111" fill="url(#wall-fill-2)"/>
                      <rect x="272" y="128" width="7" height="111" fill="url(#wall-fill-2)"/>
                      {/* Top hallway wall segments + door swings */}
                      <rect x="15"  y="102" width="61" height="6" fill="url(#wall-fill-2)"/>
                      <line x1="76" y1="102" x2="76" y2="108" stroke="rgba(190,215,255,0.6)" strokeWidth="0.9"/>
                      <path d="M76,102 A16,16 0 0,1 92,108" fill="none" stroke="rgba(190,215,255,0.45)" strokeWidth="0.8" strokeDasharray="2.5,1.5"/>
                      <rect x="92"  y="102" width="100" height="6" fill="url(#wall-fill-2)"/>
                      <rect x="199" y="102" width="11"  height="6" fill="url(#wall-fill-2)"/>
                      <line x1="210" y1="102" x2="210" y2="108" stroke="rgba(190,215,255,0.6)" strokeWidth="0.9"/>
                      <path d="M210,102 A16,16 0 0,1 226,108" fill="none" stroke="rgba(190,215,255,0.45)" strokeWidth="0.8" strokeDasharray="2.5,1.5"/>
                      <rect x="226" y="102" width="38"  height="6" fill="url(#wall-fill-2)"/>
                      <rect x="271" y="102" width="15"  height="6" fill="url(#wall-fill-2)"/>
                      <line x1="286" y1="102" x2="286" y2="108" stroke="rgba(190,215,255,0.6)" strokeWidth="0.9"/>
                      <path d="M286,102 A16,16 0 0,1 302,108" fill="none" stroke="rgba(190,215,255,0.45)" strokeWidth="0.8" strokeDasharray="2.5,1.5"/>
                      <rect x="302" y="102" width="43"  height="6" fill="url(#wall-fill-2)"/>
                      {/* Bottom hallway wall + door swings */}
                      <rect x="15"  y="122" width="27"  height="6" fill="url(#wall-fill-2)"/>
                      <line x1="42" y1="128" x2="42" y2="122" stroke="rgba(190,215,255,0.6)" strokeWidth="0.9"/>
                      <path d="M42,128 A16,16 0 0,0 58,122" fill="none" stroke="rgba(190,215,255,0.45)" strokeWidth="0.8" strokeDasharray="2.5,1.5"/>
                      <rect x="58"  y="122" width="44"  height="6" fill="url(#wall-fill-2)"/>
                      <rect x="109" y="122" width="19"  height="6" fill="url(#wall-fill-2)"/>
                      <line x1="128" y1="128" x2="128" y2="122" stroke="rgba(190,215,255,0.6)" strokeWidth="0.9"/>
                      <path d="M128,128 A16,16 0 0,0 144,122" fill="none" stroke="rgba(190,215,255,0.45)" strokeWidth="0.8" strokeDasharray="2.5,1.5"/>
                      <rect x="144" y="122" width="48"  height="6" fill="url(#wall-fill-2)"/>
                      <rect x="199" y="122" width="11"  height="6" fill="url(#wall-fill-2)"/>
                      <line x1="210" y1="128" x2="210" y2="122" stroke="rgba(190,215,255,0.6)" strokeWidth="0.9"/>
                      <path d="M210,128 A16,16 0 0,0 226,122" fill="none" stroke="rgba(190,215,255,0.45)" strokeWidth="0.8" strokeDasharray="2.5,1.5"/>
                      <rect x="226" y="122" width="46"  height="6" fill="url(#wall-fill-2)"/>
                      <rect x="279" y="122" width="17"  height="6" fill="url(#wall-fill-2)"/>
                      <line x1="296" y1="128" x2="296" y2="122" stroke="rgba(255,100,100,0.7)" strokeWidth="0.9"/>
                      <path d="M296,128 A16,16 0 0,0 312,122" fill="none" stroke="rgba(255,100,100,0.4)" strokeWidth="0.8" strokeDasharray="2.5,1.5"/>
                      <rect x="312" y="122" width="33"  height="6" fill="url(#wall-fill-2)"/>
                      {/* Stairwells */}
                      <rect x="15" y="108" width="32" height="14" fill="rgba(180,210,255,0.04)" stroke="rgba(180,210,255,0.35)" strokeWidth="0.8"/>
                      {[0,1,2,3].map(i => <line key={i} x1="15" y1={109.5+i*3} x2="47" y2={109.5+i*3} stroke="rgba(180,210,255,0.22)" strokeWidth="0.6"/>)}
                      <line x1="15" y1="122" x2="47" y2="108" stroke="rgba(180,210,255,0.18)" strokeWidth="0.7"/>
                      <rect x="313" y="108" width="32" height="14" fill="rgba(180,210,255,0.04)" stroke="rgba(180,210,255,0.35)" strokeWidth="0.8"/>
                      {[0,1,2,3].map(i => <line key={i} x1="313" y1={109.5+i*3} x2="345" y2={109.5+i*3} stroke="rgba(180,210,255,0.22)" strokeWidth="0.6"/>)}
                      <line x1="313" y1="122" x2="345" y2="108" stroke="rgba(180,210,255,0.18)" strokeWidth="0.7"/>
                      {/* Corridor */}
                      <text x="183" y="118" textAnchor="middle" fill="rgba(160,200,255,0.2)" fontSize="6" letterSpacing="5" fontFamily="monospace" fontWeight="600">C O R R I D O R</text>
                      {/* Camera dots in corridor */}
                      <circle cx="100" cy="114" r="3" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.55)" strokeWidth="0.8"/>
                      <circle cx="248" cy="114" r="3" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.55)" strokeWidth="0.8"/>
                      {/* Top rooms */}
                      <rect x="15"  y="15" width="177" height="87" fill="rgba(255,255,255,0.015)"/>
                      <text x="103" y="56" textAnchor="middle" fill="rgba(180,210,255,0.65)" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">ASSEMBLY HALL</text>
                      <circle cx="28" cy="24" r="3.5" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.55)" strokeWidth="0.9"/>
                      <circle cx="180" cy="24" r="3.5" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.55)" strokeWidth="0.9"/>
                      <rect x="199" y="15" width="65" height="87" fill="rgba(255,255,255,0.015)"/>
                      <text x="231" y="53" textAnchor="middle" fill="rgba(180,210,255,0.6)" fontSize="6" fontWeight="700" fontFamily="sans-serif">PRINCIPAL</text>
                      <text x="231" y="62" textAnchor="middle" fill="rgba(180,210,255,0.6)" fontSize="6" fontWeight="700" fontFamily="sans-serif">OFFICE</text>
                      <rect x="271" y="15" width="74" height="87" fill="rgba(255,255,255,0.015)"/>
                      <text x="308" y="53" textAnchor="middle" fill="rgba(180,210,255,0.6)" fontSize="6" fontWeight="700" fontFamily="sans-serif">REGISTRAR</text>
                      <text x="308" y="62" textAnchor="middle" fill="rgba(180,210,255,0.6)" fontSize="6" fontWeight="700" fontFamily="sans-serif">OFFICE</text>
                      {/* Bottom rooms */}
                      <rect x="15"  y="128" width="87"  height="111" fill="rgba(255,255,255,0.013)"/>
                      <text x="58"  y="182" textAnchor="middle" fill="rgba(180,210,255,0.58)" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">CLASS 1</text>
                      <rect x="109" y="128" width="83"  height="111" fill="rgba(255,255,255,0.013)"/>
                      <text x="150" y="182" textAnchor="middle" fill="rgba(180,210,255,0.58)" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">CLASS 2</text>
                      <rect x="199" y="128" width="73"  height="111" fill="rgba(255,255,255,0.013)"/>
                      <text x="235" y="175" textAnchor="middle" fill="rgba(180,210,255,0.58)" fontSize="6" fontWeight="700" fontFamily="sans-serif">FACULTY</text>
                      <text x="235" y="184" textAnchor="middle" fill="rgba(180,210,255,0.58)" fontSize="6" fontWeight="700" fontFamily="sans-serif">ROOM</text>
                      {/* Room 214 ALERT */}
                      <rect x="279" y="128" width="66" height="111" fill="rgba(255,20,20,0.08)"/>
                      <rect x="279" y="128" width="66" height="111" fill="rgba(255,50,50,0.07)">
                        <animate attributeName="fill-opacity" values="0.07;0.22;0.07" dur="1.2s" repeatCount="indefinite"/>
                      </rect>
                      <rect x="272" y="128" width="7" height="111" fill="url(#alert-wall-fill-2)"/>
                      <text x="312" y="172" textAnchor="middle" fill="rgba(255,140,158,0.7)" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">ROOM</text>
                      <text x="312" y="183" textAnchor="middle" fill="#FF6688" fontSize="12" fontWeight="900" fontFamily="monospace">214</text>
                      <circle cx="292" cy="140" r="3" fill="rgba(255,60,60,0.2)" stroke="rgba(255,100,100,0.85)" strokeWidth="0.9"/>
                      {/* Panic button pulse */}
                      <circle cx="325" cy="152" r="6" fill="rgba(255,30,30,0.28)" stroke="#FF4444" strokeWidth="1.4"/>
                      <circle cx="325" cy="152" r="3.5" fill="#FF4444"/>
                      <circle cx="325" cy="152" r="6" fill="none" stroke="rgba(255,60,60,0.5)" strokeWidth="1.2">
                        <animate attributeName="r" values="6;13;6" dur="1.3s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.6;0;0.6" dur="1.3s" repeatCount="indefinite"/>
                      </circle>
                      {/* Alert badge */}
                      <rect x="283" y="200" width="58" height="12" rx="2" fill="rgba(255,40,40,0.18)" stroke="rgba(255,80,80,0.5)" strokeWidth="0.7"/>
                      <text x="312" y="209" textAnchor="middle" fill="#FF8C9E" fontSize="5" fontWeight="900" fontFamily="monospace">⚠ ALERT ACTIVE</text>
                      {/* Entrance */}
                      <rect x="155" y="239" width="50" height="7" fill="#030f20"/>
                      <line x1="155" y1="239" x2="155" y2="246" stroke="rgba(190,215,255,0.7)" strokeWidth="1.2"/>
                      <line x1="205" y1="239" x2="205" y2="246" stroke="rgba(190,215,255,0.7)" strokeWidth="1.2"/>
                      <text x="180" y="252" textAnchor="middle" fill="rgba(180,210,255,0.3)" fontSize="5" fontFamily="monospace" letterSpacing="2">ENTRANCE</text>
                    </svg>
                  </div>
                </div>
              )}

              {/* BLUEPRINT PANEL — office floor plan (shown when blueprintPanel='office') */}
              {stage.geoPanel.blueprintPanel === 'office' && (
                <div style={{ flex: '0 0 45%', position: 'relative', borderLeft: '1px solid rgba(255,80,80,0.15)', background: '#030f20', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ padding: '6px 12px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
                    <span style={{ fontSize: '7px', fontWeight: 800, letterSpacing: '0.25em', color: 'rgba(173,198,255,0.5)', fontFamily: 'var(--font-space-mono), monospace' }}>BUILDING BLUEPRINT</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <span className="animate-pulse" style={{ width: 5, height: 5, borderRadius: '50%', background: '#FF4444', display: 'inline-block' }} />
                      <span style={{ fontSize: '7px', fontWeight: 700, color: '#FF8C9E', fontFamily: 'var(--font-space-mono), monospace' }}>BREACH · SERVER ROOM B</span>
                    </div>
                  </div>
                  <div style={{ flex: 1, padding: '4px 6px 2px', minHeight: 0 }}>
                    <svg viewBox="0 0 360 254" style={{ width: '100%', height: '100%' }}>
                      <defs>
                        <pattern id="off-grid" width="14" height="14" patternUnits="userSpaceOnUse">
                          <path d="M 14 0 L 0 0 0 14" fill="none" stroke="rgba(80,130,210,0.08)" strokeWidth="0.35"/>
                        </pattern>
                        <pattern id="off-wall" width="5" height="5" patternUnits="userSpaceOnUse">
                          <rect width="5" height="5" fill="rgba(190,215,255,0.82)"/>
                          <line x1="0" y1="5" x2="5" y2="0" stroke="rgba(80,120,200,0.45)" strokeWidth="0.9"/>
                        </pattern>
                        <pattern id="off-alert-wall" width="5" height="5" patternUnits="userSpaceOnUse">
                          <rect width="5" height="5" fill="rgba(220,160,165,0.85)"/>
                          <line x1="0" y1="5" x2="5" y2="0" stroke="rgba(200,60,60,0.5)" strokeWidth="0.9"/>
                        </pattern>
                      </defs>
                      <rect x="0" y="0" width="360" height="254" fill="#030f20"/>
                      <rect x="0" y="0" width="360" height="254" fill="url(#off-grid)"/>
                      {/* Outer walls */}
                      <rect x="8" y="8" width="344" height="7" fill="url(#off-wall)"/>
                      <rect x="8" y="239" width="344" height="7" fill="url(#off-wall)"/>
                      <rect x="8" y="8" width="7" height="238" fill="url(#off-wall)"/>
                      <rect x="345" y="8" width="7" height="238" fill="url(#off-wall)"/>
                      {/* Corridor walls at y=105 and y=125 */}
                      <rect x="15" y="105" width="180" height="6" fill="url(#off-wall)"/>
                      {/* Main entrance door gap at x=195-225 */}
                      <rect x="225" y="105" width="120" height="6" fill="url(#off-wall)"/>
                      <line x1="195" y1="105" x2="195" y2="111" stroke="rgba(255,80,80,0.8)" strokeWidth="1.2"/>
                      <path d="M195,105 A30,30 0 0,1 225,111" fill="none" stroke="rgba(255,80,80,0.5)" strokeWidth="1" strokeDasharray="3,2"/>
                      {/* Turnstile symbol */}
                      <rect x="196" y="112" width="28" height="18" rx="2" fill="rgba(255,40,40,0.1)" stroke="rgba(255,80,80,0.6)" strokeWidth="0.9"/>
                      <line x1="196" y1="121" x2="224" y2="121" stroke="rgba(255,80,80,0.4)" strokeWidth="0.7"/>
                      <line x1="200" y1="114" x2="220" y2="128" stroke="rgba(255,80,80,0.6)" strokeWidth="1"/>
                      <line x1="220" y1="114" x2="200" y2="128" stroke="rgba(255,80,80,0.6)" strokeWidth="1"/>
                      <text x="210" y="140" textAnchor="middle" fill="rgba(255,120,120,0.6)" fontSize="4.5" fontFamily="monospace" fontWeight="700">MAIN ENTRANCE</text>
                      {/* Bottom corridor wall */}
                      <rect x="15" y="125" width="65" height="6" fill="url(#off-wall)"/>
                      {/* Server Room B door gap at x=80-104 */}
                      <rect x="104" y="125" width="241" height="6" fill="url(#off-wall)"/>
                      <line x1="80" y1="131" x2="80" y2="125" stroke="rgba(255,80,80,0.8)" strokeWidth="1.2"/>
                      <path d="M80,131 A24,24 0 0,0 104,125" fill="none" stroke="rgba(255,80,80,0.5)" strokeWidth="1" strokeDasharray="3,2"/>
                      {/* Vertical dividers top */}
                      <rect x="140" y="15" width="6" height="90" fill="url(#off-wall)"/>
                      <rect x="230" y="15" width="6" height="90" fill="url(#off-wall)"/>
                      {/* Vertical dividers bottom */}
                      <rect x="160" y="131" width="6" height="108" fill="url(#off-wall)"/>
                      <rect x="255" y="131" width="6" height="108" fill="url(#off-wall)"/>
                      {/* Alert left wall of Server Room B */}
                      <rect x="15" y="131" width="6" height="108" fill="url(#off-alert-wall)"/>
                      {/* Stairwell */}
                      <rect x="310" y="111" width="35" height="14" fill="rgba(180,210,255,0.04)" stroke="rgba(180,210,255,0.3)" strokeWidth="0.8"/>
                      {[0,1,2,3].map(i => <line key={i} x1="310" y1={112+i*3} x2="345" y2={112+i*3} stroke="rgba(180,210,255,0.2)" strokeWidth="0.6"/>)}
                      <line x1="310" y1="125" x2="345" y2="111" stroke="rgba(180,210,255,0.15)" strokeWidth="0.7"/>
                      {/* Corridor */}
                      <text x="155" y="121" textAnchor="middle" fill="rgba(160,200,255,0.18)" fontSize="6" letterSpacing="4" fontFamily="monospace">C O R R I D O R</text>
                      <circle cx="90"  cy="117" r="3" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.55)" strokeWidth="0.8"/>
                      <circle cx="230" cy="117" r="3" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.55)" strokeWidth="0.8"/>
                      {/* Top rooms */}
                      <rect x="15" y="15" width="125" height="90" fill="rgba(255,255,255,0.012)"/>
                      <text x="77" y="58" textAnchor="middle" fill="rgba(180,210,255,0.6)" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">IT OPERATIONS</text>
                      <circle cx="27" cy="25" r="3.2" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.55)" strokeWidth="0.8"/>
                      <rect x="146" y="15" width="84" height="90" fill="rgba(255,255,255,0.012)"/>
                      <text x="188" y="55" textAnchor="middle" fill="rgba(180,210,255,0.6)" fontSize="7" fontWeight="700" fontFamily="sans-serif">CONFERENCE</text>
                      <text x="188" y="64" textAnchor="middle" fill="rgba(180,210,255,0.6)" fontSize="7" fontWeight="700" fontFamily="sans-serif">ROOM</text>
                      <circle cx="158" cy="25" r="3.2" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.55)" strokeWidth="0.8"/>
                      <rect x="236" y="15" width="109" height="90" fill="rgba(255,255,255,0.012)"/>
                      <text x="290" y="55" textAnchor="middle" fill="rgba(180,210,255,0.6)" fontSize="7" fontWeight="700" fontFamily="sans-serif">SECURITY</text>
                      <text x="290" y="64" textAnchor="middle" fill="rgba(180,210,255,0.6)" fontSize="7" fontWeight="700" fontFamily="sans-serif">DESK</text>
                      <circle cx="248" cy="25" r="3.2" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.55)" strokeWidth="0.8"/>
                      {/* SERVER ROOM B — ALERT */}
                      <rect x="21" y="131" width="139" height="108" fill="rgba(255,20,20,0.07)"/>
                      <rect x="21" y="131" width="139" height="108" fill="rgba(255,50,50,0.06)">
                        <animate attributeName="fill-opacity" values="0.06;0.18;0.06" dur="1.2s" repeatCount="indefinite"/>
                      </rect>
                      <text x="90" y="178" textAnchor="middle" fill="rgba(255,140,158,0.7)" fontSize="7" fontWeight="700" fontFamily="sans-serif">SERVER</text>
                      <text x="90" y="190" textAnchor="middle" fill="#FF6688" fontSize="11" fontWeight="900" fontFamily="monospace">ROOM B</text>
                      <rect x="28" y="201" width="120" height="12" rx="2" fill="rgba(255,40,40,0.18)" stroke="rgba(255,80,80,0.55)" strokeWidth="0.7"/>
                      <text x="88" y="210" textAnchor="middle" fill="#FF8C9E" fontSize="5.5" fontWeight="900" fontFamily="monospace">⚠ FORCED ENTRY</text>
                      {[0,1,2].map(i => <rect key={i} x={28+i*38} y="220" width="28" height="12" rx="1" fill="rgba(59,100,180,0.1)" stroke="rgba(100,150,255,0.2)" strokeWidth="0.5"/>)}
                      <circle cx="140" cy="142" r="3.2" fill="rgba(255,60,60,0.2)" stroke="rgba(255,100,100,0.85)" strokeWidth="0.9"/>
                      {/* Storage */}
                      <rect x="166" y="131" width="89" height="108" fill="rgba(255,255,255,0.012)"/>
                      <text x="210" y="188" textAnchor="middle" fill="rgba(180,210,255,0.55)" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">STORAGE</text>
                      <circle cx="178" cy="142" r="3.2" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.5)" strokeWidth="0.8"/>
                      {/* Network Hub */}
                      <rect x="261" y="131" width="84" height="108" fill="rgba(255,255,255,0.012)"/>
                      <text x="303" y="182" textAnchor="middle" fill="rgba(180,210,255,0.55)" fontSize="7" fontWeight="700" fontFamily="sans-serif">NETWORK</text>
                      <text x="303" y="191" textAnchor="middle" fill="rgba(180,210,255,0.55)" fontSize="7" fontWeight="700" fontFamily="sans-serif">HUB</text>
                      <circle cx="273" cy="142" r="3.2" fill="rgba(59,158,255,0.1)" stroke="rgba(59,158,255,0.5)" strokeWidth="0.8"/>
                    </svg>
                  </div>
                </div>
              )}

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
