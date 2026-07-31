/* K-Connect solution-page content — ported verbatim from the Claude Design
   project "Kabat One Website" (home/sol-kconnect.jsx), whose own header notes
   the copy was lifted from the live /k-connect page.

   The most feature-complete of the five: it is the only one that uses the
   optional `audience` band ("who uses K-Connect", five cards), it uses the
   bare hero, and its first capability row overrides the default shot crop via
   `ar`/`h` because the network mockup is 1200x546 rather than 1200x670.

   Non-breaking hyphens (U+2011) in "K‑Connect" / "K‑Video" / "K‑Safety"
   inside prose are the design's own, kept so product names never break. */

import { type SolutionContent, S, SL } from './solution-content'

const KCONNECT: SolutionContent = {
  key: 'connect',
  name: 'K-Connect',
  /* The design used var(--k-connect). Resolved to the green the hero nav
     already uses for K-Connect (#22c55e), matching the design's own first
     hero chip and its dark-green accentInk. Note the Solutions accordion
     currently tags K-Connect purple (#8b5cf6) — same split as K-Traffic's
     cyan/amber, worth reconciling separately. */
  accent: '#22c55e',
  accentInk: '#15803d',
  eyebrow: S('COLLABORATIVE SURVEILLANCE · K-CONNECT', 'VIDEOVIGILANCIA COMUNITARIA · K-CONNECT'),
  h1a: S('Secure community-based video', 'Plataforma segura de'),
  h1b: S('sharing for public safety.', 'videovigilancia comunitaria.'),
  sub: S('Secure, real-time video sharing and collaboration between private organizations and public safety agencies — enabling unified situational awareness without boundaries.',
    'Conecta cámaras de negocios y ciudadanos al centro de mando municipal. K‑Connect amplía la cobertura de vigilancia sin infraestructura adicional.'),
  heroImg: '/images/k-connect-mockup.webp',
  heroBare: true,
  heroAlt: S('K‑Connect network view showing connected organization cameras shared with agencies',
    'Vista de red K‑Connect con cámaras de organizaciones conectadas compartidas con agencias'),
  consoleTitle: S('K-CONNECT NETWORK', 'RED K-CONNECT'),
  heroEvent: {
    tag: S('SHARING ACTIVE', 'COMPARTIENDO'),
    title: S('Connected organizations', 'Organizaciones conectadas'),
    loc: S('Role-based access · Audited', 'Acceso por roles · Auditado'),
    rows: [
      { l: S('Cameras shared', 'Cámaras compartidas'), v: '12' },
      { l: S('Access', 'Acceso'), v: S('Role-based', 'Por roles') },
      { l: S('Expiry', 'Expiración'), v: S('Automatic', 'Automática') },
    ],
  },
  chips: [
    { c: '#22c55e', t: S('Controlled video sharing', 'Compartición controlada') },
    { c: '#3b82f6', t: S('Audit trails & expiry', 'Auditoría y expiración') },
  ],
  stats: [
    { v: S('Cross-agency', 'Interagencial'), l: S('Sharing', 'Compartición') },
    { v: S('Role-based', 'Basado en roles'), l: S('Access', 'Acceso') },
    { v: S('Real-time', 'Tiempo real'), l: S('Monitoring', 'Monitoreo') },
  ],

  coreLabel: S('BUILT ON THE UNIFIED PLATFORM', 'CONSTRUIDO SOBRE LA PLATAFORMA UNIFICADA'),
  core: SL(['Integrations', 'Video / VMS', 'GIS', 'Events', 'Identity', 'Evidence', 'Citizen', 'Analytics'],
    ['Integraciones', 'Video / VMS', 'GIS', 'Eventos', 'Identidad', 'Evidencia', 'Ciudadanía', 'Analítica']),

  benefitsEyebrow: S('WHY K-CONNECT', 'POR QUÉ K-CONNECT'),
  benefitsH2a: S('Secure interoperability for', 'Interoperabilidad segura para una'),
  benefitsH2b: S('smarter, faster response.', 'respuesta más rápida e inteligente.'),
  benefits: [
    {
      icon: 'camera', t: S('Controlled video sharing', 'Compartición controlada de video'),
      d: S('Share specific cameras or streams with law enforcement on-demand, with granular permission controls.',
        'Comparte cámaras o transmisiones específicas con las fuerzas del orden bajo demanda, con controles granulares de permisos.'),
    },
    {
      icon: 'bolt', t: S('Real-time incident awareness', 'Conciencia de incidentes en tiempo real'),
      d: S('All connected parties see the same live feeds during an active incident, accelerating coordination.',
        'Todas las partes conectadas ven las mismas transmisiones en vivo durante un incidente activo, acelerando la coordinación.'),
    },
    {
      icon: 'link', t: S('System integration', 'Integración de sistemas'),
      d: S('Connects with K‑Video, K‑Safety, and third-party VMS platforms — works with existing infrastructure.',
        'Se conecta con K‑Video, K‑Safety y plataformas VMS de terceros — funciona con la infraestructura existente.'),
    },
    {
      icon: 'shield', t: S('Privacy & compliance', 'Privacidad y cumplimiento'),
      d: S('Role-based access, audit trails, and automatic sharing expiry ensure full regulatory compliance.',
        'Acceso basado en roles, pistas de auditoría y expiración automática de compartición aseguran el cumplimiento regulatorio.'),
    },
  ],

  featuresEyebrow: S('HOW SHARING WORKS', 'CÓMO FUNCIONA LA COMPARTICIÓN'),
  featuresH2a: S('Connect. Share.', 'Conectar. Compartir.'),
  featuresH2b: S('Respond. Audit.', 'Responder. Auditar.'),
  features: [
    {
      img: '/images/k-connect-mockup.webp', ar: '1200 / 546', h: 546,
      alt: S('Network view of connected organizations and their registered cameras',
        'Vista de red de organizaciones conectadas y sus cámaras registradas'),
      t: S('Connected organization network', 'Red de organizaciones conectadas'),
      d: S('Schools, businesses, residential communities, and government facilities join one network, each keeping control of their own cameras.',
        'Escuelas, negocios, comunidades residenciales e instalaciones gubernamentales se unen a una red, cada uno manteniendo el control de sus cámaras.'),
      pts: SL(['Organizations register their cameras', 'Each owner keeps control', 'One network, many participants'],
        ['Las organizaciones registran sus cámaras', 'Cada dueño mantiene el control', 'Una red, muchos participantes']),
    },
    {
      img: '/images/modules/citizen.webp',
      alt: S('Granular permission controls determining which cameras are shared and with whom',
        'Controles granulares de permisos definiendo qué cámaras se comparten y con quién'),
      t: S('Granular permission control', 'Control granular de permisos'),
      d: S('Owners choose exactly which cameras or streams to share, with whom, and for how long. Sharing expires automatically.',
        'Los dueños eligen exactamente qué cámaras o transmisiones compartir, con quién y por cuánto tiempo. La compartición expira automáticamente.'),
      pts: SL(['Per-camera sharing decisions', 'Role-based access control', 'Automatic sharing expiry'],
        ['Decisiones por cámara', 'Control de acceso por roles', 'Expiración automática']),
    },
    {
      img: '/images/modules/video.webp',
      alt: S('Shared organization feeds appearing alongside agency cameras during an incident',
        'Señales compartidas junto a cámaras de la agencia durante un incidente'),
      t: S('Shared live feeds in an incident', 'Señales compartidas en un incidente'),
      d: S('During an active incident every connected party sees the same live feeds, so coordination happens on shared facts.',
        'Durante un incidente activo, todas las partes conectadas ven las mismas transmisiones en vivo, para coordinar sobre hechos compartidos.'),
      pts: SL(['Same live feeds for all parties', 'Faster incident coordination', 'Unified situational awareness'],
        ['Mismas señales para todos', 'Coordinación más rápida', 'Conciencia situacional unificada']),
    },
    {
      img: '/images/modules/gis.webp',
      alt: S('Map showing which connected cameras cover the area around an incident',
        'Mapa mostrando qué cámaras conectadas cubren la zona de un incidente'),
      t: S('Coverage on the operational map', 'Cobertura en el mapa operativo'),
      d: S('Connected cameras appear in the same operational picture as agency cameras, so useful coverage near an incident is immediately visible.',
        'Las cámaras conectadas aparecen en la misma imagen operativa que las de la agencia, así la cobertura útil cerca de un incidente es visible de inmediato.'),
      pts: SL(['Connected cameras on the incident map', 'Coverage visible in context', 'Same view as agency cameras'],
        ['Cámaras conectadas en el mapa', 'Cobertura visible en contexto', 'Misma vista que cámaras de la agencia']),
    },
    {
      img: '/images/modules/events.webp',
      alt: S('Audit trail recording each shared access against the incident record',
        'Pista de auditoría registrando cada acceso compartido en el registro del incidente'),
      t: S('Audit trail & compliance', 'Auditoría y cumplimiento'),
      d: S('Every access is logged against the incident, so the program can be governed transparently and stand up to later scrutiny.',
        'Cada acceso queda registrado en el incidente, para gobernar el programa con transparencia y resistir revisiones posteriores.'),
      pts: SL(['Full access audit trails', 'Encrypted, compliant channels', 'Transparent accountability'],
        ['Auditoría completa de accesos', 'Canales encriptados y conformes', 'Rendición de cuentas transparente']),
    },
    {
      img: '/images/modules/integrations.webp',
      alt: S('Integration layer connecting K‑Video, K‑Safety, and third-party VMS platforms',
        'Capa de integración conectando K‑Video, K‑Safety y plataformas VMS de terceros'),
      t: S('Deployment flexibility', 'Flexibilidad de despliegue'),
      d: S('Cloud, hybrid, or on-premises deployment. Scales from a single building to a city-wide network.',
        'Despliegue en nube, híbrido o local. Escala desde un solo edificio hasta una red a nivel de ciudad.'),
      pts: SL(['Cloud, hybrid, or on-premises', 'Single building to city-wide', 'Works with existing VMS'],
        ['Nube, híbrido o local', 'De un edificio a toda la ciudad', 'Funciona con el VMS existente']),
    },
  ],

  audienceEyebrow: S('WHO USES K-CONNECT', 'QUIÉN USA K-CONNECT'),
  audienceH2a: S('Industries & organizations', 'Industrias y organizaciones'),
  audienceH2b: S('using K‑Connect.', 'que usan K‑Connect.'),
  audience: [
    { t: S('Schools & universities', 'Escuelas y universidades'), d: S('Campus security systems connected to local law enforcement for rapid emergency response.', 'Sistemas de seguridad de campus conectados a las fuerzas del orden locales para una respuesta rápida ante emergencias.') },
    { t: S('Businesses & retail', 'Negocios y comercio'), d: S('Commercial surveillance networks that share feeds with security agencies during incidents.', 'Redes de vigilancia comercial que comparten transmisiones con agencias de seguridad durante incidentes.') },
    { t: S('Residential communities', 'Comunidades residenciales'), d: S('Gated communities and HOAs connected to neighborhood patrols and municipal police.', 'Comunidades cerradas y asociaciones de vecinos conectadas a patrullas locales y policía municipal.') },
    { t: S('Government facilities', 'Instalaciones gubernamentales'), d: S('Public buildings sharing critical infrastructure footage with emergency management.', 'Edificios públicos compartiendo imágenes de infraestructura crítica con gestión de emergencias.') },
    { t: S('Public venues', 'Espacios públicos'), d: S('Stadiums, transit hubs, and event centers with seamless agency-to-agency video coordination.', 'Estadios, centros de tránsito y recintos de eventos con coordinación de video entre agencias.') },
  ],

  processEyebrow: S('THE PROCESS', 'EL PROCESO'),
  processH2a: S('From camera connection', 'De la conexión de cámaras'),
  processH2b: S('to incident response.', 'a la respuesta ante incidentes.'),
  processIn: [
    { k: 'camera', t: S('Cameras', 'Cámaras') },
    { k: 'users', t: S('Organizations', 'Organizaciones') },
    { k: 'access', t: S('Permissions', 'Permisos') },
    { k: 'brain', t: S('AI monitoring', 'Monitoreo IA') },
    { k: 'bell', t: S('Event feeds', 'Feeds de eventos') },
  ],
  processCore: SL(['CONNECT', 'SHARE', 'RESPOND'], ['CONECTA', 'COMPARTE', 'RESPONDE']),
  processOut: [
    { k: 'shield', t: S('Law enforcement', 'Fuerzas del orden') },
    { k: 'pin', t: S('City operations', 'Operaciones de ciudad') },
    { k: 'chart', t: S('Audit trail', 'Pista de auditoría') },
  ],

  intEyebrow: S('INTEGRATIONS', 'INTEGRACIONES'),
  intH2a: S('Secure integration platform for', 'Plataforma de integración segura para'),
  intH2b: S('critical public safety systems.', 'sistemas críticos de seguridad pública.'),
  intSub: S('Standards-based and vendor-neutral, so existing camera and VMS investment keeps working.',
    'Basado en estándares y neutral al fabricante, para que tu inversión en cámaras y VMS siga sirviendo.'),
  integrations: [
    { t: S('Public safety platforms', 'Plataformas de seguridad pública'), d: S('Integrates with K‑Safety, K‑Dispatch, and third-party CAD/RTCC systems.', 'Se integra con K‑Safety, K‑Dispatch y sistemas CAD/RTCC de terceros.') },
    { t: S('Video management systems', 'Sistemas de gestión de video'), d: S('Compatible with major VMS providers and IP camera manufacturers.', 'Compatible con los principales proveedores de VMS y fabricantes de cámaras IP.') },
    { t: S('Communication & access', 'Comunicación y acceso'), d: S('Secure encrypted channels, SSO, mobile apps, and enterprise directory integration.', 'Canales encriptados seguros, SSO, apps móviles e integración con directorio empresarial.') },
  ],

  caseEyebrow: S('PROVEN IN THE FIELD', 'PROBADO EN CAMPO'),
  caseMetric: S('Community', 'Comunidad'),
  caseMetricL: S('Coverage extended without new infrastructure', 'Cobertura ampliada sin nueva infraestructura'),
  caseName: S('Mexico', 'México'),
  caseScope: S('MUNICIPAL PROGRAMS', 'PROGRAMAS MUNICIPALES'),
  caseBody: S('Privately owned cameras join the municipal operational picture under owner-controlled permissions, giving command centres useful coverage in areas where public cameras were never installed.',
    'Cámaras de propiedad privada se suman a la imagen operativa municipal con permisos controlados por el dueño, dando a los centros de mando cobertura útil en zonas sin cámaras públicas.'),
  caseStats: [
    { v: S('Role-based', 'Por roles'), l: S('Every shared feed', 'Cada señal compartida') },
    { v: S('Audited', 'Auditado'), l: S('Access logging', 'Registro de accesos') },
    { v: S('No new hardware', 'Sin hardware nuevo'), l: S('Coverage growth', 'Crecimiento de cobertura') },
  ],
  caseNote: S('Deployment details subject to customer approval.', 'Detalles del despliegue sujetos a aprobación del cliente.'),
}

export default KCONNECT
