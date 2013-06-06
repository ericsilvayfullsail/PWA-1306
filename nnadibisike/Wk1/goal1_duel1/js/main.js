/**
 * @author Bisike N. Nnadi
 * June 4, 2013
 * The Duel
 */
	// Player 1 details
	var player1 = ["Batman", 100,  26];
	
	// Player 2 details
	var player2 = ["Owlman", 100, 26];
	
	// round change
	var round = 0;
	
	// function running the battle
	var fight = function(){
		alert(player1[0] + ": " + player1[1] +" **START** " + player2[0] + ": " + player1[1]);
		for(var i = 0; i < 10; i++){
			round++;
			
			player2[1] -= Math.floor(Math.random()*player1[2] + player1[2]*.5);
			player1[1] -= Math.floor(Math.random()*player2[2] + player2[2]*.5);
		
			
			console.log("works");
			
			var winner = winnerCheck();
			
			if (winner != null){
				alert(winner);
				break;
			}else {
				alert(player1[0] + ": " + player1[1] + " **ROUND " + round + " OVER** " + player2[0] + ": " + player2[1]);
			};
			
			
			
		}
	}
	
	// Check the winner
	var winnerCheck = function(){
		console.log("check");
		 var win = "No Winner";
		 
		if(player1[1] < 1)
		{
			return "GAME OVER " + player2[0] + " Wins!!!";
		}
		else if (player2[1] < 1) 
		{
			return "GAME OVER " + player1[0] + " Wins!!!";
		}
		else if(player1[1] < 1 && player2[1] < 1){
			return win;
		}
		else if(round >= 10){
			return "Time ran out!";
		}
	}
	
	fight();
