'use client'

import { useEffect, useRef } from 'react'

interface DispatchMapProps {
  incident: [number, number]
  unit: [number, number]
  incidentLabel: string
  unitLabel: string
  route?: [number, number][]
}

let leafletCssLoaded = false

export default function DispatchMap({ incident, unit, incidentLabel, unitLabel, route }: DispatchMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((containerRef.current as any)._leaflet_id) return

    let map: import('leaflet').Map | null = null
    let cancelled = false
    let ro: ResizeObserver | null = null

    const init = async () => {
      const L = (await import('leaflet')).default
      if (cancelled || !containerRef.current) return

      if (!leafletCssLoaded) {
        leafletCssLoaded = true
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        document.head.appendChild(link)
        await new Promise(r => setTimeout(r, 60))
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (cancelled || !containerRef.current || (containerRef.current as any)._leaflet_id) return

      // Wait for the container to have real pixel dimensions before initialising Leaflet
      await new Promise<void>(resolve => {
        const check = () => {
          const el = containerRef.current
          if (!el) { resolve(); return }
          const { width, height } = el.getBoundingClientRect()
          if (width > 0 && height > 0) { resolve() }
          else { requestAnimationFrame(check) }
        }
        check()
      })

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (cancelled || !containerRef.current || (containerRef.current as any)._leaflet_id) return

      map = L.map(containerRef.current, {
        center: [(incident[0] + unit[0]) / 2, (incident[1] + unit[1]) / 2],
        zoom: 14,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
        dragging: false,
      })

      // Use ResizeObserver so Leaflet stays in sync with CSS layout changes
      ro = new ResizeObserver(() => { map?.invalidateSize() })
      ro.observe(containerRef.current)

      // Dark tile layer — CartoCDN dark_all (streets + labels on black background)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map)

      if (cancelled || !map) return

      const routeCoords: [number, number][] = route && route.length > 2 ? route : [incident, unit]

      // Route glow (wider, lower opacity) + solid line on top
      L.polyline(routeCoords, {
        color: '#3B9EFF',
        weight: 8,
        opacity: 0.22,
      }).addTo(map)
      L.polyline(routeCoords, {
        color: '#3B9EFF',
        weight: 3.5,
        opacity: 0.95,
        dashArray: routeCoords.length === 2 ? '6 5' : undefined,
      }).addTo(map)

      // Incident marker — red pin
      L.circleMarker(incident, {
        radius: 9,
        color: '#fff',
        weight: 2,
        fillColor: '#FF4560',
        fillOpacity: 1,
      }).addTo(map)
        .bindTooltip(`<span style="font-size:9px;font-weight:800;font-family:monospace;letter-spacing:.06em;color:#FF4560">${incidentLabel}</span>`, {
          permanent: true,
          direction: 'top',
          offset: [0, -14],
          className: 'dispatch-label-red',
        })
        .openTooltip()

      // Pulse ring around incident
      L.circleMarker(incident, {
        radius: 18,
        color: '#FF4560',
        weight: 1.5,
        fillOpacity: 0,
        opacity: 0.45,
      }).addTo(map)

      // Unit marker — blue pin
      L.circleMarker(unit, {
        radius: 9,
        color: '#fff',
        weight: 2,
        fillColor: '#3B9EFF',
        fillOpacity: 1,
      }).addTo(map)
        .bindTooltip(`<span style="font-size:9px;font-weight:800;font-family:monospace;letter-spacing:.06em;color:#3B9EFF">${unitLabel}</span>`, {
          permanent: true,
          direction: 'top',
          offset: [0, -14],
          className: 'dispatch-label-blue',
        })
        .openTooltip()

      // Fit to full route with generous padding
      map.fitBounds(L.latLngBounds(routeCoords), { padding: [56, 56] })

      // Inject label CSS
      if (!document.getElementById('dispatch-map-style')) {
        const style = document.createElement('style')
        style.id = 'dispatch-map-style'
        style.textContent = `
          .dispatch-label-red, .dispatch-label-blue {
            background: rgba(8,16,26,0.92) !important;
            border: none !important;
            box-shadow: none !important;
            padding: 2px 7px !important;
            border-radius: 3px !important;
          }
          .dispatch-label-red  { border: 1px solid rgba(255,69,96,0.5) !important; }
          .dispatch-label-blue { border: 1px solid rgba(59,158,255,0.5) !important; }
          .leaflet-tooltip-top::before { display: none !important; }
        `
        document.head.appendChild(style)
      }
    }

    init()

    return () => {
      cancelled = true
      ro?.disconnect()
      if (map) { map.remove(); map = null }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div ref={containerRef} style={{ width: '100%', height: '100%', minHeight: 280 }} />
}
