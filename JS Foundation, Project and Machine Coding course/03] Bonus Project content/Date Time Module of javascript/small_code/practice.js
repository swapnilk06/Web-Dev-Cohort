
//---------- 1] Create a Date Object

// Create a new Date object for the current date and time


const now = new Date();
// console.log(now); // Outputs current date & time // output: 2025-03-17T10:23:20.832Z




// Create a Date object with a specific date
const myBirthday = new Date("2000-06-02");
// console.log(myBirthday); // output: -06-02T00:00:00.000Z



// Create a Date object with year, month, day, hour, minute, second

const customDate = new Date(2025, 2, 10, 14, 30, 0); // (Year, Month (0-based), Day, Hour, Minute, Second)
// console.log(customDate);
// Months are zero-based (January = 0, February = 1, March = 2,..).



//---------- 2] Get Components of a Date

// Get the Year, Month, Day

const currentYmd = new Date();


// console.log(currentYmd.getFullYear()); // Get current year
// console.log(currentYmd.getMonth());    // Get current month (0-based, Jan = 0)
// console.log(currentYmd.getDate());     // Get current day of the month


// Get the Day of the Week

// console.log(now.getDay()); // Returns 0->Sunday to 6->Saturday


// Get Hours, Minutes, Seconds

// console.log(now.getHours());   // Get current hour
// console.log(now.getMinutes()); // Get current minutes
// console.log(now.getSeconds()); // Get current seconds


//---------- 3] Format the Date (Make It Readable)

// Convert Date to String Format

// console.log(now.toDateString()); // Example: "Tue Mar 11 2025"
// console.log(now.toTimeString()); // Example: "14:45:30 GMT+0530"
// console.log(now.toLocaleDateString()); // Example: "3/11/2025"
// console.log(now.toLocaleTimeString()); // Example: "2:45:30 PM"


// Custom Formatting (To display the time in a 12-hour format)

const hours = now.getHours() % 12 || 12; // Convert 24-hour to 12-hour format
const ampm = now.getHours() >= 12 ? "PM" : "AM";
// console.log(`${hours}:${now.getMinutes()} ${ampm}`); // Example: "2:45 PM"


//---------- 4] Modify Date & Time

// Set a Custom Date

now.setFullYear(2028);
// console.log(now.getFullYear()); // Output: 2028


// Add or Subtract Days

now.setDate(now.getDate() + 5); // Adds 5 days
// console.log(now); // New date after 5 days
// Output: 2028-03-22T11:00:09.032Z


// Change Time

now.setHours(now.getHours() + 2); // Add 2 hours
// console.log(now);


//---------- 5] Date Calculations

// Find the Difference Between Two Dates

const date1 = new Date("2025-03-17");
const date2 = new Date("2025-04-01");

const difference = date2 - date1; // Difference in milliseconds
// console.log(difference / (1000 * 60 * 60 * 24)); // Convert to days

// 1000: The number of milliseconds in a second.
// 60: The number of seconds in a minute.
// 60: The number of minutes in an hour.
// 24: The number of hours in a day.


//---------- 6] Working with Time Intervals

// setTimeout() – Run Code After Delay

// setTimeout(() => {
// 	console.log("Hello after 2 seconds!");
//   }, 2000); // 2000 ms = 2 seconds



// setInterval() – Run Code Repeatedly

// setInterval(() => {
// 	console.log(new Date().toLocaleTimeString()); // Prints time every second
//   }, 1000);


// Stop an Interval

// let timer = setInterval(() => {
// 	console.log(new Date().toLocaleTimeString());
//   }, 1000);
  
//   setTimeout(() => {
// 	clearInterval(timer); // Stops the interval after 4 seconds
//   }, 4000);


//---------- 7] Convert Time to Timestamp
// A timestamp is the number of milliseconds since January 1, 1970.

// Get the Timestamp of a Date

// console.log(now.getTime()); // Returns milliseconds since 1970 // 1837343797959

// Convert Timestamp to Date
const timestamp = 1837343797959; // Example timestamp
const dateFromTimestamp = new Date(timestamp);
console.log(dateFromTimestamp);


//  -----------------------------------------

/*
Task						Method
Get current date & time	  -> new Date()
Get specific date	      -> new Date("YYYY-MM-DD")
Get year	              -> getFullYear()
Get month	              -> getMonth() (0-based)
Get day of the week	      -> getDay() (0 = Sunday)
Get hours	              -> getHours()
Format date	              -> toLocaleDateString(), toLocaleTimeString()
Add days	              -> setDate(getDate() + X)
Compare dates	          -> Subtract timestamps
Run function after delay  -> setTimeout()
Run function repeatedly	  -> setInterval()

*/

/*
// More practice on =>

- Practice with real-world examples:
	- Display a digital clock on a webpage.
	- Calculate the difference between two dates (e.g., countdown timer).
	- Create a reminder app that alerts users at a specific time.
	
- Explore more:
	- Learn how to handle time zones (Intl.DateTimeFormat).
	- Work with Moment.js or date-fns for advanced date manipulation.

*/