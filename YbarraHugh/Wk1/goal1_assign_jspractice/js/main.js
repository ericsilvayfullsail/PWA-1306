/**
 * Created with JetBrains WebStorm.
 * User: Hugh
 * Date: 6/6/13
 * Time: 9:34 PM
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
console.log("=== Question 4 ===");
var anotherString = "Yet another boring string of words.";
function charCount(someString){
     return someString.length;
}
theStringLength = charCount(anotherString);
console.log(theStringLength);
// =========================================
var usedWord = "Tenochtitlan";
function vowelsInWord(someWord){
    var vowelCounter = 0;
    for (var l = 0; l < someWord.length; l++){
        if (someWord[l] === "a" || someWord[l] === "e" || someWord[l] === "i" || someWord[l] === "o" || someWord[l] === "u"){ // not using y?
            vowelCounter ++;
        }
    }
    return vowelCounter;
}
console.log("=== Question 4 ===");
var numVowels = vowelsInWord(usedWord);
console.log(numVowels);
// =========================================
var aNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 0 ];
function findNum( numberArray, someBool){
    var evenArray = [];
    var oddArray = [];
    if (someBool){
        for (var m = 0; m < numberArray.length; m++){
            if (numberArray[m] % 2 == 0){
                evenArray.push(numberArray[m]);
            }
        }
        return evenArray;
    }// end if
    if (!someBool){
        for(var n = 0; n < numberArray.length; n++)
        {
            if (numberArray[n] % 2 != 0){
                oddArray.push(numberArray[n]);

            }
        }
        return oddArray;
    }// end else
}
console.log("=== Question 5 ===");
var evenNums = findNum(aNumberArray, true);
console.log("Even Nums: " + evenNums);
var oddNums = findNum(aNumberArray, false);
console.log("Odd Nums: " + oddNums);


