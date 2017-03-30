google.charts.load('current', {
  packages: ['corechart', 'bar']
});
google.charts.setOnLoadCallback(drawStacked);
function drawStacked() {
  var data = google.visualization.arrayToDataTable([
    ['Year','Caucasian','Asian American','African American','Hispanic','Multiracial','Unknown'],
    ['2004',75.19,    20.16,    1.55,    2.33, 0.00,    0.78],
    ['2005',70.83,    25.83,    1.67,    1.67, 0.00,    0.00],
    ['2006',77.45,    17.65,    2.94,    0.98, 0.00,    0.98],
    ['2007',71.88,    21.88,    4.17,    1.04, 0.00,    1.04],
    ['2008',75.82,    20.88,    3.30,    0.00, 0.00,    0.00],
    ['2009',71.74,    20.65,    3.26,    0.00, 0.00,    4.35],
    ['2010',68.52,    25.93,    2.78,    0.00, 0.93,    1.85],
    ['2011',63.27,    29.59,    3.06,    0.00, 1.02,    3.06],
    ['2012',63.95,    25.58,    3.49,    2.33, 2.33,    2.33],
    ['2013',69.79,    20.83,    4.17,    2.08, 3.13,    0.00],
    ['2014',70.83,    17.71,    3.13,    3.13, 4.17,    1.04],
    ['2015',63.64,    23.23,    2.02,    6.06, 4.04,    1.01],
    ['2016',60.58,    23.08,    1.92,    8.65, 3.85,    0.96],
  ]);
  var options = {
    title: 'Domestic PhD @ UIUC',
    isStacked: true,
    height: 300,
    width: 400,
    chartArea: {
      width: 275,
      left: 10,
      top: 20,
      bottom: 50,
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('Race_Domestic_PhD'));
  chart.draw(data, options);
}
