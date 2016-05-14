'use strict';

/**
 * @ngdoc function
 * @name xebiaRecrutementApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xebiaRecrutementApp
 */
angular.module('xebiaRecrutementApp')

    .controller('MainCtrl',function ($scope,$http) {
      $http({
          method: 'GET',
          url: 'http://henri-potier.xebia.fr/books'
      }).success(function(data){
          $scope.books = data;
      }).error(function(){
      });
        
    });
