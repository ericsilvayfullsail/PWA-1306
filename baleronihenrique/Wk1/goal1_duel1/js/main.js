/*
	Name: 			Henrique Baleroni
	Date: 			6/4/2013
	Assignment: 	Goal 1 Duel
*/

var playerOneName 	= "Bob";
var playerOneHp		= 100;
var playerOneDamage = 5;

var playerTwoName 	= "Joe";
var playerTwoHp		= 100;
var playerTwoDamage = 5;

// Function for the fighting

var rounds = 0;
function fight(){
	alert(playerOneName + ": " + playerOneHp + " START " + playerTwoName + ": " + playerTwoHp);

	for (var i = rounds; i <= 10; i++) {
		// Start the randomization of the player damages
		var p1Dmg = Math.floor(Math.random()*playerOneDamage/2 + (playerOneDamage/2));
		var p2Dmg = Math.floor(Math.random()*playerTwoDamage/2 + (playerTwoDamage/2));

		// Apply the random damage
		playerTwoHp -= p1Dmg;
		playerOneHp -= p2Dmg;

		// Tracing stats for checks
		console.log("Player 1 Damage: " + p1Dmg, "Player 2 Damage: " + p2Dmg);
		console.log("Player 1 Hp: " + playerOneHp, "Player 2 Hp: " + playerTwoHp);

		var result = winnerCheck();

		if (result === "no winner") {
			rounds++;
			alert(playerOneName + ": " + playerOneHp + " ROUND " + rounds + ' ' + playerTwoName + ": " + playerTwoHp);
		}else {
			alert(result);
			break;
		}
	};
}

function winnerCheck(){
	var result = "no winner";

	if (playerOneHp <= 0 && playerTwoHp <= 0) {
		
		result = "Tied. Both players died.";

	}else if (playerOneHp < 0 && playerOneHp < playerTwoHp) {

		result = "GAME OVER!!"+ ' ' + playerTwoName + " Wins!!!"

	}else if(playerTwoHp < 0 && playerTwoHp < playerOneHp){
		
		result = "GAME OVER!!"+ ' ' + playerOneName + " Wins!!!";

	}else if(rounds == 10) {
		if(playerOneHp > playerTwoHp) {
			result = playerOneName + " WINS!";
		}
		else if(playerTwoHp > playerOneHp) {
			result = playerTwoName + " WINS!!";
		}
	}

	return result;
}

fight();
