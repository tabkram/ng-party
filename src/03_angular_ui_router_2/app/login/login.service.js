(function() {
  'use strict';

angular.module("ngParty").service('LoginService', LoginService);

 LoginService.$inject =  ['$state'];

 function LoginService($state) {
 	
  var self = this;
  self.user = {};
  
  return  {
  	connect : connect,
  	getUser : getUser
  };

  function connect(user){
  	self.user = user;
  	$state.go("greeting");
  }

  function getUser(){
  	return self.user;
  }
}
})();