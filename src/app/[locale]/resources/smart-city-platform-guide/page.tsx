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
  return generatePageMetadata('smartCityPlatformGuide', locale)
}

export default async function SmartCityPlatformGuidePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#10b981'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: 'https://kabatone.com' + (es ? '/es/' : '/') },
    { name: es ? 'Recursos' : 'Resources', url: 'https://kabatone.com' + (es ? '/es/resources/' : '/resources/') },
    { name: es ? 'Guia de Plataforma de Ciudad Inteligente' : 'Smart City Platform Guide', url: 'https://kabatone.com' + (es ? '/es/resources/smart-city-platform-guide/' : '/resources/smart-city-platform-guide/') },
  ]

  const faqs = es ? [
    {
      question: '¿Que es una plataforma de ciudad inteligente?',
      answer: 'Una plataforma de ciudad inteligente es un sistema de software centralizado que conecta sensores IoT, camaras de videovigilancia, sistemas de trafico, despacho de emergencias y servicios ciudadanos en una unica vista operativa. La plataforma recopila datos en tiempo real de toda la infraestructura urbana y permite a los operadores monitorear, analizar y responder a eventos desde un solo centro de mando.',
    },
    {
      question: '¿Cuales son los componentes principales de una plataforma de ciudad inteligente?',
      answer: 'Los componentes principales incluyen integracion de sensores IoT, gestion de video con analitica de IA, gestion inteligente de trafico, despacho y respuesta a emergencias (CAD), participacion ciudadana a traves de video comunitario, y analitica de datos con inteligencia artificial. Cada componente alimenta un panel operativo unificado que proporciona conciencia situacional en tiempo real.',
    },
    {
      question: '¿En que se diferencia una plataforma de ciudad inteligente del SCADA tradicional?',
      answer: 'Los sistemas SCADA tradicionales fueron disenados para el control de procesos industriales y operan en redes cerradas con protocolos propietarios. Las plataformas de ciudad inteligente son sistemas abiertos basados en IP que integran multiples dominios — seguridad publica, trafico, servicios de emergencia y participacion ciudadana — en una sola capa operativa con analitica en tiempo real y capacidades de IA.',
    },
    {
      question: '¿Que ciudades utilizan plataformas de ciudad inteligente?',
      answer: 'Mas de 250 ciudades en el mundo han implementado plataformas de ciudad inteligente. En America Latina, KabatOne opera en mas de 40 ciudades protegiendo a 73 millones de ciudadanos, incluyendo despliegues en Mexico, Colombia y Chile. A nivel global, Singapur, Barcelona, Dubai y Seul son ejemplos destacados de implementaciones a gran escala.',
    },
    {
      question: '¿Como mejoran las plataformas de ciudad inteligente la seguridad publica?',
      answer: 'Las plataformas de ciudad inteligente mejoran la seguridad publica al reducir los tiempos de respuesta a emergencias hasta en un 40%, proporcionar deteccion proactiva de amenazas mediante analitica de video con IA, permitir la coordinacion multiagencia en tiempo real y ofrecer mapeo GIS en vivo de incidentes y unidades de respuesta. Ciudades con plataformas unificadas reportan reducciones significativas en tasas de criminalidad.',
    },
    {
      question: '¿Puede una plataforma de ciudad inteligente integrar infraestructura heredada?',
      answer: 'Si. Las plataformas modernas de ciudad inteligente estan disenadas para integrar infraestructura existente a traves de APIs abiertas y conectores estandar. Esto incluye camaras CCTV analogicas mediante codificadores, controladores de trafico heredados, sistemas de radio y redes de sensores propietarios. La integracion gradual permite a las ciudades modernizarse sin reemplazar toda la infraestructura de una vez.',
    },
  ] : [
    {
      question: 'What is a smart city platform?',
      answer: 'A smart city platform is a centralized software system that connects IoT sensors, video surveillance cameras, traffic systems, emergency dispatch, and citizen services into a single operational view. The platform collects real-time data from all urban infrastructure and enables operators to monitor, analyze, and respond to events from one command center.',
    },
    {
      question: 'What are the core components of a smart city platform?',
      answer: 'The core components include IoT sensor integration, video management with AI analytics, intelligent traffic management, emergency dispatch and response (CAD), citizen engagement through community video, and data analytics with artificial intelligence. Each component feeds into a unified operational dashboard that provides real-time situational awareness.',
    },
    {
      question: 'How does a smart city platform differ from traditional SCADA?',
      answer: 'Traditional SCADA systems were designed for industrial process control and operate on closed networks with proprietary protocols. Smart city platforms are open, IP-based systems that integrate multiple domains — public safety, traffic, emergency services, and citizen engagement — into a single operational layer with real-time analytics and AI capabilities.',
    },
    {
      question: 'What cities use smart city platforms?',
      answer: 'Over 250 cities worldwide have deployed smart city platforms. In Latin America, KabatOne operates in more than 40 cities protecting 73 million citizens, including deployments in Mexico, Colombia, and Chile. Globally, Singapore, Barcelona, Dubai, and Seoul are prominent examples of large-scale implementations.',
    },
    {
      question: 'How do smart city platforms improve public safety?',
      answer: 'Smart city platforms improve public safety by reducing emergency response times by up to 40%, providing proactive threat detection through AI video analytics, enabling real-time multi-agency coordination, and offering live GIS mapping of incidents and response units. Cities with unified platforms report significant reductions in crime rates.',
    },
    {
      question: 'Can a smart city platform integrate legacy infrastructure?',
      answer: 'Yes. Modern smart city platforms are designed to integrate existing infrastructure through open APIs and standard connectors. This includes analog CCTV cameras via encoders, legacy traffic controllers, radio systems, and proprietary sensor networks. Gradual integration allows cities to modernize without replacing all infrastructure at once.',
    },
  ]

  const articleData = {
    headline: es
      ? 'Guia de Plataformas de Ciudad Inteligente — Tecnologia, Casos de Uso y Seleccion'
      : 'Smart City Platform Guide — Technology, Use Cases & Selection',
    description: es
      ? 'Una plataforma de ciudad inteligente conecta sensores IoT, video, trafico y servicios de emergencia en una vista operativa. Guia para seleccionar e implementar la plataforma correcta.'
      : 'A smart city platform connects IoT sensors, video, traffic systems, and emergency services into one operational view. Guide to selecting and deploying the right platform.',
    url: es
      ? 'https://kabatone.com/es/resources/smart-city-platform-guide/'
      : 'https://kabatone.com/resources/smart-city-platform-guide/',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(articleData.headline, articleData.description, articleData.url, '2026-03-19')) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      <Nav />

      <main style={{ background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* Breadcrumb */}
        <nav style={{ maxWidth: '880px', margin: '0 auto', padding: '100px 24px 0' }} aria-label="Breadcrumb">
          <ol style={{ display: 'flex', gap: '8px', listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', color: 'var(--dim)' }}>
            <li><Link href="/" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Inicio' : 'Home'}</Link></li>
            <li style={{ color: 'var(--dim)' }}>/</li>
            <li><span style={{ color: 'var(--dim)' }}>{es ? 'Recursos' : 'Resources'}</span></li>
            <li style={{ color: 'var(--dim)' }}>/</li>
            <li style={{ color: ACCENT }}>{es ? 'Guia de Ciudad Inteligente' : 'Smart City Platform Guide'}</li>
          </ol>
        </nav>

        {/* Hero */}
        <header style={{ maxWidth: '880px', margin: '0 auto', padding: '48px 24px 64px' }}>
          <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: ACCENT, marginBottom: '16px' }}>
            {es ? 'Guia de Recursos' : 'Resource Guide'}
          </p>
          <h1 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', lineHeight: 1.1, marginBottom: '24px' }}>
            {es ? 'Guia de Plataformas de Ciudad Inteligente' : 'Smart City Platform Guide'}
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'var(--dim)', maxWidth: '720px' }}>
            {es
              ? 'Una plataforma de ciudad inteligente es un sistema de software centralizado que integra sensores IoT, videovigilancia, gestion de trafico y despacho de emergencias en una unica vista operativa. Estas plataformas permiten a los gobiernos municipales monitorear, analizar y responder a eventos urbanos en tiempo real. Esta guia explica como funcionan, que capacidades ofrecen y como seleccionar la solucion adecuada.'
              : 'A smart city platform is a centralized software system that integrates IoT sensors, video surveillance, traffic management, and emergency dispatch into a single operational view. These platforms enable municipal governments to monitor, analyze, and respond to urban events in real time. This guide explains how smart city platforms work, what capabilities they deliver, and how to select the right solution.'}
          </p>
        </header>

        {/* What Is a Smart City Platform? */}
        <section style={{ maxWidth: '880px', margin: '0 auto', padding: '0 24px 56px' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '20px', borderLeft: `4px solid ${ACCENT}`, paddingLeft: '16px' }}>
            {es ? '¿Que Es una Plataforma de Ciudad Inteligente?' : 'What Is a Smart City Platform?'}
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--dim)', marginBottom: '16px' }}>
            {es
              ? 'Una plataforma de ciudad inteligente es una capa de software que unifica la infraestructura urbana fragmentada en un sistema operativo cohesivo. A diferencia de las soluciones puntuales que gestionan un solo dominio — como trafico o videovigilancia — una plataforma de ciudad inteligente conecta todos los dominios simultaneamente. Los datos de sensores IoT, camaras de video, controladores de trafico y sistemas de despacho de emergencias fluyen hacia un unico centro de mando donde los operadores obtienen conciencia situacional completa.'
              : 'A smart city platform is a software layer that unifies fragmented urban infrastructure into one cohesive operating system. Unlike point solutions that manage a single domain — such as traffic or video surveillance — a smart city platform connects all domains simultaneously. Data from IoT sensors, video cameras, traffic controllers, and emergency dispatch systems flows into a single command center where operators gain complete situational awareness.'}
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--dim)', marginBottom: '16px' }}>
            {es
              ? 'El mercado global de plataformas de ciudad inteligente alcanzo un valor estimado de 142 mil millones de dolares en 2024 y se proyecta que supere los 260 mil millones para 2030. Este crecimiento refleja la necesidad de las ciudades de reemplazar sistemas aislados con plataformas integradas capaces de manejar la complejidad urbana creciente.'
              : 'The global smart city platform market reached an estimated value of $142 billion in 2024 and is projected to exceed $260 billion by 2030. This growth reflects the need for cities to replace siloed systems with integrated platforms capable of managing increasing urban complexity.'}
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--dim)' }}>
            {es
              ? 'Las plataformas de ciudad inteligente se distinguen por tres caracteristicas fundamentales: ingestion de datos en tiempo real de multiples fuentes, correlacion automatizada de eventos entre dominios y flujos de trabajo de respuesta que coordinan multiples agencias. Estas capacidades transforman datos en bruto en inteligencia operativa.'
              : 'Smart city platforms are distinguished by three fundamental characteristics: real-time data ingestion from multiple sources, automated event correlation across domains, and response workflows that coordinate multiple agencies. These capabilities transform raw data into actionable operational intelligence.'}
          </p>
        </section>

        {/* Core Capabilities */}
        <section style={{ maxWidth: '880px', margin: '0 auto', padding: '0 24px 56px' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '20px', borderLeft: `4px solid ${ACCENT}`, paddingLeft: '16px' }}>
            {es ? 'Capacidades Principales de una Plataforma de Ciudad Inteligente' : 'Core Capabilities of a Smart City Platform'}
          </h2>

          <div style={{ display: 'grid', gap: '32px' }}>
            {/* IoT Sensor Integration */}
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: 'var(--white)' }}>
                {es ? 'Integracion de Sensores IoT' : 'IoT Sensor Integration'}
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--dim)' }}>
                {es
                  ? 'Las plataformas de ciudad inteligente ingieren datos de sensores ambientales, detectores de disparos, monitores de calidad del aire, sensores de inundacion y dispositivos de medicion de ruido. Un despliegue tipico en una ciudad de un millon de habitantes conecta entre 5,000 y 20,000 sensores IoT. La plataforma normaliza los datos de diferentes fabricantes y protocolos en un formato estandar para analisis unificado.'
                  : 'Smart city platforms ingest data from environmental sensors, gunshot detectors, air quality monitors, flood sensors, and noise measurement devices. A typical deployment in a city of one million residents connects between 5,000 and 20,000 IoT sensors. The platform normalizes data from different manufacturers and protocols into a standard format for unified analysis.'}
              </p>
            </div>

            {/* Video Surveillance and Analytics */}
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: 'var(--white)' }}>
                {es ? 'Videovigilancia y Analitica' : 'Video Surveillance and Analytics'}
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--dim)' }}>
                {es
                  ? 'La gestion de video es el componente con mayor demanda de ancho de banda en una plataforma de ciudad inteligente. Las plataformas modernas agregan feeds de camaras de multiples fabricantes — incluyendo Hikvision, Dahua, Axis y Hanwha — en un sistema de gestion de video (VMS) unificado. La analitica de IA aplicada al video permite deteccion de objetos abandonados, reconocimiento facial, conteo de personas y reconocimiento automatico de placas (LPR).'
                  : 'Video management is the highest-bandwidth component of a smart city platform. Modern platforms aggregate camera feeds from multiple manufacturers — including Hikvision, Dahua, Axis, and Hanwha — into a unified video management system (VMS). AI analytics applied to video enable abandoned object detection, facial recognition, people counting, and automatic license plate recognition (LPR).'}
                {' '}
                <Link href="/k-video" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>
                  {es ? 'K-Video de KabatOne' : 'KabatOne K-Video'}
                </Link>
                {es
                  ? ' soporta mas de 50 fabricantes de camaras y procesa analitica de IA a escala municipal.'
                  : ' supports over 50 camera manufacturers and processes AI analytics at municipal scale.'}
              </p>
            </div>

            {/* Traffic Management */}
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: 'var(--white)' }}>
                {es ? 'Gestion de Trafico' : 'Traffic Management'}
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--dim)' }}>
                {es
                  ? 'Los modulos de gestion de trafico dentro de una plataforma de ciudad inteligente controlan semaforos, detectan congestiones, identifican infracciones y coordinan rutas de vehiculos de emergencia. La integracion de trafico con despacho de emergencias permite que los semaforos cambien automaticamente a paso prioritario cuando una ambulancia o patrulla se aproxima a una interseccion.'
                  : 'Traffic management modules within a smart city platform control traffic signals, detect congestion, identify violations, and coordinate emergency vehicle routing. Integrating traffic with emergency dispatch allows traffic signals to switch automatically to priority passage when an ambulance or patrol car approaches an intersection.'}
                {' '}
                <Link href="/k-traffic" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>
                  {es ? 'K-Traffic' : 'K-Traffic'}
                </Link>
                {es
                  ? ' conecta controladores de semaforos, sensores de trafico y sistemas de cumplimiento en una sola interfaz.'
                  : ' connects traffic signal controllers, traffic sensors, and enforcement systems into a single interface.'}
              </p>
            </div>

            {/* Emergency Dispatch and Response */}
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: 'var(--white)' }}>
                {es ? 'Despacho y Respuesta a Emergencias' : 'Emergency Dispatch and Response'}
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--dim)' }}>
                {es
                  ? 'El componente CAD (Computer-Aided Dispatch) de una plataforma de ciudad inteligente gestiona el ciclo completo de emergencias: recepcion de llamadas, clasificacion de incidentes, recomendacion automatica de unidades, despacho y seguimiento en campo. Los sistemas CAD integrados reducen el tiempo desde la recepcion de la llamada hasta el despacho de la unidad en un promedio de 40% comparado con sistemas manuales o independientes.'
                  : 'The CAD (Computer-Aided Dispatch) component of a smart city platform manages the complete emergency lifecycle: call intake, incident classification, automatic unit recommendation, dispatch, and field tracking. Integrated CAD systems reduce the time from call receipt to unit dispatch by an average of 40% compared to manual or standalone systems.'}
              </p>
            </div>

            {/* Citizen Engagement */}
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: 'var(--white)' }}>
                {es ? 'Participacion Ciudadana' : 'Citizen Engagement'}
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--dim)' }}>
                {es
                  ? 'Las plataformas de ciudad inteligente extienden la cobertura de vigilancia mediante programas de video comunitario. Negocios y residentes pueden compartir voluntariamente las transmisiones de sus camaras de seguridad con el centro de mando, ampliando la cobertura sin costo adicional en infraestructura.'
                  : 'Smart city platforms extend surveillance coverage through community video programs. Businesses and residents can voluntarily share their security camera feeds with the command center, expanding coverage without additional infrastructure cost.'}
                {' '}
                <Link href="/k-connect" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>
                  {es ? 'K-Connect de KabatOne' : 'KabatOne K-Connect'}
                </Link>
                {es
                  ? ' permite a los ciudadanos conectar sus camaras al centro de mando municipal con una sola aplicacion.'
                  : ' enables citizens to connect their cameras to the municipal command center with a single application.'}
              </p>
            </div>

            {/* Data Analytics and AI */}
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '10px', color: 'var(--white)' }}>
                {es ? 'Analitica de Datos e IA' : 'Data Analytics and AI'}
              </h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--dim)' }}>
                {es
                  ? 'La capa de analitica transforma datos en bruto de sensores, camaras y sistemas de despacho en inteligencia operativa. Los algoritmos de aprendizaje automatico identifican patrones de criminalidad, predicen congestiones de trafico y detectan comportamientos anomalos en tiempo real. Las plataformas avanzadas procesan mas de 10 millones de eventos por dia y generan alertas automaticas basadas en reglas configurables y modelos de IA.'
                  : 'The analytics layer transforms raw data from sensors, cameras, and dispatch systems into operational intelligence. Machine learning algorithms identify crime patterns, predict traffic congestion, and detect anomalous behaviors in real time. Advanced platforms process more than 10 million events per day and generate automatic alerts based on configurable rules and AI models.'}
              </p>
            </div>
          </div>
        </section>

        {/* Smart City Platform vs Point Solutions */}
        <section style={{ maxWidth: '880px', margin: '0 auto', padding: '0 24px 56px' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '20px', borderLeft: `4px solid ${ACCENT}`, paddingLeft: '16px' }}>
            {es ? '¿Plataforma de Ciudad Inteligente o Soluciones Puntuales?' : 'Smart City Platform vs Point Solutions'}
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--dim)', marginBottom: '16px' }}>
            {es
              ? 'Las soluciones puntuales resuelven problemas individuales: un VMS gestiona video, un sistema CAD gestiona despacho, un controlador gestiona semaforos. Cada solucion opera en su propio silo con su propia base de datos, interfaz de usuario y equipo de soporte. Las ciudades que dependen de soluciones puntuales enfrentan costos de integracion que pueden representar hasta el 35% del gasto total en tecnologia.'
              : 'Point solutions solve individual problems: a VMS manages video, a CAD system manages dispatch, a controller manages traffic signals. Each solution operates in its own silo with its own database, user interface, and support team. Cities that rely on point solutions face integration costs that can represent up to 35% of total technology spending.'}
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--dim)', marginBottom: '16px' }}>
            {es
              ? 'Una plataforma unificada de ciudad inteligente elimina los silos al proporcionar una unica capa de datos, una interfaz de operador y un modelo de soporte centralizado. Cuando un sensor detecta un disparo, la plataforma automaticamente muestra las camaras cercanas, alerta al despachador, recomienda la unidad de patrulla mas cercana y prepara la ruta de trafico prioritario — todo en menos de 8 segundos.'
              : 'A unified smart city platform eliminates silos by providing a single data layer, one operator interface, and a centralized support model. When a sensor detects a gunshot, the platform automatically displays nearby cameras, alerts the dispatcher, recommends the nearest patrol unit, and prepares the priority traffic route — all in less than 8 seconds.'}
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--dim)' }}>
            {es
              ? 'La plataforma KabatOne, por ejemplo, integra gestion de video (K-Video), despacho CAD, conciencia situacional GIS (K-Safety), gestion de trafico (K-Traffic) y video comunitario (K-Connect) en una sola plataforma.'
              : 'The KabatOne platform, for example, integrates video management (K-Video), CAD dispatch, GIS situational awareness (K-Safety), traffic management (K-Traffic), and community video (K-Connect) into a single platform.'}
            {' '}
            <Link href="/k-safety" style={{ color: ACCENT, textDecoration: 'none', fontWeight: 500 }}>
              {es ? 'Conoce K-Safety' : 'Learn about K-Safety'}
            </Link>
          </p>
        </section>

        {/* How to Evaluate a Smart City Platform */}
        <section style={{ maxWidth: '880px', margin: '0 auto', padding: '0 24px 56px' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '20px', borderLeft: `4px solid ${ACCENT}`, paddingLeft: '16px' }}>
            {es ? '¿Como Evaluar una Plataforma de Ciudad Inteligente?' : 'How to Evaluate a Smart City Platform'}
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--dim)', marginBottom: '24px' }}>
            {es
              ? 'La seleccion de una plataforma de ciudad inteligente requiere evaluar cinco criterios tecnicos fundamentales. Cada criterio impacta directamente la capacidad de la plataforma para operar a escala urbana.'
              : 'Selecting a smart city platform requires evaluating five fundamental technical criteria. Each criterion directly impacts the platform\'s ability to operate at urban scale.'}
          </p>

          <div style={{ display: 'grid', gap: '24px' }}>
            {[
              {
                title: es ? 'Escalabilidad' : 'Scalability',
                desc: es
                  ? 'La plataforma debe escalar desde una ciudad de 50,000 habitantes hasta una metropolis de 10 millones sin cambios arquitectonicos. Los indicadores clave incluyen: numero maximo de sensores concurrentes, numero de flujos de video simultaneos y eventos procesados por segundo. Las plataformas de nivel empresarial soportan mas de 50,000 dispositivos conectados simultaneamente.'
                  : 'The platform must scale from a city of 50,000 residents to a metropolis of 10 million without architectural changes. Key indicators include: maximum concurrent sensors, simultaneous video streams, and events processed per second. Enterprise-grade platforms support more than 50,000 simultaneously connected devices.',
              },
              {
                title: es ? 'Capacidades de Integracion' : 'Integration Capabilities',
                desc: es
                  ? 'La plataforma debe ofrecer APIs abiertas, conectores estandar (ONVIF, NTCIP, CAP) y SDKs para integraciones personalizadas. La compatibilidad con protocolos abiertos garantiza que la infraestructura existente — camaras, sensores y controladores de cualquier fabricante — se integre sin reemplazo de hardware.'
                  : 'The platform must offer open APIs, standard connectors (ONVIF, NTCIP, CAP), and SDKs for custom integrations. Compatibility with open protocols ensures that existing infrastructure — cameras, sensors, and controllers from any manufacturer — integrates without hardware replacement.',
              },
              {
                title: es ? 'Procesamiento en Tiempo Real' : 'Real-Time Processing',
                desc: es
                  ? 'La latencia maxima aceptable para alertas criticas es de 2 segundos desde la deteccion del evento hasta la notificacion del operador. La plataforma debe procesar flujos de video, datos de sensores y eventos CAD simultaneamente sin degradacion del rendimiento. El procesamiento en el borde (edge computing) reduce la latencia para aplicaciones criticas.'
                  : 'Maximum acceptable latency for critical alerts is 2 seconds from event detection to operator notification. The platform must process video streams, sensor data, and CAD events simultaneously without performance degradation. Edge computing reduces latency for time-critical applications.',
              },
              {
                title: es ? 'Soporte Multiagencia' : 'Multi-Agency Support',
                desc: es
                  ? 'Las operaciones de ciudad inteligente involucran policia, bomberos, proteccion civil, departamentos de transito y servicios de salud. La plataforma debe soportar permisos granulares por agencia, flujos de trabajo compartidos entre agencias y protocolos de escalacion automatica. La coordinacion multiagencia reduce tiempos de respuesta en incidentes complejos hasta en un 60%.'
                  : 'Smart city operations involve police, fire, civil protection, transit departments, and health services. The platform must support granular per-agency permissions, shared cross-agency workflows, and automatic escalation protocols. Multi-agency coordination reduces response times in complex incidents by up to 60%.',
              },
              {
                title: es ? 'Cobertura Geografica' : 'Geographic Coverage',
                desc: es
                  ? 'La plataforma debe soportar despliegues multisite con gestion centralizada. Una ciudad capital puede requerir un centro de mando principal con centros regionales secundarios, cada uno con autonomia operativa pero visibilidad centralizada. El GIS integrado debe soportar multiples capas: crimenes, trafico, sensores, unidades y zonas de riesgo.'
                  : 'The platform must support multi-site deployments with centralized management. A capital city may require a main command center with secondary regional centers, each with operational autonomy but centralized visibility. Integrated GIS must support multiple layers: crimes, traffic, sensors, units, and risk zones.',
              },
            ].map((item, i) => (
              <div key={i} style={{ background: 'var(--bg-2)', borderRadius: '12px', padding: '24px', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', color: 'var(--white)' }}>{item.title}</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--dim)', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Real-World Smart City Deployments */}
        <section style={{ maxWidth: '880px', margin: '0 auto', padding: '0 24px 56px' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '20px', borderLeft: `4px solid ${ACCENT}`, paddingLeft: '16px' }}>
            {es ? 'Despliegues Reales de Ciudades Inteligentes' : 'Real-World Smart City Deployments'}
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--dim)', marginBottom: '16px' }}>
            {es
              ? 'KabatOne opera en mas de 40 ciudades de America Latina y Estados Unidos, protegiendo a 73 millones de ciudadanos. La plataforma K1 de KabatOne integra K-Safety, K-Video, K-Traffic, K-Connect y K-Dispatch en despliegues que van desde municipios de 100,000 habitantes hasta estados completos con poblaciones superiores a 8 millones.'
              : 'KabatOne operates in more than 40 cities across Latin America and the United States, protecting 73 million citizens. The KabatOne K1 platform integrates K-Safety, K-Video, K-Traffic, K-Connect, and K-Dispatch in deployments ranging from municipalities of 100,000 residents to entire states with populations exceeding 8 million.'}
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--dim)', marginBottom: '16px' }}>
            {es
              ? 'En Jalisco, Mexico, la plataforma KabatOne conecta mas de 35,000 camaras, cientos de sensores IoT y multiples agencias de seguridad publica en un centro de mando estatal que opera las 24 horas. El despliegue redujo los tiempos de respuesta a emergencias en un 40% y proporciona cobertura de conciencia situacional en tiempo real para todo el estado.'
              : 'In Jalisco, Mexico, the KabatOne platform connects over 35,000 cameras, hundreds of IoT sensors, and multiple public safety agencies into a state-level command center that operates 24/7. The deployment reduced emergency response times by 40% and provides real-time situational awareness coverage across the entire state.'}
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--dim)' }}>
            {es
              ? 'A nivel global, ciudades como Singapur han invertido mas de 2,400 millones de dolares en infraestructura de ciudad inteligente. Barcelona redujo el consumo de agua en un 25% mediante sensores IoT de riego inteligente. Seul procesa mas de 30 millones de eventos urbanos por dia a traves de su plataforma integrada. Estos despliegues demuestran que las plataformas de ciudad inteligente generan retorno medible en eficiencia operativa, seguridad publica y calidad de vida urbana.'
              : 'Globally, cities like Singapore have invested over $2.4 billion in smart city infrastructure. Barcelona reduced water consumption by 25% through smart irrigation IoT sensors. Seoul processes more than 30 million urban events per day through its integrated platform. These deployments demonstrate that smart city platforms deliver measurable returns in operational efficiency, public safety, and urban quality of life.'}
          </p>
        </section>

        {/* FAQ Section */}
        <section style={{ maxWidth: '880px', margin: '0 auto', padding: '0 24px 64px' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '32px', borderLeft: `4px solid ${ACCENT}`, paddingLeft: '16px' }}>
            {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
          </h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            {faqs.map((faq, i) => (
              <details
                key={i}
                style={{ background: 'var(--bg-2)', borderRadius: '12px', border: '1px solid var(--border)', overflow: 'hidden' }}
              >
                <summary style={{ padding: '20px 24px', cursor: 'pointer', fontSize: '16px', fontWeight: 600, color: 'var(--white)', listStyle: 'none' }}>
                  <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {faq.question}
                    <span style={{ color: ACCENT, fontSize: '20px', flexShrink: 0, marginLeft: '16px' }}>+</span>
                  </span>
                </summary>
                <div style={{ padding: '0 24px 20px', fontSize: '15px', lineHeight: 1.7, color: 'var(--dim)' }}>
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* RELATED ARTICLES */}
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
              <Link href="/resources/public-safety-software-municipalities-mexico" style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 20px', borderRadius: '8px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px',
              }}>
                <span>{es ? 'Software de seguridad pública para México' : 'Public Safety Software for Mexico'}</span>
                <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          es={es}
          h2={es ? '¿Listo para Implementar una Plataforma de Ciudad Inteligente?' : 'Ready to Deploy a Smart City Platform?'}
          subtitle={es
            ? 'Agenda una demo con el equipo de KabatOne y descubre como la plataforma K1 puede unificar las operaciones de tu ciudad.'
            : 'Schedule a demo with the KabatOne team and discover how the K1 platform can unify your city\'s operations.'}
        />
      </main>

      <Footer es={es} />

      <style>{`
        details summary::-webkit-details-marker { display: none; }
        details[open] summary span span:last-child { transform: rotate(45deg); }
        @media (max-width: 768px) {
          main section { padding-left: 16px !important; padding-right: 16px !important; }
          main header { padding-left: 16px !important; padding-right: 16px !important; }
          main nav { padding-left: 16px !important; padding-right: 16px !important; }
        }
      `}</style>
    </>
  )
}
