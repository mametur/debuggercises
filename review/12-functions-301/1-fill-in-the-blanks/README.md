# Debuggercises 

> 6/22/2020, 1:10:47 PM 

## [exercises](../../README.md)/[12-functions-301](../README.md)/1-fill-in-the-blanks 

- [/1-write-tests.js](#1-write-testsjs) - _error (syntax)_ 
- [/2-write-tests.js](#2-write-testsjs) - _error (syntax)_ 
- [/3-pass-tests.js](#3-pass-testsjs) - _error (syntax)_ 
- [/4-pass-tests.js](#4-pass-testsjs) - _error (syntax)_ 
---

## /1-write-tests.js 

> error (syntax) 
>
> [review source](../../../exercises/12-functions-301/1-fill-in-the-blanks/1-write-tests.js)

```txt
UNCAUGHT:   ...  /exercises/12-functions-301/1-fill-in-the-blanks/1-write-tests.js:13
<<<<<<< HEAD:exercises/10-functions-201/1-fill-in-the-blanks/1-write-tests.js
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

// fill in the blanks to write 9 passing test cases for this function
// be curious!  what happens if you use strange numbers like
//  NaN, Infinity, -0.0, 1.0003, -Infinity, -NaN, ...  :) type of them number

/**
 * adds two numbers together
 * @param {number} x
 * @param {number} y
 * @returns {number} the sum of x and y
 */
<<<<<<< HEAD:exercises/10-functions-201/1-fill-in-the-blanks/1-write-tests.js
function add(x, y) {
	if (typeof x !== 'number') {
		throw new TypeError();
	}
	if (typeof y !== 'number') {
		throw new TypeError();
	}

	const result = x + y;

	if (typeof result !== 'number') {
		throw new TypeError();
	}
	return result;
}
||||||| merged common ancestors
function add(x, y) {
  if (typeof x !== 'number') { throw new TypeError(); }
  if (typeof y !== 'number') { throw new TypeError(); }

  const result = x + y;

  if (typeof result !== 'number') { throw new TypeError(); }
  return result;
}
=======
const add = (x, y) => {
  if (typeof x !== 'number') { throw new TypeError('x'); }
  if (typeof y !== 'number') { throw new TypeError('y'); }

  const result = x + y;

  if (typeof result !== 'number') { throw new TypeError('result'); }
  return result;
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:exercises/12-functions-301/1-fill-in-the-blanks/1-write-tests.js

const _1_expect = 1;
const _1_actual = add(1, 0);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 2;
const _2_actual = add(2, 0);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 1;
const _3_actual = add(0, 1);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = Infinity;
const _4_actual = add(Infinity, Infinity);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 0;
const _5_actual = add(0.0, -0.0);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = -Infinity;
const _6_actual = add(-Infinity, -Infinity);
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = 1.0003;
const _7_actual = add(1.0003, 0);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 1.0003;
const _8_actual = add(-0, 1.0003);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = -0;
const _9_actual = add(-0, -0);
console.assert(_9_actual === _9_expect, 'Test 9');

```

[TOP](#debuggercises)

---

## /2-write-tests.js 

> error (syntax) 
>
> [review source](../../../exercises/12-functions-301/1-fill-in-the-blanks/2-write-tests.js)

```txt
UNCAUGHT:   ...  /exercises/12-functions-301/1-fill-in-the-blanks/2-write-tests.js:12
<<<<<<< HEAD:exercises/10-functions-201/1-fill-in-the-blanks/2-write-tests.js
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

// fill in the blanks to write 9 passing test cases for this function
// be curious!  what happens if you use strange values?

/**
 * compares the type and value of two parameters
 * @param {any} a
 * @param {any} b
 * @returns {boolean} result of the comparison
 */
<<<<<<< HEAD:exercises/10-functions-201/1-fill-in-the-blanks/2-write-tests.js
function strictEqual(a, b) {
	// no need to check a or b, they can be any type
||||||| merged common ancestors
function strictEqual(a, b) {
  // no need to check a or b, they can be any type
=======
const strictEqual = (a, b) => {
  // no need to check a or b, they can be any type
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:exercises/12-functions-301/1-fill-in-the-blanks/2-write-tests.js

	const result = a === b;

<<<<<<< HEAD:exercises/10-functions-201/1-fill-in-the-blanks/2-write-tests.js
	if (typeof result !== 'boolean') {
		throw new TypeError();
	}
	return result;
}
||||||| merged common ancestors
  if (typeof result !== 'boolean') { throw new TypeError(); }
  return result;
}
=======
  if (typeof result !== 'boolean') { throw new TypeError('result'); }
  return result;
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:exercises/12-functions-301/1-fill-in-the-blanks/2-write-tests.js

const _1_expect = false;
const _1_actual = strictEqual(NaN, NaN);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = false;
const _2_actual = strictEqual(-NaN, NaN);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = false;
const _3_actual = strictEqual(-NaN, -NaN);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = true;
const _4_actual = strictEqual(null, null);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = false;
const _5_actual = strictEqual(null, -null);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = true;
const _6_actual = strictEqual(Infinity, Infinity);
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = false;
const _7_actual = strictEqual('1', 1);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = false;
const _8_actual = strictEqual(true, 1);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = false;
const _9_actual = strictEqual(null, 0);
console.assert(_9_actual === _9_expect, 'Test 9');

```

[TOP](#debuggercises)

---

## /3-pass-tests.js 

> error (syntax) 
>
> [review source](../../../exercises/12-functions-301/1-fill-in-the-blanks/3-pass-tests.js)

```txt
UNCAUGHT:   ...  /exercises/12-functions-301/1-fill-in-the-blanks/3-pass-tests.js:11
<<<<<<< HEAD:exercises/10-functions-201/1-fill-in-the-blanks/3-pass-tests.js
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

// write the logic to pass these tests

/**
 * checks if two values have the same truthiness
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 */
<<<<<<< HEAD:exercises/10-functions-201/1-fill-in-the-blanks/3-pass-tests.js
function sameTruthiness(a, b) {
	// no need to check a or b, they can be any type
||||||| merged common ancestors
function sameTruthiness(a, b) {
  // no need to check a or b, they can be any type
=======
const sameTruthiness = (a, b) => {
  // no need to check a or b, they can be any type
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:exercises/12-functions-301/1-fill-in-the-blanks/3-pass-tests.js

	const result = Boolean(a) === Boolean(b);

<<<<<<< HEAD:exercises/10-functions-201/1-fill-in-the-blanks/3-pass-tests.js
	if (typeof result !== 'boolean') {
		throw new TypeError();
	}
	return result;
}
||||||| merged common ancestors
  if (typeof result !== 'boolean') { throw new TypeError(); }
  return result;
}
=======
  if (typeof result !== 'boolean') { throw new TypeError('result'); }
  return result;
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:exercises/12-functions-301/1-fill-in-the-blanks/3-pass-tests.js

const _1_expect = false;
const _1_actual = sameTruthiness(1, 0);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = false;
const _2_actual = sameTruthiness('', ' ');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = false;
const _3_actual = sameTruthiness(null, 'null');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = false;
const _4_actual = sameTruthiness(false, -Infinity);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = false;
const _5_actual = sameTruthiness(NaN, 'false');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = true;
const _6_actual = sameTruthiness(2, '2');
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = true;
const _7_actual = sameTruthiness('true', true);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = true;
const _8_actual = sameTruthiness(-1, 1);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = true;
const _9_actual = sameTruthiness('hi!', 'bye :(');
console.assert(_9_actual === _9_expect, 'Test 9');

```

[TOP](#debuggercises)

---

## /4-pass-tests.js 

> error (syntax) 
>
> [review source](../../../exercises/12-functions-301/1-fill-in-the-blanks/4-pass-tests.js)

```txt
UNCAUGHT:   ...  /exercises/12-functions-301/1-fill-in-the-blanks/4-pass-tests.js:11
<<<<<<< HEAD:exercises/10-functions-201/1-fill-in-the-blanks/4-pass-tests.js
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

// write the logic to pass the tests
// describe the function's behavior in the comment

/**
 * check the value is NaN
 * @param {any} a
 * @returns {boolean}
 */
<<<<<<< HEAD:exercises/10-functions-201/1-fill-in-the-blanks/4-pass-tests.js
function mystery(a) {
	// no need to check a , they can be any type
||||||| merged common ancestors
function mystery(a) {
  // no need to check a , they can be any type
=======
const mystery = (a) => {
  // no need to check a , they can be any type
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:exercises/12-functions-301/1-fill-in-the-blanks/4-pass-tests.js

	const result = Number.isNaN(Number(a));

<<<<<<< HEAD:exercises/10-functions-201/1-fill-in-the-blanks/4-pass-tests.js
	if (typeof result !== 'boolean') {
		throw new TypeError();
	}
	return result;
}
||||||| merged common ancestors
  if (typeof result !== 'boolean') { throw new TypeError(); }
  return result;
}
=======
  if (typeof result !== 'boolean') { throw new TypeError('result'); }
  return result;
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:exercises/12-functions-301/1-fill-in-the-blanks/4-pass-tests.js

const _1_expect = false;
const _1_actual = mystery('1');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = false;
const _2_actual = mystery(true);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = false;
const _3_actual = mystery(null);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = false;
const _4_actual = mystery(8.5);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = false;
const _5_actual = mystery('Infinity');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = false;
const _6_actual = mystery('');
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = true;
const _7_actual = mystery(undefined);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = true;
const _8_actual = mystery('four');
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = true;
const _9_actual = mystery('hi!');
console.assert(_9_actual === _9_expect, 'Test 9');

```

[TOP](#debuggercises)

