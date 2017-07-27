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

    describe('reset game', function () {
        it('should set all scores to 0 after reset score', function () {
            rpsService.runCvCGame();
            var score = rpsService.getScore();
            var addItUp = score.wins + score.ties + score.losses;
            expect(addItUp).toBeGreaterThan(0);
            rpsService.resetGame(); 
            var score2 = rpsService.getScore();
            var addItUp2 = score2.wins + score2.ties + score2.losses;
            expect(score2.wins).toBe(0);
            expect(score2.ties).toBe(0);
            expect(score2.losses).toBe(0);
            expect(addItUp2).toBe(0);
        });
    });
});
