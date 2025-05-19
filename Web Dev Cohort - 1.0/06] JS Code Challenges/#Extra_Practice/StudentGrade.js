// Problem Statement:
// Write a function that assigns a grade based on a student's score:

// 90 and above: 'A'
// 80 to 89: 'B'
// 70 to 79: 'C'
// 60 to 69: 'D'
// Below 60: 'F'

function assignGrade(score) {
	if (score >= 90) {
		return `A`;
	}
	else if(score >= 80) {
		return `B`;
	}
	else if(score >= 70) {
		return `C`;
	}
	else if(score >= 60) {
		return `D`;
	}
	else {
		return `F`;
	}
}

console.log("Student Grade is :",assignGrade(59));

