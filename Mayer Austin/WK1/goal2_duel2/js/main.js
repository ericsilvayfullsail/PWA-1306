/**
 * Created with JetBrains WebStorm.
 * User: austinemayer
 * Date: 6/4/13
 * Time: 3:38 PM
 * To change this template use File | Settings | File Templates.
 */
//Austin Mayer
var counter = 0;
var outcome;
var player1 = ["Kabal",100,Math.floor((Math.random()*20) +15)];
var player2 = ["Kratos",100,Math.floor((Math.random()*20) +15)];

function checkWin(kraHP, kabHP)
    {
        if (kraHP <= 0 && kabHP <= 0)
        {
            alert("Double KO!");
            outcome = "Double KO!";
            document.getElementById("outcome").innerHTML = outcome;
            player1[1]=100;player2[1]=100;counter=0;
        }
        else if(kabHP <= 0)
        {
            alert("Fatality! Kratos wins!");
            outcome = "Fatality! Kratos wins!";
            document.getElementById("outcome").innerHTML = outcome;
            player1[1]=100;player2[1]=100;counter=0;
        }
         else if (kraHP <= 0)
        {
            alert("Fatality! Kabal wins!");
            outcome = "Fatality! Kabal wins!";
            document.getElementById("outcome").innerHTML = outcome;
            player1[1]=100;player2[1]=100;counter=0;
        }
         return outcome;
    }




    function kombat()
    {
        player1[1] = player1[1] - player2[2];
        player2[1] = player2[1] - player1[2];
        counter++;

        if(player1[1] < 0){player1[1] = 0}
        if(player2[1] < 0){player2[1] = 0}

        document.getElementById("kabalHP").innerHTML = player1[1];
        document.getElementById("kratosHP").innerHTML = player2[1];

        alert("Round: " + counter + "  " + player1[0] + " HP: " + player1[1]+ " || " + "  " + player2[0] + "  HP: "+ player2[1]);
        checkWin(player2[1],player1[1]);
    }









