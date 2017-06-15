 export default class DiscreteBarChart {
  constructor() {
		const chart = {
			type: 'discreteBarChart',
			height: 450,
			margin : {
				top: 20,
				right: 20,
				bottom: 50,
				left: 55
			},
			x: (d) => d.label,
			y: (d) => d.value,
			showValues: true,
			valueFormat: (d) => `${d}%`,
			duration: 500,
			xAxis: {
				axisLabel: 'X Axis'
			},
			yAxis: {
				axisLabel: 'Y Axis',
				axisLabelDistance: -10
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
