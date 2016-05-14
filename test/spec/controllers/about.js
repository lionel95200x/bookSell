'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(function()
  {
    angular.mock.module('xebiaRecrutementApp')

  });

  var PanierCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PanierCtrl = $controller('PanierCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should select the promotion 1', function () {
    expect(scope.selectedPromotion).toBe(1);
  });

  it('should set the promotion to 2', function () {

    //scope.setChoice('2');
    //expect(scope.selectedPromotion).toBe(1);
  });
  
});
