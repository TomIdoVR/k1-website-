'use client'

import { useSimulator } from '../../SimulatorApp'
import { strings, t } from '@/lib/simulator/i18n'

export default function PlaybackControls() {
  const { state, dispatch, es } = useSimulator()
  const { status, speed } = state.playback

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      padding: '12px 0',
    }}>
      {/* Rewind */}
      <button
        onClick={() => dispatch({ type: 'REWIND' })}
        title={t(strings.rewind, es)}
        style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid var(--border)',
          borderRadius: 8,
          padding: '8px 14px',
          color: 'var(--muted)',
          cursor: 'pointer',
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        ⏪ {t(strings.rewind, es)}
      </button>

      {/* Play / Pause */}
      <button
        onClick={() => {
          if (status === 'playing') dispatch({ type: 'PAUSE' })
          else if (status === 'paused') dispatch({ type: 'RESUME' })
        }}
        disabled={status === 'completed' || status === 'idle'}
        style={{
          background: 'var(--blue)',
          border: 'none',
          borderRadius: 8,
          padding: '10px 28px',
          color: '#fff',
          cursor: status === 'completed' ? 'not-allowed' : 'pointer',
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: 1,
        }}
      >
        {status === 'playing' ? `⏸ ${t(strings.pause, es)}` : `▶ ${t(strings.play, es)}`}
      </button>

      {/* Speed */}
      <button
        onClick={() => dispatch({ type: 'SET_SPEED', speed: speed === 1 ? 2 : 1 })}
        style={{
          background: speed === 2 ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255,255,255,0.06)',
          border: speed === 2 ? '1px solid var(--cyan)' : '1px solid var(--border)',
          borderRadius: 8,
          padding: '8px 14px',
          color: speed === 2 ? 'var(--cyan)' : 'var(--muted)',
          cursor: 'pointer',
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        {speed}x {t(strings.speed, es)}
      </button>
    </div>
  )
}
