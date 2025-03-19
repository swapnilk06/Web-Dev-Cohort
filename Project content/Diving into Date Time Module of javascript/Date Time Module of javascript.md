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

<br>

----------

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

#### 1] - function for updating clock for every single second

```JS
function updateClock() {
	//
}
setInterval(updateClock, 1000); // that call every single second function
```

> [!NOTE]
> - What about 0 second // 0 1 2 3...?
> 	- Manually call method `updateClock()` & execute that.
> 	- `updateClock()` is a reference of fun that is passed on this an **execution of function** in `setInterval(updateClock, 1000)`

```JS
function updateClock() {
	//
}
setInterval(updateClock, 1000); 
updateClock() // call the manually 
```


> [!NOTE]
> - What is used of "setInterval"?
>	- "setInterval" => that call fun for every single seconds that keep on running.
>	- fun is called every 1000 milliseconds (or 1 second), ensuring that the clock display is updated in real-time.

> [!important]
> - Interview perspective :
> - It means that both setInterval() and setTimeout() use the same ID system. So, if you start a timer using setTimeout(), you can stop it using clearInterval(), and if you start a repeating timer with setInterval(), you can stop it using clearTimeout().
> 	- Even though clearTimeout() is usually used for setTimeout() and clearInterval() for setInterval(), they actually work the same way in stopping timers
> 	- Both `setInterval()` and `setTimeout()` use the same ID system. So, if you start a timer using `setTimeout()`, you can stop it using `clearInterval()`, and if you start a repeating timer with `setInterval()`, you can stop it using `clearTimeout()`.
> 	- Even though `clearTimeout() is usually used for setTimeout()` and `clearInterval() for setInterval()`, they actually work the same way in stopping timers.

<br>

#### 2] - get a reference element

- In JavaScript, `document.getElementById("id")` is a method that selects an HTML element by its `id` attribute.

```JS
function updateClock() {
	// grab the reference
	const timeElement = document.getElementById("time")
	const dateElement = document.getElementById("date")
}
setInterval(updateClock, 1000);

updateClock()
}
```
<br>

#### 3] - get a the date

```JS
function updateClock() {
	const timeElement = document.getElementById("time")
	const dateElement = document.getElementById("date")

// grab the date 1st
const now = new Date();
consle.log(now); // inspet -> console

}
setInterval(updateClock, 1000);

updateClock()
}
```

> [!NOTE]
> - What happen use of **new keyword** & **don't used new keyword**?

#### Using **new** keyword
- When you use the new keyword with Date(), it creates a new Date object that represents the current date and time.
  
```JS
const now = new Date(); // Creates a Date Object
```
- `new Date()` creates an instance of the Date object.
- It stores the full date and time information.
- The **now variable is an object**, `not a string`.

```JS
const now = new Date();
console.log(now);  
console.log(typeof now); // "object"
```

- Methods examples -
```JS
// Thu Mar 11 2025 23:17:50
console.log(now.getFullYear()); // 2025
console.log(now.getMonth());    // 2 (March, because months are 0-indexed)
console.log(now.getDate());     // 11
console.log(now.getHours());    // Current hour
```

#### Without using new keyword

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

> [!NOTE]
> - Use `new Date()` when you need to work with dates (e.g., extract year, compare dates, modify dates).

<br>

#### 4] - get a the hour

- Problem when time is exactly 12
```JS
function updateClock() {
	const timeElement = document.getElementById("time")
	const dateElement = document.getElementById("date")

	const now = new Date();
	const hours = now.getHours() % 12; // get problem 
	consle.log(hours); 

}
setInterval(updateClock, 1000);

updateClock()
}
```

- Soution : for problem when time is exactly 12
  
> [!NOTE]
> - Why `||` OR condition used?
> 	- When `now.getHours() % 12` get false then other value is true i.e. 12.
>  	- 12 % 12 => 0 i.e. false

```JS

function updateClock() {
	const timeElement = document.getElementById("time")
	const dateElement = document.getElementById("date")

	const now = new Date();

    // grab the hour
	const hours = now.getHours() % 12 || 12; //  Use `||` OR condition with adding '12'.
	consle.log(hours);

}
setInterval(updateClock, 1000);

updateClock()
}
```

<br>

#### 5] - get a the minute & second

- Problem to convert minutes into 2 digits
```JS
function updateClock() {
	const timeElement = document.getElementById("time")
	const dateElement = document.getElementById("date")

	const now = new Date();
	const hours = now.getHours() % 12 || 12;
	const minutes = now.getMinutes(); // Problem is how to convert in 2 dgits?
	consle.log(minutes); 

}
setInterval(updateClock, 1000);

updateClock()
}
```

- Soution : problem to convert minutes into 2 digits
	- convert into to string.
	- add pading to start whenever, digit in single character. i.e. 1 => 01
 	- not add any pading whenever, are 2 digits. i.e. 11 => 11

- solution for minute & second
```JS
function updateClock() {
	const timeElement = document.getElementById("time")
	const dateElement = document.getElementById("date")

	const now = new Date();
	const hours = now.getHours() % 12 || 12;

    // grab the minute
    const minutes = now.getMinutes().toString().padStart(2, '0'); // padstart for whenever, single digit

	// grab the second
	const seconds = now.getSeconds().toString().padStart(2, '0'); // padstart for whenever, single digit

	console.log(seconds); 

}
setInterval(updateClock, 1000);

updateClock()
}
```

<br>

> [!important]
> - grab hours, minutes & seconds also possible through switch case but, its very bad approach.

<br>


#### 6] - take care of AM/PM

```JS
function updateClock() {
	const timeElement = document.getElementById("time")
	const dateElement = document.getElementById("date")

	const now = new Date();
	const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
	const seconds = now.getSeconds().toString().padStart(2, '0');

    // care of AM/PM
	const ampm = now.getHours() >= 12 ? "PM" : "AM";
	console.log(ampm);

}
setInterval(updateClock, 1000);

updateClock()
}
```

<br>

#### 7] - get date as well
- `toLocaleDateString()`, `toLocaleTimeString()`, and `toLocaleString()` use locale-specific date and time formats.

#### Why there `undefined` is here?
- `undefined`: Passing undefined for the locales parameter means it defaults to the user's system locale (the default locale of the runtime environment).
- `options`: The options parameter is an object that specifies how the date should be formatted. It may include properties like weekday, year, month, and day...

```JS
function updateClock() {
	const timeElement = document.getElementById("time")
	const dateElement = document.getElementById("date")

	const now = new Date();
	const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
	const seconds = now.getSeconds().toString().padStart(2, '0');
	const ampm = now.getHours() >= 12 ? "PM" : "AM";

	// get date as well

	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	const datestring = now.toLocaleDateString(undefined, options); // use locale-specific date and time formats

}
setInterval(updateClock, 1000);

updateClock()
}
```

<br>


#### 8] - update time element & date element 
```JS
function updateClock() {
	const timeElement = document.getElementById("time")
	const dateElement = document.getElementById("date")

	const now = new Date();
	const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
	const seconds = now.getSeconds().toString().padStart(2, '0');
	const ampm = now.getHours() >= 12 ? "PM" : "AM";

	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	const datestring = now.toLocaleDateString(undefined, options);

	// update time element & date element
	
	timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`; 

	// dateElement.textContent = `${datestring}`;
    // OR
	dateElement.textContent = datestring;

}
setInterval(updateClock, 1000);

updateClock()
}
```

<br> 


### Completed : Time & Date module in javascript

```JS
function updateClock() {
	const timeElement = document.getElementById("time")
	const dateElement = document.getElementById("date")

	const now = new Date();
	const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
	const seconds = now.getSeconds().toString().padStart(2, '0');
	const ampm = now.getHours() >= 12 ? "PM" : "AM";

	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	const datestring = now.toLocaleDateString(undefined, options);

	timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

	dateElement.textContent = datestring;

}
setInterval(updateClock, 1000);

updateClock()
}
```

<br>

-------

### Extra Work 
- [x] Explore mdn as practically
 

