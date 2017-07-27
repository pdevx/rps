describe('Service: rps', function () {
    var rpsService;
    // // Grab the module that we're testing
    beforeEach(angular.mock.module('rps.service'));
    beforeEach(function () {
        angular.mock.module({
            $cookies: {
                store: {},
                put: function (key, value) { this.store[key] = value; },
                get: function (key) { return this.store[key]; }
            }
        });

        inject(function ($injector) {
            $cookies = $injector.get('$cookies');
        });
    })
    beforeEach(inject(function (_rpsService_) {
        rpsService = _rpsService_;
    }));
    
    describe('reset score', function () {
        it('should set all scores to 0 after reset score', function () {

            expect(null).not.toBe(null);
        });
    });
});
