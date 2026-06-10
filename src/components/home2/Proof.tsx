/* Homepage v2 — proof: integrations strip (light band) + stats, C5 quote, customer carousel (dark band) */

import Image from 'next/image'

const PARTNERS = [
  { name: 'Milestone', src: '/images/partners/milestone.svg' },
  { name: 'Genetec', src: '/images/partners/genetec.svg' },
  { name: 'RapidSOS', src: '/images/partners/rapidsos.svg' },
  { name: 'Carbyne', src: '/images/partners/carbyne.png' },
  { name: 'Corsight', src: '/images/partners/corsight.svg' },
  { name: 'Motorola', src: '/images/partners/motorola.svg' },
  { name: 'i-PRO', src: '/images/partners/ipro.svg' },
]

const CUSTOMERS = [
  { mark: 'DGO', line1: 'Secretaría de Seguridad', line2: 'Durango' },
  { mark: 'SIN', line1: 'Secretaría de Seguridad', line2: 'Sinaloa' },
  { mark: 'TAM', line1: 'Secretaría de Seguridad', line2: 'Tamaulipas' },
  { mark: 'INAMI', line1: 'Instituto Nacional', line2: 'de Migración' },
  { mark: 'JAL', line1: 'Secretaría de Seguridad', line2: 'Jalisco' },
  { mark: 'C5', line1: 'Centro de Mando', line2: 'CDMX' },
  { mark: 'YUC', line1: 'Secretaría de Seguridad', line2: 'Yucatán' },
  { mark: 'MICH', line1: 'Secretaría de Seguridad', line2: 'Michoacán' },
  { mark: 'PUE', line1: 'Secretaría de Seguridad', line2: 'Puebla' },
  { mark: 'CHIS', line1: 'Secretaría de Seguridad', line2: 'Chiapas' },
]

function Stat({ num, unit, label }: { num: string; unit: string; label: string }) {
  return (
    <div className="proof-stat">
      <div className="proof-stat-num">
        <span className="proof-stat-num-v">{num}</span>
        <span className="proof-stat-num-u">{unit}</span>
      </div>
      <div className="proof-stat-label">{label}</div>
    </div>
  )
}

export default function Proof({ es }: { es: boolean }) {
  return (
    <>
      <section className="proof-integrations">
        <div className="proof-integrations-inner">
          <div className="proof-integrations-label">
            {es ? 'ECOSISTEMA DE INTEGRACIÓN' : 'INTEGRATION ECOSYSTEM'}
          </div>
          <div className="proof-integrations-row">
            {PARTNERS.map((p) => (
              <Image
                key={p.name}
                src={p.src}
                alt={p.name}
                width={120}
                height={32}
                className="proof-integrations-logo"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="proof-section">
        <div className="proof-inner">
          <div className="proof-stats">
            <Stat num="40" unit="+" label={es ? 'CIUDADES DESPLEGADAS' : 'CITIES DEPLOYED'} />
            <Stat num="70" unit="M" label={es ? 'CIUDADANOS PROTEGIDOS' : 'CITIZENS PROTECTED'} />
            <Stat num="99" unit=".9%" label={es ? 'DISPONIBILIDAD SLA' : 'UPTIME SLA'} />
            <Stat num="24" unit="/7" label={es ? 'SOPORTE OPERATIVO' : 'OPERATIONS SUPPORT'} />
          </div>

          <figure className="proof-quote">
            <div className="proof-quote-rule" />
            <blockquote>
              {es
                ? '"KabatOne unificó lo que antes eran cuatro sistemas separados. Por primera vez nuestros operadores tienen una imagen única — cámaras, despacho y unidades en campo."'
                : '"KabatOne unified what used to be four separate systems. For the first time, our operators have a single picture — cameras, dispatch, and field units."'}
            </blockquote>
            <figcaption>
              <span className="proof-quote-dot" />
              <span>
                <strong>{es ? 'Director General' : 'Director General'}</strong>
                <span className="proof-quote-org">{es ? 'Centro de Mando C5' : 'C5 Command Center'}</span>
              </span>
            </figcaption>
            <div className="proof-quote-rule proof-quote-rule-bottom" />
          </figure>

          <div className="proof-customers">
            <div className="proof-customers-label">
              {es ? 'CONFIADO POR CLIENTES LÍDERES' : 'TRUSTED BY LEADING CUSTOMERS'}
            </div>
            <div className="proof-customers-track-mask">
              <div className="proof-customers-track">
                {[...CUSTOMERS, ...CUSTOMERS].map((c, i) => (
                  <div key={i} className="proof-customer">
                    <div className="proof-customer-mark">{c.mark}</div>
                    <div className="proof-customer-text">
                      <span className="proof-customer-line1">{c.line1}</span>
                      <span className="proof-customer-line2">{c.line2}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
