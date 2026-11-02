/* Norma Técnica 9-1-1 v2.0 (SESNSP) CAD and GIS requirements, each with its clause number.
   Shared by the Norma checklist page and its printable self-assessment (CAD plan item #6). */

export const SOURCE = 'https://www.gob.mx/cms/uploads/attachment/file/895276/NT_CALLE_2023_II-2024_final.pdf'

export type Req = { clause: string; es: string; en: string; askEs: string; askEn: string }
export type Group = { titleEs: string; titleEn: string; items: Req[] }

export const GROUPS: Group[] = [
  {
    titleEs: 'Plataforma y disponibilidad',
    titleEn: 'Platform and availability',
    items: [
      { clause: '4.2', es: 'Sistema de operación crítica sobre hardware y software de alta disponibilidad, con servidores, bases de datos y redes redundantes.', en: 'A mission-critical system on high-availability hardware and software, with redundant servers, databases and networks.', askEs: '¿Cómo es la arquitectura redundante, en sitio y en la nube?', askEn: 'What is the redundant architecture, on-premise and in the cloud?' },
      { clause: '4.2.1', es: 'La falla de un disco debe ser transparente para la operación.', en: 'A disk failure must be transparent to operation.', askEs: '¿Qué pasa con la operación si falla un disco?', askEn: 'What happens to operations if a disk fails?' },
      { clause: '4.2.2', es: 'Funcionar sobre un sistema operativo comercial o derivado de un desarrollo propio.', en: 'Run on a commercial operating system, or one derived from in-house development.', askEs: '¿Sobre qué sistemas operativos corre el servidor y las estaciones?', askEn: 'Which operating systems do the server and workstations run on?' },
      { clause: '4.2.3', es: 'Base de datos comercial no propietaria, que permita cambiar la estructura de las tablas sin interrumpir el sistema.', en: 'A commercial, non-proprietary database whose table structure can change without interrupting the system.', askEs: '¿Qué motor de base de datos usa y se puede modificar en operación?', askEn: 'Which database engine, and can its schema change while live?' },
      { clause: '4.2.4', es: 'Poder respaldarse aun estando en operación.', en: 'Can be backed up while in operation.', askEs: '¿Cómo y cada cuánto se respalda sin detener el servicio?', askEn: 'How and how often is it backed up without stopping service?' },
    ],
  },
  {
    titleEs: 'Integraciones que el CAD debe tener',
    titleEn: 'Integrations the CAD must have',
    items: [
      { clause: '4.2.5.1', es: 'Mapa gráfico integrado en línea con incidentes, puntos de videovigilancia y unidades con GPS.', en: 'A live integrated map showing incidents, video surveillance points and GPS units.', askEs: '¿El mismo mapa muestra incidentes, cámaras y unidades en tiempo real?', askEn: 'Does one map show incidents, cameras and units in real time?' },
      { clause: '4.2.5.2', es: 'Integración con el conmutador telefónico por CTI, preparado para recibir ANI y ALI.', en: 'CTI integration with the phone switch, ready to accept ANI and ALI.', askEs: '¿Con qué conmutadores se integra y cómo recibe número y ubicación?', askEn: 'Which phone switches does it integrate with, and how does it receive number and location?' },
      { clause: '4.2.5.3', es: 'Integración con el sistema de grabación de voz.', en: 'Integration with the voice recording system.', askEs: '¿La grabación queda ligada al incidente?', askEn: 'Is the recording linked to the incident?' },
      { clause: '4.2.5.4', es: 'Integración con el sistema de localización vehicular (AVL).', en: 'Integration with automatic vehicle location (AVL).', askEs: '¿Qué AVL soporta y con qué frecuencia actualiza posiciones?', askEn: 'Which AVL systems, and how often do positions update?' },
      { clause: '4.2.5.5', es: 'Integración con el sistema de videovigilancia.', en: 'Integration with the video surveillance system.', askEs: '¿Con qué VMS se integra y abre la cámara desde el incidente?', askEn: 'Which VMS platforms, and can operators open a camera from the incident?' },
      { clause: '4.2.5.6', es: 'Interfaces para intercambiar información con otros sistemas CAD y con las bases de datos del IPH.', en: 'Interfaces to exchange information with other CAD systems and with the IPH (police report) databases.', askEs: '¿Cómo intercambia datos con otro CAD y con el IPH?', askEn: 'How does it exchange data with another CAD and with the IPH?' },
      { clause: '4.2.5.7', es: 'Ver las emergencias en teléfonos inteligentes o tabletas, con su ubicación en un mapa.', en: 'Emergencies visible on smartphones or tablets, with their location on a map.', askEs: '¿Qué ve la unidad en campo en su dispositivo?', askEn: 'What does the field unit see on its device?' },
      { clause: '4.2.5.8', es: 'Almacenar la información con la nomenclatura del Catálogo Nacional de Incidentes de Emergencia vigente.', en: 'Store information using the current National Catalogue of Emergency Incidents (CNIE) nomenclature.', askEs: '¿Clasifica de forma nativa con el catálogo nacional vigente?', askEn: 'Does it classify natively with the current national catalogue?' },
      { clause: '4.2.5.9', es: 'Apoyo al operador para dar primeros auxilios por teléfono, con los protocolos emitidos por el SESNSP.', en: 'Support for operators giving telephone first aid, using the SESNSP-issued protocols.', askEs: '¿Incluye los protocolos de primeros auxilios del SESNSP?', askEn: 'Does it include the SESNSP first-aid protocols?' },
      { clause: '4.2.5.10', es: 'Conexión con los arcos carreteros.', en: 'Connection to highway arches (licence-plate reading).', askEs: '¿Recibe alertas de los arcos carreteros en el incidente?', askEn: 'Does it receive highway-arch alerts into the incident?' },
    ],
  },
  {
    titleEs: 'Apoyo a la toma de decisiones',
    titleEn: 'Decision support',
    items: [
      { clause: '4.2.6', es: 'Funcionalidades que mejoren los tiempos de respuesta integrando plataformas de apoyo e información para decidir en tiempo real.', en: 'Features that improve response times by integrating support platforms and information for real-time decisions.', askEs: '¿Qué recomienda el sistema al operador y quién decide?', askEn: 'What does the system recommend to the operator, and who decides?' },
    ],
  },
  {
    titleEs: 'Sistema de información geográfica (GIS)',
    titleEn: 'Geographic information system (GIS)',
    items: [
      { clause: '4.8.1', es: 'Un GIS vinculado o integrado al CAD.', en: 'A GIS linked to or integrated with the CAD.', askEs: '¿El GIS es parte del CAD o un sistema aparte?', askEn: 'Is the GIS part of the CAD or a separate system?' },
      { clause: '4.8.2', es: 'Plataforma vectorial o cartografía web en tiempo real.', en: 'A vector platform or real-time web mapping.', askEs: '¿Qué cartografía usa y quién la actualiza?', askEn: 'Which mapping does it use, and who updates it?' },
      { clause: '4.8.5', es: 'Capas mínimas: entidad federativa, municipio, colonias, calles y sitios de interés.', en: 'Minimum layers: state, municipality, neighbourhoods (colonias), streets and points of interest.', askEs: '¿Incluye las capas hasta colonia?', askEn: 'Does it include layers down to colonia level?' },
      { clause: '4.8.6', es: 'Datos compatibles con formatos estándar como SHP, KML, TAB, DXF o GML.', en: 'Data compatible with standard formats such as SHP, KML, TAB, DXF or GML.', askEs: '¿Qué formatos importa y exporta?', askEn: 'Which formats does it import and export?' },
      { clause: '4.8.7', es: 'Búsqueda por dirección con campos específicos.', en: 'Search by address with specific fields.', askEs: '¿Cómo busca una dirección mexicana incompleta?', askEn: 'How does it search an incomplete Mexican address?' },
      { clause: '4.8.8', es: 'Generar mapas temáticos a medida.', en: 'Generate custom thematic maps.', askEs: '¿Puede generar mapas de calor por tipo de incidente?', askEn: 'Can it produce heat maps by incident type?' },
    ],
  },
]
