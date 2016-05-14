'use strict';

describe('Controller: MainCtrl', function () {


  var $http;
  // load the controller's module
  beforeEach(function()
  {
    angular.mock.module('xebiaRecrutementApp');
  });

  describe('value - version', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('1.0.0');
    }));
  });

  beforeEach(inject(function($httpBackend){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $http = $httpBackend;
  }));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Verifie que url renvoi un result', function () {

    $http.expectGET('http://henri-potier.xebia.fr/books').respond();
    $http.flush();
  });
});
