// create two Objects - obj1 values not access in obj2

const obj1 = {
	fname: 'Piyush',
	lname: 'Garg',
	getFullname: function () {
		return `${this.fname} ${this.lname}`;
	}
};

const obj2 = {
	fname: 'Anirudh',
	lname: 'Jwala',
};

// Independent object - different memory location of obj1 & obj2
console.log(obj1.getFullname()); 

console.log(obj2.getFullname()); // not access obj1 getFullname() in obj2
// TypeError: obj2.getFullname is not a function