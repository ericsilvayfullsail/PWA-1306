

var Player1 = ["P1", 100, Math.floor(25*Math.random() + 25)];
var Player2 = ["P2", 100, Math.floor(25*Math.random() + 25)];

var BreakCheck;




function master(){

    for (i = 1; i <11; i++){

        alert("Player1: " + Player1[1] + "    Round: " + i + "   Player2 " + Player2[1]);

        winnerCheck();

        function winnerCheck (){
            if (Player1[1]<=0 && Player2[1]>=0){
                Player1[1] = 0;
                alert("Game over! You lose..");
                BreakCheck = "end";
            }else if(Player1[1]<=0 && Player2[1]>=0 ){
                Player2[1] = 0;
                alert("Game over! You win!");
                BreakCheck = "end";

            }
            else if(Player1[1]<=0 && Player2[1]<=0 ){
                alert("Tie");
                BreakCheck = "end";
            }



            else (fight ());}




        function fight (){
            Player1[1] = Player1[1] - Player2[2];
            Player2[1] = Player2[1] - Player1[2];
            if (Player1[1]<=0){
                Player1[1] = 0;}
            if(Player2[1]<=0){
                Player2[1] = 0;}



        }
        if (BreakCheck == "end"){
            break;

        }


    }

}












