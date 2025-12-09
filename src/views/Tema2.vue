<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Merma

    p.mb-0 La merma es un aspecto fundamental en los procesos de joyería y fundición, ya que representa la cantidad de material que se pierde durante las diferentes etapas de trabajo con los metales preciosos. Su control adecuado permite optimizar costos, mejorar la planeación de producción y garantizar que la cantidad final de material utilizado sea coherente con la solicitada por el cliente. Comprender cómo se origina, cómo se calcula y cómo se registra es indispensable para asegurar precisión y trazabilidad en el taller.

    Separador 

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10  
        #t_2_1.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 2.1 Concepto y cálculo
        .mb-0

    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-3.mb-lg-0.mb-3(data-aos="zoom-in-right")
        figure
          img(src="@/assets/curso/temas/tema_2/img_1.png", class="img-fluid")
      .col-12.col-lg-8(data-aos="zoom-in-right")
        p.mb-3 La merma corresponde a la pérdida inevitable de metal que ocurre en actividades como fundición, laminado, limado, corte, estirado, soldadura y pulido. Esta pérdida puede manifestarse como limaduras, partículas finas, evaporación por temperatura o restos adheridos a crisoles y herramientas. Aunque el metal no se pierde totalmente, dado que puede recuperarse mediante afinación, esto sí afecta el peso disponible para la pieza final. Las principales causas comunes de la merma son:
        .row.justify-content-center.align-items-center.g-3
          .col-12.col-lg-5(data-aos="fade-up")
            .tarjeta-causa.h-100
              .d-flex.align-items-center.gap-3
                .icono-causa
                  img(src="@/assets/curso/temas/tema_2/img_2.svg", class="img-fluid")
                .texto-causa
                  p.mb-0 Dispersión de limaduras durante el limado o lijado.
          .col-12.col-lg-7(data-aos="fade-up")
            .tarjeta-causa.h-100
              .d-flex.align-items-center.gap-3
                .icono-causa
                  img(src="@/assets/curso/temas/tema_2/img_2.svg", class="img-fluid")
                .texto-causa
                  p.mb-0 Restos de metal que quedan adheridos al crisol o al molde.
      
          .col-12.col-lg-5(data-aos="fade-up")
            .tarjeta-causa.h-100
              .d-flex.align-items-center.gap-3
                .icono-causa
                  img(src="@/assets/curso/temas/tema_2/img_2.svg", class="img-fluid")
                .texto-causa
                  p.mb-0 Pérdidas en el proceso.
      
          .col-12.col-lg-7(data-aos="fade-up")
            .tarjeta-causa.h-100
              .d-flex.align-items-center.gap-3
                .icono-causa
                  img(src="@/assets/curso/temas/tema_2/img_2.svg", class="img-fluid")
                .texto-causa
                  p.mb-0 Evaporación o quemado de aleantes en la fundición.
      
          .col-12.col-lg-10(data-aos="fade-up")
            .tarjeta-causa.h-100
              .d-flex.align-items-center.gap-3
                .icono-causa
                  img(src="@/assets/curso/temas/tema_2/img_2.svg", class="img-fluid")
                .texto-causa
                  p.mb-0 Material que se desprende al estirar o laminar el metal.
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in-right")
        p.mb-3 El cálculo se realiza comparando el peso inicial del material con el peso final recuperado después del proceso. La fórmula básica es:
        .tarjeta-causa.h-100.mb-3
          p.mb-0 Merma = Peso inicial − Peso final recuperado
        p.mb-0 Cuando se requiere expresarla en porcentaje: % de merma = (Merma ÷ Peso inicial) × 100
      .col-12.col-lg-6(data-aos="zoom-in-right")
        p.mb-3 
        
    .bg_img_2.mb-5
    
      Separador 

      #t_2_2.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 2.2 Formatos
      .mb-0

      .cita-decorada
        blockquote.cita-decorada__caja.cita-decorada__caja--fondo-2.p-3
          .row.justify-content-center.align-items-center
            .col-8.col-lg-3.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema_2/img_5.png', class="cita-decorada__imagen-flotante-1")
            .col-10.col-lg-9
              p.cita-decorada__texto.mb-2.p-3 Los formatos de registro de merma permiten documentar de manera organizada las pérdidas de metal que ocurren durante procesos como fundición, limado, laminado, soldadura o recuperación. Su uso garantiza trazabilidad, control de materiales y verificación de que las cantidades finales coinciden con lo proyectado en la aleación. Además, facilitan auditorías internas, cálculos contables y la toma de decisiones sobre eficiencia del proceso.
              p.cita-decorada__texto.mb-2.p-3 En el taller de joyería, estos formatos se convierten en evidencia del trabajo realizado, pues detallan el peso inicial de la pieza o aleación, los residuos generados y el peso recuperado en cada actividad. De esta manera, se identifican puntos críticos donde se produce mayor pérdida y se pueden aplicar mejoras para reducir costos y optimizar materiales valiosos como el oro, la plata o el platino.
    
    .bg_img_3.mb-5
      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Cronograma
            p.mb-3 Organiza las actividades del proyecto en una línea de tiempo, indicando fechas de inicio y fin, secuencia de tareas y dependencias. Permite monitorear avances y anticipar retrasos. En marketing se usa para estructurar campañas por fases (diseño, producción, ejecución, entre otros), asegurando que cada actividad ocurra en el momento adecuado.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_9.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Diagrama de Gantt
            p.mb-3 Representa las tareas como barras sobre un calendario, facilitando ver su duración, responsables y relación entre actividades. Es útil para gestionar proyectos con muchas tareas simultáneas, como lanzamientos de productos, porque permite identificar la ruta crítica y ajustar en caso de desviaciones.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_10.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Presupuesto
            p.mb-3 Controla los recursos financieros del proyecto mediante la asignación de costos por actividad, comparación entre lo estimado y lo ejecutado, y análisis de rentabilidad. En marketing ayuda a equilibrar inversión entre canales, campañas y contenidos para maximizar el retorno y evitar sobrecostos.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_11.png', class="img-fluid")
        
</template>

<script>
export default {
  name: 'Tema2',
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
