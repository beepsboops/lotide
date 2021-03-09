const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F44D) + ` Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(String.fromCodePoint(0x1F4A9) + ` Assertion Failed: ${actual} !== ${expected}`);
  } return assertEqual;
};

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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) { // removed === true during refactor
    console.log(String.fromCodePoint(0x1F44D) + ` Assertion Passed`);
  } else {
    console.log(String.fromCodePoint(0x1F4A9) + ` Assertion Failed`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);