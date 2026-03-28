import type { Stage } from '@/data/demo/types'
import ModuleTags from './ModuleTags'

const EVENTS = [
  { time: '12:04:01', text: 'Plate 7JKY442 flagged by ALPR-402', color: '#00C98A' },
  { time: '12:04:09', text: 'NCIC database match confirmed', color: '#00C98A' },
  { time: '12:04:18', text: 'Unit 12-Charlie assigned', color: '#00C98A' },
  { time: '12:04:31', text: 'Dispatch confirmed · units en route', color: '#00C98A' },
  { time: '12:08:44', text: 'Vehicle intercepted · Hwy 45 West', color: '#00C98A' },
  { time: '12:12:15', text: 'Suspect secured · case closed', color: '#3B9EFF' },
]

// Mock bar chart data for last 10 incidents (in seconds, current = shortest)
const CHART_DATA = [610, 580, 720, 650, 494, 540, 670, 590, 620, 494]

interface LearnLayoutProps {
  stage: Stage
}

export default function LearnLayout({ stage }: LearnLayoutProps) {
  const maxVal = Math.max(...CHART_DATA)

  return (
    <div
      className="relative w-full flex flex-col overflow-auto"
      style={{ height: 'calc(100vh - 60px - 44px - 72px)', background: '#08101A' }}
    >
      {/* Page header */}
      <div
        className="flex items-center justify-between px-8 py-4 flex-shrink-0"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        <div>
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-mono tracking-widest uppercase rounded px-2 py-0.5"
              style={{ background: 'rgba(59,158,255,0.12)', border: '1px solid rgba(59,158,255,0.25)', color: '#3B9EFF' }}
            >
              STAGE 05
            </span>
            <h2
              className="uppercase"
              style={{
                fontFamily: 'var(--font-barlow-condensed), Barlow Condensed, sans-serif',
                fontSize: '28px',
                fontWeight: 700,
                fontStyle: 'italic',
                color: '#E0ECF8',
              }}
            >
              POST-INCIDENT ANALYSIS
            </h2>
          </div>
          <div className="text-xs font-mono mt-1" style={{ color: '#48647A' }}>
            CASE TX-2024-8821 // RESOLUTION REVIEW
          </div>
        </div>
        <div
          className="rounded px-3 py-1.5 text-xs font-mono font-semibold tracking-wider"
          style={{
            background: 'rgba(0,201,138,0.1)',
            border: '1px solid rgba(0,201,138,0.3)',
            color: '#00C98A',
          }}
        >
          REVIEW CYCLE: COMPLETE
        </div>
      </div>

      {/* Three-column body */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT COLUMN — Critical Events Timeline */}
        <div
          className="flex flex-col overflow-auto"
          style={{ width: '30%', padding: '24px', borderRight: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: '#48647A' }}>
            CRITICAL EVENTS
          </div>
          <div className="space-y-3">
            {EVENTS.map((event, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" fill={`${event.color}22`} stroke={event.color} strokeWidth="1.5" />
                    <path d="M5 8l2.5 2.5L11 5" stroke={event.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-mono font-semibold" style={{ color: '#48647A' }}>
                    {event.time}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: '#7A9DB8' }}>
                    {event.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CENTER COLUMN — Resolution Metrics */}
        <div
          className="flex flex-col items-center justify-center gap-6"
          style={{ width: '25%', padding: '24px', borderRight: '1px solid rgba(255,255,255,0.07)' }}
        >
          {/* RESOLVED badge */}
          <div
            className="flex items-center gap-2 rounded-full px-4 py-2"
            style={{
              background: 'rgba(0,201,138,0.1)',
              border: '1px solid rgba(0,201,138,0.3)',
            }}
          >
            <span className="h-2 w-2 rounded-full" style={{ background: '#00C98A' }} />
            <span className="text-sm font-mono font-bold tracking-wider" style={{ color: '#00C98A' }}>
              RESOLVED
            </span>
          </div>

          {/* Timer circle */}
          <div className="relative flex items-center justify-center">
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" fill="none" stroke="#0D1825" strokeWidth="8" />
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="#00C98A"
                strokeWidth="8"
                strokeDasharray={`${2 * Math.PI * 52 * 0.82} ${2 * Math.PI * 52}`}
                strokeLinecap="round"
                transform="rotate(-90 60 60)"
              />
            </svg>
            <div className="absolute text-center">
              <div
                className="font-mono font-bold"
                style={{ fontSize: '28px', color: '#E0ECF8', fontFamily: 'Space Mono, monospace' }}
              >
                8:14
              </div>
              <div className="text-xs font-mono" style={{ color: '#48647A' }}>
                TOTAL TIME
              </div>
            </div>
          </div>

          {/* Metric cards */}
          <div className="w-full space-y-3">
            {[
              { label: 'PERFORMANCE', value: '+18% vs Avg Incident', positive: true },
              { label: 'SLA VARIANCE', value: '-1:46 vs 10m Target', positive: true },
            ].map((metric) => (
              <div
                key={metric.label}
                className="rounded p-3"
                style={{ background: '#0D1825', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="text-xs font-mono tracking-wider" style={{ color: '#48647A' }}>
                  {metric.label}
                </div>
                <div className="text-sm font-mono font-semibold mt-1" style={{ color: '#00C98A' }}>
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN — Trend Analysis + Recommendation */}
        <div
          className="flex flex-col"
          style={{ width: '45%', padding: '24px' }}
        >
          <div className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: '#48647A' }}>
            TREND ANALYSIS (LAST 10)
          </div>

          {/* Bar chart */}
          <div className="mb-6">
            <div className="flex items-end gap-2 h-28">
              {CHART_DATA.map((val, i) => {
                const isCurrent = i === 9
                const height = (val / maxVal) * 100
                return (
                  <div key={i} className="flex flex-col items-center gap-1 flex-1">
                    <div
                      className="w-full rounded-t transition-all"
                      style={{
                        height: `${height}%`,
                        background: isCurrent ? '#3B9EFF' : '#1A3050',
                        boxShadow: isCurrent ? '0 0 8px rgba(59,158,255,0.4)' : 'none',
                      }}
                    />
                    {isCurrent && (
                      <span className="text-xs font-mono" style={{ color: '#3B9EFF', fontSize: '9px' }}>
                        NOW
                      </span>
                    )}
                  </div>
                )
              })}
            </div>
            <div className="text-xs font-mono mt-2" style={{ color: '#1A3050' }}>
              Response time (seconds) — last 10 incidents
            </div>
          </div>

          {/* Recommendation card */}
          <div
            className="rounded-lg p-5 flex-1"
            style={{ background: 'rgba(59,158,255,0.06)', border: '1px solid rgba(59,158,255,0.2)' }}
          >
            <div className="text-xs font-mono font-semibold tracking-widest uppercase mb-3" style={{ color: '#3B9EFF' }}>
              STRATEGIC RECOMMENDATION
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#7A9DB8' }}>
              Data confirms a recurring visibility gap at Exit 42 during peak evening hours. System
              recommends a priority expansion of ALPR coverage on the I-10 westbound corridor.
            </p>
            <button
              className="rounded px-4 py-2 text-xs font-mono font-bold tracking-wider transition-colors hover:bg-white/10"
              style={{
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#E0ECF8',
              }}
            >
              DEPLOY COVERAGE UPGRADE →
            </button>
          </div>

          {/* Module tags */}
          <div className="mt-4 flex-shrink-0">
            <ModuleTags modules={stage.modules} />
          </div>
        </div>
      </div>
    </div>
  )
}
