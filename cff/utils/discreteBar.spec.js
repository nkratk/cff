import DiscreteBarChart from './discreteBar';

describe('DiscreteBarChart', () => {

  let chart;

  beforeEach(() => {
    chart = new DiscreteBarChart();
  });

  it('Should be defined', () => {
    expect(DiscreteBarChart).toBeDefined();
    expect(chart).toBeDefined();
  });

  it('Should have options required for the chart', () => {
    expect(chart.options).toBeDefined();
    expect(chart.options.chart).toBeDefined();
  });

  it('Should have "multiBarHorizontalChart" as the chart type', () => {
    expect(chart.options.chart.type).toBe('discreteBarChart');
  });

  it('Should return value for x axis', () => {
    const data = {
      "label": "Electronics",
      "value": 25
    };
    expect(chart.options.chart.x(data)).toBe(data.label);
  });

  it('Should return value for y axis', () => {
    const data = {
      "label": "Electronics",
      "value": 25
    };
    expect(chart.options.chart.y(data)).toBe(data.value);
  });

  it('Should return formatted value with "%"', () => {
    expect(chart.options.chart.valueFormat(25.3)).toBe('25.3%');
  });

  it('Should return chart options', () => {
    const data = ["chartData"];
    const res = chart.getData(data);
    expect(res.options).toBe(chart.options);
  });
});
