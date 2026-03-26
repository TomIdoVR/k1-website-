'use client'

import { motion, AnimatePresence } from 'framer-motion'
import type { FailureEvent, I18nString } from '@/lib/simulator/types'
import { t } from '@/lib/simulator/i18n'

interface FailureEffectProps {
  failure: FailureEvent | undefined
  stepId: number
  es: boolean
}

export default function FailureEffect({ failure, stepId, es }: FailureEffectProps) {
  if (!failure) return null

  return (
    <AnimatePresence>
      <motion.div
        key={`failure-${stepId}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          bottom: 12,
          left: 12,
          right: 12,
          background: 'rgba(255, 82, 99, 0.12)',
          border: '1px solid rgba(255, 82, 99, 0.3)',
          borderRadius: 8,
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          zIndex: 10,
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.6, repeat: 2 }}
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#ff5263',
            flexShrink: 0,
          }}
        />
        <div style={{
          fontSize: 11,
          color: '#ff5263',
          fontWeight: 600,
          lineHeight: 1.4,
        }}>
          ⚠ {t(failure.message, es)}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
