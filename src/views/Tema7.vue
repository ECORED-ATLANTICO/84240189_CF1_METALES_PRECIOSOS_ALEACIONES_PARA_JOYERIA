<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Unidades de medida 
    
    .tarjeta.color-primario-20.rounded-0.overflow-hidden.mb-5(data-aos="fade-right")
      .row.g-0.align-items-stretch
        .col-12.col-lg-5.mb-lg-0.mb-3
          img(src="@/assets/curso/temas/tema_7/img_1.png", class="w-100 h-100", style="object-fit: cover; min-height: 200px;")
        .col-12.col-lg-7
          .p-4.p-lg-5.d-flex.align-items-center.h-100
            div
              p.mb-0 El dominio de las unidades de medida es fundamental para cualquier proceso de joyería, ya que permite calcular materiales con precisión, estandarizar recetas de aleaciones, medir piezas durante el diseño y controlar el consumo de insumos. Las unidades de longitud, masa y volumen se aplican de manera constante durante la preparación de aleaciones, fundición, engaste, laminado y fabricación de piezas. A continuación, se desarrolla cada tipo de unidad y sus aplicaciones prácticas.

    Separador 
    
    .bg_img_9.mb-0

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10
          #t_7_1.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 7.1 Longitud
          .mb-0

          p.mb-0 La longitud es fundamental para determinar dimensiones de láminas, alambres, piezas en cera y componentes utilizados antes del proceso de fundición. Estas medidas permiten estimar masa, ajustar cálculos de material y garantizar precisión en operaciones como laminado, trefilado y calado, necesarias para preparar insumos de aleación con volumen y peso controlado.

      .row.justify-content-center.align-items-center.mb-5
        .col-6.col-lg-3.mb-lg-0.mb-3(data-aos="flip-left")
          figure
            img(src="@/assets/curso/temas/tema_7/img_3.png", class="img-fluid")
        .col-12.col-lg-7(data-aos="zoom-in-right")
          TabsA.mb-0.tarjeta-tabs-a.color-terciario.custom-2
            .tarjeta.color-secundario-10.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Milímetro  (mm)")
              .row.justify-content-center.align-items-center.mb-0
                .col-12.col-lg-8.order-2.order-lg-1.mb-0
                  p.mb-0 Permite medir espesores de láminas y diámetros de hilos antes de fundir o laminar. Una variación en mm cambia el peso, lo que modifica la cantidad de metal fino requerida.
                .col-6.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
                  figure
                    img(src="@/assets/curso/temas/tema_7/img_4.svg", class="img-fluid")
            .tarjeta.color-secundario-10.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Centímetro (cm)")
              .row.justify-content-center.align-items-center.mb-0
                .col-12.col-lg-8.order-2.order-lg-1.mb-0
                  p.mb-0 Se usa para medir longitudes de hilos y segmentos de lámina. Su aplicación directa permite estimar cuántos gramos se necesitan según la longitud útil antes de preparar la aleación.
                .col-6.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
                  figure
                    img(src="@/assets/curso/temas/tema_7/img_5.svg", class="img-fluid")
            .tarjeta.color-secundario-10.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Pulgada (in)")
              .row.justify-content-center.align-items-center.mb-0
                .col-12.col-lg-8.order-2.order-lg-1.mb-0
                  p.mb-0 Herramientas como alicates o brocas usan pulgadas. Su conversión permite ajustar dimensiones cuando se requiere fundir material equivalente a una medida dada.
                .col-6.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
                  figure
                    img(src="@/assets/curso/temas/tema_7/img_6.svg", class="img-fluid")
            .tarjeta.color-secundario-10.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Micra (µm)")
              .row.justify-content-center.align-items-center.mb-0
                .col-12.col-lg-8.order-2.order-lg-1.mb-0
                  p.mb-0 Se usa en control del espesor de baños metálicos o capas aplicadas sobre piezas. Relaciona grosor con la masa depositada, lo que afecta cálculos de consumo de metal.
                .col-6.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
                  figure
                    img(src="@/assets/curso/temas/tema_7/img_7.svg", class="img-fluid")

      Separador 
 
      #t_7_2.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 7.2 Masa
      .mb-0    
    
      .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
        .bloque-texto-t__img.mb-0
          figure
            img(src='@/assets/curso/temas/tema_7/img_8.png')
        .bloque-texto-t__texto.bloque-texto-t.color-secundario-5.col-10.mb-0.p-4.rounded-5
          p.mb-0 La masa es el eje central del componente, ya que todos los cálculos de aleaciones (fino, ligas, mermas, fundentes, entre otras) dependen directamente del peso. Cada unidad está vinculada al proceso de mezcla de metales, preparación de recetas, control de purezas y estimación de pérdidas.
    
    .row.justify-content-center.align-items-center.mb-0
      .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="flip-left")
        figure
          img(src='@/assets/curso/temas/tema_7/img_9.png', class="img-fluid")
      .col-12.col-lg-7
        .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-12 col-md-12 col-lg-6")
            .tarjeta--color-primario-10.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--17
                h5.mb-3.text-center
                  span.texto-resaltado.texto-resaltado--color-acento-botones.rounded-0 Anillos 
                p.mb-3.text-center Piezas circulares que se ajustan al dedo. Pueden ser lisos, con engastes o con diseño calado.
            .tarjeta--color-primario-10.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--18
                h5.mb-3.text-center
                  span.texto-resaltado.texto-resaltado--color-acento-botones.rounded-0 Aretes
                p.mb-3.text-center Piezas que se colocan en las orejas, como topos, argollas o colgantes. Suelen requerir sistemas de cierre.
            .tarjeta--color-primario-10.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--19
                h5.mb-3.text-center
                  span.texto-resaltado.texto-resaltado--color-acento-botones.rounded-0 Cadenas y collares
                p.mb-3.text-center Formados por eslabones o mallas; pueden sostener dijes o estar decorados por sí mismos.
            .tarjeta--color-primario-10.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--20
                h5.mb-3.text-center
                  span.texto-resaltado.texto-resaltado--color-acento-botones.rounded-0 Pulseras
                p.mb-3.text-center Similar a las cadenas, pero diseñadas para la muñeca. Incluyen rígidas, articuladas o de eslabones.
            .tarjeta--color-primario-10.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--21
                h5.mb-3.text-center
                  span.texto-resaltado.texto-resaltado--color-acento-botones.rounded-0 Dijes y colgantes
                p.mb-3.text-center Elementos decorativos que cuelgan de cadenas o pulseras, con formas variadas.
            
    Separador 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10
        #t_7_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 7.3 Volumen
        .mb-0

        p.mb-0(data-aos="fade-right") El volumen interviene en procesos previos a la fundición, como preparación de revestimientos, cálculo del volumen ocupado por la cera y estimación del peso resultante del metal fundido. Estas mediciones permiten anticipar cuánta aleación preparar y cuánto material se consumirá.
      
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/tema_7/img_15.png", class="img-fluid")
      .col-12.col-lg-7.mb-0(data-aos="fade-right")
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--color-sistema-h")
          div(titulo="Mililitro (mL)")
            p.mb-0 Se usa en mezclas de yeso/revestimiento donde la proporción agua - polvo es crítica para una fundición adecuada.
          div(titulo="Centímetro cúbico (cm³)")
            p.mb-0 Se aplica para calcular el volumen de modelos en cera y convertirlo a peso de metal usando su densidad; útil para estimar cuánta aleación preparar.
          div(titulo="Litro (L)")
            p.mb-0 Utilizado en soluciones químicas como decapado o limpieza. Permite preparar cantidades mayores manteniendo proporciones correctas.
          div(titulo="Milímetro cúbico (mm³)")
            p.mb-0 Relevante en detalles muy pequeños donde el volumen afecta directamente la masa del metal requerido para fundir.
      
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
