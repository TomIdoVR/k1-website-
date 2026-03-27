'use client'

interface AlertBannerProps {
  title: string
  subtitle?: string
  timestamp?: string
  severity?: 'critical' | 'warning' | 'info'
  action?: string
  onAction?: () => void
}

const SEVERITY_COLORS = {
  critical: '#ffb4ab',
  warning: '#f97316',
  info: '#4cd7f6',
}

export default function AlertBanner({ title, subtitle, timestamp, severity = 'critical', action, onAction }: AlertBannerProps) {
  const color = SEVERITY_COLORS[severity]

  return (
    <div style={{
      background: '#161c26',
      borderLeft: `4px solid ${color}`,
      padding: '16px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: `0 0 15px ${color}30`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        {/* Pulsing dot */}
        <div style={{
          width: 10,
          height: 10,
          borderRadius: 9999,
          background: color,
          boxShadow: `0 0 10px ${color}`,
          animation: 'pulse 2s infinite',
        }} />
        <div>
          <div style={{
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: 1.5,
            textTransform: 'uppercase' as const,
            color,
          }}>
            {title}
          </div>
          {subtitle && (
            <div style={{
              fontSize: 13,
              color: '#dde2f1',
              marginTop: 2,
            }}>
              {subtitle}
            </div>
          )}
          {timestamp && (
            <div style={{
              fontSize: 11,
              color: '#bcc9cd',
              marginTop: 2,
            }}>
              {timestamp}
            </div>
          )}
        </div>
      </div>
      {action && (
        <button
          onClick={onAction}
          style={{
            padding: '8px 20px',
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 1.5,
            textTransform: 'uppercase' as const,
            background: '#06b6d4',
            color: '#003640',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          {action}
        </button>
      )}
    </div>
  )
}
