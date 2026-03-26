'use client'

import { t } from '@/lib/simulator/i18n'
import type { I18nString } from '@/lib/simulator/types'

interface ScenarioCardProps {
  id: string
  icon: string
  name: I18nString
  description: I18nString
  duration: I18nString
  available: boolean
  selected: boolean
  es: boolean
  onSelect: (id: string) => void
}

export default function ScenarioCard({
  id, icon, name, description, duration, available, selected, es, onSelect,
}: ScenarioCardProps) {
  const isDisabled = !available

  return (
    <button
      onClick={() => available && onSelect(id)}
      disabled={isDisabled}
      style={{
        background: selected
          ? 'rgba(37, 99, 235, 0.15)'
          : 'var(--card-bg)',
        border: selected
          ? '2px solid var(--blue)'
          : '1px solid var(--card-border)',
        borderRadius: 12,
        padding: '28px 24px',
        textAlign: 'left',
        cursor: available ? 'pointer' : 'not-allowed',
        opacity: available ? 1 : 0.4,
        transition: 'all 0.2s',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      <div style={{ fontSize: 32, marginBottom: 12 }}>{icon}</div>
      <div style={{
        fontSize: 18,
        fontWeight: 700,
        color: 'var(--white)',
        marginBottom: 8,
      }}>
        {t(name, es)}
      </div>
      <div style={{
        fontSize: 13,
        color: 'var(--muted)',
        lineHeight: 1.5,
        marginBottom: 12,
      }}>
        {t(description, es)}
      </div>
      <div style={{
        fontSize: 11,
        color: 'var(--dim)',
        fontWeight: 600,
        letterSpacing: 0.5,
      }}>
        {available ? t(duration, es) : t({ en: 'Coming Soon', es: 'Próximamente' }, es)}
      </div>
    </button>
  )
}
