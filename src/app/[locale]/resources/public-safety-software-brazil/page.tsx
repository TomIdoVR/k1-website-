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
  return generatePageMetadata('publicSafetySoftwareBrazil', locale)
}

export default async function PublicSafetySoftwareBrazilPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#3b82f6'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-brazil/`
    : `${baseUrl}/resources/public-safety-software-brazil/`

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: es ? 'Software de Seguridad Publica — Brasil' : 'Public Safety Software — Brazil', url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Cuales son los numeros de emergencia en Brasil?',
      answer: 'Brasil opera numeros de emergencia separados por servicio: 190 (Policia Militar — PM), 192 (SAMU — Servicio de Atencion Medica de Urgencia), 193 (Bombeiros Militares) y 191 (PRF — Policia Rodoviaria Federal para carreteras federales). Los CIOPS (Centros Integrados de Operaciones de Seguridad Publica) en los grandes estados unifican la recepcion de estas llamadas en una sola plataforma de despacho, integrando PM, Bombeiros y SAMU en un solo centro operativo.',
    },
    {
      question: '¿Como financia Brasil tecnologia de seguridad publica estadual y municipal?',
      answer: 'El financiamiento principal es el FNSP (Fondo Nacional de Seguridad Publica), administrado por el SENASP (Secretaria Nacional de Seguridad Publica) del Ministerio de Justicia y Seguridad Publica. Los estados gestionan sus propios presupuestos de seguridad a traves de las SSP (Secretarias de Seguridad Publica). Las licitaciones usan el Portal de Compras del Gobierno Federal (comprasnet.gov.br) para contratos federales. Sao Paulo usa el BEC (Bolsa Eletonica de Compras) para el nivel estatal. Las licitaciones siguen la Lei de Licitacoes (Lei 14.133/2021).',
    },
    {
      question: '¿Que son los CIOPS y como funcionan en Brasil?',
      answer: 'Los CIOPS (Centros Integrados de Operaciones de Seguridad Publica) son centros de comando que unifican la Policia Militar, los Bombeiros y el SAMU en un solo espacio operativo. Estados como Bahia, Minas Gerais y Rio de Janeiro han desplegado CIOPS consolidados. Una plataforma como KabatOne se integra directamente con la infraestructura ONVIF/RTSP existente del CIOPS y agrega video analytics, GIS en tiempo real y despacho CAD unificado sobre las camaras ya instaladas, sin reemplazar hardware.',
    },
    {
      question: '¿Puede KabatOne integrarse con la infraestructura de camaras existente en Brasil?',
      answer: 'Si. KabatOne integra cualquier camara ONVIF/RTSP sin reemplazo de hardware. Las camaras municipales de Sao Paulo (CCTV e Detecta), Rio de Janeiro (COR — Centro de Operacoes), Curitiba, Porto Alegre y Belo Horizonte se conectan directamente a la plataforma. Los sistemas LPR de autopistas estaduales, paneles de control de acceso y sensores IoT existentes tambien se integran sin cambiar infraestructura.',
    },
    {
      question: '¿Como apoya KabatOne la coordinacion entre PM, PC, Bombeiros y SAMU en Brasil?',
      answer: 'K-Safety provee un mapa GIS compartido donde los operadores del CIOPS ven posiciones de unidades de PM, Bombeiros y SAMU, incidentes activos y feeds de video en tiempo real. K-Dispatch unifica la recepcion del 190/192/193 en un solo registro de incidente, y K-Video centraliza camaras municipales y privadas compartidas en un VMS con busqueda por zona, fecha y tipo de evento. Cada agencia mantiene su flujo de trabajo interno mientras comparte contexto operativo con las demas.',
    },
    {
      question: '¿Como se alinea KabatOne con las licitaciones bajo la Lei 14.133/2021 en Brasil?',
      answer: 'KabatOne se comercializa a traves de distribuidores e integradores locales registrados en el Portal de Compras (comprasnet.gov.br) y en plataformas estaduales como el BEC de Sao Paulo. La arquitectura modular permite licitar por componente (K-Video, K-Dispatch, K-Safety) o como plataforma unificada, adaptandose a los marcos presupuestarios de los FNSP estaduales y a los requisitos de los pliegos bajo la nueva Lei de Licitacoes.',
    },
  ] : [
    {
      question: 'What are the emergency numbers in Brazil?',
      answer: 'Brazil operates separate emergency numbers by service: 190 (Polícia Militar — PM), 192 (SAMU — Serviço de Atendimento Móvel de Urgência), 193 (Bombeiros Militares), and 191 (PRF — Polícia Rodoviária Federal for federal highways). CIOPS (Centros Integrados de Operações de Segurança Pública) in major states unify intake for these calls into a single dispatch platform, integrating PM, Bombeiros, and SAMU into one operational center.',
    },
    {
      question: 'How does Brazil fund public safety technology at the state and municipal level?',
      answer: 'The primary funding mechanism is the FNSP (Fundo Nacional de Segurança Pública), administered by SENASP (Secretaria Nacional de Segurança Pública) under the Ministry of Justice and Public Security. States manage their own security budgets through SSP (Secretarias de Segurança Pública). Contracts are tendered through the Portal de Compras (comprasnet.gov.br) at the federal level; São Paulo uses the BEC (Bolsa Eletrônica de Compras) for state-level procurement. All tenders follow the Lei de Licitações (Lei 14.133/2021).',
    },
    {
      question: 'What are CIOPS centers and how do they work in Brazil?',
      answer: 'CIOPS (Centros Integrados de Operações de Segurança Pública) are command centers that unify Polícia Militar, Bombeiros, and SAMU in one operational space. States like Bahia, Minas Gerais, and Rio de Janeiro have deployed consolidated CIOPS. A platform like KabatOne integrates directly with existing ONVIF/RTSP infrastructure inside CIOPS centers and adds video analytics, real-time GIS, and unified CAD dispatch on top of already-installed cameras — without hardware replacement.',
    },
    {
      question: 'Can KabatOne integrate with existing camera infrastructure in Brazil?',
      answer: "Yes. KabatOne integrates any ONVIF/RTSP camera without hardware replacement. Municipal cameras from São Paulo (CCTV and Detecta), Rio de Janeiro (COR — Centro de Operações), Curitiba, Porto Alegre, and Belo Horizonte connect directly to the platform. State highway LPR systems, access control panels, and existing IoT sensors also integrate without infrastructure changes.",
    },
    {
      question: 'How does KabatOne support coordination between PM, PC, Bombeiros, and SAMU in Brazil?',
      answer: 'K-Safety provides a shared GIS map where CIOPS operators see real-time positions of PM, Bombeiros, and SAMU units, active incidents, and live video feeds. K-Dispatch unifies 190/192/193 intake into one incident record, and K-Video centralizes municipal and privately shared cameras in a searchable VMS with zone, date, and event-type search. Each agency maintains its internal workflow while sharing operational context with others.',
    },
    {
      question: 'How does KabatOne align with public procurement under Lei 14.133/2021 in Brazil?',
      answer: 'KabatOne is marketed through local distributors and integrators registered on the Portal de Compras (comprasnet.gov.br) and state platforms like São Paulo\'s BEC. The modular architecture allows tendering by component (K-Video, K-Dispatch, K-Safety) or as a unified platform, adapting to state FNSP budget frameworks and the requirements of tenders under the new Lei de Licitações.',
    },
  ]

  const artSchema = articleSchema(
    es ? 'Software de Seguridad Publica para Municipios y Estados de Brasil' : 'Public Safety Software for Brazil: Government Guide',
    es
      ? 'Software de seguridad publica para estados y municipios brasilenhos — conectando videovigilancia, despacho de emergencias, GIS y gestion de incidentes en una sola plataforma operativa.'
      : 'Public safety software for Brazilian states and municipalities — connecting surveillance, emergency dispatch, GIS, and incident management in one unified operational platform.',
    pageUrl,
    '2026-05-18'
  )

  const comparisonRows = es ? [
    { feature: 'Video', fragmented: 'Camaras de PM, CIOPS, municipios y camaras privadas en sistemas aislados sin capa VMS compartida', unified: 'VMS unificado, todas las camaras buscables por zona, fecha y tipo de evento' },
    { feature: 'Despacho de emergencias', fragmented: '190/192/193 como canales separados sin registro comun de incidente', unified: 'Registro unico de incidente que conecta PM, Bombeiros y SAMU' },
    { feature: 'Coordinacion entre fuerzas', fragmented: 'Solo radio, sin pantalla ni mapa compartido entre PM, Bombeiros y SAMU', unified: 'Mapa GIS compartido con posiciones de unidades en tiempo real en el CIOPS' },
    { feature: 'Estructura estadual', fragmented: '26 estados + DF con sistemas SSP incompatibles entre si', unified: 'Plataforma modular que se adapta a cada estado sin reemplazar infraestructura' },
    { feature: 'Reportes para SENASP / FNSP', fragmented: 'Exportacion manual de datos incompletos de cada sistema aislado', unified: 'KPIs automatizados de tiempos de respuesta, incidentes por zona y cobertura de camaras' },
    { feature: 'Dependencia tecnologica', fragmented: 'Hardware propietario por proveedor y por estado', unified: 'ONVIF/RTSP, cualquier marca de camara ya instalada' },
  ] : [
    { feature: 'Video', fragmented: 'PM, CIOPS, municipal, and private cameras on separate systems with no shared VMS layer', unified: 'Unified VMS, all cameras searchable by zone, date, and event type' },
    { feature: 'Emergency dispatch', fragmented: '190/192/193 as separate channels with no shared incident record', unified: 'Single incident record bridging PM, Bombeiros, and SAMU' },
    { feature: 'Inter-agency coordination', fragmented: 'Radio-only, no shared screen or map between PM, Bombeiros, and SAMU', unified: 'Shared GIS map with real-time unit positions inside the CIOPS' },
    { feature: 'State structure', fragmented: '26 states + DF with incompatible SSP systems across jurisdictions', unified: 'Modular platform that adapts to each state without replacing infrastructure' },
    { feature: 'SENASP / FNSP reporting', fragmented: 'Manual export of incomplete data from each siloed system', unified: 'Automated KPIs for response times, zone-level incident counts, and camera coverage' },
    { feature: 'Technology lock-in', fragmented: 'Proprietary hardware per vendor and per state', unified: 'ONVIF/RTSP, any camera brand already installed' },
  ]

  const workflowSteps = es ? [
    { n: '01', title: 'Video unificado', text: 'Todas las camaras — CIOPS estaduales, camaras municipales de Sao Paulo (Detecta), COR de Rio de Janeiro, Curitiba, Belo Horizonte y camaras privadas compartidas — en una sola interfaz VMS con busqueda por zona, fecha y tipo de evento.' },
    { n: '02', title: 'Centro de despacho unificado', text: 'Recepcion 190/192/193, clasificacion de incidentes y asignacion de unidades desde una sola plataforma CAD. Tiempos de despacho promedio inferiores a 90 segundos. PM, Bombeiros y SAMU coordinan en el mismo registro de incidente.' },
    { n: '03', title: 'GIS en tiempo real', text: 'Posiciones de PM, Policia Civil, Bombeiros, SAMU y PRF en un solo mapa operativo compartido en el CIOPS. Vista conjunta entre batallones, delegacias y el centro de mando estadual.' },
    { n: '04', title: 'Fusion de sensores', text: 'LPR de autopistas estaduales, botones de panico y alertas de violencia acustica unificados con video en el mismo entorno operativo — sin multiples pantallas ni sistemas fragmentados por municipio o estado.' },
    { n: '05', title: 'Reportes para SENASP / SSP', text: 'KPIs automatizados de tiempos de respuesta, incidentes por zona y cobertura de camaras para reportes del FNSP, SSP estaduales y municipios — sin exportacion manual ni consolidacion de hojas de calculo.' },
  ] : [
    { n: '01', title: 'Unified video', text: 'All cameras — state CIOPS systems, São Paulo municipal cameras (Detecta), Rio de Janeiro COR, Curitiba, Belo Horizonte, and privately shared cameras — on one VMS interface with search by zone, date, and event type.' },
    { n: '02', title: 'Unified dispatch center', text: '190/192/193 intake, incident classification, and unit assignment from one CAD platform. Average dispatch time under 90 seconds. PM, Bombeiros, and SAMU coordinate on the same incident record.' },
    { n: '03', title: 'Real-time GIS', text: 'Positions of PM, Polícia Civil, Bombeiros, SAMU, and PRF on one shared operational map inside the CIOPS — joint view across battalions, delegacias, and the state command center.' },
    { n: '04', title: 'Sensor fusion', text: 'State highway LPR, panic buttons, and acoustic violence alerts unified with video in the same operational environment — no multiple screens or systems fragmented by municipality or state.' },
    { n: '05', title: 'SENASP / SSP reporting', text: 'Automated KPIs for response times, zone-level incident counts, and camera coverage for FNSP, state SSP, and municipal reporting — no manual export or spreadsheet consolidation.' },
  ]

  const challengeCards = es ? [
    { icon: '🏙️', title: 'Megaciudades con infraestructura fragmentada', text: 'Sao Paulo (22M) y Rio de Janeiro (13M) tienen millares de camaras distribuidas entre PM, municipio y sistemas privados sin una capa VMS compartida. Los operadores del CIOPS acceden a multiples interfaces, ralentizando la respuesta y creando puntos ciegos en los limites entre jurisdicciones.' },
    { icon: '📞', title: 'Numeros de emergencia fragmentados sin despacho unificado', text: 'El 190, 192 y 193 operan en canales separados. Sin un registro comun de incidente, los eventos que involucran PM, Bombeiros y SAMU generan duplicacion de respuesta y perdida de contexto operacional entre agencias.' },
    { icon: '🏛️', title: 'Estructura estadual descentralizada', text: 'Brasil tiene 26 estados + el Distrito Federal, cada uno con su propia SSP, PM y Bombeiros. Sin una plataforma que se adapte a cada estado, la coordinacion entre fuerzas depende de protocolos informales y communication por radio que no escalan a nivel estadual.' },
    { icon: '📋', title: 'Reportes para SENASP y FNSP', text: 'Sin metricas estandarizadas de tiempos de respuesta e incidentes por zona, los reportes para el FNSP y las SSP estaduales dependen de exportaciones manuales incompletas. El seguimiento del desempeno de los CIOPS requiere consolidar datos de multiples sistemas incompatibles.' },
  ] : [
    { icon: '🏙️', title: 'Megacities with fragmented infrastructure', text: 'São Paulo (22M) and Rio de Janeiro (13M) have thousands of cameras distributed across PM, municipal, and private systems with no shared VMS layer. CIOPS operators access multiple interfaces, slowing response and creating blind spots at jurisdiction boundaries.' },
    { icon: '📞', title: 'Fragmented emergency numbers without unified dispatch', text: '190, 192, and 193 operate on separate channels. Without a shared incident record, events involving PM, Bombeiros, and SAMU create duplicate responses and lost operational context between agencies.' },
    { icon: '🏛️', title: 'Decentralized state structure', text: 'Brazil has 26 states plus the Federal District, each with its own SSP, PM, and Bombeiros. Without a platform that adapts to each state, inter-agency coordination depends on informal protocols and radio communication that do not scale to state level.' },
    { icon: '📋', title: 'SENASP and FNSP reporting', text: 'Without standardized response-time and zone-level incident metrics, FNSP and state SSP reports depend on incomplete manual exports. Tracking CIOPS performance requires consolidating data from multiple incompatible systems.' },
  ]

  return (
    <>
      <Nav />

      {/* JSON-LD schemas */}
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

        {/* -- BREADCRUMB -- */}
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
            {es ? 'Software de Seguridad Publica — Brasil' : 'Public Safety Software — Brazil'}
          </span>
        </div>

        {/* -- HERO -- */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 40px 64px' }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '11px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: ACCENT, marginBottom: '20px',
          }}>
            {es ? 'Guia de Referencia' : 'Reference Guide'}
          </p>
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.05,
            letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '28px',
          }}>
            {es
              ? 'Software de Seguridad Publica para Brasil'
              : 'Public Safety Software for Brazil'}
          </h1>
          <p style={{
            fontSize: '18px', fontWeight: 300, color: 'var(--dim)',
            lineHeight: 1.75, maxWidth: '720px',
          }}>
            {es
              ? 'Guia para estados brasilenhos, municipios y CIOPS que evaluan plataformas unificadas de seguridad publica: videovigilancia, despacho de emergencias, GIS y gestion de incidentes en mas de 214 millones de ciudadanos.'
              : 'Guide for Brazilian states, municipalities, and CIOPS centers evaluating unified public safety platforms — video surveillance, emergency dispatch, GIS, and incident management across 214 million citizens.'}
          </p>

          {/* Key stats */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px', marginTop: '40px',
          }}>
            {[
              { value: '214M', label: es ? 'Ciudadanos protegidos' : 'Citizens protected' },
              { value: '26', label: es ? 'Estados + DF' : 'States + Federal District' },
              { value: 'FNSP', label: es ? 'Mecanismo de financiamiento' : 'Funding mechanism' },
            ].map((stat, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--border)',
                borderTop: `3px solid ${ACCENT}`,
                borderRadius: '10px', padding: '20px 16px',
              }}>
                <div style={{
                  fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
                  fontSize: '28px', color: ACCENT, marginBottom: '6px',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: 'DM Mono, monospace', fontSize: '10px',
                  letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* -- SECTION: Brazil's Public Safety Structure -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? 'La Estructura de Seguridad Publica en Brasil'
                : "Brazil's Public Safety Structure"}
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75, marginBottom: '20px' }}>
              {es
                ? 'Brasil es una republica federal con 26 estados y el Distrito Federal. Cada estado opera su propia Policia Militar (PM — policia ostensiva y patrullaje) y Policia Civil (PC — investigaciones). A nivel federal, la Policia Federal (PF) cubre delitos federales y fronteras; la PRF (Policia Rodoviaria Federal) cubre las carreteras federales. Los Bombeiros Militares y el SAMU operan tambien a nivel estadual. El SENASP (Secretaria Nacional de Seguridad Publica) del Ministerio de Justicia coordina la politica de seguridad nacional y administra el FNSP.'
                : "Brazil is a federal republic with 26 states and the Federal District. Each state operates its own Polícia Militar (PM — uniformed patrol and public order) and Polícia Civil (PC — criminal investigations). At the federal level, the Polícia Federal (PF) covers federal crimes and borders; the PRF (Polícia Rodoviária Federal) covers federal highways. Bombeiros Militares and SAMU also operate at the state level. SENASP (Secretaria Nacional de Segurança Pública) under the Ministry of Justice coordinates national security policy and administers the FNSP."}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>
              {es
                ? 'Brasil protege aproximadamente 214 millones de ciudadanos — la poblacion mas grande de America Latina. Sao Paulo opera el sistema Detecta con mas de 17.000 camaras integradas con reconocimiento de placas. Rio de Janeiro tiene el COR (Centro de Operaciones Rio) coordinando transito, emergencias y seguridad. Los CIOPS estaduales en Bahia, Minas Gerais y otros estados unifican PM, Bombeiros y SAMU en un centro operativo compartido. El principal desafio es la interoperabilidad entre los sistemas PM, CIOPS, municipales y los miles de camaras privadas de comercios, escuelas y condominios.'
                : 'Brazil protects approximately 214 million citizens — the largest population in Latin America. São Paulo operates the Detecta system with over 17,000 cameras integrated with license plate recognition. Rio de Janeiro has the COR (Centro de Operações Rio) coordinating traffic, emergencies, and security. State CIOPS centers in Bahia, Minas Gerais, and other states unify PM, Bombeiros, and SAMU in one shared operational hub. The key challenge is interoperability between PM systems, CIOPS, municipal cameras, and thousands of private cameras from businesses, schools, and condominiums.'}
            </p>
          </div>
        </section>

        {/* -- SECTION: Key Challenges -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '28px',
            }}>
              {es
                ? 'Desafios Clave para Estados y Municipios Brasilenhos'
                : 'Key Challenges for Brazilian States and Municipalities'}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {challengeCards.map((card, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                  borderRadius: '12px', padding: '28px',
                }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '8px',
                    background: `color-mix(in srgb, ${ACCENT} 14%, transparent)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '14px', fontSize: '16px',
                  }}>
                    {card.icon}
                  </div>
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '19px', color: 'var(--white)', marginBottom: '10px',
                  }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7 }}>
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- SECTION: 5-Step Unified Workflow -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0', background: `color-mix(in srgb, ${ACCENT} 3%, transparent)` }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? '¿Como Funciona una Plataforma Unificada para Brasil?'
                : 'How a Unified Platform Works for Brazil'}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {workflowSteps.map((step, i) => (
                <div key={i} style={{
                  display: 'flex', gap: '24px', alignItems: 'flex-start',
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                  borderLeft: `3px solid ${ACCENT}`,
                  borderRadius: '10px', padding: '24px 28px',
                }}>
                  <div style={{
                    fontFamily: 'DM Mono, monospace', fontWeight: 700,
                    fontSize: '13px', color: ACCENT, letterSpacing: '0.05em',
                    minWidth: '28px', paddingTop: '2px',
                  }}>
                    {step.n}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                      fontSize: '18px', color: ACCENT, marginBottom: '8px',
                    }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '15px', color: 'var(--dim)', lineHeight: 1.7 }}>
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Product links */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '40px' }}>
              {[
                { href: '/k-safety', label: 'K-Safety', color: ACCENT, desc: es ? 'Conciencia situacional' : 'Situational awareness' },
                { href: '/k-dispatch', label: 'K-Dispatch', color: '#f59e0b', desc: es ? 'Despacho CAD / 190' : 'CAD dispatch / 190' },
                { href: '/k-video', label: 'K-Video', color: '#a855f7', desc: es ? 'Gestion de video' : 'Video management' },
              ].map((product, i) => (
                <Link key={i} href={product.href} style={{
                  background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)',
                  borderTop: `3px solid ${product.color}`,
                  borderRadius: '10px', padding: '20px 16px',
                  textDecoration: 'none', display: 'block',
                }}>
                  <div style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '17px', color: 'var(--white)', marginBottom: '6px',
                  }}>
                    {product.label}
                  </div>
                  <div style={{
                    fontFamily: 'DM Mono, monospace', fontSize: '10px',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'var(--muted)',
                  }}>
                    {product.desc}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* -- SECTION: Comparison Table -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? 'Fragmentado vs Plataforma Unificada para Estados y CIOPS Brasilenhos'
                : 'Fragmented vs Unified Platform for Brazilian States and CIOPS'}
            </h2>

            <div style={{
              border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden',
            }}>
              {/* Header */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr',
                background: 'rgba(255,255,255,0.04)',
                borderBottom: '1px solid var(--border)',
                padding: '14px 20px',
              }}>
                {[
                  es ? 'Capacidad' : 'Capability',
                  es ? 'Sistemas Fragmentados' : 'Fragmented Systems',
                  es ? 'Plataforma Unificada' : 'Unified Platform',
                ].map((h, i) => (
                  <div key={i} style={{
                    fontFamily: 'DM Mono, monospace', fontSize: '10px',
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: i === 2 ? ACCENT : 'var(--muted)',
                  }}>
                    {h}
                  </div>
                ))}
              </div>
              {/* Rows */}
              {comparisonRows.map((row, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '1.2fr 1.4fr 1.4fr',
                  padding: '16px 20px', gap: '12px',
                  borderBottom: i < comparisonRows.length - 1 ? '1px solid var(--border)' : 'none',
                  background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                }}>
                  <div style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '14px', color: 'var(--white)',
                  }}>
                    {row.feature}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>
                    {row.fragmented}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 1.6 }}>
                    {row.unified}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- SECTION: FAQ -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? 'Preguntas Frecuentes'
                : 'Frequently Asked Questions'}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px', padding: '24px 28px',
                }}>
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '18px', color: 'var(--white)', marginBottom: '12px',
                  }}>
                    {faq.question}
                  </h3>
                  <p style={{ fontSize: '15px', color: 'var(--dim)', lineHeight: 1.75 }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- SECTION: Related Resources -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
              fontSize: '22px', color: 'var(--white)', marginBottom: '24px',
            }}>
              {es ? 'Recursos Relacionados' : 'Related Resources'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
              {[
                { href: '/resources/best-public-safety-software', label: es ? 'Mejores plataformas de seguridad publica' : 'Best Public Safety Software' },
                { href: '/resources/what-is-a-real-time-crime-center', label: es ? '¿Que es un Centro de Control en Tiempo Real?' : 'What Is a Real-Time Crime Center?' },
                { href: '/resources/what-is-cad-dispatch-software', label: es ? '¿Que es software CAD de despacho?' : 'What Is CAD Dispatch Software?' },
                { href: '/resources/public-safety-software-colombia', label: es ? 'Software de seguridad publica — Colombia' : 'Public Safety Software — Colombia' },
              ].map((link, i) => (
                <Link key={i} href={link.href} style={{
                  display: 'block', padding: '16px 20px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--border)', borderRadius: '10px',
                  fontSize: '13px', color: 'var(--cyan)', textDecoration: 'none',
                  lineHeight: 1.5,
                }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>

      <CTASection
        es={es}
        h2={es ? 'Transforma la Seguridad Publica de Tu Estado o Municipio en Brasil' : 'Transform Public Safety in Your Brazilian State or Municipality'}
        subtitle={es
          ? 'Conoce como KabatOne integra videovigilancia, despacho de emergencias, GIS y gestion de incidentes en una sola plataforma operativa para CIOPS estaduales y municipios brasilenhos.'
          : 'See how KabatOne unifies video surveillance, emergency dispatch, GIS, and incident management into one operational platform for Brazilian state CIOPS centers and municipalities.'}
        cta1={es ? 'Solicita una Demo' : 'Book a Demo'}
        cta2={es ? 'Contactar Ventas' : 'Contact Sales'}
      />

      <Footer es={es} />
    </>
  )
}
