Function.prototype.describe = function(){
	console.log(`Function name is ${this.name}`);
}

// function root structure or defination or syntax boilerplate can never change.
// e.g. function greet(){}

function greet(name){
	return `Hello ${name}`;
}

// greet("ashriwad").describe; // is not a function

// calling to describe fun
greet.describe(); // Function name is greet




// Task :
// - How to used "describe" in that?
// - What is goal of the "describe"?
// ```