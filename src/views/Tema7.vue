<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Unidades de medida

    Separador 

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12  
        #t_7_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 7.1 Longitud
        .mb-0

    Separador 

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12  
        #t_7_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 7.2 Masa
        .mb-0

    Separador 

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-12  
        #t_7_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 7.3 Volumen
        .mb-0


 
</template>

<script>
export default {
  name: 'Tema7',
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
