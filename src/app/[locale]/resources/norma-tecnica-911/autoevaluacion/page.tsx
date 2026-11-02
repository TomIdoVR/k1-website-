import type { Metadata } from 'next'
import { SOURCE, GROUPS } from '@/content/norma-911'

/* Printable Norma Técnica 9-1-1 self-assessment (CAD plan item #6). This page is the source
   of the gated PDF in public/downloads/ (rendered with headless Chrome --print-to-pdf) and is
   kept out of the index and the sitemap: the download, not this URL, is the lead magnet.
   Light, print-first layout; no site chrome. */

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const es = locale === 'es'
  return {
    title: es ? 'Autoevaluación: Norma Técnica 9-1-1 para el CAD | KabatOne' : 'Self-assessment: Mexico 911 Technical Standard for CAD | KabatOne',
    robots: { index: false, follow: false },
  }
}

export default async function NormaAutoevaluacionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const es = locale === 'es'
  const ink = '#0f1724'
  const dim = '#475569'
  const line = '#cbd5e1'
  const accent = '#0e7490'
  const total = GROUPS.reduce((n, g) => n + g.items.length, 0)
  const th = { textAlign: 'left', padding: '6px 8px', fontSize: 10, letterSpacing: '0.04em', textTransform: 'uppercase', color: dim, borderBottom: `2px solid ${ink}` } as const
  const td = { padding: '7px 8px', fontSize: 11.5, lineHeight: 1.45, verticalAlign: 'top', borderBottom: `1px solid ${line}` } as const
  const box = { display: 'inline-block', width: 11, height: 11, border: `1.5px solid ${ink}`, borderRadius: 2, marginRight: 4, verticalAlign: '-1px' } as const

  return (
    <div style={{ background: '#fff', color: ink, fontFamily: 'Arial, Helvetica, sans-serif', minHeight: '100vh' }}>
      <style>{`html, body { background: #fff !important; } @page { size: A4 landscape; margin: 12mm; } @media print { .skip-link { display: none } tr, h2 { break-inside: avoid } h2 { break-after: avoid } }`}</style>
      <div style={{ maxWidth: 1060, margin: '0 auto', padding: '28px 24px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24, borderBottom: `3px solid ${accent}`, paddingBottom: 14, marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: accent, textTransform: 'uppercase', marginBottom: 6 }}>
              {es ? 'Autoevaluación · Norma Técnica 9-1-1 v2.0' : 'Self-assessment · 911 Technical Standard v2.0'}
            </div>
            <h1 style={{ fontSize: 26, fontWeight: 800, lineHeight: 1.15, margin: 0 }}>
              {es ? '¿Su CAD cumple la Norma Técnica 9-1-1?' : 'Does your CAD meet Mexico’s 911 Technical Standard?'}
            </h1>
            <p style={{ fontSize: 12.5, color: dim, margin: '8px 0 0', maxWidth: 720, lineHeight: 1.5 }}>
              {es
                ? `${total} requisitos que la Norma Técnica 9-1-1 v2.0 del SESNSP establece para el CAD y el GIS de un centro 911 (CALLE), con su número de cláusula y la pregunta para verificarlo con su proveedor. Marque cada uno y anote la evidencia.`
                : `${total} requirements that SESNSP's 911 Technical Standard v2.0 sets for the CAD and GIS of a 911 center (CALLE), with the clause number and the question to verify it with your vendor. Mark each one and note the evidence.`}
            </p>
          </div>
          <div style={{ fontSize: 11, color: dim, textAlign: 'right', lineHeight: 1.6, whiteSpace: 'nowrap' }}>
            <div style={{ fontWeight: 800, fontSize: 15, color: ink }}>KabatOne</div>
            <div>{es ? 'Centro:' : 'Center:'} ____________________</div>
            <div>{es ? 'Fecha:' : 'Date:'} ____________________</div>
            <div>{es ? 'Sistema evaluado:' : 'System assessed:'} __________</div>
          </div>
        </header>

        {GROUPS.map((g) => (
          <section key={g.titleEs} style={{ marginBottom: 14 }}>
            <h2 style={{ fontSize: 14, fontWeight: 800, margin: '10px 0 4px', color: accent }}>{es ? g.titleEs : g.titleEn}</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ ...th, width: 62 }}>{es ? 'Cláusula' : 'Clause'}</th>
                  <th style={{ ...th, width: '31%' }}>{es ? 'Requisito' : 'Requirement'}</th>
                  <th style={{ ...th, width: '29%' }}>{es ? 'Pregunta al proveedor' : 'Ask the vendor'}</th>
                  <th style={{ ...th, width: 196 }}>{es ? 'Estado' : 'Status'}</th>
                  <th style={th}>{es ? 'Evidencia / notas' : 'Evidence / notes'}</th>
                </tr>
              </thead>
              <tbody>
                {g.items.map((r) => (
                  <tr key={r.clause}>
                    <td style={{ ...td, fontWeight: 700, whiteSpace: 'nowrap' }}>{r.clause}</td>
                    <td style={td}>{es ? r.es : r.en}</td>
                    <td style={{ ...td, color: dim }}>{es ? r.askEs : r.askEn}</td>
                    <td style={{ ...td, whiteSpace: 'nowrap', fontSize: 11 }}>
                      <span style={box} />{es ? 'Cumple' : 'Met'}{'  '}
                      <span style={{ ...box, marginLeft: 8 }} />{es ? 'Parcial' : 'Partial'}{'  '}
                      <span style={{ ...box, marginLeft: 8 }} />{es ? 'No' : 'Not met'}
                    </td>
                    <td style={td} />
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ))}

        <section style={{ display: 'flex', gap: 16, marginTop: 16, breakInside: 'avoid' }}>
          <div style={{ flex: 1, border: `1.5px solid ${ink}`, borderRadius: 6, padding: '10px 14px', fontSize: 12, lineHeight: 1.9 }}>
            <strong>{es ? 'Resumen' : 'Summary'}</strong><br />
            {es ? 'Cumple' : 'Met'}: ____ / {total}{'   '}·{'   '}{es ? 'Parcial' : 'Partial'}: ____{'   '}·{'   '}{es ? 'No cumple' : 'Not met'}: ____<br />
            {es ? 'Brechas prioritarias:' : 'Priority gaps:'} ______________________________________________
          </div>
          <div style={{ flex: 1, fontSize: 11, color: dim, lineHeight: 1.55 }}>
            {es
              ? 'Documento de apoyo para revisar un sistema o preparar el anexo técnico de una licitación; no sustituye el texto oficial de la Norma. Fuente: Norma Técnica para la Estandarización de los Servicios de Llamadas de Emergencia 9-1-1, v2.0, SESNSP: '
              : 'A working aid for reviewing a system or preparing a tender’s technical annex; it does not replace the official text of the standard. Source: Norma Técnica 9-1-1 v2.0, SESNSP: '}
            <span style={{ wordBreak: 'break-all' }}>{SOURCE}</span>
            <br />
            {es ? 'Guía completa: ' : 'Full guide: '}kabatone.com{es ? '/es' : ''}/resources/norma-tecnica-911
          </div>
        </section>
      </div>
    </div>
  )
}
