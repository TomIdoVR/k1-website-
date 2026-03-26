'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { ModuleKey } from '@/lib/simulator/types'
import { MODULE_COLORS, MODULE_NAMES } from '@/lib/simulator/constants'
import { t } from '@/lib/simulator/i18n'

interface ModuleBadgeProps {
  moduleId: ModuleKey
  active: boolean
  es: boolean
}

export default function ModuleBadge({ moduleId, active, es }: ModuleBadgeProps) {
  const [hovered, setHovered] = useState(false)
  const color = MODULE_COLORS[moduleId]
  const name = t(MODULE_NAMES[moduleId], es)

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        scale: active ? 1.05 : 1,
        boxShadow: active
          ? `0 0 16px ${color}40, 0 0 4px ${color}30`
          : '0 0 0 transparent',
      }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '5px 10px',
        borderRadius: 6,
        border: `1px solid ${active ? color : 'rgba(255,255,255,0.08)'}`,
        background: active ? `${color}15` : 'rgba(255,255,255,0.03)',
        cursor: 'default',
        position: 'relative',
      }}
    >
      <motion.div
        animate={{ opacity: active ? 1 : 0.3 }}
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: color,
        }}
      />
      <span style={{
        fontSize: 10,
        fontWeight: 600,
        color: active ? color : 'var(--dim)',
        letterSpacing: 0.5,
        whiteSpace: 'nowrap',
      }}>
        {name}
      </span>

      {/* Tooltip on hover when active */}
      {active && hovered && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            marginBottom: 6,
            background: 'var(--bg-2)',
            border: `1px solid ${color}40`,
            borderRadius: 6,
            padding: '6px 10px',
            fontSize: 10,
            color: 'var(--muted)',
            whiteSpace: 'nowrap',
            zIndex: 20,
          }}
        >
          {t({ en: 'Active now', es: 'Activo ahora' }, es)}
        </motion.div>
      )}
    </motion.div>
  )
}
