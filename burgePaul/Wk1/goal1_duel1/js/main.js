//Paul Burge - PWA - 1306;
//June 4th, 2013
//The Duel - Part I

//here, we have our fighters Kabal and Kratos, their healthpoint values and damage values.
var fighter1 = "kabal";
var hp1 = 100;
var dps1 = 50;

var fighter2 = "kratos";
var hp2 = 100;
var dps2 = 50;

//here's our fight function.
var fight = function(){
	//a for loop that iterates 10 times is used to show the rounds.
	for (var i = 0; i < 10; i++) {
		//here, the damage for each fighter is calculated. its a random value between their damage values and 25.
		console.log("-----damage------");
		var dph1 = Math.floor((Math.random() * (dps1 - 25) + 25));
		console.log("Player 1 damage per hit " + dph1);
		var dph2 = Math.floor((Math.random() * (dps2 - 25) + 25));
		console.log("Player 2 damage per hit " + dph2);

		//here, the fighters' new hp values are stored in these variables everytime the loop iterates. 
		var fighter1hp = hp1 - dph2;
		var fighter2hp = hp2 - dph1;

		//and then the original variable for the fighters' hp values becomes the value from where they take damage.
		console.log("------round " + (i + 1) + "----")
		hp1 = fighter1hp;
		console.log("Player 1 HP " + hp1);
		hp2 = fighter2hp;
		console.log("Player 2 HP " + hp2);

		//here, we have the winner check and a variable set to it.
		var result = winnerCheck();
		//the conditional to dictate the winner, if there is one.
		if(result ===  "its a tie"){
			alert(fighter1 + "\'s HP is " + hp1 + ", and " + fighter2 + "\'s HP is " + hp2);
		}else{
			alert(result);
			break;
		}



	}
}
//the winner check function
var winnerCheck = function(){
	if(hp1 > 0 && hp2 > 0){
		result = "its a tie";
	}
	else if(hp2 <= 0){
		result = fighter1 + " wins!";
	}
	else if(hp1 <= 0){
		result = fighter2 + " wins!";
	}
	else if(hp1 <= 0 && hp2 <= 0){
		result = "No winners. Everyone losses.";
	};
	return result;
};

fight();