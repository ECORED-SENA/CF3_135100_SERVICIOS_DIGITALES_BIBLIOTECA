<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Registro de información

    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade")
        p El registro de información digital es el proceso de relacionar o redactar los datos de forma virtual, dejando evidencia de sucesos, actividades o programaciones, con el propósito de crear una fuente de consulta llamada #[span.txt--orange.bold base de datos].
        p Esta actividad se corresponde con las necesidades que las empresas tienen de llevar un control en sus procesos, por ejemplo, en la venta de un producto al generar registro de inventario de salida y entrada de dinero, como también en una biblioteca al dejar registro del préstamo de un libro.
        .bg--darkOrange.p-4.br_01(data-aos="zoom-in")
          .row  
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/warning_01A.svg", alt="alt").img85
            .col
              h5.txt--brown ¡Importance!
              p.mb-0 El registro de información permite dejar evidencia de los sucesos diarios o eventuales en una organización, los cuales pueden servir de consulta para la toma de decisiones o como comprobante de las actividades y gestión con los usuarios.
      .col-lg-5(data-aos="flip-right")
        figure
          img(src="@/assets/curso/temas/t3/t3_01.svg", alt="alt")

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 3.1 Técnicas de recolección y exportación de información

    .row.justify-content-center
      .col-lg-5(data-aos="flip-left")
        figure
          img(src="@/assets/curso/temas/t3/t3_02.svg", alt="alt")
      .col-lg-7
        p(data-aos="fade") Las técnicas de importación y exportación de la información se pueden generar por medio de diferentes herramientas específicas para cada caso: entrevistas, encuestas o grupos focales cuando, por ejemplo, se trata de importar o recolectarla. Así mismo, cuando la intención es exportarla se acude a redes de conexión, circuitos o #[em software] especializados.
        p De las técnicas de recolección más comunes y usadas se pueden mencionar las siguientes.

        TabsA.color-acento-contenido(data-aos="zoom-in")
          .bg--darkGray.p-5.br_01(titulo="Encuestas")
            h4 Encuestas
            p Preguntas de tipo cualitativo que responden a necesidades de información de la biblioteca: experiencia, servicio, otras. 

          .bg--darkGray.p-5.br_01(titulo="Entrevistas")
            h4 Entrevistas
            p Interacción directa entre entrevistador y entrevistado. Se hacen preguntas estructuradas, o no, para obtener información esperada sobre cierto asunto.    

          .bg--darkGray.p-5.br_01(titulo="Cuestionario")
            h4 Cuestionario
            p Herramienta usada para obtener datos cuantitativos como calificar las instalaciones de la biblioteca o medir nivel de conocimiento adquirido por los usuarios.

          .bg--darkGray.p-5.br_01(titulo="Observación")
            h4 Observación
            p Dar una mirada al entorno de la comunidad, sus hábitos, realidad, cultura, según la necesidad de información.

          .bg--darkGray.p-5.br_01(titulo="Comunidad en línea")
            h4 Comunidad en línea
            p Información que se alcanza por medio de interacciones en las redes sociales y comunidades de la red.

          .bg--darkGray.p-5.br_01(titulo="Grupos focales")
            h4 Grupos focales
            p Se utiliza con frecuencia dentro de las comunidades: educativas, religiosas, juntas de acción comunal y demás.

    p(data-aos="fade").mb-5 Así mismo, para el reconocimiento de las técnicas de exportación de la información, usada por las bibliotecas y demás empresas u organizaciones, se emplean las siguientes:
    
    .bg_slyder_01.p-5.mb-5(data-aos="zoom-in")
      .row.justify-content-center.align-items-center
        .col-lg-7
          .bg--white.br_01.p-4
            SlyderA(tipo="b")
              .row
                .col-12
                  h5.txt--orange Redes en conexión
                  p.mb-4 Se comparte mediante canales múltiples virtuales a diferentes usuarios que tienen los mismos permisos de acceso a una red específica, sea pública o privada.
                  
              .row
                .col-12
                  h5.txt--orange En paquetes
                  p.mb-4 Se comparten de forma fragmentada, es decir, no se envía la información completa, solo lo necesario.

              .row
                .col-12
                  h5.txt--orange Por circuitos
                  p.mb-4 Se realiza por medio de llamada y se puede compartir la información una vez se establece conexión con el destinatario.

              .row
                .col-12
                  h5.txt--orange Por #[em hardware]
                  p.mb-4 Se comparte la información por dispositivos de memoria externos que se conectan al equipo fuente como USB, discos duros y demás.

              .row
                .col-12
                  h5.txt--orange Por #[em software]
                  p.mb-4 Se comparte a través de programas que dan soporte a los equipos fuente de información, instalados o en línea.

        .col-lg-5.d-none.d-lg-flex
          figure
            img(src="@/assets/curso/temas/t3/t3_03.png", alt="alt")

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-12
        .bg--darkOrange.br_01.py-4.pe-4
          .row.align-items-center  
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/warning_02.svg", alt="alt").img120
            .col
              h5 ¡Atención!
              p.mb-0 Tenga claro que las técnicas que se establecen, ya sean para la transferencia o recolección de información, dependen de las necesidades de cada biblioteca o entidad y de las herramientas con las que cuenta. 
    
    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 3.2 Métodos de almacenamiento y consulta de información

    .row.justify-content-center(data-aos="zoom-in")
      .col-auto
        figure
          img(src="@/assets/curso/temas/recursos/halfCircle_03.svg", alt="alt").img85
      .col
        p El almacenamiento de la información es la actividad mediante la que se guardan los datos usando, a la vez, herramientas para la conservación de esta
        p Los tipos de herramientas pueden ser magnéticas, ópticas, sólidas, informáticas y digitales con las cuales la entidad puede almacenar los datos.

    .bg_slyder_02.pb-5.mb-5
      .row.justify-content-center.align-items-center.py-5
        .col-lg-4(data-aos="fade")
          p En relación con los métodos de almacenamiento y la consulta de la información, se deben tener presentes los aspectos que, a continuación, se mencionan.
        .col-lg-8(data-aos="zoom-in")
          SlyderF(columnas="col-lg-6")
            .bg_crd_01.text-white.py-5.px-4.br_01
              figure.mb-4
                img(src='@/assets/curso/temas/t3/t3_04.svg' alt='').img90.m-auto              
              h5.text-center Producción de datos y trazabilidad
              p.mb-0.text-center Las organizaciones, en su gestión diaria, administran sus procesos de forma documental, lo cual genera una producción de datos que evidencian la trazabilidad de la entidad en el tiempo.

            .bg_crd_01.text-white.py-5.px-4.br_01
              figure.mb-4
                img(src='@/assets/curso/temas/t3/t3_05.svg' alt='').img90.m-auto              
              h5.text-center Diversidad en los métodos de almacenamiento
              p.mb-0.text-center Para una adecuada administración de la información, las empresas emplean diversos métodos de almacenamiento que permiten la consulta de datos cuando sea requerida por alguna parte interesada autorizada.

            .bg_crd_01.text-white.py-5.px-4.br_01
              figure.mb-4
                img(src='@/assets/curso/temas/t3/t3_06.svg' alt='').img90.m-auto              
              h5.text-center Equipos y herramientas especializados
              p.mb-0.text-center En el proceso y según las necesidades de almacenamiento se adquieren equipos #[em hardware] idóneos para almacenar, tener copias de seguridad, consultar y transferir datos con las siguientes características.

            .bg_crd_01.text-white.py-5.px-4.br_01
              figure.mb-4
                img(src='@/assets/curso/temas/t3/t3_07.svg' alt='').img90.m-auto              
              h5.text-center Almacenamiento que asegure
              p.mb-0.text-center Capacidad suficiente, rendimiento pertinente, fiabilidad total, recuperabilidad amplia.

    .row.justify-content-center.mb-5
      .col-lg-5(data-aos="flip-left")
        figure
          img(src="@/assets/curso/temas/t3/t3_08.png", alt="alt")
      .col-lg-7(data-aos="fade")
        p Entre las características más fundamentales que deberán tener los equipos especializados para el almacenamiento de la información, están:

        TabsA.color-acento-contenido(data-aos="zoom-in")
          .bg--darkGray.p-5.br_01(titulo="Capacidad")
            h4 Capacidad
            p Cantidad de datos que puede almacenar el dispositivo ya sea en bytes, gigabytes, terabytes e inclusive si maneja sistemas de información como Big Data en petabytes.

          .bg--darkGray.p-5.br_01(titulo="Rendimiento")
            h4 Rendimiento
            p Flujo rápido o lento de los datos, a la hora de almacenar o consultar, a través de un procesador de información determinado. 

          .bg--darkGray.p-5.br_01(titulo="Fiabilidad")
            h4 Fiabilidad
            p Configuración que se aplica para consulta y disponibilidad de la información cuando es requerida en tiempo real y sin errores.

          .bg--darkGray.p-5.br_01(titulo="Recuperabilidad")
            h4 Recuperabilidad
            p Capacidad que tenga el dispositivo para recuperar información cuando es borrada por error, incidente, delito cibernético y demás eventualidades. 

    p(data-aos="fade").mb-5 En la tabla que se muestra enseguida se exponen los métodos digitales de almacenamiento más utilizados en las empresas y demás organizaciones, como las bibliotecas.

    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-10
        table
          thead
            tr.cellBrown
              th.text-center M&eacute;todo de almacenamiento
              th.text-center Generalidades
              th.text-center Ejemplo
          tbody
            tr.cellLightBrown
              td.text-center Magn&eacute;ticas
              td Se archivan los datos en un dispositivo que contiene una banda magn&eacute;tica. Es una herramienta primaria de almacenamiento, pero pese a esto algunas entidades las utilizanpara crear copias de seguridad de la informaci&oacute;n.
              td.text-center Casetes
            tr
              td.text-center &Oacute;pticas
              td Son herramientas de almacenamiento que, por medio de discosmagn&eacute;ticos, guardan la informaci&oacute;n al girar a una gran velocidad.
              td.text-center CD-ROOM
            tr.cellLightBrown
              td.text-center S&oacute;lidas
              td Herramientas de almacenamiento de datos por medio de chipsque contienen memorias flash que conservan la informaci&oacute;n, aun cuando no existe suministro de energ&iacute;a y pueden ser port&aacute;tiles.
              td.text-center Disco Duro interno o externo, USB.                
            tr.cellBrown
              td.text-center(colspan='3') Herramientas de almacenamiento inform&aacute;ticas y digitales
            tr.cellLightBrown
              td.text-center #[em Software]
              td(colspan='2') Almacenamiento que se hace a trav&eacute;s de un #[em software] que extrae los datos, los organiza y los guarda en la red interna de la organizaci&oacute;n.
            tr
              td.text-center Red
              td(colspan='2') Se lleva a cabo mediante la red interna de la organizaci&oacute;n, manteniendo un sistema operativo liviano, almacenando la informaci&oacute;n en un servidor local.
            tr.cellLightBrown
              td.text-center Cloud
              td Son aquellos que se conservan en la nube a trav&eacute;s de internet y pueden ser consultados por las personas en tiempo real si tienen los permisos establecidos, no siendo necesario estar en el sitio de trabajo compartiendo la red interna.
              td.text-center Google Drive, SharePoint y las herramientas del Big Data.


    .row.justify-content-center
      .col-lg-10

    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 3.3 #[em Software] para registro de la información

    .row.justify-content-center.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t3/t3_09.png", alt="alt")
      .col-lg-7(data-aos="fade")
        p El registro de la información se realiza a través de un #[em software] diseñado para extraer, modificar y programar los datos recolectados. Se elige según diferentes características y modelos existentes, configurándolo según las necesidades de cada entidad.
        p Por otro lado, estos #[em software] garantizan la confiabilidad de la fuente de datos, su seguridad, extracción, recuperación y gestión, así como la facilidad de su administración.
        p Estos son algunos de los #[em software] más utilizados, actualmente, en las empresas y organizaciones:

    .row.justify-content-center
      .col-xl-4.col-md-6.mb-4(data-aos="flip-left")       
        .crd_hover_txt.br_01                
          .crd_hover_txt--img.mb-0.p-4       
            img(src="@/assets/curso/temas/t3/t3_15.png").mb-4
            h4.text-white.text-center Microsoft SQL Server

          .crd_hover_txt--font 
            .txt--container
              h4.text-white.text-center Microsoft SQL Server
              p.text-white.text-center.mb-0 Esta herramienta sirve para gestionar bases de datos de forma relacional, extrayendo información y creando cuadros de comparación frente a los datos solicitados versus lo encontrado.

      .col-xl-4.col-md-6.mb-4(data-aos="flip-left")         
        .crd_hover_txt.br_01 
          .crd_hover_txt--img.mb-0.p-4       
            img(src="@/assets/curso/temas/t3/t3_16.png").mb-4
            h4.text-white.text-center MySQL

          .crd_hover_txt--font
            .txt--container
              h4.text-white.text-center MySQL
              p.text-white.text-center.mb-0 Esta herramienta gestiona bases de datos de forma correlacional por medio abierto, es decir, de uso público siendo una de las más conocidas en todo el mundo, extrae información, relaciona y entrega reporte.

      .col-xl-4.col-md-6.mb-4(data-aos="flip-left")          
        .crd_hover_txt.br_01 
          .crd_hover_txt--img.mb-0.p-4       
            img(src="@/assets/curso/temas/t3/t3_17.png").mb-4
            h4.text-white.text-center Oracle Database

          .crd_hover_txt--font
            .txt--container
              h4.text-white.text-center Oracle Database
              p.text-white.text-center.mb-0 Es una herramienta de gestión de bases de datos relacional que extrae información, compara y entrega, teniendo como particularidad el nivel de seguridad, que deja solo a administradores permisos de su uso.

      .col-xl-4.col-md-6.mb-4(data-aos="flip-left")         
        .crd_hover_txt.br_01 
          .crd_hover_txt--img.mb-0.p-4       
            img(src="@/assets/curso/temas/t3/t3_18.png").mb-4
            h4.text-white.text-center Microsoft Access

          .crd_hover_txt--font
            .txt--container
              h4.text-white.text-center Microsoft Access
              p.text-white.text-center.mb-0 Es una herramienta para el manejo y gestión de la información que se puede adecuar a Excel, SharePoint y demás componentes. Trabaja de forma relacional para entrega de reportes o consultas.

      .col-xl-4.col-md-6.mb-4(data-aos="flip-left")          
        .crd_hover_txt.br_01 
          .crd_hover_txt--img.mb-0.p-4       
            img(src="@/assets/curso/temas/t3/t3_19.png").mb-4
            h4.text-white.text-center FileMarker

          .crd_hover_txt--font
            .txt--container
              h4.text-white.text-center FileMarker
              p.text-white.text-center.mb-0 Es una aplicación de Mac y Windows para bases de datos relacionales. Sirve para extraer información y comparar, con la particularidad que es multiplataforma, lo que facilita el trabajo con las gráficas propias del equipo del usuario.

      .col-xl-4.col-md-6.mb-4(data-aos="flip-left")          
        .crd_hover_txt.br_01 
          .crd_hover_txt--img.mb-0.p-4       
            img(src="@/assets/curso/temas/t3/t3_20.png").mb-4
            h4.text-white.text-center dBASE

          .crd_hover_txt--font
            .txt--container
              h4.text-white.text-center dBASE
              p.text-white.text-center.mb-0 Es la herramienta pionera en la gestión de base de datos; se utiliza manejando palabras clave de búsqueda y lugar en dónde hacerlo. Es utilizado por entidades que manejan un nivel de información baja y de fácil administración.


    .row.justify-content-center.align-items-center(data-aos="zoom-in") 
      .col-lg-8
        .bg--darkOrange.p-4.br_01
          .row  
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/warning_01A.svg", alt="alt").img85
            .col
              h5.txt--brown ¡Atención! 
              p.mb-0 Cada #[em software] tiene un protocolo específico que brinda una respuesta a diferentes necesidades, garantizando el desempeño esperado, según el programa elegido.

      .col-lg-4.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/temas/t3/t3_10.svg", alt="alt")

    separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 3.4 Protocolos y relaciones en las herramientas de #[em software]

    .row.justify-content-center.mb-4
      .col-lg-5.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t3/t3_11.png", alt="alt")
      .col-lg-7(data-aos="fade")
        p En los #[em software], los protocolos y relaciones se ven reflejados en #[span.txt--orange.bold interoperabilidad y regulación de flujo]. Esto quiere decir que la herramienta permite leer diferentes fuentes de datos, sin importar el tipo de formato del archivo y ayuda a que la capacidad del equipo no afecte los archivos por velocidad de descarga omitiendo, en ocasiones, datos.
        p Así mismo, los protocolos y relaciones se reflejan también en #[span.txt--orange.bold congestiones], es decir, que permite administrar las redes para evitar disminución de la calidad en el flujo de información limitando usuarios o permitiendo accesos. En cuanto a los errores, permite identificar, mitigar errores, bloquear fuentes, archivos con fallas o maliciosos.

    p(data-aos="fade").mb-5.text-center Entre los protocolos en herramientas de #[em software], se pueden mencionar:

    .row.justify-content-center.mb-5
      .col-lg-4.g-0(data-aos="flip-left")
        .bg--Orange.p-4.hg-100
          figure.mb-4
            img(src="@/assets/curso/temas/t3/t3_12.svg", alt="alt")
          h5 Administración
          p Están interconectados con toda el área informática de la entidad y realizan seguimiento de la operación, garantizando que funcione de forma eficiente.
      .col-lg-4.g-0(data-aos="flip-left")
        .bg--darkOrange.p-4.hg-100
          figure.mb-4
            img(src="@/assets/curso/temas/t3/t3_13.svg", alt="alt")
          h5 Comunicación
          p Brindan soluciones de comunicación en los dispositivos de los que dispone la entidad, ya sean digitales o analógicos.
      .col-lg-4.g-0(data-aos="flip-left")
        .bg--Orange.p-4.hg-100
          figure.mb-4
            img(src="@/assets/curso/temas/t3/t3_14.svg", alt="alt")
          h5 Seguridad
          p Permite establecer filtros y permisos de consulta, edición y demás manejos a los dispositivos de la entidad con el propósito de mitigar delitos informáticos y pérdida de información.

    



    








          

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
