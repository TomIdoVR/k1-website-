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
  return generatePageMetadata('videoManagementPublicSafetyGuide', locale)
}

export default async function VideoManagementPublicSafetyGuidePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#a855f7'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/video-management-public-safety-guide/`
    : `${baseUrl}/resources/video-management-public-safety-guide/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Gestion de Video para Seguridad Publica' : 'Video Management for Public Safety', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Que es un VMS para seguridad publica y en que se diferencia de un VMS comercial?',
      answer: 'Un VMS (Video Management System) para seguridad publica es una plataforma de gestion de video disenada para operaciones gubernamentales de comando y control. A diferencia de un VMS comercial (orientado a retail o edificios corporativos), un VMS de seguridad publica se integra con sistemas CAD de despacho, mapas GIS operativos y sensores como LPR, deteccion de disparos y botones de panico. KabatOne K-Video centraliza miles de camaras de multiples marcas (ONVIF/RTSP) en una sola interfaz con busqueda por zona, fecha y tipo de evento, conectada directamente al despacho y al mapa de situacion.',
    },
    {
      question: '¿Cuantas camaras puede gestionar una plataforma VMS unificada para seguridad publica?',
      answer: 'Las plataformas VMS modernas para seguridad publica gestionan desde cientos hasta decenas de miles de camaras en una sola instancia. KabatOne esta desplegado en mas de 40 ciudades protegiendo 73 millones de ciudadanos, gestionando redes de camaras municipales, CCTV de transporte publico, camaras de Carabineros o policia local y feeds privados compartidos a traves de K-Connect. La arquitectura ONVIF/RTSP permite integrar cualquier marca sin reemplazo de hardware.',
    },
    {
      question: '¿Como se integra un VMS con despacho CAD y GIS en un centro de mando?',
      answer: 'En una plataforma unificada como KabatOne, el VMS (K-Video) esta conectado nativamente al CAD (K-Dispatch) y al GIS (K-Safety). Cuando un operador crea un incidente en el CAD, el sistema automaticamente muestra las camaras mas cercanas al evento en el mapa GIS. El operador puede ver video en vivo, buscar grabaciones por zona y fecha, y compartir feeds con unidades en campo — todo desde la misma interfaz sin cambiar de sistema.',
    },
    {
      question: '¿Que analitica de video AI es util para seguridad publica municipal?',
      answer: 'Las funciones de analitica de video mas valiosas para seguridad publica incluyen: LPR (reconocimiento de placas) para busqueda de vehiculos en tiempo real, deteccion de intrusiones perimetrales, deteccion de objetos abandonados, conteo de personas en areas publicas, deteccion de comportamiento anomalo y reconocimiento facial (donde la legislacion lo permite). KabatOne K-Video integra estas funciones directamente en el flujo operativo del centro de mando, generando alertas que se convierten automaticamente en incidentes en el CAD.',
    },
    {
      question: '¿Puede un municipio integrar camaras existentes de diferentes fabricantes en un solo VMS?',
      answer: 'Si. KabatOne integra cualquier camara compatible con ONVIF/RTSP sin reemplazo de hardware. Los municipios tipicamente tienen camaras de multiples fabricantes instaladas en distintos anos y proyectos. K-Video las unifica en una sola interfaz buscable por zona, fecha y tipo de evento. Tambien integra camaras privadas compartidas por comercios a traves de K-Connect, expandiendo la cobertura sin inversion en infraestructura adicional.',
    },
    {
      question: '¿Que ventaja tiene una plataforma unificada vs un VMS standalone para seguridad publica?',
      answer: 'Un VMS standalone (como Milestone, Genetec o Avigilon) gestiona video pero no incluye CAD de despacho, GIS operativo ni gestion de incidentes. Los operadores deben alternar entre 3-4 sistemas diferentes. Una plataforma unificada como KabatOne integra K-Video (VMS), K-Dispatch (CAD), K-Safety (GIS) y K-Traffic en una sola interfaz. Cada alerta de video genera automaticamente un incidente en el CAD, muestra la ubicacion en el mapa GIS y asigna la unidad mas cercana — eliminando la latencia operacional entre sistemas.',
    },
  ] : [
    {
      question: 'What is a public safety VMS and how does it differ from a commercial VMS?',
      answer: 'A public safety VMS (Video Management System) is a video management platform designed for government command-and-control operations. Unlike commercial VMS (built for retail or corporate buildings), a public safety VMS integrates with CAD dispatch systems, operational GIS maps, and sensors like LPR, gunshot detection, and panic buttons. KabatOne K-Video centralizes thousands of cameras from multiple manufacturers (ONVIF/RTSP) in one interface with search by zone, date, and event type, connected directly to dispatch and the situational awareness map.',
    },
    {
      question: 'How many cameras can a unified public safety VMS platform manage?',
      answer: 'Modern public safety VMS platforms manage from hundreds to tens of thousands of cameras in a single instance. KabatOne is deployed across 40+ cities protecting 73 million citizens, managing municipal camera networks, public transit CCTV, police cameras, and privately shared feeds through K-Connect. The ONVIF/RTSP architecture integrates any brand without hardware replacement.',
    },
    {
      question: 'How does a VMS integrate with CAD dispatch and GIS in a command center?',
      answer: "In a unified platform like KabatOne, the VMS (K-Video) is natively connected to CAD (K-Dispatch) and GIS (K-Safety). When an operator creates an incident in CAD, the system automatically displays the nearest cameras on the GIS map. The operator can view live video, search recordings by zone and date, and share feeds with field units — all from the same interface without switching systems.",
    },
    {
      question: 'What AI video analytics are useful for municipal public safety?',
      answer: 'The most valuable video analytics functions for public safety include: LPR (license plate recognition) for real-time vehicle search, perimeter intrusion detection, abandoned object detection, people counting in public areas, anomalous behavior detection, and facial recognition (where legislation permits). KabatOne K-Video integrates these functions directly into the command center operational workflow, generating alerts that automatically become incidents in CAD.',
    },
    {
      question: 'Can a municipality integrate existing cameras from different manufacturers into one VMS?',
      answer: 'Yes. KabatOne integrates any ONVIF/RTSP-compatible camera without hardware replacement. Municipalities typically have cameras from multiple manufacturers installed across different years and projects. K-Video unifies them in one searchable interface by zone, date, and event type. It also integrates privately shared cameras from businesses through K-Connect, expanding coverage without additional infrastructure investment.',
    },
    {
      question: 'What is the advantage of a unified platform vs a standalone VMS for public safety?',
      answer: 'A standalone VMS (like Milestone, Genetec, or Avigilon) manages video but does not include CAD dispatch, operational GIS, or incident management. Operators must switch between 3-4 different systems. A unified platform like KabatOne integrates K-Video (VMS), K-Dispatch (CAD), K-Safety (GIS), and K-Traffic in one interface. Every video alert automatically generates an incident in CAD, shows the location on the GIS map, and assigns the nearest unit — eliminating operational latency between systems.',
    },
  ]

  const artSchema = articleSchema(
    es ? 'Gestion de Video para Seguridad Publica: Guia Completa de VMS para Municipios' : 'Video Management for Public Safety: Complete VMS Guide for Municipalities',
    es
      ? 'Guia completa sobre plataformas VMS (Video Management System) para seguridad publica — como elegir, integrar y operar un sistema de gestion de video unificado en centros de mando municipales, conectado con CAD, GIS y analitica AI.'
      : 'Complete guide to VMS (Video Management System) platforms for public safety — how to choose, integrate, and operate a unified video management system in municipal command centers, connected with CAD, GIS, and AI analytics.',
    pageUrl,
    '2026-05-26'
  )

  const comparisonRows = es ? [
    { feature: 'Video', standalone: 'VMS aislado: ve camaras pero no sabe que esta pasando', unified: 'Video conectado a despacho: cada alerta abre un incidente automaticamente' },
    { feature: 'Despacho', standalone: 'CAD separado: el operador copia/pega ubicaciones del VMS al CAD', unified: 'Un clic: la camara muestra la alerta, el CAD la registra, el GIS la ubica' },
    { feature: 'GIS', standalone: 'Mapa desconectado de las camaras y el despacho', unified: 'Mapa operativo con posiciones de unidades, camaras y incidentes en tiempo real' },
    { feature: 'Busqueda forense', standalone: 'Solo por camara y rango de tiempo', unified: 'Busqueda por zona, fecha, tipo de evento, placa (LPR) y correlacion de incidentes' },
    { feature: 'Camaras privadas', standalone: 'No soportadas — solo infraestructura propia', unified: 'K-Connect integra camaras de comercios y ciudadanos sin infraestructura adicional' },
    { feature: 'Escalabilidad', standalone: 'Hardware propietario por fabricante', unified: 'ONVIF/RTSP: cualquier marca, cualquier protocolo, sin lock-in' },
  ] : [
    { feature: 'Video', standalone: 'Standalone VMS: sees cameras but has no operational context', unified: 'Video connected to dispatch: every alert opens an incident automatically' },
    { feature: 'Dispatch', standalone: 'Separate CAD: operator copy-pastes locations from VMS to CAD', unified: 'One click: camera shows the alert, CAD logs it, GIS locates it' },
    { feature: 'GIS', standalone: 'Map disconnected from cameras and dispatch', unified: 'Operational map with unit positions, cameras, and incidents in real time' },
    { feature: 'Forensic search', standalone: 'Only by camera and time range', unified: 'Search by zone, date, event type, license plate (LPR), and incident correlation' },
    { feature: 'Private cameras', standalone: 'Not supported — only owned infrastructure', unified: 'K-Connect integrates business and citizen cameras without additional infrastructure' },
    { feature: 'Scalability', standalone: 'Proprietary hardware per manufacturer', unified: 'ONVIF/RTSP: any brand, any protocol, no lock-in' },
  ]

  const workflowSteps = es ? [
    { n: '01', title: 'Integracion de camaras existentes', text: 'Todas las camaras municipales — independientemente del fabricante, ano de instalacion o protocolo — se unifican en una sola interfaz VMS via ONVIF/RTSP. Sin reemplazo de hardware, sin migraciones costosas.' },
    { n: '02', title: 'Analitica AI automatizada', text: 'LPR, deteccion de intrusiones, objetos abandonados y comportamiento anomalo generan alertas automaticas. Cada alerta se convierte en un incidente en el CAD sin intervencion manual del operador.' },
    { n: '03', title: 'Conexion nativa con despacho CAD', text: 'K-Video esta conectado directamente a K-Dispatch. Cuando se crea un incidente, las camaras mas cercanas aparecen automaticamente. El operador ve video en vivo y grabaciones desde la misma pantalla del despacho.' },
    { n: '04', title: 'Mapa operativo GIS en tiempo real', text: 'Cada camara, unidad de campo e incidente activo se muestra en un solo mapa operativo K-Safety. Los comandantes ven la situacion completa sin alternar entre sistemas.' },
    { n: '05', title: 'Expansion con camaras privadas', text: 'K-Connect permite que comercios y ciudadanos compartan sus camaras con el centro de mando. La cobertura de video se expande exponencialmente sin inversion municipal en infraestructura adicional.' },
  ] : [
    { n: '01', title: 'Existing camera integration', text: 'All municipal cameras — regardless of manufacturer, installation year, or protocol — are unified in one VMS interface via ONVIF/RTSP. No hardware replacement, no costly migrations.' },
    { n: '02', title: 'Automated AI analytics', text: 'LPR, intrusion detection, abandoned objects, and anomalous behavior generate automatic alerts. Each alert becomes a CAD incident without manual operator intervention.' },
    { n: '03', title: 'Native CAD dispatch connection', text: 'K-Video is connected directly to K-Dispatch. When an incident is created, the nearest cameras appear automatically. The operator sees live video and recordings from the same dispatch screen.' },
    { n: '04', title: 'Real-time GIS operational map', text: 'Every camera, field unit, and active incident is displayed on one K-Safety operational map. Commanders see the complete picture without switching between systems.' },
    { n: '05', title: 'Expansion with private cameras', text: 'K-Connect lets businesses and citizens share their cameras with the command center. Video coverage expands exponentially without municipal investment in additional infrastructure.' },
  ]

  const challengeCards = es ? [
    { icon: '📷', title: 'Camaras de multiples fabricantes sin unificar', text: 'Anos de proyectos independientes generan redes de camaras de distintas marcas y protocolos. Sin una capa VMS unificada, los operadores acceden a multiples interfaces, ralentizando la busqueda de footage y creando puntos ciegos operativos entre zonas.' },
    { icon: '🔗', title: 'Video desconectado del despacho y el GIS', text: 'En la mayoria de los centros de mando, el VMS, el CAD y el GIS son sistemas separados. Los operadores copian ubicaciones manualmente entre pantallas. La latencia entre ver una alerta de video y despachar una unidad puede superar los 3 minutos — tiempo critico en emergencias.' },
    { icon: '🏘️', title: 'Cobertura limitada a infraestructura propia', text: 'Los municipios solo ven las camaras que compraron e instalaron. Miles de camaras privadas de comercios, bancos y residencias quedan fuera del sistema de monitoreo, dejando enormes puntos ciegos en la ciudad.' },
    { icon: '📊', title: 'Sin metricas de rendimiento del video', text: 'Sin analitica integrada, no hay forma de medir cuantas alertas de video generaron despacho real, cuantos incidentes se resolvieron con evidencia de video, o que zonas tienen cobertura insuficiente. Las decisiones de inversion en camaras se toman sin datos operativos.' },
  ] : [
    { icon: '📷', title: 'Multi-vendor cameras without unification', text: 'Years of independent projects create camera networks from different brands and protocols. Without a unified VMS layer, operators access multiple interfaces, slowing footage retrieval and creating operational blind spots between zones.' },
    { icon: '🔗', title: 'Video disconnected from dispatch and GIS', text: 'In most command centers, VMS, CAD, and GIS are separate systems. Operators copy locations manually between screens. The latency between seeing a video alert and dispatching a unit can exceed 3 minutes — critical time in emergencies.' },
    { icon: '🏘️', title: 'Coverage limited to owned infrastructure', text: 'Municipalities only see cameras they purchased and installed. Thousands of private cameras from businesses, banks, and residences remain outside the monitoring system, leaving massive blind spots across the city.' },
    { icon: '📊', title: 'No video performance metrics', text: 'Without integrated analytics, there is no way to measure how many video alerts generated actual dispatch, how many incidents were resolved with video evidence, or which zones have insufficient coverage. Camera investment decisions are made without operational data.' },
  ]

  return (
    <>
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(artSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* -- BREADCRUMB -- */}
        <div style={{
          maxWidth: '860px', margin: '0 auto', padding: '20px 40px 0',
          display: 'flex', alignItems: 'center', gap: '8px',
          fontFamily: 'DM Mono, monospace', fontSize: '11px',
          letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)',
        }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
            {es ? 'Inicio' : 'Home'}
          </Link>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: 'var(--dim)' }}>{es ? 'Recursos' : 'Resources'}</span>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: ACCENT }}>
            {es ? 'Gestion de Video para Seguridad Publica' : 'Video Management for Public Safety'}
          </span>
        </div>

        {/* -- HERO -- */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 40px 64px' }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '11px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: ACCENT, marginBottom: '20px',
          }}>
            {es ? 'Guia de Referencia' : 'Reference Guide'}
          </p>
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.05,
            letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '28px',
          }}>
            {es
              ? 'Gestion de Video para Seguridad Publica: Guia Completa de VMS para Municipios'
              : 'Video Management for Public Safety: Complete VMS Guide for Municipalities'}
          </h1>
          <p style={{
            fontSize: '18px', fontWeight: 300, color: 'var(--dim)',
            lineHeight: 1.75, maxWidth: '720px',
          }}>
            {es
              ? 'Una plataforma VMS unificada para seguridad publica conecta miles de camaras de multiples fabricantes con el despacho de emergencias (CAD), mapas GIS operativos y analitica de video AI — en una sola interfaz para centros de mando municipales. Esta guia explica como elegir, integrar y operar un VMS que funcione como parte de una plataforma operativa completa, no como un sistema aislado de video.'
              : 'A unified VMS platform for public safety connects thousands of cameras from multiple manufacturers with emergency dispatch (CAD), operational GIS maps, and AI video analytics — in one interface for municipal command centers. This guide explains how to choose, integrate, and operate a VMS that works as part of a complete operational platform, not as an isolated video system.'}
          </p>
        </section>

        {/* -- SECTION: Why Public Safety VMS Is Different -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? '¿Por Que un VMS de Seguridad Publica Es Diferente?'
                : 'Why a Public Safety VMS Is Different'}
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Un VMS comercial gestiona camaras. Un VMS de seguridad publica gestiona operaciones. La diferencia fundamental es que en un centro de mando municipal, el video no es un fin en si mismo — es una fuente de datos que alimenta el despacho de emergencias, la conciencia situacional y la toma de decisiones en tiempo real. Un VMS que no esta conectado nativamente al CAD y al GIS obliga a los operadores a alternar entre sistemas, copiar informacion manualmente y perder segundos criticos en cada incidente.'
                : 'A commercial VMS manages cameras. A public safety VMS manages operations. The fundamental difference is that in a municipal command center, video is not an end in itself — it is a data source that feeds emergency dispatch, situational awareness, and real-time decision-making. A VMS that is not natively connected to CAD and GIS forces operators to switch between systems, copy information manually, and lose critical seconds on every incident.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'KabatOne K-Video es el VMS integrado en una plataforma operativa unificada de seguridad publica. Desplegado en mas de 40 ciudades protegiendo 73 millones de ciudadanos, K-Video gestiona redes de miles de camaras de multiples fabricantes — municipales, de transporte publico, policiales y privadas compartidas — en una sola interfaz con busqueda por zona, fecha y tipo de evento. Cada alerta de video se convierte automaticamente en un incidente del CAD, se ubica en el mapa GIS y asigna la unidad de respuesta mas cercana. Tiempo promedio de despacho: menos de 90 segundos.'
                : 'KabatOne K-Video is the VMS integrated into a unified public safety operational platform. Deployed across 40+ cities protecting 73 million citizens, K-Video manages networks of thousands of cameras from multiple manufacturers — municipal, public transit, police, and privately shared — in one interface with search by zone, date, and event type. Every video alert automatically becomes a CAD incident, is located on the GIS map, and assigns the nearest response unit. Average dispatch time: under 90 seconds.'}
            </p>
          </div>
        </section>

        {/* -- SECTION: Key Challenges -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '28px',
            }}>
              {es
                ? 'Desafios del Video en Centros de Mando Municipales'
                : 'Video Challenges in Municipal Command Centers'}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {challengeCards.map((card, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                  borderRadius: '12px', padding: '28px',
                }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '8px',
                    background: `color-mix(in srgb, ${ACCENT} 14%, transparent)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '14px', fontSize: '16px',
                  }}>
                    {card.icon}
                  </div>
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '19px', color: 'var(--white)', marginBottom: '10px',
                  }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7 }}>
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- SECTION: 5-Step Unified Workflow -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0', background: `color-mix(in srgb, ${ACCENT} 3%, transparent)` }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? '¿Como Funciona un VMS Unificado para Seguridad Publica?'
                : 'How a Unified VMS Works for Public Safety'}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {workflowSteps.map((step, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '24px', alignItems: 'flex-start',
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                  borderLeft: `3px solid ${ACCENT}`,
                  borderRadius: '10px', padding: '24px 28px',
                }}>
                  <div style={{
                    fontFamily: 'DM Mono, monospace', fontWeight: 700,
                    fontSize: '13px', color: ACCENT, letterSpacing: '0.05em',
                    minWidth: '28px', paddingTop: '2px',
                  }}>
                    {step.n}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                      fontSize: '18px', color: ACCENT, marginBottom: '8px',
                    }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '15px', color: 'var(--dim)', lineHeight: 1.7 }}>
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Product links */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '40px' }}>
              {[
                { href: '/k-video', label: 'K-Video', color: ACCENT, desc: es ? 'Gestion de video' : 'Video management' },
                { href: '/k-dispatch', label: 'K-Dispatch', color: '#f59e0b', desc: es ? 'Despacho CAD' : 'CAD dispatch' },
                { href: '/k-safety', label: 'K-Safety', color: '#3b82f6', desc: es ? 'Conciencia situacional' : 'Situational awareness' },
              ].map((product, i) => (
                <Link key={i} href={product.href} style={{
                  background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)',
                  borderTop: `3px solid ${product.color}`,
                  borderRadius: '10px', padding: '20px 16px',
                  textDecoration: 'none', display: 'block',
                }}>
                  <div style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '17px', color: 'var(--white)', marginBottom: '6px',
                  }}>
                    {product.label}
                  </div>
                  <div style={{
                    fontFamily: 'DM Mono, monospace', fontSize: '10px',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'var(--muted)',
                  }}>
                    {product.desc}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* -- SECTION: Comparison Table -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? 'VMS Standalone vs Plataforma VMS Unificada para Seguridad Publica'
                : 'Standalone VMS vs Unified VMS Platform for Public Safety'}
            </h2>

            <div style={{
              border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden',
            }}>
              <div style={{
                display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr',
                background: 'rgba(255,255,255,0.04)',
                borderBottom: '1px solid var(--border)',
                padding: '14px 20px',
              }}>
                {[
                  es ? 'Capacidad' : 'Capability',
                  es ? 'VMS Standalone' : 'Standalone VMS',
                  es ? 'Plataforma Unificada' : 'Unified Platform',
                ].map((h, i) => (
                  <span key={i} style={{
                    fontFamily: 'DM Mono, monospace', fontSize: '10px',
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: i === 0 ? 'var(--muted)' : i === 1 ? '#ef4444' : '#22c55e',
                  }}>
                    {h}
                  </span>
                ))}
              </div>

              {comparisonRows.map((row, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr',
                  padding: '16px 20px',
                  borderBottom: i < comparisonRows.length - 1 ? '1px solid var(--border)' : undefined,
                  background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                }}>
                  <span style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600,
                    fontSize: '15px', color: 'var(--white)',
                  }}>
                    {row.feature}
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.55, paddingRight: '12px' }}>
                    {row.standalone}
                  </span>
                  <span style={{ fontSize: '13px', color: '#86efac', lineHeight: 1.55 }}>
                    {row.unified}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- SECTION: Internal Resource Links -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '48px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', fontSize: '12px' }}>
                <span style={{
                  fontFamily: 'DM Mono, monospace', fontWeight: 600,
                  color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase',
                }}>
                  {es ? 'Recursos relacionados:' : 'Related resources:'}
                </span>
                {[
                  { href: '/resources/what-is-video-management-software', label: es ? '¿Que es VMS?' : 'What Is VMS?' },
                  { href: '/resources/what-is-video-analytics', label: es ? '¿Que es Video Analytics?' : 'What Is Video Analytics?' },
                  { href: '/resources/what-is-a-real-time-crime-center', label: es ? 'Centro de Crimen en Tiempo Real' : 'What Is an RTCC?' },
                  { href: '/resources/what-is-a-command-center', label: es ? '¿Que es un Centro de Mando?' : 'What Is a Command Center?' },
                  { href: '/resources/what-is-sensor-fusion', label: es ? '¿Que es Fusion de Sensores?' : 'What Is Sensor Fusion?' },
                  { href: '/integrations/lpr', label: es ? 'Integracion LPR' : 'LPR Integration' },
                ].map((link) => (
                  <Link key={link.href} href={link.href} style={{
                    color: ACCENT, textDecoration: 'none',
                    borderBottom: `1px solid ${ACCENT}40`,
                  }}>
                    {link.label}
                  </Link>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', fontSize: '12px' }}>
                <span style={{
                  fontFamily: 'DM Mono, monospace', fontWeight: 600,
                  color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase',
                }}>
                  {es ? 'Comparaciones:' : 'Comparisons:'}
                </span>
                {[
                  { href: '/vs/genetec', label: 'KabatOne vs Genetec' },
                  { href: '/vs/milestone', label: 'KabatOne vs Milestone' },
                  { href: '/vs/avigilon', label: 'KabatOne vs Avigilon' },
                  { href: '/vs/verkada', label: 'KabatOne vs Verkada' },
                ].map((link) => (
                  <Link key={link.href} href={link.href} style={{
                    color: ACCENT, textDecoration: 'none',
                    borderBottom: `1px solid ${ACCENT}40`,
                  }}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* -- FAQ SECTION -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '16px',
            }}>
              {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </p>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? 'Preguntas Sobre VMS para Seguridad Publica'
                : 'Questions About VMS for Public Safety'}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                  borderRadius: '12px', padding: '24px 28px',
                }}>
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '18px', color: 'var(--white)', marginBottom: '10px',
                  }}>
                    {faq.question}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7 }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- RELATED ARTICLES -- */}
        <section style={{ padding: '64px 0', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '24px',
            }}>
              {es ? 'Articulos Relacionados' : 'Related Articles'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                {
                  href: '/resources/what-is-video-management-software',
                  en: 'What Is Video Management Software (VMS)?',
                  es: '¿Que es el software de gestion de video (VMS)?',
                },
                {
                  href: '/resources/what-is-video-analytics',
                  en: 'What Is Video Analytics?',
                  es: '¿Que es Video Analytics?',
                },
                {
                  href: '/resources/what-is-a-real-time-crime-center',
                  en: 'What Is a Real-Time Crime Center?',
                  es: '¿Que es un Centro de Crimen en Tiempo Real?',
                },
                {
                  href: '/resources/what-is-a-command-center',
                  en: 'What Is a Command Center?',
                  es: '¿Que es un Centro de Mando?',
                },
                {
                  href: '/resources/best-public-safety-software',
                  en: 'Best Public Safety Software Platforms',
                  es: 'Las Mejores Plataformas de Seguridad Publica',
                },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '16px 20px', borderRadius: '8px',
                  border: '1px solid var(--border)', textDecoration: 'none',
                  color: 'var(--dim)', fontSize: '15px',
                }}>
                  <span>{es ? link.es : link.en}</span>
                  <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* -- CTA -- */}
        <CTASection
          es={es}
          h2={es ? 'Unifica el Video de Tu Centro de Mando' : 'Unify Your Command Center Video'}
          subtitle={es
            ? 'Conoce como KabatOne K-Video integra miles de camaras de multiples fabricantes con despacho CAD, GIS operativo y analitica AI en una sola plataforma para centros de mando municipales.'
            : 'See how KabatOne K-Video integrates thousands of cameras from multiple manufacturers with CAD dispatch, operational GIS, and AI analytics in one platform for municipal command centers.'}
          cta1={es ? 'Solicita una Demo' : 'Book a Demo'}
          cta2={es ? 'Contactar Ventas' : 'Contact Sales'}
        />

        <Footer es={es} />

        <style>{`
          @media (max-width: 768px) {
            div[style*="grid-template-columns: 1fr 1fr"],
            div[style*="grid-template-columns: repeat(3"],
            div[style*="grid-template-columns: 1.2fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </>
  )
}
