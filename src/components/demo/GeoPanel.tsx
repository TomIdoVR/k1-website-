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
      .cam-thumb-img img { width:100%;height:100%;object-fit:cover;display:block;filter:brightness(0.82) contrast(1.1) saturate(0.85); }
      .cam-thumb-scanlines { position:absolute;inset:0;background:repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.12) 3px,rgba(0,0,0,0.12) 4px);pointer-events:none; }
      .cam-thumb-header { position:absolute;top:0;left:0;right:0;background:linear-gradient(to bottom,rgba(0,0,0,0.75),transparent);padding:3px 5px;display:flex;align-items:center;justify-content:space-between; }
      .cam-thumb-live { display:flex;align-items:center;gap:2px; }
      .cam-thumb-live-dot { width:4px;height:4px;border-radius:50%;background:#FF3333;animation:cam-blink 1s ease-in-out infinite; }
      .cam-thumb-live-text { color:white;font-size:6px;font-family:monospace;letter-spacing:0.1em;font-weight:700; }
      .cam-thumb-ts { color:rgba(255,255,255,0.55);font-size:6px;font-family:monospace; }
      .cam-thumb-bar { position:absolute;bottom:0;left:0;right:0;background:linear-gradient(to top,rgba(0,0,0,0.82),transparent);padding:4px 5px 3px; }
      .cam-thumb-label { font-size:7px;font-weight:700;font-family:monospace;letter-spacing:0.06em; }
      .cam-thumb-line { width:1px;height:6px; }
      .cam-thumb-dot { width:7px;height:7px;border-radius:50%;border:1.5px solid rgba(255,255,255,0.85); }
      @keyframes cam-blink { 0%,100%{opacity:1} 50%{opacity:0.2} }
      .sos-icon { background:none!important;border:none!important;z-index:9999!important; }
      .sos-card { display:flex;flex-direction:column;align-items:center;position:relative;z-index:9999; }
      .sos-card-box { background:rgba(16,2,2,0.96);border:2px solid rgba(255,60,60,0.85);border-radius:5px;padding:7px 14px 5px;text-align:center;box-shadow:0 0 20px rgba(255,40,40,0.5),0 4px 16px rgba(0,0,0,0.9);white-space:nowrap; }
      .sos-card-label { font-size:12px;font-weight:900;font-family:monospace;letter-spacing:0.1em;color:#FF4444; }
      .sos-card-sub { font-size:8.5px;font-weight:700;font-family:monospace;letter-spacing:0.08em;color:rgba(255,160,160,0.8);margin-top:2px; }
      .sos-card-line { width:2px;height:12px;background:rgba(255,60,60,0.65); }
      .sos-card-dot { width:12px;height:12px;border-radius:50%;background:#FF3333;border:2px solid rgba(255,255,255,0.95);box-shadow:0 0 12px rgba(255,40,40,1); }
    `
    document.head.appendChild(style)

    let cancelled = false
    let mapInstance: import('leaflet').Map | null = null
    let observer: ResizeObserver | null = null

    const buildMap = (L: typeof import('leaflet'), el: HTMLDivElement) => {
      if (cancelled || (el as any)._leaflet_id) return

      const map = L.map(el, {
        zoomControl: false,
        attributionControl: false,
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        keyboard: false,
      })
      mapInstance = map

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd', maxZoom: 19,
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

          const W = 112, TH = 70
          const html = `
            <div class="cam-thumb">
              <div class="cam-thumb-img" style="width:${W}px;height:${TH}px;border:1.5px solid ${borderColor};">
                <img src="${image}" />
                <div class="cam-thumb-scanlines"></div>
                <div class="cam-thumb-header">
                  <div class="cam-thumb-live">
                    <div class="cam-thumb-live-dot"></div>
                    <span class="cam-thumb-live-text">LIVE</span>
                  </div>
                  <span class="cam-thumb-ts">09:14</span>
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
            iconSize:   [W, TH + 6 + 7],
            iconAnchor: [W / 2, TH + 6 + 7],
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
          iconSize: [190, 68],
          iconAnchor: [95, 68],
        })
        L.marker(sosEvent.coords, { icon: sosIcon, zIndexOffset: 2000 }).addTo(map)
      }

      // Fit bounds
      const allCoords = [caller.coords, ...aeds.map(a => a.coords), ...cameras.map(c => c.coords), ...(sosEvent ? [sosEvent.coords] : [])]
      map.fitBounds(L.latLngBounds(allCoords), { padding: [50, 50] })

      // Keep map sized correctly as container resizes
      observer = new ResizeObserver(() => map.invalidateSize())
      observer.observe(el)
    }

    import('leaflet').then((L) => {
      const el = ref.current
      if (!el) return

      const waitForSize = () => {
        if (cancelled) return
        const { width, height } = el.getBoundingClientRect()
        if (width > 0 && height > 0) {
          buildMap(L, el)
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
  }, [caller, aeds, cameras, sosEvent])

  return <div ref={ref} style={{ width: '100%', height: '100%' }} />
}
