'use strict';

// a / b
// cast both values to Number and do division
//  what happens when you divide by 0?
//  what happens when you divide by NaN?
//  what happens when you divide by Infinity?

const left = (left) => Number(left);
const right = (right) => Number(right);

const divide = (left, right) => left / right;

const _1_a = '1'; // 1
const _1_b = 1;
const _1_expect = 1;
const _1_native = divide(left(_1_a), right(_1_b));
console.assert(Object.is(_1_expect, _1_native), 'Test 1');

const _2_a = '1';
const _2_b = null; // Number(null) => 0
const _2_expect = Infinity;
const _2_native = divide(left(_2_a), right(_2_b));
console.assert(Object.is(_2_expect, _2_native), 'Test 2');

const _3_a = false; //0
const _3_b = null; //0
const _3_expect = NaN;
const _3_native = divide(left(_3_a), right(_3_b));
console.assert(Object.is(_3_expect, _3_native), 'Test 3');

const _4_a = '12'; //12
const _4_b = false; //0
const _4_expect = Infinity;
const _4_native = divide(left(_4_a), right(_4_b));
console.assert(Object.is(_4_expect, _4_native), 'Test 4');

const _5_a = false; //0
const _5_b = true; //1
const _5_expect = 0;
const _5_native = divide(left(_5_a), right(_5_b));
console.assert(Object.is(_5_expect, _5_native), 'Test 5');

const _6_a = '13'; //13
const _6_b = Infinity; //infinity
const _6_expect = 0;
const _6_native = divide(left(_6_a), right(_6_b));
console.assert(Object.is(_6_expect, _6_native), 'Test 6');

const _7_a = '18'; //18
const _7_b = 'aa'; //NaN
const _7_expect = NaN;
const _7_native = divide(left(_7_a), right(_7_b));
console.assert(Object.is(_7_expect, _7_native), 'Test 7');

const _8_a = 'hello'; //NaN
const _8_b = 'goodbye'; //NaN
const _8_expect = NaN;
const _8_native = divide(left(_8_a), right(_8_b));
console.assert(Object.is(_8_expect, _8_native), 'Test 8');

const _9_a = undefined; //NaN
const _9_b = ''; //0
const _9_expect = NaN;
const _9_native = divide(left(_9_a), right(_9_b));
console.assert(Object.is(_9_expect, _9_native), 'Test 9');
