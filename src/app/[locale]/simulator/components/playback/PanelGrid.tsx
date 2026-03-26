'use client'

import { motion } from 'framer-motion'
import type { PanelId } from '@/lib/simulator/types'
import { PANEL_NAMES } from '@/lib/simulator/constants'

interface PanelGridProps {
  activePanel: PanelId
  es: boolean
}

const panels: { id: PanelId; icon: string; mockContent: string }[] = [
  { id: 'vms', icon: '📹', mockContent: 'Camera grid — 16 feeds' },
  { id: 'gis', icon: '🗺️', mockContent: 'Map — manual input' },
  { id: 'cad', icon: '📋', mockContent: 'Incident form — typing...' },
  { id: 'radio', icon: '📻', mockContent: 'CH1: ● | CH2: ○ | CH3: ○' },
]

export default function PanelGrid({ activePanel, es }: PanelGridProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gap: 8,
      flex: 1,
    }}>
      {panels.map((panel) => {
        const isActive = panel.id === activePanel
        return (
          <motion.div
            key={panel.id}
            animate={{
              opacity: isActive ? 1 : 0.35,
              borderColor: isActive ? '#ff5263' : 'rgba(255,255,255,0.06)',
              boxShadow: isActive ? '0 0 20px rgba(255, 82, 99, 0.15)' : '0 0 0 transparent',
            }}
            transition={{ duration: 0.4 }}
            style={{
              background: 'rgba(4, 8, 20, 0.8)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 8,
              padding: 12,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Panel header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              marginBottom: 8,
            }}>
              <span style={{ fontSize: 12 }}>{panel.icon}</span>
              <span style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 1,
                color: isActive ? '#ff5263' : 'var(--dim)',
                textTransform: 'uppercase' as const,
              }}>
                {PANEL_NAMES[panel.id][es ? 'es' : 'en']}
              </span>
              {isActive && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#ff5263',
                    marginLeft: 'auto',
                  }}
                />
              )}
            </div>

            {/* Mock content lines */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {panel.id === 'vms' && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 3, flex: 1 }}>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.04)',
                      borderRadius: 2,
                      minHeight: 16,
                    }} />
                  ))}
                </div>
              )}
              {panel.id === 'gis' && (
                <div style={{
                  flex: 1,
                  background: 'rgba(59, 130, 246, 0.06)',
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <span style={{ fontSize: 20, opacity: 0.3 }}>🗺️</span>
                </div>
              )}
              {panel.id === 'cad' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {[1, 2, 3].map((i) => (
                    <div key={i} style={{
                      height: 8,
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: 2,
                      width: `${60 + i * 10}%`,
                    }} />
                  ))}
                </div>
              )}
              {panel.id === 'radio' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {['CH1', 'CH2', 'CH3'].map((ch, i) => (
                    <div key={ch} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: 10,
                      color: 'var(--dim)',
                    }}>
                      <div style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: i === 0 ? '#22c55e' : 'rgba(255,255,255,0.15)',
                      }} />
                      {ch}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Switching delay overlay */}
            {isActive && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 1.2, delay: 0 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(4, 8, 20, 0.85)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 8,
                }}
              >
                <div style={{
                  width: 16,
                  height: 16,
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderTopColor: '#ff5263',
                  borderRadius: '50%',
                  animation: 'spin 0.8s linear infinite',
                }} />
              </motion.div>
            )}
          </motion.div>
        )
      })}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
