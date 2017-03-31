google.charts.setOnLoadCallback(Gender_Field);
function Gender_Field() {

var data = new google.visualization.DataTable();
      data.addColumn('string', 'Year');
      data.addColumn('number', 'ECE');
      data.addColumn('number', 'C&IS');
      data.addColumn('number', 'Math');
      data.addColumn('number', 'Bio');
      data.addColumn('number', 'Pyschology');

      data.addRows([
['1980',03,10,16,28,42],
['1981',03,11,15,29,44],
['1982',03,09,13,29,46],
['1983',01,13,16,33,48],
['1984',02,13,16,31,50],
['1985',04,11,15,33,49],
['1986',05,12,17,34,51],
['1987',04,14,17,35,54],
['1988',04,11,16,37,55],
['1989',05,18,18,37,56],
['1990',06,16,18,37,58],
['1991',07,15,20,38,62],
['1992',09,14,21,38,59],
['1993',09,16,25,41,61],
['1994',09,16,21,41,62],
['1995',11,19,23,42,64],
['1996',10,16,21,43,67],
['1997',09,18,24,44,67],
['1998',10,17,26,44,67],
['1999',10,19,26,43,67],
['2000',13,17,25,45,67],
['2001',12,19,27,45,67],
['2002',12,21,29,45,67],
['2003',12,20,27,46,68],
['2004',14,21,28,46,68],
['2005',13,20,27,49,68],
['2006',14,21,30,49,71],
['2007',15,20,29,49,71],
['2008',17,22,31,50,70],
['2009',15,22,31,52,71],
['2010',18,21,29,52,70],
['2011',16,21,29,52,72],
['2012',17,21,28,53,71],
['2013',15,18,29,53,72],
['2014',17,20,29,54,72],
  ]);
  var options = {
    title: 'Percentage of female graduates by Field',
    height: 400,
    width: 600,
    legend: { position: 'top' },
    chartArea: {
      width: 500,
      left: 50,
    }
  };
  var chart = new google.visualization.LineChart(document.getElementById('Gender_Field'));
  chart.draw(data, options);
}
