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
  return generatePageMetadata('c5CommandCentersMexico2026', locale)
}

export default async function C5CommandCentersMexico2026Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#dc2626'

  /* ── FAQ data ── */
  const faqs = es
    ? [
        {
          question: '¿Qué significa C5 en México?',
          answer:
            'C5 significa Centro de Control, Comando, Comunicación, Cómputo y Calidad. Son los centros de coordinación de emergencias integrados de México, responsables de articular la respuesta de policía, bomberos, servicios médicos de emergencia y videovigilancia en ciudades y estados. El término "Calidad" se refiere a la evaluación continua del desempeño operativo y los estándares de servicio al ciudadano.',
        },
        {
          question: '¿Cuántos centros C5 tiene México?',
          answer:
            'México cuenta con 32 centros C5 a nivel estatal y cientos de instalaciones municipales de nivel C2 o C4 en todo el país. La red continúa expandiéndose mediante programas de financiamiento federal como FORTASEG y fondos estatales de seguridad. Ciudades como Ciudad de México, Monterrey y Guadalajara operan instalaciones C5 de gran escala que coordinan miles de cámaras y múltiples agencias de seguridad.',
        },
        {
          question: '¿Qué software usan los centros C5 en México?',
          answer:
            'La mayoría de los centros C5 en México operan con una combinación de software CAD, VMS y GIS de distintos proveedores. Los centros modernos están transitando hacia plataformas unificadas que integran todas estas capas en una sola interfaz operativa, eliminando los silos entre videovigilancia, despacho y gestión de incidentes. La tendencia es consolidar el stack tecnológico para reducir fricción operativa y tiempos de respuesta.',
        },
        {
          question: '¿Cuál es la diferencia entre C2, C4 y C5?',
          answer:
            'C2 es el nivel básico de coordinación con funciones de mando y control. C4 agrega cómputo y comunicaciones al modelo C2 — habilitando despacho asistido por computadora y videovigilancia centralizada. C5 incorpora Calidad como quinta dimensión, sumando gestión del desempeño, atención ciudadana (línea 911) y coordinación interinstitucional formal. A mayor número de componentes, mayor capacidad operativa e integración tecnológica del centro.',
        },
        {
          question: '¿Cómo apoya KabatOne a los centros C5?',
          answer:
            'La plataforma de KabatOne unifica VMS, despacho CAD, GIS, fusión de sensores y gestión de tráfico en una sola interfaz operativa — desplegada en más de 40 ciudades en América Latina, incluyendo entornos C5 en México. K-Safety provee el mapa operativo en tiempo real, K-Video gestiona miles de cámaras con analítica de IA, K-Dispatch maneja el despacho CAD completo y K-Traffic integra la gestión semafórica e incidentes viales.',
        },
        {
          question: '¿Cuál es el presupuesto tecnológico de un C5 municipal?',
          answer:
            'Los costos varían desde USD $500,000 para un C2 municipal básico hasta más de USD $5,000,000 para un despliegue C5 completo con miles de cámaras, videomuros, estaciones de despacho y sistemas integrados. Los programas federales FORTASEG y SUBSEMUN financian parcialmente estas inversiones para municipios elegibles. El costo total incluye infraestructura de red, licencias de software, hardware de videomuro y capacitación del personal operativo.',
        },
      ]
    : [
        {
          question: 'What does C5 stand for in Mexico?',
          answer:
            'C5 stands for Centro de Control, Comando, Comunicación, Cómputo y Calidad — Mexico\'s integrated emergency coordination centers. These facilities are responsible for coordinating police, fire, emergency medical services, and surveillance operations at the municipal and state level. The "Quality" (Calidad) dimension refers to ongoing performance evaluation and citizen service standards.',
        },
        {
          question: 'How many C5 command centers does Mexico have?',
          answer:
            'Mexico has 32 state-level C5 centers and hundreds of municipal-level C2 and C4 installations across the country. The network continues to expand through federal funding programs such as FORTASEG and state security budgets. Major cities like Mexico City, Monterrey, and Guadalajara operate large-scale C5 facilities coordinating thousands of cameras and multiple public safety agencies.',
        },
        {
          question: 'What software do C5 command centers in Mexico use?',
          answer:
            'Most C5 centers in Mexico operate with a mix of CAD, VMS, and GIS software from different vendors. Modern C5s are transitioning to unified platforms that integrate all these layers into one operational interface, eliminating silos between video surveillance, dispatch, and incident management. The trend is consolidating the technology stack to reduce operational friction and improve response times.',
        },
        {
          question: 'What is the difference between C2, C4, and C5?',
          answer:
            'C2 is the basic coordination level covering command and control functions. C4 adds computing and communications to the C2 model — enabling computer-aided dispatch and centralized video surveillance. C5 incorporates Quality as the fifth dimension, adding performance management, citizen contact (911 line), and formal inter-agency coordination. More components means greater operational capability and technology integration.',
        },
        {
          question: 'How does KabatOne support C5 command centers?',
          answer:
            'KabatOne\'s platform unifies VMS, CAD dispatch, GIS, sensor fusion, and traffic management in a single operational interface — deployed in 40+ cities in Latin America, including C5 environments in Mexico. K-Safety provides the real-time operational map, K-Video manages thousands of cameras with AI analytics, K-Dispatch handles full CAD dispatch, and K-Traffic integrates signal control and traffic incident management.',
        },
        {
          question: 'What is the technology budget for a municipal C5?',
          answer:
            'Costs range from USD $500,000 for a basic municipal C2 to over USD $5,000,000 for a full C5 deployment with thousands of cameras, video walls, dispatch workstations, and integrated systems. Federal programs like FORTASEG and SUBSEMUN partially fund these investments for eligible municipalities. Total cost includes network infrastructure, software licenses, video wall hardware, and operational staff training.',
        },
      ]

  /* ── Breadcrumbs ── */
  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/' },
    {
      name: es ? 'Centros C5 en México: Guía 2026' : 'C5 Command Centers in Mexico: 2026 Guide',
      url: es
        ? 'https://kabatone.com/es/resources/c5-command-centers-mexico-2026/'
        : 'https://kabatone.com/resources/c5-command-centers-mexico-2026/',
    },
  ]

  /* ── Schema ── */
  const artSchema = articleSchema(
    es ? 'Centros C5 en México: Guía de Tecnología 2026 | KabatOne' : 'C5 Command Centers in Mexico: 2026 Technology Guide | KabatOne',
    es
      ? 'Los centros C5 coordinan policía, bomberos, EMS y videovigilancia en ciudades mexicanas. Guía completa 2026: tecnología, software, retos de integración y cómo las plataformas unificadas mejoran los tiempos de respuesta.'
      : 'C5 command centers coordinate police, fire, EMS, and surveillance across Mexican cities. Complete 2026 guide to technology stack, software requirements, and how unified platforms improve response.',
    es
      ? 'https://kabatone.com/es/resources/c5-command-centers-mexico-2026/'
      : 'https://kabatone.com/resources/c5-command-centers-mexico-2026/',
    '2026-04-08'
  )

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

  /* ── Tech stack cards ── */
  const techStack = es
    ? [
        { title: 'Sistema de Gestión de Video (VMS)', desc: 'Agrega cámaras de toda la ciudad en una sola interfaz de monitoreo. El VMS moderno incluye analítica de IA para detección de intrusiones, LPR, reconocimiento facial y conteo de personas.' },
        { title: 'Despacho CAD', desc: 'Gestiona las llamadas al 911, clasifica incidentes y despacha las unidades más cercanas y disponibles. El CAD es el motor operativo del centro — sin él, la coordinación de campo es reactiva y manual.' },
        { title: 'GIS y Conciencia Situacional', desc: 'Mapa operativo en tiempo real con posición de unidades, incidentes activos, cobertura de cámaras y sensores. El GIS convierte datos dispersos en una imagen operativa coherente para el coordinador de turno.' },
        { title: 'Fusión de Sensores', desc: 'Integra LPR, detección de disparos (ShotSpotter), IoT ambiental y señales ciudadanas en una capa de alerta unificada. Los eventos de múltiples sensores se correlacionan automáticamente para reducir falsos positivos.' },
        { title: 'Gestión de Tráfico', desc: 'Control de semáforos, detección de infracciones vehiculares y redireccionamiento ante incidentes. Los centros C5 avanzados integran la gestión vial directamente en la consola operativa para coordinar corredores de emergencia.' },
        { title: 'Analítica e Informes', desc: 'Revisión post-incidente, tableros de KPIs operativos y tiempos de respuesta por turno, zona y tipo de evento. Los datos históricos alimentan la toma de decisiones estratégicas sobre distribución de patrullas y prioridades de inversión.' },
      ]
    : [
        { title: 'Video Management System (VMS)', desc: 'Aggregates cameras from across the city into one monitoring interface. Modern VMS includes AI analytics for intrusion detection, LPR, facial recognition, and people counting.' },
        { title: 'CAD / Dispatch', desc: 'Manages 911 calls, classifies incidents, and dispatches the nearest available units. CAD is the operational engine of the center — without it, field coordination is reactive and manual.' },
        { title: 'GIS / Situational Awareness', desc: 'Real-time operational map with unit positions, active incidents, camera coverage, and sensor feeds. GIS turns scattered data into a coherent operational picture for the duty coordinator.' },
        { title: 'Sensor Fusion', desc: 'Integrates LPR, gunshot detection (ShotSpotter), environmental IoT, and citizen signals into a unified alert layer. Events from multiple sensors are automatically correlated to reduce false positives.' },
        { title: 'Traffic Management', desc: 'Signal control, vehicle violation detection, and incident-triggered rerouting. Advanced C5 centers integrate traffic management directly into the operational console to coordinate emergency corridors.' },
        { title: 'Analytics & Reporting', desc: 'Post-incident review, operational KPI dashboards, and response time tracking by shift, zone, and event type. Historical data informs strategic decisions on patrol distribution and investment priorities.' },
      ]

  /* ── Comparison table rows ── */
  const comparisonRows = es
    ? [
        { aspect: 'Gestión de Video', legacy: 'Sistemas DVR/NVR aislados sin analítica centralizada', modern: 'VMS unificado con analítica de IA integrada' },
        { aspect: 'Despacho', legacy: 'CAD separado, sin vínculo con video ni mapa en vivo', modern: 'CAD integrado con video en vivo y GIS operativo' },
        { aspect: 'Conciencia Situacional', legacy: 'Mapas en papel o GIS básico sin datos en tiempo real', modern: 'GIS operativo en tiempo real con incidentes y unidades' },
        { aspect: 'Integración de Sensores', legacy: 'Alertas manuales sin correlación entre sensores', modern: 'Fusión automática de sensores cruzados' },
        { aspect: 'Gestión de Tráfico', legacy: 'Centro de tráfico separado, sin comunicación con C5', modern: 'Control semafórico integrado y redireccionamiento ante incidentes' },
        { aspect: 'Coordinación de Respuesta', legacy: 'Solo radio, sin pantalla compartida entre agencias', modern: 'Imagen operativa compartida multi-agencia' },
        { aspect: 'Informes', legacy: 'Reportes manuales en Excel por turno', modern: 'Tableros automatizados con KPIs de respuesta' },
      ]
    : [
        { aspect: 'Video Management', legacy: 'Isolated DVR/NVR systems without centralized analytics', modern: 'Unified VMS with integrated AI analytics' },
        { aspect: 'Dispatch', legacy: 'Separate CAD, no link to video or live map', modern: 'CAD integrated with live video and GIS' },
        { aspect: 'Situational Awareness', legacy: 'Paper maps or basic GIS with no real-time data', modern: 'Real-time operational GIS with incidents and units' },
        { aspect: 'Sensor Integration', legacy: 'Manual alerts, no cross-sensor correlation', modern: 'Automated cross-sensor fusion' },
        { aspect: 'Traffic Management', legacy: 'Separate traffic center, no link to C5 operations', modern: 'Integrated signal control and incident rerouting' },
        { aspect: 'Response Coordination', legacy: 'Radio-only, no shared screen between agencies', modern: 'Multi-agency shared operational picture' },
        { aspect: 'Reporting', legacy: 'Manual Excel reports per shift', modern: 'Automated dashboards with response KPIs' },
      ]

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(artSchema) }}
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
              {es ? 'Centros C5 en México: Guía 2026' : 'C5 Command Centers in Mexico: 2026 Guide'}
            </span>
          </nav>
        </div>

        {/* ── HERO ── */}
        <section style={{ padding: '48px 32px 64px' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
              {es ? 'Guía de Tecnología 2026' : '2026 Technology Guide'}
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
                ? 'Centros C5 en México: Guía de Tecnología 2026'
                : 'C5 Command Centers in Mexico: 2026 Technology Guide'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'La guía definitiva sobre cómo funcionan los centros de mando C5, qué tecnología usan y cómo las plataformas unificadas están transformando las operaciones de seguridad pública en ciudades mexicanas.'
                : 'The definitive guide to how C5 command centers work, what technology they use, and how unified platforms are transforming public safety operations across Mexican cities.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 1: What Is a C5? ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? '¿Qué Es un Centro C5?' : 'What Is a C5 Command Center?'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'C5 significa Centro de Control, Comando, Comunicación, Cómputo y Calidad. Son los principales centros de coordinación de emergencias en México: coordinan la respuesta policial, operaciones de bomberos, servicios médicos de urgencias, videovigilancia y gestión de incidentes a nivel municipal y estatal.'
                : 'C5 stands for Centro de Control, Comando, Comunicación, Cómputo y Calidad. These are Mexico\'s primary hubs for coordinating emergency response, police operations, video surveillance, and incident management at the municipal and state level.'}
            </p>
            <p style={pStyle}>
              {es
                ? 'México opera 32 centros C5 a nivel estatal y cientos de instalaciones municipales de nivel C2 y C4 en todo el país. Son la columna vertebral operativa de la seguridad pública en México — el punto central donde la detección, el despacho y la coordinación de la respuesta convergen en tiempo real.'
                : 'Mexico operates 32 state-level C5s and hundreds of municipal-level C2 and C4 installations. They are the operational backbone of public safety in Mexico — the central point where detection, dispatch, and response coordination converge in real time.'}
            </p>
          </div>
        </section>

        {/* ── SECTION 2: How C5 Centers Are Structured ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'Cómo Se Estructura un Centro C5' : 'How C5 Centers Are Structured'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Un centro C5 moderno opera en tres capas interdependientes. La efectividad del centro depende de qué tan bien estas capas comparten información en tiempo real.'
                : 'A modern C5 center operates across three interdependent layers. The center\'s effectiveness depends on how well these layers share information in real time.'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {(es
                ? [
                    {
                      step: '01',
                      title: 'Capa de Mando',
                      desc: 'Coordinación de incidentes, despliegue de unidades y comunicación multi-agencia. Los coordinadores de turno toman decisiones operativas basados en la imagen situacional del momento: qué está pasando, dónde, qué recursos están disponibles y cuál es la prioridad.',
                    },
                    {
                      step: '02',
                      title: 'Capa de Tecnología',
                      desc: 'Videomuros, mapas GIS, estaciones de trabajo de despacho y feeds de sensores. Esta capa determina la calidad de la imagen operativa disponible para el coordinador. Un stack tecnológico fragmentado genera una imagen incompleta — y una imagen incompleta genera decisiones más lentas.',
                    },
                    {
                      step: '03',
                      title: 'Capa de Respuesta',
                      desc: 'Policía, servicios médicos de emergencia, bomberos y tráfico — todos coordinados desde una imagen operativa unificada. La velocidad de esta capa depende directamente de cuánta fricción existe en las capas de mando y tecnología.',
                    },
                  ]
                : [
                    {
                      step: '01',
                      title: 'Command Layer',
                      desc: 'Incident coordination, unit deployment, and multi-agency communication. Duty coordinators make operational decisions based on the current situational picture: what is happening, where, what resources are available, and what the priority is.',
                    },
                    {
                      step: '02',
                      title: 'Technology Layer',
                      desc: 'Video walls, GIS maps, dispatch workstations, and sensor feeds. This layer determines the quality of the operational picture available to the coordinator. A fragmented technology stack produces an incomplete picture — and an incomplete picture produces slower decisions.',
                    },
                    {
                      step: '03',
                      title: 'Response Layer',
                      desc: 'Police, EMS, fire, and traffic — all coordinated from a unified operational picture. The speed of this layer depends directly on how much friction exists in the command and technology layers above it.',
                    },
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

        {/* ── SECTION 3: Technology Stack ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'El Stack Tecnológico de un C5 Moderno' : 'The Technology Stack of a Modern C5'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Un centro C5 completamente equipado integra seis componentes tecnológicos principales. La mayoría de los centros en México tienen todos estos componentes — pero de proveedores diferentes, sin integración real entre ellos.'
                : 'A fully equipped C5 center integrates six core technology components. Most centers in Mexico have all of these — but from different vendors, with no real integration between them.'}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
              {techStack.map((item, i) => (
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
                    color: 'var(--white)',
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

        {/* ── SECTION 4: The Integration Challenge ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'El Reto de Integración en los C5 de México' : 'The Integration Challenge'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'La mayoría de los centros C5 en México se construyeron durante 10 a 15 años con distintos proveedores para cada sistema. Esto crea silos operativos con consecuencias concretas: el operador de cámaras no puede ver lo que ve el despachador. El despachador no puede ver el feed de tráfico. El coordinador de respuesta no tiene la ubicación en tiempo real de las unidades.'
                : 'Most C5s in Mexico were built over 10 to 15 years with different vendors for each system. This creates operational silos with concrete consequences: the camera operator cannot see what the dispatcher sees. The dispatcher cannot see the traffic feed. The response coordinator does not have real-time unit location.'}
            </p>
            <p style={pStyle}>
              {es
                ? 'El resultado es predecible: tiempos de respuesta más lentos, fallas de comunicación, alertas perdidas y una imagen situacional fragmentada que obliga al coordinador a reconstruir manualmente el estado de cada incidente a partir de múltiples pantallas y sistemas.'
                : 'The result is predictable: slower response times, miscommunication, missed alerts, and a fragmented situational picture that forces the coordinator to manually reconstruct the state of each incident from multiple screens and systems.'}
            </p>

            <div style={{
              background: `${ACCENT}10`,
              border: `1px solid ${ACCENT}30`,
              borderRadius: '10px',
              padding: '24px 28px',
              marginTop: '8px',
            }}>
              <p style={{ fontSize: '13px', fontWeight: 400, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>
                {es
                  ? 'El reto no es tecnológico — la infraestructura existe. El reto es operativo: los sistemas no se hablan entre sí, y el operador termina siendo el integrador humano entre cámaras, despacho y campo. Cada minuto de fricción operativa se traduce en minutos adicionales de tiempo de respuesta.'
                  : 'The challenge is not technological — the infrastructure exists. The challenge is operational: the systems do not communicate, and the operator ends up acting as the human integrator between cameras, dispatch, and field units. Every minute of operational friction translates directly into additional response time.'}
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: How Unified Platforms Solve This ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'Cómo lo Resuelven las Plataformas Unificadas' : 'How Unified Platforms Solve This'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Una plataforma unificada no reemplaza la infraestructura existente — la conecta. El VMS, el CAD, el GIS, los sensores y el tráfico convergen en una sola interfaz operativa. El coordinador deja de ser el integrador y pasa a ser el tomador de decisiones.'
                : 'A unified platform does not replace existing infrastructure — it connects it. VMS, CAD, GIS, sensors, and traffic converge in a single operational interface. The coordinator stops being the integrator and becomes the decision-maker.'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {(es
                ? [
                    {
                      step: '01',
                      title: 'Una Imagen Operativa Unificada',
                      desc: 'Video, GIS, despacho y sensores en una sola pantalla. Un clic en un incidente muestra automáticamente las cámaras más cercanas, las unidades disponibles y el historial del punto. El operador no cambia de aplicación para gestionar un evento.',
                    },
                    {
                      step: '02',
                      title: 'Bucles de Decisión Más Rápidos',
                      desc: 'Cuando se detecta un disparo, el sistema correlaciona automáticamente la alerta acústica con el video de las cámaras cercanas y sugiere las unidades disponibles para despachar. El tiempo entre alerta y despacho se reduce de minutos a segundos.',
                    },
                    {
                      step: '03',
                      title: 'Auditoría Completa',
                      desc: 'Cada acción queda registrada con marca de tiempo e ID del operador. El expediente del incidente incluye el video, las comunicaciones de radio, el historial de despacho y las anotaciones del operador — todo en un solo registro accesible para revisión post-incidente.',
                    },
                  ]
                : [
                    {
                      step: '01',
                      title: 'One Operational Picture',
                      desc: 'Video, GIS, dispatch, and sensors on a single screen. One click on an incident automatically shows the nearest cameras, available units, and location history. The operator does not change applications to manage an event.',
                    },
                    {
                      step: '02',
                      title: 'Faster Decision Loops',
                      desc: 'When a gunshot is detected, the system automatically correlates the acoustic alert with video from nearby cameras and suggests available units for dispatch. The time between alert and dispatch is reduced from minutes to seconds.',
                    },
                    {
                      step: '03',
                      title: 'Audit-Ready',
                      desc: 'Every action is logged with timestamp and operator ID. The incident record includes video, radio communications, dispatch history, and operator annotations — all in one accessible record for post-incident review.',
                    },
                  ]
              ).map((item) => (
                <div
                  key={item.step}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start',
                    background: `${ACCENT}08`,
                    borderRadius: '10px',
                    border: `1px solid ${ACCENT}25`,
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

        {/* ── SECTION 6: Comparison Table ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'C5 Heredado vs C5 Moderno Unificado' : 'Legacy C5 vs Modern Unified C5'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'La diferencia no es la cantidad de tecnología instalada — es el nivel de integración entre los sistemas. Un centro con tecnología fragmentada de última generación sigue teniendo silos operativos.'
                : 'The difference is not the amount of technology installed — it is the level of integration between systems. A center with best-in-class but fragmented technology still has operational silos.'}
            </p>

            <div style={{ overflowX: 'auto', marginTop: '8px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                <thead>
                  <tr>
                    <th style={{
                      padding: '12px 16px',
                      textAlign: 'left',
                      fontFamily: 'DM Mono, monospace',
                      fontWeight: 600,
                      fontSize: '10px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--muted)',
                      borderBottom: '1px solid var(--border)',
                    }}>
                      {es ? 'Componente' : 'Component'}
                    </th>
                    <th style={{
                      padding: '12px 16px',
                      textAlign: 'left',
                      fontFamily: 'DM Mono, monospace',
                      fontWeight: 600,
                      fontSize: '10px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--muted)',
                      borderBottom: '1px solid var(--border)',
                    }}>
                      {es ? 'C5 Heredado' : 'Legacy C5'}
                    </th>
                    <th style={{
                      padding: '12px 16px',
                      textAlign: 'left',
                      fontFamily: 'DM Mono, monospace',
                      fontWeight: 600,
                      fontSize: '10px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: ACCENT,
                      borderBottom: '1px solid var(--border)',
                    }}>
                      {es ? 'C5 Moderno Unificado' : 'Modern Unified C5'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={i}
                      style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}
                    >
                      <td style={{
                        padding: '14px 16px',
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 700,
                        fontSize: '13px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.03em',
                        color: 'var(--white)',
                        verticalAlign: 'top',
                        whiteSpace: 'nowrap',
                      }}>
                        {row.aspect}
                      </td>
                      <td style={{
                        padding: '14px 16px',
                        fontWeight: 300,
                        color: 'var(--muted)',
                        lineHeight: 1.6,
                        verticalAlign: 'top',
                      }}>
                        {row.legacy}
                      </td>
                      <td style={{
                        padding: '14px 16px',
                        fontWeight: 300,
                        color: 'var(--dim)',
                        lineHeight: 1.6,
                        verticalAlign: 'top',
                      }}>
                        {row.modern}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── SECTION 7: KabatOne for C5 ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
              {es ? 'KabatOne para Centros C5' : 'KabatOne for C5 Command Centers'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '12px' }}>
              {es
                ? 'La Plataforma C5 Unificada para México y LATAM'
                : 'The Unified C5 Platform for Mexico and LATAM'}
            </h2>
            <p style={{ ...pStyle, marginBottom: '28px' }}>
              {es
                ? 'KabatOne unifica VMS, despacho CAD, GIS, fusión de sensores y gestión de tráfico en una sola interfaz operativa. Desplegada en más de 40 ciudades en América Latina, incluyendo entornos C5 en México. La plataforma se integra con la infraestructura existente del centro — sin reemplazar lo que ya funciona.'
                : 'KabatOne unifies VMS, CAD dispatch, GIS, sensor fusion, and traffic management in a single operational interface. Deployed in 40+ cities in Latin America, including C5 environments in Mexico. The platform integrates with the center\'s existing infrastructure — without replacing what already works.'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { href: '/k-safety', label: 'K-Safety', desc: es ? 'Mapa Operativo GIS' : 'GIS Operational Map' },
                { href: '/k-video', label: 'K-Video', desc: es ? 'Videovigilancia + IA' : 'Video + AI Analytics' },
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

            {/* ── Internal links ── */}
            <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', fontSize: '12px' }}>
                <span style={{ fontFamily: 'DM Mono, monospace', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {es ? 'Recursos:' : 'Resources:'}
                </span>
                {[
                  { href: '/resources/how-c5-command-centers-work', label: es ? 'Cómo Funcionan los Centros C5' : 'How C5 Command Centers Work' },
                  { href: '/resources/what-is-a-real-time-crime-center', label: es ? 'Qué Es un RTCC' : 'What Is an RTCC' },
                  { href: '/resources/what-is-situational-awareness-software', label: es ? 'Software de Conciencia Situacional' : 'Situational Awareness Software' },
                  { href: '/resources/what-is-cad-dispatch-software', label: es ? 'Software CAD de Despacho' : 'CAD Dispatch Software' },
                  { href: '/resources/what-is-video-management-software', label: es ? 'Software VMS' : 'Video Management Software' },
                  { href: '/resources/public-safety-software-municipalities-mexico', label: es ? 'Seguridad Pública en México' : 'Public Safety Software Mexico' },
                ].map((link) => (
                  <Link key={link.href} href={link.href} style={{ color: ACCENT, textDecoration: 'none', borderBottom: `1px solid ${ACCENT}40` }}>
                    {link.label}
                  </Link>
                ))}
              </div>
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
                ? 'Preguntas Comunes sobre los Centros C5 en México'
                : 'Common Questions About C5 Command Centers in Mexico'}
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
                    fontSize: '16px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                    marginTop: '0',
                    marginBottom: '10px',
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

        {/* ── CTA ── */}
        <CTASection
          es={es}
          h2={es ? '¿Listo para Unificar tu Centro C5?' : 'Ready to Unify Your C5 Command Center?'}
          subtitle={es
            ? 'Agenda una demo personalizada y descubre cómo KabatOne integra videovigilancia, despacho CAD, GIS, fusión de sensores y tráfico en una sola plataforma — desplegada en más de 40 ciudades en América Latina.'
            : 'Schedule a personalized demo and see how KabatOne integrates video surveillance, CAD dispatch, GIS, sensor fusion, and traffic management in one platform — deployed in 40+ cities in Latin America.'}
        />
      </div>

      <Footer es={es} />
    </>
  )
}
