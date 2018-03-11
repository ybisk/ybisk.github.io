google.charts.setOnLoadCallback(Gender_BS);
function Gender_BS() {
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
google.charts.setOnLoadCallback(Leadership_Female);
function Leadership_Female() {
  var data = google.visualization.arrayToDataTable([
    ['Company'  ,'2014','2015','2016','2017'],
    ['Pandora  ',39    ,40.1  ,38    ,0     ],
    ['LinkedIn ',25    ,30    ,35    ,0     ],
    ['AirBnB   ',0     ,25.5  ,30    ,0     ],
    ['Twitter  ',21    ,22    ,30    ,0     ],
    ['Apple    ',28    ,28    ,28    ,29    ],
    ['Slack    ',0     ,0     ,0     ,28.3  ],
    ['Facebook ',23    ,23    ,27    ,0     ],
    ['Dropbox  ',0     ,21    ,27    ,0     ],
    ['Google   ',21    ,22    ,24    ,25    ],
    ['Yahoo    ',23    ,24    ,22    ,0     ],
    ['Uber     ',0     ,0     ,22    ,0     ],
    ['Microsoft',17.3  ,17.5  ,17.9  ,19.1  ],
    ['Pinterest',19    ,16    ,17    ,0     ],
  ]);
  var options = {
    title: '% Leadership Female',
    legend: { position: "none" },
    height: 350,
    chartArea: {
      width: '400',
      top: 40,
      bottom: 50,
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('Leadership_Female'));
  chart.draw(data, options);
}
google.charts.setOnLoadCallback(Race_Biology);
function Race_Biology() {

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


google.charts.setOnLoadCallback(Race_Domestic_BS);
function Race_Domestic_BS() {
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
    height: 300,
    width: 300,
    legend: { position: "none" },
    chartArea: {
      width: 275,
      left: 10,
      top: 20,
      bottom: 50,
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('Race_Domestic_BS'));
  chart.draw(data, options);
}
google.charts.setOnLoadCallback(Race_Domestic_PhD);
function Race_Domestic_PhD() {
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
google.charts.setOnLoadCallback(Tech_Female);
function Tech_Female() {
  var data = google.visualization.arrayToDataTable([
    ['Company'  ,'2014','2015','2016','2017'],
    ['Pinterest', 21   , 21   ,26    ,0     ],
    ['AirBnB'   ,0     ,21.8  ,25.6  ,0     ],
    ['Slack    ',0     ,0     ,24.5  , 29.8 ],
    ['Pandora  ',18    ,18.6  ,24    ,0     ],
    ['Apple    ',20    ,22    ,23    ,23    ],
    ['Dropbox  ',0     ,19    ,21    ,0     ],
    ['LinkedIn ',17    ,18    ,20    ,0     ],
    ['Google   ',17    ,18    ,19    ,20    ],
    ['Microsoft',17.1  ,16.6  ,17.5  ,19    ],
    ['Facebook ',15    ,16    ,17    ,0     ],
    ['Yahoo    ',15    ,16    ,17    ,0     ],
    ['Uber     ',0     ,0     ,15.4  ,0     ],
    ['Twitter  ',10    ,13    ,15    ,0     ],
  ]);
  var options = {
    title: '% Tech Female',
    height: 350,
    legend: { position: "top" },
    chartArea: {
      width: '400',
      top: 40,
      bottom: 50
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('Tech_Female'));
  chart.draw(data, options);
}
google.charts.setOnLoadCallback(Tech_Race_2014);
function Tech_Race_2014() {
  var data = google.visualization.arrayToDataTable([
    ['Company'   ,'African American','Hispanic','Other/Multiple'],
    ['Apple'     , 6 , 7  , 3  ],
    ['Pandora   ',3  , 4  , 5  ],
    ['Twitter   ',1  , 3  , 4  ],
    ['Microsoft ',2.3, 3.8, 1.9],
    ['Yahoo     ',1  , 3  , 3  ],
    ['Google    ',1  , 2  , 3  ],
    ['Facebook  ',1  , 3  , 2  ],
    ['LinkedIn  ',1  , 3  , 1  ],
  ]);
  var options = {
    title: 'Tech Race Demographics (2014)',
    isStacked: true,
    height: 250,
    width: 300,
    vAxis: {maxValue: 20},
    legend: { position: "none" },
    chartArea: {
      width: 275,
      left: 20,
      top: 20,
      bottom: 50,
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('Tech_Race_2014'));
  chart.draw(data, options);
}

google.charts.setOnLoadCallback(Tech_Race_2015);
function Tech_Race_2015() {
  var data = google.visualization.arrayToDataTable([
    ['Company'   ,'African American','Hispanic','Other/Multiple'],
    ['Apple'     ,7  ,8  ,3  ],
    ['Pandora   ',3.3,4.3,5.9],
    ['Microsoft ',2.3,3.9,1.9],
    ['Yahoo     ',1  ,3  ,4  ],
    ['AirBnB    ',1  ,3.7,2.8],
    ['Twitter   ',1  ,3  ,3  ],
    ['Google    ',1  ,2  ,3  ],
    ['Facebook  ',1  ,3  ,2  ],
    ['LinkedIn  ',1  ,3  ,1  ],
    ['Pinterest ',1  ,2  ,2  ],
  ]);
  var options = {
    title: 'Tech Race Demographics (2015)',
    isStacked: true,
    height: 250,
    width: 350,
    vAxis: {maxValue: 20},
    legend: { position: "none" },
    chartArea: {
      width: 325,
      left: 20,
      top: 20,
      bottom: 50,
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('Tech_Race_2015'));
  chart.draw(data, options);
}


google.charts.setOnLoadCallback(Tech_Race_2016);
function Tech_Race_2016() {
  var data = google.visualization.arrayToDataTable([
    ['Company'   ,'African American','Hispanic','Other/Multiple'],
    ['Apple'     ,8  ,8  ,3  ],
    ['Slack     ',5.7,5.7,5.1],
    ['Pandora   ',3  ,7  ,4  ],
    ['Dropbox   ',1  ,6  ,3  ],
    ['AirBnB    ',1  ,3.4,5.5],
    ['Twitter   ',2  ,4  ,3  ],
    ['Microsoft ',2.4,4  ,2.1],
    ['Yahoo     ',1  ,2  ,4  ],
    ['Google    ',1  ,3  ,3  ],
    ['LinkedIn  ',1  ,3  ,3  ],
    ['Pinterest ',2  ,3  ,2  ],
    ['Facebook  ',1  ,3  ,2  ],
    ['Uber      ',1  ,2.1,2.8],
  ]);
  var options = {
    title: 'Tech Race Demographics (2016)',
    isStacked: true,
    height: 250,
    width: 675,
    vAxis: {maxValue: 20},
    chartArea: {
      width: 475,
      left: 20,
      top: 20,
      bottom: 50,
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('Tech_Race_2016'));
  chart.draw(data, options);
}

google.charts.setOnLoadCallback(Tech_Race_2017);
function Tech_Race_2017() {
  var data = google.visualization.arrayToDataTable([
    ['Company'   ,'African American','Hispanic','Other/Multiple'],
    ['Apple'     ,7  ,8  ,3  ],
    ['Slack     ',4.8,6.7,3.5],
    ['Pandora   ',   ,   ,   ],
    ['Dropbox   ',   ,   ,   ],
    ['AirBnB    ',   ,   ,   ],
    ['Twitter   ',   ,   ,   ],
    ['Microsoft ',2.7,4.3,2.4],
    ['Yahoo     ',   ,   ,   ],
    ['Google    ',2  ,4  ,4  ],
    ['LinkedIn  ',   ,   ,   ],
    ['Pinterest ',   ,   ,   ],
    ['Facebook  ',   ,   ,   ],
    ['Uber      ',   ,   ,   ],
  ]);
  var options = {
    title: 'Tech Race Demographics (2017)',
    isStacked: true,
    height: 250,
    width: 675,
    vAxis: {maxValue: 20},
    chartArea: {
      width: 475,
      left: 20,
      top: 20,
      bottom: 50,
    }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById('Tech_Race_2017'));
  chart.draw(data, options);
}
