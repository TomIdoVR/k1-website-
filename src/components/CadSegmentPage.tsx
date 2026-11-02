import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CadLeadForm from '@/components/CadLeadForm'
import { Link } from '@/i18n/navigation'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

/* Shared layout for CAD segment pages (police, fire & EMS; CAD plan item #26). Each page
   passes its own copy. "How K-Dispatch handles it" may only use the approved CAD facts
   (call handling and dispatch in one platform, AI Co-Pilot, caller location, map + video +
   sensors, multi-agency, apps, cloud/on-premise/hybrid, multi-language, Trusted by C5 CDMX)
   -- no performance figures. Hrefs are bare paths; the locale-aware Link adds /es. */

export type SegmentReq = { title: string; body: string; ask: string }
export type SegmentCopy = {
  slug: string
  source: string
  eyebrow: string
  h1a: string
  h1b: string
  intro: string
  problemTitle: string
  problem: string
  reqTitle: string
  reqs: SegmentReq[]
  /** Label before each req's `ask` line; defaults to "Ask the vendor". */
  askLabel?: string
  howTitle: string
  how: string[]
  faqTitle: string
  faqs: { question: string; answer: string }[]
  related: { href: string; label: string }[]
  breadcrumb: string
  articleHeadline: string
  articleDescription: string
}

export default function CadSegmentPage({ es, c }: { es: boolean; c: SegmentCopy }) {
  const ACCENT = '#06b6d4'
  const base = 'https://kabatone.com' + (es ? '/es' : '')
  const url = `${base}/resources/${c.slug}`
  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es' : 'https://kabatone.com/' },
    { name: es ? 'Recursos' : 'Resources', url: `${base}/resources` },
    { name: c.breadcrumb, url },
  ]
  const card = { background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border, rgba(255,255,255,0.1))', borderRadius: 10, padding: '18px 20px' } as const
  const h2 = { fontFamily: 'var(--font-barlow-condensed)', fontSize: 30, fontWeight: 700 } as const
  const wrap = { padding: '0 24px 48px', maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 14 } as const

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(c.articleHeadline, c.articleDescription, url, '2026-11-02')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(c.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <Nav />
      <main style={{ background: 'var(--bg)', color: 'var(--white)', fontFamily: 'var(--font-space-grotesk)' }}>
        <section style={{ padding: '80px 24px 40px', maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.3)', borderRadius: 6, padding: '4px 14px', fontSize: 12, color: ACCENT, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            {c.eyebrow}
          </div>
          <h1 style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 'clamp(36px, 6vw, 58px)', fontWeight: 700, lineHeight: 1.08, marginBottom: 20 }}>
            {c.h1a} <span style={{ color: ACCENT }}>{c.h1b}</span>
          </h1>
          <p style={{ fontSize: 'clamp(16px, 2vw, 19px)', color: '#94a3b8', lineHeight: 1.7, maxWidth: 760, marginBottom: 24 }}>{c.intro}</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#contacto" style={{ background: ACCENT, color: '#0f1724', padding: '12px 24px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: 15 }}>
              {es ? 'Hablar con un especialista' : 'Talk to a specialist'}
            </a>
            <Link href="/k-dispatch" style={{ border: `1px solid ${ACCENT}`, color: ACCENT, padding: '12px 24px', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>
              {es ? 'Conocer K-Dispatch' : 'See K-Dispatch'}
            </Link>
          </div>
        </section>

        <section style={wrap}>
          <h2 style={h2}>{c.problemTitle}</h2>
          <p style={{ color: '#cbd5e1', lineHeight: 1.75 }}>{c.problem}</p>
        </section>

        <section style={wrap}>
          <h2 style={h2}>{c.reqTitle}</h2>
          {c.reqs.map((r) => (
            <div key={r.title} style={{ ...card, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <h3 style={{ fontSize: 17, fontWeight: 700 }}>{r.title}</h3>
              <p style={{ color: '#cbd5e1', lineHeight: 1.65 }}>{r.body}</p>
              <p style={{ fontSize: 14, color: '#94a3b8' }}><strong style={{ color: '#cbd5e1' }}>{c.askLabel ?? (es ? 'Pregunta al proveedor: ' : 'Ask the vendor: ')}</strong>{r.ask}</p>
            </div>
          ))}
        </section>

        <section style={wrap}>
          <h2 style={h2}>{c.howTitle}</h2>
          <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8, color: '#cbd5e1', lineHeight: 1.65 }}>
            {c.how.map((h) => <li key={h}>{h}</li>)}
          </ul>
        </section>

        <section style={wrap}>
          <h2 style={h2}>{c.faqTitle}</h2>
          {c.faqs.map((f) => (
            <div key={f.question} style={card}>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{f.question}</h3>
              <p style={{ color: '#cbd5e1', lineHeight: 1.7 }}>{f.answer}</p>
            </div>
          ))}
        </section>

        <CadLeadForm es={es} source={c.source} />

        <section style={{ padding: '0 24px 64px', maxWidth: 900, margin: '0 auto', display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: 14 }}>
          {c.related.map((l) => (
            <Link key={l.href} href={l.href} style={{ color: ACCENT, textDecoration: 'none', borderBottom: `1px solid ${ACCENT}40` }}>{l.label}</Link>
          ))}
        </section>
      </main>
      <Footer es={es} />
    </>
  )
}
