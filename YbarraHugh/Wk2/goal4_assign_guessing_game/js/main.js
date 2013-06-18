/**
 * GUESSING GAME:
 *
 * Created By:  Hugh Ybarra
 * Date: 
 * 
 * GUESSING GAME
 */

//Game variables

var myInput = document.getElementById("input");
var myOutput = document.getElementById("output");
var myNumber = Math.floor(Math.random()*10+1);
var valueCheck;
var inputValue;

var onThisButtonClick = function () {
    inputValue = myInput.value;
    console.log(myNumber);
    console.log(inputValue);

    if (inputValue.length == 0){
        valueCheck = false;
    }
    if (isNaN(inputValue)) {
//        console.log("is not a number");
        valueCheck = false;
    }
    if (!isNaN(inputValue)){
//        console.log("it is a Number")
        valueCheck = true;
    }


    if (valueCheck){
        if (inputValue == myNumber ){
            console.log("correct");
            myOutput.innerHTML = "Good Job You Got It.";
        }
        if (inputValue != myNumber){
            console.log("false");
            myOutput.innerHTML = "Wrong Guess Again. ";
        }
    }
}
