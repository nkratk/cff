import angular from 'angular';
import sampleCtrl1 from './sampleCtrl1.js';
import sampleCtrl2 from './sampleCtrl2.js';
import performanceIndicator from '../components/performanceIndicator/performanceIndicator.js';
import kpiCard from '../components/kpiCard/kpiCard.js';
import overviewCard from '../components/overview/overview';
import chartOptions from '../utils/charts';
import discreteData from '../mockData/discreteBarChartMock';
import horizontalBarChartData from '../mockData/multiBarHorizontalChart';
import stackedAreaData from '../mockData/stackAreaChartMock';

class TestCtrl {
  constructor(discreteBar, horizontalBarChart, stackedArea) {
    const obj = discreteBar.getData(discreteData),
          obj1 = horizontalBarChart.getData(horizontalBarChartData),
          obj2 = stackedArea.getData(stackedAreaData);

    this.discreteBarChartOptions = obj.options;
    this.discreteBarChartData = obj.data;
    this.horizontalBarChartOptions = obj1.options;
    this.horizontalBarChartData = obj1.data;
    this.stackAreaChartOptions = obj2.options;
    this.stackAreaChartData = obj2.data;
  }
}

TestCtrl.$inject = ['discreteBar', 'horizontalBarChart', 'stackedArea'];

angular.module("cff-app", ['dcafe.alertmessages', performanceIndicator, kpiCard, overviewCard, chartOptions])
  .controller("testCtrl", TestCtrl)
  .controller("sampleCtrl1", sampleCtrl1)
  .controller("sampleCtrl2", sampleCtrl2);
