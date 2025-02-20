#### `15-2-25`

# JS Objects and Prototypes

> [!TIP]
> - We learn that - Objects, Object Oriented Programming, Classes
> - Why is it said, in javascript everything is `Object`?
<br>

## Objects 

#### What is objects?
- Objects means, that `represent real world entities`(in every language).
- Every thing is entity that have some property.
  - E.g. Pencil is entity becz, those have color, price... that have own properties & functionality.
- Object - `Objects is an entity, which has properties & some functionality`.
- Functionality in Object Oriented Way called as -> `Methods`.
  - Methods are Actions or Functions. 
- Properties means -> `Attributes`.
  - Attributes are color, weight,..

![image](https://github.com/user-attachments/assets/96b82f28-e977-4e4f-8240-8aff18684a18)

<br>

#### What is difference in between Methods & between Functions
- Actually there is **no difference** between Methods & Functions.
- But, `function is standalone` -> that called `Function`.
- A `function is a part of object` -> that called `Method` (_Method is basically called in the form of object context_).
<br>

> [!IMPORTANT]
> - We use `method` word in anywhere i.e. means -> **`method` its a function** that is -> **function is part of object**.
> - But we called as `function` word i.e. means -> its a standalone is the function of our code.
> - In every language have different way of creating object.(_netmeet(overall or in nutshell) is object defination is same, but every language implementation is different_).
> - In JS `{}` for object creation i.e. = {}
> - And also `class` names keyword in JS.
<br>


### JS Context
- In Javascript context problem is, **early days JS is very unplanned language** but, **JS very powerful language**.

#### Why JS is very unplanned language? but its very powerful language.
- JS history is different than other languages.
- Any language build for some purpose. e.g. -
  - Java builds for cross platform working,
  - C & C++ for low level language,
  - Rust for memory efficient,
- `Javascript build for` -> to add intractivity on a browser.
  - e.g. JS work as button on click what action, whats cames... that is very simple purpose of JS. 
- JS only & only meant that `run only in the browser`.
<br>

#### Overtime after `NodeJS` coming they are 2 things in that -
- Javascript `work as standalone programing language` & J**S became a standalone language**.
    - e.g. In JS we create Servers, also make watch OS, we also build react native apps, mobile apps,..
    - e.g. In today we create whole SaaS on browser,  we make videos editor app that run on browser.
- At the end JS is make very powerful language. i.e. JS usecase become very powerful.
<br>

#### Was it really JS made keeping this purpose in mind, that one day it would become so powerful?
- **NO**.
- In the JS **concepts are slightly become weired**.
- In JS also old things with new things, JS also update with upgrade but, those old things they can possible to removed? -> **NO**.
- becz, we try to removed old things then old websites are not possible to run, thats reasons in `JS slightly became weired`.
- Also reason in JS for weired -> we do one thing in JS, that have 10 things are available in JS (**Backword Compability**).  
<br>

#### Reason for JS is weired
- JS is build for different purpose, but JS made for some other purpose.
- e.g. JS build for simple DOM manipulation language, but JS made fullstack application lamgauge.
- that reasons JS can update but its became `weired`.
<br>


### Create `Objects` in JS
- In JS Object create 2 ways 
  -  `Object Literals` - in that makes pairs of key:values.
  -
  
#### Object Literals
- Make a simple Object in JS using -> `Object Literals`(**that store key:value pairs**)
```JS
const obj = {
  // That object store key:value pairs i.e. properties, methods
}
```
- Initially JS build that only requirement. i.e. for make collection, for create group of related properties. i.e. -> **Object**.
- but, **that way object creation having a problem in particular implementation**
- Problem is we can create 2 objects of same type, we need to write all key by self every object.
- e.g. Let say we have write **person1** object have many properties like fname, lname,.. & we create **person2** also write all same keys in here.
```JS
// JS Object Literals 
person1 = {fname, lname, 20+, age}
person2 = {fname, lname, 20+, age}
```

#### What will all objects have the same structure? 
- **NO**
- **that have chances of bugs** i.e. we missout something, spelling mistake, we missed writing key...
- 1] **All objects have not same template**.
- 2] **All objects have not any common parent**.
- We **console.log** every key of every object for checking structure same or not?
- Not available any hard & fast thing for check that 2 objects are same.

> [!NOTE]
> - **Deep Copy** have solved that problem?
> - **No**, Deep Copy **have copy the values**, we can't required copy becz, `person1` is different object than `person2`.
> - That have same keys only, **we make same structure(schema) but, make values are different**.

> [!IMPORTANT]
- In that `Object Literals` have a problem is objects have not same structure or they have not work as a template.
<br>

#### JS comeback with Es6 support
- Solve thats of **object literals problem** they comeback with `Es6(Ecmma Script Standards) Classes` support.
- Es6 support they need to cames with `classes support`.
- In the class we define what type of structure(schema) we required.
```JS
// define Blueprint or schema
class Person() {
  ...schema   // define structure or schema in class
}
```
- We can create multiple `objects`.
```JS
// Multiple objects
  const p1 = new Person() // schema of class Person also present in that
  const p2 = new Person() // schema of class Person also present in that
```
- As its a schema of persons are present in p1 & p2.
- Any **new keys** adds in schema or blueprint i.e. that are also available in all objects.
```JS
// define Blueprint or schema
class Person() {
  ...schema     // define structure or schema in class
  ... New Keys 
}

// Multiple objects
  const p1 = new Person() // schema of class Person also present in that
  const p2 = new Person() // schema of class Person also present in that

```
- That ways its create a `single parent`.

#### What work of `new` keyword?
- When we think about object, what we can use `Heap memory` or `Stack memory`?
- We use `Heap memory` for objects.
- `new` keyword says, we go `Heap meomory` and allocate new memory & `return it's address` (return to new).
- `new` keyword **required new memory location**.
- `p1` variable holds in the **stack memory**.
- `p1 value is address` i.e. stored in Heap memory.
- Similarly in `p2` variable have different address.
- p1 & p2 `have not any relation between them`.
- p1 & p2 `have different different address`.

![image](https://github.com/user-attachments/assets/28b82c99-0a69-4a85-890d-41cbf958db6f)

<br>

> [!NOTE]
> - `new keyword` functionality also same in java.


```JS

// create Object & access values

const obj1 = {
	fname: 'Piyush',
	lname: 'Garg',
};

const obj2 = {
	fname: 'Anirudh',
	lname: 'Jwala',
};

// Independent object - different memory location of obj1 & obj2
console.log(obj1); 
console.log(obj2);

// O/p in terminal - { fname: 'Piyush', lname: 'Garg' }

```



