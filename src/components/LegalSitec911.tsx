import { breadcrumbSchema } from '@/lib/schema'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Link } from '@/i18n/navigation'

/**
 * Combined "Condiciones de Uso" (Terms) + "Política de Privacidad" for the
 * 911 Michoacán emergency app. Responsible entity is Kabat-One Software Ltd.
 * The Spanish text is the governing version and is reproduced verbatim in
 * both the EN and ES routes (no unofficial translation of binding legal terms).
 * One-off page, not the reusable KabatOne Google Play template.
 */

const APP_NAME = '911 Michoacán'
const SLUG = 'sitec-911'
const DEVELOPER = 'Kabat-One Software Ltd.'
const ADDRESS = 'HaAlon 4 St., Kfar Netter, Israel'
const SUPPORT_EMAIL = 'support@kabatone.com'
const LAST_REVISED = '14 de Marzo, 2022 · v.2'

type Section =
  | { id: string; heading: string; paragraphs: string[] }
  | { id: string; heading: string; bullets: string[] }
  | { id: string; heading: string; terms: { term: string; def: string }[] }

const preamble: string[] = [
  'ESTOS TÉRMINOS DE USO («CONDICIONES DE USO» O «TÉRMINOS») CONSTITUYEN UN ACUERDO LEGAL QUE REGULA LA RELACIÓN COMERCIAL ENTRE USTED, UN INDIVIDUO (EL "USUARIO" O "USTED") Y KABAT-ONE SOFTWARE LTD. ("KABAT-ONE"), CON RESPECTO AL USO DE LA APLICACIÓN 911 MICHOACÁN (LA "APLICACIÓN").',
  'AL HACER CLIC EN EL BOTÓN "ACEPTAR" Y/O AL DESCARGAR, INSTALAR O UTILIZAR LA APLICACIÓN EN SU DISPOSITIVO MÓVIL ("DISPOSITIVO"), USTED CONFIRMA QUE HA LEÍDO Y COMPRENDIDO ESTOS TÉRMINOS Y LA POLÍTICA DE PRIVACIDAD DE KABAT-ONE (QUE SE INCORPORA POR LA PRESENTE REFERENCIA Y FORMA PARTE DE ESTOS TÉRMINOS), Y EL CONSENTIMIENTO DE ESTAR OBLIGADO POR LOS TÉRMINOS DE USO Y LA POLÍTICA DE PRIVACIDAD. CUALQUIER DESCARGA, INSTALACIÓN O USO DE LA APLICACIÓN, INCLUYENDO CUALQUIER VERSIÓN ACTUALIZADA DE LA APLICACIÓN, ESTÁ SUJETA A, Y PERMANECERÁ SUJETA A LAS CONDICIONES DE ESTOS TÉRMINOS, EN CUALQUIER MOMENTO.',
  'KABAT-ONE SE RESERVA EL DERECHO DE HACER CAMBIOS EN LOS TÉRMINOS, A SU ÚNICA Y ABSOLUTA DISCRECIÓN, AL PUBLICAR LOS TÉRMINOS MODIFICADOS. EL USO CONTINUADO DE LA APLICACIÓN POSTERIOR A LA PUBLICACIÓN DE TÉRMINOS ACTUALIZADOS POR KABAT-ONE CONSTITUYE LA ACEPTACIÓN DE CUALQUIER VERSIÓN MODIFICADA DE LOS TÉRMINOS.',
]

const termsSections: Section[] = [
  {
    id: 'definiciones',
    heading: 'Definiciones',
    terms: [
      { term: 'Acuerdo', def: 'significa que estos Términos pueden modificarse de vez en cuando por escrito.' },
      { term: 'Aplicación o App 911 Michoacán', def: 'significa una aplicación de servicios de emergencia global llamada 911 Michoacán. Mediante el uso de la comunicación de datos, ante la ocurrencia de un evento de emergencia (el «Evento de Emergencia») la Aplicación permite al usuario reportar directamente a los servicios de emergencia y/o agencias municipales y mantener un registro del Evento de Emergencia capturando fotografías / videos del Evento de Emergencia en tiempo real.' },
      { term: 'Kabat-One', def: `significa Kabat-One Software Ltd of ${ADDRESS}.` },
      { term: 'Propiedad intelectual', def: 'significa todos y cada uno de los derechos de cualquier naturaleza que surjan de, evidenciados por o asociados con patentes, desarrollos y descubrimientos (patentables o no), modelos de utilidad, registros de invenciones y aplicaciones de los mismos y todas las reediciones, divisiones, renovaciones, extensiones, provisionales, continuaciones y continuaciones en parte de las mismas, diseños registrados, marcas registradas y marcas de servicio, y todas las extensiones y renovaciones de las mismas, marcas comerciales y marcas de servicio no registradas, nombres comerciales y de clientes, diseños no registrados, nombres de dominio de Internet y direcciones de correo electrónico, derechos de diseño, nombres comerciales, imagen comercial, logotipos, fondo de comercio, derechos de topografía, derechos de invención, mejoras, secretos comerciales, información patentada, tecnología, software, código fuente, código objeto, datos técnicos, modelos de utilidad, derechos de bases de datos, conocimientos técnicos y derechos de autor (incluidos los derechos morales), registros de derechos de autor y aplicaciones para los mismos; solicitudes para cualquiera de los anteriores y los derechos, solicitar cualquiera de los anteriores en cualquier país; derechos bajo licencias, consentimientos, órdenes, estatutos o de otro modo en relación con lo anterior; derechos de igual o similar efecto o naturaleza que ahora subsisten; cualquier derecho correspondiente o equivalente a cualquiera de los anteriores, ya sea registrado o no, en cualquier parte del mundo; cualquier nombre, logotipo y otras marcas de identificación incluidas o asociadas con la Aplicación o cualquier documento relacionado, que identifique a Kabat-One o sus productos y el derecho a demandar por infracciones pasadas y futuras de cualquiera de los derechos anteriores.' },
      { term: 'Licencia', def: 'significa la licencia para la Aplicación otorgada por Kabat-One a Usted de conformidad y sujeta a los Términos del presente, como se detalla en el párrafo titulado «Concesión de licencia».' },
      { term: 'Persona', def: 'significa un individuo, corporación, sociedad, compañía de responsabilidad limitada, asociación, fideicomiso u otra entidad u organización, incluida una autoridad gubernamental.' },
    ],
  },
  {
    id: 'concesion-licencia',
    heading: 'Concesión de Licencia',
    paragraphs: [
      'Sujeto a los términos y condiciones de estos Términos, Kabat-One le otorga a Usted una licencia limitada, personal, no exclusiva, no asignable, revocable y no sublicenciable para usar una copia de la Aplicación en un Dispositivo que usted posee o controla, sólo para uso personal, todo de acuerdo con los términos y sujeto a las condiciones contenidas en estos Términos (la «Licencia»). Kabat-One se reserva todos los demás derechos sobre la Aplicación que no se otorgaron explícitamente en virtud de estos Términos. La Licencia está condicionada al total cumplimiento de las condiciones de estos Términos y será rescindida inmediatamente si usted incumple cualquiera de los términos del presente.',
      'Al utilizar la Aplicación, usted acepta cumplir con todas las leyes, estatutos, ordenanzas y reglamentos nacionales e internacionales que rigen el uso de dicha Aplicación. Sin limitar lo anterior y en reconocimiento de la naturaleza global de Internet, usted acepta cumplir con todas las reglas locales e internacionales con respecto a la conducta en línea y los contenidos aceptables.',
    ],
  },
  {
    id: 'restricciones',
    heading: 'Restricciones y prohibiciones',
    paragraphs: [
      'Usted reconoce que es mayor de 18 años y tiene el poder y la autoridad para aceptar estos Términos. Si es menor de 18 años y utiliza la Aplicación, reconoce que sus padres y/o su tutor legal han aceptado estos Términos en su nombre.',
      'Por la presente, usted se compromete a no utilizar la Aplicación de ninguna manera para: (i) Interferir, interrumpir, limitar o prevenir el uso de la Aplicación; (ii) Cargar contenido y/o información engañosa, falsa o dañina para Kabat-One; (iii) Cargar información abusiva, difamatoria o amenazante; (iv) Acosar o denunciar falsamente un incidente para Kabat-One y las agencias de seguridad; (v) Explotar comercialmente o hacer uso comercial de la Aplicación o cualquier información transmitida a través de ella; (vi) Realizar una acción contraria a la ley.',
      'A menos que esté expresamente permitido en estos Términos, por la presente acepta que no podrá, sin el consentimiento previo por escrito de Kabat-One: (i) usar, modificar o integrar la Aplicación en otro software, o crear trabajos derivados de cualquier parte de la Aplicación; (ii) vender, licenciar (o sublicenciar), arrendar, asignar, transferir, pignorar o compartir Sus derechos de acuerdo con estos Términos con cualquier otra persona; (iii) distribuir o copiar la Aplicación en beneficio de terceros; (iv) divulgar los resultados del desempeño de la Aplicación, o el uso de estos resultados para el desarrollo de una aplicación competidora; y/o (v) modificar, desensamblar, descompilar, realizar ingeniería inversa, actualizar o mejorar la Aplicación o intentar descubrir el código fuente de la Aplicación.',
      'Usted se compromete a abstenerse de cualquier intento de recopilar información y Contenido de usuario a través de la Aplicación, incluso a través de medios tecnológicos, operación o asistencia para el funcionamiento de una aplicación informática o por cualquier otro medio diseñado para escanear y/o copiar y/o recuperar y/o extraer información, para abstenerse de ejecutar y/o causar cualquier cambio en la Aplicación, incluido el contenido de otros usuarios, y no interferir con el código fuente de la Aplicación.',
      'Deberá informar a Kabat-One, de inmediato, sobre cualquier posibilidad de daño que pueda ocasionarse a otros usuarios y/o terceros y/o Kabat-One y/o de un incumplimiento existente o anticipado de la ley aplicable, debido y/o como consecuencia del uso de la Aplicación.',
    ],
  },
  {
    id: 'contenido-usuario',
    heading: 'Contenido del Usuario',
    paragraphs: [
      'Cualquier contenido informado por usted a las autoridades públicas a través de la Aplicación como parte de un evento, incluida su ubicación, video y audio, texto e imágenes de su Dispositivo («Contenido del usuario») irá acompañado de sus datos de contacto, según se proporcionó al instalar la aplicación.',
      'Usted se compromete a que no existe ninguna obligación legal y/o contractual y/o cualquier otra obligación que le impida cargar y/o publicar y/o transferir el Contenido del usuario y que dicho Contenido del usuario no infringe ninguna ley aplicable y no es en violación de cualquier derecho de cualquier tercero.',
      'Cualquier Contenido de usuario cargado por Usted será bajo Su única y exclusiva responsabilidad y Kabat-One no será responsable de ninguna manera por dicho Contenido de usuario.',
      'Usted será totalmente responsable por el Contenido de usuario cargado y/o compartido por Usted, incluyendo sin limitaciones por acto de difamación y/o violación de la privacidad y/o violación de derechos de propiedad y/o contractual y/o violación de un decreto judicial y/o cualquier otra violación, y usted exime expresamente a Kabat-One, incluidos sus representantes, empleados, gerentes y accionistas que actúan en su nombre («Representantes»), de toda responsabilidad en relación con ello.',
      'Por la presente, usted se compromete a indemnizar a Kabat-One y/o sus Representantes, inmediatamente después de su primera solicitud, por cualquier daño, lesión, pérdida, gasto, tarifa, lucro cesante, pérdida de datos, pérdida de uso y daño a la buena voluntad, en que puedan incurrir por cualquier reclamo y/o demanda de un tercero (incluidas las Autoridades), incluidos los honorarios legales, debido a la violación por su parte de estos Términos, en relación con Sus actividades a través de la Aplicación. La indemnización antes mencionada no derogará ningún recurso al que Kabat-One tenga derecho por cualquier ley aplicable.',
      'Usted reconoce y acepta que debe evaluar el riesgo de enviar Contenido de usuario antes de que se cargue y asumir todos los riesgos con respecto a la carga de dicho Contenido de usuario, y que en ningún caso Kabat-One será responsable de los costos o gastos de daños causados a un tercero por la carga de Contenido de usuario de dicho tercero; y por la presente usted exime a Kabat-One, total y completamente, incluidos sus Representantes, de cualquier responsabilidad por los costos o gastos de daños que se acumulen o puedan ser causados a cualquier tercero en relación con la publicación del Contenido de usuario.',
      'Kabat-One puede, a su entera discreción, negarse a permitirle compartir Contenido de usuario con cualquier autoridad sin la necesidad de recibir Su consentimiento o proporcionarle un aviso previo, en caso de que Kabat-One sospeche de una violación y/o riesgo de violación de las disposiciones de estos Términos, las disposiciones de la ley aplicable o los derechos de terceros y/o en caso de una solicitud de una autoridad competente y/o como resultado de razones técnicas, incluidos los cambios tecnológicos, o debido a la solicitud de la parte receptora, incluso si las copias de seguridad del Contenido del usuario no se guardan ni almacenan. Kabat-One también puede notificarle que no hay necesidad de dicho Contenido de usuario y, por lo tanto, no se cargará dicho Contenido de usuario.',
      'Usted reconoce que Kabat-One y/o las autoridades pueden usar el Contenido del usuario, a su entera y absoluta discreción, para cualquier propósito, y por la presente le otorga a Kabat-One y sus sucesores una licencia mundial, no exclusiva, perpetua, irrevocable, libre de regalías, sublicenciable y transferible para usar, copiar, reproducir, alterar, modificar, crear trabajos derivados de, distribuir, publicar, mostrar, ejecutar, transmitir, difundir o explotar de otra manera su Contenido de usuario sin limitación y sin el derecho a recibir ninguna compensación.',
      'Cuando carga Contenido de usuario a través de la Aplicación, otorga a la autoridad con la que elige compartir el Contenido de usuario una licencia perpetua, irrevocable y gratuita para usar y guardar dicho Contenido de usuario, así como Sus datos de contacto según lo proporcionado tras la instalación de la Aplicación, y declara que usted es el propietario de dicho Contenido de usuario y que dicho Contenido de usuario no pertenece a un tercero, sujeto a la ley aplicable.',
    ],
  },
  {
    id: 'propiedad-intelectual',
    heading: 'Propiedad y derechos de propiedad intelectual',
    paragraphs: [
      'Usted reconoce y confirma que la Aplicación y cualquier material relacionado con la misma, incluidos, entre otros, material, diseños de texto, software, música, video, gráficos y materiales contenidos en anuncios o mensajes que se le envíen o información comercial que le ofrezca Kabat-One, o que fueron creados o desarrollados por Kabat-One, son propiedad exclusiva de Kabat-One y/o están debidamente autorizados por terceros y permanecerán en la propiedad exclusiva de Kabat-One en todo momento. Todos los derechos de propiedad intelectual que existen y/o están incorporados en la Aplicación, y/o adjuntos, vinculados y/o que hacen referencia a la Aplicación, son propiedad exclusiva de Kabat-One y seguirán siendo propiedad exclusiva de Kabat-One como se indica.',
      'Estos Términos no le otorgan ningún derecho en la Aplicación y/o con respecto a ella, y/o en cualquier material que se le transfiera y/o en cualquier contenido, incluido el Contenido del usuario, sino solo un derecho limitado a ver los materiales proporcionados a Usted de acuerdo con estos Términos y las disposiciones de la ley aplicable. Nada de lo establecido en estos Términos constituye una renuncia a los derechos de propiedad intelectual de Kabat-One o de cualquier tercero bajo cualquier ley.',
    ],
  },
  {
    id: 'software-terceros',
    heading: 'Software de Terceros',
    paragraphs: [
      'Si la Aplicación incluye algún software que haya sido suministrado por terceros, entonces dicho software se proporciona «tal cual» sin garantía de ningún tipo, y dicho software estará sujeto a las limitaciones y condiciones que sean requeridas por dicho tercero.',
      'Por la presente, reconoce y acepta que estos Términos se celebran únicamente entre Usted y Kabat-One, y no con ningún proveedor de aplicaciones (por ejemplo, Apple, Google, Microsoft, etc.), y que dicho proveedor de aplicaciones no tendrá ninguna responsabilidad en relación con la Aplicación. Su uso de la Aplicación estará de acuerdo con los términos de uso del proveedor de la aplicación y estará sujeto a ellos además de estos Términos.',
    ],
  },
  {
    id: 'actualizacion-soporte',
    heading: 'Actualización, mantenimiento y soporte',
    paragraphs: [
      'Kabat-One, a su exclusivo criterio, puede actualizar la Aplicación de vez en cuando, electrónicamente (es decir, tiendas de aplicaciones) y automáticamente la Aplicación que está utilizando en Su Dispositivo. Por la presente, usted da su consentimiento para dicha actualización automática y acepta que estos Términos se aplican a todas esas actualizaciones.',
      'Kabat-One no tendrá la obligación de proporcionar soporte, mantenimiento, actualizaciones, modificaciones o nuevas versiones de la Aplicación.',
    ],
  },
  {
    id: 'descargo',
    heading: 'Descargo de responsabilidad',
    paragraphs: [
      'EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEY APLICABLE, LA APLICACIÓN SE PROPORCIONA «TAL CUAL» Y «SEGÚN DISPONIBILIDAD» CON TODAS LAS FALLAS, Y KABAT-ONE EXPRESAMENTE RENUNCIA A TODAS LAS GARANTÍAS, YA SEAN EXPRESAS, IMPLÍCITAS, ESTATUTARIAS O DE OTRO MODO, CON RESPECTO A LAS APLICACIONES, PERO SIN LIMITARSE A TODAS LAS GARANTÍAS, DEBERES O CONDICIONES IMPLÍCITAS DE COMERCIABILIDAD, CALIDAD, APTITUD PARA UN PROPÓSITO EN PARTICULAR, NO INFRACCIÓN Y GARANTÍAS QUE SURJAN DE UN CURSO DE TRATAMIENTO, USO O PRÁCTICA COMERCIAL. SIN LIMITACIÓN A LO ANTERIOR, KABAT-ONE NO OFRECE GARANTÍA NI COMPROMISO, Y NO HACE REPRESENTACIÓN DE NINGÚN TIPO, DE QUE LA APLICACIÓN CUMPLIRÁ CON SUS REQUISITOS, CUMPLIRÁ CON CUALQUIER RESULTADO, SERÁ COMPATIBLE CON CUALQUIER OTRO SOFTWARE, APLICACIONES, SISTEMAS O SERVICIOS, FUNCIONARÁ DE FORMA SEGURA O SIN INTERRUPCIÓN, CUMPLIRÁ CON CUALQUIER ESTÁNDAR DE RENDIMIENTO O FIABILIDAD O ESTARÁ LIBRE DE ERRORES.',
      'KABAT-ONE NO ASUME RESPONSABILIDAD POR CUALQUIER ERROR, OMISIÓN, INTERRUPCIÓN, ELIMINACIÓN, DEFECTO, RETRASO EN EL FUNCIONAMIENTO O TRANSMISIÓN, FALLA EN LA LÍNEA DE COMUNICACIONES, DESTRUCCIÓN O ACCESO NO AUTORIZADO O ALTERACIÓN DE CUALQUIER COMUNICACIÓN.',
      'USTED RECONOCE Y ACEPTA EXPRESAMENTE QUE LA APLICACIÓN PUEDE NO PROTEGERLE DE NINGÚN TIPO DE ATAQUE. ADEMÁS, RECONOCE Y ACEPTA QUE LA APLICACIÓN PUEDE NO FUNCIONAR EN DIFERENTES SITUACIONES, COMO (I) FALTA DE RECEPCIÓN (ÁREAS SUBTERRÁNEAS, ASCENSORES, ÁREAS AISLADAS Y SIMILARES); (II) DISFUNCIÓN DEL SERVIDOR; (III) USO DEL SMARTPHONE; (IV) LA APLICACIÓN Y POR LO TANTO NO PUEDE SER FIABLE.',
      'BAJO NINGUNA CIRCUNSTANCIA KABAT-ONE SERÁ RESPONSABLE DE CUALQUIER PÉRDIDA O DAÑO RESULTADO DEL USO O INCAPACIDAD DE USO O DE CUALQUIER RETRASO O FALTA DE FUNCIONAMIENTO EN LA APLICACIÓN. ALGUNAS JURISDICCIONES NO PERMITEN LA EXCLUSIÓN DE GARANTÍAS IMPLÍCITAS O LIMITACIONES DE LOS DERECHOS ESTATUTARIOS APLICABLES, POR LO QUE LA EXCLUSIÓN Y LIMITACIONES ANTERIORES PUEDEN NO APLICARSE EN SU CASO.',
    ],
  },
  {
    id: 'limitacion',
    heading: 'Limitación de responsabilidad',
    paragraphs: [
      'USTED RECONOCE Y ACEPTA EXPRESAMENTE QUE, EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEY, EL RIESGO TOTAL QUE SURJA DE SU ACCESO Y USO DE LA APLICACIÓN Y/O SERVICIOS PERMANECE CON USTED.',
      'ADEMÁS, RECONOCE Y ACEPTA QUE BAJO NINGUNA CIRCUNSTANCIA KABAT-ONE, SUS FUNCIONARIOS, DIRECTORES, EMPLEADOS O AGENTES SERÁN RESPONSABLES ANTE USTED O CUALQUIER OTRA PERSONA O ENTIDAD POR CUALQUIER DAÑO DIRECTO, INDIRECTO, INCIDENTAL, ESPECIAL, DAÑOS POR PÉRDIDA DE BENEFICIOS, BUENA VOLUNTAD, USO, DATOS, INTERRUPCIÓN DEL SERVICIO, DAÑO DE LA COMPUTADORA O FALLA DEL SISTEMA O EL COSTO DE LOS PRODUCTOS O SERVICIOS SUSTITUTOS (INCLUSO SI KABAT-ONE HA SIDO ADVERTIDO DE LA POSIBILIDAD DE TALES DAÑOS), RESULTANTES DE O CONEXOS CON ESTOS TÉRMINOS DE USO O POR EL USO O LA INCAPACIDAD PARA UTILIZAR LA APLICACIÓN O LOS SERVICIOS, YA SEA BASADO EN GARANTÍA, CONTRATO, AGRAVIO (INCLUYENDO NEGLIGENCIA) O DE OTRO MODO, Y SI UN RECURSO LIMITADO ESTABLECIDO EN ESTE DOCUMENTO NO HA CUMPLIDO SU PROPÓSITO ESENCIAL.',
      'USTED RECONOCE ESPECÍFICAMENTE QUE KABAT-ONE NO ES RESPONSABLE DE LA CONDUCTA ILEGAL DE OTROS TERCEROS, Y QUE EL RIESGO DE LESIONES DE LO ANTERIOR DEPENDE EN SU TOTALIDAD DE USTED. SI NO ESTÁ SATISFECHO CON ALGUNA PARTE DE LA APLICACIÓN, O CON ALGUNO DE ESTOS TÉRMINOS DE USO, SU ÚNICO Y EXCLUSIVO REMEDIO ES DEJAR DE UTILIZAR LOS SERVICIOS.',
      'EN CASO DE QUE SE DETERMINE QUE KABAT-ONE ES RESPONSABLE DE DAÑOS, COSTOS O GASTOS A CUALQUIER TERCERO, LA RESPONSABILIDAD TOTAL DE KABAT-ONE HACIA USTED CON RESPECTO A CUALQUIER PÉRDIDA O DAÑO DEL QUE KABAT-ONE SEA RESPONSABLE, YA SEA BASADO EN UNA ACCIÓN O RECLAMO EN EL CONTRATO, AGRAVIO (INCLUYENDO NEGLIGENCIA), INCUMPLIMIENTO DE OBLIGACIONES ESTATUTARIAS O DE OTRA MANERA QUE SURJA DE, O EN RELACIÓN CON ESTOS TÉRMINOS, ESTARÁ LIMITADO EN SU CONJUNTO A VEINTICINCO DÓLARES DE LOS ESTADOS UNIDOS ($25). ESTA LIMITACIÓN ES ACUMULATIVA Y NO POR RECLAMO. LAS LIMITACIONES DE DAÑOS ESTABLECIDAS ARRIBA SON ELEMENTOS FUNDAMENTALES DE ESTOS TÉRMINOS DE USO.',
      'CUALQUIER DEMANDA DE RECLAMO DE USTED CONTRA KABAT-ONE CON RESPECTO A ESTOS TÉRMINOS Y/O LA LICENCIA OTORGADA EN EL PRESENTE SE LEVANTARÁ EN UN PLAZO DE 3 MESES A PARTIR DE LA FECHA DE LA CAUSA DEL RECLAMO.',
    ],
  },
  {
    id: 'terminacion',
    heading: 'Terminación y efecto de terminación',
    paragraphs: [
      'Kabat-One puede rescindir la Licencia otorgada a Usted bajo estos Términos para usar la Aplicación en cualquier momento y por cualquier motivo. Sin perjuicio de lo mencionado anteriormente, su violación de los términos de estos Términos dará lugar a la terminación inmediata de la Licencia que se le proporcionó en virtud de estos Términos.',
      'Tras la terminación de la Licencia, dejará de utilizar la Aplicación y eliminará o destruirá cualquier información que tenga en su poder de forma electrónica, incluido el Contenido de usuario, que esté en su poder dentro del marco del uso de la Aplicación.',
    ],
  },
  {
    id: 'ley-jurisdiccion',
    heading: 'Ley Vigente; Jurisdicción',
    paragraphs: [
      'Estos Términos se interpretarán y regirán según las leyes del Estado de Israel. Las partes acuerdan que el lugar exclusivo para cualquier acción legal relacionada con el presente será en los tribunales de Tel Aviv Jaffa, Israel. Para la implementación de estos Términos y todas sus consecuencias, usted renuncia a sus derechos y privilegios bajo cualquier otra ley o sistema legal, como la ley del lugar de cumplimiento, según sea necesario para dar efecto a los términos y condiciones del presente.',
    ],
  },
  {
    id: 'indemnizacion',
    heading: 'Indemnización',
    paragraphs: [
      'Usted acepta indemnizar, defender y mantener indemne a Kabat-One y sus empresas matrices, afiliados, subsidiarias y cada uno de sus respectivos funcionarios, directores, empleados, agentes, distribuidores, asesores, consultores, subcontratistas, sucesores y cesionarios, de y contra cualquier pérdida, responsabilidad, reclamo o demanda, incluidos los honorarios razonables de abogados, hechos por cualquier tercero debido a o que surjan del uso de la Aplicación en violación de estos Términos o que surjan de un incumplimiento por su parte de estos Términos o cualquier incumplimiento de Sus declaraciones o garantías, incluso con respecto al Contenido de usuario que transfirió a través de la Aplicación.',
    ],
  },
  {
    id: 'diversas',
    heading: 'Diversas',
    terms: [
      { term: 'Acuerdo completo', def: 'Estos Términos establecen el acuerdo completo con respecto al objeto del mismo y reemplazan todas las representaciones, garantías, acuerdos, negociaciones, comunicaciones o entendimientos anteriores o contemporáneos, ya sea oral o por escrito. Los términos y condiciones de estos Términos reemplazarán los términos y condiciones de cualquier acuerdo de licencia de los productos de software que componen la Aplicación.' },
      { term: 'Divisibilidad', def: 'Si alguna cláusula de estos Términos se declara nula o inaplicable por cualquier tribunal de jurisdicción competente, dicha declaración no tendrá efecto sobre los términos restantes del presente.' },
      { term: 'Exención', def: 'Ninguna renuncia a cualquier término, disposición o condición de estos Términos, ya sea por conducta o de otro modo, en uno o más casos, se considerará o constituirá una renuncia a cualquier otro término, disposición o condición del presente, sea o no similar, ni dicha renuncia constituirá una renuncia continua de dicho término, disposición o condición del presente. Ninguna renuncia será vinculante a menos que la parte que realiza la renuncia la ejecute por escrito.' },
      { term: 'Avisos', def: `Todas las notificaciones se harán por escrito y se considerarán entregadas cuando se envíen por correo de primera clase o cuando se envíen por fax o correo electrónico a la última oficina postal, fax o dirección de correo electrónico conocida de cualquiera de las partes, respectivamente. Por la presente, usted da su consentimiento para recibir un aviso por correo electrónico. La dirección de Kabat-One para el aviso es ${ADDRESS}, ${SUPPORT_EMAIL}, Atención: Soporte.` },
      { term: 'Fuerza mayor', def: 'Ninguna de las partes será responsable, ni se considerará que ninguna de las partes infringe este Acuerdo, debido a cualquier incumplimiento de sus obligaciones en virtud de estos Términos (que no sea el incumplimiento de pago de los montos adeudados) como resultado de una causa fuera de su control.' },
      { term: 'No cesión', def: 'Usted no puede ceder estos Términos sin el consentimiento previo por escrito de Kabat-One. Kabat-One puede ceder este Acuerdo sin su consentimiento.' },
      { term: 'Encabezados de sección', def: 'Los títulos de las secciones se han incluido para facilitar la lectura únicamente y no se utilizarán en la interpretación de este Acuerdo.' },
    ],
  },
]

const privacySections: Section[] = [
  {
    id: 'pp-introduccion',
    heading: '1. Introducción',
    paragraphs: [
      'Esta política de privacidad (la «Política de privacidad» o «Política») rige el uso de la aplicación de software 911 Michoacán («Aplicación» o «App») para dispositivos móviles que fue creada por Kabat-One Software Ltd («Nosotros» o «nuestro»). La Aplicación permite a un usuario («usted», «su» o «ellos») reportar directamente a los servicios de emergencia y/o agencias municipales y mantener un registro y enriquecer el Evento de Emergencia tomando fotografías y/o videos de los eventos de emergencia.',
      'Esta Política fue diseñada para hacer revelaciones importantes sobre cómo recopilamos y usamos el contenido y la información de nuestros usuarios y cómo usar la aplicación para compartir dicha información.',
      'Al instalar o usar la Aplicación, usted reconoce que es mayor de 18 años y tiene el poder y la autoridad para aceptar el término de esta Política. Por favor, léalo atentamente. SI SE OBJETA A CUALQUIERA DE LOS TÉRMINOS QUE AQUÍ SE PROPORCIONAN, NO INSTALE NI USE LA APLICACIÓN.',
      'Nos reservamos el derecho de modificar o revisar periódicamente la Política; los cambios entrarán en vigor inmediatamente después de la publicación de la Política revisada. La última revisión se reflejará en el encabezado «Última revisión». El uso continuado de la Aplicación después de la publicación de dichas enmiendas constituye su reconocimiento y consentimiento de dichas enmiendas a la Política de Privacidad y su aceptación de estar sujeto a los términos de dichas enmiendas.',
    ],
  },
  {
    id: 'pp-que-info',
    heading: '2. ¿Qué tipo de información recopilamos?',
    paragraphs: [
      'Recopilamos datos e información de nuestros usuarios que identifica a un individuo o que, con un esfuerzo razonable, puede identificar a un individuo («Información personal»). Esto puede incluir el número de teléfono del usuario, los datos de ubicación, el identificador persistente del dispositivo (por ejemplo, IMEI) o cualquier otra información que envíe voluntariamente mediante el uso de la Aplicación, como almacenar cualquier información que nos proporcione de cualquier otra manera (es decir, ubicación de eventos, descripciones y el archivo adjunto que agrega a los eventos, interacciones de atención al cliente, etc.), el tipo de dispositivo móvil que usa, el ID de dispositivo único de su dispositivo móvil, su sistema operativo móvil e información sobre la forma en que usa la Aplicación. Para enviar los servicios de emergencia a la ubicación del evento, su dispositivo móvil deberá permitir que la aplicación 911 Michoacán acceda a la ubicación de su dispositivo.',
    ],
  },
  {
    id: 'pp-uso-info',
    heading: '3. ¿Cómo podemos utilizar la información que recopilamos?',
    paragraphs: [
      'Podemos usar y compartir información personal de la manera descrita en esta Política. Requerimos que el tercero acepte procesar dicha información de acuerdo con nuestra Política de Privacidad. Podemos utilizar la información para proporcionar los servicios a través de la aplicación, para mejorar y personalizar nuestra aplicación según sus necesidades y para identificar y autenticar su acceso a determinadas funciones de la aplicación. También podemos utilizar la información para monitorear y analizar tendencias, uso y actividades en relación con nuestra App.',
      'Enviaremos el evento a los servicios de emergencia relevantes y/o agencias municipales para manejar el evento informado desde la App.',
    ],
  },
  {
    id: 'pp-divulgacion',
    heading: '4. Divulgación de información',
    paragraphs: [
      'Podemos transferir o divulgar información a nuestras subsidiarias o proveedores de servicios que se encuentran en diferentes jurisdicciones en todo el mundo, con el propósito de: (a) almacenar o procesar dicha información en nuestro nombre o para ayudarnos con nuestras operaciones comerciales y para proporcionar y mejorar nuestra aplicación; (b) realizar investigaciones, diagnósticos técnicos, análisis o fines estadísticos; o (c) remitir informes a agencias y autoridades de emergencia de terceros para manejar los eventos informados.',
      'Podemos divulgar Información personal, o cualquier información que haya enviado a través de la Aplicación, si creemos que la divulgación de dicha información es útil o razonablemente necesaria para: (i) cumplir con cualquier ley, regulación, proceso legal o solicitud gubernamental aplicable; (ii) hacer cumplir nuestras políticas, incluidas las investigaciones de posibles violaciones de las mismas; (iii) investigar, detectar, prevenir o tomar medidas con respecto a actividades ilegales u otras irregularidades, sospecha de fraude o problemas de seguridad; (iv) para establecer o ejercer nuestros derechos de defensa frente a reclamaciones legales; (v) evitar daños a los derechos, la propiedad o la seguridad de nosotros, nuestros usuarios, usted mismo o cualquier tercero; (vi) con el propósito de colaborar con los organismos encargados de hacer cumplir la ley y/o en caso de que lo consideremos necesario para hacer cumplir la propiedad intelectual u otros derechos legales.',
      'Nosotros y nuestros socios de datos o clientes también podemos obtener información de otras fuentes y combinarla con la información que recopilamos a través de nuestra aplicación para identificarlo en otros dispositivos.',
    ],
  },
  {
    id: 'pp-terceros',
    heading: '5. Recopilación de información de terceros',
    paragraphs: [
      'Esta Política de privacidad no se aplica a las prácticas de las empresas que no poseemos o controlamos, ni a las personas que no empleamos ni administramos, incluidas las agencias o autoridades de emergencia o cualquier otro tercero al que podamos divulgar información según lo establecido en esta Política de privacidad.',
    ],
  },
  {
    id: 'pp-retencion',
    heading: '6. ¿Durante cuánto tiempo conservamos la información que recopilamos?',
    paragraphs: [
      'Retendremos la información que recopilamos durante el tiempo que sea necesario para proporcionar los servicios ofrecidos a través de la Aplicación y para cumplir con nuestras obligaciones legales, resolver disputas y hacer cumplir nuestros acuerdos. Podemos rectificar, reponer o eliminar información incompleta o inexacta, en cualquier momento y a nuestra propia discreción.',
    ],
  },
  {
    id: 'pp-seguridad',
    heading: '7. Seguridad',
    paragraphs: [
      'Tenemos mucho cuidado en implementar y mantener la seguridad de la aplicación y su información. Empleamos procedimientos y políticas estándar de la industria para garantizar la seguridad de la información de nuestros usuarios y evitar el uso no autorizado de dicha información. Aunque tomamos medidas razonables para salvaguardar la información, no podemos ser responsables de los actos de aquellos que obtienen acceso no autorizado o abusan de nuestra Aplicación, y no ofrecemos ninguna garantía, expresa, implícita o de otro tipo, de que impediremos dicho acceso.',
      `Si cree que su privacidad no se trató de acuerdo con nuestra política, o si alguna persona intentó abusar de nuestro servicio o actuó de manera inapropiada, comuníquese con nosotros directamente a ${SUPPORT_EMAIL}.`,
    ],
  },
  {
    id: 'pp-ninos',
    heading: '8. Niños',
    paragraphs: [
      `Si un padre o tutor se da cuenta de que su hijo nos ha proporcionado información sin su consentimiento, debe comunicarse con nosotros a: ${SUPPORT_EMAIL}.`,
    ],
  },
  {
    id: 'pp-contacto',
    heading: '9. ¿Cómo contactar con nosotros?',
    paragraphs: [
      `Si tiene alguna pregunta general sobre la información que recopilamos sobre usted y cómo la usamos, puede contactarnos enviando un correo a: ${SUPPORT_EMAIL}.`,
    ],
  },
]

function SectionBlock({ section }: { section: Section }) {
  return (
    <div id={section.id}>
      <h2 style={{
        fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
        fontSize: '24px', color: 'var(--white)',
        letterSpacing: '0.02em', marginBottom: '16px',
        paddingBottom: '12px', borderBottom: '1px solid var(--border)',
      }}>
        {section.heading}
      </h2>

      {'paragraphs' in section && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {section.paragraphs.map((p, i) => (
            <p key={i} style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.8 }}>{p}</p>
          ))}
        </div>
      )}

      {'bullets' in section && (
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0, margin: 0 }}>
          {section.bullets.map((bullet, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{
                width: '5px', height: '5px', borderRadius: '50%',
                background: 'var(--blue)', flexShrink: 0, marginTop: '9px',
                boxShadow: '0 0 6px rgba(59,130,246,0.5)',
              }} />
              <span style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.75 }}>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {'terms' in section && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {section.terms.map((t, i) => (
            <p key={i} style={{ fontSize: '16px', color: 'var(--dim)', lineHeight: 1.8 }}>
              <strong style={{ color: 'var(--white)', fontWeight: 700 }}>{t.term}</strong>
              {' — '}{t.def}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default function LegalSitec911({ es }: { es: boolean }) {
  const canonical = es
    ? `https://kabatone.com/es/legal/${SLUG}/`
    : `https://kabatone.com/legal/${SLUG}/`
  const home = es ? 'https://kabatone.com/es/' : 'https://kabatone.com/'

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: es ? 'Inicio' : 'Home', url: home },
          { name: 'Legal', url: es ? 'https://kabatone.com/es/legal/' : 'https://kabatone.com/legal/' },
          { name: APP_NAME, url: canonical },
        ])) }}
      />
      <div style={{ paddingTop: '70px', background: 'var(--bg)', color: 'var(--white)', minHeight: '100vh' }}>

        {/* ── BREADCRUMB ── */}
        <div style={{
          maxWidth: '900px', margin: '0 auto', padding: '20px 40px 0',
          display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap',
          fontFamily: 'DM Mono, monospace', fontSize: '11px',
          letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)',
        }}>
          <Link href="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
            {es ? 'Inicio' : 'Home'}
          </Link>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: 'var(--muted)' }}>Legal</span>
          <span style={{ opacity: 0.35 }}>/</span>
          <span style={{ color: 'var(--blue-light)' }}>{APP_NAME}</span>
        </div>

        {/* ── HERO ── */}
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 40px 40px' }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '11px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: 'var(--cyan)', marginBottom: '20px',
          }}>
            {es ? 'Legal · Aplicación de emergencias' : 'Legal · Emergency App'}
          </p>
          <h1 style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800,
            fontSize: 'clamp(38px, 5.5vw, 58px)', lineHeight: 0.98,
            letterSpacing: '-0.01em', color: 'var(--white)', marginBottom: '16px',
          }}>
            Condiciones de Uso y Política de Privacidad
          </h1>
          <p style={{
            fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600,
            fontSize: 'clamp(20px, 3vw, 28px)', color: 'var(--blue-light)',
            letterSpacing: '0.01em', marginBottom: '12px',
          }}>
            {APP_NAME}
          </p>
          <p style={{
            fontSize: '13px', color: 'var(--muted)',
            fontFamily: 'DM Mono, monospace', letterSpacing: '0.04em',
          }}>
            {es ? 'Desarrollador: ' : 'Developer: '}{DEVELOPER} · {ADDRESS}
          </p>
        </section>

        {/* ── PREAMBLE ── */}
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px 8px' }}>
          <div style={{
            padding: '24px 28px', background: 'rgba(255,255,255,0.02)',
            border: '1px solid var(--border-b)', borderRadius: '12px',
            display: 'flex', flexDirection: 'column', gap: '14px',
          }}>
            {preamble.map((p, i) => (
              <p key={i} style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.75 }}>{p}</p>
            ))}
          </div>
        </section>

        {/* ── PART 1 · TERMS ── */}
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 40px 0' }}>
          <p style={{
            fontFamily: 'DM Mono, monospace', fontSize: '11px',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: 'var(--cyan)', marginBottom: '32px',
          }}>
            {es ? 'Parte 1 · Condiciones de Uso' : 'Part 1 · Terms of Use'}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
            {termsSections.map((section) => (
              <SectionBlock key={section.id} section={section} />
            ))}
          </div>
        </section>

        {/* ── PART 2 · PRIVACY ── */}
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '72px 40px 40px' }}>
          <div style={{
            paddingTop: '48px', borderTop: '1px solid var(--border)',
          }}>
            <p style={{
              fontFamily: 'DM Mono, monospace', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: 'var(--cyan)', marginBottom: '12px',
            }}>
              {es ? 'Parte 2 · Política de Privacidad' : 'Part 2 · Privacy Policy'}
            </p>
            <p style={{
              fontSize: '13px', color: 'var(--muted)',
              fontFamily: 'DM Mono, monospace', letterSpacing: '0.04em',
              marginBottom: '40px',
            }}>
              {es ? 'Última revisión: ' : 'Last revised: '}{LAST_REVISED}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
              {privacySections.map((section) => (
                <SectionBlock key={section.id} section={section} />
              ))}
            </div>
          </div>

          {/* ── FOOTER NOTE ── */}
          <p style={{
            marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--border)',
            fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, fontStyle: 'italic',
          }}>
            {es
              ? `Para consultas relacionadas con estas Condiciones de Uso o la Política de Privacidad, contacte a ${DEVELOPER} en ${SUPPORT_EMAIL}.`
              : `For questions regarding these Terms of Use or the Privacy Policy, contact ${DEVELOPER} at ${SUPPORT_EMAIL}.`}
          </p>
        </section>

        <Footer es={es} />
      </div>
    </>
  )
}
