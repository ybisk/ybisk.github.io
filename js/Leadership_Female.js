google.charts.setOnLoadCallback(Leadership_Female);
function Leadership_Female() {
  var data = google.visualization.arrayToDataTable([
    ['Company', '2014', '2015', '2016'],
    ['Pandora  ',39  ,40.1,38  ],
    ['LinkedIn ',25  ,30  ,35  ],
    ['AirBnB   ',    ,25.5,30  ],
    ['Twitter  ',21  ,22  ,30  ],
    ['Apple    ',28  ,28  ,28  ],
    ['Facebook ',23  ,23  ,27  ],
    ['Dropbox  ',    ,21  ,27  ],
    ['Google   ',21  ,22  ,24  ],
    ['Yahoo    ',23  ,24  ,22  ],
    ['Uber     ',    ,    ,22  ],
    ['Microsoft',17.3,17.5,17.9],
    ['Pinterest',19  ,16  ,17  ],
  ]);
  var options = {
    title: '% Leadership Female',
    legend: { position: "none" },
    height: 350,
    chartArea: {
      width: '400',
      top: 40,
      bottom: 50,
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('Leadership_Female'));
  chart.draw(data, options);
}
