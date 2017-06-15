import angular from 'angular';
import template from './kpiCard.html';
import performanceIndicator from '../performanceIndicator/performanceIndicator.js';
import './kpiCard.scss';

class KPICard {
  constructor() {
    this.template = template;
    this.restrict = 'E';
    this.scope = {
      title: '@',
      score: '@',
      yoyScore: '@',
      wowScore: '@',
      includeIndexIndicator: '@'
    };
  }
}

export default angular.module('dcafe.cff.kpiCard', [performanceIndicator])
  .directive('kpiCard', () => new KPICard())
  .name;
