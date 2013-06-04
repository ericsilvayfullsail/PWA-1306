/*
	PWA1 Lecture 3
	JavaScript Debugging & Scope
*/


(function(){

/*
	===================================================================
	Day 2 Recaps
*/

console.log('------ Recap from the previous lecture ----------');




/*
	===============================================
	ERROR TYPES: syntax, runtime, logic
*/
/*
	===============================================
	Debugging Techniques
		
	Syntax Errors:
		- Occur during parsing (when the script is being read by the browser)
		- Usually the result of missing a comma, or closing characters (quotes, brackets, parens)
		- One error will display at a time in your browswers console.log
		- Multiple syntax errors can occur
	
	Runtime Errors:
		- Occur during runtime (when the script is in execution)
		- Usually caused by misspelled variable names, undefined variables, or bad function declarations
		- Only 1 runtime error will happen at a time, fix & refresh
		
	Logic Errors:
		- Does not throw an actual error
		- This is what we call code that works but doesn't work correctly, there's a 'BUG'
		- The issue with these errors occur between your keyboard and the chair you are sitting in, Ha...
		- Infinite loops fall in this category	
*/

console.log('------ Debugging ----------');

/***********************

	//First
	var name = james, course = 'PWA1, month=3;
	console.log ("name: ", name + " / course: ", coures + " / month: ", month)


	//Second
	//string w/ escape charaters and mixed single/double quotes
	var phrase = 'he's in ' + '"PWA1'";
	console.log("phase 4: ", phr@se);


	//Third
	//nested conditional statement
	if (a === a){    //1st IF statement
		//execute this block of code if a is equal to a
		
		if (b === b){  //nested IF statement : 2nd IF statement
   			//execute this block of code if b is equal to b
   			console.log("In Nested if-else / b === b: True");
		}else{       //nested ELSE statement
			//execute block of code if the matching “IF” statement returns false
		};

	}else
		//execute this block of code if the 1st “IF” statement returns false
		console.log("nested conditional: 1st IF returned false);
	};


	//FOURTH
	var value1 = 'Sunny';
	var value2 = 10;
	
	var mood = function(weather, waves)

		if (weather = "Sunny"){
			if (waves === 10){
				Mood = 'PUMPED';
			}else if ((wave < 9) && (waves >= 5)){
				Mood = 'mellow';			
			}else{
				Mood = 'bummed';
			};	
	
		}else if (weather === 'Overcast'){
			if ((wave <= 10) !! (waves >= 7)){
				Mood = "JACKED UP";
			}else if ((waves <= 6) && (waves >= 3)){
				Mood = 'totally bummed';			
			)else{
				Mood = 'not happy';
			};

		}else{
			Mood = 'sad'
		};

		return Moood;
	};

	var moodType = mood(value1, value2);
	console.l0g('mood: ', moodType);
*****************/


/*
	===============================================
	ERROR TYPES: syntax, runtime, logic
	
	TRY, CATCH, THROW

	- This technique will catch RUNTIME ERRORS only.
	- The primary purchase is in production use vs development mode
	- The TRY statement allows you to define a block of code to be tested for errors 
		while it is being executed.
	- The CATCH statement allows you to define a block of code to be executed, if an 
		error occurs in the try block.
	- The THROW allow us to create custom errors.	

	Syntax:
	try
  		{
  			//Run some code here
  		}
	catch(err)
  		{
  			//Handle errors here
  		}


*/	



/*
	===================================================================
	Scope & Context

	- scope controls the visibility and lifetime of variables and parameters 
		- it defines where the variable is created, & where it can be accessed
	
	- javascript uses lexical scoping
		1.  a “scope level” will check parent levels for variables, and
		2.  a new “scope level” in javascript can only be made with a function
	- if a variable doesn’t exist in the current scope, through lexical scoping 
		it will try to find the variable in a parent block	
		
	- Local variables override higher scoped variables
	
	
	- all variables defined in a code block using {...} are not visible from 
		outside of the block - the code block is normally defined in a function
	-	variables defined in the code block are released when execution of the 
		block is finished
	- 	each function has it's own scope	

		var globalVar = “jamesBond”;
		function functionName(){
			//you can use globalVar in this function
		}                
 			//you can use globalVar outside of the function


	- the 1st num is a global variable & will live for the life of the program
  	- the 2nd num is a local variable & will last only as long as the function
		
		var num = 1;       //this is the 1st num                 

		function myCounter ( ) {
			var num = 50;  //this is the 2nd num                            
		};


	More Examples:
	function functionName(var1){
		//you can use var1 in this function
	}                
		//you cannot use var1 after the function	


	function functionName(){
		var localVar = “jameBond”;
			//you can use localVar in this function
		}                
			//you cannot use localVar after the function

	function functionName(){
		shouldBeLocalVar = “jamesBond”;

			//without the var, this is actually a Global variable!
			//you can use shouldBeLocalVar in this function
	}                
		//you can use shouldBeLocalVar outside of the function

*/
console.log("---------- Scope & Context ----------------");


/*
	===================================================================
	Closure

	- Whenever you see the function keyword within another function, the inner function 
		has access to variables of the outer function.
*/



/*
	- This will always console.log 16, because bar can access the x which was defined as an 
		argument to foo, and it can also access tmp from foo.

	- That is a closure. A function doesn't have to return in order to be called a closure. 
		Simply accessing variables outside of your immediate lexical scope creates a closure.

	- The inner function will close-over the variables of foo before leaving.

*/



})(); // end wrapper