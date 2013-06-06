// Hugh Ybarra 
// June 4 2013
// Duel1

var p1Name = "Masked man";
var p1Damage = 50;
var p1Health = 100;

var p2Name = "WarGod";
var p2Damage = 50;
var p2Health = 100;

var roundCounter = 0;
var damage1 = 0;
var damage2 = 0;
var dtype 	= "nothing";
var dtype2 	= "nothing";

// fightFunction();

	// value returning functions 

// fightFunction(){

	alert("Round 1.... FIGHT! ")
	
	for (var i = 0; i < 10; i++)
	{
		damage1 = Math.floor(Math.random()*p1Damage/2+p1Damage/2);
		damage2 = Math.floor(Math.random()*p2Damage/2+p2Damage/2);

		p2Health -= damage1;
		p1Health -= damage2;

		if (p2Health < 0){
			p2Health = 0;
		}// end if 
		if (p1Health < 0){
			p1Health = 0;
		}// end if 
		++roundCounter;

		// just for fun ^_^

		if (damage1 > 15){
			dtype = "it was super effective";
		}// end if 
		else 
			dtype = " ";
		if (damage2 > 15){
			dtype2 = "it was super effective";
		}// end if 
		else 
			dtype2 = " ";

		// end fun 

		alert("Round " + Math.floor(roundCounter) + "\n" + 
			"WarGod hit for " + damage2 + "\n" +
			"MaskedMan hit for " + damage1 + "\n" +
			"MaskedMan " + "HP = "+ Math.floor(p1Health) + "\n" + 
			"WarGod " +"      " + "HP = " + Math.floor(p2Health) + "\n" )


		if (i == 10 || p1Health == 0 || p2Health == 0){
			if (p1Health != 0 || p2Health != 0){

				if (p1Health > 0){
					alert("the winner was " + p1Name);
					break;
				}
				if (p2Health > 0){
					alert("the winner was " + p2Name);
					break;
				}
			}
			else
			alert("It was a tie");
			break;
		}// end if 
			
	}// end for loop 
// }// end of fight function 

