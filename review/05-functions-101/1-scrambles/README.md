# Debuggercises 

> 6/22/2020, 12:46:13 PM 

## [exercises](../../README.md)/[05-functions-101](../README.md)/1-scrambles 

- [/1-write-expected.js](#1-write-expectedjs) - _pass_ 
- [/2-write-arguments.js](#2-write-argumentsjs) - _error (syntax)_ 
- [/3-write-function.js](#3-write-functionjs) - _error (syntax)_ 
---

## /1-write-expected.js 

> pass 
>
> [review source](../../../exercises/05-functions-101/1-scrambles/1-write-expected.js)

```txt
+ PASS: Assertion 1
+ PASS: Assertion 2
+ PASS: Assertion 3
+ PASS: Assertion 4
+ PASS: Assertion 5
+ PASS: Assertion 6
```

```js
'use strict';

function scramble(param1, param2, param3) {
	return `${param3}${param1}${param2}`;
}

const arg1 = 'a';
const arg2 = 'c';
const arg3 = 'b';
const returned1 = scramble(arg1, arg2, arg3);
const isTrue1 = returned1 === 'bac';
console.assert(isTrue1, 'Assertion 1');

const arg4 = 'a';
const arg5 = 'b';
const arg6 = 'c';
const returned2 = scramble(arg4, arg5, arg6);
const isTrue2 = returned2 === 'cab';
console.assert(isTrue2, 'Assertion 2');

const arg7 = 'c';
const arg8 = 'b';
const arg9 = 'a';
const returned3 = scramble(arg8, arg9, arg7);
const isTrue3 = returned3 === 'cba';
console.assert(isTrue3, 'Assertion 3');

const arg10 = 'b';
const arg11 = 'a';
const arg12 = 'c';
const returned4 = scramble(arg12, arg11, arg10);
const isTrue4 = returned4 === 'bca';
console.assert(isTrue4, 'Assertion 4');

const arg13 = 'b';
const arg14 = 'c';
const arg15 = 'a';
const returned5 = scramble(arg14, arg15, arg13);
const isTrue5 = returned5 === 'bca';
console.assert(isTrue5, 'Assertion 5');

const arg16 = 'c';
const arg17 = 'a';
const arg18 = 'b';
const returned6 = scramble(arg18, arg17, arg16);
const isTrue6 = returned6 === 'cba';
console.assert(isTrue6, 'Assertion 6');

```

[TOP](#debuggercises)

---

## /2-write-arguments.js 

> error (syntax) 
>
> [review source](../../../exercises/05-functions-101/1-scrambles/2-write-arguments.js)

```txt
UNCAUGHT:   ...  /exercises/05-functions-101/1-scrambles/2-write-arguments.js:1
(function (exports, require, module, __filename, __dirname) { <<<<<<< HEAD
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
<<<<<<< HEAD
function mystery(a, b) {
	let result = '';
	if (typeof a === b) {
		result = 'path 1';
	} else if (a === typeof b) {
		result = 'path 2';
	} else {
		result = 'path 3';
	}
	return result;
}

const _1_expect = 'path 1';
const _1_actual = mystery(true, 'boolean');
||||||| merged common ancestors
function mystery(a, b) {
  let result = '';
  if (typeof a === b) {
    result = 'path 1';
  } else if (a === typeof b) {
    result = 'path 2';
  } else {
    result = 'path 3';
  }
  return result;
}


const _1_expect = 'path 1';
const _1_actual = mystery(_, _);
=======
'use strict';

const scramble = (param1, param2, param3) => {
  return `${param1}${param3}${param2}`;
};


const _1_expect = 'cab';
const _1_arg_1 = _;
const _1_arg_2 = _;
const _1_arg_3 = _;
const _1_actual = scramble(_1_arg_1, _1_arg_2, _1_arg_3);
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6
console.assert(_1_actual === _1_expect, 'Test 1');

<<<<<<< HEAD
const _2_expect = 'path 1';
const _2_actual = mystery(NaN, 'number');
||||||| merged common ancestors
const _2_expect = 'path 1';
const _2_actual = mystery(_, _);
=======
const _2_expect = 'abc';
const _2_arg_1 = "c";
const _2_arg_2 = "b";
const _2_arg_3 = "a";
const _2_actual = scramble(_, _, _);
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6
console.assert(_2_actual === _2_expect, 'Test 2');

<<<<<<< HEAD
const _3_expect = 'path 1';
const _3_actual = mystery(null, 'object');
||||||| merged common ancestors
const _3_expect = 'path 1';
const _3_actual = mystery(_, _);
=======
const _3_expect = 'abc';
const _3_arg_1 = "b";
const _3_arg_2 = "a";
const _3_arg_3 = "c";
const _3_actual = scramble(_, _, _);
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6
console.assert(_3_actual === _3_expect, 'Test 3');

<<<<<<< HEAD
const _4_expect = 'path 2';
const _4_actual = mystery('boolean', false);
||||||| merged common ancestors
const _4_expect = 'path 2';
const _4_actual = mystery(_, _);
=======
const _4_expect = 'cba';
const _4_arg_1 = _;
const _4_arg_2 = _;
const _4_arg_3 = _;
const _4_actual = scramble(_4_arg_1, _4_arg_2, _4_arg_3);
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6
console.assert(_4_actual === _4_expect, 'Test 4');

<<<<<<< HEAD
const _5_expect = 'path 2';
const _5_actual = mystery('undefined', undefined);
||||||| merged common ancestors
const _5_expect = 'path 2';
const _5_actual = mystery(_, _);
=======
const _5_expect = 'abc';
const _5_arg_1 = "c";
const _5_arg_2 = "a";
const _5_arg_3 = "b";
const _5_actual = scramble(_, _, _);
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6
console.assert(_5_actual === _5_expect, 'Test 5');

<<<<<<< HEAD
const _6_expect = 'path 2';
const _6_actual = mystery('boolean', true);
||||||| merged common ancestors
const _6_expect = 'path 2';
const _6_actual = mystery(_, _);
=======
const _6_expect = 'bac';
const _6_arg_1 = _;
const _6_arg_2 = _;
const _6_arg_3 = _;
const _6_actual = scramble(_6_arg_1, _6_arg_2, _6_arg_3);
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6
console.assert(_6_actual === _6_expect, 'Test 6');

<<<<<<< HEAD
const _7_expect = 'path 3';
const _7_actual = mystery(2, 2);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'path 3';
const _8_actual = mystery(0, 0);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = 'path 3';
const _9_actual = mystery('hello', 'hello');
console.assert(_9_actual === _9_expect, 'Test 9');
||||||| merged common ancestors
const _7_expect = 'path 3';
const _7_actual = mystery(_, _);
console.assert(_7_actual === _7_expect, 'Test 7');

const _8_expect = 'path 3';
const _8_actual = mystery(_, _);
console.assert(_8_actual === _8_expect, 'Test 8');

const _9_expect = 'path 3';
const _9_actual = mystery(_, _);
console.assert(_9_actual === _9_expect, 'Test 9');
=======
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6

```

[TOP](#debuggercises)

---

## /3-write-function.js 

> error (syntax) 
>
> [review source](../../../exercises/05-functions-101/1-scrambles/3-write-function.js)

```txt
UNCAUGHT:   ...  /exercises/05-functions-101/1-scrambles/3-write-function.js:1
(function (exports, require, module, __filename, __dirname) { <<<<<<< HEAD
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
<<<<<<< HEAD
function mystery(a, b) {
	if (Boolean(a) === false && Boolean(b) === false) {
		return 'path 1';
	} else if (typeof a === typeof b) {
		return 'path 2';
	} else {
		return 'path 3';
	}
}
const _1_expect = 'path 1';
const _1_actual = mystery(0, null);
||||||| merged common ancestors
function mystery(a, b) {

}


const _1_expect = 'path 1';
const _1_actual = mystery(0, null);
=======
'use strict';

const scramble = () => {

};

const _1_expect = "yxz";
const _1_actual = scramble('x', 'z', 'y');
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = "zxy";
const _2_actual = scramble('x', 'y', 'z');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = "zxy";
const _3_actual = scramble('x', 'z', 'y');
console.assert(_3_actual === _3_expect, 'Test 3');


```

[TOP](#debuggercises)

