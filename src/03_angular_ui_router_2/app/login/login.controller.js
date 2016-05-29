(function() {
  'use strict';

angular.module("ngParty").controller('LoginController', LoginController);

LoginController.$inject =  ['$scope', 'LoginService'];

function LoginController($scope, LoginService) {
  $scope.connect = function(){
  	console.log($scope.user);
  	LoginService.connect($scope.user);
  }
}

})();