(function() {
  'use strict';

angular.module("ngParty").controller('SayHelloController', ['$scope', '$state', function($scope, $state) {
  $scope.sayHello = function(){
  	$state.go('greeting');
  }
}]);

})();