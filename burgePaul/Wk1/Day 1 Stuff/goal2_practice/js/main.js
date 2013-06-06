/*
    Week1 / Goal2 JavaScript Practice
*/

// scope wrapper (self executing function)
(function(){
	
/* 
	===============================================
	RESEARCHING
	-----------------------------------------------
	To find documentation, use http://dochub.io
*/	
	
	
/* 
	===============================================
	RECAP:  Data Types
	-----------------------------------------------
	"string"						string literal
	3.14							number literal
	1								number literal
	10e10							number literal
	["a", "b", "c"]					array literal
	function(arg, arg2){}			function literal
	undefined						undefined
*/
	

/*
	===============================================
	RECAP:  Variable Declarations
	-----------------------------------------------
	Comma separated, undefined declarations, recap array syntax and objects
*/

console.log('------Recap Variables ----------');



/*
	===============================================
	RECAP:  conditionals
	-----------------------------------------------
	arguments, returns, chaining, variable scope

	a CONDITION is a boolean test between two values, the resulting boolean can be saved 

		comparison operators:
		<, >, >=, <=,!=,!==,!
		Sort: A-Za-z

		conditional syntax:
			if (condition) {
	  			//block of code or‘actions’
			};

		== 	is the equality operator, does not check against data type
		=== is the identity operator, checks data type match - will use this

        Best Practice:  Use identity operator 99% of the time
*/	

console.log('------Recap Conditionals ----------');


	/* 	==============================================================
		if - else statements (allows only for one option)
			
		if (a < b){
			//execute this block of code if a is less than b
		}else{
			//execute this block of code
		};
  		================================================================
  	*/



	/* 	==============================================================
		if - else if - else statements (allows for multiple conditionals

		if (a < b){
			//execute this block of code if a is less than b
		}else if{
			//execute this block of code
		}else{
			//execute this block of code
		};
  		================================================================
  	*/



  	/*
	  	&& = AND
	  	|| = OR
	*/ 



	/*
		Ternary conditional:

		conditional ? true : false;

			same as

				if (weather === "Cloudy"){
					mood = 
				}else{
					//false
				};
	*/


/*
	===============================================
	RECAP:  Functions
	-----------------------------------------------
	arguments, returns, chaining, variable scope
*/

console.log('------Recap Functions ----------');

    //	1.  BASIC FUNCTION:



    //	2.  ANONYMOUS FUNCTION



    //Anonymous passing arguments



/*******************************************************************
 	REVIEW COMPLETE
*******************************************************************/


/*
	===============================================
	MORE:  Strings
	-----------------------------------------------
*/

console.log('------ MORE Strings ----------');

var str1 = 'I love JavaScript! ';
var str2 = 'JavaScript loves me!';
var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


//STUDENT ACTIVITY 1:
// Use substr() to console log 'JavaScript!' from str1.


//STUDENT ACTIVITY 2:
// Use substring() to console log 'JavaScript' from str2.


//STUDENT ACTIVITY 3:
// 1. Use toLowerCase() to console log the str1 all in lowercase letters.
// 2. Use toUpperCase() to console log the str1 all in uppercase letters.



/*
	===============================================
	MORE:  Numbers
	-----------------------------------------------
*/

console.log('------ MORE Numbers ----------');


//STUDENT ACTIVITY 4:
// Use ??? to console dec with two decimals.


/*
	===============================================
	MORE:  Booleans

	TRUTHY / FALSY
	-----------------------------------------------
	Because of JavaScript's loose syntax, some values are == false, 
	we call these FALSY.
		
		false 		== false  	| true
		0 			== false	| true
		"" 			== false	| true
		undefined 	== false	| true  //var does not exist
		NaN 		== false	| true 
	
	So the following conditional fails...
	-----------------------------------------------
*/

console.log('------ MORE Booleans ----------');


	
/*
	===============================================
	MORE:  Arrays
	-----------------------------------------------
*/

console.log('------ MORE Arrays ----------');

var arr1 = [1, 2, 3, 4, 5, 6, 7];
var arr2 = ['a', 'b', 'c', 'd', 'e'];
var arr3 = ['apple', 'orange', 50393, 7.324];
	

/*******************************************
STUDENTS ACTIVITY 5:

1.  combine the firstQtr and secondQtr arrays below and console.log the results
2.  combine ALL three arrays below and console.log the results
	- store this array in a variable called "combined".

Use the "combined" variable for the below:
3.  join the array elements into a string and console.log the results
4.  remove the last element of an array and console.log the results and the new array
5.  use array "secondHalfYr", and reduce the array to "Sept" & "Oct" 
	and console.log the results
********************************************/




/*
	===============================================
	MORE:  Operators (typeof())
	-----------------------------------------------
	
	How to test for a variable's existence (typeof)	
*/

console.log('------ MORE Operators - typeof() ----------');


/*
	===============================================
	MORE:  Conditionals (switch())
	-----------------------------------------------
	
	- “if” conditionals are perfect for comparing several sets of varying conditions  
	- switch statements will evaluate a single conditional expression and
		then perform an equality check against possible cases

	Traditional IF and IF Else
	if (condition) {
		// statements1
	};

	if (condition) {
		// statements1
	} else {
		// statements2
	};	

*/

console.log('------ MORE Conditionals - Switch ----------');

/*******************************************

 STUDENTS ACTIVITY 6:

	1.  create a "Switch" conditional that does the following:
		a.  have a var named "age" initialized to a number
		b.  if age 13 then console.log "child"
			if age 18 then console.log "adult"
			if no age then console.log "No answer"


********************************************/



/*
	===============================================
	MORE:  Functions
	-----------------------------------------------

	- we reviewed returns and we went through examples with returns only 
		returning one value
	- below shows how to returning multiple values using arrays

*/

console.log('------ MORE Functions ----------');


	/* 
		Self Executing Functions
	
		(function(){   //this is a basic function which includes () at end
			//code goes here
		})();          //the () tells the function to run immediately

		Normal function:
			var fn = function(){};  //a normal function
		
			fn();	//invoking the fn function

			self function - combining the 2 statement above
				var fn = (function(){})();	
	*/	


/*
	===============================================
	For / While Loop, basic logic structure
	-----------------------------------------------
	
	Normal Operations:
		1. initialize a counter;
		2. loop/repeat a block of code until condition is met;
			the condition that a loop checks for is usually against the counter variable
		3. the most common use of loops is to cycle through all the 
			values of an array or other forms of data set (such as objects)
		4. a counter is needed in the loop - which is a simple numeric 
			variable that increases or decreases 
			- common variable names for counters are i and x - most developers 
				reserve these names for this purpose

	WHILE LOOP:  while()
		- the while loop is the simplest conditional loop
		- before the code is executed, the condition is checked
		- if it evaluates to true, the code is run, and the loop returns to the 
			condition check again
		- it will repeat this process until the condition becomes false, which 
			will then skip the code and exit the loop
		
		Basic While Loop:
			while ( condition ) {
				//code goes here
			}			
*/
console.log('------ While / Loop ----------');

	
/*
	===============================================
	For Loop, prebuilt logic structure
	
	for(initialize; condition; increment){}

	FOR LOOP: for()
		- a for loop is an increment-based loop, where the increment is 
			part of the condition
		- there are 3 statements inside the condition of a for loop: 
			a.  first a counter variable is initialized
			b.  second the “condition check”
			c.  and third, increment the variable and perform the code 
				till the end of the loop 
			d.  each is separated by semicolon, just like normal statements

		Basic FOR Loop:
			for ( var i = 0;  i < 5;  i++ ) {
				//code goes here
			};
*/

console.log('------For Loop ----------');


	/* 
		array.Length
	
		- if we wanted to cycle through all the values in an array, 
			we need to know how many values are in the array
		- this is where the .length property comes in - this will return 
			a number value, equal to the number of elements in the array 
		- an array’s numeric index begins at 0  
		- in the example below, the last index of the array would be 4 
			- the  .length property returns the count, which would be 5	
	*/	


	/* 
		using the for() loop with .length

		- the for loop is the most commonly used in programming, since 
			the increment makes it easy to cycle through arrays or objects.  
		- to cycle through each index of an array, we could use the .length 
			property, and use the counter i as the index, such as:

		for ( var i=0; i<myNums.length; i++){
			console.log( myNums[i] );
		};

		- however, this is not the most efficient way...
		- it is inefficient on the CPU

		- depending on the size of an array, it can be more efficient to 
			save the array length in a variable, inside the first statement
	*/


	/*
		BREAK...

		- in some situations, you may need to force a loop to stop
		- by using the "break" statement, any loop will stop running at the 
			break point, and perform no more iterations
	*/



	/*
		CONTINUE...

		- while the break statement will stop a loop and exit it, the continue 
			statement will stop a loop’s current iteration, and continue 
			on to the next iteration
	*/


/*******************************************

 STUDENTS ACTIVITY 7:

	1.  create an array with the following heros 
		(Superman, Batman, Wolverine, Iceman)

		a.  create a for loop using the slower method (3 parameters)
			- in the loop just console.log the values
		b.  create a for loop using the faster method (4 parameters)
			- in the loop just console.log the values			

********************************************/



/*******************************************
 STUDENTS ACTIVITY 8:

	1.  create a function named 'avgNumbers'
		- accept 1 parameter that will be an array of unlimited numbers
		- find the average of all the numbers
		- output the answer

	2.  create a function named 'fullName'
		- accept 2 parameters that are strings (firstname and lastname)
		- return the name after it has been concatenated
		- output the answer outside of the function

	3.  create a function named 'wordCount'
		- accept 1 parameter that is a long string of text
		- return length of the array of string characters
		- output the answer outside of the function

	4.  create a function named 'charCount'
		- accept 1 parameter that is a long string of text
		- return length of the array of string characters
		- output the answer outside of the function
	
	5.  create a function named 'vowelsInWord'
		- accept 1 parameter that is a a one word string
		- return the number of vowels in the word
		- output the answer outside of the function
		
	 6.  create a function named 'findNum'
		- accepts 2 parameters - 1. array of numbers, 2. boolean
		- if the second parameter being passed is "false" then 
			a. create an array with all of the odd numbers from 
				the array
		- else - create an array with all of the even numbers
				from the array 		
		- return the array
		- output the answer outside of the function
********************************************/
console.log('------ FUNCTION DEVELOPMENT ----------');


/*******************************************
    STUDENTS ACTIVITY 9: (More Practice):

     1.  output "name" in lowercase
     2.  output "name" in uppercase
     3.  output the character in the 3rd index
     4.  output the index number where the work "nice" us located
     5.  output the characters in "name" between indexes 10 & 14
     6.  create a array variable using "name", and output the array
     7.  output the item in index 4
     8.  join all elements of the array separated by a "|"
     9.  output the array in reverse order
     10. output the current array without the first item
     11. output the array with a new item at the end of the array
     - add "NEW VALUE"
     12. output the array without "NEW VALUE"
********************************************/

    console.log('------ More PRACTICE ----------');

    var name = 'This is a nice change of pace';



})();