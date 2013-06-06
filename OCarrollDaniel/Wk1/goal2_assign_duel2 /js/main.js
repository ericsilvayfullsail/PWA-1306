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

 var hpCount;

 var fighter1 = [prompt("Enter your heroes name: ", ""), 100, Math.floor((Math.random()*25)+25)];
 var fighter2 = [prompt("Enter your enemies name: ", ""), 100, Math.floor((Math.random()*25)+25)];
function winnerCheck(p1Hp, p2Hp)
{


   if(p1Hp > 0 && p2Hp <= 0)
   {
       if (fighter1[1] < 0)
       {fighter1[1] = 0;}
       else if (fighter2[1] < 0)
       {fighter2[1] = 0;}
       alert(fighter1[0] + "'s hp is: " + p1Hp + ". " + fighter2[0] + "'s hp is: " + "0" + ". You win!");
       hpCount = "End";
   }

    else if(p1Hp <= 0 && p2Hp > 0)
    {
        if (fighter1[1] < 0)
        {fighter1[1] = 0;}
        else if (fighter2[1] < 0)
        {fighter2[1] = 0;}
        alert(fighter1[0] + "'s hp is: " + "0" + ". "+ fighter2[0] +"'s hp is: " + p2Hp + ". You lose!");
        hpCount = "End";
    }

    else if(p1Hp <= 0 && p2Hp <= 0)
    {
        if (fighter1[1] < 0)
        {fighter1[1] = 0;}
        else if (fighter2[1] < 0)
        {fighter2[1] = 0;}
        alert(fighter1[0] + "'s hp is: " + "0" + ". " + fighter2[0] + "'s hp is: " + "0" + ". Double KO!");
        hpCount = "End";

    }
    else
        fight();

}

function fight()
{
  fighter1[1] = fighter1[1] - fighter2[2];
  fighter2[1] = fighter2[1] - fighter1[2];

}

function startFight()
{
    alert("Match Start! " + fighter1[0] + "'s hp is: 100. " + fighter2[0] +"'s hp is: 100." );
  for (i = 0; i <= 9; i++)
{
    if(fighter1[1] < 0)
    {fighter1[1] = 0;}
    if(fighter2[1] < 0)
    {fighter2[1] = 0;}
    alert("Round " + (i + 1) + "! " + fighter1[0] + "" + "'s Hp: " + fighter1[1] + ". " + fighter2[0] + "'s hp: " + fighter2[1]);
    winnerCheck(fighter1[1],fighter2[1]);
    if(hpCount == "End")
    {
        break;
    }
}
}