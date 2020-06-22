'use strict';

let m = 0;
{
	let l = 10; //block v
	const m = 1; //block v
	l = 0;
}
console.assert(m === 0, 'Test 1');
