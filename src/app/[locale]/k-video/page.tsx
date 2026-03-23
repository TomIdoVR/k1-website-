import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { softwareApplicationSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HubDiagram from '@/components/HubDiagram'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('kVideo', locale)
}

export default async function KVideoPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#a855f7'

  const content = {
    eyebrow: es ? 'Video Inteligente · K-Video' : 'Video Intelligence · K-Video',
    h1: es
      ? 'Gestión de Video Unificada e Inteligencia Analítica'
      : 'Unified Video Management and AI Analytics Platform',
    subtitle: es
      ? 'Agrega todas las cámaras en una vista unificada y con capacidad de búsqueda. K-Video añade analítica con IA para que encuentres lo que importa en segundos, no horas.'
      : 'Scalable cloud and on-premises video management system powered by AI-driven analytics — enabling real-time monitoring, forensic search, and automated threat detection across thousands of cameras.',
    stat1: { value: '1,204+', label: es ? 'Cámaras Activas' : 'Active Cameras' },
    stat2: { value: '98%', label: es ? 'Disponibilidad' : 'Uptime' },
    stat3: { value: 'IA', label: es ? 'Analítica' : 'AI Analytics' },
    cta1: es ? 'Solicita una Demo' : 'Book a Demo',
    cta2: es ? 'Ver la Plataforma' : 'Talk to an Expert',
    benefitsLabel: es ? 'Por qué K-Video' : 'Why K-Video',
    benefitsH2: es ? 'Videovigilancia Inteligente para Seguridad Pública' : 'Smart, Secure and Connected Video — Powered by AI',
    processH2: es ? 'Analítica de Video en la Nube Impulsada por IA' : 'AI-Driven Cloud-Based Video Analytics',
    capH2: es ? 'Solución Completa de VMS en la Nube con Analítica IA' : 'A Complete Cloud Video Management and AI Analytics Solution',
    intH2: es ? 'Conecta K-Video a tu Ecosistema de Seguridad' : 'Connect K-Video to Your Existing Security Ecosystem',
    ctaH2: es ? '¿Listo para Transformar tus Operaciones de Video?' : 'Ready to Transform Your Video Operations?',
    ctaSub: es
      ? 'Descubre cómo K-Video entrega conciencia situacional potenciada por IA en toda tu red de cámaras.'
      : 'See how K-Video delivers AI-powered situational awareness across your entire camera network.',
    ctaContact: es ? 'Contactar Ventas' : 'Contact Sales',
  }

  const benefits = es ? [
    { title: 'Monitoreo de Video en Tiempo Real', desc: 'Acceso instantáneo a feeds en vivo de miles de cámaras IP, body cams y transmisiones de drones en una sola plataforma.' },
    { title: 'Analítica Avanzada con IA', desc: 'Reconocimiento facial, reconocimiento de placas, detección de anomalías y análisis de comportamiento — todo automatizado.' },
    { title: 'Integraciones Perfectas', desc: 'Se conecta con las principales plataformas VMS, sistemas de seguridad pública y analítica de terceros.' },
    { title: 'Altamente Escalable y Redundante', desc: 'Arquitectura de microservicios que maneja miles de cámaras con 98% de disponibilidad y conmutación automática por fallo.' },
    { title: 'Seguridad y Cumplimiento', desc: 'Cifrado de extremo a extremo, soporte multiinquilino y auditorías completas para investigaciones forenses.' },
  ] : [
    { title: 'Real-Time Video Monitoring', desc: 'Instant access to live feeds from thousands of IP cameras, body cams, and drone streams on a single platform.' },
    { title: 'Advanced AI Analytics', desc: 'Facial recognition, license plate recognition, anomaly detection, and behavioral analysis — all automated.' },
    { title: 'Seamless Integrations', desc: 'Connects with major VMS platforms, public safety systems, and third-party analytics.' },
    { title: 'Highly Scalable & Redundant', desc: 'Microservices architecture handles thousands of cameras with 98% uptime and automatic failover.' },
    { title: 'Security & Compliance', desc: 'End-to-end encryption, multi-tenant support, and full audit trails for forensic investigations.' },
  ]

  const capChecklist = es ? [
    'Almacenamiento y recuperación de video en nube o local',
    'Múltiples protocolos de streaming (HLS, WebRTC, RTMP, RTSP)',
    'Detección automática de movimiento y alertas de intrusión',
    'Control de acceso flexible para entornos multiinquilino',
    'Búsqueda forense y capacidades de investigación',
    'Cifrado de extremo a extremo y soporte de cumplimiento',
  ] : [
    'Cloud or on-premises video storage and retrieval',
    'Multiple streaming protocols (HLS, WebRTC, RTMP, RTSP)',
    'Automated motion detection & intrusion alerts',
    'Flexible access control for multi-tenant environments',
    'Forensic search and investigation capabilities',
    'End-to-end encryption and compliance support',
  ]

  const aiMetrics = [
    { label: es ? 'Precisión de Reconocimiento Facial' : 'Face Recognition Accuracy', value: '94%' },
    { label: es ? 'Tasa de Lectura LPR' : 'LPR Read Rate', value: '99%' },
    { label: es ? 'Detección de Anomalías' : 'Anomaly Detection Rate', value: '88%' },
    { label: es ? 'Disponibilidad de Plataforma' : 'Platform Uptime', value: '98%' },
    { label: es ? 'Cámaras Soportadas' : 'Cameras Supported', value: '10k+' },
  ]

  const integrations = es ? [
    { title: 'Sistemas de Gestión de Video', desc: 'Compatible con las principales plataformas VMS y fabricantes de cámaras IP.' },
    { title: 'Seguridad Pública y Centros 911', desc: 'Envía video en vivo a plataformas CAD, RTCC y de despacho.' },
    { title: 'IA y Analítica de Video', desc: 'Reconocimiento facial, LPR, análisis de comportamiento, detección de disparos.' },
    { title: 'IoT y Sensores Inteligentes', desc: 'Sensores de movimiento, seguridad perimetral, sistemas de control de acceso.' },
  ] : [
    { title: 'Video Management Systems', desc: 'Compatible with leading VMS platforms and IP camera manufacturers.' },
    { title: 'Public Safety & 911 Centers', desc: 'Feeds live video to CAD, RTCCs, and dispatch platforms.' },
    { title: 'AI & Video Analytics', desc: 'Facial recognition, LPR, behavioral analysis, gunshot detection.' },
    { title: 'IoT & Smart Sensors', desc: 'Motion sensors, perimeter security, access control systems.' },
  ]

  const processInputs = es
    ? ['Cámaras IP', 'Streams RTSP', 'Drones', 'Archivos', 'Analítica IA']
    : ['IP Cameras', 'RTSP Streams', 'Drones', 'Archives', 'AI Analytics']
  const processOutputs = es
    ? ['Vista en Vivo', 'Alerta de Evento', 'Investigación']
    : ['Live View', 'Event Alert', 'Investigation']

  const cameras = [
    { id: 'CAM-01', loc: es ? 'Entrada Principal' : 'Main Entrance', img: 'https://cdn.prod.website-files.com/67a25cd047d7f58ef27ec3f5/69979b97a7abadd4301fac6e_reforma-angel-k-video.jpg', alert: false },
    { id: 'CAM-04', loc: es ? 'Plaza Central' : 'Plaza Central', img: 'https://cdn.prod.website-files.com/67a25cd047d7f58ef27ec3f5/6997a20ce857649b677c9a62_diana-k-video.jpeg', alert: true },
    { id: 'CAM-07', loc: es ? 'Estacionamiento' : 'Parking Deck', img: 'https://cdn.prod.website-files.com/67a25cd047d7f58ef27ec3f5/6997a20c4c12d686af032bd2_alameda-k-video.jpeg', alert: false },
    { id: 'CAM-12', loc: es ? 'Puerta Norte' : 'North Gate', img: 'https://cdn.prod.website-files.com/67a25cd047d7f58ef27ec3f5/6997a20c09ca794995af763b_periferico-k-video.jpeg', alert: false },
  ]

  const videoFaqs = es ? [
    { question: '¿Qué es K-Video?', answer: 'K-Video es un sistema de gestión de video (VMS) escalable en nube y local, potenciado por analítica de IA. Permite monitoreo en tiempo real, búsqueda forense y detección automatizada de amenazas en miles de cámaras.' },
    { question: '¿Cómo utiliza K-Video la IA para analítica de video?', answer: 'K-Video integra reconocimiento facial con 94% de precisión, reconocimiento de placas vehiculares (LPR) con 99% de tasa de lectura, detección de anomalías y análisis de comportamiento — todo automatizado y en tiempo real.' },
    { question: '¿Cuántas cámaras puede gestionar K-Video?', answer: 'K-Video soporta más de 10,000 cámaras gracias a su arquitectura de microservicios. Maneja cámaras IP, body cams y streams de drones con 98% de disponibilidad y conmutación automática por fallo.' },
    { question: '¿Soporta K-Video cámaras de terceros?', answer: 'Sí. K-Video es compatible con las principales plataformas VMS y fabricantes de cámaras IP, soportando múltiples protocolos de streaming incluyendo HLS, WebRTC, RTMP y RTSP.' },
    { question: '¿Qué es la búsqueda inteligente de video en K-Video?', answer: 'La búsqueda inteligente de K-Video permite encontrar eventos específicos en segundos en lugar de horas, utilizando filtros de IA como reconocimiento facial, LPR, detección de movimiento y análisis de comportamiento en archivos de video almacenados.' },
  ] : [
    { question: 'What is K-Video?', answer: 'K-Video is a scalable cloud and on-premises video management system (VMS) powered by AI-driven analytics. It enables real-time monitoring, forensic search, and automated threat detection across thousands of cameras.' },
    { question: 'How does K-Video use AI for video analytics?', answer: 'K-Video integrates facial recognition at 94% accuracy, license plate recognition (LPR) at 99% read rate, anomaly detection, and behavioral analysis — all automated and in real time.' },
    { question: 'How many cameras can K-Video manage?', answer: 'K-Video supports over 10,000 cameras through its microservices architecture. It handles IP cameras, body cams, and drone streams with 98% uptime and automatic failover.' },
    { question: 'Does K-Video support third-party cameras?', answer: 'Yes. K-Video is compatible with major VMS platforms and IP camera manufacturers, supporting multiple streaming protocols including HLS, WebRTC, RTMP, and RTSP.' },
    { question: 'What is intelligent video search in K-Video?', answer: 'K-Video\'s intelligent search lets you find specific events in seconds instead of hours, using AI filters like facial recognition, LPR, motion detection, and behavioral analysis across stored video archives.' },
  ]

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: 'K-Video', url: es ? 'https://kabatone.com/es/k-video/' : 'https://kabatone.com/k-video/' },
  ]

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema(
          'K-Video',
          es ? 'Sistema de gestión de video escalable en nube y local, potenciado por analítica de IA para monitoreo en tiempo real y detección automatizada de amenazas.' : 'Scalable cloud and on-premises video management system powered by AI-driven analytics for real-time monitoring and automated threat detection.',
          'Video Management System (VMS)',
          'https://kabatone.com/k-video'
        )) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(videoFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <section style={{
          maxWidth: '1200px', margin: '0 auto', padding: '96px 32px 80px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center',
        }}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.26em', color: ACCENT, marginBottom: '20px' }}>
              <span style={{ display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%', background: ACCENT, marginRight: '8px', verticalAlign: 'middle' }} />
              {content.eyebrow}
            </p>
            <h1 style={{ fontSize: 'clamp(38px, 4.5vw, 60px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '0.01em', marginBottom: '24px', fontFamily: 'Barlow Condensed, sans-serif' }}>
              {content.h1}
            </h1>
            <p style={{ fontSize: '17px', fontWeight: 300, lineHeight: 1.75, color: 'var(--dim)', marginBottom: '40px' }}>
              {content.subtitle}
            </p>
            <div style={{ display: 'flex', gap: '32px', marginBottom: '40px' }}>
              {[content.stat1, content.stat2, content.stat3].map((s, i) => (
                <div key={i} style={{ borderLeft: i > 0 ? '1px solid var(--border)' : 'none', paddingLeft: i > 0 ? '32px' : 0 }}>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: ACCENT, fontFamily: 'Barlow Condensed, sans-serif' }}>{s.value}</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ background: 'var(--blue)', color: '#fff', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', boxShadow: '0 0 24px rgba(59,130,246,0.4)' }}>{content.cta1}</Link>
            </div>
          </div>

          {/* Video Monitor Mockup */}
          <div style={{ background: '#0b1628', borderRadius: '16px', border: `1px solid ${ACCENT}55`, overflow: 'hidden', boxShadow: '0 24px 80px rgba(0,0,0,0.5)' }}>
            <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--white)' }}>{es ? 'Monitor K-Video' : 'K-Video Monitor Wall'}</span>
              <span style={{ fontSize: '10px', fontWeight: 700, background: ACCENT, color: '#fff', padding: '2px 8px', borderRadius: '4px', letterSpacing: '0.1em' }}>LIVE</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', padding: '12px', background: '#070d1a' }}>
              {cameras.map((cam) => (
                <div key={cam.id} style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', border: cam.alert ? `2px solid ${ACCENT}` : '2px solid transparent' }}>
                  <Image src={cam.img} alt={cam.loc} width={300} height={160} style={{ width: '100%', height: '120px', objectFit: 'cover', display: 'block' }} unoptimized />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', padding: '8px' }}>
                    <div style={{ fontSize: '10px', color: '#fff', fontWeight: 600 }}>{cam.id} · {cam.loc}</div>
                    {cam.alert && <div style={{ fontSize: '9px', color: ACCENT, fontWeight: 700, textTransform: 'uppercase' }}>⚠ Alert</div>}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: '12px 20px', display: 'flex', gap: '20px' }}>
              <span style={{ fontSize: '11px', color: 'var(--muted)' }}>1,204 {es ? 'Cámaras' : 'Cameras Online'}</span>
              <span style={{ fontSize: '11px', color: ACCENT, fontWeight: 600 }}>● 12 {es ? 'Alertas LPR' : 'LPR Alerts'}</span>
              <span style={{ fontSize: '11px', color: 'var(--muted)' }}>78% Storage</span>
            </div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section style={{ background: 'var(--bg-2)', padding: '100px 40px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--cyan)', marginBottom: '12px' }}>{content.benefitsLabel}</p>
            <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '48px' }}>{content.benefitsH2}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {benefits.slice(0, 3).map((b, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border)', borderTop: `2px solid ${ACCENT}`, padding: '28px 24px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: `${ACCENT}18`, border: `1px solid ${ACCENT}33`, marginBottom: '16px' }} />
                  <h3 style={{ fontSize: '17px', fontWeight: 700, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', letterSpacing: '0.02em', color: 'var(--white)', marginBottom: '10px' }}>{b.title}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.65 }}>{b.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '20px' }}>
              {benefits.slice(3).map((b, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border)', borderTop: `2px solid ${ACCENT}`, padding: '28px 24px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: `${ACCENT}18`, border: `1px solid ${ACCENT}33`, marginBottom: '16px' }} />
                  <h3 style={{ fontSize: '17px', fontWeight: 700, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', letterSpacing: '0.02em', color: 'var(--white)', marginBottom: '10px' }}>{b.title}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.65 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section style={{ padding: '100px 40px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontFamily: 'DM Mono, monospace', fontSize: '11px', fontWeight: 500, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#06b6d4', marginBottom: '18px' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#06b6d4', boxShadow: '0 0 8px #06b6d4', display: 'inline-block' }}/>
              The Process
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '0' }}>{content.processH2}</h2>
            <HubDiagram
              uid="kv"
              product="K-VIDEO"
              tagline="CAPTURE · ANALYZE · STORE"
              inputs={[
                { label: 'IP Cameras',    pillW: 100, icon: <><rect x="-10" y="-7" width="15" height="12" rx="2"/><polyline points="5,-5 14,-9 14,3 5,1"/><circle cx="-3" cy="-1" r="2.5" fill="#60a5fa" stroke="none"/></> },
                { label: 'RTSP Streams',  pillW: 108, icon: <><path d="M-12,-10 A17,17 0 0,1 12,-10"/><path d="M-8,-4 A11,11 0 0,1 8,-4"/><path d="M-4,2 A6,6 0 0,1 4,2"/><circle cx="0" cy="7" r="2.5" fill="#60a5fa" stroke="none"/></> },
                { label: 'Drones',        pillW: 88,  icon: <><circle cx="0" cy="0" r="4" fill="#60a5fa" stroke="none"/><circle cx="-12" cy="-8" r="3"/><circle cx="12" cy="-8" r="3"/><circle cx="-12" cy="8" r="3"/><circle cx="12" cy="8" r="3"/><line x1="-4" y1="-3" x2="-9" y2="-7"/><line x1="4" y1="-3" x2="9" y2="-7"/><line x1="-4" y1="3" x2="-9" y2="7"/><line x1="4" y1="3" x2="9" y2="7"/></> },
                { label: 'Archives',      pillW: 88,  icon: <><rect x="-13" y="-8" width="26" height="18" rx="2"/><rect x="-13" y="-13" width="26" height="6" rx="1"/><line x1="-4" y1="-10" x2="4" y2="-10"/><line x1="-6" y1="0" x2="6" y2="0"/></> },
                { label: 'AI Analytics',  pillW: 100, icon: <><circle cx="0" cy="-2" r="8" fill="none"/><path d="M-5,-7 Q0,-13 5,-7"/><path d="M-8,2 Q-13,6 -9,10"/><path d="M8,2 Q13,6 9,10"/><circle cx="-6" cy="-4" r="2" fill="#60a5fa" stroke="none"/><circle cx="6" cy="-4" r="2" fill="#60a5fa" stroke="none"/><line x1="-2" y1="2" x2="2" y2="2"/></> },
              ]}
              outputs={[
                { label: 'Live View',     pillW: 96,  icon: <><rect x="-14" y="-10" width="28" height="20" rx="2"/><polyline points="-7,10 -7,14 7,14 7,10"/><line x1="-10" y1="14" x2="10" y2="14"/></> },
                { label: 'Event Alert',   pillW: 96,  icon: <><path d="M0,-13 C-5,-13 -10,-8 -10,-1 L-10,6 L10,6 L10,-1 C10,-8 5,-13 0,-13 Z"/><line x1="-13" y1="6" x2="13" y2="6"/><path d="M-2,8 A3,3 0 0,0 2,8"/></> },
                { label: 'Investigation', pillW: 102, icon: <><circle cx="-2" cy="-3" r="8"/><line x1="5" y1="4" x2="13" y2="12"/></> },
              ]}
            />
          </div>
        </section>

        {/* ── CAPABILITIES ── */}
        <section style={{ background: 'var(--bg-2)', padding: '100px 40px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '48px', textAlign: 'center' }}>{content.capH2}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
              <div>
                {capChecklist.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ color: ACCENT, fontSize: '16px', flexShrink: 0, marginTop: '1px' }}>✓</span>
                    <span style={{ fontSize: '15px', color: 'var(--white)', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
                <div style={{ marginTop: '32px' }}>
                  <Link href="/contact" style={{ background: ACCENT, color: '#fff', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px' }}>{content.cta1}</Link>
                </div>
              </div>
              <div style={{ background: '#0b1628', borderRadius: '16px', border: '1px solid var(--border)', padding: '32px' }}>
                <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: ACCENT, marginBottom: '24px' }}>
                  {es ? 'Métricas de Procesamiento IA' : 'AI Processing Metrics'}
                </p>
                {aiMetrics.map((m, i) => (
                  <div key={i} style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '13px', color: 'var(--muted)' }}>{m.label}</span>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: ACCENT }}>{m.value}</span>
                    </div>
                    {!isNaN(parseFloat(m.value)) && (
                      <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px' }}>
                        <div style={{ height: '100%', width: m.value, background: ACCENT, borderRadius: '2px' }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── INTEGRATIONS ── */}
        <section style={{ padding: '100px 40px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '48px', textAlign: 'center' }}>{content.intH2}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              {integrations.map((int, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '28px 20px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '10px' }}>{int.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 1.65 }}>{int.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED RESOURCES ── */}
        <section style={{ padding: '64px 0', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: 'var(--cyan)', marginBottom: '24px',
            }}>
              {es ? 'Recursos Relacionados' : 'Related Resources'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              <Link href="/resources/what-is-a-public-safety-platform" style={{
                display: 'block', padding: '20px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px', fontWeight: 400,
                transition: 'border-color 0.2s',
              }}>
                {es ? '¿Qué es una plataforma de seguridad pública?' : 'What Is a Public Safety Platform?'}
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                  {es ? 'Guía de referencia →' : 'Reference guide →'}
                </span>
              </Link>
              <Link href="/resources/psim-vs-unified-platform" style={{
                display: 'block', padding: '20px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px', fontWeight: 400,
                transition: 'border-color 0.2s',
              }}>
                {es ? 'PSIM vs Plataforma Unificada' : 'PSIM vs Unified Platform'}
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                  {es ? 'Guía de referencia →' : 'Reference guide →'}
                </span>
              </Link>
              <Link href="/resources/smart-city-platform-guide" style={{
                display: 'block', padding: '20px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px', fontWeight: 400,
                transition: 'border-color 0.2s',
              }}>
                {es ? 'Guía de plataformas de ciudad inteligente' : 'Smart City Platform Guide'}
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                  {es ? 'Guía de referencia →' : 'Reference guide →'}
                </span>
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '16px', marginTop: '24px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
                {es ? 'Ver por industria:' : 'Browse by industry:'}
              </span>
              <Link href="/industries/public-safety" style={{ fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none' }}>
                {es ? 'Seguridad Pública' : 'Public Safety'}
              </Link>
              <Link href="/industries/airport" style={{ fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none' }}>
                {es ? 'Aeropuertos' : 'Airports'}
              </Link>
              <Link href="/industries/retail" style={{ fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none' }}>
                {es ? 'Retail' : 'Retail'}
              </Link>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section style={{ padding: '96px 32px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '16px' }}>{content.ctaH2}</h2>
          <p style={{ fontSize: '16px', color: 'var(--dim)', marginBottom: '40px' }}>{content.ctaSub}</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ background: 'var(--blue)', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', boxShadow: '0 0 24px rgba(59,130,246,0.4)' }}>{content.cta1}</Link>
            <Link href="/contact" style={{ background: 'transparent', color: 'var(--white)', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', border: '1px solid var(--border-b)' }}>{content.ctaContact}</Link>
          </div>
        </section>

        <Footer es={es} />
      </div>
    </>
  )
}
