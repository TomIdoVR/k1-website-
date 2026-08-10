import { generatePageMetadata } from '@/lib/metadata'
import { getTranslations } from 'next-intl/server'
import Script from 'next/script'
import Nav from '@/components/Nav'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareZambia', locale)
}

export default async function PublicSafetySoftwareZambiaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const t = await getTranslations({ locale })

  const articleData = articleSchema(
    es
      ? 'Software de Seguridad Pública para Zambia: ZP/ZAF, DMMU, Lusaka Safe City, ZESCO/Kariba Dam, Copperbelt & Data Protection Act 2021 | KabatOne'
      : 'Public Safety Software for Zambia: ZP/ZAF, DMMU, Lusaka Safe City, ZESCO/Kariba Dam, Copperbelt & Data Protection Act 2021 | KabatOne',
    es
      ? 'Plataforma unificada para la Policía de Zambia (ZP) y ZAF — despacho CAD integrado en 10 provincias, Lusaka Safe City, DMMU gestión de desastres, ZESCO/Kariba Dam, Copperbelt cobre/cobalto, Tunduma/Chirundu/Kazungula fronteras, Data Protection Act 2021/ZICTA y adquisición ZPPA/PPA 2020.'
      : 'Unified platform for Zambia Police (ZP) and ZAF — integrated CAD dispatch across 10 provinces, Lusaka Safe City, DMMU disaster management, ZESCO/Kariba Dam, Copperbelt copper/cobalt, Tunduma/Chirundu/Kazungula borders, Data Protection Act 2021/ZICTA compliance, and ZPPA/PPA 2020 procurement.',
    es
      ? 'https://kabatone.com/es/resources/public-safety-software-zambia'
      : 'https://kabatone.com/resources/public-safety-software-zambia',
    '2025-05-19'
  )

  const faqData = faqPageSchema([
    {
      question: es
        ? '¿Qué agencias de seguridad pública clave opera Zambia?'
        : 'What key public safety agencies does Zambia operate?',
      answer: es
        ? 'La Policía de Zambia (ZP) bajo el Inspector General cubre las 10 provincias con el Servicio Especial de Investigación Criminal (SICS) y la Unidad Táctica. Las Fuerzas Aéreas de Zambia (ZAF) y el Ejército de Zambia apoyan la seguridad interna y fronteriza. La DMMU (Unidad de Gestión de Desastres y Mitigación) coordina emergencias nacionales.'
        : 'The Zambia Police (ZP) under the Inspector General covers all 10 provinces with the Special Investigative Criminal Service (SICS) and Tactical Unit. The Zambia Air Force (ZAF) and Zambia Army support internal and border security. The DMMU (Disaster Management and Mitigation Unit) coordinates national emergencies.',
    },
    {
      question: es
        ? '¿Cómo aborda KabatOne la infraestructura crítica de Zambia?'
        : 'How does KabatOne address Zambia critical infrastructure?',
      answer: es
        ? 'KabatOne integra gestión de ZESCO (Zambia Electricity Supply Corporation) y la Kariba Dam (1,626 MW, compartida con Zimbabwe), las minas de cobre y cobalto del Copperbelt (CNMC/Mopani/Konkola/Chambishi), el corredor TAZARA (Tanzania-Zambia Railway), el Puerto de Lusaka y el Aeropuerto Internacional Kenneth Kaunda (LUN).'
        : 'KabatOne integrates management for ZESCO (Zambia Electricity Supply Corporation) and Kariba Dam (1,626 MW, shared with Zimbabwe), Copperbelt copper/cobalt mines (CNMC/Mopani/Konkola/Chambishi), TAZARA corridor (Tanzania-Zambia Railway), Port of Lusaka and Kenneth Kaunda International Airport (LUN).',
    },
    {
      question: es
        ? '¿Es KabatOne compatible con la legislación de datos de Zambia?'
        : 'Is KabatOne compliant with Zambia data legislation?',
      answer: es
        ? 'Sí. KabatOne está diseñado para cumplir con la Ley de Protección de Datos 2021 supervisada por la ZICTA (Autoridad Reguladora de Tecnología de la Información y Comunicaciones de Zambia). La arquitectura se alinea con la Ley sobre Delitos Informáticos y Electrónicos 2021 y las directrices nacionales de ciberseguridad.'
        : 'Yes. KabatOne is designed to comply with the Data Protection Act 2021 supervised by ZICTA (Zambia Information and Communications Technology Authority). The architecture aligns with the Computer Crimes and Cyber Security Act 2021 and national cybersecurity guidelines.',
    },
    {
      question: es
        ? '¿Cómo apoya KabatOne la gestión de fronteras en Zambia?'
        : 'How does KabatOne support border management in Zambia?',
      answer: es
        ? 'KabatOne gestiona los principales pasos fronterizos: Tunduma (Tanzania, corredor TAZARA), Chirundu/Kariba (Zimbabwe, corredor norte-sur SADC), Kazungula (Botsuana/Zimbabwe/Namibia cuádruple frontera), Kasumulu (Malawi), Cassacatiza (Mozambique) y Nakonde (corredor Tanzania) con ANPR integrado y coordinación ZP/ZAF/Fronteras.'
        : 'KabatOne manages major border crossings: Tunduma (Tanzania, TAZARA corridor), Chirundu/Kariba (Zimbabwe, SADC north-south corridor), Kazungula (Botswana/Zimbabwe/Namibia quadruple border), Kasumulu (Malawi), Cassacatiza (Mozambique) and Nakonde (Tanzania corridor) with integrated ANPR and ZP/ZAF/Border coordination.',
    },
  ])

  const breadcrumbData = breadcrumbSchema([
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es' : 'https://kabatone.com/' },
    {
      name: es ? 'Recursos' : 'Resources',
      url: es ? 'https://kabatone.com/es/resources' : 'https://kabatone.com/resources',
    },
    {
      name: 'Zambia',
      url: es
        ? 'https://kabatone.com/es/resources/public-safety-software-zambia'
        : 'https://kabatone.com/resources/public-safety-software-zambia',
    },
  ])

  const agencies = es
    ? [
        {
          name: 'Policía de Zambia (ZP)',
          detail:
            '10 provincias, SICS Investigación Criminal, Unidad Táctica, Policía de Fronteras — gestión CAD unificada',
        },
        {
          name: 'ZAF / Ejército de Zambia',
          detail:
            'Fuerzas Aéreas y Ejército de Zambia — seguridad interna, fronteriza e infraestructura crítica Copperbelt',
        },
        {
          name: 'DMMU (Gestión de Desastres)',
          detail:
            'Unidad de Gestión de Desastres y Mitigación — inundaciones Valle del Zambeze/Luangwa, sequías del sur y emergencias industriales',
        },
        {
          name: 'ZIS (Inteligencia Nacional)',
          detail:
            'Zambia Intelligence Service — inteligencia nacional e integración en tiempo real con operaciones ZP/ZAF',
        },
        {
          name: 'ZESCO / CNMC',
          detail:
            'Zambia Electricity Supply Corporation y minas Copperbelt (CNMC/Mopani/Konkola/Chambishi) — seguridad crítica',
        },
        {
          name: 'ZPPA / PPA 2020',
          detail:
            'Autoridad Zambia de Adquisición de Bienes y Servicios Públicos — portal e-GP y conformidad PPA 2020',
        },
      ]
    : [
        {
          name: 'Zambia Police (ZP)',
          detail:
            '10 provinces, SICS Criminal Investigation, Tactical Unit, Border Police — unified CAD management',
        },
        {
          name: 'ZAF / Zambia Army',
          detail:
            'Zambia Air Force and Army — internal security, border security and Copperbelt critical infrastructure',
        },
        {
          name: 'DMMU (Disaster Management)',
          detail:
            'Disaster Management and Mitigation Unit — Zambezi/Luangwa Valley flooding, southern droughts and industrial emergencies',
        },
        {
          name: 'ZIS (National Intelligence)',
          detail:
            'Zambia Intelligence Service — national intelligence and real-time integration with ZP/ZAF operations',
        },
        {
          name: 'ZESCO / CNMC',
          detail:
            'Zambia Electricity Supply Corporation and Copperbelt mines (CNMC/Mopani/Konkola/Chambishi) — critical security',
        },
        {
          name: 'ZPPA / PPA 2020',
          detail:
            'Zambia Public Procurement Authority — e-GP portal and PPA 2020 compliance',
        },
      ]

  const regulatory = es
    ? [
        {
          name: 'ZICTA / Data Protection Act 2021',
          detail:
            'Ley de Protección de Datos 2021 — Autoridad Reguladora de TIC de Zambia supervisión y registro obligatorio',
        },
        {
          name: 'Computer Crimes Act 2021',
          detail:
            'Ley sobre Delitos Informáticos y Ciberseguridad 2021 — Política Nacional de Ciberseguridad e-Government',
        },
        {
          name: 'ZPPA / PPA 2020',
          detail:
            'Adquisición pública — portal e-GP Zambia, umbrales de licitación abierta y auditoría de contratos ZPPA',
        },
        {
          name: 'SADC / COMESA / AFCFTA',
          detail:
            'SADC, COMESA y Área de Libre Comercio Continental Africana — cooperación transfronteriza y marcos de seguridad regional',
        },
      ]
    : [
        {
          name: 'ZICTA / Data Protection Act 2021',
          detail:
            'Data Protection Act 2021 — Zambia Information and Communications Technology Authority oversight and mandatory registration',
        },
        {
          name: 'Computer Crimes Act 2021',
          detail:
            'Computer Crimes and Cybersecurity Act 2021 — National Cybersecurity Policy and e-Government guidelines',
        },
        {
          name: 'ZPPA / PPA 2020',
          detail:
            'Public procurement — Zambia e-GP portal, open tender thresholds and ZPPA contract audit',
        },
        {
          name: 'SADC / COMESA / AfCFTA',
          detail:
            'SADC, COMESA and African Continental Free Trade Area — cross-border cooperation and regional security frameworks',
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
              {es ? 'Guía de Mercado — Zambia' : 'Market Guide — Zambia'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {es
                ? 'Software de Seguridad Pública para Zambia'
                : 'Public Safety Software for Zambia'}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              {es
                ? 'Plataforma unificada para la Policía de Zambia y ZAF — despacho CAD integrado en 10 provincias, Lusaka Safe City, DMMU gestión de desastres, ZESCO/Kariba Dam, Copperbelt cobre/cobalto, Tunduma/Chirundu/Kazungula fronteras SADC, Data Protection Act 2021/ZICTA y adquisición ZPPA/PPA 2020.'
                : 'Unified platform for Zambia Police and ZAF — integrated CAD dispatch across 10 provinces, Lusaka Safe City, DMMU disaster management, ZESCO/Kariba Dam, Copperbelt copper/cobalt, Tunduma/Chirundu/Kazungula SADC borders, Data Protection Act 2021/ZICTA compliance, and ZPPA/PPA 2020 procurement.'}
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es
                ? 'Seguridad Pública en Zambia: Contexto Operativo'
                : 'Public Safety in Zambia: Operational Context'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <p className="mb-4">
                  {es
                    ? 'La Policía de Zambia (ZP) bajo el Inspector General cubre las 10 provincias con más de 20,000 efectivos. El Servicio Especial de Investigación Criminal (SICS) y la Unidad Táctica gestionan operaciones especializadas. Las Fuerzas Aéreas (ZAF) y el Ejército de Zambia apoyan la seguridad en el Copperbelt y las zonas fronterizas. La DMMU coordina la respuesta a las inundaciones estacionales del Valle del Zambeze y Luangwa.'
                    : 'The Zambia Police (ZP) under the Inspector General covers all 10 provinces with 20,000+ officers. The Special Investigative Criminal Service (SICS) and Tactical Unit manage specialised operations. The Zambia Air Force (ZAF) and Zambia Army support security in the Copperbelt and border zones. The DMMU coordinates response to seasonal Zambezi and Luangwa Valley flooding.'}
                </p>
                <p>
                  {es
                    ? 'El sistema de emergencias opera a través del 999 (Policía), 991 (Bomberos) y 994 (Ambulancias). El Centro Nacional de Coordinación de Emergencias de Lusaka gestiona los incidentes de mayor escala, con especial atención a las inundaciones de las Cataratas Victorianas, el Valle del Zambeze y el sur de Zambia durante la temporada de lluvias (noviembre-abril).'
                    : 'The emergency system operates through 999 (Police), 991 (Fire) and 994 (Ambulance). The Lusaka National Emergency Coordination Centre manages large-scale incidents, with particular focus on Victoria Falls flooding, Zambezi Valley and southern Zambia flooding during the rainy season (November-April).'}
                </p>
              </div>
              <div>
                <p className="mb-4">
                  {es
                    ? 'Zambia es uno de los mayores productores de cobre del mundo, con el Copperbelt produciendo más de 800,000 toneladas anuales a través de CNMC (Luanshya/Chambishi), Mopani Copper Mines, Konkola Copper Mines (KCM/Vedanta) y Chambishi Copper. ZESCO gestiona la Kariba Dam (1,626 MW, compartida con Zimbabwe) y las redes de distribución nacionales.'
                    : "Zambia is one of the world's largest copper producers, with the Copperbelt producing 800,000+ tonnes annually through CNMC (Luanshya/Chambishi), Mopani Copper Mines, Konkola Copper Mines (KCM/Vedanta) and Chambishi Copper. ZESCO manages Kariba Dam (1,626 MW, shared with Zimbabwe) and national distribution networks."}
                </p>
                <p>
                  {es
                    ? 'La Agenda 8NP (Eight National Priorities) del Presidente Hichilema y el Plan de Desarrollo Nacional Octavo (8NDP) 2022-2026 impulsan la digitalización de la seguridad pública con inversión en Lusaka Safe City, e-Government y plataformas integradas de coordinación multiagencia.'
                    : "President Hichilema's 8NP Agenda (Eight National Priorities) and the Eighth National Development Plan (8NDP) 2022-2026 drive public safety digitalisation with investment in Lusaka Safe City, e-Government and integrated multi-agency coordination platforms."}
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
                ? 'Capacidades de la Plataforma KabatOne para Zambia'
                : 'KabatOne Platform Capabilities for Zambia'}
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
                        ? 'Despacho CAD Multiagencia — 10 Provincias'
                        : 'Multi-Agency CAD Dispatch — 10 Provinces'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Despacho integrado para ZP, ZAF y DMMU con asignación automática de recursos, priorización de llamadas 999/991 y coordinación entre las 10 provincias y el Copperbelt.'
                        : 'Integrated dispatch for ZP, ZAF and DMMU with automated resource assignment, 999/991 call prioritisation and coordination across all 10 provinces and the Copperbelt.'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold text-sm">VMS</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {es ? 'Lusaka Safe City y CCTV Urbano' : 'Lusaka Safe City & Urban CCTV'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Gestión centralizada de las redes CCTV de Lusaka Safe City, Ndola y Kitwe (Copperbelt) — integración con ANPR para gestión del tráfico en la autopista Great North Road y vigilancia de zonas mineras.'
                        : 'Centralised management of Lusaka Safe City, Ndola and Kitwe (Copperbelt) CCTV networks — integration with ANPR for traffic management on the Great North Road and mining zone surveillance.'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold text-sm">CPR</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {es
                        ? 'Seguridad Copperbelt — CNMC/Mopani/Konkola/Chambishi'
                        : 'Copperbelt Security — CNMC/Mopani/Konkola/Chambishi'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Monitorización integrada de las minas de cobre y cobalto (CNMC Luanshya/Chambishi, Mopani, KCM/Vedanta Konkola), refinerías de Ndola y Mufulira, y los corredores de transporte de mineral con alertas de seguridad perimetral.'
                        : 'Integrated monitoring of copper/cobalt mines (CNMC Luanshya/Chambishi, Mopani, KCM/Vedanta Konkola), Ndola and Mufulira refineries and ore transport corridors with perimeter security alerts.'}
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
                        ? 'Fronteras SADC — Tunduma/Chirundu/Kazungula'
                        : 'SADC Borders — Tunduma/Chirundu/Kazungula'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Gestión de Tunduma (Tanzania/TAZARA), Chirundu/Kariba (Zimbabwe), Kazungula (cuádruple frontera Botsuana/Zimbabwe/Namibia), Kasumulu (Malawi), Cassacatiza (Mozambique) y Nakonde (Tanzania) con ANPR y coordinación ZP/ZAF/ZIMRA.'
                        : 'Management of Tunduma (Tanzania/TAZARA), Chirundu/Kariba (Zimbabwe), Kazungula (quadruple border Botswana/Zimbabwe/Namibia), Kasumulu (Malawi), Cassacatiza (Mozambique) and Nakonde (Tanzania) with ANPR and ZP/ZAF/ZIMRA coordination.'}
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
                        ? 'Gestión de Desastres DMMU — Zambeze/Luangwa'
                        : 'DMMU Disaster Management — Zambezi/Luangwa'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Coordinación DMMU para las inundaciones del Valle del Zambeze y Luangwa, ciclones del Índico, sequías del sur — integración con el Servicio Meteorológico de Zambia (ZMD) y alertas tempranas para las Cataratas Victorianas.'
                        : 'DMMU coordination for Zambezi and Luangwa Valley flooding, Indian Ocean cyclones, southern droughts — integration with Zambia Meteorological Department (ZMD) and early warnings for Victoria Falls zone.'}
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
                        ? 'Conformidad ZICTA / Data Protection Act 2021'
                        : 'ZICTA / Data Protection Act 2021 Compliance'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Arquitectura conforme con la Data Protection Act 2021/ZICTA para datos personales, la Ley sobre Delitos Informáticos 2021 para ciberseguridad y la Política Nacional de e-Government para sistemas de gobierno digital.'
                        : 'Architecture compliant with Data Protection Act 2021/ZICTA for personal data, Computer Crimes Act 2021 for cybersecurity, and the National e-Government Policy for digital government systems.'}
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
                      q: '¿Qué agencias de seguridad pública clave opera Zambia?',
                      a: 'La ZP bajo el Inspector General cubre 10 provincias con 20,000+ efectivos y SICS. El ZAF y el Ejército de Zambia apoyan la seguridad interna y Copperbelt. La DMMU coordina inundaciones, sequías y emergencias. El ZIS gestiona la inteligencia nacional.',
                    },
                    {
                      q: '¿Cómo aborda KabatOne la infraestructura crítica de Zambia?',
                      a: 'KabatOne integra gestión de ZESCO/Kariba Dam (1,626 MW), Copperbelt mines (CNMC/Mopani/KCM/Konkola/Chambishi), corredor TAZARA, Lusaka LUN Airport y el sistema de distribución eléctrica nacional.',
                    },
                    {
                      q: '¿Es KabatOne compatible con la legislación de datos de Zambia?',
                      a: 'Sí. KabatOne cumple con la Data Protection Act 2021/ZICTA. La arquitectura está alineada con la Ley sobre Delitos Informáticos 2021 y la Política Nacional de Ciberseguridad.',
                    },
                    {
                      q: '¿Cómo apoya KabatOne la gestión de fronteras en Zambia?',
                      a: 'KabatOne gestiona Tunduma (Tanzania/TAZARA), Chirundu/Kariba (Zimbabwe), Kazungula (cuádruple frontera), Kasumulu (Malawi), Cassacatiza (Mozambique) y Nakonde con ANPR y coordinación ZP/ZAF.',
                    },
                  ]
                : [
                    {
                      q: 'What key public safety agencies does Zambia operate?',
                      a: 'The ZP under the Inspector General covers 10 provinces with 20,000+ officers and SICS. The ZAF and Zambia Army support internal and Copperbelt security. The DMMU coordinates floods, droughts and emergencies. The ZIS manages national intelligence.',
                    },
                    {
                      q: 'How does KabatOne address Zambia critical infrastructure?',
                      a: 'KabatOne integrates management for ZESCO/Kariba Dam (1,626 MW), Copperbelt mines (CNMC/Mopani/KCM/Konkola/Chambishi), TAZARA corridor, Lusaka LUN Airport and national power distribution.',
                    },
                    {
                      q: 'Is KabatOne compliant with Zambia data legislation?',
                      a: 'Yes. KabatOne complies with Data Protection Act 2021/ZICTA. The architecture aligns with the Computer Crimes Act 2021 and the National Cybersecurity Policy.',
                    },
                    {
                      q: 'How does KabatOne support border management in Zambia?',
                      a: 'KabatOne manages Tunduma (Tanzania/TAZARA), Chirundu/Kariba (Zimbabwe), Kazungula (quadruple border), Kasumulu (Malawi), Cassacatiza (Mozambique) and Nakonde with ANPR and ZP/ZAF coordination.',
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
              ? '¿Listo para modernizar la seguridad pública en Zambia?'
              : 'Ready to modernise public safety in Zambia?'
          }
          subtitle={
            es
              ? 'Conecte con expertos de KabatOne para una evaluación de plataforma adaptada a la Policía de Zambia, ZAF y DMMU.'
              : 'Connect with KabatOne experts for a platform assessment tailored to Zambia Police, ZAF and DMMU.'
          }
        />
      </main>

      <Footer es={es} />
    </>
  )
}
