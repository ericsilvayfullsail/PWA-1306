// Joseph Cavagna
// Tuesday, June 4, 2013
// Assignment: Goal1_Duel1

var fighter1 = "Spiderman";
var fighter2 = "Superman";

var fighter1health = 100;
var fighter2health = 100;

var fighter1damage = 10;
var fighter2damage = 15;

var round = ["Start", 1, 2, 3, 4, 5, 6, 7, 8, 9, "Finish"];
var ctr = 0;

alert(fighter1 + ": " + fighter1health + " --- Round:" + round[ctr] + " --- " + fighter2 + ": " + fighter2health);

function fight(){
	for (var i = 0; i <= 12; i++) {
		fighter2health -= fighter1damage + Math.ceil(Math.random()*15);
		fighter1health -= fighter2damage + Math.ceil(Math.random()*10);

		var result = winnerCheck();

		if(result != "no winner"){
			alert(result);
			break;
		}
		else{
			ctr++;
			alert(fighter1 + ": " + fighter1health + " ----- Round:" + round[ctr] + " ----- " + fighter2 + ": " + fighter2health);
		}
	}
}

function winnerCheck(){

	var result = "no winner";

	if(fighter1health <= 0 && fighter2health <= 0){
		return "It's a tie!";
	}
	else if(fighter1health <= 0){
		return fighter2 + " wins!";
	}
	else if(fighter2health <=0){
		return fighter1 + " wins!";
	}
	else if(ctr >= 10){
		return "Time Over!";
	}
	else{
		return result;
	}
}
fight();
