google.charts.load('current', {
  packages: ['corechart', 'bar']
});
google.charts.setOnLoadCallback(drawStacked);
function drawStacked() {
  var data = google.visualization.arrayToDataTable([
    ['Year','Male','Female'],
    ['2004',89.15,10.70],
    ['2005',90.53,9.16 ],
    ['2006',90.16,9.52 ],
    ['2007',88.85,10.81],
    ['2008',89.28,10.56],
    ['2009',90.24,9.76 ],
    ['2010',90.15,9.85 ],
    ['2011',90.73,9.27 ],
    ['2012',91.64,8.36 ],
    ['2013',88.93,11.07],
    ['2014',83.93,16.07],
    ['2015',80.00,20.00],
    ['2016',74.77,25.23],
  ]);
  var options = {
    title: 'Gender BS @ UIUC',
    isStacked: true,
    legend: { position: "none" },
    height: 300,
    width: 300,
    chartArea: {
      width: 275,
      top: 20,
      left: 10,
      bottom: 50,
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('Gender_BS'));
  chart.draw(data, options);
}
