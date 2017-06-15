import angular from 'angular';
import template from './performanceIndicator.html';
import './performanceIndicator.scss';

class PerformanceIndicator {
  constructor() {
    this.template = template;
    this.restrict = 'E';
    this.scope = {
      value: '@',
      unit: '@',
      label: '@',
      iconClasses: '='
    };
  }

  link(scope) {
    scope.iconClass = (scope.value < 5) ? scope.iconClasses[0] + " red" : scope.iconClasses[1] + " green";
  }
}

export default angular.module('dcafe.cff.performanceIndicator', [])
  .directive('performanceIndicator', () => new PerformanceIndicator())
  .name;
