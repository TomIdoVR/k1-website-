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
  return generatePageMetadata('publicSafetySoftwareDenmark', locale)
}

export default async function PublicSafetySoftwareDenmarkPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-denmark/`
    : `${baseUrl}/resources/public-safety-software-denmark/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Dinamarca' : 'Public Safety Software — Denmark', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en Dinamarca?',
      answer: 'Dinamarca organiza su seguridad pública bajo el Ministerio de Justicia (Justitsministeriet). La Policía Nacional (Politiet) opera en 12 distritos policiales (politikredse) bajo la Dirección Nacional de Policía (Rigspolitiet). El Servicio de Seguridad e Inteligencia (PET — Politiets Efterretningstjeneste) gestiona el contraterrorismo. Los bomberos (brandvæsen) operan a nivel municipal, bajo supervisión del Organismo Nacional de Emergencias (Beredskabsstyrelsen), dependiente del Ministerio de Defensa (Forsvarsministeriet). Los servicios de ambulancias son gestionados por las cinco regiones administrativas (regioner) a través de sus autoridades sanitarias. La Guardia Nacional de Emergencias (Beredskabsstyrelsen) proporciona capacidad de respuesta en catástrofes a nivel nacional. Dinamarca tiene un alto grado de digitalización de sus servicios públicos — el Digitaliseringsrådet y la Agencia de Digitalización (Digitaliseringsstyrelsen) impulsan la modernización tecnológica de toda la administración, incluidos los servicios de emergencia.',
    },
    {
      question: '¿Cómo funciona el despacho de emergencias en Dinamarca? ¿Qué son las Alarmcentralen y la red SINE?',
      answer: 'Dinamarca opera el número de emergencia europeo 112 a través de las Alarmcentraler (centrales de alarma), gestionadas por la policía en los 12 distritos. El 112 recibe llamadas de policía, bomberos y ambulancias. El sistema de despacho de policía opera a través de los centros operativos de la policía (vagtcentraler) de los 12 distritos, con el sistema national CAD policial (POLSAG). Los bomberos municipales son despachados desde los vagtcentraler o desde las propias Alarmcentraler en sistemas integrados. La red SINE (Sikkerhedskommunikationsnettet — Red de Comunicaciones de Seguridad) es la red nacional de radiocomunicaciones digitales (TETRA) para todos los servicios de emergencia daneses — policía, bomberos y ambulancias — operada bajo contrato por el consorcio SINE under Rigspolitiet. El proyecto SINE Next (modernización de SINE) está activo para garantizar la continuidad hasta 2035+.',
    },
    {
      question: '¿Qué es el Beredskabsstyrelsen y qué papel juega en la preparación civil danesa?',
      answer: 'El Beredskabsstyrelsen (Organismo Nacional de Emergencias de Dinamarca) es la agencia bajo el Ministerio de Defensa responsable de la preparación civil, la gestión de grandes catástrofes y el apoyo a los servicios de emergencia municipales. El Beredskabsstyrelsen opera 5 centros de rescate nacionales (statslige redningsberedskaber) para respuestas a catástrofes mayores, supervisa los planes de preparación de los municipios (kommunernes beredskab) y coordina la respuesta nacional en emergencias de gran escala. También gestiona la planificación de continuidad de infraestructuras críticas bajo la Ley de Preparación Civil (beredskabsloven). El CFCS (Center for Cybersikkerhed — Centro para la Ciberseguridad), bajo el Ministerio de Defensa, es la autoridad nacional de ciberseguridad y CERT nacional. La NIS2 es implementada en Dinamarca por el CFCS y la Agencia de Digitalización en coordinación.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en Dinamarca?',
      answer: 'La contratación pública en Dinamarca se rige por la Ley de Adquisiciones Públicas (udbudsloven, Ley 1564 de 2015), implementando las directivas europeas. Los contratos se publican en el portal nacional Udbud.dk (udbudsportalen) y en TED/OJEU para contratos mayores. La policía adquiere sus sistemas de TI a través de la Dirección Nacional de Policía (Rigspolitiet), con contratos nacionales para sistemas como POLSAG CAD. El Beredskabsstyrelsen licita los equipos y sistemas de respuesta de emergencia. Los municipios licitan independientemente los sistemas de sus bomberos. Las regiones licitan los sistemas de ambulancias y despacho médico. SKI (Staten og Kommunernes Indkøbsservice) es la central de compras para Estado y municipios — sus acuerdos marco simplifican la adquisición de tecnología para múltiples entidades. Los fondos UE (ERDF/Horizonte) están disponibles para proyectos Smart City y de modernización de servicios de seguridad.',
    },
    {
      question: '¿Cuáles son los requisitos de protección de datos y ciberseguridad para software policial en Dinamarca?',
      answer: 'El software de seguridad pública en Dinamarca debe cumplir el RGPD (implementado en la Databeskyttelsesloven — Ley de Protección de Datos de 2018). La autoridad supervisora es Datatilsynet (autoridad de protección de datos danesa). Los sistemas policiales están sujetos adicionalmente a la Politiregisterloven (Ley de Registros Policiales) con controles específicos sobre datos de investigación criminal y el sistema PNC (Politiets Nationale Computerregister). Para ciberseguridad, el CFCS (Center for Cybersikkerhed) establece el marco de seguridad nacional, implementa la NIS2 en Dinamarca y gestiona los incidentes cibernéticos nacionales. Los sistemas conectados a la red SINE tienen requisitos de homologación específicos del Rigspolitiet. El estándar ISO 27001 y el marco CFCS son la base para la homologación de sistemas de TI en la administración pública danesa.',
    },
    {
      question: '¿Qué infraestructura de videovigilancia tiene Dinamarca?',
      answer: 'Dinamarca regula la videovigilancia mediante la Lov om tv-overvågning (Ley de Videovigilancia) y el RGPD (Datatilsynet). Las cámaras en espacios públicos por parte de la policía requieren base legal específica. Copenhague tiene el sistema más desarrollado — integrado en el centro operativo de la policía de Copenhague (Kødbyen). Los sistemas ANPR (automatisk nummerpladegenkendelse) están integrados en las autopistas (Vejdirektoratet) y en puntos de control policial. El sistema de cámaras del metro de Copenhague (Metro Copenhagen) y los trenes (DSB) están conectados a los centros policiales. Los proyectos Smart City de Copenhague (Copenhagen City of Solutions) integran cámaras y sensores urbanos con analítica de datos bajo el marco del Datatilsynet. La tendencia hacia la Smart City incluye el uso de IA en videovigilancia con supervisión del Datatilsynet y evaluaciones de impacto (DPIA) obligatorias.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para la Politiet danesa, las Alarmcentraler y el Beredskabsstyrelsen?',
      answer: 'KabatOne integra las capacidades que la Politiet danesa, las 12 Alarmcentraler, los municipios y el Beredskabsstyrelsen necesitan unificadas: despacho CAD multiagencia compatible con los vagtcentraler de los 12 distritos policiales y las Alarmcentraler — con integración SINE TETRA, clasificación automática de incidentes y coordinación policía-brandvæsen-ambulancias (K-Dispatch), gestión de cámaras urbanas y ANPR con analítica IA conforme a Databeskyttelsesloven/Datatilsynet — con gestión de DPIA, limitación de finalidad y retención RGPD (K-Video), y conciencia situacional GIS compartida entre los 12 distritos policiales, brandvæsen municipales y el Beredskabsstyrelsen para coordinación en grandes catástrofes (K-Safety). Cloud EU con cumplimiento RGPD/Datatilsynet y NIS2/CFCS. Integración SINE. Demo adaptada al modelo de las Alarmcentraler y los 12 politikredse daneses.',
    },
  ] : [
    {
      question: 'How is public safety organised in Denmark?',
      answer: 'Denmark organises its public safety under the Ministry of Justice (Justitsministeriet). The National Police (Politiet) operates across 12 police districts (politikredse) under the National Police Directorate (Rigspolitiet). The Security and Intelligence Service (PET — Politiets Efterretningstjeneste) handles counter-terrorism. Fire services (brandvæsen) operate at municipal level, supervised by the National Emergency Management Agency (Beredskabsstyrelsen), under the Ministry of Defence (Forsvarsministeriet). Ambulance services are managed by the five administrative regions (regioner) through their health authorities. Beredskabsstyrelsen provides national disaster response capability. Denmark has a high level of public services digitalisation — the Digital Council (Digitaliseringsrådet) and the Digitalisation Agency (Digitaliseringsstyrelsen) drive technology modernisation across government, including emergency services.',
    },
    {
      question: 'How does emergency dispatch work in Denmark? What are the Alarmcentralen and the SINE network?',
      answer: 'Denmark operates the European 112 emergency number through Alarmcentraler (alarm centres), managed by the police in the 12 districts. 112 receives calls for police, fire, and ambulance. Police dispatch operates through police operations centres (vagtcentraler) in the 12 districts, using the national police CAD system (POLSAG). Municipal fire brigades are dispatched from vagtcentraler or from the Alarmcentraler in integrated systems. The SINE network (Sikkerhedskommunikationsnettet — Security Communications Network) is the national digital radiocommunications network (TETRA) for all Danish emergency services — police, fire, and ambulance — operated under contract by the SINE consortium under Rigspolitiet. The SINE Next project (SINE modernisation) is active to ensure continuity beyond 2035.',
    },
    {
      question: 'What is Beredskabsstyrelsen and what role does it play in Danish civil preparedness?',
      answer: 'Beredskabsstyrelsen (the National Emergency Management Agency) is the agency under the Ministry of Defence responsible for civil preparedness, major disaster management, and support to municipal emergency services. Beredskabsstyrelsen operates 5 national rescue centres (statslige redningsberedskaber) for major disaster response, supervises municipal preparedness plans (kommunernes beredskab), and coordinates national response in large-scale emergencies. It also manages continuity planning for critical infrastructure under the Civil Preparedness Act (beredskabsloven). The CFCS (Center for Cybersikkerhed — Centre for Cyber Security), under the Ministry of Defence, is the national cybersecurity authority and national CERT. NIS2 is implemented in Denmark by the CFCS and the Digitalisation Agency in coordination.',
    },
    {
      question: 'How is public safety software procured in Denmark?',
      answer: 'Danish public procurement is governed by the Public Procurement Act (udbudsloven, Act 1564 of 2015), implementing EU directives. Contracts are published on the national portal Udbud.dk (udbudsportalen) and on TED/OJEU for larger contracts. The police procure IT systems through the National Police Directorate (Rigspolitiet), with national contracts for systems like POLSAG CAD. Beredskabsstyrelsen procures emergency response equipment and systems. Municipalities independently procure their fire service systems. Regions procure ambulance and medical dispatch systems. SKI (Staten og Kommunernes Indkøbsservice) is the central purchasing body for State and municipalities — its framework agreements simplify technology procurement across multiple entities. EU funds (ERDF/Horizon) are available for Smart City and emergency service modernisation projects.',
    },
    {
      question: 'What are the data protection and cybersecurity requirements for public safety software in Denmark?',
      answer: 'Public safety software in Denmark must comply with GDPR (implemented in the Databeskyttelsesloven — Data Protection Act 2018). The supervisory authority is Datatilsynet (Danish Data Protection Authority). Police systems are additionally subject to the Police Records Act (politiregisterloven) with specific controls on criminal investigation data and the PNC national police computer register. For cybersecurity, the CFCS (Center for Cybersikkerhed) sets the national security framework, implements NIS2 in Denmark, and manages national cyber incidents. Systems connected to the SINE network have specific Rigspolitiet homologation requirements. ISO 27001 and the CFCS framework are the basis for IT system certification in Danish public administration.',
    },
    {
      question: 'What video surveillance infrastructure does Denmark have?',
      answer: 'Denmark regulates video surveillance through the Lov om tv-overvågning (Video Surveillance Act) and GDPR (Datatilsynet). Police cameras in public spaces require a specific legal basis. Copenhagen has the most developed system — integrated with the Copenhagen police operations centre (Kødbyen). ANPR systems (automatisk nummerpladegenkendelse) are integrated on motorways (Vejdirektoratet) and at police checkpoints. Copenhagen Metro and DSB rail camera systems are connected to police centres. Copenhagen Smart City projects (Copenhagen City of Solutions) integrate urban cameras and sensors with data analytics under the Datatilsynet framework. The Smart City trend includes AI-powered surveillance with mandatory DPIA assessments and Datatilsynet oversight.',
    },
    {
      question: 'Why is KabatOne suited for Danish Politiet, Alarmcentraler, and Beredskabsstyrelsen?',
      answer: 'KabatOne integrates the capabilities that Danish Politiet, the 12 Alarmcentraler, municipalities, and Beredskabsstyrelsen need unified: multi-agency CAD dispatch compatible with 12-district vagtcentraler and Alarmcentraler — with SINE TETRA integration, automatic incident classification, and police-brandvæsen-ambulance coordination (K-Dispatch), urban camera and ANPR management with AI analytics compliant with Databeskyttelsesloven/Datatilsynet — with DPIA management, purpose limitation, and GDPR retention (K-Video), and shared GIS situational awareness across 12 police districts, municipal brandvæsen, and Beredskabsstyrelsen for major disaster coordination (K-Safety). EU cloud with GDPR/Datatilsynet and NIS2/CFCS compliance. SINE integration. Demo adapted to the Alarmcentralen model and Denmark\'s 12 politikredse.',
    },
  ]

  const articleHeadline = es
    ? 'Software de Seguridad Pública para Dinamarca: Politiet 12 Distritos, SINE TETRA, Alarmcentralen, Beredskabsstyrelsen y Datatilsynet'
    : 'Public Safety Software for Denmark: Politiet 12 Districts, SINE TETRA, Alarmcentralen, Beredskabsstyrelsen & Datatilsynet'

  const articleDescription = es
    ? 'Plataforma unificada para los 12 distritos de la Politiet danesa, las Alarmcentraler y el Beredskabsstyrelsen — despacho CAD integrado con la red SINE TETRA, gestión de cámaras y ANPR conforme a Databeskyttelsesloven/Datatilsynet, y cumplimiento NIS2/CFCS.'
    : 'Unified platform for Denmark\'s 12 Politiet districts, Alarmcentraler, and Beredskabsstyrelsen — integrated CAD dispatch with SINE TETRA network, camera and ANPR management compliant with Databeskyttelsesloven/Datatilsynet, and NIS2/CFCS compliance.'

  const challenges = es ? [
    {
      icon: '📡',
      title: 'Red SINE TETRA y despacho multiagencia Alarmcentralen',
      desc: 'Integrar el despacho CAD con la red SINE TETRA y las 12 Alarmcentraler policiales que coordinan policía-bomberos-ambulancias — con el proyecto SINE Next activo para modernización y continuidad operativa hasta 2035+.',
    },
    {
      icon: '🏙️',
      title: 'Smart City Copenhague y digitalización Digitaliseringsstyrelsen',
      desc: 'Aprovechar el alto nivel de digitalización danés (Copenhagen City of Solutions, Digitaliseringsrådet) para integrar cámaras urbanas, ANPR, sensores IoT y datos de tráfico en una plataforma de seguridad pública con analítica IA conforme a RGPD/Datatilsynet.',
    },
    {
      icon: '📷',
      title: 'Videovigilancia ANPR y cumplimiento Datatilsynet',
      desc: 'Gestionar cámaras urbanas y sistemas ANPR de autopistas/puntos de control bajo la Lov om tv-overvågning y el RGPD (Datatilsynet danés) — con DPIA obligatoria, limitación de finalidad, gestión de retención y base legal policial específica.',
    },
    {
      icon: '🔒',
      title: 'Databeskyttelsesloven, NIS2/CFCS y homologación SINE',
      desc: 'Cumplir la Ley de Protección de Datos danesa (Databeskyttelsesloven), la NIS2 implementada por el CFCS, la politiregisterloven para datos policiales y los requisitos de homologación del Rigspolitiet para sistemas conectados a SINE, con cloud UE.',
    },
  ] : [
    {
      icon: '📡',
      title: 'SINE TETRA network and Alarmcentralen multi-agency dispatch',
      desc: 'Integrating CAD dispatch with the SINE TETRA network and 12 police Alarmcentraler coordinating police-fire-ambulance — with the active SINE Next modernisation project ensuring operational continuity beyond 2035.',
    },
    {
      icon: '🏙️',
      title: 'Copenhagen Smart City and Digitaliseringsstyrelsen digitalisation',
      desc: 'Leveraging Denmark\'s high digitalisation level (Copenhagen City of Solutions, Digitaliseringsrådet) to integrate urban cameras, ANPR, IoT sensors, and traffic data into a public safety platform with GDPR/Datatilsynet-compliant AI analytics.',
    },
    {
      icon: '📷',
      title: 'Surveillance ANPR and Datatilsynet compliance',
      desc: 'Managing urban cameras and motorway/checkpoint ANPR systems under the Lov om tv-overvågning and GDPR (Danish Datatilsynet) — with mandatory DPIA, purpose limitation, retention management, and specific police legal basis.',
    },
    {
      icon: '🔒',
      title: 'Databeskyttelsesloven, NIS2/CFCS and SINE homologation',
      desc: 'Meeting the Danish Data Protection Act (Databeskyttelsesloven), NIS2 implemented by CFCS, politiregisterloven for police data, and Rigspolitiet homologation requirements for SINE-connected systems, with EU cloud.',
    },
  ]

  const stats = es ? [
    { value: '12', label: 'Politikredse (Distritos)' },
    { value: '5', label: 'Regiones Sanitarias (AMK)' },
    { value: '5.9M', label: 'Habitantes en 43,000 km²' },
    { value: '112/SINE', label: 'Despacho Alarmcentralen' },
  ] : [
    { value: '12', label: 'Politikredse (Districts)' },
    { value: '5', label: 'Health Regions (Ambulance)' },
    { value: '5.9M', label: 'People across 43,000 km²' },
    { value: '112/SINE', label: 'Alarmcentralen Dispatch' },
  ]

  const title = es
    ? 'Software de Seguridad Pública para Dinamarca'
    : 'Public Safety Software for Denmark'

  const subtitle = es
    ? 'Politiet 12 Distritos · Red SINE TETRA · Alarmcentralen 112 · Beredskabsstyrelsen · Databeskyttelsesloven/Datatilsynet · NIS2/CFCS'
    : 'Politiet 12 Districts · SINE TETRA Network · Alarmcentralen 112 · Beredskabsstyrelsen · Databeskyttelsesloven/Datatilsynet · NIS2/CFCS'

  const intro = es
    ? 'Dinamarca — 5.9 millones de habitantes en uno de los países más digitalizados del mundo — opera la Politiet en 12 distritos y la red SINE TETRA para todos sus servicios de emergencia. Las Alarmcentraler coordinan el despacho 112 multiagencia, el Beredskabsstyrelsen gestiona la preparación civil y el CFCS lidera la ciberseguridad nacional bajo NIS2. KabatOne proporciona la plataforma CAD, vídeo y GIS integrada con SINE, conforme a Databeskyttelsesloven/Datatilsynet y alineada con el alto nivel de digitalización del modelo danés.'
    : 'Denmark — 5.9 million people in one of the world\'s most digitalised countries — operates Politiet across 12 districts and the SINE TETRA network for all emergency services. Alarmcentraler coordinate 112 multi-agency dispatch, Beredskabsstyrelsen manages civil preparedness, and CFCS leads national cybersecurity under NIS2. KabatOne delivers the CAD, video, and GIS platform integrated with SINE, compliant with Databeskyttelsesloven/Datatilsynet, and aligned with the Danish model\'s high digitalisation standard.'

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
            {es ? 'Guía de Mercado · Dinamarca' : 'Market Guide · Denmark'}
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
            {es ? 'Desafíos Clave del Mercado Danés' : 'Key Challenges in the Danish Market'}
          </h2>
          <p style={{ color: '#64748b', marginBottom: 36, fontSize: 16 }}>
            {es
              ? 'Los requisitos operativos únicos que definen la seguridad pública en Dinamarca.'
              : 'The unique operational requirements that define public safety in Denmark.'}
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
            {es ? 'Cómo KabatOne Apoya a los Servicios Daneses de Seguridad Pública' : 'How KabatOne Supports Danish Public Safety Services'}
          </h2>
          <p style={{ color: '#64748b', marginBottom: 36, fontSize: 16 }}>
            {es
              ? 'Una plataforma unificada adaptada a los 12 politikredse, la red SINE TETRA y el alto nivel de digitalización danés.'
              : 'One unified platform adapted to the 12 politikredse, SINE TETRA network, and Denmark\'s high digitalisation standard.'}
          </p>
          <div style={{ display: 'grid', gap: 20 }}>
            {[
              {
                product: 'K-Dispatch',
                color: '#eff6ff',
                border: '#bfdbfe',
                icon: '🚨',
                title: es ? 'Despacho CAD 112 + integración red SINE TETRA' : '112 CAD Dispatch + SINE TETRA Network Integration',
                desc: es
                  ? 'CAD multiagencia compatible con los vagtcentraler de los 12 distritos policiales y las Alarmcentraler — integración nativa con la red SINE TETRA (preparado para SINE Next), clasificación automática de incidentes, asignación de recursos policía-brandvæsen-ambulancias y coordinación GIS en tiempo real. Diseñado para el alto nivel de digitalización del modelo policial danés (POLSAG/Rigspolitiet).'
                  : 'Multi-agency CAD compatible with 12-district vagtcentraler and Alarmcentraler — native SINE TETRA network integration (SINE Next ready), automatic incident classification, police-brandvæsen-ambulance resource assignment, and real-time GIS coordination. Designed for the Danish police model\'s high digitalisation level (POLSAG/Rigspolitiet).',
              },
              {
                product: 'K-Video',
                color: '#f0fdf4',
                border: '#bbf7d0',
                icon: '📷',
                title: es ? 'Smart City, ANPR y cumplimiento Databeskyttelsesloven/Datatilsynet' : 'Smart City, ANPR and Databeskyttelsesloven/Datatilsynet Compliance',
                desc: es
                  ? 'Gestión unificada de cámaras urbanas (Copenhague Smart City, Kødbyen), sistemas ANPR de autopistas/puntos de control y sensores IoT con analítica IA. Cumplimiento nativo de Databeskyttelsesloven/RGPD: DPIA integrada, gestión de retención, limitación de finalidad y controles de acceso bajo politiregisterloven. Compatible con los requisitos del Datatilsynet danés.'
                  : 'Unified management of urban cameras (Copenhagen Smart City, Kødbyen), motorway/checkpoint ANPR systems, and IoT sensors with AI analytics. Native Databeskyttelsesloven/GDPR compliance: integrated DPIA, retention management, purpose limitation, and access controls under politiregisterloven. Compatible with Danish Datatilsynet requirements.',
              },
              {
                product: 'K-Safety',
                color: '#fefce8',
                border: '#fde68a',
                icon: '🗺️',
                title: es ? 'Conciencia situacional GIS para coordinación multiagencia y preparación Beredskabsstyrelsen' : 'GIS Situational Awareness for Multi-Agency Coordination and Beredskabsstyrelsen Preparedness',
                desc: es
                  ? 'Conciencia situacional GIS compartida entre los 12 distritos policiales, brandvæsen municipales, regiones sanitarias (AMK) y el Beredskabsstyrelsen — para coordinación en emergencias de gran escala con los 5 centros de rescate nacionales. Vista de mando unificada con posicionamiento en tiempo real de recursos SINE, capas de datos geoespaciales del Styrelsen for Dataforsyning og Infrastruktur (SDI) y alertas de catástrofes integradas.'
                  : 'Shared GIS situational awareness across 12 police districts, municipal brandvæsen, health regions (AMK), and Beredskabsstyrelsen — for coordination in large-scale emergencies with the 5 national rescue centres. Unified command view with real-time SINE resource positioning, geospatial data layers from the Agency for Data Supply and Infrastructure (SDI), and integrated disaster alerts.',
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
            {es ? 'Preguntas Frecuentes — Seguridad Pública en Dinamarca' : 'FAQ — Public Safety in Denmark'}
          </h2>
          <p style={{ color: '#64748b', marginBottom: 36, fontSize: 16 }}>
            {es
              ? 'Respuestas a las preguntas más comunes sobre el mercado danés de seguridad pública.'
              : 'Answers to the most common questions about the Danish public safety market.'}
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
              { href: es ? '/es/resources/public-safety-software-sweden/' : '/resources/public-safety-software-sweden/', label: es ? 'Suecia' : 'Sweden' },
              { href: es ? '/es/resources/public-safety-software-norway/' : '/resources/public-safety-software-norway/', label: es ? 'Noruega' : 'Norway' },
              { href: es ? '/es/resources/public-safety-software-germany/' : '/resources/public-safety-software-germany/', label: es ? 'Alemania' : 'Germany' },
              { href: es ? '/es/resources/public-safety-software-netherlands/' : '/resources/public-safety-software-netherlands/', label: es ? 'Países Bajos' : 'Netherlands' },
              { href: es ? '/es/resources/public-safety-software-belgium/' : '/resources/public-safety-software-belgium/', label: es ? 'Bélgica' : 'Belgium' },
              { href: es ? '/es/resources/public-safety-software-united-kingdom/' : '/resources/public-safety-software-united-kingdom/', label: es ? 'Reino Unido' : 'United Kingdom' },
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
        h2={es ? 'Solicita una Demo para la Politiet, las Alarmcentraler o el Beredskabsstyrelsen de Dinamarca' : 'Request a Demo for Danish Politiet, Alarmcentraler, or Beredskabsstyrelsen'}
        subtitle={es ? 'KabatOne integra el despacho CAD 112 compatible con las 12 Alarmcentraler policiales danesas — con integración SINE TETRA (preparado para SINE Next), gestión de cámaras urbanas/ANPR conforme a Databeskyttelsesloven/Datatilsynet, y conciencia situacional GIS con el Beredskabsstyrelsen. Cloud EU con cumplimiento NIS2/CFCS y el alto estándar de digitalización danés.' : 'KabatOne integrates 112 CAD dispatch compatible with all 12 Danish police Alarmcentraler — with SINE TETRA integration (SINE Next ready), urban camera/ANPR management compliant with Databeskyttelsesloven/Datatilsynet, and GIS situational awareness with Beredskabsstyrelsen. EU cloud with NIS2/CFCS compliance and Denmark\'s high digitalisation standard.'}
      />
      <Footer es={es} />
    </>
  )
}
