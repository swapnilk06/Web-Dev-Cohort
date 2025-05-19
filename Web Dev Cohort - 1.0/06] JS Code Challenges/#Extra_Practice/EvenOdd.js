// Create a function that checks if a given number is even or odd using a simple if/else statement.

function EvenOdd(number) {
	if (number % 2 == 0) {
		return `${number} is Even`;
	}
	else {
		return `${number} is Odd`;
	}
}

console.log(EvenOdd(3));
console.log(EvenOdd(8));
