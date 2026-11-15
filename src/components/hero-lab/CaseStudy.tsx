/* Case study — proven in the field.
   Ported from the Claude Design project "Kabat One Website"
   (the CustomerProof component in home/proof.jsx + home/proof.css).

   A photo-led metric hero (10,000+ connected sensors & cameras, Michoacán
   statewide deployment) over operational-impact bullets, deployment-scope
   metrics, and a customer quote. Only approved, verifiable figures per the
   design's own comment — no invented counts.

   The command-center photo is an AI-generated stand-in (no real photo
   asset exists in the source project — it was an empty image-slot
   placeholder there too) — swap for real photography before this ships. */

import Image from 'next/image'

type Loc = { en: string; es: string }
const TP = (en: string, es: string): Loc => ({ en, es })

const IMPACT: Loc[] = [
  TP('One unified operational picture', 'Una sola imagen operativa'),
  TP('Faster incident coordination', 'Coordinación de incidentes más rápida'),
  TP('Cross-agency collaboration', 'Colaboración entre agencias'),
  TP('Shared situational awareness', 'Conciencia situacional compartida'),
  TP('Statewide command visibility', 'Visibilidad de mando estatal'),
]

/* `v` was typed as a bare string, so "Statewide" and "Multi-agency" rendered
   untranslated on /es while their labels localized correctly. Values that are
   words need the same Loc treatment; "24/7" is genuinely locale-invariant. */
const METRICS: { v: Loc | string; l: Loc }[] = [
  { v: TP('Statewide', 'Estatal'), l: TP('Unified operations', 'Operaciones unificadas') },
  { v: TP('Multi-agency', 'Multiagencia'), l: TP('Shared situational awareness', 'Conciencia situacional compartida') },
  { v: '24/7', l: TP('Mission-critical use', 'Uso de misión crítica') },
]

const QUOTE = TP(
  '"For the first time our operators work from a single operational picture — cameras, dispatch, GIS, and field units, in one platform."',
  '"Por primera vez nuestros operadores trabajan desde una sola imagen operativa — cámaras, despacho, GIS y unidades de campo, en una plataforma."',
)
const ROLE = TP('Command Center Operations', 'Operaciones del Centro de Mando')

export default function CaseStudy({ es }: { es: boolean }) {
  const lang = es ? 'es' : 'en'

  return (
    <section className="cust" id="customers">
      <div className="cust-wrap">
        <div className="cust-eyebrow">{es ? 'PROBADO EN CAMPO' : 'PROVEN IN THE FIELD'}</div>

        <div className="cust-hero">
          <Image
            src="/images/case-study/command-center.webp"
            alt={es
              ? 'Centro de mando estatal con operadores y videowall'
              : 'Statewide command center with operators and video wall'}
            fill
            sizes="(max-width: 900px) 100vw, 1240px"
            className="cust-photo"
            /* No `priority`. This photo sits far below the fold — the case
               study is the seventh section — but `priority` made Next emit a
               <head> preload for it, so the browser fetched it in parallel
               with the hero art and the two competed for bandwidth during the
               exact window that decides LCP. Confirmed on the deployed build:
               two image preloads in <head>, this being the larger at 38KB.

               Without it the image lazy-loads when it approaches the viewport,
               which is the correct behaviour for a below-fold photo and leaves
               the LCP element's preload uncontested. */
            loading="lazy"
          />
          <span className="cust-scrim" aria-hidden="true" />

          <div className="cust-overlay">
            <div className="cust-headline">
              <span className="cust-metric-v">10,000+</span>
              <h2 className="cust-metric-l">{es ? 'Sensores y cámaras conectados' : 'Connected Sensors & Cameras'}</h2>
            </div>
            <div className="cust-meta">
              <span className="cust-meta-1">Michoacán, {es ? 'México' : 'Mexico'}</span>
              <span className="cust-meta-sep" aria-hidden="true" />
              <span className="cust-meta-2">{es ? 'Despliegue estatal' : 'Statewide Deployment'}</span>
            </div>
          </div>
        </div>

        <div className="cust-below">
          <div className="cust-impact">
            <div className="cust-impact-label">{es ? 'IMPACTO OPERATIVO' : 'OPERATIONAL IMPACT'}</div>
            <ul className="cust-impact-list">
              {IMPACT.map((x, i) => (
                <li key={i}><span className="cust-dot" aria-hidden="true" />{x[lang]}</li>
              ))}
            </ul>
          </div>

          <div className="cust-side">
            <div className="cust-impact-label">{es ? 'ALCANCE DEL DESPLIEGUE' : 'DEPLOYMENT SCOPE'}</div>
            <div className="cust-metrics">
              {METRICS.map((m, i) => (
                <div className="cust-metric" key={i}>
                  <span className="cust-metric-n">{typeof m.v === 'string' ? m.v : m.v[lang]}</span>
                  <span className="cust-metric-c">{m.l[lang]}</span>
                </div>
              ))}
            </div>

            <blockquote className="cust-quote">
              {QUOTE[lang]}
              <cite className="cust-cite">— {ROLE[lang]}</cite>
            </blockquote>
            <p className="cust-illu-note">
              {es ? 'Detalles del despliegue sujetos a aprobación del cliente.' : 'Deployment details subject to customer approval.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
