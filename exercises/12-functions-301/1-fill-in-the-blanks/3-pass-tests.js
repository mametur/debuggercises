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
