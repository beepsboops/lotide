const inspect = require('util').inspect;

const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(String.fromCodePoint(0x1F44D) + ` Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(String.fromCodePoint(0x1F4A9) + ` Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

console.log(assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' })); // Should be true
console.log(assertObjectsEqual({ a: '1', b: 2 },{ b: 4, a: '3' })); // Should be false