<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    // ============================================
    // MÓDULO 4 - MATERIALES E INSUMOS PARA FUNDICIÓN
    // ============================================

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Materiales e insumos para fundición

    Separador 

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12  
        #t_4_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 4.1 Clases y tipos
        .mb-0

    Separador 

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12  
        #t_4_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 4.2 Características
        .mb-0

</template>

<script>
export default {
  name: 'Tema4',
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
