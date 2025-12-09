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
          .col-10.col-lg-9
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
              th Físicas.
              th Propiedad
              th Descripción
              th Aplicación en joyería
          tbody
            tr
              td(rowspan="3") Tangibilidad.
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
              td(rowspan="3") Perecibilidad.
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
      .col-6.col-lg-2.mb-lg-0.mb-3(data-aos="zoom-in-right")
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
      .col-12.col-lg-10.position-relative
        .avatar
          figure
            img.img250(src="@/assets/curso/temas/tema_1/img_12.png", alt="avatar" class="img-fluid")
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto.position-relative
              figure
                img.img100(src="@/assets/curso/temas/tema_1/img_11.svg", alt="Control químico" class="img-fluid")
            .col
              h5 Consistencia  de datos
              p.p-2 Estandarizan la captura de información (códigos, temperaturas, sellos, entre otros), reduciendo errores y manteniendo registros coherentes.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto.position-relative
              figure
                img.img100(src="@/assets/curso/temas/tema_1/img_11.svg", alt="Control mecánico" class="img-fluid")
            .col
              h5 Fiabilidad de la información
              p.p-2 Garantizan precisión y confianza al registrar origen, transporte y destino de los productos.
        .crd.crd--avatarHorizontal.crd--middle.py-4
          .row.align-items-center
            .col-auto.position-relative
              figure
                img.img100(src="@/assets/curso/temas/tema_1/img_11.svg", alt="Control manual" class="img-fluid")
            .col
              h5 Reducción de errores y omisiones
              p.p-2 Proveen instrucciones claras que minimizan fallas humanas en procesos críticos.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto.position-relative
              figure
                img.img100(src="@/assets/curso/temas/tema_1/img_11.svg", alt="Control biológico" class="img-fluid")
            .col
              h5 Facilitación de la capacitación
              p.p-2 Funcionan como guías de formación estandarizada, acelerando el aprendizaje y cumplimiento de procedimientos.
        .crd.crd--avatarHorizontal.crd--middle.py-4
          .row.align-items-center
            .col-auto.position-relative
              figure
                img.img100(src="@/assets/curso/temas/tema_1/img_11.svg", alt="Control biocultural" class="img-fluid")
            .col
              h5 Base para auditoría y mejora continua
              p.p-2 Sirven como referencia para auditorías y permiten revisar y optimizar procesos.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto.position-relative
              figure
                img.img100(src="@/assets/curso/temas/tema_1/img_11.svg", alt="Control biológico" class="img-fluid")
            .col
              h5 Cumplimiento normativo
              p.p-2 Aseguran que las operaciones cumplan con regulaciones de trazabilidad mediante documentación y ejecución consistente.

 
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
