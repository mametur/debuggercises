# Debuggercises 

> 6/22/2020, 12:32:03 PM 

## [exercises](../../README.md)/[06-explicit-coercion](../README.md)/exercises 

- [/1-write-expected.js](#1-write-expectedjs) - _error (syntax)_ 
- [/2-write-arguments.js](#2-write-argumentsjs) - _error (syntax)_ 
- [/3-write-function.js](#3-write-functionjs) - _error (syntax)_ 
---

## /1-write-expected.js 

> error (syntax) 
>
> [review source](../../../exercises/06-explicit-coercion/exercises/1-write-expected.js)

```txt
UNCAUGHT:   ...  /exercises/06-explicit-coercion/exercises/1-write-expected.js:3
<<<<<<< HEAD
^^

SyntaxError: Unexpected token <<
    at createScript (vm.js:80:10)
    at Object.runInThisContext (vm.js:139:10)
    at Module._compile (module.js:616:28)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7) 
```

```js
'use strict';

<<<<<<< HEAD
function mystery(x) {
	if (typeof x === 'boolean') {
		throw new TypeError('x cannot be a boolean');
	}
||||||| merged common ancestors
function mystery(x) {
  if (typeof x === 'boolean') { throw new TypeError('x cannot be a boolean'); }
=======
const mystery = (x) => {
  if (typeof x === 'boolean') { throw new TypeError('x cannot be a boolean'); }
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6

<<<<<<< HEAD
	const booleaned = Boolean(x);
	const numbered = Number(booleaned);
	return numbered;
}
||||||| merged common ancestors
  const booleaned = Boolean(x);
  const numbered = Number(booleaned);
  return numbered;
}
=======
  const booleaned = Boolean(x);
  const numbered = Number(booleaned);
  return numbered;
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6

// write the expected return value

const _1_expect = 0;
const _1_actual = mystery(undefined); //Booleaned ->False, numbered-> 0
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 0;
const _2_actual = mystery(null); //Booleaned-> False , numbered -> 0
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 1;
const _3_actual = mystery('false'); // Booleaned-> True , numbered-> 1
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 0;
const _4_actual = mystery('');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 0;
const _5_actual = mystery(0);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 1;
const _6_actual = mystery('  ');
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = 1;
const _7_actual = mystery(-1);
console.assert(_7_actual === _7_expect, 'Test 7');

<<<<<<< HEAD
const _8_expect = 1;
const _8_actual = mystery('true');
||||||| merged common ancestors
const _8_expect = _;
const _8_actual = mystery(true);
=======
const _8_expect = _;
const _8_actual = mystery('true');
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = 1;
const _9_actual = mystery(1);
console.assert(_9_actual === _9_expect, 'Test 9');

```

[TOP](#debuggercises)

---

## /2-write-arguments.js 

> error (syntax) 
>
> [review source](../../../exercises/06-explicit-coercion/exercises/2-write-arguments.js)

```txt
UNCAUGHT:   ...  /exercises/06-explicit-coercion/exercises/2-write-arguments.js:3
<<<<<<< HEAD
^^

SyntaxError: Unexpected token <<
    at createScript (vm.js:80:10)
    at Object.runInThisContext (vm.js:139:10)
    at Module._compile (module.js:616:28)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7) 
```

```js
'use strict';

<<<<<<< HEAD
function mystery(x) {
	if (typeof x === 'string') {
		throw new TypeError('x cannot be a string');
	}
||||||| merged common ancestors
function mystery(x) {
  if (typeof x === 'string') { throw new TypeError('x cannot be a string'); }
=======
const mystery = (x) => {
  if (typeof x === 'string') { throw new TypeError('x cannot be a string'); }
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6

<<<<<<< HEAD
	const stringed = String(x);
	const numbered = Number(stringed);
	return numbered;
}
||||||| merged common ancestors
  const stringed = String(x);
  const numbered = Number(stringed);
  return numbered;
}
=======
  const stringed = String(x);
  const numbered = Number(stringed);
  return numbered;
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6

// find an argument to get the expected return value

const _1_expect = -1;
const _1_actual = mystery(-1);
console.assert(Object.is(_1_actual, _1_expect), 'Test 1');

const _2_expect = 0;
const _2_actual = mystery(0);
console.assert(Object.is(_2_actual, _2_expect), 'Test 2');

const _3_expect = 1;
const _3_actual = mystery(1);
console.assert(Object.is(_3_actual, _3_expect), 'Test 3');

const _4_expect = 0.5;
const _4_actual = mystery(0.5);
console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

const _5_expect = 1000;
const _5_actual = mystery(1e3);
console.assert(Object.is(_5_actual, _5_expect), 'Test 5');

const _6_expect = NaN;
const _6_actual = mystery(undefined);
console.assert(Object.is(_6_actual, _6_expect), 'Test 6');

const _7_expect = NaN;
const _7_actual = mystery(false);
console.assert(Object.is(_7_actual, _7_expect), 'Test 7');

const _8_expect = NaN;
const _8_actual = mystery(true);
console.assert(Object.is(_8_actual, _8_expect), 'Test 8');

const _9_expect = NaN;
const _9_actual = mystery(null);
console.assert(Object.is(_9_actual, _9_expect), 'Test 9');

```

[TOP](#debuggercises)

---

## /3-write-function.js 

> error (syntax) 
>
> [review source](../../../exercises/06-explicit-coercion/exercises/3-write-function.js)

```txt
UNCAUGHT:   ...  /exercises/06-explicit-coercion/exercises/3-write-function.js:8
<<<<<<< HEAD
^^

SyntaxError: Unexpected token <<
    at createScript (vm.js:80:10)
    at Object.runInThisContext (vm.js:139:10)
    at Module._compile (module.js:616:28)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7) 
```

```js
'use strict';

/* write a function to pass the test cases
  it can be solved using only
   Number
   ===
*/
<<<<<<< HEAD
function mystery(x, y) {
	if (Number(x) === Number(y)) {
		return true;
	} else {
		return false;
	}
}
||||||| merged common ancestors
function mystery(x, y) {

}
=======
const mystery = (x, y) => {

};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6

// all of the test cases are correct

const _1_expect = true;
const _1_actual = mystery('', '');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = true;
const _2_actual = mystery(false, null);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = false;
const _3_actual = mystery('asdf', 'asdf');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = true;
const _4_actual = mystery('1.0', '1');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = false;
const _5_actual = mystery(false, true);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = false;
const _6_actual = mystery('1.5', '1');
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = true;
const _7_actual = mystery('1e3', '1000');
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = true;
const _8_actual = mystery(false, '');
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = false;
const _9_actual = mystery(undefined, undefined);
console.assert(_9_actual === _9_expect, 'Test 9');

```

[TOP](#debuggercises)

