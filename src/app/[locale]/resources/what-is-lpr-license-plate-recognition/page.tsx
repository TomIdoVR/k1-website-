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
  return generatePageMetadata('whatIsLprLicensePlateRecognition', locale)
}

export default async function WhatIsLprPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#3b82f6'

  /* ── FAQ data ── */
  const faqs = es
    ? [
        {
          question: '¿Qué es el reconocimiento de placas vehiculares (LPR/ALPR)?',
          answer:
            'El Reconocimiento de Placas Vehiculares (LPR — License Plate Recognition, también llamado ALPR — Automatic License Plate Recognition) es una tecnología que captura imágenes de las placas de vehículos en movimiento y las convierte en texto digital buscable en tiempo real. Las cámaras LPR pueden procesar decenas de vehículos por segundo y cotejarlos automáticamente contra bases de datos de alertas — vehículos robados, placas con órdenes de búsqueda activas, vehículos de personas con arrestos pendientes.',
        },
        {
          question: '¿Cómo funciona el LPR paso a paso?',
          answer:
            'El proceso tiene cuatro etapas: (1) Captura — la cámara LPR detecta el vehículo y captura una imagen de alta velocidad de la placa usando iluminación infrarroja. (2) OCR — el software de reconocimiento óptico de caracteres (OCR) convierte los píxeles de la imagen en texto de la matrícula. (3) Cotejo — el sistema compara la placa extraída contra una o varias bases de datos de alertas en milisegundos. (4) Alerta — si hay coincidencia, el sistema genera una alerta al operador con la imagen del vehículo, la placa leída, el tipo de alerta y la ubicación exacta.',
        },
        {
          question: '¿Cuál es la precisión del LPR en condiciones reales?',
          answer:
            'En condiciones óptimas (iluminación adecuada, velocidad menor a 100 km/h, placa limpia y no obstruida), los sistemas LPR modernos alcanzan entre 95% y 99% de precisión. En condiciones adversas — lluvia intensa, noche sin iluminación IR, placas sucias o dañadas — la precisión puede caer a 80-90%. Los sistemas de grado seguridad pública aplican múltiples lecturas por vehículo y un umbral de confianza configurable para reducir falsos positivos antes de activar una alerta.',
        },
        {
          question: '¿Cuál es la diferencia entre LPR fijo y móvil?',
          answer:
            'El LPR fijo se instala en postes, puentes o accesos controlados — cubre un punto específico de forma permanente y genera historial de movimiento de todos los vehículos que pasan. El LPR móvil se monta en vehículos policiales o patrullas — lee placas de los vehículos estacionados o en movimiento mientras la patrulla circula, ampliando la cobertura geográfica sin infraestructura fija. Los sistemas avanzados como KabatOne integran ambos tipos en un solo mapa operativo.',
        },
        {
          question: '¿Qué bases de datos se pueden integrar con LPR?',
          answer:
            'Los sistemas LPR de seguridad pública se integran con: registros de vehículos robados (REPUVE en México, NCIC en Estados Unidos), listas de vehículos con arrestos pendientes o alertas activas, bases de datos de multas e infracciones no pagadas, registros de control de acceso vehicular para instalaciones críticas, y listas de interés creadas localmente por la operación. Las alertas se configuran por prioridad y el sistema activa protocolos específicos según el tipo de alerta detectada.',
        },
        {
          question: '¿Cómo se integra el LPR en una plataforma de seguridad pública?',
          answer:
            'En una plataforma unificada como KabatOne, el LPR no opera como sistema aislado. Cada lectura de placa se superpone sobre el mapa GIS en tiempo real, mostrando la posición del vehículo junto con todas las unidades de respuesta activas. Cuando se genera una alerta, el operador puede ver simultáneamente las cámaras de videovigilancia cercanas al vehículo detectado y despachar la unidad más próxima directamente desde la misma interfaz, sin cambiar de sistema.',
        },
      ]
    : [
        {
          question: 'What is License Plate Recognition (LPR/ALPR)?',
          answer:
            'License Plate Recognition (LPR, also called ALPR — Automatic License Plate Recognition) is a technology that captures images of vehicle license plates in motion and converts them to searchable digital text in real time. LPR cameras can process dozens of vehicles per second and automatically cross-reference them against alert databases — stolen vehicles, plates with active warrants, vehicles belonging to wanted persons.',
        },
        {
          question: 'How does LPR work step by step?',
          answer:
            'The process has four stages: (1) Capture — the LPR camera detects the vehicle and captures a high-speed image of the plate using infrared illumination. (2) OCR — optical character recognition software converts the plate image pixels into text. (3) Cross-reference — the system compares the extracted plate against one or more alert databases in milliseconds. (4) Alert — if there is a match, the system generates an alert to the operator with the vehicle image, read plate, alert type, and exact location.',
        },
        {
          question: 'How accurate is LPR in real-world conditions?',
          answer:
            'Under optimal conditions (adequate lighting, speeds below 60 mph, clean and unobstructed plate), modern LPR systems achieve 95–99% accuracy. In adverse conditions — heavy rain, night without IR illumination, dirty or damaged plates — accuracy can fall to 80–90%. Public-safety-grade systems apply multiple reads per vehicle and a configurable confidence threshold to reduce false positives before triggering an alert.',
        },
        {
          question: 'What is the difference between fixed and mobile LPR?',
          answer:
            'Fixed LPR is installed on poles, bridges, or controlled access points — it covers a specific location permanently and builds movement history for every vehicle that passes. Mobile LPR is mounted on police or patrol vehicles — it reads plates of parked or moving vehicles as the patrol drives, extending geographic coverage without fixed infrastructure. Advanced platforms like KabatOne integrate both types into a single operational map.',
        },
        {
          question: 'What databases can be integrated with LPR?',
          answer:
            'Public-safety LPR systems integrate with: stolen vehicle registries (REPUVE in Mexico, NCIC in the United States), lists of vehicles with active warrants or alerts, unpaid fines and traffic violation databases, vehicle access control records for critical facilities, and custom watch lists created locally by the operation. Alerts are configured by priority and the system activates specific protocols based on the type of alert detected.',
        },
        {
          question: 'How does LPR integrate into a public safety platform?',
          answer:
            'In a unified platform like KabatOne, LPR does not operate as an isolated system. Every plate read is overlaid on the real-time GIS map, showing the vehicle position alongside all active response units. When an alert is generated, the operator can simultaneously view nearby surveillance cameras and dispatch the closest unit directly from the same interface — no system switching required.',
        },
      ]

  const faqSchema = faqPageSchema(faqs)
  const artSchema = articleSchema(
    es
      ? '¿Qué Es el Reconocimiento de Placas Vehiculares (LPR/ALPR)?'
      : 'What Is License Plate Recognition (LPR/ALPR)?',
    es
      ? 'Guía completa sobre LPR/ALPR: cómo funciona el reconocimiento automático de placas, tipos fijo y móvil, precisión, bases de datos y su integración en plataformas de seguridad pública.'
      : 'Complete guide to LPR/ALPR: how automatic license plate recognition works, fixed vs mobile types, accuracy, database integration, and deployment in public safety platforms.',
    es
      ? 'https://kabatone.com/es/resources/what-is-lpr-license-plate-recognition/'
      : 'https://kabatone.com/resources/what-is-lpr-license-plate-recognition/',
    '2026-04-07'
  )
  const bcSchema = breadcrumbSchema([
    { name: 'Home', url: 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: 'https://kabatone.com/resources/' },
    {
      name: es ? '¿Qué Es el LPR?' : 'What Is LPR?',
      url: es
        ? 'https://kabatone.com/es/resources/what-is-lpr-license-plate-recognition/'
        : 'https://kabatone.com/resources/what-is-lpr-license-plate-recognition/',
    },
  ])

  /* ── How it works steps ── */
  const steps = es
    ? [
        { n: '01', title: 'Captura', desc: 'La cámara LPR detecta el vehículo y captura una imagen de alta resolución de la placa usando iluminación infrarroja, incluso en condiciones de poca luz.' },
        { n: '02', title: 'OCR — Reconocimiento', desc: 'El motor OCR convierte los píxeles de la imagen en texto de la matrícula. Los sistemas modernos procesan la imagen en menos de 100 ms.' },
        { n: '03', title: 'Cotejo contra bases de datos', desc: 'La placa extraída se compara contra una o varias bases de datos de alertas configuradas: robados, buscados, infracciones, listas de interés.' },
        { n: '04', title: 'Alerta al operador', desc: 'En caso de coincidencia, el operador recibe una alerta inmediata con imagen del vehículo, placa leída, tipo de alerta y ubicación GPS exacta.' },
      ]
    : [
        { n: '01', title: 'Capture', desc: 'The LPR camera detects the vehicle and captures a high-resolution plate image using infrared illumination — effective even in low-light conditions.' },
        { n: '02', title: 'OCR — Recognition', desc: 'The OCR engine converts plate image pixels into text. Modern systems process the image in under 100ms.' },
        { n: '03', title: 'Database cross-reference', desc: 'The extracted plate is compared against one or more configured alert databases: stolen, wanted, violations, watch lists.' },
        { n: '04', title: 'Operator alert', desc: 'On a match, the operator receives an immediate alert with the vehicle image, read plate, alert type, and exact GPS location.' },
      ]

  /* ── Fixed vs Mobile comparison ── */
  const comparison = es
    ? {
        headers: ['Característica', 'LPR Fijo', 'LPR Móvil'],
        rows: [
          ['Instalación', 'Postes, puentes, accesos', 'Vehículo policial / patrulla'],
          ['Cobertura', 'Punto específico, 24/7', 'Geográfica variable según ruta'],
          ['Historial de movimiento', 'Completo en ese punto', 'Parcial según recorridos'],
          ['Costo de infraestructura', 'Mayor (instalación fija)', 'Menor (solo unidad móvil)'],
          ['Uso ideal', 'Accesos, autopistas, centros', 'Operaciones de patrullaje'],
          ['Integración con GIS', 'Punto fijo en el mapa', 'Posición dinámica en el mapa'],
        ],
      }
    : {
        headers: ['Feature', 'Fixed LPR', 'Mobile LPR'],
        rows: [
          ['Installation', 'Poles, bridges, access points', 'Police / patrol vehicle'],
          ['Coverage', 'Specific point, 24/7', 'Variable geographic area by route'],
          ['Movement history', 'Complete at that point', 'Partial by patrol routes'],
          ['Infrastructure cost', 'Higher (fixed installation)', 'Lower (unit only)'],
          ['Ideal use', 'Access points, highways, centers', 'Patrol operations'],
          ['GIS integration', 'Fixed point on map', 'Dynamic position on map'],
        ],
      }

  /* ── Use cases ── */
  const useCases = es
    ? [
        { title: 'Detección de vehículos robados', desc: 'Cotejo en tiempo real contra el REPUVE u otras bases de datos de vehículos robados. Alerta inmediata a la unidad más cercana.' },
        { title: 'Control de acceso vehicular', desc: 'Verificación automática de placas autorizadas en instalaciones críticas — gobierno, aeropuertos, puertos, estadios.' },
        { title: 'Seguimiento de sospechosos', desc: 'Creación de listas de interés con placas de vehículos relacionados a investigaciones activas. Alerta al detectarlos en cualquier punto de la red.' },
        { title: 'Análisis de tráfico y flujo', desc: 'Conteo de vehículos por carril, velocidad promedio y patrones de flujo para optimización de tráfico y planificación urbana.' },
        { title: 'Corredores de seguridad', desc: 'Monitoreo de rutas de alto riesgo — accesos a ciudades, corredores comerciales, zonas de alto índice delictivo.' },
        { title: 'Operaciones de búsqueda activa', desc: 'Alerta en tiempo real cuando un vehículo buscado aparece en cualquier cámara LPR de la red — fija o móvil.' },
      ]
    : [
        { title: 'Stolen vehicle detection', desc: 'Real-time cross-reference against stolen vehicle registries (NCIC, REPUVE). Immediate alert to the nearest response unit.' },
        { title: 'Vehicle access control', desc: 'Automatic verification of authorized plates at critical facilities — government buildings, airports, ports, stadiums.' },
        { title: 'Suspect tracking', desc: 'Create watch lists with plates linked to active investigations. Alert when detected at any point in the network.' },
        { title: 'Traffic flow analysis', desc: 'Vehicle count by lane, average speed, and flow patterns for traffic optimization and urban planning.' },
        { title: 'Security corridors', desc: 'Monitoring of high-risk routes — city access points, commercial corridors, high-crime zones.' },
        { title: 'Active search operations', desc: 'Real-time alert when a wanted vehicle appears on any LPR camera in the network — fixed or mobile.' },
      ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(artSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bcSchema) }} />

      <Nav />

      <main style={{ background: '#060d18', color: '#e2e8f0', fontFamily: "'Inter', sans-serif", minHeight: '100vh' }}>

        {/* ── Hero ── */}
        <section style={{ paddingTop: '100px', paddingBottom: '60px', background: 'linear-gradient(180deg,#0a1628 0%,#060d18 100%)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: ACCENT, background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '4px', padding: '3px 10px' }}>
                {es ? 'Guía de Referencia' : 'Reference Guide'}
              </span>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#64748b', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', padding: '3px 10px' }}>
                K-Video · K-Safety
              </span>
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '.01em', color: '#f0f4f8', marginBottom: '20px' }}>
              {es
                ? '¿Qué Es el Reconocimiento de Placas Vehiculares (LPR/ALPR)?'
                : 'What Is License Plate Recognition (LPR/ALPR)?'}
            </h1>
            <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.7, maxWidth: '720px', marginBottom: '32px' }}>
              {es
                ? 'El LPR (License Plate Recognition) captura y convierte placas vehiculares en texto buscable en tiempo real, cotejándolas automáticamente contra bases de datos de alertas. Esta guía explica cómo funciona, tipos fijo y móvil, precisión y su integración en plataformas de seguridad pública.'
                : 'LPR (License Plate Recognition) captures and converts vehicle plates into searchable text in real time, automatically cross-referencing them against alert databases. This guide explains how it works, fixed vs mobile types, accuracy, and integration into public safety platforms.'}
            </p>
            <div style={{ fontSize: '12px', color: '#475569', lineHeight: 2 }}>
              <span style={{ marginRight: '8px', fontWeight: 600, color: '#64748b' }}>{es ? 'Integración:' : 'Integration:'}</span>
              <Link href="/integrations/lpr" style={{ color: ACCENT, textDecoration: 'none', marginRight: '14px' }}>{es ? 'Integración LPR' : 'LPR Integration'}</Link>
              <Link href="/integrations/sensor-fusion" style={{ color: ACCENT, textDecoration: 'none', marginRight: '14px' }}>{es ? 'Fusión de Sensores' : 'Sensor Fusion'}</Link>
              <Link href="/integrations/face-recognition" style={{ color: ACCENT, textDecoration: 'none' }}>{es ? 'Reconocimiento Facial' : 'Face Recognition'}</Link>
              <br />
              <span style={{ marginRight: '8px', fontWeight: 600, color: '#64748b' }}>{es ? 'Recursos:' : 'Resources:'}</span>
              <Link href="/resources/what-is-a-real-time-crime-center" style={{ color: '#94a3b8', textDecoration: 'none', marginRight: '14px' }}>RTCC</Link>
              <Link href="/resources/what-is-situational-awareness-software" style={{ color: '#94a3b8', textDecoration: 'none', marginRight: '14px' }}>{es ? 'Conciencia Situacional' : 'Situational Awareness'}</Link>
              <Link href="/resources/what-is-video-management-software" style={{ color: '#94a3b8', textDecoration: 'none' }}>VMS</Link>
            </div>
          </div>
        </section>

        {/* ── Definition ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '16px' }}>
            {es ? 'Definición' : 'Definition'}
          </h2>
          <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, marginBottom: '16px' }}>
            {es
              ? 'El Reconocimiento de Placas Vehiculares (LPR) es una tecnología de visión artificial que captura imágenes de placas de vehículos en movimiento y las convierte en texto digital buscable en tiempo real. El término ALPR (Automatic License Plate Recognition) se usa como sinónimo, siendo más común en el contexto norteamericano.'
              : 'License Plate Recognition (LPR) is a computer vision technology that captures images of vehicle license plates in motion and converts them into searchable digital text in real time. The term ALPR (Automatic License Plate Recognition) is used synonymously, more common in the North American context.'}
          </p>
          <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, marginBottom: '16px' }}>
            {es
              ? 'Los sistemas LPR procesan decenas de vehículos por segundo, incluso a alta velocidad y en condiciones de poca luz, gracias a la combinación de cámaras de alta velocidad, iluminación infrarroja y algoritmos de reconocimiento óptico de caracteres (OCR) entrenados específicamente para el formato de placas vehiculares.'
              : 'LPR systems process dozens of vehicles per second, even at high speed and in low-light conditions, through the combination of high-speed cameras, infrared illumination, and optical character recognition (OCR) algorithms trained specifically for vehicle plate formats.'}
          </p>
          <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.8 }}>
            {es
              ? 'En el contexto de seguridad pública y comando unificado, el LPR no opera como sistema aislado. Su valor real está en la integración con mapas GIS, videovigilancia y sistemas de despacho — permitiendo al operador detectar, localizar y responder a un vehículo de interés desde una sola interfaz operativa.'
              : 'In the context of public safety and unified command, LPR does not operate as an isolated system. Its real value is in integration with GIS maps, video surveillance, and dispatch systems — allowing the operator to detect, locate, and respond to a vehicle of interest from a single operational interface.'}
          </p>
        </section>

        {/* ── How it works ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '8px' }}>
            {es ? 'Cómo Funciona el LPR' : 'How LPR Works'}
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '28px' }}>
            {es ? 'Desde la captura de imagen hasta la alerta al operador' : 'From image capture to operator alert'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '14px' }}>
            {steps.map((s) => (
              <div key={s.n} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '20px 20px', borderTop: `2px solid ${ACCENT}` }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', fontWeight: 700, color: ACCENT, letterSpacing: '.1em', marginBottom: '8px' }}>{s.n}</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#f0f4f8', marginBottom: '8px' }}>{s.title}</div>
                <div style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Fixed vs Mobile ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '16px' }}>
            {es ? 'LPR Fijo vs LPR Móvil' : 'Fixed LPR vs Mobile LPR'}
          </h2>
          <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, marginBottom: '24px' }}>
            {es
              ? 'Los sistemas LPR de seguridad pública se despliegan en dos modalidades complementarias. Las operaciones maduras combinan ambas en un mapa operativo unificado.'
              : 'Public safety LPR systems deploy in two complementary modes. Mature operations combine both in a unified operational map.'}
          </p>
          <div style={{ overflowX: 'auto', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: 'rgba(59,130,246,0.08)' }}>
                  {comparison.headers.map((h, i) => (
                    <th key={i} style={{ padding: '12px 16px', textAlign: 'left', fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: i === 0 ? '#64748b' : i === 1 ? '#94a3b8' : ACCENT, borderBottom: '1px solid rgba(255,255,255,0.08)', fontWeight: 700 }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row, ri) => (
                  <tr key={ri} style={{ borderBottom: ri < comparison.rows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none', background: ri % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={{ padding: '12px 16px', color: ci === 0 ? '#94a3b8' : '#f0f4f8', fontWeight: ci === 2 ? 600 : 400 }}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Use cases ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '8px' }}>
            {es ? 'Casos de Uso en Seguridad Pública' : 'Public Safety Use Cases'}
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '28px' }}>
            {es ? 'Aplicaciones operativas del LPR en municipios, C4/C5 y centros de mando' : 'Operational LPR applications for municipalities, C4/C5, and command centers'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '14px' }}>
            {useCases.map((uc, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '18px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', fontWeight: 700, color: ACCENT }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#f0f4f8' }}>{uc.title}</span>
                </div>
                <p style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{uc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '28px' }}>
            {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '20px 22px' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#f0f4f8', marginBottom: '10px' }}>{faq.question}</div>
                <div style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.7 }}>{faq.answer}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#475569', marginBottom: '14px' }}>
            {es ? 'Recursos Relacionados' : 'Related Resources'}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[
              { href: '/resources/what-is-a-real-time-crime-center', label: es ? 'Centro de Crimen en Tiempo Real' : 'Real-Time Crime Center' },
              { href: '/resources/what-is-situational-awareness-software', label: es ? 'Conciencia Situacional' : 'Situational Awareness' },
              { href: '/resources/what-is-video-management-software', label: es ? 'Software de Gestión de Video' : 'Video Management Software' },
              { href: '/resources/what-is-gunshot-detection-software', label: es ? 'Detección de Disparos' : 'Gunshot Detection' },
              { href: '/resources/how-c5-command-centers-work', label: es ? 'Centros de Mando C5' : 'C5 Command Centers' },
            ].map((r) => (
              <Link key={r.href} href={r.href} style={{ fontSize: '12px', color: '#64748b', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '6px 12px', textDecoration: 'none' }}>
                {r.label}
              </Link>
            ))}
          </div>
        </section>

        <div style={{ height: '60px' }} />
        <CTASection
          es={es}
          h2={es ? '¿Listo para Integrar LPR en tu Plataforma Operativa?' : 'Ready to Integrate LPR into Your Operational Platform?'}
          subtitle={es
            ? 'KabatOne conecta LPR fijo y móvil con video, GIS y despacho en un solo entorno. Agenda una demo de K-Video.'
            : 'KabatOne connects fixed and mobile LPR with video, GIS, and dispatch in a single environment. Schedule a K-Video demo.'}
        />
      </main>

      <Footer es={es} />
    </>
  )
}
