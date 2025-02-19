#### `15-2-25`

# JS Objects and Prototypes

> [!TIP]
> - We learn that - Objects, Object oriented programming, Classes
> - Why is it said, in javascript everything is `Object`?
<br>

## Objects 

#### What is objects? (in every language)
- Objects means, that `represent real world entities`.
- Every thing is entity that have some property.
  - E.g. Pencil is entity becz, those have color, price... that have own properties & functionality.
- `Object` - Objects is an entity, which has properties & some functionality.
- #### Functionality in Object Oriented Way -> `Methods`.
- Properties means `Attributes`.
  - Attributes are color, weight,..
- Methods means `Actions or Functions`. 

![image](https://github.com/user-attachments/assets/96b82f28-e977-4e4f-8240-8aff18684a18)

<br>

#### Difference in Methods & Functions 
- Actually there is no difference between Methods & Functions.
- But, `function is standalone` -> that called `Function`.
- A `function is a part of object` -> that called `Method` (Method is basically called in the context of object).
<br>


> [!IMPORTANT]
> In every language Object implement or defination writting is different.
<br>


#### JS Context
- In Javascript context problem is, early JS is very unplanned language but, its very powerful language.

#### Why JS is very unplanned language? but its very powerful language.
- JS history is different than other language. Any language build for some purpose. e.g. -
  - Java make for cross platform working,
  - C & C++ for low level language,
  - Rust for memory efficient,
- `Javascript build for` -> to add intractivity to the browser.
- JS only & only meant that `run only in the browser`.
- Overtime after coming `NodeJS` they are 2 things -
  - Javascript as standalone programing language when working & JS became standalone language.
    - e.g. In JS we also create Servers, also make watch OS, we also build react native, mobile apps,.. we also make videos editor app that run on JS.
    - At the end JS is make very powerful language. i.e. JS usecase become very powerful.
<br>

### Was it really JS made keeping this purpose in mind, that one day it would become so powerful?
- In under JS concepts are slightly become weired.
- Old things as well as new things but with upgrade those old things they can removed? -> NO.
- becz, old websites are not working after, that resons in JS slightly weired.
<br>

#### Reason for JS is weired
- JS is build for different purpose, JS make became simple DOM manipulation, but they made fullstack application.
- that reasons JS updated but its make weired.
<br>

#### In JS Object create 2 tpyes
- Make a simple Object in JS using - `Object Literals`
```JS
const obj = {
  // That object store key:value pairs - properties, methods
}
```
- `Object Literals` - in that makes pairs of key:values.
-  but, `they have problem` is we can create 2 objects of same type we write all key by self every object.
- E.g.
- We have `person1` object have many properties & also `person2` also write all same keys in here.
```JS
person1 = {fname, lname, 20+, age}
person2 = {fname, lname, 20+, age}
```
- What will all objects have the same structure? that have chances of bugs that
  - we missout samething,
  - spelling mistake,
  - we missed key writing...
- All objects have not same template.
- All objects have not common parent.
- We console.log everything key of every object for checking structure same or not?

> [!NOTE]
> - Deep Copy have solved that?
> - No, Deep Copy have copy values, we can't required copy becz, `person1` is different object than `person2`.

- We make same structure but values are differents.
- That `Object Literals` have a problem in objects they do not same structure or they have not wrk as template.

<br>
- Thats of came `Es6 Classes` support.
- `Es6` cames with classes support.



