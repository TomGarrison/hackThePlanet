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


  var ajaxCall = (city2) => {
    return $.ajax({
       method: 'GET',
       url: `http://api.openweathermap.org/data/2.5/weather?q=${city2}&APPID=bd545da109eb3ed82496113b3eaa590d`
     })
   };

  var add_city_data_to_global = (data, temperature, humidity, wind, visibility) => {
    console.log(data);
    let temp = (data.main.temp - 273.15).toFixed(2)
    let humid = data.main.humidity
    let speed = data.wind.speed
    let vis = data.visibility
    wind.push(speed)
    temperature.push(temp)
    humidity.push(humid)
    visibility.push(vis)
  }

   var getWeather = () => {
     let cities = ['newyorkcity', 'riodejaneiro', 'shanghai', 'instanbul', 'cairo', 'sydney', 'mcmurdostation']
     return Promise.all(
       cities.map((city) => ajaxCall(city))
     ).then( (array_of_city_data) => {
       var temperature = []
       var humidity = []
       var wind = []
       var visibility = []
       array_of_city_data.forEach( (city_data) => add_city_data_to_global(city_data, temperature, humidity, wind, visibility) )
       return {
         temperature,
         humidity,
         wind,
         visibility
       }
     })
   }

  function fillCharts(data) {
    let temperature = data.temperature
    let humidity = data.humidity
    let wind = data.wind
    let visibility = data.visibility
    console.log("VIS",visibility);
  // CONTAINER 1 BAR
      var ctx = document.getElementById("barChart");
      var myBarChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ["New York, USA", "Rio de Janeiro, BR", "Shanghai, CN", "Cairo, EG", "Instanbul, TR", "Sydney, AU", "Mcmurdo Station, AQ"],
              datasets: [{
                  label: 'Surface Temp',
                  data: temperature,
                  backgroundColor: [
                      'rgba(0, 77, 77, 0.5)',
                      'rgba(165, 220, 251, 0.5)',
                      'rgba(12, 143, 156, 0.5)',
                      'rgba(9, 88, 210, 0.5)',
                      'rgba(238, 202, 8, 0.5)',
                      'rgba(255, 159, 10, 0.5)',
                      'rgba(0, 136, 172, 0.5)'
                  ],
                  borderColor: [
                      'rgb(0, 77, 77)',
                      'rgb(165, 220, 251)',
                      'rgb(12, 143, 156)',
                      'rgb(9, 88, 210)',
                      'rgb(238, 202, 8)',
                      'rgb(244, 159, 10)',
                      'rgb(0, 136, 172)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: false
                      }
                  }]
              }
          }
      });
  // CONTAINER 1 BAR END

  // CONTAINER 2 LINE START
  var line = document.getElementById("lineChart");
  var myLineChart = new Chart(line, {
  type: 'line',
  data: {
      labels: ["Nitrous Oxide","Methane", "Carbon Dioxide", "Fluorinated Gases"],
      datasets: [{
          label: '100-year global warming potential',
          data: [281, 1, 32, 1430 ],
          backgroundColor: [
              'rgba(255, 159, 10, 0.5)'
          ],
          borderColor: [
              'rgba(244, 159, 10, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
  });
  // CONTAINER 2 LINE END

  // CONTAINER 3 PIE START
  var pie = document.getElementById("pieChart");
  var myPieChart = new Chart(pie,{
  type: 'pie',
  data: {
  labels: [
      "New York, USA", "Rio de Janeiro, BR", "Shanghai, CN", "Cairo, EG", "Instanbul, TR", "Sydney, AU", "Mcmurdo Station, AQ"
  ],
  datasets: [
      {
          data: humidity,
          backgroundColor: [
            'rgb(0, 77, 77)',
            'rgb(165, 220, 251)',
            'rgb(12, 143, 156)',
            'rgb(9, 88, 210)',
            'rgb(238, 202, 8)',
            'rgb(244, 159, 10)',
            'rgb(0, 136, 172)'
          ],
          hoverBackgroundColor: [
            'rgb(0, 77, 77)',
            'rgb(165, 220, 251)',
            'rgb(12, 143, 156)',
            'rgb(9, 88, 210)',
            'rgb(238, 202, 8)',
            'rgb(244, 159, 10)',
            'rgb(0, 136, 172)'
          ]
      }]
  },
  });

  // CONTAINER 3 PIE END

  // CONTAINER 4 POLAR AREA CHART START
  var radar = document.getElementById("radarChart");
  var myRadarChart = new Chart(radar, {
  type: 'radar',
  data: {
  labels: ["New York, USA", "Rio de Janeiro, BR", "Shanghai, CN", "Cairo, EG", "Instanbul, TR", "Sydney, AU", "Mcmurdo Station, AQ"],
  datasets: [
      {
          label: "Wind Speend",
          backgroundColor: "rgba(255, 159, 10, 0.5)",
          borderColor: "rgba(255, 159, 10, 1)",
          pointBackgroundColor: "rgba(255, 159, 10, 1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(255, 159, 10, 1)",
          data: wind
      },
  ]
  },
  });
  // CONTAINER 4 POLAR AREA CHART END

  // CONTAINER 5 DOUGHNUT CHART START
  var doughnut = document.getElementById("doughnutChart");
  var mydoughnutChart = new Chart(doughnut,{
  type: 'doughnut',
  data: {
  labels: [
"New York, USA", "Rio de Janeiro, BR", "Shanghai, CN", "Cairo, EG", "Instanbul, TR", "Sydney, AU", "Mcmurdo Station, AQ"
  ],
  datasets: [
      {
          data: visibility,
          backgroundColor: [
            'rgb(0, 77, 77)',
            'rgb(165, 220, 251)',
            'rgb(12, 143, 156)',
            'rgb(9, 88, 210)',
            'rgb(238, 202, 8)',
            'rgb(244, 159, 10)',
            'rgb(0, 136, 172)'
          ],
          hoverBackgroundColor: [
            'rgb(131, 207, 250)',
            'rgb(4, 122, 134)',
            'rgb(6, 72, 175)',
          ]
      }]
  },
  });

  // CONTAINER 5 END

  // CONTAINER 6 START
  var polar = document.getElementById("polarChart");
  new Chart(polar, {
  data: {
  datasets: [{
      data: humidity,
      backgroundColor: [
        'rgb(0, 77, 77)',
        'rgb(165, 220, 251)',
        'rgb(12, 143, 156)',
        'rgb(9, 88, 210)',
        'rgb(238, 202, 8)',
        'rgb(244, 159, 10)'
      ],
      label: 'My dataset' // for legend
  }],
  labels: [
    "New York, USA", "Rio de Janeiro, BR", "Shanghai, CN", "Cairo, EG", "Instanbul, TR", "Sydney, AU", "Mcmurdo Station, AQ"
  ]
  },
  type: 'polarArea',
  });
  // CONTAINER 6 END

  // CONTAINER 7 START
  var bubble = document.getElementById("bubbleChart");
  var myBubbleChart = new Chart(bubble,{
  type: 'bubble',
  options: {
      elements: {
          points: {
              borderWidth: 10,
              borderColor: 'rgb(0, 0, 0)'
          }
      }
  },
  data: {
  datasets: [
      {
          label: 'First Dataset',
          data: [
            {
              x: 0,
              y: 60,
              r: 0
            },
            {
              x: 60,
              y: 0,
              r: 0
            },
              {
                  x: 20,
                  y: 30,
                  r: 15
              },
              {
                x: 40,
                y: 30,
                r: 25
              },
              {
                  x: 40,
                  y: 10,
                  r: 10
              }
          ],
          backgroundColor:'rgb(244, 159, 10)',
          hoverBackgroundColor:'rgb(244, 159, 10)',
      }]
  }
  });
  // CONTAINER 7 END

  console.log('humidity', humidity);
  console.log(typeof humidity[0]);
  console.log('temperature', temperature);
  console.log('wind', wind);
  }

  getWeather().then(fillCharts);
})
