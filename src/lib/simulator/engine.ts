/* ── Playback Engine — Reducer + Hook ── */

import { useEffect, useRef, useCallback } from 'react'
import type { SimulatorState, SimulatorAction, PlaybackState, Scenario } from './types'
import { STEP_TRANSITION_MS } from './constants'

/* ── Initial State ── */

const initialPlayback: PlaybackState = {
  status: 'idle',
  currentStep: 0,
  speed: 1,
  fragmentedElapsed: 0,
  unifiedElapsed: 0,
  errorCount: 0,
  missedCount: 0,
  activeModules: [],
  stepPhase: 'running',
}

export const initialState: SimulatorState = {
  screen: 'entry',
  selectedScenario: null,
  playback: initialPlayback,
}

/* ── Reducer ── */

export function simulatorReducer(state: SimulatorState, action: SimulatorAction): SimulatorState {
  switch (action.type) {
    case 'SELECT_SCENARIO':
      return { ...state, selectedScenario: action.scenarioId }

    case 'START_PLAYBACK':
      return {
        ...state,
        screen: 'playback',
        playback: {
          ...initialPlayback,
          status: 'playing',
        },
      }

    case 'PAUSE':
      return {
        ...state,
        playback: { ...state.playback, status: 'paused' },
      }

    case 'RESUME':
      return {
        ...state,
        playback: { ...state.playback, status: 'playing' },
      }

    case 'REWIND':
      return {
        ...state,
        playback: {
          ...initialPlayback,
          status: 'playing',
        },
      }

    case 'SET_SPEED':
      return {
        ...state,
        playback: { ...state.playback, speed: action.speed },
      }

    case 'TICK': {
      const { playback } = state
      if (playback.status !== 'playing' || playback.stepPhase === 'transitioning') return state

      const scenario = action.scenario
      if (!scenario) return state

      const step = scenario.steps[playback.currentStep]
      if (!step) return state

      const fDur = step.fragmentedDuration * 1000
      const uDur = step.unifiedDuration * 1000

      const newFElapsed = Math.min(playback.fragmentedElapsed + action.deltaMs, fDur)
      const newUElapsed = Math.min(playback.unifiedElapsed + action.deltaMs, uDur)

      const bothDone = newFElapsed >= fDur && newUElapsed >= uDur

      // Determine active modules for this step
      const activeModules = step.modules

      if (bothDone) {
        // Check if this was the last step
        const isLast = playback.currentStep >= scenario.steps.length - 1

        // Count errors/missed from this step's failure
        let errorCount = playback.errorCount
        let missedCount = playback.missedCount
        if (step.fragmented.failure) {
          if (step.fragmented.failure.type === 'missed_alert' || step.fragmented.failure.type === 'no_channel') {
            missedCount += 1
          } else {
            errorCount += 1
          }
        }

        if (isLast) {
          return {
            ...state,
            playback: {
              ...playback,
              fragmentedElapsed: fDur,
              unifiedElapsed: uDur,
              activeModules,
              errorCount,
              missedCount,
              status: 'completed',
              stepPhase: 'running',
            },
          }
        }

        // Start transition to next step
        return {
          ...state,
          playback: {
            ...playback,
            fragmentedElapsed: fDur,
            unifiedElapsed: uDur,
            activeModules,
            errorCount,
            missedCount,
            stepPhase: 'transitioning',
          },
        }
      }

      return {
        ...state,
        playback: {
          ...playback,
          fragmentedElapsed: newFElapsed,
          unifiedElapsed: newUElapsed,
          activeModules,
        },
      }
    }

    case 'ADVANCE_STEP': {
      const scenario = action.scenario
      if (!scenario) return state
      const nextStep = state.playback.currentStep + 1
      if (nextStep >= scenario.steps.length) {
        return {
          ...state,
          playback: { ...state.playback, status: 'completed', stepPhase: 'running' },
        }
      }
      return {
        ...state,
        playback: {
          ...state.playback,
          currentStep: nextStep,
          fragmentedElapsed: 0,
          unifiedElapsed: 0,
          activeModules: scenario.steps[nextStep].modules,
          stepPhase: 'running',
        },
      }
    }

    case 'COMPLETE_PLAYBACK':
      return {
        ...state,
        playback: { ...state.playback, status: 'completed' },
      }

    case 'GO_TO_SCORECARD':
      return { ...state, screen: 'scorecard' }

    case 'GO_TO_DEEP_DIVE':
      return { ...state, screen: 'deep-dive' }

    case 'GO_TO_ENTRY':
      return {
        ...initialState,
      }

    default:
      return state
  }
}

/* ── RAF Tick Hook ── */

export function usePlaybackTick(
  status: PlaybackState['status'],
  stepPhase: PlaybackState['stepPhase'],
  speed: number,
  scenario: Scenario | undefined,
  dispatch: React.Dispatch<SimulatorAction>,
) {
  const rafRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)
  const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Handle step transitions
  useEffect(() => {
    if (stepPhase === 'transitioning' && scenario) {
      transitionTimerRef.current = setTimeout(() => {
        dispatch({ type: 'ADVANCE_STEP', scenario })
      }, STEP_TRANSITION_MS)
      return () => {
        if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current)
      }
    }
  }, [stepPhase, scenario, dispatch])

  // Handle RAF tick loop
  useEffect(() => {
    if (status !== 'playing' || stepPhase === 'transitioning' || !scenario) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      return
    }

    lastTimeRef.current = performance.now()

    function tick(timestamp: number) {
      const delta = (timestamp - lastTimeRef.current) * speed
      lastTimeRef.current = timestamp
      dispatch({ type: 'TICK', deltaMs: delta, scenario: scenario! })
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [status, stepPhase, speed, scenario, dispatch])
}

/* ── Utility: Compute cumulative display time ── */

export function computeDisplayTime(scenario: Scenario, currentStep: number, sideElapsed: number, side: 'fragmented' | 'unified'): number {
  let total = 0
  for (let i = 0; i < currentStep; i++) {
    const step = scenario.steps[i]
    total += side === 'fragmented' ? step.fragmentedDuration : step.unifiedDuration
    // Add time penalties for fragmented failures
    if (side === 'fragmented' && step.fragmented.failure) {
      total += step.fragmented.failure.timePenalty
    }
  }
  // Add current step progress
  const currentStepData = scenario.steps[currentStep]
  if (currentStepData) {
    const stepDur = side === 'fragmented' ? currentStepData.fragmentedDuration : currentStepData.unifiedDuration
    const progress = Math.min(sideElapsed / (stepDur * 1000), 1)
    total += stepDur * progress
    // Add penalty proportionally during the failing step
    if (side === 'fragmented' && currentStepData.fragmented.failure) {
      total += currentStepData.fragmented.failure.timePenalty * progress
    }
  }
  return total // in seconds
}

export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}
