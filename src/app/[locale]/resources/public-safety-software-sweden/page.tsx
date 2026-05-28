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
  return generatePageMetadata('publicSafetySoftwareSweden', locale)
}

export default async function PublicSafetySoftwareSwedenPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-sweden/`
    : `${baseUrl}/resources/public-safety-software-sweden/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Suecia' : 'Public Safety Software — Sweden', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en Suecia?',
      answer: 'Suecia opera un sistema policial nacional unificado bajo Polisen (Polismyndigheten), que desde la reforma de 2015 integró los 21 condados en una fuerza única con 7 regiones policiales y ~33,000 agentes. Antes de la reforma existían 21 fuerzas condales separadas. El sistema de emergencias médicas y bomberos está gestionado a nivel municipal y regional, con los räddningstjänst (servicios de rescate). SOS Alarm AB gestiona el centro de llamadas del número 112 con 18 centros de despacho SOS Alarm distribuidos por el país, bajo contrato con el gobierno sueco. La MSB (Myndigheten för samhällsskydd och beredskap — Agencia de Protección Civil y Preparación) coordina la respuesta a emergencias de gran escala y la ciberseguridad de infraestructuras críticas. La Guardia Costera sueca (Kustbevakningen) cubre emergencias marítimas.',
    },
    {
      question: '¿Cómo funciona el despacho de emergencias en Suecia? ¿Qué es SOS Alarm?',
      answer: 'Suecia utiliza el número europeo único 112, gestionado por SOS Alarm AB, empresa propiedad 50% del Estado sueco y 50% de municipios y regiones. SOS Alarm opera 18 centros de despacho que coordinan policía, bomberos, ambulancias y guardacostas. El sistema ZENIT (Zentralized Emergency Network Integration Technology) de SOS Alarm es la plataforma CAD nacional que asigna recursos de emergencia en toda Suecia. Los centros SOS Alarm reciben ~3 millones de llamadas al año. Polisen tiene sus egna ledningscentraler (centros de mando) en cada región policial que coordinan la respuesta policial en coordinación con SOS Alarm. El proyecto de modernización digital de SOS Alarm y la Estrategia Digital de Polisen están impulsando la adopción de nuevas plataformas tecnológicas con capacidades de IA y cloud.',
    },
    {
      question: '¿Qué papel juega la MSB y cuál es el marco de gestión de emergencias en Suecia?',
      answer: 'La MSB (Myndigheten för samhällsskydd och beredskap) es la agencia central de seguridad civil y gestión de emergencias de Suecia. La MSB coordina la respuesta a emergencias de gran escala, la preparación ante desastres y la ciberseguridad de infraestructuras críticas bajo el marco NCSC sueco (National Cyber Security Centre, junto con SÄPO, Must, FRA y PTS). Las 290 municipalidades son responsables de los räddningstjänst (servicios de rescate y bomberos), mientras que las 21 regiones gestionan las ambulancias. El sistema RAKEL (Radiokommunikation för Effektiv Ledning) es la red de radiocomunicación digital para todas las agencias de seguridad pública suecas — equivalente al TETRA británico. La implementación de NIS2 y la Directiva de Resiliencia de Entidades Críticas (CER) en Suecia refuerzan los requisitos de ciberseguridad para los operadores de infraestructuras críticas, incluyendo los sistemas de seguridad pública.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en Suecia?',
      answer: 'La contratación pública en Suecia se rige por la Ley de Contratación Pública (LOU — Lagen om offentlig upphandling), que implementa las directivas europeas de contratación. Los contratos se publican en Tendsign (portal nacional) y en TED (OJEU para contratos mayores). Polisen centraliza sus compras de TI a través de Polisens IT-avdelning y participa en acuerdos marco de Statens inköpscentral (la central de compras del Estado). SOS Alarm licita su plataforma ZENIT y las mejoras tecnológicas de forma independiente. Los proveedores extranjeros pueden acceder al mercado directamente o a través de socios suecos. Los sistemas cloud para agencias gubernamentales deben cumplir los requisitos de la MSB y la Autoridad de Protección de Datos (IMY) sobre soberanía de datos y la prohibición de transferir datos personales fuera del EEE sin garantías adecuadas según el RGPD sueco.',
    },
    {
      question: '¿Cuáles son los requisitos de privacidad y ciberseguridad para software policial en Suecia?',
      answer: 'El software de seguridad pública en Suecia debe cumplir el RGPD (Förordning (EU) 2016/679), implementado en Suecia a través de la Dataskyddslagen. La autoridad supervisora es la IMY (Integritetsskyddsmyndigheten — antes Datainspektionen). Los sistemas policiales deben cumplir adicionalmente la Ley de Datos de la Policía (Polisdatalagen 2010:361) y su reglamento. Para ciberseguridad, los requisitos se derivan de la NIS2 (Direktiv (EU) 2022/2555, implementada en Suecia), la Säkerhetsskyddslagen (Ley de Protección de Seguridad) para sistemas clasificados, y las directrices del NCSC sueco. Los sistemas RAKEL y las telecomunicaciones de emergencia están sujetos a requisitos adicionales del PTS (Post- och telestyrelsen). Los servicios cloud deben cumplir la resolución del Tribunal de Justicia de la UE Schrems II sobre transferencias internacionales de datos.',
    },
    {
      question: '¿Qué infraestructura de videovigilancia tiene Suecia y cómo se gestiona?',
      answer: 'Suecia tiene una infraestructura de videovigilancia más limitada que otros países europeos, reflejo de una tradición cultural de privacidad. El uso de cámaras de vigilancia en espacio público está regulado por la Kameraövervakningslag (Ley de Vigilancia por Cámaras, 2013), que requiere autorización de la IMY para cámaras en espacios accesibles al público. Polisen gestiona cámaras en zonas críticas y participa en programas de vigilancia colaborativa con municipios. Las ciudades como Estocolmo, Gotemburgo y Malmö tienen redes de cámaras de tráfico y seguridad gestionadas por los municipios. El sistema RAKEL integra la comunicación entre policía, bomberos y EMS para coordinación operativa. Polisen está modernizando su infraestructura de videovigilancia con analítica de IA para reconocimiento de matrículas (ANPR) y búsqueda forense, sujeto a las directrices de la IMY sobre uso de biometría.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para Polisen, SOS Alarm y los servicios de rescate suecos?',
      answer: 'KabatOne integra las funciones que Polisen, SOS Alarm y los räddningstjänst suecos gestionan a través de plataformas separadas: despacho CAD unificado compatible con los flujos de trabajo de los 18 centros SOS Alarm y los ledningscentraler de las 7 regiones policiales de Polisen — con clasificación automática de incidentes y asignación de recursos (K-Dispatch), gestión de redes de cámaras de vigilancia con analítica de IA conforme a la Kameraövervakningslag, la IMY y el RGPD — ANPR, detección de comportamientos, búsqueda forense (K-Video), y conciencia situacional GIS compartida entre Polisen, SOS Alarm, räddningstjänst y la MSB (K-Safety). Integración con el ecosistema RAKEL para coordinación de radiocomunicaciones. Despliegue on-premises o cloud en EEE con cumplimiento RGPD/IMY/NIS2. Demo adaptada al contexto de la reforma policial sueca y el marco de gestión de emergencias de la MSB.',
    },
  ] : [
    {
      question: 'How is public safety organised in Sweden?',
      answer: 'Sweden operates a unified national police force under Polisen (Polismyndigheten), which since the 2015 reform consolidated 21 county forces into a single agency with 7 police regions and ~33,000 officers. Emergency medical services and fire are managed at the municipal and regional level through räddningstjänst (rescue services). SOS Alarm AB manages the 112 emergency call centre with 18 SOS Alarm dispatch centres across Sweden, under contract with the Swedish government. The MSB (Myndigheten för samhällsskydd och beredskap — Swedish Civil Contingencies Agency) coordinates large-scale emergency response and cybersecurity for critical infrastructure. The Swedish Coast Guard (Kustbevakningen) covers maritime emergencies.',
    },
    {
      question: 'How does emergency dispatch work in Sweden? What is SOS Alarm?',
      answer: 'Sweden uses the European 112 number, managed by SOS Alarm AB — a company 50% owned by the Swedish state and 50% by municipalities and regions. SOS Alarm operates 18 dispatch centres coordinating police, fire, ambulance, and coast guard. The ZENIT (Zentralized Emergency Network Integration Technology) system is SOS Alarm\'s national CAD platform assigning emergency resources across Sweden. SOS Alarm centres receive ~3 million calls annually. Polisen has its own ledningscentraler (command centres) in each police region, coordinating police response in cooperation with SOS Alarm. The SOS Alarm digital modernisation project and Polisen\'s Digital Strategy are driving adoption of new technology platforms with AI and cloud capabilities.',
    },
    {
      question: 'What role does MSB play and what is Sweden\'s emergency management framework?',
      answer: 'The MSB (Myndigheten för samhällsskydd och beredskap) is Sweden\'s central civil security and emergency management agency. MSB coordinates large-scale emergency response, disaster preparedness, and cybersecurity for critical infrastructure under the Swedish NCSC (National Cyber Security Centre, together with SÄPO, Must, FRA, and PTS). The 290 municipalities are responsible for räddningstjänst (rescue and fire services), while 21 regions manage ambulance services. RAKEL (Radiokommunikation för Effektiv Ledning) is the digital radio communication network for all Swedish public safety agencies — the Swedish equivalent of UK\'s TETRA network. The implementation of NIS2 and the Critical Entities Resilience (CER) Directive in Sweden strengthens cybersecurity requirements for critical infrastructure operators, including public safety systems.',
    },
    {
      question: 'How is public safety software procured in Sweden?',
      answer: 'Government procurement in Sweden is governed by the Public Procurement Act (LOU — Lagen om offentlig upphandling), implementing EU procurement directives. Contracts are published on Tendsign (national portal) and TED (OJEU for larger contracts). Polisen centralises its IT procurement through Polisens IT-avdelning and participates in framework agreements from Statens inköpscentral (the state procurement centre). SOS Alarm tenders its ZENIT platform and technology upgrades independently. Foreign vendors may access the market directly or through Swedish partners. Cloud systems for government agencies must meet MSB and Data Protection Authority (IMY) requirements on data sovereignty and the prohibition on transferring personal data outside the EEA without adequate safeguards under Swedish GDPR implementation.',
    },
    {
      question: 'What are the privacy and cybersecurity requirements for police software in Sweden?',
      answer: 'Public safety software in Sweden must comply with the GDPR (Förordning (EU) 2016/679), implemented in Sweden through the Dataskyddslagen. The supervisory authority is IMY (Integritetsskyddsmyndigheten — formerly Datainspektionen). Police systems must also comply with the Police Data Act (Polisdatalagen 2010:361). For cybersecurity, requirements derive from NIS2 (Directive (EU) 2022/2555, implemented in Sweden), the Säkerhetsskyddslagen (Security Protection Act) for classified systems, and Swedish NCSC guidelines. RAKEL and emergency telecommunications systems are subject to additional PTS (Post- och telestyrelsen) requirements. Cloud services must comply with the CJEU Schrems II ruling on international data transfers.',
    },
    {
      question: 'What video surveillance infrastructure does Sweden have and how is it managed?',
      answer: 'Sweden has a more limited video surveillance infrastructure than other European countries, reflecting a cultural tradition of privacy. The use of surveillance cameras in public spaces is regulated by the Kameraövervakningslag (Camera Surveillance Act, 2013), which requires IMY authorisation for cameras in publicly accessible spaces. Polisen manages cameras in critical areas and participates in collaborative surveillance programmes with municipalities. Cities like Stockholm, Gothenburg, and Malmö have traffic and security camera networks managed by municipalities. The RAKEL system integrates police, fire, and EMS communications for operational coordination. Polisen is modernising its video surveillance infrastructure with AI analytics for licence plate recognition (ANPR) and forensic search, subject to IMY guidelines on biometrics.',
    },
    {
      question: 'Why is KabatOne suited for Polisen, SOS Alarm, and Sweden\'s rescue services?',
      answer: 'KabatOne integrates the functions that Polisen, SOS Alarm, and Swedish räddningstjänst manage through separate platforms: unified CAD dispatch compatible with the workflows of 18 SOS Alarm centres and Polisen\'s 7 regional ledningscentraler — with automatic incident classification and resource assignment (K-Dispatch), surveillance camera network management with AI analytics compliant with the Kameraövervakningslag, IMY, and GDPR — ANPR, behaviour detection, forensic search (K-Video), and shared GIS situational awareness across Polisen, SOS Alarm, räddningstjänst, and MSB (K-Safety). Integration with the RAKEL radio communication ecosystem. On-premises or EEA cloud deployment with GDPR/IMY/NIS2 compliance. Demo tailored to Sweden\'s police reform context and MSB emergency management framework.',
    },
  ]

  const challenges = es ? [
    { color: '#3b82f6', title: 'Reforma Policial 2015 — Coordinación de 7 Regiones Nacionales', desc: 'La unificación de 21 fuerzas condales en Polisen simplificó la estructura, pero la coordinación entre los 7 ledningscentraler regionales y los 18 centros SOS Alarm sigue requiriendo integración tecnológica para gestionar incidentes transfronterizos y operaciones a escala nacional.' },
    { color: '#06b6d4', title: 'Modernización de SOS Alarm ZENIT — Plataforma CAD Nacional', desc: 'SOS Alarm está modernizando su plataforma ZENIT con capacidades de IA y cloud. Los proveedores deben demostrar interoperabilidad con los flujos de trabajo de SOS Alarm, cumplimiento RGPD/IMY y capacidad para gestionar ~3 millones de llamadas anuales en los 18 centros distribuidos.' },
    { color: '#8b5cf6', title: 'RAKEL y Telecomunicaciones de Emergencia — Integración Multiagencia', desc: 'La red RAKEL integra policía, bomberos, EMS y guardacostas en una infraestructura de comunicaciones única. Las plataformas de seguridad pública deben integrarse con RAKEL y prepararse para su eventual sustitución por la red 5G de misión crítica (MC-PTT, 3GPP).' },
    { color: '#f59e0b', title: 'NIS2 y Ciberseguridad — Requisitos para Infraestructuras Críticas', desc: 'La implementación sueca de NIS2 y la Säkerhetsskyddslagen establecen requisitos estrictos para los sistemas de seguridad pública. Los proveedores cloud deben garantizar soberanía de datos en el EEE, gestión de incidentes de ciberseguridad y cumplimiento de las directrices del NCSC sueco.' },
  ] : [
    { color: '#3b82f6', title: '2015 Police Reform — Coordination Across 7 National Regions', desc: 'The consolidation of 21 county forces into Polisen simplified the structure, but coordination between 7 regional ledningscentraler and 18 SOS Alarm centres still requires technology integration for cross-border incidents and national-scale operations.' },
    { color: '#06b6d4', title: 'SOS Alarm ZENIT Modernisation — National CAD Platform', desc: 'SOS Alarm is modernising its ZENIT platform with AI and cloud capabilities. Vendors must demonstrate interoperability with SOS Alarm workflows, GDPR/IMY compliance, and the capacity to handle ~3 million annual calls across 18 distributed centres.' },
    { color: '#8b5cf6', title: 'RAKEL and Emergency Telecoms — Multi-Agency Integration', desc: 'The RAKEL network integrates police, fire, EMS, and coast guard on a single communications infrastructure. Public safety platforms must integrate with RAKEL and prepare for its eventual replacement by the 5G mission-critical network (MC-PTT, 3GPP).' },
    { color: '#f59e0b', title: 'NIS2 and Cybersecurity — Critical Infrastructure Requirements', desc: 'Sweden\'s NIS2 implementation and the Säkerhetsskyddslagen set strict requirements for public safety systems. Cloud vendors must guarantee EEA data sovereignty, cybersecurity incident management, and compliance with Swedish NCSC guidelines.' },
  ]

  const containerStyle: React.CSSProperties = { maxWidth: '860px', margin: '0 auto' }
  const sectionStyle: React.CSSProperties = { padding: '64px 32px' }
  const h2Style: React.CSSProperties = { fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(24px, 3vw, 36px)', textTransform: 'uppercase', letterSpacing: '0.02em', color: 'var(--white)', marginTop: 0, marginBottom: '24px' }
  const pStyle: React.CSSProperties = { fontSize: '15px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.75, marginBottom: '16px', marginTop: 0 }

  return (
    <>
      <Nav />

      {/* ── Structured Data ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        articleSchema(
          es ? 'Software de Seguridad Pública para Suecia: Polisen, SOS Alarm 112, MSB, RAKEL, RGPD y NIS2' : 'Public Safety Software for Sweden: Polisen, SOS Alarm 112, MSB, RAKEL, GDPR & NIS2',
          es ? 'Plataforma unificada para Polisen, SOS Alarm y los räddningstjänst suecos — despacho CAD 112 ZENIT-compatible, gestión de cámaras RAKEL-integrada y cumplimiento RGPD/IMY/NIS2.' : 'Unified platform for Polisen, SOS Alarm, and Swedish räddningstjänst — 112 ZENIT-compatible CAD dispatch, RAKEL-integrated camera management, and GDPR/IMY/NIS2 compliance.',
          pageUrl,
          '2026-05-19'
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
            <span style={{ color: 'var(--dim)' }}>{es ? 'Software de Seguridad Pública — Suecia' : 'Public Safety Software — Sweden'}</span>
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
                ? 'Software de Seguridad Pública para Suecia: Polisen, SOS Alarm 112, MSB, RAKEL, RGPD y NIS2'
                : 'Public Safety Software for Sweden: Polisen, SOS Alarm 112, MSB, RAKEL, GDPR & NIS2'}
            </h1>
            <p style={{ ...pStyle, fontSize: '18px', maxWidth: '720px' }}>
              {es
                ? 'Suecia opera una fuerza policial nacional unificada (Polisen) con 7 regiones y ~33,000 agentes, SOS Alarm como operador del 112 con 18 centros y la red RAKEL integrando todas las agencias de seguridad pública. La modernización de la plataforma ZENIT de SOS Alarm y la Estrategia Digital de Polisen abren nuevas oportunidades para plataformas cloud con IA. KabatOne unifica el despacho CAD 112, la gestión de videovigilancia y la conciencia situacional GIS bajo cumplimiento RGPD/IMY y NIS2.'
                : 'Sweden operates a unified national police force (Polisen) with 7 regions and ~33,000 officers, SOS Alarm as the 112 operator with 18 centres, and the RAKEL network integrating all public safety agencies. The modernisation of SOS Alarm\'s ZENIT platform and Polisen\'s Digital Strategy are opening new opportunities for AI-enabled cloud platforms. KabatOne unifies 112 CAD dispatch, video surveillance management, and GIS situational awareness under GDPR/IMY and NIS2 compliance.'}
            </p>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '40px 32px', background: 'rgba(59,130,246,0.04)' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }}>
            {(es ? [
              { value: '7', label: 'Regiones policiales de Polisen tras la reforma nacional de 2015' },
              { value: '18', label: 'Centros de despacho SOS Alarm para el número de emergencia 112' },
              { value: 'RAKEL', label: 'Red TETRA nacional que integra policía, bomberos, EMS y guardacostas' },
              { value: '10.5M', label: 'Habitantes — mercado nórdico de alta tecnología con alto gasto público' },
            ] : [
              { value: '7', label: 'Polisen police regions following the 2015 national reform' },
              { value: '18', label: 'SOS Alarm dispatch centres for the 112 emergency number' },
              { value: 'RAKEL', label: 'National TETRA network integrating police, fire, EMS, and coast guard' },
              { value: '10.5M', label: 'Population — high-tech Nordic market with high public spending' },
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
            <h2 style={h2Style}>{es ? 'Retos Operativos para la Seguridad Pública en Suecia' : 'Operational Challenges for Public Safety in Sweden'}</h2>
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
            <h2 style={h2Style}>{es ? 'Cómo KabatOne Responde a los Requisitos de Polisen, SOS Alarm y los Räddningstjänst Suecos' : 'How KabatOne Addresses Polisen, SOS Alarm, and Swedish Räddningstjänst Requirements'}</h2>
            <p style={pStyle}>
              {es
                ? 'KabatOne está diseñado para los ledningscentraler de las 7 regiones de Polisen, los 18 centros de despacho de SOS Alarm y los centros de mando de räddningstjänst que necesitan un dashboard unificado para gestionar el despacho 112, monitorizar redes de cámaras de vigilancia con analítica de IA y coordinar la respuesta de múltiples agencias — todo bajo los requisitos del RGPD/IMY, la Polisdatalagen, la NIS2 y la Säkerhetsskyddslagen.'
                : 'KabatOne is designed for Polisen\'s 7 regional ledningscentraler, SOS Alarm\'s 18 dispatch centres, and räddningstjänst command centres that need a unified dashboard to manage 112 dispatch, monitor surveillance camera networks with AI analytics, and coordinate multi-agency response — all under GDPR/IMY, Polisdatalagen, NIS2, and Säkerhetsskyddslagen requirements.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {(es ? [
                { title: 'Despacho CAD 112 Compatible con ZENIT y los Ledningscentraler de Polisen', desc: 'K-Dispatch gestiona el despacho 112 con clasificación automática de incidentes, asignación de recursos y coordinación entre los 18 centros SOS Alarm y los 7 ledningscentraler de Polisen — interoperable con la plataforma ZENIT y los flujos de los räddningstjänst municipales.' },
                { title: 'Gestión de Cámaras con Analítica IA conforme RGPD/IMY y Kameraövervakningslag', desc: 'K-Video integra redes de cámaras de Polisen, municipales y de tráfico con analítica de IA — ANPR, detección de comportamientos, búsqueda forense — cumpliendo los requisitos de autorización IMY, las directrices de la Kameraövervakningslag y las normas RGPD para datos biométricos.' },
                { title: 'Conciencia Situacional GIS Multiagencia con MSB y RAKEL', desc: 'K-Safety proporciona el mapa operativo GIS compartido entre Polisen, SOS Alarm, räddningstjänst, Kustbevakningen y la MSB — con posiciones de unidades en tiempo real, gestión de incidentes de gran escala y coordinación para emergencias nacionales bajo el marco de preparación civil de la MSB.' },
                { title: 'Cloud EEE con Cumplimiento RGPD/NIS2 y On-Premises', desc: 'Despliegue on-premises o en cloud dentro del EEE con soberanía de datos sueca. Cumplimiento RGPD, Dataskyddslagen, Polisdatalagen, NIS2 y Säkerhetsskyddslagen. Compatible con los procesos de licitación de Statens inköpscentral y Tendsign. Preparado para integración con la futura red MC-PTT 5G que sustituirá al RAKEL.' },
              ] : [
                { title: 'ZENIT-Compatible 112 CAD Dispatch and Polisen Ledningscentraler', desc: 'K-Dispatch manages 112 dispatch with automatic incident classification, resource assignment, and coordination between 18 SOS Alarm centres and Polisen\'s 7 ledningscentraler — interoperable with the ZENIT platform and municipal räddningstjänst workflows.' },
                { title: 'AI Camera Management Compliant with GDPR/IMY and Kameraövervakningslag', desc: 'K-Video integrates Polisen, municipal, and traffic camera networks with AI analytics — ANPR, behaviour detection, forensic search — meeting IMY authorisation requirements, Kameraövervakningslag guidelines, and GDPR standards for biometric data.' },
                { title: 'Multi-Agency GIS Situational Awareness with MSB and RAKEL', desc: 'K-Safety provides the shared GIS operational map across Polisen, SOS Alarm, räddningstjänst, Kustbevakningen, and MSB — with real-time unit positions, large-scale incident management, and coordination for national emergencies under the MSB civil preparedness framework.' },
                { title: 'EEA Cloud with GDPR/NIS2 Compliance and On-Premises', desc: 'On-premises or EEA cloud deployment with Swedish data sovereignty. GDPR, Dataskyddslagen, Polisdatalagen, NIS2, and Säkerhetsskyddslagen compliance. Compatible with Statens inköpscentral and Tendsign procurement processes. Ready for integration with the future MC-PTT 5G network replacing RAKEL.' },
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
                ? 'Los ledningscentraler de Polisen, los centros SOS Alarm y los räddningstjänst suecos pueden desplegar K-Dispatch para despacho 112 con IA compatible con ZENIT, K-Video para gestión de cámaras con analítica conforme al RGPD/IMY y K-Safety para conciencia situacional GIS compartida entre todas las agencias bajo el marco de emergencias de la MSB.'
                : 'Polisen\'s ledningscentraler, SOS Alarm centres, and Swedish räddningstjänst can deploy K-Dispatch for ZENIT-compatible AI-powered 112 dispatch, K-Video for camera management with GDPR/IMY-compliant analytics, and K-Safety for shared GIS situational awareness across all agencies under the MSB emergency framework.'}
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
              {es ? 'Software de Seguridad Pública en Suecia' : 'Public Safety Software in Sweden'}
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
                { href: '/resources/public-safety-software-united-kingdom', en: 'Public Safety Software for the United Kingdom: 999 Control Rooms & Safe City', es: 'Software de Seguridad Pública para el Reino Unido: Salas de Control 999 y Safe City' },
                { href: '/resources/public-safety-software-netherlands', en: 'Public Safety Software for the Netherlands: Politie, Meldkamer NL & C2000', es: 'Software de Seguridad Pública para los Países Bajos: Politie, Meldkamer NL y C2000' },
                { href: '/resources/public-safety-software-germany', en: 'Public Safety Software for Germany: Leitstellen, BOS Digital & DSGVO', es: 'Software de Seguridad Pública para Alemania: Leitstellen, BOS Digital y DSGVO' },
                { href: '/resources/public-safety-software-france', en: 'Public Safety Software for France: Police Nationale, Gendarmerie & RGPD', es: 'Software de Seguridad Pública para Francia: Police Nationale, Gendarmerie y RGPD' },
                { href: '/resources/what-is-video-management-software', en: 'What Is VMS Software? Video Management Guide', es: '¿Qué Es el Software VMS? Guía de Gestión de Video' },
                { href: '/resources/what-is-emergency-dispatch-software', en: 'What Is Emergency Dispatch Software?', es: '¿Qué Es el Software de Despacho de Emergencias?' },
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
          h2={es ? 'Solicita una Demo para Polisen, SOS Alarm o tu Räddningstjänst' : 'Request a Demo for Polisen, SOS Alarm, or Your Räddningstjänst'}
          subtitle={es ? 'KabatOne integra el despacho 112 compatible con ZENIT, la gestión de cámaras con analítica IA conforme RGPD/IMY y la conciencia situacional GIS multiagencia en una plataforma con cumplimiento NIS2 y despliegue en cloud EEE. Demo adaptada al marco de Polisen y SOS Alarm.' : 'KabatOne integrates ZENIT-compatible 112 dispatch, GDPR/IMY-compliant AI camera analytics, and multi-agency GIS situational awareness in a single platform with NIS2 compliance and EEA cloud deployment. Demo tailored to Polisen and SOS Alarm\'s framework.'}
        />

        <Footer es={es} />
      </div>
    </>
  )
}
