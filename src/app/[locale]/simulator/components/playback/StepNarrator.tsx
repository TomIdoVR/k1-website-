'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useSimulator } from '../../SimulatorApp'
import { strings, t } from '@/lib/simulator/i18n'

export default function StepNarrator() {
  const { state, scenario, es } = useSimulator()
  if (!scenario) return null

  const step = scenario.steps[state.playback.currentStep]
  if (!step) return null

  const total = scenario.steps.length

  return (
    <div style={{
      background: 'var(--bg-2)',
      borderTop: '1px solid var(--border)',
      padding: '16px 24px',
    }}>
      {/* Step indicator */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8,
      }}>
        <span style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 1,
          color: 'var(--cyan)',
          textTransform: 'uppercase' as const,
        }}>
          {t(strings.step, es)} {step.id} {t(strings.of, es)} {total}
        </span>
        <span style={{
          fontSize: 14,
          fontWeight: 700,
          color: 'var(--white)',
        }}>
          — {t(step.name, es)}
        </span>
      </div>

      {/* Progress dots */}
      <div style={{
        display: 'flex',
        gap: 4,
        marginBottom: 12,
      }}>
        {scenario.steps.map((s, i) => (
          <div
            key={s.id}
            style={{
              flex: 1,
              height: 3,
              borderRadius: 2,
              background: i < state.playback.currentStep
                ? 'var(--cyan)'
                : i === state.playback.currentStep
                  ? 'var(--blue)'
                  : 'rgba(255,255,255,0.08)',
              transition: 'background 0.3s',
            }}
          />
        ))}
      </div>

      {/* Narrator text */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
          }}
        >
          <div>
            <div style={{
              fontSize: 10,
              fontWeight: 700,
              color: '#ff5263',
              letterSpacing: 1,
              textTransform: 'uppercase' as const,
              marginBottom: 4,
            }}>
              {t(strings.fragmented, es)}
            </div>
            <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>
              {t(step.fragmented.description, es)}
            </div>
          </div>
          <div>
            <div style={{
              fontSize: 10,
              fontWeight: 700,
              color: 'var(--cyan)',
              letterSpacing: 1,
              textTransform: 'uppercase' as const,
              marginBottom: 4,
            }}>
              {t(strings.unified, es)}
            </div>
            <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>
              {t(step.unified.description, es)}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
