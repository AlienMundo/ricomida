/* ------------------ TOOLTIP ----------------- */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/* ------------------ ALERTA ------------------ */
  const alertList = document.querySelectorAll('.alert')
  const alerts = [...alertList].map(element => new bootstrap.Alert(element))

  /* ----------------- CAROUSEL ----------------- */
  // const carousel = new bootstrap.Carousel('.carousel')


  /* --------------- CAMBIO COLOR RECETA --------------- */
  function cambio_color_i () {
    $('#ingredientes').toggleClass('text-danger')
  }

  function cambio_color_p () {
    $('#preparacion').toggleClass('text-danger')
  }

  $('#ingredientes').on('dblclick', cambio_color_i)
  $('#preparacion').on('dblclick', cambio_color_p)

  /* ------------------ ALERTA ------------------ */

function alerta_correo () {
  alert('El correo fue enviado correctamente...')
}
$('#enviarCorreo').on('click', alerta_correo)

/* ------- ESCONDER RECETAS RELACIONADAS ------ */

function esconder () {
  $('.card-text').toggleClass('d-none')
}
$('.card-title').on('click', esconder)