<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Netiqueta y protocolo empresarial


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/t2/t2_01.png' alt='')
      .col-lg-7
        p La netiqueta hace referencia al conjunto de criterios y normas, asociados al comportamiento en las redes de comunicación virtual: correos electrónicos, páginas web, WhatsApp, Facebook, Twitter, Meet, Zoom, chatbots, foros, blogs y demás herramientas o entornos.
        .bg--Orange.p-4
          p.mb-0 En síntesis, la netiqueta son las reglas que orientan sobre cómo actuar cuando hay hechos comunicativos en cualquier entorno virtual para garantizar la convivencia y adecuada interacción.

    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        p En relación con las normas de comportamiento y la netiqueta, se debe tener presente:
        AcordionA(tipo="b" clase-tarjeta="bg--pale br_01")
          .row(titulo="Comportamiento y autonomía")
            .col-12
              p Ya sea en sociedad, en el ambiente laboral o familiar, el comportamiento tiene consecuencias y aunque existen reglas que los rigen, depende de cada individuo ponerlas en práctica.

          .row(titulo="Importancia de las normas de interacción")
            .col-12
              p La concepción y aplicación de las normas de convivencia, incluso en entornos de virtualidad, afectan proporcionalmente los procesos de cambio y desarrollo colectivo.

          .row(titulo="Desconocer las reglas")
            .col-12
              p El desconocimiento de las reglas de interacción podría traer consecuencias muy negativas: perder un empleo, afectar la dignidad de las personas, distorsionar la intención comunicativa, desvirtuar procesos importantes, favorecer delitos, entre otras.

          .row(titulo="Conocer la netiqueta")
            .col-12
              p Conociendo la netiqueta y su conjunto de criterios o normas, se amplía la posibilidad de cumplir objetivos en las actividades o acciones que se desarrollan en la virtualidad. La interacción y convivencia sanas, incluso en entornos digitales, trae consigo el crecimiento individual y el fortalecimiento de los vínculos entre sujetos y comunidades.

      .col-lg-5.d-none.d-lg-flex
        figure
          img(src='@/assets/curso/temas/t2/t2_02.png' alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/t2/t2_03.png' alt='')
      .col-lg-7
        p Las reglas o criterios mayormente usados, de netiqueta, son los siguientes:

        ul.fa-ul
          li.mb-2
            i.fa-li.fas.fa-dot-circle.txt--brown
            | Uso adecuado del lenguaje entendiendo que las personas que leen son seres humanos.
          li.mb-2
            i.fa-li.fas.fa-dot-circle.txt--brown
            | Respeto.
          li.mb-2
            i.fa-li.fas.fa-dot-circle.txt--brown
            | No escribir todas las palabra en mayúsculas, ya que es como si se gritaran.
          li.mb-2
            i.fa-li.fas.fa-dot-circle.txt--brown
            | No publicar noticias falsas, verificar la veracidad.
          li.mb-2
            i.fa-li.fas.fa-dot-circle.txt--brown
            | Enviar o escribir mensajes según el contexto de la red social o temas para lo que fue creado.
          li.mb-2
            i.fa-li.fas.fa-dot-circle.txt--brown
            | Respeto por la privacidad.
          li.mb-2
            i.fa-li.fas.fa-dot-circle.txt--brown
            | Cuidar desde el lenguaje y desde lo comunicado, los principios éticos.
          li.mb-2
            i.fa-li.fas.fa-dot-circle.txt--brown
            | Saludar, pedir la palabra, dar gracias, despedirse.
          li.mb-2
            i.fa-li.fas.fa-dot-circle.txt--brown
            | Conocer y aplicar las reglas específicas de cada red o de cada herramienta tecnológica.
          li.mb-2
            i.fa-li.fas.fa-dot-circle.txt--brown
            | Tener en cuenta y aplicar la ortografía y signos de puntuación.
          li
            i.fa-li.fas.fa-dot-circle.txt--brown
            | Por ningún motivo hacer bullying.

    .bg--brown.br_01.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-auto.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/t2/t2_04.svg' alt='').img200
        .col.text-white
          h5 Protocolo empresarial
          p.mb-0 Complementariamente, existe el protocolo empresarial: un conjunto de herramientas que brindan unas reglas de comunicación o formas de hacer las cosas, interna y externamente, optimizando las relaciones con los usuarios de las bibliotecas.

    p.mb-5 Los siguientes ejemplos, afianzarán la comprensión de los protocolos empresariales y potenciarán la destreza para la aplicación de estos. 

    h5.text-center.txt--brown.mb-5 Ejemplos de protocolos empresariales

    TabsB.color-primario.mb-5
      .py-4.py-md-5(titulo="1. Protocolo de atención telefónica en biblioteca" :icono="require('@/assets/curso/temas/recursos/tab_01.svg')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h5 1. Protocolo de atención telefónica en biblioteca
            ul.fa-ul
              li.mb-2
                i.fa-li.fas.fa-dot-circle.txt--brown
                | #[strong Saludo:] buenos días, tardes, noches.
              li.mb-2
                i.fa-li.fas.fa-dot-circle.txt--brown
                | #[strong Identificarse:] mi nombre es Diego.
              li.mb-2
                i.fa-li.fas.fa-dot-circle.txt--brown
                | #[strong Identificar necesidad:] ¿en qué puedo colaborarle?
              li.mb-2
                i.fa-li.fas.fa-dot-circle.txt--brown
                | #[strong Evaluar:] ¿es clara la información?
              li.mb-2
                i.fa-li.fas.fa-dot-circle.txt--brown
                | Otras establecidas por la biblioteca.
        
          .col-lg-6.col-10
            figure
              img(src='@/assets/curso/temas/t2/t2_05.png' alt='') 

      .py-4.py-md-5(titulo="2. Protocolo de asistencia a comités internos" :icono="require('@/assets/curso/temas/recursos/tab_02.svg')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h5 2. Protocolo de asistencia a comités internos
            ul.fa-ul
              li.mb-2
                i.fa-li.fas.fa-dot-circle.txt--brown
                | #[strong Inicio:] el personal debe llegar 15 minutos antes y debe registrar asistencia.
              li.mb-2
                i.fa-li.fas.fa-dot-circle.txt--brown
                | #[strong Presentación personal:] el personal debe asistir con traje formal.
              li.mb-2
                i.fa-li.fas.fa-dot-circle.txt--brown
                | #[strong Presentación de informes:] los funcionarios deben entregar el informe en formato .xls con sus respectivos indicadores.
              li.mb-2
                i.fa-li.fas.fa-dot-circle.txt--brown
                | #[strong Tiempo:] cada funcionario tiene 20 minutos para hacer sus presentaciones.
              li.mb-2
                i.fa-li.fas.fa-dot-circle.txt--brown
                | #[strong En el proceso:] respetar la palabra, hacer preguntas al finalizar, cumplir los tiempos.
        
          .col-lg-6.col-10
            figure
              img(src='@/assets/curso/temas/t2/t2_06.png' alt='')    

    
    .bg--darkBlue.br_01.py-3.pe-4.mb-5
      .row.align-items-center  
        .col-auto
          figure
            img(src="@/assets/curso/temas/recursos/warning_02.svg", alt="alt").img120
        .col
          h5.txt--orange ¡Importante!
          p.text-white.mb-0 Los protocolos, en la biblioteca, se crean según necesidades de la misma en su gestión diaria y sirven como apoyo en su operación. Conocerlos y cumplirlos será responsabilidad tanto individual como empresarial.   

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        .cstm_H3.mb-4
          .row.align-items-end
            .col-auto             
              figure
                img(src="@/assets/curso/temas/recursos/halfCircle_05.svg", alt="alt").img85     
            .col
              h3.mb-2 Imagen corporativa  

        p Se trata de aquellas características que hacen a una organización o biblioteca, única. Se representa en la marca, logotipos, colores corporativos y demás que generan una recordación en el usuario para despertar interés.

        p.mb-0 La imagen corporativa va evolucionando con el tiempo, debido a los cambios que se presentan ya sean culturales, moda, del mercado, tecnológicos, crecimiento o del mismo ambiente con el que interactúa la biblioteca.

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/t2/t2_07.png' alt='') 

    p.text-center.mb-5 La imagen corporativa, de cualquier tipo de empresa u organización, suele tener los siguientes componentes:

    .row.justify-conten-center.align-items-center.mb-4
      .col-lg-4.d-none.d-lg-flex
        figure
          img(src='@/assets/curso/temas/t2/t2_08.png' alt='') 
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="bg--pale br_01")
          .row(titulo="Misión")
            .col-12
              p.mb-0 Para establecer los componentes de la imagen corporativa se deben tener en cuenta la misión a la que se dedica la empresa, es decir la razón de su existencia.

          .row(titulo="Visión")
            .col-12
              p.mb-0 Se trata de hacia dónde va la organización, es decir, sus metas y la cultura organizacional que es ese conjunto de creencias, valores y principios compartidos por los miembros de la organización. 

          .row(titulo="Nombre de la empresa")
            .col-12
              p.mb-0 Debe ser atractivo, diferenciador y relacionado con la actividad económica.

          .row(titulo="Eslogan")
            .col-12
              p.mb-0 Debe ser una frase que resuma la gestión de la organización.

          .row(titulo="Logotipo")
            .col-12
              p.mb-0 Debe ser una imagen o figura que represente lo que hace la entidad y genere recordación.

    .row.justify-conten-center.align-items-center.mb-4     
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="bg--pale br_01")
          .row(titulo="Identidad cromática")
            .col-12
              p.mb-0 Debe ir asociada a la actividad económica, es decir, seleccionar un color o varios que representen la gestión que hace la empresa.

          .row(titulo="Canales de promoción y material corporativo")
            .col-12
              p.mb-0 Se establece según el mercado al que se desea incursionar y debe contar con los componentes antes mencionados, acá se pueden encontrar desde tarjetas de presentación, hasta portafolios de productos o servicios.  

          .row(titulo="Página web")
            .col-12
              p.mb-0 Es indispensable la creación de un sitio web que abra oportunidades para que la entidad se haga conocer. Además, para generar una comunicación en línea y directa con los clientes.

          .row(titulo="Canales de comunicación")
            .col-12
              p.mb-0 Se establecen según necesidades, pero se recomiendan estos: telefónico, redes sociales, sitio web y demás que garanticen una respuesta oportuna al cliente.

      .col-lg-4.d-none.d-lg-flex
        figure
          img(src='@/assets/curso/temas/t2/t2_09.png' alt='') 

    p.mb-5 La imagen corporativa es importante para la recordación de la empresa y sobre todo para garantizar el sostenimiento a través del tiempo.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        .cstm_H3.mb-4
          .row.align-items-end
            .col-auto             
              figure
                img(src="@/assets/curso/temas/recursos/halfCircle_05.svg", alt="alt").img85     
            .col
              h3.mb-2 Didácticas de la formación y modalidades de atención 

        p Las bibliotecas, comúnmente, sirven de estímulo a los procesos de formación escolares de la niñez, la juventud y la población adulta de todas las edades. Muchos docentes las utilizan en sus estrategias didácticas y procesos de enseñanza. Ellas, a través de sus modalidades de atención, prestan sus servicios apoyando los aprendizajes y la apropiación del conocimiento propuesto.

        p.mb-0 Las bibliotecas, luego, son gestoras activas y fundamentales en la formación de la comunidad y hacen parte de la estructura complementaria de la escuela y el sistema educativo.

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/t2/t2_10.png' alt='')

      .col-12.pt-4
        p.mb-0 En relación con las didácticas de la formación y las modalidades de atención, se deben tener en cuenta los siguientes elementos; se invita a llevar nota de ellos en una libreta personal de apuntes: 

    .bg_img_03.pb-4.mb-5
      .row.justify-content-center.mb-5
        .col-lg-8         

          ImagenInfograficaB.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/t2/t2_11.svg') 

            div(x="32%" y="30%" tooltip="" numero="+")  
              .row.justify-content-center.align-items-center
                .col-lg-7.mb-4.mb-lg-0
                  h5.mb-4 #[span.txt--orange Didácticas de la formación]
                  ul.fa-ul
                    li.mb-2
                      i.fa-li.fas.fa-dot-circle.txt--brown
                      | #[strong.txt--orange Desde lo técnico:] reproduce información para transmitir conocimientos de forma teórica.
                    li.mb-2
                      i.fa-li.fas.fa-dot-circle.txt--brown
                      | #[strong.txt--orange Desde lo práctico:] busca transmitir el conocimiento a través de casos que promuevan el hacer.
                    li.mb-2
                      i.fa-li.fas.fa-dot-circle.txt--brown
                      | #[strong.txt--orange Desde lo estratégico:] busca cambiar la realidad de una o varias situaciones para desarrollar en el estudiante pensamiento crítico.
                .col-lg-5.d-none.d-lg-flex
                  figure
                    img(src='@/assets/curso/temas/t2/t2_12.png') 
                    
            div(x="97%" y="30%" tooltip="" numero="+")  
              .row.justify-content-center.align-items-center
                .col-lg-7.mb-4.mb-lg-0
                  h5.mb-4 #[span.txt--orange Modalidades de atención]
                  ul.fa-ul
                    li.mb-2
                      i.fa-li.fas.fa-dot-circle.txt--brown
                      | #[strong.txt--orange Desde lo técnico:] informa sobre la temática propuesta por el usuario.
                    li.mb-2
                      i.fa-li.fas.fa-dot-circle.txt--brown
                      | #[strong.txt--orange Desde lo práctico:] genera y potencia la construcción de conocimiento nuevo.
                    li.mb-2
                      i.fa-li.fas.fa-dot-circle.txt--brown
                      | #[strong.txt--orange Desde lo estratégico:] genera análisis de la temática propuesta por el usuario al procesar la información. 
                .col-lg-5.d-none.d-lg-flex
                  figure
                    img(src='@/assets/curso/temas/t2/t2_13.png')          

          

      p.mb-5 En el esquema que se muestra a continuación, se mencionan los principales servicios que prestan las bibliotecas, para el apoyo en la construcción del conocimiento.

      .row.justify-content-center.mb-5
        .col-lg-7
          .titulo-sexto.color-acento-contenido.mb-5
            h5 Figura 2.
            span Principales servicios de apoyo en modalidades de atención en bibliotecas         
          figure
            img(src='@/assets/curso/temas/t2/t2_14.svg') 

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-7
          .cstm_H3.mb-4
            .row.align-items-end
              .col-auto             
                figure
                  img(src="@/assets/curso/temas/recursos/halfCircle_05.svg", alt="alt").img85     
              .col
                h3.mb-2 Material bibliográfico 

          p.mb-0 El material bibliográfico de una biblioteca es la cantidad de libros, revistas, investigaciones y demás fuentes universales, nacionales o regionales de datos impresos o digitales con las que cuenta. Este material se crea según las necesidades de la comunidad; su actualización y stock dependen del volumen de consulta que se proyecte; y su variación se da según la demanda de información de los usuarios.

        .col-lg-5
          figure
            img(src='@/assets/curso/temas/t2/t2_15.png' alt='')

    p.text-center.mb-5 El principal material bibliográfico existente en una biblioteca, se distribuye y clasifica así:

    .row.justify-content-center
      .col-xl-4.col-md-6.mb-4(data-aos="flip-left")       
        .crd_hover_txt.br_01                
          .crd_hover_txt--img.mb-0.p-4       
            img(src="@/assets/curso/temas/t2/t2_16.png").mb-4
            h4.text-white.text-center Impreso

          .crd_hover_txt--font 
            .txt--container
              h4.text-white.text-center Impreso
              p.text-white.text-center.mb-0 Revistas, libros, catálogos y demás investigaciones.

      .col-xl-4.col-md-6.mb-4(data-aos="flip-left")       
        .crd_hover_txt.br_01                
          .crd_hover_txt--img.mb-0.p-4       
            img(src="@/assets/curso/temas/t2/t2_17.png").mb-4
            h4.text-white.text-center Magnético

          .crd_hover_txt--font 
            .txt--container
              h4.text-white.text-center Magnético
              p.text-white.text-center.mb-0 Bases de datos, CD, directorios, índices, resúmenes. 

      .col-xl-4.col-md-6.mb-4(data-aos="flip-left")       
        .crd_hover_txt.br_01                
          .crd_hover_txt--img.mb-0.p-4       
            img(src="@/assets/curso/temas/t2/t2_18.png").mb-4
            h4.text-white.text-center Electrónico

          .crd_hover_txt--font 
            .txt--container
              h4.text-white.text-center Electrónico
              p.text-white.text-center.mb-0 Documentos en línea como revistas, libros, catálogos, investigaciones, directorios, resúmenes y demás datos.

    .row.justify-content-center
      .col-xl-6.mb-4.mb-xl-0
        .bg--darkBlue.br_01.py-3.pe-4
          .row.align-items-center  
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/warning_02.svg", alt="alt").img120
            .col
              h5.txt--orange ¡Importante!
              p.text-white.mb-0 El usuario, en su gestión, puede ser parte de la solicitud de actualización bibliográfica de la biblioteca, teniendo en cuenta el procedimiento que tenga la misma para la solicitud de material nuevo o actualización del existente. 

      .col-xl-6
        .bg--Orange.br_01.py-3.pe-4
          .row.align-items-center  
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/warning_02.svg", alt="alt").img120
            .col
              h5 ¡Atención! 
              p.mb-0 Por otro lado, la responsabilidad e inventario de los libros y demás material se hace según lo tenga estipulado la entidad ya sea por medio electrónico y físico. Así mismo, la consulta al usuario cuando requiere información.     



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
