'use client'

import { useEffect, useRef } from 'react'

interface Unit {
  id: string
  status: string
  active: boolean
  coords: [number, number]
  route?: [number, number][]
}

interface DecideMapPanelProps {
  incidentCoords: [number, number]
  units: Unit[]
}

function statusColor(status: string): string {
  if (status === 'ASSIGNED') return '#00C98A'
  if (status === 'EN ROUTE') return '#3B9EFF'
  if (status === 'STANDBY') return '#f0c040'
  return 'rgba(193,198,215,0.45)'
}

export default function DecideMapPanel({ incidentCoords, units }: DecideMapPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let cancelled = false
    let mapInstance: import('leaflet').Map | null = null
    let observer: ResizeObserver | null = null

    // Inject Leaflet CSS once
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link')
      link.id = 'leaflet-css'
      link.rel = 'stylesheet'
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      document.head.appendChild(link)
    }

    const buildMap = (L: typeof import('leaflet')) => {
      if (cancelled || !el || (el as any)._leaflet_id) return

      const map = L.map(el, {
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
        dragging: false,
        touchZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
      })
      mapInstance = map

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd', maxZoom: 19,
      }).addTo(map)

      const allCoords: [number, number][] = [incidentCoords]

      // Incident marker
      const incidentIcon = L.divIcon({
        className: '',
        html: `<div style="position:relative;width:20px;height:20px;display:flex;align-items:center;justify-content:center;">
          <div style="position:absolute;width:32px;height:32px;border-radius:50%;background:rgba(255,95,95,0.15);border:1.5px solid rgba(255,95,95,0.4);top:-6px;left:-6px;animation:decide-pulse 1.5s ease-out infinite;"></div>
          <div style="width:12px;height:12px;border-radius:50%;background:#FF5F5F;border:2px solid #fff;box-shadow:0 0 10px rgba(255,95,95,0.8);"></div>
        </div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      })
      L.marker(incidentCoords, { icon: incidentIcon }).addTo(map)
        .bindTooltip('INCIDENT', { permanent: true, direction: 'top', offset: [0, -14], className: 'decide-tt-incident' })

      // Draw markers + routes for all units
      units.forEach((u) => {
        allCoords.push(u.coords)
        const c = statusColor(u.status)
        const icon = L.divIcon({
          className: '',
          html: `<div style="position:relative;width:16px;height:16px;display:flex;align-items:center;justify-content:center;">
            ${u.active ? `<div style="position:absolute;width:28px;height:28px;border-radius:50%;background:${c}18;border:1px solid ${c}55;top:-6px;left:-6px;"></div>` : ''}
            <div style="width:10px;height:10px;border-radius:50%;background:${c};border:2px solid rgba(255,255,255,0.7);box-shadow:0 0 8px ${c}88;"></div>
          </div>`,
          iconSize: [16, 16],
          iconAnchor: [8, 8],
        })
        const slug = u.status.toLowerCase().replace(' ', '-')
        L.marker(u.coords, { icon }).addTo(map)
          .bindTooltip(u.id, { permanent: true, direction: 'top', offset: [0, -12], className: `decide-tt-unit decide-tt-${slug}` })

        if (u.active) {
          const routeCoords: [number, number][] = u.route && u.route.length > 2 ? u.route : [u.coords, incidentCoords]
          L.polyline(routeCoords, { color: c, weight: 6, opacity: 0.12 }).addTo(map)
          L.polyline(routeCoords, { color: c, weight: 2.5, opacity: 0.85, dashArray: '8 5' }).addTo(map)
        } else {
          L.polyline([u.coords, incidentCoords], {
            color: 'rgba(255,255,255,0.08)', weight: 1, dashArray: '3 6', opacity: 0.25,
          }).addTo(map)
        }
      })

      map.fitBounds(L.latLngBounds(allCoords), { padding: [40, 40] })

      observer = new ResizeObserver(() => map.invalidateSize())
      observer.observe(el)
    }

    import('leaflet').then((L) => {
      const waitForSize = () => {
        if (cancelled) return
        const { width, height } = el.getBoundingClientRect()
        if (width > 0 && height > 0) {
          buildMap(L)
        } else {
          requestAnimationFrame(waitForSize)
        }
      }
      requestAnimationFrame(waitForSize)
    })

    return () => {
      cancelled = true
      observer?.disconnect()
      mapInstance?.remove()
      mapInstance = null
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  // Empty deps: map is purely decorative, no need to re-init on prop changes

  return (
    <>
      <style>{`
        @keyframes decide-pulse { 0%{transform:scale(1);opacity:0.8} 100%{transform:scale(2.2);opacity:0} }
        .decide-tt-incident .leaflet-tooltip {
          background:rgba(255,95,95,0.15)!important;border:1px solid rgba(255,95,95,0.5)!important;
          color:#FF8C8C!important;font-size:9px!important;font-weight:800!important;
          letter-spacing:0.2em!important;padding:2px 8px!important;border-radius:4px!important;white-space:nowrap!important;
        }
        .decide-tt-unit .leaflet-tooltip {
          background:rgba(8,16,26,0.9)!important;border:1px solid rgba(255,255,255,0.15)!important;
          color:rgba(193,198,215,0.8)!important;font-size:9px!important;font-weight:700!important;
          letter-spacing:0.15em!important;padding:2px 7px!important;border-radius:3px!important;white-space:nowrap!important;
        }
        .decide-tt-assigned .leaflet-tooltip { border-color:rgba(0,201,138,0.5)!important;color:#00C98A!important; }
        .decide-tt-en-route .leaflet-tooltip { border-color:rgba(59,158,255,0.5)!important;color:#3B9EFF!important; }
      `}</style>
      <div
        ref={containerRef}
        style={{ width: '100%', height: '100%', background: '#0d1520', pointerEvents: 'none' }}
      />
    </>
  )
}
