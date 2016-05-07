'use strict';

/**
 * @ngdoc overview
 * @name xebiaRecrutementApp
 * @description
 * # xebiaRecrutementApp
 *
 * Main module of the application.
 */
angular
  .module('xebiaRecrutementApp', [
    'ngRoute',
      'ngCart'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/panier', {
        templateUrl: 'views/panier.html',
        controller: 'PanierCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
