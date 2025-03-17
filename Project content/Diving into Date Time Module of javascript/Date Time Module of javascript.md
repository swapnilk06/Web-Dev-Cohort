#### `10-3-25`

# Date Time Module of javascript

### How doing that?
- [x] Build a simple timer.
- [x] What are the precaution we have take? What are the edge cases?
- [x] How we can actually study that?

<br>

- [x] Help to build application - 
	- [x] Hotel booking system
	- [x] Hospital management system

<br>

```CSS

/* Same CSS almost every project */

/* Reset styles */

*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Arial", sans-serif;
}

/* Dark mode background */

body {
	background-color: #0d1117;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}
```

#### Resources - [Date JS MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- JavaScript `Date objects` are used to work with dates and times.
- An `epoch` of midnight at the beginning of 1 January 1970 UTC, and an accounting of every day as comprising exactly 86,400 seconds (each of which is 1000 milliseconds long).
- There are various methods that allow to interact with the timestamp stored in the date.
- There are two groups of `Date methods`: one group gets and sets various date components by interpreting the timestamp as a local time, while the other uses UTC.

<br> 

### Display the time & display the date -

#### Write function which can update a clock (clock needs to update every second)

function that responsible for updating a clock every single second
```JS
// fun for updating clock for every single second
function updateClock() {
	//
}
```

> [!important]
> - Most IMP part is that who's going to called this function every single second. (go for the setInterval) 

<br>

What is used of "setInterval"?
- "setInterval" => that call fun for every single seconds that keep on running.
- fun is called every 1000 milliseconds (or 1 second), ensuring that the clock display is updated in real-time.
```JS
setInterval(updateClock, 1000);
```

In JavaScript, `document.getElementById("id")` is a method that selects an HTML element by its `id` attribute.
```JS
document.getElementById("time")
document.getElementById("date")
}
```
<br>

#### What happen use of new keyword & don't used new keyword?

Using **new** keyword
```JS
const now = new Date(); // Creates a Date Object
```
- When you use the new keyword with Date(), it creates a new Date object that represents the current date and time.
```JS
const now = new Date();
console.log(now);  
console.log(typeof now); // "object"
```
- `new Date()` creates an instance of the Date object.
- It stores the full date and time information.
- The now variable is an object, not a string.
- Other methods examples -
```JS
// Thu Mar 11 2025 23:17:50
console.log(now.getFullYear()); // 2025
console.log(now.getMonth());    // 2 (March, because months are 0-indexed)
console.log(now.getDate());     // 11
console.log(now.getHours());    // Current hour
```

<br>

Without using new keyword
```JS
const now = Date(); // Returns a String
```
- When you call Date() **without new**, it behaves like a regular function and returns a `string representing the current date and time`.
```JS
const now = Date();
console.log(now);
console.log(typeof now); // "string"
```
- Date() without new returns a string, not an object.
- It is equivalent to calling new Date().toString().
- You cannot use Date object methods like getFullYear(), getMonth(), etc., because it's just a string.

<br>

> [!NOTE]
> Use `new Date()` when you need to work with dates (e.g., extract year, compare dates, modify dates).

<br>



