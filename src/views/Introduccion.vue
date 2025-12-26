<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-5.mb-lg-0.mb-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/introduccion/img_1.png", class="img-fluid")
      .col-12.col-lg-7
        p.mb-3 El componente formativo Metales, insumos y cálculos para aleaciones, ofrece al aprendiz herramientas técnicas y prácticas para abordar la identificación de metales, la selección de insumos y la proyección de cantidades de material según los requerimientos del cliente. A partir del conocimiento de las propiedades, clases y simbología de los metales, así como de los fundamentos matemáticos aplicados, se fortalecen las habilidades para realizar cálculos precisos, interpretar características de los materiales y garantizar la coherencia técnica en la formulación de aleaciones.
        .cita-decorada
          blockquote.cita-decorada__caja.cita-decorada__caja--fondo-1.p-3
            .row.justify-content-center.align-items-center
              .col-4.col-lg-2.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/introduccion/img_2.png', class="img-fluid d-none d-lg-block mb-0")
              .col-12.col-lg-10
                p.cita-decorada__texto.mb-2.p-3 Este componente también enfatiza el análisis de los materiales e insumos para fundición y la comprensión de las piezas de joyería, con un enfoque en las condiciones físicas, mecánicas y de calidad del producto final. Además, promueve el manejo adecuado de unidades de medida y de instrumentos de peso, integrando criterios de rigurosidad técnica. Así, se contribuye a la formación de un aprendiz competente en procesos de aleación y transformación de metales preciosos.
    
    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ZQgiaWmrVpg?si=rxux4CFAVdDchrG-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Metales, insumos y cálculos para aleaciones

</template>

<script>
export default {
  name: 'Introduccion',
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
