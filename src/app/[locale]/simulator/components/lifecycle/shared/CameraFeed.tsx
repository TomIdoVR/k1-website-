'use client'

import { useState, useEffect } from 'react'

interface CameraFeedProps {
  label: string
  location?: string
  isAlert?: boolean
  alertColor?: string
  showBoxes?: boolean
  videoSrc?: string
  style?: React.CSSProperties
}

// Publicly available sample street / outdoor footage, filtered to look like CCTV
// Source: Google commondatastorage sample bucket (public domain test videos)
const CAMERA_VIDEOS: Record<string, string> = {
  'CAM-017': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  'CAM-018': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  'CAM-022': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'CAM-031': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  'CAM-045': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
  'CAM-046': 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
}

// Static bounding-box positions for the alert camera
const ALERT_BOXES = [
  { top: '28%', left: '24%', w: 52, h: 70, delay: '0s', conf: '0.91' },
  { top: '22%', left: '50%', w: 46, h: 64, delay: '0.5s', conf: '0.87' },
  { top: '35%', left: '67%', w: 40, h: 56, delay: '1s',   conf: '0.83' },
]

function useClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () => {
      const d = new Date()
      setTime(
        `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`,
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

export default function CameraFeed({
  label,
  location,
  isAlert,
  alertColor = '#ffb4ab',
  showBoxes,
  videoSrc,
  style,
}: CameraFeedProps) {
  const time = useClock()
  const src = videoSrc ?? CAMERA_VIDEOS[label]
  const boxes = showBoxes ? ALERT_BOXES : []

  return (
    <div style={{
      background: '#060a10',
      position: 'relative',
      overflow: 'hidden',
      aspectRatio: '16/9',
      animation: 'sim-flicker 9s infinite',
      ...style,
    }}>
      {/* Real video feed with CCTV filter */}
      {src && (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            // CCTV look: desaturated, slightly dark, higher contrast
            filter: 'grayscale(0.75) brightness(0.55) contrast(1.5) saturate(0.3)',
          }}
        />
      )}

      {/* Scanlines overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,0.22) 3px, rgba(0,0,0,0.22) 4px)',
        pointerEvents: 'none',
        animation: 'sim-scan 0.12s steps(1) infinite',
      }} />

      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 88% 88% at 50% 50%, transparent 45%, rgba(0,0,0,0.75) 100%)',
        pointerEvents: 'none',
      }} />

      {/* AI bounding boxes */}
      {boxes.map((b, i) => (
        <div key={i} style={{
          position: 'absolute', top: b.top, left: b.left,
          width: b.w, height: b.h,
          border: `1.5px solid ${isAlert ? alertColor : 'rgba(6,182,212,0.7)'}`,
          boxShadow: `0 0 8px ${isAlert ? alertColor : 'rgba(6,182,212,0.35)'}50`,
          animation: `sim-box-drift ${3.5 + i * 0.6}s ease-in-out infinite`,
          animationDelay: b.delay,
        }}>
          <span style={{
            position: 'absolute', top: -13, left: 0,
            fontSize: 7, fontWeight: 700,
            color: isAlert ? alertColor : '#4cd7f6',
            background: 'rgba(0,0,0,0.8)', padding: '1px 4px', letterSpacing: 0.5,
          }}>
            #{i + 1} · {b.conf}
          </span>
        </div>
      ))}

      {/* Top bar: camera label + live indicator */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '5px 7px', zIndex: 10,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, transparent 100%)',
      }}>
        <span style={{
          fontSize: 9, fontWeight: 700, color: '#dde2f1',
          letterSpacing: 0.5, fontFamily: 'monospace',
        }}>
          {label}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <div style={{
            width: 5, height: 5, borderRadius: 9999,
            background: isAlert ? alertColor : '#22c55e',
            boxShadow: `0 0 6px ${isAlert ? alertColor : '#22c55e'}`,
            animation: 'pulse 2s infinite',
          }} />
          <span style={{
            fontSize: 7, fontWeight: 700, letterSpacing: 1.5,
            textTransform: 'uppercase' as const,
            color: isAlert ? alertColor : '#22c55e',
          }}>
            {isAlert ? 'ALERT' : 'LIVE'}
          </span>
        </div>
      </div>

      {/* Bottom bar: location + timestamp */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '5px 7px', zIndex: 10,
        background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
      }}>
        <span style={{ fontSize: 8, color: '#64748b', letterSpacing: 0.5, fontFamily: 'monospace' }}>
          {location ?? 'MAIN PLAZA'}
        </span>
        <span style={{ fontSize: 8, color: '#334155', fontFamily: 'monospace', letterSpacing: 1 }}>
          {time}
        </span>
      </div>

      {/* Alert border glow */}
      {isAlert && (
        <div style={{
          position: 'absolute', inset: 0,
          border: `2px solid ${alertColor}50`,
          boxShadow: `inset 0 0 20px ${alertColor}15`,
          pointerEvents: 'none',
        }} />
      )}
    </div>
  )
}
