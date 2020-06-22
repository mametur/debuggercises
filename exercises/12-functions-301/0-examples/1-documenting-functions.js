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
