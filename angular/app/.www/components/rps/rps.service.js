var rpsService = angular.module('rps.service', []);

rpsService.factory('rpsService', function($cookies, $q) {
    var service = {};

    var throwOptions = [{
            name: "the rock",
            beats: ["rock", "paper", "scissors"],
            img: "/angular/assets/images/the_rock.png"
        },
        {
            name: "rock",
            beats: ["scissors"],
            img: "/angular/assets/images/rock.png"
        },
        {
            name: "paper",
            beats: ["rock"],
            img: "/angular/assets/images/paper.png"
        },
        {
            name: "scissors",
            beats: ["paper"],
            img: "/angular/assets/images/scissors.png"
        }
    ];

    service.getThrowOptions = function() {
        return throwOptions;
    };

    service.getScore = function() {
        return service.score;
    };

    service.resetGame = function() {
        service.score = {
            wins: 0,
            ties: 0,
            losses: 0
        };
    };

    service.runPvCGame = function(throwOption) {
        var deferred = $q.defer();

        var computerThrow = generateComputerThrow();
        console.log(computerThrow);
        var result = scoreGame(throwOption, computerThrow);
        console.log(result);
        var gameData = {
            throwOption1: throwOption.name,
            throwOption2: computerThrow.name,
            result: result
        };
        switch (result) {
            case "tie":
                deferred.resolve(gameData);
                service.score.ties++;
                break;
            case "1":
                deferred.resolve(gameData);
                service.score.wins++;
                break;
            case "2":
                deferred.resolve(gameData);
                service.score.losses++;
                break;
            case "conflict":
                deferred.resolve(gameData);
                break;
        }

        return deferred.promise;
    };

    service.runCvCGame = function() {
        var deferred = $q.defer();

        var computerThrow1 = generateComputerThrow();
        var computerThrow2 = generateComputerThrow();
        console.log(computerThrow1);
        console.log(computerThrow2);
        var result = scoreGame(computerThrow1, computerThrow2);
        console.log(result);
        var gameData = {
            throwOption1: computerThrow1.name,
            throwOption2: computerThrow2.name,
            result: result
        };
        switch (result) {
            case "tie":
                deferred.resolve(gameData);
                service.score.ties++;
                break;
            case "1":
                deferred.resolve(gameData);
                service.score.wins++;
                break;
            case "2":
                deferred.resolve(gameData);
                service.score.losses++;
                break;
            case "conflict":
                deferred.resolve(gameData);
                break;
        }

        return deferred.promise;
    };

    var generateComputerThrow = function() {
        var computerThrow = throwOptions[Math.floor(Math.random() * throwOptions.length)];
        return computerThrow;
    };

    var scoreGame = function(throwOption1, throwOption2) {
        if (throwOption1.name === throwOption2.name) {
            return "tie";
        } else {
            var doesBeat1 = false;
            var doesBeat2 = false;
            for (var beat in throwOption1.beats) {
                if (throwOption1.beats[beat] === throwOption2.name) {
                    doesBeat1 = true;
                };
            }

            for (var beat in throwOption2.beats) {
                if (throwOption2.beats[beat] === throwOption1.name) {
                    doesBeat2 = true;
                };
            }

            if (doesBeat1 === true && doesBeat2 === false) {
                return "1";
            } else if (doesBeat1 === false && doesBeat2 === true) {
                return "2";
            } else {
                return "conflict";
            }

        }
    };

    var init = function() {
        var gameCookie = $cookies.get('rps-game-data-cookie-awesomeness');
        console.log(gameCookie);
        if (gameCookie === undefined) {
            service.resetGame();
        } else {
            service.resetGame = JSON.parse(gameCookie);
        }
    };

    init();

    return service;
});