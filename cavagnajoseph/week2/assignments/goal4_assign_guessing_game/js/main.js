/**
 * GUESSING GAME:
 *
 * Created By: Joseph Cavagna
 * Date: Thursday, June 13, 2013
 * 
 * GUESSING GAME
 */

//Game variables
(function(){
// Setting Variables to access in the HTML
var inpt = document.getElementById("input");
var btn = document.querySelector("#btn");
var outp = document.querySelector("#output");

// Creating the correct answer
var answer = Math.ceil(Math.random()*10);

// Creating the counter for the game
var guessCtr = 0;

// Creating interactivity between the button and program
btn.onclick = function(e){
	validate(inpt.value);
}

// Validates the input for the game
function validate(stuf){
	// Casting the input from a string to a number
	stuff = Number(stuf);
	if(stuff <= 10 || stuff >=1){
		guess(stuff);
		//check on if the guess counter has been reached
		if(guessCtr >=3){
			outp.innerHTML = "Too many guesses, you lose!";
			// Deactivating the button on failure
			btn.onclick = function(e){
				e.preventDefault();
				return false;
			}			
		}
	// If the input is invalid
	}else{
		outp.innerHTML = "I said a NUMBER between 1 and 10!";
	}
}

// To check and output the response of their guess.

function guess(stuff){
	// Comparing the guess with the answer
	if(stuff < answer){
		// increasing the guess counter
		guessCtr++;
		// Output message if their answer was too low
		outp.innerHTML = "Your Guess was too low.";
	}else if(stuff > answer){
		guessCtr++;
		outp.innerHTML = "Your guess was too high.";
	}else{
		outp.innerHTML = "You Win!";
		// Deactivating the button on success
		btn.onclick = function(e){
			e.preventDefault();
			return false;
		}
	}
}
})();