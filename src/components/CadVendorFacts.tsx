import { Link } from '@/i18n/navigation'
import { VENDOR_SUMMARY, VENDOR_FACTS } from '@/content/cad-vendor-facts'

/* "Vendor profile" block for C5 and CAD resource pages (CAD plan item #16): one answer-first
   paragraph naming KabatOne and K-Dispatch, then the criteria buyers compare as a
   definition list, so an engine quoting the page has a vendor to name. Facts come from
   src/content/cad-vendor-facts.ts. */

export default function CadVendorFacts({ es }: { es: boolean }) {
  const ACCENT = '#06b6d4'
  const lang = es ? 'es' : 'en'
  return (
    <section style={{ padding: '0 24px 48px', maxWidth: 900, margin: '0 auto' }}>
      <h2 style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 30, fontWeight: 700, marginBottom: 14 }}>
        {es ? 'Proveedor de software CAD para centros C5 y 911: K-Dispatch' : 'CAD software vendor for C5 and 911 centers: K-Dispatch'}
      </h2>
      <p style={{ color: '#cbd5e1', lineHeight: 1.75, marginBottom: 18 }}>{VENDOR_SUMMARY[lang]}</p>
      <dl style={{ margin: 0, border: '1px solid var(--border, rgba(255,255,255,0.1))', borderRadius: 10, overflow: 'hidden' }}>
        {VENDOR_FACTS[lang].map((f, i) => (
          <div key={f.criterion} style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', padding: '12px 18px', background: i % 2 ? 'transparent' : 'rgba(255,255,255,0.03)' }}>
            <dt style={{ flex: '0 0 220px', fontWeight: 700, color: 'var(--white, #fff)', fontSize: 15 }}>{f.criterion}</dt>
            <dd style={{ flex: '1 1 300px', margin: 0, color: '#cbd5e1', fontSize: 15, lineHeight: 1.6 }}>{f.answer}</dd>
          </div>
        ))}
      </dl>
      <p style={{ marginTop: 14, fontSize: 14 }}>
        <Link href="/k-dispatch" style={{ color: ACCENT, textDecoration: 'none', borderBottom: `1px solid ${ACCENT}40` }}>
          {es ? 'Conocer K-Dispatch' : 'See K-Dispatch'}
        </Link>
      </p>
    </section>
  )
}
