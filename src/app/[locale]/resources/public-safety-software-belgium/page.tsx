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
  return generatePageMetadata('publicSafetySoftwareBelgium', locale)
}

export default async function PublicSafetySoftwareBelgiumPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-belgium/`
    : `${baseUrl}/resources/public-safety-software-belgium/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Pública — Bélgica' : 'Public Safety Software — Belgium', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cómo está organizada la seguridad pública en Bélgica?',
      answer: 'Bélgica organiza su seguridad pública en un modelo integrado de dos niveles. La Policía Federal (Federale Politie / Police Fédérale) opera a nivel nacional con unidades especializadas (CIG, CGS, CGSU) bajo el SPF Interior (Service Public Fédéral Intérieur). La Policía Local (Lokale Politie / Police Locale) opera en 188 zonas policiales (politiezones / zones de police) que cubren uno o varios municipios. La red ASTRID proporciona las radiocomunicaciones digitales de emergencias para todos los servicios (policía, bomberos, ambulancias). Los Centros de Emergencias 112/101 (Hulpcentra 112 y 101 / Centres 112 et 101) coordinan el despacho de todas las llamadas de emergencia. El Centro Gubernamental de Coordinación y Crisis (CGCCR / OCAM) gestiona las crisis nacionales. La Protección Civil (Civiele Bescherming / Protection Civile) opera bajo el SPF Interior para respuesta a grandes catástrofes. Bruselas Capital alberga las sedes de la OTAN y las instituciones de la UE, lo que genera requisitos de seguridad únicos.',
    },
    {
      question: '¿Cómo funciona el despacho de emergencias en Bélgica? ¿Qué son los Hulpcentra/Centres y la red ASTRID?',
      answer: 'Bélgica opera un sistema de despacho integrado mediante los Centros Operacionales de Emergencias (Centres Opérationnels de Secours / Operationele Hulpcentra — COS/OHC), que fusionaron los antiguos centros 100 (ambulancias/bomberos) y 112 en centros provinciales integrados. El número 101 permanece para la policía, el 112 para emergencias médicas y de bomberos. La red ASTRID (Automatisering van Spraak- en Transmissie van Data) es la infraestructura nacional de radiocomunicaciones digitales (TETRA) que conecta a todos los servicios de emergencia belgas — policía, bomberos, ambulancias y CGCCR — con más de 90,000 usuarios activos. El CAD/GIS policial de la Policía Federal (ISLP / Integrated System for Local Police) gestiona el despacho y la gestión de incidentes a nivel nacional con integración provincial y local. La Región de Bruselas-Capital tiene centros de operaciones adicionales por su estatus especial.',
    },
    {
      question: '¿Qué rol tienen la OTAN y las instituciones de la UE en la seguridad de Bélgica?',
      answer: 'Bélgica es sede del Cuartel General de la OTAN (NATO HQ) en Evere (Bruselas), las instituciones principales de la Unión Europea (Comisión, Consejo, Parlamento, OSCE), y numerosas organizaciones internacionales. Esto crea un entorno de seguridad único con requisitos excepcionales: protección de personalidades de alto nivel (VIP protection), seguridad para grandes eventos diplomáticos, amenaza terrorista persistente (nivel OCAM), y coordinación con fuerzas internacionales. La Policía Federal tiene unidades especializadas como la CGSU (unidad de élite, equivalente a SWAT) y el Centro de Crisis / CGCCR para gestión de incidentes de alto impacto. La Dirección General de Seguridad e Interoperabilidad (DGSI/VSSE — equivalente belga del MI5) coordina con la Policía Federal en amenazas terroristas. Las licitaciones de seguridad vinculadas a la OTAN y la UE pueden tener requisitos OTAN/UE adicionales.',
    },
    {
      question: '¿Cómo se adquiere software de seguridad pública en Bélgica?',
      answer: 'La contratación pública belga se rige por la Ley de 17 de junio de 2016 sobre Contratos Públicos, que implementa las directivas europeas. Los contratos se publican en la plataforma e-Procurement (enot.publicprocurement.be) gestionada por la BOSA (Beleidsondersteuning / Budget et Contrôle de Gestion). Los grandes contratos (>= umbrales europeos) también aparecen en TED/OJEU. La SPF Interior licita los sistemas a nivel federal (ISLP, ASTRID, sistemas CGCCR). Las 188 zonas de policía local licitan por separado sus sistemas tecnológicos. Las provincias licitan los COS/OHC. Los acuerdos marco (raamovereenkomsten / accords-cadres) de la BOSA o los Centrales de Compras permiten a múltiples administraciones adherirse a contratos existentes. Los fondos europeos (Horizon Europa, FEDER/REACT-EU para smart cities) cofinancian proyectos tecnológicos de seguridad pública.',
    },
    {
      question: '¿Cuáles son los requisitos de protección de datos y ciberseguridad para software de seguridad pública en Bélgica?',
      answer: 'El software de seguridad pública en Bélgica debe cumplir el RGPD (implementado en la Ley belga de 30 de julio de 2018). La autoridad de control es la GBA (Gegevensbeschermingsautoriteit / Autorité de Protection des Données), independiente. El tratamiento policial de datos está regulado por la Ley de Policía (Wet op het politieambt) y la Ley de Cámaras (Loi caméras / Camerawet), que regula estrictamente la videovigilancia en el espacio público con requisitos de registro en la GBA, señalización y períodos de conservación (máximo 30 días en general). Para ciberseguridad, el CCB (Centrum voor Cybersecurity België / Centre pour la Cybersécurité Belgique) es la autoridad nacional — implementa la NIS2 (DNBS belga desde 2023) y gestiona el CERT belga (CERT.be). Los sistemas conectados a ASTRID tienen requisitos de homologación específicos. Los datos procesados para la OTAN/UE en Bélgica pueden estar sujetos a marcos de seguridad adicionales.',
    },
    {
      question: '¿Qué infraestructura de videovigilancia tiene Bélgica y cómo funciona la Camerawet?',
      answer: 'Bélgica regula la videovigilancia en el espacio público mediante la Loi caméras / Camerawet (Ley de 21 de marzo de 2007, actualizada). Toda cámara de vigilancia en el espacio público debe registrarse en la GBA y cumplir con señalización, limitación de finalidad y períodos de conservación. La Policía Federal y las zonas de policía local gestionan redes de cámaras urbanas (principalmente en Bruselas, Amberes, Gante, Lieja). La Región de Bruselas-Capital tiene el plan de seguridad Smart City más desarrollado, con miles de cámaras integradas en el centro de operaciones de la Policía de Bruselas. Amberes (Antwerpen) ha implementado un sistema de cámaras ANPR a gran escala — el más avanzado de Bélgica — con miles de puntos de lectura de matrículas cubriendo la ciudad y sus accesos. La integración entre videovigilancia urbana, ANPR y sistemas de despacho CAD es la principal tendencia de modernización en seguridad pública belga.',
    },
    {
      question: '¿Por qué KabatOne es adecuado para la Policía Federal belga, las zones de police y los COS/OHC?',
      answer: 'KabatOne integra las capacidades que la Policía Federal, las 188 zones de police y los Centros Operacionales COS/OHC necesitan unificadas: despacho CAD compatible con los flujos del sistema integrado 112/101 y los centros OHC provinciales — con clasificación automática de incidentes y coordinación multiagencia policía-bomberos-ambulancias, conforme al modelo belga (K-Dispatch), gestión de redes de videovigilancia urbana y ANPR con analítica IA — detección de placas, comportamientos, búsqueda forense — cumpliendo la Camerawet, RGPD y la Loi de policía (K-Video), y conciencia situacional GIS compartida entre la Policía Federal, zonas locales, COS/OHC y el CGCCR para coordinación en eventos de alto impacto como las cumbres OTAN/UE en Bruselas (K-Safety). Cloud EU con cumplimiento RGPD/GBA y NIS2/CCB. Demo adaptada al modelo integrado de dos niveles de la policía belga.',
    },
  ] : [
    {
      question: 'How is public safety organised in Belgium?',
      answer: 'Belgium organises its public safety in an integrated two-tier model. The Federal Police (Federale Politie / Police Fédérale) operates nationally with specialised units (CIG, CGS, CGSU) under the SPF Home Affairs (Service Public Fédéral Intérieur). The Local Police (Lokale Politie / Police Locale) operates across 188 police zones (politiezones / zones de police) covering one or more municipalities. The ASTRID network provides digital emergency radiocommunications for all services (police, fire, ambulance). Emergency Dispatch Centres 112/101 (Hulpcentra 112 en 101 / Centres 112 et 101) coordinate dispatch for all emergency calls. The Government Crisis Centre (CGCCR / OCAM) manages national crises. Civil Protection (Civiele Bescherming / Protection Civile) operates under SPF Home Affairs for major disasters. Brussels-Capital hosts NATO HQ and EU institutions, creating unique security requirements.',
    },
    {
      question: 'How does emergency dispatch work in Belgium? What are the Hulpcentra/COS and the ASTRID network?',
      answer: 'Belgium operates integrated emergency dispatch through Operational Emergency Centres (Centres Opérationnels de Secours / Operationele Hulpcentra — COS/OHC), which merged the former 100 (ambulance/fire) and 112 centres into integrated provincial centres. Number 101 remains for police; 112 for medical and fire emergencies. The ASTRID network (Automatisering van Spraak- en Transmissie van Data) is the national digital radiocommunications infrastructure (TETRA) connecting all Belgian emergency services — police, fire, ambulance, and CGCCR — with over 90,000 active users. The Federal Police CAD/GIS system (ISLP / Integrated System for Local Police) manages dispatch and incident management nationally with provincial and local integration. The Brussels-Capital Region has additional operations centres given its special status.',
    },
    {
      question: 'What role do NATO and EU institutions play in Belgian public safety?',
      answer: 'Belgium hosts NATO Headquarters (NATO HQ) in Evere (Brussels), the main EU institutions (Commission, Council, Parliament, OSCE), and numerous international organisations. This creates a unique security environment with exceptional requirements: high-profile VIP protection, security for major diplomatic events, persistent terrorist threat (OCAM threat levels), and coordination with international forces. The Federal Police has specialised units including CGSU (elite unit, SWAT equivalent) and the CGCCR/Crisis Centre for high-impact incident management. The State Security Service (VSSE/SGRS — Belgium\'s MI5 equivalent) coordinates with Federal Police on terrorist threats. Security procurements linked to NATO/EU in Belgium may carry additional NATO/EU security requirements.',
    },
    {
      question: 'How is public safety software procured in Belgium?',
      answer: 'Belgian public procurement is governed by the Law of 17 June 2016 on Public Procurement, implementing European directives. Contracts are published on the e-Procurement platform (enot.publicprocurement.be) managed by BOSA (Budget and Management Support). Large contracts (at or above EU thresholds) also appear on TED/OJEU. SPF Home Affairs procures federal-level systems (ISLP, ASTRID, CGCCR systems). Each of the 188 local police zones procures its own technology systems separately. Provinces procure COS/OHC systems. Framework agreements (raamovereenkomsten / accords-cadres) from BOSA or central purchasing bodies allow multiple administrations to join existing contracts. European funds (Horizon Europe, ERDF/REACT-EU for smart cities) co-finance public safety technology projects.',
    },
    {
      question: 'What are the data protection and cybersecurity requirements for public safety software in Belgium?',
      answer: 'Public safety software in Belgium must comply with GDPR (implemented in the Belgian Law of 30 July 2018). The supervisory authority is the GBA (Gegevensbeschermingsautoriteit / Autorité de Protection des Données), independent. Police data processing is regulated by the Police Function Act (Wet op het politieambt) and the Camera Act (Loi caméras / Camerawet), which strictly regulates public space surveillance with GBA registration requirements, signage, and retention periods (maximum 30 days generally). For cybersecurity, the CCB (Centrum voor Cybersecurity België / Centre pour la Cybersécurité Belgique) is the national authority — implementing NIS2 (Belgian DNBS since 2023) and managing the national CERT (CERT.be). Systems connected to ASTRID have specific homologation requirements. Data processed for NATO/EU in Belgium may be subject to additional security frameworks.',
    },
    {
      question: 'What video surveillance infrastructure does Belgium have and how does the Camerawet work?',
      answer: 'Belgium regulates public space video surveillance through the Loi caméras / Camerawet (Law of 21 March 2007, updated). All surveillance cameras in public spaces must be registered with the GBA and comply with signage, purpose limitation, and retention period requirements. The Federal Police and local police zones manage urban camera networks (mainly in Brussels, Antwerp, Ghent, Liège). Brussels-Capital Region has the most developed Smart City security plan, with thousands of cameras integrated into the Brussels Police operations centre. Antwerp (Antwerpen) has deployed the most advanced large-scale ANPR camera system in Belgium — thousands of licence plate reading points covering the city and its access routes. The integration of urban surveillance, ANPR, and CAD dispatch systems is the leading modernisation trend in Belgian public safety.',
    },
    {
      question: 'Why is KabatOne suited for the Belgian Federal Police, zones de police, and COS/OHC centres?',
      answer: 'KabatOne integrates the capabilities that the Federal Police, 188 zones de police, and provincial COS/OHC Operational Centres need unified: CAD dispatch compatible with the integrated 112/101 and provincial OHC flows — with automatic incident classification and multi-agency police-fire-ambulance coordination, compliant with the Belgian integrated model (K-Dispatch), management of urban surveillance and ANPR networks with AI analytics — plate detection, behaviour, forensic search — meeting the Camerawet, GDPR, and Police Act (K-Video), and shared GIS situational awareness across Federal Police, local zones, COS/OHC, and CGCCR for high-impact event coordination like NATO/EU summits in Brussels (K-Safety). EU cloud with GDPR/GBA and NIS2/CCB compliance. Demo adapted to the Belgian two-tier integrated police model.',
    },
  ]

  const articleHeadline = es
    ? 'Software de Seguridad Pública para Bélgica: Policía Federal, 188 Zones de Police, ASTRID 112, Camerawet y CCB/NIS2'
    : 'Public Safety Software for Belgium: Federal Police, 188 Zones de Police, ASTRID 112, Camerawet & CCB/NIS2'

  const articleDescription = es
    ? 'Plataforma unificada para la Policía Federal belga, 188 zonas de policía local y centros COS/OHC — despacho CAD integrado 112/101, gestión de cámaras urbanas y ANPR conforme a la Camerawet, y cumplimiento RGPD/GBA y NIS2/CCB.'
    : 'Unified platform for Belgian Federal Police, 188 local police zones, and COS/OHC dispatch centres — integrated 112/101 CAD dispatch, Camerawet-compliant urban surveillance and ANPR management, and GDPR/GBA and NIS2/CCB compliance.'

  const challenges = es ? [
    {
      icon: '🏛️',
      title: 'Sede OTAN/UE y modelo policial bicéfalo',
      desc: 'Coordinar la Policía Federal (especializada, CGSU) con 188 zonas de policía local en un modelo bicéfalo integrado, con requisitos de seguridad únicos para cumbres OTAN/UE y protección de instituciones internacionales en Bruselas.',
    },
    {
      icon: '📡',
      title: 'Integración ASTRID y despacho COS/OHC',
      desc: 'Integrar el despacho CAD con la red ASTRID TETRA (90,000+ usuarios) y los centros COS/OHC provinciales que unifican 112/100/101, con coordinación multiagencia policía-bomberos-ambulancias en tiempo real.',
    },
    {
      icon: '📷',
      title: 'Videovigilancia, ANPR y Camerawet',
      desc: 'Gestionar redes de cámaras urbanas y sistemas ANPR (Amberes tiene los más avanzados de Bélgica) conforme a la Camerawet — registro GBA, limitación de finalidad, retención máxima 30 días — e integración con el CAD de despacho.',
    },
    {
      icon: '🔒',
      title: 'RGPD/GBA, NIS2/CCB y cumplimiento policial',
      desc: 'Cumplir el RGPD belga (GBA), la Ley de Policía, la NIS2 belga (DNBS/CCB) y los requisitos de homologación ASTRID, con cloud EU, DPIA y controles de acceso diferenciados para los datos de investigación criminal.',
    },
  ] : [
    {
      icon: '🏛️',
      title: 'NATO/EU Headquarters and two-tier police model',
      desc: 'Coordinating the Federal Police (specialised, CGSU) with 188 local police zones in an integrated two-tier model, with unique security requirements for NATO/EU summits and protection of international institutions in Brussels.',
    },
    {
      icon: '📡',
      title: 'ASTRID integration and COS/OHC dispatch',
      desc: 'Integrating CAD dispatch with the ASTRID TETRA network (90,000+ users) and provincial COS/OHC centres unifying 112/100/101, with real-time multi-agency police-fire-ambulance coordination.',
    },
    {
      icon: '📷',
      title: 'Urban surveillance, ANPR and Camerawet',
      desc: 'Managing urban camera networks and ANPR systems (Antwerp has Belgium\'s most advanced) compliant with the Camerawet — GBA registration, purpose limitation, 30-day maximum retention — and integration with CAD dispatch.',
    },
    {
      icon: '🔒',
      title: 'GDPR/GBA, NIS2/CCB and police compliance',
      desc: 'Meeting Belgian GDPR (GBA), Police Act, Belgian NIS2 (DNBS/CCB), and ASTRID homologation requirements, with EU cloud, DPIAs, and differentiated access controls for criminal investigation data.',
    },
  ]

  const stats = es ? [
    { value: '188', label: 'Zonas de Policía Local' },
    { value: '90K+', label: 'Usuarios red ASTRID TETRA' },
    { value: '11.5M', label: 'Habitantes en 3 Regiones' },
    { value: '112/101', label: 'Despacho Integrado COS/OHC' },
  ] : [
    { value: '188', label: 'Local Police Zones' },
    { value: '90K+', label: 'ASTRID TETRA Network Users' },
    { value: '11.5M', label: 'People across 3 Regions' },
    { value: '112/101', label: 'Integrated COS/OHC Dispatch' },
  ]

  const title = es
    ? 'Software de Seguridad Pública para Bélgica'
    : 'Public Safety Software for Belgium'

  const subtitle = es
    ? 'Policía Federal · 188 Zones de Police · ASTRID 112 · Camerawet · RGPD/GBA · NIS2/CCB'
    : 'Federal Police · 188 Zones de Police · ASTRID 112 · Camerawet · GDPR/GBA · NIS2/CCB'

  const intro = es
    ? 'Bélgica — sede de la OTAN, las instituciones de la UE y 11.5 millones de habitantes en tres regiones lingüísticas — opera un modelo de seguridad pública integrado de dos niveles con la Policía Federal y 188 zonas de policía local. La red ASTRID TETRA conecta a todos los servicios de emergencia con más de 90,000 usuarios, mientras los centros COS/OHC provinciales unifican el despacho 112/100/101 en un sistema multiagencia. KabatOne proporciona la plataforma CAD, vídeo y GIS adaptada a la Camerawet belga, el RGPD/GBA y los requisitos de ciberseguridad NIS2/CCB.'
    : 'Belgium — home to NATO, EU institutions, and 11.5 million people across three linguistic regions — operates an integrated two-tier public safety model with the Federal Police and 188 local police zones. The ASTRID TETRA network connects all emergency services with over 90,000 active users, while provincial COS/OHC centres unify 112/100/101 dispatch in a multi-agency system. KabatOne delivers the CAD, video, and GIS platform adapted to the Belgian Camerawet, GDPR/GBA, and NIS2/CCB cybersecurity requirements.'

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
            {es ? 'Guía de Mercado · Bélgica' : 'Market Guide · Belgium'}
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
            {es ? 'Desafíos Clave del Mercado Belga' : 'Key Challenges in the Belgian Market'}
          </h2>
          <p style={{ color: '#64748b', marginBottom: 36, fontSize: 16 }}>
            {es
              ? 'Los requisitos operativos únicos que definen la seguridad pública en Bélgica.'
              : 'The unique operational requirements that define public safety in Belgium.'}
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
            {es ? 'Cómo KabatOne Apoya a los Servicios Belgas de Seguridad Pública' : 'How KabatOne Supports Belgian Public Safety Services'}
          </h2>
          <p style={{ color: '#64748b', marginBottom: 36, fontSize: 16 }}>
            {es
              ? 'Una plataforma unificada adaptada al modelo bicéfalo belga, la ASTRID TETRA y la Camerawet.'
              : 'One unified platform adapted to the Belgian two-tier model, ASTRID TETRA, and the Camerawet.'}
          </p>
          <div style={{ display: 'grid', gap: 20 }}>
            {[
              {
                product: 'K-Dispatch',
                color: '#eff6ff',
                border: '#bfdbfe',
                icon: '🚨',
                title: es ? 'Despacho CAD integrado 112/101 + ASTRID' : 'Integrated 112/101 CAD Dispatch + ASTRID',
                desc: es
                  ? 'CAD multiagencia compatible con los flujos de los centros COS/OHC provinciales — clasificación automática de incidentes, asignación de recursos policía/bomberos/ambulancias, integración con la red ASTRID TETRA e histórico GIS de incidentes. Soporte para el modelo policial bicéfalo belga (Federal + 188 zonas locales).'
                  : 'Multi-agency CAD compatible with provincial COS/OHC centre flows — automatic incident classification, police/fire/ambulance resource assignment, ASTRID TETRA network integration, and GIS incident history. Support for the Belgian two-tier police model (Federal + 188 local zones).',
              },
              {
                product: 'K-Video',
                color: '#f0fdf4',
                border: '#bbf7d0',
                icon: '📷',
                title: es ? 'Videovigilancia urbana, ANPR y cumplimiento Camerawet' : 'Urban Surveillance, ANPR and Camerawet Compliance',
                desc: es
                  ? 'Gestión unificada de cámaras urbanas y ANPR (al estilo del sistema de Amberes) con analítica IA — reconocimiento de matrículas, detección de comportamientos, búsqueda forense. Cumplimiento nativo de la Camerawet: registro GBA integrado, gestión de retención (máx. 30 días), limitación de finalidad y DPIA. RGPD/GBA y Ley de Policía belga.'
                  : 'Unified management of urban cameras and ANPR systems (like the Antwerp system) with AI analytics — licence plate recognition, behaviour detection, forensic search. Native Camerawet compliance: integrated GBA registration, retention management (max. 30 days), purpose limitation, and DPIA. GDPR/GBA and Belgian Police Act.',
              },
              {
                product: 'K-Safety',
                color: '#fefce8',
                border: '#fde68a',
                icon: '🗺️',
                title: es ? 'Conciencia situacional GIS para cumbres OTAN/UE y operaciones multiagencia' : 'GIS Situational Awareness for NATO/EU Summits and Multi-Agency Operations',
                desc: es
                  ? 'Conciencia situacional GIS compartida entre la Policía Federal, zonas de policía local, COS/OHC y el CGCCR — esencial para la coordinación en cumbres OTAN/UE en Bruselas y operaciones antiterroristas. Vista de mando unificada con posicionamiento en tiempo real de recursos, correlación de alertas ASTRID y gestión de perímetros de seguridad.'
                  : 'Shared GIS situational awareness across Federal Police, local police zones, COS/OHC, and CGCCR — essential for coordination at NATO/EU summits in Brussels and counter-terrorism operations. Unified command view with real-time resource positioning, ASTRID alert correlation, and security perimeter management.',
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
            {es ? 'Preguntas Frecuentes — Seguridad Pública en Bélgica' : 'FAQ — Public Safety in Belgium'}
          </h2>
          <p style={{ color: '#64748b', marginBottom: 36, fontSize: 16 }}>
            {es
              ? 'Respuestas a las preguntas más comunes sobre el mercado belga de seguridad pública.'
              : 'Answers to the most common questions about the Belgian public safety market.'}
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
              { href: es ? '/es/resources/public-safety-software-netherlands/' : '/resources/public-safety-software-netherlands/', label: es ? 'Países Bajos' : 'Netherlands' },
              { href: es ? '/es/resources/public-safety-software-germany/' : '/resources/public-safety-software-germany/', label: es ? 'Alemania' : 'Germany' },
              { href: es ? '/es/resources/public-safety-software-france/' : '/resources/public-safety-software-france/', label: es ? 'Francia' : 'France' },
              { href: es ? '/es/resources/public-safety-software-poland/' : '/resources/public-safety-software-poland/', label: es ? 'Polonia' : 'Poland' },
              { href: es ? '/es/resources/public-safety-software-sweden/' : '/resources/public-safety-software-sweden/', label: es ? 'Suecia' : 'Sweden' },
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
        h2={es ? 'Solicita una Demo para la Policía Federal belga, las Zones de Police o los Centros COS/OHC' : 'Request a Demo for Belgian Federal Police, Zones de Police, or COS/OHC Centres'}
        subtitle={es ? 'KabatOne integra el despacho CAD 112/101 compatible con los centros COS/OHC provinciales, la gestión de videovigilancia urbana y ANPR conforme a la Camerawet/RGPD, y la conciencia situacional GIS para operaciones multiagencia y cumbres OTAN/UE — con cloud EU, cumplimiento GBA y NIS2/CCB.' : 'KabatOne integrates 112/101 CAD dispatch compatible with provincial COS/OHC centres, Camerawet/GDPR-compliant urban surveillance and ANPR management, and GIS situational awareness for multi-agency operations and NATO/EU summits — with EU cloud, GBA, and NIS2/CCB compliance.'}
      />
      <Footer es={es} />
    </>
  )
}
