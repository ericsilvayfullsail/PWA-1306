/**
 * Created with JetBrains WebStorm.
 * User: Hugh
 * Date: 6/6/13
 * Time: 9:34 PM
 * To change this template use File | Settings | File Templates.
 */
function avgNumbers( x ){
    var tempNumber = 0;
    var average = 0;
    for (var i = 0; i < x.length; i++){
        tempNumber += x[1];
    }
    average = tempNumber/ x.length;
    return average;
}
var someArray = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 0];
var avgNums = avgNumbers(someArray);
console.log("=== Question 1 ===");
console.log(avgNums);
// =========================================
var first = "Hugo";
var last = "Ybarra";
var userFullName = "";
function fullName(firstName, lastName){
    userName = firstName.concat(lastName);
    return userName;
}
console.log("=== Question 2 ===");
userFullName = fullName(first, last);
console.log(userFullName);
// =========================================
var mySentence = "this is a very simple sentence";
function wordCount( someString ){
    var tempArray = [];
    var spaceCounter = 0;
    for (var i = 0; i < someString.length; i++){
        tempArray.push(someString.charAt(i));
    }
    for (var j = 0; j < tempArray.length; j++){
         if (tempArray[j] == " "){
            spaceCounter ++;
         }
    }
    return spaceCounter+1;// I came up with this logic on my own. Not very efficient but it works if
    // the user uses proper grammar lol.
}
console.log("=== Question 3 ===");
var numWords = wordCount(mySentence);
console.log("Number of words = "+ numWords)
// =========================================
//reate a function named 'charCount'
//    - accept 1 parameter into the function that is a long string
// text - return length of the array of string characters
//- console.log the answer outside of the function
console.log("=== Question 4 ===");