import angular from 'angular';
import template from './overview.html';
import './overview.scss';

class Overview {
  constructor() {
    this.template = template;
    this.restrict = 'E';
    this.scope = {
      name: '@',
      rating: '@',
      message: '@'
    };
  }
}

export default angular.module('dcafe.cff.overview', [])
  .directive('overview', () => new Overview())
  .name;
