import { generatePageMetadata } from '@/lib/metadata'
import { getTranslations } from 'next-intl/server'
import Script from 'next/script'
import Nav from '@/components/Nav'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareAngola', locale)
}

export default async function PublicSafetySoftwareAngolaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const t = await getTranslations({ locale })

  const articleData = articleSchema(
    es
      ? 'Software de Seguridad Pública para Angola: PNA/FAA, SINSE, Luanda Safe City, Sonangol/ANPG & Lei 22/2011 | KabatOne'
      : 'Public Safety Software for Angola: PNA/FAA, SINSE, Luanda Safe City, Sonangol/ANPG & Law 22/2011 | KabatOne',
    es
      ? 'Plataforma unificada para la Policía Nacional de Angola (PNA) y FAA — despacho CAD integrado en 18 provincias, Luanda Safe City, SINSE inteligencia, Sonangol infraestructura petrolífera, Puerto de Luanda/Porto de Lobito, Lei 22/2011/ANPD y adquisición Contratação Pública.'
      : 'Unified platform for Angola National Police (PNA) and FAA — integrated CAD dispatch across 18 provinces, Luanda Safe City, SINSE intelligence, Sonangol oil infrastructure, Port of Luanda/Lobito, Law 22/2011/ANPD compliance, and Contratação Pública procurement.',
    es
      ? 'https://kabatone.com/es/resources/public-safety-software-angola'
      : 'https://kabatone.com/resources/public-safety-software-angola',
    '2025-05-19'
  )

  const faqData = faqPageSchema([
    {
      question: es
        ? '¿Qué agencias de seguridad pública clave opera Angola?'
        : 'What key public safety agencies does Angola operate?',
      answer: es
        ? 'La Policía Nacional de Angola (PNA) bajo el Ministerio del Interior cubre las 18 provincias con más de 100,000 efectivos. Las Fuerzas Armadas de Angola (FAA) apoyan la seguridad interna y fronteriza. El SINSE (Servicio Nacional de Seguridad e Inteligencia) gestiona la inteligencia nacional. La Protección Civil e Incêndios coordina emergencias nacionales.'
        : 'The Angola National Police (PNA) under the Ministry of Interior covers 18 provinces with 100,000+ officers. The Angola Armed Forces (FAA) support internal and border security. The SINSE (National Intelligence and Security Service) manages national intelligence. Civil Protection and Fire Services coordinate national emergencies.',
    },
    {
      question: es
        ? '¿Cómo aborda KabatOne la infraestructura crítica de Angola?'
        : 'How does KabatOne address Angola critical infrastructure?',
      answer: es
        ? 'KabatOne integra gestión de Sonangol (mayor empresa de petróleo/gas de África subsahariana, Bloco 0/15/17/31 offshore), la ANPG, el Puerto de Luanda, el Porto de Lobito (corredor TAZARA), PRODEL zona especial económica, REDE (red eléctrica), la Barragem de Laúca (hidroeléctrica) y el Aeropuerto Internacional de Luanda (LAD).'
        : 'KabatOne integrates management for Sonangol (sub-Saharan Africa largest oil/gas company, Bloco 0/15/17/31 offshore), ANPG, Port of Luanda, Porto de Lobito (TAZARA corridor), PRODEL special economic zone, REDE power grid, Laúca Dam (hydroelectric), and Luanda International Airport (LAD).',
    },
    {
      question: es
        ? '¿Es KabatOne compatible con la legislación de datos de Angola?'
        : 'Is KabatOne compliant with Angola data legislation?',
      answer: es
        ? 'Sí. KabatOne está diseñado para cumplir con la Lei 22/2011 de Protección de Datos Personales supervisada por la ANPD (Agência Nacional de Proteção de Dados). La arquitectura se alinea con la Lei 7/2017 sobre Delitos Informáticos y el Decreto Presidencial 270/2019 sobre Ciberseguridad y Ciberdefensa.'
        : 'Yes. KabatOne is designed to comply with Law 22/2011 on Personal Data Protection supervised by the ANPD (Agência Nacional de Proteção de Dados). The architecture aligns with Law 7/2017 on Computer Crimes and Presidential Decree 270/2019 on Cybersecurity and Cyberdefence.',
    },
    {
      question: es
        ? '¿Cómo apoya KabatOne la seguridad de la infraestructura petrolífera de Angola?'
        : 'How does KabatOne support Angola oil infrastructure security?',
      answer: es
        ? 'KabatOne proporciona monitorización integrada para las plataformas offshore Sonangol (Bloco 0, 15, 17, 31), el terminal de exportación de crudo de Luanda, la refinería de Luanda (SONANGALP), el oleoducto Malongo/Cabinda, las instalaciones de GNL Soyo y coordinación con la Guardia Costeira y la Polícia Marítima.'
        : 'KabatOne provides integrated monitoring for Sonangol offshore platforms (Bloco 0, 15, 17, 31), Luanda crude export terminal, Luanda refinery (SONANGALP), Malongo/Cabinda pipeline, Soyo LNG facilities, and coordination with the Coast Guard and Maritime Police.',
    },
  ])

  const breadcrumbData = breadcrumbSchema([
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es' : 'https://kabatone.com/' },
    {
      name: es ? 'Recursos' : 'Resources',
      url: es ? 'https://kabatone.com/es/resources' : 'https://kabatone.com/resources',
    },
    {
      name: 'Angola',
      url: es
        ? 'https://kabatone.com/es/resources/public-safety-software-angola'
        : 'https://kabatone.com/resources/public-safety-software-angola',
    },
  ])

  const agencies = es
    ? [
        {
          name: 'PNA (Policía Nacional de Angola)',
          detail:
            '18 provincias, 100,000+ efectivos, Polícia de Investigação Criminal (PIC), Polícia de Ordem Pública — gestión CAD unificada',
        },
        {
          name: 'FAA (Fuerzas Armadas de Angola)',
          detail:
            'Seguridad interna y fronteriza — Ejército/Fuerza Aérea/Armada con coordinación integrada para infraestructura crítica',
        },
        {
          name: 'SINSE',
          detail:
            'Servicio Nacional de Seguridad e Inteligencia — integración de datos en tiempo real con operaciones de PNA y FAA',
        },
        {
          name: 'Protección Civil e Incêndios',
          detail:
            'Emergencias nacionales — coordinación de incendios, desastres naturales (inundaciones de Luanda) y emergencias industriales',
        },
        {
          name: 'Sonangol / ANPG',
          detail:
            'Sonangol (bloque 0/15/17/31 offshore) y Agência Nacional de Petróleo e Gás — seguridad de infraestructura petrolífera',
        },
        {
          name: 'UTCE / Contratação Pública',
          detail:
            'Unidad Técnica de Contratación Externa — portal de adquisición pública, licitaciones y conformidad Lei 20/2010',
        },
      ]
    : [
        {
          name: 'PNA (Angola National Police)',
          detail:
            '18 provinces, 100,000+ officers, Criminal Investigation Police (PIC), Public Order Police — unified CAD management',
        },
        {
          name: 'FAA (Angola Armed Forces)',
          detail:
            'Internal and border security — Army/Air Force/Navy with integrated coordination for critical infrastructure',
        },
        {
          name: 'SINSE',
          detail:
            'National Intelligence and Security Service — real-time data integration with PNA and FAA operations',
        },
        {
          name: 'Civil Protection & Fire Services',
          detail:
            'National emergencies — fire, natural disasters (Luanda flooding) and industrial emergency coordination',
        },
        {
          name: 'Sonangol / ANPG',
          detail:
            'Sonangol (Bloco 0/15/17/31 offshore) and National Petroleum Agency — oil infrastructure security',
        },
        {
          name: 'UTCE / Contratação Pública',
          detail:
            'Technical Unit for External Contracting — public procurement portal, tenders and Law 20/2010 compliance',
        },
      ]

  const regulatory = es
    ? [
        {
          name: 'ANPD / Lei 22/2011',
          detail:
            'Protección de datos personales — Agência Nacional de Proteção de Dados, supervisión y registro obligatorio',
        },
        {
          name: 'Lei 7/2017 / Decreto 270/2019',
          detail:
            'Delitos informáticos y ciberseguridad — Ciberdefensa nacional y protección de infraestructura crítica',
        },
        {
          name: 'Lei 20/2010 / UTCE',
          detail:
            'Contratación pública — portal UTCE, licitaciones abiertas y conformidad presupuestaria MINFIN',
        },
        {
          name: 'SADC / CEEAC Frameworks',
          detail:
            'Comunidad de Desarrollo del África Austral y CEEAC — cooperación transfronteriza y marcos de seguridad regional',
        },
      ]
    : [
        {
          name: 'ANPD / Law 22/2011',
          detail:
            'Personal data protection — Agência Nacional de Proteção de Dados oversight and mandatory registration',
        },
        {
          name: 'Law 7/2017 / Decree 270/2019',
          detail:
            'Computer crimes and cybersecurity — national cyberdefence and critical infrastructure protection',
        },
        {
          name: 'Law 20/2010 / UTCE',
          detail:
            'Public procurement — UTCE portal, open tenders and MINFIN budget compliance',
        },
        {
          name: 'SADC / ECCAS Frameworks',
          detail:
            'Southern African Development Community and ECCAS — cross-border cooperation and regional security frameworks',
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
              {es ? 'Guía de Mercado — Angola' : 'Market Guide — Angola'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {es
                ? 'Software de Seguridad Pública para Angola'
                : 'Public Safety Software for Angola'}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              {es
                ? 'Plataforma unificada para la PNA y FAA — despacho CAD integrado en 18 provincias, Luanda Safe City, SINSE inteligencia, Sonangol infraestructura petrolífera offshore, Puerto de Luanda/Lobito, Lei 22/2011/ANPD y adquisición Lei 20/2010/UTCE.'
                : 'Unified platform for Angola PNA and FAA — integrated CAD dispatch across 18 provinces, Luanda Safe City, SINSE intelligence, Sonangol offshore oil infrastructure, Port of Luanda/Lobito, Law 22/2011/ANPD compliance, and Law 20/2010/UTCE procurement.'}
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es
                ? 'Seguridad Pública en Angola: Contexto Operativo'
                : 'Public Safety in Angola: Operational Context'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <p className="mb-4">
                  {es
                    ? 'La Policía Nacional de Angola (PNA) bajo el Ministerio del Interior cubre las 18 provincias con más de 100,000 efectivos. La Polícia de Investigação Criminal (PIC) y la Polícia de Ordem Pública gestionan las operaciones especializadas. Las Fuerzas Armadas de Angola (FAA) — Ejército, Fuerza Aérea y Armada — apoyan la seguridad fronteriza e infraestructura crítica, especialmente en el enclave de Cabinda.'
                    : 'The Angola National Police (PNA) under the Ministry of Interior covers all 18 provinces with 100,000+ officers. The Criminal Investigation Police (PIC) and Public Order Police manage specialised operations. The Angola Armed Forces (FAA) — Army, Air Force and Navy — support border security and critical infrastructure, especially in the Cabinda enclave.'}
                </p>
                <p>
                  {es
                    ? 'El sistema de emergencias opera a través del 113 (Policía), 118 (Protección Civil/Incendios) y 116 (SAMU ambulancias). El Centro de Operaciones de Seguridad de Luanda gestiona los incidentes de mayor escala en la capital y las inundaciones estacionales del Bengo/Cacuaco.'
                    : 'The emergency system operates through 113 (Police), 118 (Civil Protection/Fire) and 116 (SAMU ambulances). The Luanda Security Operations Centre manages large-scale incidents in the capital and seasonal flooding in Bengo/Cacuaco.'}
                </p>
              </div>
              <div>
                <p className="mb-4">
                  {es
                    ? 'Angola es la segunda mayor economía del África subsahariana basada en petróleo, con Sonangol operando los bloques offshore 0, 15, 17 y 31 produciendo más de 1.1 millones de barriles diarios. El Puerto de Luanda, el Porto de Lobito (corredor ferroviario a Zambia/RDC) y las instalaciones de GNL de Soyo son infraestructura crítica nacional estratégica.'
                    : "Angola is sub-Saharan Africa's second largest oil-based economy, with Sonangol operating offshore Blocos 0, 15, 17 and 31 producing 1.1M+ barrels per day. The Port of Luanda, Porto de Lobito (railway corridor to Zambia/DRC) and Soyo LNG facilities are strategic national critical infrastructure."}
                </p>
                <p>
                  {es
                    ? 'El Plan Nacional de Desenvolvimento 2023-2027 (PND) y PRODESI (programa de diversificación económica) impulsan la modernización de la seguridad pública con inversión en Luanda Safe City, sistemas biométricos e integración de operaciones multiagencia.'
                    : "Angola's Plan Nacional de Desenvolvimento 2023-2027 (PND) and PRODESI (economic diversification programme) drive public safety modernisation with investment in Luanda Safe City, biometric systems and multi-agency operations integration."}
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
                ? 'Capacidades de la Plataforma KabatOne para Angola'
                : 'KabatOne Platform Capabilities for Angola'}
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
                        ? 'Despacho CAD Multiagencia — 18 Provincias'
                        : 'Multi-Agency CAD Dispatch — 18 Provinces'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Despacho integrado para PNA, Protección Civil y FAA con asignación automática de recursos, priorización de llamadas 113/118 y coordinación entre las 18 provincias y el enclave de Cabinda.'
                        : 'Integrated dispatch for PNA, Civil Protection and FAA with automated resource assignment, 113/118 call prioritisation, and coordination across all 18 provinces and the Cabinda enclave.'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold text-sm">VMS</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {es ? 'Luanda Safe City y CCTV Urbano' : 'Luanda Safe City & Urban CCTV'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Gestión centralizada de las redes CCTV de Luanda Safe City, Huambo, Lobito y Benguela — integración con ANPR para gestión del tráfico en la Via Expressa y vigilancia de zonas industriales.'
                        : 'Centralised management of Luanda Safe City, Huambo, Lobito and Benguela CCTV networks — integration with ANPR for traffic management on Via Expressa and industrial zone surveillance.'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold text-sm">OIL</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {es
                        ? 'Seguridad Offshore Sonangol — Bloco 0/15/17/31'
                        : 'Sonangol Offshore Security — Bloco 0/15/17/31'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Monitorización integrada de las plataformas offshore Sonangol (Bloco 0 Cabinda, Bloco 15/17/31 Angola), terminal de exportación de Luanda, refinería SONANGALP y las instalaciones de GNL de Soyo con coordinación Guardia Costera/Armada.'
                        : 'Integrated monitoring of Sonangol offshore platforms (Bloco 0 Cabinda, Bloco 15/17/31 Angola), Luanda export terminal, SONANGALP refinery and Soyo LNG facilities with Coast Guard/Navy coordination.'}
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
                        ? 'Seguridad Portuaria — Luanda y Lobito'
                        : 'Port Security — Luanda and Lobito'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Vigilancia integrada del Puerto de Luanda, el Porto de Lobito (corredor ferroviario TAZARA a Zambia/RDC), el Puerto de Namibe y las terminales de hidrocarburos con monitorización de embarcaciones y control de acceso.'
                        : 'Integrated surveillance for Port of Luanda, Porto de Lobito (TAZARA railway corridor to Zambia/DRC), Port of Namibe and hydrocarbon terminals with vessel monitoring and access control.'}
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
                        ? 'Fronteras — RDC/Congo/Namibia/Zambia'
                        : 'Borders — DRC/Congo/Namibia/Zambia'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Gestión de los pasos fronterizos principales con la RDC (Luvo/Malongo), Congo-Brazzaville (Yema), Namibia (Santa Clara/Oshikango) y Zambia (Luacano/Jimbe) con ANPR y coordinación FAA/PNA.'
                        : 'Management of major border crossings with DRC (Luvo/Malongo), Congo-Brazzaville (Yema), Namibia (Santa Clara/Oshikango) and Zambia (Luacano/Jimbe) with ANPR and FAA/PNA coordination.'}
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
                        ? 'Conformidad ANPD / Lei 22/2011 / Decreto 270/2019'
                        : 'ANPD / Law 22/2011 / Decree 270/2019 Compliance'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Arquitectura conforme con Lei 22/2011/ANPD para datos personales, Lei 7/2017 sobre Delitos Informáticos y Decreto Presidencial 270/2019 sobre Ciberseguridad y Ciberdefensa nacional.'
                        : 'Architecture compliant with Law 22/2011/ANPD for personal data, Law 7/2017 on Computer Crimes and Presidential Decree 270/2019 on Cybersecurity and national Cyberdefence.'}
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
                      q: '¿Qué agencias de seguridad pública clave opera Angola?',
                      a: 'La PNA bajo el Ministerio del Interior cubre 18 provincias con 100,000+ efectivos. La FAA (Ejército/Fuerza Aérea/Armada) apoya la seguridad fronteriza. El SINSE gestiona la inteligencia nacional. La Protección Civil coordina emergencias.',
                    },
                    {
                      q: '¿Cómo aborda KabatOne la infraestructura crítica de Angola?',
                      a: 'KabatOne integra gestión de Sonangol (Bloco 0/15/17/31 offshore), ANPG, Puerto de Luanda, Porto de Lobito (corredor TAZARA), instalaciones GNL de Soyo, REDE red eléctrica, Barragem de Laúca y el Aeropuerto LAD.',
                    },
                    {
                      q: '¿Es KabatOne compatible con la legislación de datos de Angola?',
                      a: 'Sí. KabatOne cumple con la Lei 22/2011/ANPD. La arquitectura está alineada con la Lei 7/2017 sobre Delitos Informáticos y el Decreto Presidencial 270/2019 sobre Ciberseguridad y Ciberdefensa.',
                    },
                    {
                      q: '¿Cómo apoya KabatOne la seguridad de la infraestructura petrolífera de Angola?',
                      a: 'KabatOne proporciona monitorización integrada para las plataformas offshore Sonangol (Bloco 0, 15, 17, 31), el terminal de Luanda, la refinería SONANGALP, el oleoducto Malongo/Cabinda, las instalaciones GNL de Soyo y coordinación con la Guardia Costera y la Polícia Marítima.',
                    },
                  ]
                : [
                    {
                      q: 'What key public safety agencies does Angola operate?',
                      a: 'The PNA under the Ministry of Interior covers 18 provinces with 100,000+ officers. The FAA (Army/Air Force/Navy) supports border security. The SINSE manages national intelligence. Civil Protection coordinates emergencies.',
                    },
                    {
                      q: 'How does KabatOne address Angola critical infrastructure?',
                      a: 'KabatOne integrates management for Sonangol (Bloco 0/15/17/31 offshore), ANPG, Port of Luanda, Porto de Lobito (TAZARA corridor), Soyo LNG facilities, REDE power grid, Laúca Dam and LAD Airport.',
                    },
                    {
                      q: 'Is KabatOne compliant with Angola data legislation?',
                      a: 'Yes. KabatOne complies with Law 22/2011/ANPD. The architecture aligns with Law 7/2017 on Computer Crimes and Presidential Decree 270/2019 on Cybersecurity and Cyberdefence.',
                    },
                    {
                      q: 'How does KabatOne support Angola oil infrastructure security?',
                      a: 'KabatOne provides integrated monitoring for Sonangol offshore platforms (Bloco 0, 15, 17, 31), Luanda export terminal, SONANGALP refinery, Malongo/Cabinda pipeline, Soyo LNG facilities, and coordination with the Coast Guard and Maritime Police.',
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
              ? '¿Listo para modernizar la seguridad pública en Angola?'
              : 'Ready to modernise public safety in Angola?'
          }
          subtitle={
            es
              ? 'Conecte con expertos de KabatOne para una evaluación de plataforma adaptada a la PNA, FAA y Sonangol de Angola.'
              : 'Connect with KabatOne experts for a platform assessment tailored to Angola PNA, FAA and Sonangol infrastructure.'
          }
        />
      </main>

      <Footer es={es} />
    </>
  )
}
