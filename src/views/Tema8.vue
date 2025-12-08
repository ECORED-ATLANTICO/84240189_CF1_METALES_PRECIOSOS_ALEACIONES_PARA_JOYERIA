<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    // ============================================
    // MÓDULO 8 - INSTRUMENTOS DE PESO
    // ============================================

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Instrumentos de peso

    Separador 

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12  
        #t_8_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 8.1 Concepto y clases
        .mb-0

    Separador 

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12  
        #t_8_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 8.2 Manejo
        .mb-0
 
</template>

<script>
export default {
  name: 'Tema8',
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
