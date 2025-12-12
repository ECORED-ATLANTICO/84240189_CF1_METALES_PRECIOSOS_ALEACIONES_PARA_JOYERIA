<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-3.mb-lg-0.mb-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/sintesis/img_1.png", class="img-fluid")
      .col-12.col-lg-9
        p.mb-3 El componente formativo Metales, insumos y cálculos para aleaciones aborda los fundamentos necesarios para el trabajo técnico en joyería, desde su comprensión conceptual hasta su aplicación en procesos de elaboración. Se inicia con el estudio de los metales, sus clases, propiedades, aplicaciones, origen y simbología. Posteriormente, se profundiza en la merma, lo que permite establecer su importancia en el control y optimización de materiales. Asimismo, se analizan los insumos y su cálculo, proporcionando herramientas para su correcta selección y uso. Se presentan los materiales e insumos para fundición, que influyen en la calidad del metal fundido, así como sus características técnicas. La documentación aborda también las piezas para joyería, sus conceptos, clases, características y técnicas básicas de elaboración. Para fortalecer la aplicación de estos contenidos, se incluyen aspectos de matemática básica y unidades de medida relacionadas con longitud, masa y volumen. Finalmente, se analiza el manejo de los instrumentos de peso, esenciales para garantizar precisión durante todo el proceso de trabajo con metales y aleaciones. 
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="El componente formativo Metales, insumos y cálculos para aleaciones ofrece una aproximación integral a los conocimientos fundamentales sobre los metales empleados en joyería y los insumos necesarios para su transformación. Este módulo analiza detalladamente sus clases, propiedades, aplicaciones y procesos básicos, resaltando su papel en la calidad de las aleaciones, y se desglosan también los elementos relacionados con la simbología técnica. Asimismo, se estudian los conceptos y cálculos de merma, claves para el control del material. La propuesta profundiza en los diferentes insumos y en los materiales para fundición, así como en sus características y función en el proceso. Además, se destacan los contenidos sobre piezas de joyería junto con sus clases, características y técnicas de elaboración, enfatizando los aspectos esenciales para su fabricación. Para complementar, se integran nociones de matemática básica, unidades de medida y manejo de instrumentos de peso, necesarios para la precisión en el trabajo con metales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
