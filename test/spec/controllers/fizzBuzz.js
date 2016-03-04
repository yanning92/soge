describe('fizzBuzzCtrl', function() {
  beforeEach(module('sogeApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('fizzBuzzCtrl', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('FizzBuzzCtrl', { $scope: $scope });
    });

    it('should print fizz if number is divizible by 3 without error', function() {
      $scope.number = 3;
      $scope.fizzBuzzValue();
      expect($scope.value).toEqual('fizz');
      expect($scope.error).toEqual('');
    });

    it('should print buzz if number is divizible by 5 without error', function() {
      $scope.number = 25;
      $scope.fizzBuzzValue();
      expect($scope.value).toEqual('buzz');
      expect($scope.error).toEqual('');
    });

    it('should print the number if its not divizible by 5 or 3 without error', function() {
      $scope.number = 26;
      $scope.fizzBuzzValue();
      expect($scope.value).toEqual(26);
      expect($scope.error).toEqual('');
    });

    it('should return error if number is not send', function() {
      $scope.fizzBuzzValue();
      expect($scope.value).toEqual('');
      expect($scope.error).toEqual('veuillez choisir un nombre svp!!!!!!!!!!!!!!!');
    });

    it('should return error if number is zero', function() {
      $scope.number = 0;
      $scope.fizzBuzzValue();
      expect($scope.value).toEqual('');
      expect($scope.error).toEqual('veuillez choisir un nombre svp!!!!!!!!!!!!!!!');
    });

  });
});
