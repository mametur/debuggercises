# Debuggercises 

> 6/22/2020, 12:46:13 PM 

## [exercises](../../README.md)/[08-block-scope](../README.md)/1-missing-values 

- [/3.js](#3js) - _pass_ 
---

## /3.js 

> pass 
>
> [review source](../../../exercises/08-block-scope/1-missing-values/3.js)

```txt
+ PASS: Test 1: m
+ PASS: Test 2: m
+ PASS: Test 3: l
+ PASS: Test 4: m
```

```js
'use strict';

let m = 3;
console.assert(m === 3, 'Test 1: m');
{
	let l = 10;
	const m = 5;
	l = 0;
	console.assert(m === 5, 'Test 2: m');
	console.assert(l === 0, 'Test 3: l');
}
m = 20;
console.assert(m === 20, 'Test 4: m');

```

[TOP](#debuggercises)

