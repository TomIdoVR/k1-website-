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
  return generatePageMetadata('ng911Software', locale)
}

export default async function Ng911SoftwarePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#22d3ee'

  const faqs = es
    ? [
        {
          question: '¿Qué es NG911 (Next Generation 911)?',
          answer:
            'NG911 (Next Generation 911 o Próxima Generación del 911) es la modernización de la infraestructura de emergencias del sistema 9-1-1 heredado — basado en red telefónica conmutada (PSTN) — a una red de protocolo de internet (IP) llamada ESInet (Emergency Services IP Network). NG911 permite que los PSAPs (centros de respuesta a emergencias) reciban no solo llamadas de voz, sino también textos al 911, video en tiempo real, datos de telemática vehicular, imágenes y sensores. Fue definido por NENA (National Emergency Number Association) con la arquitectura i3 como estándar de referencia.',
        },
        {
          question: '¿Cuál es la diferencia entre E911 y NG911?',
          answer:
            'E911 (Enhanced 911), introducido en los años 90, añadió la ubicación automática del llamante (ALI — Automatic Location Identification) y el número de devolución de llamada (ANI) al sistema de voz analógico básico. NG911 va mucho más lejos: reemplaza la red analógica por IP, habilita texto al 911 (texto-a-911), video, transferencia de datos entre PSAPs, ubicación precisa para dispositivos móviles (HTTPS-based location), y permite que datos de sensores, cámaras y sistemas CAD se integren en tiempo real. E911 mejoró la voz; NG911 transforma el centro de respuesta a emergencias en una plataforma multimedia.',
        },
        {
          question: '¿Cómo funciona el software NG911?',
          answer:
            'El software NG911 opera sobre la ESInet — una red IP dedicada que conecta PSAPs, proveedores de servicios de origen (OSP) y sistemas externos. Cuando un ciudadano llama, envía texto o video, la solicitud atraviesa la ESInet a través de un ESRP (Emergency Services Routing Proxy) que usa datos GIS para enrutar al PSAP geográficamente correcto. En el PSAP, un sistema de gestión de llamadas compatible con NG911 (NGCS) recibe la solicitud, extrae la ubicación y los metadatos adjuntos, y los pone a disposición del despachador — y del sistema CAD — de forma inmediata. Los datos de llamada también pueden transferirse entre PSAPs sin pérdida de información.',
        },
        {
          question: '¿Qué es el texto al 911 y forma parte de NG911?',
          answer:
            'Sí. El texto al 911 (Text-to-911) es una de las capacidades fundamentales de NG911: permite que las personas sordas, con discapacidad auditiva, o en situaciones donde no pueden hablar (violencia doméstica, por ejemplo) envíen mensajes de texto al PSAP. La FCC exigió a los proveedores de telefonía admitir texto al 911 como servicio obligatorio. Con NG911, el texto llega directamente al despachador y puede adjuntar la ubicación del llamante automáticamente. Algunos PSAPs NG911 también admiten mensajes multimedia (MMS) e incluso video en vivo.',
        },
        {
          question: '¿Qué significan la arquitectura NENA i3 y ESInet para los PSAPs?',
          answer:
            'NENA i3 es el estándar de arquitectura de referencia de NG911. Define los componentes funcionales (ESRP, ECRF para resolución de ubicación, LPF para política de enrutamiento, BCF para control de borde, NGCS para gestión de llamadas) y cómo interoperan entre sí sobre la ESInet. Para un PSAP, esto significa que puede recibir llamadas, textos y video de cualquier proveedor que cumpla el estándar, transferir incidentes a PSAPs vecinos en segundos, y conectar su sistema CAD directamente al flujo de datos de llamada — sin procesar manualmente información de despacho. La arquitectura también ofrece redundancia geográfica automática: si un PSAP falla, las llamadas se enrutan a otro.',
        },
        {
          question: '¿Cuándo estará completamente desplegado NG911 en Estados Unidos?',
          answer:
            'El despliegue es progresivo y varía por estado. A 2026, más del 60% de los PSAPs en EE.UU. han migrado o están en proceso de migración a redes ESInet estatales o regionales. Estados como Texas, Colorado, Minnesota y California lideran el despliegue. La FCC y el Departamento de Comercio (NTIA) financian la transición a través del NG911 Grant Program incluido en la Ley de Infraestructura de 2021 (Infrastructure Investment and Jobs Act). El objetivo federal es una transición nacional completa a NG911 para finales de la presente década.',
        },
        {
          question: '¿Cómo se integra NG911 con el software CAD de despacho?',
          answer:
            'La integración NG911-CAD es el punto donde el valor de NG911 se convierte en velocidad operativa real. Cuando llega una llamada NG911, los datos de ubicación precisa, tipo de incidente, metadatos adjuntos y video se envían automáticamente al sistema CAD — eliminando la introducción manual de información. El despachador ve la dirección validada por GIS, el tipo de solicitud y el contexto del llamante en el mismo flujo. Sistemas CAD modernos como K-Dispatch están diseñados para consumir el feed de datos NG911 directamente y usar esa información para la recomendación automática de unidades, reduciendo el tiempo entre la llamada y el despacho.',
        },
      ]
    : [
        {
          question: 'What is NG911 (Next Generation 911)?',
          answer:
            'NG911 (Next Generation 911) is the modernization of the legacy 9-1-1 infrastructure — built on the Public Switched Telephone Network (PSTN) — to an IP-based network called the ESInet (Emergency Services IP Network). NG911 enables PSAPs (Public Safety Answering Points) to receive not just voice calls, but also text-to-911, real-time video, vehicle telematics data, images, and sensor feeds. The architecture was defined by NENA (National Emergency Number Association) under the i3 standard as the reference framework for Next Generation 911.',
        },
        {
          question: 'What is the difference between E911 and NG911?',
          answer:
            'E911 (Enhanced 911), introduced in the 1990s, added the caller\'s automatic location (ALI — Automatic Location Identification) and callback number (ANI) to the basic analog voice system. NG911 goes much further: it replaces the analog network with IP, enables text-to-911, video, PSAP-to-PSAP data transfer, precise mobile-device location (HTTPS-based), and allows sensor data, cameras, and CAD systems to integrate in real time. E911 improved the voice call; NG911 transforms the PSAP into a multimedia emergency communications platform.',
        },
        {
          question: 'How does NG911 software work?',
          answer:
            'NG911 software operates over the ESInet — a dedicated IP network connecting PSAPs, Originating Service Providers (OSP), and external systems. When a citizen calls, texts, or sends video, the request traverses the ESInet through an ESRP (Emergency Services Routing Proxy), which uses GIS data to route to the geographically correct PSAP. At the PSAP, an NG911-compliant call management system (NGCS) receives the request, extracts the caller location and attached metadata, and makes it immediately available to the dispatcher — and to the CAD system. Call data can also be transferred between PSAPs without loss of context.',
        },
        {
          question: 'What is text-to-911 and is it part of NG911?',
          answer:
            'Yes. Text-to-911 is one of the core NG911 capabilities: it lets people who are deaf, hard of hearing, or in situations where speaking is unsafe (domestic violence, for example) send SMS messages directly to the PSAP. The FCC mandated that all carriers support text-to-911. With NG911, the text arrives directly at the dispatcher\'s workstation and can automatically attach the caller\'s location. Some NG911 PSAPs also support multimedia messages (MMS) and live video from the caller\'s smartphone.',
        },
        {
          question: 'What do NENA i3 architecture and ESInet mean for PSAPs?',
          answer:
            'NENA i3 is the NG911 reference architecture standard. It defines the functional components (ESRP, ECRF for location resolution, LPF for routing policy, BCF for border control, NGCS for call management) and how they interoperate over the ESInet. For a PSAP, this means it can receive calls, texts, and video from any i3-compliant provider, transfer incidents to neighboring PSAPs in seconds, and connect its CAD system directly to the call-data stream — without manually entering dispatch information. The architecture also provides automatic geographic redundancy: if one PSAP fails, calls reroute to another.',
        },
        {
          question: 'When will NG911 be fully deployed in the United States?',
          answer:
            'Deployment is progressive and varies by state. As of 2026, more than 60% of PSAPs in the US have migrated or are in active migration to state or regional ESInet networks. States such as Texas, Colorado, Minnesota, and California lead deployment. The FCC and the Department of Commerce (NTIA) fund the transition through the NG911 Grant Program included in the 2021 Infrastructure Investment and Jobs Act. The federal goal is a nationwide NG911 transition before the end of the current decade.',
        },
        {
          question: 'How does NG911 integrate with CAD dispatch software?',
          answer:
            'NG911-to-CAD integration is where the value of NG911 becomes real operational speed. When an NG911 call arrives, the GIS-validated caller location, incident type, attached metadata, and video are automatically pushed to the CAD system — eliminating manual data entry. The dispatcher sees the verified address, request type, and caller context in the same workflow. Modern CAD systems like K-Dispatch are designed to consume the NG911 data feed directly and use that information for automated unit recommendation, reducing time from call receipt to dispatch.',
        },
      ]

  const faqSchema = faqPageSchema(faqs)
  const artSchema = articleSchema(
    es
      ? 'Software NG911: Cómo Funciona el Sistema Next Generation 911'
      : 'NG911 Software: How Next Generation 911 Systems Work',
    es
      ? 'Guía sobre NG911 (Next Generation 911): cómo funciona la arquitectura ESInet/i3, diferencia con E911, texto al 911, video, integración CAD y estado del despliegue en EE.UU.'
      : 'Guide to NG911 (Next Generation 911): how ESInet/i3 architecture works, difference from E911, text-to-911, video, CAD integration, and US deployment status.',
    es
      ? 'https://kabatone.com/es/resources/ng911-software'
      : 'https://kabatone.com/resources/ng911-software',
    '2026-07-07'
  )
  const bcSchema = breadcrumbSchema([
    { name: 'Home', url: 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: 'https://kabatone.com/resources' },
    {
      name: es ? 'Software NG911' : 'NG911 Software',
      url: es
        ? 'https://kabatone.com/es/resources/ng911-software'
        : 'https://kabatone.com/resources/ng911-software',
    },
  ])

  const capabilities = es
    ? [
        { icon: '💬', title: 'Texto al 911', desc: 'Mensajes SMS directos al PSAP — esencial para personas sordas, con dificultad auditiva o en situaciones de riesgo en que no pueden hablar.' },
        { icon: '📹', title: 'Video en tiempo real', desc: 'El ciudadano puede compartir video desde su teléfono al PSAP durante la emergencia, aportando contexto visual inmediato al despachador.' },
        { icon: '📍', title: 'Ubicación de alta precisión', desc: 'Localización HTTPS/IP con precisión a nivel de piso y apartamento — frente al error de cientos de metros del ALI heredado.' },
        { icon: '🚗', title: 'Datos de telemática vehicular', desc: 'Integración de datos de colisión, airbag y velocidad desde sistemas eCall/ERA-GLONASS directamente al PSAP en accidentes.' },
        { icon: '🔀', title: 'Transferencia PSAP-a-PSAP', desc: 'Incidentes completos — llamada, ubicación, video, historial — se transfieren entre centros de respuesta sin pérdida de información.' },
        { icon: '📊', title: 'Datos al CAD en tiempo real', desc: 'Ubicación validada por GIS, tipo de incidente y metadatos se envían automáticamente al sistema CAD, eliminando la captura manual.' },
      ]
    : [
        { icon: '💬', title: 'Text-to-911', desc: 'Direct SMS messages to the PSAP — essential for deaf, hard-of-hearing, or people in situations where speaking is unsafe.' },
        { icon: '📹', title: 'Real-time video', desc: 'Citizens can share live video from their phone to the PSAP during an emergency, giving the dispatcher immediate visual context.' },
        { icon: '📍', title: 'High-precision location', desc: 'HTTPS/IP-based location with floor-and-apartment accuracy — vs. the hundreds-of-meter error of legacy ALI.' },
        { icon: '🚗', title: 'Vehicle telematics data', desc: 'Collision, airbag, and speed data from eCall/ERA-GLONASS systems pushed directly to the PSAP in traffic accidents.' },
        { icon: '🔀', title: 'PSAP-to-PSAP transfer', desc: 'Full incidents — call, location, video, history — transfer between PSAPs without loss of context or data.' },
        { icon: '📊', title: 'Real-time data to CAD', desc: 'GIS-validated location, incident type, and metadata are automatically pushed to the CAD system, eliminating manual entry.' },
      ]

  const legacyVsNg = es
    ? {
        headers: ['Característica', '9-1-1 Heredado (PSTN)', 'NG911 (ESInet / IP)'],
        rows: [
          ['Tipo de red', 'Red telefónica conmutada (PSTN)', 'Red IP dedicada (ESInet)'],
          ['Canales de contacto', 'Solo voz', 'Voz, texto, video, datos'],
          ['Precisión de ubicación', 'Nivel de celda / torre (± 300 m)', 'Nivel de piso y apartamento (± 5 m)'],
          ['Transferencia entre PSAPs', 'Solo transferencia de llamada de voz', 'Incidente completo con contexto'],
          ['Datos al CAD', 'Entrada manual del despachador', 'Feed automático de datos estructurados'],
          ['Redundancia', 'Limitada — fallo de nodo crítico', 'Enrutamiento dinámico automático'],
          ['Multimedia', 'No', 'Video, imagen, telemática, sensores'],
        ],
      }
    : {
        headers: ['Feature', 'Legacy 9-1-1 (PSTN)', 'NG911 (ESInet / IP)'],
        rows: [
          ['Network type', 'Public Switched Telephone Network', 'Dedicated IP network (ESInet)'],
          ['Contact channels', 'Voice only', 'Voice, text, video, data'],
          ['Location accuracy', 'Cell tower level (± 300 m)', 'Floor & apartment level (± 5 m)'],
          ['PSAP-to-PSAP transfer', 'Voice call transfer only', 'Full incident with context'],
          ['Data to CAD', 'Dispatcher manual entry', 'Automatic structured data feed'],
          ['Redundancy', 'Limited — single node failure risk', 'Automatic dynamic rerouting'],
          ['Multimedia', 'No', 'Video, image, telematics, sensors'],
        ],
      }

  const sectionH2: React.CSSProperties = { fontFamily: "'Barlow Condensed', sans-serif", fontSize: '28px', fontWeight: 700, color: '#f0f4f8', marginBottom: '16px' }
  const para: React.CSSProperties = { fontSize: '15px', color: '#94a3b8', lineHeight: 1.8, marginBottom: '16px' }

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
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: ACCENT, background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)', borderRadius: '4px', padding: '3px 10px' }}>
                {es ? 'Guía de Referencia' : 'Reference Guide'}
              </span>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#64748b', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', padding: '3px 10px' }}>
                K-Dispatch · K-Safety
              </span>
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '.01em', color: '#f0f4f8', marginBottom: '20px' }}>
              {es
                ? 'Software NG911: Cómo Funciona el Sistema Next Generation 911'
                : 'NG911 Software: How Next Generation 911 Systems Work'}
            </h1>
            <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.7, maxWidth: '720px', marginBottom: '32px' }}>
              {es
                ? 'NG911 (Next Generation 911) moderniza la infraestructura de emergencias del sistema 9-1-1 heredado a una red IP — habilitando texto, video y datos en tiempo real desde el ciudadano hasta el despachador y el sistema CAD. Esta guía explica cómo funciona la arquitectura ESInet/i3, en qué se diferencia de E911 y qué necesitan los centros PSAP para adoptar NG911.'
                : 'NG911 (Next Generation 911) modernizes the legacy 9-1-1 infrastructure to an IP network — enabling text, video, and real-time data from the citizen to the dispatcher and CAD system. This guide explains how the ESInet/i3 architecture works, how it differs from E911, and what PSAPs need to adopt NG911.'}
            </p>
            <div style={{ fontSize: '12px', color: '#475569', lineHeight: 2 }}>
              <span style={{ marginRight: '8px', fontWeight: 600, color: '#64748b' }}>{es ? 'Producto:' : 'Product:'}</span>
              <Link href="/k-dispatch" style={{ color: ACCENT, textDecoration: 'none', marginRight: '14px' }}>K-Dispatch</Link>
              <Link href="/k-safety" style={{ color: ACCENT, textDecoration: 'none' }}>K-Safety</Link>
              <br />
              <span style={{ marginRight: '8px', fontWeight: 600, color: '#64748b' }}>{es ? 'Recursos:' : 'Resources:'}</span>
              <Link href="/resources/what-is-cad-dispatch-software" style={{ color: '#94a3b8', textDecoration: 'none', marginRight: '14px' }}>{es ? 'Software CAD' : 'CAD Software'}</Link>
              <Link href="/resources/best-cad-dispatch-software" style={{ color: '#94a3b8', textDecoration: 'none', marginRight: '14px' }}>{es ? 'Mejor CAD' : 'Best CAD'}</Link>
              <Link href="/resources/911-call-center-software-guide" style={{ color: '#94a3b8', textDecoration: 'none' }}>{es ? 'Centro de Llamadas 911' : '911 Call Center Guide'}</Link>
            </div>
          </div>
        </section>

        {/* ── Definition ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 0' }}>
          <h2 style={sectionH2}>{es ? '¿Qué es NG911?' : 'What is NG911?'}</h2>
          <div style={{ borderLeft: `3px solid ${ACCENT}`, background: 'rgba(34,211,238,0.06)', borderRadius: '0 8px 8px 0', padding: '20px 24px', marginBottom: '28px' }}>
            <p style={{ fontSize: '16px', color: '#e2e8f0', lineHeight: 1.75, margin: 0 }}>
              {es ? (
                <><strong style={{ color: '#f0f4f8' }}>NG911 (Next Generation 911) es software que traslada el sistema de emergencias 9-1-1 de la red telefónica analógica (PSTN) a una arquitectura IP moderna (ESInet), permitiendo que el PSAP reciba texto, video, ubicación de alta precisión y datos de sensores además de voz.</strong> Sigue el estándar i3 de NENA. Su valor operativo real aparece cuando esos datos multimedia llegan al despacho: K-Dispatch de KabatOne consume flujos NG911/ESInet y los convierte en incidentes accionables en el mapa CAD, uniendo la llamada con las unidades en campo y las cámaras del centro de mando.</>
              ) : (
                <><strong style={{ color: '#f0f4f8' }}>NG911 (Next Generation 911) is software that moves the 9-1-1 emergency system off the analog telephone network (PSTN) and onto a modern IP architecture (ESInet), letting the PSAP receive text, video, high-precision location, and sensor data alongside voice.</strong> It follows NENA&apos;s i3 standard. Its real operational value shows up at dispatch: KabatOne&apos;s K-Dispatch consumes NG911/ESInet feeds and turns them into actionable incidents on the CAD map, tying the call to field units and command-center cameras.</>
              )}
            </p>
          </div>
          <p style={para}>
            {es
              ? 'NG911 — Next Generation 911 — es la transición del sistema de emergencias 9-1-1 de una red analógica de telefonía conmutada (PSTN) a una arquitectura IP moderna: la ESInet (Emergency Services IP Network). Esta migración transforma el PSAP (Public Safety Answering Point) de un receptor pasivo de llamadas de voz en un centro multimedia de datos de emergencia capaz de procesar texto, video, ubicación de alta precisión, telemática vehicular y datos de sensores.'
              : 'NG911 — Next Generation 911 — is the transition of the 9-1-1 emergency system from an analog switched-telephone network (PSTN) to a modern IP architecture: the ESInet (Emergency Services IP Network). This migration transforms the PSAP (Public Safety Answering Point) from a passive voice-call receiver into a multimedia emergency data center capable of processing text, video, high-precision location, vehicle telematics, and sensor data.'}
          </p>
          <p style={para}>
            {es
              ? 'El estándar de referencia fue definido por NENA (National Emergency Number Association) con la arquitectura i3. A 2026, más del 60% de los PSAPs en EE.UU. han migrado o están en migración activa. La Ley de Infraestructura de 2021 destina fondos federales específicos para acelerar la transición. En América Latina, sistemas equivalentes de modernización del 9-1-1 siguen marcos similares de red IP para centros de despacho.'
              : 'The reference standard was defined by NENA (National Emergency Number Association) under the i3 architecture. As of 2026, more than 60% of PSAPs in the US have migrated or are in active migration. The 2021 Infrastructure Investment and Jobs Act allocates specific federal funds to accelerate the transition. In Latin America, equivalent 9-1-1 modernization systems follow similar IP-network frameworks for dispatch centers.'}
          </p>
        </section>

        {/* ── Legacy vs NG911 table ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <h2 style={sectionH2}>{es ? '9-1-1 heredado vs. NG911: comparativa' : 'Legacy 9-1-1 vs. NG911: comparison'}</h2>
          <div style={{ overflowX: 'auto', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', marginTop: '8px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', minWidth: '540px' }}>
              <thead>
                <tr>
                  {legacyVsNg.headers.map((h, i) => (
                    <th key={i} style={{ textAlign: 'left', padding: '12px 16px', background: 'rgba(34,211,238,0.06)', color: '#f0f4f8', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {legacyVsNg.rows.map((r, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    {r.map((c, j) => (
                      <td key={j} style={{ padding: '11px 16px', color: j === 0 ? '#cbd5e1' : '#94a3b8', fontWeight: j === 0 ? 600 : 400 }}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── How it works ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <h2 style={sectionH2}>{es ? 'Cómo funciona la arquitectura ESInet / NENA i3' : 'How the ESInet / NENA i3 architecture works'}</h2>
          <p style={para}>
            {es
              ? 'Cuando un ciudadano contacta al 911 a través de NG911 — por voz, texto o video — la solicitud entra a la ESInet a través del proveedor de origen (OSP) y llega a un ESRP (Emergency Services Routing Proxy). El ESRP consulta el ECRF (Emergency Call Routing Function) con la ubicación del llamante — proporcionada vía PIDF-LO (Presence Information Data Format Location Object) — y determina a qué PSAP debe enrutarse la solicitud según el polígono GIS correspondiente.'
              : 'When a citizen contacts 911 via NG911 — by voice, text, or video — the request enters the ESInet through the Originating Service Provider (OSP) and reaches an ESRP (Emergency Services Routing Proxy). The ESRP queries the ECRF (Emergency Call Routing Function) with the caller location — provided via PIDF-LO (Presence Information Data Format Location Object) — and determines which PSAP should receive the request based on the corresponding GIS polygon.'}
          </p>
          <p style={para}>
            {es
              ? 'En el PSAP, el NGCS (Next Generation Call System) recibe la solicitud, entrega los datos estructurados al despachador y los expone al sistema CAD a través de una interfaz estándar. El BCF (Border Control Function) protege la red de ataques y el LPF (Location Policy Function) aplica las reglas de privacidad de ubicación. Si el PSAP debe transferir el incidente a otro centro, toda la información — video, ubicación, historial de llamada — viaja junto con la transferencia.'
              : 'At the PSAP, the NGCS (Next Generation Call System) receives the request, delivers the structured data to the dispatcher, and exposes it to the CAD system via a standard interface. The BCF (Border Control Function) protects the network from attacks, and the LPF (Location Policy Function) applies location privacy rules. If the PSAP must transfer the incident to another center, all context — video, location, call history — travels with the transfer.'}
          </p>
        </section>

        {/* ── Capabilities grid ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <h2 style={sectionH2}>{es ? 'Capacidades clave de NG911' : 'Key NG911 capabilities'}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '14px', marginTop: '8px' }}>
            {capabilities.map((c, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '18px' }}>
                <div style={{ fontSize: '22px', marginBottom: '8px' }}>{c.icon}</div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>{c.title}</div>
                <div style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── NG911 + CAD integration ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 0' }}>
          <h2 style={sectionH2}>{es ? 'NG911 y el sistema CAD: dónde se convierte en velocidad operativa' : 'NG911 and CAD: where it becomes operational speed'}</h2>
          <p style={para}>
            {es
              ? 'La integración entre NG911 y el sistema CAD es el punto donde la modernización de la infraestructura se convierte en segundos reales de reducción de tiempo de respuesta. En un PSAP con NG911, cuando llega una llamada, la ubicación validada por GIS, el tipo de incidente y los datos adjuntos se entregan automáticamente al CAD — el despachador no tiene que preguntar la dirección ni teclearla: ya está ahí, verificada.'
              : 'The integration between NG911 and the CAD system is the point where infrastructure modernization converts to real seconds of response time reduction. In an NG911-enabled PSAP, when a call arrives, the GIS-validated location, incident type, and attached data are automatically delivered to CAD — the dispatcher does not need to ask for the address or type it: it is already there, verified.'}
          </p>
          <p style={para}>
            {es
              ? 'Sistemas CAD modernos como '
              : 'Modern CAD systems like '}
            <Link href="/k-dispatch" style={{ color: ACCENT, textDecoration: 'none' }}>K-Dispatch</Link>
            {es
              ? ' están diseñados para consumir el feed de datos NG911 directamente — incluyendo texto al 911 e imágenes adjuntas — y usar esa información para la recomendación automática de unidades, la geolocalización del incidente y la apertura del expediente del evento. La combinación NG911 + CAD integrado reduce el tiempo entre la recepción de la llamada y el despacho efectivo de unidades. Para explorar qué buscar en un CAD moderno, consulta la guía de '
              : ' is designed to consume the NG911 data feed directly — including text-to-911 and attached images — and use that information for automated unit recommendation, incident geolocation, and event-record creation. The NG911 + integrated CAD combination reduces time from call receipt to effective unit dispatch. To explore what to look for in a modern CAD, see the '}
            <Link href="/resources/best-cad-dispatch-software" style={{ color: ACCENT, textDecoration: 'none' }}>{es ? 'mejor software CAD de despacho' : 'best CAD dispatch software guide'}</Link>
            {es ? '.' : '.'}
          </p>
          <p style={{ ...para, marginBottom: 0 }}>
            {es ? 'Ver cómo funciona el ' : 'See how '}
            <Link href="/k-dispatch" style={{ color: ACCENT, textDecoration: 'none' }}>{es ? 'software CAD de despacho de K-Dispatch' : "K-Dispatch's CAD dispatch software"}</Link>
            {es
              ? ' —despacho asistido por computadora (computer-aided dispatch) con IA— para centros 911, bomberos y EMS.'
              : ' — AI-powered computer-aided dispatch for 911, fire, and EMS centers.'}
          </p>
        </section>

        {/* ── FAQ ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 24px 0' }}>
          <h2 style={sectionH2}>{es ? 'Preguntas frecuentes sobre NG911' : 'Frequently asked questions about NG911'}</h2>
          <div style={{ marginTop: '8px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '18px 0' }}>
                <div style={{ fontSize: '16px', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px' }}>{faq.question}</div>
                <div style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.7 }}>{faq.answer}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Related ── */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 24px 8px' }}>
          <h2 style={{ ...sectionH2, fontSize: '20px' }}>{es ? 'Relacionado' : 'Related'}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '6px' }}>
            {[
              { href: '/resources/what-is-cad-dispatch-software', label: es ? 'Software CAD de Despacho' : 'CAD Dispatch Software' },
              { href: '/resources/best-cad-dispatch-software', label: es ? 'Mejor Software CAD' : 'Best CAD Dispatch Software' },
              { href: '/resources/911-call-center-software-guide', label: es ? 'Software para Centro de Llamadas 911' : '911 Call Center Software' },
              { href: '/resources/what-is-emergency-dispatch-software', label: es ? 'Software de Despacho de Emergencias' : 'Emergency Dispatch Software' },
              { href: '/vs/carbyne', label: es ? 'KabatOne vs Carbyne' : 'KabatOne vs Carbyne' },
              { href: '/vs/prepared911', label: es ? 'KabatOne vs Prepared 911' : 'KabatOne vs Prepared 911' },
              { href: '/k-dispatch', label: es ? 'K-Dispatch — CAD para Emergencias' : 'K-Dispatch — Emergency CAD' },
            ].map((r) => (
              <Link key={r.href} href={r.href} style={{ fontSize: '12px', color: '#64748b', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '6px 12px', textDecoration: 'none' }}>
                {r.label}
              </Link>
            ))}
          </div>
        </section>

        <CTASection
          es={es}
          h2={es ? '¿Listo para un Sistema de Despacho NG911-Listo?' : 'Ready for an NG911-Ready Dispatch System?'}
          subtitle={es
            ? 'K-Dispatch está diseñado para integrarse con la infraestructura NG911: texto al 911, datos de ubicación precisos, video y feed directo al CAD. Agenda una demo.'
            : 'K-Dispatch is built to integrate with NG911 infrastructure: text-to-911, precise location data, video, and direct feed to CAD. Book a demo.'}
        />
      </main>
      <Footer es={es} />
    </>
  )
}
