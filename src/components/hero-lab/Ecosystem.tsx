/* Technology ecosystem — "works with what you already run."
   Ported from the Claude Design project "Kabat One Website"
   (the Ecosystem component in home/proof.jsx + home/proof.css).

   Five grouped categories of integrations; entries with a real local logo
   asset render it (grayscale, full color on hover), everything else
   renders as plain text. Uses plain <img> for the partner marks (several
   are SVG) rather than next/image, matching how the live homepage's own
   partner row already handles these same files — avoids widening the
   next/image SVG policy for one section. */

type Loc = { en: string; es: string }

const LOGO_MAP: Record<string, string> = {
  Milestone: '/images/partners/milestone.svg',
  Genetec: '/images/partners/genetec.svg',
  'i-PRO': '/images/partners/ipro.svg',
  RapidSOS: '/images/partners/rapidsos.svg',
  Carbyne: '/images/partners/carbyne.png',
  Corsight: '/images/partners/corsight.svg',
  Motorola: '/images/partners/motorola.svg',
}

const ECOSYSTEM: { group: Loc; items: string[] }[] = [
  { group: { en: 'Cameras & video platforms', es: 'Cámaras y plataformas de video' }, items: ['Milestone', 'Genetec', 'i-PRO', 'ONVIF / RTSP'] },
  { group: { en: 'Emergency communications', es: 'Comunicaciones de emergencia' }, items: ['RapidSOS', 'Carbyne', 'NG911'] },
  { group: { en: 'Analytics & AI', es: 'Analítica e IA' }, items: ['Corsight', 'LPR engines', 'Object & anomaly AI'] },
  { group: { en: 'Sensors & IoT', es: 'Sensores e IoT' }, items: ['Panic buttons', 'Gunshot detection', 'IoT & field sensors'] },
  { group: { en: 'Radio & operational comms', es: 'Radio y comunicaciones operativas' }, items: ['Motorola', 'APX / ASTRO', 'Standard PTT radio'] },
]

export default function Ecosystem({ es }: { es: boolean }) {
  const lang = es ? 'es' : 'en'

  return (
    <section className="eco" id="ecosystem">
      <div className="eco-wrap">
        <div className="eco-head">
          <div className="eco-eyebrow">{es ? 'ECOSISTEMA TECNOLÓGICO' : 'TECHNOLOGY ECOSYSTEM'}</div>
          <h2 className="eco-title">
            {es ? <>Funciona con las tecnologías <em>que ya están en tu operación.</em></>
              : <>Works with the technologies <em>already in your operation.</em></>}
          </h2>
          <p className="eco-lede">
            {es
              ? 'No necesitas reemplazar tu infraestructura. Kabat One se integra con tus cámaras, comunicaciones, sensores y radios actuales.'
              : 'You do not need to replace your infrastructure. Kabat One integrates with the cameras, communications, sensors, and radios you already run.'}
          </p>
        </div>

        <div className="eco-grid">
          {ECOSYSTEM.map((g, i) => (
            <div className="eco-group" key={i}>
              <h3 className="eco-group-title">{g.group[lang]}</h3>
              <div className="eco-items">
                {g.items.map((it, j) => (
                  <span className={`eco-item${LOGO_MAP[it] ? ' has-logo' : ''}`} key={j}>
                    {LOGO_MAP[it] ? <img src={LOGO_MAP[it]} alt={it} loading="lazy" /> : it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="eco-note">
          {es
            ? 'Solo se muestran integraciones actuales, soportadas y disponibles comercialmente. Marcas referidas como compatibilidades, no como sociedades formales salvo donde exista una alianza.'
            : 'Only current, supported, and commercially available integrations are shown. Brands shown as compatibilities, not formal partnerships unless an alliance exists.'}
        </p>
      </div>
    </section>
  )
}
