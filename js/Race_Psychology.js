google.charts.setOnLoadCallback(Race_Psychology);
function Race_Psychology() {

var data = new google.visualization.DataTable();
      data.addColumn('string','Year');
      data.addColumn('number','White');
      data.addColumn('number','Asian');
      data.addColumn('number','Hispanic');
      data.addColumn('number','Black');
      data.addColumn('number','Other');
      data.addColumn('number','Visa');

      data.addRows([
['2002',70,10,2,2,1,5],
['2003',70,9,1,2,1,6],
['2004',65,8,1,1,1,6],
['2005',69,8,1,2,1,6],
['2006',66,8,1,2,1,8],
['2007',65,8,1,1,1,7],
['2008',65,8,1,2,1,7],
['2009',64,8,1,2,1,7],
['2010',64,8,1,1,1,8],
['2011',63,8,1,1,0,7],
['2012',63,9,2,1,1,7],
  ]);
  var options = {
    title: 'Race distribution in Psychology',
    height: 200,
    width: 300,
    vAxis: {maxValue: 100},
    chartArea: {
      width: 300,
      left: 50,
      top: 20,
      bottom: 40,
    },
    legend: { position: "none" },
  };
  var chart = new google.visualization.LineChart(document.getElementById('Race_Psychology'));
  chart.draw(data, options);
}
