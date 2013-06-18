/**
 * Created with JetBrains WebStorm.
 * User: LemonMyth
 * Date: 6/4/13
 * Time: 1:54 PM
 * To change this template use File | Settings | File Templates.
 */
/*
    Daniel O'Carroll
    1863459
    PWA1
    06/04/13
    Goal1-Duel
*/
 var yourHp = 100;
 var oppHp = 100;
 var yourDamage = Math.floor((Math.random()*25)+25);
 var oppDamage = Math.floor((Math.random()*25)+25);
 var hpCount;
 var yourName = prompt("Enter your heroes name: ", "");
 var oppName = prompt("Enter your enemy heroes name: ", "");


function winnerCheck(p1Hp, p2Hp)
{


   if(p1Hp > 0 && p2Hp <= 0)
   {
       if (yourHp < 0)
       {yourHp = 0;}
       else if (oppHp < 0)
       {oppHp = 0;}
       alert(yourName + "'s hp is: " + p1Hp + ". " + oppName + "'s hp is: " + "0" + ". You win!");
       hpCount = "End";
   }

    else if(p1Hp <= 0 && p2Hp > 0)
    {
        if (yourHp < 0)
        {yourHp = 0;}
        else if (oppHp < 0)
        {oppHp = 0;}
        alert(yourName + "'s hp is: " + "0" + ". "+ oppName +"'s hp is: " + p2Hp + ". You lose!");
        hpCount = "End";
    }

    else if(p1Hp <= 0 && p2Hp <= 0)
    {
        if (yourHp < 0)
        {yourHp = 0;}
        else if (oppHp < 0)
        {oppHp = 0;}
        alert(yourName + "'s hp is: " + "0" + ". " + oppName + "'s hp is: " + "0" + ". Double KO!");
        hpCount = "End";

    }
    else
        fight();

}

function fight()
{
  yourHp = yourHp - oppDamage;
  oppHp = oppHp - yourDamage;

}

function startFight()
{
  for (i = 0; i <= 9; i++)
{
    if(yourHp < 0)
    {yourHp = 0;}
    if(oppHp < 0)
    {oppHp = 0;}
    alert("Round " + (i + 1) + "! " + yourName + "" + "'s Hp: " + yourHp + ". " + oppName + "'s hp: " + oppHp);
    winnerCheck(yourHp,oppHp);
    if(hpCount == "End")
    {
        break;
    }
}
}