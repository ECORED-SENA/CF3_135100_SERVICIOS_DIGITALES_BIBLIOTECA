<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg--paleOrange.p-4.br_01.mb-5(data-aos="zoom-in")
      .row  
        .col-auto
          figure
            img(src="@/assets/curso/temas/intro/intro.svg", alt="alt").img190
        .col          
          p.mb-0 Aquí comienza el estudio del componente formativo #[span.bold.txt--orange “Preparación y registro de información”]. Para garantizar una experiencia satisfactoria se debe prestar atención a cada punto desarrollado y realizar todos los pasos o indicaciones propuestos en los contenidos y temáticas; así, para iniciar se invita a visualizar con atención el video que a continuación se muestra. #[span.bold.txt--orange ¡Éxitos!]

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
