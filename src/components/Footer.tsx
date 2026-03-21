import { Link } from '@/i18n/navigation'

export default function Footer({ es }: { es: boolean }) {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '48px 32px 40px', background: 'var(--bg-2)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
        {/* Left: copyright */}
        <div style={{ fontSize: '13px', color: 'var(--dim)' }}>
          © 2026 KabatOne Inc.<br />{es ? 'Todos los derechos reservados.' : 'All rights reserved.'}
        </div>
        {/* Right: columns grouped together */}
        <div style={{ display: 'flex', gap: '48px' }}>
          {/* Company column */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
              {es ? 'Empresa' : 'Company'}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <Link href="/about"   style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Nosotros' : 'About'}</Link>
              <Link href="/contact" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Contacto' : 'Contact'}</Link>
              <a href="#" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Privacidad' : 'Privacy'}</a>
              <a href="#" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Términos' : 'Terms'}</a>
              <a href="#" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Seguridad' : 'Security'}</a>
            </div>
          </div>
          {/* Integrations column */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
              {es ? 'Integraciones' : 'Integrations'}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <Link href="/integrations/lpr"              style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Reconocimiento de Placas (LPR)' : 'License Plate Recognition'}</Link>
              <Link href="/integrations/face-recognition" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Reconocimiento Facial' : 'Face Recognition'}</Link>
              <Link href="/integrations/sensor-fusion"    style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Fusión de Sensores' : 'Sensor Fusion'}</Link>
              <Link href="/integrations/access-control"   style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Control de Acceso' : 'Access Control'}</Link>
              <Link href="/integrations/drones"           style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Drones (UAV/UAS)' : 'Drones (UAV/UAS)'}</Link>
              <Link href="/integrations/panic-buttons"    style={{ color: 'var(--dim)', textDecoration: 'none' }}>{es ? 'Botones de Pánico' : 'Panic Buttons'}</Link>
            </div>
          </div>
          {/* Competitors column */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
              {es ? 'Competidores' : 'Competitors'}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <Link href="/vs/genetec"   style={{ color: 'var(--dim)', textDecoration: 'none' }}>vs. Genetec</Link>
              <Link href="/vs/milestone" style={{ color: 'var(--dim)', textDecoration: 'none' }}>vs. Milestone</Link>
              <Link href="/vs/vms"       style={{ color: 'var(--dim)', textDecoration: 'none' }}>vs. VMS</Link>
              <Link href="/vs/motorola"  style={{ color: 'var(--dim)', textDecoration: 'none' }}>vs. Motorola</Link>
              <Link href="/vs/hexagon"   style={{ color: 'var(--dim)', textDecoration: 'none' }}>vs. Hexagon</Link>
              <Link href="/vs/mark43"    style={{ color: 'var(--dim)', textDecoration: 'none' }}>vs. Mark43</Link>
              <Link href="/vs/axon"      style={{ color: 'var(--dim)', textDecoration: 'none' }}>vs. Axon</Link>
              <Link href="/vs/carbyne"    style={{ color: 'var(--dim)', textDecoration: 'none' }}>vs. Carbyne</Link>
              <Link href="/vs/cad"        style={{ color: 'var(--dim)', textDecoration: 'none' }}>vs. CAD</Link>
              <Link href="/vs/fusus"      style={{ color: 'var(--dim)', textDecoration: 'none' }}>vs. Fusus</Link>
              <Link href="/vs/prepared911" style={{ color: 'var(--dim)', textDecoration: 'none' }}>vs. Prepared 911</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
