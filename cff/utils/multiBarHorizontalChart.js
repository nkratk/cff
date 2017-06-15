/* global d3 */
export default class MultiBarHorizontalBarChart {
  constructor() {
    const chart = {
      type: 'multiBarHorizontalChart',
      height: 300,
      margin: {
        left: 150
      },
      x: function(d){return d.label;},
      y: function(d){return d.value;},
      showControls: false,
      showLegend: false,
      showValues: true,
      showXAxis: true,
      showYAxis: false,
      duration: 500,
      groupSpacing: 0.6,
      xAxis: {
        showMaxMin: false
      },
      yAxis: {
        axisLabel: 'Values',
        tickFormat: function(d){
          return d3.format(',.2f')(d);
        }
      },
      noData: 'No Data Avialable'
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
