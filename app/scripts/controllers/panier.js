'use strict';

/**
 * @ngdoc function
 * @name xebiaRecrutementApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the xebiaRecrutementApp
 */
angular.module('xebiaRecrutementApp')
  .controller('PanierCtrl', function ($scope,$http,ngCart) {

    ngCart.setShipping(0);


    $scope.commercialOfferUrl = "http://henri-potier.xebia.fr/books/";
    $scope.bookUrl = "";
    angular.forEach(ngCart.getItems(), function(value, key){
      if(key != 0) {
        $scope.bookUrl += "," + value._id;
      }else{
        $scope.bookUrl += value._id;
      }
    });
    $scope.finalUrl = $scope.commercialOfferUrl + $scope.bookUrl + "/commercialOffers";

    $http({
      method: 'GET',
      url: $scope.finalUrl
    }).success(function(data){
      $scope.taxRate = data.offers;

      //Pourcentage reduction
      $scope.discount = $scope.taxRate[0].value;
      ngCart.setTaxRate("-" + $scope.discount);

      //Reduction magasin
      $scope.discountInMag = $scope.taxRate[1].value;
    }).error(function(){
    });


  });
