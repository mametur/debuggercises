# Debuggercises 

> 6/22/2020, 12:32:03 PM 

## [exercises](../../README.md)/[10-conditional-statements](../README.md)/1-execution-paths 

- [/1-write-expected.js](#1-write-expectedjs) - _error (syntax)_ 
- [/2-write-arguments.js](#2-write-argumentsjs) - _incomplete_ 
- [/3-write-arguments.js](#3-write-argumentsjs) - _error (syntax)_ 
- [/4-write-function.js](#4-write-functionjs) - _error (syntax)_ 
- [/5-write-function.js](#5-write-functionjs) - _error_ 
---

## /1-write-expected.js 

> error (syntax) 
>
> [review source](../../../exercises/10-conditional-statements/1-execution-paths/1-write-expected.js)

```txt
UNCAUGHT:   ...  /exercises/10-conditional-statements/1-execution-paths/1-write-expected.js:1
(function (exports, require, module, __filename, __dirname) { <<<<<<< HEAD:exercises/09-conditionals/1-execution-paths/1-write-expected.js
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
<<<<<<< HEAD:exercises/09-conditionals/1-execution-paths/1-write-expected.js
function mystery(a, b) {
	let result = '';
	if (a && b) {
		// look for falsy
		result = 'path 1';
	} else if (!a && !b) {
		result = 'path 2';
	} else {
		result = 'path 3';
	}
	return result;
}
||||||| merged common ancestors
function mystery(a, b) {
  let result = '';
  if (a && b) {
    result = 'path 1';
  } else if (!a && !b) {
    result = 'path 2';
  } else {
    result = 'path 3';
  }
  return result;
}
=======
const mystery = (a, b) => {
  let result = '';
  if (a && b) {
    result = 'path 1';
  } else if (!a && !b) {
    result = 'path 2';
  } else {
    result = 'path 3';
  }
  return result;
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:exercises/10-conditional-statements/1-execution-paths/1-write-expected.js

const _1_expect = 'path 2';
const _1_actual = mystery(0, null); // Boolean(0,null) is false
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'path 3';
const _2_actual = mystery(false, 'hello');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'path 3';
const _3_actual = mystery(true, undefined);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'path 1';
const _4_actual = mystery(1, -1);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'path 2';
const _5_actual = mystery('', '');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'path 1';
const _6_actual = mystery('_6_expect', '_6_actual');
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = 'path 3';
const _7_actual = mystery(0, 12);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'path 2';
const _8_actual = mystery(null, undefined);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = 'path 3';
const _9_actual = mystery(NaN, Infinity);
console.assert(_9_actual === _9_expect, 'Test 9');

```

[TOP](#debuggercises)

---

## /2-write-arguments.js 

> incomplete 
>
> [review source](../../../exercises/10-conditional-statements/1-execution-paths/2-write-arguments.js)

```txt
UNCAUGHT: ReferenceError: _ is not defined
    at Object.<anonymous> (  ...  /exercises/10-conditional-statements/1-execution-paths/2-write-arguments.js:15:27)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
    at evaluate (  ...  /scripts/lib/evaluate.js:28:7)
    at Object.<anonymous> (  ...  /scripts/review.js:116:1) 
```

```js
const mystery = (a, b) => {
  let result = '';
  if (typeof a === b) {
    result = 'path 1';
  } else if (a === typeof b) {
    result = 'path 2';
  } else {
    result = 'path 3';
  }
  return result;
};

// path 1
const _1_expect = 'path 1';
const _1_actual = mystery(_, _);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'path 1';
const _2_actual = mystery(_, _);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'path 1';
const _3_actual = mystery(_, _);
console.assert(_3_actual === _3_expect, 'Test 3');

// path 2
const _4_expect = 'path 2';
const _4_actual = mystery(_, _);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'path 2';
const _5_actual = mystery(_, _);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'path 2';
const _6_actual = mystery(_, _);
console.assert(_6_actual === _6_expect, 'Test 6');

// path 3
const _7_expect = 'path 3';
const _7_actual = mystery(_, _);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'path 3';
const _8_actual = mystery(_, _);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = 'path 3';
const _9_actual = mystery(_, _);
console.assert(_9_actual === _9_expect, 'Test 9');

```

[TOP](#debuggercises)

---

## /3-write-arguments.js 

> error (syntax) 
>
> [review source](../../../exercises/10-conditional-statements/1-execution-paths/3-write-arguments.js)

```txt
UNCAUGHT:   ...  /exercises/10-conditional-statements/1-execution-paths/3-write-arguments.js:1
(function (exports, require, module, __filename, __dirname) { <<<<<<< HEAD:exercises/09-conditionals/1-execution-paths/2-write-arguments.js
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
<<<<<<< HEAD:exercises/09-conditionals/1-execution-paths/2-write-arguments.js
function mystery(a, b) {
	let result = '';
	if (typeof a === 'number') {
		if (typeof b === 'number') {
			result = 'path 1';
		} else {
			result = 'path 2';
		}
	} else {
		if (typeof a === typeof b) {
			result = 'path 3';
		} else {
			result = 'path 4';
		}
	}
	return result;
}
||||||| merged common ancestors
function mystery(a, b) {
  let result = '';
  if (typeof a === 'number') {
    if (typeof b === 'number') {
      result = 'path 1';
    } else {
      result = 'path 2';
    }
  } else {
    if (typeof a === typeof b) {
      result = 'path 3';
    } else {
      result = 'path 4';
    }
  }
  return result;
}
=======
const mystery = (a, b) => {
  let result = '';
  if (typeof a === 'number') {
    if (typeof b === 'number') {
      result = 'path 1';
    } else {
      result = 'path 2';
    }
  } else {
    if (typeof a === typeof b) {
      result = 'path 3';
    } else {
      result = 'path 4';
    }
  }
  return result;
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:exercises/10-conditional-statements/1-execution-paths/3-write-arguments.js

// path 1
const _1_expect = 'path 1';
const _1_actual = mystery(0, NaN);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'path 1';
const _2_actual = mystery(1, 5);
console.assert(_2_actual === _2_expect, 'Test 2');

// path 2
const _3_expect = 'path 2';
const _3_actual = mystery(NaN, undefined);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'path 2';
const _4_actual = mystery(1, null);
console.assert(_4_actual === _4_expect, 'Test 4');

// path 3
const _5_expect = 'path 3';
const _5_actual = mystery('', '');
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'path 3';
const _6_actual = mystery('_6_expect', '_6_actual');
console.assert(_6_actual === _6_expect, 'Test 6');

// path 4
const _7_expect = 'path 4';
const _7_actual = mystery(null, false);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'path 4';
const _8_actual = mystery(null, 'tada');
console.assert(_8_actual === _8_expect, 'Test 8');

```

[TOP](#debuggercises)

---

## /4-write-function.js 

> error (syntax) 
>
> [review source](../../../exercises/10-conditional-statements/1-execution-paths/4-write-function.js)

```txt
UNCAUGHT:   ...  /exercises/10-conditional-statements/1-execution-paths/4-write-function.js:1
(function (exports, require, module, __filename, __dirname) { <<<<<<< HEAD:exercises/09-conditionals/1-execution-paths/3-write-function.js
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
<<<<<<< HEAD:exercises/09-conditionals/1-execution-paths/3-write-function.js
function mystery(a, b) {
	let result = '';
	if (a && b) {
		result = 'path 1';
	} else if (!a && !b) {
		result = 'path 2';
	} else if (typeof a === typeof b) {
		result = 'path 3';
	} else {
		result = 'path 4';
	}
	return result;
}
||||||| merged common ancestors
function mystery(a, b) {
  let result = '';
  if (_) {
    result = 'path 1';
  } else if (_) {
    result = 'path 2';
  } else if (_) {
    result = 'path 3';
  } else {
    result = 'path 4';
  }
  return result;
}
=======
const mystery = (a, b) => {
  let result = '';
  if (_) {
    result = 'path 1';
  } else if (_) {
    result = 'path 2';
  } else if (_) {
    result = 'path 3';
  } else {
    result = 'path 4';
  }
  return result;
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:exercises/10-conditional-statements/1-execution-paths/4-write-function.js

// path 1
const _01_expect = 'path 1';
const _01_actual = mystery(1, 'turtle'); // both true
console.assert(_01_actual === _01_expect, 'Test 01');

const _02_expect = 'path 1';
const _02_actual = mystery('turtle', 'turtle'); //both true
console.assert(_02_actual === _02_expect, 'Test 02');

const _03_expect = 'path 1';
const _03_actual = mystery(42, true); // both true
console.assert(_03_actual === _03_expect, 'Test 03');

// path 2
const _04_expect = 'path 2';
const _04_actual = mystery(0, ''); //both false
console.assert(_04_actual === _04_expect, 'Test 04');

const _05_expect = 'path 2';
const _05_actual = mystery(null, NaN); // both false
console.assert(_05_actual === _05_expect, 'Test 05');

const _06_expect = 'path 2';
const _06_actual = mystery(false, false); // both false
console.assert(_06_actual === _06_expect, 'Test 06');

// path 3
const _07_expect = 'path 3';
const _07_actual = mystery(0, 12); // a= false b = true
console.assert(_07_actual === _07_expect, 'Test 07');

const _08_expect = 'path 3';
const _08_actual = mystery(false, true); // a false b =true
console.assert(_08_actual === _08_expect, 'Test 08');

const _09_expect = 'path 3';
const _09_actual = mystery('x', ''); // a = true b = false
console.assert(_09_actual === _09_expect, 'Test 09');

// path 4
const _10_expect = 'path 4';
const _10_actual = mystery('', true);
console.assert(_10_actual === _10_expect, 'Test 10');

const _11_expect = 'path 4';
const _11_actual = mystery(0, '12');
console.assert(_11_actual === _11_expect, 'Test 11');

const _12_expect = 'path 4';
const _12_actual = mystery(100, null);
console.assert(_12_actual === _12_expect, 'Test 12');

```

[TOP](#debuggercises)

---

## /5-write-function.js 

> error 
>
> [review source](../../../exercises/10-conditional-statements/1-execution-paths/5-write-function.js)

```txt
UNCAUGHT: AssertionError [ERR_ASSERTION]: Test 1
    at Console.assert (console.js:194:23)
    at Console.assert (  ...  /scripts/lib/console-catcher.js:13:21)
    at Object.<anonymous> (  ...  /exercises/10-conditional-statements/1-execution-paths/5-write-function.js:8:9)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18) 
```

```js
const mystery = (a, b) => {

};


const _1_expect = 'path 1';
const _1_actual = mystery(0, null);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'path 1';
const _2_actual = mystery('', undefined);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'path 1';
const _3_actual = mystery(NaN, false);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'path 2';
const _4_actual = mystery('hello', 'goodbye');
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_expect = 'path 2';
const _5_actual = mystery(-1, NaN);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_expect = 'path 2';
const _6_actual = mystery(true, false);
console.assert(_6_actual === _6_expect, 'Test 6');

const _7_expect = 'path 3';
const _7_actual = mystery('hello', 100);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'path 3';
const _8_actual = mystery(true, null);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = 'path 3';
const _9_actual = mystery(0, '0');
console.assert(_9_actual === _9_expect, 'Test 9');

```

[TOP](#debuggercises)

