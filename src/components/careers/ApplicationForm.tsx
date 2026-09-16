'use client'

import { useState, FormEvent } from 'react'
import { trackLead } from '@/lib/analytics'
import { APPLY_EMAIL } from '@/content/jobs'

/**
 * Job application form. Posts to /api/careers/apply, which fans the submission
 * out to Slack and email.
 *
 * Not Formspree: its free tier caps at 50 submissions/month, offers no Slack
 * integration on any tier, and gates multiple recipients and file uploads
 * behind paid plans. Routing is configured by environment variables on the
 * route — see src/app/api/careers/apply/route.ts.
 */
const ENDPOINT = '/api/careers/apply'

const inputStyle: React.CSSProperties = {
  background: 'var(--dropdown-bg)',
  border: '1px solid var(--border)',
  color: 'var(--white)',
  borderRadius: '8px',
  padding: '12px 16px',
  fontFamily: 'Space Grotesk, sans-serif',
  fontSize: '0.9rem',
  outline: 'none',
  width: '100%',
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'DM Mono, monospace',
  fontSize: '10.5px',
  fontWeight: 500,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'var(--dim)',
  display: 'block',
  marginBottom: '8px',
}

const fieldWrap: React.CSSProperties = { marginBottom: '18px' }

export default function ApplicationForm({
  es,
  roleTitle,
  roleSlug,
}: {
  es: boolean
  roleTitle: string
  roleSlug: string
}) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const t = {
    name: es ? 'Nombre completo' : 'Full name',
    email: es ? 'Correo electrónico' : 'Email',
    phone: es ? 'Teléfono (opcional)' : 'Phone (optional)',
    linkedin: es ? 'LinkedIn o portafolio' : 'LinkedIn or portfolio',
    cvLink: es ? 'Enlace a tu CV' : 'Link to your CV',
    cvHint: es
      ? 'Google Drive, Dropbox o cualquier enlace público'
      : 'Google Drive, Dropbox, or any shareable link',
    location: es ? 'Dónde vives' : 'Where you’re based',
    message: es ? 'Cuéntanos qué has construido' : 'Tell us what you’ve built',
    messageHint: es
      ? 'Unas líneas bastan. Nos interesa el sistema del que estás más orgulloso.'
      : 'A few lines is plenty. We care about the system you’re proudest of.',
    submit: es ? 'Enviar candidatura' : 'Send application',
    submitting: es ? 'Enviando…' : 'Sending…',
    successH: es ? '¡Candidatura enviada!' : 'Application sent!',
    successP: es
      ? 'Gracias. La leemos toda y respondemos dentro de unos días hábiles.'
      : 'Thank you. We read every one and reply within a few business days.',
    errorH: es ? 'No se pudo enviar' : 'That didn’t send',
    errorP: es ? 'Escríbenos directamente a' : 'Write to us directly at',
    required: es ? 'obligatorio' : 'required',
  }

  const mailto = `mailto:${APPLY_EMAIL}?subject=` +
    encodeURIComponent(`${es ? 'Candidatura' : 'Application'}: ${roleTitle}`)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const formData = new FormData(e.currentTarget)

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      })
      if (res.ok) {
        trackLead('generate_lead', { form_id: 'careers_application', role: roleSlug })
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="car-card" style={{ textAlign: 'center', padding: '48px 28px' }}>
        <div style={{
          width: '56px', height: '56px', borderRadius: '50%', margin: '0 auto 18px',
          background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '1.6rem', color: 'var(--white)', marginBottom: '10px' }}>
          {t.successH}
        </div>
        <p style={{ color: 'var(--dim)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '380px', margin: '0 auto' }}>
          {t.successP}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="car-card" style={{ padding: '32px 30px' }}>
      {/* Context for whoever reads this in Slack or email. */}
      <input type="hidden" name="role" value={roleTitle} />
      <input type="hidden" name="role_slug" value={roleSlug} />
      <input type="hidden" name="locale" value={es ? 'es' : 'en'} />
      {/* Honeypot: hidden from people, so anything filling it is a bot. */}
      <input
        type="text" name="company_website" tabIndex={-1} autoComplete="off"
        aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
      />

      <div style={fieldWrap}>
        <label style={labelStyle} htmlFor="af-name">{t.name}</label>
        <input id="af-name" name="name" type="text" required style={inputStyle} autoComplete="name" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px' }}>
        <div style={fieldWrap}>
          <label style={labelStyle} htmlFor="af-email">{t.email}</label>
          <input id="af-email" name="email" type="email" required style={inputStyle} autoComplete="email" />
        </div>
        <div style={fieldWrap}>
          <label style={labelStyle} htmlFor="af-phone">{t.phone}</label>
          <input id="af-phone" name="phone" type="tel" style={inputStyle} autoComplete="tel" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px' }}>
        <div style={fieldWrap}>
          <label style={labelStyle} htmlFor="af-linkedin">{t.linkedin}</label>
          <input id="af-linkedin" name="linkedin" type="url" placeholder="https://" style={inputStyle} />
        </div>
        <div style={fieldWrap}>
          <label style={labelStyle} htmlFor="af-location">{t.location}</label>
          <input id="af-location" name="location" type="text" style={inputStyle} />
        </div>
      </div>

      <div style={fieldWrap}>
        <label style={labelStyle} htmlFor="af-cv-link">{t.cvLink}</label>
        <input id="af-cv-link" name="cv_link" type="url" required placeholder="https://" style={inputStyle} />
        <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '7px' }}>{t.cvHint}</p>
      </div>

      <div style={fieldWrap}>
        <label style={labelStyle} htmlFor="af-message">{t.message}</label>
        <textarea id="af-message" name="message" rows={5} style={{ ...inputStyle, resize: 'vertical' }} />
        <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '7px' }}>{t.messageHint}</p>
      </div>

      {status === 'error' && (
        <p style={{ fontSize: '14px', color: '#f87171', marginBottom: '16px' }}>
          <strong>{t.errorH}.</strong> {t.errorP}{' '}
          <a href={mailto} style={{ color: 'var(--blue-light)', textDecoration: 'underline' }}>{APPLY_EMAIL}</a>
        </p>
      )}

      <button type="submit" className="car-btn" disabled={status === 'submitting'} style={{ border: 'none', cursor: status === 'submitting' ? 'default' : 'pointer', opacity: status === 'submitting' ? 0.7 : 1 }}>
        {status === 'submitting' ? t.submitting : t.submit}
        {status !== 'submitting' && <span className="car-arrow">→</span>}
      </button>
    </form>
  )
}
