/* The seven module cards, as their own section rather than hero furniture.

   Placed after the products section deliberately, and framed as "what the
   operator actually sees" rather than as a second feature list. Products
   names the line; this shows the working surfaces behind those names. If it
   were framed as capabilities it would just be restating the products
   section in a different format, which is the failure mode this page's
   running order exists to avoid.

   Reuses the hero's .hll-platform-stage / .hll-cards / .hll-card class names
   verbatim so every responsive and carousel rule in hero-lab-light.css
   applies unchanged — platform-modules.css only supplies the section shell
   and the handful of overrides for a host with no platform mark to clear. */

import HeroCardCarousel from './HeroCardCarousel'
import { moduleCards } from './HeroModuleCards'

export default function PlatformModules({ es }: { es: boolean }) {
  return (
    <section className="hll-modules" id="platform-modules" aria-labelledby="hll-modules-title">
      <div className="hll-modules-wrap">
        <div className="hll-modules-head">
          <div className="hll-modules-eyebrow">{es ? 'EN LA SALA DE MANDO' : 'INSIDE THE COMMAND ROOM'}</div>
          <h2 className="hll-modules-title" id="hll-modules-title">
            {es
              ? <>Lo que tu equipo <em>realmente ve</em></>
              : <>What your team <em>actually sees</em></>}
          </h2>
          <p className="hll-modules-lede">
            {es
              ? 'Cada producto se apoya en las mismas superficies operativas: despacho, video, mapa, eventos, evidencia, respuesta móvil e integraciones — en una sola plataforma.'
              : 'Every product runs on the same operational surfaces: dispatch, video, map, events, evidence, mobile response and integrations — on one platform.'}
          </p>
        </div>
      </div>

      {/* Full-bleed, outside the wrap. Seven cards measure ~1556px laid out,
          so any max-width container clips them — in the hero, two of the
          seven were unreachable at 1280px with the carousel controls hidden
          above 1180px. Here the track runs edge to edge and the controls are
          on at every width, so all seven are reachable. */}
      <div className="hll-platform-stage hll-platform-stage--section">
        <HeroCardCarousel
          previousLabel={es ? 'Tarjeta anterior' : 'Previous card'}
          nextLabel={es ? 'Tarjeta siguiente' : 'Next card'}
          slideLabel={es ? 'Módulos de la plataforma' : 'Platform modules'}
        >
          {moduleCards(es)}
        </HeroCardCarousel>
      </div>
    </section>
  )
}
