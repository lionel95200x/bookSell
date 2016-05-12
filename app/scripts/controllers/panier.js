'use strict';

/**
 * @ngdoc function
 * @name xebiaRecrutementApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the xebiaRecrutementApp
 */
angular.module('xebiaRecrutementApp')
  .controller('PanierCtrl', function ($scope,$http,ngCart,panierService) {

      $scope.selectedPromotion =  panierService.getChoice();
      $scope.subTotal = function () {
          return ngCart.getSubTotal();
      };
      //Promotion 1 appliquer par defaut
      panierService.setChoice(1);

      //Pas de frais de port
      ngCart.setShipping(0);

    $scope.updateReduce = function(val,index){
        if(index == 1) {
            ngCart.setTaxRate("-" + val);
        }else if(index == 2)
        {
            ngCart.setTaxRate(val);
        }
        panierService.setChoice(index);
        $scope.selectedPromotion =  panierService.getChoice();
    };


    $scope.commercialOfferUrl = "http://henri-potier.xebia.fr/books/";
    $scope.bookUrl = "";
      $scope.nbrItem = ngCart.getTotalItems();

      //Si y'a plus d'un article
      if(ngCart.getTotalItems() > 0){
          angular.forEach(ngCart.getItems(), function(value, key){
              if(key != 0) {
                  $scope.bookUrl += "," + value._id;
              }else{
                  $scope.bookUrl += value._id;
              }
          });
          //Construction de l'url pour la reduction
          $scope.finalUrl = $scope.commercialOfferUrl + $scope.bookUrl + "/commercialOffers";

          console.log($scope.finalUrl);
          $http({
              method: 'GET',
              url: $scope.finalUrl
          }).success(function(data){
              $scope.taxRate = data.offers;

              //Pourcentage reduction : 1
              $scope.discount = $scope.taxRate[0].value;
              ngCart.setTaxRate("-" + $scope.discount);


              //Reduction magasin : 2
              $scope.discountInMag = $scope.taxRate[1].value;

                    //Bon d'achat pour montant acheter : 3
                  $scope.refurbForShopSliceValue = $scope.taxRate[2].sliceValue;
                    $scope.refurbForShopValue = $scope.taxRate[2].value;



          }).error(function(msg){
              console.log("Serveur indisponible",msg);
          });
      }

  })

.factory('panierService', ['$rootScope', function ($rootScope) {

    var choice = 1;

    return {
            setChoice : function(id){
            choice = id;
            },
            getChoice : function() {
                return choice;
            }
        };
    }

]);
