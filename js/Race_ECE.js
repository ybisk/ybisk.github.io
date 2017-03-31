google.charts.setOnLoadCallback(Race_ECE);
function Race_ECE() {

var data = new google.visualization.DataTable();
      data.addColumn('string','Year');
      data.addColumn('number','White');
      data.addColumn('number','Asian');
      data.addColumn('number','Hispanic');
      data.addColumn('number','Black');
      data.addColumn('number','Other');
      data.addColumn('number','Visa');

      data.addRows([
['2002',23,10,2,1,1,57],
['2003',20,9,1,2,1,63],
['2004',20,7,1,2,1,63],
['2005',20,7,1,2,1,64],
['2006',17,6,1,1,1,68],
['2007',15,6,1,1,1,66],
['2008',18,8,1,1,1,65],
['2009',21,9,1,2,1,62],
['2010',22,8,2,1,1,58],
['2011',20,8,2,1,0,59],
['2012',19,8,2,1,1,61],
  ]);
  var options = {
    title: 'Race distribution in ECE',
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
  var chart = new google.visualization.LineChart(document.getElementById('Race_ECE'));
  chart.draw(data, options);
}


