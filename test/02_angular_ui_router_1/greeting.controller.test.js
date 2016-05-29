describe('GreetingController', function() {

    var $controller,
    greetingController,
    $state,
    scope;

    beforeEach(module('ui.router'));
    beforeEach(module('ngParty'));

    beforeEach(inject(function(_$controller_, $rootScope){
        $controller = _$controller_;
        scope = $rootScope.$new();
        greetingController = $controller('GreetingController', {$scope: scope});
    }));


    describe('verify exact greeting', function() {    
        it('should exist', function() {
            expect(greetingController).toBeDefined();
        });

        it('says hello for the login!', function () {
            //expect(scope.greeting).not.toEqual("Hello, world!");
            expect(scope.greeting).toMatch(/^Hello,/);
        });
        
        it('resolves find the greeting route', inject(function ($state, $rootScope) {
           var state = $state.get('greeting');
           expect(state).toBeDefined(); 
           expect(state).not.toBe(null);
           //$state.transitionTo('greeting');
           //$rootScope.$apply();
           //expect($state.current.name).toBe('greeting');
        }));
    });

});