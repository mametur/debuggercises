'use strict';

let global = 'awesome';

<<<<<<< HEAD
function funk() {
	const local = 'funky';
	global = `#${global}`;
	return `${local} ${global}`;
}
||||||| merged common ancestors
function funk() {
  const local = 'funky'
  global = `#${global}`;
  return `${local} ${global}`;
}
=======
const funk = () => {
  const local = 'funky'
  global = `#${global}`;
  return `${local} ${global}`;
};
>>>>>>> d7a0df91cdbeaabba9264cb3ac7fe6f23377b6f6

const funkReturn1 = funk();
const funkTest1 = funkReturn1 === 'funky #awesome';
console.assert(funkTest1, 'Test 1: funk');

const globalTest1 = global === '#awesome';
console.assert(globalTest1, 'Test 2: global');

global = `${global}!`; //#awesome!

const globalTest2 = global === '#awesome!';
console.assert(globalTest2, 'Test 3: global');

const funkReturn2 = funk(); //global-> ##awesome!
const funkTest2 = funkReturn2 === 'funky ##awesome!';
console.assert(funkTest2, 'Test 4: funk');

const globalTest3 = global === '##awesome!';
console.assert(globalTest3, 'Test 5: global');

global = ':(';

const globalTest4 = global === ':(';
console.assert(globalTest4, 'Test 6: global');

const funkReturn3 = funk(); //global -> #:(
const funkTest3 = funkReturn3 === 'funky #:(';
console.assert(funkTest3, 'Test 7: funk');

const globalTest5 = global === '#:(';
console.assert(globalTest5, 'Test 8: global');

global = 'bye!';

const globalTest6 = global === 'bye!';
console.assert(globalTest6, 'Test 9: global');
