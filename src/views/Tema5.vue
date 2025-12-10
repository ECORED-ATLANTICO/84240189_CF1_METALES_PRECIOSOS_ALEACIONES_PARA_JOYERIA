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
      .col-8.col-lg-3.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema_5/img_2.png', class="img-fluid")
      .col-12.col-lg-7
        .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
          SlyderF(columnas="col-12 col-sm-12 col-md-12 col-lg-6")
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--1
                h5.mb-3.text-center.text-white
                  span.texto-resaltado.texto-resaltado--color-acento-contenido.rounded-0 Fundentes 
                p.mb-3.text-center Sustancias como bórax, carbonato de sodio y fluoroboratos que bajan el punto de fusión, evitan la oxidación y mejoran la fluidez del metal durante la fundición.
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--2
                h5.mb-3.text-center.text-white
                  span.texto-resaltado.texto-resaltado--color-acento-contenido.rounded-0 Sales y ácidos de limpieza
                p.mb-3.text-center Incluyen ácido sulfúrico diluido, ácido nítrico y soluciones decapantes. Se usan para eliminar óxidos y residuos superficiales después de la fundición o soldadura.
            .tarjeta--blanca-1.h-95
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-3
                  .tarjeta--3
                h5.mb-3.text-center.text-white
                  span.texto-resaltado.texto-resaltado--color-acento-contenido.rounded-0 Combustibles y gases
                p.mb-3.text-center Gas propano, oxígeno y acetileno, necesarios para generar el calor en procesos como soldadura, recocido y fundición.

    Separador 

    .bg_img_7.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10
          #t_5_2.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 5.2 Características
          .mb-0

          p.mb-0 Cada pieza de joyería debe cumplir características específicas que garantizan su funcionalidad, durabilidad y apariencia estética. Estas características también determinan los insumos y las aleaciones necesarias para su fabricación.
      
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-7.order-2.order-lg-1.mb-0
          AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--color-sistema-h")
            div(titulo="Revestimientos refractarios (yeso, fosfatados, entre otros)")
              ul.lista-ul
                li.mb-0
                  i.lista-ul__vineta
                  |  Soportan altas temperaturas sin deformarse.
                li.mb-0
                  i.lista-ul__vineta
                  |   Permiten captar los detalles del modelo en cera.
                li.mb-0
                  i.lista-ul__vineta
                  |  Determinan el acabado final de la pieza (textura o porosidad).
                li.mb-0
                  i.lista-ul__vineta
                  |  Los fosfatados resisten temperaturas más altas para platino y paladio.
            div(titulo="Ceras para modelado")
              ul.lista-ul
                li.mb-0
                  i.lista-ul__vineta
                  |  Fácil manipulación y tallado.
                li.mb-0
                  i.lista-ul__vineta
                  |  Punto de fusión bajo para evitar defectos al quemarse.
                li.mb-0
                  i.lista-ul__vineta
                  |  Estabilidad dimensional al ser moldeadas.
                li.mb-0
                  i.lista-ul__vineta
                  |  No deben dejar residuos durante la etapa de quemado.
            div(titulo="Vasos de colada, canales y bebederos")
              ul.lista-ul
                li.mb-0
                  i.lista-ul__vineta
                  |  Resistencia térmica.
                li.mb-0
                  i.lista-ul__vineta
                  |  Buena adherencia al revestimiento.
                li.mb-0
                  i.lista-ul__vineta
                  |  Permiten flujo controlado del metal para evitar turbulencias.
                li.mb-0
                  i.lista-ul__vineta
                  |  Su diseño y diámetro influyen en la calidad del llenado.
            div(titulo="Insumos auxiliares (gases, combustibles, entre otros)")
              ul.lista-ul
                li.mb-0
                  i.lista-ul__vineta
                  |  Mezcla de gases estable y compatible con el equipo de fundición.
                li.mb-0
                  i.lista-ul__vineta
                  |  Llama regulable para trabajar metales con distintos puntos de fusión.
                li.mb-0
                  i.lista-ul__vineta
                  |  Gas adecuado según técnica: propano/oxígeno para oro y plata; equipos especiales para platino.
        .col-8.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3
          figure
            img(src="@/assets/curso/temas/tema_5/img_12.png", class="img-fluid")
      
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-md-6.col-xl-3.mb-4
          .crd_hover_txt.rounded-3(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema_5/img_13.png", class="img-fluid")
            .crd_hover_txt--body.color-acento-botones.p-4
              h5.mb-4.text-center Metales preciosos
              p.mb-2.text-center  Oro, plata y platino, reconocidos por su estabilidad química, resistencia a la corrosión y alto valor comercial.

        .col-12.col-md-6.col-xl-3.mb-4
          .crd_hover_txt.rounded-3(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema_5/img_14.png", class="img-fluid")
            .crd_hover_txt--body.color-acento-botones.p4
              h5.mb-4.text-center Metales no preciosos
              p.mb-2.text-center Cobre, níquel, zinc, paladio, entre otros, utilizados como agentes de endurecimiento, modificación del color o reducción de costos.
              p.mb-2.text-center La clasificación también puede basarse en su estructura cristalina, comportamiento mecánico o función dentro de una aleación, lo que permite elegir el metal adecuado según el color, dureza y propiedades finales deseadas.

        .col-12.col-md-6.col-xl-3.mb-4
          .crd_hover_txt.rounded-3(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema_5/img_15.png", class="img-fluid")
            .crd_hover_txt--body.color-acento-botones.p4
              h5.mb-4.text-center Metales no preciosos
              p.mb-2.text-center Cobre, níquel, zinc, paladio, entre otros, utilizados como agentes de endurecimiento, modificación del color o reducción de costos.
              p.mb-2.text-center La clasificación también puede basarse en su estructura cristalina, comportamiento mecánico o función dentro de una aleación, lo que permite elegir el metal adecuado según el color, dureza y propiedades finales deseadas.
        
        .col-12.col-md-6.col-xl-3.mb-4
          .crd_hover_txt.rounded-3(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema_5/img_16.png", class="img-fluid")
            .crd_hover_txt--body.color-acento-botones.p4
              h5.mb-4.text-center Metales no preciosos
              p.mb-2.text-center Cobre, níquel, zinc, paladio, entre otros, utilizados como agentes de endurecimiento, modificación del color o reducción de costos.
              p.mb-2.text-center 

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
