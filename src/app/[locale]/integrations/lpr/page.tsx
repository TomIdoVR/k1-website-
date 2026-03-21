import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { Link } from '@/i18n/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('integrationLpr', locale)
}

export default async function LprIntegrationPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#3b82f6'

  const faqs = es
    ? [
        {
          question: '¿Qué es el reconocimiento de placas vehiculares (LPR/ALPR)?',
          answer:
            'El Reconocimiento de Placas Vehiculares (LPR, License Plate Recognition, también llamado ALPR — Automatic License Plate Recognition) es una tecnología que captura imágenes de las placas de vehículos en movimiento y las convierte en texto buscable en tiempo real. Las cámaras LPR pueden procesar decenas de vehículos por segundo y cotejarlos automáticamente contra bases de datos de alertas — vehículos robados, placas con alertas activas, vehículos de personas buscadas.',
        },
        {
          question: '¿Cuál es la precisión del LPR en condiciones reales?',
          answer:
            'En condiciones óptimas (luz adecuada, velocidad menor a 100 km/h, placa limpia), los sistemas LPR modernos alcanzan entre 95% y 99% de precisión. En condiciones adversas — lluvia intensa, noche sin iluminación adecuada, placas sucias o dañadas — la precisión puede caer a 80-90%. Por eso los sistemas de grado público-safety usan múltiples lecturas por vehículo y confirman antes de generar una alerta. KabatOne aplica un proceso de confirmación con umbral configurable para reducir los falsos positivos.',
        },
        {
          question: '¿Qué cámaras son compatibles con el LPR de KabatOne?',
          answer:
            'KabatOne K-Video soporta cámaras LPR de todos los fabricantes principales — Axis, Milestone, Hikvision, Dahua, Genetec, y cámaras LPR dedicadas de fabricantes especializados como Genetec AutoVu, Vigilant/Motorola y Neology. La arquitectura es agnóstica al fabricante: K-Video recibe los eventos LPR mediante API o integración ONVIF/SDK y los integra en la plataforma sin requerir hardware propietario.',
        },
        {
          question: '¿Puede el LPR leer placas en movimiento a alta velocidad?',
          answer:
            'Sí. Las cámaras LPR de seguridad pública están diseñadas para capturar vehículos en movimiento a velocidades de hasta 200 km/h. Utilizan obturadores electrónicos de alta velocidad e iluminación infrarroja para capturar imágenes nítidas sin importar las condiciones de luz. Para operaciones en autopistas y corredores de alta velocidad, KabatOne recomienda cámaras LPR con iluminación IR integrada y resolución mínima de 2MP.',
        },
        {
          question: '¿Qué bases de datos se pueden integrar con el sistema LPR?',
          answer:
            'KabatOne puede integrarse con múltiples bases de datos de alertas: registros de vehículos robados (REPUVE en México, NCIC en Estados Unidos), listas de vehículos de personas buscadas, bases de datos de multas no pagadas, registros de control de acceso vehicular, y listas de interés creadas localmente por la operación. Las alertas se configuran por prioridad, y el sistema puede activar diferentes protocolos según el tipo de alerta detectada.',
        },
        {
          question: '¿Cómo se maneja la privacidad con los datos de LPR?',
          answer:
            'KabatOne aplica controles de acceso granulares: solo usuarios con permisos específicos pueden consultar el historial de movimiento de una placa. Los datos de lecturas LPR se retienen por un período configurable (típicamente 30-90 días para registros sin alerta) y se documenta cada consulta para auditoría. En México, el uso de LPR en espacios públicos es legal bajo la Ley General de Seguridad Pública; en Estados Unidos varía por estado.',
        },
      ]
    : [
        {
          question: 'What is License Plate Recognition (LPR/ALPR)?',
          answer:
            'License Plate Recognition (LPR, also called ALPR — Automatic License Plate Recognition) is a technology that captures images of vehicle license plates in motion and converts them to searchable text in real time. LPR cameras can process dozens of vehicles per second and automatically cross-reference them against alert databases — stolen vehicles, plates with active alerts, vehicles belonging to wanted persons.',
        },
        {
          question: 'How accurate is LPR in real-world conditions?',
          answer:
            'Under optimal conditions (adequate lighting, speeds below 60 mph, clean plate), modern LPR systems achieve 95–99% accuracy. In adverse conditions — heavy rain, night without adequate lighting, dirty or damaged plates — accuracy can drop to 80–90%. That is why public-safety-grade systems use multiple reads per vehicle and confirm before generating an alert. KabatOne applies a confirmation process with a configurable threshold to reduce false positives.',
        },
        {
          question: 'What cameras are compatible with KabatOne LPR?',
          answer:
            'KabatOne K-Video supports LPR cameras from all major manufacturers — Axis, Milestone, Hikvision, Dahua, Genetec, and dedicated LPR cameras from specialized vendors like Genetec AutoVu, Vigilant/Motorola, and Neology. The architecture is vendor-agnostic: K-Video receives LPR events via API or ONVIF/SDK integration and incorporates them into the platform without requiring proprietary hardware.',
        },
        {
          question: 'Can LPR read plates on vehicles moving at high speed?',
          answer:
            'Yes. Public-safety LPR cameras are designed to capture moving vehicles at speeds up to 125 mph. They use high-speed electronic shutters and infrared illumination to capture sharp images regardless of lighting conditions. For highway and high-speed corridor operations, KabatOne recommends LPR cameras with integrated IR illumination and minimum 2MP resolution.',
        },
        {
          question: 'What databases can be integrated with the LPR system?',
          answer:
            'KabatOne can integrate with multiple alert databases: stolen vehicle registries (REPUVE in Mexico, NCIC in the United States), wanted persons\' vehicle lists, outstanding warrant databases, vehicle access control records, and locally created watch lists. Alerts are configured by priority, and the system can activate different protocols based on the type of alert detected.',
        },
        {
          question: 'How is privacy handled with LPR data?',
          answer:
            'KabatOne applies granular access controls: only users with specific permissions can query the movement history of a plate. LPR read data is retained for a configurable period (typically 30–90 days for records without alerts), and every query is logged for audit. In the United States, LPR use in public spaces varies by state; KabatOne supports configurable retention policies and data minimization practices.',
        },
      ]

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Integraciones' : 'Integrations', url: es ? 'https://kabatone.com/es/integrations/' : 'https://kabatone.com/integrations/' },
    {
      name: es ? 'Reconocimiento de Placas (LPR)' : 'License Plate Recognition',
      url: es ? 'https://kabatone.com/es/integrations/lpr/' : 'https://kabatone.com/integrations/lpr/',
    },
  ]

  const sectionStyle: React.CSSProperties = {
    borderTop: '1px solid var(--border)',
    padding: '72px 32px',
  }
  const containerStyle: React.CSSProperties = {
    maxWidth: '820px',
    margin: '0 auto',
  }
  const h2Style: React.CSSProperties = {
    fontSize: 'clamp(24px, 3vw, 36px)',
    fontWeight: 800,
    fontFamily: 'Barlow Condensed, sans-serif',
    textTransform: 'uppercase',
    lineHeight: 1.1,
    marginBottom: '20px',
    marginTop: '0',
  }
  const pStyle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 300,
    color: 'var(--dim)',
    lineHeight: 1.8,
    marginBottom: '20px',
  }

  const useCases = es
    ? [
        { title: 'Recuperación de Vehículos Robados', desc: 'Cuando una placa registrada como robada pasa frente a cualquier cámara LPR de la red, el sistema genera una alerta inmediata al despachador con la ubicación exacta, el feed de video en vivo y las últimas lecturas de esa placa. El tiempo promedio de detección es menor a 3 segundos desde el cruce.' },
        { title: 'Alertas BOLO y Vehículos Buscados', desc: 'Los operadores pueden crear listas de interés locales (BOLO — Be On the Lookout) en tiempo real, sin necesidad de actualizar bases de datos centrales. El vehículo de un sospechoso en una investigación activa puede agregarse a la lista en segundos y ser detectado en cualquier punto de la red LPR.' },
        { title: 'Gestión de Tráfico y Aforo Vehicular', desc: 'Las lecturas LPR de tráfico general permiten calcular velocidades promedio, tiempos de trayecto y flujo vehicular por corredor. Esta información alimenta los algoritmos de optimización semafórica de K-Traffic y puede detectar congestiones anómalas que indiquen accidentes o bloqueos.' },
        { title: 'Recolección de Evidencia Digital', desc: 'Cuando ocurre un delito, los investigadores pueden consultar el historial de lecturas LPR de los últimos días/semanas para rastrear los movimientos del vehículo sospechoso. La consulta incluye imagen de la placa, imagen del vehículo completo, ubicación GPS y timestamp exacto — todo en un solo reporte exportable.' },
      ]
    : [
        { title: 'Stolen Vehicle Recovery', desc: 'When a plate registered as stolen passes in front of any LPR camera in the network, the system generates an immediate alert to the dispatcher with the exact location, live video feed, and the most recent reads from that plate. Average detection time is under 3 seconds from the crossing.' },
        { title: 'BOLO and Wanted Vehicle Alerts', desc: 'Operators can create local watch lists (BOLO — Be On the Lookout) in real time without needing to update central databases. A suspect\'s vehicle in an active investigation can be added to the list in seconds and detected at any point in the LPR network.' },
        { title: 'Traffic Management and Vehicle Counts', desc: 'General traffic LPR reads allow calculating average speeds, travel times, and vehicle flow by corridor. This information feeds K-Traffic\'s signal optimization algorithms and can detect abnormal congestion indicating accidents or blockages.' },
        { title: 'Digital Evidence Collection', desc: 'When a crime occurs, investigators can query the LPR read history from the past days or weeks to track the suspect vehicle\'s movements. The query includes the plate image, full vehicle image, GPS location, and exact timestamp — all in a single exportable report.' },
      ]

  return (
    <>
      <Nav />

      {/* ── Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema(
              es
                ? 'Integración de Reconocimiento de Placas Vehiculares (LPR)'
                : 'License Plate Recognition (LPR) Integration',
              es
                ? 'Cómo KabatOne integra LPR y ALPR en operaciones de seguridad pública. Cotejo en tiempo real con listas de alertas y captura automática de evidencia.'
                : 'How KabatOne integrates LPR and ALPR into public safety operations. Real-time hot list matching, stolen vehicle alerts, and automatic evidence capture.',
              es ? 'https://kabatone.com/es/integrations/lpr/' : 'https://kabatone.com/integrations/lpr/',
              '2026-03-20'
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />

      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── BREADCRUMB ── */}
        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '24px 32px 0' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '12px', color: 'var(--muted)', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
              {es ? 'Inicio' : 'Home'}
            </Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--dim)' }}>
              {es ? 'Integraciones' : 'Integrations'}
            </span>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--dim)' }}>
              {es ? 'Reconocimiento de Placas (LPR)' : 'License Plate Recognition'}
            </span>
          </nav>
        </div>

        {/* ── HERO ── */}
        <section style={{ padding: '48px 32px 64px' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Integración de Tecnología' : 'Technology Integration'}
            </p>
            <h1 style={{
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 800,
              fontFamily: 'Barlow Condensed, sans-serif',
              textTransform: 'uppercase',
              lineHeight: 1.05,
              marginBottom: '24px',
            }}>
              {es
                ? 'Reconocimiento de Placas Vehiculares (LPR): Inteligencia Vehicular en Tiempo Real'
                : 'LPR Integration: Real-Time Vehicle Intelligence'}
            </h1>
            <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.8, maxWidth: '720px', marginBottom: '40px' }}>
              {es
                ? 'El reconocimiento de placas vehiculares convierte cada corredor monitorizado en un punto de inteligencia táctica. KabatOne integra LPR nativamente con gestión de video, despacho CAD y GIS para que cuando una placa de interés aparezca en la red, el despachador tenga contexto completo en segundos — no en minutos.'
                : 'License plate recognition turns every monitored corridor into a tactical intelligence point. KabatOne integrates LPR natively with video management, CAD dispatch, and GIS so that when a plate of interest appears on the network, the dispatcher has full context in seconds — not minutes.'}
            </p>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <img
                src="/images/integrations/lpr-hero.jpeg"
                alt={es ? 'Dashboard LPR en tiempo real — detección de placas vehiculares con alertas activas' : 'Real-time LPR dashboard — license plate detection with active alerts'}
                style={{ width: '100%', display: 'block' }}
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* ── WHAT IS LPR ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? '¿Qué Es el Reconocimiento de Placas Vehiculares?' : 'What Is License Plate Recognition?'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'El Reconocimiento de Placas Vehiculares (LPR o ALPR — Automatic License Plate Recognition) es un sistema que captura imágenes de las placas de los vehículos en movimiento, las convierte en texto mediante reconocimiento óptico de caracteres (OCR), y las coteja automáticamente contra bases de datos de alertas. El proceso completo ocurre en menos de un segundo — mucho más rápido de lo que un operador humano podría revisar manualmente.'
                : 'License Plate Recognition (LPR, also called ALPR — Automatic License Plate Recognition) is a system that captures images of vehicle license plates in motion, converts them to text using optical character recognition (OCR), and automatically cross-references them against alert databases. The entire process occurs in under one second — far faster than a human operator could manually review.'}
            </p>
            <p style={pStyle}>
              {es
                ? 'Las cámaras LPR modernas son mucho más que simples cámaras de seguridad. Utilizan obturadores electrónicos de alta velocidad, iluminación infrarroja activa y algoritmos de visión artificial especializados para capturar placas nítidas en cualquier condición: lluvia, noche, vehículos en movimiento a alta velocidad, placas parcialmente obstruidas. Los sistemas más avanzados pueden procesar múltiples carriles simultáneamente y detectar varios vehículos en la misma imagen.'
                : 'Modern LPR cameras are much more than simple security cameras. They use high-speed electronic shutters, active infrared illumination, and specialized computer vision algorithms to capture sharp plates in any condition: rain, night, high-speed moving vehicles, partially obscured plates. The most advanced systems can process multiple lanes simultaneously and detect several vehicles in the same image.'}
            </p>
            <p style={pStyle}>
              {es
                ? 'La integración con plataformas operativas como KabatOne es lo que transforma el LPR de una herramienta de registro pasivo a una herramienta de inteligencia activa. Sin integración, las lecturas LPR son datos almacenados que alguien tiene que consultar manualmente. Con integración, las alertas se generan automáticamente y llegan al despachador correcto en el momento correcto, con el contexto de video y ubicación ya incluido.'
                : 'Integration with operational platforms like KabatOne is what transforms LPR from a passive logging tool into an active intelligence tool. Without integration, LPR reads are stored data that someone has to query manually. With integration, alerts are generated automatically and reach the right dispatcher at the right moment, with video and location context already included.'}
            </p>
          </div>
        </section>

        {/* ── HOW KABATONE INTEGRATES LPR ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'Cómo KabatOne Integra el LPR' : 'How KabatOne Integrates LPR'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'KabatOne K-Video es agnóstico al fabricante de cámaras LPR. Independientemente de la marca — Axis, Hikvision, Genetec AutoVu, Neology, Vigilant/Motorola — K-Video recibe los eventos LPR mediante API estándar o integración ONVIF/SDK y los procesa en la plataforma unificada.'
                : 'KabatOne K-Video is vendor-agnostic for LPR cameras. Regardless of brand — Axis, Hikvision, Genetec AutoVu, Neology, Vigilant/Motorola — K-Video receives LPR events via standard API or ONVIF/SDK integration and processes them in the unified platform.'}
            </p>
            <p style={pStyle}>
              {es
                ? 'Cuando una cámara LPR registra una lectura, K-Video la coteja automáticamente contra todas las listas de alertas configuradas. Si hay una coincidencia, se genera una alerta de alta prioridad que aparece simultáneamente en el mapa GIS de K-Safety, en la consola del despachador de K-Dispatch, y en la pantalla del analista — con la imagen de la placa, el feed de video en vivo del punto de lectura, y todas las lecturas anteriores de esa placa en los últimos días.'
                : 'When an LPR camera registers a read, K-Video automatically cross-references it against all configured alert lists. If there is a match, a high-priority alert is generated that appears simultaneously on the K-Safety GIS map, on the K-Dispatch dispatcher console, and on the analyst screen — with the plate image, the live video feed from the read point, and all previous reads of that plate in recent days.'}
            </p>
            <p style={pStyle}>
              {es
                ? 'Para lecturas sin alerta (el 99%+ del tráfico), los datos se almacenan en una base de datos consultable con retención configurable. Los investigadores pueden buscar una placa y obtener un historial completo de movimientos — fecha, hora, ubicación, imagen — en segundos. Este historial es admisible como evidencia digital cuando está generado por el sistema con cadena de custodia documentada.'
                : 'For reads without alerts (99%+ of traffic), the data is stored in a queryable database with configurable retention. Investigators can search a plate and get a complete movement history — date, time, location, image — in seconds. This history is admissible as digital evidence when generated by the system with documented chain of custody.'}
            </p>
          </div>
        </section>

        {/* ── LPR FLOW DIAGRAM ── */}
        <section style={{ padding: '0 32px 72px' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Flujo de Integración' : 'Integration Flow'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '24px' }}>
              {es ? 'De la Placa a la Alerta en Menos de 3 Segundos' : 'From Plate to Alert in Under 3 Seconds'}
            </h2>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <img
                src="/images/integrations/lpr-flow.jpeg"
                alt={es ? 'Flujo de procesamiento LPR: cámara → OCR → cotejo → alerta → despachador' : 'LPR processing flow: camera → OCR → hot list check → alert → dispatcher'}
                style={{ width: '100%', display: 'block' }}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'Casos de Uso Principales' : 'Primary Use Cases'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'El LPR integrado con KabatOne tiene aplicaciones directas en operaciones policiales, investigación criminal y gestión de tráfico:'
                : 'LPR integrated with KabatOne has direct applications in police operations, criminal investigations, and traffic management:'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="usecase-grid">
              {useCases.map((uc, i) => (
                <div
                  key={i}
                  style={{
                    background: '#0b1628',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    borderLeft: `3px solid ${ACCENT}`,
                    padding: '24px',
                  }}
                >
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 700,
                    fontSize: '17px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                    marginBottom: '10px',
                    marginTop: '0',
                  }}>
                    {uc.title}
                  </h3>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>
                    {uc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECHNICAL SPECS ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'Capacidades Técnicas' : 'Technical Capabilities'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Las especificaciones técnicas del sistema LPR integrado en KabatOne para operaciones de seguridad pública:'
                : 'Technical specifications of the LPR system integrated in KabatOne for public safety operations:'}
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--dim)', fontWeight: 600, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '12px' }}>
                      {es ? 'Capacidad' : 'Capability'}
                    </th>
                    <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--dim)', fontWeight: 600, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '12px' }}>
                      {es ? 'Especificación' : 'Specification'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {(es
                    ? [
                        ['Precisión de lectura', '95–99% en condiciones óptimas'],
                        ['Velocidad de procesamiento', 'Hasta 200 km/h'],
                        ['Tiempo de alerta', '< 3 segundos desde la lectura'],
                        ['Compatibilidad de fabricantes', 'Axis, Hikvision, Genetec AutoVu, Neology, Vigilant y más'],
                        ['Retención de datos', 'Configurable: 30 días a 5 años'],
                        ['Acceso concurrente', 'Múltiples usuarios simultáneos con control de permisos'],
                        ['Integración CAD', 'Bidireccional nativa con K-Dispatch'],
                        ['Exportación de evidencia', 'PDF, CSV con imagen y metadata de cadena de custodia'],
                      ]
                    : [
                        ['Read accuracy', '95–99% under optimal conditions'],
                        ['Processing speed', 'Up to 125 mph'],
                        ['Alert time', '< 3 seconds from read'],
                        ['Vendor compatibility', 'Axis, Hikvision, Genetec AutoVu, Neology, Vigilant, and more'],
                        ['Data retention', 'Configurable: 30 days to 5 years'],
                        ['Concurrent access', 'Multiple simultaneous users with permission controls'],
                        ['CAD integration', 'Native bidirectional with K-Dispatch'],
                        ['Evidence export', 'PDF, CSV with image and chain-of-custody metadata'],
                      ]
                  ).map(([cap, spec], i) => (
                    <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '14px 16px', color: 'var(--white)', fontWeight: 500 }}>{cap}</td>
                      <td style={{ padding: '14px 16px', color: 'var(--dim)', fontWeight: 300 }}>{spec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── RELATED PRODUCTS ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Productos Relacionados' : 'Related Products'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '12px' }}>
              {es ? 'KabatOne para Operaciones LPR' : 'KabatOne for LPR Operations'}
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '28px' }}>
              {es
                ? 'Los módulos de KabatOne que trabajan en conjunto con la integración LPR:'
                : 'KabatOne modules that work together with LPR integration:'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { href: '/k-video', label: 'K-Video', desc: es ? 'Gestión de Video + LPR' : 'Video Mgmt + LPR', color: '#a855f7' },
                { href: '/k-dispatch', label: 'K-Dispatch', desc: es ? 'Despacho CAD' : 'CAD Dispatch', color: '#ef4444' },
                { href: '/k-safety', label: 'K-Safety', desc: es ? 'GIS en Tiempo Real' : 'Real-Time GIS', color: '#3b82f6' },
                { href: '/k-traffic', label: 'K-Traffic', desc: es ? 'Tráfico y Flujo' : 'Traffic Flow', color: '#06b6d4' },
              ].map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border)',
                    borderRadius: '6px',
                    padding: '10px 16px',
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--dim)',
                    textDecoration: 'none',
                  }}
                >
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: p.color }} />
                  {p.label}
                  <span style={{ color: 'var(--muted)', fontSize: '10px', letterSpacing: '0.1em' }}>{p.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '32px' }}>
              {es ? 'Preguntas Comunes sobre LPR' : 'Common LPR Questions'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: '#0b1220', borderRadius: '12px', border: '1px solid var(--border)', padding: '24px 28px' }}>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '17px', letterSpacing: '0.02em', textTransform: 'uppercase', marginBottom: '10px', marginTop: '0', color: 'var(--white)' }}>
                    {faq.question}
                  </h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED ARTICLES ── */}
        <section style={{ padding: '64px 0', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: ACCENT, marginBottom: '24px' }}>
              {es ? 'Artículos Relacionados' : 'Related Articles'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { href: '/resources/rtcc-setup-guide', label: es ? 'Guía de Implementación RTCC' : 'RTCC Setup Guide' },
                { href: '/resources/ai-in-public-safety', label: es ? 'IA en Seguridad Pública: Guía para Ciudades' : 'AI in Public Safety: A Guide for Cities' },
                { href: '/integrations/sensor-fusion', label: es ? 'Fusión de Sensores para Seguridad Pública' : 'Sensor Fusion for Public Safety' },
                { href: '/resources/what-is-a-public-safety-platform', label: es ? '¿Qué Es una Plataforma de Seguridad Pública?' : 'What Is a Public Safety Platform?' },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderRadius: '8px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--dim)', fontSize: '15px' }}>
                  <span>{link.label}</span>
                  <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          es={es}
          h2={es ? 'Integra LPR con tu Centro de Mando' : 'Integrate LPR with Your Command Center'}
          subtitle={es
            ? 'KabatOne conecta lectores de placas de cualquier fabricante con tu sistema CAD, video y GIS. Solicita una demo con datos reales de ciudad.'
            : 'KabatOne connects license plate readers from any vendor with your CAD, video, and GIS system. Request a demo with real city data.'}
        />

        <Footer es={es} />

        <style>{`
          @media (max-width: 640px) {
            .usecase-grid { grid-template-columns: 1fr !important; }
            section { padding-left: 20px !important; padding-right: 20px !important; }
          }
        `}</style>
      </div>
    </>
  )
}
