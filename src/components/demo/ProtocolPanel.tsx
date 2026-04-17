'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import type { Stage } from '@/data/demo/types'
import { ALL_MODULES } from './TopBar'

const DecideMapPanel = dynamic(() => import('./DecideMapPanel'), { ssr: false })
const DecisionTreePanel = dynamic(() => import('./DecisionTreePanel'), { ssr: false })
const VideoWall = dynamic(() => import('./VideoWall'), { ssr: false })

interface ProtocolPanelProps {
  stage: Stage
  nextStage?: Stage
  prevStage?: Stage
  onNext: () => void
  onPrev: () => void
  isLightBg?: boolean
}

export default function ProtocolPanel({ stage, nextStage, prevStage, onNext, onPrev, isLightBg = false }: ProtocolPanelProps) {
  const steps = stage.protocolSteps ?? []
  const hasTree = !!stage.decisionTree
  const hasMap = !hasTree && !!(stage.decideMap?.incidentCoords)
  const hasWall = !!stage.videoWall
  const incidentLabel = stage.dataPoints[0]?.value ?? 'ACTIVE · P1'

  return (
    <>
    <style>{`
      @keyframes pp-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.8)} }
      @keyframes pp-ring  { 0%{transform:scale(1);opacity:0.8} 100%{transform:scale(2.4);opacity:0} }
      .pp-main-row { flex-direction: row; }
      .pp-left-panel { flex: 1; min-width: 0; overflow: hidden; border-right: 6px solid rgba(255,255,255,0.6) !important; }
      .pp-center-panel { flex: 1; min-width: 0; overflow: hidden; border-right: 6px solid rgba(255,255,255,0.6) !important; }
      .pp-camera-panel { flex: 1; min-width: 0; display: flex; flex-direction: column; overflow: hidden; }
      .pp-camera-pip { width: 100%; flex: 1; display: flex; flex-direction: column; min-height: 0; }
      .pp-camera-img { width: 100%; flex: 1; min-height: 0; }
      .demo-stage-nav-sublabel { display: block; }
      @media (max-width: 1100px) {
        .pp-outer-wrap { height: auto !important; overflow-y: visible !important; }
        .pp-main-row { flex: none !important; overflow: visible !important; }
      }
      @media (max-width: 768px) {
        .pp-main-row { flex-direction: column !important; gap: 0 !important; }
        .pp-left-panel { flex: none !important; overflow-y: visible !important; min-height: 280px; border-right: none !important; border-bottom: 6px solid rgba(255,255,255,0.6) !important; }
        .pp-center-panel { flex: none !important; min-height: 520px; height: auto !important; border-right: none !important; border-bottom: 6px solid rgba(255,255,255,0.6) !important; overflow: visible !important; }
        .pp-camera-panel { flex: none !important; min-height: 360px; }
        .pp-modules-row { display: grid !important; grid-template-columns: 1fr 1fr; }
        .pp-step-row { flex-wrap: wrap !important; padding: 10px 12px !important; gap: 10px !important; }
        .pp-step-title { font-size: 13px !important; word-break: break-word; }
        .pp-step-detail { font-size: 11px !important; word-break: break-word; }
        .pp-step-badge { order: 3; flex: 0 0 auto; margin-left: 40px; font-size: 8px !important; padding: 2px 6px !important; }
        .pp-footer-strip { overflow-x: auto !important; overflow-y: hidden !important; -webkit-overflow-scrolling: touch; }
        .pp-footer-modules { display: none !important; }
      }
    `}</style>

    {/* Light treatment outer wrapper — mirrors StageScreen's white area */}
    <div className={isLightBg ? 'pp-outer-wrap' : ''} style={isLightBg ? {
      display: 'flex', flexDirection: 'column', alignItems: 'stretch',
      height: 'calc(100vh - 196px)', margin: '0 20px', padding: '20px 28px 20px',
    } : {
      display: 'contents',
    }}>

      {/* ── Title block above dark panel (light bg only) ── */}
      {isLightBg && (
        <div style={{ flexShrink: 0, paddingBottom: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 10 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <div style={{ width: 3, height: 14, borderRadius: 2, background: '#1755c2', flexShrink: 0 }} />
                <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(20,50,100,0.58)' }}>
                  {stage.stageLabel.split(' — ')[0]}
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 2.6vw, 2.8rem)', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.025em', textTransform: 'uppercase', lineHeight: 1.0, color: '#0b1c36', marginBottom: 6 }}>
                {stage.headline}
              </h2>
              <p style={{ color: 'rgba(15,35,75,0.62)', fontSize: '0.82rem', fontWeight: 500, lineHeight: 1.55, maxWidth: 480 }}>
                {stage.description}
              </p>
            </div>
          </div>
          <div className="pp-modules-row" style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
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

    <div style={{
      display: 'grid',
      gridTemplateRows: isLightBg ? '36px 2px 1fr' : '36px auto 2px 1fr auto',
      ...(isLightBg
        ? { flex: 1, minHeight: 0, borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(0,20,60,0.1)', boxShadow: '0 2px 8px rgba(0,20,60,0.07), 0 12px 40px rgba(0,20,60,0.12), 0 40px 80px rgba(0,20,60,0.1)' }
        : { height: 'calc(100vh - 120px)', overflow: 'hidden' }),
      fontFamily: 'var(--font-manrope), Manrope, sans-serif',
      background: isLightBg ? '#0D1825' : '#0D1825',
    }}>

      {/* ── Stage info bar ── */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 20px',
        background: 'rgba(6,12,22,0.95)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <span style={{ fontFamily: 'monospace', fontSize: 10, color: '#3B9EFF', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          {stage.stageLabel}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#FF4560', display: 'inline-block', animation: 'pp-pulse 1.2s ease-in-out infinite' }} />
          <span style={{ fontFamily: 'monospace', fontSize: 10, color: '#FF8C8C', letterSpacing: '0.12em', fontWeight: 700 }}>{incidentLabel}</span>
        </div>
        <span style={{ fontFamily: 'monospace', fontSize: 10, color: '#48647A' }}>{stage.timestamp}</span>
      </div>

      {/* ── Page header: big title + subtitle — dark bg only ── */}
      {!isLightBg && (
        <div style={{
          padding: '14px 28px 12px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          flexShrink: 0,
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          background: '#0D1825',
        }}>
          <div>
            <h2 style={{
              fontSize: 'clamp(1.4rem, 2.2vw, 2rem)',
              fontWeight: 900, fontStyle: 'italic',
              letterSpacing: '-0.025em', textTransform: 'uppercase',
              lineHeight: 1.05, color: '#fff', margin: 0,
            }}>
              {stage.headline}
            </h2>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', marginTop: 5, fontWeight: 500 }}>
              {stage.description}
            </p>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 12px', borderRadius: 9999, background: 'rgba(16,19,27,0.6)', border: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
            <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#FF4560', animation: 'pp-pulse 1.2s ease-in-out infinite' }} />
            <span style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Response Active</span>
          </div>
        </div>
      )}

      {/* Progress bar */}
      <div style={{ height: 2, background: 'rgba(255,255,255,0.06)', flexShrink: 0 }}>
        <div style={{ height: '100%', width: '60%', background: 'linear-gradient(90deg, #3B9EFF, #adc6ff)' }} />
      </div>

      {/* ── Main content row ── */}
      <div className="pp-main-row" style={{
        display: 'flex',
        overflow: 'hidden',
        minHeight: 0,
        flex: 1,
      }}>

        {/* ── LEFT: Protocol steps (dark) ── */}
        <div className="pp-left-panel" style={{
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
          background: '#0B1622',
        }}>
          {/* Steps list */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {steps.map((step) => {
              // Split title from detail on em-dash — fallback to whole string as title
              const parts = step.text.split(/\s+—\s+/)
              const title = parts[0]
              const detail = parts.slice(1).join(' — ')

              const isComplete = step.status === 'complete'
              const isActive = step.status === 'active'
              const isPending = step.status === 'pending'

              const accent = isActive ? '#3B9EFF' : isComplete ? '#10B981' : 'rgba(255,255,255,0.12)'
              const titleColor = isPending ? 'rgba(255,255,255,0.35)' : '#FFFFFF'
              const detailColor = isPending ? 'rgba(255,255,255,0.22)' : isComplete ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.7)'
              const bg = isActive ? 'rgba(59,158,255,0.08)' : 'transparent'

              return (
                <div key={step.id} className="pp-step-row" style={{
                  position: 'relative',
                  display: 'flex', alignItems: 'flex-start', gap: 14,
                  padding: '12px 14px 12px 16px', borderRadius: 8, flexShrink: 0,
                  background: bg,
                  borderLeft: `3px solid ${accent}`,
                  transition: 'background 0.2s',
                }}>
                  {/* Numbered circle / status icon */}
                  <div style={{ flexShrink: 0, width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    {isComplete && (
                      <div style={{
                        width: 28, height: 28, borderRadius: '50%',
                        background: 'rgba(16,185,129,0.18)', border: '1.5px solid #10B981',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M3 7.2l2.6 2.6L11 4.4" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                    {isActive && (
                      <>
                        <span style={{ position: 'absolute', width: 36, height: 36, borderRadius: '50%', background: 'rgba(59,130,246,0.22)', animation: 'pp-ring 1.5s ease-out infinite' }} />
                        <div style={{
                          width: 28, height: 28, borderRadius: '50%',
                          background: '#3B82F6', border: '1.5px solid #60A5FA',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 13, fontWeight: 800, color: '#fff',
                        }}>{step.id}</div>
                      </>
                    )}
                    {isPending && (
                      <div style={{
                        width: 28, height: 28, borderRadius: '50%',
                        background: 'transparent', border: '1.5px solid rgba(255,255,255,0.14)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.35)',
                      }}>{step.id}</div>
                    )}
                  </div>
                  {/* Title + detail */}
                  <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 3, paddingTop: 2 }}>
                    <div className="pp-step-title" style={{
                      fontSize: 14, fontWeight: 700, lineHeight: 1.3,
                      color: titleColor, letterSpacing: '0.02em',
                    }}>{title}</div>
                    {detail && (
                      <div className="pp-step-detail" style={{
                        fontSize: 12, lineHeight: 1.45, fontWeight: 400,
                        color: detailColor,
                      }}>{detail}</div>
                    )}
                  </div>
                  {isActive && (
                    <span className="pp-step-badge" style={{
                      fontSize: 9, fontWeight: 800, letterSpacing: '0.16em',
                      color: '#3B9EFF', background: 'rgba(59,158,255,0.15)', border: '1px solid rgba(59,158,255,0.4)',
                      borderRadius: 4, padding: '3px 8px', flexShrink: 0, alignSelf: 'center',
                    }}>IN PROGRESS</span>
                  )}
                </div>
              )
            })}
          </div>

          {/* Data points strip */}
          <div className="pp-footer-strip" style={{
            flexShrink: 0, height: 32,
            display: 'flex', alignItems: 'center',
            background: 'rgba(6,12,22,0.9)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            overflow: 'hidden',
          }}>
            {stage.dataPoints.map((dp) => (
              <div key={dp.key} style={{
                display: 'flex', alignItems: 'center', gap: 7,
                padding: '0 14px', height: '100%',
                borderRight: '1px solid rgba(255,255,255,0.06)',
                flexShrink: 0,
              }}>
                <span style={{ fontFamily: 'monospace', fontSize: 8, color: 'rgba(173,198,255,0.35)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{dp.key}</span>
                <span style={{ fontFamily: 'monospace', fontSize: 9, color: '#ADC6FF', fontWeight: 700 }}>{dp.value}</span>
              </div>
            ))}
            <div className="pp-footer-modules" style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '0 10px', marginLeft: 'auto', flexShrink: 0 }}>
              {stage.modules.map((m) => (
                <span key={m} style={{
                  fontFamily: 'monospace', fontSize: 7, color: '#48647A', letterSpacing: '0.08em', whiteSpace: 'nowrap',
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 3, padding: '1px 5px',
                }}>{m}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── CENTER: Decision tree OR Map ── */}
        <div className="pp-center-panel" style={{
          flex: 1, display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
          background: '#060e18',
        }}>
          {hasTree && (
            <DecisionTreePanel tree={stage.decisionTree!} />
          )}
          {hasMap && (
            <div style={{ flex: 1, position: 'relative', overflow: 'hidden', contain: 'strict' }}>
              <DecideMapPanel
                incidentCoords={stage.decideMap!.incidentCoords}
                units={stage.decideMap!.units}
              />
              {/* Map legend */}
              <div style={{ position: 'absolute', bottom: 10, left: 10, zIndex: 1000, background: 'rgba(6,14,24,0.88)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 5, padding: '6px 10px', display: 'flex', flexDirection: 'column', gap: 4, pointerEvents: 'none' }}>
                {[{ l: 'INCIDENT', c: '#FF5F5F' }, { l: 'ASSIGNED', c: '#00C98A' }, { l: 'EN ROUTE', c: '#3B9EFF' }, { l: 'STANDBY', c: '#C1C6D7' }].map(({ l, c }) => (
                  <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: c, flexShrink: 0, display: 'inline-block' }} />
                    <span style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(193,198,215,0.6)', letterSpacing: '0.12em' }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {!hasTree && !hasMap && (
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#1A3050' }}>NO MAP DATA</span>
            </div>
          )}
        </div>{/* end center */}

        {/* ── RIGHT: 3x3 Video Wall (when set) ── */}
        {hasWall && (
          <div className="pp-camera-panel" style={{
            flexDirection: 'column',
            background: '#07101c',
          }}>
            <VideoWall wall={stage.videoWall!} />
          </div>
        )}

        {/* ── RIGHT: Camera feeds (legacy — used with decideMap) ── */}
        {!hasWall && hasMap && stage.decideMap!.cameras && stage.decideMap!.cameras.length > 0 && (
          <div className="pp-camera-panel" style={{
            flexDirection: 'column', gap: 0, overflowY: 'auto',
            background: '#07101c',
          }}>
            {/* Panel header */}
            <div style={{ flexShrink: 0, padding: '8px 10px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF4560', display: 'inline-block', animation: 'pp-pulse 1.2s ease-in-out infinite' }} />
              <span style={{ fontFamily: 'monospace', fontSize: 8, fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(255,140,140,0.8)', textTransform: 'uppercase' }}>Live Cameras</span>
            </div>
            {/* Camera PiPs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '8px', flex: 1, minHeight: 0 }}>
              {stage.decideMap!.cameras.map((cam, i) => (
                <div key={i} className="pp-camera-pip" style={{ borderRadius: 5, overflow: 'hidden', border: cam.alert ? '1.5px solid rgba(255,95,95,0.7)' : '1px solid rgba(59,158,255,0.35)', boxShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '3px 8px', background: 'rgba(6,12,22,0.95)', borderBottom: cam.alert ? '1px solid rgba(255,95,95,0.3)' : '1px solid rgba(59,158,255,0.2)' }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', flexShrink: 0, background: cam.alert ? '#FF4560' : '#3B9EFF', display: 'inline-block', animation: cam.alert ? 'pp-pulse 1.2s ease-in-out infinite' : undefined }} />
                    <span style={{ fontFamily: 'monospace', fontSize: 8, fontWeight: 700, letterSpacing: '0.1em', color: cam.alert ? '#FF8C8C' : '#3B9EFF' }}>● LIVE</span>
                    <span style={{ fontFamily: 'monospace', fontSize: 7, color: 'rgba(193,198,215,0.45)', marginLeft: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 80 }}>{cam.label}</span>
                  </div>
                  {cam.image && (
                    <div className="pp-camera-img" style={{ position: 'relative', background: '#060e18' }}>
                      <Image src={cam.image} alt={cam.label} fill style={{ objectFit: 'cover', filter: 'brightness(0.85) saturate(0.9)' }} sizes="(max-width: 768px) 100vw, 40vw" unoptimized />
                      <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)', pointerEvents: 'none' }} />
                      <div style={{ position: 'absolute', bottom: 4, left: 6, fontFamily: 'monospace', fontSize: 7, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.06em' }}>12:05:12</div>
                      {cam.alert && (
                        <div style={{ position: 'absolute', top: 4, left: 6, background: 'rgba(255,69,96,0.2)', border: '1px solid rgba(255,69,96,0.6)', padding: '1px 6px', borderRadius: 2, fontFamily: 'monospace', fontSize: 7, fontWeight: 800, color: '#FF4560', letterSpacing: '0.12em' }}>ALERT</div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>{/* end main row */}

      {/* ── Nav buttons — handled by floating BottomNav ── */}
      {false && !isLightBg && (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 12, padding: '12px 0',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          fontFamily: 'var(--font-manrope), Manrope, sans-serif',
          background: '#0D1825',
        }}>
          {prevStage && (
            <button
              onClick={onPrev}
              className="demo-stage-nav-btn"
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
              <div className="demo-stage-nav-icon" style={{ width: 28, height: 28, borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 15 }}>arrow_back</span>
              </div>
              <div style={{ textAlign: 'left' }}>
                <span className="demo-stage-nav-sublabel" style={{ fontSize: '8px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 2 }}>Go back</span>
                <span className="demo-stage-nav-mainlabel" style={{ display: 'block', fontSize: '1rem', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>‹ PREVIOUS: {prevStage?.label}</span>
              </div>
            </button>
          )}
          {nextStage && (
            <button
              onClick={onNext}
              className="demo-stage-nav-btn"
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
                <span className="demo-stage-nav-sublabel" style={{ fontSize: '8px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.65, marginBottom: 2 }}>Proceed to next step</span>
                <span className="demo-stage-nav-mainlabel" style={{ display: 'block', fontSize: '1rem', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>NEXT: {nextStage?.label}</span>
              </div>
              <div className="demo-stage-nav-icon" style={{ width: 28, height: 28, borderRadius: 8, border: '1px solid rgba(173,198,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 15 }}>arrow_forward</span>
              </div>
            </button>
          )}
        </div>
      )}

    </div>{/* end grid */}

    {/* ── Nav buttons — handled by floating BottomNav ── */}
    {false && isLightBg && (
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 12, flexShrink: 0, marginTop: 12,
        fontFamily: 'var(--font-manrope), Manrope, sans-serif',
      }}>
        {prevStage && (
          <button
            onClick={onPrev}
            className="demo-stage-nav-btn"
            style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '12px 28px', borderRadius: 12,
              background: 'rgba(0,0,0,0.06)',
              border: '1px solid rgba(0,0,0,0.1)', color: 'rgba(15,35,75,0.5)',
              cursor: 'pointer', transition: 'all 0.25s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#0b1c36'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.2)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(15,35,75,0.5)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)' }}
          >
            <div className="demo-stage-nav-icon" style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_back</span>
            </div>
            <div style={{ textAlign: 'left' }}>
              <span className="demo-stage-nav-sublabel" style={{ fontSize: '8px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 2 }}>Go back</span>
              <span className="demo-stage-nav-mainlabel" style={{ display: 'block', fontSize: '1.05rem', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>‹ PREVIOUS: {prevStage?.label}</span>
            </div>
          </button>
        )}
        {nextStage && (
          <button
            onClick={onNext}
            className="demo-stage-nav-btn"
            style={{
              display: 'flex', alignItems: 'center', gap: 16,
              padding: '12px 32px', borderRadius: 12,
              background: '#0b1a30', border: '1px solid rgba(75,142,255,0.22)',
              color: '#fff', cursor: 'pointer', transition: 'all 0.25s',
              boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#142840'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(0,0,0,0.18)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#0b1a30'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)' }}
          >
            <div style={{ textAlign: 'left' }}>
              <span className="demo-stage-nav-sublabel" style={{ fontSize: '8px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.65, marginBottom: 2 }}>Proceed to next step</span>
              <span className="demo-stage-nav-mainlabel" style={{ display: 'block', fontSize: '1.1rem', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>NEXT: {nextStage?.label}</span>
            </div>
            <div className="demo-stage-nav-icon" style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid rgba(173,198,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
            </div>
          </button>
        )}
      </div>
    )}

    </div>{/* end light outer wrapper */}
    </>
  )
}
