import { generatePageMetadata } from '@/lib/metadata'
import { getTranslations } from 'next-intl/server'
import Script from 'next/script'
import Nav from '@/components/Nav'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareTunisia', locale)
}

export default async function PublicSafetySoftwareTunisiaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const t = await getTranslations({ locale })

  const articleData = articleSchema(
    es
      ? 'Software de Seguridad Pública para Túnez: DGPN/Garde Nationale, ONPC, INPDP/Loi 63-2004 y Visión 2035 | KabatOne'
      : 'Public Safety Software for Tunisia: DGPN/Garde Nationale, ONPC, INPDP/Law 63-2004 & Vision 2035 | KabatOne',
    es
      ? 'Plataforma unificada para la DGPN y Garde Nationale de Túnez — despacho CAD integrado en 24 gobernaciones, Túnez Safe City, ONPC protección civil, Puerto de Túnez Radès/Sfax, INPDP/Loi 63-2004 y adquisición HAICOP/Code des marchés publics.'
      : 'Unified platform for Tunisia DGPN and Garde Nationale — integrated CAD dispatch across 24 governorates, Tunis Safe City, ONPC civil protection, Port of Tunis Radès/Sfax, INPDP/Law 63-2004 compliance, and HAICOP/Code des marchés publics procurement.',
    es
      ? 'https://kabatone.com/es/resources/public-safety-software-tunisia'
      : 'https://kabatone.com/resources/public-safety-software-tunisia',
    '2025-05-19'
  )

  const faqData = faqPageSchema([
    {
      question: es
        ? '¿Qué agencias de seguridad pública clave opera Túnez?'
        : 'What key public safety agencies does Tunisia operate?',
      answer: es
        ? 'La DGPN bajo el Ministerio del Interior cubre 24 gobernaciones con Brigades de recherche, Policía Judicial y Policía de Fronteras. La Garde Nationale gestiona fronteras y zonas rurales/costeras. La ONPC coordina protección civil con línea de emergencia 198.'
        : 'The DGPN under the Ministry of Interior covers 24 governorates with Brigades de recherche, Judicial Police and Border Police. The Garde Nationale manages borders and rural/coastal zones. The ONPC coordinates civil protection with emergency line 198.',
    },
    {
      question: es
        ? '¿Cómo aborda KabatOne la infraestructura crítica de Túnez?'
        : 'How does KabatOne address Tunisia critical infrastructure?',
      answer: es
        ? 'KabatOne integra gestión del Puerto de Túnez Radès (principal contenedor), Puerto de Sfax, Bizerta y Sousse, STEG (energía) y SONEDE (agua), vigilancia del oleoducto Transmed y coordinación del Aeropuerto TUN (6M+ pasajeros/año).'
        : 'KabatOne integrates management for the Port of Tunis Radès (main container), Port of Sfax, Bizerta and Sousse, STEG (energy) and SONEDE (water), Transmed pipeline surveillance, and coordination for Tunis-Carthage Airport TUN (6M+ passengers/year).',
    },
    {
      question: es
        ? '¿Es KabatOne compatible con la protección de datos de Túnez?'
        : 'Is KabatOne compliant with Tunisia data protection?',
      answer: es
        ? 'Sí. KabatOne cumple con la Loi organique 63-2004 supervisada por el INPDP. La arquitectura está alineada con el Décret-loi 54-2022 (ciberseguridad) y las directrices ANSI/CERT-TN.'
        : 'Yes. KabatOne complies with Law 63-2004 supervised by the INPDP. The architecture aligns with Décret-loi 54-2022 (cybersecurity) and ANSI/CERT-TN guidelines.',
    },
    {
      question: es
        ? '¿Cómo apoya KabatOne la gestión de fronteras en Túnez?'
        : 'How does KabatOne support border management in Tunisia?',
      answer: es
        ? 'KabatOne gestiona los pasos fronterizos terrestres con Argelia (Bouchebka/Haïdra/Sakiet Sidi Youssef) y Libia (Ras Jedir/Dhehiba) con ANPR integrado, cámaras térmicas y coordinación entre DGPN, Garde Nationale y Unidades Anti-Terroristas.'
        : 'KabatOne manages land border crossings with Algeria (Bouchebka/Haïdra/Sakiet Sidi Youssef) and Libya (Ras Jedir/Dhehiba) with integrated ANPR, thermal cameras, and cross-agency coordination between DGPN, Garde Nationale, and Anti-Terrorism Units.',
    },
  ])

  const breadcrumbData = breadcrumbSchema([
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es' : 'https://kabatone.com/' },
    {
      name: es ? 'Recursos' : 'Resources',
      url: es ? 'https://kabatone.com/es/resources' : 'https://kabatone.com/resources',
    },
    {
      name: es ? 'Túnez' : 'Tunisia',
      url: es
        ? 'https://kabatone.com/es/resources/public-safety-software-tunisia'
        : 'https://kabatone.com/resources/public-safety-software-tunisia',
    },
  ])

  const agencies = es
    ? [
        {
          name: "DGPN / Ministère de l'Intérieur",
          detail:
            '24 gobernaciones, Brigades de recherche, Policía Judicial, Policía de Fronteras — gestión unificada de incidentes',
        },
        {
          name: 'Garde Nationale',
          detail:
            'Seguridad de fronteras, zonas rurales y costeras — 7 regiones militares con coordinación CAD integrada',
        },
        {
          name: 'ONPC (Protección Civil)',
          detail:
            'Respuesta a emergencias nacionales 198 — coordinación multiagencia y gestión de desastres naturales',
        },
        {
          name: 'ANS / DGSE',
          detail:
            'Agencia Nacional de Seguridad e inteligencia exterior — integración de datos en tiempo real con comandos operativos',
        },
        {
          name: 'HAICOP / Trésorerie Générale',
          detail:
            'Alta Autoridad de Contratación Pública y Tesorería General — supervisión de adquisiciones y conformidad presupuestaria',
        },
        {
          name: 'ANSI / CERT-TN',
          detail:
            'Agencia Nacional de Seguridad Informática y CERT-TN — conformidad de ciberseguridad e infraestructura crítica',
        },
      ]
    : [
        {
          name: 'DGPN / Ministry of Interior',
          detail:
            '24 governorates, Brigades de recherche, Judicial Police, Border Police — unified incident management',
        },
        {
          name: 'Garde Nationale',
          detail:
            'Border, rural and coastal security — 7 military regions with integrated CAD coordination',
        },
        {
          name: 'ONPC (Civil Protection)',
          detail:
            'National emergency response line 198 — multiagency coordination and natural disaster management',
        },
        {
          name: 'ANS / DGSE',
          detail:
            'National Security Agency and foreign intelligence — real-time data integration with operational commands',
        },
        {
          name: 'HAICOP / Trésorerie Générale',
          detail:
            'High Authority for Public Procurement and Treasury General — procurement oversight and budget compliance',
        },
        {
          name: 'ANSI / CERT-TN',
          detail:
            'National IT Security Agency and CERT-TN — cybersecurity compliance and critical infrastructure protection',
        },
      ]

  const regulatory = es
    ? [
        {
          name: 'INPDP / Loi 63-2004',
          detail:
            'Protección de datos personales — Instance Nationale de Protection des Données Personnelles',
        },
        {
          name: 'Décret-loi 54-2022',
          detail:
            'Ciberseguridad y delitos informáticos — ANSI supervisión y CERT-TN respuesta a incidentes',
        },
        {
          name: 'Code des marchés publics / HAICOP',
          detail:
            'Adquisición pública — Portal Tuneps, umbrales de licitación abierta y conformidad presupuestaria',
        },
        {
          name: 'Loi 2015-26 / GRC',
          detail:
            'Lucha contra el terrorismo y el blanqueo de capitales — coordinación BCT y agencias de seguridad',
        },
      ]
    : [
        {
          name: 'INPDP / Law 63-2004',
          detail:
            'Personal data protection — Instance Nationale de Protection des Données Personnelles oversight',
        },
        {
          name: 'Décret-loi 54-2022',
          detail:
            'Cybersecurity and cybercrime — ANSI supervision and CERT-TN incident response coordination',
        },
        {
          name: 'Code des marchés publics / HAICOP',
          detail:
            'Public procurement — Tuneps portal, open tender thresholds and budget compliance',
        },
        {
          name: 'Law 2015-26 / GRC',
          detail:
            'Counter-terrorism and anti-money laundering — coordination with BCT and security agencies',
        },
      ]

  return (
    <>
      <Script
        id="schema-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <Nav />

      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">
              {es ? 'Guía de Mercado — Túnez' : 'Market Guide — Tunisia'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {es
                ? 'Software de Seguridad Pública para Túnez'
                : 'Public Safety Software for Tunisia'}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              {es
                ? 'Plataforma unificada para la DGPN y Garde Nationale — despacho CAD integrado en 24 gobernaciones, Túnez Safe City, ONPC protección civil, gestión de puertos y fronteras, conformidad INPDP/Loi 63-2004 y adquisición HAICOP.'
                : 'Unified platform for Tunisia DGPN and Garde Nationale — integrated CAD dispatch across 24 governorates, Tunis Safe City, ONPC civil protection, port and border management, INPDP/Law 63-2004 compliance, and HAICOP procurement.'}
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es
                ? 'Seguridad Pública en Túnez: Contexto Operativo'
                : 'Public Safety in Tunisia: Operational Context'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <p className="mb-4">
                  {es
                    ? 'Túnez mantiene una arquitectura de seguridad pública de dos niveles: la DGPN cubre los 24 gobernaciones y la Garde Nationale gestiona las zonas fronterizas, rurales y costeras. La Unidad Antiterrorista (BAT) y la Brigada de Intervención Rápida (BIR) coordinan operaciones de alta prioridad reportando al Ministerio del Interior.'
                    : 'Tunisia maintains a two-tier public safety architecture: the DGPN covers all 24 governorates while the Garde Nationale manages border, rural and coastal zones. The Anti-Terrorism Unit (BAT) and Rapid Intervention Brigade (BIR) coordinate high-priority operations, reporting to the Ministry of Interior.'}
                </p>
                <p>
                  {es
                    ? 'El Sistema Nacional de Respuesta a Emergencias opera a través del 198 (ONPC/Protección Civil), 197 (Garde Nationale) y 190 (Policía Nacional). El Centro de Operaciones de Crisis (COC) en Túnez coordina la respuesta a inundaciones, terremotos e incidentes industriales con el CNMT (meteorología).'
                    : 'The National Emergency Response System operates through 198 (ONPC/Civil Protection), 197 (Garde Nationale) and 190 (National Police). The Crisis Operations Centre (COC) in Tunis coordinates flood, earthquake and industrial incident response with CNMT (meteorology).'}
                </p>
              </div>
              <div>
                <p className="mb-4">
                  {es
                    ? 'La infraestructura crítica incluye el Puerto de Túnez Radès (principal terminal de contenedores), Puerto de Sfax, Bizerta y Sousse, el Aeropuerto Internacional de Túnez-Cartago (TUN) con 6M+ pasajeros anuales y el oleoducto Transmed (Argelia-Italia). STEG (electricidad y gas) y SONEDE (agua) son operadores críticos nacionales.'
                    : 'Critical infrastructure includes the Port of Tunis Radès (main container terminal), Port of Sfax, Bizerta and Sousse, Tunis-Carthage International Airport (TUN) handling 6M+ passengers annually, and the Transmed pipeline (Algeria-Italy). STEG (electricity and gas) and SONEDE (water) are critical national operators.'}
                </p>
                <p>
                  {es
                    ? 'La iniciativa Tunisia Digital 2025 y la Visión 2035 del gobierno impulsan la modernización de seguridad con inversión en ciudades inteligentes, gestión de CCTV urbano y plataformas de conciencia situacional en Túnez capital, Sfax y Sousse.'
                    : 'The Tunisia Digital 2025 initiative and government Vision 2035 drive security modernisation with investment in smart cities, urban CCTV management and situational awareness platforms across Tunis capital, Sfax and Sousse.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Agencies Grid */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              {es
                ? 'Agencias Clave y Organismos de Seguridad Pública'
                : 'Key Agencies & Public Safety Bodies'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agencies.map((agency) => (
                <div
                  key={agency.name}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <h3 className="font-bold text-gray-900 mb-2">{agency.name}</h3>
                  <p className="text-gray-600 text-sm">{agency.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Capabilities */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              {es
                ? 'Capacidades de la Plataforma KabatOne para Túnez'
                : 'KabatOne Platform Capabilities for Tunisia'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold text-sm">CAD</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {es
                        ? 'Despacho CAD Multiagencia — 24 Gobernaciones'
                        : 'Multi-Agency CAD Dispatch — 24 Governorates'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Despacho integrado para DGPN, Garde Nationale y ONPC con asignación automática de recursos, priorización de llamadas 190/197/198 y transferencia de incidentes entre gobernaciones.'
                        : 'Integrated dispatch for DGPN, Garde Nationale and ONPC with automated resource assignment, 190/197/198 call prioritisation, and cross-governorate incident handoff.'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold text-sm">VMS</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {es ? 'Gestión de CCTV Urbano' : 'Urban CCTV Management'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Gestión centralizada de las redes CCTV de Túnez Safe City, Sfax y Sousse — integración con reconocimiento facial y ANPR para control fronterizo y monitorización de zonas turísticas.'
                        : 'Centralised management of Tunis Safe City, Sfax and Sousse CCTV networks — integration with facial recognition and ANPR for border control and tourist zone monitoring.'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold text-sm">OPS</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {es ? 'Centro de Comando y Control (C2)' : 'Command & Control Centre (C2)'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Centro de operaciones unificado con conciencia situacional en tiempo real, gestión de incidentes de alto riesgo y comunicaciones encriptadas para BAT/BIR y fuerzas especiales.'
                        : 'Unified operations centre with real-time situational awareness, high-risk incident management, and encrypted communications for BAT/BIR and special forces.'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold text-sm">BRD</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {es ? 'Gestión de Fronteras y Puertos' : 'Border & Port Management'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Monitorización integrada para Ras Jedir/Dhehiba (Libia), Bouchebka/Haïdra/Sakiet Sidi Youssef (Argelia) y los puertos de Radès/Sfax/Bizerta con vigilancia marítima en tiempo real.'
                        : 'Integrated monitoring for Ras Jedir/Dhehiba (Libya), Bouchebka/Haïdra/Sakiet Sidi Youssef (Algeria), and ports of Radès/Sfax/Bizerta with real-time maritime surveillance.'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold text-sm">DIS</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {es
                        ? 'Gestión de Desastres y Protección Civil'
                        : 'Disaster Management & Civil Protection'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Coordinación ONPC para inundaciones, terremotos e incendios forestales — integración con el CNMT (meteorología) y sistemas de alerta temprana para la costa mediterránea y zonas áridas del sur.'
                        : 'ONPC coordination for floods, earthquakes and wildfires — integration with CNMT (meteorology) and early-warning systems for the Mediterranean coast and arid southern zones.'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold text-sm">CPL</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {es
                        ? 'Conformidad INPDP / Loi 63-2004 / ANSI'
                        : 'INPDP / Law 63-2004 / ANSI Compliance'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Arquitectura conforme con Loi 63-2004/INPDP para datos personales, Décret-loi 54-2022 para ciberseguridad y directrices ANSI/CERT-TN para infraestructura crítica nacional.'
                        : 'Architecture compliant with Law 63-2004/INPDP for personal data, Décret-loi 54-2022 for cybersecurity, and ANSI/CERT-TN guidelines for national critical infrastructure.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Grid */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              {es ? 'Marco Regulatorio y de Adquisición' : 'Regulatory & Procurement Framework'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {regulatory.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-xl p-6 border-l-4 border-blue-600 shadow-sm"
                >
                  <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </h2>
            <div className="space-y-6">
              {(es
                ? [
                    {
                      q: '¿Qué agencias de seguridad pública clave opera Túnez?',
                      a: 'La DGPN bajo el Ministerio del Interior cubre 24 gobernaciones con Brigades de recherche, Policía Judicial y Policía de Fronteras. La Garde Nationale gestiona fronteras y zonas rurales/costeras. La ONPC coordina protección civil con línea de emergencia 198.',
                    },
                    {
                      q: '¿Cómo aborda KabatOne la infraestructura crítica de Túnez?',
                      a: 'KabatOne integra gestión del Puerto de Túnez Radès (principal contenedor), Puerto de Sfax, Bizerta y Sousse, STEG (energía) y SONEDE (agua), vigilancia del oleoducto Transmed y coordinación del Aeropuerto TUN (6M+ pasajeros/año).',
                    },
                    {
                      q: '¿Es KabatOne compatible con la protección de datos de Túnez?',
                      a: 'Sí. KabatOne cumple con la Loi organique 63-2004 supervisada por el INPDP. La arquitectura está alineada con el Décret-loi 54-2022 (ciberseguridad) y las directrices ANSI/CERT-TN.',
                    },
                    {
                      q: '¿Cómo apoya KabatOne la gestión de fronteras en Túnez?',
                      a: 'KabatOne gestiona los pasos fronterizos terrestres con Argelia (Bouchebka/Haïdra/Sakiet Sidi Youssef) y Libia (Ras Jedir/Dhehiba) con ANPR integrado, cámaras térmicas y coordinación entre DGPN, Garde Nationale y Unidades Anti-Terroristas.',
                    },
                  ]
                : [
                    {
                      q: 'What key public safety agencies does Tunisia operate?',
                      a: 'The DGPN under the Ministry of Interior covers 24 governorates with Brigades de recherche, Judicial Police and Border Police. The Garde Nationale manages borders and rural/coastal zones. The ONPC coordinates civil protection with emergency line 198.',
                    },
                    {
                      q: 'How does KabatOne address Tunisia critical infrastructure?',
                      a: 'KabatOne integrates management for the Port of Tunis Radès (main container), Port of Sfax, Bizerta and Sousse, STEG (energy) and SONEDE (water), Transmed pipeline surveillance, and coordination for Tunis-Carthage Airport TUN (6M+ passengers/year).',
                    },
                    {
                      q: 'Is KabatOne compliant with Tunisia data protection?',
                      a: 'Yes. KabatOne complies with Law 63-2004 supervised by the INPDP. The architecture aligns with Décret-loi 54-2022 (cybersecurity) and ANSI/CERT-TN guidelines.',
                    },
                    {
                      q: 'How does KabatOne support border management in Tunisia?',
                      a: 'KabatOne manages land border crossings with Algeria (Bouchebka/Haïdra/Sakiet Sidi Youssef) and Libya (Ras Jedir/Dhehiba) with integrated ANPR, thermal cameras, and cross-agency coordination between DGPN, Garde Nationale, and Anti-Terrorism Units.',
                    },
                  ]
              ).map((item) => (
                <div key={item.q} className="border-b border-gray-200 pb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          es={es}
          h2={
            es
              ? '¿Listo para modernizar la seguridad pública en Túnez?'
              : 'Ready to modernise public safety in Tunisia?'
          }
          subtitle={
            es
              ? 'Conecte con expertos de KabatOne para una evaluación de plataforma adaptada a la DGPN, Garde Nationale y ONPC de Túnez.'
              : 'Connect with KabatOne experts for a platform assessment tailored to Tunisia DGPN, Garde Nationale and ONPC.'
          }
        />
      </main>

      <Footer es={es} />
    </>
  )
}
