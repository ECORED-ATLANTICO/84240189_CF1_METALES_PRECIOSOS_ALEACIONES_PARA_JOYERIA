<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    // ============================================
    // MÓDULO 1 - METALES
    // ============================================

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Metales

    Separador 

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12  
        #t_1_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 1.1 Concepto y clases
        .mb-0

    Separador 

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12  
        #t_1_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 1.2 Propiedades y aplicaciones
        .mb-0

    Separador 

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12  
        #t_1_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 1.3 Origen, afinación y recuperación
        .mb-0

    Separador 

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12  
        #t_1_4.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 1.4 Simbología
        .mb-0

 
</template>

<script>
export default {
  name: 'Tema1',
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
