import Image from 'next/image'
import { Link } from '@/i18n/navigation'

/* Solutions — ported from the Claude Design project "Kabat One Website"
   (home/solutions.jsx + home/solutions.css + the SOLUTIONS data in
   home/data.jsx), rendered in the light variant per the design's light.css
   overrides for .sol.

   Two tiers, as designed: three core solutions as large cards with a
   product screenshot, then two specialized solutions as compact rows.
   The design's static K-*.html links are mapped to this app's real
   localized routes. Screenshots keep the design's "Illustrative view"
   badge so the visuals aren't mistaken for live product captures. */

type Loc = { en: string; es: string }
type Solution = {
  key: string
  name: string
  color: string
  href: string
  img: string
  position: Loc
  body: Loc
}

const CORE: Solution[] = [
  {
    key: 'safety',
    name: 'K-Safety',
    color: '#3b82f6',
    href: '/k-safety',
    img: '/images/modules/gis.webp',
    position: {
      en: 'Unified Command & Incident Management',
      es: 'Comando y Gestión de Incidentes Unificados',
    },
    body: {
      en: 'Real-time situational awareness, incident coordination, GIS, video, analytics, and operational workflows in one view.',
      es: 'Conciencia situacional en tiempo real, coordinación de incidentes, GIS, video, analítica y flujos operativos en una sola vista.',
    },
  },
  {
    key: 'dispatch',
    name: 'K-Dispatch',
    color: '#ef4444',
    href: '/k-dispatch',
    img: '/images/modules/dispatch.webp',
    position: {
      en: 'End-to-End Call-Taking & Dispatch',
      es: 'Recepción y Despacho de Extremo a Extremo',
    },
    body: {
      en: 'From the first emergency call to coordinated field response — intake, CAD, unit recommendation, and full audit trail.',
      es: 'Desde la primera llamada de emergencia hasta la respuesta coordinada en campo — recepción, CAD, recomendación de unidades y auditoría completa.',
    },
  },
  {
    key: 'video',
    name: 'K-Video',
    color: '#a855f7',
    href: '/k-video',
    img: '/images/modules/video.webp',
    position: {
      en: 'Unified Video Management & Intelligence',
      es: 'Gestión e Inteligencia de Video Unificadas',
    },
    body: {
      en: 'Connect live video, analytics, events, and investigations across the camera infrastructure you already operate.',
      es: 'Conecta video en vivo, analítica, eventos e investigaciones sobre la infraestructura de cámaras que ya operas.',
    },
  },
]

const SPEC: Solution[] = [
  {
    key: 'traffic',
    name: 'K-Traffic',
    color: '#f59e0b',
    href: '/k-traffic',
    img: '/images/k-traffic-mockup.webp',
    position: { en: 'Intelligent Traffic Management', es: 'Gestión Inteligente de Tráfico' },
    body: {
      en: 'Adaptive signal control, violation and incident detection, and emergency vehicle preemption.',
      es: 'Control adaptativo de señales, detección de infracciones e incidentes, y prioridad para vehículos de emergencia.',
    },
  },
  {
    key: 'connect',
    name: 'K-Connect',
    color: '#22c55e',
    href: '/k-connect',
    img: '/images/k-connect-mockup.webp',
    position: {
      en: 'Community & External Camera Integration',
      es: 'Integración de Cámaras Comunitarias y Externas',
    },
    body: {
      en: 'Bring private, community, and partner cameras into the command center with privacy-first access control.',
      es: 'Incorpora cámaras privadas, comunitarias y de socios al centro de mando con control de acceso enfocado en privacidad.',
    },
  },
]

export default function Solutions({ es }: { es: boolean }) {
  const lang = es ? 'es' : 'en'

  return (
    <section className="sol" id="solutions">
      <div className="sol-wrap">
        <div className="sol-head">
          <div className="sol-eyebrow">{es ? 'SOLUCIONES' : 'SOLUTIONS'}</div>
          <h2 className="sol-title">
            {es ? (
              <>Despliega lo que necesitas hoy. <em>Expande en la misma plataforma mañana.</em></>
            ) : (
              <>Deploy what you need today. <em>Expand on the same platform tomorrow.</em></>
            )}
          </h2>
          <p className="sol-lede">
            {es
              ? 'Las soluciones son configuraciones de capacidades compartidas de la plataforma — no productos desconectados.'
              : 'Solutions are configurations of shared platform capabilities — not separate, disconnected products.'}
          </p>
        </div>

        <div className="sol-core">
          {CORE.map((s) => (
            <Link className="sol-card" key={s.key} href={s.href} style={{ '--ac': s.color } as React.CSSProperties}>
              <div className="sol-card-shot">
                <Image
                  src={s.img}
                  alt={`${s.name} — ${s.position[lang]}`}
                  width={640}
                  height={400}
                  sizes="(max-width: 900px) 90vw, 380px"
                />
                <span className="sol-card-illu">{es ? 'Vista ilustrativa' : 'Illustrative view'}</span>
              </div>
              <div className="sol-card-body">
                <div className="sol-card-name">
                  <span className="sol-dot" />
                  {s.name}
                </div>
                <h3 className="sol-card-pos">{s.position[lang]}</h3>
                <p className="sol-card-text">{s.body[lang]}</p>
                <span className="sol-card-link">
                  {es ? 'Conocer más' : 'Learn more'} <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="sol-spec-label">{es ? 'Soluciones especializadas' : 'Specialized solutions'}</div>
        <div className="sol-spec">
          {SPEC.map((s) => (
            <Link className="sol-spec-card" key={s.key} href={s.href} style={{ '--ac': s.color } as React.CSSProperties}>
              <span className="sol-dot" />
              <div className="sol-spec-text">
                <div className="sol-spec-name">{s.name}</div>
                <div className="sol-spec-pos">{s.position[lang]}</div>
                <p className="sol-spec-body">{s.body[lang]}</p>
              </div>
              <span className="sol-spec-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
