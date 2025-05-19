// Problem Statement:
// Write a function to determine if a given year is a leap year. A year is a leap year if:

// It is divisible by 4;
// Except for years divisible by 100, unless they are also divisible by 400.

function isLeapYear(year) {
	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
		return `${year} is a leap year.`;
	} else {
		return `${year} is not a leap year.`;
	}
}

console.log(isLeapYear(2020));