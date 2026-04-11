import type { Stage } from '@/data/demo/types'
import { ALL_MODULES } from './TopBar'

const learnStyles = `
  .learn-cards-row { flex-direction: row; }
  .learn-card-1 { width: 26%; }
  .learn-card-2 { flex: 1; }
  .learn-card-3 { width: 32%; }
  @media (max-width: 1100px) {
    .learn-outer { height: auto !important; overflow-y: visible !important; }
    .learn-cards-row { overflow: visible !important; }
  }
  @media (max-width: 768px) {
    .learn-outer { overflow-y: auto !important; }
    .learn-cards-row { flex-direction: column !important; overflow-y: auto; }
    .learn-card-1 { width: 100% !important; flex-shrink: 0; border-right: none !important; border-bottom: 1px solid rgba(0,201,138,0.12) !important; min-height: 200px; }
    .learn-card-2 { width: 100% !important; flex: 0 0 auto; border-right: none !important; border-bottom: 1px solid rgba(59,158,255,0.1) !important; min-height: 260px; }
    .learn-card-3 { width: 100% !important; flex: 0 0 auto !important; min-height: 300px; }
  }
`

const EVENTS = [
  { time: '12:04:01', text: 'Plate 7JKY442 flagged by ALPR-402' },
  { time: '12:04:09', text: 'NCIC database match confirmed' },
  { time: '12:04:18', text: 'Unit 12-Charlie assigned' },
  { time: '12:04:31', text: 'Dispatch confirmed · units en route' },
  { time: '12:08:44', text: 'Vehicle intercepted · Hwy 45 West' },
  { time: '12:12:15', text: 'Suspect secured · case closed' },
]

const CHART_DATA = [610, 580, 720, 650, 494, 540, 670, 590, 620, 494]

const STAGES_BREAKDOWN = [
  { label: 'Detection',       seconds: 47,  color: '#adc6ff', icon: 'sensors' },
  { label: 'Handling',        seconds: 24,  color: '#3B9EFF', icon: 'manage_search' },
  { label: 'Dispatch',        seconds: 26,  color: '#FFB020', icon: 'local_shipping' },
  { label: 'First Responder', seconds: 186, color: '#FF8C42', icon: 'directions_run' },
  { label: 'Event Closed',    seconds: 211, color: '#00C98A', icon: 'task_alt' },
]

const RECS = [
  {
    priority: 'HIGH',   priorityColor: '#FF4560', icon: 'videocam',
    title: 'Expand Coverage at Exit 42',
    body: 'Recurring visibility gap at peak hours. Priority ALPR expansion recommended on I-10 westbound.',
    cta: 'Deploy Coverage Upgrade',
  },
  {
    priority: 'MEDIUM', priorityColor: '#FFB020', icon: 'schedule',
    title: 'Optimize Shift Overlap — 14:00–16:00',
    body: 'Unit availability drops 31% during afternoon transition. Staggered shifts recommended.',
    cta: 'Review Shift Schedule',
  },
  {
    priority: 'LOW',    priorityColor: '#adc6ff', icon: 'psychology',
    title: 'AI Threshold Calibration',
    body: 'Raising confidence threshold from 94% to 96% projected to cut false alerts by 60%.',
    cta: 'Adjust AI Settings',
  },
]

// Shared section-header style
const sectionLabel = (color: string) => ({
  fontSize: '8px', fontWeight: 800, letterSpacing: '0.22em',
  textTransform: 'uppercase' as const,
  color,
  display: 'flex', alignItems: 'center', gap: 6,
  marginBottom: 14,
})

const dot = (color: string) => ({
  width: 6, height: 6, borderRadius: '50%', background: color, flexShrink: 0,
} as React.CSSProperties)

interface LearnLayoutProps {
  stage: Stage
  prevStage?: Stage
  onPrev?: () => void
  onRestart?: () => void
  hubPath?: string
  isLightBg?: boolean
}

export default function LearnLayout({
  stage, prevStage, onPrev, hubPath = '/demo', isLightBg = false,
}: LearnLayoutProps) {
  const maxVal = Math.max(...CHART_DATA)
  const maxS   = Math.max(...STAGES_BREAKDOWN.map(s => s.seconds))

  // ── Light-background treatment ──────────────────────────────────────────────
  if (isLightBg) {
    return (
      <>
      <style>{learnStyles}</style>
      <div className="learn-outer" style={{
        display: 'flex', flexDirection: 'column',
        height: 'calc(100vh - 120px)',
        padding: '20px 16px 14px',
        fontFamily: 'var(--font-manrope), Manrope, sans-serif',
      }}>

        {/* ── Top title row ── */}
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
            {/* Review cycle badge */}
            <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 8, padding: '7px 16px', borderRadius: 9999, background: 'rgba(0,180,120,0.08)', border: '1px solid rgba(0,180,120,0.22)' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#00C98A', display: 'inline-block' }} />
              <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#00A876' }}>
                Review Cycle: Complete
              </span>
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

        {/* ── Dark panel — three cards inside ── */}
        <div className="learn-cards-row" style={{
          flex: 1, minHeight: 0,
          background: '#0c1a2e',
          borderRadius: 12,
          border: '1px solid rgba(255,255,255,0.07)',
          boxShadow: '0 8px 40px rgba(10,20,50,0.22)',
          overflow: 'hidden',
          display: 'flex',
          gap: 0,
        }}>

          {/* ── CARD 1: Critical Events ── */}
          <div className="learn-card-1" style={{
            flexShrink: 0,
            background: 'rgba(0,201,138,0.035)',
            borderRight: '1px solid rgba(0,201,138,0.12)',
            display: 'flex', flexDirection: 'column',
            padding: '20px 20px',
            overflowY: 'auto',
          }}>
            {/* Card header bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid rgba(0,201,138,0.15)' }}>
              <div style={{ width: 3, height: 18, borderRadius: 2, background: '#00C98A', flexShrink: 0 }} />
              <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#00C98A' }}>Critical Events</span>
            </div>

            {/* Timeline */}
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              {EVENTS.map((event, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ marginTop: 2 }}>
                      <circle cx="8" cy="8" r="7" fill="rgba(0,201,138,0.15)" stroke="#00C98A" strokeWidth="1.5" />
                      <path d="M5 8l2.5 2.5L11 5" stroke="#00C98A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {i < EVENTS.length - 1 && <div style={{ width: 1, flex: 1, minHeight: 16, background: 'rgba(0,201,138,0.18)', margin: '3px 0' }} />}
                  </div>
                  <div style={{ paddingBottom: i < EVENTS.length - 1 ? 14 : 0 }}>
                    <div style={{ fontSize: '9px', fontWeight: 700, color: 'rgba(0,201,138,0.65)', fontFamily: 'var(--font-space-mono), monospace' }}>{event.time}</div>
                    <div style={{ fontSize: '11.5px', color: '#b8ceda', marginTop: 1, lineHeight: 1.4 }}>{event.text}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Incident summary card */}
            <div style={{ marginTop: 18, padding: '13px 14px', borderRadius: 8, background: 'rgba(0,201,138,0.06)', border: '1px solid rgba(0,201,138,0.2)', flexShrink: 0 }}>
              <div style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#00C98A', marginBottom: 10 }}>Incident Summary</div>
              {[
                { key: 'Case #', value: 'TX-2024-8821' },
                { key: 'Timestamp', value: stage.timestamp },
                { key: 'Resolution', value: 'Successful' },
              ].map((row) => (
                <div key={row.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <span style={{ fontSize: '10px', color: '#7fa0b8', fontWeight: 600 }}>{row.key}</span>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#c1c6d7', fontFamily: 'var(--font-space-mono), monospace' }}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── CARD 2: Performance Metrics ── */}
          <div className="learn-card-2" style={{
            flexShrink: 0,
            background: 'rgba(59,158,255,0.03)',
            borderRight: '1px solid rgba(59,158,255,0.1)',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            padding: '20px 18px',
            overflowY: 'auto',
          }}>
            {/* Card header bar */}
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18, paddingBottom: 12, borderBottom: '1px solid rgba(59,158,255,0.12)' }}>
              <div style={{ width: 3, height: 18, borderRadius: 2, background: '#3B9EFF', flexShrink: 0 }} />
              <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#3B9EFF' }}>Performance</span>
            </div>

            {/* Timer ring */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
              <svg width="120" height="120" viewBox="0 0 140 140">
                <circle cx="70" cy="70" r="60" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="9" />
                <circle cx="70" cy="70" r="60" fill="none" stroke="#00C98A" strokeWidth="9"
                  strokeDasharray={`${2 * Math.PI * 60 * 0.82} ${2 * Math.PI * 60}`}
                  strokeLinecap="round" transform="rotate(-90 70 70)"
                />
              </svg>
              <div style={{ position: 'absolute', textAlign: 'center' }}>
                <div style={{ fontSize: '26px', fontWeight: 700, color: '#E0ECF8', fontFamily: 'var(--font-space-mono), monospace', lineHeight: 1 }}>
                  {stage.dataPoints.find(d => d.key === 'TOTAL TIME')?.value ?? '8:14'}
                </div>
                <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8fa8bc', marginTop: 3 }}>Total Time</div>
              </div>
            </div>

            {/* Metric cards */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { label: 'Performance',   value: stage.dataPoints.find(d => d.key === 'PERFORMANCE')?.value ?? '+18% vs Avg', color: '#00C98A' },
                { label: 'SLA Variance',  value: '−1:46 vs 10m',    color: '#00C98A' },
                { label: 'Units Deployed',value: '2 units',          color: '#adc6ff' },
                { label: 'AI Actions',    value: '7 automated',      color: '#adc6ff' },
                { label: 'Civilian Risk', value: 'Contained',        color: '#FFB020' },
                { label: 'Case Status',   value: 'CLOSED',           color: '#00C98A' },
              ].map((m) => (
                <div key={m.label} style={{
                  padding: '9px 12px', borderRadius: 7,
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8fa8bc' }}>{m.label}</span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: m.color, fontFamily: 'var(--font-space-mono), monospace' }}>{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── CARD 3: Stage Breakdown + Trend + Recommendations ── */}
          <div className="learn-card-3" style={{
            flex: 1, minWidth: 0,
            background: 'rgba(255,176,32,0.02)',
            display: 'flex', flexDirection: 'column',
            padding: '20px 22px',
            overflowY: 'auto',
            gap: 20,
          }}>
            {/* Card header bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 12, borderBottom: '1px solid rgba(255,176,32,0.12)', flexShrink: 0 }}>
              <div style={{ width: 3, height: 18, borderRadius: 2, background: '#FFB020', flexShrink: 0 }} />
              <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#FFB020' }}>Incident Analysis</span>
            </div>

            {/* Stage breakdown */}
            <div style={{ flexShrink: 0 }}>
              <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8fa8bc', marginBottom: 12 }}>
                Stage Breakdown
              </div>
              {STAGES_BREAKDOWN.map((s) => {
                const pct  = Math.round((s.seconds / maxS) * 100)
                const mins = Math.floor(s.seconds / 60)
                const secs = s.seconds % 60
                const lbl  = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`
                return (
                  <div key={s.label} style={{ marginBottom: 9 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 12, color: s.color }}>{s.icon}</span>
                        <span style={{ fontSize: '11px', fontWeight: 600, color: '#c1c6d7' }}>{s.label}</span>
                      </div>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: s.color, fontFamily: 'var(--font-space-mono), monospace' }}>{lbl}</span>
                    </div>
                    <div style={{ height: 5, borderRadius: 3, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${pct}%`, borderRadius: 3, background: `linear-gradient(90deg, ${s.color}bb, ${s.color})`, boxShadow: `0 0 6px ${s.color}44` }} />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Trend chart */}
            <div style={{ flexShrink: 0 }}>
              <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8fa8bc', marginBottom: 10 }}>
                Trend — Last 10 Incidents
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 52 }}>
                {CHART_DATA.map((val, i) => {
                  const isCurrent = i === 9
                  const h = (val / maxVal) * 100
                  return (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, height: '100%', justifyContent: 'flex-end' }}>
                      <div style={{ width: '100%', borderRadius: '3px 3px 0 0', height: `${h}%`, background: isCurrent ? '#adc6ff' : 'rgba(255,255,255,0.07)', boxShadow: isCurrent ? '0 0 10px rgba(173,198,255,0.35)' : 'none' }} />
                      {isCurrent && <span style={{ fontSize: '7px', fontWeight: 700, color: '#adc6ff' }}>NOW</span>}
                    </div>
                  )
                })}
              </div>
              <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)', marginTop: 5 }}>Response time (seconds)</div>
            </div>

            {/* Recommendations */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 9 }}>
              <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8fa8bc' }}>
                Strategic Recommendations
              </div>
              {RECS.map((rec) => (
                <div key={rec.title} style={{
                  padding: '12px 14px', borderRadius: 9,
                  background: 'rgba(255,255,255,0.025)',
                  border: `1px solid rgba(255,255,255,0.07)`,
                  borderLeft: `3px solid ${rec.priorityColor}55`,
                  display: 'flex', flexDirection: 'column', gap: 6,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 13, color: rec.priorityColor }}>{rec.icon}</span>
                      <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#c1c6d7' }}>{rec.title}</span>
                    </div>
                    <span style={{ fontSize: '8px', fontWeight: 900, letterSpacing: '0.12em', padding: '2px 8px', borderRadius: 99, background: `${rec.priorityColor}18`, border: `1px solid ${rec.priorityColor}44`, color: rec.priorityColor }}>{rec.priority}</span>
                  </div>
                  <p style={{ fontSize: '0.72rem', lineHeight: 1.5, color: '#8fa8bc', margin: 0 }}>{rec.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Floating nav — fixed bottom-right, matches BottomNav pattern ── */}
        <div style={{
          position: 'fixed', bottom: 24, right: 28, zIndex: 9999,
          display: 'flex', alignItems: 'center', gap: 8,
          fontFamily: 'var(--font-manrope), Manrope, sans-serif',
        }}>
          {prevStage && onPrev && (
            <button
              onClick={onPrev}
              title={`Previous: ${prevStage.label}`}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 40, height: 40, borderRadius: 10,
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(8,16,26,0.72)',
                backdropFilter: 'blur(20px)',
                color: 'rgba(255,255,255,0.4)',
                cursor: 'pointer', transition: 'all 0.18s',
                fontSize: 18,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
            >
              ‹
            </button>
          )}
          <a
            href={hubPath}
            style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '10px 20px', borderRadius: 10,
              background: 'rgba(0,201,138,0.15)',
              border: '1px solid rgba(0,201,138,0.4)',
              color: '#00C98A',
              cursor: 'pointer', transition: 'all 0.18s',
              textDecoration: 'none',
              fontSize: '11px', fontWeight: 800,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              boxShadow: '0 4px 20px rgba(0,201,138,0.18)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,201,138,0.25)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 28px rgba(0,201,138,0.3)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,201,138,0.15)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,201,138,0.18)' }}
          >
            <div style={{ width: 26, height: 26, borderRadius: 6, background: 'rgba(0,201,138,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>replay</span>
            </div>
            <span>CHOOSE SCENARIO</span>
          </a>
        </div>
      </div>
      </>
    )
  }

  // ── Dark fallback ────────────────────────────────────────────────────────────
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 120px)', overflow: 'hidden', background: '#162235', fontFamily: 'var(--font-manrope), Manrope, sans-serif' }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '14px' }}>
        Dark mode fallback
      </div>
    </div>
  )
}
