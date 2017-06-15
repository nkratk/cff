/* global d3 */
export default class StackedAreaChart {
 constructor() {
   const chart = {
      type: 'stackedAreaChart',
      height: 450,
       margin : {
           top: 20,
           right: 20,
           bottom: 30,
           left: 40
       },
       x: (d) => d[0],
       y: (d) => d[1],
       useVoronoi: false,
       clipEdge: false,
       duration: 100,
       useInteractiveGuideline: false,
       showTotalInTooltip: false,
       showControls: false,
          xAxis: {
              showMaxMin: false,
              tickFormat: (d) => d3.time.format('%I %p')(new Date(d))
          },
          yAxis: {
              tickFormat: (d) => d3.format(',.2f')(d)
          }
       };
   this.options = {
     chart
   }
 }

 getData (data) {
   //manipulate data to pass it to angular-nvd3 discrete bar chart
   const options = this.options;

   return {
     options,
     data
   };
 }
}
