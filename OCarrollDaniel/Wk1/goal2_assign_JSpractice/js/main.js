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
    var numAverage = 0;
    var avgNumbers = function(arr){

        //CODE GOES HERE
        for(var i = 0, max = arr.length; i < max; i++)
        {
           numAverage = arr[i] + numAverage;
        }
        numAverage = numAverage /arr.length;
        return numAverage;
    };

    console.log('avg number = ', avgNumbers([1,2,3,4,5]));

    //--------------------------------------------------------
    console.log("2. concat first and last name");

        //PUT FUNCTION HERE
    function fullName(firstName, lastName)
    {
        var fullName = firstName + " " + lastName;
        return fullName;

    }

    console.log(fullName('James', 'Bond'));

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function";

        //PUT FUNCTION HERE
    function wordCount(longString)
    {
       var count = longString.split(" ");
       count = count.length;
        return count;


    }

    console.log(wordCount(ipsum));

    //--------------------------------------------------------
    console.log("4. sentence char count");

        //PUT FUNCTION HERE
    function charCount(longString)
    {
        var count = longString.length;
        return count;

    }

    console.log(charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

        //PUT FUNCTION HERE
    function vowelsInWord(word)
    {
        var vowels = 0;
        var letters = 0;
        letters = word.split('');
        console.log(letters);
        var vowelArr = ['a', 'e', 'i', 'o', 'u'];
        for(var i = 0, max = letters.length; i < max; i++)
        {

            for(var j = 0, max2 = vowelArr.length; j < max2; j++)
            {
              if(letters[i] == vowelArr[j])
              {
                  vowels++;
              }
            }


        }
        return vowels;

    }

    console.log(vowelsInWord('JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

        //PUT FUNCTION HERE
    function findNum(numArr, Bool)
    {
        var oddArr = new Array();
        var evenArr = new Array();
        if(Bool == false || null)
        {
            var counter = 0;
            for(var i = 0, max = numArr.length; i < max; i++)
            if(numArr[i]%2 == 1)
            {

             oddArr[counter] = numArr[i];
             counter++;
            }
            return oddArr;
        }
        else
        {
            var counter2 = 0;
            for(var j = 0, max2 = numArr.length; j < max2; j++)
                if(numArr[j]%2 == 0)
                {

                    evenArr[counter2] = numArr[j];
                    counter2++;
                }
            return evenArr;
        }

    }

    console.log(findNum([31,22,4,67,83,6,5,4], true));
    console.log(findNum([31,22,4,67,83,6,5,4], false));

})();