'use client'

import { useEffect, useRef } from 'react'

interface GeoPanelProps {
  caller: { coords: [number, number]; label: string }
  aeds: Array<{ coords: [number, number]; label: string }>
  cameras: Array<{ coords: [number, number]; label: string }>
}

export default function GeoPanel({ caller, aeds, cameras }: GeoPanelProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current || (ref.current as any)._leaflet_id) return

    // Inject Leaflet CSS once
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link')
      link.id = 'leaflet-css'
      link.rel = 'stylesheet'
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      document.head.appendChild(link)
    }

    // Inject tooltip CSS
    const style = document.createElement('style')
    style.textContent = `
      .geo-tooltip { background: rgba(8,16,26,0.9)!important; border: 1px solid rgba(173,198,255,0.3)!important; border-radius: 4px!important; color: #adc6ff!important; font-size: 9px!important; font-weight: 700!important; letter-spacing: 0.1em!important; padding: 3px 8px!important; white-space: nowrap!important; box-shadow: none!important; }
      .geo-tooltip-caller { border-color: rgba(255,69,96,0.5)!important; color: #FF8C9E!important; }
      .geo-tooltip-aed { border-color: rgba(0,201,138,0.5)!important; color: #00C98A!important; }
      .geo-tooltip-camera { border-color: rgba(173,198,255,0.4)!important; color: #adc6ff!important; }
      .leaflet-tooltip-left::before, .leaflet-tooltip-right::before { display: none!important; }
    `
    document.head.appendChild(style)

    import('leaflet').then((L) => {
      const map = L.map(ref.current!, {
        zoomControl: false,
        attributionControl: false,
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        keyboard: false,
      })

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
      }).addTo(map)

      // Caller — red pulsing ring
      L.circleMarker(caller.coords, {
        radius: 9, color: '#FF4560', fillColor: '#FF4560',
        fillOpacity: 0.9, weight: 2,
      }).addTo(map).bindTooltip(caller.label, {
        permanent: true, direction: 'right', className: 'geo-tooltip geo-tooltip-caller',
      })
      // Outer pulse ring
      L.circleMarker(caller.coords, {
        radius: 18, color: '#FF4560', fillOpacity: 0, weight: 1, opacity: 0.35,
      }).addTo(map)

      // AEDs — green cross
      aeds.forEach(({ coords, label }) => {
        L.circleMarker(coords, {
          radius: 7, color: '#00C98A', fillColor: '#00C98A',
          fillOpacity: 0.85, weight: 2,
        }).addTo(map).bindTooltip(`⊕ ${label}`, {
          permanent: true, direction: 'right', className: 'geo-tooltip geo-tooltip-aed',
        })
      })

      // Cameras — blue square (approximated as circle)
      cameras.forEach(({ coords, label }) => {
        L.circleMarker(coords, {
          radius: 6, color: '#adc6ff', fillColor: '#3B9EFF',
          fillOpacity: 0.75, weight: 2,
        }).addTo(map).bindTooltip(`▣ ${label}`, {
          permanent: true, direction: 'top', className: 'geo-tooltip geo-tooltip-camera',
        })
      })

      // Fit bounds to all markers
      const allCoords = [caller.coords, ...aeds.map(a => a.coords), ...cameras.map(c => c.coords)]
      map.fitBounds(L.latLngBounds(allCoords), { padding: [40, 40] })
    })
  }, [caller, aeds, cameras])

  return <div ref={ref} style={{ width: '100%', height: '100%' }} />
}
