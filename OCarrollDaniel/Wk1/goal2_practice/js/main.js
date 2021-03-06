//Daniel O'Carroll | 1863459
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
    /*
    var myctr = 1;
    function myCounter()
    {
        myctr++;
        console.log('counter = ', myctr);

    }
    */


    //	2.  ANONYMOUS FUNCTION
     var myctr = 1;
    var myCounter = function()
    {
        myctr++;
        console.log('counter = ', myctr);
    };


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

    console.log(str1.charAt(4));
    console.log(str2.indexOf('m'));
    console.log(str1.length);
    console.log(abc.split(""));

//STUDENT ACTIVITY 1:
// Use substr() to console log 'JavaScript!' from str1.
console.log(str1.substr(7,11));

//STUDENT ACTIVITY 2:
// Use substring() to console log 'JavaScript' from str2.
console.log(str2.substring(0,10));

//STUDENT ACTIVITY 3:
// 1. Use toLowerCase() to console log the str1 all in lowercase letters.
// 2. Use toUpperCase() to console log the str1 all in uppercase letters.
 console.log(str1.toLowerCase());
 console.log(str1.toUpperCase());


/*
	===============================================
	MORE:  Numbers
	-----------------------------------------------
*/

console.log('------ MORE Numbers ----------');
 var number = 457896;
 var dec = 33.123456;

 console.log(number.toExponential(2));

 console.log(dec.toPrecision());

//STUDENT ACTIVITY 4:
// Use ??? to console dec with two decimals.
  console.log(dec.toFixed(2));

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
  var x = 9 * 'k';
  console.log(x);
  if(x)
  {
      console.log("It's true, the value is: ", x);
  }
  else
  {
      console.log("It's false, the value is: ", x);
  }

	
/*
	===============================================
	MORE:  Arrays
	-----------------------------------------------
*/

console.log('------ MORE Arrays ----------');

var arr1 = [1, 2, 3, 4, 5, 6, 7];
var arr2 = ['a', 'b', 'c', 'd', 'e'];
var arr3 = ['apple', 'orange', 50393, 7.324];

    console.log(arr2.indexOf('c'));

    console.log(arr2.join(','));

    var element = arr1.pop();
    console.log(element);

    arr2.push('f');
    console.log(arr2);

    console.log(arr1.reverse());

    console.log(arr1.splice(4,2));
    console.log(arr1);



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

    console.log(typeof 5);
    console.log(typeof "Hi");

    var str1 = "hello";
    console.log(typeof str1);

    console.log(typeof true);

    var fruit = "Chicken";

    switch (fruit){

        case "Oranges":
            console.log("Oranges are $0.59 a pound.");
            break;
        case "Apples":
            console.log("Apples are $0.32 a pound.");
            break;
        case "Bananas":
            console.log("Bananas are $0.48 a pound.");
            break;
        case "Pineapples":
            console.log("Pineapples are $0.92 a pound.");
            break;
        case "Strawberries":
            console.log("Strawberries are $0.59 a pound.");
            break;
        default:
            console.log("Sorry, all out of ", fruit);

    }

/*******************************************

 STUDENTS ACTIVITY 6:

	1.  create a "Switch" conditional that does the following:
		a.  have a var named "age" initialized to a number
		b.  if age 13 then console.log "child"
			if age 18 then console.log "adult"
			if no age then console.log "No answer"


********************************************/
      var mood = "sour";
        switch(mood)
        {
            case "sour":
                console.log("Why are you being so sour?!");
                break;
            case "happy":
                console.log("Gross, why are you always so happy?");
                break;
            case "sad":
                console.log("Who peed in your cherrios?");
                break;
            case "angry":
                console.log("Calm down, dawg!");
                break;
            default:
                  console.log("I've never heard of that emotion, weirdo.");


        }


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
    var bondsCars = function()
    {
        return[ 'ferrari', 'lambo', 'vwBug'];
        var cars = bondsCars();
        console.log("James Bond's cars: ",cars);
    };   */

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
  var numOfBeers = 10;
  while(numOfBeers > 0)
  {
      console.log(numOfBeers + ' kegs on the wall.');
      numOfBeers--;
  }
	
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
     var myNums = [1,2,3,4,5];
    console.log('length: ', myNums.length);

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
    for (var i = 0, j=myNums.length; i < j; i++)
    {
        console.log('1. Length in for loop: ', myNums[i]);
    }

	/*
		BREAK...

		- in some situations, you may need to force a loop to stop
		- by using the "break" statement, any loop will stop running at the 
			break point, and perform no more iterations
	*/
     for (i = 0, j = myNums.length; i<j; i++)
     {
       if(i===3)
       {
           console.log("testing out the break and it broke.");
           break;
       }
         console.log('2. Length in for loop: ', myNums[i]);
     }


	/*
		CONTINUE...

		- while the break statement will stop a loop and exit it, the continue 
			statement will stop a loop’s current iteration, and continue 
			on to the next iteration
	*/


/*******************************************

 STUDENTS ACTIVITY 7:

	1.  create an array with the following heroes
		(Superman, Batman, Wolverine, Iceman)

		a.  create a for loop using the slower method (3 parameters)
			- in the loop just console.log the values
		b.  create a for loop using the faster method (4 parameters)
			- in the loop just console.log the values			

********************************************/
 var heroes = ['Superman', 'Batman', 'Wolverine', 'Iceman'];

    for(i = 0; i < heroes.length; i++)
    {
        console.log(heroes[i]);
    }

    for(i = 0, max = heroes.length; i < max; i++)
    {
        console.log(heroes[i]);
    }


/*******************************************
    STUDENTS ACTIVITY 8: (More Practice):

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
    console.log(name.toLowerCase());
    console.log(name.toUpperCase());
    console.log(name.charAt(3));
    console.log(name.indexOf("nice"));
    console.log(name.substring(10,14));

   var nameArr = name.split(" ");
    console.log(nameArr);

    console.log(nameArr[4]);
    console.log(nameArr.join("|"));
    console.log(nameArr.reverse());
    console.log(nameArr.slice(1));
    console.log(nameArr);
    console.log(nameArr.push("NEW VALUE"));
    console.log(nameArr);

    nameArr.pop();
    console.log(nameArr);



})();