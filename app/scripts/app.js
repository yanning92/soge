'use strict';

/**
 * @ngdoc overview
 * @name sogeApp
 * @description
 * # sogeApp
 *
 * Main module of the application.
 */
angular
  .module('sogeApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/fizzbuzz', {
        templateUrl: 'views/fizzbuzz.html',
        controller: 'fizzBuzzCtrl',
        controllerAs: 'fizzbuzz'
      })
      .when('/foobarqix', {
        templateUrl: 'views/foobarqix.html',
        controller: 'fooBarQixCtrl',
        controllerAs: 'fooBarQix'
      })
      .when('/romanNumeral', {
        templateUrl: 'views/romanNumeral.html',
        controller: 'romanNumeralCtrl',
        controllerAs: 'romanNumeral'
      })
      .when('/tictactoe', {
        templateUrl: 'views/tictactoe.html',
        controller: 'ticTacToeCtrl',
        controllerAs: 'ticTacToe'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
