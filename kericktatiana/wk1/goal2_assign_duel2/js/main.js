//Tatiana Kerick - Goal 2 Duel 2

//creating the fighters, adding their health and damage
var fighter1 = ["Absinthe Drinker", 100, (Math.round(Math.random() * 15))];

var fighter2 = ["Green Fairy", 100, (Math.round(Math.random() * 9))];

//round counter
var round = 0;

function fight(){
	//alert before the game starts
	alert(fighter1[0] + " health: " + fighter1[1] + " *START* " + fighter2[0] + " health: " + fighter2[1]);
	
	//loop that goes through the apponents attacks taking health from one another
	for(var i = 0; i <= 11; i++){
		var onePlan = Math.random() * fighter1[2];
		var twoPlan = Math.random() * fighter2[2];
	
		//taking away the health	
		var oneHit = fighter2[1] - fighter1[2];
		var twoHit = fighter1[1] - fighter2[2];
		
		//health is now equale to what is taken away from the "hits"
		fighter1[1] = twoHit;
		fighter2[1] = oneHit;
		
		result = winnerCheck() //result is equale to the conditions in the winnerCheck function
		if(result != null){
			//if the results aren't eqaule to null, show the results
			alert(result);
			break
		}
		else{
			//else, continue with the fighting rounds and show to the results in an alert
			round++;
			alert("After the attack: " + fighter1[0] + " health: " + fighter1[1] + " *ROUND " + round + "* " + fighter2[0] + " health: " + fighter2[1]);
		}
		
	}

}

function winnerCheck(){
	
	if(fighter1[1] <= 0 && fighter2[1] <= 0){
		return "its a tie";
	}
	else if(fighter1[1] <= 0){
		return fighter2 + "has won!";
	}
	else if(fighter2[1] <= 0){
		return fighter1 + "has won!";
	}
	else if(round >= 10){
		return "game over!"
	}
	else{
		}
}
fight();

