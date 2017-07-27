describe('Service: rps', function () {
    var rpsService;
    // var awsCognitoService;

    // // Inject Angular module dependencies here
    // beforeEach(angular.mock.module(require('angular-ui-router')));
    // beforeEach(angular.mock.module(function($provide){
    //     // Create a mock awsDynamoService Service
    //     awsDynamoService = function(){
    //         this.putItem = jasmine.createSpy();
    //         this.createTable = jasmine.createSpy();
    //         this.mainServiceParams = jasmine.createSpy();
    //         this.updateItem = jasmine.createSpy();
    //     };
    //     // Add our __env variable for use by awsCognitoService
    //     $provide.constant('__env', __env);
    //     $provide.service('awsDynamoService', awsDynamoService);
    // }));
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

    // // Test for awsCognitoService.createUUID()
    // describe('awsCognitoService: Quick UUID test', function () {
    //     it('should return a UUID for us to use', function () {
    //         var UUID = awsCognitoService.createUUID();

    //         expect(typeof UUID).toBe('string');
    //         expect((/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i).test(UUID)).toBe(true);
    //     });
    // });

    // // Test for awsCognitoService.logout()
    // describe('awsCognitoService: User logout tests', function(){
    //     it('should log out users when service.cognitoUser is not null', function () {
    //         // Mock cognitoUser with signOut function, usually initiated by new AWSCognito.CognitoIdentityServiceProvider.CognitoUser contructor
    //         awsCognitoService.cognitoUser = {
    //             signOut: function(){
    //                 console.log('Mock call to logOut function complete...');
    //             }
    //         };

    //         spyOn(awsCognitoService.cognitoUser, 'signOut');
    //         expect(awsCognitoService.cognitoUser).not.toBe(null);
    //         awsCognitoService.logout();
    //         expect(awsCognitoService.cognitoUser.signOut).toHaveBeenCalled();
    //     });
    // });
    describe('reset score', function () {
        it('should set all scores to 0 after reset score', function () {

            expect(null).not.toBe(null);
        });
    });
});
