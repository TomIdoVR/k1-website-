import type { DataPoint } from '@/data/demo/types'

interface StageContentProps {
  stageLabel: string
  headline: string
  description: string
  dataPoints: DataPoint[]
}

export default function StageContent({
  stageLabel,
  headline,
  description,
  dataPoints,
}: StageContentProps) {
  return (
    <div
      className="absolute bottom-0 left-0 z-10 p-8"
      style={{
        background: 'linear-gradient(to top, rgba(8,16,26,0.95) 0%, rgba(8,16,26,0.7) 60%, transparent 100%)',
        width: '55%',
        paddingBottom: '16px',
      }}
    >
      {/* Stage label */}
      <div
        className="mb-2 text-xs font-mono font-semibold tracking-widest uppercase"
        style={{ color: '#3B9EFF' }}
      >
        {stageLabel}
      </div>

      {/* Headline */}
      <h1
        className="mb-3 leading-none uppercase"
        style={{
          fontFamily: 'var(--font-barlow-condensed), Barlow Condensed, sans-serif',
          fontSize: '48px',
          fontWeight: 700,
          fontStyle: 'italic',
          color: '#E0ECF8',
        }}
      >
        {headline}
      </h1>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed" style={{ color: '#7A9DB8', maxWidth: '480px' }}>
        {description}
      </p>

      {/* Data points */}
      <div className="flex gap-6">
        {dataPoints.map((dp) => (
          <div key={dp.key}>
            <div className="text-xs font-mono tracking-widest uppercase" style={{ color: '#48647A' }}>
              {dp.key}
            </div>
            <div
              className="text-base font-mono font-semibold"
              style={{ color: '#E0ECF8', fontFamily: 'Space Mono, monospace' }}
            >
              {dp.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
