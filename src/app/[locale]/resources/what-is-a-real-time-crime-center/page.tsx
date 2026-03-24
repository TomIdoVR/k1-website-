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
  return generatePageMetadata('whatIsARealTimeCrimeCenter', locale)
}

export default async function WhatIsARealTimeCrimeCenterPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#06b6d4'

  /* ── FAQ data ── */
  const faqs = es
    ? [
        {
          question: '¿Qué es un Centro de Crimen en Tiempo Real (RTCC)?',
          answer:
            'Un Centro de Crimen en Tiempo Real (RTCC, por sus siglas en inglés) es una instalación de inteligencia operativa que integra videovigilancia en tiempo real, analítica de video con IA, reconocimiento de placas (LPR), detección de disparos y datos de despacho en un solo entorno. Los analistas del RTCC monitorean la actividad en vivo, responden a alertas automáticas y proveen soporte de inteligencia a las unidades de campo durante incidentes activos, reduciendo significativamente los tiempos de respuesta y la tasa de delitos sin resolver.',
        },
        {
          question: '¿Cuál es la diferencia entre un RTCC y un CCTV tradicional?',
          answer:
            'Un sistema CCTV tradicional graba video y permite la revisión manual posterior al incidente. Un RTCC es proactivo: combina cámaras en vivo con analítica de inteligencia artificial que detecta automáticamente comportamientos sospechosos, reconoce vehículos por su placa, identifica disparos por el sonido y cruza información con bases de datos policiales en segundos. Mientras el CCTV requiere que un operador revise grabaciones después del crimen, el RTCC alerta a las unidades durante el crimen.',
        },
        {
          question: '¿Qué tecnologías integra un RTCC moderno?',
          answer:
            'Un RTCC moderno integra: gestión de video en vivo (VMS) con cámaras fijas y móviles, reconocimiento automático de placas (LPR/ALPR), detección acústica de disparos (ShotSpotter/equivalentes), analítica de video con IA (detección de comportamiento, conteo de personas, análisis de multitudes), datos de despacho CAD en tiempo real, y en implementaciones avanzadas: reconocimiento facial y sensores IoT de ciudad. Todas estas fuentes convergen en un mapa operativo unificado donde los analistas toman decisiones con información completa.',
        },
        {
          question: '¿Cuánto cuesta implementar un RTCC?',
          answer:
            'El costo de un RTCC varía según la escala de la ciudad y el nivel de integración. Implementaciones básicas para ciudades medianas (50,000–300,000 habitantes) típicamente incluyen infraestructura de red para cámaras, estaciones de trabajo de analistas, software de gestión de video e integración con el sistema CAD existente. El mayor retorno de inversión se logra cuando el RTCC opera de forma integrada con el sistema de despacho, eliminando la necesidad de que los analistas cambien entre múltiples sistemas durante un incidente activo.',
        },
        {
          question: '¿Qué agencias operan RTCCs?',
          answer:
            'Los RTCCs son operados principalmente por departamentos de policía municipales y estatales, centros de mando C2/C3/C4/C5 en México y Latinoamérica, y agencias de seguridad metropolitana. En México, los centros de mando C5 representan la implementación más completa, integrando videovigilancia, despacho, GIS y tráfico en un solo entorno. Ciudades como Ciudad de México, Guadalajara y Monterrey operan RTCCs de gran escala con miles de cámaras conectadas.',
        },
        {
          question: '¿Cómo ayuda KabatOne a operar un RTCC?',
          answer:
            'KabatOne provee la plataforma unificada para RTCC: K-Video gestiona la videovigilancia con analítica de IA, K-Safety provee el mapa operativo GIS con unidades en tiempo real, K-Dispatch maneja el CAD para alertas y despacho, y K-Traffic integra el monitoreo vial. Todo en una sola interfaz. Los analistas del RTCC ven el video, la posición de las unidades y el estado del incidente en una sola pantalla, sin cambiar entre sistemas de diferentes proveedores.',
        },
      ]
    : [
        {
          question: 'What is a Real-Time Crime Center (RTCC)?',
          answer:
            'A Real-Time Crime Center (RTCC) is an operational intelligence facility that integrates live video surveillance, AI-powered video analytics, license plate recognition (LPR), gunshot detection, and dispatch data into a single environment. RTCC analysts monitor live activity, respond to automated alerts, and provide intelligence support to field units during active incidents — significantly reducing response times and the rate of unsolved crimes.',
        },
        {
          question: 'What is the difference between an RTCC and traditional CCTV?',
          answer:
            'Traditional CCTV records video and allows manual post-incident review. An RTCC is proactive: it combines live cameras with AI analytics that automatically detect suspicious behavior, recognize vehicles by plate, identify gunshots acoustically, and cross-reference police databases in seconds. While CCTV requires an operator to review footage after a crime, an RTCC alerts field units during the crime.',
        },
        {
          question: 'What technologies does a modern RTCC integrate?',
          answer:
            'A modern RTCC integrates: live video management (VMS) with fixed and mobile cameras, automatic license plate recognition (LPR/ALPR), acoustic gunshot detection (ShotSpotter or equivalents), AI video analytics (behavior detection, people counting, crowd analysis), real-time CAD dispatch data, and in advanced deployments: facial recognition and city IoT sensors. All sources converge on a unified operational map where analysts make decisions with complete situational awareness.',
        },
        {
          question: 'How much does it cost to implement an RTCC?',
          answer:
            'RTCC implementation cost varies by city scale and integration depth. Basic deployments for mid-size cities (50,000–300,000 residents) typically include camera network infrastructure, analyst workstations, video management software, and integration with the existing CAD system. The highest ROI is achieved when the RTCC operates fully integrated with the dispatch system — eliminating the need for analysts to switch between multiple systems during an active incident.',
        },
        {
          question: 'What agencies operate RTCCs?',
          answer:
            'RTCCs are primarily operated by municipal and state police departments, C2/C3/C4/C5 command centers in Mexico and Latin America, and metropolitan security agencies. In Mexico, C5 command centers represent the most complete implementation, integrating video surveillance, dispatch, GIS, and traffic in a single environment. Cities like Mexico City, Guadalajara, and Monterrey operate large-scale RTCCs with thousands of connected cameras.',
        },
        {
          question: 'How does KabatOne support RTCC operations?',
          answer:
            'KabatOne provides the unified platform for RTCC operations: K-Video manages video surveillance with AI analytics, K-Safety provides the GIS operational map with real-time unit positions, K-Dispatch handles CAD alerts and dispatch, and K-Traffic integrates road monitoring. All in one interface. RTCC analysts see video, unit positions, and incident status on a single screen — without switching between systems from different vendors.',
        },
      ]

  /* ── Breadcrumbs ── */
  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/' },
    {
      name: es ? '¿Qué Es un Centro de Crimen en Tiempo Real?' : 'What Is a Real-Time Crime Center?',
      url: es
        ? 'https://kabatone.com/es/resources/what-is-a-real-time-crime-center/'
        : 'https://kabatone.com/resources/what-is-a-real-time-crime-center/',
    },
  ]

  /* ── Shared styles ── */
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
  const h3Style: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 700,
    fontFamily: 'Barlow Condensed, sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '0.03em',
    lineHeight: 1.2,
    marginBottom: '12px',
    marginTop: '40px',
  }
  const pStyle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: 300,
    color: 'var(--dim)',
    lineHeight: 1.8,
    marginBottom: '20px',
  }

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
                ? '¿Qué Es un Centro de Crimen en Tiempo Real (RTCC)? Guía Completa'
                : 'What Is a Real-Time Crime Center (RTCC)? Complete Guide',
              es
                ? 'Un Centro de Crimen en Tiempo Real (RTCC) integra videovigilancia en vivo, analítica de IA, LPR y despacho en un solo entorno para reducir tiempos de respuesta y crímenes sin resolver.'
                : 'A Real-Time Crime Center (RTCC) integrates live video surveillance, AI analytics, LPR, and dispatch into a single environment to reduce response times and unsolved crimes.',
              es
                ? 'https://kabatone.com/es/resources/what-is-a-real-time-crime-center/'
                : 'https://kabatone.com/resources/what-is-a-real-time-crime-center/',
              '2026-03-23'
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
            <Link href="/resources" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
              {es ? 'Recursos' : 'Resources'}
            </Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--dim)' }}>
              {es ? '¿Qué Es un Centro de Crimen en Tiempo Real?' : 'What Is a Real-Time Crime Center?'}
            </span>
          </nav>
        </div>

        {/* ── HERO ── */}
        <section style={{ padding: '48px 32px 64px' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
              {es ? 'Guía de Referencia' : 'Reference Guide'}
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
                ? '¿Qué Es un Centro de Crimen en Tiempo Real?'
                : 'What Is a Real-Time Crime Center?'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'Un Centro de Crimen en Tiempo Real (RTCC) es una instalación de inteligencia operativa que conecta videovigilancia en vivo, analítica de IA, reconocimiento de placas, detección de disparos y datos de despacho en un único entorno de comando. Los analistas monitoran la actividad en tiempo real, responden a alertas automáticas y apoyan a las unidades de campo durante incidentes activos — transformando la seguridad pública de reactiva a proactiva.'
                : 'A Real-Time Crime Center (RTCC) is an operational intelligence facility that connects live video surveillance, AI analytics, license plate recognition, gunshot detection, and dispatch data into a single command environment. Analysts monitor activity in real time, respond to automated alerts, and support field units during active incidents — transforming public safety from reactive to proactive.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 1: Core Capabilities ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? '¿Qué Hace un RTCC?' : 'What Does an RTCC Do?'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Un RTCC moderno no es solo una sala de cámaras. Es una plataforma de inteligencia que combina múltiples tecnologías para dar a los analistas una imagen completa de la situación de seguridad en tiempo real.'
                : 'A modern RTCC is not just a camera room. It is an intelligence platform that combines multiple technologies to give analysts a complete picture of the security situation in real time.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Videovigilancia en Tiempo Real' : 'Live Video Surveillance'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'El núcleo de todo RTCC es una red de cámaras — fijas en calles, edificios públicos e infraestructura crítica; móviles en vehículos patrulla; y en implementaciones avanzadas, drones con capacidad de transmisión en vivo. Los analistas pueden visualizar cualquier cámara desde su estación de trabajo y el sistema gestiona automáticamente la retención de grabaciones, el almacenamiento y los permisos de acceso. La integración con analítica de IA permite que el sistema alerte automáticamente cuando una cámara detecta un comportamiento específico, sin requerir monitoreo manual constante de todos los feeds.'
                : 'The core of every RTCC is a camera network — fixed at streets, public buildings, and critical infrastructure; mobile in patrol vehicles; and in advanced deployments, drones with live-streaming capability. Analysts can view any camera from their workstation, and the system automatically manages recording retention, storage, and access permissions. AI analytics integration allows the system to automatically alert when a camera detects a specific behavior, without requiring constant manual monitoring of all feeds.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Reconocimiento Automático de Placas (LPR)' : 'Automatic License Plate Recognition (LPR)'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'El LPR (License Plate Recognition) o ALPR (Automatic License Plate Recognition) captura y procesa las placas de vehículos que pasan frente a las cámaras, las cruza con listas de interés policial — vehículos robados, sujetos con órdenes de arresto, vehículos implicados en incidentes — y genera alertas en segundos. Un RTCC activo puede procesar decenas de miles de lecturas de placas por día. Cuando un vehículo de interés es detectado, el analista recibe la alerta con la imagen del vehículo, la ubicación exacta y el historial de lecturas previas del mismo vehículo en la ciudad.'
                : 'LPR (License Plate Recognition) or ALPR (Automatic License Plate Recognition) captures and processes license plates of vehicles passing camera fields, cross-references them against police watchlists — stolen vehicles, subjects with arrest warrants, vehicles involved in incidents — and generates alerts in seconds. An active RTCC can process tens of thousands of plate reads per day. When a vehicle of interest is detected, the analyst receives the alert with the vehicle image, exact location, and the prior read history of that vehicle across the city.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Detección Acústica de Disparos' : 'Acoustic Gunshot Detection'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'Los sensores acústicos instalados en postes y edificios detectan el sonido de disparos, los localizan por triangulación y alertan automáticamente al RTCC con la ubicación exacta — generalmente en menos de 60 segundos. Esto elimina la dependencia de que alguien llame al 911 para reportar el disparo: el sistema lo detecta independientemente de si hay testigos. Al recibir la alerta, el analista del RTCC puede mostrar inmediatamente las cámaras cercanas al punto de disparo y despachar unidades con información completa de la situación.'
                : 'Acoustic sensors installed on poles and buildings detect the sound of gunshots, triangulate their location, and automatically alert the RTCC with the exact location — typically within 60 seconds. This eliminates dependence on someone calling 911 to report the shot: the system detects it regardless of whether witnesses are present. Upon receiving the alert, the RTCC analyst can immediately display cameras near the shot location and dispatch units with full situational awareness.'}
            </p>

            <h3 style={h3Style}>
              {es ? 'Analítica de Video con IA' : 'AI Video Analytics'}
            </h3>
            <p style={pStyle}>
              {es
                ? 'La analítica de video con inteligencia artificial procesa los feeds de las cámaras en tiempo real para detectar comportamientos y situaciones específicas: persona rondando en área restringida, vehículo estacionado en zona prohibida más de X minutos, concentración inusual de personas, objeto abandonado, cruce de perímetro virtual. En lugar de requerir que un analista monitoree cada cámara manualmente, el sistema genera alertas cuando detecta estas condiciones, permitiendo que un analista supervise cientos de cámaras de forma efectiva.'
                : 'AI video analytics processes camera feeds in real time to detect specific behaviors and situations: person loitering in restricted area, vehicle parked in prohibited zone beyond X minutes, unusual crowd concentration, abandoned object, virtual perimeter crossing. Instead of requiring an analyst to manually monitor each camera, the system generates alerts when these conditions are detected — enabling a single analyst to effectively monitor hundreds of cameras.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 2: How an RTCC Responds to an Incident ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es
                ? '¿Cómo Responde un RTCC a un Incidente?'
                : 'How Does an RTCC Respond to an Incident?'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'La secuencia de respuesta de un RTCC integrado es fundamentalmente diferente a la de un centro de despacho tradicional.'
                : 'The response sequence of an integrated RTCC is fundamentally different from a traditional dispatch center.'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {(es
                ? [
                    { step: '01', title: 'Alerta automática generada', desc: 'Un sensor acústico detecta disparos, una cámara de LPR lee una placa de vehículo robado, o la analítica de video detecta un comportamiento sospechoso. El sistema genera una alerta geolocalizadas en el mapa operativo del RTCC sin intervención humana.' },
                    { step: '02', title: 'Analista visualiza la situación', desc: 'El analista del RTCC abre la alerta y el sistema muestra automáticamente todas las cámaras cercanas al punto del incidente. En segundos, el analista tiene video en vivo de la zona afectada sin necesidad de buscar manualmente las cámaras.' },
                    { step: '03', title: 'Despacho informado', desc: 'El analista comunica al operador de despacho la situación con información completa: video en vivo, descripción del vehículo o sujeto, número de personas involucradas. El operador de despacho no envía unidades a ciegas — envía con inteligencia.' },
                    { step: '04', title: 'Apoyo en tiempo real a unidades de campo', desc: 'Mientras las unidades se desplazan al incidente, el analista del RTCC sigue monitoreando el video en vivo y puede guiar a las unidades en tiempo real: "el sujeto giró hacia la derecha en Calle 5", "hay un segundo vehículo en la parte trasera del edificio".' },
                    { step: '05', title: 'Registro completo del incidente', desc: 'Todo el video, las lecturas de LPR, las alertas y las comunicaciones quedan registrados automáticamente y vinculados al expediente del incidente. Los investigadores tienen acceso inmediato a toda la evidencia digital para el caso.' },
                  ]
                : [
                    { step: '01', title: 'Automated alert generated', desc: 'An acoustic sensor detects gunshots, an LPR camera reads a stolen vehicle plate, or video analytics detects suspicious behavior. The system generates a geolocated alert on the RTCC operational map without human intervention.' },
                    { step: '02', title: 'Analyst views the situation', desc: 'The RTCC analyst opens the alert and the system automatically displays all cameras near the incident point. Within seconds, the analyst has live video of the affected area without manually searching for cameras.' },
                    { step: '03', title: 'Informed dispatch', desc: 'The analyst communicates the situation to the dispatch operator with complete information: live video, vehicle or subject description, number of people involved. The dispatch operator does not send units blind — they send with intelligence.' },
                    { step: '04', title: 'Real-time support for field units', desc: 'While units travel to the incident, the RTCC analyst continues monitoring live video and can guide units in real time: "suspect turned right on 5th Street", "there is a second vehicle behind the building".' },
                    { step: '05', title: 'Complete incident record', desc: 'All video, LPR reads, alerts, and communications are automatically logged and linked to the incident file. Investigators have immediate access to all digital evidence for the case.' },
                  ]
              ).map((item) => (
                <div
                  key={item.step}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                    background: '#0b1628',
                    borderRadius: '10px',
                    border: '1px solid var(--border)',
                    padding: '20px 24px',
                  }}
                >
                  <span style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: ACCENT,
                    minWidth: '28px',
                    paddingTop: '2px',
                  }}>
                    {item.step}
                  </span>
                  <div>
                    <p style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                      color: 'var(--white)',
                      marginBottom: '6px',
                      marginTop: '0',
                    }}>
                      {item.title}
                    </p>
                    <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: RTCC vs Standalone Systems ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es
                ? 'RTCC Integrado vs Sistemas Aislados'
                : 'Integrated RTCC vs Standalone Systems'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'La diferencia crítica no es si una ciudad tiene cámaras o LPR — casi todas las ciudades los tienen. La diferencia es si esos sistemas están integrados en una plataforma unificada o si operan como islas de información separadas.'
                : 'The critical difference is not whether a city has cameras or LPR — almost every city does. The difference is whether those systems are integrated into a unified platform or operate as separate information silos.'}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginTop: '32px' }}>
              {(es
                ? [
                    {
                      label: 'Sistemas Aislados',
                      items: [
                        'VMS separado del LPR',
                        'Despacho sin video integrado',
                        'Alertas en sistemas diferentes',
                        'Analista cambia entre 4–6 pantallas',
                        'Evidencia dispersa en múltiples plataformas',
                        'Tiempo de respuesta aumentado por fricción de sistemas',
                      ],
                    },
                    {
                      label: 'RTCC Unificado',
                      items: [
                        'Video, LPR y despacho en una pantalla',
                        'Alertas geolocalizadas en mapa operativo',
                        'Unidades de campo visibles en el mismo mapa',
                        'Evidencia vinculada automáticamente al incidente',
                        'Analista opera sin cambiar de sistema',
                        'Tiempo de respuesta reducido desde el primer alerta',
                      ],
                    },
                  ]
                : [
                    {
                      label: 'Standalone Systems',
                      items: [
                        'VMS separate from LPR',
                        'Dispatch without integrated video',
                        'Alerts across different systems',
                        'Analyst switches between 4–6 screens',
                        'Evidence scattered across multiple platforms',
                        'Response time increased by system friction',
                      ],
                    },
                    {
                      label: 'Unified RTCC',
                      items: [
                        'Video, LPR, and dispatch on one screen',
                        'Geolocated alerts on operational map',
                        'Field units visible on the same map',
                        'Evidence auto-linked to incident',
                        'Analyst operates without switching systems',
                        'Response time reduced from first alert',
                      ],
                    },
                  ]
              ).map((col, i) => (
                <div
                  key={i}
                  style={{
                    background: i === 1 ? 'rgba(6,182,212,0.04)' : '#0b1628',
                    borderRadius: '10px',
                    border: i === 1 ? `1px solid ${ACCENT}40` : '1px solid var(--border)',
                    padding: '24px',
                  }}
                >
                  <p style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: i === 1 ? ACCENT : 'var(--muted)',
                    marginBottom: '16px',
                    marginTop: '0',
                  }}>
                    {col.label}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {col.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.5 }}>
                        <span style={{ color: i === 1 ? ACCENT : 'var(--muted)', minWidth: '12px', marginTop: '1px' }}>
                          {i === 1 ? '✓' : '—'}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: Key RTCC Technologies ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es
                ? 'Tecnologías Clave de un RTCC Moderno'
                : 'Key Technologies in a Modern RTCC'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Al evaluar plataformas de RTCC, estas son las capacidades tecnológicas que determinan la efectividad operativa.'
                : 'When evaluating RTCC platforms, these are the technology capabilities that determine operational effectiveness.'}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
              {(es
                ? [
                    { title: 'Gestión de Video Unificada', desc: 'El VMS debe gestionar cámaras fijas, móviles y drones en una sola interfaz, con soporte para RTSP, ONVIF y los principales fabricantes. La latencia del stream en vivo debe ser inferior a 500ms para soporte efectivo en tiempo real.' },
                    { title: 'LPR de Alta Velocidad', desc: 'El motor de LPR debe procesar placas en movimiento a velocidades de hasta 120 km/h con precisión superior al 95% en condiciones nocturnas. La consulta contra listas de interés debe completarse en menos de 2 segundos desde la lectura.' },
                    { title: 'Mapa Operativo GIS', desc: 'Todas las cámaras, alertas, lecturas de LPR y posiciones de unidades deben visualizarse en un mapa GIS unificado. El analista debe poder pasar de la alerta en el mapa al video de la cámara más cercana con un solo clic.' },
                    { title: 'Integración Nativa con CAD', desc: 'El RTCC debe conectarse directamente con el sistema de despacho CAD para que las alertas generadas por analítica se conviertan automáticamente en incidentes en la cola de despacho, sin que el analista tenga que llamar manualmente al operador.' },
                    { title: 'Analítica de IA Configurable', desc: 'Las reglas de analítica — zonas de exclusión, tiempo máximo de estacionamiento, umbral de densidad de personas — deben ser configurables por la agencia para adaptarse a las necesidades específicas de cada zona de la ciudad.' },
                    { title: 'Registros de Evidencia Auditables', desc: 'Toda la evidencia digital — video, alertas, lecturas de LPR — debe vincularse automáticamente al expediente del incidente y estar disponible para investigadores con cadena de custodia documentada.' },
                  ]
                : [
                    { title: 'Unified Video Management', desc: 'The VMS must manage fixed, mobile, and drone cameras in a single interface, with support for RTSP, ONVIF, and major manufacturers. Live stream latency must be below 500ms for effective real-time support.' },
                    { title: 'High-Speed LPR', desc: 'The LPR engine must process plates on vehicles moving at up to 120 km/h with greater than 95% accuracy in nighttime conditions. Cross-reference against watchlists must complete in under 2 seconds from the plate read.' },
                    { title: 'GIS Operational Map', desc: 'All cameras, alerts, LPR reads, and unit positions must be visualized on a unified GIS map. The analyst must be able to go from map alert to nearest camera video with a single click.' },
                    { title: 'Native CAD Integration', desc: 'The RTCC must connect directly with the CAD dispatch system so analytics-generated alerts automatically become incidents in the dispatch queue — without the analyst having to manually call the dispatch operator.' },
                    { title: 'Configurable AI Analytics', desc: 'Analytics rules — exclusion zones, maximum parking duration, crowd density thresholds — must be configurable by the agency to adapt to the specific needs of each area in the city.' },
                    { title: 'Auditable Evidence Records', desc: 'All digital evidence — video, alerts, LPR reads — must be automatically linked to the incident file and available to investigators with a documented chain of custody.' },
                  ]
              ).map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: '#0b1628',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    padding: '24px',
                  }}
                >
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    letterSpacing: '0.03em',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                    marginTop: '0',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5: Related Products ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
              {es ? 'Plataforma KabatOne para RTCC' : 'KabatOne Platform for RTCC'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '12px' }}>
              {es ? 'Una Sola Plataforma para Todo el RTCC' : 'One Platform for the Entire RTCC'}
            </h2>
            <p style={{ ...pStyle, marginBottom: '28px' }}>
              {es
                ? 'KabatOne unifica todas las tecnologías de RTCC en una sola plataforma: K-Video para gestión de video con analítica de IA, K-Safety para el mapa operativo GIS con unidades en tiempo real, K-Dispatch para el despacho CAD integrado, y K-Traffic para el monitoreo vial. Los analistas operan desde una sola interfaz sin cambiar de sistema.'
                : 'KabatOne unifies all RTCC technologies into a single platform: K-Video for video management with AI analytics, K-Safety for the GIS operational map with real-time units, K-Dispatch for integrated CAD dispatch, and K-Traffic for road monitoring. Analysts operate from a single interface without switching systems.'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { href: '/k-video', label: 'K-Video', desc: es ? 'Videovigilancia + IA' : 'Video + AI Analytics' },
                { href: '/k-safety', label: 'K-Safety', desc: es ? 'Mapa Operativo GIS' : 'GIS Operational Map' },
                { href: '/k-dispatch', label: 'K-Dispatch', desc: es ? 'Despacho CAD' : 'CAD Dispatch' },
                { href: '/k-traffic', label: 'K-Traffic', desc: es ? 'Gestión de Tráfico' : 'Traffic Management' },
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
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: ACCENT }} />
                  {p.label}
                  <span style={{ color: 'var(--muted)', fontSize: '10px', letterSpacing: '0.1em' }}>
                    {p.desc}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
              {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '32px' }}>
              {es
                ? 'Preguntas Comunes sobre los Centros de Crimen en Tiempo Real'
                : 'Common Questions About Real-Time Crime Centers'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    background: '#0b1628',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    padding: '24px 28px',
                  }}
                >
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 700,
                    fontSize: '17px',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                    marginTop: '0',
                    color: 'var(--white)',
                  }}>
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
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '24px',
            }}>
              {es ? 'Artículos Relacionados' : 'Related Articles'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link href="/resources/rtcc-setup-guide" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'Guía para Implementar un RTCC' : 'Real-Time Crime Center Setup Guide'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/resources/what-is-cad-dispatch-software" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? '¿Qué Es el Software CAD de Despacho?' : 'What Is CAD Dispatch Software?'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/resources/ai-in-public-safety" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'IA en Seguridad Pública: Guía para Ciudades' : 'AI in Public Safety: A Guide for Cities'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/vs/fusus" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'KabatOne vs Fusus — Comparativa RTCC' : 'KabatOne vs Fusus — RTCC Comparison'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          es={es}
          h2={
            es
              ? 'Ve el RTCC de KabatOne en Acción'
              : 'See KabatOne\'s RTCC Platform in Action'
          }
          subtitle={
            es
              ? 'KabatOne unifica video, LPR, despacho y GIS en una sola plataforma para centros de mando. Solicita una demostración con datos reales de ciudad.'
              : 'KabatOne unifies video, LPR, dispatch, and GIS in a single platform for command centers. Request a live demo with real city data.'
          }
        />

        <Footer es={es} />

        <style>{`
          @media (max-width: 768px) {
            section > div > div[style*="grid-template-columns: repeat(2"] {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 640px) {
            section {
              padding-left: 20px !important;
              padding-right: 20px !important;
            }
          }
        `}</style>
      </div>
    </>
  )
}
