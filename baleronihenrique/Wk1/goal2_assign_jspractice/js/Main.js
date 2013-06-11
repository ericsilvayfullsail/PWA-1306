/*
	Name:	Henrique Baleroni
	Date:	6/11/2013
	Assig:	Goal 2 JS Pratice
*/


// Beginning of assignment

// Problem 1
var example = [10, 10, 10, 10, 10, 10] ;
function avgNumbers(param1){
	var average = 0;
	for (var i = 0; i <= (param1.length - 1); i++) {
		average += param1[i];
		console.log(param1[i]);
	};
	return (average / param1.length);
}

console.log("The average of the numbers is ", avgNumbers(example));

// Problem 2
var first = "Henrique";
var last  = "Baleroni"
function fullName(firstName, lastName){
	return(firstName+' '+lastName);
}

console.log("My name is "+ fullName(first, last));
