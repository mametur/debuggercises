'use strict';

let a = 2;
let b = 1;
let temp = null;

// write some code!
temp = a;
a = b;
b = temp;

// fill in the _ to pass the assertions

const isTrue1 = a === 1;
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 2;
console.assert(isTrue2, 'Test 2');

const isTrue3 = temp === 2;
console.assert(isTrue3, 'Test 3');
