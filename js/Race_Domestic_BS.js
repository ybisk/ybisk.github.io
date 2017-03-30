google.charts.load('current', {
  packages: ['corechart', 'bar']
});
google.charts.setOnLoadCallback(drawStacked);
function drawStacked() {
  var data = google.visualization.arrayToDataTable([
    ['Year','Caucasian','Asian American','African American','Hispanic','Multiracial','Unknown'],
    ['2004',68.26,    24.85,    1.50,    3.74,    0.00,    1.65],
    ['2005',70.00,    22.00,    1.50,    4.50,    0.00,    1.67],
    ['2006',68.26,    23.23,    1.24,    5.32,    0.00,    1.60],
    ['2007',69.88,    20.85,    2.12,    4.44,    0.00,    2.51],
    ['2008',66.99,    25.24,    2.14,    3.30,    0.00,    2.14],
    ['2009',67.74,    24.86,    1.33,    2.85,    0.00,    3.04],
    ['2010',62.89,    27.49,    1.37,    3.44,    3.78,    1.03],
    ['2011',59.74,    31.59,    1.80,    2.95,    2.95,    0.65],
    ['2012',55.15,    35.41,    1.89,    3.92,    3.19,    0.29],
    ['2013',53.56,    38.52,    1.98,    3.30,    1.85,    0.66],
    ['2014',48.86,    41.90,    1.65,    3.42,    2.28,    1.77],
    ['2015',44.08,    45.86,    1.66,    4.20,    2.68,    1.53],
    ['2016',38.48,    48.35,    2.53,    5.19,    3.54,    1.90],
  ]);
  var options = {
    title: 'Domestic BS @ UIUC',
    isStacked: true,
    height: 400,
    width: 300,
    legend: { position: "none" },
    chartArea: {
      width: 275,
      left: 10,
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('Race_Domestic_BS'));
  chart.draw(data, options);
}
