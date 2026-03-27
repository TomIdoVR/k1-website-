'use client'

import { useSimulator } from '../../SimulatorApp'
import { STAGE_COLORS, MODULE_COLORS } from '@/lib/simulator/constants'

export default function SideNav() {
  const { state, dispatch, scenario } = useSimulator()
  if (!scenario) return null

  const currentScreen = scenario.screens[state.lifecycle.currentScreenIndex]
  if (!currentScreen) return null

  const stageColor = STAGE_COLORS[currentScreen.stage]

  return (
    <div style={{
      position: 'fixed',
      left: 0,
      top: 64,
      width: 56,
      height: 'calc(100vh - 64px)',
      background: '#080e18',
      borderRight: '1px solid #1e293b',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 40,
      paddingTop: 12,
      gap: 4,
    }}>
      {/* Screen dots — one per screen */}
      {scenario.screens.map((screen, i) => {
        const isActive = i === state.lifecycle.currentScreenIndex
        const isPast = i < state.lifecycle.currentScreenIndex
        const dotColor = STAGE_COLORS[screen.stage]

        return (
          <button
            key={screen.id}
            onClick={() => dispatch({ type: 'GO_TO_SCREEN', index: i })}
            title={screen.title.en}
            style={{
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: isActive ? `${dotColor}18` : 'transparent',
              border: isActive ? `2px solid ${dotColor}` : '1px solid transparent',
              cursor: 'pointer',
              transition: 'all 0.2s',
              position: 'relative',
            }}
          >
            <div style={{
              width: isActive ? 10 : 7,
              height: isActive ? 10 : 7,
              borderRadius: 9999,
              background: isActive ? dotColor : isPast ? dotColor : '#334155',
              boxShadow: isActive ? `0 0 8px ${dotColor}60` : 'none',
              opacity: isPast ? 0.5 : 1,
              transition: 'all 0.2s',
            }} />
          </button>
        )
      })}

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Active module dots */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        paddingBottom: 16,
      }}>
        {currentScreen.modules.map((mod) => (
          <div
            key={mod}
            title={mod}
            style={{
              width: 8,
              height: 8,
              borderRadius: 9999,
              background: MODULE_COLORS[mod],
              boxShadow: `0 0 6px ${MODULE_COLORS[mod]}60`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
