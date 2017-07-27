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
    beforeEach(inject(function (_rpsService_, _$rootScope_) {
        rpsService = _rpsService_;
        $rootScope = _$rootScope_;
    }));

    describe('reset game', function () {
        it('should set all scores to 0 after reset score', function () {
            rpsService.resetGame();
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

    describe('bad throw data', function () {
        it('should return "conflict" for bad game data', function () {
            // Good data set
            var throwData;
            var throwOptions = [
                {
                    name: "the rock",
                    beats: ["rock", "paper", "scissors"],
                    img: "/assets/images/the_rock.png"
                },
                {
                    name: "rock",
                    beats: ["scissors"],
                    img: "/assets/images/rock.png"
                },
                {
                    name: "paper",
                    beats: ["rock"],
                    img: "/assets/images/paper.png"
                },
                {
                    name: "scissors",
                    beats: ["paper"],
                    img: "/assets/images/scissors.png"
                }
            ];

            rpsService.setThrowOptions(throwOptions);
            rpsService.runCvCGame().then(function success(data) {
                console.log(data);
                throwData = data;

            });
            $rootScope.$digest();
            expect(throwData.result).not.toBe("conflict");


            // Bad data set where everyone wins
            var badThrowData;
            var badThrowOptions = [
                {
                    name: "the rock",
                    beats: ["rock"],
                    img: "/assets/images/the_rock.png"
                },
                {
                    name: "rock",
                    beats: ["the rock"],
                    img: "/assets/images/rock.png"
                }
            ];

            rpsService.setThrowOptions(badThrowOptions);
            rpsService.runCvCGame().then(function success(newData) {
                console.log(newData);
                badThrowData = newData;
            });

            $rootScope.$digest();
            if (badThrowData.throwOption1 !== badThrowData.throwOption2) {
                expect(badThrowData.result).toBe("conflict");
            } else {
                expect(badThrowData.result).toBe("tie");
            }

        });
    });
});
