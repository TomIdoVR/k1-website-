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
  return generatePageMetadata('publicSafetySoftwareCanada', locale)
}

export default async function PublicSafetySoftwareCanadaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-canada/`
    : `${baseUrl}/resources/public-safety-software-canada/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Canadá' : 'Public Safety Software — Canada', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está estructurado el sistema de seguridad pública en Canadá?',
      answer: 'Canadá opera un sistema de tres niveles: federal (RCMP — Royal Canadian Mounted Police para territorios y contratos provinciales), provincial (policías provinciales como OPP en Ontario, SQ en Quebec) y municipal (servicios de policía, bomberos y EMS locales). Los centros de despacho 911 (PSAPs) operan a nivel municipal y regional. Los PSAP canadienses están transitando a NG911 bajo el marco de la CRTC y CISC.',
    },
    {
      question: '¿Qué es NG911 en Canadá y cuál es el cronograma de implementación?',
      answer: 'El NG911 canadiense (Next Generation 911) es el marco regulatorio de la CRTC para modernizar la infraestructura 911 de análogo a IP. Bajo la Decisión de Radiodifusión y de Télécom 2017-182 de la CRTC, los operadores de telecomunicaciones están implementando i3 ESInet en fases provinciales. Las provincias de Alberta, Ontario y Columbia Británica son las de mayor avance. El software de despacho CAD de los PSAPs debe actualizarse para recibir llamadas multimedia NG911.',
    },
    {
      question: '¿Cómo se financia la tecnología de seguridad pública en Canadá?',
      answer: 'El financiamiento principal proviene del gobierno federal a través de Seguridad Pública Canadá (Public Safety Canada) y del Fondo para la Infraestructura Bilingüe (BIF). Los gobiernos provinciales financian directamente sus cuerpos de policía y servicios de emergencias. La RCMP opera contratos de servicio policial con provincias y municipios. Los municipios con más de 5,000 habitantes generalmente gestionan sus propios presupuestos de tecnología de emergencias a través de licitaciones (RFP/RFQ) provinciales.',
    },
    {
      question: '¿Puede KabatOne integrarse con la infraestructura de cámaras municipales existente en Canadá?',
      answer: 'Sí. KabatOne K-Video integra cualquier cámara ONVIF/RTSP sin reemplazar hardware existente. Las redes CCTV municipales de Toronto, Vancouver, Montreal, Calgary y Edmonton se conectan directamente a la plataforma. Sistemas LPR de autopistas provinciales, controles de acceso y sensores IoT también se integran. KabatOne soporta flujos de trabajo bilingües (EN/FR) para municipios de Quebec y el este de Canadá.',
    },
    {
      question: '¿Qué certificaciones de seguridad cumple KabatOne para agencias canadienses?',
      answer: 'KabatOne está diseñado para alinearse con la Protected B security classification del Gobierno de Canadá (ITSG-33) para datos de seguridad pública sensibles. La plataforma soporta cifrado AES-256, MFA y audit logging completo. Para datos bajo la PIPEDA (Personal Information Protection and Electronic Documents Act), la plataforma puede desplegarse en infraestructura cloud canadiense (AWS ca-central-1, Azure Canada Central) para mantener soberanía de datos.',
    },
    {
      question: '¿Cómo se adquiere KabatOne en Canadá para agencias públicas?',
      answer: 'Las agencias de seguridad pública en Canadá pueden adquirir KabatOne a través de RFP/RFQ provinciales o acuerdos de contratación cooperativa como CanadaBuys (buyandsell.gc.ca) para nivel federal, o contratos provinciales como OECM (Ontario Education Collaborative Marketplace) para Ontario. KabatOne trabaja con integradores de sistemas con experiencia en gobierno canadiense para facilitar el proceso de adquisición y cumplir con requisitos de contenido local donde aplique.',
    },
  ] : [
    {
      question: 'How is the public safety system structured in Canada?',
      answer: 'Canada operates a three-tier system: federal (RCMP — Royal Canadian Mounted Police for territories and provincial contracts), provincial (provincial police services like OPP in Ontario, SQ in Quebec), and municipal (local police, fire, and EMS services). 911 dispatch centers (PSAPs) operate at the municipal and regional level. Canadian PSAPs are transitioning to NG911 under the CRTC and CISC framework.',
    },
    {
      question: 'What is NG911 in Canada and what is the implementation timeline?',
      answer: 'Canadian NG911 (Next Generation 911) is the CRTC regulatory framework to modernize 911 infrastructure from analog to IP. Under CRTC Telecom and Broadcasting Decision 2017-182, telecommunications carriers are implementing i3 ESInet in provincial phases. Alberta, Ontario, and British Columbia are the most advanced. PSAP CAD dispatch software must be upgraded to receive NG911 multimedia calls.',
    },
    {
      question: 'How is public safety technology funded in Canada?',
      answer: 'Primary funding comes from the federal government through Public Safety Canada and provincial governments. The RCMP manages policing service contracts with provinces and municipalities. Municipalities over 5,000 residents typically manage their own emergency technology budgets through provincial RFP/RFQ processes. Federal grants for NG911 infrastructure are available through the CRTC transition program.',
    },
    {
      question: 'Can KabatOne integrate with existing municipal camera infrastructure in Canada?',
      answer: 'Yes. KabatOne K-Video integrates any ONVIF/RTSP camera without hardware replacement. Municipal CCTV networks in Toronto, Vancouver, Montreal, Calgary, and Edmonton connect directly to the platform. Provincial highway LPR systems, access control panels, and IoT sensors also integrate. KabatOne supports bilingual workflows (EN/FR) for Quebec and eastern Canadian municipalities.',
    },
    {
      question: 'What security certifications does KabatOne meet for Canadian agencies?',
      answer: "KabatOne is designed to align with the Government of Canada's Protected B security classification (ITSG-33) for sensitive public safety data. The platform supports AES-256 encryption, MFA, and complete audit logging. For data under PIPEDA (Personal Information Protection and Electronic Documents Act), the platform can be deployed on Canadian cloud infrastructure (AWS ca-central-1, Azure Canada Central) to maintain data sovereignty.",
    },
    {
      question: 'How do Canadian public agencies procure KabatOne?',
      answer: 'Canadian public safety agencies can procure KabatOne through provincial RFP/RFQ processes or cooperative purchasing agreements such as CanadaBuys (buyandsell.gc.ca) at the federal level, or provincial contracts like OECM (Ontario Education Collaborative Marketplace) for Ontario. KabatOne works with system integrators experienced in Canadian government procurement to facilitate the acquisition process and meet local content requirements where applicable.',
    },
  ]

  const challenges = es ? [
    {
      icon: '📞',
      title: 'Modernización NG911 y Transición CRTC',
      desc: 'Los PSAPs canadienses están migrando de sistemas analógicos a infraestructura i3 ESInet bajo el mandato CRTC. KabatOne K-Dispatch integra con ESInet y soporta intake multimedia (texto, video, datos de localización) sin reemplazar hardware de consola existente.',
    },
    {
      icon: '🇨🇦',
      title: 'Coordinación RCMP, Provincial y Municipal',
      desc: 'Incidentes mayores en Canadá involucran tres capas de jurisdicción: RCMP federal, policía provincial (OPP, SQ, RCMP contractual) y PD municipal. K-Safety provee un Common Operating Picture compartido en tiempo real que respeta límites jurisdiccionales mientras coordina la respuesta.',
    },
    {
      icon: '🌐',
      title: 'Requisitos Bilingües (EN/FR)',
      desc: 'Las agencias federales y las de Quebec operan en inglés y francés. KabatOne soporta interfaz bilingüe completa para operadores, supervisores y reportes. La plataforma cumple con la Ley de Idiomas Oficiales de Canadá para despliegues federales y de Quebec.',
    },
    {
      icon: '🔒',
      title: 'Soberanía de Datos y PIPEDA',
      desc: 'Los datos de seguridad pública en Canadá deben residir dentro de fronteras canadienses bajo la PIPEDA. KabatOne puede desplegarse en AWS ca-central-1 o Azure Canada Central, o en infraestructura on-premise provincial/municipal para cumplir con requisitos de soberanía de datos.',
    },
  ] : [
    {
      icon: '📞',
      title: 'NG911 Modernization and CRTC Transition',
      desc: 'Canadian PSAPs are migrating from analog systems to i3 ESInet infrastructure under the CRTC mandate. KabatOne K-Dispatch integrates with ESInet and supports multimedia intake (text, video, location data) without replacing existing console hardware.',
    },
    {
      icon: '🇨🇦',
      title: 'RCMP, Provincial, and Municipal Coordination',
      desc: 'Major incidents in Canada involve three jurisdictional layers: federal RCMP, provincial police (OPP, SQ, contract RCMP), and municipal PD. K-Safety provides a shared real-time Common Operating Picture that respects jurisdictional boundaries while coordinating response.',
    },
    {
      icon: '🌐',
      title: 'Bilingual Requirements (EN/FR)',
      desc: 'Federal agencies and Quebec operations must run in English and French. KabatOne supports full bilingual interface for operators, supervisors, and reports — compliant with Canada\'s Official Languages Act for federal and Quebec deployments.',
    },
    {
      icon: '🔒',
      title: 'Data Sovereignty and PIPEDA',
      desc: 'Public safety data in Canada must reside within Canadian borders under PIPEDA. KabatOne can be deployed on AWS ca-central-1 or Azure Canada Central, or on provincial/municipal on-premise infrastructure to meet data sovereignty requirements.',
    },
  ]

  const stats = [
    { value: '700+', label: es ? 'PSAPs en Canadá' : 'PSAPs across Canada' },
    { value: '12M+', label: es ? 'Llamadas 911/Año' : '911 Calls / Year' },
    { value: '3', label: es ? 'Niveles de Jurisdicción' : 'Jurisdictional Levels' },
    { value: '37M+', label: es ? 'Ciudadanos' : 'Citizens' },
  ]

  const products = [
    {
      name: 'K-Dispatch',
      href: '/k-dispatch',
      desc: es
        ? 'CAD con despacho 911, soporte NG911/ESInet y coordinación multiagencia para PSAPs canadienses.'
        : 'CAD dispatch with 911 intake, NG911/ESInet support, and multi-agency coordination for Canadian PSAPs.',
    },
    {
      name: 'K-Safety',
      href: '/k-safety',
      desc: es
        ? 'Common Operating Picture GIS que unifica RCMP, policía provincial y servicios municipales en un solo mapa.'
        : 'GIS Common Operating Picture unifying RCMP, provincial police, and municipal services on one operational map.',
    },
    {
      name: 'K-Video',
      href: '/k-video',
      desc: es
        ? 'VMS que integra cámaras municipales, LPR de autopistas y sensores IoT con interfaz bilingüe EN/FR.'
        : 'VMS integrating municipal cameras, highway LPR, and IoT sensors with full bilingual EN/FR interface.',
    },
  ]

  const articleHeadline = es
    ? 'Software de Seguridad Pública para Canadá: NG911, PSAP y Coordinación Multiagencia'
    : 'Public Safety Software for Canada: NG911, PSAP Dispatch, and Multi-Agency Coordination'
  const articleDescription = es
    ? 'Guía de tecnología de seguridad pública para Canadá: NG911 y CRTC, coordinación RCMP/provincial/municipal, requisitos bilingües y soberanía de datos bajo PIPEDA.'
    : 'Technology guide for Canadian public safety agencies: NG911 and CRTC mandate, RCMP/provincial/municipal coordination, bilingual requirements, and data sovereignty under PIPEDA.'

  return (
    <>
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(articleHeadline, articleDescription, pageUrl, '2026-05-18')) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />

      <main style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <section style={{ padding: '64px 32px 56px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

            {/* Breadcrumb */}
            <nav style={{ fontSize: '12px', color: 'var(--dim)', marginBottom: '32px', display: 'flex', gap: '6px', alignItems: 'center' }}>
              <Link href="/" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Inicio' : 'Home'}</Link>
              <span>/</span>
              <Link href="/resources" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Recursos' : 'Resources'}</Link>
              <span>/</span>
              <span style={{ color: 'var(--white)' }}>{es ? 'Canadá' : 'Canada'}</span>
            </nav>

            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: ACCENT, background: 'rgba(59,130,246,0.1)', padding: '4px 12px', borderRadius: '4px' }}>
                {es ? 'Guía de Mercado' : 'Market Guide'}
              </span>
              <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#ef4444', background: 'rgba(239,68,68,0.1)', padding: '4px 12px', borderRadius: '4px' }}>
                🇨🇦 {es ? 'Canadá' : 'Canada'}
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 60px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', lineHeight: 1.05, marginBottom: '24px' }}>
              {es
                ? 'Software de Seguridad Pública para Agencias Canadienses'
                : 'Public Safety Software for Canadian Agencies'}
            </h1>

            <p style={{ fontSize: '18px', color: 'var(--dim)', lineHeight: 1.7, maxWidth: '740px', marginBottom: '32px' }}>
              {es
                ? 'Plataforma unificada para PSAPs, policía municipal y servicios de emergencias en Canadá — despacho CAD con soporte NG911/CRTC, video analytics y GIS operativo para coordinación entre RCMP, provincial y municipal con interfaz bilingüe EN/FR.'
                : 'Unified platform for Canadian PSAPs, municipal police services, and emergency agencies — CAD dispatch with NG911/CRTC support, video analytics, and operational GIS for RCMP, provincial, and municipal coordination with full EN/FR bilingual interface.'}
            </p>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }} className="stats-grid">
              {stats.map((s, i) => (
                <div key={i} style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.18)', borderRadius: '10px', padding: '20px 16px', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', color: '#60a5fa', marginBottom: '4px' }}>{s.value}</div>
                  <div style={{ fontSize: '11px', color: 'var(--dim)', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CANADA LANDSCAPE ── */}
        <section style={{ padding: '64px 32px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', marginBottom: '24px' }}>
              {es ? 'El Ecosistema de Seguridad Pública en Canadá' : 'The Canadian Public Safety Technology Ecosystem'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
              <div>
                <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.8, marginBottom: '20px' }}>
                  {es
                    ? 'Canadá opera más de 700 PSAPs que atienden 12 millones de llamadas al 911 anuales. La complejidad jurisdiccional es única: la RCMP presta servicios policiales a nivel federal y bajo contratos con provincias y municipios; provincias como Ontario (OPP) y Quebec (SQ) operan cuerpos provinciales propios; y los municipios de más de 15,000 habitantes generalmente tienen departamentos de policía locales.'
                    : 'Canada operates over 700 PSAPs handling 12 million 911 calls annually. Jurisdictional complexity is unique: the RCMP provides policing at the federal level and under provincial/municipal contracts; provinces like Ontario (OPP) and Quebec (SQ) operate their own provincial forces; and municipalities over 15,000 residents typically have local police departments.'}
                </p>
                <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.8 }}>
                  {es
                    ? 'El mercado de software de seguridad pública en Canadá está dominado por los mismos proveedores que en EE.UU. — Motorola, Tyler Technologies, CentralSquare — con Hexagon Safety y algunos proveedores canadienses como Intergraph. La transición NG911 está abriendo oportunidades para plataformas modernas que soporten multimedia y coordinación multiagencia nativa.'
                    : 'The Canadian public safety software market is dominated by the same vendors as the US — Motorola, Tyler Technologies, CentralSquare — with Hexagon Safety and some Canadian providers like Intergraph. The NG911 transition is opening opportunities for modern platforms that natively support multimedia and multi-agency coordination.'}
                </p>
              </div>
              <div>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px' }}>
                  <p style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: ACCENT, marginBottom: '16px' }}>
                    {es ? 'Estructura Policial en Canadá' : 'Canadian Police Structure'}
                  </p>
                  {[
                    { label: 'Federal', desc: 'RCMP (Royal Canadian Mounted Police)' },
                    { label: 'Provincial ON', desc: 'OPP (Ontario Provincial Police)' },
                    { label: 'Provincial QC', desc: 'SQ (Sûreté du Québec)' },
                    { label: 'Municipal', desc: 'Toronto PS, Vancouver PD, Calgary PS, etc.' },
                    { label: 'RCMP Contract', desc: es ? '8 provincias + 3 territorios (excepto ON/QC)' : '8 provinces + 3 territories (exc. ON/QC)' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '12px', padding: '10px 0', borderBottom: i < 4 ? '1px solid var(--border)' : 'none' }}>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--white)', minWidth: '120px', flexShrink: 0 }}>{item.label}</span>
                      <span style={{ fontSize: '13px', color: 'var(--dim)' }}>{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHALLENGES ── */}
        <section style={{ padding: '64px 32px', borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', marginBottom: '8px' }}>
              {es ? '4 Desafíos Clave para Agencias de Seguridad Pública en Canadá' : '4 Key Challenges for Canadian Public Safety Agencies'}
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--dim)', marginBottom: '40px', lineHeight: 1.7 }}>
              {es
                ? 'Las agencias canadienses enfrentan la transición NG911 bajo la CRTC, coordinación entre tres niveles jurisdiccionales, requisitos bilingües y soberanía de datos bajo PIPEDA.'
                : 'Canadian agencies face the NG911 transition under CRTC, coordination across three jurisdictional levels, bilingual requirements, and data sovereignty under PIPEDA.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              {challenges.map((c, i) => (
                <div key={i} style={{ background: '#0b1628', border: '1px solid var(--border)', borderRadius: '12px', padding: '28px' }}>
                  <div style={{ fontSize: '28px', marginBottom: '12px' }}>{c.icon}</div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '10px', color: 'var(--white)' }}>{c.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ── */}
        <section style={{ padding: '64px 32px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', marginBottom: '8px' }}>
              {es ? 'La Plataforma KabatOne para Agencias Canadienses' : 'KabatOne Platform for Canadian Agencies'}
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--dim)', marginBottom: '32px', lineHeight: 1.7 }}>
              {es
                ? 'Tres productos integrados nativamente — sin middleware — que cubren video, despacho y operaciones de campo para PSAPs y departamentos de policía en Canadá.'
                : 'Three natively integrated products covering video, dispatch, and field operations for Canadian PSAPs and police services — with bilingual EN/FR interface throughout.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {products.map((p, i) => (
                <Link key={i} href={p.href} style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: '#0b1628', border: '1px solid var(--border)', borderRadius: '12px', padding: '28px', textDecoration: 'none', color: 'inherit' }}>
                  <span style={{ fontSize: '16px', fontWeight: 700, color: '#60a5fa' }}>{p.name}</span>
                  <span style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.65 }}>{p.desc}</span>
                  <span style={{ fontSize: '13px', color: ACCENT, marginTop: 'auto' }}>{es ? 'Ver producto →' : 'View product →'}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section style={{ padding: '64px 32px', borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', marginBottom: '32px' }}>
              {es ? 'Preguntas Frecuentes — Canadá' : 'Frequently Asked Questions — Canada'}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ padding: '24px 0', borderBottom: '1px solid var(--border)' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--white)', marginBottom: '10px', lineHeight: 1.5 }}>{faq.question}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.75 }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED ── */}
        <section style={{ padding: '48px 32px 64px' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--dim)', marginBottom: '16px' }}>
              {es ? 'Recursos Relacionados' : 'Related Resources'}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {[
                { href: '/resources/public-safety-software-united-states', label: es ? 'Software Seguridad Pública EE.UU.' : 'Public Safety Software — United States' },
                { href: '/resources/public-safety-software-united-kingdom', label: es ? 'Software Seguridad Pública Reino Unido' : 'Public Safety Software — United Kingdom' },
                { href: '/resources/public-safety-software-australia', label: es ? 'Software Seguridad Pública Australia' : 'Public Safety Software — Australia' },
                { href: '/resources/public-safety-software-middle-east', label: es ? 'Software Seguridad Pública Medio Oriente' : 'Public Safety Software — Middle East' },
                { href: '/resources/best-cad-dispatch-software', label: es ? 'Mejor Software CAD 2026' : 'Best CAD Dispatch Software 2026' },
                { href: '/resources/what-is-a-real-time-crime-center', label: es ? 'Centro de Crimen en Tiempo Real' : 'Real-Time Crime Center' },
                { href: '/resources/what-is-a-psap', label: es ? '¿Qué es un PSAP?' : 'What Is a PSAP?' },
                { href: '/resources/cctv-video-analytics', label: es ? 'Analítica de Video con IA' : 'AI Video Analytics' },
              ].map((r) => (
                <Link key={r.href} href={r.href} style={{ fontSize: '12px', color: '#64748b', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', padding: '6px 12px', textDecoration: 'none' }}>
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          es={es}
          h2={es ? 'Moderniza tu Agencia de Seguridad Pública en Canadá' : 'Modernize Your Canadian Public Safety Agency'}
          subtitle={es
            ? 'KabatOne integra CAD, video y GIS con soporte NG911/CRTC e interfaz bilingüe EN/FR. Agenda una demo con nuestro equipo.'
            : 'KabatOne unifies CAD, video, and GIS with NG911/CRTC support and full EN/FR bilingual interface. Schedule a demo with our team.'}
          cta1={es ? 'Solicitar Demo' : 'Book a Demo'}
          cta2={es ? 'Contactar Ventas' : 'Contact Sales'}
        />

      </main>

      <Footer es={es} />

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
