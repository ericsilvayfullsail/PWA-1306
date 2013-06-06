// Joseph Cavagna
// Tuesday, June 6, 2013
// Assignment: Goal2_Duel2

(function(){
// fighter name, health, damage base
var fighter1 = ["Spiderman", 100, 10];
var fighter2 = ["Superman", 100, 15];

// Round counter and titles
var round = ["Start", 1, 2, 3, 4, 5, 6, 7, 8, 9, "Finish"];
var ctr = 0;

// Initial alert setting the stage for the fighters
alert(fighter1[0] + ": " + fighter1[1] + " --- Round:" + round[ctr] + " --- " + fighter2[0] + ": " + fighter2[1]);


// The fight function to loop the fight.
function fight(){
	for (var i = 0; i <= 12; i++) {

// Application of damage to the fighters
		fighter2[1] = fighter2[1] - (fighter1[2] + Math.ceil(Math.random()*15));
		fighter1[1] = fighter1[1] - (fighter2[2] + Math.ceil(Math.random()*10));

// Result of the fight from the check
		var result = winnerCheck();

// If there is a result from the check, sends the alert with the result
		if(result != "no winner"){
			alert(result);
			break;
		}
// If no winner, cycles the round and sends out an alert giving a status update
		else{
			ctr++;
			alert(fighter1[0] + ": " + fighter1[1] + " ----- Round:" + round[ctr] + " ----- " + fighter2[0] + ": " + fighter2[1]);
		}
	}
}


// Check on the status of the fighters
function winnerCheck(){

	var result = "no winner";
// Conditional checking health of both fighters
	if(fighter1[1] <= 0 && fighter2[1] <= 0){
		return "It's a tie!";
	}

// Check for fighter 1's health is under 0
	else if(fighter1[1] <= 0){
		return fighter2[0] + " wins!";
	}

// Check for fighter's 2 health is under 0
	else if(fighter2[1] <=0){
		return fighter1[0] + " wins!";
	}

// Check for the rounds at 10, ends fight if it is.
	else if(ctr >= 10){
		return "Time Over!";
	}
// Returns no winner if both fighters are alive
	else{
		return result;
	}
}
// Begin Fight
fight();

})();
