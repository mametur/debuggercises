'use strict';

/**
 * among the greatest mysteries in the world. what does this thing do?
 *  no matter, you can still refactor it!
 * @param {any} a
 * @param {any} b
 * @returns {any}
 */
/*
const mystery = (a, b) => (Boolean(a) !== Boolean(b))
  || b ? a && b : !b && !a;
*/
const mystery = (a, b) => {
	return Boolean(a) !== Boolean(b) || b ? a && b : !b && !a;
};

const _1_arg1 = 1;
const _1_arg2 = 1;
const _1_expect = 1;
const _1_actual = mystery(_1_arg1, _1_arg2);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_arg1 = 1;
const _2_arg2 = 0;
const _2_expect = 0;
const _2_actual = mystery(_2_arg1, _2_arg2);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_arg1 = 0;
const _3_arg2 = 1;
const _3_expect = 0;
const _3_actual = mystery(_3_arg1, _3_arg2);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_arg1 = 0;
const _4_arg2 = 0;
const _4_expect = true;
const _4_actual = mystery(_4_arg1, _4_arg2);
console.assert(_4_actual === _4_expect, 'Test 4');

const _5_arg1 = null;
const _5_arg2 = 'hello!';
const _5_expect = null;
const _5_actual = mystery(_5_arg1, _5_arg2);
console.assert(_5_actual === _5_expect, 'Test 5');

const _6_arg1 = Infinity;
const _6_arg2 = 0;
const _6_expect = 0;
const _6_actual = mystery(_6_arg1, _6_arg2);
console.assert(_6_actual === _6_expect, 'Test 6');
