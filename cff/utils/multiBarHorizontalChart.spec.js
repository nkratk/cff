import MultiBarHorizontalChart from './multiBarHorizontalChart';

describe('HorizontalBarChart', () => {

  let chart;

  beforeEach(() => {
    chart = new MultiBarHorizontalChart();
  });

  it('Should be defined', () => {
    expect(MultiBarHorizontalChart).toBeDefined();
    expect(chart).toBeDefined();
  });

  it('Should have options required for the chart', () => {
    expect(chart.options).toBeDefined();
    expect(chart.options.chart).toBeDefined();
  });

  it('Should have "multiBarHorizontalChart" as the chart type', () => {
    expect(chart.options.chart.type).toBe('multiBarHorizontalChart');
  });

  it('Should return value for x axis', () => {
    const data = {
      "label": "Cashier's Ability",
      "value": 25.307646510375
    };
    expect(chart.options.chart.x(data)).toBe(data.label);
  });

  it('Should return value for y axis', () => {
    const data = {
      "label": "Cashier's Ability",
      "value": 25.307646510375
    };
    expect(chart.options.chart.y(data)).toBe(data.value);
  });

  it('Should return formatted/rounded value for y axis', () => {
    expect(chart.options.chart.yAxis.tickFormat(25.307646510375)).toBe('25.31');
  });

  it('Should return chart options and given data', () => {
    const data = ["chartData"];
    const res = chart.getData(data);
    expect(res.data).toBe(data);
    expect(res.options).toBe(chart.options);
  });
});
