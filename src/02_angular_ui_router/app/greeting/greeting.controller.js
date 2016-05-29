(function() {
  'use strict';

angular.module("ngParty").controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = "Hello, world!";
}]);

})();