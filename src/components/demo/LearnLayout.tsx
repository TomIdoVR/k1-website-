import type { Stage } from '@/data/demo/types'

const EVENTS = [
  { time: '12:04:01', text: 'Plate 7JKY442 flagged by ALPR-402' },
  { time: '12:04:09', text: 'NCIC database match confirmed' },
  { time: '12:04:18', text: 'Unit 12-Charlie assigned' },
  { time: '12:04:31', text: 'Dispatch confirmed · units en route' },
  { time: '12:08:44', text: 'Vehicle intercepted · Hwy 45 West' },
  { time: '12:12:15', text: 'Suspect secured · case closed' },
]

const CHART_DATA = [610, 580, 720, 650, 494, 540, 670, 590, 620, 494]

interface LearnLayoutProps {
  stage: Stage
  prevStage?: Stage
  onPrev?: () => void
  onRestart?: () => void
}

export default function LearnLayout({ stage, prevStage, onPrev, onRestart }: LearnLayoutProps) {
  const maxVal = Math.max(...CHART_DATA)

  return (
    <div
      className="demo-learn-root"
      style={{
        height: 'calc(58vh + 110px)',
        background: '#162235',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'var(--font-manrope), Manrope, sans-serif',
        overflow: 'hidden',
        marginBottom: 40,
      }}
    >
      {/* ── Stage header — same as other stages ── */}
      <div
        className="demo-learn-header"
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
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)', marginTop: 6, fontWeight: 500 }}>
            Case TX-2024-8821 · Resolution Review
          </p>
        </div>

        {/* Resolved badge */}
        <div className="demo-learn-resolved-badge" style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '8px 18px', borderRadius: 9999,
          background: 'rgba(0,201,138,0.1)', border: '1px solid rgba(0,201,138,0.3)',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00C98A', display: 'inline-block' }} />
          <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#00C98A' }}>
            Review Cycle: Complete
          </span>
        </div>
      </div>

      {/* ── Three-column body ── */}
      <div className="demo-learn-body" style={{ flex: 1, minHeight: 0, display: 'flex', overflow: 'hidden' }}>

        {/* LEFT — Timeline */}
        <div className="demo-learn-left" style={{ width: '28%', padding: '20px 24px', borderRight: '1px solid rgba(255,255,255,0.06)', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8fa8bc', marginBottom: 16 }}>
            Critical Events
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, flex: 1 }}>
            {EVENTS.map((event, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, paddingBottom: 0 }}>
                {/* Dot + connector */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                    <circle cx="8" cy="8" r="7" fill="rgba(0,201,138,0.12)" stroke="#00C98A" strokeWidth="1.5" />
                    <path d="M5 8l2.5 2.5L11 5" stroke="#00C98A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {i < EVENTS.length - 1 && (
                    <div style={{ width: 1, flex: 1, minHeight: 20, background: 'rgba(0,201,138,0.15)', margin: '3px 0' }} />
                  )}
                </div>
                <div style={{ paddingBottom: i < EVENTS.length - 1 ? 16 : 0 }}>
                  <div style={{ fontSize: '9px', fontWeight: 700, color: '#8fa8bc', fontFamily: 'var(--font-space-mono), monospace' }}>{event.time}</div>
                  <div style={{ fontSize: '12px', color: '#b8ceda', marginTop: 2, lineHeight: 1.4 }}>{event.text}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary box */}
          <div style={{ marginTop: 20, padding: '14px 16px', borderRadius: 10, background: 'rgba(0,201,138,0.05)', border: '1px solid rgba(0,201,138,0.18)', flexShrink: 0 }}>
            <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#00C98A', marginBottom: 10 }}>Incident Summary</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { key: 'Case #', value: stage.description.includes('auto-generated') ? 'TX-2024-9147' : 'TX-2024-8821' },
                { key: 'Timestamp', value: stage.timestamp },
                { key: 'Resolution', value: 'Successful' },
              ].map((row) => (
                <div key={row.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '10px', color: '#8fa8bc', fontWeight: 600 }}>{row.key}</span>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#c1c6d7', fontFamily: 'var(--font-space-mono), monospace' }}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CENTER — Metrics */}
        <div className="demo-learn-center" style={{ width: '24%', padding: '20px 24px', borderRight: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, overflowY: 'auto' }}>
          {/* Timer ring */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="140" height="140" viewBox="0 0 140 140">
              <circle cx="70" cy="70" r="60" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="9" />
              <circle cx="70" cy="70" r="60" fill="none" stroke="#00C98A" strokeWidth="9"
                strokeDasharray={`${2 * Math.PI * 60 * 0.82} ${2 * Math.PI * 60}`}
                strokeLinecap="round" transform="rotate(-90 70 70)"
              />
            </svg>
            <div style={{ position: 'absolute', textAlign: 'center' }}>
              <div style={{ fontSize: '30px', fontWeight: 700, color: '#E0ECF8', fontFamily: 'var(--font-space-mono), monospace', lineHeight: 1 }}>{stage.dataPoints.find(d => d.key === 'TOTAL TIME')?.value ?? '8:14'}</div>
              <div style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8fa8bc', marginTop: 4 }}>Total Time</div>
            </div>
          </div>

          {/* Metric cards */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { label: 'Performance', value: stage.dataPoints.find(d => d.key === 'PERFORMANCE')?.value ?? '+18% vs Avg', color: '#00C98A' },
              { label: 'SLA Variance', value: '−1:46 vs 10m Target', color: '#00C98A' },
              { label: 'Units Deployed', value: '2 units', color: '#adc6ff' },
              { label: 'AI Actions', value: '7 automated', color: '#adc6ff' },
              { label: 'Civilian Risk', value: 'Contained', color: '#FFB020' },
              { label: 'Case Status', value: 'CLOSED', color: '#00C98A' },
            ].map((m) => (
              <div key={m.label} style={{ padding: '10px 14px', borderRadius: 8, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8fa8bc' }}>{m.label}</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: m.color, marginTop: 4, fontFamily: 'var(--font-space-mono), monospace' }}>{m.value}</div>
              </div>
            ))}
          </div>

          {/* Module tags */}
          <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
            {stage.modules.map((m) => (
              <div key={m} style={{
                fontSize: '8px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '3px 10px', borderRadius: 4,
                background: 'rgba(173,198,255,0.08)', border: '1px solid rgba(173,198,255,0.18)', color: '#adc6ff',
              }}>{m}</div>
            ))}
          </div>
        </div>

        {/* RIGHT — Stage breakdown + trend + recommendation */}
        <div className="demo-learn-right" style={{ flex: 1, padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 14, overflowY: 'auto' }}>

          {/* Stage time breakdown — horizontal bars */}
          <div style={{ flexShrink: 0 }}>
            <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8fa8bc', marginBottom: 12 }}>
              Incident Stage Breakdown
            </div>
            {[
              { label: 'Detection',        seconds: 47,  color: '#adc6ff', icon: 'sensors' },
              { label: 'Handling',         seconds: 24,  color: '#3B9EFF', icon: 'manage_search' },
              { label: 'Dispatch',         seconds: 26,  color: '#FFB020', icon: 'local_shipping' },
              { label: 'First Responder',  seconds: 186, color: '#FF8C42', icon: 'directions_run' },
              { label: 'Event Closed',     seconds: 211, color: '#00C98A', icon: 'task_alt' },
            ].map((s) => {
              const maxS = 211
              const pct = Math.round((s.seconds / maxS) * 100)
              const mins = Math.floor(s.seconds / 60)
              const secs = s.seconds % 60
              const label = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`
              return (
                <div key={s.label} style={{ marginBottom: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 13, color: s.color }}>{s.icon}</span>
                      <span style={{ fontSize: '11px', fontWeight: 600, color: '#c1c6d7' }}>{s.label}</span>
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: s.color, fontFamily: 'var(--font-space-mono), monospace' }}>{label}</span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%', width: `${pct}%`, borderRadius: 3,
                      background: `linear-gradient(90deg, ${s.color}cc, ${s.color})`,
                      boxShadow: `0 0 8px ${s.color}55`,
                    }} />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Trend chart — compact */}
          <div style={{ flexShrink: 0 }}>
            <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8fa8bc', marginBottom: 10 }}>
              Trend — Last 10 Incidents
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 60 }}>
              {CHART_DATA.map((val, i) => {
                const isCurrent = i === 9
                const h = (val / maxVal) * 100
                return (
                  <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, height: '100%', justifyContent: 'flex-end' }}>
                    <div style={{
                      width: '100%', borderRadius: '3px 3px 0 0', height: `${h}%`,
                      background: isCurrent ? '#adc6ff' : 'rgba(255,255,255,0.07)',
                      boxShadow: isCurrent ? '0 0 10px rgba(173,198,255,0.35)' : 'none',
                    }} />
                    {isCurrent && <span style={{ fontSize: '7px', fontWeight: 700, color: '#adc6ff' }}>NOW</span>}
                  </div>
                )
              })}
            </div>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.12)', marginTop: 4 }}>Response time (seconds)</div>
          </div>

          {/* Recommendations */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8fa8bc' }}>
              Strategic Recommendations
            </div>
            {[
              {
                priority: 'HIGH',
                priorityColor: '#FF4560',
                icon: 'videocam',
                title: 'Expand Coverage at Exit 42',
                body: 'Recurring visibility gap detected during peak evening hours. Priority ALPR expansion recommended on the I-10 westbound corridor.',
                cta: 'Deploy Coverage Upgrade',
              },
              {
                priority: 'MEDIUM',
                priorityColor: '#FFB020',
                icon: 'schedule',
                title: 'Optimize Shift Overlap — 14:00–16:00',
                body: 'Unit availability drops 31% during afternoon shift transition. Recommend staggered shift schedule to maintain minimum 4 active units.',
                cta: 'Review Shift Schedule',
              },
              {
                priority: 'LOW',
                priorityColor: '#adc6ff',
                icon: 'psychology',
                title: 'AI Threshold Calibration',
                body: 'Confidence threshold of 94% generated 2 false positives in last 30 incidents. Raising to 96% projected to reduce false alerts by 60%.',
                cta: 'Adjust AI Settings',
              },
            ].map((rec) => (
              <div
                key={rec.title}
                style={{
                  padding: '14px 18px', borderRadius: 10,
                  background: 'rgba(255,255,255,0.02)',
                  border: `1px solid rgba(255,255,255,0.07)`,
                  display: 'flex', flexDirection: 'column', gap: 8,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 14, color: rec.priorityColor }}>{rec.icon}</span>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#c1c6d7' }}>{rec.title}</span>
                  </div>
                  <span style={{
                    fontSize: '8px', fontWeight: 900, letterSpacing: '0.15em',
                    padding: '2px 8px', borderRadius: 99,
                    background: `${rec.priorityColor}18`,
                    border: `1px solid ${rec.priorityColor}44`,
                    color: rec.priorityColor,
                  }}>{rec.priority}</span>
                </div>
                <p style={{ fontSize: '0.75rem', lineHeight: 1.55, color: '#b8ceda', margin: 0 }}>{rec.body}</p>
                <button style={{
                  alignSelf: 'flex-start', padding: '5px 14px', borderRadius: 6,
                  border: '1px solid rgba(255,255,255,0.14)', background: 'transparent',
                  color: '#c1c6d7', fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em',
                  textTransform: 'uppercase', cursor: 'pointer',
                  fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                }}>
                  {rec.cta} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom nav — PREV + RESTART ── */}
      <div
        className="demo-learn-footer"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
          padding: '14px 0',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          flexShrink: 0,
          fontFamily: 'var(--font-manrope), Manrope, sans-serif',
        }}
      >
        {prevStage && onPrev && (
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

        <a
          href="/demo"
          style={{
            display: 'flex', alignItems: 'center', gap: 14,
            padding: '10px 28px', borderRadius: 12,
            background: 'rgba(0,201,138,0.08)', border: '1px solid rgba(0,201,138,0.25)',
            color: '#00C98A', cursor: 'pointer', transition: 'all 0.25s',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,201,138,0.15)' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,201,138,0.08)' }}
        >
          <div style={{ textAlign: 'left' }}>
            <span style={{ display: 'block', fontSize: '8px', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.65, marginBottom: 2 }}>Learning cycle complete</span>
            <span style={{ fontSize: '1rem', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>Choose Another Scenario →</span>
          </div>
          <div style={{ width: 28, height: 28, borderRadius: 8, border: '1px solid rgba(0,201,138,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 15 }}>grid_view</span>
          </div>
        </a>
      </div>
    </div>
  )
}
