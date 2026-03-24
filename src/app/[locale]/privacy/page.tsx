import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Link } from '@/i18n/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('privacy', locale)
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const sections = es ? [
    {
      id: 'scope',
      heading: 'Alcance de este Aviso',
      body: 'Kabat One, S.A. de C.V. (en adelante "KabatOne"), con domicilio en Av. Ejército Nacional Mexicano 57, Piso 4, Ciudad de México, es responsable del tratamiento de tus datos personales. Este aviso aplica a la información recopilada a través de nuestro sitio web, correos electrónicos, mensajes de texto, formularios y servicios. Al utilizar el sitio web, responder a nuestras comunicaciones o no darte de baja de ellas, aceptas los términos de este aviso de privacidad.',
    },
    {
      id: 'data-collected',
      heading: 'Datos Personales que Recopilamos',
      bullets: [
        'Datos de contacto: nombre, domicilio, números de teléfono, correo electrónico e información de redes sociales.',
        'Datos de registro: nombre, correo electrónico y contraseña.',
        'Información demográfica: edad, género, estado civil, ubicación e intereses.',
        'Datos financieros: información de tarjeta de pago para transacciones.',
        'Contenido generado por el usuario: fotos, videos, historias y comentarios.',
        'Investigación de mercado: retroalimentación voluntaria sobre nuestros servicios.',
        'Datos del dispositivo: dirección IP, sistema operativo y tipo de navegador.',
        'Grabaciones de llamadas: con fines informativos y de control de calidad.',
      ],
    },
    {
      id: 'purposes',
      heading: 'Finalidades del Tratamiento',
      bullets: [
        'Personalización de los servicios ofrecidos.',
        'Optimización del sitio web en función de la retroalimentación recibida.',
        'Procesamiento de pedidos y detección de fraudes.',
        'Administración de concursos y promociones.',
        'Envío de comunicaciones periódicas por correo electrónico (con opción de cancelar suscripción).',
      ],
    },
    {
      id: 'social-media',
      heading: 'Redes Sociales',
      body: 'Las plataformas de redes sociales son ajenas a KabatOne y no están reguladas por este aviso de privacidad. Te recomendamos revisar las políticas de privacidad de cada plataforma que utilices.',
    },
    {
      id: 'cookies',
      heading: 'Cookies',
      body: 'Utilizamos cookies para funcionalidades del sitio y análisis de tráfico. Servicios de terceros nos apoyan en el análisis de datos. Puedes deshabilitar las cookies desde la configuración de tu navegador, aunque esto podría afectar algunas funcionalidades del servicio.',
    },
    {
      id: 'security',
      heading: 'Protección de Datos',
      body: 'KabatOne implementa medidas de seguridad administrativas, técnicas y físicas para proteger tus datos personales. La información financiera se transmite mediante tecnología Secure Socket Layer (SSL) y se encuentra encriptada en todo momento.',
    },
    {
      id: 'third-parties',
      heading: 'Transferencia a Terceros',
      body: 'No vendemos tus datos personales. Las transferencias únicamente ocurren con proveedores de servicios de confianza que mantienen confidencialidad, o cuando lo exija la ley. En ningún caso compartimos tu información con terceros sin una base legal o contractual que lo justifique.',
    },
    {
      id: 'arco',
      heading: 'Derechos ARCO',
      body: 'Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al tratamiento de tus datos personales (derechos ARCO). Para ejercerlos, envía una solicitud que incluya tu identificación y una descripción clara de tu petición. Responderemos en un plazo máximo de 20 días hábiles.',
    },
    {
      id: 'minors',
      heading: 'Protección de Menores',
      body: 'KabatOne cumple con la legislación aplicable en materia de protección de menores, incluyendo COPPA. No recopilamos intencionalmente datos personales de menores de 13 años.',
    },
    {
      id: 'jurisdiction',
      heading: 'Jurisdicción Aplicable',
      body: 'Este aviso de privacidad se rige por la legislación mexicana. Cualquier controversia derivada del mismo será resuelta ante los tribunales competentes de la Ciudad de México.',
    },
    {
      id: 'updates',
      heading: 'Modificaciones',
      body: 'KabatOne se reserva el derecho de actualizar este aviso de privacidad en cualquier momento. Los cambios se publicarán en kabatone.com. Te recomendamos revisar esta página periódicamente.',
    },
    {
      id: 'contact',
      heading: 'Contacto',
      contact: {
        address: 'Av. Ejército Nacional Mexicano 57, Piso 4, Ciudad de México',
        email: 'info@kabatone.com',
        phone: '(52) 55-6533-1725',
      },
    },
  ] : [
    {
      id: 'scope',
      heading: 'Scope of This Notice',
      body: 'Kabat One, S.A. de C.V. ("KabatOne"), located at Av. Ejército Nacional Mexicano 57, Floor 4, Mexico City, is responsible for the processing of your personal data. This notice applies to information gathered through our website, emails, text messages, forms, and services. By using the website, responding to our communications, or choosing not to unsubscribe, you accept the terms of this privacy notice.',
    },
    {
      id: 'data-collected',
      heading: 'Personal Data We Collect',
      bullets: [
        'Contact details: name, address, phone numbers, email, and social media information.',
        'Registration data: name, email address, and password.',
        'Demographic information: age, gender, marital status, location, and interests.',
        'Financial data: payment card information for transactions.',
        'User-generated content: photos, videos, stories, and comments.',
        'Market research: voluntary feedback about our services.',
        'Device data: IP address, operating system, and browser type.',
        'Call recordings: for informational and quality assurance purposes.',
      ],
    },
    {
      id: 'purposes',
      heading: 'Purposes of Processing',
      bullets: [
        'Personalization of services offered.',
        'Website optimization based on feedback received.',
        'Order processing and fraud detection.',
        'Contest and promotion management.',
        'Periodic email communications (with unsubscribe options).',
      ],
    },
    {
      id: 'social-media',
      heading: 'Social Media',
      body: 'Social media platforms are unrelated to KabatOne and are not governed by this privacy notice. We recommend reviewing the privacy policies of each platform you use.',
    },
    {
      id: 'cookies',
      heading: 'Cookies',
      body: 'We use cookies for website functionality and traffic analytics. Third-party services assist in data analysis. You may disable cookies through your browser settings, though this may affect some service functionality.',
    },
    {
      id: 'security',
      heading: 'Data Protection',
      body: 'KabatOne implements administrative, technical, and physical security measures to protect your personal data. Financial information is transmitted using Secure Socket Layer (SSL) technology and is encrypted at all times.',
    },
    {
      id: 'third-parties',
      heading: 'Third-Party Transfers',
      body: 'We do not sell your personal data. Transfers occur only with trusted service providers who maintain confidentiality, or when legally required. We do not share your information with third parties without a legal or contractual basis.',
    },
    {
      id: 'arco',
      heading: 'ARCO Rights',
      body: 'You have the right to Access, Rectify, Cancel, or Object to the processing of your personal data (ARCO rights). To exercise these rights, send a request that includes your identification and a clear description of your request. We will respond within a maximum of 20 business days.',
    },
    {
      id: 'minors',
      heading: 'Protection of Minors',
      body: 'KabatOne complies with applicable legislation on the protection of minors, including COPPA. We do not intentionally collect personal data from children under 13 years of age.',
    },
    {
      id: 'jurisdiction',
      heading: 'Applicable Jurisdiction',
      body: 'This privacy notice is governed by Mexican law. Any disputes arising from it shall be resolved before the competent courts of Mexico City.',
    },
    {
      id: 'updates',
      heading: 'Modifications',
      body: 'KabatOne reserves the right to update this privacy notice at any time. Changes will be posted at kabatone.com. We recommend reviewing this page periodically.',
    },
    {
      id: 'contact',
      heading: 'Contact',
      contact: {
        address: 'Av. Ejército Nacional Mexicano 57, Floor 4, Mexico City',
        email: 'info@kabatone.com',
        phone: '(52) 55-6533-1725',
      },
    },
  ]

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
          { name: es ? 'Política de Privacidad' : 'Privacy Policy', url: es ? 'https://kabatone.com/es/privacy/' : 'https://kabatone.com/privacy/' },
        ])) }}
      />
      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── BREADCRUMB ── */}
        <div style={{
          maxWidth: '900px', margin: '0 auto', padding: '20px 40px 0',
          display: 'flex', alignItems: 'center', gap: '8px',
          fontFamily: 'DM Mono, monospace', fontSize: '11px',
          letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)',
        }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
            {es ? 'Inicio' : 'Home'}
          </Link>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: 'var(--blue-light)' }}>
            {es ? 'Privacidad' : 'Privacy'}
          </span>
        </div>

        {/* ── HERO ── */}
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 40px 48px' }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '11px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: 'var(--cyan)', marginBottom: '20px',
          }}>
            {es ? 'Legal' : 'Legal'}
          </p>
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
            fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: 0.95,
            letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '24px',
          }}>
            {es ? 'Política de Privacidad' : 'Privacy Policy'}
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--muted)', fontFamily: 'DM Mono, monospace', letterSpacing: '0.04em' }}>
            {es ? 'Última actualización: marzo 2026' : 'Last updated: March 2026'}
          </p>
        </section>

        {/* ── DIVIDER ── */}
        <div style={{ borderTop: '1px solid var(--border)' }} />

        {/* ── CONTENT ── */}
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 40px 96px' }}>
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

                {'body' in section && section.body && (
                  <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.8 }}>
                    {section.body}
                  </p>
                )}

                {'bullets' in section && section.bullets && (
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

                {'contact' in section && section.contact && (
                  <div style={{
                    background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-b)',
                    borderRadius: '12px', padding: '28px 32px',
                    display: 'flex', flexDirection: 'column', gap: '12px',
                  }}>
                    {[
                      { label: es ? 'Dirección' : 'Address', value: section.contact.address },
                      { label: es ? 'Correo electrónico' : 'Email', value: section.contact.email },
                      { label: es ? 'Teléfono' : 'Phone', value: section.contact.phone },
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'baseline' }}>
                        <span style={{
                          fontFamily: 'DM Mono, monospace', fontSize: '10px',
                          letterSpacing: '0.15em', textTransform: 'uppercase',
                          color: 'var(--cyan)', minWidth: '80px',
                        }}>
                          {item.label}
                        </span>
                        <span style={{ fontSize: '15px', color: 'var(--dim)' }}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <Footer es={es} />
      </div>
    </>
  )
}
