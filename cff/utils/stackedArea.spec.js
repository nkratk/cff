import StackedAreaChart from './stackedArea';

describe('StackedAreaChart', () => {

  let chart;

  beforeEach(() => {
    chart = new StackedAreaChart();
  });

  it('Should be defined', () => {
    expect(StackedAreaChart).toBeDefined();
    expect(chart).toBeDefined();
  });

  it('Should have options required for the chart', () => {
    expect(chart.options).toBeDefined();
    expect(chart.options.chart).toBeDefined();
  });

  it('Should have "stackedAreaChart" as the chart type', () => {
    expect(chart.options.chart.type).toBe('stackedAreaChart');
  });

  it('Should return value for x axis', () => {
    const data = [1481740859000 , 2];
    expect(chart.options.chart.x(data)).toBe(data[0]);
  });

  it('Should return value for y axis', () => {
    const data = [1481740859000 , 2];
    expect(chart.options.chart.y(data)).toBe(data[1]);
  });

  it('Should return formatted/rounded value for y axis', () => {
    expect(chart.options.chart.yAxis.tickFormat(25.307646510375)).toBe('25.31');
  });

  /*it('Should return formatted/rounded value for x axis', () => {
    expect(chart.options.chart.yAxis.tickFormat(1481770000000)).toBe('08 AM');
  });*/

  it('Should return chart options', () => {
    const data = ["chartData"];
    const res = chart.getData(data);
    expect(res.options).toBe(chart.options);
  });
});
