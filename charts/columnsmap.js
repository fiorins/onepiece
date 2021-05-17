var mydata = [
  {
  name: 'Chapters',
  data: [21, 48, 48, 48, 48, 46, 45, 45, 45, 
    45, 44, 43, 42, 40, 42, 43, 39, 39, 39, 40,
    39, 39, 38, 33, 15]
  }, {
  name: 'Breaks',
  data: [3, 4, 4, 4, 5, 7, 8, 8, 8, 7, 
    8, 9, 10, 12, 10, 9, 13, 13, 13, 13,
    13, 13, 14, 19, 7]
  }, {
  name: 'Volumes',
  data: [1, 5, 5, 5, 5, 5, 5, 4, 5, 4, 
    4, 4, 4, 4, 4, 4, 4, 4, 4, 3,
    4, 4, 4, 2, 2]
  },
];

var mydatareverse = [
  {
  name: 'Chapters',
  data: [15,33,38,39,39,40,39,39,39,43,42,40,42,43,44,45,45,45,45,46,48,48,48,48,21]
  }, {
  name: 'Breaks',
  data: [7,19,14,13,13,13,13,13,13,9,10,12,10,9,8,7,8,8,8,7,5,4,4,4,3]
  }, {
  name: 'Volumes',
  data: [2,2,4,4,4,3,4,4,4,4,4,4,4,4,4,4,5,4,5,5,5,5,5,5,1]
  },
];

var options = {
  series: mydata,

  responsive: [ {
    breakpoint: 1000,
    options: {
      series: mydatareverse,
      chart: {
        height: 700,
        width: '100%', 
      },
      plotOptions: {
        bar: {
          horizontal: true, }
      },
      xaxis: {
        axisTicks: {
          show: false, },
        categories: ['2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', 
          '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', 
          '2001', '2000', '1999', '1998', '1997'], 
        labels: {
          show: false } 
      },
      yaxis: {
        axisTicks: {
          show: true, },
        labels: {
          offsetX: 8,
          offsetY: 2,
          style: {
            colors: '#000',
            fontSize: '14px',
          }, 
        }, 
      },
      legend: {
        show: true,
        position: 'bottom',
        floating: false,
        offsetX: 0,
        offsetY: 6,
        itemMargin: {
          horizontal: 8,
          vertical: 4,
        },
      },
    }
  }],

  chart: {
    //background: '#ff0000',
    height: 450,
    width: '100%',
    type: 'bar',
    zoom: {
      enabled: false,
      type: 'x',  
      autoScaleXaxis: true,
    },
    toolbar: {
      show: false,
      tools: {
          download: false,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: false,
      },
    },
    events: {
      mounted: function (ctx) {
        ctx.toggleSeries("Volumes");
      },
    },
    //stackType: 'normal',
  },

  xaxis: {
    categories: ['1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', 
    '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', 
    '2017', '2018', '2019', '2020', '2021'],
    labels: {
      offsetX: 5,
      offsetY: 0,
      show: true,
      rotate: -45,
      rotateAlways: true,
      style: {
        colors: '#000',
        fontSize: '14px',
      },
    },
    //tickPlacement: 'on', //attivarlo in caso per usare la toolbar
  },

  yaxis: {
    labels: {
      show: false,
    } 
  },

  dataLabels: {
    enabled: true,
    //offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ["#333"],  /* dark mode variable*/
    },
  },

  colors: ['#78F000', '#FF0000', '#FFB300'], //colori delle series

  title: {
    text: 'Annual numbers',
    align: 'center',
    floating: true,
    style: {
      fontSize: '20px',
      fontWeight: 'bold',
      fontFamily: undefined,
      color: '#263238',    /*dark mode variable*/
    },
    margin: 20,
  },

  legend: {
    show: true,
    position: 'bottom',
    floating: false,
    offsetX: 0,
    offsetY: 6,
    labels: { 
      useSeriesColors: true,  /*dark mode variable*/
    },
    markers: {  //forme delle voci della legenda
      width: 12,
      height: 12,
      radius: 3,
    },
    itemMargin: {
      horizontal: 6,
      vertical: 0,
    },
    onItemClick: {
      toggleDataSeries: true
    },
    onItemHover: {
      highlightDataSeries: true
    },
    fontSize: '15px',
    fontFamily: 'Helvetica, Arial',
    fontWeight: 500,
  },

  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '90%',
      dataLabels: {
        position: 'top',
        orientation: 'horizontal',
      },
      /*colors: {  
        backgroundBarColors: ['#F2F4F6']
      },*/ //metodo buggato a quanto pare
      borderRadius: 5,
    },
  },

  tooltip: {
    enabled: true,
    theme: 'light',
  },

  grid: { 
    show: false,
    padding: {
      left: 10,
      right: 20,
    }
  },
  
};

var myChart2 = new ApexCharts(document.querySelector("#chart2"), options);
myChart2.render();

function turnDarkMode2() {
  myChart2.updateOptions({
    responsive: [ {
      breakpoint: 1000,
      options: {
        xaxis: {
          axisTicks: {
            show: false,
          },
          categories: ['2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', 
            '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', 
            '2001', '2000', '1999', '1998', '1997'], 
          labels: {
            show: false } 
        },
        yaxis: {
          axisTicks: {
            show: true, 
          },
          labels: {
            offsetX: 8,
            offsetY: 2,
            style: {
              colors: '#CBC1A6',
              fontSize: '14px',
            }, 
          }, 
        },
      }
    }
    ],
    chart: {
      //background: '#ff0000',
      height: 450,
      width: '100%',
      type: 'bar',
      zoom: {
        enabled: false,
        type: 'x',  
        autoScaleXaxis: true,
      },
      toolbar: {
        show: false,
        tools: {
            download: false,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: false,
        },
      },
    },
    xaxis: {
      labels: {
        style: {
          colors: '#CBC1A6',
          fontSize: '14px',
        },
      }
    },
    title: {
      style: {
        color: '#D9CDC7',
      },
    },
    tooltip: {
      theme: 'dark', 
    },
    legend: {
      labels: {
        useSeriesColors: true, 
      }, 
    },
  })
}

function turnLightMode2() {
  myChart2.updateOptions({
    responsive: [ {
      breakpoint: 1000,
      options: {
        xaxis: {
          axisTicks: {
            show: false,
          },
          categories: ['2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', 
            '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', 
            '2001', '2000', '1999', '1998', '1997'], 
          labels: {
            show: false } 
        },
        yaxis: {
          axisTicks: {
            show: true, 
          },
          labels: {
            offsetX: 8,
            offsetY: 2,
            style: {
              colors: '#000',
              fontSize: '14px',
            }, 
          }, 
        },
      }
    }
    ],
    chart: {
      //background: '#ff0000',
      height: 450,
      width: '100%',
      type: 'bar',
      zoom: {
        enabled: false,
        type: 'x',  
        autoScaleXaxis: true,
      },
      toolbar: {
        show: false,
        tools: {
            download: false,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: false,
        },
      },
    },
    xaxis: {
      labels: {
        style: {
          colors: '#000',
          fontSize: '14px',
        },
      }
    },
    title: {
      style: {
        color: '#263238',
      },
    },
    tooltip: {
      theme: 'light', 
    },
    legend: {
      labels: {
        useSeriesColors: true, 
      }, 
    },
  })
}