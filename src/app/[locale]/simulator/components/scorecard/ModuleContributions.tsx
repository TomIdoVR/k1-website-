'use client'

import { motion } from 'framer-motion'
import { strings, t } from '@/lib/simulator/i18n'
import { MODULE_COLORS, MODULE_NAMES } from '@/lib/simulator/constants'
import type { ModuleContribution } from '@/lib/simulator/types'

interface ModuleContributionsProps {
  contributions: ModuleContribution[]
  es: boolean
}

export default function ModuleContributions({ contributions, es }: ModuleContributionsProps) {
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
        {t(strings.moduleContribution, es)}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {contributions.map((c, i) => {
          const color = MODULE_COLORS[c.moduleId]
          return (
            <motion.div
              key={c.moduleId}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.08 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '8px 0',
                borderBottom: i < contributions.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <div style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: color,
                flexShrink: 0,
              }} />
              <div style={{
                fontSize: 12,
                fontWeight: 700,
                color,
                minWidth: 80,
              }}>
                {t(MODULE_NAMES[c.moduleId], es)}
              </div>
              <div style={{
                fontSize: 12,
                fontWeight: 700,
                color: 'var(--white)',
                minWidth: 60,
              }}>
                {t(c.timeSaved, es)}
              </div>
              <div style={{
                fontSize: 11,
                color: 'var(--muted)',
                flex: 1,
              }}>
                {t(c.description, es)}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
