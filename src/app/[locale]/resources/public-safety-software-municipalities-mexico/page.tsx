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
  return generatePageMetadata('publicSafetySoftwareMexico', locale)
}

export default async function PublicSafetySoftwareMexicoPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#f59e0b'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-municipalities-mexico/`
    : `${baseUrl}/resources/public-safety-software-municipalities-mexico/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Publica para Municipios en Mexico' : 'Public Safety Software for Municipalities in Mexico', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Que software de seguridad publica utilizan los municipios mexicanos?',
      answer: 'Los municipios mexicanos utilizan plataformas unificadas que integran despacho CAD, gestion de video (VMS), sistemas de informacion geografica (GIS) y gestion de trafico. Estas plataformas operan dentro de centros de mando C5 y deben cumplir con la Ley General del Sistema Nacional de Seguridad Publica. KabatOne es una de las plataformas con despliegues activos en mas de 40 ciudades de America Latina.',
    },
    {
      question: '¿Que es un centro de mando C5?',
      answer: 'Un C5 (Centro de Comando, Control, Comunicaciones, Computo y Calidad) es la infraestructura estandar de mando para seguridad publica en Mexico. Los centros C5 coordinan videovigilancia, despacho de emergencias, gestion de trafico y comunicaciones interinstitucionales. Ciudades como la Ciudad de Mexico, Guadalajara y Monterrey operan centros C5 a nivel estatal y metropolitano.',
    },
    {
      question: '¿Como funciona el 911 en Mexico?',
      answer: 'Mexico adopto el 911 como numero unico de emergencias en 2016. Las llamadas al 911 son recibidas por centros de atencion de emergencias y canalizadas a las agencias correspondientes: policia, bomberos o servicios medicos. El sistema requiere software CAD compatible que enrute las llamadas, asigne unidades y registre cada accion en tiempo real.',
    },
    {
      question: '¿Que requisitos debe cumplir el software de seguridad publica en Mexico?',
      answer: 'El software de seguridad publica en Mexico debe integrarse con el sistema 911, ser compatible con la infraestructura C5, soportar videovigilancia a gran escala (miles de camaras), incluir despacho CAD, ofrecer gestion de trafico y permitir coordinacion multiagencia. Tambien debe cumplir con la Ley General del Sistema Nacional de Seguridad Publica.',
    },
    {
      question: '¿Pueden los municipios integrar camaras existentes con nuevas plataformas?',
      answer: 'Si. Las plataformas modernas de seguridad publica como KabatOne soportan integracion con camaras de multiples fabricantes y protocolos. Esto permite a los municipios aprovechar su infraestructura de videovigilancia existente sin reemplazar equipos, reduciendo costos y acelerando el tiempo de despliegue.',
    },
    {
      question: '¿Que es la plataforma Avalon?',
      answer: 'Avalon es la plataforma tecnologica desarrollada por KabatOne que unifica despacho CAD, gestion de video, GIS en tiempo real, gestion de trafico y video comunitario en un solo sistema operativo. Avalon opera en mas de 40 ciudades, protegiendo a mas de 73 millones de ciudadanos en America Latina, Norteamerica y Europa.',
    },
  ] : [
    {
      question: 'What public safety software do Mexican municipalities use?',
      answer: 'Mexican municipalities use unified platforms that integrate CAD dispatch, video management (VMS), geographic information systems (GIS), and traffic management. These platforms operate within C5 command centers and must comply with Mexico\'s Ley General del Sistema Nacional de Seguridad Publica. KabatOne is one such platform with active deployments across 40+ cities in Latin America.',
    },
    {
      question: 'What is a C5 command center?',
      answer: 'A C5 (Centro de Comando, Control, Comunicaciones, Computo y Calidad) is the standard command infrastructure for public safety in Mexico. C5 centers coordinate video surveillance, emergency dispatch, traffic management, and multi-agency communications. Cities like Mexico City, Guadalajara, and Monterrey operate C5 centers at state and metropolitan levels.',
    },
    {
      question: 'How does 911 work in Mexico?',
      answer: 'Mexico adopted 911 as its unified emergency number in 2016. Calls to 911 are received by emergency response centers and routed to the appropriate agencies: police, fire, or medical services. The system requires compatible CAD software that routes calls, assigns units, and logs every action in real time.',
    },
    {
      question: 'What requirements must public safety software meet in Mexico?',
      answer: 'Public safety software in Mexico must integrate with the 911 system, be compatible with C5 infrastructure, support large-scale video surveillance (thousands of cameras), include CAD dispatch, offer traffic management, and enable multi-agency coordination. It must also comply with Mexico\'s Ley General del Sistema Nacional de Seguridad Publica.',
    },
    {
      question: 'Can municipalities integrate existing cameras with new platforms?',
      answer: 'Yes. Modern public safety platforms like KabatOne support integration with cameras from multiple manufacturers and protocols. This allows municipalities to leverage existing video surveillance infrastructure without replacing equipment, reducing costs and accelerating deployment timelines.',
    },
    {
      question: 'What is the Avalon platform?',
      answer: 'Avalon is the technology platform developed by KabatOne that unifies CAD dispatch, video management, real-time GIS, traffic management, and community video sharing into a single operational system. Avalon operates in 40+ cities, protecting over 73 million citizens across Latin America, North America, and Europe.',
    },
  ]

  return (
    <>
      <Nav />

      {/* JSON-LD schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema(
            es ? 'Software de Seguridad Publica para Municipios en Mexico' : 'Public Safety Software for Municipalities in Mexico',
            es ? 'Los municipios mexicanos necesitan software que integre operaciones C5, videovigilancia, despacho CAD y gestion de trafico.' : 'Mexican municipalities need software that integrates C5 operations, video surveillance, CAD dispatch, and traffic management.',
            pageUrl,
            '2026-03-19'
          ))
        }}
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
            {es ? 'Software de Seguridad Publica — Mexico' : 'Public Safety Software — Mexico'}
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
              ? 'Software de Seguridad Publica para Municipios en Mexico'
              : 'Public Safety Software for Municipalities in Mexico'}
          </h1>
          <p style={{
            fontSize: '18px', fontWeight: 300, color: 'var(--dim)',
            lineHeight: 1.75, maxWidth: '720px',
          }}>
            {es
              ? 'Los municipios mexicanos enfrentan una exigencia creciente de integrar videovigilancia, despacho de emergencias, gestion de trafico y coordinacion interinstitucional en una sola plataforma. La infraestructura C5, el sistema 911 y la Ley General del Sistema Nacional de Seguridad Publica establecen el marco tecnologico y regulatorio que define los requisitos del software de seguridad publica en Mexico.'
              : 'Mexican municipalities face growing pressure to unify video surveillance, emergency dispatch, traffic management, and multi-agency coordination into a single platform. The C5 infrastructure, the national 911 system, and the Ley General del Sistema Nacional de Seguridad Publica establish the technological and regulatory framework that defines public safety software requirements in Mexico.'}
          </p>
        </section>

        {/* -- SECTION: Why Mexican Municipalities Need Unified Public Safety Software -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es
                ? '¿Por Que los Municipios Mexicanos Necesitan Software Unificado de Seguridad Publica?'
                : 'Why Do Mexican Municipalities Need Unified Public Safety Software?'}
            </h2>

            <h3 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
              fontSize: '20px', color: ACCENT, marginBottom: '12px', marginTop: '32px',
            }}>
              {es ? 'Crecimiento urbano acelerado' : 'Accelerating Urban Growth'}
            </h3>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Mexico tiene mas de 130 millones de habitantes, y mas del 80% vive en zonas urbanas. Ciudades como la Ciudad de Mexico, Guadalajara, Monterrey, Puebla y Tijuana enfrentan desafios de seguridad publica que superan la capacidad de los sistemas fragmentados. La presion demografica obliga a los municipios a adoptar plataformas tecnologicas que escalen con el crecimiento poblacional.'
                : 'Mexico has more than 130 million inhabitants, and over 80% live in urban areas. Cities like Mexico City, Guadalajara, Monterrey, Puebla, and Tijuana face public safety challenges that exceed the capacity of fragmented systems. Demographic pressure forces municipalities to adopt technology platforms that scale with population growth.'}
            </p>

            <h3 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
              fontSize: '20px', color: ACCENT, marginBottom: '12px', marginTop: '32px',
            }}>
              {es ? 'Mandato federal para centros C5' : 'Federal Mandate for C5 Centers'}
            </h3>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'La Ley General del Sistema Nacional de Seguridad Publica establece la obligacion de los estados y municipios de contar con infraestructura tecnologica para la prevencion y atencion de emergencias. Los centros C5 (Centro de Comando, Control, Comunicaciones, Computo y Calidad) son la estructura estandar para operar estas capacidades. Un C5 integra videovigilancia, despacho, comunicaciones de radio, gestion de trafico y atencion al 911 desde un solo punto de mando.'
                : 'Mexico\'s Ley General del Sistema Nacional de Seguridad Publica mandates that states and municipalities maintain technological infrastructure for emergency prevention and response. C5 centers (Centro de Comando, Control, Comunicaciones, Computo y Calidad) are the standard structure for operating these capabilities. A C5 integrates video surveillance, dispatch, radio communications, traffic management, and 911 response from a single command point.'}
            </p>

            <h3 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
              fontSize: '20px', color: ACCENT, marginBottom: '12px', marginTop: '32px',
            }}>
              {es ? 'Sistemas heredados fragmentados' : 'Fragmented Legacy Systems'}
            </h3>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Muchos municipios operan con sistemas de videovigilancia, despacho y comunicaciones que fueron adquiridos por separado y no se comunican entre si. Esta fragmentacion genera puntos ciegos operativos: un operador puede ver un incidente en video pero no puede despachar una unidad desde la misma pantalla. Las plataformas unificadas resuelven este problema al conectar todos los subsistemas en una sola interfaz operativa.'
                : 'Many municipalities operate with video surveillance, dispatch, and communications systems that were acquired separately and do not communicate with each other. This fragmentation creates operational blind spots: an operator may see an incident on video but cannot dispatch a unit from the same screen. Unified platforms solve this problem by connecting all subsystems into a single operational interface.'}
            </p>
          </div>
        </section>

        {/* -- SECTION: Key Requirements -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es
                ? '¿Que Requisitos Debe Cumplir el Software de Seguridad Publica en Mexico?'
                : 'What Are the Key Requirements for Public Safety Software in Mexico?'}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '28px' }}>
              {(es ? [
                { title: 'Integracion con el sistema 911', text: 'Mexico adopto el 911 como numero unico de emergencias en 2016. El software debe recibir llamadas, clasificar incidentes, asignar unidades y registrar cada accion automaticamente. El despacho asistido por computadora (CAD) es el componente central de esta integracion. K-Dispatch de KabatOne esta disenado para este flujo operativo.' },
                { title: 'Compatibilidad con infraestructura C5', text: 'El software debe integrarse nativamente con la arquitectura de los centros C5: muros de video, consolas de operador, comunicaciones de radio y bases de datos de incidentes. La interoperabilidad con sistemas existentes es un requisito, no una opcion.' },
                { title: 'Videovigilancia a gran escala', text: 'Los municipios mexicanos operan redes de miles de camaras. La Ciudad de Mexico cuenta con mas de 60,000 camaras conectadas a su C5. El software debe gestionar multiples marcas, protocolos y resoluciones, con analitica de video impulsada por inteligencia artificial. K-Video de KabatOne soporta esta escala.' },
                { title: 'Despacho CAD', text: 'El despacho asistido por computadora debe automatizar la asignacion de unidades basandose en ubicacion, disponibilidad y tipo de incidente. Debe registrar tiempos de respuesta, generar reportes y alimentar indicadores de desempeno operativo.' },
                { title: 'Gestion de trafico integrada', text: 'Los centros C5 tambien coordinan el trafico vehicular. El software debe conectar semaforos, sensores de aforo, camaras de trafico y sistemas de deteccion de infracciones. K-Traffic de KabatOne integra estos componentes en la misma plataforma de seguridad publica.' },
                { title: 'Coordinacion multiagencia', text: 'La seguridad publica en Mexico involucra policia municipal, estatal y federal, bomberos, proteccion civil, servicios medicos de emergencia y otras dependencias. El software debe permitir coordinacion en tiempo real entre todas estas agencias, con protocolos claros de escalamiento y comunicacion.' },
              ] : [
                { title: '911 system integration', text: 'Mexico adopted 911 as its unified emergency number in 2016. The software must receive calls, classify incidents, assign units, and log every action automatically. Computer-aided dispatch (CAD) is the central component of this integration. KabatOne\'s K-Dispatch is designed for this operational workflow.' },
                { title: 'C5 infrastructure compatibility', text: 'The software must integrate natively with C5 center architecture: video walls, operator consoles, radio communications, and incident databases. Interoperability with existing systems is a requirement, not an option.' },
                { title: 'Video surveillance at scale', text: 'Mexican municipalities operate networks of thousands of cameras. Mexico City has over 60,000 cameras connected to its C5. The software must handle multiple brands, protocols, and resolutions, with AI-powered video analytics. KabatOne\'s K-Video supports this scale.' },
                { title: 'CAD dispatch', text: 'Computer-aided dispatch must automate unit assignment based on location, availability, and incident type. It must record response times, generate reports, and feed operational performance indicators.' },
                { title: 'Integrated traffic management', text: 'C5 centers also coordinate vehicular traffic. The software must connect traffic signals, flow sensors, traffic cameras, and violation detection systems. KabatOne\'s K-Traffic integrates these components into the same public safety platform.' },
                { title: 'Multi-agency coordination', text: 'Public safety in Mexico involves municipal, state, and federal police, fire departments, civil protection, emergency medical services, and other agencies. The software must enable real-time coordination among all of these agencies, with clear escalation and communication protocols.' },
              ]).map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                  borderLeft: `3px solid ${ACCENT}`,
                  borderRadius: '10px', padding: '24px 28px',
                }}>
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '18px', color: ACCENT, marginBottom: '8px',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '15px', color: 'var(--dim)', lineHeight: 1.7 }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- SECTION: Challenges -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es
                ? '¿Que Desafios Enfrentan los Municipios al Seleccionar Software?'
                : 'What Challenges Do Municipalities Face When Selecting Software?'}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '28px' }}>
              {(es ? [
                { title: 'Restricciones presupuestarias', text: 'Los presupuestos municipales para tecnologia de seguridad publica varian enormemente entre estados. Muchos municipios medianos carecen de los recursos para adquirir sistemas completos, lo que resulta en implementaciones parciales que no alcanzan los estandares operativos del C5.' },
                { title: 'Dependencia de proveedores', text: 'El vendor lock-in es un riesgo frecuente. Cuando un municipio adopta un sistema cerrado de un solo fabricante, queda atado a sus costos de licencia, actualizaciones y soporte. Las plataformas abiertas e interoperables reducen este riesgo.' },
                { title: 'Capacitacion y adopcion', text: 'La tecnologia solo funciona si los operadores la usan correctamente. Los centros C5 requieren capacitacion especializada para despachadores, analistas de video y coordinadores. Un software intuitivo con programas de formacion estructurados acelera la adopcion.' },
                { title: 'Interoperabilidad con infraestructura existente', text: 'Los municipios no pueden reemplazar toda su infraestructura de un dia para otro. El software de seguridad publica debe integrarse con camaras, radios, sensores y bases de datos que ya estan en operacion. La compatibilidad con multiples protocolos y fabricantes es esencial.' },
              ] : [
                { title: 'Budget constraints', text: 'Municipal budgets for public safety technology vary enormously between states. Many mid-sized municipalities lack the resources to acquire complete systems, resulting in partial deployments that fall short of C5 operational standards.' },
                { title: 'Vendor lock-in', text: 'Vendor lock-in is a frequent risk. When a municipality adopts a closed system from a single manufacturer, it becomes tied to that vendor\'s licensing costs, upgrades, and support. Open, interoperable platforms reduce this risk.' },
                { title: 'Training and adoption', text: 'Technology only works if operators use it correctly. C5 centers require specialized training for dispatchers, video analysts, and coordinators. Intuitive software with structured training programs accelerates adoption.' },
                { title: 'Interoperability with existing infrastructure', text: 'Municipalities cannot replace all their infrastructure overnight. Public safety software must integrate with cameras, radios, sensors, and databases that are already in operation. Compatibility with multiple protocols and manufacturers is essential.' },
              ]).map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                  borderRadius: '12px', padding: '28px',
                }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '8px',
                    background: `color-mix(in srgb, ${ACCENT} 14%, transparent)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '14px', fontSize: '16px', color: ACCENT,
                    fontFamily: 'DM Mono, monospace', fontWeight: 500,
                  }}>
                    {['$', '!', '?', '~'][i]}
                  </div>
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '19px', color: 'var(--white)', marginBottom: '10px',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7 }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- SECTION: How Leading Municipalities Deploy -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0', background: `color-mix(in srgb, ${ACCENT} 3%, transparent)` }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es
                ? '¿Como Despliegan Plataformas de Seguridad Publica los Municipios Lideres?'
                : 'How Do Leading Municipalities Deploy Public Safety Platforms?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Los municipios con despliegues exitosos de tecnologia de seguridad publica comparten un patron comun: adoptan plataformas unificadas que integran despacho, video, trafico y coordinacion en un solo sistema, en lugar de adquirir soluciones puntuales de multiples proveedores.'
                : 'Municipalities with successful public safety technology deployments share a common pattern: they adopt unified platforms that integrate dispatch, video, traffic, and coordination into a single system, rather than acquiring point solutions from multiple vendors.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'KabatOne opera en mas de 40 ciudades en America Latina, Norteamerica y Europa, protegiendo a mas de 73 millones de ciudadanos. La oficina de KabatOne en la Ciudad de Mexico funciona como el centro principal de desarrollo y operaciones para America Latina. La plataforma Avalon de KabatOne integra los cinco componentes criticos que requieren los centros C5 mexicanos: conciencia situacional en tiempo real con K-Safety, despacho CAD con K-Dispatch, gestion de video con K-Video, gestion de trafico con K-Traffic y video comunitario con K-Connect.'
                : 'KabatOne operates in 40+ cities across Latin America, North America, and Europe, protecting over 73 million citizens. KabatOne\'s Mexico City office serves as the primary development and operations hub for Latin America. The KabatOne Avalon platform integrates the five critical components that Mexican C5 centers require: real-time situational awareness with K-Safety, CAD dispatch with K-Dispatch, video management with K-Video, traffic management with K-Traffic, and community video sharing with K-Connect.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '32px' }}>
              {es
                ? 'El modelo de despliegue tipico incluye: evaluacion de infraestructura existente, integracion con camaras y sensores ya instalados, configuracion de flujos de trabajo CAD para el 911, capacitacion de operadores y una fase de operacion asistida antes de la entrega completa. Este enfoque reduce el riesgo de implementacion y asegura que los operadores adopten la tecnologia desde el primer dia.'
                : 'The typical deployment model includes: assessment of existing infrastructure, integration with cameras and sensors already installed, configuration of CAD workflows for 911, operator training, and an assisted operations phase before full handover. This approach reduces implementation risk and ensures operators adopt the technology from day one.'}
            </p>

            {/* Internal links to products */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
              {[
                { href: '/k-safety', label: 'K-Safety', color: '#3b82f6', desc: es ? 'Conciencia situacional' : 'Situational awareness' },
                { href: '/k-dispatch', label: 'K-Dispatch', color: '#ef4444', desc: es ? 'Despacho CAD / 911' : 'CAD dispatch / 911' },
                { href: '/k-video', label: 'K-Video', color: '#a855f7', desc: es ? 'Gestion de video' : 'Video management' },
                { href: '/k-traffic', label: 'K-Traffic', color: '#06b6d4', desc: es ? 'Gestion de trafico' : 'Traffic management' },
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
                ? 'Preguntas Sobre Software de Seguridad Publica en Mexico'
                : 'Questions About Public Safety Software in Mexico'}
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
              {es ? 'Artículos Relacionados' : 'Related Articles'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link href="/resources/what-is-a-public-safety-platform" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? '¿Qué es una plataforma de seguridad pública?' : 'What Is a Public Safety Platform?'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/resources/psim-vs-unified-platform" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'PSIM vs Plataforma Unificada' : 'PSIM vs Unified Platform'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/resources/how-c5-command-centers-work" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'Cómo funcionan los centros C5' : 'How C5 Command Centers Work'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
              <Link href="/resources/smart-city-platform-guide" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'Guía de plataformas de ciudad inteligente' : 'Smart City Platform Guide'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* -- CTA -- */}
        <CTASection
          es={es}
          h2={es ? 'Transforma la Seguridad Publica de Tu Municipio' : 'Transform Your Municipality\'s Public Safety'}
          subtitle={es
            ? 'Conoce como KabatOne integra despacho, video, trafico y coordinacion multiagencia en una sola plataforma para centros C5.'
            : 'See how KabatOne integrates dispatch, video, traffic, and multi-agency coordination into a single platform for C5 centers.'}
          cta1={es ? 'Solicita una Demo' : 'Book a Demo'}
          cta2={es ? 'Contactar Ventas' : 'Contact Sales'}
        />

        <Footer es={es} />

        <style>{`
          @media (max-width: 768px) {
            div[style*="grid-template-columns: 1fr 1fr"],
            div[style*="grid-template-columns: repeat(4"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </>
  )
}
