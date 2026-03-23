import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import ModulesSection from '@/components/ModulesSection'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('home', locale)
}

/* ── Product definitions ── */
const products = [
  {
    key: 'k-safety',
    href: '/k-safety',
    color: '#3b82f6',
    mockup: '/images/modules/gis.webp',
    icon: '/images/icons/k-safety.png',
    en: {
      label: 'K-SAFETY',
      headline: 'Real-Time GIS Situational Awareness',
      desc: 'Turn raw location data into actionable intelligence. K-Safety overlays incidents, units, and live feeds on a unified map so dispatchers and commanders always have the full picture.',
      feats: [
        'Live incident mapping with auto-classification',
        'Field unit tracking & geofencing alerts',
        'Multi-layer GIS integration (CAD, sensors, cameras)',
        'Pattern-of-life analytics for proactive deployment',
      ],
    },
    es: {
      label: 'K-SAFETY',
      headline: 'Conciencia Situacional GIS en Tiempo Real',
      desc: 'Convierte datos de ubicacion en inteligencia accionable. K-Safety superpone incidentes, unidades y transmisiones en vivo en un mapa unificado para que despachadores y comandantes siempre tengan el panorama completo.',
      feats: [
        'Mapeo de incidentes en vivo con auto-clasificacion',
        'Rastreo de unidades de campo y alertas de geovalla',
        'Integracion GIS multicapa (CAD, sensores, camaras)',
        'Analitica de patrones para despliegue proactivo',
      ],
    },
  },
  {
    key: 'k-dispatch',
    href: '/k-dispatch',
    color: '#ef4444',
    flip: true,
    mockup: '/images/modules/dispatch.webp',
    icon: '/images/icons/k-dispatch.png',
    en: {
      label: 'K-DISPATCH',
      headline: 'AI-Augmented Emergency Dispatch',
      desc: 'From call to deployment in seconds. K-Dispatch centralizes multi-channel intake, auto-recommends the nearest units, and logs every action -- so no detail is ever lost in the chaos.',
      feats: [
        'Multi-channel intake: phone, radio, IoT, citizen app',
        'AI-assisted call triage & priority scoring',
        'Smart unit recommendation engine',
        'Full audit trail & post-incident reporting',
      ],
    },
    es: {
      label: 'K-DISPATCH',
      headline: 'Despacho de Emergencia Potenciado por IA',
      desc: 'De la llamada al despliegue en segundos. K-Dispatch centraliza la recepcion multicanal, recomienda automaticamente las unidades mas cercanas y registra cada accion.',
      feats: [
        'Recepcion multicanal: telefono, radio, IoT, app ciudadana',
        'Triaje de llamadas asistido por IA y puntuacion de prioridad',
        'Motor de recomendacion inteligente de unidades',
        'Rastro de auditoria completo e informes post-incidente',
      ],
    },
  },
  {
    key: 'k-traffic',
    href: '/k-traffic',
    color: '#06b6d4',
    mockup: '/images/k-traffic-mockup.webp',
    icon: '/images/icons/k-traffic.png',
    en: {
      label: 'K-TRAFFIC',
      headline: 'Intelligent Traffic Management',
      desc: 'Optimize flow, detect violations, and respond to incidents before they become gridlock. K-Traffic connects signals, sensors, and enforcement in one adaptive system.',
      feats: [
        'Adaptive signal control & corridor optimization',
        'Automated violation detection (red-light, speed, wrong-way)',
        'Incident detection & emergency vehicle preemption',
        'Real-time traffic analytics dashboard',
      ],
    },
    es: {
      label: 'K-TRAFFIC',
      headline: 'Gestion Inteligente de Trafico',
      desc: 'Optimiza el flujo, detecta infracciones y responde a incidentes antes de que se conviertan en congestion. K-Traffic conecta senales, sensores y cumplimiento en un sistema adaptativo.',
      feats: [
        'Control adaptativo de senales y optimizacion de corredores',
        'Deteccion automatizada de infracciones (semaforo, velocidad, contrasentido)',
        'Deteccion de incidentes y prioridad vehicular de emergencia',
        'Dashboard de analitica de trafico en tiempo real',
      ],
    },
  },
  {
    key: 'k-video',
    href: '/k-video',
    color: '#a855f7',
    flip: true,
    mockup: '/images/modules/video.webp',
    icon: '/images/icons/k-video.png',
    en: {
      label: 'K-VIDEO',
      headline: 'Unified Video Intelligence',
      desc: 'Aggregate every camera -- CCTV, body-worn, drone, traffic -- into a single searchable view. K-Video adds AI analytics on top so you can find what matters in seconds, not hours.',
      feats: [
        'Unified VMS: any brand, any protocol',
        'AI object, behavior & license-plate detection',
        'Forensic video search across all cameras',
        'Live alerting on defined events & zones',
      ],
    },
    es: {
      label: 'K-VIDEO',
      headline: 'Inteligencia de Video Unificada',
      desc: 'Agrega cada camara -- CCTV, corporal, dron, trafico -- en una sola vista buscable. K-Video anade analitica de IA para encontrar lo relevante en segundos.',
      feats: [
        'VMS unificado: cualquier marca, cualquier protocolo',
        'Deteccion de objetos, comportamiento y placas por IA',
        'Busqueda forense de video en todas las camaras',
        'Alertas en vivo sobre eventos y zonas definidos',
      ],
    },
  },
  {
    key: 'k-connect',
    href: '/k-connect',
    color: '#22c55e',
    mockup: '/images/k-connect-mockup.webp',
    icon: '/images/icons/k-connect.png',
    en: {
      label: 'K-CONNECT',
      headline: 'Secure Community-Based Video Sharing',
      desc: 'Privacy-focused platform enabling secure public-private video sharing between businesses, residents, and regional command centers with AI-driven monitoring.',
      feats: [
        'Secure public-private video sharing',
        'AI-driven alerts & monitoring',
        'Privacy-focused access control',
        'Seamless emergency coordination',
      ],
    },
    es: {
      label: 'K-CONNECT',
      headline: 'Comparticion Segura de Video Comunitario',
      desc: 'Plataforma enfocada en privacidad que permite compartir video seguro entre empresas, residentes y centros de mando regionales con monitoreo impulsado por IA.',
      feats: [
        'Comparticion de video publico-privada segura',
        'Alertas y monitoreo impulsados por IA',
        'Control de acceso enfocado en privacidad',
        'Coordinacion de emergencia integrada',
      ],
    },
  },
]

/* ── Why KabatOne cards ── */
const whyCards = [
  {
    num: '01',
    tagEN: 'SITUATIONAL AWARENESS',
    tagES: 'CONCIENCIA SITUACIONAL',
    en: {
      title: 'Unified Operating Picture',
      body: 'Video, dispatch, GIS, and field ops share a single real-time data layer. No more tab-switching. No more blind spots.',
    },
    es: {
      title: 'Imagen Operativa Unificada',
      body: 'Video, despacho, GIS y operaciones de campo comparten una sola capa de datos en tiempo real. Sin mas cambio de pestanas. Sin mas puntos ciegos.',
    },
  },
  {
    num: '02',
    tagEN: 'RESPONSE TIME',
    tagES: 'TIEMPO DE RESPUESTA',
    en: {
      title: 'Seconds Matter. We Built for That.',
      body: 'From 911 call intake to unit dispatch to AI-assisted triage -- every workflow is optimized to shave seconds off response time.',
    },
    es: {
      title: 'Cada Segundo Cuenta. Construido Para Eso.',
      body: 'Desde la recepcion de llamadas 911 hasta el despacho de unidades con triaje asistido por IA -- cada flujo esta optimizado para reducir segundos del tiempo de respuesta.',
    },
  },
  {
    num: '03',
    tagEN: 'SOC 2 CERTIFIED',
    tagES: 'CERTIFICADO SOC 2',
    en: {
      title: 'Enterprise-Grade Security',
      body: 'SOC 2 Type II certified. End-to-end encryption. Role-based access controls. Built from the ground up for law enforcement data standards.',
    },
    es: {
      title: 'Seguridad de Nivel Empresarial',
      body: 'Certificado SOC 2 Tipo II. Cifrado de extremo a extremo. Controles de acceso basados en roles. Construido desde cero para estandares de datos policiales.',
    },
  },
  {
    num: '04',
    tagEN: 'PREDICTIVE INTELLIGENCE',
    tagES: 'INTELIGENCIA PREDICTIVA',
    en: {
      title: 'AI That Earns Its Keep',
      body: 'Pattern recognition, predictive deployment, and anomaly detection built in -- not bolted on. The AI layer learns from your city\'s data.',
    },
    es: {
      title: 'IA Que Demuestra Su Valor',
      body: 'Reconocimiento de patrones, despliegue predictivo y deteccion de anomalias integrados -- no anadidos. La capa de IA aprende de los datos de tu ciudad.',
    },
  },
]

/* ── Industry definitions ── */
const industryCards = [
  {
    href: '/industries/public-safety',
    color: '#3b82f6',
    num: '01',
    en: {
      name: 'Public Safety & Smart Cities',
      desc: 'Intelligent solutions for proactive security, unifying cameras, sensors, and dispatch across entire cities.',
      pills: ['GIS Awareness', 'Video Analytics', 'AI Events'],
    },
    es: {
      name: 'Seguridad Publica y Ciudades Inteligentes',
      desc: 'Soluciones inteligentes para seguridad proactiva, unificando camaras, sensores y despacho en ciudades enteras.',
      pills: ['Conciencia GIS', 'Video Analitico', 'Eventos IA'],
    },
  },
  {
    href: '/industries/municipalities',
    color: '#06b6d4',
    num: '02',
    en: {
      name: 'Municipalities',
      desc: 'Real-time emergency dispatch and unified command for city governments -- 40% faster response times proven.',
      pills: ['C4/C5 Dispatch', 'Smart Routing', 'Multi-Agency'],
    },
    es: {
      name: 'Municipios',
      desc: 'Despacho de emergencia en tiempo real y mando unificado para gobiernos municipales -- 40% mas rapido demostrado.',
      pills: ['Despacho C4/C5', 'Ruteo Inteligente', 'Multi-Agencia'],
    },
  },
  {
    href: '/industries/airport',
    color: '#8b5cf6',
    num: '03',
    en: {
      name: 'Airport Security',
      desc: 'AI-powered perimeter monitoring, anomaly detection, and incident management from terminal to runway.',
      pills: ['Perimeter AI', 'Access Control', 'Compliance'],
    },
    es: {
      name: 'Seguridad Aeroportuaria',
      desc: 'Monitoreo perimetral con IA, deteccion de anomalias y gestion de incidentes de terminal a pista.',
      pills: ['IA Perimetral', 'Control de Acceso', 'Cumplimiento'],
    },
  },
  {
    href: '/industries/retail',
    color: '#f59e0b',
    num: '04',
    en: {
      name: 'Retail',
      desc: '360 degree security and business intelligence -- loss prevention, heat maps, and crowd analytics for retail.',
      pills: ['Loss Prevention', 'Heat Maps', 'People Counting'],
    },
    es: {
      name: 'Retail',
      desc: 'Seguridad 360 grados e inteligencia de negocio -- prevencion de perdidas, mapas de calor y analitica de afluencia.',
      pills: ['Prevencion de Perdidas', 'Mapas de Calor', 'Conteo de Personas'],
    },
  },
  {
    href: '/industries/logistics',
    color: '#10b981',
    num: '05',
    en: {
      name: 'Logistics',
      desc: 'Smart security from warehouse to last mile -- LPR, perimeter AI, and real-time traceability across your supply chain.',
      pills: ['LPR', 'Warehouse AI', 'Traceability'],
    },
    es: {
      name: 'Logistica',
      desc: 'Seguridad inteligente del almacen a la ultima milla -- LPR, IA perimetral y trazabilidad en tiempo real.',
      pills: ['LPR', 'IA de Almacen', 'Trazabilidad'],
    },
  },
  {
    href: '/industries/ports',
    color: '#0ea5e9',
    num: '06',
    en: {
      name: 'Port Security',
      desc: 'ISPS/IMO-compliant platform unifying radars, cameras, IoT sensors, and vessel tracking for critical port protection.',
      pills: ['ISPS/IMO', 'Vessel Tracking', 'Coastal Radar'],
    },
    es: {
      name: 'Seguridad Portuaria',
      desc: 'Plataforma conforme a ISPS/IMO unificando radares, camaras, sensores IoT y rastreo de embarcaciones.',
      pills: ['ISPS/IMO', 'Rastreo de Embarcaciones', 'Radar Costero'],
    },
  },
  {
    href: '/industries/stadiums',
    color: '#ef4444',
    num: '07',
    en: {
      name: 'Stadiums & Venues',
      desc: 'AI command center for stadiums -- crowd analytics, instant incident response, and 60% faster resolution times.',
      pills: ['Crowd Analytics', 'Smart Access', '60% Faster'],
    },
    es: {
      name: 'Estadios y Recintos',
      desc: 'Centro de mando IA para estadios -- analitica de multitudes, respuesta instantanea a incidentes y 60% mas rapido.',
      pills: ['Analitica de Multitudes', 'Acceso Inteligente', '60% Mas Rapido'],
    },
  },
]

/* ── Trusted agencies carousel ── */
const agencies = [
  { abbr: 'SSP', name: 'Secretaria de Seguridad\nMichoacan' },
  { abbr: 'C5i', name: 'Centro de Comando\nCiudad de Mexico' },
  { abbr: 'GN', name: 'Guardia\nNacional' },
  { abbr: 'C4', name: 'Centro de Mando\nMonterrey' },
  { abbr: 'SSC', name: 'Secretaria de Seguridad\nCiudadana CDMX' },
  { abbr: 'SSPC', name: 'Secretaria de Seguridad\nPublica Federal' },
  { abbr: 'SSP', name: 'Secretaria de Seguridad\nJalisco' },
  { abbr: 'C5', name: 'Centro de Inteligencia\nGuerrero' },
]

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  return (
    <>
      <Nav />
      <div style={{ paddingTop: '70px', position: 'relative', minHeight: '100vh' }}>

        {/* ═══ BACKGROUND EFFECTS ═══ */}
        <div className="hp-bg-layer" />
        <div className="hp-scan-line" />

        {/* ═══ HERO SECTION ═══ */}
        <section className="hp-hero">
          {/* Eyebrow */}
          <div className="hp-eyebrow">
            <span className="hp-eyebrow-dot" />
            {es ? 'Plataforma de Seguridad Publica' : 'Public Safety Platform'}
          </div>

          {/* H1 */}
          <h1 className="hp-headline">
            {es
              ? 'Una pantalla. Cada camara, despacho y unidad en campo — conectados.'
              : 'One screen. Every camera, dispatch call, and field unit — connected.'}
          </h1>

          {/* Subtitle */}
          <p className="hp-sub">
            {es
              ? 'KabatOne es la plataforma de mando y control para gobiernos y agencias de seguridad publica. Cinco modulos integrados. Una imagen operativa unificada. Utilizada por mas de 40 ciudades, protegiendo a 70 millones de ciudadanos.'
              : 'KabatOne is the command-and-control platform for governments and public safety agencies. Five integrated modules. One common operating picture. Trusted by 40+ cities, protecting 70 million citizens.'}
          </p>

          {/* CTA Row */}
          <div className="hp-cta-row">
            <Link href="/contact" className="hp-btn-primary">
              {es ? 'Solicita una Demo' : 'Book a Demo'}
              <svg className="hp-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

        </section>

        {/* ═══ MODULES / BI TABBED SECTION ═══ */}
        <ModulesSection es={es} />

        {/* ═══ PROOF / STATS SECTION ═══ */}
        <section className="hp-proof">
          <div className="hp-proof-inner">
            <div className="hp-stats-row">
              <div className="hp-stat">
                <div className="hp-stat-num">40</div>
                <div className="hp-stat-unit">+</div>
                <div className="hp-stat-label">{es ? 'Ciudades Desplegadas' : 'Cities Deployed'}</div>
              </div>
              <div className="hp-stat-divider" />
              <div className="hp-stat">
                <div className="hp-stat-num">70</div>
                <div className="hp-stat-unit">M</div>
                <div className="hp-stat-label">{es ? 'Ciudadanos Protegidos' : 'Citizens Protected'}</div>
              </div>
              <div className="hp-stat-divider" />
              <div className="hp-stat">
                <div className="hp-stat-num">99</div>
                <div className="hp-stat-unit">.9%</div>
                <div className="hp-stat-label">{es ? 'SLA de Disponibilidad' : 'Uptime SLA'}</div>
              </div>
              <div className="hp-stat-divider" />
              <div className="hp-stat">
                <div className="hp-stat-num">24</div>
                <div className="hp-stat-unit">/7</div>
                <div className="hp-stat-label">{es ? 'Soporte Operaciones' : 'Operations Support'}</div>
              </div>
            </div>

            {/* Quote */}
            <div className="hp-quote-block">
              <div className="hp-quote-line" />
              <blockquote className="hp-quote">
                {es
                  ? '"KabatOne reemplazo cuatro sistemas separados de la noche a la manana. Nuestros despachadores tenian un panorama operativo completo dentro de 72 horas del lanzamiento. No fue una actualizacion -- fue una categoria diferente de herramienta."'
                  : '"KabatOne replaced four separate systems overnight. Our dispatchers had a full common operating picture within 72 hours of go-live. It wasn\'t an upgrade -- it was a different category of tool."'}
              </blockquote>
              <div className="hp-quote-attr">
                <span className="hp-quote-dot" />
                <div>
                  <div className="hp-quote-name">{es ? 'Director de Operaciones' : 'Chief of Operations'}</div>
                  <div className="hp-quote-org">{es ? 'Departamento de Policia Metropolitana de EE.UU.' : 'Major U.S. Metropolitan Police Dept.'}</div>
                </div>
              </div>
              <div className="hp-quote-line hp-quote-line-bottom" />
            </div>

            {/* Logo Carousel */}
            <div className="hp-logo-carousel">
              <div className="hp-logo-label">{es ? 'CONFIADO POR AGENCIAS LIDERES' : 'TRUSTED BY LEADING AGENCIES'}</div>
              <div className="hp-logo-mask">
                <div className="hp-logo-track">
                  {[...agencies, ...agencies].map((a, i) => (
                    <div key={i} className="hp-logo-tile">
                      <span className="hp-logo-abbr">{a.abbr}</span>
                      <span className="hp-logo-name">{a.name.split('\n').map((line, j) => (
                        <span key={j}>{line}{j === 0 && <br />}</span>
                      ))}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PRODUCTS SECTION ═══ */}
        <section className="hp-products">
          <div className="hp-products-inner">
            <div className="hp-products-header">
              <div className="hp-section-label">
                {es ? 'LA PLATAFORMA' : 'THE PLATFORM'}
              </div>
              <h2 className="hp-products-h2">
                {es ? (<>Cinco Productos.<br/>Una Imagen Operativa.</>) : (<>Five Products.<br/>One Operating Picture.</>)}
              </h2>
              <p className="hp-products-sub">
                {es
                  ? 'Cada modulo funciona de forma independiente. Juntos, le dan a su centro de mando una imagen operativa comun -- sin integrar seis proveedores distintos.'
                  : 'Each module works independently. Together, they give your command center one common operating picture — without stitching together six different vendors.'}
              </p>
            </div>

            {products.map((prod, i) => {
              const c = es ? prod.es : prod.en
              return (
                <div key={prod.key} className={`hp-prod-row${prod.flip ? ' hp-prod-row-flip' : ''}`} style={{ '--pc': prod.color } as React.CSSProperties}>
                  <div className="hp-prod-text">
                    <div className="hp-prod-label">
                      <Image src={prod.icon} alt={c.label} width={28} height={28} style={{ height: '28px', width: 'auto', verticalAlign: 'middle', marginRight: '8px' }} />
                      {c.label}
                    </div>
                    <h3 className="hp-prod-headline">{c.headline}</h3>
                    <p className="hp-prod-desc">{c.desc}</p>
                    <ul className="hp-prod-feats">
                      {c.feats.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                    <Link href={prod.href} className="hp-prod-link">
                      {es ? 'Mas informacion' : 'Learn more'} <span className="hp-prod-link-arrow">&rarr;</span>
                    </Link>
                  </div>
                  <div className="hp-prod-visual">
                    <div className="hp-prod-chrome">
                      <div className="hp-prod-chrome-left">
                        <div className="hp-chrome-dots">
                          <span style={{ background: '#FF5F57' }} />
                          <span style={{ background: '#FFBD2E' }} />
                          <span style={{ background: '#28C840' }} />
                        </div>
                        <span className="hp-chrome-title">{c.label}</span>
                      </div>
                      <div className="hp-prod-live">
                        <span className="hp-live-dot" />LIVE
                      </div>
                    </div>
                    <div className="hp-prod-body">
                      <Image
                        src={prod.mockup}
                        alt={c.label}
                        fill
                        className="hp-prod-screenshot"
                        sizes="(max-width: 900px) 100vw, 60vw"
                        style={{ objectFit: 'cover' }}
                        priority={i === 0}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ═══ WHY KABATONE SECTION ═══ */}
        <section className="hp-why">
          <div className="hp-why-inner">
            <div className="hp-why-header">
              <div className="hp-section-label">
                {es ? 'POR QUE KABATONE' : 'WHY KABATONE'}
              </div>
              <div className="hp-why-header-grid">
                <h2 className="hp-why-h2">
                  {es ? (<>Una Plataforma.<br/>Cada Disciplina.</>) : (<>One Platform.<br/>Every Discipline.</>)}
                </h2>
                <p className="hp-why-sub">
                  {es
                    ? 'La mayoria de las agencias operan 6-12 herramientas desconectadas. KabatOne las reemplaza todas -- con una imagen operativa unificada que realmente se comunica consigo misma.'
                    : 'Most agencies run 6-12 disconnected tools. KabatOne replaces them all -- with a unified operating picture that actually talks to itself.'}
                </p>
              </div>
            </div>
            <div className="hp-why-grid">
              {whyCards.map((card, i) => {
                const c = es ? card.es : card.en
                const isBlue = i === 1 || i === 3
                return (
                  <div key={card.num} className={`hp-why-card${isBlue ? ' hp-why-card-blue' : ''}`}>
                    <div className={`hp-why-icon${isBlue ? ' hp-why-icon-blue' : ''}`}>
                      {i === 0 && (
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <rect x="3" y="3" width="9" height="9" rx="1.5" stroke="#06b6d4" strokeWidth="1.5"/>
                          <rect x="16" y="3" width="9" height="9" rx="1.5" stroke="#06b6d4" strokeWidth="1.5"/>
                          <rect x="3" y="16" width="9" height="9" rx="1.5" stroke="#06b6d4" strokeWidth="1.5"/>
                          <rect x="16" y="16" width="9" height="9" rx="1.5" stroke="#06b6d4" strokeWidth="1.5"/>
                          <circle cx="14" cy="14" r="1.8" fill="#06b6d4"/>
                        </svg>
                      )}
                      {i === 1 && (
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <circle cx="14" cy="14" r="10" stroke="#3b82f6" strokeWidth="1.5"/>
                          <path d="M14 8L14 14L18 17" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
                          <circle cx="14" cy="14" r="1.5" fill="#3b82f6"/>
                        </svg>
                      )}
                      {i === 2 && (
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <path d="M14 3L3 8.5L3 14.5C3 20 8 24.5 14 26C20 24.5 25 20 25 14.5L25 8.5Z" stroke="#06b6d4" strokeWidth="1.5" strokeLinejoin="round"/>
                          <path d="M9 14L12.5 17.5L19 11" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {i === 3 && (
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <rect x="3" y="16" width="5" height="9" rx="1" stroke="#3b82f6" strokeWidth="1.5"/>
                          <rect x="11.5" y="10" width="5" height="15" rx="1" stroke="#3b82f6" strokeWidth="1.5"/>
                          <rect x="20" y="5" width="5" height="20" rx="1" stroke="#3b82f6" strokeWidth="1.5"/>
                        </svg>
                      )}
                    </div>
                    <div className="hp-why-num">{card.num}</div>
                    <h3 className="hp-why-title">{c.title}</h3>
                    <p className="hp-why-body">{c.body}</p>
                    <div className={`hp-why-tag${isBlue ? ' hp-why-tag-blue' : ''}`}>{es ? card.tagES : card.tagEN}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ═══ INDUSTRIES SECTION ═══ */}
        <section className="hp-industries">
          <div className="hp-industries-inner">
            <div className="hp-industries-header">
              <div className="hp-ind-eyebrow">
                {es ? 'INDUSTRIAS QUE SERVIMOS' : 'INDUSTRIES WE SERVE'}
              </div>
              <h2 className="hp-ind-h2">
                {es ? (<>Una Plataforma.<br/>Cada Primera Linea.</>) : (<>One Platform.<br/>Every Frontline.</>)}
              </h2>
              <p className="hp-ind-sub">
                {es
                  ? 'Desplegado en seguridad publica, respuesta a emergencias, infraestructura critica y movilidad urbana -- KabatOne se adapta a las demandas operativas de cada dominio.'
                  : 'Deployed across public safety, emergency response, critical infrastructure, and urban mobility -- KabatOne adapts to the operational demands of each domain.'}
              </p>
            </div>
            <div className="hp-ind-grid">
              {industryCards.map((ind) => {
                const c = es ? ind.es : ind.en
                return (
                  <Link key={ind.href} href={ind.href} className="hp-ind-card" style={{ '--ind-color': ind.color } as React.CSSProperties}>
                    <div className="hp-ind-card-glow" />
                    <div className="hp-ind-card-top">
                      <div className="hp-ind-icon">
                        <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                          <path d="M14 3L25 8.5V15C25 20.8 20 25.5 14 27C8 25.5 3 20.8 3 15V8.5L14 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                          <path d="M9 14L12.5 17.5L19 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="hp-ind-num">{ind.num}</div>
                    </div>
                    <h3 className="hp-ind-name">{c.name}</h3>
                    <p className="hp-ind-desc">{c.desc}</p>
                    <div className="hp-ind-pills">
                      {c.pills.map((p, i) => <span key={i}>{p}</span>)}
                    </div>
                    <div className="hp-ind-more">{es ? 'Mas informacion' : 'Learn more'} <span>&rarr;</span></div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <CTASection
          es={es}
          h2={es ? 'Vea KabatOne en Accion' : 'See KabatOne in Action'}
          subtitle={es
            ? 'Agenda una demo en vivo con nuestro equipo de soluciones. Te mostraremos la plataforma funcionando con datos reales de ciudades -- no diapositivas.'
            : 'Schedule a live demo with our solutions team. We\'ll show you the platform running on real city data -- not slides.'}
        />

        <Footer es={es} />
      </div>

      {/* ═══════════════════════════════════════
           HOMEPAGE STYLES
      ═══════════════════════════════════════ */}
      <style>{`
        /* ── Background ── */
        .hp-bg-layer {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }
        .hp-bg-layer::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(59,130,246,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.055) 1px, transparent 1px);
          background-size: 56px 56px;
        }
        .hp-bg-layer::after {
          content: '';
          position: absolute;
          bottom: -5%;
          left: 50%;
          transform: translateX(-50%);
          width: 130%;
          height: 65%;
          background: radial-gradient(ellipse at center bottom, rgba(59,130,246,0.18) 0%, rgba(6,182,212,0.07) 28%, transparent 68%);
        }
        .hp-scan-line {
          position: fixed;
          top: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, rgba(0,207,239,0.65) 50%, transparent 100%);
          animation: hp-scan 9s linear infinite;
          z-index: 1;
          pointer-events: none;
        }
        @keyframes hp-scan {
          0%   { top: -2px; opacity: 0; }
          4%   { opacity: 1; }
          96%  { opacity: 0.6; }
          100% { top: 100vh; opacity: 0; }
        }

        /* ── Hero ── */
        .hp-hero {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 80px 24px 16px;
          text-align: center;
        }
        .hp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 28px;
          animation: hp-reveal 0.7s cubic-bezier(0.2,0.8,0.4,1) both;
          animation-delay: 0.1s;
        }
        .hp-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: var(--cyan);
          opacity: 0.7;
        }
        .hp-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 8px var(--cyan);
          animation: hp-blink 2.2s ease-in-out infinite;
        }
        @keyframes hp-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }
        .hp-headline {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: clamp(52px, 8vw, 110px);
          line-height: 0.93;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          color: var(--white);
          margin-bottom: 32px;
          max-width: 860px;
          text-wrap: balance;
          animation: hp-reveal 0.8s cubic-bezier(0.2,0.8,0.4,1) both;
          animation-delay: 0.22s;
        }
        .hp-headline-grad {
          background: linear-gradient(130deg, #60a5fa 10%, #06b6d4 90%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hp-sub {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.75;
          color: var(--dim);
          max-width: 620px;
          margin: 0 auto 46px;
          animation: hp-reveal 0.8s cubic-bezier(0.2,0.8,0.4,1) both;
          animation-delay: 0.36s;
        }
        .hp-cta-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 52px;
          animation: hp-reveal 0.8s cubic-bezier(0.2,0.8,0.4,1) both;
          animation-delay: 0.5s;
        }
        .hp-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: var(--blue);
          color: white;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 500;
          padding: 15px 34px;
          border-radius: 8px;
          text-decoration: none;
          box-shadow: 0 0 44px rgba(24,88,245,0.40), inset 0 1px 0 rgba(255,255,255,0.1);
          transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .hp-btn-primary:hover {
          background: var(--blue-light);
          transform: translateY(-2px);
          box-shadow: 0 0 64px rgba(24,88,245,0.55), inset 0 1px 0 rgba(255,255,255,0.1);
        }
        .hp-arrow { transition: transform 0.18s; }
        .hp-btn-primary:hover .hp-arrow { transform: translateX(3px); }

        /* Badges */
        .hp-badges {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0;
          margin-bottom: 40px;
          animation: hp-reveal 0.8s cubic-bezier(0.2,0.8,0.4,1) both;
          animation-delay: 0.64s;
        }
        .hp-badge {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 0 30px;
          border-right: 1px solid var(--border);
        }
        .hp-badge:last-child { border-right: none; }
        .hp-badge-label {
          font-size: 13px;
          color: var(--dim);
          white-space: nowrap;
        }
        .hp-badge-label strong {
          font-weight: 600;
          color: var(--white);
        }

        @keyframes hp-reveal {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Proof / Stats ── */
        .hp-proof {
          position: relative;
          z-index: 1;
          padding: 60px 0;
          background: var(--bg-2);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .hp-proof-inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 48px;
        }
        .hp-stats-row {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 44px;
        }
        .hp-stat {
          flex: 1;
          text-align: center;
          padding: 0 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hp-stat-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: 72px;
          line-height: 1;
          color: var(--white);
          display: inline-block;
        }
        .hp-stat-unit {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 600;
          font-size: 36px;
          color: var(--cyan);
          line-height: 1;
          margin-top: 2px;
        }
        .hp-stat-label {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--dim);
          margin-top: 12px;
        }
        .hp-stat-divider {
          width: 1px;
          height: 80px;
          background: var(--border);
          flex-shrink: 0;
        }

        /* Quote */
        .hp-quote-block {
          max-width: 820px;
          margin: 0 auto 36px;
          text-align: center;
          padding: 0 48px;
        }
        .hp-quote-line {
          width: 1px;
          height: 28px;
          background: linear-gradient(180deg, transparent, rgba(6,182,212,0.5));
          margin: 0 auto 20px;
        }
        .hp-quote-line-bottom {
          background: linear-gradient(180deg, rgba(6,182,212,0.5), transparent);
          margin: 20px auto 0;
        }
        .hp-quote {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 20px;
          font-weight: 400;
          line-height: 1.7;
          color: var(--white);
          font-style: italic;
          opacity: 0.9;
          margin: 0;
          padding: 0;
          border: none;
        }
        .hp-quote-attr {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
        }
        .hp-quote-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 10px var(--cyan);
          flex-shrink: 0;
        }
        .hp-quote-name {
          font-size: 13px;
          font-weight: 600;
          color: var(--white);
        }
        .hp-quote-org {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.1em;
          color: var(--dim);
          margin-top: 2px;
        }

        /* Logo Carousel */
        .hp-logo-carousel {
          border-top: 1px solid var(--border);
          padding-top: 32px;
          margin-top: 36px;
        }
        .hp-logo-label {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--muted);
          text-align: center;
          margin-bottom: 36px;
        }
        .hp-logo-mask {
          overflow: hidden;
          position: relative;
        }
        .hp-logo-mask::before,
        .hp-logo-mask::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }
        .hp-logo-mask::before {
          left: 0;
          background: linear-gradient(90deg, var(--bg-2), transparent);
        }
        .hp-logo-mask::after {
          right: 0;
          background: linear-gradient(270deg, var(--bg-2), transparent);
        }
        .hp-logo-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: hp-logo-scroll 32s linear infinite;
        }
        .hp-logo-track:hover {
          animation-play-state: paused;
        }
        @keyframes hp-logo-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hp-logo-tile {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 6px;
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 16px 24px;
          min-width: 200px;
          flex-shrink: 0;
          transition: border-color 0.25s, background 0.25s;
        }
        .hp-logo-tile:hover {
          border-color: rgba(6,182,212,0.25);
          background: rgba(6,182,212,0.04);
        }
        .hp-logo-abbr {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: 22px;
          color: var(--white);
          letter-spacing: 0.04em;
          line-height: 1;
        }
        .hp-logo-name {
          font-size: 11px;
          color: var(--dim);
          line-height: 1.4;
        }

        /* ── Products Section ── */
        .hp-products {
          position: relative;
          z-index: 1;
          padding: 100px 0 80px;
        }
        .hp-products-inner {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .hp-products-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .hp-section-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        .hp-section-label::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: var(--cyan);
          opacity: 0.6;
        }
        .hp-products-h2 {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--white);
          letter-spacing: -0.01em;
          line-height: 1.1;
          margin: 12px 0 16px;
          text-transform: uppercase;
        }
        .hp-products-sub {
          font-size: 1rem;
          color: var(--dim);
          max-width: 540px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Product rows */
        .hp-prod-row {
          display: flex;
          align-items: center;
          gap: 64px;
          margin-bottom: 100px;
        }
        .hp-prod-row:last-child { margin-bottom: 0; }
        .hp-prod-row-flip { flex-direction: row-reverse; }
        .hp-prod-text {
          flex: 0 0 38%;
          min-width: 0;
        }
        .hp-prod-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--pc);
          letter-spacing: 0.14em;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
        }
        .hp-prod-headline {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: clamp(1.7rem, 2.5vw, 2.3rem);
          color: var(--white);
          line-height: 1.15;
          margin: 0 0 14px;
          text-transform: uppercase;
        }
        .hp-prod-desc {
          font-size: 0.95rem;
          color: var(--dim);
          line-height: 1.65;
          margin-bottom: 22px;
        }
        .hp-prod-feats {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
        }
        .hp-prod-feats li {
          font-size: 0.875rem;
          color: var(--dim);
          padding: 7px 0 7px 18px;
          position: relative;
          border-top: 1px solid rgba(255,255,255,0.05);
          line-height: 1.5;
        }
        .hp-prod-feats li:first-child { border-top: none; }
        .hp-prod-feats li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--pc);
          opacity: 0.8;
        }
        .hp-prod-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--pc);
          text-decoration: none;
          transition: gap 0.2s ease, opacity 0.2s ease;
        }
        .hp-prod-link:hover { gap: 10px; opacity: 0.8; }
        .hp-prod-link-arrow { transition: transform 0.2s; }
        .hp-prod-link:hover .hp-prod-link-arrow { transform: translateX(4px); }

        /* Product visual */
        .hp-prod-visual {
          flex: 0 0 44%;
          max-width: 44%;
          min-width: 0;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04);
        }
        .hp-prod-chrome {
          background: #0b1220;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .hp-prod-chrome-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .hp-chrome-dots {
          display: flex;
          gap: 5px;
        }
        .hp-chrome-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: block;
        }
        .hp-chrome-title {
          font-family: 'DM Mono', monospace;
          font-size: 0.62rem;
          color: var(--pc);
          letter-spacing: 0.1em;
        }
        .hp-prod-live {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: #28C840;
          letter-spacing: 0.05em;
        }
        .hp-live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #28C840;
          box-shadow: 0 0 6px #28C840;
          animation: hp-blink 2s ease-in-out infinite;
        }
        .hp-prod-body {
          background: #060d1a;
          position: relative;
          height: 260px;
          overflow: hidden;
        }
        .hp-prod-screenshot {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── Why Section ── */
        .hp-why {
          position: relative;
          z-index: 1;
          padding: 120px 0 100px;
          border-top: 1px solid var(--border);
        }
        .hp-why-inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 48px;
        }
        .hp-why-header {
          margin-bottom: 72px;
        }
        .hp-why-header-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px 80px;
          align-items: start;
        }
        .hp-why-h2 {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: clamp(44px, 5vw, 68px);
          line-height: 0.95;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          color: var(--white);
        }
        .hp-why-sub {
          font-size: 17px;
          line-height: 1.65;
          color: var(--dim);
          padding-top: 8px;
        }
        .hp-why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .hp-why-card {
          position: relative;
          background: rgba(11,18,40,0.6);
          border: 1px solid var(--border);
          border-top: 2px solid rgba(6,182,212,0.35);
          border-radius: 12px;
          padding: 28px 24px 32px;
          overflow: hidden;
          transition: border-color 0.3s, background 0.3s, transform 0.3s;
        }
        .hp-why-card:hover {
          border-top-color: var(--cyan);
          background: rgba(11,18,40,0.85);
          transform: translateY(-3px);
        }
        .hp-why-card-blue {
          border-top-color: rgba(59,130,246,0.35);
        }
        .hp-why-card-blue:hover {
          border-top-color: var(--blue);
        }
        .hp-why-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 80px;
          background: linear-gradient(180deg, rgba(6,182,212,0.03) 0%, transparent 100%);
          pointer-events: none;
        }
        .hp-why-card-blue::after {
          background: linear-gradient(180deg, rgba(59,130,246,0.04) 0%, transparent 100%);
        }
        .hp-why-icon {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: rgba(6,182,212,0.07);
          border: 1px solid rgba(6,182,212,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }
        .hp-why-icon-blue {
          background: rgba(59,130,246,0.07);
          border-color: rgba(59,130,246,0.15);
        }
        .hp-why-num {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.1em;
          color: var(--muted);
          margin-bottom: 12px;
          position: relative;
          z-index: 1;
        }
        .hp-why-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 22px;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          color: var(--white);
          line-height: 1.1;
          margin-bottom: 12px;
          position: relative;
          z-index: 1;
        }
        .hp-why-body {
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--dim);
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }
        .hp-why-tag {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--cyan);
          opacity: 0.7;
          position: relative;
          z-index: 1;
        }
        .hp-why-tag-blue { color: var(--blue-light); }

        /* ── Industries Section ── */
        .hp-industries {
          padding: 100px 0 80px;
          position: relative;
          overflow: hidden;
        }
        .hp-industries::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent);
        }
        .hp-industries-inner {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .hp-industries-header {
          text-align: center;
          margin-bottom: 72px;
        }
        .hp-ind-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }
        .hp-ind-eyebrow::before,
        .hp-ind-eyebrow::after {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: var(--cyan);
          opacity: 0.6;
        }
        .hp-ind-h2 {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: clamp(2.6rem, 5vw, 4rem);
          color: var(--white);
          line-height: 1.0;
          margin: 0 0 16px;
          text-transform: uppercase;
        }
        .hp-ind-sub {
          font-size: 1rem;
          color: var(--dim);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .hp-ind-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .hp-ind-card {
          position: relative;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          padding: 28px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
          transition: border-color 0.25s, background 0.25s, transform 0.2s;
          overflow: hidden;
        }
        .hp-ind-card:hover {
          border-color: color-mix(in srgb, var(--ind-color) 40%, transparent);
          background: rgba(255,255,255,0.05);
          transform: translateY(-3px);
        }
        .hp-ind-card-glow {
          position: absolute;
          inset: 0;
          border-radius: 12px;
          background: radial-gradient(ellipse at 50% 0%, color-mix(in srgb, var(--ind-color) 12%, transparent) 0%, transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .hp-ind-card:hover .hp-ind-card-glow { opacity: 1; }
        .hp-ind-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 4px;
        }
        .hp-ind-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: color-mix(in srgb, var(--ind-color) 15%, transparent);
          border: 1px solid color-mix(in srgb, var(--ind-color) 30%, transparent);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ind-color);
          flex-shrink: 0;
        }
        .hp-ind-num {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 0.1em;
        }
        .hp-ind-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 1.3rem;
          color: var(--white);
          line-height: 1.15;
          margin: 0;
        }
        .hp-ind-desc {
          font-size: 0.875rem;
          color: var(--dim);
          line-height: 1.6;
          margin: 0;
          flex: 1;
        }
        .hp-ind-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 4px;
        }
        .hp-ind-pills span {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ind-color);
          background: color-mix(in srgb, var(--ind-color) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--ind-color) 25%, transparent);
          border-radius: 4px;
          padding: 3px 7px;
        }
        .hp-ind-more {
          font-size: 0.8rem;
          color: var(--muted);
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 4px;
          transition: color 0.2s;
        }
        .hp-ind-card:hover .hp-ind-more { color: var(--ind-color); }
        .hp-ind-more span { transition: transform 0.2s; }
        .hp-ind-card:hover .hp-ind-more span { transform: translateX(4px); }

        /* ═══ RESPONSIVE ═══ */
        @media (max-width: 1100px) {
          .hp-ind-grid { grid-template-columns: repeat(3, 1fr); }
          .hp-why-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .hp-headline { font-size: clamp(44px, 7vw, 80px); }
          .hp-sub { font-size: 16px; }
          .hp-badges { gap: 16px; flex-wrap: wrap; }
          .hp-badge { border-right: none; padding: 0 16px; }
          .hp-stats-row { flex-wrap: wrap; gap: 24px; }
          .hp-stat-divider { display: none; }
          .hp-stat { flex: 0 0 45%; padding: 0 16px; }
          .hp-stat-num { font-size: 52px; }
          .hp-stat-unit { font-size: 26px; }
          .hp-quote { font-size: 17px; }
          .hp-quote-block { padding: 0 20px; }
        }
        @media (max-width: 860px) {
          .hp-prod-row,
          .hp-prod-row-flip {
            flex-direction: column;
            gap: 32px;
          }
          .hp-prod-text { flex: none; width: 100%; }
          .hp-prod-visual { flex: none; width: 100%; max-width: 100%; }
          .hp-prod-row { margin-bottom: 60px; }
          .hp-why-header-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
        @media (max-width: 760px) {
          .hp-ind-grid { grid-template-columns: repeat(2, 1fr); }
          .hp-why-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .hp-products-inner { padding: 0 20px; }
          .hp-industries-inner { padding: 0 20px; }
          .hp-why-inner { padding: 0 20px; }
          .hp-proof-inner { padding: 0 20px; }
          .hp-hero { padding: 48px 16px 16px; }
          .hp-sub { margin-bottom: 28px; }
          .hp-cta-row { margin-bottom: 28px; }
          .hp-badges { margin-bottom: 16px; }
        }
        @media (max-width: 480px) {
          .hp-ind-grid { grid-template-columns: 1fr; }
          .hp-stat { flex: 0 0 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  )
}
