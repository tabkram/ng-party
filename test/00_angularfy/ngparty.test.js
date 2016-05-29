describe('GreetingController', function() {

    var $controller,
    scope;

    beforeEach(module('ngParty'));

      beforeEach(inject(function(_$controller_, $rootScope){
        $controller = _$controller_;
        scope = $rootScope.$new();
        $controller('GreetingController', {$scope: scope});
    }));


    describe('verify exact greeting', function() {
        it('says hello world!', function () {
            expect(scope.greeting).toEqual("Hello, world!");
        });
    });

});