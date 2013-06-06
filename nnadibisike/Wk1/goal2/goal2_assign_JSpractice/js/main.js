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

        //Created a varible to hold the avgrage
        var avg;
        // using a for loop to go through the array
        for(var i = 0; i > arr.length; i++)
        {
           avg = arr[i]++;
        }
        return avg;
    };

    console.log('avg number = ', avgNumbers([1,2,3,4,5]));

    //--------------------------------------------------------
    console.log("2. concat first and last name");

        //PUT FUNCTION HERE
    var fullName = function(first,last){
        var concat = first + " " + last;
        return concat;
    }

    console.log(fullName('James', 'Bond'));

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function"

        //PUT FUNCTION HERE
    var wordCount = function(words){
        var count = 0;

        for(var i = 0;i < words.length ;i++){
            if(words[i] == "")
            {
                count ++;
            }
        }
        return count;
    }

    console.log(wordCount(ipsum));

    //--------------------------------------------------------
    console.log("4. sentence char count");

        //PUT FUNCTION HERE
    var charCount = function(string){
        var countChar = 0;

        for(var i = 0;i < string.length ;i++){
            if(string[i] != "")
            {
                countChar ++;
            }
        return countChar;
        }
    }

    console.log(charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

        //PUT FUNCTION HERE
    var vowelsInWord = function(word){
        var number = 0;
        var split = [word.split("")];

        for(var i= 0; i < split.length; i++ ){
            if(split[i] == "a" || split[i] == "i"|| split[i] == "e"|| split[i] == "o"|| split[i] == "u" || split[i] == "A" || split[i] == "E" || split[i] == "I" || split[i] == "O" || split[i] == "U"){
                number++;
            }
        }

        return number;
    }

    console.log(vowelsInWord('JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

        //PUT FUNCTION HERE
    var findNum = function(arrNum,bool)
    {
        array = [];
        even_odd = true;


            if(bool != null)
            {
                even_odd = bool;
            }

        if(even_odd){
            for(var i = 0; arrNum.length; i++){
               if(arrNum[i] %2 == 0){
                   array.push(arrNum[i]);
               }
            }
        }else{
            for(var i = 0; arrNum.length; i++){
                if(arrNum[i] %2 == 1){
                    array.push(arrNum[i]);
                }

            }
        }
    }

    console.log(findNum([31,22,4,67,83,6,5,4]));
    console.log(findNum([31,22,4,67,83,6,5,4], false));

})();