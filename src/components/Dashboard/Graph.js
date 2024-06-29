// import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';
// import { useSelector } from 'react-redux';

// const Graph = () => {
//   const data=useSelector((state)=>state?.data?.data)

//   if(data){
//     const categoryStats = {};
//    categoryStats.totalCount=0
//    categoryStats.totalSum=0
    
//     data.forEach(item => {
//     categoryStats.totalCount++
//     categoryStats.totalSum+=item.price
      
//       if (!categoryStats[item.category]) {
//         categoryStats[item.category] = { total: 0, count: 0 };
//       }
//       categoryStats[item.category].total += item.price;
//       categoryStats[item.category].count += 1;
//     });
    
//     const categoryAverages = {};
//     for (const category in categoryStats) {
//       const { total, count } = categoryStats[category];
//       categoryAverages[category] = total / count;
//     }
    
//     let totalAvg=categoryStats.totalSum/categoryStats.totalCount
//     categoryAverages.totalAvg=totalAvg
//     // console.log(totalAvg);
//   }


//   const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'];

//   const [series] = useState([{ data: [21, 22, 10, 28, 16] }]);
//   const [options] = useState({
//     chart: {
//       height: '100%',
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
//         ["Cloths (M)"],
//         ["Cloths (F)"],
//         ['Jewelery'],
//         ['Electronics'],
//         ['Peter'],
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
//     <div style={{ height: '100%' }}>
//       <div id="chart" style={{ height: '100%' }}>
//         <ReactApexChart options={options} series={series} type="bar" height="100%" />
//       </div>
//       <div id="html-dist"></div>
//     </div>
//   );
// };

// export default Graph;

import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';

const Graph = () => {
  const data = useSelector((state) => state?.data?.data);

  const [series, setSeries] = useState([]);
  const [options] = useState({
    chart: {
      height: '100%',
      type: 'bar',
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        },
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        ["Cloths (M)"],
        ["Cloths (F)"],
        ['Jewelery'],
        ['Electronics'],
        ['Total Avg'],
      ],
      labels: {
        style: {
          fontSize: '12px',
        },
      
      },
    },
  });

  useEffect(() => {
    if (data) {
      const categoryStats = {
        totalCount: 0,
        totalSum: 0,
      };

      data.forEach((item) => {
        categoryStats.totalCount++;
        categoryStats.totalSum += item.price;

        if (!categoryStats[item.category]) {
          categoryStats[item.category] = { total: 0, count: 0 };
        }
        categoryStats[item.category].total += item.price;
        categoryStats[item.category].count += 1;
      });

      const categoryAverages = {};
      for (const category in categoryStats) {
        const { total, count } = categoryStats[category];
        categoryAverages[category] = total / count;
      }

      let totalAvg = categoryStats.totalSum / categoryStats.totalCount;
      categoryAverages.totalAvg = totalAvg;

      const newSeries = [{ data: Object.values(categoryAverages).slice(2) }];

      setSeries(newSeries);
    }
  }, [data]);

  return (
    <div style={{ height: '100%',margin:"0 35px 0 10px",borderRadius:10, boxShadow:" 0 0 20px rgba(0, 0, 0, 0.2)", }}>
      <div id="chart" style={{ height: '100%' }}>
        <ReactApexChart options={options} series={series} type="bar" height="100%" />
      </div>
    </div>
  );
};

export default Graph;











// import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';

// const Graph = () => {
//   const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'];

//   const [series] = useState([{ data: [21, 22, 10, 28, 16] }]);
//   const [options] = useState({
//     chart: {
//       // height: "20%",
//       height: 250,
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
//         ["Cloths (M)"],
//         ["Cloths (F)"],
//         ['Jewelery'],
//         ['electronics'],
//         ['Peter'],
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
//         {/* <ReactApexChart options={options} series={series} type="bar" height={200} /> */}
//         <ReactApexChart options={options} series={series} type="bar" height="110%" />
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



// import React, { useState, useEffect } from 'react';
// import ReactECharts from 'echarts-for-react';

// const Graph = () => {
//   const [grid, setGrid] = useState({
//     left: '10%',
//     right: '10%',
//     bottom: '15%'
//   });

//   // Function to update grid size based on screen size
//   const updateGridSize = () => {
//     const width = window.innerWidth;
//     const height = window.innerHeight;
//     const left = width < 600 ? '5%' : '10%';
//     const right = width < 600 ? '5%' : '10%';
//     const bottom = height < 600 ? '10%' : '15%';
//     setGrid({ left, right, bottom });
//   };

//   // Add event listener for window resize
//   useEffect(() => {
//     updateGridSize(); // Initial grid size update
//     window.addEventListener('resize', updateGridSize);
//     return () => window.removeEventListener('resize', updateGridSize);
//   }, []);

//   const option = {
//     legend: {},
//     tooltip: {},
//     dataset: {
//       dimensions: ['product', '2015', '2016'],
//       source: [
//         { product: 'Matcha Latte', 2015: 43.3, 2016: 85.8 },
//         { product: 'Milk Tea', 2015: 83.1, 2016: 73.4 },
//         { product: 'Cheese Cocoa', 2015: 86.4, 2016: 65.2 },
//         { product: 'Walnut Brownie', 2015: 72.4, 2016: 53.9 }
//       ]
//     },
//     xAxis: { type: 'category' },
//     yAxis: {},
//     grid,
//     series: [{ type: 'bar' }, { type: 'bar' }]
//   };

//   return <ReactECharts option={option} />;
// };

// export default Graph;
