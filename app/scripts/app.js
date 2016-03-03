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
        controller: 'FizzBuzzCtrl',
        controllerAs: 'fizzBuzz'
      })
      //.when('/foobarqix', {
      //  templateUrl: 'views/foobarqix.html',
      //  controller: 'FooBarQixCtrl',
      //  controllerAs: 'FooBarQix'
      //})
      //.when('/romanNumeral', {
      //  templateUrl: 'views/romanNumeral.html',
      //  controller: 'RomanNumeralCtrl',
      //  controllerAs: 'RomanNumeral'
      //})
      //.when('/tictactoe', {
      //  templateUrl: 'views/tictactoe.html',
      //  controller: 'TicTacToeCtrl',
      //  controllerAs: 'TicTacToe'
      //})

      .otherwise({
        redirectTo: '/'
      });
  });
