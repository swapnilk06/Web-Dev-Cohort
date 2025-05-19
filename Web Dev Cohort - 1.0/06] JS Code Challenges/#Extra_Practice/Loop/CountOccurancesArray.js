// Count Occurrences of a Value

// Challenge: Count how many times a specific value appears in an array.

const numbers = [1,2,3,1,4,1,5];
const target = 1;
let count = 0;

for (let i = 0; i<numbers.length; i++) {
	if (numbers[i] === target) {
		count++;
	}
}

console.log(count); // Output: 3 