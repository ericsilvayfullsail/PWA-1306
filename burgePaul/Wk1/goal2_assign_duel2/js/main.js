//Paul Burge - PWA - 1306;
//June 4th, 2013
//The Duel - Part I

var fighter1 = "kabal";
var hp1 = 100;
var dps1 = 50;

var fighter2 = "kratos";
var hp2 = 100;
var dps2 = 50;

var fight = function(){
	for (var i = 0; i < 10; i++) {

		console.log("-----damage------");
		var dph1 = Math.floor((Math.random() * (dps1 - 25) + 25));
		console.log("Player 1 damage per hit " + dph1);
		var dph2 = Math.floor((Math.random() * (dps2 - 25) + 25));
		console.log("Player 2 damage per hit " + dph2);

		// console.log("------- hp ------");
		var fighter1hp = hp1 - dph2;
		// console.log("Player 1 hp reduced by " + fighter1hp);
		var fighter2hp = hp2 - dph1;
		// console.log("Player 2 hp reduced by " + fighter2hp);

		console.log("------round " + (i + 1) + "----")
		hp1 = fighter1hp;
		console.log("Player 1 HP " + hp1);
		hp2 = fighter2hp;
		console.log("Player 2 HP " + hp2);


		var result = winnerCheck();

		if(result ===  "its a tie"){
			alert(fighter1 + "\'s HP is " + hp1 + ", and " + fighter2 + "\'s HP is " + hp2);
		}else{
			alert(result);
			break;
		}



	}
}

var winnerCheck = function(){
	if(hp1 > 0 && hp2 > 0){
		// alert(fighter1 + "\'s HP is " + hp1 + ", and " + fighter2 + "\'s HP is " + hp2);
		result = "its a tie";
	}
	else if(hp2 <= 0){
		//break;
		result = fighter1 + " wins!";
	}
	else if(hp1 <= 0){
		// break;
		result = fighter2 + " wins!";
	}
	else if(hp1 <= 0 && hp2 <= 0){
		// break;
		result = "No winners. Everyone losses.";
	};
	return result;
};




fight();