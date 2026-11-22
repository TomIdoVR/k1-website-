'use client'

import { useEffect, useRef, useState } from 'react'
import { trackLead } from '@/lib/analytics'
import { submitLead } from '@/lib/lead-client'

interface EbookDownloadFormProps {
  es?: boolean
  pdfPath?: string
  /** Overrides for the default ebook copy, for other gated downloads. */
  copy?: Partial<Record<'formTitle' | 'formSub' | 'btnSubmit' | 'successTitle' | 'successSub' | 'downloadBtn', string>>
  /** "Read online" link after download; null hides it. */
  readOnlineHref?: string | null
  /** Recorded as campaign_source in the lead e-mail and GA4. */
  source?: string
}

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
  boxSizing: 'border-box',
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'DM Mono, monospace',
  fontSize: '10.5px',
  fontWeight: 500,
  letterSpacing: '0.14em',
  textTransform: 'uppercase' as const,
  color: 'var(--dim)',
}

export default function EbookDownloadForm({
  es = false,
  pdfPath = '/downloads/the-end-of-siloed-response.pdf',
  copy,
  readOnlineHref = '/ebook/siloed-response-en.html',
  source,
}: EbookDownloadFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [failed, setFailed] = useState(false)
  /* Sent as elapsed_ms, a spam signal checked server side (see /api/leads). */
  const startedAt = useRef(0)
  useEffect(() => { startedAt.current = Date.now() }, [])

  const c = {
    formTitle: es ? 'Descarga Gratuita' : 'Free Download',
    formSub: es
      ? 'Completa el formulario para acceder al informe completo.'
      : 'Fill in your details to get instant access to the full industry brief.',
    labelName: es ? 'Nombre Completo' : 'Full Name',
    labelEmail: es ? 'Correo Corporativo' : 'Work Email',
    labelOrg: es ? 'Organización / Agencia' : 'Organization / Agency',
    labelRole: es ? 'Cargo' : 'Job Title / Role',
    placeholderName: es ? 'Juan Pérez' : 'Jane Smith',
    placeholderEmail: es ? 'juan@agencia.gob.mx' : 'jane@agency.gov',
    placeholderOrg: es ? 'Organización' : 'Organization',
    placeholderRole: es ? 'Director de Seguridad Pública' : 'Director of Public Safety',
    btnSubmit: es ? 'Descargar el Informe' : 'Download the Brief',
    successTitle: es ? '¡Listo! Tu informe está disponible.' : 'You\'re all set.',
    successSub: es
      ? 'Haz clic abajo para descargar el informe en PDF.'
      : 'Click below to download the industry brief PDF.',
    downloadBtn: es ? 'Descargar PDF' : 'Download PDF',
    readOnlineBtn: es ? 'Leer en línea' : 'Read online',
    disclaimer: es
      ? 'No compartimos tu información. Puedes darte de baja en cualquier momento.'
      : 'We never share your data. Unsubscribe anytime.',
    ...copy,
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setFailed(false)
    const formData = new FormData(e.currentTarget)
    formData.set('asset', pdfPath)
    try {
      const ok = await submitLead(formData, {
        form: 'download',
        startedAt: startedAt.current || Date.now(),
        locale: es ? 'es' : 'en',
      })
      if (ok) {
        // Lead-magnet download = a lead. Fire to GA4 (see lib/analytics)
        trackLead('generate_lead', {
          form_id: 'ebook_download',
          asset: pdfPath,
          ...(source ? { campaign_source: source } : {}),
          organization: String(formData.get('organization') || ''),
        })
        setSubmitted(true)
      } else {
        /* Before this, a failed submit just stopped the spinner with no word
           of why, and the visitor left without the file. */
        setFailed(true)
      }
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid var(--border-b)',
        borderRadius: '20px',
        padding: '40px 36px',
        textAlign: 'center',
      }}>
        {/* Check icon */}
        <div style={{
          width: '56px', height: '56px', borderRadius: '50%',
          background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 20px',
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <div style={{
          fontFamily: 'Barlow Condensed, sans-serif',
          fontWeight: 800,
          fontSize: '1.55rem',
          color: 'var(--white)',
          marginBottom: '10px',
          letterSpacing: '0.01em',
        }}>
          {c.successTitle}
        </div>
        <p style={{ fontSize: '0.9rem', color: 'var(--dim)', marginBottom: '28px', lineHeight: 1.55 }}>
          {c.successSub}
        </p>

        <a
          href={pdfPath}
          download
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            background: 'var(--blue)', color: 'white',
            fontFamily: 'Space Grotesk, sans-serif', fontSize: '15px', fontWeight: 600,
            padding: '14px 32px', borderRadius: '10px', textDecoration: 'none',
            boxShadow: '0 0 40px rgba(59,130,246,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
            letterSpacing: '0.02em',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          {c.downloadBtn}
        </a>

        {readOnlineHref && <a
          href={readOnlineHref}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            marginTop: '12px',
            color: 'var(--dim)',
            fontFamily: 'Space Grotesk, sans-serif', fontSize: '13px', fontWeight: 500,
            textDecoration: 'none', letterSpacing: '0.01em',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          {c.readOnlineBtn}
        </a>}
      </div>
    )
  }

  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid var(--border)',
      borderRadius: '20px',
      padding: '36px 32px',
    }}>
      <div style={{
        fontFamily: 'Barlow Condensed, sans-serif',
        fontWeight: 700,
        fontSize: '1.4rem',
        color: 'var(--white)',
        letterSpacing: '0.01em',
        marginBottom: '6px',
      }}>
        {c.formTitle}
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--dim)', marginBottom: '28px', lineHeight: 1.5 }}>
        {c.formSub}
      </p>

      <form onSubmit={handleSubmit}>
        {source && <input type="hidden" name="campaign_source" value={source} />}
        {/* Honeypot: hidden from people, so anything filling it is a bot. */}
        <input
          type="text" name="company_website" tabIndex={-1} autoComplete="off"
          aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
        />
        {/* Full Name */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '16px' }}>
          <label style={labelStyle}>{c.labelName}</label>
          <input
            type="text"
            name="name"
            placeholder={c.placeholderName}
            required
            style={inputStyle}
          />
        </div>

        {/* Work Email */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '16px' }}>
          <label style={labelStyle}>{c.labelEmail}</label>
          <input
            type="email"
            name="email"
            placeholder={c.placeholderEmail}
            required
            style={inputStyle}
          />
        </div>

        {/* Organization */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '16px' }}>
          <label style={labelStyle}>{c.labelOrg}</label>
          <input
            type="text"
            name="organization"
            placeholder={c.placeholderOrg}
            required
            style={inputStyle}
          />
        </div>

        {/* Job Title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '24px' }}>
          <label style={labelStyle}>{c.labelRole}</label>
          <input
            type="text"
            name="role"
            placeholder={c.placeholderRole}
            style={inputStyle}
          />
        </div>

        {failed && (
          <p role="alert" style={{ color: '#f87171', fontSize: '0.85rem', marginBottom: '12px', fontFamily: 'Space Grotesk, sans-serif' }}>
            {es
              ? 'Algo salió mal. Intenta de nuevo o escríbenos a info@kabatone.com.'
              : 'Something went wrong. Please try again or email us at info@kabatone.com.'}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
            background: loading ? 'rgba(37,99,235,0.6)' : 'var(--blue)',
            color: 'white',
            fontFamily: 'Space Grotesk, sans-serif', fontSize: '15px', fontWeight: 600,
            padding: '14px 28px', borderRadius: '10px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
            width: '100%',
            boxShadow: '0 0 32px rgba(59,130,246,0.35), inset 0 1px 0 rgba(255,255,255,0.1)',
            letterSpacing: '0.02em',
            transition: 'background 0.2s',
          }}
        >
          {loading ? (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" style={{ animation: 'spin 1s linear infinite' }}>
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
              {es ? 'Preparando…' : 'Preparing…'}
            </>
          ) : (
            <>
              {c.btnSubmit}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </>
          )}
        </button>

        <p style={{
          fontSize: '11px', color: 'var(--dim)', marginTop: '12px',
          textAlign: 'center', lineHeight: 1.5,
        }}>
          {c.disclaimer}
        </p>
      </form>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}
