import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Link } from '@/i18n/navigation'

export const metadata: Metadata = {
  title: 'Privacy Policy – Tamaulipas Contigo | KabatOne',
  description: 'Privacy policy for the Tamaulipas Contigo mobile application, created by CityShob Software Ltd.',
  robots: { index: false },
}

const sections = [
  {
    id: 'introduction',
    heading: '1. Introduction',
    body: 'This privacy policy (the "Privacy Policy" or "Policy") governs your use of the software application Tamaulipas Contigo (the "Application" or "App") for mobile devices that was created by CityShob Software Ltd ("us", "we", or "our"). The Application enables a user ("you", "your" or "them") to report directly to emergency services and/or municipalities agencies and keep a record and enrich the Emergency Event by taking pictures/videos of the Emergency Events.\n\nThis Policy was designed to make important disclosures about how we collect and use our users\' content and information and how the application is used to share such information.\n\nBy installing or using the Application, You acknowledge that You are over the age of 18 and have the power and authority to agree to the terms of this Policy. Please read it carefully. IF YOU OBJECT TO ANY OF THE TERMS PROVIDED HEREIN, DON\'T INSTALL OR USE THE APP.\n\nWe reserve the right to periodically amend or revise the Policy; changes will be effective immediately upon the posting of the revised Policy. Your continued use of the App following the posting of such amendments constitutes your acknowledgement and consent of such amendments to the Privacy Policy and your agreement to be bound by the terms of such amendments.',
  },
  {
    id: 'data-collected',
    heading: '2. What type of information do we collect?',
    body: 'We collect data and information from our users that identifies an individual or may with reasonable effort identify an individual ("Personal Information"). This may include the User\'s phone number, location data, device persistent identifier (e.g., IMEI), or any other information you voluntarily submit by your use of the App. This covers any information you provide to us in any other way (i.e., location of events, descriptions and attachments you add to the events, customer support interactions, etc.), the type of mobile device you use, your mobile device\'s unique device ID, your mobile operating system, and information about the way you use the Application.\n\nIn order to send emergency services to the event location, your mobile device will need to allow the Tamaulipas Contigo App access to your device\'s location.',
  },
  {
    id: 'use-of-information',
    heading: '3. How may we use the information we collect?',
    body: 'We may use and share Personal Information in the manners described in this Policy. We require that relevant third parties agree to process such information in compliance with our Privacy Policy. We may use Information to provide the services through the App, to improve and customize our App to your needs, and to identify and authenticate your access to certain features of the App. We may also use the information to monitor and analyze trends, usage, and activities in connection with our App.\n\nWe will send the event information to relevant emergency services and/or municipalities agencies to handle the events reported from the App.',
  },
  {
    id: 'disclosure',
    heading: '4. Information Disclosure',
    body: 'We may transfer or disclose Information to our subsidiaries or service providers who are located in different jurisdictions across the world, for the purpose of: (a) storing or processing such information on our behalf or to assist us with our business operations and to provide and improve our App; (b) performing research, technical diagnostics, analytics, or statistical purposes; or (c) referring reports to third-party emergency agencies and authorities to handle reported events.\n\nWe may disclose Personal Information, or any information you submitted via the App, if we believe that disclosure of such information is helpful or reasonably necessary to: (i) comply with any applicable law, regulation, legal process, or governmental request; (ii) enforce our policies, including investigations of potential violations thereof; (iii) investigate, detect, prevent, or take action regarding illegal activities or other wrongdoing, suspected fraud, or security issues; (iv) establish or exercise our rights to defend against legal claims; (v) prevent harm to the rights, property, or safety of us, our users, yourself, or any third party; (vi) collaborate with law enforcement agencies and/or in case we find it necessary in order to enforce intellectual property or other legal rights.',
  },
  {
    id: 'third-party',
    heading: '5. Third-party collection of information',
    body: 'This Privacy Policy does not apply to the practices of companies that we do not own or control, or to individuals whom we do not employ or manage, including any emergency agencies or authorities or any other third party to which we may disclose information as set forth in this Privacy Policy.',
  },
  {
    id: 'retention',
    heading: '6. For how long do we retain the information we collect?',
    body: 'We will retain the information we collect for as long as needed to provide the services offered through the App and to comply with our legal obligations, resolve disputes, and enforce our agreements. We may rectify, replenish, or remove incomplete or inaccurate information at any time and at our own discretion.',
  },
  {
    id: 'security',
    heading: '7. Security',
    body: 'We take great care in implementing and maintaining the security of the App and your information. We employ industry-standard procedures and policies to ensure the safety of our users\' information and prevent unauthorized use of any such information. Although we take reasonable steps to safeguard information, we cannot be responsible for the acts of those who gain unauthorized access or abuse our App, and we make no warranty, express, implied, or otherwise, that we will prevent such access.\n\nIf you feel that your privacy was not treated in accordance with our policy, or if any person attempted to abuse our service or acted in an inappropriate manner, please contact us directly at: support@kabatone.com',
  },
  {
    id: 'children',
    heading: '8. Children',
    body: 'If a parent or guardian becomes aware that his or her child has provided us with information without their consent, he or she should contact us at: support@kabatone.com',
  },
  {
    id: 'geolocation',
    heading: '9. Geolocation',
    note: 'This section applies only where applicable.',
    body: 'To provide the services offered through the Tamaulipas Contigo application (the "Application"), the Government of the State of Tamaulipas, through the competent authorities (the "Data Controller"), will use information based on the location of your mobile device via GPS (Global Positioning System) technology in locations where such technology is available.\n\nTo this end, it is necessary to collect, use, transmit, process, and store geographic data, including but not limited to:',
    bullets: [
      'Real-time geographic location of your mobile device.',
      'First and last name.',
      'Email address.',
      'Telephone number.',
      'Technical information of the device.',
    ],
    bodyAfterBullets: 'By using the Application, you grant your consent for the Government of the State of Tamaulipas to carry out these activities exclusively for the provision of services available in the Application and the management of incidents or reports made.\n\nThe Application may allow you to share your location with a limited number of other users of the same, subject to express acceptance of the corresponding requests. You authorize the transmission of said information solely for the purpose of ensuring that such users are aware of the request or report you are making.',
  },
  {
    id: 'responsibility',
    heading: 'Responsibility for the Use of the Application',
    body: 'You assume responsibility for all actions performed for the installation, registration, and use of this Application, which you carry out at your own account and risk.\n\nYou agree not to use, nor allow third parties to use, the Application in a manner contrary to these Terms and Conditions of Use or applicable legislation.',
    bullets: [
      'The proper use of the Application.',
      'The custody of the registered mobile device.',
      'The confidentiality of codes or passwords.',
    ],
    bodyAfterBullets: 'The Application must be used exclusively for the purposes provided for in its functionalities. Any misuse or fraudulent use carried out from your mobile device shall be presumed to have been carried out by you, unless proven otherwise.\n\nYou acknowledge and accept that the Government of the State of Tamaulipas is released from liability for any misuse carried out from your mobile device, including the unauthorized use of codes or passwords. Furthermore, it shall not be held liable for authorized or unauthorized access to location information when such access derives from breaches beyond its reasonable control.',
    bodyBeforeBullets: 'It is your responsibility to ensure:',
  },
  {
    id: 'liability',
    heading: 'Limitation of Liability',
    body: 'The Application is a technological development susceptible to technical failures, interruptions, or inaccuracies. The Government of the State of Tamaulipas:',
    bullets: [
      'Does not guarantee that the Application is error-free.',
      'Does not guarantee continuous or uninterrupted availability.',
      'Does not guarantee the absolute precision of mapping or geolocation systems.',
    ],
    bodyAfterBullets: 'The user assumes all liability arising from the use of the Application. The Government of the State of Tamaulipas shall not be responsible for:',
    bullets2: [
      'User hardware or software failures.',
      'Connectivity or network coverage issues.',
      'Inaccurate information generated by external mapping systems.',
      'Consequences derived from the misuse or fraudulent use of the Application.',
    ],
    bodyEnd: 'If the device is outside a coverage area or lacks access to a mobile network or Wi-Fi, functionality may be limited. The Government of the State of Tamaulipas shall not be liable for damages arising from such circumstances.',
  },
  {
    id: 'downloads',
    heading: 'Downloads and Licenses',
    body: 'Software downloaded from official stores (Android or iOS) is governed by the license terms of those platforms.\n\nBy downloading or updating the Application, you agree to comply with the applicable license terms. The Government of the State of Tamaulipas shall not be liable for breaches related to third-party licenses. Unauthorized reproduction or distribution of the software is prohibited.',
  },
  {
    id: 'changes',
    heading: 'Changes and Updates to the Service',
    body: 'The Government of the State of Tamaulipas may modify, update, restrict, or suspend—temporarily or permanently—the Application or any of its functionalities without any liability. Continuous availability is not guaranteed during update processes. The download of updates is performed under your own responsibility.',
  },
  {
    id: 'prohibited',
    heading: 'Prohibited Use of the Application',
    body: 'You agree not to:',
    bullets: [
      'Use the Application in a way that could damage it or affect its operation.',
      'Access or attempt to access computer systems or networks of the Government of the State of Tamaulipas without authorization.',
      'Transmit threats, defamation, illegal content, or false information.',
      'Send viruses, malware, or codes that compromise security.',
      'Use information obtained through the Application for illicit purposes.',
    ],
    bodyAfterBullets: 'Non-compliance may result in administrative, civil, or criminal liabilities in accordance with applicable legislation.',
  },
  {
    id: 'contact',
    heading: '10. How to contact us',
    body: 'If you have any general questions about the Application, the information that we collect about you, and how we use it, you can contact us at: support@kabatone.com',
  },
]

export default async function PrivacyTamaulipasPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  return (
    <>
      <Nav />
      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* BREADCRUMB */}
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
          <span style={{ color: 'var(--blue-light)' }}>Tamaulipas Contigo</span>
        </div>

        {/* HERO */}
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 40px 48px' }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '11px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: 'var(--cyan)', marginBottom: '20px',
          }}>
            Legal
          </p>
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
            fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: 0.95,
            letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '24px',
          }}>
            Privacy Policy – Tamaulipas Contigo
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--muted)', fontFamily: 'DM Mono, monospace', letterSpacing: '0.04em' }}>
            Application by CityShob Software Ltd
          </p>
        </section>

        {/* DIVIDER */}
        <div style={{ borderTop: '1px solid var(--border)' }} />

        {/* CONTENT */}
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

                {'note' in section && section.note && (
                  <p style={{
                    fontFamily: 'DM Mono, monospace', fontSize: '11px',
                    letterSpacing: '0.1em', color: 'var(--cyan)',
                    marginBottom: '16px',
                  }}>
                    {section.note}
                  </p>
                )}

                {'body' in section && section.body && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: 'bullets' in section ? '16px' : undefined }}>
                    {section.body.split('\n\n').map((para, i) => (
                      <p key={i} style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.8 }}>
                        {para}
                      </p>
                    ))}
                  </div>
                )}

                {'bodyBeforeBullets' in section && section.bodyBeforeBullets && (
                  <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.8, marginBottom: '16px' }}>
                    {section.bodyBeforeBullets}
                  </p>
                )}

                {'bullets' in section && section.bullets && (
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0, marginBottom: '16px' }}>
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

                {'bodyAfterBullets' in section && section.bodyAfterBullets && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: 'bullets2' in section ? '16px' : undefined }}>
                    {section.bodyAfterBullets.split('\n\n').map((para, i) => (
                      <p key={i} style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.8 }}>
                        {para}
                      </p>
                    ))}
                  </div>
                )}

                {'bullets2' in section && section.bullets2 && (
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0, marginBottom: '16px' }}>
                    {section.bullets2.map((bullet, i) => (
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

                {'bodyEnd' in section && section.bodyEnd && (
                  <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.8 }}>
                    {section.bodyEnd}
                  </p>
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
