// test/assertArraysEqualTest.js
const assertArraysEqual = require('../assertArraysEqual');


// TEST CODE FROM assertArraysEqual.js

assertArraysEqual([1,2,3], [1,2,3]); // identical arrays, should pass
assertArraysEqual([1,2,3], [5,6,7]); // non identical arrays, should fail