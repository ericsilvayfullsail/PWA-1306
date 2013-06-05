var fighter1 = "Absinthe Drinker";
var fighter1health = 100;
var fighter1damage = Math.round(Math.random() * 30);

var fighter2 = "Green Fairy";
var fighter2health = 100;
var fighter2damage = Math.round(Math.random() * 20);

while(fighter1health > 0 && fighter2health > 0){
	var onePlan = Math.random() * fighter1damage;
	var twoPlan = Math.random() * fighter2damage;
	
	var oneHit = fighter2health - fighter1damage;
	var twoHit = fighter1health - fighter2damage;
	
	fighter1health = twoHit;
	fighter2health = oneHit;
	
	console.log("After the attack", fighter1, "health:", fighter1health, ",", fighter2, "health:", fighter2health);
}

if(fighter1health <= 0 && fighter2health <= 0){
	console.log("Both fighters have died");
}

if(fighter2health > fighter1health){
	console.log(fighter2, "has won the battle!");
}

else{
	console.log(fighter1, "has won the battle!");
}
