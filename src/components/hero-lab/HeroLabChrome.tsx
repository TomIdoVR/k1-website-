/* Nav + footer for the redesigned pages.

   v2.298 wrapped the solution pages in the live site's <Nav> and <Footer> to
   restore internal links for SEO. That worked for links but dragged the OLD
   visual language onto the new pages — a dark legacy nav bar above the light
   redesign, which read as "this is the old site". These are redesign-native
   replacements carrying the same link inventory, so the SEO fix holds and the
   pages stay visually consistent.

   Link parity with src/components/Footer.tsx is deliberate: same 20 destinations
   (about, contact, privacy, 6 integrations, 11 comparison pages), plus the five
   product pages which the live footer omits. */

import { Link } from '@/i18n/navigation'
import { pv } from './preview-links'

type Loc = { en: string; es: string }
const S = (en: string, es: string): Loc => ({ en, es })

const PRODUCTS = [
  { href: '/k-safety', label: 'K-Safety', color: '#1858f5' },
  { href: '/k-dispatch', label: 'K-Dispatch', color: '#0ea5e9' },
  { href: '/k-video', label: 'K-Video', color: '#22b8d4' },
  { href: '/k-traffic', label: 'K-Traffic', color: '#f59e0b' },
  { href: '/k-connect', label: 'K-Connect', color: '#22c55e' },
]

const INDUSTRIES = [
  { href: '/industries/public-safety', t: S('Public Safety', 'Seguridad Pública') },
  { href: '/industries/municipalities', t: S('Municipalities', 'Municipios') },
  { href: '/industries/airport', t: S('Airports', 'Aeropuertos') },
  { href: '/industries/ports', t: S('Ports', 'Puertos') },
  { href: '/industries/stadiums', t: S('Stadiums', 'Estadios') },
]

const INTEGRATIONS = [
  { href: '/integrations/lpr', t: S('License Plate Recognition', 'Reconocimiento de Placas') },
  { href: '/integrations/face-recognition', t: S('Face Recognition', 'Reconocimiento Facial') },
  { href: '/integrations/sensor-fusion', t: S('Sensor Fusion', 'Fusión de Sensores') },
  { href: '/integrations/access-control', t: S('Access Control', 'Control de Acceso') },
  { href: '/integrations/drones', t: S('Drones (UAV/UAS)', 'Drones (UAV/UAS)') },
  { href: '/integrations/panic-buttons', t: S('Panic Buttons', 'Botones de Pánico') },
]

const COMPARISONS = [
  { href: '/vs/genetec', label: 'Genetec' }, { href: '/vs/milestone', label: 'Milestone' },
  { href: '/vs/vms', label: 'VMS' }, { href: '/vs/motorola', label: 'Motorola' },
  { href: '/vs/hexagon', label: 'Hexagon' }, { href: '/vs/mark43', label: 'Mark43' },
  { href: '/vs/axon', label: 'Axon' }, { href: '/vs/carbyne', label: 'Carbyne' },
  { href: '/vs/cad', label: 'CAD' }, { href: '/vs/fusus', label: 'Fusus' },
  { href: '/vs/prepared911', label: 'Prepared 911' },
]

const COMPANY = [
  { href: '/about', t: S('About', 'Nosotros') },
  { href: '/contact', t: S('Contact', 'Contacto') },
  { href: '/resources', t: S('Resources', 'Recursos') },
  { href: '/privacy', t: S('Privacy', 'Privacidad') },
]

function Chevron() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 5.5 7 9l4-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function HeroLabNav({ es }: { es: boolean }) {
  const lang = es ? 'es' : 'en'
  return (
    <nav className="hlc-nav" aria-label={es ? 'Navegación principal' : 'Primary navigation'}>
      <div className="hlc-nav-inner">
        <Link href={pv('/')} className="hlc-logo" aria-label={es ? 'Inicio de KabatOne' : 'KabatOne home'}>
          <span className="hlc-logo-mark" aria-hidden="true">1K</span>
          <span className="hlc-logo-word">KABAT ONE</span>
        </Link>

        <div className="hlc-nav-links">
          <details className="hlc-menu">
            <summary>{es ? 'Soluciones' : 'Solutions'}<Chevron /></summary>
            <div className="hlc-dropdown">
              {PRODUCTS.map((p) => (
                <Link href={pv(p.href)} key={p.href}><span className="hlc-dot" style={{ background: p.color }} />{p.label}</Link>
              ))}
            </div>
          </details>
          <details className="hlc-menu">
            <summary>{es ? 'Industrias' : 'Industries'}<Chevron /></summary>
            <div className="hlc-dropdown">
              {INDUSTRIES.map((i) => <Link href={i.href} key={i.href}>{i.t[lang]}</Link>)}
            </div>
          </details>
          <Link className="hlc-nav-link" href="/resources">{es ? 'Recursos' : 'Resources'}</Link>
          <Link className="hlc-nav-link" href="/about">{es ? 'Empresa' : 'Company'}</Link>
        </div>

        <Link className="hlc-nav-cta" href="/contact">{es ? 'Solicitar Demo' : 'Book a Demo'}</Link>
      </div>
    </nav>
  )
}

export function HeroLabFooter({ es }: { es: boolean }) {
  const lang = es ? 'es' : 'en'
  return (
    <footer className="hlc-footer">
      <div className="hlc-footer-inner">
        <div className="hlc-footer-brand">
          <span className="hlc-logo-mark" aria-hidden="true">1K</span>
          <p className="hlc-footer-tag">
            {es ? 'La plataforma unificada de seguridad pública.' : 'The unified public safety platform.'}
          </p>
        </div>

        <div className="hlc-footer-cols">
          <div className="hlc-footer-col">
            <h3>{es ? 'Soluciones' : 'Solutions'}</h3>
            {PRODUCTS.map((p) => <Link href={pv(p.href)} key={p.href}>{p.label}</Link>)}
          </div>
          <div className="hlc-footer-col">
            <h3>{es ? 'Industrias' : 'Industries'}</h3>
            {INDUSTRIES.map((i) => <Link href={i.href} key={i.href}>{i.t[lang]}</Link>)}
          </div>
          <div className="hlc-footer-col">
            <h3>{es ? 'Integraciones' : 'Integrations'}</h3>
            {INTEGRATIONS.map((i) => <Link href={i.href} key={i.href}>{i.t[lang]}</Link>)}
          </div>
          <div className="hlc-footer-col">
            <h3>{es ? 'Comparativas' : 'Comparativas'}</h3>
            {COMPARISONS.map((c) => <Link href={c.href} key={c.href}>vs. {c.label}</Link>)}
          </div>
          <div className="hlc-footer-col">
            <h3>{es ? 'Empresa' : 'Company'}</h3>
            {COMPANY.map((c) => <Link href={c.href} key={c.href}>{c.t[lang]}</Link>)}
          </div>
        </div>
      </div>
      <div className="hlc-footer-base">
        <span>© 2026 KabatOne Inc. {es ? 'Todos los derechos reservados.' : 'All rights reserved.'}</span>
      </div>
    </footer>
  )
}
