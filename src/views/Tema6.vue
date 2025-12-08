<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    // ============================================
    // MÓDULO 6 - MATEMÁTICA BÁSICA
    // ============================================

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Matemática básica

    Separador 

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12  
        #t_6_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 6.1 Operaciones fundamentales
        .mb-0

    Separador 

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12  
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
