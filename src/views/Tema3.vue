<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Insumos
    .tarjeta.color-secundario-20.rounded-0.overflow-hidden.mb-5(data-aos="fade-right")
      .row.g-0.align-items-stretch
        .col-12.col-lg-5.mb-lg-0.mb-3
          img(src="@/assets/curso/temas/tema_3/img_1.png", class="w-100 h-100", style="object-fit: cover; min-height: 200px;")
        .col-12.col-lg-7
          .p-4.p-lg-5.d-flex.align-items-center.h-100
            div
              p.mb-0 Los insumos representan todos los materiales complementarios necesarios para realizar procesos de aleación, fundición y transformación de metales preciosos. Aunque no forman parte directa de la joya terminada, permiten que las operaciones se ejecuten de manera eficiente, segura y con la calidad requerida. Su correcta selección y dosificación es fundamental para lograr aleaciones estables, colores definidos, buena fluidez del metal y acabados adecuados. Además, el uso controlado de insumos evita desperdicios, reduce costos y contribuye al cumplimiento de estándares técnicos en la producción de piezas de joyería.

    Separador 
    
    .bg_img_4.mb-5

      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-10
          #t_3_1.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 3.1 Concepto y clases
          .mb-0
          p.mb-5 Los insumos son materiales auxiliares utilizados en los procesos de fundición, afinación, limpieza, unión y acabado de metales preciosos. No se integran como componente principal de la joya, pero intervienen para facilitar transformaciones físicas y químicas, mejorar la manipulación del metal o protegerlo durante el proceso.

      .row.justify-content-center.align-items-center.mb-0
        .col-8.col-lg-3.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema_3/img_3.png', class="img-fluid")
        .col-12.col-lg-7
          .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-12 col-md-12 col-lg-6")
              .tarjeta--blanca-1.h-95
                .row.justify-content-center.align-items-center.mb-0
                  .col-12.mb-3
                    .tarjeta--1
                  h5.mb-3.text-center.text-white
                    span.texto-resaltado.texto-resaltado--color-acento-contenido.rounded-0 Fundentes 
                  p.mb-3.text-center Sustancias como bórax, carbonato de sodio y fluoroboratos que bajan el punto de fusión, evitan la oxidación y mejoran la fluidez del metal durante la fundición.
              .tarjeta--blanca-1.h-95
                .row.justify-content-center.align-items-center.mb-0
                  .col-12.mb-3
                    .tarjeta--2
                  h5.mb-3.text-center.text-white
                    span.texto-resaltado.texto-resaltado--color-acento-contenido.rounded-0 Sales y ácidos de limpieza
                  p.mb-3.text-center Incluyen ácido sulfúrico diluido, ácido nítrico y soluciones decapantes. Se usan para eliminar óxidos y residuos superficiales después de la fundición o soldadura.
              .tarjeta--blanca-1.h-95
                .row.justify-content-center.align-items-center.mb-0
                  .col-12.mb-3
                    .tarjeta--3
                  h5.mb-3.text-center.text-white
                    span.texto-resaltado.texto-resaltado--color-acento-contenido.rounded-0 Combustibles y gases
                  p.mb-3.text-center Gas propano, oxígeno y acetileno, necesarios para generar el calor en procesos como soldadura, recocido y fundición.
              .tarjeta--blanca-1.h-95
                .row.justify-content-center.align-items-center.mb-0
                  .col-12.mb-3
                    .tarjeta--4
                  h5.mb-3.text-center.text-white
                    span.texto-resaltado.texto-resaltado--color-acento-contenido.rounded-0 Material refractario
                  p.mb-3.text-center Crisoles, copelas, ladrillos refractarios y cucharillas que soportan altas temperaturas y contienen el metal durante la fundición.
              .tarjeta--blanca-1.h-95
                .row.justify-content-center.align-items-center.mb-0
                  .col-12.mb-3
                    .tarjeta--5
                  h5.mb-3.text-center.text-white
                    span.texto-resaltado.texto-resaltado--color-acento-contenido.rounded-0 Soldaduras
                  p.mb-3.text-center Aleaciones de baja fusión (duras, medias y blandas) utilizadas para unir piezas de oro, plata o platino sin deformar el metal base.
              .tarjeta--blanca-1.h-95
                .row.justify-content-center.align-items-center.mb-0
                  .col-12.mb-3
                    .tarjeta--6
                  h5.mb-3.text-center.text-white
                    span.texto-resaltado.texto-resaltado--color-acento-contenido.rounded-0 Granallas y aditivos
                  p.mb-3.text-center Pequeñas bolitas de metal o sustancias para ajustar color, dureza o fluidez de la aleación.
              .tarjeta--blanca-1.h-95
                .row.justify-content-center.align-items-center.mb-0
                  .col-12.mb-3
                    .tarjeta--7
                  h5.mb-3.text-center.text-white
                    span.texto-resaltado.texto-resaltado--color-acento-contenido.rounded-0 Materiales abrasivos
                  p.mb-3.text-center Lijas, pastas, discos y limas necesarias para desbaste, pulido y acabado.
              .tarjeta--blanca-1.h-95
                .row.justify-content-center.align-items-center.mb-0
                  .col-12.mb-3
                    .tarjeta--8
                  h5.mb-3.text-center.text-white
                    span.texto-resaltado.texto-resaltado--color-acento-contenido.rounded-0 Agentes protectores
                  p.mb-3.text-center Grafito, carbón vegetal y películas protectoras para evitar oxidación excesiva durante recocido o fusión.

      Separador 

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10
          #t_3_2.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 3.2 Cálculo
          .mb-0
      .row.justify-content-center.align-items-center.mb-5
        .col-6.col-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_3/img_12.png", class="img-fluid")
        .col-12.col-lg-8(data-aos="zoom-in-right")
          p.mb-0 El cálculo de insumos es el proceso mediante el cual se determina la cantidad exacta de metales preciosos, metales de liga y materiales auxiliares necesarios para obtener una aleación con el color, la ley y el comportamiento mecánico requerido para fabricar una pieza de joyería. Para realizar estos cálculos es fundamental comprender la relación entre kilates y milésimas, reconocer las propiedades de los metales, manejar unidades de medida de masa y aplicar operaciones matemáticas básicas. Un cálculo preciso garantiza que la joya cumpla con las características solicitadas por el cliente y evita pérdidas de material durante la fundición. Los elementos básicos del cálculo de insumos son: 
      
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="zoom-in-right")
        p.mb-0 A continuación, se presenta un procedimiento básico para calcular los insumos necesarios en una aleación. Estos pasos permiten identificar los datos iniciales, aplicar las proporciones correspondientes y determinar la cantidad exacta de metal fino y liga requerida para alcanzar la ley o kilataje deseado:

    .bg_img_5.mb-5
      .row.justify-content-center.align-items-center.mb-0     
        .col-12.col-lg-10
          PasosA.color-acento-botones.mb-5(tipo="n")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-8.order-2.order-lg-1.mb-0.text-justify
                h3.mb-3 
                p.mb-0 
              .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_3/img_13.png', class="img-fluid")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-3.mb-lg-0.mb-3.d-flex
                figure.d-flex.align-items-stretch.w-100.mb-3
                  img(src='@/assets/curso/temas/tema_3/img_14.png', class="img-fluid")
              .col-12.col-lg-9.mb-lg-0.mb-3.text-justify
                h3.mb-3 
                p.mb-0 
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-8.order-2.order-lg-1.mb-0.text-justify
                h3.mb-3 
                p.mb-0 
              .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_3/img_15.png', class="img-fluid")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-4.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_3/img_16.png', class="img-fluid")
              .col-12.col-lg-8.mb-0.text-justify
                h3.mb-3 
                p.mb-0 
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-8.order-2.order-lg-1.mb-0.text-justify
                h3.mb-3 
                p.mb-0 
              .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_3/img_17.png', class="img-fluid")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-4.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_3/img_18.png', class="img-fluid")
              .col-12.col-lg-8.mb-0.text-justify
                h3.mb-3 
                p.mb-0 
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-8.order-2.order-lg-1.mb-0.text-justify
                h3.mb-3 
                p.mb-0 
              .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
                figure
                  img(src='@/assets/curso/temas/tema_3/img_19.png', class="img-fluid")

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
