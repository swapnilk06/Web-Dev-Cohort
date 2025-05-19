let fname = 'Piyush';

function sayName() {

	// fname is also exist in that fn scope
	let fname = 'Hitesh';
	console.log('In SayName', fname);
}

console.log('Value of Fname is', fname);
sayName();

// Task -
// - How fname = 'Hitesh'; also present in the scope & how redeclare is possible in that? In that some special work through JS.
// 1st run memory phase 
