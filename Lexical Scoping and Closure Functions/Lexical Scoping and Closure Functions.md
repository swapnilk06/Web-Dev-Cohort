#### `2-3-25`

# 18 : Lexical Scoping and Closure Functions (JS - Foundation & Project & Machine Coding course)

### What we learn?
- [x] What lexical scoping?
- [x] What closures?
- [x] Practically uses of lexical scoping & closures.
- [x] Practical application with DOM examples with uses of closures.
- [x] Which pattern closures used actually. 

### What we learn next time?
- [x] 

<br>

> [!IMPORTANT]
> - In **interview ask indirectly question** on Lexical Scoping and Closure.
> - Without lexical scoping is part of closure, without lexical scoping closure are not possible.
> - We can best playing with Lexical Scoping & Closures then -> `More increases our code quality`.
> - 
<br>

## Lexical Scoping & Closures
- Lexical Scoping & Closures mostly used `indirectly` rather than directly.

<br>

## Lexical Scoping 
- Lexical Scoping is very simple concepts but, very important.
- In reality, internally working under function scope of **fname** is not easy of directly accessing **let fname = 'Piyush';** out of scope.

![image](https://github.com/user-attachments/assets/e8227a9f-6e40-4939-9948-53faf42eec99)


- Example : Redeclare Error in block-scoped
```JS
let fname = 'Piyush';

let fname = 'Hitesh'; // Error : cannot [redeclare] block-scoped variable 'fname'

console.log('Value of Fname is', fname);

// Task -
// - Why that code run? & Why access fname variable? becz, its in a scope.
// all 2 statements let names are in same scope.

````
<br>

- Example : some special work through JS for same scope variable declare 
```JS
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
```


> [!TIP]
> - `Extra Q&A`
> - 
