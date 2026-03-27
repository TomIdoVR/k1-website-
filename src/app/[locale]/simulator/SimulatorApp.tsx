'use client'

import { useReducer, useMemo, createContext, useContext, Component, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { simulatorReducer, initialState, useAutoAdvance } from '@/lib/simulator/engine'
import { getScenario } from '@/lib/simulator/scenarios'
import type { SimulatorState, SimulatorAction, Scenario } from '@/lib/simulator/types'
import EntryScreen from './components/EntryScreen'
import LifecycleScreen from './components/LifecycleScreen'
import SummaryScreen from './components/SummaryScreen'

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

  // Drive auto-advance when playing
  useAutoAdvance(
    state.lifecycle.status,
    state.lifecycle.autoAdvance,
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
        minHeight: '100vh',
        background: '#050a14',
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
            {state.screen === 'lifecycle' && (
              <motion.div
                key="lifecycle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ position: 'fixed', inset: 0, zIndex: 200 }}
              >
                <LifecycleScreen />
              </motion.div>
            )}
            {state.screen === 'summary' && (
              <motion.div
                key="summary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{ position: 'fixed', inset: 0, zIndex: 200 }}
              >
                <SummaryScreen />
              </motion.div>
            )}
          </AnimatePresence>
        </ErrorBoundary>
      </div>
    </SimulatorContext.Provider>
  )
}
