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
  return generatePageMetadata('publicSafetySoftwareSpain', locale)
}

export default async function PublicSafetySoftwareSpainPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-spain/`
    : `${baseUrl}/resources/public-safety-software-spain/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — España' : 'Public Safety Software — Spain', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en España?',
      answer: 'España opera un sistema de seguridad pública en cuatro niveles. A nivel nacional: el Cuerpo Nacional de Policía (CNP, bajo el Ministerio del Interior) cubre ciudades y municipios de más de 20,000 habitantes, y la Guardia Civil (cuerpo de seguridad de naturaleza militar, también bajo el Ministerio del Interior) cubre zonas rurales, carreteras, fronteras y costas. A nivel autonómico: los Mossos d\'Esquadra (Cataluña), la Ertzaintza (País Vasco) y la Policía Foral de Navarra son cuerpos policiales autonómicos plenos con competencias propias. Otras comunidades tienen policías autonómicas complementarias (Policía Canaria, BESCAM en Madrid). A nivel local: las Policías Locales o Municipales actúan en los municipios. La coordinación se realiza a través de las Juntas de Seguridad autonómicas y el sistema INTENPOL de interoperabilidad policial.',
    },
    {
      question: '¿Cómo funciona el 112 en España y cómo se gestionan las emergencias?',
      answer: 'España fue uno de los primeros países de la UE en implementar el 112 como número único de emergencias. Los Servicios de Urgencias y Emergencias (SUE 112) operan a nivel autonómico — cada Comunidad Autónoma gestiona su propio centro 112 (Centro de Atención de Urgencias y Emergencias, CAUE). Los centros 112 reciben todas las llamadas y las redirigen al recurso competente: CNP (091), Guardia Civil (062), Bomberos (080) o Servicios Médicos (061). Los CECOP (Centros de Coordinación Operativa) a nivel autonómico coordinan la respuesta multiagencia en emergencias de protección civil. Los centros 112 usan plataformas CAD de gestión de llamadas con integración GIS para la asignación de recursos.',
    },
    {
      question: '¿Qué sistemas de videovigilancia usa España y cómo se regulan?',
      answer: 'España cuenta con extensas redes de videovigilancia urbana. Madrid opera el sistema de cámaras más grande del país, integrado en la Sala de Coordinación de la Policía Municipal de Madrid. Barcelona, Valencia, Sevilla y otras ciudades tienen redes municipales gestionadas por las Policías Locales y coordinadas con el CNP. La Guardia Civil opera el SIVE (Sistema Integrado de Vigilancia Exterior) — red de radares, cámaras térmicas y sensores en el litoral mediterráneo y canario para control de tráfico marítimo e inmigración irregular. Los sistemas LPR (Lectores de Matrículas) están desplegados en autopistas, accesos urbanos y puntos de control. La regulación de videovigilancia en espacios públicos se rige por la Ley Orgánica 4/1997 y el RGPD/LOPDGDD. La AEPD (Agencia Española de Protección de Datos) es la autoridad supervisora.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en España?',
      answer: 'La contratación pública en España sigue la LCSP (Ley de Contratos del Sector Público, Ley 9/2017, modificada por la Ley 2/2021), en transposición de las directivas UE. La PLACSP (Plataforma de Contratación del Sector Público) es el portal oficial de licitaciones. Los procedimientos incluyen el procedimiento abierto, restringido, el diálogo competitivo y la asociación para la innovación. La Red SARA (Sistemas de Aplicaciones y Redes de las Administraciones) facilita la interoperabilidad técnica entre administraciones. Para contratos del Ministerio del Interior (CNP, Guardia Civil), la Dirección General de Apoyo a las Víctimas y a la Policía Judicial gestiona los grandes pliegos. Las comunidades autónomas con policía propia (Mossos, Ertzaintza) licitan de forma independiente a través de sus respectivas plataformas autonómicas.',
    },
    {
      question: '¿Qué es el ENS y cuáles son los requisitos de ciberseguridad para sistemas policiales en España?',
      answer: 'El ENS (Esquema Nacional de Seguridad, Real Decreto 311/2022) es de cumplimiento obligatorio para todos los sistemas de información de las administraciones públicas españolas. Establece tres categorías de seguridad (ALTA, MEDIA, BÁSICA) con medidas de control específicas. Los sistemas policiales y de emergencias se clasifican habitualmente como ALTA por manejar datos de seguridad nacional. El CCN-CERT (Centro Criptológico Nacional) emite guías técnicas de referencia (Guías CCN-STIC) y certifica los productos que pueden usarse en sistemas ENS. La herramienta PILAR ayuda a los organismos a analizar riesgos conforme al ENS. Para sistemas en la nube, solo los servicios con certificación ENS pueden utilizarse en administraciones públicas españolas.',
    },
    {
      question: '¿Qué es el SIVE y cómo gestiona España la seguridad fronteriza y marítima?',
      answer: 'El SIVE (Sistema Integrado de Vigilancia Exterior) es la red de vigilancia costera operada por la Guardia Civil, desplegada en el litoral mediterráneo sur, el Estrecho de Gibraltar, las Islas Canarias y el Estrecho de Ceuta. Integra radares de largo alcance, cámaras diurnas/nocturnas/térmicas, sensores AIS y puestos de observación fijos. Los datos se procesan en Centros de Apoyo Logístico (CAL) y se comparten con la Agencia Europea de la Guardia de Fronteras y Costas (Frontex). La Guardia Civil coordina operaciones marítimas de rescate con Salvamento Marítimo (SASEMAR). El creciente flujo migratorio hacia Canarias y el Mediterráneo ha impulsado la expansión e integración de sensores del SIVE con plataformas de conciencia situacional marítima en tiempo real.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para el CNP, la Guardia Civil, los Mossos d\'Esquadra y las Policías Locales españolas?',
      answer: 'KabatOne integra las funciones que los distintos cuerpos de seguridad españoles gestionan en plataformas separadas: despacho CAD compatible con los centros 112/SUE y las salas de coordinación del CNP y la Guardia Civil (K-Dispatch), gestión unificada de redes de videovigilancia urbana y rural con analítica de IA — LPR de matrículas, detección de comportamientos, búsqueda forense — conforme al RGPD/LOPDGDD y las directrices de la AEPD (K-Video), y conciencia situacional GIS compartida entre CNP, Guardia Civil, cuerpos autonómicos y Policías Locales (K-Safety). Despliegue on-premises con cumplimiento ENS categoría ALTA y certificación CCN-STIC. Solicite una demo adaptada al contexto de los centros 112 y salas de coordinación españolas.',
    },
  ] : [
    {
      question: 'How is public safety organised in Spain?',
      answer: 'Spain operates a four-tier public safety system. At the national level: the Cuerpo Nacional de Policía (CNP, under the Ministry of the Interior) covers cities and municipalities above 20,000 inhabitants, and the Guardia Civil (a military-nature security corps, also under the Interior Ministry) covers rural areas, highways, borders, and coastlines. At the regional level: the Mossos d\'Esquadra (Catalonia), Ertzaintza (Basque Country), and Policía Foral de Navarra are full autonomous regional police forces with their own competences. Other regions have complementary autonomous police (Policía Canaria, BESCAM in Madrid). At the local level: Policías Locales or Municipales operate in municipalities. Coordination takes place through autonomous Juntas de Seguridad and the INTENPOL police interoperability system.',
    },
    {
      question: 'How does 112 work in Spain and how are emergencies managed?',
      answer: 'Spain was one of the first EU countries to implement 112 as its single emergency number. Emergency Services (SUE 112) operate at the autonomous community level — each region manages its own 112 centre (CAUE — Centro de Atención de Urgencias y Emergencias). The 112 centres receive all calls and route them to the competent resource: CNP (091), Guardia Civil (062), Fire (080), or Medical (061). CECOP (Centro de Coordinación Operativa) centres at regional level coordinate multi-agency response for civil protection emergencies. The 112 centres use CAD call management platforms with GIS integration for resource assignment.',
    },
    {
      question: 'What surveillance systems does Spain use and how are they regulated?',
      answer: 'Spain has extensive urban surveillance networks. Madrid operates the country\'s largest camera system, integrated into the Municipal Police\'s Sala de Coordinación. Barcelona, Valencia, Seville, and other cities have municipal networks managed by Policías Locales and coordinated with the CNP. The Guardia Civil operates SIVE (Sistema Integrado de Vigilancia Exterior) — a network of radars, thermal cameras, and sensors along the Mediterranean and Canary Islands coastlines for maritime traffic monitoring and irregular immigration control. LPR systems are deployed on motorways, urban access points, and checkpoints. Video surveillance regulation in public spaces is governed by Organic Law 4/1997 and GDPR/LOPDGDD. The AEPD (Agencia Española de Protección de Datos) is the supervisory authority.',
    },
    {
      question: 'How do Spanish government agencies procure public safety software?',
      answer: 'Public procurement in Spain follows the LCSP (Public Sector Contracts Act, Law 9/2017, amended by Law 2/2021), transposing EU directives. PLACSP (Public Sector Procurement Platform) is the official tender portal. Procedures include open, restricted, competitive dialogue, and innovation partnership. The Red SARA (Systems, Applications and Networks of Public Administrations) facilitates technical interoperability between administrations. For Ministry of the Interior contracts (CNP, Guardia Civil), the relevant Dirección General manages major tenders. Autonomous communities with their own police (Mossos, Ertzaintza) procure independently through their regional platforms.',
    },
    {
      question: 'What is the ENS and what are Spain\'s cybersecurity requirements for police systems?',
      answer: 'The ENS (National Security Framework, Royal Decree 311/2022) is mandatory for all information systems of Spanish public administrations. It establishes three security categories (HIGH, MEDIUM, BASIC) with specific control measures. Police and emergency systems are typically classified as HIGH for handling national security data. The CCN-CERT (National Cryptologic Centre) issues technical reference guides (CCN-STIC guides) and certifies products for ENS systems. The PILAR tool assists agencies in conducting ENS-compliant risk analysis. For cloud systems, only services with ENS certification may be used by Spanish public administrations.',
    },
    {
      question: 'What is SIVE and how does Spain manage border and maritime security?',
      answer: 'SIVE (Sistema Integrado de Vigilancia Exterior) is the coastal surveillance network operated by the Guardia Civil, deployed along the southern Mediterranean coast, the Strait of Gibraltar, the Canary Islands, and the Ceuta Strait. It integrates long-range radars, day/night/thermal cameras, AIS sensors, and fixed observation posts. Data is processed in Logistics Support Centres (CAL) and shared with Frontex. The Guardia Civil coordinates maritime rescue operations with Salvamento Marítimo (SASEMAR). Growing migration flows to the Canaries and the Mediterranean have driven SIVE expansion and integration with real-time maritime situational awareness platforms.',
    },
    {
      question: 'Why is KabatOne suited for Spain\'s CNP, Guardia Civil, Mossos d\'Esquadra, and Policías Locales?',
      answer: 'KabatOne integrates the functions Spain\'s security forces manage across separate platforms: CAD dispatch compatible with 112/SUE centres and CNP and Guardia Civil coordination rooms (K-Dispatch), unified management of urban and rural surveillance networks with AI analytics — licence plate LPR, behavioural detection, forensic search — compliant with GDPR/LOPDGDD and AEPD guidelines (K-Video), and GIS situational awareness shared across CNP, Guardia Civil, autonomous regional forces, and Policías Locales (K-Safety). On-premises deployment with HIGH-category ENS compliance and CCN-STIC certification. Request a demo tailored to the Spanish 112 centre and sala de coordinación context.',
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
      title: 'Sistema Multi-Nivel: CNP, Guardia Civil, Mossos, Ertzaintza y Policías Locales',
      desc: 'España opera cuatro niveles de policía con competencias, ministerios y sistemas tecnológicos distintos. La coordinación operativa entre el CNP, la Guardia Civil, los cuerpos autonómicos (Mossos d\'Esquadra, Ertzaintza, Policía Foral) y las 8,000+ Policías Locales requiere plataformas de conciencia situacional capaces de operar en entornos multi-jurisdiccionales con datos en tiempo real de fuentes heterogéneas.',
      color: '#3b82f6',
    },
    {
      title: 'Autonomía Regional: Licitaciones y TI Independientes en 17 Comunidades',
      desc: 'Las 17 Comunidades Autónomas tienen competencias en gestión de emergencias y seguridad ciudadana, con sus propios centros 112, plataformas de contratación y, en algunos casos, cuerpos policiales plenos. Esto genera 17+ ecosistemas tecnológicos de emergencias paralelos que deben interoperar con los sistemas nacionales del CNP y la Guardia Civil para una respuesta coordinada.',
      color: '#06b6d4',
    },
    {
      title: 'ENS, LOPDGDD y AEPD: Cumplimiento Obligatorio Multi-Capa',
      desc: 'El Esquema Nacional de Seguridad (ENS) es de cumplimiento obligatorio para todos los sistemas de información de las administraciones públicas — con categoría ALTA para sistemas policiales. La LOPDGDD (2018) añade requisitos específicos al RGPD. La AEPD es una de las agencias de protección de datos más activas de Europa. Los sistemas en la nube requieren certificación ENS específica del proveedor.',
      color: '#f59e0b',
    },
    {
      title: 'SIVE, Frontex y Seguridad Fronteriza en el Mediterráneo y Canarias',
      desc: 'España gestiona una de las fronteras exteriores de la UE más activas, con flujos migratorios significativos hacia las Islas Canarias y el Mediterráneo occidental. El SIVE (Sistema Integrado de Vigilancia Exterior) de la Guardia Civil integra radares, cámaras térmicas y sensores AIS que deben alimentar plataformas de conciencia situacional marítima y coordinarse con Frontex en tiempo real.',
      color: '#ef4444',
    },
  ] : [
    {
      title: 'Multi-Tier System: CNP, Guardia Civil, Mossos, Ertzaintza & Policías Locales',
      desc: 'Spain operates four police tiers with distinct competences, ministries, and technology systems. Operational coordination between the CNP, Guardia Civil, autonomous forces (Mossos d\'Esquadra, Ertzaintza, Policía Foral), and 8,000+ Policías Locales requires situational awareness platforms capable of operating across multi-jurisdictional environments with real-time data from heterogeneous sources.',
      color: '#3b82f6',
    },
    {
      title: 'Regional Autonomy: Independent IT and Procurement Across 17 Communities',
      desc: 'Spain\'s 17 Autonomous Communities have competences in emergency management and public safety, with their own 112 centres, procurement platforms, and — in some cases — full police forces. This creates 17+ parallel emergency technology ecosystems that must interoperate with national CNP and Guardia Civil systems for coordinated response.',
      color: '#06b6d4',
    },
    {
      title: 'ENS, LOPDGDD, and AEPD: Mandatory Multi-Layer Compliance',
      desc: 'The ENS (National Security Framework) is mandatory for all public administration IT systems — with HIGH category for police systems. The LOPDGDD (2018) adds specific requirements on top of GDPR. The AEPD is one of Europe\'s most active data protection agencies. Cloud services require vendor-specific ENS certification before use by Spanish public administrations.',
      color: '#f59e0b',
    },
    {
      title: 'SIVE, Frontex, and Border Security on the Mediterranean and Canary Islands',
      desc: 'Spain manages one of the EU\'s most active external borders, with significant migration flows towards the Canary Islands and the western Mediterranean. The Guardia Civil\'s SIVE integrates radars, thermal cameras, and AIS sensors that must feed maritime situational awareness platforms and coordinate with Frontex in real time.',
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
          es ? 'Software de Seguridad Pública para España: CNP, Guardia Civil, Mossos y ENS' : 'Public Safety Software for Spain: CNP, Guardia Civil, Mossos & ENS',
          es ? 'Plataforma unificada para el CNP, Guardia Civil, Mossos d\'Esquadra y Policías Locales — despacho CAD con soporte 112/SUE, videovigilancia con IA y cumplimiento ENS/LOPDGDD/AEPD.' : 'Unified platform for CNP, Guardia Civil, Mossos d\'Esquadra, and Policías Locales — CAD dispatch with 112/SUE support, AI surveillance analytics, and ENS/LOPDGDD/AEPD compliance.',
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
            <span style={{ color: 'var(--dim)' }}>{es ? 'Software de Seguridad Pública — España' : 'Public Safety Software — Spain'}</span>
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
                ? 'Software de Seguridad Pública para España: CNP, Guardia Civil, Mossos y ENS'
                : 'Public Safety Software for Spain: CNP, Guardia Civil, Mossos & ENS'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'España opera un sistema de seguridad pública en cuatro niveles — CNP, Guardia Civil, cuerpos autonómicos (Mossos, Ertzaintza) y Policías Locales — con 17 centros 112 autonómicos y el SIVE para vigilancia costera. KabatOne unifica el despacho CAD con soporte 112/SUE, la videovigilancia con analítica de IA y la conciencia situacional GIS en una plataforma con cumplimiento ENS categoría ALTA, LOPDGDD y certificación CCN-STIC.'
                : 'Spain operates a four-tier public safety system — CNP, Guardia Civil, autonomous forces (Mossos, Ertzaintza), and Policías Locales — with 17 autonomous 112 centres and SIVE for coastal surveillance. KabatOne unifies CAD dispatch with 112/SUE support, AI video surveillance analytics, and GIS situational awareness in a single platform with HIGH-category ENS, LOPDGDD, and CCN-STIC compliance.'}
            </p>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '40px 32px', background: 'rgba(59,130,246,0.04)' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
            {(es ? [
              { value: '17', label: 'Comunidades Autónomas con centros 112 propios' },
              { value: '150K+', label: 'Efectivos CNP y Guardia Civil combinados' },
              { value: '8,000+', label: 'Municipios con Policía Local propia' },
              { value: '47M', label: 'Habitantes — quinto mayor mercado UE de seguridad' },
            ] : [
              { value: '17', label: 'Autonomous Communities each with their own 112 centre' },
              { value: '150K+', label: 'Combined CNP and Guardia Civil officers' },
              { value: '8,000+', label: 'Municipalities with their own Policía Local' },
              { value: '47M', label: 'Population — fifth largest EU public safety market' },
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
            <h2 style={h2Style}>{es ? 'Retos Operativos para la Seguridad Pública en España' : 'Operational Challenges for Public Safety in Spain'}</h2>
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
            <h2 style={h2Style}>{es ? 'Cómo KabatOne Responde a los Requisitos de los Centros 112 y Salas de Coordinación Españoles' : 'How KabatOne Addresses Spanish 112 Centre and Coordination Room Requirements'}</h2>
            <p style={pStyle}>
              {es
                ? 'KabatOne está diseñado para los centros 112/SUE y las salas de coordinación del CNP y la Guardia Civil que necesitan un único dashboard para gestionar llamadas de emergencia, monitorear redes de videovigilancia y coordinar unidades de múltiples cuerpos sobre un mapa GIS — todo bajo los exigentes requisitos de cumplimiento ENS, LOPDGDD y CCN-STIC de los sistemas de información policiales españoles.'
                : 'KabatOne is designed for Spanish 112/SUE centres and CNP and Guardia Civil coordination rooms that need a single dashboard to manage emergency calls, monitor surveillance networks, and coordinate units from multiple forces on a GIS map — all under the demanding ENS, LOPDGDD, and CCN-STIC compliance requirements for Spanish police information systems.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {(es ? [
                { title: 'Despacho CAD Multiagencia con Soporte 112/SUE', desc: 'K-Dispatch gestiona llamadas 112 simultáneas con clasificación automática de incidentes y asignación de unidades del CNP, Guardia Civil, Mossos, Ertzaintza y Policía Local — compatible con los flujos de trabajo de los centros CAUE y los CECOP autonómicos.' },
                { title: 'Videovigilancia con Analítica IA Conforme ENS/LOPDGDD', desc: 'K-Video integra redes de CCTV municipales y provinciales con analítica de IA — LPR de matrículas, detección de comportamientos, vigilancia perimetral, búsqueda forense — con políticas de retención conformes al RGPD/LOPDGDD y las directrices de la AEPD sobre videovigilancia.' },
                { title: 'Conciencia Situacional GIS Multi-Jurisdiccional', desc: 'K-Safety proporciona el mapa operativo GIS compartido entre CNP, Guardia Civil, cuerpos autonómicos y Policías Locales — con posiciones de unidades en tiempo real, gestión de incidentes y coordinación para grandes eventos, operaciones fronterizas y emergencias de protección civil.' },
                { title: 'On-Premises con ENS Categoría ALTA y CCN-STIC', desc: 'Despliegue on-premises en infraestructura española certificada. Controles de seguridad conformes al ENS categoría ALTA. Certificación CCN-STIC para sistemas de información policiales. Cumplimiento LOPDGDD y directrices AEPD para datos de seguridad pública.' },
              ] : [
                { title: 'Multi-Agency CAD Dispatch with 112/SUE Support', desc: 'K-Dispatch manages simultaneous 112 calls with automatic incident classification and unit assignment from CNP, Guardia Civil, Mossos, Ertzaintza, and Policía Local — compatible with CAUE centre workflows and autonomous CECOP operations.' },
                { title: 'ENS/LOPDGDD-Compliant AI Video Surveillance', desc: 'K-Video integrates municipal and provincial CCTV networks with AI analytics — licence plate LPR, behavioural detection, perimeter surveillance, forensic search — with retention policies compliant with GDPR/LOPDGDD and AEPD video surveillance guidelines.' },
                { title: 'Multi-Jurisdiction GIS Situational Awareness', desc: 'K-Safety provides the shared GIS operational map across CNP, Guardia Civil, autonomous forces, and Policías Locales — with real-time unit positions, incident management, and coordination for major events, border operations, and civil protection emergencies.' },
                { title: 'On-Premises with HIGH ENS Category and CCN-STIC', desc: 'On-premises deployment on certified Spanish infrastructure. Security controls compliant with HIGH-category ENS. CCN-STIC certification for police information systems. LOPDGDD and AEPD guidelines compliance for public safety data.' },
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
                ? 'Los centros 112/SUE y las salas de coordinación del CNP, Guardia Civil, Mossos y Ertzaintza pueden desplegar K-Dispatch para despacho integrado multiagencia, K-Video para videovigilancia con analítica de IA bajo ENS/LOPDGDD y K-Safety para conciencia situacional GIS compartida entre todos los cuerpos de seguridad.'
                : 'Spanish 112/SUE centres and CNP, Guardia Civil, Mossos, and Ertzaintza coordination rooms can deploy K-Dispatch for integrated multi-agency dispatch, K-Video for AI surveillance analytics under ENS/LOPDGDD, and K-Safety for GIS situational awareness shared across all security forces.'}
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
              {es ? 'Software de Seguridad Pública en España' : 'Public Safety Software in Spain'}
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
                { href: '/resources/public-safety-software-france', en: 'Public Safety Software for France: Police Nationale, Gendarmerie & RGPD', es: 'Software de Seguridad Pública para Francia: Police Nationale, Gendarmerie y RGPD' },
                { href: '/resources/public-safety-software-italy', en: 'Public Safety Software for Italy: Polizia, Carabinieri, NUE 112 & GDPR', es: 'Software de Seguridad Pública para Italia: Polizia, Carabinieri, NUE 112 y GDPR' },
                { href: '/resources/public-safety-software-germany', en: 'Public Safety Software for Germany: Leitstellen, BOS Digital & DSGVO', es: 'Software de Seguridad Pública para Alemania: Leitstellen, BOS Digital y DSGVO' },
                { href: '/resources/public-safety-software-united-kingdom', en: 'Public Safety Software for the United Kingdom', es: 'Software de Seguridad Pública para el Reino Unido' },
                { href: '/resources/public-safety-software-middle-east', en: 'Public Safety Software for the Middle East', es: 'Software de Seguridad Pública para Medio Oriente' },
                { href: '/resources/what-is-video-management-software', en: 'What Is VMS Software? Video Management Guide', es: '¿Qué Es el Software VMS? Guía de Gestión de Video' },
                { href: '/resources/what-is-situational-awareness-software', en: 'What Is Situational Awareness Software?', es: '¿Qué Es el Software de Conciencia Situacional?' },
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
          h2={es ? 'Solicita una Demo para tu Centro 112, CNP o Guardia Civil' : 'Request a Demo for Your 112 Centre, CNP, or Guardia Civil'}
          subtitle={es ? 'KabatOne integra despacho 112/SUE, videovigilancia con analítica de IA y conciencia situacional GIS en una plataforma con cumplimiento ENS categoría ALTA, LOPDGDD y certificación CCN-STIC. Demo adaptada al contexto de la seguridad pública española.' : 'KabatOne integrates 112/SUE dispatch, AI surveillance analytics, and GIS situational awareness in a single platform with HIGH-category ENS, LOPDGDD, and CCN-STIC compliance. Demo tailored to the Spanish public safety context.'}
        />

        <Footer es={es} />
      </div>
    </>
  )
}
