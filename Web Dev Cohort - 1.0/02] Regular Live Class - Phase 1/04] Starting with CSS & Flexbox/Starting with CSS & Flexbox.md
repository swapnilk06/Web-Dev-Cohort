
#### `19-1-25`

> [!IMPORTANT]
> HTML is not a programming language. Technically in HTML they don't give any Error.


# Starting with CSS & Flexbox

#### Just for analogy Diff. between HTML & CSS -
- HTML -> Gives structure to web pages.
  - E.g. HTML gives skelton to provide structre of human body head, body, lower body.
- CSS -> Gives beautification or skin provide to our HTML.
  - E.g. CSS  gives look to provide color, beauty & unique tone means CSS is the skin part above HTML.
- JS -> Gives functionality to HTML.
  - E.g. JS gives brain functionality to provide our body, behaviour i.e. JS
<br>


#### Default CSS -
- Default styling are depends on our browser which are set by default.
  - E.g. Chrome default styling as text color is black.
- In our Tags have already present beautification i.e. reason p tag & button tag are different.
- Button default beautification givrs by browser.
  
> NOTE : Chrome & safari browser show different "Click Me" button color or styling but color is same. i.e. that reason behind Chrome & Safari have different CSS or default Styling are different.

- Browser have `default styling`. i.e. Chrome is different user agent & Safari is also different user agent.

#### Steps to view default CSS -
- `Inspect mode` -> click on elements -> default i.e. button{ _ _ _ } -> `user agent stylesheet`.
- `Agent` : any one can request them or reder it i.e. agent.
- We `can't change user agent stylesheet`. but we can do override that `user agent stylesheet`.
- CSS -> means `only override of style` on top of it.
<br>

## CSS - `Cascading Stylesheets`
- Cascading : `kinds of overlaping or overriding`.
  - Cascade one thing on to other another thing.
  - E.g. Shape of yellow color box cascade blue color box, this does not mean that the yellow has been removed i.e. yellow overlape by blue -> `Cascading`.
- Using CSS we can cascading to stylesheets.
- E.g. Adding Style attribute in button
- ``` CSS
  <button style="background-color: red;" >Click Me</button>
  ```

- In `Inspect mode` -> "element.style{_ _ _}" has taken background color as "red".
- It only cascade only browser default property background-color as "buttonface" cascade with background color as "red".
- They can't cascade whole properties all other property are same show as user agent can give i.e user agent chrome.
<br>

> [!NOTE]
> - `CSS` -> means `Properties: Values` E.g. bacground-color: red; i.e. property.
> - In CSS `no any limit on creativity`. bcz, as creative as you want.
<br>
> - We can't remove browser CSS or not change browser CSS, we can only `cascade`.
<br>


### 3 types of writing CSS -

#### `Inline CSS` : add CSS on inside element attribute.
``` CSS
<button style="background-color: red; color: white" >Click Me</button>
```
- That CSS only work for button element.
- Indirectly `that not good` add same property for others button. i.e. If we want to make any changes in the future, I will have to make every where to change.
- Inline used only when we are doing changes specific element. That time we can used `Inline CSS`.
- Inline CSS -> through `Style attribute` in element.
- E.g.
``` CSS
<body>
      <p style="text-decoration: underline; background-color: blue; color: white;">This is a CSS Class</p>
      <button style="background-color: red; color: white;" >Click Me</button>
      <!-- Above 'Click Me' have Default CSS give by browser -->
      <!-- style is attribute add in button -->
</body>
```
<br>

#### `Internal CSS` : add CSS through style tag inside head.
- In style tag for writing CSS have a syntax.
- CSS syntax is, `SELECTOR` -> On which element to put style?
``` 
SELECTOR {
<prop>: <value>
<prop>: <value>
<prop>: <value>
}
```
- E.g. All entire buttons gives same style 
``` CSS
button /* SELECTOR -> button */
{ 
background-color: red; /* property -> background-color, value -> red */
color: white;
border: 2px solid green;
border-radius: 20px;
margin: 10px;
padding: 10px;
}
```
- In `Inspect mode` -> styles -> button(user agent stylesheet) -> have many style by default through user agent stylesheet.
  - In that stylesheet margin, background-color, color... are `overwrite or cascade styles in Internal CSS`.
- In `Inspect mode` -> styles -> button(index.html:8) -> shows ~~`color:white`~~ becz, in `element.style` is color:green. i.e. in element style cascade that then it visible as in green color.
- On 1st 'Click Me' button, white color present in code but, its not apply it i.e. green color cascade.
- On 2nd 'Click Me' button, white color apply through Inline CSS.

```CSS
<head>
<style>
/* for all over buttons tag gives same style */
button  /* SELECTOR -> button */
{
 background-color: red; /* property -> background-color, value -> red */
color: white;
border: 2px solid green;
border-radius: 20px;
margin: 10px;
padding: 10px;
}
</style>
</head>
<body>
      <p style="text-decoration: underline; background-color: blue; color: white;">This is a CSS Class</p>
      <button style="color: green;">Click Me</button> /* Cascade green color on white*/
      <button>Click Me</button>
      
</body>
```
<br>

> [!NOTE]
> Selector, {} -> paranthesis, key, property

- Cascade style example
``` CSS
<head>
<style>
  button {
    border: none;
    padding: 10px;
    border-radius: 10px;
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    cursor: pointer;
    }

  /* above border cascade with of below border */
  button {
    border: 2px solid grey;
  }

  button {
    border: 2px solid red;
  }
</style>

</head>
<body>
  <button>Click Me</button>
  <!-- below style cascade as 1st property i.e. Inline CSS -->
  <button style="border: 2px solid green">Click Me 2</button>
```
<br>

#### Understand some termology -
> [!NOTE]
> - `Tag` -> H1, H2, P..
> - `Id` -> Selector start with `#` dot
>   - E.g. `#btn-1` 
> - `Class` -> Selector start with `.` dot
>   - E.g. `.my-class-a`
<br>

#### Tag, ID, Class -

- `Tag` : Students is tag form class & multiple tags are also belong from same class.
  - Tag -> used for easy for grouping. 
  - E.g. Multiple "students" can belong to same class.
- E.g. Grouping of multiple elements using "class"
```CSS
<head>
  <style>
		/* We start selector with '.' dot i.e. its class */
		.my-class-a {
			color: red;
		}
	</style>
</head>
<body>
	    <!-- Grouping of multiple elements using class  -->
      <button>Click Me</button>
      <button class="my-class-a" style="border: 2px solid green">Click Me 2</button>
			<h1 class="my-class-a">Heading</h1>
      <p class="my-class-a">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex perspiciatis laboriosam quidem, sequi incidunt debitis!</p>
</body>
```
<br>

- `Class` : Uniquly identify by Class.
  - E.g. In class there have multiple students are also present.
  - Single student can belong to multiple classes
- E.g. Single student can belong to "multiple classes"
```CSS
<head>
  <style>
		/* We start selector with '.' dot i.e. its class */
		.my-class-a {
			color: red;
		}

		.my-class-b {
			font-size: 30px;
		}
	</style>
</head>
<body>
	    <!-- Grouping of multiple elements using class  -->
      <button class="my-class-b">Click Me</button>
      <button class="my-class-a" style="border: 2px solid green">Click Me 2</button>
			<h1 class="my-class-a">Heading</h1>
      <p class="my-class-a my-class-b">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex perspiciatis laboriosam quidem, sequi incidunt debitis.</p>
</body>
````
<br>

- `Id` : One element have one `unique Id`. i.e. that id not repeat.
  - Same Id not assign for multiple students.
  - E.g. Same id do not assign other element on same page.
- E.g. Uniquely identify using "Id"
```CSS
<head>
  <style>
	.my-class-a {
	color: red;
	}

	.my-class-b {
	font-size: 30px;
	}

	/* We start Id selector with '#' dot i.e. its Id */
	#btn-1{
	color: violet;
	}
 </style>
</head>
<body>
<!-- Id - that same Id not gives multiple time on same page.
id="btn-1" -> work only 1 time in single page but, not work mutiple time on single page -->
      <button id="btn-1" class="my-class-b">Click Me</button>
      <button class="my-class-a" style="border: 2px solid green">Click Me 2</button>
       <h1 class="my-class-a">Heading</h1>
      <p class="my-class-a my-class-b">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex perspiciatis laboriosam quidem, sequi incidunt debitis. Commodi corrupti dolorem veniam accusantium eius neque dolore</p>
</body>
```
<br>

> [!NOTE] - Real world example of Tag, Class, Id
> - Tag : All Students are tag. i.e. `Select all element through -> tag`.
> - Class : Narrow down selection scope of or group of students through class. i.e. `From tag select some group through -> class`.
> - Id : Narrow down selection scope of unique student through id. i.e. `From tag select specific or unique element through -> id`.
<br>

#### Q. What if add same id on multiple tag on same page?
- Not give any error show by html, but that illegal thing(best example, in european  country side website).
<br>

> [!IMPORTANT]
> HTML not a programing langauge then, they don't give any Error.
<br>

#### Cascading priority 
- `Id have priority` than other selectors tag & selector class.
- Id override Id priority to `top to bottom` which one Id last or bottom. i.e. `Id override by last id` but not override class.
- That weight decision or priority Id working with algorithm i.e. `Specificity Algorithm - high specificity then high weighted`.
- E.g. Cascading more specificity
	- World all developers - that specificity for only developer
	- Indias all developers - specificity for india's developer
 	- This Cohort developer
 	- Cohort developer india's developers
	- Anirudh from this cohort - More specificity then anirudh have more weighted. i.e. Inline CSS
```CSS
<head>
<style>
	button {
	color: red;
	}

	#btn-1 {
	color: rgb(166, 255, 0);
	}

	/* Cascading priority Id wise in top to bottom way */
	#btn-1 {
	color: chocolate;
	}

	/* class do not override to Id */
	.btn {
	color: blue;
	}
</style>
</head>
<body>
	<!-- In line CSS on direct element is more specificity i.e. no one override this -->
	<button style="color: blueviolet; text-decoration: overline;" id="btn-1" class="btn">Click Me</button>
</body>
</html>
```
<br>

> [!NOTE]
> Inline CSS more priority or specificity.
> Inline CSS on element `no one can override this`.
<br>


#### Specificity in between  Tag, Class, Id, Inline

> [!IMPORTANT]
> - `Inline CSS` -> 1st priority
> - `Id` -> 2nd priority
> - `Class` -> 3rd priority
> - `Tag` -> Last priority
<br>

#### `External CSS` : seprate filed CSS
- External CSS style apply through importing i.e use of `link tag`.
- Multiple CSS style also can apply.
- `rel` - at link time many links are present for link, the browser has to be told that which type of file link. i.e. CSS, favicon, manifest file...
- `rel="stylesheet"` -> that is css type file for appling.
 
- E.g.
```CSS
<head>
	<link rel="stylesheet" href="style.css">
</head>
```
<br>

## Flexbox 

1:07 min









