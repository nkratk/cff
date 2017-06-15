/* global angular */
/* eslint-disable no-console */
import performanceIndicator from './performanceIndicator.js'

describe('PerformanceIndicator Component', () => {

  let element;
  let $scope;
  let $compile;

  beforeEach(angular.mock.module(performanceIndicator));

  beforeEach(angular.mock.inject((_$rootScope_, _$compile_) => {
    $scope = _$rootScope_.$new();
    $compile = _$compile_;
  }));

  it('Should rendered performance indicator with down arrow icon with red', () => {
    $scope.icons = ["glyphicon-download", "glyphicon-upload"];
    element = $compile("<performance-indicator value='3.2' unit='%' label='YoY' icon-classes='icons'></performance-indicator>")($scope);
    $scope.$digest();
    expect(element.text().trim()).toBe("3.2 % YoY");
    expect(element.isolateScope().iconClass).toBe("glyphicon-download red");
  });

  it('Should rendered performance indicator with plus sign icon with green', () => {
    $scope.icons = ["glyphicon-minus-sign","glyphicon-plus-sign"];
    element = $compile("<performance-indicator value='32' unit='%' label='WoW' icon-classes='icons'></performance-indicator>")($scope);
    $scope.$digest();
    expect(element.text().trim()).toBe("32 % WoW");
    expect(element.isolateScope().iconClass).toBe("glyphicon-plus-sign green");
  });
});
