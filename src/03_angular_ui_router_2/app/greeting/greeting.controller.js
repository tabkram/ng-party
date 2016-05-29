(function() {
  'use strict';

angular.module("ngParty").controller('GreetingController', LoginController);

LoginController.$inject =  ['$scope', 'LoginService'];

function LoginController($scope, LoginService) {
  var getUser = LoginService.getUser();
  $scope.greeting = "Hello, " + getUser.login + " !";
}

})();