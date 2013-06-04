/*===============================================
Matt Antonio
June 4, 2013
Goal 1 Duel 1
===============================================*/

//Player One Info
var playerOne = "Optimus Prime";
var playerOneHealth = 100;
var playerOneDamage = 5;
var playerOneHalfDamage = playerOneDamage / 2;

//Player Two Info
var playerTwo = "Megatron";
var playerTwoHealth = 100;
var playerTwoDamage = 5;
var playerTwoHalfDamage = playerTwoDamage / 2;

var roundNum = 0;

alert(playerOne + ": " + playerOneHealth + " ***Start*** " + playerTwo + ": " + playerTwoHealth);

//Fight function to start the battle
var fight = function() {
	while(playerOneHealth > 0 && playerTwoHealth > 0) {
		var playerOneHit = Math.floor(Math.random() * playerOneHalfDamage + playerOneDamage);
		var playerTwoHit = Math.floor(Math.random() * playerTwoHalfDamage + playerTwoDamage);

		var playerOneAttack = playerTwoHealth - playerOneHit;
		var playerTwoAttack = playerOneHealth - playerTwoHit;

		playerOneHealth = playerTwoAttack;
		playerTwoHealth = playerOneAttack;

		roundNum++;

		//Checks to see if and who the winner is
		var winnerCheck = function() {
			if(playerOneHealth <= 0 && playerTwoHealth <= 0) {
				alert("No Winner!");
			}else if(playerOneHealth <= 0) {
				alert(playerTwo + " WINS!!!");
			}else if(playerTwoHealth <= 0) {
				alert(playerOne + " WINS!!!");
			};
		};
		winnerCheck();

		//Breaks the loop if the round is over before 10
		if(playerOneHealth <= 0 && playerTwoHealth <= 0 && roundNum <= 10) {
			break;
		}else if(roundNum > 10){
			break;
		};

		alert(playerOne + ": " + playerOneHealth + " ***Round " + roundNum + " Over*** " + playerTwo + ": " + playerTwoHealth);
	};
};
fight();