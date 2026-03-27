'use client'

import dynamic from 'next/dynamic'

const LeafletMap = dynamic(() => import('./LeafletMap'), { ssr: false })

interface MarkerDef {
  lat: number
  lng: number
  type: 'incident' | 'unit' | 'camera'
  label?: string
}

interface MapViewProps {
  style?: React.CSSProperties
  /** Overlay children (badges, labels on top of map) */
  children?: React.ReactNode
  center?: [number, number]
  zoom?: number
  markers?: MarkerDef[]
}

// Mexico City Centro — Zócalo area
const DEFAULT_CENTER: [number, number] = [19.4326, -99.1332]
const DEFAULT_MARKERS: MarkerDef[] = [
  { lat: 19.4326, lng: -99.1332, type: 'incident', label: 'INCIDENT' },
  { lat: 19.4360, lng: -99.1380, type: 'unit', label: 'P-104 · 2:30' },
  { lat: 19.4290, lng: -99.1290, type: 'unit', label: 'P-108 · 3:45' },
  { lat: 19.4380, lng: -99.1260, type: 'unit', label: 'P-112 · 5:10' },
]

export default function MapView({
  style,
  children,
  center = DEFAULT_CENTER,
  zoom = 15,
  markers = DEFAULT_MARKERS,
}: MapViewProps) {
  return (
    <div style={{
      position: 'relative',
      overflow: 'hidden',
      minHeight: 300,
      ...style,
    }}>
      <LeafletMap center={center} zoom={zoom} markers={markers} style={{ height: '100%', width: '100%' }} />

      {/* Tactical overlay: thin border + corner coords */}
      <div style={{
        position: 'absolute',
        inset: 0,
        border: '1px solid rgba(6,182,212,0.2)',
        pointerEvents: 'none',
        zIndex: 400,
      }} />
      <div style={{
        position: 'absolute',
        bottom: 8, right: 10,
        fontSize: 9, color: 'rgba(255,255,255,0.5)',
        fontFamily: 'monospace', letterSpacing: 0.5,
        background: 'rgba(0,0,0,0.5)', padding: '2px 6px',
        zIndex: 400, pointerEvents: 'none',
      }}>
        {center[0].toFixed(4)}° N, {Math.abs(center[1]).toFixed(4)}° W
      </div>

      {/* Children (additional overlays if needed) */}
      {children && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 500, pointerEvents: 'none' }}>
          {children}
        </div>
      )}
    </div>
  )
}
