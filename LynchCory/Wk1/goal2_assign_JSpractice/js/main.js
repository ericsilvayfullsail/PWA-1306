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
         - console.log the answer outside of the function             //
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    var numbers = [43,54,87,52,90];
    var avgNumbers = function(arr){

               return (arr[0]+arr[1]+arr[2]+arr[3]+arr[4])/numbers.length;

    };

    console.log('avg number = ', avgNumbers(numbers));

    //--------------------------------------------------------
    console.log("2. concat first and last name");

        function fullName (x,y){

            return x+y;
        }


    console.log(fullName('James', 'Bond'));

    //------------------------------------------------------------

    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function";
    var countString;
    function wordCount(C){

        countString = C.split(" ");
        countString = countString.length;
        return countString;

    }




    console.log(wordCount(ipsum));

    //--------------------------------------------------------
    console.log("4. sentence char count");




    //need help with problem # 4
    function charCount(chars){

        return chars.length;

    }



    console.log(charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");
    var characters = 0;
    var vowelCount = 0;
       function vowelsInWord (word){

           for (i=0;i<=word.length;i++){

              characters = word.charAt(i);

               if (    (characters == 'A')   ||  (characters == 'a')
                   ||  (characters == 'E')   ||  (characters == 'e')
                   ||  (characters == 'I')   ||  (characters == 'i')
                   ||  (characters == 'O')   ||  (characters == 'o')
                   ||  (characters == 'U')   ||  (characters == 'u')  ) {


                       vowelCount++;

               }

           }

           return word + " has " + vowelCount + " vowels.";
       }



    console.log(vowelsInWord("JavaScript"));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");




    //

    console.log(findNum([31,22,4,67,83,6,5,4]));
    console.log(findNum([31,22,4,67,83,6,5,4], false));

})();