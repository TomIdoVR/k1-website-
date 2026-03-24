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
  return generatePageMetadata('integrationAccessControl', locale)
}

export default async function AccessControlIntegrationPage({
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
          question: '¿Qué es el control de acceso físico y cómo se integra con seguridad pública?',
          answer:
            'El control de acceso físico es el conjunto de sistemas que regulan quién puede entrar a qué área y cuándo: lectores de tarjetas, torniquetes, cerraduras electrónicas, lectores biométricos. En el contexto de seguridad pública, la integración significa que los eventos de control de acceso — entradas autorizadas, rechazos, intentos de forzamiento — fluyen en tiempo real al centro de comando, donde se correlacionan con video y se pueden convertir en despachos automáticos cuando hay una violación.',
        },
        {
          question: '¿Con qué fabricantes de control de acceso es compatible KabatOne?',
          answer:
            'KabatOne integra sistemas de control de acceso mediante protocolos estándar de la industria: OSDP (Open Supervised Device Protocol), Wiegand, y APIs REST/WebSocket. Los sistemas más comunes en implementaciones actuales incluyen Lenel OnGuard, Genetec Synergis, Software House CCURE, Honeywell Pro-Watch, Bosch AMS, y Mercury Security. Para sistemas más antiguos con protocolos propietarios, KabatOne utiliza middleboxes de integración que traducen los eventos al formato estándar de la plataforma.',
        },
        {
          question: '¿Qué sucede cuando se detecta una violación de acceso?',
          answer:
            'Cuando el sistema detecta un evento de control de acceso anómalo — puerta forzada, tarjeta rechazada repetidamente, acceso en horario no autorizado, tailgating detectado por cámara — K-Safety genera una alerta de alta prioridad que incluye: el punto de acceso específico en el plano del edificio, el feed de video en vivo de la cámara asociada a esa puerta, el historial de accesos de esa tarjeta en las últimas horas, y las unidades disponibles más cercanas. El despachador puede actuar en segundos, no en minutos.',
        },
        {
          question: '¿Puede el sistema bloquear o desbloquear puertas remotamente?',
          answer:
            'Sí. KabatOne soporta control bidireccional con sistemas de acceso compatibles: operadores autorizados pueden bloquear o desbloquear puertas específicas desde el centro de comando en respuesta a una emergencia, activar lockdown de todo un edificio con un solo comando, o abrir puertas de evacuación automáticamente cuando se activa una alarma de incendio. Estas acciones requieren doble autorización y se registran completamente en el log de auditoría.',
        },
        {
          question: '¿Qué tipo de instalaciones se benefician más de la integración de control de acceso?',
          answer:
            'Las instalaciones con mayor retorno de la integración son aquellas que combinan alto volumen de acceso con consecuencias significativas de violación: edificios de gobierno y tribunales, instalaciones penitenciarias, subestaciones eléctricas y agua, centros de datos, instalaciones portuarias y aeroportuarias, hospitales y centros de salud, y campus universitarios con múltiples edificios. KabatOne escala desde instalaciones de 50 puertas hasta redes de miles de puntos de acceso en múltiples ubicaciones.',
        },
        {
          question: '¿Cómo se maneja la gestión de credenciales en emergencias?',
          answer:
            'KabatOne incluye un módulo de gestión de credenciales de emergencia que permite: provisionar temporalmente a personal de respuesta de emergencia (bomberos, paramédicos, personal de mantenimiento crítico) con acceso temporal a zonas específicas, revocar instantáneamente el acceso de una credencial comprometida o de un empleado separado, y activar perfiles de acceso de emergencia predefinidos (ej: "modo lockdown", "modo evacuación") que modifican las reglas de acceso de todo el edificio con un solo comando.',
        },
      ]
    : [
        {
          question: 'What is physical access control and how does it integrate with public safety?',
          answer:
            'Physical access control is the set of systems that regulate who can enter what area and when: card readers, turnstiles, electronic locks, biometric readers. In the public safety context, integration means access control events — authorized entries, rejections, forced entry attempts — flow in real time to the command center, where they are correlated with video and can trigger automatic dispatches when a violation occurs.',
        },
        {
          question: 'Which access control vendors is KabatOne compatible with?',
          answer:
            'KabatOne integrates access control systems via industry-standard protocols: OSDP (Open Supervised Device Protocol), Wiegand, and REST/WebSocket APIs. The most common systems in current deployments include Lenel OnGuard, Genetec Synergis, Software House C•CURE, Honeywell Pro-Watch, Bosch AMS, and Mercury Security. For older systems with proprietary protocols, KabatOne uses integration middleboxes that translate events to the platform\'s standard format.',
        },
        {
          question: 'What happens when an access violation is detected?',
          answer:
            'When the system detects an anomalous access control event — forced door, repeated card rejection, unauthorized-hours access, tailgating detected by camera — K-Safety generates a high-priority alert that includes: the specific access point on the building floor plan, the live video feed from the camera associated with that door, the access history for that card in the last few hours, and the nearest available units. The dispatcher can act in seconds, not minutes.',
        },
        {
          question: 'Can the system remotely lock or unlock doors?',
          answer:
            'Yes. KabatOne supports bidirectional control with compatible access systems: authorized operators can lock or unlock specific doors from the command center in response to an emergency, activate a full building lockdown with a single command, or automatically open evacuation doors when a fire alarm is triggered. These actions require dual authorization and are fully logged in the audit trail.',
        },
        {
          question: 'What types of facilities benefit most from access control integration?',
          answer:
            'Facilities with the highest integration ROI are those combining high access volume with significant violation consequences: government buildings and courthouses, correctional facilities, electrical and water substations, data centers, port and airport installations, hospitals and healthcare facilities, and university campuses with multiple buildings. KabatOne scales from facilities with 50 doors to networks of thousands of access points across multiple locations.',
        },
        {
          question: 'How is credential management handled in emergencies?',
          answer:
            'KabatOne includes an emergency credential management module that enables: provisioning emergency response personnel (firefighters, paramedics, critical maintenance staff) with temporary access to specific zones, instantly revoking access for a compromised credential or separated employee, and activating predefined emergency access profiles (e.g., "lockdown mode", "evacuation mode") that modify building-wide access rules with a single command.',
        },
      ]

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Integraciones' : 'Integrations', url: es ? 'https://kabatone.com/es/integrations/' : 'https://kabatone.com/integrations/' },
    {
      name: es ? 'Control de Acceso' : 'Access Control',
      url: es ? 'https://kabatone.com/es/integrations/access-control/' : 'https://kabatone.com/integrations/access-control/',
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
        { title: 'Instalaciones Gubernamentales y Tribunales', desc: 'Edificios de gobierno, tribunales y legislaturas requieren control de acceso de alta seguridad con múltiples capas de credenciales por zona. KabatOne integra el sistema de acceso con el sistema de despacho de seguridad interna: cualquier violación genera automáticamente un incidente en el CAD con el video del punto de acceso ya adjunto.' },
        { title: 'Infraestructura Crítica', desc: 'Subestaciones eléctricas, plantas de agua, centros de datos y telecomunicaciones tienen tolerancia cero a accesos no autorizados. La integración con KabatOne añade la capa de correlación: una tarjeta rechazada + movimiento detectado por cámara en el mismo punto genera una alerta de máxima prioridad, no solo un registro en el sistema de acceso.' },
        { title: 'Centros de Salud y Hospitales', desc: 'Hospitales tienen zonas de acceso diferenciado: salas de emergencias, unidades psiquiátricas, farmacia, servidor de registros médicos. KabatOne permite gestionar estas zonas en un mapa unificado y correlacionar eventos de acceso con incidentes de seguridad hospitalaria — paciente agresivo, código de seguridad — para coordinar la respuesta del personal de seguridad interno.' },
        { title: 'Campus Universitarios', desc: 'Con docenas o cientos de edificios y miles de credenciales activas, los campus universitarios necesitan visibilidad centralizada. KabatOne agrega todos los eventos de acceso en una vista única, permite gestionar lockdowns de edificios individuales o del campus completo desde el centro de seguridad, y correlaciona accesos con alertas de seguridad en tiempo real.' },
      ]
    : [
        { title: 'Government Buildings & Courthouses', desc: 'Government buildings, courthouses, and legislative facilities require high-security access control with multiple credential layers per zone. KabatOne integrates the access system with the internal security dispatch system: any violation automatically generates a CAD incident with the access point video already attached.' },
        { title: 'Critical Infrastructure', desc: 'Electrical substations, water plants, data centers, and telecom facilities have zero tolerance for unauthorized access. KabatOne integration adds the correlation layer: a rejected card + camera-detected movement at the same point generates a maximum-priority alert, not just a log entry in the access system.' },
        { title: 'Healthcare & Hospitals', desc: 'Hospitals have differentiated access zones: emergency rooms, psychiatric units, pharmacy, medical records servers. KabatOne manages these zones on a unified map and correlates access events with hospital security incidents — aggressive patient, security code — to coordinate internal security staff response.' },
        { title: 'University Campuses', desc: 'With dozens or hundreds of buildings and thousands of active credentials, university campuses need centralized visibility. KabatOne aggregates all access events in a single view, enables lockdown management for individual buildings or the full campus from the security center, and correlates accesses with real-time security alerts.' },
      ]

  const protocols = es
    ? [
        { label: 'OSDP v2', desc: 'Protocolo abierto y seguro para lectores IP. Comunicación cifrada y supervisada entre lector y controlador.' },
        { label: 'Wiegand', desc: 'Protocolo estándar heredado para lectores de tarjetas. Compatible con millones de instalaciones existentes.' },
        { label: 'REST / WebSocket', desc: 'API estándar para sistemas de acceso modernos. Integración bidireccional en tiempo real.' },
        { label: 'ONVIF Profile A', desc: 'Estándar de integración de control de acceso físico sobre IP. Interoperabilidad garantizada entre fabricantes.' },
      ]
    : [
        { label: 'OSDP v2', desc: 'Open and secure protocol for IP readers. Encrypted and supervised communication between reader and controller.' },
        { label: 'Wiegand', desc: 'Legacy standard protocol for card readers. Compatible with millions of existing installations.' },
        { label: 'REST / WebSocket', desc: 'Standard API for modern access systems. Bidirectional real-time integration.' },
        { label: 'ONVIF Profile A', desc: 'Physical access control integration standard over IP. Guaranteed interoperability between vendors.' },
      ]

  return (
    <>
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema(
              es ? 'Integración de Control de Acceso para Seguridad Pública' : 'Access Control Integration for Public Safety',
              es
                ? 'Cómo KabatOne integra sistemas de control de acceso físico con video, despacho CAD y GIS para respuesta automática a violaciones de acceso.'
                : 'How KabatOne integrates physical access control systems with video, CAD dispatch, and GIS for automatic response to access violations.',
              es ? 'https://kabatone.com/es/integrations/access-control/' : 'https://kabatone.com/integrations/access-control/',
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
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{es ? 'Inicio' : 'Home'}</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--dim)' }}>{es ? 'Integraciones' : 'Integrations'}</span>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--dim)' }}>{es ? 'Control de Acceso' : 'Access Control'}</span>
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
                ? 'Control de Acceso: Cada Puerta Conectada al Centro de Mando'
                : 'Access Control Integration: Every Door Connected to Command'}
            </h1>
            <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.8, maxWidth: '720px', marginBottom: '40px' }}>
              {es
                ? 'Un sistema de control de acceso aislado solo registra quién entró y cuándo. Integrado con KabatOne, cada evento de acceso se convierte en inteligencia operativa: la puerta forzada en el sótano activa automáticamente las cámaras del área, notifica al despachador, y abre un incidente en el CAD — todo en menos de 2 segundos.'
                : 'An isolated access control system only logs who entered and when. Integrated with KabatOne, every access event becomes operational intelligence: a forced door in the basement automatically activates area cameras, notifies the dispatcher, and opens a CAD incident — all in under 2 seconds.'}
            </p>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
              <img
                src="/images/integrations/access-control-hero.jpeg"
                alt={es ? 'Dashboard de control de acceso — estado de puertas, log de eventos y alertas de violación en tiempo real' : 'Access control dashboard — door status, event log, and real-time violation alerts'}
                style={{ width: '100%', display: 'block' }}
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* ── WHAT IS ACCESS CONTROL INTEGRATION ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? '¿Qué Es la Integración de Control de Acceso?' : 'What Is Access Control Integration?'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'El control de acceso físico cubre todo el hardware y software que regula la entrada a espacios físicos: lectores de tarjetas RFID, biometría de huella o facial en puertas, torniquetes, barreras vehiculares, y las plataformas de software que gestionan esas credenciales. En instalaciones medianas y grandes, estos sistemas pueden tener cientos o miles de puntos de acceso gestionados por un sistema especializado como Lenel, Genetec Synergis, o Software House.'
                : 'Physical access control covers all the hardware and software that regulates entry to physical spaces: RFID card readers, fingerprint or facial biometrics at doors, turnstiles, vehicle barriers, and the software platforms that manage those credentials. In medium and large facilities, these systems can have hundreds or thousands of access points managed by a specialized system like Lenel, Genetec Synergis, or Software House.'}
            </p>
            <p style={pStyle}>
              {es
                ? 'El problema es que estos sistemas operan en sililo. Cuando se detecta una violación de acceso, el sistema genera una alarma en su propia consola — pero esa alarma no llega automáticamente al despachador, no activa las cámaras del área, y no informa a las unidades de seguridad en campo. El operador tiene que ver la alerta en el sistema de acceso, llamar al despachador, y describir lo que está viendo. Mientras tanto, el intruso ya se fue.'
                : 'The problem is that these systems operate in silos. When an access violation is detected, the system generates an alarm in its own console — but that alarm doesn\'t automatically reach the dispatcher, doesn\'t activate area cameras, and doesn\'t inform field security units. The operator has to see the alert in the access system, call the dispatcher, and describe what they\'re seeing. Meanwhile, the intruder is already gone.'}
            </p>
            <p style={pStyle}>
              {es
                ? 'KabatOne resuelve este problema integrando el sistema de control de acceso directamente con K-Video, K-Safety y K-Dispatch. El resultado es un flujo unificado: evento de acceso → correlación con video → alerta al despachador → despacho de unidad. Sin llamadas manuales. Sin cambio de pantallas. Sin tiempo perdido.'
                : 'KabatOne solves this by integrating the access control system directly with K-Video, K-Safety, and K-Dispatch. The result is a unified flow: access event → video correlation → dispatcher alert → unit dispatch. No manual calls. No screen switching. No wasted time.'}
            </p>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'Casos de Uso por Tipo de Instalación' : 'Use Cases by Facility Type'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'La integración de control de acceso con KabatOne aporta valor directo en instalaciones donde la seguridad perimetral tiene consecuencias operativas:'
                : 'Access control integration with KabatOne delivers direct value in facilities where perimeter security has operational consequences:'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="usecase-grid">
              {useCases.map((uc, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', borderLeft: `3px solid ${ACCENT}`, padding: '24px' }}>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '17px', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '10px', marginTop: '0' }}>
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

        {/* ── PROTOCOLS ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'Protocolos de Integración Soportados' : 'Supported Integration Protocols'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'KabatOne soporta los principales protocolos de control de acceso para garantizar compatibilidad con cualquier sistema existente:'
                : 'KabatOne supports the major access control protocols to ensure compatibility with any existing system:'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }} className="protocol-grid">
              {protocols.map((p, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '10px', border: '1px solid var(--border)', padding: '20px 24px' }}>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '13px', fontWeight: 500, color: ACCENT, marginBottom: '8px' }}>{p.label}</div>
                  <div style={{ fontSize: '13px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.6 }}>{p.desc}</div>
                </div>
              ))}
            </div>

            {/* ── Metrics strip ── */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '28px' }} className="metrics-grid">
              {[
                { value: '<2s', label: es ? 'Alerta al despachador' : 'Alert to dispatcher', color: '#3b82f6' },
                { value: '1000+', label: es ? 'Puntos de acceso por sede' : 'Access points per site', color: '#06b6d4' },
                { value: '100%', label: es ? 'Auditoría de eventos' : 'Event audit trail', color: '#22c55e' },
              ].map((m, i) => (
                <div key={i} style={{ background: '#0b1628', border: '1px solid var(--border)', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '36px', fontWeight: 800, color: m.color, lineHeight: 1 }}>{m.value}</div>
                  <div style={{ fontSize: '12px', fontWeight: 400, color: 'var(--dim)', marginTop: '6px', letterSpacing: '0.05em' }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED PRODUCTS ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Productos Relacionados' : 'Related Products'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '12px' }}>
              {es ? 'KabatOne para Operaciones de Control de Acceso' : 'KabatOne for Access Control Operations'}
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '28px' }}>
              {es ? 'Los módulos que trabajan en conjunto con el control de acceso integrado:' : 'Modules that work together with integrated access control:'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { href: '/k-video', label: 'K-Video', desc: es ? 'Video + Acceso' : 'Video + Access', color: '#a855f7' },
                { href: '/k-safety', label: 'K-Safety', desc: es ? 'GIS + Alertas' : 'GIS + Alerts', color: '#3b82f6' },
                { href: '/k-dispatch', label: 'K-Dispatch', desc: es ? 'Despacho CAD' : 'CAD Dispatch', color: '#ef4444' },
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
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '32px' }}>
              {es ? 'Preguntas Comunes sobre Control de Acceso' : 'Common Access Control Questions'}
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
                { href: '/integrations/sensor-fusion', label: es ? 'Fusión de Sensores para Seguridad Pública' : 'Sensor Fusion for Public Safety' },
                { href: '/integrations/face-recognition', label: es ? 'Integración de Reconocimiento Facial' : 'Face Recognition Integration' },
                { href: '/resources/rtcc-setup-guide', label: es ? 'Guía de Implementación RTCC' : 'RTCC Setup Guide' },
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
          h2={es ? 'Conecta tu Control de Acceso al Centro de Mando' : 'Connect Your Access Control to Command'}
          subtitle={es
            ? 'KabatOne integra sistemas de control de acceso de cualquier fabricante con tu plataforma de video, CAD y GIS. Solicita una demo con datos de tu instalación.'
            : 'KabatOne integrates access control systems from any vendor with your video, CAD, and GIS platform. Request a demo with your facility data.'}
        />

        <Footer es={es} />

        <style>{`
          @media (max-width: 640px) {
            .usecase-grid, .protocol-grid, .metrics-grid { grid-template-columns: 1fr !important; }
            section { padding-left: 20px !important; padding-right: 20px !important; }
          }
        `}</style>
      </div>
    </>
  )
}
