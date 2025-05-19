// 2] - fun for updating clock for every single second

function updateClock() {
	// 3] - grab the reference element
	const timeElement = document.getElementById("time")
	const dateElement = document.getElementById("date")

	// 4] - grab the date 1st
	// const now = Date(); // return string not object
	const now = new Date(); // return date its object

	// 5] - grab the hours
	const hours = now.getHours() % 12 || 12; //  Use `||` OR condition with adding '12'.

	// 6] - grab the minutes
	const minutes = now.getMinutes().toString().padStart(2, '0'); // padstart for whenever, single digit

	// 7] - grab the second
	const seconds = now.getSeconds().toString().padStart(2, '0'); // padstart for whenever, single digit

	// take care of AM/PM
	const ampm = now.getHours() >= 12 ? "PM" : "AM";

	console.log(ampm);

	// get date as well

	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};


	const datestring = now.toLocaleDateString(undefined, options); // use locale-specific date and time formats

	// update time element & date element
	
	timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`; 

	// dateElement.textContent = `${datestring}`;
    // OR
	dateElement.textContent = datestring;
}




//  1] - "setInterval" => that call fun for every single seconds that keep on running.

setInterval(updateClock, 1000); // fun is called every 1000 milliseconds (or 1 second).

// manually function call

updateClock()