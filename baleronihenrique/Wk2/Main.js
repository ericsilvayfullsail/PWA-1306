/*
		Name: 	Henrique Baleroni
		Date: 	6/14/2013
		Class: 	PWA
*/

// Game variables
var playerGuess = 0;
var guessesRemaining = 3;
var guessesMade = 0;

var dom = {
	input: document.querySelector("#input");
	output: document.querySelector("#output");
	button: document.querySelector("button");
};

var magicNum = Math.floor(Math.random() * 10 + 1);

var clickFn = function(e){
	console.log(guessesRemaining);
	 validateInput();
};

var validateInput = function(){
	playerGuess = parseInt(dom.input.value);

	if(isNaN(playerGuess)){
		dom.output.innerHTML = "Please enter a number";
	}else if(playerGuess < 1 || playerGuess > 10){
		dom.output.innerHTML = "Please enter a number between 1 and 10";
	}else{
		playGame();
	}
};

var playGame = function(){
	guessesRemainig--;
	guessesMade++;
	gameState = "Guess: " + guessesMade + ", Remaining: " + guessesRemaining;
	playerGuess = parseInt(input.value);

	if(playerGuess > magicNum){
		dom.output.innerHTML = "That's too high." + gameState;
	}else if(playerGuess < magicNum){
		dom.output.innerHTML = "That's too low." + gameState;
	}else if(playerGuess === magicNum){
		gameOver(true);
	};

	if(guessesRemaining < 1){
		console.log("Game Over : guessesRemaining is < 1");
		gameOver(false);
	};
};

var gameOver = function(win){
	if(win){
		dom.output.innerHTML = "Yes, its " + magicNum + "!" + "<br>" + "It's on";
	}else{
		don.output.innerHTML = "No more guesses left!" + "<br>" + "The number"
	};

	dom.button.removeEventListener("click", clickFn, false);
}

var onKeyDown = function(e){
	if(e.keyCode === 13){
		validateInput();
	}
};

console.log(magicNum);

dom.button.addEventListener("click", clickFn, false);

window.addEventListener("click", onKeyDown, false);
