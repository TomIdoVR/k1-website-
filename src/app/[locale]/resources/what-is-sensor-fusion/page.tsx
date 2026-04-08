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
  return generatePageMetadata('whatIsSensorFusion', locale)
}

export default async function WhatIsSensorFusionPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#06b6d4'

  const faqs = es
    ? [
        {
          question: '¿Qué es la fusión de sensores en seguridad pública?',
          answer:
            'La fusión de sensores es el proceso de combinar datos de múltiples fuentes heterogéneas — cámaras de video, detectores acústicos de disparos, sensores IoT, lectores de placas (LPR), sismógrafos urbanos, datos de redes sociales geolocalizadas — para crear una imagen operativa más completa y confiable que la que cualquier sensor individual puede proveer. El término viene de tecnología militar y aeronáutica, donde combinar radar, sonar e imagen infrarroja daba una "conciencia situacional" mucho más precisa que cualquier sistema aislado.',
        },
        {
          question: '¿Cómo reduce la fusión de sensores los falsos positivos?',
          answer:
            'Los sistemas individuales tienen tasas de falsos positivos manejables en aislamiento pero problemáticas en volumen. Un detector acústico de disparos puede generar alertas por fuegos artificiales o neumáticos reventados. Un sensor de movimiento puede activarse por animales o personal autorizado. Cuando múltiples sensores independientes generan alertas relacionadas en el mismo lugar y tiempo — disparo acústico + cámara detecta movimiento anormal + LPR identifica vehículo sospechoso — la probabilidad de un evento real aumenta dramáticamente. Los sistemas maduros aplican motores de correlación que solo generan alertas de alta prioridad cuando múltiples fuentes confirman el evento.',
        },
        {
          question: '¿Qué tipos de sensores se pueden integrar en una plataforma de seguridad pública?',
          answer:
            'Las categorías principales son: (1) Video — cámaras IP con analítica de IA (intrusión, LPR, conteo de personas). (2) Detección acústica — sensores de gunshot detection como ShotSpotter o SST. (3) IoT ambiental — calidad del aire, temperatura, nivel de agua para alertas de inundación, sensores sísmicos. (4) Identificación — lectores de placas (LPR/ALPR), reconocimiento facial. (5) Campo — GPS de unidades de respuesta, radios digitales, aplicaciones móviles de campo. (6) Contexto — feeds de redes sociales geolocalizadas, llamadas al 911, sistemas de tráfico. Si el sensor tiene API o genera datos en formato estándar, puede integrarse.',
        },
        {
          question: '¿Cuál es la diferencia entre fusión de sensores y PSIM?',
          answer:
            'Un PSIM (Physical Security Information Management) clásico también integra múltiples sensores, pero lo hace creando una capa de gestión de alarmas sobre sistemas aislados que siguen operando por separado. La fusión de sensores en una plataforma unificada va más lejos: los datos de todos los sensores fluyen hacia un motor de correlación central que crea eventos unificados con contexto completo. En lugar de recibir una alarma de video Y una alarma de audio por separado, el operador recibe un solo incidente correlacionado con toda la evidencia disponible, geolocalizaddo en el mapa operativo.',
        },
        {
          question: '¿Con qué rapidez puede correlacionar eventos un sistema de fusión?',
          answer:
            'Los sistemas maduros de fusión de sensores procesan eventos en tiempo real con latencia menor a 500 milisegundos desde la recepción del primer evento. La correlación temporal es configurable: el sistema puede agrupar eventos que ocurran dentro de una ventana de 30 segundos a 5 minutos y dentro de un radio geográfico de 50 a 500 metros, dependiendo de los protocolos operativos. Para eventos de alta prioridad como disparos, la alerta consolidada debe llegar al operador en menos de 2 segundos.',
        },
        {
          question: '¿Cómo se integra la fusión de sensores en un centro de mando C4/C5?',
          answer:
            'En un centro C4/C5 con fusión de sensores, el operador ve un único mapa operativo donde cada sensor — cámara, LPR, detector acústico, unidad de campo — aparece como una capa. Cuando el motor de correlación detecta un patrón de múltiples sensores convergiendo en un punto, genera un incidente único con toda la evidencia adjunta: clips de video, audio del disparo, placa del vehículo detectado, posición de las unidades disponibles. El operador puede despachar la respuesta desde la misma interfaz sin cambiar de sistema.',
        },
      ]
    : [
        {
          question: 'What is sensor fusion in public safety?',
          answer:
            'Sensor fusion is the process of combining data from multiple heterogeneous sources — video cameras, acoustic gunshot detectors, IoT sensors, license plate readers (LPR), urban seismographs, geolocated social media feeds — to create a more complete and reliable operational picture than any individual sensor can provide. The term comes from military and aerospace technology, where combining radar, sonar, and infrared imaging gave far more accurate "situational awareness" than any isolated system.',
        },
        {
          question: 'How does sensor fusion reduce false positives?',
          answer:
            'Individual systems have false positive rates that are manageable in isolation but problematic at volume. An acoustic gunshot detector may trigger on fireworks or blown tires. A motion sensor may activate from animals or authorized personnel. When multiple independent sensors generate related alerts at the same location and time — acoustic gunshot + camera detects abnormal motion + LPR identifies suspicious vehicle — the probability of a real event increases dramatically. Mature systems apply correlation engines that only generate high-priority alerts when multiple sources confirm the event.',
        },
        {
          question: 'What types of sensors can be integrated into a public safety platform?',
          answer:
            'The main categories are: (1) Video — IP cameras with AI analytics (intrusion, LPR, people counting). (2) Acoustic detection — gunshot detection sensors like ShotSpotter or SST. (3) Environmental IoT — air quality, temperature, water level for flood alerts, seismic sensors. (4) Identification — license plate readers (LPR/ALPR), facial recognition. (5) Field — GPS from response units, digital radios, mobile field applications. (6) Context — geolocated social media feeds, 911 calls, traffic systems. If a sensor has an API or generates data in standard format, it can be integrated.',
        },
        {
          question: 'What is the difference between sensor fusion and PSIM?',
          answer:
            'A classic PSIM (Physical Security Information Management) also integrates multiple sensors, but does so by creating an alarm management layer over siloed systems that continue operating separately. Sensor fusion in a unified platform goes further: data from all sensors flows into a central correlation engine that creates unified events with complete context. Instead of receiving a video alarm AND an audio alarm separately, the operator receives a single correlated incident with all available evidence, geolocated on the operational map.',
        },
        {
          question: 'How quickly can a fusion system correlate events?',
          answer:
            'Mature sensor fusion systems process events in real time with latency under 500 milliseconds from receipt of the first event. Temporal correlation is configurable: the system can group events occurring within a 30-second to 5-minute window and within a geographic radius of 50 to 500 meters, depending on operational protocols. For high-priority events like gunshots, the consolidated alert should reach the operator in under 2 seconds.',
        },
        {
          question: 'How does sensor fusion integrate into a C4/C5 command center?',
          answer:
            'In a C4/C5 center with sensor fusion, the operator sees a single operational map where each sensor — camera, LPR, acoustic detector, field unit — appears as a layer. When the correlation engine detects a pattern of multiple sensors converging on a point, it generates a single incident with all evidence attached: video clips, gunshot audio, detected vehicle plate, positions of available units. The operator can dispatch the response from the same interface without switching systems.',
        },
      ]

  const faqSchema = faqPageSchema(faqs)
  const artSchema = articleSchema(
    es ? '¿Qué Es la Fusión de Sensores en Seguridad Pública?' : 'What Is Sensor Fusion in Public Safety?',
    es
      ? 'Guía completa sobre fusión de sensores: cómo combinar video, LPR, sensores IoT y detección acústica en una plataforma unificada para reducir falsos positivos y mejorar la conciencia situacional.'
      : 'Complete guide to sensor fusion: how to combine video, LPR, IoT sensors, and acoustic detection in a unified platform to reduce false positives and improve situational awareness.',
    es
      ? 'https://kabatone.com/es/resources/what-is-sensor-fusion/'
      : 'https://kabatone.com/resources/what-is-sensor-fusion/',
    '2026-04-07'
  )
  const bcSchema = breadcrumbSchema([
    { name: 'Home', url: 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: 'https://kabatone.com/resources/' },
    {
      name: es ? '¿Qué Es la Fusión de Sensores?' : 'What Is Sensor Fusion?',
      url: es
        ? 'https://kabatone.com/es/resources/what-is-sensor-fusion/'
        : 'https://kabatone.com/resources/what-is-sensor-fusion/',
    },
  ])

  const sensorTypes = es
    ? [
        { icon: '📹', title: 'Video con analítica IA', desc: 'Cámaras IP con intrusión perimetral, conteo de personas, detección de comportamientos anómalos y reconocimiento de placas.' },
        { icon: '🔊', title: 'Detección acústica', desc: 'Sensores de gunshot detection (ShotSpotter, SST, Sentri) que localizan y clasifican disparos por triangulación de audio.' },
        { icon: '🚗', title: 'LPR / ALPR', desc: 'Lectores de placas vehiculares fijos o móviles que cotejan matrículas en tiempo real contra bases de datos de alertas.' },
        { icon: '🌡️', title: 'IoT ambiental', desc: 'Calidad del aire, temperatura, nivel de agua, sismógrafos urbanos — datos contextuales que alimentan alertas tempranas.' },
        { icon: '📍', title: 'GPS de campo', desc: 'Posición en tiempo real de patrullas, ambulancias y unidades de bomberos, integrada en el mapa operativo.' },
        { icon: '📱', title: 'Señales ciudadanas', desc: 'Llamadas al 911, apps ciudadanas, feeds de redes sociales geolocalizadas para contexto adicional del incidente.' },
      ]
    : [
        { icon: '📹', title: 'Video with AI analytics', desc: 'IP cameras with perimeter intrusion, people counting, anomalous behavior detection, and license plate recognition.' },
        { icon: '🔊', title: 'Acoustic detection', desc: 'Gunshot detection sensors (ShotSpotter, SST, Sentri) that localize and classify gunfire through audio triangulation.' },
        { icon: '🚗', title: 'LPR / ALPR', desc: 'Fixed or mobile license plate readers that cross-reference plates in real time against alert databases.' },
        { icon: '🌡️', title: 'Environmental IoT', desc: 'Air quality, temperature, water levels, urban seismographs — contextual data that feeds early warning alerts.' },
        { icon: '📍', title: 'Field GPS', desc: 'Real-time position of patrols, ambulances, and fire units, integrated into the operational map.' },
        { icon: '📱', title: 'Citizen signals', desc: '911 calls, citizen apps, geolocated social media feeds for additional incident context.' },
      ]

  const benefits = es
    ? [
        { n: '01', title: 'Menos falsos positivos', desc: 'La confirmación multi-sensor reduce drásticamente las alertas irrelevantes. El operador actúa sobre eventos confirmados, no sobre alarmas únicas.' },
        { n: '02', title: 'Contexto completo instantáneo', desc: 'Un solo incidente consolidado con video, audio, placa y posición — no cuatro alertas separadas que el operador debe correlacionar manualmente.' },
        { n: '03', title: 'Tiempo de respuesta reducido', desc: 'El despachador tiene toda la información antes de enviar la unidad. Menos llamadas de vuelta. Más despachos acertados en el primer intento.' },
        { n: '04', title: 'Infraestructura existente reutilizada', desc: 'No se requiere reemplazar sensores actuales. La plataforma se conecta a la infraestructura existente mediante APIs estándar.' },
      ]
    : [
        { n: '01', title: 'Fewer false positives', desc: 'Multi-sensor confirmation dramatically reduces irrelevant alerts. Operators act on confirmed events, not single-source alarms.' },
        { n: '02', title: 'Instant complete context', desc: 'One consolidated incident with video, audio, plate, and position — not four separate alerts the operator must manually correlate.' },
        { n: '03', title: 'Reduced response time', desc: 'The dispatcher has all information before sending the unit. Fewer callbacks. More accurate first-dispatch decisions.' },
        { n: '04', title: 'Existing infrastructure reused', desc: 'No need to replace current sensors. The platform connects to existing infrastructure through standard APIs.' },
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
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: ACCENT, background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.2)', borderRadius: '4px', padding: '3px 10px' }}>
                {es ? 'Guía de Referencia' : 'Reference Guide'}
              </span>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#64748b', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', padding: '3px 10px' }}>
                K-Safety · K-Video
              </span>
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '.01em', color: '#f0f4f8', marginBottom: '20px' }}>
              {es ? '¿Qué Es la Fusión de Sensores en Seguridad Pública?' : 'What Is Sensor Fusion in Public Safety?'}
            </h1>
            <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.7, maxWidth: '720px', marginBottom: '32px' }}>
              {es
                ? 'La fusión de sensores combina datos de cámaras, LPR, detectores acústicos, IoT y unidades de campo en una imagen operativa unificada. Reduce falsos positivos, acelera la respuesta y proporciona contexto completo antes de despachar. Esta guía explica cómo funciona y qué tipos de sensores se pueden integrar.'
                : 'Sensor fusion combines data from cameras, LPR, acoustic detectors, IoT sensors, and field units into a unified operational picture. It reduces false positives, accelerates response, and provides complete context before dispatch. This guide explains how it works and what sensor types can be integrated.'}
            </p>
            <div style={{ fontSize: '12px', color: '#475569', lineHeight: 2 }}>
              <span style={{ marginRight: '8px', fontWeight: 600, color: '#64748b' }}>{es ? 'Integración:' : 'Integration:'}</span>
              <Link href="/integrations/sensor-fusion" style={{ color: ACCENT, textDecoration: 'none', marginRight: '14px' }}>{es ? 'Fusión de Sensores' : 'Sensor Fusion'}</Link>
              <Link href="/integrations/lpr" style={{ color: ACCENT, textDecoration: 'none', marginRight: '14px' }}>LPR</Link>
              <Link href="/integrations/drones" style={{ color: ACCENT, textDecoration: 'none' }}>Drones</Link>
              <br />
              <span style={{ marginRight: '8px', fontWeight: 600, color: '#64748b' }}>{es ? 'Recursos:' : 'Resources:'}</span>
              <Link href="/resources/what-is-situational-awareness-software" style={{ color: '#94a3b8', textDecoration: 'none', marginRight: '14px' }}>{es ? 'Conciencia Situacional' : 'Situational Awareness'}</Link>
              <Link href="/resources/what-is-gunshot-detection-software" style={{ color: '#94a3b8', textDecoration: 'none', marginRight: '14px' }}>{es ? 'Detección de Disparos' : 'Gunshot Detection'}</Link>
              <Link href="/resources/what-is-a-real-time-crime-center" style={{ color: '#94a3b8', textDecoration: 'none' }}>RTCC</Link>
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
              ? 'La fusión de sensores (sensor fusion) es la combinación de datos de múltiples fuentes heterogéneas para producir una imagen de la realidad más precisa, completa y confiable que la que cualquier sensor individual puede generar por sí solo.'
              : 'Sensor fusion is the combination of data from multiple heterogeneous sources to produce a more accurate, complete, and reliable picture of reality than any individual sensor can generate on its own.'}
          </p>
          <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, marginBottom: '16px' }}>
            {es
              ? 'En seguridad pública, el problema que resuelve la fusión de sensores es la fragmentación: una ciudad puede tener cientos de cámaras, sensores acústicos, lectores de placas y unidades de campo GPS, pero si cada sistema genera sus propias alertas en sus propias interfaces, el operador pasa más tiempo correlacionando información entre pantallas que tomando decisiones.'
              : 'In public safety, the problem sensor fusion solves is fragmentation: a city may have hundreds of cameras, acoustic sensors, license plate readers, and GPS field units — but if each system generates its own alerts in its own interface, the operator spends more time correlating information across screens than making decisions.'}
          </p>
          <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.8 }}>
            {es
              ? 'La fusión de sensores en una plataforma unificada crea un solo flujo de incidentes correlacionados, donde el operador recibe contexto completo — video, audio, placa, posición GPS de unidades — en una sola alerta, sin cambiar de sistema.'
              : 'Sensor fusion in a unified platform creates a single stream of correlated incidents, where the operator receives complete context — video, audio, plate, GPS unit positions — in a single alert, without switching systems.'}
          </p>
        </section>

        {/* ── Sensor types ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '8px' }}>
            {es ? 'Tipos de Sensores Integrables' : 'Integrable Sensor Types'}
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '28px' }}>
            {es ? 'Fuentes de datos que se pueden combinar en una plataforma de seguridad pública unificada' : 'Data sources that can be combined in a unified public safety platform'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '14px' }}>
            {sensorTypes.map((s, i) => (
              <div key={i} style={{ background: 'rgba(6,182,212,0.05)', border: '1px solid rgba(6,182,212,0.15)', borderRadius: '10px', padding: '18px 20px' }}>
                <div style={{ fontSize: '20px', marginBottom: '8px' }}>{s.icon}</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#f0f4f8', marginBottom: '6px' }}>{s.title}</div>
                <div style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Benefits ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '8px' }}>
            {es ? 'Por Qué la Fusión de Sensores Mejora las Operaciones' : 'Why Sensor Fusion Improves Operations'}
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '28px' }}>
            {es ? 'Resultados operativos cuando los sensores se correlacionan en lugar de operar aislados' : 'Operational results when sensors are correlated instead of operating in isolation'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '14px' }}>
            {benefits.map((b) => (
              <div key={b.n} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '20px 22px', borderTop: `2px solid ${ACCENT}` }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', fontWeight: 700, color: ACCENT, letterSpacing: '.1em', marginBottom: '8px' }}>{b.n}</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#f0f4f8', marginBottom: '8px' }}>{b.title}</div>
                <div style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.6 }}>{b.desc}</div>
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
              { href: '/resources/what-is-situational-awareness-software', label: es ? 'Conciencia Situacional' : 'Situational Awareness' },
              { href: '/resources/what-is-gunshot-detection-software', label: es ? 'Detección de Disparos' : 'Gunshot Detection' },
              { href: '/resources/what-is-lpr-license-plate-recognition', label: es ? 'Reconocimiento de Placas (LPR)' : 'License Plate Recognition (LPR)' },
              { href: '/resources/what-is-video-analytics', label: es ? 'Analítica de Video' : 'Video Analytics' },
              { href: '/resources/what-is-a-real-time-crime-center', label: es ? 'Centro de Crimen en Tiempo Real' : 'Real-Time Crime Center' },
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
          h2={es ? '¿Listo para Unificar tus Sensores en una Sola Plataforma?' : 'Ready to Unify Your Sensors Into One Platform?'}
          subtitle={es
            ? 'KabatOne conecta video, LPR, sensores acústicos y unidades de campo en un mapa operativo unificado. Agenda una demo.'
            : 'KabatOne connects video, LPR, acoustic sensors, and field units into a unified operational map. Schedule a demo.'}
        />
      </main>

      <Footer es={es} />
    </>
  )
}
