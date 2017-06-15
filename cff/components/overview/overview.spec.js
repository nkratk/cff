/* global angular */
import overview from './overview.js';

describe('overview Component', () => {

  let element,
      scope;

  beforeEach(angular.mock.module(overview));

  beforeEach(angular.mock.inject((_$rootScope_, _$compile_) => {
    const $scope = _$rootScope_.$new(),
          $compile = _$compile_;

    element = $compile('<overview name="Region Name" rating="48 out of 85" message="Any other market level overview data can come here"></overview>')($scope);
    scope = element.isolateScope();
    scope.$digest();
  }));

  it('should applied template',  () => {
      expect(element.html()).not.toEqual('');
  });

  it('should have overview element',  () => {
    const overview = element.find('overview');
    expect(overview).toBeDefined();
	});

  it('should be Region Name',  () => {
    expect(scope.name).toEqual('Region Name');
	});

});
