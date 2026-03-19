import { Link } from '@/i18n/navigation'

export default function Footer({ es }: { es: boolean }) {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '48px 32px 32px', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ fontSize: '13px', color: 'var(--dim)' }}>
          © 2026 KabatOne Inc. {es ? 'Todos los derechos reservados.' : 'All rights reserved.'}
        </div>
        <div style={{ display: 'flex', gap: '24px', fontSize: '13px' }}>
          <Link href="/about" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Nosotros' : 'About'}</Link>
          <Link href="/contact" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Contacto' : 'Contact'}</Link>
        </div>
      </div>
    </footer>
  )
}
