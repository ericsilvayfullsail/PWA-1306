/**
 * Created with JetBrains WebStorm.
 * User: Hugh
 * Date: 6/15/13
 * Time: 9:25 AM
 * To change this template use File | Settings | File Templates.
 */
/** Hugh Ybarra **/
/** Goal 3 Duel 3 **/
/** June 15 **/



//var p1Name = "Masked man";
//var p1Damage = 50;
//var p1Health = 100;
//
//var p2Name = "WarGod";
//var p2Damage = 50;
//var p2Health = 100;

var damage1 = 0;
var damage2 = 0;


p1 = {
    name: "WarGod",
    damage:50,
    health:100
};
p2 = {
    name: "MaskedMan",
    damage:50,
    health:100
};
var roundCounter = 1;
var fighterArray = [p1, p2];

/** ===== html declarations ==== **/
var htmlFighterOne = document.getElementById("kabal");
var htmlFighterTwo = document.getElementById("kratos");
var fightState = document.getElementById("round");
var myButton = document.getElementById("someButton");
//var htmlFighterOneScore = document.getElementById("")


htmlFighterOne.querySelector("p").innerHTML = "War God" + " " + p1.health;
htmlFighterTwo.querySelector("p").innerHTML = "Masked Man" + " " +p2.health;
fightState.innerHTML = "Round" + roundCounter + " FIGHT!!";





var onButtonClick = function(){
    damage1 = Math.floor(Math.random()*p1.damage/2+p1.damage/2);
    damage2 = Math.floor(Math.random()*p2.damage/2+p2.damage/2);

    p1.health -= damage2;
    p2.health -= damage1;

    if (p2.health < 0){
        p2.health = 0;
    }
    if (p1.health < 0){
        p1.health = 0;
    }

    roundCounter ++;

    if (roundCounter == 10 || p1.health == 0 || p2.health == 0)
    {

        if (p1.health != 0 || p2.health != 0)
        {
            console.log("ran2");

            if (p1.health == 0)
            {
                console.log("ran3");
                fightState.innerHTML = "player 2 Wins";

                myButton.disabled = true;

            }
            if (p2.health == 0)
            {
                console.log("ran4");
                fightState.innerHTML = "player 1 Wins";
                myButton.disabled = true;
            }
        }
        if (p1.health == 0 && p2.health == 0 || roundCounter == 10)
        {
            fightState.innerHTML = "it was a tie";
            myButton.disabled = true;
        }

    }

    htmlFighterOne.querySelector("p").innerHTML = "War God" + " " + p1.health;
    htmlFighterTwo.querySelector("p").innerHTML = "Masked Man" + " " +p2.health;
};

