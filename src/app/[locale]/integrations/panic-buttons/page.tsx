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
  return generatePageMetadata('integrationPanicButtons', locale)
}

export default async function PanicButtonsIntegrationPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#ef4444'

  const faqs = es
    ? [
        {
          question: '¿Qué es un botón de pánico y cómo funciona en una plataforma de seguridad pública?',
          answer:
            'Un botón de pánico es un dispositivo o función de software que permite a una persona enviar una alerta de emergencia silenciosa e inmediata. Puede ser hardware físico (botón fijo en una pared, dispositivo portátil tipo llavero, botón en la manga de un uniforme) o software (aplicación móvil con botón SOS, función de alarma en un radio portátil). Cuando se activa, la alerta llega al sistema de despacho con la ubicación exacta del activador — inmediatamente, sin necesidad de hablar, sin revelar la situación al agresor.',
        },
        {
          question: '¿Cuánto tiempo tarda en llegar la alerta al despachador?',
          answer:
            'Con KabatOne, la alerta de botón de pánico llega al despachador en menos de 4 segundos desde la activación: el evento se transmite por red (WiFi, celular, o radio), el sistema lo procesa y genera un incidente de alta prioridad en K-Dispatch, activa automáticamente las cámaras más cercanas a la ubicación, y muestra la alerta en el mapa GIS de K-Safety con el pin parpadeando. El despachador tiene toda la información para despachar unidades sin necesidad de hablar con la víctima.',
        },
        {
          question: '¿Qué tipos de dispositivos de pánico se integran con KabatOne?',
          answer:
            'KabatOne integra cualquier dispositivo que pueda generar una señal de alerta con datos de identidad y ubicación: botones de pánico físicos fijos (Inovonics, Napco, Bosch, ASSA ABLOY), dispositivos portátiles tipo badge (Aiphone, Alertus, Singlewire), aplicaciones móviles con SOS (integración via API), radios digitales con botón de emergencia (Motorola, Kenwood, Hytera), y wearables de seguridad personal. La integración es via API REST, MQTT o webhooks según el fabricante.',
        },
        {
          question: '¿Los botones de pánico funcionan sin conectividad de red?',
          answer:
            'Depende del dispositivo. Los botones de pánico conectados via WiFi o celular requieren cobertura de red. Para instalaciones con zonas de baja cobertura (sótanos, salas de servidores, áreas remotas), KabatOne recomienda dispositivos con radio de largo alcance (LoRa, 900 MHz) o sistemas de mesh radio que no dependen de la infraestructura WiFi del edificio. Los sistemas más robustos combinan múltiples tecnologías de comunicación con fallback automático.',
        },
        {
          question: '¿Puede el sistema distinguir entre activaciones accidentales e intencionales?',
          answer:
            'Sí. KabatOne soporta varias estrategias para reducir falsas alarmas: requerir activación sostenida (mantener presionado 3 segundos), doble activación (dos pulsaciones en 2 segundos), o código de confirmación para cancelar la alerta. Los sistemas más avanzados incluyen una ventana de cancelación de 15-30 segundos tras la activación, durante la cual el usuario puede abortar la alerta si fue accidental. Si no cancela, la alerta se convierte en incidente activo. La tasa de falsa alarma típica con estos controles es inferior al 2%.',
        },
        {
          question: '¿Cómo se usan los botones de pánico en escuelas?',
          answer:
            'En protocolos de seguridad escolar, KabatOne integra los botones de pánico de los maestros y personal administrativo con el sistema de despacho municipal. Cuando un maestro activa su botón, el centro de despacho 911 recibe automáticamente: nombre del maestro, aula exacta, plano del edificio con la ubicación marcada, feed de video de la cámara del pasillo más cercano, y protocolo de respuesta preconfigurado (lockdown, evacuación, respuesta médica). Las unidades de policía y EMS reciben la notificación simultáneamente con el despachador.',
        },
      ]
    : [
        {
          question: 'What is a panic button and how does it work in a public safety platform?',
          answer:
            'A panic button is a device or software function that allows a person to send an immediate silent emergency alert. It can be physical hardware (fixed wall button, portable keychain device, button on a uniform sleeve) or software (mobile app with SOS button, alarm function on a portable radio). When activated, the alert reaches the dispatch system with the activator\'s exact location — immediately, without needing to speak, without revealing the situation to the aggressor.',
        },
        {
          question: 'How long does it take for the alert to reach the dispatcher?',
          answer:
            'With KabatOne, a panic button alert reaches the dispatcher in under 4 seconds from activation: the event transmits over network (WiFi, cellular, or radio), the system processes it and generates a high-priority incident in K-Dispatch, automatically activates the nearest cameras to the location, and displays the alert on the K-Safety GIS map with a blinking pin. The dispatcher has all the information to dispatch units without needing to speak with the victim.',
        },
        {
          question: 'What types of panic devices integrate with KabatOne?',
          answer:
            'KabatOne integrates any device that can generate an alert signal with identity and location data: fixed physical panic buttons (Inovonics, Napco, Bosch, ASSA ABLOY), portable badge devices (Aiphone, Alertus, Singlewire), mobile apps with SOS (API integration), digital radios with emergency button (Motorola, Kenwood, Hytera), and personal safety wearables. Integration is via REST API, MQTT, or webhooks depending on the vendor.',
        },
        {
          question: 'Do panic buttons work without network connectivity?',
          answer:
            'It depends on the device. WiFi or cellular-connected panic buttons require network coverage. For facilities with low-coverage zones (basements, server rooms, remote areas), KabatOne recommends long-range radio devices (LoRa, 900 MHz) or mesh radio systems that don\'t depend on building WiFi infrastructure. The most robust systems combine multiple communication technologies with automatic fallback.',
        },
        {
          question: 'Can the system distinguish between accidental and intentional activations?',
          answer:
            'Yes. KabatOne supports several strategies to reduce false alarms: requiring sustained activation (hold for 3 seconds), double activation (two presses in 2 seconds), or confirmation code to cancel the alert. More advanced systems include a 15–30 second cancellation window after activation, during which the user can abort if it was accidental. If not cancelled, the alert becomes an active incident. Typical false alarm rates with these controls are below 2%.',
        },
        {
          question: 'How are panic buttons used in schools?',
          answer:
            'In school safety protocols, KabatOne integrates teacher and administrative staff panic buttons with the municipal dispatch system. When a teacher activates their button, the 911 dispatch center automatically receives: teacher name, exact classroom, building floor plan with location marked, video feed from the nearest hallway camera, and a pre-configured response protocol (lockdown, evacuation, medical response). Police and EMS units receive notification simultaneously with the dispatcher.',
        },
      ]

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Integraciones' : 'Integrations', url: es ? 'https://kabatone.com/es/integrations/' : 'https://kabatone.com/integrations/' },
    {
      name: es ? 'Botones de Pánico' : 'Panic Buttons',
      url: es ? 'https://kabatone.com/es/integrations/panic-buttons/' : 'https://kabatone.com/integrations/panic-buttons/',
    },
  ]

  const sectionStyle: React.CSSProperties = { borderTop: '1px solid var(--border)', padding: '72px 32px' }
  const containerStyle: React.CSSProperties = { maxWidth: '820px', margin: '0 auto' }
  const h2Style: React.CSSProperties = {
    fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif',
    textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '20px', marginTop: '0',
  }
  const pStyle: React.CSSProperties = { fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.8, marginBottom: '20px' }

  const verticals = es
    ? [
        { title: 'Escuelas y Campus Educativos', desc: 'Maestros y personal con dispositivos portátiles tipo badge. Activación → lockdown automático del edificio + notificación a despachador 911 + feed de cámaras del corredor + protocolo de respuesta activo. Sin hablar. Sin marcar el 911 manualmente.', color: '#3b82f6' },
        { title: 'Hospitales y Centros de Salud', desc: 'Enfermeras y médicos en áreas de alto riesgo (urgencias, psiquiatría, urgencias pediátricas) con botón portátil. La alerta incluye nombre del empleado, ubicación en el plano del hospital, y código de respuesta (código gris, código violeta) para coordinar al equipo de seguridad interno.', color: '#22c55e' },
        { title: 'Bancos y Casas de Cambio', desc: 'Botones fijos bajo mostrador y portátiles para cajeros. Activación silenciosa que no alerta al asaltante. Alerta al despachador con cámaras del área activadas y unidades despachadas antes de que el sospechoso salga del establecimiento.', color: '#f59e0b' },
        { title: 'Oficinas Gubernamentales', desc: 'Edificios de gobierno con acceso público (oficinas de registro, juzgados, oficinas de migración) donde el personal puede ser amenazado. Botones en cada mostrador de atención al público, integrados con la seguridad del edificio y el despacho municipal.', color: '#a855f7' },
        { title: 'Personal de Campo y Agentes', desc: 'Oficiales de campo, inspectores, trabajadores sociales y cualquier personal que opera solo en situaciones de riesgo. Dispositivos wearable o función en radio digital con GPS integrado para que el despacho sepa exactamente dónde están cuando activan la alarma.', color: '#ef4444' },
        { title: 'Transporte Público y Conductores', desc: 'Conductores de autobús, operadores de metro, conductores de transporte escolar. El botón activa una alerta silenciosa al centro de control con video del interior del vehículo y ubicación GPS en tiempo real — sin que el agresor sepa que se llamó ayuda.', color: '#06b6d4' },
      ]
    : [
        { title: 'Schools & Educational Campuses', desc: 'Teachers and staff with portable badge devices. Activation → automatic building lockdown + 911 dispatcher notification + hallway camera feed + active response protocol. No speaking. No manually dialing 911.', color: '#3b82f6' },
        { title: 'Hospitals & Healthcare', desc: 'Nurses and physicians in high-risk areas (ER, psychiatric, pediatric ER) with portable buttons. Alert includes employee name, location on hospital floor plan, and response code (code gray, code violet) to coordinate internal security team.', color: '#22c55e' },
        { title: 'Banks & Currency Exchange', desc: 'Fixed under-counter and portable teller buttons. Silent activation that doesn\'t alert the attacker. Alert to dispatcher with area cameras activated and units dispatched before the suspect leaves the premises.', color: '#f59e0b' },
        { title: 'Government Offices', desc: 'Public-access government buildings (registration offices, courthouses, immigration offices) where staff may be threatened. Buttons at every public service counter, integrated with building security and municipal dispatch.', color: '#a855f7' },
        { title: 'Field Personnel & Agents', desc: 'Field officers, inspectors, social workers, and any personnel operating alone in risk situations. Wearable devices or digital radio function with integrated GPS so dispatch knows exactly where they are when the alarm activates.', color: '#ef4444' },
        { title: 'Public Transit & Drivers', desc: 'Bus drivers, subway operators, school bus drivers. The button activates a silent alert to the control center with interior vehicle video and real-time GPS location — without the aggressor knowing help was called.', color: '#06b6d4' },
      ]

  const responseSteps = es
    ? [
        { step: '01', title: 'Activación del Botón', desc: 'El usuario activa el botón de pánico. La señal se transmite inmediatamente por WiFi, celular o radio al servidor de KabatOne.' },
        { step: '02', title: 'Alerta en K-Dispatch', desc: 'En menos de 4 segundos, K-Dispatch crea un incidente de prioridad máxima con nombre del activador, ubicación exacta y tipo de emergencia configurado.' },
        { step: '03', title: 'Activación Automática de Cámaras', desc: 'K-Video activa automáticamente las cámaras más cercanas a la ubicación del activador. El despachador ve el video del área sin buscar manualmente.' },
        { step: '04', title: 'Notificación a Unidades', desc: 'K-Dispatch notifica a las unidades disponibles más cercanas con toda la información: ubicación, tipo de alerta, protocolo de respuesta y feed de video en vivo.' },
        { step: '05', title: 'Seguimiento y Cierre', desc: 'El incidente se documenta automáticamente: tiempo de activación, tiempo de respuesta, unidades despachadas, resolución. Todo con cadena de custodia para informes.' },
      ]
    : [
        { step: '01', title: 'Button Activation', desc: 'The user activates the panic button. The signal transmits immediately via WiFi, cellular, or radio to KabatOne\'s server.' },
        { step: '02', title: 'K-Dispatch Alert', desc: 'In under 4 seconds, K-Dispatch creates a maximum-priority incident with the activator\'s name, exact location, and configured emergency type.' },
        { step: '03', title: 'Automatic Camera Activation', desc: 'K-Video automatically activates the cameras nearest to the activator\'s location. The dispatcher sees area video without manually searching.' },
        { step: '04', title: 'Unit Notification', desc: 'K-Dispatch notifies the nearest available units with all information: location, alert type, response protocol, and live video feed.' },
        { step: '05', title: 'Tracking & Closure', desc: 'The incident is automatically documented: activation time, response time, dispatched units, resolution. All with chain of custody for reports.' },
      ]

  return (
    <>
      <Nav />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleSchema(
          es ? 'Integración de Botones de Pánico para Seguridad Pública' : 'Panic Button Integration for Public Safety',
          es ? 'Cómo KabatOne integra botones de pánico físicos y wearables con despacho CAD, video y GIS para respuesta de emergencia en segundos.' : 'How KabatOne integrates physical and wearable panic buttons with CAD dispatch, video, and GIS for emergency response in seconds.',
          es ? 'https://kabatone.com/es/integrations/panic-buttons/' : 'https://kabatone.com/integrations/panic-buttons/',
          '2026-03-21'
        ))
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }} />

      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '24px 32px 0' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '12px', color: 'var(--muted)', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{es ? 'Inicio' : 'Home'}</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--dim)' }}>{es ? 'Integraciones' : 'Integrations'}</span>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--dim)' }}>{es ? 'Botones de Pánico' : 'Panic Buttons'}</span>
          </nav>
        </div>

        {/* ── HERO ── */}
        <section style={{ padding: '48px 32px 64px' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Integración de Tecnología' : 'Technology Integration'}
            </p>
            <h1 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: '24px' }}>
              {es ? 'Botones de Pánico: Alerta Silenciosa, Respuesta Inmediata' : 'Panic Buttons: Silent Alert, Immediate Response'}
            </h1>
            <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.8, maxWidth: '720px', marginBottom: '40px' }}>
              {es
                ? 'Cuando alguien no puede hablar pero necesita ayuda ahora, el botón de pánico es el único canal que funciona. Integrado con KabatOne, una activación pone en movimiento el despacho, activa las cámaras del área, y notifica a las unidades más cercanas — todo en menos de 4 segundos, todo en silencio.'
                : 'When someone cannot speak but needs help right now, the panic button is the only channel that works. Integrated with KabatOne, one activation triggers dispatch, activates area cameras, and notifies the nearest units — all in under 4 seconds, all in silence.'}
            </p>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <img
                src="/images/integrations/panic-buttons-hero.jpeg"
                alt={es ? 'Dashboard de alertas de pánico — mapa de alertas activas, timeline de respuesta y feed de cámaras activadas' : 'Panic alert dashboard — active alert map, response timeline, and activated camera feed'}
                style={{ width: '100%', display: 'block' }}
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* ── RESPONSE FLOW ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>{es ? 'De la Activación a la Respuesta en Menos de 4 Segundos' : 'From Activation to Response in Under 4 Seconds'}</h2>
            <p style={pStyle}>
              {es
                ? 'El flujo de respuesta integrado de KabatOne convierte una pulsación en una operación de emergencia coordinada:'
                : 'KabatOne\'s integrated response flow converts a button press into a coordinated emergency operation:'}
            </p>

            {/* ── Key metrics ── */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '32px' }} className="metrics-grid">
              {[
                { value: '<4s', label: es ? 'Alerta al despachador' : 'Alert to dispatcher', color: '#ef4444' },
                { value: '<2%', label: es ? 'Tasa de falsa alarma' : 'False alarm rate', color: '#22c55e' },
                { value: '24/7', label: es ? 'Cobertura operativa' : 'Operational coverage', color: '#3b82f6' },
              ].map((m, i) => (
                <div key={i} style={{ background: '#0b1628', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '36px', fontWeight: 800, color: m.color, lineHeight: 1 }}>{m.value}</div>
                  <div style={{ fontSize: '12px', fontWeight: 400, color: 'var(--dim)', marginTop: '6px', letterSpacing: '0.05em' }}>{m.label}</div>
                </div>
              ))}
            </div>

            {responseSteps.map((s) => (
              <div key={s.step} style={{ display: 'flex', gap: '24px', background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '24px 28px', marginBottom: '16px' }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '28px', fontWeight: 500, color: ACCENT, opacity: 0.7, lineHeight: 1, flexShrink: 0, marginTop: '2px' }}>
                  {s.step}
                </span>
                <div>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '18px', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '10px', marginTop: '0' }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── VERTICALS ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>{es ? 'Casos de Uso por Sector' : 'Use Cases by Sector'}</h2>
            <p style={pStyle}>
              {es
                ? 'Los botones de pánico integrados con KabatOne sirven a cualquier organización donde el personal enfrenta situaciones de riesgo:'
                : 'Panic buttons integrated with KabatOne serve any organization where personnel face risk situations:'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="usecase-grid">
              {verticals.map((v, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', borderLeft: `3px solid ${v.color}`, padding: '24px' }}>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '10px', marginTop: '0' }}>
                    {v.title}
                  </h3>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED PRODUCTS ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>{es ? 'Productos Relacionados' : 'Related Products'}</p>
            <h2 style={{ ...h2Style, marginBottom: '12px' }}>{es ? 'KabatOne para Respuesta a Alertas de Pánico' : 'KabatOne for Panic Alert Response'}</h2>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '28px' }}>
              {es ? 'Los módulos que reciben y procesan alertas de pánico:' : 'Modules that receive and process panic alerts:'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { href: '/k-dispatch', label: 'K-Dispatch', desc: es ? 'Despacho + Alertas' : 'Dispatch + Alerts', color: '#ef4444' },
                { href: '/k-safety', label: 'K-Safety', desc: es ? 'GIS + Mapa en Vivo' : 'GIS + Live Map', color: '#3b82f6' },
                { href: '/k-video', label: 'K-Video', desc: es ? 'Cámaras Auto-Activadas' : 'Auto-Activated Cameras', color: '#a855f7' },
              ].map((p) => (
                <Link key={p.href} href={p.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '6px', padding: '10px 16px', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none' }}>
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
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>{es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}</p>
            <h2 style={{ ...h2Style, marginBottom: '32px' }}>{es ? 'Preguntas Comunes sobre Botones de Pánico' : 'Common Panic Button Questions'}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: '#0b1220', borderRadius: '12px', border: '1px solid var(--border)', padding: '24px 28px' }}>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '17px', letterSpacing: '0.02em', textTransform: 'uppercase', marginBottom: '10px', marginTop: '0', color: 'var(--white)' }}>{faq.question}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED ARTICLES ── */}
        <section style={{ padding: '64px 0', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: ACCENT, marginBottom: '24px' }}>{es ? 'Artículos Relacionados' : 'Related Articles'}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { href: '/integrations/access-control', label: es ? 'Integración de Control de Acceso' : 'Access Control Integration' },
                { href: '/integrations/sensor-fusion', label: es ? 'Fusión de Sensores para Seguridad Pública' : 'Sensor Fusion for Public Safety' },
                { href: '/resources/what-is-a-public-safety-platform', label: es ? '¿Qué Es una Plataforma de Seguridad Pública?' : 'What Is a Public Safety Platform?' },
                { href: '/resources/rtcc-setup-guide', label: es ? 'Guía de Implementación RTCC' : 'RTCC Setup Guide' },
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
          h2={es ? 'Integra Alertas de Pánico en tu Centro de Despacho' : 'Integrate Panic Alerts into Your Dispatch Center'}
          subtitle={es
            ? 'KabatOne conecta botones de pánico físicos y wearables con despacho CAD, video y GIS. Respuesta coordinada en segundos. Solicita una demo.'
            : 'KabatOne connects physical and wearable panic buttons with CAD dispatch, video, and GIS. Coordinated response in seconds. Request a demo.'}
        />
        <Footer es={es} />

        <style>{`
          @media (max-width: 640px) {
            .usecase-grid, .metrics-grid { grid-template-columns: 1fr !important; }
            section { padding-left: 20px !important; padding-right: 20px !important; }
          }
        `}</style>
      </div>
    </>
  )
}
