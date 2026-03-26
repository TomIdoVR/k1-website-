'use client'

import { useReducer, useMemo, createContext, useContext, Component, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { simulatorReducer, initialState, usePlaybackTick } from '@/lib/simulator/engine'
import { getScenario } from '@/lib/simulator/scenarios'
import type { SimulatorState, SimulatorAction, Scenario } from '@/lib/simulator/types'
import EntryScreen from './components/EntryScreen'
import PlaybackScreen from './components/PlaybackScreen'
import ScorecardScreen from './components/ScorecardScreen'
import ModuleDeepDive from './components/ModuleDeepDive'

/* ── Error Boundary ── */

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null }
  static getDerivedStateFromError(error: Error) { return { error } }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 40, color: '#ff5263', fontFamily: 'monospace' }}>
          <h2>Simulator Error</h2>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{this.state.error.message}</pre>
          <pre style={{ whiteSpace: 'pre-wrap', fontSize: 11, opacity: 0.7 }}>{this.state.error.stack}</pre>
        </div>
      )
    }
    return this.props.children
  }
}

/* ── Context ── */

interface SimulatorContextValue {
  state: SimulatorState
  dispatch: React.Dispatch<SimulatorAction>
  scenario: Scenario | undefined
  es: boolean
}

const SimulatorContext = createContext<SimulatorContextValue | null>(null)

export function useSimulator() {
  const ctx = useContext(SimulatorContext)
  if (!ctx) throw new Error('useSimulator must be used within SimulatorApp')
  return ctx
}

/* ── App ── */

export default function SimulatorApp({ es }: { es: boolean }) {
  const [state, dispatch] = useReducer(simulatorReducer, initialState)

  const scenario = useMemo(
    () => (state.selectedScenario ? getScenario(state.selectedScenario) : undefined),
    [state.selectedScenario],
  )

  // Drive the playback tick loop
  usePlaybackTick(
    state.playback.status,
    state.playback.stepPhase,
    state.playback.speed,
    scenario,
    dispatch,
  )

  const contextValue = useMemo(
    () => ({ state, dispatch, scenario, es }),
    [state, dispatch, scenario, es],
  )

  return (
    <SimulatorContext.Provider value={contextValue}>
      <div style={{
        minHeight: 'calc(100vh - 70px)',
        paddingTop: 70,
        background: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <ErrorBoundary>
          <AnimatePresence mode="wait">
            {state.screen === 'entry' && (
              <motion.div
                key="entry"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
              >
                <EntryScreen />
              </motion.div>
            )}
            {state.screen === 'playback' && (
              <motion.div
                key="playback"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
              >
                <PlaybackScreen />
              </motion.div>
            )}
            {state.screen === 'scorecard' && (
              <motion.div
                key="scorecard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
              >
                <ScorecardScreen />
              </motion.div>
            )}
            {state.screen === 'deep-dive' && (
              <motion.div
                key="deep-dive"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
              >
                <ModuleDeepDive />
              </motion.div>
            )}
          </AnimatePresence>
        </ErrorBoundary>
      </div>
    </SimulatorContext.Provider>
  )
}
