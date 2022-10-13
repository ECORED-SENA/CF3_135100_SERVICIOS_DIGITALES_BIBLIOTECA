<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5   

    .bg--darkBlue.br_01.py-4.pe-4.mb-5
      .row.align-items-center  
        .col-auto
          figure
            img(src="@/assets/curso/temas/recursos/warning_04.svg", alt="alt").img120
        .col          
          p.mb-0 #[span.txt--white Se ha finalizado el estudio de los contenidos de este componente formativo. En este punto, es necesario analizar la estructura que se muestra a continuación. Se invita a registrar esta síntesis en la libreta personal de apuntes y repasar los temas que considere necesarios.] #[span.bold.txt--orange ¡Adelante!]

    .row.justify-content-center
      .col-lg-11.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
