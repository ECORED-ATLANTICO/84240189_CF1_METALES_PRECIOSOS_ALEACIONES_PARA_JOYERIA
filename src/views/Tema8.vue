<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Instrumentos de peso
  
    .bg_img_10.mb-5

      .row.justify-content-center.align-items-center.mb-5
        .col-6.col-lg-2.mb-lg-0.mb-3(data-aos="flip-left")
          figure
            img(src="@/assets/curso/temas/tema_8/img_1.png", class="img-fluid")
        .col-12.col-lg-8(data-aos="zoom-in-right")
          p.mb-0 El control del peso es fundamental en la preparación de aleaciones, el cálculo de metal fino, la dosificación de ligas y la verificación de la merma. Para garantizar exactitud en estos procesos, se emplean instrumentos de pesaje específicos que permiten trabajar desde cantidades muy pequeñas hasta valores mayores según el tipo de aleación o pieza requerida.

      Separador 

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-12  
          #t_8_1.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 8.1 Concepto y clases
          .mb-0
          
          p.mb-3(data-aos="fade-right") Los instrumentos de peso son equipos diseñados para medir con precisión la masa de metales preciosos, ligas, fundentes y otros insumos utilizados en fundición y fabricación de joyería. Su correcta selección contribuye a obtener aleaciones exactas y a evitar desviaciones en pureza o proporciones. Las clases de instrumentos más utilizados son:
    
    .bg_img_3.mb-5
      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
        .row.justify-content-center.align-items-center
          .col-12.col-lg-3.order-2.order-lg-1.mb-0
            h5 Balanza analítica
            p.mb-3 Alta precisión (0.001 g). Fundamental para pesar oro fino, plata, paladio, y ligas con exactitud. Se usa en los cálculos de pureza y aleación.
          .col-12.col-lg-7.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_8/img_3.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-3.order-2.order-lg-1.mb-0
            h5 Balanza gramera digital
            p.mb-3 Precisión de 0.01 g. Adecuada para pesar fundente, soldaduras, yesos y metales cuando no se requiere alta exactitud.
          .col-12.col-lg-7.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_8/img_4.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-3.order-2.order-lg-1.mb-0
            h5 Balanza mecánica o romana
            p.mb-3 Menos precisa; se emplea para pesar materiales en cantidades mayores como yesos, revestimientos o piezas grandes de metal reciclado.
          .col-12.col-lg-7.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_8/img_5.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-3.order-2.order-lg-1.mb-0
            h5 Microbalanza
            p.mb-3 Permite medir cantidades extremadamente pequeñas. Se usa para calibrar pequeñas diferencias en ligas o cuando se trabaja con piezas de muy poco peso.
          .col-12.col-lg-7.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_8/img_6.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-3.order-2.order-lg-1.mb-0
            h5 Pesas patrón
            p.mb-3 Sirven para verificar y calibrar las balanzas. Aseguran exactitud en los cálculos de aleaciones.
          .col-12.col-lg-7.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_8/img_7.png', class="img-fluid")
  
        
    Separador 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10
        #t_8_2.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 8.2 Manejo
        .mb-0

        p.mb-0(data-aos="fade-right") El manejo correcto de los instrumentos garantiza que los cálculos de metal fino, ligas, merma y fundentes sean precisos. Esto evita errores en la pureza final y asegura que la aleación cumpla con la ley establecida: 
    
    .row.justify-content-center.align-items-center.mb-3
      .col-7.col-lg-3.mb-lg-0.mb-3(data-aos="flip-left")
        figure
          img(src='@/assets/curso/temas/tema_8/img_8.png', class="img-fluid")
      .col-12.col-lg-7.mb-0(data-aos="fade-right")
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
