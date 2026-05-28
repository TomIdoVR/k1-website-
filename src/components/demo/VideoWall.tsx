'use client'

import Image from 'next/image'
import type { Stage } from '@/data/demo/types'

type VideoWall = NonNullable<Stage['videoWall']>
type Tile = VideoWall['tiles'][number]

interface Props {
  wall: VideoWall
}

export default function VideoWall({ wall }: Props) {
  return (
    <>
      <style>{`
        @keyframes vw-rec-dot { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes vw-scan { 0%{transform:translateY(-100%)} 100%{transform:translateY(100%)} }
        @keyframes vw-track-pulse { 0%,100%{ box-shadow: inset 0 0 0 1.5px rgba(16,185,129,0.7);} 50%{ box-shadow: inset 0 0 0 2px rgba(16,185,129,1), 0 0 16px rgba(16,185,129,0.4);} }
      `}</style>

      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        overflow: 'hidden', background: '#07101c',
        fontFamily: 'var(--font-manrope), Manrope, sans-serif',
      }}>
        {/* Header */}
        <div style={{
          flexShrink: 0, padding: '8px 10px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%', background: '#FF4560',
            display: 'inline-block', animation: 'vw-rec-dot 1.2s ease-in-out infinite',
          }} />
          <span style={{
            fontFamily: 'monospace', fontSize: 8, fontWeight: 700,
            letterSpacing: '0.14em', color: 'rgba(255,140,140,0.8)', textTransform: 'uppercase',
          }}>
            {wall.title ?? 'Live Camera Network'}
          </span>
          <span style={{
            marginLeft: 'auto', fontSize: 8, fontFamily: 'monospace',
            color: 'rgba(173,198,255,0.45)', letterSpacing: '0.1em',
          }}>
            {wall.tiles.length} FEEDS
          </span>
        </div>

        {/* 3x3 grid */}
        <div style={{
          flex: 1, minHeight: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)',
          gap: 4, padding: 5,
        }}>
          {wall.tiles.map((t) => <CameraTile key={t.id} tile={t} />)}
        </div>
      </div>
    </>
  )
}

function CameraTile({ tile }: { tile: Tile }) {
  const isTracking = tile.status === 'tracking'
  const isMonitoring = tile.status === 'monitoring'

  const border = isTracking ? 'rgba(16,185,129,0.7)' : isMonitoring ? 'rgba(59,158,255,0.3)' : 'rgba(255,255,255,0.08)'

  return (
    <div style={{
      position: 'relative',
      borderRadius: 4,
      overflow: 'hidden',
      background: '#040a12',
      border: `1px solid ${border}`,
      animation: isTracking ? 'vw-track-pulse 1.6s ease-in-out infinite' : undefined,
    }}>
      {tile.image ? (
        <Image
          src={tile.image}
          alt={tile.label}
          fill
          sizes="(max-width: 1100px) 33vw, 14vw"
          style={{
            objectFit: 'cover',
            filter: isTracking ? 'brightness(0.95) saturate(1)' : 'brightness(0.55) saturate(0.5) grayscale(0.3)',
          }}
          unoptimized
        />
      ) : (
        <TilePlaceholder />
      )}

      {/* Scan lines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 3px)',
      }} />

      {/* Active scan beam on tracking tiles */}
      {isTracking && (
        <div style={{
          position: 'absolute', left: 0, right: 0, height: 40,
          background: 'linear-gradient(180deg, transparent 0%, rgba(16,185,129,0.28) 50%, transparent 100%)',
          animation: 'vw-scan 3s linear infinite',
          pointerEvents: 'none',
        }} />
      )}

      {/* Header chip */}
      <div style={{
        position: 'absolute', top: 3, left: 3, right: 3,
        display: 'flex', alignItems: 'center', gap: 3,
        pointerEvents: 'none',
      }}>
        <span style={{
          width: 5, height: 5, borderRadius: '50%',
          background: isTracking ? '#10B981' : isMonitoring ? '#3B9EFF' : 'rgba(255,255,255,0.3)',
          animation: isTracking ? 'vw-rec-dot 1.2s ease-in-out infinite' : undefined,
        }} />
        <span style={{
          fontFamily: 'monospace', fontSize: 7, fontWeight: 800,
          color: isTracking ? '#10B981' : isMonitoring ? '#adc6ff' : 'rgba(255,255,255,0.4)',
          letterSpacing: '0.08em', textShadow: '0 1px 2px rgba(0,0,0,0.9)',
        }}>
          {tile.id}
        </span>
        {isTracking && (
          <span style={{
            marginLeft: 'auto',
            fontFamily: 'monospace', fontSize: 6, fontWeight: 900,
            background: 'rgba(16,185,129,0.28)', border: '1px solid rgba(16,185,129,0.6)',
            color: '#10B981', padding: '1px 4px', borderRadius: 2,
            letterSpacing: '0.14em',
          }}>
            TRACKING
          </span>
        )}
      </div>

      {/* Footer label */}
      <div style={{
        position: 'absolute', bottom: 3, left: 3, right: 3,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 3, pointerEvents: 'none',
      }}>
        <span style={{
          fontFamily: 'monospace', fontSize: 7, fontWeight: 600,
          color: 'rgba(255,255,255,0.78)',
          letterSpacing: '0.06em',
          textShadow: '0 1px 2px rgba(0,0,0,0.95)',
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>
          {tile.label}
        </span>
      </div>
    </div>
  )
}

function TilePlaceholder() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: `
        repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 4px, transparent 4px, transparent 8px),
        radial-gradient(ellipse at center, rgba(59,158,255,0.05) 0%, transparent 70%),
        #060d18
      `,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <span className="material-symbols-outlined" style={{
        fontSize: 20, color: 'rgba(173,198,255,0.25)',
      }}>videocam</span>
    </div>
  )
}
