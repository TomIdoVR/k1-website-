import { Link } from '@/i18n/navigation'

export default function Footer({ es }: { es: boolean }) {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '48px 32px 32px', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ fontSize: '13px', color: 'var(--dim)' }}>
          © 2026 KabatOne Inc. {es ? 'Todos los derechos reservados.' : 'All rights reserved.'}
        </div>
        <div style={{ display: 'flex', gap: '32px', fontSize: '13px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <Link href="/about" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Nosotros' : 'About'}</Link>
          <Link href="/contact" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Contacto' : 'Contact'}</Link>
          <div>
            <div style={{ color: 'var(--text)', fontWeight: 600, marginBottom: '8px', fontSize: '12px' }}>
              {es ? 'Competidores' : 'Competitors'}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Link href="/vs/genetec"   style={{ color: 'var(--dim)', textDecoration: 'none' }}>vs. Genetec</Link>
              <Link href="/vs/milestone" style={{ color: 'var(--dim)', textDecoration: 'none' }}>vs. Milestone</Link>
              <Link href="/vs/vms"       style={{ color: 'var(--dim)', textDecoration: 'none' }}>vs. VMS</Link>
              <Link href="/vs/motorola"  style={{ color: 'var(--dim)', textDecoration: 'none' }}>vs. Motorola</Link>
              <Link href="/vs/hexagon"   style={{ color: 'var(--dim)', textDecoration: 'none' }}>vs. Hexagon</Link>
              <Link href="/vs/mark43"    style={{ color: 'var(--dim)', textDecoration: 'none' }}>vs. Mark43</Link>
              <Link href="/vs/axon"      style={{ color: 'var(--dim)', textDecoration: 'none' }}>vs. Axon</Link>
              <Link href="/vs/carbyne"   style={{ color: 'var(--dim)', textDecoration: 'none' }}>vs. Carbyne</Link>
              <Link href="/vs/cad"       style={{ color: 'var(--dim)', textDecoration: 'none' }}>vs. CAD</Link>
            </div>
          </div>
          <a href="#" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Privacidad' : 'Privacy'}</a>
          <a href="#" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Términos' : 'Terms'}</a>
          <a href="#" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Seguridad' : 'Security'}</a>
        </div>
      </div>
    </footer>
  )
}
