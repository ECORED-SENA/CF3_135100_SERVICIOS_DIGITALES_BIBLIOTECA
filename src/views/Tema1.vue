<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Cliente o usuario

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .row.mb-4
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/temas/recursos/circle_01.svg", alt="alt").img85
          .col
            p.mb-0 Para hablar de cliente o usuario de las bibliotecas, se debe antes pensar en por qué y para quién se crean las bibliotecas o cualquier servicio dentro de ellas. Una vez se tenga la respuesta, será posible comprender que el cliente o usuario es la razón de ser de la misma.

        p Comprendido lo anterior se dice que el cliente o usuario de una biblioteca es la persona que requiere de algún tipo de información para cubrir alguna necesidad: ocio, investigación, curiosidad, entretenimiento, formación, entre otras.

      .col-lg-5        
        figure
          img(src="@/assets/curso/temas/t1/t1_01.svg", alt="alt")

    p.text-center.mb-5 Para comprender más y mejor, la definición y concepto de cliente; se invita a que tome nota de la información que se registra en las siguientes tarjetas.

    .row.justify-content-center.mb-5
      .col-lg-4.g-0(data-aos="flip-left")
        .bg--Orange.p-4.hg-100
          figure.mb-4
            img(src="@/assets/curso/temas/t1/t1_02.svg", alt="alt")
          h5 Cliente o usuario
          p Es quien hace uso de la información consultada en la biblioteca, según su necesidad o propósito de consulta.

      .col-lg-4.g-0(data-aos="flip-left")
        .bg--darkOrange.p-4.hg-100
          figure.mb-4
            img(src="@/assets/curso/temas/t1/t1_03.svg", alt="alt")
          h5 Autoasistencia en la consulta
          p Anteriormente, las personas usuarias de bibliotecas se auto asistían, pero con el paso del tiempo se han ido convirtiendo en agentes que dan “vida” y sentido al servicio, a la biblioteca misma.

      .col-lg-4.g-0(data-aos="flip-left")
        .bg--Orange.p-4.hg-100
          figure.mb-4
            img(src="@/assets/curso/temas/t1/t1_04.svg", alt="alt")
          h5 Complementariedad usuario-servicio
          p Entonces, se busca que al satisfacer sus necesidades de consulta y atención, se prolongue la reciprocidad y complementariedad entre ambas partes.

    separador


    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2  1.1 Clasificación de clientes

    .row.justify-content-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p.mb-0 Los clientes en una biblioteca y en cualquier organización se pueden categorizar en internos y externos. Por una parte, #[span.bold.txt--orange clientes internos] hace referencia a todos los que hacen posible la operación de la biblioteca, sean los funcionarios del área administrativa, personal de atención al usuario, voluntarios y demás trabajadores de esta, mientras que los #[span.bold.txt--orange clientes externos], son todos los clientes a quienes se les presta el servicio de biblioteca.
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/t1/t1_05.svg", alt="alt")


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-4.mb-lg-0.d-none.d-lg-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t1/t1_06.png", alt="alt")

      .col-lg-8(data-aos="fade")
        p En cualquier biblioteca, los clientes externos suelen reunir una o varias de las siguientes características:

        LineaTiempoD.color-primario
          .row(numero="1" titulo="Estudiante / investigador")
            .col-12
              p Busca fortalecer su conocimiento por medio de la consulta en periodos de exámenes o trabajos propuestos en su formación académica. Cuando tienden más a la investigación, van en búsqueda de datos y apoyo del personal de la biblioteca para reunir evidencia que les ayude a resolver teorías o formular hipótesis o corroborar alguna información. 

          .row(numero="2" titulo="Usuario de la tercera edad")
            .col-12
              p Suele ingresar a la biblioteca para actualizarse, leer revistas, periódicos, entre otros; busca ocupar su tiempo mientras aprende y amplía saberes. 

          .row(numero="3" titulo="Cliente préstamos")
            .col-12
              p Usa el servicio de biblioteca para la consulta y préstamo de libros o equipos que posteriormente, devuelve. Hace uso de los elementos prestados, fuera de la biblioteca.

          .row(numero="4" titulo="Cliente eventos")
            .col-12
              p Asiste solo cuando se hacen actividades culturales en la biblioteca: talleres, clubes de lectura, conferencias, otros. Su mayor propósito es actualizarse en temas de interés general.

          .row(numero="5" titulo="Cliente virtual")
            .col-12
              p Hace uso de los servicios de biblioteca por internet, por medio de su plataforma en línea.

          .row(numero="6" titulo="Cliente rutinario")
            .col-12
              p Usa los servicios de la biblioteca estrictamente, todos los días posibles y en horarios seleccionados o programados.

          .row(numero="7" titulo="Grupos")
            .col-12
              p Son equipos de personas que hacen sus trabajos o consultas entre dos o más usuarios. La mayoría de las veces se trata de estudiantes.

    .bg--grad_01
      p.pt-4.mb-5 Adicionalmente, existen algunas características secundarias que pueden aplicar a algunos usuarios de bibliotecas:

      .row.justify-content-center.mb-5
        .col-auto
          h4.pill_Black.text-white Características secundarias de usuarios de bibliotecas

      .row.justify-content-center.mb-5
        .col-lg-10
          ImagenInfografica.color-acento-botones(data-aos="zoom-in")
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/t1/t1_07.svg')          

            .bg--darkGray.br_01.p-3(x="22.6%" y="7%" numero="+")
              h5 Conquistador
              p Consulta información y aprovecha su estadía en la biblioteca para conseguir citas o pareja. 

            .bg--darkGray.br_01.p-3(x="47%" y="14%" numero="+")
              h5 Primer hora
              p Este tipo de cliente es el que madruga para ser el primero en llegar y aprovechar al máximo su tiempo y documentarse.

            .bg--darkGray.br_01.p-3(x="79.5%" y="12%" numero="+")
              h5 Alérgico o enfermo
              p Se caracteriza por sus estornudos o tos en el silencio de la biblioteca que, muchas veces, incomoda a algunos usuarios sin querer hacerlo, pero requiere documentarse para su necesidad personal. 

            .bg--darkGray.br_01.p-3(x="8%" y="52%" numero="+")
              h5 Disperso
              p Este tipo de cliente se desconcentra con cualquier sonido o situación que pasa a su alrededor.

            .bg--darkGray.br_01.p-3(x="92%" y="55%" numero="+")
              h5 Difícil o agresivo
              p Tiene la particularidad de no soportar ruido de ninguna índole cuando está haciendo sus consultas, en momentos puede solicitar silencio de forma formal y, en otras, de forma airada. 

            .bg--darkGray.br_01.p-3(x="23.8%" y="82%" numero="+")
              h5 Último momento
              p Llega sobre el momento de cierre de la biblioteca y trata de hacer uso de todos los servicios cuando el tiempo no se lo permite.

            .bg--darkGray.br_01.p-3(x="47.5%" y="92%" numero="+")
              h5 Inseguro
              p Mantiene constante comunicación con el bibliotecario haciendo preguntas que le reafirmen su forma de entender la información. 

            .bg--darkGray.br_01.p-3(x="68%" y="84%" numero="+")
              h5 Cliente social
              p Hace sus consultas, se documenta, pero ve en la biblioteca un lugar en donde puede entablar conversaciones de algún tipo de tema de interés siendo, en muchas ocasiones, molesto para los demás.

      .row.justify-content-center.align-items-center
        .col-lg-7.mb-4
          p Es importante conocer e identificar los tipos de usuarios de bibliotecas, porque de ello depende el buen ambiente dentro de las mismas. Tener conocimiento de los usuarios que acuden al servicio, favorece al equipo de esta, ubicarlos y garantizar, no solo la buena convivencia sino, además, el derecho de las personas a estar y permanecer informados y con acceso al conocimiento e información.

          .bg--darkOrange.p-4.br_01
            .row.align-items-center  
              .col-auto
                figure
                  img(src="@/assets/curso/temas/recursos/warning_01A.svg", alt="alt").img85
              .col
                h5 ¡Atención!
                p.mb-0 El propósito de las bibliotecas es brindar un servicio integral de información a la comunidad y, en muchas ocasiones, las personas no hacen uso de ellas por tiempo o dificultades laborales. Por tanto, es clave generar estrategias que abarquen a todos los tipos de clientes.
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/t1/t1_08.png') 

      separador

      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade")
        h2  1.2  Población vulnerable

      .row.align-items-center.mb-5
        .col-auto
          figure
            img(src='@/assets/curso/temas/recursos/circle_01.svg').img85 
        .col
          p.mb-0 Las bibliotecas, a nivel mundial, ayudan al fortalecimiento de la educación, la investigación, la ciencia y el desarrollo en general. Así mismo, su gestión fomenta el apoyo a las personas menos favorecidas y vulnerables. La atención amplia y universal garantiza no solo la satisfacción de los usuarios frecuentes, sino que, además, promueve las dinámicas de integración e inclusión en otros entornos de la sociedad.

    .bg_img_01.br_01.p-3.mb-5
      .row.justify-content-center.align-items-center
        .col-auto.mb-4.mb-lg-0.img300
          figure
            img(src='@/assets/curso/temas/t1/t1_09.svg') 
        .col-lg-8
          p Ahora, se debe analizar cuidadosamente la siguiente tabla y detallar las definiciones y tipos de personas consideradas vulnerables. Es importante llevar registro de lo más destacado en una libreta de apuntes.

          .row(data-aos="zoom-in")
            .col-auto
              a.anexo.mb-4(:href="obtenerLink('/downloads/Población_vulnerable.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Población vulnerable

    p.text-center.mb-5 En relación con la población vulnerable, tenga presente que:

    .row.justify-content-center
      .col-lg-6.mb-4.mb-lg-0(data-aos="zoom-in-up")
        .bg--gray.hg-100
          .halfbg--gray
            figure
              img(src="@/assets/curso/temas/t1/t1_10.svg", alt="alt").img300.m-auto
          .p-4
            h4.txt--dark.text-center Hábitos de lectura en la sociedad
            p.mb-0 Las personas más vulnerables, dadas las condiciones propias de su realidad y entornos, suelen no tener satisfactorios hábitos de lectura que se evidencian, generalmente, en la comprensión de la misma. 
      .col-lg-6(data-aos="zoom-in-up")
        .bg--gray.hg-100
          .halfbg--gray
            figure
              img(src="@/assets/curso/temas/t1/t1_11.svg", alt="alt").img300.m-auto
          .p-4
            h4.txt--dark.text-center Aportes de las bibliotecas a los hábitos sociales
            p.mb-0 Desde las bibliotecas, la gestión que se haga impactará proporcionalmente la formación, la adhesión a la lectura y la información, el aprovechamiento y buen uso de espacios, tiempos y materiales de los servicios documentales y bibliográficos.

    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade")
        h2 1.3 Servicio al cliente y triángulo del servicio

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/t1/t1_12.png", alt="alt")
      .col-lg-7
        p En este contexto, el servicio al cliente hace referencia a la capacidad que tiene la biblioteca para satisfacer las necesidades y superar las expectativas de su comunidad de usuarios, en lo relacionado con atención y prestación de bienes y servicios de información. Todo ello, a través de estrategias planteadas en cada momento en el que el cliente tiene contacto, de forma directa e indirecta, con la biblioteca.
        .row.align-items-center
          .col-auto.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/temas/recursos/circle_01.svg", alt="alt").img85
          .col
            p Para entender y asimilar adecuadamente la realidad del servicio, se deben reconocer las diferencias y nexos entre la atención y el servicio. Teniendo en cuenta, además, que el servicio y la atención se complementan para tener éxito en la satisfacción de clientes o usuarios de la biblioteca.


    .row.justify-content-center.mb-5
      .col-lg-6.g-0(data-aos="flip-left")
        .bg--darkOrange.p-4.hg-100
          figure.mb-4
            img(src="@/assets/curso/temas/t1/t1_13.svg", alt="alt").img450.m-auto
          h5 El servicio
          p El servicio se trata de todas esas actividades que se realizan en el entorno para que el usuario pueda sentirse a gusto al visitar la biblioteca: el aseo, orden de los libros, pulcritud de los escritorios, tecnología y demás.

      .col-lg-6.g-0(data-aos="flip-left")
        .bg--neutralGray.p-4.hg-100
          figure.mb-4
            img(src="@/assets/curso/temas/t1/t1_14.svg", alt="alt").img450.m-auto
          h5 La atención
          p La atención es la forma directa en que el personal presta el servicio: saludar, resolver inquietudes o inconvenientes, asesorar, informar, entre otras actividades.

    p.mb-5 Ahora se invita a analizar, uno a uno, los momentos del caso que se describe a continuación. Con él, se explican las diferencias y complementariedades entre servicio y atención a usuarios.

    .bg_img_02.pb-5
      SlyderF(columnas="col-xl-4 col-lg-6").mb-5
        .bg_crd_01.text-white.py-5.px-4.br_01
          figure.mb-4
            img(src='@/assets/curso/temas/t1/t1_15.svg' alt='').img90.m-auto              
          h5.text-center Atención amable y oportuna
          p.mb-0.text-center Suponga que usted es usuario de la Biblioteca Nacional a la cual ingresa y le reciben bien, con un saludo jovial, después del cual le guían rápidamente hasta el libro por el que usted acaba de preguntar.

        .bg_crd_01.text-white.py-5.px-4.br_01
          figure.mb-4
            img(src='@/assets/curso/temas/t1/t1_16.svg' alt='').img90.m-auto              
          h5.text-center Humanización de la atención
          p.mb-0.text-center Luego de formalizar el préstamo del libro, le ubican en un escritorio donde hay buena luz, sillas cómodas y computadoras cerca para consultas rápidas adicionales.

        .bg_crd_01.text-white.py-5.px-4.br_01
          figure.mb-4
            img(src='@/assets/curso/temas/t1/t1_17.svg' alt='').img90.m-auto              
          h5.text-center Distorsión del servicio
          p.mb-0.text-center Hasta este punto, su experiencia ha sido satisfactoria, pero, de repente, usted se da cuenta de que su pantalón se ha ensuciado con mugre de la silla que le han asignado. Esto genera en usted e incluso, en otros usuarios, algo de incomodidad y molestia.

        .bg_crd_01.text-white.py-5.px-4.br_01
          figure.mb-4
            img(src='@/assets/curso/temas/t1/t1_18.svg' alt='').img90.m-auto              
          h5.text-center Fallas del servicio
          p.mb-0.text-center Esta situación evidencia fallas del servicio, pero no de la atención, aunque esta se ve afectada.

        .bg_crd_01.text-white.py-5.px-4.br_01
          figure.mb-4
            img(src='@/assets/curso/temas/t1/t1_19.svg' alt='').img90.m-auto              
          h5.text-center Atención versus servicio
          p.mb-0.text-center Este caso refleja, por ejemplo, incumplimiento en horarios del ingreso de los operarios de la limpieza o en el desarrollo de sus funciones. También denota desorden en la disposición de la implementación de la biblioteca.

        .bg_crd_01.text-white.py-5.px-4.br_01
          figure.mb-4
            img(src='@/assets/curso/temas/t1/t1_20.svg' alt='').img90.m-auto              
          h5.text-center Nueva falencia del servicio
          p.mb-0.text-center Además, los computadores donde usted quiso hacer consulta de un glosario no tenían activada la conectividad.

        .bg_crd_01.text-white.py-5.px-4.br_01
          figure.mb-4
            img(src='@/assets/curso/temas/t1/t1_21.svg' alt='').img90.m-auto              
          h5.text-center Atención cálida y permanente
          p.mb-0.text-center Aunque el servicio ha presentado fallas, las personas que le han dado atención durante su infortunada estancia en la Biblioteca Nacional, se han mostrado amables, prestas a solucionar el impase y dispuestas a compensar, de alguna manera, su incomodidad.
      
      .cstm_H3.mb-4
        .row.align-items-end
          .col-auto             
            figure
              img(src="@/assets/curso/temas/recursos/halfCircle_05.svg", alt="alt").img85     
          .col
            h3.mb-3.mb-lg-2 Triángulo del servicio

      p.mb-5 Para mitigar fallas en el servicio al cliente en bibliotecas, se debe tener en cuenta el triángulo del servicio con el usuario e identificar cada momento de verdad, en el ciclo que tiene el cliente en biblioteca. El servicio debe ser, como se define en Albrecht (2001), una #[span.bold.txt--brown filosofía organizacional]. Este triángulo concibe el servicio como un todo encadenado y que rodea al cliente y sus intereses y necesidades, como se observa a continuación.

      .row.justify-content-center.mb-5        
        .col-lg-6 
          .titulo-sexto.color-acento-contenido.mb-5
            h5 Figura 1.
            span Triángulo del servicio en biblioteca
          figure
            img(src='@/assets/curso/temas/t1/t1_22.svg' alt='')

      p.mb-5 Es así como el triángulo del servicio, aplicado al contexto de los servicios de bibliotecas, concibe los componentes de este, como se explica en el siguiente video; se invita a observarlo con atención y tomar nota de los aspectos más destacados.

      figure.mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/76EijHsS6og" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)        

    separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2  1.4 Momentos de verdad con el cliente y su ciclo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p Los #[span.bold.txt--orange momentos de verdad] con el cliente son esas ocasiones en las que el usuario tiene algún tipo de interacción con la biblioteca; en ese instante toma una percepción o idea sobre cómo es el servicio, la capacidad de respuesta a sus consultas y si la entidad puede cumplir con sus requisitos.

        p Cada #[span.bold.txt--orange momento de verdad] con el usuario puede tornar la experiencia en la biblioteca en positiva o negativa, según el manejo que la entidad le dé, debido a que existen factores que pueden afectar la interacción, como no encontrar un parqueadero disponible, un lugar de espera, un espacio en un escritorio, no encontrar un equipo de cómputo para navegar o que la red se caiga en el momento de consulta.

        .bg--paleOrange.p-4
          figure.mb-4
            img(src='@/assets/curso/temas/t1/t1_23.svg' alt='').img450
          h5 Ciclo de servicio 
          p.mb-0 Es importante conocer los momentos de verdad que existen con el cliente, mediante el denominado ciclo de servicio: una representación gráfica de cada momento de la vedad con el usuario, es decir, cada vez que el cliente interactúa con la biblioteca, bien será en forma física o digital.<br><br>Incluir en el modal el gráfico del Ciclo del servicio en biblioteca, que está enseguida, en este Word.

      .col-lg-4.d-none.d-lg-flex
        figure
          img(src='@/assets/curso/temas/t1/t1_24.png' alt='')

    .row.justify-content-center.mb-5
      .col-lg-8
        figure
          img(src='@/assets/curso/temas/t1/t1_25.svg' alt='')

    p El ciclo de servicio en la biblioteca debe ser conocido por todos los funcionarios de esta, para comprender en dónde se puede mejorar o mitigar situaciones imprevistas que representen fallos en el servicio, garantizando la mejor experiencia posible para el usuario.   

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
