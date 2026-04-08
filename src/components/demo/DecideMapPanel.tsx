'use client'

import { useEffect, useRef } from 'react'

interface Unit {
  id: string
  status: string
  active: boolean
  coords: [number, number]
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
  const mapRef = useRef<ReturnType<typeof import('leaflet')['map']> | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    // Prevent double-mount
    if ((containerRef.current as HTMLElement & { _leaflet_id?: number })._leaflet_id) return

    let L: typeof import('leaflet')

    async function init() {
      L = await import('leaflet')
      await import('leaflet/dist/leaflet.css')

      const map = L.map(containerRef.current!, {
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
        dragging: true,
      })

      mapRef.current = map

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 18,
      }).addTo(map)

      const allCoords: [number, number][] = [incidentCoords]

      // Incident marker — pulsing red
      const incidentIcon = L.divIcon({
        className: '',
        html: `
          <div style="position:relative;width:20px;height:20px;display:flex;align-items:center;justify-content:center;">
            <div style="position:absolute;width:32px;height:32px;border-radius:50%;background:rgba(255,95,95,0.15);border:1.5px solid rgba(255,95,95,0.4);top:-6px;left:-6px;animation:pulse 1.5s ease-out infinite;"></div>
            <div style="width:12px;height:12px;border-radius:50%;background:#FF5F5F;border:2px solid #fff;box-shadow:0 0 10px rgba(255,95,95,0.8);"></div>
          </div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      })

      L.marker(incidentCoords, { icon: incidentIcon })
        .addTo(map)
        .bindTooltip('INCIDENT', {
          permanent: true, direction: 'top', offset: [0, -14], className: 'decide-tooltip-incident',
        })

      // Unit markers
      units.forEach((u) => {
        allCoords.push(u.coords)
        const color = statusColor(u.status)
        const unitIcon = L.divIcon({
          className: '',
          html: `
            <div style="position:relative;width:16px;height:16px;display:flex;align-items:center;justify-content:center;">
              ${u.active ? `<div style="position:absolute;width:28px;height:28px;border-radius:50%;background:${color}18;border:1px solid ${color}55;top:-6px;left:-6px;"></div>` : ''}
              <div style="width:10px;height:10px;border-radius:50%;background:${color};border:2px solid rgba(255,255,255,0.7);box-shadow:0 0 8px ${color}88;"></div>
            </div>`,
          iconSize: [16, 16],
          iconAnchor: [8, 8],
        })

        L.marker(u.coords, { icon: unitIcon })
          .addTo(map)
          .bindTooltip(u.id, {
            permanent: true, direction: 'top', offset: [0, -12], className: `decide-tooltip-unit decide-tooltip-${u.status.toLowerCase().replace(' ', '-')}`,
          })

        // Dashed line from unit to incident
        L.polyline([u.coords, incidentCoords], {
          color: u.active ? color : 'rgba(255,255,255,0.08)',
          weight: u.active ? 2 : 1,
          dashArray: u.active ? '6 4' : '3 6',
          opacity: u.active ? 0.7 : 0.25,
        }).addTo(map)
      })

      map.fitBounds(L.latLngBounds(allCoords), { padding: [40, 40] })
    }

    init()

    return () => {
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [incidentCoords, units])

  return (
    <>
      <style>{`
        .decide-tooltip-incident .leaflet-tooltip {
          background: rgba(255,95,95,0.15) !important;
          border: 1px solid rgba(255,95,95,0.5) !important;
          color: #FF8C8C !important;
          font-size: 9px !important;
          font-weight: 800 !important;
          letter-spacing: 0.2em !important;
          padding: 2px 8px !important;
          border-radius: 4px !important;
          white-space: nowrap !important;
        }
        .decide-tooltip-unit .leaflet-tooltip {
          background: rgba(8,16,26,0.9) !important;
          border: 1px solid rgba(255,255,255,0.15) !important;
          color: rgba(193,198,215,0.8) !important;
          font-size: 9px !important;
          font-weight: 700 !important;
          letter-spacing: 0.15em !important;
          padding: 2px 7px !important;
          border-radius: 3px !important;
          white-space: nowrap !important;
        }
        .decide-tooltip-assigned .leaflet-tooltip { border-color: rgba(0,201,138,0.5) !important; color: #00C98A !important; }
        .decide-tooltip-en-route .leaflet-tooltip { border-color: rgba(59,158,255,0.5) !important; color: #3B9EFF !important; }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
      <div
        ref={containerRef}
        style={{ width: '100%', height: '100%', background: '#0d1117' }}
      />
    </>
  )
}
