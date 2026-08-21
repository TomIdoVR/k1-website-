/* Two AI-generated concepts, per the two directions requested:
   1. The admin itself — a unified dashboard with a few modules visible.
   2. Not admin-related — modules connected to a central KabatOne hub.
   All AI-generated — swap for real product screenshots / brand art
   before this ships to production. */

import Image from 'next/image'
import HeroConsoleMock from './HeroConsoleMock'

export default function ImageConcepts({ es }: { es: boolean }) {
  return (
    <div className="hl-concepts">
      <div className="hl-concept-card">
        <div className="hl-console-frame" style={{ marginBottom: 16 }}>
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
              <HeroConsoleMock es={es} />
            </div>
          </div>
        </div>
        <h3 className="hl-concept-title">
          {es ? 'Concepto 1 — El admin en sí' : 'Concept 1 — The admin itself'}
        </h3>
        <p className="hl-concept-desc">
          {es
            ? 'Un vistazo real al panel: mapa, video, despacho y eventos en una sola pantalla — entiendes la plataforma de inmediato.'
            : 'A real look at the console: map, video, dispatch, and events on one screen — you understand the platform at a glance.'}
        </p>
      </div>

      <div className="hl-concept-card">
        <div className="hl-hub-frame" style={{ marginBottom: 16 }}>
          <Image
            src="/images/hero-lab/concept-5-hub.webp"
            alt={es
              ? 'KabatOne en el centro conectado a seis módulos'
              : 'KabatOne at the center connected to six modules'}
            fill
            sizes="(max-width: 900px) 90vw, 560px"
          />
        </div>
        <h3 className="hl-concept-title">
          {es ? 'Concepto 2 — No es un admin' : 'Concept 2 — Not admin-related'}
        </h3>
        <p className="hl-concept-desc">
          {es
            ? 'KabatOne al centro, cada módulo conectado a su alrededor — comunica la arquitectura sin aparentar ser software.'
            : 'KabatOne at the center, each module connected around it — communicates the architecture without pretending to be software.'}
        </p>
      </div>
    </div>
  )
}
