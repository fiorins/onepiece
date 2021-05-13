var mydata = [ 
  {
    name: 'FOUR EMPERORS',
    data: [ 
      { x: 'Wano Country',
        y: 112 ,
        z: '11%' },
      { x: 'Levely',
        y: 6,
        z: '0,6%' },
      { x: 'Whole Cake Island',
        y: 78,
        z: '7,6%' },
      { x: 'Zou',
        y: 23,
        z: '2,3%' },
    ]
  }, {
    name: 'DRESSROSA',
    data: [ 
      { x: 'Dressrosa',
        y: 102, 
        z: '10%'},
      { x: 'Punk Hazard',
        y: 46,
        z: '4,5%' },
    ]
  }, {
    name: 'FISH-MAN ISLAND',
    data: [ 
      { x: 'Fish-Man Island',
        y: 51,
        z: '5%' },
      { x: 'Return to Sabaody',
        y: 5,
        z: '0,5%' },
    ]
  }, {
    name: 'SUMMIT WAR',
    data: [ 
      { x: 'Post-War',
        y: 17,
        z: '1,7%' },
      { x: 'Marineford',
        y: 31,
        z: '3%' },
      { x: 'Impel Down',
        y: 25,
        z: '2,5%' },
      { x: 'Amazon Lily',
        y: 11,
        z: '1,1%' },
      { x: 'Sabaody Archipelago',
        y: 24,
        z: '2,4%' },
    ]
  }, {
    name: 'THRILLER BARK',
    data: [ 
      { x: 'Thriller Bark',
        y: 48,
        z: '4,7%' },
    ]
  }, {
    name: 'WATER 7',
    data: [ 
      { x: 'Post-Enies Lobby',
        y: 11,
        z: '1,1%' },
      { x: 'Enies Lobby',
        y: 56,
        z: '5,5%' },
      { x: 'Water 7',
        y: 53,
        z: '5,2%' },
      { x: 'LongRing LongLand',
        y: 19,
        z: '1,9%' },
    ]
  }, {
    name: 'SKY ISLAND',
    data: [ 
      { x: 'Skypiea',
        y: 66,
        z: '6,5%' },
      { x: 'Jaya',
        y: 19,
        z: '1,9%' },
    ]
  }, {
    name: 'ALABASTA',
    data: [ 
      { x: 'Alabasta',
        y: 63,
        z: '6,2%' },
      { x: 'Drum Island',
        y: 25,
        z: '2,5%' },
      { x: 'Little Garden',
        y: 15,
        z: '1,5%' },
      { x: 'Whisky Peak',
        y: 9,
        z: '0,9%' },
      { x: 'Reverse Mountain',
        y: 5,
        z: '0,5%' },
    ]
  }, {
    name: 'EAST BLUE',
    data: [ 
      { x: 'Loguetown',
        y: 5,
        z: '0,5%' },
      { x: 'Arlong Park',
        y: 27,
        z: '2,7%' },
      { x: 'Baratie',
        y: 27,
        z: '2,7%' },
      { x: 'Syrup Village',
        y: 20,
        z: '2%' },
      { x: 'Orange Town',
        y: 14,
        z: '1,4%' },
      { x: 'Romance Dawn',
        y: 7,
        z: '0,7%' },
    ]
  },
];

var options = {
  series: mydata,

  chart: {
    //background: '#ff0000',
    height: 650,
    width: '100%',
    type: 'treemap',
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  dataLabels: { 
    enabled: true,
    style: {
      fontSize: '12px',
      colors: ["#333"],  /* dark mode variable*/
    },
  },

  colors: ['#E50000', '#FCB6F7', '#4175F0', '#B5B5B5', '#9F45BA', '#1F5299', '#00A100', '#FFB200', '#59E3E1'],
  
  title: {
    text: 'Story Arcs',
    align: 'center',
    floating: false,
    style: {
      fontSize: '20px',
      fontWeight: 'bold',
      fontFamily: undefined,
      color: '#263238',    /*dark mode variable*/
    },
    margin: 20,
  },

  legend: { ////
    show: true,
    position: 'bottom',
    floating: false,
    offsetX: 0,
    offsetY: 12,
    labels: { 
      useSeriesColors: true, //colori delle voci della legenda  /*dark mode variable*/
    },
    markers: {  //forme delle voci della legenda
      width: 12,
      height: 12,
      radius: 5,
    },
    itemMargin: {
      horizontal: 6,
      vertical: 10,
    },
    onItemClick: {
      toggleDataSeries: true
    },
    onItemHover: {
      highlightDataSeries: true
    },
    fontSize: '12px',
    fontFamily: 'Helvetica, Arial',
    fontWeight: 500,
  },

  plotOptions: {
    treemap: {
        enableShades: true,
        shadeIntensity: 0.4,
        reverseNegativeShade: true,
        distributed: false,
        //useFillColorAsStroke: false,  per togliere bordi   
    }
  },

  tooltip: {
    enabled: true,
    followCursor: true,
    fillSeriesColor: true, 
    theme: 'light',
    y: {
        formatter: function (val) {
          return val + ' chapters';
        },
      },
    z: {
        formatter: function (val) {
          return val + ' of the story';
        },
        title: 'Quota: ',
      },
  },

  grid: {
    show: false,
    padding: {
      left: 15,
      right: 15,
    }
  },

};
  
//per ricalcolare % ho creato uno script su codepen, basta cambiare il numero dei capitoli dell'ultimo arco

var myChart3 = new ApexCharts(document.querySelector("#chart3"), options);
myChart3.render();

function turnDarkMode3() {
  myChart3.updateOptions({
    xaxis: {
      title: {
        style: {
          color: '#CBC1A6',
          fontSize: '14px',
          fontWeight: 500,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#CBC1A6',
          fontSize: '14px', //ce lo devo rimettere altrimenti mi annulla lo style originale e va senza fontSize
        }
      },
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

function turnLightMode3() {
  myChart3.updateOptions({
    xaxis: {
      title: {
        style: {
          color: undefined,
          fontSize: '14px',
          fontWeight: 500,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#000',
          fontSize: '14px',
        }
      },
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