'use client'

/* The redesign's site header — one component, used by every redesigned page.

   The homepage and the solution pages previously rendered two different navs:
   the homepage's (real KabatOne logo lockup, uppercase items, EN/ES switch) and
   a second one in HeroLabChrome with a placeholder "1K" badge and sentence-case
   items. The header visibly changed as you moved between pages. This is the
   homepage version, promoted to the shared one.

   Links run through pv() so navigation stays inside the preview while the
   redesign lives under /hero-lab. */

import { Link, usePathname } from '@/i18n/navigation'
import { pv } from './preview-links'

export function Arrow({ direction = 'right' }: { direction?: 'left' | 'right' | 'down' }) {
  const path = direction === 'down' ? 'M3 5.5 7 9l4-3.5' : direction === 'left' ? 'M11 7H3m4-4L3 7l4 4' : 'M3 7h8M7 3l4 4-4 4'
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d={path} stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BrandLockup() {
  return (
    <span className="hll-brand-lockup" aria-hidden="true">
      <span className="hll-brand-logo-mask" />
    </span>
  )
}

const MODULE_LINKS = [
  { href: '/k-safety', label: 'K-Safety', color: '#2563eb' },
  { href: '/k-dispatch', label: 'K-Dispatch', color: '#ef4444' },
  { href: '/k-traffic', label: 'K-Traffic', color: '#06b6d4' },
  { href: '/k-video', label: 'K-Video', color: '#8b5cf6' },
  { href: '/k-connect', label: 'K-Connect', color: '#22c55e' },
] as const

/* Stadiums restored. It was absent here while this header only served the
   redesigned routes, but /industries/stadiums is a real page that the previous
   site-wide nav linked to — promoting this header without it would have
   orphaned that page from navigation entirely.

   Two industry pages, /industries/logistics and /industries/retail, are linked
   by neither this header nor the one it replaces. That predates this change,
   so it is left alone rather than silently fixed here. */
const INDUSTRY_LINKS = [
  { href: '/industries/public-safety', en: 'Public Safety', es: 'Seguridad Pública' },
  { href: '/industries/municipalities', en: 'Municipalities', es: 'Municipios' },
  { href: '/industries/airport', en: 'Airports', es: 'Aeropuertos' },
  { href: '/industries/ports', en: 'Ports', es: 'Puertos' },
  { href: '/industries/stadiums', en: 'Stadiums & Venues', es: 'Estadios y Recintos' },
] as const

export default function HeroLabHeader({ es }: { es: boolean }) {
  const language = es ? 'es' : 'en'
  const demo = es ? 'Solicita una Demo' : 'Book a Demo'

  /* The language switch has to stay on the current page. It previously pointed
     at pv('/'), which was survivable when this header only served the homepage
     and five solution pages, but as the site-wide header it would have meant
     switching to Spanish from /contact, /vs/axon or any resources article threw
     you back to the homepage — on every page of the site.

     usePathname() from next-intl returns the path WITHOUT the locale prefix,
     which is exactly what <Link locale> wants, so this stays a real anchor with
     a correct href: no JS needed to work, and the CSS (.hll-language a) keeps
     matching, which a <button> would have broken. */
  const here = usePathname()

  return (
    <nav className="hll-nav" aria-label={es ? 'Navegación principal' : 'Primary navigation'}>
      <Link href={pv('/')} className="hll-nav-logo" aria-label={es ? 'Inicio de KabatOne' : 'KabatOne home'}>
        <BrandLockup />
      </Link>

      {/* A shared name makes these four mutually exclusive: opening one closes
          the others, enforced by the browser — no JS, no click-outside handler.
          Without it every dropdown could be open at once and the panels
          overlapped. Same mechanism as the FAQ accordion in SolutionPage. */}
      <div className="hll-nav-links">
        <details className="hll-nav-menu" name="hll-nav">
          <summary>{es ? 'Soluciones' : 'Solutions'}<Arrow direction="down" /></summary>
          <div className="hll-nav-dropdown">
            {MODULE_LINKS.map((item) => (
              <Link href={pv(item.href)} key={item.href}>
                <span style={{ background: item.color }} />{item.label}
              </Link>
            ))}
          </div>
        </details>
        <details className="hll-nav-menu" name="hll-nav">
          <summary>{es ? 'Industrias' : 'Industries'}<Arrow direction="down" /></summary>
          <div className="hll-nav-dropdown">
            {INDUSTRY_LINKS.map((item) => <Link href={item.href} key={item.href}>{item[language]}</Link>)}
          </div>
        </details>
        <details className="hll-nav-menu" name="hll-nav">
          <summary>{es ? 'Recursos' : 'Resources'}<Arrow direction="down" /></summary>
          <div className="hll-nav-dropdown">
            <Link href="/resources">{es ? 'Centro de Recursos' : 'Resource Center'}</Link>
            <Link href="/demo">{es ? 'Demo Interactiva' : 'Interactive Demo'}</Link>
            <Link href="/simulator">{es ? 'Simulador de Incidentes' : 'Incident Simulator'}</Link>
          </div>
        </details>
        <details className="hll-nav-menu" name="hll-nav">
          <summary>{es ? 'Empresa' : 'Company'}<Arrow direction="down" /></summary>
          <div className="hll-nav-dropdown hll-nav-dropdown--right">
            <Link href="/about">{es ? 'Nosotros' : 'About'}</Link>
            <Link href="/contact">{es ? 'Contacto' : 'Contact'}</Link>
          </div>
        </details>
      </div>

      <div className="hll-nav-actions">
        <div className="hll-language" aria-label={es ? 'Idioma' : 'Language'}>
          <Link href={here} locale="en" aria-current={!es ? 'page' : undefined}>EN</Link>
          <Link href={here} locale="es" aria-current={es ? 'page' : undefined}>ES</Link>
        </div>
        <Link className="hll-nav-cta" href="/contact">{demo}<Arrow /></Link>
      </div>

      <details className="hll-mobile-menu">
        {/* The name has to change with state, and aria-label cannot — it is a
            static string, so it stayed "Open menu" while the menu was open.
            Two visually-hidden labels swapped by [open] give the summary the
            right accessible name in both states. <details> already exposes the
            expanded state natively, so no aria-expanded is needed. */}
        <summary>
          <span className="hll-sr-only hll-label-open">{es ? 'Abrir menú' : 'Open menu'}</span>
          <span className="hll-sr-only hll-label-close">{es ? 'Cerrar menú' : 'Close menu'}</span>
          <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
        </summary>
        {/* Nested disclosures, not flat links.

            Each of these four used to be a single link into the *first* item of
            its section: Solutions went to /k-safety, Industries to
            /industries/public-safety. On desktop the same four are dropdowns
            listing everything, so on a phone four of the five solution pages and
            four of the five industry pages were unreachable from the menu — the
            pages existed and sat in the sitemap, but nothing in the mobile UI
            led to them.

            Same <details> mechanism as the desktop bar, with a shared `name` so
            opening one section closes the others — enforced by the browser, no
            JS and no click-outside handler. The lists reuse the same
            MODULE_LINKS / INDUSTRY_LINKS constants the desktop dropdowns read,
            so the two navigations cannot drift apart. */}
        <div className="hll-mobile-menu-panel">
          <details className="hll-mobile-section" name="hll-mobile-nav">
            <summary>{es ? 'Soluciones' : 'Solutions'}<Arrow direction="down" /></summary>
            <div className="hll-mobile-sublinks">
              {MODULE_LINKS.map((item) => (
                <Link href={pv(item.href)} key={item.href}>
                  <span style={{ background: item.color }} />{item.label}
                </Link>
              ))}
            </div>
          </details>

          <details className="hll-mobile-section" name="hll-mobile-nav">
            <summary>{es ? 'Industrias' : 'Industries'}<Arrow direction="down" /></summary>
            <div className="hll-mobile-sublinks">
              {INDUSTRY_LINKS.map((item) => (
                <Link href={item.href} key={item.href}>{item[language]}</Link>
              ))}
            </div>
          </details>

          <details className="hll-mobile-section" name="hll-mobile-nav">
            <summary>{es ? 'Recursos' : 'Resources'}<Arrow direction="down" /></summary>
            <div className="hll-mobile-sublinks">
              <Link href="/resources">{es ? 'Centro de Recursos' : 'Resource Center'}</Link>
              <Link href="/demo">{es ? 'Demo Interactiva' : 'Interactive Demo'}</Link>
              <Link href="/simulator">{es ? 'Simulador de Incidentes' : 'Incident Simulator'}</Link>
            </div>
          </details>

          <details className="hll-mobile-section" name="hll-mobile-nav">
            <summary>{es ? 'Empresa' : 'Company'}<Arrow direction="down" /></summary>
            <div className="hll-mobile-sublinks">
              <Link href="/about">{es ? 'Nosotros' : 'About'}</Link>
              <Link href="/contact">{es ? 'Contacto' : 'Contact'}</Link>
            </div>
          </details>

          <div className="hll-mobile-languages">
            <Link href={here} locale="en">EN</Link><Link href={here} locale="es">ES</Link>
          </div>
          <Link className="hll-nav-cta" href="/contact">{demo}<Arrow /></Link>
        </div>
      </details>
    </nav>
  )
}
