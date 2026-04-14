import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { articleSchema, faqPageSchema, breadcrumbSchema } from '@/lib/schema'
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
  return generatePageMetadata('publicSafetySoftwareSmallCities', locale)
}

export default async function PublicSafetySoftwareSmallCitiesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const es = locale === 'es'

  const ACCENT = '#16a34a'

  const baseUrl = 'https://kabatone.com'
  const pageUrl = es
    ? `${baseUrl}/es/resources/public-safety-software-small-cities/`
    : `${baseUrl}/resources/public-safety-software-small-cities/`

  const title = es
    ? 'Software de Seguridad Publica para Ciudades Pequenas'
    : 'Public Safety Software for Small Cities'

  const desc = es
    ? 'Las ciudades pequenas no necesitan complejidad empresarial — necesitan una plataforma unificada que funcione con la infraestructura existente. Como evaluar software de seguridad publica para municipios de menos de 100,000 habitantes.'
    : "Small cities don't need enterprise-scale complexity — they need a unified platform that works with existing cameras and infrastructure. How to evaluate public safety software for municipalities under 100,000 residents."

  const breadcrumbs = [
    { name: es ? 'Inicio' : 'Home', url: es ? `${baseUrl}/es/` : `${baseUrl}/` },
    { name: es ? 'Recursos' : 'Resources', url: es ? `${baseUrl}/es/resources/` : `${baseUrl}/resources/` },
    { name: title, url: pageUrl },
  ]

  const faqs = es ? [
    {
      question: '¿Puede una ciudad pequena pagar una plataforma unificada de seguridad publica?',
      answer: 'Si. Las plataformas modulares permiten comenzar con lo que se necesita. Una instalacion basica de video + GIS puede empezar entre $80,000 y $200,000 USD para un municipio pequeno. El modelo modular evita pagar por capacidades que no se necesitan todavia.',
    },
    {
      question: '¿KabatOne funciona para ciudades de menos de 50,000 habitantes?',
      answer: 'Si. La plataforma escala desde 20 camaras hasta 20,000. Los municipios pequenos tipicamente comienzan con K-Video + K-Safety y agregan K-Dispatch a medida que crecen las operaciones.',
    },
    {
      question: '¿Es necesario reemplazar las camaras existentes?',
      answer: 'No. Cualquier camara compatible con ONVIF o RTSP se integra sin necesidad de reemplazo. La infraestructura existente se preserva, lo que reduce costos y acelera el despliegue.',
    },
    {
      question: '¿Cual es el equipo minimo necesario para operar la plataforma?',
      answer: 'Un solo operador capacitado puede gestionar una instalacion pequena. El minimo recomendado es 2 operadores para cobertura 24/7. No se requiere un centro de operaciones de seguridad dedicado.',
    },
    {
      question: '¿Cuanto tiempo toma el despliegue?',
      answer: 'Los despliegues pequenos: 4 a 8 semanas. Instalaciones mayores con integracion de despacho: 3 a 6 meses. El cronograma depende de la cantidad de camaras, integraciones y flujos de trabajo requeridos.',
    },
    {
      question: '¿KabatOne esta disponible en espanol con soporte en espanol?',
      answer: 'Si. Interfaz completa en espanol, soporte en espanol, e integradores locales en Mexico, Peru y el resto de LATAM.',
    },
  ] : [
    {
      question: 'Can a small city afford a unified public safety platform?',
      answer: 'Yes — modular platforms let you start with what you need. A basic video + GIS installation can start at $80K–$200K USD for a small municipality. The modular model avoids paying for capabilities you do not yet need.',
    },
    {
      question: 'Does KabatOne work for cities under 50,000 residents?',
      answer: 'Yes — the platform scales from 20 cameras to 20,000. Small municipalities typically start with K-Video + K-Safety and add K-Dispatch as operations grow.',
    },
    {
      question: 'Do we need to replace our existing cameras?',
      answer: 'No — any ONVIF or RTSP-compatible camera integrates without replacement. Existing infrastructure is preserved, reducing costs and accelerating deployment timelines.',
    },
    {
      question: 'What is the minimum team needed to operate the platform?',
      answer: 'A single trained operator can manage a small city installation. Recommended minimum: 2 operators for 24/7 coverage. No dedicated security operations center required.',
    },
    {
      question: 'How long does it take to deploy?',
      answer: 'Small deployments: 4–8 weeks. Larger installations with dispatch integration: 3–6 months. Timeline depends on camera count, integrations, and workflow requirements.',
    },
    {
      question: 'Is KabatOne available in Spanish with Spanish-speaking support?',
      answer: 'Yes — full Spanish interface, Spanish-language support, and local integrators in Mexico, Peru, and broader LATAM.',
    },
  ]

  const needCards = es ? [
    { title: 'Funciona con camaras existentes', text: 'Sin necesidad de reemplazar equipos. Compatibilidad ONVIF/RTSP significa que cualquier marca se integra.' },
    { title: 'Operable por un equipo pequeno', text: '2 a 4 operadores, no un SOC de 24 horas. Interfaz intuitiva, capacitacion minima.' },
    { title: 'Modular', text: 'Comienza con video + GIS, agrega despacho despues. No pagues por lo que no necesitas aun.' },
    { title: 'Costo total accesible', text: 'Sin hardware propietario, sin licencias por camara que escalan de forma impredecible.' },
  ] : [
    { title: 'Works with existing cameras', text: 'No rip-and-replace. ONVIF/RTSP compatibility means any brand integrates.' },
    { title: 'Operable by a small team', text: '2–4 operators, not a 24/7 SOC. Intuitive interface, minimal training.' },
    { title: 'Modular', text: 'Start with video + GIS, add dispatch later. Do not pay for what you do not need yet.' },
    { title: 'Affordable total cost', text: 'No proprietary hardware, no per-camera licensing that scales unpredictably.' },
  ]

  const evalCriteria = es ? [
    { num: '01', title: 'Independencia de hardware', text: 'Evita proveedores que requieren camaras o servidores propietarios.' },
    { num: '02', title: 'Facilidad de despliegue', text: 'Opciones en la nube o hibridas que no requieren equipos dedicados de infraestructura on-premise.' },
    { num: '03', title: 'Integracion con CAD existente', text: 'O CAD nativo si no tienes uno.' },
    { num: '04', title: 'Mapa GIS con seguimiento en tiempo real', text: 'Incluso las ciudades pequenas necesitan saber donde estan sus unidades.' },
    { num: '05', title: 'Aplicacion movil de campo', text: 'Los agentes deben recibir actualizaciones de incidentes en su telefono, no solo por radio.' },
    { num: '06', title: 'Soporte en tu idioma y zona horaria', text: 'Especialmente importante para municipios de LATAM.' },
  ] : [
    { num: '01', title: 'Hardware independence', text: 'Avoid vendors that require proprietary cameras or servers.' },
    { num: '02', title: 'Ease of deployment', text: 'Cloud or hybrid options that do not need dedicated on-prem infrastructure teams.' },
    { num: '03', title: 'Integration with existing CAD', text: 'Or native CAD if you have none.' },
    { num: '04', title: 'GIS map with real-time unit tracking', text: 'Even small cities need to know where their officers are.' },
    { num: '05', title: 'Mobile field app', text: 'Officers should receive incident updates on their phone, not just radio.' },
    { num: '06', title: 'Vendor support in your language and time zone', text: 'Especially important for LATAM municipalities.' },
  ]

  const comparisonRows = es ? [
    { aspect: 'Video', fragmented: 'DVR independiente, sin vista centralizada', unified: 'VMS unificado, todas las camaras en una pantalla' },
    { aspect: 'Despacho', fragmented: 'Radio + registros manuales', unified: 'Despacho CAD con registro de incidente y asignacion de unidades' },
    { aspect: 'Conciencia situacional', fragmented: 'Sin mapa, ubicacion de agentes desconocida', unified: 'GIS en tiempo real con unidades e incidentes' },
    { aspect: 'Reportes', fragmented: 'Excel manual', unified: 'KPIs de tiempo de respuesta automatizados' },
    { aspect: 'Costo de integracion', fragmented: 'Cada herramienta requiere integracion separada', unified: 'Plataforma unica, ya integrada' },
    { aspect: 'Escalabilidad', fragmented: 'Reemplazar una herramienta rompe las demas', unified: 'Agrega modulos segun el presupuesto lo permita' },
  ] : [
    { aspect: 'Video', fragmented: 'Standalone DVR, no central view', unified: 'Unified VMS, all cameras on one screen' },
    { aspect: 'Dispatch', fragmented: 'Radio + manual logs', unified: 'CAD dispatch with incident record and unit assignment' },
    { aspect: 'Situational awareness', fragmented: 'No map, officer locations unknown', unified: 'Real-time GIS with units and incidents' },
    { aspect: 'Reporting', fragmented: 'Manual Excel', unified: 'Automated response time KPIs' },
    { aspect: 'Integration cost', fragmented: 'Each tool requires separate integration', unified: 'Single platform, already integrated' },
    { aspect: 'Upgrade path', fragmented: 'Replacing one tool breaks others', unified: 'Add modules as budget allows' },
  ]

  return (
    <>
      <Nav />

      {/* JSON-LD schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema(title, desc, pageUrl, '2026-04-08'))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* -- BREADCRUMB -- */}
        <div style={{
          maxWidth: '860px', margin: '0 auto', padding: '20px 40px 0',
          display: 'flex', alignItems: 'center', gap: '8px',
          fontFamily: 'DM Mono, monospace', fontSize: '11px',
          letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)',
        }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
            {es ? 'Inicio' : 'Home'}
          </Link>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: 'var(--dim)' }}>{es ? 'Recursos' : 'Resources'}</span>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: ACCENT }}>
            {es ? 'Software — Ciudades Pequenas' : 'Public Safety — Small Cities'}
          </span>
        </div>

        {/* -- HERO -- */}
        <section style={{ maxWidth: '860px', margin: '0 auto', padding: '56px 40px 64px' }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '11px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: ACCENT, marginBottom: '20px',
          }}>
            {es ? 'Guia de Evaluacion' : 'Evaluation Guide'}
          </p>
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
            fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.05,
            letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '28px',
          }}>
            {es
              ? 'Software de Seguridad Publica para Ciudades Pequenas'
              : 'Public Safety Software for Small Cities'}
          </h1>
          <p style={{
            fontSize: '18px', fontWeight: 300, color: 'var(--dim)',
            lineHeight: 1.75, maxWidth: '720px',
          }}>
            {es
              ? 'Los municipios pequenos y medianos tienen necesidades distintas: presupuestos limitados, equipos reducidos, infraestructura de camaras existente y sin departamento de IT dedicado. Esta guia explica que buscar en una plataforma de seguridad publica cuando administras una ciudad de menos de 100,000 habitantes.'
              : 'Small and mid-size municipalities have distinct needs — limited budgets, small teams, existing camera infrastructure, and no dedicated IT department. This guide explains what to look for in a public safety platform when you are managing a city of under 100,000 residents.'}
          </p>
        </section>

        {/* -- SECTION: The Small City Challenge -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es ? 'El Desafio de las Ciudades Pequenas' : 'The Small City Challenge'}
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.8, marginBottom: '20px' }}>
              {es
                ? 'Las grandes plataformas empresariales estan construidas para areas metropolitanas con equipos tecnologicos dedicados y presupuestos de siete cifras. Las ciudades pequenas — aquellas con menos de 100,000 habitantes — necesitan plataformas que funcionen con las marcas de camaras existentes, no requieran hardware propietario, puedan ser operadas por un equipo reducido y puedan estar en funcionamiento en semanas, no en anos. El desafio es encontrar una solucion que escale hacia abajo sin perder funcionalidades esenciales: despacho, video, GIS y seguimiento de incidentes.'
                : 'Large enterprise platforms are built for metro areas with dedicated tech teams and 7-figure budgets. Small cities — those under 100,000 residents — need platforms that work with existing camera brands, do not require proprietary hardware, can be operated by a small team, and can be up and running in weeks, not years. The challenge is finding a solution that scales down without losing core functionality: dispatch, video, GIS, and incident tracking.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.8 }}>
              {es
                ? 'En America Latina, la mayoria de los municipios caen en esta categoria. Sin embargo, la mayoria de los proveedores de software de seguridad publica apuntan a grandes ciudades y dejan a los gobiernos mas pequenos parchando soluciones de multiples proveedores, creando exactamente los silos que ralentizan la respuesta a emergencias.'
                : 'In Latin America, most municipalities fall into this category. Yet most public safety software vendors target large cities and leave smaller governments to patch together solutions from multiple vendors — creating exactly the silos that slow emergency response.'}
            </p>
          </div>
        </section>

        {/* -- SECTION: What Small Cities Actually Need -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es ? 'Lo Que las Ciudades Pequenas Realmente Necesitan' : 'What Small Cities Actually Need'}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {needCards.map((card, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                  borderLeft: `3px solid ${ACCENT}`,
                  borderRadius: '10px', padding: '24px 24px',
                }}>
                  <div style={{
                    fontFamily: 'DM Mono, monospace', fontSize: '10px',
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: ACCENT, marginBottom: '10px',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '19px', color: 'var(--white)', marginBottom: '8px',
                  }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7 }}>
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- SECTION: 6 Evaluation Criteria -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0', background: `color-mix(in srgb, ${ACCENT} 3%, transparent)` }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es ? 'Que Buscar: 6 Criterios de Evaluacion' : 'What to Look For: 6 Evaluation Criteria'}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {evalCriteria.map((item) => (
                <div key={item.num} style={{
                  display: 'flex', gap: '24px', alignItems: 'flex-start',
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                  borderRadius: '10px', padding: '24px 28px',
                }}>
                  <div style={{
                    fontFamily: 'DM Mono, monospace', fontWeight: 700,
                    fontSize: '22px', color: ACCENT, flexShrink: 0, lineHeight: 1,
                    paddingTop: '2px',
                  }}>
                    {item.num}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                      fontSize: '19px', color: 'var(--white)', marginBottom: '6px',
                    }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7 }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- SECTION: Comparison Table -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '12px',
            }}>
              {es
                ? 'Herramientas Fragmentadas vs Plataforma Unificada'
                : 'Fragmented Tools vs Unified Platform'}
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--dim)', marginBottom: '32px' }}>
              {es
                ? 'Para ciudades pequenas con recursos limitados, la diferencia operativa es critica.'
                : 'For small cities with limited resources, the operational difference is critical.'}
            </p>

            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%', borderCollapse: 'collapse',
                fontFamily: 'system-ui, sans-serif', fontSize: '14px',
              }}>
                <thead>
                  <tr style={{ borderBottom: `2px solid ${ACCENT}` }}>
                    <th style={{
                      textAlign: 'left', padding: '12px 16px',
                      fontFamily: 'DM Mono, monospace', fontSize: '10px',
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                      color: 'var(--muted)', fontWeight: 500,
                    }}>
                      {es ? 'Aspecto' : 'Aspect'}
                    </th>
                    <th style={{
                      textAlign: 'left', padding: '12px 16px',
                      fontFamily: 'DM Mono, monospace', fontSize: '10px',
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                      color: '#ef4444', fontWeight: 500,
                    }}>
                      {es ? 'Herramientas Fragmentadas' : 'Fragmented Tools'}
                    </th>
                    <th style={{
                      textAlign: 'left', padding: '12px 16px',
                      fontFamily: 'DM Mono, monospace', fontSize: '10px',
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                      color: ACCENT, fontWeight: 500,
                    }}>
                      {es ? 'Plataforma Unificada' : 'Unified Platform'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} style={{
                      borderBottom: '1px solid var(--border)',
                      background: i % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent',
                    }}>
                      <td style={{
                        padding: '14px 16px', color: 'var(--white)',
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 700, fontSize: '15px',
                      }}>
                        {row.aspect}
                      </td>
                      <td style={{ padding: '14px 16px', color: 'var(--dim)', lineHeight: 1.5 }}>
                        {row.fragmented}
                      </td>
                      <td style={{ padding: '14px 16px', color: 'var(--dim)', lineHeight: 1.5 }}>
                        <span style={{ color: ACCENT, marginRight: '6px' }}>✓</span>
                        {row.unified}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* -- SECTION: LATAM Focus -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0', background: `color-mix(in srgb, ${ACCENT} 4%, transparent)` }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '16px',
            }}>
              {es ? 'Contexto LATAM' : 'LATAM Context'}
            </p>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '24px',
            }}>
              {es
                ? 'Ciudades Pequenas en Mexico y LATAM'
                : 'Small Cities in Mexico and LATAM'}
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.8, marginBottom: '20px' }}>
              {es
                ? 'En Mexico, aproximadamente el 80% de los 2,469 municipios del pais tienen menos de 50,000 habitantes. La mayoria opera fuerzas de seguridad locales equivalentes al serenazgo. Los programas federales FORTASEG y SUBSEMUN proveen financiamiento para infraestructura de seguridad, pero requieren proveedores con homologacion federal.'
                : 'In Mexico, approximately 80% of the country\'s 2,469 municipalities have fewer than 50,000 residents. Most operate serenazgo or equivalent local security forces. FORTASEG and SUBSEMUN federal programs provide funding for security infrastructure — but require vendors with federal homologation.'}
            </p>
            <p style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.8, marginBottom: '32px' }}>
              {es
                ? 'En Peru, la situacion es similar: los distritos pequenos necesitan soluciones que funcionen con instalaciones de camaras financiadas por CONASEC. La capacidad de integrar con infraestructura ya financiada y desplegada es la diferencia entre una plataforma que funciona para el municipio y una que no.'
                : 'In Peru, the situation mirrors Mexico: small districts need solutions that work with CONASEC-funded camera installations. The ability to integrate with already-funded and deployed infrastructure is the difference between a platform that works for the municipality and one that does not.'}
            </p>

            {/* Product links */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '32px' }}>
              {[
                { href: '/k-safety', label: 'K-Safety', color: '#3b82f6', desc: es ? 'Conciencia situacional' : 'Situational awareness' },
                { href: '/k-dispatch', label: 'K-Dispatch', color: '#ef4444', desc: es ? 'Despacho CAD' : 'CAD dispatch' },
                { href: '/k-video', label: 'K-Video', color: '#a855f7', desc: es ? 'Gestion de video' : 'Video management' },
              ].map((product) => (
                <Link key={product.href} href={product.href} style={{
                  background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)',
                  borderTop: `3px solid ${product.color}`,
                  borderRadius: '10px', padding: '20px 16px',
                  textDecoration: 'none', display: 'block',
                }}>
                  <div style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '17px', color: 'var(--white)', marginBottom: '6px',
                  }}>
                    {product.label}
                  </div>
                  <div style={{
                    fontFamily: 'DM Mono, monospace', fontSize: '10px',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'var(--muted)',
                  }}>
                    {product.desc}
                  </div>
                </Link>
              ))}
            </div>

            {/* Internal resource links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', fontSize: '12px' }}>
              <span style={{ fontFamily: 'DM Mono, monospace', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {es ? 'Ver tambien:' : 'See also:'}
              </span>
              {[
                { href: '/resources/public-safety-software-municipalities-mexico', label: es ? 'Software para Municipios en Mexico' : 'Software for Municipalities in Mexico' },
                { href: '/resources/public-safety-software-peru', label: es ? 'Software para Peru' : 'Software for Peru' },
                { href: '/resources/c5-command-centers-mexico-2026', label: es ? 'Centros C5 en Mexico 2026' : 'C5 Command Centers Mexico 2026' },
                { href: '/resources/what-is-a-command-center', label: es ? 'Que es un Centro de Mando' : 'What Is a Command Center' },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{ color: ACCENT, textDecoration: 'none', borderBottom: `1px solid ${ACCENT}40` }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* -- FAQ SECTION -- */}
        <section style={{ borderTop: '1px solid var(--border)', padding: '64px 0' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '16px',
            }}>
              {es ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
            </p>
            <h2 style={{
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
              fontSize: 'clamp(26px, 3.5vw, 38px)', lineHeight: 1.1,
              color: 'var(--white)', marginBottom: '32px',
            }}>
              {es
                ? 'Preguntas Sobre Software para Ciudades Pequenas'
                : 'Questions About Public Safety Software for Small Cities'}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)',
                  borderRadius: '12px', padding: '24px 28px',
                }}>
                  <h3 style={{
                    fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
                    fontSize: '18px', color: 'var(--white)', marginBottom: '10px',
                  }}>
                    {faq.question}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7 }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -- RELATED ARTICLES -- */}
        <section style={{ padding: '64px 0', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 40px' }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: ACCENT, marginBottom: '24px',
            }}>
              {es ? 'Articulos Relacionados' : 'Related Articles'}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                {
                  href: '/resources/public-safety-software-municipalities-mexico',
                  en: 'Public Safety Software for Municipalities in Mexico',
                  es_label: 'Software de Seguridad Publica para Municipios en Mexico',
                },
                {
                  href: '/resources/public-safety-software-peru',
                  en: 'Public Safety Software for Peru',
                  es_label: 'Software de Seguridad Publica para Peru',
                },
                {
                  href: '/resources/c5-command-centers-mexico-2026',
                  en: 'C5 Command Centers Mexico 2026',
                  es_label: 'Centros C5 en Mexico 2026',
                },
                {
                  href: '/resources/what-is-a-command-center',
                  en: 'What Is a Command Center?',
                  es_label: '¿Que es un Centro de Mando?',
                },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '16px 20px', borderRadius: '8px',
                  border: '1px solid var(--border)', textDecoration: 'none',
                  color: 'var(--dim)', fontSize: '15px',
                }}>
                  <span>{es ? link.es_label : link.en}</span>
                  <span style={{ color: ACCENT, fontSize: '14px' }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* -- CTA -- */}
        <CTASection
          es={es}
          h2={es ? 'Una Plataforma que Escala con Tu Ciudad' : 'A Platform That Scales with Your City'}
          subtitle={es
            ? 'KabatOne funciona con las camaras que ya tienes, se despliega en semanas y puede ser operado por un equipo pequeno. Ideal para municipios que necesitan una solucion real, no una promesa empresarial.'
            : 'KabatOne works with the cameras you already have, deploys in weeks, and can be operated by a small team. Built for municipalities that need a real solution, not an enterprise promise.'}
          cta1={es ? 'Solicita una Demo' : 'Book a Demo'}
          cta2={es ? 'Contactar Ventas' : 'Contact Sales'}
        />

        <Footer es={es} />

        <style>{`
          @media (max-width: 768px) {
            div[style*="grid-template-columns: 1fr 1fr"],
            div[style*="grid-template-columns: repeat(3"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </>
  )
}
