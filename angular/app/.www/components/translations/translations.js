angular.module("translations", ['pascalprecht.translate']).config(["$translateProvider", function($translateProvider) {
$translateProvider.translations("en", {
  "AUTO_TURN": "Auto-turn",
  "PLAYER_SCOREBOARD": "Player Scoreboard",
  "RESET_SCOREBOARD": "Reset Scoreboard",
  "RPS": "RPS",
  "RPS_TEXT": "Choose your weapon!"
});
}]);
