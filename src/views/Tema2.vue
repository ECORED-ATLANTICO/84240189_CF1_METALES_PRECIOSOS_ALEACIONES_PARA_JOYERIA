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
      .col-6.col-lg-3.mb-lg-0.mb-3(data-aos="flip-left")
        figure
          img(src="@/assets/curso/temas/tema_2/img_1.png", class="img-fluid")
      .col-12.col-lg-7(data-aos="zoom-in-right")
        p.mb-3 La merma corresponde a la pérdida inevitable de metal que ocurre en actividades como fundición, laminado, limado, corte, estirado, soldadura y pulido. Esta pérdida puede manifestarse como limaduras, partículas finas, evaporación por temperatura o restos adheridos a crisoles y herramientas. Aunque el metal no se pierde totalmente, dado que puede recuperarse mediante afinación, esto sí afecta el peso disponible para la pieza final. Las principales causas comunes de la merma son:
        .row.justify-content-start.align-items-start.g-3
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
                  p.mb-0 Evaporación o quemado de aleantes en la fundición.
      
          .col-12.col-lg-7(data-aos="fade-up")
            .tarjeta-causa.h-100
              .d-flex.align-items-center.gap-3
                .icono-causa
                  img(src="@/assets/curso/temas/tema_2/img_2.svg", class="img-fluid")
                .texto-causa
                  p.mb-0 Material que se desprende al estirar o laminar el metal.
      
          .col-12.col-lg-7.text-start(data-aos="fade-up")
            .tarjeta-causa.h-100
              .d-flex.align-items-center.gap-3.justify-content-start
                .icono-causa
                  img(src="@/assets/curso/temas/tema_2/img_2.svg", class="img-fluid")
                .texto-causa
                  p.mb-0 Pérdidas en el pulido y acabado.

    .bg_img_2.mb-5
      
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in-right")
          p.mb-3 El cálculo se realiza comparando el peso inicial del material con el peso final recuperado después del proceso. La fórmula básica es:
          .tarjeta.color-secundario.p-3.rounded-5.h-100.mb-3
            p.mb-0 Merma = Peso inicial − Peso final recuperado
          p.mb-0 Cuando se requiere expresarla en porcentaje: % de merma = (Merma ÷ Peso inicial) × 100
        .col-12.col-lg-6(data-aos="zoom-in-right")
          .cita-decorada(data-aos="zoom-in-right")
            blockquote.cita-decorada__caja.cita-decorada__caja--fondo-4.p-3
              .row.justify-content-center.align-items-center
                .col-11.col-lg-11
                  p.cita-decorada__texto.mb-2.p-3.pb-0 Este cálculo permite determinar si las pérdidas son normales o excesivas. En joyería, una merma entre 1 % y 5 % suele considerarse aceptable dependiendo de la técnica empleada.
                  p.cita-decorada__texto.mb-0.p-3.pb-0 <B>Ejemplo:</B> si se inician 10,0 g de aleación y al finalizar se recuperan 9,6 g, la merma es:
                  p.cita-decorada__texto.mb-0.p-3.pb-0 Merma: 10,0 g − 9,6 g = 0,4 g
                  p.cita-decorada__texto.mb-0.p-3 % merma: (0,4 ÷ 10,0) × 100 = 4 %
      Separador 

      #t_2_2.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 2.2 Formatos
      .mb-0

      .cita-decorada
        blockquote.cita-decorada__caja.cita-decorada__caja--fondo-2.p-3
          .row.justify-content-center.align-items-center
            .col-8.col-lg-4.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema_2/img_5.png', class="cita-decorada__imagen-flotante-3")
            .col-12.col-lg-8
              p.cita-decorada__texto.mb-2.p-3 Los formatos de registro de merma permiten documentar de manera organizada las pérdidas de metal que ocurren durante procesos como fundición, limado, laminado, soldadura o recuperación. Su uso garantiza trazabilidad, control de materiales y verificación de que las cantidades finales coinciden con lo proyectado en la aleación. Además, facilitan auditorías internas, cálculos contables y la toma de decisiones sobre eficiencia del proceso.
              p.cita-decorada__texto.mb-2.p-3 En el taller de joyería, estos formatos se convierten en evidencia del trabajo realizado, pues detallan el peso inicial de la pieza o aleación, los residuos generados y el peso recuperado en cada actividad. De esta manera, se identifican puntos críticos donde se produce mayor pérdida y se pueden aplicar mejoras para reducir costos y optimizar materiales valiosos como el oro, la plata o el platino.
    
    .bg_img_3.mb-5
      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Registro de peso inicial y final
            p.mb-3 Documento básico donde se anotan el peso del metal antes de iniciar el proceso y el peso recuperado al finalizarlo. Permite calcular la merma de manera inmediata. Se usa en fundición, laminado y fabricación de piezas.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_7.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Formato de merma por proceso
            p.mb-3 Clasifica la merma según la etapa donde se generó (fundición, limado, recorte, soldadura, pulido, entre otros). Ayuda a identificar en qué operación se están perdiendo más gramos para corregir métodos o herramientas.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_8.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Formato de recuperación de residuos
            p.mb-3 Registra limaduras, trozos pequeños, polvo de metal o granalla sobrante. Incluye peso antes y después de su refinación. Es esencial para talleres que afinan o venden su propio residuo metálico.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_9.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Formato de control de insumos y fundentes
            p.mb-3 Aunque no mide merma directamente, permite relacionar el uso de insumos con la pérdida generada. Ayuda a verificar si un exceso de fundente, bórax o soldadura está aumentando la merma.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_10.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Formato de trazabilidad de piezas
            p.mb-3 Cada pieza o lote se identifica con código, aleación usada, pesos registrados y porcentaje de merma. Permite seguimiento total durante producción, útil para certificaciones y control de calidad.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_11.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5 Formato de cierre de aleación
            p.mb-3 Registra la cantidad proyectada de metal y la obtenida tras fundición y colado. Incluye observaciones sobre color, dureza o defectos. Verifica si la merma está dentro del rango aceptado para cada tipo de aleación.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_12.png', class="img-fluid")
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
