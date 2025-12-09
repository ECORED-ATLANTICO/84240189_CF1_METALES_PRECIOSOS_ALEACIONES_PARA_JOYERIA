<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Piezas para joyería

    Separador 

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12  
        #t_5_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 5.1 Concepto y clases
        .mb-0

    Separador 

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12  
        #t_5_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 5.2 Características
        .mb-0

    Separador 

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12  
        #t_5_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 5.3 Técnicas de elaboración
        .mb-0


</template>

<script>
export default {
  name: 'Tema5',
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
