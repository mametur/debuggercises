# Debuggercises 

> 6/22/2020, 12:46:13 PM 

## [exercises](../../README.md)/[10-conditional-statements](../README.md)/2-conditional-bodies 

- [/1-write-expected.js](#1-write-expectedjs) - _error (syntax)_ 
- [/2-write-arguments.js](#2-write-argumentsjs) - _error (syntax)_ 
- [/3-write-function.js](#3-write-functionjs) - _error (syntax)_ 
---

## /1-write-expected.js 

> error (syntax) 
>
> [review source](../../../exercises/10-conditional-statements/2-conditional-bodies/1-write-expected.js)

```txt
UNCAUGHT:   ...  /exercises/10-conditional-statements/2-conditional-bodies/1-write-expected.js:1
(function (exports, require, module, __filename, __dirname) { <<<<<<< HEAD:exercises/09-conditionals/2-conditional-bodies/1-write-expected.js
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
<<<<<<< HEAD:exercises/09-conditionals/2-conditional-bodies/1-write-expected.js
function mystery(a) {
	let result = '';
	if (typeof a !== 'number') {
		result = Number(a);
	} else if (a > 0) {
		result = a + a;
	} else {
		result = a - a;
	}
	return result;
}
||||||| merged common ancestors
function mystery(a) {
  let result = '';
  if (typeof a !== 'number') {
    result = Number(a);
  } else if (a > 0) {
    result = a + a;
  } else {
    result = a - a;
  }
  return result;
}
=======
const mystery = (a) => {
  let result = '';
  if (typeof a !== 'number') {
    result = Number(a);
  } else if (a > 0) {
    result = a + a;
  } else {
    result = a - a;
  }
  return result;
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:exercises/10-conditional-statements/2-conditional-bodies/1-write-expected.js

const _1_expect = 0;
const _1_actual = mystery(0);
console.assert(Object.is(_1_actual, _1_expect), 'Test 1');

const _2_expect = 202;
const _2_actual = mystery(101);
console.assert(Object.is(_2_actual, _2_expect), 'Test 2');

const _3_expect = 1;
const _3_actual = mystery(true);
console.assert(Object.is(_3_actual, _3_expect), 'Test 3');

const _4_expect = 2;
const _4_actual = mystery(1);
console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

const _5_expect = 0;
const _5_actual = mystery(-1);
console.assert(Object.is(_5_actual, _5_expect), 'Test 5');

const _6_expect = NaN;
const _6_actual = mystery('_6_expect');
console.assert(Object.is(_6_actual, _6_expect), 'Test 6');

const _7_expect = 18;
const _7_actual = mystery('18');
console.assert(Object.is(_7_actual, _7_expect), 'Test 7');

const _8_expect = 0;
const _8_actual = mystery(-18);
console.assert(Object.is(_8_actual, _8_expect), 'Test 8');

const _9_expect = NaN;
const _9_actual = mystery(undefined);
console.assert(Object.is(_9_actual, _9_expect), 'Test 9');

```

[TOP](#debuggercises)

---

## /2-write-arguments.js 

> error (syntax) 
>
> [review source](../../../exercises/10-conditional-statements/2-conditional-bodies/2-write-arguments.js)

```txt
UNCAUGHT:   ...  /exercises/10-conditional-statements/2-conditional-bodies/2-write-arguments.js:1
(function (exports, require, module, __filename, __dirname) { <<<<<<< HEAD:exercises/09-conditionals/2-conditional-bodies/2-write-arguments.js
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
<<<<<<< HEAD:exercises/09-conditionals/2-conditional-bodies/2-write-arguments.js
function mystery(a) {
	let result = '';
	if (typeof a === 'boolean') {
		result = !a;
	} else if (a) {
		result = String(a);
	} else {
		result = a;
	}
	return result;
}
||||||| merged common ancestors
function mystery(a) {
  let result = '';
  if (typeof a === 'boolean') {
    result = !a;
  } else if (a) {
    result = String(a);
  } else {
    result = a;
  }
  return result;
}
=======
const mystery = (a) => {
  let result = '';
  if (typeof a === 'boolean') {
    result = !a;
  } else if (a) {
    result = String(a);
  } else {
    result = a;
  }
  return result;
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:exercises/10-conditional-statements/2-conditional-bodies/2-write-arguments.js

const _1_expect = 0;
const _1_actual = mystery(0);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = false;
const _2_actual = mystery(true);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = '12';
const _3_actual = mystery(12);
console.assert(_3_actual === _3_expect, 'Test 3');

// there is more than one way to get '12'
const _4_expect = '12';
const _4_actual = mystery('12');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'asdf';
const _5_actual = mystery('asdf');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = true;
const _6_actual = mystery(false);
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = '18';
const _7_actual = mystery('18');
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = true;
const _8_actual = mystery(false);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = undefined;
const _9_actual = mystery(undefined);
console.assert(_9_actual === _9_expect, 'Test 9');

```

[TOP](#debuggercises)

---

## /3-write-function.js 

> error (syntax) 
>
> [review source](../../../exercises/10-conditional-statements/2-conditional-bodies/3-write-function.js)

```txt
UNCAUGHT:   ...  /exercises/10-conditional-statements/2-conditional-bodies/3-write-function.js:6
<<<<<<< HEAD:exercises/09-conditionals/2-conditional-bodies/3-write-function.js
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
/* pro tip: incremental development!
  try passing all tests for path 1, then for path 2, then for path 3
  don't move on to the next 3 tests until you've finished the path you're working on
*/

<<<<<<< HEAD:exercises/09-conditionals/2-conditional-bodies/3-write-function.js
function mystery(a, b) {
	let result = '';
	if (typeof a === typeof b) {
		result = a;
	} else if (Boolean(a) === Boolean(b)) {
		result = b;
	} else {
		result = a || b;
	}
	return result;
}
||||||| merged common ancestors
function mystery(a, b) {
  let result = '';
  if (typeof a === typeof b) {
    result = _;
  } else if (Boolean(a) === Boolean(b)) {
    result = _;
  } else {
    result = _;
  }
  return result;
}
=======
const mystery = (a, b) => {
  let result = '';
  if (typeof a === typeof b) {
    result = _;
  } else if (Boolean(a) === Boolean(b)) {
    result = _;
  } else {
    result = _;
  }
  return result;
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:exercises/10-conditional-statements/2-conditional-bodies/3-write-function.js

// path 1
const _1_expect = '12';
const _1_actual = mystery('12', 'bye');
console.assert(Object.is(_1_actual, _1_expect), 'Test 1');

const _2_expect = false;
const _2_actual = mystery(false, true);
console.assert(Object.is(_2_actual, _2_expect), 'Test 2');

const _3_expect = 100;
const _3_actual = mystery(100, 200);
console.assert(Object.is(_3_actual, _3_expect), 'Test 3');

// path 2
const _4_expect = null;
const _4_actual = mystery(NaN, null);
console.assert(Object.is(_4_actual, _4_expect), 'Test 4');

const _5_expect = 12;
const _5_actual = mystery(true, 12);
console.assert(Object.is(_5_actual, _5_expect), 'Test 5');

const _6_expect = 'bye';
const _6_actual = mystery(-2, 'bye');
console.assert(Object.is(_6_actual, _6_expect), 'Test 6');

// path 3
const _7_expect = 1;
const _7_actual = mystery(null, 1);
console.assert(Object.is(_7_actual, _7_expect), 'Test 7');

const _8_expect = true;
const _8_actual = mystery('', true);
console.assert(Object.is(_8_actual, _8_expect), 'Test 8');

const _9_expect = 'asdf';
const _9_actual = mystery('asdf', 0);
console.assert(Object.is(_9_actual, _9_expect), 'Test 9');

```

[TOP](#debuggercises)

