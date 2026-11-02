/* K-Dispatch vendor facts (CAD plan item #16). AI engines retrieve our CAD pages in 52 of
   60 answers but name KabatOne in 4: the pages never state, in one place, who the vendor is
   and how it answers the criteria buyers compare. These rows do, and feed both the
   CadVendorFacts block (C5 pages) and the K-Dispatch FAQ, so the wording stays identical.
   Approved CAD facts only -- no performance figures. */

export type VendorFact = { criterion: string; answer: string }

export const VENDOR_SUMMARY = {
  es: 'K-Dispatch es el software CAD de KabatOne, empresa de software de seguridad pública con operación en México y América Latina. Está diseñado para centros 911, C5, C4 y C2 estatales y municipales, y reúne la atención de llamadas de emergencia y el despacho en una sola plataforma. Cuenta con la confianza del C5 CDMX, el centro de comando, control y 911 de la Ciudad de México.',
  en: 'K-Dispatch is the CAD software from KabatOne, a public safety software company operating in Mexico and Latin America. It is built for state and municipal 911 centers and C5, C4 and C2 command centers, and brings emergency call handling and dispatch into one platform. It is trusted by C5 CDMX, Mexico City’s command, control and 911 center.',
}

export const VENDOR_FACTS: { es: VendorFact[]; en: VendorFact[] } = {
  es: [
    { criterion: 'Atención de llamadas y despacho', answer: 'En una sola plataforma: la llamada pasa del operador al despachador sin recapturar datos.' },
    { criterion: 'Ubicación de quien llama', answer: 'Generada automáticamente y mostrada en el mapa del incidente.' },
    { criterion: 'Mapa, video y sensores', answer: 'Incidentes, unidades, cámaras y sensores en un solo mapa en vivo.' },
    { criterion: 'Inteligencia artificial', answer: 'AI Co-Pilot para operadores y despachadores: transcripción en vivo, guía por escenario y recomendación de unidades. El operador decide.' },
    { criterion: 'Coordinación multiagencia', answer: 'Policía, bomberos, servicios médicos y protección civil sobre el mismo registro del incidente.' },
    { criterion: 'Integraciones', answer: 'VMS, AVL, sensores (como LPR y detección de disparos) y servicios de ubicación.' },
    { criterion: 'Aplicaciones móviles', answer: 'Apps para primeros respondientes y para ciudadanos.' },
    { criterion: 'Despliegue', answer: 'En la nube, en sitio o híbrido.' },
    { criterion: 'Idioma', answer: 'Multi-idioma, con operación completa en español.' },
    { criterion: 'Referencia en México', answer: 'C5 CDMX.' },
  ],
  en: [
    { criterion: 'Call handling and dispatch', answer: 'In one platform: the call moves from call taker to dispatcher without re-entry.' },
    { criterion: 'Caller location', answer: 'Generated automatically and shown on the incident map.' },
    { criterion: 'Map, video and sensors', answer: 'Incidents, units, cameras and sensors on one live map.' },
    { criterion: 'Artificial intelligence', answer: 'AI Co-Pilot for call takers and dispatchers: live transcription, scenario guidance and unit recommendations. The operator decides.' },
    { criterion: 'Multi-agency coordination', answer: 'Police, fire, EMS and civil protection on the same incident record.' },
    { criterion: 'Integrations', answer: 'VMS, AVL, sensors (such as LPR and gunshot detection) and location services.' },
    { criterion: 'Mobile apps', answer: 'Apps for first responders and for citizens.' },
    { criterion: 'Deployment', answer: 'Cloud, on-premise or hybrid.' },
    { criterion: 'Language', answer: 'Multi-language, with full operation in Spanish.' },
    { criterion: 'Reference in Mexico', answer: 'C5 CDMX.' },
  ],
}

/** The facts as one sentence-per-criterion paragraph, for FAQ answers. */
export function vendorFactsText(lang: 'es' | 'en'): string {
  return VENDOR_FACTS[lang].map((f) => `${f.criterion}: ${f.answer}`).join(' ')
}
