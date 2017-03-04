$(document).ready(function() {
  $("#header").slideUp().animate({ opacity: 1 }, { queue: false, duration: 'fast' }).slideDown().animate({ opacity: 1 }, { queue: false, duration: 'fast' })

  $('#btn').click(function() {
    $('html').toggleClass('dark')
    $('#header').toggleClass('dark')
    $('#con').toggleClass('dark')
    $('body').toggleClass('dark')
    $('#header').toggleClass('light')
    $(".container").slideUp().animate({ opacity: 1 }, { queue: false, duration: 'fast' }).slideDown().animate({ opacity: 1 }, { queue: false, duration: 'fast' })
  })

  $(document).ready(function() {
  $("#header").slideUp().animate({ opacity: 1 }, { queue: false, duration: 'fast' }).slideDown().animate({ opacity: 1 }, { queue: false, duration: 'fast' })

  $('#btn').click(function() {
    $('.fullCon').addClass('dark')
  })


// Ozone!
  $.ajax({
    method: 'GET',
    url: 'http://api.openweathermap.org/pollution/v1/o3/39,-105/current.json?appid=bd545da109eb3ed82496113b3eaa590d',
    success: function (data) {
      console.log('O3',data)
    }
  })


// CO
$.ajax({
  method: 'GET',
  url: 'http://api.openweathermap.org/pollution/v1/co/39,-105/current.json?appid=bd545da109eb3ed82496113b3eaa590d',
  success: function (data) {
    console.log('CO', data)
  }
})

// SO2
$.ajax({
  method: 'GET',
  url: 'http://api.openweathermap.org/pollution/v1/so2/39,-105/current.json?appid=bd545da109eb3ed82496113b3eaa590d',
  success: function (data) {
    console.log('SO2', data)
  }
})

// NO2
$.ajax({
  method: 'GET',
  url: 'http://api.openweathermap.org/pollution/v1/no2/39,-105/current.json?appid=bd545da109eb3ed82496113b3eaa590d',
  success: function (data) {
    console.log('NO2', data)
  }
})

})
})
//
