'use strict';

let x = 'hi!';
let y = 'hi!';
{
	x = 'hi!';
	let y = 'bye!'; //block variable
}
console.log(x);
x = 'bye!';
console.assert(y === 'hi!', 'Test 1');
console.assert(x === 'bye!', 'Test 2');
