/**
 * Created with JetBrains WebStorm.
 * User: austinemayer
 * Date: 6/4/13
 * Time: 3:38 PM
 * To change this template use File | Settings | File Templates.
 */

var kabalHP = 100;
var kratosHP = 100;
var kabalAttack;
var kratosAttack;
var counter = 0;
var outcome;

function checkWin(kraHP, kabHP)
    {
        if (kraHP <= 0 && kabHP <= 0)
        {
            alert("Double KO!");
            outcome = "Double KO!";
            document.getElementById("outcome").innerHTML = outcome;
            kabalHP=100;kratosHP=100;counter=0;
        }
        else if(kabHP <= 0)
        {
            alert("Fatality! Kratos wins!");
            outcome = "Fatality! Kratos wins!";
            document.getElementById("outcome").innerHTML = outcome;
            kabalHP=100;kratosHP=100;counter=0;
        }
         else if (kraHP <= 0)
        {
            alert("Fatality! Kabal wins!");
            outcome = "Fatality! Kabal wins!";
            document.getElementById("outcome").innerHTML = outcome;
            kabalHP=100;kratosHP=100;counter=0;
        }

    }




    function kombat()
    {
        kabalAttack = Math.floor((Math.random()*25) +20);
        kratosAttack = Math.floor((Math.random()*25) +20);
        kabalHP = kabalHP - kabalAttack;
        kratosHP = kratosHP - kratosAttack;
        counter++;

        if(kabalHP < 0){kabalHP = 0}
        if(kratosHP < 0){kratosHP = 0}

        document.getElementById("kabalHP").innerHTML = kabalHP;
        document.getElementById("kratosHP").innerHTML = kratosHP;

        alert("Round: " + counter +"  Kabal HP: " + kabalHP+ " || " +  "Kratos HP: "+ kratosHP);
        checkWin(kratosHP,kabalHP);
    }









