# Debuggercises 

> 6/28/2020, 5:00:23 PM 

## [exercises](../../README.md)/[09-block-scope](../README.md)/2-missing-variables 

- [/1.js](#1js) - _pass_ 
- [/2.js](#2js) - _pass_ 
- [/3.js](#3js) - _pass_ 
---

## /1.js 

> pass 
>
> [review source](../../../exercises/09-block-scope/2-missing-variables/1.js)

```txt
+ PASS: Test 1
```

```js
'use strict';

const a = 3;
let b = 3;
{
	const a = 5;
	b = a; //5
}
console.assert(b === 5, 'Test 1');

```

[TOP](#debuggercises)

---

## /2.js 

> pass 
>
> [review source](../../../exercises/09-block-scope/2-missing-variables/2.js)

```txt
LOG: hi!
+ PASS: Test 1
+ PASS: Test 2
```

```js
'use strict';

let x = 'hi!';
let y = 'hi!';
{
	x = 'hi!';
	let y = 'bye!'; //block variable
}
console.log(x);
x = 'bye!';
console.assert(y === 'hi!', 'Test 1');
console.assert(x === 'bye!', 'Test 2');

```

[TOP](#debuggercises)

---

## /3.js 

> pass 
>
> [review source](../../../exercises/09-block-scope/2-missing-variables/3.js)

```txt
+ PASS: Test 1
```

```js
'use strict';

let m = 0;
{
	let l = 10; //block v
	const m = 1; //block v
	l = 0;
}
console.assert(m === 0, 'Test 1');

```

[TOP](#debuggercises)

