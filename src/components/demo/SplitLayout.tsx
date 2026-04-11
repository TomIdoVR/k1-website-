import Image from 'next/image'
import dynamic from 'next/dynamic'
import type { Stage } from '@/data/demo/types'
import { ALL_MODULES } from './TopBar'

const DispatchMap = dynamic(() => import('./DispatchMap'), { ssr: false })

interface SplitLayoutProps {
  stage: Stage
  nextStage?: Stage
  prevStage?: Stage
  onNext: () => void
  onPrev: () => void
  isLightBg?: boolean
}

export default function SplitLayout({ stage, nextStage, prevStage, onNext, onPrev, isLightBg = false }: SplitLayoutProps) {
  const primaryUnit = stage.dataPoints.find(d => d.key === 'PRIMARY UNIT')?.value ?? ''
  const etaRaw = stage.dataPoints.find(d => d.key === 'ETA')?.value ?? ''
  const etaNum = etaRaw.split(' ')[0]
  const units = stage.splitUnits ?? []
  const phoneRows = stage.splitPhoneRows ?? stage.dataPoints
  const cameraImage = stage.splitCameraImage ?? stage.pipImage ?? ''
  const cameraLabel = stage.splitCameraLabel ?? 'CAM · LIVE'
  const incidentBadge = stage.splitIncidentBadge ?? ''
  const incidentDot = stage.splitIncidentDot ?? 'INCIDENT'
  const unitDot = stage.splitUnitDot ?? 'UNIT'
  const mapImage = stage.pipImage ?? ''

  return (
    <>
    <style>{`
      .demo-split-body { display: flex; overflow: hidden; flex: 1; min-height: 0; }
      .demo-split-phone { flex: 1; min-width: 0; border-right: 1px solid rgba(173,198,255,0.12) !important; }
      .demo-split-map { flex: 1; min-width: 0; border-right: 1px solid rgba(173,198,255,0.12); }
      .demo-split-units { flex: 1; min-width: 0; }
      .demo-stage-nav-sublabel { display: block; }
      @media (max-width: 1100px) {
        .demo-split-root { height: auto !important; overflow-y: auto !important; }
        .demo-split-body { flex: none !important; overflow: visible !important; }
        .demo-split-units { border-left: 1px solid rgba(173,198,255,0.12); }
        .demo-split-map { border-right: none !important; }
      }
      @media (max-width: 768px) {
        .demo-split-body { flex-direction: column !important; }
        .demo-split-phone { flex: 0 0 auto !important; max-width: 100% !important; width: 100% !important; max-height: 52%; overflow-y: auto; border-right: none !important; border-bottom: 1px solid rgba(173,198,255,0.12) !important; }
        .demo-split-map { flex: 1 !important; min-height: 200px; border-right: none !important; border-bottom: 1px solid rgba(173,198,255,0.12); }
        .demo-split-units { flex: none !important; min-height: 220px; border-left: none !important; border-top: 1px solid rgba(173,198,255,0.12); }
        .demo-stage-nav-btn { padding: 8px 16px !important; gap: 10px !important; }
        .demo-stage-nav-sublabel { display: none !important; }
        .demo-stage-nav-mainlabel { font-size: 0.78rem !important; }
        .demo-stage-nav-icon { width: 24px !important; height: 24px !important; }
      }
      @media (max-width: 480px) {
        .demo-split-phone { max-height: 58% !important; padding: 8px 12px 0 !important; }
        .demo-split-map { min-height: 180px; }
        .demo-stage-nav-btn { padding: 6px 12px !important; gap: 8px !important; }
        .demo-stage-nav-mainlabel { font-size: 0.68rem !important; }
      }
    `}</style>
    <div
      className="demo-split-root"
      style={isLightBg ? {
        height: 'calc(100vh - 120px)',
        display: 'flex', flexDirection: 'column', alignItems: 'stretch',
        padding: '20px 28px 14px',
        fontFamily: 'var(--font-manrope), Manrope, sans-serif',
      } : {
        height: 'calc(100vh - 120px)',
        background: '#162235',
        display: 'flex', flexDirection: 'column',
        fontFamily: 'var(--font-manrope), Manrope, sans-serif',
        overflow: 'hidden',
      }}
    >
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
            {/* ETA counter — keeps its position top-right */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 5, flexShrink: 0, paddingBottom: 4 }}>
              <span style={{ fontSize: '2rem', fontWeight: 900, fontStyle: 'italic', color: '#0b1c36', fontFamily: 'var(--font-space-mono), monospace', lineHeight: 1 }}>{etaNum}</span>
              <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(20,50,100,0.45)', textTransform: 'uppercase' }}>MIN ETA</span>
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

      {/* ── Dark panel wrapper (light bg: rounded + shadow; dark bg: full bleed) ── */}
      <div style={isLightBg ? {
        flex: 1, minHeight: 0,
        borderRadius: 12, overflow: 'hidden',
        border: '1px solid rgba(0,20,60,0.1)',
        boxShadow: '0 2px 8px rgba(0,20,60,0.07), 0 12px 40px rgba(0,20,60,0.12), 0 40px 80px rgba(0,20,60,0.1)',
        display: 'flex', flexDirection: 'column',
        background: '#162235',
      } : {
        flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden',
      }}>

      {/* ── Stage header — dark bg only ── */}
      {!isLightBg && (
        <div
          className="demo-split-header"
          style={{
            padding: '16px 32px 12px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
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
              {primaryUnit} · En Route
            </p>
          </div>
          <div className="demo-split-eta" style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 12px', borderRadius: 9999, background: 'rgba(16,19,27,0.6)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <span className="animate-pulse" style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#adc6ff' }} />
              <span style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>Live Monitoring</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
              <span style={{ fontSize: '2rem', fontWeight: 900, fontStyle: 'italic', color: '#fff', fontFamily: 'var(--font-space-mono), monospace', lineHeight: 1 }}>{etaNum}</span>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: '#adc6ff', textTransform: 'uppercase' }}>MIN ETA</span>
            </div>
          </div>
        </div>
      )}

      {/* Progress bar */}
      <div style={{ height: 2, background: 'rgba(255,255,255,0.06)', flexShrink: 0 }}>
        <div style={{ height: '100%', width: '65%', background: 'linear-gradient(90deg, #3B9EFF, #adc6ff)' }} />
      </div>

      {/* ── Main split — 3 panels: phone | map | units ── */}
      <div className="demo-split-body">

        {/* ── PANEL 1 — Smartphone mockup ── */}
        <div
          className="demo-split-phone"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '12px 24px 0',
            overflowY: 'auto',
            background: 'radial-gradient(ellipse at 50% 44%, #2a5280 0%, #111e2f 70%)',
          }}
        >
          {/* Panel title */}
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 16, color: '#adc6ff' }}>smartphone</span>
            <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#adc6ff' }}>
              First Responder Application
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
                background: '#162235',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
            {/* Status bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 14px 2px', background: '#000', flexShrink: 0 }}>
              <span style={{ fontFamily: 'monospace', fontSize: 8, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em' }}>9:41</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>signal_cellular_4_bar</span>
                <span className="material-symbols-outlined" style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>wifi</span>
                <span className="material-symbols-outlined" style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>battery_5_bar</span>
              </div>
            </div>
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
              {cameraImage && (
                <Image
                  src={cameraImage}
                  alt="CCTV Feed"
                  fill
                  style={{ objectFit: 'cover', filter: 'brightness(0.65)' }}
                  sizes="260px"
                />
              )}
              <div style={{ position: 'absolute', top: 6, left: 8, fontSize: '7px', fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace' }}>
                {cameraLabel}
              </div>
              {incidentBadge && (
                <div style={{ position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)',
                  background: 'rgba(255,69,96,0.2)', border: '1.5px solid #FF4560', padding: '3px 12px', borderRadius: 2,
                  fontSize: '8px', fontWeight: 800, color: '#FF4560', letterSpacing: '0.15em', whiteSpace: 'nowrap'
                }}>
                  {incidentBadge}
                </div>
              )}
            </div>

            {/* Data rows */}
            <div style={{ padding: '10px 14px 8px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', gap: 6 }}>
              {phoneRows.map((row) => (
                <div key={row.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '8px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#48647A' }}>
                    {row.key}
                  </span>
                  <span style={{ fontSize: '11px', fontWeight: 800, fontFamily: 'monospace', color: row.key === 'THREAT LEVEL' ? '#FF4560' : '#E0ECF8' }}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Officer + case info */}
            <div style={{ padding: '6px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(59,158,255,0.15)', border: '1px solid rgba(59,158,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 12, color: '#3B9EFF' }}>person</span>
                </div>
                <div>
                  <div style={{ fontSize: 9, fontWeight: 700, color: '#E0ECF8', letterSpacing: '0.05em' }}>12-CHARLIE</div>
                  <div style={{ fontSize: 7, color: '#48647A', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Officer J. Reyes</div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#00C98A', display: 'inline-block' }} />
                  <span style={{ fontSize: 8, color: '#00C98A', fontWeight: 700, letterSpacing: '0.08em' }}>EN ROUTE</span>
                </div>
                <div style={{ fontSize: 7, color: '#48647A', letterSpacing: '0.05em', fontFamily: 'monospace', marginTop: 1 }}>ETA 2.8 MIN</div>
              </div>
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
                background: '#0a1520',
              }}
            >
              {mapImage && (
                <Image
                  src={mapImage}
                  alt="Route Map"
                  fill
                  style={{ objectFit: 'cover', filter: 'brightness(0.5) saturate(0.6)' }}
                  sizes="232px"
                />
              )}
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '7px', fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(173,198,255,0.6)', textTransform: 'uppercase', fontFamily: 'monospace' }}>
                  NAVIGATION · ROUTE ACTIVE
                </span>
              </div>
            </div>

            {/* CTA buttons */}
            <div style={{ padding: '0 14px 10px', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <button
                style={{
                  width: '100%', padding: '9px 0', borderRadius: 8, border: 'none',
                  background: '#059669', color: '#fff',
                  fontSize: '10px', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 13 }}>check_circle</span>
                Accepted — En Route
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
                padding: '6px 0 8px', background: '#162235',
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

        {/* ── PANEL 2 — Operational map ── */}
        <div className="demo-split-map" style={{ position: 'relative', background: '#0a1520', overflow: 'hidden', minHeight: 300 }}>
          {/* Map panel title */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2, display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px 8px', background: 'linear-gradient(to bottom, rgba(10,21,32,0.9) 0%, rgba(10,21,32,0) 100%)', pointerEvents: 'none' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 14, color: '#adc6ff' }}>map</span>
            <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#adc6ff' }}>
              Operational Map
            </span>
          </div>
          {stage.splitMapCoords ? (
            <DispatchMap
              incident={stage.splitMapCoords.incident}
              unit={stage.splitMapCoords.unit}
              incidentLabel={incidentDot}
              unitLabel={unitDot}
              route={stage.splitMapCoords.route}
            />
          ) : mapImage ? (
            <Image
              src={mapImage}
              alt="Operational Map"
              fill
              style={{ objectFit: 'cover', filter: 'brightness(0.75) saturate(0.85)' }}
              sizes="50vw"
            />
          ) : null}
        </div>

        {/* ── PANEL 3 — Unit list / Dispatcher console ── */}
        <div
          className="demo-split-units"
          style={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 16px 8px', borderBottom: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 14, color: '#adc6ff' }}>monitor</span>
            <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#adc6ff' }}>
              Tactical Units
            </span>
          </div>

          {/* Unit rows */}
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {units.map((unit) => (
              <div
                key={unit.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 16px',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                  borderLeft: unit.active ? '3px solid #3B9EFF' : '3px solid transparent',
                  background: unit.active ? 'rgba(59,158,255,0.05)' : 'transparent',
                }}
              >
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: unit.active ? '#E0ECF8' : '#48647A', letterSpacing: '0.03em', fontFamily: 'monospace' }}>
                    {unit.id}
                  </div>
                  <div style={{ fontSize: '8px', color: '#48647A', marginTop: 2, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    {unit.role}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  {unit.status === 'AVAILABLE' && (
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#00C98A', display: 'inline-block' }} />
                  )}
                  {unit.status === 'STANDBY' && (
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#48647A', display: 'inline-block' }} />
                  )}
                  {unit.active && (
                    <span className="material-symbols-outlined" style={{ fontSize: 13, color: '#3B9EFF' }}>
                      local_shipping
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Module tags */}
          <div style={{ padding: '10px 16px', borderTop: '1px solid rgba(255,255,255,0.06)', flexShrink: 0, display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            {stage.modules.map((m) => (
              <div
                key={m}
                style={{
                  fontSize: '7px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                  padding: '3px 8px', borderRadius: 4,
                  background: 'rgba(173,198,255,0.08)', border: '1px solid rgba(173,198,255,0.18)', color: '#adc6ff',
                }}
              >
                {m}
              </div>
            ))}
          </div>
        </div>

      </div>{/* end main split */}

      {/* ── Nav buttons — handled by floating BottomNav ── */}
      {false && !isLightBg && (
        <div
          className="demo-split-footer"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 12, padding: '16px 0',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            flexShrink: 0,
            fontFamily: 'var(--font-manrope), Manrope, sans-serif',
          }}
        >
          {prevStage && (
            <button onClick={onPrev} className="demo-stage-nav-btn" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '10px 24px', borderRadius: 12, background: 'rgba(16,19,27,0.4)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.45)', cursor: 'pointer', transition: 'all 0.25s' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}>
              <div className="demo-stage-nav-icon" style={{ width: 28, height: 28, borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span className="material-symbols-outlined" style={{ fontSize: 15 }}>arrow_back</span></div>
              <div style={{ textAlign: 'left' }}><span className="demo-stage-nav-sublabel" style={{ fontSize: '8px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 2 }}>Go back</span><span className="demo-stage-nav-mainlabel" style={{ display: 'block', fontSize: '1rem', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>‹ PREVIOUS: {prevStage.label}</span></div>
            </button>
          )}
          {nextStage && (
            <button onClick={onNext} className="demo-stage-nav-btn" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '10px 28px', borderRadius: 12, background: 'rgba(173,198,255,0.08)', border: '1px solid rgba(173,198,255,0.2)', color: '#adc6ff', cursor: 'pointer', transition: 'all 0.25s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(173,198,255,0.18)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(173,198,255,0.14)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(173,198,255,0.08)'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ textAlign: 'left' }}><span className="demo-stage-nav-sublabel" style={{ fontSize: '8px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.65, marginBottom: 2 }}>Proceed to next step</span><span className="demo-stage-nav-mainlabel" style={{ display: 'block', fontSize: '1rem', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>NEXT: {nextStage.label}</span></div>
              <div className="demo-stage-nav-icon" style={{ width: 28, height: 28, borderRadius: 8, border: '1px solid rgba(173,198,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span className="material-symbols-outlined" style={{ fontSize: 15 }}>arrow_forward</span></div>
            </button>
          )}
        </div>
      )}

      </div>{/* end dark panel wrapper */}

      {/* ── Nav buttons — handled by floating BottomNav ── */}
      {false && isLightBg && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexShrink: 0, marginTop: 12, fontFamily: 'var(--font-manrope), Manrope, sans-serif' }}>
          {prevStage && (
            <button onClick={onPrev} className="demo-stage-nav-btn"
              style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 28px', borderRadius: 12, background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.1)', color: 'rgba(15,35,75,0.5)', cursor: 'pointer', transition: 'all 0.25s' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#0b1c36'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.2)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(15,35,75,0.5)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)' }}>
              <div className="demo-stage-nav-icon" style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_back</span></div>
              <div style={{ textAlign: 'left' }}><span className="demo-stage-nav-sublabel" style={{ fontSize: '8px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 2 }}>Go back</span><span className="demo-stage-nav-mainlabel" style={{ display: 'block', fontSize: '1.05rem', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>‹ PREVIOUS: {prevStage.label}</span></div>
            </button>
          )}
          {nextStage && (
            <button onClick={onNext} className="demo-stage-nav-btn"
              style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 32px', borderRadius: 12, background: '#0b1a30', border: '1px solid rgba(75,142,255,0.22)', color: '#fff', cursor: 'pointer', transition: 'all 0.25s', boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#142840'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(0,0,0,0.18)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#0b1a30'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)' }}>
              <div style={{ textAlign: 'left' }}><span className="demo-stage-nav-sublabel" style={{ fontSize: '8px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.65, marginBottom: 2 }}>Proceed to next step</span><span className="demo-stage-nav-mainlabel" style={{ display: 'block', fontSize: '1.1rem', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>NEXT: {nextStage.label}</span></div>
              <div className="demo-stage-nav-icon" style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid rgba(173,198,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span></div>
            </button>
          )}
        </div>
      )}

    </div>
    </>
  )
}
