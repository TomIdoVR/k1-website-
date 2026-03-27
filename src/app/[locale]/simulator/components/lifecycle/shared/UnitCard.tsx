'use client'

interface UnitCardProps {
  callsign: string
  type: string
  eta: string
  distance: string
  status: 'available' | 'dispatched' | 'en-route'
  rank?: number
  accentColor?: string
}

const STATUS_COLORS = {
  available: '#22c55e',
  dispatched: '#06b6d4',
  'en-route': '#eab308',
}

export default function UnitCard({ callsign, type, eta, distance, status, rank, accentColor = '#ef4444' }: UnitCardProps) {
  const statusColor = STATUS_COLORS[status]

  return (
    <div style={{
      background: '#1a202a',
      border: '1px solid #2f3540',
      padding: '16px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
    }}>
      {/* Rank badge */}
      {rank && (
        <div style={{
          position: 'absolute',
          top: -1,
          left: -1,
          width: 24,
          height: 24,
          background: accentColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 11,
          fontWeight: 900,
          color: '#fff',
        }}>
          {rank}
        </div>
      )}

      <div style={{ paddingLeft: rank ? 20 : 0 }}>
        <div style={{
          fontSize: 15,
          fontWeight: 700,
          color: '#dde2f1',
          letterSpacing: -0.3,
        }}>
          {callsign}
        </div>
        <div style={{
          fontSize: 11,
          color: '#64748b',
          marginTop: 2,
        }}>
          {type}
        </div>
      </div>

      <div style={{ textAlign: 'right' }}>
        <div style={{
          fontSize: 13,
          fontWeight: 700,
          color: '#dde2f1',
        }}>
          ETA {eta}
        </div>
        <div style={{
          fontSize: 11,
          color: '#64748b',
          marginTop: 2,
        }}>
          {distance}
        </div>
      </div>

      {/* Status badge */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '4px 10px',
        background: `${statusColor}10`,
        border: `1px solid ${statusColor}20`,
      }}>
        <div style={{
          width: 5,
          height: 5,
          borderRadius: 9999,
          background: statusColor,
        }} />
        <span style={{
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: 1,
          textTransform: 'uppercase' as const,
          color: statusColor,
        }}>
          {status}
        </span>
      </div>
    </div>
  )
}
