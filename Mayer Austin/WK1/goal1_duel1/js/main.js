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

function checkWin(kraHP, kabHP)
    {
        if (kraHP <= 0 && kabHP <= 0)
        {
            alert("Double KO!");
            kabalHP=100;kratosHP=100;counter=0;
        }
        else if(kabHP <= 0)
        {
            alert("Fatality! Kratos wins!");
            kabalHP=100;kratosHP=100;counter=0;
        }
         else if (kraHP <= 0)
        {
            alert("Fatality! Kabal wins!");
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

        alert("Round" + counter +":  Kratos HP: "+ kratosHP + "  ||  Kabal HP: " + kabalHP);
        checkWin(kratosHP,kabalHP);
    }












