'use client'

import { motion } from 'framer-motion'
import { strings, t } from '@/lib/simulator/i18n'
import type { TimeLostCategory } from '@/lib/simulator/types'

interface TimeLostChartProps {
  breakdown: TimeLostCategory[]
  es: boolean
}

const barColors = ['#ff5263', '#f97316', '#eab308', '#94a3b8']

export default function TimeLostChart({ breakdown, es }: TimeLostChartProps) {
  return (
    <div style={{
      background: 'var(--card-bg)',
      border: '1px solid var(--card-border)',
      borderRadius: 12,
      padding: 24,
      marginBottom: 32,
    }}>
      <div style={{
        fontSize: 13,
        fontWeight: 700,
        color: 'var(--white)',
        marginBottom: 20,
        letterSpacing: 0.5,
      }}>
        {t(strings.whereTimeLost, es)}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {breakdown.map((item, i) => (
          <div key={i}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 6,
              fontSize: 12,
            }}>
              <span style={{ color: 'var(--muted)' }}>{t(item.category, es)}</span>
              <span style={{ color: barColors[i], fontWeight: 700 }}>{item.percentage}%</span>
            </div>
            <div style={{
              height: 8,
              background: 'rgba(255,255,255,0.05)',
              borderRadius: 4,
              overflow: 'hidden',
            }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.percentage}%` }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.8, ease: 'easeOut' }}
                style={{
                  height: '100%',
                  background: barColors[i],
                  borderRadius: 4,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
