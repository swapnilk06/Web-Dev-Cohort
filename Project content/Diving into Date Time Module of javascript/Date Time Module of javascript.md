#### `10-3-25`

# Date Time Module of javascript

### How doing that?
- [x] Build a simple timer.
- [x] What are the precaution we have take? What are the edge cases? How we can actually study that?


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

#### Resources - [Date JS mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- JavaScript Date objects are used to work with dates and times.

<br> 

### Code working -


#### What is used of "setInterval"?
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
