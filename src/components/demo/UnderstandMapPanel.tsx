'use client'

import { useEffect, useRef } from 'react'

interface UnderstandMapPanelProps {
  incidentCoords: [number, number]
  label?: string
  unitCoords?: [number, number]
  unitLabel?: string
  route?: [number, number][]
  /** Optional camera positions to render as CCTV icons */
  cameraCoords?: Array<{ coords: [number, number]; label: string }>
}

let cssLoaded = false

export default function UnderstandMapPanel({
  incidentCoords,
  unitCoords,
  route,
  cameraCoords,
}: UnderstandMapPanelProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const instanceRef = useRef<import('leaflet').Map | null>(null)

  useEffect(() => {
    if (!mapRef.current || instanceRef.current) return

    let cancelled = false
    let ro: ResizeObserver | null = null

    const init = async () => {
      const L = (await import('leaflet')).default
      if (cancelled || !mapRef.current || instanceRef.current) return

      // Load Leaflet CSS once
      if (!cssLoaded) {
        cssLoaded = true
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        document.head.appendChild(link)
        await new Promise(r => setTimeout(r, 60))
      }

      if (cancelled || !mapRef.current || instanceRef.current) return

      // Wait until the container has real pixel dimensions
      await new Promise<void>(resolve => {
        const check = () => {
          if (!mapRef.current) { resolve(); return }
          const { width, height } = mapRef.current.getBoundingClientRect()
          if (width > 0 && height > 0) resolve()
          else requestAnimationFrame(check)
        }
        check()
      })

      if (cancelled || !mapRef.current || instanceRef.current) return

      // Delete broken default icon paths
      // @ts-expect-error leaflet internal
      delete L.Icon.Default.prototype._getIconUrl
      L.Icon.Default.mergeOptions({ iconRetinaUrl: '', iconUrl: '', shadowUrl: '' })

      const map = L.map(mapRef.current, {
        center: incidentCoords,
        zoom: 14,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
        dragging: false,
      })
      instanceRef.current = map

      // ResizeObserver keeps the map in sync with CSS layout changes
      ro = new ResizeObserver(() => { map.invalidateSize() })
      ro.observe(mapRef.current)

      // Dark tile layer
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map)

      // ── Route ──────────────────────────────────────────────────────
      const routeCoords: [number, number][] =
        route && route.length > 2 ? route : unitCoords ? [incidentCoords, unitCoords] : []

      if (routeCoords.length >= 2) {
        // Glow layer
        L.polyline(routeCoords, { color: '#00C98A', weight: 10, opacity: 0.18 }).addTo(map)
        // Solid line
        L.polyline(routeCoords, { color: '#00C98A', weight: 3, opacity: 0.95 }).addTo(map)
      }

      // ── Stolen vehicle marker ──────────────────────────────────────
      const carHtml = `
        <div style="display:flex;flex-direction:column;align-items:center;gap:0;position:relative">
          <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-58%);
            width:52px;height:52px;border-radius:50%;
            border:1.5px solid rgba(255,69,96,0.55);
            animation:up-pulse 1.6s ease-out infinite;pointer-events:none"></div>
          <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-58%);
            width:70px;height:70px;border-radius:50%;
            border:1px solid rgba(255,69,96,0.25);
            animation:up-pulse 1.6s ease-out infinite 0.55s;pointer-events:none"></div>
          <div style="width:36px;height:36px;border-radius:50%;
            background:rgba(255,69,96,0.18);
            border:2.5px solid #FF4560;
            box-shadow:0 0 20px rgba(255,69,96,0.75),inset 0 0 10px rgba(255,69,96,0.2);
            display:flex;align-items:center;justify-content:center;z-index:1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 11L7 5H17L19 11M5 11H19M5 11L3 13V17H6M19 11L21 13V17H18M6 17V19M18 17V19M6 17H18" stroke="#FF4560" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div style="margin-top:4px;padding:2px 8px;border-radius:3px;
            background:#FF4560;
            font-family:monospace;font-size:9px;font-weight:800;
            letter-spacing:0.14em;color:#fff;white-space:nowrap;
            box-shadow:0 2px 10px rgba(255,69,96,0.6)">
            7JKY442
          </div>
          <div style="margin-top:2px;font-family:monospace;font-size:7px;font-weight:700;
            letter-spacing:0.1em;color:rgba(255,100,100,0.9)">● STOLEN</div>
        </div>
        <style>
          @keyframes up-pulse {
            0%  { opacity:.65; transform:translate(-50%,-58%) scale(1); }
            100%{ opacity:0;   transform:translate(-50%,-58%) scale(2.4); }
          }
        </style>
      `
      L.marker(incidentCoords, {
        icon: L.divIcon({ className: '', html: carHtml, iconSize: [80, 88], iconAnchor: [40, 44] }),
      }).addTo(map)

      // ── Intercept / unit marker ────────────────────────────────────
      if (unitCoords) {
        const interceptHtml = `
          <div style="display:flex;flex-direction:column;align-items:center;gap:0">
            <div style="width:26px;height:26px;border-radius:50%;
              background:rgba(59,158,255,0.18);
              border:2.5px solid #3B9EFF;
              box-shadow:0 0 14px rgba(59,158,255,0.7);
              display:flex;align-items:center;justify-content:center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="4" fill="#3B9EFF"/>
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#3B9EFF" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <div style="margin-top:3px;padding:2px 7px;border-radius:3px;
              background:#3B9EFF;
              font-family:monospace;font-size:8px;font-weight:800;
              letter-spacing:0.1em;color:#fff;white-space:nowrap;
              box-shadow:0 2px 8px rgba(59,158,255,0.5)">
              12-CHARLIE
            </div>
          </div>
        `
        L.marker(unitCoords, {
          icon: L.divIcon({ className: '', html: interceptHtml, iconSize: [80, 52], iconAnchor: [40, 22] }),
        }).addTo(map)
      }

      // ── Camera markers ─────────────────────────────────────────────
      const cameras = cameraCoords ?? [
        // Default: CAM 402 placed slightly east of the incident (where vehicle was first detected)
        { coords: [incidentCoords[0] + 0.0015, incidentCoords[1] + 0.006] as [number, number], label: 'CAM 402' },
      ]

      cameras.forEach(cam => {
        const camHtml = `
          <div style="display:flex;flex-direction:column;align-items:center;gap:0">
            <div style="width:22px;height:22px;border-radius:5px;
              background:rgba(255,176,32,0.18);
              border:2px solid rgba(255,176,32,0.85);
              box-shadow:0 0 10px rgba(255,176,32,0.45);
              display:flex;align-items:center;justify-content:center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M15 10L20 7V17L15 14V10Z" fill="rgba(255,176,32,0.9)" stroke="#FFB020" stroke-width="1.5" stroke-linejoin="round"/>
                <rect x="2" y="8" width="14" height="8" rx="2" fill="rgba(255,176,32,0.18)" stroke="#FFB020" stroke-width="1.5"/>
                <circle cx="9" cy="12" r="2" fill="#FFB020"/>
              </svg>
            </div>
            <div style="margin-top:3px;padding:1px 5px;border-radius:3px;
              background:rgba(255,176,32,0.85);
              font-family:monospace;font-size:7px;font-weight:800;
              letter-spacing:0.1em;color:#000;white-space:nowrap">
              ${cam.label}
            </div>
          </div>
        `
        L.marker(cam.coords, {
          icon: L.divIcon({ className: '', html: camHtml, iconSize: [50, 44], iconAnchor: [25, 22] }),
        }).addTo(map)
      })

      // ── Fit bounds ─────────────────────────────────────────────────
      const allPoints: [number, number][] = [incidentCoords]
      if (unitCoords) allPoints.push(unitCoords)
      cameras.forEach(c => allPoints.push(c.coords))
      map.fitBounds(L.latLngBounds(allPoints), { padding: [52, 52] })

      // ── Label CSS ──────────────────────────────────────────────────
      if (!document.getElementById('understand-map-style')) {
        const style = document.createElement('style')
        style.id = 'understand-map-style'
        style.textContent = `.leaflet-tooltip-top::before { display:none!important; }`
        document.head.appendChild(style)
      }
    }

    init()

    return () => {
      cancelled = true
      ro?.disconnect()
      if (instanceRef.current) { instanceRef.current.remove(); instanceRef.current = null }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div ref={mapRef} style={{ width: '100%', height: '100%', minHeight: 280 }} />
}
