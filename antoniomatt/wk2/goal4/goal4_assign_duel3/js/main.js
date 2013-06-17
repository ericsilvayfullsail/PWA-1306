/*===============================================
Matt Antonio
June 13, 2013
Goal 4 Duel 3
===============================================*/

//Player One Info
var playerOne = {name:"Optimus Prime", health:100, damage:20};
var playerOneHalfDamage = playerOne.damage / 2;
var playerOneScore = document.querySelector("#kratos p");

//Player Two Info
var playerTwo = {name:"Megatron", health:100, damage:20};
var playerTwoHalfDamage = playerTwo.damage / 2;
var playerTwoScore = document.querySelector("#kabal p");

var roundNum = document.querySelector("h4");
roundNum.innerHTML = "Click To Start Fight";
console.log(roundNum);

//alert(playerOne[0] + ": " + playerOne[1] + " ***Start*** " + playerTwo[0] + ": " + playerTwo[1]);

playerOneScore.innerHTML = playerOne.name + ":" + playerOne.health;
playerTwoScore.innerHTML = playerTwo.name + ":" + playerTwo.health;

//Fight function to start the battle
var fight = function() {
	if(playerOne.health > 0 && playerTwo.health > 0) {
		var playerOneHit = Math.floor(Math.random() * playerOneHalfDamage + playerOne.damage);
		var playerTwoHit = Math.floor(Math.random() * playerTwoHalfDamage + playerTwo.damage);

		var playerOneAttack = playerTwo.health - playerOneHit;
		var playerTwoAttack = playerOne.health - playerTwoHit;

		playerOne.health = playerTwoAttack;
		playerTwo.health = playerOneAttack;



		roundNum++;
    }
};

var fightBtn = document.getElementById("fight_btn");
fightBtn.onclick = fight();

//Checks to see if and who the winner is
var winnerCheck = function() {
    if(playerOne.health <= 0 && playerTwo.health <= 0) {
        alert("No Winner!");
    }else if(playerOne.health <= 0) {
        alert(playerTwo.name + " WINS!!!");
    }else if(playerTwo.health <= 0) {
        alert(playerOne.name + " WINS!!!");
    }
};
winnerCheck();