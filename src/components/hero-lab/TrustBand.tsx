/* Trust & performance band.

   Restores two blocks the redesign dropped versus the production homepage:
   the SOC 2 / encryption / RBAC security section, and the quantified dispatch
   stat ("under 90 seconds vs 4–6 minutes on legacy CAD"). Both were carrying
   weight — the security block for B2G buyer trust, the stat as the page's
   most citable line for AI Overviews.

   Copy is lifted verbatim from src/app/[locale]/page.tsx so the two homepages
   make identical claims. Styled with the .eco-* light-theme conventions. */

type Loc = { en: string; es: string }

const T: Record<string, Loc> = {
  eyebrow: { en: 'PROVEN & SECURE', es: 'PROBADO Y SEGURO' },
  title: {
    en: 'Built for the standards public safety agencies answer to.',
    es: 'Construido para los estándares que exigen las agencias de seguridad pública.',
  },
  speedTag: { en: 'SECONDS MATTER', es: 'LOS SEGUNDOS CUENTAN' },
  speedHead: { en: 'Under 90 seconds, end to end', es: 'Menos de 90 segundos, de principio a fin' },
  speedBody: {
    en: 'From 911 call intake to unit recommendation to field deployment — the average dispatch cycle runs under 90 seconds on KabatOne vs. 4–6 minutes on legacy CAD systems.',
    es: 'Desde la recepción de llamadas 911 hasta la recomendación de unidades y el despliegue — el ciclo de despacho promedio es menor a 90 segundos en KabatOne vs. 4–6 minutos en sistemas CAD heredados.',
  },
  secTag: { en: 'SOC 2 CERTIFIED', es: 'CERTIFICADO SOC 2' },
  secHead: { en: 'Enterprise-grade security', es: 'Seguridad de nivel empresarial' },
  secBody: {
    en: 'SOC 2 Type II certified. End-to-end encryption. Role-based access controls. Built from the ground up for law enforcement data standards.',
    es: 'Certificado SOC 2 Tipo II. Cifrado de extremo a extremo. Controles de acceso basados en roles. Construido desde cero para estándares de datos policiales.',
  },
  stdTag: { en: 'STANDARDS-BASED', es: 'BASADO EN ESTÁNDARES' },
  stdHead: { en: 'NG911, CAD and VMS interoperability', es: 'Interoperabilidad NG911, CAD y VMS' },
  stdBody: {
    en: 'NG911-ready call handling, standards-based CAD interfaces, and ONVIF/RTSP VMS integration — so K1 joins the systems a C5 or command center already runs instead of replacing them.',
    es: 'Manejo de llamadas listo para NG911, interfaces CAD basadas en estándares e integración VMS ONVIF/RTSP — para que K1 se sume a los sistemas que un C5 o centro de mando ya opera en lugar de reemplazarlos.',
  },
}

export default function TrustBand({ es }: { es: boolean }) {
  const l = es ? 'es' : 'en'
  const cards = [
    { tag: T.speedTag[l], head: T.speedHead[l], body: T.speedBody[l] },
    { tag: T.secTag[l], head: T.secHead[l], body: T.secBody[l] },
    { tag: T.stdTag[l], head: T.stdHead[l], body: T.stdBody[l] },
  ]

  return (
    <section className="tbd" aria-labelledby="tbd-title">
      <div className="tbd-wrap">
        <div className="tbd-head">
          <span className="tbd-eyebrow">{T.eyebrow[l]}</span>
          <h2 className="tbd-title" id="tbd-title">{T.title[l]}</h2>
        </div>

        <div className="tbd-grid">
          {cards.map((c) => (
            <article className="tbd-card" key={c.tag}>
              <span className="tbd-tag">{c.tag}</span>
              <h3 className="tbd-card-head">{c.head}</h3>
              <p className="tbd-card-body">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
