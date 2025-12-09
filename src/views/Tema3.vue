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
                    .tarjeta--7
                  .tarjeta--slider__title.mb-3.text-center.fw-bold
                    span.texto-resaltado.texto-resaltado--color-acento-contenido.rounded-0
                  .tarjeta--slider__content.text-center 
              .tarjeta--blanca-1.h-95
                .row.justify-content-center.align-items-center.mb-0
                  .col-12.mb-3
                    .tarjeta--8
                  .tarjeta--slider__title.mb-3.text-center.fw-bold
                    span.texto-resaltado.texto-resaltado--color-acento-contenido.rounded-0
                  .tarjeta--slider__content.text-center 
              .tarjeta--blanca-1.h-95
                .row.justify-content-center.align-items-center.mb-0
                  .col-12.mb-3
                    .tarjeta--9
                  .tarjeta--slider__title.mb-3.text-center.fw-bold
                    span.texto-resaltado.texto-resaltado--color-acento-contenido.rounded-0
                  .tarjeta--slider__content.text-center 

    Separador 

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12  
        #t_3_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 3.2 Cálculo
        .mb-0

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
