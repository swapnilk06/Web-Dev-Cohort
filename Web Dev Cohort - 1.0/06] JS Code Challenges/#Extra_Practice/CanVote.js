// Create a function that checks if a person is eligible to vote based on their age. In most countries, the legal voting age is 18.

function CanVote(age) {
	if (age >= 18) {
		return `Eligible to vote.`;
	}
	else {
		return `Not-eligible to vote.`;
	}
}

console.log("Age 18 is ",CanVote(18));
console.log("Age 5 is", CanVote(5));