# Debuggercises 

> 6/26/2020, 9:10:39 PM 

## [exercises](../../README.md)/[14-increment-and-decrement](../README.md)/exercises 

- [/1.js](#1js) - _pass_ 
- [/2.js](#2js) - _pass_ 
- [/3.js](#3js) - _pass_ 
---

## /1.js 

> pass 
>
> [review source](../../../exercises/14-increment-and-decrement/exercises/1.js)

```txt
+ PASS: Test 1 x
+ PASS: Test 1 y
+ PASS: Test 2 x
+ PASS: Test 2 y
+ PASS: Test 3 x
+ PASS: Test 3 y
+ PASS: Test 3 z
+ PASS: Test 4 x
+ PASS: Test 4 y
+ PASS: Test 4 z
```

```js
'use strict';

let x = 0;

let y = ++x;
console.assert(x === 1, 'Test 1 x');
console.assert(y === 1, 'Test 1 y');

x = y--; // y = 1
console.assert(x === 1, 'Test 2 x');
console.assert(y === 0, 'Test 2 y');

let z = x++; //x = 1
console.assert(x === 2, 'Test 3 x');
console.assert(y === 0, 'Test 3 y');
console.assert(z === 1, 'Test 3 z');

y = --x; // x = 2
console.assert(x === 1, 'Test 4 x');
console.assert(y === 1, 'Test 4 y');
console.assert(z === 1, 'Test 4 z');

```

[TOP](#debuggercises)

---

## /2.js 

> pass 
>
> [review source](../../../exercises/14-increment-and-decrement/exercises/2.js)

```txt
+ PASS: Test 1 x
+ PASS: Test 1 y
+ PASS: Test 2 x
+ PASS: Test 2 y
+ PASS: Test 3 x
+ PASS: Test 3 y
+ PASS: Test 3 z
+ PASS: Test 4 x
+ PASS: Test 4 y
+ PASS: Test 4 z
```

```js
'use strict';

let x = 0;

let y = x--; // y = 0
console.assert(x === -1, 'Test 1 x');
console.assert(y === 0, 'Test 1 y');

x = ++y; //y = 0
console.assert(x === 1, 'Test 2 x');
console.assert(y === 1, 'Test 2 y');

let z = y++; // y= 1
console.assert(x === 1, 'Test 3 x');
console.assert(y === 2, 'Test 3 y');
console.assert(z === 1, 'Test 3 z');

x = --z; // z= 1
console.assert(x === 0, 'Test 4 x');
console.assert(y === 2, 'Test 4 y');
console.assert(z === 0, 'Test 4 z');

```

[TOP](#debuggercises)

---

## /3.js 

> pass 
>
> [review source](../../../exercises/14-increment-and-decrement/exercises/3.js)

```txt
+ PASS: Test 1 x
+ PASS: Test 1 y
+ PASS: Test 2 x
+ PASS: Test 2 y
+ PASS: Test 3 x
+ PASS: Test 3 y
+ PASS: Test 3 z
+ PASS: Test 4 x
+ PASS: Test 4 y
+ PASS: Test 4 z
```

```js
'use strict';

let x = 0;

let y = x--;
console.assert(x === -1, 'Test 1 x');
console.assert(y === 0, 'Test 1 y');

x = y--; // y = 0
console.assert(x === 0, 'Test 2 x');
console.assert(y === -1, 'Test 2 y');

let z = x++; // y -1
console.assert(x === 1, 'Test 3 x');
console.assert(y === -1, 'Test 3 y');
console.assert(z === 0, 'Test 3 z');

y = --z; // z 0
console.assert(x === 1, 'Test 4 x');
console.assert(y === -1, 'Test 4 y');
console.assert(z === -1, 'Test 4 z');

```

[TOP](#debuggercises)

