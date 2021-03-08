const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F44D, 0x1F44D, 0x1F44D) + ` Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(String.fromCodePoint(0x1F4A9, 0x1F4A9, 0x1F4A9) + ` Assertion Failed: ${actual} !== ${expected}`);
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

/*
PSUEDO CODE

Loop through sentence using for loop

  Would this work? -> Count how many unique elements

  Would this work? -> Create this same number of new arrays

  Would this work? -> Arrays are tied to their corresponding element

Inside loop, for every NEW element encoutnered, create an array

  definte xArray, where x corresponds with [i]
if sentence[i] = xArray
  push elemnt into xArray

if element in sentence IS NOT in results {} push element index into it's corresponding array

else if element in sentence IS in results {}, push element index into existing array

return results


BEFORE REFACTOR

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    console.log(char)
    if (!results[char] && char !== " ") {
      results[char] = [i];
      console.log(results[char])
    } else if (char === " ") {
    } else {
      results[char].push(i);
    }


*/

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char !== " ") {
      if (!results[char]) {
        results[char] = [];
      }
      results[char].push(i);
    }
    
    // if (char === results[i])
    // results[char] = [i]
    // if element value does not exist in results or some array ,  ++
    // if (sentence[i] === results) {}

    // if (!(sentence[i] in results) && (sentence[i] != " ")) {
  //     results[sentence[i]] = [i];
  //   }
  }
  return results;
};

// console.log(letterPositions("hello"))
console.log(letterPositions("lighthouse in the house"))

// EXAMPLE RESULTS

// console.log(letterPositions("lighthouse in the house"))
// { 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }
