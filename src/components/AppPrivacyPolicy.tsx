import { breadcrumbSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Link } from '@/i18n/navigation'

/**
 * Reusable Google Play privacy policy body, keyed per branded app.
 * Each app gets its own thin page (unique URL) that renders this with its
 * own appName + lastUpdated so the store listing maps to a dedicated page.
 *
 * Developer name, legal entity and contact details are constant across apps.
 */

const DEVELOPER_NAME = 'KabatOne (Formerly CityShob Software Ltd.) R&D'
const LEGAL_ENTITY = 'KabatOne (Formerly CityShob Software Ltd.) Legal Department'
const CONTACT = {
  address: 'Av. Ejército Nacional Mexicano 57, Floor 4, Mexico City',
  addressEs: 'Av. Ejército Nacional Mexicano 57, Piso 4, Ciudad de México',
  email: 'info@kabatone.com',
  phone: '+52 55 6533 1725',
}

export interface AppPrivacyPolicyProps {
  /** Exact app name as it appears in Google Play, e.g. "C5 Escudo Pakal" */
  appName: string
  /** URL slug of this app's privacy page, e.g. "c5-escudo-pakal" */
  slug: string
  /** Publication date, e.g. { en: 'July 2026', es: 'julio 2026' } */
  lastUpdated: { en: string; es: string }
  /** Render Spanish (true) or English (false) */
  es: boolean
}

type Section =
  | { id: string; heading: string; body: string }
  | { id: string; heading: string; paragraphs: string[] }
  | { id: string; heading: string; bullets: string[] }
  | { id: string; heading: string; identification: { label: string; value: string }[] }
  | { id: string; heading: string; contact: { address: string; email: string; phone: string } }

export default function AppPrivacyPolicy({ appName, slug, lastUpdated, es }: AppPrivacyPolicyProps) {
  const sections: Section[] = es ? [
    {
      id: 'identification',
      heading: 'Identificación de la Aplicación y del Desarrollador',
      identification: [
        { label: 'Aplicación', value: appName },
        { label: 'Desarrollador', value: 'KabatOne (anteriormente CityShob Software Ltd.) R&D' },
        { label: 'Entidad legal', value: 'KabatOne (anteriormente CityShob Software Ltd.), Departamento Legal' },
      ],
    },
    {
      id: 'contact',
      heading: 'Contacto',
      contact: { address: CONTACT.addressEs, email: CONTACT.email, phone: CONTACT.phone },
    },
    {
      id: 'scope',
      heading: 'Alcance de este Aviso',
      body: `KabatOne (anteriormente CityShob Software Ltd.), con domicilio en ${CONTACT.addressEs}, es responsable del tratamiento de tus datos personales. Este aviso aplica a la información recopilada a través de nuestro sitio web, la aplicación ${appName}, correos electrónicos, mensajes de texto, formularios y servicios. Al utilizar el sitio web, la aplicación ${appName}, responder a nuestras comunicaciones o no darte de baja de ellas, aceptas los términos de este aviso de privacidad.`,
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
        'Datos del dispositivo: dirección IP, sistema operativo, tipo de navegador, identificadores de dispositivo, versión de la aplicación y análisis de uso.',
        'Grabaciones de llamadas: con fines informativos y de control de calidad.',
      ],
    },
    {
      id: 'purposes',
      heading: 'Finalidades del Tratamiento',
      bullets: [
        `Personalización de los servicios ofrecidos a través de KabatOne y la aplicación ${appName}.`,
        'Optimización del sitio web y la aplicación en función de la retroalimentación recibida.',
        'Procesamiento de pedidos y detección de fraudes.',
        'Administración de concursos y promociones.',
        'Envío de comunicaciones periódicas por correo electrónico, con opción de cancelar la suscripción.',
        'Gestión de cuentas, autenticación, monitoreo de seguridad y cumplimiento de obligaciones legales.',
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
      body: `Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al tratamiento de tus datos personales (derechos ARCO). Para ejercerlos, envía una solicitud a ${CONTACT.email} que incluya tu identificación y una descripción clara de tu petición. Responderemos en un plazo máximo de 20 días hábiles. También puedes contactarnos por teléfono al ${CONTACT.phone}.`,
    },
    {
      id: 'retention',
      heading: 'Conservación y Eliminación de Datos',
      paragraphs: [
        `KabatOne conserva los datos personales únicamente durante el tiempo necesario para proporcionar la aplicación ${appName} y los servicios relacionados, cumplir con las finalidades descritas en este aviso de privacidad, cumplir con obligaciones legales, resolver disputas, prevenir fraudes, mantener la seguridad y hacer cumplir los acuerdos aplicables.`,
        `Los usuarios pueden solicitar la eliminación de su cuenta de ${appName} y de los datos personales asociados escribiendo a ${CONTACT.email}.`,
        'Una vez completada una solicitud de eliminación, KabatOne eliminará la cuenta y los datos personales asociados, salvo la información que deba conservarse por motivos legítimos de seguridad, prevención de fraudes, legales, contractuales o regulatorios.',
      ],
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
      body: `KabatOne se reserva el derecho de actualizar este aviso de privacidad en cualquier momento. Los cambios se publicarán en los sitios web y servicios oficiales de KabatOne, incluyendo la aplicación ${appName}. Te recomendamos revisar esta página periódicamente.`,
    },
  ] : [
    {
      id: 'identification',
      heading: 'App and Developer Identification',
      identification: [
        { label: 'App name', value: appName },
        { label: 'Developer', value: DEVELOPER_NAME },
        { label: 'Legal entity', value: LEGAL_ENTITY },
      ],
    },
    {
      id: 'contact',
      heading: 'Contact',
      contact: { address: CONTACT.address, email: CONTACT.email, phone: CONTACT.phone },
    },
    {
      id: 'scope',
      heading: 'Scope of This Notice',
      body: `KabatOne (Formerly CityShob Software Ltd.), located at ${CONTACT.address}, is responsible for the processing of your personal data. This notice applies to information gathered through our website, the ${appName} application, emails, text messages, forms, and services. By using the website, the ${appName} application, responding to our communications, or choosing not to unsubscribe, you accept the terms of this privacy notice.`,
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
        'Device data: IP address, operating system, browser type, device identifiers, application version, and usage analytics.',
        'Call recordings: for informational and quality assurance purposes.',
      ],
    },
    {
      id: 'purposes',
      heading: 'Purposes of Processing',
      bullets: [
        `Personalization of services offered through KabatOne and the ${appName} application.`,
        'Website and application optimization based on feedback received.',
        'Order processing and fraud detection.',
        'Contest and promotion management.',
        'Periodic email communications, with unsubscribe options.',
        'Account management, authentication, security monitoring, and compliance with legal obligations.',
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
      body: 'KabatOne implements administrative, technical, and physical security measures to protect your personal data. Financial information is transmitted using Secure Socket Layer technology and is encrypted at all times.',
    },
    {
      id: 'third-parties',
      heading: 'Third-Party Transfers',
      body: 'We do not sell your personal data. Transfers occur only with trusted service providers who maintain confidentiality, or when legally required. We do not share your information with third parties without a legal or contractual basis.',
    },
    {
      id: 'arco',
      heading: 'ARCO Rights',
      body: `You have the right to Access, Rectify, Cancel, or Object to the processing of your personal data, known as ARCO rights. To exercise these rights, send a request to ${CONTACT.email} that includes your identification and a clear description of your request. We will respond within a maximum of 20 business days. You may also contact us by phone at ${CONTACT.phone}.`,
    },
    {
      id: 'retention',
      heading: 'Data Retention and Deletion',
      paragraphs: [
        `KabatOne retains personal data only for as long as necessary to provide the ${appName} application and related services, fulfill the purposes described in this privacy policy, comply with legal obligations, resolve disputes, prevent fraud, maintain security, and enforce applicable agreements.`,
        `Users may request deletion of their ${appName} account and associated personal data by contacting ${CONTACT.email}.`,
        'When a deletion request is completed, KabatOne will delete the account and associated personal data, except for information that must be retained for legitimate security, fraud-prevention, legal, contractual, or regulatory purposes.',
      ],
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
      body: `KabatOne reserves the right to update this privacy notice at any time. Changes will be posted on KabatOne's official websites and services, including the ${appName} application. We recommend reviewing this page periodically.`,
    },
  ]

  const canonical = es
    ? `https://kabatone.com/es/privacy${slug}/`
    : `https://kabatone.com/privacy${slug}/`
  const home = es ? 'https://kabatone.com/es' : 'https://kabatone.com/'

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: es ? 'Inicio' : 'Home', url: home },
          { name: es ? 'Política de Privacidad' : 'Privacy Policy', url: es ? 'https://kabatone.com/es/privacy' : 'https://kabatone.com/privacy' },
          { name: appName, url: canonical },
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
          <span style={{ color: 'var(--blue-light)' }}>{appName}</span>
        </div>

        {/* ── HERO ── */}
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 40px 48px' }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '11px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: 'var(--cyan)', marginBottom: '20px',
          }}>
            {es ? 'Legal · Aplicación Móvil' : 'Legal · Mobile App'}
          </p>
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
            fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: 0.95,
            letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '16px',
          }}>
            {es ? 'Política de Privacidad' : 'Privacy Policy'}
          </h1>
          <p style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600,
            fontSize: 'clamp(20px, 3vw, 28px)', color: 'var(--blue-light)',
            letterSpacing: '0.01em', marginBottom: '24px',
          }}>
            {appName}
          </p>
          <p style={{ fontSize: '16px', color: 'var(--muted)', fontFamily: 'DM Mono, monospace', letterSpacing: '0.04em' }}>
            {es ? `Última actualización: ${lastUpdated.es}` : `Last updated: ${lastUpdated.en}`}
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

                {'identification' in section && (
                  <div style={{
                    background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-b)',
                    borderRadius: '12px', padding: '28px 32px',
                    display: 'flex', flexDirection: 'column', gap: '12px',
                  }}>
                    {section.identification.map((item, i) => (
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
                )}

                {'contact' in section && (
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
