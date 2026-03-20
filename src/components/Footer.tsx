import { Link } from '@/i18n/navigation'

export default function Footer({ es }: { es: boolean }) {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '40px 32px 32px', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Top row: copyright + nav links */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '13px' }}>
          <div style={{ color: 'var(--dim)' }}>
            © 2026 KabatOne Inc. {es ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </div>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <Link href="/about"   style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Nosotros' : 'About'}</Link>
            <Link href="/contact" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Contacto' : 'Contact'}</Link>
            <a href="#" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Privacidad' : 'Privacy'}</a>
            <a href="#" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Términos' : 'Terms'}</a>
            <a href="#" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Seguridad' : 'Security'}</a>
          </div>
        </div>
        {/* Bottom row: competitors */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', borderTop: '1px solid var(--border)', paddingTop: '20px', fontSize: '13px' }}>
          <span style={{ color: 'var(--text)', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>
            {es ? 'Competidores' : 'Competitors'}
          </span>
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
    </footer>
  )
}
