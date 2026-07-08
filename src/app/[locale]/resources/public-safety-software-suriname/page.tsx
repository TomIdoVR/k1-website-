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
  return generatePageMetadata('publicSafetySoftwareSuriname', locale)
}

export default async function PublicSafetySoftwareSurinamePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-suriname/`
    : `${baseUrl}/resources/public-safety-software-suriname/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Publica — Surinam' : 'Public Safety Software — Suriname', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: "¿Cual es la estructura de seguridad publica en Surinam?",
      answer: "Surinam organiza su seguridad en el Korps Politie Suriname (KPS) con ~2,500 efectivos en 10 distritos, el Nationaal Leger (NL — ejercito nacional) con ~2,000 efectivos bajo el Ministerie van Defensie, el Korps Brandweer Suriname (bomberos) y la Kustwacht Suriname (Guardia Costera) para la ZEE de 127,000 km2. Los numeros de emergencia son 115 (policia), 110 (bomberos) y 113 (ambulancia). Surinam carece de un numero 911 unificado — los servicios de emergencia operan en numeros separados. El idioma oficial es el neerlandes; el sranan tongo es el idioma vehicular entre las etnias.",
    },
    {
      question: "¿Como se financia la tecnologia de seguridad publica en Surinam?",
      answer: "Las adquisiciones se rigen por la Wet Financieel Beheer 2015 y el portal e-GP (Government Procurement) del Ministerie van Financien. El Ministerio del Interior (Ministerie van Binnenlandse Zaken) y el Ministerio de Defensa tienen presupuestos separados. Los Paises Bajos (cooperacion neerlandesa), el BID, el PNUD y la cooperacion de los EE.UU. (INL/DEA) financian proyectos de seguridad ciudadana. Surinam recibe cooperacion de la Union Europea para el control del trafico de cocaina desde el puerto de Paramaribo hacia Europa.",
    },
    {
      question: "¿Por que Surinam es un corredor clave del narcotrafico hacia Europa?",
      answer: "Surinam es uno de los principales puntos de transito de la cocaina de Sudamerica hacia Europa, debido a su posicion geografica (frontera con Brasil y Guyana) y los lazos historicos con los Paises Bajos. El Puerto de Paramaribo y el Aeropuerto Internacional Johan Adolf Pengel (PBM) son puntos de salida de cargamentos de cocaina camuflados en contenedores de exportacion de banano, arroz y madera. Europol, la DEA, la Guardia Costera neerlandesa y el KLPD colaboran con el KPS en operaciones de interdiccion. Cualquier plataforma de seguridad publica debe integrar el video portuario y aeroportuario con el despacho policial.",
    },
    {
      question: "¿Como puede KabatOne integrarse con las camaras CCTV existentes en Surinam?",
      answer: "KabatOne integra cualquier camara ONVIF/RTSP sin reemplazo de hardware. Las camaras del sistema de videovigilancia de Paramaribo (KPS y Ministerie van Binnenlandse Zaken), las camaras del Puerto de Paramaribo (NV Haven Suriname), el Aeropuerto Internacional Johan Adolf Pengel (PBM), las instalaciones de Staatsolie Maatschappij Suriname (refineria y terminales de petroleo en Saramacca) y las operaciones mineras de Newmont Merian y Rosebel (IAMGOLD) se conectan directamente sin cambiar infraestructura.",
    },
    {
      question: "¿Como puede KabatOne apoyar el control fronterizo de Surinam con Brasil, Guyana y la Guyana Francesa?",
      answer: "Surinam comparte fronteras terrestres con Brasil (595 km — Rio Marowijne/Maroni), Guyana (600 km — Rio Corentijn) y la Guyana Francesa (520 km). Las fronteras fluviales son los principales vectores de transito de cocaina, oro ilegal y migrantes irregulares. KabatOne integra camaras en los puestos fronterizos fluviales con el GIS operacional del KPS, permitiendo que los officiales vean en tiempo real que embarcaciones y vehiculos cruzan los rios fronterizos y despachen unidades de respuesta desde el mismo mapa operativo.",
    },
    {
      question: "¿Como se alinea KabatOne con el marco de adquisiciones de Surinam (Wet Financieel Beheer)?",
      answer: "KabatOne opera a traves de distribuidores e integradores locales conforme a la Wet Financieel Beheer 2015 y el portal e-GP del Ministerie van Financien. La arquitectura modular permite licitar por componente (K-Video, K-Dispatch, K-Safety) o como plataforma unificada, adaptandose a los presupuestos del Ministerie van Binnenlandse Zaken, los distritos y las empresas publicas (Staatsolie, SLM — Surinam Airways). Surinam no cuenta con una ley de proteccion de datos equivalente al GDPR — KabatOne provee controles de acceso robustos para el manejo de datos de video y biometria.",
    },
  ] : [
    {
      question: "What is Suriname's public safety structure?",
      answer: "Suriname organizes its security around the Korps Politie Suriname (KPS) with ~2,500 officers across 10 districts, the Nationaal Leger (NL — national army) with ~2,000 personnel under the Ministerie van Defensie, the Korps Brandweer Suriname (fire department), and the Kustwacht Suriname (Coast Guard) covering a 127,000 km2 EEZ. Emergency numbers are 115 (police), 110 (fire), and 113 (ambulance). Suriname lacks a unified 911 number — emergency services operate on separate numbers. The official language is Dutch; Sranan Tongo is the vehicular language among ethnic groups.",
    },
    {
      question: "How is public safety technology funded in Suriname?",
      answer: "Procurement is governed by the Wet Financieel Beheer 2015 and the e-GP (Government Procurement) portal of the Ministerie van Financien. The Ministry of Interior (Ministerie van Binnenlandse Zaken) and Ministry of Defense have separate budgets. The Netherlands (Dutch cooperation), IDB, UNDP, and US cooperation (INL/DEA) fund citizen security projects. Suriname receives EU cooperation for controlling cocaine trafficking from the port of Paramaribo to Europe.",
    },
    {
      question: "Why is Suriname a key narco-trafficking corridor to Europe?",
      answer: "Suriname is one of the main transit points for South American cocaine to Europe, due to its geographic position (border with Brazil and Guyana) and historical ties with the Netherlands. The Port of Paramaribo and Johan Adolf Pengel International Airport (PBM) are departure points for cocaine shipments camouflaged in export containers of bananas, rice, and timber. Europol, DEA, Dutch Coast Guard, and KLPD collaborate with KPS in interdiction operations. Any public safety platform must integrate port and airport video with police dispatch.",
    },
    {
      question: "How can KabatOne integrate with existing CCTV infrastructure in Suriname?",
      answer: "KabatOne integrates any ONVIF/RTSP camera without hardware replacement. Cameras from Paramaribo's video surveillance system (KPS and Ministerie van Binnenlandse Zaken), Port of Paramaribo cameras (NV Haven Suriname), Johan Adolf Pengel International Airport (PBM), Staatsolie Maatschappij Suriname facilities (refinery and oil terminals in Saramacca), and Newmont Merian and Rosebel (IAMGOLD) mining operations connect directly without changing infrastructure.",
    },
    {
      question: "How can KabatOne support Suriname's border control with Brazil, Guyana, and French Guiana?",
      answer: "Suriname shares land borders with Brazil (595 km — Marowijne/Maroni River), Guyana (600 km — Corentijn River), and French Guiana (520 km). River borders are the main transit vectors for cocaine, illegal gold, and irregular migrants. KabatOne integrates cameras at river border posts with the KPS operational GIS, allowing officers to see in real time which boats and vehicles cross the border rivers and dispatch response units from the same operational map.",
    },
    {
      question: "How does KabatOne align with Suriname's procurement framework (Wet Financieel Beheer)?",
      answer: "KabatOne operates through local distributors and integrators under the Wet Financieel Beheer 2015 and the Ministerie van Financien e-GP portal. The modular architecture allows tendering by component (K-Video, K-Dispatch, K-Safety) or as a unified platform, adapting to Ministerie van Binnenlandse Zaken, district, and state enterprise (Staatsolie, SLM — Surinam Airways) budgets. Suriname does not have a GDPR-equivalent data protection law — KabatOne provides robust access controls for video and biometric data handling.",
    },
  ]

  const artSchema = articleSchema(
    es ? 'Software de Seguridad Publica para Surinam — KPS, Narcotrafico Puerto Paramaribo y Fronteras Fluviales' : 'Public Safety Software for Suriname: KPS, Port Paramaribo Narco-Trafficking, and River Borders',
    es
      ? 'Plataforma unificada de seguridad publica para Surinam — KPS, narcotrafico Puerto de Paramaribo y aeropuerto PBM, fronteras fluviales con Brasil y Guyana, y Staatsolie.'
      : 'Unified public safety platform for Suriname — KPS, Port Paramaribo and PBM airport narco-trafficking, river borders with Brazil and Guyana, and Staatsolie oil infrastructure.',
    pageUrl,
    '2026-07-07'
  )

  const comparisonRows = es ? [
    { feature: 'Video', fragmented: 'Camaras del KPS y el Ministerie van Binnenlandse Zaken sin VMS compartido entre los 10 distritos y la Guardia Costera', unified: 'VMS unificado con todas las camaras buscables por distrito, municipio y tipo de evento' },
    { feature: 'Control portuario', fragmented: 'Puerto de Paramaribo (NV Haven) sin integracion de video con el KPS y la Aduana para deteccion de contenedores sospechosos', unified: 'Video portuario + Aduana + LPR vehiculos en un solo mapa operativo con despacho CAD' },
    { feature: 'Control fronterizo fluvial', fragmented: 'Puestos fronterizos en los rios Marowijne/Corentijn sin camara integrada con el GIS del KPS', unified: 'Camaras en puestos fluviales + GIS en tiempo real del KPS para despacho de respuesta inmediata' },
    { feature: 'Aeropuerto PBM', fragmented: 'Camaras del aeropuerto Johan Adolf Pengel (PBM) sin integracion con el despacho policial del KPS', unified: 'Video PBM + KPS + Aduana en un solo mapa con alertas automaticas ante deteccion de comportamiento sospechoso' },
    { feature: 'Infraestructura petroleo (Staatsolie)', fragmented: 'Camaras de la refineria y terminales de Staatsolie en Saramacca sin integracion con el KPS', unified: 'Video Staatsolie + KPS en un panel unificado con alertas de intrusion y despacho automatico' },
    { feature: 'Despacho de emergencias', fragmented: 'Tres numeros de emergencia separados (115/110/113) sin integracion CAD entre el KPS, Bomberos y ambulancias', unified: 'Plataforma CAD unificada para el KPS, Bomberos y servicios medicos con registro unico de incidentes' },
  ] : [
    { feature: 'Video', fragmented: 'KPS and Ministerie van Binnenlandse Zaken cameras without shared VMS across 10 districts and Coast Guard', unified: 'Unified VMS with all cameras searchable by district, municipality, and event type' },
    { feature: 'Port control', fragmented: 'Port of Paramaribo (NV Haven) without video integration with KPS and Customs for suspicious container detection', unified: 'Port video + Customs + LPR vehicles on one operational map with CAD dispatch' },
    { feature: 'River border control', fragmented: 'Border posts on Marowijne/Corentijn rivers without camera integrated with KPS GIS', unified: 'River post cameras + KPS real-time GIS for immediate response dispatch' },
    { feature: 'PBM Airport', fragmented: 'Johan Adolf Pengel Airport (PBM) cameras without integration with KPS police dispatch', unified: 'PBM video + KPS + Customs on one map with automatic alerts on suspicious behavior detection' },
    { feature: 'Oil infrastructure (Staatsolie)', fragmented: 'Staatsolie refinery and terminal cameras in Saramacca without KPS integration', unified: 'Staatsolie video + KPS on a unified panel with intrusion alerts and automatic dispatch' },
    { feature: 'Emergency dispatch', fragmented: 'Three separate emergency numbers (115/110/113) without CAD integration between KPS, Fire, and ambulances', unified: 'Unified CAD platform for KPS, Fire, and medical services with single incident record' },
  ]

  const workflowSteps = es ? [
    { n: '01', title: 'Video unificado', text: 'Todas las camaras — KPS en Paramaribo y los 10 distritos, Puerto de Paramaribo (NV Haven Suriname), aeropuerto Johan Adolf Pengel (PBM), refineria y terminales de Staatsolie en Saramacca, operaciones mineras Newmont Merian y Rosebel, puestos fronterizos fluviales en los rios Marowijne y Corentijn — en una sola interfaz VMS con busqueda por distrito y tipo de evento.' },
    { n: '02', title: 'Coordinacion KPS y fronteras', text: 'Recepcion 115, clasificacion de incidentes y asignacion de unidades desde una sola plataforma CAD. Registro unico compartido entre los 10 distritos del KPS, la Kustwacht Suriname, Bomberos y ambulancias del Ministerie van Volksgezondheid.' },
    { n: '03', title: 'GIS en tiempo real', text: 'Posiciones de unidades del KPS, Nationaal Leger y Kustwacht en un solo mapa operativo. Vista conjunta entre la sede del KPS en Paramaribo y el Ministerie van Binnenlandse Zaken para coordinacion de operaciones de interdiccion portuaria y fronteriza.' },
    { n: '04', title: 'Control portuario y aeroportuario antidroga', text: 'Video del Puerto de Paramaribo (NV Haven) y el aeropuerto PBM integrado con alertas del KPS y la Aduana. LPR en los accesos al puerto y el aeropuerto para rastreo de vehiculos en tiempo real. Coordinacion directa con operaciones de Europol/DEA/Guardia Costera neerlandesa.' },
    { n: '05', title: 'Infraestructura critica Staatsolie y mineria', text: 'Video de las instalaciones de Staatsolie (refineria Saramacca, terminales Costa Norte) y las minas Newmont Merian y Rosebel (IAMGOLD) integrado con el KPS. Alertas de intrusion automaticas y despacho de unidades de respuesta desde el mapa GIS operacional.' },
  ] : [
    { n: '01', title: 'Unified video', text: 'All cameras — KPS in Paramaribo and all 10 districts, Port of Paramaribo (NV Haven Suriname), Johan Adolf Pengel Airport (PBM), Staatsolie refinery and terminals in Saramacca, Newmont Merian and Rosebel (IAMGOLD) mining operations, river border posts on Marowijne and Corentijn rivers — on one VMS interface with search by district and event type.' },
    { n: '02', title: 'KPS and border coordination', text: 'Single 115 intake, incident classification, and unit assignment from one CAD platform. Shared record bridging all 10 KPS districts, Kustwacht Suriname, Fire Department, and Ministerie van Volksgezondheid ambulances.' },
    { n: '03', title: 'Real-time GIS', text: 'KPS, Nationaal Leger, and Kustwacht unit positions on one shared operational map — joint view between KPS headquarters in Paramaribo and the Ministerie van Binnenlandse Zaken for port and border interdiction operation coordination.' },
    { n: '04', title: 'Anti-drug port and airport control', text: 'Port of Paramaribo (NV Haven) and PBM airport video integrated with KPS and Customs alerts. LPR at port and airport access points for real-time vehicle tracking. Direct coordination with Europol/DEA/Dutch Coast Guard operations.' },
    { n: '05', title: 'Staatsolie and mining critical infrastructure', text: 'Staatsolie facility video (Saramacca refinery, Northern Coast terminals) and Newmont Merian and Rosebel (IAMGOLD) mine video integrated with KPS. Automatic intrusion alerts and response unit dispatch from the operational GIS map.' },
  ]

  const challengeCards = es ? [
    { icon: '⚓', title: 'Puerto de Paramaribo: corredor clave de cocaina hacia Europa sin VMS integrado con el KPS', text: 'El Puerto de Paramaribo (NV Haven Suriname) es el principal punto de exportacion de cocaina desde Sudamerica hacia Europa a traves de contenedores de banano, arroz y madera. La cooperacion de Europol, DEA y la Guardia Costera neerlandesa es activa, pero el KPS (Korps Politie Suriname) y la Aduana no cuentan con un VMS compartido que integre el video portuario con el despacho policial, lo que obliga a coordinar por radio y telefono en lugar de desde un mapa operacional unificado.' },
    { icon: '🌿', title: 'Fronteras fluviales con Brasil, Guyana y la Guyana Francesa: vectores de cocaina y oro ilegal', text: 'Surinam comparte 1,715 km de fronteras fluviales con Brasil (Rio Marowijne), Guyana (Rio Corentijn) y la Guyana Francesa — todas son rutas activas de trafico de cocaina, garimpo ilegal (mineria de oro artesanal) y migrantes irregulares. Los puestos fronterizos fluviales del KPS operan con comunicacion por radio sin camara integrada con el GIS central, lo que limita la visibilidad en tiempo real de las embarcaciones que cruzan los rios.' },
    { icon: '🛢️', title: 'Infraestructura critica Staatsolie y mineria de oro sin integracion con el KPS', text: 'Staatsolie Maatschappij Suriname es la empresa petrolera estatal con una refineria en Saramacca y terminales en la Costa Norte. Las minas Newmont Merian (~200 Koz/ano de oro) y Rosebel (IAMGOLD — ~160 Koz/ano) son la principal fuente de divisas del pais. Estas instalaciones operan sistemas de seguridad propietarios sin integracion con el KPS, lo que significa que un incidente en la refineria o una mina requiere coordinacion manual en lugar de despacho automatico basado en video.' },
    { icon: '📞', title: 'Tres numeros de emergencia separados sin integracion CAD entre KPS, Bomberos y ambulancias', text: 'Surinam carece de un numero 911 unificado: el KPS atiende el 115, los Bomberos el 110 y las ambulancias el 113. Cada servicio opera con su propio sistema de despacho sin integracion CAD, lo que genera retrasos en la coordinacion de incidentes que requieren respuesta multi-agencia — como accidentes de trafico en la Anton de Kom Universiteit, incendios en el barrio de Zorg en Hoop o emergencias en el puerto.' },
  ] : [
    { icon: '⚓', title: 'Port of Paramaribo: key cocaine corridor to Europe without VMS integrated with KPS', text: "The Port of Paramaribo (NV Haven Suriname) is the main cocaine export point from South America to Europe through banana, rice, and timber containers. Europol, DEA, and Dutch Coast Guard cooperation is active, but KPS (Korps Politie Suriname) and Customs lack a shared VMS integrating port video with police dispatch, forcing radio and phone coordination instead of a unified operational map." },
    { icon: '🌿', title: 'River borders with Brazil, Guyana, and French Guiana: cocaine and illegal gold vectors', text: 'Suriname shares 1,715 km of river borders with Brazil (Marowijne River), Guyana (Corentijn River), and French Guiana — all active routes for cocaine trafficking, illegal garimpo (artisanal gold mining), and irregular migrants. KPS river border posts operate with radio communication without cameras integrated with the central GIS, limiting real-time visibility of vessels crossing the rivers.' },
    { icon: '🛢️', title: 'Staatsolie and gold mining critical infrastructure without KPS integration', text: 'Staatsolie Maatschappij Suriname is the state oil company with a refinery in Saramacca and terminals on the Northern Coast. Newmont Merian mine (~200 Koz/year of gold) and Rosebel (IAMGOLD — ~160 Koz/year) are the country\'s main source of foreign exchange. These facilities operate proprietary security systems without KPS integration, meaning an incident at the refinery or a mine requires manual coordination instead of video-based automatic dispatch.' },
    { icon: '📞', title: 'Three separate emergency numbers without CAD integration between KPS, Fire, and ambulances', text: 'Suriname lacks a unified 911 number: KPS handles 115, Fire handles 110, and ambulances handle 113. Each service operates its own dispatch system without CAD integration, causing delays in multi-agency incident coordination — such as traffic accidents near Anton de Kom University, fires in Zorg en Hoop neighborhood, or port emergencies.' },
  ]

  return (
    <>
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(artSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        <div style={{
          maxWidth: '860px', margin: '0 auto', padding: '20px 40px 0',
          display: 'flex', alignItems: 'center', gap: '8px',
          fontFamily: 'DM Mono, monospace', fontSize: '11px',
          letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)',
        }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
            {es ? 'Inicio' : 'Home'}
          </Link>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: 'var(--dim)' }}>{es ? 'Recursos' : 'Resources'}</span>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: ACCENT }}>
            {es ? 'Software de Seguridad Publica — Surinam' : 'Public Safety Software — Suriname'}
          </span>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 40px 0' }}>
          <div style={{
            display: 'inline-block', padding: '4px 12px', borderRadius: '4px',
            background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)',
            fontFamily: 'DM Mono, monospace', fontSize: '11px', letterSpacing: '0.14em',
            textTransform: 'uppercase', color: ACCENT, marginBottom: '20px',
          }}>
            {es ? 'Guia de Mercado' : 'Market Guide'}
          </div>
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.05,
            color: 'var(--white)', margin: '0 0 20px',
          }}>
            {es
              ? 'Software de Seguridad Publica para Surinam'
              : 'Public Safety Software for Suriname'}
          </h1>
          <p style={{
            fontFamily: 'Space Grotesk, sans-serif', fontSize: '17px', lineHeight: 1.7,
            color: 'var(--dim)', maxWidth: '720px', margin: '0 0 32px',
          }}>
            {es
              ? 'Surinam opera con ~2,500 efectivos del KPS en 10 distritos y enfrenta el desafio del narcotrafico portuario hacia Europa. KabatOne unifica videovigilancia, despacho CAD, GIS operacional y control fronterizo fluvial en una sola plataforma — desde el Puerto de Paramaribo hasta los rios Marowijne y Corentijn.'
              : 'Suriname operates with ~2,500 KPS officers across 10 districts and faces the challenge of port-based narco-trafficking to Europe. KabatOne unifies video surveillance, CAD dispatch, operational GIS, and river border control on one platform — from the Port of Paramaribo to the Marowijne and Corentijn rivers.'}
          </p>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 40px 0' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: 'clamp(22px, 3vw, 30px)', color: 'var(--white)', margin: '0 0 24px',
          }}>
            {es ? 'Desafios Operativos en Surinam' : 'Operational Challenges in Suriname'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '16px' }}>
            {challengeCards.map((c, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '8px', padding: '24px',
              }}>
                <div style={{ fontSize: '28px', marginBottom: '10px' }}>{c.icon}</div>
                <h3 style={{
                  fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600,
                  fontSize: '17px', color: 'var(--white)', margin: '0 0 10px',
                }}>{c.title}</h3>
                <p style={{
                  fontFamily: 'Space Grotesk, sans-serif', fontSize: '14px',
                  lineHeight: 1.65, color: 'var(--dim)', margin: 0,
                }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 40px 0' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: 'clamp(22px, 3vw, 30px)', color: 'var(--white)', margin: '0 0 20px',
          }}>
            {es ? 'Fragmentado vs. Unificado' : 'Fragmented vs. Unified'}
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Space Grotesk, sans-serif', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ textAlign: 'left', padding: '10px 12px', color: 'var(--dim)', fontWeight: 500 }}>{es ? 'Capacidad' : 'Capability'}</th>
                  <th style={{ textAlign: 'left', padding: '10px 12px', color: '#ef4444', fontWeight: 500 }}>{es ? 'Sistemas fragmentados' : 'Fragmented systems'}</th>
                  <th style={{ textAlign: 'left', padding: '10px 12px', color: '#22c55e', fontWeight: 500 }}>KabatOne</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent' }}>
                    <td style={{ padding: '12px', color: 'var(--white)', fontWeight: 500 }}>{row.feature}</td>
                    <td style={{ padding: '12px', color: 'var(--dim)' }}>{row.fragmented}</td>
                    <td style={{ padding: '12px', color: 'var(--white)' }}>{row.unified}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 40px 0' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: 'clamp(22px, 3vw, 30px)', color: 'var(--white)', margin: '0 0 28px',
          }}>
            {es ? 'Como Funciona KabatOne en Surinam' : 'How KabatOne Works in Suriname'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {workflowSteps.map((step, i) => (
              <div key={i} style={{
                display: 'flex', gap: '20px', alignItems: 'flex-start',
                background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '8px', padding: '20px 24px',
              }}>
                <span style={{
                  fontFamily: 'DM Mono, monospace', fontSize: '12px', color: ACCENT,
                  letterSpacing: '0.1em', minWidth: '32px', paddingTop: '2px',
                }}>{step.n}</span>
                <div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, fontSize: '17px', color: 'var(--white)', marginBottom: '6px' }}>{step.title}</div>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '14px', lineHeight: 1.65, color: 'var(--dim)' }}>{step.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '48px 40px 0' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: 'clamp(22px, 3vw, 30px)', color: 'var(--white)', margin: '0 0 28px',
          }}>
            {es ? 'Preguntas Frecuentes — Surinam' : 'FAQ — Suriname'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '8px', padding: '20px 24px',
              }}>
                <h3 style={{
                  fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600,
                  fontSize: '15px', color: 'var(--white)', margin: '0 0 8px',
                }}>{faq.question}</h3>
                <p style={{
                  fontFamily: 'Space Grotesk, sans-serif', fontSize: '14px',
                  lineHeight: 1.7, color: 'var(--dim)', margin: 0,
                }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '40px 40px 0' }}>
          <h2 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            fontSize: '20px', color: 'var(--white)', margin: '0 0 16px',
          }}>
            {es ? 'Recursos Relacionados' : 'Related Resources'}
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[
              { href: '/resources/public-safety-software-guyana', label: 'Guyana' },
              { href: '/resources/public-safety-software-venezuela', label: es ? 'Venezuela' : 'Venezuela' },
              { href: '/resources/public-safety-software-brazil', label: es ? 'Brasil' : 'Brazil' },
              { href: '/k-safety', label: 'K-Safety' },
              { href: '/k-video', label: 'K-Video' },
              { href: '/k-dispatch', label: 'K-Dispatch' },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{
                display: 'inline-block', padding: '7px 14px',
                background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)',
                borderRadius: '5px', fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '13px', color: ACCENT, textDecoration: 'none',
              }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '72px' }}>
          <CTASection
            es={es}
            h2={es ? 'Conozca KabatOne para Surinam' : 'See KabatOne for Suriname'}
            subtitle={es
              ? 'KPS, control portuario antidroga y fronteras fluviales en una sola plataforma. Solicite una demostracion con escenarios reales.'
              : 'KPS, anti-drug port control, and river borders on one platform. Request a demo with real scenarios.'}
          />
        </div>

        <Footer es={es} />
      </div>
    </>
  )
}
