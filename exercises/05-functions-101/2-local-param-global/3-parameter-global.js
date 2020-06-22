'use strict';

let global = '<3';

<<<<<<< HEAD
function jazz(parameter) {
	global = `${global} jazzy`;
	return `${global} ${parameter}`;
}
||||||| merged common ancestors
function jazz(parameter) {
  global = `${global} jazzy`;
  return `${global} ${parameter}`;
}
=======
const jazz = (parameter) => {
  global = `${global} jazzy`;
  return `${global} ${parameter}`;
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6

const jazzReturn1 = jazz('hello');
const jazz1 = jazzReturn1 === '<3 jazzy hello';
console.assert(jazz1, 'Test 1: jazz');

global = `${global}!`; //<3 jazzy!

const jazzReturn2 = jazz('boat'); // <3 jazzy! jazzy
const jazz2 = jazzReturn2 === '<3 jazzy! jazzy boat';
console.assert(jazz2, 'Test 2: jazz');

global = ':(';

const jazzReturn3 = jazz('tree'); //;( jazzy
const jazz3 = jazzReturn3 === ':( jazzy tree';
console.assert(jazz3, 'Test 3: jazz');
