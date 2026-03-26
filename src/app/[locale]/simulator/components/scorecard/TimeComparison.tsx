'use client'

import { motion } from 'framer-motion'
import { formatTime } from '@/lib/simulator/engine'
import { strings, t } from '@/lib/simulator/i18n'
import type { Scenario } from '@/lib/simulator/types'

interface TimeComparisonProps {
  scenario: Scenario
  es: boolean
}

export default function TimeComparison({ scenario, es }: TimeComparisonProps) {
  const fTime = scenario.totalFragmentedTime
  const uTime = scenario.totalUnifiedTime
  const pctFaster = Math.round(((fTime - uTime) / fTime) * 100)

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 32,
      marginBottom: 48,
    }}>
      {/* Fragmented */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          textAlign: 'center',
          padding: '32px 40px',
          background: 'rgba(255, 82, 99, 0.06)',
          border: '1px solid rgba(255, 82, 99, 0.2)',
          borderRadius: 16,
        }}
      >
        <div style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 2,
          color: '#ff5263',
          textTransform: 'uppercase' as const,
          marginBottom: 8,
        }}>
          {t(strings.fragmented, es)}
        </div>
        <div style={{
          fontFamily: "'DM Mono', 'SF Mono', monospace",
          fontSize: 48,
          fontWeight: 800,
          color: '#ff5263',
          letterSpacing: 2,
        }}>
          {formatTime(fTime)}
        </div>
        <div style={{ fontSize: 12, color: 'var(--dim)', marginTop: 4 }}>
          {t(strings.totalResponse, es)}
        </div>
      </motion.div>

      {/* Delta badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
        style={{
          background: 'rgba(0, 212, 146, 0.12)',
          border: '2px solid #00d492',
          borderRadius: 12,
          padding: '12px 20px',
          textAlign: 'center',
        }}
      >
        <div style={{
          fontSize: 28,
          fontWeight: 900,
          color: '#00d492',
        }}>
          {pctFaster}%
        </div>
        <div style={{
          fontSize: 11,
          fontWeight: 600,
          color: '#00d492',
          letterSpacing: 1,
          textTransform: 'uppercase' as const,
        }}>
          {t(strings.faster, es)}
        </div>
      </motion.div>

      {/* Unified */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          textAlign: 'center',
          padding: '32px 40px',
          background: 'rgba(6, 182, 212, 0.06)',
          border: '1px solid rgba(6, 182, 212, 0.2)',
          borderRadius: 16,
        }}
      >
        <div style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 2,
          color: 'var(--cyan)',
          textTransform: 'uppercase' as const,
          marginBottom: 8,
        }}>
          KabatOne
        </div>
        <div style={{
          fontFamily: "'DM Mono', 'SF Mono', monospace",
          fontSize: 48,
          fontWeight: 800,
          color: 'var(--cyan)',
          letterSpacing: 2,
        }}>
          {formatTime(uTime)}
        </div>
        <div style={{ fontSize: 12, color: 'var(--dim)', marginTop: 4 }}>
          {t(strings.totalResponse, es)}
        </div>
      </motion.div>
    </div>
  )
}
