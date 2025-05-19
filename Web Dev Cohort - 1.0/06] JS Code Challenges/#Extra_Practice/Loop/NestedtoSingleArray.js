// Flatten a Nested Array

// Challenge: Convert a nested array into a single array.

const nestedArray = [[1, 2], [3, 4], [5]];
let singleArray = [];

for (let i = 0; i < nestedArray.length; i++) {
	for (let j = 0; j < nestedArray[i].length; j++) {
	  flatArray.push(nestedArray[i][j]);
	}
  }
  
  console.log(flatArray); // Output: [1, 2, 3, 4, 5]
