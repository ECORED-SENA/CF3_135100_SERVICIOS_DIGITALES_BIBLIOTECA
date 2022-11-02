<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Desarrollo sostenible

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1        
        p El desarrollo sostenible busca la satisfacción de las necesidades de las comunidades, garantizando un equilibrio a nivel social, económico, ambiental y cultural que no afecte negativamente la vida y crecimiento de las futuras generaciones.
        .bg--paleOrange.p-4.mb-4
          p.mb-0 Uno de los principales intereses y búsquedas de las bibliotecas en la actualidad es fomentar el desarrollo sostenible a través del acceso a la información para la comunidad; brindando oportunidades para todo tipo de usuarios.          
        p.mb-0 Se recomienda analizar en detalle los elementos de la siguiente tabla, afianzando así el saber en lo relacionado con las estrategias del desarrollo sostenible:

      .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t5/t5_01.png", alt="alt") 

    .bg--grad_03.pb-5
      .bg_slyder_01.p-5.mb-5.br_01(data-aos="zoom-in")
        .row.justify-content-center.align-items-center
          .col-lg-5.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/temas/t5/t5_02.svg", alt="alt")
          .col-lg-7
            .bg--white.br_01.p-4
              h5 Estrategias del desarrollo sostenible
              SlyderA(tipo="b")
                .row
                  .col-12.text-center
                    h5.txt--orange Estrategias 
                    p.mb-4 Alfabetización global
                    h5.txt--orange Objetivos
                    p.mb-0 Capacitar al usuario en la gestión de comprensión, análisis y búsqueda de la información utilizando las herramientas informáticas y digitales disponibles.    
                    h5.txt--orange Consideraciones
                    p.mb-0 Se crean planes de alfabetización a los usuarios. 

                .row
                  .col-12.text-center
                    h5.txt--orange Estrategias 
                    p.mb-4 Acceso a la información
                    h5.txt--orange Objetivos
                    p.mb-0 Mantener las herramientas que garanticen que el usuario obtenga la información pertinente.    
                    h5.txt--orange Consideraciones
                    p.mb-0 Se gestiona y apoya con las entidades del Estado. 

                .row
                  .col-12.text-center
                    h5.txt--orange Estrategias 
                    p.mb-4 Implementación de redes
                    h5.txt--orange Objetivos
                    p.mb-0 Crear enlaces de conexión directa a la información.    
                    h5.txt--orange Consideraciones
                    p.mb-0 Se gestiona y apoya con las entidades del Estado.

                .row
                  .col-12.text-center
                    h5.txt--orange Estrategias 
                    p.mb-4 Suplir necesidades de información
                    h5.txt--orange Objetivos
                    p.mb-0 Identificar necesidades de información para mantener la bibliografía de la biblioteca actualizada acorde a los requerimientos y estándares establecidos.    
                    h5.txt--orange Consideraciones
                    p.mb-0 Se identifican necesidades de información según la comunidad.

                .row
                  .col-12.text-center
                    h5.txt--orange Estrategias 
                    p.mb-4 Inclusión de las TIC
                    h5.txt--orange Objetivos
                    p.mb-0 Promover y apoyar en la comunidad el acceso a las tecnologías de la información y comunicación y su uso.   
                    h5.txt--orange Consideraciones
                    p.mb-0 Desde la biblioteca se brindan los recursos necesarios que garanticen el acceso a las TIC.

                .row
                  .col-12.text-center
                    h5.txt--orange Estrategias 
                    p.mb-4 Centro académico y de investigación
                    h5.txt--orange Objetivos
                    p.mb-0 Ser apoyo en la generación de nuevo conocimiento.   
                    h5.txt--orange Consideraciones
                    p.mb-0 Se generan actividades culturales, de promoción con énfasis en la gestión del conocimiento.

                .row
                  .col-12.text-center
                    h5.txt--orange Estrategias 
                    p.mb-4 Orientar al usuario
                    h5.txt--orange Objetivos
                    p.mb-0 Ser guía y apoyo para los usuarios en sus investigaciones.  
                    h5.txt--orange Consideraciones
                    p.mb-0 Se implementan recursos humanos, tecnológicos y de infraestructura para brindar un servicio que garantice el ambiente adecuado para la formación.

      .bg--darkBlue.br_01.py-3.pe-4.mb-5
        .row.align-items-center  
          .col-auto
            figure
              img(src="@/assets/curso/temas/recursos/warning_02.svg", alt="alt").img120
          .col
            h5.txt--orange ¡Nota!
            p.text-white.mb-0 Cada biblioteca, según los recursos dirigidos, implementa las estrategias pertinentes, acordes a las necesidades de la comunidad.

      .row.justify-content-center.mb-5
        .col-auto.d-none.d-lg-flex
          figure
            img(src="@/assets/curso/temas/recursos/halfCircle_03.svg", alt="alt").img85
        .col
          p.mb-0 Y en la siguiente tabla, se podrán conocer los objetivos, tipos y consideraciones del desarrollo sostenible; se sugiere establecer las primeras conclusiones sobre el impacto que ello tiene en los procesos de servicios de bibliotecas.

      .row.justify-content-center
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Tabla 4.
            span Objetivos, tipos y consideraciones del desarrollo sostenible

          table
            thead.cellBrown
              tr.text-center
                th Objetivos
                th Tipos
                th Consideraciones
            tbody
              tr.cell_Pale
                td.text-center Disminuir la pobreza
                td Acceso a la información, capacitación, apoyo al empresario, Gobierno e instituciones.
                td Generar oportunidades que aporten a la calidad de vida.
              tr.cell_White
                td.text-center Evitar el hambre
                td Investigaciones sobre producción sostenible y brindar acceso a los productores.
                td Apoyar la gestión de seguridad alimentaria.

              tr.cell_Pale
                td.text-center Aumentar hábitos saludables
                td Acceso a investigaciones, noticias que aporten al conocimiento médico que fomente información en salud.
                td Promoción de vida saludable a todos los usuarios.
              tr.cell_White
                td.text-center Mejorar la educación
                td Promoción de la alfabetización a todos los usuarios y comunidad.
                td Crear una educación equitativa y de calidad.

              tr.cell_Pale
                td.text-center Mitigar la discriminación
                td Fomentar la equidad y crear programas de concientización.
                td Promoción de la igualdad.
              tr.cell_White
                td.text-center Agua y energía sostenible
                td Programas de agua y saneamiento, electricidad segura y actualizaciones que mitiguen el impacto ambiental.
                td Garantizar el suministro de agua y energía responsablemente.

              tr.cell_Pale
                td.text-center Desarrollo económico y empleo digno
                td Planes de capacitaciones que mejoren competencias y acceso a la información para la formación.
                td Generar el desarrollo de capacidades de las personas según demandas laborales.

              tr.cell_White
                td.text-center Infraestructura innovadora
                td Ambientes propicios para la investigación con plataformas y herramientas informáticas que suplan necesidades de información.
                td Garantizar acceso a internet y herramientas de consulta.

              tr.cell_Pale
                td.text-center Paz y justicia
                td Acceso a los datos requeridos con ambientes inclusivos y políticamente neutros.
                td Fomentar la participación ciudadana y el diálogo.


</template>

<script>
export default {
  name: 'Tema5',
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
