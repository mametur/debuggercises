'use strict';

let m = 1;
console.assert(m === 1, 'Test 1: m');
{
	const l = m + 2;
	m = l - 1;
	console.assert(m === 2, 'Test 2: m');
	console.assert(l === 3, 'Test 3: l');
}
m = m + 2;
console.assert(m === 4, 'Test 4: m');
