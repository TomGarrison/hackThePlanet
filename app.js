$(document).ready(function() {
  $("#header").slideUp().animate({ opacity: 1 }, { queue: false, duration: 'fast' }).slideDown().animate({ opacity: 1 }, { queue: false, duration: 'fast' })

  $('#btn').click(function() {
    $('.fullCon').addClass('dark')
  })
})
