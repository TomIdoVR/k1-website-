'use client'

import { motion } from 'framer-motion'

interface DataFlowLineProps {
  fromIndex: number
  toIndex: number
  color: string
  active: boolean
}

// Simple animated line between two badge positions
// Uses a horizontal SVG line with path drawing animation
export default function DataFlowLine({ fromIndex, toIndex, color, active }: DataFlowLineProps) {
  if (!active) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'absolute',
        left: `${(fromIndex + 0.5) * (100 / 9)}%`,
        right: `${(9 - toIndex - 0.5) * (100 / 9)}%`,
        top: -2,
        height: 2,
        background: `linear-gradient(90deg, ${color}, ${color}80)`,
        borderRadius: 1,
        zIndex: 5,
      }}
    >
      <motion.div
        animate={{ left: ['0%', '100%'] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: -2,
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: color,
          boxShadow: `0 0 8px ${color}`,
        }}
      />
    </motion.div>
  )
}
