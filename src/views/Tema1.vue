<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Metales

    .cita-decorada(data-aos="zoom-in-right")
      blockquote.cita-decorada__caja.cita-decorada__caja--fondo-2.p-3
        .row.justify-content-center.align-items-center
          .col-8.col-lg-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema_1/img_1.png', class="cita-decorada__imagen-flotante-1")
          .col-12.col-lg-9
            p.cita-decorada__texto.mb-2.p-3 Los metales constituyen la base fundamental de los procesos de aleación aplicados en la joyería, ya que sus propiedades químicas, físicas y mecánicas determinan el comportamiento del material frente a la fundición, deformación, laminado y acabado final de las piezas. Comprender su estructura interna, su clasificación y su origen permite seleccionar adecuadamente los elementos que intervienen en una aleación y anticipar su respuesta ante distintas condiciones de trabajo. Este conocimiento, articulado con la afinación, la recuperación y la correcta interpretación de la simbología química, brinda al aprendiz la capacidad de evaluar la pureza de los metales, identificar su compatibilidad con otros elementos y establecer composiciones estables y conformes a los estándares de la industria. De esta manera, el estudio de los metales se convierte en un eje central para la formulación precisa de aleaciones utilizadas en joyería fina y artesanal.

    Separador 

    .bg_img_1.mb-5

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10  
          #t_1_1.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 1.1 Concepto y clases
          .mb-0

          p.mb-3(data-aos="fade-right") Los metales son elementos químicos caracterizados por su brillo, conductividad térmica y eléctrica, maleabilidad y ductilidad. En joyería se clasifican principalmente en:
      
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-md-6.col-xl-4.mb-4
          .crd_hover_txt.rounded-3(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema_1/img_3.png", class="img-fluid")
            .crd_hover_txt--body.color-acento-botones.p-4
              h5.mb-4.text-center Metales preciosos
              p.mb-2.text-center  Oro, plata y platino, reconocidos por su estabilidad química, resistencia a la corrosión y alto valor comercial.

        .col-12.col-md-6.col-xl-4.mb-4
          .crd_hover_txt.rounded-3(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema_1/img_4.png", class="img-fluid")
            .crd_hover_txt--body.color-acento-botones.p4
              h5.mb-4.text-center Metales no preciosos
              p.mb-2.text-center Cobre, níquel, zinc, paladio, entre otros, utilizados como agentes de endurecimiento, modificación del color o reducción de costos.
              p.mb-2.text-center La clasificación también puede basarse en su estructura cristalina, comportamiento mecánico o función dentro de una aleación, lo que permite elegir el metal adecuado según el color, dureza y propiedades finales deseadas.

      Separador 

      #t_1_2.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 1.2 Propiedades y aplicaciones
      .mb-3
      
      .tarjeta.color-secundario-20.rounded-0.overflow-hidden.mb-5(data-aos="fade-right")
        .row.g-0.align-items-stretch
          .col-12.col-lg-5.mb-lg-0.mb-3
            img(src="@/assets/curso/temas/tema_1/img_5.png", class="w-100 h-100", style="object-fit: cover; min-height: 200px;")
          .col-12.col-lg-7
            .p-4.p-lg-5.d-flex.align-items-center.h-100
              div
                p.mb-0 Las propiedades de los metales determinan su comportamiento durante la fundición, la transformación y la creación de aleaciones destinadas a piezas de joyería. Su estructura interna, composición química y respuesta frente al calor, la presión y el desgaste influyen directamente en la calidad del acabado, la precisión dimensional, la estabilidad del color y la durabilidad de las joyas. Comprender estas propiedades permite seleccionar el metal adecuado, ajustar proporciones en la aleación y prever el desempeño en procesos como laminado, soldadura, estirado o moldeo.
      
      .titulo-sexto.color-tabla(data-aos="fade-right")
        h5 Tabla 1. 
        |  Propiedades de los metales y sus aplicaciones en joyería
      .tabla-a.mb-5(data-aos="flip-left")
        table
          caption
            p <b>Fuente:</b> SENA, 2025.
          thead
            tr
              th.col-2 Tipo de propiedad
              th.col-2 Propiedad
              th.col-4  Descripción
              th.col-4 Aplicación en joyería
          tbody
            tr
              td(rowspan="3") Físicas.
              td Densidad.
              td Relación entre masa y volumen del metal.
              td Determina el peso final de la joya; influye en la sensación de valor y comodidad.
            tr
              td Punto de fusión.
              td Temperatura a la cual el metal pasa de sólido a líquido.
              td Define el método de fundición, tipo de crisol y control de temperatura.
            tr
              td Conductividad térmica.
              td Capacidad de transferir calor.
              td Afecta el comportamiento en fundición y soldadura; requiere ajustar la intensidad del calor.
            tr
              td(rowspan="3") Mecánicas.
              td Dureza.
              td Resistencia al rayado, impacto y deformación permanente.
              td Útil para anillos, broches y piezas expuestas al desgaste; influye en la resistencia del acabado.
            tr
              td Maleabilidad.
              td Capacidad de deformarse por compresión sin romperse.
              td Facilita laminado, estampado, repujado y conformación de láminas.
            tr
              td Ductilidad.
              td Capacidad de estirarse para formar alambres.
              td Fundamental para elaborar cadenas, argollas, filigrana y componentes estructurales finos.
            tr
              td(rowspan="2") Químicas.
              td Reactividad.
              td Tendencia del metal a combinarse con otros elementos.
              td Permite formar aleaciones de color y dureza; influye en la estabilidad frente a manchas y oxidación.
            tr
              td Resistencia a la corrosión.
              td Capacidad del metal para mantenerse estable ante humedad y agentes químicos.
              td Asegura brillo duradero, menor mantenimiento y vida útil prolongada de la joya.

    Separador 

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-10
        #t_1_3.titulo-segundo.color-acento-contenido
          .h2(data-aos="fade-right") 1.3 Origen, afinación y recuperación
        .mb-0
    
    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-2.mb-lg-0.mb-3(data-aos="flip-left")
        figure
          img(src="@/assets/curso/temas/tema_1/img_6.png", class="img-fluid")
      .col-12.col-lg-8(data-aos="zoom-in-right")
        p.mb-0 La comprensión del proceso que atraviesan los metales desde su obtención inicial hasta su reutilización es fundamental para garantizar materiales adecuados en la elaboración de aleaciones. Analizar su procedencia, los métodos utilizados para refinar su pureza y las técnicas que permiten recuperar residuos contribuye a optimizar recursos, mejorar la calidad metalúrgica y fortalecer la sostenibilidad en la fabricación de piezas de joyería.

    .row.justify-content-center.align-items-stretch.mb-0
      .col-12.col-lg-4.mb-4.mb-lg-0.d-flex(data-aos="flip-left")
        .tarjeta.color-primario-10.p-4.h-100.w-100.d-flex.flex-column
          .row.justify-content-center.align-items-center.mb-3
            .col-6.col-lg-7.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema_1/img_7.png', class="img-fluid")
          h3.text-center
            span.texto-resaltado.texto-resaltado--color-acento-botones.rounded-0 Origen
          p.text-center.mb-0 Procedencia del metal, proveniente de extracción minera, depósitos aluviales o reciclaje de piezas y sobrantes industriales.
      .col-12.col-lg-4.mb-4.mb-lg-0.d-flex(data-aos="flip-left")
        .tarjeta.color-primario-10.p-4.h-100.w-100.d-flex.flex-column
          .row.justify-content-center.align-items-center.mb-3
            .col-6.col-lg-7.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema_1/img_8.png', class="img-fluid")
          h3.text-center
            span.texto-resaltado.texto-resaltado--color-acento-botones.rounded-0 Afinación
          p.text-center.mb-0 Proceso de refinación para eliminar impurezas y aumentar la pureza mediante electrólisis, métodos químicos o tratamientos térmicos, garantizando calidad para aleaciones.
      .col-12.col-lg-4.mb-4.mb-lg-0.d-flex(data-aos="flip-left")
        .tarjeta.color-primario-10.p-4.h-100.w-100.d-flex.flex-column
          .row.justify-content-center.align-items-center.mb-3
            .col-6.col-lg-7.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema_1/img_9.png', class="img-fluid")
          h3.text-center
            span.texto-resaltado.texto-resaltado--color-acento-botones.rounded-0 Recuperación
          p.text-center.mb-0 Técnicas para recolectar y procesar limaduras, escorias y residuos de fundición, permitiendo reincorporarlos al proceso productivo y disminuir pérdidas.

    Separador 

    #t_1_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.4 Simbología
    .mb-3

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        figure
          img(src='@/assets/curso/temas/tema_1/img_10.png')
      .bloque-texto-t__texto.bloque-texto-t.color-secundario-5.col-10.mb-0.p-4.rounded-5
        p.mb-0 La simbología metalúrgica y química es esencial para interpretar composiciones, identificar elementos, comprender estándares de ley y realizar cálculos de aleaciones. En joyería, esta simbología permite reconocer metales, distinguir purezas, leer especificaciones técnicas y asegurar que las mezclas cumplan con los requerimientos del cliente y la normativa vigente. El dominio de estos símbolos facilita la comunicación técnica, evita errores en las formulaciones y contribuye a la trazabilidad de cada pieza o lingote producido.
    
    .row.justify-content-center.mb-5
      .col-12.col-lg-10.position-relative(data-aos="flip-left")
        .avatar
          figure
            img.img250(src="@/assets/curso/temas/tema_1/img_12.png", alt="avatar" class="img-fluid")
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto.position-relative
              figure
                img.img100(src="@/assets/curso/temas/tema_1/img_11.svg", alt="Control químico" class="img-fluid")
            .col
              h5.p-2.mb-0 Símbolos químicos (Au, Ag, Cu, Pt, Pd)
              p.p-2 Identifican cada metal en la tabla periódica y permiten interpretar recetas de aleación. Cuando aparece Au se entiende que se trabaja con oro; Ag indica plata; Cu indica cobre; Pt indica platino; Pd indica paladio. Estos símbolos permiten leer formulaciones como Au 750, Ag 125, Cu 125, donde se aprecia la proporción de cada metal dentro de la mezcla.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto.position-relative
              figure
                img.img100(src="@/assets/curso/temas/tema_1/img_11.svg", alt="Control mecánico" class="img-fluid")
            .col
              h5.p-2.mb-0 Kilataje (K)
              p.p-2 Indica cuántas partes de oro fino hay dentro de un total de 24. Cuando en una pieza aparece 18 K significa que está compuesta principalmente por oro y complementada con otros metales que le aportan dureza y color. El kilataje ayuda a diferenciar si se trata de un oro de mayor o menor pureza y permite reconocer su valor y su comportamiento en procesos de fundición o laminado.
        .crd.crd--avatarHorizontal.crd--middle.py-4
          .row.align-items-center
            .col-auto.position-relative
              figure
                img.img100(src="@/assets/curso/temas/tema_1/img_11.svg", alt="Control manual" class="img-fluid")
            .col
              h5.p-2.mb-0 Milésimas (‰)
              p.p-2 Expresan pureza sobre una escala de 0 a 1000. Cuando se observa 925 ‰ se entiende que la pieza contiene sobre todo plata fina con una pequeña proporción de otros metales para darle resistencia. Este sistema se usa mucho en plata y platino, y permite calcular con precisión las cantidades necesarias para formular una aleación confiable durante la fundición o el reciclaje de material.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto.position-relative
              figure
                img.img100(src="@/assets/curso/temas/tema_1/img_11.svg", alt="Control biológico" class="img-fluid")
            .col
              h5.p-2.mb-0 Ley (750, 925, 950)
              p.p-2 Indica la cantidad de metal puro presente en una aleación según normas formales. Cuando una joya lleva la marca 750 se reconoce que está compuesta mayormente por oro fino y el resto por otros metales; cuando aparece 950 se identifica un platino de alta pureza apropiado para joyería fina. Esta numeración permite verificar si la pieza cumple estándares para comercialización y certificación.

    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-3.mb-lg-0.mb-3(data-aos="flip-left")
        figure
          img(src="@/assets/curso/temas/tema_1/img_13.png", class="img-fluid")
      .col-12.col-lg-7(data-aos="zoom-in-right")
        TabsA.mb-0.tarjeta-tabs-a.color-terciario
          .tarjeta.color-secundario-10.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Marcajes o punzones")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Son sellos pequeños grabados dentro de la joya o en el lingote que muestran su pureza, la identificación del fabricante o el taller que la produjo. En un anillo se puede encontrar, por ejemplo, un número de ley acompañado del símbolo del joyero, lo cual permite confirmar autenticidad, origen y calidad del metal utilizado.
          .tarjeta.color-secundario-10.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Símbolo ∆ (calor)")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Indica que en el proceso se requiere la aplicación de calor. Este símbolo aparece en reacciones o esquemas donde el metal debe transformarse, como cuando se funde una mezcla para formar una aleación específica. Su presencia orienta sobre el momento en que se debe elevar la temperatura para lograr la transformación adecuada.
          .tarjeta.color-secundario-10.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Flecha → (transformación o resultado)")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Muestra el paso de un estado o material a otro. Al observar la flecha en un diagrama se comprende que un metal sólido pasa a estado fundido o que dos metales se combinan para formar una nueva aleación. Este símbolo facilita la lectura de secuencias de operación y el entendimiento del proceso metalúrgico.
          .tarjeta.color-secundario-10.p-4.h-100.tarjeta-tabs-a__tarjeta(titulo="Símbolos de riesgo químico")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-12.mb-0
                p.mb-0 Son representaciones gráficas que advierten peligros asociados a sustancias usadas en afinación, limpieza y procesos de preparación del metal. Estos símbolos permiten reconocer si un producto puede causar corrosión en la piel, si es inflamable o si genera vapores tóxicos, ayudando a manipular fundentes, ácidos y soluciones de limpieza de forma segura.

    .cita-decorada(data-aos="zoom-in-right")
      blockquote.cita-decorada__caja.cita-decorada__caja--fondo-3.p-2
        .row.justify-content-center.align-items-center
          .col-12.mt-4.col-lg-8 
            p.cita-decorada__texto.mb-2.p-3 <B>A continuación, se ejemplifica cómo se usan los símbolos en el trabajo real con metales.</B> Cuando se prepara una aleación, por ejemplo, de oro 18 K, normalmente aparece escrita como Au 750 / Ag 125 / Cu 125, lo que simplemente indica cuánto oro, plata y cobre se mezclan. En los pasos del proceso se puede ver algo como Au + Cu ∆ → Aleación, donde ∆ solo significa que hay que aplicar calor, y la flecha → muestra el resultado de la mezcla. En la joya terminada suele grabarse 750 para indicar su pureza, junto con el sello del taller. Además, durante la limpieza del metal se usan productos que llevan símbolos de corrosivo o tóxico, los cuales sirven para saber que se deben manipular con cuidado.
          .col-8.col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema_1/img_15.png', class="cita-decorada__imagen-flotante-2")
</template>

<script>
export default {
  name: 'Tema1',
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
