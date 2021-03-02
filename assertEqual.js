// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F44D, 0x1F44D, 0x1F44D) + ' Assertion Passed: ' + actual + ' === ' + expected);
  } else if (actual !== expected) {
    console.log(String.fromCodePoint(0x1F4A9, 0x1F4A9, 0x1F4A9) + ' Assertion Failed: ' + actual + ' !== ' + expected);
  } return assertEqual;
};

//TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual("chocolate", "chocolate"));
console.log(assertEqual(3, 5));
console.log(assertEqual(1, 1));
