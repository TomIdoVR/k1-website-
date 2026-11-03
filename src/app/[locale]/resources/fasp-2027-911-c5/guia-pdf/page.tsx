import type { Metadata } from 'next'
import { FASP_ES, FASP_EN } from '@/content/fasp-2027'

/* Printable FASP 2027 planning guide (CAD plan item #12). Source of the gated PDFs in
   public/downloads/ (rendered with headless Chrome --print-to-pdf); kept out of the index
   and the sitemap, like norma-tecnica-911/autoevaluacion. All copy comes from
   src/content/fasp-2027.ts so the PDF never drifts from the web guide. */

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const es = locale === 'es'
  return {
    title: es ? 'Guía FASP 2027 para el 911 y el C5 (PDF) | KabatOne' : 'FASP 2027 guide for 911 and C5 (PDF) | KabatOne',
    robots: { index: false, follow: false },
  }
}

export default async function FaspGuiaPdfPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'
  const c = es ? FASP_ES : FASP_EN
  const ink = '#0f1724'
  const dim = '#475569'
  const line = '#cbd5e1'
  const accent = '#0e7490'
  const h2 = { fontSize: 15, fontWeight: 800, margin: '18px 0 6px', color: accent } as const
  const p = { fontSize: 12, lineHeight: 1.55, margin: '0 0 6px' } as const
  const th = { textAlign: 'left', padding: '6px 8px', fontSize: 10, letterSpacing: '0.04em', textTransform: 'uppercase', color: dim, borderBottom: `2px solid ${ink}` } as const
  const td = { padding: '7px 8px', fontSize: 11.5, lineHeight: 1.45, verticalAlign: 'top', borderBottom: `1px solid ${line}` } as const
  const box = { display: 'inline-block', width: 11, height: 11, border: `1.5px solid ${ink}`, borderRadius: 2, marginRight: 6, verticalAlign: '-1px' } as const
  const figures = es
    ? [['$9,951 mdp', 'FASP aprobado en el PEF 2026'], ['10,447.9 mdp', 'Propuesta PPEF 2027, pendiente de aprobación'], ['≥ 25 %', 'Aportación estatal sobre el monto federal'], ['1–15 ene', 'Entrega de proyectos de inversión (ciclo 2026)']]
    : [['MXN 9,951M', 'FASP approved in the 2026 budget'], ['MXN 10,447.9M', '2027 draft budget, pending approval'], ['≥ 25%', 'State contribution on the federal amount'], ['1–15 Jan', 'Investment projects due (2026 cycle)']]
  const [programs, formula, ...moreFaqs] = c.faqs
  const sources = es
    ? 'Acuerdos del Consejo Nacional de Seguridad Pública (LII sesión ordinaria, 11 dic 2025; DOF 27-12-2025); Ley de Coordinación Fiscal, arts. 25, 44 y 45; Ley General del Sistema Nacional de Seguridad Pública (DOF 16-07-2025), arts. 108 a 115. La cifra 2027 es la del Proyecto de Presupuesto reportada por la prensa (Milenio, 11 sep 2026). Documento informativo: no sustituye los criterios oficiales ni la orientación del SESNSP.'
    : 'National Public Security Council agreements (52nd ordinary session, 11 Dec 2025; DOF 27-12-2025); Fiscal Coordination Law, arts. 25, 44 and 45; General Law of the National Public Security System (DOF 16-07-2025), arts. 108–115. The 2027 figure is the draft budget as reported by the press (Milenio, 11 Sep 2026). For information only: it does not replace the official criteria or SESNSP guidance.'

  return (
    <div style={{ background: '#fff', color: ink, fontFamily: 'Arial, Helvetica, sans-serif', minHeight: '100vh' }}>
      <style>{`html, body { background: #fff !important; } @page { size: A4; margin: 14mm; } @media print { .skip-link { display: none } tr, h2, .keep { break-inside: avoid } h2 { break-after: avoid } }`}</style>
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '28px 24px' }}>
        <header style={{ borderBottom: `3px solid ${accent}`, paddingBottom: 14, marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: accent, textTransform: 'uppercase' }}>{c.eyebrow}</div>
            <div style={{ fontWeight: 800, fontSize: 15 }}>KabatOne</div>
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.15, margin: '8px 0 0' }}>{c.h1a} {c.h1b}</h1>
          <p style={{ ...p, color: dim, margin: '8px 0 0' }}>{c.intro}</p>
          <p style={{ fontSize: 10.5, color: dim, margin: '6px 0 0' }}>{es ? 'Actualizada: 3 de noviembre de 2026' : 'Updated: 3 November 2026'}</p>
        </header>

        <div className="keep" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 6 }}>
          {figures.map(([n, l]) => (
            <div key={n} style={{ border: `1.5px solid ${line}`, borderRadius: 6, padding: '8px 10px' }}>
              <div style={{ fontSize: 17, fontWeight: 800, color: accent }}>{n}</div>
              <div style={{ fontSize: 10.5, color: dim, lineHeight: 1.35, marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>

        <h2 style={h2}>{c.problemTitle}</h2>
        <p style={p}>{c.problem}</p>

        <h2 style={h2}>{programs.question}</h2>
        <p style={p}>{programs.answer}</p>

        <h2 style={h2}>{formula.question}</h2>
        <p style={p}>{formula.answer}</p>

        <h2 style={h2}>{c.reqTitle}</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...th, width: '22%' }}>{es ? 'Etapa' : 'Stage'}</th>
              <th style={{ ...th, width: '46%' }}>{es ? 'Qué ocurre' : 'What happens'}</th>
              <th style={th}>{es ? 'Qué tener listo' : 'Have ready'}</th>
            </tr>
          </thead>
          <tbody>
            {c.reqs.map((r) => (
              <tr key={r.title}>
                <td style={{ ...td, fontWeight: 700 }}>{r.title}</td>
                <td style={td}>{r.body}</td>
                <td style={td}><span style={box} />{r.ask}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {moreFaqs.map((f) => (
          <div key={f.question} className="keep">
            <h2 style={h2}>{f.question}</h2>
            <p style={p}>{f.answer}</p>
          </div>
        ))}

        <section className="keep" style={{ display: 'flex', gap: 16, marginTop: 18 }}>
          <div style={{ flex: 1, border: `1.5px solid ${ink}`, borderRadius: 6, padding: '10px 14px' }}>
            <strong style={{ fontSize: 12.5 }}>{c.howTitle}</strong>
            <ul style={{ margin: '6px 0 0', paddingLeft: 16, fontSize: 11, lineHeight: 1.5, listStyle: 'disc' }}>
              {c.how.map((h) => <li key={h} style={{ marginBottom: 3 }}>{h}</li>)}
            </ul>
          </div>
          <div style={{ flex: 1, fontSize: 10.5, color: dim, lineHeight: 1.55 }}>
            <strong style={{ color: ink }}>{es ? 'Fuentes' : 'Sources'}</strong><br />
            {sources}
            <br /><br />
            {es ? 'Versión web y contacto: ' : 'Web version and contact: '}kabatone.com{es ? '/es' : ''}/resources/fasp-2027-911-c5
          </div>
        </section>
      </div>
    </div>
  )
}
