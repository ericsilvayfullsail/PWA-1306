// Joseph Cavagna


var fighter1 = "Spiderman";
var fighter2 = "Superman";

var fighter1health = 100;
var fighter2health = 100;

var fighter1damage = 10;
var fighter2damage = 15;

var round = ["Start", 1, 2, 3, 4, 5, 6, 7, 8, 9, "Finish"];

var ctr = 0;

alert(fighter1 + ": " + fighter1health + " " + "Round:" + round[ctr] + " " + fighter2 + ": " + fighter2health);

function fight(){
	fighter2health -= fighter1damage + Math.ceil(Math.random()*15);
	fighter1health -= fighter2damage + Math.ceil(Math.random()*10);
}
function game(){
	for (var i = 0; i <= 12; i++) {
		fight();
		if(fighter1health <= 0 && fighter2health <= 0){
		 	alert("It's a Tie!");
		 	console.log("tie");
		 	break;
		 }
		 else if(fighter1health <= 0){
		 	alert(fighter2 + " wins!");
		 	console.log("f1win");
		 	break;
		 }
		 else if(fighter2health <=0){
		 	alert(fighter1 + " wins!");
		 	console.log("f2win");
		 	break;
		 }
		 else if(ctr >= 10){
			alert("Time Over!");
			console.log("time");
			break;	
		 }
		 else{
		 	ctr++;
		 	console.log(fighter1, fighter1health, "Round:", round[ctr], fighter2, fighter2health);
		 	alert(fighter1 + ": " + fighter1health + " " + "Round:" + round[ctr] + " " + fighter2 + ": " + fighter2health);
		 }
	}
}
game();
