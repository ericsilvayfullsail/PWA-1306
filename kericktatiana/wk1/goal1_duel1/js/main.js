//Tatiana Kerick - Goal 1 Duel

var fighter1 = "Absinthe Drinker";
var fighter1health = 100;
var fighter1damage = Math.round(Math.random() * 15);

var fighter2 = "Green Fairy";
var fighter2health = 100;
var fighter2damage = Math.round(Math.random() * 9);

function fight(){
	for( var i = 10; i>0; i--){
		var onePlan = Math.random() * fighter1damage;
		var twoPlan = Math.random() * fighter2damage;
	
		var oneHit = fighter2health - fighter1damage;
		var twoHit = fighter1health - fighter2damage;
		
		fighter1health = twoHit;
		fighter2health = oneHit;
	
		alert("After the attack" + fighter1 + "health:" + fighter1health + "," + fighter2 + "health:" + fighter2health);
	}

}

function winnerCheck(){
	var result = "No winner!"
	
	if(fighter1health <= 0 && fighter2health <= 0){
		return "its a tie";
	}
	else if(fighter1health > fighter2health){
		return fighter1 "has won!";
	}
	else if(fighter2health > fighter1health){
		return fighter2 "has won!";
	}
	else{
		return result;
	}
}

// if(fighter1health <= 0 && fighter2health <= 0){
	// console.log("Both fighters have died");
// }
// 
// if(fighter2health > fighter1health){
	// console.log(fighter2, "has won the battle!");
// }
// 
// else{
	// console.log(fighter1, "has won the battle!");
// }

fight();