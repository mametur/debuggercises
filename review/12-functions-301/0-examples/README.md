# Debuggercises 

> 6/22/2020, 1:10:47 PM 

## [exercises](../../README.md)/[12-functions-301](../README.md)/0-examples 

- [/1-documenting-functions.js](#1-documenting-functionsjs) - _error (syntax)_ 
- [/2-enforcing-types.js](#2-enforcing-typesjs)  
---

## /1-documenting-functions.js 

> error (syntax) 
>
> [review source](../../../exercises/12-functions-301/0-examples/1-documenting-functions.js)

```txt
UNCAUGHT:   ...  /exercises/12-functions-301/0-examples/1-documenting-functions.js:23
<<<<<<< HEAD:exercises/10-functions-201/0-examples/1-documenting-functions.js
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

/* there is a conventional way to describe your functions with a comment

  to understand a function you need to know the key parts of a function
  1. BEHAVIOR: what does the function do? what is it used for?
  2. PARAMETERS: what type should they be? what are they called? how are they used?
  3. RETURN VALUE: what type will it be?

  VSCode has built-in support for writing these comments
  - https://code.visualstudio.com/Docs/languages/javascript#_jsdoc-support

  these are just comments! like this comment you're reading now
    the JS interpreter will ignore them completely
    they exist to help us humans
*/

/**
 * returns the type of any JS value
 * @param {any} value - the value to check
 * @returns {string} - the type of the parameter
 */
<<<<<<< HEAD:exercises/10-functions-201/0-examples/1-documenting-functions.js

function findTheType(value) {
	return value;
}
||||||| merged common ancestors
function findTheType(value) {
  return typeof value;
}
=======
const findTheType = (value) => {
  return typeof value;
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:exercises/12-functions-301/0-examples/1-documenting-functions.js

/**
 * adds two numbers together
 * @param {number} x
 * @param {number} y
 * @returns {number} the sum of x and y
 */
<<<<<<< HEAD:exercises/10-functions-201/0-examples/1-documenting-functions.js
function add(x, y) {
	return x + y;
}
||||||| merged common ancestors
function add(x, y) {
  return x + y
}
=======
const add = (x, y) => {
  return x + y
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:exercises/12-functions-301/0-examples/1-documenting-functions.js

/**
 * compares the type and value of two parameters
 * @param {any} a
 * @param {any} b
 * @returns {boolean} result of the comparison
 */
<<<<<<< HEAD:exercises/10-functions-201/0-examples/1-documenting-functions.js
function strictEqual(a, b) {
	return a === b;
}
||||||| merged common ancestors
function strictEqual(a, b) {
  return a === b;
}
=======
const strictEqual = (a, b) => {
  return a === b;
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:exercises/12-functions-301/0-examples/1-documenting-functions.js

/**
 * returns a new string with all of the letters reversed
 * @param {string} str - the string to be reversed
 * @returns {string} a new string, the parameter backwards
 */
<<<<<<< HEAD:exercises/10-functions-201/0-examples/1-documenting-functions.js
function reverseString(str) {
	return str.split('').reverse().join('');
}
||||||| merged common ancestors
function reverseString(str) {
  return str.split('').reverse().join('');
}
=======
const reverseString = (str) => {
  return str.split('').reverse().join('');
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6:exercises/12-functions-301/0-examples/1-documenting-functions.js

```

[TOP](#debuggercises)

---

## /2-enforcing-types.js 

>  
>
> [review source](../../../exercises/12-functions-301/0-examples/2-enforcing-types.js)

```js
'use strict';

/* comments are only helpful if they actually describe your code!

  making sure the parameters and return values match the description is important
  at first this will feel like extra work and you will make mistakes
  but soon you will find it helps with understanding your code and with debugging
  catching mistakes before they happen is always the best way to go!

  being careful about types is so important that many languages check them automatically
  JavaScript doesn't, so you'll have to learn discipline and good practices
  eventually you will encounter tools like TypeScript that check types for you
  for now you're on your own :)

  In later modules you won't be asked to write type checks for all of your functions
  this is just for exercises in the Debugging module to help you build good habits
*/


/**
 * returns the type of any JS value
 * @param {any} value - the value to check
 * @returns {string} - the type of the parameter
 */
const findTheType = (value) => {
  // no need to check value because it can be any type

  const result = typeof value;

  if (typeof result !== 'string') { throw new TypeError('result'); }
  return result;
};

/**
 * adds two numbers together
 * @param {number} x
 * @param {number} y
 * @returns {number} the sum of x and y
 */
const add = (x, y) => {
  if (typeof x !== 'number') { throw new TypeError('x'); }
  if (typeof y !== 'number') { throw new TypeError('y'); }

  const result = x + y;

  if (typeof result !== 'number') { throw new TypeError('result'); }
  return result;
}

/**
 * compares the type and value of two parameters
 * @param {any} a
 * @param {any} b
 * @returns {boolean} result of the comparison
 */
const strictEqual = (a, b) => {
  // no need to check a or b, they can be any type

  const result = a === b;

  if (typeof result !== 'boolean') { throw new TypeError('result'); }
  return result;
};

/**
 * returns a new string with all of the letters reversed
 * @param {string} str - the string to be reversed
 * @returns {string} a new string, the parameter backwards
 */
const reverseString = (str) => {
  if (typeof str !== 'string') { throw new TypeError('str'); }

  const result = str.split('').reverse().join('');

  if (typeof result !== 'string') { throw new TypeError('result'); }
  return result;
};

```

[TOP](#debuggercises)

