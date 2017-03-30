google.charts.load('current', {
  packages: ['corechart', 'bar']
});
google.charts.setOnLoadCallback(drawStacked);
function drawStacked() {
  var data = google.visualization.arrayToDataTable([
    ['Company'   ,'African American','Hispanic','Other/Multiple'],
    ['Apple'     , 6 , 7  , 3  ],
    ['Pandora   ',3  , 4  , 5  ],
    ['Twitter   ',1  , 3  , 4  ],
    ['Microsoft ',2.3, 3.8, 1.9],
    ['Yahoo     ',1  , 3  , 3  ],
    ['Google    ',1  , 2  , 3  ],
    ['Facebook  ',1  , 3  , 2  ],
    ['LinkedIn  ',1  , 3  , 1  ],
  ]);
  var options = {
    title: 'Tech Race Demographics (2014)',
    isStacked: true,
    height: 300,
    width: 300,
    vAxis: {maxValue: 20},
    legend: { position: "none" },
    chartArea: {
      width: 275,
      left: 20,
      top: 20,
      bottom: 50,
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('Tech_Race_2014'));
  chart.draw(data, options);
}

