'use client'

import { useSimulator } from '../../SimulatorApp'
import { computeDisplayTime } from '@/lib/simulator/engine'
import { strings, t } from '@/lib/simulator/i18n'
import RunningClock from './RunningClock'
import PanelGrid from './PanelGrid'
import FailureEffect from './FailureEffect'

export default function FragmentedPanel() {
  const { state, scenario, es } = useSimulator()
  if (!scenario) return null

  const step = scenario.steps[state.playback.currentStep]
  if (!step) return null

  const displayTime = computeDisplayTime(
    scenario,
    state.playback.currentStep,
    state.playback.fragmentedElapsed,
    'fragmented',
  )

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: 16,
      position: 'relative',
      background: 'rgba(255, 82, 99, 0.02)',
      borderRight: '1px solid var(--border)',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
      }}>
        <div>
          <div style={{
            fontSize: 13,
            fontWeight: 800,
            color: '#ff5263',
            letterSpacing: 1,
            textTransform: 'uppercase' as const,
          }}>
            {t(strings.fragmented, es)}
          </div>
          <div style={{ fontSize: 10, color: 'var(--dim)', marginTop: 2 }}>
            {t(strings.fragmentedSub, es)}
          </div>
        </div>
        <RunningClock seconds={displayTime} color="#ff5263" />
      </div>

      {/* Panel grid */}
      <PanelGrid activePanel={step.fragmented.activePanel} es={es} />

      {/* Error counters */}
      <div style={{
        display: 'flex',
        gap: 16,
        marginTop: 12,
        fontSize: 11,
        color: 'var(--dim)',
      }}>
        <span>
          {t(strings.errors, es)}: <span style={{ color: '#ff5263', fontWeight: 700 }}>{state.playback.errorCount}</span>
        </span>
        <span>
          {t(strings.missed, es)}: <span style={{ color: '#f97316', fontWeight: 700 }}>{state.playback.missedCount}</span>
        </span>
      </div>

      {/* Failure overlay */}
      <FailureEffect failure={step.fragmented.failure} stepId={step.id} es={es} />
    </div>
  )
}
