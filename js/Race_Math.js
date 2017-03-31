google.charts.setOnLoadCallback(Race_Math);
function Race_Math() {

var data = new google.visualization.DataTable();
      data.addColumn('string','Year');
      data.addColumn('number','White');
      data.addColumn('number','Asian');
      data.addColumn('number','Hispanic');
      data.addColumn('number','Black');
      data.addColumn('number','Other');
      data.addColumn('number','Visa');

      data.addRows([
['2002',40,3,1,2,1,48],
['2003',41,5,2,2,1,44],
['2004',37,5,2,1,1,49],
['2005',34,6,2,2,1,50],
['2006',36,5,2,2,1,50],
['2007',34,5,2,1,1,50],
['2008',38,4,2,2,2,47],
['2009',38,5,2,2,1,46],
['2010',41,6,2,1,1,43],
['2011',40,5,2,1,1,43],
['2012',38,4,3,1,1,44],
  ]);
  var options = {
    title: 'Race distribution in Math',
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
  var chart = new google.visualization.LineChart(document.getElementById('Race_Math'));
  chart.draw(data, options);
}


