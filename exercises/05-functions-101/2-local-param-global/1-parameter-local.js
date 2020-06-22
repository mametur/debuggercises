'use strict';

<<<<<<< HEAD
function funk(parameter) {
	const local = `funky`;
	return `${local} ${parameter}`;
}
||||||| merged common ancestors
function funk(parameter) {
  const local = `funky`;
  return `${local} ${parameter}`;
}
=======
const funk = (parameter) => {
  const local = `funky`;
  return `${local} ${parameter}`;
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6

const funkReturn1 = funk('hello');
const funk1 = funkReturn1 === 'funky hello';
console.assert(funk1, 'Test 1: funk');

const funkReturn2 = funk('boat');
const funk2 = funkReturn2 === 'funky boat';
console.assert(funk2, 'Test 2: funk');

const funkReturn3 = funk('tree');
const funk3 = funkReturn3 === 'funky tree';
console.assert(funk3, 'Test 3: funk');

<<<<<<< HEAD
function jazz(parameter) {
	const local = `jazzy`;
	return `${local} ${parameter}`;
}
||||||| merged common ancestors


function jazz(parameter) {
  const local = `jazzy`;
  return `${local} ${parameter}`;
}
=======


const jazz = (parameter) => {
  const local = `jazzy`;
  return `${local} ${parameter}`;
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6

<<<<<<< HEAD
const jazzReturn1 = jazz('hello');
const jazz1 = jazzReturn1 === 'jazzy hello';
||||||| merged common ancestors
const jazzReturn1 = funk('hello');
const jazz1 = jazzReturn1 === _;
=======
const jazzReturn1 = jazz('hello');
const jazz1 = jazzReturn1 === _;
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6
console.assert(jazz1, 'Test 1: jazz');

<<<<<<< HEAD
const jazzReturn2 = jazz('boat');
const jazz2 = jazzReturn2 === 'jazzy boat';
||||||| merged common ancestors
const jazzReturn2 = funk('boat');
const jazz2 = jazzReturn2 === _;
=======
const jazzReturn2 = jazz('boat');
const jazz2 = jazzReturn2 === _;
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6
console.assert(jazz2, 'Test 2: jazz');

<<<<<<< HEAD
const jazzReturn3 = jazz('tree');
const jazz3 = jazzReturn3 === 'jazzy tree';
||||||| merged common ancestors
const jazzReturn3 = funk('tree');
const jazz3 = jazzReturn3 === _;
=======
const jazzReturn3 = jazz('tree');
const jazz3 = jazzReturn3 === _;
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6
console.assert(jazz3, 'Test 3: jazz');
