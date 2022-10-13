<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Registro de información    

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.order-2.order-lg-1        
        p La web 2.0 es un conjunto de diferentes aplicaciones informáticas que apoyan la gestión de las bibliotecas en el proceso interactivo con sus usuarios, favoreciendo compartir información y crear contenidos en línea, de forma colaborativa.
        .bg--paleOrange.p-4.mb-0
          p.mb-0 Estas aplicaciones motivan al usuario a ser un sujeto activo en su formación y consultas, ya que, mediante ellas, puede interactuar, opinando, comentando, haciendo aportes para la construcción de conocimiento nuevo e, inclusive, puede crear su propio perfil y contenido. 
      .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t6/t6_01.png", alt="alt") 

    p.mb-5 Entre las aplicaciones más utilizadas, se encuentran:  

    .bg_slyder_01A.p-5.br_01.mb-5
      .bg--white.br_01.p-4            
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-6.col-10.mb-4
              figure
                img(src="@/assets/curso/temas/t6/t6_02.png", alt="alt") 
            .col-lg-6
              h5.txt--orange Blog 
              p.mb-0 Sirve para escribir artículos, noticias e información de interés, por medio de enlaces videos o escritos; también el autor puede generar permisos para que otras personas complementen la información. Además, aporta a la difusión de información, mayor interacción y comunicación, permite la publicación de contenidos y permite al usuario conocer los productos y servicios que brinda la biblioteca.

          .row.justify-content-center.align-items-center
            .col-lg-6.col-10.mb-4
              figure
                img(src="@/assets/curso/temas/t6/t6_03.png", alt="alt") 
            .col-lg-6
              h5.txt--orange Wiki 
              p.mb-0 Es un espacio donde las personas pueden trabajar, asincrónicamente, elaborando contenidos. Facilitan el trabajo en línea, permiten trabajar en las investigaciones de forma colaborativa y elaboración de guías.

          .row.justify-content-center.align-items-center
            .col-lg-6.col-10.mb-4
              figure
                img(src="@/assets/curso/temas/t6/t6_04.png", alt="alt") 
            .col-lg-6
              h5.txt--orange Redes sociales
              p.mb-0 Son sitios web donde cada persona tiene una página y puede publicar temas de interés y comunicarse con otros usuarios, de forma sincrónica o asincrónica. Aportan en la localización de usuarios, la comunicación en tiempo real, la interacción virtual. Ofrecen dinamismo en la gestión de la información.

          .row.justify-content-center.align-items-center
            .col-lg-6.col-10.mb-4
              figure
                img(src="@/assets/curso/temas/t6/t6_05.png", alt="alt") 
            .col-lg-6
              h5.txt--orange Entornos para compartir contenido
              p.mb-0 Son espacios que les permiten a las personas almacenar documentos, videos y demás información. Aportan en la gestión para trabajar en línea, enviar documentos de un tamaño pesado, crear carpetas colaborativas, compartir vídeos y reproducirlos en línea, en varias pantallas.

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-12
        .bg--darkOrange.br_01.py-3.pe-4
          .row.align-items-center  
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/warning_02.svg", alt="alt").img120
            .col
              h5 ¡Importante!
              p.mb-0 Las herramientas web 2.0 aportan en la interacción, comunicación social y asertiva entre los usuarios y la biblioteca de una manera muy eficiente y la buena administración de la gran variedad de aplicaciones generan un crecimiento del mismo conocimiento, gracias a la gran cantidad de datos y contenidos que se pueden llegar a manejar con cada una de ellas.

    .row.justify-content-center.mb-5
      .col-lg-4.col-10.mb-5.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t6/t6_06.svg", alt="alt") 
      .col-lg-8
        p Por su parte, la #[span.bold.txt--orange referencia virtual] es un servicio que se presta a diferentes usuarios para encontrar variedad fuentes de información disponibles en la web, con el propósito de apoyar a la gestión de la investigación de estudiantes, investigadores o usuarios que no pueden desplazarse de forma presencial a la biblioteca. 
        p En relación con la referencia virtual, se deben tener presentes los siguientes aspectos:

    .row.justify-content-center.px-2
      .col-lg-6.gx-0
        .bg--darkGray.p-4.hg-100
          figure.mb-4
            img(src="@/assets/curso/temas/t6/t6_07.svg", alt="alt")          
          h5 #[span.txt--brown Asincronía]
          p.mb-0 Se manejan referencias asincrónicas, que son las consultas que se tramitan por medio de formularios o correos electrónicos para recibir respuesta #[span.bold.txt--brown en un tiempo establecido por la biblioteca].

      .col-lg-6.gx-0
        .bg--darkOrange.p-4.hg-100
          figure.mb-4
            img(src="@/assets/curso/temas/t6/t6_08.svg", alt="alt")
          h5 #[span.txt--brown Sincronía]
          p.mb-0 También están las referencias sincrónicas que son esas sesiones en línea que suelen suceder vía chat y en las cuales la persona encargada en biblioteca da #[span.bold.txt--brown respuesta en tiempo real].
               

</template>

<script>
export default {
  name: 'Tema6',
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
