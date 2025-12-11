<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Matemática básica
    
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        .cita-decorada(data-aos="zoom-in-right")
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-2.p-4
            .row.justify-content-center.align-items-center
              .col-8.col-lg-3.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema_6/img_1.png', class="cita-decorada__imagen-flotante-5")
              .col-10.col-lg-9
                p.cita-decorada__texto.mb-2.p-3 La matemática básica constituye una herramienta esencial para el trabajo en joyería, ya que permite realizar cálculos precisos en la preparación de aleaciones, la determinación de insumos, el control de mermas y la medición de materiales. El dominio de estas operaciones garantiza exactitud, aprovechamiento eficiente del metal y calidad en los procesos de fabricación.

    Separador 
    
    .bg_img_8.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10
          #t_6_1.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 6.1 Operaciones fundamentales
          .mb-0

          p.mb-0 Las operaciones fundamentales, suma, resta, multiplicación y división, se aplican en casi todas las actividades del proceso joyero. Sus usos principales dentro del programa incluyen:

      .row.justify-content-center.align-items-center.mb-5
        .col-6.col-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
          figure
            img(src="@/assets/curso/temas/tema_6/img_3.png", class="img-fluid")
        .col-12.col-lg-8(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.g-3
            .col-12.col-lg-5(data-aos="fade-up")
              .tarjeta-causa.h-100
                .d-flex.align-items-center.gap-3
                  .icono-causa
                    img(src="@/assets/curso/temas/tema_6/img_4.svg", class="img-fluid")
                  .texto-causa
                    p.mb-0 Cálculo de pesos y proporciones en metales finos y ligas.
            .col-12.col-lg-7(data-aos="fade-up")
              .tarjeta-causa.h-100
                .d-flex.align-items-center.gap-3
                  .icono-causa
                    img(src="@/assets/curso/temas/tema_6/img_4.svg", class="img-fluid")
                  .texto-causa
                    p.mb-0 Determinación de insumos auxiliares, como fundentes y consumibles.
            .col-12.col-lg-5(data-aos="fade-up")
              .tarjeta-causa.h-100
                .d-flex.align-items-center.gap-3
                  .icono-causa
                    img(src="@/assets/curso/temas/tema_6/img_4.svg", class="img-fluid")
                  .texto-causa
                    p.mb-0 Ajustes en medidas durante laminado, trefilado y modificación de piezas.
            .col-12.col-lg-7(data-aos="fade-up")
              .tarjeta-causa.h-100
                .d-flex.align-items-center.gap-3
                  .icono-causa
                    img(src="@/assets/curso/temas/tema_6/img_4.svg", class="img-fluid")
                  .texto-causa
                    p.mb-0 Estimar mermas en procesos de corte, fundición y pulido.
            .col-12.col-lg-10(data-aos="fade-up")
              .tarjeta-causa.h-100
                .d-flex.align-items-center.gap-3
                  .icono-causa
                    img(src="@/assets/curso/temas/tema_6/img_4.svg", class="img-fluid")
                  .texto-causa
                    p.mb-0 Conversión de unidades (gramos, miligramos, onzas, entre otros).
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10(data-aos="zoom-in-right")
          .cita-decorada(data-aos="zoom-in-right")
            blockquote.cita-decorada__caja.cita-decorada__caja--fondo-3.p-3
              .row.justify-content-center.align-items-center
                .col-10.col-lg-8
                  p.cita-decorada__texto.mb-2.p-3 Estas operaciones permiten operar con cantidades pequeñas y exactas, característica fundamental en la manufactura de joyas y metales preciosos, donde una mínima variación puede alterar la ley final o la calidad de la pieza.
                .col-8.col-lg-4.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/temas/tema_6/img_6.png', class="cita-decorada__imagen-flotante-6")
    
    Separador 

    #t_6_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.2 Porcentajes y regla de tres
    .mb-0

    
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
