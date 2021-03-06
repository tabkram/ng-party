describe('GreetingController', function() {

    var $controller,
    greetingController,
    scope;

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

        it('says hello world!', function () {
            expect(scope.greeting).toEqual("Hello, world!");
        });
    });

});