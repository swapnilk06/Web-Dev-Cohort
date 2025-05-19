// You have a basket of apples, but you decide to give some away to your neighbor. How many apples are left in your basket?

// Challenges
// Write a function that substracts the number of apples given away from the total apples you started with, then returns the remaining apples.


function remainingApples(totalApples, givenAway) {
	return totalApples - givenAway
}

console.log("Remaining Apples are :", remainingApples(20,2));