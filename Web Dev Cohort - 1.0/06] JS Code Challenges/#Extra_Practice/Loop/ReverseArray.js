// Reverse an Array

// Challenge: Reverse the elements of an array.

const numbers = [1,2,3,4,5]
let reversed = [];

for (let i = numbers.length - 1; i >= 0; i--) {
	reversed.push(numbers[i]);
}


console.log(reversed); // Output: [5, 4, 3, 2, 1]