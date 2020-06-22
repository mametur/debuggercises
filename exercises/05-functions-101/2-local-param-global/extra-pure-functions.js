'use strict';

// PURE FUNCTIONS are a habit, not a language feature:
//  - only use LOCAL VARIABLES and PARAMETERS in your function body

// writing pure functions is easier to understand and debug
//  because their behavior is consistent
//  you'll get the same return value every time you use the same arguments

// you can even check if your function is pure without executing it!
// point at each variable inside the function body and ask
//  1. is this declared as a parameter?
//  2. is this declared in the body with let, const or var?
// if the answer to both functions is "no", it's not a pure function

// which of these are pure functions?

<<<<<<< HEAD
/*function a() {
||||||| merged common ancestors
function a() {
=======
const a = () => {
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6
  return x + y;
<<<<<<< HEAD
}*/
function a() {
	let x = 1;
	let y = 2;
	return x + y;
}
||||||| merged common ancestors
}
=======
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6

<<<<<<< HEAD
/*
function b(y) {
	result = x + y;
	return result;
}
*/
function b(y) {
	let x = 1;
	return x + y;
}
||||||| merged common ancestors
function b(y) {
  result = x + y;
  return result;
}
=======
const b = (y) => {
  result = x + y;
  return result;
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6

<<<<<<< HEAD
function c(y, x) {
	const m = y - x; // just this function is pure
	return x + m;
}
||||||| merged common ancestors
function c(y, x) {
  const m = y - x
  return x + m;
}
=======
const c = (y, x) => {
  const m = y - x
  return x + m;
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6

<<<<<<< HEAD
/*
function d(x, y) {
	const a = 'hi';
	return x + y + z;
}*/

function d(x, y) {
	const a = 'hi';
	return x + y + a;
}
/*
||||||| merged common ancestors
function d(x, y) {
  const a = 'hi';
  return x + y + z;
}
=======
const d = (x, y) => {
  const a = 'hi';
  return x + y + z;
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6

<<<<<<< HEAD
function e(x, y) {
	p += z;
	return z + y;
}
*/
function e(x, y) {
	let p;
	p += x;
	return p + y;
}
||||||| merged common ancestors
function e(x, y) {
  p += z;
  return z + y;
}
=======
const e = (x, y) => {
  p += z;
  return z + y;
};

const f = (p) => {
  return p * 2;
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6
