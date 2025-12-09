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

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-4.mb-3(data-aos="zoom-in-right")
          p.mb-0 Los objetivos estratégicos pueden clasificarse en tres niveles jerárquicos que orientan la dirección organizacional. Cada nivel cumple un propósito específico dentro del plan de mercadeo, desde las metas globales hasta las acciones operativas. Su adecuada formulación garantiza coherencia, facilita la toma de decisiones y permite que los equipos comprendan su papel en el logro de los resultados propuestos. 
        .col-12.col-lg-6.mb-3(data-aos="zoom-in-right")
          .custom-slider.tarjeta--fondo__slider.p-2.mb-5.rounded-3
            SlyderF().tarjeta.tarjeta--blanca.p-3.rounded-3
              .row.justify-content-center.align-items-center
                .col-12.col-lg-10.mb-0
                  h5.mb-3 Corporativos
                  p.mb-0 Metas amplias y de largo plazo alineadas con la misión y visión, que orientan la dirección estratégica general de la organización.
              .row.justify-content-center.align-items-center
                .col-12.col-lg-10.mb-0
                  h5.mb-3 Funcionales
                  p.mb-0 Objetivos definidos para áreas específicas, como mercadeo o finanzas, que guían el desempeño y mejoramiento de cada unidad.
              .row.justify-content-center.align-items-center
                .col-12.col-lg-10.mb-0
                  h5.mb-3 Operativos
                  p.mb-0 Propósitos de corto plazo relacionados con tareas concretas y acciones puntuales que facilitan la ejecución operativa diaria.
        
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
