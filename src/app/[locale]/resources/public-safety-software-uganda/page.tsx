import { generatePageMetadata } from '@/lib/metadata'
import { getTranslations } from 'next-intl/server'
import Script from 'next/script'
import Nav from '@/components/Nav'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return generatePageMetadata('publicSafetySoftwareUganda', locale)
}

export default async function PublicSafetySoftwareUgandaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const t = await getTranslations({ locale })

  const articleData = articleSchema(
    es
      ? 'Software de Seguridad Pública para Uganda: UPF/UPDF/ISO, OPM/UNMA, Kampala Safe City, UETCL/Karuma Dam, UNOC/EACOP & Data Protection Act 2019 | KabatOne'
      : 'Public Safety Software for Uganda: UPF/UPDF/ISO, OPM/UNMA, Kampala Safe City, UETCL/Karuma Dam, UNOC/EACOP & Data Protection Act 2019 | KabatOne',
    es
      ? 'Plataforma unificada para la Policía de Uganda (UPF) y UPDF — despacho CAD integrado en 10 subregiones, Kampala Safe City, OPM/UNMA gestión de desastres, UETCL/Karuma Dam 600 MW, UNOC/TotalEnergies EACOP, fronteras EAC, Data Protection Act 2019/PDPO y adquisición PPDA/Act 85 2003.'
      : 'Unified platform for Uganda Police Force (UPF) and UPDF — integrated CAD dispatch across 10 subregions, Kampala Safe City, OPM/UNMA disaster management, UETCL/Karuma Dam 600 MW, UNOC/TotalEnergies EACOP, EAC borders, Data Protection Act 2019/PDPO compliance, and PPDA/Act 85 2003 procurement.',
    es
      ? 'https://kabatone.com/es/resources/public-safety-software-uganda/'
      : 'https://kabatone.com/resources/public-safety-software-uganda/',
    '2025-05-19'
  )

  const faqData = faqPageSchema([
    {
      question: es
        ? '¿Qué agencias de seguridad pública clave opera Uganda?'
        : 'What key public safety agencies does Uganda operate?',
      answer: es
        ? 'La Policía de Uganda (UPF) bajo el Inspector General cubre las 10 subregiones con el Directorio de Investigación Criminal (CID) y la Unidad Táctica Flying Squad. Las Fuerzas de Defensa del Pueblo de Uganda (UPDF) apoyan la seguridad interna y las fronteras. La ISO (Organización de Seguridad Interna) gestiona la inteligencia. La UNMA coordina las emergencias meteorológicas.'
        : 'The Uganda Police Force (UPF) under the Inspector General covers all 10 subregions with the Criminal Investigations Directorate (CID) and Flying Squad Tactical Unit. The Uganda Peoples Defence Force (UPDF) supports internal and border security. The ISO (Internal Security Organisation) manages intelligence. The UNMA coordinates meteorological emergencies.',
    },
    {
      question: es
        ? '¿Cómo aborda KabatOne la infraestructura crítica de Uganda?'
        : 'How does KabatOne address Uganda critical infrastructure?',
      answer: es
        ? 'KabatOne integra gestión de UETCL (Uganda Electricity Transmission Company) y las presas de Karuma (600 MW), Isimba (183 MW) e Itanda/Bujagali, la UNOC/TotalEnergies Tilenga (600 Mb) y el oleoducto EACOP (East Africa Crude Oil Pipeline, 1,443 km hasta Tanga/Tanzania), el Puerto de Entebbe (lago Victoria), el Aeropuerto Internacional de Entebbe (EBB) y las minas de oro de Busia/Karamoja.'
        : 'KabatOne integrates management for UETCL (Uganda Electricity Transmission Company) and Karuma (600 MW), Isimba (183 MW) and Itanda/Bujagali dams, UNOC/TotalEnergies Tilenga (600 Mb) and the EACOP pipeline (East Africa Crude Oil Pipeline, 1,443 km to Tanga/Tanzania), Entebbe Port (Lake Victoria), Entebbe International Airport (EBB), and Busia/Karamoja gold mines.',
    },
    {
      question: es
        ? '¿Es KabatOne compatible con la legislación de datos de Uganda?'
        : 'Is KabatOne compliant with Uganda data legislation?',
      answer: es
        ? 'Sí. KabatOne está diseñado para cumplir con la Ley de Protección de Datos y Privacidad 2019 supervisada por la PDPO (Oficina de Protección de Datos Personales) del Ministerio de TIC. La arquitectura se alinea con la Ley sobre Delitos Informáticos 2011 y las directrices del NITA-U (Autoridad Nacional de Tecnología de la Información) para sistemas de gobierno digital.'
        : 'Yes. KabatOne is designed to comply with the Data Protection and Privacy Act 2019 supervised by the PDPO (Personal Data Protection Office) of the Ministry of ICT. The architecture aligns with the Computer Misuse Act 2011 and NITA-U (National Information Technology Authority of Uganda) guidelines for digital government systems.',
    },
    {
      question: es
        ? '¿Cómo apoya KabatOne la gestión de fronteras en Uganda?'
        : 'How does KabatOne support border management in Uganda?',
      answer: es
        ? 'KabatOne gestiona los principales pasos fronterizos: Malaba/Busia (Kenia), Mutukula (Tanzania), Katuna/Cyanika (Ruanda), Mpondwe/Bunagana/Ishasha (RDC), Oraba/Nimule (Sudán del Sur) y el corredor de lago Victoria con Tanzania, con ANPR integrado y coordinación UPF/UPDF/Inmigración.'
        : 'KabatOne manages major border crossings: Malaba/Busia (Kenya), Mutukula (Tanzania), Katuna/Cyanika (Rwanda), Mpondwe/Bunagana/Ishasha (DRC), Oraba/Nimule (South Sudan) and the Lake Victoria corridor with Tanzania, with integrated ANPR and UPF/UPDF/Immigration coordination.',
    },
  ])

  const breadcrumbData = breadcrumbSchema([
    { name: es ? 'Inicio' : 'Home', url: es ? 'https://kabatone.com/es/' : 'https://kabatone.com/' },
    {
      name: es ? 'Recursos' : 'Resources',
      url: es ? 'https://kabatone.com/es/resources/' : 'https://kabatone.com/resources/',
    },
    {
      name: 'Uganda',
      url: es
        ? 'https://kabatone.com/es/resources/public-safety-software-uganda/'
        : 'https://kabatone.com/resources/public-safety-software-uganda/',
    },
  ])

  const agencies = es
    ? [
        {
          name: 'UPF (Policía de Uganda)',
          detail:
            '10 subregiones, CID Directorio de Investigación Criminal, Flying Squad, Policía de Fronteras — gestión CAD unificada',
        },
        {
          name: 'UPDF (Fuerzas de Defensa de Uganda)',
          detail:
            'Seguridad interna, fronteriza y operaciones contra LRA/ADF — apoyo a infraestructura crítica EACOP/Tilenga',
        },
        {
          name: 'OPM / UNMA',
          detail:
            'Oficina del Primer Ministro y Autoridad Nacional de Gestión Meteorológica — coordinación de desastres y emergencias climáticas',
        },
        {
          name: 'ISO (Organización de Seguridad Interna)',
          detail:
            'Inteligencia interna — integración en tiempo real con operaciones UPF/UPDF y protección de infraestructura crítica',
        },
        {
          name: 'UNOC / TotalEnergies',
          detail:
            'Uganda National Oil Company y TotalEnergies Tilenga (600 Mb) — oleoducto EACOP 1,443 km hasta Tanga Tanzania',
        },
        {
          name: 'PPDA / Act 85 2003',
          detail:
            'Autoridad de Adquisición y Disposición de Bienes Públicos — portal GEPS y conformidad PPDA',
        },
      ]
    : [
        {
          name: 'UPF (Uganda Police Force)',
          detail:
            '10 subregions, CID Criminal Investigations Directorate, Flying Squad, Border Police — unified CAD management',
        },
        {
          name: 'UPDF (Uganda Peoples Defence Force)',
          detail:
            'Internal security, border ops and LRA/ADF counter-ops — EACOP/Tilenga critical infrastructure support',
        },
        {
          name: 'OPM / UNMA',
          detail:
            'Office of the Prime Minister and Uganda National Meteorological Authority — disaster coordination and climate emergencies',
        },
        {
          name: 'ISO (Internal Security Organisation)',
          detail:
            'Internal intelligence — real-time integration with UPF/UPDF operations and critical infrastructure protection',
        },
        {
          name: 'UNOC / TotalEnergies',
          detail:
            'Uganda National Oil Company and TotalEnergies Tilenga (600 Mb) — EACOP pipeline 1,443 km to Tanga Tanzania',
        },
        {
          name: 'PPDA / Act 85 2003',
          detail:
            'Public Procurement and Disposal of Public Assets Authority — GEPS portal and PPDA compliance',
        },
      ]

  const regulatory = es
    ? [
        {
          name: 'PDPO / Data Protection Act 2019',
          detail:
            'Ley de Protección de Datos y Privacidad 2019 — Oficina de Protección de Datos Personales/Ministerio de TIC supervisión',
        },
        {
          name: 'Computer Misuse Act 2011 / NITA-U',
          detail:
            'Ley sobre Delitos Informáticos 2011 — Autoridad Nacional de Tecnología de la Información directrices de ciberseguridad',
        },
        {
          name: 'PPDA / Act 85 2003',
          detail:
            'Adquisición pública — portal GEPS Uganda, umbrales de licitación abierta y auditoría de contratos PPDA',
        },
        {
          name: 'EAC / AfCFTA Frameworks',
          detail:
            'Comunidad de África Oriental y AfCFTA — cooperación transfronteriza y marcos de seguridad regional',
        },
      ]
    : [
        {
          name: 'PDPO / Data Protection Act 2019',
          detail:
            'Data Protection and Privacy Act 2019 — Personal Data Protection Office/Ministry of ICT oversight',
        },
        {
          name: 'Computer Misuse Act 2011 / NITA-U',
          detail:
            'Computer Misuse Act 2011 — National Information Technology Authority cybersecurity guidelines',
        },
        {
          name: 'PPDA / Act 85 2003',
          detail:
            'Public procurement — GEPS Uganda portal, open tender thresholds and PPDA contract audit',
        },
        {
          name: 'EAC / AfCFTA Frameworks',
          detail:
            'East African Community and AfCFTA — cross-border cooperation and regional security frameworks',
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
              {es ? 'Guía de Mercado — Uganda' : 'Market Guide — Uganda'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {es
                ? 'Software de Seguridad Pública para Uganda'
                : 'Public Safety Software for Uganda'}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              {es
                ? 'Plataforma unificada para la UPF y UPDF — despacho CAD integrado en 10 subregiones, Kampala Safe City, OPM/UNMA gestión de desastres, UETCL/Karuma Dam, UNOC/TotalEnergies EACOP 1,443 km, fronteras EAC, Data Protection Act 2019/PDPO y adquisición PPDA/GEPS.'
                : 'Unified platform for Uganda UPF and UPDF — integrated CAD dispatch across 10 subregions, Kampala Safe City, OPM/UNMA disaster management, UETCL/Karuma Dam, UNOC/TotalEnergies EACOP 1,443 km, EAC borders, Data Protection Act 2019/PDPO compliance, and PPDA/GEPS procurement.'}
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {es
                ? 'Seguridad Pública en Uganda: Contexto Operativo'
                : 'Public Safety in Uganda: Operational Context'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div>
                <p className="mb-4">
                  {es
                    ? 'La Policía de Uganda (UPF) bajo el Inspector General cubre las 10 subregiones con más de 45,000 efectivos. El Directorio de Investigación Criminal (CID) y la Flying Squad gestionan operaciones especializadas. Las UPDF (Fuerzas de Defensa del Pueblo de Uganda) apoyan la seguridad interna, las operaciones contra el LRA/ADF en el norte/este y la protección de la infraestructura crítica petrolífera EACOP/Tilenga.'
                    : 'The Uganda Police Force (UPF) under the Inspector General covers all 10 subregions with 45,000+ officers. The Criminal Investigations Directorate (CID) and Flying Squad manage specialised operations. The UPDF (Uganda Peoples Defence Force) supports internal security, LRA/ADF counter-operations in the north/east and protection of the EACOP/Tilenga critical oil infrastructure.'}
                </p>
                <p>
                  {es
                    ? 'El sistema de emergencias opera a través del 999 (Policía), 112 (número único de emergencias) y la Unidad de Gestión de Emergencias de la OPM. La UNMA (Autoridad Nacional de Gestión Meteorológica) coordina las alertas de inundaciones, sequías, erupciones del Monte Elgon y la actividad volcánica en los Virunga/Albert Rift.'
                    : 'The emergency system operates through 999 (Police), 112 (single emergency number) and the OPM Emergency Management Unit. The UNMA (Uganda National Meteorological Authority) coordinates flood warnings, droughts, Mount Elgon eruptions and volcanic activity in the Virunga/Albert Rift.'}
                </p>
              </div>
              <div>
                <p className="mb-4">
                  {es
                    ? 'Uganda inicia su era petrolífera con el proyecto Tilenga de UNOC/TotalEnergies (600 millones de barriles, inicio de producción previsto 2025) y el East Africa Crude Oil Pipeline (EACOP) de 1,443 km hasta el Puerto de Tanga en Tanzania — el mayor proyecto de infraestructura del África Oriental. UETCL gestiona la Karuma Dam (600 MW, mayor presa de Uganda) y las presas de Isimba/Bujagali.'
                    : "Uganda enters its oil era with the UNOC/TotalEnergies Tilenga project (600 million barrels, production start planned 2025) and the East Africa Crude Oil Pipeline (EACOP) 1,443 km to Tanzania's Port of Tanga — East Africa's largest infrastructure project. UETCL manages Karuma Dam (600 MW, Uganda's largest dam) and Isimba/Bujagali dams."}
                </p>
                <p>
                  {es
                    ? 'La Visión Uganda 2040 y el Plan de Desarrollo Nacional III (NDPIII) 2020-2025 impulsan la digitalización de la seguridad pública con inversión en Kampala Safe City, sistemas biométricos y plataformas de coordinación multiagencia del NITA-U.'
                    : "Uganda Vision 2040 and the National Development Plan III (NDPIII) 2020-2025 drive public safety digitalisation with investment in Kampala Safe City, biometric systems and NITA-U multi-agency coordination platforms."}
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
                ? 'Capacidades de la Plataforma KabatOne para Uganda'
                : 'KabatOne Platform Capabilities for Uganda'}
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
                        ? 'Despacho CAD Multiagencia — 10 Subregiones'
                        : 'Multi-Agency CAD Dispatch — 10 Subregions'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Despacho integrado para UPF, UPDF y OPM con asignación automática de recursos, priorización de llamadas 999/112 y coordinación entre las 10 subregiones y el Gran Kampala.'
                        : 'Integrated dispatch for UPF, UPDF and OPM with automated resource assignment, 999/112 call prioritisation and coordination across all 10 subregions and Greater Kampala.'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold text-sm">VMS</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {es ? 'Kampala Safe City y CCTV Urbano' : 'Kampala Safe City & Urban CCTV'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Gestión centralizada de las redes CCTV de Kampala Safe City, Entebbe y Jinja — integración con ANPR para gestión del tráfico en la autopista Kampala-Entebbe y vigilancia del aeropuerto EBB.'
                        : 'Centralised management of Kampala Safe City, Entebbe and Jinja CCTV networks — integration with ANPR for traffic management on the Kampala-Entebbe Expressway and EBB airport surveillance.'}
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
                        ? 'Seguridad EACOP/Tilenga — UNOC/TotalEnergies'
                        : 'EACOP/Tilenga Security — UNOC/TotalEnergies'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Monitorización integrada del proyecto Tilenga (Área de Lago Alberto), el oleoducto EACOP (1,443 km hasta Tanga), las instalaciones de procesamiento de Kabaale y coordinación con UPDF para la protección del corredor petrolífero.'
                        : 'Integrated monitoring of the Tilenga project (Lake Albert area), EACOP pipeline (1,443 km to Tanga), Kabaale processing facilities and UPDF coordination for oil corridor protection.'}
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
                        ? 'Fronteras EAC — 6 Países Limítrofes'
                        : 'EAC Borders — 6 Neighbouring Countries'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Gestión de Malaba/Busia (Kenia), Mutukula (Tanzania), Katuna/Cyanika (Ruanda), Mpondwe/Bunagana/Ishasha (RDC) y Oraba/Nimule (Sudán del Sur) con ANPR integrado y coordinación UPF/UPDF/Inmigración.'
                        : 'Management of Malaba/Busia (Kenya), Mutukula (Tanzania), Katuna/Cyanika (Rwanda), Mpondwe/Bunagana/Ishasha (DRC) and Oraba/Nimule (South Sudan) with integrated ANPR and UPF/UPDF/Immigration coordination.'}
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
                        ? 'Seguridad Hidroeléctrica — Karuma/Isimba/Bujagali'
                        : 'Hydroelectric Security — Karuma/Isimba/Bujagali'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Monitorización integrada de Karuma (600 MW), Isimba (183 MW), Bujagali e Itanda — coordinación UETCL/ERA y alertas de seguridad para el corredor del Nilo Blanco con UPDF.'
                        : 'Integrated monitoring of Karuma (600 MW), Isimba (183 MW), Bujagali and Itanda — UETCL/ERA coordination and security alerts for the White Nile corridor with UPDF.'}
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
                        ? 'Conformidad PDPO / Data Protection Act 2019 / NITA-U'
                        : 'PDPO / Data Protection Act 2019 / NITA-U Compliance'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {es
                        ? 'Arquitectura conforme con la Data Protection Act 2019/PDPO para datos personales, la Ley sobre Delitos Informáticos 2011 para ciberseguridad y las directrices NITA-U para sistemas de gobierno digital.'
                        : 'Architecture compliant with Data Protection Act 2019/PDPO for personal data, Computer Misuse Act 2011 for cybersecurity, and NITA-U guidelines for digital government systems.'}
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
                      q: '¿Qué agencias de seguridad pública clave opera Uganda?',
                      a: 'La UPF bajo el Inspector General cubre 10 subregiones con 45,000+ efectivos y CID. Las UPDF apoyan seguridad interna y EACOP/Tilenga. La ISO gestiona inteligencia. La OPM/UNMA coordina desastres meteorológicos.',
                    },
                    {
                      q: '¿Cómo aborda KabatOne la infraestructura crítica de Uganda?',
                      a: 'KabatOne integra gestión de UETCL/Karuma Dam (600 MW), Isimba/Bujagali, UNOC/TotalEnergies Tilenga (600 Mb), EACOP (1,443 km hasta Tanga), Puerto de Entebbe y el Aeropuerto Internacional EBB.',
                    },
                    {
                      q: '¿Es KabatOne compatible con la legislación de datos de Uganda?',
                      a: 'Sí. KabatOne cumple con la Data Protection Act 2019/PDPO. La arquitectura está alineada con la Ley sobre Delitos Informáticos 2011 y las directrices NITA-U.',
                    },
                    {
                      q: '¿Cómo apoya KabatOne la gestión de fronteras en Uganda?',
                      a: 'KabatOne gestiona Malaba/Busia (Kenia), Mutukula (Tanzania), Katuna/Cyanika (Ruanda), Mpondwe/Bunagana/Ishasha (RDC) y Oraba/Nimule (Sudán del Sur) con ANPR y coordinación UPF/UPDF/Inmigración.',
                    },
                  ]
                : [
                    {
                      q: 'What key public safety agencies does Uganda operate?',
                      a: 'The UPF under the Inspector General covers 10 subregions with 45,000+ officers and CID. The UPDF supports internal security and EACOP/Tilenga protection. The ISO manages intelligence. The OPM/UNMA coordinates meteorological disasters.',
                    },
                    {
                      q: 'How does KabatOne address Uganda critical infrastructure?',
                      a: 'KabatOne integrates management for UETCL/Karuma Dam (600 MW), Isimba/Bujagali, UNOC/TotalEnergies Tilenga (600 Mb), EACOP (1,443 km to Tanga), Entebbe Port and Entebbe International Airport EBB.',
                    },
                    {
                      q: 'Is KabatOne compliant with Uganda data legislation?',
                      a: 'Yes. KabatOne complies with Data Protection Act 2019/PDPO. The architecture aligns with the Computer Misuse Act 2011 and NITA-U guidelines.',
                    },
                    {
                      q: 'How does KabatOne support border management in Uganda?',
                      a: 'KabatOne manages Malaba/Busia (Kenya), Mutukula (Tanzania), Katuna/Cyanika (Rwanda), Mpondwe/Bunagana/Ishasha (DRC) and Oraba/Nimule (South Sudan) with ANPR and UPF/UPDF/Immigration coordination.',
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
              ? '¿Listo para modernizar la seguridad pública en Uganda?'
              : 'Ready to modernise public safety in Uganda?'
          }
          subtitle={
            es
              ? 'Conecte con expertos de KabatOne para una evaluación de plataforma adaptada a la UPF, UPDF y OPM de Uganda.'
              : 'Connect with KabatOne experts for a platform assessment tailored to Uganda UPF, UPDF and OPM.'
          }
        />
      </main>

      <Footer es={es} />
    </>
  )
}
