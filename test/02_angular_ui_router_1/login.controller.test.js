describe('LoginController', function() {

    var $controller,
    loginController,
    loginService,
    $state,
    loginScope;

    beforeEach(module('ui.router'));
    beforeEach(module('ngParty'));

    beforeEach(inject(function (_LoginService_) {
      loginService = _LoginService_;
    }));

    beforeEach(inject(function(_$controller_, $rootScope){
        $controller = _$controller_;
        loginScope = $rootScope.$new();
        loginController = $controller('LoginController', {$scope: loginScope});
    }));


    describe('verify exact login', function() {    
        it('should exist', function() {
            expect(loginController).toBeDefined();
        });
      
        it('resolves find the login route', inject(function ($state, $rootScope) {
           var state = $state.get('login');
           expect(state).toBeDefined(); 
           expect(state).not.toBe(null);
        }));
    });

    it('call connect function!', function () {
        expect(angular.isFunction(loginScope.connect)).toBe(true);
        spyOn(loginScope, 'connect').and.callThrough();
        loginScope.user = {
          login: "akram",
          password:"ng-party"
        };
        loginScope.connect(loginScope.user);
        expect(loginScope.connect).toHaveBeenCalled();

        expect(angular.isFunction(loginService.connect)).toBe(true);
        expect(angular.isFunction(loginService.getUser)).toBe(true);

        var serviceUser = loginService.getUser();
         expect(serviceUser.login).toBeDefined();
         expect(serviceUser.login).not.toBe(null);
         expect(serviceUser.password).toBeDefined();
         expect(serviceUser.password).not.toBe(null);
    });
        

});