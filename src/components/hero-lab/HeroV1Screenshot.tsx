/* Hero direction 1 — unified admin console hero.
   Shows the actual admin surface (map, video, dispatch, events in one
   dashboard) so a visitor immediately reads "one platform, several modules."
   Console image is AI-generated (concept-4-admin) — swap for a real product
   screenshot before this ships to production. */

import Image from 'next/image'
import ProofBar from './ProofBar'

export default function HeroV1Screenshot({ es }: { es: boolean }) {
  return (
    <div className="dark-section hl-hero-wrap">
      <div className="hl-hero">
        <div>
          <div className="hl-eyebrow">
            <span className="hl-eyebrow-dot" />
            {es ? 'Plataforma de Seguridad Pública' : 'Public Safety Platform'}
          </div>
          <h1 className="hl-headline">
            {es ? (
              <>Convierte sistemas dispersos en <em>respuesta coordinada.</em></>
            ) : (
              <>Turn fragmented systems into <em>coordinated response.</em></>
            )}
          </h1>
          <p className="hl-sub">
            {es
              ? 'KabatOne unifica despacho, video, GIS, gestión de incidentes, analítica y equipos móviles en una sola plataforma — sobre la infraestructura que ya tienes.'
              : 'KabatOne unifies dispatch, video, GIS, incident management, analytics, and mobile teams into one platform — built on the infrastructure you already have.'}
          </p>
          <div className="hl-ctas">
            <a className="hl-btn-primary" href="#demo">
              {es ? 'Solicita una Demo' : 'Book a Demo'}
              <svg className="hl-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a className="hl-btn-ghost" href="#platform">
              {es ? 'Explorar la plataforma' : 'Explore the Platform'}
            </a>
          </div>
        </div>

        <div className="hl-visual">
          <div className="hl-console-frame">
            <div className="hl-console">
              <div className="hl-console-bar">
                <span className="hl-console-dot" />
                <span className="hl-console-dot" />
                <span className="hl-console-dot" />
                <span className="hl-console-title">KABATONE · {es ? 'OPERACIONES' : 'OPERATIONS'}</span>
                <span className="hl-console-live">
                  <span className="hl-live-dot" />LIVE
                </span>
              </div>
              <div className="hl-console-body">
                <Image
                  src="/images/hero-lab/concept-4-admin.webp"
                  alt={es
                    ? 'Panel de administración unificado con mapa en vivo, muro de video, cola de despacho y tablero de eventos'
                    : 'Unified admin dashboard with live map, video wall, dispatch queue, and event board'}
                  fill
                  sizes="(max-width: 980px) 90vw, 600px"
                  priority
                />
              </div>
            </div>
            <div className="hl-chip hl-chip-1">
              <span className="hl-chip-dot" style={{ color: 'var(--k-dispatch, #ef4444)' }}>●</span>
              {es ? 'Incidente enriquecido' : 'Incident enriched'}
            </div>
            <div className="hl-chip hl-chip-2">
              <span className="hl-chip-dot" style={{ color: 'var(--cyan)' }}>◆</span>
              {es ? 'Una consola, todos los módulos' : 'One console, every module'}
            </div>
          </div>
        </div>
      </div>
      <ProofBar es={es} />
    </div>
  )
}
