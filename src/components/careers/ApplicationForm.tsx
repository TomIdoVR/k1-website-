'use client'

import { useState, FormEvent } from 'react'
import { trackLead } from '@/lib/analytics'
import { APPLY_EMAIL, type JobQuestion } from '@/content/jobs'

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

/** Keeps a stray 200MB scan from being uploaded; a CV is a document. */
const MAX_CV_BYTES = 10 * 1024 * 1024

export default function ApplicationForm({
  es,
  roleTitle,
  roleSlug,
  questions = [],
}: {
  es: boolean
  roleTitle: string
  roleSlug: string
  questions?: JobQuestion[]
}) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  // One of CV-file or CV-link is required; picking a file relaxes the link.
  const [hasFile, setHasFile] = useState(false)
  const [tooBig, setTooBig] = useState(false)
  const [unanswered, setUnanswered] = useState(false)
  // Screening questions come second: asking them before the basics reads as a
  // gate, and a candidate who has filled their details in is more likely to
  // finish. Roles without questions stay a single step.
  const twoStep = questions.length > 0
  const [step, setStep] = useState<1 | 2>(1)

  const t = {
    name: es ? 'Nombre completo' : 'Full name',
    email: es ? 'Correo electrónico' : 'Email',
    phone: es ? 'Teléfono (opcional)' : 'Phone (optional)',
    linkedin: es ? 'LinkedIn o portafolio' : 'LinkedIn or portfolio',
    cvFile: es ? 'Sube tu CV' : 'Upload your CV',
    cvFileHint: es ? 'PDF o Word, hasta 10 MB' : 'PDF or Word, up to 10 MB',
    cvLink: es ? 'O un enlace a tu CV' : 'Or a link to your CV',
    cvHint: es
      ? 'Google Drive, Dropbox o LinkedIn — si prefieres no subir el archivo'
      : 'Google Drive, Dropbox or LinkedIn — if you’d rather not upload a file',
    tooBig: es ? 'Ese archivo supera los 10 MB.' : 'That file is over 10 MB.',
    location: es ? 'Dónde vives' : 'Where you’re based',
    message: es ? 'Cuéntanos qué has construido' : 'Tell us what you’ve built',
    messageHint: es
      ? 'Unas líneas bastan. Nos interesa el sistema del que estás más orgulloso.'
      : 'A few lines is plenty. We care about the system you’re proudest of.',
    submit: es ? 'Enviar candidatura' : 'Send application',
    continueBtn: es ? 'Continuar' : 'Continue',
    back: es ? 'Volver' : 'Back',
    stepOf: es ? 'Paso {n} de 2' : 'Step {n} of 2',
    stepDetails: es ? 'Tus datos' : 'Your details',
    stepQuestions: es ? 'Unas preguntas' : 'A few questions',
    questionsIntro: es
      ? 'Tres preguntas rápidas sobre este rol. Responde con honestidad — un “no” no te descarta automáticamente.'
      : 'Three quick questions about this role. Answer honestly — a “no” isn’t an automatic rejection.',
    yes: es ? 'Sí' : 'Yes',
    no: es ? 'No' : 'No',
    answerAll: es ? 'Responde las tres preguntas.' : 'Please answer all three questions.',
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
    const form = e.currentTarget
    const formData = new FormData(form)

    if (twoStep && step === 1) {
      if (!form.reportValidity()) return
      setStep(2)
      return
    }

    if (twoStep && questions.some((q) => !formData.get(`q_${q.id}`))) {
      setUnanswered(true)
      return
    }
    setUnanswered(false)

    const cv = formData.get('cv')
    if (cv instanceof File && cv.size > MAX_CV_BYTES) {
      setTooBig(true)
      return
    }
    setTooBig(false)
    setStatus('submitting')

    try {
      // Multipart rather than JSON: the CV rides along with the fields, and the
      // browser sets its own boundary — so no Content-Type header here.
      const res = await fetch(ENDPOINT, { method: 'POST', body: formData })
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

      {twoStep && (
        <div className="car-steps-bar">
          <span className="car-step-pip">{t.stepOf.replace('{n}', String(step))}</span>
          <span className="car-step-name">{step === 1 ? t.stepDetails : t.stepQuestions}</span>
          <span className="car-step-track"><i style={{ width: step === 1 ? '50%' : '100%' }} /></span>
        </div>
      )}

      <div hidden={twoStep && step !== 1}>
      <div className="car-field">
        <label className="car-field-label" htmlFor="af-name">{t.name}</label>
        <input id="af-name" name="name" type="text" required className="car-input" autoComplete="name" />
      </div>

      <div className="car-field-row">
        <div className="car-field">
          <label className="car-field-label" htmlFor="af-email">{t.email}</label>
          <input id="af-email" name="email" type="email" required className="car-input" autoComplete="email" />
        </div>
        <div className="car-field">
          <label className="car-field-label" htmlFor="af-phone">{t.phone}</label>
          <input id="af-phone" name="phone" type="tel" className="car-input" autoComplete="tel" />
        </div>
      </div>

      <div className="car-field-row">
        <div className="car-field">
          <label className="car-field-label" htmlFor="af-linkedin">{t.linkedin}</label>
          <input id="af-linkedin" name="linkedin" type="url" placeholder="https://" className="car-input" />
        </div>
        <div className="car-field">
          <label className="car-field-label" htmlFor="af-location">{t.location}</label>
          <input id="af-location" name="location" type="text" className="car-input" />
        </div>
      </div>

      <div className="car-field">
        <label className="car-field-label" htmlFor="af-cv">{t.cvFile}</label>
        <input
          id="af-cv" name="cv" type="file" accept=".pdf,.doc,.docx,application/pdf"
          className="car-input"
          onChange={(e) => setHasFile(Boolean(e.currentTarget.files?.length))}
        />
        <p className="car-field-hint">{t.cvFileHint}</p>
      </div>

      <div className="car-field">
        <label className="car-field-label" htmlFor="af-cv-link">{t.cvLink}</label>
        <input
          id="af-cv-link" name="cv_link" type="url" placeholder="https://"
          className="car-input" required={!hasFile}
        />
        <p className="car-field-hint">{t.cvHint}</p>
      </div>

      <div className="car-field">
        <label className="car-field-label" htmlFor="af-message">{t.message}</label>
        <textarea id="af-message" name="message" rows={5} className="car-input" style={{ resize: 'vertical' }} />
        <p className="car-field-hint">{t.messageHint}</p>
      </div>
      </div>

      {twoStep && (
        <div hidden={step !== 2}>
          <p className="car-field-hint" style={{ margin: '0 0 22px', fontSize: '14px' }}>
            {t.questionsIntro}
          </p>
          {questions.map((q, i) => (
            <fieldset className="car-q" key={q.id}>
              {/* Short label travels with the answer so Slack shows the
                  question, not a bare id. */}
              <input type="hidden" name={`label_${q.id}`} value={q.short} />
              <legend className="car-q-legend">
                <span className="car-q-n">{String(i + 1).padStart(2, '0')}</span>
                {es ? q.es : q.en}
              </legend>
              <div className="car-q-opts">
                {[
                  { v: 'Yes', label: t.yes },
                  { v: 'No', label: t.no },
                ].map((opt) => (
                  <label className="car-q-opt" key={opt.v}>
                    <input
                      type="radio"
                      name={`q_${q.id}`}
                      value={opt.v}
                      required={step === 2}
                      onChange={() => setUnanswered(false)}
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
          {unanswered && (
            <p style={{ fontSize: '14px', color: '#f87171', marginBottom: '16px' }}>{t.answerAll}</p>
          )}
        </div>
      )}

      {tooBig && (
        <p style={{ fontSize: '14px', color: '#f87171', marginBottom: '16px' }}>{t.tooBig}</p>
      )}

      {status === 'error' && (
        <p style={{ fontSize: '14px', color: '#f87171', marginBottom: '16px' }}>
          <strong>{t.errorH}.</strong> {t.errorP}{' '}
          <a href={mailto} style={{ color: 'var(--blue-light)', textDecoration: 'underline' }}>{APPLY_EMAIL}</a>
        </p>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
        {twoStep && step === 2 && (
          <button type="button" className="car-btn-ghost" onClick={() => setStep(1)}>
            ← {t.back}
          </button>
        )}
        <button
          type="submit"
          className="car-btn"
          disabled={status === 'submitting'}
          style={{
            border: 'none',
            cursor: status === 'submitting' ? 'default' : 'pointer',
            opacity: status === 'submitting' ? 0.7 : 1,
          }}
        >
          {status === 'submitting'
            ? t.submitting
            : twoStep && step === 1
              ? t.continueBtn
              : t.submit}
          {status !== 'submitting' && <span className="car-arrow">→</span>}
        </button>
      </div>
    </form>
  )
}
