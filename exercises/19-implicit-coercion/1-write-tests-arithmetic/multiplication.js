'use strict';

// a * b
// cast both values to Number and do multiplication

const multiply = (left, right) => Number(left) * Number(right);

const _1_a = '1'; //1
const _1_b = 1;
const _1_expect = 1;
const _1_native = multiply(_1_a, _1_b);
console.assert(Object.is(_1_expect, _1_native), 'Test 1');

const _2_a = NaN; //NaN
const _2_b = null; //0
const _2_expect = NaN;
const _2_native = multiply(_2_a, _2_b);
console.assert(Object.is(_2_expect, _2_native), 'Test 2');

const _3_a = false; //0
const _3_b = null; //0
const _3_expect = 0;
const _3_native = multiply(_3_a, _3_b);
console.assert(Object.is(_3_expect, _3_native), 'Test 3');

const _4_a = '0.0'; //0
const _4_b = false; //0
const _4_expect = 0;
const _4_native = multiply(_4_a, _4_b);
console.assert(Object.is(_4_expect, _4_native), 'Test 4');

const _5_a = false; //0
const _5_b = true; //1
const _5_expect = 0;
const _5_native = multiply(_5_a, _5_b);
console.assert(Object.is(_5_expect, _5_native), 'Test 5');

const _6_a = '13'; //13
const _6_b = true; //1
const _6_expect = 13;
const _6_native = multiply(_6_a, _6_b);
console.assert(Object.is(_6_expect, _6_native), 'Test 6');

const _7_a = 'aa'; //NaN
const _7_b = '18'; // 18
const _7_expect = NaN;
const _7_native = multiply(_7_a, _7_b);
console.assert(Object.is(_7_expect, _7_native), 'Test 7');

const _8_a = 'aa'; //NAN
const _8_b = 'aa'; //NaN
const _8_expect = NaN;
const _8_native = multiply(_8_a, _8_b);
console.assert(Object.is(_8_expect, _8_native), 'Test 8');

const _9_a = undefined; //NAN
const _9_b = 'hellow'; //NaN
const _9_expect = NaN;
const _9_native = multiply(_9_a, _9_b);
console.assert(Object.is(_9_expect, _9_native), 'Test 9');
