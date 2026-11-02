import ContactForm from '@/components/ContactForm'

/* An on-page lead form for the pages CAD buyers actually land on (CAD inbound plan
   item #3). Spanish C5/911 searchers arrive on resource pages, not the product page,
   and until now the only next step was a link to /contact. This renders the same
   ContactForm (same Formspree endpoint and generate_lead event) with CAD-specific copy,
   K-Dispatch listed first, and a `source` tag so every lead records the page that
   produced it, in the lead e-mail (hidden field) and in GA4 (campaign_source). */

type Props = { es: boolean; source: string }

export default function CadLeadForm({ es, source }: Props) {
  const selectOptions = es ? [
    { value: 'K-Dispatch', label: 'K-Dispatch — Atención de llamadas y despacho 911' },
    { value: 'Platform', label: 'Plataforma completa para un C5 / C4' },
    { value: 'K-Video', label: 'K-Video — Videovigilancia con IA' },
    { value: 'Partnership', label: 'Integrador / alianza' },
    { value: 'Other', label: 'Otro' },
  ] : [
    { value: 'K-Dispatch', label: 'K-Dispatch — 911 call handling and dispatch' },
    { value: 'Platform', label: 'Full platform for a command center' },
    { value: 'K-Video', label: 'K-Video — AI video surveillance' },
    { value: 'Partnership', label: 'Integrator / partnership' },
    { value: 'Other', label: 'Other' },
  ]

  return (
    <section id="contacto" style={{ padding: '0 24px 64px', maxWidth: 900, margin: '0 auto' }}>
      <ContactForm
        es={es}
        campaignSource={source}
        labels={{
          formTitle: es ? 'Hable con el equipo de K-Dispatch' : 'Talk to the K-Dispatch team',
          formSub: es
            ? 'Cuéntenos sobre su centro 911, C5 o municipio. Un especialista le responde en un día hábil.'
            : 'Tell us about your 911 center, command center or city. A specialist replies within one business day.',
          labelName: es ? 'Nombre completo' : 'Full name',
          labelCompany: es ? 'Institución / dependencia' : 'Agency / organization',
          labelEmail: es ? 'Correo electrónico' : 'Email',
          labelPhone: es ? 'Teléfono' : 'Phone',
          labelInterest: es ? 'Me interesa...' : 'I’m interested in…',
          labelMessage: es ? 'Mensaje' : 'Message',
          placeholderName: es ? 'Juan Pérez' : 'Jane Smith',
          placeholderCompany: es ? 'C5 Estatal / Municipio de...' : 'County 911 / City of...',
          placeholderEmail: es ? 'juan@dependencia.gob.mx' : 'jane@agency.gov',
          placeholderPhone: es ? '+52 55 0000 0000' : '+1 (555) 000-0000',
          placeholderMessage: es
            ? 'Por ejemplo: número de operadores, CAD actual, si prepara una licitación o el anexo técnico...'
            : 'For example: number of call takers, current CAD, whether you are preparing an RFP...',
          selectDefault: es ? 'Seleccione un tema' : 'Select a topic',
          btnSubmit: es ? 'Enviar' : 'Send',
        }}
        selectOptions={selectOptions}
      />
    </section>
  )
}
