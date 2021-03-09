const eqArrays = require('./eqArrays');

// COPIED AND MODIFIED FROM EQARRAYS
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) { // removed === true during refactor
    console.log(String.fromCodePoint(0x1F44D) + ` Assertion Passed`);
  } else {
    console.log(String.fromCodePoint(0x1F4A9) + ` Assertion Failed`);
  }
};

module.exports = assertArraysEqual;