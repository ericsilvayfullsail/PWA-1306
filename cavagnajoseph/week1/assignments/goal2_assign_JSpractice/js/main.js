// Joseph Cavagna  
// June 6, 2013
// Goal2 JS Practice


// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    var avgNumbers = function(arr){

        var avgNum = 0;

        for (var i = 0, j = arr.length; i < j; i++) {
                avgNum += arr[i];
            }

        return avgNum / arr.length;
    }

    console.log('avg number = ', avgNumbers([1,2,3,4,5]));

    //--------------------------------------------------------
    console.log("2. concat first and last name");

    var fullName = function(first, last){
        var full = first + " " + last;
        return full;
    }

    console.log(fullName('James', 'Bond'));

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function"

    var wordCount = function(sentence){
        var counter = 1;

        for (var i = 0, j = sentence.length; i < j; i++) {
                
                if(sentence[i] == " "){
                    counter++;
                }
            }
        return counter;
    }

    console.log(wordCount(ipsum));

    //--------------------------------------------------------
    console.log("4. sentence char count");

    var charCount = function(sentence){
        var counter = 0;

        for (var i = 0, j = sentence.length; i < j; i++) {
                
                if(sentence[i] != " "){
                    counter++;
                }
            }
        return counter;
    }

    console.log(charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

    var vowelsInWord = function(word){
        var counter = 0;

        for (var i = 0, j = word.length; i < j; i++) {
                
                if(word[i] == "a" || word[i] == "A" 
                    || word[i] == "e" || word[i] == "E" 
                    || word[i] == "i" || word[i] == "I" 
                    || word[i] == "o" || word[i] == "O" 
                    || word[i] == "u" || word[i] == "U" ){
                    counter++;
                }
            }
        return counter;
    }

    console.log(vowelsInWord('JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

    var findNum = function(array, bool){
        newArray = [];
        evenOrOdd = true;

        if(bool != null)
        {
            evenOrOdd = bool;
        }
        

        if(evenOrOdd){
            for (var i = 0, j = array.length; i < j; i++) {
                if(array[i] %2 == 0){
                    newArray.push(array[i]);
                }
            }
        }else{
             for (var i = 0, j = array.length; i < j; i++) {
                if(array[i] %2 == 1){
                    newArray.push(array[i]);
                }
            }
        }
        return newArray;
    }

    console.log(findNum([31,22,4,67,83,6,5,4]));
    console.log(findNum([31,22,4,67,83,6,5,4], false));

})();