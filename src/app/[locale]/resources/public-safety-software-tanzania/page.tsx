import { generatePageMetadata } from '@/lib/metadata'
import { getTranslations } from 'next-intl/server'
import Script from 'next/script'
import Nav from '@/components/Nav'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareTanzania', locale)
}

export default async function PublicSafetySoftwareTanzaniaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const t = await getTranslations({ locale })

  const articleData = articleSchema(
    es
      ? 'Software de Seguridad Pública para Tanzania: JPF/Policía de Tanzania, NFRS, NEMC/DMS, TPA/Puerto de Dar es Salaam y PDPA 2022 | KabatOne'
      : 'Public Safety Software for Tanzania: JPF/Tanzania Police Force, NFRS, NEMC/DMS, TPA/Port of Dar es Salaam & PDPA 2022 | KabatOne',
    es
      ? 'Plataforma unificada para la Fuerza de Policía de Tanzania y JPF — despacho CAD integrado en 31 regiones, Dar es Salaam Safe City, NFRS protección contra incendios, Puerto de TPA 20M+ TEU, PDPA 2022/TCRA y adquisición PPRA/Tendas.'
      : 'Unified platform for Tanzania Police Force and JPF — integrated CAD dispatch across 31 regions, Dar es Salaam Safe City, NFRS fire protection, TPA Port 20M+ TEU, PDPA 2022/TCRA compliance, and PPRA/Tendas procurement.',
    es
      ? 'https://kabatone.com/es/resources/public-safety-software-tanzania'
      : 'https://kabatone.com/resources/public-safety-software-tanzania',
    '2025-05-19'
  )

  const faqData = faqPageSchema([
    {
      question: es
        ? '¿Qué agencias de seguridad pública clave opera Tanzania?'
        : 'What key public safety agencies does Tanzania operate?',
      answer: es
        ? 'La Fuerza de Policía de Tanzania (TPF) cubre 31 regiones continentales más Zanzíbar con la Fuerza de Policía de Zanzíbar (ZPF). La Fuerza de Defensa del Pueblo Tanzania (TPDF) apoya la seguridad fronteriza. La NFRS (Servicio Nacional de Incendios y Rescate) y el NEMC coordinan emergencias ambientales y naturales.'
        : 'The Tanzania Police Force (TPF) covers 31 mainland regions plus Zanzibar with the Zanzibar Police Force (ZPF). The Tanzania Peoples Defence Force (TPDF) supports border security. The NFRS (National Fire and Rescue Service) and NEMC coordinate environmental and natural emergencies.',
    },
    {
      question: es
        ? '¿Cómo aborda KabatOne la infraestructura crítica de Tanzania?'
        : 'How does KabatOne address Tanzania critical infrastructure?',
      answer: es
        ? 'KabatOne integra gestión de la Autoridad Portuaria de Tanzania (TPA) en Dar es Salaam (20M+ TEU), Tanga, Mtwara y el Ferry de Zanzíbar, la seguridad del gaseoducto TPDC/offshore gas, la red TAZARA/TAZAMA, el Aeropuerto JRO (Kilimanjaro) y el Julius Nyerere International Airport (DAR).'
        : 'KabatOne integrates management for the Tanzania Port Authority (TPA) at Dar es Salaam (20M+ TEU), Tanga, Mtwara and Zanzibar Ferry, TPDC/offshore gas pipeline security, TAZARA/TAZAMA network, Kilimanjaro Airport JRO, and Julius Nyerere International Airport DAR.',
    },
    {
      question: es
        ? '¿Es KabatOne compatible con la legislación de datos de Tanzania?'
        : 'Is KabatOne compliant with Tanzania data legislation?',
      answer: es
        ? 'Sí. KabatOne está diseñado para cumplir con la Ley de Protección de Datos Personales (PDPA) 2022 supervisada por la TCRA y el PDPC. La arquitectura se alinea con la Ley de Delitos Informáticos y Electrónicos 2015 y las directrices de seguridad digital del e-Government Authority (eGA).'
        : 'Yes. KabatOne is designed to comply with the Personal Data Protection Act (PDPA) 2022 supervised by the TCRA and PDPC. The architecture aligns with the Cybercrimes Act 2015 and digital security guidelines of the e-Government Authority (eGA).',
    },
    {
      question: es
        ? '¿Cómo apoya KabatOne la seguridad fronteriza en Tanzania?'
        : 'How does KabatOne support border security in Tanzania?',
      answer: es
        ? 'KabatOne proporciona gestión para los pasos fronterizos principales: Namanga/Holili/Sirari (Kenia), Tunduma/Kasumulu (Zambia/Malawi), Mutukula (Uganda), Rusumo (Ruanda) y Kabanga (Burundi) con ANPR integrado y coordinación entre TPF, TPDF e Inmigración.'
        : 'KabatOne provides management for major border crossings: Namanga/Holili/Sirari (Kenya), Tunduma/Kasumulu (Zambia/Malawi), Mutukula (Uganda), Rusumo (Rwanda) and Kabanga (Burundi) with integrated ANPR and coordination between TPF, TPDF and Immigration.',
    },
  ])

  const breadcrumbData = breadcrumbSchema([
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es' : 'https://kabatone.com/' },
    {
      name: es ? 'Recursos' : 'Resources',
      url: es ? 'https://kabatone.com/es/resources' : 'https://kabatone.com/resources',
    },
    {
      name: es ? 'Tanzania' : 'Tanzania',
      url: es
        ? 'https://kabatone.com/es/resources/public-safety-software-tanzania'
        : 'https://kabatone.com/resources/public-safety-software-tanzania',
    },
  ])

  const agencies = es
    ? [
        {
          name: 'Fuerza de Policía de Tanzania (TPF)',
          detail:
            '31 regiones continentales, Brigada Antiterrorista (ATU), Unidad de Policía de Fronteras (BPU) — despacho CAD unificado',
        },
        {
          name: 'Fuerza de Policía de Zanzíbar (ZPF)',
          detail:
            'Unguja y Pemba — seguridad costera e insular con coordinación integrada con TPF continental',
        },
        {
          name: 'NFRS (Servicio Nacional de Incendios y Rescate)',
          detail:
            'Protección contra incendios urbanos e industriales — Dar es Salaam, Mwanza, Arusha y puertos',
        },
        {
          name: 'NEMC / DMS',
          detail:
            'Centro Nacional de Gestión de Desastres — coordinación de inundaciones, sequías y emergencias del Monte Kilimanjaro',
        },
        {
          name: 'TPA / TPDC',
          detail:
            'Autoridad Portuaria de Tanzania — Dar es Salaam 20M+ TEU; Empresa de Desarrollo Petrolífero Tanzania — gas offshore',
        },
        {
          name: 'PPRA / GPSA',
          detail:
            'Autoridad de Regulación de Adquisiciones Públicas y Agencia General de Suministros del Estado — portal Tendas',
        },
      ]
    : [
        {
          name: 'Tanzania Police Force (TPF)',
          detail:
            '31 mainland regions, Anti-Terrorism Unit (ATU), Border Police Unit (BPU) — unified CAD dispatch',
        },
        {
          name: 'Zanzibar Police Force (ZPF)',
          detail:
            'Unguja and Pemba islands — coastal and island security with integrated coordination with mainland TPF',
        },
        {
          name: 'NFRS (National Fire and Rescue Service)',
          detail:
            'Urban and industrial fire protection — Dar es Salaam, Mwanza, Arusha and port coverage',
        },
        {
          name: 'NEMC / DMS',
          detail:
            'National Disaster Management Centre — flood, drought and Mount Kilimanjaro emergency coordination',
        },
        {
          name: 'TPA / TPDC',
          detail:
            'Tanzania Port Authority — Dar es Salaam 20M+ TEU; Tanzania Petroleum Development Corporation — offshore gas',
        },
        {
          name: 'PPRA / GPSA',
          detail:
            'Public Procurement Regulatory Authority and Government Procurement Services Agency — Tendas portal',
        },
      ]

  const regulatory = es
    ? [
        {
          name: 'PDPA 2022 / TCRA / PDPC',
          detail:
            'Ley de Protección de Datos Personales 2022 — Autoridad de Regulación de Comunicaciones de Tanzania y Comisionado de Protección de Datos',
        },
        {
          name: 'Ley de Delitos Informáticos y Electrónicos 2015',
          detail:
            'Ciberseguridad y delitos electrónicos — coordinación eGA (Autoridad de Gobierno Electrónico) y CERT-TZ',
        },
        {
          name: 'PPRA / Tendas',
          detail:
            'Adquisición pública — portal de contratación Tendas, umbrales de licitación abierta y cumplimiento de auditoría',
        },
        {
          name: 'EAC / SADC Frameworks',
          detail:
            'Comunidad de África Oriental y SADC — marcos de cooperación transfronteriza e integración regional de seguridad',
        },
      ]
    : [
        {
          name: 'PDPA 2022 / TCRA / PDPC',
          detail:
            'Personal Data Protection Act 2022 — Tanzania Communications Regulatory Authority and Data Protection Commissioner',
        },
        {
          name: 'Cybercrimes Act 2015',
          detail:
            'Cybersecurity and electronic offences — eGA (e-Government Authority) coordination and CERT-TZ',
        },
        {
          name: 'PPRA / Tendas',
          detail:
            'Public procurement — Tendas contracting portal, open tender thresholds and audit compliance',
        },
        {
          name: 'EAC / SADC Frameworks',
          detail:
            'East African Community and SADC — cross-border cooperation frameworks and regional security integration',
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
              {es ? 'Guía de Mercado — Tanzania' : 'Market Guide — Tanzania'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {es
                ? 'Software de Seguridad Pública para Tanzania'
                : 'Public Safety Software for Tanzania'}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              {es
                ? 'Plataforma unificada para la Fuerza de Policía de Tanzania y JPF — despacho CAD integrado en 31 regiones, Dar es Salaam Safe City, NFRS protección contra incendios, TPA Puerto 20M+ TEU, PDPA 2022/TCRA y adquisición PPRA/Tendas.'
                : 'Unified platform for Tanzania Police Force and JPF — integrated CAD dispatch across 31 regions, Dar es Salaam Safe City, NFRS fire protection, TPA Port 20M+ TEU, PDPA 2022/TCRA compliance, and PPRA/Tendas procurement.'}
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es
                ? 'Seguridad Pública en Tanzania: Contexto Operativo'
                : 'Public Safety in Tanzania: Operational Context'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <p className="mb-4">
                  {es
                    ? 'La Fuerza de Policía de Tanzania (TPF) bajo el Ministerio del Interior cubre las 31 regiones continentales con 65,000+ efectivos. La Fuerza de Policía de Zanzíbar (ZPF) gestiona Unguja y Pemba con coordinación integrada. La Unidad Antiterrorista (ATU) y las Fuerzas de Defensa del Pueblo Tanzania (TPDF) apoyan operaciones de alta prioridad y seguridad fronteriza.'
                    : 'The Tanzania Police Force (TPF) under the Ministry of Home Affairs covers all 31 mainland regions with 65,000+ officers. The Zanzibar Police Force (ZPF) manages Unguja and Pemba with integrated coordination. The Anti-Terrorism Unit (ATU) and Tanzania Peoples Defence Force (TPDF) support high-priority operations and border security.'}
                </p>
                <p>
                  {es
                    ? 'El sistema de emergencias opera a través del 112 (número único de emergencias), con la NFRS coordinando incendios, la NEMC/DMS gestionando desastres y el Centro de Operaciones de Emergencia de Dar es Salaam coordinando los incidentes urbanos de mayor escala.'
                    : 'The emergency system operates through 112 (single emergency number), with NFRS coordinating fires, NEMC/DMS managing disasters, and the Dar es Salaam Emergency Operations Centre coordinating large-scale urban incidents.'}
                </p>
              </div>
              <div>
                <p className="mb-4">
                  {es
                    ? 'Tanzania es el hub logístico del África Oriental con el Puerto de Dar es Salaam (20M+ TEU, mayor puerto de la costa Este de África), el Corredor TAZARA/TAZAMA conectando Zambia y la RDC, el gas offshore del TPDC en el Océano Índico, el Aeropuerto JRO (Kilimanjaro) y el Julius Nyerere International Airport (DAR).'
                    : 'Tanzania is the East African logistics hub with the Port of Dar es Salaam (20M+ TEU, largest East Africa coast port), the TAZARA/TAZAMA Corridor connecting Zambia and DRC, TPDC offshore gas in the Indian Ocean, Kilimanjaro Airport JRO, and Julius Nyerere International Airport DAR.'}
                </p>
                <p>
                  {es
                    ? 'La Visión de Tanzania 2025 y el Plan de Desarrollo a Largo Plazo 2050 (LTPP) impulsan la digitalización de la seguridad pública con inversión en CCTV urbano, CAD y plataformas integradas de gestión de incidentes respaldadas por el e-Government Authority (eGA).'
                    : "Tanzania's Vision 2025 and Long-Term Perspective Plan 2050 (LTPP) drive public safety digitalisation with investment in urban CCTV, CAD and integrated incident management platforms backed by the e-Government Authority (eGA)."}
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
                ? 'Capacidades de la Plataforma KabatOne para Tanzania'
                : 'KabatOne Platform Capabilities for Tanzania'}
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
                        ? 'Despacho CAD Multiagencia — 31 Regiones'
                        : 'Multi-Agency CAD Dispatch — 31 Regions'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Despacho integrado para TPF, ZPF y NFRS con asignación automática de recursos, priorización de llamadas 112 y coordinación entre regiones continentales y Zanzíbar.'
                        : 'Integrated dispatch for TPF, ZPF and NFRS with automated resource assignment, 112 call prioritisation, and coordination between mainland regions and Zanzibar.'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold text-sm">VMS</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {es ? 'Dar es Salaam Safe City y CCTV' : 'Dar es Salaam Safe City & CCTV'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Gestión centralizada de las redes CCTV de Dar es Salaam Safe City, Arusha y Mwanza — integración con ANPR para control de tráfico y vigilancia de zonas industriales y portuarias.'
                        : 'Centralised management of Dar es Salaam Safe City, Arusha and Mwanza CCTV networks — integration with ANPR for traffic control and surveillance of industrial and port zones.'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold text-sm">PORT</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {es
                        ? 'Seguridad Portuaria TPA — Dar es Salaam/Tanga/Mtwara'
                        : 'TPA Port Security — Dar es Salaam/Tanga/Mtwara'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Vigilancia integrada del Puerto de Dar es Salaam (20M+ TEU), Tanga, Mtwara y el Ferry de Zanzíbar con monitorización de embarcaciones, control de acceso y coordinación con Tanzania Revenue Authority.'
                        : 'Integrated surveillance for Port of Dar es Salaam (20M+ TEU), Tanga, Mtwara and Zanzibar Ferry with vessel monitoring, access control and coordination with Tanzania Revenue Authority.'}
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
                      {es
                        ? 'Gestión de Fronteras EAC — 6 Países Limítrofes'
                        : 'EAC Border Management — 6 Neighbouring Countries'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Gestión de pasos fronterizos con Kenia (Namanga/Holili/Sirari), Zambia/Malawi (Tunduma/Kasumulu), Uganda (Mutukula), Ruanda (Rusumo) y Burundi (Kabanga) con ANPR y cámaras térmicas.'
                        : 'Management of border crossings with Kenya (Namanga/Holili/Sirari), Zambia/Malawi (Tunduma/Kasumulu), Uganda (Mutukula), Rwanda (Rusumo) and Burundi (Kabanga) with ANPR and thermal cameras.'}
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
                        ? 'Gestión de Desastres NEMC/DMS'
                        : 'NEMC/DMS Disaster Management'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Coordinación para inundaciones del Valle del Rift, erupciones del Ol Doinyo Lengai, incendios forestales del Kilimanjaro y ciclones del Océano Índico — integración con Tanzania Meteorological Authority (TMA).'
                        : 'Coordination for Rift Valley floods, Ol Doinyo Lengai eruptions, Kilimanjaro wildfires and Indian Ocean cyclones — integration with Tanzania Meteorological Authority (TMA).'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold text-sm">CPL</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {es ? 'Conformidad PDPA 2022 / TCRA / eGA' : 'PDPA 2022 / TCRA / eGA Compliance'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Arquitectura conforme con PDPA 2022/TCRA/PDPC para datos personales, Ley de Delitos Informáticos 2015 para ciberseguridad y directrices eGA para sistemas de gobierno digital.'
                        : 'Architecture compliant with PDPA 2022/TCRA/PDPC for personal data, Cybercrimes Act 2015 for cybersecurity, and eGA guidelines for digital government systems.'}
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
                      q: '¿Qué agencias de seguridad pública clave opera Tanzania?',
                      a: 'La Fuerza de Policía de Tanzania (TPF) cubre 31 regiones continentales con 65,000+ efectivos. La Fuerza de Policía de Zanzíbar (ZPF) gestiona las islas. La NFRS coordina incendios y rescates. La TPDF y la ATU apoyan operaciones de alta prioridad y seguridad fronteriza.',
                    },
                    {
                      q: '¿Cómo aborda KabatOne la infraestructura crítica de Tanzania?',
                      a: 'KabatOne integra gestión del Puerto de Dar es Salaam (20M+ TEU), Tanga, Mtwara y Ferry de Zanzíbar, la seguridad del gas offshore TPDC, la red TAZARA/TAZAMA, el Aeropuerto JRO (Kilimanjaro) y el Julius Nyerere International Airport (DAR).',
                    },
                    {
                      q: '¿Es KabatOne compatible con la legislación de datos de Tanzania?',
                      a: 'Sí. KabatOne cumple con la PDPA 2022 supervisada por la TCRA y el PDPC. La arquitectura está alineada con la Ley de Delitos Informáticos 2015 y las directrices de seguridad digital del eGA.',
                    },
                    {
                      q: '¿Cómo apoya KabatOne la seguridad fronteriza en Tanzania?',
                      a: 'KabatOne gestiona los pasos fronterizos con Kenia (Namanga/Holili/Sirari), Zambia/Malawi (Tunduma/Kasumulu), Uganda (Mutukula), Ruanda (Rusumo) y Burundi (Kabanga) con ANPR integrado y coordinación entre TPF, TPDF e Inmigración.',
                    },
                  ]
                : [
                    {
                      q: 'What key public safety agencies does Tanzania operate?',
                      a: 'The Tanzania Police Force (TPF) covers 31 mainland regions with 65,000+ officers. The Zanzibar Police Force (ZPF) manages the islands. The NFRS coordinates fires and rescues. The TPDF and ATU support high-priority operations and border security.',
                    },
                    {
                      q: 'How does KabatOne address Tanzania critical infrastructure?',
                      a: 'KabatOne integrates management for the Port of Dar es Salaam (20M+ TEU), Tanga, Mtwara and Zanzibar Ferry, TPDC offshore gas security, TAZARA/TAZAMA network, Kilimanjaro Airport JRO, and Julius Nyerere International Airport DAR.',
                    },
                    {
                      q: 'Is KabatOne compliant with Tanzania data legislation?',
                      a: 'Yes. KabatOne complies with PDPA 2022 supervised by TCRA and PDPC. The architecture aligns with the Cybercrimes Act 2015 and digital security guidelines of the eGA.',
                    },
                    {
                      q: 'How does KabatOne support border security in Tanzania?',
                      a: 'KabatOne manages border crossings with Kenya (Namanga/Holili/Sirari), Zambia/Malawi (Tunduma/Kasumulu), Uganda (Mutukula), Rwanda (Rusumo) and Burundi (Kabanga) with integrated ANPR and coordination between TPF, TPDF and Immigration.',
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
              ? '¿Listo para modernizar la seguridad pública en Tanzania?'
              : 'Ready to modernise public safety in Tanzania?'
          }
          subtitle={
            es
              ? 'Conecte con expertos de KabatOne para una evaluación de plataforma adaptada a la TPF, ZPF y NFRS de Tanzania.'
              : 'Connect with KabatOne experts for a platform assessment tailored to Tanzania TPF, ZPF and NFRS.'
          }
        />
      </main>

      <Footer es={es} />
    </>
  )
}
