'use client'

import { useState, useRef, useEffect, FormEvent } from 'react'
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
  const [answered, setAnswered] = useState<Set<string>>(new Set())
  const [missingId, setMissingId] = useState<string | null>(null)
  // Screening questions come second: asking them before the basics reads as a
  // gate, and a candidate who has filled their details in is more likely to
  // finish. Roles without questions stay a single step.
  const twoStep = questions.length > 0
  const [step, setStep] = useState<1 | 2>(1)
  const formRef = useRef<HTMLFormElement>(null)

  /**
   * Brings an element clear of the sticky header, then focuses it if it can be.
   *
   * Instant, not smooth: behaviour 'smooth' silently does nothing in some
   * mobile contexts — measured at 375px, a smooth call left the page untouched
   * while the identical 'auto' call scrolled correctly. Landing on the field is
   * the requirement; the animation was only a nicety.
   */
  function revealAndFocus(el: HTMLElement | null) {
    if (!el) return
    el.scrollIntoView({ behavior: 'auto', block: 'center' })
    if (typeof (el as HTMLInputElement).focus === 'function') {
      // preventScroll: scrollIntoView owns the movement; letting focus scroll
      // too lands the field back under the sticky header.
      ;(el as HTMLInputElement).focus({ preventScroll: true })
    }
  }

  // Advancing a step swaps the panel without moving the page, so on a phone the
  // candidate lands mid-form — often past the first question. Bring the top of
  // the form back into view, clearing the sticky header.
  useEffect(() => {
    if (step !== 2 || !formRef.current) return
    // Same reason as revealAndFocus: smooth is unreliable on mobile here.
    const top = formRef.current.getBoundingClientRect().top + window.scrollY - 90
    window.scrollTo({ top: Math.max(top, 0), behavior: 'auto' })
  }, [step])

  // Runs after the highlight is painted, so the scroll is not racing the
  // re-render that setUnanswered causes.
  useEffect(() => {
    if (!missingId || !formRef.current) return
    revealAndFocus(formRef.current.querySelector<HTMLElement>(`#q-${missingId}`))
    setMissingId(null)
  }, [missingId])

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
      if (!form.checkValidity()) {
        const firstInvalid = form.querySelector<HTMLElement>(':invalid')
        revealAndFocus(firstInvalid)
        form.reportValidity()
        return
      }
      setStep(2)
      return
    }

    const missing = questions.find((q) => !formData.get(`q_${q.id}`))
    if (twoStep && missing) {
      setUnanswered(true)
      setMissingId(missing.id)
      return
    }
    setUnanswered(false)

    const cv = formData.get('cv')
    if (cv instanceof File && cv.size > MAX_CV_BYTES) {
      setTooBig(true)
      requestAnimationFrame(() =>
        revealAndFocus(form.querySelector<HTMLElement>('#af-cv'))
      )
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
      <div className="crs-form crs-ok">
        <div style={{
          width: '56px', height: '56px', borderRadius: '50%', margin: '0 auto 18px',
          background: 'rgba(24,88,245,0.08)', border: '1px solid rgba(24,88,245,0.22)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1858f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div className="crs-ok-t">
          {t.successH}
        </div>
        <p className="sp-ben-d" style={{ maxWidth: '400px', margin: '0 auto' }}>
          {t.successP}
        </p>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="crs-form">
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
        <div className="crs-stepbar">
          <span className="crs-stepbar-n">{t.stepOf.replace('{n}', String(step))}</span>
          <span className="crs-stepbar-t">{step === 1 ? t.stepDetails : t.stepQuestions}</span>
          <span className="crs-stepbar-track"><i style={{ width: step === 1 ? '50%' : '100%' }} /></span>
        </div>
      )}

      <div hidden={twoStep && step !== 1}>
      <div className="crs-field">
        <label className="crs-label" htmlFor="af-name">{t.name}</label>
        <input id="af-name" name="name" type="text" required className="crs-input" autoComplete="name" />
      </div>

      <div className="crs-row">
        <div className="crs-field">
          <label className="crs-label" htmlFor="af-email">{t.email}</label>
          <input id="af-email" name="email" type="email" required className="crs-input" autoComplete="email" />
        </div>
        <div className="crs-field">
          <label className="crs-label" htmlFor="af-phone">{t.phone}</label>
          <input id="af-phone" name="phone" type="tel" className="crs-input" autoComplete="tel" />
        </div>
      </div>

      <div className="crs-row">
        <div className="crs-field">
          <label className="crs-label" htmlFor="af-linkedin">{t.linkedin}</label>
          <input id="af-linkedin" name="linkedin" type="url" placeholder="https://" className="crs-input" />
        </div>
        <div className="crs-field">
          <label className="crs-label" htmlFor="af-location">{t.location}</label>
          <input id="af-location" name="location" type="text" className="crs-input" />
        </div>
      </div>

      <div className="crs-field">
        <label className="crs-label" htmlFor="af-cv">{t.cvFile}</label>
        <input
          id="af-cv" name="cv" type="file" accept=".pdf,.doc,.docx,application/pdf"
          className="crs-input"
          onChange={(e) => setHasFile(Boolean(e.currentTarget.files?.length))}
        />
        <p className="crs-hint">{t.cvFileHint}</p>
      </div>

      <div className="crs-field">
        <label className="crs-label" htmlFor="af-cv-link">{t.cvLink}</label>
        <input
          id="af-cv-link" name="cv_link" type="url" placeholder="https://"
          className="crs-input" required={!hasFile}
        />
        <p className="crs-hint">{t.cvHint}</p>
      </div>

      <div className="crs-field">
        <label className="crs-label" htmlFor="af-message">{t.message}</label>
        <textarea id="af-message" name="message" rows={5} className="crs-input" style={{ resize: 'vertical' }} />
        <p className="crs-hint">{t.messageHint}</p>
      </div>
      </div>

      {twoStep && (
        <div hidden={step !== 2}>
          <p className="crs-hint" style={{ margin: '0 0 22px', fontSize: '14px' }}>
            {t.questionsIntro}
          </p>
          {questions.map((q, i) => (
            <div
              id={`q-${q.id}`}
              className="crs-q"
              style={
                unanswered && !answered.has(q.id)
                  ? { borderColor: '#f0a882', background: '#fffaf6' }
                  : undefined
              }
              role="group"
              aria-labelledby={`q-${q.id}-label`}
              aria-invalid={unanswered && !answered.has(q.id) ? true : undefined}
              key={q.id}
            >
              {/* Short label travels with the answer so Slack shows the
                  question, not a bare id. */}
              <input type="hidden" name={`label_${q.id}`} value={q.short} />
              <p className="crs-q-legend" id={`q-${q.id}-label`}>
                <span className="crs-num">{String(i + 1).padStart(2, '0')}</span>
                {es ? q.es : q.en}
              </p>
              <div className="crs-q-opts">
                {[
                  { v: 'Yes', label: t.yes },
                  { v: 'No', label: t.no },
                ].map((opt) => (
                  <label className="crs-q-opt" key={opt.v}>
                    <input
                      type="radio"
                      name={`q_${q.id}`}
                      value={opt.v}
                      onChange={() => setAnswered((prev) => new Set(prev).add(q.id))}
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          {unanswered && (
            <p className="crs-err">{t.answerAll}</p>
          )}
        </div>
      )}

      {tooBig && (
        <p className="crs-err">{t.tooBig}</p>
      )}

      {status === 'error' && (
        <p className="crs-err">
          <strong>{t.errorH}.</strong> {t.errorP}{' '}
          <a href={mailto} style={{ color: '#1d4ed8', textDecoration: 'underline' }}>{APPLY_EMAIL}</a>
        </p>
      )}

      <div className="crs-actions">
        {twoStep && step === 2 && (
          <button type="button" className="crs-btn-ghost" onClick={() => setStep(1)}>
            ← {t.back}
          </button>
        )}
        <button
          type="submit"
          className="sp-btn"
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
          {status !== 'submitting' && <span className="crs-arrow">→</span>}
        </button>
      </div>
    </form>
  )
}
