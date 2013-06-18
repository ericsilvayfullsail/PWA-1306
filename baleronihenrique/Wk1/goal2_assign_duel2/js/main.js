/*
	Name: 			Henrique Baleroni
	Date: 			6/4/2013
	Assignment: 	Goal 2 Duel Part 2
*/

var playerOne 	= ["Bob", 100, 5];

var playerTwo	= ["Joe", 100, 5];

// Function for the fighting

var rounds = 0;
function fight(){
	alert(playerOne[0] + ": " + playerOne[1] + " START " + playerTwo[0] + ": " + playerTwo[1]);

	for (var i = rounds; i <= 10; i++) {
		// Start the randomization of the player damages
		var p1Dmg = Math.floor(Math.random()*playerOne[2]/2 + (playerOne[2]/2));
		var p2Dmg = Math.floor(Math.random()*playerTwo[2]/2 + (playerTwo[2]/2));

		// Apply the random damage
		playerTwo[1] -= p1Dmg;
		playerOne[1] -= p2Dmg;

		// Tracing stats for checks
		console.log("Player 1 Damage: " + p1Dmg, "Player 2 Damage: " + p2Dmg);
		console.log("Player 1 Hp: " + playerOne[1], "Player 2 Hp: " + playerTwo[1]);

		var result = winnerCheck();

		if (result === "no winner") {
			rounds++;
			alert(playerOne[0] + ": " + playerOne[1] + " ROUND " + rounds + ' ' + playerTwo[0] + ": " + playerTwo[1]);
		}else {
			alert(result);
			break;
		}
	};
}

function winnerCheck(){
	var result = "no winner";

	if (playerOne[1] <= 0 && playerTwo[1] <= 0) {
		
		result = "Tied. Both players died.";

	}else if (playerOne[1] < 0 && playerOne[1] < playerTwo[1]) {

		result = "GAME OVER!!"+ ' ' + playerTwo[0] + " Wins!!!"

	}else if(playerTwo[1] < 0 && playerTwo[1] < playerOne[1]){
		
		result = "GAME OVER!!"+ ' ' + playerOne[0] + " Wins!!!";

	}else if(rounds == 10) {
		if(playerOne[1] > playerTwo[1]) {
			result = playerOne[0] + " WINS!";
		}
		else if(playerTwo[1] > playerOne[1]) {
			result = playerTwo[0] + " WINS!!";
		}
	}

	return result;
}

fight();
