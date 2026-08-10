import { generatePageMetadata } from '@/lib/metadata'
import { getTranslations } from 'next-intl/server'
import Script from 'next/script'
import Nav from '@/components/Nav'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareZimbabwe', locale)
}

export default async function PublicSafetySoftwareZimbabwePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const t = await getTranslations({ locale })

  const articleData = articleSchema(
    es
      ? 'Software de Seguridad Pública para Zimbabue: ZRP/ZNA, ZINWA/ZIMRA, Harare Safe City, ZETDC/ZESA & Cybercrime Act 2017 | KabatOne'
      : 'Public Safety Software for Zimbabwe: ZRP/ZNA, ZINWA/ZIMRA, Harare Safe City, ZETDC/ZESA & Cybercrime Act 2017 | KabatOne',
    es
      ? 'Plataforma unificada para la Policía de la República de Zimbabue (ZRP) y ZNA — despacho CAD integrado en 10 provincias, Harare Safe City, ZINWA gestión hídrica, Zimbabwe Power Company/ZETDC, Puerto Beitbridge/Forbes y Cybercrime Act 2017/PDA y adquisición PRAZ/PFMA.'
      : 'Unified platform for Zimbabwe Republic Police (ZRP) and ZNA — integrated CAD dispatch across 10 provinces, Harare Safe City, ZINWA water management, Zimbabwe Power Company/ZETDC, Beitbridge/Forbes border, Cybercrime Act 2017/PDA compliance, and PRAZ/PFMA procurement.',
    es
      ? 'https://kabatone.com/es/resources/public-safety-software-zimbabwe'
      : 'https://kabatone.com/resources/public-safety-software-zimbabwe',
    '2025-05-19'
  )

  const faqData = faqPageSchema([
    {
      question: es
        ? '¿Qué agencias de seguridad pública clave opera Zimbabue?'
        : 'What key public safety agencies does Zimbabwe operate?',
      answer: es
        ? 'La Policía de la República de Zimbabue (ZRP) bajo el Ministerio del Interior cubre las 10 provincias con el Servicio de Soporte Táctico y la Unidad de Investigaciones Criminales (CID). El Ejército Nacional de Zimbabue (ZNA) apoya la seguridad interna. La Agencia de Gestión de Desastres (Civil Protection Unit) coordina emergencias nacionales incluyendo ciclones, inundaciones y sequías.'
        : 'The Zimbabwe Republic Police (ZRP) under the Ministry of Home Affairs covers all 10 provinces with the Support Unit Tactical Service and Criminal Investigation Department (CID). The Zimbabwe National Army (ZNA) supports internal security. The Disaster Management Agency (Civil Protection Unit) coordinates national emergencies including cyclones, floods and droughts.',
    },
    {
      question: es
        ? '¿Cómo aborda KabatOne la infraestructura crítica de Zimbabue?'
        : 'How does KabatOne address Zimbabwe critical infrastructure?',
      answer: es
        ? 'KabatOne integra gestión de Zimbabwe Power Company (ZPC) y ZETDC (distribución eléctrica), la Barragem de Kariba (1,626 MW, compartida con Zambia), ZINWA (agua), el corredor ferroviario NRZ hacia los puertos de Mozambique (Beira/Maputo), las minas de diamante de Chiadzwa/Marange, Zimplats (platino) y el Aeropuerto Internacional de Harare (HRE).'
        : 'KabatOne integrates management for Zimbabwe Power Company (ZPC) and ZETDC (power distribution), Kariba Dam (1,626 MW, shared with Zambia), ZINWA (water), NRZ railway corridor to Mozambique ports (Beira/Maputo), Chiadzwa/Marange diamond mines, Zimplats (platinum), and Harare International Airport (HRE).',
    },
    {
      question: es
        ? '¿Es KabatOne compatible con la legislación de datos de Zimbabue?'
        : 'Is KabatOne compliant with Zimbabwe data legislation?',
      answer: es
        ? 'Sí. KabatOne está diseñado para cumplir con la Ley de Protección de Datos Personales (PDA) 2021 supervisada por la POTRAZ (Autoridad Reguladora de los Servicios Postales y de Telecomunicaciones). La arquitectura se alinea con la Ley sobre Delitos Informáticos y Ciberdelincuencia 2017 y la Política Nacional de Ciberseguridad del Ministerio de ICT.'
        : 'Yes. KabatOne is designed to comply with the Personal Data Protection Act (PDA) 2021 supervised by POTRAZ (Postal and Telecommunications Regulatory Authority). The architecture aligns with the Cybercrime and Cybersecurity Act 2017 and the Ministry of ICT National Cybersecurity Policy.',
    },
    {
      question: es
        ? '¿Cómo apoya KabatOne la gestión de fronteras en Zimbabue?'
        : 'How does KabatOne support border management in Zimbabwe?',
      answer: es
        ? 'KabatOne gestiona los principales pasos fronterizos: Beitbridge (Sudáfrica, uno de los más transitados de África), Forbes/Nyamapanda (Mozambique), Chirundu/Kariba (Zambia), Kazungula (Botsuana/Zambia/Namibia/Zimbabue cuádruple frontera) y Victoria Falls/Plumtree (Botsuana) con ANPR integrado y coordinación ZRP/ZNA/ZIMRA.'
        : 'KabatOne manages major border crossings: Beitbridge (South Africa, one of Africa\'s busiest), Forbes/Nyamapanda (Mozambique), Chirundu/Kariba (Zambia), Kazungula (Botswana/Zambia/Namibia/Zimbabwe quadruple border) and Victoria Falls/Plumtree (Botswana) with integrated ANPR and ZRP/ZNA/ZIMRA coordination.',
    },
  ])

  const breadcrumbData = breadcrumbSchema([
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es' : 'https://kabatone.com/' },
    {
      name: es ? 'Recursos' : 'Resources',
      url: es ? 'https://kabatone.com/es/resources' : 'https://kabatone.com/resources',
    },
    {
      name: es ? 'Zimbabue' : 'Zimbabwe',
      url: es
        ? 'https://kabatone.com/es/resources/public-safety-software-zimbabwe'
        : 'https://kabatone.com/resources/public-safety-software-zimbabwe',
    },
  ])

  const agencies = es
    ? [
        {
          name: 'ZRP (Policía de la República de Zimbabue)',
          detail:
            '10 provincias, CID, Support Unit Tactical, Policía de Fronteras — gestión CAD unificada',
        },
        {
          name: 'ZNA (Ejército Nacional de Zimbabue)',
          detail:
            'Seguridad interna y fronteriza — apoyo a operaciones ZRP e infraestructura crítica nacional',
        },
        {
          name: 'Civil Protection Unit / DMA',
          detail:
            'Unidad de Protección Civil y Agencia de Gestión de Desastres — ciclones, inundaciones, sequías y emergencias industriales',
        },
        {
          name: 'CIO',
          detail:
            'Organización Central de Inteligencia — inteligencia nacional e integración en tiempo real con operaciones ZRP/ZNA',
        },
        {
          name: 'ZPC / ZETDC / ZINWA',
          detail:
            'Zimbabwe Power Company, ZETDC (distribución eléctrica) y ZINWA (agua) — seguridad de infraestructura crítica',
        },
        {
          name: 'PRAZ / PFMA',
          detail:
            'Autoridad Reguladora de Adquisiciones Públicas — portal e-procurement y conformidad PFMA (Ley de Gestión Financiera Pública)',
        },
      ]
    : [
        {
          name: 'ZRP (Zimbabwe Republic Police)',
          detail:
            '10 provinces, CID, Support Unit Tactical, Border Police — unified CAD management',
        },
        {
          name: 'ZNA (Zimbabwe National Army)',
          detail:
            'Internal and border security — support for ZRP operations and national critical infrastructure',
        },
        {
          name: 'Civil Protection Unit / DMA',
          detail:
            'Civil Protection Unit and Disaster Management Agency — cyclones, floods, droughts and industrial emergencies',
        },
        {
          name: 'CIO',
          detail:
            'Central Intelligence Organisation — national intelligence and real-time integration with ZRP/ZNA operations',
        },
        {
          name: 'ZPC / ZETDC / ZINWA',
          detail:
            'Zimbabwe Power Company, ZETDC (power distribution) and ZINWA (water) — critical infrastructure security',
        },
        {
          name: 'PRAZ / PFMA',
          detail:
            'Public Procurement and Disposal of Public Assets Authority — e-procurement portal and PFMA compliance',
        },
      ]

  const regulatory = es
    ? [
        {
          name: 'PDA 2021 / POTRAZ',
          detail:
            'Ley de Protección de Datos Personales 2021 — Autoridad Reguladora Postal y de Telecomunicaciones supervisión y registro',
        },
        {
          name: 'Cybercrime Act 2017 / Min. ICT',
          detail:
            'Ley sobre Delitos Informáticos y Ciberdelincuencia 2017 — Ministerio de ICT Política Nacional de Ciberseguridad',
        },
        {
          name: 'PFMA / PRAZ',
          detail:
            'Ley de Gestión Financiera Pública y PRAZ — portal e-procurement, umbrales de licitación abierta y auditoría de contratos',
        },
        {
          name: 'SADC / COMESA Frameworks',
          detail:
            'Comunidad de Desarrollo del África Austral y COMESA — cooperación transfronteriza y marcos regionales de seguridad',
        },
      ]
    : [
        {
          name: 'PDA 2021 / POTRAZ',
          detail:
            'Personal Data Protection Act 2021 — Postal and Telecommunications Regulatory Authority oversight and registration',
        },
        {
          name: 'Cybercrime Act 2017 / Min. ICT',
          detail:
            'Cybercrime and Cybersecurity Act 2017 — Ministry of ICT National Cybersecurity Policy',
        },
        {
          name: 'PFMA / PRAZ',
          detail:
            'Public Finance Management Act and PRAZ — e-procurement portal, open tender thresholds and contract audit',
        },
        {
          name: 'SADC / COMESA Frameworks',
          detail:
            'Southern African Development Community and COMESA — cross-border cooperation and regional security frameworks',
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
              {es ? 'Guía de Mercado — Zimbabue' : 'Market Guide — Zimbabwe'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {es
                ? 'Software de Seguridad Pública para Zimbabue'
                : 'Public Safety Software for Zimbabwe'}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              {es
                ? 'Plataforma unificada para la ZRP y ZNA — despacho CAD integrado en 10 provincias, Harare Safe City, Civil Protection Unit gestión de desastres, ZPC/ZETDC/Kariba Dam, paso fronterizo Beitbridge (Sudáfrica), PDA 2021/POTRAZ y adquisición PRAZ/PFMA.'
                : 'Unified platform for Zimbabwe ZRP and ZNA — integrated CAD dispatch across 10 provinces, Harare Safe City, Civil Protection Unit disaster management, ZPC/ZETDC/Kariba Dam, Beitbridge border (South Africa), PDA 2021/POTRAZ compliance, and PRAZ/PFMA procurement.'}
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es
                ? 'Seguridad Pública en Zimbabue: Contexto Operativo'
                : 'Public Safety in Zimbabwe: Operational Context'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <p className="mb-4">
                  {es
                    ? 'La Policía de la República de Zimbabue (ZRP) bajo el Ministerio del Interior cubre las 10 provincias con más de 35,000 efectivos. El Departamento de Investigación Criminal (CID) y el Servicio de Soporte Táctico gestionan operaciones especializadas. El Ejército Nacional de Zimbabue (ZNA) y la Organización Central de Inteligencia (CIO) apoyan la seguridad interna y fronteriza.'
                    : 'The Zimbabwe Republic Police (ZRP) under the Ministry of Home Affairs covers all 10 provinces with 35,000+ officers. The Criminal Investigation Department (CID) and Support Unit Tactical Service manage specialised operations. The Zimbabwe National Army (ZNA) and Central Intelligence Organisation (CIO) support internal and border security.'}
                </p>
                <p>
                  {es
                    ? 'El sistema de emergencias opera a través del 999 (Policía), 993 (Bomberos/Ambulancias) y la Unidad de Protección Civil (CPU). La Agencia de Gestión de Desastres (DMA) coordina la respuesta a los ciclones del Índico (Cyclone Idai afectó a Chimanimani 2019), las inundaciones del Limpopo y las sequías del sur de Zimbabue.'
                    : 'The emergency system operates through 999 (Police), 993 (Fire/Ambulance) and the Civil Protection Unit (CPU). The Disaster Management Agency (DMA) coordinates response to Indian Ocean cyclones (Cyclone Idai hit Chimanimani 2019), Limpopo flooding and southern Zimbabwe droughts.'}
                </p>
              </div>
              <div>
                <p className="mb-4">
                  {es
                    ? 'La infraestructura crítica de Zimbabue incluye la Barragem de Kariba (1,626 MW, segunda mayor presa de hormigón del mundo, compartida con Zambia), Zimbabwe Power Company (ZPC) y ZETDC, ZINWA (agua), las minas de diamante de Chiadzwa/Marange y los depósitos de platino de Zimplats en el Great Dyke. El corredor ferroviario NRZ conecta Harare con los puertos de Beira/Maputo.'
                    : "Zimbabwe's critical infrastructure includes Kariba Dam (1,626 MW, world's second largest concrete arch dam, shared with Zambia), Zimbabwe Power Company (ZPC) and ZETDC, ZINWA (water), Chiadzwa/Marange diamond mines and Zimplats platinum deposits on the Great Dyke. The NRZ railway corridor connects Harare to Beira/Maputo ports."}
                </p>
                <p>
                  {es
                    ? 'La Visión 2030 del Presidente Mnangagwa y la Estrategia Nacional de Ciberseguridad 2021-2025 impulsan la digitalización de la seguridad pública con inversión en Harare Safe City, sistemas biométricos NIKUV/ZEC y plataformas de coordinación interagencial.'
                    : "President Mnangagwa's Vision 2030 and the National Cybersecurity Strategy 2021-2025 drive public safety digitalisation with investment in Harare Safe City, NIKUV/ZEC biometric systems and inter-agency coordination platforms."}
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
                ? 'Capacidades de la Plataforma KabatOne para Zimbabue'
                : 'KabatOne Platform Capabilities for Zimbabwe'}
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
                        ? 'Despacho integrado para ZRP, ZNA y CPU con asignación automática de recursos, priorización de llamadas 999/993 y coordinación entre las 10 provincias y los municipios urbanos de Harare/Bulawayo.'
                        : 'Integrated dispatch for ZRP, ZNA and CPU with automated resource assignment, 999/993 call prioritisation and coordination across all 10 provinces and urban municipalities of Harare/Bulawayo.'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold text-sm">VMS</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {es ? 'Harare Safe City y CCTV Urbano' : 'Harare Safe City & Urban CCTV'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Gestión centralizada de las redes CCTV de Harare Safe City, Bulawayo y Mutare — integración con ANPR para gestión del tráfico, vigilancia del CBD y monitorización de zonas industriales.'
                        : 'Centralised management of Harare Safe City, Bulawayo and Mutare CCTV networks — integration with ANPR for traffic management, CBD surveillance and industrial zone monitoring.'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold text-sm">DAM</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {es
                        ? 'Seguridad Kariba Dam y ZPC/ZETDC'
                        : 'Kariba Dam & ZPC/ZETDC Security'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Monitorización integrada de la Barragem de Kariba (1,626 MW), las estaciones de Zimbabwe Power Company, la red ZETDC y el Sistema de Transmisión ZESA con alertas de seguridad y coordinación ZNA para infraestructura crítica.'
                        : 'Integrated monitoring of Kariba Dam (1,626 MW), Zimbabwe Power Company stations, ZETDC network and ZESA Transmission System with security alerts and ZNA coordination for critical infrastructure.'}
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
                        ? 'Beitbridge y Fronteras SADC/COMESA'
                        : 'Beitbridge & SADC/COMESA Borders'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Gestión de Beitbridge (Sudáfrica, más de 5 millones de cruces/año), Forbes/Nyamapanda (Mozambique), Chirundu/Kariba (Zambia), Kazungula (cuádruple frontera) y Victoria Falls/Plumtree (Botsuana) con ANPR y coordinación ZIMRA/ZRP/ZNA.'
                        : 'Management of Beitbridge (South Africa, 5M+ crossings/year), Forbes/Nyamapanda (Mozambique), Chirundu/Kariba (Zambia), Kazungula (quadruple border) and Victoria Falls/Plumtree (Botswana) with ANPR and ZIMRA/ZRP/ZNA coordination.'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold text-sm">MIN</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {es
                        ? 'Seguridad Minera — Chiadzwa/Zimplats/Great Dyke'
                        : 'Mining Security — Chiadzwa/Zimplats/Great Dyke'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Monitorización de las minas de diamante Chiadzwa/Marange (ZCDC), los depósitos de platino de Zimplats (Ngezi/Mhondoro) en el Great Dyke y las operaciones de Zimbabwe Consolidated Diamond Company con coordinación ZRP/ZNA para contrabando y seguridad perimetral.'
                        : 'Monitoring of Chiadzwa/Marange diamond mines (ZCDC), Zimplats platinum deposits (Ngezi/Mhondoro) on the Great Dyke and Zimbabwe Consolidated Diamond Company operations with ZRP/ZNA coordination for smuggling and perimeter security.'}
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
                        ? 'Conformidad PDA 2021 / Cybercrime Act 2017'
                        : 'PDA 2021 / Cybercrime Act 2017 Compliance'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Arquitectura conforme con la PDA 2021/POTRAZ para datos personales, la Ley sobre Delitos Informáticos 2017 para ciberseguridad y la Política Nacional de Ciberseguridad 2021-2025 del Ministerio de ICT.'
                        : 'Architecture compliant with PDA 2021/POTRAZ for personal data, Cybercrime Act 2017 for cybersecurity, and the Ministry of ICT National Cybersecurity Policy 2021-2025.'}
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
                      q: '¿Qué agencias de seguridad pública clave opera Zimbabue?',
                      a: 'La ZRP bajo el Ministerio del Interior cubre 10 provincias con 35,000+ efectivos y CID. El ZNA apoya la seguridad interna y fronteriza. La CPU/DMA coordina ciclones, inundaciones y emergencias. El CIO gestiona la inteligencia nacional.',
                    },
                    {
                      q: '¿Cómo aborda KabatOne la infraestructura crítica de Zimbabue?',
                      a: 'KabatOne integra gestión de ZPC/ZETDC/Kariba Dam (1,626 MW), ZINWA agua, NRZ ferroviario, minas de diamante Chiadzwa/Marange, Zimplats platinum Great Dyke y el Aeropuerto Internacional de Harare HRE.',
                    },
                    {
                      q: '¿Es KabatOne compatible con la legislación de datos de Zimbabue?',
                      a: 'Sí. KabatOne cumple con la PDA 2021/POTRAZ. La arquitectura está alineada con la Ley sobre Delitos Informáticos 2017 y la Política Nacional de Ciberseguridad 2021-2025 del Ministerio de ICT.',
                    },
                    {
                      q: '¿Cómo apoya KabatOne la gestión de fronteras en Zimbabue?',
                      a: 'KabatOne gestiona Beitbridge (Sudáfrica, 5M+ cruces/año), Forbes/Nyamapanda (Mozambique), Chirundu/Kariba (Zambia), Kazungula (cuádruple frontera) y Victoria Falls/Plumtree (Botsuana) con ANPR y coordinación ZIMRA/ZRP/ZNA.',
                    },
                  ]
                : [
                    {
                      q: 'What key public safety agencies does Zimbabwe operate?',
                      a: 'The ZRP under the Ministry of Home Affairs covers 10 provinces with 35,000+ officers and CID. The ZNA supports internal and border security. The CPU/DMA coordinates cyclones, floods and emergencies. The CIO manages national intelligence.',
                    },
                    {
                      q: 'How does KabatOne address Zimbabwe critical infrastructure?',
                      a: 'KabatOne integrates management for ZPC/ZETDC/Kariba Dam (1,626 MW), ZINWA water, NRZ railway, Chiadzwa/Marange diamond mines, Zimplats platinum Great Dyke and Harare International Airport HRE.',
                    },
                    {
                      q: 'Is KabatOne compliant with Zimbabwe data legislation?',
                      a: 'Yes. KabatOne complies with PDA 2021/POTRAZ. The architecture aligns with the Cybercrime Act 2017 and the Ministry of ICT National Cybersecurity Policy 2021-2025.',
                    },
                    {
                      q: 'How does KabatOne support border management in Zimbabwe?',
                      a: "KabatOne manages Beitbridge (South Africa, 5M+ crossings/year), Forbes/Nyamapanda (Mozambique), Chirundu/Kariba (Zambia), Kazungula (quadruple border) and Victoria Falls/Plumtree (Botswana) with ANPR and ZIMRA/ZRP/ZNA coordination.",
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
              ? '¿Listo para modernizar la seguridad pública en Zimbabue?'
              : 'Ready to modernise public safety in Zimbabwe?'
          }
          subtitle={
            es
              ? 'Conecte con expertos de KabatOne para una evaluación de plataforma adaptada a la ZRP, ZNA y Civil Protection Unit de Zimbabue.'
              : 'Connect with KabatOne experts for a platform assessment tailored to Zimbabwe ZRP, ZNA and Civil Protection Unit.'
          }
        />
      </main>

      <Footer es={es} />
    </>
  )
}
