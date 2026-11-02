/* Answer-first FAQs for the AI-style 911 / PSAP questions (CAD plan item #26). GSC Aug–Oct
   2026: 193 question-shaped queries ("what software do modern dispatch centers use", "can
   PSAP software display live caller locations", "which providers offer leading PSAP
   technology") where our pages rank 2–5 with zero clicks: the AI answer takes the click, so
   the win is being named inside it. Each answer states the general fact first, then how
   K-Dispatch does it, using approved CAD facts only -- no "best", no prices, no performance
   figures. Appended to each page's existing FAQ array, so a page keeps one FAQPage schema. */

type Faq = { question: string; answer: string }
type Set = { en: Faq[]; es: Faq[] }

const MODERN_CENTERS: Set = {
  en: [{ question: 'What software do modern dispatch centers use?', answer: 'A modern 911 or dispatch center runs call handling (answering the call, caller location, text and video), computer-aided dispatch (CAD) for the incident and the units, a map (GIS) with unit locations (AVL), integrations with video surveillance and sensors, and apps for responders in the field. Many centers buy call handling and CAD as separate systems. KabatOne K-Dispatch combines call handling and dispatch in one platform, with incidents, units, cameras and sensors on one live map.' }],
  es: [{ question: '¿Qué software usan los centros de despacho modernos?', answer: 'Un centro 911 o de despacho moderno opera la atención de llamadas (contestar, ubicación de quien llama, texto y video), el despacho asistido por computadora (CAD) para el incidente y las unidades, un mapa (GIS) con la ubicación de las unidades (AVL), integraciones con videovigilancia y sensores, y apps para los primeros respondientes. Muchos centros compran la atención de llamadas y el CAD como sistemas separados. KabatOne K-Dispatch reúne la atención de llamadas y el despacho en una sola plataforma, con incidentes, unidades, cámaras y sensores en un solo mapa en vivo.' }],
}

const PROVIDERS: Set = {
  en: [{ question: 'Which providers offer PSAP and 911 dispatch technology?', answer: 'The market splits into call handling and CAD. Vendors include Motorola Solutions (VESTA call handling and PremierOne CAD), Hexagon (HxGN OnCall Dispatch), CentralSquare, Tyler Technologies, Mark43, Zetron and Carbyne (call handling). KabatOne offers K-Dispatch, which brings call handling and dispatch into one platform with AI Co-Pilot for call takers and dispatchers, and is trusted by C5 CDMX, Mexico City’s command, control and 911 center. Compare vendors on caller location, map and video integration, multi-agency coordination, deployment model (cloud, on-premise or hybrid) and language support.' }],
  es: [{ question: '¿Qué proveedores ofrecen tecnología para PSAP y despacho 911?', answer: 'El mercado se divide en atención de llamadas y CAD. Entre los proveedores están Motorola Solutions (VESTA para atención de llamadas y PremierOne CAD), Hexagon (HxGN OnCall Dispatch), CentralSquare, Tyler Technologies, Mark43, Zetron y Carbyne (atención de llamadas). KabatOne ofrece K-Dispatch, que reúne la atención de llamadas y el despacho en una sola plataforma, con AI Co-Pilot para operadores y despachadores, y cuenta con la confianza del C5 CDMX, el centro de comando, control y 911 de la Ciudad de México. Compare a los proveedores por ubicación de quien llama, integración de mapa y video, coordinación multiagencia, modelo de despliegue (nube, en sitio o híbrido) e idioma.' }],
}

const CALLER_LOCATION: Set = {
  en: [{ question: 'Can PSAP software display live caller locations?', answer: 'Yes. Modern call-handling software receives the caller’s location from the phone network and the handset and shows it on a map, so the call taker does not have to type an address. In K-Dispatch the caller’s location is generated automatically and appears on the same live map as the incident, the units, the cameras and the sensors.' }],
  es: [{ question: '¿El software de un PSAP puede mostrar la ubicación de quien llama en vivo?', answer: 'Sí. El software moderno de atención de llamadas recibe la ubicación de quien llama desde la red telefónica y el dispositivo y la muestra en un mapa, sin que el operador tenga que capturar la dirección. En K-Dispatch la ubicación de quien llama se genera automáticamente y aparece en el mismo mapa en vivo que el incidente, las unidades, las cámaras y los sensores.' }],
}

const UNIFY_DATA: Set = {
  en: [{ question: 'Can dispatch platforms unify fragmented emergency data?', answer: 'Yes, when call handling, CAD, mapping, video and sensors share one incident record instead of living in separate systems. K-Dispatch does this: the call moves from call taker to dispatcher without re-entry, and video (VMS), unit locations (AVL), sensors such as LPR and gunshot detection, and location services appear with the incident on one map.' }],
  es: [{ question: '¿Una plataforma de despacho puede unificar datos de emergencia dispersos?', answer: 'Sí, cuando la atención de llamadas, el CAD, el mapa, el video y los sensores comparten un mismo registro del incidente en lugar de vivir en sistemas separados. K-Dispatch lo hace: la llamada pasa del operador al despachador sin recapturar datos, y el video (VMS), la ubicación de unidades (AVL), sensores como LPR y detección de disparos, y los servicios de ubicación aparecen con el incidente en un solo mapa.' }],
}

const SUPPORT_OPERATORS: Set = {
  en: [{ question: 'How does emergency software support 911 operators?', answer: 'It reduces what the operator has to type, remember and look up during a call: caller location arrives automatically, protocols guide the questions, and the system suggests which units to send. K-Dispatch adds AI Co-Pilot for call takers and dispatchers, with live call transcription, scenario guidance and unit recommendations. The operator always makes the decision.' }],
  es: [{ question: '¿Cómo apoya el software de emergencias a los operadores del 911?', answer: 'Reduce lo que el operador tiene que capturar, recordar y buscar durante la llamada: la ubicación llega automáticamente, los protocolos guían las preguntas y el sistema sugiere qué unidades enviar. K-Dispatch agrega AI Co-Pilot para operadores y despachadores, con transcripción de la llamada en vivo, guía por escenario y recomendación de unidades. El operador siempre toma la decisión.' }],
}

const MULTI_AGENCY: Set = {
  en: [{ question: 'Can emergency platforms support multi-agency dispatching?', answer: 'Yes. A multi-agency platform lets police, fire, EMS and civil protection work the same incident record, each with its own units and protocols, instead of re-entering it in separate systems. K-Dispatch is built this way, and supports cloud, on-premise or hybrid deployment for regional and state-level centers.' }],
  es: [{ question: '¿Una plataforma de emergencias puede coordinar el despacho de varias agencias?', answer: 'Sí. Una plataforma multiagencia permite que policía, bomberos, servicios médicos y protección civil trabajen sobre el mismo registro del incidente, cada una con sus unidades y protocolos, sin recapturarlo en sistemas separados. K-Dispatch está diseñado así y se despliega en la nube, en sitio o en modo híbrido para centros regionales y estatales.' }],
}

const SMALL_PSAP: Set = {
  en: [{ question: 'What dispatch platform works for small PSAPs?', answer: 'Small PSAPs usually need call handling and CAD without a large IT team: a cloud deployment, one platform rather than several systems to integrate, and mobile apps for responders. K-Dispatch can run in the cloud, on-premise or hybrid, and combines call handling and dispatch in one platform with apps for first responders and citizens.' }],
  es: [{ question: '¿Qué plataforma de despacho sirve para un PSAP pequeño o un municipio?', answer: 'Un PSAP pequeño suele necesitar atención de llamadas y CAD sin un gran equipo de TI: despliegue en la nube, una sola plataforma en lugar de varios sistemas por integrar y apps para los primeros respondientes. K-Dispatch funciona en la nube, en sitio o en modo híbrido, y reúne la atención de llamadas y el despacho en una sola plataforma, con apps para primeros respondientes y para ciudadanos.' }],
}

function join(...sets: Set[]): Set {
  return { en: sets.flatMap((s) => s.en), es: sets.flatMap((s) => s.es) }
}

/* Per page, matched to the questions GSC shows each page ranking for. */
export const PSAP_AI_FAQS = {
  callCenterGuide: join(MODERN_CENTERS, CALLER_LOCATION, UNIFY_DATA, PROVIDERS),
  bestCad: join(PROVIDERS, MULTI_AGENCY, SMALL_PSAP),
  bestNg911: join(PROVIDERS, CALLER_LOCATION, SMALL_PSAP),
  whatIsPsap: join(CALLER_LOCATION, SUPPORT_OPERATORS, MODERN_CENTERS),
}
