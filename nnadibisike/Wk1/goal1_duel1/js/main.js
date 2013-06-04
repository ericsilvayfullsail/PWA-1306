/**
 * @author Bisike N. Nnadi
 * June 4, 2013
 * The Duel
 */

	var player1name = "Batman";
	var player1health = 100;
	var player1damage = 26;
	
	var player2name = "Owlman";
	var player2health = 100;
	var player2damage = 26;
	
	var round = 0;
	

	var fight = function(){
		alert(player1name + ": " + player1health +" **START** " + player2name + ": " + player1health);
		for(var i = 0; i < 10; i++){
			round++;
			
			player2health -= Math.floor(Math.random()*player1damage + player1damage*.5);
			player1health -= Math.floor(Math.random()*player2damage + player2damage*.5);
		
			alert(player1name + ": " + player1health + " **ROUND " + round + " OVER** " + player2name + ": " + player2health);
			console.log("works");
			
			var winner = winnerCheck();
			
			if (winner > player1health){
					alert("GAME OVER " + player2name + " Wins!!!");
			}else if (winner > player2health) {
				alert("GAME OVER " + player1name + " Wins!!!");
			}else{
				alert("No Winners...")
				//break;
			};
			
		}
	}
	
	var winnerCheck = function(){
		if(player1health == 0){
			console.log("GAME OVER " + player2name + " Wins!!!");
		}else if (player2health == 0) {
			console.log("GAME OVER " + player1name + " Wins!!!");
		}else if(player1health == 0 & player2health == 0){
			console.log("No winner, saddness...");
		}
	}
	
	fight();
