// declare a module
var ngPartyModule = angular.module('ngParty', []);

// configure the module.
// in this example we will create a greeting controller
ngPartyModule.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = "Hello, world!";
}]);