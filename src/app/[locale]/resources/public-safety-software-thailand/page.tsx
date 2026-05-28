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
  return generatePageMetadata('publicSafetySoftwareThailand', locale)
}

export default async function PublicSafetySoftwareThailandPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-thailand/`
    : `${baseUrl}/resources/public-safety-software-thailand/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Tailandia' : 'Public Safety Software — Thailand', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en Tailandia?',
      answer: 'Tailandia tiene un sistema de seguridad pública centralizado bajo el Ministerio del Interior (กระทรวงมหาดไทย — Ministry of Interior) y la Oficina de la Policía Nacional Real Tailandesa (สำนักงานตำรวจแห่งชาติ — Royal Thai Police / RTP). La RTP es la fuerza policial nacional con jurisdicción en las 77 provincias (จังหวัด). El Departamento de Prevención y Mitigación de Desastres (กรมป้องกันและบรรเทาสาธารณภัย — DDPM) coordina la gestión de desastres naturales, incluyendo inundaciones, terremotos y ciclones. El Cuerpo de Bomberos opera bajo las Autoridades Locales (Organizaciones de Administración Local — LAO). El Erawan Medical Center y los centros 1669 gestionan los servicios de emergencias médicas en Bangkok y las provincias. El NARESUAN Command Centre coordina las operaciones nacionales de seguridad a nivel del Consejo de Seguridad Nacional (NSC). La Policía Turística (Tourist Police) es una unidad especializada de la RTP para zonas turísticas (Phuket, Pattaya, Chiang Mai, Samui). Los números de emergencia son 191 (policía), 199 (bomberos), 1669 (ambulancias) y 112 (disponible para turistas).',
    },
    {
      question: '¿Cómo funciona el despacho de emergencias en Tailandia? ¿Qué es el sistema ERAWAN?',
      answer: 'Tailandia opera un sistema de despacho de emergencias médicas a través del número 1669, gestionado por el Instituto Nacional de Medicina de Emergencias (NIEMS — สถาบันการแพทย์ฉุกเฉินแห่งชาติ). Los centros de despacho 1669 (Provincial Emergency Medical Operation Centres — EOC) operan en cada provincia. La Policía Real Tailandesa (RTP) tiene sus propios centros de despacho provinciales para el número 191. El sistema ERAWAN (Emergency Response and Warning Network) es el sistema integrado de gestión de emergencias médicas del NIEMS. Bangkok tiene el Centro de Gestión de Tráfico y Emergencias (Bangkok Traffic Management Centre) integrado con la Policía Metropolitana de Bangkok (BMP). Las provincias turísticas de Phuket, Chiang Mai y Pattaya tienen sistemas de comando y control específicos para la seguridad turística. El DDPM opera los Centros de Operaciones de Protección Civil a nivel nacional y provincial para la coordinación de desastres naturales (inundaciones del río Chao Phraya, monzones, tsunamis).',
    },
    {
      question: '¿Cuál es el marco de protección de datos para software de seguridad pública en Tailandia?',
      answer: 'Tailandia implementó su primera ley de protección de datos personales con la Ley de Protección de Datos Personales B.E. 2562 (พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 — PDPA), promulgada en 2019 y puesta en plena vigencia en junio de 2022. El PDPC (Personal Data Protection Committee — คณะกรรมการคุ้มครองข้อมูลส่วนบุคคล) es el comité regulador del PDPA. La PDPA tailandesa es comparable al RGPD europeo en muchos aspectos: requiere bases legales para el tratamiento de datos, derechos de los interesados, notificación de brechas y sanciones. Los sistemas de videovigilancia de la RTP y el DDPM están sujetos a las regulaciones del PDPC para el tratamiento de datos en seguridad pública. La Ley de Ciberseguridad B.E. 2562 (2019) y la Ley de Crímenes Informáticos B.E. 2550 (2007, modificada 2017) regulan la seguridad de los sistemas de información gubernamentales. Los datos biométricos (reconocimiento facial en cámaras de vigilancia) son categoría especial bajo la PDPA tailandesa.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en Tailandia?',
      answer: 'La contratación pública en Tailandia se rige por la Ley de Contratación Pública B.E. 2560 (2017) (พระราชบัญญัติการจัดซื้อจัดจ้างและการบริหารพัสดุภาครัฐ พ.ศ. 2560). Las licitaciones se publican en el portal electrónico de contratación pública del gobierno tailandés (gprocurement.go.th — Government Procurement Electronic System). La Agencia de Contratación Pública (Government Procurement Division — GPD) del Ministerio de Finanzas supervisa el proceso. La Royal Thai Police (RTP) publica sus propias licitaciones tecnológicas en el portal GPP. El DDPM y el NIEMS tienen sus propios procesos de licitación. La Agencia de Gobierno Digital (DGA — สำนักงานพัฒนารัฐบาลดิจิทัล) coordina los proyectos de digitalización del gobierno tailandés y puede actuar como comprador centralizado para proyectos de transformación digital de la seguridad pública. Los proyectos Smart City con componentes de seguridad están co-financiados por la Agencia Nacional de Innovación (NIA) y el Consejo Nacional de Desarrollo Económico y Social (NESDC).',
    },
    {
      question: '¿Cuáles son los requisitos de ciberseguridad para software de seguridad pública en Tailandia?',
      answer: 'La ciberseguridad en Tailandia está regulada por la Ley de Ciberseguridad B.E. 2562 (2019) (พระราชบัญญัติการรักษาความมั่นคงปลอดภัยไซเบอร์ พ.ศ. 2562) y su agencia ejecutora, el NCSA (สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ — National Cyber Security Agency). El NCSA coordina la protección de infraestructuras críticas de información (CII) e impone requisitos de notificación de incidentes y auditorías de seguridad. ThaiCERT es el equipo de respuesta a incidentes informáticos bajo el ETDA (Electronic Transactions Development Agency). Los sistemas de la RTP, el DDPM y el NIEMS están clasificados como infraestructuras críticas y deben cumplir los estándares del NCSA. La Ley de Transacciones Electrónicas B.E. 2544 y sus modificaciones regulan la autenticación y la firma digital en sistemas gubernamentales. Los estándares de seguridad de la información tailandeses para el gobierno incluyen ISO/IEC 27001 y el Government Information Security Management Standard (GISMS).',
    },
    {
      question: '¿Qué proyectos Smart City y de digitalización de la seguridad pública existen en Tailandia?',
      answer: 'Tailandia impulsa la digitalización de la seguridad pública a través del programa Thailand 4.0 y Smart City. Bangkok tiene el proyecto Smart Bangkok con integración de 64.000+ cámaras de vigilancia urbana (CCTV) de la Policía Metropolitana de Bangkok (BMP) con el Bangkok Traffic Management Centre. El proyecto Safe City Phuket integra cámaras, reconocimiento facial y sistemas ANPR para la seguridad turística en Phuket. El CCTV Command Centre de la RTP en Bangkok Headquarters coordina la videovigilancia nacional. El sistema ANPR de la RTP gestiona el reconocimiento de placas en las principales autopistas y puntos de control. La Agencia de Gobierno Digital (DGA) impulsa el programa GIST (Government Information Security Technology). El DDPM moderniza sus centros de operaciones provinciales para la gestión de inundaciones (las grandes inundaciones del Chao Phraya de 2011 afectaron el 30% del territorio tailandés). El proyecto Smart Grid y Smart City de la EGA integra datos de emergencias con la gestión urbana en Bangkok, Chiang Mai, Khon Kaen y Phuket.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para la Royal Thai Police, el DDPM y el NIEMS de Tailandia?',
      answer: 'KabatOne integra las capacidades que la RTP, el DDPM, el NIEMS y la Policía Turística necesitan unificadas: despacho CAD multiagencia compatible con los 77 centros de operaciones provinciales de la RTP y los EOC 1669 del NIEMS — con integración de radiocomunicaciones digitales, coordinación 191/199/1669/112 y gestión de desastres naturales (inundaciones Chao Phraya, monzones, tsunamis zona Andamán), compatible con el sistema ERAWAN y los centros de operaciones del DDPM (K-Dispatch), gestión de 64.000+ cámaras CCTV de la BMP/RTP y sistemas ANPR con analítica IA conforme a la PDPA tailandesa y las directrices del PDPC — con DPIA, base legal RTP y gestión de retención (K-Video), y conciencia situacional GIS en tiempo real para el DDPM, el NSC y los centros Smart City (Bangkok, Phuket Safe City, Chiang Mai) — con datos de turismo masivo, niveles de inundación del Chao Phraya y alertas de tsunami de la NDWC (K-Safety). Cloud con cumplimiento PDPA/PDPC y Ley de Ciberseguridad/NCSA. Compatible con los marcos de contratación GPP/DGA. Demo adaptada al modelo de seguridad pública tailandés y al contexto de turismo masivo.',
    },
  ] : [
    {
      question: 'How is public safety organised in Thailand?',
      answer: 'Thailand has a centralised public safety system under the Ministry of Interior and the Royal Thai Police (RTP — สำนักงานตำรวจแห่งชาติ). The RTP is the national police force with jurisdiction across all 77 provinces (จังหวัด). The Department of Disaster Prevention and Mitigation (DDPM — กรมป้องกันและบรรเทาสาธารณภัย) coordinates natural disaster management including floods, earthquakes, and cyclones. Fire services operate under Local Administrative Organisations (LAO). The Erawan Medical Center and 1669 centres manage medical emergency services in Bangkok and provinces. The NARESUAN Command Centre coordinates national security operations at the National Security Council (NSC) level. The Tourist Police is a specialised RTP unit for tourist zones (Phuket, Pattaya, Chiang Mai, Samui). Emergency numbers are 191 (police), 199 (fire), 1669 (ambulance), and 112 (available for tourists).',
    },
    {
      question: 'How does emergency dispatch work in Thailand? What is the ERAWAN system?',
      answer: 'Thailand operates a medical emergency dispatch system through 1669, managed by the National Institute for Emergency Medicine (NIEMS). The 1669 dispatch centres (Provincial Emergency Medical Operation Centres — EOC) operate in each province. The Royal Thai Police (RTP) has its own provincial dispatch centres for 191. The ERAWAN system (Emergency Response and Warning Network) is the NIEMS integrated medical emergency management system. Bangkok has the Bangkok Traffic Management Centre integrated with Bangkok Metropolitan Police (BMP). Tourist provinces of Phuket, Chiang Mai, and Pattaya have specific command and control systems for tourist security. The DDPM operates Civil Protection Operation Centres at national and provincial level for natural disaster coordination (Chao Phraya river floods, monsoons, tsunamis).',
    },
    {
      question: 'What is the data protection framework for public safety software in Thailand?',
      answer: 'Thailand enacted its first personal data protection law with the Personal Data Protection Act B.E. 2562 (PDPA — พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562), enacted in 2019 and fully enforced in June 2022. The PDPC (Personal Data Protection Committee) is the PDPA regulatory body. Thailand\'s PDPA is comparable to EU GDPR in many aspects: it requires legal bases for data processing, data subject rights, breach notification, and penalties. RTP and DDPM surveillance systems are subject to PDPC regulations for data processing in public safety. The Cybersecurity Act B.E. 2562 (2019) and Computer Crime Act B.E. 2550 (2007, amended 2017) govern security of government information systems. Biometric data (facial recognition in surveillance cameras) is a special category under the Thai PDPA.',
    },
    {
      question: 'How is public safety software procured in Thailand?',
      answer: 'Thai public procurement is governed by the Government Procurement and Supplies Management Act B.E. 2560 (2017). Tenders are published on the Thai government e-procurement portal (gprocurement.go.th — Government Procurement Electronic System). The Government Procurement Division (GPD) of the Ministry of Finance oversees the process. The Royal Thai Police (RTP) publishes its own technology tenders on the GPP portal. DDPM and NIEMS have their own procurement processes. The Digital Government Agency (DGA) coordinates Thai government digitalisation projects and can act as a central buyer for public safety digital transformation. Smart City projects with security components are co-funded by the National Innovation Agency (NIA) and the National Economic and Social Development Council (NESDC).',
    },
    {
      question: 'What are the cybersecurity requirements for public safety software in Thailand?',
      answer: 'Cybersecurity in Thailand is regulated by the Cybersecurity Act B.E. 2562 (2019) and its executing agency, the NCSA (National Cyber Security Agency — สำนักงานคณะกรรมการการรักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ). NCSA coordinates the protection of Critical Information Infrastructure (CII) and imposes incident notification and security audit requirements. ThaiCERT is the computer incident response team under the ETDA (Electronic Transactions Development Agency). RTP, DDPM, and NIEMS systems are classified as critical infrastructure and must comply with NCSA standards. The Electronic Transactions Act and amendments govern authentication and digital signatures in government systems. Thai government information security standards include ISO/IEC 27001 and the Government Information Security Management Standard (GISMS).',
    },
    {
      question: 'What Smart City and public safety digitalisation projects exist in Thailand?',
      answer: 'Thailand drives public safety digitalisation through the Thailand 4.0 programme and Smart City initiative. Bangkok has the Smart Bangkok project integrating 64,000+ urban surveillance cameras (CCTV) of Bangkok Metropolitan Police (BMP) with the Bangkok Traffic Management Centre. The Safe City Phuket project integrates cameras, facial recognition, and ANPR for tourist security in Phuket. The RTP CCTV Command Centre in Bangkok HQ coordinates national video surveillance. The RTP ANPR system manages plate recognition on major highways and checkpoints. The Digital Government Agency (DGA) drives the GIST (Government Information Security Technology) programme. DDPM modernises its provincial operation centres for flood management (the 2011 Chao Phraya floods affected 30% of Thai territory). Smart City programmes in Bangkok, Chiang Mai, Khon Kaen, and Phuket integrate emergency data with urban management.',
    },
    {
      question: 'Why is KabatOne suited for Thai Royal Thai Police, DDPM, and NIEMS?',
      answer: 'KabatOne integrates the capabilities that the RTP, DDPM, NIEMS, and Tourist Police need unified: multi-agency CAD dispatch compatible with all 77 provincial RTP operations centres and NIEMS 1669 EOCs — with digital radiocommunications integration, 191/199/1669/112 coordination, and natural disaster management (Chao Phraya floods, monsoons, Andaman Sea tsunamis), compatible with the ERAWAN system and DDPM operations centres (K-Dispatch), management of 64,000+ BMP/RTP CCTV cameras and ANPR systems with AI analytics compliant with Thai PDPA and PDPC guidelines — with DPIA, RTP legal basis, and retention management (K-Video), and real-time GIS situational awareness for DDPM, NSC, and Smart City centres (Bangkok, Phuket Safe City, Chiang Mai) — with mass tourism data, Chao Phraya flood levels, and NDWC tsunami alerts (K-Safety). Cloud compliant with PDPA/PDPC and Cybersecurity Act/NCSA. Compatible with GPP/DGA procurement frameworks. Demo adapted to the Thai public safety model and mass tourism security context.',
    },
  ]

  const articleHeadline = es
    ? 'Software de Seguridad Pública para Tailandia: Royal Thai Police, DDPM/ERAWAN, PDPA y NCSA/Ciberseguridad'
    : 'Public Safety Software for Thailand: Royal Thai Police, DDPM/ERAWAN, PDPA & NCSA Cybersecurity'

  const articleDescription = es
    ? 'Plataforma unificada para la Royal Thai Police, el DDPM y el NIEMS/ERAWAN — despacho CAD integrado para 77 provincias, gestión de inundaciones Chao Phraya, gestión de cámaras CCTV conforme a PDPA, y cumplimiento NCSA con procurement GPP/DGA.'
    : 'Unified platform for Royal Thai Police, DDPM, and NIEMS/ERAWAN — integrated CAD dispatch for 77 provinces, Chao Phraya flood management, PDPA-compliant CCTV camera management, and NCSA compliance with GPP/DGA procurement.'

  const challenges = es ? [
    {
      icon: '🌊',
      title: 'Inundaciones del Chao Phraya y gestión de desastres',
      desc: 'Las grandes inundaciones tailandesas (2011, 2021) afectaron el 30% del territorio y 13 millones de personas. La coordinación del DDPM, la RTP y el NIEMS durante desastres naturales requiere plataformas de conciencia situacional en tiempo real con niveles de agua, alertas NDWC y gestión de evacuaciones masivas.',
    },
    {
      icon: '🏖️',
      title: 'Seguridad turística masiva (Phuket/Pattaya/Chiang Mai)',
      desc: 'Con más de 39 millones de turistas extranjeros anuales (antes de COVID), Tailandia necesita sistemas de seguridad escalables para las altas densidades en zonas turísticas. La Policía Turística coordina con la RTP provincial usando CCTV y ANPR en Phuket, Pattaya, Samui y Koh Tao.',
    },
    {
      icon: '📹',
      title: '64.000+ cámaras CCTV BMP y PDPA (2022)',
      desc: 'Bangkok Metropolis tiene una de las redes de videovigilancia más grandes de Asia (64.000+ cámaras). La gestión centralizada de estas cámaras debe cumplir la PDPA tailandesa (vigente junio 2022) — con DPIA, base legal policial, gestión de retención y cumplimiento PDPC para datos biométricos/reconocimiento facial.',
    },
    {
      icon: '🔒',
      title: 'PDPA (2022), Ley de Ciberseguridad y NCSA',
      desc: 'Cumplir la PDPA tailandesa (primera ley de privacidad de Tailandia, vigente 2022), los requisitos del PDPC, la Ley de Ciberseguridad B.E. 2562 y los estándares del NCSA para sistemas CII — con la especificidad de los datos de seguridad pública y el contexto de la soberanía de datos tailandesa.',
    },
  ] : [
    {
      icon: '🌊',
      title: 'Chao Phraya floods and disaster management',
      desc: 'Major Thai floods (2011, 2021) affected 30% of territory and 13 million people. DDPM, RTP, and NIEMS coordination during natural disasters requires real-time situational awareness platforms with water levels, NDWC alerts, and mass evacuation management.',
    },
    {
      icon: '🏖️',
      title: 'Mass tourist security (Phuket/Pattaya/Chiang Mai)',
      desc: 'With over 39 million foreign tourists annually (pre-COVID), Thailand needs scalable security systems for high densities in tourist zones. Tourist Police coordinates with provincial RTP using CCTV and ANPR in Phuket, Pattaya, Samui, and Koh Tao.',
    },
    {
      icon: '📹',
      title: '64,000+ BMP CCTV cameras and PDPA (2022)',
      desc: 'Bangkok Metropolis has one of Asia\'s largest surveillance networks (64,000+ cameras). Centralised management of these cameras must comply with Thailand\'s PDPA (enforced June 2022) — with DPIA, police legal basis, retention management, and PDPC compliance for biometric/facial recognition data.',
    },
    {
      icon: '🔒',
      title: 'PDPA (2022), Cybersecurity Act and NCSA',
      desc: 'Complying with Thailand\'s PDPA (Thailand\'s first privacy law, enforced 2022), PDPC requirements, Cybersecurity Act B.E. 2562, and NCSA standards for CII systems — with the specifics of public safety data and Thai data sovereignty context.',
    },
  ]

  const stats = es ? [
    { value: '77', label: 'Provincias / RTP districts' },
    { value: '191/1669', label: 'Números de emergencia' },
    { value: '64K+', label: 'Cámaras CCTV Bangkok' },
    { value: 'PDPA 2022', label: 'Primera ley privacidad Thai' },
  ] : [
    { value: '77', label: 'Provinces / RTP districts' },
    { value: '191/1669', label: 'Emergency numbers' },
    { value: '64K+', label: 'Bangkok CCTV cameras' },
    { value: 'PDPA 2022', label: "Thailand's first privacy law" },
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      articleSchema(articleHeadline, articleDescription, pageUrl, '2026-05-18'),
      faqPageSchema(faqs),
      breadcrumbSchema(breadcrumbs),
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Nav />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#1e3a5f 0%,#2d6a9f 100%)', color: '#fff', padding: '80px 24px 60px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', opacity: 0.75, marginBottom: 14 }}>
            {es ? 'Guía de Mercado · Tailandia' : 'Market Guide · Thailand'}
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, lineHeight: 1.2, margin: '0 0 20px' }}>
            {es
              ? 'Software de Seguridad Pública para Tailandia'
              : 'Public Safety Software for Thailand'}
          </h1>
          <p style={{ fontSize: '1.15rem', opacity: 0.9, maxWidth: 680, margin: '0 auto 32px' }}>
            {es
              ? 'Royal Thai Police, DDPM, NIEMS/ERAWAN, 77 provincias, PDPA y NCSA — plataforma unificada para la seguridad pública tailandesa y el turismo masivo.'
              : 'Royal Thai Police, DDPM, NIEMS/ERAWAN, 77 provinces, PDPA & NCSA — unified platform for Thai public safety and mass tourism security.'}
          </p>
          <Link
            href="/contact"
            style={{ background: ACCENT, color: '#fff', padding: '14px 32px', borderRadius: 8, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}
          >
            {es ? 'Solicitar Demo para Tailandia' : 'Request Thailand Demo'}
          </Link>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '28px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px 48px' }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.7rem', fontWeight: 800, color: ACCENT }}>{s.value}</div>
              <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section style={{ padding: '64px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: 12 }}>
            {es ? 'Desafíos del Mercado Tailandés de Seguridad Pública' : 'Thai Public Safety Market Challenges'}
          </h2>
          <p style={{ color: '#475569', marginBottom: 36 }}>
            {es
              ? 'Tailandia combina el riesgo de inundaciones del Chao Phraya, el turismo masivo en destinos como Phuket y Pattaya, una de las redes de videovigilancia más grandes de Asia (64K+ cámaras en Bangkok) y la nueva PDPA de 2022 — creando un mercado de seguridad pública de alto impacto.'
              : 'Thailand combines Chao Phraya flood risk, mass tourism in destinations like Phuket and Pattaya, one of Asia\'s largest surveillance networks (64K+ cameras in Bangkok), and the new 2022 PDPA — creating a high-impact public safety market.'}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24 }}>
            {challenges.map((c) => (
              <div key={c.title} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: '24px 20px' }}>
                <div style={{ fontSize: '2rem', marginBottom: 10 }}>{c.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How KabatOne helps */}
      <section style={{ padding: '64px 24px', background: '#f1f5f9' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: 32 }}>
            {es ? 'Cómo KabatOne Unifica la Seguridad Pública Tailandesa' : 'How KabatOne Unifies Thai Public Safety'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 24 }}>
            {[
              {
                title: es ? 'K-Dispatch: Despacho CAD RTP/DDPM/NIEMS' : 'K-Dispatch: RTP/DDPM/NIEMS CAD Dispatch',
                desc: es
                  ? 'Despacho integrado para los 77 centros operativos provinciales de la RTP y los EOC 1669 del NIEMS — con integración de radiocomunicaciones digitales, coordinación 191/199/1669/112, gestión de desastres (inundaciones Chao Phraya, tsunamis zona Andamán) y sistema ERAWAN/DDPM.'
                  : 'Integrated dispatch for all 77 RTP provincial operations centres and NIEMS 1669 EOCs — with digital radiocommunications integration, 191/199/1669/112 coordination, disaster management (Chao Phraya floods, Andaman Sea tsunamis), and ERAWAN/DDPM system.',
              },
              {
                title: es ? 'K-Safety: Inundaciones, Turismo y NDWC' : 'K-Safety: Floods, Tourism and NDWC Alerts',
                desc: es
                  ? 'Conciencia situacional en tiempo real con niveles de agua del Chao Phraya, alertas de tsunami del NDWC, datos de densidad turística (Phuket/Pattaya/Chiang Mai) e integración con los centros Smart City de Bangkok, Chiang Mai y Khon Kaen — con coordinación DDPM/NSC.'
                  : 'Real-time situational awareness with Chao Phraya water levels, NDWC tsunami alerts, tourist density data (Phuket/Pattaya/Chiang Mai), and Smart City centre integration in Bangkok, Chiang Mai, and Khon Kaen — with DDPM/NSC coordination.',
              },
              {
                title: es ? 'K-Video: 64K+ Cámaras BMP conforme a PDPA' : 'K-Video: 64K+ BMP Cameras PDPA-Compliant',
                desc: es
                  ? 'Gestión centralizada de las 64.000+ cámaras CCTV de la BMP/RTP y sistemas ANPR con analítica IA conforme a PDPA/PDPC — con DPIA, base legal policial, gestión de retención y cumplimiento NCSA para sistemas CII. Integración con Safe City Phuket y los sistemas de seguridad turística de la Tourist Police.'
                  : 'Centralised management of 64,000+ BMP/RTP CCTV cameras and ANPR systems with AI analytics compliant with PDPA/PDPC — with DPIA, police legal basis, retention management, and NCSA compliance for CII systems. Integration with Safe City Phuket and Tourist Police tourist security systems.',
              },
            ].map((item) => (
              <div key={item.title} style={{ background: '#fff', borderRadius: 12, padding: '24px 20px', boxShadow: '0 1px 4px rgba(0,0,0,.06)' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: ACCENT, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '64px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 700, marginBottom: 36 }}>
            {es ? 'Preguntas Frecuentes: Seguridad Pública en Tailandia' : 'FAQ: Public Safety in Thailand'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {faqs.map((faq) => (
              <div key={faq.question} style={{ borderLeft: `4px solid ${ACCENT}`, paddingLeft: 20 }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 8 }}>{faq.question}</h3>
                <p style={{ fontSize: '0.92rem', color: '#475569', margin: 0 }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related guides */}
      <section style={{ padding: '48px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 24 }}>
            {es ? 'Guías de Mercado Relacionadas' : 'Related Market Guides'}
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {[
              { href: '/resources/public-safety-software-singapore', label: es ? 'Singapur' : 'Singapore' },
              { href: '/resources/public-safety-software-india', label: es ? 'India' : 'India' },
              { href: '/resources/public-safety-software-south-korea', label: es ? 'Corea del Sur' : 'South Korea' },
              { href: '/resources/public-safety-software-australia', label: es ? 'Australia' : 'Australia' },
              { href: '/resources/public-safety-software-japan', label: es ? 'Japón' : 'Japan' },
              { href: '/resources/public-safety-software-uae', label: es ? 'EAU' : 'UAE' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, padding: '8px 18px', fontSize: '0.9rem', color: ACCENT, textDecoration: 'none', fontWeight: 600 }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        es={es}
        h2={es ? '¿Listo para Modernizar la Seguridad Pública en Tailandia?' : 'Ready to Modernise Public Safety in Thailand?'}
        subtitle={es
          ? 'Demo personalizada para la Royal Thai Police y el DDPM — adaptada al modelo de 77 provincias, gestión de inundaciones Chao Phraya, Safe City Phuket y cumplimiento PDPA/NCSA.'
          : 'Personalised demo for Royal Thai Police and DDPM — tailored to the 77-province model, Chao Phraya flood management, Safe City Phuket, and PDPA/NCSA compliance.'}
      />
      <Footer es={es} />
    </>
  )
}
