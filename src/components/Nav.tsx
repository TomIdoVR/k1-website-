'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { useLocale } from 'next-intl'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const solutions = [
    { href: '/k-safety', label: 'K-Safety', color: '#3b82f6' },
    { href: '/k-dispatch', label: 'K-Dispatch', color: '#ef4444' },
    { href: '/k-traffic', label: 'K-Traffic', color: '#06b6d4' },
    { href: '/k-video', label: 'K-Video', color: '#a855f7' },
    { href: '/k-connect', label: 'K-Connect', color: '#22c55e' },
  ]

  const industries = [
    { href: '/industries/public-safety', label: locale === 'es' ? 'Seguridad Publica' : 'Public Safety', color: '#3b82f6' },
    { href: '/industries/municipalities', label: locale === 'es' ? 'Municipios' : 'Municipalities', color: '#06b6d4' },
    { href: '/industries/airport', label: locale === 'es' ? 'Aeropuertos' : 'Airports', color: '#8b5cf6' },
    { href: '/industries/retail', label: 'Retail', color: '#f59e0b' },
    { href: '/industries/logistics', label: locale === 'es' ? 'Logistica' : 'Logistics', color: '#10b981' },
    { href: '/industries/ports', label: locale === 'es' ? 'Puertos' : 'Ports', color: '#0ea5e9' },
    { href: '/industries/stadiums', label: locale === 'es' ? 'Estadios y Recintos' : 'Stadiums & Venues', color: '#ef4444' },
  ]

  function switchLocale(next: string) {
    router.replace(pathname, { locale: next })
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 52px',
      background: 'var(--nav-bg)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border)',
      zIndex: 100,
    }}>
      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src="/images/logo.png"
          alt="KabatOne"
          width={160}
          height={27}
          priority
          style={{ height: 'auto' }}
        />
      </Link>

      {/* Desktop nav links */}
      <ul style={{
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
        listStyle: 'none',
        fontSize: '13px',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        color: 'var(--dim)',
      }} className="desktop-nav">
        {/* Solutions dropdown */}
        <li style={{ position: 'relative' }}
          onMouseEnter={() => setSolutionsOpen(true)}
          onMouseLeave={() => setSolutionsOpen(false)}>
          <button style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--dim)', fontSize: '13px', fontWeight: 500,
            textTransform: 'uppercase', letterSpacing: '0.06em',
            display: 'flex', alignItems: 'center', gap: '4px',
          }}>
            {locale === 'es' ? 'Soluciones' : 'Solutions'}
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {solutionsOpen && (
            <div style={{
              position: 'absolute', top: '100%', left: 0, paddingTop: '8px',
              minWidth: '180px', zIndex: 200,
            }}>
              <div style={{
                background: 'var(--dropdown-bg)',
                border: '1px solid var(--border-b)',
                borderRadius: '10px',
                padding: '8px',
                boxShadow: '0 20px 60px var(--shadow)',
              }}>
                {solutions.map((s) => (
                  <Link key={s.href} href={s.href} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '9px 12px', borderRadius: '7px',
                    color: 'var(--white)', textDecoration: 'none',
                    fontSize: '13px', fontWeight: 500,
                    textTransform: 'none', letterSpacing: 'normal',
                  }}>
                    <span style={{
                      width: '7px', height: '7px', borderRadius: '50%',
                      background: s.color, flexShrink: 0,
                    }} />
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </li>

        {/* Industries dropdown */}
        <li style={{ position: 'relative' }}
          onMouseEnter={() => setIndustriesOpen(true)}
          onMouseLeave={() => setIndustriesOpen(false)}>
          <button style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--dim)', fontSize: '13px', fontWeight: 500,
            textTransform: 'uppercase', letterSpacing: '0.06em',
            display: 'flex', alignItems: 'center', gap: '4px',
          }}>
            {locale === 'es' ? 'Industrias' : 'Industries'}
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {industriesOpen && (
            <div style={{
              position: 'absolute', top: '100%', left: 0, paddingTop: '8px',
              minWidth: '200px', zIndex: 200,
            }}>
              <div style={{
                background: 'var(--dropdown-bg)',
                border: '1px solid var(--border-b)',
                borderRadius: '10px',
                padding: '8px',
                boxShadow: '0 20px 60px var(--shadow)',
              }}>
                {industries.map((i) => (
                  <Link key={i.href} href={i.href} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '9px 12px', borderRadius: '7px',
                    color: 'var(--white)', textDecoration: 'none',
                    fontSize: '13px', fontWeight: 500,
                    textTransform: 'none', letterSpacing: 'normal',
                  }}>
                    <span style={{
                      width: '7px', height: '7px', borderRadius: '50%',
                      background: i.color, flexShrink: 0,
                    }} />
                    {i.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </li>

        <li><Link href="/resources" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{locale === 'es' ? 'Recursos' : 'Resources'}</Link></li>
        <li><Link href="/about" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{locale === 'es' ? 'Nosotros' : 'About'}</Link></li>
        <li><Link href="/contact" style={{ color: 'var(--dim)', textDecoration: 'none' }}>{locale === 'es' ? 'Contacto' : 'Contact'}</Link></li>

        {/* Language switcher */}
        <li style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border)', borderRadius: '6px', padding: '2px', gap: '2px' }}>
          <button
            onClick={() => switchLocale('en')}
            style={{
              background: locale === 'en' ? 'rgba(255,255,255,0.08)' : 'none',
              border: 'none', borderRadius: '4px', cursor: 'pointer',
              color: locale === 'en' ? 'var(--white)' : 'var(--muted)',
              fontSize: '11px', fontWeight: locale === 'en' ? 700 : 400,
              padding: '3px 8px', fontFamily: 'DM Mono, monospace', letterSpacing: '0.05em',
            }}>EN</button>
          <button
            onClick={() => switchLocale('es')}
            style={{
              background: locale === 'es' ? 'rgba(255,255,255,0.08)' : 'none',
              border: 'none', borderRadius: '4px', cursor: 'pointer',
              color: locale === 'es' ? 'var(--white)' : 'var(--muted)',
              fontSize: '11px', fontWeight: locale === 'es' ? 700 : 400,
              padding: '3px 8px', fontFamily: 'DM Mono, monospace', letterSpacing: '0.05em',
            }}>ES</button>
        </li>

        {/* CTA */}
        <li>
          <Link href="/contact" style={{
            background: 'var(--blue)',
            color: '#fff',
            padding: '9px 22px',
            borderRadius: '7px',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            boxShadow: '0 0 20px rgba(24,88,245,0.35)',
            display: 'inline-block',
          }}>
            {locale === 'es' ? 'Solicita una Demo' : 'Book a Demo'}
          </Link>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          flexDirection: 'column',
          gap: '5px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '4px',
        }}
        className="hamburger"
        aria-label="Toggle menu">
        <span style={{
          display: 'block', width: '22px', height: '2px',
          background: 'var(--white)',
          transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
          transition: 'transform 0.2s',
        }} />
        <span style={{
          display: 'block', width: '22px', height: '2px',
          background: 'var(--white)',
          opacity: menuOpen ? 0 : 1,
          transition: 'opacity 0.2s',
        }} />
        <span style={{
          display: 'block', width: '22px', height: '2px',
          background: 'var(--white)',
          transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
          transition: 'transform 0.2s',
        }} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '70px', left: 0, right: 0,
          background: 'var(--dropdown-bg)',
          borderBottom: '1px solid var(--border)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          zIndex: 99,
        }}>
          {solutions.map((s) => (
            <Link key={s.href} href={s.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: 'var(--white)', textDecoration: 'none', padding: '8px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: s.color }} />
              {s.label}
            </Link>
          ))}
          <hr style={{ borderColor: 'var(--border)', margin: '4px 0' }} />
          {industries.map((i) => (
            <Link key={i.href} href={i.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: 'var(--dim)', textDecoration: 'none', padding: '6px 0', fontSize: '14px' }}>
              {i.label}
            </Link>
          ))}
          <hr style={{ borderColor: 'var(--border)', margin: '4px 0' }} />
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/resources" onClick={() => setMenuOpen(false)} style={{ color: 'var(--dim)', textDecoration: 'none' }}>{locale === 'es' ? 'Recursos' : 'Resources'}</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} style={{ color: 'var(--dim)', textDecoration: 'none' }}>{locale === 'es' ? 'Nosotros' : 'About'}</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} style={{ color: 'var(--dim)', textDecoration: 'none' }}>{locale === 'es' ? 'Contacto' : 'Contact'}</Link>
          </div>
          <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
            <button onClick={() => switchLocale('en')} style={{ background: 'none', border: '1px solid var(--border)', borderRadius: '4px', color: locale === 'en' ? 'var(--white)' : 'var(--dim)', padding: '4px 10px', cursor: 'pointer' }}>EN</button>
            <button onClick={() => switchLocale('es')} style={{ background: 'none', border: '1px solid var(--border)', borderRadius: '4px', color: locale === 'es' ? 'var(--white)' : 'var(--dim)', padding: '4px 10px', cursor: 'pointer' }}>ES</button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
