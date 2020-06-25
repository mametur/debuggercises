'use strict';

let x = 0;

let y = x--; // y = 0
console.assert(x === -1, 'Test 1 x');
console.assert(y === 0, 'Test 1 y');

x = ++y; //y = 0
console.assert(x === 1, 'Test 2 x');
console.assert(y === 1, 'Test 2 y');

let z = y++; // y= 1
console.assert(x === 1, 'Test 3 x');
console.assert(y === 2, 'Test 3 y');
console.assert(z === 1, 'Test 3 z');

x = --z; // z= 1
console.assert(x === 0, 'Test 4 x');
console.assert(y === 2, 'Test 4 y');
console.assert(z === 0, 'Test 4 z');
