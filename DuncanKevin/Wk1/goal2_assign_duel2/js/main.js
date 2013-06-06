/**
 * Created with JetBrains WebStorm.
 * User: kevin
 * Date: 6/4/13
 * Time: 3:40 PM
 * To change this template use File | Settings | File Templates.
 */
    //Kevin Duncan 3766683





var array1=["Kabal",100,Math.floor((Math.random()*25) +25)];
var array2=["Kratos",100,Math.floor((Math.random()*25) +25)];
myBreak=0;
function main(){
    for (i=0;i<=10;i++){
    alert(array1[0]+ array1[1]+"Round:"+" "+i+" "+array2[0]+ array2[1]);


    winnerCheck();

    if (myBreak=="jke"){
    break;
    }




}

function fight()
        {

            array1[1]=array1[1]-array2[2]
            if (array1[1]<0){
            array1[1]=0;

            }
array2[1]=array2[1]-array1[2]
if(array2[1]<0)
            {array2[1]=0;
                }
}
function winnerCheck(){

    if (array1[1]<=0 && array2[1] > 0){
    array1[1]=0;
    alert("Kabal Loses");
    myBreak="jke";
    }
else if (array2[1]<=0 && array1[1] > 0)
            {    array2[1]=0;
                alert("Kratos Loses!");
                myBreak="jke";


                }

    else if (array1[1]<=0 && array2[1]<=0){
            alert("No Winner");
            myBreak="jke";
            }
        else {
            fight();
            }


        }}




