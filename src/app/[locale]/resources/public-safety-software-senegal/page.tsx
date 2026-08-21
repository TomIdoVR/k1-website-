import { generatePageMetadata } from '@/lib/metadata'
import { getTranslations } from 'next-intl/server'
import Script from 'next/script'
import Nav from '@/components/Nav'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareSenegal', locale)
}

export default async function PublicSafetySoftwareSenegalPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const t = await getTranslations({ locale })

  const articleData = articleSchema(
    es
      ? 'Software de Seguridad Pública para Senegal: Police Nationale/Gendarmerie, DGPC, Dakar Safe City, PETROSEN/SGBS & CDP/Loi 2008-12 | KabatOne'
      : 'Public Safety Software for Senegal: Police Nationale/Gendarmerie, DGPC, Dakar Safe City, PETROSEN/SGBS & CDP/Law 2008-12 | KabatOne',
    es
      ? 'Plataforma unificada para la Police Nationale y Gendarmerie de Senegal — despacho CAD integrado en 14 regiones, Dakar Safe City, DGPC protección civil, Puerto de Dakar/PAD, PETROSEN gas offshore Sangomar, CDP/Loi 2008-12 y adquisición DCMP/Code des marchés.'
      : 'Unified platform for Senegal Police Nationale and Gendarmerie — integrated CAD dispatch across 14 regions, Dakar Safe City, DGPC civil protection, Port of Dakar/PAD, PETROSEN Sangomar offshore gas, CDP/Law 2008-12 compliance, and DCMP/Code des marchés procurement.',
    es
      ? 'https://kabatone.com/es/resources/public-safety-software-senegal'
      : 'https://kabatone.com/resources/public-safety-software-senegal',
    '2025-05-19'
  )

  const faqData = faqPageSchema([
    {
      question: es
        ? '¿Qué agencias de seguridad pública clave opera Senegal?'
        : 'What key public safety agencies does Senegal operate?',
      answer: es
        ? 'La Police Nationale bajo el Ministerio del Interior cubre 14 regiones con la Dirección de la Policía Judicial (DPJ). La Gendarmerie Nationale (Armée) gestiona las zonas rurales y fronterizas. La DGPC (Dirección de Protección Civil) coordina emergencias nacionales con el número 18. El SDIS (Servicio Departamental de Incendios) gestiona Dakar y las regiones principales.'
        : 'The Police Nationale under the Ministry of Interior covers 14 regions with the Direction de la Police Judiciaire (DPJ). The Gendarmerie Nationale (Armée) manages rural and border zones. The DGPC (Direction de la Protection Civile) coordinates national emergencies with number 18. The SDIS manages Dakar and main regions.',
    },
    {
      question: es
        ? '¿Cómo aborda KabatOne la infraestructura crítica de Senegal?'
        : 'How does KabatOne address Senegal critical infrastructure?',
      answer: es
        ? 'KabatOne integra gestión del Puerto Autónomo de Dakar (PAD, mayor puerto de África Occidental), el aeropuerto AIBD (Blaise Diagne International), las plataformas offshore PETROSEN/BP Sangomar (primeras exportaciones petrolíferas 2024), las plantas GNL SGBS, la red SENELEC y los ferrocarriles TER Dakar-Thiès.'
        : 'KabatOne integrates management for the Port Autonome de Dakar (PAD, largest West Africa port), AIBD Airport (Blaise Diagne International), PETROSEN/BP Sangomar offshore platforms (first oil exports 2024), SGBS LNG plants, SENELEC power grid, and TER Dakar-Thiès railway.',
    },
    {
      question: es
        ? '¿Es KabatOne compatible con la legislación de datos de Senegal?'
        : 'Is KabatOne compliant with Senegal data legislation?',
      answer: es
        ? 'Sí. KabatOne está diseñado para cumplir con la Loi 2008-12 sur la Protection des Données à Caractère Personnel supervisada por la CDP (Commission de Protection des Données Personnelles). La arquitectura se alinea con la Loi 2008-11 sobre Cibercriminalidad y las directrices DaIS (División de Asistencia a las Instituciones de Seguridad).'
        : 'Yes. KabatOne is designed to comply with Law 2008-12 on Personal Data Protection supervised by the CDP (Commission de Protection des Données Personnelles). The architecture aligns with Law 2008-11 on Cybercrime and DaIS (Division d\'Assistance aux Institutions de Sécurité) guidelines.',
    },
    {
      question: es
        ? '¿Cómo apoya KabatOne la gestión de fronteras en Senegal?'
        : 'How does KabatOne support border management in Senegal?',
      answer: es
        ? 'KabatOne gestiona los pasos fronterizos con Mauritania (Rosso/Diama), Mali (Kidira/Diboli), Guinea-Bissau (São Domingos/Farafenni), Guinea (Médina Gounas) y la frontera enclavada con Gambia (Farafenni/Sénoba) con ANPR integrado y coordinación entre Police Nationale, Gendarmerie y Guardia de Fronteras.'
        : 'KabatOne manages border crossings with Mauritania (Rosso/Diama), Mali (Kidira/Diboli), Guinea-Bissau (São Domingos/Farafenni), Guinea (Médina Gounas) and the enclave Gambia border (Farafenni/Sénoba) with integrated ANPR and coordination between Police Nationale, Gendarmerie and Border Guard.',
    },
  ])

  const breadcrumbData = breadcrumbSchema([
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es' : 'https://kabatone.com/' },
    {
      name: es ? 'Recursos' : 'Resources',
      url: es ? 'https://kabatone.com/es/resources' : 'https://kabatone.com/resources',
    },
    {
      name: 'Senegal',
      url: es
        ? 'https://kabatone.com/es/resources/public-safety-software-senegal'
        : 'https://kabatone.com/resources/public-safety-software-senegal',
    },
  ])

  const agencies = es
    ? [
        {
          name: 'Police Nationale / DPJ',
          detail:
            '14 regiones, Dirección de Policía Judicial, Policía de Fronteras, Unidad Antiterrorista — gestión unificada de incidentes',
        },
        {
          name: 'Gendarmerie Nationale (Armée)',
          detail:
            'Zonas rurales y fronterizas — Groupements Régionaux de Gendarmerie con coordinación CAD integrada',
        },
        {
          name: 'DGPC (Dirección de Protección Civil)',
          detail:
            'Emergencias nacionales 18 — coordinación SDIS Dakar, inundaciones de Pikine/Guédiawaye y desastres costeros',
        },
        {
          name: 'DER / Sécurité Présidentielle',
          detail:
            'Delegación General de Inteligencia y Seguridad Presidencial — integración en tiempo real con comandos operativos',
        },
        {
          name: 'PAD / PETROSEN',
          detail:
            'Puerto Autónomo de Dakar (mayor puerto de África Occidental) y PETROSEN offshore Sangomar — primeras exportaciones 2024',
        },
        {
          name: 'DCMP / Code des marchés publics',
          detail:
            'Dirección Central de Contratación Pública — portal SIGMAP, umbrales de licitación abierta y conformidad presupuestaria',
        },
      ]
    : [
        {
          name: 'Police Nationale / DPJ',
          detail:
            '14 regions, Direction de la Police Judiciaire, Border Police, Anti-Terrorism Unit — unified incident management',
        },
        {
          name: 'Gendarmerie Nationale (Armée)',
          detail:
            'Rural and border zones — Groupements Régionaux de Gendarmerie with integrated CAD coordination',
        },
        {
          name: 'DGPC (Direction de la Protection Civile)',
          detail:
            'National emergencies 18 — SDIS Dakar coordination, Pikine/Guédiawaye flooding and coastal disasters',
        },
        {
          name: 'DER / Sécurité Présidentielle',
          detail:
            'General Delegation of Intelligence and Presidential Security — real-time integration with operational commands',
        },
        {
          name: 'PAD / PETROSEN',
          detail:
            'Port Autonome de Dakar (largest West Africa port) and PETROSEN Sangomar offshore — first exports 2024',
        },
        {
          name: 'DCMP / Code des marchés publics',
          detail:
            'Direction Centrale des Marchés Publics — SIGMAP portal, open tender thresholds and budget compliance',
        },
      ]

  const regulatory = es
    ? [
        {
          name: 'CDP / Loi 2008-12',
          detail:
            'Protección de datos personales — Commission de Protection des Données Personnelles supervisión y registro',
        },
        {
          name: 'Loi 2008-11 / ADIE',
          detail:
            'Cibercriminalidad y tecnologías de la información — Agencia de Informática del Estado y directrices de seguridad digital',
        },
        {
          name: 'Code des marchés publics / DCMP / SIGMAP',
          detail:
            'Adquisición pública — portal SIGMAP, umbral de licitación abierta y conformidad presupuestaria DGCPT',
        },
        {
          name: 'ECOWAS / CEDEAO Frameworks',
          detail:
            'Comunidad Económica de Estados del África Occidental — cooperación transfronteriza y marcos de inteligencia regional',
        },
      ]
    : [
        {
          name: 'CDP / Law 2008-12',
          detail:
            'Personal data protection — Commission de Protection des Données Personnelles oversight and registration',
        },
        {
          name: 'Law 2008-11 / ADIE',
          detail:
            'Cybercrime and information technologies — Agence de l\'Informatique de l\'État and digital security guidelines',
        },
        {
          name: 'Code des marchés publics / DCMP / SIGMAP',
          detail:
            'Public procurement — SIGMAP portal, open tender thresholds and DGCPT budget compliance',
        },
        {
          name: 'ECOWAS / CEDEAO Frameworks',
          detail:
            'Economic Community of West African States — cross-border cooperation and regional intelligence frameworks',
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
              {es ? 'Guía de Mercado — Senegal' : 'Market Guide — Senegal'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {es
                ? 'Software de Seguridad Pública para Senegal'
                : 'Public Safety Software for Senegal'}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              {es
                ? 'Plataforma unificada para la Police Nationale y Gendarmerie — despacho CAD integrado en 14 regiones, Dakar Safe City, DGPC protección civil, Puerto de Dakar/PAD, PETROSEN Sangomar, CDP/Loi 2008-12 y adquisición DCMP/SIGMAP.'
                : 'Unified platform for Senegal Police Nationale and Gendarmerie — integrated CAD dispatch across 14 regions, Dakar Safe City, DGPC civil protection, Port of Dakar/PAD, PETROSEN Sangomar offshore, CDP/Law 2008-12 compliance, and DCMP/SIGMAP procurement.'}
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es
                ? 'Seguridad Pública en Senegal: Contexto Operativo'
                : 'Public Safety in Senegal: Operational Context'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <p className="mb-4">
                  {es
                    ? 'La Police Nationale de Senegal bajo el Ministerio del Interior cubre las 14 regiones con la Direction de la Police Judiciaire (DPJ) y la Unidad Antiterrorista (UAT). La Gendarmerie Nationale gestiona las zonas rurales y fronterizas reportando al Ministerio de Defensa. El SDIS Dakar y la DGPC coordinan la respuesta a emergencias con el número 18 y el número único SAMU 15 para emergencias médicas.'
                    : 'The Police Nationale of Senegal under the Ministry of Interior covers all 14 regions with the Direction de la Police Judiciaire (DPJ) and Anti-Terrorism Unit (UAT). The Gendarmerie Nationale manages rural and border zones reporting to the Ministry of Defence. The SDIS Dakar and DGPC coordinate emergency response with number 18 and single SAMU 15 for medical emergencies.'}
                </p>
                <p>
                  {es
                    ? 'Senegal enfrenta desafíos estacionales significativos: las inundaciones anuales del área metropolitana de Dakar (Pikine/Guédiawaye, hivernage junio-octubre) afectan a millones de personas. El ONAS y el Plan Décennal de Lutte contre les Inondations (PDLI) son componentes clave del marco de respuesta.'
                    : 'Senegal faces significant seasonal challenges: annual flooding in the Dakar metropolitan area (Pikine/Guédiawaye, hivernage June-October) affects millions. The ONAS and Plan Décennal de Lutte contre les Inondations (PDLI) are key components of the response framework.'}
                </p>
              </div>
              <div>
                <p className="mb-4">
                  {es
                    ? 'Senegal inició sus primeras exportaciones de petróleo y gas en 2024 con el campo offshore Sangomar (PETROSEN/Woodside), transformando el perfil de seguridad de infraestructura crítica nacional. El Puerto Autónomo de Dakar (PAD) es el mayor puerto de la costa occidental de África con más de 18 millones de toneladas anuales. El aeropuerto AIBD Blaise Diagne maneja 5M+ pasajeros anuales.'
                    : "Senegal launched its first oil and gas exports in 2024 with the Sangomar offshore field (PETROSEN/Woodside), transforming the national critical infrastructure security profile. The Port Autonome de Dakar (PAD) is the largest port on Africa's west coast handling 18M+ tonnes annually. AIBD Blaise Diagne Airport handles 5M+ passengers annually."}
                </p>
                <p>
                  {es
                    ? 'El Plan Sénégal Émergent (PSE) y la Vision 2050 del presidente Faye impulsan la digitalización de la seguridad pública con inversión en Dakar Safe City, sistemas biométricos de identificación y plataformas de coordinación interagencial.'
                    : "President Faye's Plan Sénégal Émergent (PSE) and Vision 2050 drive public safety digitalisation with investment in Dakar Safe City, biometric identification systems and inter-agency coordination platforms."}
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
                ? 'Capacidades de la Plataforma KabatOne para Senegal'
                : 'KabatOne Platform Capabilities for Senegal'}
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
                        ? 'Despacho CAD Multiagencia — 14 Regiones'
                        : 'Multi-Agency CAD Dispatch — 14 Regions'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Despacho integrado para Police Nationale, Gendarmerie y DGPC/SDIS con asignación automática de recursos, priorización de llamadas 17/18 y coordinación entre las 14 regiones y el Gran Dakar.'
                        : 'Integrated dispatch for Police Nationale, Gendarmerie and DGPC/SDIS with automated resource assignment, 17/18 call prioritisation, and coordination across all 14 regions including Greater Dakar.'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold text-sm">VMS</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {es ? 'Dakar Safe City y CCTV Urbano' : 'Dakar Safe City & Urban CCTV'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Gestión centralizada de las redes CCTV de Dakar Safe City, Saint-Louis y Thiès — integración con ANPR para control de tráfico en la autopista Dakar-Diamniadio y vigilancia portuaria PAD.'
                        : 'Centralised management of Dakar Safe City, Saint-Louis and Thiès CCTV networks — integration with ANPR for traffic control on the Dakar-Diamniadio highway and PAD port surveillance.'}
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
                        ? 'Seguridad PAD — Puerto Autónomo de Dakar'
                        : 'PAD Security — Port Autonome de Dakar'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Vigilancia integrada del Puerto Autónomo de Dakar (mayor puerto de África Occidental), el Puerto de Mbour/Ziguinchor y las plataformas offshore PETROSEN/Woodside Sangomar con monitorización marítima en tiempo real.'
                        : 'Integrated surveillance for Port Autonome de Dakar (largest West Africa port), Port of Mbour/Ziguinchor and PETROSEN/Woodside Sangomar offshore platforms with real-time maritime monitoring.'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold text-sm">FLD</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {es
                        ? 'Gestión de Inundaciones Urbanas de Dakar'
                        : 'Dakar Urban Flood Management'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Coordinación DGPC/ONAS para las inundaciones estacionales de Pikine/Guédiawaye — integración con ANACIM (meteorología), alertas tempranas PDLI y coordinación con la Unidad Militar de Ayuda de Urgencia (UMAU).'
                        : 'DGPC/ONAS coordination for seasonal Pikine/Guédiawaye flooding — integration with ANACIM (meteorology), PDLI early warnings and coordination with the Military Emergency Aid Unit (UMAU).'}
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
                        ? 'Fronteras — Mauritania/Mali/Gambia/Guinea-Bissau'
                        : 'Borders — Mauritania/Mali/Gambia/Guinea-Bissau'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Gestión de pasos fronterizos con Mauritania (Rosso/Diama), Mali (Kidira/Diboli), Guinea-Bissau (São Domingos) y la frontera enclavada con Gambia (Farafenni/Sénoba) con ANPR y coordinación Gendarmerie.'
                        : 'Management of border crossings with Mauritania (Rosso/Diama), Mali (Kidira/Diboli), Guinea-Bissau (São Domingos) and the enclave Gambia border (Farafenni/Sénoba) with ANPR and Gendarmerie coordination.'}
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
                        ? 'Conformidad CDP / Loi 2008-12 / ADIE'
                        : 'CDP / Law 2008-12 / ADIE Compliance'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Arquitectura conforme con Loi 2008-12/CDP para datos personales, Loi 2008-11 sobre Cibercriminalidad y directrices ADIE para sistemas de gobierno digital e infraestructura crítica.'
                        : 'Architecture compliant with Law 2008-12/CDP for personal data, Law 2008-11 on Cybercrime and ADIE guidelines for digital government systems and critical infrastructure.'}
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
                      q: '¿Qué agencias de seguridad pública clave opera Senegal?',
                      a: 'La Police Nationale cubre 14 regiones con DPJ y UAT. La Gendarmerie Nationale gestiona zonas rurales y fronterizas. La DGPC coordina emergencias nacionales (18). El SDIS gestiona incendios y el SAMU emergencias médicas.',
                    },
                    {
                      q: '¿Cómo aborda KabatOne la infraestructura crítica de Senegal?',
                      a: 'KabatOne integra gestión del PAD (mayor puerto de África Occidental), el aeropuerto AIBD, las plataformas offshore PETROSEN/Woodside Sangomar (primeras exportaciones 2024), la red SENELEC y el TER Dakar-Thiès.',
                    },
                    {
                      q: '¿Es KabatOne compatible con la legislación de datos de Senegal?',
                      a: 'Sí. KabatOne cumple con la Loi 2008-12/CDP. La arquitectura está alineada con la Loi 2008-11 sobre Cibercriminalidad y las directrices ADIE para sistemas de gobierno digital.',
                    },
                    {
                      q: '¿Cómo apoya KabatOne la gestión de fronteras en Senegal?',
                      a: 'KabatOne gestiona los pasos fronterizos con Mauritania (Rosso/Diama), Mali (Kidira/Diboli), Guinea-Bissau (São Domingos) y la frontera enclavada con Gambia (Farafenni/Sénoba) con ANPR y coordinación Gendarmerie.',
                    },
                  ]
                : [
                    {
                      q: 'What key public safety agencies does Senegal operate?',
                      a: 'The Police Nationale covers 14 regions with DPJ and UAT. The Gendarmerie Nationale manages rural and border zones. The DGPC coordinates national emergencies (18). The SDIS manages fires and SAMU medical emergencies.',
                    },
                    {
                      q: 'How does KabatOne address Senegal critical infrastructure?',
                      a: 'KabatOne integrates management for the PAD (largest West Africa port), AIBD Airport, PETROSEN/Woodside Sangomar offshore platforms (first exports 2024), SENELEC power grid, and TER Dakar-Thiès railway.',
                    },
                    {
                      q: 'Is KabatOne compliant with Senegal data legislation?',
                      a: 'Yes. KabatOne complies with Law 2008-12/CDP. The architecture aligns with Law 2008-11 on Cybercrime and ADIE guidelines for digital government systems.',
                    },
                    {
                      q: 'How does KabatOne support border management in Senegal?',
                      a: 'KabatOne manages border crossings with Mauritania (Rosso/Diama), Mali (Kidira/Diboli), Guinea-Bissau (São Domingos) and the enclave Gambia border (Farafenni/Sénoba) with ANPR and Gendarmerie coordination.',
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
              ? '¿Listo para modernizar la seguridad pública en Senegal?'
              : 'Ready to modernise public safety in Senegal?'
          }
          subtitle={
            es
              ? 'Conecte con expertos de KabatOne para una evaluación de plataforma adaptada a la Police Nationale, Gendarmerie y DGPC de Senegal.'
              : 'Connect with KabatOne experts for a platform assessment tailored to Senegal Police Nationale, Gendarmerie and DGPC.'
          }
        />
      </main>

      <Footer es={es} />
    </>
  )
}
