
(function() {
    /*===============================================
     Matt Antonio
     June 6, 2013
     Goal 2 Assignment JSPractice
     ===============================================*/

    console.log("1. Create a function called avgNumbers");

    var averageNum = 0;

    var avgNumbers = function(numArray) {
        for(var i = 0, arrayLength = numArray.length; i < arrayLength; i++) {
            averageNum = numArray[i] + averageNum;
        }

        averageNum = averageNum / numArray.length;
        return averageNum;
    }

    console.log("The average number of the array is: " + avgNumbers([10, 33, 22]));

//************************************************

    console.log("2. Create a function called fullName");

    var fullName = function(firstName, lastName) {
        var myName = firstName + " " + lastName;
        return myName;
    }

    console.log("My name is " + fullName("Matt", "Antonio"));

//************************************************

    console.log("3. Create a function named wordCount");

    var stringOfWords = "JavaScript is so unbelievably awesome";

    var wordCount = function(words) {
        var countWords = words.split(" ");
        countWords = countWords.length;
        return countWords;
    }

    console.log(wordCount(stringOfWords));

//************************************************

    console.log("4. Create a function named charCount");

    var thisIsAString = "blah blah";

    var charCount = function(chars) {
        var countChars = chars;
        countChars = countChars.length;
        return countChars;
    }
    console.log(charCount(thisIsAString));

//************************************************

    console.log("5. Create a function named vowelsInWord");

    var vowelsInWord = function(word) {
        var vowels = 0;

        for(var i = 0; i < word.length; i++) {
            var vowel = vowels;

            if(vowel === +"a" ||
               vowel === +"e" ||
               vowel === +"i" ||
               vowel === +"o" ||
               vowel === +"u") {
                vowel++;
            }
        }
        return vowels;

    };

    console.log(vowelsInWord("Matt"));

//************************************************

    console.log("6. Create a function named findNum");



} )();
