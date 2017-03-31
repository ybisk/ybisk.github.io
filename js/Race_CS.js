google.charts.setOnLoadCallback(Race_CS);
function Race_CS() {

var data = new google.visualization.DataTable();
      data.addColumn('string','Year');
      data.addColumn('number','White');
      data.addColumn('number','Asian');
      data.addColumn('number','Hispanic');
      data.addColumn('number','Black');
      data.addColumn('number','Other');
      data.addColumn('number','Visa');

      data.addRows([
['2002',36,11,2,2,1,43],
['2003',36,9,1,2,2,44],
['2004',34,8,1,2,1,49],
['2005',29,8,1,1,1,53],
['2006',28,9,1,1,1,55],
['2007',28,6,1,2,1,54],
['2008',28,7,1,2,1,56],
['2009',33,8,1,2,1,49],
['2010',33,8,1,2,1,46],
['2011',33,9,1,2,1,45],
['2012',31,7,2,2,1,48],
  ]);
  var options = {
    title: 'Race distribution in C&IS',
    height: 200,
    width: 400,
    vAxis: {maxValue: 100},
    legend: { position: "right" },
    chartArea: {
      width: 250,
      left: 50,
      top: 20,
      bottom: 40,
    }
  };
  var chart = new google.visualization.LineChart(document.getElementById('Race_CS'));
  chart.draw(data, options);
}


