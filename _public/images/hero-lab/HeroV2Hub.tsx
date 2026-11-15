/* Hero direction 2 — hub-and-spoke hero. Deliberately NOT a software
   screenshot: KabatOne at the center, modules connected around it. Same
   copy as V1 so the only variable being compared is the visual approach
   (unified admin console vs. abstract connected-modules diagram).
   Image is AI-generated (concept-5-hub) — swap for a polished brand
   illustration before this ships to production. */

import Image from 'next/image'
import ProofBar from './ProofBar'

export default function HeroV2Hub({ es }: { es: boolean }) {
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
          <div className="hl-hub-frame">
            <Image
              src="/images/hero-lab/concept-5-hub.webp"
              alt={es
                ? 'Diagrama de KabatOne en el centro conectado a seis módulos: CAD/911, GIS, video, eventos, móvil e integraciones'
                : 'Diagram of KabatOne at the center connected to six modules: CAD/911, GIS, video, events, mobile, and integrations'}
              fill
              sizes="(max-width: 980px) 90vw, 600px"
              priority
            />
          </div>
        </div>
      </div>
      <ProofBar es={es} />
    </div>
  )
}
