'use client'

import { useEffect, useRef } from 'react'

interface Camera {
  coords: [number, number]
  label: string
  image?: string
  alert?: boolean
}

interface GeoPanelProps {
  caller: { coords: [number, number]; label: string }
  aeds: Array<{ coords: [number, number]; label: string }>
  cameras: Camera[]
  sosEvent?: { coords: [number, number]; label: string; sublabel?: string }
}

export default function GeoPanel({ caller, aeds, cameras, sosEvent }: GeoPanelProps) {
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

    // Inject tooltip + cam thumbnail CSS
    const style = document.createElement('style')
    style.textContent = `
      .geo-tooltip { background: rgba(8,16,26,0.9)!important; border: 1px solid rgba(173,198,255,0.3)!important; border-radius: 4px!important; color: #adc6ff!important; font-size: 9px!important; font-weight: 700!important; letter-spacing: 0.1em!important; padding: 3px 8px!important; white-space: nowrap!important; box-shadow: none!important; }
      .geo-tooltip-caller { border-color: rgba(255,69,96,0.5)!important; color: #FF8C9E!important; }
      .geo-tooltip-aed { border-color: rgba(0,201,138,0.5)!important; color: #00C98A!important; }
      .geo-tooltip-camera { border-color: rgba(173,198,255,0.4)!important; color: #adc6ff!important; }
      .leaflet-tooltip-left::before, .leaflet-tooltip-right::before { display: none!important; }
      .cam-thumb-icon { background: none!important; border: none!important; }
      .cam-thumb { display:flex;flex-direction:column;align-items:center;cursor:default; }
      .cam-thumb-img { position:relative;border-radius:3px;overflow:hidden;box-shadow:0 3px 14px rgba(0,0,0,0.9); }
      .cam-thumb-img img { width:100%;height:100%;object-fit:cover;display:block; }
      .cam-thumb-scanlines { position:absolute;inset:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.08) 2px,rgba(0,0,0,0.08) 4px);pointer-events:none; }
      .cam-thumb-rec { position:absolute;top:3px;right:4px;display:flex;align-items:center;gap:2px;background:rgba(0,0,0,0.68);padding:1px 5px;border-radius:2px; }
      .cam-thumb-rec-dot { width:4px;height:4px;border-radius:50%;background:#FF4444; }
      .cam-thumb-rec-text { color:white;font-size:7px;font-family:monospace;letter-spacing:0.05em; }
      .cam-thumb-bar { position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.8);padding:2px 5px; }
      .cam-thumb-label { font-size:7.5px;font-weight:700;font-family:monospace;letter-spacing:0.06em; }
      .cam-thumb-line { width:1px;height:7px; }
      .cam-thumb-dot { width:8px;height:8px;border-radius:50%;border:2px solid rgba(255,255,255,0.85); }
      .sos-icon { background:none!important;border:none!important; }
      .sos-card { display:flex;flex-direction:column;align-items:center; }
      .sos-card-box { background:rgba(20,4,4,0.92);border:1.5px solid rgba(255,70,70,0.75);border-radius:5px;padding:5px 10px 4px;text-align:center;box-shadow:0 0 16px rgba(255,50,50,0.35),0 3px 12px rgba(0,0,0,0.8); }
      .sos-card-label { font-size:10px;font-weight:900;font-family:monospace;letter-spacing:0.1em;color:#FF5F5F; }
      .sos-card-sub { font-size:7.5px;font-weight:700;font-family:monospace;letter-spacing:0.08em;color:rgba(255,140,158,0.7);margin-top:1px; }
      .sos-card-line { width:1.5px;height:10px;background:rgba(255,70,70,0.55); }
      .sos-card-dot { width:10px;height:10px;border-radius:50%;background:#FF4444;border:2px solid rgba(255,255,255,0.9);box-shadow:0 0 8px rgba(255,50,50,0.9); }
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
      L.circleMarker(caller.coords, {
        radius: 18, color: '#FF4560', fillOpacity: 0, weight: 1, opacity: 0.35,
      }).addTo(map)

      // AEDs / units — green dot
      aeds.forEach(({ coords, label }) => {
        L.circleMarker(coords, {
          radius: 7, color: '#00C98A', fillColor: '#00C98A',
          fillOpacity: 0.85, weight: 2,
        }).addTo(map).bindTooltip(`⊕ ${label}`, {
          permanent: true, direction: 'right', className: 'geo-tooltip geo-tooltip-aed',
        })
      })

      // Cameras — thumbnail card when image provided, fallback to circle
      cameras.forEach(({ coords, label, image, alert }) => {
        if (image) {
          const borderColor = alert ? 'rgba(255,95,95,0.75)' : 'rgba(59,158,255,0.6)'
          const dotColor    = alert ? '#FF5F5F' : '#3B9EFF'
          const dotGlow     = alert ? 'rgba(255,95,95,0.7)' : 'rgba(59,158,255,0.7)'
          const labelColor  = alert ? '#FF8C9E' : '#adc6ff'
          const lineColor   = alert ? 'rgba(255,95,95,0.45)' : 'rgba(59,158,255,0.45)'

          // Width 144, thumbnail height 91, line 7, dot 8 → total icon height 106
          const W = 144, TH = 91
          const html = `
            <div class="cam-thumb">
              <div class="cam-thumb-img" style="width:${W}px;height:${TH}px;border:1.5px solid ${borderColor};filter:grayscale(22%) contrast(1.08) brightness(0.86);">
                <img src="${image}" />
                <div class="cam-thumb-scanlines"></div>
                <div class="cam-thumb-rec">
                  <div class="cam-thumb-rec-dot" style="background:${alert ? '#FF4444' : '#FF4444'};"></div>
                  <span class="cam-thumb-rec-text">REC</span>
                </div>
                <div class="cam-thumb-bar">
                  <span class="cam-thumb-label" style="color:${labelColor};">${label}</span>
                </div>
              </div>
              <div class="cam-thumb-line" style="background:${lineColor};"></div>
              <div class="cam-thumb-dot" style="background:${dotColor};box-shadow:0 0 6px ${dotGlow};"></div>
            </div>`

          const icon = L.divIcon({
            className: 'cam-thumb-icon',
            html,
            iconSize:   [W, TH + 7 + 8],
            iconAnchor: [W / 2, TH + 7 + 8],
          })
          L.marker(coords, { icon }).addTo(map)
        } else {
          L.circleMarker(coords, {
            radius: 6, color: '#adc6ff', fillColor: '#3B9EFF',
            fillOpacity: 0.75, weight: 2,
          }).addTo(map).bindTooltip(`▣ ${label}`, {
            permanent: true, direction: 'top', className: 'geo-tooltip geo-tooltip-camera',
          })
        }
      })

      // SOS event card
      if (sosEvent) {
        const sosHtml = `
          <div class="sos-card">
            <div class="sos-card-box">
              <div class="sos-card-label">${sosEvent.label}</div>
              ${sosEvent.sublabel ? `<div class="sos-card-sub">${sosEvent.sublabel}</div>` : ''}
            </div>
            <div class="sos-card-line"></div>
            <div class="sos-card-dot"></div>
          </div>`
        const sosIcon = L.divIcon({
          className: 'sos-icon',
          html: sosHtml,
          iconSize: [170, 60],
          iconAnchor: [85, 60],
        })
        L.marker(sosEvent.coords, { icon: sosIcon, zIndexOffset: 2000 }).addTo(map)
      }

      // Fit bounds
      const allCoords = [caller.coords, ...aeds.map(a => a.coords), ...cameras.map(c => c.coords), ...(sosEvent ? [sosEvent.coords] : [])]
      map.fitBounds(L.latLngBounds(allCoords), { padding: [50, 50] })
    })
  }, [caller, aeds, cameras, sosEvent])

  return <div ref={ref} style={{ width: '100%', height: '100%' }} />
}
