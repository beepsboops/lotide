// ORIGINAL EQARRAYS CODE
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    } return true;
  }
};

// COPIED AND MODIFIED FROM EQARRAYS
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) { // removed === true during refactor
    console.log(String.fromCodePoint(0x1F44D) + ` Assertion Passed`);
  } else {
    console.log(String.fromCodePoint(0x1F4A9) + ` Assertion Failed`);
  }
};

assertArraysEqual([1,2,3], [1,2,3]); // identical arrays, should pass
assertArraysEqual([1,2,3], [5,6,7]); // non identical arrays, should fail