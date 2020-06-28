# Debuggercises 

> 6/28/2020, 5:00:23 PM 

## [exercises](../../README.md)/[19-implicit-coercion](../README.md)/1-write-tests-arithmetic 

- [/division.js](#divisionjs) - _pass_ 
- [/multiplication.js](#multiplicationjs) - _pass_ 
- [/remainder.js](#remainderjs) - _pass_ 
- [/subtraction.js](#subtractionjs) - _pass_ 
- [/unary-minus.js](#unary-minusjs) - _pass_ 
- [/unary-plus.js](#unary-plusjs) - _pass_ 
---

## /division.js 

> pass 
>
> [review source](../../../exercises/19-implicit-coercion/1-write-tests-arithmetic/division.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
+ PASS: Test 7
+ PASS: Test 8
+ PASS: Test 9
```

```js
'use strict';

// a / b
// cast both values to Number and do division
//  what happens when you divide by 0?
//  what happens when you divide by NaN?
//  what happens when you divide by Infinity?

const left = (left) => Number(left);
const right = (right) => Number(right);

const divide = (left, right) => left / right;

const _1_a = '1'; // 1
const _1_b = 1;
const _1_expect = 1;
const _1_native = divide(left(_1_a), right(_1_b));
console.assert(Object.is(_1_expect, _1_native), 'Test 1');

const _2_a = '1';
const _2_b = null; // Number(null) => 0
const _2_expect = Infinity;
const _2_native = divide(left(_2_a), right(_2_b));
console.assert(Object.is(_2_expect, _2_native), 'Test 2');

const _3_a = false; //0
const _3_b = null; //0
const _3_expect = NaN;
const _3_native = divide(left(_3_a), right(_3_b));
console.assert(Object.is(_3_expect, _3_native), 'Test 3');

const _4_a = '12'; //12
const _4_b = false; //0
const _4_expect = Infinity;
const _4_native = divide(left(_4_a), right(_4_b));
console.assert(Object.is(_4_expect, _4_native), 'Test 4');

const _5_a = false; //0
const _5_b = true; //1
const _5_expect = 0;
const _5_native = divide(left(_5_a), right(_5_b));
console.assert(Object.is(_5_expect, _5_native), 'Test 5');

const _6_a = '13'; //13
const _6_b = Infinity; //infinity
const _6_expect = 0;
const _6_native = divide(left(_6_a), right(_6_b));
console.assert(Object.is(_6_expect, _6_native), 'Test 6');

const _7_a = '18'; //18
const _7_b = 'aa'; //NaN
const _7_expect = NaN;
const _7_native = divide(left(_7_a), right(_7_b));
console.assert(Object.is(_7_expect, _7_native), 'Test 7');

const _8_a = 'hello'; //NaN
const _8_b = 'goodbye'; //NaN
const _8_expect = NaN;
const _8_native = divide(left(_8_a), right(_8_b));
console.assert(Object.is(_8_expect, _8_native), 'Test 8');

const _9_a = undefined; //NaN
const _9_b = ''; //0
const _9_expect = NaN;
const _9_native = divide(left(_9_a), right(_9_b));
console.assert(Object.is(_9_expect, _9_native), 'Test 9');

```

[TOP](#debuggercises)

---

## /multiplication.js 

> pass 
>
> [review source](../../../exercises/19-implicit-coercion/1-write-tests-arithmetic/multiplication.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
+ PASS: Test 7
+ PASS: Test 8
+ PASS: Test 9
```

```js
'use strict';

// a * b
// cast both values to Number and do multiplication

const multiply = (left, right) => Number(left) * Number(right);

const _1_a = '1'; //1
const _1_b = 1;
const _1_expect = 1;
const _1_native = multiply(_1_a, _1_b);
console.assert(Object.is(_1_expect, _1_native), 'Test 1');

const _2_a = NaN; //NaN
const _2_b = null; //0
const _2_expect = NaN;
const _2_native = multiply(_2_a, _2_b);
console.assert(Object.is(_2_expect, _2_native), 'Test 2');

const _3_a = false; //0
const _3_b = null; //0
const _3_expect = 0;
const _3_native = multiply(_3_a, _3_b);
console.assert(Object.is(_3_expect, _3_native), 'Test 3');

const _4_a = '0.0'; //0
const _4_b = false; //0
const _4_expect = 0;
const _4_native = multiply(_4_a, _4_b);
console.assert(Object.is(_4_expect, _4_native), 'Test 4');

const _5_a = false; //0
const _5_b = true; //1
const _5_expect = 0;
const _5_native = multiply(_5_a, _5_b);
console.assert(Object.is(_5_expect, _5_native), 'Test 5');

const _6_a = '13'; //13
const _6_b = true; //1
const _6_expect = 13;
const _6_native = multiply(_6_a, _6_b);
console.assert(Object.is(_6_expect, _6_native), 'Test 6');

const _7_a = 'aa'; //NaN
const _7_b = '18'; // 18
const _7_expect = NaN;
const _7_native = multiply(_7_a, _7_b);
console.assert(Object.is(_7_expect, _7_native), 'Test 7');

const _8_a = 'aa'; //NAN
const _8_b = 'aa'; //NaN
const _8_expect = NaN;
const _8_native = multiply(_8_a, _8_b);
console.assert(Object.is(_8_expect, _8_native), 'Test 8');

const _9_a = undefined; //NAN
const _9_b = 'hellow'; //NaN
const _9_expect = NaN;
const _9_native = multiply(_9_a, _9_b);
console.assert(Object.is(_9_expect, _9_native), 'Test 9');

```

[TOP](#debuggercises)

---

## /remainder.js 

> pass 
>
> [review source](../../../exercises/19-implicit-coercion/1-write-tests-arithmetic/remainder.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
+ PASS: Test 7
+ PASS: Test 8
+ PASS: Test 9
```

```js
'use strict';

// a % b
// cast both values to Number and return the remainder when x is divided by y
//  what happens when you use Infinity?
//  what happens when you use 0?
//  what happens when you use NaN?

const remainder = (left, right) => Math.ceil(Number(left) % Number(right));

const _1_a = '8'; //8
const _1_b = 2;
const _1_expect = 0;
const _1_native = remainder(_1_a, _1_b);
console.assert(Object.is(_1_expect, _1_native), 'Test 1');

const _2_a = '2'; //2
const _2_b = 8; //8
const _2_expect = 2;
const _2_native = remainder(_2_a, _2_b);
console.assert(Object.is(_2_expect, _2_native), 'Test 2');

const _3_a = '5'; //5
const _3_b = 2.6;
const _3_expect = 3;
const _3_native = remainder(_3_a, _3_b);
console.assert(Object.is(_3_expect, _3_native), 'Test 3');

const _4_a = '5'; // find a different value than above
const _4_b = 2.7;
const _4_expect = 3;
const _4_native = remainder(_4_a, _4_b);
console.assert(Object.is(_4_expect, _4_native), 'Test 4');

const _5_a = '5'; // find a different value than above
const _5_b = 2.8;
const _5_expect = 3;
const _5_native = remainder(_5_a, _5_b);
console.assert(Object.is(_5_expect, _5_native), 'Test 5');

const _6_a = 8;
const _6_b = null; //0
const _6_expect = NaN;
const _6_native = remainder(_6_a, _6_b);
console.assert(Object.is(_6_expect, _6_native), 'Test 6');

const _7_a = 0;
const _7_b = 8;
const _7_expect = 0;
const _7_native = remainder(_7_a, _7_b);
console.assert(Object.is(_7_expect, _7_native), 'Test 7');

const _8_a = Infinity;
const _8_b = 8;
const _8_expect = NaN;
const _8_native = remainder(_8_a, _8_b);
console.assert(Object.is(_8_expect, _8_native), 'Test 8');

const _9_a = undefined; //NaN
const _9_b = '4'; //4
const _9_expect = NaN;
const _9_native = remainder(_9_a, _9_b);
console.assert(Object.is(_9_expect, _9_native), 'Test 9');

```

[TOP](#debuggercises)

---

## /subtraction.js 

> pass 
>
> [review source](../../../exercises/19-implicit-coercion/1-write-tests-arithmetic/subtraction.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
+ PASS: Test 7
+ PASS: Test 8
+ PASS: Test 9
```

```js
'use strict';

// a - b
// cast both values to Number and do subtraction

const subtract = (left, right) => Number(left) - Number(right);

const _1_a = '1'; //1
const _1_b = 1;
const _1_expect = 0;
const _1_native = subtract(_1_a, _1_b);
console.assert(Object.is(_1_expect, _1_native), 'Test 1');

const _2_a = '';
const _2_b = null; //0
const _2_expect = 0;
const _2_native = subtract(_2_a, _2_b);
console.assert(Object.is(_2_expect, _2_native), 'Test 2');

const _3_a = false; //0
const _3_b = null; //0
const _3_expect = 0;
const _3_native = subtract(_3_a, _3_b);
console.assert(Object.is(_3_expect, _3_native), 'Test 3');

const _4_a = '0.0'; //0
const _4_b = false; //0
const _4_expect = 0;
const _4_native = subtract(_4_a, _4_b);
console.assert(Object.is(_4_expect, _4_native), 'Test 4');

const _5_a = false; //0
const _5_b = true; //1
const _5_expect = -1;
const _5_native = subtract(_5_a, _5_b);
console.assert(Object.is(_5_expect, _5_native), 'Test 5');

const _6_a = '13';
const _6_b = true; //1
const _6_expect = 12;
const _6_native = subtract(_6_a, _6_b);
console.assert(Object.is(_6_expect, _6_native), 'Test 6');

const _7_a = 'aa'; //NaN
const _7_b = '18';
const _7_expect = NaN;
const _7_native = subtract(_7_a, _7_b);
console.assert(Object.is(_7_expect, _7_native), 'Test 7');

const _8_a = 'aa'; //NaN
const _8_b = 'aa'; //NaN
const _8_expect = NaN;
const _8_native = subtract(_8_a, _8_b);
console.assert(Object.is(_8_expect, _8_native), 'Test 8');

const _9_a = undefined; // NaN
const _9_b = 'hellow'; // NaN
const _9_expect = NaN;
const _9_native = subtract(_9_a, _9_b);
console.assert(Object.is(_9_expect, _9_native), 'Test 9');

```

[TOP](#debuggercises)

---

## /unary-minus.js 

> pass 
>
> [review source](../../../exercises/19-implicit-coercion/1-write-tests-arithmetic/unary-minus.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
+ PASS: Test 7
+ PASS: Test 8
+ PASS: Test 9
```

```js
'use strict';

// -a
// cast the value to Number and reverses the sign

const unaryMinus = (right) => -right;

const _1_arg = null;
const _1_expect = -0;
const _1_native = unaryMinus(_1_arg);
console.assert(Object.is(_1_expect, _1_native), 'Test 1');

const _2_arg = undefined;
const _2_expect = -NaN;
const _2_native = unaryMinus(_2_arg);
console.assert(Object.is(_2_expect, _2_native), 'Test 2');

const _3_arg = true;
const _3_expect = -1;
const _3_native = unaryMinus(_3_arg);
console.assert(Object.is(_3_expect, _3_native), 'Test 3');

const _4_arg = false;
const _4_expect = -0;
const _4_native = unaryMinus(_4_arg);
console.assert(Object.is(_4_expect, _4_native), 'Test 4');

const _5_arg = '18';
const _5_expect = -18;
const _5_native = unaryMinus(_5_arg);
console.assert(Object.is(_5_expect, _5_native), 'Test 5');

const _6_arg = 'Infinity';
const _6_expect = -Infinity;
const _6_native = unaryMinus(_6_arg);
console.assert(Object.is(_6_expect, _6_native), 'Test 6');

const _7_arg = 'asdf';
const _7_expect = -NaN;
const _7_native = unaryMinus(_7_arg);
console.assert(Object.is(_7_expect, _7_native), 'Test 7');

const _8_arg = '-0.0';
const _8_expect = 0;
const _8_native = unaryMinus(_8_arg);
console.assert(Object.is(_8_expect, _8_native), 'Test 8');

const _9_arg = 'four';
const _9_expect = -NaN;
const _9_native = unaryMinus(_9_arg);
console.assert(Object.is(_9_expect, _9_native), 'Test 9');

```

[TOP](#debuggercises)

---

## /unary-plus.js 

> pass 
>
> [review source](../../../exercises/19-implicit-coercion/1-write-tests-arithmetic/unary-plus.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
+ PASS: Test 7
+ PASS: Test 8
+ PASS: Test 9
```

```js
'use strict';

// +a
// cast the value to Number

const unaryPlus = (right) => +right;

const _1_arg = null;
const _1_expect = 0;
const _1_native = unaryPlus(_1_arg);
console.assert(Object.is(_1_expect, _1_native), 'Test 1');

const _2_arg = undefined;
const _2_expect = NaN;
const _2_native = unaryPlus(_2_arg);
console.assert(Object.is(_2_expect, _2_native), 'Test 2');

const _3_arg = true;
const _3_expect = 1;
const _3_native = unaryPlus(_3_arg);
console.assert(Object.is(_3_expect, _3_native), 'Test 3');

const _4_arg = false;
const _4_expect = 0;
const _4_native = unaryPlus(_4_arg);
console.assert(Object.is(_4_expect, _4_native), 'Test 4');

const _5_arg = '18';
const _5_expect = 18;
const _5_native = unaryPlus(_5_arg);
console.assert(Object.is(_5_expect, _5_native), 'Test 5');

const _6_arg = 'Infinity';
const _6_expect = Infinity;
const _6_native = unaryPlus(_6_arg);
console.assert(Object.is(_6_expect, _6_native), 'Test 6');

const _7_arg = 'asdf';
const _7_expect = NaN;
const _7_native = unaryPlus(_7_arg);
console.assert(Object.is(_7_expect, _7_native), 'Test 7');

const _8_arg = '+0.0';
const _8_expect = 0;
const _8_native = unaryPlus(_8_arg);
console.assert(Object.is(_8_expect, _8_native), 'Test 8');

const _9_arg = 'four';
const _9_expect = NaN;
const _9_native = unaryPlus(_9_arg);
console.assert(Object.is(_9_expect, _9_native), 'Test 9');

```

[TOP](#debuggercises)

