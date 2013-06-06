//Paul Burge - PWA - 1306;
//June 6th, 2013
//The Duel - Part II

//here are the variables turned array for each of the fighters' stats.
var kabalArray = ["kabal", 100, 50];
var kratosArray = ["kratos", 100, 50];

//here is the fight function
var fight = function(){
	//here, i have an alert to pop up before the round starts to show original hp values.
	alert(" ---ROUND 1---\n\n" + kabalArray[0] + "\'s HP is " + kabalArray[1] + " and " + kratosArray[0] + "\'s HP is " + kratosArray[1]);
	//and here is the loop, iterating 10 times or until a victor is found.
	for (var i = 0; i < 10; i++) {
		//here is the damage output for each fighter. a number between 25 and 50, for the fighters' dps.
		console.log("-----damage------");
		var dph1 = Math.floor((Math.random() * (kabalArray[2] - 25) + 25));
		console.log("Player 1 damage per hit " + dph1);
		var dph2 = Math.floor((Math.random() * (kratosArray[2] - 25) + 25));
		console.log("Player 2 damage per hit " + dph2);

		//here, this variable saves the new hp values after the damage takes place.
		var kabalhp = kabalArray[1] - dph2;
		var kratoshp = kratosArray[1] - dph1;

		//and here, the original hp values of each fighter gets modified and updated to reflect the damage.
		console.log("------round " + (i + 1) + "----")
		kabalArray[1] = kabalhp;
		console.log("Player 1 HP " + kabalArray[1]);
		kratosArray[1] = kratoshp;
		console.log("Player 2 HP " + kratosArray[1]);

		//and here's the result variable to hold the winner check function.
		var result = winnerCheck();
		//this alert pops up after each round with updated hp values.
		if(result === "its a tie"){
			alert(" ---ROUND "+(i + 2)+"---\n\n" + kabalArray[0] + "\'s HP is " + kabalArray[1] + " and " + kratosArray[0] + "\'s HP is " + kratosArray[1]);
		}else{
			alert(result);
			break;
		}

	}
}
//and here is the winner check function itself with each of the messages to show the victor, if there is one.
var winnerCheck = function(){
	if(kabalArray[1] > 0 && kratosArray[1] > 0){
		result = "its a tie";
	}
	else if(kratosArray[1] <= 0){
		result = kabalArray[0] + " wins!";
	}
	else if(kabalArray[1] <= 0){
		result = kratosArray[0] + " wins!";
	}
	else if(kabalArray[1] <= 0 && kratosArray[1] <= 0){
		result = "No winners. Everyone losses.";
	};
	return result;
};	
//fight! 
fight();