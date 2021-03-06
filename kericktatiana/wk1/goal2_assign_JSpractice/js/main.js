//Tatiana Kerick - Goal 2
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
		
		var arr = [1,3,5,7,9,11,13]
		
		var sum = eval(arr.join("+"));
		
		var average = sum / arr.length
		
		return average;
    };

    console.log('avg number = ', avgNumbers([1,2,3,4,5]));

    //--------------------------------------------------------
    console.log("2. concat first and last name");

       var fullName = function(firstname, lastname){
        	var firstname = "Tatiana";
        	var lastname = "Kerick";
        	
        	return [firstname, lastname];
        }

    console.log(fullName('James', 'Bond'));

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function"

        var wordCount = function(text){
        	var count = 0;
        	
        	text = text.split(" ");
        	
        	for(var i = 0; i < text.length; i++){
        		if(text[i] != ""){
        			count += 1;
        		}
        	}
        	
        	return count;
        };
        
    console.log(wordCount(ipsum));

    //--------------------------------------------------------
    console.log("4. sentence char count");

       var charCount = function(str){
        	var count = 0;
        	
        	for(var i = 0, j = str.length; i < j; i++){
        		if(str[i] != " "){
        			count++;
        		}
        	}
        	return count;
        }

    console.log(charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

        var vowelsInWord = function(vowel){
        	var count = 0;
        	for(var i = 0, j = vowel.length; i < j; i++){
        		switch(vowel[i]){
        			case "a":
        				count++;
        				break;
        			case "e":
        				count++;
        				break;
        			case "i":
        				count++
        				break;
        			case "o":
        				count++
        				break;
        			case "u":
        				count++;
        				break;
        		}
        	}
        	return count;
        }

    console.log(vowelsInWord('JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

		var findNum = function(arr, boo){
			newArray = [];
			checkEven = true;
			
			if(boo != null){
				checkEven = boo;
			}
			
			if(checkEven){
				for(var i = 0, j = arr.length; i < j; i++){
					if(arr[i] % 2 == 0){
						newArray.push(arr[i]);
					}
				}
				
			}
			else{
				for(var i = 0, j = arr.length; i < j; i++){
					if(arr[i] % 2 == 1){
						newArray.push(arr[i])
					}
				}
			}
			
			return newArray;
		}
		
    console.log(findNum([31,22,4,67,83,6,5,4]));
    console.log(findNum([31,22,4,67,83,6,5,4], false));

})();