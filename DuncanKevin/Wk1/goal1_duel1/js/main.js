/**
 * Created with JetBrains WebStorm.
 * User: kevin
 * Date: 6/4/13
 * Time: 3:40 PM
 * To change this template use File | Settings | File Templates.
 */
    //Kevin Duncan
var player1health=100;
var player2health=100;
var player1Damage= Math.floor((Math.random()*25) +25);
var player2Damage= Math.floor((Math.random()*25) +25);
var myBreak=0;

function main(){
    for (i=0;i<=10;i++){
        alert("Kabal:"+" "+player1health+" "+"Round:"+" "+i+" "+"Kraytos:"+" "+ player2health);

        winnerCheck();

        if (myBreak=="jke"){
            break;
        }




    }

    function fight()
    {

        player1health=player1health-player2Damage;
        player2health=player2health-player1Damage;
        if (player1health<0){
            player1health=0;

        }

        if(player2health<0)
        {player2health=0;
        }
    }
    function winnerCheck(){

        if (player1health<=0 && player2health > 0){
            player1health=0;
            alert("Kabal Loses");
            myBreak="jke";
        }
        else if (player2health<=0 && player1health > 0)
        {    player2health=0;
            alert("Kratos Loses!");
            myBreak="jke";


        }

        else if (player1health<=0 && player2health<=0){
            alert("No Winner");
            myBreak="jke";
        }
        else {
            fight();
        }


    }}

