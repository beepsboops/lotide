// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F44D) + ` Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(String.fromCodePoint(0x1F4A9) + ` Assertion Failed: ${actual} !== ${expected}`);
  } return assertEqual;
};

module.exports = assertEqual;