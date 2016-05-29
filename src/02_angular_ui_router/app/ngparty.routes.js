(function() {
  'use strict';

  angular.module('ngParty')
  .config(router);

  function router($stateProvider) {

  	 $stateProvider
    .state('greeting', {
      url: "/greeting",
      views: {
        'main': {
          templateUrl: "app/greeting/greeting.view.html",
          controller: "GreetingController"
        }
      }
  });
}

})();