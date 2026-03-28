import type { Stage } from '@/data/demo/types'
import NextStagePanel from './NextStagePanel'
import ModuleTags from './ModuleTags'

const UNITS = [
  { id: '12-CHARLIE', officer: 'J. Reyes', distance: '1.2 mi', status: 'ASSIGNED', statusColor: '#3B9EFF', highlight: true },
  { id: '08-BRAVO', officer: 'M. Torres', distance: '2.8 mi', status: 'STANDBY', statusColor: '#FFB020', highlight: false },
  { id: '05-ALPHA', officer: 'K. Chen', distance: '4.1 mi', status: 'AVAILABLE', statusColor: '#00C98A', highlight: false },
  { id: '03-DELTA', officer: 'R. Silva', distance: '5.6 mi', status: 'ON SCENE', statusColor: '#48647A', highlight: false },
  { id: '11-ECHO', officer: 'P. Gomez', distance: '6.2 mi', status: 'AVAILABLE', statusColor: '#00C98A', highlight: false },
]

interface SplitLayoutProps {
  stage: Stage
  nextStage?: Stage
  onNext: () => void
}

export default function SplitLayout({ stage, nextStage, onNext }: SplitLayoutProps) {
  return (
    <div
      className="relative w-full flex"
      style={{ height: 'calc(100vh - 60px - 44px - 72px)', background: '#08101A' }}
    >
      {/* LEFT PANEL — 40% — Field Officer Mobile App */}
      <div
        className="flex flex-col items-center justify-center"
        style={{ width: '40%', background: '#08101A', borderRight: '1px solid rgba(255,255,255,0.07)', padding: '24px' }}
      >
        {/* Phone frame */}
        <div
          className="relative flex flex-col rounded-2xl overflow-hidden"
          style={{
            width: '280px',
            background: '#0D1825',
            border: '2px solid #1A3050',
            boxShadow: '0 0 40px rgba(59,158,255,0.15)',
          }}
        >
          {/* Alert header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ background: '#FF4560', color: '#fff' }}
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider">DISPATCH ALERT</span>
            </div>
            <span className="text-xs font-mono font-bold">PRIORITY 1 · CODE 3</span>
          </div>

          {/* Vehicle image placeholder */}
          <div
            className="relative flex items-center justify-center"
            style={{ height: '120px', background: '#060E18', borderBottom: '1px solid #1A3050' }}
          >
            <div
              className="absolute inset-4 rounded flex items-center justify-center"
              style={{ border: '2px solid #FF4560' }}
            >
              <span className="text-xs font-mono font-bold" style={{ color: '#FF4560' }}>
                STOLEN · 7JKY442
              </span>
            </div>
            <span className="text-xs font-mono mt-8" style={{ color: '#48647A' }}>CCTV FEED · ALPR-402</span>
          </div>

          {/* Data rows */}
          <div className="px-4 py-3 space-y-2" style={{ borderBottom: '1px solid #1A3050' }}>
            {[
              { key: 'PLATE', value: '7JKY442' },
              { key: 'VELOCITY', value: '72 MPH' },
              { key: 'THREAT LEVEL', value: 'HIGH' },
            ].map((row) => (
              <div key={row.key} className="flex justify-between">
                <span className="text-xs font-mono" style={{ color: '#48647A' }}>{row.key}</span>
                <span
                  className="text-xs font-mono font-bold"
                  style={{ color: row.key === 'THREAT LEVEL' ? '#FF4560' : '#E0ECF8' }}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          {/* Route map placeholder */}
          <div
            className="mx-4 my-3 rounded flex items-center justify-center"
            style={{ height: '80px', background: '#060E18', border: '1px solid #1A3050' }}
          >
            <span className="text-xs font-mono" style={{ color: '#48647A' }}>
              INTERCEPT ROUTE · HWY 45
            </span>
          </div>

          {/* Buttons */}
          <div className="px-4 pb-3 space-y-2">
            <button
              className="w-full rounded py-2 text-xs font-mono font-bold tracking-wider"
              style={{ background: '#3B9EFF', color: '#fff' }}
            >
              ACCEPT DISPATCH
            </button>
            <button
              className="w-full rounded py-2 text-xs font-mono font-bold tracking-wider"
              style={{ border: '1px solid #1A3050', color: '#48647A', background: 'transparent' }}
            >
              PUSH TO TALK
            </button>
          </div>

          {/* Body cam */}
          <div
            className="flex items-center justify-center gap-2 py-2"
            style={{ background: '#060E18', borderTop: '1px solid #1A3050' }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#48647A' }} />
            <span className="text-xs font-mono" style={{ color: '#48647A' }}>BODY CAM — STANDBY</span>
          </div>
        </div>

        {/* Stage label below phone */}
        <div className="mt-4 text-center">
          <div className="text-xs font-mono tracking-widest uppercase" style={{ color: '#3B9EFF' }}>
            {stage.stageLabel}
          </div>
        </div>
      </div>

      {/* RIGHT PANEL — 60% — Dispatcher Admin Console */}
      <div
        className="flex flex-col"
        style={{ width: '60%', padding: '24px', gap: '16px' }}
      >
        {/* Unit roster */}
        <div
          className="rounded-lg overflow-hidden flex-shrink-0"
          style={{ background: '#0D1825', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div
            className="px-4 py-2 flex items-center justify-between"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
          >
            <span className="text-xs font-mono font-semibold tracking-widest" style={{ color: '#48647A' }}>
              AVAILABLE UNITS · SECTOR 7
            </span>
          </div>
          {UNITS.map((unit) => (
            <div
              key={unit.id}
              className="flex items-center gap-3 px-4 py-2"
              style={{
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                borderLeft: unit.highlight ? '3px solid #3B9EFF' : '3px solid transparent',
                background: unit.highlight ? 'rgba(59,158,255,0.05)' : 'transparent',
              }}
            >
              <span className="text-xs font-mono font-semibold" style={{ color: unit.highlight ? '#E0ECF8' : '#48647A', minWidth: '100px' }}>
                UNIT {unit.id}
              </span>
              <span className="text-xs font-mono" style={{ color: '#48647A', flex: 1 }}>{unit.officer}</span>
              <span className="text-xs font-mono" style={{ color: '#48647A', minWidth: '50px' }}>{unit.distance}</span>
              <span
                className="text-xs font-mono font-bold rounded-full px-2 py-0.5"
                style={{
                  color: unit.statusColor,
                  background: `${unit.statusColor}1A`,
                  border: `1px solid ${unit.statusColor}4D`,
                }}
              >
                {unit.status}
              </span>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div
          className="flex-1 rounded-lg flex items-center justify-center relative overflow-hidden"
          style={{ background: '#060E18', border: '1px solid rgba(255,255,255,0.07)', minHeight: '120px' }}
        >
          <span className="text-xs font-mono" style={{ color: '#1A3050' }}>
            OPERATIONAL MAP · SECTOR 7
          </span>
          {/* Suspect vehicle dot */}
          <div
            className="absolute flex flex-col items-center"
            style={{ top: '40%', left: '50%', transform: 'translate(-50%,-50%)' }}
          >
            <div
              className="h-3 w-3 rounded-full animate-pulse"
              style={{ background: '#FF4560', boxShadow: '0 0 12px #FF4560' }}
            />
            <span className="text-xs font-mono mt-1" style={{ color: '#FF4560' }}>7JKY442</span>
          </div>
        </div>

        {/* Dispatch confirmation */}
        <div
          className="rounded-lg px-5 py-4 flex-shrink-0"
          style={{ background: '#0D1825', border: '1px solid rgba(0,201,138,0.25)' }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-mono font-bold" style={{ color: '#00C98A' }}>
              DISPATCH CONFIRMED ✓
            </span>
          </div>
          <div className="text-xs font-mono mb-2" style={{ color: '#7A9DB8' }}>
            UNITS 12-CHARLIE + 08-BRAVO · EN ROUTE
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono" style={{ color: '#48647A' }}>ETA TO INTERCEPT</span>
            <span className="text-sm font-mono font-bold" style={{ color: '#E0ECF8' }}>2.8 MIN</span>
          </div>
          <div className="rounded-full h-1.5" style={{ background: '#1A3050' }}>
            <div className="rounded-full h-1.5" style={{ width: '65%', background: '#00C98A' }} />
          </div>
        </div>

        {/* Module tags */}
        <div className="flex-shrink-0">
          <ModuleTags modules={stage.modules} />
        </div>
      </div>

      {/* Next stage panel */}
      {nextStage && (
        <NextStagePanel
          nextLabel={nextStage.label}
          teaser={stage.nextStageTeaser}
          onClick={onNext}
        />
      )}
    </div>
  )
}
