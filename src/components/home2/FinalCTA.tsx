/* Homepage v2 — final CTA: infrastructure-mapping demo booking */

import { Link } from '@/i18n/navigation'

export default function FinalCTA({ es }: { es: boolean }) {
  return (
    <section className="cta-section">
      <div className="cta-bg" aria-hidden="true">
        <div className="cta-grid-lines" />
        <div className="cta-glow" />
        <div className="cta-scan" />
      </div>

      <div className="cta-inner">
        <div className="cta-eyebrow">
          <span className="cta-eyebrow-dot" />
          <span>{es ? 'EMPIEZA AQUÍ' : 'START HERE'}</span>
        </div>

        <h2 className="cta-title">
          {es ? (
            <>
              Mapea KabatOne a
              <br />
              <em>tu infraestructura.</em>
            </>
          ) : (
            <>
              Map KabatOne to
              <br />
              <em>your infrastructure.</em>
            </>
          )}
        </h2>

        <p className="cta-sub">
          {es
            ? 'Agenda una sesión de trabajo y te mostramos cómo KabatOne se conecta con tus cámaras, CAD, GIS, sensores y radio existentes — modernizando tu operación sobre lo que ya tienes.'
            : 'Book a working session and see how KabatOne connects to your existing cameras, CAD, GIS, sensors, and radio — modernizing your operation on the infrastructure you already have.'}
        </p>

        <div className="cta-actions">
          <Link href="/demo" className="cta-btn cta-btn-primary">
            {es ? 'Mapea tu infraestructura' : 'Map to Your Infrastructure'}
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path d="M3 7.5h8.5M7.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link href="/contact" className="cta-btn cta-btn-ghost">
            {es ? 'Hablar con ventas' : 'Talk to sales'}
          </Link>
        </div>

        <div className="cta-trust">
          <span className="cta-trust-item">{es ? 'Certificado SOC 2 Tipo II' : 'SOC 2 Type II certified'}</span>
          <span className="cta-trust-sep" />
          <span className="cta-trust-item">{es ? 'Implementación guiada' : 'Guided implementation'}</span>
          <span className="cta-trust-sep" />
          <span className="cta-trust-item">{es ? 'Soporte 24/7' : '24/7 support'}</span>
        </div>
      </div>
    </section>
  )
}
