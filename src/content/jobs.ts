// Open positions. One entry per role, fully translated into both locales.
//
// The site renders a job in whatever language the visitor chose, so every job
// carries complete `en` and `es` content. Roles based in Israel and roles based
// in Mexico both appear on /careers and /es/careers — the language follows the
// site, not the office.
//
// To post a new role: add an entry here. The index page, the detail route,
// the sitemap and the JobPosting structured data all derive from this file.

/** Where applications go. Shown as visible text as well as in the mailto: link. */
export const APPLY_EMAIL = 'careers@kabatone.com'

export interface JobSection {
  heading: string
  body?: string
  bullets?: string[]
}

export interface JobContent {
  title: string
  /** One-line teaser shown on the /careers index card. */
  summary: string
  /** Lead paragraph on the detail page, above the sections. */
  intro: string
  sections: JobSection[]
}

export interface Job {
  slug: string
  /** Sort order on the index — lower first. */
  order: number
  employmentType: 'FULL_TIME' | 'PART_TIME' | 'CONTRACTOR'
  workplace: 'HYBRID' | 'ON_SITE' | 'REMOTE'
  /** ISO 3166-1 alpha-2, for JobPosting structured data. */
  country: string
  region: string
  datePosted: string
  /** Google de-lists a JobPosting after this date. Bump it to keep a role live. */
  validThrough: string
  location: { en: string; es: string }
  department: { en: string; es: string }
  reportsTo: { en: string; es: string }
  en: JobContent
  es: JobContent
}

export const jobs: Job[] = [
  {
    slug: 'tech-lead-next-generation-public-safety-platform',
    order: 1,
    employmentType: 'FULL_TIME',
    workplace: 'HYBRID',
    country: 'IL',
    region: 'Israel',
    datePosted: '2026-09-15',
    validThrough: '2027-03-15',
    location: { en: 'Israel — Hybrid', es: 'Israel — Híbrido' },
    department: { en: 'R&D', es: 'I+D' },
    reportsTo: { en: 'R&D leadership', es: 'Dirección de I+D' },

    en: {
      title: 'Tech Lead, Next-Generation Public Safety Platform (Hands-On)',
      summary:
        'Own the architecture of our greenfield, cloud-native platform — write the hard parts yourself, and build the team that ships it.',
      intro:
        'We are building our next-generation platform: a greenfield, cloud-native and on-premises-deployable operational platform that will become the foundation of our product line. We are looking for a hands-on Tech Lead to own it from the ground up.',
      sections: [
        {
          heading: 'About KabatOne',
          body: 'KabatOne builds a unified, mission-critical public safety platform connecting emergency dispatch, GIS, video, sensors, incident management, mobile responders, evidence, and third-party systems. Our products support real-time decision-making in complex command-center environments across multiple countries.',
        },
        {
          heading: 'The Role',
          body: 'You will own the architecture, write production code, make and document the technical decisions, and build and lead the engineering team that delivers it. The platform is developed with an AI-native, spec-driven engineering workflow in which AI coding agents do much of the mechanical work under human specification, review and approval. You will own that way of working for the team as well.\n\nThis is a technical leadership role, not an AI research role and not a people-management-only role. Humans decide; the platform and the process are built so that operators and engineers stay in control.',
        },
        {
          heading: "What You'll Do",
          bullets: [
            'Own the technical direction of the platform: architecture, technology stack, engineering standards and the decisions that outlive any single feature, documented as you go.',
            'Take ownership of the existing foundation: review it, keep what holds, change what does not.',
            'Write production code, especially the hard parts: multi-tenancy and security, the core event and data model, integrations, and the real-time operator path. Expect roughly half your time hands-on in the first year.',
            'Define the MVP together with Product and deliver it as a working system that can be deployed to a first set of customers.',
            'Build the team: hire and onboard the first engineers, set the practices, run the review and merge gates, grow people.',
            'Lead the AI-native development process: adopt and evolve our spec-driven, gated workflow, integrate AI coding agents with clear guardrails and human accountability, and measure quality and cost.',
            'Design the platform to be AI-ready: data model, event semantics, audit trail and integration seams that allow decision-support and AI-assisted capabilities to be added later without redesign.',
            'Own delivery engineering with DevOps: environments, CI/CD, observability, release and upgrade path, and the security posture of the codebase and its tooling.',
            'Work closely with Product and business stakeholders, DevOps, our existing product development teams, and the operational reality of command centers.',
          ],
        },
        {
          heading: 'Requirements',
          bullets: [
            '8+ years building backend or platform software, with deep TypeScript / Node.js in production (NestJS or equivalent) and strong PostgreSQL.',
            'Has taken a greenfield system from zero to production and operated it, and has taken over a codebase built by others and made it their own.',
            'Real-time or event-driven systems in production: message streams, WebSockets, workflow engines.',
            'Multi-tenant and deployable systems: tenancy isolation, deployment topologies, containers and Kubernetes fundamentals.',
            '2+ years leading a small engineering team as a coding lead, hiring included.',
            'AI-native way of working: daily use of AI coding agents, spec-first development with review gates, critical judgement of AI output, and a clear sense of where guardrails belong.',
            'Architecture judgement and scope discipline: can cut to an MVP, say no, and write decisions down.',
            'Fluent English.',
          ],
        },
        {
          heading: 'Advantage',
          bullets: [
            'Public safety, CAD, PSIM, video management, GIS or smart-city domain experience.',
            'Angular; Kubernetes and Helm; on-premises or air-gapped delivery; Kafka, Temporal, Keycloak / OIDC; OpenTelemetry.',
            'Shipping LLM-based features inside a product (retrieval, agents, evaluations, guardrails).',
            'Leading distributed teams. KabatOne operates development teams in Israel and Mexico.',
            'Spanish.',
          ],
        },
        {
          heading: 'Your First Year',
          bullets: [
            'The architecture and stack are yours: reviewed, decided, documented.',
            'A team is in place and shipping through the gated workflow.',
            'The MVP is defined and delivered as a working system deployable to a first set of customers.',
            'The AI-native development process is running with measured quality and cost.',
          ],
        },
      ],
    },

    es: {
      title: 'Tech Lead, Plataforma de Seguridad Pública de Nueva Generación (Hands-On)',
      summary:
        'Toma la propiedad de la arquitectura de nuestra plataforma greenfield cloud-native — escribe tú mismo las partes difíciles y construye el equipo que la entrega.',
      intro:
        'Estamos construyendo nuestra plataforma de nueva generación: una plataforma operativa greenfield, cloud-native y desplegable on-premises, que será la base de toda nuestra línea de producto. Buscamos un Tech Lead hands-on que la haga suya desde cero.',
      sections: [
        {
          heading: 'Sobre KabatOne',
          body: 'KabatOne desarrolla una plataforma unificada de seguridad pública de misión crítica que conecta despacho de emergencias, GIS, video, sensores, gestión de incidentes, unidades móviles en campo, evidencia y sistemas de terceros. Nuestros productos sostienen la toma de decisiones en tiempo real en entornos complejos de centros de mando en varios países.',
        },
        {
          heading: 'El Rol',
          body: 'Serás dueño de la arquitectura, escribirás código de producción, tomarás y documentarás las decisiones técnicas, y construirás y liderarás al equipo de ingeniería que la entrega. La plataforma se desarrolla con un flujo de trabajo de ingeniería AI-native y spec-driven, en el que los agentes de codificación con IA hacen gran parte del trabajo mecánico bajo especificación, revisión y aprobación humana. También serás dueño de esa forma de trabajar para el equipo.\n\nEs un rol de liderazgo técnico: no es un rol de investigación en IA ni un rol exclusivamente de gestión de personas. Deciden las personas; la plataforma y el proceso están construidos para que operadores e ingenieros mantengan el control.',
        },
        {
          heading: 'Qué Harás',
          bullets: [
            'Ser dueño de la dirección técnica de la plataforma: arquitectura, stack tecnológico, estándares de ingeniería y las decisiones que sobreviven a cualquier funcionalidad individual, documentadas sobre la marcha.',
            'Tomar la propiedad de la base existente: revisarla, conservar lo que se sostiene y cambiar lo que no.',
            'Escribir código de producción, especialmente las partes difíciles: multi-tenancy y seguridad, el modelo central de eventos y datos, las integraciones y la ruta del operador en tiempo real. Espera dedicar aproximadamente la mitad de tu tiempo hands-on durante el primer año.',
            'Definir el MVP junto con Producto y entregarlo como un sistema funcional, desplegable a un primer grupo de clientes.',
            'Construir el equipo: contratar e incorporar a los primeros ingenieros, establecer las prácticas, operar las compuertas de revisión y merge, y hacer crecer a las personas.',
            'Liderar el proceso de desarrollo AI-native: adoptar y evolucionar nuestro flujo spec-driven con compuertas, integrar agentes de codificación con IA con guardrails claros y responsabilidad humana, y medir calidad y costo.',
            'Diseñar la plataforma para que esté lista para IA: modelo de datos, semántica de eventos, traza de auditoría y puntos de integración que permitan añadir después capacidades de apoyo a la decisión y asistidas por IA sin rediseñar.',
            'Ser dueño de la ingeniería de entrega junto con DevOps: entornos, CI/CD, observabilidad, ruta de release y upgrade, y la postura de seguridad del código y de su tooling.',
            'Trabajar de cerca con Producto y stakeholders de negocio, DevOps, nuestros equipos de desarrollo de producto actuales, y la realidad operativa de los centros de mando.',
          ],
        },
        {
          heading: 'Requisitos',
          bullets: [
            '8+ años construyendo software de backend o de plataforma, con TypeScript / Node.js a profundidad en producción (NestJS o equivalente) y PostgreSQL sólido.',
            'Haber llevado un sistema greenfield de cero a producción y haberlo operado, y haber tomado un código base construido por otros y haberlo hecho propio.',
            'Sistemas en tiempo real o basados en eventos en producción: streams de mensajes, WebSockets, motores de workflow.',
            'Sistemas multi-tenant y desplegables: aislamiento entre tenants, topologías de despliegue, contenedores y fundamentos de Kubernetes.',
            '2+ años liderando un equipo pequeño de ingeniería como líder que además programa, incluyendo contratación.',
            'Forma de trabajo AI-native: uso diario de agentes de codificación con IA, desarrollo spec-first con compuertas de revisión, juicio crítico sobre la salida de la IA y criterio claro sobre dónde colocar los guardrails.',
            'Criterio de arquitectura y disciplina de alcance: capacidad de recortar hasta un MVP, decir que no y dejar las decisiones por escrito.',
            'Inglés fluido.',
          ],
        },
        {
          heading: 'Deseable',
          bullets: [
            'Experiencia de dominio en seguridad pública, CAD, PSIM, gestión de video, GIS o ciudad inteligente.',
            'Angular; Kubernetes y Helm; entrega on-premises o en entornos air-gapped; Kafka, Temporal, Keycloak / OIDC; OpenTelemetry.',
            'Haber llevado a producción funcionalidades basadas en LLM dentro de un producto (retrieval, agentes, evaluaciones, guardrails).',
            'Liderazgo de equipos distribuidos. KabatOne opera equipos de desarrollo en Israel y México.',
            'Español.',
          ],
        },
        {
          heading: 'Tu Primer Año',
          bullets: [
            'La arquitectura y el stack son tuyos: revisados, decididos, documentados.',
            'Hay un equipo en marcha entregando a través del flujo con compuertas.',
            'El MVP está definido y entregado como un sistema funcional, desplegable a un primer grupo de clientes.',
            'El proceso de desarrollo AI-native está operando con calidad y costo medidos.',
          ],
        },
      ],
    },
  },
]

export function getJob(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug)
}

export function sortedJobs(): Job[] {
  return [...jobs].sort((a, b) => a.order - b.order)
}
