// Largest of Two Integers

// Write a JavaScript program that displays the largest integer among two integers.

function LargestInteger(Onenumber, Twonumber) {

	if(Onenumber > Twonumber) {
		return `${Onenumber} is greater than ${Twonumber}.`;
	}
	else {
		return `${Twonumber} is greater than ${Onenumber}.`;
	}

}

console.log(`Largest integer among two integers is :`,LargestInteger(33,6));