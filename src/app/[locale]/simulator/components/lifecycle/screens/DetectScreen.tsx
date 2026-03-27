'use client'

import CameraFeed from '../shared/CameraFeed'

const CAMERAS = [
  { label: 'CAM-017', isAlert: true },
  { label: 'CAM-018' },
  { label: 'CAM-022' },
  { label: 'CAM-031' },
  { label: 'CAM-045' },
  { label: 'CAM-046' },
]

export default function DetectScreen() {
  return (
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: 16,
      gap: 12,
    }}>
      {/* Alert strip */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '8px 14px',
        background: '#161c26',
        borderLeft: '3px solid #ffb4ab',
        flexShrink: 0,
      }}>
        <div style={{
          width: 8, height: 8, borderRadius: 9999,
          background: '#ffb4ab',
          boxShadow: '0 0 8px #ffb4ab',
          animation: 'pulse 2s infinite',
        }} />
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, color: '#ffb4ab', textTransform: 'uppercase' as const }}>
          ANOMALY DETECTED
        </span>
        <span style={{ fontSize: 11, color: '#bcc9cd' }}>— Threat: 0.91</span>
      </div>

      {/* Camera grid — dominant element */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: 6,
      }}>
        {CAMERAS.map((cam) => (
          <CameraFeed
            key={cam.label}
            label={cam.label}
            isAlert={cam.isAlert}
            showBoxes={cam.isAlert}
            style={{ height: '100%' }}
          />
        ))}
      </div>
    </div>
  )
}
