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
  return generatePageMetadata('integrationFaceRecognition', locale)
}

export default async function FaceRecognitionIntegrationPage({
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
          question: '¿Cómo funciona el reconocimiento facial en seguridad pública?',
          answer:
            'El reconocimiento facial en seguridad pública funciona en dos modalidades: cotejo en tiempo real (compara rostros capturados por cámaras en vivo contra una base de datos de personas de interés) y cotejo forense (el investigador toma una imagen fija — foto de cámara de seguridad, captura de video — y la compara contra bases de datos para identificar al sujeto). KabatOne soporta ambas modalidades con controles de acceso separados, dado que las implicaciones operativas y legales son distintas.',
        },
        {
          question: '¿Cuál es la tasa de acierto y falsos positivos del sistema?',
          answer:
            'La precisión depende de la calidad de la imagen y las condiciones de captura. En condiciones de frente, iluminación adecuada y resolución mínima de 1MP, los sistemas modernos alcanzan tasas de identificación del 95%+ con tasas de falso positivo menores al 1%. Para cotejo en tiempo real — con cámaras en ángulo, iluminación variable y sujetos en movimiento — la precisión es menor. KabatOne aplica un proceso de confirmación de dos pasos: el sistema sugiere candidatos con porcentaje de confianza, y un analista humano toma la decisión final antes de cualquier acción operativa.',
        },
        {
          question: '¿El reconocimiento facial de KabatOne cumple con regulaciones de privacidad?',
          answer:
            'KabatOne diseña sus integraciones de reconocimiento facial con controles de privacidad por defecto: acceso restringido a roles autorizados, registro completo de auditoría de cada búsqueda, retención de datos configurable, y arquitectura que evita el almacenamiento masivo de biometría de personas sin alerta. El cumplimiento legal específico (CJIS en EE.UU., Ley General de Protección de Datos Personales en México) depende de la política de uso del organismo operador, no solo del software. KabatOne provee las herramientas técnicas de cumplimiento; el organismo define la política.',
        },
        {
          question: '¿Puede integrarse con bases de datos externas de personas buscadas?',
          answer:
            'Sí. KabatOne puede integrarse con bases de datos externas mediante API segura: registros AFIS (Automated Fingerprint Identification System) que incluyan datos faciales, listas de personas buscadas de agencias estatales o federales, y registros de personas desaparecidas. La integración se realiza mediante feeds programados o alertas en tiempo real, con protocolo de acceso cifrado y autenticado. Los datos de la base de datos externa nunca se almacenan localmente en los servidores de KabatOne — se consultan en tiempo real.',
        },
        {
          question: '¿Qué cámaras son necesarias para el reconocimiento facial?',
          answer:
            'No todas las cámaras de videovigilancia son adecuadas para reconocimiento facial. Se necesitan cámaras con resolución mínima de 2MP, campo de visión configurado para captura facial (no panorámica), ángulo de captura casi frontal (menos de 30° de desvío lateral), e iluminación adecuada para el rango de operación. Las cámaras PTZ pueden ser útiles para seguimiento activo, pero las mejores imágenes de reconocimiento facial se obtienen con cámaras fijas bien posicionadas en puntos de paso: torniquetes, puertas de acceso, corredores de tránsito peatonal.',
        },
        {
          question: '¿Cómo se protege contra el sesgo del algoritmo de reconocimiento facial?',
          answer:
            'Los sesgos algorítmicos en reconocimiento facial son un problema documentado, especialmente para ciertos grupos demográficos. KabatOne aborda esto en tres niveles: selección de motores de IA con baja tasa de sesgo demostrada en auditorías independientes, proceso obligatorio de confirmación humana antes de cualquier acción operativa (el sistema nunca actúa autónomamente), y reporte mensual de métricas de precisión por grupo demográfico para detección temprana de sesgos en producción. El reconocimiento facial en KabatOne es siempre una herramienta de investigación, no una herramienta de decisión autónoma.',
        },
      ]
    : [
        {
          question: 'How does facial recognition work in public safety?',
          answer:
            'Facial recognition in public safety works in two modes: real-time matching (comparing faces captured by live cameras against a database of persons of interest) and forensic matching (an investigator takes a still image — security camera photo, video capture — and compares it against databases to identify the subject). KabatOne supports both modes with separate access controls, given that the operational and legal implications differ.',
        },
        {
          question: 'What are the hit rate and false positive rates of the system?',
          answer:
            'Accuracy depends on image quality and capture conditions. Under front-facing conditions, adequate lighting, and minimum 1MP resolution, modern systems achieve identification rates of 95%+ with false positive rates below 1%. For real-time matching — with angled cameras, variable lighting, and subjects in motion — accuracy is lower. KabatOne applies a two-step confirmation process: the system suggests candidates with a confidence percentage, and a human analyst makes the final decision before any operational action.',
        },
        {
          question: 'Does KabatOne\'s facial recognition comply with privacy regulations?',
          answer:
            'KabatOne designs its facial recognition integrations with privacy-by-default controls: access restricted to authorized roles, complete audit trail of every query, configurable data retention, and an architecture that avoids mass storage of biometrics of persons without an alert. Specific legal compliance (CJIS in the US, data protection laws in Mexico) depends on the operating agency\'s use policy, not just the software. KabatOne provides the technical compliance tools; the agency defines the policy.',
        },
        {
          question: 'Can it integrate with external wanted persons databases?',
          answer:
            'Yes. KabatOne can integrate with external databases via secure API: AFIS (Automated Fingerprint Identification System) records that include facial data, wanted persons lists from state or federal agencies, and missing persons registries. Integration is via scheduled feeds or real-time alerts, with encrypted and authenticated access protocol. External database data is never stored locally on KabatOne servers — it is queried in real time.',
        },
        {
          question: 'What cameras are needed for facial recognition?',
          answer:
            'Not all surveillance cameras are suitable for facial recognition. Required: minimum 2MP resolution, field of view configured for facial capture (not panoramic), near-frontal capture angle (less than 30° lateral deviation), and adequate illumination for the operating range. PTZ cameras can be useful for active tracking, but the best facial recognition images come from well-positioned fixed cameras at passage points: turnstiles, access doors, pedestrian transit corridors.',
        },
        {
          question: 'How is algorithmic bias in facial recognition addressed?',
          answer:
            'Algorithmic bias in facial recognition is a documented problem, especially for certain demographic groups. KabatOne addresses this at three levels: selection of AI engines with demonstrated low bias rates in independent audits, mandatory human confirmation before any operational action (the system never acts autonomously), and monthly reporting of accuracy metrics by demographic group for early bias detection in production. Facial recognition in KabatOne is always an investigative tool, never an autonomous decision tool.',
        },
      ]

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    { name: es ? 'Integraciones' : 'Integrations', url: es ? 'https://kabatone.com/es/integrations/' : 'https://kabatone.com/integrations/' },
    {
      name: es ? 'Reconocimiento Facial' : 'Face Recognition',
      url: es ? 'https://kabatone.com/es/integrations/face-recognition/' : 'https://kabatone.com/integrations/face-recognition/',
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
        { title: 'Personas Buscadas', desc: 'El sistema compara en tiempo real los rostros capturados por cámaras estratégicas contra la lista de personas con orden de aprehensión activa. Cuando hay coincidencia, el analista recibe una alerta con el porcentaje de confianza, la imagen capturada, el perfil de la persona y la ubicación exacta — todo antes de notificar a las unidades en campo.' },
        { title: 'Personas Desaparecidas', desc: 'En casos de personas desaparecidas — especialmente niños y adultos mayores vulnerables — el reconocimiento facial puede acelerar la localización dramáticamente. La fotografía del desaparecido se carga al sistema y se coteja contra todas las cámaras de la red en tiempo real y contra el historial de lecturas de las últimas horas o días.' },
        { title: 'Monitoreo de Multitudes en Eventos', desc: 'En eventos masivos (conciertos, protestas, partidos de fútbol), el reconocimiento facial permite identificar personas con antecedentes de violencia que intenten ingresar al recinto, o personas en lista de exclusión por incidentes previos. La detección ocurre en los puntos de acceso antes del ingreso, no adentro.' },
        { title: 'Control de Acceso a Instalaciones', desc: 'En instalaciones críticas — centros de datos, subestaciones eléctricas, instalaciones portuarias — el reconocimiento facial reemplaza o complementa las tarjetas de acceso. Ofrece verificación biométrica que no puede ser transferida ni duplicada, y registra automáticamente cada ingreso y egreso con imagen y timestamp.' },
      ]
    : [
        { title: 'Wanted Persons', desc: 'The system compares in real time the faces captured by strategic cameras against the list of persons with active arrest warrants. When there is a match, the analyst receives an alert with the confidence percentage, the captured image, the person\'s profile, and the exact location — all before notifying field units.' },
        { title: 'Missing Persons', desc: 'In missing persons cases — especially children and vulnerable elderly adults — facial recognition can dramatically accelerate location. The missing person\'s photograph is loaded into the system and matched against all network cameras in real time and against the read history from the past hours or days.' },
        { title: 'Crowd Monitoring at Events', desc: 'At mass events (concerts, protests, soccer games), facial recognition allows identifying persons with a history of violence attempting to enter the venue, or persons on exclusion lists due to previous incidents. Detection occurs at access points before entry, not inside.' },
        { title: 'Critical Facility Access Control', desc: 'At critical facilities — data centers, electrical substations, port installations — facial recognition replaces or complements access cards. It offers biometric verification that cannot be transferred or duplicated, and automatically logs every entry and exit with image and timestamp.' },
      ]

  const privacyControls = es
    ? [
        { title: 'Acceso basado en roles', desc: 'Solo usuarios con autorización explícita pueden realizar búsquedas de reconocimiento facial. El acceso se registra, se audita y puede revocarse en tiempo real.' },
        { title: 'Auditoría completa', desc: 'Cada búsqueda genera un registro inmutable: quién buscó, cuándo, qué imagen utilizó y qué resultado obtuvo. Esta auditoría es exportable para revisiones de supervisión.' },
        { title: 'Sin identificación masiva pasiva', desc: 'KabatOne no construye perfiles de identidad de personas que no están en listas de alerta. Las lecturas de rostros no se vinculan a identidades sin una acción intencional del operador.' },
        { title: 'Confirmación humana obligatoria', desc: 'El sistema nunca actúa de forma autónoma. Toda coincidencia de reconocimiento facial requiere confirmación de un analista antes de que se genere cualquier alerta operativa o acción de campo.' },
      ]
    : [
        { title: 'Role-based access', desc: 'Only users with explicit authorization can perform facial recognition queries. Access is logged, audited, and can be revoked in real time.' },
        { title: 'Full audit trail', desc: 'Every query generates an immutable record: who searched, when, what image they used, and what result they obtained. This audit trail is exportable for oversight reviews.' },
        { title: 'No passive mass identification', desc: 'KabatOne does not build identity profiles of persons not on alert lists. Face reads are not linked to identities without an intentional operator action.' },
        { title: 'Mandatory human confirmation', desc: 'The system never acts autonomously. Every facial recognition match requires analyst confirmation before any operational alert or field action is generated.' },
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema(
              es
                ? 'Integración de Reconocimiento Facial para Seguridad Pública'
                : 'Facial Recognition Integration for Public Safety',
              es
                ? 'Cómo KabatOne integra reconocimiento facial para personas buscadas, desaparecidos y monitoreo de multitudes con arquitectura de privacidad por diseño.'
                : 'How KabatOne integrates facial recognition for wanted persons, missing persons, and crowd monitoring with privacy-by-design architecture.',
              es ? 'https://kabatone.com/es/integrations/face-recognition/' : 'https://kabatone.com/integrations/face-recognition/',
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
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
              {es ? 'Inicio' : 'Home'}
            </Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--dim)' }}>
              {es ? 'Integraciones' : 'Integrations'}
            </span>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--dim)' }}>
              {es ? 'Reconocimiento Facial' : 'Face Recognition'}
            </span>
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
                ? 'Reconocimiento Facial: Identificación Biométrica con Privacidad por Diseño'
                : 'Face Recognition Integration: AI-Powered Biometric Matching'}
            </h1>
            <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.8, maxWidth: '720px', marginBottom: '0' }}>
              {es
                ? 'El reconocimiento facial en seguridad pública es una herramienta poderosa cuando se implementa correctamente — con controles de privacidad rigurosos, confirmación humana obligatoria y auditoría completa. KabatOne integra reconocimiento facial con esos controles incorporados, no como opciones adicionales.'
                : 'Facial recognition in public safety is a powerful tool when implemented correctly — with rigorous privacy controls, mandatory human confirmation, and a complete audit trail. KabatOne integrates facial recognition with those controls built in, not as optional add-ons.'}
            </p>
          </div>
        </section>

        {/* ── WHAT IS FACE RECOGNITION ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? '¿Qué Es el Reconocimiento Facial en Seguridad Pública?' : 'What Is Facial Recognition in Public Safety?'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'El reconocimiento facial es una tecnología de inteligencia artificial que analiza los rasgos geométricos de un rostro humano — distancia entre ojos, forma de la mandíbula, proporción de la nariz — y genera una representación matemática única llamada "vector de características" o "faceprint". Este vector se compara contra una base de datos para encontrar coincidencias. El proceso es similar al de las huellas dactilares, pero opera sobre imágenes 2D en lugar de impresiones físicas.'
                : 'Facial recognition is an artificial intelligence technology that analyzes the geometric features of a human face — distance between eyes, jaw shape, nose proportion — and generates a unique mathematical representation called a "feature vector" or "faceprint." This vector is compared against a database to find matches. The process is similar to fingerprinting, but operates on 2D images rather than physical impressions.'}
            </p>
            <p style={pStyle}>
              {es
                ? 'En seguridad pública, el reconocimiento facial se utiliza en dos contextos fundamentalmente diferentes con implicaciones operativas y legales distintas: el cotejo forense (búsqueda retrospectiva de sospechosos en investigaciones criminales) y el cotejo en tiempo real (identificación de personas en listas de alerta en cámaras de video en vivo). KabatOne soporta ambos modos con controles de acceso separados porque los protocolos operativos y los marcos legales aplicables son diferentes.'
                : 'In public safety, facial recognition is used in two fundamentally different contexts with distinct operational and legal implications: forensic matching (retrospective suspect search in criminal investigations) and real-time matching (identification of persons on alert lists in live video cameras). KabatOne supports both modes with separate access controls because the applicable operational protocols and legal frameworks differ.'}
            </p>
            <p style={pStyle}>
              {es
                ? 'La diferencia crítica entre el reconocimiento facial de grado seguridad pública y las aplicaciones de consumidor es el proceso de confirmación. En una aplicación de fotos en el teléfono, el algoritmo te dice "esta es tu abuela". En un sistema de seguridad pública, el algoritmo te dice "hay un 92% de probabilidad de que esta persona sea Juan García, buscado por robo agravado" — y un analista humano verificado toma la decisión de actuar o descartar. Esta distinción no es solo una política interna: es el estándar que separa el uso responsable del irresponsable.'
                : 'The critical difference between public-safety-grade facial recognition and consumer applications is the confirmation process. In a phone photo app, the algorithm tells you "this is your grandmother." In a public safety system, the algorithm says "there is a 92% probability that this person is John Smith, wanted for aggravated robbery" — and a verified human analyst makes the decision to act or dismiss. This distinction is not just an internal policy: it is the standard that separates responsible from irresponsible use.'}
            </p>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'Casos de Uso en Seguridad Pública' : 'Public Safety Use Cases'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'Los escenarios donde el reconocimiento facial aporta mayor valor en operaciones de seguridad pública:'
                : 'Scenarios where facial recognition delivers the most value in public safety operations:'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="usecase-grid">
              {useCases.map((uc, i) => (
                <div
                  key={i}
                  style={{
                    background: '#0b1628',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    borderLeft: `3px solid ${ACCENT}`,
                    padding: '24px',
                  }}
                >
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 700,
                    fontSize: '17px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                    marginBottom: '10px',
                    marginTop: '0',
                  }}>
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

        {/* ── PRIVACY & COMPLIANCE ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>
              {es ? 'Privacidad y Cumplimiento: Controles Incorporados' : 'Privacy & Compliance: Built-In Controls'}
            </h2>
            <p style={pStyle}>
              {es
                ? 'El reconocimiento facial es la tecnología de seguridad pública más sensible desde el punto de vista de los derechos civiles. KabatOne incorpora cuatro controles de privacidad que no son opcionales — son parte de la arquitectura base:'
                : 'Facial recognition is the most civil-rights-sensitive public safety technology. KabatOne incorporates four privacy controls that are not optional — they are part of the base architecture:'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {privacyControls.map((ctrl, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    background: '#0b1628',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    borderLeft: '3px solid #f59e0b',
                    padding: '20px 24px',
                  }}
                >
                  <span style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '12px',
                    color: '#f59e0b',
                    flexShrink: 0,
                    marginTop: '3px',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p style={{ fontSize: '15px', fontWeight: 600, marginBottom: '6px', color: 'var(--white)' }}>{ctrl.title}</p>
                    <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>{ctrl.desc}</p>
                  </div>
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
              {es ? 'KabatOne para Operaciones de Reconocimiento Facial' : 'KabatOne for Face Recognition Operations'}
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '28px' }}>
              {es
                ? 'Los módulos de KabatOne que soportan la integración de reconocimiento facial:'
                : 'KabatOne modules that support facial recognition integration:'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { href: '/k-video', label: 'K-Video', desc: es ? 'Video + Biometría' : 'Video + Biometrics', color: '#a855f7' },
                { href: '/k-safety', label: 'K-Safety', desc: es ? 'GIS y Alertas' : 'GIS & Alerts', color: '#3b82f6' },
                { href: '/k-dispatch', label: 'K-Dispatch', desc: es ? 'Despacho CAD' : 'CAD Dispatch', color: '#ef4444' },
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
              {es ? 'Preguntas Comunes sobre Reconocimiento Facial' : 'Common Face Recognition Questions'}
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
                { href: '/integrations/lpr', label: es ? 'Integración de Reconocimiento de Placas (LPR)' : 'License Plate Recognition (LPR) Integration' },
                { href: '/resources/ai-in-public-safety', label: es ? 'IA en Seguridad Pública: Guía para Ciudades' : 'AI in Public Safety: A Guide for Cities' },
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
          h2={es ? 'Implementa Reconocimiento Facial con los Controles Correctos' : 'Deploy Face Recognition with the Right Controls'}
          subtitle={es
            ? 'KabatOne integra reconocimiento facial con privacidad por diseño — auditoría completa, confirmación humana y control de acceso granular. Solicita una demo.'
            : 'KabatOne integrates facial recognition with privacy by design — full audit trail, human confirmation, and granular access control. Request a demo.'}
        />

        <Footer es={es} />

        <style>{`
          @media (max-width: 640px) {
            .usecase-grid { grid-template-columns: 1fr !important; }
            section { padding-left: 20px !important; padding-right: 20px !important; }
          }
        `}</style>
      </div>
    </>
  )
}
