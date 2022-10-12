<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Titulo de primer nivel

    .row.justify-content-center.mb-4
      .col-lg-3(data-aos="fade")
        p Para garantizar la autenticidad y fiabilidad de los documentos, las organizaciones privadas como públicas implementan metadatos para conocer la trayectoria de su archivo.
      .col-lg-9(data-aos="flip-left")
        .row.justify-content-center
          .col-lg-4.col-8.mb-4
            figure
              img(src="@/assets/curso/temas/t2/t2_01.png", alt="alt")
          .col-lg-8(data-aos="zoom-in")
            p Los metadatos son #[span.txt--orange referencias estructuradas o semiestructuradas] que permiten el establecimiento de la clasificación, redacción y archivo de la información documental en su ciclo de vida o trayectoria para regular la autenticidad, consulta y contextualización de los datos.
            .bg--darkOrange.p-4.br_01
              .row  
                .col-auto
                  figure
                    img(src="@/assets/curso/temas/recursos/warning_01A.svg", alt="alt").img85
                .col
                  h5.txt--brown ¡Atención!
                  p.mb-0 La información que describe un documento desde su creación hasta su proceso de conservación como autores, casa editorial, títulos, fechas, entre otros datos, se denomina metadato.

    p(data-aos="fade").mb-5 En el siguiente video, el instructor SENA hace una síntesis de las generalidades conceptuales sobre los metadatos; recuerde que, para fijar mejor los conceptos, puede registrar los aspectos más destacados en la libreta de apuntes.

    figure(data-aos="fade")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2  2.1 Criterios de diligenciamiento

    p(data-aos="fade") Para el establecimiento de los metadatos, ya sea en el diligenciamiento o en la creación de un documento, se deben tener en cuenta dos fases: #[span.txt--orange.bold la creación del documento y los nuevos metadatos].

    p(data-aos="fade").mb-5 Los aspectos que definen estas dos fases son:

    .row.justify-content-center.mb-5
      .col-lg-6.g-0(data-aos="flip-left")
        .bg--darkOrange.p-4.hg-100
          figure.mb-4
            img(src="@/assets/curso/temas/t2/t2_02.svg", alt="alt")
          h5 Creación del documento
          p Es el punto de partida en donde se establecen los datos de identificación inicial del documento para su elaboración. Por ejemplo, el nombre.
      .col-lg-6.g-0(data-aos="flip-left")
        .bg--darkGray.p-4.hg-100
          figure.mb-4
            img(src="@/assets/curso/temas/t2/t2_03.svg", alt="alt")
          h5 Nuevos metadatos
          p Se establecen en la gestión que tenga el documento en su trayectoria. Por ejemplo, la fecha de publicación o unidad de conservación en el archivo.

    p(data-aos="fade") Una vez se tienen claras las fases de asignación de los metadatos a utilizar, se deben comprender #[span.txt--brown.bold los criterios para el diligenciamiento de la información], así:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t2/t2_04.svg", alt="alt")
      .col-lg-8(data-aos="fade")
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Autenticidad")
            .col-12
              p Que permita identificar, en el documento, su originalidad, autoría y certifique su creación.

          .row(numero="2" titulo="Integridad")
            .col-12
              p Que permita, en el documento, verificar su contenido completo y que cumpla con lo solicitado.

          .row(numero="3" titulo="Utilidad")
            .col-12
              p Que la información sea de ayuda para la localización, contextualización y trazabilidad del documento.

          .row(numero="4" titulo="Entendible")
            .col-12
              p Que descifre de forma clara en el documento lo que se quiere consultar.

          .row(numero="5" titulo="Trazabilidad")
            .col-12
              p Que permita conocer el ciclo de vida del documento.

    p(data-aos="fade").mb-5 Tenga en cuenta, además, que para la aplicación de los criterios se deben asignar las siguientes funciones:

    .row.justify-content-center
      .col-lg-8
        ImagenInfografica.color-acento-botones(data-aos="zoom-in")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/t2/t2_12.svg')          

          .bg--paleOrange.br_01.p-3(x="10%" y="72%" numero="+")
            h5 Funciones de gestión de documentos
            p Enfocadas a la confiabilidad, disponibilidad, autenticidad e integridad de los metadatos en los documentos.

          .bg--paleOrange.br_01.p-3(x="38%" y="72%" numero="+")
            h5 Funciones para gestión de tecnologías de información
            p Garantizan la disponibilidad en la gestión de las herramientas ofimáticas, informáticas y digitales en el proceso.

          .bg--paleOrange.br_01.p-3(x="66.2%" y="72%" numero="+")
            h5 Funciones de dirección
            p Se centran en generar controles, normas y políticas para el buen desarrollo de la gestión.

          .bg--paleOrange.br_01.p-3(x="90.3%" y="72%" numero="+")
            h5 Funciones generales
            p Se centran en generar controles, normas y políticas para el buen desarrollo de la gestión.

    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.2 Criterios de diligenciamiento

    .row.justify-content-center(data-aos="fade")
      .col-auto
        figure
          img(src="@/assets/curso/temas/recursos/halfCircle_03.svg", alt="alt").img85
      .col
        p Los metadatos son de gran utilidad en la gestión de las entidades de información digital, pues permiten identificar el ciclo de vida del documento consultado. Así mismo, las herramientas electrónicas que se utilizan para este fin aportan facilidad de extraer, editar o, simplemente, revisar la información necesaria.

    p(data-aos="fade").mb-5 Para ampliar los saberes en relación con las herramientas electrónicas más utilizadas en esta gestión, se invita a analizar en detalle la tabla que, enseguida, se muestra.

    .bg--grad_01.pb-5.mb-4(data-aos="zoom-in")
      .bg_slyder_01.p-5
        .row.justify-content-center.align-items-center
          .col-lg-4.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/temas/t2/t2_05.svg", alt="alt")
          .col-lg-8
            .bg--white.br_01.p-4
              SlyderA(tipo="b")
                .row
                  .col-12.text-center
                    h5.txt--orange Herramienta
                    p.mb-4 Exif Data
                    h5.txt--orange Característica y función
                    p.mb-4 Aplicación en línea que ordena metadatos en los archivos, de forma básica a completa recibe formatos como JPG, TIFF, PNG, RAW, SMP, con un peso no superior a los 20 Mb.
                    h5.txt--orange Uso
                    p.mb-0 PEn imágenes, audio y video.

                .row
                  .col-12.text-center
                    h5.txt--orange Herramienta
                    p.mb-4 Extractmetadata
                    h5.txt--orange Característica y función
                    p.mb-4 Aplicación que permite extraer metadatos de diferentes formatos de archivos como imágenes de documentos en Word, también es compatible para PDF, MP3, AVI, MPEG.
                    h5.txt--orange Uso
                    p.mb-0 En imágenes, PDF, Word y Carpetas

                .row
                  .col-12.text-center
                    h5.txt--orange Herramienta
                    p.mb-4 Jeffrey’s Exif Viewer
                    h5.txt--orange Característica y función
                    p.mb-4 Aplicación compatible con la mayoría de los formatos y permite la extracción de metadatos.
                    h5.txt--orange Uso
                    p.mb-0 En imágenes, audios, videos, PDF, Word y demás.

                .row
                  .col-12.text-center
                    h5.txt--orange Herramienta
                    p.mb-4 Metapicz
                    h5.txt--orange Característica y función
                    p.mb-4 Aplicación de extracción de metadatos de imágenes.
                    h5.txt--orange Uso
                    p.mb-0 En imágenes.

                .row
                  .col-12.text-center
                    h5.txt--orange Herramienta
                    p.mb-4 Camera Summary
                    h5.txt--orange Característica y función
                    p.mb-4 Aplicación de consulta de metadatos de imágenes, no guarda datos para análisis, admite formatos JPG y JPG con un peso máximo de 1,5 MB.
                    h5.txt--orange Uso
                    p.mb-0 En imágenes.

                .row
                  .col-12.text-center
                    h5.txt--orange Herramienta
                    p.mb-4 Online Exif Viewer
                    h5.txt--orange Característica y función
                    p.mb-4 Aplicación de extracción de metadatos en línea de imágenes.
                    h5.txt--orange Uso
                    p.mb-0 En imágenes.

                .row
                  .col-12.text-center
                    h5.txt--orange Herramienta
                    p.mb-4 Verexif
                    h5.txt--orange Característica y función
                    p.mb-4 Aplicación que permite visualizar metadatos y eliminar los mismos de cualquier imagen.
                    h5.txt--orange Uso
                    p.mb-0 En imágenes.

                .row
                  .col-12.text-center
                    h5.txt--orange Herramienta
                    p.mb-4 Metadato.org
                    h5.txt--orange Característica y función
                    p.mb-4 Aplicación que cumple con la función de extracción de metadatos, visualización y exportación en formato CSV.
                    h5.txt--orange Uso
                    p.mb-0 En imágenes.

                .row
                  .col-12.text-center
                    h5.txt--orange Herramienta
                    p.mb-4 Get-Metadata
                    h5.txt--orange Característica y función
                    p.mb-4 Aplicación que permita la extracción y consulta de metadatos de cualquier tipo de archivos, en algunos permite su edición.
                    h5.txt--orange Uso
                    p.mb-0 En imágenes, audios, videos, PDF, Word y demás.

                .row
                  .col-12.text-center
                    h5.txt--orange Herramienta
                    p.mb-4 PDFCandy
                    h5.txt--orange Característica y función
                    p.mb-4 Aplicación que permite visualizar editar o eliminar metadatos de documentos PDF. 
                    h5.txt--orange Uso
                    p.mb-0 En documentos PDF.

                .row
                  .col-12.text-center
                    h5.txt--orange Herramienta
                    p.mb-4 TheExifer
                    h5.txt--orange Característica y función
                    p.mb-4 Aplicación que permite visualizar, cargar, editar o eliminar metadatos de variedad de archivos. 
                    h5.txt--orange Uso
                    p.mb-0 En imágenes, audios, videos, PDF, Word y demás.

                .row
                  .col-12.text-center
                    h5.txt--orange Herramienta
                    p.mb-4 Metashield Clean-up Online
                    h5.txt--orange Característica y función
                    p.mb-4 Aplicación de extracción de metadatos que permite eliminar y editar variedad de archivos ya que es compatible con la mayoría.
                    h5.txt--orange Uso
                    p.mb-0 En imágenes, audios, videos, PDF, Word y demás.

    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.3 Normas de seguridad de la información

    .row.justify-content-center.mb-4
      .col-lg-7
        p(data-aos="fade") Las organizaciones, en sus operaciones, administran información clasificada en formatos abiertos o cerrados, acorde a los lineamientos institucionales y definiendo los datos confidenciales, restringidos, internos y públicos. Esta información puede ser sensible para el funcionamiento de la entidad y, aún más, para sus partes interesadas.

        .bg--darkOrange.py-4.pe-4.mb-4(data-aos="zoom-in")
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/halfCircle_04.svg", alt="alt").img60.m-auto
            .col
              p.mb-0 Por lo anterior, las organizaciones se rigen por unas #[span.txt--brown normas de seguridad de la información] que permiten dar una guía y soporte para la adecuada conservación, confidencialidad y mitigación de pérdida, riesgos o fugas de los datos que pueden ocasionar daños y perjuicios.

        p(data-aos="fade").mb-0 Por eso, se deben conocer y tener en cuenta las principales normas de seguridad de la información que, en la actualidad, regulan esta gestión de las empresas, organizaciones y proyectos que se exponen en la siguiente tabla.
      .col-lg-5.col-8(data-aos="flip-left")
        figure
          img(src="@/assets/curso/temas/t2/t2_06.png", alt="alt")

    
    .bg_img_03.pb-4
      .row.justify-content-center
        .col-lg-10
          SlyderF(columnas="col-md-6 col-lg-6 col-xl-4")(data-aos="zoom-in")
            .bg_crd_01.text-white.py-5.px-4.br_01
              figure.mb-4
                img(src='@/assets/curso/temas/t1/t1_26.svg' alt='').img90.m-auto              
              h5.text-center Norma 27001
              p.mb-0.text-center Norma General de seguridad de la información, es certificable, enumera objetivos y mecanismos de control.

            .bg_crd_01.text-white.py-5.px-4.br_01
              figure.mb-4
                img(src='@/assets/curso/temas/t1/t1_26.svg' alt='').img90.m-auto              
              h5.text-center Norma 27002
              p.mb-0.text-center Establece las prácticas adecuadas en el manejo de la información y no es certificable
              
            .bg_crd_01.text-white.py-5.px-4.br_01
              figure.mb-4
                img(src='@/assets/curso/temas/t1/t1_26.svg' alt='').img90.m-auto              
              h5.text-center Norma 27005
              p.mb-0.text-center Tiene su enfoque basado en la gestión del riesgo de la información y su adecuada aplicación.

            .bg_crd_01.text-white.py-5.px-4.br_01
              figure.mb-4
                img(src='@/assets/curso/temas/t1/t1_26.svg' alt='').img90.m-auto              
              h5.text-center Norma 27005
              p.mb-0.text-center Tiene su enfoque basado en la gestión del riesgo de la información y su adecuada aplicación.

            .bg_crd_01.text-white.py-5.px-4.br_01
              figure.mb-4
                img(src='@/assets/curso/temas/t1/t1_26.svg' alt='').img90.m-auto              
              h5.text-center Norma 27006
              p.mb-0.text-center Enfocada en las entidades de auditoría y certificación para permitirles su acreditación para poder auditar o certificar a otras organizaciones.

            .bg_crd_01.text-white.py-5.px-4.br_01
              figure.mb-4
                img(src='@/assets/curso/temas/t1/t1_26.svg' alt='').img90.m-auto              
              h5.text-center Norma 27000
              p.mb-0.text-center Su propósito es gestionar la seguridad de los datos a través de las tecnologías de la información, estableciendo técnicas y generalidades.

            .bg_crd_01.text-white.py-5.px-4.br_01
              figure.mb-4
                img(src='@/assets/curso/temas/t1/t1_26.svg' alt='').img90.m-auto              
              h5.text-center Norma 27003
              p.mb-0.text-center Brinda parámetros para la implementación de un sistema de seguridad de la información.

            .bg_crd_01.text-white.py-5.px-4.br_01
              figure.mb-4
                img(src='@/assets/curso/temas/t1/t1_26.svg' alt='').img90.m-auto              
              h5.text-center Norma 27004
              p.mb-0.text-center Aporta con lineamientos y técnicas de seguridad a la gestión realizada por medio de las tecnologías de la información.

            .bg_crd_01.text-white.py-5.px-4.br_01
              figure.mb-4
                img(src='@/assets/curso/temas/t1/t1_26.svg' alt='').img90.m-auto              
              h5.text-center Norma 27007
              p.mb-0.text-center Soporta y aporta por medio de guía un conjunto de técnicas de seguridad para revisión y auditorías que evalúen el proceso.

            .bg_crd_01.text-white.py-5.px-4.br_01
              figure.mb-4
                img(src='@/assets/curso/temas/t1/t1_26.svg' alt='').img90.m-auto              
              h5.text-center Norma UNE ISO 27799
              p.mb-0.text-center Norma enfocada en la seguridad de la información sanitaria.

            .bg_crd_01.text-white.py-5.px-4.br_01
              figure.mb-4
                img(src='@/assets/curso/temas/t1/t1_26.svg' alt='').img90.m-auto              
              h5.text-center Norma 27032
              p.mb-0.text-center Aporta a la gestión de seguridad de la información basada en ciberseguridad.

            .bg_crd_01.text-white.py-5.px-4.br_01
              figure.mb-4
                img(src='@/assets/curso/temas/t1/t1_26.svg' alt='').img90.m-auto              
              h5.text-center Norma PCI
              p.mb-0.text-center Son normas que se enfocan en el sector financiero para la adecuada administración en las tarjetas y transacciones que se pueden manejar, así como sus respectivos datos.

      separador

      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade")
        h2 2.4 Criterios de organización de entidades de información digital

      .row.justify-content-center.mb-4
        .col-xl-7.col-lg-12
          p(data-aos="fade") Los datos con los que cuenta la biblioteca o cualquier empresa, y aquellos datos que extraen de manera externa para su proceso de análisis en la gestión estratégica, planeación y toma de decisiones, permiten garantizar su sostenibilidad en el mercado.
          .bg--darkOrange.py-4.pe-4(data-aos="zoom-in")
            .row.justify-content-center.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/recursos/halfCircle_04.svg", alt="alt").img60.m-auto
              .col
                p.mb-0 Esto incide en la creación de una categorización de las entidades de información digital, además de políticas y herramientas de control en la evaluación y seguimiento de los datos, por medio de mecanismos digitales.
        .col-xl-5.col-lg-10(data-aos="flip-left")
          figure
            img(src="@/assets/curso/temas/t2/t2_07.png", alt="alt")

      p(data-aos="fade").mb-4 Los criterios que deben tenerse en cuenta para tal categorización u organización de las entidades de información digital son:

      .row.justify-content-center.mb-4
        .col-lg-3(data-aos="flip-left")
          .bg_crd_01.text-white.py-5.px-4.br_01
            figure.mb-4
              img(src='@/assets/curso/temas/t2/t2_08.svg' alt='').img90.m-auto              
            h5.text-center De procedencia
            p.mb-0.text-center Se identifican las carpetas según su trayectoria.

        .col-lg-3(data-aos="flip-left")
          .bg_crd_01.text-white.py-5.px-4.br_01
            figure.mb-4
              img(src='@/assets/curso/temas/t2/t2_09.svg' alt='').img90.m-auto              
            h5.text-center De temática
            p.mb-0.text-center Se organiza la información en carpetas según sus temas y subtemas.

        .col-lg-3(data-aos="flip-left")
          .bg_crd_01.text-white.py-5.px-4.br_01
            figure.mb-4
              img(src='@/assets/curso/temas/t2/t2_10.svg' alt='').img90.m-auto              
            h5.text-center De autores
            p.mb-0.text-center Se organizan según el área, proceso o funcionario que crea el documento en carpetas.

        .col-lg-3(data-aos="flip-left")
          .bg_crd_01.text-white.py-5.px-4.br_01
            figure.mb-4
              img(src='@/assets/curso/temas/t2/t2_11.svg' alt='').img90.m-auto              
            h5.text-center De tiempo
            p.mb-0.text-center Se organizan según su fecha de creación o publicación en carpetas.

      .row.justify-content-center.mb-4(data-aos="zoom-in")
        .col-lg-12
          .bg--darkOrange.br_01.py-4.pe-4
            .row.align-items-center  
              .col-auto
                figure
                  img(src="@/assets/curso/temas/recursos/warning_02.svg", alt="alt").img120
              .col
                h5 ¡Atención!
                p.mb-0 Cabe resaltar que la función de categorizar u organizar las entidades de información digital, es permitir tener mecanismos de consulta, disponibilidad, conservación, calidad de los datos y orden, lo cual fortalecerá la gestión en la toma de decisiones basadas en información.       
      



</template>

<script>
export default {
  name: 'Tema2',
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
