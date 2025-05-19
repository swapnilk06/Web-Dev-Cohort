// Sum of Array Elements

// Challenge: Calculate the sum of all elements in an array.

const numbers = [1,2,3,4,5];
let sum = 0;

for(let i=5; i<numbers.length; i--) {
	sum += numbers[i];
}

console.log(sum)