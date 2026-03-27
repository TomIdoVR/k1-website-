'use client'

interface StatusBadgeProps {
  label: string
  color: string
  glow?: boolean
}

export default function StatusBadge({ label, color, glow }: StatusBadgeProps) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 10px',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: 1.5,
      textTransform: 'uppercase' as const,
      color,
      background: `${color}10`,
      border: `1px solid ${color}20`,
      boxShadow: glow ? `0 0 10px ${color}30` : 'none',
    }}>
      <div style={{
        width: 5,
        height: 5,
        borderRadius: 9999,
        background: color,
      }} />
      {label}
    </span>
  )
}
