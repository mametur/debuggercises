function mystery(a, b) {
	if (Boolean(a) === false && Boolean(b) === false) {
		return 'path 1';
	} else if (typeof a === typeof b) {
		return 'path 2';
	} else {
		return 'path 3';
	}
}
const _1_expect = 'path 1';
const _1_actual = mystery(0, null);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'zxy';
const _2_actual = scramble('x', 'y', 'z');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'zxy';
const _3_actual = scramble('x', 'z', 'y');
console.assert(_3_actual === _3_expect, 'Test 3');
