<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Piezas para joyería
    
    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        figure
          img(src='@/assets/curso/temas/tema_5/img_1.png')
      .bloque-texto-t__texto.bloque-texto-t.color-secundario-5.col-10.mb-0.p-4.rounded-5
        p.mb-0 Las piezas para joyería son los elementos finales que se elaboran a partir de metales preciosos y sus aleaciones. Cada pieza requiere materiales específicos, técnicas de elaboración y acabados según su diseño, función y mercado objetivo. Entender sus tipos, características y métodos de fabricación permite seleccionar los insumos adecuados, calcular cantidades de metal y garantizar la calidad del producto terminado.

    Separador 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10
        #t_5_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 5.1 Concepto y clases
        .mb-0
        
        p.mb-0 Las piezas para joyería son objetos decorativos o funcionales elaborados principalmente con metales preciosos y que pueden incorporar gemas, cerámicas, maderas u otros materiales. Se clasifican según su forma, uso o función dentro de la joya. Esta clasificación facilita la selección de técnicas de elaboración y la planificación del proceso productivo.
    
    .row.justify-content-center.align-items-center.mb-0
      .col-8.col-lg-3.mb-lg-0.mb-3(data-aos="flip-left")
        figure
          img(src='@/assets/curso/temas/tema_5/img_2.png', class="img-fluid")
      .col-12.col-lg-7
        .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-12 col-md-12 col-lg-6")
            .tarjeta--color-primario-10.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--9
                h5.mb-3.text-center
                  span.texto-resaltado.texto-resaltado--color-acento-botones.rounded-0 Gramo  (g)
                p.mb-3.text-center Unidad principal para calcular peso total, metal fino y ligas. Ejemplo: 10 g × 0.750. Todos los cálculos de composición parten del gramo.
            .tarjeta--color-primario-10.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--10
                h5.mb-3.text-center
                  span.texto-resaltado.texto-resaltado--color-acento-botones.rounded-0 Miligramo (mg)
                p.mb-3.text-center Útil para medir pequeñas cantidades como soldaduras o ajustes mínimos en la proporción de ligas cuando el peso total es muy bajo.
            .tarjeta--color-primario-10.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--11
                h5.mb-3.text-center
                  span.texto-resaltado.texto-resaltado--color-acento-botones.rounded-0 Onza troy (oz t)
                p.mb-3.text-center Relacionada con el valor comercial del oro y plata. Permite convertir precios del metal cuando se calculan costos de las aleaciones usadas.
            .tarjeta--color-primario-10.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--12
                h5.mb-3.text-center
                  span.texto-resaltado.texto-resaltado--color-acento-botones.rounded-0 Kilate (K)
                p.mb-3.text-center Indica pureza del oro. Su aplicación es directa: convertir K a milésimas para calcular metal fino y ajustar aleaciones como 18K o 14K.
            .tarjeta--color-primario-10.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--13
                h5.mb-3.text-center
                  span.texto-resaltado.texto-resaltado--color-acento-botones.rounded-0 Milésimas (‰)
                p.mb-3.text-center Representa pureza exacta. Ejemplo: 750 milésimas. Se usa para definir cuánto metal precioso real entra en la mezcla según la norma de aleación trabajada.

    Separador 

    .bg_img_7.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10
          #t_5_2.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 5.2 Características
          .mb-0

          p.mb-0 Cada pieza de joyería debe cumplir características específicas que garantizan su funcionalidad, durabilidad y apariencia estética. Estas características también determinan los insumos y las aleaciones necesarias para su fabricación.
      
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-7.order-2.order-lg-1.mb-0(data-aos="fade-right")
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--color-sistema-h")
            div(titulo="Precisión dimensional")
              p.mb-0 La pieza debe cumplir medidas exactas para su ensamble y comodidad del usuario.
            div(titulo="Acabado superficial")
              p.mb-0 Debe presentar brillo, textura homogénea y ausencia de arañazos o porosidad.
            div(titulo="Dureza adecuada")
              p.mb-0 Depende del uso: un anillo requiere mayor resistencia que un dije.
            div(titulo="Simetría y proporción")
              p.mb-0 Garantizan equilibrio visual y calidad artesanal.
        .col-8.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3(data-aos="fade-right")
          figure
            img(src="@/assets/curso/temas/tema_5/img_12.png", class="img-fluid")
      
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-md-6.col-xl-3.mb-4
          .crd_hover_txt.rounded-3(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema_5/img_13.png", class="img-fluid")
            .crd_hover_txt--body.color-acento-contenido.p-4
              h5.mb-4.text-center Compatibilidad con gemas
              p.mb-2.text-center  Las monturas deben ajustarse correctamente a las piedras.
        .col-12.col-md-6.col-xl-3.mb-4
          .crd_hover_txt.rounded-3(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema_5/img_14.png", class="img-fluid")
            .crd_hover_txt--body.color-acento-contenido.p4
              h5.mb-4.text-center Soldaduras limpias
              p.mb-2.text-center No deben ser visibles o débiles; deben tener continuidad superficial.
        .col-12.col-md-6.col-xl-3.mb-4
          .crd_hover_txt.rounded-3(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema_5/img_15.png", class="img-fluid")
            .crd_hover_txt--body.color-acento-contenido.p4
              h5.mb-4.text-center Peso equilibrado
              p.mb-2.text-center Afecta comodidad, ergonomía y percepción de calidad.
        .col-12.col-md-6.col-xl-3.mb-4
          .crd_hover_txt.rounded-3(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema_5/img_16.png", class="img-fluid")
            .crd_hover_txt--body.color-acento-contenido.p4
              h5.mb-4.text-center Seguridad del mecanismo
              p.mb-2.text-center Cierres, broches y seguros deben funcionar correctamente sin riesgo de pérdida.

    Separador 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10 
        #t_5_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 5.3 Técnicas de elaboración
        .mb-0
        p.mb-0 Las técnicas de elaboración permiten transformar el metal en piezas acabadas mediante procesos mecánicos, térmicos y artesanales. Elegir la técnica correcta garantiza precisión, calidad y optimización del material.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_5/img_17.png", class="img-fluid")
      .col-12.col-lg-6.mb-3(data-aos="zoom-in-right")
        .custom-slider.tarjeta--fondo__slider.p-5.mb-0.rounded-3
          SlyderF().tarjeta.tarjeta--blanca.p-5.rounded-3
            .row.justify-content-center.align-items-center
              .col-12.col-lg-10.mb-0
                h5.mb-3 Fundición  por cera perdida
                p.mb-0 Reproduce piezas complejas o con volumen; ideal para anillos, dijes y monturas.
            .row.justify-content-center.align-items-center
              .col-12.col-lg-10.mb-0
                h5.mb-3 Laminado y trefilado
                p.mb-0 Produce láminas, hilos y perfiles para cadenas, aros y estructuras.
            .row.justify-content-center.align-items-center
              .col-12.col-lg-10.mb-0
                h5.mb-3 Soldadura
                p.mb-0 Une componentes metálicos mediante calor y material de aporte.
            .row.justify-content-center.align-items-center
              .col-12.col-lg-10.mb-0
                h5.mb-3 Engaste
                p.mb-0 Fija gemas aplicando presión controlada del metal.
            .row.justify-content-center.align-items-center
              .col-12.col-lg-10.mb-0
                h5.mb-3 Calado y cincelado
                p.mb-0 Permite crear diseños abiertos, relieves y texturas decorativas.
            .row.justify-content-center.align-items-center
              .col-12.col-lg-10.mb-0
                h5.mb-3 Pulido y abrillantado
                p.mb-0 Aporta brillo y uniformidad a la superficie final.
        
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
