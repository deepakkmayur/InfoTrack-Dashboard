
// import React,{ useEffect, useRef } from 'react'
// import * as echarts from 'echarts';

// const Graph = () => {
//    const chartRef = useRef(null);

//    useEffect(() => {
//      const chartDom = chartRef.current;
//      const myChart = echarts.init(chartDom);

//      const option = {
//        legend: {},
//        tooltip: {},
//        dataset: {
//          dimensions: ['product', '2015', '2016'],
//          source: [
//            { product: 'product name 1', 2015: 43.3, 2016: 85.8 },
//            { product: 'product name 2', 2015: 83.1, 2016: 73.4 },
//            { product: 'product name 3', 2015: 86.4, 2016: 65.2 },
//            { product: 'product name 4', 2015: 72.4, 2016: 53.9 }
//          ]
//        },
//        xAxis: { type: 'category' },
//        yAxis: {},
//        series: [{ type: 'bar',itemStyle: { color: '#5470C6' }  }, { type: 'bar',itemStyle: { color: '#91CC75' } }]
//      };
 
//      myChart.setOption(option);
//      return () => {
//        myChart.dispose();
//      };
//    }, []);
 
//    return <div ref={chartRef} style={{ width: '100%', height: '200%' }} />;  // this div element returned by the component uses ref={chartRef} to associate the chartRef reference with this div. When the component mounts, chartRef.current will point to this div element
//  };
 

// export default Graph


// import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';

// const Graph = () => {
//   const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'];

//   const [series] = useState([{ data: [21, 22, 10, 28, 16, 21, 13, 30] }]);
//   const [options] = useState({
//     chart: {
//       height: 350,
//       type: 'bar',
//       events: {
//         click: function(chart, w, e) {
//           // console.log(chart, w, e)
//         }
//       }
//     },
//     colors: colors,
//     plotOptions: {
//       bar: {
//         columnWidth: '45%',
//         distributed: true,
//       }
//     },
//     dataLabels: {
//       enabled: false
//     },
//     legend: {
//       show: false
//     },
//     xaxis: {
//       categories: [
//         ['John', 'Doe'],
//         ['Joe', 'Smith'],
//         ['Jake', 'Williams'],
//         'Amber',
//         ['Peter', 'Brown'],
//         ['Mary', 'Evans'],
//         ['David', 'Wilson'],
//         ['Lily', 'Roberts'],
//       ],
//       labels: {
//         style: {
//           colors: colors,
//           fontSize: '12px'
//         }
//       }
//     }
//   });

//   return (
//     <div>
//       <div id="chart">
//         <ReactApexChart options={options} series={series} type="bar" height={350} />
//       </div>
//       <div id="html-dist"></div>
//     </div>
//   );
// };

// export default Graph;

// import React from 'react';
// import ReactECharts from 'echarts-for-react';

// const Graph = () => {
//   const option = {
//     legend: {},
//     tooltip: {},
//     dataset: {
//       dimensions: ['product', '2015', '2016'],
//       source: [
//         { product: 'Matcha Latte', 2015: 43.3, 2016: 85.8 },
//         { product: 'Milk Tea', 2015: 83.1, 2016: 73.4},
//         { product: 'Cheese Cocoa', 2015: 86.4, 2016: 65.2 },
//         { product: 'Walnut Brownie', 2015: 72.4, 2016: 53.9 }
//       ]
//     },
//     xAxis: { type: 'category' },
//     yAxis: {},
//     grid: {
//       left: '10%',
//       right: '10%',
//       bottom: '15%'
//     },
//     series: [{ type: 'bar' }, { type: 'bar' }]
//   };

//   return <ReactECharts option={option} />;
// };

// export default Graph;



import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';

const Graph = () => {
  const [grid, setGrid] = useState({
    left: '10%',
    right: '10%',
    bottom: '15%'
  });

  // Function to update grid size based on screen size
  const updateGridSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const left = width < 600 ? '5%' : '10%';
    const right = width < 600 ? '5%' : '10%';
    const bottom = height < 600 ? '10%' : '15%';
    setGrid({ left, right, bottom });
  };

  // Add event listener for window resize
  useEffect(() => {
    updateGridSize(); // Initial grid size update
    window.addEventListener('resize', updateGridSize);
    return () => window.removeEventListener('resize', updateGridSize);
  }, []);

  const option = {
    legend: {},
    tooltip: {},
    dataset: {
      dimensions: ['product', '2015', '2016'],
      source: [
        { product: 'Matcha Latte', 2015: 43.3, 2016: 85.8 },
        { product: 'Milk Tea', 2015: 83.1, 2016: 73.4 },
        { product: 'Cheese Cocoa', 2015: 86.4, 2016: 65.2 },
        { product: 'Walnut Brownie', 2015: 72.4, 2016: 53.9 }
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    grid,
    series: [{ type: 'bar' }, { type: 'bar' }]
  };

  return <ReactECharts option={option} />;
};

export default Graph;
