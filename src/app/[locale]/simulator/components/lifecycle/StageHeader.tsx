'use client'

import { t } from '@/lib/simulator/i18n'
import { STAGE_COLORS } from '@/lib/simulator/constants'
import type { LifecycleScreenDef } from '@/lib/simulator/types'

interface StageHeaderProps {
  screenDef: LifecycleScreenDef
  es: boolean
}

export default function StageHeader({ screenDef, es }: StageHeaderProps) {
  const stageColor = STAGE_COLORS[screenDef.stage]

  return (
    <div style={{
      padding: '14px 24px',
      borderBottom: '1px solid #1e293b',
      background: '#0e131e',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
    }}>
      <span style={{
        fontSize: 28,
        fontWeight: 900,
        color: stageColor,
        opacity: 0.4,
        letterSpacing: -1,
        lineHeight: 1,
      }}>
        {screenDef.stageNumber}
      </span>
      <span style={{
        fontSize: 18,
        fontWeight: 900,
        color: '#dde2f1',
        letterSpacing: -0.5,
        textTransform: 'uppercase' as const,
      }}>
        {t(screenDef.stageLabel, es)}
      </span>
      <div style={{
        width: 1,
        height: 16,
        background: '#1e293b',
      }} />
      <span style={{
        fontSize: 13,
        color: '#bcc9cd',
        flex: 1,
      }}>
        {t(screenDef.title, es)}
      </span>
    </div>
  )
}
