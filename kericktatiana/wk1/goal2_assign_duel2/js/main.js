//Tatiana Kerick - Goal 2 Duel 2

var fighter1 = ["Absinthe Drinker", 100, (Math.round(Math.random() * 15))];

var fighter2 = ["Green Fairy", 100, (Math.round(Math.random() * 9))];

var round = 0;

function fight(){
	alert(fighter1[0] + " health: " + fighter1[1] + " *START* " + fighter2[0] + " health: " + fighter2[1]);
	
	for(var i = 0; i <= 11; i++){
		var onePlan = Math.random() * fighter1[2];
		var twoPlan = Math.random() * fighter2[2];
	
		var oneHit = fighter2[1] - fighter1[2];
		var twoHit = fighter1[1] - fighter2[2];
		
		fighter1[1] = twoHit;
		fighter2[1] = oneHit;
		
		result = winnerCheck()
		if(result != null){
			alert(result);
			break
		}
		else{
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

