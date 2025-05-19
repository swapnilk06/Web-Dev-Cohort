// You're packing chocolate bars into gift boxes. Each box must contain the same number of chocolate bars. How many chocolate bars do you need for all the boxes?

// Challenge 
// Create a function that multiplies two numbers(chocolate bars per box and numbers of boxes) and returns the total numbers of chocolate bars needed.

function TotalChocolatebars(barsperBox, numberofBoxes) {
	total =	barsperBox * numberofBoxes
	return total
}

console.log("Total numbers of chocolate bars needed are :", TotalChocolatebars(15,3));
