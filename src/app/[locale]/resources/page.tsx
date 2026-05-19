import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { Link } from '@/i18n/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return generatePageMetadata('resources', locale)
}

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'
  const ACCENT = '#3b82f6'

  const articles = es
    ? [
        {
          href: '/resources/end-of-siloed-response',
          category: 'Informe del Sector',
          title: 'El Fin de la Respuesta en Silos',
          excerpt: 'Por qué las agencias de seguridad pública siguen operando con sistemas fragmentados — y cómo la coordinación unificada reduce el tiempo de respuesta en un 42%.',
          readTime: '15 min',
          isNew: true,
        },
        {
          href: '/resources/rtcc-setup-guide',
          category: 'Guía',
          title: 'Cómo Implementar un Centro de Crimen en Tiempo Real (RTCC)',
          excerpt: 'Guía paso a paso para planificar, construir y operar un RTCC: infraestructura, software, integración de cámaras, capacitación y métricas clave.',
          readTime: '10 min',
          isNew: true,
        },
        {
          href: '/resources/ai-in-public-safety',
          category: 'Guía',
          title: 'Inteligencia Artificial en Seguridad Pública: Guía para Ciudades',
          excerpt: 'Cómo la IA está transformando la respuesta a emergencias, el despacho y la videovigilancia. Casos de uso reales, beneficios, limitaciones y qué buscar.',
          readTime: '8 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-cad-dispatch-software',
          category: 'Guía de Referencia',
          title: '¿Qué Es el Software CAD de Despacho?',
          excerpt: 'El software CAD gestiona la recepción de llamadas de emergencia, la clasificación de incidentes y el despacho de unidades. Cómo funciona y qué buscar en un sistema moderno.',
          readTime: '9 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-video-management-software',
          category: 'Guía de Referencia',
          title: '¿Qué Es el Software de Gestión de Video (VMS)?',
          excerpt: 'El software VMS agrega cámaras de cualquier fabricante, añade analítica de IA y se integra con despacho y GIS. Guía completa para agencias de seguridad pública.',
          readTime: '9 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-situational-awareness-software',
          category: 'Guía de Referencia',
          title: '¿Qué Es un Software de Conciencia Situacional?',
          excerpt: 'Un software de conciencia situacional agrega cámaras, sensores, despacho y GIS en un mapa operativo unificado. Cómo los centros de mando coordinan respuestas más rápido.',
          readTime: '9 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-gunshot-detection-software',
          category: 'Guía de Referencia',
          title: '¿Qué Es un Software de Detección de Disparos?',
          excerpt: 'Los sistemas de detección de disparos usan sensores acústicos para detectar disparos, triangular su ubicación y alertar a los centros de mando en segundos. Cómo funciona y cómo se integra.',
          readTime: '9 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-a-command-center',
          category: 'Guía de Referencia',
          title: '¿Qué Es un Centro de Mando? Guía C1–C5',
          excerpt: 'Un centro de mando (C2/C5) coordina videovigilancia, despacho, GIS y respuesta en campo. Clasificación C1 a C5, tecnologías y criterios de evaluación.',
          readTime: '10 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-a-real-time-crime-center',
          category: 'Guía de Referencia',
          title: '¿Qué Es un Centro de Crimen en Tiempo Real (RTCC)?',
          excerpt: 'Un RTCC integra videovigilancia en vivo, analítica de IA, LPR y despacho en un solo entorno de comando. Aprende cómo funciona y qué tecnologías necesita.',
          readTime: '10 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-emergency-management-software',
          category: 'Guía de Referencia',
          title: '¿Qué Es un Software de Gestión de Emergencias?',
          excerpt: 'Un software de gestión de emergencias coordina el ciclo completo del incidente: detección, despacho, coordinación en campo y resolución. Módulos, beneficios y criterios de evaluación.',
          readTime: '10 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-a-psap',
          category: 'Guía de Referencia',
          title: '¿Qué Es un PSAP?',
          excerpt: 'Un PSAP (Public Safety Answering Point) es la instalación donde se reciben las llamadas al 911 y se despachan las unidades de emergencia. Tecnología, NG911 y criterios de evaluación.',
          readTime: '10 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-emergency-dispatch-software',
          category: 'Guía de Referencia',
          title: '¿Qué Es un Software de Despacho de Emergencias?',
          excerpt: 'El software de despacho de emergencias gestiona la recepción de llamadas al 911, la clasificación del incidente y el despacho de unidades. Diferencia con CAD, NG911 y criterios de evaluación.',
          readTime: '10 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-lpr-license-plate-recognition',
          category: 'Guía de Referencia',
          title: '¿Qué Es el LPR / ALPR?',
          excerpt: 'El LPR (License Plate Recognition) captura placas vehiculares y las coteja contra bases de datos de alertas en tiempo real. Cómo funciona, LPR fijo vs móvil, precisión y casos de uso.',
          readTime: '9 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-video-analytics',
          category: 'Guía de Referencia',
          title: '¿Qué Es la Analítica de Video con IA?',
          excerpt: 'La analítica de video usa IA para detectar intrusiones, LPR, aglomeraciones, disparos y anomalías en cámaras sin monitoreo humano continuo. Edge vs servidor, precisión e integración en centros de mando.',
          readTime: '9 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-sensor-fusion',
          category: 'Guía de Referencia',
          title: '¿Qué Es la Fusión de Sensores?',
          excerpt: 'La fusión de sensores combina video, acústica, LPR, IoT, GPS y señales ciudadanas en una sola capa de inteligencia en tiempo real. Cómo funciona y por qué supera a los sensores aislados.',
          readTime: '9 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-incident-management-software',
          category: 'Guía de Referencia',
          title: '¿Qué Es un Software de Gestión de Incidentes?',
          excerpt: 'El software de gestión de incidentes rastrea, coordina y resuelve emergencias en tiempo real — conectando despacho, unidades de campo, video y mando. Cómo funciona y qué considerar.',
          readTime: '9 min',
          isNew: true,
        },
        {
          href: '/resources/c5-command-centers-mexico-2026',
          category: 'Guía México',
          title: 'Centros C5 en México: Guía de Tecnología 2026',
          excerpt: 'Qué es un C5, cómo está estructurado, el stack tecnológico completo y cómo las plataformas unificadas mejoran los tiempos de respuesta en municipios y estados de México.',
          readTime: '11 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-a-public-safety-platform',
          category: 'Guía de Referencia',
          title: '¿Qué Es una Plataforma de Seguridad Pública?',
          excerpt: 'Una plataforma de seguridad pública unifica despacho CAD, gestión de video, GIS y operaciones de campo en una sola interfaz operativa. Definición y componentes.',
          readTime: '8 min',
          isNew: false,
        },
        {
          href: '/resources/psim-vs-unified-platform',
          category: 'Comparación',
          title: 'PSIM vs Plataforma Unificada: ¿Cuál Es la Diferencia?',
          excerpt: 'PSIM integra alarmas de sistemas aislados. Las plataformas unificadas reemplazan los silos completamente. Comparativa de arquitecturas, costos y resultados.',
          readTime: '6 min',
          isNew: false,
        },
        {
          href: '/resources/how-c5-command-centers-work',
          category: 'Análisis Profundo',
          title: '¿Cómo Funcionan los Centros de Mando C5?',
          excerpt: 'Los centros C5 coordinan respuesta a emergencias, videovigilancia y tráfico en ciudades mexicanas. Arquitectura, tecnología y modelo operativo.',
          readTime: '7 min',
          isNew: false,
        },
        {
          href: '/resources/smart-city-platform-guide',
          category: 'Guía',
          title: 'Guía de Plataformas de Ciudad Inteligente',
          excerpt: 'Una plataforma de ciudad inteligente conecta sensores IoT, video, tráfico y servicios de emergencia. Guía para seleccionar e implementar la solución correcta.',
          readTime: '9 min',
          isNew: false,
        },
        {
          href: '/resources/public-safety-software-municipalities-mexico',
          category: 'Guía',
          title: 'Software de Seguridad Pública para Municipios en México',
          excerpt: 'Los municipios mexicanos necesitan software que integre operaciones C5, videovigilancia, despacho CAD y tráfico. Guía de selección con criterios clave.',
          readTime: '7 min',
          isNew: false,
        },
        {
          href: '/resources/video-analytics-use-cases',
          category: 'Guía',
          title: 'Casos de Uso de Analítica de Video para Centros de Mando',
          excerpt: '8 casos de uso de analítica de video para centros de mando: detección de intrusión, LPR, conteo de multitudes, anomalías conductuales, búsqueda forense e integración con despacho CAD.',
          readTime: '8 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-united-states',
          category: 'Guía de Mercado',
          title: 'Software de Seguridad Pública para EE.UU.: PSAP, RTCC y Centros de Mando',
          excerpt: 'Plataforma unificada para PSAPs, agencias de policía y centros de mando municipales en EE.UU. — CAD con soporte NG911, video analytics para RTCC y GIS bajo NIMS.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-canada',
          category: 'Guía de Mercado',
          title: 'Software de Seguridad Pública para Canadá: PSAP, NG911 y Coordinación Multiagencia',
          excerpt: 'Plataforma para PSAPs canadienses, RCMP, policía provincial y municipal — despacho CAD con soporte NG911/CRTC, video analytics para RTCC e interfaz bilingüe EN/FR.',
          readTime: '6 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-middle-east',
          category: 'Guía de Mercado',
          title: 'Software de Seguridad Pública para Medio Oriente: Smart City y Safe City',
          excerpt: 'Plataforma unificada para proyectos Smart City y Safe City en EAU, Arabia Saudita y Qatar — integración masiva de CCTV, analítica de IA para eventos masivos como el Hajj.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-united-kingdom',
          category: 'Guía de Mercado',
          title: 'Software de Seguridad Pública para el Reino Unido: Salas de Control 999 y Safe City',
          excerpt: 'Plataforma unificada para fuerzas policiales del Reino Unido, salas de control 999 y programas Safe City — despacho CAD con soporte NG999, CCTV con analítica de IA y cumplimiento UK GDPR.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-australia',
          category: 'Guía de Mercado',
          title: 'Software de Seguridad Pública para Australia: Triple Zero, Policía Estatal y Desastres',
          excerpt: 'Plataforma para fuerzas policiales estatales australianas, centros de comunicaciones Triple Zero y gestión de desastres naturales — despacho CAD con soporte NGEC, analítica de IA y cumplimiento ISM/ACSC.',
          readTime: '6 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-india',
          category: 'Guía de Mercado',
          title: 'Software de Seguridad Pública para India: Smart Cities, ICCC y Emergencias 112',
          excerpt: 'Plataforma unificada para más de 100 ICCC de la Misión Smart Cities de India y proyectos Safe City — despacho 112, analítica de video con IA, conciencia situacional GIS y localización de datos on-premises.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-germany',
          category: 'Guía de Mercado',
          title: 'Software de Seguridad Pública para Alemania: Leitstellen, BOS Digital y DSGVO',
          excerpt: 'Plataforma unificada para Leitstellen integrados y fuerzas policiales alemanas — despacho CAD 110/112 con soporte BOS Digital TETRA, analítica de video con IA y cumplimiento BSI IT-Grundschutz.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-france',
          category: 'Guía de Mercado',
          title: 'Software de Seguridad Pública para Francia: Police Nationale, Gendarmerie y RGPD',
          excerpt: 'Plataforma unificada para la Police Nationale, Gendarmerie y CSU franceses — despacho CAD 15/17/18 con soporte NexSIS, analítica de Vidéoprotection con IA y cumplimiento RGPD/CNIL.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-italy',
          category: 'Guía de Mercado',
          title: 'Software de Seguridad Pública para Italia: Polizia, Carabinieri, NUE 112 y GDPR',
          excerpt: 'Plataforma unificada para Polizia di Stato, Carabinieri y Polizia Locale — despacho CAD con soporte NUE 112/SOREU, analítica de CCTV con IA conforme al Garante Privacy y requisitos ACN.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-spain',
          category: 'Guía de Mercado',
          title: 'Software de Seguridad Pública para España: CNP, Guardia Civil, Mossos y ENS',
          excerpt: 'Plataforma unificada para CNP, Guardia Civil, Mossos d\'Esquadra y Policías Locales — despacho CAD 112/SUE, videovigilancia con analítica de IA conforme a la AEPD y cumplimiento ENS categoría ALTA.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-netherlands',
          category: 'Guía de Mercado',
          title: 'Software de Seguridad Pública para los Países Bajos: Politie, Meldkamer NL, C2000 y AVG',
          excerpt: 'Plataforma unificada para la Politie, Brandweer y Meldkamers — despacho CAD compatible con GMK/CAD 2.0, analítica de cameratoezicht con IA y cumplimiento AVG/WPG/BIO.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-saudi-arabia',
          category: 'Guía de Mercado',
          title: 'Software de Seguridad Pública para Arabia Saudita: MOI, 911 Unificado, NEOM, Hajj, PDPL y NCA',
          excerpt: 'Plataforma unificada para el MOI saudita, el sistema 911 y la Visión 2030 — despacho CAD 911 multiagencia, gestión de 2.5M peregrinos en el Hajj y cumplimiento PDPL/NCA ECC.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-poland',
          category: 'Guía de Mercado',
          title: 'Software de Seguridad Pública para Polonia: Policja, 112/CPR, PSP, RODO y KSC',
          excerpt: 'Plataforma unificada para Policja, 16 centros CPR de despacho 112, brigadas PSP y redes CCTV municipales — CAD multiagencia, cumplimiento RODO/UODO y ciberseguridad KSC/NIS2.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-turkey',
          category: 'Guía de Mercado',
          title: 'Software de Seguridad Pública para Türkiye: EGM/Jandarma, AFAD 112, MOBESE/KGYS, KVKK y BTK/USOM',
          excerpt: 'Plataforma unificada para la EGM y la Jandarma turcas, los 81 centros 112 del AFAD y las redes MOBESE — despacho CAD con coordinación sísmica/AFAD, gestión MOBESE/ANPR conforme a KVKK y cumplimiento BTK/USOM.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-austria',
          category: 'Guía de Mercado',
          title: 'Software de Seguridad Pública para Austria: Bundespolizei, BOS-Funk/Tetron TETRA, 9 Landespolizeidirektionen, DSGVO/DSB y NIS2/NISG',
          excerpt: 'Plataforma unificada para la Bundespolizei austriaca y las 9 Landespolizeidirektionen — despacho CAD integrado con BOS-Funk TETRA/Tetron, gestión de cámaras y ANPR conforme a DSGVO/DSB, y cumplimiento NIS2/NISG con procurement BBG/BVergG.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-portugal',
          category: 'Guía de Mercado',
          title: 'Software de Seguridad Pública para Portugal: PSP/GNR Modelo Dual, INEM/CODU 112, SIRESP TETRA y ANEPC/SIOPS',
          excerpt: 'Plataforma unificada para la PSP y la GNR de Portugal, los CODU del INEM y la ANEPC/SIOPS — despacho CAD dual con SIRESP TETRA, videovigilância/ANPR conforme a RGPD/CNPD y cumplimiento NIS2/CNCS.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-finland',
          category: 'Guía de Mercado',
          title: 'Software de Seguridad Pública para Finlandia: Poliisi 11 Distritos, Hätäkeskuslaitos 112, VIRVE TETRA, Pelastustoimi y Tietosuojalaki',
          excerpt: 'Plataforma unificada para la Poliisi, los 6 centros hätäkeskus del Hätäkeskuslaitos y el Pelastustoimi — despacho CAD 112 con VIRVE TETRA/2.0, cámaras/ANPR conforme a Tietosuojalaki y cumplimiento NIS2/Kyberturvallisuuskeskus.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-denmark',
          category: 'Guía de Mercado',
          title: 'Software de Seguridad Pública para Dinamarca: Politiet 12 Distritos, SINE TETRA, Alarmcentralen, Beredskabsstyrelsen y Datatilsynet',
          excerpt: 'Plataforma unificada para los 12 distritos de la Politiet danesa, las Alarmcentraler y el Beredskabsstyrelsen — despacho CAD con red SINE TETRA, cámaras/ANPR conforme a Databeskyttelsesloven y cumplimiento NIS2/CFCS.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-norway',
          category: 'Guía de Mercado',
          title: 'Software de Seguridad Pública para Noruega: Politiet 12 Distritos, Nødnett TETRA, AMK/110, DSB/NSM y Datatilsynet',
          excerpt: 'Plataforma unificada para los 12 distritos de la Politiet, centros AMK/110/112 y el DSB — despacho CAD integrado con Nødnett TETRA, cámaras/ANPR conforme a personopplysningsloven y cumplimiento NIS2/NSM.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-belgium',
          category: 'Guía de Mercado',
          title: 'Software de Seguridad Pública para Bélgica: Policía Federal, 188 Zones de Police, ASTRID 112, Camerawet y CCB/NIS2',
          excerpt: 'Plataforma unificada para la Policía Federal belga, 188 zonas de policía local y centros COS/OHC — despacho CAD 112/101, ANPR y videovigilancia conforme a la Camerawet, y cumplimiento RGPD/GBA y NIS2/CCB.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-uae',
          category: 'Guía de Mercado',
          title: 'Software de Seguridad Pública para los EAU: Dubai Police IPOC, Safe City 50K+ Cámaras, PDPL y NESA',
          excerpt: 'Plataforma unificada para la Policía de Dubai, la Policía de Abu Dhabi y los proyectos Safe City de los EAU — despacho CAD IPOC-integrado, 50,000+ cámaras con IA y cumplimiento PDPL/NESA.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-sweden',
          category: 'Guía de Mercado',
          title: 'Software de Seguridad Pública para Suecia: Polisen, SOS Alarm 112, MSB, RAKEL, RGPD y NIS2',
          excerpt: 'Plataforma unificada para Polisen, SOS Alarm y los räddningstjänst suecos — despacho CAD 112 compatible con ZENIT, analítica de cámaras RGPD/IMY y cumplimiento NIS2.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-south-korea',
          category: 'Guía de Mercado',
          title: 'Software de Seguridad Pública para Corea del Sur: KNP, 112 Unificado, Smart Safety City, PIPA y CSAP',
          excerpt: 'Plataforma unificada para la KNP, el NFS y los Centros de Control Integrado de Corea del Sur — despacho CAD 112 unificado, 60,000+ CCTV con analítica IA y cumplimiento PIPA/CSAP.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-japan',
          category: 'Guía de Mercado',
          title: 'Software de Seguridad Pública para Japón: NPA, MPD, J-Alert, APPI y Society 5.0',
          excerpt: 'Plataforma unificada para la NPA, el MPD y las 47 policías prefecturales de Japón — despacho CAD 110/119, integración J-Alert, gestión de cámaras con IA y cumplimiento APPI/ISMAP.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-singapore',
          category: 'Guía de Mercado',
          title: 'Software de Seguridad Pública para Singapur: SPF, SCDF, Smart Nation y PDPA',
          excerpt: 'Plataforma unificada para la Singapore Police Force, SCDF y el ecosistema Smart Nation — despacho CAD 999/995, gestión de 90,000+ cámaras con IA y cumplimiento PDPA/CSA.',
          readTime: '7 min',
          isNew: true,
        },
      ]
    : [
        {
          href: '/resources/end-of-siloed-response',
          category: 'Industry Brief',
          title: 'The End of Siloed Response',
          excerpt: 'Why public safety agencies are still operating fragmented systems — and how unified coordination cuts response time by 42%. Download the Q2 2026 industry brief.',
          readTime: '15 min',
          isNew: true,
        },
        {
          href: '/resources/rtcc-setup-guide',
          category: 'Guide',
          title: 'Real-Time Crime Center (RTCC) Setup Guide',
          excerpt: 'Step-by-step guide to planning, building, and operating an RTCC: infrastructure, software, camera integration, training, and key metrics.',
          readTime: '10 min',
          isNew: true,
        },
        {
          href: '/resources/ai-in-public-safety',
          category: 'Guide',
          title: 'AI in Public Safety: A Guide for Cities',
          excerpt: 'How AI is transforming emergency response, dispatch, and video surveillance. Real use cases, benefits, limitations, and what to look for in a platform.',
          readTime: '8 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-cad-dispatch-software',
          category: 'Reference Guide',
          title: 'What Is CAD Dispatch Software?',
          excerpt: 'CAD dispatch software manages emergency call intake, incident classification, and unit dispatch. How it works step by step and what to look for in a modern system.',
          readTime: '9 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-video-management-software',
          category: 'Reference Guide',
          title: 'What Is Video Management Software (VMS)?',
          excerpt: 'VMS software aggregates cameras from any manufacturer, adds AI analytics, and integrates with CAD dispatch and GIS. Complete guide for public safety agencies.',
          readTime: '9 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-situational-awareness-software',
          category: 'Reference Guide',
          title: 'What Is Situational Awareness Software?',
          excerpt: 'Situational awareness software aggregates cameras, sensors, dispatch, and GIS into a unified operational map. How command centers use it to coordinate response faster.',
          readTime: '9 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-gunshot-detection-software',
          category: 'Reference Guide',
          title: 'What Is Gunshot Detection Software?',
          excerpt: 'Gunshot detection systems use acoustic sensors to detect gunfire, triangulate its location, and alert command centers in seconds. How it works and how it integrates.',
          readTime: '9 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-a-command-center',
          category: 'Reference Guide',
          title: 'What Is a Command Center? C1–C5 Guide',
          excerpt: 'A command center (C2/C5) coordinates video surveillance, dispatch, GIS, and field response. C1 through C5 classification, technologies, and evaluation criteria.',
          readTime: '10 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-a-real-time-crime-center',
          category: 'Reference Guide',
          title: 'What Is a Real-Time Crime Center (RTCC)?',
          excerpt: 'An RTCC integrates live video surveillance, AI analytics, LPR, and dispatch into a single command environment. How it works and what technologies it requires.',
          readTime: '10 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-emergency-management-software',
          category: 'Reference Guide',
          title: 'What Is Emergency Management Software?',
          excerpt: 'Emergency management software coordinates the full incident lifecycle: detection, dispatch, field coordination, and resolution. Modules, benefits, and evaluation criteria.',
          readTime: '10 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-a-psap',
          category: 'Reference Guide',
          title: 'What Is a PSAP?',
          excerpt: 'A PSAP (Public Safety Answering Point) is where 911 calls are received and emergency units dispatched. Technology stack, NG911 evolution, and evaluation criteria.',
          readTime: '10 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-emergency-dispatch-software',
          category: 'Reference Guide',
          title: 'What Is Emergency Dispatch Software?',
          excerpt: 'Emergency dispatch software manages 911 call intake, incident classification, and response unit assignment. How it works, difference from CAD, NG911, and evaluation criteria.',
          readTime: '10 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-lpr-license-plate-recognition',
          category: 'Reference Guide',
          title: 'What Is LPR / ALPR?',
          excerpt: 'License Plate Recognition (LPR/ALPR) captures vehicle plates and cross-references them against alert databases in real time. How it works, fixed vs mobile, accuracy, and public safety use cases.',
          readTime: '9 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-video-analytics',
          category: 'Reference Guide',
          title: 'What Is Video Analytics?',
          excerpt: 'Video analytics uses AI to detect intrusions, LPR events, crowds, gunshots, and anomalies in surveillance cameras without continuous human monitoring. Edge vs server, accuracy, and command center integration.',
          readTime: '9 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-sensor-fusion',
          category: 'Reference Guide',
          title: 'What Is Sensor Fusion?',
          excerpt: 'Sensor fusion combines video, acoustic, LPR, IoT, GPS, and citizen signals into a single real-time intelligence layer for command centers. How it works and why it outperforms isolated sensors.',
          readTime: '9 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-incident-management-software',
          category: 'Reference Guide',
          title: 'What Is Incident Management Software?',
          excerpt: 'Incident management software tracks, coordinates, and resolves emergencies in real time — connecting dispatch, field units, video, and command. How it works and what to look for.',
          readTime: '9 min',
          isNew: true,
        },
        {
          href: '/resources/c5-command-centers-mexico-2026',
          category: 'Mexico Guide',
          title: 'C5 Command Centers in Mexico: 2026 Technology Guide',
          excerpt: 'What a C5 is, how it is structured, the complete technology stack, and how unified platforms improve response times in Mexican municipalities and states.',
          readTime: '11 min',
          isNew: true,
        },
        {
          href: '/resources/what-is-a-public-safety-platform',
          category: 'Reference Guide',
          title: 'What Is a Public Safety Platform?',
          excerpt: 'A public safety platform unifies CAD dispatch, video management, GIS, and field operations into a single operational interface. Definition and core components.',
          readTime: '8 min',
          isNew: false,
        },
        {
          href: '/resources/psim-vs-unified-platform',
          category: 'Comparison',
          title: 'PSIM vs Unified Platform — What\'s the Difference?',
          excerpt: 'PSIM integrates alarms from siloed systems. Unified platforms replace silos entirely. Compare architectures, costs, and real-world outcomes.',
          readTime: '6 min',
          isNew: false,
        },
        {
          href: '/resources/how-c5-command-centers-work',
          category: 'Deep Dive',
          title: 'How C5 Command Centers Work',
          excerpt: 'C5 command centers coordinate emergency response, video surveillance, and traffic across Mexican cities. Architecture, technology stack, and operational model.',
          readTime: '7 min',
          isNew: false,
        },
        {
          href: '/resources/smart-city-platform-guide',
          category: 'Guide',
          title: 'Smart City Platform Guide',
          excerpt: 'A smart city platform connects IoT sensors, video, traffic systems, and emergency services into one operational view. How to select and deploy the right platform.',
          readTime: '9 min',
          isNew: false,
        },
        {
          href: '/resources/public-safety-software-municipalities-mexico',
          category: 'Guide',
          title: 'Public Safety Software for Municipalities in Mexico',
          excerpt: 'Mexican municipalities need software that integrates C5 operations, video surveillance, CAD dispatch, and traffic management. Selection guide with key criteria.',
          readTime: '7 min',
          isNew: false,
        },
        {
          href: '/resources/911-call-center-software-guide',
          category: 'Guide',
          title: '911 Call Center Software Guide',
          excerpt: 'Complete guide to 911 call center software — call intake, CAD integration, NG911 compliance, and AI-assisted dispatch. How modern PSAPs select and deploy emergency technology.',
          readTime: '8 min',
          isNew: true,
        },
        {
          href: '/resources/best-public-safety-software',
          category: 'Comparison',
          title: 'Best Public Safety Software Platforms in 2026',
          excerpt: 'Comprehensive comparison of the best public safety software platforms for municipalities and government agencies — CAD dispatch, video management, GIS, and unified command center solutions.',
          readTime: '9 min',
          isNew: true,
        },
        {
          href: '/resources/build-rtcc-implementation-guide',
          category: 'Guide',
          title: 'How to Build a Real-Time Crime Center',
          excerpt: 'Step-by-step implementation guide for building an RTCC — technology requirements, camera network design, data integration, staffing, and operational best practices.',
          readTime: '10 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-argentina',
          category: 'Guide',
          title: 'Public Safety Software for Argentina',
          excerpt: 'Public safety technology for Argentine provinces and municipalities — Buenos Aires CMU integration, unified 911/101/107 dispatch, PFA/provincial coordination, and GIS on one platform.',
          readTime: '6 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-brazil',
          category: 'Guide',
          title: 'Public Safety Software for Brazil',
          excerpt: 'Unified public safety platform for Brazilian states and CIOPS centers — video, 190/192/193 dispatch, GIS, and incident management across 214 million citizens.',
          readTime: '6 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-chile',
          category: 'Guide',
          title: 'Public Safety Software for Chile',
          excerpt: 'Public safety technology for Chilean municipalities — unified dispatch (133/131/132), FNDR CCTV integration, Carabineros coordination, and GIS on one platform.',
          readTime: '6 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-colombia',
          category: 'Guide',
          title: 'Public Safety Software for Colombia',
          excerpt: 'Public safety technology for Colombian cities and municipalities — C5 command centers, unified dispatch, video surveillance, and GIS for modern security operations.',
          readTime: '6 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-peru',
          category: 'Guide',
          title: 'Public Safety Software for Peru',
          excerpt: 'Public safety technology for Peruvian cities and municipalities — C5 command centers, unified dispatch, video surveillance, and GIS for modern security operations.',
          readTime: '6 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-small-cities',
          category: 'Guide',
          title: 'Public Safety Software for Small Cities & Municipalities',
          excerpt: 'Affordable, scalable public safety platforms designed for small cities — unified video, dispatch, and GIS without enterprise price tags.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/video-analytics-use-cases',
          category: 'Guide',
          title: 'Video Analytics Use Cases for Public Safety Command Centers',
          excerpt: '8 video analytics use cases for command centers: perimeter intrusion, LPR, crowd counting, behavioral anomalies, forensic search, and CAD dispatch integration.',
          readTime: '8 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-united-states',
          category: 'Market Guide',
          title: 'Public Safety Software for US Cities and Agencies',
          excerpt: 'Unified platform for US PSAPs, law enforcement, and command centers — NG911-compatible CAD dispatch, RTCC video analytics, and multi-agency GIS coordination under NIMS.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-canada',
          category: 'Market Guide',
          title: 'Public Safety Software for Canada',
          excerpt: 'Platform for Canadian PSAPs, RCMP, provincial, and municipal police — NG911/CRTC-compatible CAD dispatch, video analytics for RTCCs, and bilingual EN/FR interface.',
          readTime: '6 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-middle-east',
          category: 'Market Guide',
          title: 'Public Safety Software for the Middle East',
          excerpt: 'Unified platform for Smart City and Safe City projects in UAE, Saudi Arabia, and Qatar — large-scale CCTV integration, AI analytics for mass events including Hajj.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-united-kingdom',
          category: 'Market Guide',
          title: 'Public Safety Software for the United Kingdom',
          excerpt: 'Unified platform for UK police forces, 999 control rooms, and Safe City programmes — CAD dispatch with NG999 support, CCTV with AI analytics, and UK GDPR compliance.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-australia',
          category: 'Market Guide',
          title: 'Public Safety Software for Australia',
          excerpt: 'Platform for Australian state police forces, Triple Zero ECCs, and natural disaster management — CAD dispatch with NGEC support, AI video analytics, and ACSC ISM compliance.',
          readTime: '6 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-india',
          category: 'Market Guide',
          title: 'Public Safety Software for India: Smart Cities, ICCC & 112 Emergency',
          excerpt: 'Unified platform for India\'s 100+ Smart City ICCCs and Safe City projects — 112 dispatch, AI video analytics, GIS situational awareness, and on-premises data localisation.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-germany',
          category: 'Market Guide',
          title: 'Public Safety Software for Germany: Leitstellen, BOS Digital & DSGVO',
          excerpt: 'Unified platform for German Integrated Leitstellen and police forces — 110/112 CAD dispatch with BOS Digital TETRA support, AI video analytics, and BSI IT-Grundschutz compliance.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-france',
          category: 'Market Guide',
          title: 'Public Safety Software for France: Police Nationale, Gendarmerie & RGPD',
          excerpt: 'Unified platform for Police Nationale, Gendarmerie, and French CSU centres — 15/17/18 CAD dispatch with NexSIS support, AI Vidéoprotection analytics, and RGPD/CNIL compliance.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-italy',
          category: 'Market Guide',
          title: 'Public Safety Software for Italy: Polizia, Carabinieri, NUE 112 & GDPR',
          excerpt: 'Unified platform for Polizia di Stato, Carabinieri, and Polizia Locale — CAD dispatch with NUE 112/SOREU support, AI CCTV analytics compliant with Garante Privacy, and ACN cybersecurity requirements.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-spain',
          category: 'Market Guide',
          title: 'Public Safety Software for Spain: CNP, Guardia Civil, Mossos & ENS',
          excerpt: "Unified platform for CNP, Guardia Civil, Mossos d\'Esquadra, and Policías Locales — 112/SUE CAD dispatch, AI video surveillance with AEPD compliance, and HIGH-category ENS/CCN-STIC certification.",
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-netherlands',
          category: 'Market Guide',
          title: 'Public Safety Software for the Netherlands: Politie, Meldkamer NL, C2000 & AVG',
          excerpt: 'Unified platform for Dutch Politie, Brandweer, and Meldkamers — CAD dispatch compatible with GMK/CAD 2.0, AI cameratoezicht analytics, and AVG/WPG/BIO compliance.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-saudi-arabia',
          category: 'Market Guide',
          title: 'Public Safety Software for Saudi Arabia: MOI, Unified 911, NEOM, Hajj, PDPL & NCA',
          excerpt: "Unified platform for Saudi MOI, 911 system, and Vision 2030 megaprojects — multi-agency 911 CAD dispatch, 2.5M Hajj crowd management, and PDPL/NCA ECC compliance.",
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-poland',
          category: 'Market Guide',
          title: 'Public Safety Software for Poland: Policja, 112/CPR, PSP, RODO & KSC',
          excerpt: "Unified platform for Policja, 16 CPR dispatch centres, PSP fire brigades, and municipal CCTV networks — multi-agency CAD, RODO/UODO compliance, and KSC/NIS2 cybersecurity.",
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-turkey',
          category: 'Market Guide',
          title: 'Public Safety Software for Türkiye: EGM/Jandarma, AFAD 112, MOBESE/KGYS, KVKK & BTK/USOM',
          excerpt: "Unified platform for Turkish EGM and Jandarma, 81 AFAD 112 centres, and municipal MOBESE networks — integrated CAD dispatch with seismic/AFAD coordination, KVKK-compliant MOBESE and ANPR management, and BTK/USOM cybersecurity compliance.",
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-austria',
          category: 'Market Guide',
          title: 'Public Safety Software for Austria: Bundespolizei, BOS-Funk/Tetron TETRA, 9 Landespolizeidirektionen, DSGVO/DSB & NIS2/NISG',
          excerpt: 'Unified platform for Austrian Bundespolizei and 9 Landespolizeidirektionen — integrated CAD dispatch with BOS-Funk TETRA/Tetron, camera and ANPR management compliant with DSGVO/DSB, and NIS2/NISG compliance with BBG/BVergG procurement.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-portugal',
          category: 'Market Guide',
          title: 'Public Safety Software for Portugal: PSP/GNR Dual Model, INEM/CODU 112, SIRESP TETRA & ANEPC/SIOPS',
          excerpt: "Unified platform for Portugal's PSP and GNR, INEM CODU centres, and ANEPC/SIOPS — dual-force CAD dispatch with SIRESP TETRA, GDPR/CNPD-compliant urban surveillance and ANPR, and NIS2/CNCS compliance.",
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-finland',
          category: 'Market Guide',
          title: "Public Safety Software for Finland: Poliisi 11 Districts, Hätäkeskuslaitos 112, VIRVE TETRA, Pelastustoimi & Tietosuojalaki",
          excerpt: "Unified platform for Finnish Poliisi, 6 Hätäkeskuslaitos hätäkeskus centres, and Pelastustoimi — integrated 112 CAD dispatch with VIRVE TETRA/VIRVE 2.0, Tietosuojalaki/Tietosuojavaltuutettu-compliant camera management, and NIS2/Kyberturvallisuuskeskus compliance.",
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-denmark',
          category: 'Market Guide',
          title: 'Public Safety Software for Denmark: Politiet 12 Districts, SINE TETRA, Alarmcentralen, Beredskabsstyrelsen & Datatilsynet',
          excerpt: "Unified platform for Denmark's 12 Politiet districts, Alarmcentraler, and Beredskabsstyrelsen — integrated CAD dispatch with SINE TETRA, Databeskyttelsesloven/Datatilsynet-compliant camera/ANPR management, and NIS2/CFCS compliance.",
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-norway',
          category: 'Market Guide',
          title: 'Public Safety Software for Norway: Politiet 12 Districts, Nødnett TETRA, AMK/110, DSB/NSM & Datatilsynet',
          excerpt: "Unified platform for Norway's 12 Politiet districts, AMK/110/112 centres, and DSB — integrated CAD dispatch with Nødnett TETRA, Datatilsynet-compliant camera/ANPR management, and NIS2/NSM compliance.",
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-belgium',
          category: 'Market Guide',
          title: 'Public Safety Software for Belgium: Federal Police, 188 Zones de Police, ASTRID 112, Camerawet & CCB/NIS2',
          excerpt: "Unified platform for Belgian Federal Police, 188 local police zones, and COS/OHC centres — integrated 112/101 CAD dispatch, Camerawet-compliant ANPR and urban surveillance, and GDPR/GBA and NIS2/CCB compliance.",
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-uae',
          category: 'Market Guide',
          title: 'Public Safety Software for the UAE: Dubai Police IPOC, Safe City 50K+ Cameras, PDPL & NESA',
          excerpt: "Unified platform for Dubai Police, Abu Dhabi Police, and UAE Safe City projects — IPOC-integrated CAD dispatch, 50,000+ AI cameras, and PDPL/NESA compliance with UAE data residency.",
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-sweden',
          category: 'Market Guide',
          title: 'Public Safety Software for Sweden: Polisen, SOS Alarm 112, MSB, RAKEL, GDPR & NIS2',
          excerpt: "Unified platform for Polisen, SOS Alarm, and Swedish räddningstjänst — ZENIT-compatible 112 CAD dispatch, GDPR/IMY camera analytics, and NIS2 compliance.",
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-south-korea',
          category: 'Market Guide',
          title: "Public Safety Software for South Korea: KNP, Unified 112, Smart Safety City, PIPA & CSAP",
          excerpt: "Unified platform for South Korea's KNP, NFS, and Integrated Control Centres — 112 CAD dispatch, 60,000+ CCTV AI analytics, and PIPA/CSAP compliance.",
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-japan',
          category: 'Market Guide',
          title: 'Public Safety Software for Japan: NPA, MPD, J-Alert, APPI & Society 5.0',
          excerpt: 'Unified platform for Japan\'s NPA, MPD, and 47 prefectural police forces — 110/119 CAD dispatch, J-Alert integration, AI camera management, and APPI/ISMAP compliance.',
          readTime: '7 min',
          isNew: true,
        },
        {
          href: '/resources/public-safety-software-singapore',
          category: 'Market Guide',
          title: 'Public Safety Software for Singapore: SPF, SCDF, Smart Nation & PDPA',
          excerpt: 'Unified platform for Singapore Police Force, SCDF, and the Smart Nation ecosystem — 999/995 CAD dispatch, 90,000+ AI camera management, and PDPA/CSA compliance.',
          readTime: '7 min',
          isNew: true,
        },
      ]

  return (
    <>
      <Nav />

      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <section style={{ padding: '64px 32px 56px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.28em', color: 'var(--cyan)', marginBottom: '14px' }}>
              {es ? 'Biblioteca de Recursos' : 'Resource Library'}
            </p>
            <h1 style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 800,
              fontFamily: 'Barlow Condensed, sans-serif',
              textTransform: 'uppercase',
              lineHeight: 1.05,
              marginBottom: '20px',
            }}>
              {es ? 'Recursos y Guías' : 'Resources & Guides'}
            </h1>
            <p style={{ fontSize: '17px', fontWeight: 300, color: 'var(--dim)', lineHeight: 1.7, maxWidth: '600px' }}>
              {es
                ? 'Guías técnicas, comparativas y análisis profundos para ayudar a directores de seguridad pública y funcionarios municipales a tomar decisiones informadas sobre tecnología de seguridad.'
                : 'Technical guides, comparisons, and deep dives to help public safety directors and municipal officials make informed decisions about safety technology.'}
            </p>
          </div>
        </section>

        {/* ── ARTICLE GRID ── */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '56px 32px 80px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            }} className="resources-grid">
              {articles.map((article, i) => (
                <Link
                  key={i}
                  href={article.href}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#0b1628',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    padding: '28px 24px',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'border-color 0.2s, transform 0.2s',
                    position: 'relative',
                  }}
                >
                  {article.isNew && (
                    <span style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      fontSize: '9px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      background: ACCENT,
                      color: '#fff',
                      padding: '3px 8px',
                      borderRadius: '4px',
                    }}>
                      {es ? 'Nuevo' : 'New'}
                    </span>
                  )}
                  <p style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: 'var(--cyan)',
                    marginBottom: '12px',
                  }}>
                    {article.category}
                  </p>
                  <h2 style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 700,
                    fontSize: '20px',
                    textTransform: 'uppercase',
                    lineHeight: 1.2,
                    marginBottom: '12px',
                    color: 'var(--white)',
                    flex: 1,
                  }}>
                    {article.title}
                  </h2>
                  <p style={{
                    fontSize: '13px',
                    fontWeight: 300,
                    color: 'var(--dim)',
                    lineHeight: 1.7,
                    marginBottom: '20px',
                  }}>
                    {article.excerpt}
                  </p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 'auto',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border)',
                  }}>
                    <span style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.05em' }}>
                      {article.readTime} {es ? 'de lectura' : 'read'}
                    </span>
                    <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          es={es}
          h2={
            es
              ? 'Descubre Cómo KabatOne Protege tu Ciudad'
              : 'See How KabatOne Protects Your City'
          }
          subtitle={
            es
              ? 'KabatOne protege a más de 73 millones de ciudadanos en más de 40 ciudades. Solicita una demostración con datos reales de ciudad.'
              : 'KabatOne protects over 73 million citizens across 40+ cities. Request a live demo with real city data.'
          }
        />

        <Footer es={es} />

        <style>{`
          @media (max-width: 900px) {
            .resources-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 580px) {
            .resources-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </>
  )
}
