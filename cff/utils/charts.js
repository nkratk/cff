import angular from 'angular';
import DiscreteBarChart from './discreteBar';
import MultiBarHorizontalBarChart from './multiBarHorizontalChart';
import StackedAreaChart from './stackedArea';


export default angular.module("dcafe.cff.charts", ['nvd3'])
  .service('discreteBar', DiscreteBarChart)
  .service('horizontalBarChart', MultiBarHorizontalBarChart)
  .service('stackedArea', StackedAreaChart)
  .name;
