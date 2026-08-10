import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { softwareApplicationSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import HubDiagram from '@/components/HubDiagram'
import { Link } from '@/i18n/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('kDispatch', locale)
}

export default async function KDispatchPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#ef4444'

  const content = {
    eyebrow: es ? 'Despacho de Emergencias · K-Dispatch' : 'Emergency Dispatch · K-Dispatch',
    h1: es
      ? 'Software de Despacho 911 y Sistema CAD para Centros de Emergencias'
      : 'AI-Powered 911 CAD Dispatch Software for Emergency Centers',
    subtitle: es
      ? 'Plataforma de Despacho Asistida por Computadora (CAD) que optimiza la respuesta a emergencias, mejora la comunicación multiagencia y se integra con todas las tecnologías de seguridad pública.'
      : 'AI-powered Computer-Aided Dispatch (CAD) platform that streamlines emergency response, enhances multi-agency communication, and integrates seamlessly with all public safety technologies.',
    stat1: { value: es ? '+25,000' : '25,000+', label: es ? 'Llamadas Diarias' : 'Daily Calls' },
    stat2: { value: '5 min', label: es ? 'Tiempo de Respuesta' : 'Response Time' },
    stat3: { value: es ? '+100' : '100+', label: es ? 'Agencias' : 'Agencies' },
    cta1: es ? 'Solicita una Demo' : 'Book a Demo',
    cta2: es ? 'Habla con un Experto' : 'Talk to an Expert',
    benefitsLabel: es ? 'Por qué K-Dispatch' : 'Why K-Dispatch',
    benefitsH2: es ? 'Respuesta de Emergencias más Inteligente y Rápida' : 'Smarter, Faster Emergency Response',
    processH2: es ? 'Coordinación de Emergencias en Tiempo Real, Potenciada por IA' : 'Real-Time Emergency Coordination, Powered by AI',
    aiH2: es ? 'Flujo de Trabajo con IA para Seguridad Pública' : 'AI-Driven Workflow for Public Safety & Mobility',
    intH2: es ? 'Mejora la Respuesta con Integraciones Perfectas' : 'Enhance Emergency Response with Seamless Integrations',
    caseTag: es ? 'Caso de Éxito' : 'Case Study',
    caseH2: es
      ? 'C5CDMX: Transformando la Respuesta de Emergencias en México'
      : 'C5CDMX: Transforming Emergency Response in Mexico',
    caseBody: es
      ? 'Sirviendo a más de 22 millones de personas a través de 500+ operadores, K-Dispatch impulsa el mayor centro 911 de México con coordinación potenciada por IA en más de 100 agencias.'
      : 'Serving over 22 million people through 500+ operators, K-Dispatch powers Mexico\'s largest 911 center with AI-driven coordination across 100+ agencies — cutting response times and dramatically increasing dispatch efficiency.',
    ctaH2: es ? '¿Listo para Transformar la Respuesta de Emergencias?' : 'Ready to Transform Emergency Response?',
    ctaSub: es
      ? 'Descubre cómo K-Dispatch puede modernizar tu centro 911 y salvar más vidas.'
      : 'See how K-Dispatch can modernize your 911 center and save more lives.',
    ctaContact: es ? 'Contactar Ventas' : 'Contact Sales',
  }

  const benefitIcons = ['⚡', '🔗', '🤖', '📡', '📞']

  const benefits = es ? [
    { title: 'Optimización del Servicio', desc: 'Acelera la toma de llamadas y los flujos de despacho, reduciendo tiempos de respuesta al automatizar tareas rutinarias.' },
    { title: 'Integraciones Perfectas', desc: 'Se conecta con las principales tecnologías de seguridad pública: radio, GIS, VMS, aplicaciones móviles.' },
    { title: 'Gestión de Incidentes con IA', desc: 'Aprovecha la inteligencia en tiempo real para recomendar acciones de despacho óptimas y predecir la escalada de incidentes.' },
    { title: 'Escalable y Flexible', desc: 'Personalizable para ciudades, agencias estatales e infraestructura nacional. Nube o instalación local.' },
    { title: 'Capacidades 911 Integradas', desc: 'Manejo multicanal (voz, texto-a-911, multimedia), mapeo GIS y gestión completa del ciclo de vida de incidentes.' },
  ] : [
    { title: 'Service Optimization', desc: 'Accelerates call-taking and dispatch workflows, reducing response times by automating routine tasks.' },
    { title: 'Seamless Integrations', desc: 'Connects with leading public safety technologies — radio, GIS, VMS, mobile responder apps.' },
    { title: 'AI-Enhanced Incident Management', desc: 'Leverages real-time intelligence to recommend optimal dispatch actions and predict incident escalation.' },
    { title: 'Scalable & Flexible', desc: 'Customizable for cities, state agencies, and national infrastructure. Cloud or on-premises.' },
    { title: 'Built-In 911 Capabilities', desc: 'Multi-channel call handling (voice, text-to-911, multimedia), GIS mapping, and full incident lifecycle management.' },
  ]

  const aiCards = es ? [
    { title: 'Recolección e Integración de Datos', desc: 'Agrega datos en tiempo real de centros 911, sensores, AVL y unidades de campo.', icon: '📥' },
    { title: 'Gestión y Respuesta a Incidentes', desc: 'La IA clasifica incidentes, asigna prioridad y recomienda la respuesta óptima.', icon: '🚨' },
    { title: 'Análisis Potenciado por IA', desc: 'Analiza patrones, predice escalada y optimiza el enrutamiento de despacho.', icon: '🤖' },
    { title: 'Información Post-Incidente', desc: 'Genera informes de acción posterior y retroalimenta los aprendizajes al modelo de IA.', icon: '📊' },
  ] : [
    { title: 'Data Collection & Integration', desc: 'Aggregates real-time data from 911 centers, sensors, AVL, and field units.', icon: '📥' },
    { title: 'Incident Management & Response', desc: 'AI triages incidents, assigns priority, and recommends optimal response.', icon: '🚨' },
    { title: 'AI-Powered Analysis', desc: 'Analyzes patterns, predicts escalation, and optimizes dispatch routing.', icon: '🤖' },
    { title: 'Post-Incident Insights', desc: 'Generates after-action reports and feeds learnings back to the AI model.', icon: '📊' },
  ]

  const integrations = es ? [
    { title: 'IA y Analítica de Video', desc: 'Reconocimiento facial, LPR, detección de disparos, feeds de drones.' },
    { title: 'Manejo de Llamadas de Emergencia', desc: 'Voz 911, texto-a-911, mensajería multimedia de emergencia.' },
    { title: 'Seguimiento Geoespacial', desc: 'Seguimiento de vehículos AVL, mapas GIS, coordinación de drones.' },
    { title: 'Comunicación Multiagencia', desc: 'Interoperabilidad de radio, aplicaciones móviles, enlaces de mando a campo.' },
    { title: 'Ciudad Inteligente e IoT', desc: 'Sensores de tráfico, datos ambientales, feeds de infraestructura inteligente.' },
  ] : [
    { title: 'AI and Video Analytics', desc: 'Facial recognition, LPR, gunshot detection, drone feeds.' },
    { title: 'Emergency Call Handling', desc: 'Voice 911, text-to-911, multimedia emergency messaging.' },
    { title: 'Geospatial Tracking', desc: 'AVL vehicle tracking, GIS maps, drone coordination.' },
    { title: 'Multi-Agency Communication', desc: 'Radio interoperability, mobile apps, command-to-field links.' },
    { title: 'Smart City & IoT Data', desc: 'Traffic sensors, environmental data, smart infrastructure feeds.' },
  ]

  const processInputs = es
    ? ['Llamadas de Voz', 'SMS / Texto', 'Unidades de Campo', 'Alertas IoT', 'App Móvil']
    : ['Voice Calls', 'SMS / Text', 'Field Units', 'IoT Alerts', 'Mobile App']
  const processOutputs = es
    ? ['Respondedores', 'Coordinación', 'Análisis']
    : ['Responders', 'Coordination', 'Analytics']

  const dispatchFaqs = es ? [
    { question: '¿Qué es K-Dispatch?', answer: 'K-Dispatch es una plataforma de Despacho Asistido por Computadora (CAD) potenciada por IA que optimiza la respuesta a emergencias, mejora la comunicación multiagencia y se integra con todas las tecnologías de seguridad pública.' },
    { question: '¿Cómo maneja K-Dispatch las llamadas al 911?', answer: 'K-Dispatch integra llamadas de voz 911, texto-a-911 y mensajería multimedia de emergencia. El sistema clasifica automáticamente los incidentes, asigna prioridad y recomienda la respuesta óptima utilizando inteligencia artificial.' },
    { question: '¿Con qué sistemas se integra K-Dispatch?', answer: 'K-Dispatch se conecta con las principales tecnologías de seguridad pública incluyendo sistemas de radio, GIS, VMS, aplicaciones móviles de respondedores, reconocimiento facial, LPR, detección de disparos y feeds de drones.' },
    { question: '¿Es K-Dispatch adecuado para despacho multiagencia?', answer: 'Sí. K-Dispatch está diseñado para coordinación multiagencia, conectando policía, bomberos, servicios médicos y tránsito en una sola plataforma. Actualmente impulsa el centro 911 más grande de México con más de 100 agencias conectadas.' },
    { question: '¿Qué diferencia a K-Dispatch de los sistemas CAD tradicionales?', answer: 'K-Dispatch utiliza IA para clasificar incidentes automáticamente, predecir escalaciones y optimizar el enrutamiento de despacho. Gestiona más de 25,000 llamadas diarias con un tiempo promedio de respuesta de 5 minutos, superando significativamente a los sistemas CAD heredados.' },
    { question: '¿K-Dispatch funciona con nuestros sistemas de radio y RMS existentes?', answer: 'Si. K-Dispatch se integra con todos los principales sistemas de radio (P25, TETRA, DMR) y Sistemas de Gestion de Registros. La plataforma usa APIs abiertas y protocolos estandar (CAP, NIEM, NENA i3) para conectarse con su infraestructura existente sin requerir un reemplazo completo.' },
    { question: '¿Cuanto tiempo toma implementar K-Dispatch?', answer: 'Una implementacion tipica toma de 8 a 16 semanas dependiendo del numero de agencias, complejidad de integraciones y requisitos de capacitacion. KabatOne ofrece un despliegue por fases con operacion en paralelo para que su CAD existente continue funcionando hasta completar la transicion.' },
    { question: '¿K-Dispatch soporta despliegue en la nube?', answer: 'K-Dispatch soporta modelos de despliegue en la nube, en sitio e hibrido. Los despliegues en la nube usan centros de datos redundantes con SLA de 99.99% de disponibilidad. Los despliegues en sitio estan disponibles para agencias con requisitos estrictos de soberania de datos, comun en entornos gubernamentales y militares.' },
  ] : [
    { question: 'What is K-Dispatch?', answer: 'K-Dispatch is an AI-powered Computer-Aided Dispatch (CAD) platform that streamlines emergency response, enhances multi-agency communication, and integrates seamlessly with all public safety technologies.' },
    { question: 'How does K-Dispatch handle 911 calls?', answer: 'K-Dispatch integrates voice 911, text-to-911, and multimedia emergency messaging. The system automatically triages incidents, assigns priority, and recommends optimal response using artificial intelligence.' },
    { question: 'What systems does K-Dispatch integrate with?', answer: 'K-Dispatch connects with leading public safety technologies including radio systems, GIS, VMS, mobile responder apps, facial recognition, LPR, gunshot detection, and drone feeds.' },
    { question: 'Is K-Dispatch suitable for multi-agency dispatch?', answer: 'Yes. K-Dispatch is built for multi-agency coordination, connecting police, fire, medical, and traffic departments on a single platform. It currently powers Mexico\'s largest 911 center with 100+ connected agencies.' },
    { question: 'What makes K-Dispatch different from legacy CAD systems?', answer: 'K-Dispatch uses AI to automatically triage incidents, predict escalations, and optimize dispatch routing. It handles 25,000+ daily calls with a 5-minute average response time, significantly outperforming legacy CAD systems.' },
    { question: 'Can K-Dispatch work with our existing radio and RMS systems?', answer: 'Yes. K-Dispatch integrates with all major radio systems (P25, TETRA, DMR) and Records Management Systems. The platform uses open APIs and standard protocols (CAP, NIEM, NENA i3) to connect with your existing infrastructure without requiring a full replacement.' },
    { question: 'How long does it take to deploy K-Dispatch?', answer: 'A typical deployment takes 8 to 16 weeks depending on the number of agencies, integration complexity, and training requirements. KabatOne provides a phased rollout with parallel operation so your existing CAD continues running until the transition is complete.' },
    { question: 'Does K-Dispatch support cloud deployment?', answer: 'K-Dispatch supports cloud, on-premises, and hybrid deployment models. Cloud deployments use redundant data centers with 99.99% uptime SLA. On-premises deployments are available for agencies with strict data sovereignty requirements, common in government and military environments.' },
  ]

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es' : 'https://kabatone.com/' },
    { name: 'K-Dispatch', url: es ? 'https://kabatone.com/es/k-dispatch' : 'https://kabatone.com/k-dispatch' },
  ]

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema(
          'K-Dispatch',
          es ? 'Plataforma de Despacho Asistida por Computadora (CAD) potenciada por IA que optimiza la respuesta a emergencias y la comunicación multiagencia.' : 'AI-powered Computer-Aided Dispatch (CAD) platform that streamlines emergency response and multi-agency communication.',
          'Computer-Aided Dispatch (CAD)',
          'https://kabatone.com/k-dispatch'
        )) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(dispatchFaqs)) }}
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
              <span style={{ display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%', background: ACCENT, marginRight: '8px', verticalAlign: 'middle', animation: 'pulse 2s infinite' }} />
              {content.eyebrow}
            </p>
            <h1 style={{ fontSize: 'clamp(38px, 4.5vw, 60px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '0.01em', marginBottom: '24px', fontFamily: 'Barlow Condensed, sans-serif' }}>
              {content.h1}
            </h1>
            <p style={{ fontSize: '17px', fontWeight: 300, lineHeight: 1.75, color: 'var(--dim)', marginBottom: '40px' }}>
              {content.subtitle}
            </p>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '32px', marginBottom: '40px' }}>
              {[content.stat1, content.stat2, content.stat3].map((s, i) => (
                <div key={i} style={{ borderLeft: i > 0 ? '1px solid var(--border)' : 'none', paddingLeft: i > 0 ? '32px' : 0 }}>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: ACCENT, fontFamily: 'Barlow Condensed, sans-serif' }}>{s.value}</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                background: 'var(--blue)', color: '#fff', padding: '14px 28px',
                borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px',
                boxShadow: '0 0 24px rgba(59,130,246,0.4)',
              }}>{content.cta1}</Link>
            </div>
          </div>

          {/* CAD Mockup */}
          <div style={{
            background: '#0b1628', borderRadius: '16px', border: '1px solid var(--border-b)',
            overflow: 'hidden', boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
          }}>
            <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--white)' }}>K-Dispatch CAD</span>
              <span style={{ fontSize: '10px', fontWeight: 700, background: ACCENT, color: '#fff', padding: '2px 8px', borderRadius: '4px', letterSpacing: '0.1em' }}>LIVE</span>
            </div>
            <div style={{ padding: '0 20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '8px', padding: '10px 0', borderBottom: '1px solid var(--border)', fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                <span>Incident</span><span>Status</span><span>Priority</span>
              </div>
              {[
                { id: 'CAD-9104', name: es ? 'Incendio Estructural · Sector 3-A' : 'Structure Fire · Sector 3-A', status: es ? 'Despachado' : 'Dispatched', priority: es ? 'Alta' : 'High', dot: '#ef4444' },
                { id: 'CAD-9105', name: es ? 'Emergencia Médica · Zona 7' : 'Medical Emergency · Zone 7', status: es ? 'Pendiente' : 'Pending', priority: es ? 'Media' : 'Medium', dot: '#f97316' },
                { id: 'CAD-9103', name: es ? 'Incidente de Tráfico · Hwy 45' : 'Traffic Incident · Hwy 45', status: es ? 'Despachado' : 'Dispatched', priority: es ? 'Baja' : 'Low', dot: '#3b82f6' },
                { id: 'CAD-9102', name: es ? 'Alarma Verificada · Distrito 2' : 'Alarm Verified · District 2', status: es ? 'Resuelto' : 'Resolved', priority: es ? 'Resuelto' : 'Resolved', dot: '#22c55e' },
              ].map((row) => (
                <div key={row.id} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '8px', padding: '10px 0', borderBottom: '1px solid var(--border)', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--white)' }}>{row.name}</div>
                    <div style={{ fontSize: '10px', color: 'var(--muted)', fontFamily: 'monospace' }}>#{row.id}</div>
                  </div>
                  <span style={{ fontSize: '10px', fontWeight: 600, color: row.dot, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{row.status}</span>
                  <span style={{ fontSize: '10px', background: `${row.dot}22`, color: row.dot, padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>{row.priority}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: '12px 20px', display: 'flex', gap: '20px' }}>
              <span style={{ fontSize: '11px', color: ACCENT, fontWeight: 600 }}>● 847 {es ? 'Llamadas en Vivo' : 'Live Calls'}</span>
              <span style={{ fontSize: '11px', color: 'var(--muted)' }}>214 {es ? 'Unidades Activas' : 'Active Units'}</span>
              <span style={{ fontSize: '11px', color: '#22c55e' }}>4:52 {es ? 'Prom. Despacho' : 'Avg Dispatch'}</span>
            </div>
          </div>
        </section>

        {/* ── DIRECT ANSWER STRIP ── */}
        <section style={{ padding: '48px 40px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'rgba(239,68,68,0.03)' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <p style={{ fontSize: '17px', color: 'var(--dim)', lineHeight: 1.8, marginBottom: '16px' }}>
              {es
                ? 'K-Dispatch es un software de despacho asistido por computadora (CAD) que centraliza las llamadas de emergencia 911, clasifica incidentes con IA, asigna las unidades más cercanas vía GPS, y coordina la respuesta entre policía, bomberos, paramédicos y otras agencias en una sola plataforma. Actualmente opera el centro 911 más grande de México (C5 CDMX) con más de 500 operadores y 100+ agencias coordinadas.'
                : 'K-Dispatch is a computer-aided dispatch (CAD) software that centralizes 911 emergency calls, classifies incidents with AI, assigns the nearest units via GPS, and coordinates the response between police, fire, EMS, and other agencies on a single platform. It currently powers Mexico\'s largest 911 center (C5 CDMX) with 500+ operators and 100+ coordinated agencies.'}
            </p>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {(es ? [
                { label: 'Tiempo de despacho', value: '5 min promedio' },
                { label: 'Multiagencia', value: '100+ agencias en una plataforma' },
                { label: 'Despliegue', value: 'Nube, local o híbrido' },
              ] : [
                { label: 'Dispatch time', value: '5 min average' },
                { label: 'Multi-agency', value: '100+ agencies on one platform' },
                { label: 'Deployment', value: 'Cloud, on-prem, or hybrid' },
              ]).map((item, i) => (
                <div key={i} style={{ flex: '1 1 200px' }}>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--white)' }}>{item.value}</div>
                </div>
              ))}
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
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: `${ACCENT}18`, border: `1px solid ${ACCENT}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', marginBottom: '16px' }}>{benefitIcons[i]}</div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', letterSpacing: '0.02em', color: 'var(--white)', marginBottom: '10px' }}>{b.title}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.65 }}>{b.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '20px' }}>
              {benefits.slice(3).map((b, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border)', borderTop: `2px solid ${ACCENT}`, padding: '28px 24px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: `${ACCENT}18`, border: `1px solid ${ACCENT}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', marginBottom: '16px' }}>{benefitIcons[i + 3]}</div>
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
              uid="kd"
              product="K-DISPATCH"
              tagline="RECEIVE · TRIAGE · DISPATCH"
              inputs={[
                { label: 'Voice Calls',  pillW: 100, icon: <><path d="M-10,4 C-10,-4 -4,-10 4,-10 L4,-4 L0,-2 C0,-2 2,0 4,4 L8,2 L8,8 C8,8 2,10 -2,6 Z"/></> },
                { label: 'SMS / Text',   pillW: 88,  icon: <><rect x="-12" y="-12" width="24" height="18" rx="3"/><polyline points="-4,6 -4,13 0,10 4,13 4,6"/><line x1="-6" y1="-5" x2="6" y2="-5"/><line x1="-6" y1="0" x2="3" y2="0"/></> },
                { label: 'Field Units',  pillW: 92,  icon: <><circle cx="0" cy="-10" r="5"/><path d="M-10,13 L-8,2 C-8,2 -2,-2 8,2 L10,13"/><line x1="-4" y1="5" x2="4" y2="5"/></> },
                { label: 'IoT Alerts',   pillW: 92,  icon: <><circle cx="0" cy="3" r="4.5" fill="#60a5fa" stroke="none"/><path d="M-9,-6 A13,13 0 0,1 9,-6"/><path d="M-14,-12 A20,20 0 0,1 14,-12"/><line x1="0" y1="7.5" x2="0" y2="13"/><line x1="-4" y1="13" x2="4" y2="13"/></> },
                { label: 'Mobile App',   pillW: 100, icon: <><rect x="-7" y="-13" width="14" height="26" rx="3"/><line x1="-2" y1="-8" x2="2" y2="-8"/><circle cx="0" cy="9" r="2" fill="#60a5fa" stroke="none"/></> },
              ]}
              outputs={[
                { label: 'Responders',   pillW: 110, icon: <><circle cx="0" cy="-10" r="5"/><path d="M-10,13 L-8,2 C-8,2 -2,-2 8,2 L10,13"/><line x1="-13" y1="-4" x2="-18" y2="4"/><line x1="13" y1="-4" x2="18" y2="4"/></> },
                { label: 'Coordination', pillW: 110, icon: <><circle cx="0" cy="0" r="5"/><circle cx="-14" cy="-8" r="3"/><circle cx="14" cy="-8" r="3"/><circle cx="0" cy="15" r="3"/><line x1="-11" y1="-6" x2="-4" y2="-2"/><line x1="11" y1="-6" x2="4" y2="-2"/><line x1="0" y1="5" x2="0" y2="12"/></> },
                { label: 'Analytics',    pillW: 82,  icon: <><rect x="-13" y="-13" width="26" height="26" rx="2"/><line x1="-8" y1="6" x2="-8" y2="-2"/><line x1="-2" y1="6" x2="-2" y2="-6"/><line x1="4" y1="6" x2="4" y2="0"/><line x1="10" y1="6" x2="10" y2="-8"/></> },
              ]}
            />
          </div>
        </section>

        {/* ── AI WORKFLOW ── */}
        <section style={{ background: 'var(--bg-2)', padding: '100px 40px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '48px', textAlign: 'center' }}>{content.aiH2}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              {aiCards.map((c, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border)', borderTop: `2px solid ${ACCENT}`, padding: '28px 24px', position: 'relative' }}>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', letterSpacing: '0.2em', color: ACCENT, marginBottom: '16px' }}>{String(i + 1).padStart(2, '0')}</div>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: `${ACCENT}18`, border: `1px solid ${ACCENT}33`, marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>{c.icon}</div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', letterSpacing: '0.03em', color: 'var(--white)', marginBottom: '10px' }}>{c.title}</h3>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.65 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTEGRATIONS ── */}
        <section style={{ padding: '100px 40px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '48px', textAlign: 'center' }}>{content.intH2}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {integrations.slice(0, 3).map((int, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border)', borderTop: `2px solid ${ACCENT}`, padding: '28px 24px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--white)', marginBottom: '10px' }}>{int.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 1.65 }}>{int.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '20px' }}>
              {integrations.slice(3).map((int, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border)', borderTop: `2px solid ${ACCENT}`, padding: '28px 24px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--white)', marginBottom: '10px' }}>{int.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 1.65 }}>{int.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section style={{ padding: '100px 40px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--cyan)', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--cyan)', boxShadow: '0 0 8px var(--cyan)', display: 'inline-block' }}/>
              {es ? 'Cómo Funciona' : 'How It Works'}
            </p>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '32px' }}>
              {es ? 'Del Primer Tono al Despacho: El Flujo Completo' : 'From First Ring to Dispatch: The Complete Workflow'}
            </h2>
            <div style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p>
                {es
                  ? 'Cuando una llamada 911 ingresa al centro de comando, K-Dispatch la captura inmediatamente — ya sea voz, texto-a-911 o alerta automatizada de sensores IoT. El sistema extrae la ubicación del llamante mediante Enhanced 911 (E911) y la posiciona en el mapa GIS en tiempo real. Simultáneamente, el motor de IA clasifica el tipo de incidente (incendio, emergencia médica, delito en progreso, accidente vial) y asigna un nivel de prioridad basado en protocolos configurables por la agencia.'
                  : 'When a 911 call enters the command center, K-Dispatch captures it immediately — whether voice, text-to-911, or an automated IoT sensor alert. The system extracts the caller\'s location via Enhanced 911 (E911) and plots it on the live GIS map. Simultaneously, the AI engine classifies the incident type (fire, medical emergency, crime in progress, traffic collision) and assigns a priority level based on agency-configurable protocols.'}
              </p>
              <p>
                {es
                  ? 'El despachador ve una recomendación de unidades en pantalla: qué patrullas, ambulancias o unidades de bomberos están más cerca, cuáles están disponibles y cuál es la ruta óptima considerando tráfico en tiempo real. Con un clic, el despacho se ejecuta — la unidad recibe la notificación en su app móvil con toda la información del incidente, video de cámaras cercanas (vía K-Video) y el historial de la dirección.'
                  : 'The dispatcher sees an on-screen unit recommendation: which patrol cars, ambulances, or fire units are closest, which are available, and what the optimal route is given real-time traffic. One click executes the dispatch — the unit receives a mobile app notification with full incident details, nearby camera feeds (via K-Video), and address history.'}
              </p>
              <p>
                {es
                  ? 'Durante todo el incidente, K-Dispatch mantiene una línea de tiempo auditable: cada cambio de estado, cada comunicación, cada decisión. Cuando participan múltiples agencias — policía, bomberos, paramédicos, tránsito — el sistema coordina automáticamente las frecuencias de radio y los canales de comunicación. Al cerrar el incidente, se genera un informe de acción posterior que alimenta el modelo predictivo para mejorar tiempos de respuesta futuros.'
                  : 'Throughout the incident, K-Dispatch maintains an auditable timeline: every status change, every communication, every decision. When multiple agencies are involved — police, fire, EMS, traffic — the system automatically coordinates radio frequencies and communication channels. Upon incident closure, an after-action report is generated that feeds the predictive model to improve future response times.'}
              </p>
            </div>
          </div>
        </section>

        {/* ── DEPLOYMENT SCENARIOS ── */}
        <section style={{ background: 'var(--bg-2)', padding: '100px 40px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: ACCENT, marginBottom: '18px' }}>
              {es ? 'Escenarios de Implementación' : 'Deployment Scenarios'}
            </p>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '48px' }}>
              {es ? 'Configurado para Tu Operación' : 'Configured for Your Operation'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              {(es ? [
                { title: 'Centro 911 Centralizado', desc: 'Un solo centro atiende todas las llamadas de emergencia de una ciudad o región. K-Dispatch unifica la toma de llamadas, despacho, y coordinación multiagencia en una interfaz. Ideal para municipios de 100K a 25M de habitantes.' },
                { title: 'Centro de Comando C4/C5', desc: 'Los centros de Comando, Control, Comunicaciones, Cómputo y Calidad requieren integración profunda con video, GIS, radio y analítica. K-Dispatch es el módulo de despacho dentro de la plataforma K-Safety, conectando todos los subsistemas del C5.' },
                { title: 'Despacho Multijurisdiccional', desc: 'Cuando múltiples municipios o condados comparten un centro de despacho, K-Dispatch gestiona jurisdicciones separadas con protocolos distintos, unidades independientes y reportería por agencia — todo desde una sola instalación.' },
                { title: 'Campus y Aeropuertos', desc: 'Universidades, aeropuertos e instalaciones críticas requieren despacho interno coordinado con servicios externos. K-Dispatch maneja zonas geofenceadas, protocolos de escalación personalizados y comunicación directa con el 911 municipal.' },
              ] : [
                { title: 'Centralized 911 Center', desc: 'A single center handles all emergency calls for a city or region. K-Dispatch unifies call-taking, dispatch, and multi-agency coordination in one interface. Ideal for municipalities from 100K to 25M residents.' },
                { title: 'C4/C5 Command Center', desc: 'Command, Control, Communications, Computing, and Quality centers require deep integration with video, GIS, radio, and analytics. K-Dispatch is the dispatch module within the K-Safety platform, connecting all C5 subsystems.' },
                { title: 'Multi-Jurisdiction Dispatch', desc: 'When multiple municipalities or counties share a dispatch center, K-Dispatch manages separate jurisdictions with distinct protocols, independent units, and per-agency reporting — all from a single installation.' },
                { title: 'Campus & Airport Security', desc: 'Universities, airports, and critical facilities need internal dispatch coordinated with external services. K-Dispatch handles geofenced zones, custom escalation protocols, and direct communication with municipal 911.' },
              ]).map((scenario, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border)', padding: '28px 24px' }}>
                  <div style={{ fontSize: '13px', fontFamily: 'DM Mono, monospace', color: ACCENT, letterSpacing: '0.15em', marginBottom: '12px' }}>{String(i + 1).padStart(2, '0')}</div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', letterSpacing: '0.02em', color: 'var(--white)', marginBottom: '12px' }}>{scenario.title}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7 }}>{scenario.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASE STUDY ── */}
        <section style={{ background: 'var(--bg-2)', padding: '100px 40px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: ACCENT, border: `1px solid ${ACCENT}55`, borderRadius: '4px', padding: '4px 12px' }}>{content.caseTag}</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', marginTop: '24px', marginBottom: '24px' }}>{content.caseH2}</h2>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '48px', maxWidth: '700px', margin: '0 auto 48px' }}>{content.caseBody}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              {[
                { value: '25,000+', label: es ? 'Llamadas diarias gestionadas' : 'Daily calls managed' },
                { value: '5 min', label: es ? 'Tiempo promedio de respuesta' : 'Avg response time' },
                { value: '100+', label: es ? 'Agencias conectadas' : 'Agencies connected' },
                { value: '6,000', label: es ? 'Despachos diarios' : 'Daily dispatches' },
              ].map((s, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '24px 16px' }}>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: ACCENT, fontFamily: 'Barlow Condensed, sans-serif' }}>{s.value}</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '6px' }}>{s.label}</div>
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
              <Link href="/resources/how-c5-command-centers-work" style={{
                display: 'block', padding: '20px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px', fontWeight: 400,
                transition: 'border-color 0.2s',
              }}>
                {es ? 'Cómo funcionan los centros C5' : 'How C5 Command Centers Work'}
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                  {es ? 'Guía de referencia →' : 'Reference guide →'}
                </span>
              </Link>
              <Link href="/resources/public-safety-software-municipalities-mexico" style={{
                display: 'block', padding: '20px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px', fontWeight: 400,
                transition: 'border-color 0.2s',
              }}>
                {es ? 'Software de seguridad pública para México' : 'Public Safety Software for Mexico'}
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                  {es ? 'Guía de referencia →' : 'Reference guide →'}
                </span>
              </Link>
              <Link href="/resources/911-call-center-software-guide" style={{
                display: 'block', padding: '20px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px', fontWeight: 400,
                transition: 'border-color 0.2s',
              }}>
                {es ? 'Guía de software para centros 911' : '911 call center software guide'}
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                  {es ? 'Guía de referencia →' : 'Reference guide →'}
                </span>
              </Link>
              <Link href="/resources/what-is-cad-dispatch-software" style={{
                display: 'block', padding: '20px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px', fontWeight: 400,
                transition: 'border-color 0.2s',
              }}>
                {es ? '¿Qué es el software CAD de despacho?' : 'What Is CAD Dispatch Software?'}
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                  {es ? 'Guía de referencia →' : 'Reference guide →'}
                </span>
              </Link>
              <Link href="/resources/best-cad-dispatch-software" style={{
                display: 'block', padding: '20px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px', fontWeight: 400,
                transition: 'border-color 0.2s',
              }}>
                {es ? 'Mejor software CAD en 2026' : 'Best CAD Dispatch Software in 2026'}
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                  {es ? 'Guía del comprador →' : 'Buyer\'s guide →'}
                </span>
              </Link>
              <Link href="/resources/cad-dispatch-software-latin-america" style={{
                display: 'block', padding: '20px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px', fontWeight: 400,
                transition: 'border-color 0.2s',
              }}>
                {es ? 'Software CAD para América Latina' : 'CAD Dispatch Software for Latin America'}
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                  {es ? 'Guía regional →' : 'Regional guide →'}
                </span>
              </Link>
              <Link href="/resources/what-is-emergency-dispatch-software" style={{
                display: 'block', padding: '20px 24px', borderRadius: '10px',
                border: '1px solid var(--border)', textDecoration: 'none',
                color: 'var(--dim)', fontSize: '15px', fontWeight: 400,
                transition: 'border-color 0.2s',
              }}>
                {es ? '¿Qué es el software de despacho de emergencias?' : 'What Is Emergency Dispatch Software?'}
                <span style={{ display: 'block', fontSize: '12px', color: 'var(--muted)', marginTop: '4px' }}>
                  {es ? 'Artículo educativo →' : 'Explainer article →'}
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
              <Link href="/industries/municipalities" style={{ fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none' }}>
                {es ? 'Municipios' : 'Municipalities'}
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '16px', marginTop: '12px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '13px', color: 'var(--muted)' }}>
                {es ? 'Integraciones:' : 'Integrations:'}
              </span>
              <Link href="/integrations/panic-buttons" style={{ fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none' }}>
                {es ? 'Botones de Pánico' : 'Panic Buttons'}
              </Link>
              <Link href="/integrations/sensor-fusion" style={{ fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none' }}>
                {es ? 'Fusión de Sensores' : 'Sensor Fusion'}
              </Link>
              <Link href="/integrations/lpr" style={{ fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none' }}>
                {es ? 'Reconocimiento de Placas (LPR)' : 'License Plate Recognition'}
              </Link>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section style={{ padding: '96px 32px', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--cyan)', marginBottom: '16px' }}>{es ? 'Comenzar' : 'Get Started'}</p>
          <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', marginBottom: '16px' }}>{content.ctaH2}</h2>
          <p style={{ fontSize: '16px', color: 'var(--dim)', marginBottom: '40px' }}>{content.ctaSub}</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ background: 'var(--blue)', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', boxShadow: '0 0 24px rgba(59,130,246,0.4)' }}>{content.cta1}</Link>
            <Link href="/contact" style={{ background: 'transparent', color: 'var(--white)', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px', border: '1px solid var(--border-b)' }}>{content.ctaContact}</Link>
          </div>
        </section>

        {/* Footer */}
        <Footer es={es} />

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
          @media (max-width: 768px) {
            section > div { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </>
  )
}
