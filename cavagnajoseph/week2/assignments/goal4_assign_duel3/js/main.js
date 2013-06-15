// Joseph Cavagna
// Tuesday, June 13, 2013
// Assignment: Goal4_Duel3

(function(){
// fighter name, health, damage base
var fighters = [{name:"Kabal", health:100, damage:10}, {name:"Kratos", health:100, damage:15}];

// Round counter and titles
var round = ["Click to Start Fight", 1, 2, 3, 4, 5, 6, 7, 8, 9, "Finish"];
var ctr = 0;


/* Sets variables within the document to target the button, text above 
the button and the spaces at the top for the fighters */
var btn = document.querySelector(".buttonblue");
var roundBox = document.querySelector("#round");
var fighter1 = document.querySelector("#kabal p");
var fighter2 = document.querySelector("#kratos p");


// Sets the initial values to the round text, fighters names and health
roundBox.innerHTML = round[ctr];
fighter1.innerHTML = fighters[0].name + ": " + fighters[0].health;
fighter2.innerHTML = fighters[1].name + ": " + fighters[1].health;


// creates the functionality for the fight button
btn.onclick = function(e){
	fight();
}

// The fight function.
function fight(){
	
// Application of damage to the fighters
	fighters[1].health = fighters[1].health - (fighters[0].damage + Math.ceil(Math.random()*15));
	fighters[0].health = fighters[0].health - (fighters[1].damage + Math.ceil(Math.random()*10));

// Result of the fight from the check
	var result = winnerCheck();

// If there is a result from the check, sends the alert with the result
	if(result != "no winner"){
		roundBox.innerHTML = result;
		fighter1.innerHTML = fighters[0].name + ": " + fighters[0].health;
		fighter2.innerHTML = fighters[1].name + ": " + fighters[1].health;
		// Disable the button
		btn.onclick = function(e){
			e.preventDefault();
			return false;
		};
	}
// If no winner, cycles the round and gives a status update to the text fields
	else{
		ctr++;
		roundBox.innerHTML = "Round " + round[ctr];
		fighter1.innerHTML = fighters[0].name + ": " + fighters[0].health;
		fighter2.innerHTML = fighters[1].name + ": " + fighters[1].health;
	}
	
}

// Check on the status of the fighters
function winnerCheck(){

	var result = "no winner";
// Conditional checking health of both fighters
	if(fighters[0].health <= 0 && fighters[1].health <= 0){
		return "It's a tie!";
	}

// Check for fighter 1's health is under 0
	else if(fighters[0].health <= 0){
		return fighters[1].name + " wins!";
	}

// Check for fighter's 2 health is under 0
	else if(fighters[1].health <=0){
		return fighters[0].health + " wins!";
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

})();
