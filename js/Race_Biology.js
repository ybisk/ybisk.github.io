google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

var data = new google.visualization.DataTable();
      data.addColumn('string','Year');
      data.addColumn('number','White');
      data.addColumn('number','Asian');
      data.addColumn('number','Hispanic');
      data.addColumn('number','Black');
      data.addColumn('number','Other');
      data.addColumn('number','Visa');

      data.addRows([
['2002',55,10,3,2,2,23],
['2003',54,9,3,2,2,25],
['2004',54,8,3,3,2,25],
['2005',52,8,4,2,1,26],
['2006',52,8,3,2,1,28],
['2007',50,8,4,3,1,28],
['2008',49,8,4,2,1,30],
['2009',51,8,4,3,1,27],
['2010',51,8,4,3,1,26],
['2011',50,8,4,3,1,26],
['2012',50,9,4,3,1,26],
  ]);
  var options = {
    title: 'Race distribution in Biology',
    height: 200,
    width: 300,
    vAxis: {maxValue: 100},
    legend: { position: "none" },
    chartArea: {
      width: 300,
      left: 50,
      top: 20,
      bottom: 40,
    }
  };
  var chart = new google.visualization.LineChart(document.getElementById('Race_Biology'));
  chart.draw(data, options);
}

