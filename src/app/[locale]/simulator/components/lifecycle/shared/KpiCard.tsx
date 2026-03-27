'use client'

interface KpiCardProps {
  label: string
  value: string
  badge?: string
  accentColor?: string
}

export default function KpiCard({ label, value, badge, accentColor = '#4cd7f6' }: KpiCardProps) {
  return (
    <div style={{
      background: '#242a35',
      padding: '20px 24px',
      borderLeft: `4px solid ${accentColor}`,
    }}>
      <div style={{
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: 2,
        textTransform: 'uppercase' as const,
        color: '#64748b',
        marginBottom: 8,
      }}>
        {label}
      </div>
      <div style={{
        fontSize: 32,
        fontWeight: 700,
        color: '#dde2f1',
        lineHeight: 1,
        marginBottom: badge ? 10 : 0,
      }}>
        {value}
      </div>
      {badge && (
        <span style={{
          display: 'inline-block',
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 0.5,
          color: accentColor,
          background: `${accentColor}10`,
          border: `1px solid ${accentColor}20`,
          padding: '3px 8px',
        }}>
          {badge}
        </span>
      )}
    </div>
  )
}
