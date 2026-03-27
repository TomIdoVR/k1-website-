/* ── Lifecycle Engine — Reducer + Auto-Advance Hook (v2) ── */

import { useEffect, useRef } from 'react'
import type { SimulatorState, SimulatorAction, Scenario, PlaybackStatus } from './types'

/* ── Initial State ── */

export const initialState: SimulatorState = {
  screen: 'entry',
  selectedScenario: null,
  lifecycle: {
    status: 'idle',
    currentScreenIndex: 0,
    autoAdvance: true,
    autoAdvanceTimer: 0,
  },
}

/* ── Reducer ── */

export function simulatorReducer(state: SimulatorState, action: SimulatorAction): SimulatorState {
  switch (action.type) {
    case 'SELECT_SCENARIO':
      return { ...state, selectedScenario: action.scenarioId }

    case 'START_LIFECYCLE':
      return {
        ...state,
        screen: 'lifecycle',
        lifecycle: {
          status: 'playing',
          currentScreenIndex: 0,
          autoAdvance: true,
          autoAdvanceTimer: 0,
        },
      }

    case 'NEXT_SCREEN': {
      const { scenario } = action
      const nextIndex = state.lifecycle.currentScreenIndex + 1
      if (nextIndex >= scenario.screens.length) {
        return {
          ...state,
          screen: 'summary',
          lifecycle: { ...state.lifecycle, status: 'completed', autoAdvanceTimer: 0 },
        }
      }
      return {
        ...state,
        lifecycle: {
          ...state.lifecycle,
          currentScreenIndex: nextIndex,
          autoAdvanceTimer: 0,
        },
      }
    }

    case 'PREV_SCREEN': {
      const prevIndex = Math.max(0, state.lifecycle.currentScreenIndex - 1)
      return {
        ...state,
        lifecycle: {
          ...state.lifecycle,
          currentScreenIndex: prevIndex,
          autoAdvanceTimer: 0,
        },
      }
    }

    case 'GO_TO_SCREEN':
      return {
        ...state,
        lifecycle: {
          ...state.lifecycle,
          currentScreenIndex: action.index,
          autoAdvanceTimer: 0,
        },
      }

    case 'TOGGLE_AUTO_ADVANCE':
      return {
        ...state,
        lifecycle: {
          ...state.lifecycle,
          autoAdvance: !state.lifecycle.autoAdvance,
          autoAdvanceTimer: 0,
        },
      }

    case 'PAUSE':
      return {
        ...state,
        lifecycle: { ...state.lifecycle, status: 'paused' },
      }

    case 'RESUME':
      return {
        ...state,
        lifecycle: { ...state.lifecycle, status: 'playing', autoAdvanceTimer: 0 },
      }

    case 'AUTO_ADVANCE_TICK': {
      const { lifecycle } = state
      if (lifecycle.status !== 'playing' || !lifecycle.autoAdvance) return state

      const { scenario } = action
      const currentScreen = scenario.screens[lifecycle.currentScreenIndex]
      if (!currentScreen) return state

      const newTimer = lifecycle.autoAdvanceTimer + action.deltaMs
      const durationMs = currentScreen.durationSec * 1000

      if (newTimer >= durationMs) {
        // Time to advance
        const nextIndex = lifecycle.currentScreenIndex + 1
        if (nextIndex >= scenario.screens.length) {
          return {
            ...state,
            screen: 'summary',
            lifecycle: { ...lifecycle, status: 'completed', autoAdvanceTimer: 0 },
          }
        }
        return {
          ...state,
          lifecycle: {
            ...lifecycle,
            currentScreenIndex: nextIndex,
            autoAdvanceTimer: 0,
          },
        }
      }

      return {
        ...state,
        lifecycle: { ...lifecycle, autoAdvanceTimer: newTimer },
      }
    }

    case 'GO_TO_SUMMARY':
      return {
        ...state,
        screen: 'summary',
        lifecycle: { ...state.lifecycle, status: 'completed' },
      }

    case 'GO_TO_ENTRY':
      return { ...initialState }

    default:
      return state
  }
}

/* ── Auto-Advance Hook (RAF-based) ── */

export function useAutoAdvance(
  status: PlaybackStatus,
  autoAdvance: boolean,
  scenario: Scenario | undefined,
  dispatch: React.Dispatch<SimulatorAction>,
) {
  const rafRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)

  useEffect(() => {
    if (status !== 'playing' || !autoAdvance || !scenario) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      return
    }

    lastTimeRef.current = performance.now()

    function tick(timestamp: number) {
      const delta = timestamp - lastTimeRef.current
      lastTimeRef.current = timestamp
      dispatch({ type: 'AUTO_ADVANCE_TICK', deltaMs: delta, scenario: scenario! })
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [status, autoAdvance, scenario, dispatch])
}
