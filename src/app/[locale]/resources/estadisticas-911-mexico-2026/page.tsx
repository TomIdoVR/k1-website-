import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CadLeadForm from '@/components/CadLeadForm'
import { Link } from '@/i18n/navigation'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'
import { AS_OF, PERIOD, NATIONAL, TREND, CATEGORIES, IMPROCEDENTES, TOP_PROCEDENTES, STATES } from '@/content/estadisticas-911-2026'

/* CAD plan item #22: the data foundation of the "Estado del 911 en México" report, published as a
   citable page. Every figure comes from src/content/estadisticas-911-2026.ts (SESNSP/CNI 9-1-1
   open data, Jan–Sep 2026, matched to SESNSP's PDF). "Improcedente" is SESNSP's term for a call not
   passed to a responding agency; it is never called "fake" here. No response-time, abandonment or
   089 figures: the public data has none. */

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('estadisticas911', locale)
}

const SRC_DATA = 'https://www.gob.mx/911/documentos/datos-abiertos-de-la-estadistica-nacional-del-numero-de-atencion-de-llamadas-de-emergencia-9-1-1'
const SRC_PDF = 'https://www.gob.mx/911/documentos/estadistica-nacional-del-numero-de-atencion-de-llamadas-de-emergencia-9-1-1-111029'
const SRC_INEGI = 'https://www.inegi.org.mx/contenidos/programas/ccpv/2020/tabulados/cpv2020_b_eum_01_poblacion.xlsx'

const CAT_EN: Record<string, string> = {
  Improcedentes: 'Improcedentes (not passed to an agency)', Seguridad: 'Security', Asistencia: 'Assistance', 'Médico': 'Medical',
  'Protección Civil': 'Civil protection', 'Otros Servicios': 'Other services', 'Servicios Públicos': 'Public services',
}

export default async function Estadisticas911Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#06b6d4'
  const n = (v: number) => v.toLocaleString(es ? 'es-MX' : 'en-US')
  const pct = (v: number, d = 1) => v.toLocaleString(es ? 'es-MX' : 'en-US', { minimumFractionDigits: d, maximumFractionDigits: d }) + (es ? ' %' : '%')
  const mill = (v: number) => (v / 1e6).toLocaleString(es ? 'es-MX' : 'en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + (es ? ' millones' : ' million')
  const base = 'https://kabatone.com' + (es ? '/es' : '')
  const url = `${base}/resources/estadisticas-911-mexico-2026`
  const period = es ? PERIOD.es : PERIOD.en

  const faqs = es ? [
    { question: '¿Cuántas llamadas recibe el 9-1-1 en México?', answer: `De ${period} el 9-1-1 recibió ${n(NATIONAL.calls)} llamadas en todo el país, según la estadística nacional del SESNSP. En 2025 recibió ${mill(TREND[2].calls)}.` },
    { question: '¿Qué porcentaje de las llamadas al 9-1-1 no son emergencias?', answer: `El ${pct(NATIONAL.improcShare, 2)} de las llamadas de ${period} fueron improcedentes, es decir, no se canalizaron a una corporación: ${n(NATIONAL.improcedentes)} llamadas. Un año antes la proporción era ${pct(NATIONAL.priorImprocShare, 2)}.` },
    { question: '¿Qué es una llamada improcedente al 9-1-1?', answer: 'Es una llamada que no se canaliza a una corporación de atención. Incluye llamadas mudas, incompletas, bromas, transferencias, pruebas e insultos. No todas son malintencionadas: una llamada muda puede ser una marcación accidental o una persona que no puede hablar.' },
    { question: '¿Cuáles son las emergencias más reportadas al 9-1-1?', answer: `Entre las llamadas procedentes, las más frecuentes en ${period} fueron apoyo a la ciudadanía (${n(TOP_PROCEDENTES[0].calls)}), actos relacionados con la familia (${n(TOP_PROCEDENTES[1].calls)}) y personas agresivas (${n(TOP_PROCEDENTES[2].calls)}).` },
    { question: '¿Qué estados tienen más llamadas improcedentes?', answer: 'Por proporción, Chiapas (92.9 %) y Tabasco (85.9 %) tienen la más alta, y Morelos (51.7 %) y Sonora (55.6 %) la más baja, de enero a septiembre de 2026. Algunos estados cambiaron su clasificación en 2026, por lo que las comparaciones entre años deben hacerse con cautela.' },
  ] : [
    { question: 'How many calls does 9-1-1 receive in Mexico?', answer: `From ${period}, 9-1-1 received ${n(NATIONAL.calls)} calls nationwide, according to SESNSP's national statistics. In 2025 it received ${mill(TREND[2].calls)}.` },
    { question: 'What share of 9-1-1 calls in Mexico are not emergencies?', answer: `${pct(NATIONAL.improcShare, 2)} of calls from ${period} were improcedentes, meaning they were not passed to a responding agency: ${n(NATIONAL.improcedentes)} calls. A year earlier the share was ${pct(NATIONAL.priorImprocShare, 2)}.` },
    { question: 'What is an "improcedente" 9-1-1 call?', answer: 'A call that is not passed to a responding agency. It includes silent, incomplete, prank, transferred, test and abusive calls. Not all are malicious: a silent call can be an accidental dial or a caller who cannot speak.' },
    { question: 'What emergencies are reported most to 9-1-1 in Mexico?', answer: `Among calls passed to an agency, the most frequent from ${period} were citizen assistance (${n(TOP_PROCEDENTES[0].calls)}), family-related incidents (${n(TOP_PROCEDENTES[1].calls)}) and aggressive persons (${n(TOP_PROCEDENTES[2].calls)}).` },
    { question: 'Which states have the highest share of non-emergency calls?', answer: 'By share, Chiapas (92.9%) and Tabasco (85.9%) are highest and Morelos (51.7%) and Sonora (55.6%) lowest, January to September 2026. Some states changed their classification in 2026, so compare years with caution.' },
  ]

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: `${base}/resources` },
    { name: es ? 'Estadísticas del 911 en México' : '911 statistics in Mexico', url },
  ]
  const headline = es ? 'Estadísticas del 911 en México 2026' : '911 Statistics in Mexico 2026'
  const desc = es
    ? `Llamadas al 9-1-1 de ${period}: total, llamadas improcedentes, emergencias más reportadas y datos por estado, con datos oficiales del SESNSP.`
    : `Mexico 9-1-1 calls, ${period}: totals, non-emergency calls, most reported emergencies and data by state, from official SESNSP data.`
  const dataset = {
    '@context': 'https://schema.org', '@type': 'Dataset', name: headline, description: desc, url,
    temporalCoverage: '2026-01/2026-09', spatialCoverage: { '@type': 'Country', name: 'México' },
    isBasedOn: SRC_DATA, creator: { '@type': 'Organization', name: 'KabatOne', url: 'https://kabatone.com' }, dateModified: '2026-11-03',
  }

  const h2 = { fontFamily: 'var(--font-barlow-condensed)', fontSize: 30, fontWeight: 700 } as const
  const wrap = { padding: '0 24px 48px', maxWidth: 960, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 14 } as const
  const tableBox = { overflowX: 'auto', border: '1px solid var(--border, rgba(255,255,255,0.1))', borderRadius: 10 } as const
  const th = { textAlign: 'left', padding: '10px 14px', fontSize: 13, color: '#94a3b8', fontWeight: 600, borderBottom: '1px solid var(--border, rgba(255,255,255,0.1))', whiteSpace: 'nowrap' } as const
  const thR = { ...th, textAlign: 'right' } as const
  const td = { padding: '9px 14px', fontSize: 14.5, color: '#cbd5e1', borderBottom: '1px solid rgba(255,255,255,0.05)' } as const
  const tdR = { ...td, textAlign: 'right', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' } as const
  const note = { fontSize: 13.5, color: '#94a3b8', lineHeight: 1.6 } as const

  const stats = [
    { v: n(NATIONAL.calls), l: es ? `llamadas al 9-1-1, ${period}` : `9-1-1 calls, ${period}` },
    { v: pct(NATIONAL.improcShare, 2), l: es ? 'fueron improcedentes (no se canalizaron a una corporación)' : 'were improcedentes (not passed to an agency)' },
    { v: n(NATIONAL.procedentes), l: es ? `emergencias canalizadas, ${NATIONAL.yoyProcedentes > 0 ? '+' : ''}${pct(NATIONAL.yoyProcedentes, 2)} vs. 2025` : `calls passed to an agency, ${NATIONAL.yoyProcedentes > 0 ? '+' : ''}${pct(NATIONAL.yoyProcedentes, 2)} vs 2025` },
    { v: pct(NATIONAL.silentShare), l: es ? `fueron llamadas mudas: ${n(NATIONAL.silent)}, más que todas las emergencias canalizadas` : `were silent calls: ${n(NATIONAL.silent)}, more than all calls passed to an agency` },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(headline, desc, url, '2026-11-03')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />
      <Nav />
      <main style={{ background: 'var(--bg)', color: 'var(--white)', fontFamily: 'var(--font-space-grotesk)' }}>
        <section style={{ padding: '80px 24px 32px', maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.3)', borderRadius: 6, padding: '4px 14px', fontSize: 12, color: ACCENT, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            {es ? 'Datos oficiales del SESNSP' : 'Official SESNSP data'}
          </div>
          <h1 style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(36px, 6vw, 58px)', fontWeight: 700, lineHeight: 1.08, marginBottom: 20 }}>
            {es ? <>Estadísticas del 911 en México <span style={{ color: ACCENT }}>2026</span></> : <>911 Statistics in Mexico <span style={{ color: ACCENT }}>2026</span></>}
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 19px)', color: '#94a3b8', lineHeight: 1.7, maxWidth: 780 }}>
            {es
              ? `De ${period}, el 9-1-1 recibió ${n(NATIONAL.calls)} llamadas. Siete de cada diez (${pct(NATIONAL.improcShare, 2)}) fueron improcedentes: no se canalizaron a una corporación. Las llamadas mudas, ${mill(NATIONAL.silent)}, superan a todas las emergencias canalizadas (${mill(NATIONAL.procedentes)}).`
              : `From ${period}, Mexico's 9-1-1 received ${n(NATIONAL.calls)} calls. Seven in ten (${pct(NATIONAL.improcShare, 2)}) were improcedentes: not passed to a responding agency. Silent calls alone, ${mill(NATIONAL.silent)}, outnumber every call passed to an agency (${mill(NATIONAL.procedentes)}).`}
          </p>
          <p style={{ ...note, marginTop: 10 }}>
            {es ? 'Fuente: SESNSP, Centro Nacional de Información, corte al ' : 'Source: SESNSP, National Information Center, data as of '}{AS_OF}. {es ? 'Detalle en Metodología.' : 'See Methodology.'}
          </p>
        </section>

        <section style={{ ...wrap, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }} aria-label={es ? 'Cifras principales' : 'Key figures'}>
          {stats.map((s) => (
            <div key={s.l} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border, rgba(255,255,255,0.1))', borderRadius: 10, padding: '16px 18px' }}>
              <div style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 34, fontWeight: 700, color: ACCENT, fontVariantNumeric: 'tabular-nums' }}>{s.v}</div>
              <div style={{ fontSize: 14, color: '#cbd5e1', lineHeight: 1.5 }}>{s.l}</div>
            </div>
          ))}
        </section>

        <section style={wrap}>
          <h2 style={h2}>{es ? 'Qué tipo de llamadas recibe el 9-1-1' : 'What kind of calls 9-1-1 receives'}</h2>
          <div style={tableBox}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead><tr><th style={th}>{es ? 'Tipo' : 'Type'}</th><th style={thR}>{es ? 'Llamadas' : 'Calls'}</th><th style={thR}>{es ? '% del total' : '% of total'}</th></tr></thead>
              <tbody>{CATEGORIES.map((c) => (<tr key={c.type}><td style={td}>{es ? c.type : (CAT_EN[c.type] ?? c.type)}</td><td style={tdR}>{n(c.calls)}</td><td style={tdR}>{pct(c.share, 2)}</td></tr>))}</tbody>
            </table>
          </div>
        </section>

        <section style={wrap}>
          <h2 style={h2}>{es ? 'Las llamadas improcedentes, por tipo' : 'Improcedente calls, by type'}</h2>
          <p style={{ color: '#cbd5e1', lineHeight: 1.7 }}>
            {es
              ? 'La mayoría no son bromas: las llamadas mudas e incompletas suman más de la mitad de todas las llamadas. Pueden ser marcaciones accidentales o personas que no pueden hablar, y cada una ocupa a un operador.'
              : 'Most are not pranks: silent and incomplete calls are more than half of all calls. They can be accidental dials or callers who cannot speak, and each one takes an operator’s time.'}
          </p>
          <div style={tableBox}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead><tr><th style={th}>{es ? 'Tipo (categoría oficial)' : 'Type (official category)'}</th><th style={thR}>{es ? 'Llamadas' : 'Calls'}</th><th style={thR}>{es ? '% de todas' : '% of all calls'}</th></tr></thead>
              <tbody>{IMPROCEDENTES.map((c) => (<tr key={c.type}><td style={td}>{c.type}</td><td style={tdR}>{n(c.calls)}</td><td style={tdR}>{pct(c.share)}</td></tr>))}</tbody>
            </table>
          </div>
        </section>

        <section style={wrap}>
          <h2 style={h2}>{es ? 'Las 10 emergencias más reportadas' : 'The 10 most reported emergencies'}</h2>
          <div style={tableBox}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead><tr><th style={th}>#</th><th style={th}>{es ? 'Incidente (categoría oficial)' : 'Incident (official category)'}</th><th style={thR}>{es ? 'Llamadas' : 'Calls'}</th><th style={thR}>{es ? '% de las procedentes' : '% of calls passed on'}</th></tr></thead>
              <tbody>{TOP_PROCEDENTES.map((c, i) => (<tr key={c.type}><td style={tdR}>{i + 1}</td><td style={td}>{c.type}</td><td style={tdR}>{n(c.calls)}</td><td style={tdR}>{pct(c.shareOfProc)}</td></tr>))}</tbody>
            </table>
          </div>
        </section>

        <section style={wrap}>
          <h2 style={h2}>{es ? 'Llamadas al 9-1-1 por estado' : '9-1-1 calls by state'}</h2>
          <div style={tableBox}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead><tr>
                <th style={th}>{es ? 'Estado' : 'State'}</th><th style={thR}>{es ? 'Llamadas' : 'Calls'}</th><th style={thR}>{es ? 'Procedentes' : 'Passed on'}</th>
                <th style={thR}>{es ? '% improcedentes' : '% improcedentes'}</th><th style={thR}>{es ? 'Llamadas por 1,000 hab.' : 'Calls per 1,000 people'}</th>
              </tr></thead>
              <tbody>{STATES.map((s) => (<tr key={s.state}><td style={td}>{s.state}</td><td style={tdR}>{n(s.calls)}</td><td style={tdR}>{n(s.procedentes)}</td><td style={tdR}>{pct(s.improcShare)}</td><td style={tdR}>{s.per1000.toLocaleString(es ? 'es-MX' : 'en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</td></tr>))}</tbody>
            </table>
          </div>
          <p style={note}>
            {es
              ? `${period}, ordenado por número de llamadas. Llamadas por 1,000 habitantes con población del Censo 2020 del INEGI (el SESNSP usa proyecciones de CONAPO, por lo que sus tasas difieren). Chiapas, Estado de México, Zacatecas y Oaxaca muestran cambios de clasificación en 2026: compare entre años con cautela.`
              : `${period}, sorted by number of calls. Calls per 1,000 people use INEGI 2020 census population (SESNSP uses CONAPO projections, so its rates differ). Chiapas, Estado de México, Zacatecas and Oaxaca show classification changes in 2026: compare years with caution.`}
          </p>
        </section>

        <section style={wrap}>
          <h2 style={h2}>{es ? 'La tendencia' : 'The trend'}</h2>
          <p style={{ color: '#cbd5e1', lineHeight: 1.7 }}>
            {es
              ? `Las llamadas al 9-1-1 bajaron de unos 95 millones en 2018 a ${mill(TREND[2].calls)} en 2025, y la proporción de improcedentes pasó de 83.0 % a 72.8 %. En 2026 las emergencias canalizadas crecen (${NATIONAL.yoyProcedentes > 0 ? '+' : ''}${pct(NATIONAL.yoyProcedentes, 2)} de enero a septiembre) mientras las improcedentes bajan (${pct(NATIONAL.yoyImprocedentes, 2)}).`
              : `9-1-1 calls fell from about 95 million in 2018 to ${mill(TREND[2].calls)} in 2025, and the improcedente share fell from 83.0% to 72.8%. In 2026 calls passed to an agency are growing (${NATIONAL.yoyProcedentes > 0 ? '+' : ''}${pct(NATIONAL.yoyProcedentes, 2)} January to September) while improcedentes fall (${pct(NATIONAL.yoyImprocedentes, 2)}).`}
          </p>
          <div style={tableBox}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead><tr><th style={th}>{es ? 'Periodo' : 'Period'}</th><th style={thR}>{es ? 'Llamadas' : 'Calls'}</th><th style={thR}>{es ? '% improcedentes' : '% improcedentes'}</th></tr></thead>
              <tbody>
                {TREND.map((t) => (<tr key={t.period}><td style={td}>{t.period}</td><td style={tdR}>{t.period === '2018' ? (es ? 'unos 95 millones' : 'about 95 million') : n(t.calls)}</td><td style={tdR}>{pct(t.improcShare)}</td></tr>))}
                <tr><td style={td}>{es ? 'Ene–sep 2026' : 'Jan–Sep 2026'}</td><td style={tdR}>{n(NATIONAL.calls)}</td><td style={tdR}>{pct(NATIONAL.improcShare)}</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section style={wrap}>
          <h2 style={h2}>{es ? 'Qué significa para un centro 9-1-1 o un C5' : 'What it means for a 9-1-1 center or C5'}</h2>
          <p style={{ color: '#cbd5e1', lineHeight: 1.7 }}>
            {es
              ? 'Con siete de cada diez llamadas sin una emergencia que canalizar, el tiempo del operador para identificar rápido qué llamada es real pesa tanto como el despacho. Ayudan la ubicación de quien llama generada automáticamente, la clasificación con el Catálogo Nacional de Incidentes y el apoyo al operador durante la llamada.'
              : 'With seven in ten calls carrying no emergency to pass on, how fast an operator can tell which call is real matters as much as dispatch. Automatically generated caller location, classification against the National Incident Catalog and support for the operator during the call all help.'}
          </p>
          <p style={{ color: '#cbd5e1', lineHeight: 1.7 }}>
            {es ? 'K-Dispatch reúne la atención de llamadas de emergencia y el despacho en una sola plataforma, con AI Co-Pilot para operadores y despachadores. ' : 'K-Dispatch brings emergency call handling and dispatch into one platform, with AI Co-Pilot for call takers and dispatchers. '}
            <Link href="/k-dispatch" style={{ color: ACCENT }}>{es ? 'Conocer K-Dispatch' : 'See K-Dispatch'}</Link>
          </p>
        </section>

        <section style={wrap}>
          <h2 style={h2}>{es ? 'Preguntas frecuentes' : 'Frequently asked questions'}</h2>
          {faqs.map((f) => (
            <div key={f.question} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border, rgba(255,255,255,0.1))', borderRadius: 10, padding: '18px 20px' }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{f.question}</h3>
              <p style={{ color: '#cbd5e1', lineHeight: 1.7 }}>{f.answer}</p>
            </div>
          ))}
        </section>

        <section style={wrap}>
          <h2 style={h2}>{es ? 'Metodología y fuentes' : 'Methodology and sources'}</h2>
          <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8, color: '#cbd5e1', lineHeight: 1.65, fontSize: 15 }}>
            <li>{es ? 'Datos de 2026: archivo de datos abiertos del SESNSP / Centro Nacional de Información, enero a septiembre de 2026; los totales coinciden llamada por llamada con el reporte en PDF del SESNSP del 15 de octubre de 2026.' : '2026 data: SESNSP / National Information Center open-data file, January to September 2026; totals match SESNSP’s PDF report of 15 October 2026 call for call.'} <a href={SRC_DATA} target="_blank" rel="noopener" style={{ color: ACCENT }}>{es ? 'Datos abiertos' : 'Open data'}</a></li>
            <li>{es ? 'Comparaciones anuales y años anteriores: reportes trimestrales en PDF del SESNSP. Los datos de 2025 fueron revisados por el SESNSP entre ediciones.' : 'Year-over-year and prior years: SESNSP quarterly PDF reports. SESNSP revised 2025 figures between editions.'} <a href={SRC_PDF} target="_blank" rel="noopener" style={{ color: ACCENT }}>{es ? 'Reportes del SESNSP' : 'SESNSP reports'}</a></li>
            <li>{es ? 'Población: Censo de Población y Vivienda 2020 del INEGI.' : 'Population: INEGI 2020 Population and Housing Census.'} <a href={SRC_INEGI} target="_blank" rel="noopener" style={{ color: ACCENT }}>INEGI</a></li>
            <li>{es ? 'Procedente: llamada canalizada a una corporación de atención. Improcedente: llamada no canalizada. Las llamadas reflejan lo que reporta quien llama, no delitos confirmados.' : 'Procedente: a call passed to a responding agency. Improcedente: a call not passed on. Calls reflect what callers report, not confirmed crimes.'}</li>
            <li>{es ? 'Los datos públicos no incluyen tiempos de atención o de llegada, abandono de llamadas ni el 089, por lo que esta página no los reporta. Actualizaremos la página con cada corte trimestral.' : 'The public data does not include handling or arrival times, call abandonment or 089 calls, so this page does not report them. We will update it with each quarterly release.'}</li>
          </ul>
        </section>

        <CadLeadForm es={es} source="estadisticas-911" />

        <section style={{ padding: '0 24px 64px', maxWidth: 960, margin: '0 auto', display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: 14 }}>
          {[
            { href: '/resources/norma-tecnica-911', label: es ? 'Norma Técnica 9-1-1: requisitos del CAD' : 'Mexico’s 911 standard: CAD requirements' },
            { href: '/resources/fasp-2027-911-c5', label: es ? 'FASP 2027 para el 911 y el C5' : 'FASP 2027 for 911 and C5' },
            { href: '/resources/how-c5-command-centers-work', label: es ? '¿Qué es un C5 y cómo funciona?' : 'What is a C5 and how it works' },
            { href: '/k-dispatch', label: 'K-Dispatch' },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ color: ACCENT, textDecoration: 'none', borderBottom: `1px solid ${ACCENT}40` }}>{l.label}</Link>
          ))}
        </section>
      </main>
      <Footer es={es} />
    </>
  )
}
