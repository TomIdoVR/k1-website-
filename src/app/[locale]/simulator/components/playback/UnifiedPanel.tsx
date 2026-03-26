'use client'

import { motion } from 'framer-motion'
import { useSimulator } from '../../SimulatorApp'
import { computeDisplayTime } from '@/lib/simulator/engine'
import { strings, t } from '@/lib/simulator/i18n'
import type { ModuleKey } from '@/lib/simulator/types'
import { MODULE_COLORS } from '@/lib/simulator/constants'
import RunningClock from './RunningClock'
import ModuleBadge from './ModuleBadge'

const MODULE_ORDER: ModuleKey[] = ['video', 'dispatch', 'events', 'gis', 'integrations', 'responder', 'citizen', 'ai', 'bi']

export default function UnifiedPanel() {
  const { state, scenario, es } = useSimulator()
  if (!scenario) return null

  const step = scenario.steps[state.playback.currentStep]
  if (!step) return null

  const displayTime = computeDisplayTime(
    scenario,
    state.playback.currentStep,
    state.playback.unifiedElapsed,
    'unified',
  )

  const activeModules = state.playback.activeModules

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: 16,
      background: 'rgba(6, 182, 212, 0.02)',
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
            color: 'var(--cyan)',
            letterSpacing: 1,
            textTransform: 'uppercase' as const,
          }}>
            {t(strings.unified, es)}
          </div>
          <div style={{ fontSize: 10, color: 'var(--dim)', marginTop: 2 }}>
            {t(strings.unifiedSub, es)}
          </div>
        </div>
        <RunningClock seconds={displayTime} color="var(--cyan)" />
      </div>

      {/* GIS Map mockup */}
      <div style={{
        flex: 1,
        background: 'rgba(59, 130, 246, 0.05)',
        border: '1px solid rgba(59, 130, 246, 0.1)',
        borderRadius: 10,
        position: 'relative',
        overflow: 'hidden',
        minHeight: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Map grid lines */}
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.06 }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={`${i * 10}%`} x2="100%" y2={`${i * 10}%`} stroke="var(--white)" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`v${i}`} x1={`${i * 10}%`} y1="0" x2={`${i * 10}%`} y2="100%" stroke="var(--white)" strokeWidth="0.5" />
          ))}
        </svg>

        {/* Incident marker */}
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: 'absolute',
            top: '35%',
            left: '45%',
            width: 14,
            height: 14,
            borderRadius: '50%',
            background: '#ef4444',
            boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)',
          }}
        />

        {/* Unit markers */}
        {[
          { top: '50%', left: '30%', label: 'U-14', dist: '2.1km' },
          { top: '25%', left: '60%', label: 'U-07', dist: '3.4km' },
          { top: '60%', left: '70%', label: 'U-22', dist: '4.8km' },
        ].map((unit) => (
          <div key={unit.label} style={{
            position: 'absolute',
            top: unit.top,
            left: unit.left,
          }}>
            <div style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: 'var(--blue)',
              border: '2px solid var(--blue-light)',
            }} />
            <div style={{
              fontSize: 8,
              color: 'var(--blue-light)',
              fontWeight: 600,
              marginTop: 2,
              whiteSpace: 'nowrap',
            }}>
              {unit.label} · {unit.dist}
            </div>
          </div>
        ))}

        {/* Camera coverage arcs */}
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '40%',
          width: 60,
          height: 60,
          border: '1px dashed rgba(6, 182, 212, 0.2)',
          borderRadius: '50%',
        }} />

        {/* Data flow visualization */}
        {step.unified.dataFlows.map((flow, i) => {
          const fromColor = MODULE_COLORS[flow.from]
          return (
            <motion.div
              key={`flow-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              style={{
                position: 'absolute',
                top: 8,
                left: `${20 + i * 25}%`,
                fontSize: 8,
                color: fromColor,
                fontWeight: 600,
                background: `${fromColor}15`,
                padding: '2px 6px',
                borderRadius: 3,
                border: `1px solid ${fromColor}30`,
              }}
            >
              {flow.from} → {flow.to}
            </motion.div>
          )
        })}
      </div>

      {/* Module badges */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 6,
        marginTop: 12,
        position: 'relative',
      }}>
        {MODULE_ORDER.map((moduleId) => (
          <ModuleBadge
            key={moduleId}
            moduleId={moduleId}
            active={activeModules.includes(moduleId)}
            es={es}
          />
        ))}
      </div>

      {/* Zero errors indicator */}
      <div style={{
        display: 'flex',
        gap: 16,
        marginTop: 8,
        fontSize: 11,
        color: 'var(--dim)',
      }}>
        <span>
          {t(strings.errors, es)}: <span style={{ color: '#00d492', fontWeight: 700 }}>0</span>
        </span>
        <span>
          {t(strings.missed, es)}: <span style={{ color: '#00d492', fontWeight: 700 }}>0</span>
        </span>
      </div>
    </div>
  )
}
