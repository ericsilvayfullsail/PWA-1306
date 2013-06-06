
var PlayerName1 = "P1";
var PlayerName2 = "P2";
var PlayerHealth1 = 100;
var PlayerHealth2 = 100;
var PlayerDamage1 = Math.floor(25*Math.random() + 25);
var PlayerDamage2 = Math.floor(25*Math.random() + 25);
var BreakCheck;




function master(){

    for (i = 1; i <11; i++){

        alert("Player1: " + PlayerHealth1 + "    Round: " + i + "   Player2 " + PlayerHealth2);

        winnerCheck();

        function winnerCheck (){
            if (PlayerHealth1<=0 && PlayerHealth2>=0){
                PlayerHealth1 = 0;
                alert("Game over! You lose..");
                BreakCheck = "end";
            }else if(PlayerHealth2<=0 && PlayerHealth1>=0 ){
                PlayerHealth2 = 0;
                alert("Game over! You win!");
                BreakCheck = "end";

            }
            else if(PlayerHealth1<=0 && PlayerHealth2<=0 ){
                alert("Tie");
                BreakCheck = "end";
            }



            else (fight ());}




        function fight (){
            PlayerHealth1 = PlayerHealth1 - PlayerDamage2;
            PlayerHealth2 = PlayerHealth2 - PlayerDamage1;
            if (PlayerHealth1<=0){
                PlayerHealth1 = 0;}
            if(PlayerHealth2<=0){
                PlayerHealth2 = 0;}



        }
        if (BreakCheck == "end"){
            break;

        }


    }

}












