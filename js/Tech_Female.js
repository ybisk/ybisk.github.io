google.charts.setOnLoadCallback(Tech_Female);
function Tech_Female() {
  var data = google.visualization.arrayToDataTable([
    ['Company', '2014', '2015', '2016'],
    ['Pinterest', 21, 21, 26],
    ['AirBnB'  , , 21.8, 25.6],
    ['Slack    ',    ,    ,24.5],
    ['Pandora  ',18  ,18.6,24  ],
    ['Apple    ',20  ,22  ,23  ],
    ['Dropbox  ',    ,19  ,21  ],
    ['LinkedIn ',17  ,18  ,20  ],
    ['Google   ',17  ,18  ,19  ],
    ['Microsoft',17.1,16.6,17.5],
    ['Facebook ',15  ,16  ,17  ],
    ['Yahoo    ',15  ,16  ,17  ],
    ['Uber     ',    ,    ,15.4],
    ['Twitter  ',10  ,13  ,15  ],
  ]);
  var options = {
    title: '% Tech Female',
    height: 350,
    legend: { position: "top" },
    chartArea: {
      width: '400',
      top: 40,
      bottom: 50
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('Tech_Female'));
  chart.draw(data, options);
}
