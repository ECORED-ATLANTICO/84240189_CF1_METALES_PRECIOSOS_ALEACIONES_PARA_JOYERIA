export default {
  global: {
    Name: 'Metales, insumos y cálculos para aleaciones',
    Description:
      'Este componente formativo aborda fundamentos teóricos y prácticos de los metales, insumos y cálculos para aleaciones. Explora propiedades, materiales de fundición, piezas de joyería y operaciones matemáticas aplicadas. Permite al aprendiz reconocer insumos, proyectar cantidades de metal y aplicar criterios técnicos para formular aleaciones según requerimientos del cliente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Metales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y clases',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Propiedades y aplicaciones',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Origen, afinación y recuperación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Simbología',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Merma',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto y cálculo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Formatos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Insumos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto y clases',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Cálculo',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Materiales e insumos para fundición',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Clases y tipos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Características',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Piezas para joyería',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto y clases',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Características',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Técnicas de elaboración',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Matemática básica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Operaciones fundamentales',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Porcentajes y regla de tres',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Unidades de medida',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Longitud',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Masa',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Volumen',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Instrumentos de peso',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Concepto y clases',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Manejo',
            hash: 't_8_2',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema: 'Metales',
      referencia:
        'Artesanías de Colombia. (2013). <em>Referencial nacional de joyería. Artesanías de Colombia.</em>',
      tipo: 'PDF',
      link:
        'https://repositorio.artesaniasdecolombia.com.co/bitstream/001/2786/1/INST-D%202013.%20190.pdf',
    },
    {
      tema: 'Piezas para joyería',
      referencia:
        'Química en Casa. (2025). <em>Metales usados en joyería: ciencia, belleza y aleaciones.</em>',
      tipo: 'Articulo',
      link:
        'https://quimicaencasa.com/metales-usados-en-joyeria-ciencia-belleza-y-aleaciones/',
    },
  ],
  glosario: [
    {
      termino: 'Aleación',
      significado:
        'Mezcla homogénea de dos o más metales que se combinan para modificar propiedades como dureza, color o punto de fusión, fundamental para obtener materiales adecuados para joyería.',
    },
    {
      termino: 'Calado',
      significado:
        'Técnica manual que consiste en retirar partes de una lámina metálica con una segueta fina para crear diseños abiertos o decorativos en piezas de joyería.',
    },
    {
      termino: 'Engaste',
      significado:
        'Método de fijación de gemas utilizando la presión del metal, permitiendo asegurar piedras en diferentes tipos de monturas.',
    },
    {
      termino: 'Fundente',
      significado:
        'Sustancia utilizada en fundición o soldadura para limpiar, proteger y facilitar la fluidez del metal fundido, mejorando la calidad del vaciado.',
    },
    {
      termino: 'Kilate (K)',
      significado:
        'Unidad que expresa la pureza del oro, donde 24K corresponde a oro puro; se convierte a milésimas para cálculos de ley en aleaciones.',
    },
    {
      termino: 'Laminado',
      significado:
        'Proceso mecánico que reduce el espesor de un metal al pasarlo entre rodillos, obteniendo láminas utilizadas para fabricar piezas planas o estructurales.',
    },
    {
      termino: 'Ley (milésimas)',
      significado:
        'Sistema de medición de pureza metálica expresado en mil partes por mil; por ejemplo, 750 corresponde al 75 % de oro fino en una aleación.',
    },
    {
      termino: 'Merma',
      significado:
        'Pérdida inevitable de material durante procesos como fundición, corte o pulido; se calcula en porcentaje para controlar el rendimiento del metal.',
    },
    {
      termino: 'Porcentaje de aleación',
      significado:
        'Cálculo que determina la cantidad proporcional de cada metal que debe mezclarse para obtener una composición específica según color, dureza o ley requerida.',
    },
    {
      termino: 'Regla de tres',
      significado:
        'Método matemático utilizado para ajustar proporciones cuando cambia el peso total de una pieza o para escalar recetas de aleaciones manteniendo relaciones directas.',
    },
    {
      termino: 'Trefilado',
      significado:
        'Proceso que reduce el diámetro de un metal al pasarlo por una serie de orificios calibrados, permitiendo obtener hilos para cadenas, aros y estructuras finas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Anillos de Compromiso. (s. f.). <em>Metales preciosos explicados en breve</em>.',
      link:
        'https://www.anillosdecompromiso.es/pdf/es/metales-preciosos-explicados-enx-breve.pdf',
    },
    {
      referencia:
        'Escuela de Joyería del Atlántico. (2020). <em>Metales y aleaciones en joyería</em> (Documento técnico).',
      link:
        'https://www.scribd.com/document/500955405/METALES-PRECIOSOS-Y-ALEACIONES-PARA-JOYERIA',
    },
    {
      referencia:
        "Institut français d'études andines. (2020). <em>El trabajo de los metales preciosos en el área andina: aportes arqueométricos</em>.",
      link: 'https://books.openedition.org/ifea/13150',
    },
    {
      referencia:
        'Lleras Pérez, R. (2024). <em>Joyas de los Andes: Metales preciosos y orfebrería ancestral</em>. Banco Santander.',
      link:
        'https://banco.santander.cl/uploads/000/047/459/c82cd973-6163-46dc-84b7-5d9e47616bbd/original/Joyas-de-los-Andes-1.pdf',
    },
    {
      referencia:
        'Rodríguez, C. (s.f.). <em>Manual de técnicas y procesos básicos de joyería I</em>. Scribd.',
      link:
        'https://es.scribd.com/document/741581815/Manual-de-Te-cnicas-y-Procesos-Ba-sicos-de-Joyeri-a-I',
    },
    {
      referencia:
        'Trujillo, C. (2013). <em>Orfebrería en América Latina: métodos, historia y tradición. Cuadernos del Centro de Estudios de Diseño y Comunicación</em>, (46), 115–153.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/7370102.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Heydy Cristina González García',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
