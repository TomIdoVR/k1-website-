import { breadcrumbSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Link } from '@/i18n/navigation'

/**
 * Government "Aviso de Privacidad Simplificado" for the 911 Baja California Sur app.
 * Responsible entity is the Secretaría de Seguridad Pública del Estado de Baja
 * California Sur — the Spanish text is the official / governing version; the
 * English rendering is an unofficial translation for accessibility.
 * One-off (state-specific) notice, not the reusable KabatOne Google Play template.
 */

const APP_NAME = '911 Baja California Sur'
const SLUG = '911-baja-california-sur'
const RESPONSIBLE_ES = 'Secretaría de Seguridad Pública del Estado de Baja California Sur'
const RESPONSIBLE_EN = 'Secretaría de Seguridad Pública del Estado de Baja California Sur (Ministry of Public Safety of the State of Baja California Sur)'
const PORTAL = 'https://www.sspbcs.gob.mx/ssp/'

type Section =
  | { id: string; heading: string; body: string }
  | { id: string; heading: string; paragraphs: string[] }
  | { id: string; heading: string; bullets: string[] }
  | { id: string; heading: string; intro?: string; contact: { label: string; value: string }[] }

export default function Privacy911BCS({ es }: { es: boolean }) {
  const lead = es
    ? `La ${RESPONSIBLE_ES}, con domicilio en Blvd. Agustín Olachea e/ Luis Donaldo Colosio y Chechén, Col. Emiliano Zapata, en la Ciudad de La Paz, Baja California Sur, es responsable del tratamiento de sus datos personales, los cuales serán protegidos en el sistema de datos personales "Servicio de Atención de Llamadas de Emergencia 9-1-1", conforme lo establecido en este aviso:`
    : `The ${RESPONSIBLE_EN}, with address at Blvd. Agustín Olachea e/ Luis Donaldo Colosio y Chechén, Col. Emiliano Zapata, in the city of La Paz, Baja California Sur, is responsible for the processing of your personal data, which will be protected within the personal data system "9-1-1 Emergency Call Attention Service", in accordance with the terms set out in this notice:`

  const sections: Section[] = es ? [
    {
      id: 'datos',
      heading: 'I. Recabamos los siguientes datos personales',
      bullets: [
        'Nombre completo.',
        'Edad.',
        'Número de teléfono.',
        'Correo electrónico.',
        'Género.',
        'Fecha de nacimiento.',
        'CURP.',
        'Número de teléfono de dos contactos de emergencia.',
        'Ficha médica (discapacidad y condición médica).',
      ],
    },
    {
      id: 'finalidad',
      heading: 'II. Finalidad del tratamiento para las cuales se obtienen los datos personales',
      paragraphs: [
        `Los datos recabados por la ${RESPONSIBLE_ES} podrán ser usados para atender las emergencias que se activen por medio de la aplicación, por medio de la cual se enlaza al Centro de Control, Comando, Comunicación y Cómputo C4 para que su emergencia sea atendida con mayor prontitud.`,
        'Canalizar automáticamente y de manera digital la información a las dependencias competentes para la atención de emergencias, con la finalidad de que se envíen los recursos médicos, de seguridad pública y protección civil que sean necesarios para la atención, salvaguarda y protección del patrimonio, vida y salud de los habitantes, que se encuentren en situaciones como pueden ser robos, homicidios, incendios, accidentes automovilísticos, urgencias médicas, etc.',
      ],
    },
    {
      id: 'transferencias',
      heading: 'III. Transferencias de datos personales',
      paragraphs: [
        'Sus datos personales pueden ser transferidos al Centro de Control, Comando, Comunicación y Cómputo C4, corporaciones de Seguridad Pública, Protección Civil y Urgencias Médicas sin su consentimiento, con el fin de atender las emergencias reportadas por medio de la aplicación.',
        'La línea de emergencias 9-1-1 no está obligada a recabar el consentimiento del titular para las transferencias de los datos personales, ya que la información es transferida a otras dependencias para la atención de emergencias diversas y también como aporte en los procedimientos administrativos o judiciales donde la información sea requerida en ejercicio de las atribuciones de la autoridad solicitante.',
      ],
    },
    {
      id: 'arco',
      heading: 'IV. Derechos ARCO',
      body: 'Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, puede enviar una solicitud a la Unidad de Transparencia de la Secretaría de Seguridad Pública del Estado de Baja California Sur, teléfono 612 175 0400 Ext. 1097, correo electrónico transparencia@sspbcs.gob.mx. Puede limitar el uso o divulgación de sus datos enviando su solicitud.',
    },
    {
      id: 'cambios',
      heading: 'V. Cambios en el aviso de privacidad',
      body: `Nos reservamos el derecho de modificar este aviso de privacidad en cualquier momento. Las modificaciones estarán disponibles en nuestro sitio web ${PORTAL}`,
    },
    {
      id: 'contacto',
      heading: 'VI. Contacto',
      intro: 'Si tiene alguna duda sobre este aviso de privacidad, puede contactarnos en:',
      contact: [
        { label: 'Correo electrónico', value: 'csocial.sspe@gmail.com' },
        { label: 'Teléfono', value: '612 175 0400, extensión 1029' },
        { label: 'Dirección', value: 'Blvd. Agustín Olachea e/ Luis Donaldo Colosio y Chechén, Col. Emiliano Zapata, en la ciudad de La Paz, Baja California Sur.' },
      ],
    },
  ] : [
    {
      id: 'datos',
      heading: 'I. We collect the following personal data',
      bullets: [
        'Full name.',
        'Age.',
        'Phone number.',
        'Email address.',
        'Gender.',
        'Date of birth.',
        'CURP (population registry code).',
        'Phone numbers of two emergency contacts.',
        'Medical record (disability and medical condition).',
      ],
    },
    {
      id: 'finalidad',
      heading: 'II. Purpose of processing for which the personal data is obtained',
      paragraphs: [
        `The data collected by the ${RESPONSIBLE_EN} may be used to respond to emergencies triggered through the application, which connects to the C4 Control, Command, Communications and Computing Center so that your emergency is attended to as promptly as possible.`,
        'To automatically and digitally route the information to the competent agencies for emergency response, so that the medical, public-safety, and civil-protection resources needed are dispatched for the care, safeguarding, and protection of the property, life, and health of residents in situations such as robberies, homicides, fires, traffic accidents, medical emergencies, etc.',
      ],
    },
    {
      id: 'transferencias',
      heading: 'III. Transfers of personal data',
      paragraphs: [
        'Your personal data may be transferred to the C4 Control, Command, Communications and Computing Center, public-safety corporations, Civil Protection, and Medical Emergency services without your consent, for the purpose of responding to emergencies reported through the application.',
        'The 9-1-1 emergency line is not required to obtain the consent of the data owner for transfers of personal data, as the information is transferred to other agencies for the response to various emergencies and also as a contribution to administrative or judicial proceedings where the information is required in the exercise of the requesting authority’s powers.',
      ],
    },
    {
      id: 'arco',
      heading: 'IV. ARCO rights',
      body: 'You have the right to Access, Rectify, Cancel, or Object to the processing of your personal data. To exercise these rights, you may send a request to the Transparency Unit of the Ministry of Public Safety of the State of Baja California Sur, phone 612 175 0400 Ext. 1097, email transparencia@sspbcs.gob.mx. You may limit the use or disclosure of your data by submitting your request.',
    },
    {
      id: 'cambios',
      heading: 'V. Changes to the privacy notice',
      body: `We reserve the right to modify this privacy notice at any time. Any modifications will be made available on our website ${PORTAL}`,
    },
    {
      id: 'contacto',
      heading: 'VI. Contact',
      intro: 'If you have any questions about this privacy notice, you may contact us at:',
      contact: [
        { label: 'Email', value: 'csocial.sspe@gmail.com' },
        { label: 'Phone', value: '612 175 0400, extension 1029' },
        { label: 'Address', value: 'Blvd. Agustín Olachea e/ Luis Donaldo Colosio y Chechén, Col. Emiliano Zapata, in the city of La Paz, Baja California Sur.' },
      ],
    },
  ]

  const footerNote = es
    ? `Este aviso de privacidad podrá ser consultado en el portal institucional ubicado en la dirección web: ${PORTAL}`
    : `This privacy notice may be consulted on the institutional portal located at: ${PORTAL}`

  const canonical = es
    ? `https://kabatone.com/es/privacy/${SLUG}/`
    : `https://kabatone.com/privacy/${SLUG}/`
  const home = es ? 'https://kabatone.com/es/' : 'https://kabatone.com/'

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: es ? 'Inicio' : 'Home', url: home },
          { name: es ? 'Aviso de Privacidad' : 'Privacy Notice', url: es ? 'https://kabatone.com/es/privacy/' : 'https://kabatone.com/privacy/' },
          { name: APP_NAME, url: canonical },
        ])) }}
      />
      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── BREADCRUMB ── */}
        <div style={{
          maxWidth: '900px', margin: '0 auto', padding: '20px 40px 0',
          display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap',
          fontFamily: 'DM Mono, monospace', fontSize: '11px',
          letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)',
        }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
            {es ? 'Inicio' : 'Home'}
          </Link>
          <span style={{ opacity: 0.35 }}>/</span>
          <Link href="/privacy" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
            {es ? 'Privacidad' : 'Privacy'}
          </Link>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: 'var(--blue-light)' }}>{APP_NAME}</span>
        </div>

        {/* ── HERO ── */}
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 40px 40px' }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '11px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: 'var(--cyan)', marginBottom: '20px',
          }}>
            {es ? 'Legal · Aplicación 9-1-1' : 'Legal · 9-1-1 App'}
          </p>
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
            fontSize: 'clamp(38px, 5.5vw, 58px)', lineHeight: 0.98,
            letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '16px',
          }}>
            {es ? 'Aviso de Privacidad Simplificado' : 'Simplified Privacy Notice'}
          </h1>
          <p style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600,
            fontSize: 'clamp(20px, 3vw, 28px)', color: 'var(--blue-light)',
            letterSpacing: '0.01em', marginBottom: '12px',
          }}>
            {APP_NAME}
          </p>
          <p style={{
            fontSize: '13px', color: 'var(--muted)',
            fontFamily: 'DM Mono, monospace', letterSpacing: '0.04em',
          }}>
            {es ? 'Responsable: ' : 'Data controller: '}{RESPONSIBLE_ES}
          </p>
        </section>

        {/* ── LEAD ── */}
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px 8px' }}>
          <p style={{
            fontSize: '16px', color: 'var(--dim)', lineHeight: 1.8,
            padding: '24px 28px', background: 'rgba(255,255,255,0.02)',
            border: '1px solid var(--border-b)', borderRadius: '12px',
          }}>
            {lead}
          </p>
        </section>

        {/* ── CONTENT ── */}
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 40px 40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
            {sections.map((section) => (
              <div key={section.id} id={section.id}>
                <h2 style={{
                  fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                  fontSize: '24px', color: 'var(--white)',
                  letterSpacing: '0.02em', marginBottom: '16px',
                  paddingBottom: '12px', borderBottom: '1px solid var(--border)',
                }}>
                  {section.heading}
                </h2>

                {'body' in section && (
                  <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.8 }}>
                    {section.body}
                  </p>
                )}

                {'paragraphs' in section && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {section.paragraphs.map((p, i) => (
                      <p key={i} style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.8 }}>{p}</p>
                    ))}
                  </div>
                )}

                {'bullets' in section && (
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0 }}>
                    {section.bullets.map((bullet, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <div style={{
                          width: '5px', height: '5px', borderRadius: '50%',
                          background: 'var(--blue)', flexShrink: 0, marginTop: '9px',
                          boxShadow: '0 0 6px rgba(59,130,246,0.5)',
                        }} />
                        <span style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {'contact' in section && (
                  <>
                    {section.intro && (
                      <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.8, marginBottom: '16px' }}>
                        {section.intro}
                      </p>
                    )}
                    <div style={{
                      background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-b)',
                      borderRadius: '12px', padding: '28px 32px',
                      display: 'flex', flexDirection: 'column', gap: '12px',
                    }}>
                      {section.contact.map((item, i) => (
                        <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'baseline', flexWrap: 'wrap' }}>
                          <span style={{
                            fontFamily: 'DM Mono, monospace', fontSize: '10px',
                            letterSpacing: '0.15em', textTransform: 'uppercase',
                            color: 'var(--cyan)', minWidth: '110px',
                          }}>
                            {item.label}
                          </span>
                          <span style={{ fontSize: '15px', color: 'var(--dim)' }}>{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* ── FOOTER NOTE ── */}
          <p style={{
            marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--border)',
            fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, fontStyle: 'italic',
          }}>
            {footerNote}
          </p>
        </section>

        <Footer es={es} />
      </div>
    </>
  )
}
