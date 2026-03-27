'use client'

import { useEffect, useRef } from 'react'

interface MarkerDef {
  lat: number
  lng: number
  type: 'incident' | 'unit' | 'camera'
  label?: string
}

interface LeafletMapProps {
  center?: [number, number]
  zoom?: number
  markers?: MarkerDef[]
  style?: React.CSSProperties
}

let leafletCssLoaded = false

export default function LeafletMap({
  center = [19.4326, -99.1332],
  zoom = 15,
  markers = [],
  style,
}: LeafletMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Guard against double-mount in React StrictMode
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((containerRef.current as any)._leaflet_id) return

    let map: import('leaflet').Map | null = null
    let cancelled = false

    const init = async () => {
      const L = (await import('leaflet')).default
      if (cancelled || !containerRef.current) return

      // Load CSS once globally
      if (!leafletCssLoaded) {
        leafletCssLoaded = true
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        document.head.appendChild(link)
      }

      // Fix default icon path issue with Next.js/webpack
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      })

      // Guard again after await (StrictMode cleanup may have run)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (cancelled || !containerRef.current || (containerRef.current as any)._leaflet_id) return

      map = L.map(containerRef.current, {
        center,
        zoom,
        zoomControl: false,
        attributionControl: false,
      })

      // CartoDB Dark Matter — perfect dark tactical look
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map)

      // Add custom HTML markers
      markers.forEach((m, idx) => {
        const color =
          m.type === 'incident' ? '#ef4444' : m.type === 'unit' ? '#22c55e' : '#06b6d4'

        const glowSize = m.type === 'incident' ? 12 : 8
        const dotSize = m.type === 'incident' ? 14 : 10

        const icon = L.divIcon({
          html: `
            <div style="position:relative;display:flex;align-items:center;justify-content:center;">
              <div style="
                width:${dotSize}px;height:${dotSize}px;border-radius:50%;
                background:${color};border:2px solid #fff;
                box-shadow:0 0 ${glowSize}px ${color};
              "></div>
              ${m.label ? `
                <span style="
                  position:absolute;top:-17px;left:${dotSize + 2}px;
                  font-size:9px;font-weight:700;color:${color};
                  background:rgba(0,0,0,0.85);padding:1px 5px;
                  white-space:nowrap;font-family:monospace;letter-spacing:.5px;
                ">${m.label}</span>
              ` : ''}
            </div>
          `,
          className: '',
          iconSize: [dotSize + 20, dotSize + 20],
          iconAnchor: [(dotSize + 20) / 2, (dotSize + 20) / 2],
        })

        if (map) L.marker([m.lat, m.lng], { icon }).addTo(map)
        void idx
      })
    }

    init()

    return () => {
      cancelled = true
      if (map) {
        map.remove()
        map = null
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height: '100%', minHeight: 200, ...style }}
    />
  )
}
