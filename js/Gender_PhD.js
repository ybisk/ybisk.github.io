google.charts.setOnLoadCallback(Gender_PhD);
function Gender_PhD() {
  var data = google.visualization.arrayToDataTable([
    ['Year','Male','Female'],
    ['2004',84.99,15.01],
    ['2005',84.23,15.77],
    ['2006',83.65,16.35],
    ['2007',84.69,15.31],
    ['2008',86.64,13.36],
    ['2009',86.35,13.65],
    ['2010',85.54,14.46],
    ['2011',84.31,15.69],
    ['2012',82.89,17.11],
    ['2013',78.83,21.17],
    ['2014',77.30,22.70],
    ['2015',78.06,21.94],
    ['2016',77.19,22.81],
  ]);
  var options = {
    title: 'Gender PhD @ UIUC',
    isStacked: true,
    height: 300,
    width: 400,
    chartArea: {
      width: 275,
      top: 20,
      left: 10,
      bottom: 50,
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('Gender_PhD'));
  chart.draw(data, options);
}
