<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Ciencia y conocimiento de información

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7         
        p La información es considerada por la sociedad mundial como un tesoro de la humanidad, porque ha servido para convertirla en conocimiento e innovación para las diferentes ramas y áreas del saber. Así, es necesario contar con variedad de herramientas y estrategias convencionales y tecnológicas que posibiliten su acceso. 
        .bg--paleOrange.p-4
          p.mb-0 El ser humano ha sabido vincular, a la experiencia de la información, elementos, estrategias, lineamientos e instrumentos para vivir con ella y promoverse. Suministrar y transmitir conocimiento es el reto que tienen las bibliotecas, debido a su gran campo de acción.

      .col-lg-5
        figure
          img(src="@/assets/curso/temas/t4/t4_01.png", alt="alt")    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-flex(data-aos="flip-left")
        figure
          img(src="@/assets/curso/temas/t4/t4_03.png", alt="alt")
      .col-lg-7(data-aos="fade")
        p.mb-4 Para dar respuesta a la alta demanda de usuarios, e informar adecuadamente, se deben comprender los elementos del conocimiento, a saber: 

        TabsA.color-acento-contenido(data-aos="zoom-in")
          .bg--darkGray.p-5.br_01(titulo="Sujeto")
            h4 Sujeto
            p Es aquel que hace el procesamiento de la información gracias a su capacidad intelectual por medio de los sentidos.  

          .bg--darkGray.p-5.br_01(titulo="Objeto")
            h4 Objeto
            p Es sobre lo que se estudia y analiza para volverlo conocimiento.

          .bg--darkGray.p-5.br_01(titulo="Operación cognoscitiva")
            h4 Operación cognoscitiva
            p Es el proceso de aprehensión y entendimiento del objeto, para transformar la información en conocimiento.  

          .bg--darkGray.p-5.br_01(titulo="Representación")
            h4 Representación
            p Es la imagen mental o pensamiento que nace de la operación cognoscitiva.  

    .bg_clr_01.py-5
      p.mb-5 Ahora, se invita a analizar el siguiente ejemplo y ampliar su comprensión, respecto a los elementos del conocimiento:

      .bg_Pasos_C.p-4.br_01.mb-5
        LineaTiempoC.color-acento-botones(text-small)
          .row.justify-content-center.align-items-center(titulo="")
            .col-auto.order-2.order-lg-1
              figure
                img(src="@/assets/curso/temas/t4/t4_04.svg", alt="alt").img450 
          
            .col-md-6.order-1.order-lg-2.mb-4.mb-lg-0
              .bg--white.br_01.p-4
                h5 Situación
                p.mb-0 El aprendiz SENA está intentando aplicar y memorizar una fórmula de Matemática Financiera.

          .row.justify-content-center.align-items-center(titulo="")
            .col-auto.order-2.order-lg-1
              figure
                img(src="@/assets/curso/temas/t4/t4_05.svg", alt="alt").img450 
          
            .col-md-6.order-1.order-lg-2.mb-4.mb-lg-0
              .bg--white.br_01.p-4
                h5 Sujeto
                p.mb-0 El aprendiz SENA.

          .row.justify-content-center.align-items-center(titulo="")
            .col-auto.order-2.order-lg-1
              figure
                img(src="@/assets/curso/temas/t4/t4_06.svg", alt="alt").img450 
          
            .col-md-6.order-1.order-lg-2.mb-4.mb-lg-0
              .bg--white.br_01.p-4
                h5 Objeto
                p.mb-0 Fórmula de Matemática Financiera.

          .row.justify-content-center.align-items-center(titulo="")
            .col-auto.order-2.order-lg-1
              figure
                img(src="@/assets/curso/temas/t4/t4_07.svg", alt="alt").img450 
          
            .col-md-6.order-1.order-lg-2.mb-4.mb-lg-0
              .bg--white.br_01.p-4
                h5 Operación cognoscitiva
                p.mb-0 Es la operación que hace el aprendiz SENA al verla, leerla, reemplazarla y estudiarla. 

          .row.justify-content-center.align-items-center(titulo="")
            .col-auto.order-2.order-lg-1
              figure
                img(src="@/assets/curso/temas/t4/t4_08.svg", alt="alt").img450 
          
            .col-md-6.order-1.order-lg-2.mb-4.mb-lg-0
              .bg--white.br_01.p-4
                h5 Representación
                p.mb-0 Es la imagen mental que crea cuando piensa en la fórmula.
          

      p.mb-5 También, se debe ver atención el video que presenta e identifique en él las ciencias aplicadas en los entornos de bibliotecas para potenciar los elementos del conocimiento.

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/wJG4VRLJNIo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)         

</template>

<script>
export default {
  name: 'Tema4',
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
