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
  return generatePageMetadata('publicSafetySoftwarePortugal', locale)
}

export default async function PublicSafetySoftwarePortugalPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-portugal/`
    : `${baseUrl}/resources/public-safety-software-portugal/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Portugal' : 'Public Safety Software — Portugal', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en Portugal?',
      answer: 'Portugal tiene un modelo de seguridad pública dual con dos fuerzas principales bajo el Ministerio de Administración Interna (MAI — Ministério da Administração Interna). La Polícia de Segurança Pública (PSP) es la policía civil metropolitana que actúa en las zonas urbanas, Lisboa y Oporto incluidas — con alrededor de 21,000 efectivos. La Guarda Nacional Republicana (GNR) es la fuerza de gendarmería (militarizada) responsable de las zonas rurales, fronterizas y las autopistas — con ~25,000 efectivos, organizados en destacamentos y unidades de tráfico (UAGC). El Serviço de Estrangeiros e Fronteiras (SEF) fue transformado en 2023 en la Agência para a Integração, Migrações e Asilo (AIMA) para gestión de fronteras y migraciones. El Sistema de Emergência Médica (SIEM) y el INEM (Instituto Nacional de Emergência Médica) gestionan la atención prehospitalaria y el despacho de ambulancias. La Autoridade Nacional de Emergência e Proteção Civil (ANEPC) coordina la protección civil y la resposta a catástrofes. La SIOPS (Sistema Integrado de Operações de Proteção e Socorro) es el sistema nacional de gestión de operaciones de bomberos y protección civil.',
    },
    {
      question: '¿Cómo funciona el despacho de emergencias en Portugal? ¿Qué son el CODU, el 112 y la red SNB?',
      answer: 'Portugal opera el número europeo 112 a través del Centro de Orientação de Doentes Urgentes (CODU), gestionado por el INEM para el despacho médico — con 4 CODU nacionales en Lisboa, Oporto, Coimbra y Faro. Las llamadas al 112 son atendidas por los PSP/GNR en los Centros Integrados de Segurança e Emergência (CISE) que se están integrando progresivamente. Las operaciones policiales se coordinan a través de los Centros de Coordenação Operacional (CCO) de la PSP y los Centros de Comando y Controlo (CCC) de la GNR. El Serviço Nacional de Bombeiros coordina el despacho de incendios desde los CDOS (Centros Distritais de Operações de Socorro) de la ANEPC. La red SNB (Sistemas de Numeração de Batalhões — actualmente la rede TETRA, también llamada SIRESP — Sistema Integrado de Redes de Emergência e Segurança de Portugal) es la red de radiocomunicaciones digitales para todos los servicios de emergencia portugueses. El SIRESP fue modernizado tras los grandes incendios forestales de 2017.',
    },
    {
      question: '¿Qué papel juega Portugal en la lucha contra incendios forestales y qué impacto tiene en su tecnología de seguridad pública?',
      answer: 'Los incendios forestales son el mayor riesgo de seguridad pública de Portugal — los megaincendios de Pedrógão Grande (2017, 66 muertos) y los incendios del otoño de 2017 (45 muertos) fueron un punto de inflexión que transformó la gestión de emergencias en Portugal. La respuesta incluyó: la modernización del SIRESP (red TETRA de emergencias) que había fallado durante los incendios, la creación del DECIF (Dispositivo Especial de Combate a Incêndios Florestais), la reforma del comando y control del ICNF (Instituto da Conservação da Natureza e das Florestas), la inversión masiva en aeronaves de extinción, y el desarrollo del SIOPS 2.0 con mejor integración de datos geoespaciales y analítica predictiva. Portugal mantiene el maior corpo de bombeiros voluntários de Europa (~25,000 bombeiros voluntários). La ANEPC y el ICNF coordinan el Sistema de Gestão Integrada de Fogos Rurais (SGIFR) con sensores IoT, cámaras forestales de detección automática y predicción de riesgo con IA.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en Portugal?',
      answer: 'La contratación pública en Portugal se rige por el Código dos Contratos Públicos (CCP, Decreto-Lei 18/2008 y sus revisiones), que implementa las directivas europeas. Los contratos se publican en BASE.gov.pt (portal nacional de contratación pública) y en TED/OJEU para contratos mayores. El MAI y sus organismos (PSP, GNR, ANEPC) licitan directamente sus sistemas tecnológicos. El INEM licita los sistemas CODU/CISE. La eSPap (Entidade de Serviços Partilhados da Administração Pública) gestiona contratos marco de TIC para la administración pública. Los fondos europeos son clave — el Portugal 2030 (anterior Portugal 2020, POSEUR, PDR), el PRR (Plano de Recuperação e Resiliência) y el FEDER financian proyectos de modernización de segurança pública, infraestructura SIRESP y Smart City. El COMPETE 2030 financia proyectos de innovación tecnológica con aplicación en seguridad pública.',
    },
    {
      question: '¿Cuáles son los requisitos de protección de datos y ciberseguridad para software policial en Portugal?',
      answer: 'El software de seguridad pública en Portugal debe cumplir el RGPD (implementado a través de la Lei 58/2019 — Lei de Execução do RGPD). La autoridad supervisora es la CNPD (Comissão Nacional de Proteção de Dados). Los sistemas policiales están sujetos adicionalmente a la Lei Orgânica 4/2017 (lei da PSP), la Lei Orgânica 4/2001 (GNR) y sus normas de tratamiento de datos. La Lei n.º 46/2018 implementa la Directiva NIS en Portugal, siendo actualizada con la NIS2. El CNCS (Centro Nacional de Cibersegurança) es la autoridad nacional de cibersegurança — equivalente al NCSC del Reino Unido. La INCM (Imprensa Nacional-Casa da Moeda) gestiona sistemas de identidad digital del Estado. Los sistemas críticos del Estado deben cumplir el Quadro Nacional de Referência para a Cibersegurança (QNRCS) del CNCS. El cloud para administración pública requiere almacenamiento en territorio UE/Portugal con controles de acceso conforme al RGPD.',
    },
    {
      question: '¿Qué infraestructura de videovigilancia tiene Portugal y cómo se regula?',
      answer: 'Portugal regula la videovigilancia policial en el espacio público mediante la Lei 1/2005 (videovigilância policial) y el RGPD. La PSP tiene amplias redes de cámaras en las principales ciudades — Lisboa y Oporto tienen sistemas de videovigilância urbana integrados con los Centros de Comando e Controlo policiales. La GNR usa cámaras ANPR (reconhecimento automático de matrículas) en las autopistas nacionales y puntos de control. El Sistema Automático de Controlo de Velocidade (SINCRO, SCOT) y el VIGIFOR (vigilância florestal automática) usan tecnología de cámara para velocidad y detección de incendios. Lisboa e Oporto tienen planes Smart City en desarrollo con videovigilância integrada en la gestión urbana. Las cámaras de la Carris (transportes de Lisboa) y Metro del Porto están integradas con la policía. El uso de reconhecimento facial en videovigilância policial está sujeto a las restricciones del RGPD y la supervisión de la CNPD.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para la PSP, la GNR, el INEM/CODU y la ANEPC de Portugal?',
      answer: 'KabatOne integra las capacidades que la PSP, la GNR, el INEM/CODU y la ANEPC/SIOPS necesitan unificadas: despacho CAD multiagencia compatible con los CCO/CCC de la PSP y la GNR y los CODU del INEM — con integración SIRESP TETRA, clasificación automática de incidentes y coordinación PSP-GNR-INEM-Bombeiros (K-Dispatch), gestión de redes de videovigilância urbana y ANPR con analítica IA — reconhecimento de matrículas, detección de comportamientos, búsqueda forense — conforme al RGPD, Lei 1/2005 y la CNPD (K-Video), y conciencia situacional GIS compartida entre PSP, GNR, ANEPC/SIOPS y el INEM para coordinação em incendios forestales, catástrofes naturales y operaciones de proteção civil — con capas de risco de incendio del ICNF/SGIFR (K-Safety). Cloud UE con cumplimiento RGPD/CNPD y NIS2/CNCS. Demo adaptada al modelo dual PSP/GNR e integrado CODU/112 portugués. Compatible con PRR/Portugal 2030 para financiación de proyectos.',
    },
  ] : [
    {
      question: 'How is public safety organised in Portugal?',
      answer: 'Portugal has a dual public safety model with two main forces under the Ministry of Internal Administration (MAI — Ministério da Administração Interna). The Public Security Police (PSP — Polícia de Segurança Pública) is the civil metropolitan police covering urban areas including Lisbon and Porto — with around 21,000 officers. The Republican National Guard (GNR — Guarda Nacional Republicana) is the gendarmerie (militarised) force responsible for rural areas, borders, and motorways — with ~25,000 officers organised into detachments and traffic units (UAGC). The SEF (immigration service) was transformed in 2023 into AIMA (Agency for Integration, Migration and Asylum) for border and migration management. The National Emergency Medical System (SIEM) and INEM (National Institute of Emergency Medicine) manage pre-hospital care and ambulance dispatch. The National Emergency and Civil Protection Authority (ANEPC) coordinates civil protection and disaster response. SIOPS (Integrated Operations System for Protection and Relief) is the national management system for fire and civil protection operations.',
    },
    {
      question: 'How does emergency dispatch work in Portugal? What are the CODU, 112, and SNB/SIRESP network?',
      answer: 'Portugal operates the European 112 number through the Emergency Patient Referral Centre (CODU — Centro de Orientação de Doentes Urgentes), managed by INEM for medical dispatch — with 4 national CODU centres in Lisbon, Porto, Coimbra, and Faro. 112 calls are handled by PSP/GNR at Integrated Security and Emergency Centres (CISE) being progressively integrated. Police operations are coordinated through PSP Operational Coordination Centres (CCO) and GNR Command and Control Centres (CCC). The Fire Service coordinates dispatch from ANEPC District Relief Operations Centres (CDOS). The SIRESP network (Sistema Integrado de Redes de Emergência e Segurança de Portugal) is the national TETRA digital radiocommunications network for all Portuguese emergency services — modernised following the major 2017 forest fires that exposed coverage failures.',
    },
    {
      question: 'What role do forest fires play in Portuguese public safety and how do they shape its technology?',
      answer: 'Forest fires are Portugal\'s greatest public safety risk — the Pedrógão Grande megafire (2017, 66 deaths) and the autumn 2017 fires (45 deaths) were a turning point that transformed emergency management in Portugal. The response included: modernising SIRESP (TETRA emergency network) which had failed during the fires, creating the DECIF (Special Forest Fire Fighting Deployment), reforming ICNF command and control, massive investment in suppression aircraft, and developing SIOPS 2.0 with better geospatial data integration and predictive analytics. Portugal maintains the largest volunteer fire corps in Europe (~25,000 volunteer firefighters). ANEPC and ICNF coordinate the Rural Fire Integrated Management System (SGIFR) with IoT sensors, automated forest fire detection cameras, and AI risk prediction.',
    },
    {
      question: 'How is public safety software procured in Portugal?',
      answer: 'Portuguese public procurement is governed by the Public Contracts Code (CCP, Decree-Law 18/2008 and revisions), implementing EU directives. Contracts are published on BASE.gov.pt (national public procurement portal) and TED/OJEU for larger contracts. MAI and its bodies (PSP, GNR, ANEPC) directly procure their technology systems. INEM procures CODU/CISE systems. eSPap (Shared Services Entity of Public Administration) manages ICT framework contracts for public administration. EU funds are key — Portugal 2030 (formerly Portugal 2020, POSEUR, PDR), the PRR (Recovery and Resilience Plan), and ERDF finance public safety modernisation, SIRESP infrastructure, and Smart City projects. COMPETE 2030 funds technology innovation with public safety applications.',
    },
    {
      question: 'What are the data protection and cybersecurity requirements for public safety software in Portugal?',
      answer: 'Public safety software in Portugal must comply with GDPR (implemented through Lei 58/2019 — GDPR Execution Act). The supervisory authority is the CNPD (National Data Protection Commission). Police systems are additionally subject to the PSP Organic Law (Lei Orgânica 4/2017), GNR Organic Law (Lei Orgânica 4/2001), and their data processing regulations. Lei 46/2018 implements the NIS Directive in Portugal, being updated with NIS2. The CNCS (National Cybersecurity Centre) is the national cybersecurity authority — equivalent to the UK\'s NCSC. INCM (national mint and official publisher) manages State digital identity systems. Critical State systems must meet the National Cybersecurity Reference Framework (QNRCS) from CNCS. Cloud for public administration requires EU/Portugal-territory storage with GDPR-compliant access controls.',
    },
    {
      question: 'What video surveillance infrastructure does Portugal have and how is it regulated?',
      answer: 'Portugal regulates police video surveillance in public spaces through Lei 1/2005 (police video surveillance) and GDPR. The PSP has extensive camera networks in major cities — Lisbon and Porto have integrated urban surveillance systems connected to police Command and Control Centres. The GNR uses ANPR cameras (reconhecimento automático de matrículas) on national motorways and checkpoints. The Automatic Speed Control System (SINCRO/SCOT) and VIGIFOR (automated forest surveillance) use camera technology for speed enforcement and fire detection. Lisbon and Porto have developing Smart City plans with video surveillance integrated into urban management. Carris (Lisbon transport) and Porto Metro cameras are integrated with police. Facial recognition use in police surveillance is subject to GDPR restrictions and CNPD oversight.',
    },
    {
      question: 'Why is KabatOne suited for Portugal\'s PSP, GNR, INEM/CODU, and ANEPC?',
      answer: 'KabatOne integrates the capabilities that Portugal\'s PSP, GNR, INEM/CODU, and ANEPC/SIOPS need unified: multi-agency CAD dispatch compatible with PSP/GNR CCO/CCC and INEM CODU — with SIRESP TETRA integration, automatic incident classification, and PSP-GNR-INEM-Bombeiros coordination (K-Dispatch), urban surveillance and ANPR network management with AI analytics — plate recognition, behaviour detection, forensic search — compliant with GDPR, Lei 1/2005, and CNPD (K-Video), and shared GIS situational awareness across PSP, GNR, ANEPC/SIOPS, and INEM for forest fire and disaster coordination — with ICNF/SGIFR fire risk layers (K-Safety). EU cloud with GDPR/CNPD and NIS2/CNCS compliance. Demo adapted to the Portuguese dual PSP/GNR model and integrated CODU/112. Compatible with PRR/Portugal 2030 for project co-financing.',
    },
  ]

  const articleHeadline = es
    ? 'Software de Seguridad Pública para Portugal: PSP/GNR, INEM/CODU 112, SIRESP TETRA, ANEPC/SIOPS, RGPD/CNPD y NIS2/CNCS'
    : 'Public Safety Software for Portugal: PSP/GNR, INEM/CODU 112, SIRESP TETRA, ANEPC/SIOPS, GDPR/CNPD & NIS2/CNCS'

  const articleDescription = es
    ? 'Plataforma unificada para la PSP y la GNR portuguesas, los CODU del INEM y la ANEPC/SIOPS — despacho CAD dual integrado con SIRESP TETRA, videovigilância urbana y ANPR conforme al RGPD/CNPD, y cumplimiento NIS2/CNCS con apoyo PRR/Portugal 2030.'
    : 'Unified platform for Portuguese PSP and GNR, INEM CODU centres, and ANEPC/SIOPS — integrated dual-force CAD dispatch with SIRESP TETRA, urban surveillance and ANPR compliant with GDPR/CNPD, and NIS2/CNCS compliance with PRR/Portugal 2030 co-financing support.'

  const challenges = es ? [
    {
      icon: '🚔',
      title: 'Modelo dual PSP/GNR e integración CODU/112',
      desc: 'Coordinar las operaciones de dos fuerzas con culturas diferentes — PSP (civil/urbana) y GNR (militarizada/rural) — con los CODU del INEM y los CDOS de la ANEPC en un sistema CAD unificado con integración SIRESP TETRA.',
    },
    {
      icon: '🔥',
      title: 'Incendios forestales y SIOPS/SGIFR/ANEPC',
      desc: 'Integrar el SIOPS y el SGIFR para coordinación de incendios forestales — el mayor riesgo de Portugal — con capas de riesgo del ICNF, cámaras de detección automática (VIGIFOR), sensores IoT y conciencia situacional GIS para Proteção Civil.',
    },
    {
      icon: '📷',
      title: 'Videovigilância urbana, ANPR y cumplimiento CNPD/RGPD',
      desc: 'Gestionar redes de videovigilância urbana de la PSP (Lisboa, Oporto) y sistemas ANPR de la GNR en autopistas bajo Lei 1/2005, RGPD y la supervisión de la CNPD — con base legal específica, limitación de finalidad y DPIA.',
    },
    {
      icon: '🔒',
      title: 'NIS2/CNCS, RGPD/CNPD y financiación PRR/Portugal 2030',
      desc: 'Cumplir la NIS2 (Lei 46/2018 actualizada), el QNRCS del CNCS, el RGPD/CNPD y los requisitos de homologación SIRESP — aprovechando los fondos PRR y Portugal 2030 (FEDER/COMPETE) para cofinanciar la modernización tecnológica.',
    },
  ] : [
    {
      icon: '🚔',
      title: 'Dual PSP/GNR model and CODU/112 integration',
      desc: 'Coordinating operations of two forces with different cultures — PSP (civil/urban) and GNR (militarised/rural) — with INEM CODU and ANEPC CDOS in a unified CAD system with SIRESP TETRA integration.',
    },
    {
      icon: '🔥',
      title: 'Forest fires and SIOPS/SGIFR/ANEPC',
      desc: 'Integrating SIOPS and SGIFR for forest fire coordination — Portugal\'s greatest risk — with ICNF risk layers, automated detection cameras (VIGIFOR), IoT sensors, and GIS situational awareness for Civil Protection.',
    },
    {
      icon: '📷',
      title: 'Urban surveillance, ANPR and CNPD/GDPR compliance',
      desc: 'Managing PSP urban surveillance networks (Lisbon, Porto) and GNR ANPR systems on motorways under Lei 1/2005, GDPR, and CNPD oversight — with specific legal basis, purpose limitation, and DPIA.',
    },
    {
      icon: '🔒',
      title: 'NIS2/CNCS, GDPR/CNPD and PRR/Portugal 2030 funding',
      desc: 'Meeting NIS2 (updated Lei 46/2018), the CNCS QNRCS framework, GDPR/CNPD, and SIRESP homologation requirements — leveraging PRR and Portugal 2030 (ERDF/COMPETE) funds to co-finance technology modernisation.',
    },
  ]

  const stats = es ? [
    { value: 'PSP+GNR', label: 'Modelo Dual ~46K Efectivos' },
    { value: '4', label: 'Centros CODU (INEM/112)' },
    { value: '10.3M', label: 'Habitantes + Turismo 28M/año' },
    { value: 'SIRESP', label: 'Red TETRA Modernizada 2017' },
  ] : [
    { value: 'PSP+GNR', label: 'Dual Model ~46K Officers' },
    { value: '4', label: 'CODU Centres (INEM/112)' },
    { value: '10.3M', label: 'People + 28M tourists/year' },
    { value: 'SIRESP', label: 'TETRA Network Modernised 2017' },
  ]

  const title = es
    ? 'Software de Seguridad Pública para Portugal'
    : 'Public Safety Software for Portugal'

  const subtitle = es
    ? 'PSP + GNR Modelo Dual · INEM/CODU 112 · SIRESP TETRA · ANEPC/SIOPS · RGPD/CNPD · NIS2/CNCS · PRR/Portugal 2030'
    : 'PSP + GNR Dual Model · INEM/CODU 112 · SIRESP TETRA · ANEPC/SIOPS · GDPR/CNPD · NIS2/CNCS · PRR/Portugal 2030'

  const intro = es
    ? 'Portugal — 10.3 millones de habitantes y 28 millones de turistas al año en un país que combate el mayor riesgo de incendios forestales de Europa — opera un modelo dual con la PSP (urbana) y la GNR (gendarmería rural) bajo el MAI. Los CODU del INEM unifican el despacho 112 médico desde 4 centros, la ANEPC gestiona la protección civil y la red SIRESP TETRA — modernizada tras los megaincendios de 2017 — conecta todos los servicios de emergencia. KabatOne proporciona la plataforma CAD, vídeo y GIS adaptada al modelo dual PSP/GNR, integrada con SIRESP y los sistemas SIOPS/SGIFR de gestión de incendios forestales.'
    : 'Portugal — 10.3 million people and 28 million tourists per year in a country combating Europe\'s greatest forest fire risk — operates a dual model with PSP (urban civil police) and GNR (rural gendarmerie) under the MAI. INEM CODU centres unify 112 medical dispatch from 4 centres, ANEPC manages civil protection, and the SIRESP TETRA network — modernised after the 2017 megafires — connects all emergency services. KabatOne delivers the CAD, video, and GIS platform adapted to the dual PSP/GNR model, integrated with SIRESP and SIOPS/SGIFR forest fire management systems.'

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            articleSchema(articleHeadline, articleDescription, pageUrl, '2026-05-19'),
            faqPageSchema(faqs),
            breadcrumbSchema(breadcrumbs),
          ]),
        }}
      />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%)', color: '#fff', padding: '80px 24px 60px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', color: '#93c5fd', marginBottom: 12 }}>
            {es ? 'Guía de Mercado · Portugal' : 'Market Guide · Portugal'}
          </p>
          <h1 style={{ fontSize: 'clamp(28px,5vw,48px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 20 }}>
            {title}
          </h1>
          <p style={{ fontSize: 16, color: '#93c5fd', marginBottom: 24, fontWeight: 500 }}>{subtitle}</p>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: '#cbd5e1', maxWidth: 720 }}>{intro}</p>
          <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/demo" style={{ background: ACCENT, color: '#fff', padding: '12px 28px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>
              {es ? 'Solicitar Demo' : 'Request Demo'}
            </Link>
            <Link href={es ? '/es/resources/' : '/resources/'} style={{ border: '1px solid #475569', color: '#cbd5e1', padding: '12px 28px', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>
              {es ? 'Ver Todos los Recursos' : 'View All Resources'}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#f8fafc', padding: '36px 24px', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 24 }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: ACCENT }}>{s.value}</div>
              <div style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section style={{ padding: '64px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8, color: '#0f172a' }}>
            {es ? 'Desafíos Clave del Mercado Portugués' : 'Key Challenges in the Portuguese Market'}
          </h2>
          <p style={{ color: '#64748b', marginBottom: 36, fontSize: 16 }}>
            {es
              ? 'Los requisitos operativos únicos que definen la seguridad pública en Portugal.'
              : 'The unique operational requirements that define public safety in Portugal.'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
            {challenges.map((c) => (
              <div key={c.title} style={{ border: '1px solid #e2e8f0', borderRadius: 12, padding: '24px', background: '#f8fafc' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: '#0f172a' }}>{c.title}</h3>
                <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How KabatOne Works */}
      <section style={{ padding: '64px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8, color: '#0f172a' }}>
            {es ? 'Cómo KabatOne Apoya a los Servicios Portugueses de Seguridad Pública' : 'How KabatOne Supports Portuguese Public Safety Services'}
          </h2>
          <p style={{ color: '#64748b', marginBottom: 36, fontSize: 16 }}>
            {es
              ? 'Una plataforma unificada adaptada al modelo dual PSP/GNR, SIRESP TETRA y el riesgo de incendios forestales de Portugal.'
              : 'One unified platform adapted to the dual PSP/GNR model, SIRESP TETRA, and Portugal\'s forest fire risk.'}
          </p>
          <div style={{ display: 'grid', gap: 20 }}>
            {[
              {
                product: 'K-Dispatch',
                color: '#eff6ff',
                border: '#bfdbfe',
                icon: '🚨',
                title: es ? 'Despacho CAD 112 dual PSP/GNR + integración SIRESP + CODU/INEM' : '112 Dual PSP/GNR CAD Dispatch + SIRESP Integration + CODU/INEM',
                desc: es
                  ? 'CAD multiagencia con gestión de incidentes paralela para PSP (zonas urbanas) y GNR (zonas rurales/autopistas) — integración nativa con la red SIRESP TETRA, compatibilidad con los CODU del INEM y los CDOS de la ANEPC, clasificación automática de incidentes, asignación de recursos PSP-GNR-INEM-Bombeiros y coordinación GIS en tiempo real.'
                  : 'Multi-agency CAD with parallel incident management for PSP (urban areas) and GNR (rural/motorway areas) — native SIRESP TETRA integration, compatibility with INEM CODU and ANEPC CDOS, automatic incident classification, PSP-GNR-INEM-Bombeiros resource assignment, and real-time GIS coordination.',
              },
              {
                product: 'K-Video',
                color: '#f0fdf4',
                border: '#bbf7d0',
                icon: '📷',
                title: es ? 'Videovigilância PSP/GNR, ANPR y cumplimiento CNPD/RGPD' : 'PSP/GNR Surveillance, ANPR and CNPD/GDPR Compliance',
                desc: es
                  ? 'Gestión unificada de cámaras de la PSP en Lisboa/Oporto y sistemas ANPR de la GNR en autopistas nacionales con analítica IA — reconhecimento de matrículas, detección de comportamientos, búsqueda forense. Cumplimiento nativo de Lei 1/2005, RGPD/CNPD: base legal específica, DPIA, gestión de retención y acceso diferenciado PSP/GNR. Sistema VIGIFOR de cámaras forestales para detección temprana de incendios.'
                  : 'Unified management of PSP cameras in Lisbon/Porto and GNR ANPR systems on national motorways with AI analytics — plate recognition, behaviour detection, forensic search. Native Lei 1/2005, GDPR/CNPD compliance: specific legal basis, DPIA, retention management, and differentiated PSP/GNR access. VIGIFOR forest camera system for early fire detection.',
              },
              {
                product: 'K-Safety',
                color: '#fefce8',
                border: '#fde68a',
                icon: '🗺️',
                title: es ? 'Conciencia situacional GIS para incendios forestales y Proteção Civil' : 'GIS Situational Awareness for Forest Fires and Civil Protection',
                desc: es
                  ? 'Conciencia situacional GIS compartida entre PSP, GNR, ANEPC/SIOPS, INEM y Bombeiros — con capas de riesgo de incendio del ICNF/SGIFR, posicionamiento en tiempo real de los ~25,000 bombeiros voluntários, sensores IoT forestales y alertas meteorológicas del IPMA. Vista de mando unificada para gestión de megaincendios y catástrofes naturales con coordenação SIOPS integrada.'
                  : 'Shared GIS situational awareness across PSP, GNR, ANEPC/SIOPS, INEM, and Bombeiros — with ICNF/SGIFR fire risk layers, real-time positioning of ~25,000 volunteer firefighters, forest IoT sensors, and IPMA weather alerts. Unified command view for megafire and natural disaster management with integrated SIOPS coordination.',
              },
            ].map((item) => (
              <div key={item.product} style={{ background: item.color, border: `1px solid ${item.border}`, borderRadius: 12, padding: '24px', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ fontSize: 32, flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <span style={{ background: ACCENT, color: '#fff', borderRadius: 6, padding: '2px 10px', fontSize: 12, fontWeight: 700 }}>{item.product}</span>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0f172a', margin: 0 }}>{item.title}</h3>
                  </div>
                  <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '64px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8, color: '#0f172a' }}>
            {es ? 'Preguntas Frecuentes — Seguridad Pública en Portugal' : 'FAQ — Public Safety in Portugal'}
          </h2>
          <p style={{ color: '#64748b', marginBottom: 36, fontSize: 16 }}>
            {es
              ? 'Respuestas a las preguntas más comunes sobre el mercado portugués de seguridad pública.'
              : 'Answers to the most common questions about the Portuguese public safety market.'}
          </p>
          <div style={{ display: 'grid', gap: 16 }}>
            {faqs.map((faq) => (
              <div key={faq.question} style={{ border: '1px solid #e2e8f0', borderRadius: 10, padding: '20px 24px', background: '#f8fafc' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0f172a', marginBottom: 10 }}>{faq.question}</h3>
                <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.7, margin: 0 }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section style={{ padding: '48px 24px', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: '#0f172a' }}>
            {es ? 'Guías de Mercado Relacionadas' : 'Related Market Guides'}
          </h2>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {[
              { href: es ? '/es/resources/public-safety-software-spain/' : '/resources/public-safety-software-spain/', label: es ? 'España' : 'Spain' },
              { href: es ? '/es/resources/public-safety-software-france/' : '/resources/public-safety-software-france/', label: es ? 'Francia' : 'France' },
              { href: es ? '/es/resources/public-safety-software-italy/' : '/resources/public-safety-software-italy/', label: es ? 'Italia' : 'Italy' },
              { href: es ? '/es/resources/public-safety-software-brazil/' : '/resources/public-safety-software-brazil/', label: es ? 'Brasil' : 'Brazil' },
              { href: es ? '/es/resources/public-safety-software-united-kingdom/' : '/resources/public-safety-software-united-kingdom/', label: es ? 'Reino Unido' : 'United Kingdom' },
              { href: es ? '/es/resources/public-safety-software-netherlands/' : '/resources/public-safety-software-netherlands/', label: es ? 'Países Bajos' : 'Netherlands' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, padding: '8px 16px', fontSize: 14, color: ACCENT, fontWeight: 600, textDecoration: 'none' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        es={es}
        h2={es ? 'Solicita una Demo para la PSP, la GNR, el INEM/CODU o la ANEPC de Portugal' : 'Request a Demo for Portugal\'s PSP, GNR, INEM/CODU, or ANEPC'}
        subtitle={es ? 'KabatOne integra el despacho CAD 112 para el modelo dual PSP/GNR portugués — con integración SIRESP TETRA, compatibilidad con los CODU del INEM, gestión de videovigilância/ANPR conforme a Lei 1/2005/CNPD, y conciencia situacional GIS con capas de riesgo de incendio ICNF/SGIFR para la ANEPC. Cloud UE con NIS2/CNCS y financiación PRR/Portugal 2030.' : 'KabatOne integrates 112 CAD dispatch for the Portuguese dual PSP/GNR model — with SIRESP TETRA integration, INEM CODU compatibility, Lei 1/2005/CNPD-compliant surveillance/ANPR management, and GIS situational awareness with ICNF/SGIFR fire risk layers for ANEPC. EU cloud with NIS2/CNCS and PRR/Portugal 2030 funding support.'}
      />
      <Footer es={es} />
    </>
  )
}
