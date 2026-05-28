import { generatePageMetadata } from '@/lib/metadata'
import { getTranslations } from 'next-intl/server'
import Script from 'next/script'
import Nav from '@/components/Nav'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareGhana', locale)
}

export default async function PublicSafetySoftwareGhanaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const t = await getTranslations({ locale })

  const articleData = articleSchema(
    es
      ? 'Software de Seguridad Pública para Ghana: GPS/GNFS, NADMO, Ghana Safe City/CCTV, ECOWAS/ECOMOG y Data Protection Act 2012 | KabatOne'
      : 'Public Safety Software for Ghana: GPS/GNFS, NADMO, Ghana Safe City/CCTV, ECOWAS/ECOMOG & Data Protection Act 2012 | KabatOne',
    es
      ? 'Plataforma unificada para el Servicio de Policía de Ghana (GPS) y GNFS — despacho CAD integrado en 16 regiones, Accra Safe City, NADMO gestión de desastres, Puerto de Tema/GPHA, hub ECOWAS/ECOMOG, Data Protection Act 2012/DPC y GPPA/PPA 2003.'
      : 'Unified platform for Ghana Police Service (GPS) and GNFS — integrated CAD dispatch across 16 regions, Accra Safe City, NADMO disaster management, Port of Tema/GPHA, ECOWAS/ECOMOG hub, Data Protection Act 2012/DPC compliance, and GPPA/PPA 2003 procurement.',
    es
      ? 'https://kabatone.com/es/resources/public-safety-software-ghana/'
      : 'https://kabatone.com/resources/public-safety-software-ghana/',
    '2025-05-19'
  )

  const faqData = faqPageSchema([
    {
      question: es
        ? '¿Qué agencias de seguridad pública clave opera Ghana?'
        : 'What key public safety agencies does Ghana operate?',
      answer: es
        ? 'El Servicio de Policía de Ghana (GPS) bajo el Ministerio del Interior cubre 16 regiones con la Unidad de Combate al Crimen (DCOP). El Servicio Nacional de Bomberos de Ghana (GNFS) gestiona emergencias de incendios. El NADMO coordina la gestión de desastres nacionales. El Servicio de Seguridad e Inteligencia Nacional (NISS) y la Guardia del Presidente cubren seguridad nacional.'
        : 'The Ghana Police Service (GPS) under the Ministry of Interior covers 16 regions with the Crime Combat Unit (DCOP). The Ghana National Fire Service (GNFS) manages fire emergencies. The NADMO coordinates national disaster management. The National Intelligence and Security Service (NISS) and Presidential Guard cover national security.',
    },
    {
      question: es
        ? '¿Cómo aborda KabatOne la infraestructura crítica de Ghana?'
        : 'How does KabatOne address Ghana critical infrastructure?',
      answer: es
        ? 'KabatOne integra gestión de la Autoridad Portuaria de Ghana (GPHA) — Puerto de Tema (mayor puerto del África Occidental), Puerto de Takoradi, GNPC gas offshore Jubilee/TEN/Sankofa, GRIDCO red eléctrica, GWCL agua, el Aeropuerto Internacional de Kotoka (ACC) y las refinerías de oro de Obuasi/Tarkwa.'
        : 'KabatOne integrates management for the Ghana Ports and Harbours Authority (GPHA) — Port of Tema (largest West Africa port), Port of Takoradi, GNPC offshore gas Jubilee/TEN/Sankofa fields, GRIDCO power grid, GWCL water, Kotoka International Airport (ACC), and Obuasi/Tarkwa gold refineries.',
    },
    {
      question: es
        ? '¿Es KabatOne compatible con la legislación de datos de Ghana?'
        : 'Is KabatOne compliant with Ghana data legislation?',
      answer: es
        ? 'Sí. KabatOne está diseñado para cumplir con la Ley de Protección de Datos 2012 (Ley 843) supervisada por la Comisión de Protección de Datos (DPC). La arquitectura se alinea con la Ley de Delitos Electrónicos 2008 (Ley 772) y las directrices NCSA/CERT-GH para ciberseguridad.'
        : 'Yes. KabatOne is designed to comply with the Data Protection Act 2012 (Act 843) supervised by the Data Protection Commission (DPC). The architecture aligns with the Electronic Transactions Act 2008 (Act 772) and NCSA/CERT-GH cybersecurity guidelines.',
    },
    {
      question: es
        ? '¿Cómo apoya KabatOne el rol de Ghana como hub regional ECOWAS?'
        : "How does KabatOne support Ghana's role as an ECOWAS regional hub?",
      answer: es
        ? 'KabatOne facilita la coordinación transfronteriza con los marcos ECOWAS/ECOMOG, gestión de los pasos fronterizos con Togo (Aflao), Costa de Marfil (Elubo), Burkina Faso (Paga/Hamile) y el Centro de Coordinación Regional de INTERPOL en Accra para compartir inteligencia en tiempo real.'
        : 'KabatOne facilitates cross-border coordination with ECOWAS/ECOMOG frameworks, management of border crossings with Togo (Aflao), Ivory Coast (Elubo), Burkina Faso (Paga/Hamile), and the INTERPOL Regional Coordination Centre in Accra for real-time intelligence sharing.',
    },
  ])

  const breadcrumbData = breadcrumbSchema([
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    {
      name: es ? 'Recursos' : 'Resources',
      url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/',
    },
    {
      name: 'Ghana',
      url: es
        ? 'https://kabatone.com/es/resources/public-safety-software-ghana/'
        : 'https://kabatone.com/resources/public-safety-software-ghana/',
    },
  ])

  const agencies = es
    ? [
        {
          name: 'GPS (Servicio de Policía de Ghana)',
          detail:
            '16 regiones, Crime Combat Unit (DCOP), Policía de Fronteras, Unidad de Tráfico — gestión unificada de incidentes',
        },
        {
          name: 'GNFS (Servicio Nacional de Bomberos)',
          detail:
            'Emergencias de incendios urbanos e industriales — Accra, Kumasi, Takoradi y zonas mineras de Obuasi/Tarkwa',
        },
        {
          name: 'NADMO',
          detail:
            'Organización Nacional de Gestión de Desastres — inundaciones estacionales, deslizamientos de tierra e incidentes industriales',
        },
        {
          name: 'NISS / Guardia del Presidente',
          detail:
            'Servicio Nacional de Inteligencia y Seguridad — integración de datos en tiempo real con operaciones nacionales',
        },
        {
          name: 'GPHA / GNPC',
          detail:
            'Autoridad Portuaria de Ghana — Puerto de Tema/Takoradi; Empresa Nacional de Petróleo de Ghana — gas offshore Jubilee/TEN/Sankofa',
        },
        {
          name: 'GPPA / PPA 2003',
          detail:
            'Autoridad de Adquisición de Bienes y Servicios del Gobierno — portal Ghana Electronic Procurement (GEP) y conformidad PPA',
        },
      ]
    : [
        {
          name: 'GPS (Ghana Police Service)',
          detail:
            '16 regions, Crime Combat Unit (DCOP), Border Police, Traffic Unit — unified incident management',
        },
        {
          name: 'GNFS (Ghana National Fire Service)',
          detail:
            'Urban and industrial fire emergencies — Accra, Kumasi, Takoradi and Obuasi/Tarkwa mining zones',
        },
        {
          name: 'NADMO',
          detail:
            'National Disaster Management Organisation — seasonal floods, landslides and industrial incidents',
        },
        {
          name: 'NISS / Presidential Guard',
          detail:
            'National Intelligence and Security Service — real-time data integration with national operations',
        },
        {
          name: 'GPHA / GNPC',
          detail:
            'Ghana Ports and Harbours Authority — Port of Tema/Takoradi; Ghana National Petroleum Corporation — offshore Jubilee/TEN/Sankofa',
        },
        {
          name: 'GPPA / PPA 2003',
          detail:
            'Government Procurement Authority — Ghana Electronic Procurement (GEP) portal and PPA compliance',
        },
      ]

  const regulatory = es
    ? [
        {
          name: 'Data Protection Act 2012 (Act 843) / DPC',
          detail:
            'Protección de datos personales — Comisión de Protección de Datos supervisión y registro obligatorio',
        },
        {
          name: 'Electronic Transactions Act 2008 / NCSA',
          detail:
            'Transacciones electrónicas y ciberseguridad — Autoridad Nacional de Seguridad Cibernética y CERT-GH',
        },
        {
          name: 'PPA 2003 / GPPA / GEP',
          detail:
            'Adquisición pública — portal Ghana Electronic Procurement, umbrales de licitación abierta y auditoría de contratos',
        },
        {
          name: 'ECOWAS / ECOMOG Frameworks',
          detail:
            'Cooperación regional y seguridad transfronteriza — coordinación INTERPOL Accra y marcos de inteligencia compartida',
        },
      ]
    : [
        {
          name: 'Data Protection Act 2012 (Act 843) / DPC',
          detail:
            'Personal data protection — Data Protection Commission oversight and mandatory registration',
        },
        {
          name: 'Electronic Transactions Act 2008 / NCSA',
          detail:
            'Electronic transactions and cybersecurity — National Cyber Security Authority and CERT-GH',
        },
        {
          name: 'PPA 2003 / GPPA / GEP',
          detail:
            'Public procurement — Ghana Electronic Procurement portal, open tender thresholds and contract audit',
        },
        {
          name: 'ECOWAS / ECOMOG Frameworks',
          detail:
            'Regional cooperation and cross-border security — INTERPOL Accra coordination and shared intelligence frameworks',
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
              {es ? 'Guía de Mercado — Ghana' : 'Market Guide — Ghana'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {es
                ? 'Software de Seguridad Pública para Ghana'
                : 'Public Safety Software for Ghana'}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              {es
                ? 'Plataforma unificada para el GPS y GNFS — despacho CAD integrado en 16 regiones, Accra Safe City, NADMO gestión de desastres, Puerto de Tema/GPHA, hub regional ECOWAS/ECOMOG, Data Protection Act 2012/DPC y adquisición GPPA/GEP.'
                : 'Unified platform for Ghana Police Service and GNFS — integrated CAD dispatch across 16 regions, Accra Safe City, NADMO disaster management, Port of Tema/GPHA, ECOWAS/ECOMOG regional hub, Data Protection Act 2012/DPC compliance, and GPPA/GEP procurement.'}
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es
                ? 'Seguridad Pública en Ghana: Contexto Operativo'
                : 'Public Safety in Ghana: Operational Context'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <p className="mb-4">
                  {es
                    ? 'El Servicio de Policía de Ghana (GPS) bajo el Inspector General de Policía (IGP) cubre las 16 regiones con más de 30,000 efectivos. La Unidad de Combate al Crimen (DCOP) y las Unidades Especiales de Operaciones gestionan incidentes de alta prioridad. El GNFS (Servicio Nacional de Bomberos) coordina emergencias de incendios urbanos e industriales, con especial enfoque en Accra, Kumasi y las zonas mineras del Ashanti.'
                    : 'The Ghana Police Service (GPS) under the Inspector General of Police (IGP) covers all 16 regions with 30,000+ officers. The Crime Combat Unit (DCOP) and Special Operations Units manage high-priority incidents. The GNFS (Ghana National Fire Service) coordinates urban and industrial fire emergencies, with a particular focus on Accra, Kumasi and Ashanti mining zones.'}
                </p>
                <p>
                  {es
                    ? 'El sistema de emergencias opera a través del 191 (Policía), 192 (Bomberos) y 193 (Ambulancias). El NADMO (Organización Nacional de Gestión de Desastres) coordina la respuesta a las inundaciones estacionales del Norte de Ghana, deslizamientos de tierra y emergencias industriales con el Ghana Meteorological Agency (GMet).'
                    : 'The emergency system operates through 191 (Police), 192 (Fire) and 193 (Ambulance). The NADMO coordinates response to seasonal flooding in Northern Ghana, landslides and industrial emergencies with the Ghana Meteorological Agency (GMet).'}
                </p>
              </div>
              <div>
                <p className="mb-4">
                  {es
                    ? 'Ghana es el hub regional ECOWAS y democracia de referencia del África Occidental. El Puerto de Tema (GPHA) es el mayor puerto del África Occidental con 20M+ contenedores anuales y una zona industrial especial. El gas offshore del GNPC (Jubilee/TEN/Sankofa) y las minas de oro de Obuasi (AngloGold Ashanti) y Tarkwa constituyen infraestructura crítica nacional.'
                    : 'Ghana is the ECOWAS regional hub and West Africa reference democracy. The Port of Tema (GPHA) is the largest West African port handling 20M+ containers annually with a special industrial zone. GNPC offshore gas (Jubilee/TEN/Sankofa fields) and Obuasi (AngloGold Ashanti) and Tarkwa gold mines constitute critical national infrastructure.'}
                </p>
                <p>
                  {es
                    ? 'La Agenda de Transformación Digital de Ghana 2019 y la Visión 2057 impulsan la modernización de la seguridad pública con inversión en sistemas de identificación digital (Ghana Card/NIA), Accra Safe City y plataformas integradas de gestión de incidentes.'
                    : "Ghana's Digital Transformation Agenda 2019 and Vision 2057 drive public safety modernisation with investment in digital ID systems (Ghana Card/NIA), Accra Safe City and integrated incident management platforms."}
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
                ? 'Capacidades de la Plataforma KabatOne para Ghana'
                : 'KabatOne Platform Capabilities for Ghana'}
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
                        ? 'Despacho CAD Multiagencia — 16 Regiones'
                        : 'Multi-Agency CAD Dispatch — 16 Regions'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Despacho integrado para GPS, GNFS y NADMO con asignación automática de recursos, priorización de llamadas 191/192/193 y coordinación entre las 16 regiones y el Gran Accra.'
                        : 'Integrated dispatch for GPS, GNFS and NADMO with automated resource assignment, 191/192/193 call prioritisation, and coordination across all 16 regions including Greater Accra.'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold text-sm">VMS</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {es ? 'Accra Safe City y CCTV Urbano' : 'Accra Safe City & Urban CCTV'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Gestión centralizada de las redes CCTV de Accra Safe City, Kumasi y Tamale — integración con ANPR para gestión del tráfico, vigilancia de zonas comerciales y mercados.'
                        : 'Centralised management of Accra Safe City, Kumasi and Tamale CCTV networks — integration with ANPR for traffic management, commercial zone and market surveillance.'}
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
                        ? 'Seguridad Portuaria GPHA — Tema y Takoradi'
                        : 'GPHA Port Security — Tema and Takoradi'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Vigilancia integrada del Puerto de Tema (mayor puerto de África Occidental), Puerto de Takoradi y plataformas offshore GNPC Jubilee/TEN/Sankofa con monitorización de embarcaciones y control de acceso.'
                        : 'Integrated surveillance for Port of Tema (West Africa largest port), Port of Takoradi and GNPC offshore platforms Jubilee/TEN/Sankofa with vessel monitoring and access control.'}
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
                        ? 'Fronteras ECOWAS — Togo/Costa de Marfil/Burkina Faso'
                        : 'ECOWAS Borders — Togo/Ivory Coast/Burkina Faso'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Gestión de pasos fronterizos con Togo (Aflao), Costa de Marfil (Elubo/Dormaa Ahenkro) y Burkina Faso (Paga/Hamile) con ANPR integrado y coordinación ECOWAS para migración y seguridad regional.'
                        : 'Management of border crossings with Togo (Aflao), Ivory Coast (Elubo/Dormaa Ahenkro) and Burkina Faso (Paga/Hamile) with integrated ANPR and ECOWAS coordination for migration and regional security.'}
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
                        ? 'Seguridad de Minas e Infraestructura Crítica'
                        : 'Mining & Critical Infrastructure Security'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Monitorización integrada de las minas de oro de Obuasi (AngloGold Ashanti) y Tarkwa, plantas de procesamiento de bauxita, la red GRIDCO y la infraestructura de transmisión de ECG con alertas de galamsey (minería ilegal).'
                        : 'Integrated monitoring of Obuasi (AngloGold Ashanti) and Tarkwa gold mines, bauxite processing plants, GRIDCO power grid and ECG transmission infrastructure with galamsey (illegal mining) alerts.'}
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
                        ? 'Conformidad Data Protection Act 2012 / NCSA'
                        : 'Data Protection Act 2012 / NCSA Compliance'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Arquitectura conforme con Data Protection Act 2012 (Act 843)/DPC para datos personales, Electronic Transactions Act 2008 para ciberseguridad y directrices NCSA/CERT-GH para infraestructura crítica.'
                        : 'Architecture compliant with Data Protection Act 2012 (Act 843)/DPC for personal data, Electronic Transactions Act 2008 for cybersecurity, and NCSA/CERT-GH guidelines for critical infrastructure.'}
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
                      q: '¿Qué agencias de seguridad pública clave opera Ghana?',
                      a: 'El GPS bajo el IGP cubre 16 regiones con 30,000+ efectivos. El GNFS gestiona emergencias de incendios. El NADMO coordina desastres. La NISS y la Guardia del Presidente cubren seguridad nacional.',
                    },
                    {
                      q: '¿Cómo aborda KabatOne la infraestructura crítica de Ghana?',
                      a: 'KabatOne integra gestión de GPHA (Puerto de Tema y Takoradi), GNPC offshore Jubilee/TEN/Sankofa, GRIDCO red eléctrica, GWCL agua, Aeropuerto Kotoka (ACC) y minas de oro Obuasi/Tarkwa.',
                    },
                    {
                      q: '¿Es KabatOne compatible con la legislación de datos de Ghana?',
                      a: 'Sí. KabatOne cumple con la Data Protection Act 2012 (Act 843)/DPC. La arquitectura está alineada con la Electronic Transactions Act 2008 y las directrices NCSA/CERT-GH.',
                    },
                    {
                      q: '¿Cómo apoya KabatOne el rol regional ECOWAS de Ghana?',
                      a: 'KabatOne facilita la coordinación transfronteriza con marcos ECOWAS/ECOMOG, gestión de los pasos fronterizos con Togo (Aflao), Costa de Marfil (Elubo), Burkina Faso (Paga/Hamile) y el Centro INTERPOL Accra.',
                    },
                  ]
                : [
                    {
                      q: 'What key public safety agencies does Ghana operate?',
                      a: 'The GPS under the IGP covers 16 regions with 30,000+ officers. The GNFS manages fire emergencies. The NADMO coordinates disasters. The NISS and Presidential Guard cover national security.',
                    },
                    {
                      q: 'How does KabatOne address Ghana critical infrastructure?',
                      a: 'KabatOne integrates management for GPHA (Tema and Takoradi ports), GNPC offshore Jubilee/TEN/Sankofa, GRIDCO power grid, GWCL water, Kotoka Airport (ACC), and Obuasi/Tarkwa gold mines.',
                    },
                    {
                      q: 'Is KabatOne compliant with Ghana data legislation?',
                      a: 'Yes. KabatOne complies with Data Protection Act 2012 (Act 843)/DPC. The architecture aligns with the Electronic Transactions Act 2008 and NCSA/CERT-GH guidelines.',
                    },
                    {
                      q: "How does KabatOne support Ghana's ECOWAS regional role?",
                      a: 'KabatOne facilitates cross-border coordination with ECOWAS/ECOMOG frameworks, management of border crossings with Togo (Aflao), Ivory Coast (Elubo), Burkina Faso (Paga/Hamile), and the INTERPOL Centre in Accra.',
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
              ? '¿Listo para modernizar la seguridad pública en Ghana?'
              : 'Ready to modernise public safety in Ghana?'
          }
          subtitle={
            es
              ? 'Conecte con expertos de KabatOne para una evaluación de plataforma adaptada al GPS, GNFS y NADMO de Ghana.'
              : 'Connect with KabatOne experts for a platform assessment tailored to Ghana GPS, GNFS and NADMO.'
          }
        />
      </main>

      <Footer es={es} />
    </>
  )
}
