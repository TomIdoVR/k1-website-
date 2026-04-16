'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

type UnitType = 'police' | 'security' | 'k9' | 'ems' | 'fire'

interface MapUnit {
  id: string
  coords: [number, number]
  type?: UnitType
  status?: string
  route?: [number, number][]
}

interface CameraOverlay {
  image: string
  label: string
  sublabel?: string
  alertText?: string
  pos?: { left?: string; top?: string; right?: string; bottom?: string }
}

interface DispatchMapProps {
  incident: [number, number]
  unit: [number, number]
  incidentLabel: string
  unitLabel: string
  route?: [number, number][]
  // Optional: richer multi-unit mode
  units?: MapUnit[]
  // Optional: floating camera preview on top of the map
  camera?: CameraOverlay
}

const TYPE_FILL: Record<UnitType, string> = {
  police:   '#3B9EFF', // blue
  security: '#A371F7', // purple
  k9:       '#F5A524', // amber
  ems:      '#FF4560', // red
  fire:     '#FF7A45', // orange
}

const TYPE_LABEL_COLOR: Record<UnitType, string> = {
  police:   '#3B9EFF',
  security: '#A371F7',
  k9:       '#F5A524',
  ems:      '#FF4560',
  fire:     '#FF7A45',
}

let leafletCssLoaded = false

export default function DispatchMap({
  incident, unit, incidentLabel, unitLabel, route, units, camera,
}: DispatchMapProps) {
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

      // Collect all coords so we can fit the bounds properly
      const allCoords: [number, number][] = [incident]

      // ── Multi-unit mode ──
      if (units && units.length > 0) {
        units.forEach(u => {
          const type = u.type ?? 'police'
          const fill = TYPE_FILL[type]
          const labelColor = TYPE_LABEL_COLOR[type]

          // Per-unit route (if provided)
          if (u.route && u.route.length > 1) {
            L.polyline(u.route, {
              color: fill, weight: 7, opacity: 0.18,
            }).addTo(map!)
            L.polyline(u.route, {
              color: fill, weight: 3, opacity: 0.9,
              dashArray: u.status === 'EN ROUTE' || u.status === 'ASSIGNED' ? undefined : '6 5',
            }).addTo(map!)
            u.route.forEach(c => allCoords.push(c))
          } else {
            allCoords.push(u.coords)
          }

          // Unit marker
          L.circleMarker(u.coords, {
            radius: 8,
            color: '#fff',
            weight: 2,
            fillColor: fill,
            fillOpacity: 1,
          }).addTo(map!)
            .bindTooltip(
              `<span style="font-size:9px;font-weight:800;font-family:monospace;letter-spacing:.06em;color:${labelColor}">${u.id}</span>`,
              { permanent: true, direction: 'top', offset: [0, -12], className: 'dispatch-label-generic' }
            )
            .openTooltip()
        })
      } else {
        // ── Legacy single-unit mode ──
        const routeCoords: [number, number][] = route && route.length > 2 ? route : [incident, unit]

        L.polyline(routeCoords, {
          color: '#3B9EFF', weight: 8, opacity: 0.22,
        }).addTo(map)
        L.polyline(routeCoords, {
          color: '#3B9EFF', weight: 3.5, opacity: 0.95,
          dashArray: routeCoords.length === 2 ? '6 5' : undefined,
        }).addTo(map)

        L.circleMarker(unit, {
          radius: 9, color: '#fff', weight: 2, fillColor: '#3B9EFF', fillOpacity: 1,
        }).addTo(map)
          .bindTooltip(`<span style="font-size:9px;font-weight:800;font-family:monospace;letter-spacing:.06em;color:#3B9EFF">${unitLabel}</span>`, {
            permanent: true, direction: 'top', offset: [0, -14], className: 'dispatch-label-blue',
          })
          .openTooltip()

        allCoords.push(unit)
        routeCoords.forEach(c => allCoords.push(c))
      }

      // Incident marker — red pin (always on top)
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

      // Fit to full route with generous padding
      map.fitBounds(L.latLngBounds(allCoords), { padding: [56, 56] })

      // Inject label CSS
      if (!document.getElementById('dispatch-map-style')) {
        const style = document.createElement('style')
        style.id = 'dispatch-map-style'
        style.textContent = `
          .dispatch-label-red, .dispatch-label-blue, .dispatch-label-generic {
            background: rgba(8,16,26,0.92) !important;
            border: none !important;
            box-shadow: none !important;
            padding: 2px 7px !important;
            border-radius: 3px !important;
          }
          .dispatch-label-red     { border: 1px solid rgba(255,69,96,0.5) !important; }
          .dispatch-label-blue    { border: 1px solid rgba(59,158,255,0.5) !important; }
          .dispatch-label-generic { border: 1px solid rgba(173,198,255,0.35) !important; }
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

  // Camera overlay position — defaults to upper-left quadrant
  const camPos = camera?.pos ?? { left: '4%', top: '14%' }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: 280 }}>
      <div ref={containerRef} style={{ width: '100%', height: '100%', minHeight: 280 }} />

      {camera && (
        <div
          style={{
            position: 'absolute',
            left:   camPos.left,
            right:  camPos.right,
            top:    camPos.top,
            bottom: camPos.bottom,
            width: 'clamp(240px, 28vw, 360px)',
            borderRadius: 10,
            overflow: 'hidden',
            border: '2px solid rgba(255,69,96,0.85)',
            boxShadow: '0 14px 36px rgba(0,0,0,0.55), 0 0 0 4px rgba(255,69,96,0.12)',
            background: '#000',
            zIndex: 500,
            pointerEvents: 'none',
          }}
        >
          {/* image */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 10', background: '#111' }}>
            <Image
              src={camera.image}
              alt={camera.label}
              fill
              sizes="360px"
              style={{ objectFit: 'cover' }}
            />
            {/* label strip (top) */}
            <div
              style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: 8, padding: '6px 10px',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0))',
                color: '#fff',
                fontFamily: 'monospace',
                fontSize: 9,
                fontWeight: 800,
                letterSpacing: '0.1em',
              }}
            >
              <span style={{ textTransform: 'uppercase' }}>{camera.label}</span>
              {camera.sublabel && (
                <span style={{ color: '#adc6ff', fontWeight: 700 }}>{camera.sublabel}</span>
              )}
            </div>
          </div>
          {/* alert footer */}
          {camera.alertText && (
            <div
              style={{
                padding: '6px 10px',
                background: 'linear-gradient(to right, rgba(255,69,96,0.95), rgba(255,69,96,0.75))',
                color: '#fff',
                fontFamily: 'monospace',
                fontSize: 9,
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              ● {camera.alertText}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
