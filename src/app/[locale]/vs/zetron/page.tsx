import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { faqPageSchema, breadcrumbSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CadLeadForm from '@/components/CadLeadForm'
import { Link } from '@/i18n/navigation'

/* CAD plan item #16. Zetron appears in 13 of 16 AI answers to the Spanish GEO question
   "alternativas a Motorola para despacho de emergencias 911" (19 and 26 Oct 2026). Zetron
   facts are from its own product pages and Codan's 2021 acquisition release
   (research_notes/CAD inbound leads LATAM plan/zetron_sismed911_facts.md). The page never
   says Zetron lacks something the research could not confirm (cloud deployment, AI, TETRA);
   the contrast rests on verified facts and KabatOne's approved claims only. */

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('vsZetron', locale)
}

export default async function VsZetronPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#2563eb'

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es' : 'https://kabatone.com/' },
    { name: es ? 'Comparaciones' : 'Compare', url: es ? 'https://kabatone.com/es/vs' : 'https://kabatone.com/vs' },
    { name: 'KabatOne vs Zetron', url: es ? 'https://kabatone.com/es/vs/zetron' : 'https://kabatone.com/vs/zetron' },
  ]

  const rows = es ? [
    { c: 'Empresa', z: 'Fabricante estadounidense con sede en Redmond, Washington; parte de Codan Limited (Australia) desde 2021.', k: 'Plataforma de seguridad pública con sede en México, I+D en Israel y oficina en Estados Unidos.' },
    { c: 'Origen del producto', z: 'Consolas de despacho por radio (MAX Dispatch, ACOM), ampliadas a recepción de llamadas (MAX Call Taking) y CAD (MAX CAD).', k: 'Centro de mando: atención de llamadas y despacho en una sola plataforma, junto con video, GIS y tráfico.' },
    { c: 'Atención de llamadas 911', z: 'MAX Call Taking, con texto al 911; el fabricante declara cumplimiento con estándares NENA i3 según la región.', k: 'Integrada en K-Dispatch: la ubicación de quien llama se genera automáticamente.' },
    { c: 'CAD', z: 'MAX CAD, con CAD móvil, GIS y AVL.', k: 'K-Dispatch: recomendación de unidades, mapa en vivo, coordinación multiagencia.' },
    { c: 'Video y sensores en la llamada', z: 'No es el foco de su oferta publicada.', k: 'Video, lectura de placas y detección de disparos en el mapa del incidente.' },
    { c: 'Asistencia con IA', z: 'Sin información publicada encontrada.', k: 'AI Co-Pilot: transcripción en vivo, guía por escenario y recomendación de unidades; el operador decide.' },
    { c: 'Radio', z: 'Fortaleza principal: consolas para P25, DMR, NXDN, analógico y PTT sobre LTE.', k: 'Interoperabilidad con radio P25, TETRA y DMR.' },
    { c: 'Presencia en México', z: 'Se comercializa a través de distribuidores como Syscom.', k: 'Con la confianza del C5 CDMX; equipo en México; plataforma en español.' },
  ] : [
    { c: 'Company', z: 'US manufacturer headquartered in Redmond, Washington; part of Codan Limited (Australia) since 2021.', k: 'Public safety platform headquartered in Mexico, with R&D in Israel and a US office.' },
    { c: 'Product heritage', z: 'Radio dispatch consoles (MAX Dispatch, ACOM), extended to call handling (MAX Call Taking) and CAD (MAX CAD).', k: 'The command center: call handling and dispatch in one platform, with video, GIS and traffic.' },
    { c: '911 call handling', z: 'MAX Call Taking with text-to-911; the vendor states NENA i3 compliance depending on region.', k: 'Built into K-Dispatch: caller location is generated automatically.' },
    { c: 'CAD', z: 'MAX CAD, with mobile CAD, GIS and AVL.', k: 'K-Dispatch: unit recommendation, live map, multi-agency coordination.' },
    { c: 'Video and sensors on the call', z: 'Not the focus of its published offering.', k: 'Video, licence-plate reading and gunshot detection on the incident map.' },
    { c: 'AI assistance', z: 'No published information found.', k: 'AI Co-Pilot: live transcription, scenario guidance and unit recommendations; the operator decides.' },
    { c: 'Radio', z: 'Core strength: consoles for P25, DMR, NXDN, analog and LTE push-to-talk.', k: 'Interoperability with P25, TETRA and DMR radio.' },
    { c: 'Presence in Mexico', z: 'Sold through distributors such as Syscom.', k: 'Trusted by C5 CDMX; team in Mexico; Spanish-first platform.' },
  ]

  const faqs = es ? [
    { question: '¿Qué es Zetron?', answer: 'Zetron es un fabricante estadounidense de sistemas para centros de despacho, con sede en Redmond, Washington, y parte del grupo australiano Codan desde 2021. Es conocido por sus consolas de despacho por radio (MAX Dispatch y ACOM) y ofrece también recepción de llamadas 911 (MAX Call Taking) y CAD (MAX CAD).' },
    { question: '¿Cuál es la diferencia entre Zetron y KabatOne?', answer: 'Zetron nació en las consolas de radio y amplió su oferta a la recepción de llamadas y al CAD. KabatOne nació en el centro de mando: K-Dispatch une la atención de llamadas y el despacho con video, sensores y un AI Co-Pilot en el mismo mapa del incidente, y está construido en español para centros 911 y C5 de América Latina.' },
    { question: '¿Cuáles son las alternativas a Zetron para un centro 911 en México?', answer: 'Las opciones que suelen evaluarse son Motorola Solutions, Hexagon y KabatOne, además de integradores con plataformas propias. La decisión depende de si la prioridad es la consola de radio, la integración de video y sensores con el despacho, el cumplimiento de la Norma Técnica 9-1-1 o el soporte local.' },
    { question: '¿Se puede usar KabatOne junto con consolas de radio existentes?', answer: 'Sí. K-Dispatch está diseñado para conectarse con los sistemas de radio y registros que el centro ya opera, con interoperabilidad P25, TETRA y DMR, sin reemplazar todo de una vez.' },
  ] : [
    { question: 'What is Zetron?', answer: 'Zetron is a US maker of dispatch-center systems, headquartered in Redmond, Washington, and part of Australia’s Codan group since 2021. It is known for radio dispatch consoles (MAX Dispatch and ACOM) and also offers 911 call handling (MAX Call Taking) and CAD (MAX CAD).' },
    { question: 'What is the difference between Zetron and KabatOne?', answer: 'Zetron grew from radio consoles and extended into call handling and CAD. KabatOne grew from the command center: K-Dispatch brings call handling and dispatch together with video, sensors and an AI Co-Pilot on the same incident map, and is built Spanish-first for 911 centers and C5s in Latin America.' },
    { question: 'What are the alternatives to Zetron for a 911 center?', answer: 'Agencies commonly evaluate Motorola Solutions, Hexagon, CentralSquare and KabatOne. The choice depends on whether the priority is the radio console, video and sensor integration with dispatch, local standards such as Mexico’s Norma Técnica 9-1-1, or local support.' },
    { question: 'Can KabatOne work alongside existing radio consoles?', answer: 'Yes. K-Dispatch connects to the radio and records systems a center already runs, with P25, TETRA and DMR interoperability, without replacing everything at once.' },
  ]

  const h2 = { fontFamily: 'var(--font-barlow-condensed)', fontSize: 30, fontWeight: 700 } as const
  const wrap = { padding: '0 24px 48px', maxWidth: 960, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 14 } as const
  const card = { background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border, rgba(255,255,255,0.1))', borderRadius: 10, padding: '18px 20px' } as const

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <Nav />
      <main style={{ background: 'var(--bg)', color: 'var(--white)', fontFamily: 'var(--font-space-grotesk)' }}>
        <section style={{ padding: '80px 24px 40px', maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.35)', borderRadius: 6, padding: '4px 14px', fontSize: 12, color: '#60a5fa', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            {es ? 'Comparación' : 'Comparison'}
          </div>
          <h1 style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(36px, 6vw, 58px)', fontWeight: 700, lineHeight: 1.08, marginBottom: 20 }}>
            {es ? <>KabatOne vs Zetron: <span style={{ color: '#60a5fa' }}>alternativa para centros 911 y C5</span></> : <>KabatOne vs Zetron: <span style={{ color: '#60a5fa' }}>an alternative for 911 centers</span></>}
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 19px)', color: '#94a3b8', lineHeight: 1.7, maxWidth: 780 }}>
            {es
              ? 'Zetron es una opción conocida para consolas de despacho por radio. Si su centro 911 o C5 busca unir la atención de llamadas, el despacho, el video y los sensores en un mismo flujo, en español y con soporte en México, esta comparación muestra en qué se diferencian.'
              : 'Zetron is a well-known choice for radio dispatch consoles. If your 911 center wants call handling, dispatch, video and sensors in one workflow, this comparison shows where the two differ.'}
          </p>
        </section>

        <section style={wrap}>
          <h2 style={h2}>{es ? 'Comparación lado a lado' : 'Side-by-side comparison'}</h2>
          <div style={{ overflowX: 'auto', border: '1px solid var(--border, rgba(255,255,255,0.1))', borderRadius: 10 }}>
            <table style={{ borderCollapse: 'collapse', width: '100%', minWidth: 640, fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <th style={{ textAlign: 'left', padding: '12px 14px', color: '#94a3b8', width: '22%' }}>{es ? 'Aspecto' : 'Area'}</th>
                  <th style={{ textAlign: 'left', padding: '12px 14px', color: '#94a3b8' }}>Zetron</th>
                  <th style={{ textAlign: 'left', padding: '12px 14px', color: ACCENT === '#2563eb' ? '#60a5fa' : ACCENT }}>KabatOne</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.c} style={{ borderTop: '1px solid var(--border, rgba(255,255,255,0.1))' }}>
                    <td style={{ padding: '12px 14px', fontWeight: 600, verticalAlign: 'top' }}>{r.c}</td>
                    <td style={{ padding: '12px 14px', color: '#cbd5e1', verticalAlign: 'top', lineHeight: 1.55 }}>{r.z}</td>
                    <td style={{ padding: '12px 14px', color: '#e2e8f0', verticalAlign: 'top', lineHeight: 1.55 }}>{r.k}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: '#94a3b8' }}>
            {es
              ? 'Información de Zetron tomada de sus páginas de producto y del comunicado de adquisición de Codan (2021), revisada en noviembre de 2026. Si algo cambió, escríbanos y lo corregimos.'
              : "Zetron information from its product pages and Codan's 2021 acquisition release, reviewed November 2026. If something has changed, tell us and we will correct it."}
          </p>
        </section>

        <section style={wrap}>
          <h2 style={h2}>{es ? 'Cuándo conviene cada uno' : 'When each one fits'}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 14 }}>
            <div style={card}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Zetron</h3>
              <p style={{ color: '#cbd5e1', lineHeight: 1.65 }}>{es ? 'Cuando la prioridad es la consola de radio y el centro ya trabaja con su ecosistema de despacho por radio.' : 'When the priority is the radio console and the center already works within its radio dispatch ecosystem.'}</p>
            </div>
            <div style={card}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>KabatOne</h3>
              <p style={{ color: '#cbd5e1', lineHeight: 1.65 }}>{es ? 'Cuando el objetivo es que la llamada, el despacho, el video y los sensores estén en el mismo mapa, con asistencia de IA para el operador, despliegue en la nube, en sitio o híbrido, y soporte en México.' : 'When the goal is to put the call, the dispatch, video and sensors on one map, with AI assistance for the operator, cloud, on-premise or hybrid deployment, and local support in Latin America.'}</p>
            </div>
          </div>
        </section>

        <section style={wrap}>
          <h2 style={h2}>{es ? 'Preguntas frecuentes' : 'Frequently asked questions'}</h2>
          {faqs.map((f) => (
            <div key={f.question} style={card}>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{f.question}</h3>
              <p style={{ color: '#cbd5e1', lineHeight: 1.7 }}>{f.answer}</p>
            </div>
          ))}
        </section>

        <CadLeadForm es={es} source="vs-zetron" />

        <section style={{ padding: '0 24px 64px', maxWidth: 960, margin: '0 auto', display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: 14 }}>
          {[
            { href: '/vs/motorola', label: 'KabatOne vs Motorola' },
            { href: '/vs/hexagon', label: 'KabatOne vs Hexagon' },
            { href: '/vs/carbyne', label: 'KabatOne vs Carbyne' },
            { href: '/resources/norma-tecnica-911', label: es ? 'Norma Técnica 9-1-1: requisitos del CAD' : "Mexico's 911 standard: CAD requirements" },
            { href: '/k-dispatch', label: 'K-Dispatch' },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ color: '#60a5fa', textDecoration: 'none', borderBottom: '1px solid #60a5fa40' }}>{l.label}</Link>
          ))}
        </section>
      </main>
      <Footer es={es} />
    </>
  )
}
