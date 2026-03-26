'use client'

import { useSimulator } from '../SimulatorApp'
import { strings, t } from '@/lib/simulator/i18n'
import FragmentedPanel from './playback/FragmentedPanel'
import UnifiedPanel from './playback/UnifiedPanel'
import StepNarrator from './playback/StepNarrator'
import PlaybackControls from './playback/PlaybackControls'

export default function PlaybackScreen() {
  const { state, dispatch, es } = useSimulator()
  const isCompleted = state.playback.status === 'completed'

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* VS divider label */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px 0',
        background: 'var(--bg-2)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          width: '100%',
          maxWidth: 1400,
          padding: '0 24px',
        }}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <span style={{
              fontSize: 11,
              fontWeight: 700,
              color: '#ff5263',
              letterSpacing: 2,
              textTransform: 'uppercase' as const,
            }}>
              {t(strings.fragmented, es)}
            </span>
          </div>
          <div style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: '4px 12px',
            fontSize: 12,
            fontWeight: 800,
            color: 'var(--white)',
            letterSpacing: 1,
          }}>
            VS
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <span style={{
              fontSize: 11,
              fontWeight: 700,
              color: 'var(--cyan)',
              letterSpacing: 2,
              textTransform: 'uppercase' as const,
            }}>
              {t(strings.unified, es)}
            </span>
          </div>
        </div>
      </div>

      {/* Split view */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        maxWidth: 1400,
        margin: '0 auto',
        width: '100%',
      }}>
        <FragmentedPanel />
        <UnifiedPanel />
      </div>

      {/* Narrator */}
      <StepNarrator />

      {/* Controls */}
      <div style={{
        background: 'var(--bg-2)',
        borderTop: '1px solid var(--border)',
        padding: '8px 24px',
      }}>
        {isCompleted ? (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            padding: '12px 0',
          }}>
            <div style={{
              fontSize: 14,
              fontWeight: 600,
              color: 'var(--cyan)',
            }}>
              ✓ {t({ en: 'Scenario Complete', es: 'Escenario Completo' }, es)}
            </div>
            <button
              onClick={() => dispatch({ type: 'GO_TO_SCORECARD' })}
              style={{
                padding: '10px 32px',
                background: 'var(--blue)',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 700,
                cursor: 'pointer',
                letterSpacing: 1,
              }}
            >
              {t({ en: 'See Results →', es: 'Ver Resultados →' }, es)}
            </button>
          </div>
        ) : (
          <PlaybackControls />
        )}
      </div>
    </div>
  )
}
