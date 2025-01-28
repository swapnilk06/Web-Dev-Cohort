
#### `19-1-25`

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

> NOTE :
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
- Indirectly that not good add same property for others button. i.e. If we want to make any changes in the future, I will have to make every where to change.
- Inline used only when we are doing changes specific element. That time we can used `Inline CSS`.
- Inline CSS -> through `Style attribute` in element.
- E.g. of Inline CSS
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


