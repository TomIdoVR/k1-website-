import { generatePageMetadata } from '@/lib/metadata'
import { getTranslations } from 'next-intl/server'
import Script from 'next/script'
import Nav from '@/components/Nav'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareMozambique', locale)
}

export default async function PublicSafetySoftwareMozambiquePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const t = await getTranslations({ locale })

  const articleData = articleSchema(
    es
      ? 'Software de Seguridad Pública para Mozambique: PRM/FADM, INGC, Maputo Safe City, ENH/TotalEnergies LNG & Lei 3/2022 | KabatOne'
      : 'Public Safety Software for Mozambique: PRM/FADM, INGC, Maputo Safe City, ENH/TotalEnergies LNG & Law 3/2022 | KabatOne',
    es
      ? 'Plataforma unificada para la Policía de la República de Mozambique (PRM) y FADM — despacho CAD integrado en 11 provincias, Maputo Safe City, INGC gestión de desastres, TotalEnergies/ENH LNG Cabo Delgado, Port of Maputo/CFM, Lei 3/2022 y adquisición UGEA/CCP.'
      : 'Unified platform for Mozambique Republic Police (PRM) and FADM — integrated CAD dispatch across 11 provinces, Maputo Safe City, INGC disaster management, TotalEnergies/ENH LNG Cabo Delgado, Port of Maputo/CFM, Law 3/2022 compliance, and UGEA/CCP procurement.',
    es
      ? 'https://kabatone.com/es/resources/public-safety-software-mozambique'
      : 'https://kabatone.com/resources/public-safety-software-mozambique',
    '2025-05-19'
  )

  const faqData = faqPageSchema([
    {
      question: es
        ? '¿Qué agencias de seguridad pública clave opera Mozambique?'
        : 'What key public safety agencies does Mozambique operate?',
      answer: es
        ? 'La Policía de la República de Mozambique (PRM) bajo el Ministerio del Interior cubre las 11 provincias. Las Fuerzas Armadas de Defensa de Mozambique (FADM) apoyan la seguridad en Cabo Delgado y zonas fronterizas. El INGC (Instituto Nacional de Gestión de Calamidades) coordina la respuesta a desastres naturales — ciclones, inundaciones y sequías del corredor Limpopo-Zambeze.'
        : 'The Mozambique Republic Police (PRM) under the Ministry of Interior covers all 11 provinces. The Mozambique Defence Armed Forces (FADM) support security in Cabo Delgado and border zones. The INGC (National Disaster Management Institute) coordinates natural disaster response — cyclones, floods and droughts along the Limpopo-Zambezi corridor.',
    },
    {
      question: es
        ? '¿Cómo aborda KabatOne la infraestructura crítica de Mozambique?'
        : 'How does KabatOne address Mozambique critical infrastructure?',
      answer: es
        ? 'KabatOne integra gestión de las instalaciones LNG de TotalEnergies/ENH en Cabo Delgado (Mozambique LNG, mayor proyecto de gas de África subsahariana), el corredor ferroviario y portuario CFM (Puerto de Maputo/Matola/Beira/Nacala), la Barragem de Cahora Bassa (hydroelectric 2,075 MW), Mozal aluminium y el Aeropuerto Internacional de Maputo (MPM).'
        : 'KabatOne integrates management for TotalEnergies/ENH LNG facilities in Cabo Delgado (Mozambique LNG, largest sub-Saharan Africa gas project), CFM railway and port corridor (Port of Maputo/Matola/Beira/Nacala), Cahora Bassa Dam (hydroelectric 2,075 MW), Mozal aluminium smelter, and Maputo International Airport (MPM).',
    },
    {
      question: es
        ? '¿Es KabatOne compatible con la legislación de datos de Mozambique?'
        : 'Is KabatOne compliant with Mozambique data legislation?',
      answer: es
        ? 'Sí. KabatOne está diseñado para cumplir con la Lei 3/2022 sobre Protección de Datos Personales supervisada por la ANPDP. La arquitectura se alinea con la Lei 4/2021 sobre Ciberseguridad y las directrices del CERT-Moçambique y del INTIC (Instituto Nacional de Tecnologías de la Información y Comunicación).'
        : 'Yes. KabatOne is designed to comply with Law 3/2022 on Personal Data Protection supervised by the ANPDP. The architecture aligns with Law 4/2021 on Cybersecurity and the guidelines of CERT-Mozambique and INTIC (National Information and Communication Technology Institute).',
    },
    {
      question: es
        ? '¿Cómo apoya KabatOne la respuesta a ciclones en Mozambique?'
        : 'How does KabatOne support cyclone response in Mozambique?',
      answer: es
        ? 'KabatOne proporciona coordinación multiagencia para la respuesta a ciclones del Índico (como Idai/Kenneth 2019) — integración con el INAM (meteorología), el INGC, las FAM/FADM y la Cruz Roja Mozambicana para alertas tempranas, evacuaciones costeras y gestión de campos de desplazados en las provincias de Sofala, Nampula y Cabo Delgado.'
        : 'KabatOne provides multi-agency coordination for Indian Ocean cyclone response (like Idai/Kenneth 2019) — integration with INAM (meteorology), INGC, FAM/FADM and the Mozambican Red Cross for early warnings, coastal evacuations and displacement camp management in Sofala, Nampula and Cabo Delgado provinces.',
    },
  ])

  const breadcrumbData = breadcrumbSchema([
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es' : 'https://kabatone.com/' },
    {
      name: es ? 'Recursos' : 'Resources',
      url: es ? 'https://kabatone.com/es/resources' : 'https://kabatone.com/resources',
    },
    {
      name: es ? 'Mozambique' : 'Mozambique',
      url: es
        ? 'https://kabatone.com/es/resources/public-safety-software-mozambique'
        : 'https://kabatone.com/resources/public-safety-software-mozambique',
    },
  ])

  const agencies = es
    ? [
        {
          name: 'PRM (Policía de la República de Mozambique)',
          detail:
            '11 provincias, Policía de Investigación Criminal (SERNIC), Policía de Fronteras — gestión CAD unificada',
        },
        {
          name: 'FADM / FAM',
          detail:
            'Fuerzas Armadas de Defensa de Mozambique — Cabo Delgado contrainsurgencia, seguridad fronteriza y apoyo a emergencias',
        },
        {
          name: 'INGC (Instituto Nacional de Gestión de Calamidades)',
          detail:
            'Gestión de desastres — ciclones, inundaciones Limpopo-Zambeze, sequías y evacuaciones costeras',
        },
        {
          name: 'SISE',
          detail:
            'Servicio de Información y Seguridad del Estado — inteligencia nacional e integración con operaciones PRM/FADM',
        },
        {
          name: 'ENH / TotalEnergies / Eni',
          detail:
            'Empresa Nacional de Hidrocarbonetos y socios LNG Cabo Delgado (Mozambique LNG + Coral Sul FLNG) — seguridad crítica',
        },
        {
          name: 'UGEA / CCP',
          detail:
            'Unidad de Gestión de Licitaciones y Evaluación de Adjudicaciones — portal e-procurement y CCP conformidad',
        },
      ]
    : [
        {
          name: 'PRM (Mozambique Republic Police)',
          detail:
            '11 provinces, SERNIC Criminal Investigation, Border Police — unified CAD management',
        },
        {
          name: 'FADM / FAM',
          detail:
            'Mozambique Defence Armed Forces — Cabo Delgado counter-insurgency, border security and emergency support',
        },
        {
          name: 'INGC (National Disaster Management Institute)',
          detail:
            'Disaster management — cyclones, Limpopo-Zambezi flooding, droughts and coastal evacuations',
        },
        {
          name: 'SISE',
          detail:
            'State Intelligence and Security Service — national intelligence and PRM/FADM operations integration',
        },
        {
          name: 'ENH / TotalEnergies / Eni',
          detail:
            'National Hydrocarbons Company and Cabo Delgado LNG partners (Mozambique LNG + Coral Sul FLNG) — critical security',
        },
        {
          name: 'UGEA / CCP',
          detail:
            'Procurement Management and Contract Award Unit — e-procurement portal and CCP compliance',
        },
      ]

  const regulatory = es
    ? [
        {
          name: 'ANPDP / Lei 3/2022',
          detail:
            'Protección de datos personales — Agência Nacional de Proteção de Dados Pessoais supervisión y registro',
        },
        {
          name: 'Lei 4/2021 / CERT-Moçambique',
          detail:
            'Ciberseguridad — CERT-Moçambique respuesta a incidentes e INTIC directrices para sistemas de gobierno digital',
        },
        {
          name: 'CCP / UGEA',
          detail:
            'Código de Contratos Públicos — portal e-procurement UGEA, umbrales de licitación abierta y conformidad presupuestaria',
        },
        {
          name: 'SADC / SIPO II',
          detail:
            'Comunidad de Desarrollo del África Austral — Órgano de Cooperación en Política, Defensa y Seguridad (SIPO II)',
        },
      ]
    : [
        {
          name: 'ANPDP / Law 3/2022',
          detail:
            'Personal data protection — Agência Nacional de Proteção de Dados Pessoais oversight and registration',
        },
        {
          name: 'Law 4/2021 / CERT-Mozambique',
          detail:
            'Cybersecurity — CERT-Mozambique incident response and INTIC guidelines for digital government systems',
        },
        {
          name: 'CCP / UGEA',
          detail:
            'Public Contracts Code — UGEA e-procurement portal, open tender thresholds and budget compliance',
        },
        {
          name: 'SADC / SIPO II',
          detail:
            'Southern African Development Community — Organ on Politics, Defence and Security Cooperation (SIPO II)',
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
              {es ? 'Guía de Mercado — Mozambique' : 'Market Guide — Mozambique'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {es
                ? 'Software de Seguridad Pública para Mozambique'
                : 'Public Safety Software for Mozambique'}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              {es
                ? 'Plataforma unificada para la PRM y FADM — despacho CAD integrado en 11 provincias, Maputo Safe City, INGC gestión de ciclones/inundaciones, TotalEnergies/ENH LNG Cabo Delgado, corredor portuario CFM, Lei 3/2022/ANPDP y adquisición UGEA/CCP.'
                : 'Unified platform for Mozambique PRM and FADM — integrated CAD dispatch across 11 provinces, Maputo Safe City, INGC cyclone/flood management, TotalEnergies/ENH LNG Cabo Delgado, CFM port corridor, Law 3/2022/ANPDP compliance, and UGEA/CCP procurement.'}
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es
                ? 'Seguridad Pública en Mozambique: Contexto Operativo'
                : 'Public Safety in Mozambique: Operational Context'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <p className="mb-4">
                  {es
                    ? 'La Policía de la República de Mozambique (PRM) bajo el Ministerio del Interior cubre las 11 provincias con el SERNIC (Servicio Nacional de Investigación Criminal) y la Policía de Fronteras. Las FADM apoyan la seguridad en Cabo Delgado (contrainsurgencia Al-Shabaab/ASWJ desde 2017) y las zonas fronterizas con Tanzania, Zimbabwe, Zambia, Malawi y Eswatini.'
                    : 'The Mozambique Republic Police (PRM) under the Ministry of Interior covers all 11 provinces with SERNIC (National Criminal Investigation Service) and Border Police. The FADM support security in Cabo Delgado (Al-Shabaab/ASWJ counter-insurgency since 2017) and border zones with Tanzania, Zimbabwe, Zambia, Malawi and Eswatini.'}
                </p>
                <p>
                  {es
                    ? 'Mozambique enfrenta desafíos climáticos severos: el Ciclón Idai (2019, más de 600 muertos) y el Ciclón Kenneth (2019) demostraron la necesidad crítica de plataformas de coordinación multiagencia. El INGC, el INAM y el Centro Nacional Operativo de Emergência (CENOE) gestionan la respuesta con apoyo de las FAM y la Cruz Roja.'
                    : 'Mozambique faces severe climate challenges: Cyclone Idai (2019, 600+ deaths) and Cyclone Kenneth (2019) demonstrated the critical need for multi-agency coordination platforms. The INGC, INAM and National Emergency Operations Centre (CENOE) manage response with FAM and Red Cross support.'}
                </p>
              </div>
              <div>
                <p className="mb-4">
                  {es
                    ? 'Mozambique es uno de los mayores reservorios de gas natural del mundo. El proyecto Mozambique LNG de TotalEnergies/ENH en Cabo Delgado (127 tcf de reservas, producción prevista 13 Mtpa) y el Coral Sul FLNG de Eni/ENH son proyectos de infraestructura crítica nacional de máxima prioridad de seguridad. La Barragem de Cahora Bassa (2,075 MW) exporta electricidad a Sudáfrica, Zimbabwe y Mozambique.'
                    : "Mozambique is one of the world's largest natural gas reservoirs. The TotalEnergies/ENH Mozambique LNG project in Cabo Delgado (127 tcf reserves, 13 Mtpa planned production) and Eni/ENH Coral Sul FLNG are maximum priority national critical infrastructure security projects. Cahora Bassa Dam (2,075 MW) exports power to South Africa, Zimbabwe and Mozambique."}
                </p>
                <p>
                  {es
                    ? 'La Agenda 2025 e ICSSI (Infraestructura de Comunicación para la Seguridad y Soberanía de la Información) del gobierno impulsan la digitalización de la seguridad pública con inversión en Maputo Safe City, sistemas de identificación biométrica y plataformas integradas de respuesta a emergencias.'
                    : "The government's Agenda 2025 and ICSSI (Information and Communications Security and Sovereignty Infrastructure) drive public safety digitalisation with investment in Maputo Safe City, biometric identification systems and integrated emergency response platforms."}
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
                ? 'Capacidades de la Plataforma KabatOne para Mozambique'
                : 'KabatOne Platform Capabilities for Mozambique'}
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
                        ? 'Despacho CAD Multiagencia — 11 Provincias'
                        : 'Multi-Agency CAD Dispatch — 11 Provinces'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Despacho integrado para PRM, FADM e INGC con asignación automática de recursos, priorización de llamadas y coordinación entre las 11 provincias continentales e insulares (Ilha de Moçambique).'
                        : 'Integrated dispatch for PRM, FADM and INGC with automated resource assignment, call prioritisation and coordination across all 11 provinces including island areas (Ilha de Moçambique).'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold text-sm">CYC</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {es
                        ? 'Gestión de Ciclones y Emergencias INGC/CENOE'
                        : 'INGC/CENOE Cyclone & Emergency Management'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Coordinación multiagencia para ciclones del Índico — integración con INAM (meteorología), alertas tempranas, evacuaciones costeras en Sofala/Nampula/Cabo Delgado y gestión de campos de desplazados con Cruz Roja.'
                        : 'Multi-agency coordination for Indian Ocean cyclones — integration with INAM (meteorology), early warnings, coastal evacuations in Sofala/Nampula/Cabo Delgado and displacement camp management with the Red Cross.'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold text-sm">LNG</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {es
                        ? 'Seguridad LNG Cabo Delgado — TotalEnergies/ENH'
                        : 'Cabo Delgado LNG Security — TotalEnergies/ENH'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Monitorización integrada del Mozambique LNG (TotalEnergies/ENH, Afungi Peninsula), Coral Sul FLNG (Eni/ENH), la zona de seguridad offshore y coordinación con la Armada y las FADM para la protección del personal y las instalaciones.'
                        : 'Integrated monitoring of Mozambique LNG (TotalEnergies/ENH, Afungi Peninsula), Coral Sul FLNG (Eni/ENH), offshore security zone, and coordination with the Navy and FADM for personnel and facility protection.'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold text-sm">PORT</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {es
                        ? 'Corredor Portuario CFM — Maputo/Beira/Nacala'
                        : 'CFM Port Corridor — Maputo/Beira/Nacala'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Vigilancia integrada del Puerto de Maputo/Matola (corredor sudafricano), Puerto de Beira (corredor zimbabuense), Puerto de Nacala (corredor malaui) y las líneas ferroviarias CFM con monitorización de mercancías peligrosas.'
                        : 'Integrated surveillance for Port of Maputo/Matola (South African corridor), Port of Beira (Zimbabwean corridor), Port of Nacala (Malawian corridor) and CFM railway lines with dangerous goods monitoring.'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold text-sm">BRD</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {es
                        ? 'Fronteras — Tanzania/Zimbabwe/Zambia/Malawi/Eswatini'
                        : 'Borders — Tanzania/Zimbabwe/Zambia/Malawi/Eswatini'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Gestión de los pasos fronterizos con Tanzania (Negomano/Namuno), Zimbabwe (Forbes/Nyamapanda), Zambia (Cassacatiza), Malawi (Milange/Zobue) y Eswatini (Lomahasha/Namaacha) con ANPR y coordinación FADM/PRM.'
                        : 'Management of border crossings with Tanzania (Negomano/Namuno), Zimbabwe (Forbes/Nyamapanda), Zambia (Cassacatiza), Malawi (Milange/Zobue) and Eswatini (Lomahasha/Namaacha) with ANPR and FADM/PRM coordination.'}
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
                        ? 'Conformidad ANPDP / Lei 3/2022 / Lei 4/2021'
                        : 'ANPDP / Law 3/2022 / Law 4/2021 Compliance'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Arquitectura conforme con Lei 3/2022/ANPDP para datos personales, Lei 4/2021 sobre Ciberseguridad y directrices CERT-Moçambique/INTIC para infraestructura crítica nacional.'
                        : 'Architecture compliant with Law 3/2022/ANPDP for personal data, Law 4/2021 on Cybersecurity and CERT-Mozambique/INTIC guidelines for national critical infrastructure.'}
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
                      q: '¿Qué agencias de seguridad pública clave opera Mozambique?',
                      a: 'La PRM bajo el Ministerio del Interior cubre 11 provincias con SERNIC y Policía de Fronteras. Las FADM apoyan la seguridad en Cabo Delgado (contrainsurgencia) y zonas fronterizas. El INGC coordina la respuesta a ciclones, inundaciones y emergencias naturales.',
                    },
                    {
                      q: '¿Cómo aborda KabatOne la infraestructura crítica de Mozambique?',
                      a: 'KabatOne integra gestión del Mozambique LNG (TotalEnergies/ENH Cabo Delgado), Coral Sul FLNG (Eni/ENH), el corredor portuario CFM (Maputo/Beira/Nacala), la Barragem de Cahora Bassa (2,075 MW), Mozal aluminium y el Aeropuerto MPM.',
                    },
                    {
                      q: '¿Es KabatOne compatible con la legislación de datos de Mozambique?',
                      a: 'Sí. KabatOne cumple con la Lei 3/2022/ANPDP. La arquitectura está alineada con la Lei 4/2021 sobre Ciberseguridad y las directrices CERT-Moçambique/INTIC.',
                    },
                    {
                      q: '¿Cómo apoya KabatOne la respuesta a ciclones en Mozambique?',
                      a: 'KabatOne proporciona coordinación multiagencia para ciclones del Índico — integración con INAM, INGC/CENOE, FAM/FADM y la Cruz Roja para alertas tempranas, evacuaciones costeras en Sofala/Nampula/Cabo Delgado y gestión de campos de desplazados.',
                    },
                  ]
                : [
                    {
                      q: 'What key public safety agencies does Mozambique operate?',
                      a: 'The PRM under the Ministry of Interior covers 11 provinces with SERNIC and Border Police. The FADM support security in Cabo Delgado (counter-insurgency) and border zones. The INGC coordinates cyclone, flood and natural disaster response.',
                    },
                    {
                      q: 'How does KabatOne address Mozambique critical infrastructure?',
                      a: 'KabatOne integrates management for Mozambique LNG (TotalEnergies/ENH Cabo Delgado), Coral Sul FLNG (Eni/ENH), the CFM port corridor (Maputo/Beira/Nacala), Cahora Bassa Dam (2,075 MW), Mozal aluminium smelter and MPM Airport.',
                    },
                    {
                      q: 'Is KabatOne compliant with Mozambique data legislation?',
                      a: 'Yes. KabatOne complies with Law 3/2022/ANPDP. The architecture aligns with Law 4/2021 on Cybersecurity and CERT-Mozambique/INTIC guidelines.',
                    },
                    {
                      q: 'How does KabatOne support cyclone response in Mozambique?',
                      a: 'KabatOne provides multi-agency coordination for Indian Ocean cyclones — integration with INAM, INGC/CENOE, FAM/FADM and the Red Cross for early warnings, coastal evacuations in Sofala/Nampula/Cabo Delgado and displacement camp management.',
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
              ? '¿Listo para modernizar la seguridad pública en Mozambique?'
              : 'Ready to modernise public safety in Mozambique?'
          }
          subtitle={
            es
              ? 'Conecte con expertos de KabatOne para una evaluación de plataforma adaptada a la PRM, FADM e INGC de Mozambique.'
              : 'Connect with KabatOne experts for a platform assessment tailored to Mozambique PRM, FADM and INGC.'
          }
        />
      </main>

      <Footer es={es} />
    </>
  )
}
