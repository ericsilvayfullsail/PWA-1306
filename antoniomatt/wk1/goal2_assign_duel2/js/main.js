/*===============================================
Matt Antonio
June 4, 2013
Goal 1 Duel 1
===============================================*/

//Player One Info
var playerOne = ["Optimus Prime", 100, 20];
var playerOneHalfDamage = playerOne[2] / 2;

//Player Two Info
var playerTwo = ["Megatron", 100, 20];
var playerTwoHalfDamage = playerTwo[2] / 2;

var roundNum = 0;

alert(playerOne[0] + ": " + playerOne[1] + " ***Start*** " + playerTwo[0] + ": " + playerTwo[1]);

//Fight function to start the battle
var fight = function() {
	while(playerOne[1] > 0 && playerTwo[1] > 0) {
		var playerOneHit = Math.floor(Math.random() * playerOneHalfDamage + playerOne[2]);
		var playerTwoHit = Math.floor(Math.random() * playerTwoHalfDamage + playerTwo[2]);

		var playerOneAttack = playerTwo[1] - playerOneHit;
		var playerTwoAttack = playerOne[1] - playerTwoHit;

		playerOne[1] = playerTwoAttack;
		playerTwo[1] = playerOneAttack;

		roundNum++;

		//Breaks the loop if the round is over before 10
		if(playerOne[1] <= 0 && playerTwo[1] <= 0 && roundNum <= 10) {
			break;
		}else if(roundNum > 10){
			break;
		}

		alert(playerOne[0] + ": " + playerOne[1] + " ***Round " + roundNum + " Over*** " + playerTwo[0] + ": " + playerTwo[1]);
    }
};
fight();

//Checks to see if and who the winner is
var winnerCheck = function() {
    if(playerOne[1] <= 0 && playerTwo[1] <= 0) {
        alert("No Winner!");
    }else if(playerOne[1] <= 0) {
        alert(playerTwo[0] + " WINS!!!");
    }else if(playerTwo[1] <= 0) {
        alert(playerOne[0] + " WINS!!!");
    }
};
winnerCheck();
//test