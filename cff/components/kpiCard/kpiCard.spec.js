/* global angular */
/* eslint-disable no-console */
import kpiCard from './kpiCard.js'

describe('KpiCard Component', () => {

  let element;
  let $scope;
  let $compile;

  beforeEach(angular.mock.module(kpiCard));

  beforeEach(angular.mock.inject((_$rootScope_, _$compile_) => {
    $scope = _$rootScope_.$new();
    $compile = _$compile_;
  }));

  it('Should rendered KPI card with index indicator', () => {
    element = $compile('<kpi-card title="CFF Score" score="8.72" yoy-score="3.2" wow-score="7" include-index-indicator="true"></kpi-card>')($scope);
    $scope.$digest();
    expect(element.text().includes("Index")).toBe(true);
    expect(element.text().trim().replace(/(?:\r\n|\r|\n)/g, '')).toBe("CFF Score  8.72          3.2 % YoY        7 % WoW        Index Widget comes here...");
  });

  it('Should rendered KPI card with-out index indicator', () => {
    element = $compile('<kpi-card title="Clean" score="18.72" yoy-score="3.2" wow-score="7" include-index-indicator="false"></kpi-card>')($scope);
    $scope.$digest();
    expect(element.text().includes("Index")).toBe(false);
    expect(element.text().trim().replace(/(?:\r\n|\r|\n)/g, '')).toBe("Clean  18.72          3.2 % YoY        7 % WoW");
  });
});
