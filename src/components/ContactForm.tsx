'use client'

import { useState, FormEvent } from 'react'

interface SelectOption {
  value: string
  label: string
}

interface ContactFormProps {
  es: boolean
  campaignSource?: string
  labels: {
    formTitle: string
    formSub: string
    labelName: string
    labelCompany: string
    labelEmail: string
    labelPhone: string
    labelInterest: string
    labelMessage: string
    placeholderName: string
    placeholderCompany: string
    placeholderEmail: string
    placeholderPhone: string
    placeholderMessage: string
    selectDefault: string
    btnSubmit: string
  }
  selectOptions: SelectOption[]
}

const FORMSPREE_URL = 'https://formspree.io/f/mjganywz'

// Submitted values stay in English so lead routing is consistent across locales
const COUNTRY_OPTIONS: { value: string; en: string; es: string }[] = [
  { value: 'Mexico', en: 'Mexico', es: 'México' },
  { value: 'Peru', en: 'Peru', es: 'Perú' },
  { value: 'Colombia', en: 'Colombia', es: 'Colombia' },
  { value: 'Chile', en: 'Chile', es: 'Chile' },
  { value: 'Argentina', en: 'Argentina', es: 'Argentina' },
  { value: 'Brazil', en: 'Brazil', es: 'Brasil' },
  { value: 'Ecuador', en: 'Ecuador', es: 'Ecuador' },
  { value: 'Guatemala', en: 'Guatemala', es: 'Guatemala' },
  { value: 'Costa Rica', en: 'Costa Rica', es: 'Costa Rica' },
  { value: 'Panama', en: 'Panama', es: 'Panamá' },
  { value: 'Dominican Republic', en: 'Dominican Republic', es: 'República Dominicana' },
  { value: 'United States', en: 'United States', es: 'Estados Unidos' },
  { value: 'Other', en: 'Other', es: 'Otro' },
]

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
  textTransform: 'uppercase' as const,
  color: 'var(--dim)',
}

export default function ContactForm({ es, campaignSource, labels, selectOptions }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        // Fire GA4 / GTM conversion event
        if (typeof window !== 'undefined') {
          const w = window as Window & { dataLayer?: object[] }
          w.dataLayer = w.dataLayer || []
          w.dataLayer.push({ event: 'generate_lead' })
        }
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
      <div style={{
        background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)',
        borderRadius: '20px', padding: '48px', textAlign: 'center',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px',
        minHeight: '400px', justifyContent: 'center',
      }}>
        <div style={{
          width: '56px', height: '56px', borderRadius: '50%',
          background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '1.6rem', color: 'var(--white)' }}>
          {es ? '¡Mensaje Enviado!' : 'Message Sent!'}
        </div>
        <p style={{ color: 'var(--dim)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '360px' }}>
          {es
            ? 'Gracias por contactarnos. Nuestro equipo te responderá dentro de un día hábil.'
            : 'Thanks for reaching out. Our team will get back to you within one business day.'}
        </p>
      </div>
    )
  }

  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)',
      borderRadius: '20px', padding: '48px',
    }}>
      <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '1.5rem', color: 'var(--white)', letterSpacing: '0.01em', marginBottom: '8px' }}>
        {labels.formTitle}
      </div>
      <p style={{ fontSize: '0.875rem', color: 'var(--dim)', marginBottom: '36px', lineHeight: 1.5 }}>
        {labels.formSub}
      </p>

      {/* method/action are the no-JS fallback. Without them the browser default
          is GET to the current URL, which would put name, email and phone into
          the query string — and therefore into server and analytics logs — any
          time handleSubmit does not run. handleSubmit still preventDefaults and
          POSTs via fetch on the normal path. */}
      <form onSubmit={handleSubmit} method="post" action={FORMSPREE_URL}>
        {campaignSource && <input type="hidden" name="campaign_source" value={campaignSource} />}
        {/* Row 1: Name + Company */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '18px' }}>
            <label htmlFor="cf-name" style={labelStyle}>{labels.labelName}</label>
            <input id="cf-name" type="text" name="name" autoComplete="name" placeholder={labels.placeholderName} required style={inputStyle} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '18px' }}>
            <label htmlFor="cf-company" style={labelStyle}>{labels.labelCompany}</label>
            <input id="cf-company" type="text" name="company" autoComplete="organization" placeholder={labels.placeholderCompany} style={inputStyle} />
          </div>
        </div>

        {/* Row 2: Email + Phone */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '18px' }}>
            <label htmlFor="cf-email" style={labelStyle}>{labels.labelEmail}</label>
            <input id="cf-email" type="email" name="email" autoComplete="email" placeholder={labels.placeholderEmail} required style={inputStyle} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '18px' }}>
            <label htmlFor="cf-phone" style={labelStyle}>{labels.labelPhone}</label>
            <input id="cf-phone" type="tel" name="phone" autoComplete="tel" placeholder={labels.placeholderPhone} style={inputStyle} />
          </div>
        </div>

        {/* Country select */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '18px' }}>
          <label htmlFor="cf-country" style={labelStyle}>{es ? 'País' : 'Country'}</label>
          <select id="cf-country" name="country" autoComplete="country-name" required defaultValue="" style={{ ...inputStyle, appearance: 'auto' as const }}>
            <option value="" disabled>{es ? 'Selecciona tu país' : 'Select your country'}</option>
            {COUNTRY_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{es ? opt.es : opt.en}</option>
            ))}
          </select>
        </div>

        {/* Interest select */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '18px' }}>
          <label htmlFor="cf-interest" style={labelStyle}>{labels.labelInterest}</label>
          <select id="cf-interest" name="interest" style={{ ...inputStyle, appearance: 'auto' as const }}>
            <option value="">{labels.selectDefault}</option>
            {selectOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Message textarea */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '18px' }}>
          <label htmlFor="cf-message" style={labelStyle}>{labels.labelMessage}</label>
          <textarea id="cf-message" name="message" placeholder={labels.placeholderMessage} rows={5} style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }} />
        </div>

        {/* Error message */}
        {status === 'error' && (
          <p style={{ color: '#f87171', fontSize: '0.85rem', marginBottom: '12px', fontFamily: 'Space Grotesk, sans-serif' }}>
            {es
              ? 'Algo salió mal. Por favor intenta de nuevo o escríbenos directamente a info@kabatone.com.'
              : 'Something went wrong. Please try again or email us directly at info@kabatone.com.'}
          </p>
        )}

        {/* Consent notice. Sits above the button so it is read before the
            action, not after it. */}
        <p style={{
          fontSize: '0.75rem', lineHeight: 1.5, color: 'var(--dim)',
          marginBottom: '14px', fontFamily: 'Space Grotesk, sans-serif',
        }}>
          {es
            ? 'Al enviar este formulario aceptas que KabatOne use tus datos para responder a tu solicitud. No los compartimos con terceros.'
            : 'By submitting this form you agree that KabatOne may use your details to respond to your enquiry. We do not share them with third parties.'}{' '}
          <a href="/privacy" style={{ color: 'inherit', textDecoration: 'underline' }}>
            {es ? 'Aviso de privacidad' : 'Privacy notice'}
          </a>
        </p>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: status === 'submitting' ? 'rgba(59,130,246,0.5)' : 'var(--blue)',
            color: 'white',
            fontFamily: 'Space Grotesk, sans-serif', fontSize: '15px', fontWeight: 600,
            padding: '15px 36px', borderRadius: '10px', border: 'none',
            cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
            width: '100%', justifyContent: 'center', marginTop: '8px',
            boxShadow: '0 0 40px rgba(59,130,246,0.38), inset 0 1px 0 rgba(255,255,255,0.1)',
            letterSpacing: '0.02em', transition: 'background 0.2s',
          }}
        >
          {status === 'submitting'
            ? (es ? 'Enviando…' : 'Sending…')
            : labels.btnSubmit}
          {status !== 'submitting' && (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </form>
    </div>
  )
}
