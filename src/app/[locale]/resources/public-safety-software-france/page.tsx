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
  return generatePageMetadata('publicSafetySoftwareFrance', locale)
}

export default async function PublicSafetySoftwareFrancePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-france/`
    : `${baseUrl}/resources/public-safety-software-france/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Francia' : 'Public Safety Software — France', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en Francia?',
      answer: 'Francia opera un sistema de seguridad pública dual: la Police Nationale (bajo el Ministerio del Interior) cubre ciudades y zonas urbanas con más de 20,000 habitantes, mientras que la Gendarmerie Nationale (bajo el Ministerio del Interior, con vinculación al Ministerio de Defensa) cubre zonas rurales, suburbanas y pequeñas ciudades. Juntas suman más de 250,000 efectivos. A nivel departamental, los Prefectos coordinan la seguridad entre cuerpos. La Direction Générale de la Police Nationale (DGPN) y la Direction Générale de la Gendarmerie Nationale (DGGN) mantienen sistemas de TI separados con programas de modernización propios como NEOGEND (Gendarmería) y SCITE (Police Nationale).',
    },
    {
      question: '¿Cómo funciona el despacho de emergencias en Francia? ¿Qué son el 15, 17 y 18?',
      answer: 'Francia históricamente usa tres números de emergencia: el 15 para el SAMU (medical/emergencias sanitarias), el 17 para la Police Nationale, y el 18 para los Sapeurs-Pompiers (bomberos). Los Centres de Traitement de l\'Appel (CTA) y los CRRA 15 (centres de régulation médicale) operan en paralelo. Desde 2021, Francia avanza hacia la interoperabilidad bajo el proyecto NexSIS 18-112 — un sistema común de despacho para bomberos y seguridad civil operado por la DGSCGC. El número 112 europeo funciona en paralelo. Los Centres Opérationnels Départementaux d\'Incendie et de Secours (CODIS) coordinan la respuesta de bomberos a nivel departamental.',
    },
    {
      question: '¿Qué es la Vidéoprotection en Francia y cómo se regula?',
      answer: 'Francia cuenta con más de 1.9 millones de cámaras CCTV, siendo uno de los países con mayor densidad de videovigilancia en Europa. Los Centres de Supervision Urbaine (CSU) gestionan las redes de Vidéoprotection en ciudades como París, Lyon, Marsella y Niza — ciudades que aceleran la analítica de IA tras los Juegos Olímpicos de París 2024. La CNIL (Commission Nationale de l\'Informatique et des Libertés) regula el uso de sistemas de reconocimiento facial y analítica biométrica bajo el RGPD y la loi Informatique et Libertés. La Loi relative aux Jeux Olympiques (juillet 2023) autorizó el uso experimental de analítica de video con IA para seguridad en grandes eventos.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en Francia?',
      answer: 'La contratación pública en Francia sigue el Code de la Commande Publique y las directivas UE. Los procedimientos incluyen appel d\'offres ouvert (DSP1), procédure négociée (para seguridad/defensa bajo L2113-1), accord-cadre (contratos marco) y dialogue compétitif. El BOAMP (Bulletin Officiel des Annonces des Marchés Publics) y el portail PLACE son las plataformas oficiales. La centrale d\'achat UGAP (Union des Groupements d\'Achats Publics) permite a las administraciones adquirir tecnología sin licitación propia. Para proyectos de seguridad críticos, la Direction des Achats de l\'État (DAE) establece los grandes contratos marco ministeriales.',
    },
    {
      question: '¿Cuáles son los requisitos de protección de datos para software policial en Francia?',
      answer: 'El software policial en Francia debe cumplir el RGPD (Règlement Général sur la Protection des Données), la loi Informatique et Libertés (versión 2018, modificada), y la Directive (UE) 2016/680 para datos policiales (transpuesta en el Titre II de la loi). La CNIL es la autoridad supervisora con potestad sancionadora. Los datos de videovigilancia en espacios públicos requieren autorización prefectoral. La analítica biométrica (reconocimiento facial) está sujeta a un marco restrictivo salvo excepciones legales (como la Loi JO 2024). El ANSSI (Agence Nationale de la Sécurité des Systèmes d\'Information) establece los requisitos de ciberseguridad para sistemas gubernamentales (SecNumCloud para la nube soberana francesa).',
    },
    {
      question: '¿Qué es el sistema VIGPIRATE y cómo afecta las operaciones de seguridad pública?',
      answer: 'VIGPIRATE es el sistema nacional de alerta antiterrorista de Francia, gestionado por el SGDSN (Secrétariat Général de la Défense et de la Sécurité Nationale). Tiene tres niveles: Vigilance (base permanente), Sécurité renforcée – risque attentat (elevado), y Urgence attentat (máximo, activado tras ataques). Cuando se activa VIGPIRATE reforzado, los centros de mando deben elevar la vigilancia en transporte, eventos masivos e infraestructuras críticas. Esto requiere plataformas que integren feeds de CCTV, gestión de incidentes y coordinación multiagencia (Police/Gendarmerie/Pompiers/SAMU) en tiempo real bajo un dashboard unificado.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para la Police Nationale, Gendarmerie y CSU franceses?',
      answer: 'KabatOne integra las funciones que la Police Nationale, Gendarmerie y los CSU gestionan en sistemas separados: despacho CAD con soporte para llamadas 17/15/18 simultáneas y coordinación con NexSIS (K-Dispatch), gestión de redes de Vidéoprotection con analítica de IA conforme al RGPD y la Loi JO 2024 (K-Video) y conciencia situacional GIS para coordinación entre Préfectures, Police, Gendarmerie y SDIS (K-Safety). La plataforma admite despliegue on-premises en infraestructura francesa con cumplimiento RGPD/CNIL y requisitos ANSSI. Solicite una demo adaptada al contexto de los CSU y salles de commandement franceses.',
    },
  ] : [
    {
      question: 'How is public safety organised in France?',
      answer: 'France operates a dual public safety system: the Police Nationale (under the Ministry of the Interior) covers cities and urban areas with more than 20,000 inhabitants, while the Gendarmerie Nationale (under the Ministry of the Interior with ties to the Ministry of Defence) covers rural, suburban, and small-town areas. Together they total over 250,000 officers. At the departmental level, Prefects coordinate security between forces. The DGPN and DGGN maintain separate IT systems with their own modernisation programmes — NEOGEND (Gendarmerie) and SCITE (Police Nationale).',
    },
    {
      question: 'How does emergency dispatch work in France? What are the 15, 17, and 18 numbers?',
      answer: 'France historically uses three emergency numbers: 15 for SAMU (medical emergencies), 17 for the Police Nationale, and 18 for the Sapeurs-Pompiers (fire services). Call handling centres (CTA) and CRRA 15 medical regulation centres operate in parallel. Since 2021, France has been advancing towards interoperability under the NexSIS 18-112 project — a shared dispatch system for fire and civil security operated by the DGSCGC. The European 112 number runs in parallel. Departmental Operational Centres (CODIS) coordinate fire response at department level.',
    },
    {
      question: 'What is Vidéoprotection in France and how is it regulated?',
      answer: 'France has over 1.9 million CCTV cameras, making it one of the most surveilled countries in Europe. Centres de Supervision Urbaine (CSU) manage Vidéoprotection networks in cities like Paris, Lyon, Marseille, and Nice — cities that accelerated AI video analytics deployment after the Paris 2024 Olympics. The CNIL (Commission Nationale de l\'Informatique et des Libertés) regulates facial recognition and biometric analytics under GDPR and the loi Informatique et Libertés. The Olympic Games Act (July 2023) authorised experimental AI video analytics for mass event security, establishing a framework now extended to broader public safety use.',
    },
    {
      question: 'How do French government agencies procure public safety software?',
      answer: 'Public procurement in France follows the Code de la Commande Publique and EU directives. Procedures include open tenders (appel d\'offres ouvert), negotiated procedures (for security/defence under L2113-1), framework agreements (accord-cadre), and competitive dialogue (dialogue compétitif). BOAMP (Bulletin Officiel des Annonces des Marchés Publics) and the PLACE portal are the official platforms. The UGAP central purchasing body allows administrations to acquire technology without running their own tender. For critical security projects, the Direction des Achats de l\'État (DAE) establishes major ministerial framework contracts.',
    },
    {
      question: 'What are the data protection requirements for police software in France?',
      answer: 'Police software in France must comply with GDPR/RGPD, the loi Informatique et Libertés (2018 version, amended), and Directive (EU) 2016/680 for police data (transposed in Title II of the law). The CNIL is the supervisory authority with enforcement powers. CCTV data in public spaces requires prefectural authorisation. Biometric analytics (facial recognition) is subject to a restrictive framework with exceptions for specific legal contexts (such as the 2024 Olympic Games Act). ANSSI (National Cybersecurity Agency) sets cybersecurity requirements for government systems, including SecNumCloud qualification for sovereign cloud.',
    },
    {
      question: 'What is the VIGPIRATE system and how does it affect public safety operations?',
      answer: 'VIGPIRATE is France\'s national counter-terrorism alert system, managed by the SGDSN (Secrétariat Général de la Défense et de la Sécurité Nationale). It has three levels: Vigilance (permanent baseline), Sécurité renforcée – risque attentat (elevated), and Urgence attentat (maximum, activated after attacks). When elevated VIGPIRATE is active, command centres must increase surveillance of transport hubs, mass events, and critical infrastructure. This requires platforms that integrate CCTV feeds, incident management, and multi-agency coordination (Police/Gendarmerie/Pompiers/SAMU) in real time under a unified dashboard.',
    },
    {
      question: 'Why is KabatOne suited for France\'s Police Nationale, Gendarmerie, and CSU operations?',
      answer: 'KabatOne integrates the functions that Police Nationale, Gendarmerie, and CSU centres manage across separate systems: CAD dispatch with support for simultaneous 17/15/18 calls and coordination with NexSIS (K-Dispatch), Vidéoprotection network management with AI analytics compliant with GDPR/RGPD and the Olympic Games Act framework (K-Video), and GIS situational awareness for coordination across Préfectures, Police, Gendarmerie, and SDIS (K-Safety). The platform supports on-premises deployment on French infrastructure with RGPD/CNIL compliance and ANSSI requirements. Request a demo tailored to the French CSU and salle de commandement context.',
    },
  ]

  const sectionStyle: React.CSSProperties = { borderTop: '1px solid var(--border)', padding: '72px 32px' }
  const containerStyle: React.CSSProperties = { maxWidth: '860px', margin: '0 auto' }
  const h2Style: React.CSSProperties = {
    fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif',
    textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '20px', marginTop: '0',
  }
  const pStyle: React.CSSProperties = { fontSize: '16px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.8, marginBottom: '20px' }

  const challenges = es ? [
    {
      title: 'Estructura Dual: Police Nationale vs Gendarmerie con TI Separados',
      desc: 'Francia opera dos fuerzas de seguridad nacionales con sistemas de TI, protocolos de despacho y contratos tecnológicos independientes. La coordinación para crímenes transfronterizos, manifestaciones y amenazas terroristas requiere plataformas que conecten las salles de commandement de la Police y los COG de la Gendarmerie bajo una conciencia situacional compartida.',
      color: '#3b82f6',
    },
    {
      title: 'Fragmentación del Despacho: 15/17/18 hacia NexSIS 18-112',
      desc: 'Los tres números de emergencia históricos (SAMU-15, Police-17, Pompiers-18) operan en sistemas separados con flujos de datos no integrados. El proyecto NexSIS está modernizando el despacho de bomberos y protección civil, pero la interoperabilidad completa entre SAMU, Police y Gendarmerie sigue siendo un reto crítico para reducir los tiempos de respuesta.',
      color: '#06b6d4',
    },
    {
      title: 'RGPD, CNIL y Regulación de la Analítica de Video con IA',
      desc: 'Francia aplica el RGPD con una de las autoridades de protección de datos más activas de Europa (CNIL). Los sistemas de reconocimiento facial y analítica biométrica enfrentan restricciones severas. La Loi JO 2024 creó un marco experimental que ahora guía el despliegue de analítica de IA para videoprotección — requiriendo cumplimiento estricto, auditorías y minimización de datos.',
      color: '#f59e0b',
    },
    {
      title: 'VIGPIRATE, Grandes Eventos y Protección de Infraestructuras Críticas',
      desc: 'Francia enfrenta una amenaza terrorista persistente (nivel VIGPIRATE Sécurité Renforcée) y es sede de eventos masivos como el Tour de France, la Ligue 1, el Roland Garros y cumbres internacionales. Los Jeux Olympiques de Paris 2024 dejaron un legado de CSU modernizados que ahora requieren plataformas escalables para gestión rutinaria y activaciones de crisis.',
      color: '#ef4444',
    },
  ] : [
    {
      title: 'Dual Structure: Police Nationale vs Gendarmerie with Separate IT Systems',
      desc: 'France operates two national security forces with independent IT systems, dispatch protocols, and technology contracts. Coordination for cross-jurisdiction crimes, protests, and terrorist threats requires platforms that connect Police salles de commandement and Gendarmerie COG centres under shared situational awareness.',
      color: '#3b82f6',
    },
    {
      title: 'Dispatch Fragmentation: 15/17/18 Transitioning to NexSIS 18-112',
      desc: 'The three historical emergency numbers (SAMU-15, Police-17, Pompiers-18) operate in separate systems with unintegrated data flows. The NexSIS project is modernising fire and civil protection dispatch, but full interoperability between SAMU, Police, and Gendarmerie remains a critical challenge for reducing response times.',
      color: '#06b6d4',
    },
    {
      title: 'RGPD, CNIL, and AI Video Analytics Regulation',
      desc: 'France enforces GDPR with one of Europe\'s most active data protection authorities (CNIL). Facial recognition and biometric analytics face severe restrictions. The 2024 Olympic Games Act created an experimental framework now guiding AI analytics deployment for Vidéoprotection — requiring strict compliance, audits, and data minimisation.',
      color: '#f59e0b',
    },
    {
      title: 'VIGPIRATE, Mass Events, and Critical Infrastructure Protection',
      desc: 'France faces a persistent terrorist threat (VIGPIRATE Sécurité Renforcée level) and hosts major mass events including Tour de France, Ligue 1, Roland Garros, and international summits. The Paris 2024 Olympics left a legacy of modernised CSU centres now requiring scalable platforms for routine management and crisis activations.',
      color: '#ef4444',
    },
  ]

  return (
    <>
      <Nav />

      {/* ── Structured Data ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        articleSchema(
          es ? 'Software de Seguridad Pública para Francia: Police Nationale, Gendarmerie y RGPD' : 'Public Safety Software for France: Police Nationale, Gendarmerie & RGPD',
          es ? 'Plataforma unificada para la Police Nationale, Gendarmerie y Centres de Supervision Urbaine — despacho CAD con soporte NexSIS/17/18, analítica de Vidéoprotection con IA y cumplimiento RGPD/CNIL.' : 'Unified platform for Police Nationale, Gendarmerie, and Centres de Supervision Urbaine — CAD dispatch with NexSIS/17/18 support, AI Vidéoprotection analytics, and RGPD/CNIL compliance.',
          pageUrl,
          '2026-05-18'
        )
      ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }} />

      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── BREADCRUMB ── */}
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '24px 32px 0' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: '12px', color: 'var(--muted)', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{es ? 'Inicio' : 'Home'}</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <Link href="/resources" style={{ color: 'var(--muted)', textDecoration: 'none' }}>{es ? 'Recursos' : 'Resources'}</Link>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ color: 'var(--dim)' }}>{es ? 'Software de Seguridad Pública — Francia' : 'Public Safety Software — France'}</span>
          </nav>
        </div>

        {/* ── HERO ── */}
        <section style={{ padding: '48px 32px 64px' }}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: ACCENT, marginBottom: '14px' }}>
              {es ? 'Guía de Mercado' : 'Market Guide'}
            </p>
            <h1 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: '24px' }}>
              {es
                ? 'Software de Seguridad Pública para Francia: Police Nationale, Gendarmerie y RGPD'
                : 'Public Safety Software for France: Police Nationale, Gendarmerie & RGPD'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'Francia opera una estructura de seguridad dual — Police Nationale y Gendarmerie — con más de 1.9 millones de cámaras de Vidéoprotection y un sistema de despacho en transición hacia NexSIS 18-112. KabatOne unifica el despacho de emergencias 15/17/18, la gestión de CSU con analítica de IA y la conciencia situacional GIS en una plataforma con cumplimiento RGPD/CNIL y requisitos ANSSI.'
                : 'France operates a dual security structure — Police Nationale and Gendarmerie — with over 1.9 million Vidéoprotection cameras and a dispatch system transitioning to NexSIS 18-112. KabatOne unifies 15/17/18 emergency dispatch, CSU management with AI analytics, and GIS situational awareness in a single platform with RGPD/CNIL compliance and ANSSI requirements.'}
            </p>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '40px 32px', background: 'rgba(59,130,246,0.04)' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
            {(es ? [
              { value: '101', label: 'Departamentos con estructuras de seguridad propias' },
              { value: '250K+', label: 'Efectivos Police Nationale y Gendarmerie combinados' },
              { value: '1.9M', label: 'Cámaras de Vidéoprotection en todo el territorio' },
              { value: '68M', label: 'Habitantes — segundo mayor mercado de seguridad de la UE' },
            ] : [
              { value: '101', label: 'Departments with dedicated security structures' },
              { value: '250K+', label: 'Combined Police Nationale and Gendarmerie officers' },
              { value: '1.9M', label: 'Vidéoprotection cameras nationwide' },
              { value: '68M', label: 'Population — second largest EU public safety market' },
            ]).map((stat, i) => (
              <div key={i}>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: ACCENT, marginBottom: '6px', marginTop: 0 }}>{stat.value}</p>
                <p style={{ fontSize: '12px', fontWeight: 400, color: 'var(--muted)', lineHeight: 1.4, marginBottom: 0 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 1: Challenges ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <h2 style={h2Style}>{es ? 'Retos Operativos para la Seguridad Pública en Francia' : 'Operational Challenges for Public Safety in France'}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '24px' }}>
              {challenges.map((c, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: `1px solid ${c.color}30`, padding: '24px' }}>
                  <div style={{ width: '32px', height: '3px', background: c.color, borderRadius: '2px', marginBottom: '14px' }} />
                  <p style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--white)', marginBottom: '10px', marginTop: 0 }}>{c.title}</p>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 2: How KabatOne Works ── */}
        <section style={{ ...sectionStyle, background: 'rgba(255,255,255,0.01)' }}>
          <div style={containerStyle}>
            <h2 style={h2Style}>{es ? 'Cómo KabatOne Responde a los Requisitos de la Police Nationale y los CSU' : 'How KabatOne Addresses Police Nationale and CSU Requirements'}</h2>
            <p style={pStyle}>
              {es
                ? 'KabatOne está diseñado para salles de commandement y CSU que necesitan un único dashboard para gestionar simultáneamente llamadas 17 de Police y 18 de Pompiers, monitorear redes de Vidéoprotection con analítica de IA y coordinar unidades sobre un mapa GIS — todo bajo los exigentes requisitos de privacidad y seguridad franceses.'
                : 'KabatOne is designed for salles de commandement and CSU centres that need a single dashboard to simultaneously manage Police 17 and Pompiers 18 calls, monitor Vidéoprotection networks with AI analytics, and coordinate units on a GIS map — all under France\'s demanding privacy and security requirements.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {(es ? [
                { title: 'Despacho CAD Multiservicio 15/17/18', desc: 'K-Dispatch gestiona llamadas simultáneas de Police, Pompiers y SAMU con clasificación automática de incidentes y asignación de unidades — compatible con los flujos de trabajo NexSIS 18-112 y los CTA departamentales.' },
                { title: 'Vidéoprotection con Analítica IA conforme RGPD', desc: 'K-Video integra redes CSU de Vidéoprotection con analítica de IA — LPR/ANPR, detección de multitudes, alertas de comportamiento, búsqueda forense — con políticas de retención configurables bajo RGPD/CNIL y el marco de la Loi JO 2024.' },
                { title: 'Conciencia Situacional GIS Multiagencia', desc: 'K-Safety proporciona el mapa operativo GIS compartido entre Police Nationale, Gendarmerie, SDIS y SAMU — con posiciones de unidades en tiempo real, gestión de incidentes VIGPIRATE y coordinación prefectoral.' },
                { title: 'On-Premises con Cumplimiento RGPD y ANSSI', desc: 'Despliegue on-premises en infraestructura francesa certificada. Controles de seguridad conformes a los requisitos ANSSI. Políticas de datos auditables para cumplimiento CNIL. Integración con sistemas DGPN/DGGN existentes.' },
              ] : [
                { title: 'Multi-Service 15/17/18 CAD Dispatch', desc: 'K-Dispatch manages simultaneous Police, Pompiers, and SAMU calls with automatic incident classification and unit assignment — compatible with NexSIS 18-112 workflows and departmental CTA operations.' },
                { title: 'RGPD-Compliant AI Vidéoprotection Analytics', desc: 'K-Video integrates CSU Vidéoprotection networks with AI analytics — LPR/ANPR, crowd detection, behavioural alerts, forensic search — with configurable retention policies under RGPD/CNIL and the 2024 Olympic Games Act framework.' },
                { title: 'Multi-Agency GIS Situational Awareness', desc: 'K-Safety provides the shared GIS operational map across Police Nationale, Gendarmerie, SDIS, and SAMU — with real-time unit positions, VIGPIRATE incident management, and prefectural coordination.' },
                { title: 'On-Premises with RGPD and ANSSI Compliance', desc: 'On-premises deployment on certified French infrastructure. Security controls aligned with ANSSI requirements. Auditable data policies for CNIL compliance. Integration with existing DGPN/DGGN systems.' },
              ]).map((item, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '24px' }}>
                  <p style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.03em', color: 'var(--white)', marginBottom: '10px', marginTop: 0 }}>{item.title}</p>
                  <p style={{ fontSize: '13px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: Products ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Plataforma KabatOne' : 'KabatOne Platform'}
            </p>
            <h2 style={{ ...h2Style, marginBottom: '12px' }}>K-Dispatch · K-Video · K-Safety</h2>
            <p style={{ ...pStyle, marginBottom: '28px' }}>
              {es
                ? 'Los CSU y salles de commandement franceses pueden desplegar K-Dispatch para despacho integrado 15/17/18, K-Video para gestión de Vidéoprotection con analítica de IA bajo RGPD/CNIL y K-Safety para conciencia situacional GIS compartida entre Police Nationale, Gendarmerie y SDIS.'
                : 'French CSU and salle de commandement operations can deploy K-Dispatch for integrated 15/17/18 dispatch, K-Video for Vidéoprotection management with AI analytics under RGPD/CNIL, and K-Safety for GIS situational awareness shared across Police Nationale, Gendarmerie, and SDIS.'}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { href: '/k-dispatch', label: 'K-Dispatch', desc: es ? 'Despacho CAD' : 'CAD Dispatch' },
                { href: '/k-video', label: 'K-Video', desc: es ? 'Gestión de CCTV' : 'CCTV Management' },
                { href: '/k-safety', label: 'K-Safety', desc: es ? 'Conciencia Situacional' : 'Situational Awareness' },
              ].map((p) => (
                <Link key={p.href} href={p.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '6px', padding: '10px 16px', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--dim)', textDecoration: 'none' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: ACCENT }} />
                  {p.label}
                  <span style={{ color: 'var(--muted)', fontSize: '10px', letterSpacing: '0.1em' }}>{p.desc}</span>
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
              {es ? 'Software de Seguridad Pública en Francia' : 'Public Safety Software in France'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: '#0b1628', borderRadius: '12px', border: '1px solid var(--border)', padding: '24px 28px' }}>
                  <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '17px', letterSpacing: '0.02em', textTransform: 'uppercase', marginBottom: '10px', marginTop: '0', color: 'var(--white)' }}>{faq.question}</h3>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, marginBottom: '0' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED RESOURCES ── */}
        <section style={sectionStyle}>
          <div style={containerStyle}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: ACCENT, marginBottom: '20px' }}>
              {es ? 'Recursos Relacionados' : 'Related Resources'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { href: '/resources/public-safety-software-italy', en: 'Public Safety Software for Italy: Polizia, Carabinieri, NUE 112 & GDPR', es: 'Software de Seguridad Pública para Italia: Polizia, Carabinieri, NUE 112 y GDPR' },
                { href: '/resources/public-safety-software-germany', en: 'Public Safety Software for Germany: Leitstellen, BOS Digital & DSGVO', es: 'Software de Seguridad Pública para Alemania: Leitstellen, BOS Digital y DSGVO' },
                { href: '/resources/public-safety-software-united-kingdom', en: 'Public Safety Software for the United Kingdom', es: 'Software de Seguridad Pública para el Reino Unido' },
                { href: '/resources/public-safety-software-united-states', en: 'Public Safety Software for the United States', es: 'Software de Seguridad Pública para EE.UU.' },
                { href: '/resources/public-safety-software-middle-east', en: 'Public Safety Software for the Middle East', es: 'Software de Seguridad Pública para Medio Oriente' },
                { href: '/resources/what-is-video-management-software', en: 'What Is VMS Software? Video Management Guide', es: '¿Qué Es el Software VMS? Guía de Gestión de Video' },
                { href: '/resources/what-is-situational-awareness-software', en: 'What Is Situational Awareness Software?', es: '¿Qué Es el Software de Conciencia Situacional?' },
                { href: '/resources/what-is-a-real-time-crime-center', en: 'What Is a Real-Time Crime Center (RTCC)?', es: '¿Qué Es un Centro de Crimen en Tiempo Real (RTCC)?' },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderRadius: '8px', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--dim)', fontSize: '15px' }}>
                  <span>{es ? link.es : link.en}</span>
                  <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          es={es}
          h2={es ? 'Solicita una Demo para tu CSU o Salle de Commandement' : 'Request a Demo for Your CSU or Salle de Commandement'}
          subtitle={es ? 'KabatOne integra despacho 15/17/18, Vidéoprotection con analítica de IA y conciencia situacional GIS en una plataforma con cumplimiento RGPD/CNIL y requisitos ANSSI. Demo adaptada al contexto francés.' : 'KabatOne integrates 15/17/18 dispatch, Vidéoprotection with AI analytics, and GIS situational awareness in a single platform with RGPD/CNIL compliance and ANSSI requirements. Demo tailored to the French context.'}
        />

        <Footer es={es} />
      </div>
    </>
  )
}
