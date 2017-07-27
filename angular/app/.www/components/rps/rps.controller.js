var rpsController = angular.module('rps.controller', []);

rpsController.controller('rpsController', function($scope, $http, $q, $filter, $mdDialog, $filter, rpsService) {
    var vm = {};

    vm.results = "Choose your weapon.";
    vm.throwOption1 = undefined;
    vm.throwOption2 = undefined;

    vm.throwOptions = rpsService.getThrowOptions();

    vm.score = rpsService.getScore();
    console.log(vm.score);

    vm.runPvCGame = function(throwOption) {
        console.log(throwOption);
        rpsService.runPvCGame(throwOption).then(function success(data) {
            console.log(data);
            vm.throwOption1 = $filter('capitalize')(data.throwOption1);
            vm.throwOption2 = $filter('capitalize')(data.throwOption2);
            switch (data.result) {
                case "tie":
                    vm.results = "Tie game: " + $filter('capitalize')(data.throwOption1) + " ties with " + $filter('capitalize')(data.throwOption2) + ".";
                    break;
                case "1":
                    vm.results = "You Win: " + $filter('capitalize')(data.throwOption1) + " beats " + $filter('capitalize')(data.throwOption2) + ".";
                    break;
                case "2":
                    vm.results = "You Lose: " + $filter('capitalize')(data.throwOption1) + " is beaten by " + $filter('capitalize')(data.throwOption2) + ".";
                    break;
                case "conflict":
                    vm.results = "There seems to be a problem with your throw options.";
                    break;
            }
        }, function error(err) {
            console.log(err);
        });
    };

    vm.runCvCGame = function() {
        rpsService.runCvCGame().then(function success(data) {
            console.log(data);
            vm.throwOption1 = $filter('capitalize')(data.throwOption1);
            vm.throwOption2 = $filter('capitalize')(data.throwOption2);
            switch (data.result) {
                case "tie":
                    vm.results = "Tie game: " + $filter('capitalize')(data.throwOption1) + " ties with " + $filter('capitalize')(data.throwOption2) + ".";
                    break;
                case "1":
                    vm.results = "You Win: " + $filter('capitalize')(data.throwOption1) + " beats " + $filter('capitalize')(data.throwOption2) + ".";
                    break;
                case "2":
                    vm.results = "You Lose: " + $filter('capitalize')(data.throwOption1) + " is beaten by " + $filter('capitalize')(data.throwOption2) + ".";
                    break;
                case "conflict":
                    vm.results = "There seems to be a problem with your throw options.";
                    break;
            }
        }, function error(err) {
            console.log(err);
        });
    };

    vm.resetGame = function() {
        rpsService.resetGame();
        vm.results = "Scoreboard reset.";
        vm.throwOption1 = undefined;
        vm.throwOption2 = undefined;
        vm.score = rpsService.getScore();
    };

    return vm;
});