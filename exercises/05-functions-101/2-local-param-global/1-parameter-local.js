'use strict';

function funk(parameter) {
	const local = `funky`;
	return `${local} ${parameter}`;
}

const funkReturn1 = funk('hello');
const funk1 = funkReturn1 === 'hello funky';
console.assert(funk1, 'Test 1: funk');

const funkReturn2 = funk('boat');
const funk2 = funkReturn2 === _;
console.assert(funk2, 'Test 2: funk');

const funkReturn3 = funk('tree');
const funk3 = funkReturn3 === _;
console.assert(funk3, 'Test 3: funk');

function jazz(parameter) {
	const local = `jazzy`;
	return `${local} ${parameter}`;
}

const jazzReturn1 = funk('hello');
const jazz1 = jazzReturn1 === _;
console.assert(jazz1, 'Test 1: jazz');

const jazzReturn2 = funk('boat');
const jazz2 = jazzReturn2 === _;
console.assert(jazz2, 'Test 2: jazz');

const jazzReturn3 = funk('tree');
const jazz3 = jazzReturn3 === _;
console.assert(jazz3, 'Test 3: jazz');
