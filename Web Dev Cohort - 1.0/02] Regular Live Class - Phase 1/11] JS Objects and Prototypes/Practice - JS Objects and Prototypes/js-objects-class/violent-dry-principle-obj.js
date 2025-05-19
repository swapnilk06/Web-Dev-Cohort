// Coding principle violat - DRY(Do Not Repeat yourslf) principle violat 

const obj1 = {
	fname: 'Piyush',
	lname: 'Garg',
	getFullname: function () {
		return `${this.fname} ${this.lname}`;
		// that violat coding principle 
		// write similar schema in obj2 also
	}
};

const obj2 = {
	fname: 'Anirudh',
	lname: 'Jwala',
	getFullname: function () {
		return `${this.fname} ${this.lname}`;
		// that violat coding principle 
		// write similar schema in obj1 also
	}
};

// DRY - Do not repeat yourself

console.log(obj1.getFullname()); 
console.log(obj2.getFullname());

// O/p in terminal -
// Piyush Garg
// Anirudh Jwala