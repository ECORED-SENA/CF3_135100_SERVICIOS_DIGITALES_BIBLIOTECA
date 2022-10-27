<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg--pale.p-4.br_01.mb-5(data-aos="zoom-in")
      .row.align-items-center  
        .col-auto.d-none.d-lg-flex
          figure
            img(src="@/assets/curso/temas/intro/intro.svg", alt="alt").img190
        .col          
          p El servicio es la ventaja competitiva y objeto diferenciador que tienen todas las organizaciones sin importar su actividad económica, así mismo las estrategias y medidas que se generan deben impulsar el desarrollo sostenible de la comunidad.

          p.mb-0 Bienvenido al estudio del componente formativo #[span.bold.txt--orange “Servicios e identificación de necesidades al usuario en biblioteca”]. Comience observando con atención el video que se muestra a continuación. #[span.bold.txt--orange ¡Adelante!]

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ApXEM0At92E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)     
    
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
