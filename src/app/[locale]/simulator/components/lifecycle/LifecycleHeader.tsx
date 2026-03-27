'use client'

import { useSimulator } from '../../SimulatorApp'
import { t } from '@/lib/simulator/i18n'
import { STAGE_COLORS, LIFECYCLE_STAGES } from '@/lib/simulator/constants'
import type { LifecycleStage } from '@/lib/simulator/types'

const STAGE_LABELS: Record<LifecycleStage, { en: string; es: string }> = {
  detect:     { en: 'DETECT',     es: 'DETECTAR' },
  understand: { en: 'UNDERSTAND', es: 'COMPRENDER' },
  decide:     { en: 'DECIDE',     es: 'DECIDIR' },
  act:        { en: 'ACT',        es: 'ACTUAR' },
  learn:      { en: 'LEARN',      es: 'APRENDER' },
}

const STAGE_NUMS: Record<LifecycleStage, string> = {
  detect: '01', understand: '02', decide: '03', act: '04', learn: '05',
}

export default function LifecycleHeader() {
  const { state, scenario, es } = useSimulator()
  if (!scenario) return null

  const currentScreen = scenario.screens[state.lifecycle.currentScreenIndex]
  const currentStage = currentScreen?.stage ?? 'detect'
  const stageColor = STAGE_COLORS[currentStage]
  const currentStageIdx = LIFECYCLE_STAGES.indexOf(currentStage)

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      height: 96,
      backgroundColor: '#06090f',
      borderBottom: `1px solid ${stageColor}40`,
      boxShadow: `0 2px 20px ${stageColor}10`,
      zIndex: 50,
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Top row: logo + scenario badge */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 24px',
        height: 40,
        borderBottom: '1px solid #0e1830',
      }}>
        <div style={{ fontSize: 18, fontWeight: 900, color: '#4cd7f6', letterSpacing: -0.5 }}>
          K1
        </div>
        <div style={{
          fontSize: 9, fontWeight: 700, letterSpacing: 2,
          textTransform: 'uppercase' as const, color: '#475569',
        }}>
          INCIDENT SIMULATOR
        </div>
        <div style={{
          fontSize: 9, fontWeight: 700, letterSpacing: 1.5,
          textTransform: 'uppercase' as const, color: '#4cd7f6',
          background: 'rgba(6,182,212,0.08)', padding: '4px 10px',
          border: '1px solid rgba(6,182,212,0.2)',
        }}>
          {t(scenario.name, es)}
        </div>
      </div>

      {/* Stage timeline row */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 40px',
        position: 'relative',
      }}>
        {LIFECYCLE_STAGES.map((stage, i) => {
          const isCompleted = i < currentStageIdx
          const isActive = i === currentStageIdx
          const isFuture = i > currentStageIdx
          const color = STAGE_COLORS[stage]
          const isLast = i === LIFECYCLE_STAGES.length - 1

          return (
            <div key={stage} style={{ display: 'flex', alignItems: 'center', flex: isLast ? 0 : 1 }}>
              {/* Stage node */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                {/* Circle */}
                <div style={{
                  width: isActive ? 32 : 26,
                  height: isActive ? 32 : 26,
                  borderRadius: 9999,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: isCompleted ? color : isActive ? color : '#0e1830',
                  border: `2px solid ${isCompleted || isActive ? color : '#1e293b'}`,
                  boxShadow: isActive ? `0 0 16px ${color}70, 0 0 32px ${color}30` : 'none',
                  transition: 'all 0.35s ease',
                  flexShrink: 0,
                }}>
                  {isCompleted && (
                    <span style={{ fontSize: 11, color: '#fff', fontWeight: 900, lineHeight: 1 }}>✓</span>
                  )}
                  {isActive && (
                    <span style={{ fontSize: 9, color: '#fff', fontWeight: 900, letterSpacing: 0 }}>
                      {STAGE_NUMS[stage]}
                    </span>
                  )}
                  {isFuture && (
                    <span style={{ fontSize: 9, color: '#334155', fontWeight: 700 }}>
                      {STAGE_NUMS[stage]}
                    </span>
                  )}
                  {isCompleted && false /* number hidden on completed */ && null}
                </div>

                {/* Label */}
                <span style={{
                  fontSize: isActive ? 10 : 9,
                  fontWeight: isActive ? 900 : 600,
                  letterSpacing: isActive ? 2 : 1.5,
                  textTransform: 'uppercase' as const,
                  color: isActive ? color : isCompleted ? '#64748b' : '#334155',
                  transition: 'all 0.35s ease',
                  whiteSpace: 'nowrap',
                }}>
                  {t(STAGE_LABELS[stage], es)}
                </span>
              </div>

              {/* Connector line to next stage */}
              {!isLast && (
                <div style={{
                  flex: 1,
                  height: 2,
                  margin: '0 8px',
                  marginBottom: 18, // offset to align with circles
                  background: isCompleted
                    ? `linear-gradient(90deg, ${color}, ${STAGE_COLORS[LIFECYCLE_STAGES[i + 1]]})`
                    : isActive
                    ? `linear-gradient(90deg, ${color}80, #1e293b)`
                    : '#1e293b',
                  transition: 'background 0.35s ease',
                }} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
