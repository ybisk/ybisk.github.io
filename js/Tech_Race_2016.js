google.charts.load('current', {
  packages: ['corechart', 'bar']
});
google.charts.setOnLoadCallback(drawStacked);
function drawStacked() {
  var data = google.visualization.arrayToDataTable([
    ['Company'   ,'African American','Hispanic','Other/Multiple'],
    ['Apple'     ,8  ,8  ,3  ],
    ['Slack     ',5.7,5.7,5.1],
    ['Pandora   ',3  ,7  ,4  ],
    ['Dropbox   ',1  ,6  ,3  ],
    ['AirBnB    ',1  ,3.4,5.5],
    ['Twitter   ',2  ,4  ,3  ],
    ['Microsoft ',2.4,4  ,2.1],
    ['Yahoo     ',1  ,2  ,4  ],
    ['Google    ',1  ,3  ,3  ],
    ['LinkedIn  ',1  ,3  ,3  ],
    ['Pinterest ',2  ,3  ,2  ],
    ['Facebook  ',1  ,3  ,2  ],
    ['Uber      ',1  ,2.1,2.8],
  ]);
  var options = {
    title: 'Tech Race Demographics (2016)',
    isStacked: true,
    height: 300,
    width: 675,
    vAxis: {maxValue: 20},
    chartArea: {
      width: 475,
      left: 20,
      top: 20,
      bottom: 50,
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('Tech_Race_2016'));
  chart.draw(data, options);
}
