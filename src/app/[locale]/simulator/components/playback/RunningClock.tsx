'use client'

import { formatTime } from '@/lib/simulator/engine'

interface RunningClockProps {
  seconds: number
  color?: string
  label?: string
}

export default function RunningClock({ seconds, color = 'var(--white)', label }: RunningClockProps) {
  return (
    <div style={{ textAlign: 'center' }}>
      {label && (
        <div style={{
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: 1,
          textTransform: 'uppercase' as const,
          color: 'var(--dim)',
          marginBottom: 4,
        }}>
          {label}
        </div>
      )}
      <div style={{
        fontFamily: "'DM Mono', 'SF Mono', monospace",
        fontSize: 32,
        fontWeight: 700,
        color,
        letterSpacing: 2,
        lineHeight: 1,
      }}>
        {formatTime(seconds)}
      </div>
    </div>
  )
}
