export default {
  global: {
    componenteFormativo: 'Preparación y registro de información',
    descripcionCurso:
      'Este componente formativo aborda aspectos clave de la gestión de administración, registro de documentos digitales en las organizaciones, aplicación de las entidades de información digital, metadatos y software para el desarrollo eficiente. Mediante el estudio de este componente, el aprendiz afianzará sus conocimientos y habilidades relacionadas con alistamiento, clasificación, recolección y protocolos de gestión de información.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Entidades de información digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Alistamiento y preparación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Formatos, funcionalidad y características de contenidos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Clasificación digital y su normativa',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Procedimiento para la clasificación de información',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Metadatos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Criterios de diligenciamiento',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Herramientas electrónicas en la gestión de metadatos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Normas de seguridad de la información',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Criterios de organización en entidades de información digital',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Registro de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Técnicas de recolección y exportación de información',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Métodos de almacenamiento y consulta de información',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: '<em>Software</em> para registro de la información',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'Protocolos y relaciones en las herramientas de <em>software</em>',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Entidades de información digital.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). La tecnología en la información digital.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=puMO4kf6PRI',
    },
    {
      tema: 'Metadatos',
      referencia: 'Microaprendizaje: internet. (2019). Qué son los metadatos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=W9df022FHlE',
    },
    {
      tema: 'Registro de información.',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Administración y normativa de registros de información: introducción. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ytQ19oNM_Ro',
    },
  ],
  glosario: [
    {
      termino: 'Búsqueda',
      significado:
        'conjunto de procedimientos y operaciones que un usuario realiza para obtener la información que necesita.',
    },
    {
      termino: 'Búsqueda automatizada interactiva',
      significado:
        'técnica de búsqueda consistente en explotar un ordenador de manera que se desarrolle una serie de preguntas y respuestas alternas entre un usuario y el ordenador de manera parecida a un diálogo entre dos personas.',
    },
    {
      termino: 'Gestión de la Información (GI)',
      significado:
        'denominación convencional de un conjunto de procesos por los cuales se controla el ciclo de vida de la información, desde su obtención (por creación o captura), hasta su disposición final (su archivo o eliminación).',
    },
    {
      termino: 'Herramienta digital',
      significado:
        'paquetes informáticos que están en las computadoras, o en dispositivos electrónicos como celulares y tabletas, entre otros.',
    },
    {
      termino: '<em>Hardware</em>',
      significado:
        'conjunto de elementos físicos o materiales que constituyen una computadora o un sistema informático',
    },
    {
      termino: 'Información',
      significado:
        'conjunto de datos, ya procesados y ordenados para su comprensión, que aportan nuevos conocimientos a un individuo o sistema sobre un asunto, materia, fenómeno o ente determinado.',
    },
    {
      termino: 'Metadatos para la gestión de documentos',
      significado:
        'información estructurada o semiestructurada que permite la creación, gestión y uso de los documentos a lo largo del tiempo y entre diferentes dominios.',
    },
    {
      termino: 'Seguridad de la información',
      significado:
        'conjunto de medidas preventivas y reactivas de las organizaciones y sistemas tecnológicos que permiten resguardar y proteger la información buscando mantener la confidencialidad, la disponibilidad e integridad de datos.',
    },
    {
      termino: '<em>Software</em>',
      significado:
        'conjunto de programas y rutinas que permiten a la computadora realizar determinadas tareas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Archivo General de la Nación (2022). Guía para la formulación de un esquema de metadatos para la gestión de documentos.  ',
      link:
        'https://www.archivogeneral.gov.co/sites/default/files/Estructura_Web/5_Consulte/Recursos/Publicacionees/GuiaDeMetadatos.pdf',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación. (2022). Normas técnicas de la información y seguridad de la familia ISO 27000. Icontec',
      link:
        'https://www.icontec.org/servicio-educacion/modulares-de-educacion/',
    },
    {
      referencia:
        'Ministerio de Educación. (2022). Guía para la clasificación de la información.',
      link:
        'https://www.mineducacion.gov.co/1759/articles-407695_galeria_14.pdf',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y Comunicaciones - MinTIC. (2022). Entidades del sector. MinTIC. ',
      link:
        'https://www.mintic.gov.co/portal/inicio/Ministerio/Entidades-del-sector/',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y Comunicaciones - MinTIC. (2022). Interoperabilidad. MinTIC.  ',
      link:
        'https://www.mintic.gov.co/arquitecturati/630/w3-propertyvalue-8117.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Villalobos Barreto',
        cargo: 'Experto temático',
        centro: 'Sena Distrito Capital Grupo De Apoyo Administrativo - Cgi',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industrial, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
