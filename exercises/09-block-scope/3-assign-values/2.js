'use strict';

let x = null;
console.assert(x === null, 'Test 1: x');
{
	x = false; //global v
	const y = null; //block v

	console.assert(x === false, 'Test 2: x');
	console.assert(y === null, 'Test 3: y');
}
console.assert(x === false, 'Test 4: x');
