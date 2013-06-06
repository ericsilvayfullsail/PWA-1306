//Paul Burge - PWA - 1306;
//June 4th, 2013
//The Duel - Part I

// var fighter1 = "kabal";
// var hp1 = 100;
// var dps1 = 50;

// var fighter2 = "kratos";
// var hp2 = 100;
// var dps2 = 50;

var kabalArray = ["kabal", 100, 50];
var kratosArray = ["kratos", 100, 50];

var fight = function(){

	alert(" ---ROUND 1---\n\n" + kabalArray[0] + "\'s HP is " + kabalArray[1] + " and " + kratosArray[0] + "\'s HP is " + kratosArray[1]);

	for (var i = 0; i < 10; i++) {

		console.log("-----damage------");
		var dph1 = Math.floor((Math.random() * (kabalArray[2] - 25) + 25));
		console.log("Player 1 damage per hit " + dph1);
		var dph2 = Math.floor((Math.random() * (kratosArray[2] - 25) + 25));
		console.log("Player 2 damage per hit " + dph2);

		// console.log("------- hp ------");
		// var fighter1hp = hp1 - dph2;
		var kabalhp = kabalArray[1] - dph2;
		// console.log("Player 1 hp reduced by " + fighter1hp);
		var kratoshp = kratosArray[1] - dph1;
		// console.log("Player 2 hp reduced by " + fighter2hp);

		console.log("------round " + (i + 1) + "----")
		// hp1 = fighter1hp;
		kabalArray[1] = kabalhp;
		console.log("Player 1 HP " + kabalArray[1]);
		// hp2 = fighter2hp;
		kratosArray[1] = kratoshp;
		console.log("Player 2 HP " + kratosArray[1]);


		var result = winnerCheck();

		if(result === "its a tie"){
			alert(" ---ROUND "+(i + 2)+"---\n\n" + kabalArray[0] + "\'s HP is " + kabalArray[1] + " and " + kratosArray[0] + "\'s HP is " + kratosArray[1]);
		}else{
			alert(result);
			break;
		}

	}
}

var winnerCheck = function(){
	if(kabalArray[1] > 0 && kratosArray[1] > 0){
		// alert(fighter1 + "\'s HP is " + hp1 + ", and " + fighter2 + "\'s HP is " + hp2);
		result = "its a tie";
	}
	else if(kratosArray[1] <= 0){
		//break;
		result = kabalArray[0] + " wins!";
	}
	else if(kabalArray[1] <= 0){
		// break;
		result = kratosArray[0] + " wins!";
	}
	else if(kabalArray[1] <= 0 && kratosArray[1] <= 0){
		// break;
		result = "No winners. Everyone losses.";
	};
	return result;
};




fight();