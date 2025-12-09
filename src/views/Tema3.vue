<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Insumos

    Separador 

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12  
        #t_3_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 3.1 Concepto y clases
        .mb-0

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
