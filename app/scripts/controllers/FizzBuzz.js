'use strict';

/**
 * @ngdoc function
 * @name sogeApp.controller:MainCtrl
 * @description
 * # FizzBuzzCtrl
 * Controller of the sogeApp
 */
angular.module('sogeApp')
  .controller('FizzBuzzCtrl', function ($scope) {
    $scope.fizzBuzzValue = function fizzBuzzValue() {
      $scope.error = ''
      $scope.value = ''

      if(!$scope.number)
      {
        $scope.error = 'veuillez choisir un nombre svp!!!!!!!!!!!!!!!'
        return
      }

      $scope.value = $scope.number
      if (parseInt($scope.number % 3) === 0 ) {
        $scope.value = 'fizz'
      }

      if (parseInt($scope.number % 5) === 0 ) {
        $scope.value = 'buzz'
      }

    }
  })
