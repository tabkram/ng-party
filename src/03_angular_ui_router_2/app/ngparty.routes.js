(function() {
  'use strict';

  angular.module('ngParty')
  .config(router);

  function router($stateProvider, $urlRouterProvider) {

  	 $stateProvider
    .state('login', {
      url: "/login",
      views: {
        'main': {
          templateUrl: "app/login/login.view.html",
          controller: "LoginController"
        }
      }
  }).state('greeting', {
      url: "/greeting",
      views: {
        'main': {
          templateUrl: "app/greeting/greeting.view.html",
          controller: "GreetingController"
        }
      }
  });

  $urlRouterProvider.when('', '/login');
}

})();