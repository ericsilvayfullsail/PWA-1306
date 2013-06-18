//Tatiana Kerick - Goal 1 Duel

var fighter1 = "Absinthe Drinker";
var fighter1health = 100;
var fighter1damage = Math.round(Math.random() * 15);

var fighter2 = "Green Fairy";
var fighter2health = 100;
var fighter2damage = Math.round(Math.random() * 9);

var round = 0;

function fight(){
	alert(fighter1 + "health:" + fighter1health + "START" + fighter2 + "health:" + fighter2health);
	
	for(var i = 0; i <= 11; i++){
		var onePlan = Math.random() * fighter1damage;
		var twoPlan = Math.random() * fighter2damage;
	
		var oneHit = fighter2health - fighter1damage;
		var twoHit = fighter1health - fighter2damage;
		
		fighter1health = twoHit;
		fighter2health = oneHit;
		
		result = winnerCheck()
		if(result != null){
			alert(result);
			break
		}
		else{
			round++;
			alert("After the attack: " + fighter1 + "health:" + fighter1health + "ROUND" + round + fighter2 + "health:" + fighter2health);
		}
		
	}

}

function winnerCheck(){
	
	if(fighter1health <= 0 && fighter2health <= 0){
		return "its a tie";
	}
	else if(fighter1health <= 0){
		return fighter2 + "has won!";
	}
	else if(fighter2health <= 0){
		return fighter1 + "has won!";
	}
	else if(round >= 10){
		return "game over!"
	}
	else{
		}
}
fight();

