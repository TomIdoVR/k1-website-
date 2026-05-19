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
  return generatePageMetadata('publicSafetySoftwareSwitzerland', locale)
}

export default async function PublicSafetySoftwareSwitzerlandPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-switzerland/`
    : `${baseUrl}/resources/public-safety-software-switzerland/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Suiza' : 'Public Safety Software — Switzerland', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en Suiza?',
      answer: 'Suiza es una confederación de 26 cantones con un sistema de seguridad pública altamente descentralizado. Cada cantón tiene su propia policía cantonal (Kantonspolizei / Police cantonale / Polizia cantonale) como fuerza principal, con plena autonomía operativa. Además, las grandes ciudades tienen policía municipal (Stadtpolizei / Police municipale): Zúrich (Stadtpolizei Zürich), Berna, Ginebra (Police cantonale Genève / Polizei Genf), Basilea, Lausana y otras. A nivel federal, fedpol (Ufficio federale di polizia / Office fédéral de la police / Bundesamt für Polizei) coordina la cooperación policial internacional (Interpol, Europol, Schengen) y la lucha contra el crimen organizado y el terrorismo. El Servicio de Inteligencia de la Confederación (NDB — Nachrichtendienst des Bundes / SRC — Service de Renseignement de la Confédération) es el servicio de inteligencia civil. Los bomberos y servicios de rescate operan a nivel comunal/cantonal: Schutz & Rettung Zürich es el mayor servicio integrado de Suiza. El número unificado de emergencias es 112 (europeo), con 117 (policía), 118 (bomberos) y 144 (ambulancias) todavía en uso.',
    },
    {
      question: '¿Cómo funciona el despacho de emergencias en Suiza? ¿Qué es POLYCOM?',
      answer: 'Suiza opera múltiples números de emergencia: 112 (europeo unificado), 117 (policía), 118 (bomberos) y 144 (ambulancias). Los centros de despacho policial son las Kantonspolizei-Einsatzzentralen (salas de operaciones de la policía cantonal), uno por cantón. Los bomberos son despachados desde centrales de alarma cantonales/comunales. Los servicios de ambulancias 144 son coordinados desde las centrales 144 cantonales (Sanitätsnotrufzentralen). La red POLYCOM es la red nacional de radiocomunicaciones digitales TETRA para todas las organizaciones de seguridad pública suizas (policía, bomberos, sanidad, ejército, protección civil). POLYCOM es operada bajo mandato federal por la UFIT (Oficina Federal de Tecnología de la Información y Telecomunicaciones — FOITT). Suiza está en proceso de evaluación para la siguiente generación de comunicaciones de emergencia (broadband 4G/5G — POLYCOM Nachfolger), siguiendo la tendencia FirstNet/ESN europea. Los cantones de montaña (Valais, Graubünden, Uri, etc.) presentan desafíos especiales de cobertura.',
    },
    {
      question: '¿Cuál es el marco de protección de datos para software de seguridad pública en Suiza?',
      answer: 'Suiza implementó una revisión completa de su legislación de protección de datos con la nueva Ley Federal de Protección de Datos (nLPD / revDSG — revidiertes Datenschutzgesetz / nLPD — nouvelle Loi sur la protection des données), que entró en vigor el 1 de septiembre de 2023. Esta ley modernizó la protección de datos suiza alineándola sustancialmente con el RGPD europeo, aunque Suiza no es miembro de la UE. El comisionado federal responsable es el PFPDT (Commissaire fédéral à la protection des données et à la transparence / EDÖB — Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter). Los sistemas policiales también están sujetos a la Ley Federal sobre el Sistema de Información Policial de la Confederación (LSIP) y las leyes cantonales de protección de datos. La transferencia de datos con la UE es reconocida por la decisión de adecuación de la UE (Suiza está en la lista blanca). El Acuerdo de Schengen facilita la interoperabilidad policial con la UE.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en Suiza?',
      answer: 'La contratación pública en Suiza se rige por la Ley Federal sobre Contratación Pública (LCPub / BöB — Bundesgesetz über das öffentliche Beschaffungswesen), revisada en 2021. Las licitaciones federales se publican en SIMAP (Système d\'information sur les marchés publics / Informationssystem über das öffentliche Beschaffungswesen), el portal central de contratación pública suizo. A nivel federal, el DDPS (Departamento Federal de Defensa, Protección de la Población y Deporte) y el DFJP (Departamento Federal de Justicia y Policía) son los principales compradores de sistemas de seguridad. Los 26 cantones tienen plena autonomía en sus adquisiciones — cada Kantonspolizei licita independientemente sus sistemas CAD y de gestión de incidentes. Los umbrales de la LCPub determinan el procedimiento (adjudicación directa, procedimiento selectivo o procedimiento abierto). Los contratos que superen los umbrales de los acuerdos GPA (Acuerdo de Contratación Pública de la OMC) requieren licitación internacional, apareciendo en SIMAP y TED/OJEU.',
    },
    {
      question: '¿Cuáles son los requisitos de ciberseguridad para software de seguridad pública en Suiza?',
      answer: 'La ciberseguridad en Suiza es coordinada por el NCSC (National Cyber Security Centre / Centre national pour la cybersécurité — CNCS), que desde 2023 es parte del DDPS. El NCSC gestiona el GovCERT.ch para el sector público. El IKT-Minimalstandard (Estándar Mínimo TIC) es el marco voluntario (pero ampliamente adoptado) para la resiliencia cibernética de infraestructuras críticas en Suiza, equivalente al NIS2 europeo. La Ley de Seguridad de la Información (LSI / ISG — Informationssicherheitsgesetz) establece los requisitos de seguridad para las autoridades federales. Los sistemas del gobierno federal deben cumplir los estándares de la UFIT/FOITT. MELANI (ahora integrado en el NCSC) fue el referente histórico para la protección de infraestructuras críticas. Los cantones tienen sus propios CISO y marcos de ciberseguridad que deben alinearse con los estándares federales para la interoperabilidad policial.',
    },
    {
      question: '¿Qué proyectos Smart City y de digitalización policial existen en Suiza?',
      answer: 'Suiza lidera varios proyectos de digitalización policial y Smart City. La Kantonspolizei Zürich y Stadtpolizei Zürich tienen sistemas de gestión de incidentes (Einsatzleitsystem) modernizados. Schutz & Rettung Zürich opera un centro de despacho integrado multiagencia para Zúrich. El proyecto DÍGIT CH impulsa la transformación digital del sector público suizo. Varias ciudades suizas (Zúrich, Berna, Ginebra, Basilea) tienen programas Smart City con integración de cámaras urbanas, sensores de tráfico y analítica de datos. El ASTRA (Oficina Federal de Carreteras) gestiona la vigilancia de autopistas con integración policial. La Polizei Bern y Geneva Police participan en proyectos piloto de IA para análisis de incidentes. La aplicación nacional AlertSwiss (BABS/OFPP) integra alertas de emergencia para la población. Suiza participa activamente en Schengen-SIS (Sistema de Información de Schengen) y Prüm para interoperabilidad policial europeo.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para la Kantonspolizei suiza, los centros 144/118/117 y POLYCOM?',
      answer: 'KabatOne integra las capacidades que las Kantonspolizei suizas, las centrales de despacho y Schutz & Rettung necesitan unificadas: despacho CAD multiagencia compatible con la estructura de 26 cantones autónomos — con integración POLYCOM TETRA y preparación para POLYCOM Nachfolger (4G/5G broadband), clasificación automática de incidentes y coordinación policía-bomberos-ambulancias, compatible con las centrales 112/117/118/144 cantonales (K-Dispatch), gestión de cámaras urbanas y ANPR con analítica IA conforme a nLPD/revDSG y PFPDT/EDÖB — con DPIA, base legal cantonal y gestión de retención (K-Video), y conciencia situacional GIS compartida entre las Kantonspolizei, fedpol, NDB/SRC y protección civil cantonal/federal para coordinación en situaciones de catástrofe y grandes eventos de seguridad (K-Safety). Cloud EU con cumplimiento nLPD/revDSG y IKT-Minimalstandard/ISG/NCSC. Compatible con los marcos de contratación SIMAP/LCPub/BöB. Demo adaptada al modelo confederal suizo de 26 cantones.',
    },
  ] : [
    {
      question: 'How is public safety organised in Switzerland?',
      answer: 'Switzerland is a confederation of 26 cantons with a highly decentralised public safety system. Each canton has its own cantonal police (Kantonspolizei / Police cantonale / Polizia cantonale) as the primary force, with full operational autonomy. Additionally, major cities have municipal police (Stadtpolizei / Police municipale): Zurich (Stadtpolizei Zürich), Bern, Geneva (Police cantonale Genève), Basel, Lausanne, and others. At federal level, fedpol (Federal Office of Police / Bundesamt für Polizei) coordinates international police cooperation (Interpol, Europol, Schengen) and combats organised crime and terrorism. The Federal Intelligence Service (NDB — Nachrichtendienst des Bundes / SRC — Service de Renseignement de la Confédération) is the civilian intelligence service. Fire and rescue services operate at municipal/cantonal level: Schutz & Rettung Zürich is Switzerland\'s largest integrated emergency service. The unified emergency number is 112 (European), with 117 (police), 118 (fire), and 144 (ambulance) still widely used.',
    },
    {
      question: 'How does emergency dispatch work in Switzerland? What is POLYCOM?',
      answer: 'Switzerland operates multiple emergency numbers: 112 (unified European), 117 (police), 118 (fire), and 144 (ambulance). Police dispatch centres are the Kantonspolizei-Einsatzzentralen (cantonal police operations rooms), one per canton. Fire brigades are dispatched from cantonal/municipal alarm centres. Ambulance 144 services are coordinated from cantonal 144 centres (Sanitätsnotrufzentralen). The POLYCOM network is the national digital TETRA radiocommunications network for all Swiss public safety organisations (police, fire, medical services, army, civil protection). POLYCOM is operated under federal mandate by FOITT (Federal Office of Information Technology, Systems and Telecommunication — UFIT). Switzerland is evaluating the next generation of emergency communications (4G/5G broadband — POLYCOM successor), following the FirstNet/ESN European trend. Mountain cantons (Valais, Graubünden, Uri, etc.) present special coverage challenges.',
    },
    {
      question: 'What is the data protection framework for public safety software in Switzerland?',
      answer: 'Switzerland underwent a comprehensive revision of its data protection legislation with the new Federal Act on Data Protection (nFADP / revDSG — revidiertes Datenschutzgesetz / nLPD — nouvelle Loi sur la protection des données), which entered into force on 1 September 2023. This law modernised Swiss data protection, substantially aligning it with the EU GDPR, although Switzerland is not an EU member. The responsible federal commissioner is the FDPIC/PFPDT (Federal Data Protection and Information Commissioner / Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter — EDÖB). Police systems are additionally subject to the Federal Act on the Federal Police Information Systems (FSIPA) and cantonal data protection laws. Data transfers to/from the EU are recognised by the EU adequacy decision (Switzerland is on the white list). The Schengen Agreement facilitates police interoperability with the EU.',
    },
    {
      question: 'How is public safety software procured in Switzerland?',
      answer: 'Swiss public procurement is governed by the Federal Act on Public Procurement (FAPP / BöB — Bundesgesetz über das öffentliche Beschaffungswesen), revised in 2021. Federal tenders are published on SIMAP (System for Public Procurement Information / Informationssystem über das öffentliche Beschaffungswesen), the central Swiss public procurement portal. At federal level, DDPS (Federal Department of Defence, Civil Protection and Sport) and FDJP (Federal Department of Justice and Police) are the main buyers of security systems. All 26 cantons have full autonomy in their procurement — each Kantonspolizei independently procures its CAD and incident management systems. FAPP thresholds determine the procedure (direct award, selective, or open procedure). Contracts above GPA (WTO Agreement on Government Procurement) thresholds require international tendering, appearing on SIMAP and TED/OJEU.',
    },
    {
      question: 'What are the cybersecurity requirements for public safety software in Switzerland?',
      answer: 'Cybersecurity in Switzerland is coordinated by the NCSC (National Cyber Security Centre / Centre national pour la cybersécurité — CNCS), which since 2023 is part of DDPS. The NCSC operates GovCERT.ch for the public sector. The IKT-Minimalstandard (ICT Minimum Standard) is the voluntary (but widely adopted) framework for cyber resilience of critical infrastructure in Switzerland, equivalent to the EU NIS2. The Information Security Act (ISA / ISG — Informationssicherheitsgesetz) sets security requirements for federal authorities. Federal government systems must comply with FOITT/UFIT standards. MELANI (now integrated into NCSC) was the historical reference for critical infrastructure protection. Cantons have their own CISOs and cybersecurity frameworks that must align with federal standards for police interoperability.',
    },
    {
      question: 'What Smart City and police digitalisation projects exist in Switzerland?',
      answer: 'Switzerland leads several police digitalisation and Smart City projects. Kantonspolizei Zürich and Stadtpolizei Zürich have modernised incident management systems (Einsatzleitsystem). Schutz & Rettung Zürich operates an integrated multi-agency dispatch centre for Zurich. The DÍGIT CH programme drives public sector digital transformation. Several Swiss cities (Zurich, Bern, Geneva, Basel) have Smart City programmes integrating urban cameras, traffic sensors, and data analytics. ASTRA (Federal Roads Office) manages motorway surveillance with police integration. Polizei Bern and Geneva Police participate in AI pilot projects for incident analysis. The national AlertSwiss app (BABS/FOCP) integrates emergency alerts for the population. Switzerland actively participates in Schengen-SIS (Schengen Information System) and Prüm for European police interoperability.',
    },
    {
      question: 'Why is KabatOne suited for Swiss Kantonspolizei, 117/118/144 dispatch centres, and POLYCOM?',
      answer: 'KabatOne integrates the capabilities that Swiss Kantonspolizei, dispatch centres, and Schutz & Rettung need unified: multi-agency CAD dispatch compatible with all 26 autonomous cantons — with POLYCOM TETRA integration and POLYCOM successor readiness (4G/5G broadband), automatic incident classification, and police-fire-ambulance coordination, compatible with cantonal 112/117/118/144 centres (K-Dispatch), urban camera and ANPR management with AI analytics compliant with nFADP/revDSG and FDPIC/EDÖB — with DPIA, cantonal legal basis, and retention management (K-Video), and shared GIS situational awareness across Kantonspolizei, fedpol, NDB/SRC, and cantonal/federal civil protection for disaster and major security event coordination (K-Safety). EU cloud with nFADP/revDSG and IKT-Minimalstandard/ISA/NCSC compliance. Compatible with SIMAP/FAPP/BöB procurement frameworks. Demo adapted to Switzerland\'s confederal 26-canton model.',
    },
  ]

  const articleHeadline = es
    ? 'Software de Seguridad Pública para Suiza: Kantonspolizei, POLYCOM TETRA, 26 Cantones, nLPD/PFPDT y IKT-Minimalstandard'
    : 'Public Safety Software for Switzerland: Kantonspolizei, POLYCOM TETRA, 26 Cantons, nFADP/FDPIC & IKT-Minimalstandard'

  const articleDescription = es
    ? 'Plataforma unificada para la Kantonspolizei suiza y los 26 cantones — despacho CAD integrado con POLYCOM TETRA (preparado para POLYCOM Nachfolger), gestión de cámaras y ANPR conforme a nLPD/revDSG, y cumplimiento IKT-Minimalstandard/ISG con procurement SIMAP/LCPub.'
    : 'Unified platform for Swiss Kantonspolizei and 26 cantons — integrated CAD dispatch with POLYCOM TETRA (POLYCOM successor ready), camera and ANPR management compliant with nFADP/revDSG, and IKT-Minimalstandard/ISA compliance with SIMAP/FAPP procurement.'

  const challenges = es ? [
    {
      icon: '🏔️',
      title: 'Modelo confederal con 26 cantones autónomos',
      desc: 'Coordinar 26 Kantonspolizei autónomas con policías municipales (Stadtpolizei Zürich, Polizei Bern, Geneva Police) y fedpol a nivel federal — cada cantón con su propia central de despacho, sistema CAD y procesos operativos independientes.',
    },
    {
      icon: '📡',
      title: 'POLYCOM TETRA y transición a POLYCOM Nachfolger',
      desc: 'Integrar el despacho CAD con la red POLYCOM TETRA nacional mientras se prepara la evaluación del POLYCOM Nachfolger (4G/5G broadband) — garantizando continuidad operativa y cobertura en cantones montañosos como Valais y Graubünden.',
    },
    {
      icon: '🔒',
      title: 'nLPD/revDSG (sept. 2023) y FDPIC/EDÖB compliance',
      desc: 'Cumplir la nueva Ley Federal de Protección de Datos (nLPD vigente desde sept. 2023), las leyes cantonales de protección de datos, el FSIPA para sistemas de información policial y el marco ISG/NCSC para ciberseguridad de infraestructuras críticas.',
    },
    {
      icon: '🛒',
      title: 'Contratación cantonal autónoma (SIMAP/LCPub)',
      desc: 'Navegar la fragmentación de procurement de 26 cantones independientes — cada uno con sus propias licitaciones en SIMAP — más las adquisiciones del DFJP/fedpol a nivel federal, con diferentes umbrales y procedimientos según el BöB/LCPub revisado de 2021.',
    },
  ] : [
    {
      icon: '🏔️',
      title: 'Confederal model with 26 autonomous cantons',
      desc: 'Coordinating 26 autonomous Kantonspolizei with municipal police (Stadtpolizei Zürich, Polizei Bern, Geneva Police) and fedpol at federal level — each canton with its own dispatch centre, CAD system, and independent operational processes.',
    },
    {
      icon: '📡',
      title: 'POLYCOM TETRA and transition to POLYCOM successor',
      desc: 'Integrating CAD dispatch with the national POLYCOM TETRA network while preparing for the POLYCOM successor evaluation (4G/5G broadband) — ensuring operational continuity and coverage in mountain cantons such as Valais and Graubünden.',
    },
    {
      icon: '🔒',
      title: 'nFADP/revDSG (Sept. 2023) and FDPIC/EDÖB compliance',
      desc: 'Complying with the new Federal Act on Data Protection (nFADP in force since Sept. 2023), cantonal data protection laws, FSIPA for police information systems, and the ISA/NCSC framework for critical infrastructure cybersecurity.',
    },
    {
      icon: '🛒',
      title: 'Autonomous cantonal procurement (SIMAP/FAPP)',
      desc: 'Navigating procurement fragmentation across 26 independent cantons — each with their own SIMAP tenders — plus FDJP/fedpol federal procurement, with different thresholds and procedures under the revised 2021 BöB/FAPP.',
    },
  ]

  const stats = es ? [
    { value: '26', label: 'Cantones / Kantonspolizei' },
    { value: '117/118/144', label: 'Números de emergencia' },
    { value: 'POLYCOM', label: 'Red TETRA nacional' },
    { value: 'nLPD 2023', label: 'Nueva ley de datos' },
  ] : [
    { value: '26', label: 'Cantons / Kantonspolizei' },
    { value: '117/118/144', label: 'Emergency numbers' },
    { value: 'POLYCOM', label: 'National TETRA network' },
    { value: 'nFADP 2023', label: 'New data protection law' },
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
            {es ? 'Guía de Mercado · Suiza' : 'Market Guide · Switzerland'}
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, lineHeight: 1.2, margin: '0 0 20px' }}>
            {es
              ? 'Software de Seguridad Pública para Suiza'
              : 'Public Safety Software for Switzerland'}
          </h1>
          <p style={{ fontSize: '1.15rem', opacity: 0.9, maxWidth: 680, margin: '0 auto 32px' }}>
            {es
              ? 'Kantonspolizei, POLYCOM TETRA, 26 cantones, nLPD/PFPDT y IKT-Minimalstandard — plataforma unificada para la Confederación Helvética.'
              : 'Kantonspolizei, POLYCOM TETRA, 26 cantons, nFADP/FDPIC & IKT-Minimalstandard — unified platform for the Swiss Confederation.'}
          </p>
          <Link
            href="/contact"
            style={{ background: ACCENT, color: '#fff', padding: '14px 32px', borderRadius: 8, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}
          >
            {es ? 'Solicitar Demo para Suiza' : 'Request Switzerland Demo'}
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
            {es ? 'Desafíos del Mercado Suizo de Seguridad Pública' : 'Swiss Public Safety Market Challenges'}
          </h2>
          <p style={{ color: '#475569', marginBottom: 36 }}>
            {es
              ? 'La estructura confederal de Suiza con 26 cantones autónomos, las cuatro zonas lingüísticas (alemán, francés, italiano, romanche) y el mandato POLYCOM crean un entorno único para los proveedores de tecnología.'
              : 'Switzerland\'s confederal structure with 26 autonomous cantons, four linguistic zones (German, French, Italian, Romansh), and the POLYCOM mandate create a unique environment for technology providers.'}
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
            {es ? 'Cómo KabatOne Unifica la Seguridad Pública Suiza' : 'How KabatOne Unifies Swiss Public Safety'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 24 }}>
            {[
              {
                title: es ? 'K-Dispatch: Despacho CAD Multiagencia' : 'K-Dispatch: Multi-Agency CAD Dispatch',
                desc: es
                  ? 'Despacho integrado para las 26 Kantonspolizei y Stadtpolizei — con integración POLYCOM TETRA/POLYCOM Nachfolger, coordinación 112/117/118/144 y compatibilidad con los centros ILS de Schutz & Rettung.'
                  : 'Integrated dispatch for all 26 Kantonspolizei and Stadtpolizei — with POLYCOM TETRA/successor integration, 112/117/118/144 coordination, and compatibility with Schutz & Rettung ILS centres.',
              },
              {
                title: es ? 'K-Safety: Conciencia Situacional GIS' : 'K-Safety: GIS Situational Awareness',
                desc: es
                  ? 'Plataforma de conciencia situacional en tiempo real para fedpol, Kantonspolizei, NDB/SRC y protección civil cantonal — integración ASTRA (autopistas), AlertSwiss y Smart City (Zürich, Bern, Genève, Basel).'
                  : 'Real-time situational awareness for fedpol, Kantonspolizei, NDB/SRC, and cantonal civil protection — ASTRA motorway, AlertSwiss, and Smart City integration (Zürich, Bern, Genève, Basel).',
              },
              {
                title: es ? 'K-Video: Gestión de Cámaras conforme a nLPD' : 'K-Video: nFADP-Compliant Camera Management',
                desc: es
                  ? 'Gestión centralizada de cámaras urbanas y ANPR con analítica IA conforme a nLPD/revDSG — con DPIA, base legal cantonal/federal (FSIPA), gestión de retención y supervisión FDPIC/EDÖB.'
                  : 'Centralised urban camera and ANPR management with AI analytics compliant with nFADP/revDSG — with DPIA, cantonal/federal legal basis (FSIPA), retention management, and FDPIC/EDÖB oversight.',
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
            {es ? 'Preguntas Frecuentes: Seguridad Pública en Suiza' : 'FAQ: Public Safety in Switzerland'}
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
              { href: '/resources/public-safety-software-germany', label: es ? 'Alemania' : 'Germany' },
              { href: '/resources/public-safety-software-austria', label: es ? 'Austria' : 'Austria' },
              { href: '/resources/public-safety-software-france', label: es ? 'Francia' : 'France' },
              { href: '/resources/public-safety-software-netherlands', label: es ? 'Países Bajos' : 'Netherlands' },
              { href: '/resources/public-safety-software-sweden', label: es ? 'Suecia' : 'Sweden' },
              { href: '/resources/public-safety-software-norway', label: es ? 'Noruega' : 'Norway' },
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
        h2={es ? '¿Listo para Modernizar la Seguridad Pública en Suiza?' : 'Ready to Modernise Public Safety in Switzerland?'}
        subtitle={es
          ? 'Demo personalizada para las Kantonspolizei suizas — adaptada al modelo confederal de 26 cantones, POLYCOM TETRA y nLPD/revDSG.'
          : 'Personalised demo for Swiss Kantonspolizei — tailored to the confederal 26-canton model, POLYCOM TETRA, and nFADP/revDSG.'}
      />
      <Footer es={es} />
    </>
  )
}
