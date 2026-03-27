'use client'

import { useSimulator } from '../../SimulatorApp'
import { strings, t } from '@/lib/simulator/i18n'
import { STAGE_COLORS } from '@/lib/simulator/constants'

export default function NavigationControls() {
  const { state, dispatch, scenario, es } = useSimulator()
  if (!scenario) return null

  const { lifecycle } = state
  const currentScreen = scenario.screens[lifecycle.currentScreenIndex]
  const stageColor = currentScreen ? STAGE_COLORS[currentScreen.stage] : '#06b6d4'
  const isFirst = lifecycle.currentScreenIndex === 0
  const isLast = lifecycle.currentScreenIndex >= scenario.screens.length - 1
  const isPaused = lifecycle.status === 'paused'

  const progress = currentScreen
    ? Math.min((lifecycle.autoAdvanceTimer / (currentScreen.durationSec * 1000)) * 100, 100)
    : 0

  return (
    <div style={{
      padding: '10px 24px',
      borderTop: '1px solid #1e293b',
      background: '#06090f',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      flexShrink: 0,
    }}>
      <button
        onClick={() => dispatch({ type: 'PREV_SCREEN' })}
        disabled={isFirst}
        style={{
          padding: '7px 16px',
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 1,
          textTransform: 'uppercase' as const,
          background: 'transparent',
          color: isFirst ? '#334155' : '#bcc9cd',
          border: `1px solid ${isFirst ? '#1e293b' : '#3d494c'}`,
          cursor: isFirst ? 'not-allowed' : 'pointer',
        }}
      >
        ←
      </button>

      {/* Center controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <button
          onClick={() => dispatch({ type: isPaused ? 'RESUME' : 'PAUSE' })}
          style={{
            width: 30, height: 30,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: `${stageColor}12`,
            border: `1px solid ${stageColor}25`,
            color: stageColor,
            cursor: 'pointer',
            fontSize: 13,
          }}
        >
          {isPaused ? '▶' : '⏸'}
        </button>

        {/* Progress bar */}
        <div style={{ width: 100, height: 2, background: '#1e293b' }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: stageColor,
            transition: 'width 0.1s linear',
          }} />
        </div>

        <span style={{ fontSize: 10, color: '#475569', fontWeight: 600 }}>
          {lifecycle.currentScreenIndex + 1}/{scenario.screens.length}
        </span>
      </div>

      <button
        onClick={() => {
          if (isLast) dispatch({ type: 'GO_TO_SUMMARY' })
          else dispatch({ type: 'NEXT_SCREEN', scenario })
        }}
        style={{
          padding: '7px 16px',
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 1,
          textTransform: 'uppercase' as const,
          background: stageColor,
          color: '#003640',
          border: 'none',
          cursor: 'pointer',
          boxShadow: `0 0 10px ${stageColor}30`,
        }}
      >
        →
      </button>
    </div>
  )
}
