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
	/*
		OR
		console.log(concat(firstName, lastName));
	*/
}

console.log("My name is "+ fullName(first, last));

// Problem 3
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit est fringilla vulputate viverra. Suspendisse in scelerisque ligula. Vivamus mollis libero orci, congue hendrerit tellus venenatis ac. Nam interdum mi eget leo malesuada, sit amet vulputate velit lacinia. Nulla pharetra condimentum euismod. Aenean ultricies leo vitae libero cursus, eu lacinia urna porttitor. Donec non vestibulum mauris, in vestibulum dolor. Nullam adipiscing vel libero et ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat diam lorem, et egestas tortor viverra sit amet. Praesent consectetur justo at lectus ornare tristique. Quisque varius tellus turpis. Pellentesque non erat dictum, egestas odio a, congue odio. In felis orci, fringilla quis dapibus quis, luctus non mauris.";
function wordCount(param1){
	var count = 0;
	for (var i = 0, j = param1.length; i < j; i++) {
		if(param1[i] == " "){
			count++;
		};
	};
	return count;
}
console.log(wordCount(text));

// Problem 4
var text = "Hello World!";
function charCount(param1){
	var count = 0;
	for (var i = 0, j = param1.length; i < j; i++) {
		if(param1[i] != " "){
			count++;
		}
	};
	return count;
}
console.log(charCount(text));






