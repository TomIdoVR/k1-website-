'use client'

import { motion } from 'framer-motion'
import { strings, t } from '@/lib/simulator/i18n'

interface SummaryTableProps {
  es: boolean
}

const rows = [
  { fragmented: (es: boolean) => `10 ${t(strings.manualSteps, es)}`, unified: (es: boolean) => `3 ${t(strings.decisions, es)}` },
  { fragmented: (es: boolean) => `4 ${t(strings.screens, es)}`, unified: (es: boolean) => `1 ${t(strings.canvas, es)}` },
  { fragmented: (es: boolean) => `3 ${t(strings.dataReEntries, es)}`, unified: (es: boolean) => `0 ${t(strings.dataReEntries, es)}` },
  { fragmented: (es: boolean) => `1 ${t(strings.missedAlerts, es)}`, unified: (es: boolean) => `0 ${t(strings.missedAlerts, es)}` },
  { fragmented: (es: boolean) => `1 ${t(strings.dispatchErrors, es)}`, unified: (es: boolean) => `0 ${t(strings.dispatchErrors, es)}` },
  { fragmented: (es: boolean) => t(strings.citizenInput, es), unified: (es: boolean) => t(strings.sosReceived, es) },
  { fragmented: (es: boolean) => t(strings.manualAudit, es), unified: (es: boolean) => t(strings.autoAudit, es) },
]

export default function SummaryTable({ es }: SummaryTableProps) {
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
        {t(strings.comparison, es)}
      </div>

      {/* Table header */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16,
        marginBottom: 12,
        paddingBottom: 8,
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{
          fontSize: 11,
          fontWeight: 700,
          color: '#ff5263',
          letterSpacing: 1,
          textTransform: 'uppercase' as const,
        }}>
          {t(strings.fragmented, es)}
        </div>
        <div style={{
          fontSize: 11,
          fontWeight: 700,
          color: 'var(--cyan)',
          letterSpacing: 1,
          textTransform: 'uppercase' as const,
        }}>
          KabatOne
        </div>
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 + i * 0.08 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
            padding: '8px 0',
            borderBottom: i < rows.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none',
          }}
        >
          <div style={{ fontSize: 12, color: 'var(--muted)' }}>
            {row.fragmented(es)}
          </div>
          <div style={{ fontSize: 12, color: 'var(--white)', fontWeight: 600 }}>
            {row.unified(es)}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
