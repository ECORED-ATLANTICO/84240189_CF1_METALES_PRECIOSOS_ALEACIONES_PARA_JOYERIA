<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
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
      .col-12.col-lg-10
        #t_8_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 8.2 Manejo
        .mb-0
    
    .row.justify-content-center.align-items-center.mb-3
      .col-7.col-lg-3.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema_8/img_8.png', class="img-fluid")
      .col-12.col-lg-7.mb-0
        LineaTiempoD.color-primario-10
          .row(numero="1" titulo="Nivelar la balanza")
            .col-md-12.mb-3.mb-md-0
              p.text-small Una balanza desnivelada altera el cálculo del metal fino y provoca errores en la receta de la aleación.
          .row(numero="2" titulo="Encender y estabilizar antes de pesar")
            .col-md-12.mb-3.mb-md-0
              p.text-small Evita fluctuaciones que pueden modificar gramos necesarios para ligas o fundentes.
          .row(numero="3" titulo="Usar recipientes tareados")
            .col-md-12.mb-3.mb-md-0
              p.text-small Permite descontar el peso del recipiente para obtener solo el peso real del metal. Indispensable al fundir oro o plata recuperada.
          .row(numero="4" titulo="Evitar corrientes de aire o vibraciones")
            .col-md-12.mb-3.mb-md-0
              p.text-small Afecta especialmente balanzas analíticas; un error de 0.01 g cambia proporciones de aleación en piezas pequeñas.
          .row(numero="5" titulo="Limpiar después de cada uso")
            .col-md-12.mb-3.mb-md-0
              p.text-small Previene contaminación cruzada entre metales o partículas que puedan alterar la pureza.
          .row(numero="6" titulo="Calibrar periódicamente con pesas patrón")
            .col-md-12.mb-3.mb-md-0
              p.text-small Garantiza exactitud en cálculos de metales preciosos, evitando que una desviación afecte purezas como 750 o 925.
          .row(numero="7" titulo="Registrar pesos antes y después del proceso")
            .col-md-12.mb-3.mb-md-0
              p.text-small Permite calcular merma real y ajustar futuras cargas para fundición.
 
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
