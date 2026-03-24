'use client'

import { useState, FormEvent } from 'react'

interface SelectOption {
  value: string
  label: string
}

interface ContactFormProps {
  es: boolean
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

const inputStyle: React.CSSProperties = {
  background: '#0b1628',
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

export default function ContactForm({ es, labels, selectOptions }: ContactFormProps) {
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

      <form onSubmit={handleSubmit}>
        {/* Row 1: Name + Company */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '18px' }}>
            <label style={labelStyle}>{labels.labelName}</label>
            <input type="text" name="name" placeholder={labels.placeholderName} required style={inputStyle} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '18px' }}>
            <label style={labelStyle}>{labels.labelCompany}</label>
            <input type="text" name="company" placeholder={labels.placeholderCompany} style={inputStyle} />
          </div>
        </div>

        {/* Row 2: Email + Phone */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '18px' }}>
            <label style={labelStyle}>{labels.labelEmail}</label>
            <input type="email" name="email" placeholder={labels.placeholderEmail} required style={inputStyle} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '18px' }}>
            <label style={labelStyle}>{labels.labelPhone}</label>
            <input type="tel" name="phone" placeholder={labels.placeholderPhone} style={inputStyle} />
          </div>
        </div>

        {/* Interest select */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '18px' }}>
          <label style={labelStyle}>{labels.labelInterest}</label>
          <select name="interest" style={{ ...inputStyle, appearance: 'auto' as const }}>
            <option value="">{labels.selectDefault}</option>
            {selectOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Message textarea */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '18px' }}>
          <label style={labelStyle}>{labels.labelMessage}</label>
          <textarea name="message" placeholder={labels.placeholderMessage} rows={5} style={{ ...inputStyle, resize: 'vertical', minHeight: '130px' }} />
        </div>

        {/* Error message */}
        {status === 'error' && (
          <p style={{ color: '#f87171', fontSize: '0.85rem', marginBottom: '12px', fontFamily: 'Space Grotesk, sans-serif' }}>
            {es
              ? 'Algo salió mal. Por favor intenta de nuevo o escríbenos directamente a info@kabatone.com.'
              : 'Something went wrong. Please try again or email us directly at info@kabatone.com.'}
          </p>
        )}

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
