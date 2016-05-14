'use strict';

describe('Controller: PanierCtrl', function () {

  // load the controller's module
  beforeEach(function()
  {
    angular.mock.module('xebiaRecrutementApp');
    module('ngCart')
  });

  var PanierCtrl,PanierService,ngCart,
    scope;

  var $http;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,$httpBackend) {
    var $injector = angular.injector(['xebiaRecrutementApp']);
    PanierService = $injector.get('panierService');
    ngCart = $injector.get('ngCart');
    scope = $rootScope.$new();
    $http = $httpBackend;
    PanierCtrl = $controller('PanierCtrl', {
      $scope: scope,
    });


    ngCart.setTaxRate(7.5);
    ngCart.setShipping(12.50);
    addItem(1, 'Work boots', 189.99, 1);
    addItem(2, 'Hockey gloves', 85, 2);
    addItem('cpBow', 'Compound bow', 499.95, 1);
  }));


  function addItem(id, name, price, quantity, data){
    ngCart.addItem(id, name, price, quantity, data);
  }

  it('should have the promotion 1', function () {
    expect(scope.selectedPromotion).toBe(1);
  });

  it('Test if Panier Service is ok and choice is 1', function () {

    expect(PanierService.getChoice()).toBe(1);
  });

  it('if Panier Service se' +
      't correctly value : promotion 2', function () {
    PanierService.setChoice(2);
    expect(PanierService.getChoice()).toBe(2);
  });


  it('shipping should be set', function() {
    expect(ngCart.getShipping()).toEqual(12.50);
  });

  it('Method Update reduce is ok', function() {
    scope.updateReduce(10,3);
    expect(ngCart.getTaxRate()).toEqual(7.5);
    expect(scope.selectedPromotion).toBe(3);
  });

  it('shipping should be set', function() {
    expect(scope.nbrItem).toEqual(4);
  });
});
