/* K-Video solution-page content — ported verbatim from the Claude Design
   project "Kabat One Website" (home/sol-kvideo.jsx), whose own header notes
   the copy was lifted from the live /k-video page.

   Differs from the other two products: five benefits rather than four, no
   picture-in-picture hero video (the hero image is already a video wall), an
   "AI PERFORMANCE" metrics panel above the integrations, and four integration
   cards rather than six. */

import { type SolutionContent, S, SL } from './solution-content'

const KVIDEO: SolutionContent = {
  key: 'video',
  name: 'K-Video',
  /* The design used var(--k-video); resolved to the K-Video accent already
     used by the Solutions accordion. accentInk is the design's own value. */
  accent: '#22b8d4',
  accentInk: '#7e22ce',
  eyebrow: S('VIDEO INTELLIGENCE · K-VIDEO', 'VIDEO INTELIGENTE · K-VIDEO'),
  h1a: S('AI video analytics and VMS', 'Software VMS y analítica de video'),
  h1b: S('software for public safety.', 'con IA para seguridad pública.'),
  sub: S('Scalable cloud and on-premises video management powered by AI-driven analytics — enabling real-time monitoring, forensic search, and automated threat detection across thousands of cameras.',
    'Agrega todas las cámaras en una vista unificada y con capacidad de búsqueda. K-Video añade analítica con IA para que encuentres lo que importa en segundos, no horas.'),
  /* Purpose-built three-panel composition (v2.313): live video wall centre
     stage with the AI-detection card overlaid on the focused feed, detections
     feed left, AI performance right. The detection card, chips and stats the
     hero used to overlay are all inside the artwork now, so heroEvent/chips
     are gone — see sol-kdispatch for the same pattern. */
  heroImg: '/images/modules/hero-k-video.webp',
  heroAlt: S('K-Video wall showing multiple live camera feeds with AI detections',
    'Videowall de K-Video con múltiples cámaras en vivo y detecciones de IA'),
  heroBare: true,
  heroLight: true,
  consoleTitle: S('K-VIDEO · LIVE WALL', 'K-VIDEO · MURO EN VIVO'),
  stats: [
    { v: '1,204+', l: S('Active cameras', 'Cámaras activas') },
    { v: '99.9%', l: S('Uptime', 'Disponibilidad') },
    { v: '15+', l: S('AI models', 'Modelos de IA') },
  ],

  coreLabel: S('BUILT ON THE UNIFIED PLATFORM', 'CONSTRUIDO SOBRE LA PLATAFORMA UNIFICADA'),
  core: SL(['Video / VMS', 'AI engine', 'GIS', 'Events', 'Evidence', 'Integrations', 'Mobile', 'Analytics'],
    ['Video / VMS', 'Motor de IA', 'GIS', 'Eventos', 'Evidencia', 'Integraciones', 'Móvil', 'Analítica']),

  benefitsEyebrow: S('WHY K-VIDEO', 'POR QUÉ K-VIDEO'),
  benefitsH2a: S('Smart, secure and connected', 'Videovigilancia inteligente'),
  benefitsH2b: S('video — powered by AI.', 'para seguridad pública.'),
  benefits: [
    {
      icon: 'camera', t: S('Real-time video monitoring', 'Monitoreo de video en tiempo real'),
      d: S('Instant access to live feeds from thousands of IP cameras, body cams, and drone streams on a single platform.',
        'Acceso instantáneo a feeds en vivo de miles de cámaras IP, body cams y transmisiones de drones en una sola plataforma.'),
    },
    {
      icon: 'brain', t: S('Advanced AI analytics', 'Analítica avanzada con IA'),
      d: S('Facial recognition, license plate recognition, anomaly detection, and behavioral analysis — all automated.',
        'Reconocimiento facial, reconocimiento de placas, detección de anomalías y análisis de comportamiento — todo automatizado.'),
    },
    {
      icon: 'link', t: S('Seamless integrations', 'Integraciones perfectas'),
      d: S('Connects with major VMS platforms, public safety systems, and third-party analytics.',
        'Se conecta con las principales plataformas VMS, sistemas de seguridad pública y analítica de terceros.'),
    },
    {
      icon: 'scale', t: S('Highly scalable & redundant', 'Altamente escalable y redundante'),
      d: S('Microservices architecture handles thousands of cameras with 99.9% uptime and automatic failover.',
        'Arquitectura de microservicios que maneja miles de cámaras con 99.9% de disponibilidad y conmutación automática por fallo.'),
    },
    {
      icon: 'shield', t: S('Security & compliance', 'Seguridad y cumplimiento'),
      d: S('End-to-end encryption, multi-tenant support, and full audit trails for forensic investigations.',
        'Cifrado de extremo a extremo, soporte multiinquilino y auditorías completas para investigaciones forenses.'),
    },
  ],

  featuresEyebrow: S('CAPABILITIES', 'CAPACIDADES'),
  featuresH2a: S('A complete cloud video management', 'Solución completa de VMS en la nube'),
  featuresH2b: S('and AI analytics solution.', 'con analítica IA.'),
  features: [
    {
      img: '/images/modules/video-wall.webp',
      alt: S('Unified video wall combining live feeds from thousands of cameras',
        'Muro de video unificado combinando señales en vivo de miles de cámaras'),
      t: S('Real-time monitoring at scale', 'Monitoreo en tiempo real a escala'),
      d: S('Live feeds from IP cameras, body cams, and drones appear on one wall, with multiple streaming protocols supported natively.',
        'Señales en vivo de cámaras IP, body cams y drones aparecen en un solo muro, con múltiples protocolos de streaming soportados de forma nativa.'),
      pts: SL(['Thousands of cameras on one platform', 'HLS, WebRTC, RTMP, RTSP support', 'Cloud or on-premises storage'],
        ['Miles de cámaras en una plataforma', 'Soporte HLS, WebRTC, RTMP, RTSP', 'Almacenamiento en nube o local']),
    },
    {
      img: '/images/modules/ai-video-detection.webp',
      alt: S('AI engine detecting vehicles, plates, and anomalies across camera feeds',
        'Motor de IA detectando vehículos, placas y anomalías en las señales'),
      t: S('AI detection & analytics', 'Detección y analítica con IA'),
      d: S('Analytics run continuously across the network — facial and plate recognition, anomaly detection, and behavioral analysis without an operator watching every feed.',
        'La analítica corre continuamente en toda la red — reconocimiento facial y de placas, detección de anomalías y análisis de comportamiento sin que un operador vigile cada señal.'),
      pts: SL(['Facial and license plate recognition', 'Anomaly and behavioral detection', 'Automated motion & intrusion alerts'],
        ['Reconocimiento facial y de placas', 'Detección de anomalías y comportamiento', 'Alertas automáticas de movimiento e intrusión']),
    },
    {
      img: '/images/modules/forensic-search.webp',
      alt: S('Forensic search retrieving relevant footage across the camera network',
        'Búsqueda forense recuperando video relevante en la red de cámaras'),
      t: S('Forensic search & investigations', 'Búsqueda forense e investigaciones'),
      d: S('Search the whole network by plate, object, or behaviour instead of scrubbing footage — find what matters in seconds, not hours.',
        'Busca en toda la red por placa, objeto o comportamiento en vez de revisar grabaciones — encuentra lo que importa en segundos, no horas.'),
      pts: SL(['Search across the camera network', 'Case building and evidence export', 'Full audit trails for investigations'],
        ['Búsqueda en toda la red', 'Construcción de casos y exportación', 'Auditoría completa para investigaciones']),
    },
    {
      img: '/images/modules/cameras-on-map.webp',
      alt: S('Map showing camera locations and the nearest feeds to an incident',
        'Mapa con ubicación de cámaras y las señales más cercanas a un incidente'),
      t: S('Cameras on the map', 'Cámaras en el mapa'),
      d: S('Every camera sits in geographic context, so the nearest useful feed to an incident is one click away.',
        'Cada cámara está en contexto geográfico, así la señal útil más cercana a un incidente está a un clic.'),
      pts: SL(['Camera layer on operational GIS', 'Nearest-camera to incident', 'Coverage and blind-spot view'],
        ['Capa de cámaras en el GIS operativo', 'Cámara más cercana al incidente', 'Vista de cobertura y puntos ciegos']),
    },
    {
      img: '/images/modules/video-in-dispatch.webp',
      alt: S('Live video surfaced directly inside CAD and dispatch workflows',
        'Video en vivo disponible dentro de los flujos de CAD y despacho'),
      t: S('Video in dispatch & command', 'Video en despacho y mando'),
      d: S('Feeds are pushed straight to CAD, RTCC, and dispatch platforms, so the call-taker and the responder see the same scene.',
        'Las señales se envían directo a plataformas CAD, RTCC y de despacho, para que el operador y la unidad vean la misma escena.'),
      pts: SL(['Live video into CAD and RTCC', 'Feeds attached to the incident', 'Context before responders arrive'],
        ['Video en vivo hacia CAD y RTCC', 'Señales adjuntas al incidente', 'Contexto antes de que lleguen las unidades']),
    },
    {
      img: '/images/modules/integrations-topology.webp',
      alt: S('Integration layer connecting existing VMS platforms and IP camera systems',
        'Capa de integración conectando plataformas VMS y sistemas de cámaras IP existentes'),
      t: S('Works with your existing VMS', 'Funciona con tu VMS existente'),
      d: S('K-Video sits alongside the platform you already run rather than replacing it, with flexible access control for multi-tenant environments.',
        'K-Video convive con la plataforma que ya operas en vez de reemplazarla, con control de acceso flexible para entornos multiinquilino.'),
      pts: SL(['Compatible with leading VMS platforms', 'Multi-tenant access control', 'No rip-and-replace required'],
        ['Compatible con las principales plataformas VMS', 'Control de acceso multiinquilino', 'Sin reemplazar infraestructura']),
    },
  ],

  perfLabel: S('AI PERFORMANCE', 'RENDIMIENTO DE IA'),
  perfBars: [
    { l: S('Face recognition accuracy', 'Precisión de reconocimiento facial'), v: '94%', w: '94%' },
    { l: S('LPR read rate', 'Tasa de lectura LPR'), v: '99%', w: '99%' },
    { l: S('Anomaly detection rate', 'Detección de anomalías'), v: '88%', w: '88%' },
    /* Bar capped at 99% so a 99.9% claim doesn't render as a completely full
       track — same treatment as K-Traffic's uptime bar. */
    { l: S('Platform uptime', 'Disponibilidad de plataforma'), v: '99.9%', w: '99%' },
  ],

  processEyebrow: S('THE PROCESS', 'EL PROCESO'),
  processH2a: S('AI-driven cloud-based', 'Analítica de video en la nube'),
  processH2b: S('video analytics.', 'impulsada por IA.'),
  processIn: [
    { k: 'camera', t: S('IP cameras', 'Cámaras IP') },
    { k: 'sensor', t: S('RTSP streams', 'Streams RTSP') },
    { k: 'iot', t: S('Drones', 'Drones') },
    { k: 'access', t: S('Archives', 'Archivos') },
    { k: 'brain', t: S('AI analytics', 'Analítica IA') },
  ],
  processCore: SL(['INGEST', 'ANALYZE', 'ACT'], ['INGIERE', 'ANALIZA', 'ACTÚA']),
  processOut: [
    { k: 'bell', t: S('Live view', 'Vista en vivo') },
    { k: 'pin', t: S('Event alert', 'Alerta de evento') },
    { k: 'chart', t: S('Investigation', 'Investigación') },
  ],

  intEyebrow: S('INTEGRATIONS', 'INTEGRACIONES'),
  intH2a: S('Connect K-Video to your', 'Conecta K-Video a tu'),
  intH2b: S('existing security ecosystem.', 'ecosistema de seguridad.'),
  intSub: S('Vendor-neutral by design — existing camera investment keeps its value.',
    'Neutral al fabricante por diseño — tu inversión en cámaras conserva su valor.'),
  integrations: [
    { t: S('Video management systems', 'Sistemas de gestión de video'), d: S('Compatible with leading VMS platforms and IP camera manufacturers.', 'Compatible con las principales plataformas VMS y fabricantes de cámaras IP.') },
    { t: S('Public safety & 911 centers', 'Seguridad pública y centros 911'), d: S('Feeds live video to CAD, RTCCs, and dispatch platforms.', 'Envía video en vivo a plataformas CAD, RTCC y de despacho.') },
    { t: S('AI & video analytics', 'IA y analítica de video'), d: S('Facial recognition, LPR, behavioral analysis, gunshot detection.', 'Reconocimiento facial, LPR, análisis de comportamiento, detección de disparos.') },
    { t: S('IoT & smart sensors', 'IoT y sensores inteligentes'), d: S('Motion sensors, perimeter security, access control systems.', 'Sensores de movimiento, seguridad perimetral, sistemas de control de acceso.') },
  ],

  faqs: [
    {
      q: S('What is K-Video?',
        '¿Qué es K-Video?'),
      a: S('K-Video is a scalable cloud and on-premises video management system (VMS) powered by AI-driven analytics. It enables real-time monitoring, forensic search, and automated threat detection across thousands of cameras.',
        'K-Video es un sistema de gestión de video (VMS) escalable en nube y local, potenciado por analítica de IA. Permite monitoreo en tiempo real, búsqueda forense y detección automatizada de amenazas en miles de cámaras.'),
    },
    {
      q: S('How does K-Video use AI for video analytics?',
        '¿Cómo utiliza K-Video la IA para analítica de video?'),
      a: S('K-Video integrates facial recognition at 94% accuracy, license plate recognition (LPR) at 99% read rate, anomaly detection, and behavioral analysis — all automated and in real time.',
        'K-Video integra reconocimiento facial con 94% de precisión, reconocimiento de placas vehiculares (LPR) con 99% de tasa de lectura, detección de anomalías y análisis de comportamiento — todo automatizado y en tiempo real.'),
    },
    {
      q: S('How many cameras can K-Video manage?',
        '¿Cuántas cámaras puede gestionar K-Video?'),
      a: S('K-Video supports over 10,000 cameras through its microservices architecture. It handles IP cameras, body cams, and drone streams with 99.9% uptime and automatic failover.',
        'K-Video soporta más de 10,000 cámaras gracias a su arquitectura de microservicios. Maneja cámaras IP, body cams y streams de drones con 99.9% de disponibilidad y conmutación automática por fallo.'),
    },
    {
      q: S('Does K-Video support third-party cameras?',
        '¿Soporta K-Video cámaras de terceros?'),
      a: S('Yes. K-Video is compatible with major VMS platforms and IP camera manufacturers, supporting multiple streaming protocols including HLS, WebRTC, RTMP, and RTSP.',
        'Sí. K-Video es compatible con las principales plataformas VMS y fabricantes de cámaras IP, soportando múltiples protocolos de streaming incluyendo HLS, WebRTC, RTMP y RTSP.'),
    },
    {
      q: S('What is intelligent video search in K-Video?',
        '¿Qué es la búsqueda inteligente de video en K-Video?'),
      a: S('K-Video\\\'s intelligent search lets you find specific events in seconds instead of hours, using AI filters like facial recognition, LPR, motion detection, and behavioral analysis across stored video archives.',
        'La búsqueda inteligente de K-Video permite encontrar eventos específicos en segundos en lugar de horas, utilizando filtros de IA como reconocimiento facial, LPR, detección de movimiento y análisis de comportamiento en archivos de video almacenados.'),
    },
    {
      q: S('What is a VMS and why does public safety need one?',
        '¿Qué es un VMS y por qué lo necesita la seguridad pública?'),
      a: S('A VMS (Video Management System) is the software that centralizes recording, storage, live viewing, and forensic search of all cameras across an organization. For public safety, a unified VMS replaces the need to access multiple DVR/NVR consoles, allowing operators to view any camera — municipal, traffic, port, or airport — from a single interface. K-Video is a next-generation VMS that adds AI analytics on top of this foundation.',
        'Un VMS (Video Management System o Sistema de Gestión de Video) es el software que centraliza la grabación, almacenamiento, visualización en vivo y búsqueda forense de todas las cámaras de una organización. Para seguridad pública, un VMS unificado reemplaza la necesidad de acceder a múltiples consolas de DVR/NVR, permitiendo a los operadores ver cualquier cámara — municipal, de tráfico, portuaria o aeroportuaria — desde una sola interfaz. K-Video es un VMS de nueva generación que añade analítica de IA sobre esta base.'),
    },
    {
      q: S('What are the best VMS software features for public safety?',
        '¿Cuáles son las mejores características de un software VMS para seguridad pública?'),
      a: S('Essential features include: ONVIF/RTSP support for connecting cameras from any manufacturer, forensic search with AI filters (facial recognition, LPR, anomaly detection), integrated GIS maps for locating cameras by geographic location, hybrid cloud/on-premises storage, sub-second latency streaming for real-time operations, and end-to-end encryption. K-Video includes all of these capabilities in a single platform.',
        'Las características esenciales incluyen: soporte ONVIF/RTSP para conectar cámaras de cualquier fabricante, búsqueda forense con filtros de IA (reconocimiento facial, LPR, detección de anomalías), mapas GIS integrados para localizar cámaras por ubicación geográfica, almacenamiento híbrido nube/local, streaming de baja latencia (sub-segundo) para operaciones en tiempo real, y cifrado de extremo a extremo. K-Video incluye todas estas capacidades en una sola plataforma.'),
    },
    {
      q: S('What is the difference between a unified VMS and a traditional DVR/NVR?',
        '¿Cuál es la diferencia entre un VMS unificado y un DVR/NVR tradicional?'),
      a: S('A DVR/NVR records video from a limited set of cameras on a physical device. A unified VMS like K-Video connects thousands of cameras from multiple manufacturers and locations on one platform with AI analytics, centralized forensic search, and GIS maps. The key difference: with a DVR/NVR you need to access each device individually; with K-Video, all cameras are in a single operational view with intelligent search capabilities.',
        'Un DVR/NVR graba video de un conjunto limitado de cámaras en un dispositivo físico. Un VMS unificado como K-Video conecta miles de cámaras de múltiples fabricantes y ubicaciones en una sola plataforma con analítica de IA, búsqueda forense centralizada y mapas GIS. La diferencia clave: con un DVR/NVR necesitas acceder a cada dispositivo individualmente; con K-Video, todas las cámaras están en una sola vista operativa con capacidades de búsqueda inteligente.'),
    },
  ],

  seo: {
    metadataKey: 'kVideo',
    slug: 'k-video',
    category: 'Video Management System',
    description: S('AI-powered video management system for public safety, with real-time monitoring, forensic search, and automated detection across thousands of cameras.',
      'Sistema de gestión de video con IA para seguridad pública, con monitoreo en tiempo real, búsqueda forense y detección automatizada en miles de cámaras.'),
  },

  caseEyebrow: S('PROVEN IN THE FIELD', 'PROBADO EN CAMPO'),
  caseMetric: '10,000+',
  caseMetricL: S('Connected sensors & cameras', 'Sensores y cámaras conectados'),
  caseName: S('Michoacán, Mexico', 'Michoacán, México'),
  caseScope: S('STATEWIDE DEPLOYMENT', 'DESPLIEGUE ESTATAL'),
  caseBody: S('Cameras from multiple vendors and municipalities feed one statewide operational picture, with analytics and investigations running across the whole network rather than system by system.',
    'Cámaras de múltiples fabricantes y municipios alimentan una sola imagen operativa estatal, con analítica e investigaciones sobre toda la red en vez de sistema por sistema.'),
  caseStats: [
    { v: S('Multi-vendor', 'Multi-fabricante'), l: S('Camera network', 'Red de cámaras') },
    { v: '99.9%', l: S('Platform uptime', 'Disponibilidad de plataforma') },
    { v: '15+', l: S('AI models running', 'Modelos de IA activos') },
  ],
  caseNote: S('Figures reflect reported platform performance. Deployment details subject to customer approval.',
    'Las cifras reflejan el rendimiento reportado de la plataforma. Detalles del despliegue sujetos a aprobación del cliente.'),
}

export default KVIDEO
