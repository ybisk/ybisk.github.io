google.charts.setOnLoadCallback(Tech_Race_2015);
function Tech_Race_2015() {
  var data = google.visualization.arrayToDataTable([
    ['Company'   ,'African American','Hispanic','Other/Multiple'],
    ['Apple'     ,7  ,8  ,3  ],
    ['Pandora   ',3.3,4.3,5.9],
    ['Microsoft ',2.3,3.9,1.9],
    ['Yahoo     ',1  ,3  ,4  ],
    ['AirBnB    ',1  ,3.7,2.8],
    ['Twitter   ',1  ,3  ,3  ],
    ['Google    ',1  ,2  ,3  ],
    ['Facebook  ',1  ,3  ,2  ],
    ['LinkedIn  ',1  ,3  ,1  ],
    ['Pinterest ',1  ,2  ,2  ],
  ]);
  var options = {
    title: 'Tech Race Demographics (2015)',
    isStacked: true,
    height: 250,
    width: 350,
    vAxis: {maxValue: 20},
    legend: { position: "none" },
    chartArea: {
      width: 325,
      left: 20,
      top: 20,
      bottom: 50,
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('Tech_Race_2015'));
  chart.draw(data, options);
}


