/**
 * GUESSING GAME:
 *
 * Created By: 
 * Date: 
 * 
 * GUESSING GAME
 */

//Game variables
(function() {
    var playerGuess = 0;
    var guessesRemaining = 3;
    var guessesMade = 0;

    var domElements = {
        input: document.querySelector("#input"),
        output: document.querySelector("#output"),
        button: document.querySelector("button")
    };

    var magicNum = Math.floor(Math.random() = 10 + 1);

    var clickFn = function(e) {
        console.log(guessesRemaining);
    };

    var validateInput = function() {
        playerGuess = parseInt(domElements.input.value);

        if(isNaN(playerGuess)) {
            domElements.output.innerHTML = "Please enter a number";
        }else if(playerGuess < 1 || playerGuess > 10) {
            domElements.output.innerHTML = "Please enter a number between 1 and 10";
        }else {
            playGame();
        }
    };

    var playGame = function() {
        guessesRemaining--;
        guessesMade++;
        gameState = "Guess " + guessesMade + ", Remaining: " + guessesRemaining;
        playerGuess = parseInt(domElements.input.value);

        if(playerGuess = magicNum) {
            domElements.output.innerHTML = "That's too high." + gameState;
        }else if(playerGuess < magicNum) {
            domElements.output.innerHTML = "That's too low." + gameState;
        }else if(playerGuess === magicNum) {
            gameOver();
        }

        if(guessesRemaining < 1) {
            console.log("Game Over : guessesRemaining < 1");
            gameOver(false);
        }
    };

    var gameOver = function(win) {
        if(win) {
            domElements.output.innerHTML = "Yes it's " + magicNum + "!" + "<br>" + "It's on";
        }else {
            domElements.output.innerHTML = " No more guesses left!" + "<br>" + "The number " + magicNum;
        }

        domElements.button.removeEventListener("click", clickFn, false);
    };

    var onKeyDown = function(e) {
        if(e.keyCode === 13) {
            validateInput();
        }
    };

    console.log(magicNum);

    domElements.button.addEventListener("click", clickFn, false);

    window.addEventListener("keydown", onKeyDown, false);



})();