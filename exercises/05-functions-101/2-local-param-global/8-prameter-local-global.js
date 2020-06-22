'use strict';

let global = '.';

<<<<<<< HEAD
function jazz(parameter) {
	const local = `jazzy ${global}`;
	global = `#${global}`;
	return `${parameter} ${local} ${global}`;
}
||||||| merged common ancestors
function jazz(parameter) {
  const local = `jazzy ${global}`;
  global = `#${global}`;
  return `${parameter} ${local} ${global}`;
}
=======
const jazz = (parameter) => {
  const local = `jazzy ${global}`;
  global = `#${global}`;
  return `${parameter} ${local} ${global}`;
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6

const globalTest1 = global === '.';
console.assert(globalTest1, 'Test 1: global');

const jazzReturn1 = jazz('hello'); //local-> 'jazzy .'  global-> '#.'
const jazzTest1 = jazzReturn1 === 'hello jazzy . #.';
console.assert(jazzTest1, 'Test 2: jazz');

const globalTest2 = global === '#.';
console.assert(globalTest2, 'Test 3: global');

global = 'hi';

const globalTest3 = global === 'hi';
console.assert(globalTest3, 'Test 4: global');

const jazzReturn2 = jazz('boat'); // local -> 'jazzy hi' global-> '#hi'
const jazzTest2 = jazzReturn2 === 'boat jazzy hi #hi';
console.assert(jazzTest2, 'Test 5: jazz');

const globalTest4 = global === '#hi';
console.assert(globalTest4, 'Test 6: global');

global = 'bye.';

const globalTest5 = global === 'bye.';
console.assert(globalTest5, 'Test 7: global');
