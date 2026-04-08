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
  return generatePageMetadata('whatIsIncidentManagementSoftware', locale)
}

export default async function WhatIsIncidentManagementSoftwarePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#f59e0b'

  const faqs = es
    ? [
        {
          question: '¿Cuál es la diferencia entre un software de gestión de incidentes y un sistema CAD?',
          answer:
            'El CAD (Computer-Aided Dispatch) se enfoca en el despacho y la asignación de unidades. El software de gestión de incidentes (IMS) cubre el ciclo completo del incidente: detección, clasificación, despacho, coordinación en campo, feeds de video e integración con sensores, más el cierre con registro de auditoría y tiempos de respuesta. Un CAD es un componente del IMS, no un sustituto.',
        },
        {
          question: '¿El software de gestión de incidentes puede funcionar con cámaras existentes?',
          answer:
            'Sí. Los sistemas modernos de gestión de incidentes se integran con flujos ONVIF y RTSP, y con plataformas VMS existentes. No es necesario reemplazar la infraestructura de cámaras instalada — el IMS se conecta a lo que ya existe y lo incorpora al flujo operativo.',
        },
        {
          question: '¿Qué tipos de incidentes maneja este software?',
          answer:
            'El software de gestión de incidentes cubre incendios, delitos, emergencias médicas, accidentes de tráfico, desastres naturales, eventos masivos y cualquier situación que requiera coordinación de múltiples recursos. La clasificación es configurable según el protocolo de cada organización.',
        },
        {
          question: '¿El software de gestión de incidentes es lo mismo que un software de gestión de emergencias?',
          answer:
            'Son conceptos relacionados pero distintos. El IMS gestiona la respuesta operativa en tiempo real: desde la detección hasta el cierre del incidente. El software de gestión de emergencias (EMS) abarca planificación, asignación de recursos, recuperación y continuidad de operaciones. En entornos de seguridad pública maduros, ambos se complementan.',
        },
        {
          question: '¿Cómo mejora la IA la gestión de incidentes?',
          answer:
            'La inteligencia artificial aporta detección de patrones para identificar incidentes antes de que escalen, clasificación automática por tipo y prioridad, enrutamiento predictivo de unidades, y alertas de anomalías generadas por analítica de video. Esto reduce la carga cognitiva del despachador y mejora la velocidad y precisión de la respuesta.',
        },
        {
          question: '¿Qué debe buscar un municipio en un software de gestión de incidentes?',
          answer:
            'Los criterios clave son: integración nativa con CAD, mapa en tiempo real con posición de unidades e incidentes activos, coordinación multiagencia, aplicación móvil para unidades en campo, registro de auditoría con timestamps, escalabilidad para crecimiento futuro, y capacidad de conectarse con infraestructura existente sin reemplazar todo el stack.',
        },
      ]
    : [
        {
          question: 'What is the difference between incident management software and CAD?',
          answer:
            'CAD (Computer-Aided Dispatch) focuses on dispatch and unit assignment. Incident management software (IMS) covers the full incident lifecycle: detection, classification, dispatch, field coordination, video feeds and sensor integration, plus closure with audit trail and response time capture. CAD is one component of IMS — not a replacement for it.',
        },
        {
          question: 'Can incident management software work with existing cameras?',
          answer:
            'Yes. Modern incident management systems integrate with ONVIF and RTSP streams and with existing VMS platforms. There is no need to replace installed camera infrastructure — the IMS connects to what is already in place and brings it into the operational workflow.',
        },
        {
          question: 'What types of incidents does this software handle?',
          answer:
            'Incident management software handles fire, crime, medical emergencies, traffic accidents, natural disasters, large public events, and any situation requiring multi-resource coordination. Incident classification is configurable to each organization\'s protocols.',
        },
        {
          question: 'Is incident management software the same as emergency management software?',
          answer:
            'They are related but different. IMS manages real-time operational response: from detection through incident closure. Emergency management software (EMS) covers planning, resource allocation, recovery, and operational continuity. In mature public safety environments, both are complementary.',
        },
        {
          question: 'How does AI improve incident management?',
          answer:
            'Artificial intelligence contributes pattern detection to identify incidents before they escalate, automatic classification by type and priority, predictive unit routing, and anomaly alerts generated by video analytics. This reduces dispatcher cognitive load and improves the speed and accuracy of response.',
        },
        {
          question: 'What should a municipality look for in incident management software?',
          answer:
            'Key criteria are: native CAD integration, real-time map with unit positions and active incidents, multi-agency coordination, mobile field app for responding units, timestamped audit logging, scalability for future growth, and the ability to connect with existing infrastructure without replacing the entire stack.',
        },
      ]

  const faqSchema = faqPageSchema(faqs)
  const artSchema = articleSchema(
    es ? '¿Qué Es un Software de Gestión de Incidentes? Guía de Seguridad Pública | KabatOne' : 'What Is Incident Management Software? Public Safety Guide | KabatOne',
    es
      ? 'El software de gestión de incidentes rastrea, coordina y resuelve emergencias en tiempo real — conectando despacho, unidades de campo, video y mando. Cómo funciona y qué considerar al elegirlo.'
      : 'Incident management software tracks, coordinates, and resolves emergencies in real time — connecting dispatch, field units, video, and command. How it works, key features, and what to look for.',
    es
      ? 'https://kabatone.com/es/resources/what-is-incident-management-software/'
      : 'https://kabatone.com/resources/what-is-incident-management-software/',
    '2026-04-07'
  )
  const bcSchema = breadcrumbSchema([
    { name: 'Home', url: 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: 'https://kabatone.com/resources/' },
    {
      name: es ? '¿Qué Es un Software de Gestión de Incidentes?' : 'What Is Incident Management Software?',
      url: es
        ? 'https://kabatone.com/es/resources/what-is-incident-management-software/'
        : 'https://kabatone.com/resources/what-is-incident-management-software/',
    },
  ])

  const lifecycleSteps = es
    ? [
        { num: '1', title: 'Detección', desc: 'El incidente se registra a partir de una llamada al 911, una alerta de sensor, analítica de cámara o reporte de campo.' },
        { num: '2', title: 'Clasificación', desc: 'Se categoriza por tipo (incendio, emergencia médica, delito, accidente), nivel de prioridad y ubicación geográfica.' },
        { num: '3', title: 'Despacho', desc: 'Se asignan las unidades más cercanas y disponibles en función del tipo de incidente, proximidad y capacidad.' },
        { num: '4', title: 'Coordinación en campo', desc: 'Las unidades envían actualizaciones de estado en tiempo real; los feeds de video del área aportan conciencia situacional al mando.' },
        { num: '5', title: 'Cierre y registro', desc: 'El incidente se cierra con documentación completa, tiempo de respuesta capturado y registro de auditoría retenido.' },
      ]
    : [
        { num: '1', title: 'Detection', desc: 'The incident is recorded from a 911 call, sensor alert, camera analytics, or field report.' },
        { num: '2', title: 'Classification', desc: 'Categorized by type (fire, medical, crime, accident), priority level, and geographic location.' },
        { num: '3', title: 'Dispatch', desc: 'Nearest available units are assigned based on incident type, proximity, and capacity.' },
        { num: '4', title: 'Field coordination', desc: 'Units send real-time status updates; video feeds from the area provide situational awareness to command.' },
        { num: '5', title: 'Resolution & logging', desc: 'Incident is closed with full documentation, response time captured, and audit trail retained.' },
      ]

  const comparisonTable = es
    ? {
        headers: ['Criterio', 'IMS (Gestión de Incidentes)', 'CAD (Despacho)', 'PSIM'],
        rows: [
          ['Alcance del ciclo', 'Detección hasta cierre y registro', 'Despacho y asignación de unidades', 'Integración de alarmas de sistemas aislados'],
          ['Coordinación en campo', 'Sí — actualizaciones en tiempo real', 'Parcial', 'No'],
          ['Integración de video', 'Nativa — feeds vinculados al incidente', 'Generalmente no', 'A través de conectores'],
          ['Integración de sensores', 'Sí — IoT, acústica, LPR', 'Limitada', 'Sí, pero sin flujo operativo'],
          ['Mapa operativo GIS', 'Sí — incidentes y unidades en mapa', 'Básico o ausente', 'Variable'],
          ['Registro de auditoría', 'Completo con timestamps', 'Parcial', 'Variable'],
          ['Flujo de trabajo operativo', 'Reemplaza el flujo completo', 'Despacho solamente', 'No reemplaza — agrega visibilidad'],
        ],
      }
    : {
        headers: ['Criteria', 'IMS (Incident Management)', 'CAD (Dispatch)', 'PSIM'],
        rows: [
          ['Lifecycle scope', 'Detection through closure and logging', 'Dispatch and unit assignment', 'Alarm aggregation from siloed systems'],
          ['Field coordination', 'Yes — real-time status updates', 'Partial', 'No'],
          ['Video integration', 'Native — feeds linked to incident', 'Generally no', 'Via connectors'],
          ['Sensor integration', 'Yes — IoT, acoustic, LPR', 'Limited', 'Yes, but no operational workflow'],
          ['GIS operational map', 'Yes — incidents and units on map', 'Basic or absent', 'Variable'],
          ['Audit trail', 'Full with timestamps', 'Partial', 'Variable'],
          ['Operational workflow', 'Replaces full workflow', 'Dispatch only', 'Does not replace — adds visibility'],
        ],
      }

  const capabilities = es
    ? [
        { title: 'Mapa de incidentes en tiempo real', desc: 'Vista geográfica de todos los eventos activos y posiciones de unidades en el mapa operativo.' },
        { title: 'Asignación automática de unidades', desc: 'El sistema recomienda automáticamente las unidades más cercanas y adecuadas según tipo de incidente y capacidad disponible.' },
        { title: 'Integración de video', desc: 'Feeds en vivo vinculados a la ubicación del incidente para conciencia situacional del mando sin salir de la plataforma.' },
        { title: 'Registro de auditoría', desc: 'Cada acción queda timestamped y documentada para revisión post-incidente, cumplimiento y mejora continua.' },
      ]
    : [
        { title: 'Real-time incident map', desc: 'Geographic view of all active events and unit positions on the operational map.' },
        { title: 'Automated unit assignment', desc: 'The system automatically recommends the nearest and most appropriate units based on incident type and available capacity.' },
        { title: 'Video integration', desc: 'Live feeds linked to the incident location for command-level situational awareness without leaving the platform.' },
        { title: 'Audit trail', desc: 'Every action is timestamped and documented for post-incident review, compliance, and continuous improvement.' },
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
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: ACCENT, background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '4px', padding: '3px 10px' }}>
                {es ? 'Guía de Referencia' : 'Reference Guide'}
              </span>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#64748b', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', padding: '3px 10px' }}>
                K-Safety · K-Dispatch
              </span>
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '.01em', color: '#f0f4f8', marginBottom: '20px' }}>
              {es ? '¿Qué Es un Software de Gestión de Incidentes?' : 'What Is Incident Management Software?'}
            </h1>
            <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.7, maxWidth: '720px', marginBottom: '32px' }}>
              {es
                ? 'El software de gestión de incidentes (IMS) registra, prioriza, enruta y rastrea eventos de emergencia desde la detección inicial hasta la resolución en campo. Conecta operadores de despacho, unidades, feeds de video y mando en una imagen operativa compartida y en tiempo real.'
                : 'Incident management software (IMS) records, prioritizes, routes, and tracks emergency events from initial detection through field resolution. It connects dispatch operators, field units, video feeds, and command leadership into a single shared operational picture in real time.'}
            </p>
            <div style={{ fontSize: '12px', color: '#475569', lineHeight: 2 }}>
              <span style={{ marginRight: '8px', fontWeight: 600, color: '#64748b' }}>{es ? 'Productos relacionados:' : 'Related products:'}</span>
              <Link href="/k-safety" style={{ color: ACCENT, textDecoration: 'none', marginRight: '14px' }}>K-Safety</Link>
              <Link href="/k-dispatch" style={{ color: ACCENT, textDecoration: 'none', marginRight: '14px' }}>K-Dispatch</Link>
              <br />
              <span style={{ marginRight: '8px', fontWeight: 600, color: '#64748b' }}>{es ? 'Recursos:' : 'Resources:'}</span>
              <Link href="/resources/what-is-cad-dispatch-software" style={{ color: '#94a3b8', textDecoration: 'none', marginRight: '14px' }}>{es ? 'Software CAD' : 'CAD Dispatch'}</Link>
              <Link href="/resources/what-is-situational-awareness-software" style={{ color: '#94a3b8', textDecoration: 'none', marginRight: '14px' }}>{es ? 'Conciencia Situacional' : 'Situational Awareness'}</Link>
              <Link href="/resources/what-is-a-command-center" style={{ color: '#94a3b8', textDecoration: 'none' }}>{es ? 'Centro de Mando' : 'Command Center'}</Link>
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
              ? 'El software de gestión de incidentes (IMS) es una plataforma que registra, prioriza, enruta y rastrea eventos de emergencia desde la detección inicial hasta la resolución en campo. Conecta operadores de despacho, unidades de campo, feeds de video y liderazgo de mando en una imagen operativa compartida y única.'
              : 'Incident management software (IMS) is a platform that records, prioritizes, routes, and tracks emergency events from initial detection through field resolution. It connects dispatch operators, field units, video feeds, and command leadership into a single shared operational picture.'}
          </p>
          <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, marginBottom: '16px' }}>
            {es
              ? 'En entornos de seguridad pública, la diferencia crítica entre IMS y herramientas de despacho convencionales es el alcance. Un CAD tradicional gestiona la asignación de unidades. Un IMS cubre todo el flujo desde el primer aviso hasta el cierre documentado, con integración de video, sensores y geolocalización.'
              : 'In public safety environments, the critical difference between IMS and conventional dispatch tools is scope. A traditional CAD manages unit assignment. An IMS covers the full workflow from first notification to documented closure, with video, sensor, and geolocation integration throughout.'}
          </p>
          <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.8 }}>
            {es
              ? 'Los C5 y centros de mando modernos no pueden operar con herramientas que solo resuelven un fragmento del flujo. El IMS es la capa operativa que une los sistemas existentes — cámaras, CAD, GIS, campo — en un entorno coherente donde el mando tiene visibilidad y control real.'
              : 'Modern C5 and command centers cannot operate with tools that only resolve one fragment of the workflow. IMS is the operational layer that unifies existing systems — cameras, CAD, GIS, field — into a coherent environment where command has real visibility and control.'}
          </p>
        </section>

        {/* ── Incident Lifecycle ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '8px' }}>
            {es ? 'El Ciclo de Vida del Incidente en 5 Pasos' : '5-Step Incident Lifecycle'}
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '28px' }}>
            {es ? 'Cómo un IMS gestiona un evento desde el primer aviso hasta el cierre' : 'How an IMS manages an event from first notification to closure'}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {lifecycleSteps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.12)', borderRadius: '10px', padding: '18px 20px', alignItems: 'flex-start' }}>
                <div style={{ minWidth: '36px', height: '36px', borderRadius: '50%', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '16px', color: ACCENT, flexShrink: 0 }}>
                  {step.num}
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#f0f4f8', marginBottom: '4px' }}>{step.title}</div>
                  <div style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '16px' }}>
            {es ? 'IMS vs CAD vs PSIM: ¿Cuál Es la Diferencia?' : 'IMS vs CAD vs PSIM: What Is the Difference?'}
          </h2>
          <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, marginBottom: '24px' }}>
            {es
              ? 'Los tres sistemas se usan en entornos de seguridad pública, pero tienen alcances muy distintos. Entender la diferencia evita adquirir herramientas que solo resuelven parte del problema.'
              : 'All three systems are used in public safety environments, but they have very different scopes. Understanding the difference prevents acquiring tools that only solve part of the problem.'}
          </p>
          <div style={{ overflowX: 'auto', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: 'rgba(245,158,11,0.08)' }}>
                  {comparisonTable.headers.map((h, i) => (
                    <th key={i} style={{ padding: '12px 16px', textAlign: 'left', fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', color: i === 0 ? '#64748b' : i === 1 ? ACCENT : '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.08)', fontWeight: 700 }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonTable.rows.map((row, ri) => (
                  <tr key={ri} style={{ borderBottom: ri < comparisonTable.rows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none', background: ri % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={{ padding: '12px 16px', color: ci === 0 ? '#94a3b8' : ci === 1 ? '#f0f4f8' : '#64748b', fontWeight: ci === 1 ? 500 : 400 }}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Key Capabilities ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '8px' }}>
            {es ? '4 Capacidades Clave' : '4 Key Capabilities'}
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '28px' }}>
            {es ? 'Lo que distingue un IMS de un sistema de despacho convencional' : 'What distinguishes an IMS from a conventional dispatch system'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '14px' }}>
            {capabilities.map((cap, i) => (
              <div key={i} style={{ background: 'rgba(245,158,11,0.05)', border: '1px solid rgba(245,158,11,0.15)', borderRadius: '10px', padding: '20px 22px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#f0f4f8', marginBottom: '8px' }}>{cap.title}</div>
                <div style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.6 }}>{cap.desc}</div>
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
              { href: '/resources/what-is-cad-dispatch-software', label: es ? 'Software CAD de Despacho' : 'CAD Dispatch Software' },
              { href: '/resources/what-is-situational-awareness-software', label: es ? 'Conciencia Situacional' : 'Situational Awareness Software' },
              { href: '/resources/what-is-emergency-management-software', label: es ? 'Gestión de Emergencias' : 'Emergency Management Software' },
              { href: '/resources/what-is-a-command-center', label: es ? 'Centro de Mando' : 'Command Center' },
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
          h2={es ? '¿Listo para Unificar la Gestión de Incidentes en tu Operación?' : 'Ready to Unify Incident Management in Your Operation?'}
          subtitle={es
            ? 'KabatOne conecta despacho, video, GIS y campo en una sola plataforma. Agenda una demo de K-Safety o K-Dispatch.'
            : 'KabatOne connects dispatch, video, GIS, and field operations in a single platform. Schedule a K-Safety or K-Dispatch demo.'}
        />
      </main>

      <Footer es={es} />
    </>
  )
}
