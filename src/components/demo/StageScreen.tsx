import Image from 'next/image'
import dynamic from 'next/dynamic'
import type { Stage } from '@/data/demo/types'
import { ALL_MODULES } from './TopBar'

const GeoPanel = dynamic(() => import('./GeoPanel'), { ssr: false })
const DecideMapPanel = dynamic(() => import('./DecideMapPanel'), { ssr: false })
const UnderstandMapPanel = dynamic(() => import('./UnderstandMapPanel'), { ssr: false })
const DetectFlowPanel = dynamic(() => import('./DetectFlowPanel'), { ssr: false })

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
  // When the detect stage carries a detectFlow, we split the cinematic panel 50/50:
  // left half keeps the bg image + overlays, right half renders the flow panel.
  const hasDetectFlow = isFirst && !!stage.detectFlow
  // Light-background layout: title lives above the panel, panel fills remaining height.
  // Applies to all stages without a full-panel detectCard overlay (detect, understand, etc.)
  const isLightBg = !stage.detectCard

  // True for LPR scenario only — drives conditional left-panel and map-overlay content
  const isLprTrack = !!stage.dataPoints.find(d => d.key === 'INTERCEPT ETA')
  // Sub-label from "STAGE 02: UNDERSTAND — MULTI-CAM TRACK" → "MULTI-CAM TRACK"
  const trackSubLabel = stage.stageLabel.split(' — ')[1] ?? stage.label

  // ── UNDERSTAND stage: 3-panel flex layout ──────────────────────────────────
  if (!isFirst && stage.understandMap) {
    return (
      <>
      <style>{`
        .understand-row { flex-direction: row; align-items: stretch; }
        .understand-left { flex: 1; min-width: 0; border-right: 6px solid rgba(255,255,255,0.6) !important; }
        .understand-center { flex: 1; min-width: 0; border-right: 6px solid rgba(255,255,255,0.6) !important; }
        .understand-right { flex: 1; min-width: 0; }
        @media (max-width: 1100px) {
          .understand-outer {
            height: auto !important;
            min-height: calc(100vh - 200px) !important;
            overflow-y: auto !important;
          }
        }
        @media (max-width: 768px) {
          .understand-row { flex-wrap: wrap !important; overflow: visible !important; flex: none !important; border-radius: 0 !important; border: none !important; box-shadow: none !important; gap: 8px !important; }
          .understand-center { order: -1; flex: 0 0 100% !important; width: 100% !important; height: 260px !important; min-height: 220px; border-radius: 10px !important; }
          .understand-left { flex: 1 !important; min-height: 260px; border-right: none !important; border-radius: 10px !important; border: 1px solid rgba(59,158,255,0.15) !important; }
          .understand-right { flex: 1 !important; min-height: 300px; border-radius: 10px !important; border: 1px solid rgba(59,158,255,0.15) !important; }
        }
        @media (max-width: 540px) {
          .understand-center { height: 240px !important; min-height: 200px !important; border-right: none !important; }
          .understand-left { flex: 0 0 100% !important; overflow-y: visible !important; border-right: none !important; }
          .understand-right { flex: 0 0 100% !important; min-height: 320px; }
          .understand-modules-row { display: grid !important; grid-template-columns: 1fr 1fr; }
        }
      `}</style>
      <div className="understand-outer" style={{
        display: 'flex', flexDirection: 'column', alignItems: 'stretch',
        height: 'calc(100vh - 196px)', margin: '0 20px', padding: '20px 28px 20px',
        fontFamily: 'var(--font-manrope), Manrope, sans-serif',
      }}>
        {/* Title block */}
        <div style={{ flexShrink: 0, paddingBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <div style={{ width: 3, height: 14, borderRadius: 2, background: '#1755c2', flexShrink: 0 }} />
            <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(20,50,100,0.58)' }}>
              {stage.stageLabel.split(' — ')[0]}
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.9rem, 2.6vw, 2.8rem)', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.025em', textTransform: 'uppercase', lineHeight: 1.0, color: '#0b1c36', marginBottom: 6 }}>
            {stage.headline}
          </h2>
          <p style={{ color: 'rgba(15,35,75,0.62)', fontSize: '0.82rem', fontWeight: 500, lineHeight: 1.55, maxWidth: 480, marginBottom: 10 }}>
            {stage.description}
          </p>
          <div className="understand-modules-row" style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
            {ALL_MODULES.map(m => {
              const active = stage.modules.includes(m.key)
              return (
                <div key={m.key} style={{
                  display: 'flex', alignItems: 'center', gap: 4,
                  padding: '4px 10px', borderRadius: 5,
                  fontSize: '8px', fontWeight: active ? 800 : 600,
                  letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                  background: active ? 'rgba(0,122,255,0.1)' : 'rgba(0,0,0,0.03)',
                  border: active ? '1px solid rgba(0,122,255,0.28)' : '1px solid rgba(0,0,0,0.08)',
                  color: active ? '#1755c2' : 'rgba(0,0,0,0.28)',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 11, color: active ? '#1755c2' : 'rgba(0,0,0,0.2)' }}>{m.icon}</span>
                  {m.label}
                </div>
              )
            })}
          </div>
        </div>

        {/* 3-panel row */}
        <div className="understand-row" style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0, borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(59,158,255,0.18)', boxShadow: '0 4px 32px rgba(0,0,0,0.5)' }}>

          {/* ── Panel 1: Tracking / intelligence data ── */}
          <div className="understand-left" style={{
            background: '#07101c', padding: '18px 16px',
            display: 'flex', flexDirection: 'column', gap: 0, overflowY: 'auto',
            fontFamily: 'var(--font-space-mono), monospace',
          }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 16 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#FF4560', display: 'inline-block', flexShrink: 0 }} className="animate-pulse" />
              <span style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,69,96,0.8)' }}>
                {isLprTrack ? 'ACTIVE TRACK' : trackSubLabel}
              </span>
            </div>

            {isLprTrack ? (
              <>
                {/* LPR: Plate hero */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.45)', marginBottom: 4 }}>License Plate</div>
                  <div style={{ fontSize: '26px', fontWeight: 700, color: '#fff', letterSpacing: '0.08em', lineHeight: 1, textShadow: '0 0 24px rgba(59,158,255,0.4)' }}>7JKY442</div>
                  <div style={{ fontSize: '9px', fontWeight: 600, color: 'rgba(255,100,100,0.8)', marginTop: 4, letterSpacing: '0.1em' }}>STOLEN · NCIC CONFIRMED</div>
                </div>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: 14 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 16 }}>
                  {[
                    { label: 'Direction', value: stage.dataPoints.find(d => d.key === 'DIRECTION')?.value ?? 'Westbound I-10' },
                    { label: 'Speed', value: '72 MPH' },
                    { label: 'GIS Lock', value: 'ACTIVE' },
                    { label: 'Confidence', value: '98.4%' },
                  ].map((row) => (
                    <div key={row.label}>
                      <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.4)', marginBottom: 2 }}>{row.label}</div>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#c8dff0', letterSpacing: '0.03em' }}>{row.value}</div>
                    </div>
                  ))}
                </div>
                <div style={{ padding: '10px 12px', borderRadius: 8, background: 'rgba(0,201,138,0.08)', border: '1px solid rgba(0,201,138,0.2)', marginBottom: 10 }}>
                  <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,201,138,0.65)', marginBottom: 3 }}>Intercept Window</div>
                  <div style={{ fontSize: '22px', fontWeight: 700, color: '#00C98A', lineHeight: 1 }}>{stage.dataPoints.find(d => d.key === 'INTERCEPT ETA')?.value ?? '3 MIN'}</div>
                  <div style={{ fontSize: '8px', color: 'rgba(0,201,138,0.5)', marginTop: 3, letterSpacing: '0.08em' }}>before Hwy 45 exit</div>
                </div>
                <div style={{ padding: '8px 10px', borderRadius: 7, background: 'rgba(59,158,255,0.06)', border: '1px solid rgba(59,158,255,0.15)' }}>
                  <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.5)', marginBottom: 4 }}>Nearest Unit</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#adc6ff' }}>12-CHARLIE</span>
                    <span style={{ fontSize: '9px', fontWeight: 700, color: '#00C98A', letterSpacing: '0.08em' }}>1.2 MI</span>
                  </div>
                  <div style={{ fontSize: '8px', color: 'rgba(173,198,255,0.4)', marginTop: 2 }}>J. Reyes · SHIFT ACTIVE</div>
                </div>
              </>
            ) : (
              <>
                {/* Generic: dataPoints as hero rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 16 }}>
                  {stage.dataPoints.map((dp) => (
                    <div key={dp.key}>
                      <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.45)', marginBottom: 3 }}>{dp.key}</div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', letterSpacing: '0.03em', lineHeight: 1.2 }}>{dp.value}</div>
                    </div>
                  ))}
                </div>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: 14 }} />
                {/* GIS status */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
                  {[
                    { label: 'GIS Lock', value: 'ACTIVE' },
                    { label: 'Confidence', value: '94.7%' },
                    { label: 'Track Type', value: trackSubLabel },
                  ].map((row) => (
                    <div key={row.label}>
                      <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.4)', marginBottom: 2 }}>{row.label}</div>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: '#c8dff0', letterSpacing: '0.03em' }}>{row.value}</div>
                    </div>
                  ))}
                </div>
                {/* Unit card */}
                {stage.understandMap.unitLabel && (
                  <div style={{ padding: '8px 10px', borderRadius: 7, background: 'rgba(59,158,255,0.06)', border: '1px solid rgba(59,158,255,0.15)' }}>
                    <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.5)', marginBottom: 4 }}>Nearest Unit</div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#adc6ff' }}>{stage.understandMap.unitLabel}</div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* ── Panel 2: GIS scene (static background + direction overlay) ── */}
          <div className="understand-center" style={{
            position: 'relative', overflow: 'hidden', background: '#0c1520', minHeight: 200,
          }}>
            {stage.backgroundImage && (
              <Image src={stage.backgroundImage} alt={stage.stageLabel} fill style={{ objectFit: 'cover' }} sizes="60vw" />
            )}
            {/* Gradient overlay for text legibility */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,12,24,0.85) 0%, transparent 50%)' }} />
            {/* Direction text overlay */}
            {stage.dataPoints && stage.dataPoints.length > 0 && (
              <div style={{ position: 'absolute', bottom: 28, left: 28, zIndex: 10 }}>
                <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap' }}>
                  {stage.dataPoints.map((dp) => (
                    <div key={dp.key}>
                      <span style={{ display: 'block', fontSize: '8px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.6)', marginBottom: 5, fontFamily: 'var(--font-space-mono), monospace' }}>{dp.key}</span>
                      <span style={{ display: 'block', fontSize: 'clamp(1rem, 2vw, 1.3rem)', fontWeight: 700, letterSpacing: '-0.01em', color: '#fff', fontStyle: 'italic', textTransform: 'uppercase', fontFamily: 'var(--font-manrope), Manrope, sans-serif', textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>{dp.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Live monitoring badge top-left */}
            <div style={{ position: 'absolute', top: 14, left: 14, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 12px', borderRadius: 9999, background: 'rgba(16,19,27,0.55)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <span className="animate-pulse" style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#adc6ff' }} />
              <span style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-space-mono), monospace' }}>Live Monitoring</span>
            </div>
          </div>

          {/* ── Panel 3: GIS TRACK LIVE (Leaflet map + camera + data pills) ── */}
          <div className="understand-right" style={{
            position: 'relative', overflow: 'hidden', background: '#0a131d',
            isolation: 'isolate',
          }}>
            {/* Header */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 30, zIndex: 30, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px', background: 'rgba(5,12,22,0.92)', borderBottom: '1px solid rgba(59,158,255,0.15)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00C98A', display: 'inline-block' }} className="animate-pulse" />
                <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 8, fontWeight: 700, letterSpacing: '0.15em', color: 'rgba(173,198,255,0.75)', textTransform: 'uppercase' }}>GIS TRACK · LIVE</span>
              </div>
              <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 8, fontWeight: 700, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em' }}>{stage.timestamp}</span>
            </div>
            {/* Map fills container */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0, isolation: 'isolate' }}>
              <UnderstandMapPanel
                incidentCoords={stage.understandMap.incidentCoords}
                label={stage.understandMap.label}
                unitCoords={stage.understandMap.unitCoords}
                unitLabel={stage.understandMap.unitLabel}
                route={stage.understandMap.route}
              />
            </div>
            {/* Camera feed inset */}
            {stage.pipImage && (
              <div style={{ position: 'absolute', top: 40, right: 10, zIndex: 40, width: 160, aspectRatio: '16/9', borderRadius: 5, overflow: 'hidden', border: '1px solid rgba(173,198,255,0.35)', boxShadow: '0 4px 16px rgba(0,0,0,0.8)', background: '#000' }}>
                <img src={stage.pipImage} alt={stage.pipLabel ?? ''} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.75)' }} />
                <div style={{ position: 'absolute', top: 3, left: 3, display: 'flex', alignItems: 'center', gap: 3, background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)', padding: '2px 5px', borderRadius: 3 }}>
                  <span className="animate-pulse" style={{ color: '#ffb4ab', fontSize: 7 }}>●</span>
                  <span style={{ fontSize: '7px', fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>LIVE</span>
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2px 5px', background: 'rgba(0,0,0,0.6)', fontSize: '7px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-space-mono), monospace' }}>{stage.pipLabel}</div>
              </div>
            )}
            {/* Incident data at bottom */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 40, background: 'linear-gradient(to top, rgba(5,12,22,0.97) 0%, rgba(5,12,22,0.85) 70%, transparent 100%)', padding: '20px 14px 12px' }}>
              {isLprTrack ? (
                <>
                  <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 8 }}>
                    <div>
                      <div style={{ fontSize: '7px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.45)', marginBottom: 2, fontFamily: 'var(--font-space-mono), monospace' }}>Tracked Vehicle</div>
                      <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff', letterSpacing: '0.1em', lineHeight: 1, fontFamily: 'var(--font-space-mono), monospace', textShadow: '0 0 16px rgba(59,158,255,0.5)' }}>7JKY442</div>
                      <div style={{ fontSize: '8px', fontWeight: 700, color: 'rgba(255,80,80,0.85)', marginTop: 2, letterSpacing: '0.1em', fontFamily: 'var(--font-space-mono), monospace' }}>STOLEN · NCIC CONFIRMED</div>
                    </div>
                    <div style={{ padding: '4px 8px', borderRadius: 5, background: 'rgba(0,201,138,0.12)', border: '1px solid rgba(0,201,138,0.3)' }}>
                      <span style={{ fontSize: '7px', fontWeight: 700, color: 'rgba(0,201,138,0.7)', fontFamily: 'var(--font-space-mono), monospace' }}>ETA · </span>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#00C98A', fontFamily: 'var(--font-space-mono), monospace' }}>{stage.dataPoints.find(d => d.key === 'INTERCEPT ETA')?.value ?? '3 MIN'}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 5 }}>
                    {[{ label: 'Direction', value: 'Westbound I-10' }, { label: 'Speed', value: '72 MPH' }, { label: 'Unit', value: '12-CHARLIE' }].map(item => (
                      <div key={item.label} style={{ padding: '4px 8px', borderRadius: 4, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', flex: 1 }}>
                        <div style={{ fontSize: '7px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.4)', marginBottom: 1, fontFamily: 'var(--font-space-mono), monospace' }}>{item.label}</div>
                        <div style={{ fontSize: '9px', fontWeight: 700, color: '#c8dff0', fontFamily: 'var(--font-space-mono), monospace' }}>{item.value}</div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 8 }}>
                    <div>
                      <div style={{ fontSize: '7px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.45)', marginBottom: 2, fontFamily: 'var(--font-space-mono), monospace' }}>{stage.understandMap.label ?? 'GIS TRACK'}</div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', letterSpacing: '0.04em', lineHeight: 1.2, fontFamily: 'var(--font-space-mono), monospace' }}>
                        {stage.understandMap.unitLabel ?? ''}
                      </div>
                    </div>
                    <div style={{ fontSize: '8px', fontWeight: 700, color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-space-mono), monospace', letterSpacing: '0.06em', textAlign: 'right' }}>
                      {stage.understandMap.incidentCoords[0].toFixed(4)}°N<br />{Math.abs(stage.understandMap.incidentCoords[1]).toFixed(4)}°W
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 5 }}>
                    {stage.dataPoints.slice(0, 3).map(dp => (
                      <div key={dp.key} style={{ padding: '4px 8px', borderRadius: 4, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', flex: 1 }}>
                        <div style={{ fontSize: '7px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.4)', marginBottom: 1, fontFamily: 'var(--font-space-mono), monospace' }}>{dp.key}</div>
                        <div style={{ fontSize: '9px', fontWeight: 700, color: '#c8dff0', fontFamily: 'var(--font-space-mono), monospace' }}>{dp.value}</div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

        </div>{/* end 3-panel row */}
      </div>
      </>
    )
  }

  return (
    <>
    <style>{`
      .understand-map-panel { width: 480px; }
      @media (max-width: 900px) { .understand-map-panel { width: 340px !important; } }
      @media (max-width: 680px) { .understand-map-panel { display: none !important; } }
      .demo-stage-nav-btn { }
      .demo-stage-nav-sublabel { display: block; }
      @media (max-width: 768px) {
        .demo-stage-nav-btn { padding: 8px 16px !important; gap: 10px !important; }
        .demo-stage-nav-sublabel { display: none !important; }
        .demo-stage-nav-mainlabel { font-size: 0.78rem !important; }
        .demo-stage-nav-icon { width: 24px !important; height: 24px !important; }
      }
      @media (max-width: 480px) {
        .demo-stage-nav-btn { padding: 6px 12px !important; gap: 8px !important; }
        .demo-stage-nav-mainlabel { font-size: 0.68rem !important; }
      }
      /* ── Detect-split responsive: stack left/right halves vertically on mobile ── */
      @media (max-width: 1100px) {
        .stage-outer-lbg { height: auto !important; overflow-y: auto !important; padding-bottom: 80px; }
        .demo-stage-panel.detect-split { flex: 0 0 540px !important; height: 540px !important; min-height: 540px !important; }
      }
      @media (max-width: 768px) {
        .detect-bg-half   { width: 100% !important; bottom: 50% !important; }
        .detect-left-area { right: 0 !important; width: 100% !important; bottom: 50% !important; }
        .detect-dp-row    { display: none !important; }
        .detect-v-sep     { display: none !important; }
        .detect-flow-half { left: 0 !important; top: 50% !important; width: 100% !important; border-top: 6px solid rgba(255,255,255,0.6); }
      }
    `}</style>
    <div className={isLightBg ? 'stage-outer-lbg' : ''} style={isLightBg ? {
      display: 'flex', flexDirection: 'column', alignItems: 'stretch',
      height: 'calc(100vh - 196px)', margin: '0 20px', padding: '20px 28px 20px',
    } : {
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: '0 24px 90px',
    }}>

      {/* ── Light-bg title block — sits above the panel on white background ── */}
      {isLightBg && (
        <div style={{ flexShrink: 0, paddingBottom: 12 }}>
          {/* Title + description */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 10 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 5 }}>
                <span style={{ fontSize: '9px', fontWeight: 900, letterSpacing: '0.42em', textTransform: 'uppercase', color: 'rgba(20,50,100,0.38)' }}>
                  {stage.stageLabel.split(' — ')[0]}
                </span>
                <div style={{ height: 1, width: 28, background: 'rgba(20,50,100,0.14)' }} />
              </div>
              <h2 style={{ fontSize: 'clamp(1.35rem, 1.9vw, 1.85rem)', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.02em', textTransform: 'uppercase', lineHeight: 1.05, color: '#0b1c36', marginBottom: 5 }}>
                {stage.headline}
              </h2>
              <p style={{ color: 'rgba(15,35,75,0.48)', fontSize: '0.78rem', fontWeight: 500, lineHeight: 1.55, maxWidth: 480 }}>
                {stage.description}
              </p>
            </div>
          </div>
          {/* All-platform module strip */}
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
            {ALL_MODULES.map(m => {
              const active = stage.modules.includes(m.key)
              return (
                <div key={m.key} style={{
                  display: 'flex', alignItems: 'center', gap: 4,
                  padding: '4px 10px', borderRadius: 5,
                  fontSize: '8px', fontWeight: active ? 800 : 600,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s',
                  background: active ? 'rgba(0,122,255,0.1)' : 'rgba(0,0,0,0.03)',
                  border: active ? '1px solid rgba(0,122,255,0.28)' : '1px solid rgba(0,0,0,0.08)',
                  color: active ? '#1755c2' : 'rgba(0,0,0,0.28)',
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 11, color: active ? '#1755c2' : 'rgba(0,0,0,0.2)' }}>{m.icon}</span>
                  {m.label}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* ── Cinematic panel ── */}
      <div
        className={`demo-stage-panel${hasDetectFlow ? ' detect-split' : ''}`}
        style={{
          position: 'relative',
          ...(isLightBg ? { flex: 1, minHeight: 0, width: '100%' } : { width: '100%', height: 'calc(100vh - 210px)' }),
          borderRadius: 16,
          overflow: 'hidden',
          // Always give the panel a dark base so contain-fit images don't show the light parent bg
          background: '#0c1520',
          border: isLightBg ? '1px solid rgba(0,20,60,0.1)' : '1px solid rgba(173,198,255,0.2)',
          boxShadow: isLightBg
            ? '0 2px 8px rgba(0,20,60,0.07), 0 12px 40px rgba(0,20,60,0.12), 0 40px 80px rgba(0,20,60,0.1)'
            : '0 0 100px -20px rgba(75,142,255,0.15), 0 40px 100px rgba(0,0,0,0.8)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Background image
            Use next/image for full-bleed detect stages, but when the panel is split
            fall back to a plain CSS background-image on a half-width wrapper. The
            CSS approach sidesteps a Next 16 Turbopack issue where _next/image?w=1920
            returns 400 for this asset with sizes="50vw" srcset widths. */}
        {stage.backgroundImage ? (
          hasDetectFlow ? (
            <div
              className="detect-bg-half"
              style={{
                position: 'absolute',
                top: 0, left: 0, bottom: 0,
                width: '50%',
                backgroundImage: `url(${stage.backgroundImage})`,
                backgroundSize: stage.backgroundFit ?? 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                overflow: 'hidden',
              }}
              aria-label={stage.stageLabel}
              role="img"
            />
          ) : (
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
          )
        ) : (
          <div
            className={hasDetectFlow ? 'detect-bg-half' : undefined}
            style={{
              position: 'absolute',
              top: 0, left: 0, bottom: 0,
              width: hasDetectFlow ? '50%' : '100%',
              background: '#08101A',
            }}
          />
        )}

        {/* ── Inline call-intake admin panel ── */}
        {isFirst && stage.detectCard?.type === 'call-intake' && (
          <div className="detect-left-area" style={{
            position: 'absolute',
            top: 0, left: 0, bottom: 0,
            right: hasDetectFlow ? '50%' : 0,
            display: 'flex', flexDirection: 'column',
            padding: hasDetectFlow ? '28px 24px 24px' : '28px 40px 24px',
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
          <div className="detect-left-area" style={{
            position: 'absolute',
            top: 0, left: 0, bottom: 0,
            right: hasDetectFlow ? '50%' : 0,
            display: 'flex', flexDirection: 'column',
            padding: hasDetectFlow ? '20px 18px 16px' : '20px 32px 16px',
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
          <div className="detect-left-area" style={{
            position: 'absolute',
            top: 0, left: 0, bottom: 0,
            right: hasDetectFlow ? '50%' : 0,
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
          className={hasDetectFlow ? 'detect-left-area' : undefined}
          style={{
            position: 'absolute',
            top: 0, left: 0, bottom: 0,
            width: hasDetectFlow ? '50%' : '100%',
            background: stage.detectCard
              ? 'linear-gradient(to top, rgba(8,16,26,0.95) 0%, transparent 40%)'
              : 'linear-gradient(to top, rgba(16,19,27,0.92) 0%, transparent 55%, rgba(16,19,27,0.2) 100%)',
          }}
        />

        {/* ── Scanning grid overlay — detect stage only, not when detectCard is present ── */}
        {isFirst && !stage.detectCard && (
          <div
            className={hasDetectFlow ? 'detect-left-area' : undefined}
            style={{
              position: 'absolute',
              top: 0, left: 0, bottom: 0,
              width: hasDetectFlow ? '50%' : '100%',
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
              // With detectFlow, the bg image is zoom-cropped to the left 50%; the plate
              // ends up centred at ~25% of the panel. Keep the box at original 30% width,
              // just re-centred so it still wraps the plate.
              left: hasDetectFlow ? '10%' : '35%',
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

        {/* ── Top-right: live monitoring + timestamp — hidden when decideCard present ── */}
        {!stage.decideCard && <div
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
        </div>}

        {/* ── Understand map panel — full-height right side ── */}
        {!isFirst && stage.understandMap && (
          <div className="understand-map-panel" style={{
            position: 'absolute',
            top: 16, right: 16, bottom: 16,
            width: 480,
            zIndex: 20,
            borderRadius: 12,
            overflow: 'hidden',
            border: '1px solid rgba(59,158,255,0.3)',
            boxShadow: '0 8px 48px rgba(0,0,0,0.9)',
            background: '#0a131d',
            isolation: 'isolate',
          }}>
            {/* Header bar */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 28, zIndex: 30,
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '0 12px',
              background: 'rgba(5,12,22,0.92)',
              borderBottom: '1px solid rgba(59,158,255,0.15)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00C98A', display: 'inline-block' }} className="animate-pulse" />
                <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 8, fontWeight: 700, letterSpacing: '0.15em', color: 'rgba(173,198,255,0.75)', textTransform: 'uppercase' }}>
                  GIS TRACK · LIVE
                </span>
              </div>
              <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 8, fontWeight: 700, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em' }}>
                {stage.timestamp}
              </span>
            </div>

            {/* Map — fills full container; isolation:isolate contains Leaflet's internal z-indexes */}
            <div style={{ position: 'absolute', inset: 0, isolation: 'isolate', zIndex: 0 }}>
              <UnderstandMapPanel
                incidentCoords={stage.understandMap.incidentCoords}
                label={stage.understandMap.label}
                unitCoords={stage.understandMap.unitCoords}
                unitLabel={stage.understandMap.unitLabel}
                route={stage.understandMap.route}
              />
            </div>

            {/* Camera feed inset — top-right corner of map */}
            {stage.pipImage && (
              <div style={{
                position: 'absolute', top: 40, right: 10, zIndex: 40,
                width: 220, aspectRatio: '16/9',
                borderRadius: 6, overflow: 'hidden',
                border: '1px solid rgba(173,198,255,0.35)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.8)',
                background: '#000',
              }}>
                <img src={stage.pipImage} alt={stage.pipLabel ?? ''} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.75)' }} />
                <div style={{ position: 'absolute', top: 4, left: 4, display: 'flex', alignItems: 'center', gap: 3, background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)', padding: '2px 6px', borderRadius: 3 }}>
                  <span className="animate-pulse" style={{ color: '#ffb4ab', fontSize: 8 }}>●</span>
                  <span style={{ fontSize: '7px', fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>LIVE</span>
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '3px 6px', background: 'rgba(0,0,0,0.6)', fontSize: '7px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
                  {stage.pipLabel}
                </div>
              </div>
            )}

            {/* Incident overlay card — bottom of map */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 40,
              background: 'linear-gradient(to top, rgba(5,12,22,0.97) 0%, rgba(5,12,22,0.85) 70%, transparent 100%)',
              padding: '24px 16px 14px',
            }}>
              {isLprTrack ? (
                <>
                  <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 10 }}>
                    <div>
                      <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.45)', marginBottom: 3, fontFamily: 'var(--font-space-mono), monospace' }}>Tracked Vehicle</div>
                      <div style={{ fontSize: '22px', fontWeight: 700, color: '#fff', letterSpacing: '0.1em', lineHeight: 1, fontFamily: 'var(--font-space-mono), monospace', textShadow: '0 0 20px rgba(59,158,255,0.5)' }}>7JKY442</div>
                      <div style={{ fontSize: '8px', fontWeight: 700, color: 'rgba(255,80,80,0.85)', marginTop: 3, letterSpacing: '0.1em', fontFamily: 'var(--font-space-mono), monospace' }}>STOLEN · NCIC CONFIRMED</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                      <div style={{ padding: '4px 10px', borderRadius: 5, background: 'rgba(0,201,138,0.12)', border: '1px solid rgba(0,201,138,0.3)' }}>
                        <span style={{ fontSize: '8px', fontWeight: 700, color: 'rgba(0,201,138,0.7)', letterSpacing: '0.1em', fontFamily: 'var(--font-space-mono), monospace' }}>ETA · </span>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: '#00C98A', fontFamily: 'var(--font-space-mono), monospace' }}>{stage.dataPoints.find(d => d.key === 'INTERCEPT ETA')?.value ?? '3 MIN'}</span>
                      </div>
                      <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-space-mono), monospace', letterSpacing: '0.05em' }}>
                        {stage.understandMap.incidentCoords[0].toFixed(4)}°N {Math.abs(stage.understandMap.incidentCoords[1]).toFixed(4)}°W
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {[{ label: 'Direction', value: 'Westbound I-10' }, { label: 'Speed', value: '72 MPH' }, { label: 'Unit', value: '12-CHARLIE' }].map(item => (
                      <div key={item.label} style={{ padding: '5px 10px', borderRadius: 5, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', flex: 1 }}>
                        <div style={{ fontSize: '7px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.4)', marginBottom: 2, fontFamily: 'var(--font-space-mono), monospace' }}>{item.label}</div>
                        <div style={{ fontSize: '10px', fontWeight: 700, color: '#c8dff0', fontFamily: 'var(--font-space-mono), monospace' }}>{item.value}</div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 10 }}>
                    <div>
                      <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.45)', marginBottom: 3, fontFamily: 'var(--font-space-mono), monospace' }}>{stage.understandMap.label ?? trackSubLabel}</div>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff', letterSpacing: '0.06em', lineHeight: 1.2, fontFamily: 'var(--font-space-mono), monospace' }}>{stage.understandMap.unitLabel ?? ''}</div>
                    </div>
                    <div style={{ fontSize: '8px', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-space-mono), monospace', letterSpacing: '0.05em', textAlign: 'right' }}>
                      {stage.understandMap.incidentCoords[0].toFixed(4)}°N<br />{Math.abs(stage.understandMap.incidentCoords[1]).toFixed(4)}°W
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {stage.dataPoints.slice(0, 3).map(dp => (
                      <div key={dp.key} style={{ padding: '5px 10px', borderRadius: 5, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', flex: 1 }}>
                        <div style={{ fontSize: '7px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.4)', marginBottom: 2, fontFamily: 'var(--font-space-mono), monospace' }}>{dp.key}</div>
                        <div style={{ fontSize: '10px', fontWeight: 700, color: '#c8dff0', fontFamily: 'var(--font-space-mono), monospace' }}>{dp.value}</div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* ── Understand stage: left-side tracking panel ── */}
        {!isFirst && stage.understandMap && isLightBg && (
          <div style={{
            position: 'absolute',
            left: 0, top: 0, bottom: 0,
            width: 260,
            zIndex: 25,
            background: 'linear-gradient(to right, rgba(5,11,22,0.96) 0%, rgba(5,11,22,0.88) 60%, transparent 100%)',
            display: 'flex', flexDirection: 'column',
            padding: '22px 28px 22px 22px',
            gap: 0,
            fontFamily: 'var(--font-space-mono), monospace',
          }}>
            {/* Panel header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 18 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#FF4560', display: 'inline-block', flexShrink: 0 }} className="animate-pulse" />
              <span style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,69,96,0.8)' }}>
                {isLprTrack ? 'ACTIVE TRACK' : trackSubLabel}
              </span>
            </div>

            {isLprTrack ? (
              <>
                {/* Plate number — hero */}
                <div style={{ marginBottom: 18 }}>
                  <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.45)', marginBottom: 5 }}>License Plate</div>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: '#fff', letterSpacing: '0.08em', lineHeight: 1, textShadow: '0 0 30px rgba(59,158,255,0.4)' }}>7JKY442</div>
                  <div style={{ fontSize: '9px', fontWeight: 600, color: 'rgba(255,100,100,0.75)', marginTop: 4, letterSpacing: '0.1em' }}>STOLEN · NCIC CONFIRMED</div>
                </div>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 16 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 18 }}>
                  {[
                    { label: 'Direction',  value: stage.dataPoints.find(d => d.key === 'DIRECTION')?.value ?? 'Westbound I-10' },
                    { label: 'Speed',      value: '72 MPH' },
                    { label: 'GIS Lock',   value: 'ACTIVE' },
                    { label: 'Confidence', value: '98.4%' },
                  ].map((row) => (
                    <div key={row.label}>
                      <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.4)', marginBottom: 2 }}>{row.label}</div>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#c8dff0', letterSpacing: '0.03em' }}>{row.value}</div>
                    </div>
                  ))}
                </div>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 16 }} />
                <div style={{ padding: '12px 14px', borderRadius: 8, background: 'rgba(0,201,138,0.08)', border: '1px solid rgba(0,201,138,0.2)', marginBottom: 14 }}>
                  <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,201,138,0.65)', marginBottom: 4 }}>Intercept Window</div>
                  <div style={{ fontSize: '26px', fontWeight: 700, color: '#00C98A', lineHeight: 1 }}>{stage.dataPoints.find(d => d.key === 'INTERCEPT ETA')?.value ?? '3 MIN'}</div>
                  <div style={{ fontSize: '8px', color: 'rgba(0,201,138,0.5)', marginTop: 3, letterSpacing: '0.08em' }}>before Hwy 45 exit</div>
                </div>
                <div style={{ padding: '10px 12px', borderRadius: 7, background: 'rgba(59,158,255,0.06)', border: '1px solid rgba(59,158,255,0.15)' }}>
                  <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.5)', marginBottom: 5 }}>Nearest Unit</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#adc6ff' }}>12-CHARLIE</span>
                    <span style={{ fontSize: '9px', fontWeight: 700, color: '#00C98A', letterSpacing: '0.08em' }}>1.2 MI</span>
                  </div>
                  <div style={{ fontSize: '9px', color: 'rgba(173,198,255,0.4)', marginTop: 2, letterSpacing: '0.05em' }}>J. Reyes · SHIFT ACTIVE</div>
                </div>
              </>
            ) : (
              <>
                {/* Generic: headline dataPoints */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 18 }}>
                  {stage.dataPoints.map((dp) => (
                    <div key={dp.key}>
                      <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.45)', marginBottom: 4 }}>{dp.key}</div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', letterSpacing: '0.02em', lineHeight: 1.2 }}>{dp.value}</div>
                    </div>
                  ))}
                </div>
                <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 16 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 18 }}>
                  {[
                    { label: 'GIS Lock', value: 'ACTIVE' },
                    { label: 'Track Type', value: trackSubLabel },
                    { label: 'Confidence', value: stage.dataPoints.find(d => d.key === 'CONFIDENCE')?.value ?? '94.7%' },
                  ].map((row) => (
                    <div key={row.label}>
                      <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.4)', marginBottom: 2 }}>{row.label}</div>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: '#c8dff0', letterSpacing: '0.03em' }}>{row.value}</div>
                    </div>
                  ))}
                </div>
                {stage.understandMap.unitLabel && (
                  <div style={{ padding: '10px 12px', borderRadius: 7, background: 'rgba(59,158,255,0.06)', border: '1px solid rgba(59,158,255,0.15)' }}>
                    <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.5)', marginBottom: 5 }}>Nearest Unit</div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#adc6ff' }}>{stage.understandMap.unitLabel}</div>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* ── PiP widgets — stacked bottom-right (skipped when understandMap absorbs them) ── */}
        {[
          { img: stage.understandMap ? null : stage.pipImage, label: stage.pipLabel },
          { img: stage.pip2Image, label: stage.pip2Label },
        ].map((pip, idx) =>
          pip.img ? (
            <div
              key={idx}
              className={`demo-pip demo-pip-${idx}`}
              style={{
                position: 'absolute',
                bottom: idx === 0 ? 24 : 24 + 236 + 12,
                right: 24,
                width: 420,
                aspectRatio: '16/9',
                zIndex: 30,
                borderRadius: 10,
                overflow: 'hidden',
                border: '1px solid rgba(173,198,255,0.4)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.9)',
                background: '#000',
              }}
            >
              <Image
                src={pip.img}
                alt={pip.label ?? ''}
                fill
                style={{ objectFit: 'cover', filter: 'brightness(0.72)' }}
                sizes="420px"
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
            className={hasDetectFlow ? 'detect-dp-row' : undefined}
            style={{
              position: 'absolute',
              bottom: 28,
              left: 44,
              // When the panel is split, keep this row inside the left half.
              right: hasDetectFlow ? 'calc(50% + 20px)' : 44,
              display: 'flex',
              flexDirection: hasDetectFlow ? 'column' : 'row',
              justifyContent: hasDetectFlow ? 'flex-end' : 'space-between',
              alignItems: hasDetectFlow ? 'flex-start' : 'flex-end',
              zIndex: 20,
              gap: hasDetectFlow ? 18 : 16,
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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: hasDetectFlow ? 'flex-start' : 'flex-end', gap: 6 }}>
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
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: hasDetectFlow ? 'flex-start' : 'flex-end' }}>
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
            padding: '12px 16px',
            fontFamily: 'var(--font-manrope), Manrope, sans-serif',
          }}>
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
                {/* Live monitoring pill */}
                <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 1000, display: 'flex', alignItems: 'center', gap: 6, padding: '4px 10px', borderRadius: 20, background: 'rgba(8,14,24,0.88)', border: '1px solid rgba(0,201,138,0.3)' }}>
                  <span className="animate-pulse" style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#00C98A' }} />
                  <span style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#00C98A' }}>LIVE</span>
                </div>
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

              {/* RIGHT — 3 equal modules stacked */}
              <div style={{ flex: 1, minWidth: 0, background: 'rgba(6,12,22,0.98)', display: 'grid', gridTemplateRows: '1fr 1fr 1fr', borderLeft: '1px solid rgba(59,158,255,0.1)' }}>

                {/* MODULE 1 — Unit roster */}
                <div style={{ minHeight: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                  <div style={{ padding: '8px 16px 6px', background: 'rgba(59,158,255,0.06)', borderBottom: '2px solid rgba(59,158,255,0.2)', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 3, height: 12, borderRadius: 2, background: '#3B9EFF', flexShrink: 0 }} />
                    <span style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#3B9EFF' }}>AVAILABLE UNITS</span>
                  </div>
                  <div style={{ flex: 1, overflowY: 'auto' }}>
                    {stage.decideCard.units.map((u) => {
                      const statusBg = u.status === 'ASSIGNED' ? 'rgba(0,201,138,0.15)' : u.status === 'EN ROUTE' ? 'rgba(59,158,255,0.15)' : 'rgba(255,255,255,0.04)'
                      const statusColor = u.status === 'ASSIGNED' ? '#00C98A' : u.status === 'EN ROUTE' ? '#3B9EFF' : '#48647A'
                      const statusBorder = u.status === 'ASSIGNED' ? 'rgba(0,201,138,0.3)' : u.status === 'EN ROUTE' ? 'rgba(59,158,255,0.3)' : 'rgba(255,255,255,0.06)'
                      const leftBorder = u.status === 'ASSIGNED' ? '#00C98A' : u.status === 'EN ROUTE' ? '#3B9EFF' : 'transparent'
                      return (
                        <div key={u.id} style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          padding: '6px 16px',
                          borderBottom: '1px solid rgba(255,255,255,0.04)',
                          borderLeft: `3px solid ${leftBorder}`,
                          background: u.active ? 'rgba(59,158,255,0.04)' : 'transparent',
                        }}>
                          <div>
                            <div style={{ fontSize: '11px', fontWeight: 700, color: u.active ? '#E0ECF8' : '#48647A', letterSpacing: '0.05em' }}>{u.id}</div>
                            <div style={{ fontSize: '7.5px', color: '#48647A', marginTop: 1, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{u.role} · {u.distance} · {u.eta}</div>
                          </div>
                          <div style={{
                            fontSize: '7px', fontWeight: 800, letterSpacing: '0.12em', padding: '2px 7px', borderRadius: 3,
                            background: statusBg, color: statusColor, border: `1px solid ${statusBorder}`,
                          }}>{u.status}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* MODULE 2 — Protocol steps OR dispatch brief */}
                <div style={{ minHeight: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden', borderTop: '2px solid rgba(173,198,255,0.08)' }}>
                  <div style={{ padding: '8px 16px 6px', background: 'rgba(173,198,255,0.04)', borderBottom: '2px solid rgba(173,198,255,0.12)', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 3, height: 12, borderRadius: 2, background: '#adc6ff', flexShrink: 0 }} />
                    <span style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.7)' }}>
                      {stage.protocolSteps ? 'RESPONSE PROTOCOL' : 'DISPATCH BRIEF SENT'}
                    </span>
                  </div>
                  <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 4, padding: '8px 16px' }}>
                    {stage.protocolSteps ? stage.protocolSteps.map((step) => {
                      const isDone   = step.status === 'complete'
                      const isActive = step.status === 'active'
                      const dotColor  = isDone ? '#00C98A' : isActive ? '#3B9EFF' : 'rgba(173,198,255,0.2)'
                      const textColor = isDone ? 'rgba(200,255,230,0.75)' : isActive ? '#c8dff0' : 'rgba(173,198,255,0.35)'
                      const borderCol = isDone ? 'rgba(0,201,138,0.18)' : isActive ? 'rgba(59,158,255,0.18)' : 'rgba(255,255,255,0.04)'
                      const bg        = isDone ? 'rgba(0,201,138,0.05)' : isActive ? 'rgba(59,158,255,0.06)' : 'transparent'
                      return (
                        <div key={step.id} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', padding: '5px 8px', borderRadius: 4, background: bg, border: `1px solid ${borderCol}` }}>
                          <div style={{ flexShrink: 0, marginTop: 4, width: 6, height: 6, borderRadius: '50%', background: dotColor, boxShadow: isActive ? '0 0 6px rgba(59,158,255,0.6)' : 'none' }} />
                          <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 6 }}>
                            <span style={{ fontSize: '9.5px', color: textColor, lineHeight: 1.45, fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontWeight: isActive ? 600 : 500 }}>{step.text}</span>
                            {isDone && <span style={{ flexShrink: 0, fontSize: '6.5px', fontWeight: 800, letterSpacing: '0.1em', color: '#00C98A', background: 'rgba(0,201,138,0.12)', border: '1px solid rgba(0,201,138,0.25)', borderRadius: 3, padding: '1px 5px', marginTop: 2 }}>DONE</span>}
                            {isActive && <span style={{ flexShrink: 0, fontSize: '6.5px', fontWeight: 800, letterSpacing: '0.1em', color: '#3B9EFF', background: 'rgba(59,158,255,0.12)', border: '1px solid rgba(59,158,255,0.3)', borderRadius: 3, padding: '1px 5px', marginTop: 2 }}>ACTIVE</span>}
                          </div>
                        </div>
                      )
                    }) : stage.decideCard.briefItems.map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', padding: '5px 8px', borderRadius: 4, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 11, color: '#3B9EFF', flexShrink: 0, marginTop: 1 }}>check_circle</span>
                        <span style={{ fontSize: '9.5px', color: '#c8dff0', lineHeight: 1.45, fontFamily: 'var(--font-manrope), Manrope, sans-serif', fontWeight: 500 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MODULE 3 — AI score + dispatched + banner */}
                <div style={{ minHeight: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden', borderTop: '2px solid rgba(0,201,138,0.1)' }}>
                  <div style={{ padding: '8px 16px 6px', background: 'rgba(0,201,138,0.05)', borderBottom: '2px solid rgba(0,201,138,0.2)', flexShrink: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 3, height: 12, borderRadius: 2, background: '#00C98A', flexShrink: 0 }} />
                    <span style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#00C98A' }}>AI RECOMMENDATION</span>
                  </div>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 14, padding: '10px 16px' }}>
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="64" height="64" viewBox="0 0 72 72">
                        <circle cx="36" cy="36" r="30" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
                        <circle cx="36" cy="36" r="30" fill="none" stroke="#00C98A" strokeWidth="6"
                          strokeDasharray={`${2 * Math.PI * 30 * (stage.decideCard.aiScore / 100)} ${2 * Math.PI * 30}`}
                          strokeLinecap="round" transform="rotate(-90 36 36)"
                        />
                      </svg>
                      <div style={{ position: 'absolute', textAlign: 'center' }}>
                        <div style={{ fontSize: '14px', fontWeight: 700, color: '#00C98A', lineHeight: 1 }}>{stage.decideCard.aiScore}%</div>
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '7px', color: 'rgba(173,198,215,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 4 }}>AI SELECTION SCORE</div>
                      <div style={{ fontSize: '7px', color: 'rgba(0,201,138,0.7)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 2 }}>DISPATCHED TO</div>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#00C98A' }}>{stage.decideCard.dispatchedTo}</div>
                    </div>
                  </div>
                  <div style={{ margin: '0 12px 10px', padding: '7px 12px', borderRadius: 6, background: 'rgba(0,201,138,0.08)', border: '1px solid rgba(0,201,138,0.25)', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                    <span className="animate-pulse" style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#00C98A', flexShrink: 0 }} />
                    <span style={{ fontSize: '8.5px', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#00C98A' }}>DISPATCH CONFIRMED · UNITS EN ROUTE</span>
                  </div>
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
                {/* 911 Transcript */}
                {stage.geoPanel.transcript && stage.geoPanel.transcript.length > 0 && (
                  <div style={{ marginTop: 12, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 10 }}>
                    <div style={{ fontSize: '7px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,120,120,0.7)', marginBottom: 7, display: 'flex', alignItems: 'center', gap: 5 }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#FF4560', display: 'inline-block' }} />
                      911 TRANSCRIPT
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                      {stage.geoPanel.transcript.map((line, i) => (
                        <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                          <span style={{
                            fontSize: '6.5px', fontWeight: 800, letterSpacing: '0.18em',
                            color: line.speaker === 'DISPATCH' ? 'rgba(173,198,255,0.5)' : 'rgba(255,140,140,0.6)',
                          }}>{line.speaker}</span>
                          <span style={{ fontSize: '9px', color: line.speaker === 'DISPATCH' ? 'rgba(200,220,255,0.75)' : 'rgba(255,200,200,0.85)', lineHeight: 1.4 }}>
                            {line.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

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

        {/* ── Stage 2+ light-bg: dataPoints only, white overlay on image (headline is above panel) ── */}
        {!isFirst && !stage.geoPanel && isLightBg && stage.dataPoints && stage.dataPoints.length > 0 && (
          <div style={{ position: 'absolute', left: stage.understandMap ? 280 : 44, bottom: 36, zIndex: 20 }}>
            <div style={{ display: 'flex', gap: 48 }}>
              {stage.dataPoints.map((dp) => (
                <div key={dp.key}>
                  <span style={{ display: 'block', fontSize: '8px', fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(173,198,255,0.6)', marginBottom: 6 }}>
                    {dp.key}
                  </span>
                  <span style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '-0.01em', color: '#fff', fontStyle: 'italic', textTransform: 'uppercase' }}>
                    {dp.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Stage 2+: all content at bottom-left (dark-bg only — light-bg moves this above panel) ── */}
        {!isFirst && !stage.geoPanel && !isLightBg && (
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

        {/* ── Stage 2+: system modules above PiP — dark-bg only (light-bg shows modules in title block) ── */}
        {!isFirst && !stage.geoPanel && !stage.decideCard && !isLightBg && (
          <div
            style={{
              position: 'absolute',
              bottom: pipCount >= 2 ? 410 : hasPip ? 222 : 36,
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

        {/* ── Detect stage: title moved to light-bg block above panel (isLightBg) ── */}

        {/* ── Detection-logic flow panel (right half of the detect cinematic panel) ── */}
        {hasDetectFlow && stage.detectFlow && (
          <>
            {/* Thick white separator — same language as other split screens */}
            <div
              aria-hidden
              className="detect-v-sep"
              style={{
                position: 'absolute',
                top: 0, bottom: 0,
                left: 'calc(50% - 3px)',
                width: 6,
                background: 'rgba(255,255,255,0.6)',
                zIndex: 30,
                pointerEvents: 'none',
              }}
            />
            <div
              className="detect-flow-half"
              style={{
                position: 'absolute',
                top: 0, right: 0, bottom: 0,
                width: '50%',
                zIndex: 25,
              }}
            >
              <DetectFlowPanel flow={stage.detectFlow} />
            </div>
          </>
        )}
      </div>

      {/* ── Navigation handled by floating BottomNav in ScenarioPlayer ── */}
      {false && <div
        className="demo-stage-nav"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
          flexShrink: 0,
          marginTop: isLightBg ? 12 : 24,
          fontFamily: 'var(--font-manrope), Manrope, sans-serif',
        }}
      >
        {/* PREV button */}
        {prevStage && (
          <button
            onClick={onPrev}
            className="demo-stage-nav-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: '12px 28px',
              borderRadius: 12,
              background: isLightBg ? 'rgba(0,0,0,0.06)' : 'rgba(16,19,27,0.4)',
              backdropFilter: isLightBg ? undefined : 'blur(20px)',
              border: isLightBg ? '1px solid rgba(0,0,0,0.1)' : '1px solid rgba(255,255,255,0.1)',
              color: isLightBg ? 'rgba(15,35,75,0.5)' : 'rgba(255,255,255,0.45)',
              cursor: 'pointer',
              transition: 'all 0.25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = isLightBg ? '#0b1c36' : '#fff'
              e.currentTarget.style.borderColor = isLightBg ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.22)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = isLightBg ? 'rgba(15,35,75,0.5)' : 'rgba(255,255,255,0.45)'
              e.currentTarget.style.borderColor = isLightBg ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'
            }}
          >
            <div
              className="demo-stage-nav-icon"
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                border: isLightBg ? '1px solid rgba(0,0,0,0.1)' : '1px solid rgba(255,255,255,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_back</span>
            </div>
            <div style={{ textAlign: 'left' }}>
              <span className="demo-stage-nav-sublabel" style={{ fontSize: '8px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 2 }}>
                Go back
              </span>
              <span className="demo-stage-nav-mainlabel" style={{ display: 'block', fontSize: '1.05rem', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>
                ‹ PREVIOUS: {prevStage?.label}
              </span>
            </div>
          </button>
        )}

        {/* NEXT button */}
        {nextStage && (
          <button
            onClick={onNext}
            className="demo-stage-nav-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: '12px 32px',
              borderRadius: 12,
              background: isLightBg ? '#0b1a30' : 'rgba(173,198,255,0.08)',
              border: isLightBg ? '1px solid rgba(75,142,255,0.22)' : '1px solid rgba(173,198,255,0.2)',
              color: isLightBg ? '#fff' : '#adc6ff',
              cursor: 'pointer',
              transition: 'all 0.25s',
              boxShadow: isLightBg ? '0 4px 20px rgba(0,0,0,0.12)' : 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = isLightBg ? '#142840' : 'rgba(173,198,255,0.18)'
              e.currentTarget.style.boxShadow = isLightBg ? '0 6px 28px rgba(0,0,0,0.18)' : '0 4px 24px rgba(173,198,255,0.14)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = isLightBg ? '#0b1a30' : 'rgba(173,198,255,0.08)'
              e.currentTarget.style.boxShadow = isLightBg ? '0 4px 20px rgba(0,0,0,0.12)' : 'none'
            }}
          >
            <div style={{ textAlign: 'left' }}>
              <span className="demo-stage-nav-sublabel" style={{ fontSize: '8px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.65, marginBottom: 2 }}>
                Proceed to next step
              </span>
              <span className="demo-stage-nav-mainlabel" style={{ display: 'block', fontSize: '1.1rem', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>
                NEXT: {nextStage?.label}
              </span>
            </div>
            <div
              className="demo-stage-nav-icon"
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                border: isLightBg ? '1px solid rgba(75,142,255,0.3)' : '1px solid rgba(173,198,255,0.25)',
                background: isLightBg ? 'rgba(75,142,255,0.12)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
            </div>
          </button>
        )}
      </div>}
    </div>
    </>
  )
}
