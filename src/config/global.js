export default {
  global: {
    componenteFormativo:
      'Servicios e identificación de necesidades al usuario en biblioteca.',
    descripcionCurso:
      'En esta unidad el aprendiz conocerá al usuario, razón de ser de la biblioteca, así mismo la clasificación y tipos de usuarios y un conjunto de técnicas y herramientas como web 2.0 y alfabetización informacional en la gestión del servicio al cliente, para encaminarse a la satisfacción de las necesidades que se demandan en el ciclo del servicio, impulsando el desarrollo sostenible.',
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
        titulo: 'Cliente o usuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Clasificación de clientes',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Población vulnerable',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Servicio al cliente y triángulo del servicio',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Momentos de verdad con el cliente y su ciclo',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Netiqueta y protocolo empresarial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Alfabetización informacional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Ciencia y conocimiento de información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Desarrollo sostenible',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: '<em>Web</em> 2.0. y referencia virtual',
        desarrolloContenidos: true,
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
      tema: 'Cliente o usuario',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Cliente.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4WIq433jNMA',
    },
    {
      tema: 'Netiqueta y protocolo empresarial',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2019). Netiqueta y comunicación en medios digitales.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nETS1sXMKbw',
    },
    {
      tema: 'Alfabetización informacional',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Alfabetización digital.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HBHsp9dZcPo',
    },
    {
      tema: 'Ciencia y conocimiento de la información',
      referencia:
        'Somos UMAZA. (2021). Alfabetización informacional que significa. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=VqNn-Ci_MGY',
    },
    {
      tema: 'Desarrollo Sostenible',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Objetivos de Desarrollo Sostenible',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=QmDctvoX0i4',
    },
  ],
  glosario: [
    {
      termino: 'Análisis',
      significado:
        'examen detallado de una cosa para conocer sus características o cualidades, o su estado, y extraer conclusiones, que se realiza separando o considerando por separado las partes que la constituyen.',
    },
    {
      termino: 'Comunicación asincrónica',
      significado:
        'comunicación que no se lleva en tiempo real, por el cual los usuarios envían una consulta y el bibliotecario le responde eventualmente. Por ejemplo, el correo electrónico, formulario electrónico y facsímil.',
    },
    {
      termino: 'Comunicación sincrónica',
      significado:
        'comunicación que se lleva a cabo en tiempo real. El usuario y el bibliotecario se comunican al mismo tiempo. Por ejemplo, <em>chat</em>, teléfono y videoconferencia',
    },
    {
      termino: 'Datos',
      significado:
        'información concreta sobre hechos, elementos, etc., que permite estudiarlos, analizarlos o conocerlos.',
    },
    {
      termino: 'Formulario <em>Web</em>',
      significado:
        'hoja electrónica que permite el ingreso de datos los cuales serán procesados a través de un servidor.',
    },
    {
      termino: 'Gestión',
      significado:
        'acción o trámite que se lleva a cabo para conseguir o resolver una situación. ',
    },
    {
      termino: 'Herramienta digital',
      significado:
        'paquetes informáticos que están en las computadoras, o en dispositivos electrónicos como celulares y tabletas, entre otros.',
    },
    {
      termino: 'Información',
      significado:
        'conjunto de datos, ya procesados y ordenados para su comprensión, que aportan nuevos conocimientos a un individuo o sistema sobre un asunto, materia, fenómeno o ente determinado.',
    },
    {
      termino: 'Referencia Virtual',
      significado:
        'servicio de referencia iniciado electrónicamente, a menudo en tiempo real, donde los usuarios emplean computadoras u otra tecnología de <em>internet</em> para comunicarse con los bibliotecarios, sin estar físicamente presentes. ',
    },
    {
      termino: 'Referencista',
      significado:
        'bibliotecario encargado del servicio de asistencia intelectual a los lectores, a fin de que estos puedan aprovechar racional y metódicamente los recursos de los que dispone la biblioteca.',
    },
  ],
  referencias: [
    {
      referencia:
        'Rendón, R., M. A., y Cruz, D., S., et l. (2011). Bibliotecología, archivística, documentación: intradisciplina, interdisciplina o transdisciplinariedad. UNAM, Centro Universitario de Investigaciones Bibliotecológicas',
      link:
        'https://libros.metabiblioteca.org/bitstream/001/380/8/978-607-02-0749-5.pdf',
    },
    {
      referencia:
        'Bawden, D. (2002). Revisión de los conceptos de alfabetización informacional y alfabetización digital. Anales de Documentación (5) ',
      link: 'https://revistas.um.es/analesdoc/article/view/2261/2251',
    },
    {
      referencia:
        'Río, J. (2008). Didáctica de la bibliotecología: teoría y principios desde la enseñanza de la ciencia. UNAM, Centro Universitario de Investigaciones Bibliotecológicas. ',
      link:
        'https://libros.metabiblioteca.org/bitstream/001/389/8/978-970-32-4583-3.pdf',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. SENA. (s. f.). Poblaciones vulnerables.',
      link: 'https://www.sena.edu.co/es-co/trabajo/Paginas/default.aspx',
    },
    {
      referencia: 'Albrecht, K. (2001). La excelencia del servicio”.',
      link: '',
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
        cargo: 'Responsable Equipo de Desarrollo Curricular',
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
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
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
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios -Regional Tolima',
      },
      {
        nombre: 'Magdi Khalifah',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
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
